(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="181",Zi={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,Xc=1,ad=2,qh=1,$h=2,$n=3,Jn=0,We=1,nn=2,Kn=0,Ji=1,qc=2,$c=3,jc=4,od=5,Mi=100,cd=101,ld=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,uo=204,fo=205,xd=206,gd=207,_d=208,vd=209,yd=210,Md=211,bd=212,Sd=213,Td=214,po=0,mo=1,xo=2,ns=3,go=4,_o=5,vo=6,yo=7,dc=0,Ed=1,wd=2,di=0,Ad=1,Rd=2,Cd=3,Pd=4,Ld=5,Id=6,jh=7,Yc="attached",Dd="detached",Yh=300,is=301,ss=302,Mo=303,bo=304,la=306,Ei=1e3,Ln=1001,ta=1002,Xe=1003,Kh=1004,Ls=1005,Fe=1006,Xr=1007,In=1008,Un=1009,Zh=1010,Jh=1011,Xs=1012,fc=1013,wi=1014,Mn=1015,us=1016,pc=1017,mc=1018,qs=1020,Qh=35902,tu=35899,eu=1021,nu=1022,sn=1023,$s=1026,js=1027,xc=1028,gc=1029,_c=1030,vc=1031,yc=1033,qr=33776,$r=33777,jr=33778,Yr=33779,So=35840,To=35841,Eo=35842,wo=35843,Ao=36196,Ro=37492,Co=37496,Po=37808,Lo=37809,Io=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,ko=37816,Bo=37817,zo=37818,Vo=37819,Ho=37820,Go=37821,Wo=36492,Xo=36494,qo=36495,$o=36283,jo=36284,Yo=36285,Ko=36286,Ys=2300,Ks=2301,xa=2302,Kc=2400,Zc=2401,Jc=2402,Nd=2500,Ud=0,iu=1,Zo=2,Fd=3200,Od=3201,Mc=0,kd=1,hi="",Le="srgb",$e="srgb-linear",ea="linear",de="srgb",Ii=7680,Qc=519,Bd=512,zd=513,Vd=514,su=515,Hd=516,Gd=517,Wd=518,Xd=519,Jo=35044,tl="300 es",Dn=2e3,na=2001;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){const s=Zs("canvas");return s.style.display="block",s}const el={};function ia(...s){const t="THREE."+s.shift();console.log(t,...s)}function It(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Jt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Js(...s){const t=s.join(" ");t in el||(el[t]=!0,It(...s))}function $d(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const ks=Math.PI/180,rs=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function bc(s,t){return(s%t+t)%t}function jd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yd(s,t,e){return s!==t?(e-s)/(t-s):0}function Bs(s,t,e){return(1-e)*s+e*t}function Kd(s,t,e,n){return Bs(s,t,1-Math.exp(-e*n))}function Zd(s,t=1){return t-Math.abs(bc(s,t*2)-t)}function Jd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Qd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ef(s,t){return s+Math.random()*(t-s)}function nf(s){return s*(.5-Math.random())}function sf(s){s!==void 0&&(nl=s);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(s){return s*ks}function af(s){return s*rs}function of(s){return(s&s-1)===0&&s!==0}function cf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hf(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),x=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*f,o*h,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const au={DEG2RAD:ks,RAD2DEG:rs,generateUUID:ln,clamp:Yt,euclideanModulo:bc,mapLinear:jd,inverseLerp:Yd,lerp:Bs,damp:Kd,pingpong:Zd,smoothstep:Jd,smootherstep:Qd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:af,isPowerOfTwo:of,ceilPowerOfTwo:cf,floorPowerOfTwo:lf,setQuaternionFromProperEuler:hf,normalize:ce,denormalize:vn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class un{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==x){let m=l*d+c*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*f-c*d,t[e+1]=l*x+h*d+c*u-o*f,t[e+2]=c*x+h*f+o*d-l*u,t[e+3]=h*x-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new P,il=new un;class Xt{constructor(t,e,n,i,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=i[0],m=i[3],p=i[6],v=i[1],_=i[4],y=i[7],T=i[2],w=i[5],C=i[8];return r[0]=a*g+o*v+l*T,r[3]=a*m+o*_+l*w,r[6]=a*p+o*y+l*C,r[1]=c*g+h*v+u*T,r[4]=c*m+h*_+u*w,r[7]=c*p+h*y+u*C,r[2]=d*g+f*v+x*T,r[5]=d*m+f*_+x*w,r[8]=d*p+f*y+x*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=e*u+n*d+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Xt,sl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){const s={enabled:!0,workingColorSpace:$e,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$e]:{primaries:t,whitePoint:n,transfer:ea,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:de,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}const ne=uf();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Di;class df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Zs("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ff=0;class Sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(va(i[a].image)):r.push(va(i[a]))}else r=va(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?df.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let pf=0;const ya=new P;class Ie extends Pi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Ln,i=Ln,r=Fe,a=In,o=sn,l=Un,c=Ie.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ln(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Yh;Ie.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,T=(p+1)/2,w=(h+d)/4,C=(u+g)/4,I=(x+m)/4;return _>y&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=C/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mf extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ie(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Sc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),hr.subVectors(this.max,_s),Ni.subVectors(t.a,_s),Ui.subVectors(t.b,_s),Fi.subVectors(t.c,_s),ei.subVectors(Ui,Ni),ni.subVectors(Fi,Ui),pi.subVectors(Ni,Fi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-pi.z,pi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,pi.z,0,-pi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-pi.y,pi.x,0];return!Ma(e,Ni,Ui,Fi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Ni,Ui,Fi,hr))?!1:(ur.crossVectors(ei,ni),e=[ur.x,ur.y,ur.z],Ma(e,Ni,Ui,Fi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,lr=new ti,Ni=new P,Ui=new P,Fi=new P,ei=new P,ni=new P,pi=new P,_s=new P,hr=new P,ur=new P,mi=new P;function Ma(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){mi.fromArray(s,r);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gf=new ti,vs=new P,ba=new P;class Fn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(ba)),this.expandByPoint(vs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new P,Sa=new P,dr=new P,ii=new P,Ta=new P,fr=new P,Ea=new P;class ds{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sa.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=ii.dot(this.direction),l=-ii.dot(dr),c=ii.lengthSq(),h=Math.abs(1-a*a);let u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(dr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,r){Ta.subVectors(e,t),fr.subVectors(n,t),Ea.crossVectors(Ta,fr);let a=this.direction.dot(Ea),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const l=o*this.direction.dot(fr.crossVectors(ii,fr));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(ii));if(c<0||l+c>a)return null;const h=-o*ii.dot(Ea);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,x,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+x*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,x=c*h,g=c*u;e[0]=d+g*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,x=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=x*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=x*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+x,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,vf)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),pr.crossVectors(tn,si),i[0]=si.x,i[4]=pr.x,i[8]=tn.x,i[1]=si.y,i[5]=pr.y,i[9]=tn.y,i[2]=si.z,i[6]=pr.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],T=n[15],w=i[0],C=i[4],I=i[8],M=i[12],b=i[1],R=i[5],N=i[9],U=i[13],V=i[2],O=i[6],G=i[10],j=i[14],H=i[3],et=i[7],K=i[11],gt=i[15];return r[0]=a*w+o*b+l*V+c*H,r[4]=a*C+o*R+l*O+c*et,r[8]=a*I+o*N+l*G+c*K,r[12]=a*M+o*U+l*j+c*gt,r[1]=h*w+u*b+d*V+f*H,r[5]=h*C+u*R+d*O+f*et,r[9]=h*I+u*N+d*G+f*K,r[13]=h*M+u*U+d*j+f*gt,r[2]=x*w+g*b+m*V+p*H,r[6]=x*C+g*R+m*O+p*et,r[10]=x*I+g*N+m*G+p*K,r[14]=x*M+g*U+m*j+p*gt,r[3]=v*w+_*b+y*V+T*H,r[7]=v*C+_*R+y*O+T*et,r[11]=v*I+_*N+y*G+T*K,r[15]=v*M+_*U+y*j+T*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,_=x*d*c-h*m*c-x*l*f+a*m*f+h*l*p-a*d*p,y=h*g*c-x*u*c+x*o*f-a*g*f-h*o*p+a*u*p,T=x*u*l-h*g*l-x*o*d+a*g*d+h*o*m-a*u*m,w=e*v+n*_+i*y+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=v*C,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-x*d*r+x*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(x*l*r-a*m*r-x*i*c+e*m*c+a*i*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*C,t[8]=y*C,t[9]=(x*u*r-h*g*r-x*n*f+e*g*f+h*n*p-e*u*p)*C,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=T*C,t[13]=(h*g*i-x*u*i+x*n*d-e*g*d-h*n*m+e*u*m)*C,t[14]=(x*o*i-a*g*i-x*n*l+e*g*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,g=a*h,m=a*u,p=o*u,v=l*c,_=l*h,y=l*u,T=n.x,w=n.y,C=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(x-_)*T,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(x+_)*C,i[9]=(m-v)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const a=Oi.set(i[4],i[5],i[6]).length(),o=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const c=1/r,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Dn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Dn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===na)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Dn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Dn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===na)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new P,xn=new $t,_f=new P(0,0,0),vf=new P(1,1,1),si=new P,pr=new P,tn=new P,al=new $t,ol=new un;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yf=0;const cl=new P,ki=new un,Vn=new $t,mr=new P,ys=new P,Mf=new P,bf=new un,ll=new P(1,0,0),hl=new P(0,1,0),ul=new P(0,0,1),dl={type:"added"},Sf={type:"removed"},Bi={type:"childadded",child:null},wa={type:"childremoved",child:null};class _e extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new P,e=new dn,n=new un,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Xt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ys,mr,this.up):Vn.lookAt(mr,ys,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new P(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new P,Hn=new P,Aa=new P,Gn=new P,zi=new P,Vi=new P,fl=new P,Ra=new P,Ca=new P,Pa=new P,La=new oe,Ia=new oe,Da=new oe;class yn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gn.subVectors(i,e),Hn.subVectors(n,e),Aa.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(Aa),c=Hn.dot(Hn),h=Hn.dot(Aa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),Hn.subVectors(t,e),gn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;zi.subVectors(i,n),Vi.subVectors(r,n),Ra.subVectors(t,n);const l=zi.dot(Ra),c=Vi.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,i);const h=zi.dot(Ca),u=Vi.dot(Ca);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zi,a);Pa.subVectors(t,r);const f=zi.dot(Pa),x=Vi.dot(Pa);if(x>=0&&f<=x)return e.copy(r);const g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Vi,o);const m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return fl.subVectors(r,i),o=(u-h)/(u-h+(f-x)),e.copy(i).addScaledVector(fl,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(zi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Na(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=bc(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ne.workingToColorSpace(Ue.copy(this),t),Math.round(Yt(Ue.r*255,0,255))*65536+Math.round(Yt(Ue.g*255,0,255))*256+Math.round(Yt(Ue.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Le){ne.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(xr);const n=Bs(ri.h,xr.h,e),i=Bs(ri.s,xr.s,e),r=Bs(ri.l,xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Vt;Vt.NAMES=cu;let Tf=0;class Tn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Ji,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bn extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,gr=new pt;let Ef=0;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jo&&(t.usage=this.usage),t}}class lu extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hu extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wf=0;const on=new $t,Ua=new _e,Hi=new P,en=new ti,Ms=new ti,Pe=new P;class Re extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?hu:lu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(en.min,Ms.min),en.expandByPoint(Pe),Pe.addVectors(en.max,Ms.max),en.expandByPoint(Pe)):(en.expandByPoint(Ms.min),en.expandByPoint(Ms.max))}en.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(t,c),Pe.add(Hi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;const c=new P,h=new P,u=new P,d=new pt,f=new pt,x=new pt,g=new P,m=new P;function p(I,M,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,M),x.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),x.sub(d);const R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(R),o[I].add(g),o[M].add(g),o[b].add(g),l[I].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,M=v.length;I<M;++I){const b=v[I],R=b.start,N=b.count;for(let U=R,V=R+N;U<V;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new P,y=new P,T=new P,w=new P;function C(I){T.fromBufferAttribute(i,I),w.copy(T);const M=o[I];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(w,M);const R=y.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,R)}for(let I=0,M=v.length;I<M;++I){const b=v[I],R=b.start,N=b.count;for(let U=R,V=R+N;U<V;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new $t,xi=new ds,_r=new Fn,ml=new P,vr=new P,yr=new P,Mr=new P,Fa=new P,br=new P,xl=new P,Sr=new P;class ee extends _e{constructor(t=new Re,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,t),a?br.addScaledVector(Fa,h):br.addScaledVector(Fa.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(_r.containsPoint(xi.origin)===!1&&(xi.intersectSphere(_r,ml)===null||xi.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),xi.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){const w=o.getX(y),C=o.getX(y+1),I=o.getX(y+2);i=Tr(this,p,t,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);i=Tr(this,a,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){const w=y,C=y+1,I=y+2;i=Tr(this,p,t,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const v=m,_=m+1,y=m+2;i=Tr(this,a,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Af(s,t,e,n,i,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Jn,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:s}}function Tr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,vr),s.getVertexPosition(l,yr),s.getVertexPosition(c,Mr);const h=Af(s,t,e,n,vr,yr,Mr,xl);if(h){const u=new P;yn.getBarycoord(xl,vr,yr,Mr,u),i&&(h.uv=yn.getInterpolatedAttribute(i,o,l,c,u,new pt)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new pt)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};yn.getNormal(vr,yr,Mr,d.normal),h.face=d,h.barycoord=u}return h}class Sn extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,i,a,2),x("x","z","y",1,-1,t,n,-e,i,a,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function x(g,m,p,v,_,y,T,w,C,I,M){const b=y/C,R=T/I,N=y/2,U=T/2,V=w/2,O=C+1,G=I+1;let j=0,H=0;const et=new P;for(let K=0;K<G;K++){const gt=K*R-U;for(let z=0;z<O;z++){const at=z*b-N;et[g]=at*v,et[m]=gt*_,et[p]=V,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=w>0?1:-1,h.push(et.x,et.y,et.z),u.push(z/C),u.push(1-K/I),j+=1}}for(let K=0;K<I;K++)for(let gt=0;gt<C;gt++){const z=d+gt+O*K,at=d+gt+O*(K+1),Tt=d+(gt+1)+O*(K+1),Kt=d+(gt+1)+O*K;l.push(z,at,Kt),l.push(at,Tt,Kt),H+=6}o.addGroup(f,H,M),f+=H,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=as(s[e]);for(const i in n)t[i]=n[i]}return t}function Rf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Cf={clone:as,merge:Ve};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class du extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new P,gl=new pt,_l=new pt;class Ge extends du{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,gl,_l),e.subVectors(_l,gl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Wi=1;class If extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(Gi,Wi,t,e);i.layers=this.layers,this.add(i);const r=new Ge(Gi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new Ge(Gi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new Ge(Gi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new Ge(Gi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Gi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class fu extends Ie{constructor(t=[],e=is,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Df extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sn(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Kn});r.uniforms.tEquirect.value=e;const a=new ee(i,r),o=e.minFilter;return e.minFilter===In&&(e.minFilter=Fe),new If(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Nn extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class pu extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jo,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new P;class Ec{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ec(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vl=new P,yl=new oe,Ml=new oe,Ff=new P,bl=new $t,Er=new P,ka=new Fn,Sl=new $t,Ba=new ds;class Of extends ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),t.ray.intersectsSphere(ka)!==!1&&(Sl.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(Sl),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ba)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():It("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;yl.fromBufferAttribute(i.attributes.skinIndex,t),Ml.fromBufferAttribute(i.attributes.skinWeight,t),vl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Ml.getComponent(r);if(a!==0){const o=yl.getComponent(r);bl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Ff.copy(vl).applyMatrix4(bl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class mu extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ha extends Ie{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Xe,h=Xe,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tl=new $t,kf=new $t;class wc{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){It("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new $t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:kf;Tl.multiplyMatrices(o,e[r]),Tl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ha(e,t,t,sn,Mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(It("Skeleton: No bone found with UUID:",r),a=new mu),this.bones.push(a),this.boneInverses.push(new $t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Qo extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new $t,El=new $t,wr=[],wl=new ti,Bf=new $t,bs=new ee,Ss=new Fn;class xu extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),wl.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(wl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ss.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),El.multiplyMatrices(n,Xi),bs.matrixWorld=El,bs.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){const l=wr[a];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(i*this.count),i,this.count,xc,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new P,zf=new P,Vf=new Xt;class li{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=za.subVectors(n,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vf.getNormalMatrix(t),i=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Fn,Hf=new pt(.5,.5),Ar=new P;class Ac{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],v=r[12],_=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,p-x,T-v).normalize(),i[1].setComponents(c+a,f+h,p+x,T+v).normalize(),i[2].setComponents(c+o,f+u,p+g,T+_).normalize(),i[3].setComponents(c-o,f-u,p-g,T-_).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-y).normalize(),e===Dn)i[5].setComponents(c+l,f+d,p+m,T+y).normalize();else if(e===na)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Hf.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ar.x=i.normal.x>0?t.max.x:t.min.x,Ar.y=i.normal.y>0?t.max.y:t.min.y,Ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rc extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sa=new P,ra=new P,Al=new $t,Ts=new ds,Rr=new Fn,Va=new P,Rl=new P;class ua extends _e{constructor(t=new Re,e=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)sa.fromBufferAttribute(e,i-1),ra.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new pe(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Al.copy(i).invert(),Ts.copy(t.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=h.getX(g),v=h.getX(g+1),_=Cr(this,t,Ts,l,p,v,g);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(f),p=Cr(this,t,Ts,l,g,m,x-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=Cr(this,t,Ts,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=Cr(this,t,Ts,l,x-1,f,x-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cr(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(sa.fromBufferAttribute(o,i),ra.fromBufferAttribute(o,r),e.distanceSqToSegment(sa,ra,Va,Rl)>n)return;Va.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Va);if(!(c<t.near||c>t.far))return{distance:c,point:Rl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cl=new P,Pl=new P;class Gf extends ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Cl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cl.distanceTo(Pl);t.setAttribute("lineDistance",new pe(n,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends ua{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class gu extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ll=new $t,tc=new ds,Pr=new Fn,Lr=new P;class Xf extends _e{constructor(t=new Re,e=new gu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;Ll.copy(i).invert(),tc.copy(t.ray).applyMatrix4(Ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,g=f;x<g;x++){const m=c.getX(x);Lr.fromBufferAttribute(u,m),Il(Lr,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,g=f;x<g;x++)Lr.fromBufferAttribute(u,x),Il(Lr,x,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Il(s,t,e,n,i,r,a){const o=tc.distanceSqToPoint(s);if(o<e){const l=new P;tc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _u extends Ie{constructor(t,e,n=wi,i,r,a,o=Xe,l=Xe,c,h=$s,u=1){if(h!==$s&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vu extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cc extends Re{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,x=n*2+r,g=i+1,m=new P,p=new P;for(let v=0;v<=x;v++){let _=0,y=0,T=0,w=0;if(v<=n){const M=v/n,b=M*Math.PI/2;y=-h-t*Math.cos(b),T=t*Math.sin(b),w=-t*Math.cos(b),_=M*u}else if(v<=n+r){const M=(v-n)/r;y=-h+M*e,T=t,w=0,_=u+M*d}else{const M=(v-n-r)/n,b=M*Math.PI/2;y=h+t*Math.sin(b),T=t*Math.cos(b),w=t*Math.sin(b),_=u+d+M*u}const C=Math.max(0,Math.min(1,_/f));let I=0;v===0?I=.5/i:v===x&&(I=-.5/i);for(let M=0;M<=i;M++){const b=M/i,R=b*Math.PI*2,N=Math.sin(R),U=Math.cos(R);p.x=-T*U,p.y=y,p.z=T*N,o.push(p.x,p.y,p.z),m.set(-T*U,w,T*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+I,C)}if(v>0){const M=(v-1)*g;for(let b=0;b<i;b++){const R=M+b,N=M+b+1,U=v*g+b,V=v*g+b+1;a.push(R,N,U),a.push(N,V,U)}}}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Qs extends Re{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let x=0;const g=[],m=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function v(){const y=new P,T=new P;let w=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const M=[],b=I/r,R=b*(e-t)+t;for(let N=0;N<=i;N++){const U=N/i,V=U*l+o,O=Math.sin(V),G=Math.cos(V);T.x=R*O,T.y=-b*n+m,T.z=R*G,u.push(T.x,T.y,T.z),y.set(O,C,G).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-b),M.push(x++)}g.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const b=g[M][I],R=g[M+1][I],N=g[M+1][I+1],U=g[M][I+1];(t>0||M!==0)&&(h.push(b,R,U),w+=3),(e>0||M!==r-1)&&(h.push(R,N,U),w+=3)}c.addGroup(p,w,0),p+=w}function _(y){const T=x,w=new pt,C=new P;let I=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),x++;const R=x;for(let N=0;N<=i;N++){const V=N/i*l+o,O=Math.cos(V),G=Math.sin(V);C.x=M*G,C.y=m*b,C.z=M*O,u.push(C.x,C.y,C.z),d.push(0,b,0),w.x=O*.5+.5,w.y=G*.5*b+.5,f.push(w.x,w.y),x++}for(let N=0;N<i;N++){const U=T+N,V=R+N;y===!0?h.push(V,V+1,U):h.push(V+1,V,U),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,l=new $t;for(let f=0;f<=t;f++){const x=f/t;i[f]=this.getTangentAt(x,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],f*x)),a[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pc extends On{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qf extends Pc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ir=new P,Ha=new Lc,Ga=new Lc,Wa=new Lc;class yu extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ir.subVectors(i[0],i[1]).add(i[0]),c=Ir);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ir.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Ha.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,g,m),Ga.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,g,m),Wa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ga.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ha.calc(l),Ga.calc(l),Wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function $f(s,t){const e=1-s;return e*e*t}function jf(s,t){return 2*(1-s)*s*t}function Yf(s,t){return s*s*t}function zs(s,t,e,n){return $f(s,t)+jf(s,e)+Yf(s,n)}function Kf(s,t){const e=1-s;return e*e*e*t}function Zf(s,t){const e=1-s;return 3*e*e*s*t}function Jf(s,t){return 3*(1-s)*s*s*t}function Qf(s,t){return s*s*s*t}function Vs(s,t,e,n,i){return Kf(s,t)+Zf(s,e)+Jf(s,n)+Qf(s,i)}class Mu extends On{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,r.x,a.x,o.x),Vs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tp extends On{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,r.x,a.x,o.x),Vs(t,i.y,r.y,a.y,o.y),Vs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bu extends On{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ep extends On{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Su extends On{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,i.x,r.x,a.x),zs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends On{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,i.x,r.x,a.x),zs(t,i.y,r.y,a.y),zs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Dl(o,l.x,c.x,h.x,u.x),Dl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:qf,CatmullRomCurve3:yu,CubicBezierCurve:Mu,CubicBezierCurve3:tp,EllipseCurve:Pc,LineCurve:bu,LineCurve3:ep,QuadraticBezierCurve:Su,QuadraticBezierCurve3:Tu,SplineCurve:Eu});class np extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ec[i.type]().fromJSON(i))}return this}}class Nl extends np{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bu(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Su(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Mu(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Eu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Pc(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wu extends Nl{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Nl().fromJSON(i))}return this}}function ip(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Au(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<i;d+=e){const f=s[d],x=s[d+1];f<o&&(o=f),x<l&&(l=x),f>h&&(h=f),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return tr(r,a,e,o,l,c,0),a}function Au(s,t,e,n,i){let r;if(i===vp(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ul(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ul(a/n|0,s[a],s[a+1],r);return r&&os(r,r.next)&&(nr(r),r=r.next),r}function Ri(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(os(e,e.next)||Me(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&fp(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?rp(s,n,i,r):sp(s)){t.push(l.i,s.i,c.i),nr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=ap(Ri(s),t),tr(s,t,e,n,i,r,2)):a===2&&op(s,t,e,n,i,r):tr(Ri(s),t,e,n,i,r,1);break}}}function sp(s){const t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&Is(i,o,r,l,a,c,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function rp(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Me(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),x=Math.min(h,u,d),g=Math.max(o,l,c),m=Math.max(h,u,d),p=nc(f,x,t,e,n),v=nc(g,m,t,e,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&Is(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=g&&y.y>=x&&y.y<=m&&y!==i&&y!==a&&Is(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&Is(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=x&&y.y<=m&&y!==i&&y!==a&&Is(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ap(s,t){let e=s;do{const n=e.prev,i=e.next.next;!os(n,i)&&Cu(n,e,e.next,i)&&er(n,i)&&er(i,n)&&(t.push(n.i,e.i,i.i),nr(e),nr(e.next),e=s=i),e=e.next}while(e!==s);return Ri(e)}function op(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xp(a,o)){let l=Pu(a,o);a=Ri(a,a.next),l=Ri(l,l.next),tr(a,t,e,n,i,r,0),tr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function cp(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Au(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(mp(c))}i.sort(lp);for(let r=0;r<i.length;r++)e=hp(i[r],e);return e}function lp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function hp(s,t){const e=up(s,t);if(!e)return t;const n=Pu(e,s);return Ri(n,n.next),Ri(e,e.next)}function up(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(os(s,e))return e;do{if(os(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ru(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);er(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&dp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function dp(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function fp(s,t,e,n){let i=s;do i.z===0&&(i.z=nc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,pp(i)}function pp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function nc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function mp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ru(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Is(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Ru(s,t,e,n,i,r,a,o)}function xp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!gp(s,t)&&(er(s,t)&&er(t,s)&&_p(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||os(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function os(s,t){return s.x===t.x&&s.y===t.y}function Cu(s,t,e,n){const i=Nr(Me(s,t,e)),r=Nr(Me(s,t,n)),a=Nr(Me(e,n,s)),o=Nr(Me(e,n,t));return!!(i!==r&&a!==o||i===0&&Dr(s,e,t)||r===0&&Dr(s,n,t)||a===0&&Dr(e,s,n)||o===0&&Dr(e,t,n))}function Dr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Nr(s){return s>0?1:s<0?-1:0}function gp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function er(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function _p(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Pu(s,t){const e=ic(s.i,s.x,s.y),n=ic(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ul(s,t,e,n){const i=ic(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ic(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vp(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class yp{static triangulate(t,e,n=2){return ip(t,e,n)}}class Hs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Fl(t),Ol(n,t);let a=t.length;e.forEach(Fl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Ol(n,e[l]);const o=yp.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ol(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ar extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let _=0;_<c;_++){const y=_*u-r;x.push(y,-v,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const _=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;f.push(_,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ic extends Re{constructor(t=new wu([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new pe(i,3)),this.setAttribute("normal",new pe(r,3)),this.setAttribute("uv",new pe(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const x=d.holes;Hs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=x.length;m<p;m++){const v=x[m];Hs.isClockWise(v)===!0&&(x[m]=v.reverse())}const g=Hs.triangulateShape(f,x);for(let m=0,p=x.length;m<p;m++){const v=x[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=g.length;m<p;m++){const v=g[m],_=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(_,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mp(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Ic(n,t.curveSegments)}}function Mp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Dc extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],y=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(_,y,w),(p!==n-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nc extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let x=0;x<=i;x++){const g=x/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=i;x++){const g=(i+1)*f+x-1,m=(i+1)*(f-1)+x-1,p=(i+1)*(f-1)+x,v=(i+1)*f+x;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uc extends Re{constructor(t=new Tu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new pt;let h=new P;const u=[],d=[],f=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function g(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),p()}function m(_){h=t.getPointAt(_/e,h);const y=a.normals[_],T=a.binormals[_];for(let w=0;w<=i;w++){const C=w/i*Math.PI*2,I=Math.sin(C),M=-Math.cos(C);l.x=M*y.x+I*T.x,l.y=M*y.y+I*T.y,l.z=M*y.z+I*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){const T=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),C=(i+1)*_+y,I=(i+1)*(_-1)+y;x.push(T,w,I),x.push(w,C,I)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)c.x=_/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uc(new ec[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class hn extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class En extends hn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bp extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sp extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tp extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ep extends Rc{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ur(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ap(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function kl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Lu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class or{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rp extends or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=t,o=2*e-n;break;case Jc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:a=t,l=2*n-e;break;case Jc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(i-e),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,_=(-1-f)*m+(1.5+f)*g+.5*x,y=f*m-f*g;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+v*a[c+T]+_*a[l+T]+y*a[u+T];return r}}class Cp extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Pp extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class wn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Ks:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&wp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xa,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){const g=e[u+x];if(g!==e[d+x]||g!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ks;class fs extends wn{constructor(t,e,n){super(t,e,n)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ys;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Iu extends wn{constructor(t,e,n,i){super(t,e,n,i)}}Iu.prototype.ValueTypeName="color";class cs extends wn{constructor(t,e,n,i){super(t,e,n,i)}}cs.prototype.ValueTypeName="number";class Lp extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ls extends wn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Lp(this.times,this.values,this.getValueSize(),t)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends wn{constructor(t,e,n){super(t,e,n)}}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ys;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends wn{constructor(t,e,n,i){super(t,e,n,i)}}hs.prototype.ValueTypeName="vector";class Ip{constructor(t="",e=-1,n=[],i=Nd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Np(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Ap(l);l=kl(l,1,h),c=kl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new cs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(It("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Jt("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,x,g){if(f.length!==0){const m=[],p=[];Lu(f,m,p,x),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)f[d[x].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[x].morphTargets.length;++v){const _=d[x];m.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new cs(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(hs,f+".position",d,"pos",i),n(ls,f+".quaternion",d,"rot",i),n(hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Dp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cs;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Iu;case"quaternion":return ls;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Np(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Dp(s.type);if(s.times===void 0){const e=[],n=[];Lu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Yn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Up{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fp=new Up;class ms{constructor(t){this.manager=t!==void 0?t:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Op extends Error{constructor(t,e){super(t),this.response=e}}class Du extends ms{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Yn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:i});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&It("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:f});for(let w=0,C=h.length;w<C;w++){const I=h[w];I.onProgress&&I.onProgress(T)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Op(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Yn.add(`file:${t}`,c);const h=Wn[t];delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Wn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qi=new WeakMap;class kp extends ms{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Yn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=qi.get(a);u===void 0&&(u=[],qi.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=Zs("img");function l(){h(),e&&e(this);const u=qi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}qi.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Yn.remove(`image:${t}`);const d=qi.get(this)||[];for(let f=0;f<d.length;f++){const x=d[f];x.onError&&x.onError(u)}qi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Bp extends ms{constructor(t){super(t)}load(t,e,n,i){const r=new Ie,a=new kp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class da extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zp extends da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new $t,Bl=new P,zl=new P;class Fc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vp extends Fc{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=rs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hp extends da{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vl=new $t,Es=new P,qa=new P;class Gp extends Fc{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(t.matrixWorld),n.position.copy(Es),qa.copy(n.position),qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,n.coordinateSystem,n.reversedDepth)}}class Nu extends da{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Oc extends du{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wp extends Fc{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sc extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gs{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const $a=new WeakMap;class Xp extends ms{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&It("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&It("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Yn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{if($a.has(a)===!0)i&&i($a.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),$a.set(l,c),Yn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Yn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qp extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kc="\\[\\]\\.:\\/",$p=new RegExp("["+kc+"]","g"),Bc="[^"+kc+"]",jp="[^"+kc.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Kp=/(WCOD+)?/.source.replace("WCOD",jp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Qp=new RegExp("^"+Yp+Kp+Zp+Jp+"$"),tm=["material","materials","bones","map"];class em{constructor(t,e,n){const i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($p,"")}static parseTrackName(t){const e=Qp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=em;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hl=new $t;class Cn{constructor(t,e,n=0,i=1/0){this.ray=new ds(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(Gl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)rc(t[i],this,n,e);return n.sort(Gl),n}}function Gl(s,t){return s.distance-t.distance}function rc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)rc(r[a],t,e,!0)}}class Wl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nm extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){It("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xl(s,t,e,n){const i=im(n);switch(e){case eu:return s*t;case xc:return s*t/i.components*i.byteLength;case gc:return s*t/i.components*i.byteLength;case _c:return s*t*2/i.components*i.byteLength;case vc:return s*t*2/i.components*i.byteLength;case nu:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case yc:return s*t*4/i.components*i.byteLength;case qr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case To:case wo:return Math.max(s,16)*Math.max(t,8)/4;case So:case Eo:return Math.max(s,8)*Math.max(t,8)/2;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $o:case jo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yo:case Ko:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(s){switch(s){case Un:case Zh:return{byteLength:1,components:1};case Xs:case Jh:case us:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case wi:case fc:case Mn:return{byteLength:4,components:1};case Qh:case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sm(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,dx=`#define DISTANCE
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
}`,fx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Fx=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:rm,alphahash_pars_fragment:am,alphamap_fragment:om,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:xm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Sm,color_fragment:Tm,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:km,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Zm,envmap_vertex:Vm,fog_vertex:Hm,fog_pars_vertex:Gm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:$m,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Km,lights_toon_fragment:Jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:x0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:b0,normal_fragment_maps:S0,normal_pars_fragment:T0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:L0,opaque_fragment:I0,packing:D0,premultiplied_alpha_fragment:N0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:V0,shadowmap_vertex:H0,shadowmask_pars_fragment:G0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:$0,specularmap_fragment:j0,specularmap_pars_fragment:Y0,tonemapping_fragment:K0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:Q0,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ax,backgroundCube_frag:ox,cube_vert:cx,cube_frag:lx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:dx,distanceRGBA_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:xx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:yx,meshlambert_frag:Mx,meshmatcap_vert:bx,meshmatcap_frag:Sx,meshnormal_vert:Tx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Ix,points_frag:Dx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Ox},xt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ve([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ve([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ve([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ve([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ve([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ve([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ve([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ve([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ve([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ve([xt.lights,xt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Pn.physical={uniforms:Ve([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Fr={r:0,b:0,g:0},_i=new dn,kx=new $t;function Bx(s,t,e,n,i,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function g(_){let y=!1;const T=x(_);T===null?p(o,l):T&&T.isColor&&(p(T,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const T=x(y);T&&(T.isCubeTexture||T.mapping===la)?(h===void 0&&(h=new ee(new Sn(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:as(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(_i)),h.material.toneMapped=ne.getTransfer(T.colorSpace)!==de,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ee(new ar(2,2),new Qn({name:"BackgroundMaterial",uniforms:as(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Fr,uu(s)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:v}}function zx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(b,R,N,U,V){let O=!1;const G=u(U,N,R);r!==G&&(r=G,c(r.object)),O=f(b,U,N,V),O&&x(b,U,N,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(b,R,N,U),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,R,N){const U=N.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let O=V[R.id];O===void 0&&(O={},V[R.id]=O);let G=O[U];return G===void 0&&(G=d(l()),O[U]=G),G}function d(b){const R=[],N=[],U=[];for(let V=0;V<e;V++)R[V]=0,N[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,R,N,U){const V=r.attributes,O=R.attributes;let G=0;const j=N.getAttributes();for(const H in j)if(j[H].location>=0){const K=V[H];let gt=O[H];if(gt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),K===void 0||K.attribute!==gt||gt&&K.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function x(b,R,N,U){const V={},O=R.attributes;let G=0;const j=N.getAttributes();for(const H in j)if(j[H].location>=0){let K=O[H];K===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const gt={};gt.attribute=K,K&&K.data&&(gt.data=K.data),V[H]=gt,G++}r.attributes=V,r.attributesNum=G,r.index=U}function g(){const b=r.newAttributes;for(let R=0,N=b.length;R<N;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const N=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;N[b]=1,U[b]===0&&(s.enableVertexAttribArray(b),U[b]=1),V[b]!==R&&(s.vertexAttribDivisor(b,R),V[b]=R)}function v(){const b=r.newAttributes,R=r.enabledAttributes;for(let N=0,U=R.length;N<U;N++)R[N]!==b[N]&&(s.disableVertexAttribArray(N),R[N]=0)}function _(b,R,N,U,V,O,G){G===!0?s.vertexAttribIPointer(b,R,N,V,O):s.vertexAttribPointer(b,R,N,U,V,O)}function y(b,R,N,U){g();const V=U.attributes,O=N.getAttributes(),G=R.defaultAttributeValues;for(const j in O){const H=O[j];if(H.location>=0){let et=V[j];if(et===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){const K=et.normalized,gt=et.itemSize,z=t.get(et);if(z===void 0)continue;const at=z.buffer,Tt=z.type,Kt=z.bytesPerElement,Y=Tt===s.INT||Tt===s.UNSIGNED_INT||et.gpuType===fc;if(et.isInterleavedBufferAttribute){const Z=et.data,nt=Z.stride,ut=et.offset;if(Z.isInstancedInterleavedBuffer){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let lt=0;lt<H.locationSize;lt++)_(H.location+lt,gt/H.locationSize,Tt,K,nt*Kt,(ut+gt/H.locationSize*lt)*Kt,Y)}else{if(et.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,et.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Z=0;Z<H.locationSize;Z++)_(H.location+Z,gt/H.locationSize,Tt,K,gt*Kt,gt/H.locationSize*Z*Kt,Y)}}else if(G!==void 0){const K=G[j];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}v()}function T(){I();for(const b in n){const R=n[b];for(const N in R){const U=R[N];for(const V in U)h(U[V].object),delete U[V];delete R[N]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const N in R){const U=R[N];for(const V in U)h(U[V].object),delete U[V];delete R[N]}delete n[b.id]}function C(b){for(const R in n){const N=n[R];if(N[b.id]===void 0)continue;const U=N[b.id];for(const V in U)h(U[V].object),delete U[V];delete N[b.id]}}function I(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Vx(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];e.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==sn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:w}}function Gx(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,_=v*4;let y=p.clippingState||null;l.value=y,y=h(x,d,_,f);for(let T=0;T!==_;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Wx(s){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=is:o===bo&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mo||o===bo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Df(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ui=4,ql=[.125,.215,.35,.446,.526,.582],bi=20,Xx=512,ws=new Oc,$l=new Vt;let ja=null,Ya=0,Ka=0,Za=!1;const qx=new P;class ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=qx}=r;ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Ya,Ka),this._renderer.xr.enabled=Za,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:us,format:sn,colorSpace:$e,depthBuffer:!1},i=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$x(r)),this._blurMaterial=Yx(r,t,e)}return i}_compileMaterial(t){const e=new ee(new Re,t);this._renderer.compile(e,ws)}_sceneToCubeUV(t,e,n,i,r){const l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($l),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new Sn,new bn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy($l),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const T=this._cubeSize;$i(i,y*T,_>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===is||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ws)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const v=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=jx(this._lodMax,v,_)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-ui?n-x+ui:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,$i(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,ws),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,$i(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,ws)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):bi;m>bi&&It(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let v=0;for(let C=0;C<bi;++C){const I=C/g,M=Math.exp(-I*I/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const y=this._sizeLods[i],T=3*y*(i>_-ui?i-_+ui:0),w=4*(this._cubeSize-y);$i(e,T,w,3*y,2*y),l.setRenderTarget(e),l.render(u,ws)}}function $x(s){const t=[],e=[],n=[];let i=s;const r=s-ui+1+ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ui?l=ql[a-s+ui-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,v=new Float32Array(g*x*f),_=new Float32Array(m*x*f),y=new Float32Array(p*x*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,I=w>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(M,g*x*w),_.set(d,m*x*w);const b=[w,w,w,w,w,w];y.set(b,p*x*w)}const T=new Re;T.setAttribute("position",new qe(v,g)),T.setAttribute("uv",new qe(_,m)),T.setAttribute("faceIndex",new qe(y,p)),n.push(new ee(T,null)),i>ui&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function jl(s,t,e){const n=new Ai(s,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jx(s,t,e){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yx(s,t,e){const n=new Float32Array(bi),i=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Yl(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Kl(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Kx(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mo||l===bo,h=l===is||l===ss;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ac(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ac(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Js("WebGLRenderer: "+n+" extension not supported."),i}}}function Jx(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let _=0,y=v.length;_<y;_+=3){const T=v[_+0],w=v[_+1],C=v[_+2];d.push(T,w,w,C,C,T)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const T=_+0,w=_+1,C=_+2;d.push(T,w,w,C,C,T)}}else return;const m=new(ru(d)?hu:lu)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Qx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,x){x!==0&&(s.drawElementsInstanced(n,f,r,d*a,x),e.update(f,n,x))}function h(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];e.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let v=0;v<x;v++)p+=f[v]*g[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eg(s,t,e){const n=new WeakMap,i=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*w*4*u),I=new ou(C,T,w,u);I.type=Mn,I.needsUpdate=!0;const M=y*4;for(let R=0;R<u;R++){const N=p[R],U=v[R],V=_[R],O=T*w*4*R;for(let G=0;G<N.count;G++){const j=G*M;x===!0&&(i.fromBufferAttribute(N,G),C[O+j+0]=i.x,C[O+j+1]=i.y,C[O+j+2]=i.z,C[O+j+3]=0),g===!0&&(i.fromBufferAttribute(U,G),C[O+j+4]=i.x,C[O+j+5]=i.y,C[O+j+6]=i.z,C[O+j+7]=0),m===!0&&(i.fromBufferAttribute(V,G),C[O+j+8]=i.x,C[O+j+9]=i.y,C[O+j+10]=i.z,C[O+j+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new pt(T,w)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ng(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Fu=new Ie,Zl=new _u(1,1),Ou=new ou,ku=new xf,Bu=new fu,Jl=[],Ql=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Jl[i];if(r===void 0&&(r=new Float32Array(i),Jl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pa(s,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ig(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function og(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;nh.set(n),s.uniformMatrix2fv(this.addr,!1,nh),Ae(e,n)}}function cg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;eh.set(n),s.uniformMatrix3fv(this.addr,!1,eh),Ae(e,n)}}function lg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;th.set(n),s.uniformMatrix4fv(this.addr,!1,th),Ae(e,n)}}function hg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function pg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function _g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zl.compareFunction=su,r=Zl):r=Fu,e.setTexture2D(t||r,i)}function vg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ku,i)}function yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bu,i)}function Mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ou,i)}function bg(s){switch(s){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return xg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Sg(s,t){s.uniform1fv(this.addr,t)}function Tg(s,t){const e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function Eg(s,t){const e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function wg(s,t){const e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function Ag(s,t){const e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rg(s,t){const e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cg(s,t){const e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pg(s,t){s.uniform1iv(this.addr,t)}function Lg(s,t){s.uniform2iv(this.addr,t)}function Ig(s,t){s.uniform3iv(this.addr,t)}function Dg(s,t){s.uniform4iv(this.addr,t)}function Ng(s,t){s.uniform1uiv(this.addr,t)}function Ug(s,t){s.uniform2uiv(this.addr,t)}function Fg(s,t){s.uniform3uiv(this.addr,t)}function Og(s,t){s.uniform4uiv(this.addr,t)}function kg(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Fu,r[a])}function Bg(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ku,r[a])}function zg(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bu,r[a])}function Vg(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ou,r[a])}function Hg(s){switch(s){case 5126:return Sg;case 35664:return Tg;case 35665:return Eg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ng;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class Xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function ih(s,t){s.seq.push(t),s.map[t.id]=t}function qg(s,t,e){const n=s.name,i=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),a=Ja.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ih(e,c===void 0?new Gg(o,s,t):new Wg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Xg(o),ih(e,u)),e=u}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);qg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function sh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const $g=37297;let jg=0;function Yg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const rh=new Xt;function Kg(s){ne._getMatrix(rh,ne.workingColorSpace,s);const t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case ea:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ah(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Yg(s.getShaderSource(t),o)}else return r}function Zg(s,t){const e=Kg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jg(s,t){let e;switch(t){case Ad:e="Linear";break;case Rd:e="Reinhard";break;case Cd:e="Cineon";break;case Pd:e="ACESFilmic";break;case Id:e="AgX";break;case jh:e="Neutral";break;case Ld:e="Custom";break;default:It("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new P;function Qg(){ne.getLuminanceCoefficients(Or);const s=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function e_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ds(s){return s!==""}function oh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(s){return s.replace(i_,r_)}const s_=new Map;function r_(s,t){let e=jt[t];if(e===void 0){const n=s_.get(t);if(n!==void 0)e=jt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oc(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(s){return s.replace(a_,o_)}function o_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function c_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ed:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function d_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=c_(e),c=l_(e),h=h_(e),u=u_(e),d=d_(e),f=t_(e),x=e_(r),g=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?jt.tonemapping_pars_fragment:"",e.toneMapping!==di?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Zg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=oc(a),a=oh(a,e),a=ch(a,e),o=oc(o),o=oh(o,e),o=ch(o,e),a=lh(a),o=lh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+a,y=v+p+o,T=sh(i,i.VERTEX_SHADER,_),w=sh(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(R){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(w)||"",O=N.trim(),G=U.trim(),j=V.trim();let H=!0,et=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,w);else{const K=ah(i,T,"vertex"),gt=ah(i,w,"fragment");Jt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+K+`
`+gt)}else O!==""?It("WebGLProgram: Program Info Log:",O):(G===""||j==="")&&(et=!1);et&&(R.diagnostics={runnable:H,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(T),i.deleteShader(w),I=new Kr(i,g),M=n_(i,g)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,$g)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new x_(t),e.set(t,n)),n}}class x_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function g_(s,t,e,n,i,r,a){const o=new Tc,l=new m_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,R,N,U){const V=N.fog,O=U.geometry,G=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),H=j&&j.mapping===la?j.image.height:null,et=x[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&It("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=K!==void 0?K.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let at,Tt,Kt,Y;if(et){const Pt=Pn[et];at=Pt.vertexShader,Tt=Pt.fragmentShader}else at=M.vertexShader,Tt=M.fragmentShader,l.update(M),Kt=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const Z=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),ut=U.isInstancedMesh===!0,lt=U.isBatchedMesh===!0,mt=!!M.map,Ot=!!M.matcap,_t=!!j,qt=!!M.aoMap,L=!!M.lightMap,Dt=!!M.bumpMap,kt=!!M.normalMap,Zt=!!M.displacementMap,yt=!!M.emissiveMap,ie=!!M.metalnessMap,Ct=!!M.roughnessMap,At=M.anisotropy>0,A=M.clearcoat>0,S=M.dispersion>0,B=M.iridescence>0,$=M.sheen>0,Q=M.transmission>0,W=At&&!!M.anisotropyMap,Rt=A&&!!M.clearcoatMap,dt=A&&!!M.clearcoatNormalMap,Lt=A&&!!M.clearcoatRoughnessMap,Et=B&&!!M.iridescenceMap,it=B&&!!M.iridescenceThicknessMap,ct=$&&!!M.sheenColorMap,Bt=$&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,vt=!!M.specularColorMap,Nt=!!M.specularIntensityMap,D=Q&&!!M.transmissionMap,ft=Q&&!!M.thicknessMap,rt=!!M.gradientMap,st=!!M.alphaMap,ot=M.alphaTest>0,tt=!!M.alphaHash,St=!!M.extensions;let Ht=di;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const he={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:at,fragmentShader:Tt,defines:M.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:lt,batchingColor:lt&&U._colorsTexture!==null,instancing:ut,instancingColor:ut&&U.instanceColor!==null,instancingMorph:ut&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$e,alphaToCoverage:!!M.alphaToCoverage,map:mt,matcap:Ot,envMap:_t,envMapMode:_t&&j.mapping,envMapCubeUVHeight:H,aoMap:qt,lightMap:L,bumpMap:Dt,normalMap:kt,displacementMap:d&&Zt,emissiveMap:yt,normalMapObjectSpace:kt&&M.normalMapType===kd,normalMapTangentSpace:kt&&M.normalMapType===Mc,metalnessMap:ie,roughnessMap:Ct,anisotropy:At,anisotropyMap:W,clearcoat:A,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Lt,dispersion:S,iridescence:B,iridescenceMap:Et,iridescenceThicknessMap:it,sheen:$,sheenColorMap:ct,sheenRoughnessMap:Bt,specularMap:Ut,specularColorMap:vt,specularIntensityMap:Nt,transmission:Q,transmissionMap:D,thicknessMap:ft,gradientMap:rt,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:tt,combine:M.combine,mapUv:mt&&g(M.map.channel),aoMapUv:qt&&g(M.aoMap.channel),lightMapUv:L&&g(M.lightMap.channel),bumpMapUv:Dt&&g(M.bumpMap.channel),normalMapUv:kt&&g(M.normalMap.channel),displacementMapUv:Zt&&g(M.displacementMap.channel),emissiveMapUv:yt&&g(M.emissiveMap.channel),metalnessMapUv:ie&&g(M.metalnessMap.channel),roughnessMapUv:Ct&&g(M.roughnessMap.channel),anisotropyMapUv:W&&g(M.anisotropyMap.channel),clearcoatMapUv:Rt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ut&&g(M.specularMap.channel),specularColorMapUv:vt&&g(M.specularColorMap.channel),specularIntensityMapUv:Nt&&g(M.specularIntensityMap.channel),transmissionMapUv:D&&g(M.transmissionMap.channel),thicknessMapUv:ft&&g(M.thicknessMap.channel),alphaMapUv:st&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(kt||At),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(mt||st),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:mt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:yt&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:St&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&M.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const b=x[M.type];let R;if(b){const N=Pn[b];R=Cf.clone(N.uniforms)}else R=M.uniforms;return R}function T(M,b){let R;for(let N=0,U=h.length;N<U;N++){const V=h[N];if(V.cacheKey===b){R=V,++R.usedTimes;break}}return R===void 0&&(R=new f_(s,b,M,r),h.push(R)),R}function w(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function __(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function v_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,x,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||v_),n.length>1&&n.sort(d||uh),i.length>1&&i.sort(d||uh)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function y_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new dh,s.set(n,[a])):i>=r.length?(a=new dh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function M_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function b_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let S_=0;function T_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function E_(s){const t=new M_,e=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new $t,a=new $t;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,v=0,_=0,y=0,T=0,w=0,C=0;c.sort(T_);for(let M=0,b=c.length;M<b;M++){const R=c[M],N=R.color,U=R.intensity,V=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],U);C++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=G,f++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=V,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[g]=G;const j=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,j.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=O,y++}g++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=R.shadow.matrix,_++}n.point[x]=G,x++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(U),G.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=f,I.pointLength=x,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=C,n.version=S_++)}function l(c,h){let u=0,d=0,f=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function fh(s){const t=new E_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function w_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new fh(s),t.set(i,[o])):r>=a.length?(o=new fh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function C_(s,t,e){let n=new Ac;const i=new pt,r=new pt,a=new oe,o=new Sp({depthPacking:Od}),l=new Tp,c={},h=e.maxTextureSize,u={[Jn]:We,[We]:Jn,[nn]:nn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Re;x.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ee(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Kn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==$n&&this.type===$n,V=p===$n&&this.type!==$n;for(let O=0,G=w.length;O<G;O++){const j=w[O],H=j.shadow;if(H===void 0){It("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const et=H.getFrameExtents();if(i.multiply(et),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||U===!0||V===!0){const gt=this.type!==$n?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(i.x,i.y,gt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const K=H.getViewportCount();for(let gt=0;gt<K;gt++){const z=H.getViewport(gt);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),N.viewport(a),H.updateMatrices(j,gt),n=H.getFrustum(),y(C,I,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&v(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,R)};function v(w,C){const I=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,f,g,null)}function _(w,C,I,M){let b=null;const R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)b=R;else if(b=I.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=b.uuid,U=C.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let O=V[U];O===void 0&&(O=b.clone(),V[U]=O,C.addEventListener("dispose",T)),b=O}if(b.visible=C.visible,b.wireframe=C.wireframe,M===$n?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=I}return b}function y(w,C,I,M,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===$n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const U=t.update(w),V=w.material;if(Array.isArray(V)){const O=U.groups;for(let G=0,j=O.length;G<j;G++){const H=O[G],et=V[H.materialIndex];if(et&&et.visible){const K=_(w,et,M,b);w.onBeforeShadow(s,w,C,I,U,K,H),s.renderBufferDirect(I,null,U,K,w,H),w.onAfterShadow(s,w,C,I,U,K,H)}}}else if(V.visible){const O=_(w,V,M,b);w.onBeforeShadow(s,w,C,I,U,O,null),s.renderBufferDirect(I,null,U,O,w,null),w.onAfterShadow(s,w,C,I,U,O,null)}}const N=w.children;for(let U=0,V=N.length;U<V;U++)y(N[U],C,I,M,b)}function T(w){w.target.removeEventListener("dispose",T);for(const I in c){const M=c[I],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const P_={[po]:mo,[xo]:vo,[go]:yo,[ns]:_o,[mo]:po,[vo]:xo,[yo]:go,[_o]:ns};function L_(s,t){function e(){let D=!1;const ft=new oe;let rt=null;const st=new oe(0,0,0,0);return{setMask:function(ot){rt!==ot&&!D&&(s.colorMask(ot,ot,ot,ot),rt=ot)},setLocked:function(ot){D=ot},setClear:function(ot,tt,St,Ht,he){he===!0&&(ot*=Ht,tt*=Ht,St*=Ht),ft.set(ot,tt,St,Ht),st.equals(ft)===!1&&(s.clearColor(ot,tt,St,Ht),st.copy(ft))},reset:function(){D=!1,rt=null,st.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,rt=null,st=null,ot=null;return{setReversed:function(tt){if(ft!==tt){const St=t.get("EXT_clip_control");tt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ft=tt;const Ht=ot;ot=null,this.setClear(Ht)}},getReversed:function(){return ft},setTest:function(tt){tt?Z(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!D&&(s.depthMask(tt),rt=tt)},setFunc:function(tt){if(ft&&(tt=P_[tt]),st!==tt){switch(tt){case po:s.depthFunc(s.NEVER);break;case mo:s.depthFunc(s.ALWAYS);break;case xo:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case go:s.depthFunc(s.EQUAL);break;case _o:s.depthFunc(s.GEQUAL);break;case vo:s.depthFunc(s.GREATER);break;case yo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=tt}},setLocked:function(tt){D=tt},setClear:function(tt){ot!==tt&&(ft&&(tt=1-tt),s.clearDepth(tt),ot=tt)},reset:function(){D=!1,rt=null,st=null,ot=null,ft=!1}}}function i(){let D=!1,ft=null,rt=null,st=null,ot=null,tt=null,St=null,Ht=null,he=null;return{setTest:function(Pt){D||(Pt?Z(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(Pt){ft!==Pt&&!D&&(s.stencilMask(Pt),ft=Pt)},setFunc:function(Pt,ae,me){(rt!==Pt||st!==ae||ot!==me)&&(s.stencilFunc(Pt,ae,me),rt=Pt,st=ae,ot=me)},setOp:function(Pt,ae,me){(tt!==Pt||St!==ae||Ht!==me)&&(s.stencilOp(Pt,ae,me),tt=Pt,St=ae,Ht=me)},setLocked:function(Pt){D=Pt},setClear:function(Pt){he!==Pt&&(s.clearStencil(Pt),he=Pt)},reset:function(){D=!1,ft=null,rt=null,st=null,ot=null,tt=null,St=null,Ht=null,he=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,y=null,T=null,w=null,C=new Vt(0,0,0),I=0,M=!1,b=null,R=null,N=null,U=null,V=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=j>=2);let et=null,K={};const gt=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),at=new oe().fromArray(gt),Tt=new oe().fromArray(z);function Kt(D,ft,rt,st){const ot=new Uint8Array(4),tt=s.createTexture();s.bindTexture(D,tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<rt;St++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ft+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return tt}const Y={};Y[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(ns),Dt(!1),kt(Xc),Z(s.CULL_FACE),qt(Kn);function Z(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function nt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ut(D,ft){return u[D]!==ft?(s.bindFramebuffer(D,ft),u[D]=ft,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function lt(D,ft){let rt=f,st=!1;if(D){rt=d.get(ft),rt===void 0&&(rt=[],d.set(ft,rt));const ot=D.textures;if(rt.length!==ot.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,St=ot.length;tt<St;tt++)rt[tt]=s.COLOR_ATTACHMENT0+tt;rt.length=ot.length,st=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,st=!0);st&&s.drawBuffers(rt)}function mt(D){return x!==D?(s.useProgram(D),x=D,!0):!1}const Ot={[Mi]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[ld]:s.FUNC_REVERSE_SUBTRACT};Ot[hd]=s.MIN,Ot[ud]=s.MAX;const _t={[dd]:s.ZERO,[fd]:s.ONE,[pd]:s.SRC_COLOR,[uo]:s.SRC_ALPHA,[yd]:s.SRC_ALPHA_SATURATE,[_d]:s.DST_COLOR,[xd]:s.DST_ALPHA,[md]:s.ONE_MINUS_SRC_COLOR,[fo]:s.ONE_MINUS_SRC_ALPHA,[vd]:s.ONE_MINUS_DST_COLOR,[gd]:s.ONE_MINUS_DST_ALPHA,[Md]:s.CONSTANT_COLOR,[bd]:s.ONE_MINUS_CONSTANT_COLOR,[Sd]:s.CONSTANT_ALPHA,[Td]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(D,ft,rt,st,ot,tt,St,Ht,he,Pt){if(D===Kn){g===!0&&(nt(s.BLEND),g=!1);return}if(g===!1&&(Z(s.BLEND),g=!0),D!==od){if(D!==m||Pt!==M){if((p!==Mi||y!==Mi)&&(s.blendEquation(s.FUNC_ADD),p=Mi,y=Mi),Pt)switch(D){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case $c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $c:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",D);break}v=null,_=null,T=null,w=null,C.set(0,0,0),I=0,m=D,M=Pt}return}ot=ot||ft,tt=tt||rt,St=St||st,(ft!==p||ot!==y)&&(s.blendEquationSeparate(Ot[ft],Ot[ot]),p=ft,y=ot),(rt!==v||st!==_||tt!==T||St!==w)&&(s.blendFuncSeparate(_t[rt],_t[st],_t[tt],_t[St]),v=rt,_=st,T=tt,w=St),(Ht.equals(C)===!1||he!==I)&&(s.blendColor(Ht.r,Ht.g,Ht.b,he),C.copy(Ht),I=he),m=D,M=!1}function L(D,ft){D.side===nn?nt(s.CULL_FACE):Z(s.CULL_FACE);let rt=D.side===We;ft&&(rt=!rt),Dt(rt),D.blending===Ji&&D.transparent===!1?qt(Kn):qt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const st=D.stencilWrite;o.setTest(st),st&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function kt(D){D!==rd?(Z(s.CULL_FACE),D!==R&&(D===Xc?s.cullFace(s.BACK):D===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),R=D}function Zt(D){D!==N&&(G&&s.lineWidth(D),N=D)}function yt(D,ft,rt){D?(Z(s.POLYGON_OFFSET_FILL),(U!==ft||V!==rt)&&(s.polygonOffset(ft,rt),U=ft,V=rt)):nt(s.POLYGON_OFFSET_FILL)}function ie(D){D?Z(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function Ct(D){D===void 0&&(D=s.TEXTURE0+O-1),et!==D&&(s.activeTexture(D),et=D)}function At(D,ft,rt){rt===void 0&&(et===null?rt=s.TEXTURE0+O-1:rt=et);let st=K[rt];st===void 0&&(st={type:void 0,texture:void 0},K[rt]=st),(st.type!==D||st.texture!==ft)&&(et!==rt&&(s.activeTexture(rt),et=rt),s.bindTexture(D,ft||Y[D]),st.type=D,st.texture=ft)}function A(){const D=K[et];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Q(){try{s.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Rt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function dt(){try{s.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Lt(){try{s.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Et(){try{s.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function it(){try{s.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ct(D){at.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function Bt(D){Tt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Tt.copy(D))}function Ut(D,ft){let rt=c.get(ft);rt===void 0&&(rt=new WeakMap,c.set(ft,rt));let st=rt.get(D);st===void 0&&(st=s.getUniformBlockIndex(ft,D.name),rt.set(D,st))}function vt(D,ft){const st=c.get(ft).get(D);l.get(ft)!==st&&(s.uniformBlockBinding(ft,st,D.__bindingPointIndex),l.set(ft,st))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,K={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,y=null,T=null,w=null,C=new Vt(0,0,0),I=0,M=!1,b=null,R=null,N=null,U=null,V=null,at.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:nt,bindFramebuffer:ut,drawBuffers:lt,useProgram:mt,setBlending:qt,setMaterial:L,setFlipSided:Dt,setCullFace:kt,setLineWidth:Zt,setPolygonOffset:yt,setScissorTest:ie,activeTexture:Ct,bindTexture:At,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Et,texImage3D:it,updateUBOMapping:Ut,uniformBlockBinding:vt,texStorage2D:dt,texStorage3D:Lt,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Rt,scissor:ct,viewport:Bt,reset:Nt}}function I_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return f?new OffscreenCanvas(A,S):Zs("canvas")}function g(A,S,B){let $=1;const Q=At(A);if((Q.width>B||Q.height>B)&&($=B/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor($*Q.width),Rt=Math.floor($*Q.height);u===void 0&&(u=x(W,Rt));const dt=S?x(W,Rt):u;return dt.width=W,dt.height=Rt,dt.getContext("2d").drawImage(A,0,0,W,Rt),It("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Rt+")."),dt}else return"data"in A&&It("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,S,B,$,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),S===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),S===s.RGBA){const Rt=Q?ea:ne.getTransfer($);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=Rt===de?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(A,S){let B;return A?S===null||S===wi||S===qs?B=s.DEPTH24_STENCIL8:S===Mn?B=s.DEPTH32F_STENCIL8:S===Xs&&(B=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===qs?B=s.DEPTH_COMPONENT24:S===Mn?B=s.DEPTH_COMPONENT32F:S===Xs&&(B=s.DEPTH_COMPONENT16),B}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==Fe?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,$=d.get(B);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(A),Object.keys($).length===0&&d.delete(B)}n.remove(A)}function M(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const B=A.source,$=d.get(B);delete $[S.__cacheKey],a.memory.textures--}function b(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let $=0,Q=B.length;$<Q;$++){const W=n.get(B[$]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(A)}let R=0;function N(){R=0}function U(){const A=R;return A>=i.maxTextures&&It("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){const B=n.get(A);if(A.isVideoTexture&&ie(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const $=A.image;if($===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function G(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function j(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function H(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const et={[Ei]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},K={[Xe]:s.NEAREST,[Kh]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Fe]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},gt={[Bd]:s.NEVER,[Xd]:s.ALWAYS,[zd]:s.LESS,[su]:s.LEQUAL,[Vd]:s.EQUAL,[Wd]:s.GEQUAL,[Hd]:s.GREATER,[Gd]:s.NOTEQUAL};function z(A,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fe||S.magFilter===Xr||S.magFilter===Ls||S.magFilter===In||S.minFilter===Fe||S.minFilter===Xr||S.minFilter===Ls||S.minFilter===In)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,et[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,et[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,et[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==Ls&&S.minFilter!==In||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const $=S.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const W=V(S);if(W!==A.__cacheKey){Q[W]===void 0&&(Q[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[W].usedTimes++;const Rt=Q[A.__cacheKey];Rt!==void 0&&(Q[A.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(S)),A.__cacheKey=W,A.__webglTexture=Q[W].texture}return B}function Tt(A,S,B){return Math.floor(Math.floor(A/B)/S)}function Kt(A,S,B,$){const W=A.updateRanges;if(W.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,$,S.data);else{W.sort((it,ct)=>it.start-ct.start);let Rt=0;for(let it=1;it<W.length;it++){const ct=W[Rt],Bt=W[it],Ut=ct.start+ct.count,vt=Tt(Bt.start,S.width,4),Nt=Tt(ct.start,S.width,4);Bt.start<=Ut+1&&vt===Nt&&Tt(Bt.start+Bt.count-1,S.width,4)===vt?ct.count=Math.max(ct.count,Bt.start+Bt.count-ct.start):(++Rt,W[Rt]=Bt)}W.length=Rt+1;const dt=s.getParameter(s.UNPACK_ROW_LENGTH),Lt=s.getParameter(s.UNPACK_SKIP_PIXELS),Et=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let it=0,ct=W.length;it<ct;it++){const Bt=W[it],Ut=Math.floor(Bt.start/4),vt=Math.ceil(Bt.count/4),Nt=Ut%S.width,D=Math.floor(Ut/S.width),ft=vt,rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Nt),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Nt,D,ft,rt,B,$,S.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Et)}}function Y(A,S,B){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const Q=at(A,S),W=S.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+B);const Rt=n.get(W);if(W.version!==Rt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);const dt=ne.getPrimaries(ne.workingColorSpace),Lt=S.colorSpace===hi?null:ne.getPrimaries(S.colorSpace),Et=S.colorSpace===hi||dt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let it=g(S.image,!1,i.maxTextureSize);it=Ct(S,it);const ct=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let Ut=_(S.internalFormat,ct,Bt,S.colorSpace,S.isVideoTexture);z($,S);let vt;const Nt=S.mipmaps,D=S.isVideoTexture!==!0,ft=Rt.__version===void 0||Q===!0,rt=W.dataReady,st=T(S,it);if(S.isDepthTexture)Ut=y(S.format===js,S.type),ft&&(D?e.texStorage2D(s.TEXTURE_2D,1,Ut,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ut,it.width,it.height,0,ct,Bt,null));else if(S.isDataTexture)if(Nt.length>0){D&&ft&&e.texStorage2D(s.TEXTURE_2D,st,Ut,Nt[0].width,Nt[0].height);for(let ot=0,tt=Nt.length;ot<tt;ot++)vt=Nt[ot],D?rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,vt.width,vt.height,ct,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,ct,Bt,vt.data);S.generateMipmaps=!1}else D?(ft&&e.texStorage2D(s.TEXTURE_2D,st,Ut,it.width,it.height),rt&&Kt(S,it,ct,Bt)):e.texImage2D(s.TEXTURE_2D,0,Ut,it.width,it.height,0,ct,Bt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Ut,Nt[0].width,Nt[0].height,it.depth);for(let ot=0,tt=Nt.length;ot<tt;ot++)if(vt=Nt[ot],S.format!==sn)if(ct!==null)if(D){if(rt)if(S.layerUpdates.size>0){const St=Xl(vt.width,vt.height,S.format,S.type);for(const Ht of S.layerUpdates){const he=vt.data.subarray(Ht*St/vt.data.BYTES_PER_ELEMENT,(Ht+1)*St/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Ht,vt.width,vt.height,1,ct,he)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,ct,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Ut,vt.width,vt.height,it.depth,0,vt.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,ct,Bt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,Ut,vt.width,vt.height,it.depth,0,ct,Bt,vt.data)}else{D&&ft&&e.texStorage2D(s.TEXTURE_2D,st,Ut,Nt[0].width,Nt[0].height);for(let ot=0,tt=Nt.length;ot<tt;ot++)vt=Nt[ot],S.format!==sn?ct!==null?D?rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,vt.width,vt.height,ct,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,vt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,vt.width,vt.height,ct,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,ot,Ut,vt.width,vt.height,0,ct,Bt,vt.data)}else if(S.isDataArrayTexture)if(D){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Ut,it.width,it.height,it.depth),rt)if(S.layerUpdates.size>0){const ot=Xl(it.width,it.height,S.format,S.type);for(const tt of S.layerUpdates){const St=it.data.subarray(tt*ot/it.data.BYTES_PER_ELEMENT,(tt+1)*ot/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,ct,Bt,St)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ct,Bt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,it.width,it.height,it.depth,0,ct,Bt,it.data);else if(S.isData3DTexture)D?(ft&&e.texStorage3D(s.TEXTURE_3D,st,Ut,it.width,it.height,it.depth),rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ct,Bt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,it.width,it.height,it.depth,0,ct,Bt,it.data);else if(S.isFramebufferTexture){if(ft)if(D)e.texStorage2D(s.TEXTURE_2D,st,Ut,it.width,it.height);else{let ot=it.width,tt=it.height;for(let St=0;St<st;St++)e.texImage2D(s.TEXTURE_2D,St,Ut,ot,tt,0,ct,Bt,null),ot>>=1,tt>>=1}}else if(Nt.length>0){if(D&&ft){const ot=At(Nt[0]);e.texStorage2D(s.TEXTURE_2D,st,Ut,ot.width,ot.height)}for(let ot=0,tt=Nt.length;ot<tt;ot++)vt=Nt[ot],D?rt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,ct,Bt,vt):e.texImage2D(s.TEXTURE_2D,ot,Ut,ct,Bt,vt);S.generateMipmaps=!1}else if(D){if(ft){const ot=At(it);e.texStorage2D(s.TEXTURE_2D,st,Ut,ot.width,ot.height)}rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Bt,it)}else e.texImage2D(s.TEXTURE_2D,0,Ut,ct,Bt,it);m(S)&&p($),Rt.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,B){if(S.image.length!==6)return;const $=at(A,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const W=n.get(Q);if(Q.version!==W.__version||$===!0){e.activeTexture(s.TEXTURE0+B);const Rt=ne.getPrimaries(ne.workingColorSpace),dt=S.colorSpace===hi?null:ne.getPrimaries(S.colorSpace),Lt=S.colorSpace===hi||Rt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Et=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!Et&&!it?ct[tt]=g(S.image[tt],!0,i.maxCubemapSize):ct[tt]=it?S.image[tt].image:S.image[tt],ct[tt]=Ct(S,ct[tt]);const Bt=ct[0],Ut=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),Nt=_(S.internalFormat,Ut,vt,S.colorSpace),D=S.isVideoTexture!==!0,ft=W.__version===void 0||$===!0,rt=Q.dataReady;let st=T(S,Bt);z(s.TEXTURE_CUBE_MAP,S);let ot;if(Et){D&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Nt,Bt.width,Bt.height);for(let tt=0;tt<6;tt++){ot=ct[tt].mipmaps;for(let St=0;St<ot.length;St++){const Ht=ot[St];S.format!==sn?Ut!==null?D?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Ht.width,Ht.height,Ut,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Nt,Ht.width,Ht.height,0,Ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,Ht.width,Ht.height,Ut,vt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Nt,Ht.width,Ht.height,0,Ut,vt,Ht.data)}}}else{if(ot=S.mipmaps,D&&ft){ot.length>0&&st++;const tt=At(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Nt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){D?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,Ut,vt,ct[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,ct[tt].width,ct[tt].height,0,Ut,vt,ct[tt].data);for(let St=0;St<ot.length;St++){const he=ot[St].image[tt].image;D?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,he.width,he.height,Ut,vt,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Nt,he.width,he.height,0,Ut,vt,he.data)}}else{D?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,vt,ct[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,Ut,vt,ct[tt]);for(let St=0;St<ot.length;St++){const Ht=ot[St];D?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Ut,vt,Ht.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Nt,Ut,vt,Ht.image[tt])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),W.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function nt(A,S,B,$,Q,W){const Rt=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),Lt=_(B.internalFormat,Rt,dt,B.colorSpace),Et=n.get(S),it=n.get(B);if(it.__renderTarget=S,!Et.__hasExternalTextures){const ct=Math.max(1,S.width>>W),Bt=Math.max(1,S.height>>W);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,Lt,ct,Bt,S.depth,0,Rt,dt,null):e.texImage2D(Q,W,Lt,ct,Bt,0,Rt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,it.__webglTexture,0,Zt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,it.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,W=y(S.stencilBuffer,Q),Rt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Zt(S);yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,W,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,W,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,W,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,A)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const W=$[Q],Rt=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),Lt=_(W.internalFormat,Rt,dt,W.colorSpace),Et=Zt(S);B&&yt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,Lt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,Lt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Lt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const Q=$.__webglTexture,W=Zt(S);if(S.depthTexture.format===$s)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===js)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function mt(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=A.texture.mipmaps;$&&$.length>0?lt(S.__webglFramebuffer[0],A):lt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),ut(S.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,W)}}else{const $=A.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ut(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(A,S,B){const $=n.get(A);S!==void 0&&nt($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&mt(A)}function _t(A){const S=A.texture,B=n.get(A),$=n.get(S);A.addEventListener("dispose",C);const Q=A.textures,W=A.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)B.__webglFramebuffer[dt][Lt]=s.createFramebuffer()}else B.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[dt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let dt=0,Lt=Q.length;dt<Lt;dt++){const Et=n.get(Q[dt]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&yt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const Lt=Q[dt];B.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Et=r.convert(Lt.format,Lt.colorSpace),it=r.convert(Lt.type),ct=_(Lt.internalFormat,Et,it,Lt.colorSpace,A.isXRRenderTarget===!0),Bt=Zt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,ct,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),z(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)nt(B.__webglFramebuffer[dt][Lt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Lt);else nt(B.__webglFramebuffer[dt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,Lt=Q.length;dt<Lt;dt++){const Et=Q[dt],it=n.get(Et);let ct=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,it.__webglTexture),z(ct,Et),nt(B.__webglFramebuffer,A,Et,s.COLOR_ATTACHMENT0+dt,ct,0),m(Et)&&p(ct)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),z(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)nt(B.__webglFramebuffer[Lt],A,S,s.COLOR_ATTACHMENT0,dt,Lt);else nt(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,dt,0);m(S)&&p(dt),e.unbindTexture()}A.depthBuffer&&mt(A)}function qt(A){const S=A.textures;for(let B=0,$=S.length;B<$;B++){const Q=S[B];if(m(Q)){const W=v(A),Rt=n.get(Q).__webglTexture;e.bindTexture(W,Rt),p(W),e.unbindTexture()}}}const L=[],Dt=[];function kt(A){if(A.samples>0){if(yt(A)===!1){const S=A.textures,B=A.width,$=A.height;let Q=s.COLOR_BUFFER_BIT;const W=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(A),dt=S.length>1;if(dt)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Lt=A.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Et]);const it=n.get(S[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,Q,s.NEAREST),l===!0&&(L.length=0,Dt.length=0,L.push(s.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(W),Dt.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Et]);const it=n.get(S[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,it,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Zt(A){return Math.min(i.maxSamples,A.samples)}function yt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ie(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ct(A,S){const B=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==$e&&B!==hi&&(ne.getTransfer(B)===de?($!==sn||Q!==Un)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",B)),S}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=yt}function D_(s,t){function e(n,i=hi){let r;const a=ne.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return s.BYTE;if(n===Jh)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===fc)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===eu)return s.ALPHA;if(n===nu)return s.RGB;if(n===sn)return s.RGBA;if(n===$s)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===xc)return s.RED;if(n===gc)return s.RED_INTEGER;if(n===_c)return s.RG;if(n===vc)return s.RG_INTEGER;if(n===yc)return s.RGBA_INTEGER;if(n===qr||n===$r||n===jr||n===Yr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===To||n===Eo||n===wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ao||n===Ro)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Vo||n===Ho||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===jo||n===Yo||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Pi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new F_,p={},v=e.getContextAttributes();let _=null,y=null;const T=[],w=[],C=new pt;let I=null;const M=new Ge;M.viewport=new oe;const b=new Ge;b.viewport=new oe;const R=[M,b],N=new qp;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Oa,T[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Oa,T[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Oa,T[Y]=Z),Z.getHandSpace()};function O(Y){const Z=w.indexOf(Y.inputSource);if(Z===-1)return;const nt=T[Z];nt!==void 0&&(nt.update(Y.inputSource,Y.frame,c||a),nt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<T.length;Y++){const Z=w[Y];Z!==null&&(w[Y]=null,T[Y].disconnect(Z))}U=null,V=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(_),f=null,d=null,u=null,i=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ut=null,lt=null;v.depth&&(lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=v.stencil?js:$s,ut=v.stencil?qs:wi);const mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ai(d.textureWidth,d.textureHeight,{format:sn,type:Un,depthTexture:new _u(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ai(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let Z=0;Z<Y.removed.length;Z++){const nt=Y.removed[Z],ut=w.indexOf(nt);ut>=0&&(w[ut]=null,T[ut].disconnect(nt))}for(let Z=0;Z<Y.added.length;Z++){const nt=Y.added[Z];let ut=w.indexOf(nt);if(ut===-1){for(let mt=0;mt<T.length;mt++)if(mt>=w.length){w.push(nt),ut=mt;break}else if(w[mt]===null){w[mt]=nt,ut=mt;break}if(ut===-1)break}const lt=T[ut];lt&&lt.connect(nt)}}const H=new P,et=new P;function K(Y,Z,nt){H.setFromMatrixPosition(Z.matrixWorld),et.setFromMatrixPosition(nt.matrixWorld);const ut=H.distanceTo(et),lt=Z.projectionMatrix.elements,mt=nt.projectionMatrix.elements,Ot=lt[14]/(lt[10]-1),_t=lt[14]/(lt[10]+1),qt=(lt[9]+1)/lt[5],L=(lt[9]-1)/lt[5],Dt=(lt[8]-1)/lt[0],kt=(mt[8]+1)/mt[0],Zt=Ot*Dt,yt=Ot*kt,ie=ut/(-Dt+kt),Ct=ie*-Dt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ct),Y.translateZ(ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),lt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const At=Ot+ie,A=_t+ie,S=Zt-Ct,B=yt+(ut-Ct),$=qt*_t/A*At,Q=L*_t/A*At;Y.projectionMatrix.makePerspective(S,B,$,Q,At,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function gt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,nt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),N.near=b.near=M.near=Z,N.far=b.far=M.far=nt,(U!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,V=N.far),N.layers.mask=Y.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const ut=Y.parent,lt=N.cameras;gt(N,ut);for(let mt=0;mt<lt.length;mt++)gt(lt[mt],ut);lt.length===2?K(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),z(Y,N,ut)};function z(Y,Z,nt){nt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(nt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let at=null;function Tt(Y,Z){if(h=Z.getViewerPose(c||a),x=Z,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ut=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,ut=!0);for(let _t=0;_t<nt.length;_t++){const qt=nt[_t];let L=null;if(f!==null)L=f.getViewport(qt);else{const kt=u.getViewSubImage(d,qt);L=kt.viewport,_t===0&&(t.setRenderTargetTextures(y,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(y))}let Dt=R[_t];Dt===void 0&&(Dt=new Ge,Dt.layers.enable(_t),Dt.viewport=new oe,R[_t]=Dt),Dt.matrix.fromArray(qt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(qt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(L.x,L.y,L.width,L.height),_t===0&&(N.matrix.copy(Dt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ut===!0&&N.cameras.push(Dt)}const lt=i.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const _t=u.getDepthInformation(nt[0]);_t&&_t.isValid&&_t.texture&&m.init(_t,i.renderState)}if(lt&&lt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let _t=0;_t<nt.length;_t++){const qt=nt[_t].camera;if(qt){let L=p[qt];L||(L=new vu,p[qt]=L);const Dt=u.getCameraImage(qt);L.sourceTexture=Dt}}}}for(let nt=0;nt<T.length;nt++){const ut=w[nt],lt=T[nt];ut!==null&&lt!==void 0&&lt.update(ut,Z,c||a)}at&&at(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Kt=new Uu;Kt.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){at=Y},this.dispose=function(){}}}const vi=new dn,k_=new $t;function B_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(vi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=i[v.id];y===void 0&&(x(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const T=_.program;n.updateUBOMapping(v,T);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){const _=u();v.__bindingPointIndex=_;const y=s.createBuffer(),T=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,b=I.length;M<b;M++){const R=I[M];if(f(R,w,M,T)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let O=0;O<U.length;O++){const G=U[O],j=g(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,N+V,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,T){const w=v.value,C=_+"_"+y;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const I=T[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function x(v){const _=v.uniforms;let y=0;const T=16;for(let C=0,I=_.length;C<I;C++){const M=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,R=M.length;b<R;b++){const N=M[b],U=Array.isArray(N.value)?N.value:[N.value];for(let V=0,O=U.length;V<O;V++){const G=U[V],j=g(G),H=y%T,et=H%j.boundary,K=H+et;y+=et,K!==0&&T-K<j.storage&&(y+=T-K),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=j.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):It("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const V_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Xn=null;function H_(){return Xn===null&&(Xn=new ha(V_,32,32,_c,us),Xn.minFilter=Fe,Xn.magFilter=Fe,Xn.wrapS=Ln,Xn.wrapT=Ln,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class G_{constructor(t={}){const{canvas:e=qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Set([yc,vc,gc]),g=new Set([Un,wi,Xs,qs,pc,mc]),m=new Uint32Array(4),p=new Int32Array(4);let v=null,_=null;const y=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=Le;let I=0,M=0,b=null,R=-1,N=null;const U=new oe,V=new oe;let O=null;const G=new Vt(0);let j=0,H=e.width,et=e.height,K=1,gt=null,z=null;const at=new oe(0,0,H,et),Tt=new oe(0,0,H,et);let Kt=!1;const Y=new Ac;let Z=!1,nt=!1;const ut=new $t,lt=new P,mt=new oe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function qt(){return b===null?K:1}let L=n;function Dt(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),L===null){const F="webgl2";if(L=Dt(F,E),L===null)throw Dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let kt,Zt,yt,ie,Ct,At,A,S,B,$,Q,W,Rt,dt,Lt,Et,it,ct,Bt,Ut,vt,Nt,D,ft;function rt(){kt=new Zx(L),kt.init(),Nt=new D_(L,kt),Zt=new Hx(L,kt,t,Nt),yt=new L_(L,kt),Zt.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),ie=new tg(L),Ct=new __,At=new I_(L,kt,yt,Ct,Zt,Nt,ie),A=new Wx(w),S=new Kx(w),B=new sm(L),D=new zx(L,B),$=new Jx(L,B,ie,D),Q=new ng(L,$,B,ie),Bt=new eg(L,Zt,At),Et=new Gx(Ct),W=new g_(w,A,S,kt,Zt,D,Et),Rt=new B_(w,Ct),dt=new y_,Lt=new w_(kt),ct=new Bx(w,A,S,yt,Q,f,l),it=new C_(w,Q,Zt),ft=new z_(L,ie,Zt,yt),Ut=new Vx(L,kt,ie),vt=new Qx(L,kt,ie),ie.programs=W.programs,w.capabilities=Zt,w.extensions=kt,w.properties=Ct,w.renderLists=dt,w.shadowMap=it,w.state=yt,w.info=ie}rt();const st=new O_(w,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(H,et,!1))},this.getSize=function(E){return E.set(H,et)},this.setSize=function(E,F,X=!0){if(st.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,et=F,e.width=Math.floor(E*K),e.height=Math.floor(F*K),X===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*K,et*K).floor()},this.setDrawingBufferSize=function(E,F,X){H=E,et=F,K=X,e.width=Math.floor(E*X),e.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(at)},this.setViewport=function(E,F,X,q){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,F,X,q),yt.viewport(U.copy(at).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,F,X,q){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,F,X,q),yt.scissor(V.copy(Tt).multiplyScalar(K).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){yt.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){gt=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let q=0;if(E){let k=!1;if(b!==null){const ht=b.texture.format;k=x.has(ht)}if(k){const ht=b.texture.type,Mt=g.has(ht),wt=ct.getClearColor(),bt=ct.getClearAlpha(),Gt=wt.r,Wt=wt.g,Ft=wt.b;Mt?(m[0]=Gt,m[1]=Wt,m[2]=Ft,m[3]=bt,L.clearBufferuiv(L.COLOR,0,m)):(p[0]=Gt,p[1]=Wt,p[2]=Ft,p[3]=bt,L.clearBufferiv(L.COLOR,0,p))}else q|=L.COLOR_BUFFER_BIT}F&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ct.dispose(),dt.dispose(),Lt.dispose(),Ct.dispose(),A.dispose(),S.dispose(),Q.dispose(),D.dispose(),ft.dispose(),W.dispose(),st.dispose(),st.removeEventListener("sessionstart",ke),st.removeEventListener("sessionend",De),Ce.stop()};function ot(E){E.preventDefault(),ia("WebGLRenderer: Context Lost."),C=!0}function tt(){ia("WebGLRenderer: Context Restored."),C=!1;const E=ie.autoReset,F=it.enabled,X=it.autoUpdate,q=it.needsUpdate,k=it.type;rt(),ie.autoReset=E,it.enabled=F,it.autoUpdate=X,it.needsUpdate=q,it.type=k}function St(E){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const F=E.target;F.removeEventListener("dispose",Ht),he(F)}function he(E){Pt(E),Ct.remove(E)}function Pt(E){const F=Ct.get(E).programs;F!==void 0&&(F.forEach(function(X){W.releaseProgram(X)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,q,k,ht){F===null&&(F=Ot);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,wt=Qu(E,F,X,q,k);yt.setMaterial(q,Mt);let bt=X.index,Gt=1;if(q.wireframe===!0){if(bt=$.getWireframeAttribute(X),bt===void 0)return;Gt=2}const Wt=X.drawRange,Ft=X.attributes.position;let te=Wt.start*Gt,ue=(Wt.start+Wt.count)*Gt;ht!==null&&(te=Math.max(te,ht.start*Gt),ue=Math.min(ue,(ht.start+ht.count)*Gt)),bt!==null?(te=Math.max(te,0),ue=Math.min(ue,bt.count)):Ft!=null&&(te=Math.max(te,0),ue=Math.min(ue,Ft.count));const be=ue-te;if(be<0||be===1/0)return;D.setup(k,q,wt,X,bt);let Se,xe=Ut;if(bt!==null&&(Se=B.get(bt),xe=vt,xe.setIndex(Se)),k.isMesh)q.wireframe===!0?(yt.setLineWidth(q.wireframeLinewidth*qt()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(k.isLine){let zt=q.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*qt()),k.isLineSegments?xe.setMode(L.LINES):k.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else k.isPoints?xe.setMode(L.POINTS):k.isSprite&&xe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,ve=k._multiDrawCounts,se=k._multiDrawCount,Je=bt?B.get(bt).bytesPerElement:1,Li=Ct.get(q).currentProgram.getUniforms();for(let Qe=0;Qe<se;Qe++)Li.setValue(L,"_gl_DrawID",Qe),xe.render(zt[Qe]/Je,ve[Qe])}else if(k.isInstancedMesh)xe.renderInstances(te,be,k.count);else if(X.isInstancedBufferGeometry){const zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,zt);xe.renderInstances(te,be,ve)}else xe.render(te,be)};function ae(E,F,X){E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,cr(E,F,X),E.side=Jn,E.needsUpdate=!0,cr(E,F,X),E.side=nn):cr(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),_=Lt.get(X),_.init(F),T.push(_),X.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const q=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const wt=ht[Mt];ae(wt,X,k),q.add(wt)}else ae(ht,X,k),q.add(ht)}),_=T.pop(),q},this.compileAsync=function(E,F,X=null){const q=this.compile(E,F,X);return new Promise(k=>{function ht(){if(q.forEach(function(Mt){Ct.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){k(E);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let me=null;function Oe(E){me&&me(E)}function ke(){Ce.stop()}function De(){Ce.start()}const Ce=new Uu;Ce.setAnimationLoop(Oe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){me=E,st.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},st.addEventListener("sessionstart",ke),st.addEventListener("sessionend",De),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(F),F=st.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,F,b),_=Lt.get(E,T.length),_.init(F),T.push(_),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(ut,Dn,F.reversedDepth),nt=this.localClippingEnabled,Z=Et.init(this.clippingPlanes,nt),v=dt.get(E,y.length),v.init(),y.push(v),st.enabled===!0&&st.isPresenting===!0){const ht=w.xr.getDepthSensingMesh();ht!==null&&rn(ht,F,-1/0,w.sortObjects)}rn(E,F,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(gt,z),_t=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,_t&&ct.addToRenderList(v,E),this.info.render.frame++,Z===!0&&Et.beginShadows();const X=_.state.shadowsArray;it.render(X,E,F),Z===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,k=v.transmissive;if(_.setupLights(),F.isArrayCamera){const ht=F.cameras;if(k.length>0)for(let Mt=0,wt=ht.length;Mt<wt;Mt++){const bt=ht[Mt];pn(q,k,E,bt)}_t&&ct.render(E);for(let Mt=0,wt=ht.length;Mt<wt;Mt++){const bt=ht[Mt];fn(v,E,bt,bt.viewport)}}else k.length>0&&pn(q,k,E,F),_t&&ct.render(E),fn(v,E,F);b!==null&&M===0&&(At.updateMultisampleRenderTarget(b),At.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(w,E,F),D.resetDefaultState(),R=-1,N=null,T.pop(),T.length>0?(_=T[T.length-1],Z===!0&&Et.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function rn(E,F,X,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){q&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const Mt=Q.update(E),wt=E.material;wt.visible&&v.push(E,Mt,wt,X,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const Mt=Q.update(E),wt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),mt.copy(Mt.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){const bt=Mt.groups;for(let Gt=0,Wt=bt.length;Gt<Wt;Gt++){const Ft=bt[Gt],te=wt[Ft.materialIndex];te&&te.visible&&v.push(E,Mt,te,X,mt.z,Ft)}}else wt.visible&&v.push(E,Mt,wt,X,mt.z,null)}}const ht=E.children;for(let Mt=0,wt=ht.length;Mt<wt;Mt++)rn(ht[Mt],F,X,q)}function fn(E,F,X,q){const{opaque:k,transmissive:ht,transparent:Mt}=E;_.setupLightsView(X),Z===!0&&Et.setGlobalState(w.clippingPlanes,X),q&&yt.viewport(U.copy(q)),k.length>0&&kn(k,F,X),ht.length>0&&kn(ht,F,X),Mt.length>0&&kn(Mt,F,X),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function pn(E,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new Ai(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?us:Un,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ht=_.state.transmissionRenderTarget[q.id],Mt=q.viewport||U;ht.setSize(Mt.z*w.transmissionResolutionScale,Mt.w*w.transmissionResolutionScale);const wt=w.getRenderTarget(),bt=w.getActiveCubeFace(),Gt=w.getActiveMipmapLevel();w.setRenderTarget(ht),w.getClearColor(G),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear(),_t&&ct.render(X);const Wt=w.toneMapping;w.toneMapping=di;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),Z===!0&&Et.setGlobalState(w.clippingPlanes,q),kn(E,X,q),At.updateMultisampleRenderTarget(ht),At.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ue=0,be=F.length;ue<be;ue++){const Se=F[ue],{object:xe,geometry:zt,material:ve,group:se}=Se;if(ve.side===nn&&xe.layers.test(q.layers)){const Je=ve.side;ve.side=We,ve.needsUpdate=!0,Hc(xe,X,q,zt,ve,se),ve.side=Je,ve.needsUpdate=!0,te=!0}}te===!0&&(At.updateMultisampleRenderTarget(ht),At.updateRenderTargetMipmap(ht))}w.setRenderTarget(wt,bt,Gt),w.setClearColor(G,j),Ft!==void 0&&(q.viewport=Ft),w.toneMapping=Wt}function kn(E,F,X){const q=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ht=E.length;k<ht;k++){const Mt=E[k],{object:wt,geometry:bt,group:Gt}=Mt;let Wt=Mt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),wt.layers.test(X.layers)&&Hc(wt,F,X,bt,Wt,Gt)}}function Hc(E,F,X,q,k,ht){E.onBeforeRender(w,F,X,q,k,ht),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(w,F,X,q,E,ht),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,w.renderBufferDirect(X,F,q,k,E,ht),k.side=Jn,k.needsUpdate=!0,w.renderBufferDirect(X,F,q,k,E,ht),k.side=nn):w.renderBufferDirect(X,F,q,k,E,ht),E.onAfterRender(w,F,X,q,k,ht)}function cr(E,F,X){F.isScene!==!0&&(F=Ot);const q=Ct.get(E),k=_.state.lights,ht=_.state.shadowsArray,Mt=k.state.version,wt=W.getParameters(E,k.state,ht,F,X),bt=W.getProgramCacheKey(wt);let Gt=q.programs;q.environment=E.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(E.isMeshStandardMaterial?S:A).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Ht),Gt=new Map,q.programs=Gt);let Wt=Gt.get(bt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===Mt)return Wc(E,wt),Wt}else wt.uniforms=W.getUniforms(E),E.onBeforeCompile(wt,w),Wt=W.acquireProgram(wt,bt),Gt.set(bt,Wt),q.uniforms=wt.uniforms;const Ft=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=Et.uniform),Wc(E,wt),q.needsLights=ed(E),q.lightsStateVersion=Mt,q.needsLights&&(Ft.ambientLightColor.value=k.state.ambient,Ft.lightProbe.value=k.state.probe,Ft.directionalLights.value=k.state.directional,Ft.directionalLightShadows.value=k.state.directionalShadow,Ft.spotLights.value=k.state.spot,Ft.spotLightShadows.value=k.state.spotShadow,Ft.rectAreaLights.value=k.state.rectArea,Ft.ltc_1.value=k.state.rectAreaLTC1,Ft.ltc_2.value=k.state.rectAreaLTC2,Ft.pointLights.value=k.state.point,Ft.pointLightShadows.value=k.state.pointShadow,Ft.hemisphereLights.value=k.state.hemi,Ft.directionalShadowMap.value=k.state.directionalShadowMap,Ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ft.spotShadowMap.value=k.state.spotShadowMap,Ft.spotLightMatrix.value=k.state.spotLightMatrix,Ft.spotLightMap.value=k.state.spotLightMap,Ft.pointShadowMap.value=k.state.pointShadowMap,Ft.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function Gc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Kr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Wc(E,F){const X=Ct.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Qu(E,F,X,q,k){F.isScene!==!0&&(F=Ot),At.resetTextureUnits();const ht=F.fog,Mt=q.isMeshStandardMaterial?F.environment:null,wt=b===null?w.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$e,bt=(q.isMeshStandardMaterial?S:A).get(q.envMap||Mt),Gt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ft=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color;let be=di;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(be=w.toneMapping);const Se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Se!==void 0?Se.length:0,zt=Ct.get(q),ve=_.state.lights;if(Z===!0&&(nt===!0||E!==N)){const Be=E===N&&q.id===R;Et.setState(q,E,Be)}let se=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ve.state.version||zt.outputColorSpace!==wt||k.isBatchedMesh&&zt.batching===!1||!k.isBatchedMesh&&zt.batching===!0||k.isBatchedMesh&&zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||k.isInstancedMesh&&zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&zt.instancingMorph===!1&&k.morphTexture!==null||zt.envMap!==bt||q.fog===!0&&zt.fog!==ht||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Et.numPlanes||zt.numIntersection!==Et.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Wt||zt.morphTargets!==Ft||zt.morphNormals!==te||zt.morphColors!==ue||zt.toneMapping!==be||zt.morphTargetsCount!==xe)&&(se=!0):(se=!0,zt.__version=q.version);let Je=zt.currentProgram;se===!0&&(Je=cr(q,F,k));let Li=!1,Qe=!1,gs=!1;const ye=Je.getUniforms(),je=zt.uniforms;if(yt.useProgram(Je.program)&&(Li=!0,Qe=!0,gs=!0),q.id!==R&&(R=q.id,Qe=!0),Li||N!==E){yt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ye.setValue(L,"projectionMatrix",E.projectionMatrix),ye.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ye=ye.map.cameraPosition;Ye!==void 0&&Ye.setValue(L,lt.setFromMatrixPosition(E.matrixWorld)),Zt.logarithmicDepthBuffer&&ye.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),N!==E&&(N=E,Qe=!0,gs=!0)}if(k.isSkinnedMesh){ye.setOptional(L,k,"bindMatrix"),ye.setOptional(L,k,"bindMatrixInverse");const Be=k.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ye.setValue(L,"boneTexture",Be.boneTexture,At))}k.isBatchedMesh&&(ye.setOptional(L,k,"batchingTexture"),ye.setValue(L,"batchingTexture",k._matricesTexture,At),ye.setOptional(L,k,"batchingIdTexture"),ye.setValue(L,"batchingIdTexture",k._indirectTexture,At),ye.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ye.setValue(L,"batchingColorTexture",k._colorsTexture,At));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Bt.update(k,X,Je),(Qe||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,ye.setValue(L,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(je.envMap.value=bt,je.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(je.envMapIntensity.value=F.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=H_()),Qe&&(ye.setValue(L,"toneMappingExposure",w.toneMappingExposure),zt.needsLights&&td(je,gs),ht&&q.fog===!0&&Rt.refreshFogUniforms(je,ht),Rt.refreshMaterialUniforms(je,q,K,et,_.state.transmissionRenderTarget[E.id]),Kr.upload(L,Gc(zt),je,At)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Kr.upload(L,Gc(zt),je,At),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(L,"center",k.center),ye.setValue(L,"modelViewMatrix",k.modelViewMatrix),ye.setValue(L,"normalMatrix",k.normalMatrix),ye.setValue(L,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Be=q.uniformsGroups;for(let Ye=0,ma=Be.length;Ye<ma;Ye++){const fi=Be[Ye];ft.update(fi,Je),ft.bind(fi,Je)}}return Je}function td(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ed(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,F,X){const q=Ct.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ct.get(E.texture).__webglTexture=F,Ct.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=Ct.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const nd=L.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){b=E,I=F,M=X;let q=!0,k=null,ht=!1,Mt=!1;if(E){const bt=Ct.get(E);if(bt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)At.setupRenderTarget(E);else if(bt.__hasExternalTextures)At.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(bt.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");At.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const Wt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?k=Wt[F][X]:k=Wt[F],ht=!0):E.samples>0&&At.useMultisampledRTT(E)===!1?k=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[X]:k=Wt,U.copy(E.viewport),V.copy(E.scissor),O=E.scissorTest}else U.copy(at).multiplyScalar(K).floor(),V.copy(Tt).multiplyScalar(K).floor(),O=Kt;if(X!==0&&(k=nd),yt.bindFramebuffer(L.FRAMEBUFFER,k)&&q&&yt.drawBuffers(E,k),yt.viewport(U),yt.scissor(V),yt.setScissorTest(O),ht){const bt=Ct.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,X)}else if(Mt){const bt=F;for(let Gt=0;Gt<E.textures.length;Gt++){const Wt=Ct.get(E.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,X,bt)}}else if(E!==null&&X!==0){const bt=Ct.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,X)}R=-1},this.readRenderTargetPixels=function(E,F,X,q,k,ht,Mt,wt=0){if(!(E&&E.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){yt.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Gt=E.textures[wt],Wt=Gt.format,Ft=Gt.type;if(!Zt.textureFormatReadable(Wt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Ft)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&X>=0&&X<=E.height-k&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(F,X,q,k,Nt.convert(Wt),Nt.convert(Ft),ht))}finally{const Gt=b!==null?Ct.get(b).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,q,k,ht,Mt,wt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt)if(F>=0&&F<=E.width-q&&X>=0&&X<=E.height-k){yt.bindFramebuffer(L.FRAMEBUFFER,bt);const Gt=E.textures[wt],Wt=Gt.format,Ft=Gt.type;if(!Zt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(F,X,q,k,Nt.convert(Wt),Nt.convert(Ft),0);const ue=b!==null?Ct.get(b).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ue);const be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $d(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(te),L.deleteSync(be),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const q=Math.pow(2,-X),k=Math.floor(E.image.width*q),ht=Math.floor(E.image.height*q),Mt=F!==null?F.x:0,wt=F!==null?F.y:0;At.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Mt,wt,k,ht),yt.unbindTexture()};const id=L.createFramebuffer(),sd=L.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,q=null,k=0,ht=null){ht===null&&(k!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=k,k=0):ht=0);let Mt,wt,bt,Gt,Wt,Ft,te,ue,be;const Se=E.isCompressedTexture?E.mipmaps[ht]:E.image;if(X!==null)Mt=X.max.x-X.min.x,wt=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Gt=X.min.x,Wt=X.min.y,Ft=X.isBox3?X.min.z:0;else{const an=Math.pow(2,-k);Mt=Math.floor(Se.width*an),wt=Math.floor(Se.height*an),E.isDataArrayTexture?bt=Se.depth:E.isData3DTexture?bt=Math.floor(Se.depth*an):bt=1,Gt=0,Wt=0,Ft=0}q!==null?(te=q.x,ue=q.y,be=q.z):(te=0,ue=0,be=0);const xe=Nt.convert(F.format),zt=Nt.convert(F.type);let ve;F.isData3DTexture?(At.setTexture3D(F,0),ve=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(At.setTexture2DArray(F,0),ve=L.TEXTURE_2D_ARRAY):(At.setTexture2D(F,0),ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const se=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=L.getParameter(L.UNPACK_SKIP_PIXELS),Qe=L.getParameter(L.UNPACK_SKIP_ROWS),gs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const ye=E.isDataArrayTexture||E.isData3DTexture,je=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const an=Ct.get(E),Be=Ct.get(F),Ye=Ct.get(an.__renderTarget),ma=Ct.get(Be.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Ye.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let fi=0;fi<bt;fi++)ye&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,k,Ft+fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,ht,be+fi)),L.blitFramebuffer(Gt,Wt,Mt,wt,te,ue,Mt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||Ct.has(E)){const an=Ct.get(E),Be=Ct.get(F);yt.bindFramebuffer(L.READ_FRAMEBUFFER,id),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,sd);for(let Ye=0;Ye<bt;Ye++)ye?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,k,Ft+Ye):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,k),je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,ht,be+Ye):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,ht),k!==0?L.blitFramebuffer(Gt,Wt,Mt,wt,te,ue,Mt,wt,L.COLOR_BUFFER_BIT,L.NEAREST):je?L.copyTexSubImage3D(ve,ht,te,ue,be+Ye,Gt,Wt,Mt,wt):L.copyTexSubImage2D(ve,ht,te,ue,Gt,Wt,Mt,wt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else je?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(ve,ht,te,ue,be,Mt,wt,bt,xe,zt,Se.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,ht,te,ue,be,Mt,wt,bt,xe,Se.data):L.texSubImage3D(ve,ht,te,ue,be,Mt,wt,bt,xe,zt,Se):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,te,ue,Mt,wt,xe,zt,Se.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,te,ue,Se.width,Se.height,xe,Se.data):L.texSubImage2D(L.TEXTURE_2D,ht,te,ue,Mt,wt,xe,zt,Se);L.pixelStorei(L.UNPACK_ROW_LENGTH,se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gs),ht===0&&F.generateMipmaps&&L.generateMipmap(ve),yt.unbindTexture()},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&At.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?At.setTextureCube(E,0):E.isData3DTexture?At.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?At.setTexture2DArray(E,0):At.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){I=0,M=0,b=null,yt.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}async function W_(s){const t=await fetch(new URL("cases/index.json",s));if(!t.ok)throw new Error(`Каталог случаев: HTTP ${t.status}`);const e=await t.json();if(e.schema!=="sonolab.catalog/1")throw new Error("Неизвестный формат каталога");return e.cases}async function X_(s,t){const e=new URL(t.path,s),n=await fetch(e);if(!n.ok)throw new Error(`Паспорт случая ${t.caseId}: HTTP ${n.status}`);const i=await n.json();return $_(i),{manifest:i,baseUrl:new URL(".",e).toString()}}function q_(s,t){return s.find(e=>e.caseId===t)??s.find(e=>e.default)??s[0]}function $_(s){const t=a=>{throw new Error(`Паспорт случая ${s.caseId??"?"}: ${a}`)};s.schema!=="sonolab.case/1"&&t("неизвестная схема"),["recorded-sweep","volume-reslice","registered-volume","synthetic"].includes(s.imageType)||t("неизвестный тип изображения"),["left","right","unknown"].includes(s.patientSide)||t("сторона должна быть left/right/unknown"),s.source?.license||t("не указана лицензия");const e=s.frames?.count;(!e||e<1)&&t("нет кадров");const n=s.trajectory?.lut;(!Array.isArray(n)||n.length<2)&&t("нет таблицы t → frameId"),n.some(a=>!Number.isInteger(a)||a<0||a>=e)&&t("таблица ссылается на несуществующий кадр");const i=s.imageType==="recorded-sweep"||s.imageType==="volume-reslice",r=s.imageType==="volume-reslice"&&(s.reslice?.sliceStepMm??0)>0&&(s.imageGeometry?.pixelSpacingMm??0)>0;i&&(s.supportedMotions.compression||(s.supportedMotions.rotation||s.supportedMotions.tilt)&&!r)&&t("записанный проход не поддерживает вращение/наклон/компрессию")}const Ze=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],zu=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Zr=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Ns=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Us=s=>Math.sqrt(Ns(s,s)),As=s=>{const t=Us(s)||1;return[s[0]/t,s[1]/t,s[2]/t]},ph=(s,t,e)=>zu(s,Zr(Ze(t,s),e));function mh(s,t){const e=Math.min(1,Math.max(0,t));return s[Math.round(e*(s.length-1))]}function xh(s,t){const e=Math.min(1,Math.max(0,s));return Math.round(e*(t-1))/(t-1)}class Vu{samples;cumulative;length;constructor(t){if(t.length<2)throw new Error("Траектория должна содержать минимум две точки");this.samples=t.map(e=>({point:e.point,normal:As(e.normal)})),this.cumulative=[0];for(let e=1;e<t.length;e++)this.cumulative.push(this.cumulative[e-1]+Us(Ze(t[e].point,t[e-1].point)));this.length=this.cumulative[this.cumulative.length-1]}poseAt(t){const e=Math.min(1,Math.max(0,t))*this.length;let n=1;for(;n<this.cumulative.length-1&&this.cumulative[n]<e;)n++;const i=this.samples[n-1],r=this.samples[n],a=this.cumulative[n]-this.cumulative[n-1]||1,o=(e-this.cumulative[n-1])/a;return{pointBody:ph(i.point,r.point,o),normalBody:As(ph(i.normal,r.normal,o)),alongBody:As(Ze(r.point,i.point))}}project(t){let e={dist:1/0,arc:0};for(let d=1;d<this.samples.length;d++){const f=this.samples[d-1].point,x=this.samples[d].point,g=Ze(x,f),m=Ns(g,g)||1,p=Math.min(1,Math.max(0,Ns(Ze(t,f),g)/m)),v=zu(f,Zr(g,p)),_=Us(Ze(t,v));_<e.dist&&(e={dist:_,arc:this.cumulative[d-1]+p*Math.sqrt(m)})}const n=this.samples[0].point,i=As(Ze(this.samples[1].point,n)),r=this.samples[this.samples.length-1].point,a=As(Ze(r,this.samples[this.samples.length-2].point)),o=-Ns(Ze(t,n),i),l=Ns(Ze(t,r),a);let c=0,h=e.arc/this.length,u=e.dist;return o>0&&e.arc===0?(c=o,h=-o/this.length,u=Us(Ze(Ze(t,n),Zr(i,-o)))):l>0&&e.arc>=this.length-1e-12&&(c=l,h=1+l/this.length,u=Us(Ze(Ze(t,r),Zr(a,l)))),{tRaw:h,t:Math.min(1,Math.max(0,h)),lateral:u,overshoot:c}}}const zc={lateralTolerance:.028,endTolerance:.006};function j_(s,t=zc){return s.lateral<=t.lateralTolerance&&s.overshoot<=t.endTolerance}const Y_=7,K_=450;class Z_{constructor(t,e,n){this.view=t,this.visual=e,this.opts=n;const i=t.host;i.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),i.addEventListener("pointermove",this.onHover,{passive:!0})}state={kind:"idle"};enabled=!0;ray=new Cn;ndc=new pt;dragging=null;tapCandidate=null;pendingMove=null;activePointers=new Set;get isDragging(){return this.dragging!==null}setT(t,e,n=performance.now()){const i=xh(t,this.opts.lut.length),r=this.opts.path.poseAt(i);this.apply({kind:"in-area",caseId:this.opts.caseId,t:i,frameId:mh(this.opts.lut,i),pose:r,origin:e},n)}flush(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null,this.placeFromScreen(t.x,t.y,t.ts,!0)}apply(t,e){if(this.state=t,t.kind==="in-area")this.visual.setPose(t.pose.pointBody,t.pose.normalBody,t.pose.alongBody,!0);else if(t.kind==="out-of-area"){const n=this.opts.path.poseAt(.5).alongBody;this.visual.setPose(t.contact.pointBody,t.contact.normalBody,n,!1)}this.opts.onState(t,e)}setNdc(t,e){const n=this.view.renderer.domElement.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.view.camera)}placeFromScreen(t,e,n,i){this.setNdc(t,e);const r=this.ray.intersectObjects(this.view.human.skinMeshes,!1)[0];if(!r||!r.face)return void 0;const a=r.point.toArray(),o=new Xt().getNormalMatrix(r.object.matrixWorld),l=r.face.normal.clone().applyMatrix3(o).normalize().toArray(),c=r.object===this.view.human.forearm&&this.opts.isOnRegion(r.point),h=this.opts.path.project(a);if(c&&j_(h,zc)){const u=xh(h.t,this.opts.lut.length);this.apply({kind:"in-area",caseId:this.opts.caseId,t:u,frameId:mh(this.opts.lut,u),pose:this.opts.path.poseAt(u),origin:"body"},n)}else this.apply({kind:"out-of-area",contact:{pointBody:a,normalBody:l,surfaceId:r.object.name||"skin"},origin:"body"},n)}hitsProbeOrZone(t,e){this.setNdc(t,e);const n=[this.opts.zoneHitMesh];return this.visual.group.visible&&n.push(...this.visual.grabTargets),this.ray.intersectObjects(n,!1).length>0}onDown=t=>{if(this.enabled){if(this.activePointers.add(t.pointerId),this.activePointers.size>1){this.tapCandidate=null,this.dragging&&this.endDrag();return}if(!(t.button!==0&&t.pointerType==="mouse")){if(this.hitsProbeOrZone(t.clientX,t.clientY)){this.dragging={pointerId:t.pointerId},this.view.controls.enabled=!1,this.visual.setActive(!0),this.view.host.classList.add("dragging-probe"),t.preventDefault(),t.stopPropagation(),this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!0);return}this.tapCandidate={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}}};onMove=t=>{this.tapCandidate&&this.tapCandidate.id===t.pointerId&&Math.hypot(t.clientX-this.tapCandidate.x,t.clientY-this.tapCandidate.y)>Y_&&(this.tapCandidate=null),!(!this.dragging||this.dragging.pointerId!==t.pointerId)&&(this.pendingMove={x:t.clientX,y:t.clientY,ts:t.timeStamp})};onUp=t=>{if(!this.enabled){this.activePointers.delete(t.pointerId);return}if(this.activePointers.delete(t.pointerId),this.dragging&&this.dragging.pointerId===t.pointerId){this.flush(),this.endDrag();return}const e=this.tapCandidate;this.tapCandidate=null,e&&e.id===t.pointerId&&t.type==="pointerup"&&t.timeStamp-e.t<K_&&this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!1)};onHover=t=>{this.enabled&&(this.dragging||t.pointerType!=="mouse"||this.view.host.classList.toggle("can-grab",this.hitsProbeOrZone(t.clientX,t.clientY)))};endDrag(){this.dragging=null,this.view.controls.enabled=!0,this.visual.setActive(!1),this.view.host.classList.remove("dragging-probe")}}function J_(s,t=zc.lateralTolerance*.8){const e=[],n=[];s.samples.forEach((a,o)=>{const l=new P(...a.point),c=new P(...a.normal),h=s.samples[Math.min(o+1,s.samples.length-1)].point,u=s.samples[Math.max(o-1,0)].point,d=new P(...h).sub(new P(...u)).normalize(),f=new P().crossVectors(c,d).normalize(),x=c.clone().multiplyScalar(.004),g=l.clone().add(x).addScaledVector(f,t),m=l.clone().add(x).addScaledVector(f,-t);if(e.push(g.x,g.y,g.z,m.x,m.y,m.z),o>0){const p=o*2;n.push(p-2,p-1,p,p-1,p+1,p)}});const i=new Re;i.setAttribute("position",new pe(e,3)),i.setIndex(n);const r=new ee(i,new bn({visible:!1,side:nn}));return r.name="sweep-zone-hit",r}const jn=s=>new P(s[0],s[1],s[2]);class Q_{group=new Nn;grabTargets=[];fan;bodyMat;constructor(){this.group.name="probe",this.bodyMat=new hn({color:3095109,roughness:.35,metalness:.1});const t=new hn({color:1844011,roughness:.5}),e=new hn({color:9411237,roughness:.3}),n=new ee(new Cc(.0125,.085,8,20),this.bodyMat);n.scale.set(1.25,1,.75),n.position.y=.072;const i=new ee(new Sn(.038,.022,.02),t);i.position.y=.014;const r=new ee(new Qs(.019,.019,.02,24,1,!1,0,Math.PI),e);r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,r.scale.set(1,1,.3),r.position.y=.004;const a=new ee(new Uc(new yu([new P(0,.12,0),new P(0,.145,.012),new P(.006,.16,.04)]),16,.0035,8),t);for(const h of[n,i,r,a])h.castShadow=!0,this.group.add(h),this.grabTargets.push(h);const o=new wu,l=.07;o.moveTo(0,0),o.absarc(0,0,l,-Math.PI/2-.65,-Math.PI/2+.65,!1),o.lineTo(0,0),this.fan=new ee(new Ic(o,24),new bn({color:3843839,transparent:!0,opacity:.18,side:nn,depthTest:!1,depthWrite:!1})),this.fan.renderOrder=10,this.group.add(this.fan);const c=new ee(new Dc(.035,12,8),new bn({visible:!1}));c.position.y=.05,this.group.add(c),this.grabTargets.push(c),this.group.visible=!1}setPose(t,e,n,i){const r=jn(e).normalize(),a=jn(n).sub(r.clone().multiplyScalar(jn(n).dot(r))).normalize(),o=new P().crossVectors(r,a).normalize(),l=new $t().makeBasis(o,r,a);this.group.quaternion.setFromRotationMatrix(l),this.group.position.copy(jn(t)),this.group.visible=!0,this.fan.visible=i,this.bodyMat.color.set(i?3095109:7032912)}setActive(t){this.bodyMat.emissive.set(t?1127253:0)}}function tv(s){const t=new Nn;t.name="sweep-marker";const e=s.samples.map(r=>jn(r.point).add(jn(r.normal).multiplyScalar(.0015))),n=new ua(new Re().setFromPoints(e),new Ep({color:683990,dashSize:.008,gapSize:.006,depthTest:!0}));n.computeLineDistances(),t.add(n);const i=new bn({color:683990});for(const r of[s.samples[0],s.samples[s.samples.length-1]]){const a=new ee(new Nc(.006,.0012,8,24),i);a.position.copy(jn(r.point).add(jn(r.normal).multiplyScalar(.0015))),a.lookAt(a.position.clone().add(jn(r.normal))),t.add(a)}return t}function ev(s,t,e,n,i=41,r=[]){s.updateMatrixWorld(!0);for(const d of r)d.updateMatrixWorld(!0);const a=new Cn,o=new P(...n).normalize(),l=new P(...t),c=new P(...e),h=new Xt().getNormalMatrix(s.matrixWorld),u=[];for(let d=0;d<i;d++){const f=l.clone().lerp(c,d/(i-1));a.set(f.clone().addScaledVector(o,-.4),o);let x=a.intersectObject(s,!1)[0],g=h;if((!x||!x.face)&&r.length&&(x=a.intersectObjects(r,!1)[0],x&&(g=new Xt().getNormalMatrix(x.object.matrixWorld))),!x||!x.face)throw new Error("Не удалось построить траекторию прохода на коже");const m=x.face.normal.clone().applyMatrix3(g).normalize();u.push({point:x.point.toArray(),normal:m.toArray()})}return new Vu(u)}function nv(s,t,e,n,i=81){s.updateMatrixWorld(!0);const r=new Cn,a=[],o=new P(0,-1,0),l=new Xt().getNormalMatrix(s.matrixWorld);for(let c=0;c<i;c++){const h=e+(n-e)*(c/(i-1)),u=t.elbow.clone().lerp(t.wrist,h);r.set(u.clone().add(new P(0,.3,0)),o);const d=r.intersectObject(s,!1)[0];if(!d||!d.face)throw new Error("Не удалось построить траекторию на предплечье");const f=d.face.normal.clone().applyMatrix3(l).normalize();a.push({point:d.point.toArray(),normal:f.toArray()})}return new Vu(a)}const gh={type:"change"},Vc={type:"start"},Hu={type:"end"},kr=new ds,_h=new li,iv=Math.cos(70*au.DEG2RAD),Ee=new P,Ke=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class sv extends nm{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wl,this._sphericalDelta=new Wl,this._scale=1,this._panOffset=new P,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new P,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=av.bind(this),this._onPointerDown=rv.bind(this),this._onPointerUp=ov.bind(this),this._onContextMenu=pv.bind(this),this._onMouseWheel=hv.bind(this),this._onKeyDown=uv.bind(this),this._onTouchStart=dv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=cv.bind(this),this._onMouseMove=lv.bind(this),this._interceptControlDown=mv.bind(this),this._interceptControlUp=xv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),i<-Math.PI?i+=Ke:i>Math.PI&&(i-=Ke),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<iv?this.object.lookAt(this.target):(_h.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(_h,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ee.copy(i).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function av(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ov(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=fe.DOLLY;break;case Zi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=fe.ROTATE}break;case Zi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Vc)}function lv(s){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function hv(s){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(s.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Hu))}function uv(s){this.enabled!==!1&&this._handleKeyDown(s)}function dv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=fe.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=fe.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Vc)}function fv(s){switch(this._trackPointer(s),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=fe.NONE}}function pv(s){this.enabled!==!1&&s.preventDefault()}function mv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gv extends pu{constructor(){super();const t=new Sn;t.deleteAttribute("uv");const e=new hn({side:We}),n=new hn,i=new Nu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ee(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new xu(t,n,6),o=new _e;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ee(t,ji(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ee(t,ji(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ee(t,ji(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new ee(t,ji(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new ee(t,ji(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new ee(t,ji(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ji(s){return new bp({color:0,emissive:16777215,emissiveIntensity:s})}function vh(s,t){if(t===Ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Zo||t===iu){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Zo)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class _v extends ms{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Sv(e)}),this.register(function(e){return new Tv(e)}),this.register(function(e){return new Dv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new wv(e)}),this.register(function(e){return new Av(e)}),this.register(function(e){return new Rv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new bv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new Ev(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new yv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Ov(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Gs.extractUrlBase(t);a=Gs.resolveURL(c,this.path)}else a=Gs.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Du(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Gu){try{a[Qt.KHR_BINARY_GLTF]=new kv(t)}catch(u){i&&i(u);return}r=JSON.parse(a[Qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Zv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qt.KHR_MATERIALS_UNLIT:a[u]=new Mv;break;case Qt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Bv(r,this.dracoLoader);break;case Qt.KHR_TEXTURE_TRANSFORM:a[u]=new zv;break;case Qt.KHR_MESH_QUANTIZATION:a[u]=new Vv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function vv(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yv{constructor(t){this.parser=t,this.name=Qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Vt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$e);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nu(h),c.distance=u;break;case"spot":c=new Hp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class Mv{constructor(){this.name=Qt.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(t,e,n){const i=[];t.color=new Vt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],$e),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Le))}return Promise.all(i)}}class bv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Sv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new pt(o,o)}return Promise.all(r)}}class Tv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ev{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class wv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Vt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],$e)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Le)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Av{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Rv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Vt().setRGB(o[0],o[1],o[2],$e),Promise.all(r)}}class Cv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Pv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Vt().setRGB(o[0],o[1],o[2],$e),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Le)),Promise.all(r)}}class Lv{constructor(t){this.parser=t,this.name=Qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Iv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Dv{constructor(t){this.parser=t,this.name=Qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Nv{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class Uv{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class Fv{constructor(t){this.name=Qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Ov{constructor(t){this.name=Qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const x of u){const g=new $t,m=new P,p=new un,v=new P(1,1,1),_=new xu(x.geometry,x.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,g.compose(m,p,v));for(const y in l)if(y==="_COLOR_0"){const T=l[y];_.instanceColor=new Qo(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);_e.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Gu="glTF",Rs=12,yh={JSON:1313821514,BIN:5130562};class kv{constructor(t){this.name=Qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Gu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,r=new DataView(t,Rs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===yh.JSON){const c=new Uint8Array(t,Rs+a,o);this.content=n.decode(c)}else if(l===yh.BIN){const c=Rs+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=cc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=cc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ts[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const x in f.attributes){const g=f.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(f)},o,c,$e,d)})})}}class zv{constructor(){this.name=Qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Vv{constructor(){this.name=Qt.KHR_MESH_QUANTIZATION}}class Wu extends or{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,x=t*c,g=x-c,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+u;for(let y=0;y!==o;y++){const T=a[g+y+o],w=a[g+y+l]*h,C=a[x+y+o],I=a[x+y]*h;r[y]=v*T+_*w+m*C+p*I}return r}}const Hv=new un;class Gv extends Wu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Hv.fromArray(r).normalize().toArray(r),r}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mh={9728:Xe,9729:Fe,9984:Kh,9985:Xr,9986:Ls,9987:In},bh={33071:Ln,33648:ta,10497:Ei},to={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function yi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Rn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qv(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $v(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jv(s){let t;const e=s.extensions&&s.extensions[Qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+no(e.attributes):t=s.indices+":"+no(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+no(s.targets[n]);return t}function no(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function lc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Kv=new $t;class Zv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new vv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Bp(this.options.manager):this.textureLoader=new Xp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Du(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return yi(r,o,i),Rn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Gs.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=to[i.type],o=ts[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new qe(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=to[i.type],c=ts[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(v);_||(g=new c(o,p*f,i.count*f/h),_=new Uf(g,f/h),e.cache.add(v,_)),m=new Ec(_,l,d%f/h,x)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new qe(g,l,x);if(i.sparse!==void 0){const p=to.SCALAR,v=ts[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(a[1],_,i.sparse.count*p),w=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new qe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,I=T.length;C<I;C++){const M=T[C];if(m.setX(M,w[C*l]),l>=2&&m.setY(M,w[C*l+1]),l>=3&&m.setZ(M,w[C*l+2]),l>=4&&m.setW(M,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Mh[d.magFilter]||Fe,h.minFilter=Mh[d.minFilter]||In,h.wrapS=bh[d.wrapS]||Ei,h.wrapT=bh[d.wrapT]||Ei,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xe&&h.minFilter!==Fe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;e.isImageBitmapLoader===!0&&(x=function(g){const m=new Ie(g);m.needsUpdate=!0,d(m)}),e.load(Gs.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Rn(u,a),u.userData.mimeType=a.mimeType||Yv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Qt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Qt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gu,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rc,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return hn}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},l=r.extensions||{},c=[];if(l[Qt.KHR_MATERIALS_UNLIT]){const u=i[Qt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Vt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$e),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,Le)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=nn);const h=r.alphaMode||eo.OPAQUE;if(h===eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==bn&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==bn&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==bn){const u=r.emissiveFactor;o.emissive=new Vt().setRGB(u[0],u[1],u[2],$e)}return r.emissiveTexture!==void 0&&a!==bn&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Le)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Rn(u,r),e.associations.set(u,{materials:t}),r.extensions&&yi(i,u,r),u})}createUniqueName(t){const e=le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Sh(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=jv(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Sh(new Re,c,e),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Xv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){const g=h[f],m=a[f];let p;const v=c[f];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Of(g,v):new ee(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?p.geometry=vh(p.geometry,iu):m.mode===cn.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,Zo));else if(m.mode===cn.LINES)p=new Gf(g,v);else if(m.mode===cn.LINE_STRIP)p=new ua(g,v);else if(m.mode===cn.LINE_LOOP)p=new Wf(g,v);else if(m.mode===cn.POINTS)p=new Xf(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$v(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Rn(p,r),m.extensions&&yi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&yi(i,u[0],r),u[0];const d=new Nn;r.extensions&&yi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ge(au.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Oc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Rn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new $t;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new wc(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],x=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,v=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const T=d[_],w=f[_],C=x[_],I=g[_],M=m[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const b=n._createAnimationTracks(T,w,C,I,M);if(b)for(let R=0;R<b.length;R++)p.push(b[R])}const v=new Ip(r,void 0,p);return Rn(v,i),v})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Kv)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new mu:c.length>1?h=new Nn:c.length===1?h=c[0]:h=new _e,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Rn(h,r),r.extensions&&yi(n,h,r),r.matrix!==void 0){const u=new $t;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Nn;n.name&&(r.name=i.createUniqueName(n.name)),Rn(r,n),n.extensions&&yi(e,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Tn||d instanceof Ie)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,l=[];oi[r.path]===oi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(oi[r.path]){case oi.weights:c=cs;break;case oi.rotation:c=ls;break;case oi.translation:case oi.scale:c=hs;break;default:switch(n.itemSize){case 1:c=cs;break;case 2:case 3:default:c=hs;break}break}const h=i.interpolation!==void 0?Wv[i.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const x=new c(l[d]+"."+oi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=lc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ls?Gv:Wu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jv(s,t,e){const n=t.attributes,i=new ti;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=lc(ts[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){const g=lc(ts[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Sh(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=cc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return ne.workingColorSpace!==$e&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`),Rn(s,t),Jv(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?qv(s,t.targets,e):s})}function Qv(s,t,e){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0)/4294967296,r=new Float32Array(s*s);for(const{period:a,amp:o}of e){const l=new Float32Array(a*a).map(()=>i()),c=(h,u)=>l[(u+a)%a*a+(h+a)%a];for(let h=0;h<s;h++)for(let u=0;u<s;u++){const d=u/s*a,f=h/s*a,x=Math.floor(d),g=Math.floor(f),m=d-x,p=f-g,v=m*m*(3-2*m),_=p*p*(3-2*p),y=c(x,g)+(c(x+1,g)-c(x,g))*v,T=c(x,g+1)+(c(x+1,g+1)-c(x,g+1))*v;r[h*s+u]+=(y+(T-y)*_)*o}}return r}function ty(s=256){const t=Qv(s,1234567,[{period:64,amp:.55},{period:128,amp:.3},{period:16,amp:.15}]);for(let o=0;o<t.length;o++)t[o]=Math.pow(t[o],1.6);const e=new Uint8Array(s*s*4),n=new Uint8Array(s*s*4),i=(o,l)=>t[(l+s)%s*s+(o+s)%s],r=2.2;for(let o=0;o<s;o++)for(let l=0;l<s;l++){const c=(i(l+1,o)-i(l-1,o))*r,h=(i(l,o+1)-i(l,o-1))*r,u=Math.hypot(c,h,1),d=(o*s+l)*4;e[d]=(-c/u*.5+.5)*255,e[d+1]=(-h/u*.5+.5)*255,e[d+2]=(1/u*.5+.5)*255,e[d+3]=255;const f=.42+(.9-i(l,o))*.22;n[d]=n[d+1]=n[d+2]=Math.max(0,Math.min(255,f*255)),n[d+3]=255}const a=o=>{const l=new ha(o,s,s,sn);return l.wrapS=l.wrapT=Ei,l.repeat.set(36,36),l.magFilter=Fe,l.minFilter=In,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l};return{normal:a(e),roughness:a(n)}}function ey(s,t=ty()){const e=new En({map:s,color:new Vt(1,.97,.95),vertexColors:!0,roughness:1,roughnessMap:t.roughness,normalMap:t.normal,normalScale:new pt(.18,.18),metalness:0,specularIntensity:.55,sheen:.08,sheenColor:new Vt(16049888),sheenRoughness:.6});return e.userData.sss={wrap:.35,color:new Vt(.55,.2,.12)},e.userData.saturation=.66,e.onBeforeCompile=n=>{n.uniforms.sssWrap={value:e.userData.sss.wrap},n.uniforms.sssColor={value:e.userData.sss.color},n.uniforms.skinSaturation={value:e.userData.saturation},n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = mix( vec3( dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), diffuseColor.rgb, skinSaturation );`);const i=jt.lights_physical_pars_fragment,r=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}`;if(!i.includes(r))return;const a=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	float sssNL = dot( geometryNormal, directLight.direction );
	float sssWrapNL = saturate( ( sssNL + sssWrap ) / ( 1.0 + sssWrap ) );
	reflectedLight.directDiffuse += max( sssWrapNL - saturate( sssNL ), 0.0 ) * sssColor * directLight.color * BRDF_Lambert( material.diffuseColor );
}`;n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",`uniform float sssWrap;
uniform vec3 sssColor;
uniform float skinSaturation;
`+i.replace(r,a))},e.customProgramCacheKey=()=>"sonolab-skin-sss",e}function ny(s){const t=s.material;t.alphaTest=.5,t.alphaToCoverage=!0,t.transparent=!1,t.depthWrite=!0,t.roughness=.62,t.color.setRGB(.93,.86,.8),t.side=nn,t.envMapIntensity=.6;const e=t.clone();e.alphaTest=.04,e.alphaToCoverage=!1,e.transparent=!0,e.depthWrite=!1,e.opacity=.95;const n=new ee(s.geometry,e);return n.name=s.name+"-fringe",n.renderOrder=3,n.castShadow=!1,n.raycast=()=>{},s.renderOrder=1,s.castShadow=!0,n}const Ws=s=>new P(s[0],s[1],s[2]);function iy(s,t){s.updateMatrixWorld(!0);const e=[];let n;if(s.traverse(l=>{const c=l;if(!c.isMesh)return;if(c.castShadow=!0,c.receiveShadow=!0,c.name==="BodyFull"||c.parent?.name==="BodyFull"||c.name==="Briefs"||c.parent?.name==="Briefs"){(c.parent&&c.parent.name!==s.name?c.parent:c).visible=!1;return}e.push(c),(c.name==="Body"||c.parent?.name==="Body")&&(n=c)}),!n)throw new Error("В модели нет сетки Body");n.name="Body";const i=Ws(t.landmarks.elbowR),r=Ws(t.landmarks.wristR),a=r.clone().sub(i),o=a.length();return a.normalize(),{root:s,skinMeshes:e,forearm:n,forearmAxis:{elbow:i,wrist:r},isOnForearm(l){const c=l.clone().sub(i),h=c.dot(a),u=c.sub(a.clone().multiplyScalar(h)).length();return h>-.03&&h<o+.02&&u<.075},focus:{body:Ws(t.landmarks.pelvis).add(new P(.05,0,-.2)),forearm:i.clone().lerp(r,.5)},meta:t}}function sy(s){const t=[];s.traverse(e=>{e.isMesh&&t.push(e)});for(const e of t){const n=e.material,i=e.name==="Body"||e.parent?.name==="Body"||e.name==="BodyFull"||e.parent?.name==="BodyFull",r=e.name==="Hair"||e.parent?.name==="Hair";if(i)e.material=ey(n.map),n.dispose();else if(r){const a=ny(e);e.parent?.add(a)}else n.alphaTest>0||n.transparent?(n.alphaTest>0&&(n.alphaToCoverage=!0),n.depthWrite=!n.transparent,e.castShadow=!1,e.renderOrder=n.transparent?2:1):(e.name==="Clothes"||e.parent?.name==="Clothes")&&(n.roughness=.92,n.envMapIntensity=.7)}}async function ry(s,t){const[e,n]=await Promise.all([fetch(new URL("models/human.json",s)).then(r=>{if(!r.ok)throw new Error(`Паспорт модели: HTTP ${r.status}`);return r.json()}),new _v().loadAsync(new URL("models/human.glb",s).toString(),r=>{t&&r.total&&t(r.loaded/r.total)})]);n.scene.name="human";const i=iy(n.scene,e);return sy(n.scene),i}function ay(s){const t=new Nn;t.name="table";const e=new hn({color:15331058,roughness:.75}),n=new hn({color:12375014,roughness:.95}),i=new hn({color:7831690,roughness:.45,metalness:.6}),r=new ee(new Sn(2.05,.07,.64),e);r.position.set(-.08,-.035,0),r.receiveShadow=!0,t.add(r);const a=new ee(new Sn(1.9,.004,.62),n);a.position.set(-.1,5e-4,0),a.receiveShadow=!0,t.add(a);const o=new ee(new Sn(1.9,.08,.5),i);o.position.set(-.08,-.11,0),t.add(o);for(const _ of[-.85,.65]){const y=new ee(new Qs(.04,.05,.75,20),i);y.position.set(_,-.52,0),t.add(y)}const l=Ws(s.landmarks.shoulderR),c=Ws(s.landmarks.middleFingerBaseR),h=new P(c.x-l.x,0,c.z-l.z),u=h.length();h.normalize();const d=u+.12,f=.05,x=s.forearmMinY-.002,g=new ee(new Sn(.17,f,d),e),m=l.clone().add(h.clone().multiplyScalar(d/2-.02));g.position.set(m.x,x-f/2,m.z),g.rotation.y=Math.atan2(h.x,h.z),g.receiveShadow=!0,t.add(g);const p=new ee(new Qs(.02,.025,.8+x,16),i),v=l.clone().add(h.clone().multiplyScalar(d*.75));return p.position.set(v.x,(x-f-.8)/2,v.z),t.add(p),t}class oy{constructor(t,e){this.host=t,this.human=e,this.renderer=new G_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$h,this.renderer.outputColorSpace=Le,this.renderer.toneMapping=jh,this.renderer.toneMappingExposure=1,this.renderer.domElement.style.touchAction="none",this.renderer.domElement.setAttribute("aria-label","Трёхмерная сцена: человек и датчик"),t.appendChild(this.renderer.domElement);const n=new ac(this.renderer);this.scene.environment=n.fromScene(new gv,.04).texture,this.scene.background=new Vt(14673644);const i=new zp(16777215,12174284,.55);this.scene.add(i);const r=new sc(16774378,1.7);r.position.set(.8,2.6,-1.2),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-1.3,r.shadow.camera.right=1.3,r.shadow.camera.top=1.3,r.shadow.camera.bottom=-1.3,r.shadow.bias=-4e-4,r.shadow.normalBias=.01,this.scene.add(r);const a=new sc(16773606,.5);a.position.set(-1.5,1.4,1.5),this.scene.add(a);const o=new ee(new ar(12,12),new hn({color:13226456,roughness:.95}));o.rotation.x=-Math.PI/2,o.position.y=-.88,o.receiveShadow=!0,this.scene.add(o),this.scene.add(ay(e.meta)),this.scene.add(e.root),this.camera=new Ge(38,1,.01,30);const l=this.human.focus;this.presets={body:{pos:new P(-.12,2.05,-2.55),target:new P(-.05,.05,-.22)},forearm:{pos:l.forearm.clone().add(new P(.3,.4,-.04)),target:l.forearm.clone()},region:{pos:l.forearm.clone().add(new P(.3,.4,-.04)),target:l.forearm.clone()}},this.camera.position.copy(this.presets.body.pos),this.controls=new sv(this.camera,this.renderer.domElement),this.controls.target.copy(this.presets.body.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.minDistance=.18,this.controls.maxDistance=4.5,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.resize()}renderer;scene=new pu;camera;controls;tween=null;presets;resizeObs;resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.fov=t/e<.9?52:38,this.camera.updateProjectionMatrix()}setRegionFocus(t,e,n=.42){const i=t.clone().addScaledVector(e.clone().normalize(),n).add(new P(-.12,.08,0));this.presets.region={pos:i,target:t.clone()}}goTo(t,e=650){const n=this.presets[t];this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[n.pos.clone(),n.target.clone()],t0:performance.now(),dur:e}}setCamera(t,e){this.tween=null,this.camera.position.set(...t),this.controls.target.set(...e),this.controls.update()}cameraState(){return{position:this.camera.position.toArray(),target:this.controls.target.toArray()}}render(t){if(this.tween){const e=Math.min(1,(t-this.tween.t0)/this.tween.dur),n=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],n),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],n),e>=1&&(this.tween=null)}this.controls.update(),this.renderer.render(this.scene,this.camera)}}class cy{constructor(t,e){this.baseUrl=t,this.manifest=e,this.frameCount=e.frames.count}frameCount;cache=new Map;inflight=new Map;failed=new Set;url(t){const e=this.manifest.frames.pattern.replace("{id:04d}",String(t).padStart(4,"0"));return new URL(e,this.baseUrl).toString()}get(t){return this.cache.get(t)}load(t){const e=this.cache.get(t);if(e)return Promise.resolve(e);let n=this.inflight.get(t);return n||(n=this.fetchDecode(t).then(i=>(this.cache.set(t,i),this.inflight.delete(t),i)).catch(i=>{throw this.inflight.delete(t),this.failed.add(t),i}),this.inflight.set(t,n)),n}async fetchDecode(t){const e=await fetch(this.url(t));if(!e.ok)throw new Error(`Кадр ${t}: HTTP ${e.status}`);const n=await e.blob();if("createImageBitmap"in window)return createImageBitmap(n,{imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const i=new Image;return i.src=URL.createObjectURL(n),await i.decode(),i}async preloadAll(t,e,n=6){const i=Array.from({length:this.frameCount},(l,c)=>c).sort((l,c)=>Math.abs(l-t)-Math.abs(c-t));let r=0,a=0;const o=async()=>{for(;r<i.length;){const l=i[r++];try{await this.load(l)}catch{}e(++a,this.frameCount)}};await Promise.all(Array.from({length:n},o))}}class ly{constructor(t,e,n,i){this.canvas=t,this.source=e,this.frameW=n,this.frameH=i,t.width=n,t.height=i;const r=t.getContext("2d",{alpha:!1});if(!r)throw new Error("Canvas 2D недоступен");this.ctx=r,this.clear("idle")}ctx;seq=0;status="idle";shownFrameId=null;onStatus=()=>{};onDrawn=()=>{};show(t){const e=++this.seq,n=this.source.get(t);return n?(this.draw(n,t),!0):(this.setStatus("loading",null),this.source.load(t).then(i=>{e===this.seq&&this.draw(i,t)}).catch(()=>{e===this.seq&&this.clear("error")}),!1)}clear(t){this.seq++,this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.frameW,this.frameH),this.shownFrameId=null,this.setStatus(t,null)}draw(t,e){this.ctx.drawImage(t,0,0,this.frameW,this.frameH),this.shownFrameId=e,this.setStatus("ready",e),this.onDrawn(e,performance.now())}setStatus(t,e){this.status=t,this.onStatus(t,e)}}const Fs=90,Os=30;function hy(s,t,e,n,i){if(!(n>0)||!(i>0))throw new Error("Объём: шаги пикселя и кадров должны быть положительными");const r=s.length,a=t*e,o=new Uint8Array(a*r);return s.forEach((l,c)=>{if(l.length!==a)throw new Error(`Объём: кадр ${c} имеет ${l.length} пикселей, ожидалось ${a}`);o.set(l,c*a)}),{data:o,nx:t,ny:e,nz:r,pixelMm:n,sliceMm:i}}function uy(s,t=new Uint8Array(s.length/4)){for(let e=0,n=0;n<t.length;e+=4,n++)t[n]=s[e];return t}function dy(s){const t=(e,n)=>Math.max(-n,Math.min(n,Number.isFinite(e)?e:0));return{z0:s.z0,rotationDeg:t(s.rotationDeg,Fs),tiltDeg:t(s.tiltDeg,Os)}}function fy(s){return s.rotationDeg===0&&s.tiltDeg===0&&Number.isInteger(s.z0)}function py(s,t,e,n){const{nx:i,ny:r,nz:a,data:o}=s,l=i*r;if(e.length!==l||n.length!==l)throw new Error("Срез: размер буфера не совпадает с кадром");const c=dy(t);if(fy(c)&&c.z0>=0&&c.z0<a)return e.set(o.subarray(c.z0*l,(c.z0+1)*l)),n.fill(1),0;const h=c.rotationDeg*Math.PI/180,u=c.tiltDeg*Math.PI/180,d=Math.cos(h),f=Math.sin(h),x=Math.cos(u),g=Math.sin(u),m=1,p=s.pixelMm/s.sliceMm,v=(i-1)/2,_=d,y=f*p,T=-g*f,w=x*m,C=g*d*p,I=i-1,M=r-1,b=a-1;let R=0,N=0;for(let U=0;U<r;U++){const V=v-v*_+U*T,O=U*w,G=c.z0-v*y+U*C,j=O>=0&&O<=M,H=Math.floor(O),et=O-H,K=et>0?H+1:H;for(let gt=0;gt<i;gt++,N++){const z=V+gt*_,at=G+gt*y;if(!j||z<0||z>I||at<0||at>b){e[N]=0,n[N]=0,R++;continue}const Tt=z|0,Kt=at|0,Y=z-Tt,Z=at-Kt,nt=Y>0?Tt+1:Tt,ut=Z>0?Kt+1:Kt,lt=Kt*l,mt=ut*l,Ot=H*i,_t=K*i,qt=o[lt+Ot+Tt]+(o[lt+Ot+nt]-o[lt+Ot+Tt])*Y,L=o[lt+_t+Tt]+(o[lt+_t+nt]-o[lt+_t+Tt])*Y,Dt=o[mt+Ot+Tt]+(o[mt+Ot+nt]-o[mt+Ot+Tt])*Y,kt=o[mt+_t+Tt]+(o[mt+_t+nt]-o[mt+_t+Tt])*Y,Zt=qt+(L-qt)*et,yt=Dt+(kt-Dt)*et;e[N]=Zt+(yt-Zt)*Z+.5|0,n[N]=1}}return R/l}function my(s,t,e,n){for(let i=0,r=0;i<s.length;i++,r+=4){if(t[i]){const a=s[i];n[r]=a,n[r+1]=a,n[r+2]=a}else{const a=i%e,o=i/e|0,l=(a+o)%14<2;n[r]=l?46:10,n[r+1]=l?52:12,n[r+2]=l?64:18}n[r+3]=255}}const Th="Срез объёма под углом — пересчёт записи, а не новое УЗИ";function xy(s){return s.imageType==="volume-reslice"&&!!s.reslice&&(s.supportedMotions.rotation||s.supportedMotions.tilt)}class gy{constructor(t){this.o=t;const{width:e,height:n}=t.manifest.frames;this.gray=new Uint8Array(e*n),this.mask=new Uint8Array(e*n),this.img=new ImageData(e,n);const i=t.canvas.getContext("2d");if(!i)throw new Error("Canvas 2D недоступен");this.ctx=i,this.root=document.createElement("div"),this.root.className="reslice",this.root.dataset.testid="reslice";const r=t.manifest.supportedMotions;this.root.innerHTML=`
      <div class="reslice-head"><span>Поворот и наклон датчика <small>(${Th.toLowerCase()})</small></span>
        <button type="button" id="resliceReset" title="Вернуть исходный кадр записи">0°</button></div>
      <label ${r.rotation?"":"hidden"}>Поворот <output id="resliceRotOut">0°</output>
        <input id="resliceRot" type="range" min="${-Fs}" max="${Fs}" step="1" value="0" disabled /></label>
      <label ${r.tilt?"":"hidden"}>Наклон <output id="resliceTiltOut">0°</output>
        <input id="resliceTilt" type="range" min="${-Os}" max="${Os}" step="1" value="0" disabled /></label>
      <small class="reslice-state" id="resliceState">Сборка объёма из кадров…</small>`,t.after.after(this.root);const a=o=>this.root.querySelector("#"+o);this.rotIn=a("resliceRot"),this.tiltIn=a("resliceTilt"),this.rotOut=a("resliceRotOut"),this.tiltOut=a("resliceTiltOut"),this.stateEl=a("resliceState"),this.rotIn.addEventListener("input",()=>this.setAngles(Number(this.rotIn.value),this.tilt)),this.tiltIn.addEventListener("input",()=>this.setAngles(this.rotation,Number(this.tiltIn.value))),a("resliceReset").addEventListener("click",()=>this.setAngles(0,0)),this.badge=document.createElement("div"),this.badge.className="reslice-badge",this.badge.hidden=!0,t.screen.append(this.badge)}rotation=0;tilt=0;volume=null;buildMs=0;noDataFraction=0;renderMs=[];error=null;gray;mask;img;ctx;root;badge;rotIn;tiltIn;rotOut;tiltOut;stateEl;baseQ=new un;wasOblique=!1;isOblique(){return this.rotation!==0||this.tilt!==0}async build(){const t=this.o.manifest,{width:e,height:n,count:i}=t.frames;if(this.o.source.failed.size){this.error="поворот недоступен: не все кадры загружены",this.stateEl.textContent=`Поворот и наклон недоступны: не загружено кадров — ${this.o.source.failed.size}`;return}const r=performance.now(),a=document.createElement("canvas");a.width=e,a.height=n;const o=a.getContext("2d",{willReadFrequently:!0,alpha:!1});if(!o)return;const l=[];for(let c=0;c<i;c++){const h=this.o.source.get(c)??await this.o.source.load(c);o.drawImage(h,0,0,e,n),l.push(uy(o.getImageData(0,0,e,n).data)),c%24===23&&await new Promise(u=>setTimeout(u,0))}this.volume=hy(l,e,n,t.imageGeometry.pixelSpacingMm,t.reslice.sliceStepMm),this.buildMs=performance.now()-r,this.rotIn.disabled=!1,this.tiltIn.disabled=!1,this.stateEl.textContent=`Объём ${e}×${n}×${i}, шаг кадров ${t.reslice.sliceStepMm} мм. При 0° — исходный кадр записи; при другом угле разметка скрыта (контуры есть только на исходных кадрах). Штриховка — нет данных (вне записанного объёма).`,this.isOblique()&&this.redraw()}setAngles(t,e){const n=Math.round(Math.max(-Fs,Math.min(Fs,t||0))),i=Math.round(Math.max(-Os,Math.min(Os,e||0)));!this.volume&&(n!==0||i!==0)||(this.rotation=n,this.tilt=i,this.rotIn.value=String(n),this.tiltIn.value=String(i),this.rotOut.textContent=`${n}°`,this.tiltOut.textContent=`${i}°`,this.applyProbe(),this.redraw())}onPose(){this.baseQ.copy(this.o.probeGroup.quaternion),this.applyProbe()}afterDraw(t){this.isOblique()&&this.volume&&this.renderOblique(t)}redraw(){const t=this.isOblique(),e=this.o.frames.shownFrameId;if(t!==this.wasOblique&&(this.wasOblique=t,this.o.screen.classList.toggle("reslice-oblique",t),this.o.onObliqueChange(t)),e===null){this.badge.hidden=!0;return}t?this.renderOblique(e):(this.badge.hidden=!0,this.o.frames.show(e))}renderOblique(t){const e=this.volume,n=performance.now();this.noDataFraction=py(e,{z0:t,rotationDeg:this.rotation,tiltDeg:this.tilt},this.gray,this.mask),my(this.gray,this.mask,e.nx,this.img.data),this.ctx.putImageData(this.img,0,0),this.renderMs.push(performance.now()-n),this.renderMs.length>200&&this.renderMs.shift(),this.badge.hidden=!1,this.badge.textContent=`${Th}. Поворот ${this.rotation}°, наклон ${this.tilt}°`+(this.noDataFraction>.005?` · штриховка — нет данных (${Math.round(this.noDataFraction*100)}% кадра)`:"")}applyProbe(){const t=new un().setFromEuler(new dn(-this.tilt*Math.PI/180,-this.rotation*Math.PI/180,0,"YXZ"));this.o.probeGroup.quaternion.copy(this.baseQ).multiply(t)}debug(){const t=[...this.renderMs].sort((e,n)=>e-n);return{ready:!!this.volume,error:this.error,rotation:this.rotation,tilt:this.tilt,oblique:this.isOblique(),noDataFraction:this.noDataFraction,buildMs:this.buildMs,renderP95Ms:t.length?t[Math.min(t.length-1,Math.floor(.95*t.length))]:null,badge:this.badge.hidden?null:this.badge.textContent}}}const Eh="http://www.w3.org/2000/svg",Br=(s,t)=>s.length?"M"+s.map(e=>`${e[0].toFixed(1)},${e[1].toFixed(1)}`).join("L")+(t?"Z":""):"";class _y{constructor(t,e,n){this.w=e,this.h=n,this.svg=document.createElementNS(Eh,"svg"),this.svg.setAttribute("viewBox",`0 0 ${e} ${n}`),this.svg.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg.classList.add("mark-overlay"),this.svg.setAttribute("aria-label","Слой разметки"),t.appendChild(this.svg),this.svg.addEventListener("pointerdown",r=>{const a=this.toImage(r);if(!this.drawing){const o=r.target.closest("[data-vertex]"),l=r.target.closest("[data-mark]");if(o||l){const c=(o??l).getAttribute(o?"data-vertex-of":"data-mark");this.dragging={id:c,vertex:o?Number(o.getAttribute("data-vertex")):null,pointerId:r.pointerId},this.svg.setPointerCapture(r.pointerId),o||this.onMarkDown(c),r.preventDefault();return}}a&&this.onImageClick(a.x,a.y)}),this.svg.addEventListener("pointermove",r=>{if(this.dragging&&this.dragging.pointerId===r.pointerId){const o=this.toImage(r,!0);this.dragging.vertex!==null?this.onVertexDrag(this.dragging.id,this.dragging.vertex,o.x,o.y):this.onMarkDrag(this.dragging.id,o.x,o.y);return}const a=this.toImage(r,!0);a&&this.onImageMove(a.x,a.y)});const i=r=>{if(!this.dragging||this.dragging.pointerId!==r.pointerId)return;const a=this.dragging;this.dragging=null,a.vertex!==null?this.onVertexDragEnd(a.id,a.vertex):this.onMarkDragEnd(a.id)};this.svg.addEventListener("pointerup",i),this.svg.addEventListener("pointercancel",i)}svg;opacity=.9;showLabels=!0;onImageClick=()=>{};onImageMove=()=>{};onMarkDown=()=>{};onMarkDrag=()=>{};onMarkDragEnd=()=>{};onVertexDrag=()=>{};onVertexDragEnd=()=>{};drawing=!1;dragging=null;set interactive(t){this.svg.classList.toggle("interactive",t)}toImage(t,e=!1){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t.clientX,t.clientY).matrixTransform(n.inverse());return e?{x:Math.min(this.w,Math.max(0,i.x)),y:Math.min(this.h,Math.max(0,i.y))}:i.x<0||i.y<0||i.x>this.w||i.y>this.h?null:{x:i.x,y:i.y}}toScreen(t,e){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t,e).matrixTransform(n);return{x:i.x,y:i.y}}imagePxPerScreenPx(){const t=this.svg.getScreenCTM();return t?1/Math.hypot(t.a,t.b):1}clear(){this.svg.replaceChildren()}el(t,e,n=this.svg){const i=document.createElementNS(Eh,t);for(const[r,a]of Object.entries(e))i.setAttribute(r,String(a));return n.appendChild(i),i}label(t,e,n,i,r,a=!1){const o=n.length*11.5;let l,c;a?(l=Math.min(this.w-o/2-4,Math.max(o/2+4,t)),c="middle"):t+12+o>this.w?(l=t-12,c="end"):(l=t+12,c="start");const h=Math.max(22,a?e+7:e-10),u=this.el("text",{x:l,y:h,class:"mark-label",fill:i,"text-anchor":c},r);u.textContent=n}cross(t,e,n,i){this.el("path",{d:`M${t-7},${e-7}L${t+7},${e+7}M${t+7},${e-7}L${t-7},${e+7}`,class:n},i)}render(t){this.clear(),t.items?.length&&this.drawItems(t.items,!!t.showTolerance),t.feedback&&this.drawFeedback(t.feedback),t.draft&&this.drawDraft(t.draft)}drawItems(t,e){const n=this.el("g",{opacity:this.opacity}),i=[...t].sort((r,a)=>(r.mark.kind==="contour"?0:1)-(a.mark.kind==="contour"?0:1));for(const{mark:r,structure:a,selected:o}of i){const l=r.status==="verified"?"":" draft",c=this.el("g",{"data-mark":r.id,class:"mark"+(o?" selected":"")+(r.kind==="contour"?" contour":"")},n);if(r.kind==="contour"&&r.points){this.el("path",{d:Br(r.points,!0),class:"mark-poly"+l,stroke:a.color,fill:a.color},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c,!0),o&&r.points.forEach(([h,u],d)=>{this.el("circle",{cx:h,cy:u,r:7,class:"vertex","data-vertex":d,"data-vertex-of":r.id},n)});continue}e&&this.el("circle",{cx:r.x,cy:r.y,r:r.tolerancePx,class:"mark-tol",stroke:a.color},c),this.el("circle",{cx:r.x,cy:r.y,r:16,class:"mark-hit"},c),this.el("circle",{cx:r.x,cy:r.y,r:o?9:7,fill:a.color,class:"mark-dot"+l},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c)}}drawFeedback(t){const e=this.el("g",{}),n=t.structure.color,i=t.reference;i.kind==="contour"&&i.points?this.el("path",{d:Br(i.points,!0),class:"mark-poly ref",stroke:n,fill:n},e):(this.el("circle",{cx:i.x,cy:i.y,r:i.tolerancePx,class:"mark-tol",stroke:n},e),this.el("circle",{cx:i.x,cy:i.y,r:6,fill:n,class:"mark-dot"},e)),this.label(i.x,i.y,"эталон: "+t.structure.name,n,e,i.kind==="contour"),t.polygon&&this.el("path",{d:Br(t.polygon,!0),class:"answer-poly "+(t.hit?"hit":"miss")},e),t.click&&!t.polygon&&(i.kind!=="contour"&&this.el("line",{x1:i.x,y1:i.y,x2:t.click.x,y2:t.click.y,class:"fb-line"},e),this.cross(t.click.x,t.click.y,t.hit?"fb-click hit":"fb-click miss",e))}drawDraft(t){const e=this.el("g",{class:"draft-g"}),n=t.cursor&&t.points.length?[...t.points,[t.cursor.x,t.cursor.y]]:t.points;n.length>=2&&this.el("path",{d:Br(n,!1),class:"draft-line",stroke:t.color},e),t.points.forEach(([i,r],a)=>{this.el("circle",{cx:i,cy:r,r:a===0&&t.closable?10:5,class:"draft-vertex"+(a===0?" first":""),stroke:t.color},e)})}}function aa(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[i],[l,c]=e[r];o>t!=c>t&&s<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Ci(s){let t=0,e=0,n=0;for(let i=0,r=s.length-1;i<s.length;r=i++){const a=s[r][0]*s[i][1]-s[i][0]*s[r][1];t+=a,e+=(s[r][0]+s[i][0])*a,n+=(s[r][1]+s[i][1])*a}if(Math.abs(t)<1e-9){const i=s.length||1;return[s.reduce((r,a)=>r+a[0],0)/i,s.reduce((r,a)=>r+a[1],0)/i]}return[e/(3*t),n/(3*t)]}function vy(s,t,e){let n=1/0;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[r],[l,c]=e[i],h=l-a,u=c-o,d=h*h+u*u||1,f=Math.max(0,Math.min(1,((s-a)*h+(t-o)*u)/d));n=Math.min(n,Math.hypot(s-(a+f*h),t-(o+f*u)))}return n}function yy(s,t,e=2){if(s.length<3||t.length<3)return 0;const n=[...s,...t].map(d=>d[0]),i=[...s,...t].map(d=>d[1]),r=Math.floor(Math.min(...n)),a=Math.ceil(Math.max(...n)),o=Math.floor(Math.min(...i)),l=Math.ceil(Math.max(...i));let c=0,h=0,u=0;for(let d=o+e/2;d<l;d+=e)for(let f=r+e/2;f<a;f+=e){const x=aa(f,d,s),g=aa(f,d,t);x&&c++,g&&h++,x&&g&&u++}return c+h?2*u/(c+h):0}const He=s=>s.kind??"point",hc=.6,My=[{id:"radial-artery",name:"Лучевая артерия",class:"artery",color:"#e5484d"},{id:"ulnar-artery",name:"Локтевая артерия",class:"artery",color:"#f76b15"},{id:"median-nerve",name:"Срединный нерв",class:"nerve",color:"#ffd60a"},{id:"ulnar-nerve",name:"Локтевой нерв",class:"nerve",color:"#f5d90a"},{id:"radial-nerve-superficial",name:"Поверхностная ветвь лучевого нерва",class:"nerve",color:"#ffe066"},{id:"radial-veins",name:"Лучевые вены",class:"vein",color:"#3e63dd"},{id:"superficial-vein",name:"Подкожная вена",class:"vein",color:"#5b8def"},{id:"radius",name:"Лучевая кость",class:"bone",color:"#e8e8e8"},{id:"ulna",name:"Локтевая кость",class:"bone",color:"#cfcfcf"},{id:"fds",name:"Поверхностный сгибатель пальцев",class:"muscle",color:"#d6409f"},{id:"fdp",name:"Глубокий сгибатель пальцев",class:"muscle",color:"#ab4aba"},{id:"fcr",name:"Лучевой сгибатель запястья",class:"muscle",color:"#8e4ec6"},{id:"fcu",name:"Локтевой сгибатель запястья",class:"muscle",color:"#6e56cf"},{id:"flexor-tendons",name:"Сухожилия сгибателей",class:"tendon",color:"#46a758"},{id:"interosseous-membrane",name:"Межкостная мембрана",class:"fascia",color:"#12a594"},{id:"fascia",name:"Фасция",class:"fascia",color:"#0ea5b7"}],wh={nerve:"нерв",artery:"артерия",vein:"вена",muscle:"мышца",tendon:"сухожилие",bone:"кость",fascia:"фасция",other:"другое"},by=24;function Ah(s,t,e=My){return{schema:"sonolab.annotations/1",caseId:s,dataVersion:t,version:0,updatedAt:new Date(0).toISOString(),structures:e,frames:{}}}function io(s,t,e,n,i,r){const a=[];s.schema!=="sonolab.annotations/1"&&a.push("неизвестный формат разметки"),s.caseId!==t&&a.push(`разметка для другого случая (${s.caseId})`),s.dataVersion!==e&&a.push(`разметка для другой версии данных (${s.dataVersion} ≠ ${e})`);const o=new Set(s.structures.map(l=>l.id));for(const[l,c]of Object.entries(s.frames)){const h=Number(l);(!Number.isInteger(h)||h<0||h>=n)&&a.push(`кадр ${l} вне диапазона`);for(const u of c)o.has(u.structureId)||a.push(`кадр ${l}: неизвестная структура ${u.structureId}`),(u.x<0||u.y<0||u.x>i||u.y>r)&&a.push(`кадр ${l}: точка вне кадра`),He(u)==="contour"&&(!u.points||u.points.length<3?a.push(`кадр ${l}: контур меньше трёх вершин`):u.points.some(([d,f])=>d<0||f<0||d>i||f>r)&&a.push(`кадр ${l}: вершина контура вне кадра`))}return a}let Sy=0;const Rh=()=>`m${Date.now().toString(36)}${(Sy++).toString(36)}`;class zr{constructor(t){this.set=t}touch(){this.set.version+=1,this.set.updatedAt=new Date().toISOString()}marks(t){return this.set.frames[String(t)]??[]}framesWithMarks(){return Object.keys(this.set.frames).map(Number).filter(t=>this.set.frames[String(t)].length>0).sort((t,e)=>t-e)}add(t,e,n,i,r,a=by){const o=new Date().toISOString(),l=this.set.frames[String(t)]??[],c=l.find(u=>u.structureId===e&&He(u)==="point");if(c)return Object.assign(c,{x:n,y:i,author:r,updatedAt:o,status:"draft",origin:"manual"}),this.touch(),c;const h={id:Rh(),structureId:e,x:n,y:i,tolerancePx:a,author:r,status:"draft",createdAt:o,updatedAt:o,origin:"manual"};return this.set.frames[String(t)]=[...l,h],this.touch(),h}addContour(t,e,n,i){if(n.length<3)throw new Error("Контур должен содержать минимум три вершины");const r=new Date().toISOString(),a=n.map(([d,f])=>[d,f]),[o,l]=Ci(a),c=this.set.frames[String(t)]??[],h=c.find(d=>d.structureId===e&&He(d)==="contour");if(h)return Object.assign(h,{points:a,x:o,y:l,author:i,updatedAt:r,status:"draft",origin:"manual"}),this.touch(),h;const u={id:Rh(),structureId:e,kind:"contour",points:a,x:o,y:l,tolerancePx:0,author:i,status:"draft",createdAt:r,updatedAt:r,origin:"manual"};return this.set.frames[String(t)]=[...c,u],this.touch(),u}moveVertex(t,e,n,i,r){const a=this.marks(t).find(o=>o.id===e);!a||!a.points||!a.points[n]||(a.points[n]=[i,r],[a.x,a.y]=Ci(a.points),a.updatedAt=new Date().toISOString(),a.status="draft",this.touch())}move(t,e,n,i){const r=this.marks(t).find(a=>a.id===e);r&&(r.x=n,r.y=i,r.updatedAt=new Date().toISOString(),r.status="draft",this.touch())}remove(t,e){const n=this.marks(t).filter(i=>i.id!==e);n.length?this.set.frames[String(t)]=n:delete this.set.frames[String(t)],this.touch()}setStatus(t,e,n){for(const i of this.marks(t))i.status=e,i.updatedAt=new Date().toISOString(),e==="verified"&&(i.note=`проверено: ${n}`);this.touch()}setTolerance(t,e,n){const i=this.marks(t).find(r=>r.id===e);i&&(i.tolerancePx=n,this.touch())}copyFrom(t,e,n){const i=this.marks(t);let r=0;for(const a of i){const o=He(a);if(this.marks(e).some(c=>c.structureId===a.structureId&&He(c)===o))continue;const l=o==="contour"?this.addContour(e,a.structureId,a.points,n):this.add(e,a.structureId,a.x,a.y,n,a.tolerancePx);l.origin="copied",r++}return r}}function Ch(s,t){const e=t.mode??"point",n=[];for(const[a,o]of Object.entries(s.frames))for(const l of o){if(t.onlyVerified&&l.status!=="verified")continue;const c=He(l);if(e==="contour"&&c!=="contour")continue;const h=e==="point"?"point":c==="contour"?"contour":"point";e==="point"&&c==="contour"&&o.some(u=>u.structureId===l.structureId&&He(u)==="point")||n.push({frameId:Number(a),structureId:l.structureId,reference:l,answer:h})}n.sort((a,o)=>a.frameId-o.frameId||a.structureId.localeCompare(o.structureId));let i=t.seed>>>0||1;const r=()=>(i=i*1664525+1013904223>>>0)/4294967296;for(let a=n.length-1;a>0;a--){const o=Math.floor(r()*(a+1));[n[a],n[o]]=[n[o],n[a]]}return t.limit?n.slice(0,t.limit):n}function Ty(s,t,e){const n=s.reference;if(He(n)==="contour"&&n.points){const r=aa(t,e,n.points);return{errorPx:r?0:vy(t,e,n.points),hit:r}}const i=Math.hypot(t-n.x,e-n.y);return{errorPx:i,hit:i<=n.tolerancePx}}function Ey(s,t){const e=s.reference.points??[],n=yy(e,t),[i,r]=Ci(e),[a,o]=Ci(t);return{dice:n,errorPx:Math.hypot(i-a,r-o),hit:n>=hc}}function Ph(s){const t=s.filter(o=>o.errorPx!==null),e=o=>(o.answer??"point")==="point",n=t.filter(e).map(o=>o.errorPx).sort((o,l)=>o-l),i=o=>o.filter(l=>l.answer==="contour"&&l.dice!==null).map(l=>l.dice),r=o=>o.length?o.reduce((l,c)=>l+c,0)/o.length:null,a=new Map;for(const o of s)a.set(o.structureId,[...a.get(o.structureId)??[],o]);return{total:s.length,answered:t.length,hits:s.filter(o=>o.hit).length,skipped:s.length-t.length,hitRate:s.length?s.filter(o=>o.hit).length/s.length:0,meanErrorPx:r(n),medianErrorPx:n.length?n[Math.floor(n.length/2)]:null,meanDice:r(i(s)),byStructure:[...a.entries()].map(([o,l])=>({structureId:o,name:l[0].structureName,total:l.length,hits:l.filter(c=>c.hit).length,meanErrorPx:r(l.filter(c=>c.errorPx!==null&&e(c)).map(c=>c.errorPx)),meanDice:r(i(l))}))}}function wy(s){const t="задание;кадр;структура;ответ;x;y;ошибка_пикс;dice;засчитано;статус_эталона;время_мс;когда",e=s.attempts.map(n=>[n.taskIndex+1,n.frameId,n.structureName,(n.answer??"point")==="contour"?"обводка":"щелчок",n.clickX?.toFixed(1)??"",n.clickY?.toFixed(1)??"",n.errorPx?.toFixed(1)??"пропуск",n.dice?.toFixed(3)??"",n.hit?"да":"нет",n.referenceStatus,n.timeMs,n.at].join(";"));return[t,...e].join(`
`)}function J(s,t={},...e){const n=document.createElement(s);for(const[i,r]of Object.entries(t))i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="class"?n.className=String(r):i==="dataset"?Object.assign(n.dataset,r):r!=null&&r!==!1&&(n[i]=r);for(const i of e)i!=null&&i!==!1&&n.append(i);return n}const An={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}},del(s){try{localStorage.removeItem(s)}catch{}}};function so(s,t,e){const n=J("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}const ci=s=>s===null?"—":`${s.toFixed(1)} пикс.`,Vr=s=>s===null?"—":s.toFixed(2),Lh=12;class Ay{constructor(t){this.d=t;const e=t.manifest;this.overlay=new _y(t.overlayHost,e.frames.width,e.frames.height),this.local=new zr(Ah(e.caseId,e.dataVersion));const n=An.get(this.localKey);if(n)try{const i=JSON.parse(n);io(i,e.caseId,e.dataVersion,e.frames.count,e.frames.width,e.frames.height).length===0&&(this.local=new zr(i),this.hasLocal=!0)}catch{}this.author=An.get("sonolab.author")??"",this.student=An.get("sonolab.student")??"",this.selectedStructure=this.local.set.structures[0].id,this.overlay.onImageClick=(i,r)=>this.imageClick(i,r),this.overlay.onImageMove=(i,r)=>{this.draft.length&&(this.cursor={x:i,y:r},this.drawOverlay())},this.overlay.onVertexDrag=(i,r,a,o)=>{if(this.mode!=="expert")return;const l=this.findMark(i);l?.points?.[r]&&(l.points[r]=[a,o],[l.x,l.y]=Ci(l.points),this.drawOverlay())},this.overlay.onVertexDragEnd=(i,r)=>{if(this.mode!=="expert"||this.frameId===null)return;const a=this.findMark(i);a?.points?.[r]&&this.local.moveVertex(this.frameId,i,r,a.points[r][0],a.points[r][1]),this.saveLocal(),this.render()},document.addEventListener("keydown",i=>{if(!this.drawingActive())return;const r=i.target;r&&(r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA")||(i.key==="Enter"?(i.preventDefault(),this.closeDraft()):i.key==="Escape"?(i.preventDefault(),this.cancelDraft()):i.key==="Backspace"&&(i.preventDefault(),this.undoVertex()))}),this.overlay.onMarkDown=i=>{if(this.mode!=="expert")return;this.selectedMark=i;const r=this.findMark(i);r&&(this.selectedStructure=r.structureId),this.render()},this.overlay.onMarkDrag=(i,r,a)=>{if(this.mode!=="expert"||this.frameId===null)return;const o=this.findMark(i);o&&He(o)==="point"&&(o.x=r,o.y=a,this.drawOverlay())},this.overlay.onMarkDragEnd=i=>{if(this.mode!=="expert"||this.frameId===null)return;const r=this.findMark(i);r&&He(r)==="point"&&(this.local.move(this.frameId,i,r.x,r.y),this.saveLocal()),this.render()},this.renderTabs(),this.loadPublished().then(()=>this.render()),this.render()}mode="view";overlay;published=null;local;hasLocal=!1;frameId=null;selectedStructure;selectedMark=null;author="";showMarks=!0;message="";tool="point";draft=[];cursor=null;session=null;tasks=[];taskIndex=0;taskStarted=0;feedback=null;taskMode="both";trainSource="local";onlyVerified=!1;student="";get localKey(){return`sonolab.annotations.${this.d.manifest.caseId}.${this.d.manifest.dataVersion}`}async loadPublished(){if(this.d.annotationsUrl)try{const t=await fetch(this.d.annotationsUrl);if(!t.ok)return;const e=await t.json(),n=this.d.manifest,i=io(e,n.caseId,n.dataVersion,n.frames.count,n.frames.width,n.frames.height);if(i.length){this.message="Опубликованная разметка не принята: "+i[0];return}this.published=e,this.hasLocal||(this.trainSource="published")}catch{}}setFrame(t){t!==this.frameId&&(this.frameId=t,this.mode==="expert"&&(this.selectedMark=null),this.draft=[],this.cursor=null,this.render())}viewSet(){return this.mode==="expert"?this.local.set:this.mode==="train"?this.trainSource==="local"?this.local.set:this.published:this.hasLocal?this.local.set:this.published}structure(t){return(this.viewSet()??this.local.set).structures.find(n=>n.id===t)??{id:t,name:t,class:"other",color:"#ffffff"}}findMark(t){return this.frameId===null?void 0:this.local.marks(this.frameId).find(e=>e.id===t)}saveLocal(){this.hasLocal=this.local.framesWithMarks().length>0,this.hasLocal?An.set(this.localKey,JSON.stringify(this.local.set)):An.del(this.localKey)}drawingActive(){if(this.frameId===null)return!1;if(this.mode==="expert")return this.tool==="contour";if(this.mode==="train"&&this.session&&!this.feedback){const t=this.tasks[this.taskIndex];return!!t&&t.answer==="contour"&&t.frameId===this.frameId}return!1}addDraftVertex(t,e){const n=Lh*this.overlay.imagePxPerScreenPx();if(this.draft.length>=3&&Math.hypot(t-this.draft[0][0],e-this.draft[0][1])<=n)return this.closeDraft();this.draft.push([t,e]),this.cursor={x:t,y:e},this.render()}undoVertex(){this.draft.pop(),this.render()}cancelDraft(){this.draft=[],this.cursor=null,this.render()}closeDraft(){if(this.draft.length<3)return this.message="Для контура нужно минимум три вершины.",this.render();const t=this.draft;if(this.draft=[],this.cursor=null,this.mode==="expert"&&this.frameId!==null){const e=this.local.addContour(this.frameId,this.selectedStructure,t,this.author.trim());this.selectedMark=e.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const e=this.tasks[this.taskIndex],n=Ey(e,t),[i,r]=Ci(t);this.record(e,{x:i,y:r},n.errorPx,n.hit,n.dice,t)}}imageClick(t,e){if(this.frameId!==null){if(this.mode==="expert"){if(!this.author.trim()){this.message="Укажите автора разметки — без него метки не сохраняются.",this.render();return}if(this.tool==="contour")return this.addDraftVertex(t,e);const n=this.local.add(this.frameId,this.selectedStructure,t,e,this.author.trim());this.selectedMark=n.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const n=this.tasks[this.taskIndex];if(!n||n.frameId!==this.frameId)return;if(n.answer==="contour")return this.addDraftVertex(t,e);const i=Ty(n,t,e);this.record(n,{x:t,y:e},i.errorPx,i.hit,null,null)}}}record(t,e,n,i,r,a){this.session&&(this.session.attempts.push({taskIndex:this.taskIndex,frameId:t.frameId,structureId:t.structureId,structureName:this.structure(t.structureId).name,answer:t.answer,dice:r,polygon:a??void 0,clickX:e?.x??null,clickY:e?.y??null,errorPx:n,hit:i,referenceStatus:t.reference.status,at:new Date().toISOString(),timeMs:Math.round(performance.now()-this.taskStarted)}),this.feedback={click:e,polygon:a,hit:i,errorPx:n,dice:r},this.draft=[],this.cursor=null,this.render())}drawOverlay(){const t=this.overlay;if(t.interactive=this.mode==="expert"||this.mode==="train"&&!!this.session&&!this.feedback,t.drawing=this.drawingActive(),this.frameId===null)return t.clear();const e=Lh*t.imagePxPerScreenPx(),n=this.draft.length&&this.drawingActive()?{points:this.draft,cursor:this.cursor,color:this.mode==="expert"?this.structure(this.selectedStructure).color:"#ffffff",closable:this.draft.length>=3&&!!this.cursor&&Math.hypot(this.cursor.x-this.draft[0][0],this.cursor.y-this.draft[0][1])<=e}:null;if(this.mode==="train"&&this.session){const a=this.tasks[this.taskIndex];return a&&this.feedback&&a.frameId===this.frameId?t.render({feedback:{reference:a.reference,structure:this.structure(a.structureId),click:this.feedback.click,polygon:this.feedback.polygon,hit:this.feedback.hit}}):t.render({draft:n})}const i=this.viewSet(),r=i&&this.showMarks?i.frames[String(this.frameId)]??[]:[];t.render({items:r.map(a=>({mark:a,structure:this.structure(a.structureId),selected:a.id===this.selectedMark})),showTolerance:this.mode==="expert",draft:n})}renderTabs(){const t=[["view","Просмотр"],["expert","Эксперт"],["train","Тренировка"]];this.d.tabsHost.replaceChildren(...t.map(([e,n])=>J("button",{type:"button",class:"tab"+(this.mode===e?" active":""),textContent:n,dataset:{mode:e},ariaPressed:String(this.mode===e),onclick:()=>{this.mode=e,this.selectedMark=null,this.message="",this.renderTabs(),this.render()}})))}render(){this.drawOverlay();const t=this.mode==="view"?this.renderView():this.mode==="expert"?this.renderExpert():this.renderTrain();this.d.bodyHost.replaceChildren(t)}displayControls(){return J("div",{class:"ann-row"},J("label",{class:"chk"},J("input",{type:"checkbox",checked:this.showMarks,onchange:t=>(this.showMarks=t.target.checked,this.drawOverlay())}),"метки"),J("label",{class:"chk"},J("input",{type:"checkbox",checked:this.overlay.showLabels,onchange:t=>(this.overlay.showLabels=t.target.checked,this.drawOverlay())}),"подписи"),J("label",{class:"chk"},"прозрачность",J("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:String(this.overlay.opacity),oninput:t=>(this.overlay.opacity=Number(t.target.value),this.drawOverlay())})))}frameMarksInfo(t){if(this.frameId===null)return J("p",{class:"ann-note"},"Кадр не показан — разметка недоступна.");const e=t?.frames[String(this.frameId)]??[];return e.length?J("ul",{class:"ann-list"},...e.map(n=>{const i=this.structure(n.structureId);return J("li",{},J("span",{class:"sw",style:`background:${i.color}`}),`${i.name} · ${He(n)==="contour"?`контур, ${n.points?.length??0} верш.`:"точка"} · ${n.status==="verified"?"проверено":"черновик"}${n.origin==="copied"?" (скопировано)":""} · ${n.author}`)})):J("p",{class:"ann-note",dataset:{testid:"no-marks"}},"Для этого кадра разметки нет.")}sourceLine(t,e){if(!t)return J("p",{class:"ann-note"},"Эталонной разметки пока нет. Создайте её в режиме «Эксперт».");const n=Object.values(t.frames).filter(o=>o.length).length,i=Object.values(t.frames).reduce((o,l)=>o+l.length,0),r=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>c.status==="verified").length,0),a=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>He(c)==="contour").length,0);return J("p",{class:"ann-note"},`${e==="published"?"Опубликованная":"Локальная (этот браузер)"} разметка v${t.version}: ${i-a} точек и ${a} контуров на ${n} кадрах, проверено ${r}. ${this.d.manifest.imageGeometry.pixelSpacingMm?`Ошибки измеряются в пикселях кадра (1 пикс. = ${this.d.manifest.imageGeometry.pixelSpacingMm} мм).`:"Ошибки измеряются в пикселях кадра — масштаб в мм в источнике не указан."}`)}renderView(){const t=this.viewSet();return J("div",{class:"ann"},this.sourceLine(t,this.hasLocal?"local":this.published?"published":null),this.displayControls(),this.frameMarksInfo(t))}renderExpert(){const t=this.local.set,e=new Map;for(const c of t.structures)e.set(c.class,[...e.get(c.class)??[],c]);const n=J("select",{id:"annStructure",onchange:c=>(this.selectedStructure=c.target.value,this.selectedMark=null,this.render())},...[...e.entries()].map(([c,h])=>J("optgroup",{label:wh[c]},...h.map(u=>J("option",{value:u.id,textContent:u.name,selected:u.id===this.selectedStructure}))))),i=this.selectedMark?this.findMark(this.selectedMark):void 0,r=this.tool==="contour"&&this.draft.length?J("div",{class:"ann-row"},J("span",{},`Вершин: ${this.draft.length}`),J("button",{type:"button",id:"draftClose",disabled:this.draft.length<3,textContent:"Замкнуть контур",onclick:()=>this.closeDraft()}),J("button",{type:"button",textContent:"Убрать вершину",onclick:()=>this.undoVertex()}),J("button",{type:"button",textContent:"Отмена",onclick:()=>this.cancelDraft()})):null,a=this.local.framesWithMarks(),o=this.frameId===null?void 0:[...a].reverse().find(c=>c<this.frameId)??a.find(c=>c>this.frameId),l=J("input",{type:"file",accept:"application/json,.json",hidden:!0,onchange:async c=>{const h=c.target.files?.[0];if(h){try{const u=JSON.parse(await h.text()),d=this.d.manifest,f=io(u,d.caseId,d.dataVersion,d.frames.count,d.frames.width,d.frames.height);if(f.length)throw new Error(f.slice(0,3).join("; "));this.local=new zr(u),this.saveLocal(),this.message=`Импортировано: v${u.version}.`}catch(u){this.message="Импорт не выполнен: "+u.message}this.render()}}});return J("div",{class:"ann"},J("p",{class:"ann-note"},this.tool==="point"?"Точка: выберите структуру и щёлкните по ней на кадре; точку можно перетащить. Одна точка на структуру в кадре.":"Контур: щелчками обведите структуру по границе; замкнуть — щелчок по первой вершине или Enter, отменить вершину — Backspace, отменить обводку — Esc. Вершины готового контура перетаскиваются."),J("div",{class:"ann-row seg"},...["point","contour"].map(c=>J("button",{type:"button",id:c==="point"?"toolPoint":"toolContour",class:"seg-btn"+(this.tool===c?" active":""),textContent:c==="point"?"Точка":"Контур",onclick:()=>(this.tool=c,this.draft=[],this.cursor=null,this.render())}))),J("div",{class:"ann-row"},J("label",{},"Автор ",J("input",{id:"annAuthor",type:"text",value:this.author,placeholder:"ФИО эксперта",onchange:c=>(this.author=c.target.value,An.set("sonolab.author",this.author))}))),J("div",{class:"ann-row"},J("label",{},"Структура ",n),J("span",{class:"sw big",style:`background:${this.structure(this.selectedStructure).color}`})),this.frameId===null?J("p",{class:"ann-warn"},"Датчик вне подготовленной области — поставьте его на проход."):J("p",{class:"ann-note"},`Текущий кадр: № ${this.frameId}`),r,i&&He(i)==="point"?J("div",{class:"ann-row"},J("span",{},`Выбрано: ${this.structure(i.structureId).name} (${i.x.toFixed(0)}, ${i.y.toFixed(0)})`),J("label",{},"допуск ",J("input",{type:"number",min:"4",max:"120",value:String(i.tolerancePx),style:"width:4.5em",onchange:c=>(this.local.setTolerance(this.frameId,i.id,Number(c.target.value)),this.saveLocal(),this.render())})," пикс."),J("button",{type:"button",textContent:"Удалить точку",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):i?J("div",{class:"ann-row"},J("span",{},`Выбран контур: ${this.structure(i.structureId).name}, ${i.points?.length??0} вершин`),J("button",{type:"button",id:"delContour",textContent:"Удалить контур",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):null,this.frameMarksInfo(t),J("div",{class:"ann-row"},J("button",{type:"button",id:"annVerify",disabled:this.frameId===null||!this.local.marks(this.frameId).length||!this.author.trim(),textContent:"Кадр проверен",onclick:()=>(this.local.setStatus(this.frameId,"verified",this.author.trim()),this.saveLocal(),this.render())}),J("button",{type:"button",disabled:this.frameId===null||o===void 0||!this.author.trim(),textContent:o===void 0?"Копировать с размеченного кадра":`Копировать с кадра № ${o}`,title:"Перенесённые точки помечаются как черновик и требуют проверки",onclick:()=>(this.message=`Скопировано точек: ${this.local.copyFrom(o,this.frameId,this.author.trim())} — проверьте их положение.`,this.saveLocal(),this.render())})),a.length?J("div",{class:"ann-frames"},"Размеченные кадры: ",...a.map(c=>J("button",{type:"button",class:"chip"+(c===this.frameId?" active":""),textContent:String(c),onclick:()=>this.d.goToFrame(c)}))):null,J("div",{class:"ann-row"},J("button",{type:"button",id:"annExport",disabled:!a.length,textContent:"Экспорт JSON",onclick:()=>so(`annotations_${t.caseId}_v${t.version}.json`,JSON.stringify(t,null,1),"application/json")}),J("button",{type:"button",textContent:"Импорт JSON",onclick:()=>l.click()}),l,J("button",{type:"button",class:"danger",disabled:!a.length,textContent:"Очистить черновик",onclick:()=>{confirm("Удалить всю локальную разметку в этом браузере?")&&(this.local=new zr(Ah(this.d.manifest.caseId,this.d.manifest.dataVersion)),this.saveLocal(),this.render())}})),this.message?J("p",{class:"ann-msg"},this.message):null,this.sourceLine(a.length?t:null,"local"),J("p",{class:"ann-note"},"Разметка хранится в этом браузере. Чтобы сделать её общей для всех учеников, экспортируйте JSON и передайте его для публикации с приложением."))}renderTrain(){const t=[["local",this.hasLocal?this.local.set:null],["published",this.published]];if(!this.session){const o=this.trainSource==="local"?this.hasLocal?this.local.set:null:this.published,l=o?Ch(o,{onlyVerified:this.onlyVerified,seed:1,mode:this.taskMode}).length:0;return J("div",{class:"ann"},J("p",{class:"ann-note"},`Тренировка: на кадре нужно отметить указанную структуру. Щелчок засчитывается в радиусе допуска эталонной точки или внутри эталонного контура; обводка — при совпадении с эталоном не ниже ${hc} по коэффициенту Дайса.`),J("div",{class:"ann-row"},J("label",{},"Ученик ",J("input",{id:"trStudent",type:"text",value:this.student,placeholder:"Имя",onchange:c=>(this.student=c.target.value,An.set("sonolab.student",this.student))}))),J("div",{class:"ann-row"},J("label",{},"Эталон ",J("select",{id:"trSource",onchange:c=>(this.trainSource=c.target.value,this.render())},...t.map(([c,h])=>J("option",{value:c,disabled:!h,selected:this.trainSource===c,textContent:c==="local"?`локальный${h?` v${h.version}`:" — нет"}`:`опубликованный${h?` v${h.version}`:" — нет"}`})))),J("label",{class:"chk"},J("input",{type:"checkbox",checked:this.onlyVerified,onchange:c=>(this.onlyVerified=c.target.checked,this.render())}),"только проверенные")),J("div",{class:"ann-row"},J("label",{},"Задания ",J("select",{id:"trMode",onchange:c=>(this.taskMode=c.target.value,this.render())},...[["both","точки — щелчком, контуры — обводкой"],["point","только щелчком"],["contour","только обводкой"]].map(([c,h])=>J("option",{value:c,selected:this.taskMode===c,textContent:h}))))),J("p",{class:"ann-note"},l?`Доступно заданий: ${l}.`:"Нет эталонных точек для заданий. Эксперт должен разметить кадры в режиме «Эксперт»."),J("button",{type:"button",id:"trStart",class:"primary",disabled:!l,textContent:"Начать тренировку",onclick:()=>this.startSession(o)}),this.history())}if(this.taskIndex>=this.tasks.length)return this.renderSummary();const n=this.tasks[this.taskIndex],i=this.structure(n.structureId),r=this.frameId===n.frameId,a=this.feedback;return J("div",{class:"ann"},J("p",{class:"task-title",dataset:{testid:"task"}},`Задание ${this.taskIndex+1} из ${this.tasks.length}: ${n.answer==="contour"?"обведите":"отметьте"} `,J("b",{},`«${i.name}»`),` (${wh[i.class]})`),!r&&!a?J("div",{class:"ann-row"},J("span",{class:"ann-warn"},`Задание на кадре № ${n.frameId}.`),J("button",{type:"button",textContent:"К кадру задания",onclick:()=>this.d.goToFrame(n.frameId)})):null,a?J("p",{class:a.hit?"fb ok":"fb bad",dataset:{testid:"feedback"}},a.click===null?"Пропущено. Эталон показан на кадре.":n.answer==="contour"?`${a.hit?"Верно":"Неточно"}. Совпадение с эталоном (Дайс) ${Vr(a.dice)} при пороге ${hc}; смещение центра ${ci(a.errorPx)}`:He(n.reference)==="contour"?a.hit?"Верно: щелчок внутри эталонного контура.":`Мимо: до границы эталонного контура ${ci(a.errorPx)}.`:a.hit?`Верно. Ошибка ${ci(a.errorPx)} (допуск ${n.reference.tolerancePx}).`:`Мимо. Ошибка ${ci(a.errorPx)} при допуске ${n.reference.tolerancePx} пикс. Эталон показан на кадре.`):r?J("p",{class:"ann-note"},n.answer==="contour"?`Обведите структуру щелчками по границе и замкните контур (щелчок по первой вершине или Enter). Вершин: ${this.draft.length}.`:"Щёлкните по структуре на УЗИ-кадре."):null,J("div",{class:"ann-row"},a?J("button",{type:"button",id:"trNext",class:"primary",textContent:this.taskIndex+1<this.tasks.length?"Следующее задание":"Итоги",onclick:()=>this.nextTask()}):J("span",{class:"ann-row"},n.answer==="contour"?J("button",{type:"button",id:"trDone",class:"primary",disabled:this.draft.length<3,textContent:"Готово",onclick:()=>this.closeDraft()}):null,n.answer==="contour"&&this.draft.length?J("button",{type:"button",textContent:"Сбросить обводку",onclick:()=>this.cancelDraft()}):null,J("button",{type:"button",id:"trSkip",textContent:"Пропустить",onclick:()=>this.record(n,null,null,!1,null,null)})),J("button",{type:"button",textContent:"Завершить",onclick:()=>(this.taskIndex=this.tasks.length,this.feedback=null,this.finish())})),n.reference.status!=="verified"?J("p",{class:"ann-note"},"Эталон этого задания — черновик, не проверен экспертом."):null)}startSession(t){this.tasks=Ch(t,{onlyVerified:this.onlyVerified,seed:Date.now()&4294967295,mode:this.taskMode}),this.session={schema:"sonolab.training/1",caseId:t.caseId,dataVersion:t.dataVersion,annotationVersion:t.version,annotationSource:this.trainSource,student:this.student.trim()||"без имени",startedAt:new Date().toISOString(),attempts:[]},this.taskIndex=0,this.beginTask()}beginTask(){this.feedback=null;const t=this.tasks[this.taskIndex];t&&this.d.goToFrame(t.frameId),this.taskStarted=performance.now(),this.render()}nextTask(){this.taskIndex++,this.taskIndex>=this.tasks.length?this.finish():this.beginTask()}finish(){if(!this.session)return;this.session.finishedAt=new Date().toISOString();const t=`sonolab.training.${this.d.manifest.caseId}`;let e=[];try{e=JSON.parse(An.get(t)??"[]")}catch{e=[]}e.push(this.session),An.set(t,JSON.stringify(e.slice(-50))),this.feedback=null,this.render()}renderSummary(){const t=this.session,e=Ph(t.attempts);return J("div",{class:"ann",dataset:{testid:"summary"}},J("p",{class:"task-title"},`Итоги: ${e.hits} из ${e.total} (${Math.round(e.hitRate*100)} %)`),J("p",{class:"ann-note"},`Щелчки: средняя ошибка ${ci(e.meanErrorPx)}, медиана ${ci(e.medianErrorPx)}. Обводки: средний Дайс ${Vr(e.meanDice)}. Пропущено ${e.skipped}.`),J("table",{class:"ann-table"},J("thead",{},J("tr",{},J("th",{},"Структура"),J("th",{},"Верно"),J("th",{},"Ср. ошибка"),J("th",{},"Ср. Дайс"))),J("tbody",{},...e.byStructure.map(n=>J("tr",{},J("td",{},n.name),J("td",{},`${n.hits}/${n.total}`),J("td",{},ci(n.meanErrorPx)),J("td",{},Vr(n.meanDice)))))),J("div",{class:"ann-row"},J("button",{type:"button",textContent:"Журнал CSV",onclick:()=>so(`training_${t.student}_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.csv`,"\uFEFF"+wy(t),"text/csv")}),J("button",{type:"button",textContent:"Журнал JSON",onclick:()=>so(`training_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.json`,JSON.stringify(t,null,1),"application/json")}),J("button",{type:"button",id:"trAgain",class:"primary",textContent:"Новая тренировка",onclick:()=>(this.session=null,this.render())})))}history(){let t=[];try{t=JSON.parse(An.get(`sonolab.training.${this.d.manifest.caseId}`)??"[]")}catch{t=[]}return t.length?J("details",{class:"ann-hist"},J("summary",{},`Прошлые тренировки (${t.length})`),J("ul",{class:"ann-list"},...t.slice(-10).reverse().map(e=>{const n=Ph(e.attempts);return J("li",{},`${e.startedAt.slice(0,16).replace("T"," ")} · ${e.student} · ${n.hits}/${n.total} · ср. ${ci(n.meanErrorPx)}${n.meanDice!==null?` · Дайс ${Vr(n.meanDice)}`:""}`)}))):null}debugState(){return{mode:this.mode,frameId:this.frameId,localVersion:this.local.set.version,localFrames:this.local.framesWithMarks(),marksOnFrame:this.frameId===null?[]:this.local.marks(this.frameId).map(t=>({id:t.id,s:t.structureId,kind:He(t),x:t.x,y:t.y,points:t.points,status:t.status})),draft:this.draft.length,task:this.session&&this.tasks[this.taskIndex]?{i:this.taskIndex,frameId:this.tasks[this.taskIndex].frameId,structureId:this.tasks[this.taskIndex].structureId,answer:this.tasks[this.taskIndex].answer,ref:{x:this.tasks[this.taskIndex].reference.x,y:this.tasks[this.taskIndex].reference.y,points:this.tasks[this.taskIndex].reference.points??null}}:null,attempts:this.session?.attempts??[]}}imageToScreen(t,e){return this.overlay.toScreen(t,e)}}function Yi(s){const t=s.ru??s.name;return s.side==="mid"?t:`${t} (${s.side==="right"?"справа":"слева"})`}function Ry(s,t){const[e,n,i]=s.quant.min,[r,a,o]=s.quant.scale,l=s.structures.map((c,h)=>{const u={index:h,id:c.id,name:c.name,ru:c.ru,cat:c.cat,sub:c.sub,side:c.side,region:c.region,kind:c.kind,bbox:c.bbox,cartilage:/cartilage|meniscus|disc/i.test(c.name)};if(c.kind==="mesh"){const d=new Uint16Array(t,c.voff,c.nv*3),f=new Float32Array(c.nv*3);for(let x=0;x<c.nv;x++)f[x*3]=d[x*3]*r+e,f[x*3+1]=d[x*3+1]*a+n,f[x*3+2]=d[x*3+2]*o+i;u.pos=f,u.idx=c.itype==="u32"?new Uint32Array(t,c.toff,c.nt*3):new Uint16Array(t,c.toff,c.nt*3)}else u.lines=c.lines.map(({off:d,n:f})=>{const x=new Uint16Array(t,d,f*4),g=new Float32Array(f*4);for(let m=0;m<f;m++)g[m*4]=x[m*4]*r+e,g[m*4+1]=x[m*4+1]*a+n,g[m*4+2]=x[m*4+2]*o+i,g[m*4+3]=x[m*4+3]/1e5;return g});return u});return{meta:s,structures:l}}async function Cy(s,t){const e=fetch(new URL("models/anatomy.json",s)).then(h=>{if(!h.ok)throw new Error(`Анатомия: HTTP ${h.status}`);return h.json()}),n=await fetch(new URL("models/anatomy.bin",s));if(!n.ok||!n.body)throw new Error(`Анатомия (данные): HTTP ${n.status}`);const i=Number(n.headers.get("content-length"))||0,r=n.body.getReader(),a=[];let o=0;for(;;){const{done:h,value:u}=await r.read();if(h)break;a.push(u),o+=u.length,i&&t&&t(o/i)}const l=new Uint8Array(o);let c=0;for(const h of a)l.set(h,c),c+=h.length;return Ry(await e,l.buffer)}const ir=(s,t,e)=>s.structures.find(n=>n.name===t&&(e===void 0||n.side===e));function Xu(s){const t=s.pos;if(!t)return[];const e=[];for(let n=0;n<t.length;n+=3)e.push([t[n],t[n+1],t[n+2]]);return e}function oa(s,t){const e=ir(s,`Vertebra ${t}`);if(!e)return null;const n=Xu(e);if(!n.length)return null;let i=null,r=n[0],a=n[0];for(const o of n)Math.abs(o[2])<.006&&(!i||o[1]<i[1])&&(i=o),o[2]<r[2]&&(r=o),o[2]>a[2]&&(a=o);return i?{spinous:i,tpR:r,tpL:a}:null}function Py(s,t){const e=ir(s,`Intervertebral disc ${t}`);if(!e)return null;const[n,i]=e.bbox;return[(n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2]}function Ly(s,t,e){const n=oa(s,t),i=oa(s,e),r=ir(s,`Vertebra ${t}`),a=ir(s,`Vertebra ${e}`);if(!n||!i||!r||!a)return null;const o=Math.min(n.spinous[0],i.spinous[0]),l=Math.max(n.spinous[0],i.spinous[0]);let c=null;for(let h=o;h<=l+1e-9;h+=.001){const u=[h,-.3,5e-4],d=[0,1,0],f=Math.min(Ih(r,u,d)[0]??1/0,Ih(a,u,d)[0]??1/0);(!c||f>c[1])&&(c=[h,f])}return c?c[0]:null}function Ih(s,t,e){const n=s.pos,i=s.idx;if(!n||!i)return[];const r=[],a=t[0]+13e-7,o=t[1]+7e-7,l=t[2]-9e-7;for(let c=0;c<i.length;c+=3){const h=i[c]*3,u=i[c+1]*3,d=i[c+2]*3,f=n[u]-n[h],x=n[u+1]-n[h+1],g=n[u+2]-n[h+2],m=n[d]-n[h],p=n[d+1]-n[h+1],v=n[d+2]-n[h+2],_=e[1]*v-e[2]*p,y=e[2]*m-e[0]*v,T=e[0]*p-e[1]*m,w=f*_+x*y+g*T;if(Math.abs(w)<1e-14)continue;const C=1/w,I=a-n[h],M=o-n[h+1],b=l-n[h+2],R=(I*_+M*y+b*T)*C;if(R<0||R>1)continue;const N=M*g-b*x,U=b*f-I*g,V=I*x-M*f,O=(e[0]*N+e[1]*U+e[2]*V)*C;if(O<0||R+O>1)continue;const G=(m*N+p*U+v*V)*C;G>0&&r.push(G)}return r.sort((c,h)=>c-h)}function Iy(s){const t={},e=[0,-1,0],n=c=>[c.tpR[0],c.tpR[1],c.spinous[2]+.8*(c.tpR[2]-c.spinous[2])],i=oa(s,"T5");if(i){const c=n(i);t.ESP_T5R={ru:"ESP, T5 справа (продольно)",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:0,depthCm:5,expect:["Vertebra T5","Rhomboid major muscle","Ascending part of trapezius muscle","Pleura"]}}const r=oa(s,"L4");if(r){const c=n(r);t.ESP_L4R={ru:"ESP, L4 справа (продольно)",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:0,depthCm:6,expect:["Vertebra L4","Iliocostalis lumborum muscle","Psoas major"]}}const a=Py(s,"L3-L4"),o=Ly(s,"L3","L4");if(a&&o!==null){const c=[o,a[1]-.03,-.02];t.PSO_L34R={ru:"Нейроаксиальный: парамедианный сагиттальный косой L3–L4",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:-10,depthCm:8,expect:["Vertebra L3","Vertebra L4","Cauda equina"]};const h=[o,a[1]-.03,0];t.TLI_L34={ru:"Нейроаксиальный: поперечный междужковый L3–L4",x:h[0],z:h[2],point:h,dir:e,rotateDeg:0,tiltDeg:0,depthCm:8,expect:["Interspinous ligaments","Ligamenta flava","Cauda equina"]}}const l=ir(s,"Quadratus lumborum muscle","right");if(l&&a){let c=null;for(const h of Xu(l))Math.abs(h[0]-a[0])<.012&&(!c||h[2]<c[2])&&(c=h);if(c){const h=[0,-Math.SQRT1_2,-Math.SQRT1_2];t.QL2_R={ru:"Задний QL (QL2), справа, заднебоковой доступ",x:c[0],z:c[2],point:c,dir:h,rotateDeg:0,tiltDeg:0,depthCm:6,expect:["Quadratus lumborum muscle","Psoas major","Latissimus dorsi muscle"]}}}return t}const Ti=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Jr=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],_n=s=>{const t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]},Hr=(s,t,e)=>{const n=Math.cos(e),i=Math.sin(e),r=Jr(t,s),a=Ti(t,s)*(1-n);return[s[0]*n+r[0]*i+t[0]*a,s[1]*n+r[1]*i+t[1]*a,s[2]*n+r[2]*i+t[2]*a]};function Dy(s,t,e,n,i,r,a=0){const o=_n(t);let l=_n([e[0]-o[0]*Ti(e,o),e[1]-o[1]*Ti(e,o),e[2]-o[2]*Ti(e,o)]);isFinite(l[0])||(l=_n(Jr(o,[1,0,0])));let c=_n(Jr(o,l));c=_n(Hr(c,o,n*Math.PI/180));let h=[-o[0],-o[1],-o[2]];if(h=_n(Hr(h,c,i*Math.PI/180)),a){const u=_n(Jr(c,h)),d=a*Math.PI/180;c=_n(Hr(c,u,d)),h=_n(Hr(h,u,d))}return{origin:s,lateral:c,depth:h,...r}}function Ny(s,t,e){let n=1/0,i=[1,0,0];const r=e?_n(e):null;for(const[a,o]of t){const l=[o[0]-a[0],o[1]-a[1],o[2]-a[2]],c=Ti(l,l)||1;if(r&&Math.abs(Ti(l,r))/Math.sqrt(c)>.8)continue;const h=Math.max(0,Math.min(1,Ti([s[0]-a[0],s[1]-a[1],s[2]-a[2]],l)/c)),u=Math.hypot(s[0]-a[0]-l[0]*h,s[1]-a[1]-l[1]*h,s[2]-a[2]-l[2]*h);u<n&&(n=u,i=_n(l))}return i}const Uy=/\bfascia\b|\bseptum\b|aponeuros|retinacul|membrane|capsule|sheath|bursa|^Pleura$/i;function qu(s){return s.kind!=="mesh"||s.cat==="skin"||s.cat==="bone"?null:/^Platysma$/i.test(s.name)?{thickMm:1.5}:Uy.test(s.name)?/bursa/i.test(s.name)?{thickMm:.5}:/^Pleura$/i.test(s.name)?{thickMm:.4}:{thickMm:.6}:null}function Fy(s){if(s.cat!=="organ")return null;const t=s.name;return/lobe of (right|left) lung|\blung\b|bronch|^Pleura$/i.test(t)?{kind:1,wallMm:0}:/^trachea$|laryngopharynx/i.test(t)?{kind:2,wallMm:2}:/\b(colon|jejunum|ileum|caecum|cecum|duodenum|stomach|rectum)\b|vermiform appendix/i.test(t)?{kind:3,wallMm:2.5}:null}const Gr=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],$u=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Oy={skin:0,organ:1,lymphoid:1,muscle:2,joint:3,bone:4,vessel:5,nerve:6};function Dh(s){let t=Oy[s.cat]??1;return s.cat==="muscle"&&s.sub==="tendon"&&(t=3),s.cat==="muscle"&&s.sub==="aponeurosis"&&(t=2.1),t*10+(s.kind==="tube"?5:0)}function ky(s,t){const e=$u(t.lateral,t.depth),n=t.origin,i=[];for(const l of[-t.widthM/2,t.widthM/2])for(const c of[0,t.depthM])i.push([n[0]+t.lateral[0]*l+t.depth[0]*c,n[1]+t.lateral[1]*l+t.depth[1]*c,n[2]+t.lateral[2]*l+t.depth[2]*c]);const r=[0,1,2].map(l=>Math.min(...i.map(c=>c[l]))-.002),a=[0,1,2].map(l=>Math.max(...i.map(c=>c[l]))+.002),o=[];for(const l of s.structures){const[c,h]=l.bbox;if(h[0]<r[0]||c[0]>a[0]||h[1]<r[1]||c[1]>a[1]||h[2]<r[2]||c[2]>a[2])continue;let u=!1,d=!1;for(let f=0;f<8;f++){const x=[f&1?h[0]:c[0],f&2?h[1]:c[1],f&4?h[2]:c[2]],g=(x[0]-n[0])*e[0]+(x[1]-n[1])*e[1]+(x[2]-n[2])*e[2];g>=0&&(u=!0),g<=0&&(d=!0)}u&&d&&o.push(l)}return o.sort((l,c)=>Dh(l)-Dh(c))}function By(s,t,e,n,i,r){if(!s.length)return!1;let a=!1;const o=s.length/4;let l=1/0,c=-1/0;for(let g=0;g<o;g++)l=Math.min(l,s[g*4+1],s[g*4+3]),c=Math.max(c,s[g*4+1],s[g*4+3]);const h=Math.max(0,Math.floor(l)),u=Math.min(e-1,Math.ceil(c)),d=[],f=[];let x=0;for(let g=h;g<=u;g++){const m=g+.5;d.length=0;for(let v=0;v<o;v++){const _=s[v*4],y=s[v*4+1],T=s[v*4+2],w=s[v*4+3];y>m!=w>m&&d.push(_+(m-y)*(T-_)/(w-y))}d.sort((v,_)=>v-_);let p=0;for(let v=0;v<d.length;v++)(p===0||d[v]-d[p-1]>1e-4)&&(d[p++]=d[v]);if(d.length=p,d.length%2===1){if(f.length===0||++x>3)continue;d.length=0;for(const v of f)d.push(v)}else{x=0,f.length=0;for(const v of d)f.push(v)}if(!(d.length<2))for(let v=0;v+1<d.length;v+=2){const _=Math.max(0,Math.ceil(d[v]-.5)),y=Math.min(t-1,Math.floor(d[v+1]-.5));for(let T=_;T<=y;T++){const w=g*t+T;r&&r[w]===0||(n[w]=i,a=!0)}}}return a}function zy(s,t,e,n,i,r,a){let o=!1;const l=Math.ceil(r),c=Math.ceil(a);for(let h=0;h<s.length;h+=4){const u=s[h],d=s[h+1],f=s[h+2],x=s[h+3],g=Math.hypot(f-u,x-d),m=Math.max(1,Math.ceil(g*2));for(let p=0;p<=m;p++){const v=u+(f-u)*p/m,_=d+(x-d)*p/m;if(v<-r||_<-a||v>t+r||_>e+a)continue;const y=Math.max(0,Math.floor(v-l)),T=Math.min(t-1,Math.floor(v+l)),w=Math.max(0,Math.floor(_-c)),C=Math.min(e-1,Math.floor(_+c));for(let I=w;I<=C;I++){const M=(I+.5-_)/a;for(let b=y;b<=T;b++){const R=(b+.5-v)/r;if(R*R+M*M>1)continue;const N=I*t+b;n[N]===1&&(n[N]=i,o=!0)}}}}return o}function Vy(s,t,e,n,i){const r=new Map,a=d=>{if(d<2)return null;let f=r.get(d);return f===void 0&&r.set(d,f=Fy(s.structures[d-2])),f},o=d=>d>=2&&a(d)?.kind===1&&!/^Pleura$/i.test(s.structures[d-2].name),l=new Int32Array(e).fill(-1),c=new Uint8Array(e);let h=!1;const u=Math.round(10*i);for(let d=0;d<e;d++)for(let f=0;f<n;f++){const x=t[f*e+d],g=a(x);if(!g)continue;let m=0;for(;f+m<n&&t[(f+m)*e+d]===x;)m++;const p=Math.round(g.wallMm*i);let v=x;if(g.kind===1){if(!o(x)){let y=0;for(let T=f+1;T<Math.min(n,f+u);T++)o(t[T*e+d])&&(y=t[T*e+d],T=n);if(!y){f+=m-1;continue}v=y}}else if(m<p+i){f+=m-1;continue}const _=f+p;if(_>=n)break;l[d]=_,c[d]=g.kind,h=!0;for(let y=_;y<n;y++){const T=y*e+d;t[T]>=1&&(t[T]=y<f+m?x:v)}break}return h?{start:l,kind:c}:void 0}function Hy(s,t){const{W:e,H:n}=t,i=new Int32Array(e*n),r=$u(t.lateral,t.depth),a=t.origin,o=e/t.widthM,l=n/t.depthM,c=[],h=[];let u;const d=p=>{const v=[p[0]-a[0],p[1]-a[1],p[2]-a[2]];return[(Gr(v,t.lateral)+t.widthM/2)*o,Gr(v,t.depth)*l]};for(const p of ky(s,t))if(p.kind==="mesh"){const v=p.pos,_=p.idx,y=[],T=I=>(v[I*3]-a[0])*r[0]+(v[I*3+1]-a[1])*r[1]+(v[I*3+2]-a[2])*r[2];for(let I=0;I<_.length;I+=3){const M=_[I],b=_[I+1],R=_[I+2],N=T(M),U=T(b),V=T(R);if(N>0&&U>0&&V>0||N<0&&U<0&&V<0)continue;const O=[],G=(j,H,et,K)=>{if(et>0==K>0||et===K)return;const gt=et/(et-K);O.push([v[j*3]+gt*(v[H*3]-v[j*3]),v[j*3+1]+gt*(v[H*3+1]-v[j*3+1]),v[j*3+2]+gt*(v[H*3+2]-v[j*3+2])])};if(G(M,b,N,U),G(b,R,U,V),G(R,M,V,N),O.length===2){const[j,H]=d(O[0]),[et,K]=d(O[1]);y.push(j,H,et,K)}}const w=p.cat==="skin"?1:p.index+2,C=qu(p);C?y.length&&h.push({s:p,segs:y,sh:C}):By(y,e,n,i,w,p.cat==="skin"?null:i)&&c.push(p.index)}else{let v=!1;for(const _ of p.lines)for(let y=0;y+4<_.length;y+=4){const T=[_[y],_[y+1],_[y+2]],w=[_[y+4],_[y+5],_[y+6]],C=_[y+3],I=_[y+7],M=Math.max(C,I),b=(T[0]-a[0])*r[0]+(T[1]-a[1])*r[1]+(T[2]-a[2])*r[2],R=(w[0]-a[0])*r[0]+(w[1]-a[1])*r[1]+(w[2]-a[2])*r[2];if(b>M&&R>M||b<-M&&R<-M)continue;const N=b===R?0:Math.max(0,Math.min(1,(-M-b)/(R-b))),U=b===R?1:Math.max(0,Math.min(1,(M-b)/(R-b))),V=Math.min(N,U),O=Math.max(N,U),G=[T[0]+(w[0]-T[0])*V,T[1]+(w[1]-T[1])*V,T[2]+(w[2]-T[2])*V],j=[T[0]+(w[0]-T[0])*O,T[1]+(w[1]-T[1])*O,T[2]+(w[2]-T[2])*O],[H,et]=d(G),[K,gt]=d(j),z=M*Math.max(o,l)+1,at=Math.max(0,Math.floor(Math.min(H,K)-z)),Tt=Math.min(e-1,Math.ceil(Math.max(H,K)+z)),Kt=Math.max(0,Math.floor(Math.min(et,gt)-z)),Y=Math.min(n-1,Math.ceil(Math.max(et,gt)+z));if(at>Tt||Kt>Y)continue;const Z=[w[0]-T[0],w[1]-T[1],w[2]-T[2]],nt=Gr(Z,Z)||1e-12;for(let ut=Kt;ut<=Y;ut++){const lt=(ut+.5)/l;for(let mt=at;mt<=Tt;mt++){const Ot=ut*e+mt;if(i[Ot]===0)continue;const _t=(mt+.5)/o-t.widthM/2,qt=[a[0]+t.lateral[0]*_t+t.depth[0]*lt-T[0],a[1]+t.lateral[1]*_t+t.depth[1]*lt-T[1],a[2]+t.lateral[2]*_t+t.depth[2]*lt-T[2]],L=Math.max(0,Math.min(1,Gr(qt,Z)/nt)),Dt=qt[0]-Z[0]*L,kt=qt[1]-Z[1]*L,Zt=qt[2]-Z[2]*L,yt=C+(I-C)*L;if(Dt*Dt+kt*kt+Zt*Zt<=yt*yt&&(i[Ot]=p.index+2,v=!0,p.cat==="nerve")){u||(u=new Float32Array(e*n*3));const ie=Math.sqrt(nt);u[Ot*3]=Z[0]/ie,u[Ot*3+1]=Z[1]/ie,u[Ot*3+2]=Z[2]/ie}}}}v&&c.push(p.index)}for(const{s:p,segs:v,sh:_}of h){const y=Math.max(.6,_.thickMm/2*(o/1e3)),T=Math.max(.6,_.thickMm/2*(l/1e3));zy(v,e,n,i,p.index+2,y,T)&&c.push(p.index)}const f=Vy(s,i,e,n,l/1e3),x=new Map;for(let p=0;p<i.length;p++)i[p]>=2&&x.set(i[p],1);const g=c.filter((p,v)=>x.has(p+2)&&c.indexOf(p)===v),m={W:e,H:n,label:i,present:g};return f&&(m.air=f),u&&(m.fiberDir=u),m}function ro(s,t,e){const n=Math.floor(t),i=Math.floor(e);if(n<0||i<0||n>=s.W||i>=s.H)return null;const r=s.label[i*s.W+n];return r>=2?r-2:null}const ge={fat:{echo:.12,atten:.012,z:1.38,tex:"fat"},muscle:{echo:.2,atten:.02,z:1.7,tex:"fiber"},tendon:{echo:.65,atten:.03,z:1.9,tex:"fiber"},joint:{echo:.55,atten:.03,z:1.85,tex:"fiber"},cartilage:{echo:.02,atten:.006,z:1.6,tex:"cartilage"},hyaline:{echo:.07,atten:.02,z:1.6,tex:"speckle"},bone:{echo:2,atten:.6,z:7.8,tex:"bone"},artery:{echo:0,atten:.0015,z:1.66,tex:"fluid"},vein:{echo:.01,atten:.0015,z:1.66,tex:"fluid"},nerve:{echo:.5,atten:.02,z:1.65,tex:"nerve"},organ:{echo:.3,atten:.016,z:1.65,tex:"speckle"},skin:{echo:.8},fascia:{echo:.7,atten:.03,z:1.9,tex:"fascia"},bursa:{echo:.05,atten:.005,z:1.6,tex:"cartilage"}};function Gy(s,t,e){return s.tex==="bone"||t.tex==="bone"?0:s.tex==="fluid"||t.tex==="fluid"?.9:s.tex==="nerve"||t.tex==="nerve"?1:s.tex==="fascia"||t.tex==="fascia"?.85:s===ge.hyaline||t===ge.hyaline?.9:s.tex==="fat"||t.tex==="fat"?1.1:s===ge.tendon||t===ge.tendon?.9:e?.8:.6}function Wy(s){if(!s)return ge.fat;if(qu(s)&&!/^Platysma$/i.test(s.name))return/bursa/i.test(s.name)?ge.bursa:ge.fascia;switch(s.cat){case"bone":return s.cartilage?ge.hyaline:ge.bone;case"joint":return s.cartilage?ge.cartilage:ge.joint;case"muscle":return s.sub==="tendon"||s.sub==="aponeurosis"?ge.tendon:ge.muscle;case"vessel":return s.sub==="vein"?ge.vein:s.kind==="mesh"&&/heart|atrium|ventricle/i.test(s.name)?ge.organ:ge.artery;case"nerve":return ge.nerve;default:return/^trachea$/i.test(s.name)?ge.hyaline:ge.organ}}function ju(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function qn(s,t,e,n){const i=s/n,r=t/n,a=e/n,o=Math.floor(i),l=Math.floor(r),c=Math.floor(a),h=i-o,u=r-l,d=a-c;let f=0;for(let x=0;x<8;x++){const g=x&1,m=x>>1&1,p=x>>2&1,v=(g?h:1-h)*(m?u:1-u)*(p?d:1-d);f+=v*ju(o+g,l+m,c+p)}return f}const Nh=new WeakMap;function Xy(s){const t=s.length/3;if(t<8)return null;let e=0,n=0,i=0;for(let f=0;f<s.length;f+=3)e+=s[f],n+=s[f+1],i+=s[f+2];e/=t,n/=t,i/=t;let r=0,a=0,o=0,l=0,c=0,h=0;for(let f=0;f<s.length;f+=3){const x=s[f]-e,g=s[f+1]-n,m=s[f+2]-i;r+=x*x,a+=x*g,o+=x*m,l+=g*g,c+=g*m,h+=m*m}let u=[1,.5,.25];for(let f=0;f<30;f++){const x=[r*u[0]+a*u[1]+o*u[2],a*u[0]+l*u[1]+c*u[2],o*u[0]+c*u[1]+h*u[2]],g=Math.hypot(x[0],x[1],x[2]);if(!(g>0))return null;u=[x[0]/g,x[1]/g,x[2]/g]}return r*u[0]*u[0]+l*u[1]*u[1]+h*u[2]*u[2]+2*(a*u[0]*u[1]+o*u[0]*u[2]+c*u[1]*u[2])>.45*(r+l+h)?u:null}function qy(s){let t=Nh.get(s);if(t)return t;const e=Wy(s);let n=0;s.cat==="nerve"&&(/division of .*trunk/i.test(s.name)?n=2:/root|trunk|spinal nerve/i.test(s.name)&&!/cutaneous/i.test(s.name)&&(n=1));const i=s.kind==="mesh"&&s.pos&&(e===ge.muscle||e===ge.tendon)?Xy(s.pos):null;return t={tissue:e,axis:i,nerve:n},Nh.set(s,t),t}const Yu={gain:1,dynamicRange:55};function $y(s,t,e,n,i,r,a){const o=u=>{if(u<0||u>=t)return null;for(let d=0;d<=8;d++)for(const f of d===0?[i]:[i-d,i+d])if(!(f<1||f>=e)&&s[f*t+u]===a&&s[(f-1)*t+u]===r)return f;return null},l=o(n-3),c=o(n+3);if(l===null&&c===null)return .35;const h=l!==null&&c!==null?(c-l)/6:l!==null?(i-l)/3:(c-i)/3;return 1/Math.sqrt(1+h*h)}const jy=[null,{line:1.8,floor:.02,rev:.7,q:.55},{line:1.6,floor:.03,rev:.6,q:.5},{line:1.5,floor:.1,rev:.45,q:.5}],Ku=.16,Si=Ku/1e3,Yy=.8;let sr=0,rr=0;function Zu(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),n=Math.imul(n^n>>>16,-2048144777),(n^n>>>13)>>>0}function ca(s,t,e){const n=s/Si,i=t/Si,r=e/Si,a=Math.floor(n),o=Math.floor(i),l=Math.floor(r);let c=n-a,h=i-o,u=r-l;c=c*c*(3-2*c),h=h*h*(3-2*h),u=u*u*(3-2*u);let d=0,f=0,x=0;for(let m=0;m<8;m++){const p=m&1,v=m>>1&1,_=m>>2&1,y=(p?c:1-c)*(v?h:1-h)*(_?u:1-u),T=Zu(a+p,o+v,l+_);d+=y*((T&65535)/32767.5-1),f+=y*((T>>>16)/32767.5-1),x+=y*y}const g=Math.sqrt(1.5/Math.max(x,1e-6));sr=d*g,rr=f*g}let ao=null;function Ky(){if(ao)return ao;const s=2e3,t=new Float64Array(41),e=[],n=(i,r,a)=>Zu(i,r,a)/4294967296;for(let i=0;i<s;i++){const r=Math.acos(2*n(i,14,9)-1),a=2*Math.PI*n(i,15,1);e.push(n(i,11,3)*50*Si,n(i,12,5)*50*Si,n(i,13,7)*50*Si,Math.sin(r)*Math.cos(a),Math.sin(r)*Math.sin(a),Math.cos(r))}for(let i=0;i<40;i++){const r=i*.1*Si;let a=0;for(let o=0;o<s;o++){const l=o*6;ca(e[l],e[l+1],e[l+2]);const c=sr,h=rr;ca(e[l]+e[l+3]*r,e[l+1]+e[l+4]*r,e[l+2]+e[l+5]*r),a+=c*sr+h*rr}t[i]=i===0?1:Math.max(0,a/s)}return t[40]=0,ao=t}function Zy(s){const t=Ky(),e=s*10;if(e>=40)return 0;const n=Math.floor(e);return t[n]+(t[n+1]-t[n])*(e-n)}function Uh(s,t){const e=Math.min(t,Math.max(1,Math.ceil(2.5*s))),n=new Float64Array(2*e+1);let i=0;for(let r=-e;r<=e;r++)i+=n[r+e]=Math.exp(-r*r/(2*s*s));for(let r=0;r<n.length;r++)n[r]/=i;return n}function Fh(s){const t=s.length,e=new Float64Array(t);for(let n=0;n<t;n++)for(let i=0;i+n<t;i++)e[n]+=s[i]*s[i+n];return e}const Cs={axialSigmaMm:.12,lateralSigmaFocusMm:.24,focalZoneMm:14,elevationHalfMm:.5};function Jy(s,t,e,n=Yu,i){const{W:r,H:a,label:o}=t,l=new Uint8ClampedArray(r*a),c=new Float32Array(r*a),h=new Float32Array(r*a),u=new Float32Array(r*a),d=new Float32Array(r*a),f=e.depthM*1e3/a,x=e.widthM*1e3/r,g=s.structures.length,m=[],p=nt=>nt<=1||nt-2>=g?null:m[nt]??=qy(s.structures[nt-2]),v=nt=>nt<=1?ge.fat:p(nt).tissue,_=e.origin,y=e.lateral,T=e.depth,w=ge.muscle.atten*.6+ge.fat.atten*.4,C=Math.max(1,Math.round(.35/f)),I=Math.max(1,Math.round(.5/f)),M=1.2/f,b=t.air,R=t.fiberDir,N=Math.min(20,e.depthM*1e3/2),U=Uh(Math.max(.5,Cs.axialSigmaMm/f),6),V=Fh(U),O=[],G=new Float32Array(a),j=new Map;for(let nt=0;nt<a;nt++){const ut=(nt+.5)*f,lt=Cs.lateralSigmaFocusMm*Math.sqrt(1+((ut-N)/Cs.focalZoneMm)**2),mt=Math.round(Math.max(.5,lt/x)*50);let Ot=j.get(mt);if(!Ot){const _t=Uh(mt/50,12),qt=Fh(_t);let L=0;for(let Dt=0;Dt<V.length;Dt++)for(let kt=0;kt<qt.length;kt++){const Zt=Zy(Math.hypot(Dt*f,kt*x)/Ku);Zt<=0||(L+=(Dt?2:1)*(kt?2:1)*V[Dt]*qt[kt]*Zt)}Ot={k:_t,n:1/Math.max(L,1e-6)},j.set(mt,Ot)}O.push(Ot.k),G[nt]=Ot.n*Yy}const H=Math.max(1,Math.round(Cs.elevationHalfMm/f)),et=Math.max(1,Math.round(Cs.elevationHalfMm/x)),K=(nt,ut)=>{if(nt<=0)return ut;const lt=v(nt);return lt.tex==="bone"?ut:lt.echo};for(let nt=0;nt<r;nt++){const ut=((nt+.5)/r-.5)*e.widthM;let lt=1,mt=1,Ot=-1,_t=-1,qt=0,L=0,Dt=1,kt=0,Zt=1,yt=1;const ie=b?b.start[nt]:-1,Ct=ie>=0?jy[b.kind[nt]]:null;for(let At=0;At<a;At++){const A=At*r+nt,S=o[A];if(S===0){Ot=0;continue}_t=_t<0?0:_t+1;const B=(At+.5)/a*e.depthM,$=_[0]+y[0]*ut+T[0]*B,Q=_[1]+y[1]*ut+T[1]*B,W=_[2]+y[2]*ut+T[2]*B,Rt=$*y[0]+Q*y[1]+W*y[2],dt=$-y[0]*Rt*.6,Lt=Q-y[1]*Rt*.6,Et=W-y[2]*Rt*.6;ca($,Q,W);const it=sr,ct=rr;ca($+.0371,Q-.0213,W+.0119);const Bt=sr,Ut=rr,vt=Math.min(3,it*it+ct*ct);let Nt=0,D=0;if(Ct&&At>=ie){const Pt=Math.exp(w*(At+.5)*f);if(At===ie&&(Zt=mt*Dt*yt),At-ie<I){const ke=qn($*1,Q,W,25e-5);D=Ct.line*(.55+.9*ke)*lt*Pt}else{Nt=Ct.floor;const ke=ie+.5;for(let De=2;De<=6;De++){const Ce=At+.5-De*ke;if(Ce>=0&&Ce<I){D=Ct.rev*Math.pow(Ct.q,De-2)*(.75+.5*qn($,Q,W,4e-4));break}if(Ce<0)break}}const me=Math.sqrt(Nt*Zt*G[At]),Oe=Math.sqrt(D*Zt);c[A]=me*it+Oe,h[A]=me*ct,u[A]=me*Bt+Oe,d[A]=me*Ut,Ot=S;continue}const ft=p(S),rt=ft?ft.tissue:ge.fat;let st=rt.echo;switch(rt.tex){case"fiber":{const Pt=ft?.axis;if(Pt){const ae=rt===ge.tendon,me=ae?.08:.12,Oe=$*Pt[0]+Q*Pt[1]+W*Pt[2],ke=$-Pt[0]*Oe*(1-me),De=Q-Pt[1]*Oe*(1-me),Ce=W-Pt[2]*Oe*(1-me),rn=T[0]*Pt[0]+T[1]*Pt[1]+T[2]*Pt[2];if(ae){const fn=qn(ke,De,Ce,28e-5),pn=.18+.82*Math.exp(-(rn*rn)/.03);st=rt.echo*(.45+.9*fn)*pn}else{const fn=qn(ke,De,Ce,45e-5),pn=Math.max(0,Math.min(1,(fn-.62)*7)),kn=.6+.4*(1-rn*rn);st=rt.echo*(.5+.5*fn)+.35*pn*pn*kn}}else{const ae=qn(dt*.3,Lt*.3,Et*.3,55e-5);st*=.45+1.3*ae*ae}break}case"fat":{const Pt=qn(dt,Lt,Et,.0022),ae=qn(dt+3.3,Lt+1.1,Et-2.2,.0011);st=Math.abs(Pt-.5)<.03||Math.abs(ae-.5)<.02?.5:.09;break}case"nerve":{let Pt=$,ae=Q,me=W,Oe=1;if(R&&(R[A*3]!==0||R[A*3+1]!==0||R[A*3+2]!==0)){const Ce=R[A*3],rn=R[A*3+1],fn=R[A*3+2],pn=($*Ce+Q*rn+W*fn)*.9;Pt=$-Ce*pn,ae=Q-rn*pn,me=W-fn*pn;const kn=T[0]*Ce+T[1]*rn+T[2]*fn;Oe=.55+.45*Math.exp(-(kn*kn)/.06)}const ke=qn(Pt,ae,me,32e-5),De=ft.nerve;De===1?st=ke>.8?.35:.05:De===2?st=ke>.65?.08:.38:st=ke>.6?.07:.6,st*=Oe;break}case"fascia":{const Pt=qn(dt,Lt,Et,4e-4);st=rt.echo*(.6+.7*Pt);break}}if(_t<M&&(st=Math.max(st,ge.skin.echo)),rt.tex!=="bone"){const Pt=At-H>=0?o[A-H*r]:0,ae=At+H<a?o[A+H*r]:0,me=nt-et>=0?o[A-et]:0,Oe=nt+et<r?o[A+et]:0;if(Pt>0&&Pt!==S||ae>0&&ae!==S||me>0&&me!==S||Oe>0&&Oe!==S){const ke=(K(Pt,st)+K(ae,st)+K(me,st)+K(Oe,st))/4,De=rt.tex==="fluid"?.15:1/3;st=(1-De)*st+De*ke}}if(Ot>=1&&Ot!==S){const Pt=v(Ot);if(rt.tex==="bone"&&Pt.tex!=="bone")qt=0;else{const ae=$y(o,r,a,nt,At,Ot,S);L=Gy(rt,Pt,rt===Pt)*(.15+.85*ae*ae),qt=C,rt.tex==="fluid"&&Pt.tex!=="fluid"&&ae<.3&&(yt=Math.max(.3,yt*(.55+1.2*ae)))}Pt.tex==="fluid"&&rt.tex!=="fluid"&&kt>0&&(Dt=Math.min(1.6,Dt*Math.min(1.4,1+.04*kt*f)))}rt.tex==="fluid"?kt++:kt=0,Nt=st,qt>0&&(D=L*(.8+.2*vt),Nt*=.5,qt--),rt.tex==="bone"&&(mt>=1?(D=2*(.8+.2*vt),Nt=0):Nt*=.05);const ot=_t*f;ot<6&&(Nt+=.06*Math.exp(-ot/1.8));const tt=Math.exp(w*(At+.5)*f),St=lt*tt*mt*Dt*yt,Ht=Math.sqrt(Nt*St*G[At]),he=Math.sqrt(D*St);c[A]=Ht*it+he,h[A]=Ht*ct,u[A]=Ht*Bt+he,d[A]=Ht*Ut,rt.tex==="bone"&&(mt=Math.min(mt,.04)),lt*=Math.exp(-rt.atten*f),Ot=S}}const gt=new Float32Array(r*a),z=new Float32Array(r*a),at=(U.length-1)/2,Tt=new Float32Array(r*a);for(const nt of[c,h,u,d]){z.fill(0);for(let ut=0;ut<a;ut++){const lt=ut*r;for(let mt=-at;mt<=at;mt++){const Ot=ut+mt<0?0:ut+mt>=a?a-1:ut+mt,_t=U[mt+at],qt=Ot*r;for(let L=0;L<r;L++)z[lt+L]+=_t*nt[qt+L]}}for(let ut=0;ut<a;ut++){const lt=O[ut],mt=(lt.length-1)/2,Ot=ut*r;for(let _t=0;_t<r;_t++){let qt=0;if(_t-mt>=0&&_t+mt<r)for(let L=-mt;L<=mt;L++)qt+=lt[L+mt]*z[Ot+_t+L];else for(let L=-mt;L<=mt;L++){const Dt=_t+L<0?0:_t+L>=r?r-1:_t+L;qt+=lt[L+mt]*z[Ot+Dt]}Tt[Ot+_t]=qt}}for(let ut=0;ut<gt.length;ut++)gt[ut]+=.5*Tt[ut]*Tt[ut]}const Kt=Math.log10(.01),Y=Math.log10(2),Z=70/n.dynamicRange+.5;for(let nt=0;nt<a;nt++)for(let ut=0;ut<r;ut++){const lt=nt*r+ut;if(o[lt]===0){l[lt]=0;continue}const mt=.006*ju(ut,nt,17)*Math.exp(w*(nt+.5)*f),Ot=(gt[lt]+mt)*n.gain,_t=Math.max(0,Math.min(1,(Math.log10(Math.max(Ot,.01))-Kt)/(Y-Kt)));l[lt]=Math.pow(_t,Z)*255}return l}const Oh={nerve:"нерв",vessel:"сосуд",bone:"кость",muscle:"мышца",joint:"связка/сустав",organ:"орган",lymphoid:"орган"},kh={nerve:"#ffd60a",artery:"#ff4d4f",vein:"#4d7cff",bone:"#f0f0f0",muscle:"#d6409f",tendon:"#46a758",joint:"#12a594",organ:"#f76b15",lymphoid:"#f76b15"},oo=s=>kh[s.sub??s.cat]??kh[s.cat]??"#ffffff",Qy=new Set(["nerve","vessel","bone"]),co=6.4;function tM(s){return s.ru??s.name.replace(/ muscle$/i,"")}class eM{constructor(t){this.d=t,this.canvas=document.createElement("canvas"),this.canvas.className="sim-canvas",this.canvas.setAttribute("aria-label","Синтетическое УЗИ-изображение"),this.overlay=document.createElement("canvas"),this.overlay.className="sim-overlay",t.screen.append(this.canvas,this.overlay),this.ctx=this.canvas.getContext("2d"),this.octx=this.overlay.getContext("2d");const e=t.landmarks,n=(r,a)=>e[r]&&e[a]?[e[r],e[a]]:null;this.segments=[n("pelvis","neck"),n("neck","head"),n("head","headTop"),n("shoulderR","elbowR"),n("elbowR","wristR"),n("wristR","middleFingerBaseR"),n("shoulderL","elbowL"),n("elbowL","wristL"),n("wristL","middleFingerBaseL"),n("hipR","kneeR"),n("kneeR","ankleR"),n("ankleR","toeR"),n("hipL","kneeL"),n("kneeL","ankleL"),n("ankleL","toeL")].filter(Boolean),t.view.host.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),this.overlay.addEventListener("pointermove",this.onImageHover),this.overlay.addEventListener("pointerdown",this.onImageDown),this.overlay.addEventListener("pointerleave",()=>(this.hoverText="",this.renderPanel())),document.addEventListener("keydown",this.onKey)}anatomy=null;active=!1;contact=null;normal=[0,1,0];rotate=0;tilt=0;rock=0;underside=!1;depthCm=4;gain=1;showLabels=!0;resolution=1;map=null;plane=null;lastRenderMs=0;renderTimes=[];canvas;overlay;ctx;octx;segments=[];dirty=!1;dragging=null;tap=null;hoverText="";highlight=null;task=null;draft=[];feedback=null;attempts=[];answerMode="point";async enter(){if(this.active=!0,document.body.classList.add("sim-mode"),this.d.setRecordedInputEnabled(!1),this.setFigureForSim(!0),!this.anatomy){this.d.status.dataset.s="loading",this.d.status.textContent="Загрузка анатомии…";try{this.anatomy=await Cy(this.d.baseUrl,t=>this.d.status.textContent=`Загрузка анатомии ${Math.round(t*100)}%`),this.anatomy.meta.probePresets={...Iy(this.anatomy),...this.anatomy.meta.probePresets??{}}}catch(t){this.d.status.dataset.s="error",this.d.status.textContent="Ошибка данных: "+t.message;return}}this.contact||this.placeDefault(),this.dirty=!0,this.renderPanel(),this.renderInfo()}exit(){this.active=!1,document.body.classList.remove("sim-mode"),this.d.setRecordedInputEnabled(!0),this.setFigureForSim(!1),this.underside&&this.setUnderside(!1),this.task=null,this.draft=[],this.feedback=null}setFigureForSim(t){this.d.view.human.root.traverse(e=>{const n=e.name,i=e.isMesh&&e.parent&&e.parent.name!=="human"&&e.parent.name!=="Scene"?e.parent.name:n;(i==="Clothes"||n==="Clothes")&&(e.visible=!t),(i==="Body"||n==="Body")&&(e.visible=!t),(i==="BodyFull"||n==="BodyFull"||i==="Briefs"||n==="Briefs")&&(e.visible=t)});for(const e of["sweep-marker","sweep-zone-hit"]){const n=this.d.view.scene.getObjectByName(e);n&&(n.visible=!t)}}visibleSkinMeshes(){const t=[];return this.d.view.human.root.traverseVisible(e=>{e.isMesh&&!e.name.endsWith("-fringe")&&t.push(e)}),t}placeDefault(){const t=this.d.landmarks,e=t.elbowR,n=t.wristR,i=new P(e[0]+(n[0]-e[0])*.5,e[1]+(n[1]-e[1])*.5+.3,e[2]+(n[2]-e[2])*.5);this.d.view.human.root.updateMatrixWorld(!0);const a=new Cn(i,new P(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];a&&this.setContactFromHit(a)}placeAt(t,e){this.d.view.human.root.updateMatrixWorld(!0);const i=new Cn(new P(t,.8,e),new P(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];return i&&this.setContactFromHit(i),!!i}placeOnSkin(t,e){this.d.view.human.root.updateMatrixWorld(!0);const n=new P(...e).normalize(),r=new Cn(new P(...t).addScaledVector(n,-.3),n).intersectObjects(this.visibleSkinMeshes(),!1)[0];return r&&this.setContactFromHit(r),!!r}placeOnSurface(t,e,n,i){this.d.view.human.root.updateMatrixWorld(!0);const a=new Cn(new P(t,e,n),new P(...i).normalize()).intersectObjects(this.visibleSkinMeshes(),!1)[0];return a&&this.setContactFromHit(a),!!a}placeFrom(t,e,n){this.d.view.human.root.updateMatrixWorld(!0);const i=n==="ventral"?[t,.8,e]:n==="dorsal"?[t,-.5,e]:n==="right"?[t,e,-.9]:[t,e,.9],r=n==="ventral"?[0,-1,0]:n==="dorsal"?[0,1,0]:n==="right"?[0,0,1]:[0,0,-1],o=new Cn(new P(...i),new P(...r)).intersectObjects(this.visibleSkinMeshes(),!1)[0];return o&&this.setContactFromHit(o),!!o}placeFromPoint(t,e){this.d.view.human.root.updateMatrixWorld(!0);const n=new P(e[0],e[1],e[2]).normalize(),i=new P(t[0],t[1],t[2]),r=i.clone().addScaledVector(n,.5),o=new Cn(r,n.clone().negate(),0,1).intersectObjects(this.visibleSkinMeshes(),!1).filter(l=>l.face.normal.clone().applyMatrix3(new Xt().getNormalMatrix(l.object.matrixWorld)).dot(n)>0).sort((l,c)=>l.point.distanceTo(i)-c.point.distanceTo(i))[0];return o&&this.setContactFromHit(o),!!o}setUnderside(t){this.underside=t;const e=this.d.view.scene.getObjectByName("table");e&&(e.visible=!t),this.d.view.controls.maxPolarAngle=Math.PI*(t?.95:.495),this.renderPanel()}setContactFromHit(t){const e=new Xt().getNormalMatrix(t.object.matrixWorld),n=t.face.normal.clone().applyMatrix3(e).normalize();this.contact=t.point.toArray(),this.normal=n.toArray(),this.dirty=!0}ray=new Cn;pick(t,e,n){const i=this.d.view.renderer.domElement.getBoundingClientRect();return this.ray.setFromCamera(new pt((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.d.view.camera),this.ray.intersectObjects(n,!1)[0]}onDown=t=>{if(!(!this.active||t.button!==0&&t.pointerType==="mouse")){if(this.d.probe.group.visible&&this.pick(t.clientX,t.clientY,this.d.probe.grabTargets)){this.dragging=t.pointerId,this.d.view.controls.enabled=!1,this.d.probe.setActive(!0),t.preventDefault(),t.stopPropagation();return}this.tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}};pendingMove=null;onMove=t=>{this.active&&(this.tap&&this.tap.id===t.pointerId&&Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>7&&(this.tap=null),this.dragging===t.pointerId&&(this.pendingMove={x:t.clientX,y:t.clientY}))};onUp=t=>{if(!this.active)return;if(this.dragging===t.pointerId){this.flushMove(),this.dragging=null,this.d.view.controls.enabled=!0,this.d.probe.setActive(!1);return}const e=this.tap;if(this.tap=null,e&&e.id===t.pointerId&&t.timeStamp-e.t<450&&t.type==="pointerup"){const n=this.pick(t.clientX,t.clientY,this.visibleSkinMeshes());n&&this.setContactFromHit(n)}};flushMove(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null;const e=this.pick(t.x,t.y,this.visibleSkinMeshes());e&&this.setContactFromHit(e)}onKey=t=>{if(!this.active)return;const e=t.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))){if(this.task?.answer==="contour"&&!this.feedback){if(t.key==="Enter")return this.submitContour();if(t.key==="Escape")return this.draft=[],this.drawOverlay();if(t.key==="Backspace")return this.draft.pop(),this.drawOverlay()}t.key==="q"||t.key==="й"?this.setRotate(this.rotate-5):t.key==="e"||t.key==="у"?this.setRotate(this.rotate+5):t.key==="w"||t.key==="ц"?this.setTilt(this.tilt+3):t.key==="s"||t.key==="ы"?this.setTilt(this.tilt-3):t.key==="a"||t.key==="ф"?this.setRock(this.rock-3):(t.key==="d"||t.key==="в")&&this.setRock(this.rock+3)}};setRotate(t){this.rotate=Math.max(-90,Math.min(90,t)),this.dirty=!0,this.renderPanel()}applyPreset(t){const e=this.anatomy?.meta.probePresets?.[t];return!e||!(e.point&&e.dir?this.placeFromPoint(e.point,e.dir):this.placeAt(e.x,e.z))?!1:(this.presetName=t,this.depthCm=e.depthCm,e.point&&e.dir&&e.dir[1]<0&&(this.underside||this.setUnderside(!0),this.contact&&(this.d.view.setRegionFocus(new P(...this.contact),new P(...this.normal),.5),this.d.view.goTo("region"))),this.tilt=Math.max(-30,Math.min(30,e.tiltDeg??0)),this.rock=Math.max(-20,Math.min(20,e.rockDeg??0)),this.setRotate(e.rotateDeg),!0)}presetName="";setTilt(t){this.tilt=Math.max(-30,Math.min(30,t)),this.dirty=!0,this.renderPanel()}setRock(t){this.rock=Math.max(-20,Math.min(20,t)),this.dirty=!0,this.renderPanel()}setDepth(t){this.depthCm=Math.max(2,Math.min(15,t)),this.dirty=!0,this.renderPanel()}tick(){if(!this.active||!this.anatomy||(this.flushMove(),!this.dirty||!this.contact))return;this.dirty=!1;const t=performance.now(),e=Ny(this.contact,this.segments,this.normal),n=Math.round(40*co*this.resolution),i=Math.round(this.depthCm*10*co*this.resolution),r=Dy(this.contact,this.normal,e,this.rotate,this.tilt,{widthM:.04,depthM:this.depthCm/100,W:n,H:i},this.rock);this.plane=r,this.map=Hy(this.anatomy,r);const a=Jy(this.anatomy,this.map,r,{...Yu,gain:this.gain});this.canvas.width=n,this.canvas.height=i;const o=this.ctx.createImageData(n,i);for(let l=0;l<a.length;l++)o.data[l*4]=o.data[l*4+1]=o.data[l*4+2]=a[l],o.data[l*4+3]=255;this.ctx.putImageData(o,0,0),this.d.probe.setPose(this.contact,[-r.depth[0],-r.depth[1],-r.depth[2]],this.crossV(r.lateral,[-r.depth[0],-r.depth[1],-r.depth[2]]),!0),this.lastRenderMs=performance.now()-t,this.lastRenderMs>90&&this.resolution>.5&&(this.resolution=Math.max(.5,this.resolution*.8)),this.renderTimes.push(this.lastRenderMs),this.renderTimes.length>200&&this.renderTimes.shift(),this.d.status.dataset.s="ready",this.d.status.textContent="СИМУЛЯЦИЯ",this.task&&!this.feedback&&this.map.present.includes(this.task.structure),this.drawOverlay(),this.renderPanel(),this.d.onChange?.()}crossV(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}structuresInImage(){if(!this.map||!this.anatomy)return[];const t=new Map,{W:e,label:n}=this.map;for(let i=0;i<n.length;i++){const r=n[i];if(r<2)continue;const a=t.get(r-2)??{n:0,sx:0,sy:0};a.n++,a.sx+=i%e,a.sy+=Math.floor(i/e),t.set(r-2,a)}return[...t.entries()].map(([i,r])=>({s:this.anatomy.structures[i],area:r.n,cx:r.sx/r.n,cy:r.sy/r.n})).filter(i=>i.area>=6).sort((i,r)=>r.area-i.area)}drawOverlay(){const t=this.map;if(!t||!this.anatomy)return;const e=this.overlay.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,Math.round(e.width*n)),r=Math.max(1,Math.round(e.height*n));(this.overlay.width!==i||this.overlay.height!==r)&&(this.overlay.width=i,this.overlay.height=r);const a=Math.min(i/t.W,r/t.H),o=(i-t.W*a)/2,l=(r-t.H*a)/2;this.view={k:a,ox:o,oy:l,dpr:n};const c=this.octx;c.clearRect(0,0,i,r);const h=this.showLabels&&!this.task,u=this.highlight;if(h||u!==null||this.feedback){const f=c.createImageData(t.W,t.H),x=this.feedback&&this.task?this.task.structure:null;for(let m=0;m<t.label.length;m++){const p=t.label[m];if(p<2)continue;const v=this.anatomy.structures[p-2];if(!(x!==null?v.index===x:u!==null?v.index===u:v.cat!=="muscle"))continue;const y=m%t.W,T=Math.floor(m/t.W),w=y===0||T===0||y===t.W-1||T===t.H-1||t.label[m-1]!==p||t.label[m+1]!==p||t.label[m-t.W]!==p||t.label[m+t.W]!==p,C=new Vt(oo(v));f.data[m*4]=C.r*255,f.data[m*4+1]=C.g*255,f.data[m*4+2]=C.b*255,f.data[m*4+3]=w?230:55}const g=document.createElement("canvas");g.width=t.W,g.height=t.H,g.getContext("2d").putImageData(f,0,0),c.imageSmoothingEnabled=!1,c.drawImage(g,o,l,t.W*a,t.H*a)}const d=12*n;if(h){c.font=`600 ${d}px system-ui, sans-serif`,c.textBaseline="middle";const f=[],x=900*(t.W/256)*(t.W/256);for(const g of this.structuresInImage()){if(g.s.cat==="muscle"&&g.area<x*1.6||g.s.cat==="joint"||g.s.cat==="organ"&&g.area<x)continue;const m=tM(g.s),p=c.measureText(m).width,v=o+g.cx*a,_=l+g.cy*a,y=Math.min(i-p-4,Math.max(4,v-p/2));f.some(([T,w,C])=>y<T+C+6&&T<y+p+6&&Math.abs(w-_)<d*1.2)||(f.push([y,_,p]),c.lineWidth=3*n,c.strokeStyle="rgba(0,0,0,.85)",c.strokeText(m,y,_),c.fillStyle=oo(g.s),c.fillText(m,y,_))}}c.fillStyle="rgba(255,255,255,.85)",c.font=`${11*n}px system-ui, sans-serif`,c.textBaseline="middle";for(let f=0;f<=this.depthCm*10;f+=5){const x=l+f/(this.depthCm*10)*t.H*a,g=f%10===0,m=(g?10:5)*n;c.fillRect(o+t.W*a-m,x-n,m,2*n),g&&f>0&&c.fillText(`${f/10} см`,o+t.W*a-m-34*n,x)}if(c.fillStyle="rgba(255,200,0,.95)",c.font=`700 ${11*n}px system-ui, sans-serif`,c.fillText("СИМУЛЯЦИЯ",o+8*n,l+12*n),this.draft.length&&this.drawPoly(this.draft,"#ffffff",!1),this.feedback?.polygon&&this.drawPoly(this.feedback.polygon,this.feedback.hit?"#3ddc84":"#ff5a5f",!0),this.feedback?.click){const[f,x]=this.feedback.click,g=o+f*a,m=l+x*a,p=6*n;c.strokeStyle=this.feedback.hit?"#3ddc84":"#ff5a5f",c.lineWidth=3*n,c.beginPath(),c.moveTo(g-p,m-p),c.lineTo(g+p,m+p),c.moveTo(g+p,m-p),c.lineTo(g-p,m+p),c.stroke()}}view={k:1,ox:0,oy:0,dpr:1};drawPoly(t,e,n){const i=this.octx,{k:r,ox:a,oy:o,dpr:l}=this.view;i.strokeStyle=e,i.lineWidth=2.5*l,i.setLineDash(n?[]:[6*l,4*l]),i.beginPath(),t.forEach(([c,h],u)=>u?i.lineTo(a+c*r,o+h*r):i.moveTo(a+c*r,o+h*r)),n&&i.closePath(),i.stroke(),i.setLineDash([]),i.fillStyle=e;for(const[c,h]of t)i.fillRect(a+c*r-3*l,o+h*r-3*l,6*l,6*l)}imagePoint(t){if(!this.map)return null;const e=this.overlay.getBoundingClientRect(),n=Math.min(e.width/this.map.W,e.height/this.map.H),i=e.left+(e.width-this.map.W*n)/2,r=e.top+(e.height-this.map.H*n)/2,a=(t.clientX-i)/n,o=(t.clientY-r)/n;return a<0||o<0||a>this.map.W||o>this.map.H?null:[a,o]}imageToScreen(t,e){if(!this.map)return null;const n=this.overlay.getBoundingClientRect(),i=Math.min(n.width/this.map.W,n.height/this.map.H);return{x:n.left+(n.width-this.map.W*i)/2+t*i,y:n.top+(n.height-this.map.H*i)/2+e*i}}onImageHover=t=>{const e=this.imagePoint(t);if(!e||!this.map||!this.anatomy||this.task)return;const n=ro(this.map,e[0],e[1]),i=n===null?this.map.label[Math.floor(e[1])*this.map.W+Math.floor(e[0])]===1?"подкожная клетчатка / мягкие ткани":"":`${Yi(this.anatomy.structures[n])} · ${Oh[this.anatomy.structures[n].cat]??""}`,r=(e[1]/this.map.H*this.depthCm*10).toFixed(1);this.hoverText=i?`${i} · глубина ${r} мм`:"",this.renderPanel()};onImageDown=t=>{const e=this.imagePoint(t);if(!(!e||!this.task||this.feedback||!this.map))if(this.task.answer==="point"){const n=ro(this.map,e[0],e[1]);let i=n===this.task.structure;if(!i){const o=Math.ceil(co*.5);for(let l=-o;l<=o&&!i;l++)for(let c=-o;c<=o&&!i;c++)i=ro(this.map,e[0]+c,e[1]+l)===this.task.structure}const r=Yi(this.anatomy.structures[this.task.structure]),a=n!==null&&n!==this.task.structure?`Это: ${Yi(this.anatomy.structures[n])}.`:"";this.finishTask(i,i?`Верно: ${r}.`:`Мимо. ${a} Правильная структура подсвечена.`,null,e,null)}else{if(this.draft.length>=3&&Math.hypot(e[0]-this.draft[0][0],e[1]-this.draft[0][1])<4)return this.submitContour();this.draft.push(e),this.drawOverlay(),this.renderPanel()}};startTask(t){this.answerMode=t;const e=this.structuresInImage().filter(i=>Qy.has(i.s.cat)&&i.area>=(t==="contour"?60:20));if(!e.length){this.task=null,this.feedback={hit:!1,text:"В этом срезе нет нервов, сосудов или костей для задания — переместите датчик.",polygon:null,click:null},this.renderPanel();return}const n=e[Math.floor(Math.random()*Math.min(e.length,6))];this.task={structure:n.s.index,answer:t,started:performance.now()},this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}submitContour(){if(!this.task||!this.map||this.draft.length<3)return;const t=this.draft;this.draft=[];const{W:e,H:n,label:i}=this.map;let r=0,a=0,o=0;for(let d=0;d<n;d++)for(let f=0;f<e;f++){const x=i[d*e+f]===this.task.structure+2,g=aa(f+.5,d+.5,t);x&&r++,g&&a++,x&&g&&o++}const l=r+a?2*o/(r+a):0,c=l>=.6,[h,u]=Ci(t);this.finishTask(c,`${c?"Верно":"Неточно"}: совпадение с эталонной маской (Дайс) ${l.toFixed(2)} при пороге 0.6.`,t,[h,u],l)}finishTask(t,e,n,i,r){!this.task||!this.anatomy||(this.attempts.push({structure:Yi(this.anatomy.structures[this.task.structure]),answer:this.task.answer,hit:t,score:r}),this.feedback={hit:t,text:e,polygon:n,click:i},this.drawOverlay(),this.renderPanel())}endTask(){this.task=null,this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}renderPanel(){if(!this.active)return;const t=this.d.panel,e=(o,l={},...c)=>{const h=document.createElement(o);for(const[u,d]of Object.entries(l))u.startsWith("on")&&typeof d=="function"?h.addEventListener(u.slice(2),d):u==="class"?h.className=String(d):u==="dataset"?Object.assign(h.dataset,d):d!=null&&d!==!1&&(h[u]=d);for(const u of c)u!==null&&h.append(u);return h},n=(o,l,c,h,u,d,f,x)=>e("label",{class:"sim-slider"},e("span",{},o),e("input",{id:l,type:"range",min:String(c),max:String(h),step:String(u),value:String(d),oninput:g=>x(Number(g.target.value))}),e("output",{},f(d))),i=this.structuresInImage().filter(o=>o.s.cat!=="muscle"||o.area>400),r=this.feedback,a=this.task;t.replaceChildren(e("div",{class:"ann"},e("p",{class:"sim-warn"},"Симуляция: изображение рассчитано по 3D-анатомии (Z-Anatomy), а не записано аппаратом. Для обучения ориентирам и разметке; не для диагностики."),e("p",{class:"sim-warn",id:"simMissing"},"Нет в модели (нет в источнике): поверхностное шейное сплетение, диафрагмальный нерв."),e("div",{class:"ann-row"},e("button",{type:"button",id:"simTrans",class:Math.abs(this.rotate)<1?"primary":"",textContent:"Поперёк",onclick:()=>this.setRotate(0)}),e("button",{type:"button",id:"simLong",class:Math.abs(this.rotate)===90?"primary":"",textContent:"Вдоль",onclick:()=>this.setRotate(90)}),e("label",{class:"chk",title:"Скрыть стол и опустить камеру под тело — задняя поверхность бедра, подколенная ямка (как при поднятой на подставку ноге)"},e("input",{type:"checkbox",id:"simUnder",checked:this.underside,onchange:o=>this.setUnderside(o.target.checked)}),"вид снизу"),e("label",{class:"chk"},e("input",{type:"checkbox",id:"simLabels",checked:this.showLabels,onchange:o=>(this.showLabels=o.target.checked,this.drawOverlay())}),"подписи структур")),this.presetSelect(e),n("Поворот","simRot",-90,90,1,this.rotate,o=>`${o}°`,o=>this.setRotate(o)),n("Наклон","simTilt",-30,30,1,this.tilt,o=>`${o}°`,o=>this.setTilt(o)),n("Глубина","simDepth",2,15,.5,this.depthCm,o=>`${o} см`,o=>this.setDepth(o)),n("Усиление","simGain",.4,2.5,.05,this.gain,o=>o.toFixed(2),o=>(this.gain=o,this.dirty=!0,this.renderPanel())),e("p",{class:"ann-note",dataset:{testid:"sim-hover"}},this.hoverText||"Наведите курсор на изображение — появится название структуры. Клавиши: Q/E — поворот, W/S — наклон, A/D — покачивание."),e("div",{class:"sim-train"},e("p",{class:"task-title"},"Тренировка на симуляции"),a?e("p",{dataset:{testid:"sim-task"}},a.answer==="contour"?"Обведите: ":"Отметьте щелчком: ",e("b",{},Yi(this.anatomy.structures[a.structure])),a.answer==="contour"?` (вершин ${this.draft.length}; замкнуть — Enter или щелчок по первой)`:""):e("p",{class:"ann-note"},"Эталон берётся из анатомии автоматически: задание выбирается среди нервов, сосудов и костей текущего среза."),r?e("p",{class:r.hit?"fb ok":"fb bad",dataset:{testid:"sim-feedback"}},r.text):null,e("div",{class:"ann-row"},e("button",{type:"button",id:"simTaskPoint",class:"primary",textContent:a&&!r?"Другое задание":"Задание: отметить",onclick:()=>this.startTask("point")}),e("button",{type:"button",id:"simTaskContour",textContent:"Задание: обвести",onclick:()=>this.startTask("contour")}),a&&a.answer==="contour"&&!r?e("button",{type:"button",id:"simDone",disabled:this.draft.length<3,textContent:"Готово",onclick:()=>this.submitContour()}):null,a?e("button",{type:"button",textContent:"Закончить",onclick:()=>this.endTask()}):null),this.attempts.length?e("p",{class:"ann-note",dataset:{testid:"sim-score"}},`Результат: ${this.attempts.filter(o=>o.hit).length} из ${this.attempts.length}`):null),n("Покачивание","simRock",-20,20,1,this.rock,o=>`${o}°`,o=>this.setRock(o)),e("details",{class:"sim-list"},e("summary",{},`Структуры в срезе (${i.length})`),e("ul",{class:"ann-list"},...i.slice(0,40).map(o=>e("li",{onmouseenter:()=>(this.highlight=o.s.index,this.drawOverlay()),onmouseleave:()=>(this.highlight=null,this.drawOverlay())},e("span",{class:"sw",style:`background:${oo(o.s)}`}),`${Yi(o.s)} · ${Oh[o.s.cat]??""}`)))))),this.answerMode}presetSelect(t){const e=this.anatomy?.meta.probePresets??{},n=Object.keys(e);if(!n.length)return null;const i={PENGR:"PENG справа",PENGL:"PENG слева"};return t("label",{class:"sim-slider"},t("span",{},"Доступ"),t("select",{id:"simPreset",onchange:r=>this.applyPreset(r.target.value)},t("option",{value:"",textContent:"— выбрать —",selected:!this.presetName}),...n.map(r=>t("option",{value:r,textContent:e[r].ru??i[r]??r,selected:r===this.presetName}))))}renderInfo(){const t=this.anatomy;if(!t)return;const e=t.meta.source;this.d.info.replaceChildren();const n=document.createElement("p");n.className="source",n.append(`Анатомия: ${e.attribution}. Изменения: ${e.modifications}. Исключено: ${e.excluded}. Лицензия производной анатомии — CC BY-SA 4.0. `);const i=document.createElement("a");i.href=e.url,i.target="_blank",i.rel="noopener",i.textContent="Источник",n.append(i,". Радиусы нервов — типичные значения, требуют экспертной проверки. Анатомия одного тела, подогнанная к фигуре по суставам."),this.d.info.append(n)}debug(){const t=this.structuresInImage();return{active:this.active,loaded:!!this.anatomy,contact:this.contact,rotate:this.rotate,tilt:this.tilt,rock:this.rock,underside:this.underside,preset:this.presetName,normal:this.normal,depthCm:this.depthCm,size:this.map?[this.map.W,this.map.H]:null,present:t.map(e=>({name:e.s.name,side:e.s.side,cat:e.s.cat,area:e.area,cx:e.cx,cy:e.cy,index:e.s.index})),task:this.task?{structure:this.anatomy.structures[this.task.structure].name,index:this.task.structure,answer:this.task.answer}:null,attempts:this.attempts,renderMs:this.lastRenderMs,renderTimes:[...this.renderTimes],maskCentroid:e=>{const n=t.find(i=>i.s.index===e);return n?[n.cx,n.cy]:null}}}maskBoxPolygon(t){if(!this.map)return null;let e=1/0,n=1/0,i=-1/0,r=-1/0;for(let a=0;a<this.map.label.length;a++)if(this.map.label[a]===t+2){const o=a%this.map.W,l=Math.floor(a/this.map.W);e=Math.min(e,o),n=Math.min(n,l),i=Math.max(i,o+1),r=Math.max(r,l+1)}return isFinite(e)?[[e,n],[i,n],[i,r],[e,r]]:null}}function nM(s,t,e,n,i){const r=i.roi??{x:0,y:0,width:s,height:t};let a=e/r.width,o=n/r.height,l=0,c=0;if(i.resize.mode==="letterbox"){const h=Math.min(a,o);a=o=h,l=(e-r.width*h)/2,c=(n-r.height*h)/2}return{roiX:r.x,roiY:r.y,roiW:r.width,roiH:r.height,scaleX:a,scaleY:o,offX:l,offY:c,inW:e,inH:n}}function Ju(s,t,e){return[(t-s.offX)/s.scaleX+s.roiX,(e-s.offY)/s.scaleY+s.roiY]}function iM(s,t,e,n){const{inW:i,inH:r}=t,a=n&&n.length===i*r?n:new Float32Array(i*r),[o,l,c]=e.grayscale?.weights??[.299,.587,.114],h=e.resize.padValue??0,u=e.normalize?.mean??0,d=e.normalize?.std??1,f=e.resize.interpolation==="nearest",x=s.width,g=s.height,m=s.data,p=(C,I)=>{const M=(I*x+C)*4;return(o*m[M]+l*m[M+1]+c*m[M+2])/255},v=Math.max(0,Math.floor(t.roiX)),_=Math.max(0,Math.floor(t.roiY)),y=Math.min(x,Math.ceil(t.roiX+t.roiW))-1,T=Math.min(g,Math.ceil(t.roiY+t.roiH))-1,w=(C,I,M)=>C<I?I:C>M?M:C;for(let C=0;C<r;C++)for(let I=0;I<i;I++){const[M,b]=Ju(t,I+.5,C+.5);let R;if(M<t.roiX||b<t.roiY||M>t.roiX+t.roiW||b>t.roiY+t.roiH)R=h;else if(f)R=p(w(Math.floor(M),v,y),w(Math.floor(b),_,T));else{const N=M-.5,U=b-.5,V=Math.floor(N),O=Math.floor(U),G=N-V,j=U-O,H=w(V,v,y),et=w(V+1,v,y),K=w(O,_,T),gt=w(O+1,_,T);R=(p(H,K)*(1-G)+p(et,K)*G)*(1-j)+(p(H,gt)*(1-G)+p(et,gt)*G)*j}a[C*i+I]=(R-u)/d}return a}function sM(s,t,e){if(t.length!==4||t[0]!==1)throw new Error(`Выход модели: ожидается [1,C,H,W], получено [${t.join(",")}]`);const[,n,i,r]=t,a=i*r;if(s.length!==n*a)throw new Error("Выход модели: размер данных не совпадает с dims");const o=new Float32Array(n*a);if(e==="sigmoid")for(let l=0;l<o.length;l++)o[l]=1/(1+Math.exp(-s[l]));else for(let l=0;l<a;l++){let c=-1/0;for(let u=0;u<n;u++)c=Math.max(c,s[u*a+l]);let h=0;for(let u=0;u<n;u++){const d=Math.exp(s[u*a+l]-c);o[u*a+l]=d,h+=d}for(let u=0;u<n;u++)o[u*a+l]/=h}return{prob:o,C:n,H:i,W:r}}function rM(s,t,e,n){const{prob:i,C:r,H:a,W:o}=s,l=a*o,c=new Uint8Array(l);let h=0,u=0;for(let d=0;d<l;d++){const f=i[t*l+d];if(!(f<e)){if(n==="softmax"){let x=!0;for(let g=0;g<r;g++)g!==t&&i[g*l+d]>f&&(x=!1);if(!x)continue}c[d]=1,h++,u+=f}}return{mask:c,count:h,mean:h?u/h:null}}const aM=[1,0,-1,0],oM=[0,1,0,-1];function cM(s,t,e){const n=t+1,i=new Uint8Array(n*(e+1)*4),r=(l,c)=>l>=0&&c>=0&&l<t&&c<e&&s[c*t+l]===1;let a=0;for(let l=0;l<e;l++)for(let c=0;c<t;c++)r(c,l)&&(r(c,l-1)||(i[(l*n+c)*4+0]=1,a++),r(c+1,l)||(i[(l*n+c+1)*4+1]=1,a++),r(c,l+1)||(i[((l+1)*n+c+1)*4+2]=1,a++),r(c-1,l)||(i[((l+1)*n+c)*4+3]=1,a++));const o=[];if(!a)return o;for(let l=0;l<i.length;l++){if(!i[l])continue;const c=l>>2;let h=c%n,u=c/n|0,d=l&3;const f=[],x=h,g=u,m=d;for(let p=0;p<=a;p++){i[(u*n+h)*4+d]=0,h+=aM[d],u+=oM[d];const v=(u*n+h)*4,_=h===x&&u===g;let y=-1;for(const T of[d+1&3,d,d+3&3])if(i[v+T]||_&&T===m){y=T;break}if(y!==d&&f.push([h,u]),y<0||_&&y===m)break;d=y}f.length>=3&&o.push({points:f,area:lM(f)})}return o}function lM(s){let t=0;for(let e=0;e<s.length;e++){const[n,i]=s[e],[r,a]=s[(e+1)%s.length];t+=n*a-r*i}return t/2}function hM(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[i],[l,c]=e[r];o>t!=c>t&&s<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function uM(s){const[t,e]=s[0],[n,i]=s[1],r=Math.sign(n-t),a=Math.sign(i-e);return[t+r*.5+a*.5,e+a*.5-r*.5]}function dM(s){const e=s.filter(n=>n.area>0).sort((n,i)=>n.area-i.area).map(n=>({ring:n,holes:[]}));for(const n of s.filter(i=>i.area<0)){const[i,r]=uM(n.points),a=e.find(o=>hM(i,r,o.ring.points));a&&a.holes.push(n)}return e.map(n=>({outer:n.ring.points,holes:n.holes.map(i=>i.points),areaPx:n.ring.area+n.holes.reduce((i,r)=>i+r.area,0)}))}function Bh(s,t){if(t<=0||s.length<=4)return s;let e=0,n=-1;for(let l=1;l<s.length;l++){const c=(s[l][0]-s[0][0])**2+(s[l][1]-s[0][1])**2;c>n&&(n=c,e=l)}const i=l=>{if(l.length<3)return l;const[c,h]=l[0],[u,d]=l[l.length-1],f=Math.hypot(u-c,d-h)||1e-9;let x=0,g=0;for(let p=1;p<l.length-1;p++){const v=Math.abs((u-c)*(h-l[p][1])-(c-l[p][0])*(d-h))/f;v>g&&(g=v,x=p)}return g<=t?[l[0],l[l.length-1]]:[...i(l.slice(0,x+1)).slice(0,-1),...i(l.slice(x))]},r=i(s.slice(0,e+1)),a=i([...s.slice(e),s[0]]),o=[...r.slice(0,-1),...a.slice(0,-1)];return o.length>=3?o:s}function zh(s,t,e,n){const i=t.inW/e,r=t.inH/n;return s.map(([a,o])=>Ju(t,a*i,o*r))}function fM(s,t,e){const n=sM(s,t,e.activation);if(n.C!==e.classes.length)throw new Error(`Выход модели: ${n.C} каналов, а в classes.json ${e.classes.length} классов`);const i=[];for(const r of e.classes){if(r.background)continue;const a=e.thresholds?.[r.id]??r.threshold??.5,o=rM(n,r.id,a,e.activation),l=o.count?dM(cM(o.mask,n.W,n.H)).filter(c=>c.areaPx>=(e.minAreaPx??0)).map(c=>({outer:zh(Bh(c.outer,e.simplifyPx??0),e.transform,n.W,n.H),holes:c.holes.map(h=>zh(Bh(h,e.simplifyPx??0),e.transform,n.W,n.H)),areaPx:c.areaPx})):[];i.push({classId:r.id,name:r.name,label:r.label??r.name,color:r.color,threshold:a,meanConfidence:o.mean,pixelCount:o.count,polygons:l})}return i}function Qr(s){if(!s.length)return null;const t=[...s].sort((n,i)=>n-i),e=n=>t[Math.min(t.length-1,Math.max(0,Math.ceil(n*t.length)-1))];return{n:t.length,p50:e(.5),p95:e(.95),max:t[t.length-1]}}const Wr=()=>typeof performance<"u"?performance.now():Date.now();class pM{constructor(t,e){this.spec=t,this.session=e}thresholds={};stats={requested:0,completed:0,delivered:0,stale:0,errors:0};onResult=()=>{};onError=()=>{};samples=[];latest=null;seq=0;busy=!1;pending=null;transformCache=null;buf;transformFor(t,e){const n=`${t}x${e}`;return this.transformCache?.key!==n&&(this.transformCache={key:n,t:nM(t,e,this.spec.manifest.input.width,this.spec.manifest.input.height,this.spec.preprocess)}),this.transformCache.t}request(t,e){const n={frameId:t,seq:++this.seq,getImage:e};if(this.latest={frameId:t,seq:n.seq},this.stats.requested++,this.busy){this.pending=n;return}this.loop(n)}cancel(){this.latest=null,this.pending=null,this.seq++}isCurrent(t){return this.latest!==null&&this.latest.seq===t}async loop(t){this.busy=!0;let e=t;for(;e;){try{const n=e.getImage();if(n){const i=await this.runOnce(e.frameId,n);this.stats.completed++,this.isCurrent(e.seq)?(this.stats.delivered++,this.onResult(i)):this.stats.stale++}}catch(n){this.stats.errors++,this.isCurrent(e.seq)&&this.onError(n,e.frameId)}e=this.pending,this.pending=null}this.busy=!1}async runOnce(t,e){const{manifest:n,preprocess:i,classes:r}=this.spec,a=Wr(),o=this.transformFor(e.width,e.height);this.buf=iM(e,o,i,this.buf);const l=this.buf.slice(),c=Wr(),h=await this.session.run(l,[1,1,n.input.height,n.input.width]),u=Wr(),d=fM(h.data,h.dims,{activation:n.output.activation,classes:r,transform:o,simplifyPx:i.postprocess?.simplifyPx??0,minAreaPx:i.postprocess?.minAreaPx??0,thresholds:this.thresholds}),f=Wr(),x={preprocessMs:c-a,runMs:u-c,postprocessMs:f-u,totalMs:f-a};return this.samples.push(x),this.samples.length>400&&this.samples.shift(),{frameId:t,classes:d,times:x,provider:this.session.provider}}summary(){const t=e=>Qr(this.samples.map(n=>n[e]));return{preprocess:t("preprocessMs"),run:t("runMs"),postprocess:t("postprocessMs"),total:t("totalMs")}}}const Vh="sonolab.model/1",es=s=>typeof s=="number"&&Number.isFinite(s);function mM(s){const t=s;if(!t||typeof t!="object")throw new Error("Манифест модели: не объект");if(t.schema!==Vh)throw new Error(`Манифест модели: ожидается schema «${Vh}», получено «${String(t.schema)}»`);if(t.researchOnly!==!0)throw new Error("Манифест модели: researchOnly должен быть true");for(const e of["model","classes","preprocess","name","version"])if(typeof t[e]!="string"||!t[e])throw new Error(`Манифест модели: нет поля ${e}`);if(!t.input||t.input.channels!==1||!es(t.input.height)||!es(t.input.width)||t.input.height<1||t.input.width<1)throw new Error("Манифест модели: input должен быть {channels: 1, height, width}");if(!t.output||t.output.activation!=="softmax"&&t.output.activation!=="sigmoid")throw new Error("Манифест модели: output.activation — softmax или sigmoid");if(t.sha256!==void 0&&!/^[0-9a-f]{64}$/i.test(t.sha256))throw new Error("Манифест модели: sha256 — 64 шестнадцатеричных знака");return t}function xM(s){const t=s?.classes;if(!Array.isArray(t)||!t.length)throw new Error("classes.json: нет списка classes");return t.forEach((e,n)=>{if(!Number.isInteger(e.id)||e.id!==n)throw new Error(`classes.json: id должны идти подряд с 0 (позиция ${n})`);if(typeof e.name!="string"||!e.name)throw new Error(`classes.json: класс ${n} без name`);if(typeof e.color!="string")throw new Error(`classes.json: класс ${n} без color`);if(e.threshold!==void 0&&(!es(e.threshold)||e.threshold<0||e.threshold>1))throw new Error(`classes.json: threshold класса ${n} вне [0,1]`)}),t}function gM(s){const t=s;if(!t||!t.resize||t.resize.mode!=="stretch"&&t.resize.mode!=="letterbox")throw new Error("preprocess.json: resize.mode — stretch или letterbox");if(t.normalize&&(!es(t.normalize.mean)||!es(t.normalize.std)||t.normalize.std===0))throw new Error("preprocess.json: normalize {mean, std≠0}");if(t.roi&&![t.roi.x,t.roi.y,t.roi.width,t.roi.height].every(es))throw new Error("preprocess.json: roi {x,y,width,height}");return t}async function lo(s,t){const e=await t(s);if(!e.ok)throw new Error(`Не загружен ${s}: HTTP ${e.status}`);return e.json()}async function _M(s,t=fetch){const e=mM(await lo(s,t)),n=a=>new URL(a,s).toString(),[i,r]=await Promise.all([lo(n(e.classes),t).then(xM),lo(n(e.preprocess),t).then(gM)]);return{manifestUrl:s,modelUrl:n(e.model),manifest:e,classes:i,preprocess:r}}async function vM(s){const t=await crypto.subtle.digest("SHA-256",s);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function yM(s){const t=globalThis.ort;if(t?.InferenceSession)return t;if(!s)throw new Error("onnxruntime-web не подключён: укажите ?ort=<адрес ort.webgpu.min.mjs> (см. docs/INFERENCE.md) или подключите ort глобально");const e=await import(s),n=e.InferenceSession?e:e.default;if(!n?.InferenceSession)throw new Error(`По адресу ${s} нет onnxruntime-web (нет InferenceSession)`);return n.env?.wasm&&!n.env.wasm.wasmPaths&&(n.env.wasm.wasmPaths=new URL(".",s).toString()),n}function MM(s,t=["webgpu","wasm"]){return{async createSession(e,n){const i=[],r=typeof navigator<"u"&&"gpu"in navigator;for(const a of t){if(a==="webgpu"&&!r){i.push("webgpu: navigator.gpu отсутствует");continue}try{const o=await s.InferenceSession.create(new Uint8Array(e),{executionProviders:[a],graphOptimizationLevel:"all"}),l=n.input??o.inputNames[0],c=n.output??o.outputNames[0];return{provider:a,inputName:l,outputName:c,async run(h,u){const f=(await o.run({[l]:new s.Tensor("float32",h,u)}))[c];if(!f)throw new Error(`Модель не вернула выход ${c}`);return{data:f.data,dims:f.dims}},release:()=>o.release?.()}}catch(o){i.push(`${a}: ${o.message}`)}}throw new Error(`Не удалось создать сеанс ONNX (${i.join("; ")})`)}}}const Hh="исследовательская модель, не для диагностики",Gh="http://www.w3.org/2000/svg",bM=`
#inferBox { border: 1px dashed #b7791f; border-radius: 8px; padding: 8px 10px; display: grid; gap: 6px; font-size: 13px; }
#inferBox .infer-badge { background: #fff6db; color: #7a5b00; border-radius: 6px; padding: 4px 8px; font-weight: 600; }
#inferBox label.infer-toggle { display: flex; gap: 8px; align-items: center; cursor: pointer; }
#inferBox .infer-status { color: var(--muted, #666); white-space: pre-wrap; }
#inferBox .infer-classes { display: grid; gap: 4px; }
#inferBox .infer-class { display: grid; grid-template-columns: 12px 1fr 6em 3em; gap: 6px; align-items: center; }
#inferBox .infer-class i { width: 12px; height: 12px; border-radius: 3px; display: block; }
#inferBox .infer-class input { width: 100%; }
.infer-layer { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.infer-layer path { fill-rule: evenodd; fill-opacity: .25; stroke-width: 2; vector-effect: non-scaling-stroke; }
.infer-tag { position: absolute; left: 6px; bottom: 6px; background: rgba(122,91,0,.9); color: #fff; font: 600 11px system-ui, sans-serif; padding: 2px 6px; border-radius: 4px; pointer-events: none; }
body.sim-mode #inferBox, body.sim-mode .infer-layer, body.sim-mode .infer-tag { display: none !important; }
`;function SM(s){const e=new URL(s).searchParams.get("model");return e?new URL(e,s).toString():null}function TM(s){const t=e=>"M"+e.map(([n,i])=>`${n.toFixed(1)},${i.toFixed(1)}`).join("L")+"Z";return s.map(e=>t(e.outer)+e.holes.map(t).join("")).join("")}function EM(s){const t=SM(window.location.href);if(!t)return null;const e=new URL(window.location.href).searchParams.get("ort"),n=e?new URL(e,window.location.href).toString():null,i=document.createElement("style");i.textContent=bM,document.head.append(i);const r=document.createElement("section");r.id="inferBox",r.setAttribute("aria-label","Исследовательская модель"),r.innerHTML=`
    <div class="infer-badge">⚠ ${Hh}</div>
    <label class="infer-toggle"><input type="checkbox" id="inferToggle" /> Показать контуры модели</label>
    <div class="infer-status" id="inferStatus"></div>
    <div class="infer-classes" id="inferClasses"></div>`,s.after.insertAdjacentElement("afterend",r);const a=r.querySelector("#inferToggle"),o=r.querySelector("#inferStatus"),l=r.querySelector("#inferClasses");o.textContent=`Выключено. Модель: ${t}`;const c=document.createElementNS(Gh,"svg");c.setAttribute("viewBox",`0 0 ${s.frameW} ${s.frameH}`),c.setAttribute("preserveAspectRatio","xMidYMid meet"),c.classList.add("infer-layer"),c.setAttribute("aria-label","Контуры исследовательской модели"),c.style.display="none";const h=document.createElement("div");h.className="infer-tag",h.textContent=Hh,h.hidden=!0,s.screen.append(c,h);let u=null,d=null,f=!1,x=null;const g=[],m=new Map,p=()=>{const M=s.canvas.getContext("2d");return M?M.getImageData(0,0,s.canvas.width,s.canvas.height):null},v=M=>{if(c.replaceChildren(),!(!M||!f))for(const b of M.classes){if(!b.polygons.length)continue;const R=document.createElementNS(Gh,"path");R.setAttribute("d",TM(b.polygons)),R.setAttribute("fill",b.color),R.setAttribute("stroke",b.color),R.dataset.cls=b.name,c.append(R)}},_=M=>{if(u){l.replaceChildren();for(const b of u.spec.classes){if(b.background)continue;const R=M?.classes.find(j=>j.classId===b.id),N=document.createElement("div");N.className="infer-class";const U=document.createElement("i");U.style.background=b.color;const V=document.createElement("span");V.textContent=`${b.label??b.name}: ${R?.meanConfidence!=null?`уверенность ${(R.meanConfidence*100).toFixed(0)}%`:"нет"}`;const O=document.createElement("input");O.type="range",O.min="0",O.max="1",O.step="0.05",O.value=String(u.thresholds[b.id]??b.threshold??.5),O.title="Порог уверенности",O.setAttribute("aria-label",`Порог уверенности: ${b.label??b.name}`);const G=document.createElement("output");G.textContent=Number(O.value).toFixed(2),O.addEventListener("change",()=>{u.thresholds[b.id]=Number(O.value),G.textContent=Number(O.value).toFixed(2),C()}),N.append(U,V,O,G),l.append(N)}}},y=M=>`Кадр № ${M.frameId} · исполнитель ${M.provider} · ${M.times.totalMs.toFixed(0)} мс (модель ${M.times.runMs.toFixed(0)} мс)
Модель: ${u.spec.manifest.name} ${u.spec.manifest.version}`,T=()=>u?Promise.resolve(u):d||(o.textContent="Загрузка модели…",d=(async()=>{const M=await _M(t),b=await fetch(M.modelUrl);if(!b.ok)throw new Error(`Не загружен ${M.modelUrl}: HTTP ${b.status}`);const R=await b.arrayBuffer();if(M.manifest.sha256){const O=await vM(R);if(O.toLowerCase()!==M.manifest.sha256.toLowerCase())throw new Error(`SHA-256 модели не совпадает: ${O}`)}const U=await(s.runtime??MM(await yM(n))).createSession(R,{input:M.manifest.input.name,output:M.manifest.output.name}),V=new pM(M,U);return V.onResult=O=>{x=O,v(O);const G=m.get(O.frameId);G!==void 0&&(g.push(performance.now()-G),g.length>400&&g.shift(),m.delete(O.frameId)),o.textContent=y(O),_(O)},V.onError=O=>o.textContent=`Ошибка модели: ${O.message}`,u=V,_(null),V})(),d.catch(M=>{d=null,o.textContent=`Модель не загружена: ${M.message}`,a.checked=!1,I(!1)}),d),w=M=>{!f||!u||(m.clear(),m.set(M,performance.now()),u.request(M,()=>s.currentFrame()===M?p():null))},C=()=>{const M=s.currentFrame();M!==null&&w(M)},I=M=>{if(f=M,c.style.display=M?"":"none",h.hidden=!M,!M){u?.cancel(),x=null,v(null),u&&(o.textContent="Выключено.");return}T().then(C,()=>{})};return a.addEventListener("change",()=>I(a.checked)),window.sonolabInfer={manifestUrl:t,enabled:()=>f,setEnabled:M=>(a.checked=M,I(M),M?T().then(()=>!0):Promise.resolve(!1)),last:()=>x,stats:()=>u?{...u.stats}:null,timings:()=>u?{...u.summary(),endToEnd:Qr(g)}:null,bench:async(M=30)=>{const b=await T(),R=s.currentFrame(),N=p();if(R===null||!N)throw new Error("Нет показанного кадра");for(let j=0;j<2;j++)await b.runOnce(R,N);const U=b.samples.length,V=[];for(let j=0;j<M;j++){const H=performance.now(),et=await b.runOnce(R,p()??N);v(f?et:null),await new Promise(K=>requestAnimationFrame(()=>K(null))),V.push(performance.now()-H)}const O=b.samples.slice(U),G=j=>Qr(O.map(H=>H[j]));return f&&x&&v(x),{provider:b.session.provider,n:M,input:[b.spec.manifest.input.height,b.spec.manifest.input.width],preprocess:G("preprocessMs"),run:G("runMs"),postprocess:G("postprocessMs"),pipeline:G("totalMs"),frameToPaint:Qr(V)}}},{onFrame(M){f&&w(M)},onClear(){u?.cancel(),x=null,v(null)}}}const re=s=>document.getElementById(s),Ps=new URL("./",window.location.href).toString(),wM="Для этой области данные пока не загружены",ho=.5,Wh={idle:"Датчик не установлен",loading:"Загрузка",ready:"Готово","out-of-area":"Вне подготовленной области",error:"Ошибка данных"};class AM{samples=[];pendingInput=null;add(t){this.samples.push(t),this.samples.length>400&&this.samples.shift()}summary(){const t=[...this.samples].sort((n,i)=>n-i);if(!t.length)return null;const e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{n:t.length,median:e(.5),p95:e(.95),max:t[t.length-1]}}}async function RM(){const s=re("scene"),t=re("sceneLoading");let e;try{e=await ry(Ps,z=>t.textContent=`Загрузка модели человека… ${Math.round(z*100)}%`)}catch(z){t.textContent=`Ошибка загрузки модели человека: ${z.message}`;return}t.hidden=!0;const n=new oy(s,e);let i,r,a=null,o=[];try{o=await W_(Ps);const z=q_(o,new URL(window.location.href).searchParams.get("case"));({manifest:i,baseUrl:r}=await X_(Ps,z)),z.annotations&&(a=new URL(z.annotations,Ps).toString())}catch(z){re("status").textContent=Wh.error,re("status").dataset.s="error",re("frameInfo").textContent=String(z.message),Xh(n,()=>{});return}CM(i),PM(o,i);const l=i.trajectory.bodyPlacement,c=l.path?ev(n.human.forearm,l.path.from,l.path.to,l.path.rayDir,41,n.human.skinMeshes.filter(z=>z.visible!==!1)):nv(n.human.forearm,n.human.forearmAxis,l.startFractionOfForearm,l.endFractionOfForearm),h=!l.path;if(!h){const z=c.poseAt(.5);n.setRegionFocus(new P(...z.pointBody),new P(...z.normalBody))}n.scene.add(tv(c));const u=J_(c);n.scene.add(u);const d=new Q_;n.scene.add(d.group);const f=new cy(r,i),x=re("usCanvas"),g=new ly(x,f,i.frames.width,i.frames.height),m=re("usOverlay"),p=re("status"),v=re("frameInfo"),_=re("slider"),y=new AM;let T={loaded:0,total:i.frames.count},w=0,C=null,I=null,M=null;g.onDrawn=z=>{C?.setFrame(I?.isOblique()?null:z),I?.afterDraw(z),I?.isOblique()||M?.onFrame(z)},g.onStatus=z=>{p.dataset.s=z,p.textContent=z==="loading"?`Загрузка ${T.loaded}/${T.total}`:Wh[z]};const b=(z,at)=>{I?.onPose(),z.kind==="in-area"?(m.hidden=!0,g.show(z.frameId),y.pendingInput=at,v.textContent=`кадр № ${z.frameId} (0–${i.frames.count-1}) · позиция ${(z.t*100).toFixed(1)}%`,z.origin!=="slider"&&(_.value=String(Math.round(z.t*1e3))),_.disabled=!1):z.kind==="out-of-area"&&(C?.setFrame(null),M?.onClear(),g.clear("out-of-area"),m.hidden=!1,m.textContent=wM,v.textContent="кадр не показывается"),H()};xy(i)&&(I=new gy({manifest:i,source:f,frames:g,canvas:x,screen:document.querySelector(".us-screen"),after:_.closest("label"),probeGroup:d.group,onObliqueChange:z=>C?.setFrame(z?null:g.shownFrameId)}));const R=new Z_(n,d,{caseId:i.caseId,lut:i.trajectory.lut,path:c,zoneHitMesh:u,isOnRegion:z=>h?n.human.isOnForearm(z):!0,onState:b}),N=()=>{const z=R.state,at=new URL(window.location.href);z.kind==="in-area"?at.searchParams.set("t",z.t.toFixed(3)):at.searchParams.delete("t"),history.replaceState(null,"",at)};window.addEventListener("pointerup",()=>setTimeout(N,0)),_.addEventListener("input",z=>R.setT(Number(_.value)/1e3,"slider",z.timeStamp)),_.addEventListener("change",N),re("btnArm").addEventListener("click",()=>n.goTo("region")),re("btnBody").addEventListener("click",()=>n.goTo("body")),re("btnResetProbe").addEventListener("click",()=>{R.setT(ho,"reset"),N()});const U=Number(new URL(window.location.href).searchParams.get("t")),V=Number.isFinite(U)&&new URL(window.location.href).searchParams.has("t")?Math.min(1,Math.max(0,U)):ho,O=i.trajectory.lut;C=new Ay({manifest:i,annotationsUrl:a,overlayHost:document.querySelector(".us-screen"),tabsHost:re("annTabs"),bodyHost:re("annBody"),currentFrame:()=>g.shownFrameId,goToFrame:z=>{const at=O.indexOf(z);return at<0?!1:(I?.setAngles(0,0),R.setT(at/(O.length-1),"slider"),N(),!0)}}),M=EM({after:re("annBody"),screen:document.querySelector(".us-screen"),canvas:x,frameW:i.frames.width,frameH:i.frames.height,currentFrame:()=>g.shownFrameId}),R.setT(V,"url");const G=R.state.kind==="in-area"?R.state.frameId:0,j=performance.now();f.preloadAll(G,(z,at)=>{T={loaded:z,total:at},g.status==="loading"&&(p.textContent=`Загрузка ${z}/${at}`)}).then(()=>{w=performance.now()-j,f.failed.size&&(p.dataset.s="error",p.textContent=`Ошибка данных: не загружено кадров — ${f.failed.size}`),H(),I?.build()}),(new URL(window.location.href).searchParams.get("view")==="arm"||window.innerWidth<820||!h)&&n.goTo("region",0);function H(){const z=y.summary(),at=R.state;re("diag").textContent=[`Состояние: ${at.kind}${at.kind==="in-area"?` t=${at.t.toFixed(3)} frameId=${at.frameId}`:""}`,`Показан кадр: ${g.shownFrameId??"—"}`,`Кадров загружено: ${T.loaded}/${T.total}${w?` за ${w.toFixed(0)} мс`:""}`,z?`Задержка ввод→показ (n=${z.n}): медиана ${z.median.toFixed(1)} мс, p95 ${z.p95.toFixed(1)} мс, макс ${z.max.toFixed(1)} мс`:"Задержка: нет измерений (подвигайте датчик)",`Устройство: ${navigator.userAgent}`].join(`
`)}window.sonolab={state:()=>R.state,shownFrameId:()=>g.shownFrameId,status:()=>g.status,camera:()=>n.cameraState(),latency:()=>y.summary(),latencySamples:()=>[...y.samples],preload:()=>({...T,ms:w,failed:[...f.failed]}),setT:z=>R.setT(z,"slider"),controlPoints:i.controlPoints,projectProbeToScreen:()=>{const z=d.group.position.clone().project(n.camera),at=n.renderer.domElement.getBoundingClientRect();return{x:at.left+(z.x+1)/2*at.width,y:at.top+(1-z.y)/2*at.height}},projectBodyPointToScreen:z=>{const at=new P(...z).project(n.camera),Tt=n.renderer.domElement.getBoundingClientRect();return{x:Tt.left+(at.x+1)/2*Tt.width,y:Tt.top+(1-at.y)/2*Tt.height}},pathPoint:z=>c.poseAt(z).pointBody,goTo:z=>n.goTo(z,0),caseId:i.caseId,annotation:()=>C?.debugState(),imageToScreen:(z,at)=>C?.imageToScreen(z,at),setCamera:(z,at)=>n.setCamera(z,at),reslice:()=>I?.debug()??null,setReslice:(z,at)=>I?.setAngles(z,at)};let et=0;const K=new eM({view:n,probe:d,baseUrl:Ps,screen:document.querySelector(".us-screen"),panel:re("simPanel"),status:p,info:re("simInfo"),landmarks:n.human.meta.landmarks,setRecordedInputEnabled:z=>R.enabled=z}),gt=async z=>{re("modeRec").classList.toggle("active",z==="rec"),re("modeSim").classList.toggle("active",z==="sim");const at=new URL(window.location.href);if(z==="sim"?at.searchParams.set("mode","sim"):at.searchParams.delete("mode"),history.replaceState(null,"",at),z==="sim")I?.setAngles(0,0),await K.enter(),n.goTo("forearm");else{K.exit();const Tt=R.state;R.setT(Tt.kind==="in-area"?Tt.t:ho,"reset"),n.goTo("region")}};re("modeRec").addEventListener("click",()=>gt("rec")),re("modeSim").addEventListener("click",()=>gt("sim")),new URL(window.location.href).searchParams.get("mode")==="sim"&&gt("sim"),window.sonolabSim={state:()=>K.debug(),setRotate:z=>K.setRotate(z),placeAt:(z,at)=>K.placeAt(z,at),placeOnSkin:(z,at)=>K.placeOnSkin(z,at),placeOnSurface:(z,at,Tt,Kt)=>K.placeOnSurface(z,at,Tt,Kt),placeFrom:(z,at,Tt)=>K.placeFrom(z,at,Tt),abdomenLandmarks:()=>K.anatomy?.meta.landmarksAbdomen??null,setTilt:z=>K.setTilt(z),applyPreset:z=>K.applyPreset(z),presets:()=>K.anatomy?.meta.probePresets??{},setRock:z=>K.setRock(z),setDepth:z=>K.setDepth(z),placeFromPoint:(z,at)=>K.placeFromPoint(z,at),setUnderside:z=>K.setUnderside(z),imageToScreen:(z,at)=>K.imageToScreen(z,at),maskBoxPolygon:z=>K.maskBoxPolygon(z),probeScreen:()=>{const z=d.group.position.clone().project(n.camera),at=n.renderer.domElement.getBoundingClientRect();return{x:at.left+(z.x+1)/2*at.width,y:at.top+(1-z.y)/2*at.height}},bodyToScreen:z=>{const at=new P(...z).project(n.camera),Tt=n.renderer.domElement.getBoundingClientRect();return{x:Tt.left+(at.x+1)/2*Tt.width,y:Tt.top+(1-at.y)/2*Tt.height}},landmarks:n.human.meta.landmarks},Xh(n,z=>{K.tick(),R.flush(),y.pendingInput!==null&&g.status==="ready"&&(y.add(z-y.pendingInput),y.pendingInput=null),++et%30===0&&H()})}function Xh(s,t){const e=()=>{const n=performance.now();t(n),s.render(n),requestAnimationFrame(e)};requestAnimationFrame(e)}function CM(s){re("caseTitle").textContent=s.title;const t={left:"левая",right:"правая",unknown:"неизвестно"}[s.patientSide],n=[["Тип данных",{"recorded-sweep":"записанный проход (настоящие кадры)","volume-reslice":"срезы настоящего УЗИ-объёма (собран из записанных кадров с трекингом)","registered-volume":"пространственно зарегистрированный объём",synthetic:"СИМУЛЯЦИЯ"}[s.imageType]],["Соответствие",s.trajectory.kind==="relative-sweep-index"?"навигация по нормированному пути записи (без регистрации к телу)":"пространственная регистрация"],["Область",`${s.region.name}, ${s.trajectory.bodyPlacement.surface}`],["Сторона пациента",t],["Направление прохода",s.trajectory.directionOnBody.value==="unknown"?"неизвестно (в источнике не указано; на фигуре уложено условно)":s.region.id==="forearm"?"от проксимального отдела к запястью (по видео внешней камеры; требует экспертной проверки)":s.trajectory.directionOnBody.value],["Датчик",`${s.probe.model} — ${s.probe.kind}; изображение ${s.probe.imageFormat}`],["Частота / глубина",`${s.probe.centerFrequencyMHz} МГц / ${s.imageGeometry.depthSettingCm} см (настройка аппарата)`],["Масштаб пикселей",s.imageGeometry.pixelSpacingMm?`${s.imageGeometry.pixelSpacingMm} мм (из источника)`:"не указан в источнике — линейка не строится"],["Метка датчика",(s.imageGeometry.probeMarkerSide==="unknown"?"сторона неизвестна":s.imageGeometry.probeMarkerSide)+(s.imageGeometry.lateralOrientation?`. ${s.imageGeometry.lateralOrientation}`:"")],["Калибровка изображение→трекер",s.calibration.imageToSensor==="absent"?"отсутствует":"учтена авторами набора"],["Кадров",`${s.frames.count} (${s.frames.width}×${s.frames.height}), без автопроигрывания`]],i=re("caseFacts");for(const[u,d]of n){const f=document.createElement("dt");f.textContent=u;const x=document.createElement("dd");x.textContent=d,i.append(f,x)}const r=[["Сдвиг вдоль записанного прохода",s.supportedMotions.slideAlongSweep],["Поперечный сдвиг",s.supportedMotions.lateralShift],["Вращение датчика",s.supportedMotions.rotation],["Наклон",s.supportedMotions.tilt],["Компрессия",s.supportedMotions.compression]],a=re("motions");for(const[u,d]of r){const f=document.createElement("li");f.textContent=u+(d?"":" — нет данных"),f.dataset.on=d?"1":"0",f.dataset.mark=d?"✓":"✕",a.append(f)}const o=re("sourceLine");o.innerHTML="",o.append(`Источник: ${s.source.attribution} Набор `);const l=document.createElement("a");l.href=s.source.url,l.target="_blank",l.rel="noopener",l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`;const c=s.caseId.startsWith("cuhk");c?l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`:l.textContent=s.source.dataset,o.append(l,c?`, эпизод ${s.source.episode}. Лицензия `:`, ${s.source.subset}. Лицензия `);const h=document.createElement("a");h.href=s.source.licenseUrl,h.target="_blank",h.rel="noopener",h.textContent=c?"CC BY 4.0":s.source.license,o.append(h,c?". Кадры не изменены, кроме перекодирования AV1→JPEG. Учебный материал, не для диагностики.":". Кадры — срезы объёма источника, перекодированы в JPEG и отражены по вертикали. Эталонные контуры — разметка авторов набора. Учебный материал, не для диагностики."),window.innerWidth<820&&(re("infoBox").open=!1)}function PM(s,t){const e=re("caseSelect"),n=re("modeRec");n.textContent=`Запись · ${t.region.name.toLowerCase()}`,re("btnArm").textContent=t.region.id==="forearm"?"Приблизить руку":`Приблизить: ${t.region.name.toLowerCase()}`,t.region.id!=="forearm"&&(re("sceneHint").textContent="Перетащите датчик вдоль синего пунктира. Вращение вида — перетаскивание по фону, масштаб — колесо или два пальца. Касание кожи ставит датчик в точку."),e.innerHTML="";for(const i of s){const r=document.createElement("option");r.value=i.caseId,r.textContent=i.label??i.caseId,r.selected=i.caseId===t.caseId,e.append(r)}e.hidden=s.length<2,e.addEventListener("change",()=>{const i=new URL(window.location.href);i.searchParams.set("case",e.value),i.searchParams.delete("t"),i.searchParams.delete("mode"),window.location.href=i.toString()})}RM();
