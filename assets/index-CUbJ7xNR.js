(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="181",Vi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,Cc=1,Pu=2,Mh=1,bh=2,Fn=3,Vn=0,ke=1,Ke=2,Bn=0,Hi=1,Pc=2,Lc=3,Ic=4,Lu=5,di=100,Iu=101,Du=102,Nu=103,Uu=104,Fu=200,Ou=201,ku=202,Bu=203,Wa=204,Xa=205,zu=206,Vu=207,Hu=208,Gu=209,Wu=210,Xu=211,qu=212,Yu=213,$u=214,qa=0,Ya=1,$a=2,Yi=3,ja=4,Ka=5,Za=6,Ja=7,qo=0,ju=1,Ku=2,ei=0,Zu=1,Ju=2,Qu=3,td=4,ed=5,nd=6,Sh=7,Dc="attached",id="detached",Th=300,$i=301,ji=302,Qa=303,to=304,Gr=306,pi=1e3,Mn=1001,Fr=1002,Be=1003,Eh=1004,Ms=1005,Ie=1006,Cr=1007,bn=1008,En=1009,wh=1010,Ah=1011,Ds=1012,Yo=1013,mi=1014,hn=1015,ns=1016,$o=1017,jo=1018,Ns=1020,Rh=35902,Ch=35899,Ph=1021,Lh=1022,Ze=1023,Us=1026,Fs=1027,Ko=1028,Zo=1029,Jo=1030,Qo=1031,tc=1033,Pr=33776,Lr=33777,Ir=33778,Dr=33779,eo=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,co=37808,lo=37809,ho=37810,uo=37811,fo=37812,po=37813,mo=37814,xo=37815,go=37816,_o=37817,vo=37818,yo=37819,Mo=37820,bo=37821,So=36492,To=36494,Eo=36495,wo=36283,Ao=36284,Ro=36285,Co=36286,Os=2300,ks=2301,Zr=2302,Nc=2400,Uc=2401,Fc=2402,sd=2500,rd=0,Ih=1,Po=2,ad=3200,od=3201,ec=0,cd=1,Qn="",Ae="srgb",Ve="srgb-linear",Or="linear",ae="srgb",Mi=7680,Oc=519,ld=512,hd=513,ud=514,Dh=515,dd=516,fd=517,pd=518,md=519,Lo=35044,kc="300 es",Sn=2e3,kr=2001;function Nh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xd(){const s=Bs("canvas");return s.style.display="block",s}const Bc={};function Br(...s){const t="THREE."+s.shift();console.log(t,...s)}function Mt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Wt(...s){const t="THREE."+s.shift();console.error(t,...s)}function zs(...s){const t=s.join(" ");t in Bc||(Bc[t]=!0,Mt(...s))}function gd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const ws=Math.PI/180,Ki=180/Math.PI;function en(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function nc(s,t){return(s%t+t)%t}function _d(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vd(s,t,e){return s!==t?(e-s)/(t-s):0}function As(s,t,e){return(1-e)*s+e*t}function yd(s,t,e,n){return As(s,t,1-Math.exp(-e*n))}function Md(s,t=1){return t-Math.abs(nc(s,t*2)-t)}function bd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Td(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ed(s,t){return s+Math.random()*(t-s)}function wd(s){return s*(.5-Math.random())}function Ad(s){s!==void 0&&(zc=s);let t=zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rd(s){return s*ws}function Cd(s){return s*Ki}function Pd(s){return(s&s-1)===0&&s!==0}function Ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dd(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),x=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*f,o*h,o*c);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Uh={DEG2RAD:ws,RAD2DEG:Ki,generateUUID:en,clamp:Vt,euclideanModulo:nc,mapLinear:_d,inverseLerp:vd,lerp:As,damp:yd,pingpong:Md,smoothstep:bd,smootherstep:Sd,randInt:Td,randFloat:Ed,randFloatSpread:wd,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:Pd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Dd,normalize:ne,denormalize:cn};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==x){let m=l*d+c*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),_=Math.sin(S);p=Math.sin(p*S)/_,o=Math.sin(o*S)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*f-c*d,t[e+1]=l*x+h*d+c*u-o*f,t[e+2]=c*x+h*f+o*d-l*u,t[e+3]=h*x-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new C,Vc=new wn;class Ft{constructor(t,e,n,i,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=i[0],m=i[3],p=i[6],S=i[1],_=i[4],M=i[7],w=i[2],E=i[5],R=i[8];return r[0]=a*g+o*S+l*w,r[3]=a*m+o*_+l*E,r[6]=a*p+o*M+l*R,r[1]=c*g+h*S+u*w,r[4]=c*m+h*_+u*E,r[7]=c*p+h*M+u*R,r[2]=d*g+f*S+x*w,r[5]=d*m+f*_+x*E,r[8]=d*p+f*M+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=e*u+n*d+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ft,Hc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){const s={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ve]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),s}const Jt=Nd();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class Ud{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=Bs("canvas")),bi.width=t.width,bi.height=t.height;const i=bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fd=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ta(i[a].image)):r.push(ta(i[a]))}else r=ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ud.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let Od=0;const ea=new C;class Re extends vi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Mn,i=Mn,r=Ie,a=bn,o=Ze,l=En,c=Re.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=en(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Mt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Mt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pi:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pi:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Th;Re.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(h+d)/4,R=(u+g)/4,D=(x+m)/4;return _>M&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=R/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=D/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=D/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kd extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Re(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ic(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends kd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ks.subVectors(this.max,ls),Si.subVectors(t.a,ls),Ti.subVectors(t.b,ls),Ei.subVectors(t.c,ls),Wn.subVectors(Ti,Si),Xn.subVectors(Ei,Ti),si.subVectors(Si,Ei);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-si.y,si.x,0];return!na(e,Si,Ti,Ei,Ks)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Si,Ti,Ei,Ks))?!1:(Zs.crossVectors(Wn,Xn),e=[Zs.x,Zs.y,Zs.z],na(e,Si,Ti,Ei,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new C,new C,new C,new C,new C,new C,new C,new C],rn=new C,js=new Gn,Si=new C,Ti=new C,Ei=new C,Wn=new C,Xn=new C,si=new C,ls=new C,Ks=new C,Zs=new C,ri=new C;function na(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ri.fromArray(s,r);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zd=new Gn,hs=new C,ia=new C;class An{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(ia)),this.expandByPoint(hs.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pn=new C,sa=new C,Js=new C,qn=new C,ra=new C,Qs=new C,aa=new C;class is{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=qn.dot(this.direction),l=-qn.dot(Js),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(sa).addScaledVector(Js,d),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){ra.subVectors(e,t),Qs.subVectors(n,t),aa.crossVectors(ra,Qs);let a=this.direction.dot(aa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(Qs.crossVectors(qn,Qs));if(l<0)return null;const c=o*this.direction.dot(ra.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(aa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+x*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,x=c*h,g=c*u;e[0]=d+g*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,x=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=x*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=x*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+x,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Hd)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Yn.crossVectors(n,$e),Yn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Yn.crossVectors(n,$e)),Yn.normalize(),tr.crossVectors($e,Yn),i[0]=Yn.x,i[4]=tr.x,i[8]=$e.x,i[1]=Yn.y,i[5]=tr.y,i[9]=$e.y,i[2]=Yn.z,i[6]=tr.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],S=n[3],_=n[7],M=n[11],w=n[15],E=i[0],R=i[4],D=i[8],b=i[12],y=i[1],P=i[5],N=i[9],k=i[13],G=i[2],W=i[6],q=i[10],Q=i[14],H=i[3],nt=i[7],O=i[11],J=i[15];return r[0]=a*E+o*y+l*G+c*H,r[4]=a*R+o*P+l*W+c*nt,r[8]=a*D+o*N+l*q+c*O,r[12]=a*b+o*k+l*Q+c*J,r[1]=h*E+u*y+d*G+f*H,r[5]=h*R+u*P+d*W+f*nt,r[9]=h*D+u*N+d*q+f*O,r[13]=h*b+u*k+d*Q+f*J,r[2]=x*E+g*y+m*G+p*H,r[6]=x*R+g*P+m*W+p*nt,r[10]=x*D+g*N+m*q+p*O,r[14]=x*b+g*k+m*Q+p*J,r[3]=S*E+_*y+M*G+w*H,r[7]=S*R+_*P+M*W+w*nt,r[11]=S*D+_*N+M*q+w*O,r[15]=S*b+_*k+M*Q+w*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],g=t[13],m=t[14],p=t[15],S=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,_=x*d*c-h*m*c-x*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-x*u*c+x*o*f-a*g*f-h*o*p+a*u*p,w=x*u*l-h*g*l-x*o*d+a*g*d+h*o*m-a*u*m,E=e*S+n*_+i*M+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=S*R,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=_*R,t[5]=(h*m*r-x*d*r+x*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(x*l*r-a*m*r-x*i*c+e*m*c+a*i*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*R,t[8]=M*R,t[9]=(x*u*r-h*g*r-x*n*f+e*g*f+h*n*p-e*u*p)*R,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=w*R,t[13]=(h*g*i-x*u*i+x*n*d-e*g*d-h*n*m+e*u*m)*R,t[14]=(x*o*i-a*g*i-x*n*l+e*g*l+a*n*m-e*o*m)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,g=a*h,m=a*u,p=o*u,S=l*c,_=l*h,M=l*u,w=n.x,E=n.y,R=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+M)*w,i[2]=(x-_)*w,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(x+_)*R,i[9]=(m-S)*R,i[10]=(1-(d+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),o=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);const c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Sn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Sn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===kr)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Sn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Sn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===kr)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new C,an=new Bt,Vd=new C(0,0,0),Hd=new C(1,1,1),Yn=new C,tr=new C,$e=new C,Wc=new Bt,Xc=new wn;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gd=0;const qc=new C,Ai=new wn,Ln=new Bt,er=new C,us=new C,Wd=new C,Xd=new wn,Yc=new C(1,0,0),$c=new C(0,1,0),jc=new C(0,0,1),Kc={type:"added"},qd={type:"removed"},Ri={type:"childadded",child:null},oa={type:"childremoved",child:null};class fe extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new pn,n=new wn,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ft}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(us,er,this.up):Ln.lookAt(er,us,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new C,In=new C,ca=new C,Dn=new C,Ci=new C,Pi=new C,Zc=new C,la=new C,ha=new C,ua=new C,da=new ee,fa=new ee,pa=new ee;class ln{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),In.subVectors(n,e),ca.subVectors(t,e);const a=on.dot(on),o=on.dot(In),l=on.dot(ca),c=In.dot(In),h=In.dot(ca),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(da,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),In.subVectors(t,e),on.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),In.subVectors(this.a,this.b),on.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ci.subVectors(i,n),Pi.subVectors(r,n),la.subVectors(t,n);const l=Ci.dot(la),c=Pi.dot(la);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,i);const h=Ci.dot(ha),u=Pi.dot(ha);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);ua.subVectors(t,r);const f=Ci.dot(ua),x=Pi.dot(ua);if(x>=0&&f<=x)return e.copy(r);const g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Pi,o);const m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return Zc.subVectors(r,i),o=(u-h)/(u-h+(f-x)),e.copy(i).addScaledVector(Zc,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},nr={h:0,s:0,l:0};function ma(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=nc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ma(a,r,t+1/3),this.g=ma(a,r,t),this.b=ma(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&Mt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Mt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Mt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Mt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Jt.workingToColorSpace(Le.copy(this),t),Math.round(Vt(Le.r*255,0,255))*65536+Math.round(Vt(Le.g*255,0,255))*256+Math.round(Vt(Le.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ae){Jt.workingToColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(nr);const n=As($n.h,nr.h,e),i=As($n.s,nr.s,e),r=As($n.l,nr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Pt;Pt.NAMES=Oh;let Yd=0;class fn extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=en(),this.name="",this.type="Material",this.blending=Hi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Mt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Mt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class un extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,ir=new ct;let $d=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class kh extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jd=0;const Qe=new Bt,xa=new fe,Li=new C,je=new Gn,ds=new Gn,we=new C;class Ee extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Bh:kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(je.min,ds.min),je.expandByPoint(we),we.addVectors(je.max,ds.max),je.expandByPoint(we)):(je.expandByPoint(ds.min),je.expandByPoint(ds.max))}je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),we.add(Li)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,u=new C,d=new ct,f=new ct,x=new ct,g=new C,m=new C;function p(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),x.sub(d);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(P),o[D].add(g),o[b].add(g),o[y].add(g),l[D].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,b=S.length;D<b;++D){const y=S[D],P=y.start,N=y.count;for(let k=P,G=P+N;k<G;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const _=new C,M=new C,w=new C,E=new C;function R(D){w.fromBufferAttribute(i,D),E.copy(w);const b=o[D];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(E,b);const P=M.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,b=S.length;D<b;++D){const y=S[D],P=y.start,N=y.count;for(let k=P,G=P+N;k<G;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new ze(d,h,u)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new Bt,ai=new is,sr=new An,Qc=new C,rr=new C,ar=new C,or=new C,ga=new C,cr=new C,tl=new C,lr=new C;class Kt extends fe{constructor(t=new Ee,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,t),a?cr.addScaledVector(ga,h):cr.addScaledVector(ga.sub(e),h))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(sr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(sr,Qc)===null||ai.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,w=_;M<w;M+=3){const E=o.getX(M),R=o.getX(M+1),D=o.getX(M+2);i=hr(this,p,t,n,c,h,u,E,R,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);i=hr(this,a,t,n,c,h,u,S,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,w=_;M<w;M+=3){const E=M,R=M+1,D=M+2;i=hr(this,p,t,n,c,h,u,E,R,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=m,_=m+1,M=m+2;i=hr(this,a,t,n,c,h,u,S,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Kd(s,t,e,n,i,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Vn,o),l===null)return null;lr.copy(o),lr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:s}}function hr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,rr),s.getVertexPosition(l,ar),s.getVertexPosition(c,or);const h=Kd(s,t,e,n,rr,ar,or,tl);if(h){const u=new C;ln.getBarycoord(tl,rr,ar,or,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new ct)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};ln.getNormal(rr,ar,or,d.normal),h.face=d,h.barycoord=u}return h}class dn extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,i,a,2),x("x","z","y",1,-1,t,n,-e,i,a,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function x(g,m,p,S,_,M,w,E,R,D,b){const y=M/R,P=w/D,N=M/2,k=w/2,G=E/2,W=R+1,q=D+1;let Q=0,H=0;const nt=new C;for(let O=0;O<q;O++){const J=O*P-k;for(let bt=0;bt<W;bt++){const Gt=bt*y-N;nt[g]=Gt*S,nt[m]=J*_,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[p]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(bt/R),u.push(1-O/D),Q+=1}}for(let O=0;O<D;O++)for(let J=0;J<R;J++){const bt=d+J+W*O,Gt=d+J+W*(O+1),qt=d+(J+1)+W*(O+1),Zt=d+(J+1)+W*O;l.push(bt,Gt,Zt),l.push(Gt,qt,Zt),H+=6}o.addGroup(f,H,b),f+=H,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Zi(s[e]);for(const i in n)t[i]=n[i]}return t}function Zd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Jd={clone:Zi,merge:Ue};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vh extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new C,el=new ct,nl=new ct;class Oe extends Vh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Di=1;class ef extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(Ii,Di,t,e);i.layers=this.layers,this.add(i);const r=new Oe(Ii,Di,t,e);r.layers=this.layers,this.add(r);const a=new Oe(Ii,Di,t,e);a.layers=this.layers,this.add(a);const o=new Oe(Ii,Di,t,e);o.layers=this.layers,this.add(o);const l=new Oe(Ii,Di,t,e);l.layers=this.layers,this.add(l);const c=new Oe(Ii,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hh extends Re{constructor(t=[],e=$i,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Hh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Bn});r.uniforms.tEquirect.value=e;const a=new Kt(i,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ie),new ef(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Tn extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sf={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gh extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new C;class rc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new C,sl=new ee,rl=new ee,af=new C,al=new Bt,ur=new C,va=new An,ol=new Bt,ya=new is;class of extends Kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new Bt,this.bindMatrixInverse=new Bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ur),this.boundingBox.expandByPoint(ur)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ur),this.boundingSphere.expandByPoint(ur)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),t.ray.intersectsSphere(va)!==!1&&(ol.copy(i).invert(),ya.copy(t.ray).applyMatrix4(ol),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():Mt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;sl.fromBufferAttribute(i.attributes.skinIndex,t),rl.fromBufferAttribute(i.attributes.skinWeight,t),il.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=rl.getComponent(r);if(a!==0){const o=sl.getComponent(r);al.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(af.copy(il).applyMatrix4(al),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Wh extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wr extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Be,h=Be,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new Bt,cf=new Bt;class ac{constructor(t=[],e=[]){this.uuid=en(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Mt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:cf;cl.multiplyMatrices(o,e[r]),cl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ac(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Wr(e,t,t,Ze,hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(Mt("Skeleton: No bone found with UUID:",r),a=new Wh),this.bones.push(a),this.boneInverses.push(new Bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Io extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new Bt,ll=new Bt,dr=[],hl=new Gn,lf=new Bt,fs=new Kt,ps=new An;class Xh extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),hl.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ps.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),ll.multiplyMatrices(n,Ni),fs.matrixWorld=ll,fs.raycast(t,dr);for(let a=0,o=dr.length;a<o;a++){const l=dr[a];l.instanceId=r,l.object=this,e.push(l)}dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(i*this.count),i,this.count,Ko,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new C,hf=new C,uf=new Ft;class Jn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ma.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new An,df=new ct(.5,.5),fr=new C;class oc{constructor(t=new Jn,e=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],S=r[12],_=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-a,f-h,p-x,w-S).normalize(),i[1].setComponents(c+a,f+h,p+x,w+S).normalize(),i[2].setComponents(c+o,f+u,p+g,w+_).normalize(),i[3].setComponents(c-o,f-u,p-g,w-_).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,w-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-M).normalize(),e===Sn)i[5].setComponents(c+l,f+d,p+m,w+M).normalize();else if(e===kr)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);const e=df.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zr=new C,Vr=new C,ul=new Bt,ms=new is,pr=new An,ba=new C,dl=new C;class Xr extends fe{constructor(t=new Ee,e=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zr.fromBufferAttribute(e,i-1),Vr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zr.distanceTo(Vr);t.setAttribute("lineDistance",new ce(n,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;ul.copy(i).invert(),ms.copy(t.ray).applyMatrix4(ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=h.getX(g),S=h.getX(g+1),_=mr(this,t,ms,l,p,S,g);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(f),p=mr(this,t,ms,l,g,m,x-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=mr(this,t,ms,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=mr(this,t,ms,l,x-1,f,x-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mr(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(zr.fromBufferAttribute(o,i),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(zr,Vr,ba,dl)>n)return;ba.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ba);if(!(c<t.near||c>t.far))return{distance:c,point:dl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const fl=new C,pl=new C;class ff extends Xr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)fl.fromBufferAttribute(e,i),pl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);t.setAttribute("lineDistance",new ce(n,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pf extends Xr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class qh extends fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ml=new Bt,Do=new is,xr=new An,gr=new C;class mf extends fe{constructor(t=new Ee,e=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;ml.copy(i).invert(),Do.copy(t.ray).applyMatrix4(ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,g=f;x<g;x++){const m=c.getX(x);gr.fromBufferAttribute(u,m),xl(gr,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,g=f;x<g;x++)gr.fromBufferAttribute(u,x),xl(gr,x,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xl(s,t,e,n,i,r,a){const o=Do.distanceSqToPoint(s);if(o<e){const l=new C;Do.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yh extends Re{constructor(t,e,n=mi,i,r,a,o=Be,l=Be,c,h=Us,u=1){if(h!==Us&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $h extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lc extends Ee{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,x=n*2+r,g=i+1,m=new C,p=new C;for(let S=0;S<=x;S++){let _=0,M=0,w=0,E=0;if(S<=n){const b=S/n,y=b*Math.PI/2;M=-h-t*Math.cos(y),w=t*Math.sin(y),E=-t*Math.cos(y),_=b*u}else if(S<=n+r){const b=(S-n)/r;M=-h+b*e,w=t,E=0,_=u+b*d}else{const b=(S-n-r)/n,y=b*Math.PI/2;M=h+t*Math.sin(y),w=t*Math.cos(y),E=t*Math.sin(y),_=u+d+b*u}const R=Math.max(0,Math.min(1,_/f));let D=0;S===0?D=.5/i:S===x&&(D=-.5/i);for(let b=0;b<=i;b++){const y=b/i,P=y*Math.PI*2,N=Math.sin(P),k=Math.cos(P);p.x=-w*k,p.y=M,p.z=w*N,o.push(p.x,p.y,p.z),m.set(-w*k,E,w*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+D,R)}if(S>0){const b=(S-1)*g;for(let y=0;y<i;y++){const P=b+y,N=b+y+1,k=S*g+y,G=S*g+y+1;a.push(P,N,k),a.push(N,G,k)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Vs extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let x=0;const g=[],m=n/2;let p=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function S(){const M=new C,w=new C;let E=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const b=[],y=D/r,P=y*(e-t)+t;for(let N=0;N<=i;N++){const k=N/i,G=k*l+o,W=Math.sin(G),q=Math.cos(G);w.x=P*W,w.y=-y*n+m,w.z=P*q,u.push(w.x,w.y,w.z),M.set(W,R,q).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-y),b.push(x++)}g.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){const y=g[b][D],P=g[b+1][D],N=g[b+1][D+1],k=g[b][D+1];(t>0||b!==0)&&(h.push(y,P,k),E+=3),(e>0||b!==r-1)&&(h.push(P,N,k),E+=3)}c.addGroup(p,E,0),p+=E}function _(M){const w=x,E=new ct,R=new C;let D=0;const b=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),x++;const P=x;for(let N=0;N<=i;N++){const G=N/i*l+o,W=Math.cos(G),q=Math.sin(G);R.x=b*q,R.y=m*y,R.z=b*W,u.push(R.x,R.y,R.z),d.push(0,y,0),E.x=W*.5+.5,E.y=q*.5*y+.5,f.push(E.x,E.y),x++}for(let N=0;N<i;N++){const k=w+N,G=P+N;M===!0?h.push(G,G+1,k):h.push(G+1,G,k),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Mt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ct:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new Bt;for(let f=0;f<=t;f++){const x=f/t;i[f]=this.getTangentAt(x,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Vt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],f*x)),a[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends Rn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xf extends hc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const _r=new C,Sa=new uc,Ta=new uc,Ea=new uc;class jh extends Rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),c=_r);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Sa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,g,m),Ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,g,m),Ea.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ea.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sa.calc(l),Ta.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function gf(s,t){const e=1-s;return e*e*t}function _f(s,t){return 2*(1-s)*s*t}function vf(s,t){return s*s*t}function Rs(s,t,e,n){return gf(s,t)+_f(s,e)+vf(s,n)}function yf(s,t){const e=1-s;return e*e*e*t}function Mf(s,t){const e=1-s;return 3*e*e*s*t}function bf(s,t){return 3*(1-s)*s*s*t}function Sf(s,t){return s*s*s*t}function Cs(s,t,e,n,i){return yf(s,t)+Mf(s,e)+bf(s,n)+Sf(s,i)}class Kh extends Rn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,i.x,r.x,a.x,o.x),Cs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tf extends Rn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,i.x,r.x,a.x,o.x),Cs(t,i.y,r.y,a.y,o.y),Cs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends Rn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends Rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Rn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,i.x,r.x,a.x),Rs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Rn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,i.x,r.x,a.x),Rs(t,i.y,r.y,a.y),Rs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(gl(o,l.x,c.x,h.x,u.x),gl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var No=Object.freeze({__proto__:null,ArcCurve:xf,CatmullRomCurve3:jh,CubicBezierCurve:Kh,CubicBezierCurve3:Tf,EllipseCurve:hc,LineCurve:Zh,LineCurve3:Ef,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Qh,SplineCurve:tu});class wf extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new No[i.type]().fromJSON(i))}return this}}class _l extends wf{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Jh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Kh(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new hc(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eu extends _l{constructor(t){super(t),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new _l().fromJSON(i))}return this}}function Af(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=nu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=If(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<i;d+=e){const f=s[d],x=s[d+1];f<o&&(o=f),x<l&&(l=x),f>h&&(h=f),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Hs(r,a,e,o,l,c,0),a}function nu(s,t,e,n,i){let r;if(i===Gf(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=vl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vl(a/n|0,s[a],s[a+1],r);return r&&Ji(r,r.next)&&(Ws(r),r=r.next),r}function gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ji(e,e.next)||_e(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Of(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Cf(s,n,i,r):Rf(s)){t.push(l.i,s.i,c.i),Ws(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Pf(gi(s),t),Hs(s,t,e,n,i,r,2)):a===2&&Lf(s,t,e,n,i,r):Hs(gi(s),t,e,n,i,r,1);break}}}function Rf(s){const t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&bs(i,o,r,l,a,c,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Cf(s,t,e,n){const i=s.prev,r=s,a=s.next;if(_e(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),x=Math.min(h,u,d),g=Math.max(o,l,c),m=Math.max(h,u,d),p=Uo(f,x,t,e,n),S=Uo(g,m,t,e,n);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=p&&M&&M.z<=S;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&bs(o,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=g&&M.y>=x&&M.y<=m&&M!==i&&M!==a&&bs(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&bs(o,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=g&&M.y>=x&&M.y<=m&&M!==i&&M!==a&&bs(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Pf(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ji(n,i)&&su(n,e,e.next,i)&&Gs(n,i)&&Gs(i,n)&&(t.push(n.i,e.i,i.i),Ws(e),Ws(e.next),e=s=i),e=e.next}while(e!==s);return gi(e)}function Lf(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zf(a,o)){let l=ru(a,o);a=gi(a,a.next),l=gi(l,l.next),Hs(a,t,e,n,i,r,0),Hs(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function If(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=nu(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Bf(c))}i.sort(Df);for(let r=0;r<i.length;r++)e=Nf(i[r],e);return e}function Df(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Nf(s,t){const e=Uf(s,t);if(!e)return t;const n=ru(e,s);return gi(n,n.next),gi(e,e.next)}function Uf(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Ji(s,e))return e;do{if(Ji(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&iu(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Gs(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ff(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ff(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function Of(s,t,e,n){let i=s;do i.z===0&&(i.z=Uo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,kf(i)}function kf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Uo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Bf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function iu(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function bs(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&iu(s,t,e,n,i,r,a,o)}function zf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Vf(s,t)&&(Gs(s,t)&&Gs(t,s)&&Hf(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||Ji(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ji(s,t){return s.x===t.x&&s.y===t.y}function su(s,t,e,n){const i=yr(_e(s,t,e)),r=yr(_e(s,t,n)),a=yr(_e(e,n,s)),o=yr(_e(e,n,t));return!!(i!==r&&a!==o||i===0&&vr(s,e,t)||r===0&&vr(s,n,t)||a===0&&vr(e,s,n)||o===0&&vr(e,t,n))}function vr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function yr(s){return s>0?1:s<0?-1:0}function Vf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&su(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Gs(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function Hf(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ru(s,t){const e=Fo(s.i,s.x,s.y),n=Fo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vl(s,t,e,n){const i=Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gf(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Wf{static triangulate(t,e,n=2){return Af(t,e,n)}}class Ps{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ps.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];yl(t),Ml(n,t);let a=t.length;e.forEach(yl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Ml(n,e[l]);const o=Wf.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ml(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Xs extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let _=0;_<c;_++){const M=_*u-r;x.push(M,-S,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const _=S+c*p,M=S+c*(p+1),w=S+1+c*(p+1),E=S+1+c*p;f.push(_,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class dc extends Ee{constructor(t=new eu([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(i,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const x=d.holes;Ps.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=x.length;m<p;m++){const S=x[m];Ps.isClockWise(S)===!0&&(x[m]=S.reverse())}const g=Ps.triangulateShape(f,x);for(let m=0,p=x.length;m<p;m++){const S=x[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];i.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=g.length;m<p;m++){const S=g[m],_=S[0]+u,M=S[1]+u,w=S[2]+u;n.push(_,M,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Xf(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new dc(n,t.curveSegments)}}function Xf(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class fc extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const E=w/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+M,1-_),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const _=h[p][S+1],M=h[p][S],w=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&f.push(_,M,E),(p!==n-1||l<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(g,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pc extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let x=0;x<=i;x++){const g=x/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=i;x++){const g=(i+1)*f+x-1,m=(i+1)*(f-1)+x-1,p=(i+1)*(f-1)+x,S=(i+1)*f+x;a.push(g,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mc extends Ee{constructor(t=new Qh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ct;let h=new C;const u=[],d=[],f=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function g(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),p()}function m(_){h=t.getPointAt(_/e,h);const M=a.normals[_],w=a.binormals[_];for(let E=0;E<=i;E++){const R=E/i*Math.PI*2,D=Math.sin(R),b=-Math.cos(R);l.x=b*M.x+D*w.x,l.y=b*M.y+D*w.y,l.z=b*M.z+D*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let M=1;M<=i;M++){const w=(i+1)*(_-1)+(M-1),E=(i+1)*_+(M-1),R=(i+1)*_+M,D=(i+1)*(_-1)+M;x.push(w,E,D),x.push(E,R,D)}}function S(){for(let _=0;_<=e;_++)for(let M=0;M<=i;M++)c.x=_/e,c.y=M/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new mc(new No[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class nn extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mn extends nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qf extends fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yf extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $f extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jf extends cc{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Mr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Kf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zf(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function bl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function au(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class qs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jf extends qs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,o=2*e-n;break;case Fc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=t,l=2*n-e;break;case Fc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(i-e),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,_=(-1-f)*m+(1.5+f)*g+.5*x,M=f*m-f*g;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[c+w]+_*a[l+w]+M*a[u+w];return r}}class Qf extends qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class tp extends qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class xn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case ks:e=this.InterpolantFactoryMethodLinear;break;case Zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Mt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Kf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){const g=e[u+x];if(g!==e[d+x]||g!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=ks;class ss extends xn{constructor(t,e,n){super(t,e,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Os;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends xn{constructor(t,e,n,i){super(t,e,n,i)}}ou.prototype.ValueTypeName="color";class Qi extends xn{constructor(t,e,n,i){super(t,e,n,i)}}Qi.prototype.ValueTypeName="number";class ep extends qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)wn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ts extends xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ep(this.times,this.values,this.getValueSize(),t)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends xn{constructor(t,e,n){super(t,e,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Os;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends xn{constructor(t,e,n,i){super(t,e,n,i)}}es.prototype.ValueTypeName="vector";class np{constructor(t="",e=-1,n=[],i=sd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=en(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(sp(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Zf(l);l=bl(l,1,h),c=bl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Qi(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(Mt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Wt("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,x,g){if(f.length!==0){const m=[],p=[];au(f,m,p,x),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)f[d[x].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let S=0;S!==d[x].morphTargets.length;++S){const _=d[x];m.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new Qi(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(es,f+".position",d,"pos",i),n(ts,f+".quaternion",d,"rot",i),n(es,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function ip(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return ou;case"quaternion":return ts;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ip(s.type);if(s.times===void 0){const e=[],n=[];au(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const kn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rp{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ap=new rp;class as{constructor(t){this.manager=t!==void 0?t:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}as.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class op extends Error{constructor(t,e){super(t),this.response=e}}class cu extends as{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=kn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0){Nn[t].push({onLoad:e,onProgress:n,onError:i});return}Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Mt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Nn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:_,value:M})=>{if(_)p.close();else{g+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:f});for(let E=0,R=h.length;E<R;E++){const D=h[E];D.onProgress&&D.onProgress(w)}p.enqueue(M),S()}},_=>{p.error(_)})}}});return new Response(m)}else throw new op(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{kn.add(`file:${t}`,c);const h=Nn[t];delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ui=new WeakMap;class cp extends as{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=kn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Ui.get(a);u===void 0&&(u=[],Ui.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=Bs("img");function l(){h(),e&&e(this);const u=Ui.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ui.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),kn.remove(`image:${t}`);const d=Ui.get(this)||[];for(let f=0;f<d.length;f++){const x=d[f];x.onError&&x.onError(u)}Ui.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class lp extends as{constructor(t){super(t)}load(t,e,n,i){const r=new Re,a=new cp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class qr extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hp extends qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new Bt,Sl=new C,Tl=new C;class xc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),Tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tl),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class up extends xc{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ki*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class dp extends qr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new up}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const El=new Bt,xs=new C,Aa=new C;class fp extends xc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),Aa.copy(n.position),Aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Aa),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),El.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El,n.coordinateSystem,n.reversedDepth)}}class lu extends qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gc extends Vh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pp extends xc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oo extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ls{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Ra=new WeakMap;class mp extends as{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Mt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Mt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=kn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{if(Ra.has(a)===!0)i&&i(Ra.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return kn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ra.set(l,c),kn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});kn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _c="\\[\\]\\.:\\/",gp=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",_p="[^"+_c.replace("\\.","")+"]",vp=/((?:WC+[\/:])*)/.source.replace("WC",vc),yp=/(WCOD+)?/.source.replace("WCOD",_p),Mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Sp=new RegExp("^"+vp+yp+Mp+bp+"$"),Tp=["material","materials","bones","map"];class Ep{constructor(t,e,n){const i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,n):new ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(t){const e=Sp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Tp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=Ep;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const wl=new Bt;class Wi{constructor(t,e,n=0,i=1/0){this.ray=new is(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(t,e=!0,n=[]){return ko(t,this,n,e),n.sort(Al),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ko(t[i],this,n,e);return n.sort(Al),n}}function Al(s,t){return s.distance-t.distance}function ko(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)ko(r[a],t,e,!0)}}class Rl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wp extends vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Mt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cl(s,t,e,n){const i=Ap(n);switch(e){case Ph:return s*t;case Ko:return s*t/i.components*i.byteLength;case Zo:return s*t/i.components*i.byteLength;case Jo:return s*t*2/i.components*i.byteLength;case Qo:return s*t*2/i.components*i.byteLength;case Lh:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case tc:return s*t*4/i.components*i.byteLength;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case no:case so:return Math.max(s,16)*Math.max(t,8)/4;case eo:case io:return Math.max(s,8)*Math.max(t,8)/2;case ro:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case So:case To:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wo:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ro:case Co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(s){switch(s){case En:case wh:return{byteLength:1,components:1};case Ds:case Ah:case ns:return{byteLength:2,components:1};case $o:case jo:return{byteLength:2,components:4};case mi:case Yo:case hn:return{byteLength:4,components:1};case Rh:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rp(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,ex=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Np,aomap_fragment:Up,aomap_pars_fragment:Fp,batching_pars_vertex:Op,batching_vertex:kp,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Vp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:$p,color_pars_fragment:jp,color_pars_vertex:Kp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:cm,envmap_pars_fragment:lm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Em,lights_physical_fragment:wm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Nm,map_fragment:Um,map_pars_fragment:Fm,map_particle_fragment:Om,map_particle_pars_fragment:km,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Vm,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:jm,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:o0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:x0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:b0,transmission_pars_fragment:S0,uv_pars_fragment:T0,uv_pars_vertex:E0,uv_vertex:w0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:I0,cube_frag:D0,depth_vert:N0,depth_frag:U0,distanceRGBA_vert:F0,distanceRGBA_frag:O0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:V0,meshbasic_vert:H0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:j0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:tx,meshtoon_frag:ex,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ax,sprite_frag:ox},ht={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},yn={basic:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ue([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ue([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ue([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ue([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ue([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ue([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ue([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ue([ht.lights,ht.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};yn.physical={uniforms:Ue([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const br={r:0,b:0,g:0},ci=new pn,cx=new Bt;function lx(s,t,e,n,i,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function g(_){let M=!1;const w=x(_);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,M){const w=x(M);w&&(w.isCubeTexture||w.mapping===Gr)?(h===void 0&&(h=new Kt(new dn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Zi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(ci)),h.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ae,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Kt(new Xs(2,2),new Hn({name:"BackgroundMaterial",uniforms:Zi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(br,zh(s)),n.buffers.color.setClear(br.r,br.g,br.b,M,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:S}}function hx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,P,N,k,G){let W=!1;const q=u(k,N,P);r!==q&&(r=q,c(r.object)),W=f(y,k,N,G),W&&x(y,k,N,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(y,P,N,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,N){const k=N.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let q=W[k];return q===void 0&&(q=d(l()),W[k]=q),q}function d(y){const P=[],N=[],k=[];for(let G=0;G<e;G++)P[G]=0,N[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,P,N,k){const G=r.attributes,W=P.attributes;let q=0;const Q=N.getAttributes();for(const H in Q)if(Q[H].location>=0){const O=G[H];let J=W[H];if(J===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function x(y,P,N,k){const G={},W=P.attributes;let q=0;const Q=N.getAttributes();for(const H in Q)if(Q[H].location>=0){let O=W[H];O===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(O=y.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),G[H]=J,q++}r.attributes=G,r.attributesNum=q,r.index=k}function g(){const y=r.newAttributes;for(let P=0,N=y.length;P<N;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const N=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;N[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),G[y]!==P&&(s.vertexAttribDivisor(y,P),G[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let N=0,k=P.length;N<k;N++)P[N]!==y[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function _(y,P,N,k,G,W,q){q===!0?s.vertexAttribIPointer(y,P,N,G,W):s.vertexAttribPointer(y,P,N,k,G,W)}function M(y,P,N,k){g();const G=k.attributes,W=N.getAttributes(),q=P.defaultAttributeValues;for(const Q in W){const H=W[Q];if(H.location>=0){let nt=G[Q];if(nt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const O=nt.normalized,J=nt.itemSize,bt=t.get(nt);if(bt===void 0)continue;const Gt=bt.buffer,qt=bt.type,Zt=bt.bytesPerElement,Y=qt===s.INT||qt===s.UNSIGNED_INT||nt.gpuType===Yo;if(nt.isInterleavedBufferAttribute){const K=nt.data,lt=K.stride,Tt=nt.offset;if(K.isInstancedInterleavedBuffer){for(let vt=0;vt<H.locationSize;vt++)p(H.location+vt,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let vt=0;vt<H.locationSize;vt++)m(H.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let vt=0;vt<H.locationSize;vt++)_(H.location+vt,J/H.locationSize,qt,O,lt*Zt,(Tt+J/H.locationSize*vt)*Zt,Y)}else{if(nt.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,nt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let K=0;K<H.locationSize;K++)_(H.location+K,J/H.locationSize,qt,O,J*Zt,J/H.locationSize*K*Zt,Y)}}else if(q!==void 0){const O=q[Q];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(H.location,O);break;case 3:s.vertexAttrib3fv(H.location,O);break;case 4:s.vertexAttrib4fv(H.location,O);break;default:s.vertexAttrib1fv(H.location,O)}}}}S()}function w(){D();for(const y in n){const P=n[y];for(const N in P){const k=P[N];for(const G in k)h(k[G].object),delete k[G];delete P[N]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const N in P){const k=P[N];for(const G in k)h(k[G].object),delete k[G];delete P[N]}delete n[y.id]}function R(y){for(const P in n){const N=n[P];if(N[y.id]===void 0)continue;const k=N[y.id];for(const G in k)h(k[G].object),delete k[G];delete N[y.id]}}function D(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function ux(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];e.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Ze&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==En&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Mt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,maxSamples:E}}function fx(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Jn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,_=S*4;let M=p.clippingState||null;l.value=M,M=h(x,d,_,f);for(let w=0;w!==_;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=f+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==g;++_,M+=4)a.copy(u[_]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function px(s){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=$i:o===to&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ti=4,Pl=[.125,.215,.35,.446,.526,.582],fi=20,mx=512,gs=new gc,Ll=new Pt;let Ca=null,Pa=0,La=0,Ia=!1;const xx=new C;class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=xx}=r;Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,La),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Fi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:ns,format:Ze,colorSpace:Ve,depthBuffer:!1},i=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gx(r)),this._blurMaterial=vx(r,t,e)}return i}_compileMaterial(t){const e=new Kt(new Ee,t);this._renderer.compile(e,gs)}_sceneToCubeUV(t,e,n,i,r){const l=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ll),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new dn,new un({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Ll),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;Fi(i,M*w,_>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$i||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Fi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,gs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const S=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=_x(this._lodMax,S,_)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-ti?n-x+ti:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,Fi(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,gs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Fi(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,gs)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):fi;m>fi&&Mt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let S=0;for(let R=0;R<fi;++R){const D=R/g,b=Math.exp(-D*D/2);p.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const M=this._sizeLods[i],w=3*M*(i>_-ti?i-_+ti:0),E=4*(this._cubeSize-M);Fi(e,w,E,3*M,2*M),l.setRenderTarget(e),l.render(u,gs)}}function gx(s){const t=[],e=[],n=[];let i=s;const r=s-ti+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ti?l=Pl[a-s+ti-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),_=new Float32Array(m*x*f),M=new Float32Array(p*x*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,D=E>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(b,g*x*E),_.set(d,m*x*E);const y=[E,E,E,E,E,E];M.set(y,p*x*E)}const w=new Ee;w.setAttribute("position",new ze(S,g)),w.setAttribute("uv",new ze(_,m)),w.setAttribute("faceIndex",new ze(M,p)),n.push(new Kt(w,null)),i>ti&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Il(s,t,e){const n=new xi(s,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _x(s,t,e){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function vx(s,t,e){const n=new Float32Array(fi),i=new C(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yr(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Dl(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yr(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Nl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Yr(){return`

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
	`}function yx(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===to,h=l===$i||l===ji;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Bo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Bo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&zs("WebGLRenderer: "+n+" extension not supported."),i}}}function bx(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let _=0,M=S.length;_<M;_+=3){const w=S[_+0],E=S[_+1],R=S[_+2];d.push(w,E,E,R,R,w)}}else if(x!==void 0){const S=x.array;g=x.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const w=_+0,E=_+1,R=_+2;d.push(w,E,E,R,R,w)}}else return;const m=new(Nh(d)?Bh:kh)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,x){x!==0&&(s.drawElementsInstanced(n,f,r,d*a,x),e.update(f,n,x))}function h(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];e.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ex(s,t,e){const n=new WeakMap,i=new ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*E*4*u),D=new Fh(R,w,E,u);D.type=hn,D.needsUpdate=!0;const b=M*4;for(let P=0;P<u;P++){const N=p[P],k=S[P],G=_[P],W=w*E*4*P;for(let q=0;q<N.count;q++){const Q=q*b;x===!0&&(i.fromBufferAttribute(N,q),R[W+Q+0]=i.x,R[W+Q+1]=i.y,R[W+Q+2]=i.z,R[W+Q+3]=0),g===!0&&(i.fromBufferAttribute(k,q),R[W+Q+4]=i.x,R[W+Q+5]=i.y,R[W+Q+6]=i.z,R[W+Q+7]=0),m===!0&&(i.fromBufferAttribute(G,q),R[W+Q+8]=i.x,R[W+Q+9]=i.y,R[W+Q+10]=i.z,R[W+Q+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new ct(w,E)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function wx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const uu=new Re,Ul=new Yh(1,1),du=new Fh,fu=new Bd,pu=new Hh,Fl=[],Ol=[],kl=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function os(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fl[i];if(r===void 0&&(r=new Float32Array(i),Fl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $r(s,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ax(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function Px(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Lx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;zl.set(n),s.uniformMatrix2fv(this.addr,!1,zl),Te(e,n)}}function Ix(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;Bl.set(n),s.uniformMatrix3fv(this.addr,!1,Bl),Te(e,n)}}function Dx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;kl.set(n),s.uniformMatrix4fv(this.addr,!1,kl),Te(e,n)}}function Nx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ux(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Fx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function Ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function kx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function Vx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function Hx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ul.compareFunction=Dh,r=Ul):r=uu,e.setTexture2D(t||r,i)}function Gx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fu,i)}function Wx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pu,i)}function Xx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function qx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Lx;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return kx;case 36294:return Bx;case 36295:return zx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(s,t){s.uniform1fv(this.addr,t)}function $x(s,t){const e=os(t,this.size,2);s.uniform2fv(this.addr,e)}function jx(s,t){const e=os(t,this.size,3);s.uniform3fv(this.addr,e)}function Kx(s,t){const e=os(t,this.size,4);s.uniform4fv(this.addr,e)}function Zx(s,t){const e=os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jx(s,t){const e=os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qx(s,t){const e=os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tg(s,t){s.uniform1iv(this.addr,t)}function eg(s,t){s.uniform2iv(this.addr,t)}function ng(s,t){s.uniform3iv(this.addr,t)}function ig(s,t){s.uniform4iv(this.addr,t)}function sg(s,t){s.uniform1uiv(this.addr,t)}function rg(s,t){s.uniform2uiv(this.addr,t)}function ag(s,t){s.uniform3uiv(this.addr,t)}function og(s,t){s.uniform4uiv(this.addr,t)}function cg(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||uu,r[a])}function lg(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||fu,r[a])}function hg(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||pu,r[a])}function ug(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||du,r[a])}function dg(s){switch(s){case 5126:return Yx;case 35664:return $x;case 35665:return jx;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Vl(s,t){s.seq.push(t),s.map[t.id]=t}function xg(s,t,e){const n=s.name,i=n.length;for(Da.lastIndex=0;;){const r=Da.exec(n),a=Da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vl(e,c===void 0?new fg(o,s,t):new pg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new mg(o),Vl(e,u)),e=u}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);xg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Hl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const gg=37297;let _g=0;function vg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Gl=new Ft;function yg(s){Jt._getMatrix(Gl,Jt.workingColorSpace,s);const t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Or:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vg(s.getShaderSource(t),o)}else return r}function Mg(s,t){const e=yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bg(s,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="Cineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case Sh:e="Neutral";break;case ed:e="Custom";break;default:Mt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new C;function Sg(){Jt.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Eg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ss(s){return s!==""}function Xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(s){return s.replace(Ag,Cg)}const Rg=new Map;function Cg(s,t){let e=zt[t];if(e===void 0){const n=Rg.get(t);if(n!==void 0)e=zt[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zo(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(s){return s.replace(Pg,Lg)}function Lg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $l(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ig(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case ji:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Ug(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qo:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function Fg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Og(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ig(e),c=Dg(e),h=Ng(e),u=Ug(e),d=Fg(e),f=Tg(e),x=Eg(r),g=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?zt.tonemapping_pars_fragment:"",e.toneMapping!==ei?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=zo(a),a=Xl(a,e),a=ql(a,e),o=zo(o),o=Xl(o,e),o=ql(o,e),a=Yl(a),o=Yl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+a,M=S+p+o,w=Hl(i,i.VERTEX_SHADER,_),E=Hl(i,i.FRAGMENT_SHADER,M);i.attachShader(g,w),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(w)||"",G=i.getShaderInfoLog(E)||"",W=N.trim(),q=k.trim(),Q=G.trim();let H=!0,nt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,E);else{const O=Wl(i,w,"vertex"),J=Wl(i,E,"fragment");Wt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+O+`
`+J)}else W!==""?Mt("WebGLProgram: Program Info Log:",W):(q===""||Q==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(w),i.deleteShader(E),D=new Nr(i,g),b=wg(i,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,gg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let kg=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zg(t),e.set(t,n)),n}}class zg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Vg(s,t,e,n,i,r,a){const o=new sc,l=new Bg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,N,k){const G=N.fog,W=k.geometry,q=b.isMeshStandardMaterial?N.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),H=Q&&Q.mapping===Gr?Q.image.height:null,nt=x[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&Mt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=O!==void 0?O.length:0;let bt=0;W.morphAttributes.position!==void 0&&(bt=1),W.morphAttributes.normal!==void 0&&(bt=2),W.morphAttributes.color!==void 0&&(bt=3);let Gt,qt,Zt,Y;if(nt){const se=yn[nt];Gt=se.vertexShader,qt=se.fragmentShader}else Gt=b.vertexShader,qt=b.fragmentShader,l.update(b),Zt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const K=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),Tt=k.isInstancedMesh===!0,vt=k.isBatchedMesh===!0,At=!!b.map,ue=!!b.matcap,Ht=!!Q,pe=!!b.aoMap,L=!!b.lightMap,Yt=!!b.bumpMap,$t=!!b.normalMap,he=!!b.displacementMap,_t=!!b.emissiveMap,me=!!b.metalnessMap,wt=!!b.roughnessMap,kt=b.anisotropy>0,A=b.clearcoat>0,v=b.dispersion>0,B=b.iridescence>0,j=b.sheen>0,tt=b.transmission>0,X=kt&&!!b.anisotropyMap,St=A&&!!b.clearcoatMap,ut=A&&!!b.clearcoatNormalMap,Rt=A&&!!b.clearcoatRoughnessMap,yt=B&&!!b.iridescenceMap,et=B&&!!b.iridescenceThicknessMap,rt=j&&!!b.sheenColorMap,Dt=j&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,pt=!!b.specularColorMap,Ut=!!b.specularIntensityMap,I=tt&&!!b.transmissionMap,dt=tt&&!!b.thicknessMap,at=!!b.gradientMap,ot=!!b.alphaMap,it=b.alphaTest>0,Z=!!b.alphaHash,xt=!!b.extensions;let Ot=ei;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const de={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:Gt,fragmentShader:qt,defines:b.defines,customVertexShaderID:Zt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:vt,batchingColor:vt&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ve,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:ue,envMap:Ht,envMapMode:Ht&&Q.mapping,envMapCubeUVHeight:H,aoMap:pe,lightMap:L,bumpMap:Yt,normalMap:$t,displacementMap:d&&he,emissiveMap:_t,normalMapObjectSpace:$t&&b.normalMapType===cd,normalMapTangentSpace:$t&&b.normalMapType===ec,metalnessMap:me,roughnessMap:wt,anisotropy:kt,anisotropyMap:X,clearcoat:A,clearcoatMap:St,clearcoatNormalMap:ut,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:B,iridescenceMap:yt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:rt,sheenRoughnessMap:Dt,specularMap:Lt,specularColorMap:pt,specularIntensityMap:Ut,transmission:tt,transmissionMap:I,thicknessMap:dt,gradientMap:at,opaque:b.transparent===!1&&b.blending===Hi&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:it,alphaHash:Z,combine:b.combine,mapUv:At&&g(b.map.channel),aoMapUv:pe&&g(b.aoMap.channel),lightMapUv:L&&g(b.lightMap.channel),bumpMapUv:Yt&&g(b.bumpMap.channel),normalMapUv:$t&&g(b.normalMap.channel),displacementMapUv:he&&g(b.displacementMap.channel),emissiveMapUv:_t&&g(b.emissiveMap.channel),metalnessMapUv:me&&g(b.metalnessMap.channel),roughnessMapUv:wt&&g(b.roughnessMap.channel),anisotropyMapUv:X&&g(b.anisotropyMap.channel),clearcoatMapUv:St&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(b.sheenRoughnessMap.channel),specularMapUv:Lt&&g(b.specularMap.channel),specularColorMapUv:pt&&g(b.specularColorMap.channel),specularIntensityMapUv:Ut&&g(b.specularIntensityMap.channel),transmissionMapUv:I&&g(b.transmissionMap.channel),thicknessMapUv:dt&&g(b.thicknessMap.channel),alphaMapUv:ot&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($t||kt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(At||ot),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ke,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(y,b),_(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const y=x[b.type];let P;if(y){const N=yn[y];P=Jd.clone(N.uniforms)}else P=b.uniforms;return P}function w(b,y){let P;for(let N=0,k=h.length;N<k;N++){const G=h[N];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Og(s,y,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:D}}function Hg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,x,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(d||jl),i.length>1&&i.sort(d||jl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Kl,s.set(n,[a])):i>=r.length?(a=new Kl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Pt};break;case"SpotLight":e={position:new C,direction:new C,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function qg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Yg=0;function $g(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jg(s){const t=new Xg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Bt,a=new Bt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,_=0,M=0,w=0,E=0,R=0;c.sort($g);for(let b=0,y=c.length;b<y;b++){const P=c[b],N=P.color,k=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*k,u+=N.g*k,d+=N.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);R++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(k),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=Q.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,M++}g++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=W,n.pointShadowMatrix[x]=P.shadow.matrix,_++}n.point[x]=q,x++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==x||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.directionalLength=f,D.pointLength=x,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=w,D.numLightProbes=R,n.version=Yg++)}function l(c,h){let u=0,d=0,f=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const _=c[p];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Zl(s){const t=new jg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Kg(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Zl(s),t.set(i,[o])):r>=a.length?(o=new Zl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(s,t,e){let n=new oc;const i=new ct,r=new ct,a=new ee,o=new Yf({depthPacking:od}),l=new $f,c={},h=e.maxTextureSize,u={[Vn]:ke,[ke]:Vn,[Ke]:Ke},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Ee;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Kt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(E,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Bn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Fn&&this.type===Fn,G=p===Fn&&this.type!==Fn;for(let W=0,q=E.length;W<q;W++){const Q=E[W],H=Q.shadow;if(H===void 0){Mt("WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const nt=H.getFrameExtents();if(i.multiply(nt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,H.mapSize.y=r.y)),H.map===null||k===!0||G===!0){const J=this.type!==Fn?{minFilter:Be,magFilter:Be}:{};H.map!==null&&H.map.dispose(),H.map=new xi(i.x,i.y,J),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const O=H.getViewportCount();for(let J=0;J<O;J++){const bt=H.getViewport(J);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),N.viewport(a),H.updateMatrices(Q,J),n=H.getFrustum(),M(R,D,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&S(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,P)};function S(E,R){const D=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,D,f,g,null)}function _(E,R,D,b){let y=null;const P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=y.uuid,k=R.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let W=G[k];W===void 0&&(W=y.clone(),G[k]=W,R.addEventListener("dispose",w)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Fn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=D}return y}function M(E,R,D,b,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const k=t.update(E),G=E.material;if(Array.isArray(G)){const W=k.groups;for(let q=0,Q=W.length;q<Q;q++){const H=W[q],nt=G[H.materialIndex];if(nt&&nt.visible){const O=_(E,nt,b,y);E.onBeforeShadow(s,E,R,D,k,O,H),s.renderBufferDirect(D,null,k,O,E,H),E.onAfterShadow(s,E,R,D,k,O,H)}}}else if(G.visible){const W=_(E,G,b,y);E.onBeforeShadow(s,E,R,D,k,W,null),s.renderBufferDirect(D,null,k,W,E,null),E.onAfterShadow(s,E,R,D,k,W,null)}}const N=E.children;for(let k=0,G=N.length;k<G;k++)M(N[k],R,D,b,y)}function w(E){E.target.removeEventListener("dispose",w);for(const D in c){const b=c[D],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const t_={[qa]:Ya,[$a]:Za,[ja]:Ja,[Yi]:Ka,[Ya]:qa,[Za]:$a,[Ja]:ja,[Ka]:Yi};function e_(s,t){function e(){let I=!1;const dt=new ee;let at=null;const ot=new ee(0,0,0,0);return{setMask:function(it){at!==it&&!I&&(s.colorMask(it,it,it,it),at=it)},setLocked:function(it){I=it},setClear:function(it,Z,xt,Ot,de){de===!0&&(it*=Ot,Z*=Ot,xt*=Ot),dt.set(it,Z,xt,Ot),ot.equals(dt)===!1&&(s.clearColor(it,Z,xt,Ot),ot.copy(dt))},reset:function(){I=!1,at=null,ot.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,at=null,ot=null,it=null;return{setReversed:function(Z){if(dt!==Z){const xt=t.get("EXT_clip_control");Z?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),dt=Z;const Ot=it;it=null,this.setClear(Ot)}},getReversed:function(){return dt},setTest:function(Z){Z?K(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(Z){at!==Z&&!I&&(s.depthMask(Z),at=Z)},setFunc:function(Z){if(dt&&(Z=t_[Z]),ot!==Z){switch(Z){case qa:s.depthFunc(s.NEVER);break;case Ya:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case Yi:s.depthFunc(s.LEQUAL);break;case ja:s.depthFunc(s.EQUAL);break;case Ka:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case Ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=Z}},setLocked:function(Z){I=Z},setClear:function(Z){it!==Z&&(dt&&(Z=1-Z),s.clearDepth(Z),it=Z)},reset:function(){I=!1,at=null,ot=null,it=null,dt=!1}}}function i(){let I=!1,dt=null,at=null,ot=null,it=null,Z=null,xt=null,Ot=null,de=null;return{setTest:function(se){I||(se?K(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(se){dt!==se&&!I&&(s.stencilMask(se),dt=se)},setFunc:function(se,gn,sn){(at!==se||ot!==gn||it!==sn)&&(s.stencilFunc(se,gn,sn),at=se,ot=gn,it=sn)},setOp:function(se,gn,sn){(Z!==se||xt!==gn||Ot!==sn)&&(s.stencilOp(se,gn,sn),Z=se,xt=gn,Ot=sn)},setLocked:function(se){I=se},setClear:function(se){de!==se&&(s.clearStencil(se),de=se)},reset:function(){I=!1,dt=null,at=null,ot=null,it=null,Z=null,xt=null,Ot=null,de=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,_=null,M=null,w=null,E=null,R=new Pt(0,0,0),D=0,b=!1,y=null,P=null,N=null,k=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Q>=2);let nt=null,O={};const J=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Gt=new ee().fromArray(J),qt=new ee().fromArray(bt);function Zt(I,dt,at,ot){const it=new Uint8Array(4),Z=s.createTexture();s.bindTexture(I,Z),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<at;xt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(dt+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Z}const Y={};Y[s.TEXTURE_2D]=Zt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Yi),Yt(!1),$t(Cc),K(s.CULL_FACE),pe(Bn);function K(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function lt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Tt(I,dt){return u[I]!==dt?(s.bindFramebuffer(I,dt),u[I]=dt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function vt(I,dt){let at=f,ot=!1;if(I){at=d.get(dt),at===void 0&&(at=[],d.set(dt,at));const it=I.textures;if(at.length!==it.length||at[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,xt=it.length;Z<xt;Z++)at[Z]=s.COLOR_ATTACHMENT0+Z;at.length=it.length,ot=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,ot=!0);ot&&s.drawBuffers(at)}function At(I){return x!==I?(s.useProgram(I),x=I,!0):!1}const ue={[di]:s.FUNC_ADD,[Iu]:s.FUNC_SUBTRACT,[Du]:s.FUNC_REVERSE_SUBTRACT};ue[Nu]=s.MIN,ue[Uu]=s.MAX;const Ht={[Fu]:s.ZERO,[Ou]:s.ONE,[ku]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[Wu]:s.SRC_ALPHA_SATURATE,[Hu]:s.DST_COLOR,[zu]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[Gu]:s.ONE_MINUS_DST_COLOR,[Vu]:s.ONE_MINUS_DST_ALPHA,[Xu]:s.CONSTANT_COLOR,[qu]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[$u]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,dt,at,ot,it,Z,xt,Ot,de,se){if(I===Bn){g===!0&&(lt(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),I!==Lu){if(I!==m||se!==b){if((p!==di||M!==di)&&(s.blendEquation(s.FUNC_ADD),p=di,M=di),se)switch(I){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.ONE,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",I);break}S=null,_=null,w=null,E=null,R.set(0,0,0),D=0,m=I,b=se}return}it=it||dt,Z=Z||at,xt=xt||ot,(dt!==p||it!==M)&&(s.blendEquationSeparate(ue[dt],ue[it]),p=dt,M=it),(at!==S||ot!==_||Z!==w||xt!==E)&&(s.blendFuncSeparate(Ht[at],Ht[ot],Ht[Z],Ht[xt]),S=at,_=ot,w=Z,E=xt),(Ot.equals(R)===!1||de!==D)&&(s.blendColor(Ot.r,Ot.g,Ot.b,de),R.copy(Ot),D=de),m=I,b=!1}function L(I,dt){I.side===Ke?lt(s.CULL_FACE):K(s.CULL_FACE);let at=I.side===ke;dt&&(at=!at),Yt(at),I.blending===Hi&&I.transparent===!1?pe(Bn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ot=I.stencilWrite;o.setTest(ot),ot&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function $t(I){I!==Cu?(K(s.CULL_FACE),I!==P&&(I===Cc?s.cullFace(s.BACK):I===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),P=I}function he(I){I!==N&&(q&&s.lineWidth(I),N=I)}function _t(I,dt,at){I?(K(s.POLYGON_OFFSET_FILL),(k!==dt||G!==at)&&(s.polygonOffset(dt,at),k=dt,G=at)):lt(s.POLYGON_OFFSET_FILL)}function me(I){I?K(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function wt(I){I===void 0&&(I=s.TEXTURE0+W-1),nt!==I&&(s.activeTexture(I),nt=I)}function kt(I,dt,at){at===void 0&&(nt===null?at=s.TEXTURE0+W-1:at=nt);let ot=O[at];ot===void 0&&(ot={type:void 0,texture:void 0},O[at]=ot),(ot.type!==I||ot.texture!==dt)&&(nt!==at&&(s.activeTexture(at),nt=at),s.bindTexture(I,dt||Y[I]),ot.type=I,ot.texture=dt)}function A(){const I=O[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{s.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function tt(){try{s.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function St(){try{s.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ut(){try{s.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Rt(){try{s.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function yt(){try{s.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function et(){try{s.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function rt(I){Gt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Gt.copy(I))}function Dt(I){qt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),qt.copy(I))}function Lt(I,dt){let at=c.get(dt);at===void 0&&(at=new WeakMap,c.set(dt,at));let ot=at.get(I);ot===void 0&&(ot=s.getUniformBlockIndex(dt,I.name),at.set(I,ot))}function pt(I,dt){const ot=c.get(dt).get(I);l.get(dt)!==ot&&(s.uniformBlockBinding(dt,ot,I.__bindingPointIndex),l.set(dt,ot))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,O={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,_=null,M=null,w=null,E=null,R=new Pt(0,0,0),D=0,b=!1,y=null,P=null,N=null,k=null,G=null,Gt.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:lt,bindFramebuffer:Tt,drawBuffers:vt,useProgram:At,setBlending:pe,setMaterial:L,setFlipSided:Yt,setCullFace:$t,setLineWidth:he,setPolygonOffset:_t,setScissorTest:me,activeTexture:wt,bindTexture:kt,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:yt,texImage3D:et,updateUBOMapping:Lt,uniformBlockBinding:pt,texStorage2D:ut,texStorage3D:Rt,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:X,compressedTexSubImage3D:St,scissor:rt,viewport:Dt,reset:Ut}}function n_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,v){return f?new OffscreenCanvas(A,v):Bs("canvas")}function g(A,v,B){let j=1;const tt=kt(A);if((tt.width>B||tt.height>B)&&(j=B/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(j*tt.width),St=Math.floor(j*tt.height);u===void 0&&(u=x(X,St));const ut=v?x(X,St):u;return ut.width=X,ut.height=St,ut.getContext("2d").drawImage(A,0,0,X,St),Mt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+X+"x"+St+")."),ut}else return"data"in A&&Mt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,v,B,j,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=v;if(v===s.RED&&(B===s.FLOAT&&(X=s.R32F),B===s.HALF_FLOAT&&(X=s.R16F),B===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.R8UI),B===s.UNSIGNED_SHORT&&(X=s.R16UI),B===s.UNSIGNED_INT&&(X=s.R32UI),B===s.BYTE&&(X=s.R8I),B===s.SHORT&&(X=s.R16I),B===s.INT&&(X=s.R32I)),v===s.RG&&(B===s.FLOAT&&(X=s.RG32F),B===s.HALF_FLOAT&&(X=s.RG16F),B===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RG8UI),B===s.UNSIGNED_SHORT&&(X=s.RG16UI),B===s.UNSIGNED_INT&&(X=s.RG32UI),B===s.BYTE&&(X=s.RG8I),B===s.SHORT&&(X=s.RG16I),B===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGB8UI),B===s.UNSIGNED_SHORT&&(X=s.RGB16UI),B===s.UNSIGNED_INT&&(X=s.RGB32UI),B===s.BYTE&&(X=s.RGB8I),B===s.SHORT&&(X=s.RGB16I),B===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),B===s.UNSIGNED_INT&&(X=s.RGBA32UI),B===s.BYTE&&(X=s.RGBA8I),B===s.SHORT&&(X=s.RGBA16I),B===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){const St=tt?Or:Jt.getTransfer(j);B===s.FLOAT&&(X=s.RGBA32F),B===s.HALF_FLOAT&&(X=s.RGBA16F),B===s.UNSIGNED_BYTE&&(X=St===ae?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(A,v){let B;return A?v===null||v===mi||v===Ns?B=s.DEPTH24_STENCIL8:v===hn?B=s.DEPTH32F_STENCIL8:v===Ds&&(B=s.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===Ns?B=s.DEPTH_COMPONENT24:v===hn?B=s.DEPTH_COMPONENT32F:v===Ds&&(B=s.DEPTH_COMPONENT16),B}function w(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Ie?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){const v=A.target;v.removeEventListener("dispose",E),D(v),v.isVideoTexture&&h.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),y(v)}function D(A){const v=n.get(A);if(v.__webglInit===void 0)return;const B=A.source,j=d.get(B);if(j){const tt=j[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(A),Object.keys(j).length===0&&d.delete(B)}n.remove(A)}function b(A){const v=n.get(A);s.deleteTexture(v.__webglTexture);const B=A.source,j=d.get(B);delete j[v.__cacheKey],a.memory.textures--}function y(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let tt=0;tt<v.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)s.deleteFramebuffer(v.__webglFramebuffer[j]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let j=0,tt=B.length;j<tt;j++){const X=n.get(B[j]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(A)}let P=0;function N(){P=0}function k(){const A=P;return A>=i.maxTextures&&Mt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function G(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){const B=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const j=A.image;if(j===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+v)}function q(A,v){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+v)}function Q(A,v){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,v);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+v)}function H(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){K(B,A,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+v)}const nt={[pi]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},O={[Be]:s.NEAREST,[Eh]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[Ie]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},J={[ld]:s.NEVER,[md]:s.ALWAYS,[hd]:s.LESS,[Dh]:s.LEQUAL,[ud]:s.EQUAL,[pd]:s.GEQUAL,[dd]:s.GREATER,[fd]:s.NOTEQUAL};function bt(A,v){if(v.type===hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ie||v.magFilter===Cr||v.magFilter===Ms||v.magFilter===bn||v.minFilter===Ie||v.minFilter===Cr||v.minFilter===Ms||v.minFilter===bn)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,nt[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,O[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,O[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,J[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==Ms&&v.minFilter!==bn||v.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));const j=v.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const X=G(v);if(X!==A.__cacheKey){tt[X]===void 0&&(tt[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[X].usedTimes++;const St=tt[A.__cacheKey];St!==void 0&&(tt[A.__cacheKey].usedTimes--,St.usedTimes===0&&b(v)),A.__cacheKey=X,A.__webglTexture=tt[X].texture}return B}function qt(A,v,B){return Math.floor(Math.floor(A/B)/v)}function Zt(A,v,B,j){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,B,j,v.data);else{X.sort((et,rt)=>et.start-rt.start);let St=0;for(let et=1;et<X.length;et++){const rt=X[St],Dt=X[et],Lt=rt.start+rt.count,pt=qt(Dt.start,v.width,4),Ut=qt(rt.start,v.width,4);Dt.start<=Lt+1&&pt===Ut&&qt(Dt.start+Dt.count-1,v.width,4)===pt?rt.count=Math.max(rt.count,Dt.start+Dt.count-rt.start):(++St,X[St]=Dt)}X.length=St+1;const ut=s.getParameter(s.UNPACK_ROW_LENGTH),Rt=s.getParameter(s.UNPACK_SKIP_PIXELS),yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let et=0,rt=X.length;et<rt;et++){const Dt=X[et],Lt=Math.floor(Dt.start/4),pt=Math.ceil(Dt.count/4),Ut=Lt%v.width,I=Math.floor(Lt/v.width),dt=pt,at=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Ut,I,dt,at,B,j,v.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function Y(A,v,B){let j=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=s.TEXTURE_3D);const tt=Gt(A,v),X=v.source;e.bindTexture(j,A.__webglTexture,s.TEXTURE0+B);const St=n.get(X);if(X.version!==St.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);const ut=Jt.getPrimaries(Jt.workingColorSpace),Rt=v.colorSpace===Qn?null:Jt.getPrimaries(v.colorSpace),yt=v.colorSpace===Qn||ut===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let et=g(v.image,!1,i.maxTextureSize);et=wt(v,et);const rt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type);let Lt=_(v.internalFormat,rt,Dt,v.colorSpace,v.isVideoTexture);bt(j,v);let pt;const Ut=v.mipmaps,I=v.isVideoTexture!==!0,dt=St.__version===void 0||tt===!0,at=X.dataReady,ot=w(v,et);if(v.isDepthTexture)Lt=M(v.format===Fs,v.type),dt&&(I?e.texStorage2D(s.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,rt,Dt,null));else if(v.isDataTexture)if(Ut.length>0){I&&dt&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,Ut[0].width,Ut[0].height);for(let it=0,Z=Ut.length;it<Z;it++)pt=Ut[it],I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,rt,Dt,pt.data):e.texImage2D(s.TEXTURE_2D,it,Lt,pt.width,pt.height,0,rt,Dt,pt.data);v.generateMipmaps=!1}else I?(dt&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,et.width,et.height),at&&Zt(v,et,rt,Dt)):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,rt,Dt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Lt,Ut[0].width,Ut[0].height,et.depth);for(let it=0,Z=Ut.length;it<Z;it++)if(pt=Ut[it],v.format!==Ze)if(rt!==null)if(I){if(at)if(v.layerUpdates.size>0){const xt=Cl(pt.width,pt.height,v.format,v.type);for(const Ot of v.layerUpdates){const de=pt.data.subarray(Ot*xt/pt.data.BYTES_PER_ELEMENT,(Ot+1)*xt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,Ot,pt.width,pt.height,1,rt,de)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,et.depth,rt,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Lt,pt.width,pt.height,et.depth,0,pt.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,et.depth,rt,Dt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Lt,pt.width,pt.height,et.depth,0,rt,Dt,pt.data)}else{I&&dt&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,Ut[0].width,Ut[0].height);for(let it=0,Z=Ut.length;it<Z;it++)pt=Ut[it],v.format!==Ze?rt!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,rt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Lt,pt.width,pt.height,0,pt.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,pt.width,pt.height,rt,Dt,pt.data):e.texImage2D(s.TEXTURE_2D,it,Lt,pt.width,pt.height,0,rt,Dt,pt.data)}else if(v.isDataArrayTexture)if(I){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Lt,et.width,et.height,et.depth),at)if(v.layerUpdates.size>0){const it=Cl(et.width,et.height,v.format,v.type);for(const Z of v.layerUpdates){const xt=et.data.subarray(Z*it/et.data.BYTES_PER_ELEMENT,(Z+1)*it/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,rt,Dt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,rt,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,rt,Dt,et.data);else if(v.isData3DTexture)I?(dt&&e.texStorage3D(s.TEXTURE_3D,ot,Lt,et.width,et.height,et.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,rt,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,rt,Dt,et.data);else if(v.isFramebufferTexture){if(dt)if(I)e.texStorage2D(s.TEXTURE_2D,ot,Lt,et.width,et.height);else{let it=et.width,Z=et.height;for(let xt=0;xt<ot;xt++)e.texImage2D(s.TEXTURE_2D,xt,Lt,it,Z,0,rt,Dt,null),it>>=1,Z>>=1}}else if(Ut.length>0){if(I&&dt){const it=kt(Ut[0]);e.texStorage2D(s.TEXTURE_2D,ot,Lt,it.width,it.height)}for(let it=0,Z=Ut.length;it<Z;it++)pt=Ut[it],I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,rt,Dt,pt):e.texImage2D(s.TEXTURE_2D,it,Lt,rt,Dt,pt);v.generateMipmaps=!1}else if(I){if(dt){const it=kt(et);e.texStorage2D(s.TEXTURE_2D,ot,Lt,it.width,it.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,Lt,rt,Dt,et);m(v)&&p(j),St.__version=X.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,B){if(v.image.length!==6)return;const j=Gt(A,v),tt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const X=n.get(tt);if(tt.version!==X.__version||j===!0){e.activeTexture(s.TEXTURE0+B);const St=Jt.getPrimaries(Jt.workingColorSpace),ut=v.colorSpace===Qn?null:Jt.getPrimaries(v.colorSpace),Rt=v.colorSpace===Qn||St===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const yt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,rt=[];for(let Z=0;Z<6;Z++)!yt&&!et?rt[Z]=g(v.image[Z],!0,i.maxCubemapSize):rt[Z]=et?v.image[Z].image:v.image[Z],rt[Z]=wt(v,rt[Z]);const Dt=rt[0],Lt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Ut=_(v.internalFormat,Lt,pt,v.colorSpace),I=v.isVideoTexture!==!0,dt=X.__version===void 0||j===!0,at=tt.dataReady;let ot=w(v,Dt);bt(s.TEXTURE_CUBE_MAP,v);let it;if(yt){I&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ut,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){it=rt[Z].mipmaps;for(let xt=0;xt<it.length;xt++){const Ot=it[xt];v.format!==Ze?Lt!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Ot.width,Ot.height,Lt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Ut,Ot.width,Ot.height,0,Ot.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Ot.width,Ot.height,Lt,pt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Ut,Ot.width,Ot.height,0,Lt,pt,Ot.data)}}}else{if(it=v.mipmaps,I&&dt){it.length>0&&ot++;const Z=kt(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ut,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,rt[Z].width,rt[Z].height,Lt,pt,rt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ut,rt[Z].width,rt[Z].height,0,Lt,pt,rt[Z].data);for(let xt=0;xt<it.length;xt++){const de=it[xt].image[Z].image;I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,de.width,de.height,Lt,pt,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Ut,de.width,de.height,0,Lt,pt,de.data)}}else{I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,pt,rt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ut,Lt,pt,rt[Z]);for(let xt=0;xt<it.length;xt++){const Ot=it[xt];I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Lt,pt,Ot.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Ut,Lt,pt,Ot.image[Z])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=tt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function lt(A,v,B,j,tt,X){const St=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),Rt=_(B.internalFormat,St,ut,B.colorSpace),yt=n.get(v),et=n.get(B);if(et.__renderTarget=v,!yt.__hasExternalTextures){const rt=Math.max(1,v.width>>X),Dt=Math.max(1,v.height>>X);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,X,Rt,rt,Dt,v.depth,0,St,ut,null):e.texImage2D(tt,X,Rt,rt,Dt,0,St,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,tt,et.__webglTexture,0,he(v)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,tt,et.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(A,v,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,tt=j&&j.isDepthTexture?j.type:null,X=M(v.stencilBuffer,tt),St=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=he(v);_t(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,X,v.width,v.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,A)}else{const j=v.textures;for(let tt=0;tt<j.length;tt++){const X=j[tt],St=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),Rt=_(X.internalFormat,St,ut,X.colorSpace),yt=he(v);B&&_t(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,Rt,v.width,v.height):_t(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,Rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const tt=j.__webglTexture,X=he(v);if(v.depthTexture.format===Us)_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Fs)_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function At(A){const v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?vt(v.__webglFramebuffer[0],A):vt(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=s.createRenderbuffer(),Tt(v.__webglDepthbuffer[j],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,X)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Tt(v.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(A,v,B){const j=n.get(A);v!==void 0&&lt(j.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&At(A)}function Ht(A){const v=A.texture,B=n.get(A),j=n.get(v);A.addEventListener("dispose",R);const tt=A.textures,X=A.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=v.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)B.__webglFramebuffer[ut][Rt]=s.createFramebuffer()}else B.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)B.__webglFramebuffer[ut]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(St)for(let ut=0,Rt=tt.length;ut<Rt;ut++){const yt=n.get(tt[ut]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&_t(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const Rt=tt[ut];B.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);const yt=r.convert(Rt.format,Rt.colorSpace),et=r.convert(Rt.type),rt=_(Rt.internalFormat,yt,et,Rt.colorSpace,A.isXRRenderTarget===!0),Dt=he(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,rt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),bt(s.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)lt(B.__webglFramebuffer[ut][Rt],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Rt);else lt(B.__webglFramebuffer[ut],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,Rt=tt.length;ut<Rt;ut++){const yt=tt[ut],et=n.get(yt);let rt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,et.__webglTexture),bt(rt,yt),lt(B.__webglFramebuffer,A,yt,s.COLOR_ATTACHMENT0+ut,rt,0),m(yt)&&p(rt)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),bt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)lt(B.__webglFramebuffer[Rt],A,v,s.COLOR_ATTACHMENT0,ut,Rt);else lt(B.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}A.depthBuffer&&At(A)}function pe(A){const v=A.textures;for(let B=0,j=v.length;B<j;B++){const tt=v[B];if(m(tt)){const X=S(A),St=n.get(tt).__webglTexture;e.bindTexture(X,St),p(X),e.unbindTexture()}}}const L=[],Yt=[];function $t(A){if(A.samples>0){if(_t(A)===!1){const v=A.textures,B=A.width,j=A.height;let tt=s.COLOR_BUFFER_BIT;const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(A),ut=v.length>1;if(ut)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const Rt=A.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const et=n.get(v[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,B,j,0,0,B,j,tt,s.NEAREST),l===!0&&(L.length=0,Yt.length=0,L.push(s.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(X),Yt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const et=n.get(v[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function he(A){return Math.min(i.maxSamples,A.samples)}function _t(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function wt(A,v){const B=A.colorSpace,j=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ve&&B!==Qn&&(Jt.getTransfer(B)===ae?(j!==Ze||tt!==En)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",B)),v}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=ue,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=_t}function i_(s,t){function e(n,i=Qn){let r;const a=Jt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return s.BYTE;if(n===Ah)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===Yo)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===Ph)return s.ALPHA;if(n===Lh)return s.RGB;if(n===Ze)return s.RGBA;if(n===Us)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===Zo)return s.RED_INTEGER;if(n===Jo)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===Pr||n===Lr||n===Ir||n===Dr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===ao)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===xo||n===go||n===_o||n===vo||n===yo||n===Mo||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===To||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===Ao||n===Ro||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`;class a_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new $h(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o_ extends vi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new a_,p={},S=e.getContextAttributes();let _=null,M=null;const w=[],E=[],R=new ct;let D=null;const b=new Oe;b.viewport=new ee;const y=new Oe;y.viewport=new ee;const P=[b,y],N=new xp;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=w[Y];return K===void 0&&(K=new _a,w[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=w[Y];return K===void 0&&(K=new _a,w[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=w[Y];return K===void 0&&(K=new _a,w[Y]=K),K.getHandSpace()};function W(Y){const K=E.indexOf(Y.inputSource);if(K===-1)return;const lt=w[K];lt!==void 0&&(lt.update(Y.inputSource,Y.frame,c||a),lt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<w.length;Y++){const K=E[Y];K!==null&&(E[Y]=null,w[Y].disconnect(K))}k=null,G=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(_),f=null,d=null,u=null,i=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Tt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=S.stencil?Fs:Us,Tt=S.stencil?Ns:mi);const At={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new xi(d.textureWidth,d.textureHeight,{format:Ze,type:En,depthTexture:new Yh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const lt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new xi(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:En,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let K=0;K<Y.removed.length;K++){const lt=Y.removed[K],Tt=E.indexOf(lt);Tt>=0&&(E[Tt]=null,w[Tt].disconnect(lt))}for(let K=0;K<Y.added.length;K++){const lt=Y.added[K];let Tt=E.indexOf(lt);if(Tt===-1){for(let At=0;At<w.length;At++)if(At>=E.length){E.push(lt),Tt=At;break}else if(E[At]===null){E[At]=lt,Tt=At;break}if(Tt===-1)break}const vt=w[Tt];vt&&vt.connect(lt)}}const H=new C,nt=new C;function O(Y,K,lt){H.setFromMatrixPosition(K.matrixWorld),nt.setFromMatrixPosition(lt.matrixWorld);const Tt=H.distanceTo(nt),vt=K.projectionMatrix.elements,At=lt.projectionMatrix.elements,ue=vt[14]/(vt[10]-1),Ht=vt[14]/(vt[10]+1),pe=(vt[9]+1)/vt[5],L=(vt[9]-1)/vt[5],Yt=(vt[8]-1)/vt[0],$t=(At[8]+1)/At[0],he=ue*Yt,_t=ue*$t,me=Tt/(-Yt+$t),wt=me*-Yt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(wt),Y.translateZ(me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const kt=ue+me,A=Ht+me,v=he-wt,B=_t+(Tt-wt),j=pe*Ht/A*kt,tt=L*Ht/A*kt;Y.projectionMatrix.makePerspective(v,B,j,tt,kt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,lt=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),N.near=y.near=b.near=K,N.far=y.far=b.far=lt,(k!==N.near||G!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,G=N.far),N.layers.mask=Y.layers.mask|6,b.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Tt=Y.parent,vt=N.cameras;J(N,Tt);for(let At=0;At<vt.length;At++)J(vt[At],Tt);vt.length===2?O(N,b,y):N.projectionMatrix.copy(b.projectionMatrix),bt(Y,N,Tt)};function bt(Y,K,lt){lt===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(lt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ki*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Gt=null;function qt(Y,K){if(h=K.getViewerPose(c||a),x=K,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Tt=!1;lt.length!==N.cameras.length&&(N.cameras.length=0,Tt=!0);for(let Ht=0;Ht<lt.length;Ht++){const pe=lt[Ht];let L=null;if(f!==null)L=f.getViewport(pe);else{const $t=u.getViewSubImage(d,pe);L=$t.viewport,Ht===0&&(t.setRenderTargetTextures(M,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(M))}let Yt=P[Ht];Yt===void 0&&(Yt=new Oe,Yt.layers.enable(Ht),Yt.viewport=new ee,P[Ht]=Yt),Yt.matrix.fromArray(pe.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(pe.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(L.x,L.y,L.width,L.height),Ht===0&&(N.matrix.copy(Yt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Tt===!0&&N.cameras.push(Yt)}const vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Ht=u.getDepthInformation(lt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,i.renderState)}if(vt&&vt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<lt.length;Ht++){const pe=lt[Ht].camera;if(pe){let L=p[pe];L||(L=new $h,p[pe]=L);const Yt=u.getCameraImage(pe);L.sourceTexture=Yt}}}}for(let lt=0;lt<w.length;lt++){const Tt=E[lt],vt=w[lt];Tt!==null&&vt!==void 0&&vt.update(Tt,K,c||a)}Gt&&Gt(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const Zt=new hu;Zt.setAnimationLoop(qt),this.setAnimationLoop=function(Y){Gt=Y},this.dispose=function(){}}}const li=new pn,c_=new Bt;function l_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),_=S.envMap,M=S.envMapRotation;_&&(m.envMap.value=_,li.copy(M),li.x*=-1,li.y*=-1,li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(li)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){const M=_.program;n.uniformBlockBinding(S,M)}function c(S,_){let M=i[S.id];M===void 0&&(x(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(S,w);const E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){const _=u();S.__bindingPointIndex=_;const M=s.createBuffer(),w=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const _=i[S.id],M=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,R=M.length;E<R;E++){const D=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,y=D.length;b<y;b++){const P=D[b];if(f(P,E,b,w)===!0){const N=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<k.length;W++){const q=k[W],Q=g(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,N+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,_,M,w){const E=S.value,R=_+"_"+M;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{const D=w[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return w[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function x(S){const _=S.uniforms;let M=0;const w=16;for(let R=0,D=_.length;R<D;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,P=b.length;y<P;y++){const N=b[y],k=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=k.length;G<W;G++){const q=k[G],Q=g(q),H=M%w,nt=H%Q.boundary,O=H+nt;M+=nt,O!==0&&w-O<Q.storage&&(M+=w-O),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Q.storage}}}const E=M%w;return E>0&&(M+=w-E),S.__size=M,S.__cache={},this}function g(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Mt("WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const u_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Un=null;function d_(){return Un===null&&(Un=new Wr(u_,32,32,Jo,ns),Un.minFilter=Ie,Un.magFilter=Ie,Un.wrapS=Mn,Un.wrapT=Mn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class f_{constructor(t={}){const{canvas:e=xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Set([tc,Qo,Zo]),g=new Set([En,mi,Ds,Ns,$o,jo]),m=new Uint32Array(4),p=new Int32Array(4);let S=null,_=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Ae;let D=0,b=0,y=null,P=-1,N=null;const k=new ee,G=new ee;let W=null;const q=new Pt(0);let Q=0,H=e.width,nt=e.height,O=1,J=null,bt=null;const Gt=new ee(0,0,H,nt),qt=new ee(0,0,H,nt);let Zt=!1;const Y=new oc;let K=!1,lt=!1;const Tt=new Bt,vt=new C,At=new ee,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function pe(){return y===null?O:1}let L=n;function Yt(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){const U="webgl2";if(L=Yt(U,T),L===null)throw Yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let $t,he,_t,me,wt,kt,A,v,B,j,tt,X,St,ut,Rt,yt,et,rt,Dt,Lt,pt,Ut,I,dt;function at(){$t=new Mx(L),$t.init(),Ut=new i_(L,$t),he=new dx(L,$t,t,Ut),_t=new e_(L,$t),he.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),me=new Tx(L),wt=new Hg,kt=new n_(L,$t,_t,wt,he,Ut,me),A=new px(E),v=new yx(E),B=new Rp(L),I=new hx(L,B),j=new bx(L,B,me,I),tt=new wx(L,j,B,me),Dt=new Ex(L,he,kt),yt=new fx(wt),X=new Vg(E,A,v,$t,he,I,yt),St=new l_(E,wt),ut=new Wg,Rt=new Kg($t),rt=new lx(E,A,v,_t,tt,f,l),et=new Qg(E,tt,he),dt=new h_(L,me,he,_t),Lt=new ux(L,$t,me),pt=new Sx(L,$t,me),me.programs=X.programs,E.capabilities=he,E.extensions=$t,E.properties=wt,E.renderLists=ut,E.shadowMap=et,E.state=_t,E.info=me}at();const ot=new o_(E,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=$t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(H,nt,!1))},this.getSize=function(T){return T.set(H,nt)},this.setSize=function(T,U,z=!0){if(ot.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,nt=U,e.width=Math.floor(T*O),e.height=Math.floor(U*O),z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*O,nt*O).floor()},this.setDrawingBufferSize=function(T,U,z){H=T,nt=U,O=z,e.width=Math.floor(T*z),e.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Gt)},this.setViewport=function(T,U,z,V){T.isVector4?Gt.set(T.x,T.y,T.z,T.w):Gt.set(T,U,z,V),_t.viewport(k.copy(Gt).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,U,z,V){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,U,z,V),_t.scissor(G.copy(qt).multiplyScalar(O).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){_t.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){bt=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,z=!0){let V=0;if(T){let F=!1;if(y!==null){const st=y.texture.format;F=x.has(st)}if(F){const st=y.texture.type,ft=g.has(st),gt=rt.getClearColor(),mt=rt.getClearAlpha(),It=gt.r,Nt=gt.g,Et=gt.b;ft?(m[0]=It,m[1]=Nt,m[2]=Et,m[3]=mt,L.clearBufferuiv(L.COLOR,0,m)):(p[0]=It,p[1]=Nt,p[2]=Et,p[3]=mt,L.clearBufferiv(L.COLOR,0,p))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),rt.dispose(),ut.dispose(),Rt.dispose(),wt.dispose(),A.dispose(),v.dispose(),tt.dispose(),I.dispose(),dt.dispose(),X.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",bc),ot.removeEventListener("sessionend",Sc),ni.stop()};function it(T){T.preventDefault(),Br("WebGLRenderer: Context Lost."),R=!0}function Z(){Br("WebGLRenderer: Context Restored."),R=!1;const T=me.autoReset,U=et.enabled,z=et.autoUpdate,V=et.needsUpdate,F=et.type;at(),me.autoReset=T,et.enabled=U,et.autoUpdate=z,et.needsUpdate=V,et.type=F}function xt(T){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){const U=T.target;U.removeEventListener("dispose",Ot),de(U)}function de(T){se(T),wt.remove(T)}function se(T){const U=wt.get(T).programs;U!==void 0&&(U.forEach(function(z){X.releaseProgram(z)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,V,F,st){U===null&&(U=ue);const ft=F.isMesh&&F.matrixWorld.determinant()<0,gt=Su(T,U,z,V,F);_t.setMaterial(V,ft);let mt=z.index,It=1;if(V.wireframe===!0){if(mt=j.getWireframeAttribute(z),mt===void 0)return;It=2}const Nt=z.drawRange,Et=z.attributes.position;let jt=Nt.start*It,re=(Nt.start+Nt.count)*It;st!==null&&(jt=Math.max(jt,st.start*It),re=Math.min(re,(st.start+st.count)*It)),mt!==null?(jt=Math.max(jt,0),re=Math.min(re,mt.count)):Et!=null&&(jt=Math.max(jt,0),re=Math.min(re,Et.count));const ve=re-jt;if(ve<0||ve===1/0)return;I.setup(F,V,gt,z,mt);let ye,le=Lt;if(mt!==null&&(ye=B.get(mt),le=pt,le.setIndex(ye)),F.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*pe()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(F.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),_t.setLineWidth(Ct*pe()),F.isLineSegments?le.setMode(L.LINES):F.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else F.isPoints?le.setMode(L.POINTS):F.isSprite&&le.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,xe=F._multiDrawCounts,Qt=F._multiDrawCount,qe=mt?B.get(mt).bytesPerElement:1,yi=wt.get(V).currentProgram.getUniforms();for(let Ye=0;Ye<Qt;Ye++)yi.setValue(L,"_gl_DrawID",Ye),le.render(Ct[Ye]/qe,xe[Ye])}else if(F.isInstancedMesh)le.renderInstances(jt,ve,F.count);else if(z.isInstancedBufferGeometry){const Ct=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,xe=Math.min(z.instanceCount,Ct);le.renderInstances(jt,ve,xe)}else le.render(jt,ve)};function gn(T,U,z){T.transparent===!0&&T.side===Ke&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,$s(T,U,z),T.side=Vn,T.needsUpdate=!0,$s(T,U,z),T.side=Ke):$s(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),_=Rt.get(z),_.init(U),w.push(_),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights();const V=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const gt=st[ft];gn(gt,z,F),V.add(gt)}else gn(st,z,F),V.add(st)}),_=w.pop(),V},this.compileAsync=function(T,U,z=null){const V=this.compile(T,U,z);return new Promise(F=>{function st(){if(V.forEach(function(ft){wt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){F(T);return}setTimeout(st,10)}$t.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let sn=null;function bu(T){sn&&sn(T)}function bc(){ni.stop()}function Sc(){ni.start()}const ni=new hu;ni.setAnimationLoop(bu),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(T){sn=T,ot.setAnimationLoop(T),T===null?ni.stop():ni.start()},ot.addEventListener("sessionstart",bc),ot.addEventListener("sessionend",Sc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(U),U=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,U,y),_=Rt.get(T,w.length),_.init(U),w.push(_),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Tt,Sn,U.reversedDepth),lt=this.localClippingEnabled,K=yt.init(this.clippingPlanes,lt),S=ut.get(T,M.length),S.init(),M.push(S),ot.enabled===!0&&ot.isPresenting===!0){const st=E.xr.getDepthSensingMesh();st!==null&&jr(st,U,-1/0,E.sortObjects)}jr(T,U,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(J,bt),Ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ht&&rt.addToRenderList(S,T),this.info.render.frame++,K===!0&&yt.beginShadows();const z=_.state.shadowsArray;et.render(z,T,U),K===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=S.opaque,F=S.transmissive;if(_.setupLights(),U.isArrayCamera){const st=U.cameras;if(F.length>0)for(let ft=0,gt=st.length;ft<gt;ft++){const mt=st[ft];Ec(V,F,T,mt)}Ht&&rt.render(T);for(let ft=0,gt=st.length;ft<gt;ft++){const mt=st[ft];Tc(S,T,mt,mt.viewport)}}else F.length>0&&Ec(V,F,T,U),Ht&&rt.render(T),Tc(S,T,U);y!==null&&b===0&&(kt.updateMultisampleRenderTarget(y),kt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(E,T,U),I.resetDefaultState(),P=-1,N=null,w.pop(),w.length>0?(_=w[w.length-1],K===!0&&yt.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function jr(T,U,z,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){V&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);const ft=tt.update(T),gt=T.material;gt.visible&&S.push(T,ft,gt,z,At.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ft=tt.update(T),gt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),At.copy(ft.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){const mt=ft.groups;for(let It=0,Nt=mt.length;It<Nt;It++){const Et=mt[It],jt=gt[Et.materialIndex];jt&&jt.visible&&S.push(T,ft,jt,z,At.z,Et)}}else gt.visible&&S.push(T,ft,gt,z,At.z,null)}}const st=T.children;for(let ft=0,gt=st.length;ft<gt;ft++)jr(st[ft],U,z,V)}function Tc(T,U,z,V){const{opaque:F,transmissive:st,transparent:ft}=T;_.setupLightsView(z),K===!0&&yt.setGlobalState(E.clippingPlanes,z),V&&_t.viewport(k.copy(V)),F.length>0&&Ys(F,U,z),st.length>0&&Ys(st,U,z),ft.length>0&&Ys(ft,U,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ec(T,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[V.id]===void 0&&(_.state.transmissionRenderTarget[V.id]=new xi(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?ns:En,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const st=_.state.transmissionRenderTarget[V.id],ft=V.viewport||k;st.setSize(ft.z*E.transmissionResolutionScale,ft.w*E.transmissionResolutionScale);const gt=E.getRenderTarget(),mt=E.getActiveCubeFace(),It=E.getActiveMipmapLevel();E.setRenderTarget(st),E.getClearColor(q),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),Ht&&rt.render(z);const Nt=E.toneMapping;E.toneMapping=ei;const Et=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),K===!0&&yt.setGlobalState(E.clippingPlanes,V),Ys(T,z,V),kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st),$t.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let re=0,ve=U.length;re<ve;re++){const ye=U[re],{object:le,geometry:Ct,material:xe,group:Qt}=ye;if(xe.side===Ke&&le.layers.test(V.layers)){const qe=xe.side;xe.side=ke,xe.needsUpdate=!0,wc(le,z,V,Ct,xe,Qt),xe.side=qe,xe.needsUpdate=!0,jt=!0}}jt===!0&&(kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st))}E.setRenderTarget(gt,mt,It),E.setClearColor(q,Q),Et!==void 0&&(V.viewport=Et),E.toneMapping=Nt}function Ys(T,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,st=T.length;F<st;F++){const ft=T[F],{object:gt,geometry:mt,group:It}=ft;let Nt=ft.material;Nt.allowOverride===!0&&V!==null&&(Nt=V),gt.layers.test(z.layers)&&wc(gt,U,z,mt,Nt,It)}}function wc(T,U,z,V,F,st){T.onBeforeRender(E,U,z,V,F,st),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(E,U,z,V,T,st),F.transparent===!0&&F.side===Ke&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,E.renderBufferDirect(z,U,V,F,T,st),F.side=Vn,F.needsUpdate=!0,E.renderBufferDirect(z,U,V,F,T,st),F.side=Ke):E.renderBufferDirect(z,U,V,F,T,st),T.onAfterRender(E,U,z,V,F,st)}function $s(T,U,z){U.isScene!==!0&&(U=ue);const V=wt.get(T),F=_.state.lights,st=_.state.shadowsArray,ft=F.state.version,gt=X.getParameters(T,F.state,st,U,z),mt=X.getProgramCacheKey(gt);let It=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?v:A).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Ot),It=new Map,V.programs=It);let Nt=It.get(mt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ft)return Rc(T,gt),Nt}else gt.uniforms=X.getUniforms(T),T.onBeforeCompile(gt,E),Nt=X.acquireProgram(gt,mt),It.set(mt,Nt),V.uniforms=gt.uniforms;const Et=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=yt.uniform),Rc(T,gt),V.needsLights=Eu(T),V.lightsStateVersion=ft,V.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function Ac(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Rc(T,U){const z=wt.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Su(T,U,z,V,F){U.isScene!==!0&&(U=ue),kt.resetTextureUnits();const st=U.fog,ft=V.isMeshStandardMaterial?U.environment:null,gt=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ve,mt=(V.isMeshStandardMaterial?v:A).get(V.envMap||ft),It=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let ve=ei;V.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ve=E.toneMapping);const ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=ye!==void 0?ye.length:0,Ct=wt.get(V),xe=_.state.lights;if(K===!0&&(lt===!0||T!==N)){const De=T===N&&V.id===P;yt.setState(V,T,De)}let Qt=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==xe.state.version||Ct.outputColorSpace!==gt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==mt||V.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==yt.numPlanes||Ct.numIntersection!==yt.numIntersection)||Ct.vertexAlphas!==It||Ct.vertexTangents!==Nt||Ct.morphTargets!==Et||Ct.morphNormals!==jt||Ct.morphColors!==re||Ct.toneMapping!==ve||Ct.morphTargetsCount!==le)&&(Qt=!0):(Qt=!0,Ct.__version=V.version);let qe=Ct.currentProgram;Qt===!0&&(qe=$s(V,U,F));let yi=!1,Ye=!1,cs=!1;const ge=qe.getUniforms(),He=Ct.uniforms;if(_t.useProgram(qe.program)&&(yi=!0,Ye=!0,cs=!0),V.id!==P&&(P=V.id,Ye=!0),yi||N!==T){_t.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",T.projectionMatrix),ge.setValue(L,"viewMatrix",T.matrixWorldInverse);const Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(L,vt.setFromMatrixPosition(T.matrixWorld)),he.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,Ye=!0,cs=!0)}if(F.isSkinnedMesh){ge.setOptional(L,F,"bindMatrix"),ge.setOptional(L,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ge.setValue(L,"boneTexture",De.boneTexture,kt))}F.isBatchedMesh&&(ge.setOptional(L,F,"batchingTexture"),ge.setValue(L,"batchingTexture",F._matricesTexture,kt),ge.setOptional(L,F,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",F._indirectTexture,kt),ge.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",F._colorsTexture,kt));const Je=z.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&Dt.update(F,z,qe),(Ye||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,ge.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(He.envMap.value=mt,He.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=d_()),Ye&&(ge.setValue(L,"toneMappingExposure",E.toneMappingExposure),Ct.needsLights&&Tu(He,cs),st&&V.fog===!0&&St.refreshFogUniforms(He,st),St.refreshMaterialUniforms(He,V,O,nt,_.state.transmissionRenderTarget[T.id]),Nr.upload(L,Ac(Ct),He,kt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Nr.upload(L,Ac(Ct),He,kt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(L,"center",F.center),ge.setValue(L,"modelViewMatrix",F.modelViewMatrix),ge.setValue(L,"normalMatrix",F.normalMatrix),ge.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const De=V.uniformsGroups;for(let Ge=0,Kr=De.length;Ge<Kr;Ge++){const ii=De[Ge];dt.update(ii,qe),dt.bind(ii,qe)}}return qe}function Tu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Eu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,U,z){const V=wt.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),wt.get(T.texture).__webglTexture=U,wt.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const z=wt.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const wu=L.createFramebuffer();this.setRenderTarget=function(T,U=0,z=0){y=T,D=U,b=z;let V=!0,F=null,st=!1,ft=!1;if(T){const mt=wt.get(T);if(mt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)kt.setupRenderTarget(T);else if(mt.__hasExternalTextures)kt.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Et=T.depthTexture;if(mt.__boundDepthTexture!==Et){if(Et!==null&&wt.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Nt=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?F=Nt[U][z]:F=Nt[U],st=!0):T.samples>0&&kt.useMultisampledRTT(T)===!1?F=wt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[z]:F=Nt,k.copy(T.viewport),G.copy(T.scissor),W=T.scissorTest}else k.copy(Gt).multiplyScalar(O).floor(),G.copy(qt).multiplyScalar(O).floor(),W=Zt;if(z!==0&&(F=wu),_t.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&_t.drawBuffers(T,F),_t.viewport(k),_t.scissor(G),_t.setScissorTest(W),st){const mt=wt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,z)}else if(ft){const mt=U;for(let It=0;It<T.textures.length;It++){const Nt=wt.get(T.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Nt.__webglTexture,z,mt)}}else if(T!==null&&z!==0){const mt=wt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,z)}P=-1},this.readRenderTargetPixels=function(T,U,z,V,F,st,ft,gt=0){if(!(T&&T.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){_t.bindFramebuffer(L.FRAMEBUFFER,mt);try{const It=T.textures[gt],Nt=It.format,Et=It.type;if(!he.textureFormatReadable(Nt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Et)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&z>=0&&z<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),L.readPixels(U,z,V,F,Ut.convert(Nt),Ut.convert(Et),st))}finally{const It=y!==null?wt.get(y).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,V,F,st,ft,gt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(U>=0&&U<=T.width-V&&z>=0&&z<=T.height-F){_t.bindFramebuffer(L.FRAMEBUFFER,mt);const It=T.textures[gt],Nt=It.format,Et=It.type;if(!he.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),L.readPixels(U,z,V,F,Ut.convert(Nt),Ut.convert(Et),0);const re=y!==null?wt.get(y).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,re);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gd(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(jt),L.deleteSync(ve),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,z=0){const V=Math.pow(2,-z),F=Math.floor(T.image.width*V),st=Math.floor(T.image.height*V),ft=U!==null?U.x:0,gt=U!==null?U.y:0;kt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ft,gt,F,st),_t.unbindTexture()};const Au=L.createFramebuffer(),Ru=L.createFramebuffer();this.copyTextureToTexture=function(T,U,z=null,V=null,F=0,st=null){st===null&&(F!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=F,F=0):st=0);let ft,gt,mt,It,Nt,Et,jt,re,ve;const ye=T.isCompressedTexture?T.mipmaps[st]:T.image;if(z!==null)ft=z.max.x-z.min.x,gt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,It=z.min.x,Nt=z.min.y,Et=z.isBox3?z.min.z:0;else{const Je=Math.pow(2,-F);ft=Math.floor(ye.width*Je),gt=Math.floor(ye.height*Je),T.isDataArrayTexture?mt=ye.depth:T.isData3DTexture?mt=Math.floor(ye.depth*Je):mt=1,It=0,Nt=0,Et=0}V!==null?(jt=V.x,re=V.y,ve=V.z):(jt=0,re=0,ve=0);const le=Ut.convert(U.format),Ct=Ut.convert(U.type);let xe;U.isData3DTexture?(kt.setTexture3D(U,0),xe=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),xe=L.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yi=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),cs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et);const ge=T.isDataArrayTexture||T.isData3DTexture,He=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Je=wt.get(T),De=wt.get(U),Ge=wt.get(Je.__renderTarget),Kr=wt.get(De.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Ge.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let ii=0;ii<mt;ii++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(T).__webglTexture,F,Et+ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,st,ve+ii)),L.blitFramebuffer(It,Nt,ft,gt,jt,re,ft,gt,L.DEPTH_BUFFER_BIT,L.NEAREST);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||wt.has(T)){const Je=wt.get(T),De=wt.get(U);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Au),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ru);for(let Ge=0;Ge<mt;Ge++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Je.__webglTexture,F,Et+Ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Je.__webglTexture,F),He?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,st,ve+Ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,st),F!==0?L.blitFramebuffer(It,Nt,ft,gt,jt,re,ft,gt,L.COLOR_BUFFER_BIT,L.NEAREST):He?L.copyTexSubImage3D(xe,st,jt,re,ve+Ge,It,Nt,ft,gt):L.copyTexSubImage2D(xe,st,jt,re,It,Nt,ft,gt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else He?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(xe,st,jt,re,ve,ft,gt,mt,le,Ct,ye.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,st,jt,re,ve,ft,gt,mt,le,ye.data):L.texSubImage3D(xe,st,jt,re,ve,ft,gt,mt,le,Ct,ye):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,jt,re,ft,gt,le,Ct,ye.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,jt,re,ye.width,ye.height,le,ye.data):L.texSubImage2D(L.TEXTURE_2D,st,jt,re,ft,gt,le,Ct,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cs),st===0&&U.generateMipmaps&&L.generateMipmap(xe),_t.unbindTexture()},this.initRenderTarget=function(T){wt.get(T).__webglFramebuffer===void 0&&kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?kt.setTextureCube(T,0):T.isData3DTexture?kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?kt.setTexture2DArray(T,0):kt.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){D=0,b=0,y=null,_t.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}async function p_(s){const t=await fetch(new URL("cases/index.json",s));if(!t.ok)throw new Error(`Каталог случаев: HTTP ${t.status}`);const e=await t.json();if(e.schema!=="sonolab.catalog/1")throw new Error("Неизвестный формат каталога");return e.cases}async function m_(s,t){const e=new URL(t.path,s),n=await fetch(e);if(!n.ok)throw new Error(`Паспорт случая ${t.caseId}: HTTP ${n.status}`);const i=await n.json();return g_(i),{manifest:i,baseUrl:new URL(".",e).toString()}}function x_(s,t){return s.find(e=>e.caseId===t)??s.find(e=>e.default)??s[0]}function g_(s){const t=i=>{throw new Error(`Паспорт случая ${s.caseId??"?"}: ${i}`)};s.schema!=="sonolab.case/1"&&t("неизвестная схема"),["recorded-sweep","volume-reslice","registered-volume","synthetic"].includes(s.imageType)||t("неизвестный тип изображения"),["left","right","unknown"].includes(s.patientSide)||t("сторона должна быть left/right/unknown"),s.source?.license||t("не указана лицензия");const e=s.frames?.count;(!e||e<1)&&t("нет кадров");const n=s.trajectory?.lut;(!Array.isArray(n)||n.length<2)&&t("нет таблицы t → frameId"),n.some(i=>!Number.isInteger(i)||i<0||i>=e)&&t("таблица ссылается на несуществующий кадр"),(s.imageType==="recorded-sweep"||s.imageType==="volume-reslice")&&(s.supportedMotions.rotation||s.supportedMotions.tilt||s.supportedMotions.compression)&&t("записанный проход не поддерживает вращение/наклон/компрессию")}const Xe=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],mu=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ur=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Ts=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Es=s=>Math.sqrt(Ts(s,s)),_s=s=>{const t=Es(s)||1;return[s[0]/t,s[1]/t,s[2]/t]},Jl=(s,t,e)=>mu(s,Ur(Xe(t,s),e));function Ql(s,t){const e=Math.min(1,Math.max(0,t));return s[Math.round(e*(s.length-1))]}function th(s,t){const e=Math.min(1,Math.max(0,s));return Math.round(e*(t-1))/(t-1)}class xu{samples;cumulative;length;constructor(t){if(t.length<2)throw new Error("Траектория должна содержать минимум две точки");this.samples=t.map(e=>({point:e.point,normal:_s(e.normal)})),this.cumulative=[0];for(let e=1;e<t.length;e++)this.cumulative.push(this.cumulative[e-1]+Es(Xe(t[e].point,t[e-1].point)));this.length=this.cumulative[this.cumulative.length-1]}poseAt(t){const e=Math.min(1,Math.max(0,t))*this.length;let n=1;for(;n<this.cumulative.length-1&&this.cumulative[n]<e;)n++;const i=this.samples[n-1],r=this.samples[n],a=this.cumulative[n]-this.cumulative[n-1]||1,o=(e-this.cumulative[n-1])/a;return{pointBody:Jl(i.point,r.point,o),normalBody:_s(Jl(i.normal,r.normal,o)),alongBody:_s(Xe(r.point,i.point))}}project(t){let e={dist:1/0,arc:0};for(let d=1;d<this.samples.length;d++){const f=this.samples[d-1].point,x=this.samples[d].point,g=Xe(x,f),m=Ts(g,g)||1,p=Math.min(1,Math.max(0,Ts(Xe(t,f),g)/m)),S=mu(f,Ur(g,p)),_=Es(Xe(t,S));_<e.dist&&(e={dist:_,arc:this.cumulative[d-1]+p*Math.sqrt(m)})}const n=this.samples[0].point,i=_s(Xe(this.samples[1].point,n)),r=this.samples[this.samples.length-1].point,a=_s(Xe(r,this.samples[this.samples.length-2].point)),o=-Ts(Xe(t,n),i),l=Ts(Xe(t,r),a);let c=0,h=e.arc/this.length,u=e.dist;return o>0&&e.arc===0?(c=o,h=-o/this.length,u=Es(Xe(Xe(t,n),Ur(i,-o)))):l>0&&e.arc>=this.length-1e-12&&(c=l,h=1+l/this.length,u=Es(Xe(Xe(t,r),Ur(a,l)))),{tRaw:h,t:Math.min(1,Math.max(0,h)),lateral:u,overshoot:c}}}const yc={lateralTolerance:.028,endTolerance:.006};function __(s,t=yc){return s.lateral<=t.lateralTolerance&&s.overshoot<=t.endTolerance}const v_=7,y_=450;class M_{constructor(t,e,n){this.view=t,this.visual=e,this.opts=n;const i=t.host;i.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),i.addEventListener("pointermove",this.onHover,{passive:!0})}state={kind:"idle"};enabled=!0;ray=new Wi;ndc=new ct;dragging=null;tapCandidate=null;pendingMove=null;activePointers=new Set;get isDragging(){return this.dragging!==null}setT(t,e,n=performance.now()){const i=th(t,this.opts.lut.length),r=this.opts.path.poseAt(i);this.apply({kind:"in-area",caseId:this.opts.caseId,t:i,frameId:Ql(this.opts.lut,i),pose:r,origin:e},n)}flush(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null,this.placeFromScreen(t.x,t.y,t.ts,!0)}apply(t,e){if(this.state=t,t.kind==="in-area")this.visual.setPose(t.pose.pointBody,t.pose.normalBody,t.pose.alongBody,!0);else if(t.kind==="out-of-area"){const n=this.opts.path.poseAt(.5).alongBody;this.visual.setPose(t.contact.pointBody,t.contact.normalBody,n,!1)}this.opts.onState(t,e)}setNdc(t,e){const n=this.view.renderer.domElement.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.view.camera)}placeFromScreen(t,e,n,i){this.setNdc(t,e);const r=this.ray.intersectObjects(this.view.human.skinMeshes,!1)[0];if(!r||!r.face)return void 0;const a=r.point.toArray(),o=new Ft().getNormalMatrix(r.object.matrixWorld),l=r.face.normal.clone().applyMatrix3(o).normalize().toArray(),c=r.object===this.view.human.forearm&&this.opts.isOnRegion(r.point),h=this.opts.path.project(a);if(c&&__(h,yc)){const u=th(h.t,this.opts.lut.length);this.apply({kind:"in-area",caseId:this.opts.caseId,t:u,frameId:Ql(this.opts.lut,u),pose:this.opts.path.poseAt(u),origin:"body"},n)}else this.apply({kind:"out-of-area",contact:{pointBody:a,normalBody:l,surfaceId:r.object.name||"skin"},origin:"body"},n)}hitsProbeOrZone(t,e){this.setNdc(t,e);const n=[this.opts.zoneHitMesh];return this.visual.group.visible&&n.push(...this.visual.grabTargets),this.ray.intersectObjects(n,!1).length>0}onDown=t=>{if(this.enabled){if(this.activePointers.add(t.pointerId),this.activePointers.size>1){this.tapCandidate=null,this.dragging&&this.endDrag();return}if(!(t.button!==0&&t.pointerType==="mouse")){if(this.hitsProbeOrZone(t.clientX,t.clientY)){this.dragging={pointerId:t.pointerId},this.view.controls.enabled=!1,this.visual.setActive(!0),this.view.host.classList.add("dragging-probe"),t.preventDefault(),t.stopPropagation(),this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!0);return}this.tapCandidate={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}}};onMove=t=>{this.tapCandidate&&this.tapCandidate.id===t.pointerId&&Math.hypot(t.clientX-this.tapCandidate.x,t.clientY-this.tapCandidate.y)>v_&&(this.tapCandidate=null),!(!this.dragging||this.dragging.pointerId!==t.pointerId)&&(this.pendingMove={x:t.clientX,y:t.clientY,ts:t.timeStamp})};onUp=t=>{if(!this.enabled){this.activePointers.delete(t.pointerId);return}if(this.activePointers.delete(t.pointerId),this.dragging&&this.dragging.pointerId===t.pointerId){this.flush(),this.endDrag();return}const e=this.tapCandidate;this.tapCandidate=null,e&&e.id===t.pointerId&&t.type==="pointerup"&&t.timeStamp-e.t<y_&&this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!1)};onHover=t=>{this.enabled&&(this.dragging||t.pointerType!=="mouse"||this.view.host.classList.toggle("can-grab",this.hitsProbeOrZone(t.clientX,t.clientY)))};endDrag(){this.dragging=null,this.view.controls.enabled=!0,this.visual.setActive(!1),this.view.host.classList.remove("dragging-probe")}}function b_(s,t=yc.lateralTolerance*.8){const e=[],n=[];s.samples.forEach((a,o)=>{const l=new C(...a.point),c=new C(...a.normal),h=s.samples[Math.min(o+1,s.samples.length-1)].point,u=s.samples[Math.max(o-1,0)].point,d=new C(...h).sub(new C(...u)).normalize(),f=new C().crossVectors(c,d).normalize(),x=c.clone().multiplyScalar(.004),g=l.clone().add(x).addScaledVector(f,t),m=l.clone().add(x).addScaledVector(f,-t);if(e.push(g.x,g.y,g.z,m.x,m.y,m.z),o>0){const p=o*2;n.push(p-2,p-1,p,p-1,p+1,p)}});const i=new Ee;i.setAttribute("position",new ce(e,3)),i.setIndex(n);const r=new Kt(i,new un({visible:!1,side:Ke}));return r.name="sweep-zone-hit",r}const On=s=>new C(s[0],s[1],s[2]);class S_{group=new Tn;grabTargets=[];fan;bodyMat;constructor(){this.group.name="probe",this.bodyMat=new nn({color:3095109,roughness:.35,metalness:.1});const t=new nn({color:1844011,roughness:.5}),e=new nn({color:9411237,roughness:.3}),n=new Kt(new lc(.0125,.085,8,20),this.bodyMat);n.scale.set(1.25,1,.75),n.position.y=.072;const i=new Kt(new dn(.038,.022,.02),t);i.position.y=.014;const r=new Kt(new Vs(.019,.019,.02,24,1,!1,0,Math.PI),e);r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,r.scale.set(1,1,.3),r.position.y=.004;const a=new Kt(new mc(new jh([new C(0,.12,0),new C(0,.145,.012),new C(.006,.16,.04)]),16,.0035,8),t);for(const h of[n,i,r,a])h.castShadow=!0,this.group.add(h),this.grabTargets.push(h);const o=new eu,l=.07;o.moveTo(0,0),o.absarc(0,0,l,-Math.PI/2-.65,-Math.PI/2+.65,!1),o.lineTo(0,0),this.fan=new Kt(new dc(o,24),new un({color:3843839,transparent:!0,opacity:.18,side:Ke,depthTest:!1,depthWrite:!1})),this.fan.renderOrder=10,this.group.add(this.fan);const c=new Kt(new fc(.035,12,8),new un({visible:!1}));c.position.y=.05,this.group.add(c),this.grabTargets.push(c),this.group.visible=!1}setPose(t,e,n,i){const r=On(e).normalize(),a=On(n).sub(r.clone().multiplyScalar(On(n).dot(r))).normalize(),o=new C().crossVectors(r,a).normalize(),l=new Bt().makeBasis(o,r,a);this.group.quaternion.setFromRotationMatrix(l),this.group.position.copy(On(t)),this.group.visible=!0,this.fan.visible=i,this.bodyMat.color.set(i?3095109:7032912)}setActive(t){this.bodyMat.emissive.set(t?1127253:0)}}function T_(s){const t=new Tn;t.name="sweep-marker";const e=s.samples.map(r=>On(r.point).add(On(r.normal).multiplyScalar(.0015))),n=new Xr(new Ee().setFromPoints(e),new jf({color:683990,dashSize:.008,gapSize:.006,depthTest:!0}));n.computeLineDistances(),t.add(n);const i=new un({color:683990});for(const r of[s.samples[0],s.samples[s.samples.length-1]]){const a=new Kt(new pc(.006,.0012,8,24),i);a.position.copy(On(r.point).add(On(r.normal).multiplyScalar(.0015))),a.lookAt(a.position.clone().add(On(r.normal))),t.add(a)}return t}function E_(s,t,e,n,i=41){s.updateMatrixWorld(!0);const r=new Wi,a=new C(...n).normalize(),o=new C(...t),l=new C(...e),c=new Ft().getNormalMatrix(s.matrixWorld),h=[];for(let u=0;u<i;u++){const d=o.clone().lerp(l,u/(i-1));r.set(d.clone().addScaledVector(a,-.4),a);const f=r.intersectObject(s,!1)[0];if(!f||!f.face)throw new Error("Не удалось построить траекторию прохода на коже");const x=f.face.normal.clone().applyMatrix3(c).normalize();h.push({point:f.point.toArray(),normal:x.toArray()})}return new xu(h)}function w_(s,t,e,n,i=81){s.updateMatrixWorld(!0);const r=new Wi,a=[],o=new C(0,-1,0),l=new Ft().getNormalMatrix(s.matrixWorld);for(let c=0;c<i;c++){const h=e+(n-e)*(c/(i-1)),u=t.elbow.clone().lerp(t.wrist,h);r.set(u.clone().add(new C(0,.3,0)),o);const d=r.intersectObject(s,!1)[0];if(!d||!d.face)throw new Error("Не удалось построить траекторию на предплечье");const f=d.face.normal.clone().applyMatrix3(l).normalize();a.push({point:d.point.toArray(),normal:f.toArray()})}return new xu(a)}const eh={type:"change"},Mc={type:"start"},gu={type:"end"},Tr=new is,nh=new Jn,A_=Math.cos(70*Uh.DEG2RAD),be=new C,We=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Na=1e-6;class R_ extends wp{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new wn,this._lastTargetPosition=new C,this._quat=new wn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rl,this._sphericalDelta=new Rl,this._scale=1,this._panOffset=new C,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new C,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P_.bind(this),this._onPointerDown=C_.bind(this),this._onPointerUp=L_.bind(this),this._onContextMenu=k_.bind(this),this._onMouseWheel=N_.bind(this),this._onKeyDown=U_.bind(this),this._onTouchStart=F_.bind(this),this._onTouchMove=O_.bind(this),this._onMouseDown=I_.bind(this),this._onMouseMove=D_.bind(this),this._interceptControlDown=B_.bind(this),this._interceptControlUp=z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),i<-Math.PI?i+=We:i>Math.PI&&(i-=We),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=be.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Tr.origin.copy(this.object.position),Tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tr.direction))<A_?this.object.lookAt(this.target):(nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tr.intersectPlane(nh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Na||this._lastTargetPosition.distanceToSquared(this.target)>Na?(this.dispatchEvent(eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;be.copy(i).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function C_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function P_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function L_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function I_(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=oe.DOLLY;break;case Vi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=oe.ROTATE}break;case Vi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Mc)}function D_(s){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function N_(s){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(s.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gu))}function U_(s){this.enabled!==!1&&this._handleKeyDown(s)}function F_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=oe.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=oe.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Mc)}function O_(s){switch(this._trackPointer(s),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=oe.NONE}}function k_(s){this.enabled!==!1&&s.preventDefault()}function B_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class V_ extends Gh{constructor(){super();const t=new dn;t.deleteAttribute("uv");const e=new nn({side:ke}),n=new nn,i=new lu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Xh(t,n,6),o=new fe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Kt(t,Oi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Kt(t,Oi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Kt(t,Oi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Kt(t,Oi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Kt(t,Oi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Kt(t,Oi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Oi(s){return new qf({color:0,emissive:16777215,emissiveIntensity:s})}function ih(s,t){if(t===rd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Po||t===Ih){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Po)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class H_ extends as{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Y_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new iv(e)}),this.register(function(e){return new sv(e)}),this.register(function(e){return new rv(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new Q_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new tv(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new nv(e)}),this.register(function(e){return new ev(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new av(e)}),this.register(function(e){return new ov(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ls.extractUrlBase(t);a=Ls.resolveURL(c,this.path)}else a=Ls.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new cu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===_u){try{a[Xt.KHR_BINARY_GLTF]=new cv(t)}catch(u){i&&i(u);return}r=JSON.parse(a[Xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Mv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xt.KHR_MATERIALS_UNLIT:a[u]=new X_;break;case Xt.KHR_DRACO_MESH_COMPRESSION:a[u]=new lv(r,this.dracoLoader);break;case Xt.KHR_TEXTURE_TRANSFORM:a[u]=new hv;break;case Xt.KHR_MESH_QUANTIZATION:a[u]=new uv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function G_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W_{constructor(t){this.parser=t,this.name=Xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Pt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ve);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Oo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lu(h),c.distance=u;break;case"spot":c=new dp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class X_{constructor(){this.name=Xt.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(t,e,n){const i=[];t.color=new Pt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ve),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ae))}return Promise.all(i)}}class q_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Y_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ct(o,o)}return Promise.all(r)}}class $_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class j_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class K_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Pt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ve)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ae)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Z_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class J_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Pt().setRGB(o[0],o[1],o[2],Ve),Promise.all(r)}}class Q_{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tv{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Pt().setRGB(o[0],o[1],o[2],Ve),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ae)),Promise.all(r)}}class ev{constructor(t){this.parser=t,this.name=Xt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class nv{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class iv{constructor(t){this.parser=t,this.name=Xt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class sv{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class rv{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class av{constructor(t){this.name=Xt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ov{constructor(t){this.name=Xt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const x of u){const g=new Bt,m=new C,p=new wn,S=new C(1,1,1),_=new Xh(x.geometry,x.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),_.setMatrixAt(M,g.compose(m,p,S));for(const M in l)if(M==="_COLOR_0"){const w=l[M];_.instanceColor=new Io(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,l[M]);fe.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const _u="glTF",vs=12,sh={JSON:1313821514,BIN:5130562};class cv{constructor(t){this.name=Xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==_u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vs,r=new DataView(t,vs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===sh.JSON){const c=new Uint8Array(t,vs+a,o);this.content=n.decode(c)}else if(l===sh.BIN){const c=vs+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Vo[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Vo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Xi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const x in f.attributes){const g=f.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(f)},o,c,Ve,d)})})}}class hv{constructor(){this.name=Xt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class uv{constructor(){this.name=Xt.KHR_MESH_QUANTIZATION}}class vu extends qs{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,x=t*c,g=x-c,m=-2*f+3*d,p=f-d,S=1-m,_=p-d+u;for(let M=0;M!==o;M++){const w=a[g+M+o],E=a[g+M+l]*h,R=a[x+M+o],D=a[x+M]*h;r[M]=S*w+_*E+m*R+p*D}return r}}const dv=new wn;class fv extends vu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return dv.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rh={9728:Be,9729:Ie,9984:Eh,9985:Cr,9986:Ms,9987:bn},ah={33071:Mn,33648:Fr,10497:pi},Ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pv={CUBICSPLINE:void 0,LINEAR:ks,STEP:Os},Fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function hi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function vn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function xv(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function gv(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _v(s){let t;const e=s.extensions&&s.extensions[Xt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Oa(e.attributes):t=s.indices+":"+Oa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Oa(s.targets[n]);return t}function Oa(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Ho(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yv=new Bt;class Mv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new lp(this.options.manager):this.textureLoader=new mp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hi(r,o,i),vn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ls.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ua[i.type],o=Xi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ze(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ua[i.type],c=Xi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(S);_||(g=new c(o,p*f,i.count*f/h),_=new rf(g,f/h),e.cache.add(S,_)),m=new rc(_,l,d%f/h,x)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new ze(g,l,x);if(i.sparse!==void 0){const p=Ua.SCALAR,S=Xi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new S(a[1],_,i.sparse.count*p),E=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=w.length;R<D;R++){const b=w[R];if(m.setX(b,E[R*l]),l>=2&&m.setY(b,E[R*l+1]),l>=3&&m.setZ(b,E[R*l+2]),l>=4&&m.setW(b,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=rh[d.magFilter]||Ie,h.minFilter=rh[d.minFilter]||bn,h.wrapS=ah[d.wrapS]||pi,h.wrapT=ah[d.wrapT]||pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Be&&h.minFilter!==Ie,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;e.isImageBitmapLoader===!0&&(x=function(g){const m=new Re(g);m.needsUpdate=!0,d(m)}),e.load(Ls.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),vn(u,a),u.userData.mimeType=a.mimeType||vv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new qh,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new cc,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return nn}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},l=r.extensions||{},c=[];if(l[Xt.KHR_MATERIALS_UNLIT]){const u=i[Xt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Pt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ve),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,Ae)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Ke);const h=r.alphaMode||Fa.OPAQUE;if(h===Fa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==un&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==un&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==un){const u=r.emissiveFactor;o.emissive=new Pt().setRGB(u[0],u[1],u[2],Ve)}return r.emissiveTexture!==void 0&&a!==un&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),vn(u,r),e.associations.set(u,{materials:t}),r.extensions&&hi(i,u,r),u})}createUniqueName(t){const e=ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return oh(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=_v(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=oh(new Ee,c,e),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?mv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){const g=h[f],m=a[f];let p;const S=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new of(g,S):new Kt(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Ih):m.mode===tn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,Po));else if(m.mode===tn.LINES)p=new ff(g,S);else if(m.mode===tn.LINE_STRIP)p=new Xr(g,S);else if(m.mode===tn.LINE_LOOP)p=new pf(g,S);else if(m.mode===tn.POINTS)p=new mf(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gv(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),vn(p,r),m.extensions&&hi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&hi(i,u[0],r),u[0];const d=new Tn;r.extensions&&hi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Oe(Uh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new gc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),vn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Bt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ac(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],x=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,S=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let _=0,M=d.length;_<M;_++){const w=d[_],E=f[_],R=x[_],D=g[_],b=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const y=n._createAnimationTracks(w,E,R,D,b);if(y)for(let P=0;P<y.length;P++)p.push(y[P])}const S=new np(r,void 0,p);return vn(S,i),S})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yv)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Wh:c.length>1?h=new Tn:c.length===1?h=c[0]:h=new fe,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),vn(h,r),r.extensions&&hi(n,h,r),r.matrix!==void 0){const u=new Bt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Tn;n.name&&(r.name=i.createUniqueName(n.name)),vn(r,n),n.extensions&&hi(e,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof fn||d instanceof Re)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,l=[];Kn[r.path]===Kn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Kn[r.path]){case Kn.weights:c=Qi;break;case Kn.rotation:c=ts;break;case Kn.translation:case Kn.scale:c=es;break;default:switch(n.itemSize){case 1:c=Qi;break;case 2:case 3:default:c=es;break}break}const h=i.interpolation!==void 0?pv[i.interpolation]:ks,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const x=new c(l[d]+"."+Kn[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ho(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ts?fv:vu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bv(s,t,e){const n=t.attributes,i=new Gn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const h=Ho(Xi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){const g=Ho(Xi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new An;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function oh(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Vo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Jt.workingColorSpace!==Ve&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),vn(s,t),bv(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?xv(s,t.targets,e):s})}function Sv(s,t,e){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0)/4294967296,r=new Float32Array(s*s);for(const{period:a,amp:o}of e){const l=new Float32Array(a*a).map(()=>i()),c=(h,u)=>l[(u+a)%a*a+(h+a)%a];for(let h=0;h<s;h++)for(let u=0;u<s;u++){const d=u/s*a,f=h/s*a,x=Math.floor(d),g=Math.floor(f),m=d-x,p=f-g,S=m*m*(3-2*m),_=p*p*(3-2*p),M=c(x,g)+(c(x+1,g)-c(x,g))*S,w=c(x,g+1)+(c(x+1,g+1)-c(x,g+1))*S;r[h*s+u]+=(M+(w-M)*_)*o}}return r}function Tv(s=256){const t=Sv(s,1234567,[{period:64,amp:.55},{period:128,amp:.3},{period:16,amp:.15}]);for(let o=0;o<t.length;o++)t[o]=Math.pow(t[o],1.6);const e=new Uint8Array(s*s*4),n=new Uint8Array(s*s*4),i=(o,l)=>t[(l+s)%s*s+(o+s)%s],r=2.2;for(let o=0;o<s;o++)for(let l=0;l<s;l++){const c=(i(l+1,o)-i(l-1,o))*r,h=(i(l,o+1)-i(l,o-1))*r,u=Math.hypot(c,h,1),d=(o*s+l)*4;e[d]=(-c/u*.5+.5)*255,e[d+1]=(-h/u*.5+.5)*255,e[d+2]=(1/u*.5+.5)*255,e[d+3]=255;const f=.42+(.9-i(l,o))*.22;n[d]=n[d+1]=n[d+2]=Math.max(0,Math.min(255,f*255)),n[d+3]=255}const a=o=>{const l=new Wr(o,s,s,Ze);return l.wrapS=l.wrapT=pi,l.repeat.set(36,36),l.magFilter=Ie,l.minFilter=bn,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l};return{normal:a(e),roughness:a(n)}}function Ev(s,t=Tv()){const e=new mn({map:s,color:new Pt(1,.97,.95),vertexColors:!0,roughness:1,roughnessMap:t.roughness,normalMap:t.normal,normalScale:new ct(.18,.18),metalness:0,specularIntensity:.55,sheen:.08,sheenColor:new Pt(16049888),sheenRoughness:.6});return e.userData.sss={wrap:.35,color:new Pt(.55,.2,.12)},e.userData.saturation=.66,e.onBeforeCompile=n=>{n.uniforms.sssWrap={value:e.userData.sss.wrap},n.uniforms.sssColor={value:e.userData.sss.color},n.uniforms.skinSaturation={value:e.userData.saturation},n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = mix( vec3( dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), diffuseColor.rgb, skinSaturation );`);const i=zt.lights_physical_pars_fragment,r=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}`;if(!i.includes(r))return;const a=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	float sssNL = dot( geometryNormal, directLight.direction );
	float sssWrapNL = saturate( ( sssNL + sssWrap ) / ( 1.0 + sssWrap ) );
	reflectedLight.directDiffuse += max( sssWrapNL - saturate( sssNL ), 0.0 ) * sssColor * directLight.color * BRDF_Lambert( material.diffuseColor );
}`;n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",`uniform float sssWrap;
uniform vec3 sssColor;
uniform float skinSaturation;
`+i.replace(r,a))},e.customProgramCacheKey=()=>"sonolab-skin-sss",e}function wv(s){const t=s.material;t.alphaTest=.5,t.alphaToCoverage=!0,t.transparent=!1,t.depthWrite=!0,t.roughness=.62,t.color.setRGB(.93,.86,.8),t.side=Ke,t.envMapIntensity=.6;const e=t.clone();e.alphaTest=.04,e.alphaToCoverage=!1,e.transparent=!0,e.depthWrite=!1,e.opacity=.95;const n=new Kt(s.geometry,e);return n.name=s.name+"-fringe",n.renderOrder=3,n.castShadow=!1,n.raycast=()=>{},s.renderOrder=1,s.castShadow=!0,n}const Is=s=>new C(s[0],s[1],s[2]);function Av(s,t){s.updateMatrixWorld(!0);const e=[];let n;if(s.traverse(l=>{const c=l;if(!c.isMesh)return;if(c.castShadow=!0,c.receiveShadow=!0,c.name==="BodyFull"||c.parent?.name==="BodyFull"||c.name==="Briefs"||c.parent?.name==="Briefs"){(c.parent&&c.parent.name!==s.name?c.parent:c).visible=!1;return}e.push(c),(c.name==="Body"||c.parent?.name==="Body")&&(n=c)}),!n)throw new Error("В модели нет сетки Body");n.name="Body";const i=Is(t.landmarks.elbowR),r=Is(t.landmarks.wristR),a=r.clone().sub(i),o=a.length();return a.normalize(),{root:s,skinMeshes:e,forearm:n,forearmAxis:{elbow:i,wrist:r},isOnForearm(l){const c=l.clone().sub(i),h=c.dot(a),u=c.sub(a.clone().multiplyScalar(h)).length();return h>-.03&&h<o+.02&&u<.075},focus:{body:Is(t.landmarks.pelvis).add(new C(.05,0,-.2)),forearm:i.clone().lerp(r,.5)},meta:t}}function Rv(s){const t=[];s.traverse(e=>{e.isMesh&&t.push(e)});for(const e of t){const n=e.material,i=e.name==="Body"||e.parent?.name==="Body"||e.name==="BodyFull"||e.parent?.name==="BodyFull",r=e.name==="Hair"||e.parent?.name==="Hair";if(i)e.material=Ev(n.map),n.dispose();else if(r){const a=wv(e);e.parent?.add(a)}else n.alphaTest>0||n.transparent?(n.alphaTest>0&&(n.alphaToCoverage=!0),n.depthWrite=!n.transparent,e.castShadow=!1,e.renderOrder=n.transparent?2:1):(e.name==="Clothes"||e.parent?.name==="Clothes")&&(n.roughness=.92,n.envMapIntensity=.7)}}async function Cv(s,t){const[e,n]=await Promise.all([fetch(new URL("models/human.json",s)).then(r=>{if(!r.ok)throw new Error(`Паспорт модели: HTTP ${r.status}`);return r.json()}),new H_().loadAsync(new URL("models/human.glb",s).toString(),r=>{t&&r.total&&t(r.loaded/r.total)})]);n.scene.name="human";const i=Av(n.scene,e);return Rv(n.scene),i}function Pv(s){const t=new Tn;t.name="table";const e=new nn({color:15331058,roughness:.75}),n=new nn({color:12375014,roughness:.95}),i=new nn({color:7831690,roughness:.45,metalness:.6}),r=new Kt(new dn(2.05,.07,.64),e);r.position.set(-.08,-.035,0),r.receiveShadow=!0,t.add(r);const a=new Kt(new dn(1.9,.004,.62),n);a.position.set(-.1,5e-4,0),a.receiveShadow=!0,t.add(a);const o=new Kt(new dn(1.9,.08,.5),i);o.position.set(-.08,-.11,0),t.add(o);for(const _ of[-.85,.65]){const M=new Kt(new Vs(.04,.05,.75,20),i);M.position.set(_,-.52,0),t.add(M)}const l=Is(s.landmarks.shoulderR),c=Is(s.landmarks.middleFingerBaseR),h=new C(c.x-l.x,0,c.z-l.z),u=h.length();h.normalize();const d=u+.12,f=.05,x=s.forearmMinY-.002,g=new Kt(new dn(.17,f,d),e),m=l.clone().add(h.clone().multiplyScalar(d/2-.02));g.position.set(m.x,x-f/2,m.z),g.rotation.y=Math.atan2(h.x,h.z),g.receiveShadow=!0,t.add(g);const p=new Kt(new Vs(.02,.025,.8+x,16),i),S=l.clone().add(h.clone().multiplyScalar(d*.75));return p.position.set(S.x,(x-f-.8)/2,S.z),t.add(p),t}class Lv{constructor(t,e){this.host=t,this.human=e,this.renderer=new f_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bh,this.renderer.outputColorSpace=Ae,this.renderer.toneMapping=Sh,this.renderer.toneMappingExposure=1,this.renderer.domElement.style.touchAction="none",this.renderer.domElement.setAttribute("aria-label","Трёхмерная сцена: человек и датчик"),t.appendChild(this.renderer.domElement);const n=new Bo(this.renderer);this.scene.environment=n.fromScene(new V_,.04).texture,this.scene.background=new Pt(14673644);const i=new hp(16777215,12174284,.55);this.scene.add(i);const r=new Oo(16774378,1.7);r.position.set(.8,2.6,-1.2),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-1.3,r.shadow.camera.right=1.3,r.shadow.camera.top=1.3,r.shadow.camera.bottom=-1.3,r.shadow.bias=-4e-4,r.shadow.normalBias=.01,this.scene.add(r);const a=new Oo(16773606,.5);a.position.set(-1.5,1.4,1.5),this.scene.add(a);const o=new Kt(new Xs(12,12),new nn({color:13226456,roughness:.95}));o.rotation.x=-Math.PI/2,o.position.y=-.88,o.receiveShadow=!0,this.scene.add(o),this.scene.add(Pv(e.meta)),this.scene.add(e.root),this.camera=new Oe(38,1,.01,30);const l=this.human.focus;this.presets={body:{pos:new C(-.12,2.05,-2.55),target:new C(-.05,.05,-.22)},forearm:{pos:l.forearm.clone().add(new C(.3,.4,-.04)),target:l.forearm.clone()},region:{pos:l.forearm.clone().add(new C(.3,.4,-.04)),target:l.forearm.clone()}},this.camera.position.copy(this.presets.body.pos),this.controls=new R_(this.camera,this.renderer.domElement),this.controls.target.copy(this.presets.body.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.minDistance=.18,this.controls.maxDistance=4.5,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.resize()}renderer;scene=new Gh;camera;controls;tween=null;presets;resizeObs;resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.fov=t/e<.9?52:38,this.camera.updateProjectionMatrix()}setRegionFocus(t,e,n=.42){const i=t.clone().addScaledVector(e.clone().normalize(),n).add(new C(-.12,.08,0));this.presets.region={pos:i,target:t.clone()}}goTo(t,e=650){const n=this.presets[t];this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[n.pos.clone(),n.target.clone()],t0:performance.now(),dur:e}}setCamera(t,e){this.tween=null,this.camera.position.set(...t),this.controls.target.set(...e),this.controls.update()}cameraState(){return{position:this.camera.position.toArray(),target:this.controls.target.toArray()}}render(t){if(this.tween){const e=Math.min(1,(t-this.tween.t0)/this.tween.dur),n=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],n),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],n),e>=1&&(this.tween=null)}this.controls.update(),this.renderer.render(this.scene,this.camera)}}class Iv{constructor(t,e){this.baseUrl=t,this.manifest=e,this.frameCount=e.frames.count}frameCount;cache=new Map;inflight=new Map;failed=new Set;url(t){const e=this.manifest.frames.pattern.replace("{id:04d}",String(t).padStart(4,"0"));return new URL(e,this.baseUrl).toString()}get(t){return this.cache.get(t)}load(t){const e=this.cache.get(t);if(e)return Promise.resolve(e);let n=this.inflight.get(t);return n||(n=this.fetchDecode(t).then(i=>(this.cache.set(t,i),this.inflight.delete(t),i)).catch(i=>{throw this.inflight.delete(t),this.failed.add(t),i}),this.inflight.set(t,n)),n}async fetchDecode(t){const e=await fetch(this.url(t));if(!e.ok)throw new Error(`Кадр ${t}: HTTP ${e.status}`);const n=await e.blob();if("createImageBitmap"in window)return createImageBitmap(n,{imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const i=new Image;return i.src=URL.createObjectURL(n),await i.decode(),i}async preloadAll(t,e,n=6){const i=Array.from({length:this.frameCount},(l,c)=>c).sort((l,c)=>Math.abs(l-t)-Math.abs(c-t));let r=0,a=0;const o=async()=>{for(;r<i.length;){const l=i[r++];try{await this.load(l)}catch{}e(++a,this.frameCount)}};await Promise.all(Array.from({length:n},o))}}class Dv{constructor(t,e,n,i){this.canvas=t,this.source=e,this.frameW=n,this.frameH=i,t.width=n,t.height=i;const r=t.getContext("2d",{alpha:!1});if(!r)throw new Error("Canvas 2D недоступен");this.ctx=r,this.clear("idle")}ctx;seq=0;status="idle";shownFrameId=null;onStatus=()=>{};onDrawn=()=>{};show(t){const e=++this.seq,n=this.source.get(t);return n?(this.draw(n,t),!0):(this.setStatus("loading",null),this.source.load(t).then(i=>{e===this.seq&&this.draw(i,t)}).catch(()=>{e===this.seq&&this.clear("error")}),!1)}clear(t){this.seq++,this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.frameW,this.frameH),this.shownFrameId=null,this.setStatus(t,null)}draw(t,e){this.ctx.drawImage(t,0,0,this.frameW,this.frameH),this.shownFrameId=e,this.setStatus("ready",e),this.onDrawn(e,performance.now())}setStatus(t,e){this.status=t,this.onStatus(t,e)}}const ch="http://www.w3.org/2000/svg",Er=(s,t)=>s.length?"M"+s.map(e=>`${e[0].toFixed(1)},${e[1].toFixed(1)}`).join("L")+(t?"Z":""):"";class Nv{constructor(t,e,n){this.w=e,this.h=n,this.svg=document.createElementNS(ch,"svg"),this.svg.setAttribute("viewBox",`0 0 ${e} ${n}`),this.svg.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg.classList.add("mark-overlay"),this.svg.setAttribute("aria-label","Слой разметки"),t.appendChild(this.svg),this.svg.addEventListener("pointerdown",r=>{const a=this.toImage(r);if(!this.drawing){const o=r.target.closest("[data-vertex]"),l=r.target.closest("[data-mark]");if(o||l){const c=(o??l).getAttribute(o?"data-vertex-of":"data-mark");this.dragging={id:c,vertex:o?Number(o.getAttribute("data-vertex")):null,pointerId:r.pointerId},this.svg.setPointerCapture(r.pointerId),o||this.onMarkDown(c),r.preventDefault();return}}a&&this.onImageClick(a.x,a.y)}),this.svg.addEventListener("pointermove",r=>{if(this.dragging&&this.dragging.pointerId===r.pointerId){const o=this.toImage(r,!0);this.dragging.vertex!==null?this.onVertexDrag(this.dragging.id,this.dragging.vertex,o.x,o.y):this.onMarkDrag(this.dragging.id,o.x,o.y);return}const a=this.toImage(r,!0);a&&this.onImageMove(a.x,a.y)});const i=r=>{if(!this.dragging||this.dragging.pointerId!==r.pointerId)return;const a=this.dragging;this.dragging=null,a.vertex!==null?this.onVertexDragEnd(a.id,a.vertex):this.onMarkDragEnd(a.id)};this.svg.addEventListener("pointerup",i),this.svg.addEventListener("pointercancel",i)}svg;opacity=.9;showLabels=!0;onImageClick=()=>{};onImageMove=()=>{};onMarkDown=()=>{};onMarkDrag=()=>{};onMarkDragEnd=()=>{};onVertexDrag=()=>{};onVertexDragEnd=()=>{};drawing=!1;dragging=null;set interactive(t){this.svg.classList.toggle("interactive",t)}toImage(t,e=!1){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t.clientX,t.clientY).matrixTransform(n.inverse());return e?{x:Math.min(this.w,Math.max(0,i.x)),y:Math.min(this.h,Math.max(0,i.y))}:i.x<0||i.y<0||i.x>this.w||i.y>this.h?null:{x:i.x,y:i.y}}toScreen(t,e){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t,e).matrixTransform(n);return{x:i.x,y:i.y}}imagePxPerScreenPx(){const t=this.svg.getScreenCTM();return t?1/Math.hypot(t.a,t.b):1}clear(){this.svg.replaceChildren()}el(t,e,n=this.svg){const i=document.createElementNS(ch,t);for(const[r,a]of Object.entries(e))i.setAttribute(r,String(a));return n.appendChild(i),i}label(t,e,n,i,r,a=!1){const o=n.length*11.5;let l,c;a?(l=Math.min(this.w-o/2-4,Math.max(o/2+4,t)),c="middle"):t+12+o>this.w?(l=t-12,c="end"):(l=t+12,c="start");const h=Math.max(22,a?e+7:e-10),u=this.el("text",{x:l,y:h,class:"mark-label",fill:i,"text-anchor":c},r);u.textContent=n}cross(t,e,n,i){this.el("path",{d:`M${t-7},${e-7}L${t+7},${e+7}M${t+7},${e-7}L${t-7},${e+7}`,class:n},i)}render(t){this.clear(),t.items?.length&&this.drawItems(t.items,!!t.showTolerance),t.feedback&&this.drawFeedback(t.feedback),t.draft&&this.drawDraft(t.draft)}drawItems(t,e){const n=this.el("g",{opacity:this.opacity}),i=[...t].sort((r,a)=>(r.mark.kind==="contour"?0:1)-(a.mark.kind==="contour"?0:1));for(const{mark:r,structure:a,selected:o}of i){const l=r.status==="verified"?"":" draft",c=this.el("g",{"data-mark":r.id,class:"mark"+(o?" selected":"")+(r.kind==="contour"?" contour":"")},n);if(r.kind==="contour"&&r.points){this.el("path",{d:Er(r.points,!0),class:"mark-poly"+l,stroke:a.color,fill:a.color},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c,!0),o&&r.points.forEach(([h,u],d)=>{this.el("circle",{cx:h,cy:u,r:7,class:"vertex","data-vertex":d,"data-vertex-of":r.id},n)});continue}e&&this.el("circle",{cx:r.x,cy:r.y,r:r.tolerancePx,class:"mark-tol",stroke:a.color},c),this.el("circle",{cx:r.x,cy:r.y,r:16,class:"mark-hit"},c),this.el("circle",{cx:r.x,cy:r.y,r:o?9:7,fill:a.color,class:"mark-dot"+l},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c)}}drawFeedback(t){const e=this.el("g",{}),n=t.structure.color,i=t.reference;i.kind==="contour"&&i.points?this.el("path",{d:Er(i.points,!0),class:"mark-poly ref",stroke:n,fill:n},e):(this.el("circle",{cx:i.x,cy:i.y,r:i.tolerancePx,class:"mark-tol",stroke:n},e),this.el("circle",{cx:i.x,cy:i.y,r:6,fill:n,class:"mark-dot"},e)),this.label(i.x,i.y,"эталон: "+t.structure.name,n,e,i.kind==="contour"),t.polygon&&this.el("path",{d:Er(t.polygon,!0),class:"answer-poly "+(t.hit?"hit":"miss")},e),t.click&&!t.polygon&&(i.kind!=="contour"&&this.el("line",{x1:i.x,y1:i.y,x2:t.click.x,y2:t.click.y,class:"fb-line"},e),this.cross(t.click.x,t.click.y,t.hit?"fb-click hit":"fb-click miss",e))}drawDraft(t){const e=this.el("g",{class:"draft-g"}),n=t.cursor&&t.points.length?[...t.points,[t.cursor.x,t.cursor.y]]:t.points;n.length>=2&&this.el("path",{d:Er(n,!1),class:"draft-line",stroke:t.color},e),t.points.forEach(([i,r],a)=>{this.el("circle",{cx:i,cy:r,r:a===0&&t.closable?10:5,class:"draft-vertex"+(a===0?" first":""),stroke:t.color},e)})}}function Hr(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[i],[l,c]=e[r];o>t!=c>t&&s<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function _i(s){let t=0,e=0,n=0;for(let i=0,r=s.length-1;i<s.length;r=i++){const a=s[r][0]*s[i][1]-s[i][0]*s[r][1];t+=a,e+=(s[r][0]+s[i][0])*a,n+=(s[r][1]+s[i][1])*a}if(Math.abs(t)<1e-9){const i=s.length||1;return[s.reduce((r,a)=>r+a[0],0)/i,s.reduce((r,a)=>r+a[1],0)/i]}return[e/(3*t),n/(3*t)]}function Uv(s,t,e){let n=1/0;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[r],[l,c]=e[i],h=l-a,u=c-o,d=h*h+u*u||1,f=Math.max(0,Math.min(1,((s-a)*h+(t-o)*u)/d));n=Math.min(n,Math.hypot(s-(a+f*h),t-(o+f*u)))}return n}function Fv(s,t,e=2){if(s.length<3||t.length<3)return 0;const n=[...s,...t].map(d=>d[0]),i=[...s,...t].map(d=>d[1]),r=Math.floor(Math.min(...n)),a=Math.ceil(Math.max(...n)),o=Math.floor(Math.min(...i)),l=Math.ceil(Math.max(...i));let c=0,h=0,u=0;for(let d=o+e/2;d<l;d+=e)for(let f=r+e/2;f<a;f+=e){const x=Hr(f,d,s),g=Hr(f,d,t);x&&c++,g&&h++,x&&g&&u++}return c+h?2*u/(c+h):0}const Fe=s=>s.kind??"point",Go=.6,Ov=[{id:"radial-artery",name:"Лучевая артерия",class:"artery",color:"#e5484d"},{id:"ulnar-artery",name:"Локтевая артерия",class:"artery",color:"#f76b15"},{id:"median-nerve",name:"Срединный нерв",class:"nerve",color:"#ffd60a"},{id:"ulnar-nerve",name:"Локтевой нерв",class:"nerve",color:"#f5d90a"},{id:"radial-nerve-superficial",name:"Поверхностная ветвь лучевого нерва",class:"nerve",color:"#ffe066"},{id:"radial-veins",name:"Лучевые вены",class:"vein",color:"#3e63dd"},{id:"superficial-vein",name:"Подкожная вена",class:"vein",color:"#5b8def"},{id:"radius",name:"Лучевая кость",class:"bone",color:"#e8e8e8"},{id:"ulna",name:"Локтевая кость",class:"bone",color:"#cfcfcf"},{id:"fds",name:"Поверхностный сгибатель пальцев",class:"muscle",color:"#d6409f"},{id:"fdp",name:"Глубокий сгибатель пальцев",class:"muscle",color:"#ab4aba"},{id:"fcr",name:"Лучевой сгибатель запястья",class:"muscle",color:"#8e4ec6"},{id:"fcu",name:"Локтевой сгибатель запястья",class:"muscle",color:"#6e56cf"},{id:"flexor-tendons",name:"Сухожилия сгибателей",class:"tendon",color:"#46a758"},{id:"interosseous-membrane",name:"Межкостная мембрана",class:"fascia",color:"#12a594"},{id:"fascia",name:"Фасция",class:"fascia",color:"#0ea5b7"}],lh={nerve:"нерв",artery:"артерия",vein:"вена",muscle:"мышца",tendon:"сухожилие",bone:"кость",fascia:"фасция",other:"другое"},kv=24;function hh(s,t,e=Ov){return{schema:"sonolab.annotations/1",caseId:s,dataVersion:t,version:0,updatedAt:new Date(0).toISOString(),structures:e,frames:{}}}function ka(s,t,e,n,i,r){const a=[];s.schema!=="sonolab.annotations/1"&&a.push("неизвестный формат разметки"),s.caseId!==t&&a.push(`разметка для другого случая (${s.caseId})`),s.dataVersion!==e&&a.push(`разметка для другой версии данных (${s.dataVersion} ≠ ${e})`);const o=new Set(s.structures.map(l=>l.id));for(const[l,c]of Object.entries(s.frames)){const h=Number(l);(!Number.isInteger(h)||h<0||h>=n)&&a.push(`кадр ${l} вне диапазона`);for(const u of c)o.has(u.structureId)||a.push(`кадр ${l}: неизвестная структура ${u.structureId}`),(u.x<0||u.y<0||u.x>i||u.y>r)&&a.push(`кадр ${l}: точка вне кадра`),Fe(u)==="contour"&&(!u.points||u.points.length<3?a.push(`кадр ${l}: контур меньше трёх вершин`):u.points.some(([d,f])=>d<0||f<0||d>i||f>r)&&a.push(`кадр ${l}: вершина контура вне кадра`))}return a}let Bv=0;const uh=()=>`m${Date.now().toString(36)}${(Bv++).toString(36)}`;class wr{constructor(t){this.set=t}touch(){this.set.version+=1,this.set.updatedAt=new Date().toISOString()}marks(t){return this.set.frames[String(t)]??[]}framesWithMarks(){return Object.keys(this.set.frames).map(Number).filter(t=>this.set.frames[String(t)].length>0).sort((t,e)=>t-e)}add(t,e,n,i,r,a=kv){const o=new Date().toISOString(),l=this.set.frames[String(t)]??[],c=l.find(u=>u.structureId===e&&Fe(u)==="point");if(c)return Object.assign(c,{x:n,y:i,author:r,updatedAt:o,status:"draft",origin:"manual"}),this.touch(),c;const h={id:uh(),structureId:e,x:n,y:i,tolerancePx:a,author:r,status:"draft",createdAt:o,updatedAt:o,origin:"manual"};return this.set.frames[String(t)]=[...l,h],this.touch(),h}addContour(t,e,n,i){if(n.length<3)throw new Error("Контур должен содержать минимум три вершины");const r=new Date().toISOString(),a=n.map(([d,f])=>[d,f]),[o,l]=_i(a),c=this.set.frames[String(t)]??[],h=c.find(d=>d.structureId===e&&Fe(d)==="contour");if(h)return Object.assign(h,{points:a,x:o,y:l,author:i,updatedAt:r,status:"draft",origin:"manual"}),this.touch(),h;const u={id:uh(),structureId:e,kind:"contour",points:a,x:o,y:l,tolerancePx:0,author:i,status:"draft",createdAt:r,updatedAt:r,origin:"manual"};return this.set.frames[String(t)]=[...c,u],this.touch(),u}moveVertex(t,e,n,i,r){const a=this.marks(t).find(o=>o.id===e);!a||!a.points||!a.points[n]||(a.points[n]=[i,r],[a.x,a.y]=_i(a.points),a.updatedAt=new Date().toISOString(),a.status="draft",this.touch())}move(t,e,n,i){const r=this.marks(t).find(a=>a.id===e);r&&(r.x=n,r.y=i,r.updatedAt=new Date().toISOString(),r.status="draft",this.touch())}remove(t,e){const n=this.marks(t).filter(i=>i.id!==e);n.length?this.set.frames[String(t)]=n:delete this.set.frames[String(t)],this.touch()}setStatus(t,e,n){for(const i of this.marks(t))i.status=e,i.updatedAt=new Date().toISOString(),e==="verified"&&(i.note=`проверено: ${n}`);this.touch()}setTolerance(t,e,n){const i=this.marks(t).find(r=>r.id===e);i&&(i.tolerancePx=n,this.touch())}copyFrom(t,e,n){const i=this.marks(t);let r=0;for(const a of i){const o=Fe(a);if(this.marks(e).some(c=>c.structureId===a.structureId&&Fe(c)===o))continue;const l=o==="contour"?this.addContour(e,a.structureId,a.points,n):this.add(e,a.structureId,a.x,a.y,n,a.tolerancePx);l.origin="copied",r++}return r}}function dh(s,t){const e=t.mode??"point",n=[];for(const[a,o]of Object.entries(s.frames))for(const l of o){if(t.onlyVerified&&l.status!=="verified")continue;const c=Fe(l);if(e==="contour"&&c!=="contour")continue;const h=e==="point"?"point":c==="contour"?"contour":"point";e==="point"&&c==="contour"&&o.some(u=>u.structureId===l.structureId&&Fe(u)==="point")||n.push({frameId:Number(a),structureId:l.structureId,reference:l,answer:h})}n.sort((a,o)=>a.frameId-o.frameId||a.structureId.localeCompare(o.structureId));let i=t.seed>>>0||1;const r=()=>(i=i*1664525+1013904223>>>0)/4294967296;for(let a=n.length-1;a>0;a--){const o=Math.floor(r()*(a+1));[n[a],n[o]]=[n[o],n[a]]}return t.limit?n.slice(0,t.limit):n}function zv(s,t,e){const n=s.reference;if(Fe(n)==="contour"&&n.points){const r=Hr(t,e,n.points);return{errorPx:r?0:Uv(t,e,n.points),hit:r}}const i=Math.hypot(t-n.x,e-n.y);return{errorPx:i,hit:i<=n.tolerancePx}}function Vv(s,t){const e=s.reference.points??[],n=Fv(e,t),[i,r]=_i(e),[a,o]=_i(t);return{dice:n,errorPx:Math.hypot(i-a,r-o),hit:n>=Go}}function fh(s){const t=s.filter(o=>o.errorPx!==null),e=o=>(o.answer??"point")==="point",n=t.filter(e).map(o=>o.errorPx).sort((o,l)=>o-l),i=o=>o.filter(l=>l.answer==="contour"&&l.dice!==null).map(l=>l.dice),r=o=>o.length?o.reduce((l,c)=>l+c,0)/o.length:null,a=new Map;for(const o of s)a.set(o.structureId,[...a.get(o.structureId)??[],o]);return{total:s.length,answered:t.length,hits:s.filter(o=>o.hit).length,skipped:s.length-t.length,hitRate:s.length?s.filter(o=>o.hit).length/s.length:0,meanErrorPx:r(n),medianErrorPx:n.length?n[Math.floor(n.length/2)]:null,meanDice:r(i(s)),byStructure:[...a.entries()].map(([o,l])=>({structureId:o,name:l[0].structureName,total:l.length,hits:l.filter(c=>c.hit).length,meanErrorPx:r(l.filter(c=>c.errorPx!==null&&e(c)).map(c=>c.errorPx)),meanDice:r(i(l))}))}}function Hv(s){const t="задание;кадр;структура;ответ;x;y;ошибка_пикс;dice;засчитано;статус_эталона;время_мс;когда",e=s.attempts.map(n=>[n.taskIndex+1,n.frameId,n.structureName,(n.answer??"point")==="contour"?"обводка":"щелчок",n.clickX?.toFixed(1)??"",n.clickY?.toFixed(1)??"",n.errorPx?.toFixed(1)??"пропуск",n.dice?.toFixed(3)??"",n.hit?"да":"нет",n.referenceStatus,n.timeMs,n.at].join(";"));return[t,...e].join(`
`)}function $(s,t={},...e){const n=document.createElement(s);for(const[i,r]of Object.entries(t))i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="class"?n.className=String(r):i==="dataset"?Object.assign(n.dataset,r):r!=null&&r!==!1&&(n[i]=r);for(const i of e)i!=null&&i!==!1&&n.append(i);return n}const _n={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}},del(s){try{localStorage.removeItem(s)}catch{}}};function Ba(s,t,e){const n=$("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}const Zn=s=>s===null?"—":`${s.toFixed(1)} пикс.`,Ar=s=>s===null?"—":s.toFixed(2),ph=12;class Gv{constructor(t){this.d=t;const e=t.manifest;this.overlay=new Nv(t.overlayHost,e.frames.width,e.frames.height),this.local=new wr(hh(e.caseId,e.dataVersion));const n=_n.get(this.localKey);if(n)try{const i=JSON.parse(n);ka(i,e.caseId,e.dataVersion,e.frames.count,e.frames.width,e.frames.height).length===0&&(this.local=new wr(i),this.hasLocal=!0)}catch{}this.author=_n.get("sonolab.author")??"",this.student=_n.get("sonolab.student")??"",this.selectedStructure=this.local.set.structures[0].id,this.overlay.onImageClick=(i,r)=>this.imageClick(i,r),this.overlay.onImageMove=(i,r)=>{this.draft.length&&(this.cursor={x:i,y:r},this.drawOverlay())},this.overlay.onVertexDrag=(i,r,a,o)=>{if(this.mode!=="expert")return;const l=this.findMark(i);l?.points?.[r]&&(l.points[r]=[a,o],[l.x,l.y]=_i(l.points),this.drawOverlay())},this.overlay.onVertexDragEnd=(i,r)=>{if(this.mode!=="expert"||this.frameId===null)return;const a=this.findMark(i);a?.points?.[r]&&this.local.moveVertex(this.frameId,i,r,a.points[r][0],a.points[r][1]),this.saveLocal(),this.render()},document.addEventListener("keydown",i=>{if(!this.drawingActive())return;const r=i.target;r&&(r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA")||(i.key==="Enter"?(i.preventDefault(),this.closeDraft()):i.key==="Escape"?(i.preventDefault(),this.cancelDraft()):i.key==="Backspace"&&(i.preventDefault(),this.undoVertex()))}),this.overlay.onMarkDown=i=>{if(this.mode!=="expert")return;this.selectedMark=i;const r=this.findMark(i);r&&(this.selectedStructure=r.structureId),this.render()},this.overlay.onMarkDrag=(i,r,a)=>{if(this.mode!=="expert"||this.frameId===null)return;const o=this.findMark(i);o&&Fe(o)==="point"&&(o.x=r,o.y=a,this.drawOverlay())},this.overlay.onMarkDragEnd=i=>{if(this.mode!=="expert"||this.frameId===null)return;const r=this.findMark(i);r&&Fe(r)==="point"&&(this.local.move(this.frameId,i,r.x,r.y),this.saveLocal()),this.render()},this.renderTabs(),this.loadPublished().then(()=>this.render()),this.render()}mode="view";overlay;published=null;local;hasLocal=!1;frameId=null;selectedStructure;selectedMark=null;author="";showMarks=!0;message="";tool="point";draft=[];cursor=null;session=null;tasks=[];taskIndex=0;taskStarted=0;feedback=null;taskMode="both";trainSource="local";onlyVerified=!1;student="";get localKey(){return`sonolab.annotations.${this.d.manifest.caseId}.${this.d.manifest.dataVersion}`}async loadPublished(){if(this.d.annotationsUrl)try{const t=await fetch(this.d.annotationsUrl);if(!t.ok)return;const e=await t.json(),n=this.d.manifest,i=ka(e,n.caseId,n.dataVersion,n.frames.count,n.frames.width,n.frames.height);if(i.length){this.message="Опубликованная разметка не принята: "+i[0];return}this.published=e,this.hasLocal||(this.trainSource="published")}catch{}}setFrame(t){t!==this.frameId&&(this.frameId=t,this.mode==="expert"&&(this.selectedMark=null),this.draft=[],this.cursor=null,this.render())}viewSet(){return this.mode==="expert"?this.local.set:this.mode==="train"?this.trainSource==="local"?this.local.set:this.published:this.hasLocal?this.local.set:this.published}structure(t){return(this.viewSet()??this.local.set).structures.find(n=>n.id===t)??{id:t,name:t,class:"other",color:"#ffffff"}}findMark(t){return this.frameId===null?void 0:this.local.marks(this.frameId).find(e=>e.id===t)}saveLocal(){this.hasLocal=this.local.framesWithMarks().length>0,this.hasLocal?_n.set(this.localKey,JSON.stringify(this.local.set)):_n.del(this.localKey)}drawingActive(){if(this.frameId===null)return!1;if(this.mode==="expert")return this.tool==="contour";if(this.mode==="train"&&this.session&&!this.feedback){const t=this.tasks[this.taskIndex];return!!t&&t.answer==="contour"&&t.frameId===this.frameId}return!1}addDraftVertex(t,e){const n=ph*this.overlay.imagePxPerScreenPx();if(this.draft.length>=3&&Math.hypot(t-this.draft[0][0],e-this.draft[0][1])<=n)return this.closeDraft();this.draft.push([t,e]),this.cursor={x:t,y:e},this.render()}undoVertex(){this.draft.pop(),this.render()}cancelDraft(){this.draft=[],this.cursor=null,this.render()}closeDraft(){if(this.draft.length<3)return this.message="Для контура нужно минимум три вершины.",this.render();const t=this.draft;if(this.draft=[],this.cursor=null,this.mode==="expert"&&this.frameId!==null){const e=this.local.addContour(this.frameId,this.selectedStructure,t,this.author.trim());this.selectedMark=e.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const e=this.tasks[this.taskIndex],n=Vv(e,t),[i,r]=_i(t);this.record(e,{x:i,y:r},n.errorPx,n.hit,n.dice,t)}}imageClick(t,e){if(this.frameId!==null){if(this.mode==="expert"){if(!this.author.trim()){this.message="Укажите автора разметки — без него метки не сохраняются.",this.render();return}if(this.tool==="contour")return this.addDraftVertex(t,e);const n=this.local.add(this.frameId,this.selectedStructure,t,e,this.author.trim());this.selectedMark=n.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const n=this.tasks[this.taskIndex];if(!n||n.frameId!==this.frameId)return;if(n.answer==="contour")return this.addDraftVertex(t,e);const i=zv(n,t,e);this.record(n,{x:t,y:e},i.errorPx,i.hit,null,null)}}}record(t,e,n,i,r,a){this.session&&(this.session.attempts.push({taskIndex:this.taskIndex,frameId:t.frameId,structureId:t.structureId,structureName:this.structure(t.structureId).name,answer:t.answer,dice:r,polygon:a??void 0,clickX:e?.x??null,clickY:e?.y??null,errorPx:n,hit:i,referenceStatus:t.reference.status,at:new Date().toISOString(),timeMs:Math.round(performance.now()-this.taskStarted)}),this.feedback={click:e,polygon:a,hit:i,errorPx:n,dice:r},this.draft=[],this.cursor=null,this.render())}drawOverlay(){const t=this.overlay;if(t.interactive=this.mode==="expert"||this.mode==="train"&&!!this.session&&!this.feedback,t.drawing=this.drawingActive(),this.frameId===null)return t.clear();const e=ph*t.imagePxPerScreenPx(),n=this.draft.length&&this.drawingActive()?{points:this.draft,cursor:this.cursor,color:this.mode==="expert"?this.structure(this.selectedStructure).color:"#ffffff",closable:this.draft.length>=3&&!!this.cursor&&Math.hypot(this.cursor.x-this.draft[0][0],this.cursor.y-this.draft[0][1])<=e}:null;if(this.mode==="train"&&this.session){const a=this.tasks[this.taskIndex];return a&&this.feedback&&a.frameId===this.frameId?t.render({feedback:{reference:a.reference,structure:this.structure(a.structureId),click:this.feedback.click,polygon:this.feedback.polygon,hit:this.feedback.hit}}):t.render({draft:n})}const i=this.viewSet(),r=i&&this.showMarks?i.frames[String(this.frameId)]??[]:[];t.render({items:r.map(a=>({mark:a,structure:this.structure(a.structureId),selected:a.id===this.selectedMark})),showTolerance:this.mode==="expert",draft:n})}renderTabs(){const t=[["view","Просмотр"],["expert","Эксперт"],["train","Тренировка"]];this.d.tabsHost.replaceChildren(...t.map(([e,n])=>$("button",{type:"button",class:"tab"+(this.mode===e?" active":""),textContent:n,dataset:{mode:e},ariaPressed:String(this.mode===e),onclick:()=>{this.mode=e,this.selectedMark=null,this.message="",this.renderTabs(),this.render()}})))}render(){this.drawOverlay();const t=this.mode==="view"?this.renderView():this.mode==="expert"?this.renderExpert():this.renderTrain();this.d.bodyHost.replaceChildren(t)}displayControls(){return $("div",{class:"ann-row"},$("label",{class:"chk"},$("input",{type:"checkbox",checked:this.showMarks,onchange:t=>(this.showMarks=t.target.checked,this.drawOverlay())}),"метки"),$("label",{class:"chk"},$("input",{type:"checkbox",checked:this.overlay.showLabels,onchange:t=>(this.overlay.showLabels=t.target.checked,this.drawOverlay())}),"подписи"),$("label",{class:"chk"},"прозрачность",$("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:String(this.overlay.opacity),oninput:t=>(this.overlay.opacity=Number(t.target.value),this.drawOverlay())})))}frameMarksInfo(t){if(this.frameId===null)return $("p",{class:"ann-note"},"Кадр не показан — разметка недоступна.");const e=t?.frames[String(this.frameId)]??[];return e.length?$("ul",{class:"ann-list"},...e.map(n=>{const i=this.structure(n.structureId);return $("li",{},$("span",{class:"sw",style:`background:${i.color}`}),`${i.name} · ${Fe(n)==="contour"?`контур, ${n.points?.length??0} верш.`:"точка"} · ${n.status==="verified"?"проверено":"черновик"}${n.origin==="copied"?" (скопировано)":""} · ${n.author}`)})):$("p",{class:"ann-note",dataset:{testid:"no-marks"}},"Для этого кадра разметки нет.")}sourceLine(t,e){if(!t)return $("p",{class:"ann-note"},"Эталонной разметки пока нет. Создайте её в режиме «Эксперт».");const n=Object.values(t.frames).filter(o=>o.length).length,i=Object.values(t.frames).reduce((o,l)=>o+l.length,0),r=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>c.status==="verified").length,0),a=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>Fe(c)==="contour").length,0);return $("p",{class:"ann-note"},`${e==="published"?"Опубликованная":"Локальная (этот браузер)"} разметка v${t.version}: ${i-a} точек и ${a} контуров на ${n} кадрах, проверено ${r}. ${this.d.manifest.imageGeometry.pixelSpacingMm?`Ошибки измеряются в пикселях кадра (1 пикс. = ${this.d.manifest.imageGeometry.pixelSpacingMm} мм).`:"Ошибки измеряются в пикселях кадра — масштаб в мм в источнике не указан."}`)}renderView(){const t=this.viewSet();return $("div",{class:"ann"},this.sourceLine(t,this.hasLocal?"local":this.published?"published":null),this.displayControls(),this.frameMarksInfo(t))}renderExpert(){const t=this.local.set,e=new Map;for(const c of t.structures)e.set(c.class,[...e.get(c.class)??[],c]);const n=$("select",{id:"annStructure",onchange:c=>(this.selectedStructure=c.target.value,this.selectedMark=null,this.render())},...[...e.entries()].map(([c,h])=>$("optgroup",{label:lh[c]},...h.map(u=>$("option",{value:u.id,textContent:u.name,selected:u.id===this.selectedStructure}))))),i=this.selectedMark?this.findMark(this.selectedMark):void 0,r=this.tool==="contour"&&this.draft.length?$("div",{class:"ann-row"},$("span",{},`Вершин: ${this.draft.length}`),$("button",{type:"button",id:"draftClose",disabled:this.draft.length<3,textContent:"Замкнуть контур",onclick:()=>this.closeDraft()}),$("button",{type:"button",textContent:"Убрать вершину",onclick:()=>this.undoVertex()}),$("button",{type:"button",textContent:"Отмена",onclick:()=>this.cancelDraft()})):null,a=this.local.framesWithMarks(),o=this.frameId===null?void 0:[...a].reverse().find(c=>c<this.frameId)??a.find(c=>c>this.frameId),l=$("input",{type:"file",accept:"application/json,.json",hidden:!0,onchange:async c=>{const h=c.target.files?.[0];if(h){try{const u=JSON.parse(await h.text()),d=this.d.manifest,f=ka(u,d.caseId,d.dataVersion,d.frames.count,d.frames.width,d.frames.height);if(f.length)throw new Error(f.slice(0,3).join("; "));this.local=new wr(u),this.saveLocal(),this.message=`Импортировано: v${u.version}.`}catch(u){this.message="Импорт не выполнен: "+u.message}this.render()}}});return $("div",{class:"ann"},$("p",{class:"ann-note"},this.tool==="point"?"Точка: выберите структуру и щёлкните по ней на кадре; точку можно перетащить. Одна точка на структуру в кадре.":"Контур: щелчками обведите структуру по границе; замкнуть — щелчок по первой вершине или Enter, отменить вершину — Backspace, отменить обводку — Esc. Вершины готового контура перетаскиваются."),$("div",{class:"ann-row seg"},...["point","contour"].map(c=>$("button",{type:"button",id:c==="point"?"toolPoint":"toolContour",class:"seg-btn"+(this.tool===c?" active":""),textContent:c==="point"?"Точка":"Контур",onclick:()=>(this.tool=c,this.draft=[],this.cursor=null,this.render())}))),$("div",{class:"ann-row"},$("label",{},"Автор ",$("input",{id:"annAuthor",type:"text",value:this.author,placeholder:"ФИО эксперта",onchange:c=>(this.author=c.target.value,_n.set("sonolab.author",this.author))}))),$("div",{class:"ann-row"},$("label",{},"Структура ",n),$("span",{class:"sw big",style:`background:${this.structure(this.selectedStructure).color}`})),this.frameId===null?$("p",{class:"ann-warn"},"Датчик вне подготовленной области — поставьте его на проход."):$("p",{class:"ann-note"},`Текущий кадр: № ${this.frameId}`),r,i&&Fe(i)==="point"?$("div",{class:"ann-row"},$("span",{},`Выбрано: ${this.structure(i.structureId).name} (${i.x.toFixed(0)}, ${i.y.toFixed(0)})`),$("label",{},"допуск ",$("input",{type:"number",min:"4",max:"120",value:String(i.tolerancePx),style:"width:4.5em",onchange:c=>(this.local.setTolerance(this.frameId,i.id,Number(c.target.value)),this.saveLocal(),this.render())})," пикс."),$("button",{type:"button",textContent:"Удалить точку",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):i?$("div",{class:"ann-row"},$("span",{},`Выбран контур: ${this.structure(i.structureId).name}, ${i.points?.length??0} вершин`),$("button",{type:"button",id:"delContour",textContent:"Удалить контур",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):null,this.frameMarksInfo(t),$("div",{class:"ann-row"},$("button",{type:"button",id:"annVerify",disabled:this.frameId===null||!this.local.marks(this.frameId).length||!this.author.trim(),textContent:"Кадр проверен",onclick:()=>(this.local.setStatus(this.frameId,"verified",this.author.trim()),this.saveLocal(),this.render())}),$("button",{type:"button",disabled:this.frameId===null||o===void 0||!this.author.trim(),textContent:o===void 0?"Копировать с размеченного кадра":`Копировать с кадра № ${o}`,title:"Перенесённые точки помечаются как черновик и требуют проверки",onclick:()=>(this.message=`Скопировано точек: ${this.local.copyFrom(o,this.frameId,this.author.trim())} — проверьте их положение.`,this.saveLocal(),this.render())})),a.length?$("div",{class:"ann-frames"},"Размеченные кадры: ",...a.map(c=>$("button",{type:"button",class:"chip"+(c===this.frameId?" active":""),textContent:String(c),onclick:()=>this.d.goToFrame(c)}))):null,$("div",{class:"ann-row"},$("button",{type:"button",id:"annExport",disabled:!a.length,textContent:"Экспорт JSON",onclick:()=>Ba(`annotations_${t.caseId}_v${t.version}.json`,JSON.stringify(t,null,1),"application/json")}),$("button",{type:"button",textContent:"Импорт JSON",onclick:()=>l.click()}),l,$("button",{type:"button",class:"danger",disabled:!a.length,textContent:"Очистить черновик",onclick:()=>{confirm("Удалить всю локальную разметку в этом браузере?")&&(this.local=new wr(hh(this.d.manifest.caseId,this.d.manifest.dataVersion)),this.saveLocal(),this.render())}})),this.message?$("p",{class:"ann-msg"},this.message):null,this.sourceLine(a.length?t:null,"local"),$("p",{class:"ann-note"},"Разметка хранится в этом браузере. Чтобы сделать её общей для всех учеников, экспортируйте JSON и передайте его для публикации с приложением."))}renderTrain(){const t=[["local",this.hasLocal?this.local.set:null],["published",this.published]];if(!this.session){const o=this.trainSource==="local"?this.hasLocal?this.local.set:null:this.published,l=o?dh(o,{onlyVerified:this.onlyVerified,seed:1,mode:this.taskMode}).length:0;return $("div",{class:"ann"},$("p",{class:"ann-note"},`Тренировка: на кадре нужно отметить указанную структуру. Щелчок засчитывается в радиусе допуска эталонной точки или внутри эталонного контура; обводка — при совпадении с эталоном не ниже ${Go} по коэффициенту Дайса.`),$("div",{class:"ann-row"},$("label",{},"Ученик ",$("input",{id:"trStudent",type:"text",value:this.student,placeholder:"Имя",onchange:c=>(this.student=c.target.value,_n.set("sonolab.student",this.student))}))),$("div",{class:"ann-row"},$("label",{},"Эталон ",$("select",{id:"trSource",onchange:c=>(this.trainSource=c.target.value,this.render())},...t.map(([c,h])=>$("option",{value:c,disabled:!h,selected:this.trainSource===c,textContent:c==="local"?`локальный${h?` v${h.version}`:" — нет"}`:`опубликованный${h?` v${h.version}`:" — нет"}`})))),$("label",{class:"chk"},$("input",{type:"checkbox",checked:this.onlyVerified,onchange:c=>(this.onlyVerified=c.target.checked,this.render())}),"только проверенные")),$("div",{class:"ann-row"},$("label",{},"Задания ",$("select",{id:"trMode",onchange:c=>(this.taskMode=c.target.value,this.render())},...[["both","точки — щелчком, контуры — обводкой"],["point","только щелчком"],["contour","только обводкой"]].map(([c,h])=>$("option",{value:c,selected:this.taskMode===c,textContent:h}))))),$("p",{class:"ann-note"},l?`Доступно заданий: ${l}.`:"Нет эталонных точек для заданий. Эксперт должен разметить кадры в режиме «Эксперт»."),$("button",{type:"button",id:"trStart",class:"primary",disabled:!l,textContent:"Начать тренировку",onclick:()=>this.startSession(o)}),this.history())}if(this.taskIndex>=this.tasks.length)return this.renderSummary();const n=this.tasks[this.taskIndex],i=this.structure(n.structureId),r=this.frameId===n.frameId,a=this.feedback;return $("div",{class:"ann"},$("p",{class:"task-title",dataset:{testid:"task"}},`Задание ${this.taskIndex+1} из ${this.tasks.length}: ${n.answer==="contour"?"обведите":"отметьте"} `,$("b",{},`«${i.name}»`),` (${lh[i.class]})`),!r&&!a?$("div",{class:"ann-row"},$("span",{class:"ann-warn"},`Задание на кадре № ${n.frameId}.`),$("button",{type:"button",textContent:"К кадру задания",onclick:()=>this.d.goToFrame(n.frameId)})):null,a?$("p",{class:a.hit?"fb ok":"fb bad",dataset:{testid:"feedback"}},a.click===null?"Пропущено. Эталон показан на кадре.":n.answer==="contour"?`${a.hit?"Верно":"Неточно"}. Совпадение с эталоном (Дайс) ${Ar(a.dice)} при пороге ${Go}; смещение центра ${Zn(a.errorPx)}`:Fe(n.reference)==="contour"?a.hit?"Верно: щелчок внутри эталонного контура.":`Мимо: до границы эталонного контура ${Zn(a.errorPx)}.`:a.hit?`Верно. Ошибка ${Zn(a.errorPx)} (допуск ${n.reference.tolerancePx}).`:`Мимо. Ошибка ${Zn(a.errorPx)} при допуске ${n.reference.tolerancePx} пикс. Эталон показан на кадре.`):r?$("p",{class:"ann-note"},n.answer==="contour"?`Обведите структуру щелчками по границе и замкните контур (щелчок по первой вершине или Enter). Вершин: ${this.draft.length}.`:"Щёлкните по структуре на УЗИ-кадре."):null,$("div",{class:"ann-row"},a?$("button",{type:"button",id:"trNext",class:"primary",textContent:this.taskIndex+1<this.tasks.length?"Следующее задание":"Итоги",onclick:()=>this.nextTask()}):$("span",{class:"ann-row"},n.answer==="contour"?$("button",{type:"button",id:"trDone",class:"primary",disabled:this.draft.length<3,textContent:"Готово",onclick:()=>this.closeDraft()}):null,n.answer==="contour"&&this.draft.length?$("button",{type:"button",textContent:"Сбросить обводку",onclick:()=>this.cancelDraft()}):null,$("button",{type:"button",id:"trSkip",textContent:"Пропустить",onclick:()=>this.record(n,null,null,!1,null,null)})),$("button",{type:"button",textContent:"Завершить",onclick:()=>(this.taskIndex=this.tasks.length,this.feedback=null,this.finish())})),n.reference.status!=="verified"?$("p",{class:"ann-note"},"Эталон этого задания — черновик, не проверен экспертом."):null)}startSession(t){this.tasks=dh(t,{onlyVerified:this.onlyVerified,seed:Date.now()&4294967295,mode:this.taskMode}),this.session={schema:"sonolab.training/1",caseId:t.caseId,dataVersion:t.dataVersion,annotationVersion:t.version,annotationSource:this.trainSource,student:this.student.trim()||"без имени",startedAt:new Date().toISOString(),attempts:[]},this.taskIndex=0,this.beginTask()}beginTask(){this.feedback=null;const t=this.tasks[this.taskIndex];t&&this.d.goToFrame(t.frameId),this.taskStarted=performance.now(),this.render()}nextTask(){this.taskIndex++,this.taskIndex>=this.tasks.length?this.finish():this.beginTask()}finish(){if(!this.session)return;this.session.finishedAt=new Date().toISOString();const t=`sonolab.training.${this.d.manifest.caseId}`;let e=[];try{e=JSON.parse(_n.get(t)??"[]")}catch{e=[]}e.push(this.session),_n.set(t,JSON.stringify(e.slice(-50))),this.feedback=null,this.render()}renderSummary(){const t=this.session,e=fh(t.attempts);return $("div",{class:"ann",dataset:{testid:"summary"}},$("p",{class:"task-title"},`Итоги: ${e.hits} из ${e.total} (${Math.round(e.hitRate*100)} %)`),$("p",{class:"ann-note"},`Щелчки: средняя ошибка ${Zn(e.meanErrorPx)}, медиана ${Zn(e.medianErrorPx)}. Обводки: средний Дайс ${Ar(e.meanDice)}. Пропущено ${e.skipped}.`),$("table",{class:"ann-table"},$("thead",{},$("tr",{},$("th",{},"Структура"),$("th",{},"Верно"),$("th",{},"Ср. ошибка"),$("th",{},"Ср. Дайс"))),$("tbody",{},...e.byStructure.map(n=>$("tr",{},$("td",{},n.name),$("td",{},`${n.hits}/${n.total}`),$("td",{},Zn(n.meanErrorPx)),$("td",{},Ar(n.meanDice)))))),$("div",{class:"ann-row"},$("button",{type:"button",textContent:"Журнал CSV",onclick:()=>Ba(`training_${t.student}_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.csv`,"\uFEFF"+Hv(t),"text/csv")}),$("button",{type:"button",textContent:"Журнал JSON",onclick:()=>Ba(`training_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.json`,JSON.stringify(t,null,1),"application/json")}),$("button",{type:"button",id:"trAgain",class:"primary",textContent:"Новая тренировка",onclick:()=>(this.session=null,this.render())})))}history(){let t=[];try{t=JSON.parse(_n.get(`sonolab.training.${this.d.manifest.caseId}`)??"[]")}catch{t=[]}return t.length?$("details",{class:"ann-hist"},$("summary",{},`Прошлые тренировки (${t.length})`),$("ul",{class:"ann-list"},...t.slice(-10).reverse().map(e=>{const n=fh(e.attempts);return $("li",{},`${e.startedAt.slice(0,16).replace("T"," ")} · ${e.student} · ${n.hits}/${n.total} · ср. ${Zn(n.meanErrorPx)}${n.meanDice!==null?` · Дайс ${Ar(n.meanDice)}`:""}`)}))):null}debugState(){return{mode:this.mode,frameId:this.frameId,localVersion:this.local.set.version,localFrames:this.local.framesWithMarks(),marksOnFrame:this.frameId===null?[]:this.local.marks(this.frameId).map(t=>({id:t.id,s:t.structureId,kind:Fe(t),x:t.x,y:t.y,points:t.points,status:t.status})),draft:this.draft.length,task:this.session&&this.tasks[this.taskIndex]?{i:this.taskIndex,frameId:this.tasks[this.taskIndex].frameId,structureId:this.tasks[this.taskIndex].structureId,answer:this.tasks[this.taskIndex].answer,ref:{x:this.tasks[this.taskIndex].reference.x,y:this.tasks[this.taskIndex].reference.y,points:this.tasks[this.taskIndex].reference.points??null}}:null,attempts:this.session?.attempts??[]}}imageToScreen(t,e){return this.overlay.toScreen(t,e)}}function ki(s){const t=s.ru??s.name;return s.side==="mid"?t:`${t} (${s.side==="right"?"справа":"слева"})`}function Wv(s,t){const[e,n,i]=s.quant.min,[r,a,o]=s.quant.scale,l=s.structures.map((c,h)=>{const u={index:h,id:c.id,name:c.name,ru:c.ru,cat:c.cat,sub:c.sub,side:c.side,region:c.region,kind:c.kind,bbox:c.bbox,cartilage:/cartilage|meniscus|disc/i.test(c.name)};if(c.kind==="mesh"){const d=new Uint16Array(t,c.voff,c.nv*3),f=new Float32Array(c.nv*3);for(let x=0;x<c.nv;x++)f[x*3]=d[x*3]*r+e,f[x*3+1]=d[x*3+1]*a+n,f[x*3+2]=d[x*3+2]*o+i;u.pos=f,u.idx=c.itype==="u32"?new Uint32Array(t,c.toff,c.nt*3):new Uint16Array(t,c.toff,c.nt*3)}else u.lines=c.lines.map(({off:d,n:f})=>{const x=new Uint16Array(t,d,f*4),g=new Float32Array(f*4);for(let m=0;m<f;m++)g[m*4]=x[m*4]*r+e,g[m*4+1]=x[m*4+1]*a+n,g[m*4+2]=x[m*4+2]*o+i,g[m*4+3]=x[m*4+3]/1e5;return g});return u});return{meta:s,structures:l}}async function Xv(s,t){const e=fetch(new URL("models/anatomy.json",s)).then(h=>{if(!h.ok)throw new Error(`Анатомия: HTTP ${h.status}`);return h.json()}),n=await fetch(new URL("models/anatomy.bin",s));if(!n.ok||!n.body)throw new Error(`Анатомия (данные): HTTP ${n.status}`);const i=Number(n.headers.get("content-length"))||0,r=n.body.getReader(),a=[];let o=0;for(;;){const{done:h,value:u}=await r.read();if(h)break;a.push(u),o+=u.length,i&&t&&t(o/i)}const l=new Uint8Array(o);let c=0;for(const h of a)l.set(h,c),c+=h.length;return Wv(await e,l.buffer)}const qi=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Wo=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],ui=s=>{const t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]},mh=(s,t,e)=>{const n=Math.cos(e),i=Math.sin(e),r=Wo(t,s),a=qi(t,s)*(1-n);return[s[0]*n+r[0]*i+t[0]*a,s[1]*n+r[1]*i+t[1]*a,s[2]*n+r[2]*i+t[2]*a]};function qv(s,t,e,n,i,r){const a=ui(t);let o=ui([e[0]-a[0]*qi(e,a),e[1]-a[1]*qi(e,a),e[2]-a[2]*qi(e,a)]);isFinite(o[0])||(o=ui(Wo(a,[1,0,0])));let l=ui(Wo(a,o));l=ui(mh(l,a,n*Math.PI/180));let c=[-a[0],-a[1],-a[2]];return c=ui(mh(c,l,i*Math.PI/180)),{origin:s,lateral:l,depth:c,...r}}function Yv(s,t){let e=1/0,n=[1,0,0];for(const[i,r]of t){const a=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],o=qi(a,a)||1,l=Math.max(0,Math.min(1,qi([s[0]-i[0],s[1]-i[1],s[2]-i[2]],a)/o)),c=Math.hypot(s[0]-i[0]-a[0]*l,s[1]-i[1]-a[1]*l,s[2]-i[2]-a[2]*l);c<e&&(e=c,n=ui(a))}return n}const Ce={fat:{echo:.12,atten:.012,z:1.38,tex:"fat"},muscle:{echo:.2,atten:.02,z:1.7,tex:"fiber"},tendon:{echo:.65,atten:.03,z:1.9,tex:"fiber"},joint:{echo:.55,atten:.03,z:1.85,tex:"fiber"},cartilage:{echo:.02,atten:.006,z:1.6,tex:"cartilage"},bone:{echo:2,atten:.6,z:7.8,tex:"bone"},artery:{echo:0,atten:.0015,z:1.66,tex:"fluid"},vein:{echo:.01,atten:.0015,z:1.66,tex:"fluid"},nerve:{echo:.5,atten:.02,z:1.65,tex:"nerve"},organ:{echo:.3,atten:.016,z:1.65,tex:"speckle"},skin:{echo:.8}};function $v(s,t,e){return s.tex==="bone"||t.tex==="bone"?0:s.tex==="fluid"||t.tex==="fluid"?.9:s.tex==="nerve"||t.tex==="nerve"?1:s.tex==="fat"||t.tex==="fat"?1.1:s===Ce.tendon||t===Ce.tendon?.9:e?.8:.6}function jv(s){if(!s)return Ce.fat;switch(s.cat){case"bone":return Ce.bone;case"joint":return s.cartilage?Ce.cartilage:Ce.joint;case"muscle":return s.sub==="tendon"?Ce.tendon:Ce.muscle;case"vessel":return s.sub==="vein"?Ce.vein:s.kind==="mesh"&&/heart|atrium|ventricle/i.test(s.name)?Ce.organ:Ce.artery;case"nerve":return Ce.nerve;default:return Ce.organ}}function Kv(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Bi(s,t,e,n){const i=s/n,r=t/n,a=e/n,o=Math.floor(i),l=Math.floor(r),c=Math.floor(a),h=i-o,u=r-l,d=a-c;let f=0;for(let x=0;x<8;x++){const g=x&1,m=x>>1&1,p=x>>2&1,S=(g?h:1-h)*(m?u:1-u)*(p?d:1-d);f+=S*Kv(o+g,l+m,c+p)}return f}const yu={gain:1,dynamicRange:55};function Zv(s,t,e,n,i,r,a){const o=u=>{if(u<0||u>=t)return null;for(let d=0;d<=8;d++)for(const f of d===0?[i]:[i-d,i+d])if(!(f<1||f>=e)&&s[f*t+u]===a&&s[(f-1)*t+u]===r)return f;return null},l=o(n-3),c=o(n+3);if(l===null&&c===null)return .35;const h=l!==null&&c!==null?(c-l)/6:l!==null?(i-l)/3:(c-i)/3;return 1/Math.sqrt(1+h*h)}function Jv(s,t,e,n=yu){const{W:i,H:r,label:a}=t,o=new Uint8ClampedArray(i*r),l=new Float32Array(i*r),c=e.depthM*1e3/r,h=w=>w<=1?Ce.fat:jv(s.structures[w-2]),u=e.origin,d=e.lateral,f=e.depth,x=Ce.muscle.atten*.6+Ce.fat.atten*.4,g=Math.max(1,Math.round(.35/c)),m={};for(const w of t.present){const E=s.structures[w];E.cat==="nerve"&&/root|trunk|division|cord|plexus|spinal nerve/i.test(E.name)&&(m[w+2]=!0)}for(let w=0;w<i;w++){const E=((w+.5)/i-.5)*e.widthM;let R=1,D=1,b=-1,y=-1,P=0,N=0;for(let k=0;k<r;k++){const G=k*i+w,W=a[G];if(W===0){l[G]=0,b=0;continue}y=y<0?0:y+1;const q=h(W),Q=(k+.5)/r*e.depthM,H=u[0]+d[0]*E+f[0]*Q,nt=u[1]+d[1]*E+f[1]*Q,O=u[2]+d[2]*E+f[2]*Q,J=H*d[0]+nt*d[1]+O*d[2],bt=H-d[0]*J*.6,Gt=nt-d[1]*J*.6,qt=O-d[2]*J*.6,Zt=Bi(bt,Gt,qt,18e-5)-.5,Y=Bi(bt+7.1,Gt-3.3,qt+1.7,18e-5)-.5;let K=(Zt*Zt+Y*Y)*12,lt=q.echo;switch(q.tex){case"fiber":{const At=Bi(bt*.3,Gt*.3,qt*.3,55e-5);lt*=.45+1.3*At*At;break}case"fat":{const At=Bi(bt,Gt,qt,.0022),ue=Bi(bt+3.3,Gt+1.1,qt-2.2,.0011);lt=Math.abs(At-.5)<.03||Math.abs(ue-.5)<.02?.5:.09;break}case"nerve":{const At=Bi(H,nt,O,32e-5);m[W]?lt=At>.8?.35:.05:lt=At>.6?.07:.6;break}case"fluid":case"cartilage":K=.3+K*.15;break}if(y<1.2/c&&(lt=Math.max(lt,Ce.skin.echo)),b>=1&&b!==W){const At=h(b);if(q.tex==="bone"&&At.tex!=="bone")P=0;else{const ue=Zv(a,i,r,w,k,b,W);N=$v(q,At,q===At)*(.15+.85*ue*ue),P=g}}let Tt=lt*K;P>0&&(Tt=Math.max(Tt,N*(.75+.5*K*.5)),P--),q.tex==="bone"&&(Tt=D>=1?2*(.8+.2*K):Tt*.05);const vt=Math.exp(x*(k+.5)*c);l[G]=Tt*R*vt*D,q.tex==="bone"&&(D=Math.min(D,.04)),R*=Math.exp(-q.atten*c),b=W}}const p=new Float32Array(i*r);for(let w=0;w<r;w++)for(let E=0;E<i;E++){const R=w*i+E,D=l[R-(E>1?2:0)],b=l[R-(E>0?1:0)],y=l[R+(E<i-1?1:0)],P=l[R+(E<i-2?2:0)];p[R]=.1*D+.22*b+.36*l[R]+.22*y+.1*P}const S=Math.log10(.01),_=Math.log10(2),M=70/n.dynamicRange+.5;for(let w=0;w<r;w++)for(let E=0;E<i;E++){const R=w*i+E;if(a[R]===0){o[R]=0;continue}const D=p[R-(w>0?i:0)],b=p[R+(w<r-1?i:0)],y=(.25*D+.5*p[R]+.25*b)*n.gain,P=Math.max(0,Math.min(1,(Math.log10(Math.max(y,.01))-S)/(_-S)));o[R]=Math.pow(P,M)*255}return o}const Rr=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Mu=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Qv={skin:0,organ:1,lymphoid:1,muscle:2,joint:3,bone:4,vessel:5,nerve:6};function xh(s){let t=Qv[s.cat]??1;return s.cat==="muscle"&&s.sub==="tendon"&&(t=3),t*10+(s.kind==="tube"?5:0)}function ty(s,t){const e=Mu(t.lateral,t.depth),n=t.origin,i=[];for(const l of[-t.widthM/2,t.widthM/2])for(const c of[0,t.depthM])i.push([n[0]+t.lateral[0]*l+t.depth[0]*c,n[1]+t.lateral[1]*l+t.depth[1]*c,n[2]+t.lateral[2]*l+t.depth[2]*c]);const r=[0,1,2].map(l=>Math.min(...i.map(c=>c[l]))-.002),a=[0,1,2].map(l=>Math.max(...i.map(c=>c[l]))+.002),o=[];for(const l of s.structures){const[c,h]=l.bbox;if(h[0]<r[0]||c[0]>a[0]||h[1]<r[1]||c[1]>a[1]||h[2]<r[2]||c[2]>a[2])continue;let u=!1,d=!1;for(let f=0;f<8;f++){const x=[f&1?h[0]:c[0],f&2?h[1]:c[1],f&4?h[2]:c[2]],g=(x[0]-n[0])*e[0]+(x[1]-n[1])*e[1]+(x[2]-n[2])*e[2];g>=0&&(u=!0),g<=0&&(d=!0)}u&&d&&o.push(l)}return o.sort((l,c)=>xh(l)-xh(c))}function ey(s,t,e,n,i,r){if(!s.length)return!1;let a=!1;const o=s.length/4;let l=1/0,c=-1/0;for(let f=0;f<o;f++)l=Math.min(l,s[f*4+1],s[f*4+3]),c=Math.max(c,s[f*4+1],s[f*4+3]);const h=Math.max(0,Math.floor(l)),u=Math.min(e-1,Math.ceil(c)),d=[];for(let f=h;f<=u;f++){const x=f+.5;d.length=0;for(let g=0;g<o;g++){const m=s[g*4],p=s[g*4+1],S=s[g*4+2],_=s[g*4+3];p>x!=_>x&&d.push(m+(x-p)*(S-m)/(_-p))}if(!(d.length<2)){d.sort((g,m)=>g-m);for(let g=0;g+1<d.length;g+=2){const m=Math.max(0,Math.ceil(d[g]-.5)),p=Math.min(t-1,Math.floor(d[g+1]-.5));for(let S=m;S<=p;S++){const _=f*t+S;r&&r[_]===0||(n[_]=i,a=!0)}}}}return a}function ny(s,t){const{W:e,H:n}=t,i=new Int32Array(e*n),r=Mu(t.lateral,t.depth),a=t.origin,o=e/t.widthM,l=n/t.depthM,c=[],h=u=>{const d=[u[0]-a[0],u[1]-a[1],u[2]-a[2]];return[(Rr(d,t.lateral)+t.widthM/2)*o,Rr(d,t.depth)*l]};for(const u of ty(s,t))if(u.kind==="mesh"){const d=u.pos,f=u.idx,x=[],g=p=>(d[p*3]-a[0])*r[0]+(d[p*3+1]-a[1])*r[1]+(d[p*3+2]-a[2])*r[2];for(let p=0;p<f.length;p+=3){const S=f[p],_=f[p+1],M=f[p+2],w=g(S),E=g(_),R=g(M);if(w>0&&E>0&&R>0||w<0&&E<0&&R<0)continue;const D=[],b=(y,P,N,k)=>{if(N>0==k>0||N===k)return;const G=N/(N-k);D.push([d[y*3]+G*(d[P*3]-d[y*3]),d[y*3+1]+G*(d[P*3+1]-d[y*3+1]),d[y*3+2]+G*(d[P*3+2]-d[y*3+2])])};if(b(S,_,w,E),b(_,M,E,R),b(M,S,R,w),D.length===2){const[y,P]=h(D[0]),[N,k]=h(D[1]);x.push(y,P,N,k)}}const m=u.cat==="skin"?1:u.index+2;ey(x,e,n,i,m,u.cat==="skin"?null:i)&&c.push(u.index)}else{let d=!1;for(const f of u.lines)for(let x=0;x+4<f.length;x+=4){const g=[f[x],f[x+1],f[x+2]],m=[f[x+4],f[x+5],f[x+6]],p=f[x+3],S=f[x+7],_=Math.max(p,S),M=(g[0]-a[0])*r[0]+(g[1]-a[1])*r[1]+(g[2]-a[2])*r[2],w=(m[0]-a[0])*r[0]+(m[1]-a[1])*r[1]+(m[2]-a[2])*r[2];if(M>_&&w>_||M<-_&&w<-_)continue;const E=M===w?0:Math.max(0,Math.min(1,(-_-M)/(w-M))),R=M===w?1:Math.max(0,Math.min(1,(_-M)/(w-M))),D=Math.min(E,R),b=Math.max(E,R),y=[g[0]+(m[0]-g[0])*D,g[1]+(m[1]-g[1])*D,g[2]+(m[2]-g[2])*D],P=[g[0]+(m[0]-g[0])*b,g[1]+(m[1]-g[1])*b,g[2]+(m[2]-g[2])*b],[N,k]=h(y),[G,W]=h(P),q=_*Math.max(o,l)+1,Q=Math.max(0,Math.floor(Math.min(N,G)-q)),H=Math.min(e-1,Math.ceil(Math.max(N,G)+q)),nt=Math.max(0,Math.floor(Math.min(k,W)-q)),O=Math.min(n-1,Math.ceil(Math.max(k,W)+q));if(Q>H||nt>O)continue;const J=[m[0]-g[0],m[1]-g[1],m[2]-g[2]],bt=Rr(J,J)||1e-12;for(let Gt=nt;Gt<=O;Gt++){const qt=(Gt+.5)/l;for(let Zt=Q;Zt<=H;Zt++){const Y=Gt*e+Zt;if(i[Y]===0)continue;const K=(Zt+.5)/o-t.widthM/2,lt=[a[0]+t.lateral[0]*K+t.depth[0]*qt-g[0],a[1]+t.lateral[1]*K+t.depth[1]*qt-g[1],a[2]+t.lateral[2]*K+t.depth[2]*qt-g[2]],Tt=Math.max(0,Math.min(1,Rr(lt,J)/bt)),vt=lt[0]-J[0]*Tt,At=lt[1]-J[1]*Tt,ue=lt[2]-J[2]*Tt,Ht=p+(S-p)*Tt;vt*vt+At*At+ue*ue<=Ht*Ht&&(i[Y]=u.index+2,d=!0)}}}d&&c.push(u.index)}return{W:e,H:n,label:i,present:c}}function za(s,t,e){const n=Math.floor(t),i=Math.floor(e);if(n<0||i<0||n>=s.W||i>=s.H)return null;const r=s.label[i*s.W+n];return r>=2?r-2:null}const gh={nerve:"нерв",vessel:"сосуд",bone:"кость",muscle:"мышца",joint:"связка/сустав",organ:"орган",lymphoid:"орган"},_h={nerve:"#ffd60a",artery:"#ff4d4f",vein:"#4d7cff",bone:"#f0f0f0",muscle:"#d6409f",tendon:"#46a758",joint:"#12a594",organ:"#f76b15",lymphoid:"#f76b15"},Va=s=>_h[s.sub??s.cat]??_h[s.cat]??"#ffffff",iy=new Set(["nerve","vessel","bone"]),Ha=6.4;function sy(s){return s.ru??s.name.replace(/ muscle$/i,"")}class ry{constructor(t){this.d=t,this.canvas=document.createElement("canvas"),this.canvas.className="sim-canvas",this.canvas.setAttribute("aria-label","Синтетическое УЗИ-изображение"),this.overlay=document.createElement("canvas"),this.overlay.className="sim-overlay",t.screen.append(this.canvas,this.overlay),this.ctx=this.canvas.getContext("2d"),this.octx=this.overlay.getContext("2d");const e=t.landmarks,n=(r,a)=>e[r]&&e[a]?[e[r],e[a]]:null;this.segments=[n("pelvis","neck"),n("neck","head"),n("head","headTop"),n("shoulderR","elbowR"),n("elbowR","wristR"),n("wristR","middleFingerBaseR"),n("shoulderL","elbowL"),n("elbowL","wristL"),n("wristL","middleFingerBaseL"),n("hipR","kneeR"),n("kneeR","ankleR"),n("ankleR","toeR"),n("hipL","kneeL"),n("kneeL","ankleL"),n("ankleL","toeL")].filter(Boolean),t.view.host.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),this.overlay.addEventListener("pointermove",this.onImageHover),this.overlay.addEventListener("pointerdown",this.onImageDown),this.overlay.addEventListener("pointerleave",()=>(this.hoverText="",this.renderPanel())),document.addEventListener("keydown",this.onKey)}anatomy=null;active=!1;contact=null;normal=[0,1,0];rotate=0;tilt=0;depthCm=4;gain=1;showLabels=!0;resolution=1;map=null;plane=null;lastRenderMs=0;renderTimes=[];canvas;overlay;ctx;octx;segments=[];dirty=!1;dragging=null;tap=null;hoverText="";highlight=null;task=null;draft=[];feedback=null;attempts=[];answerMode="point";async enter(){if(this.active=!0,document.body.classList.add("sim-mode"),this.d.setRecordedInputEnabled(!1),this.setFigureForSim(!0),!this.anatomy){this.d.status.dataset.s="loading",this.d.status.textContent="Загрузка анатомии…";try{this.anatomy=await Xv(this.d.baseUrl,t=>this.d.status.textContent=`Загрузка анатомии ${Math.round(t*100)}%`)}catch(t){this.d.status.dataset.s="error",this.d.status.textContent="Ошибка данных: "+t.message;return}}this.contact||this.placeDefault(),this.dirty=!0,this.renderPanel(),this.renderInfo()}exit(){this.active=!1,document.body.classList.remove("sim-mode"),this.d.setRecordedInputEnabled(!0),this.setFigureForSim(!1),this.task=null,this.draft=[],this.feedback=null}setFigureForSim(t){this.d.view.human.root.traverse(e=>{const n=e.name,i=e.isMesh&&e.parent&&e.parent.name!=="human"&&e.parent.name!=="Scene"?e.parent.name:n;(i==="Clothes"||n==="Clothes")&&(e.visible=!t),(i==="Body"||n==="Body")&&(e.visible=!t),(i==="BodyFull"||n==="BodyFull"||i==="Briefs"||n==="Briefs")&&(e.visible=t)});for(const e of["sweep-marker","sweep-zone-hit"]){const n=this.d.view.scene.getObjectByName(e);n&&(n.visible=!t)}}visibleSkinMeshes(){const t=[];return this.d.view.human.root.traverseVisible(e=>{e.isMesh&&!e.name.endsWith("-fringe")&&t.push(e)}),t}placeDefault(){const t=this.d.landmarks,e=t.elbowR,n=t.wristR,i=new C(e[0]+(n[0]-e[0])*.5,e[1]+(n[1]-e[1])*.5+.3,e[2]+(n[2]-e[2])*.5);this.d.view.human.root.updateMatrixWorld(!0);const a=new Wi(i,new C(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];a&&this.setContactFromHit(a)}placeAt(t,e){this.d.view.human.root.updateMatrixWorld(!0);const i=new Wi(new C(t,.8,e),new C(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];return i&&this.setContactFromHit(i),!!i}setContactFromHit(t){const e=new Ft().getNormalMatrix(t.object.matrixWorld),n=t.face.normal.clone().applyMatrix3(e).normalize();this.contact=t.point.toArray(),this.normal=n.toArray(),this.dirty=!0}ray=new Wi;pick(t,e,n){const i=this.d.view.renderer.domElement.getBoundingClientRect();return this.ray.setFromCamera(new ct((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.d.view.camera),this.ray.intersectObjects(n,!1)[0]}onDown=t=>{if(!(!this.active||t.button!==0&&t.pointerType==="mouse")){if(this.d.probe.group.visible&&this.pick(t.clientX,t.clientY,this.d.probe.grabTargets)){this.dragging=t.pointerId,this.d.view.controls.enabled=!1,this.d.probe.setActive(!0),t.preventDefault(),t.stopPropagation();return}this.tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}};pendingMove=null;onMove=t=>{this.active&&(this.tap&&this.tap.id===t.pointerId&&Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>7&&(this.tap=null),this.dragging===t.pointerId&&(this.pendingMove={x:t.clientX,y:t.clientY}))};onUp=t=>{if(!this.active)return;if(this.dragging===t.pointerId){this.flushMove(),this.dragging=null,this.d.view.controls.enabled=!0,this.d.probe.setActive(!1);return}const e=this.tap;if(this.tap=null,e&&e.id===t.pointerId&&t.timeStamp-e.t<450&&t.type==="pointerup"){const n=this.pick(t.clientX,t.clientY,this.visibleSkinMeshes());n&&this.setContactFromHit(n)}};flushMove(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null;const e=this.pick(t.x,t.y,this.visibleSkinMeshes());e&&this.setContactFromHit(e)}onKey=t=>{if(!this.active)return;const e=t.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))){if(this.task?.answer==="contour"&&!this.feedback){if(t.key==="Enter")return this.submitContour();if(t.key==="Escape")return this.draft=[],this.drawOverlay();if(t.key==="Backspace")return this.draft.pop(),this.drawOverlay()}t.key==="q"||t.key==="й"?this.setRotate(this.rotate-5):t.key==="e"||t.key==="у"?this.setRotate(this.rotate+5):t.key==="w"||t.key==="ц"?this.setTilt(this.tilt+3):(t.key==="s"||t.key==="ы")&&this.setTilt(this.tilt-3)}};setRotate(t){this.rotate=Math.max(-90,Math.min(90,t)),this.dirty=!0,this.renderPanel()}setTilt(t){this.tilt=Math.max(-30,Math.min(30,t)),this.dirty=!0,this.renderPanel()}tick(){if(!this.active||!this.anatomy||(this.flushMove(),!this.dirty||!this.contact))return;this.dirty=!1;const t=performance.now(),e=Yv(this.contact,this.segments),n=Math.round(40*Ha*this.resolution),i=Math.round(this.depthCm*10*Ha*this.resolution),r=qv(this.contact,this.normal,e,this.rotate,this.tilt,{widthM:.04,depthM:this.depthCm/100,W:n,H:i});this.plane=r,this.map=ny(this.anatomy,r);const a=Jv(this.anatomy,this.map,r,{...yu,gain:this.gain});this.canvas.width=n,this.canvas.height=i;const o=this.ctx.createImageData(n,i);for(let l=0;l<a.length;l++)o.data[l*4]=o.data[l*4+1]=o.data[l*4+2]=a[l],o.data[l*4+3]=255;this.ctx.putImageData(o,0,0),this.d.probe.setPose(this.contact,[-r.depth[0],-r.depth[1],-r.depth[2]],this.crossV(r.lateral,[-r.depth[0],-r.depth[1],-r.depth[2]]),!0),this.lastRenderMs=performance.now()-t,this.lastRenderMs>90&&this.resolution>.5&&(this.resolution=Math.max(.5,this.resolution*.8)),this.renderTimes.push(this.lastRenderMs),this.renderTimes.length>200&&this.renderTimes.shift(),this.d.status.dataset.s="ready",this.d.status.textContent="СИМУЛЯЦИЯ",this.task&&!this.feedback&&this.map.present.includes(this.task.structure),this.drawOverlay(),this.renderPanel(),this.d.onChange?.()}crossV(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}structuresInImage(){if(!this.map||!this.anatomy)return[];const t=new Map,{W:e,label:n}=this.map;for(let i=0;i<n.length;i++){const r=n[i];if(r<2)continue;const a=t.get(r-2)??{n:0,sx:0,sy:0};a.n++,a.sx+=i%e,a.sy+=Math.floor(i/e),t.set(r-2,a)}return[...t.entries()].map(([i,r])=>({s:this.anatomy.structures[i],area:r.n,cx:r.sx/r.n,cy:r.sy/r.n})).filter(i=>i.area>=6).sort((i,r)=>r.area-i.area)}drawOverlay(){const t=this.map;if(!t||!this.anatomy)return;const e=this.overlay.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,Math.round(e.width*n)),r=Math.max(1,Math.round(e.height*n));(this.overlay.width!==i||this.overlay.height!==r)&&(this.overlay.width=i,this.overlay.height=r);const a=Math.min(i/t.W,r/t.H),o=(i-t.W*a)/2,l=(r-t.H*a)/2;this.view={k:a,ox:o,oy:l,dpr:n};const c=this.octx;c.clearRect(0,0,i,r);const h=this.showLabels&&!this.task,u=this.highlight;if(h||u!==null||this.feedback){const f=c.createImageData(t.W,t.H),x=this.feedback&&this.task?this.task.structure:null;for(let m=0;m<t.label.length;m++){const p=t.label[m];if(p<2)continue;const S=this.anatomy.structures[p-2];if(!(x!==null?S.index===x:u!==null?S.index===u:S.cat!=="muscle"))continue;const M=m%t.W,w=Math.floor(m/t.W),E=M===0||w===0||M===t.W-1||w===t.H-1||t.label[m-1]!==p||t.label[m+1]!==p||t.label[m-t.W]!==p||t.label[m+t.W]!==p,R=new Pt(Va(S));f.data[m*4]=R.r*255,f.data[m*4+1]=R.g*255,f.data[m*4+2]=R.b*255,f.data[m*4+3]=E?230:55}const g=document.createElement("canvas");g.width=t.W,g.height=t.H,g.getContext("2d").putImageData(f,0,0),c.imageSmoothingEnabled=!1,c.drawImage(g,o,l,t.W*a,t.H*a)}const d=12*n;if(h){c.font=`600 ${d}px system-ui, sans-serif`,c.textBaseline="middle";const f=[],x=900*(t.W/256)*(t.W/256);for(const g of this.structuresInImage()){if(g.s.cat==="muscle"&&g.area<x*1.6||g.s.cat==="joint"||g.s.cat==="organ"&&g.area<x)continue;const m=sy(g.s),p=c.measureText(m).width,S=o+g.cx*a,_=l+g.cy*a,M=Math.min(i-p-4,Math.max(4,S-p/2));f.some(([w,E,R])=>M<w+R+6&&w<M+p+6&&Math.abs(E-_)<d*1.2)||(f.push([M,_,p]),c.lineWidth=3*n,c.strokeStyle="rgba(0,0,0,.85)",c.strokeText(m,M,_),c.fillStyle=Va(g.s),c.fillText(m,M,_))}}c.fillStyle="rgba(255,255,255,.85)",c.font=`${11*n}px system-ui, sans-serif`,c.textBaseline="middle";for(let f=0;f<=this.depthCm*10;f+=5){const x=l+f/(this.depthCm*10)*t.H*a,g=f%10===0,m=(g?10:5)*n;c.fillRect(o+t.W*a-m,x-n,m,2*n),g&&f>0&&c.fillText(`${f/10} см`,o+t.W*a-m-34*n,x)}if(c.fillStyle="rgba(255,200,0,.95)",c.font=`700 ${11*n}px system-ui, sans-serif`,c.fillText("СИМУЛЯЦИЯ",o+8*n,l+12*n),this.draft.length&&this.drawPoly(this.draft,"#ffffff",!1),this.feedback?.polygon&&this.drawPoly(this.feedback.polygon,this.feedback.hit?"#3ddc84":"#ff5a5f",!0),this.feedback?.click){const[f,x]=this.feedback.click,g=o+f*a,m=l+x*a,p=6*n;c.strokeStyle=this.feedback.hit?"#3ddc84":"#ff5a5f",c.lineWidth=3*n,c.beginPath(),c.moveTo(g-p,m-p),c.lineTo(g+p,m+p),c.moveTo(g+p,m-p),c.lineTo(g-p,m+p),c.stroke()}}view={k:1,ox:0,oy:0,dpr:1};drawPoly(t,e,n){const i=this.octx,{k:r,ox:a,oy:o,dpr:l}=this.view;i.strokeStyle=e,i.lineWidth=2.5*l,i.setLineDash(n?[]:[6*l,4*l]),i.beginPath(),t.forEach(([c,h],u)=>u?i.lineTo(a+c*r,o+h*r):i.moveTo(a+c*r,o+h*r)),n&&i.closePath(),i.stroke(),i.setLineDash([]),i.fillStyle=e;for(const[c,h]of t)i.fillRect(a+c*r-3*l,o+h*r-3*l,6*l,6*l)}imagePoint(t){if(!this.map)return null;const e=this.overlay.getBoundingClientRect(),n=Math.min(e.width/this.map.W,e.height/this.map.H),i=e.left+(e.width-this.map.W*n)/2,r=e.top+(e.height-this.map.H*n)/2,a=(t.clientX-i)/n,o=(t.clientY-r)/n;return a<0||o<0||a>this.map.W||o>this.map.H?null:[a,o]}imageToScreen(t,e){if(!this.map)return null;const n=this.overlay.getBoundingClientRect(),i=Math.min(n.width/this.map.W,n.height/this.map.H);return{x:n.left+(n.width-this.map.W*i)/2+t*i,y:n.top+(n.height-this.map.H*i)/2+e*i}}onImageHover=t=>{const e=this.imagePoint(t);if(!e||!this.map||!this.anatomy||this.task)return;const n=za(this.map,e[0],e[1]),i=n===null?this.map.label[Math.floor(e[1])*this.map.W+Math.floor(e[0])]===1?"подкожная клетчатка / мягкие ткани":"":`${ki(this.anatomy.structures[n])} · ${gh[this.anatomy.structures[n].cat]??""}`,r=(e[1]/this.map.H*this.depthCm*10).toFixed(1);this.hoverText=i?`${i} · глубина ${r} мм`:"",this.renderPanel()};onImageDown=t=>{const e=this.imagePoint(t);if(!(!e||!this.task||this.feedback||!this.map))if(this.task.answer==="point"){const n=za(this.map,e[0],e[1]);let i=n===this.task.structure;if(!i){const o=Math.ceil(Ha*.5);for(let l=-o;l<=o&&!i;l++)for(let c=-o;c<=o&&!i;c++)i=za(this.map,e[0]+c,e[1]+l)===this.task.structure}const r=ki(this.anatomy.structures[this.task.structure]),a=n!==null&&n!==this.task.structure?`Это: ${ki(this.anatomy.structures[n])}.`:"";this.finishTask(i,i?`Верно: ${r}.`:`Мимо. ${a} Правильная структура подсвечена.`,null,e,null)}else{if(this.draft.length>=3&&Math.hypot(e[0]-this.draft[0][0],e[1]-this.draft[0][1])<4)return this.submitContour();this.draft.push(e),this.drawOverlay(),this.renderPanel()}};startTask(t){this.answerMode=t;const e=this.structuresInImage().filter(i=>iy.has(i.s.cat)&&i.area>=(t==="contour"?60:20));if(!e.length){this.task=null,this.feedback={hit:!1,text:"В этом срезе нет нервов, сосудов или костей для задания — переместите датчик.",polygon:null,click:null},this.renderPanel();return}const n=e[Math.floor(Math.random()*Math.min(e.length,6))];this.task={structure:n.s.index,answer:t,started:performance.now()},this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}submitContour(){if(!this.task||!this.map||this.draft.length<3)return;const t=this.draft;this.draft=[];const{W:e,H:n,label:i}=this.map;let r=0,a=0,o=0;for(let d=0;d<n;d++)for(let f=0;f<e;f++){const x=i[d*e+f]===this.task.structure+2,g=Hr(f+.5,d+.5,t);x&&r++,g&&a++,x&&g&&o++}const l=r+a?2*o/(r+a):0,c=l>=.6,[h,u]=_i(t);this.finishTask(c,`${c?"Верно":"Неточно"}: совпадение с эталонной маской (Дайс) ${l.toFixed(2)} при пороге 0.6.`,t,[h,u],l)}finishTask(t,e,n,i,r){!this.task||!this.anatomy||(this.attempts.push({structure:ki(this.anatomy.structures[this.task.structure]),answer:this.task.answer,hit:t,score:r}),this.feedback={hit:t,text:e,polygon:n,click:i},this.drawOverlay(),this.renderPanel())}endTask(){this.task=null,this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}renderPanel(){if(!this.active)return;const t=this.d.panel,e=(o,l={},...c)=>{const h=document.createElement(o);for(const[u,d]of Object.entries(l))u.startsWith("on")&&typeof d=="function"?h.addEventListener(u.slice(2),d):u==="class"?h.className=String(d):u==="dataset"?Object.assign(h.dataset,d):d!=null&&d!==!1&&(h[u]=d);for(const u of c)u!==null&&h.append(u);return h},n=(o,l,c,h,u,d,f,x)=>e("label",{class:"sim-slider"},e("span",{},o),e("input",{id:l,type:"range",min:String(c),max:String(h),step:String(u),value:String(d),oninput:g=>x(Number(g.target.value))}),e("output",{},f(d))),i=this.structuresInImage().filter(o=>o.s.cat!=="muscle"||o.area>400),r=this.feedback,a=this.task;t.replaceChildren(e("div",{class:"ann"},e("p",{class:"sim-warn"},"Симуляция: изображение рассчитано по 3D-анатомии (Z-Anatomy), а не записано аппаратом. Для обучения ориентирам и разметке; не для диагностики."),e("div",{class:"ann-row"},e("button",{type:"button",id:"simTrans",class:Math.abs(this.rotate)<1?"primary":"",textContent:"Поперёк",onclick:()=>this.setRotate(0)}),e("button",{type:"button",id:"simLong",class:Math.abs(this.rotate)===90?"primary":"",textContent:"Вдоль",onclick:()=>this.setRotate(90)}),e("label",{class:"chk"},e("input",{type:"checkbox",id:"simLabels",checked:this.showLabels,onchange:o=>(this.showLabels=o.target.checked,this.drawOverlay())}),"подписи структур")),n("Поворот","simRot",-90,90,1,this.rotate,o=>`${o}°`,o=>this.setRotate(o)),n("Наклон","simTilt",-30,30,1,this.tilt,o=>`${o}°`,o=>this.setTilt(o)),n("Глубина","simDepth",2,8,.5,this.depthCm,o=>`${o} см`,o=>(this.depthCm=o,this.dirty=!0,this.renderPanel())),n("Усиление","simGain",.4,2.5,.05,this.gain,o=>o.toFixed(2),o=>(this.gain=o,this.dirty=!0,this.renderPanel())),e("p",{class:"ann-note",dataset:{testid:"sim-hover"}},this.hoverText||"Наведите курсор на изображение — появится название структуры. Клавиши: Q/E — поворот, W/S — наклон."),e("div",{class:"sim-train"},e("p",{class:"task-title"},"Тренировка на симуляции"),a?e("p",{dataset:{testid:"sim-task"}},a.answer==="contour"?"Обведите: ":"Отметьте щелчком: ",e("b",{},ki(this.anatomy.structures[a.structure])),a.answer==="contour"?` (вершин ${this.draft.length}; замкнуть — Enter или щелчок по первой)`:""):e("p",{class:"ann-note"},"Эталон берётся из анатомии автоматически: задание выбирается среди нервов, сосудов и костей текущего среза."),r?e("p",{class:r.hit?"fb ok":"fb bad",dataset:{testid:"sim-feedback"}},r.text):null,e("div",{class:"ann-row"},e("button",{type:"button",id:"simTaskPoint",class:"primary",textContent:a&&!r?"Другое задание":"Задание: отметить",onclick:()=>this.startTask("point")}),e("button",{type:"button",id:"simTaskContour",textContent:"Задание: обвести",onclick:()=>this.startTask("contour")}),a&&a.answer==="contour"&&!r?e("button",{type:"button",id:"simDone",disabled:this.draft.length<3,textContent:"Готово",onclick:()=>this.submitContour()}):null,a?e("button",{type:"button",textContent:"Закончить",onclick:()=>this.endTask()}):null),this.attempts.length?e("p",{class:"ann-note",dataset:{testid:"sim-score"}},`Результат: ${this.attempts.filter(o=>o.hit).length} из ${this.attempts.length}`):null),e("details",{class:"sim-list"},e("summary",{},`Структуры в срезе (${i.length})`),e("ul",{class:"ann-list"},...i.slice(0,40).map(o=>e("li",{onmouseenter:()=>(this.highlight=o.s.index,this.drawOverlay()),onmouseleave:()=>(this.highlight=null,this.drawOverlay())},e("span",{class:"sw",style:`background:${Va(o.s)}`}),`${ki(o.s)} · ${gh[o.s.cat]??""}`)))))),this.answerMode}renderInfo(){const t=this.anatomy;if(!t)return;const e=t.meta.source;this.d.info.replaceChildren();const n=document.createElement("p");n.className="source",n.append(`Анатомия: ${e.attribution}. Изменения: ${e.modifications}. Исключено: ${e.excluded}. Лицензия производной анатомии — CC BY-SA 4.0. `);const i=document.createElement("a");i.href=e.url,i.target="_blank",i.rel="noopener",i.textContent="Источник",n.append(i,". Радиусы нервов — типичные значения, требуют экспертной проверки. Анатомия одного тела, подогнанная к фигуре по суставам."),this.d.info.append(n)}debug(){const t=this.structuresInImage();return{active:this.active,loaded:!!this.anatomy,contact:this.contact,rotate:this.rotate,tilt:this.tilt,depthCm:this.depthCm,size:this.map?[this.map.W,this.map.H]:null,present:t.map(e=>({name:e.s.name,side:e.s.side,cat:e.s.cat,area:e.area,cx:e.cx,cy:e.cy,index:e.s.index})),task:this.task?{structure:this.anatomy.structures[this.task.structure].name,index:this.task.structure,answer:this.task.answer}:null,attempts:this.attempts,renderMs:this.lastRenderMs,renderTimes:[...this.renderTimes],maskCentroid:e=>{const n=t.find(i=>i.s.index===e);return n?[n.cx,n.cy]:null}}}maskBoxPolygon(t){if(!this.map)return null;let e=1/0,n=1/0,i=-1/0,r=-1/0;for(let a=0;a<this.map.label.length;a++)if(this.map.label[a]===t+2){const o=a%this.map.W,l=Math.floor(a/this.map.W);e=Math.min(e,o),n=Math.min(n,l),i=Math.max(i,o+1),r=Math.max(r,l+1)}return isFinite(e)?[[e,n],[i,n],[i,r],[e,r]]:null}}const te=s=>document.getElementById(s),ys=new URL("./",window.location.href).toString(),ay="Для этой области данные пока не загружены",Ga=.5,vh={idle:"Датчик не установлен",loading:"Загрузка",ready:"Готово","out-of-area":"Вне подготовленной области",error:"Ошибка данных"};class oy{samples=[];pendingInput=null;add(t){this.samples.push(t),this.samples.length>400&&this.samples.shift()}summary(){const t=[...this.samples].sort((n,i)=>n-i);if(!t.length)return null;const e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{n:t.length,median:e(.5),p95:e(.95),max:t[t.length-1]}}}async function cy(){const s=te("scene"),t=te("sceneLoading");let e;try{e=await Cv(ys,O=>t.textContent=`Загрузка модели человека… ${Math.round(O*100)}%`)}catch(O){t.textContent=`Ошибка загрузки модели человека: ${O.message}`;return}t.hidden=!0;const n=new Lv(s,e);let i,r,a=null,o=[];try{o=await p_(ys);const O=x_(o,new URL(window.location.href).searchParams.get("case"));({manifest:i,baseUrl:r}=await m_(ys,O)),O.annotations&&(a=new URL(O.annotations,ys).toString())}catch(O){te("status").textContent=vh.error,te("status").dataset.s="error",te("frameInfo").textContent=String(O.message),yh(n,()=>{});return}ly(i),hy(o,i);const l=i.trajectory.bodyPlacement,c=l.path?E_(n.human.forearm,l.path.from,l.path.to,l.path.rayDir):w_(n.human.forearm,n.human.forearmAxis,l.startFractionOfForearm,l.endFractionOfForearm),h=!l.path;if(!h){const O=c.poseAt(.5);n.setRegionFocus(new C(...O.pointBody),new C(...O.normalBody))}n.scene.add(T_(c));const u=b_(c);n.scene.add(u);const d=new S_;n.scene.add(d.group);const f=new Iv(r,i),x=te("usCanvas"),g=new Dv(x,f,i.frames.width,i.frames.height),m=te("usOverlay"),p=te("status"),S=te("frameInfo"),_=te("slider"),M=new oy;let w={loaded:0,total:i.frames.count},E=0,R=null;g.onDrawn=O=>R?.setFrame(O),g.onStatus=O=>{p.dataset.s=O,p.textContent=O==="loading"?`Загрузка ${w.loaded}/${w.total}`:vh[O]};const D=(O,J)=>{O.kind==="in-area"?(m.hidden=!0,g.show(O.frameId),M.pendingInput=J,S.textContent=`кадр № ${O.frameId} (0–${i.frames.count-1}) · позиция ${(O.t*100).toFixed(1)}%`,O.origin!=="slider"&&(_.value=String(Math.round(O.t*1e3))),_.disabled=!1):O.kind==="out-of-area"&&(R?.setFrame(null),g.clear("out-of-area"),m.hidden=!1,m.textContent=ay,S.textContent="кадр не показывается"),q()},b=new M_(n,d,{caseId:i.caseId,lut:i.trajectory.lut,path:c,zoneHitMesh:u,isOnRegion:O=>h?n.human.isOnForearm(O):!0,onState:D}),y=()=>{const O=b.state,J=new URL(window.location.href);O.kind==="in-area"?J.searchParams.set("t",O.t.toFixed(3)):J.searchParams.delete("t"),history.replaceState(null,"",J)};window.addEventListener("pointerup",()=>setTimeout(y,0)),_.addEventListener("input",O=>b.setT(Number(_.value)/1e3,"slider",O.timeStamp)),_.addEventListener("change",y),te("btnArm").addEventListener("click",()=>n.goTo("region")),te("btnBody").addEventListener("click",()=>n.goTo("body")),te("btnResetProbe").addEventListener("click",()=>{b.setT(Ga,"reset"),y()});const P=Number(new URL(window.location.href).searchParams.get("t")),N=Number.isFinite(P)&&new URL(window.location.href).searchParams.has("t")?Math.min(1,Math.max(0,P)):Ga,k=i.trajectory.lut;R=new Gv({manifest:i,annotationsUrl:a,overlayHost:document.querySelector(".us-screen"),tabsHost:te("annTabs"),bodyHost:te("annBody"),currentFrame:()=>g.shownFrameId,goToFrame:O=>{const J=k.indexOf(O);return J<0?!1:(b.setT(J/(k.length-1),"slider"),y(),!0)}}),b.setT(N,"url");const G=b.state.kind==="in-area"?b.state.frameId:0,W=performance.now();f.preloadAll(G,(O,J)=>{w={loaded:O,total:J},g.status==="loading"&&(p.textContent=`Загрузка ${O}/${J}`)}).then(()=>{E=performance.now()-W,f.failed.size&&(p.dataset.s="error",p.textContent=`Ошибка данных: не загружено кадров — ${f.failed.size}`),q()}),(new URL(window.location.href).searchParams.get("view")==="arm"||window.innerWidth<820||!h)&&n.goTo("region",0);function q(){const O=M.summary(),J=b.state;te("diag").textContent=[`Состояние: ${J.kind}${J.kind==="in-area"?` t=${J.t.toFixed(3)} frameId=${J.frameId}`:""}`,`Показан кадр: ${g.shownFrameId??"—"}`,`Кадров загружено: ${w.loaded}/${w.total}${E?` за ${E.toFixed(0)} мс`:""}`,O?`Задержка ввод→показ (n=${O.n}): медиана ${O.median.toFixed(1)} мс, p95 ${O.p95.toFixed(1)} мс, макс ${O.max.toFixed(1)} мс`:"Задержка: нет измерений (подвигайте датчик)",`Устройство: ${navigator.userAgent}`].join(`
`)}window.sonolab={state:()=>b.state,shownFrameId:()=>g.shownFrameId,status:()=>g.status,camera:()=>n.cameraState(),latency:()=>M.summary(),latencySamples:()=>[...M.samples],preload:()=>({...w,ms:E,failed:[...f.failed]}),setT:O=>b.setT(O,"slider"),controlPoints:i.controlPoints,projectProbeToScreen:()=>{const O=d.group.position.clone().project(n.camera),J=n.renderer.domElement.getBoundingClientRect();return{x:J.left+(O.x+1)/2*J.width,y:J.top+(1-O.y)/2*J.height}},projectBodyPointToScreen:O=>{const J=new C(...O).project(n.camera),bt=n.renderer.domElement.getBoundingClientRect();return{x:bt.left+(J.x+1)/2*bt.width,y:bt.top+(1-J.y)/2*bt.height}},pathPoint:O=>c.poseAt(O).pointBody,goTo:O=>n.goTo(O,0),caseId:i.caseId,annotation:()=>R?.debugState(),imageToScreen:(O,J)=>R?.imageToScreen(O,J),setCamera:(O,J)=>n.setCamera(O,J)};let Q=0;const H=new ry({view:n,probe:d,baseUrl:ys,screen:document.querySelector(".us-screen"),panel:te("simPanel"),status:p,info:te("simInfo"),landmarks:n.human.meta.landmarks,setRecordedInputEnabled:O=>b.enabled=O}),nt=async O=>{te("modeRec").classList.toggle("active",O==="rec"),te("modeSim").classList.toggle("active",O==="sim");const J=new URL(window.location.href);if(O==="sim"?J.searchParams.set("mode","sim"):J.searchParams.delete("mode"),history.replaceState(null,"",J),O==="sim")await H.enter(),n.goTo("forearm");else{H.exit();const bt=b.state;b.setT(bt.kind==="in-area"?bt.t:Ga,"reset"),n.goTo("region")}};te("modeRec").addEventListener("click",()=>nt("rec")),te("modeSim").addEventListener("click",()=>nt("sim")),new URL(window.location.href).searchParams.get("mode")==="sim"&&nt("sim"),window.sonolabSim={state:()=>H.debug(),setRotate:O=>H.setRotate(O),placeAt:(O,J)=>H.placeAt(O,J),setTilt:O=>H.setTilt(O),imageToScreen:(O,J)=>H.imageToScreen(O,J),maskBoxPolygon:O=>H.maskBoxPolygon(O),probeScreen:()=>{const O=d.group.position.clone().project(n.camera),J=n.renderer.domElement.getBoundingClientRect();return{x:J.left+(O.x+1)/2*J.width,y:J.top+(1-O.y)/2*J.height}},bodyToScreen:O=>{const J=new C(...O).project(n.camera),bt=n.renderer.domElement.getBoundingClientRect();return{x:bt.left+(J.x+1)/2*bt.width,y:bt.top+(1-J.y)/2*bt.height}},landmarks:n.human.meta.landmarks},yh(n,O=>{H.tick(),b.flush(),M.pendingInput!==null&&g.status==="ready"&&(M.add(O-M.pendingInput),M.pendingInput=null),++Q%30===0&&q()})}function yh(s,t){const e=()=>{const n=performance.now();t(n),s.render(n),requestAnimationFrame(e)};requestAnimationFrame(e)}function ly(s){te("caseTitle").textContent=s.title;const t={left:"левая",right:"правая",unknown:"неизвестно"}[s.patientSide],n=[["Тип данных",{"recorded-sweep":"записанный проход (настоящие кадры)","volume-reslice":"срезы настоящего УЗИ-объёма (собран из записанных кадров с трекингом)","registered-volume":"пространственно зарегистрированный объём",synthetic:"СИМУЛЯЦИЯ"}[s.imageType]],["Соответствие",s.trajectory.kind==="relative-sweep-index"?"навигация по нормированному пути записи (без регистрации к телу)":"пространственная регистрация"],["Область",`${s.region.name}, ${s.trajectory.bodyPlacement.surface}`],["Сторона пациента",t],["Направление прохода",s.trajectory.directionOnBody.value==="unknown"?"неизвестно (в источнике не указано; на фигуре уложено условно)":s.region.id==="forearm"?"от проксимального отдела к запястью (по видео внешней камеры; требует экспертной проверки)":s.trajectory.directionOnBody.value],["Датчик",`${s.probe.model} — ${s.probe.kind}; изображение ${s.probe.imageFormat}`],["Частота / глубина",`${s.probe.centerFrequencyMHz} МГц / ${s.imageGeometry.depthSettingCm} см (настройка аппарата)`],["Масштаб пикселей",s.imageGeometry.pixelSpacingMm?`${s.imageGeometry.pixelSpacingMm} мм (из источника)`:"не указан в источнике — линейка не строится"],["Метка датчика",(s.imageGeometry.probeMarkerSide==="unknown"?"сторона неизвестна":s.imageGeometry.probeMarkerSide)+(s.imageGeometry.lateralOrientation?`. ${s.imageGeometry.lateralOrientation}`:"")],["Калибровка изображение→трекер",s.calibration.imageToSensor==="absent"?"отсутствует":"учтена авторами набора"],["Кадров",`${s.frames.count} (${s.frames.width}×${s.frames.height}), без автопроигрывания`]],i=te("caseFacts");for(const[u,d]of n){const f=document.createElement("dt");f.textContent=u;const x=document.createElement("dd");x.textContent=d,i.append(f,x)}const r=[["Сдвиг вдоль записанного прохода",s.supportedMotions.slideAlongSweep],["Поперечный сдвиг",s.supportedMotions.lateralShift],["Вращение датчика",s.supportedMotions.rotation],["Наклон",s.supportedMotions.tilt],["Компрессия",s.supportedMotions.compression]],a=te("motions");for(const[u,d]of r){const f=document.createElement("li");f.textContent=u+(d?"":" — нет данных"),f.dataset.on=d?"1":"0",f.dataset.mark=d?"✓":"✕",a.append(f)}const o=te("sourceLine");o.innerHTML="",o.append(`Источник: ${s.source.attribution} Набор `);const l=document.createElement("a");l.href=s.source.url,l.target="_blank",l.rel="noopener",l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`;const c=s.caseId.startsWith("cuhk");c?l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`:l.textContent=s.source.dataset,o.append(l,c?`, эпизод ${s.source.episode}. Лицензия `:`, ${s.source.subset}. Лицензия `);const h=document.createElement("a");h.href=s.source.licenseUrl,h.target="_blank",h.rel="noopener",h.textContent=c?"CC BY 4.0":s.source.license,o.append(h,c?". Кадры не изменены, кроме перекодирования AV1→JPEG. Учебный материал, не для диагностики.":". Кадры — срезы объёма источника, перекодированы в JPEG и отражены по вертикали. Эталонные контуры — разметка авторов набора. Учебный материал, не для диагностики."),window.innerWidth<820&&(te("infoBox").open=!1)}function hy(s,t){const e=te("caseSelect"),n=te("modeRec");n.textContent=`Запись · ${t.region.name.toLowerCase()}`,te("btnArm").textContent=t.region.id==="forearm"?"Приблизить руку":`Приблизить: ${t.region.name.toLowerCase()}`,t.region.id!=="forearm"&&(te("sceneHint").textContent="Перетащите датчик вдоль синего пунктира. Вращение вида — перетаскивание по фону, масштаб — колесо или два пальца. Касание кожи ставит датчик в точку."),e.innerHTML="";for(const i of s){const r=document.createElement("option");r.value=i.caseId,r.textContent=i.label??i.caseId,r.selected=i.caseId===t.caseId,e.append(r)}e.hidden=s.length<2,e.addEventListener("change",()=>{const i=new URL(window.location.href);i.searchParams.set("case",e.value),i.searchParams.delete("t"),i.searchParams.delete("mode"),window.location.href=i.toString()})}cy();
