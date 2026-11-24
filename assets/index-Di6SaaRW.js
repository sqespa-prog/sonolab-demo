(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="181",ts={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,Zc=1,ud=2,Jh=1,Qh=2,jn=3,Qn=0,Xe=1,sn=2,Zn=0,es=1,Jc=2,Qc=3,tl=4,dd=5,Si=100,fd=101,pd=102,md=103,xd=104,gd=200,_d=201,vd=202,yd=203,go=204,_o=205,bd=206,Md=207,Sd=208,Ed=209,Td=210,wd=211,Ad=212,Rd=213,Cd=214,vo=0,yo=1,bo=2,rs=3,Mo=4,So=5,Eo=6,To=7,gc=0,Pd=1,Ld=2,fi=0,Id=1,Dd=2,Nd=3,Ud=4,Fd=5,Od=6,tu=7,el="attached",kd="detached",eu=300,as=301,os=302,wo=303,Ao=304,pa=306,Ai=1e3,In=1001,ra=1002,$e=1003,nu=1004,Us=1005,Oe=1006,Kr=1007,Dn=1008,Fn=1009,iu=1010,su=1011,Ys=1012,_c=1013,Ri=1014,Mn=1015,ms=1016,vc=1017,yc=1018,Ks=1020,ru=35902,au=35899,ou=1021,cu=1022,rn=1023,Zs=1026,Js=1027,bc=1028,Mc=1029,Sc=1030,Ec=1031,Tc=1033,Zr=33776,Jr=33777,Qr=33778,ta=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,Io=36196,Do=37492,No=37496,Uo=37808,Fo=37809,Oo=37810,ko=37811,Bo=37812,zo=37813,Vo=37814,Ho=37815,Go=37816,Wo=37817,Xo=37818,$o=37819,qo=37820,jo=37821,Yo=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,tc=36285,ec=36286,Qs=2300,tr=2301,ba=2302,nl=2400,il=2401,sl=2402,Bd=2500,zd=0,lu=1,nc=2,Vd=3200,Hd=3201,wc=0,Gd=1,ui="",Ie="srgb",je="srgb-linear",aa="linear",fe="srgb",Ni=7680,rl=519,Wd=512,Xd=513,$d=514,hu=515,qd=516,jd=517,Yd=518,Kd=519,ic=35044,al="300 es",Nn=2e3,oa=2001;function uu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zd(){const s=er("canvas");return s.style.display="block",s}const ol={};function ca(...s){const t="THREE."+s.shift();console.log(t,...s)}function Pt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function te(...s){const t="THREE."+s.shift();console.error(t,...s)}function nr(...s){const t=s.join(" ");t in ol||(ol[t]=!0,Pt(...s))}function Jd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Hs=Math.PI/180,cs=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function Ac(s,t){return(s%t+t)%t}function Qd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function tf(s,t,e){return s!==t?(e-s)/(t-s):0}function Gs(s,t,e){return(1-e)*s+e*t}function ef(s,t,e,n){return Gs(s,t,1-Math.exp(-e*n))}function nf(s,t=1){return t-Math.abs(Ac(s,t*2)-t)}function sf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function rf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function af(s,t){return s+Math.floor(Math.random()*(t-s+1))}function of(s,t){return s+Math.random()*(t-s)}function cf(s){return s*(.5-Math.random())}function lf(s){s!==void 0&&(cl=s);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hf(s){return s*Hs}function uf(s){return s*cs}function df(s){return(s&s-1)===0&&s!==0}function ff(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mf(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:Hs,RAD2DEG:cs,generateUUID:hn,clamp:Zt,euclideanModulo:Ac,mapLinear:Qd,inverseLerp:tf,lerp:Gs,damp:ef,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:af,randFloat:of,randFloatSpread:cf,seededRandom:lf,degToRad:hf,radToDeg:uf,isPowerOfTwo:df,ceilPowerOfTwo:ff,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:le,denormalize:yn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let x=l*d+c*f+h*m+u*g;x<0&&(d=-d,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const v=Math.acos(x),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+g*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new P,ll=new dn;class $t{constructor(t,e,n,i,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],x=i[3],p=i[6],v=i[1],_=i[4],y=i[7],T=i[2],E=i[5],R=i[8];return r[0]=a*g+o*v+l*T,r[3]=a*x+o*_+l*E,r[6]=a*p+o*y+l*R,r[1]=c*g+h*v+u*T,r[4]=c*x+h*_+u*E,r[7]=c*p+h*y+u*R,r[2]=d*g+f*v+m*T,r[5]=d*x+f*_+m*E,r[8]=d*p+f*y+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new $t,hl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const s={enabled:!0,workingColorSpace:je,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?aa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[je]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const se=xf();function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ui;class gf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=er("canvas")),Ui.width=t.width,Ui.height=t.height;const i=Ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _f=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ea(i[a].image)):r.push(Ea(i[a]))}else r=Ea(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let vf=0;const Ta=new P;class De extends Ii{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=In,i=In,r=Oe,a=Dn,o=rn,l=Fn,c=De.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=hn(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=eu;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+d)/4,R=(u+g)/4,D=(m+x)/4;return _>y&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=R/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((x-m)*(x-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-m)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new De(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Cc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class du extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),pr.subVectors(this.max,Ms),Fi.subVectors(t.a,Ms),Oi.subVectors(t.b,Ms),ki.subVectors(t.c,Ms),ni.subVectors(Oi,Fi),ii.subVectors(ki,Oi),mi.subVectors(Fi,ki);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!wa(e,Fi,Oi,ki,pr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Fi,Oi,ki,pr))?!1:(mr.crossVectors(ni,ii),e=[mr.x,mr.y,mr.z],wa(e,Fi,Oi,ki,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,fr=new ei,Fi=new P,Oi=new P,ki=new P,ni=new P,ii=new P,mi=new P,Ms=new P,pr=new P,mr=new P,xi=new P;function wa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xi.fromArray(s,r);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mf=new ei,Ss=new P,Aa=new P;class On{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Aa)),this.expandByPoint(Ss.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Vn=new P,Ra=new P,xr=new P,si=new P,Ca=new P,gr=new P,Pa=new P;class xs{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ra.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=si.dot(this.direction),l=-si.dot(xr),c=si.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ra).addScaledVector(xr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){Ca.subVectors(e,t),gr.subVectors(n,t),Pa.crossVectors(Ca,gr);let a=this.direction.dot(Pa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(gr.crossVectors(si,gr));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(si));if(c<0||l+c>a)return null;const h=-o*si.dot(Pa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,m,g,x){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,g,x)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,g,x){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d+g*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,g=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,Ef)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ri.crossVectors(n,en),ri.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ri.crossVectors(n,en)),ri.normalize(),_r.crossVectors(en,ri),i[0]=ri.x,i[4]=_r.x,i[8]=en.x,i[1]=ri.y,i[5]=_r.y,i[9]=en.y,i[2]=ri.z,i[6]=_r.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],v=n[3],_=n[7],y=n[11],T=n[15],E=i[0],R=i[4],D=i[8],b=i[12],M=i[1],C=i[5],N=i[9],F=i[13],H=i[2],k=i[6],W=i[10],K=i[14],G=i[3],tt=i[7],it=i[11],st=i[15];return r[0]=a*E+o*M+l*H+c*G,r[4]=a*R+o*C+l*k+c*tt,r[8]=a*D+o*N+l*W+c*it,r[12]=a*b+o*F+l*K+c*st,r[1]=h*E+u*M+d*H+f*G,r[5]=h*R+u*C+d*k+f*tt,r[9]=h*D+u*N+d*W+f*it,r[13]=h*b+u*F+d*K+f*st,r[2]=m*E+g*M+x*H+p*G,r[6]=m*R+g*C+x*k+p*tt,r[10]=m*D+g*N+x*W+p*it,r[14]=m*b+g*F+x*K+p*st,r[3]=v*E+_*M+y*H+T*G,r[7]=v*R+_*C+y*k+T*tt,r[11]=v*D+_*N+y*W+T*it,r[15]=v*b+_*F+y*K+T*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],g=t[7],x=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+x*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],g=t[13],x=t[14],p=t[15],v=u*x*c-g*d*c+g*l*f-o*x*f-u*l*p+o*d*p,_=m*d*c-h*x*c-m*l*f+a*x*f+h*l*p-a*d*p,y=h*g*c-m*u*c+m*o*f-a*g*f-h*o*p+a*u*p,T=m*u*l-h*g*l-m*o*d+a*g*d+h*o*x-a*u*x,E=e*v+n*_+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(g*d*r-u*x*r-g*i*f+n*x*f+u*i*p-n*d*p)*R,t[2]=(o*x*r-g*l*r+g*i*c-n*x*c-o*i*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=_*R,t[5]=(h*x*r-m*d*r+m*i*f-e*x*f-h*i*p+e*d*p)*R,t[6]=(m*l*r-a*x*r-m*i*c+e*x*c+a*i*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*R,t[8]=y*R,t[9]=(m*u*r-h*g*r-m*n*f+e*g*f+h*n*p-e*u*p)*R,t[10]=(a*g*r-m*o*r+m*n*c-e*g*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=T*R,t[13]=(h*g*i-m*u*i+m*n*d-e*g*d-h*n*x+e*u*x)*R,t[14]=(m*o*i-a*g*i-m*n*l+e*g*l+a*n*x-e*o*x)*R,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,g=a*h,x=a*u,p=o*u,v=l*c,_=l*h,y=l*u,T=n.x,E=n.y,R=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(m-_)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(m+_)*R,i[9]=(x-v)*R,i[10]=(1-(d+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/r,h=1/a,u=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Nn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(l)m=r/(a-r),g=a*r/(a-r);else if(o===Nn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===oa)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Nn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,g;if(l)m=1/(a-r),g=a/(a-r);else if(o===Nn)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===oa)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new P,gn=new jt,Sf=new P(0,0,0),Ef=new P(1,1,1),ri=new P,_r=new P,en=new P,dl=new jt,fl=new dn;class fn{constructor(t=0,e=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fl.setFromEuler(this),this.setFromQuaternion(fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tf=0;const pl=new P,zi=new dn,Hn=new jt,vr=new P,Es=new P,wf=new P,Af=new dn,ml=new P(1,0,0),xl=new P(0,1,0),gl=new P(0,0,1),_l={type:"added"},Rf={type:"removed"},Vi={type:"childadded",child:null},La={type:"childremoved",child:null};class ve extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new P,e=new fn,n=new dn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new $t}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Es,vr,this.up):Hn.lookAt(vr,Es,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Gn=new P,Ia=new P,Wn=new P,Hi=new P,Gi=new P,vl=new P,Da=new P,Na=new P,Ua=new P,Fa=new ce,Oa=new ce,ka=new ce;class bn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),Gn.subVectors(n,e),Ia.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Gn),l=_n.dot(Ia),c=Gn.dot(Gn),h=Gn.dot(Ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Fa.setScalar(0),Oa.setScalar(0),ka.setScalar(0),Fa.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(ka,r.z),a}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Gn.subVectors(t,e),_n.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Hi.subVectors(i,n),Gi.subVectors(r,n),Da.subVectors(t,n);const l=Hi.dot(Da),c=Gi.dot(Da);if(l<=0&&c<=0)return e.copy(n);Na.subVectors(t,i);const h=Hi.dot(Na),u=Gi.dot(Na);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Hi,a);Ua.subVectors(t,r);const f=Hi.dot(Ua),m=Gi.dot(Ua);if(m>=0&&f<=m)return e.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Gi,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return vl.subVectors(r,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(vl,o);const p=1/(x+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Ac(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ba(a,r,t+1/3),this.g=Ba(a,r,t),this.b=Ba(a,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return se.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){se.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(yr);const n=Gs(ai.h,yr.h,e),i=Gs(ai.s,yr.s,e),r=Gs(ai.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new zt;zt.NAMES=fu;let Cf=0;class Tn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=es,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sn extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,br=new pt;let Pf=0;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}}class pu extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mu extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lf=0;const cn=new jt,za=new ve,Wi=new P,nn=new ei,Ts=new ei,Le=new P;class Ce extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?mu:pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(nn.min,Ts.min),nn.expandByPoint(Le),Le.addVectors(nn.max,Ts.max),nn.expandByPoint(Le)):(nn.expandByPoint(Ts.min),nn.expandByPoint(Ts.max))}nn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Le.add(Wi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,d=new pt,f=new pt,m=new pt,g=new P,x=new P;function p(D,b,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[D].add(g),o[b].add(g),o[M].add(g),l[D].add(x),l[b].add(x),l[M].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){const M=v[D],C=M.start,N=M.count;for(let F=C,H=C+N;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new P,y=new P,T=new P,E=new P;function R(D){T.fromBufferAttribute(i,D),E.copy(T);const b=o[D];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(E,b);const C=y.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,b=v.length;D<b;++D){const M=v[D],C=M.start,N=M.count;for(let F=C,H=C+N;F<H;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),g=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new jt,gi=new xs,Mr=new On,bl=new P,Sr=new P,Er=new P,Tr=new P,Va=new P,wr=new P,Ml=new P,Ar=new P;class ie extends ve{constructor(t=new Ce,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,t),a?wr.addScaledVector(Va,h):wr.addScaledVector(Va.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Mr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Mr,bl)===null||gi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),gi.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){const E=o.getX(y),R=o.getX(y+1),D=o.getX(y+2);i=Rr(this,p,t,n,c,h,u,E,R,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const v=o.getX(x),_=o.getX(x+1),y=o.getX(x+2);i=Rr(this,a,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){const E=y,R=y+1,D=y+2;i=Rr(this,p,t,n,c,h,u,E,R,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const v=x,_=x+1,y=x+2;i=Rr(this,a,t,n,c,h,u,v,_,y),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function If(s,t,e,n,i,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Qn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:s}}function Rr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Sr),s.getVertexPosition(l,Er),s.getVertexPosition(c,Tr);const h=If(s,t,e,n,Sr,Er,Tr,Ml);if(h){const u=new P;bn.getBarycoord(Ml,Sr,Er,Tr,u),i&&(h.uv=bn.getInterpolatedAttribute(i,o,l,c,u,new pt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new pt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};bn.getNormal(Sr,Er,Tr,d.normal),h.face=d,h.barycoord=u}return h}class En extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function m(g,x,p,v,_,y,T,E,R,D,b){const M=y/R,C=T/D,N=y/2,F=T/2,H=E/2,k=R+1,W=D+1;let K=0,G=0;const tt=new P;for(let it=0;it<W;it++){const st=it*C-F;for(let Ut=0;Ut<k;Ut++){const Yt=Ut*M-N;tt[g]=Yt*v,tt[x]=st*_,tt[p]=H,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[x]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ut/R),u.push(1-it/D),K+=1}}for(let it=0;it<D;it++)for(let st=0;st<R;st++){const Ut=d+st+k*it,Yt=d+st+k*(it+1),Vt=d+(st+1)+k*(it+1),Jt=d+(st+1)+k*it;l.push(Ut,Yt,Jt),l.push(Yt,Vt,Jt),G+=6}o.addGroup(f,G,b),f+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=ls(s[e]);for(const i in n)t[i]=n[i]}return t}function Df(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Nf={clone:ls,merge:He};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gu extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,Sl=new pt,El=new pt;class We extends gu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,El),e.subVectors(El,Sl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,$i=1;class Of extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(Xi,$i,t,e);i.layers=this.layers,this.add(i);const r=new We(Xi,$i,t,e);r.layers=this.layers,this.add(r);const a=new We(Xi,$i,t,e);a.layers=this.layers,this.add(a);const o=new We(Xi,$i,t,e);o.layers=this.layers,this.add(o);const l=new We(Xi,$i,t,e);l.layers=this.layers,this.add(l);const c=new We(Xi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _u extends De{constructor(t=[],e=as,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kf extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _u(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new En(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Zn});r.uniforms.tEquirect.value=e;const a=new ie(i,r),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=Oe),new Of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Un extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const x=e.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vu extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new P;class Lc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tl=new P,wl=new ce,Al=new ce,Vf=new P,Rl=new jt,Cr=new P,Ga=new On,Cl=new jt,Wa=new xs;class Hf extends ie{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=el,this.bindMatrix=new jt,this.bindMatrixInverse=new jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),t.ray.intersectsSphere(Ga)!==!1&&(Cl.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(Cl),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Wa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ce,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===el?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;wl.fromBufferAttribute(i.attributes.skinIndex,t),Al.fromBufferAttribute(i.attributes.skinWeight,t),Tl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Al.getComponent(r);if(a!==0){const o=wl.getComponent(r);Rl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Vf.copy(Tl).applyMatrix4(Rl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class yu extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ma extends De{constructor(t=null,e=1,n=1,i,r,a,o,l,c=$e,h=$e,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new jt,Gf=new jt;class Ic{constructor(t=[],e=[]){this.uuid=hn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Pt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Gf;Pl.multiplyMatrices(o,e[r]),Pl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ic(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ma(e,t,t,rn,Mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(Pt("Skeleton: No bone found with UUID:",r),a=new yu),this.bones.push(a),this.boneInverses.push(new jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class sc extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new jt,Ll=new jt,Pr=[],Il=new ei,Wf=new jt,ws=new ie,As=new On;class bu extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Il.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Il)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),As.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),Ll.multiplyMatrices(n,qi),ws.matrixWorld=Ll,ws.raycast(t,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ma(new Float32Array(i*this.count),i,this.count,bc,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new P,Xf=new P,$f=new $t;class hi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xa.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$f.getNormalMatrix(t),i=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new On,qf=new pt(.5,.5),Lr=new P;class Dc{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],v=r[12],_=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,p-m,T-v).normalize(),i[1].setComponents(c+a,f+h,p+m,T+v).normalize(),i[2].setComponents(c+o,f+u,p+g,T+_).normalize(),i[3].setComponents(c-o,f-u,p-g,T-_).normalize(),n)i[4].setComponents(l,d,x,y).normalize(),i[5].setComponents(c-l,f-d,p-x,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-x,T-y).normalize(),e===Nn)i[5].setComponents(c+l,f+d,p+x,T+y).normalize();else if(e===oa)i[5].setComponents(l,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=qf.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nc extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const la=new P,ha=new P,Dl=new jt,Rs=new xs,Ir=new On,$a=new P,Nl=new P;class xa extends ve{constructor(t=new Ce,e=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)la.fromBufferAttribute(e,i-1),ha.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=la.distanceTo(ha);t.setAttribute("lineDistance",new me(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Dl.copy(i).invert(),Rs.copy(t.ray).applyMatrix4(Dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=c){const p=h.getX(g),v=h.getX(g+1),_=Dr(this,t,Rs,l,p,v,g);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(m-1),x=h.getX(f),p=Dr(this,t,Rs,l,g,x,m-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=c){const p=Dr(this,t,Rs,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=Dr(this,t,Rs,l,m-1,f,m-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dr(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(la.fromBufferAttribute(o,i),ha.fromBufferAttribute(o,r),e.distanceSqToSegment(la,ha,$a,Nl)>n)return;$a.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo($a);if(!(c<t.near||c>t.far))return{distance:c,point:Nl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ul=new P,Fl=new P;class jf extends xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ul.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ul.distanceTo(Fl);t.setAttribute("lineDistance",new me(n,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yf extends xa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Mu extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ol=new jt,rc=new xs,Nr=new On,Ur=new P;class Kf extends ve{constructor(t=new Ce,e=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Ol.copy(i).invert(),rc.copy(t.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const x=c.getX(m);Ur.fromBufferAttribute(u,x),kl(Ur,x,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)Ur.fromBufferAttribute(u,m),kl(Ur,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kl(s,t,e,n,i,r,a){const o=rc.distanceSqToPoint(s);if(o<e){const l=new P;rc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Su extends De{constructor(t,e,n=Ri,i,r,a,o=$e,l=$e,c,h=Zs,u=1){if(h!==Zs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Eu extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uc extends Ce{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,g=i+1,x=new P,p=new P;for(let v=0;v<=m;v++){let _=0,y=0,T=0,E=0;if(v<=n){const b=v/n,M=b*Math.PI/2;y=-h-t*Math.cos(M),T=t*Math.sin(M),E=-t*Math.cos(M),_=b*u}else if(v<=n+r){const b=(v-n)/r;y=-h+b*e,T=t,E=0,_=u+b*d}else{const b=(v-n-r)/n,M=b*Math.PI/2;y=h+t*Math.sin(M),T=t*Math.cos(M),E=t*Math.sin(M),_=u+d+b*u}const R=Math.max(0,Math.min(1,_/f));let D=0;v===0?D=.5/i:v===m&&(D=-.5/i);for(let b=0;b<=i;b++){const M=b/i,C=M*Math.PI*2,N=Math.sin(C),F=Math.cos(C);p.x=-T*F,p.y=y,p.z=T*N,o.push(p.x,p.y,p.z),x.set(-T*F,E,T*N),x.normalize(),l.push(x.x,x.y,x.z),c.push(M+D,R)}if(v>0){const b=(v-1)*g;for(let M=0;M<i;M++){const C=b+M,N=b+M+1,F=v*g+M,H=v*g+M+1;a.push(C,N,F),a.push(N,H,F)}}}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ir extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const g=[],x=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function v(){const y=new P,T=new P;let E=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const b=[],M=D/r,C=M*(e-t)+t;for(let N=0;N<=i;N++){const F=N/i,H=F*l+o,k=Math.sin(H),W=Math.cos(H);T.x=C*k,T.y=-M*n+x,T.z=C*W,u.push(T.x,T.y,T.z),y.set(k,R,W).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-M),b.push(m++)}g.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){const M=g[b][D],C=g[b+1][D],N=g[b+1][D+1],F=g[b][D+1];(t>0||b!==0)&&(h.push(M,C,F),E+=3),(e>0||b!==r-1)&&(h.push(C,N,F),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){const T=m,E=new pt,R=new P;let D=0;const b=y===!0?t:e,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,x*M,0),d.push(0,M,0),f.push(.5,.5),m++;const C=m;for(let N=0;N<=i;N++){const H=N/i*l+o,k=Math.cos(H),W=Math.sin(H);R.x=b*W,R.y=x*M,R.z=b*k,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=k*.5+.5,E.y=W*.5*M+.5,f.push(E.x,E.y),m++}for(let N=0;N<i;N++){const F=T+N,H=C+N;y===!0?h.push(H,H+1,F):h.push(H+1,H,F),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,l=new jt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Zt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends kn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zf extends Fc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Fr=new P,qa=new Oc,ja=new Oc,Ya=new Oc;class Tu extends kn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Fr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,g,x),ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,g,x),Ya.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,g,x)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(l),ja.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Jf(s,t){const e=1-s;return e*e*t}function Qf(s,t){return 2*(1-s)*s*t}function tp(s,t){return s*s*t}function Ws(s,t,e,n){return Jf(s,t)+Qf(s,e)+tp(s,n)}function ep(s,t){const e=1-s;return e*e*e*t}function np(s,t){const e=1-s;return 3*e*e*s*t}function ip(s,t){return 3*(1-s)*s*s*t}function sp(s,t){return s*s*s*t}function Xs(s,t,e,n,i){return ep(s,t)+np(s,e)+ip(s,n)+sp(s,i)}class wu extends kn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,i.x,r.x,a.x,o.x),Xs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rp extends kn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,i.x,r.x,a.x,o.x),Xs(t,i.y,r.y,a.y,o.y),Xs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Au extends kn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends kn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends kn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,i.x,r.x,a.x),Ws(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends kn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,i.x,r.x,a.x),Ws(t,i.y,r.y,a.y),Ws(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Bl(o,l.x,c.x,h.x,u.x),Bl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:Zf,CatmullRomCurve3:Tu,CubicBezierCurve:wu,CubicBezierCurve3:rp,EllipseCurve:Fc,LineCurve:Au,LineCurve3:ap,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:Cu,SplineCurve:Pu});class op extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ac[i.type]().fromJSON(i))}return this}}class zl extends op{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Au(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ru(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new wu(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Fc(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lu extends zl{constructor(t){super(t),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new zl().fromJSON(i))}return this}}function cp(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Iu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=fp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<i;d+=e){const f=s[d],m=s[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return sr(r,a,e,o,l,c,0),a}function Iu(s,t,e,n,i){let r;if(i===Ep(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Vl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Vl(a/n|0,s[a],s[a+1],r);return r&&hs(r,r.next)&&(ar(r),r=r.next),r}function Pi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(hs(e,e.next)||Me(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&_p(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?hp(s,n,i,r):lp(s)){t.push(l.i,s.i,c.i),ar(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=up(Pi(s),t),sr(s,t,e,n,i,r,2)):a===2&&dp(s,t,e,n,i,r):sr(Pi(s),t,e,n,i,r,1);break}}}function lp(s){const t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Fs(i,o,r,l,a,c,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hp(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Me(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),g=Math.max(o,l,c),x=Math.max(h,u,d),p=oc(f,m,t,e,n),v=oc(g,x,t,e,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Fs(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=g&&y.y>=m&&y.y<=x&&y!==i&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=x&&_!==i&&_!==a&&Fs(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=x&&y!==i&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function up(s,t){let e=s;do{const n=e.prev,i=e.next.next;!hs(n,i)&&Nu(n,e,e.next,i)&&rr(n,i)&&rr(i,n)&&(t.push(n.i,e.i,i.i),ar(e),ar(e.next),e=s=i),e=e.next}while(e!==s);return Pi(e)}function dp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bp(a,o)){let l=Uu(a,o);a=Pi(a,a.next),l=Pi(l,l.next),sr(a,t,e,n,i,r,0),sr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function fp(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Iu(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(yp(c))}i.sort(pp);for(let r=0;r<i.length;r++)e=mp(i[r],e);return e}function pp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function mp(s,t){const e=xp(s,t);if(!e)return t;const n=Uu(e,s);return Pi(n,n.next),Pi(e,e.next)}function xp(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(hs(s,e))return e;do{if(hs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Du(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);rr(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&gp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function gp(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function _p(s,t,e,n){let i=s;do i.z===0&&(i.z=oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,vp(i)}function vp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function yp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Du(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Fs(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Du(s,t,e,n,i,r,a,o)}function bp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Mp(s,t)&&(rr(s,t)&&rr(t,s)&&Sp(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||hs(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function hs(s,t){return s.x===t.x&&s.y===t.y}function Nu(s,t,e,n){const i=kr(Me(s,t,e)),r=kr(Me(s,t,n)),a=kr(Me(e,n,s)),o=kr(Me(e,n,t));return!!(i!==r&&a!==o||i===0&&Or(s,e,t)||r===0&&Or(s,n,t)||a===0&&Or(e,s,n)||o===0&&Or(e,t,n))}function Or(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function kr(s){return s>0?1:s<0?-1:0}function Mp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function rr(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function Sp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Uu(s,t){const e=cc(s.i,s.x,s.y),n=cc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vl(s,t,e,n){const i=cc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ep(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Tp{static triangulate(t,e,n=2){return cp(t,e,n)}}class $s{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return $s.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Hl(t),Gl(n,t);let a=t.length;e.forEach(Hl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Gl(n,e[l]);const o=Tp.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Hl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class hr extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],g=[],x=[];for(let p=0;p<h;p++){const v=p*d-a;for(let _=0;_<c;_++){const y=_*u-r;m.push(y,-v,0),g.push(0,0,1),x.push(_/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const _=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;f.push(_,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(g,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.widthSegments,t.heightSegments)}}class kc extends Ce{constructor(t=new Lu([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(i,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;$s.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=m.length;x<p;x++){const v=m[x];$s.isClockWise(v)===!0&&(m[x]=v.reverse())}const g=$s.triangulateShape(f,m);for(let x=0,p=m.length;x<p;x++){const v=m[x];f=f.concat(v)}for(let x=0,p=f.length;x<p;x++){const v=f[x];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let x=0,p=g.length;x<p;x++){const v=g[x],_=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(_,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wp(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new kc(n,t.curveSegments)}}function wp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Bc extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(E+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],y=h[p][v],T=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(g,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zc extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const g=m/i*r,x=f/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(g),u.y=(t+e*Math.cos(x))*Math.sin(g),u.z=e*Math.sin(x),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const g=(i+1)*f+m-1,x=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(g,x,v),a.push(x,p,v)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vc extends Ce{constructor(t=new Cu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new pt;let h=new P;const u=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function g(){for(let _=0;_<e;_++)x(_);x(r===!1?e:0),v(),p()}function x(_){h=t.getPointAt(_/e,h);const y=a.normals[_],T=a.binormals[_];for(let E=0;E<=i;E++){const R=E/i*Math.PI*2,D=Math.sin(R),b=-Math.cos(R);l.x=b*y.x+D*T.x,l.y=b*y.y+D*T.y,l.z=b*y.z+D*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){const T=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),R=(i+1)*_+y,D=(i+1)*(_-1)+y;m.push(T,E,D),m.push(E,R,D)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)c.x=_/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vc(new ac[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class un extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wn extends un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ap extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rp extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cp extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pp extends Nc{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Br(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Lp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ip(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Wl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Fu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class ur{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dp extends ur{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:r=t,o=2*e-n;break;case sl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case il:a=t,l=2*n-e;break;case sl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),g=m*m,x=g*m,p=-d*x+2*d*g-d*m,v=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*x+(1.5+f)*g+.5*m,y=f*x-f*g;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+v*a[c+T]+_*a[l+T]+y*a[u+T];return r}}class Np extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Up extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Np(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case tr:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){te("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Lp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ba,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=e[u+m];if(g!==e[d+m]||g!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=tr;class gs extends An{constructor(t,e,n){super(t,e,n)}}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Qs;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends An{constructor(t,e,n,i){super(t,e,n,i)}}Ou.prototype.ValueTypeName="color";class us extends An{constructor(t,e,n,i){super(t,e,n,i)}}us.prototype.ValueTypeName="number";class Fp extends ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ds extends An{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fp(this.times,this.values,this.getValueSize(),t)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends An{constructor(t,e,n){super(t,e,n)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Qs;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends An{constructor(t,e,n,i){super(t,e,n,i)}}fs.prototype.ValueTypeName="vector";class Op{constructor(t="",e=-1,n=[],i=Bd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Bp(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Ip(l);l=Wl(l,1,h),c=Wl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new us(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(Pt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return te("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const x=[],p=[];Fu(f,x,p,m),x.length!==0&&g.push(new u(d,x,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const _=d[m];x.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new us(".morphTargetInfluence["+g+"]",x,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(fs,f+".position",d,"pos",i),n(ds,f+".quaternion",d,"rot",i),n(fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function kp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Ou;case"quaternion":return ds;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=kp(s.type);if(s.times===void 0){const e=[],n=[];Fu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Kn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zp{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vp=new zp;class vs{constructor(t){this.manager=t!==void 0?t:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Hp extends Error{constructor(t,e){super(t),this.response=e}}class ku extends vs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Kn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Xn[t]!==void 0){Xn[t].push({onLoad:e,onProgress:n,onError:i});return}Xn[t]=[],Xn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const x=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let E=0,R=h.length;E<R;E++){const D=h[E];D.onProgress&&D.onProgress(T)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(x)}else throw new Hp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Kn.add(`file:${t}`,c);const h=Xn[t];delete Xn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Xn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Xn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ji=new WeakMap;class Gp extends vs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Kn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=ji.get(a);u===void 0&&(u=[],ji.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=er("img");function l(){h(),e&&e(this);const u=ji.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ji.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Kn.remove(`image:${t}`);const d=ji.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ji.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Wp extends vs{constructor(t){super(t)}load(t,e,n,i){const r=new De,a=new Gp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ga extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xp extends ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new jt,Xl=new P,$l=new P;class Hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $p extends Hc{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class qp extends ga{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $p}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ql=new jt,Cs=new P,Za=new P;class jp extends Hc{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cs),Za.copy(n.position),Za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql,n.coordinateSystem,n.reversedDepth)}}class Bu extends ga{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gc extends gu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yp extends Hc{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lc extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Yp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qs{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Ja=new WeakMap;class Kp extends vs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Kn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{if(Ja.has(a)===!0)i&&i(Ja.get(a)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ja.set(l,c),Kn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Kn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Zp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Wc="\\[\\]\\.:\\/",Jp=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Qp="[^"+Wc.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Xc),em=/(WCOD+)?/.source.replace("WCOD",Qp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),sm=new RegExp("^"+tm+em+nm+im+"$"),rm=["material","materials","bones","map"];class am{constructor(t,e,n){const i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,n):new he(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(t){const e=sm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=am;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const jl=new jt;class Pn{constructor(t,e,n=0,i=1/0){this.ray=new xs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,n=[]){return hc(t,this,n,e),n.sort(Yl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)hc(t[i],this,n,e);return n.sort(Yl),n}}function Yl(s,t){return s.distance-t.distance}function hc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)hc(r[a],t,e,!0)}}class Kl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class om extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Zl(s,t,e,n){const i=cm(n);switch(e){case ou:return s*t;case bc:return s*t/i.components*i.byteLength;case Mc:return s*t/i.components*i.byteLength;case Sc:return s*t*2/i.components*i.byteLength;case Ec:return s*t*2/i.components*i.byteLength;case cu:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case Tc:return s*t*4/i.components*i.byteLength;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:case Lo:return Math.max(s,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(s,8)*Math.max(t,8)/2;case Io:case Do:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yo:case Ko:case Zo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jo:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cm(s){switch(s){case Fn:case iu:return{byteLength:1,components:1};case Ys:case su:case ms:return{byteLength:2,components:1};case vc:case yc:return{byteLength:2,components:4};case Ri:case _c:case Mn:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lm(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dm=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,c0=`uniform sampler2D dfgLUT;
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
}`,l0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,_x=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Fx=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,Vx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:xm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:vm,begin_vertex:ym,beginnormal_vertex:bm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Rm,color_fragment:Cm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Im,common:Dm,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:km,emissivemap_pars_fragment:Bm,colorspace_fragment:zm,colorspace_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:n0,envmap_vertex:$m,fog_vertex:qm,fog_pars_vertex:jm,fog_fragment:Ym,fog_pars_fragment:Km,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:t0,lights_pars_begin:e0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:c0,lights_fragment_begin:l0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:x0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:b0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:w0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:P0,normal_vertex:L0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:k0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:V0,dithering_pars_fragment:H0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:$0,shadowmap_vertex:q0,shadowmask_pars_fragment:j0,skinbase_vertex:Y0,skinning_pars_vertex:K0,skinning_vertex:Z0,skinnormal_vertex:J0,specularmap_fragment:Q0,specularmap_pars_fragment:tx,tonemapping_fragment:ex,tonemapping_pars_fragment:nx,transmission_fragment:ix,transmission_pars_fragment:sx,uv_pars_fragment:rx,uv_pars_vertex:ax,uv_vertex:ox,worldpos_vertex:cx,background_vert:lx,background_frag:hx,backgroundCube_vert:ux,backgroundCube_frag:dx,cube_vert:fx,cube_frag:px,depth_vert:mx,depth_frag:xx,distanceRGBA_vert:gx,distanceRGBA_frag:_x,equirect_vert:vx,equirect_frag:yx,linedashed_vert:bx,linedashed_frag:Mx,meshbasic_vert:Sx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:wx,meshmatcap_vert:Ax,meshmatcap_frag:Rx,meshnormal_vert:Cx,meshnormal_frag:Px,meshphong_vert:Lx,meshphong_frag:Ix,meshphysical_vert:Dx,meshphysical_frag:Nx,meshtoon_vert:Ux,meshtoon_frag:Fx,points_vert:Ox,points_frag:kx,shadow_vert:Bx,shadow_frag:zx,sprite_vert:Vx,sprite_frag:Hx},mt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ln={basic:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:He([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:He([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:He([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:He([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:He([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:He([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:He([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:He([mt.lights,mt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ln.physical={uniforms:He([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const zr={r:0,b:0,g:0},vi=new fn,Gx=new jt;function Wx(s,t,e,n,i,r,a){const o=new zt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function g(_){let y=!1;const T=m(_);T===null?p(o,l):T&&T.isColor&&(p(T,1),y=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){const T=m(y);T&&(T.isCubeTexture||T.mapping===pa)?(h===void 0&&(h=new ie(new En(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:ls(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(y.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(vi)),h.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ie(new hr(2,2),new ti({name:"BackgroundMaterial",uniforms:ls(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(zr,xu(s)),n.buffers.color.setClear(zr.r,zr.g,zr.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:x,dispose:v}}function Xx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,C,N,F,H){let k=!1;const W=u(F,N,C);r!==W&&(r=W,c(r.object)),k=f(M,F,N,H),k&&m(M,F,N,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(M,C,N,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,N){const F=N.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let k=H[C.id];k===void 0&&(k={},H[C.id]=k);let W=k[F];return W===void 0&&(W=d(l()),k[F]=W),W}function d(M){const C=[],N=[],F=[];for(let H=0;H<e;H++)C[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,C,N,F){const H=r.attributes,k=C.attributes;let W=0;const K=N.getAttributes();for(const G in K)if(K[G].location>=0){const it=H[G];let st=k[G];if(st===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),it===void 0||it.attribute!==st||st&&it.data!==st.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(M,C,N,F){const H={},k=C.attributes;let W=0;const K=N.getAttributes();for(const G in K)if(K[G].location>=0){let it=k[G];it===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const st={};st.attribute=it,it&&it.data&&(st.data=it.data),H[G]=st,W++}r.attributes=H,r.attributesNum=W,r.index=F}function g(){const M=r.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function x(M){p(M,0)}function p(M,C){const N=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;N[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),H[M]!==C&&(s.vertexAttribDivisor(M,C),H[M]=C)}function v(){const M=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==M[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function _(M,C,N,F,H,k,W){W===!0?s.vertexAttribIPointer(M,C,N,H,k):s.vertexAttribPointer(M,C,N,F,H,k)}function y(M,C,N,F){g();const H=F.attributes,k=N.getAttributes(),W=C.defaultAttributeValues;for(const K in k){const G=k[K];if(G.location>=0){let tt=H[K];if(tt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const it=tt.normalized,st=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;const Yt=Ut.buffer,Vt=Ut.type,Jt=Ut.bytesPerElement,j=Vt===s.INT||Vt===s.UNSIGNED_INT||tt.gpuType===_c;if(tt.isInterleavedBufferAttribute){const I=tt.data,z=I.stride,et=tt.offset;if(I.isInstancedInterleavedBuffer){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,I.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ct=0;ct<G.locationSize;ct++)x(G.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let ct=0;ct<G.locationSize;ct++)_(G.location+ct,st/G.locationSize,Vt,it,z*Jt,(et+st/G.locationSize*ct)*Jt,j)}else{if(tt.isInstancedBufferAttribute){for(let I=0;I<G.locationSize;I++)p(G.location+I,tt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let I=0;I<G.locationSize;I++)x(G.location+I);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let I=0;I<G.locationSize;I++)_(G.location+I,st/G.locationSize,Vt,it,st*Jt,st/G.locationSize*I*Jt,j)}}else if(W!==void 0){const it=W[K];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(G.location,it);break;case 3:s.vertexAttrib3fv(G.location,it);break;case 4:s.vertexAttrib4fv(G.location,it);break;default:s.vertexAttrib1fv(G.location,it)}}}}v()}function T(){D();for(const M in n){const C=n[M];for(const N in C){const F=C[N];for(const H in F)h(F[H].object),delete F[H];delete C[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const N in C){const F=C[N];for(const H in F)h(F[H].object),delete F[H];delete C[N]}delete n[M.id]}function R(M){for(const C in n){const N=n[C];if(N[M.id]===void 0)continue;const F=N[M.id];for(const H in F)h(F[H].object),delete F[H];delete N[M.id]}}function D(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:x,disableUnusedAttributes:v}}function $x(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==rn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function jx(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new hi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!x)r?h(null):c();else{const v=r?0:n,_=v*4;let y=p.clippingState||null;l.value=y,y=h(m,d,_,f);for(let T=0;T!==_;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=l.value,m!==!0||x===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,y=f;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function Yx(s){let t=new WeakMap;function e(a,o){return o===wo?a.mapping=as:o===Ao&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wo||o===Ao)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const di=4,Jl=[.125,.215,.35,.446,.526,.582],Ei=20,Kx=512,Ps=new Gc,Ql=new zt;let Qa=null,to=0,eo=0,no=!1;const Zx=new P;class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Zx}=r;Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:ms,format:rn,colorSpace:je,depthBuffer:!1},i=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=tg(r,t,e)}return i}_compileMaterial(t){const e=new ie(new Ce,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,i,r){const l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ql),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new En,new Sn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,p=!0):(x.color.copy(Ql),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const T=this._cubeSize;Yi(i,y*T,_>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===as||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Yi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const v=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=Qx(this._lodMax,v,_)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-di?n-m+di:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Yi(r,x,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Ps),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Yi(t,x,p,3*g,2*g),i.setRenderTarget(t),i.render(o,Ps)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),g=r/m,x=isFinite(r)?1+Math.floor(h*g):Ei;x>Ei&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ei}`);const p=[];let v=0;for(let R=0;R<Ei;++R){const D=R/g,b=Math.exp(-D*D/2);p.push(b),R===0?v+=b:R<x&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const y=this._sizeLods[i],T=3*y*(i>_-di?i-_+di:0),E=4*(this._cubeSize-y);Yi(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Ps)}}function Jx(s){const t=[],e=[],n=[];let i=s;const r=s-di+1+Jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-di?l=Jl[a-s+di-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,x=2,p=1,v=new Float32Array(g*m*f),_=new Float32Array(x*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,D=E>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(b,g*m*E),_.set(d,x*m*E);const M=[E,E,E,E,E,E];y.set(M,p*m*E)}const T=new Ce;T.setAttribute("position",new qe(v,g)),T.setAttribute("uv",new qe(_,x)),T.setAttribute("faceIndex",new qe(y,p)),n.push(new ie(T,null)),i>di&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function th(s,t,e){const n=new Ci(s,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qx(s,t,e){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function tg(s,t,e){const n=new Float32Array(Ei),i=new P(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function eh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function nh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function eg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wo||l===Ao,h=l===as||l===os;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new uc(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new uc(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ng(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&nr("WebGLRenderer: "+n+" extension not supported."),i}}}function ig(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let _=0,y=v.length;_<y;_+=3){const T=v[_+0],E=v[_+1],R=v[_+2];d.push(T,E,E,R,R,T)}}else if(m!==void 0){const v=m.array;g=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const T=_+0,E=_+1,R=_+2;d.push(T,E,E,R,R,T)}}else return;const x=new(uu(d)?mu:pu)(d,1);x.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sg(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];e.update(x,n,1)}function u(d,f,m,g){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*g[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ag(s,t,e){const n=new WeakMap,i=new ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let T=o.attributes.position.count*y,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*E*4*u),D=new du(R,T,E,u);D.type=Mn,D.needsUpdate=!0;const b=y*4;for(let C=0;C<u;C++){const N=p[C],F=v[C],H=_[C],k=T*E*4*C;for(let W=0;W<N.count;W++){const K=W*b;m===!0&&(i.fromBufferAttribute(N,W),R[k+K+0]=i.x,R[k+K+1]=i.y,R[k+K+2]=i.z,R[k+K+3]=0),g===!0&&(i.fromBufferAttribute(F,W),R[k+K+4]=i.x,R[k+K+5]=i.y,R[k+K+6]=i.z,R[k+K+7]=0),x===!0&&(i.fromBufferAttribute(H,W),R[k+K+8]=i.x,R[k+K+9]=i.y,R[k+K+10]=i.z,R[k+K+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new pt(T,E)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function og(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Vu=new De,ih=new Su(1,1),Hu=new du,Gu=new bf,Wu=new _u,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),ch=new Float32Array(4);function ys(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function va(s,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function cg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function dg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ch.set(n),s.uniformMatrix2fv(this.addr,!1,ch),Re(e,n)}}function fg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;oh.set(n),s.uniformMatrix3fv(this.addr,!1,oh),Re(e,n)}}function pg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),Re(e,n)}}function mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Sg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=hu,r=ih):r=Vu,e.setTexture2D(t||r,i)}function Eg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gu,i)}function Tg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wu,i)}function wg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hu,i)}function Ag(s){switch(s){case 5126:return cg;case 35664:return lg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return xg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return yg;case 36295:return bg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}function Rg(s,t){s.uniform1fv(this.addr,t)}function Cg(s,t){const e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function Pg(s,t){const e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function Lg(s,t){const e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function Ig(s,t){const e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dg(s,t){const e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ng(s,t){const e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ug(s,t){s.uniform1iv(this.addr,t)}function Fg(s,t){s.uniform2iv(this.addr,t)}function Og(s,t){s.uniform3iv(this.addr,t)}function kg(s,t){s.uniform4iv(this.addr,t)}function Bg(s,t){s.uniform1uiv(this.addr,t)}function zg(s,t){s.uniform2uiv(this.addr,t)}function Vg(s,t){s.uniform3uiv(this.addr,t)}function Hg(s,t){s.uniform4uiv(this.addr,t)}function Gg(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Vu,r[a])}function Wg(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Gu,r[a])}function Xg(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wu,r[a])}function $g(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hu,r[a])}function qg(s){switch(s){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ig;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return zg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return $g}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function lh(s,t){s.seq.push(t),s.map[t.id]=t}function Zg(s,t,e){const n=s.name,i=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lh(e,c===void 0?new jg(o,s,t):new Yg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Kg(o),lh(e,u)),e=u}}}class ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Zg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function hh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jg=37297;let Qg=0;function t_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uh=new $t;function e_(s){se._getMatrix(uh,se.workingColorSpace,s);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case aa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+t_(s.getShaderSource(t),o)}else return r}function n_(s,t){const e=e_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i_(s,t){let e;switch(t){case Id:e="Linear";break;case Dd:e="Reinhard";break;case Nd:e="Cineon";break;case Ud:e="ACESFilmic";break;case Od:e="AgX";break;case tu:e="Neutral";break;case Fd:e="Custom";break;default:Pt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new P;function s_(){se.getLuminanceCoefficients(Vr);const s=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function a_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Os(s){return s!==""}function fh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(s){return s.replace(c_,h_)}const l_=new Map;function h_(s,t){let e=Kt[t];if(e===void 0){const n=l_.get(t);if(n!==void 0)e=Kt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dc(e)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace(u_,d_)}function d_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function f_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function g_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=f_(e),c=p_(e),h=m_(e),u=x_(e),d=g_(e),f=r_(e),m=a_(r),g=i.createProgram();let x,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(x=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==fi?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=dc(a),a=fh(a,e),a=ph(a,e),o=dc(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+x+a,y=v+p+o,T=hh(i,i.VERTEX_SHADER,_),E=hh(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(E)||"",k=N.trim(),W=F.trim(),K=H.trim();let G=!0,tt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,E);else{const it=dh(i,T,"vertex"),st=dh(i,E,"fragment");te("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+it+`
`+st)}else k!==""?Pt("WebGLProgram: Program Info Log:",k):(W===""||K==="")&&(tt=!1);tt&&(C.diagnostics={runnable:G,programLog:k,vertexShader:{log:W,prefix:x},fragmentShader:{log:K,prefix:p}})}i.deleteShader(T),i.deleteShader(E),D=new ea(i,g),b=o_(i,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Jg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}let v_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b_(t),e.set(t,n)),n}}class b_{constructor(t){this.id=v_++,this.code=t,this.usedTimes=0}}function M_(s,t,e,n,i,r,a){const o=new Pc,l=new y_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,M,C,N,F){const H=N.fog,k=F.geometry,W=b.isMeshStandardMaterial?N.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),G=K&&K.mapping===pa?K.image.height:null,tt=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&Pt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=it!==void 0?it.length:0;let Ut=0;k.morphAttributes.position!==void 0&&(Ut=1),k.morphAttributes.normal!==void 0&&(Ut=2),k.morphAttributes.color!==void 0&&(Ut=3);let Yt,Vt,Jt,j;if(tt){const Rt=Ln[tt];Yt=Rt.vertexShader,Vt=Rt.fragmentShader}else Yt=b.vertexShader,Vt=b.fragmentShader,l.update(b),Jt=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const I=s.getRenderTarget(),z=s.state.buffers.depth.getReversed(),et=F.isInstancedMesh===!0,ct=F.isBatchedMesh===!0,ut=!!b.map,Ft=!!b.matcap,xt=!!K,qt=!!b.aoMap,L=!!b.lightMap,Lt=!!b.bumpMap,Ot=!!b.normalMap,Qt=!!b.displacementMap,vt=!!b.emissiveMap,re=!!b.metalnessMap,At=!!b.roughnessMap,Tt=b.anisotropy>0,A=b.clearcoat>0,S=b.dispersion>0,V=b.iridescence>0,Y=b.sheen>0,Z=b.transmission>0,X=Tt&&!!b.anisotropyMap,wt=A&&!!b.clearcoatMap,dt=A&&!!b.clearcoatNormalMap,Ct=A&&!!b.clearcoatRoughnessMap,St=V&&!!b.iridescenceMap,nt=V&&!!b.iridescenceThicknessMap,lt=Y&&!!b.sheenColorMap,kt=Y&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,gt=!!b.specularColorMap,It=!!b.specularIntensityMap,U=Z&&!!b.transmissionMap,ft=Z&&!!b.thicknessMap,at=!!b.gradientMap,rt=!!b.alphaMap,ot=b.alphaTest>0,Q=!!b.alphaHash,Mt=!!b.extensions;let Ht=fi;b.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const ue={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:Vt,defines:b.defines,customVertexShaderID:Jt,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ct,batchingColor:ct&&F._colorsTexture!==null,instancing:et,instancingColor:et&&F.instanceColor!==null,instancingMorph:et&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:I===null?s.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:je,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:Ft,envMap:xt,envMapMode:xt&&K.mapping,envMapCubeUVHeight:G,aoMap:qt,lightMap:L,bumpMap:Lt,normalMap:Ot,displacementMap:d&&Qt,emissiveMap:vt,normalMapObjectSpace:Ot&&b.normalMapType===Gd,normalMapTangentSpace:Ot&&b.normalMapType===wc,metalnessMap:re,roughnessMap:At,anisotropy:Tt,anisotropyMap:X,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ct,dispersion:S,iridescence:V,iridescenceMap:St,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:lt,sheenRoughnessMap:kt,specularMap:Dt,specularColorMap:gt,specularIntensityMap:It,transmission:Z,transmissionMap:U,thicknessMap:ft,gradientMap:at,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Q,combine:b.combine,mapUv:ut&&g(b.map.channel),aoMapUv:qt&&g(b.aoMap.channel),lightMapUv:L&&g(b.lightMap.channel),bumpMapUv:Lt&&g(b.bumpMap.channel),normalMapUv:Ot&&g(b.normalMap.channel),displacementMapUv:Qt&&g(b.displacementMap.channel),emissiveMapUv:vt&&g(b.emissiveMap.channel),metalnessMapUv:re&&g(b.metalnessMap.channel),roughnessMapUv:At&&g(b.roughnessMap.channel),anisotropyMapUv:X&&g(b.anisotropyMap.channel),clearcoatMapUv:wt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(b.sheenRoughnessMap.channel),specularMapUv:Dt&&g(b.specularMap.channel),specularColorMapUv:gt&&g(b.specularColorMap.channel),specularIntensityMapUv:It&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:ft&&g(b.thicknessMap.channel),alphaMapUv:rt&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ot||Tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(ut||rt),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:z,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:vt&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Xe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Mt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&b.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(v(M,b),_(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const M=m[b.type];let C;if(M){const N=Ln[M];C=Nf.clone(N.uniforms)}else C=b.uniforms;return C}function T(b,M){let C;for(let N=0,F=h.length;N<F;N++){const H=h[N];if(H.cacheKey===M){C=H,++C.usedTimes;break}}return C===void 0&&(C=new __(s,M,b,r),h.push(C)),C}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function D(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:D}}function S_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function E_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function gh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _h(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,m,g,x){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:x},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=x),t++,p}function o(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||E_),n.length>1&&n.sort(d||gh),i.length>1&&i.sort(d||gh)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function T_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new _h,s.set(n,[a])):i>=r.length?(a=new _h,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function w_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function A_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let R_=0;function C_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function P_(s){const t=new w_,e=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new jt,a=new jt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,v=0,_=0,y=0,T=0,E=0,R=0;c.sort(C_);for(let b=0,M=c.length;b<M;b++){const C=c[b],N=C.color,F=C.intensity,H=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],F);R++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(N).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[g]=W;const K=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,K.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[g]=K.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=k,y++}g++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(N).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=W,x++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const K=C.shadow,G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=C.shadow.matrix,_++}n.point[m]=W,m++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==g||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.directionalLength=f,D.pointLength=m,D.spotLength=g,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=R,n.version=R_++)}function l(c,h){let u=0,d=0,f=0,m=0,g=0;const x=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),u++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),f++}else if(_.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function vh(s){const t=new P_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function L_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new vh(s),t.set(i,[o])):r>=a.length?(o=new vh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;function N_(s,t,e){let n=new Dc;const i=new pt,r=new pt,a=new ce,o=new Rp({depthPacking:Hd}),l=new Cp,c={},h=e.maxTextureSize,u={[Qn]:Xe,[Xe]:Qn,[sn]:sn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:I_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ie(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(E,R,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==jn&&this.type===jn,H=p===jn&&this.type!==jn;for(let k=0,W=E.length;k<W;k++){const K=E[k],G=K.shadow;if(G===void 0){Pt("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const tt=G.getFrameExtents();if(i.multiply(tt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,G.mapSize.y=r.y)),G.map===null||F===!0||H===!0){const st=this.type!==jn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new Ci(i.x,i.y,st),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const it=G.getViewportCount();for(let st=0;st<it;st++){const Ut=G.getViewport(st);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),N.viewport(a),G.updateMatrices(K,st),n=G.getFrustum(),y(R,D,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&v(G,D),G.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(b,M,C)};function v(E,R){const D=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,D,f,g,null)}function _(E,R,D,b){let M=null;const C=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,F=R.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let k=H[F];k===void 0&&(k=M.clone(),H[F]=k,R.addEventListener("dispose",T)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,b===jn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=D}return M}function y(E,R,D,b,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const F=t.update(E),H=E.material;if(Array.isArray(H)){const k=F.groups;for(let W=0,K=k.length;W<K;W++){const G=k[W],tt=H[G.materialIndex];if(tt&&tt.visible){const it=_(E,tt,b,M);E.onBeforeShadow(s,E,R,D,F,it,G),s.renderBufferDirect(D,null,F,it,E,G),E.onAfterShadow(s,E,R,D,F,it,G)}}}else if(H.visible){const k=_(E,H,b,M);E.onBeforeShadow(s,E,R,D,F,k,null),s.renderBufferDirect(D,null,F,k,E,null),E.onAfterShadow(s,E,R,D,F,k,null)}}const N=E.children;for(let F=0,H=N.length;F<H;F++)y(N[F],R,D,b,M)}function T(E){E.target.removeEventListener("dispose",T);for(const D in c){const b=c[D],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const U_={[vo]:yo,[bo]:Eo,[Mo]:To,[rs]:So,[yo]:vo,[Eo]:bo,[To]:Mo,[So]:rs};function F_(s,t){function e(){let U=!1;const ft=new ce;let at=null;const rt=new ce(0,0,0,0);return{setMask:function(ot){at!==ot&&!U&&(s.colorMask(ot,ot,ot,ot),at=ot)},setLocked:function(ot){U=ot},setClear:function(ot,Q,Mt,Ht,ue){ue===!0&&(ot*=Ht,Q*=Ht,Mt*=Ht),ft.set(ot,Q,Mt,Ht),rt.equals(ft)===!1&&(s.clearColor(ot,Q,Mt,Ht),rt.copy(ft))},reset:function(){U=!1,at=null,rt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,at=null,rt=null,ot=null;return{setReversed:function(Q){if(ft!==Q){const Mt=t.get("EXT_clip_control");Q?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),ft=Q;const Ht=ot;ot=null,this.setClear(Ht)}},getReversed:function(){return ft},setTest:function(Q){Q?I(s.DEPTH_TEST):z(s.DEPTH_TEST)},setMask:function(Q){at!==Q&&!U&&(s.depthMask(Q),at=Q)},setFunc:function(Q){if(ft&&(Q=U_[Q]),rt!==Q){switch(Q){case vo:s.depthFunc(s.NEVER);break;case yo:s.depthFunc(s.ALWAYS);break;case bo:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case Eo:s.depthFunc(s.GREATER);break;case To:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Q}},setLocked:function(Q){U=Q},setClear:function(Q){ot!==Q&&(ft&&(Q=1-Q),s.clearDepth(Q),ot=Q)},reset:function(){U=!1,at=null,rt=null,ot=null,ft=!1}}}function i(){let U=!1,ft=null,at=null,rt=null,ot=null,Q=null,Mt=null,Ht=null,ue=null;return{setTest:function(Rt){U||(Rt?I(s.STENCIL_TEST):z(s.STENCIL_TEST))},setMask:function(Rt){ft!==Rt&&!U&&(s.stencilMask(Rt),ft=Rt)},setFunc:function(Rt,oe,xe){(at!==Rt||rt!==oe||ot!==xe)&&(s.stencilFunc(Rt,oe,xe),at=Rt,rt=oe,ot=xe)},setOp:function(Rt,oe,xe){(Q!==Rt||Mt!==oe||Ht!==xe)&&(s.stencilOp(Rt,oe,xe),Q=Rt,Mt=oe,Ht=xe)},setLocked:function(Rt){U=Rt},setClear:function(Rt){ue!==Rt&&(s.clearStencil(Rt),ue=Rt)},reset:function(){U=!1,ft=null,at=null,rt=null,ot=null,Q=null,Mt=null,Ht=null,ue=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,v=null,_=null,y=null,T=null,E=null,R=new zt(0,0,0),D=0,b=!1,M=null,C=null,N=null,F=null,H=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=K>=2);let tt=null,it={};const st=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Yt=new ce().fromArray(st),Vt=new ce().fromArray(Ut);function Jt(U,ft,at,rt){const ot=new Uint8Array(4),Q=s.createTexture();s.bindTexture(U,Q),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<at;Mt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ft+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return Q}const j={};j[s.TEXTURE_2D]=Jt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),I(s.DEPTH_TEST),a.setFunc(rs),Lt(!1),Ot(Zc),I(s.CULL_FACE),qt(Zn);function I(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function z(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function et(U,ft){return u[U]!==ft?(s.bindFramebuffer(U,ft),u[U]=ft,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function ct(U,ft){let at=f,rt=!1;if(U){at=d.get(ft),at===void 0&&(at=[],d.set(ft,at));const ot=U.textures;if(at.length!==ot.length||at[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Mt=ot.length;Q<Mt;Q++)at[Q]=s.COLOR_ATTACHMENT0+Q;at.length=ot.length,rt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,rt=!0);rt&&s.drawBuffers(at)}function ut(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const Ft={[Si]:s.FUNC_ADD,[fd]:s.FUNC_SUBTRACT,[pd]:s.FUNC_REVERSE_SUBTRACT};Ft[md]=s.MIN,Ft[xd]=s.MAX;const xt={[gd]:s.ZERO,[_d]:s.ONE,[vd]:s.SRC_COLOR,[go]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[bd]:s.DST_ALPHA,[yd]:s.ONE_MINUS_SRC_COLOR,[_o]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[Md]:s.ONE_MINUS_DST_ALPHA,[wd]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Cd]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(U,ft,at,rt,ot,Q,Mt,Ht,ue,Rt){if(U===Zn){g===!0&&(z(s.BLEND),g=!1);return}if(g===!1&&(I(s.BLEND),g=!0),U!==dd){if(U!==x||Rt!==b){if((p!==Si||y!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,y=Si),Rt)switch(U){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jc:s.blendFunc(s.ONE,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:te("WebGLState: Invalid blending: ",U);break}else switch(U){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qc:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",U);break}v=null,_=null,T=null,E=null,R.set(0,0,0),D=0,x=U,b=Rt}return}ot=ot||ft,Q=Q||at,Mt=Mt||rt,(ft!==p||ot!==y)&&(s.blendEquationSeparate(Ft[ft],Ft[ot]),p=ft,y=ot),(at!==v||rt!==_||Q!==T||Mt!==E)&&(s.blendFuncSeparate(xt[at],xt[rt],xt[Q],xt[Mt]),v=at,_=rt,T=Q,E=Mt),(Ht.equals(R)===!1||ue!==D)&&(s.blendColor(Ht.r,Ht.g,Ht.b,ue),R.copy(Ht),D=ue),x=U,b=!1}function L(U,ft){U.side===sn?z(s.CULL_FACE):I(s.CULL_FACE);let at=U.side===Xe;ft&&(at=!at),Lt(at),U.blending===es&&U.transparent===!1?qt(Zn):qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const rt=U.stencilWrite;o.setTest(rt),rt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?I(s.SAMPLE_ALPHA_TO_COVERAGE):z(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function Ot(U){U!==hd?(I(s.CULL_FACE),U!==C&&(U===Zc?s.cullFace(s.BACK):U===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):z(s.CULL_FACE),C=U}function Qt(U){U!==N&&(W&&s.lineWidth(U),N=U)}function vt(U,ft,at){U?(I(s.POLYGON_OFFSET_FILL),(F!==ft||H!==at)&&(s.polygonOffset(ft,at),F=ft,H=at)):z(s.POLYGON_OFFSET_FILL)}function re(U){U?I(s.SCISSOR_TEST):z(s.SCISSOR_TEST)}function At(U){U===void 0&&(U=s.TEXTURE0+k-1),tt!==U&&(s.activeTexture(U),tt=U)}function Tt(U,ft,at){at===void 0&&(tt===null?at=s.TEXTURE0+k-1:at=tt);let rt=it[at];rt===void 0&&(rt={type:void 0,texture:void 0},it[at]=rt),(rt.type!==U||rt.texture!==ft)&&(tt!==at&&(s.activeTexture(at),tt=at),s.bindTexture(U,ft||j[U]),rt.type=U,rt.texture=ft)}function A(){const U=it[tt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Y(){try{s.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function dt(){try{s.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Ct(){try{s.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function St(){try{s.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function nt(){try{s.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function lt(U){Yt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function kt(U){Vt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Vt.copy(U))}function Dt(U,ft){let at=c.get(ft);at===void 0&&(at=new WeakMap,c.set(ft,at));let rt=at.get(U);rt===void 0&&(rt=s.getUniformBlockIndex(ft,U.name),at.set(U,rt))}function gt(U,ft){const rt=c.get(ft).get(U);l.get(ft)!==rt&&(s.uniformBlockBinding(ft,rt,U.__bindingPointIndex),l.set(ft,rt))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,it={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,v=null,_=null,y=null,T=null,E=null,R=new zt(0,0,0),D=0,b=!1,M=null,C=null,N=null,F=null,H=null,Yt.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:I,disable:z,bindFramebuffer:et,drawBuffers:ct,useProgram:ut,setBlending:qt,setMaterial:L,setFlipSided:Lt,setCullFace:Ot,setLineWidth:Qt,setPolygonOffset:vt,setScissorTest:re,activeTexture:At,bindTexture:Tt,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:St,texImage3D:nt,updateUBOMapping:Dt,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:wt,scissor:lt,viewport:kt,reset:It}}function O_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return f?new OffscreenCanvas(A,S):er("canvas")}function g(A,S,V){let Y=1;const Z=Tt(A);if((Z.width>V||Z.height>V)&&(Y=V/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*Z.width),wt=Math.floor(Y*Z.height);u===void 0&&(u=m(X,wt));const dt=S?m(X,wt):u;return dt.width=X,dt.height=wt,dt.getContext("2d").drawImage(A,0,0,X,wt),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+wt+")."),dt}else return"data"in A&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,S,V,Y,Z=!1){if(A!==null){if(s[A]!==void 0)return s[A];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===s.RED&&(V===s.FLOAT&&(X=s.R32F),V===s.HALF_FLOAT&&(X=s.R16F),V===s.UNSIGNED_BYTE&&(X=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(X=s.R8UI),V===s.UNSIGNED_SHORT&&(X=s.R16UI),V===s.UNSIGNED_INT&&(X=s.R32UI),V===s.BYTE&&(X=s.R8I),V===s.SHORT&&(X=s.R16I),V===s.INT&&(X=s.R32I)),S===s.RG&&(V===s.FLOAT&&(X=s.RG32F),V===s.HALF_FLOAT&&(X=s.RG16F),V===s.UNSIGNED_BYTE&&(X=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(X=s.RG8UI),V===s.UNSIGNED_SHORT&&(X=s.RG16UI),V===s.UNSIGNED_INT&&(X=s.RG32UI),V===s.BYTE&&(X=s.RG8I),V===s.SHORT&&(X=s.RG16I),V===s.INT&&(X=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(X=s.RGB8UI),V===s.UNSIGNED_SHORT&&(X=s.RGB16UI),V===s.UNSIGNED_INT&&(X=s.RGB32UI),V===s.BYTE&&(X=s.RGB8I),V===s.SHORT&&(X=s.RGB16I),V===s.INT&&(X=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),V===s.UNSIGNED_INT&&(X=s.RGBA32UI),V===s.BYTE&&(X=s.RGBA8I),V===s.SHORT&&(X=s.RGBA16I),V===s.INT&&(X=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),S===s.RGBA){const wt=Z?aa:se.getTransfer(Y);V===s.FLOAT&&(X=s.RGBA32F),V===s.HALF_FLOAT&&(X=s.RGBA16F),V===s.UNSIGNED_BYTE&&(X=wt===fe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(A,S){let V;return A?S===null||S===Ri||S===Ks?V=s.DEPTH24_STENCIL8:S===Mn?V=s.DEPTH32F_STENCIL8:S===Ys&&(V=s.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===Ks?V=s.DEPTH_COMPONENT24:S===Mn?V=s.DEPTH_COMPONENT32F:S===Ys&&(V=s.DEPTH_COMPONENT16),V}function T(A,S){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Oe?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),D(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function D(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,Y=d.get(V);if(Y){const Z=Y[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(A),Object.keys(Y).length===0&&d.delete(V)}n.remove(A)}function b(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const V=A.source,Y=d.get(V);delete Y[S.__cacheKey],a.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Z=0;Z<S.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let Y=0,Z=V.length;Y<Z;Y++){const X=n.get(V[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(A)}let C=0;function N(){C=0}function F(){const A=C;return A>=i.maxTextures&&Pt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){const V=n.get(A);if(A.isVideoTexture&&re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const Y=A.image;if(Y===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function W(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){j(V,A,S);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function K(A,S){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){j(V,A,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function G(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){I(V,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const tt={[Ai]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[ra]:s.MIRRORED_REPEAT},it={[$e]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Oe]:s.LINEAR,[Kr]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},st={[Wd]:s.NEVER,[Kd]:s.ALWAYS,[Xd]:s.LESS,[hu]:s.LEQUAL,[$d]:s.EQUAL,[Yd]:s.GEQUAL,[qd]:s.GREATER,[jd]:s.NOTEQUAL};function Ut(A,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Oe||S.magFilter===Kr||S.magFilter===Us||S.magFilter===Dn||S.minFilter===Oe||S.minFilter===Kr||S.minFilter===Us||S.minFilter===Dn)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,tt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,tt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,tt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,it[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==Us&&S.minFilter!==Dn||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const Y=S.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const X=H(S);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[X].usedTimes++;const wt=Z[A.__cacheKey];wt!==void 0&&(Z[A.__cacheKey].usedTimes--,wt.usedTimes===0&&b(S)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return V}function Vt(A,S,V){return Math.floor(Math.floor(A/V)/S)}function Jt(A,S,V,Y){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,Y,S.data);else{X.sort((nt,lt)=>nt.start-lt.start);let wt=0;for(let nt=1;nt<X.length;nt++){const lt=X[wt],kt=X[nt],Dt=lt.start+lt.count,gt=Vt(kt.start,S.width,4),It=Vt(lt.start,S.width,4);kt.start<=Dt+1&&gt===It&&Vt(kt.start+kt.count-1,S.width,4)===gt?lt.count=Math.max(lt.count,kt.start+kt.count-lt.start):(++wt,X[wt]=kt)}X.length=wt+1;const dt=s.getParameter(s.UNPACK_ROW_LENGTH),Ct=s.getParameter(s.UNPACK_SKIP_PIXELS),St=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let nt=0,lt=X.length;nt<lt;nt++){const kt=X[nt],Dt=Math.floor(kt.start/4),gt=Math.ceil(kt.count/4),It=Dt%S.width,U=Math.floor(Dt/S.width),ft=gt,at=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,It),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,It,U,ft,at,V,Y,S.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function j(A,S,V){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=Yt(A,S),X=S.source;e.bindTexture(Y,A.__webglTexture,s.TEXTURE0+V);const wt=n.get(X);if(X.version!==wt.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const dt=se.getPrimaries(se.workingColorSpace),Ct=S.colorSpace===ui?null:se.getPrimaries(S.colorSpace),St=S.colorSpace===ui||dt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let nt=g(S.image,!1,i.maxTextureSize);nt=At(S,nt);const lt=r.convert(S.format,S.colorSpace),kt=r.convert(S.type);let Dt=_(S.internalFormat,lt,kt,S.colorSpace,S.isVideoTexture);Ut(Y,S);let gt;const It=S.mipmaps,U=S.isVideoTexture!==!0,ft=wt.__version===void 0||Z===!0,at=X.dataReady,rt=T(S,nt);if(S.isDepthTexture)Dt=y(S.format===Js,S.type),ft&&(U?e.texStorage2D(s.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,lt,kt,null));else if(S.isDataTexture)if(It.length>0){U&&ft&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,It[0].width,It[0].height);for(let ot=0,Q=It.length;ot<Q;ot++)gt=It[ot],U?at&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,lt,kt,gt.data):e.texImage2D(s.TEXTURE_2D,ot,Dt,gt.width,gt.height,0,lt,kt,gt.data);S.generateMipmaps=!1}else U?(ft&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,nt.width,nt.height),at&&Jt(S,nt,lt,kt)):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,lt,kt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Dt,It[0].width,It[0].height,nt.depth);for(let ot=0,Q=It.length;ot<Q;ot++)if(gt=It[ot],S.format!==rn)if(lt!==null)if(U){if(at)if(S.layerUpdates.size>0){const Mt=Zl(gt.width,gt.height,S.format,S.type);for(const Ht of S.layerUpdates){const ue=gt.data.subarray(Ht*Mt/gt.data.BYTES_PER_ELEMENT,(Ht+1)*Mt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Ht,gt.width,gt.height,1,lt,ue)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,nt.depth,lt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Dt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,nt.depth,lt,kt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,Dt,gt.width,gt.height,nt.depth,0,lt,kt,gt.data)}else{U&&ft&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,It[0].width,It[0].height);for(let ot=0,Q=It.length;ot<Q;ot++)gt=It[ot],S.format!==rn?lt!==null?U?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,lt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,Dt,gt.width,gt.height,0,gt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?at&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,lt,kt,gt.data):e.texImage2D(s.TEXTURE_2D,ot,Dt,gt.width,gt.height,0,lt,kt,gt.data)}else if(S.isDataArrayTexture)if(U){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Dt,nt.width,nt.height,nt.depth),at)if(S.layerUpdates.size>0){const ot=Zl(nt.width,nt.height,S.format,S.type);for(const Q of S.layerUpdates){const Mt=nt.data.subarray(Q*ot/nt.data.BYTES_PER_ELEMENT,(Q+1)*ot/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,lt,kt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,lt,kt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,lt,kt,nt.data);else if(S.isData3DTexture)U?(ft&&e.texStorage3D(s.TEXTURE_3D,rt,Dt,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,lt,kt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,lt,kt,nt.data);else if(S.isFramebufferTexture){if(ft)if(U)e.texStorage2D(s.TEXTURE_2D,rt,Dt,nt.width,nt.height);else{let ot=nt.width,Q=nt.height;for(let Mt=0;Mt<rt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Dt,ot,Q,0,lt,kt,null),ot>>=1,Q>>=1}}else if(It.length>0){if(U&&ft){const ot=Tt(It[0]);e.texStorage2D(s.TEXTURE_2D,rt,Dt,ot.width,ot.height)}for(let ot=0,Q=It.length;ot<Q;ot++)gt=It[ot],U?at&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,lt,kt,gt):e.texImage2D(s.TEXTURE_2D,ot,Dt,lt,kt,gt);S.generateMipmaps=!1}else if(U){if(ft){const ot=Tt(nt);e.texStorage2D(s.TEXTURE_2D,rt,Dt,ot.width,ot.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,kt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Dt,lt,kt,nt);x(S)&&p(Y),wt.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function I(A,S,V){if(S.image.length!==6)return;const Y=Yt(A,S),Z=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+V);const wt=se.getPrimaries(se.workingColorSpace),dt=S.colorSpace===ui?null:se.getPrimaries(S.colorSpace),Ct=S.colorSpace===ui||wt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let Q=0;Q<6;Q++)!St&&!nt?lt[Q]=g(S.image[Q],!0,i.maxCubemapSize):lt[Q]=nt?S.image[Q].image:S.image[Q],lt[Q]=At(S,lt[Q]);const kt=lt[0],Dt=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),It=_(S.internalFormat,Dt,gt,S.colorSpace),U=S.isVideoTexture!==!0,ft=X.__version===void 0||Y===!0,at=Z.dataReady;let rt=T(S,kt);Ut(s.TEXTURE_CUBE_MAP,S);let ot;if(St){U&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,It,kt.width,kt.height);for(let Q=0;Q<6;Q++){ot=lt[Q].mipmaps;for(let Mt=0;Mt<ot.length;Mt++){const Ht=ot[Mt];S.format!==rn?Dt!==null?U?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,Ht.width,Ht.height,Dt,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,It,Ht.width,Ht.height,0,Ht.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,Ht.width,Ht.height,Dt,gt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,It,Ht.width,Ht.height,0,Dt,gt,Ht.data)}}}else{if(ot=S.mipmaps,U&&ft){ot.length>0&&rt++;const Q=Tt(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){U?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,lt[Q].width,lt[Q].height,Dt,gt,lt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,lt[Q].width,lt[Q].height,0,Dt,gt,lt[Q].data);for(let Mt=0;Mt<ot.length;Mt++){const ue=ot[Mt].image[Q].image;U?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,ue.width,ue.height,Dt,gt,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,It,ue.width,ue.height,0,Dt,gt,ue.data)}}else{U?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,gt,lt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,Dt,gt,lt[Q]);for(let Mt=0;Mt<ot.length;Mt++){const Ht=ot[Mt];U?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,Dt,gt,Ht.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,It,Dt,gt,Ht.image[Q])}}}x(S)&&p(s.TEXTURE_CUBE_MAP),X.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function z(A,S,V,Y,Z,X){const wt=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),Ct=_(V.internalFormat,wt,dt,V.colorSpace),St=n.get(S),nt=n.get(V);if(nt.__renderTarget=S,!St.__hasExternalTextures){const lt=Math.max(1,S.width>>X),kt=Math.max(1,S.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,Ct,lt,kt,S.depth,0,wt,dt,null):e.texImage2D(Z,X,Ct,lt,kt,0,wt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,nt.__webglTexture,0,Qt(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,nt.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(A,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const Y=S.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=y(S.stencilBuffer,Z),wt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Qt(S);vt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,X,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,X,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,X,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,A)}else{const Y=S.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],wt=r.convert(X.format,X.colorSpace),dt=r.convert(X.type),Ct=_(X.internalFormat,wt,dt,X.colorSpace),St=Qt(S);V&&vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Ct,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,Ct,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Z=Y.__webglTexture,X=Qt(S);if(S.depthTexture.format===Zs)vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Js)vt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ut(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?ct(S.__webglFramebuffer[0],A):ct(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),et(S.__webglDepthbuffer[Y],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),et(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(A,S,V){const Y=n.get(A);S!==void 0&&z(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ut(A)}function xt(A){const S=A.texture,V=n.get(A),Y=n.get(S);A.addEventListener("dispose",R);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,wt=Z.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++),X){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)V.__webglFramebuffer[dt][Ct]=s.createFramebuffer()}else V.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)V.__webglFramebuffer[dt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(wt)for(let dt=0,Ct=Z.length;dt<Ct;dt++){const St=n.get(Z[dt]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<Z.length;dt++){const Ct=Z[dt];V.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const St=r.convert(Ct.format,Ct.colorSpace),nt=r.convert(Ct.type),lt=_(Ct.internalFormat,St,nt,Ct.colorSpace,A.isXRRenderTarget===!0),kt=Qt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,lt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),et(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)z(V.__webglFramebuffer[dt][Ct],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct);else z(V.__webglFramebuffer[dt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,Ct=Z.length;dt<Ct;dt++){const St=Z[dt],nt=n.get(St);let lt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,nt.__webglTexture),Ut(lt,St),z(V.__webglFramebuffer,A,St,s.COLOR_ATTACHMENT0+dt,lt,0),x(St)&&p(lt)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Ut(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)z(V.__webglFramebuffer[Ct],A,S,s.COLOR_ATTACHMENT0,dt,Ct);else z(V.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,dt,0);x(S)&&p(dt),e.unbindTexture()}A.depthBuffer&&ut(A)}function qt(A){const S=A.textures;for(let V=0,Y=S.length;V<Y;V++){const Z=S[V];if(x(Z)){const X=v(A),wt=n.get(Z).__webglTexture;e.bindTexture(X,wt),p(X),e.unbindTexture()}}}const L=[],Lt=[];function Ot(A){if(A.samples>0){if(vt(A)===!1){const S=A.textures,V=A.width,Y=A.height;let Z=s.COLOR_BUFFER_BIT;const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(A),dt=S.length>1;if(dt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Ct=A.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);const nt=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,Z,s.NEAREST),l===!0&&(L.length=0,Lt.length=0,L.push(s.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(X),Lt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);const nt=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Qt(A){return Math.min(i.maxSamples,A.samples)}function vt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function At(A,S){const V=A.colorSpace,Y=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==je&&V!==ui&&(se.getTransfer(V)===fe?(Y!==rn||Z!==Fn)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",V)),S}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=z,this.useMultisampledRTT=vt}function k_(s,t){function e(n,i=ui){let r;const a=se.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===_c)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===ms)return s.HALF_FLOAT;if(n===ou)return s.ALPHA;if(n===cu)return s.RGB;if(n===rn)return s.RGBA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===Js)return s.DEPTH_STENCIL;if(n===bc)return s.RED;if(n===Mc)return s.RED_INTEGER;if(n===Sc)return s.RG;if(n===Ec)return s.RG_INTEGER;if(n===Tc)return s.RGBA_INTEGER;if(n===Zr||n===Jr||n===Qr||n===ta)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Do||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Do)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Qo||n===tc||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new V_,p={},v=e.getContextAttributes();let _=null,y=null;const T=[],E=[],R=new pt;let D=null;const b=new We;b.viewport=new ce;const M=new We;M.viewport=new ce;const C=[b,M],N=new Zp;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let I=T[j];return I===void 0&&(I=new Ha,T[j]=I),I.getTargetRaySpace()},this.getControllerGrip=function(j){let I=T[j];return I===void 0&&(I=new Ha,T[j]=I),I.getGripSpace()},this.getHand=function(j){let I=T[j];return I===void 0&&(I=new Ha,T[j]=I),I.getHandSpace()};function k(j){const I=E.indexOf(j.inputSource);if(I===-1)return;const z=T[I];z!==void 0&&(z.update(j.inputSource,j.frame,c||a),z.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let j=0;j<T.length;j++){const I=E[j];I!==null&&(E[j]=null,T[j].disconnect(I))}F=null,H=null,x.reset();for(const j in p)delete p[j];t.setRenderTarget(_),f=null,d=null,u=null,i=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,et=null,ct=null;v.depth&&(ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=v.stencil?Js:Zs,et=v.stencil?Ks:Ri);const ut={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ci(d.textureWidth,d.textureHeight,{format:rn,type:Fn,depthTexture:new Su(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ci(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(j){for(let I=0;I<j.removed.length;I++){const z=j.removed[I],et=E.indexOf(z);et>=0&&(E[et]=null,T[et].disconnect(z))}for(let I=0;I<j.added.length;I++){const z=j.added[I];let et=E.indexOf(z);if(et===-1){for(let ut=0;ut<T.length;ut++)if(ut>=E.length){E.push(z),et=ut;break}else if(E[ut]===null){E[ut]=z,et=ut;break}if(et===-1)break}const ct=T[et];ct&&ct.connect(z)}}const G=new P,tt=new P;function it(j,I,z){G.setFromMatrixPosition(I.matrixWorld),tt.setFromMatrixPosition(z.matrixWorld);const et=G.distanceTo(tt),ct=I.projectionMatrix.elements,ut=z.projectionMatrix.elements,Ft=ct[14]/(ct[10]-1),xt=ct[14]/(ct[10]+1),qt=(ct[9]+1)/ct[5],L=(ct[9]-1)/ct[5],Lt=(ct[8]-1)/ct[0],Ot=(ut[8]+1)/ut[0],Qt=Ft*Lt,vt=Ft*Ot,re=et/(-Lt+Ot),At=re*-Lt;if(I.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(At),j.translateZ(re),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ct[10]===-1)j.projectionMatrix.copy(I.projectionMatrix),j.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const Tt=Ft+re,A=xt+re,S=Qt-At,V=vt+(et-At),Y=qt*xt/A*Tt,Z=L*xt/A*Tt;j.projectionMatrix.makePerspective(S,V,Y,Z,Tt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,I){I===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(I.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let I=j.near,z=j.far;x.texture!==null&&(x.depthNear>0&&(I=x.depthNear),x.depthFar>0&&(z=x.depthFar)),N.near=M.near=b.near=I,N.far=M.far=b.far=z,(F!==N.near||H!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,H=N.far),N.layers.mask=j.layers.mask|6,b.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const et=j.parent,ct=N.cameras;st(N,et);for(let ut=0;ut<ct.length;ut++)st(ct[ut],et);ct.length===2?it(N,b,M):N.projectionMatrix.copy(b.projectionMatrix),Ut(j,N,et)};function Ut(j,I,z){z===null?j.matrix.copy(I.matrixWorld):(j.matrix.copy(z.matrixWorld),j.matrix.invert(),j.matrix.multiply(I.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(I.projectionMatrix),j.projectionMatrixInverse.copy(I.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let Yt=null;function Vt(j,I){if(h=I.getViewerPose(c||a),m=I,h!==null){const z=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;z.length!==N.cameras.length&&(N.cameras.length=0,et=!0);for(let xt=0;xt<z.length;xt++){const qt=z[xt];let L=null;if(f!==null)L=f.getViewport(qt);else{const Ot=u.getViewSubImage(d,qt);L=Ot.viewport,xt===0&&(t.setRenderTargetTextures(y,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(y))}let Lt=C[xt];Lt===void 0&&(Lt=new We,Lt.layers.enable(xt),Lt.viewport=new ce,C[xt]=Lt),Lt.matrix.fromArray(qt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(qt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(L.x,L.y,L.width,L.height),xt===0&&(N.matrix.copy(Lt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),et===!0&&N.cameras.push(Lt)}const ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const xt=u.getDepthInformation(z[0]);xt&&xt.isValid&&xt.texture&&x.init(xt,i.renderState)}if(ct&&ct.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let xt=0;xt<z.length;xt++){const qt=z[xt].camera;if(qt){let L=p[qt];L||(L=new Eu,p[qt]=L);const Lt=u.getCameraImage(qt);L.sourceTexture=Lt}}}}for(let z=0;z<T.length;z++){const et=E[z],ct=T[z];et!==null&&ct!==void 0&&ct.update(et,I,c||a)}Yt&&Yt(j,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),m=null}const Jt=new zu;Jt.setAnimationLoop(Vt),this.setAnimationLoop=function(j){Yt=j},this.dispose=function(){}}}const yi=new fn,G_=new jt;function W_(s,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,xu(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,v,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Xe&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Xe&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(x.envMap.value=_,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),x.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(yi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,v,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*v,x.scale.value=_*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,v){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const v=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=i[v.id];y===void 0&&(m(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",x));const T=_.program;n.updateUBOMapping(v,T);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){const _=u();v.__bindingPointIndex=_;const y=s.createBuffer(),T=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,R=y.length;E<R;E++){const D=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,M=D.length;b<M;b++){const C=D[b];if(f(C,E,b,T)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let k=0;k<F.length;k++){const W=F[k],K=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,N+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,T){const E=v.value,R=_+"_"+y;if(T[R]===void 0)return typeof E=="number"||typeof E=="boolean"?T[R]=E:T[R]=E.clone(),!0;{const D=T[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return T[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function m(v){const _=v.uniforms;let y=0;const T=16;for(let R=0,D=_.length;R<D;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,C=b.length;M<C;M++){const N=b[M],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,k=F.length;H<k;H++){const W=F[H],K=g(W),G=y%T,tt=G%K.boundary,it=G+tt;y+=tt,it!==0&&T-it<K.storage&&(y+=T-it),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=K.storage}}}const E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",v),_}function x(v){const _=v.target;_.removeEventListener("dispose",x);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const $_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let $n=null;function q_(){return $n===null&&($n=new ma($_,32,32,Sc,ms),$n.minFilter=Oe,$n.magFilter=Oe,$n.wrapS=In,$n.wrapT=In,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class j_{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Set([Tc,Ec,Mc]),g=new Set([Fn,Ri,Ys,Ks,vc,yc]),x=new Uint32Array(4),p=new Int32Array(4);let v=null,_=null;const y=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Ie;let D=0,b=0,M=null,C=-1,N=null;const F=new ce,H=new ce;let k=null;const W=new zt(0);let K=0,G=e.width,tt=e.height,it=1,st=null,Ut=null;const Yt=new ce(0,0,G,tt),Vt=new ce(0,0,G,tt);let Jt=!1;const j=new Dc;let I=!1,z=!1;const et=new jt,ct=new P,ut=new ce,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function qt(){return M===null?it:1}let L=n;function Lt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),L===null){const O="webgl2";if(L=Lt(O,w),L===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Ot,Qt,vt,re,At,Tt,A,S,V,Y,Z,X,wt,dt,Ct,St,nt,lt,kt,Dt,gt,It,U,ft;function at(){Ot=new ng(L),Ot.init(),It=new k_(L,Ot),Qt=new qx(L,Ot,t,It),vt=new F_(L,Ot),Qt.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),re=new rg(L),At=new S_,Tt=new O_(L,Ot,vt,At,Qt,It,re),A=new Yx(E),S=new eg(E),V=new lm(L),U=new Xx(L,V),Y=new ig(L,V,re,U),Z=new og(L,Y,V,re),kt=new ag(L,Qt,Tt),St=new jx(At),X=new M_(E,A,S,Ot,Qt,U,St),wt=new W_(E,At),dt=new T_,Ct=new L_(Ot),lt=new Wx(E,A,S,vt,Z,f,l),nt=new N_(E,Z,Qt),ft=new X_(L,re,Qt,vt),Dt=new $x(L,Ot,re),gt=new sg(L,Ot,re),re.programs=X.programs,E.capabilities=Qt,E.extensions=Ot,E.properties=At,E.renderLists=dt,E.shadowMap=nt,E.state=vt,E.info=re}at();const rt=new H_(E,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(G,tt,!1))},this.getSize=function(w){return w.set(G,tt)},this.setSize=function(w,O,$=!0){if(rt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,tt=O,e.width=Math.floor(w*it),e.height=Math.floor(O*it),$===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(G*it,tt*it).floor()},this.setDrawingBufferSize=function(w,O,$){G=w,tt=O,it=$,e.width=Math.floor(w*$),e.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(Yt)},this.setViewport=function(w,O,$,q){w.isVector4?Yt.set(w.x,w.y,w.z,w.w):Yt.set(w,O,$,q),vt.viewport(F.copy(Yt).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,O,$,q){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,O,$,q),vt.scissor(H.copy(Vt).multiplyScalar(it).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){vt.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let q=0;if(w){let B=!1;if(M!==null){const ht=M.texture.format;B=m.has(ht)}if(B){const ht=M.texture.type,yt=g.has(ht),Et=lt.getClearColor(),bt=lt.getClearAlpha(),Gt=Et.r,Wt=Et.g,Nt=Et.b;yt?(x[0]=Gt,x[1]=Wt,x[2]=Nt,x[3]=bt,L.clearBufferuiv(L.COLOR,0,x)):(p[0]=Gt,p[1]=Wt,p[2]=Nt,p[3]=bt,L.clearBufferiv(L.COLOR,0,p))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT),$&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),lt.dispose(),dt.dispose(),Ct.dispose(),At.dispose(),A.dispose(),S.dispose(),Z.dispose(),U.dispose(),ft.dispose(),X.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Be),rt.removeEventListener("sessionend",Ne),Pe.stop()};function ot(w){w.preventDefault(),ca("WebGLRenderer: Context Lost."),R=!0}function Q(){ca("WebGLRenderer: Context Restored."),R=!1;const w=re.autoReset,O=nt.enabled,$=nt.autoUpdate,q=nt.needsUpdate,B=nt.type;at(),re.autoReset=w,nt.enabled=O,nt.autoUpdate=$,nt.needsUpdate=q,nt.type=B}function Mt(w){te("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){const O=w.target;O.removeEventListener("dispose",Ht),ue(O)}function ue(w){Rt(w),At.remove(w)}function Rt(w){const O=At.get(w).programs;O!==void 0&&(O.forEach(function($){X.releaseProgram($)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,q,B,ht){O===null&&(O=Ft);const yt=B.isMesh&&B.matrixWorld.determinant()<0,Et=sd(w,O,$,q,B);vt.setMaterial(q,yt);let bt=$.index,Gt=1;if(q.wireframe===!0){if(bt=Y.getWireframeAttribute($),bt===void 0)return;Gt=2}const Wt=$.drawRange,Nt=$.attributes.position;let ne=Wt.start*Gt,de=(Wt.start+Wt.count)*Gt;ht!==null&&(ne=Math.max(ne,ht.start*Gt),de=Math.min(de,(ht.start+ht.count)*Gt)),bt!==null?(ne=Math.max(ne,0),de=Math.min(de,bt.count)):Nt!=null&&(ne=Math.max(ne,0),de=Math.min(de,Nt.count));const Se=de-ne;if(Se<0||Se===1/0)return;U.setup(B,q,Et,$,bt);let Ee,ge=Dt;if(bt!==null&&(Ee=V.get(bt),ge=gt,ge.setIndex(Ee)),B.isMesh)q.wireframe===!0?(vt.setLineWidth(q.wireframeLinewidth*qt()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(B.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),vt.setLineWidth(Bt*qt()),B.isLineSegments?ge.setMode(L.LINES):B.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else B.isPoints?ge.setMode(L.POINTS):B.isSprite&&ge.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ge.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,ye=B._multiDrawCounts,ae=B._multiDrawCount,Qe=bt?V.get(bt).bytesPerElement:1,Di=At.get(q).currentProgram.getUniforms();for(let tn=0;tn<ae;tn++)Di.setValue(L,"_gl_DrawID",tn),ge.render(Bt[tn]/Qe,ye[tn])}else if(B.isInstancedMesh)ge.renderInstances(ne,Se,B.count);else if($.isInstancedBufferGeometry){const Bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Bt);ge.renderInstances(ne,Se,ye)}else ge.render(ne,Se)};function oe(w,O,$){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,dr(w,O,$),w.side=Qn,w.needsUpdate=!0,dr(w,O,$),w.side=sn):dr(w,O,$)}this.compile=function(w,O,$=null){$===null&&($=w),_=Ct.get($),_.init(O),T.push(_),$.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),w!==$&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){const Et=ht[yt];oe(Et,$,B),q.add(Et)}else oe(ht,$,B),q.add(ht)}),_=T.pop(),q},this.compileAsync=function(w,O,$=null){const q=this.compile(w,O,$);return new Promise(B=>{function ht(){if(q.forEach(function(yt){At.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){B(w);return}setTimeout(ht,10)}Ot.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let xe=null;function ke(w){xe&&xe(w)}function Be(){Pe.stop()}function Ne(){Pe.start()}const Pe=new zu;Pe.setAnimationLoop(ke),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(w){xe=w,rt.setAnimationLoop(w),w===null?Pe.stop():Pe.start()},rt.addEventListener("sessionstart",Be),rt.addEventListener("sessionend",Ne),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,O,M),_=Ct.get(w,T.length),_.init(O),T.push(_),et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(et,Nn,O.reversedDepth),z=this.localClippingEnabled,I=St.init(this.clippingPlanes,z),v=dt.get(w,y.length),v.init(),y.push(v),rt.enabled===!0&&rt.isPresenting===!0){const ht=E.xr.getDepthSensingMesh();ht!==null&&an(ht,O,-1/0,E.sortObjects)}an(w,O,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(st,Ut),xt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,xt&&lt.addToRenderList(v,w),this.info.render.frame++,I===!0&&St.beginShadows();const $=_.state.shadowsArray;nt.render($,w,O),I===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,B=v.transmissive;if(_.setupLights(),O.isArrayCamera){const ht=O.cameras;if(B.length>0)for(let yt=0,Et=ht.length;yt<Et;yt++){const bt=ht[yt];mn(q,B,w,bt)}xt&&lt.render(w);for(let yt=0,Et=ht.length;yt<Et;yt++){const bt=ht[yt];pn(v,w,bt,bt.viewport)}}else B.length>0&&mn(q,B,w,O),xt&&lt.render(w),pn(v,w,O);M!==null&&b===0&&(Tt.updateMultisampleRenderTarget(M),Tt.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(E,w,O),U.resetDefaultState(),C=-1,N=null,T.pop(),T.length>0?(_=T[T.length-1],I===!0&&St.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function an(w,O,$,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){q&&ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const yt=Z.update(w),Et=w.material;Et.visible&&v.push(w,yt,Et,$,ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const yt=Z.update(w),Et=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ut.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ut.copy(yt.boundingSphere.center)),ut.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Et)){const bt=yt.groups;for(let Gt=0,Wt=bt.length;Gt<Wt;Gt++){const Nt=bt[Gt],ne=Et[Nt.materialIndex];ne&&ne.visible&&v.push(w,yt,ne,$,ut.z,Nt)}}else Et.visible&&v.push(w,yt,Et,$,ut.z,null)}}const ht=w.children;for(let yt=0,Et=ht.length;yt<Et;yt++)an(ht[yt],O,$,q)}function pn(w,O,$,q){const{opaque:B,transmissive:ht,transparent:yt}=w;_.setupLightsView($),I===!0&&St.setGlobalState(E.clippingPlanes,$),q&&vt.viewport(F.copy(q)),B.length>0&&Bn(B,O,$),ht.length>0&&Bn(ht,O,$),yt.length>0&&Bn(yt,O,$),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function mn(w,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new Ci(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ms:Fn,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ht=_.state.transmissionRenderTarget[q.id],yt=q.viewport||F;ht.setSize(yt.z*E.transmissionResolutionScale,yt.w*E.transmissionResolutionScale);const Et=E.getRenderTarget(),bt=E.getActiveCubeFace(),Gt=E.getActiveMipmapLevel();E.setRenderTarget(ht),E.getClearColor(W),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),xt&&lt.render($);const Wt=E.toneMapping;E.toneMapping=fi;const Nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),I===!0&&St.setGlobalState(E.clippingPlanes,q),Bn(w,$,q),Tt.updateMultisampleRenderTarget(ht),Tt.updateRenderTargetMipmap(ht),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let de=0,Se=O.length;de<Se;de++){const Ee=O[de],{object:ge,geometry:Bt,material:ye,group:ae}=Ee;if(ye.side===sn&&ge.layers.test(q.layers)){const Qe=ye.side;ye.side=Xe,ye.needsUpdate=!0,jc(ge,$,q,Bt,ye,ae),ye.side=Qe,ye.needsUpdate=!0,ne=!0}}ne===!0&&(Tt.updateMultisampleRenderTarget(ht),Tt.updateRenderTargetMipmap(ht))}E.setRenderTarget(Et,bt,Gt),E.setClearColor(W,K),Nt!==void 0&&(q.viewport=Nt),E.toneMapping=Wt}function Bn(w,O,$){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ht=w.length;B<ht;B++){const yt=w[B],{object:Et,geometry:bt,group:Gt}=yt;let Wt=yt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),Et.layers.test($.layers)&&jc(Et,O,$,bt,Wt,Gt)}}function jc(w,O,$,q,B,ht){w.onBeforeRender(E,O,$,q,B,ht),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(E,O,$,q,w,ht),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Xe,B.needsUpdate=!0,E.renderBufferDirect($,O,q,B,w,ht),B.side=Qn,B.needsUpdate=!0,E.renderBufferDirect($,O,q,B,w,ht),B.side=sn):E.renderBufferDirect($,O,q,B,w,ht),w.onAfterRender(E,O,$,q,B,ht)}function dr(w,O,$){O.isScene!==!0&&(O=Ft);const q=At.get(w),B=_.state.lights,ht=_.state.shadowsArray,yt=B.state.version,Et=X.getParameters(w,B.state,ht,O,$),bt=X.getProgramCacheKey(Et);let Gt=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?S:A).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Ht),Gt=new Map,q.programs=Gt);let Wt=Gt.get(bt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===yt)return Kc(w,Et),Wt}else Et.uniforms=X.getUniforms(w),w.onBeforeCompile(Et,E),Wt=X.acquireProgram(Et,bt),Gt.set(bt,Wt),q.uniforms=Et.uniforms;const Nt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=St.uniform),Kc(w,Et),q.needsLights=ad(w),q.lightsStateVersion=yt,q.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function Yc(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Kc(w,O){const $=At.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function sd(w,O,$,q,B){O.isScene!==!0&&(O=Ft),Tt.resetTextureUnits();const ht=O.fog,yt=q.isMeshStandardMaterial?O.environment:null,Et=M===null?E.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:je,bt=(q.isMeshStandardMaterial?S:A).get(q.envMap||yt),Gt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Wt=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Nt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,de=!!$.morphAttributes.color;let Se=fi;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Se=E.toneMapping);const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=Ee!==void 0?Ee.length:0,Bt=At.get(q),ye=_.state.lights;if(I===!0&&(z===!0||w!==N)){const ze=w===N&&q.id===C;St.setState(q,w,ze)}let ae=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ye.state.version||Bt.outputColorSpace!==Et||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==bt||q.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==St.numPlanes||Bt.numIntersection!==St.numIntersection)||Bt.vertexAlphas!==Gt||Bt.vertexTangents!==Wt||Bt.morphTargets!==Nt||Bt.morphNormals!==ne||Bt.morphColors!==de||Bt.toneMapping!==Se||Bt.morphTargetsCount!==ge)&&(ae=!0):(ae=!0,Bt.__version=q.version);let Qe=Bt.currentProgram;ae===!0&&(Qe=dr(q,O,B));let Di=!1,tn=!1,bs=!1;const be=Qe.getUniforms(),Ye=Bt.uniforms;if(vt.useProgram(Qe.program)&&(Di=!0,tn=!0,bs=!0),q.id!==C&&(C=q.id,tn=!0),Di||N!==w){vt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),be.setValue(L,"projectionMatrix",w.projectionMatrix),be.setValue(L,"viewMatrix",w.matrixWorldInverse);const Ke=be.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,ct.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&be.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,tn=!0,bs=!0)}if(B.isSkinnedMesh){be.setOptional(L,B,"bindMatrix"),be.setOptional(L,B,"bindMatrixInverse");const ze=B.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),be.setValue(L,"boneTexture",ze.boneTexture,Tt))}B.isBatchedMesh&&(be.setOptional(L,B,"batchingTexture"),be.setValue(L,"batchingTexture",B._matricesTexture,Tt),be.setOptional(L,B,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",B._indirectTexture,Tt),be.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",B._colorsTexture,Tt));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&kt.update(B,$,Qe),(tn||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,be.setValue(L,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ye.envMap.value=bt,Ye.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Ye.envMapIntensity.value=O.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=q_()),tn&&(be.setValue(L,"toneMappingExposure",E.toneMappingExposure),Bt.needsLights&&rd(Ye,bs),ht&&q.fog===!0&&wt.refreshFogUniforms(Ye,ht),wt.refreshMaterialUniforms(Ye,q,it,tt,_.state.transmissionRenderTarget[w.id]),ea.upload(L,Yc(Bt),Ye,Tt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ea.upload(L,Yc(Bt),Ye,Tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&be.setValue(L,"center",B.center),be.setValue(L,"modelViewMatrix",B.modelViewMatrix),be.setValue(L,"normalMatrix",B.normalMatrix),be.setValue(L,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ze=q.uniformsGroups;for(let Ke=0,ya=ze.length;Ke<ya;Ke++){const pi=ze[Ke];ft.update(pi,Qe),ft.bind(pi,Qe)}}return Qe}function rd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ad(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,O,$){const q=At.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),At.get(w.texture).__webglTexture=O,At.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const $=At.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const od=L.createFramebuffer();this.setRenderTarget=function(w,O=0,$=0){M=w,D=O,b=$;let q=!0,B=null,ht=!1,yt=!1;if(w){const bt=At.get(w);if(bt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)Tt.setupRenderTarget(w);else if(bt.__hasExternalTextures)Tt.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(bt.__boundDepthTexture!==Nt){if(Nt!==null&&At.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const Wt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[O])?B=Wt[O][$]:B=Wt[O],ht=!0):w.samples>0&&Tt.useMultisampledRTT(w)===!1?B=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?B=Wt[$]:B=Wt,F.copy(w.viewport),H.copy(w.scissor),k=w.scissorTest}else F.copy(Yt).multiplyScalar(it).floor(),H.copy(Vt).multiplyScalar(it).floor(),k=Jt;if($!==0&&(B=od),vt.bindFramebuffer(L.FRAMEBUFFER,B)&&q&&vt.drawBuffers(w,B),vt.viewport(F),vt.scissor(H),vt.setScissorTest(k),ht){const bt=At.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,$)}else if(yt){const bt=O;for(let Gt=0;Gt<w.textures.length;Gt++){const Wt=At.get(w.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,$,bt)}}else if(w!==null&&$!==0){const bt=At.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,$)}C=-1},this.readRenderTargetPixels=function(w,O,$,q,B,ht,yt,Et=0){if(!(w&&w.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){vt.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Gt=w.textures[Et],Wt=Gt.format,Nt=Gt.type;if(!Qt.textureFormatReadable(Wt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Nt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&$>=0&&$<=w.height-B&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et),L.readPixels(O,$,q,B,It.convert(Wt),It.convert(Nt),ht))}finally{const Gt=M!==null?At.get(M).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,q,B,ht,yt,Et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt)if(O>=0&&O<=w.width-q&&$>=0&&$<=w.height-B){vt.bindFramebuffer(L.FRAMEBUFFER,bt);const Gt=w.textures[Et],Wt=Gt.format,Nt=Gt.type;if(!Qt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et),L.readPixels(O,$,q,B,It.convert(Wt),It.convert(Nt),0);const de=M!==null?At.get(M).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,de);const Se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Jd(L,Se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(ne),L.deleteSync(Se),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){const q=Math.pow(2,-$),B=Math.floor(w.image.width*q),ht=Math.floor(w.image.height*q),yt=O!==null?O.x:0,Et=O!==null?O.y:0;Tt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,yt,Et,B,ht),vt.unbindTexture()};const cd=L.createFramebuffer(),ld=L.createFramebuffer();this.copyTextureToTexture=function(w,O,$=null,q=null,B=0,ht=null){ht===null&&(B!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=B,B=0):ht=0);let yt,Et,bt,Gt,Wt,Nt,ne,de,Se;const Ee=w.isCompressedTexture?w.mipmaps[ht]:w.image;if($!==null)yt=$.max.x-$.min.x,Et=$.max.y-$.min.y,bt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,Wt=$.min.y,Nt=$.isBox3?$.min.z:0;else{const on=Math.pow(2,-B);yt=Math.floor(Ee.width*on),Et=Math.floor(Ee.height*on),w.isDataArrayTexture?bt=Ee.depth:w.isData3DTexture?bt=Math.floor(Ee.depth*on):bt=1,Gt=0,Wt=0,Nt=0}q!==null?(ne=q.x,de=q.y,Se=q.z):(ne=0,de=0,Se=0);const ge=It.convert(O.format),Bt=It.convert(O.type);let ye;O.isData3DTexture?(Tt.setTexture3D(O,0),ye=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Tt.setTexture2DArray(O,0),ye=L.TEXTURE_2D_ARRAY):(Tt.setTexture2D(O,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Di=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt);const be=w.isDataArrayTexture||w.isData3DTexture,Ye=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const on=At.get(w),ze=At.get(O),Ke=At.get(on.__renderTarget),ya=At.get(ze.__renderTarget);vt.bindFramebuffer(L.READ_FRAMEBUFFER,Ke.__webglFramebuffer),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let pi=0;pi<bt;pi++)be&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(w).__webglTexture,B,Nt+pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(O).__webglTexture,ht,Se+pi)),L.blitFramebuffer(Gt,Wt,yt,Et,ne,de,yt,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||At.has(w)){const on=At.get(w),ze=At.get(O);vt.bindFramebuffer(L.READ_FRAMEBUFFER,cd),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ld);for(let Ke=0;Ke<bt;Ke++)be?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,B,Nt+Ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,B),Ye?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,ht,Se+Ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,ht),B!==0?L.blitFramebuffer(Gt,Wt,yt,Et,ne,de,yt,Et,L.COLOR_BUFFER_BIT,L.NEAREST):Ye?L.copyTexSubImage3D(ye,ht,ne,de,Se+Ke,Gt,Wt,yt,Et):L.copyTexSubImage2D(ye,ht,ne,de,Gt,Wt,yt,Et);vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ye,ht,ne,de,Se,yt,Et,bt,ge,Bt,Ee.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,ht,ne,de,Se,yt,Et,bt,ge,Ee.data):L.texSubImage3D(ye,ht,ne,de,Se,yt,Et,bt,ge,Bt,Ee):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,ne,de,yt,Et,ge,Bt,Ee.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,ne,de,Ee.width,Ee.height,ge,Ee.data):L.texSubImage2D(L.TEXTURE_2D,ht,ne,de,yt,Et,ge,Bt,Ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Di),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),ht===0&&O.generateMipmaps&&L.generateMipmap(ye),vt.unbindTexture()},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&Tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Tt.setTextureCube(w,0):w.isData3DTexture?Tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Tt.setTexture2DArray(w,0):Tt.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){D=0,b=0,M=null,vt.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}async function Y_(s){const t=await fetch(new URL("cases/index.json",s));if(!t.ok)throw new Error(`Каталог случаев: HTTP ${t.status}`);const e=await t.json();if(e.schema!=="sonolab.catalog/1")throw new Error("Неизвестный формат каталога");return e.cases}async function K_(s,t){const e=new URL(t.path,s),n=await fetch(e);if(!n.ok)throw new Error(`Паспорт случая ${t.caseId}: HTTP ${n.status}`);const i=await n.json();return J_(i),{manifest:i,baseUrl:new URL(".",e).toString()}}function Z_(s,t){return s.find(e=>e.caseId===t)??s.find(e=>e.default)??s[0]}function J_(s){const t=a=>{throw new Error(`Паспорт случая ${s.caseId??"?"}: ${a}`)};s.schema!=="sonolab.case/1"&&t("неизвестная схема"),["recorded-sweep","volume-reslice","registered-volume","synthetic"].includes(s.imageType)||t("неизвестный тип изображения"),["left","right","unknown"].includes(s.patientSide)||t("сторона должна быть left/right/unknown"),s.source?.license||t("не указана лицензия");const e=s.frames?.count;(!e||e<1)&&t("нет кадров");const n=s.trajectory?.lut;(!Array.isArray(n)||n.length<2)&&t("нет таблицы t → frameId"),n.some(a=>!Number.isInteger(a)||a<0||a>=e)&&t("таблица ссылается на несуществующий кадр");const i=s.imageType==="recorded-sweep"||s.imageType==="volume-reslice",r=s.imageType==="volume-reslice"&&(s.reslice?.sliceStepMm??0)>0&&(s.imageGeometry?.pixelSpacingMm??0)>0;i&&(s.supportedMotions.compression||(s.supportedMotions.rotation||s.supportedMotions.tilt)&&!r)&&t("записанный проход не поддерживает вращение/наклон/компрессию")}const Je=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Xu=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],na=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],ks=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Bs=s=>Math.sqrt(ks(s,s)),Ls=s=>{const t=Bs(s)||1;return[s[0]/t,s[1]/t,s[2]/t]},yh=(s,t,e)=>Xu(s,na(Je(t,s),e));function bh(s,t){const e=Math.min(1,Math.max(0,t));return s[Math.round(e*(s.length-1))]}function Mh(s,t){const e=Math.min(1,Math.max(0,s));return Math.round(e*(t-1))/(t-1)}class $u{samples;cumulative;length;constructor(t){if(t.length<2)throw new Error("Траектория должна содержать минимум две точки");this.samples=t.map(e=>({point:e.point,normal:Ls(e.normal)})),this.cumulative=[0];for(let e=1;e<t.length;e++)this.cumulative.push(this.cumulative[e-1]+Bs(Je(t[e].point,t[e-1].point)));this.length=this.cumulative[this.cumulative.length-1]}poseAt(t){const e=Math.min(1,Math.max(0,t))*this.length;let n=1;for(;n<this.cumulative.length-1&&this.cumulative[n]<e;)n++;const i=this.samples[n-1],r=this.samples[n],a=this.cumulative[n]-this.cumulative[n-1]||1,o=(e-this.cumulative[n-1])/a;return{pointBody:yh(i.point,r.point,o),normalBody:Ls(yh(i.normal,r.normal,o)),alongBody:Ls(Je(r.point,i.point))}}project(t){let e={dist:1/0,arc:0};for(let d=1;d<this.samples.length;d++){const f=this.samples[d-1].point,m=this.samples[d].point,g=Je(m,f),x=ks(g,g)||1,p=Math.min(1,Math.max(0,ks(Je(t,f),g)/x)),v=Xu(f,na(g,p)),_=Bs(Je(t,v));_<e.dist&&(e={dist:_,arc:this.cumulative[d-1]+p*Math.sqrt(x)})}const n=this.samples[0].point,i=Ls(Je(this.samples[1].point,n)),r=this.samples[this.samples.length-1].point,a=Ls(Je(r,this.samples[this.samples.length-2].point)),o=-ks(Je(t,n),i),l=ks(Je(t,r),a);let c=0,h=e.arc/this.length,u=e.dist;return o>0&&e.arc===0?(c=o,h=-o/this.length,u=Bs(Je(Je(t,n),na(i,-o)))):l>0&&e.arc>=this.length-1e-12&&(c=l,h=1+l/this.length,u=Bs(Je(Je(t,r),na(a,l)))),{tRaw:h,t:Math.min(1,Math.max(0,h)),lateral:u,overshoot:c}}}const $c={lateralTolerance:.028,endTolerance:.006};function Q_(s,t=$c){return s.lateral<=t.lateralTolerance&&s.overshoot<=t.endTolerance}const tv=7,ev=450;class nv{constructor(t,e,n){this.view=t,this.visual=e,this.opts=n;const i=t.host;i.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),i.addEventListener("pointermove",this.onHover,{passive:!0})}state={kind:"idle"};enabled=!0;ray=new Pn;ndc=new pt;dragging=null;tapCandidate=null;pendingMove=null;activePointers=new Set;get isDragging(){return this.dragging!==null}setT(t,e,n=performance.now()){const i=Mh(t,this.opts.lut.length),r=this.opts.path.poseAt(i);this.apply({kind:"in-area",caseId:this.opts.caseId,t:i,frameId:bh(this.opts.lut,i),pose:r,origin:e},n)}flush(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null,this.placeFromScreen(t.x,t.y,t.ts,!0)}apply(t,e){if(this.state=t,t.kind==="in-area")this.visual.setPose(t.pose.pointBody,t.pose.normalBody,t.pose.alongBody,!0);else if(t.kind==="out-of-area"){const n=this.opts.path.poseAt(.5).alongBody;this.visual.setPose(t.contact.pointBody,t.contact.normalBody,n,!1)}this.opts.onState(t,e)}setNdc(t,e){const n=this.view.renderer.domElement.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.view.camera)}placeFromScreen(t,e,n,i){this.setNdc(t,e);const r=this.ray.intersectObjects(this.view.human.skinMeshes,!1)[0];if(!r||!r.face)return void 0;const a=r.point.toArray(),o=new $t().getNormalMatrix(r.object.matrixWorld),l=r.face.normal.clone().applyMatrix3(o).normalize().toArray(),c=r.object===this.view.human.forearm&&this.opts.isOnRegion(r.point),h=this.opts.path.project(a);if(c&&Q_(h,$c)){const u=Mh(h.t,this.opts.lut.length);this.apply({kind:"in-area",caseId:this.opts.caseId,t:u,frameId:bh(this.opts.lut,u),pose:this.opts.path.poseAt(u),origin:"body"},n)}else this.apply({kind:"out-of-area",contact:{pointBody:a,normalBody:l,surfaceId:r.object.name||"skin"},origin:"body"},n)}hitsProbeOrZone(t,e){this.setNdc(t,e);const n=[this.opts.zoneHitMesh];return this.visual.group.visible&&n.push(...this.visual.grabTargets),this.ray.intersectObjects(n,!1).length>0}onDown=t=>{if(this.enabled&&t.target===this.view.renderer.domElement){if(this.activePointers.add(t.pointerId),this.activePointers.size>1){this.tapCandidate=null,this.dragging&&this.endDrag();return}if(!(t.button!==0&&t.pointerType==="mouse")){if(this.hitsProbeOrZone(t.clientX,t.clientY)){this.dragging={pointerId:t.pointerId},this.view.controls.enabled=!1,this.visual.setActive(!0),this.view.host.classList.add("dragging-probe"),t.preventDefault(),t.stopPropagation(),this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!0);return}this.tapCandidate={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}}};onMove=t=>{this.tapCandidate&&this.tapCandidate.id===t.pointerId&&Math.hypot(t.clientX-this.tapCandidate.x,t.clientY-this.tapCandidate.y)>tv&&(this.tapCandidate=null),!(!this.dragging||this.dragging.pointerId!==t.pointerId)&&(this.pendingMove={x:t.clientX,y:t.clientY,ts:t.timeStamp})};onUp=t=>{if(!this.enabled){this.activePointers.delete(t.pointerId);return}if(this.activePointers.delete(t.pointerId),this.dragging&&this.dragging.pointerId===t.pointerId){this.flush(),this.endDrag();return}const e=this.tapCandidate;this.tapCandidate=null,e&&e.id===t.pointerId&&t.type==="pointerup"&&t.timeStamp-e.t<ev&&this.placeFromScreen(t.clientX,t.clientY,t.timeStamp,!1)};onHover=t=>{this.enabled&&(this.dragging||t.pointerType!=="mouse"||this.view.host.classList.toggle("can-grab",this.hitsProbeOrZone(t.clientX,t.clientY)))};endDrag(){this.dragging=null,this.view.controls.enabled=!0,this.visual.setActive(!1),this.view.host.classList.remove("dragging-probe")}}function iv(s,t=$c.lateralTolerance*.8){const e=[],n=[];s.samples.forEach((a,o)=>{const l=new P(...a.point),c=new P(...a.normal),h=s.samples[Math.min(o+1,s.samples.length-1)].point,u=s.samples[Math.max(o-1,0)].point,d=new P(...h).sub(new P(...u)).normalize(),f=new P().crossVectors(c,d).normalize(),m=c.clone().multiplyScalar(.004),g=l.clone().add(m).addScaledVector(f,t),x=l.clone().add(m).addScaledVector(f,-t);if(e.push(g.x,g.y,g.z,x.x,x.y,x.z),o>0){const p=o*2;n.push(p-2,p-1,p,p-1,p+1,p)}});const i=new Ce;i.setAttribute("position",new me(e,3)),i.setIndex(n);const r=new ie(i,new Sn({visible:!1,side:sn}));return r.name="sweep-zone-hit",r}const Yn=s=>new P(s[0],s[1],s[2]);class sv{group=new Un;grabTargets=[];fan;bodyMat;constructor(){this.group.name="probe",this.bodyMat=new un({color:3095109,roughness:.35,metalness:.1});const t=new un({color:1844011,roughness:.5}),e=new un({color:9411237,roughness:.3}),n=new ie(new Uc(.0125,.085,8,20),this.bodyMat);n.scale.set(1.25,1,.75),n.position.y=.072;const i=new ie(new En(.038,.022,.02),t);i.position.y=.014;const r=new ie(new ir(.019,.019,.02,24,1,!1,0,Math.PI),e);r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,r.scale.set(1,1,.3),r.position.y=.004;const a=new ie(new Vc(new Tu([new P(0,.12,0),new P(0,.145,.012),new P(.006,.16,.04)]),16,.0035,8),t);for(const h of[n,i,r,a])h.castShadow=!0,this.group.add(h),this.grabTargets.push(h);const o=new Lu,l=.07;o.moveTo(0,0),o.absarc(0,0,l,-Math.PI/2-.65,-Math.PI/2+.65,!1),o.lineTo(0,0),this.fan=new ie(new kc(o,24),new Sn({color:3843839,transparent:!0,opacity:.18,side:sn,depthTest:!1,depthWrite:!1})),this.fan.renderOrder=10,this.group.add(this.fan);const c=new ie(new Bc(.035,12,8),new Sn({visible:!1}));c.position.y=.05,this.group.add(c),this.grabTargets.push(c),this.group.visible=!1}setPose(t,e,n,i){const r=Yn(e).normalize(),a=Yn(n).sub(r.clone().multiplyScalar(Yn(n).dot(r))).normalize(),o=new P().crossVectors(r,a).normalize(),l=new jt().makeBasis(o,r,a);this.group.quaternion.setFromRotationMatrix(l),this.group.position.copy(Yn(t)),this.group.visible=!0,this.fan.visible=i,this.bodyMat.color.set(i?3095109:7032912)}setActive(t){this.bodyMat.emissive.set(t?1127253:0)}}function rv(s){const t=new Un;t.name="sweep-marker";const e=s.samples.map(r=>Yn(r.point).add(Yn(r.normal).multiplyScalar(.0015))),n=new xa(new Ce().setFromPoints(e),new Pp({color:683990,dashSize:.008,gapSize:.006,depthTest:!0}));n.computeLineDistances(),t.add(n);const i=new Sn({color:683990});for(const r of[s.samples[0],s.samples[s.samples.length-1]]){const a=new ie(new zc(.006,.0012,8,24),i);a.position.copy(Yn(r.point).add(Yn(r.normal).multiplyScalar(.0015))),a.lookAt(a.position.clone().add(Yn(r.normal))),t.add(a)}return t}function av(s,t,e,n,i=41,r=[]){s.updateMatrixWorld(!0);for(const d of r)d.updateMatrixWorld(!0);const a=new Pn,o=new P(...n).normalize(),l=new P(...t),c=new P(...e),h=new $t().getNormalMatrix(s.matrixWorld),u=[];for(let d=0;d<i;d++){const f=l.clone().lerp(c,d/(i-1));a.set(f.clone().addScaledVector(o,-.4),o);let m=a.intersectObject(s,!1)[0],g=h;if((!m||!m.face)&&r.length&&(m=a.intersectObjects(r,!1)[0],m&&(g=new $t().getNormalMatrix(m.object.matrixWorld))),!m||!m.face)throw new Error("Не удалось построить траекторию прохода на коже");const x=m.face.normal.clone().applyMatrix3(g).normalize();u.push({point:m.point.toArray(),normal:x.toArray()})}return new $u(u)}function ov(s,t,e,n,i=81){s.updateMatrixWorld(!0);const r=new Pn,a=[],o=new P(0,-1,0),l=new $t().getNormalMatrix(s.matrixWorld);for(let c=0;c<i;c++){const h=e+(n-e)*(c/(i-1)),u=t.elbow.clone().lerp(t.wrist,h);r.set(u.clone().add(new P(0,.3,0)),o);const d=r.intersectObject(s,!1)[0];if(!d||!d.face)throw new Error("Не удалось построить траекторию на предплечье");const f=d.face.normal.clone().applyMatrix3(l).normalize();a.push({point:d.point.toArray(),normal:f.toArray()})}return new $u(a)}const Sh={type:"change"},qc={type:"start"},qu={type:"end"},Hr=new xs,Eh=new hi,cv=Math.cos(70*Rc.DEG2RAD),we=new P,Ze=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},so=1e-6;class lv extends om{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new dn,this._lastTargetPosition=new P,this._quat=new dn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kl,this._sphericalDelta=new Kl,this._scale=1,this._panOffset=new P,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new P,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uv.bind(this),this._onPointerDown=hv.bind(this),this._onPointerUp=dv.bind(this),this._onContextMenu=vv.bind(this),this._onMouseWheel=mv.bind(this),this._onKeyDown=xv.bind(this),this._onTouchStart=gv.bind(this),this._onTouchMove=_v.bind(this),this._onMouseDown=fv.bind(this),this._onMouseMove=pv.bind(this),this._interceptControlDown=yv.bind(this),this._interceptControlUp=bv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sh),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=we.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<cv?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>so||8*(1-this._lastQuaternion.dot(this.object.quaternion))>so||this._lastTargetPosition.distanceToSquared(this.target)>so?(this.dispatchEvent(Sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;we.copy(i).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function uv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=pe.DOLLY;break;case ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pe.ROTATE}break;case ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(qc)}function pv(s){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function mv(s){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(s.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(qu))}function xv(s){this.enabled!==!1&&this._handleKeyDown(s)}function gv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=pe.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=pe.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(qc)}function _v(s){switch(this._trackPointer(s),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=pe.NONE}}function vv(s){this.enabled!==!1&&s.preventDefault()}function yv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Mv extends vu{constructor(){super();const t=new En;t.deleteAttribute("uv");const e=new un({side:Xe}),n=new un,i=new Bu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ie(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new bu(t,n,6),o=new ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ie(t,Ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ie(t,Ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ie(t,Ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new ie(t,Ki(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new ie(t,Ki(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new ie(t,Ki(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ki(s){return new Ap({color:0,emissive:16777215,emissiveIntensity:s})}function Th(s,t){if(t===zd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===nc||t===lu){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===nc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class Sv extends vs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new Dv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Av(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Tv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Hv(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=qs.extractUrlBase(t);a=qs.resolveURL(c,this.path)}else a=qs.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new ku(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ju){try{a[ee.KHR_BINARY_GLTF]=new Gv(t)}catch(u){i&&i(u);return}r=JSON.parse(a[ee.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ny(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ee.KHR_MATERIALS_UNLIT:a[u]=new wv;break;case ee.KHR_DRACO_MESH_COMPRESSION:a[u]=new Wv(r,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:a[u]=new Xv;break;case ee.KHR_MESH_QUANTIZATION:a[u]=new $v;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Ev(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tv{constructor(t){this.parser=t,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new zt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],je);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bu(h),c.distance=u;break;case"spot":c=new qp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class wv{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(t,e,n){const i=[];t.color=new zt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],je),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ie))}return Promise.all(i)}}class Av{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Rv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new pt(o,o)}return Promise.all(r)}}class Cv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Pv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Lv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new zt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],je)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ie)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Iv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Dv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new zt().setRGB(o[0],o[1],o[2],je),Promise.all(r)}}class Nv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Uv{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new zt().setRGB(o[0],o[1],o[2],je),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ie)),Promise.all(r)}}class Fv{constructor(t){this.parser=t,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Ov{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class kv{constructor(t){this.parser=t,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Bv{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class zv{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}}class Vv{constructor(t){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Hv{constructor(t){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const g=new jt,x=new P,p=new dn,v=new P(1,1,1),_=new bu(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,g.compose(x,p,v));for(const y in l)if(y==="_COLOR_0"){const T=l[y];_.instanceColor=new sc(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);ve.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ju="glTF",Is=12,wh={JSON:1313821514,BIN:5130562};class Gv{constructor(t){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ju)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,r=new DataView(t,Is);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===wh.JSON){const c=new Uint8Array(t,Is+a,o);this.content=n.decode(c)}else if(l===wh.BIN){const c=Is+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=fc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=fc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=is[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const g=f.attributes[m],x=l[m];x!==void 0&&(g.normalized=x)}u(f)},o,c,je,d)})})}}class Xv{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class $v{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}}class Yu extends ur{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,g=m-c,x=-2*f+3*d,p=f-d,v=1-x,_=p-d+u;for(let y=0;y!==o;y++){const T=a[g+y+o],E=a[g+y+l]*h,R=a[m+y+o],D=a[m+y]*h;r[y]=v*T+_*E+x*R+p*D}return r}}const qv=new dn;class jv extends Yu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return qv.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ah={9728:$e,9729:Oe,9984:nu,9985:Kr,9986:Us,9987:Dn},Rh={33071:In,33648:ra,10497:Ai},ro={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yv={CUBICSPLINE:void 0,LINEAR:tr,STEP:Qs},ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new un({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),s.DefaultMaterial}function bi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Cn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Zv(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Jv(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qv(s){let t;const e=s.extensions&&s.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+oo(e.attributes):t=s.indices+":"+oo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+oo(s.targets[n]);return t}function oo(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ty(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ey=new jt;class ny{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Ev,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Wp(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ku(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return bi(r,o,i),Cn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(qs.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=ro[i.type],o=is[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new qe(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ro[i.type],c=is[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,x;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(v);_||(g=new c(o,p*f,i.count*f/h),_=new zf(g,f/h),e.cache.add(v,_)),x=new Lc(_,l,d%f/h,m)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),x=new qe(g,l,m);if(i.sparse!==void 0){const p=ro.SCALAR,v=is[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(a[1],_,i.sparse.count*p),E=new c(a[2],y,i.sparse.count*l);o!==null&&(x=new qe(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let R=0,D=T.length;R<D;R++){const b=T[R];if(x.setX(b,E[R*l]),l>=2&&x.setY(b,E[R*l+1]),l>=3&&x.setZ(b,E[R*l+2]),l>=4&&x.setW(b,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ah[d.magFilter]||Oe,h.minFilter=Ah[d.minFilter]||Dn,h.wrapS=Rh[d.wrapS]||Ai,h.wrapT=Rh[d.wrapT]||Ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$e&&h.minFilter!==Oe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(g){const x=new De(g);x.needsUpdate=!0,d(x)}),e.load(qs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Cn(u,a),u.userData.mimeType=a.mimeType||ty(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ee.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Mu,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Nc,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return un}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},l=r.extensions||{},c=[];if(l[ee.KHR_MATERIALS_UNLIT]){const u=i[ee.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new zt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],je),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,Ie)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=sn);const h=r.alphaMode||ao.OPAQUE;if(h===ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Sn&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Sn&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Sn){const u=r.emissiveFactor;o.emissive=new zt().setRGB(u[0],u[1],u[2],je)}return r.emissiveTexture!==void 0&&a!==Sn&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Ie)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Cn(u,r),e.associations.set(u,{materials:t}),r.extensions&&bi(i,u,r),u})}createUniqueName(t){const e=he.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Ch(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=Qv(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ch(new Ce,c,e),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Kv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],x=a[f];let p;const v=c[f];if(x.mode===ln.TRIANGLES||x.mode===ln.TRIANGLE_STRIP||x.mode===ln.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new Hf(g,v):new ie(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),x.mode===ln.TRIANGLE_STRIP?p.geometry=Th(p.geometry,lu):x.mode===ln.TRIANGLE_FAN&&(p.geometry=Th(p.geometry,nc));else if(x.mode===ln.LINES)p=new jf(g,v);else if(x.mode===ln.LINE_STRIP)p=new xa(g,v);else if(x.mode===ln.LINE_LOOP)p=new Yf(g,v);else if(x.mode===ln.POINTS)p=new Kf(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&Jv(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Cn(p,r),x.extensions&&bi(i,p,x),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&bi(i,u[0],r),u[0];const d=new Un;r.extensions&&bi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new We(Rc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Gc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Cn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new jt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ic(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],g=f.target,x=g.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],g=u[3],x=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const T=d[_],E=f[_],R=m[_],D=g[_],b=x[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const M=n._createAnimationTracks(T,E,R,D,b);if(M)for(let C=0;C<M.length;C++)p.push(M[C])}const v=new Op(r,void 0,p);return Cn(v,i),v})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ey)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yu:c.length>1?h=new Un:c.length===1?h=c[0]:h=new ve,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Cn(h,r),r.extensions&&bi(n,h,r),r.matrix!==void 0){const u=new jt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Un;n.name&&(r.name=i.createUniqueName(n.name)),Cn(r,n),n.extensions&&bi(e,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Tn||d instanceof De)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,l=[];ci[r.path]===ci.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ci[r.path]){case ci.weights:c=us;break;case ci.rotation:c=ds;break;case ci.translation:case ci.scale:c=fs;break;default:switch(n.itemSize){case 1:c=us;break;case 2:case 3:default:c=fs;break}break}const h=i.interpolation!==void 0?Yv[i.interpolation]:tr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ci[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=pc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ds?jv:Yu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iy(s,t,e){const n=t.attributes,i=new ei;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=pc(is[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=pc(is[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new On;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ch(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=fc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return se.workingColorSpace!==je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${se.workingColorSpace}" not supported.`),Cn(s,t),iy(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Zv(s,t.targets,e):s})}function sy(s,t,e){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0)/4294967296,r=new Float32Array(s*s);for(const{period:a,amp:o}of e){const l=new Float32Array(a*a).map(()=>i()),c=(h,u)=>l[(u+a)%a*a+(h+a)%a];for(let h=0;h<s;h++)for(let u=0;u<s;u++){const d=u/s*a,f=h/s*a,m=Math.floor(d),g=Math.floor(f),x=d-m,p=f-g,v=x*x*(3-2*x),_=p*p*(3-2*p),y=c(m,g)+(c(m+1,g)-c(m,g))*v,T=c(m,g+1)+(c(m+1,g+1)-c(m,g+1))*v;r[h*s+u]+=(y+(T-y)*_)*o}}return r}function ry(s=256){const t=sy(s,1234567,[{period:64,amp:.55},{period:128,amp:.3},{period:16,amp:.15}]);for(let o=0;o<t.length;o++)t[o]=Math.pow(t[o],1.6);const e=new Uint8Array(s*s*4),n=new Uint8Array(s*s*4),i=(o,l)=>t[(l+s)%s*s+(o+s)%s],r=2.2;for(let o=0;o<s;o++)for(let l=0;l<s;l++){const c=(i(l+1,o)-i(l-1,o))*r,h=(i(l,o+1)-i(l,o-1))*r,u=Math.hypot(c,h,1),d=(o*s+l)*4;e[d]=(-c/u*.5+.5)*255,e[d+1]=(-h/u*.5+.5)*255,e[d+2]=(1/u*.5+.5)*255,e[d+3]=255;const f=.42+(.9-i(l,o))*.22;n[d]=n[d+1]=n[d+2]=Math.max(0,Math.min(255,f*255)),n[d+3]=255}const a=o=>{const l=new ma(o,s,s,rn);return l.wrapS=l.wrapT=Ai,l.repeat.set(36,36),l.magFilter=Oe,l.minFilter=Dn,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l};return{normal:a(e),roughness:a(n)}}function ay(s,t=ry()){const e=new wn({map:s,color:new zt(1,.97,.95),vertexColors:!0,roughness:1,roughnessMap:t.roughness,normalMap:t.normal,normalScale:new pt(.18,.18),metalness:0,specularIntensity:.55,sheen:.08,sheenColor:new zt(16049888),sheenRoughness:.6});return e.userData.sss={wrap:.35,color:new zt(.55,.2,.12)},e.userData.saturation=.66,e.onBeforeCompile=n=>{n.uniforms.sssWrap={value:e.userData.sss.wrap},n.uniforms.sssColor={value:e.userData.sss.color},n.uniforms.skinSaturation={value:e.userData.saturation},n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = mix( vec3( dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), diffuseColor.rgb, skinSaturation );`);const i=Kt.lights_physical_pars_fragment,r=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}`;if(!i.includes(r))return;const a=`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	float sssNL = dot( geometryNormal, directLight.direction );
	float sssWrapNL = saturate( ( sssNL + sssWrap ) / ( 1.0 + sssWrap ) );
	reflectedLight.directDiffuse += max( sssWrapNL - saturate( sssNL ), 0.0 ) * sssColor * directLight.color * BRDF_Lambert( material.diffuseColor );
}`;n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",`uniform float sssWrap;
uniform vec3 sssColor;
uniform float skinSaturation;
`+i.replace(r,a))},e.customProgramCacheKey=()=>"sonolab-skin-sss",e}function oy(s){const t=s.material;t.alphaTest=.5,t.alphaToCoverage=!0,t.transparent=!1,t.depthWrite=!0,t.roughness=.62,t.color.setRGB(.93,.86,.8),t.side=sn,t.envMapIntensity=.6;const e=t.clone();e.alphaTest=.04,e.alphaToCoverage=!1,e.transparent=!0,e.depthWrite=!1,e.opacity=.95;const n=new ie(s.geometry,e);return n.name=s.name+"-fringe",n.renderOrder=3,n.castShadow=!1,n.raycast=()=>{},s.renderOrder=1,s.castShadow=!0,n}const js=s=>new P(s[0],s[1],s[2]);function cy(s,t){s.updateMatrixWorld(!0);const e=[];let n;if(s.traverse(l=>{const c=l;if(!c.isMesh)return;if(c.castShadow=!0,c.receiveShadow=!0,c.name==="BodyFull"||c.parent?.name==="BodyFull"||c.name==="Briefs"||c.parent?.name==="Briefs"){(c.parent&&c.parent.name!==s.name?c.parent:c).visible=!1;return}e.push(c),(c.name==="Body"||c.parent?.name==="Body")&&(n=c)}),!n)throw new Error("В модели нет сетки Body");n.name="Body";const i=js(t.landmarks.elbowR),r=js(t.landmarks.wristR),a=r.clone().sub(i),o=a.length();return a.normalize(),{root:s,skinMeshes:e,forearm:n,forearmAxis:{elbow:i,wrist:r},isOnForearm(l){const c=l.clone().sub(i),h=c.dot(a),u=c.sub(a.clone().multiplyScalar(h)).length();return h>-.03&&h<o+.02&&u<.075},focus:{body:js(t.landmarks.pelvis).add(new P(.05,0,-.2)),forearm:i.clone().lerp(r,.5)},meta:t}}function ly(s){const t=[];s.traverse(e=>{e.isMesh&&t.push(e)});for(const e of t){const n=e.material,i=e.name==="Body"||e.parent?.name==="Body"||e.name==="BodyFull"||e.parent?.name==="BodyFull",r=e.name==="Hair"||e.parent?.name==="Hair";if(i)e.material=ay(n.map),n.dispose();else if(r){const a=oy(e);e.parent?.add(a)}else n.alphaTest>0||n.transparent?(n.alphaTest>0&&(n.alphaToCoverage=!0),n.depthWrite=!n.transparent,e.castShadow=!1,e.renderOrder=n.transparent?2:1):(e.name==="Clothes"||e.parent?.name==="Clothes")&&(n.roughness=.92,n.envMapIntensity=.7)}}async function hy(s,t){const[e,n]=await Promise.all([fetch(new URL("models/human.json",s)).then(r=>{if(!r.ok)throw new Error(`Паспорт модели: HTTP ${r.status}`);return r.json()}),new Sv().loadAsync(new URL("models/human.glb",s).toString(),r=>{t&&r.total&&t(r.loaded/r.total)})]);n.scene.name="human";const i=cy(n.scene,e);return ly(n.scene),i}function uy(s){const t=new Un;t.name="table";const e=new un({color:15331058,roughness:.75}),n=new un({color:12375014,roughness:.95}),i=new un({color:7831690,roughness:.45,metalness:.6}),r=new ie(new En(2.05,.07,.64),e);r.position.set(-.08,-.035,0),r.receiveShadow=!0,t.add(r);const a=new ie(new En(1.9,.004,.62),n);a.position.set(-.1,5e-4,0),a.receiveShadow=!0,t.add(a);const o=new ie(new En(1.9,.08,.5),i);o.position.set(-.08,-.11,0),t.add(o);for(const _ of[-.85,.65]){const y=new ie(new ir(.04,.05,.75,20),i);y.position.set(_,-.52,0),t.add(y)}const l=js(s.landmarks.shoulderR),c=js(s.landmarks.middleFingerBaseR),h=new P(c.x-l.x,0,c.z-l.z),u=h.length();h.normalize();const d=u+.12,f=.05,m=s.forearmMinY-.002,g=new ie(new En(.17,f,d),e),x=l.clone().add(h.clone().multiplyScalar(d/2-.02));g.position.set(x.x,m-f/2,x.z),g.rotation.y=Math.atan2(h.x,h.z),g.receiveShadow=!0,t.add(g);const p=new ie(new ir(.02,.025,.8+m,16),i),v=l.clone().add(h.clone().multiplyScalar(d*.75));return p.position.set(v.x,(m-f-.8)/2,v.z),t.add(p),t}class dy{constructor(t,e){this.host=t,this.human=e,this.renderer=new j_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qh,this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=tu,this.renderer.toneMappingExposure=1,this.renderer.domElement.style.touchAction="none",this.renderer.domElement.setAttribute("aria-label","Трёхмерная сцена: человек и датчик"),t.appendChild(this.renderer.domElement);const n=new uc(this.renderer);this.scene.environment=n.fromScene(new Mv,.04).texture,this.scene.background=new zt(1777961);const i=new Xp(16777215,12174284,.55);this.scene.add(i);const r=new lc(16774378,1.7);r.position.set(.8,2.6,-1.2),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-1.3,r.shadow.camera.right=1.3,r.shadow.camera.top=1.3,r.shadow.camera.bottom=-1.3,r.shadow.bias=-4e-4,r.shadow.normalBias=.01,this.scene.add(r);const a=new lc(16773606,.5);a.position.set(-1.5,1.4,1.5),this.scene.add(a);const o=new ie(new hr(12,12),new un({color:2765372,roughness:.95}));o.rotation.x=-Math.PI/2,o.position.y=-.88,o.receiveShadow=!0,this.scene.add(o),this.scene.add(uy(e.meta)),this.scene.add(e.root),this.camera=new We(38,1,.01,30);const l=this.human.focus;this.presets={body:{pos:new P(-.12,2.05,-2.55),target:new P(-.05,.05,-.22)},forearm:{pos:l.forearm.clone().add(new P(.3,.4,-.04)),target:l.forearm.clone()},region:{pos:l.forearm.clone().add(new P(.3,.4,-.04)),target:l.forearm.clone()}},this.controls=new lv(this.camera,this.renderer.domElement),this.camera.position.copy(this.presets.body.pos),this.controls.target.copy(this.presets.body.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.minDistance=.18,this.controls.maxDistance=4.5,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.resize()}renderer;scene=new vu;camera;controls;tween=null;presets;resizeObs;resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.fov=t/e<.9?50:38,this.camera.updateProjectionMatrix(),this.fitBody()}bodyFitted=!1;fitBody(){const t=new P(-.04,.05,-.26),e=new P(-.42,1,0).normalize(),n=.98,i=.64,r=Math.tan(Rc.degToRad(this.camera.fov/2)),a=Math.max(n/r,i/(r*this.camera.aspect))*1.04,o=t.clone().addScaledVector(e,Math.min(4.3,Math.max(1.6,a))),l=!this.bodyFitted||this.tween===null&&this.camera.position.distanceTo(this.presets.body.pos)<.001;this.presets.body={pos:o,target:t},l&&(this.bodyFitted=!0,this.camera.position.copy(o),this.controls?.target.copy(t),this.controls?.update())}focusOn(t,e,n=.6,i=650){const r=e.clone().normalize(),a=t.clone().addScaledVector(r,n).add(new P(-.12,r.y>-.3?.1:-.1,0));this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[a,t.clone()],t0:performance.now(),dur:i}}setRegionFocus(t,e,n=.75){const i=t.clone().addScaledVector(e.clone().normalize(),n).add(new P(-.12,.08,0));this.presets.region={pos:i,target:t.clone()}}goTo(t,e=650){const n=this.presets[t],i=t==="body"?1:Math.max(1,.95/this.camera.aspect),r=n.target.clone().addScaledVector(n.pos.clone().sub(n.target),i);this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[r,n.target.clone()],t0:performance.now(),dur:e}}setCamera(t,e){this.tween=null,this.camera.position.set(...t),this.controls.target.set(...e),this.controls.update()}cameraState(){return{position:this.camera.position.toArray(),target:this.controls.target.toArray()}}render(t){if(this.tween){const e=Math.min(1,(t-this.tween.t0)/this.tween.dur),n=e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],n),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],n),e>=1&&(this.tween=null)}this.controls.update(),this.renderer.render(this.scene,this.camera)}}class fy{constructor(t,e){this.baseUrl=t,this.manifest=e,this.frameCount=e.frames.count}frameCount;cache=new Map;inflight=new Map;failed=new Set;url(t){const e=this.manifest.frames.pattern.replace("{id:04d}",String(t).padStart(4,"0"));return new URL(e,this.baseUrl).toString()}get(t){return this.cache.get(t)}load(t){const e=this.cache.get(t);if(e)return Promise.resolve(e);let n=this.inflight.get(t);return n||(n=this.fetchDecode(t).then(i=>(this.cache.set(t,i),this.inflight.delete(t),i)).catch(i=>{throw this.inflight.delete(t),this.failed.add(t),i}),this.inflight.set(t,n)),n}async fetchDecode(t){const e=await fetch(this.url(t));if(!e.ok)throw new Error(`Кадр ${t}: HTTP ${e.status}`);const n=await e.blob();if("createImageBitmap"in window)return createImageBitmap(n,{imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const i=new Image;return i.src=URL.createObjectURL(n),await i.decode(),i}async preloadAll(t,e,n=6){const i=Array.from({length:this.frameCount},(l,c)=>c).sort((l,c)=>Math.abs(l-t)-Math.abs(c-t));let r=0,a=0;const o=async()=>{for(;r<i.length;){const l=i[r++];try{await this.load(l)}catch{}e(++a,this.frameCount)}};await Promise.all(Array.from({length:n},o))}}class py{constructor(t,e,n,i){this.canvas=t,this.source=e,this.frameW=n,this.frameH=i,t.width=n,t.height=i;const r=t.getContext("2d",{alpha:!1});if(!r)throw new Error("Canvas 2D недоступен");this.ctx=r,this.clear("idle")}ctx;seq=0;status="idle";shownFrameId=null;onStatus=()=>{};onDrawn=()=>{};show(t){const e=++this.seq,n=this.source.get(t);return n?(this.draw(n,t),!0):(this.setStatus("loading",null),this.source.load(t).then(i=>{e===this.seq&&this.draw(i,t)}).catch(()=>{e===this.seq&&this.clear("error")}),!1)}clear(t){this.seq++,this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.frameW,this.frameH),this.shownFrameId=null,this.setStatus(t,null)}draw(t,e){this.ctx.drawImage(t,0,0,this.frameW,this.frameH),this.shownFrameId=e,this.setStatus("ready",e),this.onDrawn(e,performance.now())}setStatus(t,e){this.status=t,this.onStatus(t,e)}}function ps(s){const t=Number(s.min||0),e=Number(s.max||100),n=Number(s.value),i=e>t?(n-t)/(e-t)*100:0;s.style.setProperty("--fill",`${Math.max(0,Math.min(100,i)).toFixed(2)}%`)}function my(){document.addEventListener("input",t=>{const e=t.target;e instanceof HTMLInputElement&&e.type==="range"&&ps(e)},!0);const s=()=>document.querySelectorAll('input[type="range"]').forEach(ps);new MutationObserver(s).observe(document.body,{childList:!0,subtree:!0}),s()}const zs=90,Vs=30;function xy(s,t,e,n,i){if(!(n>0)||!(i>0))throw new Error("Объём: шаги пикселя и кадров должны быть положительными");const r=s.length,a=t*e,o=new Uint8Array(a*r);return s.forEach((l,c)=>{if(l.length!==a)throw new Error(`Объём: кадр ${c} имеет ${l.length} пикселей, ожидалось ${a}`);o.set(l,c*a)}),{data:o,nx:t,ny:e,nz:r,pixelMm:n,sliceMm:i}}function gy(s,t=new Uint8Array(s.length/4)){for(let e=0,n=0;n<t.length;e+=4,n++)t[n]=s[e];return t}function _y(s){const t=(e,n)=>Math.max(-n,Math.min(n,Number.isFinite(e)?e:0));return{z0:s.z0,rotationDeg:t(s.rotationDeg,zs),tiltDeg:t(s.tiltDeg,Vs)}}function vy(s){return s.rotationDeg===0&&s.tiltDeg===0&&Number.isInteger(s.z0)}function yy(s,t,e,n){const{nx:i,ny:r,nz:a,data:o}=s,l=i*r;if(e.length!==l||n.length!==l)throw new Error("Срез: размер буфера не совпадает с кадром");const c=_y(t);if(vy(c)&&c.z0>=0&&c.z0<a)return e.set(o.subarray(c.z0*l,(c.z0+1)*l)),n.fill(1),0;const h=c.rotationDeg*Math.PI/180,u=c.tiltDeg*Math.PI/180,d=Math.cos(h),f=Math.sin(h),m=Math.cos(u),g=Math.sin(u),x=1,p=s.pixelMm/s.sliceMm,v=(i-1)/2,_=d,y=f*p,T=-g*f,E=m*x,R=g*d*p,D=i-1,b=r-1,M=a-1;let C=0,N=0;for(let F=0;F<r;F++){const H=v-v*_+F*T,k=F*E,W=c.z0-v*y+F*R,K=k>=0&&k<=b,G=Math.floor(k),tt=k-G,it=tt>0?G+1:G;for(let st=0;st<i;st++,N++){const Ut=H+st*_,Yt=W+st*y;if(!K||Ut<0||Ut>D||Yt<0||Yt>M){e[N]=0,n[N]=0,C++;continue}const Vt=Ut|0,Jt=Yt|0,j=Ut-Vt,I=Yt-Jt,z=j>0?Vt+1:Vt,et=I>0?Jt+1:Jt,ct=Jt*l,ut=et*l,Ft=G*i,xt=it*i,qt=o[ct+Ft+Vt]+(o[ct+Ft+z]-o[ct+Ft+Vt])*j,L=o[ct+xt+Vt]+(o[ct+xt+z]-o[ct+xt+Vt])*j,Lt=o[ut+Ft+Vt]+(o[ut+Ft+z]-o[ut+Ft+Vt])*j,Ot=o[ut+xt+Vt]+(o[ut+xt+z]-o[ut+xt+Vt])*j,Qt=qt+(L-qt)*tt,vt=Lt+(Ot-Lt)*tt;e[N]=Qt+(vt-Qt)*I+.5|0,n[N]=1}}return C/l}function by(s,t,e,n){for(let i=0,r=0;i<s.length;i++,r+=4){if(t[i]){const a=s[i];n[r]=a,n[r+1]=a,n[r+2]=a}else{const a=i%e,o=i/e|0,l=(a+o)%14<2;n[r]=l?46:10,n[r+1]=l?52:12,n[r+2]=l?64:18}n[r+3]=255}}const Gr="Срез объёма под углом — пересчёт записи, а не новое УЗИ";function My(s){return s.imageType==="volume-reslice"&&!!s.reslice&&(s.supportedMotions.rotation||s.supportedMotions.tilt)}class Sy{constructor(t){this.o=t;const{width:e,height:n}=t.manifest.frames;this.gray=new Uint8Array(e*n),this.mask=new Uint8Array(e*n),this.img=new ImageData(e,n);const i=t.canvas.getContext("2d");if(!i)throw new Error("Canvas 2D недоступен");this.ctx=i,this.root=document.createElement("div"),this.root.className="reslice",this.root.dataset.testid="reslice";const r=t.manifest.supportedMotions;this.root.innerHTML=`
      <div class="reslice-head"><span title="${Gr}">Поворот и наклон датчика</span>
        <button type="button" id="resliceReset" title="Вернуть исходный кадр записи (0°)">Сбросить 0°</button></div>
      <label class="field" ${r.rotation?"":"hidden"} title="Поворот датчика вокруг его оси. ${Gr}.">
        <span class="field-head"><span>Поворот</span><output id="resliceRotOut">0°</output></span>
        <input id="resliceRot" type="range" min="${-zs}" max="${zs}" step="1" value="0" disabled /></label>
      <label class="field" ${r.tilt?"":"hidden"} title="Наклон датчика поперёк плоскости изображения. ${Gr}.">
        <span class="field-head"><span>Наклон</span><output id="resliceTiltOut">0°</output></span>
        <input id="resliceTilt" type="range" min="${-Vs}" max="${Vs}" step="1" value="0" disabled /></label>
      <small class="reslice-state" id="resliceState">Сборка объёма из кадров…</small>`,t.host.append(this.root);const a=o=>this.root.querySelector("#"+o);this.rotIn=a("resliceRot"),this.tiltIn=a("resliceTilt"),this.rotOut=a("resliceRotOut"),this.tiltOut=a("resliceTiltOut"),this.stateEl=a("resliceState"),this.rotIn.addEventListener("input",()=>this.setAngles(Number(this.rotIn.value),this.tilt)),this.tiltIn.addEventListener("input",()=>this.setAngles(this.rotation,Number(this.tiltIn.value))),a("resliceReset").addEventListener("click",()=>this.setAngles(0,0)),this.badge=document.createElement("div"),this.badge.className="reslice-badge",this.badge.hidden=!0,t.screen.append(this.badge)}rotation=0;tilt=0;volume=null;buildMs=0;noDataFraction=0;renderMs=[];error=null;gray;mask;img;ctx;root;badge;rotIn;tiltIn;rotOut;tiltOut;stateEl;baseQ=new dn;wasOblique=!1;isOblique(){return this.rotation!==0||this.tilt!==0}async build(){const t=this.o.manifest,{width:e,height:n,count:i}=t.frames;if(this.o.source.failed.size){this.error="поворот недоступен: не все кадры загружены",this.stateEl.textContent=`Поворот и наклон недоступны: не загружено кадров — ${this.o.source.failed.size}`;return}const r=performance.now(),a=document.createElement("canvas");a.width=e,a.height=n;const o=a.getContext("2d",{willReadFrequently:!0,alpha:!1});if(!o)return;const l=[];for(let c=0;c<i;c++){const h=this.o.source.get(c)??await this.o.source.load(c);o.drawImage(h,0,0,e,n),l.push(gy(o.getImageData(0,0,e,n).data)),c%24===23&&await new Promise(u=>setTimeout(u,0))}this.volume=xy(l,e,n,t.imageGeometry.pixelSpacingMm,t.reslice.sliceStepMm),this.buildMs=performance.now()-r,this.rotIn.disabled=!1,this.tiltIn.disabled=!1,this.stateEl.textContent="При 0° — исходный кадр записи. Под углом — пересчёт объёма, разметка скрыта; штриховка — нет данных.",this.stateEl.title=`Объём ${e}×${n}×${i}, шаг кадров ${t.reslice.sliceStepMm} мм. Эталонные контуры есть только на исходных кадрах, поэтому под углом они скрыты.`,this.isOblique()&&this.redraw()}setAngles(t,e){const n=Math.round(Math.max(-zs,Math.min(zs,t||0))),i=Math.round(Math.max(-Vs,Math.min(Vs,e||0)));!this.volume&&(n!==0||i!==0)||(this.rotation=n,this.tilt=i,this.rotIn.value=String(n),this.tiltIn.value=String(i),this.rotOut.textContent=`${n>0?"+":""}${n}°`,this.tiltOut.textContent=`${i>0?"+":""}${i}°`,ps(this.rotIn),ps(this.tiltIn),this.applyProbe(),this.redraw())}onPose(){this.baseQ.copy(this.o.probeGroup.quaternion),this.applyProbe()}afterDraw(t){this.isOblique()&&this.volume&&this.renderOblique(t)}redraw(){const t=this.isOblique(),e=this.o.frames.shownFrameId;if(t!==this.wasOblique&&(this.wasOblique=t,this.o.screen.classList.toggle("reslice-oblique",t),this.o.onObliqueChange(t)),e===null){this.badge.hidden=!0;return}t?this.renderOblique(e):(this.badge.hidden=!0,this.o.frames.show(e))}renderOblique(t){const e=this.volume,n=performance.now();this.noDataFraction=yy(e,{z0:t,rotationDeg:this.rotation,tiltDeg:this.tilt},this.gray,this.mask),by(this.gray,this.mask,e.nx,this.img.data),this.ctx.putImageData(this.img,0,0),this.renderMs.push(performance.now()-n),this.renderMs.length>200&&this.renderMs.shift(),this.badge.hidden=!1,this.badge.textContent=`${Gr}. Поворот ${this.rotation}°, наклон ${this.tilt}°`+(this.noDataFraction>.005?` · штриховка — нет данных (${Math.round(this.noDataFraction*100)}% кадра)`:"")}applyProbe(){const t=new dn().setFromEuler(new fn(-this.tilt*Math.PI/180,-this.rotation*Math.PI/180,0,"YXZ"));this.o.probeGroup.quaternion.copy(this.baseQ).multiply(t)}debug(){const t=[...this.renderMs].sort((e,n)=>e-n);return{ready:!!this.volume,error:this.error,rotation:this.rotation,tilt:this.tilt,oblique:this.isOblique(),noDataFraction:this.noDataFraction,buildMs:this.buildMs,renderP95Ms:t.length?t[Math.min(t.length-1,Math.floor(.95*t.length))]:null,badge:this.badge.hidden?null:this.badge.textContent}}}const Ph="http://www.w3.org/2000/svg",Wr=(s,t)=>s.length?"M"+s.map(e=>`${e[0].toFixed(1)},${e[1].toFixed(1)}`).join("L")+(t?"Z":""):"";class Ey{constructor(t,e,n){this.w=e,this.h=n,this.svg=document.createElementNS(Ph,"svg"),this.svg.setAttribute("viewBox",`0 0 ${e} ${n}`),this.svg.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg.classList.add("mark-overlay"),this.svg.setAttribute("aria-label","Слой разметки"),t.appendChild(this.svg),this.svg.addEventListener("pointerdown",r=>{const a=this.toImage(r);if(!this.drawing){const o=r.target.closest("[data-vertex]"),l=r.target.closest("[data-mark]");if(o||l){const c=(o??l).getAttribute(o?"data-vertex-of":"data-mark");this.dragging={id:c,vertex:o?Number(o.getAttribute("data-vertex")):null,pointerId:r.pointerId},this.svg.setPointerCapture(r.pointerId),o||this.onMarkDown(c),r.preventDefault();return}}a&&this.onImageClick(a.x,a.y)}),this.svg.addEventListener("pointermove",r=>{if(this.dragging&&this.dragging.pointerId===r.pointerId){const o=this.toImage(r,!0);this.dragging.vertex!==null?this.onVertexDrag(this.dragging.id,this.dragging.vertex,o.x,o.y):this.onMarkDrag(this.dragging.id,o.x,o.y);return}const a=this.toImage(r,!0);a&&this.onImageMove(a.x,a.y)});const i=r=>{if(!this.dragging||this.dragging.pointerId!==r.pointerId)return;const a=this.dragging;this.dragging=null,a.vertex!==null?this.onVertexDragEnd(a.id,a.vertex):this.onMarkDragEnd(a.id)};this.svg.addEventListener("pointerup",i),this.svg.addEventListener("pointercancel",i)}svg;opacity=.9;showLabels=!0;onImageClick=()=>{};onImageMove=()=>{};onMarkDown=()=>{};onMarkDrag=()=>{};onMarkDragEnd=()=>{};onVertexDrag=()=>{};onVertexDragEnd=()=>{};drawing=!1;dragging=null;set interactive(t){this.svg.classList.toggle("interactive",t)}toImage(t,e=!1){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t.clientX,t.clientY).matrixTransform(n.inverse());return e?{x:Math.min(this.w,Math.max(0,i.x)),y:Math.min(this.h,Math.max(0,i.y))}:i.x<0||i.y<0||i.x>this.w||i.y>this.h?null:{x:i.x,y:i.y}}toScreen(t,e){const n=this.svg.getScreenCTM();if(!n)return null;const i=new DOMPoint(t,e).matrixTransform(n);return{x:i.x,y:i.y}}imagePxPerScreenPx(){const t=this.svg.getScreenCTM();return t?1/Math.hypot(t.a,t.b):1}clear(){this.svg.replaceChildren()}el(t,e,n=this.svg){const i=document.createElementNS(Ph,t);for(const[r,a]of Object.entries(e))i.setAttribute(r,String(a));return n.appendChild(i),i}label(t,e,n,i,r,a=!1){const o=this.svg.getBoundingClientRect(),l=o.width>0&&o.height>0?Math.min(o.width/this.w,o.height/this.h):1,c=Math.max(8,14/l),h=n.length*c*.6;let u,d;a?(u=Math.min(this.w-h/2-4,Math.max(h/2+4,t)),d="middle"):t+12+h>this.w?(u=t-12,d="end"):(u=t+12,d="start");let f=Math.max(c,a?e+c*.35:e-c*.5);const m=d==="middle"?u-h/2:d==="end"?u-h:u;for(let x=0;x<8&&this.placed.some(p=>m-4<p[0]+p[2]&&p[0]<m+h+4&&Math.abs(p[1]-f)<c*1.4);x++)f+=c*1.45;this.placed.push([m,f,h]),this.el("rect",{x:(m-c*.3).toFixed(1),y:(f-c*.98).toFixed(1),width:(h+c*.6).toFixed(1),height:(c*1.32).toFixed(1),rx:(c*.25).toFixed(1),fill:"rgba(6,9,12,.72)","pointer-events":"none"},r);const g=this.el("text",{x:u,y:f,class:"mark-label",fill:i,"text-anchor":d,"font-size":c.toFixed(1),"stroke-width":(c*.22).toFixed(2)},r);g.textContent=n}cross(t,e,n,i){this.el("path",{d:`M${t-7},${e-7}L${t+7},${e+7}M${t+7},${e-7}L${t-7},${e+7}`,class:n},i)}placed=[];render(t){this.clear(),this.placed=[],t.items?.length&&this.drawItems(t.items,!!t.showTolerance),t.feedback&&this.drawFeedback(t.feedback),t.draft&&this.drawDraft(t.draft)}drawItems(t,e){const n=this.el("g",{opacity:this.opacity}),i=[...t].sort((r,a)=>(r.mark.kind==="contour"?0:1)-(a.mark.kind==="contour"?0:1));for(const{mark:r,structure:a,selected:o}of i){const l=r.status==="verified"?"":" draft",c=this.el("g",{"data-mark":r.id,class:"mark"+(o?" selected":"")+(r.kind==="contour"?" contour":"")},n);if(r.kind==="contour"&&r.points){this.el("path",{d:Wr(r.points,!0),class:"mark-poly"+l,stroke:a.color,fill:a.color},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c,!0),o&&r.points.forEach(([h,u],d)=>{this.el("circle",{cx:h,cy:u,r:7,class:"vertex","data-vertex":d,"data-vertex-of":r.id},n)});continue}e&&this.el("circle",{cx:r.x,cy:r.y,r:r.tolerancePx,class:"mark-tol",stroke:a.color},c),this.el("circle",{cx:r.x,cy:r.y,r:16,class:"mark-hit"},c),this.el("circle",{cx:r.x,cy:r.y,r:o?9:7,fill:a.color,class:"mark-dot"+l},c),this.showLabels&&this.label(r.x,r.y,a.name+(r.status==="verified"?"":" (черн.)"),a.color,c)}}drawFeedback(t){const e=this.el("g",{}),n=t.structure.color,i=t.reference;i.kind==="contour"&&i.points?this.el("path",{d:Wr(i.points,!0),class:"mark-poly ref",stroke:n,fill:n},e):(this.el("circle",{cx:i.x,cy:i.y,r:i.tolerancePx,class:"mark-tol",stroke:n},e),this.el("circle",{cx:i.x,cy:i.y,r:6,fill:n,class:"mark-dot"},e)),this.label(i.x,i.y,"эталон: "+t.structure.name,n,e,i.kind==="contour"),t.polygon&&this.el("path",{d:Wr(t.polygon,!0),class:"answer-poly "+(t.hit?"hit":"miss")},e),t.click&&!t.polygon&&(i.kind!=="contour"&&this.el("line",{x1:i.x,y1:i.y,x2:t.click.x,y2:t.click.y,class:"fb-line"},e),this.cross(t.click.x,t.click.y,t.hit?"fb-click hit":"fb-click miss",e))}drawDraft(t){const e=this.el("g",{class:"draft-g"}),n=t.cursor&&t.points.length?[...t.points,[t.cursor.x,t.cursor.y]]:t.points;n.length>=2&&this.el("path",{d:Wr(n,!1),class:"draft-line",stroke:t.color},e),t.points.forEach(([i,r],a)=>{this.el("circle",{cx:i,cy:r,r:a===0&&t.closable?10:5,class:"draft-vertex"+(a===0?" first":""),stroke:t.color},e)})}}function ua(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[i],[l,c]=e[r];o>t!=c>t&&s<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function Li(s){let t=0,e=0,n=0;for(let i=0,r=s.length-1;i<s.length;r=i++){const a=s[r][0]*s[i][1]-s[i][0]*s[r][1];t+=a,e+=(s[r][0]+s[i][0])*a,n+=(s[r][1]+s[i][1])*a}if(Math.abs(t)<1e-9){const i=s.length||1;return[s.reduce((r,a)=>r+a[0],0)/i,s.reduce((r,a)=>r+a[1],0)/i]}return[e/(3*t),n/(3*t)]}function Ty(s,t,e){let n=1/0;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[r],[l,c]=e[i],h=l-a,u=c-o,d=h*h+u*u||1,f=Math.max(0,Math.min(1,((s-a)*h+(t-o)*u)/d));n=Math.min(n,Math.hypot(s-(a+f*h),t-(o+f*u)))}return n}function wy(s,t,e=2){if(s.length<3||t.length<3)return 0;const n=[...s,...t].map(d=>d[0]),i=[...s,...t].map(d=>d[1]),r=Math.floor(Math.min(...n)),a=Math.ceil(Math.max(...n)),o=Math.floor(Math.min(...i)),l=Math.ceil(Math.max(...i));let c=0,h=0,u=0;for(let d=o+e/2;d<l;d+=e)for(let f=r+e/2;f<a;f+=e){const m=ua(f,d,s),g=ua(f,d,t);m&&c++,g&&h++,m&&g&&u++}return c+h?2*u/(c+h):0}const Ge=s=>s.kind??"point",mc=.6,Ay=[{id:"radial-artery",name:"Лучевая артерия",class:"artery",color:"#e5484d"},{id:"ulnar-artery",name:"Локтевая артерия",class:"artery",color:"#f76b15"},{id:"median-nerve",name:"Срединный нерв",class:"nerve",color:"#ffd60a"},{id:"ulnar-nerve",name:"Локтевой нерв",class:"nerve",color:"#f5d90a"},{id:"radial-nerve-superficial",name:"Поверхностная ветвь лучевого нерва",class:"nerve",color:"#ffe066"},{id:"radial-veins",name:"Лучевые вены",class:"vein",color:"#3e63dd"},{id:"superficial-vein",name:"Подкожная вена",class:"vein",color:"#5b8def"},{id:"radius",name:"Лучевая кость",class:"bone",color:"#e8e8e8"},{id:"ulna",name:"Локтевая кость",class:"bone",color:"#cfcfcf"},{id:"fds",name:"Поверхностный сгибатель пальцев",class:"muscle",color:"#d6409f"},{id:"fdp",name:"Глубокий сгибатель пальцев",class:"muscle",color:"#ab4aba"},{id:"fcr",name:"Лучевой сгибатель запястья",class:"muscle",color:"#8e4ec6"},{id:"fcu",name:"Локтевой сгибатель запястья",class:"muscle",color:"#6e56cf"},{id:"flexor-tendons",name:"Сухожилия сгибателей",class:"tendon",color:"#46a758"},{id:"interosseous-membrane",name:"Межкостная мембрана",class:"fascia",color:"#12a594"},{id:"fascia",name:"Фасция",class:"fascia",color:"#0ea5b7"}],Lh={nerve:"нерв",artery:"артерия",vein:"вена",muscle:"мышца",tendon:"сухожилие",bone:"кость",fascia:"фасция",other:"другое"},Ry=24;function Ih(s,t,e=Ay){return{schema:"sonolab.annotations/1",caseId:s,dataVersion:t,version:0,updatedAt:new Date(0).toISOString(),structures:e,frames:{}}}function co(s,t,e,n,i,r){const a=[];s.schema!=="sonolab.annotations/1"&&a.push("неизвестный формат разметки"),s.caseId!==t&&a.push(`разметка для другого случая (${s.caseId})`),s.dataVersion!==e&&a.push(`разметка для другой версии данных (${s.dataVersion} ≠ ${e})`);const o=new Set(s.structures.map(l=>l.id));for(const[l,c]of Object.entries(s.frames)){const h=Number(l);(!Number.isInteger(h)||h<0||h>=n)&&a.push(`кадр ${l} вне диапазона`);for(const u of c)o.has(u.structureId)||a.push(`кадр ${l}: неизвестная структура ${u.structureId}`),(u.x<0||u.y<0||u.x>i||u.y>r)&&a.push(`кадр ${l}: точка вне кадра`),Ge(u)==="contour"&&(!u.points||u.points.length<3?a.push(`кадр ${l}: контур меньше трёх вершин`):u.points.some(([d,f])=>d<0||f<0||d>i||f>r)&&a.push(`кадр ${l}: вершина контура вне кадра`))}return a}let Cy=0;const Dh=()=>`m${Date.now().toString(36)}${(Cy++).toString(36)}`;class Xr{constructor(t){this.set=t}touch(){this.set.version+=1,this.set.updatedAt=new Date().toISOString()}marks(t){return this.set.frames[String(t)]??[]}framesWithMarks(){return Object.keys(this.set.frames).map(Number).filter(t=>this.set.frames[String(t)].length>0).sort((t,e)=>t-e)}add(t,e,n,i,r,a=Ry){const o=new Date().toISOString(),l=this.set.frames[String(t)]??[],c=l.find(u=>u.structureId===e&&Ge(u)==="point");if(c)return Object.assign(c,{x:n,y:i,author:r,updatedAt:o,status:"draft",origin:"manual"}),this.touch(),c;const h={id:Dh(),structureId:e,x:n,y:i,tolerancePx:a,author:r,status:"draft",createdAt:o,updatedAt:o,origin:"manual"};return this.set.frames[String(t)]=[...l,h],this.touch(),h}addContour(t,e,n,i){if(n.length<3)throw new Error("Контур должен содержать минимум три вершины");const r=new Date().toISOString(),a=n.map(([d,f])=>[d,f]),[o,l]=Li(a),c=this.set.frames[String(t)]??[],h=c.find(d=>d.structureId===e&&Ge(d)==="contour");if(h)return Object.assign(h,{points:a,x:o,y:l,author:i,updatedAt:r,status:"draft",origin:"manual"}),this.touch(),h;const u={id:Dh(),structureId:e,kind:"contour",points:a,x:o,y:l,tolerancePx:0,author:i,status:"draft",createdAt:r,updatedAt:r,origin:"manual"};return this.set.frames[String(t)]=[...c,u],this.touch(),u}moveVertex(t,e,n,i,r){const a=this.marks(t).find(o=>o.id===e);!a||!a.points||!a.points[n]||(a.points[n]=[i,r],[a.x,a.y]=Li(a.points),a.updatedAt=new Date().toISOString(),a.status="draft",this.touch())}move(t,e,n,i){const r=this.marks(t).find(a=>a.id===e);r&&(r.x=n,r.y=i,r.updatedAt=new Date().toISOString(),r.status="draft",this.touch())}remove(t,e){const n=this.marks(t).filter(i=>i.id!==e);n.length?this.set.frames[String(t)]=n:delete this.set.frames[String(t)],this.touch()}setStatus(t,e,n){for(const i of this.marks(t))i.status=e,i.updatedAt=new Date().toISOString(),e==="verified"&&(i.note=`проверено: ${n}`);this.touch()}setTolerance(t,e,n){const i=this.marks(t).find(r=>r.id===e);i&&(i.tolerancePx=n,this.touch())}copyFrom(t,e,n){const i=this.marks(t);let r=0;for(const a of i){const o=Ge(a);if(this.marks(e).some(c=>c.structureId===a.structureId&&Ge(c)===o))continue;const l=o==="contour"?this.addContour(e,a.structureId,a.points,n):this.add(e,a.structureId,a.x,a.y,n,a.tolerancePx);l.origin="copied",r++}return r}}function Nh(s,t){const e=t.mode??"point",n=[];for(const[a,o]of Object.entries(s.frames))for(const l of o){if(t.onlyVerified&&l.status!=="verified")continue;const c=Ge(l);if(e==="contour"&&c!=="contour")continue;const h=e==="point"?"point":c==="contour"?"contour":"point";e==="point"&&c==="contour"&&o.some(u=>u.structureId===l.structureId&&Ge(u)==="point")||n.push({frameId:Number(a),structureId:l.structureId,reference:l,answer:h})}n.sort((a,o)=>a.frameId-o.frameId||a.structureId.localeCompare(o.structureId));let i=t.seed>>>0||1;const r=()=>(i=i*1664525+1013904223>>>0)/4294967296;for(let a=n.length-1;a>0;a--){const o=Math.floor(r()*(a+1));[n[a],n[o]]=[n[o],n[a]]}return t.limit?n.slice(0,t.limit):n}function Py(s,t,e){const n=s.reference;if(Ge(n)==="contour"&&n.points){const r=ua(t,e,n.points);return{errorPx:r?0:Ty(t,e,n.points),hit:r}}const i=Math.hypot(t-n.x,e-n.y);return{errorPx:i,hit:i<=n.tolerancePx}}function Ly(s,t){const e=s.reference.points??[],n=wy(e,t),[i,r]=Li(e),[a,o]=Li(t);return{dice:n,errorPx:Math.hypot(i-a,r-o),hit:n>=mc}}function Uh(s){const t=s.filter(o=>o.errorPx!==null),e=o=>(o.answer??"point")==="point",n=t.filter(e).map(o=>o.errorPx).sort((o,l)=>o-l),i=o=>o.filter(l=>l.answer==="contour"&&l.dice!==null).map(l=>l.dice),r=o=>o.length?o.reduce((l,c)=>l+c,0)/o.length:null,a=new Map;for(const o of s)a.set(o.structureId,[...a.get(o.structureId)??[],o]);return{total:s.length,answered:t.length,hits:s.filter(o=>o.hit).length,skipped:s.length-t.length,hitRate:s.length?s.filter(o=>o.hit).length/s.length:0,meanErrorPx:r(n),medianErrorPx:n.length?n[Math.floor(n.length/2)]:null,meanDice:r(i(s)),byStructure:[...a.entries()].map(([o,l])=>({structureId:o,name:l[0].structureName,total:l.length,hits:l.filter(c=>c.hit).length,meanErrorPx:r(l.filter(c=>c.errorPx!==null&&e(c)).map(c=>c.errorPx)),meanDice:r(i(l))}))}}function Iy(s){const t="задание;кадр;структура;ответ;x;y;ошибка_пикс;dice;засчитано;статус_эталона;время_мс;когда",e=s.attempts.map(n=>[n.taskIndex+1,n.frameId,n.structureName,(n.answer??"point")==="contour"?"обводка":"щелчок",n.clickX?.toFixed(1)??"",n.clickY?.toFixed(1)??"",n.errorPx?.toFixed(1)??"пропуск",n.dice?.toFixed(3)??"",n.hit?"да":"нет",n.referenceStatus,n.timeMs,n.at].join(";"));return[t,...e].join(`
`)}function J(s,t={},...e){const n=document.createElement(s);for(const[i,r]of Object.entries(t))i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="class"?n.className=String(r):i==="dataset"?Object.assign(n.dataset,r):r!=null&&r!==!1&&(n[i]=r);for(const i of e)i!=null&&i!==!1&&n.append(i);return n}const Rn={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}},del(s){try{localStorage.removeItem(s)}catch{}}};function lo(s,t,e){const n=J("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}const li=s=>s===null?"—":`${s.toFixed(1)} пикс.`,$r=s=>s===null?"—":s.toFixed(2),Fh=12;class Dy{constructor(t){this.d=t;const e=t.manifest;this.overlay=new Ey(t.overlayHost,e.frames.width,e.frames.height),this.local=new Xr(Ih(e.caseId,e.dataVersion));const n=Rn.get(this.localKey);if(n)try{const i=JSON.parse(n);co(i,e.caseId,e.dataVersion,e.frames.count,e.frames.width,e.frames.height).length===0&&(this.local=new Xr(i),this.hasLocal=!0)}catch{}this.author=Rn.get("sonolab.author")??"",this.student=Rn.get("sonolab.student")??"",this.selectedStructure=this.local.set.structures[0].id,this.overlay.onImageClick=(i,r)=>this.imageClick(i,r),this.overlay.onImageMove=(i,r)=>{this.draft.length&&(this.cursor={x:i,y:r},this.drawOverlay())},this.overlay.onVertexDrag=(i,r,a,o)=>{if(this.mode!=="expert")return;const l=this.findMark(i);l?.points?.[r]&&(l.points[r]=[a,o],[l.x,l.y]=Li(l.points),this.drawOverlay())},this.overlay.onVertexDragEnd=(i,r)=>{if(this.mode!=="expert"||this.frameId===null)return;const a=this.findMark(i);a?.points?.[r]&&this.local.moveVertex(this.frameId,i,r,a.points[r][0],a.points[r][1]),this.saveLocal(),this.render()},document.addEventListener("keydown",i=>{if(!this.drawingActive())return;const r=i.target;r&&(r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA")||(i.key==="Enter"?(i.preventDefault(),this.closeDraft()):i.key==="Escape"?(i.preventDefault(),this.cancelDraft()):i.key==="Backspace"&&(i.preventDefault(),this.undoVertex()))}),this.overlay.onMarkDown=i=>{if(this.mode!=="expert")return;this.selectedMark=i;const r=this.findMark(i);r&&(this.selectedStructure=r.structureId),this.render()},this.overlay.onMarkDrag=(i,r,a)=>{if(this.mode!=="expert"||this.frameId===null)return;const o=this.findMark(i);o&&Ge(o)==="point"&&(o.x=r,o.y=a,this.drawOverlay())},this.overlay.onMarkDragEnd=i=>{if(this.mode!=="expert"||this.frameId===null)return;const r=this.findMark(i);r&&Ge(r)==="point"&&(this.local.move(this.frameId,i,r.x,r.y),this.saveLocal()),this.render()},this.renderTabs(),this.loadPublished().then(()=>this.render()),this.render()}mode="view";overlay;published=null;local;hasLocal=!1;frameId=null;selectedStructure;selectedMark=null;author="";showMarks=!0;message="";tool="point";draft=[];cursor=null;session=null;tasks=[];taskIndex=0;taskStarted=0;feedback=null;taskMode="both";trainSource="local";onlyVerified=!1;student="";get localKey(){return`sonolab.annotations.${this.d.manifest.caseId}.${this.d.manifest.dataVersion}`}async loadPublished(){if(this.d.annotationsUrl)try{const t=await fetch(this.d.annotationsUrl);if(!t.ok)return;const e=await t.json(),n=this.d.manifest,i=co(e,n.caseId,n.dataVersion,n.frames.count,n.frames.width,n.frames.height);if(i.length){this.message="Опубликованная разметка не принята: "+i[0];return}this.published=e,this.hasLocal||(this.trainSource="published")}catch{}}setFrame(t){t!==this.frameId&&(this.frameId=t,this.mode==="expert"&&(this.selectedMark=null),this.draft=[],this.cursor=null,this.render())}viewSet(){return this.mode==="expert"?this.local.set:this.mode==="train"?this.trainSource==="local"?this.local.set:this.published:this.hasLocal?this.local.set:this.published}structure(t){return(this.viewSet()??this.local.set).structures.find(n=>n.id===t)??{id:t,name:t,class:"other",color:"#ffffff"}}findMark(t){return this.frameId===null?void 0:this.local.marks(this.frameId).find(e=>e.id===t)}saveLocal(){this.hasLocal=this.local.framesWithMarks().length>0,this.hasLocal?Rn.set(this.localKey,JSON.stringify(this.local.set)):Rn.del(this.localKey)}drawingActive(){if(this.frameId===null)return!1;if(this.mode==="expert")return this.tool==="contour";if(this.mode==="train"&&this.session&&!this.feedback){const t=this.tasks[this.taskIndex];return!!t&&t.answer==="contour"&&t.frameId===this.frameId}return!1}addDraftVertex(t,e){const n=Fh*this.overlay.imagePxPerScreenPx();if(this.draft.length>=3&&Math.hypot(t-this.draft[0][0],e-this.draft[0][1])<=n)return this.closeDraft();this.draft.push([t,e]),this.cursor={x:t,y:e},this.render()}undoVertex(){this.draft.pop(),this.render()}cancelDraft(){this.draft=[],this.cursor=null,this.render()}closeDraft(){if(this.draft.length<3)return this.message="Для контура нужно минимум три вершины.",this.render();const t=this.draft;if(this.draft=[],this.cursor=null,this.mode==="expert"&&this.frameId!==null){const e=this.local.addContour(this.frameId,this.selectedStructure,t,this.author.trim());this.selectedMark=e.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const e=this.tasks[this.taskIndex],n=Ly(e,t),[i,r]=Li(t);this.record(e,{x:i,y:r},n.errorPx,n.hit,n.dice,t)}}imageClick(t,e){if(this.frameId!==null){if(this.mode==="expert"){if(!this.author.trim()){this.message="Укажите автора разметки — без него метки не сохраняются.",this.render();return}if(this.tool==="contour")return this.addDraftVertex(t,e);const n=this.local.add(this.frameId,this.selectedStructure,t,e,this.author.trim());this.selectedMark=n.id,this.message="",this.saveLocal(),this.render()}else if(this.mode==="train"&&this.session&&!this.feedback){const n=this.tasks[this.taskIndex];if(!n||n.frameId!==this.frameId)return;if(n.answer==="contour")return this.addDraftVertex(t,e);const i=Py(n,t,e);this.record(n,{x:t,y:e},i.errorPx,i.hit,null,null)}}}record(t,e,n,i,r,a){this.session&&(this.session.attempts.push({taskIndex:this.taskIndex,frameId:t.frameId,structureId:t.structureId,structureName:this.structure(t.structureId).name,answer:t.answer,dice:r,polygon:a??void 0,clickX:e?.x??null,clickY:e?.y??null,errorPx:n,hit:i,referenceStatus:t.reference.status,at:new Date().toISOString(),timeMs:Math.round(performance.now()-this.taskStarted)}),this.feedback={click:e,polygon:a,hit:i,errorPx:n,dice:r},this.draft=[],this.cursor=null,this.render())}drawOverlay(){const t=this.overlay;if(t.interactive=this.mode==="expert"||this.mode==="train"&&!!this.session&&!this.feedback,t.drawing=this.drawingActive(),this.frameId===null)return t.clear();const e=Fh*t.imagePxPerScreenPx(),n=this.draft.length&&this.drawingActive()?{points:this.draft,cursor:this.cursor,color:this.mode==="expert"?this.structure(this.selectedStructure).color:"#ffffff",closable:this.draft.length>=3&&!!this.cursor&&Math.hypot(this.cursor.x-this.draft[0][0],this.cursor.y-this.draft[0][1])<=e}:null;if(this.mode==="train"&&this.session){const a=this.tasks[this.taskIndex];return a&&this.feedback&&a.frameId===this.frameId?t.render({feedback:{reference:a.reference,structure:this.structure(a.structureId),click:this.feedback.click,polygon:this.feedback.polygon,hit:this.feedback.hit}}):t.render({draft:n})}const i=this.viewSet(),r=i&&this.showMarks?i.frames[String(this.frameId)]??[]:[];t.render({items:r.map(a=>({mark:a,structure:this.structure(a.structureId),selected:a.id===this.selectedMark})),showTolerance:this.mode==="expert",draft:n})}renderTabs(){const t=[["view","Просмотр"],["expert","Эксперт"],["train","Тренировка"]];this.d.tabsHost.replaceChildren(...t.map(([e,n])=>J("button",{type:"button",class:"tab"+(this.mode===e?" active":""),textContent:n,dataset:{mode:e},ariaPressed:String(this.mode===e),onclick:()=>{this.mode=e,this.selectedMark=null,this.message="",this.renderTabs(),this.render()}})))}render(){this.drawOverlay();const t=this.mode==="view"?this.renderView():this.mode==="expert"?this.renderExpert():this.renderTrain();this.d.bodyHost.replaceChildren(t)}displayControls(){return J("div",{class:"ann-row"},J("label",{class:"chk",title:"Показывать эталонные точки и контуры на кадре"},J("input",{type:"checkbox",checked:this.showMarks,onchange:t=>(this.showMarks=t.target.checked,this.drawOverlay())}),"Метки"),J("label",{class:"chk",title:"Показывать названия структур рядом с метками"},J("input",{type:"checkbox",checked:this.overlay.showLabels,onchange:t=>(this.overlay.showLabels=t.target.checked,this.drawOverlay())}),"Подписи"),J("label",{class:"chk",title:"Непрозрачность меток на изображении"},"Яркость меток",J("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:String(this.overlay.opacity),oninput:t=>(this.overlay.opacity=Number(t.target.value),this.drawOverlay())})))}frameMarksInfo(t){if(this.frameId===null)return J("p",{class:"ann-note"},"Кадр не показан — разметка недоступна.");const e=t?.frames[String(this.frameId)]??[];return e.length?J("ul",{class:"ann-list"},...e.map(n=>{const i=this.structure(n.structureId);return J("li",{},J("span",{class:"sw",style:`background:${i.color}`}),`${i.name} · ${Ge(n)==="contour"?`контур, ${n.points?.length??0} верш.`:"точка"} · ${n.status==="verified"?"проверено":"черновик"}${n.origin==="copied"?" (скопировано)":""} · ${n.author}`)})):J("p",{class:"ann-note",dataset:{testid:"no-marks"}},"Для этого кадра разметки нет.")}sourceLine(t,e){if(!t)return J("p",{class:"ann-note"},"Эталонной разметки пока нет. Создайте её в режиме «Эксперт».");const n=Object.values(t.frames).filter(o=>o.length).length,i=Object.values(t.frames).reduce((o,l)=>o+l.length,0),r=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>c.status==="verified").length,0),a=Object.values(t.frames).reduce((o,l)=>o+l.filter(c=>Ge(c)==="contour").length,0);return J("p",{class:"ann-note",title:this.d.manifest.imageGeometry.pixelSpacingMm?`Ошибки измеряются в пикселях кадра (1 пикс. = ${this.d.manifest.imageGeometry.pixelSpacingMm} мм).`:"Ошибки измеряются в пикселях кадра — масштаб в мм в источнике не указан."},`${e==="published"?"Эталон источника":"Локальная разметка (этот браузер)"} v${t.version}: ${i-a} точек, ${a} контуров на ${n} кадрах, проверено ${r}.`)}renderView(){const t=this.viewSet();return J("div",{class:"ann"},this.sourceLine(t,this.hasLocal?"local":this.published?"published":null),this.displayControls(),this.frameMarksInfo(t))}renderExpert(){const t=this.local.set,e=new Map;for(const c of t.structures)e.set(c.class,[...e.get(c.class)??[],c]);const n=J("select",{id:"annStructure",onchange:c=>(this.selectedStructure=c.target.value,this.selectedMark=null,this.render())},...[...e.entries()].map(([c,h])=>J("optgroup",{label:Lh[c]},...h.map(u=>J("option",{value:u.id,textContent:u.name,selected:u.id===this.selectedStructure}))))),i=this.selectedMark?this.findMark(this.selectedMark):void 0,r=this.tool==="contour"&&this.draft.length?J("div",{class:"ann-row"},J("span",{},`Вершин: ${this.draft.length}`),J("button",{type:"button",id:"draftClose",disabled:this.draft.length<3,textContent:"Замкнуть контур",onclick:()=>this.closeDraft()}),J("button",{type:"button",textContent:"Убрать вершину",onclick:()=>this.undoVertex()}),J("button",{type:"button",textContent:"Отмена",onclick:()=>this.cancelDraft()})):null,a=this.local.framesWithMarks(),o=this.frameId===null?void 0:[...a].reverse().find(c=>c<this.frameId)??a.find(c=>c>this.frameId),l=J("input",{type:"file",accept:"application/json,.json",hidden:!0,onchange:async c=>{const h=c.target.files?.[0];if(h){try{const u=JSON.parse(await h.text()),d=this.d.manifest,f=co(u,d.caseId,d.dataVersion,d.frames.count,d.frames.width,d.frames.height);if(f.length)throw new Error(f.slice(0,3).join("; "));this.local=new Xr(u),this.saveLocal(),this.message=`Импортировано: v${u.version}.`}catch(u){this.message="Импорт не выполнен: "+u.message}this.render()}}});return J("div",{class:"ann"},J("p",{class:"ann-note",title:this.tool==="point"?"Одна точка на структуру в кадре. Точку можно перетащить.":"Отменить вершину — Backspace, отменить обводку — Esc. Вершины готового контура перетаскиваются."},this.tool==="point"?"Выберите структуру и щёлкните по ней на кадре.":"Обведите структуру щелчками; замкнуть — щелчок по первой вершине или Enter."),J("div",{class:"seg"},...["point","contour"].map(c=>J("button",{type:"button",id:c==="point"?"toolPoint":"toolContour",class:"seg-btn"+(this.tool===c?" active":""),textContent:c==="point"?"Точка":"Контур",onclick:()=>(this.tool=c,this.draft=[],this.cursor=null,this.render())}))),J("div",{class:"ann-row"},J("label",{title:"Без автора метки не сохраняются"},"Автор",J("input",{id:"annAuthor",type:"text",value:this.author,placeholder:"ФИО эксперта",onchange:c=>(this.author=c.target.value,Rn.set("sonolab.author",this.author))}))),J("div",{class:"ann-row"},J("label",{title:"Какую структуру размечать"},"Структура",n)),this.frameId===null?J("p",{class:"ann-warn"},"Датчик вне подготовленной области — поставьте его на проход."):J("p",{class:"ann-note"},`Текущий кадр: № ${this.frameId}`),r,i&&Ge(i)==="point"?J("div",{class:"ann-row"},J("span",{},`Выбрано: ${this.structure(i.structureId).name} (${i.x.toFixed(0)}, ${i.y.toFixed(0)})`),J("label",{},"допуск ",J("input",{type:"number",min:"4",max:"120",value:String(i.tolerancePx),style:"width:4.5em",onchange:c=>(this.local.setTolerance(this.frameId,i.id,Number(c.target.value)),this.saveLocal(),this.render())})," пикс."),J("button",{type:"button",textContent:"Удалить точку",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):i?J("div",{class:"ann-row"},J("span",{},`Выбран контур: ${this.structure(i.structureId).name}, ${i.points?.length??0} вершин`),J("button",{type:"button",id:"delContour",textContent:"Удалить контур",onclick:()=>(this.local.remove(this.frameId,i.id),this.selectedMark=null,this.saveLocal(),this.render())})):null,this.frameMarksInfo(t),J("div",{class:"ann-row"},J("button",{type:"button",id:"annVerify",disabled:this.frameId===null||!this.local.marks(this.frameId).length||!this.author.trim(),textContent:"Кадр проверен",onclick:()=>(this.local.setStatus(this.frameId,"verified",this.author.trim()),this.saveLocal(),this.render())}),J("button",{type:"button",disabled:this.frameId===null||o===void 0||!this.author.trim(),textContent:o===void 0?"Копировать с размеченного кадра":`Копировать с кадра № ${o}`,title:"Перенесённые точки помечаются как черновик и требуют проверки",onclick:()=>(this.message=`Скопировано точек: ${this.local.copyFrom(o,this.frameId,this.author.trim())} — проверьте их положение.`,this.saveLocal(),this.render())})),a.length?J("div",{class:"ann-frames"},"Размеченные кадры: ",...a.map(c=>J("button",{type:"button",class:"chip"+(c===this.frameId?" active":""),textContent:String(c),onclick:()=>this.d.goToFrame(c)}))):null,J("div",{class:"ann-row"},J("button",{type:"button",id:"annExport",disabled:!a.length,textContent:"Экспорт JSON",onclick:()=>lo(`annotations_${t.caseId}_v${t.version}.json`,JSON.stringify(t,null,1),"application/json")}),J("button",{type:"button",textContent:"Импорт JSON",onclick:()=>l.click()}),l,J("button",{type:"button",class:"danger",disabled:!a.length,textContent:"Очистить черновик",onclick:()=>{confirm("Удалить всю локальную разметку в этом браузере?")&&(this.local=new Xr(Ih(this.d.manifest.caseId,this.d.manifest.dataVersion)),this.saveLocal(),this.render())}})),this.message?J("p",{class:"ann-msg"},this.message):null,this.sourceLine(a.length?t:null,"local"),J("p",{class:"ann-note",title:"Чтобы разметка стала общей для всех учеников, выгрузите JSON и передайте его для публикации с приложением."},"Разметка хранится в этом браузере — выгружайте её кнопкой «Экспорт JSON»."))}renderTrain(){const t=[["local",this.hasLocal?this.local.set:null],["published",this.published]];if(!this.session){const o=this.trainSource==="local"?this.hasLocal?this.local.set:null:this.published,l=o?Nh(o,{onlyVerified:this.onlyVerified,seed:1,mode:this.taskMode}).length:0;return J("div",{class:"ann"},J("p",{class:"ann-note",title:`Щелчок засчитывается в радиусе допуска эталонной точки или внутри эталонного контура; обводка — при совпадении с эталоном не ниже ${mc} по коэффициенту Дайса.`},"Отметьте или обведите названную структуру на кадре — ответ сравнивается с эталоном."),J("div",{class:"ann-row"},J("label",{title:"Имя попадёт в журнал результатов"},"Ученик",J("input",{id:"trStudent",type:"text",value:this.student,placeholder:"Имя",onchange:c=>(this.student=c.target.value,Rn.set("sonolab.student",this.student))}))),J("div",{class:"ann-row"},J("label",{title:"Чья разметка служит правильным ответом"},"Эталон",J("select",{id:"trSource",onchange:c=>(this.trainSource=c.target.value,this.render())},...t.map(([c,h])=>J("option",{value:c,disabled:!h,selected:this.trainSource===c,textContent:c==="local"?`локальный${h?` v${h.version}`:" — нет"}`:`опубликованный${h?` v${h.version}`:" — нет"}`})))),J("label",{class:"chk",title:"Брать только метки со статусом «проверено экспертом»"},J("input",{type:"checkbox",checked:this.onlyVerified,onchange:c=>(this.onlyVerified=c.target.checked,this.render())}),"Только проверенные экспертом")),J("div",{class:"ann-row"},J("label",{title:"Как отвечать на задания"},"Задания",J("select",{id:"trMode",onchange:c=>(this.taskMode=c.target.value,this.render())},...[["both","точки — щелчком, контуры — обводкой"],["point","только щелчком"],["contour","только обводкой"]].map(([c,h])=>J("option",{value:c,selected:this.taskMode===c,textContent:h}))))),J("p",{class:"ann-note"},l?`Доступно заданий: ${l}.`:"Нет эталонных точек для заданий. Эксперт должен разметить кадры в режиме «Эксперт»."),J("button",{type:"button",id:"trStart",class:"primary",disabled:!l,textContent:"Начать тренировку",onclick:()=>this.startSession(o)}),this.history())}if(this.taskIndex>=this.tasks.length)return this.renderSummary();const n=this.tasks[this.taskIndex],i=this.structure(n.structureId),r=this.frameId===n.frameId,a=this.feedback;return J("div",{class:"ann"},J("p",{class:"task-title",dataset:{testid:"task"}},`Задание ${this.taskIndex+1} из ${this.tasks.length}: ${n.answer==="contour"?"обведите":"отметьте"} `,J("b",{},`«${i.name}»`),` (${Lh[i.class]})`),!r&&!a?J("div",{class:"ann-row"},J("span",{class:"ann-warn"},`Задание на кадре № ${n.frameId}.`),J("button",{type:"button",textContent:"К кадру задания",onclick:()=>this.d.goToFrame(n.frameId)})):null,a?J("p",{class:a.hit?"fb ok":"fb bad",dataset:{testid:"feedback"}},a.click===null?"Пропущено. Эталон показан на кадре.":n.answer==="contour"?`${a.hit?"Верно":"Неточно"}. Совпадение с эталоном (Дайс) ${$r(a.dice)} при пороге ${mc}; смещение центра ${li(a.errorPx)}`:Ge(n.reference)==="contour"?a.hit?"Верно: щелчок внутри эталонного контура.":`Мимо: до границы эталонного контура ${li(a.errorPx)}.`:a.hit?`Верно. Ошибка ${li(a.errorPx)} (допуск ${n.reference.tolerancePx}).`:`Мимо. Ошибка ${li(a.errorPx)} при допуске ${n.reference.tolerancePx} пикс. Эталон показан на кадре.`):r?J("p",{class:"ann-note"},n.answer==="contour"?`Обведите структуру щелчками по границе и замкните контур (щелчок по первой вершине или Enter). Вершин: ${this.draft.length}.`:"Щёлкните по структуре на УЗИ-кадре."):null,J("div",{class:"ann-row"},a?J("button",{type:"button",id:"trNext",class:"primary",textContent:this.taskIndex+1<this.tasks.length?"Следующее задание":"Итоги",onclick:()=>this.nextTask()}):J("span",{class:"ann-row"},n.answer==="contour"?J("button",{type:"button",id:"trDone",class:"primary",disabled:this.draft.length<3,textContent:"Готово",onclick:()=>this.closeDraft()}):null,n.answer==="contour"&&this.draft.length?J("button",{type:"button",textContent:"Сбросить обводку",onclick:()=>this.cancelDraft()}):null,J("button",{type:"button",id:"trSkip",textContent:"Пропустить",onclick:()=>this.record(n,null,null,!1,null,null)})),J("button",{type:"button",textContent:"Завершить",onclick:()=>(this.taskIndex=this.tasks.length,this.feedback=null,this.finish())})),n.reference.status!=="verified"?J("p",{class:"ann-note"},"Эталон этого задания — черновик, не проверен экспертом."):null)}startSession(t){this.tasks=Nh(t,{onlyVerified:this.onlyVerified,seed:Date.now()&4294967295,mode:this.taskMode}),this.session={schema:"sonolab.training/1",caseId:t.caseId,dataVersion:t.dataVersion,annotationVersion:t.version,annotationSource:this.trainSource,student:this.student.trim()||"без имени",startedAt:new Date().toISOString(),attempts:[]},this.taskIndex=0,this.beginTask()}beginTask(){this.feedback=null;const t=this.tasks[this.taskIndex];t&&this.d.goToFrame(t.frameId),this.taskStarted=performance.now(),this.render()}nextTask(){this.taskIndex++,this.taskIndex>=this.tasks.length?this.finish():this.beginTask()}finish(){if(!this.session)return;this.session.finishedAt=new Date().toISOString();const t=`sonolab.training.${this.d.manifest.caseId}`;let e=[];try{e=JSON.parse(Rn.get(t)??"[]")}catch{e=[]}e.push(this.session),Rn.set(t,JSON.stringify(e.slice(-50))),this.feedback=null,this.render()}renderSummary(){const t=this.session,e=Uh(t.attempts);return J("div",{class:"ann",dataset:{testid:"summary"}},J("p",{class:"task-title"},`Итоги: ${e.hits} из ${e.total} (${Math.round(e.hitRate*100)} %)`),J("p",{class:"ann-note"},`Щелчки: средняя ошибка ${li(e.meanErrorPx)}, медиана ${li(e.medianErrorPx)}. Обводки: средний Дайс ${$r(e.meanDice)}. Пропущено ${e.skipped}.`),J("table",{class:"ann-table"},J("thead",{},J("tr",{},J("th",{},"Структура"),J("th",{},"Верно"),J("th",{},"Ср. ошибка"),J("th",{},"Ср. Дайс"))),J("tbody",{},...e.byStructure.map(n=>J("tr",{},J("td",{},n.name),J("td",{},`${n.hits}/${n.total}`),J("td",{},li(n.meanErrorPx)),J("td",{},$r(n.meanDice)))))),J("div",{class:"ann-row"},J("button",{type:"button",textContent:"Журнал CSV",onclick:()=>lo(`training_${t.student}_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.csv`,"\uFEFF"+Iy(t),"text/csv")}),J("button",{type:"button",textContent:"Журнал JSON",onclick:()=>lo(`training_${t.startedAt.slice(0,19).replace(/[:T]/g,"-")}.json`,JSON.stringify(t,null,1),"application/json")}),J("button",{type:"button",id:"trAgain",class:"primary",textContent:"Новая тренировка",onclick:()=>(this.session=null,this.render())})))}history(){let t=[];try{t=JSON.parse(Rn.get(`sonolab.training.${this.d.manifest.caseId}`)??"[]")}catch{t=[]}return t.length?J("details",{class:"ann-hist"},J("summary",{},`Прошлые тренировки (${t.length})`),J("ul",{class:"ann-list"},...t.slice(-10).reverse().map(e=>{const n=Uh(e.attempts);return J("li",{},`${e.startedAt.slice(0,16).replace("T"," ")} · ${e.student} · ${n.hits}/${n.total} · ср. ${li(n.meanErrorPx)}${n.meanDice!==null?` · Дайс ${$r(n.meanDice)}`:""}`)}))):null}debugState(){return{mode:this.mode,frameId:this.frameId,localVersion:this.local.set.version,localFrames:this.local.framesWithMarks(),marksOnFrame:this.frameId===null?[]:this.local.marks(this.frameId).map(t=>({id:t.id,s:t.structureId,kind:Ge(t),x:t.x,y:t.y,points:t.points,status:t.status})),draft:this.draft.length,task:this.session&&this.tasks[this.taskIndex]?{i:this.taskIndex,frameId:this.tasks[this.taskIndex].frameId,structureId:this.tasks[this.taskIndex].structureId,answer:this.tasks[this.taskIndex].answer,ref:{x:this.tasks[this.taskIndex].reference.x,y:this.tasks[this.taskIndex].reference.y,points:this.tasks[this.taskIndex].reference.points??null}}:null,attempts:this.session?.attempts??[]}}imageToScreen(t,e){return this.overlay.toScreen(t,e)}}function Zi(s){const t=s.ru??s.name;return s.side==="mid"?t:`${t} (${s.side==="right"?"справа":"слева"})`}function Ny(s,t){const[e,n,i]=s.quant.min,[r,a,o]=s.quant.scale,l=s.structures.map((c,h)=>{const u={index:h,id:c.id,name:c.name,ru:c.ru,cat:c.cat,sub:c.sub,side:c.side,region:c.region,kind:c.kind,bbox:c.bbox,cartilage:/cartilage|meniscus|disc/i.test(c.name)};if(c.kind==="mesh"){const d=new Uint16Array(t,c.voff,c.nv*3),f=new Float32Array(c.nv*3);for(let m=0;m<c.nv;m++)f[m*3]=d[m*3]*r+e,f[m*3+1]=d[m*3+1]*a+n,f[m*3+2]=d[m*3+2]*o+i;u.pos=f,u.idx=c.itype==="u32"?new Uint32Array(t,c.toff,c.nt*3):new Uint16Array(t,c.toff,c.nt*3)}else u.lines=c.lines.map(({off:d,n:f})=>{const m=new Uint16Array(t,d,f*4),g=new Float32Array(f*4);for(let x=0;x<f;x++)g[x*4]=m[x*4]*r+e,g[x*4+1]=m[x*4+1]*a+n,g[x*4+2]=m[x*4+2]*o+i,g[x*4+3]=m[x*4+3]/1e5;return g});return u});return{meta:s,structures:l}}async function Uy(s,t){const e=fetch(new URL("models/anatomy.json",s)).then(h=>{if(!h.ok)throw new Error(`Анатомия: HTTP ${h.status}`);return h.json()}),n=await fetch(new URL("models/anatomy.bin",s));if(!n.ok||!n.body)throw new Error(`Анатомия (данные): HTTP ${n.status}`);const i=Number(n.headers.get("content-length"))||0,r=n.body.getReader(),a=[];let o=0;for(;;){const{done:h,value:u}=await r.read();if(h)break;a.push(u),o+=u.length,i&&t&&t(o/i)}const l=new Uint8Array(o);let c=0;for(const h of a)l.set(h,c),c+=h.length;return Ny(await e,l.buffer)}const or=(s,t,e)=>s.structures.find(n=>n.name===t&&(e===void 0||n.side===e));function Ku(s){const t=s.pos;if(!t)return[];const e=[];for(let n=0;n<t.length;n+=3)e.push([t[n],t[n+1],t[n+2]]);return e}function da(s,t){const e=or(s,`Vertebra ${t}`);if(!e)return null;const n=Ku(e);if(!n.length)return null;let i=null,r=n[0],a=n[0];for(const o of n)Math.abs(o[2])<.006&&(!i||o[1]<i[1])&&(i=o),o[2]<r[2]&&(r=o),o[2]>a[2]&&(a=o);return i?{spinous:i,tpR:r,tpL:a}:null}function Fy(s,t){const e=or(s,`Intervertebral disc ${t}`);if(!e)return null;const[n,i]=e.bbox;return[(n[0]+i[0])/2,(n[1]+i[1])/2,(n[2]+i[2])/2]}function Oy(s,t,e){const n=da(s,t),i=da(s,e),r=or(s,`Vertebra ${t}`),a=or(s,`Vertebra ${e}`);if(!n||!i||!r||!a)return null;const o=Math.min(n.spinous[0],i.spinous[0]),l=Math.max(n.spinous[0],i.spinous[0]);let c=null;for(let h=o;h<=l+1e-9;h+=.001){const u=[h,-.3,5e-4],d=[0,1,0],f=Math.min(Oh(r,u,d)[0]??1/0,Oh(a,u,d)[0]??1/0);(!c||f>c[1])&&(c=[h,f])}return c?c[0]:null}function Oh(s,t,e){const n=s.pos,i=s.idx;if(!n||!i)return[];const r=[],a=t[0]+13e-7,o=t[1]+7e-7,l=t[2]-9e-7;for(let c=0;c<i.length;c+=3){const h=i[c]*3,u=i[c+1]*3,d=i[c+2]*3,f=n[u]-n[h],m=n[u+1]-n[h+1],g=n[u+2]-n[h+2],x=n[d]-n[h],p=n[d+1]-n[h+1],v=n[d+2]-n[h+2],_=e[1]*v-e[2]*p,y=e[2]*x-e[0]*v,T=e[0]*p-e[1]*x,E=f*_+m*y+g*T;if(Math.abs(E)<1e-14)continue;const R=1/E,D=a-n[h],b=o-n[h+1],M=l-n[h+2],C=(D*_+b*y+M*T)*R;if(C<0||C>1)continue;const N=b*g-M*m,F=M*f-D*g,H=D*m-b*f,k=(e[0]*N+e[1]*F+e[2]*H)*R;if(k<0||C+k>1)continue;const W=(x*N+p*F+v*H)*R;W>0&&r.push(W)}return r.sort((c,h)=>c-h)}function ky(s){const t={},e=[0,-1,0],n=c=>[c.tpR[0],c.tpR[1],c.spinous[2]+.8*(c.tpR[2]-c.spinous[2])],i=da(s,"T5");if(i){const c=n(i);t.ESP_T5R={ru:"ESP, T5 справа (продольно)",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:0,depthCm:5,expect:["Vertebra T5","Rhomboid major muscle","Ascending part of trapezius muscle","Pleura"]}}const r=da(s,"L4");if(r){const c=n(r);t.ESP_L4R={ru:"ESP, L4 справа (продольно)",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:0,depthCm:6,expect:["Vertebra L4","Iliocostalis lumborum muscle","Psoas major"]}}const a=Fy(s,"L3-L4"),o=Oy(s,"L3","L4");if(a&&o!==null){const c=[o,a[1]-.03,-.02];t.PSO_L34R={ru:"Нейроаксиальный: парамедианный сагиттальный косой L3–L4",x:c[0],z:c[2],point:c,dir:e,rotateDeg:90,tiltDeg:-10,depthCm:8,expect:["Vertebra L3","Vertebra L4","Cauda equina"]};const h=[o,a[1]-.03,0];t.TLI_L34={ru:"Нейроаксиальный: поперечный междужковый L3–L4",x:h[0],z:h[2],point:h,dir:e,rotateDeg:0,tiltDeg:0,depthCm:8,expect:["Interspinous ligaments","Ligamenta flava","Cauda equina"]}}const l=or(s,"Quadratus lumborum muscle","right");if(l&&a){let c=null;for(const h of Ku(l))Math.abs(h[0]-a[0])<.012&&(!c||h[2]<c[2])&&(c=h);if(c){const h=[0,-Math.SQRT1_2,-Math.SQRT1_2];t.QL2_R={ru:"Задний QL (QL2), справа, заднебоковой доступ",x:c[0],z:c[2],point:c,dir:h,rotateDeg:0,tiltDeg:0,depthCm:6,expect:["Quadratus lumborum muscle","Psoas major","Latissimus dorsi muscle"]}}}return t}const wi=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],ia=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],vn=s=>{const t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]},qr=(s,t,e)=>{const n=Math.cos(e),i=Math.sin(e),r=ia(t,s),a=wi(t,s)*(1-n);return[s[0]*n+r[0]*i+t[0]*a,s[1]*n+r[1]*i+t[1]*a,s[2]*n+r[2]*i+t[2]*a]};function By(s,t,e,n,i,r,a=0){const o=vn(t);let l=vn([e[0]-o[0]*wi(e,o),e[1]-o[1]*wi(e,o),e[2]-o[2]*wi(e,o)]);isFinite(l[0])||(l=vn(ia(o,[1,0,0])));let c=vn(ia(o,l));c=vn(qr(c,o,n*Math.PI/180));let h=[-o[0],-o[1],-o[2]];if(h=vn(qr(h,c,i*Math.PI/180)),a){const u=vn(ia(c,h)),d=a*Math.PI/180;c=vn(qr(c,u,d)),h=vn(qr(h,u,d))}return{origin:s,lateral:c,depth:h,...r}}function zy(s,t,e){let n=1/0,i=[1,0,0];const r=e?vn(e):null;for(const[a,o]of t){const l=[o[0]-a[0],o[1]-a[1],o[2]-a[2]],c=wi(l,l)||1;if(r&&Math.abs(wi(l,r))/Math.sqrt(c)>.8)continue;const h=Math.max(0,Math.min(1,wi([s[0]-a[0],s[1]-a[1],s[2]-a[2]],l)/c)),u=Math.hypot(s[0]-a[0]-l[0]*h,s[1]-a[1]-l[1]*h,s[2]-a[2]-l[2]*h);u<n&&(n=u,i=vn(l))}return i}const Vy=/\bfascia\b|\bseptum\b|aponeuros|retinacul|membrane|capsule|sheath|bursa|^Pleura$/i;function Zu(s){return s.kind!=="mesh"||s.cat==="skin"||s.cat==="bone"?null:/^Platysma$/i.test(s.name)?{thickMm:1.5}:Vy.test(s.name)?/bursa/i.test(s.name)?{thickMm:.5}:/^Pleura$/i.test(s.name)?{thickMm:.4}:{thickMm:.6}:null}function Hy(s){if(s.cat!=="organ")return null;const t=s.name;return/lobe of (right|left) lung|\blung\b|bronch|^Pleura$/i.test(t)?{kind:1,wallMm:0}:/^trachea$|laryngopharynx/i.test(t)?{kind:2,wallMm:2}:/\b(colon|jejunum|ileum|caecum|cecum|duodenum|stomach|rectum)\b|vermiform appendix/i.test(t)?{kind:3,wallMm:2.5}:null}const jr=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Ju=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Gy={skin:0,organ:1,lymphoid:1,muscle:2,joint:3,bone:4,vessel:5,nerve:6};function kh(s){let t=Gy[s.cat]??1;return s.cat==="muscle"&&s.sub==="tendon"&&(t=3),s.cat==="muscle"&&s.sub==="aponeurosis"&&(t=2.1),t*10+(s.kind==="tube"?5:0)}function Wy(s,t){const e=Ju(t.lateral,t.depth),n=t.origin,i=[];for(const l of[-t.widthM/2,t.widthM/2])for(const c of[0,t.depthM])i.push([n[0]+t.lateral[0]*l+t.depth[0]*c,n[1]+t.lateral[1]*l+t.depth[1]*c,n[2]+t.lateral[2]*l+t.depth[2]*c]);const r=[0,1,2].map(l=>Math.min(...i.map(c=>c[l]))-.002),a=[0,1,2].map(l=>Math.max(...i.map(c=>c[l]))+.002),o=[];for(const l of s.structures){const[c,h]=l.bbox;if(h[0]<r[0]||c[0]>a[0]||h[1]<r[1]||c[1]>a[1]||h[2]<r[2]||c[2]>a[2])continue;let u=!1,d=!1;for(let f=0;f<8;f++){const m=[f&1?h[0]:c[0],f&2?h[1]:c[1],f&4?h[2]:c[2]],g=(m[0]-n[0])*e[0]+(m[1]-n[1])*e[1]+(m[2]-n[2])*e[2];g>=0&&(u=!0),g<=0&&(d=!0)}u&&d&&o.push(l)}return o.sort((l,c)=>kh(l)-kh(c))}function Xy(s,t,e,n,i,r){if(!s.length)return!1;let a=!1;const o=s.length/4;let l=1/0,c=-1/0;for(let g=0;g<o;g++)l=Math.min(l,s[g*4+1],s[g*4+3]),c=Math.max(c,s[g*4+1],s[g*4+3]);const h=Math.max(0,Math.floor(l)),u=Math.min(e-1,Math.ceil(c)),d=[],f=[];let m=0;for(let g=h;g<=u;g++){const x=g+.5;d.length=0;for(let v=0;v<o;v++){const _=s[v*4],y=s[v*4+1],T=s[v*4+2],E=s[v*4+3];y>x!=E>x&&d.push(_+(x-y)*(T-_)/(E-y))}d.sort((v,_)=>v-_);let p=0;for(let v=0;v<d.length;v++)(p===0||d[v]-d[p-1]>1e-4)&&(d[p++]=d[v]);if(d.length=p,d.length%2===1){if(f.length===0||++m>3)continue;d.length=0;for(const v of f)d.push(v)}else{m=0,f.length=0;for(const v of d)f.push(v)}if(!(d.length<2))for(let v=0;v+1<d.length;v+=2){const _=Math.max(0,Math.ceil(d[v]-.5)),y=Math.min(t-1,Math.floor(d[v+1]-.5));for(let T=_;T<=y;T++){const E=g*t+T;r&&r[E]===0||(n[E]=i,a=!0)}}}return a}function $y(s,t,e,n,i,r,a){let o=!1;const l=Math.ceil(r),c=Math.ceil(a);for(let h=0;h<s.length;h+=4){const u=s[h],d=s[h+1],f=s[h+2],m=s[h+3],g=Math.hypot(f-u,m-d),x=Math.max(1,Math.ceil(g*2));for(let p=0;p<=x;p++){const v=u+(f-u)*p/x,_=d+(m-d)*p/x;if(v<-r||_<-a||v>t+r||_>e+a)continue;const y=Math.max(0,Math.floor(v-l)),T=Math.min(t-1,Math.floor(v+l)),E=Math.max(0,Math.floor(_-c)),R=Math.min(e-1,Math.floor(_+c));for(let D=E;D<=R;D++){const b=(D+.5-_)/a;for(let M=y;M<=T;M++){const C=(M+.5-v)/r;if(C*C+b*b>1)continue;const N=D*t+M;n[N]===1&&(n[N]=i,o=!0)}}}}return o}function qy(s,t,e,n,i){const r=new Map,a=d=>{if(d<2)return null;let f=r.get(d);return f===void 0&&r.set(d,f=Hy(s.structures[d-2])),f},o=d=>d>=2&&a(d)?.kind===1&&!/^Pleura$/i.test(s.structures[d-2].name),l=new Int32Array(e).fill(-1),c=new Uint8Array(e);let h=!1;const u=Math.round(10*i);for(let d=0;d<e;d++)for(let f=0;f<n;f++){const m=t[f*e+d],g=a(m);if(!g)continue;let x=0;for(;f+x<n&&t[(f+x)*e+d]===m;)x++;const p=Math.round(g.wallMm*i);let v=m;if(g.kind===1){if(!o(m)){let y=0;for(let T=f+1;T<Math.min(n,f+u);T++)o(t[T*e+d])&&(y=t[T*e+d],T=n);if(!y){f+=x-1;continue}v=y}}else if(x<p+i){f+=x-1;continue}const _=f+p;if(_>=n)break;l[d]=_,c[d]=g.kind,h=!0;for(let y=_;y<n;y++){const T=y*e+d;t[T]>=1&&(t[T]=y<f+x?m:v)}break}return h?{start:l,kind:c}:void 0}function jy(s,t){const{W:e,H:n}=t,i=new Int32Array(e*n),r=Ju(t.lateral,t.depth),a=t.origin,o=e/t.widthM,l=n/t.depthM,c=[],h=[];let u;const d=p=>{const v=[p[0]-a[0],p[1]-a[1],p[2]-a[2]];return[(jr(v,t.lateral)+t.widthM/2)*o,jr(v,t.depth)*l]};for(const p of Wy(s,t))if(p.kind==="mesh"){const v=p.pos,_=p.idx,y=[],T=D=>(v[D*3]-a[0])*r[0]+(v[D*3+1]-a[1])*r[1]+(v[D*3+2]-a[2])*r[2];for(let D=0;D<_.length;D+=3){const b=_[D],M=_[D+1],C=_[D+2],N=T(b),F=T(M),H=T(C);if(N>0&&F>0&&H>0||N<0&&F<0&&H<0)continue;const k=[],W=(K,G,tt,it)=>{if(tt>0==it>0||tt===it)return;const st=tt/(tt-it);k.push([v[K*3]+st*(v[G*3]-v[K*3]),v[K*3+1]+st*(v[G*3+1]-v[K*3+1]),v[K*3+2]+st*(v[G*3+2]-v[K*3+2])])};if(W(b,M,N,F),W(M,C,F,H),W(C,b,H,N),k.length===2){const[K,G]=d(k[0]),[tt,it]=d(k[1]);y.push(K,G,tt,it)}}const E=p.cat==="skin"?1:p.index+2,R=Zu(p);R?y.length&&h.push({s:p,segs:y,sh:R}):Xy(y,e,n,i,E,p.cat==="skin"?null:i)&&c.push(p.index)}else{let v=!1;for(const _ of p.lines)for(let y=0;y+4<_.length;y+=4){const T=[_[y],_[y+1],_[y+2]],E=[_[y+4],_[y+5],_[y+6]],R=_[y+3],D=_[y+7],b=Math.max(R,D),M=(T[0]-a[0])*r[0]+(T[1]-a[1])*r[1]+(T[2]-a[2])*r[2],C=(E[0]-a[0])*r[0]+(E[1]-a[1])*r[1]+(E[2]-a[2])*r[2];if(M>b&&C>b||M<-b&&C<-b)continue;const N=M===C?0:Math.max(0,Math.min(1,(-b-M)/(C-M))),F=M===C?1:Math.max(0,Math.min(1,(b-M)/(C-M))),H=Math.min(N,F),k=Math.max(N,F),W=[T[0]+(E[0]-T[0])*H,T[1]+(E[1]-T[1])*H,T[2]+(E[2]-T[2])*H],K=[T[0]+(E[0]-T[0])*k,T[1]+(E[1]-T[1])*k,T[2]+(E[2]-T[2])*k],[G,tt]=d(W),[it,st]=d(K),Ut=b*Math.max(o,l)+1,Yt=Math.max(0,Math.floor(Math.min(G,it)-Ut)),Vt=Math.min(e-1,Math.ceil(Math.max(G,it)+Ut)),Jt=Math.max(0,Math.floor(Math.min(tt,st)-Ut)),j=Math.min(n-1,Math.ceil(Math.max(tt,st)+Ut));if(Yt>Vt||Jt>j)continue;const I=[E[0]-T[0],E[1]-T[1],E[2]-T[2]],z=jr(I,I)||1e-12;for(let et=Jt;et<=j;et++){const ct=(et+.5)/l;for(let ut=Yt;ut<=Vt;ut++){const Ft=et*e+ut;if(i[Ft]===0)continue;const xt=(ut+.5)/o-t.widthM/2,qt=[a[0]+t.lateral[0]*xt+t.depth[0]*ct-T[0],a[1]+t.lateral[1]*xt+t.depth[1]*ct-T[1],a[2]+t.lateral[2]*xt+t.depth[2]*ct-T[2]],L=Math.max(0,Math.min(1,jr(qt,I)/z)),Lt=qt[0]-I[0]*L,Ot=qt[1]-I[1]*L,Qt=qt[2]-I[2]*L,vt=R+(D-R)*L;if(Lt*Lt+Ot*Ot+Qt*Qt<=vt*vt&&(i[Ft]=p.index+2,v=!0,p.cat==="nerve")){u||(u=new Float32Array(e*n*3));const re=Math.sqrt(z);u[Ft*3]=I[0]/re,u[Ft*3+1]=I[1]/re,u[Ft*3+2]=I[2]/re}}}}v&&c.push(p.index)}for(const{s:p,segs:v,sh:_}of h){const y=Math.max(.6,_.thickMm/2*(o/1e3)),T=Math.max(.6,_.thickMm/2*(l/1e3));$y(v,e,n,i,p.index+2,y,T)&&c.push(p.index)}const f=qy(s,i,e,n,l/1e3),m=new Map;for(let p=0;p<i.length;p++)i[p]>=2&&m.set(i[p],1);const g=c.filter((p,v)=>m.has(p+2)&&c.indexOf(p)===v),x={W:e,H:n,label:i,present:g};return f&&(x.air=f),u&&(x.fiberDir=u),x}function ho(s,t,e){const n=Math.floor(t),i=Math.floor(e);if(n<0||i<0||n>=s.W||i>=s.H)return null;const r=s.label[i*s.W+n];return r>=2?r-2:null}const _e={fat:{echo:.12,atten:.012,z:1.38,tex:"fat"},muscle:{echo:.2,atten:.02,z:1.7,tex:"fiber"},tendon:{echo:.65,atten:.03,z:1.9,tex:"fiber"},joint:{echo:.55,atten:.03,z:1.85,tex:"fiber"},cartilage:{echo:.02,atten:.006,z:1.6,tex:"cartilage"},hyaline:{echo:.07,atten:.02,z:1.6,tex:"speckle"},bone:{echo:2,atten:.6,z:7.8,tex:"bone"},artery:{echo:0,atten:.0015,z:1.66,tex:"fluid"},vein:{echo:.01,atten:.0015,z:1.66,tex:"fluid"},nerve:{echo:.5,atten:.02,z:1.65,tex:"nerve"},organ:{echo:.3,atten:.016,z:1.65,tex:"speckle"},skin:{echo:.8},fascia:{echo:.7,atten:.03,z:1.9,tex:"fascia"},bursa:{echo:.05,atten:.005,z:1.6,tex:"cartilage"}};function Yy(s,t,e){return s.tex==="bone"||t.tex==="bone"?0:s.tex==="fluid"||t.tex==="fluid"?.9:s.tex==="nerve"||t.tex==="nerve"?1:s.tex==="fascia"||t.tex==="fascia"?.85:s===_e.hyaline||t===_e.hyaline?.9:s.tex==="fat"||t.tex==="fat"?1.1:s===_e.tendon||t===_e.tendon?.9:e?.8:.6}function Ky(s){if(!s)return _e.fat;if(Zu(s)&&!/^Platysma$/i.test(s.name))return/bursa/i.test(s.name)?_e.bursa:_e.fascia;switch(s.cat){case"bone":return s.cartilage?_e.hyaline:_e.bone;case"joint":return s.cartilage?_e.cartilage:_e.joint;case"muscle":return s.sub==="tendon"||s.sub==="aponeurosis"?_e.tendon:_e.muscle;case"vessel":return s.sub==="vein"?_e.vein:s.kind==="mesh"&&/heart|atrium|ventricle/i.test(s.name)?_e.organ:_e.artery;case"nerve":return _e.nerve;default:return/^trachea$/i.test(s.name)?_e.hyaline:_e.organ}}function Qu(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function qn(s,t,e,n){const i=s/n,r=t/n,a=e/n,o=Math.floor(i),l=Math.floor(r),c=Math.floor(a),h=i-o,u=r-l,d=a-c;let f=0;for(let m=0;m<8;m++){const g=m&1,x=m>>1&1,p=m>>2&1,v=(g?h:1-h)*(x?u:1-u)*(p?d:1-d);f+=v*Qu(o+g,l+x,c+p)}return f}const Bh=new WeakMap;function Zy(s){const t=s.length/3;if(t<8)return null;let e=0,n=0,i=0;for(let f=0;f<s.length;f+=3)e+=s[f],n+=s[f+1],i+=s[f+2];e/=t,n/=t,i/=t;let r=0,a=0,o=0,l=0,c=0,h=0;for(let f=0;f<s.length;f+=3){const m=s[f]-e,g=s[f+1]-n,x=s[f+2]-i;r+=m*m,a+=m*g,o+=m*x,l+=g*g,c+=g*x,h+=x*x}let u=[1,.5,.25];for(let f=0;f<30;f++){const m=[r*u[0]+a*u[1]+o*u[2],a*u[0]+l*u[1]+c*u[2],o*u[0]+c*u[1]+h*u[2]],g=Math.hypot(m[0],m[1],m[2]);if(!(g>0))return null;u=[m[0]/g,m[1]/g,m[2]/g]}return r*u[0]*u[0]+l*u[1]*u[1]+h*u[2]*u[2]+2*(a*u[0]*u[1]+o*u[0]*u[2]+c*u[1]*u[2])>.45*(r+l+h)?u:null}function Jy(s){let t=Bh.get(s);if(t)return t;const e=Ky(s);let n=0;s.cat==="nerve"&&(/division of .*trunk/i.test(s.name)?n=2:/root|trunk|spinal nerve/i.test(s.name)&&!/cutaneous/i.test(s.name)&&(n=1));const i=s.kind==="mesh"&&s.pos&&(e===_e.muscle||e===_e.tendon)?Zy(s.pos):null;return t={tissue:e,axis:i,nerve:n},Bh.set(s,t),t}const td={gain:1,dynamicRange:55};function Qy(s,t,e,n,i,r,a){const o=u=>{if(u<0||u>=t)return null;for(let d=0;d<=8;d++)for(const f of d===0?[i]:[i-d,i+d])if(!(f<1||f>=e)&&s[f*t+u]===a&&s[(f-1)*t+u]===r)return f;return null},l=o(n-3),c=o(n+3);if(l===null&&c===null)return .35;const h=l!==null&&c!==null?(c-l)/6:l!==null?(i-l)/3:(c-i)/3;return 1/Math.sqrt(1+h*h)}const tb=[null,{line:1.8,floor:.02,rev:.7,q:.55},{line:1.6,floor:.03,rev:.6,q:.5},{line:1.5,floor:.1,rev:.45,q:.5}],ed=.16,Ti=ed/1e3,eb=.8;let cr=0,lr=0;function nd(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),n=Math.imul(n^n>>>16,-2048144777),(n^n>>>13)>>>0}function fa(s,t,e){const n=s/Ti,i=t/Ti,r=e/Ti,a=Math.floor(n),o=Math.floor(i),l=Math.floor(r);let c=n-a,h=i-o,u=r-l;c=c*c*(3-2*c),h=h*h*(3-2*h),u=u*u*(3-2*u);let d=0,f=0,m=0;for(let x=0;x<8;x++){const p=x&1,v=x>>1&1,_=x>>2&1,y=(p?c:1-c)*(v?h:1-h)*(_?u:1-u),T=nd(a+p,o+v,l+_);d+=y*((T&65535)/32767.5-1),f+=y*((T>>>16)/32767.5-1),m+=y*y}const g=Math.sqrt(1.5/Math.max(m,1e-6));cr=d*g,lr=f*g}let uo=null;function nb(){if(uo)return uo;const s=2e3,t=new Float64Array(41),e=[],n=(i,r,a)=>nd(i,r,a)/4294967296;for(let i=0;i<s;i++){const r=Math.acos(2*n(i,14,9)-1),a=2*Math.PI*n(i,15,1);e.push(n(i,11,3)*50*Ti,n(i,12,5)*50*Ti,n(i,13,7)*50*Ti,Math.sin(r)*Math.cos(a),Math.sin(r)*Math.sin(a),Math.cos(r))}for(let i=0;i<40;i++){const r=i*.1*Ti;let a=0;for(let o=0;o<s;o++){const l=o*6;fa(e[l],e[l+1],e[l+2]);const c=cr,h=lr;fa(e[l]+e[l+3]*r,e[l+1]+e[l+4]*r,e[l+2]+e[l+5]*r),a+=c*cr+h*lr}t[i]=i===0?1:Math.max(0,a/s)}return t[40]=0,uo=t}function ib(s){const t=nb(),e=s*10;if(e>=40)return 0;const n=Math.floor(e);return t[n]+(t[n+1]-t[n])*(e-n)}function zh(s,t){const e=Math.min(t,Math.max(1,Math.ceil(2.5*s))),n=new Float64Array(2*e+1);let i=0;for(let r=-e;r<=e;r++)i+=n[r+e]=Math.exp(-r*r/(2*s*s));for(let r=0;r<n.length;r++)n[r]/=i;return n}function Vh(s){const t=s.length,e=new Float64Array(t);for(let n=0;n<t;n++)for(let i=0;i+n<t;i++)e[n]+=s[i]*s[i+n];return e}const Ds={axialSigmaMm:.12,lateralSigmaFocusMm:.24,focalZoneMm:14,elevationHalfMm:.5};function sb(s,t,e,n=td,i){const{W:r,H:a,label:o}=t,l=new Uint8ClampedArray(r*a),c=new Float32Array(r*a),h=new Float32Array(r*a),u=new Float32Array(r*a),d=new Float32Array(r*a),f=e.depthM*1e3/a,m=e.widthM*1e3/r,g=s.structures.length,x=[],p=z=>z<=1||z-2>=g?null:x[z]??=Jy(s.structures[z-2]),v=z=>z<=1?_e.fat:p(z).tissue,_=e.origin,y=e.lateral,T=e.depth,E=_e.muscle.atten*.6+_e.fat.atten*.4,R=Math.max(1,Math.round(.35/f)),D=Math.max(1,Math.round(.5/f)),b=1.2/f,M=t.air,C=t.fiberDir,N=Math.min(20,e.depthM*1e3/2),F=zh(Math.max(.5,Ds.axialSigmaMm/f),6),H=Vh(F),k=[],W=new Float32Array(a),K=new Map;for(let z=0;z<a;z++){const et=(z+.5)*f,ct=Ds.lateralSigmaFocusMm*Math.sqrt(1+((et-N)/Ds.focalZoneMm)**2),ut=Math.round(Math.max(.5,ct/m)*50);let Ft=K.get(ut);if(!Ft){const xt=zh(ut/50,12),qt=Vh(xt);let L=0;for(let Lt=0;Lt<H.length;Lt++)for(let Ot=0;Ot<qt.length;Ot++){const Qt=ib(Math.hypot(Lt*f,Ot*m)/ed);Qt<=0||(L+=(Lt?2:1)*(Ot?2:1)*H[Lt]*qt[Ot]*Qt)}Ft={k:xt,n:1/Math.max(L,1e-6)},K.set(ut,Ft)}k.push(Ft.k),W[z]=Ft.n*eb}const G=Math.max(1,Math.round(Ds.elevationHalfMm/f)),tt=Math.max(1,Math.round(Ds.elevationHalfMm/m)),it=(z,et)=>{if(z<=0)return et;const ct=v(z);return ct.tex==="bone"?et:ct.echo};for(let z=0;z<r;z++){const et=((z+.5)/r-.5)*e.widthM;let ct=1,ut=1,Ft=-1,xt=-1,qt=0,L=0,Lt=1,Ot=0,Qt=1,vt=1;const re=M?M.start[z]:-1,At=re>=0?tb[M.kind[z]]:null;for(let Tt=0;Tt<a;Tt++){const A=Tt*r+z,S=o[A];if(S===0){Ft=0;continue}xt=xt<0?0:xt+1;const V=(Tt+.5)/a*e.depthM,Y=_[0]+y[0]*et+T[0]*V,Z=_[1]+y[1]*et+T[1]*V,X=_[2]+y[2]*et+T[2]*V,wt=Y*y[0]+Z*y[1]+X*y[2],dt=Y-y[0]*wt*.6,Ct=Z-y[1]*wt*.6,St=X-y[2]*wt*.6;fa(Y,Z,X);const nt=cr,lt=lr;fa(Y+.0371,Z-.0213,X+.0119);const kt=cr,Dt=lr,gt=Math.min(3,nt*nt+lt*lt);let It=0,U=0;if(At&&Tt>=re){const Rt=Math.exp(E*(Tt+.5)*f);if(Tt===re&&(Qt=ut*Lt*vt),Tt-re<D){const Be=qn(Y*1,Z,X,25e-5);U=At.line*(.55+.9*Be)*ct*Rt}else{It=At.floor;const Be=re+.5;for(let Ne=2;Ne<=6;Ne++){const Pe=Tt+.5-Ne*Be;if(Pe>=0&&Pe<D){U=At.rev*Math.pow(At.q,Ne-2)*(.75+.5*qn(Y,Z,X,4e-4));break}if(Pe<0)break}}const xe=Math.sqrt(It*Qt*W[Tt]),ke=Math.sqrt(U*Qt);c[A]=xe*nt+ke,h[A]=xe*lt,u[A]=xe*kt+ke,d[A]=xe*Dt,Ft=S;continue}const ft=p(S),at=ft?ft.tissue:_e.fat;let rt=at.echo;switch(at.tex){case"fiber":{const Rt=ft?.axis;if(Rt){const oe=at===_e.tendon,xe=oe?.08:.12,ke=Y*Rt[0]+Z*Rt[1]+X*Rt[2],Be=Y-Rt[0]*ke*(1-xe),Ne=Z-Rt[1]*ke*(1-xe),Pe=X-Rt[2]*ke*(1-xe),an=T[0]*Rt[0]+T[1]*Rt[1]+T[2]*Rt[2];if(oe){const pn=qn(Be,Ne,Pe,28e-5),mn=.18+.82*Math.exp(-(an*an)/.03);rt=at.echo*(.45+.9*pn)*mn}else{const pn=qn(Be,Ne,Pe,45e-5),mn=Math.max(0,Math.min(1,(pn-.62)*7)),Bn=.6+.4*(1-an*an);rt=at.echo*(.5+.5*pn)+.35*mn*mn*Bn}}else{const oe=qn(dt*.3,Ct*.3,St*.3,55e-5);rt*=.45+1.3*oe*oe}break}case"fat":{const Rt=qn(dt,Ct,St,.0022),oe=qn(dt+3.3,Ct+1.1,St-2.2,.0011);rt=Math.abs(Rt-.5)<.03||Math.abs(oe-.5)<.02?.5:.09;break}case"nerve":{let Rt=Y,oe=Z,xe=X,ke=1;if(C&&(C[A*3]!==0||C[A*3+1]!==0||C[A*3+2]!==0)){const Pe=C[A*3],an=C[A*3+1],pn=C[A*3+2],mn=(Y*Pe+Z*an+X*pn)*.9;Rt=Y-Pe*mn,oe=Z-an*mn,xe=X-pn*mn;const Bn=T[0]*Pe+T[1]*an+T[2]*pn;ke=.55+.45*Math.exp(-(Bn*Bn)/.06)}const Be=qn(Rt,oe,xe,32e-5),Ne=ft.nerve;Ne===1?rt=Be>.8?.35:.05:Ne===2?rt=Be>.65?.08:.38:rt=Be>.6?.07:.6,rt*=ke;break}case"fascia":{const Rt=qn(dt,Ct,St,4e-4);rt=at.echo*(.6+.7*Rt);break}}if(xt<b&&(rt=Math.max(rt,_e.skin.echo)),at.tex!=="bone"){const Rt=Tt-G>=0?o[A-G*r]:0,oe=Tt+G<a?o[A+G*r]:0,xe=z-tt>=0?o[A-tt]:0,ke=z+tt<r?o[A+tt]:0;if(Rt>0&&Rt!==S||oe>0&&oe!==S||xe>0&&xe!==S||ke>0&&ke!==S){const Be=(it(Rt,rt)+it(oe,rt)+it(xe,rt)+it(ke,rt))/4,Ne=at.tex==="fluid"?.15:1/3;rt=(1-Ne)*rt+Ne*Be}}if(Ft>=1&&Ft!==S){const Rt=v(Ft);if(at.tex==="bone"&&Rt.tex!=="bone")qt=0;else{const oe=Qy(o,r,a,z,Tt,Ft,S);L=Yy(at,Rt,at===Rt)*(.15+.85*oe*oe),qt=R,at.tex==="fluid"&&Rt.tex!=="fluid"&&oe<.3&&(vt=Math.max(.3,vt*(.55+1.2*oe)))}Rt.tex==="fluid"&&at.tex!=="fluid"&&Ot>0&&(Lt=Math.min(1.6,Lt*Math.min(1.4,1+.04*Ot*f)))}at.tex==="fluid"?Ot++:Ot=0,It=rt,qt>0&&(U=L*(.8+.2*gt),It*=.5,qt--),at.tex==="bone"&&(ut>=1?(U=2*(.8+.2*gt),It=0):It*=.05);const ot=xt*f;ot<6&&(It+=.06*Math.exp(-ot/1.8));const Q=Math.exp(E*(Tt+.5)*f),Mt=ct*Q*ut*Lt*vt,Ht=Math.sqrt(It*Mt*W[Tt]),ue=Math.sqrt(U*Mt);c[A]=Ht*nt+ue,h[A]=Ht*lt,u[A]=Ht*kt+ue,d[A]=Ht*Dt,at.tex==="bone"&&(ut=Math.min(ut,.04)),ct*=Math.exp(-at.atten*f),Ft=S}}const st=new Float32Array(r*a),Ut=new Float32Array(r*a),Yt=(F.length-1)/2,Vt=new Float32Array(r*a);for(const z of[c,h,u,d]){Ut.fill(0);for(let et=0;et<a;et++){const ct=et*r;for(let ut=-Yt;ut<=Yt;ut++){const Ft=et+ut<0?0:et+ut>=a?a-1:et+ut,xt=F[ut+Yt],qt=Ft*r;for(let L=0;L<r;L++)Ut[ct+L]+=xt*z[qt+L]}}for(let et=0;et<a;et++){const ct=k[et],ut=(ct.length-1)/2,Ft=et*r;for(let xt=0;xt<r;xt++){let qt=0;if(xt-ut>=0&&xt+ut<r)for(let L=-ut;L<=ut;L++)qt+=ct[L+ut]*Ut[Ft+xt+L];else for(let L=-ut;L<=ut;L++){const Lt=xt+L<0?0:xt+L>=r?r-1:xt+L;qt+=ct[L+ut]*Ut[Ft+Lt]}Vt[Ft+xt]=qt}}for(let et=0;et<st.length;et++)st[et]+=.5*Vt[et]*Vt[et]}const Jt=Math.log10(.01),j=Math.log10(2),I=70/n.dynamicRange+.5;for(let z=0;z<a;z++)for(let et=0;et<r;et++){const ct=z*r+et;if(o[ct]===0){l[ct]=0;continue}const ut=.006*Qu(et,z,17)*Math.exp(E*(z+.5)*f),Ft=(st[ct]+ut)*n.gain,xt=Math.max(0,Math.min(1,(Math.log10(Math.max(Ft,.01))-Jt)/(j-Jt)));l[ct]=Math.pow(xt,I)*255}return l}const Hh={nerve:"нерв",vessel:"сосуд",bone:"кость",muscle:"мышца",joint:"связка/сустав",organ:"орган",lymphoid:"орган"},Gh={nerve:"#ffd60a",artery:"#ff4d4f",vein:"#4d7cff",bone:"#f0f0f0",muscle:"#d6409f",tendon:"#46a758",joint:"#12a594",organ:"#f76b15",lymphoid:"#f76b15"},fo=s=>Gh[s.sub??s.cat]??Gh[s.cat]??"#ffffff",rb=new Set(["nerve","vessel","bone"]),po=6.4;function ab(s){return s.ru??s.name.replace(/ muscle$/i,"")}function _t(s,t={},...e){const n=document.createElement(s);for(const[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=String(r):i==="dataset"?Object.assign(n.dataset,r):i==="style"?n.setAttribute("style",String(r)):n.setAttribute(i,String(r)));for(const i of e)i!=null&&i!==!1&&n.append(i);return n}const Ji=s=>_t("span",{class:"kbd"},s);class ob{constructor(t){this.d=t,this.canvas=document.createElement("canvas"),this.canvas.className="sim-canvas",this.canvas.setAttribute("aria-label","Синтетическое УЗИ-изображение"),this.overlay=document.createElement("canvas"),this.overlay.className="sim-overlay",t.screen.append(this.canvas,this.overlay),this.ctx=this.canvas.getContext("2d"),this.octx=this.overlay.getContext("2d");const e=t.landmarks,n=(a,o)=>e[a]&&e[o]?[e[a],e[o]]:null,i=[["pelvis","neck","torso"],["neck","head","Шея"],["head","headTop","Голова"],["shoulderR","elbowR","Правое плечо"],["elbowR","wristR","Правое предплечье"],["wristR","middleFingerBaseR","Правая кисть"],["shoulderL","elbowL","Левое плечо"],["elbowL","wristL","Левое предплечье"],["wristL","middleFingerBaseL","Левая кисть"],["hipR","kneeR","Правое бедро"],["kneeR","ankleR","Правая голень"],["ankleR","toeR","Правая стопа"],["hipL","kneeL","Левое бедро"],["kneeL","ankleL","Левая голень"],["ankleL","toeL","Левая стопа"]];for(const[a,o,l]of i){const c=n(a,o);c&&(this.segments.push(c),this.segmentNames.push(l))}t.view.host.addEventListener("pointerdown",this.onDown,{capture:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),this.overlay.addEventListener("pointermove",this.onImageHover),this.overlay.addEventListener("pointerdown",this.onImageDown),this.overlay.addEventListener("pointerleave",()=>(this.hoverText="",this.renderPanel())),new ResizeObserver(()=>this.active&&this.drawOverlay()).observe(t.screen),document.addEventListener("keydown",this.onKey)}anatomy=null;active=!1;contact=null;normal=[0,1,0];rotate=0;tilt=0;rock=0;underside=!1;depthCm=4;gain=1;showLabels=!0;labelMode="key";resolution=1;map=null;plane=null;lastRenderMs=0;renderTimes=[];canvas;overlay;ctx;octx;segments=[];segmentNames=[];dirty=!1;dragging=null;tap=null;hoverText="";highlight=null;task=null;draft=[];feedback=null;attempts=[];async enter(){if(this.active=!0,document.body.classList.add("sim-mode"),this.d.setRecordedInputEnabled(!1),this.setFigureForSim(!0),!this.anatomy){this.d.status.dataset.s="loading",this.d.status.textContent="Загрузка анатомии…";try{this.anatomy=await Uy(this.d.baseUrl,t=>this.d.status.textContent=`Загрузка анатомии ${Math.round(t*100)}%`),this.anatomy.meta.probePresets={...ky(this.anatomy),...this.anatomy.meta.probePresets??{}}}catch(t){this.d.status.dataset.s="error",this.d.status.textContent="Ошибка данных: "+t.message;return}}this.contact||this.placeDefault(),this.dirty=!0,this.renderPanel(),this.renderInfo()}exit(){this.active=!1,document.body.classList.remove("sim-mode"),this.d.setRecordedInputEnabled(!0),this.setFigureForSim(!1),this.underside&&this.setUnderside(!1),this.task=null,this.draft=[],this.feedback=null}setFigureForSim(t){this.d.view.human.root.traverse(e=>{const n=e.name,i=e.isMesh&&e.parent&&e.parent.name!=="human"&&e.parent.name!=="Scene"?e.parent.name:n;(i==="Clothes"||n==="Clothes")&&(e.visible=!t),(i==="Body"||n==="Body")&&(e.visible=!t),(i==="BodyFull"||n==="BodyFull"||i==="Briefs"||n==="Briefs")&&(e.visible=t)});for(const e of["sweep-marker","sweep-zone-hit"]){const n=this.d.view.scene.getObjectByName(e);n&&(n.visible=!t)}}visibleSkinMeshes(){const t=[];return this.d.view.human.root.traverseVisible(e=>{e.isMesh&&!e.name.endsWith("-fringe")&&t.push(e)}),t}placeDefault(){const t=this.d.landmarks,e=t.elbowR,n=t.wristR,i=new P(e[0]+(n[0]-e[0])*.5,e[1]+(n[1]-e[1])*.5+.3,e[2]+(n[2]-e[2])*.5);this.d.view.human.root.updateMatrixWorld(!0);const a=new Pn(i,new P(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];a&&this.setContactFromHit(a)}resetProbe(){this.underside&&this.setUnderside(!1),this.rotate=0,this.tilt=0,this.rock=0,this.depthCm=4,this.presetName="",this.placeDefault(),this.dirty=!0,this.renderPanel()}placeAt(t,e){this.d.view.human.root.updateMatrixWorld(!0);const i=new Pn(new P(t,.8,e),new P(0,-1,0)).intersectObjects(this.visibleSkinMeshes(),!1)[0];return i&&this.setContactFromHit(i),!!i}placeOnSkin(t,e){this.d.view.human.root.updateMatrixWorld(!0);const n=new P(...e).normalize(),r=new Pn(new P(...t).addScaledVector(n,-.3),n).intersectObjects(this.visibleSkinMeshes(),!1)[0];return r&&this.setContactFromHit(r),!!r}placeOnSurface(t,e,n,i){this.d.view.human.root.updateMatrixWorld(!0);const a=new Pn(new P(t,e,n),new P(...i).normalize()).intersectObjects(this.visibleSkinMeshes(),!1)[0];return a&&this.setContactFromHit(a),!!a}placeFrom(t,e,n){this.d.view.human.root.updateMatrixWorld(!0);const i=n==="ventral"?[t,.8,e]:n==="dorsal"?[t,-.5,e]:n==="right"?[t,e,-.9]:[t,e,.9],r=n==="ventral"?[0,-1,0]:n==="dorsal"?[0,1,0]:n==="right"?[0,0,1]:[0,0,-1],o=new Pn(new P(...i),new P(...r)).intersectObjects(this.visibleSkinMeshes(),!1)[0];return o&&this.setContactFromHit(o),!!o}placeFromPoint(t,e){this.d.view.human.root.updateMatrixWorld(!0);const n=new P(e[0],e[1],e[2]).normalize(),i=new P(t[0],t[1],t[2]),r=i.clone().addScaledVector(n,.5),o=new Pn(r,n.clone().negate(),0,1).intersectObjects(this.visibleSkinMeshes(),!1).filter(l=>l.face.normal.clone().applyMatrix3(new $t().getNormalMatrix(l.object.matrixWorld)).dot(n)>0).sort((l,c)=>l.point.distanceTo(i)-c.point.distanceTo(i))[0];return o&&this.setContactFromHit(o),!!o}setUnderside(t){this.underside=t;const e=this.d.view.scene.getObjectByName("table");e&&(e.visible=!t),this.d.view.controls.maxPolarAngle=Math.PI*(t?.95:.495),this.renderPanel()}setContactFromHit(t){const e=new $t().getNormalMatrix(t.object.matrixWorld),n=t.face.normal.clone().applyMatrix3(e).normalize();this.contact=t.point.toArray(),this.normal=n.toArray(),this.dirty=!0}ray=new Pn;pick(t,e,n){const i=this.d.view.renderer.domElement.getBoundingClientRect();return this.ray.setFromCamera(new pt((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.d.view.camera),this.ray.intersectObjects(n,!1)[0]}onDown=t=>{if(!(!this.active||t.button!==0&&t.pointerType==="mouse")&&t.target===this.d.view.renderer.domElement){if(this.d.probe.group.visible&&this.pick(t.clientX,t.clientY,this.d.probe.grabTargets)){this.dragging=t.pointerId,this.d.view.controls.enabled=!1,this.d.probe.setActive(!0),t.preventDefault(),t.stopPropagation();return}this.tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp}}};pendingMove=null;onMove=t=>{this.active&&(this.tap&&this.tap.id===t.pointerId&&Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>7&&(this.tap=null),this.dragging===t.pointerId&&(this.pendingMove={x:t.clientX,y:t.clientY}))};onUp=t=>{if(!this.active)return;if(this.dragging===t.pointerId){this.flushMove(),this.dragging=null,this.d.view.controls.enabled=!0,this.d.probe.setActive(!1);return}const e=this.tap;if(this.tap=null,e&&e.id===t.pointerId&&t.timeStamp-e.t<450&&t.type==="pointerup"){const n=this.pick(t.clientX,t.clientY,this.visibleSkinMeshes());n&&this.setContactFromHit(n)}};flushMove(){if(!this.pendingMove)return;const t=this.pendingMove;this.pendingMove=null;const e=this.pick(t.x,t.y,this.visibleSkinMeshes());e&&this.setContactFromHit(e)}onKey=t=>{if(!this.active)return;const e=t.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))){if(this.task?.answer==="contour"&&!this.feedback){if(t.key==="Enter")return this.submitContour();if(t.key==="Escape")return this.draft=[],this.drawOverlay();if(t.key==="Backspace")return this.draft.pop(),this.drawOverlay()}t.key==="q"||t.key==="й"?this.setRotate(this.rotate-5):t.key==="e"||t.key==="у"?this.setRotate(this.rotate+5):t.key==="w"||t.key==="ц"?this.setTilt(this.tilt+3):t.key==="s"||t.key==="ы"?this.setTilt(this.tilt-3):t.key==="a"||t.key==="ф"?this.setRock(this.rock-3):(t.key==="d"||t.key==="в")&&this.setRock(this.rock+3)}};setRotate(t){this.rotate=Math.max(-90,Math.min(90,t)),this.dirty=!0,this.renderPanel()}applyPreset(t){const e=this.anatomy?.meta.probePresets?.[t];return!e||!(e.point&&e.dir?this.placeFromPoint(e.point,e.dir):this.placeAt(e.x,e.z))?!1:(this.presetName=t,this.depthCm=e.depthCm,e.point&&e.dir&&e.dir[1]<0&&(this.underside||this.setUnderside(!0),this.contact&&this.d.view.focusOn(new P(...this.contact),new P(...this.normal),.5)),this.tilt=Math.max(-30,Math.min(30,e.tiltDeg??0)),this.rock=Math.max(-20,Math.min(20,e.rockDeg??0)),this.setRotate(e.rotateDeg),!0)}presetName="";setTilt(t){this.tilt=Math.max(-30,Math.min(30,t)),this.dirty=!0,this.renderPanel()}setRock(t){this.rock=Math.max(-20,Math.min(20,t)),this.dirty=!0,this.renderPanel()}setDepth(t){this.depthCm=Math.max(2,Math.min(15,t)),this.dirty=!0,this.renderPanel()}tick(){if(!this.active||!this.anatomy||(this.flushMove(),!this.dirty||!this.contact))return;this.dirty=!1;const t=performance.now(),e=zy(this.contact,this.segments,this.normal),n=Math.round(40*po*this.resolution),i=Math.round(this.depthCm*10*po*this.resolution),r=By(this.contact,this.normal,e,this.rotate,this.tilt,{widthM:.04,depthM:this.depthCm/100,W:n,H:i},this.rock);this.plane=r,this.map=jy(this.anatomy,r);const a=sb(this.anatomy,this.map,r,{...td,gain:this.gain});this.canvas.width=n,this.canvas.height=i;const o=this.ctx.createImageData(n,i);for(let l=0;l<a.length;l++)o.data[l*4]=o.data[l*4+1]=o.data[l*4+2]=a[l],o.data[l*4+3]=255;this.ctx.putImageData(o,0,0),this.d.probe.setPose(this.contact,[-r.depth[0],-r.depth[1],-r.depth[2]],this.crossV(r.lateral,[-r.depth[0],-r.depth[1],-r.depth[2]]),!0),this.lastRenderMs=performance.now()-t,this.lastRenderMs>90&&this.resolution>.5&&(this.resolution=Math.max(.5,this.resolution*.8)),this.renderTimes.push(this.lastRenderMs),this.renderTimes.length>200&&this.renderTimes.shift(),this.d.status.dataset.s="ready",this.d.status.textContent="Готово",this.task&&!this.feedback&&this.map.present.includes(this.task.structure),this.drawOverlay(),this.renderPanel(),this.d.onChange?.()}crossV(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}structuresInImage(){if(!this.map||!this.anatomy)return[];const t=new Map,{W:e,label:n}=this.map;for(let i=0;i<n.length;i++){const r=n[i];if(r<2)continue;const a=t.get(r-2)??{n:0,sx:0,sy:0};a.n++,a.sx+=i%e,a.sy+=Math.floor(i/e),t.set(r-2,a)}return[...t.entries()].map(([i,r])=>({s:this.anatomy.structures[i],area:r.n,cx:r.sx/r.n,cy:r.sy/r.n})).filter(i=>i.area>=6).sort((i,r)=>r.area-i.area)}drawOverlay(){const t=this.map;if(!t||!this.anatomy)return;const e=this.overlay.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,Math.round(e.width*n)),r=Math.max(1,Math.round(e.height*n));(this.overlay.width!==i||this.overlay.height!==r)&&(this.overlay.width=i,this.overlay.height=r);const a=Math.min(i/t.W,r/t.H),o=(i-t.W*a)/2,l=(r-t.H*a)/2;this.view={k:a,ox:o,oy:l,dpr:n};const c=this.octx;c.clearRect(0,0,i,r);const h=this.showLabels&&!this.task,u=this.highlight;if(h||u!==null||this.feedback){const _=c.createImageData(t.W,t.H),y=this.feedback&&this.task?this.task.structure:null;for(let E=0;E<t.label.length;E++){const R=t.label[E];if(R<2)continue;const D=this.anatomy.structures[R-2];if(!(y!==null?D.index===y:u!==null?D.index===u:this.labelMode==="all"?D.cat!=="muscle":D.cat==="nerve"||D.cat==="vessel"))continue;const M=E%t.W,C=Math.floor(E/t.W),N=M===0||C===0||M===t.W-1||C===t.H-1||t.label[E-1]!==R||t.label[E+1]!==R||t.label[E-t.W]!==R||t.label[E+t.W]!==R,F=new zt(fo(D));_.data[E*4]=F.r*255,_.data[E*4+1]=F.g*255,_.data[E*4+2]=F.b*255,_.data[E*4+3]=N?230:55}const T=document.createElement("canvas");T.width=t.W,T.height=t.H,T.getContext("2d").putImageData(_,0,0),c.imageSmoothingEnabled=!1,c.drawImage(T,o,l,t.W*a,t.H*a)}const d=13*n,f=5*n,m=d+6*n,g=(_,y,T,E,R)=>{c.beginPath(),c.roundRect(_,y,T,E,R),c.fill()},x=[],p=(_,y,T,E)=>x.every(([R,D,b,M])=>_+T+3*n<R||R+b+3*n<_||y+E+2*n<D||D+M+2*n<y);c.font=`700 ${12*n}px Inter, "Segoe UI", system-ui, sans-serif`;const v=c.measureText("СИМУЛЯЦИЯ").width+2*f;if(x.push([o+8*n,l+8*n,v,m]),x.push([o+t.W*a-52*n,l,52*n,t.H*a]),h){c.font=`600 ${d}px Inter, "Segoe UI", system-ui, sans-serif`,c.textBaseline="middle";const _=900*(t.W/256)*(t.W/256);for(const y of this.structuresInImage()){if(this.labelMode==="key"&&y.s.cat!=="nerve"&&y.s.cat!=="vessel"&&y.s.cat!=="bone"&&!(y.s.cat==="organ"&&y.area>_*2)||y.s.cat==="muscle"&&y.area<_*1.6||y.s.cat==="joint"||y.s.cat==="organ"&&y.area<_)continue;const T=ab(y.s),E=c.measureText(T).width+2*f,R=o+y.cx*a,D=l+y.cy*a,b=Math.min(o+t.W*a-E-56*n,Math.max(o+4*n,R-E/2));let M=null;for(const C of[0,m,-m,2*m,-2*m]){const N=Math.min(l+t.H*a-m-2*n,Math.max(l+2*n,D-m/2+C));if(p(b,N,E,m)){M=N;break}}M!==null&&(x.push([b,M,E,m]),c.fillStyle="rgba(6, 9, 12, .78)",g(b,M,E,m,4*n),c.fillStyle=fo(y.s),c.fillText(T,b+f,M+m/2+.5*n))}}c.fillStyle="rgba(235,240,245,.9)",c.font=`600 ${12*n}px Inter, "Segoe UI", system-ui, sans-serif`,c.textBaseline="middle",c.textAlign="right";for(let _=0;_<=this.depthCm*10;_+=5){const y=l+_/(this.depthCm*10)*t.H*a,T=_%10===0,E=(T?10:5)*n;c.fillRect(o+t.W*a-E,y-n,E,2*n),T&&_>0&&c.fillText(`${_/10} см`,o+t.W*a-E-4*n,y)}if(c.textAlign="left",c.fillStyle="rgba(6, 9, 12, .78)",g(o+8*n,l+8*n,v,m,4*n),c.fillStyle="#ffc93d",c.font=`700 ${12*n}px Inter, "Segoe UI", system-ui, sans-serif`,c.fillText("СИМУЛЯЦИЯ",o+8*n+f,l+8*n+m/2+.5*n),this.draft.length&&this.drawPoly(this.draft,"#ffffff",!1),this.feedback?.polygon&&this.drawPoly(this.feedback.polygon,this.feedback.hit?"#3ddc84":"#ff5a5f",!0),this.feedback?.click){const[_,y]=this.feedback.click,T=o+_*a,E=l+y*a,R=6*n;c.strokeStyle=this.feedback.hit?"#3ddc84":"#ff5a5f",c.lineWidth=3*n,c.beginPath(),c.moveTo(T-R,E-R),c.lineTo(T+R,E+R),c.moveTo(T+R,E-R),c.lineTo(T-R,E+R),c.stroke()}}view={k:1,ox:0,oy:0,dpr:1};drawPoly(t,e,n){const i=this.octx,{k:r,ox:a,oy:o,dpr:l}=this.view;i.strokeStyle=e,i.lineWidth=2.5*l,i.setLineDash(n?[]:[6*l,4*l]),i.beginPath(),t.forEach(([c,h],u)=>u?i.lineTo(a+c*r,o+h*r):i.moveTo(a+c*r,o+h*r)),n&&i.closePath(),i.stroke(),i.setLineDash([]),i.fillStyle=e;for(const[c,h]of t)i.fillRect(a+c*r-3*l,o+h*r-3*l,6*l,6*l)}imagePoint(t){if(!this.map)return null;const e=this.overlay.getBoundingClientRect(),n=Math.min(e.width/this.map.W,e.height/this.map.H),i=e.left+(e.width-this.map.W*n)/2,r=e.top+(e.height-this.map.H*n)/2,a=(t.clientX-i)/n,o=(t.clientY-r)/n;return a<0||o<0||a>this.map.W||o>this.map.H?null:[a,o]}imageToScreen(t,e){if(!this.map)return null;const n=this.overlay.getBoundingClientRect(),i=Math.min(n.width/this.map.W,n.height/this.map.H);return{x:n.left+(n.width-this.map.W*i)/2+t*i,y:n.top+(n.height-this.map.H*i)/2+e*i}}onImageHover=t=>{const e=this.imagePoint(t);if(!e||!this.map||!this.anatomy||this.task)return;const n=ho(this.map,e[0],e[1]),i=n===null?this.map.label[Math.floor(e[1])*this.map.W+Math.floor(e[0])]===1?"подкожная клетчатка / мягкие ткани":"":`${Zi(this.anatomy.structures[n])} · ${Hh[this.anatomy.structures[n].cat]??""}`,r=(e[1]/this.map.H*this.depthCm*10).toFixed(1);this.hoverText=i?`${i} · глубина ${r} мм`:"",this.renderPanel()};onImageDown=t=>{const e=this.imagePoint(t);if(!(!e||!this.task||this.feedback||!this.map))if(this.task.answer==="point"){const n=ho(this.map,e[0],e[1]);let i=n===this.task.structure;if(!i){const o=Math.ceil(po*.5);for(let l=-o;l<=o&&!i;l++)for(let c=-o;c<=o&&!i;c++)i=ho(this.map,e[0]+c,e[1]+l)===this.task.structure}const r=Zi(this.anatomy.structures[this.task.structure]),a=n!==null&&n!==this.task.structure?`Это: ${Zi(this.anatomy.structures[n])}.`:"";this.finishTask(i,i?`Верно: ${r}.`:`Мимо. ${a} Правильная структура подсвечена.`,null,e,null)}else{if(this.draft.length>=3&&Math.hypot(e[0]-this.draft[0][0],e[1]-this.draft[0][1])<4)return this.submitContour();this.draft.push(e),this.drawOverlay(),this.renderPanel()}};startTask(t){const e=this.structuresInImage().filter(i=>rb.has(i.s.cat)&&i.area>=(t==="contour"?60:20));if(!e.length){this.task=null,this.feedback={hit:!1,text:"В этом срезе нет нервов, сосудов или костей для задания — переместите датчик.",polygon:null,click:null},this.renderPanel();return}const n=e[Math.floor(Math.random()*Math.min(e.length,6))];this.task={structure:n.s.index,answer:t,started:performance.now()},this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}submitContour(){if(!this.task||!this.map||this.draft.length<3)return;const t=this.draft;this.draft=[];const{W:e,H:n,label:i}=this.map;let r=0,a=0,o=0;for(let d=0;d<n;d++)for(let f=0;f<e;f++){const m=i[d*e+f]===this.task.structure+2,g=ua(f+.5,d+.5,t);m&&r++,g&&a++,m&&g&&o++}const l=r+a?2*o/(r+a):0,c=l>=.6,[h,u]=Li(t);this.finishTask(c,`${c?"Верно":"Неточно"}: совпадение с эталонной маской (Дайс) ${l.toFixed(2)} при пороге 0.6.`,t,[h,u],l)}finishTask(t,e,n,i,r){!this.task||!this.anatomy||(this.attempts.push({structure:Zi(this.anatomy.structures[this.task.structure]),answer:this.task.answer,hit:t,score:r}),this.feedback={hit:t,text:e,polygon:n,click:i},this.drawOverlay(),this.renderPanel())}endTask(){this.task=null,this.feedback=null,this.draft=[],this.drawOverlay(),this.renderPanel()}ui=null;listKey="";taskKey="";buildPanel(){const t=this.d.panel,e=(v,_,y,T,E,R,D,b)=>{const M=_t("input",{id:_,type:"range",min:String(y),max:String(T),step:String(E),"aria-label":v}),C=_t("output",{for:_});return M.addEventListener("input",()=>b(Number(M.value))),{root:_t("label",{class:"field",title:D},_t("span",{class:"field-head"},_t("span",{},v),C),M),input:M,out:C,fmt:R}},n=e("Поворот","simRot",-90,90,1,v=>`${v>0?"+":""}${v}°`,"Вращение датчика вокруг его оси: 0° — поперёк конечности/тела, ±90° — вдоль. Клавиши Q / E.",v=>this.setRotate(v)),i=e("Наклон","simTilt",-30,30,1,v=>`${v>0?"+":""}${v}°`,"Наклон датчика (веерное движение) поперёк плоскости изображения. Клавиши W / S.",v=>this.setTilt(v)),r=e("Покачивание","simRock",-20,20,1,v=>`${v>0?"+":""}${v}°`,"Покачивание «пятка–носок» в плоскости изображения. Клавиши A / D.",v=>this.setRock(v)),a=e("Глубина","simDepth",2,15,.5,v=>`${v.toLocaleString("ru-RU")} см`,"Глубина изображения — сколько сантиметров ткани под датчиком видно на экране.",v=>this.setDepth(v)),o=e("Усиление","simGain",.4,2.5,.05,v=>`${Math.round(v*100)} %`,"Общее усиление (яркость) эхосигнала. 100 % — исходное.",v=>(this.gain=v,this.dirty=!0,this.renderPanel())),l=_t("button",{type:"button",id:"simTrans",title:"Датчик поперёк оси конечности или тела (поперечный срез, 0°)"},"Поперёк"),c=_t("button",{type:"button",id:"simLong",title:"Датчик вдоль оси конечности или тела (продольный срез, 90°)"},"Вдоль");l.addEventListener("click",()=>this.setRotate(0)),c.addEventListener("click",()=>this.setRotate(90));const h=_t("input",{type:"checkbox",id:"simUnder"});h.addEventListener("change",()=>this.setUnderside(h.checked));const u=_t("select",{id:"simLabelMode"},_t("option",{value:"none"},"Нет"),_t("option",{value:"key"},"Главные (нервы, сосуды, кости)"),_t("option",{value:"all"},"Все структуры"));u.addEventListener("change",()=>{this.labelMode=u.value,this.showLabels=this.labelMode!=="none",this.drawOverlay()});const d=this.buildPresetSelect(),f=_t("div",{class:"ann"}),m=_t("span",{class:"count"}),g=_t("ul",{class:"ann-list"}),x=_t("button",{type:"button",id:"simTaskPoint",class:"primary",title:"Программа называет структуру из текущего среза — щёлкните по ней на изображении"},"Отметить структуру"),p=_t("button",{type:"button",id:"simTaskContour",title:"Программа называет структуру — обведите её щелчками по границе, замкните контур клавишей Enter"},"Обвести структуру");x.addEventListener("click",()=>this.startTask("point")),p.addEventListener("click",()=>this.startTask("contour")),t.replaceChildren(...[d?_t("section",{class:"card","aria-labelledby":"simPresetTitle"},_t("h2",{class:"card-title",id:"simPresetTitle"},"Положение датчика"),_t("label",{class:"field",title:"Ставит датчик в типичную точку доступа для блокады с подходящими поворотом, наклоном и глубиной. Дальше датчик можно двигать как обычно."},_t("span",{class:"field-label"},"Готовые положения (блокады)"),d),_t("p",{class:"field-help"},"Или щёлкните по коже пациента слева — датчик встанет в эту точку.")):null,_t("section",{class:"card","aria-labelledby":"simProbeTitle"},_t("h2",{class:"card-title",id:"simProbeTitle"},"Датчик"),_t("div",{class:"seg",role:"group","aria-label":"Ориентация датчика"},l,c),n.root,i.root,r.root,_t("label",{class:"switch",title:"Скрыть стол и разрешить камере опуститься под пациента: задняя поверхность бедра, подколенная ямка, спина"},_t("span",{},"Вид снизу (под столом)"),h),_t("p",{class:"keys"},"Клавиши: ",Ji("Q"),"/",Ji("E")," поворот · ",Ji("W"),"/",Ji("S")," наклон · ",Ji("A"),"/",Ji("D")," покачивание")),_t("section",{class:"card","aria-labelledby":"simImageTitle"},_t("h2",{class:"card-title",id:"simImageTitle"},"Изображение"),a.root,o.root,_t("label",{class:"field",title:"Какие структуры подписывать и обводить цветом на изображении. Название любой структуры также показывается при наведении курсора."},_t("span",{class:"field-label"},"Подписи структур"),u)),_t("section",{class:"card","aria-labelledby":"simTrainTitle"},_t("h2",{class:"card-title",id:"simTrainTitle"},"Обучение"),_t("div",{class:"card-row"},x,p),f),_t("details",{class:"card card-collapsible",id:"simStructures"},_t("summary",{class:"card-title",title:"Все структуры, попавшие в текущий срез. Наведите на строку — структура подсветится на изображении."},_t("span",{},"Структуры в срезе",m)),g)].filter(Boolean)),this.ui={rot:n,tilt:i,rock:r,depth:a,gain:o,trans:l,long:c,under:h,labels:u,preset:d,task:f,listCount:m,list:g}}buildPresetSelect(){const t=this.anatomy?.meta.probePresets??{},e=Object.keys(t);if(!e.length)return null;const n=o=>/^(ISB|SCB|ICB|AX)/.test(o)?"Верхняя конечность и шея":/^(ESP|PSO|TLI|QL)/.test(o)?"Спина (вид снизу)":/^(TAP|RS)/.test(o)?"Передняя брюшная стенка":/^(PENG|FEM|FICB)/.test(o)?"Тазобедренный сустав и пах":/^(POP|SCI|ADD)/.test(o)?"Нижняя конечность":"Другие",i={PENGR:"PENG справа — перикапсулярная блокада, поперечно над лобковой ветвью",PENGL:"PENG слева — перикапсулярная блокада, поперечно над лобковой ветвью"},r=new Map;for(const o of e)r.set(n(o),[...r.get(n(o))??[],o]);const a=_t("select",{id:"simPreset","aria-label":"Готовые положения датчика (блокады)"},_t("option",{value:""},"— Свободное положение —"),...[...r.entries()].map(([o,l])=>_t("optgroup",{label:o},...l.map(c=>_t("option",{value:c},t[c].ru??i[c]??c)))));return a.addEventListener("change",()=>{a.value&&this.applyPreset(a.value)}),a}renderPanel(){if(!this.active||!this.anatomy)return;this.ui||this.buildPanel();const t=this.ui,e=(h,u)=>{(document.activeElement!==h.input||h.input.value!==String(u))&&(h.input.value=String(u)),ps(h.input),h.out.textContent=h.fmt(u)};e(t.rot,this.rotate),e(t.tilt,this.tilt),e(t.rock,this.rock),e(t.depth,this.depthCm),e(t.gain,this.gain);const n=Math.abs(this.rotate)<1,i=Math.abs(Math.abs(this.rotate)-90)<1;t.trans.classList.toggle("active",n),t.long.classList.toggle("active",i),t.trans.setAttribute("aria-pressed",String(n)),t.long.setAttribute("aria-pressed",String(i)),t.under.checked=this.underside,t.labels.value=this.labelMode,t.preset&&document.activeElement!==t.preset&&(t.preset.value=this.presetName),this.d.hover&&(this.d.hover.textContent=this.hoverText,this.d.hover.hidden=!this.hoverText);const r=this.feedback,a=this.task,o=JSON.stringify([a?.structure,a?.answer,r?.text,this.draft.length,this.attempts.length]);if(o!==this.taskKey){this.taskKey=o;const h=this.attempts.filter(u=>u.hit).length;t.task.replaceChildren(...[a?_t("p",{class:"task-title",dataset:{testid:"sim-task"}},a.answer==="contour"?"Обведите: ":"Отметьте щелчком: ",_t("b",{},Zi(this.anatomy.structures[a.structure])),a.answer==="contour"&&!r?_t("span",{class:"ann-note"},` · вершин ${this.draft.length}; замкнуть — Enter или щелчок по первой`):null):r?null:_t("p",{class:"ann-note"},"Программа выберет нерв, сосуд или кость из текущего среза и проверит ответ по анатомии модели."),r?_t("p",{class:r.hit?"fb ok":"fb bad",dataset:{testid:"sim-feedback"}},r.text):null,a?_t("div",{class:"card-row"},a.answer==="contour"&&!r?(()=>{const u=_t("button",{type:"button",id:"simDone",class:"primary"},"Готово");return u.disabled=this.draft.length<3,u.addEventListener("click",()=>this.submitContour()),u})():null,(()=>{const u=_t("button",{type:"button",id:"simEnd"},"Закончить");return u.addEventListener("click",()=>this.endTask()),u})()):null,this.attempts.length?_t("p",{class:"score",dataset:{testid:"sim-score"}},"Результат: ",_t("b",{},`${h} из ${this.attempts.length}`),` (${Math.round(h/this.attempts.length*100)} %)`):null].filter(Boolean))}const l=this.structuresInImage().filter(h=>h.s.cat!=="muscle"||h.area>400),c=l.map(h=>h.s.index).join(",");c!==this.listKey&&(this.listKey=c,t.listCount.textContent=`(${l.length})`,t.list.replaceChildren(...l.slice(0,40).map(h=>{const u=_t("li",{},_t("span",{class:"sw",style:`background:${fo(h.s)}`}),`${Zi(h.s)} · ${Hh[h.s.cat]??""}`);return u.addEventListener("mouseenter",()=>(this.highlight=h.s.index,this.drawOverlay())),u.addEventListener("mouseleave",()=>(this.highlight=null,this.drawOverlay())),u}))),this.d.onChange?.()}regionName(){if(!this.contact)return"";const t=this.contact;let e=-1,n=1/0,i=0;this.segments.forEach(([a,o],l)=>{const c=[o[0]-a[0],o[1]-a[1],o[2]-a[2]],h=c[0]**2+c[1]**2+c[2]**2||1,u=Math.max(0,Math.min(1,((t[0]-a[0])*c[0]+(t[1]-a[1])*c[1]+(t[2]-a[2])*c[2])/h)),d=Math.hypot(t[0]-a[0]-c[0]*u,t[1]-a[1]-c[1]*u,t[2]-a[2]-c[2]*u);d<n&&(n=d,e=l,i=u)});const r=this.segmentNames[e]??"";return r==="torso"?this.normal[1]<-.35?i<.5?"Спина, поясничный отдел":"Спина, грудной отдел":i<.22?"Таз и паховая область":i<.55?"Живот":i<.9?"Грудная клетка":"Шея, надключичная область":r}renderInfo(){const t=this.anatomy;if(!t)return;const e=t.meta.source,n=_t("a",{href:e.url,target:"_blank",rel:"noopener"},"источник");this.d.info.replaceChildren(_t("p",{class:"sim-warn"},"Симуляция по 3D-анатомии — не запись аппарата, не для диагностики."),_t("dl",{},_t("dt",{},"Тип изображения"),_t("dd",{},"расчётное (симуляция) из размеченной 3D-анатомии"),_t("dt",{},"Ширина поля"),_t("dd",{},"40 мм, линейный датчик"),_t("dt",{},"Анатомия"),_t("dd",{},`${e.attribution}. Лицензия производной анатомии — CC BY-SA 4.0 (`,n,")."),_t("dt",{},"Изменения"),_t("dd",{},String(e.modifications)),_t("dt",{},"Исключено"),_t("dd",{},String(e.excluded)),_t("dt",{},"Ограничения"),_t("dd",{},"Анатомия одного тела, подогнанная к фигуре по суставам. Радиусы нервов — типичные значения, требуют экспертной проверки.")),_t("p",{class:"source",id:"simMissing"},"Нет в модели (нет в источнике): поверхностное шейное сплетение, диафрагмальный нерв."))}debug(){const t=this.structuresInImage();return{active:this.active,loaded:!!this.anatomy,contact:this.contact,rotate:this.rotate,tilt:this.tilt,rock:this.rock,underside:this.underside,preset:this.presetName,normal:this.normal,depthCm:this.depthCm,size:this.map?[this.map.W,this.map.H]:null,present:t.map(e=>({name:e.s.name,side:e.s.side,cat:e.s.cat,area:e.area,cx:e.cx,cy:e.cy,index:e.s.index})),task:this.task?{structure:this.anatomy.structures[this.task.structure].name,index:this.task.structure,answer:this.task.answer}:null,attempts:this.attempts,renderMs:this.lastRenderMs,renderTimes:[...this.renderTimes],maskCentroid:e=>{const n=t.find(i=>i.s.index===e);return n?[n.cx,n.cy]:null}}}maskBoxPolygon(t){if(!this.map)return null;let e=1/0,n=1/0,i=-1/0,r=-1/0;for(let a=0;a<this.map.label.length;a++)if(this.map.label[a]===t+2){const o=a%this.map.W,l=Math.floor(a/this.map.W);e=Math.min(e,o),n=Math.min(n,l),i=Math.max(i,o+1),r=Math.max(r,l+1)}return isFinite(e)?[[e,n],[i,n],[i,r],[e,r]]:null}}function cb(s,t,e,n,i){const r=i.roi??{x:0,y:0,width:s,height:t};let a=e/r.width,o=n/r.height,l=0,c=0;if(i.resize.mode==="letterbox"){const h=Math.min(a,o);a=o=h,l=(e-r.width*h)/2,c=(n-r.height*h)/2}return{roiX:r.x,roiY:r.y,roiW:r.width,roiH:r.height,scaleX:a,scaleY:o,offX:l,offY:c,inW:e,inH:n}}function id(s,t,e){return[(t-s.offX)/s.scaleX+s.roiX,(e-s.offY)/s.scaleY+s.roiY]}function lb(s,t,e,n){const{inW:i,inH:r}=t,a=n&&n.length===i*r?n:new Float32Array(i*r),[o,l,c]=e.grayscale?.weights??[.299,.587,.114],h=e.resize.padValue??0,u=e.normalize?.mean??0,d=e.normalize?.std??1,f=e.resize.interpolation==="nearest",m=s.width,g=s.height,x=s.data,p=(R,D)=>{const b=(D*m+R)*4;return(o*x[b]+l*x[b+1]+c*x[b+2])/255},v=Math.max(0,Math.floor(t.roiX)),_=Math.max(0,Math.floor(t.roiY)),y=Math.min(m,Math.ceil(t.roiX+t.roiW))-1,T=Math.min(g,Math.ceil(t.roiY+t.roiH))-1,E=(R,D,b)=>R<D?D:R>b?b:R;for(let R=0;R<r;R++)for(let D=0;D<i;D++){const[b,M]=id(t,D+.5,R+.5);let C;if(b<t.roiX||M<t.roiY||b>t.roiX+t.roiW||M>t.roiY+t.roiH)C=h;else if(f)C=p(E(Math.floor(b),v,y),E(Math.floor(M),_,T));else{const N=b-.5,F=M-.5,H=Math.floor(N),k=Math.floor(F),W=N-H,K=F-k,G=E(H,v,y),tt=E(H+1,v,y),it=E(k,_,T),st=E(k+1,_,T);C=(p(G,it)*(1-W)+p(tt,it)*W)*(1-K)+(p(G,st)*(1-W)+p(tt,st)*W)*K}a[R*i+D]=(C-u)/d}return a}function hb(s,t,e){if(t.length!==4||t[0]!==1)throw new Error(`Выход модели: ожидается [1,C,H,W], получено [${t.join(",")}]`);const[,n,i,r]=t,a=i*r;if(s.length!==n*a)throw new Error("Выход модели: размер данных не совпадает с dims");const o=new Float32Array(n*a);if(e==="sigmoid")for(let l=0;l<o.length;l++)o[l]=1/(1+Math.exp(-s[l]));else for(let l=0;l<a;l++){let c=-1/0;for(let u=0;u<n;u++)c=Math.max(c,s[u*a+l]);let h=0;for(let u=0;u<n;u++){const d=Math.exp(s[u*a+l]-c);o[u*a+l]=d,h+=d}for(let u=0;u<n;u++)o[u*a+l]/=h}return{prob:o,C:n,H:i,W:r}}function ub(s,t,e,n){const{prob:i,C:r,H:a,W:o}=s,l=a*o,c=new Uint8Array(l);let h=0,u=0;for(let d=0;d<l;d++){const f=i[t*l+d];if(!(f<e)){if(n==="softmax"){let m=!0;for(let g=0;g<r;g++)g!==t&&i[g*l+d]>f&&(m=!1);if(!m)continue}c[d]=1,h++,u+=f}}return{mask:c,count:h,mean:h?u/h:null}}const db=[1,0,-1,0],fb=[0,1,0,-1];function pb(s,t,e){const n=t+1,i=new Uint8Array(n*(e+1)*4),r=(l,c)=>l>=0&&c>=0&&l<t&&c<e&&s[c*t+l]===1;let a=0;for(let l=0;l<e;l++)for(let c=0;c<t;c++)r(c,l)&&(r(c,l-1)||(i[(l*n+c)*4+0]=1,a++),r(c+1,l)||(i[(l*n+c+1)*4+1]=1,a++),r(c,l+1)||(i[((l+1)*n+c+1)*4+2]=1,a++),r(c-1,l)||(i[((l+1)*n+c)*4+3]=1,a++));const o=[];if(!a)return o;for(let l=0;l<i.length;l++){if(!i[l])continue;const c=l>>2;let h=c%n,u=c/n|0,d=l&3;const f=[],m=h,g=u,x=d;for(let p=0;p<=a;p++){i[(u*n+h)*4+d]=0,h+=db[d],u+=fb[d];const v=(u*n+h)*4,_=h===m&&u===g;let y=-1;for(const T of[d+1&3,d,d+3&3])if(i[v+T]||_&&T===x){y=T;break}if(y!==d&&f.push([h,u]),y<0||_&&y===x)break;d=y}f.length>=3&&o.push({points:f,area:mb(f)})}return o}function mb(s){let t=0;for(let e=0;e<s.length;e++){const[n,i]=s[e],[r,a]=s[(e+1)%s.length];t+=n*a-r*i}return t/2}function xb(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const[a,o]=e[i],[l,c]=e[r];o>t!=c>t&&s<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function gb(s){const[t,e]=s[0],[n,i]=s[1],r=Math.sign(n-t),a=Math.sign(i-e);return[t+r*.5+a*.5,e+a*.5-r*.5]}function _b(s){const e=s.filter(n=>n.area>0).sort((n,i)=>n.area-i.area).map(n=>({ring:n,holes:[]}));for(const n of s.filter(i=>i.area<0)){const[i,r]=gb(n.points),a=e.find(o=>xb(i,r,o.ring.points));a&&a.holes.push(n)}return e.map(n=>({outer:n.ring.points,holes:n.holes.map(i=>i.points),areaPx:n.ring.area+n.holes.reduce((i,r)=>i+r.area,0)}))}function Wh(s,t){if(t<=0||s.length<=4)return s;let e=0,n=-1;for(let l=1;l<s.length;l++){const c=(s[l][0]-s[0][0])**2+(s[l][1]-s[0][1])**2;c>n&&(n=c,e=l)}const i=l=>{if(l.length<3)return l;const[c,h]=l[0],[u,d]=l[l.length-1],f=Math.hypot(u-c,d-h)||1e-9;let m=0,g=0;for(let p=1;p<l.length-1;p++){const v=Math.abs((u-c)*(h-l[p][1])-(c-l[p][0])*(d-h))/f;v>g&&(g=v,m=p)}return g<=t?[l[0],l[l.length-1]]:[...i(l.slice(0,m+1)).slice(0,-1),...i(l.slice(m))]},r=i(s.slice(0,e+1)),a=i([...s.slice(e),s[0]]),o=[...r.slice(0,-1),...a.slice(0,-1)];return o.length>=3?o:s}function Xh(s,t,e,n){const i=t.inW/e,r=t.inH/n;return s.map(([a,o])=>id(t,a*i,o*r))}function vb(s,t,e){const n=hb(s,t,e.activation);if(n.C!==e.classes.length)throw new Error(`Выход модели: ${n.C} каналов, а в classes.json ${e.classes.length} классов`);const i=[];for(const r of e.classes){if(r.background)continue;const a=e.thresholds?.[r.id]??r.threshold??.5,o=ub(n,r.id,a,e.activation),l=o.count?_b(pb(o.mask,n.W,n.H)).filter(c=>c.areaPx>=(e.minAreaPx??0)).map(c=>({outer:Xh(Wh(c.outer,e.simplifyPx??0),e.transform,n.W,n.H),holes:c.holes.map(h=>Xh(Wh(h,e.simplifyPx??0),e.transform,n.W,n.H)),areaPx:c.areaPx})):[];i.push({classId:r.id,name:r.name,label:r.label??r.name,color:r.color,threshold:a,meanConfidence:o.mean,pixelCount:o.count,polygons:l})}return i}function sa(s){if(!s.length)return null;const t=[...s].sort((n,i)=>n-i),e=n=>t[Math.min(t.length-1,Math.max(0,Math.ceil(n*t.length)-1))];return{n:t.length,p50:e(.5),p95:e(.95),max:t[t.length-1]}}const Yr=()=>typeof performance<"u"?performance.now():Date.now();class yb{constructor(t,e){this.spec=t,this.session=e}thresholds={};stats={requested:0,completed:0,delivered:0,stale:0,errors:0};onResult=()=>{};onError=()=>{};samples=[];latest=null;seq=0;busy=!1;pending=null;transformCache=null;buf;transformFor(t,e){const n=`${t}x${e}`;return this.transformCache?.key!==n&&(this.transformCache={key:n,t:cb(t,e,this.spec.manifest.input.width,this.spec.manifest.input.height,this.spec.preprocess)}),this.transformCache.t}request(t,e){const n={frameId:t,seq:++this.seq,getImage:e};if(this.latest={frameId:t,seq:n.seq},this.stats.requested++,this.busy){this.pending=n;return}this.loop(n)}cancel(){this.latest=null,this.pending=null,this.seq++}isCurrent(t){return this.latest!==null&&this.latest.seq===t}async loop(t){this.busy=!0;let e=t;for(;e;){try{const n=e.getImage();if(n){const i=await this.runOnce(e.frameId,n);this.stats.completed++,this.isCurrent(e.seq)?(this.stats.delivered++,this.onResult(i)):this.stats.stale++}}catch(n){this.stats.errors++,this.isCurrent(e.seq)&&this.onError(n,e.frameId)}e=this.pending,this.pending=null}this.busy=!1}async runOnce(t,e){const{manifest:n,preprocess:i,classes:r}=this.spec,a=Yr(),o=this.transformFor(e.width,e.height);this.buf=lb(e,o,i,this.buf);const l=this.buf.slice(),c=Yr(),h=await this.session.run(l,[1,1,n.input.height,n.input.width]),u=Yr(),d=vb(h.data,h.dims,{activation:n.output.activation,classes:r,transform:o,simplifyPx:i.postprocess?.simplifyPx??0,minAreaPx:i.postprocess?.minAreaPx??0,thresholds:this.thresholds}),f=Yr(),m={preprocessMs:c-a,runMs:u-c,postprocessMs:f-u,totalMs:f-a};return this.samples.push(m),this.samples.length>400&&this.samples.shift(),{frameId:t,classes:d,times:m,provider:this.session.provider}}summary(){const t=e=>sa(this.samples.map(n=>n[e]));return{preprocess:t("preprocessMs"),run:t("runMs"),postprocess:t("postprocessMs"),total:t("totalMs")}}}const $h="sonolab.model/1",ss=s=>typeof s=="number"&&Number.isFinite(s);function bb(s){const t=s;if(!t||typeof t!="object")throw new Error("Манифест модели: не объект");if(t.schema!==$h)throw new Error(`Манифест модели: ожидается schema «${$h}», получено «${String(t.schema)}»`);if(t.researchOnly!==!0)throw new Error("Манифест модели: researchOnly должен быть true");for(const e of["model","classes","preprocess","name","version"])if(typeof t[e]!="string"||!t[e])throw new Error(`Манифест модели: нет поля ${e}`);if(!t.input||t.input.channels!==1||!ss(t.input.height)||!ss(t.input.width)||t.input.height<1||t.input.width<1)throw new Error("Манифест модели: input должен быть {channels: 1, height, width}");if(!t.output||t.output.activation!=="softmax"&&t.output.activation!=="sigmoid")throw new Error("Манифест модели: output.activation — softmax или sigmoid");if(t.sha256!==void 0&&!/^[0-9a-f]{64}$/i.test(t.sha256))throw new Error("Манифест модели: sha256 — 64 шестнадцатеричных знака");return t}function Mb(s){const t=s?.classes;if(!Array.isArray(t)||!t.length)throw new Error("classes.json: нет списка classes");return t.forEach((e,n)=>{if(!Number.isInteger(e.id)||e.id!==n)throw new Error(`classes.json: id должны идти подряд с 0 (позиция ${n})`);if(typeof e.name!="string"||!e.name)throw new Error(`classes.json: класс ${n} без name`);if(typeof e.color!="string")throw new Error(`classes.json: класс ${n} без color`);if(e.threshold!==void 0&&(!ss(e.threshold)||e.threshold<0||e.threshold>1))throw new Error(`classes.json: threshold класса ${n} вне [0,1]`)}),t}function Sb(s){const t=s;if(!t||!t.resize||t.resize.mode!=="stretch"&&t.resize.mode!=="letterbox")throw new Error("preprocess.json: resize.mode — stretch или letterbox");if(t.normalize&&(!ss(t.normalize.mean)||!ss(t.normalize.std)||t.normalize.std===0))throw new Error("preprocess.json: normalize {mean, std≠0}");if(t.roi&&![t.roi.x,t.roi.y,t.roi.width,t.roi.height].every(ss))throw new Error("preprocess.json: roi {x,y,width,height}");return t}async function mo(s,t){const e=await t(s);if(!e.ok)throw new Error(`Не загружен ${s}: HTTP ${e.status}`);return e.json()}async function Eb(s,t=fetch){const e=bb(await mo(s,t)),n=a=>new URL(a,s).toString(),[i,r]=await Promise.all([mo(n(e.classes),t).then(Mb),mo(n(e.preprocess),t).then(Sb)]);return{manifestUrl:s,modelUrl:n(e.model),manifest:e,classes:i,preprocess:r}}async function Tb(s){const t=await crypto.subtle.digest("SHA-256",s);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function wb(s){const t=globalThis.ort;if(t?.InferenceSession)return t;if(!s)throw new Error("onnxruntime-web не подключён: укажите ?ort=<адрес ort.webgpu.min.mjs> (см. docs/INFERENCE.md) или подключите ort глобально");const e=await import(s),n=e.InferenceSession?e:e.default;if(!n?.InferenceSession)throw new Error(`По адресу ${s} нет onnxruntime-web (нет InferenceSession)`);return n.env?.wasm&&!n.env.wasm.wasmPaths&&(n.env.wasm.wasmPaths=new URL(".",s).toString()),n}function Ab(s,t=["webgpu","wasm"]){return{async createSession(e,n){const i=[],r=typeof navigator<"u"&&"gpu"in navigator;for(const a of t){if(a==="webgpu"&&!r){i.push("webgpu: navigator.gpu отсутствует");continue}try{const o=await s.InferenceSession.create(new Uint8Array(e),{executionProviders:[a],graphOptimizationLevel:"all"}),l=n.input??o.inputNames[0],c=n.output??o.outputNames[0];return{provider:a,inputName:l,outputName:c,async run(h,u){const f=(await o.run({[l]:new s.Tensor("float32",h,u)}))[c];if(!f)throw new Error(`Модель не вернула выход ${c}`);return{data:f.data,dims:f.dims}},release:()=>o.release?.()}}catch(o){i.push(`${a}: ${o.message}`)}}throw new Error(`Не удалось создать сеанс ONNX (${i.join("; ")})`)}}}const qh="исследовательская модель, не для диагностики",jh="http://www.w3.org/2000/svg",Rb=`
#inferBox { border: 1px dashed rgba(251,191,36,.5); border-radius: 8px; padding: 8px 10px; display: grid; gap: 6px; font-size: 13px; margin-top: 4px; }
#inferBox .infer-badge { background: rgba(251,191,36,.12); color: #ffd770; border-radius: 6px; padding: 4px 8px; font-weight: 600; }
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
`;function Cb(s){const e=new URL(s).searchParams.get("model");return e?new URL(e,s).toString():null}function Pb(s){const t=e=>"M"+e.map(([n,i])=>`${n.toFixed(1)},${i.toFixed(1)}`).join("L")+"Z";return s.map(e=>t(e.outer)+e.holes.map(t).join("")).join("")}function Lb(s){const t=Cb(window.location.href);if(!t)return null;const e=new URL(window.location.href).searchParams.get("ort"),n=e?new URL(e,window.location.href).toString():null,i=document.createElement("style");i.textContent=Rb,document.head.append(i);const r=document.createElement("section");r.id="inferBox",r.setAttribute("aria-label","Исследовательская модель"),r.innerHTML=`
    <div class="infer-badge">⚠ ${qh}</div>
    <label class="infer-toggle"><input type="checkbox" id="inferToggle" /> Показать контуры модели</label>
    <div class="infer-status" id="inferStatus"></div>
    <div class="infer-classes" id="inferClasses"></div>`,s.after.insertAdjacentElement("afterend",r);const a=r.querySelector("#inferToggle"),o=r.querySelector("#inferStatus"),l=r.querySelector("#inferClasses");o.textContent=`Выключено. Модель: ${t}`;const c=document.createElementNS(jh,"svg");c.setAttribute("viewBox",`0 0 ${s.frameW} ${s.frameH}`),c.setAttribute("preserveAspectRatio","xMidYMid meet"),c.classList.add("infer-layer"),c.setAttribute("aria-label","Контуры исследовательской модели"),c.style.display="none";const h=document.createElement("div");h.className="infer-tag",h.textContent=qh,h.hidden=!0,s.screen.append(c,h);let u=null,d=null,f=!1,m=null;const g=[],x=new Map,p=()=>{const b=s.canvas.getContext("2d");return b?b.getImageData(0,0,s.canvas.width,s.canvas.height):null},v=b=>{if(c.replaceChildren(),!(!b||!f))for(const M of b.classes){if(!M.polygons.length)continue;const C=document.createElementNS(jh,"path");C.setAttribute("d",Pb(M.polygons)),C.setAttribute("fill",M.color),C.setAttribute("stroke",M.color),C.dataset.cls=M.name,c.append(C)}},_=b=>{if(u){l.replaceChildren();for(const M of u.spec.classes){if(M.background)continue;const C=b?.classes.find(K=>K.classId===M.id),N=document.createElement("div");N.className="infer-class";const F=document.createElement("i");F.style.background=M.color;const H=document.createElement("span");H.textContent=`${M.label??M.name}: ${C?.meanConfidence!=null?`уверенность ${(C.meanConfidence*100).toFixed(0)}%`:"нет"}`;const k=document.createElement("input");k.type="range",k.min="0",k.max="1",k.step="0.05",k.value=String(u.thresholds[M.id]??M.threshold??.5),k.title="Порог уверенности",k.setAttribute("aria-label",`Порог уверенности: ${M.label??M.name}`);const W=document.createElement("output");W.textContent=Number(k.value).toFixed(2),k.addEventListener("change",()=>{u.thresholds[M.id]=Number(k.value),W.textContent=Number(k.value).toFixed(2),R()}),N.append(F,H,k,W),l.append(N)}}},y=b=>`Кадр № ${b.frameId} · исполнитель ${b.provider} · ${b.times.totalMs.toFixed(0)} мс (модель ${b.times.runMs.toFixed(0)} мс)
Модель: ${u.spec.manifest.name} ${u.spec.manifest.version}`,T=()=>u?Promise.resolve(u):d||(o.textContent="Загрузка модели…",d=(async()=>{const b=await Eb(t),M=await fetch(b.modelUrl);if(!M.ok)throw new Error(`Не загружен ${b.modelUrl}: HTTP ${M.status}`);const C=await M.arrayBuffer();if(b.manifest.sha256){const k=await Tb(C);if(k.toLowerCase()!==b.manifest.sha256.toLowerCase())throw new Error(`SHA-256 модели не совпадает: ${k}`)}const F=await(s.runtime??Ab(await wb(n))).createSession(C,{input:b.manifest.input.name,output:b.manifest.output.name}),H=new yb(b,F);return H.onResult=k=>{m=k,v(k);const W=x.get(k.frameId);W!==void 0&&(g.push(performance.now()-W),g.length>400&&g.shift(),x.delete(k.frameId)),o.textContent=y(k),_(k)},H.onError=k=>o.textContent=`Ошибка модели: ${k.message}`,u=H,_(null),H})(),d.catch(b=>{d=null,o.textContent=`Модель не загружена: ${b.message}`,a.checked=!1,D(!1)}),d),E=b=>{!f||!u||(x.clear(),x.set(b,performance.now()),u.request(b,()=>s.currentFrame()===b?p():null))},R=()=>{const b=s.currentFrame();b!==null&&E(b)},D=b=>{if(f=b,c.style.display=b?"":"none",h.hidden=!b,!b){u?.cancel(),m=null,v(null),u&&(o.textContent="Выключено.");return}T().then(R,()=>{})};return a.addEventListener("change",()=>D(a.checked)),window.sonolabInfer={manifestUrl:t,enabled:()=>f,setEnabled:b=>(a.checked=b,D(b),b?T().then(()=>!0):Promise.resolve(!1)),last:()=>m,stats:()=>u?{...u.stats}:null,timings:()=>u?{...u.summary(),endToEnd:sa(g)}:null,bench:async(b=30)=>{const M=await T(),C=s.currentFrame(),N=p();if(C===null||!N)throw new Error("Нет показанного кадра");for(let K=0;K<2;K++)await M.runOnce(C,N);const F=M.samples.length,H=[];for(let K=0;K<b;K++){const G=performance.now(),tt=await M.runOnce(C,p()??N);v(f?tt:null),await new Promise(it=>requestAnimationFrame(()=>it(null))),H.push(performance.now()-G)}const k=M.samples.slice(F),W=K=>sa(k.map(G=>G[K]));return f&&m&&v(m),{provider:M.session.provider,n:b,input:[M.spec.manifest.input.height,M.spec.manifest.input.width],preprocess:W("preprocessMs"),run:W("runMs"),postprocess:W("postprocessMs"),pipeline:W("totalMs"),frameToPaint:sa(H)}}},{onFrame(b){f&&E(b)},onClear(){u?.cancel(),m=null,v(null)}}}const Ib=`
<p class="note">SonoLab — учебный тренажёр УЗИ-навигации. Изображения не предназначены для диагностики.
Лучше всего работает на компьютере в Chrome или Edge.</p>

<h3>Экран</h3>
<ul>
  <li><b>Слева — пациент.</b> Небольшое окно с фигурой и датчиком. Кнопки: «Всё тело», «Область» (приблизить место, где стоит датчик), «Сброс датчика».</li>
  <li><b>В центре — УЗИ-изображение.</b> Сверху строка состояния: режим (<b>СИМУЛЯЦИЯ</b> или <b>ЗАПИСЬ</b>), область, глубина, усиление или номер кадра. Справа на изображении — шкала глубины в сантиметрах.</li>
  <li><b>Справа — панель управления</b> из карточек: «Датчик», «Положение датчика», «Изображение», «Обучение», «О случае».</li>
</ul>
<p>У каждого ползунка и списка есть подсказка — задержите на нём курсор.</p>

<h3>Режим «Симуляция · всё тело» (открывается по умолчанию)</h3>
<ol>
  <li>Щёлкните по коже пациента — датчик встанет в эту точку. Датчик можно и перетаскивать мышью.</li>
  <li>Вращайте вид перетаскиванием по фону, масштаб — колесом мыши.</li>
  <li><b>Датчик:</b> «Поперёк» / «Вдоль», «Поворот», «Наклон», «Покачивание». Клавиши: Q/E — поворот, W/S — наклон, A/D — покачивание. «Вид снизу» убирает стол — для спины, задней поверхности бедра и подколенной ямки.</li>
  <li><b>Положение датчика:</b> список «Готовые положения (блокады)» ставит датчик в типичную точку доступа.</li>
  <li><b>Изображение:</b> «Глубина», «Усиление», «Подписи структур» — нет, главные (нервы, сосуды, кости) или все.</li>
  <li>Наведите курсор на изображение — внизу появится название структуры и глубина.</li>
</ol>
<p class="note">Изображение рассчитано по 3D-анатомии и помечено «СИМУЛЯЦИЯ». Это не запись аппарата.</p>

<h3>Режим «Реальные записи»</h3>
<ol>
  <li>Переключите режим вверху и выберите запись в списке «Запись:» — записи сгруппированы по областям (шея, предплечье, плечо, живот, таз, кожные нервы конечностей).</li>
  <li>Ведите датчик вдоль пунктира на теле или ползунком «Положение на проходе» под изображением.</li>
  <li>Для записей шеи в карточке «Датчик» есть поворот и наклон. Под углом показывается пересчёт записанного объёма, а не новое УЗИ.</li>
  <li>Паспорт записи и источник — в карточке «О случае».</li>
</ol>

<h3>Обучение и разметка</h3>
<ul>
  <li><b>Симуляция:</b> «Отметить структуру» — щёлкните по названной структуре; «Обвести структуру» — обведите её щелчками и нажмите Enter. Ответ проверяется по анатомии модели.</li>
  <li><b>Записи, вкладка «Просмотр»</b> — эталонные контуры и точки на кадре.</li>
  <li><b>Вкладка «Эксперт»</b> — разметка: укажите автора, выберите структуру, ставьте точки или контуры, отметьте «Кадр проверен», выгрузите «Экспорт JSON».</li>
  <li><b>Вкладка «Тренировка»</b> — задания «отметить» и «обвести» по эталону с оценкой точности и итоговой таблицей.</li>
</ul>

<h3>Полезно знать</h3>
<ul>
  <li>Ссылка с <b>?case=…</b> открывает нужную запись сразу; позиция датчика сохраняется в адресе.</li>
  <li>Разметка эксперта хранится в этом браузере, пока её не выгрузили в JSON.</li>
</ul>
`,Xt=s=>document.getElementById(s),Ns=new URL("./",window.location.href).toString(),Db="Для этой области данные пока не загружены";function Nb(){const s=new URL(window.location.href).searchParams;return s.get("mode")==="sim"?"sim":s.get("mode")==="rec"||s.has("case")||s.has("model")?"rec":"sim"}const Mi=()=>document.body.classList.contains("sim-mode"),Ub={neck:"Шея (щитовидная железа, сосуды)",forearm:"Предплечье",wrist:"Запястье",upperarm:"Плечо (сегмент руки)",shoulder:"Плечевой сустав",abdomen:"Живот (печень, почки)",pelvis:"Таз",thigh:"Бедро",knee:"Колено",lowerleg:"Голень"},Fb=["Шея (щитовидная железа, сосуды)","Предплечье","Плечевой сустав","Живот (печень, почки)","Таз","Кожные нервы конечностей (видео, Chang 2018)"],xo=.5,Yh={idle:"Датчик не установлен",loading:"Загрузка",ready:"Готово","out-of-area":"Вне подготовленной области",error:"Ошибка данных"};class Ob{samples=[];pendingInput=null;add(t){this.samples.push(t),this.samples.length>400&&this.samples.shift()}summary(){const t=[...this.samples].sort((n,i)=>n-i);if(!t.length)return null;const e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{n:t.length,median:e(.5),p95:e(.95),max:t[t.length-1]}}}function kb(){const s=Xt("helpDialog");Xt("helpBody").innerHTML=Ib;const t=()=>!s.open&&s.showModal();Xt("btnHelp").addEventListener("click",t),Xt("helpClose").addEventListener("click",()=>s.close()),s.addEventListener("click",e=>e.target===s&&s.close()),document.addEventListener("keydown",e=>{e.key==="F1"&&(e.preventDefault(),t())})}async function Bb(){my(),kb();const s=Nb();document.body.classList.toggle("sim-mode",s==="sim"),Xt("modeSim").classList.toggle("active",s==="sim"),Xt("modeRec").classList.toggle("active",s==="rec"),Zh(s);const t=Xt("scene"),e=Xt("sceneLoading");let n;try{n=await hy(Ns,I=>e.textContent=`Загрузка модели человека… ${Math.round(I*100)}%`)}catch(I){e.textContent=`Ошибка загрузки модели человека: ${I.message}`;return}e.hidden=!0;const i=new dy(t,n);let r,a,o=null,l=[];try{l=await Y_(Ns);const I=Z_(l,new URL(window.location.href).searchParams.get("case"));({manifest:r,baseUrl:a}=await K_(Ns,I)),I.annotations&&(o=new URL(I.annotations,Ns).toString())}catch(I){document.body.classList.remove("sim-mode"),Xt("status").textContent=Yh.error,Xt("status").dataset.s="error",Xt("frameInfo").textContent=String(I.message),Kh(i,()=>{});return}zb(r),Vb(l,r);const c=r.trajectory.bodyPlacement,h=c.path?av(i.human.forearm,c.path.from,c.path.to,c.path.rayDir,41,i.human.skinMeshes.filter(I=>I.visible!==!1)):ov(i.human.forearm,i.human.forearmAxis,c.startFractionOfForearm,c.endFractionOfForearm),u=!c.path;if(!u){const I=h.poseAt(.5);i.setRegionFocus(new P(...I.pointBody),new P(...I.normalBody))}i.scene.add(rv(h));const d=iv(h);i.scene.add(d);const f=new sv;i.scene.add(f.group);const m=new fy(a,r),g=Xt("usCanvas"),x=new py(g,m,r.frames.width,r.frames.height),p=Xt("usOverlay"),v=Xt("status"),_=Xt("frameInfo"),y=Xt("slider"),T=new Ob;let E={loaded:0,total:r.frames.count},R=0,D=null,b=null,M=null;x.onDrawn=I=>{D?.setFrame(b?.isOblique()?null:I),b?.afterDraw(I),b?.isOblique()||M?.onFrame(I)},x.onStatus=I=>{Mi()||(v.dataset.s=I,v.textContent=I==="loading"?`Загрузка ${E.loaded}/${E.total}`:Yh[I])};const C=(I,z)=>{b?.onPose(),I.kind==="in-area"?(p.hidden=!0,x.show(I.frameId),T.pendingInput=z,_.innerHTML=`Кадр <b>${I.frameId}</b> / ${r.frames.count-1} · позиция <b>${(I.t*100).toFixed(1)} %</b>`,(I.origin!=="slider"||document.activeElement!==y)&&(y.value=String(Math.round(I.t*1e3))),ps(y),y.disabled=!1):I.kind==="out-of-area"&&(D?.setFrame(null),M?.onClear(),x.clear("out-of-area"),p.hidden=!1,p.textContent=Db,_.textContent="Кадр не показан — датчик вне записанного прохода"),tt()};My(r)&&(b=new Sy({manifest:r,source:m,frames:x,canvas:g,screen:document.querySelector(".us-screen"),host:Xt("resliceHost"),probeGroup:f.group,onObliqueChange:I=>D?.setFrame(I?null:x.shownFrameId)}));const N=new nv(i,f,{caseId:r.caseId,lut:r.trajectory.lut,path:h,zoneHitMesh:d,isOnRegion:I=>u?i.human.isOnForearm(I):!0,onState:C}),F=()=>{const I=N.state,z=new URL(window.location.href);I.kind==="in-area"?z.searchParams.set("t",I.t.toFixed(3)):z.searchParams.delete("t"),history.replaceState(null,"",z)};window.addEventListener("pointerup",()=>setTimeout(()=>!Mi()&&F(),0)),y.addEventListener("input",I=>N.setT(Number(y.value)/1e3,"slider",I.timeStamp)),y.addEventListener("change",F),Xt("btnArm").addEventListener("click",()=>{Mi()&&st.contact?i.focusOn(new P(...st.contact),new P(...st.normal),.55):i.goTo("region")}),Xt("btnBody").addEventListener("click",()=>i.goTo("body")),Xt("btnResetProbe").addEventListener("click",()=>{if(Mi())return st.resetProbe();N.setT(xo,"reset"),F()});const H=Number(new URL(window.location.href).searchParams.get("t")),k=Number.isFinite(H)&&new URL(window.location.href).searchParams.has("t")?Math.min(1,Math.max(0,H)):xo,W=r.trajectory.lut;D=new Dy({manifest:r,annotationsUrl:o,overlayHost:document.querySelector(".us-screen"),tabsHost:Xt("annTabs"),bodyHost:Xt("annBody"),currentFrame:()=>x.shownFrameId,goToFrame:I=>{const z=W.indexOf(I);return z<0?!1:(b?.setAngles(0,0),N.setT(z/(W.length-1),"slider"),F(),!0)}}),M=Lb({after:Xt("annBody"),screen:document.querySelector(".us-screen"),canvas:g,frameW:r.frames.width,frameH:r.frames.height,currentFrame:()=>x.shownFrameId}),N.setT(k,"url");const K=N.state.kind==="in-area"?N.state.frameId:0,G=performance.now();m.preloadAll(K,(I,z)=>{E={loaded:I,total:z},x.status==="loading"&&!Mi()&&(v.textContent=`Загрузка ${I}/${z}`)}).then(()=>{R=performance.now()-G,m.failed.size&&!Mi()&&(v.dataset.s="error",v.textContent=`Ошибка данных: не загружено кадров — ${m.failed.size}`),tt(),b?.build()}),s==="rec"&&(new URL(window.location.href).searchParams.get("view")==="arm"||window.innerWidth<900||!u)&&i.goTo("region",0);function tt(){const I=T.summary(),z=N.state;Xt("diag").textContent=[`Состояние: ${z.kind}${z.kind==="in-area"?` t=${z.t.toFixed(3)} frameId=${z.frameId}`:""}`,`Показан кадр: ${x.shownFrameId??"—"}`,`Кадров загружено: ${E.loaded}/${E.total}${R?` за ${R.toFixed(0)} мс`:""}`,I?`Задержка ввод→показ (n=${I.n}): медиана ${I.median.toFixed(1)} мс, p95 ${I.p95.toFixed(1)} мс, макс ${I.max.toFixed(1)} мс`:"Задержка: нет измерений (подвигайте датчик)",`Устройство: ${navigator.userAgent}`].join(`
`)}window.sonolab={state:()=>N.state,shownFrameId:()=>x.shownFrameId,status:()=>x.status,camera:()=>i.cameraState(),latency:()=>T.summary(),latencySamples:()=>[...T.samples],preload:()=>({...E,ms:R,failed:[...m.failed]}),setT:I=>N.setT(I,"slider"),controlPoints:r.controlPoints,projectProbeToScreen:()=>{const I=f.group.position.clone().project(i.camera),z=i.renderer.domElement.getBoundingClientRect();return{x:z.left+(I.x+1)/2*z.width,y:z.top+(1-I.y)/2*z.height}},projectBodyPointToScreen:I=>{const z=new P(...I).project(i.camera),et=i.renderer.domElement.getBoundingClientRect();return{x:et.left+(z.x+1)/2*et.width,y:et.top+(1-z.y)/2*et.height}},pathPoint:I=>h.poseAt(I).pointBody,goTo:I=>i.goTo(I,0),caseId:r.caseId,annotation:()=>D?.debugState(),imageToScreen:(I,z)=>D?.imageToScreen(I,z),setCamera:(I,z)=>i.setCamera(I,z),reslice:()=>b?.debug()??null,setReslice:(I,z)=>b?.setAngles(I,z)};let it=0;const st=new ob({view:i,probe:f,baseUrl:Ns,screen:document.querySelector(".us-screen"),panel:Xt("simPanel"),status:v,info:Xt("simInfo"),hover:Xt("usHover"),landmarks:i.human.meta.landmarks,setRecordedInputEnabled:I=>N.enabled=I,onChange:()=>Vt()}),Ut=r.imageGeometry.depthSettingCm,Yt=`${r.region.name}${r.patientSide!=="unknown"?`, ${r.patientSide==="left"?"слева":"справа"}`:""}`;function Vt(){const I=Mi();if(Zh(I?"sim":"rec"),I){const z=Math.abs(st.rotate)<1?"поперёк":Math.abs(Math.abs(st.rotate)-90)<1?"вдоль":`поворот ${st.rotate}°`,et=st.regionName();Xt("stripRegion").textContent=et?`${et} · ${z}`:"",Xt("stripDepth").innerHTML=`Глубина <b>${st.depthCm.toLocaleString("ru-RU")} см</b>`,Xt("stripGain").innerHTML=`Усиление <b>${Math.round(st.gain*100)} %</b>`}else Xt("stripRegion").textContent=Yt,Xt("stripDepth").innerHTML=Ut?`Глубина <b>${Ut} см</b>`:"",Xt("stripGain").textContent=""}let Jt=null;const j=async(I,z=!1)=>{if(I===Jt)return;Jt=I,Xt("modeRec").classList.toggle("active",I==="rec"),Xt("modeSim").classList.toggle("active",I==="sim"),Xt("modeRec").setAttribute("aria-pressed",String(I==="rec")),Xt("modeSim").setAttribute("aria-pressed",String(I==="sim"));const et=new URL(window.location.href),ct=et.searchParams.has("case")||et.searchParams.has("model");if(I==="sim"?ct?et.searchParams.set("mode","sim"):et.searchParams.delete("mode"):ct?et.searchParams.delete("mode"):et.searchParams.set("mode","rec"),history.replaceState(null,"",et),Xt("sceneHint").title=I==="sim"?"Датчик: щёлкните по коже — он встанет в эту точку, или перетащите его мышью. Вид: перетаскивание по фону — вращение, колесо — масштаб, правая кнопка — сдвиг.":"Датчик: перетащите его вдоль пунктира на теле или двигайте ползунок «Положение на проходе». Вид: перетаскивание по фону — вращение, колесо — масштаб.",I==="sim")b?.setAngles(0,0),document.body.classList.add("sim-mode"),Vt(),await st.enter(),z||i.goTo("body");else{st.exit();const ut=N.state;N.setT(ut.kind==="in-area"?ut.t:xo,"reset"),x.onStatus(x.status,x.shownFrameId),z||i.goTo("region")}Vt()};Xt("modeRec").addEventListener("click",()=>j("rec")),Xt("modeSim").addEventListener("click",()=>j("sim")),j(s,!0),window.sonolabSim={state:()=>st.debug(),setRotate:I=>st.setRotate(I),placeAt:(I,z)=>st.placeAt(I,z),placeOnSkin:(I,z)=>st.placeOnSkin(I,z),placeOnSurface:(I,z,et,ct)=>st.placeOnSurface(I,z,et,ct),placeFrom:(I,z,et)=>st.placeFrom(I,z,et),abdomenLandmarks:()=>st.anatomy?.meta.landmarksAbdomen??null,setTilt:I=>st.setTilt(I),applyPreset:I=>st.applyPreset(I),presets:()=>st.anatomy?.meta.probePresets??{},setRock:I=>st.setRock(I),setDepth:I=>st.setDepth(I),placeFromPoint:(I,z)=>st.placeFromPoint(I,z),setUnderside:I=>st.setUnderside(I),imageToScreen:(I,z)=>st.imageToScreen(I,z),maskBoxPolygon:I=>st.maskBoxPolygon(I),probeScreen:()=>{const I=f.group.position.clone().project(i.camera),z=i.renderer.domElement.getBoundingClientRect();return{x:z.left+(I.x+1)/2*z.width,y:z.top+(1-I.y)/2*z.height}},bodyToScreen:I=>{const z=new P(...I).project(i.camera),et=i.renderer.domElement.getBoundingClientRect();return{x:et.left+(z.x+1)/2*et.width,y:et.top+(1-z.y)/2*et.height}},landmarks:i.human.meta.landmarks},Kh(i,I=>{st.tick(),N.flush(),T.pendingInput!==null&&x.status==="ready"&&(T.add(I-T.pendingInput),T.pendingInput=null),++it%30===0&&tt()})}function Kh(s,t){const e=()=>{const n=performance.now();t(n),s.render(n),requestAnimationFrame(e)};requestAnimationFrame(e)}function zb(s){Xt("caseTitle").textContent=s.title;const t={left:"левая",right:"правая",unknown:"неизвестно"}[s.patientSide],n=[["Тип данных",{"recorded-sweep":"записанный проход (настоящие кадры)","volume-reslice":"срезы настоящего УЗИ-объёма (собран из записанных кадров с трекингом)","registered-volume":"пространственно зарегистрированный объём",synthetic:"СИМУЛЯЦИЯ"}[s.imageType]],["Соответствие",s.trajectory.kind==="relative-sweep-index"?"навигация по нормированному пути записи (без регистрации к телу)":"пространственная регистрация"],["Область",`${s.region.name}, ${s.trajectory.bodyPlacement.surface}`],["Сторона пациента",t],["Направление прохода",s.trajectory.directionOnBody.value==="unknown"?"неизвестно (в источнике не указано; на фигуре уложено условно)":s.region.id==="forearm"?"от проксимального отдела к запястью (по видео внешней камеры; требует экспертной проверки)":s.trajectory.directionOnBody.value],["Датчик",`${s.probe.model} — ${s.probe.kind}; изображение ${s.probe.imageFormat}`],["Частота / глубина",`${s.probe.centerFrequencyMHz} МГц / ${s.imageGeometry.depthSettingCm} см (настройка аппарата)`],["Масштаб пикселей",s.imageGeometry.pixelSpacingMm?`${s.imageGeometry.pixelSpacingMm} мм (из источника)`:"не указан в источнике — линейка не строится"],["Метка датчика",(s.imageGeometry.probeMarkerSide==="unknown"?"сторона неизвестна":s.imageGeometry.probeMarkerSide)+(s.imageGeometry.lateralOrientation?`. ${s.imageGeometry.lateralOrientation}`:"")],["Калибровка изображение→трекер",s.calibration.imageToSensor==="absent"?"отсутствует":"учтена авторами набора"],["Кадров",`${s.frames.count} (${s.frames.width}×${s.frames.height}), без автопроигрывания`]],i=Xt("caseFacts");for(const[u,d]of n){const f=document.createElement("dt");f.textContent=u;const m=document.createElement("dd");m.textContent=d,i.append(f,m)}const r=[["Сдвиг вдоль записанного прохода",s.supportedMotions.slideAlongSweep],["Поперечный сдвиг",s.supportedMotions.lateralShift],["Вращение датчика",s.supportedMotions.rotation],["Наклон",s.supportedMotions.tilt],["Компрессия",s.supportedMotions.compression]],a=Xt("motions");for(const[u,d]of r){const f=document.createElement("li");f.textContent=u+(d?"":" — нет данных"),f.dataset.on=d?"1":"0",f.dataset.mark=d?"✓":"✕",a.append(f)}const o=Xt("sourceLine");o.innerHTML="",o.append(`Источник: ${s.source.attribution} Набор `);const l=document.createElement("a");l.href=s.source.url,l.target="_blank",l.rel="noopener",l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`;const c=s.caseId.startsWith("cuhk");c?l.textContent=`${s.source.dataset}@${s.source.revision.slice(0,7)}`:l.textContent=s.source.dataset,o.append(l,c?`, эпизод ${s.source.episode}. Лицензия `:`, ${s.source.subset}. Лицензия `);const h=document.createElement("a");h.href=s.source.licenseUrl,h.target="_blank",h.rel="noopener",h.textContent=c?"CC BY 4.0":s.source.license,o.append(h,c?". Кадры не изменены, кроме перекодирования AV1→JPEG. Учебный материал, не для диагностики.":". Кадры — срезы объёма источника, перекодированы в JPEG и отражены по вертикали. Эталонные контуры — разметка авторов набора. Учебный материал, не для диагностики.")}function Zh(s){const t=Xt("modeBadge");t.dataset.kind=s,t.textContent=s==="sim"?"СИМУЛЯЦИЯ":"ЗАПИСЬ",t.title=s==="sim"?"Изображение рассчитано по 3D-анатомии — это не запись аппарата":"Настоящие кадры УЗИ-записи"}function Vb(s,t){const e=Xt("caseSelect");e.innerHTML="";const n=new Map;for(const a of s){const o=a.caseId.startsWith("chang2018")?"Кожные нервы конечностей (видео, Chang 2018)":Ub[a.region]??"Другие области";n.set(o,[...n.get(o)??[],a])}const i=a=>Fb.indexOf(a)+1||99,r=[...n.keys()].sort((a,o)=>i(a)-i(o));for(const a of r){const o=document.createElement("optgroup");o.label=`${a} — ${n.get(a).length}`;for(const l of n.get(a)){const c=document.createElement("option");c.value=l.caseId,c.textContent=l.label??l.caseId,c.selected=l.caseId===t.caseId,o.append(c)}e.append(o)}e.title=t.title,Xt("casePick").hidden=s.length<2,e.addEventListener("change",()=>{const a=new URL(window.location.href);a.searchParams.set("case",e.value),a.searchParams.delete("t"),a.searchParams.delete("mode"),window.location.href=a.toString()})}Bb();
