(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="160",Td=0,Ja=1,Ad=2,Ec=1,Tc=2,_n=3,vn=0,wt=1,en=2,In=0,Ei=1,eo=2,to=3,no=4,Cd=5,qn=100,Rd=101,Ld=102,io=103,so=104,Pd=200,Id=201,Dd=202,kd=203,pa=204,fa=205,Nd=206,Ud=207,Fd=208,Od=209,Bd=210,zd=211,Hd=212,Gd=213,Vd=214,Wd=0,Xd=1,qd=2,Js=3,$d=4,jd=5,Yd=6,Kd=7,Ac=0,Qd=1,Zd=2,Dn=0,Jd=1,eh=2,th=3,nh=4,ih=5,sh=6,ro="attached",rh="detached",Cc=300,Ci=301,Ri=302,ma=303,ga=304,or=306,Li=1e3,Ht=1001,er=1002,_t=1003,_a=1004,js=1005,Dt=1006,Rc=1007,Zn=1008,kn=1009,ah=1010,oh=1011,Ia=1012,Lc=1013,Ln=1014,yn=1015,ds=1016,Pc=1017,Ic=1018,jn=1020,lh=1021,Gt=1023,ch=1024,dh=1025,Yn=1026,Pi=1027,hh=1028,Dc=1029,uh=1030,kc=1031,Nc=1033,yr=33776,xr=33777,vr=33778,br=33779,ao=35840,oo=35841,lo=35842,co=35843,Uc=36196,ho=37492,uo=37496,po=37808,fo=37809,mo=37810,go=37811,_o=37812,yo=37813,xo=37814,vo=37815,bo=37816,Mo=37817,So=37818,wo=37819,Eo=37820,To=37821,Mr=36492,Ao=36494,Co=36495,ph=36283,Ro=36284,Lo=36285,Po=36286,hs=2300,Ii=2301,Sr=2302,Io=2400,Do=2401,ko=2402,fh=2500,mh=0,Fc=1,ya=2,Oc=3e3,Kn=3001,gh=3200,_h=3201,Bc=0,yh=1,Vt="",st="srgb",yt="srgb-linear",Da="display-p3",lr="display-p3-linear",tr="linear",et="srgb",nr="rec709",ir="p3",ii=7680,No=519,xh=512,vh=513,bh=514,zc=515,Mh=516,Sh=517,wh=518,Eh=519,xa=35044,Uo="300 es",va=1035,xn=2e3,sr=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const is=Math.PI/180,Di=180/Math.PI;function Yt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function ka(r,e){return(r%e+e)%e}function Th(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ah(r,e,t){return r!==e?(t-r)/(e-r):0}function ss(r,e,t){return(1-t)*r+t*e}function Ch(r,e,t,n){return ss(r,e,1-Math.exp(-t*n))}function Rh(r,e=1){return e-Math.abs(ka(r,e*2)-e)}function Lh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ph(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ih(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dh(r,e){return r+Math.random()*(e-r)}function kh(r){return r*(.5-Math.random())}function Nh(r){r!==void 0&&(Fo=r);let e=Fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(r){return r*is}function Fh(r){return r*Di}function ba(r){return(r&r-1)===0&&r!==0}function Oh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),u=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*u,l*h,o*c);break;case"YZY":r.set(l*h,o*d,l*u,o*c);break;case"ZXZ":r.set(l*u,l*h,o*d,o*c);break;case"XZX":r.set(o*d,l*_,l*p,o*c);break;case"YXY":r.set(l*p,o*d,l*_,o*c);break;case"ZYZ":r.set(l*_,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zh={DEG2RAD:is,RAD2DEG:Di,generateUUID:Yt,clamp:St,euclideanModulo:ka,mapLinear:Th,inverseLerp:Ah,lerp:ss,damp:Ch,pingpong:Rh,smoothstep:Lh,smootherstep:Ph,randInt:Ih,randFloat:Dh,randFloatSpread:kh,seededRandom:Nh,degToRad:Uh,radToDeg:Fh,isPowerOfTwo:ba,ceilPowerOfTwo:Oh,floorPowerOfTwo:rr,setQuaternionFromProperEuler:Bh,normalize:Ye,denormalize:tn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],y=i[4],v=i[7],C=i[2],T=i[5],A=i[8];return s[0]=a*g+o*x+l*C,s[3]=a*m+o*y+l*T,s[6]=a*f+o*v+l*A,s[1]=c*g+d*x+u*C,s[4]=c*m+d*y+u*T,s[7]=c*f+d*v+u*A,s[2]=h*g+p*x+_*C,s[5]=h*m+p*y+_*T,s[8]=h*f+p*v+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,p=c*s-a*l,_=t*u+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new ze;function Hc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hh(){const r=us("canvas");return r.style.display="block",r}const Oo={};function rs(r){r in Oo||(Oo[r]=!0,console.warn(r))}const Bo=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zo=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[yt]:{transfer:tr,primaries:nr,toReference:r=>r,fromReference:r=>r},[st]:{transfer:et,primaries:nr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[lr]:{transfer:tr,primaries:ir,toReference:r=>r.applyMatrix3(zo),fromReference:r=>r.applyMatrix3(Bo)},[Da]:{transfer:et,primaries:ir,toReference:r=>r.convertSRGBToLinear().applyMatrix3(zo),fromReference:r=>r.applyMatrix3(Bo).convertLinearToSRGB()}},Gh=new Set([yt,lr]),Xe={enabled:!0,_workingColorSpace:yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=xs[e].toReference,i=xs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return xs[r].primaries},getTransfer:function(r){return r===Vt?tr:xs[r].transfer}};function Ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let si;class Gc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=us("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vh=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tr(i[a].image)):s.push(Tr(i[a]))}else s=Tr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;class xt extends Oi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Ht,i=Ht,s=Dt,a=Zn,o=Gt,l=kn,c=xt.DEFAULT_ANISOTROPY,d=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Yt(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Kn?st:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===st?Kn:Oc}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?st:Vt}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Cc;xt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(f+1)/2,T=(d+h)/4,A=(u+g)/4,I=(_+m)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=A/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=I/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(h-d)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?st:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wc extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qh extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==h||c!==p||d!==_){let m=1-o;const f=l*h+c*p+d*_+u*g,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,f*x);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const v=o*x;if(l=l*m+h*v,c=c*m+p*v,d=d*m+_*v,u=u*m+g*v,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+d*u+l*p-c*h,e[t+1]=l*_+d*h+c*u-o*p,e[t+2]=c*_+d*p+o*h-l*u,e[t+3]=d*_-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),u=o(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*p*_,this._y=c*p*u-h*d*_,this._z=c*d*_+h*p*u,this._w=c*d*u-h*p*_;break;case"YXZ":this._x=h*d*u+c*p*_,this._y=c*p*u-h*d*_,this._z=c*d*_-h*p*u,this._w=c*d*u+h*p*_;break;case"ZXY":this._x=h*d*u-c*p*_,this._y=c*p*u+h*d*_,this._z=c*d*_+h*p*u,this._w=c*d*u-h*p*_;break;case"ZYX":this._x=h*d*u-c*p*_,this._y=c*p*u+h*d*_,this._z=c*d*_-h*p*u,this._w=c*d*u+h*p*_;break;case"YZX":this._x=h*d*u+c*p*_,this._y=c*p*u+h*d*_,this._z=c*d*_-h*p*u,this._w=c*d*u-h*p*_;break;case"XZY":this._x=h*d*u-c*p*_,this._y=c*p*u-h*d*_,this._z=c*d*_+h*p*u,this._w=c*d*u+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=i+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new R,Ho=new Nn;class rn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),bs.subVectors(this.max,Wi),ri.subVectors(e.a,Wi),ai.subVectors(e.b,Wi),oi.subVectors(e.c,Wi),Sn.subVectors(ai,ri),wn.subVectors(oi,ai),On.subVectors(ri,oi);let t=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!Cr(t,ri,ai,oi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Cr(t,ri,ai,oi,bs))?!1:(Ms.crossVectors(Sn,wn),t=[Ms.x,Ms.y,Ms.z],Cr(t,ri,ai,oi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new R,new R,new R,new R,new R,new R,new R,new R],Wt=new R,vs=new rn,ri=new R,ai=new R,oi=new R,Sn=new R,wn=new R,On=new R,Wi=new R,bs=new R,Ms=new R,Bn=new R;function Cr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $h=new rn,Xi=new R,Rr=new R;class an{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$h.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Rr)),this.expandByPoint(Xi.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new R,Lr=new R,Ss=new R,En=new R,Pr=new R,ws=new R,Ir=new R;class cr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Lr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=En.dot(this.direction),l=-En.dot(Ss),c=En.lengthSq(),d=Math.abs(1-a*a);let u,h,p,_;if(d>0)if(u=a*l-o,h=a*o-l,_=s*d,u>=0)if(h>=-_)if(h<=_){const g=1/d;u*=g,h*=g,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lr).addScaledVector(Ss,h),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){Pr.subVectors(t,e),ws.subVectors(n,e),Ir.crossVectors(Pr,ws);let a=this.direction.dot(Ir),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(ws.crossVectors(En,ws));if(l<0)return null;const c=o*this.direction.dot(Pr.cross(En));if(c<0||l+c>a)return null;const d=-o*En.dot(Ir);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,s,a,o,l,c,d,u,h,p,_,g,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,u,h,p,_,g,m)}set(e,t,n,i,s,a,o,l,c,d,u,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,p=a*u,_=o*d,g=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*u,_=c*d,g=c*u;t[0]=h+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*u,_=c*d,g=c*u;t[0]=h-g*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*u,_=o*d,g=o*u;t[0]=l*d,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*u,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-h*u,t[8]=_*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+_,t[10]=h-g*u}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+g,t[5]=a*d,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*d,t[10]=g*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Yh)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Tn.crossVectors(n,Ut),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Tn.crossVectors(n,Ut)),Tn.normalize(),Es.crossVectors(Ut,Tn),i[0]=Tn.x,i[4]=Es.x,i[8]=Ut.x,i[1]=Tn.y,i[5]=Es.y,i[9]=Ut.y,i[2]=Tn.z,i[6]=Es.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],C=n[15],T=i[0],A=i[4],I=i[8],b=i[12],w=i[1],z=i[5],H=i[9],J=i[13],P=i[2],O=i[6],V=i[10],q=i[14],W=i[3],X=i[7],$=i[11],ee=i[15];return s[0]=a*T+o*w+l*P+c*W,s[4]=a*A+o*z+l*O+c*X,s[8]=a*I+o*H+l*V+c*$,s[12]=a*b+o*J+l*q+c*ee,s[1]=d*T+u*w+h*P+p*W,s[5]=d*A+u*z+h*O+p*X,s[9]=d*I+u*H+h*V+p*$,s[13]=d*b+u*J+h*q+p*ee,s[2]=_*T+g*w+m*P+f*W,s[6]=_*A+g*z+m*O+f*X,s[10]=_*I+g*H+m*V+f*$,s[14]=_*b+g*J+m*q+f*ee,s[3]=x*T+y*w+v*P+C*W,s[7]=x*A+y*z+v*O+C*X,s[11]=x*I+y*H+v*V+C*$,s[15]=x*b+y*J+v*q+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*u-i*c*u-s*o*h+n*c*h+i*o*p-n*l*p)+g*(+t*l*p-t*c*h+s*a*h-i*a*p+i*c*d-s*l*d)+m*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*d-n*c*d)+f*(-i*o*d-t*l*u+t*o*h+i*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=u*m*c-g*h*c+g*l*p-o*m*p-u*l*f+o*h*f,y=_*h*c-d*m*c-_*l*p+a*m*p+d*l*f-a*h*f,v=d*g*c-_*u*c+_*o*p-a*g*p-d*o*f+a*u*f,C=_*u*l-d*g*l-_*o*h+a*g*h+d*o*m-a*u*m,T=t*x+n*y+i*v+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(g*h*s-u*m*s-g*i*p+n*m*p+u*i*f-n*h*f)*A,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(u*l*s-o*h*s-u*i*c+n*h*c+o*i*p-n*l*p)*A,e[4]=y*A,e[5]=(d*m*s-_*h*s+_*i*p-t*m*p-d*i*f+t*h*f)*A,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*f-t*l*f)*A,e[7]=(a*h*s-d*l*s+d*i*c-t*h*c-a*i*p+t*l*p)*A,e[8]=v*A,e[9]=(_*u*s-d*g*s-_*n*p+t*g*p+d*n*f-t*u*f)*A,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*f+t*o*f)*A,e[11]=(d*o*s-a*u*s-d*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=C*A,e[13]=(d*g*i-_*u*i+_*n*h-t*g*h-d*n*m+t*u*m)*A,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-d*o*i+d*n*l-t*u*l-a*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,p=s*d,_=s*u,g=a*d,m=a*u,f=o*u,x=l*c,y=l*d,v=l*u,C=n.x,T=n.y,A=n.z;return i[0]=(1-(g+f))*C,i[1]=(p+v)*C,i[2]=(_-y)*C,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(h+f))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(_+y)*A,i[9]=(m-x)*A,i[10]=(1-(h+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const a=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/s,d=1/a,u=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=d,Xt.elements[5]*=d,Xt.elements[6]*=d,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=xn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(o===xn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sr)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xn){const l=this.elements,c=1/(t-e),d=1/(n-i),u=1/(a-s),h=(t+e)*c,p=(n+i)*d;let _,g;if(o===xn)_=(a+s)*u,g=-2*u;else if(o===sr)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new R,Xt=new He,jh=new R(0,0,0),Yh=new R(1,1,1),Tn=new R,Es=new R,Ut=new R,Go=new He,Vo=new Nn;class dr{constructor(e=0,t=0,n=0,i=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kh=0;const Wo=new R,ci=new Nn,hn=new He,Ts=new R,qi=new R,Qh=new R,Zh=new Nn,Xo=new R(1,0,0),qo=new R(0,1,0),$o=new R(0,0,1),Jh={type:"added"},eu={type:"removed"};class tt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new R,t=new dr,n=new Nn,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new ze}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Xo,e)}rotateY(e){return this.rotateOnAxis(qo,e)}rotateZ(e){return this.rotateOnAxis($o,e)}translateOnAxis(e,t){return Wo.copy(e).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xo,e)}translateY(e){return this.translateOnAxis(qo,e)}translateZ(e){return this.translateOnAxis($o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(qi,Ts,this.up):hn.lookAt(Ts,qi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(hn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tt.DEFAULT_UP=new R(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new R,un=new R,Dr=new R,pn=new R,di=new R,hi=new R,jo=new R,kr=new R,Nr=new R,Ur=new R;let As=!1;class jt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qt.subVectors(i,t),un.subVectors(n,t),Dr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(un),l=qt.dot(Dr),c=un.dot(un),d=un.dot(Dr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,n,i,s,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),un.subVectors(e,t),qt.cross(un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;di.subVectors(i,n),hi.subVectors(s,n),kr.subVectors(e,n);const l=di.dot(kr),c=hi.dot(kr);if(l<=0&&c<=0)return t.copy(n);Nr.subVectors(e,i);const d=di.dot(Nr),u=hi.dot(Nr);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(di,a);Ur.subVectors(e,s);const p=di.dot(Ur),_=hi.dot(Ur);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(hi,o);const m=d*_-p*u;if(m<=0&&u-d>=0&&p-_>=0)return jo.subVectors(s,i),o=(u-d)/(u-d+(p-_)),t.copy(i).addScaledVector(jo,o);const f=1/(m+g+h);return a=g*f,o=h*f,t.copy(n).addScaledVector(di,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Fr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=ka(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fr(a,s,e+1/3),this.g=Fr(a,s,e),this.b=Fr(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=st){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const n=qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Xe.fromWorkingColorSpace(Mt.copy(this),e),Math.round(St(Mt.r*255,0,255))*65536+Math.round(St(Mt.g*255,0,255))*256+Math.round(St(Mt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,s=Mt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=st){Xe.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Cs);const n=ss(An.h,Cs.h,t),i=ss(An.s,Cs.s,t),s=ss(An.l,Cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new ge;ge.NAMES=qc;let tu=0;class sn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=Ei,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=fa,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nn extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new R,Rs=new ke;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),e}}class $c extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nu=0;const Bt=new He,Or=new tt,ui=new R,Ft=new rn,$i=new rn,gt=new R;class kt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?jc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ft.min,$i.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,$i.max),Ft.expandByPoint(gt)):(Ft.expandByPoint($i.min),Ft.expandByPoint($i.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)gt.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),gt.add(ui)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<o;w++)c[w]=new R,d[w]=new R;const u=new R,h=new R,p=new R,_=new ke,g=new ke,m=new ke,f=new R,x=new R;function y(w,z,H){u.fromArray(i,w*3),h.fromArray(i,z*3),p.fromArray(i,H*3),_.fromArray(a,w*2),g.fromArray(a,z*2),m.fromArray(a,H*2),h.sub(u),p.sub(u),g.sub(_),m.sub(_);const J=1/(g.x*m.y-m.x*g.y);isFinite(J)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(J),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(J),c[w].add(f),c[z].add(f),c[H].add(f),d[w].add(x),d[z].add(x),d[H].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,z=v.length;w<z;++w){const H=v[w],J=H.start,P=H.count;for(let O=J,V=J+P;O<V;O+=3)y(n[O+0],n[O+1],n[O+2])}const C=new R,T=new R,A=new R,I=new R;function b(w){A.fromArray(s,w*3),I.copy(A);const z=c[w];C.copy(z),C.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(I,z);const J=T.dot(d[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=J}for(let w=0,z=v.length;w<z;++w){const H=v[w],J=H.start,P=H.count;for(let O=J,V=J+P;O<V;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new R,s=new R,a=new R,o=new R,l=new R,c=new R,d=new R,u=new R;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let f=0;f<d;f++)h[_++]=c[p++]}return new Pt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new He,zn=new cr,Ls=new an,Ko=new R,pi=new R,fi=new R,mi=new R,Br=new R,Ps=new R,Is=new ke,Ds=new ke,ks=new ke,Qo=new R,Zo=new R,Jo=new R,Ns=new R,Us=new R;class Le extends tt{constructor(e=new kt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(Br.fromBufferAttribute(u,e),a?Ps.addScaledVector(Br,d):Ps.addScaledVector(Br.sub(t),d))}t.add(Ps)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Ls.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ls,Ko)===null||zn.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Yo.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=y;v<C;v+=3){const T=o.getX(v),A=o.getX(v+1),I=o.getX(v+2);i=Fs(this,f,e,n,c,d,u,T,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=Fs(this,a,e,n,c,d,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=y;v<C;v+=3){const T=v,A=v+1,I=v+2;i=Fs(this,f,e,n,c,d,u,T,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=m,y=m+1,v=m+2;i=Fs(this,a,e,n,c,d,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function iu(r,e,t,n,i,s,a,o){let l;if(e.side===wt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===vn,o),l===null)return null;Us.copy(o),Us.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:r}}function Fs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,pi),r.getVertexPosition(l,fi),r.getVertexPosition(c,mi);const d=iu(r,e,t,n,pi,fi,mi,Ns);if(d){i&&(Is.fromBufferAttribute(i,o),Ds.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),d.uv=jt.getInterpolation(Ns,pi,fi,mi,Is,Ds,ks,new ke)),s&&(Is.fromBufferAttribute(s,o),Ds.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,c),d.uv1=jt.getInterpolation(Ns,pi,fi,mi,Is,Ds,ks,new ke),d.uv2=d.uv1),a&&(Qo.fromBufferAttribute(a,o),Zo.fromBufferAttribute(a,l),Jo.fromBufferAttribute(a,c),d.normal=jt.getInterpolation(Ns,pi,fi,mi,Qo,Zo,Jo,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};jt.getNormal(pi,fi,mi,u.normal),d.face=u}return d}class ei extends kt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function _(g,m,f,x,y,v,C,T,A,I,b){const w=v/A,z=C/I,H=v/2,J=C/2,P=T/2,O=A+1,V=I+1;let q=0,W=0;const X=new R;for(let $=0;$<V;$++){const ee=$*z-J;for(let te=0;te<O;te++){const G=te*w-H;X[g]=G*x,X[m]=ee*y,X[f]=P,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[f]=T>0?1:-1,d.push(X.x,X.y,X.z),u.push(te/A),u.push(1-$/I),q+=1}}for(let $=0;$<I;$++)for(let ee=0;ee<A;ee++){const te=h+ee+O*$,G=h+ee+O*($+1),j=h+(ee+1)+O*($+1),oe=h+(ee+1)+O*$;l.push(te,G,oe),l.push(G,j,oe),W+=6}o.addGroup(p,W,b),p+=W,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(r){const e={};for(let t=0;t<r.length;t++){const n=ki(r[t]);for(const i in n)e[i]=n[i]}return e}function su(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yc(r){return r.getRenderTarget()===null?r.outputColorSpace:Xe.workingColorSpace}const ru={clone:ki,merge:Rt};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kc extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Kc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class lu extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(gi,_i,e,t);i.layers=this.layers,this.add(i);const s=new Lt(gi,_i,e,t);s.layers=this.layers,this.add(s);const a=new Lt(gi,_i,e,t);a.layers=this.layers,this.add(a);const o=new Lt(gi,_i,e,t);o.layers=this.layers,this.add(o);const l=new Lt(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Lt(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qc extends xt{constructor(e,t,n,i,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cu extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?st:Vt),this.texture=new Qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:In});s.uniforms.tEquirect.value=t;const a=new Le(i,s),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Dt),new lu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const zr=new R,du=new R,hu=new ze;class Wn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zr.subVectors(n,t).cross(du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hu.getNormalMatrix(e),i=this.coplanarPoint(zr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new an,Os=new R;class Na{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-p,v-f).normalize(),n[1].setComponents(l+s,h+c,m+p,v+f).normalize(),n[2].setComponents(l+a,h+d,m+_,v+x).normalize(),n[3].setComponents(l-a,h-d,m-_,v-x).normalize(),n[4].setComponents(l-o,h-u,m-g,v-y).normalize(),t===xn)n[5].setComponents(l+o,h+u,m+g,v+y).normalize();else if(t===sr)n[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function uu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const u=c.array,h=c.usage,p=u.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,u,h),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,u){const h=d.array,p=d._updateRange,_=d.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&_.length===0&&r.bufferSubData(u,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?r.bufferSubData(u,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):r.bufferSubData(u,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}class Qn extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,u=e/o,h=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<d;f++){const x=f*h-a;for(let y=0;y<c;y++){const v=y*u-s;_.push(v,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,v=x+c*(f+1),C=x+1+c*(f+1),T=x+1+c*f;p.push(y,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fu=`#ifdef USE_ALPHAHASH
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
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
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
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tu=`#ifdef USE_IRIDESCENCE
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
#endif`,Au=`#ifdef USE_BUMPMAP
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ou=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Xu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,pp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,bf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
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
}`,Cf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rf=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pf=`#define MATCAP
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
}`,If=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Df=`#define NORMAL
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
}`,kf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
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
}`,Uf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,De={alphahash_fragment:pu,alphahash_pars_fragment:fu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:_u,alphatest_pars_fragment:yu,aomap_fragment:xu,aomap_pars_fragment:vu,batching_pars_vertex:bu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:wu,bsdfs:Eu,iridescence_fragment:Tu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Pu,color_fragment:Iu,color_pars_fragment:Du,color_pars_vertex:ku,color_vertex:Nu,common:Uu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Bu,displacementmap_vertex:zu,emissivemap_fragment:Hu,emissivemap_pars_fragment:Gu,colorspace_fragment:Vu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:qu,envmap_pars_fragment:$u,envmap_pars_vertex:ju,envmap_physical_pars_fragment:ap,envmap_vertex:Yu,fog_vertex:Ku,fog_pars_vertex:Qu,fog_fragment:Zu,fog_pars_fragment:Ju,gradientmap_pars_fragment:ep,lightmap_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:dp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:pp,lights_fragment_maps:fp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:bp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Cp,morphtarget_vertex:Rp,normal_fragment_begin:Lp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:kp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:zp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:df,uv_vertex:hf,worldpos_vertex:uf,background_vert:pf,background_frag:ff,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:yf,depth_vert:xf,depth_frag:vf,distanceRGBA_vert:bf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:wf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Cf,meshlambert_vert:Rf,meshlambert_frag:Lf,meshmatcap_vert:Pf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:kf,meshphong_vert:Nf,meshphong_frag:Uf,meshphysical_vert:Ff,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:Hf,points_frag:Gf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:qf},ie={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Zt={basic:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Rt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Rt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Rt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Rt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Rt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Rt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Rt([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Rt([ie.lights,ie.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Zt.physical={uniforms:Rt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Bs={r:0,b:0,g:0};function $f(r,e,t,n,i,s,a){const o=new ge(0);let l=s===!0?0:1,c,d,u=null,h=0,p=null;function _(m,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),x=!0);const v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===or)?(d===void 0&&(d=new Le(new ei(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ki(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,(u!==y||h!==y.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,p=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Le(new Qn(2,2),new bn({name:"BackgroundMaterial",uniforms:ki(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Bs,Yc(r)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function jf(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function u(P,O,V,q,W){let X=!1;if(a){const $=g(q,V,O);c!==$&&(c=$,p(c.object)),X=f(P,q,V,W),X&&x(P,q,V,W)}else{const $=O.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==$)&&(c.geometry=q.id,c.program=V.id,c.wireframe=$,X=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,I(P,O,V,q),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,O,V){const q=V.wireframe===!0;let W=o[P.id];W===void 0&&(W={},o[P.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let $=X[q];return $===void 0&&($=m(h()),X[q]=$),$}function m(P){const O=[],V=[],q=[];for(let W=0;W<i;W++)O[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,O,V,q){const W=c.attributes,X=O.attributes;let $=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){const j=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;$++}return c.attributesNum!==$||c.index!==q}function x(P,O,V,q){const W={},X=O.attributes;let $=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){let j=X[te];j===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),W[te]=oe,$++}c.attributes=W,c.attributesNum=$,c.index=q}function y(){const P=c.newAttributes;for(let O=0,V=P.length;O<V;O++)P[O]=0}function v(P){C(P,0)}function C(P,O){const V=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;V[P]=1,q[P]===0&&(r.enableVertexAttribArray(P),q[P]=1),W[P]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),W[P]=O)}function T(){const P=c.newAttributes,O=c.enabledAttributes;for(let V=0,q=O.length;V<q;V++)O[V]!==P[V]&&(r.disableVertexAttribArray(V),O[V]=0)}function A(P,O,V,q,W,X,$){$===!0?r.vertexAttribIPointer(P,O,V,W,X):r.vertexAttribPointer(P,O,V,q,W,X)}function I(P,O,V,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=q.attributes,X=V.getAttributes(),$=O.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let G=W[ee];if(G===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const j=G.normalized,oe=G.itemSize,me=t.get(G);if(me===void 0)continue;const fe=me.buffer,Ce=me.type,Pe=me.bytesPerElement,Me=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||G.gpuType===Lc);if(G.isInterleavedBufferAttribute){const We=G.data,k=We.stride,Et=G.offset;if(We.isInstancedInterleavedBuffer){for(let ye=0;ye<te.locationSize;ye++)C(te.location+ye,We.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ye=0;ye<te.locationSize;ye++)v(te.location+ye);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ye=0;ye<te.locationSize;ye++)A(te.location+ye,oe/te.locationSize,Ce,j,k*Pe,(Et+oe/te.locationSize*ye)*Pe,Me)}else{if(G.isInstancedBufferAttribute){for(let We=0;We<te.locationSize;We++)C(te.location+We,G.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let We=0;We<te.locationSize;We++)v(te.location+We);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let We=0;We<te.locationSize;We++)A(te.location+We,oe/te.locationSize,Ce,j,oe*Pe,oe/te.locationSize*We*Pe,Me)}}else if($!==void 0){const j=$[ee];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(te.location,j);break;case 3:r.vertexAttrib3fv(te.location,j);break;case 4:r.vertexAttrib4fv(te.location,j);break;default:r.vertexAttrib1fv(te.location,j)}}}}T()}function b(){H();for(const P in o){const O=o[P];for(const V in O){const q=O[V];for(const W in q)_(q[W].object),delete q[W];delete O[V]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const V in O){const q=O[V];for(const W in q)_(q[W].object),delete q[W];delete O[V]}delete o[P.id]}function z(P){for(const O in o){const V=o[O];if(V[P.id]===void 0)continue;const q=V[P.id];for(const W in q)_(q[W].object),delete q[W];delete V[P.id]}}function H(){J(),d=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:v,disableUnusedAttributes:T}}function Yf(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}function o(d,u){r.drawArrays(s,d,u),t.update(u,s,1)}function l(d,u,h){if(h===0)return;let p,_;if(i)p=r,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,d,u,h),t.update(u,s,h)}function c(d,u,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(d[_],u[_]);else{p.multiDrawArraysWEBGL(s,d,0,u,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Kf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,v=a||e.has("OES_texture_float"),C=y&&v,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:C,maxSamples:T}}function Qf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||i;return i=h,n=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,y=x*4;let v=f.clippingState||null;l.value=v,v=d(_,h,y,p);for(let C=0;C!==y;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==g;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zf(r){let e=new WeakMap;function t(a,o){return o===ma?a.mapping=Ci:o===ga&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cu(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hr extends Kc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,el=[.125,.215,.35,.446,.526,.582],$n=20,Hr=new hr,tl=new ge;let Gr=null,Vr=0,Wr=0;const Xn=(1+Math.sqrt(5))/2,yi=1/Xn,nl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Xn,yi),new R(0,Xn,-yi),new R(yi,0,Xn),new R(-yi,0,Xn),new R(Xn,yi,0),new R(-Xn,yi,0)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr,Vr,Wr),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ds,format:Gt,colorSpace:yt,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=em(s,e,t)}return i}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,i){const o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(tl),d.toneMapping=Dn,d.autoClear=!1;const p=new nn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new Le(new ei,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(tl),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;zs(i,x*y,f>2?y:0,y,y),d.setRenderTarget(i),g&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nl[(i-1)%nl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Le(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let x=0;for(let A=0;A<$n;++A){const I=A/g,b=Math.exp(-I*I/2);f.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-Mi?i-y+Mi:0),T=4*(this._cubeSize-v);zs(t,C,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Hr)}}function Jf(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+el.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Mi?l=el[a-r+Mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*p),y=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,b=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(b,g*_*T),y.set(h,m*_*T);const w=[T,T,T,T,T,T];v.set(w,f*_*T)}const C=new kt;C.setAttribute("position",new Pt(x,g)),C.setAttribute("uv",new Pt(y,m)),C.setAttribute("faceIndex",new Pt(v,f)),e.push(C),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(r,e,t){const n=new Jn(r,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function em(r,e,t){const n=new Float32Array($n),i=new R(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function rl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function al(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function tm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ma||l===ga,d=l===Ci||l===Ri;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new il(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&i(u)){t===null&&(t=new il(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function im(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(u){const h=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,v=x.length;y<v;y+=3){const C=x[y+0],T=x[y+1],A=x[y+2];h.push(C,T,T,A,A,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const C=y+0,T=y+1,A=y+2;h.push(C,T,T,A,A,C)}}else return;const m=new(Hc(h)?jc:$c)(h,1);m.version=g;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function d(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function sm(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,_){r.drawElements(s,_,o,p*l),t.update(_,s,1)}function u(p,_,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,o,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,o,p,0,g);let f=0;for(let x=0;x<g;x++)f+=_[x];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function rm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function am(r,e){return r[0]-e[0]}function om(r,e){return Math.abs(e[1])-Math.abs(r[1])}function lm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ke,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==g){let O=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const y=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let b=0;y===!0&&(b=1),v===!0&&(b=2),C===!0&&(b=3);let w=d.attributes.position.count*b,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*z*4*g),J=new Wc(H,w,z,g);J.type=yn,J.needsUpdate=!0;const P=b*4;for(let V=0;V<g;V++){const q=T[V],W=A[V],X=I[V],$=w*z*4*V;for(let ee=0;ee<q.count;ee++){const te=ee*P;y===!0&&(a.fromBufferAttribute(q,ee),H[$+te+0]=a.x,H[$+te+1]=a.y,H[$+te+2]=a.z,H[$+te+3]=0),v===!0&&(a.fromBufferAttribute(W,ee),H[$+te+4]=a.x,H[$+te+5]=a.y,H[$+te+6]=a.z,H[$+te+7]=0),C===!0&&(a.fromBufferAttribute(X,ee),H[$+te+8]=a.x,H[$+te+9]=a.y,H[$+te+10]=a.z,H[$+te+11]=X.itemSize===4?a.w:1)}}m={count:g,texture:J,size:new ke(w,z)},s.set(d,m),d.addEventListener("dispose",O)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const x=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",h),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[d.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[d.id]=g}for(let v=0;v<_;v++){const C=g[v];C[0]=v,C[1]=h[v]}g.sort(om);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(am);const m=d.morphAttributes.position,f=d.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const C=o[v],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+v)!==m[T]&&d.setAttribute("morphTarget"+v,m[T]),f&&d.getAttribute("morphNormal"+v)!==f[T]&&d.setAttribute("morphNormal"+v,f[T]),i[v]=A,x+=A):(m&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),f&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),i[v]=0)}const y=d.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function cm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Jc extends xt{constructor(e,t,n,i,s,a,o,l,c,d){if(d=d!==void 0?d:Yn,d!==Yn&&d!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Yn&&(n=Ln),n===void 0&&d===Pi&&(n=jn),super(null,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ed=new xt,td=new Jc(1,1);td.compareFunction=zc;const nd=new Wc,id=new qh,sd=new Qc,ol=[],ll=[],cl=new Float32Array(16),dl=new Float32Array(9),hl=new Float32Array(4);function Bi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ol[i];if(s===void 0&&(s=new Float32Array(i),ol[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ur(r,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function um(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function fm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;hl.set(n),r.uniformMatrix2fv(this.addr,!1,hl),pt(t,n)}}function mm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;dl.set(n),r.uniformMatrix3fv(this.addr,!1,dl),pt(t,n)}}function gm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;cl.set(n),r.uniformMatrix4fv(this.addr,!1,cl),pt(t,n)}}function _m(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?td:ed;t.setTexture2D(e||s,i)}function Tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||id,i)}function Am(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function Cm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nd,i)}function Rm(r){switch(r){case 5126:return dm;case 35664:return hm;case 35665:return um;case 35666:return pm;case 35674:return fm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return ym;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return bm;case 36294:return Mm;case 36295:return Sm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}function Lm(r,e){r.uniform1fv(this.addr,e)}function Pm(r,e){const t=Bi(e,this.size,2);r.uniform2fv(this.addr,t)}function Im(r,e){const t=Bi(e,this.size,3);r.uniform3fv(this.addr,t)}function Dm(r,e){const t=Bi(e,this.size,4);r.uniform4fv(this.addr,t)}function km(r,e){const t=Bi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nm(r,e){const t=Bi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Um(r,e){const t=Bi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fm(r,e){r.uniform1iv(this.addr,e)}function Om(r,e){r.uniform2iv(this.addr,e)}function Bm(r,e){r.uniform3iv(this.addr,e)}function zm(r,e){r.uniform4iv(this.addr,e)}function Hm(r,e){r.uniform1uiv(this.addr,e)}function Gm(r,e){r.uniform2uiv(this.addr,e)}function Vm(r,e){r.uniform3uiv(this.addr,e)}function Wm(r,e){r.uniform4uiv(this.addr,e)}function Xm(r,e,t){const n=this.cache,i=e.length,s=ur(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ed,s[a])}function qm(r,e,t){const n=this.cache,i=e.length,s=ur(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||id,s[a])}function $m(r,e,t){const n=this.cache,i=e.length,s=ur(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sd,s[a])}function jm(r,e,t){const n=this.cache,i=e.length,s=ur(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||nd,s[a])}function Ym(r){switch(r){case 5126:return Lm;case 35664:return Pm;case 35665:return Im;case 35666:return Dm;case 35674:return km;case 35675:return Nm;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return jm}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rm(t.type)}}class Qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ym(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function ul(r,e){r.seq.push(e),r.map[e.id]=e}function Jm(r,e,t){const n=r.name,i=n.length;for(Xr.lastIndex=0;;){const s=Xr.exec(n),a=Xr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ul(t,c===void 0?new Km(o,r,e):new Qm(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Zm(o),ul(t,u)),t=u}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Jm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const eg=37297;let tg=0;function ng(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ig(r){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(r);let n;switch(e===t?n="":e===ir&&t===nr?n="LinearDisplayP3ToLinearSRGB":e===nr&&t===ir&&(n="LinearSRGBToLinearDisplayP3"),r){case yt:case lr:return[n,"LinearTransferOETF"];case st:case Da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function fl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ng(r.getShaderSource(e),a)}else return i}function sg(r,e){const t=ig(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rg(r,e){let t;switch(e){case Jd:t="Linear";break;case eh:t="Reinhard";break;case th:t="OptimizedCineon";break;case nh:t="ACESFilmic";break;case sh:t="AgX";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ag(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function og(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Si).join(`
`)}function lg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Si(r){return r!==""}function ml(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(r){return r.replace(dg,ug)}const hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(r,e){let t=De[e];if(t===void 0){const n=hg.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(r){return r.replace(pg,fg)}function fg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function gg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Ri:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function yg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Qd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function xg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mg(t),c=gg(t),d=_g(t),u=yg(t),h=xg(t),p=t.isWebGL2?"":ag(t),_=og(t),g=lg(s),m=i.createProgram();let f,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Si).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Si).join(`
`),x.length>0&&(x+=`
`)):(f=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),x=[p,yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?De.tonemapping_pars_fragment:"",t.toneMapping!==Dn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),a=Ma(a),a=ml(a,t),a=gl(a,t),o=Ma(o),o=ml(o,t),o=gl(o,t),a=_l(a),o=_l(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=y+f+a,C=y+x+o,T=pl(i,i.VERTEX_SHADER,v),A=pl(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(H){if(r.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(A).trim();let V=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,A);else{const W=fl(i,T,"vertex"),X=fl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+W+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:V,programLog:J,vertexShader:{log:P,prefix:f},fragmentShader:{log:O,prefix:x}})}i.deleteShader(T),i.deleteShader(A),b=new Ys(i,m),w=cg(i,m)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,eg)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let bg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sg(e),t.set(e,n)),n}}class Sg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function wg(r,e,t,n,i,s,a){const o=new Xc,l=new Mg,c=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,w,z,H,J){const P=H.fog,O=J.geometry,V=b.isMeshStandardMaterial?H.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),W=q&&q.mapping===or?q.image.height:null,X=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=$!==void 0?$.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let G,j,oe,me;if(X){const Tt=Zt[X];G=Tt.vertexShader,j=Tt.fragmentShader}else G=b.vertexShader,j=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const fe=r.getRenderTarget(),Ce=J.isInstancedMesh===!0,Pe=J.isBatchedMesh===!0,Me=!!b.map,We=!!b.matcap,k=!!q,Et=!!b.aoMap,ye=!!b.lightMap,Te=!!b.bumpMap,he=!!b.normalMap,nt=!!b.displacementMap,Ne=!!b.emissiveMap,E=!!b.metalnessMap,M=!!b.roughnessMap,U=b.anisotropy>0,Q=b.clearcoat>0,K=b.iridescence>0,Z=b.sheen>0,ue=b.transmission>0,ae=U&&!!b.anisotropyMap,ce=Q&&!!b.clearcoatMap,be=Q&&!!b.clearcoatNormalMap,Ue=Q&&!!b.clearcoatRoughnessMap,Y=K&&!!b.iridescenceMap,je=K&&!!b.iridescenceThicknessMap,Ge=Z&&!!b.sheenColorMap,Ee=Z&&!!b.sheenRoughnessMap,_e=!!b.specularMap,de=!!b.specularColorMap,Ie=!!b.specularIntensityMap,qe=ue&&!!b.transmissionMap,rt=ue&&!!b.thicknessMap,Oe=!!b.gradientMap,ne=!!b.alphaMap,L=b.alphaTest>0,se=!!b.alphaHash,re=!!b.extensions,Se=!!O.attributes.uv1,xe=!!O.attributes.uv2,Qe=!!O.attributes.uv3;let Ze=Dn;return b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:d,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:j,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Pe,instancing:Ce,instancingColor:Ce&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:yt,map:Me,matcap:We,envMap:k,envMapMode:k&&q.mapping,envMapCubeUVHeight:W,aoMap:Et,lightMap:ye,bumpMap:Te,normalMap:he,displacementMap:h&&nt,emissiveMap:Ne,normalMapObjectSpace:he&&b.normalMapType===yh,normalMapTangentSpace:he&&b.normalMapType===Bc,metalnessMap:E,roughnessMap:M,anisotropy:U,anisotropyMap:ae,clearcoat:Q,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:K,iridescenceMap:Y,iridescenceThicknessMap:je,sheen:Z,sheenColorMap:Ge,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:de,specularIntensityMap:Ie,transmission:ue,transmissionMap:qe,thicknessMap:rt,gradientMap:Oe,opaque:b.transparent===!1&&b.blending===Ei,alphaMap:ne,alphaTest:L,alphaHash:se,combine:b.combine,mapUv:Me&&g(b.map.channel),aoMapUv:Et&&g(b.aoMap.channel),lightMapUv:ye&&g(b.lightMap.channel),bumpMapUv:Te&&g(b.bumpMap.channel),normalMapUv:he&&g(b.normalMap.channel),displacementMapUv:nt&&g(b.displacementMap.channel),emissiveMapUv:Ne&&g(b.emissiveMap.channel),metalnessMapUv:E&&g(b.metalnessMap.channel),roughnessMapUv:M&&g(b.roughnessMap.channel),anisotropyMapUv:ae&&g(b.anisotropyMap.channel),clearcoatMapUv:ce&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(b.sheenRoughnessMap.channel),specularMapUv:_e&&g(b.specularMap.channel),specularColorMapUv:de&&g(b.specularColorMap.channel),specularIntensityMapUv:Ie&&g(b.specularIntensityMap.channel),transmissionMapUv:qe&&g(b.transmissionMap.channel),thicknessMapUv:rt&&g(b.thicknessMap.channel),alphaMapUv:ne&&g(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:xe,vertexUv3s:Qe,pointsUvs:J.isPoints===!0&&!!O.attributes.uv&&(Me||ne),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===en,flipSided:b.side===wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:re&&b.extensions.derivatives===!0,extensionFragDepth:re&&b.extensions.fragDepth===!0,extensionDrawBuffers:re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)w.push(z),w.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(x(w,b),y(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function v(b){const w=_[b.type];let z;if(w){const H=Zt[w];z=ru.clone(H.uniforms)}else z=b.uniforms;return z}function C(b,w){let z;for(let H=0,J=c.length;H<J;H++){const P=c[H];if(P.cacheKey===w){z=P,++z.usedTimes;break}}return z===void 0&&(z=new vg(r,w,b,s),c.push(z)),z}function T(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:I}}function Eg(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Tg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,h,p,_,g,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,h,p,_,g,m){const f=a(u,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,h,p,_,g,m){const f=a(u,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||Tg),n.length>1&&n.sort(h||xl),i.length>1&&i.sort(h||xl)}function d(){for(let u=e,h=r.length;u<h;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function Ag(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vl,r.set(n,[a])):i>=s.length?(a=new vl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ge};break;case"SpotLight":t={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function Rg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Lg=0;function Pg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ig(r,e){const t=new Cg,n=Rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new R);const s=new R,a=new He,o=new He;function l(d,u){let h=0,p=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,m=0,f=0,x=0,y=0,v=0,C=0,T=0,A=0,I=0,b=0;d.sort(Pg);const w=u===!0?Math.PI:1;for(let H=0,J=d.length;H<J;H++){const P=d[H],O=P.color,V=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*V*w,p+=O.g*V*w,_+=O.b*V*w;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);b++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const $=P.shadow,ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=P.shadow.matrix,v++}i.directional[g]=X,g++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(V*w),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[f]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[f]=$.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=W,T++}f++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=X,x++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,ee=n.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,C++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(V*w),X.groundColor.copy(P.groundColor).multiplyScalar(V*w),i.hemi[y]=X,y++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==g||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==x||z.hemiLength!==y||z.numDirectionalShadows!==v||z.numPointShadows!==C||z.numSpotShadows!==T||z.numSpotMaps!==A||z.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=b,z.directionalLength=g,z.pointLength=m,z.spotLength=f,z.rectAreaLength=x,z.hemiLength=y,z.numDirectionalShadows=v,z.numPointShadows=C,z.numSpotShadows=T,z.numSpotMaps=A,z.numLightProbes=b,i.version=Lg++)}function c(d,u){let h=0,p=0,_=0,g=0,m=0;const f=u.matrixWorldInverse;for(let x=0,y=d.length;x<y;x++){const v=d[x];if(v.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),h++}else if(v.isSpotLight){const C=i.spot[_];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),_++}else if(v.isRectAreaLight){const C=i.rectArea[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(v.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function bl(r,e){const t=new Ig(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dg(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new bl(r,e),t.set(s,[l])):a>=o.length?(l=new bl(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class kg extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ng extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Og(r,e,t){let n=new Na;const i=new ke,s=new ke,a=new Ke,o=new kg({depthPacking:_h}),l=new Ng,c={},d=t.maxTextureSize,u={[vn]:wt,[wt]:vn,[en]:en},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ug,fragmentShader:Fg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new kt;_.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Le(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let f=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=r.getRenderTarget(),w=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),H=r.state;H.setBlending(In),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const J=f!==_n&&this.type===_n,P=f===_n&&this.type!==_n;for(let O=0,V=T.length;O<V;O++){const q=T[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),s.copy(W.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/X.x),i.x=s.x*X.x,W.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/X.y),i.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||J===!0||P===!0){const ee=this.type!==_n?{minFilter:_t,magFilter:_t}:{};W.map!==null&&W.map.dispose(),W.map=new Jn(i.x,i.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const $=W.getViewportCount();for(let ee=0;ee<$;ee++){const te=W.getViewport(ee);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(a),W.updateMatrices(q,ee),n=W.getFrustum(),v(A,I,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&x(W,I),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(b,w,z)};function x(T,A){const I=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,p,g,null)}function y(T,A,I,b){let w=null;const z=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)w=z;else if(w=I.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=w.uuid,J=A.uuid;let P=c[H];P===void 0&&(P={},c[H]=P);let O=P[J];O===void 0&&(O=w.clone(),P[J]=O,A.addEventListener("dispose",C)),w=O}if(w.visible=A.visible,w.wireframe=A.wireframe,b===_n?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=I}return w}function v(T,A,I,b,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const J=e.update(T),P=T.material;if(Array.isArray(P)){const O=J.groups;for(let V=0,q=O.length;V<q;V++){const W=O[V],X=P[W.materialIndex];if(X&&X.visible){const $=y(T,X,b,w);T.onBeforeShadow(r,T,A,I,J,$,W),r.renderBufferDirect(I,null,J,$,T,W),T.onAfterShadow(r,T,A,I,J,$,W)}}}else if(P.visible){const O=y(T,P,b,w);T.onBeforeShadow(r,T,A,I,J,O,null),r.renderBufferDirect(I,null,J,O,T,null),T.onAfterShadow(r,T,A,I,J,O,null)}}const H=T.children;for(let J=0,P=H.length;J<P;J++)v(H[J],A,I,b,w)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const b=c[I],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Bg(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const se=new Ke;let re=null;const Se=new Ke(0,0,0,0);return{setMask:function(xe){re!==xe&&!L&&(r.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){L=xe},setClear:function(xe,Qe,Ze,ft,Tt){Tt===!0&&(xe*=ft,Qe*=ft,Ze*=ft),se.set(xe,Qe,Ze,ft),Se.equals(se)===!1&&(r.clearColor(xe,Qe,Ze,ft),Se.copy(se))},reset:function(){L=!1,re=null,Se.set(-1,0,0,0)}}}function s(){let L=!1,se=null,re=null,Se=null;return{setTest:function(xe){xe?Pe(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(xe){se!==xe&&!L&&(r.depthMask(xe),se=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case Wd:r.depthFunc(r.NEVER);break;case Xd:r.depthFunc(r.ALWAYS);break;case qd:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case $d:r.depthFunc(r.EQUAL);break;case jd:r.depthFunc(r.GEQUAL);break;case Yd:r.depthFunc(r.GREATER);break;case Kd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=xe}},setLocked:function(xe){L=xe},setClear:function(xe){Se!==xe&&(r.clearDepth(xe),Se=xe)},reset:function(){L=!1,se=null,re=null,Se=null}}}function a(){let L=!1,se=null,re=null,Se=null,xe=null,Qe=null,Ze=null,ft=null,Tt=null;return{setTest:function(Je){L||(Je?Pe(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Je){se!==Je&&!L&&(r.stencilMask(Je),se=Je)},setFunc:function(Je,At,Kt){(re!==Je||Se!==At||xe!==Kt)&&(r.stencilFunc(Je,At,Kt),re=Je,Se=At,xe=Kt)},setOp:function(Je,At,Kt){(Qe!==Je||Ze!==At||ft!==Kt)&&(r.stencilOp(Je,At,Kt),Qe=Je,Ze=At,ft=Kt)},setLocked:function(Je){L=Je},setClear:function(Je){Tt!==Je&&(r.clearStencil(Je),Tt=Je)},reset:function(){L=!1,se=null,re=null,Se=null,xe=null,Qe=null,Ze=null,ft=null,Tt=null}}}const o=new i,l=new s,c=new a,d=new WeakMap,u=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,y=null,v=null,C=null,T=null,A=null,I=null,b=new ge(0,0,0),w=0,z=!1,H=null,J=null,P=null,O=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),W=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=X>=2);let ee=null,te={};const G=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),oe=new Ke().fromArray(G),me=new Ke().fromArray(j);function fe(L,se,re,Se){const xe=new Uint8Array(4),Qe=r.createTexture();r.bindTexture(L,Qe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<re;Ze++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(se+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return Qe}const Ce={};Ce[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(Js),Ne(!1),E(Ja),Pe(r.CULL_FACE),he(In);function Pe(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Me(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function We(L,se){return p[L]!==se?(r.bindFramebuffer(L,se),p[L]=se,n&&(L===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=se),L===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function k(L,se){let re=g,Se=!1;if(L)if(re=_.get(se),re===void 0&&(re=[],_.set(se,re)),L.isWebGLMultipleRenderTargets){const xe=L.texture;if(re.length!==xe.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Qe=0,Ze=xe.length;Qe<Ze;Qe++)re[Qe]=r.COLOR_ATTACHMENT0+Qe;re.length=xe.length,Se=!0}}else re[0]!==r.COLOR_ATTACHMENT0&&(re[0]=r.COLOR_ATTACHMENT0,Se=!0);else re[0]!==r.BACK&&(re[0]=r.BACK,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Et(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const ye={[qn]:r.FUNC_ADD,[Rd]:r.FUNC_SUBTRACT,[Ld]:r.FUNC_REVERSE_SUBTRACT};if(n)ye[io]=r.MIN,ye[so]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[io]=L.MIN_EXT,ye[so]=L.MAX_EXT)}const Te={[Pd]:r.ZERO,[Id]:r.ONE,[Dd]:r.SRC_COLOR,[pa]:r.SRC_ALPHA,[Bd]:r.SRC_ALPHA_SATURATE,[Fd]:r.DST_COLOR,[Nd]:r.DST_ALPHA,[kd]:r.ONE_MINUS_SRC_COLOR,[fa]:r.ONE_MINUS_SRC_ALPHA,[Od]:r.ONE_MINUS_DST_COLOR,[Ud]:r.ONE_MINUS_DST_ALPHA,[zd]:r.CONSTANT_COLOR,[Hd]:r.ONE_MINUS_CONSTANT_COLOR,[Gd]:r.CONSTANT_ALPHA,[Vd]:r.ONE_MINUS_CONSTANT_ALPHA};function he(L,se,re,Se,xe,Qe,Ze,ft,Tt,Je){if(L===In){f===!0&&(Me(r.BLEND),f=!1);return}if(f===!1&&(Pe(r.BLEND),f=!0),L!==Cd){if(L!==x||Je!==z){if((y!==qn||T!==qn)&&(r.blendEquation(r.FUNC_ADD),y=qn,T=qn),Je)switch(L){case Ei:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.ONE,r.ONE);break;case to:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case no:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case to:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case no:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,C=null,A=null,I=null,b.set(0,0,0),w=0,x=L,z=Je}return}xe=xe||se,Qe=Qe||re,Ze=Ze||Se,(se!==y||xe!==T)&&(r.blendEquationSeparate(ye[se],ye[xe]),y=se,T=xe),(re!==v||Se!==C||Qe!==A||Ze!==I)&&(r.blendFuncSeparate(Te[re],Te[Se],Te[Qe],Te[Ze]),v=re,C=Se,A=Qe,I=Ze),(ft.equals(b)===!1||Tt!==w)&&(r.blendColor(ft.r,ft.g,ft.b,Tt),b.copy(ft),w=Tt),x=L,z=!1}function nt(L,se){L.side===en?Me(r.CULL_FACE):Pe(r.CULL_FACE);let re=L.side===wt;se&&(re=!re),Ne(re),L.blending===Ei&&L.transparent===!1?he(In):he(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Se=L.stencilWrite;c.setTest(Se),Se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){H!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),H=L)}function E(L){L!==Td?(Pe(r.CULL_FACE),L!==J&&(L===Ja?r.cullFace(r.BACK):L===Ad?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),J=L}function M(L){L!==P&&(W&&r.lineWidth(L),P=L)}function U(L,se,re){L?(Pe(r.POLYGON_OFFSET_FILL),(O!==se||V!==re)&&(r.polygonOffset(se,re),O=se,V=re)):Me(r.POLYGON_OFFSET_FILL)}function Q(L){L?Pe(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function K(L){L===void 0&&(L=r.TEXTURE0+q-1),ee!==L&&(r.activeTexture(L),ee=L)}function Z(L,se,re){re===void 0&&(ee===null?re=r.TEXTURE0+q-1:re=ee);let Se=te[re];Se===void 0&&(Se={type:void 0,texture:void 0},te[re]=Se),(Se.type!==L||Se.texture!==se)&&(ee!==re&&(r.activeTexture(re),ee=re),r.bindTexture(L,se||Ce[L]),Se.type=L,Se.texture=se)}function ue(){const L=te[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){oe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function qe(L){me.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function rt(L,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Se=re.get(L);Se===void 0&&(Se=r.getUniformBlockIndex(se,L.name),re.set(L,Se))}function Oe(L,se){const Se=u.get(se).get(L);d.get(se)!==Se&&(r.uniformBlockBinding(se,Se,L.__bindingPointIndex),d.set(se,Se))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ee=null,te={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,y=null,v=null,C=null,T=null,A=null,I=null,b=new ge(0,0,0),w=0,z=!1,H=null,J=null,P=null,O=null,V=null,oe.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Me,bindFramebuffer:We,drawBuffers:k,useProgram:Et,setBlending:he,setMaterial:nt,setFlipSided:Ne,setCullFace:E,setLineWidth:M,setPolygonOffset:U,setScissorTest:Q,activeTexture:K,bindTexture:Z,unbindTexture:ue,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:_e,texImage3D:de,updateUBOMapping:rt,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:Ee,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:Y,compressedTexSubImage3D:je,scissor:Ie,viewport:qe,reset:ne}}function zg(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,M){return p?new OffscreenCanvas(E,M):us("canvas")}function g(E,M,U,Q){let K=1;if((E.width>Q||E.height>Q)&&(K=Q/Math.max(E.width,E.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Z=M?rr:Math.floor,ue=Z(K*E.width),ae=Z(K*E.height);u===void 0&&(u=_(ue,ae));const ce=U?_(ue,ae):u;return ce.width=ue,ce.height=ae,ce.getContext("2d").drawImage(E,0,0,ue,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ue+"x"+ae+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return ba(E.width)&&ba(E.height)}function f(E){return o?!1:E.wrapS!==Ht||E.wrapT!==Ht||E.minFilter!==_t&&E.minFilter!==Dt}function x(E,M){return E.generateMipmaps&&M&&E.minFilter!==_t&&E.minFilter!==Dt}function y(E){r.generateMipmap(E)}function v(E,M,U,Q,K=!1){if(o===!1)return M;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=M;if(M===r.RED&&(U===r.FLOAT&&(Z=r.R32F),U===r.HALF_FLOAT&&(Z=r.R16F),U===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.R8UI),U===r.UNSIGNED_SHORT&&(Z=r.R16UI),U===r.UNSIGNED_INT&&(Z=r.R32UI),U===r.BYTE&&(Z=r.R8I),U===r.SHORT&&(Z=r.R16I),U===r.INT&&(Z=r.R32I)),M===r.RG&&(U===r.FLOAT&&(Z=r.RG32F),U===r.HALF_FLOAT&&(Z=r.RG16F),U===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RGBA){const ue=K?tr:Xe.getTransfer(Q);U===r.FLOAT&&(Z=r.RGBA32F),U===r.HALF_FLOAT&&(Z=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Z=ue===et?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(E,M,U){return x(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==_t&&E.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===_t||E===_a||E===js?r.NEAREST:r.LINEAR}function A(E){const M=E.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&d.delete(M)}function I(E){const M=E.target;M.removeEventListener("dispose",I),z(M)}function b(E){const M=n.get(E);if(M.__webglInit===void 0)return;const U=E.source,Q=h.get(U);if(Q){const K=Q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys(Q).length===0&&h.delete(U)}n.remove(E)}function w(E){const M=n.get(E);r.deleteTexture(M.__webglTexture);const U=E.source,Q=h.get(U);delete Q[M.__cacheKey],a.memory.textures--}function z(E){const M=E.texture,U=n.get(E),Q=n.get(M);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(U.__webglFramebuffer[K]))for(let Z=0;Z<U.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(U.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(U.__webglFramebuffer[K]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[K])}else{if(Array.isArray(U.__webglFramebuffer))for(let K=0;K<U.__webglFramebuffer.length;K++)r.deleteFramebuffer(U.__webglFramebuffer[K]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let K=0;K<U.__webglColorRenderbuffer.length;K++)U.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[K]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,Z=M.length;K<Z;K++){const ue=n.get(M[K]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(M[K])}n.remove(M),n.remove(E)}let H=0;function J(){H=0}function P(){const E=H;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),H+=1,E}function O(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function V(E,M){const U=n.get(E);if(E.isVideoTexture&&nt(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,E,M);return}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}function q(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){oe(U,E,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M)}function W(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){oe(U,E,M);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)}function X(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){me(U,E,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)}const $={[Li]:r.REPEAT,[Ht]:r.CLAMP_TO_EDGE,[er]:r.MIRRORED_REPEAT},ee={[_t]:r.NEAREST,[_a]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[Rc]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},te={[xh]:r.NEVER,[Eh]:r.ALWAYS,[vh]:r.LESS,[zc]:r.LEQUAL,[bh]:r.EQUAL,[wh]:r.GEQUAL,[Mh]:r.GREATER,[Sh]:r.NOTEQUAL};function G(E,M,U){if(U?(r.texParameteri(E,r.TEXTURE_WRAP_S,$[M.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,$[M.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,$[M.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,ee[M.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,ee[M.minFilter])):(r.texParameteri(E,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(E,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Ht||M.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,r.TEXTURE_MAG_FILTER,T(M.magFilter)),r.texParameteri(E,r.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==_t&&M.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===_t||M.minFilter!==js&&M.minFilter!==Zn||M.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function j(E,M){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const Q=M.source;let K=h.get(Q);K===void 0&&(K={},h.set(Q,K));const Z=O(M);if(Z!==E.__cacheKey){K[Z]===void 0&&(K[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[Z].usedTimes++;const ue=K[E.__cacheKey];ue!==void 0&&(K[E.__cacheKey].usedTimes--,ue.usedTimes===0&&w(M)),E.__cacheKey=Z,E.__webglTexture=K[Z].texture}return U}function oe(E,M,U){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const K=j(E,M),Z=M.source;t.bindTexture(Q,E.__webglTexture,r.TEXTURE0+U);const ue=n.get(Z);if(Z.version!==ue.__version||K===!0){t.activeTexture(r.TEXTURE0+U);const ae=Xe.getPrimaries(Xe.workingColorSpace),ce=M.colorSpace===Vt?null:Xe.getPrimaries(M.colorSpace),be=M.colorSpace===Vt||ae===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=f(M)&&m(M.image)===!1;let Y=g(M.image,Ue,!1,i.maxTextureSize);Y=Ne(M,Y);const je=m(Y)||o,Ge=s.convert(M.format,M.colorSpace);let Ee=s.convert(M.type),_e=v(M.internalFormat,Ge,Ee,M.colorSpace,M.isVideoTexture);G(Q,M,je);let de;const Ie=M.mipmaps,qe=o&&M.isVideoTexture!==!0&&_e!==Uc,rt=ue.__version===void 0||K===!0,Oe=C(M,Y,je);if(M.isDepthTexture)_e=r.DEPTH_COMPONENT,o?M.type===yn?_e=r.DEPTH_COMPONENT32F:M.type===Ln?_e=r.DEPTH_COMPONENT24:M.type===jn?_e=r.DEPTH24_STENCIL8:_e=r.DEPTH_COMPONENT16:M.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Yn&&_e===r.DEPTH_COMPONENT&&M.type!==Ia&&M.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ln,Ee=s.convert(M.type)),M.format===Pi&&_e===r.DEPTH_COMPONENT&&(_e=r.DEPTH_STENCIL,M.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=jn,Ee=s.convert(M.type))),rt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,_e,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,_e,Y.width,Y.height,0,Ge,Ee,null));else if(M.isDataTexture)if(Ie.length>0&&je){qe&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)de=Ie[ne],qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,Ee,de.data):t.texImage2D(r.TEXTURE_2D,ne,_e,de.width,de.height,0,Ge,Ee,de.data);M.generateMipmaps=!1}else qe?(rt&&t.texStorage2D(r.TEXTURE_2D,Oe,_e,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,Ge,Ee,Y.data)):t.texImage2D(r.TEXTURE_2D,0,_e,Y.width,Y.height,0,Ge,Ee,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,_e,Ie[0].width,Ie[0].height,Y.depth);for(let ne=0,L=Ie.length;ne<L;ne++)de=Ie[ne],M.format!==Gt?Ge!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Y.depth,Ge,de.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,_e,de.width,de.height,Y.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Y.depth,Ge,Ee,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,_e,de.width,de.height,Y.depth,0,Ge,Ee,de.data)}else{qe&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)de=Ie[ne],M.format!==Gt?Ge!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,Ee,de.data):t.texImage2D(r.TEXTURE_2D,ne,_e,de.width,de.height,0,Ge,Ee,de.data)}else if(M.isDataArrayTexture)qe?(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ge,Ee,Y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,Y.width,Y.height,Y.depth,0,Ge,Ee,Y.data);else if(M.isData3DTexture)qe?(rt&&t.texStorage3D(r.TEXTURE_3D,Oe,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ge,Ee,Y.data)):t.texImage3D(r.TEXTURE_3D,0,_e,Y.width,Y.height,Y.depth,0,Ge,Ee,Y.data);else if(M.isFramebufferTexture){if(rt)if(qe)t.texStorage2D(r.TEXTURE_2D,Oe,_e,Y.width,Y.height);else{let ne=Y.width,L=Y.height;for(let se=0;se<Oe;se++)t.texImage2D(r.TEXTURE_2D,se,_e,ne,L,0,Ge,Ee,null),ne>>=1,L>>=1}}else if(Ie.length>0&&je){qe&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,_e,Ie[0].width,Ie[0].height);for(let ne=0,L=Ie.length;ne<L;ne++)de=Ie[ne],qe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Ge,Ee,de):t.texImage2D(r.TEXTURE_2D,ne,_e,Ge,Ee,de);M.generateMipmaps=!1}else qe?(rt&&t.texStorage2D(r.TEXTURE_2D,Oe,_e,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,Ee,Y)):t.texImage2D(r.TEXTURE_2D,0,_e,Ge,Ee,Y);x(M,je)&&y(Q),ue.__version=Z.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function me(E,M,U){if(M.image.length!==6)return;const Q=j(E,M),K=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+U);const Z=n.get(K);if(K.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+U);const ue=Xe.getPrimaries(Xe.workingColorSpace),ae=M.colorSpace===Vt?null:Xe.getPrimaries(M.colorSpace),ce=M.colorSpace===Vt||ue===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let ne=0;ne<6;ne++)!be&&!Ue?Y[ne]=g(M.image[ne],!1,!0,i.maxCubemapSize):Y[ne]=Ue?M.image[ne].image:M.image[ne],Y[ne]=Ne(M,Y[ne]);const je=Y[0],Ge=m(je)||o,Ee=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),de=v(M.internalFormat,Ee,_e,M.colorSpace),Ie=o&&M.isVideoTexture!==!0,qe=Z.__version===void 0||Q===!0;let rt=C(M,je,Ge);G(r.TEXTURE_CUBE_MAP,M,Ge);let Oe;if(be){Ie&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,de,je.width,je.height);for(let ne=0;ne<6;ne++){Oe=Y[ne].mipmaps;for(let L=0;L<Oe.length;L++){const se=Oe[L];M.format!==Gt?Ee!==null?Ie?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,Ee,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,Ee,_e,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,de,se.width,se.height,0,Ee,_e,se.data)}}}else{Oe=M.mipmaps,Ie&&qe&&(Oe.length>0&&rt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,de,Y[0].width,Y[0].height));for(let ne=0;ne<6;ne++)if(Ue){Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Y[ne].width,Y[ne].height,Ee,_e,Y[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Y[ne].width,Y[ne].height,0,Ee,_e,Y[ne].data);for(let L=0;L<Oe.length;L++){const re=Oe[L].image[ne].image;Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,re.width,re.height,Ee,_e,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,de,re.width,re.height,0,Ee,_e,re.data)}}else{Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,_e,Y[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Ee,_e,Y[ne]);for(let L=0;L<Oe.length;L++){const se=Oe[L];Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ee,_e,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,de,Ee,_e,se.image[ne])}}}x(M,Ge)&&y(r.TEXTURE_CUBE_MAP),Z.__version=K.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function fe(E,M,U,Q,K,Z){const ue=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),ce=v(U.internalFormat,ue,ae,U.colorSpace);if(!n.get(M).__hasExternalTextures){const Ue=Math.max(1,M.width>>Z),Y=Math.max(1,M.height>>Z);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,ce,Ue,Y,M.depth,0,ue,ae,null):t.texImage2D(K,Z,ce,Ue,Y,0,ue,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),he(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,K,n.get(U).__webglTexture,0,Te(M)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,K,n.get(U).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(E,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(U||he(M)){const K=M.depthTexture;K&&K.isDepthTexture&&(K.type===yn?Q=r.DEPTH_COMPONENT32F:K.type===Ln&&(Q=r.DEPTH_COMPONENT24));const Z=Te(M);he(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,Q,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,Q,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Te(M);U&&he(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):he(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0;K<Q.length;K++){const Z=Q[K],ue=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),ce=v(Z.internalFormat,ue,ae,Z.colorSpace),be=Te(M);U&&he(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,M.width,M.height):he(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ce,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,K=Te(M);if(M.depthTexture.format===Yn)he(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Pi)he(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Me(E){const M=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,E)}else if(U){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(E,M,U){const Q=n.get(E);M!==void 0&&fe(Q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Me(E)}function k(E){const M=E.texture,U=n.get(E),Q=n.get(M);E.addEventListener("dispose",I),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,a.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,Z=E.isWebGLMultipleRenderTargets===!0,ue=m(E)||o;if(K){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ce=0;ce<M.mipmaps.length;ce++)U.__webglFramebuffer[ae][ce]=r.createFramebuffer()}else U.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)U.__webglFramebuffer[ae]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(Z)if(i.drawBuffers){const ae=E.texture;for(let ce=0,be=ae.length;ce<be;ce++){const Ue=n.get(ae[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&he(E)===!1){const ae=Z?M:[M];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const be=ae[ce];U.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ue=s.convert(be.format,be.colorSpace),Y=s.convert(be.type),je=v(be.internalFormat,Ue,Y,be.colorSpace,E.isXRRenderTarget===!0),Ge=Te(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,je,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),G(r.TEXTURE_CUBE_MAP,M,ue);for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)fe(U.__webglFramebuffer[ae][ce],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else fe(U.__webglFramebuffer[ae],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(M,ue)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const ae=E.texture;for(let ce=0,be=ae.length;ce<be;ce++){const Ue=ae[ce],Y=n.get(Ue);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture),G(r.TEXTURE_2D,Ue,ue),fe(U.__webglFramebuffer,E,Ue,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),x(Ue,ue)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ae=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),G(ae,M,ue),o&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)fe(U.__webglFramebuffer[ce],E,M,r.COLOR_ATTACHMENT0,ae,ce);else fe(U.__webglFramebuffer,E,M,r.COLOR_ATTACHMENT0,ae,0);x(M,ue)&&y(ae),t.unbindTexture()}E.depthBuffer&&Me(E)}function Et(E){const M=m(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,K=U.length;Q<K;Q++){const Z=U[Q];if(x(Z,M)){const ue=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=n.get(Z).__webglTexture;t.bindTexture(ue,ae),y(ue),t.unbindTexture()}}}function ye(E){if(o&&E.samples>0&&he(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let K=r.COLOR_BUFFER_BIT;const Z=[],ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(E),ce=E.isWebGLMultipleRenderTargets===!0;if(ce)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let be=0;be<M.length;be++){Z.push(r.COLOR_ATTACHMENT0+be),E.depthBuffer&&Z.push(ue);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(E.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[be]),Ue===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ue]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ue])),ce){const Y=n.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,U,Q,0,0,U,Q,K,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Ue=n.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Te(E){return Math.min(i.maxSamples,E.samples)}function he(E){const M=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(E){const M=a.render.frame;d.get(E)!==M&&(d.set(E,M),E.update())}function Ne(E,M){const U=E.colorSpace,Q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===va||U!==yt&&U!==Vt&&(Xe.getTransfer(U)===et?o===!1?e.has("EXT_sRGB")===!0&&Q===Gt?(E.format=va,E.minFilter=Dt,E.generateMipmaps=!1):M=Gc.sRGBToLinear(M):(Q!==Gt||K!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=he}function Hg(r,e,t){const n=t.isWebGL2;function i(s,a=Vt){let o;const l=Xe.getTransfer(a);if(s===kn)return r.UNSIGNED_BYTE;if(s===Pc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ic)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ah)return r.BYTE;if(s===oh)return r.SHORT;if(s===Ia)return r.UNSIGNED_SHORT;if(s===Lc)return r.INT;if(s===Ln)return r.UNSIGNED_INT;if(s===yn)return r.FLOAT;if(s===ds)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lh)return r.ALPHA;if(s===Gt)return r.RGBA;if(s===ch)return r.LUMINANCE;if(s===dh)return r.LUMINANCE_ALPHA;if(s===Yn)return r.DEPTH_COMPONENT;if(s===Pi)return r.DEPTH_STENCIL;if(s===va)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===hh)return r.RED;if(s===Dc)return r.RED_INTEGER;if(s===uh)return r.RG;if(s===kc)return r.RG_INTEGER;if(s===Nc)return r.RGBA_INTEGER;if(s===yr||s===xr||s===vr||s===br)if(l===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===br)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ao||s===oo||s===lo||s===co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ho||s===uo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ho)return l===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===po||s===fo||s===mo||s===go||s===_o||s===yo||s===xo||s===vo||s===bo||s===Mo||s===So||s===wo||s===Eo||s===To)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===po)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===go)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_o)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===So)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===To)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mr||s===Ao||s===Co)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mr)return l===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Co)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ph||s===Ro||s===Lo||s===Po)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Mr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ro)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Po)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Gg extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ht extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wg extends Oi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],y=[],v=new ke;let C=null;const T=new Lt;T.layers.enable(1),T.viewport=new Ke;const A=new Lt;A.layers.enable(2),A.viewport=new Ke;const I=[T,A],b=new Gg;b.layers.enable(1),b.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=x[G];return j===void 0&&(j=new qr,x[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=x[G];return j===void 0&&(j=new qr,x[G]=j),j.getGripSpace()},this.getHand=function(G){let j=x[G];return j===void 0&&(j=new qr,x[G]=j),j.getHandSpace()};function H(G){const j=y.indexOf(G.inputSource);if(j===-1)return;const oe=x[j];oe!==void 0&&(oe.update(G.inputSource,G.frame,c||a),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let G=0;G<x.length;G++){const j=y[G];j!==null&&(y[G]=null,x[G].disconnect(j))}w=null,z=null,e.setRenderTarget(m),p=null,h=null,u=null,i=null,f=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?Pi:Yn,oe=g.stencil?jn:Ln);const fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(fe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Jn(h.textureWidth,h.textureHeight,{format:Gt,type:kn,depthTexture:new Jc(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(f);Ce.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let j=0;j<G.removed.length;j++){const oe=G.removed[j],me=y.indexOf(oe);me>=0&&(y[me]=null,x[me].disconnect(oe))}for(let j=0;j<G.added.length;j++){const oe=G.added[j];let me=y.indexOf(oe);if(me===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=y.length){y.push(oe),me=Ce;break}else if(y[Ce]===null){y[Ce]=oe,me=Ce;break}if(me===-1)break}const fe=x[me];fe&&fe.connect(oe)}}const O=new R,V=new R;function q(G,j,oe){O.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const me=O.distanceTo(V),fe=j.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Pe=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],k=(fe[9]-1)/fe[5],Et=(fe[8]-1)/fe[0],ye=(Ce[8]+1)/Ce[0],Te=Pe*Et,he=Pe*ye,nt=me/(-Et+ye),Ne=nt*-Et;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ne),G.translateZ(nt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=Pe+nt,M=Me+nt,U=Te-Ne,Q=he+(me-Ne),K=We*Me/M*E,Z=k*Me/M*E;G.projectionMatrix.makePerspective(U,Q,K,Z,E,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;b.near=A.near=T.near=G.near,b.far=A.far=T.far=G.far,(w!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,z=b.far);const j=G.parent,oe=b.cameras;W(b,j);for(let me=0;me<oe.length;me++)W(oe[me],j);oe.length===2?q(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),X(G,b,j)};function X(G,j,oe){oe===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Di*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let $=null;function ee(G,j){if(d=j.getViewerPose(c||a),_=j,d!==null){const oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,me=!0);for(let fe=0;fe<oe.length;fe++){const Ce=oe[fe];let Pe=null;if(p!==null)Pe=p.getViewport(Ce);else{const We=u.getViewSubImage(h,Ce);Pe=We.viewport,fe===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Me=I[fe];Me===void 0&&(Me=new Lt,Me.layers.enable(fe),Me.viewport=new Ke,I[fe]=Me),Me.matrix.fromArray(Ce.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ce.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(b.matrix.copy(Me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),me===!0&&b.cameras.push(Me)}}for(let oe=0;oe<x.length;oe++){const me=y[oe],fe=x[oe];me!==null&&fe!==void 0&&fe.update(me,j,c||a)}$&&$(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const te=new Zc;te.setAnimationLoop(ee),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}function Xg(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=d(x),i[x.id]=v,x.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function d(x){const y=u();x.__bindingPointIndex=y;const v=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=i[x.id],v=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,A=v.length;T<A;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,w=I.length;b<w;b++){const z=I[b];if(p(z,T,b,C)===!0){const H=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let O=0;O<J.length;O++){const V=J[O],q=g(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,H+P,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,y,v,C){const T=x.value,A=y+"_"+v;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(x){const y=x.uniforms;let v=0;const C=16;for(let A=0,I=y.length;A<I;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,z=b.length;w<z;w++){const H=b[w],J=Array.isArray(H.value)?H.value:[H.value];for(let P=0,O=J.length;P<O;P++){const V=J[P],q=g(V),W=v%C;W!==0&&C-W<q.boundary&&(v+=C-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=q.storage}}}const T=v%C;return T>0&&(v+=C-T),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class rd{constructor(e={}){const{canvas:t=Hh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const y=this;let v=!1,C=0,T=0,A=null,I=-1,b=null;const w=new Ke,z=new Ke;let H=null;const J=new ge(0);let P=0,O=t.width,V=t.height,q=1,W=null,X=null;const $=new Ke(0,0,O,V),ee=new Ke(0,0,O,V);let te=!1;const G=new Na;let j=!1,oe=!1,me=null;const fe=new He,Ce=new ke,Pe=new R,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?q:1}let k=n;function Et(S,D){for(let F=0;F<S.length;F++){const B=S[F],N=t.getContext(B,D);if(N!==null)return N}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),k===null){const D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),k=Et(D,S),k===null)throw Et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Te,he,nt,Ne,E,M,U,Q,K,Z,ue,ae,ce,be,Ue,Y,je,Ge,Ee,_e,de,Ie,qe;function rt(){ye=new nm(k),Te=new Kf(k,ye,e),ye.init(Te),de=new Hg(k,ye,Te),he=new Bg(k,ye,Te),nt=new rm(k),Ne=new Eg,E=new zg(k,ye,he,Ne,Te,de,nt),M=new Zf(y),U=new tm(y),Q=new uu(k,Te),Ie=new jf(k,ye,Q,Te),K=new im(k,Q,nt,Ie),Z=new cm(k,K,Q,nt),Ge=new lm(k,Te,E),Ue=new Qf(Ne),ue=new wg(y,M,U,ye,Te,Ie,Ue),ae=new Xg(y,Ne),ce=new Ag,be=new Dg(ye,Te),je=new $f(y,M,U,he,Z,h,l),Y=new Og(y,Z,Te),qe=new qg(k,nt,Te,he),Ee=new Yf(k,ye,nt,Te),_e=new sm(k,ye,nt,Te),nt.programs=ue.programs,y.capabilities=Te,y.extensions=ye,y.properties=Ne,y.renderLists=ce,y.shadowMap=Y,y.state=he,y.info=nt}rt();const Oe=new Wg(y,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(O,V,!1))},this.getSize=function(S){return S.set(O,V)},this.setSize=function(S,D,F=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,V=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(O*q,V*q).floor()},this.setDrawingBufferSize=function(S,D,F){O=S,V=D,q=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,D,F,B){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,D,F,B),he.viewport(w.copy($).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,D,F,B){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,D,F,B),he.scissor(z.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){he.setScissorTest(te=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(S=!0,D=!0,F=!0){let B=0;if(S){let N=!1;if(A!==null){const le=A.texture.format;N=le===Nc||le===kc||le===Dc}if(N){const le=A.texture.type,pe=le===kn||le===Ln||le===Ia||le===jn||le===Pc||le===Ic,ve=je.getClearColor(),we=je.getClearAlpha(),Fe=ve.r,Ae=ve.g,Re=ve.b;pe?(p[0]=Fe,p[1]=Ae,p[2]=Re,p[3]=we,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Fe,_[1]=Ae,_[2]=Re,_[3]=we,k.clearBufferiv(k.COLOR,0,_))}else B|=k.COLOR_BUFFER_BIT}D&&(B|=k.DEPTH_BUFFER_BIT),F&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),be.dispose(),Ne.dispose(),M.dispose(),U.dispose(),Z.dispose(),Ie.dispose(),qe.dispose(),ue.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Tt),Oe.removeEventListener("sessionend",Je),me&&(me.dispose(),me=null),At.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const S=nt.autoReset,D=Y.enabled,F=Y.autoUpdate,B=Y.needsUpdate,N=Y.type;rt(),nt.autoReset=S,Y.enabled=D,Y.autoUpdate=F,Y.needsUpdate=B,Y.type=N}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const D=S.target;D.removeEventListener("dispose",re),Se(D)}function Se(S){xe(S),Ne.remove(S)}function xe(S){const D=Ne.get(S).programs;D!==void 0&&(D.forEach(function(F){ue.releaseProgram(F)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,B,N,le){D===null&&(D=Me);const pe=N.isMesh&&N.matrixWorld.determinant()<0,ve=Md(S,D,F,B,N);he.setMaterial(B,pe);let we=F.index,Fe=1;if(B.wireframe===!0){if(we=K.getWireframeAttribute(F),we===void 0)return;Fe=2}const Ae=F.drawRange,Re=F.attributes.position;let ot=Ae.start*Fe,Nt=(Ae.start+Ae.count)*Fe;le!==null&&(ot=Math.max(ot,le.start*Fe),Nt=Math.min(Nt,(le.start+le.count)*Fe)),we!==null?(ot=Math.max(ot,0),Nt=Math.min(Nt,we.count)):Re!=null&&(ot=Math.max(ot,0),Nt=Math.min(Nt,Re.count));const mt=Nt-ot;if(mt<0||mt===1/0)return;Ie.setup(N,B,ve,F,we);let ln,it=Ee;if(we!==null&&(ln=Q.get(we),it=_e,it.setIndex(ln)),N.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*We()),it.setMode(k.LINES)):it.setMode(k.TRIANGLES);else if(N.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),he.setLineWidth(Be*We()),N.isLineSegments?it.setMode(k.LINES):N.isLineLoop?it.setMode(k.LINE_LOOP):it.setMode(k.LINE_STRIP)}else N.isPoints?it.setMode(k.POINTS):N.isSprite&&it.setMode(k.TRIANGLES);if(N.isBatchedMesh)it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)it.renderInstances(ot,mt,N.count);else if(F.isInstancedBufferGeometry){const Be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,fr=Math.min(F.instanceCount,Be);it.renderInstances(ot,mt,fr)}else it.render(ot,mt)};function Qe(S,D,F){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=wt,S.needsUpdate=!0,ys(S,D,F),S.side=vn,S.needsUpdate=!0,ys(S,D,F),S.side=en):ys(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),m=be.get(F),m.init(),x.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==F&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(y._useLegacyLights);const B=new Set;return S.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ve=le[pe];Qe(ve,F,N),B.add(ve)}else Qe(le,F,N),B.add(le)}),x.pop(),m=null,B},this.compileAsync=function(S,D,F=null){const B=this.compile(S,D,F);return new Promise(N=>{function le(){if(B.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){N(S);return}setTimeout(le,10)}ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function ft(S){Ze&&Ze(S)}function Tt(){At.stop()}function Je(){At.start()}const At=new Zc;At.setAnimationLoop(ft),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(S){Ze=S,Oe.setAnimationLoop(S),S===null?At.stop():At.start()},Oe.addEventListener("sessionstart",Tt),Oe.addEventListener("sessionend",Je),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,A),m=be.get(S,x.length),m.init(),x.push(m),fe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(fe),oe=this.localClippingEnabled,j=Ue.init(this.clippingPlanes,oe),g=ce.get(S,f.length),g.init(),f.push(g),Kt(S,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,j===!0&&Ue.beginShadows();const F=m.state.shadowsArray;if(Y.render(F,S,D),j===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,S),m.setupLights(y._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let N=0,le=B.length;N<le;N++){const pe=B[N];$a(g,S,pe,pe.viewport)}}else $a(g,S,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,D),Ie.resetDefaultState(),I=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Kt(S,D,F,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){B&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const pe=Z.update(S),ve=S.material;ve.visible&&g.push(S,pe,ve,F,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const pe=Z.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(ve)){const we=pe.groups;for(let Fe=0,Ae=we.length;Fe<Ae;Fe++){const Re=we[Fe],ot=ve[Re.materialIndex];ot&&ot.visible&&g.push(S,pe,ot,F,Pe.z,Re)}}else ve.visible&&g.push(S,pe,ve,F,Pe.z,null)}}const le=S.children;for(let pe=0,ve=le.length;pe<ve;pe++)Kt(le[pe],D,F,B)}function $a(S,D,F,B){const N=S.opaque,le=S.transmissive,pe=S.transparent;m.setupLightsView(F),j===!0&&Ue.setGlobalState(y.clippingPlanes,F),le.length>0&&bd(N,le,D,F),B&&he.viewport(w.copy(B)),N.length>0&&_s(N,D,F),le.length>0&&_s(le,D,F),pe.length>0&&_s(pe,D,F),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function bd(S,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=Te.isWebGL2;me===null&&(me=new Jn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ds:kn,minFilter:Zn,samples:le?4:0})),y.getDrawingBufferSize(Ce),le?me.setSize(Ce.x,Ce.y):me.setSize(rr(Ce.x),rr(Ce.y));const pe=y.getRenderTarget();y.setRenderTarget(me),y.getClearColor(J),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const ve=y.toneMapping;y.toneMapping=Dn,_s(S,F,B),E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me);let we=!1;for(let Fe=0,Ae=D.length;Fe<Ae;Fe++){const Re=D[Fe],ot=Re.object,Nt=Re.geometry,mt=Re.material,ln=Re.group;if(mt.side===en&&ot.layers.test(B.layers)){const it=mt.side;mt.side=wt,mt.needsUpdate=!0,ja(ot,F,B,Nt,mt,ln),mt.side=it,mt.needsUpdate=!0,we=!0}}we===!0&&(E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me)),y.setRenderTarget(pe),y.setClearColor(J,P),y.toneMapping=ve}function _s(S,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,le=S.length;N<le;N++){const pe=S[N],ve=pe.object,we=pe.geometry,Fe=B===null?pe.material:B,Ae=pe.group;ve.layers.test(F.layers)&&ja(ve,D,F,we,Fe,Ae)}}function ja(S,D,F,B,N,le){S.onBeforeRender(y,D,F,B,N,le),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,D,F,B,S,le),N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=wt,N.needsUpdate=!0,y.renderBufferDirect(F,D,B,N,S,le),N.side=vn,N.needsUpdate=!0,y.renderBufferDirect(F,D,B,N,S,le),N.side=en):y.renderBufferDirect(F,D,B,N,S,le),S.onAfterRender(y,D,F,B,N,le)}function ys(S,D,F){D.isScene!==!0&&(D=Me);const B=Ne.get(S),N=m.state.lights,le=m.state.shadowsArray,pe=N.state.version,ve=ue.getParameters(S,N.state,le,D,F),we=ue.getProgramCacheKey(ve);let Fe=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?U:M).get(S.envMap||B.environment),Fe===void 0&&(S.addEventListener("dispose",re),Fe=new Map,B.programs=Fe);let Ae=Fe.get(we);if(Ae!==void 0){if(B.currentProgram===Ae&&B.lightsStateVersion===pe)return Ka(S,ve),Ae}else ve.uniforms=ue.getUniforms(S),S.onBuild(F,ve,y),S.onBeforeCompile(ve,y),Ae=ue.acquireProgram(ve,we),Fe.set(we,Ae),B.uniforms=ve.uniforms;const Re=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Ka(S,ve),B.needsLights=wd(S),B.lightsStateVersion=pe,B.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ae,B.uniformsList=null,Ae}function Ya(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ka(S,D){const F=Ne.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Md(S,D,F,B,N){D.isScene!==!0&&(D=Me),E.resetTextureUnits();const le=D.fog,pe=B.isMeshStandardMaterial?D.environment:null,ve=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yt,we=(B.isMeshStandardMaterial?U:M).get(B.envMap||pe),Fe=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!F.morphAttributes.position,ot=!!F.morphAttributes.normal,Nt=!!F.morphAttributes.color;let mt=Dn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=y.toneMapping);const ln=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=ln!==void 0?ln.length:0,Be=Ne.get(B),fr=m.state.lights;if(j===!0&&(oe===!0||S!==b)){const Ot=S===b&&B.id===I;Ue.setState(B,S,Ot)}let at=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==fr.state.version||Be.outputColorSpace!==ve||N.isBatchedMesh&&Be.batching===!1||!N.isBatchedMesh&&Be.batching===!0||N.isInstancedMesh&&Be.instancing===!1||!N.isInstancedMesh&&Be.instancing===!0||N.isSkinnedMesh&&Be.skinning===!1||!N.isSkinnedMesh&&Be.skinning===!0||N.isInstancedMesh&&Be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Be.instancingColor===!1&&N.instanceColor!==null||Be.envMap!==we||B.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ue.numPlanes||Be.numIntersection!==Ue.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Ae||Be.morphTargets!==Re||Be.morphNormals!==ot||Be.morphColors!==Nt||Be.toneMapping!==mt||Te.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(at=!0):(at=!0,Be.__version=B.version);let Un=Be.currentProgram;at===!0&&(Un=ys(B,D,N));let Qa=!1,Vi=!1,mr=!1;const vt=Un.getUniforms(),Fn=Be.uniforms;if(he.useProgram(Un.program)&&(Qa=!0,Vi=!0,mr=!0),B.id!==I&&(I=B.id,Vi=!0),Qa||b!==S){vt.setValue(k,"projectionMatrix",S.projectionMatrix),vt.setValue(k,"viewMatrix",S.matrixWorldInverse);const Ot=vt.map.cameraPosition;Ot!==void 0&&Ot.setValue(k,Pe.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&vt.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&vt.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Vi=!0,mr=!0)}if(N.isSkinnedMesh){vt.setOptional(k,N,"bindMatrix"),vt.setOptional(k,N,"bindMatrixInverse");const Ot=N.skeleton;Ot&&(Te.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(k,"boneTexture",Ot.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(vt.setOptional(k,N,"batchingTexture"),vt.setValue(k,"batchingTexture",N._matricesTexture,E));const gr=F.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&Te.isWebGL2===!0)&&Ge.update(N,F,Un),(Vi||Be.receiveShadow!==N.receiveShadow)&&(Be.receiveShadow=N.receiveShadow,vt.setValue(k,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Fn.envMap.value=we,Fn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Vi&&(vt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Sd(Fn,mr),le&&B.fog===!0&&ae.refreshFogUniforms(Fn,le),ae.refreshMaterialUniforms(Fn,B,q,V,me),Ys.upload(k,Ya(Be),Fn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ys.upload(k,Ya(Be),Fn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&vt.setValue(k,"center",N.center),vt.setValue(k,"modelViewMatrix",N.modelViewMatrix),vt.setValue(k,"normalMatrix",N.normalMatrix),vt.setValue(k,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ot=B.uniformsGroups;for(let _r=0,Ed=Ot.length;_r<Ed;_r++)if(Te.isWebGL2){const Za=Ot[_r];qe.update(Za,Un),qe.bind(Za,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function Sd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function wd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,F){Ne.get(S.texture).__webglTexture=D,Ne.get(S.depthTexture).__webglTexture=F;const B=Ne.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Ne.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){A=S,C=D,T=F;let B=!0,N=null,le=!1,pe=!1;if(S){const we=Ne.get(S);we.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):we.__webglFramebuffer===void 0?E.setupRenderTarget(S):we.__hasExternalTextures&&E.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Ae=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?N=Ae[D][F]:N=Ae[D],le=!0):Te.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?N=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?N=Ae[F]:N=Ae,w.copy(S.viewport),z.copy(S.scissor),H=S.scissorTest}else w.copy($).multiplyScalar(q).floor(),z.copy(ee).multiplyScalar(q).floor(),H=te;if(he.bindFramebuffer(k.FRAMEBUFFER,N)&&Te.drawBuffers&&B&&he.drawBuffers(S,N),he.viewport(w),he.scissor(z),he.setScissorTest(H),le){const we=Ne.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,F)}else if(pe){const we=Ne.get(S.texture),Fe=D||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,F||0,Fe)}I=-1},this.readRenderTargetPixels=function(S,D,F,B,N,le,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){he.bindFramebuffer(k.FRAMEBUFFER,ve);try{const we=S.texture,Fe=we.format,Ae=we.type;if(Fe!==Gt&&de.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ae===ds&&(ye.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ae!==kn&&de.convert(Ae)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===yn&&(Te.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&F>=0&&F<=S.height-N&&k.readPixels(D,F,B,N,de.convert(Fe),de.convert(Ae),le)}finally{const we=A!==null?Ne.get(A).__webglFramebuffer:null;he.bindFramebuffer(k.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(S,D,F=0){const B=Math.pow(2,-F),N=Math.floor(D.image.width*B),le=Math.floor(D.image.height*B);E.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,F,0,0,S.x,S.y,N,le),he.unbindTexture()},this.copyTextureToTexture=function(S,D,F,B=0){const N=D.image.width,le=D.image.height,pe=de.convert(F.format),ve=de.convert(F.type);E.setTexture2D(F,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,N,le,pe,ve,D.image.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,pe,ve,D.image),B===0&&F.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,B,N=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,ve=S.max.z-S.min.z+1,we=de.convert(B.format),Fe=de.convert(B.type);let Ae;if(B.isData3DTexture)E.setTexture3D(B,0),Ae=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),Ae=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Re=k.getParameter(k.UNPACK_ROW_LENGTH),ot=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Nt=k.getParameter(k.UNPACK_SKIP_PIXELS),mt=k.getParameter(k.UNPACK_SKIP_ROWS),ln=k.getParameter(k.UNPACK_SKIP_IMAGES),it=F.isCompressedTexture?F.mipmaps[N]:F.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,it.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,it.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?k.texSubImage3D(Ae,N,D.x,D.y,D.z,le,pe,ve,we,Fe,it.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ae,N,D.x,D.y,D.z,le,pe,ve,we,it.data)):k.texSubImage3D(Ae,N,D.x,D.y,D.z,le,pe,ve,we,Fe,it),k.pixelStorei(k.UNPACK_ROW_LENGTH,Re),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ot),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,mt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ln),N===0&&B.generateMipmaps&&k.generateMipmap(Ae),he.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,he.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Da?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===st?Kn:Oc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?st:yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $g extends rd{}$g.prototype.isWebGL1Renderer=!0;class wi{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new wi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ji extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new R;class Fa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ml=new R,Sl=new Ke,wl=new Ke,Yg=new R,El=new He,Hs=new R,$r=new an,Tl=new He,jr=new cr;class Kg extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ro,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hs),this.boundingBox.expandByPoint(Hs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hs),this.boundingSphere.expandByPoint(Hs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1&&(Tl.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Tl),!(this.boundingBox!==null&&jr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ro?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sl.fromBufferAttribute(i.attributes.skinIndex,e),wl.fromBufferAttribute(i.attributes.skinWeight,e),Ml.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=wl.getComponent(s);if(a!==0){const o=Sl.getComponent(s);El.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yg.copy(Ml).applyMatrix4(El),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ad extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qg extends xt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=_t,d=_t,u,h){super(null,a,o,l,c,d,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Al=new He,Zg=new He;class Oa{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Zg;Al.multiplyMatrices(o,t[s]),Al.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qg(t,e,e,Gt,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ad),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Sa extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new He,Cl=new He,Gs=[],Rl=new rn,Jg=new He,Yi=new Le,Ki=new an;class e0 extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Rl.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(Rl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Ki.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xi),Cl.multiplyMatrices(n,xi),Yi.matrixWorld=Cl,Yi.raycast(e,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=s,l.object=this,t.push(l)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class od extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new R,Pl=new R,Il=new He,Yr=new cr,Vs=new an;class Ba extends tt{constructor(e=new kt,t=new od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ll.fromBufferAttribute(t,i-1),Pl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ll.distanceTo(Pl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Il.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,d=new R,u=new R,h=new R,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=p){const C=_.getX(y),T=_.getX(y+1);if(c.fromBufferAttribute(m,C),d.fromBufferAttribute(m,T),Yr.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=p){if(c.fromBufferAttribute(m,y),d.fromBufferAttribute(m,y+1),Yr.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Dl=new R,kl=new R;class t0 extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Dl.fromBufferAttribute(t,i),kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dl.distanceTo(kl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n0 extends Ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ld extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nl=new He,wa=new cr,Ws=new an,Xs=new R;class i0 extends tt{constructor(e=new kt,t=new ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;Nl.copy(i).invert(),wa.copy(e.ray).applyMatrix4(Nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,g=p;_<g;_++){const m=c.getX(_);Xs.fromBufferAttribute(u,m),Ul(Xs,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=h,g=p;_<g;_++)Xs.fromBufferAttribute(u,_),Ul(Xs,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ul(r,e,t,n,i,s,a){const o=wa.distanceSqToPoint(r);if(o<t){const l=new R;wa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Jt extends kt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],p=[];let _=0;const g=[],m=n/2;let f=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(p,2));function x(){const v=new R,C=new R;let T=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const b=[],w=I/s,z=w*(t-e)+e;for(let H=0;H<=i;H++){const J=H/i,P=J*l+o,O=Math.sin(P),V=Math.cos(P);C.x=z*O,C.y=-w*n+m,C.z=z*V,u.push(C.x,C.y,C.z),v.set(O,A,V).normalize(),h.push(v.x,v.y,v.z),p.push(J,1-w),b.push(_++)}g.push(b)}for(let I=0;I<i;I++)for(let b=0;b<s;b++){const w=g[b][I],z=g[b+1][I],H=g[b+1][I+1],J=g[b][I+1];d.push(w,z,J),d.push(z,H,J),T+=6}c.addGroup(f,T,0),f+=T}function y(v){const C=_,T=new ke,A=new R;let I=0;const b=v===!0?e:t,w=v===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),_++;const z=_;for(let H=0;H<=i;H++){const P=H/i*l+o,O=Math.cos(P),V=Math.sin(P);A.x=b*V,A.y=m*w,A.z=b*O,u.push(A.x,A.y,A.z),h.push(0,w,0),T.x=O*.5+.5,T.y=V*.5*w+.5,p.push(T.x,T.y),_++}for(let H=0;H<i;H++){const J=C+H,P=z+H;v===!0?d.push(P,P+1,J):d.push(P+1,P,J),I+=3}c.addGroup(f,I,v===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends Jt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends kt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),d(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new R,v=new R,C=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],v),p(t[T+2],C),l(y,v,C,x)}function l(x,y,v,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const b=x.clone().lerp(v,I/T),w=y.clone().lerp(v,I/T),z=T-I;for(let H=0;H<=z;H++)H===0&&I===T?A[I][H]=b:A[I][H]=b.clone().lerp(w,H/z)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){const w=Math.floor(b/2);b%2===0?(h(A[I][w+1]),h(A[I+1][w]),h(A[I][w])):(h(A[I][w+1]),h(A[I+1][w+1]),h(A[I+1][w]))}}function c(x){const y=new R;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function d(){const x=new R;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=m(x)/2/Math.PI+.5,C=f(x)/Math.PI+.5;a.push(v,1-C)}_(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],C=a[x+4],T=Math.max(y,v,C),A=Math.min(y,v,C);T>.9&&A<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function p(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function _(){const x=new R,y=new R,v=new R,C=new R,T=new ke,A=new ke,I=new ke;for(let b=0,w=0;b<s.length;b+=9,w+=6){x.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),T.set(a[w+0],a[w+1]),A.set(a[w+2],a[w+3]),I.set(a[w+4],a[w+5]),C.copy(x).add(y).add(v).divideScalar(3);const z=m(C);g(T,w+0,x,z),g(A,w+2,y,z),g(I,w+4,v,z)}}function g(x,y,v,C){C<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.vertices,e.indices,e.radius,e.details)}}class Ha extends za{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ha(e.radius,e.detail)}}class Ga extends kt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/i,p=new R,_=new ke;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}u+=h}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const x=f+m,y=x,v=x+n+1,C=x+n+2,T=x+1;o.push(y,v,T),o.push(v,C,T)}}this.setIndex(o),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class It extends kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new R,h=new R,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),h.copy(u).normalize(),g.push(h.x,h.y,h.z),m.push(T+v,1-y),x.push(c++)}d.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const y=d[f][x+1],v=d[f][x],C=d[f+1][x],T=d[f+1][x+1];(f!==0||a>0)&&p.push(y,v,T),(f!==n-1||l<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Va extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends Va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function s0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function r0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function cd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a0 extends ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Do:s=e,o=2*t-n;break;case ko:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:a=e,l=2*n-t;break;case ko:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-h*m+2*h*g-h*_,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-p)*m+(1.5+p)*g+.5*_,v=p*m-p*g;for(let C=0;C!==o;++C)s[C]=f*a[d+C]+x*a[c+C]+y*a[l+C]+v*a[u+C];return s}}class o0 extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),u=1-d;for(let h=0;h!==o;++h)s[h]=a[c+h]*u+a[l+h]*d;return s}}class l0 extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class on{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new o0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new a0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case Ii:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return Ii;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&s0(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,h=u-n,p=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[h+_]||g!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Ii;class zi extends on{}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=hs;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends on{}dd.prototype.ValueTypeName="color";class Ni extends on{}Ni.prototype.ValueTypeName="number";class c0 extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let d=c+o;c!==d;c+=4)Nn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ti extends on{InterpolantFactoryMethodLinear(e){return new c0(this.times,this.values,this.getValueSize(),e)}}ti.prototype.ValueTypeName="quaternion";ti.prototype.DefaultInterpolation=Ii;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends on{}Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=hs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends on{}Ui.prototype.ValueTypeName="vector";class d0{constructor(e,t=-1,n,i=fh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(u0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(on.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const d=r0(l);l=Fl(l,1,d),c=Fl(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ni(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,p,_,g){if(p.length!==0){const m=[],f=[];cd(p,m,f,_),m.length!==0&&g.push(new u(h,m,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)p[h[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let x=0;x!==h[_].morphTargets.length;++x){const y=h[_];m.push(y.time),f.push(y.morphTarget===g?1:0)}i.push(new Ni(".morphTargetInfluence["+g+"]",m,f))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Ui,p+".position",h,"pos",i),n(ti,p+".quaternion",h,"rot",i),n(Ui,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return dd;case"quaternion":return ti;case"bool":case"boolean":return zi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=h0(r.type);if(r.times===void 0){const t=[],n=[];cd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Pn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class p0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const f0=new p0;class Gi{constructor(e){this.manager=e!==void 0?e:f0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const fn={};class m0 extends Error{constructor(e,t){super(e),this.response=t}}class hd extends Gi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:n,onError:i});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=fn[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{g+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let T=0,A=d.length;T<A;T++){const I=d[T];I.onProgress&&I.onProgress(C)}f.enqueue(v),x()}})}}});return new Response(m)}else throw new m0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Pn.add(e,c);const d=fn[e];delete fn[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=fn[e];if(d===void 0)throw this.manager.itemError(e),c;delete fn[e];for(let u=0,h=d.length;u<h;u++){const p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class g0 extends Gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=us("img");function l(){d(),Pn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){d(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _0 extends Gi{constructor(e){super(e)}load(e,t,n,i){const s=new xt,a=new g0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gs extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ol extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kr=new He,Bl=new R,zl=new R;class Wa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends Wa{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Di*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class x0 extends gs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new y0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hl=new He,Qi=new R,Qr=new R;class v0 extends Wa{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),Qr.copy(n.position),Qr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qr),n.updateMatrixWorld(),i.makeTranslation(-Qi.x,-Qi.y,-Qi.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class b0 extends gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class M0 extends Wa{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ts extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zr extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class as{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class S0 extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Pn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pn.add(e,l),s.manager.itemStart(e)}}class w0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gl(){return(typeof performance>"u"?Date:performance).now()}const Xa="\\[\\]\\.:\\/",E0=new RegExp("["+Xa+"]","g"),qa="[^"+Xa+"]",T0="[^"+Xa.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",qa),C0=/(WCOD+)?/.source.replace("WCOD",T0),R0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qa),L0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qa),P0=new RegExp("^"+A0+C0+R0+L0+"$"),I0=["material","materials","bones","map"];class D0{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E0,"")}static parseTrackName(e){const t=P0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);I0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=D0;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);const k0=`// Toon vertex shader — Ni no Kuni inspired cell shading
// Computes lighting in view space for the toon fragment shader

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying vec4 vColor;

attribute vec3 instanceColor;

void main() {
  vUv = uv;
  vColor = vec4(1.0);

  #ifdef USE_INSTANCING
    vColor = vec4(instanceColor, 1.0);
  #endif

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(normalMatrix * normal);
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  gl_Position = projectionMatrix * mvPosition;
}
`,N0=`// Toon fragment shader — cell shading with rim lighting and outline support
// Ni no Kuni inspired: bright, saturated, stepped lighting bands

uniform vec3 uColor;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform vec3 uAmbientColor;
uniform float uRoughness;
uniform float uMetalness;
uniform float uOutlineWidth;
uniform vec3 uOutlineColor;
uniform float uRimPower;
uniform vec3 uRimColor;
uniform float uTime;
uniform int uSteps;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying vec4 vColor;

// Stepped lighting function — creates the cell-shaded band look
float toonLight(float NdotL, int steps) {
  float level = floor(NdotL * float(steps)) / float(steps - 1);
  return clamp(level, 0.0, 1.0);
}

// Simple diffuse + stepped specular
vec3 toonShade(vec3 normal, vec3 lightDir, vec3 viewDir) {
  float NdotL = max(dot(normal, lightDir), 0.0);
  float diffuse = toonLight(NdotL, uSteps);

  // Specular — stepped for toon look
  vec3 halfDir = normalize(lightDir + viewDir);
  float NdotH = max(dot(normal, halfDir), 0.0);
  float spec = 0.0;
  if (NdotL > 0.5) {
    spec = pow(NdotH, 32.0);
    spec = step(0.5, spec); // Hard step for toon specular
  }

  // Rim lighting — fresnel-based edge glow
  float NdotV = max(dot(normal, viewDir), 0.0);
  float rim = pow(1.0 - NdotV, uRimPower);
  rim = smoothstep(0.4, 1.0, rim);

  vec3 ambient = uAmbientColor;
  vec3 diffuseColor = uColor * vColor.rgb;
  vec3 lit = diffuseColor * (ambient + uLightColor * diffuse);
  lit += uLightColor * spec * 0.6;
  lit += uRimColor * rim * 0.5;

  return lit;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  vec3 lightDir = normalize(-uLightDir);

  vec3 color = toonShade(normal, lightDir, viewDir);

  // Subtle outline darkening at grazing angles (inverted hull does the thick outline)
  float NdotV = max(dot(normal, viewDir), 0.0);
  float outlineFactor = 1.0 - smoothstep(0.85, 0.95, NdotV);
  color = mix(color, uOutlineColor, outlineFactor * 0.3);

  // Gamma correction
  color = pow(color, vec3(1.0 / 2.2));

  gl_FragColor = vec4(color, 1.0);
}
`,U0=new R(-.5,-1,-.3),F0=16774365,O0=4482730,B0=4,z0=3,H0=8947865,ud=.03,pd=1118481,G0=.6,V0=0,Fi=new Map,ps=new Map;function fd(r){return new ge(r)}function W0(r,e){const n=Object.keys(e).sort().map(i=>`${i}:${e[i]}`);return`${r.toString(16)}|${n.join(",")}`}function ns(r,e){return r==null?new ge(e):r instanceof ge?r.clone():new ge(r)}function X0(r,e){return r instanceof R?r.clone():e.clone()}class md{createToonMaterial(e,t={}){return q0(e,t)}createOutlineMaterial(e,t={}){return $0(e,t)}updateTime(e){return j0(e)}clearCache(){return Y0()}getCacheSize(){return K0()}}function q0(r,e={}){const t=W0(r,e),n=Fi.get(t);if(n)return n;const i=fd(r),s=X0(e.uLightDir,U0),a=ns(e.uLightColor,F0),o=ns(e.uAmbientColor,O0),l=e.uRoughness??G0,c=e.uMetalness??V0,d=e.uOutlineWidth??ud,u=ns(e.uOutlineColor,pd),h=e.uRimPower??z0,p=ns(e.uRimColor,H0),_=e.uTime??0,g=e.uSteps??B0,m=new bn({vertexShader:k0,fragmentShader:N0,uniforms:{uColor:{value:i},uLightDir:{value:s},uLightColor:{value:a},uAmbientColor:{value:o},uRoughness:{value:l},uMetalness:{value:c},uOutlineWidth:{value:d},uOutlineColor:{value:u},uRimPower:{value:h},uRimColor:{value:p},uTime:{value:_},uSteps:{value:g}}});return Fi.set(t,m),m}function $0(r=pd,e={}){const t=e.uOutlineColor!==void 0?ns(e.uOutlineColor,r):fd(r),n=`outline|${t.getHexString()}|${e.outlineWidth??ud}`,i=ps.get(n);if(i)return i;const s=new nn({color:t,side:wt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return ps.set(n,s),s}function j0(r){for(const e of Fi.values())e.uniforms.uTime.value=r}function Y0(){for(const r of Fi.values())r.dispose();for(const r of ps.values())r.dispose();Fi.clear(),ps.clear()}function K0(){return Fi.size+ps.size}function Vl(r,e){if(e===mh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ya||e===Fc){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ya)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Q0 extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new n_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new m_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=as.extractUrlBase(e);a=as.resolveURL(c,this.path)}else a=as.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new hd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gd){try{a[Ve.KHR_BINARY_GLTF]=new g_(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new R_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const u=s.extensionsUsed[d],h=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:a[u]=new e_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[u]=new __(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[u]=new y_;break;case Ve.KHR_MESH_QUANTIZATION:a[u]=new x_;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Z0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class J0{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new ge(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],yt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ts(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new b0(d),c.distance=u;break;case"spot":c=new x0(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class e_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,st))}return Promise.all(i)}}class t_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class n_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(o,o)}return Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class s_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,st)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],yt),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class l_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],yt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,st)),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class d_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class h_{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class u_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f_{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,u=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(p),d,u,h,i.mode,i.filter),p})})}else return null}}class m_{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==zt.TRIANGLES&&c.mode!==zt.TRIANGLE_STRIP&&c.mode!==zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(const _ of u){const g=new He,m=new R,f=new Nn,x=new R(1,1,1),y=new e0(_.geometry,_.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(m,f,x));for(const v in l)if(v==="_COLOR_0"){const C=l[v];y.instanceColor=new Sa(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);tt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const gd="glTF",Zi=12,Wl={JSON:1313821514,BIN:5130562};class g_{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zi,s=new DataView(e,Zi);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Wl.JSON){const c=new Uint8Array(e,Zi+a,o);this.content=n.decode(c)}else if(l===Wl.BIN){const c=Zi+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class __{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const d in a){const u=Ea[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=Ea[d]||d.toLowerCase();if(a[d]!==void 0){const h=n.accessors[e.attributes[d]],p=Ai[h.componentType];c[u]=p.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(u,h){i.decodeDracoFile(d,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}u(p)},o,c,yt,h)})})}}class y_{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x_{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class _d extends ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=i-t,u=(n-t)/d,h=u*u,p=h*u,_=e*c,g=_-c,m=-2*p+3*h,f=p-h,x=1-m,y=f-h+u;for(let v=0;v!==o;v++){const C=a[g+v+o],T=a[g+v+l]*d,A=a[_+v+o],I=a[_+v]*d;s[v]=x*C+y*T+m*A+f*I}return s}}const v_=new Nn;class b_ extends _d{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return v_.fromArray(s).normalize().toArray(s),s}}const zt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ai={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xl={9728:_t,9729:Dt,9984:_a,9985:Rc,9986:js,9987:Zn},ql={33071:Ht,33648:er,10497:Li},Jr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M_={CUBICSPLINE:void 0,LINEAR:Ii,STEP:hs},ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),r.DefaultMaterial}function Gn(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(h)}if(i){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function E_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function T_(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ta(t.attributes):e=r.indices+":"+ta(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ta(r.targets[n]);return e}function ta(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ta(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function A_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const C_=new He;class R_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Z0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new _0(this.options.manager):this.textureLoader=new S0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Gn(s,o,i),Rn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,d]of a.children.entries())s(d,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(as.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Jr[i.type],o=Ai[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Pt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Jr[i.type],c=Ai[i.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==u){const f=Math.floor(h/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(x);y||(g=new c(o,f*p,i.count*p/d),y=new jg(g,p/d),t.cache.add(x,y)),m=new Fa(y,l,h%p/d,_)}else o===null?g=new c(i.count*l):g=new c(o,h,i.count*l),m=new Pt(g,l,_);if(i.sparse!==void 0){const f=Jr.SCALAR,x=Ai[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new x(a[1],y,i.sparse.count*f),T=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,I=C.length;A<I;A++){const b=C[A];if(m.setX(b,T[A*l]),l>=2&&m.setY(b,T[A*l+1]),l>=3&&m.setZ(b,T[A*l+2]),l>=4&&m.setW(b,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return d.magFilter=Xl[h.magFilter]||Dt,d.minFilter=Xl[h.minFilter]||Zn,d.wrapS=ql[h.wrapS]||Li,d.wrapT=ql[h.wrapT]||Li,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new xt(g);m.needsUpdate=!0,h(m)}),t.load(as.resolveURL(u,s.path),_,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||A_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ld,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new od,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Va}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],yt),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,st)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);const d=s.alphaMode||ea.OPAQUE;if(d===ea.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===ea.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==nn){const u=s.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],yt)}return s.emissiveTexture!==void 0&&a!==nn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,st)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Rn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Gn(i,u,s),u})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $l(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=T_(c),u=i[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=$l(new kt,c,t),i[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?S_(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[p];let f;const x=c[p];if(m.mode===zt.TRIANGLES||m.mode===zt.TRIANGLE_STRIP||m.mode===zt.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Kg(g,x):new Le(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===zt.TRIANGLE_STRIP?f.geometry=Vl(f.geometry,Fc):m.mode===zt.TRIANGLE_FAN&&(f.geometry=Vl(f.geometry,ya));else if(m.mode===zt.LINES)f=new t0(g,x);else if(m.mode===zt.LINE_STRIP)f=new Ba(g,x);else if(m.mode===zt.LINE_LOOP)f=new n0(g,x);else if(m.mode===zt.POINTS)f=new i0(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&E_(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Rn(f,s),m.extensions&&Gn(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Gn(i,u[0],s),u[0];const h=new ht;s.extensions&&Gn(i,h,s),t.associations.set(h,{meshes:e});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(zh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,d=a.length;c<d;c++){const u=a[c];if(u){o.push(u);const h=new He;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oa(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=i.channels.length;u<h;u++){const p=i.channels[u],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(_),d.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],p=u[1],_=u[2],g=u[3],m=u[4],f=[];for(let x=0,y=h.length;x<y;x++){const v=h[x],C=p[x],T=_[x],A=g[x],I=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,C,T,A,I);if(b)for(let w=0;w<b.length;w++)f.push(b[w])}return new d0(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,C_)});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(s.isBone===!0?d=new ad:c.length>1?d=new ht:c.length===1?d=c[0]:d=new tt,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(s.name&&(d.userData.name=s.name,d.name=a),Rn(d,s),s.extensions&&Gn(n,d,s),s.matrix!==void 0){const u=new He;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ht;n.name&&(s.name=i.createUniqueName(n.name)),Rn(s,n),n.extensions&&Gn(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)s.add(l[d]);const c=d=>{const u=new Map;for(const[h,p]of i.associations)(h instanceof sn||h instanceof xt)&&u.set(h,p);return d.traverse(h=>{const p=i.associations.get(h);p!=null&&u.set(h,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Cn[s.path]===Cn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Cn[s.path]){case Cn.weights:c=Ni;break;case Cn.rotation:c=ti;break;case Cn.position:case Cn.scale:c=Ui;break;default:switch(n.itemSize){case 1:c=Ni;break;case 2:case 3:default:c=Ui;break}break}const d=i.interpolation!==void 0?M_[i.interpolation]:Ii,u=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const _=new c(l[h]+"."+Cn[s.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ta(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ti?b_:_d;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function L_(r,e,t){const n=e.attributes,i=new rn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const d=Ta(Ai[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,l=new R;for(let c=0,d=s.length;c<d;c++){const u=s[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const g=Ta(Ai[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new an;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function $l(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Ea[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Rn(r,e),L_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?w_(r,e.targets,t):r})}function ni(r,e,t){return Math.min(Math.max(r,e),t)}function na(r){return r[Math.floor(Math.random()*r.length)]}function Aa(r,e,t){const n=ni((t-r)/(e-r),0,1);return n*n*(3-2*n)}function P_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}class os{constructor(e=Date.now()){this.seed=e}next(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}range(e,t){return this.next()*(t-e)+e}int(e,t){return Math.floor(this.range(e,t+1))}choice(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}}function ls(r){return Math.floor(100*r+50*r*r)}function Ca(r){let e=1,t=ls(1);for(;r>=t;)r-=t,e++,t=ls(e);return{level:e,xpIntoLevel:r,xpForNext:t}}const I_=["Three-Finger","One-Eye","Sly","Crooked","Greasy","Slippery","Sneaky","Rotten","Black","Mad","Crazy","Silent","Smiling","Broken","Wild","Cold","Iron","Silver","Golden","Midnight","Dawn","Shade","Smoke","Ash"],D_=["Mack","Jack","Rex","Vex","Dex","Nix","Zax","Blax","Crumb","Grindle","Munch","Crunch","Slab","Gristle","Bun","Patty","Melt","Sizzle","Char","Drip","Grease","Sloppy","Wicked","Dastardly","Mean","Nasty","Foul","Rancid","Stale","Burnt","Crispy","Soggy","Moldy"],k_=["the Greasy","the Burger Thief","the Bun Snatcher","the Fry Filcher","the Patty Pirate","the Meat Miser","the Condiment Criminal","the Snack Stealer","of the Dark Arches","the Wrong Order","the Cold Fry","the Burnt Bun","the Soggy Patty","the Missing Toy"];function yd(r){const e=new os(r),t=na(I_),n=na(D_),i=e.chance(.5)?` ${na(k_)}`:"";return`Hamburglar ${t} ${n}${i}`}const fs={ronald:{id:"ronald",name:"Ronald McDonald",title:"The Fry-Mage",role:"Healer + Elemental Magic",description:"A cheerful mage with fiery fries and healing ketchup. The heart of the party.",color:16711680,accentColor:16776960,baseStats:{hp:80,mp:60,atk:15,def:12,agi:14,mag:20},growth:{hp:8,mp:6,atk:2.2,def:1.8,agi:2,mag:3},element:"fire",weapon:"Fry Wand",armor:"Happy Meal Cloak",accessory:"Golden Arch Charm",abilityTree:[{level:1,ability:"fry_storm"},{level:1,ability:"ketchup_heal"},{level:5,ability:"mustard_shield"},{level:10,ability:"fry_lance"},{level:15,ability:"ketchup_splash"},{level:20,ability:"happy_meal"},{level:30,ability:"mustard_barrier"},{level:40,ability:"golden_fry_lance"},{level:50,ability:"mc_flurry_blizzard"}],portraitColors:{skin:16764074,hair:16724770,body:16763904,accent:16711680}},grimace:{id:"grimace",name:"Grimace",title:"The McTank",role:"Heavy Tank + Taunt",description:"A big purple friend who takes hits so others do not have to.",color:10040268,accentColor:16763904,baseStats:{hp:150,mp:20,atk:18,def:25,agi:6,mag:8},growth:{hp:15,mp:1.5,atk:2.5,def:3.5,agi:.8,mag:1},element:"earth",weapon:"McShake Maul",armor:"Grimace Hide",accessory:"Purple Charm",abilityTree:[{level:1,ability:"grimace_slam"},{level:1,ability:"purple_body"},{level:5,ability:"grimace_guard"},{level:10,ability:"shake_quake"},{level:15,ability:"purple_pound"},{level:20,ability:"grimace_roar"},{level:30,ability:"shake_storm"},{level:40,ability:"grimace_fortress"},{level:50,ability:"purple_titan"}],portraitColors:{skin:10040268,hair:8921770,body:10040268,accent:16763904}},birdie:{id:"birdie",name:"Birdie the Early Bird",title:"The Sky-Scout",role:"Ranged Speed Attacker + Debuffs",description:"Fast as the morning sun, Birdie strikes from afar and weakens foes.",color:16738740,accentColor:16776960,baseStats:{hp:70,mp:35,atk:16,def:10,agi:25,mag:14},growth:{hp:6,mp:4,atk:2.8,def:1.5,agi:3.5,mag:2},element:"air",weapon:"Feather Darts",armor:"Sky Vest",accessory:"Morning Charm",abilityTree:[{level:1,ability:"feather_darts"},{level:1,ability:"breakfast_blitz"},{level:5,ability:"egg_bomb"},{level:10,ability:"morning_song"},{level:15,ability:"dive_bomb"},{level:20,ability:"dawn_chorus"},{level:30,ability:"sky_dance"},{level:40,ability:"hurricane_feathers"},{level:50,ability:"sunny_side_up"}],portraitColors:{skin:16738740,hair:16764108,body:16738740,accent:16776960}},bigmac:{id:"bigmac",name:"Officer Big Mac",title:"The McCrusader",role:"Paladin — Tank + Holy Attacks",description:"A burger-headed knight of the law. Justice never tasted so good.",color:9127187,accentColor:16766720,baseStats:{hp:130,mp:40,atk:20,def:22,agi:8,mag:16},growth:{hp:12,mp:3.5,atk:3,def:3,agi:1.2,mag:2.5},element:"holy",weapon:"Sesame Sword",armor:"Double Patty Armor",accessory:"Badge of Order",abilityTree:[{level:1,ability:"big_mac_smash"},{level:1,ability:"sesame_shield"},{level:5,ability:"mcgriddle_charge"},{level:10,ability:"special_sauce_smite"},{level:15,ability:"lettuce_wall"},{level:20,ability:"triple_stack"},{level:30,ability:"sesame_sanctuary"},{level:40,ability:"big_mac_judgment"},{level:50,ability:"special_sauce_storm"}],portraitColors:{skin:13934615,hair:9127187,body:9127187,accent:16766720}},mactonight:{id:"mactonight",name:"Mac Tonight",title:"The Moon-Bard",role:"Support — Buffs, Debuffs, Minor Healing",description:"A cool crescent moon crooner who buffs allies and debuffs enemies.",color:2763338,accentColor:13421823,baseStats:{hp:85,mp:55,atk:12,def:12,agi:16,mag:18},growth:{hp:7,mp:5.5,atk:1.8,def:1.8,agi:2.5,mag:2.8},element:"dark",weapon:"Moon Mic",armor:"Midnight Suit",accessory:"Sunglasses",abilityTree:[{level:1,ability:"moon_melody"},{level:1,ability:"nightjam"},{level:5,ability:"mac_jazz"},{level:10,ability:"moonlight_serenade"},{level:15,ability:"blue_moon"},{level:20,ability:"midnight_blues"},{level:30,ability:"eclipse"},{level:40,ability:"moon_sonata"},{level:50,ability:"lunar_eclipse"}],portraitColors:{skin:13421823,hair:2763338,body:2763338,accent:16776960}}},ia=["ronald","grimace","birdie"],jl={fry_storm:{id:"fry_storm",name:"Fry Storm",character:"ronald",type:"aoe",element:"fire",mpCost:12,power:.8,target:"enemies",description:"Rain fiery fries on all enemies.",unlockLevel:1},ketchup_heal:{id:"ketchup_heal",name:"Ketchup Heal",character:"ronald",type:"heal",element:"fire",mpCost:8,power:1.5,target:"ally",description:"Restore HP to one ally with ketchup magic.",unlockLevel:1},mustard_shield:{id:"mustard_shield",name:"Mustard Shield",character:"ronald",type:"buff",element:"fire",mpCost:10,power:0,target:"ally",status:["def_up"],description:"Boost an ally's defense with golden mustard.",unlockLevel:5},fry_lance:{id:"fry_lance",name:"Fry Lance",character:"ronald",type:"attack",element:"fire",mpCost:14,power:1.6,target:"enemy",description:"A piercing lance of solidified fry grease.",unlockLevel:10},ketchup_splash:{id:"ketchup_splash",name:"Ketchup Splash",character:"ronald",type:"heal",element:"fire",mpCost:18,power:1.2,target:"allies",description:"Heal the whole party with a wave of ketchup.",unlockLevel:15},happy_meal:{id:"happy_meal",name:"Happy Meal",character:"ronald",type:"heal",element:"holy",mpCost:30,power:2,target:"allies",status:["regen"],description:"Full party heal with a side of joy.",unlockLevel:20},mustard_barrier:{id:"mustard_barrier",name:"Mustard Barrier",character:"ronald",type:"buff",element:"fire",mpCost:22,power:0,target:"allies",status:["def_up"],description:"Party-wide defense boost.",unlockLevel:30},golden_fry_lance:{id:"golden_fry_lance",name:"Golden Fry Lance",character:"ronald",type:"ultimate",element:"fire",mpCost:45,power:3.5,target:"enemy",status:["burn"],description:"A legendary golden fry that pierces all defenses.",unlockLevel:40},mc_flurry_blizzard:{id:"mc_flurry_blizzard",name:"McFlurry Blizzard",character:"ronald",type:"ultimate",element:"ice",mpCost:50,power:2.5,target:"enemies",status:["freeze"],description:"An ice storm of McFlurry proportions.",unlockLevel:50},grimace_slam:{id:"grimace_slam",name:"Grimace Slam",character:"grimace",type:"attack",element:"earth",mpCost:5,power:1.8,target:"enemy",description:"A heavy body slam.",unlockLevel:1},purple_body:{id:"purple_body",name:"Purple Body",character:"grimace",type:"buff",element:"earth",mpCost:8,power:0,target:"self",status:["taunt","def_up"],description:"Taunt enemies and boost DEF.",unlockLevel:1},grimace_guard:{id:"grimace_guard",name:"Grimace Guard",character:"grimace",type:"buff",element:"earth",mpCost:6,power:0,target:"ally",status:["cover"],description:"Take damage meant for an ally.",unlockLevel:5},shake_quake:{id:"shake_quake",name:"Shake Quake",character:"grimace",type:"aoe",element:"earth",mpCost:15,power:1,target:"enemies",status:["stun"],description:"Ground-shaking AoE that may stun.",unlockLevel:10},purple_pound:{id:"purple_pound",name:"Purple Pound",character:"grimace",type:"attack",element:"earth",mpCost:12,power:2.2,target:"enemy",status:["def_down"],description:"A crushing blow that lowers enemy DEF.",unlockLevel:15},grimace_roar:{id:"grimace_roar",name:"Grimace Roar",character:"grimace",type:"debuff",element:"earth",mpCost:14,power:0,target:"enemies",status:["atk_down"],description:"A terrifying roar that weakens all enemies.",unlockLevel:20},shake_storm:{id:"shake_storm",name:"Shake Storm",character:"grimace",type:"aoe",element:"earth",mpCost:25,power:1.5,target:"enemies",status:["slow"],description:"A storm of milkshakes slows all enemies.",unlockLevel:30},grimace_fortress:{id:"grimace_fortress",name:"Grimace Fortress",character:"grimace",type:"buff",element:"earth",mpCost:20,power:0,target:"allies",status:["def_up","cover"],description:"Become the ultimate fortress for the party.",unlockLevel:40},purple_titan:{id:"purple_titan",name:"Purple Titan",character:"grimace",type:"ultimate",element:"earth",mpCost:45,power:3,target:"enemies",status:["stun","def_down"],description:"Grimace becomes a titan and crushes all.",unlockLevel:50},feather_darts:{id:"feather_darts",name:"Feather Darts",character:"birdie",type:"attack",element:"air",mpCost:4,power:.6,target:"enemy",hits:3,description:"Throw 3 feather darts at one enemy.",unlockLevel:1},breakfast_blitz:{id:"breakfast_blitz",name:"Breakfast Blitz",character:"birdie",type:"attack",element:"air",mpCost:8,power:1.4,target:"enemy",description:"A speedy rush attack that strikes first.",unlockLevel:1,priority:!0},egg_bomb:{id:"egg_bomb",name:"Egg Bomb",character:"birdie",type:"aoe",element:"air",mpCost:14,power:1.1,target:"enemies",status:["atk_down"],description:"Bomb all enemies with explosive eggs.",unlockLevel:5},morning_song:{id:"morning_song",name:"Morning Song",character:"birdie",type:"buff",element:"air",mpCost:10,power:0,target:"allies",status:["agi_up"],description:"A cheerful song that boosts party AGI.",unlockLevel:10},dive_bomb:{id:"dive_bomb",name:"Dive Bomb",character:"birdie",type:"attack",element:"air",mpCost:12,power:1.9,target:"enemy",description:"A devastating aerial dive attack.",unlockLevel:15},dawn_chorus:{id:"dawn_chorus",name:"Dawn Chorus",character:"birdie",type:"debuff",element:"air",mpCost:16,power:0,target:"enemies",status:["agi_down"],description:"A chorus that slows all enemies.",unlockLevel:20},sky_dance:{id:"sky_dance",name:"Sky Dance",character:"birdie",type:"buff",element:"air",mpCost:18,power:0,target:"allies",status:["agi_up","atk_up"],description:"A dance that boosts ATK and AGI.",unlockLevel:30},hurricane_feathers:{id:"hurricane_feathers",name:"Hurricane Feathers",character:"birdie",type:"aoe",element:"air",mpCost:28,power:1.8,target:"enemies",hits:2,description:"A hurricane of feathers hits all enemies twice.",unlockLevel:40},sunny_side_up:{id:"sunny_side_up",name:"Sunny Side Up",character:"birdie",type:"ultimate",element:"holy",mpCost:45,power:2.8,target:"enemies",status:["burn","atk_down"],description:"A solar egg explosion sears all enemies.",unlockLevel:50},big_mac_smash:{id:"big_mac_smash",name:"Big Mac Smash",character:"bigmac",type:"attack",element:"holy",mpCost:6,power:1.7,target:"enemy",description:"A holy smash with the sesame sword.",unlockLevel:1},sesame_shield:{id:"sesame_shield",name:"Sesame Shield",character:"bigmac",type:"buff",element:"holy",mpCost:12,power:0,target:"allies",status:["def_up"],description:"Party-wide defense boost with sesame seeds.",unlockLevel:1},mcgriddle_charge:{id:"mcgriddle_charge",name:"McGriddle Charge",character:"bigmac",type:"attack",element:"holy",mpCost:10,power:1.5,target:"enemy",description:"A charging rush attack.",unlockLevel:5},special_sauce_smite:{id:"special_sauce_smite",name:"Special Sauce Smite",character:"bigmac",type:"aoe",element:"holy",mpCost:18,power:1.2,target:"enemies",description:"Holy AoE smite with special sauce.",unlockLevel:10},lettuce_wall:{id:"lettuce_wall",name:"Lettuce Wall",character:"bigmac",type:"buff",element:"holy",mpCost:14,power:0,target:"allies",status:["def_up","regen"],description:"A wall of lettuce that heals and protects.",unlockLevel:15},triple_stack:{id:"triple_stack",name:"Triple Stack",character:"bigmac",type:"attack",element:"holy",mpCost:16,power:2,target:"enemy",hits:3,description:"Three consecutive holy strikes.",unlockLevel:20},sesame_sanctuary:{id:"sesame_sanctuary",name:"Sesame Sanctuary",character:"bigmac",type:"buff",element:"holy",mpCost:22,power:0,target:"allies",status:["def_up","regen"],description:"A sanctuary that heals and shields.",unlockLevel:30},big_mac_judgment:{id:"big_mac_judgment",name:"Big Mac Judgment",character:"bigmac",type:"attack",element:"holy",mpCost:30,power:2.8,target:"enemy",status:["def_down"],description:"A judgment strike that shatters defenses.",unlockLevel:40},special_sauce_storm:{id:"special_sauce_storm",name:"Special Sauce Storm",character:"bigmac",type:"ultimate",element:"holy",mpCost:50,power:3.2,target:"enemies",status:["def_down"],description:"The ultimate special sauce storm.",unlockLevel:50},moon_melody:{id:"moon_melody",name:"Moon Melody",character:"mactonight",type:"buff",element:"dark",mpCost:8,power:0,target:"allies",status:["atk_up"],description:"A melody that boosts party ATK.",unlockLevel:1},nightjam:{id:"nightjam",name:"Nightjam",character:"mactonight",type:"debuff",element:"dark",mpCost:8,power:0,target:"enemies",status:["atk_down"],description:"A jam that lowers enemy ATK.",unlockLevel:1},mac_jazz:{id:"mac_jazz",name:"Mac Jazz",character:"mactonight",type:"buff",element:"dark",mpCost:10,power:0,target:"allies",status:["mp_regen"],description:"Smooth jazz that regenerates MP.",unlockLevel:5},moonlight_serenade:{id:"moonlight_serenade",name:"Moonlight Serenade",character:"mactonight",type:"utility",element:"dark",mpCost:14,power:.5,target:"enemies",status:["sleep"],description:"A serenade that puts enemies to sleep and heals party.",unlockLevel:10},blue_moon:{id:"blue_moon",name:"Blue Moon",character:"mactonight",type:"heal",element:"dark",mpCost:16,power:1.3,target:"ally",status:["regen"],description:"Heal an ally and grant regen.",unlockLevel:15},midnight_blues:{id:"midnight_blues",name:"Midnight Blues",character:"mactonight",type:"debuff",element:"dark",mpCost:18,power:0,target:"enemies",status:["atk_down","def_down"],description:"A blues number that weakens all enemies.",unlockLevel:20},eclipse:{id:"eclipse",name:"Eclipse",character:"mactonight",type:"utility",element:"dark",mpCost:22,power:0,target:"enemies",status:["stun","agi_down"],description:"Block out the sun, stunning all enemies.",unlockLevel:30},moon_sonata:{id:"moon_sonata",name:"Moon Sonata",character:"mactonight",type:"buff",element:"dark",mpCost:28,power:0,target:"allies",status:["atk_up","def_up","agi_up"],description:"A grand sonata that boosts all stats.",unlockLevel:40},lunar_eclipse:{id:"lunar_eclipse",name:"Lunar Eclipse",character:"mactonight",type:"ultimate",element:"dark",mpCost:50,power:2.5,target:"enemies",status:["stun","atk_down","def_down"],description:"The ultimate performance.",unlockLevel:50},enemy_bite:{id:"enemy_bite",name:"Bite",type:"attack",element:"physical",mpCost:0,power:1,target:"enemy",description:"A basic bite."},enemy_swarm:{id:"enemy_swarm",name:"Swarm",type:"attack",element:"physical",mpCost:0,power:.5,target:"enemy",hits:3,description:"Multiple weak hits."},enemy_slam:{id:"enemy_slam",name:"Slam",type:"attack",element:"physical",mpCost:0,power:1.5,target:"enemy",description:"A heavy slam."},enemy_fire_breath:{id:"enemy_fire_breath",name:"Fire Breath",type:"aoe",element:"fire",mpCost:0,power:1,target:"enemies",status:["burn"],description:"Fire AoE."},enemy_ice_breath:{id:"enemy_ice_breath",name:"Ice Breath",type:"aoe",element:"ice",mpCost:0,power:.9,target:"enemies",status:["slow"],description:"Ice AoE."},enemy_water_jet:{id:"enemy_water_jet",name:"Water Jet",type:"attack",element:"water",mpCost:0,power:1.3,target:"enemy",description:"A jet of water."},enemy_heal:{id:"enemy_heal",name:"Heal",type:"heal",element:"holy",mpCost:0,power:1,target:"ally",description:"Heal an ally."},enemy_buff:{id:"enemy_buff",name:"Battle Cry",type:"buff",element:"physical",mpCost:0,power:0,target:"allies",status:["atk_up"],description:"ATK buff."},enemy_debuff:{id:"enemy_debuff",name:"Intimidate",type:"debuff",element:"dark",mpCost:0,power:0,target:"enemies",status:["def_down"],description:"DEF debuff."},enemy_poison_spit:{id:"enemy_poison_spit",name:"Poison Spit",type:"attack",element:"water",mpCost:0,power:.8,target:"enemy",status:["poison"],description:"Poison attack."},enemy_drain:{id:"enemy_drain",name:"MP Drain",type:"utility",element:"dark",mpCost:0,power:0,target:"enemy",drainMP:15,description:"Drain MP from target."},enemy_fizz:{id:"enemy_fizz",name:"Fizz Blast",type:"aoe",element:"water",mpCost:0,power:1.1,target:"enemies",status:["atk_down"],description:"Carbonated AoE."},enemy_lightning:{id:"enemy_lightning",name:"Spark",type:"attack",element:"air",mpCost:0,power:1.4,target:"enemy",description:"Electric spark."},enemy_steal:{id:"enemy_steal",name:"Steal",type:"utility",element:"dark",mpCost:0,power:0,target:"enemy",description:"Steals items or HP."},enemy_acid:{id:"enemy_acid",name:"Acid Splash",type:"attack",element:"water",mpCost:0,power:1,target:"enemy",status:["def_down"],description:"Acid that lowers DEF."}},Ra={mcnugget_goblin:{id:"mcnugget_goblin",name:"McNugget Goblin",tier:"weak",stats:{hp:30,mp:0,atk:10,def:5,agi:12,mag:5},element:"physical",weakTo:["fire","holy"],resists:["physical"],abilities:["enemy_bite"],xp:8,gold:5,drops:[{item:"ketchup_packet",chance:.3}],color:13934615,size:.6,shape:"nugget",description:"A small crispy nugget creature. Weak but comes in groups."},hash_brown_sprite:{id:"hash_brown_sprite",name:"Hash Brown Sprite",tier:"weak",stats:{hp:25,mp:5,atk:8,def:4,agi:20,mag:8},element:"physical",weakTo:["fire"],resists:["earth"],abilities:["enemy_swarm"],xp:7,gold:4,drops:[{item:"hash_brown_shard",chance:.4}],color:13141516,size:.5,shape:"sprite",description:"A tiny crispy sprite. Fast but fragile."},mcdouble_drone:{id:"mcdouble_drone",name:"McDouble Drone",tier:"weak",stats:{hp:35,mp:0,atk:9,def:6,agi:15,mag:3},element:"physical",weakTo:["ice","air"],resists:["fire"],abilities:["enemy_bite","enemy_swarm"],xp:9,gold:6,drops:[{item:"cheese_scrap",chance:.3}],color:9127187,size:.55,shape:"drone",description:"A small drone that swarms in groups."},ketchup_goblin:{id:"ketchup_goblin",name:"Ketchup Goblin",tier:"weak",stats:{hp:20,mp:10,atk:7,def:3,agi:18,mag:10},element:"fire",weakTo:["ice","water"],resists:["fire"],abilities:["enemy_bite","enemy_poison_spit"],xp:6,gold:3,drops:[{item:"ketchup_packet",chance:.5}],color:12852794,size:.5,shape:"goblin",description:"A goblin made of ketchup. Weak but numerous."},sausage_burrito_rogue:{id:"sausage_burrito_rogue",name:"Sausage Burrito Rogue",tier:"weak",stats:{hp:40,mp:5,atk:12,def:7,agi:16,mag:6},element:"physical",weakTo:["fire"],resists:["dark"],abilities:["enemy_bite","enemy_steal"],xp:10,gold:12,drops:[{item:"tortilla_scrap",chance:.25}],color:13789470,size:.6,shape:"rogue",description:"A stealthy rogue wrapped in a tortilla."},quarter_pounder_knight:{id:"quarter_pounder_knight",name:"Quarter Pounder Knight",tier:"normal",stats:{hp:70,mp:10,atk:18,def:14,agi:8,mag:8},element:"physical",weakTo:["fire","holy"],resists:["physical","dark"],abilities:["enemy_slam","enemy_bite"],xp:20,gold:15,drops:[{item:"patty_fragment",chance:.3},{item:"mc_flurry_potion",chance:.1}],color:7029795,size:.9,shape:"knight",description:"A knight with a quarter-pound patty shield."},mcrib_wraith:{id:"mcrib_wraith",name:"McRib Wraith",tier:"normal",stats:{hp:60,mp:20,atk:16,def:10,agi:14,mag:14},element:"dark",weakTo:["holy","fire"],resists:["dark","water"],abilities:["enemy_bite","enemy_drain"],xp:22,gold:18,drops:[{item:"rib_bone",chance:.3},{item:"mc_flurry_potion",chance:.15}],color:9109504,size:.85,shape:"wraith",description:"A ghostly rib sandwich that slides on the ground."},filet_o_fish_siren:{id:"filet_o_fish_siren",name:"Filet-O-Fish Siren",tier:"normal",stats:{hp:55,mp:25,atk:14,def:8,agi:12,mag:18},element:"water",weakTo:["fire","holy"],resists:["water","ice"],abilities:["enemy_water_jet","enemy_debuff"],xp:24,gold:20,drops:[{item:"fish_scale",chance:.35},{item:"mc_flurry_potion",chance:.15}],color:4886745,size:.8,shape:"siren",description:"A fishy siren that lures heroes with water spells."},mcmuffin_golem:{id:"mcmuffin_golem",name:"McMuffin Golem",tier:"normal",stats:{hp:90,mp:5,atk:15,def:20,agi:5,mag:8},element:"earth",weakTo:["water","air"],resists:["earth","fire"],abilities:["enemy_slam","enemy_buff"],xp:25,gold:18,drops:[{item:"egg_fragment",chance:.4},{item:"english_muffin",chance:.2}],color:16766720,size:1,shape:"golem",description:"A morning golem built from egg and muffin."},sundae_slime:{id:"sundae_slime",name:"Sundae Slime",tier:"normal",stats:{hp:50,mp:15,atk:10,def:12,agi:7,mag:12},element:"water",weakTo:["fire"],resists:["water","ice"],abilities:["enemy_bite","enemy_debuff"],xp:18,gold:14,drops:[{item:"sundae_drip",chance:.35}],color:16738740,size:.7,shape:"slime",description:"A sticky slime that slows the party."},onion_ring_knight:{id:"onion_ring_knight",name:"Onion Ring Knight",tier:"normal",stats:{hp:65,mp:8,atk:14,def:16,agi:10,mag:10},element:"physical",weakTo:["fire"],resists:["physical","water"],abilities:["enemy_slam","enemy_bite"],xp:21,gold:16,drops:[{item:"onion_ring",chance:.4}],color:14329120,size:.85,shape:"knight",description:"A knight in circular formation armor."},mustard_knight:{id:"mustard_knight",name:"Mustard Knight",tier:"normal",stats:{hp:75,mp:10,atk:16,def:15,agi:9,mag:12},element:"fire",weakTo:["water","ice"],resists:["fire","physical"],abilities:["enemy_slam","enemy_fire_breath"],xp:23,gold:17,drops:[{item:"mustard_jar",chance:.35}],color:16763904,size:.9,shape:"knight",description:"A knight bathed in mustard, resistant to fire."},mcchicken_harpy:{id:"mcchicken_harpy",name:"McChicken Harpy",tier:"normal",stats:{hp:58,mp:12,atk:15,def:9,agi:22,mag:10},element:"air",weakTo:["ice","earth"],resists:["air"],abilities:["enemy_swarm","enemy_debuff"],xp:22,gold:16,drops:[{item:"feather",chance:.4}],color:16767673,size:.8,shape:"harpy",description:"A flying chicken harpy."},parfait_pixie:{id:"parfait_pixie",name:"Parfait Pixie",tier:"normal",stats:{hp:45,mp:30,atk:8,def:7,agi:18,mag:20},element:"holy",weakTo:["dark"],resists:["holy","water"],abilities:["enemy_heal","enemy_buff"],xp:20,gold:22,drops:[{item:"parfait_glass",chance:.3}],color:16761035,size:.55,shape:"pixie",description:"A pixie that buffs and heals enemies."},iced_coffee_wraith:{id:"iced_coffee_wraith",name:"Iced Coffee Wraith",tier:"normal",stats:{hp:68,mp:18,atk:14,def:12,agi:11,mag:16},element:"ice",weakTo:["fire"],resists:["ice","water"],abilities:["enemy_ice_breath","enemy_drain"],xp:24,gold:19,drops:[{item:"coffee_ground",chance:.35}],color:4860951,size:.85,shape:"wraith",description:"A cold aura wraith made of iced coffee."},ranch_ooze:{id:"ranch_ooze",name:"Ranch Dressing Ooze",tier:"normal",stats:{hp:72,mp:8,atk:12,def:14,agi:6,mag:10},element:"water",weakTo:["fire","earth"],resists:["water"],abilities:["enemy_acid","enemy_bite"],xp:22,gold:16,drops:[{item:"ranch_drip",chance:.4}],color:16119260,size:.75,shape:"slime",description:"An acidic ooze that melts defenses."},big_mac_brute:{id:"big_mac_brute",name:"Big Mac Brute",tier:"elite",stats:{hp:120,mp:15,atk:22,def:18,agi:7,mag:10},element:"physical",weakTo:["fire","holy"],resists:["physical","dark"],abilities:["enemy_slam","enemy_buff","enemy_fire_breath"],xp:45,gold:35,drops:[{item:"big_mac_crown",chance:.25},{item:"happy_meal_charm",chance:.1}],color:9127187,size:1.2,shape:"brute",description:"A massive brute. Slow but hits like a truck."},apple_pie_dragon:{id:"apple_pie_dragon",name:"Apple Pie Dragon",tier:"elite",stats:{hp:100,mp:30,atk:20,def:14,agi:15,mag:22},element:"fire",weakTo:["ice","water"],resists:["fire","earth"],abilities:["enemy_fire_breath","enemy_swarm","enemy_bite"],xp:50,gold:40,drops:[{item:"apple_pie_scale",chance:.3},{item:"mc_flurry_potion",chance:.2}],color:12868113,size:1.3,shape:"dragon",description:"A dragon with crispy apple pie scales."},mcflurry_elemental:{id:"mcflurry_elemental",name:"McFlurry Elemental",tier:"elite",stats:{hp:95,mp:35,atk:16,def:12,agi:14,mag:24},element:"ice",weakTo:["fire"],resists:["ice","water"],abilities:["enemy_ice_breath","enemy_debuff","enemy_drain"],xp:48,gold:38,drops:[{item:"mcflurry_shard",chance:.35},{item:"mc_flurry_potion",chance:.3}],color:8965375,size:1.1,shape:"elemental",description:"An elemental of swirling McFlurry ice."},sprite_fairy:{id:"sprite_fairy",name:"Sprite Fairy",tier:"elite",stats:{hp:80,mp:40,atk:14,def:8,agi:28,mag:22},element:"air",weakTo:["earth"],resists:["air","fire"],abilities:["enemy_lightning","enemy_swarm","enemy_buff"],xp:46,gold:36,drops:[{item:"sprite_bottle",chance:.3},{item:"happy_meal_charm",chance:.15}],color:65416,size:.7,shape:"fairy",description:"A lightning fairy that sparks with Sprite energy."},coke_colossus:{id:"coke_colossus",name:"Coke Colossus",tier:"elite",stats:{hp:110,mp:25,atk:18,def:16,agi:10,mag:18},element:"water",weakTo:["fire","ice"],resists:["water","earth"],abilities:["enemy_fizz","enemy_water_jet","enemy_slam"],xp:50,gold:42,drops:[{item:"coke_can",chance:.35},{item:"happy_meal_charm",chance:.15}],color:12852794,size:1.4,shape:"colossus",description:"A fizzy giant that deals AoE damage."},mcnugget_king:{id:"mcnugget_king",name:"McNugget King",tier:"elite",stats:{hp:130,mp:20,atk:24,def:20,agi:8,mag:12},element:"physical",weakTo:["fire","holy"],resists:["physical"],abilities:["enemy_slam","enemy_buff","enemy_swarm"],xp:55,gold:45,drops:[{item:"nugget_crown",chance:.3},{item:"arch_armor",chance:.1}],color:13934615,size:1.3,shape:"king",description:"The king of all nuggets. A elite brute."},bacon_cheeseburger_bandit:{id:"bacon_cheeseburger_bandit",name:"Bacon Cheeseburger Bandit",tier:"elite",stats:{hp:105,mp:18,atk:26,def:14,agi:18,mag:10},element:"dark",weakTo:["holy"],resists:["dark","fire"],abilities:["enemy_bite","enemy_steal","enemy_slam"],xp:52,gold:48,drops:[{item:"bacon_strip",chance:.35},{item:"happy_meal_charm",chance:.12}],color:4860951,size:1,shape:"bandit",description:"A dark attacker with bacon strips for weapons."},deluxe_quarter_pounder:{id:"deluxe_quarter_pounder",name:"Deluxe Quarter Pounder",tier:"elite",stats:{hp:140,mp:15,atk:22,def:22,agi:10,mag:12},element:"physical",weakTo:["fire","ice"],resists:["physical","dark"],abilities:["enemy_slam","enemy_buff","enemy_fire_breath"],xp:58,gold:50,drops:[{item:"deluxe_patty",chance:.3},{item:"arch_armor",chance:.15}],color:7029795,size:1.15,shape:"knight",description:"An upgraded elite knight."},hotcake_sentinel:{id:"hotcake_sentinel",name:"Hotcake Sentinel",tier:"elite",stats:{hp:150,mp:10,atk:18,def:28,agi:5,mag:8},element:"earth",weakTo:["water","fire"],resists:["earth","physical"],abilities:["enemy_slam","enemy_buff"],xp:55,gold:42,drops:[{item:"syrup_bottle",chance:.4},{item:"arch_armor",chance:.12}],color:13141516,size:1.2,shape:"sentinel",description:"A shield wall sentinel made of hotcakes."},mccookie_titan:{id:"mccookie_titan",name:"McCookie Titan",tier:"elite",stats:{hp:180,mp:5,atk:20,def:15,agi:6,mag:8},element:"earth",weakTo:["water"],resists:["earth","fire"],abilities:["enemy_slam","enemy_swarm"],xp:60,gold:50,drops:[{item:"cookie_chunk",chance:.4},{item:"arch_armor",chance:.15}],color:13789470,size:1.5,shape:"titan",description:"A giant cookie with massive HP."},cheese_melt_mage:{id:"cheese_melt_mage",name:"Cheese Melt Mage",tier:"elite",stats:{hp:90,mp:40,atk:14,def:16,agi:12,mag:26},element:"fire",weakTo:["water","ice"],resists:["fire","holy"],abilities:["enemy_fire_breath","enemy_buff","enemy_debuff"],xp:54,gold:44,drops:[{item:"melted_cheese",chance:.35},{item:"happy_meal_charm",chance:.15}],color:16753920,size:1,shape:"mage",description:"A mage of molten cheese with fire and shields."},cookie_monster:{id:"cookie_monster",name:"Cookie Monster",tier:"elite",stats:{hp:100,mp:35,atk:16,def:14,agi:13,mag:20},element:"dark",weakTo:["holy","fire"],resists:["dark"],abilities:["enemy_drain","enemy_bite","enemy_debuff"],xp:52,gold:40,drops:[{item:"cookie_chunk",chance:.4},{item:"mc_flurry_potion",chance:.2}],color:13226,size:1.1,shape:"monster",description:"Feeds on party MP. A dangerous cookie beast."},sweet_tea_spirit:{id:"sweet_tea_spirit",name:"Sweet Tea Spirit",tier:"elite",stats:{hp:85,mp:45,atk:12,def:10,agi:16,mag:24},element:"water",weakTo:["fire"],resists:["water","ice"],abilities:["enemy_heal","enemy_buff","enemy_water_jet"],xp:48,gold:38,drops:[{item:"tea_leaf",chance:.35}],color:9127187,size:.9,shape:"spirit",description:"Heals enemy party. Take it out first!"},the_condiment_king:{id:"the_condiment_king",name:"The Condiment King",tier:"boss",stats:{hp:350,mp:80,atk:26,def:20,agi:14,mag:28},element:"fire",weakTo:["ice","holy"],resists:["fire","water","dark"],abilities:["enemy_fire_breath","enemy_ice_breath","enemy_acid","enemy_fizz","enemy_buff","enemy_heal"],xp:200,gold:150,drops:[{item:"condiment_crown",chance:1},{item:"golden_arch_charm",chance:.5}],color:16737792,size:1.8,shape:"boss",description:"The master of all sauces. A dangerous mini-boss."}},N_={fry_valley:[{monsters:["mcnugget_goblin","mcnugget_goblin"],weight:30},{monsters:["hash_brown_sprite","mcnugget_goblin"],weight:25},{monsters:["hash_brown_sprite","hash_brown_sprite"],weight:20},{monsters:["mcnugget_goblin","mcnugget_goblin","mcnugget_goblin"],weight:15},{monsters:["ketchup_goblin","ketchup_goblin"],weight:10}],burger_highlands:[{monsters:["quarter_pounder_knight"],weight:25},{monsters:["quarter_pounder_knight","mcnugget_goblin"],weight:20},{monsters:["mcrib_wraith"],weight:20},{monsters:["onion_ring_knight","onion_ring_knight"],weight:15},{monsters:["mustard_knight"],weight:15},{monsters:["mcnugget_king"],weight:5}],mcflurry_tundra:[{monsters:["mcflurry_elemental"],weight:25},{monsters:["iced_coffee_wraith","iced_coffee_wraith"],weight:20},{monsters:["mcflurry_elemental","iced_coffee_wraith"],weight:20},{monsters:["sundae_slime","sundae_slime"],weight:15},{monsters:["sprite_fairy"],weight:15},{monsters:["coke_colossus"],weight:5}],happy_meal_forest:[{monsters:["mcrib_wraith","ketchup_goblin"],weight:20},{monsters:["mcchicken_harpy","mcchicken_harpy"],weight:20},{monsters:["parfait_pixie","mcnugget_goblin"],weight:20},{monsters:["apple_pie_dragon"],weight:15},{monsters:["cookie_monster"],weight:15},{monsters:["bacon_cheeseburger_bandit"],weight:10}],drive_thru_desert:[{monsters:["mcmuffin_golem"],weight:20},{monsters:["bacon_cheeseburger_bandit","mcdouble_drone"],weight:20},{monsters:["hotcake_sentinel"],weight:15},{monsters:["ranch_ooze","ranch_ooze"],weight:15},{monsters:["deluxe_quarter_pounder"],weight:15},{monsters:["the_condiment_king"],weight:5},{monsters:["mccookie_titan"],weight:10}],mccafe_springs:[{monsters:["sweet_tea_spirit","parfait_pixie"],weight:20},{monsters:["iced_coffee_wraith","sweet_tea_spirit"],weight:20},{monsters:["sprite_fairy","sprite_fairy"],weight:15},{monsters:["coke_colossus"],weight:10},{monsters:["cheese_melt_mage"],weight:15},{monsters:["mcflurry_elemental","parfait_pixie"],weight:15},{monsters:["deluxe_quarter_pounder","mustard_knight"],weight:5}],play_place_plains:[{monsters:["big_mac_brute","onion_ring_knight"],weight:20},{monsters:["apple_pie_dragon","mcchicken_harpy"],weight:20},{monsters:["mcnugget_king","mcnugget_goblin","mcnugget_goblin"],weight:15},{monsters:["deluxe_quarter_pounder","quarter_pounder_knight"],weight:15},{monsters:["cheese_melt_mage","ranch_ooze"],weight:15},{monsters:["mccookie_titan"],weight:10},{monsters:["the_condiment_king"],weight:5}],golden_arches_castle:[{monsters:["big_mac_brute","mustard_knight","onion_ring_knight"],weight:20},{monsters:["apple_pie_dragon","mcflurry_elemental"],weight:20},{monsters:["deluxe_quarter_pounder","deluxe_quarter_pounder"],weight:15},{monsters:["mcnugget_king","bacon_cheeseburger_bandit"],weight:15},{monsters:["cheese_melt_mage","cookie_monster","sweet_tea_spirit"],weight:15},{monsters:["mccookie_titan","hotcake_sentinel"],weight:10},{monsters:["the_condiment_king"],weight:5}]};function U_(r){const e=N_[r];if(!e)return null;const t=e.reduce((i,s)=>i+s.weight,0);let n=Math.random()*t;for(const i of e)if(n-=i.weight,n<=0)return i.monsters;return e[0].monsters}const F_={ronald:2,grimace:2,birdie:1.8,bigmac:2.2,mactonight:2,mcnugget_goblin:1.2,bigmac_brute:3,applepie_dragon:1.5,mcflurry_elemental:1.8,mcrib_wraith:2,quarterpounder_knight:2.2,filetfish_siren:2,sundae_slime:1.5,hamburglar:2.5,hamburglar_elite:2.5};class O_{constructor(e){this.shaderManager=e||new md,this.textureCache=new Map,this.geometryCache=new Map,this.modelCache=new Map,this.gltfLoader=new Q0}async loadModel(e){if(this.modelCache.has(e))return this.modelCache.get(e).clone(!0);try{const t=`/models/${e}.glb`,i=(await this.gltfLoader.loadAsync(t)).scene;i.traverse(d=>{var u,h;if(d.isMesh){const p=((h=(u=d.material)==null?void 0:u.color)==null?void 0:h.clone())||new ge(13421772);d.material=this.shaderManager.createToonMaterial(p.getHex()),d.castShadow=!0,d.receiveShadow=!0}});const s=F_[e]||2,a=new rn().setFromObject(i),o=a.getSize(new R),l=Math.max(o.x,o.y,o.z);if(l>0){const d=s/l;i.scale.setScalar(d)}a.setFromObject(i);const c=a.getCenter(new R);return i.position.x-=c.x,i.position.z-=c.z,i.position.y-=a.min.y,this.modelCache.set(e,i),i.clone(!0)}catch(t){return console.warn(`Failed to load GLB model ${e}, using procedural fallback:`,t),this._getProceduralFallback(e)}}async preloadModels(e){const t=e.map(n=>this.loadModel(n).catch(()=>null));await Promise.all(t)}async preloadAllModels(){const e=["ronald","grimace","birdie","bigmac","mactonight"],t=["mcnugget_goblin","bigmac_brute","applepie_dragon","mcflurry_elemental","mcrib_wraith","quarterpounder_knight","filetfish_siren","sundae_slime","hamburglar","hamburglar_elite"],n=[...e,...t];await this.preloadModels(n)}_getProceduralFallback(e){if(fs[e])return this.createCharacterMesh(e);if(Ra[e])return this.createMonsterMesh(e);const t=new ht,n=this._material(13421772),i=new Le(new ei(1,2,1),n);return i.position.y=1,t.add(i),t}_getGeometry(e,t){return this.geometryCache.has(e)||this.geometryCache.set(e,t()),this.geometryCache.get(e)}_material(e,t={}){return this.shaderManager.createToonMaterial(e,t)}createCharacterMesh(e){const t=fs[e];if(!t)return console.warn(`Unknown character: ${e}`),new ht;const i={ronald:()=>this._buildRonald(t),grimace:()=>this._buildGrimace(t),birdie:()=>this._buildBirdie(t),bigmac:()=>this._buildBigMac(t),mactonight:()=>this._buildMacTonight(t)}[e],s=i?i():this._buildGenericCharacter(t);return s.userData.type="character",s.userData.characterId=e,s.castShadow=!0,s.receiveShadow=!0,s}_buildRonald(e){const t=new ht,n=this._material(16720384),i=this._material(16764074),s=this._material(16768256),a=new Le(new Jt(.5,.7,1.6,12),n);a.position.y=.8,t.add(a);const o=new Le(new Jt(.55,.55,.15,12),s);o.position.y=.9,t.add(o);const l=new Le(new It(.45,16,12),i);l.position.y=2,t.add(l);const c=new Le(new It(.5,16,12),n);return c.position.y=2.15,t.add(c),t}_buildGrimace(e){const t=new ht,n=this._material(8930508),i=new Le(new It(1.2,16,12),n);return i.position.y=1,i.scale.y=1.2,t.add(i),t}_buildBirdie(e){const t=new ht,n=this._material(16746700),i=this._material(16768256),s=new Le(new It(.6,12,10),n);s.position.y=1,t.add(s);const a=new Le(new ar(.2,.4,8),i);return a.position.set(0,1,.5),a.rotation.x=Math.PI/2,t.add(a),t}_buildBigMac(e){const t=new ht,n=this._material(9127187),i=new Le(new Jt(.6,.8,2,12),n);i.position.y=1,t.add(i);const s=new Le(new It(.5,12,10),this._material(13934615));return s.position.y=2.3,t.add(s),t}_buildMacTonight(e){const t=new ht,n=this._material(16771899),i=new Le(new Jt(.5,.6,1.6,12),this._material(3355443));i.position.y=.8,t.add(i);const s=new Le(new It(.5,16,12),n);return s.scale.x=.6,s.position.y=2,t.add(s),t}_buildGenericCharacter(e){const t=new ht,n=this._material(e.color||8947848),i=new Le(new Jt(.5,.7,1.6,8),n);i.position.y=.8,t.add(i);const s=new Le(new It(.4,12,10),this._material(16764074));return s.position.y=1.8,t.add(s),t}createMonsterMesh(e){const t=Ra[e];if(!t)return new ht;const n=new ht,i=this._material(t.color||8934690),s=new Le(new It(1,12,10),i);s.position.y=1,s.scale.set(1.2,1.5,1),n.add(s);const a=this._material(16777215),o=new Le(new It(.15,8,6),a);o.position.set(-.3,1.3,.8),n.add(o);const l=new Le(new It(.15,8,6),a);return l.position.set(.3,1.3,.8),n.add(l),n.userData.type="monster",n.userData.monsterId=e,n.castShadow=!0,n.receiveShadow=!0,n}createGround(e=3825466){const t=this._material(e),n=new Le(new Qn(200,200),t);return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n}createTree(e=0){const t=new os(e),n=new ht,i=this._material(4860426),s=this._material(2775594+Math.floor(t.next()*2236962)),a=new Le(new Jt(.2,.3,2,6),i);a.position.y=1,a.castShadow=!0,n.add(a);const o=new Le(new It(1+t.next()*.5,8,6),s);return o.position.y=2.5,o.castShadow=!0,n.add(o),n}createRock(e=0){const t=new os(e),n=this._material(8947848+Math.floor(t.next()*2236962)),i=new Le(new Ha(.5+t.next()*.5,0),n);return i.position.y=.3,i.rotation.set(t.next()*Math.PI,t.next()*Math.PI,t.next()*Math.PI),i.castShadow=!0,i.receiveShadow=!0,i}createBuilding(e=0,t=13404228){const n=new os(e),i=new ht,s=this._material(t),a=2+n.next()*2,o=2+n.next()*3,l=2+n.next()*2,c=new Le(new ei(a,o,l),s);c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const d=this._material(8925986),u=new Le(new ar(Math.max(a,l)*.7,1,4),d);return u.position.y=o+.5,u.rotation.y=Math.PI/4,u.castShadow=!0,i.add(u),i}getTexture(e,t){return this.textureCache.has(e)||this.textureCache.set(e,t()),this.textureCache.get(e)}}class B_{constructor(e){this.camera=e,this.currentMode="overworld",this.targetObject=null,this.cameraYaw=0,this.transitionT=1,this.transitionSpeed=3,this.previousPosition=new R,this.previousLookAt=new R,this.targetPosition=new R,this.targetLookAt=new R,this.currentLookAt=new R,this.overworldOffset=new R(0,8,12),this.overworldFollowSpeed=5,this.overworldYawSpeed=2.5,this.battleCombatants=[],this.battleTime=0,this.battleSwayAmplitude=.6,this.battleSwaySpeed=1.2,this.battleDistance=18,this.battleHeight=12,this.menuPosition=new R(0,20,20),this.menuLookAt=new R(0,0,0),this.titleRadius=20,this.titleHeight=10,this.titleOrbitSpeed=.25,this.regionData=null,this.inputRotateLeft=!1,this.inputRotateRight=!1,this.currentLookAt.set(0,0,0),this.previousPosition.copy(this.camera.position),this.previousLookAt.copy(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt)}setMode(e){e!==this.currentMode&&(this.previousPosition.copy(this.camera.position),this.previousLookAt.copy(this.currentLookAt),this.currentMode=e,this.transitionT=0,this._updateTargetPosition(0))}setTarget(e){this.targetObject=e}setBattleCombatants(e){this.battleCombatants=e}setRegion(e){this.regionData=e;const t=this.camera.userData.fog;t&&e&&(e.fogColor!==void 0&&t.color.setHex(e.fogColor),e.fogDensity!==void 0&&(t.density=e.fogDensity),e.fogNear!==void 0&&(t.near=e.fogNear),e.fogFar!==void 0&&(t.far=e.fogFar))}update(e){if(this.transitionT<1&&(this.transitionT=Math.min(1,this.transitionT+this.transitionSpeed*e)),this.currentMode==="overworld"&&(this.inputRotateLeft&&(this.cameraYaw+=this.overworldYawSpeed*e),this.inputRotateRight&&(this.cameraYaw-=this.overworldYawSpeed*e)),this._updateTargetPosition(e),this.transitionT<1){const t=Aa(0,1,this.transitionT);this.camera.position.lerpVectors(this.previousPosition,this.targetPosition,t),this.currentLookAt.lerpVectors(this.previousLookAt,this.targetLookAt,t)}else this.camera.position.lerp(this.targetPosition,ni(this.overworldFollowSpeed*e,0,1)),this.currentLookAt.lerp(this.targetLookAt,ni(this.overworldFollowSpeed*e,0,1));this.camera.lookAt(this.currentLookAt)}_updateTargetPosition(e){switch(this.currentMode){case"overworld":this._computeOverworld(e);break;case"battle":this._computeBattle(e);break;case"menu":this._computeMenu();break;case"title":this._computeTitle(e);break;default:this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt);break}}_computeOverworld(e){if(!this.targetObject){this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt);return}const t=this.targetObject.position,n=Math.cos(this.cameraYaw),i=Math.sin(this.cameraYaw),s=this.overworldOffset.x*n-this.overworldOffset.z*i,a=this.overworldOffset.x*i+this.overworldOffset.z*n,o=this.overworldOffset.y;this.targetPosition.set(t.x+s,t.y+o,t.z+a),this.targetLookAt.set(t.x,t.y+1,t.z)}_computeBattle(e){if(this.battleTime+=e,this.battleCombatants.length===0){this.targetPosition.set(0,this.battleHeight,this.battleDistance),this.targetLookAt.set(0,0,0);return}const t=new R;for(const c of this.battleCombatants)t.add(c);t.divideScalar(this.battleCombatants.length);const n=-Math.PI*.25,i=t.x+Math.sin(n)*this.battleDistance,s=t.z+Math.cos(n)*this.battleDistance,a=t.y+this.battleHeight,o=Math.sin(this.battleTime*this.battleSwaySpeed)*this.battleSwayAmplitude,l=Math.cos(this.battleTime*this.battleSwaySpeed)*this.battleSwayAmplitude;this.targetPosition.set(i+o,a+l,s),this.targetLookAt.set(t.x,t.y+1.5,t.z)}_computeMenu(){this.targetPosition.copy(this.menuPosition),this.targetLookAt.copy(this.menuLookAt)}_computeTitle(e){this._titleAngle||(this._titleAngle=0),this._titleAngle+=this.titleOrbitSpeed*e;const t=Math.cos(this._titleAngle)*this.titleRadius,n=Math.sin(this._titleAngle)*this.titleRadius,i=this.titleHeight;this.targetPosition.set(t,i,n),this.targetLookAt.set(0,0,0)}}class z_{constructor(e,t,n){this.renderer=e,this.cameraController=t,this.assetManager=n,this.currentState="title",this.scenes={title:new ji,overworld:new ji,battle:new ji,menu:new ji},this.sceneFog={},this.transitioning=!1,this.transitionT=0,this.transitionDuration=.5,this.transitionFromState=null,this.transitionToState=null,this.pendingData=null,this.overlayGeometry=new Qn(2,2),this.overlayMaterial=new nn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.overlay=new Le(this.overlayGeometry,this.overlayMaterial),this.overlay.position.z=-.1,this.overlayScene=new ji,this.overlayCamera=new hr(-1,1,1,-1,0,1),this.overlayScene.add(this.overlay),this.currentRegion=null,this.battleData=null,this.skySettings={},this._setupTitleScene()}_setupTitleScene(){const e=this.scenes.title,t=new Zr(8952251,1.2);e.add(t);const n=new Ol(11184895,4469606,.6);n.position.set(0,20,0),e.add(n);const i=new ts(16774365,1.5);i.position.set(-5,10,-3),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,e.add(i);const s=new ts(16755421,.5);s.position.set(5,8,3),e.add(s),e.fog=new wi(2759226,.015);const a=new It(200,32,16),o=new bn({uniforms:{topColor:{value:new ge(4864618)},bottomColor:{value:new ge(6965850)},offset:{value:33},exponent:{value:.6}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,side:wt,depthWrite:!1}),l=new Le(a,o);l.userData.persistent=!0,e.add(l);const c=this.assetManager.shaderManager.createToonMaterial(5917242),d=new Le(new Qn(100,100),c);d.rotation.x=-Math.PI/2,d.position.y=-2,d.receiveShadow=!0,e.add(d);const u=this.assetManager.createStructure("golden_arches");u.position.set(0,-2,-10),e.add(u)}setState(e,t={}){this.currentState===e&&!this.transitioning||(this.transitioning=!0,this.transitionT=0,this.transitionFromState=this.currentState,this.transitionToState=e,this.pendingData=t)}_completeTransition(){this.currentState=this.transitionToState,this.transitioning=!1,this.transitionT=0,this.transitionFromState=null,this.transitionToState=null,this.pendingData&&(this.pendingData.region&&(this.currentRegion=this.pendingData.region,this._setupOverworldScene(this.pendingData.region)),this.pendingData.battle&&(this.battleData=this.pendingData.battle,this._setupBattleScene(this.pendingData.battle)),this.pendingData.menu&&this._setupMenuScene(this.pendingData.menu)),this.pendingData=null,this.currentState==="title"?this.cameraController.setMode("title"):this.currentState==="overworld"?this.cameraController.setMode("overworld"):this.currentState==="battle"?this.cameraController.setMode("battle"):this.currentState==="menu"&&this.cameraController.setMode("menu")}_setupOverworldScene(e){const t=this.scenes.overworld,n=[];t.children.forEach(l=>{l.userData.persistent||n.push(l)}),n.forEach(l=>t.remove(l));const i=new Zr(e.ambientColor||6715306,.8);i.userData.persistent=!0,t.add(i);const s=new Ol(11184895,6706500,.5);s.position.set(0,20,0),s.userData.persistent=!0,t.add(s);const a=new ts(e.lightColor||16774365,1.3);a.position.set(-5,10,-3),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.camera.left=-40,a.shadow.camera.right=40,a.shadow.camera.top=40,a.shadow.camera.bottom=-40,a.userData.persistent=!0,t.add(a),t.fog=new wi(e.fogColor||8956620,e.fogDensity||.02);const o=this.assetManager.createGround(e);if(t.add(o),e.decorations){const l=e.decorations,c=l.trees||0,d=l.rocks||0,u=l.structures||0;for(let h=0;h<c;h++){const p=this.assetManager.createTree(e.id),_=h/c*Math.PI*2+Math.random()*.5,g=(e.size||80)*.35+Math.random()*10;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,t.add(p)}for(let h=0;h<d;h++){const p=this.assetManager.createRock(.5+Math.random()*1),_=Math.random()*Math.PI*2,g=Math.random()*(e.size||80)*.4;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,t.add(p)}if(e.isHub){const h=["shop","inn","house","house","golden_arches"];h.forEach((_,g)=>{const m=this.assetManager.createStructure(_),f=g/h.length*Math.PI*2,x=12;m.position.x=Math.cos(f)*x,m.position.z=Math.sin(f)*x,m.lookAt(0,m.position.y,0),t.add(m)});const p=this.assetManager.createSavePoint();p.position.set(0,0,-10),t.add(p)}else for(let h=0;h<u;h++){const p=e.decorations.cactus?["cactus","cactus","house"]:["house","golden_arches","castle_wall"],_=p[h%p.length],g=this.assetManager.createStructure(_),m=Math.random()*Math.PI*2,f=(e.size||80)*.3+Math.random()*10;g.position.x=Math.cos(m)*f,g.position.z=Math.sin(m)*f,t.add(g)}if(e.decorations.castle){for(let h=0;h<4;h++){const p=this.assetManager.createStructure("castle_wall"),_=h/4*Math.PI*2,g=(e.size||80)*.35;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,p.lookAt(0,p.position.y,0),t.add(p)}for(let h=0;h<2;h++){const p=this.assetManager.createStructure("castle_tower");p.position.set(h===0?-20:20,0,-30),t.add(p)}}if(e.decorations.labyrinth)for(let h=0;h<15;h++){const p=this.assetManager.createStructure("tube"),_=Math.random()*Math.PI*2,g=Math.random()*(e.size||80)*.3;p.position.x=Math.cos(_)*g,p.position.y=1+Math.random()*2,p.position.z=Math.sin(_)*g,p.rotation.y=Math.random()*Math.PI,t.add(p)}}e.npcs&&e.npcs.forEach(l=>{const c=this.assetManager.createNPCMesh(l.name);c.position.set(l.x,0,l.z),c.userData.npcData=l,t.add(c)}),e.treasures&&e.treasures.forEach(l=>{const c=this.assetManager.createTreasureChest();c.position.set(l.x,0,l.z),c.userData.treasureData=l,t.add(c)}),this.cameraController.setRegion(e)}_setupBattleScene(e){var d,u,h;const t=this.scenes.battle;for(;t.children.length>0;)t.remove(t.children[0]);const n=new Zr(6715306,.7);t.add(n);const i=new ts(16774365,1.5);i.position.set(-5,10,-3),i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,t.add(i);const s=this.assetManager.shaderManager.createToonMaterial(((d=this.currentRegion)==null?void 0:d.groundColor)||4864554),a=new Le(new Jt(8,8,.5,32),s);a.position.y=-.25,a.receiveShadow=!0,t.add(a),t.fog=new wi(((u=this.currentRegion)==null?void 0:u.fogColor)||8956620,.03);const o=this.assetManager.shaderManager.createToonMaterial(((h=this.currentRegion)==null?void 0:h.color)||4881466),l=new Le(new Ga(8,15,32),o);l.rotation.x=-Math.PI/2,l.position.y=-.24,t.add(l);const c=[];e.party&&e.party.forEach((p,_)=>{if(p.mesh){const g=-3-_*1.5,m=2-_*.5;p.mesh.position.set(g,0,m),p.mesh.lookAt(0,p.mesh.position.y,0),t.add(p.mesh),c.push(new R(g,1,m))}}),e.enemies&&e.enemies.forEach((p,_)=>{if(p.mesh){const g=3+_*1.5,m=2-_*.5;p.mesh.position.set(g,0,m),p.mesh.lookAt(0,p.mesh.position.y,0),t.add(p.mesh),c.push(new R(g,1,m))}}),this.cameraController.setBattleCombatants(c)}_setupMenuScene(e){const t=this.scenes.menu;for(;t.children.length>0;)t.remove(t.children[0]);const n=new Le(new Qn(100,100),new nn({color:1710638}));n.position.z=-10,t.add(n),t.fog=new wi(1710638,.05)}getScene(){return this.transitioning?this.scenes[this.transitionFromState]||this.scenes[this.currentState]:this.scenes[this.currentState]}getCamera(){return this.cameraController.camera}update(e){if(this.transitioning){this.transitionT+=e/this.transitionDuration;const t=ni(this.transitionT,0,1);t<.5?this.overlayMaterial.opacity=Aa(0,1,t*2):(this.overlayMaterial.opacity=Aa(1,0,(t-.5)*2),t>=.5&&this.currentState!==this.transitionToState&&this._completeTransition()),t>=1&&(this.transitioning=!1,this.overlayMaterial.opacity=0)}}render(){this.renderer.render(this.getScene(),this.getCamera()),this.overlayMaterial.opacity>0&&(this.renderer.autoClear=!1,this.renderer.render(this.overlayScene,this.overlayCamera),this.renderer.autoClear=!0)}}const Yl={confirm:["Enter","Space"],cancel:["Escape"],menu:["Escape"],sprint:["ShiftLeft","ShiftRight"],camera_left:["KeyQ"],camera_right:["KeyE"],party_1:["Digit1"],party_2:["Digit2"],party_3:["Digit3"],party_4:["Digit4"]},H_={confirm:0,cancel:1,menu:9,camera_left:4,camera_right:5},Kl=new Set(["KeyW","ArrowUp"]),Ql=new Set(["KeyS","ArrowDown"]),Zl=new Set(["KeyA","ArrowLeft"]),Jl=new Set(["KeyD","ArrowRight"]),sa=.15;function ec(r){return Math.abs(r)<sa?0:Math.sign(r)*(Math.abs(r)-sa)/(1-sa)}class G_{constructor(){this._pressed=new Set,this._justPressed=new Set,this._justReleased=new Set,this._rawKeyDown=new Set,this._gpButtonWasDown=new Array(16).fill(!1),this._onKeyDown=e=>{this._isGameKey(e.code)&&e.preventDefault(),this._rawKeyDown.has(e.code)||this._rawKeyDown.add(e.code)},this._onKeyUp=e=>{this._rawKeyDown.delete(e.code),this._pressed.has(e.code)&&this._justReleased.add(e.code)},this._onBlur=()=>{for(const e of this._rawKeyDown)this._pressed.has(e)&&this._justReleased.add(e);this._rawKeyDown.clear()},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur)}update(){this._justPressed.clear(),this._justReleased.clear();for(const e of this._rawKeyDown)this._pressed.has(e)||(this._pressed.add(e),this._justPressed.add(e));for(const e of this._pressed)this._rawKeyDown.has(e)||this._justReleased.add(e);for(const e of this._justReleased)this._pressed.delete(e);this._pollGamepad()}isPressed(e){return this._pressed.has(e)}wasJustPressed(e){return this._justPressed.has(e)}wasJustReleased(e){return this._justReleased.has(e)}getAction(e){if(e==="sprint"){const i=Yl[e];if(i){for(const a of i)if(this.isPressed(a))return!0}const s=this._getActiveGamepad();return!!(s&&(s.buttons[10]&&s.buttons[10].pressed||s.buttons[7]&&s.buttons[7].value>.5))}const t=Yl[e];if(t){for(const i of t)if(this.wasJustPressed(i))return!0}const n=H_[e];if(n!==void 0){const i=this._getActiveGamepad();if(i&&i.buttons[n]&&this._gpJustPressed&&this._gpJustPressed.has(n))return!0}return!1}getMovementVector(){let e=0,t=0;this._anyPressed(Kl)&&(t-=1),this._anyPressed(Ql)&&(t+=1),this._anyPressed(Zl)&&(e-=1),this._anyPressed(Jl)&&(e+=1);const n=this._getActiveGamepad();if(n){const s=n.axes[0]||0,a=n.axes[1]||0,o=ec(s),l=ec(a);e+=o,t+=l}const i=Math.hypot(e,t);return i>1&&(e/=i,t/=i),{x:e,z:t}}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),this._pressed.clear(),this._justPressed.clear(),this._justReleased.clear(),this._rawKeyDown.clear(),this._gpButtonWasDown.fill(!1)}_anyPressed(e){for(const t of e)if(this._pressed.has(t))return!0;return!1}_isGameKey(e){return Kl.has(e)||Ql.has(e)||Zl.has(e)||Jl.has(e)||e==="Enter"||e==="Space"||e==="Escape"||e==="KeyQ"||e==="KeyE"||e==="Digit1"||e==="Digit2"||e==="Digit3"||e==="Digit4"||e==="ShiftLeft"||e==="ShiftRight"}_getActiveGamepad(){if(!navigator.getGamepads)return null;const e=navigator.getGamepads();if(!e)return null;for(let t=0;t<e.length;t++)if(e[t]&&e[t].connected)return e[t];return null}_pollGamepad(){this._gpJustPressed=new Set;const e=this._getActiveGamepad();if(!e){this._gpButtonWasDown.fill(!1);return}for(let t=0;t<e.buttons.length;t++){const n=e.buttons[t]?e.buttons[t].pressed:!1,i=this._gpButtonWasDown[t];n&&!i&&this._gpJustPressed.add(t),this._gpButtonWasDown[t]=n}}}class V_{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.masterVolume=1,this.musicVolume=.5,this.sfxVolume=.7,this.currentMusic=null,this.musicSchedulerId=null,this.regionConfig={fry_valley:{tempo:400,wave:"triangle",scale:"majorPentatonic",root:261.63},burger_highlands:{tempo:360,wave:"square",scale:"minorPentatonic",root:293.66},mcflurry_tundra:{tempo:500,wave:"sine",scale:"majorPentatonic",root:220},happy_meal_forest:{tempo:380,wave:"triangle",scale:"majorPentatonic",root:246.94},drive_thru_desert:{tempo:340,wave:"sawtooth",scale:"minorPentatonic",root:311.13},mccafe_springs:{tempo:450,wave:"sine",scale:"majorPentatonic",root:277.18},play_place_plains:{tempo:320,wave:"square",scale:"majorPentatonic",root:329.63},golden_arches_castle:{tempo:280,wave:"sawtooth",scale:"minorPentatonic",root:196}},this.typeConfig={overworld:{tempoMul:1,waveOverride:null},battle:{tempoMul:.55,waveOverride:"sawtooth"},town:{tempoMul:1.3,waveOverride:"sine"},dungeon:{tempoMul:.75,waveOverride:"square"}},this.scales={majorPentatonic:[0,2,4,7,9,12,14,16,19,21],minorPentatonic:[0,3,5,7,10,12,15,17,19,22]}}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;if(!e){console.warn("[AudioSystem] Web Audio API not supported");return}this.ctx=new e,this.masterGain=this.ctx.createGain(),this.musicGain=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.masterGain.gain.value=this.masterVolume,this.musicGain.gain.value=this.musicVolume,this.sfxGain.gain.value=this.sfxVolume}_ensureRunning(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.masterGain&&!this.muted&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSFXVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}mute(){this.muted=!0,this.masterGain&&(this.masterGain.gain.value=0)}unmute(){this.muted=!1,this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}playMusic(e,t){if(this._ensureRunning(),!this.ctx)return;this.stopMusic();const n=this.regionConfig[t]||this.regionConfig.fry_valley,i=this.typeConfig[e]||this.typeConfig.overworld,s=n.tempo*(i.tempoMul||1),a=i.waveOverride||n.wave,o=this.scales[n.scale]||this.scales.majorPentatonic,l=n.root;let c=0;const d=[l/2,l/2,l*1.5,l/2],u=()=>{if(!this.ctx||!this.currentMusic)return;const p=this.ctx.currentTime,_=o[c%o.length],g=l*Math.pow(2,_/12);let m=!0;if(e==="town"&&c%4===3&&(m=!1),e==="dungeon"&&c%5===4&&(m=!1),m&&this._playNote(g,a,p,s/1e3*.9,.15,this.musicGain),c%2===0){const f=d[c/2%d.length];this._playNote(f,"triangle",p,s/1e3*1.8,.12,this.musicGain)}e==="battle"&&c%2===0&&this._playPercussion(p,.1),c++};u();const h=setInterval(u,s);this.currentMusic={type:e,regionId:t,intervalId:h,stopFn:()=>{clearInterval(h)}}}stopMusic(){this.currentMusic&&(this.currentMusic.stopFn(),this.currentMusic=null)}playSFX(e){if(this._ensureRunning(),!this.ctx)return;const t=this.ctx.currentTime,n=this.sfxGain;switch(e){case"blip":this._playNote(880,"square",t,.05,.15,n);break;case"select":this._playNote(660,"square",t,.06,.15,n),this._playNote(990,"square",t+.06,.06,.15,n);break;case"confirm":this._playNote(523.25,"square",t,.05,.15,n),this._playNote(659.25,"square",t+.05,.05,.15,n),this._playNote(783.99,"square",t+.1,.08,.15,n);break;case"cancel":this._playNote(440,"square",t,.06,.15,n),this._playNote(330,"square",t+.06,.08,.15,n);break;case"cursor":this._playNote(1200,"square",t,.02,.08,n);break;case"fire":{const i=this._createNoiseBuffer(.3),s=this.ctx.createBufferSource();s.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(2e3,t),a.frequency.exponentialRampToValueAtTime(200,t+.3);const o=this.ctx.createGain();o.gain.setValueAtTime(.3,t),o.gain.exponentialRampToValueAtTime(.001,t+.3),s.connect(a),a.connect(o),o.connect(n),s.start(t),s.stop(t+.3);break}case"ice":{const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(2e3,t),i.frequency.exponentialRampToValueAtTime(600,t+.4);const s=this.ctx.createGain();s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),i.connect(s),s.connect(n),i.start(t),i.stop(t+.4);const a=this.ctx.createOscillator();a.type="triangle",a.frequency.setValueAtTime(3e3,t),a.frequency.exponentialRampToValueAtTime(1200,t+.3);const o=this.ctx.createGain();o.gain.setValueAtTime(.1,t),o.gain.exponentialRampToValueAtTime(.001,t+.3),a.connect(o),o.connect(n),a.start(t),a.stop(t+.3);break}case"heal":{[392,523.25,659.25].forEach((o,l)=>{this._playNote(o,"sine",t+l*.1,.25,.15,n)});const s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(1046.5,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.05,t),a.gain.exponentialRampToValueAtTime(.001,t+.5),s.connect(a),a.connect(n),s.start(t),s.stop(t+.5);break}case"hit":this._playPercussion(t,.15),this._playNote(150,"sawtooth",t,.08,.2,n);break;case"slash":{const i=this._createNoiseBuffer(.15),s=this.ctx.createBufferSource();s.buffer=i;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(800,t),a.frequency.exponentialRampToValueAtTime(3e3,t+.15);const o=this.ctx.createGain();o.gain.setValueAtTime(.25,t),o.gain.exponentialRampToValueAtTime(.001,t+.15),s.connect(a),a.connect(o),o.connect(n),s.start(t),s.stop(t+.15);break}case"levelup":{[523.25,659.25,783.99,1046.5,1318.51].forEach((s,a)=>{this._playNote(s,"square",t+a*.08,.12,.15,n)});break}case"save":{this._playNote(880,"sine",t,.15,.12,n),this._playNote(1108.73,"sine",t+.1,.2,.12,n);break}case"error":{const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(200,t),i.frequency.linearRampToValueAtTime(100,t+.2);const s=this.ctx.createGain();s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(n),i.start(t),i.stop(t+.2);break}default:console.warn(`[AudioSystem] Unknown SFX type: ${e}`)}}playVictory(){if(this._ensureRunning(),!this.ctx)return;const e=this.ctx.currentTime,t=this.sfxGain;[{f:523.25,t:0},{f:659.25,t:.12},{f:783.99,t:.24},{f:1046.5,t:.36},{f:659.25,t:.48},{f:783.99,t:.6},{f:1046.5,t:.72},{f:1318.51,t:.84}].forEach(({f:i,t:s})=>{this._playNote(i,"square",e+s,.18,.18,t)}),[523.25,659.25,783.99].forEach(i=>{this._playNote(i,"triangle",e+1,.6,.12,t)})}playDefeat(){if(this._ensureRunning(),!this.ctx)return;const e=this.ctx.currentTime,t=this.sfxGain;[{f:440,t:0,dur:.3},{f:392,t:.3,dur:.3},{f:349.23,t:.6,dur:.3},{f:293.66,t:.9,dur:.3},{f:261.63,t:1.2,dur:.5},{f:196,t:1.7,dur:.8}].forEach(({f:i,t:s,dur:a})=>{this._playNote(i,"sawtooth",e+s,a,.15,t)})}_playNote(e,t,n,i,s,a){if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=t,o.frequency.value=e;const c=.01,d=Math.min(.05,i*.3),u=n+c,h=s*.7,p=n+i-d;l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(s,u),l.gain.linearRampToValueAtTime(h,u+.03),l.gain.setValueAtTime(h,p),l.gain.exponentialRampToValueAtTime(.001,n+i),o.connect(l),l.connect(a||this.masterGain),o.start(n),o.stop(n+i+.05)}_playPercussion(e,t){if(!this.ctx)return;const n=this._createNoiseBuffer(.1),i=this.ctx.createBufferSource();i.buffer=n;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=200,s.Q.value=2;const a=this.ctx.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.1),i.connect(s),s.connect(a),a.connect(this.sfxGain),i.start(e),i.stop(e+.1)}_createNoiseBuffer(e){const t=this.ctx.sampleRate,n=this.ctx.createBuffer(1,Math.floor(t*e),t),i=n.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return n}}const W_="mcchronicles_save_",La="mcchronicles_autosave",ra=5,X_=1;function Qt(r){return r==="auto"?La:`${W_}${r}`}function aa(r){return r==="auto"?"Auto-Save":`Slot ${Number(r)+1}`}class q_{constructor(){}save(e,t){try{const n=Qt(e),i=Date.now(),s={version:X_,timestamp:i,name:aa(e),playtime:t.playtime||0,data:t},a=JSON.stringify(s);return localStorage.setItem(n,a),!0}catch(n){return console.error("[SaveSystem] Save failed:",n),!1}}load(e){try{const t=Qt(e),n=localStorage.getItem(t);if(!n)return null;const i=JSON.parse(n);return i.version!==void 0&&i.data!==void 0?i.data:i}catch(t){return console.error("[SaveSystem] Load failed:",t),null}}deleteSave(e){try{const t=Qt(e);return localStorage.removeItem(t),!0}catch(t){return console.error("[SaveSystem] Delete failed:",t),!1}}hasSave(e){const t=Qt(e);return localStorage.getItem(t)!==null}getSaveInfo(e){const t=Qt(e),n=localStorage.getItem(t),i={slot:e,exists:!1,name:aa(e),playtime:0,partyLevel:0,region:"",timestamp:0};if(!n)return i;try{const s=JSON.parse(n);if(s.version!==void 0&&s.data!==void 0){i.exists=!0,i.playtime=s.playtime||0,i.timestamp=s.timestamp||0,i.name=s.name||aa(e);const a=s.data;if(a.party&&Array.isArray(a.party)&&a.party.length>0){const o=a.party.reduce((l,c)=>l+(c.level||1),0);i.partyLevel=Math.floor(o/a.party.length)}return a.currentRegion&&(i.region=typeof a.currentRegion=="string"?a.currentRegion:a.currentRegion.name||a.currentRegion.id||""),i}if(i.exists=!0,i.playtime=s.playtime||0,i.timestamp=s.timestamp||0,s.party&&Array.isArray(s.party)&&s.party.length>0){const a=s.party.reduce((o,l)=>o+(l.level||1),0);i.partyLevel=Math.floor(a/s.party.length)}return s.currentRegion&&(i.region=typeof s.currentRegion=="string"?s.currentRegion:s.currentRegion.name||s.currentRegion.id||""),i}catch(s){return console.error("[SaveSystem] getSaveInfo parse error:",s),i}}listSaves(){const e=[];for(let t=0;t<ra;t++)e.push(this.getSaveInfo(t));return e}autoSave(e){return this.save("auto",e)}loadAutoSave(){return this.load("auto")}hasAutoSave(){return this.hasSave("auto")}deleteAutoSave(){return this.deleteSave("auto")}getSlotKey(e){return Qt(e)}getTotalSaveSize(){let e=0;for(let n=0;n<ra;n++){const i=localStorage.getItem(Qt(n));i&&(e+=i.length)}const t=localStorage.getItem(La);return t&&(e+=t.length),e}clearAllSaves(){try{for(let e=0;e<ra;e++)localStorage.removeItem(Qt(e));return localStorage.removeItem(La),!0}catch(e){return console.error("[SaveSystem] clearAllSaves failed:",e),!1}}exportSave(e){return localStorage.getItem(Qt(e))||null}importSave(e,t){try{return JSON.parse(t),localStorage.setItem(Qt(e),t),!0}catch(n){return console.error("[SaveSystem] importSave failed:",n),!1}}}const vi={game_start:{id:"game_start",dialogue:[{speaker:"Narrator",text:"In a world where burgers are life and fries are freedom..."},{speaker:"Narrator",text:"A darkness fell upon the McWorld."},{speaker:"Narrator",text:"The Hamburglar, once a petty thief, seized the Golden Arches..."},{speaker:"Narrator",text:"And stole every burger in the land."},{speaker:"Narrator",text:"Only a band of brave mascots could restore order."},{speaker:"Narrator",text:"This... is their story."}],after:"fry_valley_intro"},fry_valley_intro:{id:"fry_valley_intro",dialogue:[{speaker:"Ronald",text:"Ah, Fry Valley! Home sweet home."},{speaker:"Grimace",text:"It's so peaceful here. Or... it used to be."},{speaker:"Birdie",text:"Look! Nuggets! They seem... different."},{speaker:"Ronald",text:"Don't worry, friends. Whatever's happening, we'll figure it out."},{speaker:"Ronald",text:"Let's talk to the locals and see what's going on."}]},burger_highlands_intro:{id:"burger_highlands_intro",dialogue:[{speaker:"Grimace",text:"The mountains are so steep! My legs are tired."},{speaker:"Birdie",text:"I can fly over them! ...Oh wait, I can't actually fly in this game."},{speaker:"Ronald",text:"Stay focused. The Hamburglar's lieutenant is supposed to be here."},{speaker:"Ronald",text:"And I heard Officer Big Mac is patrolling these peaks!"}]},meet_officer_big_mac:{id:"meet_officer_big_mac",dialogue:[{speaker:"Officer Big Mac",text:"Halt! Who goes there?"},{speaker:"Ronald",text:"Officer! It's me, Ronald. We're here to stop the Hamburglar."},{speaker:"Officer Big Mac",text:"Ronald McDonald? By the golden arches, it's really you!"},{speaker:"Officer Big Mac",text:"I've been fighting these burger bandits for weeks."},{speaker:"Officer Big Mac",text:"The Hamburglar has lieutenants everywhere. They're organized!"},{speaker:"Ronald",text:"We could use your strength, Officer. Will you join us?"},{speaker:"Officer Big Mac",text:"It would be an honor! Justice must be served... with fries!"}],unlocks:["bigmac"]},mcflurry_tundra_intro:{id:"mcflurry_tundra_intro",dialogue:[{speaker:"Birdie",text:"Brrr! It's freezing! My feathers are icing up!"},{speaker:"Grimace",text:"I'm so cold I think I'm turning blue... er, bluer."},{speaker:"Ronald",text:"The McFlurry Elementals are powerful here. We need to be careful."},{speaker:"Officer Big Mac",text:"I sense dark magic. Someone is controlling the ice."}]},meet_mac_tonight:{id:"meet_mac_tonight",dialogue:[{speaker:"Mac Tonight",text:"♪ Underneath the moonlight... ♪ Oh, hello there!"},{speaker:"Ronald",text:"Mac Tonight! The famous moon bard! What are you doing out here?"},{speaker:"Mac Tonight",text:"I was performing at the ice palace, but the Hamburglar's goons crashed my gig."},{speaker:"Mac Tonight",text:'They said my music was "too cool." Can you imagine?'},{speaker:"Ronald",text:"We could really use your musical talents. Will you join us?"},{speaker:"Mac Tonight",text:"Anything for a chance to perform again. Let's jam!"}],unlocks:["mactonight"]},happy_meal_forest_intro:{id:"happy_meal_forest_intro",dialogue:[{speaker:"Birdie",text:"The Happy Meal Forest! I love it here. So many toys!"},{speaker:"Ronald",text:"Something's wrong. The trees look... darker than usual."},{speaker:"Grimace",text:"I hear something in the bushes. Is it... a dragon?"},{speaker:"Ronald",text:"Stay on guard. The Hamburglar's influence reaches everywhere."}]},drive_thru_desert_intro:{id:"drive_thru_desert_intro",dialogue:[{speaker:"Grimace",text:"So... much... sand. Can we get a McFlurry?"},{speaker:"Birdie",text:"Look! There's a Drive-Thru in the middle of nowhere!"},{speaker:"Ronald",text:"The Condiment King is supposed to be out here. Stay sharp."},{speaker:"Officer Big Mac",text:"I've been waiting for this. Let's serve justice — extra crispy!"}]},mccafe_springs_intro:{id:"mccafe_springs_intro",dialogue:[{speaker:"Ronald",text:"McCafe Springs! The hub of the McWorld."},{speaker:"Ronald",text:"We can rest, shop, and save our progress here."},{speaker:"Mac Tonight",text:"I could use a warm coffee after that tundra!"}]},play_place_plains_intro:{id:"play_place_plains_intro",dialogue:[{speaker:"Birdie",text:"The PlayPlace! I always wanted to explore one of these!"},{speaker:"Grimace",text:"It's... a lot bigger from the inside."},{speaker:"Ronald",text:"This labyrinth leads to the Golden Arches Castle. We're close!"},{speaker:"Officer Big Mac",text:"The final stretch. Everyone, stay sharp. We end this now."}]},golden_arches_castle_intro:{id:"golden_arches_castle_intro",dialogue:[{speaker:"Ronald",text:"The Golden Arches Castle. The Hamburglar's fortress."},{speaker:"Grimace",text:"He has so many stolen burgers in there..."},{speaker:"Birdie",text:"It's now or never!"},{speaker:"Officer Big Mac",text:"For justice! For burgers! For the McWorld!"},{speaker:"Mac Tonight",text:"Let's give them one final performance to remember."}]},final_boss:{id:"final_boss",dialogue:[{speaker:"Hamburglar",text:"Robble robble! You've made it this far, have you?"},{speaker:"Ronald",text:"Hamburglar! Return the burgers you've stolen!"},{speaker:"Hamburglar",text:"Why should I? I took them fair and square!"},{speaker:"Officer Big Mac",text:"Theft is not fair, criminal!"},{speaker:"Hamburglar",text:"You don't understand. I was always the villain."},{speaker:"Hamburglar",text:"Everyone loved Ronald, Grimace, and Birdie. But me?"},{speaker:"Hamburglar",text:"I was always the one who stole. The one who was chased."},{speaker:"Hamburglar",text:"So I decided... if they call me a thief, I'll be the BEST thief!"},{speaker:"Ronald",text:"It doesn't have to be this way. We can be friends."},{speaker:"Hamburglar",text:"...Robble. You always say that. But this time..."},{speaker:"Hamburglar",text:"This time I have my most powerful lieutenants!"},{speaker:"Hamburglar",text:"Defeat them all, and I'll fight you myself!"}]},victory:{id:"victory",dialogue:[{speaker:"Hamburglar",text:"You... you beat me. Fair and square."},{speaker:"Ronald",text:"It's over, Hamburglar. Let's go home."},{speaker:"Hamburglar",text:"...Can I have a Happy Meal?"},{speaker:"Ronald",text:"...Of course you can. You always could."},{speaker:"Narrator",text:"And so, the McDonald's heroes saved the McWorld."},{speaker:"Narrator",text:"The burgers were returned. The arches shone golden once more."},{speaker:"Narrator",text:"And the Hamburglar? He got his Happy Meal."},{speaker:"Narrator",text:"THE END."}]},nemesis_defeated:{id:"nemesis_defeated",dialogue:[{speaker:"Narrator",text:"A Hamburglar lieutenant has been defeated!"}]},nemesis_escaped:{id:"nemesis_escaped",dialogue:[{speaker:"Narrator",text:"The lieutenant escaped! They will return stronger..."}]},nemesis_promoted:{id:"nemesis_promoted",dialogue:[{speaker:"Narrator",text:"A lieutenant has been promoted! The hierarchy shifts."}]}},oa=[{id:"lost_child_quest",name:"The Lost Child",giver:"Lost Child",region:"happy_meal_forest",description:"A child got lost in the Happy Meal Forest. Help them reach McCafe Springs.",objective:"Escort the lost child to McCafe Springs",reward:{gold:100,items:["happy_meal_charm"]}},{id:"condiment_king_bounty",name:"Condiment King Bounty",giver:"Quest Giver",region:"mccafe_springs",description:"The Condiment King is terrorizing the Drive-Thru Desert. Defeat him!",objective:"Defeat The Condiment King in Drive-Thru Desert",reward:{gold:500,items:["big_mac_armor"]}},{id:"nugget_extermination",name:"Nugget Extermination",giver:"Old Fry Farmer",region:"fry_valley",description:"The McNugget Goblins are ruining the crops. Defeat 10 of them.",objective:"Defeat 10 McNugget Goblins in Fry Valley",reward:{gold:80,items:["mc_flurry_potion","mc_flurry_potion"]}},{id:"ice_palace_concert",name:"Ice Palace Concert",giver:"Frozen Fry Kid",region:"mcflurry_tundra",description:"Mac Tonight's concert was interrupted. Clear the ice palace of enemies.",objective:"Defeat 15 enemies in McFlurry Tundra",reward:{gold:200,items:["arch_deluxe"]}},{id:"tube_guardian_challenge",name:"The Tube Guardian's Challenge",giver:"Tube Guardian",region:"play_place_plains",description:"The Tube Guardian challenges you. Defeat 5 elite monsters in the labyrinth.",objective:"Defeat 5 elite monsters in PlayPlace Plains",reward:{gold:400,items:["golden_arch_charm"]}},{id:"familiar_collector",name:"Familiar Collector",giver:"Familiar Keeper",region:"mccafe_springs",description:"Collect 5 different Fry Kid familiars from across the McWorld.",objective:"Collect 5 unique familiars",reward:{gold:300,items:["golden_arch_charm"]}},{id:"highland_patrol",name:"Highland Patrol",giver:"Highland Guard",region:"burger_highlands",description:"Patrol the highlands and defeat 8 enemies to secure the mountain pass.",objective:"Defeat 8 enemies in Burger Highlands",reward:{gold:150,items:["arch_armor"]}},{id:"desert_explorer",name:"Desert Explorer",giver:"Sand Surfer",region:"drive_thru_desert",description:"Find all 3 treasure chests in the Drive-Thru Desert.",objective:"Find all treasures in Drive-Thru Desert",reward:{gold:250,items:["big_mc_flurry","big_mc_flurry"]}},{id:"master_chef",name:"The Master Chef",giver:"Shopkeeper",region:"mccafe_springs",description:"Bring the shopkeeper 5 cheese scraps and 3 patty fragments for a special recipe.",objective:"Collect 5 cheese scraps and 3 patty fragments",reward:{gold:200,items:["arch_deluxe","arch_deluxe"]}},{id:"toy_retrieval",name:"Toy Retrieval",giver:"Forest Toy Maker",region:"happy_meal_forest",description:"The Hamburglar stole 10 Happy Meal toys. Find them by defeating forest enemies.",objective:"Defeat 10 enemies in Happy Meal Forest",reward:{gold:180,items:["fry_kid_whistle"]}}];class tc{constructor(){this.activeQuests=[],this.completedQuests=[],this.availableQuests=[],this.storyProgress=[],this._initialized=!1}init(){this._initialized||(oa&&Array.isArray(oa)&&(this.availableQuests=oa.map(e=>({...e}))),this._initialized=!0)}acceptQuest(e){const t=this.availableQuests.find(n=>n.id===e);return t?(this.availableQuests=this.availableQuests.filter(n=>n.id!==e),this.activeQuests.push({questId:t.id,progress:0,objective:t.objective,name:t.name,region:t.region,giver:t.giver,description:t.description,reward:t.reward}),!0):!1}updateProgress(e,t){const n=this.activeQuests.find(i=>i.questId===e);return n?(n.progress=t,!0):!1}completeQuest(e){const t=this.activeQuests.find(n=>n.questId===e);return t?(this.activeQuests=this.activeQuests.filter(n=>n.questId!==e),this.completedQuests.push(e),t.reward||{gold:0,items:[]}):null}isQuestActive(e){return this.activeQuests.some(t=>t.questId===e)}isQuestCompleted(e){return this.completedQuests.includes(e)}getActiveQuests(){return this.activeQuests}getAvailableQuests(){return this.availableQuests}getCompletedQuests(){return this.completedQuests}seeStoryBeat(e){return this.storyProgress.includes(e)?!1:(this.storyProgress.push(e),!0)}hasSeenBeat(e){return this.storyProgress.includes(e)}toData(){return{activeQuests:this.activeQuests.map(e=>({...e})),completedQuests:[...this.completedQuests],availableQuests:this.availableQuests.map(e=>({...e})),storyProgress:[...this.storyProgress]}}fromData(e){e&&(this.activeQuests=(e.activeQuests||[]).map(t=>({...t})),this.completedQuests=[...e.completedQuests||[]],this.availableQuests=(e.availableQuests||[]).map(t=>({...t})),this.storyProgress=[...e.storyProgress||[]],this._initialized=!0)}}const nc=[1,5,10,15,20,25,30,40,50];class $_{constructor(){}addXP(e,t){const n=e.level;e.xp=(e.xp||0)+t;const i=Ca(e.xp),s=i-n,a=s>0;let o=[];if(a){for(let c=n+1;c<=i;c++)e.level=c,this.applyLevelUpStats(e);const l=e.id||e.key||e.name;for(let c=n+1;c<=i;c++){const d=this.getUnlockedAbilities(l,c);o.push(...d)}}return{leveledUp:a,newLevel:i,gainedLevels:Math.max(0,s),unlockedAbilities:o}}levelUp(e){return e.level=(e.level||1)+1,this.applyLevelUpStats(e),e}getXPToNext(e){const t=ls(e);return ls(e+1)-t}getUnlockedAbilities(e,t){if(!nc.includes(t))return[];const n=fs[e];if(!n||!n.abilityTree)return[];const i=[];for(const s of n.abilityTree)s.level===t&&i.push(s.ability);return i}getAllUnlockedAbilities(e,t){const n=fs[e];if(!n||!n.abilityTree)return[];const i=[];for(const s of n.abilityTree)s.level<=t&&nc.includes(s.level)&&i.push(s.ability);return i}applyLevelUpStats(e){const t=e.baseStats||{},n=e.growth||{},s=(e.level||1)-1,a=["hp","mp","atk","def","agi","mag"];e.stats||(e.stats={});for(const o of a){const l=t[o]||0,c=n[o]||0;e.stats["max"+o.charAt(0).toUpperCase()+o.slice(1)]=l+c*s;const d=o,u="max"+o.charAt(0).toUpperCase()+o.slice(1);(e.stats[d]===void 0||e.stats[d]>e.stats[u])&&(e.stats[d]=e.stats[u])}return e.stats.maxHp!==void 0&&(e.stats.hp===void 0||e.stats.hp>e.stats.maxHp)&&(e.stats.hp=e.stats.maxHp),e.stats.maxMp!==void 0&&(e.stats.mp===void 0||e.stats.mp>e.stats.maxMp)&&(e.stats.mp=e.stats.maxMp),e}initCharacterStats(e){return e.level=e.level||1,e.xp=e.xp||0,this.applyLevelUpStats(e),e}getLevelFromXP(e){return Ca(e)}getXPForLevel(e){return ls(e)}}class j_{constructor(){this.tweens=[]}add(e){return this.tweens.push(e),e}update(e){this.tweens=this.tweens.filter(t=>!t.update(e))}clear(){this.tweens=[]}}const ic={fry_valley:["burger_highlands","happy_meal_forest"],burger_highlands:["fry_valley","mcflurry_tundra"],mcflurry_tundra:["burger_highlands","mccafe_springs"],happy_meal_forest:["fry_valley","drive_thru_desert"],drive_thru_desert:["happy_meal_forest","mccafe_springs","play_place_plains"],mccafe_springs:["mcflurry_tundra","drive_thru_desert","play_place_plains"],play_place_plains:["drive_thru_desert","mccafe_springs","golden_arches_castle"],golden_arches_castle:["play_place_plains"]},la={fry_valley:{id:"fry_valley",name:"Fry Valley",subtitle:"The Golden Grasslands",description:"Rolling hills of golden fry grass where every adventurer begins their journey.",color:16766720,groundColor:15120384,fogColor:16772778,fogDensity:.015,ambientColor:16775388,lightColor:16777215,skyTop:8965375,skyBottom:16768392,encounterRate:.08,encounterZone:"fry_valley",recommendedLevel:[1,8],isHub:!1,isDungeon:!1,npcs:[{name:"Old Fry Farmer",x:20,z:15,dialogue:["Welcome to Fry Valley, young adventurer!","The golden grass here grows from the fries of old.","Beware the Nugget Goblins — they come in packs!","If you seek the Hamburglar, head north to the Burger Highlands."]},{name:"Ketchup Merchant",x:-15,z:-10,dialogue:["Ketchup for sale! Fresh and red!","A pinch of ketchup can heal the mightiest warrior.","You seem strong. Be careful out there!"]}],treasures:[{x:30,z:-20,item:"mc_flurry_potion"},{x:-25,z:25,item:"ketchup_packet"},{x:0,z:-35,item:"happy_meal_box"}],storyEvents:[{trigger:"enter",event:"fry_valley_intro"},{trigger:"location",x:0,z:-40,radius:5,event:"fry_valley_exit"}],bossNemesis:"fry_valley_boss",size:80,decorations:{trees:15,rocks:10,structures:2}},burger_highlands:{id:"burger_highlands",name:"Burger Highlands",subtitle:"The Stacked Peaks",description:"Mountainous terrain where the patties grow tall and the winds are fierce.",color:9127187,groundColor:7029795,fogColor:11184827,fogDensity:.02,ambientColor:14535867,lightColor:16772829,skyTop:6719658,skyBottom:14531481,encounterRate:.1,encounterZone:"burger_highlands",recommendedLevel:[8,15],isHub:!1,isDungeon:!1,npcs:[{name:"Highland Guard",x:15,z:20,dialogue:["The Highlands are dangerous. Are you prepared?","Officer Big Mac was seen patroling the eastern ridge.","Hamburglar's lieutenant has taken over the mountain pass!"]},{name:"Wandering Monk",x:-30,z:-15,dialogue:["I sense a great darkness in these mountains.","The Hamburglar has been stealing burgers across the land.","You must gather all the heroes. Only together can you stop him."]}],treasures:[{x:40,z:-30,item:"big_mc_flurry"},{x:-35,z:35,item:"arch_armor"},{x:20,z:-45,item:"happy_meal_charm"}],storyEvents:[{trigger:"enter",event:"burger_highlands_intro"},{trigger:"location",x:45,z:0,radius:5,event:"meet_officer_big_mac"}],bossNemesis:"burger_highlands_boss",size:100,decorations:{trees:8,rocks:25,structures:3}},mcflurry_tundra:{id:"mcflurry_tundra",name:"McFlurry Tundra",subtitle:"The Frozen Delight",description:"An icy wasteland where McFlurries swirl eternally and frost coats everything.",color:8965375,groundColor:11197951,fogColor:14544639,fogDensity:.025,ambientColor:14544639,lightColor:16777215,skyTop:4491468,skyBottom:14544639,encounterRate:.1,encounterZone:"mcflurry_tundra",recommendedLevel:[15,22],isHub:!1,isDungeon:!1,npcs:[{name:"Frozen Fry Kid",x:20,z:-20,dialogue:["S-so c-cold! The McFlurry Elementals are relentless!","Mac Tonight was seen performing at the ice palace.","If you can defeat the ice lieutenant, the tundra will thaw."]},{name:"Ice Fisherman",x:-20,z:25,dialogue:["I fish for Filet-O-Fish in the frozen lakes.","The Sirens here will freeze you solid if you're not careful.","Bring fire magic. It's your best friend here."]}],treasures:[{x:35,z:30,item:"arch_deluxe"},{x:-40,z:-30,item:"grimace_hide"},{x:0,z:50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"mcflurry_tundra_intro"},{trigger:"location",x:0,z:55,radius:5,event:"meet_mac_tonight"}],bossNemesis:"mcflurry_tundra_boss",size:100,decorations:{trees:5,rocks:20,structures:4,ice:!0}},happy_meal_forest:{id:"happy_meal_forest",name:"Happy Meal Forest",subtitle:"The Toy-Laden Woods",description:"A dense forest where Happy Meal toys hang from every tree and mystery lurks in shadows.",color:2263842,groundColor:3038510,fogColor:8956552,fogDensity:.03,ambientColor:10075033,lightColor:14548957,skyTop:4486980,skyBottom:10074999,encounterRate:.12,encounterZone:"happy_meal_forest",recommendedLevel:[10,18],isHub:!1,isDungeon:!1,npcs:[{name:"Forest Toy Maker",x:25,z:20,dialogue:["I craft toys for every Happy Meal!","But the Hamburglar has been stealing them all...","There's a dragon deep in the forest. It bakes apple pies!"]},{name:"Lost Child",x:-20,z:-25,dialogue:["I got separated from my parents at the PlayPlace...","Can you help me find my way to McCafe Springs?","The forest is scary at night!"]}],treasures:[{x:40,z:-35,item:"fry_wand"},{x:-35,z:40,item:"fry_kid_whistle"},{x:0,z:-50,item:"happy_meal_map"}],storyEvents:[{trigger:"enter",event:"happy_meal_forest_intro"}],bossNemesis:"happy_meal_forest_boss",size:90,decorations:{trees:40,rocks:5,structures:2,denseForest:!0}},drive_thru_desert:{id:"drive_thru_desert",name:"Drive-Thru Desert",subtitle:"The Endless Order",description:"A vast desert where the Drive-Thru never closes and the heat shimmers with mirages.",color:15123046,groundColor:13936721,fogColor:15783560,fogDensity:.012,ambientColor:16772795,lightColor:16777164,skyTop:13408597,skyBottom:16768392,encounterRate:.09,encounterZone:"drive_thru_desert",recommendedLevel:[20,28],isHub:!1,isDungeon:!1,npcs:[{name:"Desert Drive-Thru Worker",x:30,z:10,dialogue:["Welcome to the Drive-Thru! Can I take your order?","The Condiment King has been terrorizing the desert.","Bring water... or McFlurry potions. You'll need them."]},{name:"Sand Surfer",x:-25,z:-30,dialogue:["I surf the dunes on a tray!","The Hotcake Sentinels guard the ancient ruins.","Beyond this desert lies the PlayPlace Plains. Be careful."]}],treasures:[{x:45,z:-40,item:"big_mac_armor"},{x:-45,z:35,item:"mc_shake_maul"},{x:10,z:50,item:"badge_of_order"}],storyEvents:[{trigger:"enter",event:"drive_thru_desert_intro"}],bossNemesis:"drive_thru_desert_boss",size:110,decorations:{trees:3,rocks:30,structures:5,cactus:!0}},mccafe_springs:{id:"mccafe_springs",name:"McCafe Springs",subtitle:"The Hub Town",description:"A cozy town built around warm McCafe springs. Rest, shop, and save here.",color:9136404,groundColor:7034384,fogColor:13417352,fogDensity:.008,ambientColor:16772812,lightColor:16777198,skyTop:8956620,skyBottom:16768426,encounterRate:0,encounterZone:null,recommendedLevel:[1,99],isHub:!0,isDungeon:!1,npcs:[{name:"Innkeeper",x:10,z:5,dialogue:["Welcome to the McCafe Inn! Rest here to fully heal.","That'll be 50 gold. Would you like to rest?"]},{name:"Shopkeeper",x:-10,z:10,dialogue:["Welcome to the McCafe Shop!","We have potions, armor, and charms for sale.","Stock up before heading out!"]},{name:"Save Point Attendant",x:0,z:-10,dialogue:["Welcome! You can save your adventure here.","Your progress will be preserved in the golden arches."]},{name:"Quest Giver",x:20,z:-15,dialogue:["I have quests for adventurous heroes!","Help the townsfolk and earn rewards.","Check the quest board for available tasks."]},{name:"Familiar Keeper",x:-20,z:-20,dialogue:["I take care of the Fry Kids!","Would you like to see your familiar collection?"]}],treasures:[{x:30,z:30,item:"golden_fry_key"}],storyEvents:[{trigger:"enter",event:"mccafe_springs_intro"}],bossNemesis:null,size:60,decorations:{trees:5,rocks:3,structures:12,town:!0},hasShop:!0,hasInn:!0,hasSavePoint:!0},play_place_plains:{id:"play_place_plains",name:"PlayPlace Plains",subtitle:"The Labyrinth of Tubes",description:"A massive labyrinth of colorful tubes and ball pits. Only the worthy can navigate it.",color:16729343,groundColor:6697830,fogColor:11167402,fogDensity:.035,ambientColor:10053273,lightColor:16755455,skyTop:4465220,skyBottom:11167402,encounterRate:.15,encounterZone:"play_place_plains",recommendedLevel:[28,38],isHub:!1,isDungeon:!0,npcs:[{name:"Lost PlayPlace Kid",x:20,z:15,dialogue:["I've been lost in these tubes for hours!","The labyrinth shifts and changes. Be careful!","I heard there's a golden key somewhere in here..."]},{name:"Tube Guardian",x:-15,z:-20,dialogue:["I guard the tubes. Only the worthy may pass.","Defeat my challenge and I'll open the path.","The Golden Arches Castle lies beyond."]}],treasures:[{x:40,z:40,item:"sesame_sword"},{x:-40,z:-40,item:"moon_mic"},{x:50,z:-50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"play_place_plains_intro"}],bossNemesis:"play_place_plains_boss",size:120,decorations:{trees:0,rocks:0,structures:20,labyrinth:!0}},golden_arches_castle:{id:"golden_arches_castle",name:"Golden Arches Castle",subtitle:"The Final Dungeon",description:"The Hamburglar's fortress. Two golden arches pierce the sky. This is the end.",color:16766720,groundColor:3355443,fogColor:2232610,fogDensity:.04,ambientColor:4465220,lightColor:16768426,skyTop:1114129,skyBottom:4465186,encounterRate:.18,encounterZone:"golden_arches_castle",recommendedLevel:[38,50],isHub:!1,isDungeon:!0,npcs:[{name:"Hamburglar's Prisoner",x:20,z:30,dialogue:["You've made it! The Hamburglar is just ahead!","He has the stolen burgers... millions of them!","Please, save our world from his greasy grasp!"]}],treasures:[{x:30,z:-30,item:"arch_deluxe"},{x:-30,z:30,item:"big_mac_armor"},{x:0,z:-50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"golden_arches_castle_intro"},{trigger:"location",x:0,z:-60,radius:5,event:"final_boss"}],bossNemesis:"hamburglar_final",size:80,decorations:{trees:0,rocks:10,structures:15,castle:!0}}},Ji={mc_flurry_potion:{id:"mc_flurry_potion",name:"McFlurry Potion",type:"consumable",effect:"heal_hp",power:60,target:"ally",description:"A refreshing McFlurry that restores 60 HP.",price:50,stackable:!0},big_mc_flurry:{id:"big_mc_flurry",name:"Big McFlurry",type:"consumable",effect:"heal_hp",power:150,target:"ally",description:"A large McFlurry that restores 150 HP.",price:120,stackable:!0},mc_muffin:{id:"mc_muffin",name:"McMuffin",type:"consumable",effect:"heal_mp",power:30,target:"ally",description:"A warm McMuffin that restores 30 MP.",price:40,stackable:!0},happy_meal_box:{id:"happy_meal_box",name:"Happy Meal Box",type:"consumable",effect:"heal_both",power:80,target:"ally",description:"A full Happy Meal that restores 80 HP and 80 MP.",price:100,stackable:!0},egg_mcmuffin:{id:"egg_mcmuffin",name:"Egg McMuffin",type:"consumable",effect:"revive",power:.5,target:"ally",description:"Revives a fallen ally with 50% HP.",price:200,stackable:!0},arch_deluxe:{id:"arch_deluxe",name:"Arch Deluxe",type:"consumable",effect:"heal_both",power:200,target:"ally",description:"A gourmet burger that restores 200 HP and 200 MP.",price:300,stackable:!0},mc_rib_sauce:{id:"mc_rib_sauce",name:"McRib Sauce",type:"consumable",effect:"cure_status",power:0,target:"ally",description:"Cures all status ailments.",price:60,stackable:!0},sprite_bottle:{id:"sprite_bottle",name:"Sprite Bottle",type:"consumable",effect:"buff_agi",power:0,target:"ally",status:["agi_up"],description:"Boosts an ally's agility.",price:80,stackable:!0},arch_armor:{id:"arch_armor",name:"Arch Armor",type:"equipment",slot:"armor",statBoost:{def:15,hp:30},description:"Golden arches armor. Boosts DEF and HP.",price:500},big_mac_armor:{id:"big_mac_armor",name:"Big Mac Armor",type:"equipment",slot:"armor",statBoost:{def:25,hp:50,atk:10},description:"A legendary patty-stacked armor.",price:1500},fry_suit:{id:"fry_suit",name:"Fry Suit",type:"equipment",slot:"armor",statBoost:{def:10,agi:8,mag:10},description:"A suit made of golden fries.",price:800},grimace_hide:{id:"grimace_hide",name:"Grimace Hide",type:"equipment",slot:"armor",statBoost:{def:30,hp:60},description:"Thick purple hide that absorbs damage.",price:1200},fry_wand:{id:"fry_wand",name:"Fry Wand",type:"equipment",slot:"weapon",statBoost:{mag:15,mp:20},description:"A wand tipped with a golden fry.",price:600},mc_shake_maul:{id:"mc_shake_maul",name:"McShake Maul",type:"equipment",slot:"weapon",statBoost:{atk:20,def:5},description:"A heavy maul made of a milkshake cup.",price:700},feather_darts_weapon:{id:"feather_darts_weapon",name:"Feather Darts",type:"equipment",slot:"weapon",statBoost:{atk:12,agi:15},description:"A set of razor-sharp feather darts.",price:650},sesame_sword:{id:"sesame_sword",name:"Sesame Sword",type:"equipment",slot:"weapon",statBoost:{atk:25,def:10,mag:8},description:"A holy sword topped with sesame seeds.",price:1e3},moon_mic:{id:"moon_mic",name:"Moon Mic",type:"equipment",slot:"weapon",statBoost:{mag:18,mp:25},description:"A microphone that channels lunar energy.",price:800},happy_meal_charm:{id:"happy_meal_charm",name:"Happy Meal Charm",type:"accessory",slot:"accessory",statBoost:{hp:20,mp:20,luck:5},description:"A charm from a Happy Meal toy.",price:400},golden_arch_charm:{id:"golden_arch_charm",name:"Golden Arch Charm",type:"accessory",slot:"accessory",statBoost:{hp:50,mp:50,atk:10,def:10},description:"A legendary charm bearing the golden arches.",price:2e3},ketchup_packet:{id:"ketchup_packet",name:"Ketchup Packet",type:"accessory",slot:"accessory",statBoost:{atk:5},description:"A small packet of ketchup. Slightly boosts ATK.",price:50},badge_of_order:{id:"badge_of_order",name:"Badge of Order",type:"accessory",slot:"accessory",statBoost:{def:15,mag:10},description:"An officer's badge that radiates authority.",price:600},sunglasses:{id:"sunglasses",name:"Cool Sunglasses",type:"accessory",slot:"accessory",statBoost:{agi:10,mag:8},description:"Shady sunglasses that boost AGI.",price:350},patty_fragment:{id:"patty_fragment",name:"Patty Fragment",type:"craft",description:"A fragment of a burger patty. Crafting material.",price:10,stackable:!0},cheese_scrap:{id:"cheese_scrap",name:"Cheese Scrap",type:"craft",description:"A scrap of melted cheese. Crafting material.",price:8,stackable:!0},hash_brown_shard:{id:"hash_brown_shard",name:"Hash Brown Shard",type:"craft",description:"A crispy shard of hash brown. Crafting material.",price:5,stackable:!0},fish_scale:{id:"fish_scale",name:"Fish Scale",type:"craft",description:"A shimmering fish scale. Crafting material.",price:15,stackable:!0},egg_fragment:{id:"egg_fragment",name:"Egg Fragment",type:"craft",description:"A fragment of a McMuffin egg. Crafting material.",price:12,stackable:!0},onion_ring:{id:"onion_ring",name:"Onion Ring",type:"craft",description:"A perfectly circular onion ring. Crafting material.",price:10,stackable:!0},feather:{id:"feather",name:"Feather",type:"craft",description:"A colorful feather. Crafting material.",price:8,stackable:!0},rib_bone:{id:"rib_bone",name:"Rib Bone",type:"craft",description:"A McRib bone. Crafting material.",price:20,stackable:!0},syrup_bottle:{id:"syrup_bottle",name:"Syrup Bottle",type:"craft",description:"A bottle of hotcake syrup. Crafting material.",price:15,stackable:!0},cookie_chunk:{id:"cookie_chunk",name:"Cookie Chunk",type:"craft",description:"A chunk of cookie. Crafting material.",price:10,stackable:!0},apple_pie_scale:{id:"apple_pie_scale",name:"Apple Pie Scale",type:"craft",description:"A crispy scale from an Apple Pie Dragon. Crafting material.",price:25,stackable:!0},mcflurry_shard:{id:"mcflurry_shard",name:"McFlurry Shard",type:"craft",description:"A shard of McFlurry ice. Crafting material.",price:20,stackable:!0},bacon_strip:{id:"bacon_strip",name:"Bacon Strip",type:"craft",description:"A crispy bacon strip. Crafting material.",price:15,stackable:!0},coffee_ground:{id:"coffee_ground",name:"Coffee Ground",type:"craft",description:"Used coffee grounds. Crafting material.",price:8,stackable:!0},ranch_drip:{id:"ranch_drip",name:"Ranch Drip",type:"craft",description:"A drip of ranch dressing. Crafting material.",price:12,stackable:!0},tea_leaf:{id:"tea_leaf",name:"Tea Leaf",type:"craft",description:"A sweet tea leaf. Crafting material.",price:10,stackable:!0},sprite_bottle_craft:{id:"sprite_bottle_craft",name:"Sprite Bottle (Craft)",type:"craft",description:"An empty Sprite bottle. Crafting material.",price:18,stackable:!0},coke_can:{id:"coke_can",name:"Coke Can",type:"craft",description:"A crushed Coke can. Crafting material.",price:20,stackable:!0},melted_cheese:{id:"melted_cheese",name:"Melted Cheese",type:"craft",description:"A glob of melted cheese. Crafting material.",price:15,stackable:!0},nugget_crown:{id:"nugget_crown",name:"Nugget Crown",type:"craft",description:"A crown from a McNugget King. Rare crafting material.",price:50,stackable:!0},condiment_crown:{id:"condiment_crown",name:"Condiment Crown",type:"craft",description:"The crown of the Condiment King. Legendary crafting material.",price:200,stackable:!0},big_mac_crown:{id:"big_mac_crown",name:"Big Mac Crown",type:"craft",description:"A crown from a Big Mac Brute. Rare crafting material.",price:60,stackable:!0},deluxe_patty:{id:"deluxe_patty",name:"Deluxe Patty",type:"craft",description:"A premium patty from a Deluxe Quarter Pounder.",price:45,stackable:!0},tortilla_scrap:{id:"tortilla_scrap",name:"Tortilla Scrap",type:"craft",description:"A scrap of tortilla. Crafting material.",price:5,stackable:!0},mustard_jar:{id:"mustard_jar",name:"Mustard Jar",type:"craft",description:"A jar of mustard. Crafting material.",price:18,stackable:!0},sundae_drip:{id:"sundae_drip",name:"Sundae Drip",type:"craft",description:"A drip of sundae. Crafting material.",price:10,stackable:!0},parfait_glass:{id:"parfait_glass",name:"Parfait Glass",type:"craft",description:"A shard of parfait glass. Crafting material.",price:14,stackable:!0},english_muffin:{id:"english_muffin",name:"English Muffin",type:"craft",description:"An English muffin. Crafting material.",price:12,stackable:!0},golden_fry_key:{id:"golden_fry_key",name:"Golden Fry Key",type:"key_item",description:"A key shaped like a golden fry. Opens the Golden Arches Castle.",price:0},hamburglar_mask:{id:"hamburglar_mask",name:"Hamburglar's Mask",type:"key_item",description:"The mask of the Hamburglar. A key story item.",price:0},happy_meal_map:{id:"happy_meal_map",name:"Happy Meal Map",type:"key_item",description:"A map of the McWorld. Shows all discovered regions.",price:0},fry_kid_whistle:{id:"fry_kid_whistle",name:"Fry Kid Whistle",type:"key_item",description:"A whistle that calls Fry Kids. Used to collect familiars.",price:0}},ca=["Thief","Bandit","Rogue","Lieutenant","Captain","Lord"],Y_=[1,1.3,1.6,2,2.5,3],xd=["fire","ice","water","earth","holy","dark"],Ks=["Aggressive","Cunning","Cowardly","Honorable","Vengeful"],K_=[2,2,3,3,4,4],bi={hp:80,mp:30,atk:12,def:10,agi:8,mag:10},sc={fire:["Grease Fireball","Flaming Fry Burst","Sizzling Patty Slam","Inferno Grill"],ice:["Frosty Shake Blizzard","Frozen McFlurry","Ice Cube Barrage","Arctic Condiment Storm"],water:["Soda Tidal Wave","Cola Flood","Ice Drench","Splash of Syrup"],earth:["Burger Boulder","Sesame Seed Quake","Hash Brown Wall","Terra Patty Crush"],holy:["Blessing of the Arches","Radiant McNugget","Golden Fry Beam","Halo of Ketchup"],dark:["Shadow Robbery","Midnight Burger Curse","Dark Drive-Thru","Eclipse of Fries"]},rc={fire:["Grease Armor","Spice Rush","Ember Guard"],ice:["Frosty Shield","Chill Aura","Frozen Sanctuary"],water:["Soda Refresh","Cola Cleansing","Hydration Ward"],earth:["Sesame Barrier","Hash Brown Bastion","Stone Bun Guard"],holy:["Golden Blessing","Arch Light"," McNugget Mercy"],dark:["Shadow Cloak","Dark Deal","Veil of Robbery"]},ac={Aggressive:["Intimidating ROBBLE","Frightening Grease","Berserker Howl"],Cunning:["Sneak Sabotage","Clever Trip","Underhanded Tactic"],Cowardly:["Panic Scramble","Desperate Dodge","Frightened Flee"],Honorable:["Challenge Strike","Fair Warning","Warrior Focus"],Vengeful:["Grudge Mark","Revenge Plot","Bitter Memory"]},$t={eyeColor:["Red","Yellow","Greasy Black","Mustard Gold","Ketchup Red","Pale Blue","Fry Brown"],scar:["None","Burn Mark","Grease Stain","Ketchup Splash","Missing Bun","Crack on Patty"],weapon:["Stolen Fry","Grease Gun","Ketchup Knife","Bun Boomerang","Patty Mace","Sesame Shiv","Condiment Crossbow"],bodyType:["Stout","Lanky","Round","Muscular","Wiry","Pudgy"],height:["Short","Average","Tall","Tiny","Imposing"]},oc={Aggressive:"All-out attack, ignores defense",Cunning:"Targets weakest party member, uses debuffs",Cowardly:"Defensive, uses buffs then flees if hurt",Honorable:"Balanced attack and defense, fights fair",Vengeful:"Focuses on characters with grudges, relentless"},lc={Aggressive:"I'll crush you next time! ROBBLE ROBBLE!",Cunning:"You got lucky... but I've learned your weaknesses.",Cowardly:"Y-you won't catch me off guard again! I'll be ready!",Honorable:"A worthy victory. But I shall grow stronger from this defeat.",Vengeful:"You'll pay for this humiliation! I swear it on the Golden Arches!"},cc={Aggressive:"I'm tired of losing for the Hamburglar. I'm done!",Cunning:"The Hamburglar's organization is falling apart. I'm saving myself.",Cowardly:"P-please don't hurt me! I'll leave the Hamburglar! Just let me go!",Honorable:"I cannot serve a master who shames his own followers. I resign.",Vengeful:"The Hamburglar betrayed us all! I'll have my revenge — but not for him!"};class pr{constructor(e={}){this.id=e.id||P_(),this.name=e.name||yd(Date.now()+Math.random()*1e4),this.rankIndex=e.rankIndex??0,this.rank=ca[this.rankIndex],this.level=e.level??1,this.xp=e.xp??0,this.bodyElement=e.bodyElement||xd[0],this.strengths=e.strengths||[],this.weaknesses=e.weaknesses||[],this.personality=e.personality||Ks[0],this.grudges=new Map,this.rivals=[],this.traits=e.traits||this._rollDefaultTraits(),this.isAlive=!0,this.isShamed=!1,this.defected=!1,this.commanderId=null,this.subordinates=[],this.assignedRegion=null,this.backstory=null,this.immunities=[],this.resistances=[],this._categorizeStrengths(),this.combatStyle=this.getCombatStyle(),this.stats={},this.abilities=[],this.generateStats(),this.generateAbilities()}_rollDefaultTraits(){const e=Math.random;return{eyeColor:$t.eyeColor[Math.floor(e()*$t.eyeColor.length)],scar:$t.scar[Math.floor(e()*$t.scar.length)],weapon:$t.weapon[Math.floor(e()*$t.weapon.length)],bodyType:$t.bodyType[Math.floor(e()*$t.bodyType.length)],height:$t.height[Math.floor(e()*$t.height.length)]}}_categorizeStrengths(){this.immunities=[],this.resistances=[];for(const e of this.strengths)Math.random()<.4?this.immunities.push(e):this.resistances.push(e)}generateStats(){const e=Y_[this.rankIndex],t=this.level;this.stats.maxHp=Math.floor(bi.hp*e+15*e*(t-1)),this.stats.maxMp=Math.floor(bi.mp*e+8*e*(t-1)),this.stats.atk=Math.floor(bi.atk*e+3*e*(t-1)),this.stats.def=Math.floor(bi.def*e+3*e*(t-1)),this.stats.agi=Math.floor(bi.agi*e+2*e*(t-1)),this.stats.mag=Math.floor(bi.mag*e+2*e*(t-1)),this.stats.hp=this.stats.maxHp,this.stats.mp=this.stats.maxMp}generateAbilities(){this.abilities=[];const e=K_[this.rankIndex],t=sc[this.bodyElement]||sc.fire,n=rc[this.bodyElement]||rc.fire,i=ac[this.personality]||ac.Aggressive,s=new Set,a=t[0];s.add(a),this.abilities.push({id:`${this.id}_atk1`,name:a,type:"attack",element:this.bodyElement,power:1+this.rankIndex*.15,mpCost:4+this.rankIndex*2,description:`A ${this.bodyElement}-elemental attack dealing significant damage.`});const o=n[0];s.add(o),this.abilities.push({id:`${this.id}_sup1`,name:o,type:this.personality==="Cowardly"?"buff":"heal",element:this.bodyElement,power:.8+this.rankIndex*.1,mpCost:6+this.rankIndex*2,description:`Restores HP or grants a protective ${this.bodyElement} effect.`});let l=1,c=1,d=0;for(;this.abilities.length<e;){if(e-this.abilities.length===1){const g=i[d%i.length];s.has(g)||(s.add(g),this.abilities.push({id:`${this.id}_debuff${d+1}`,name:g,type:"debuff",element:"physical",power:.5+this.rankIndex*.1,mpCost:5+this.rankIndex*2,description:`Inflicts a debilitating effect driven by ${this.personality.toLowerCase()} tactics.`}));break}const h=t[l%t.length];if(s.has(h)||(s.add(h),this.abilities.push({id:`${this.id}_atk${l+1}`,name:h,type:"aoe",element:this.bodyElement,power:.7+this.rankIndex*.12,mpCost:8+this.rankIndex*3,description:`A devastating ${this.bodyElement} area attack.`})),l++,this.abilities.length>=e)break;const p=i[d%i.length];if(s.has(p)||(s.add(p),this.abilities.push({id:`${this.id}_debuff${d+1}`,name:p,type:"debuff",element:"physical",power:.5+this.rankIndex*.1,mpCost:5+this.rankIndex*2,description:`Lowers enemy stats through ${this.personality.toLowerCase()} cunning.`})),d++,this.abilities.length>=e)break;const _=n[c%n.length];s.has(_)||(s.add(_),this.abilities.push({id:`${this.id}_sup${c+1}`,name:_,type:"buff",element:this.bodyElement,power:.6+this.rankIndex*.1,mpCost:7+this.rankIndex*2,description:`Empowers the user with ${this.bodyElement} energy.`})),c++}}addGrudge(e,t){const n=this.grudges.get(e);n?(n.timesBeaten++,n.howTheyBeatMe=t):this.grudges.set(e,{howTheyBeatMe:t,timesBeaten:1})}gainXP(e){const t=this.level;this.xp+=e;const n=Ca(this.xp);this.level=n.level;let i=!1;this.level>t&&this.generateStats();const s=[10,18,25,32,40];for(const a of s)t<a&&this.level>=a&&this.rankIndex<5&&(this.promote(),i=!0);return{leveledUp:this.level>t,newLevel:this.level,rankedUp:i}}promote(){return this.rankIndex>=5?!1:(this.rankIndex++,this.rank=ca[this.rankIndex],this.generateStats(),this.generateAbilities(),!0)}demote(){return this.rankIndex<=0?!1:(this.rankIndex--,this.rank=ca[this.rankIndex],this.generateStats(),this.generateAbilities(),!0)}shame(){return this.isShamed=!0,this.backstory=this.getBackstory(),this.demote(),this.backstory}getResistance(e){return this.immunities.includes(e)?0:this.resistances.includes(e)?.5:this.weaknesses.includes(e)?2:1}getCombatStyle(){return oc[this.personality]||oc.Aggressive}getTaunt(){return lc[this.personality]||lc.Aggressive}getDefectionMessage(){return cc[this.personality]||cc.Aggressive}getBackstory(){const e=this.rank,t=this.bodyElement,n=`${this.traits.bodyType.toLowerCase()}, ${this.traits.height.toLowerCase()} figure with ${this.traits.eyeColor.toLowerCase()} eyes`,i=this.traits.weapon,s=this.traits.scar!=="None"?` bears a ${this.traits.scar.toLowerCase()}`:"",a=[`Once a humble ${e} of the Hamburglar's crew, this ${n}${s} rose through the ranks wielding a ${i}. Their ${this.personality.toLowerCase()} nature and mastery of ${t} made them a feared enforcer of the Happy Meal underground.`,`Born in the grease pits of Fry Valley, this ${n} operative${s} found their calling under the Hamburglar's banner. Wielding a ${i} with ${this.personality.toLowerCase()} precision, they channel ${t} energy to steal every last McNugget.`,`A ${n} rogue${s} who clawed their way up to ${e}, armed with a ${i} and an unquenchable thirst for stolen meals. Their ${this.personality.toLowerCase()} disposition and ${t} powers make them a dangerous foe in the drive-thru wars.`];return a[Math.floor(Math.random()*a.length)]}toData(){return{id:this.id,name:this.name,rank:this.rank,rankIndex:this.rankIndex,level:this.level,xp:this.xp,bodyElement:this.bodyElement,strengths:this.strengths,weaknesses:this.weaknesses,immunities:this.immunities,resistances:this.resistances,personality:this.personality,grudges:Array.from(this.grudges.entries()),rivals:this.rivals,traits:this.traits,isAlive:this.isAlive,isShamed:this.isShamed,defected:this.defected,stats:this.stats,abilities:this.abilities,combatStyle:this.combatStyle,commanderId:this.commanderId,subordinates:this.subordinates,assignedRegion:this.assignedRegion,backstory:this.backstory}}static fromData(e){const t=Object.create(pr.prototype);return t.id=e.id,t.name=e.name,t.rank=e.rank,t.rankIndex=e.rankIndex,t.level=e.level,t.xp=e.xp,t.bodyElement=e.bodyElement,t.strengths=e.strengths||[],t.weaknesses=e.weaknesses||[],t.immunities=e.immunities||[],t.resistances=e.resistances||[],t.personality=e.personality,t.grudges=new Map(e.grudges||[]),t.rivals=e.rivals||[],t.traits=e.traits,t.isAlive=e.isAlive,t.isShamed=e.isShamed,t.defected=e.defected||!1,t.stats=e.stats,t.abilities=e.abilities||[],t.combatStyle=e.combatStyle,t.commanderId=e.commanderId,t.subordinates=e.subordinates||[],t.assignedRegion=e.assignedRegion,t.backstory=e.backstory,t}}const es=xd,Q_=["eyeColor","scar","weapon","bodyType","height"];class Z_{constructor(e=Date.now()){this.rng=new os(e),this.elementDistribution=new Map,this.personalityDistribution=new Map,this.traitDistribution=new Map}generateHierarchy(e=18){const t=[],n=e>=18?3:2,i=e>=18?5:4,s=4,a=3,o=e-1-n-i-s-a,l=[{rankIndex:5,count:1},{rankIndex:4,count:n},{rankIndex:3,count:i},{rankIndex:2,count:s},{rankIndex:1,count:a},{rankIndex:0,count:Math.max(2,o)}],c=[3,8,15,22,30,40];for(const{rankIndex:d,count:u}of l)for(let h=0;h<u;h++){const p=this.rollElement(),_=this.rollPersonality(),g=this.rollStrengths(p),m=this.rollWeaknesses(p,g),f=this.rollTraits(),x=c[d],y=Math.max(1,x+this.rng.int(-2,2)),v=new pr({rankIndex:d,level:y,bodyElement:p,personality:_,strengths:g,weaknesses:m,traits:f});t.push(v)}return this.assignRivals(t),this.assignCommand(t),t}generateName(e){return yd(e)}rollPersonality(){const e=Ks.map(s=>this.personalityDistribution.get(s)||0),t=Math.min(...e),n=Ks.filter(s=>(this.personalityDistribution.get(s)||0)===t);let i;return n.length>0&&this.rng.chance(.7)?i=this.rng.choice(n):i=this.rng.choice(Ks),this.personalityDistribution.set(i,(this.personalityDistribution.get(i)||0)+1),i}rollElement(){const e=es.map(s=>this.elementDistribution.get(s)||0),t=Math.min(...e),n=es.filter(s=>(this.elementDistribution.get(s)||0)===t);let i;return n.length>0&&this.rng.chance(.7)?i=this.rng.choice(n):i=this.rng.choice(es),this.elementDistribution.set(i,(this.elementDistribution.get(i)||0)+1),i}rollStrengths(e){const t=es.filter(a=>a!==e),n=this.rng.chance(.25)?2:1,i=[],s=[...t];for(let a=s.length-1;a>0;a--){const o=Math.floor(this.rng.next()*(a+1));[s[a],s[o]]=[s[o],s[a]]}for(let a=0;a<n&&a<s.length;a++)i.push(s[a]);return i}rollWeaknesses(e,t){const n=es.filter(o=>o!==e&&!t.includes(o)),i=this.rng.chance(.25)?2:1,s=[],a=[...n];for(let o=a.length-1;o>0;o--){const l=Math.floor(this.rng.next()*(o+1));[a[o],a[l]]=[a[l],a[o]]}for(let o=0;o<i&&o<a.length;o++)s.push(a[o]);return s}rollTraits(){const e={};for(const t of Q_){const n=$t[t],i=this.traitDistribution.get(t)||new Map,s=n.map(c=>i.get(c)||0),a=Math.min(...s),o=n.filter(c=>(i.get(c)||0)===a);let l;o.length>0&&this.rng.chance(.6)?l=this.rng.choice(o):l=this.rng.choice(n),i.set(l,(i.get(l)||0)+1),this.traitDistribution.set(t,i),e[t]=l}return e}assignRivals(e){const t=new Map;for(const n of e)t.has(n.rankIndex)||t.set(n.rankIndex,[]),t.get(n.rankIndex).push(n);for(const n of e){if(n.rivals.length>=1)continue;const i=[n.rankIndex,n.rankIndex-1,n.rankIndex+1];let s=[];for(const a of i){const o=t.get(a)||[];s=s.concat(o.filter(l=>l.id!==n.id&&!n.rivals.includes(l.id)))}if(s.length===0&&(s=e.filter(a=>a.id!==n.id&&!n.rivals.includes(a.id))),s.length>0){const a=s.filter(c=>c.rivals.length===0),o=a.length>0?a:s,l=this.rng.choice(o);n.rivals.push(l.id),l.rivals.includes(n.id)||l.rivals.push(n.id)}}}assignCommand(e){const t=new Map;for(const h of e)t.has(h.rankIndex)||t.set(h.rankIndex,[]),t.get(h.rankIndex).push(h);const n=(t.get(5)||[])[0],i=t.get(4)||[],s=t.get(3)||[],a=t.get(2)||[],o=t.get(1)||[],l=t.get(0)||[];if(n)for(const h of i)h.commanderId=n.id,n.subordinates.push(h.id);let c=0;for(const h of i){const p=this.rng.int(2,3);for(let _=0;_<p&&c<s.length;_++){const g=s[c++];g.commanderId=h.id,h.subordinates.push(g.id)}}const d=[...a,...o,...l];for(let h=d.length-1;h>0;h--){const p=Math.floor(this.rng.next()*(h+1));[d[h],d[p]]=[d[p],d[h]]}let u=0;for(const h of s){const p=this.rng.int(1,2);for(let _=0;_<p&&u<d.length;_++){const g=d[u++];g.commanderId||(g.commanderId=h.id,h.subordinates.push(g.id))}}for(;u<d.length;){const h=d[u++];if(!h.commanderId)if(i.length>0){const p=this.rng.choice(i);h.commanderId=p.id,p.subordinates.push(h.id)}else n&&(h.commanderId=n.id,n.subordinates.push(h.id))}}}const da=["fry_valley","burger_highlands","mcflurry_tundra","happy_meal_forest","drive_thru_desert","play_place_plains","golden_arches_castle"],J_=50;class cs{constructor(){this.lieutenants=[],this.hierarchy=null,this.playerDefeats=0,this.playerVictories=0,this.regionBosses=new Map,this.eventLog=[],this.backgroundTimer=0,this._xpTimer=0,this._rivalryTimer=0}init(){const e=new Z_(Date.now());this.lieutenants=e.generateHierarchy(18),this._buildHierarchyTree(),this._assignRegionBosses(),this._addEvent("The Hamburglar's lieutenant hierarchy has been established.")}_buildHierarchyTree(){const e=this.lieutenants.find(t=>t.rankIndex===5);if(!e){this.hierarchy={lordId:null,captains:[]};return}this.hierarchy={lordId:e.id,captains:e.subordinates.map(t=>{const n=this.getLieutenant(t);return{id:t,subordinates:n?n.subordinates.map(i=>{const s=this.getLieutenant(i);return{id:i,subordinates:s?s.subordinates:[]}}):[]}})}}_assignRegionBosses(){const e=this.lieutenants.filter(t=>t.isAlive&&!t.isShamed&&t.rankIndex>=3&&t.rankIndex<=4).sort((t,n)=>n.rankIndex-t.rankIndex);if(e.length<da.length){const t=this.lieutenants.filter(n=>n.isAlive&&!n.isShamed&&n.rankIndex===2&&!e.includes(n)).sort((n,i)=>i.level-n.level);e.push(...t)}for(let t=0;t<da.length&&t<e.length;t++)this.assignToRegion(e[t].id,da[t])}getLieutenant(e){return this.lieutenants.find(t=>t.id===e)||null}getActiveLieutenants(){return this.lieutenants.filter(e=>e.isAlive&&!e.isShamed)}getByRank(e){return this.lieutenants.filter(t=>t.rank===e)}recordPlayerDefeat(e,t){const n=this.getLieutenant(e);if(!n||!n.isAlive)return{taunt:"...",promoted:!1,newRank:null};this.playerDefeats++;const i=(t==null?void 0:t.levels)||[1],s=i.reduce((d,u)=>d+u,0)/i.length,a=Math.floor(s*20),o=n.gainXP(a);if(t!=null&&t.memberIds)for(const d of t.memberIds)n.addGrudge(d,"Defeated the party in combat");const l=n.getTaunt();let c=null;return o.rankedUp&&(c=n.rank,this._addEvent(`${n.name} has been promoted to ${n.rank} after defeating the party!`)),this._addEvent(`${n.name} defeated the party and gained ${a} XP. "${l}"`),{taunt:l,promoted:o.rankedUp,newRank:c}}recordPlayerVictory(e,t,n){const i=this.getLieutenant(e);if(!i||!i.isAlive)return{defeated:!1,promotions:[],message:"..."};if(n){this.playerVictories++;const o=15*(i.level||1),l=i.gainXP(o);t&&!i.strengths.includes(t)&&!i.weaknesses.includes(t)&&Math.random()<.5&&(i.strengths.push(t),Math.random()<.4?i.immunities.push(t):i.resistances.push(t),this._addEvent(`${i.name} developed a resistance to ${t}!`));const c=i.getTaunt();return l.rankedUp&&(i.rank,this._addEvent(`${i.name} was promoted to ${i.rank} after surviving the encounter!`)),this._addEvent(`${i.name} escaped but grew stronger. "${c}"`),{defeated:!1,promotions:l.rankedUp?[{id:i.id,newRank:i.rank}]:[],message:c}}this.playerVictories++,i.isAlive=!1;const s=[];for(const o of i.rivals){const l=this.getLieutenant(o);if(l&&l.isAlive&&!l.isShamed){const c=i.level*30,d=l.gainXP(c);d.rankedUp?(s.push({id:l.id,newRank:l.rank}),this._addEvent(`${l.name} was promoted to ${l.rank} after their rival ${i.name} was defeated!`)):d.leveledUp&&this._addEvent(`${l.name} gained ${c} XP from rival ${i.name}'s defeat.`)}}const a=`${i.name} has been defeated!`;return this._addEvent(a),{defeated:!0,promotions:s,message:a}}recordShame(e,t){const n=this.getLieutenant(e);if(!n)return{backstory:"",demotedTo:""};const i=n.shame();return this._addEvent(`${n.name} has been SHAMED using ${t||"their weakness"}! Demoted to ${n.rank}.`),this._addEvent(`Backstory: ${i}`),{backstory:i,demotedTo:n.rank}}processPowerStruggles(){const e=[],t=this.lieutenants.filter(n=>n.isShamed&&n.isAlive);for(const n of t)for(const i of n.rivals){const s=this.getLieutenant(i);if(!s||!s.isAlive||s.defected)continue;if(Math.random()<.3){s.defected=!0;const o=s.getDefectionMessage();this._addEvent(`${s.name} has defected! "${o}"`),e.push({lieutenantId:s.id,message:o,defected:!0})}else e.push({lieutenantId:s.id,message:"",defected:!1})}return e}getTauntingMessage(e){return typeof e=="string"&&(e=this.getLieutenant(e)),e?e.getTaunt():"..."}getDefectionMessage(e){return typeof e=="string"&&(e=this.getLieutenant(e)),e?e.getDefectionMessage():"..."}getHierarchyMap(){const e=this.lieutenants.map(i=>({id:i.id,name:i.name,rank:i.rank,rankIndex:i.rankIndex,isAlive:i.isAlive,isShamed:i.isShamed,assignedRegion:i.assignedRegion})),t=[];for(const i of this.lieutenants)for(const s of i.subordinates)t.push({from:i.id,to:s,type:"command"});const n=new Set;for(const i of this.lieutenants)for(const s of i.rivals){const a=[i.id,s].sort().join("|");n.has(a)||(n.add(a),t.push({from:i.id,to:s,type:"rivalry"}))}return{nodes:e,edges:t}}assignToRegion(e,t){const n=this.getLieutenant(e);if(n){for(const[i,s]of this.regionBosses)s===e&&this.regionBosses.delete(i);n.assignedRegion=t,this.regionBosses.set(t,e)}}getRegionBoss(e){const t=this.regionBosses.get(e);if(!t)return null;const n=this.getLieutenant(t);return!n||!n.isAlive?null:n}update(e){this.backgroundTimer+=e,this._xpTimer+=e,this._rivalryTimer+=e;const t=[];if(this._xpTimer>=60){this._xpTimer=0;const n=this.getActiveLieutenants();if(n.length>0){const i=n[Math.floor(Math.random()*n.length)],s=5+Math.floor(Math.random()*11),a=i.gainXP(s);if(a.leveledUp){const o=`${i.name} trained in secret and reached level ${i.level}!`;if(t.push(o),this._addEvent(o),a.rankedUp){const l=`${i.name} was promoted to ${i.rank}!`;t.push(l),this._addEvent(l)}}}}if(this._rivalryTimer>=120){this._rivalryTimer=0;const n=this.getActiveLieutenants().filter(i=>i.rivals.length>0);if(n.length>0){const i=n[Math.floor(Math.random()*n.length)],s=i.rivals[Math.floor(Math.random()*i.rivals.length)],a=this.getLieutenant(s);if(a&&a.isAlive){const o=[`${i.name} challenged ${a.name} for control of territory!`,`${i.name} sabotaged ${a.name}'s robbery operation!`,`${a.name} ambushed ${i.name} in a turf dispute!`,`${i.name} and ${a.name} clashed over stolen Happy Meals!`],l=o[Math.floor(Math.random()*o.length)];t.push(l),this._addEvent(l)}}}return t}_addEvent(e){this.eventLog.push(e),this.eventLog.length>J_&&this.eventLog.shift()}getEventLog(){return[...this.eventLog]}toData(){return{lieutenants:this.lieutenants.map(e=>e.toData()),hierarchy:this.hierarchy,playerDefeats:this.playerDefeats,playerVictories:this.playerVictories,regionBosses:Array.from(this.regionBosses.entries()),eventLog:[...this.eventLog],backgroundTimer:this.backgroundTimer,_xpTimer:this._xpTimer,_rivalryTimer:this._rivalryTimer}}static fromData(e){const t=Object.create(cs.prototype);return t.lieutenants=(e.lieutenants||[]).map(n=>pr.fromData(n)),t.hierarchy=e.hierarchy||null,t.playerDefeats=e.playerDefeats||0,t.playerVictories=e.playerVictories||0,t.regionBosses=new Map(e.regionBosses||[]),t.eventLog=e.eventLog||[],t.backgroundTimer=e.backgroundTimer||0,t._xpTimer=e._xpTimer||0,t._rivalryTimer=e._rivalryTimer||0,t}}const dc="mc-title-screen-styles",ey=`
@keyframes mc-title-gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes mc-title-float-up {
  0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.7; }
  100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
}

@keyframes mc-title-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(255,200,80,0.6), 2px 2px 4px rgba(120,0,0,0.8), 0 0 40px rgba(255,180,40,0.3); }
  50%      { text-shadow: 0 0 30px rgba(255,220,100,0.8), 2px 2px 6px rgba(140,0,0,0.9), 0 0 60px rgba(255,200,60,0.5); }
}

@keyframes mc-title-fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes mc-title-button-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(255,200,80,0.3), inset 0 0 10px rgba(255,200,80,0.1); }
  50%      { box-shadow: 0 0 20px rgba(255,200,80,0.5), inset 0 0 15px rgba(255,200,80,0.2); }
}

.mc-title-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Georgia, 'Times New Roman', serif;
  background: linear-gradient(135deg, #2a1a0a, #4a2a10, #3a1a08, #5a2a15, #2a1a0a);
  background-size: 400% 400%;
  animation: mc-title-gradient 15s ease infinite;
  overflow: hidden;
}

.mc-title-particles {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mc-title-fry {
  position: absolute;
  width: 4px;
  height: 18px;
  background: linear-gradient(180deg, #ffdd66, #ffaa22, #cc8800);
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(255,200,80,0.5);
  animation: mc-title-float-up linear infinite;
}

.mc-title-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.mc-title-main {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: bold;
  color: #ffd700;
  text-shadow: 3px 3px 6px rgba(120,0,0,0.8), 0 0 30px rgba(255,180,40,0.4);
  animation: mc-title-glow 3s ease-in-out infinite, mc-title-fade-in 1.5s ease-out;
  letter-spacing: 0.05em;
  margin: 0;
  text-align: center;
  line-height: 1.1;
}

.mc-title-subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1.6rem);
  color: #cc9944;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  animation: mc-title-fade-in 2s ease-out 0.5s both;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  letter-spacing: 0.15em;
}

.mc-title-divider {
  width: 60%;
  max-width: 500px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, #ffaa22, #ffd700, transparent);
  margin: 1rem auto 2.5rem;
  border: none;
  animation: mc-title-fade-in 2s ease-out 0.3s both;
}

.mc-title-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 280px;
  animation: mc-title-fade-in 2s ease-out 0.8s both;
}

.mc-title-btn {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, rgba(60,30,10,0.9), rgba(80,40,15,0.9));
  color: #ffd700;
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  position: relative;
  overflow: hidden;
}

.mc-title-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
  transition: left 0.5s ease;
}

.mc-title-btn:hover {
  background: linear-gradient(135deg, rgba(80,45,15,0.95), rgba(100,55,20,0.95));
  animation: mc-title-button-glow 1.5s ease-in-out infinite;
  transform: scale(1.04);
}

.mc-title-btn:hover::before {
  left: 100%;
}

.mc-title-btn:active {
  transform: scale(0.98);
}

.mc-title-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.mc-title-credits {
  position: absolute;
  bottom: 1rem;
  left: 0; right: 0;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(204,153,68,0.6);
  font-style: italic;
  letter-spacing: 0.1em;
  z-index: 2;
  animation: mc-title-fade-in 3s ease-out 1.5s both;
}

.mc-title-settings-panel,
.mc-title-saves-panel {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(40,20,8,0.97), rgba(60,30,12,0.97));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 10px;
  padding: 2rem;
  width: 420px;
  max-width: 90vw;
  z-index: 10;
  display: none;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 40px rgba(0,0,0,0.8);
}

.mc-title-settings-panel.visible,
.mc-title-saves-panel.visible {
  display: flex;
}

.mc-panel-title {
  font-size: 1.5rem;
  color: #ffd700;
  text-align: center;
  margin: 0 0 1rem 0;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(120,0,0,0.8);
  letter-spacing: 0.1em;
}

.mc-setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccaa66;
  font-size: 1rem;
  gap: 1rem;
}

.mc-setting-label {
  font-family: Georgia, serif;
  white-space: nowrap;
}

.mc-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  background: linear-gradient(90deg, rgba(204,136,0,0.3), rgba(255,215,0,0.3));
  border-radius: 3px;
  outline: none;
}

.mc-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  background: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(255,200,80,0.5);
}

.mc-slider::-moz-range-thumb {
  width: 16px; height: 16px;
  background: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 8px rgba(255,200,80,0.5);
}

.mc-setting-value {
  font-family: Georgia, serif;
  color: #ffd700;
  min-width: 40px;
  text-align: right;
}

.mc-save-slot {
  background: linear-gradient(135deg, rgba(50,25,10,0.8), rgba(70,35,15,0.8));
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ccaa66;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mc-save-slot:hover {
  border-color: #ffd700;
  background: linear-gradient(135deg, rgba(60,30,12,0.9), rgba(80,40,18,0.9));
  transform: translateX(4px);
}

.mc-save-slot-name {
  font-weight: bold;
  color: #ffd700;
}

.mc-save-slot-info {
  font-size: 0.85rem;
  font-style: italic;
  color: rgba(204,170,102,0.7);
}

.mc-save-slot-empty {
  color: rgba(204,170,102,0.4);
  font-style: italic;
}

.mc-panel-close {
  font-family: Georgia, serif;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(60,30,10,0.8);
  color: #ccaa66;
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.mc-panel-close:hover {
  color: #ffd700;
  border-color: #ffd700;
  background: rgba(80,40,15,0.9);
}

.mc-title-vignette {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 3;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%);
}
`,ty="v0.1.0 Alpha",ny="McChronicles — A JRPG Adventure · Built with love & fries",iy={fry_valley:"Fry Valley",burger_highlands:"Burger Highlands",mcflurry_tundra:"McFlurry Tundra",happy_meal_forest:"Happy Meal Forest",drive_thru_desert:"Drive-Thru Desert",mccafe_springs:"McCafé Springs",play_place_plains:"Play Place Plains",golden_arches_castle:"Golden Arches Castle"};class sy{constructor(){this._onSelectCallback=null,this._container=null,this._settings={masterVolume:70,musicVolume:60,sfxVolume:80},this._saveSlots=this._loadSaveSlots(),this._isVisible=!1,this._particleInterval=null,this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(dc))return;const e=document.createElement("style");e.id=dc,e.textContent=ey,document.head.appendChild(e)}_loadSaveSlots(){try{const e=localStorage.getItem("mcchronicles_saves");if(e)return JSON.parse(e)}catch{}return[null,null,null]}_saveSaveSlots(){try{localStorage.setItem("mcchronicles_saves",JSON.stringify(this._saveSlots))}catch{}}_build(){this._container=document.createElement("div"),this._container.className="mc-title-overlay",this._container.style.display="none";const e=document.createElement("div");e.className="mc-title-particles",this._container.appendChild(e);const t=document.createElement("div");t.className="mc-title-vignette",this._container.appendChild(t);const n=document.createElement("div");n.className="mc-title-content";const i=document.createElement("h1");i.className="mc-title-main",i.textContent="McChronicles",n.appendChild(i);const s=document.createElement("div");s.className="mc-title-subtitle",s.textContent="The Happy Meal Quest",n.appendChild(s);const a=document.createElement("div");a.className="mc-title-divider",n.appendChild(a);const o=document.createElement("div");o.className="mc-title-buttons",this._newGameBtn=document.createElement("button"),this._newGameBtn.className="mc-title-btn",this._newGameBtn.textContent="New Game",this._newGameBtn.addEventListener("click",()=>this._handleSelect("newgame")),o.appendChild(this._newGameBtn),this._continueBtn=document.createElement("button"),this._continueBtn.className="mc-title-btn",this._continueBtn.textContent="Continue",this._continueBtn.addEventListener("click",()=>this._showSavePanel()),this._saveSlots.some(c=>c!==null)||(this._continueBtn.disabled=!0),o.appendChild(this._continueBtn),this._settingsBtn=document.createElement("button"),this._settingsBtn.className="mc-title-btn",this._settingsBtn.textContent="Settings",this._settingsBtn.addEventListener("click",()=>this._showSettingsPanel()),o.appendChild(this._settingsBtn),n.appendChild(o),this._container.appendChild(n),this._settingsPanel=this._buildSettingsPanel(),this._container.appendChild(this._settingsPanel),this._savesPanel=this._buildSavesPanel(),this._container.appendChild(this._savesPanel);const l=document.createElement("div");l.className="mc-title-credits",l.textContent=`${ny}  ·  ${ty}`,this._container.appendChild(l),this._container.addEventListener("click",c=>{(c.target===this._container||c.target.classList.contains("mc-title-particles")||c.target.classList.contains("mc-title-vignette"))&&this._hideAllPanels()}),document.body.appendChild(this._container)}_buildSettingsPanel(){const e=document.createElement("div");e.className="mc-title-settings-panel";const t=document.createElement("h2");t.className="mc-panel-title",t.textContent="Settings",e.appendChild(t);const n=[{key:"masterVolume",label:"Master Volume"},{key:"musicVolume",label:"Music Volume"},{key:"sfxVolume",label:"SFX Volume"}];n.forEach(({key:s,label:a})=>{const o=document.createElement("div");o.className="mc-setting-row";const l=document.createElement("span");l.className="mc-setting-label",l.textContent=a,o.appendChild(l);const c=document.createElement("input");c.type="range",c.min=0,c.max=100,c.value=this._settings[s],c.className="mc-slider";const d=document.createElement("span");d.className="mc-setting-value",d.textContent=`${this._settings[s]}%`,c.addEventListener("input",()=>{this._settings[s]=parseInt(c.value,10),d.textContent=`${c.value}%`;try{localStorage.setItem("mcchronicles_settings",JSON.stringify(this._settings))}catch{}}),o.appendChild(c),o.appendChild(d),e.appendChild(o)});try{const s=localStorage.getItem("mcchronicles_settings");if(s){const a=JSON.parse(s);Object.assign(this._settings,a),e.querySelectorAll(".mc-slider").forEach((o,l)=>{o.value=this._settings[n[l].key],o.dispatchEvent(new Event("input"))})}}catch{}const i=document.createElement("button");return i.className="mc-panel-close",i.textContent="← Back",i.addEventListener("click",()=>this._hideAllPanels()),e.appendChild(i),e}_buildSavesPanel(){const e=document.createElement("div");e.className="mc-title-saves-panel";const t=document.createElement("h2");t.className="mc-panel-title",t.textContent="Select Save Slot",e.appendChild(t);for(let i=0;i<3;i++){const s=document.createElement("div");s.className="mc-save-slot";const a=this._saveSlots[i];if(a){const o=document.createElement("span");o.className="mc-save-slot-name",o.textContent=`Slot ${i+1}`,s.appendChild(o);const l=document.createElement("span");l.className="mc-save-slot-info";const c=iy[a.region]||a.region||"Unknown";l.textContent=`Lv ${a.level||"?"} · ${c} · ${a.playtime||"0:00"}`,s.appendChild(l),s.addEventListener("click",()=>{this._hideAllPanels(),this._onSelectCallback&&this._onSelectCallback("continue",{slot:i,data:a})})}else{const o=document.createElement("span");o.className="mc-save-slot-empty",o.textContent=`Slot ${i+1} — Empty`,s.appendChild(o),s.style.cursor="default",s.addEventListener("click",()=>{this._hideAllPanels(),this._onSelectCallback&&this._onSelectCallback("newgame",{slot:i})})}e.appendChild(s)}const n=document.createElement("button");return n.className="mc-panel-close",n.textContent="← Back",n.addEventListener("click",()=>this._hideAllPanels()),e.appendChild(n),e}_showSettingsPanel(){this._hideAllPanels(),this._settingsPanel.classList.add("visible")}_showSavePanel(){this._hideAllPanels(),this._savesPanel.remove(),this._savesPanel=this._buildSavesPanel(),this._container.appendChild(this._savesPanel),this._savesPanel.classList.add("visible")}_hideAllPanels(){this._settingsPanel.classList.remove("visible"),this._savesPanel.classList.remove("visible")}_handleSelect(e){e==="newgame"&&this._onSelectCallback&&this._onSelectCallback("newgame",null)}_spawnFryParticle(){const e=this._container.querySelector(".mc-title-particles");if(!e)return;const t=document.createElement("div");t.className="mc-title-fry";const n=Math.random()*100,i=6+Math.random()*8,s=0,a=.6+Math.random()*.8;t.style.left=`${n}%`,t.style.animationDuration=`${i}s`,t.style.animationDelay=`${s}s`,t.style.transform=`scale(${a})`,t.style.opacity="0",e.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},(i+s)*1e3+500)}_startParticles(){for(let e=0;e<15;e++)setTimeout(()=>this._spawnFryParticle(),e*200);this._particleInterval=setInterval(()=>{this._spawnFryParticle()},600)}_stopParticles(){this._particleInterval&&(clearInterval(this._particleInterval),this._particleInterval=null);const e=this._container.querySelector(".mc-title-particles");e&&(e.innerHTML="")}show(){this._container.style.display="flex",this._isVisible=!0,this._startParticles()}hide(){this._container.style.display="none",this._isVisible=!1,this._hideAllPanels(),this._stopParticles()}onSelect(e){this._onSelectCallback=e}destroy(){this._stopParticles(),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container)}}const hc="mc-dialogue-box-styles",ry=`
@keyframes mc-dialogue-slide-up {
  from { transform: translateY(100%) translateY(20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@keyframes mc-dialogue-banner-shine {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes mc-dialogue-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

.mc-dialogue-overlay {
  position: fixed;
  bottom: 0; left: 0;
  width: 100vw;
  z-index: 9000;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 2rem;
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', serif;
  pointer-events: none;
}

.mc-dialogue-overlay.visible {
  display: flex;
  animation: mc-dialogue-slide-up 0.4s ease-out;
}

.mc-dialogue-box {
  width: 100%;
  max-width: 800px;
  position: relative;
  pointer-events: auto;
  background: linear-gradient(180deg, rgba(45,25,10,0.97) 0%, rgba(35,18,8,0.98) 50%, rgba(40,22,10,0.97) 100%);
  border: 3px solid transparent;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffaa22, #cc8800, #ffd700) 1;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.6), 0 0 30px rgba(255,180,40,0.15), inset 0 0 20px rgba(0,0,0,0.4);
}

/* Scrollwork corners */
.mc-dialogue-box::before,
.mc-dialogue-box::after {
  content: '';
  position: absolute;
  width: 30px; height: 30px;
  border: 2px solid #ffd700;
  pointer-events: none;
}

.mc-dialogue-box::before {
  top: -2px; left: -2px;
  border-right: none; border-bottom: none;
  border-top-left-radius: 8px;
  box-shadow: -1px -1px 4px rgba(255,200,80,0.3);
}

.mc-dialogue-box::after {
  bottom: -2px; right: -2px;
  border-left: none; border-top: none;
  border-bottom-right-radius: 8px;
  box-shadow: 1px 1px 4px rgba(255,200,80,0.3);
}

.mc-dialogue-banner {
  position: absolute;
  top: -18px; left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #8b4513, #d4a017, #ffd700, #d4a017, #8b4513);
  background-size: 200% auto;
  padding: 0.3rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: #2a1a05;
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
  letter-spacing: 0.12em;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 15px rgba(255,200,80,0.3);
  animation: mc-dialogue-banner-shine 4s linear infinite;
  z-index: 2;
}

.mc-dialogue-banner::before,
.mc-dialogue-banner::after {
  content: '✦';
  color: #2a1a05;
  margin: 0 0.5rem;
  font-size: 0.8rem;
}

.mc-dialogue-content {
  padding: 2.2rem 2rem 1.5rem;
  min-height: 80px;
  max-height: 200px;
  overflow-y: auto;
}

.mc-dialogue-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #f0e0c0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  letter-spacing: 0.02em;
  margin: 0;
  min-height: 2rem;
}

.mc-dialogue-text .mc-cursor {
  display: inline-block;
  width: 10px;
  height: 1.2em;
  background: #ffd700;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: mc-dialogue-pulse 0.6s ease-in-out infinite;
}

.mc-dialogue-prompt {
  position: absolute;
  bottom: 0.5rem; right: 1rem;
  font-size: 0.8rem;
  color: rgba(255,215,0,0.6);
  font-style: italic;
  letter-spacing: 0.1em;
  animation: mc-dialogue-pulse 1.2s ease-in-out infinite;
}

/* Ornamental divider in the box */
.mc-dialogue-ornament {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 10%, rgba(204,136,0,0.15) 50%, transparent 90%);
  pointer-events: none;
}

/* Dimming backdrop */
.mc-dialogue-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 8999;
  display: none;
  pointer-events: none;
}

.mc-dialogue-backdrop.visible {
  display: block;
  pointer-events: auto;
}
`;class ay{constructor(){this._container=null,this._backdrop=null,this._textEl=null,this._bannerEl=null,this._promptEl=null,this._dialogueQueue=[],this._currentIndex=0,this._fullText="",this._displayedText="",this._typeSpeed=30,this._typeAccumulator=0,this._isTyping=!1,this._isVisible=!1,this._onComplete=null,this._keyHandler=null,this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(hc))return;const e=document.createElement("style");e.id=hc,e.textContent=ry,document.head.appendChild(e)}_build(){this._backdrop=document.createElement("div"),this._backdrop.className="mc-dialogue-backdrop",document.body.appendChild(this._backdrop),this._container=document.createElement("div"),this._container.className="mc-dialogue-overlay";const e=document.createElement("div");e.className="mc-dialogue-box";const t=document.createElement("div");t.className="mc-dialogue-ornament",e.appendChild(t),this._bannerEl=document.createElement("div"),this._bannerEl.className="mc-dialogue-banner",this._bannerEl.textContent="",e.appendChild(this._bannerEl);const n=document.createElement("div");n.className="mc-dialogue-content",this._textEl=document.createElement("p"),this._textEl.className="mc-dialogue-text",this._textEl.textContent="",n.appendChild(this._textEl),e.appendChild(n),this._promptEl=document.createElement("div"),this._promptEl.className="mc-dialogue-prompt",this._promptEl.textContent="▼ Press Space",this._promptEl.style.display="none",e.appendChild(this._promptEl),this._container.appendChild(e),document.body.appendChild(this._container),this._keyHandler=i=>{this._isVisible&&(i.code==="Enter"||i.code==="Space"||i.code==="NumpadEnter")&&(i.preventDefault(),i.stopPropagation(),this._advance())}}_advance(){if(this._isTyping){this._skip();return}if(this._currentIndex++,this._currentIndex>=this._dialogueQueue.length){this.hide();const e=this._onComplete;this._onComplete=null,e&&e();return}this._showCurrentLine()}_showCurrentLine(){const e=this._dialogueQueue[this._currentIndex];e&&(this._bannerEl.textContent=e.speaker||"",this._fullText=e.text||"",this._displayedText="",this._textEl.textContent="",this._isTyping=!0,this._typeAccumulator=0,this._promptEl.style.display="none")}_updateTyping(e){if(this._isTyping){for(this._typeAccumulator+=e;this._typeAccumulator>=this._typeSpeed&&this._displayedText.length<this._fullText.length;)this._typeAccumulator-=this._typeSpeed,this._displayedText=this._fullText.slice(0,this._displayedText.length+1),this._textEl.innerHTML=this._escapeHtml(this._displayedText)+'<span class="mc-cursor"></span>';this._displayedText.length>=this._fullText.length&&(this._isTyping=!1,this._textEl.textContent=this._fullText,this._currentIndex<this._dialogueQueue.length-1?this._promptEl.textContent="▼ Press Space":this._promptEl.textContent="✦ Press Space to close",this._promptEl.style.display="block")}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}show(e,t){if(!e||e.length===0){t&&t();return}this._dialogueQueue=e,this._currentIndex=0,this._onComplete=t||null,this._isVisible=!0,this._container.classList.add("visible"),this._backdrop.classList.add("visible"),this._showCurrentLine(),document.addEventListener("keydown",this._keyHandler,!0);const n=this._container.querySelector(".mc-dialogue-box");n&&n.addEventListener("click",this._clickHandler=()=>this._advance())}hide(){this._isVisible=!1,this._isTyping=!1,this._container.classList.remove("visible"),this._backdrop.classList.remove("visible"),this._textEl.textContent="",this._bannerEl.textContent="",this._promptEl.style.display="none",document.removeEventListener("keydown",this._keyHandler,!0);const e=this._container.querySelector(".mc-dialogue-box");e&&this._clickHandler&&(e.removeEventListener("click",this._clickHandler),this._clickHandler=null)}update(e){this._isVisible&&this._isTyping&&this._updateTyping(e)}skip(){this._isTyping&&(this._displayedText=this._fullText,this._isTyping=!1,this._textEl.textContent=this._fullText,this._currentIndex<this._dialogueQueue.length-1?this._promptEl.textContent="▼ Press Space":this._promptEl.textContent="✦ Press Space to close",this._promptEl.style.display="block")}destroy(){this.hide(),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._backdrop&&this._backdrop.parentNode&&this._backdrop.parentNode.removeChild(this._backdrop)}}const uc="mc-hud-styles",oy=`
@keyframes mc-hud-fade-out {
  0%   { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}

@keyframes mc-hud-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(255,200,80,0.3); }
  50%      { box-shadow: 0 0 15px rgba(255,200,80,0.6); }
}

.mc-hud-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 8000;
  pointer-events: none;
  display: none;
  font-family: Georgia, 'Times New Roman', serif;
}

.mc-hud-overlay.visible {
  display: block;
}

/* ─── Gold Display (top-left) ─── */
.mc-hud-gold {
  position: absolute;
  top: 1rem; left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.4rem 0.9rem;
  color: #ffd700;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  letter-spacing: 0.05em;
}

.mc-hud-coin {
  display: inline-block;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffe066, #ffd700, #cc9900);
  border: 1px solid #aa7700;
  box-shadow: 0 0 6px rgba(255,200,80,0.4);
  position: relative;
}

.mc-hud-coin::after {
  content: 'M';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: bold;
  color: #aa7700;
  font-family: Georgia, serif;
}

/* ─── Region Name (top-center) ─── */
.mc-hud-region {
  position: absolute;
  top: 1rem; left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: linear-gradient(180deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.4rem 1.5rem;
  min-width: 200px;
}

.mc-hud-region-name {
  font-size: 1.15rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 3px rgba(120,0,0,0.7);
  letter-spacing: 0.1em;
  margin: 0;
  line-height: 1.2;
}

.mc-hud-region-sub {
  font-size: 0.75rem;
  color: #ccaa66;
  font-style: italic;
  letter-spacing: 0.05em;
  margin: 0;
  line-height: 1.2;
}

/* ─── Mini-map (top-right) ─── */
.mc-hud-minimap {
  position: absolute;
  top: 1rem; right: 1rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 0 12px rgba(0,0,0,0.5);
}

.mc-hud-minimap canvas {
  display: block;
  border-radius: 4px;
}

.mc-hud-minimap-label {
  text-align: center;
  font-size: 0.65rem;
  color: rgba(204,170,102,0.7);
  font-style: italic;
  letter-spacing: 0.08em;
  margin-top: 0.3rem;
}

/* ─── Party Status (bottom-left) ─── */
.mc-hud-party {
  position: absolute;
  bottom: 1rem; left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 220px;
}

.mc-hud-party-member {
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(50,28,12,0.92));
  border: 1px solid;
  border-image: linear-gradient(135deg, rgba(255,215,0,0.5), rgba(204,136,0,0.3), rgba(255,215,0,0.5)) 1;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mc-hud-party-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.mc-hud-party-name {
  font-size: 0.85rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  letter-spacing: 0.05em;
}

.mc-hud-party-level {
  font-size: 0.7rem;
  color: #ccaa66;
  font-style: italic;
}

.mc-hud-bar-row {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.mc-hud-bar-label {
  font-size: 0.6rem;
  color: rgba(204,170,102,0.7);
  width: 18px;
  text-align: right;
}

.mc-hud-bar-bg {
  flex: 1;
  height: 6px;
  background: rgba(0,0,0,0.5);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(255,215,0,0.15);
}

.mc-hud-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.mc-hud-hp-fill {
  background: linear-gradient(90deg, #cc3322, #ee5544, #ff6644);
  box-shadow: 0 0 4px rgba(238,85,68,0.4);
}

.mc-hud-mp-fill {
  background: linear-gradient(90deg, #3366cc, #5588dd, #66aaff);
  box-shadow: 0 0 4px rgba(85,136,221,0.4);
}

.mc-hud-bar-text {
  font-size: 0.55rem;
  color: rgba(240,224,192,0.8);
  min-width: 42px;
  text-align: right;
}

/* ─── Quest Tracker (right side, below minimap) ─── */
.mc-hud-quest {
  position: absolute;
  top: 200px; right: 1rem;
  width: 220px;
  background: linear-gradient(135deg, rgba(40,22,8,0.9), rgba(50,28,12,0.9));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  display: none;
  flex-direction: column;
  gap: 0.3rem;
}

.mc-hud-quest.visible {
  display: flex;
}

.mc-hud-quest-title {
  font-size: 0.75rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(204,136,0,0.3);
  padding-bottom: 0.3rem;
  margin: 0;
}

.mc-hud-quest-text {
  font-size: 0.78rem;
  color: #f0e0c0;
  font-style: italic;
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  margin: 0;
}

/* ─── Controls Hint (bottom-right, auto-fade) ─── */
.mc-hud-controls {
  position: absolute;
  bottom: 1rem; right: 1rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.85), rgba(50,28,12,0.85));
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  font-size: 0.7rem;
  color: rgba(240,224,192,0.7);
  letter-spacing: 0.05em;
  line-height: 1.5;
  animation: mc-hud-fade-out 6s ease-in-out forwards;
  pointer-events: none;
}

.mc-hud-controls-key {
  display: inline-block;
  padding: 1px 5px;
  background: rgba(204,136,0,0.2);
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 3px;
  font-weight: bold;
  color: #ffd700;
  font-size: 0.65rem;
  margin: 0 2px;
}
`,Vn={fry_valley:{name:"Fry Valley",x:.3,y:.55,color:"#ffcc44"},burger_highlands:{name:"Burger Highlands",x:.3,y:.3,color:"#cc6633"},mcflurry_tundra:{name:"McFlurry Tundra",x:.3,y:.1,color:"#aaccff"},happy_meal_forest:{name:"Happy Meal Forest",x:.55,y:.55,color:"#44aa55"},drive_thru_desert:{name:"Drive-Thru Desert",x:.72,y:.5,color:"#ddaa66"},mccafe_springs:{name:"McCafé Springs",x:.55,y:.25,color:"#cc9966"},play_place_plains:{name:"Play Place Plains",x:.82,y:.35,color:"#ff88dd"},golden_arches_castle:{name:"Golden Arches Castle",x:.88,y:.15,color:"#ffd700"}},ly=[["fry_valley","burger_highlands"],["fry_valley","happy_meal_forest"],["burger_highlands","mcflurry_tundra"],["happy_meal_forest","drive_thru_desert"],["drive_thru_desert","mccafe_springs"],["mcflurry_tundra","mccafe_springs"],["drive_thru_desert","play_place_plains"],["mccafe_springs","play_place_plains"],["play_place_plains","golden_arches_castle"]],cy={fry_valley:"Where the Golden Fries Grow",burger_highlands:"Misty Peaks of Flame",mcflurry_tundra:"Frozen Dairy Wastes",happy_meal_forest:"Whispers of the Toy",drive_thru_desert:"Endless Asphalt Sands",mccafe_springs:"Aromatic Healing Waters",play_place_plains:"Land of Wonder & Play",golden_arches_castle:"Throne of the McKing"};function dy(r){return typeof r=="string"?r:"#"+(r&16777215).toString(16).padStart(6,"0")}class hy{constructor(){this._container=null,this._isVisible=!1,this._minimapCanvas=null,this._minimapCtx=null,this._goldEl=null,this._regionNameEl=null,this._regionSubEl=null,this._partyEl=null,this._questEl=null,this._questTextEl=null,this._controlsEl=null,this._controlsFadeTimer=null,this._currentRegion=null,this._playerPosition={x:.5,y:.5},this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(uc))return;const e=document.createElement("style");e.id=uc,e.textContent=oy,document.head.appendChild(e)}_build(){this._container=document.createElement("div"),this._container.className="mc-hud-overlay";const e=document.createElement("div");e.className="mc-hud-gold";const t=document.createElement("span");t.className="mc-hud-coin",e.appendChild(t),this._goldEl=document.createElement("span"),this._goldEl.textContent="0",this._goldEl.className="mc-hud-gold-amount",e.appendChild(this._goldEl),this._container.appendChild(e);const n=document.createElement("div");n.className="mc-hud-region",this._regionNameEl=document.createElement("div"),this._regionNameEl.className="mc-hud-region-name",this._regionNameEl.textContent="—",n.appendChild(this._regionNameEl),this._regionSubEl=document.createElement("div"),this._regionSubEl.className="mc-hud-region-sub",this._regionSubEl.textContent="",n.appendChild(this._regionSubEl),this._container.appendChild(n);const i=document.createElement("div");i.className="mc-hud-minimap",this._minimapCanvas=document.createElement("canvas"),this._minimapCanvas.width=180,this._minimapCanvas.height=140,i.appendChild(this._minimapCanvas);const s=document.createElement("div");s.className="mc-hud-minimap-label",s.textContent="World Map",i.appendChild(s),this._container.appendChild(i),this._minimapCtx=this._minimapCanvas.getContext("2d"),this._partyEl=document.createElement("div"),this._partyEl.className="mc-hud-party",this._container.appendChild(this._partyEl),this._questEl=document.createElement("div"),this._questEl.className="mc-hud-quest";const a=document.createElement("div");a.className="mc-hud-quest-title",a.textContent="⚔ Current Quest",this._questEl.appendChild(a),this._questTextEl=document.createElement("div"),this._questTextEl.className="mc-hud-quest-text",this._questTextEl.textContent="",this._questEl.appendChild(this._questTextEl),this._container.appendChild(this._questEl),this._controlsEl=document.createElement("div"),this._controlsEl.className="mc-hud-controls",this._controlsEl.innerHTML=`
      <span class="mc-hud-controls-key">↑↓←→</span> Move &nbsp;
      <span class="mc-hud-controls-key">E</span> Interact<br>
      <span class="mc-hud-controls-key">M</span> Menu &nbsp;
      <span class="mc-hud-controls-key">Tab</span> Map
    `,this._container.appendChild(this._controlsEl),document.body.appendChild(this._container)}_drawMinimap(){const e=this._minimapCtx,t=this._minimapCanvas.width,n=this._minimapCanvas.height;e.fillStyle="#2a1a08",e.fillRect(0,0,t,n),e.strokeStyle="rgba(204,136,0,0.08)",e.lineWidth=1;for(let i=0;i<t;i+=20)e.beginPath(),e.moveTo(i,0),e.lineTo(i,n),e.stroke();for(let i=0;i<n;i+=20)e.beginPath(),e.moveTo(0,i),e.lineTo(t,i),e.stroke();e.strokeStyle="rgba(255,215,0,0.35)",e.lineWidth=2;for(const[i,s]of ly){const a=Vn[i],o=Vn[s];!a||!o||(e.beginPath(),e.moveTo(a.x*t,a.y*n),e.lineTo(o.x*t,o.y*n),e.stroke())}for(const[i,s]of Object.entries(Vn)){const a=s.x*t,o=s.y*n,l=i===this._currentRegion,c=l?7:4;if(l){const d=e.createRadialGradient(a,o,0,a,o,14);d.addColorStop(0,"rgba(255,215,0,0.6)"),d.addColorStop(1,"rgba(255,215,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(a,o,14,0,Math.PI*2),e.fill()}e.fillStyle=s.color,e.strokeStyle=l?"#ffd700":"rgba(204,136,0,0.5)",e.lineWidth=l?2:1,e.beginPath(),e.arc(a,o,c,0,Math.PI*2),e.fill(),e.stroke()}if(this._currentRegion&&Vn[this._currentRegion]){const i=Vn[this._currentRegion],s=i.x*t,a=i.y*n,o=(this._playerPosition.x-.5)*20,l=(this._playerPosition.y-.5)*16,c=s+o,d=a+l;e.fillStyle="#ffffff",e.strokeStyle="#ffd700",e.lineWidth=1.5,e.beginPath(),e.moveTo(c,d-5),e.lineTo(c-4,d+3),e.lineTo(c+4,d+3),e.closePath(),e.fill(),e.stroke()}e.strokeStyle="rgba(255,215,0,0.3)",e.lineWidth=1,e.strokeRect(.5,.5,t-1,n-1)}_renderParty(e){if(this._partyEl.innerHTML="",!(!e||e.length===0))for(const t of e){const n=document.createElement("div");n.className="mc-hud-party-member";const i=document.createElement("div");i.className="mc-hud-party-header";const s=document.createElement("span");s.className="mc-hud-party-name",s.textContent=t.name||t.id||"Unknown";const a=dy(t.color||16766720);s.style.color=a,s.style.textShadow=`1px 1px 2px rgba(0,0,0,0.8), 0 0 8px ${a}66`,i.appendChild(s);const o=document.createElement("span");o.className="mc-hud-party-level";const l=t.level||1;o.textContent=`Lv ${l}`,i.appendChild(o),n.appendChild(i);const c=t.baseStats||t.stats||{},d=c.hp||t.maxHp||100,u=t.currentHp!==void 0?t.currentHp:d,h=Math.max(0,Math.min(100,u/d*100)),p=document.createElement("div");p.className="mc-hud-bar-row";const _=document.createElement("span");_.className="mc-hud-bar-label",_.textContent="HP",p.appendChild(_);const g=document.createElement("div");g.className="mc-hud-bar-bg";const m=document.createElement("div");m.className="mc-hud-bar-fill mc-hud-hp-fill",m.style.width=`${h}%`,g.appendChild(m),p.appendChild(g);const f=document.createElement("span");f.className="mc-hud-bar-text",f.textContent=`${Math.ceil(u)}/${d}`,p.appendChild(f),n.appendChild(p);const x=c.mp||t.maxMp||50,y=t.currentMp!==void 0?t.currentMp:x,v=Math.max(0,Math.min(100,y/x*100)),C=document.createElement("div");C.className="mc-hud-bar-row";const T=document.createElement("span");T.className="mc-hud-bar-label",T.textContent="MP",C.appendChild(T);const A=document.createElement("div");A.className="mc-hud-bar-bg";const I=document.createElement("div");I.className="mc-hud-bar-fill mc-hud-mp-fill",I.style.width=`${v}%`,A.appendChild(I),C.appendChild(A);const b=document.createElement("span");b.className="mc-hud-bar-text",b.textContent=`${Math.ceil(y)}/${x}`,C.appendChild(b),n.appendChild(C),this._partyEl.appendChild(n)}}_showControlsHint(){this._controlsFadeTimer&&clearTimeout(this._controlsFadeTimer),this._controlsEl.style.removeProperty("animation"),this._controlsEl.style.opacity="1",this._controlsEl.style.pointerEvents="none",this._controlsEl.offsetWidth,this._controlsEl.style.animation="mc-hud-fade-out 6s ease-in-out forwards"}update(e,t,n,i){if(!this._isVisible)return;t&&Vn[t]?(this._currentRegion=t,this._regionNameEl.textContent=Vn[t].name,this._regionSubEl.textContent=cy[t]||""):t&&(this._currentRegion=t,this._regionNameEl.textContent=t,this._regionSubEl.textContent=""),n&&(this._playerPosition={x:n.x||.5,y:n.y||.5}),this._renderParty(e);const s=e&&e.gold!==void 0?e.gold:this._lastGold||0;this._lastGold=s,this._goldEl.textContent=s.toLocaleString(),i?(this._questEl.classList.add("visible"),this._questTextEl.textContent=i):this._questEl.classList.remove("visible"),this._drawMinimap()}show(){this._container.classList.add("visible"),this._isVisible=!0,this._showControlsHint(),this._drawMinimap()}hide(){this._container.classList.remove("visible"),this._isVisible=!1}destroy(){this._controlsFadeTimer&&clearTimeout(this._controlsFadeTimer),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container)}}const uy="modulepreload",py=function(r){return"/"+r},pc={},fy=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=py(l),l in pc)return;pc[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":uy,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},fc={1:"♛",2:"♜",3:"♝",4:"♞",5:"♟"},my={1:"Supreme Commander",2:"High Commander",3:"Commander",4:"Lieutenant",5:"Ensign"},mc={fire:"#e8503a",water:"#3a7be8",earth:"#8b6b3a",air:"#a8c8e8",light:"#f5d76e",dark:"#6a4a7a",lightning:"#f0c040",ice:"#80c8e8",nature:"#4a8b4a",none:"#b0b0b0"};function gc(r){return mc[r]||mc.none}const gy=`
.mc-nemesis-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.97), rgba(45, 30, 18, 0.97));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  z-index: 9001;
  overflow: hidden;
}

.mc-nemesis-header {
  text-align: center;
  padding: 18px 20px 12px;
  border-bottom: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(60, 42, 25, 0.9), rgba(40, 28, 16, 0.6));
  flex-shrink: 0;
}

.mc-nemesis-title {
  font-size: 26px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-nemesis-subtitle {
  font-size: 13px;
  color: #b89860;
  margin-top: 4px;
  font-style: italic;
}

.mc-nemesis-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mc-nemesis-tree-container {
  flex: 1;
  overflow: auto;
  padding: 20px 30px;
  position: relative;
}

.mc-nemesis-detail-panel {
  width: 340px;
  border-left: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(35, 25, 15, 0.95), rgba(25, 18, 10, 0.95));
  overflow-y: auto;
  padding: 20px;
  flex-shrink: 0;
}

.mc-nemesis-tree {
  position: relative;
  min-width: 600px;
}

.mc-nemesis-node {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.mc-nemesis-node:hover {
  transform: scale(1.08);
  z-index: 10;
}

.mc-nemesis-node-selected {
  transform: scale(1.12);
  z-index: 11;
}

.mc-nemesis-node-portrait {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  position: relative;
}

.mc-nemesis-node-dead .mc-nemesis-node-portrait {
  filter: grayscale(1) brightness(0.4);
  border-color: #555;
}

.mc-nemesis-node-dead::after {
  content: '✝';
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 22px;
  color: #888;
  text-shadow: 0 0 4px rgba(0,0,0,0.8);
}

.mc-nemesis-node-shamed .mc-nemesis-node-portrait {
  border-color: #8b3a3a;
  border-style: dashed;
}

.mc-nemesis-node-info {
  margin-top: 6px;
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
}

.mc-nemesis-node-name {
  font-weight: bold;
  color: #f0e0c0;
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mc-nemesis-node-rank {
  color: #c8a050;
  font-size: 18px;
  margin-top: 2px;
}

.mc-nemesis-node-level {
  color: #a89070;
  font-size: 11px;
}

.mc-nemesis-node-status-tag {
  font-size: 9px;
  padding: 1px 6px;
  border-radius: 8px;
  margin-top: 3px;
  display: inline-block;
}

.mc-nemesis-tag-dead {
  background: rgba(80, 30, 30, 0.7);
  color: #cc6666;
}

.mc-nemesis-tag-shamed {
  background: rgba(80, 50, 30, 0.7);
  color: #cc9966;
}

.mc-nemesis-tag-alive {
  background: rgba(30, 60, 30, 0.6);
  color: #88bb66;
}

.mc-nemesis-svg-lines {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

.mc-nemesis-detail-empty {
  text-align: center;
  color: #8a7050;
  font-style: italic;
  padding: 40px 20px;
  font-size: 14px;
}

.mc-nemesis-detail-name {
  font-size: 22px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  margin: 0 0 4px;
}

.mc-nemesis-detail-title {
  font-size: 13px;
  color: #c8a050;
  font-style: italic;
  margin-bottom: 16px;
}

.mc-nemesis-detail-section {
  margin-bottom: 14px;
}

.mc-nemesis-detail-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #b89860;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
  padding-bottom: 2px;
}

.mc-nemesis-detail-value {
  font-size: 13px;
  color: #d8c8a0;
  line-height: 1.5;
}

.mc-nemesis-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
}

.mc-nemesis-stat-row {
  display: flex;
  justify-content: space-between;
  color: #d8c8a0;
}

.mc-nemesis-stat-label {
  color: #a89070;
}

.mc-nemesis-stat-value {
  font-weight: bold;
}

.mc-nemesis-element-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
}

.mc-nemesis-list-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
}

.mc-nemesis-list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: linear-gradient(90deg, rgba(50, 35, 20, 0.8), rgba(40, 28, 16, 0.5));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.mc-nemesis-list-item:hover {
  border-color: #c8a050;
  background: linear-gradient(90deg, rgba(60, 42, 25, 0.9), rgba(50, 35, 20, 0.6));
}

.mc-nemesis-list-item-selected {
  border-color: #f5d090;
  background: linear-gradient(90deg, rgba(70, 50, 28, 0.95), rgba(55, 38, 22, 0.7));
}

.mc-nemesis-list-portrait {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  flex-shrink: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.mc-nemesis-list-info {
  flex: 1;
  min-width: 0;
}

.mc-nemesis-list-name {
  font-size: 14px;
  font-weight: bold;
  color: #f0e0c0;
}

.mc-nemesis-list-meta {
  font-size: 11px;
  color: #a89070;
  margin-top: 2px;
}

.mc-nemesis-close-btn {
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(60, 40, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;
  transition: background 0.15s;
}

.mc-nemesis-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-nemesis-legend {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 8px 0;
  font-size: 11px;
  color: #a89070;
}

.mc-nemesis-legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mc-nemesis-legend-line {
  width: 20px;
  height: 2px;
  display: inline-block;
}

.mc-nemesis-legend-gold {
  background: #c8a050;
}

.mc-nemesis-legend-red {
  background: #cc4444;
}

.mc-nemesis-legend-gray {
  background: #666;
}
`;let _c=!1;function _y(){if(_c)return;const r=document.createElement("style");r.id="mc-nemesis-styles",r.textContent=gy,document.head.appendChild(r),_c=!0}class yy{constructor(){this.nemesisSystem=null,this.lieutenants=[],this.selectedId=null,this.overlay=null,this.visible=!1,this._keyHandler=null,this._onClose=null}show(e,t){_y(),this.nemesisSystem=e,this._onClose=t||null,this.lieutenants=e&&typeof e.getHierarchy=="function"?e.getHierarchy():[],this.selectedId=null,this.visible=!0,this._render(),this._bindKeys()}hide(){this.visible=!1,this.selectedId=null,this._unbindKeys(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}selectLieutenant(e){this.selectedId=e,this._renderDetailPanel(),this._highlightNode()}_bindKeys(){this._keyHandler=e=>{e.key==="Escape"&&(e.preventDefault(),this.hide(),this._onClose&&this._onClose())},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-nemesis-overlay";const e=document.createElement("div");e.className="mc-nemesis-header",e.innerHTML=`
      <h2 class="mc-nemesis-title">⚔ Nemesis Hierarchy ⚔</h2>
      <div class="mc-nemesis-subtitle">The Burger King's Dread Command</div>
      <div class="mc-nemesis-legend">
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gold"></span> Command</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-red"></span> Rivalry</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gray"></span> Deceased</div>
      </div>
    `;const t=document.createElement("button");t.className="mc-nemesis-close-btn",t.textContent="✕ Close",t.onclick=()=>{this.hide(),this._onClose&&this._onClose()},e.appendChild(t),this.overlay.appendChild(e);const n=document.createElement("div");n.className="mc-nemesis-body";const i=document.createElement("div");i.className="mc-nemesis-tree-container",i.id="mc-nemesis-tree-container",n.appendChild(i);const s=document.createElement("div");s.className="mc-nemesis-detail-panel",s.id="mc-nemesis-detail-panel",s.innerHTML='<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>',n.appendChild(s),this.overlay.appendChild(n),document.body.appendChild(this.overlay),this._renderTree(i),this._renderDetailPanel()}_renderTree(e){if(e.innerHTML="",this.lieutenants.length===0){e.innerHTML='<div class="mc-nemesis-detail-empty">No nemesis data available.</div>';return}const t=[...this.lieutenants].sort((g,m)=>(g.rank||5)-(m.rank||5)),n={};for(const g of t){const m=g.rank||5;n[m]||(n[m]=[]),n[m].push(g)}const i=Object.keys(n).map(Number).sort((g,m)=>g-m),s=Math.max(...i.map(g=>n[g].length)),a=140,o=150,l=Math.max(s*a,600),c=i.length*o+40,d={},u=[];i.forEach((g,m)=>{const f=n[g],x=f.length*a,y=(l-x)/2;f.forEach((v,C)=>{const T=y+C*a+a/2,A=m*o+30;d[v.id]={x:T,y:A},u.push({lt:v,x:T,y:A})})});const h=document.createElement("div");h.className="mc-nemesis-tree",h.style.width=l+"px",h.style.height=c+"px";const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.classList.add("mc-nemesis-svg-lines"),p.setAttribute("width",l),p.setAttribute("height",c),p.style.width=l+"px",p.style.height=c+"px";const _={};for(const g of this.lieutenants)_[g.id]=g;for(let g=1;g<i.length;g++){const m=i[g],f=n[m],x=n[i[g-1]];for(const y of f){let v=null,C=1/0;y.rivals;for(const T of x){const A=d[y.id],I=d[T.id],b=Math.hypot(A.x-I.x,A.y-I.y);b<C&&(C=b,v=T)}if(v){const T=d[y.id],A=d[v.id],I=document.createElementNS("http://www.w3.org/2000/svg","line");I.setAttribute("x1",A.x),I.setAttribute("y1",A.y+32),I.setAttribute("x2",T.x),I.setAttribute("y2",T.y-32),I.setAttribute("stroke","#c8a050"),I.setAttribute("stroke-width","2"),I.setAttribute("opacity","0.5"),p.appendChild(I)}}}for(const g of this.lieutenants)if(g.rivals&&Array.isArray(g.rivals)){for(const m of g.rivals)if(d[g.id]&&d[m]){const f=d[g.id],x=d[m],y=`rival-${[g.id,m].sort().join("-")}`;if(p.querySelector(`[data-rival="${y}"]`))continue;const v=document.createElementNS("http://www.w3.org/2000/svg","line");v.setAttribute("x1",f.x),v.setAttribute("y1",f.y),v.setAttribute("x2",x.x),v.setAttribute("y2",x.y),v.setAttribute("stroke","#cc4444"),v.setAttribute("stroke-width","2"),v.setAttribute("stroke-dasharray","5,3"),v.setAttribute("opacity","0.6"),v.setAttribute("data-rival",y),p.appendChild(v)}}h.appendChild(p);for(const{lt:g,x:m,y:f}of u){const x=document.createElement("div");x.className="mc-nemesis-node",x.dataset.id=g.id,x.style.left=m-32+"px",x.style.top=f-32+"px",g.alive||x.classList.add("mc-nemesis-node-dead"),g.shamed&&x.classList.add("mc-nemesis-node-shamed"),this.selectedId===g.id&&x.classList.add("mc-nemesis-node-selected");const y=gc(g.element),v=document.createElement("div");v.className="mc-nemesis-node-portrait",v.style.background=`radial-gradient(circle at 35% 35%, ${y}, ${y}99, ${y}55)`;const C=g.name?g.name.charAt(0).toUpperCase():"?";v.textContent=C,x.appendChild(v);const T=document.createElement("div");T.className="mc-nemesis-node-info";const A=document.createElement("div");A.className="mc-nemesis-node-name",A.textContent=g.name||"Unknown",T.appendChild(A);const I=document.createElement("div");I.className="mc-nemesis-node-rank",I.textContent=fc[g.rank]||"♟",T.appendChild(I);const b=document.createElement("div");b.className="mc-nemesis-node-level",b.textContent=`Lv ${g.level||"?"}`,T.appendChild(b);const w=document.createElement("span");w.className="mc-nemesis-node-status-tag",g.alive?g.shamed?(w.classList.add("mc-nemesis-tag-shamed"),w.textContent="Shamed"):(w.classList.add("mc-nemesis-tag-alive"),w.textContent="Active"):(w.classList.add("mc-nemesis-tag-dead"),w.textContent="Fallen"),T.appendChild(w),x.appendChild(T),x.onclick=()=>this.selectLieutenant(g.id),h.appendChild(x)}e.appendChild(h)}_highlightNode(){this.overlay.querySelectorAll(".mc-nemesis-node").forEach(t=>{t.dataset.id===String(this.selectedId)?t.classList.add("mc-nemesis-node-selected"):t.classList.remove("mc-nemesis-node-selected")})}_renderDetailPanel(){const e=this.overlay.querySelector("#mc-nemesis-detail-panel");if(!e)return;if(!this.selectedId){e.innerHTML='<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>';return}const t=this.lieutenants.find(o=>String(o.id)===String(this.selectedId));if(!t){e.innerHTML='<div class="mc-nemesis-detail-empty">Lieutenant not found.</div>';return}const n=gc(t.element),i=my[t.rank]||"Unknown Rank",s=fc[t.rank]||"♟";let a="";if(a+='<div style="text-align:center; margin-bottom: 16px;">',a+=`<div style="width:80px;height:80px;border-radius:50%;border:3px solid #c8a050;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,0.7);background:radial-gradient(circle at 35% 35%, ${n}, ${n}99, ${n}55);">`,a+=t.name?t.name.charAt(0).toUpperCase():"?",a+="</div>",a+=`<div class="mc-nemesis-detail-name">${t.name||"Unknown"}</div>`,a+=`<div class="mc-nemesis-detail-title">${s} ${i} · Level ${t.level||"?"}</div>`,t.alive||(a+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-dead">Fallen in Battle</span> '),t.shamed&&(a+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-shamed">Disgraced</span>'),t.alive&&!t.shamed&&(a+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-alive">Active Threat</span>'),a+="</div>",a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Element</div>',a+=`<span class="mc-nemesis-element-badge" style="background:${n};">${t.element?t.element.charAt(0).toUpperCase()+t.element.slice(1):"None"}</span>`,a+="</div>",t.stats){a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Combat Stats</div>',a+='<div class="mc-nemesis-stat-grid">';const o={hp:"HP",mp:"MP",atk:"ATK",def:"DEF",agi:"AGI",mag:"MAG"};for(const[l,c]of Object.entries(o)){const d=t.stats[l];d!=null&&(a+=`<div class="mc-nemesis-stat-row"><span class="mc-nemesis-stat-label">${c}</span><span class="mc-nemesis-stat-value">${d}</span></div>`)}a+="</div></div>"}if(t.strengths&&t.strengths.length>0&&(a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Strengths</div>',a+=`<div class="mc-nemesis-detail-value">${t.strengths.join(", ")}</div>`,a+="</div>"),t.weaknesses&&t.weaknesses.length>0&&(a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Weaknesses</div>',a+=`<div class="mc-nemesis-detail-value">${t.weaknesses.join(", ")}</div>`,a+="</div>"),t.personality&&(a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Personality</div>',a+=`<div class="mc-nemesis-detail-value">${t.personality}</div>`,a+="</div>"),t.grudges&&t.grudges.length>0){a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Grudges</div>',a+='<div class="mc-nemesis-detail-value">';for(const o of t.grudges)a+=`• ${o}<br>`;a+="</div></div>"}if(t.rivals&&t.rivals.length>0){const o=t.rivals.map(l=>{const c=this.lieutenants.find(d=>String(d.id)===String(l));return c?c.name:l});a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Rivals</div>',a+=`<div class="mc-nemesis-detail-value" style="color:#cc6666;">${o.join(", ")}</div>`,a+="</div>"}t.revealed&&t.backstory?(a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Backstory</div>',a+=`<div class="mc-nemesis-detail-value" style="font-style:italic;">${t.backstory}</div>`,a+="</div>"):t.revealed||(a+='<div class="mc-nemesis-detail-section">',a+='<div class="mc-nemesis-detail-label">Backstory</div>',a+='<div class="mc-nemesis-detail-value" style="font-style:italic;color:#665540;">? ? ? — Secrets yet to be uncovered ? ? ?</div>',a+="</div>"),e.innerHTML=a}}const xy=`
.mc-save-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.97), rgba(45, 30, 18, 0.97));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9002;
  overflow: hidden;
  padding: 30px 20px;
}

.mc-save-header {
  text-align: center;
  margin-bottom: 24px;
  flex-shrink: 0;
}

.mc-save-title {
  font-size: 28px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-save-subtitle {
  font-size: 14px;
  color: #b89860;
  font-style: italic;
  margin-top: 6px;
}

.mc-save-mode-indicator {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.mc-save-mode-save {
  background: rgba(200, 160, 80, 0.25);
  border: 1px solid #c8a050;
  color: #f5d090;
}

.mc-save-mode-load {
  background: rgba(80, 120, 200, 0.2);
  border: 1px solid #6080b0;
  color: #a0c0e0;
}

.mc-save-autosave-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #88bb66;
  margin-top: 8px;
}

.mc-save-autosave-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #66aa44;
  box-shadow: 0 0 4px #66aa44;
  animation: mc-pulse 2s infinite;
}

@keyframes mc-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.mc-save-slots {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 640px;
  overflow-y: auto;
  flex: 1;
  padding: 4px 8px;
}

.mc-save-slot {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 2px solid rgba(200, 160, 80, 0.35);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.18s, transform 0.12s, box-shadow 0.18s;
  min-height: 80px;
}

.mc-save-slot:hover {
  border-color: #c8a050;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.mc-save-slot-selected {
  border-color: #f5d090;
  box-shadow: 0 0 12px rgba(245, 208, 144, 0.25);
}

.mc-save-slot-empty {
  border-style: dashed;
  border-color: rgba(200, 160, 80, 0.2);
  opacity: 0.7;
}

.mc-save-slot-number {
  font-size: 28px;
  font-weight: bold;
  color: #c8a050;
  width: 44px;
  text-align: center;
  flex-shrink: 0;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}

.mc-save-slot-info {
  flex: 1;
  min-width: 0;
}

.mc-save-slot-name {
  font-size: 16px;
  font-weight: bold;
  color: #f0e0c0;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mc-save-slot-empty-label {
  font-size: 15px;
  color: #7a6a50;
  font-style: italic;
  margin-bottom: 4px;
}

.mc-save-slot-meta {
  font-size: 12px;
  color: #a89070;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
}

.mc-save-slot-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mc-save-slot-meta-label {
  color: #8a7050;
}

.mc-save-slot-meta-value {
  color: #c8b890;
  font-weight: bold;
}

.mc-save-slot-actions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.mc-save-action-btn {
  background: rgba(60, 42, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 12px;
  padding: 5px 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
  white-space: nowrap;
}

.mc-save-action-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-save-action-btn-delete {
  border-color: #8b3a3a;
  color: #cc8888;
}

.mc-save-action-btn-delete:hover {
  background: rgba(70, 30, 30, 0.7);
}

.mc-save-action-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.mc-save-close-btn {
  position: absolute;
  top: 20px;
  right: 24px;
  background: rgba(60, 40, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;
  transition: background 0.15s;
}

.mc-save-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-save-confirmation {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(40, 28, 16, 0.98), rgba(30, 20, 12, 0.98));
  border: 2px solid #c8a050;
  border-radius: 10px;
  padding: 28px 36px;
  text-align: center;
  z-index: 20;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
}

.mc-save-confirmation-text {
  font-size: 15px;
  color: #f0e0c0;
  margin-bottom: 20px;
  max-width: 360px;
  line-height: 1.5;
}

.mc-save-confirmation-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.mc-save-confirm-btn {
  background: rgba(60, 42, 25, 0.9);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 8px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.mc-save-confirm-btn:hover {
  background: rgba(80, 55, 30, 0.95);
}

.mc-save-confirm-btn-danger {
  border-color: #8b3a3a;
  color: #cc8888;
}

.mc-save-confirm-btn-danger:hover {
  background: rgba(70, 30, 30, 0.7);
}

.mc-save-toast {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(40, 28, 16, 0.95);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 6px;
  z-index: 30;
  animation: mc-fade-in 0.3s ease;
}

@keyframes mc-fade-in {
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.mc-save-naming-input {
  background: rgba(30, 20, 12, 0.9);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 16px;
  padding: 8px 14px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 12px;
  outline: none;
}

.mc-save-naming-input:focus {
  border-color: #f5d090;
  box-shadow: 0 0 6px rgba(245, 208, 144, 0.2);
}
`;let yc=!1;function vy(){if(yc)return;const r=document.createElement("style");r.id="mc-save-styles",r.textContent=xy,document.head.appendChild(r),yc=!0}const mn=["mcchronicles_save_0","mcchronicles_save_1","mcchronicles_save_2","mcchronicles_save_3","mcchronicles_save_4"],by={fry_valley:"Fry Valley",burger_highlands:"Burger Highlands",mcflurry_tundra:"McFlurry Tundra",happy_meal_forest:"Happy Meal Forest",drive_thru_desert:"Drive-Thru Desert",mccafe_springs:"McCafé Springs",play_place_plains:"Play Place Plains",golden_arches_castle:"Golden Arch Castle"};function My(r){if(!r||r<0)return"0:00";const e=Math.floor(r/3600),t=Math.floor(r%3600/60),n=Math.floor(r%60);return e>0?`${e}h ${t}m`:`${t}m ${n}s`}function Sy(r){if(!r)return"—";try{const e=new Date(r),t=e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),n=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});return`${t}, ${n}`}catch{return"—"}}class wy{constructor(){this.mode="save",this.game=null,this.overlay=null,this.visible=!1,this.selectedSlot=null,this._keyHandler=null,this._onClose=null,this._toastTimer=null}show(e,t,n){vy(),this.mode=e||"save",this.game=t||null,this._onClose=n||null,this.selectedSlot=null,this.visible=!0,this._render(),this._bindKeys()}hide(){this.visible=!1,this.selectedSlot=null,this._unbindKeys(),this._toastTimer&&(clearTimeout(this._toastTimer),this._toastTimer=null),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}save(e){if(!this.game){this._showToast("No game data available to save.");return}if(e<0||e>=mn.length)return;const t={name:`Save ${e+1}`,timestamp:Date.now(),playtime:this.game.playtime||0,partyLevel:this.game.partyLevel||1,currentRegion:this.game.currentRegion||"fry_valley",gameState:this.game.serialize?this.game.serialize():{...this.game}};this._showNamingDialog(e,t)}load(e){if(e<0||e>=mn.length)return;const t=localStorage.getItem(mn[e]);if(!t){this._showToast("That slot is empty.");return}try{const n=JSON.parse(t);this.game&&this.game.deserialize&&this.game.deserialize(n.gameState),this._showToast(`Loaded "${n.name}" successfully!`),setTimeout(()=>{this.hide(),this._onClose&&this._onClose("load",n)},800)}catch{this._showToast("Failed to load save: corrupted data.")}}deleteSlot(e){if(e<0||e>=mn.length)return;if(!localStorage.getItem(mn[e])){this._showToast("That slot is already empty.");return}this._showConfirmDialog("Delete this save? This cannot be undone.",()=>{localStorage.removeItem(mn[e]),this._showToast("Save deleted."),this._renderSlots()})}_bindKeys(){this._keyHandler=e=>{e.key==="Escape"&&(e.preventDefault(),this.hide(),this._onClose&&this._onClose("cancel"))},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_getSaveData(e){const t=localStorage.getItem(mn[e]);if(!t)return null;try{return JSON.parse(t)}catch{return null}}_hasAutoSave(){return localStorage.getItem("mcchronicles_autosave")!==null}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-save-overlay";const e=document.createElement("button");e.className="mc-save-close-btn",e.textContent="✕ Close",e.onclick=()=>{this.hide(),this._onClose&&this._onClose("cancel")},this.overlay.appendChild(e);const t=document.createElement("div");t.className="mc-save-header";const n=this.mode==="save"?"📜 Save Your Quest 📜":"📖 Load a Saved Quest 📖";t.innerHTML=`
      <h2 class="mc-save-title">${n}</h2>
      <div class="mc-save-subtitle">${this.mode==="save"?"Preserve your adventure for a future day":"Continue a journey once paused"}</div>
    `;const i=document.createElement("div");if(i.className=`mc-save-mode-indicator ${this.mode==="save"?"mc-save-mode-save":"mc-save-mode-load"}`,i.textContent=this.mode==="save"?"⬇ Saving":"⬆ Loading",t.appendChild(i),this._hasAutoSave()){const a=document.createElement("div");a.className="mc-save-autosave-indicator",a.innerHTML='<span class="mc-save-autosave-dot"></span> Auto-save active',t.appendChild(a)}this.overlay.appendChild(t);const s=document.createElement("div");s.className="mc-save-slots",s.id="mc-save-slots",this.overlay.appendChild(s),this._renderSlots(),document.body.appendChild(this.overlay)}_renderSlots(){const e=this.overlay.querySelector("#mc-save-slots");if(e){e.innerHTML="";for(let t=0;t<mn.length;t++){const n=this._getSaveData(t),i=document.createElement("div");i.className="mc-save-slot",n||i.classList.add("mc-save-slot-empty"),this.selectedSlot===t&&i.classList.add("mc-save-slot-selected");const s=document.createElement("div");s.className="mc-save-slot-number",s.textContent=(t+1).toString().padStart(2,"0"),i.appendChild(s);const a=document.createElement("div");if(a.className="mc-save-slot-info",n){const l=document.createElement("div");l.className="mc-save-slot-name",l.textContent=n.name||`Save ${t+1}`,a.appendChild(l);const c=document.createElement("div");c.className="mc-save-slot-meta",c.appendChild(this._metaItem("⏱",My(n.playtime))),c.appendChild(this._metaItem("Lv",n.partyLevel||1)),c.appendChild(this._metaItem("📍",by[n.currentRegion]||n.currentRegion||"Unknown")),c.appendChild(this._metaItem("🕒",Sy(n.timestamp))),a.appendChild(c)}else{const l=document.createElement("div");l.className="mc-save-slot-empty-label",l.textContent="— Empty Slot —",a.appendChild(l);const c=document.createElement("div");c.className="mc-save-slot-meta",c.style.color="#665540",c.textContent=this.mode==="save"?"Click to create a new save":"No data to load",a.appendChild(c)}i.appendChild(a);const o=document.createElement("div");if(o.className="mc-save-slot-actions",this.mode==="save"){const l=document.createElement("button");if(l.className="mc-save-action-btn",l.textContent=n?"Overwrite":"Save Here",l.onclick=c=>{c.stopPropagation(),this.save(t)},o.appendChild(l),n){const c=document.createElement("button");c.className="mc-save-action-btn mc-save-action-btn-delete",c.textContent="Delete",c.onclick=d=>{d.stopPropagation(),this.deleteSlot(t)},o.appendChild(c)}}else{const l=document.createElement("button");if(l.className="mc-save-action-btn",l.textContent="Load",l.disabled=!n,l.onclick=c=>{c.stopPropagation(),n&&this.load(t)},o.appendChild(l),n){const c=document.createElement("button");c.className="mc-save-action-btn mc-save-action-btn-delete",c.textContent="Delete",c.onclick=d=>{d.stopPropagation(),this.deleteSlot(t)},o.appendChild(c)}}i.appendChild(o),i.onclick=()=>{this.selectedSlot=t,this._renderSlots()},e.appendChild(i)}}}_metaItem(e,t){const n=document.createElement("span");return n.className="mc-save-slot-meta-item",n.innerHTML=`<span class="mc-save-slot-meta-label">${e}</span><span class="mc-save-slot-meta-value">${t}</span>`,n}_showNamingDialog(e,t){const n=document.createElement("div");n.className="mc-save-confirmation",n.id="mc-save-naming-dialog";const i=this._getSaveData(e),s=i?i.name:`Save ${e+1}`;n.innerHTML=`
      <div style="font-size:16px;color:#f5d090;font-weight:bold;margin-bottom:14px;">Name Your Save</div>
      <input type="text" class="mc-save-naming-input" id="mc-save-name-input" value="${this._escapeHtml(s)}" maxlength="30" />
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn" id="mc-save-confirm-save">Confirm Save</button>
        <button class="mc-save-confirm-btn" id="mc-save-cancel-save">Cancel</button>
      </div>
    `,this.overlay.appendChild(n);const a=n.querySelector("#mc-save-name-input");a.focus(),a.select();const o=()=>{const c=a.value.trim()||`Save ${e+1}`;t.name=c;try{localStorage.setItem(mn[e],JSON.stringify(t)),this._showToast(`Saved "${c}" to Slot ${e+1}!`),n.remove(),this._renderSlots()}catch{this._showToast("Failed to save: storage may be full."),n.remove()}},l=()=>{n.remove()};n.querySelector("#mc-save-confirm-save").onclick=o,n.querySelector("#mc-save-cancel-save").onclick=l,a.onkeydown=c=>{c.key==="Enter"?(c.preventDefault(),o()):c.key==="Escape"&&(c.preventDefault(),l())}}_showConfirmDialog(e,t){const n=document.createElement("div");n.className="mc-save-confirmation",n.innerHTML=`
      <div class="mc-save-confirmation-text">${e}</div>
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn mc-save-confirm-btn-danger" id="mc-confirm-yes">Delete</button>
        <button class="mc-save-confirm-btn" id="mc-confirm-no">Keep</button>
      </div>
    `,this.overlay.appendChild(n),n.querySelector("#mc-confirm-yes").onclick=()=>{n.remove(),t()},n.querySelector("#mc-confirm-no").onclick=()=>{n.remove()}}_showToast(e){this._toastTimer&&clearTimeout(this._toastTimer);const t=this.overlay.querySelector(".mc-save-toast");t&&t.remove();const n=document.createElement("div");n.className="mc-save-toast",n.textContent=e,this.overlay.appendChild(n),this._toastTimer=setTimeout(()=>{n.parentNode&&n.remove()},2500)}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}}const Qs=[{id:"fry_valley",name:"Fry Valley",x:.25,y:.55},{id:"burger_highlands",name:"Burger Highlands",x:.32,y:.28},{id:"mcflurry_tundra",name:"McFlurry Tundra",x:.48,y:.15},{id:"happy_meal_forest",name:"Happy Meal Forest",x:.15,y:.72},{id:"drive_thru_desert",name:"Drive-Thru Desert",x:.42,y:.72},{id:"mccafe_springs",name:"McCafé Springs",x:.58,y:.48},{id:"play_place_plains",name:"Play Place Plains",x:.68,y:.68},{id:"golden_arches_castle",name:"Golden Arch Castle",x:.85,y:.55}],Ey={fry_valley:["burger_highlands","happy_meal_forest"],burger_highlands:["fry_valley","mcflurry_tundra"],mcflurry_tundra:["burger_highlands","mccafe_springs"],happy_meal_forest:["fry_valley","drive_thru_desert"],drive_thru_desert:["happy_meal_forest","mccafe_springs","play_place_plains"],mccafe_springs:["mcflurry_tundra","drive_thru_desert","play_place_plains"],play_place_plains:["drive_thru_desert","mccafe_springs","golden_arches_castle"],golden_arches_castle:["play_place_plains"]},Ty=`
.mc-menu-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.96), rgba(45, 30, 18, 0.96));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  z-index: 9000;
  overflow: hidden;
}

.mc-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  border-bottom: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(60, 42, 25, 0.9), rgba(40, 28, 16, 0.6));
  flex-shrink: 0;
}

.mc-menu-title {
  font-size: 24px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-menu-close-btn {
  background: rgba(60, 40, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 13px;
  padding: 5px 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.mc-menu-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-menu-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mc-menu-tabs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px 0 16px 16px;
  border-right: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(40, 28, 16, 0.6), rgba(30, 20, 12, 0.3));
  flex-shrink: 0;
  width: 170px;
}

.mc-menu-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-family: Georgia, serif;
  font-size: 14px;
  color: #a89070;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px 0 0 6px;
  transition: all 0.15s ease;
  text-align: left;
  background: transparent;
  letter-spacing: 0.5px;
}

.mc-menu-tab:hover {
  color: #f0e0c0;
  background: rgba(60, 42, 25, 0.4);
}

.mc-menu-tab-active {
  color: #f5d090;
  background: linear-gradient(90deg, rgba(80, 55, 30, 0.6), rgba(60, 42, 25, 0.2));
  border-color: #c8a050;
  border-right-color: transparent;
  font-weight: bold;
}

.mc-menu-tab-icon {
  font-size: 18px;
  width: 22px;
  text-align: center;
}

.mc-menu-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px;
  position: relative;
}

.mc-menu-tab-panel {
  display: none;
}

.mc-menu-tab-panel-active {
  display: block;
}

/* ─── Party Tab ──────────────────────────────── */
.mc-party-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.mc-party-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 2px solid rgba(200, 160, 80, 0.35);
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.12s;
}

.mc-party-card:hover {
  border-color: #c8a050;
  transform: translateY(-3px);
}

.mc-party-card-selected {
  border-color: #f5d090;
  box-shadow: 0 4px 16px rgba(245, 208, 144, 0.15);
}

.mc-party-card-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.mc-party-portrait {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.mc-party-name {
  font-size: 16px;
  font-weight: bold;
  color: #f0e0c0;
  margin: 0;
}

.mc-party-title {
  font-size: 12px;
  color: #c8a050;
  font-style: italic;
}

.mc-party-level {
  font-size: 12px;
  color: #a89070;
}

.mc-party-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
  margin-bottom: 10px;
}

.mc-party-stat-row {
  display: flex;
  justify-content: space-between;
}

.mc-party-stat-label {
  color: #8a7050;
}

.mc-party-stat-value {
  color: #d8c8a0;
  font-weight: bold;
}

.mc-party-hp-bar, .mc-party-mp-bar {
  height: 8px;
  border-radius: 4px;
  background: rgba(30, 20, 10, 0.7);
  overflow: hidden;
  margin-bottom: 4px;
  position: relative;
}

.mc-party-hp-fill {
  height: 100%;
  background: linear-gradient(90deg, #cc4444, #ee6644);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.mc-party-mp-fill {
  height: 100%;
  background: linear-gradient(90deg, #4466cc, #6688ee);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.mc-party-bar-label {
  font-size: 10px;
  color: #a89070;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.mc-party-equipped {
  font-size: 11px;
  color: #a89070;
  margin-top: 8px;
  border-top: 1px solid rgba(200, 160, 80, 0.2);
  padding-top: 8px;
}

.mc-party-equipped-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.mc-party-equipped-slot {
  color: #8a7050;
}

.mc-party-equipped-item {
  color: #c8b890;
}

.mc-party-detail-overlay {
  position: absolute;
  top: 20px; left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, rgba(40, 28, 16, 0.98), rgba(30, 20, 12, 0.98));
  border: 2px solid #c8a050;
  border-radius: 12px;
  padding: 24px 32px;
  width: 420px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
  z-index: 20;
}

.mc-party-detail-close {
  position: absolute;
  top: 12px; right: 16px;
  background: transparent;
  border: none;
  color: #a89070;
  font-size: 20px;
  cursor: pointer;
}

.mc-party-detail-close:hover {
  color: #f5d090;
}

.mc-party-detail-description {
  font-size: 13px;
  color: #c8b890;
  font-style: italic;
  line-height: 1.5;
  margin: 12px 0;
  padding: 10px;
  background: rgba(30, 20, 12, 0.5);
  border-left: 3px solid #c8a050;
  border-radius: 0 6px 6px 0;
}

.mc-party-detail-section-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #b89860;
  margin: 14px 0 6px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
  padding-bottom: 2px;
}

.mc-party-ability-list {
  font-size: 13px;
  color: #d8c8a0;
  list-style: none;
  padding: 0;
}

.mc-party-ability-item {
  padding: 4px 0;
  border-bottom: 1px solid rgba(200, 160, 80, 0.1);
}

.mc-party-ability-name {
  font-weight: bold;
  color: #f5d090;
}

.mc-party-ability-desc {
  font-size: 11px;
  color: #a89070;
  margin-top: 2px;
}

/* ─── Items Tab ─────────────────────────────── */
.mc-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.mc-item-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.1s;
  position: relative;
}

.mc-item-card:hover {
  border-color: #c8a050;
  transform: scale(1.03);
}

.mc-item-icon {
  font-size: 28px;
  margin-bottom: 6px;
}

.mc-item-name {
  font-size: 12px;
  color: #f0e0c0;
  font-weight: bold;
  margin-bottom: 2px;
  line-height: 1.2;
}

.mc-item-type {
  font-size: 10px;
  color: #a89070;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mc-item-count {
  position: absolute;
  top: 4px; right: 6px;
  background: rgba(200, 160, 80, 0.3);
  color: #f5d090;
  font-size: 11px;
  font-weight: bold;
  padding: 1px 6px;
  border-radius: 8px;
}

.mc-item-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30, 20, 12, 0.98);
  border: 1px solid #c8a050;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 11px;
  color: #d8c8a0;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.mc-item-card:hover .mc-item-tooltip {
  opacity: 1;
}

.mc-items-empty {
  text-align: center;
  color: #7a6a50;
  font-style: italic;
  padding: 40px;
  font-size: 14px;
}

.mc-item-action-popup {
  position: absolute;
  background: rgba(30, 20, 12, 0.98);
  border: 1px solid #c8a050;
  border-radius: 6px;
  padding: 6px;
  z-index: 30;
  box-shadow: 0 4px 16px rgba(0,0,0,0.6);
}

.mc-item-action-btn {
  display: block;
  background: transparent;
  border: none;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 13px;
  padding: 6px 18px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  transition: background 0.12s;
}

.mc-item-action-btn:hover {
  background: rgba(60, 42, 25, 0.7);
}

/* ─── Abilities Tab ─────────────────────────── */
.mc-abilities-member-select {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.mc-abilities-member-btn {
  background: rgba(50, 35, 20, 0.7);
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: Georgia, serif;
  font-size: 13px;
  color: #a89070;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.mc-abilities-member-btn:hover {
  border-color: #c8a050;
  color: #f0e0c0;
}

.mc-abilities-member-btn-active {
  border-color: #f5d090;
  color: #f5d090;
  background: rgba(70, 50, 28, 0.7);
}

.mc-abilities-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mc-ability-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.6));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.mc-ability-icon {
  font-size: 24px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(60, 42, 25, 0.6);
  border: 1px solid rgba(200, 160, 80, 0.3);
}

.mc-ability-info {
  flex: 1;
}

.mc-ability-name {
  font-size: 15px;
  font-weight: bold;
  color: #f5d090;
  margin-bottom: 2px;
}

.mc-ability-meta {
  font-size: 11px;
  color: #a89070;
  margin-bottom: 6px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mc-ability-meta-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.mc-ability-desc {
  font-size: 12px;
  color: #c8b890;
  font-style: italic;
  line-height: 1.4;
}

.mc-ability-locked {
  opacity: 0.5;
}

.mc-ability-lock-icon {
  color: #8b3a3a;
}

/* ─── Map Tab ───────────────────────────────── */
.mc-map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.mc-map-svg {
  width: 100%;
  height: 100%;
  max-height: 520px;
}

.mc-map-node {
  cursor: pointer;
  transition: filter 0.15s;
}

.mc-map-node:hover {
  filter: brightness(1.3) drop-shadow(0 0 6px rgba(245, 208, 144, 0.5));
}

.mc-map-node-current circle {
  filter: drop-shadow(0 0 8px #f5d090);
}

.mc-map-legend {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 12px;
  font-size: 12px;
  color: #a89070;
}

.mc-map-legend-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}

/* ─── Quests Tab ────────────────────────────── */
.mc-quests-section {
  margin-bottom: 24px;
}

.mc-quests-section-title {
  font-size: 16px;
  color: #f5d090;
  font-weight: bold;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
}

.mc-quest-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.6));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.mc-quest-name {
  font-size: 15px;
  font-weight: bold;
  color: #f5d090;
  margin-bottom: 4px;
}

.mc-quest-giver {
  font-size: 12px;
  color: #a89070;
  font-style: italic;
  margin-bottom: 8px;
}

.mc-quest-description {
  font-size: 13px;
  color: #c8b890;
  line-height: 1.5;
  margin-bottom: 8px;
}

.mc-quest-objective {
  font-size: 12px;
  color: #d8c8a0;
  background: rgba(30, 20, 12, 0.5);
  padding: 6px 10px;
  border-radius: 4px;
  border-left: 3px solid #c8a050;
  margin-bottom: 8px;
}

.mc-quest-reward {
  font-size: 12px;
  color: #88bb66;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mc-quests-empty {
  text-align: center;
  color: #7a6a50;
  font-style: italic;
  padding: 30px;
  font-size: 14px;
}

/* ─── Sub-menu containers ───────────────────── */
.mc-submenu-container {
  width: 100%;
  height: 100%;
}

/* ─── Scrollbar styling ─────────────────────── */
.mc-menu-content::-webkit-scrollbar {
  width: 10px;
}

.mc-menu-content::-webkit-scrollbar-track {
  background: rgba(30, 20, 12, 0.5);
  border-radius: 5px;
}

.mc-menu-content::-webkit-scrollbar-thumb {
  background: rgba(200, 160, 80, 0.4);
  border-radius: 5px;
}

.mc-menu-content::-webkit-scrollbar-thumb:hover {
  background: rgba(200, 160, 80, 0.6);
}
`;let xc=!1;function Ay(){if(xc)return;const r=document.createElement("style");r.id="mc-menu-styles",r.textContent=Ty,document.head.appendChild(r),xc=!0}const vc={consumable:"🧪",equipment:"⚔",accessory:"💍",key_item:"🗝",craft:"🔨"},bc={consumable:"Consumable",equipment:"Equipment",accessory:"Accessory",key_item:"Key Item",craft:"Crafting"},Mc={fire:"🔥",water:"💧",earth:"🏔",air:"💨",light:"✨",dark:"🌑",lightning:"⚡",ice:"❄",nature:"🌿",none:"⭐"};function ha(r){return typeof r!="number"?"#c8a050":"#"+(r&16777215).toString(16).padStart(6,"0")}function Cy(r){const e=Qs.find(t=>t.id===r);return e?e.name:r}const gn=[{id:"party",label:"Party",icon:"👥"},{id:"items",label:"Items",icon:"🎒"},{id:"abilities",label:"Abilities",icon:"✨"},{id:"map",label:"Map",icon:"🗺"},{id:"nemesis",label:"Nemesis",icon:"⚔"},{id:"quests",label:"Quests",icon:"📜"},{id:"familiars",label:"Familiars",icon:"🐾"},{id:"save",label:"Save",icon:"💾"}];class Ry{constructor(){this.party=[],this.nemesisSystem=null,this.questSystem=null,this.currentTab="party",this.overlay=null,this.visible=!1,this.selectedMemberIdx=0,this.selectedAbilityMemberIdx=0,this.currentRegion="fry_valley",this.discoveredRegions=new Set(["fry_valley"]),this.inventory={},this.abilitiesData={},this.itemsData={},this.sideQuests=[],this.activeQuests=[],this._keyHandler=null,this._nemesisMenu=new yy,this._saveMenu=new wy,this._familiarMenu=null,this._tabFocusIdx=0,this._detailOverlay=null,this._actionPopup=null}show(e,t,n){Ay(),this.party=e||[],this.nemesisSystem=t||null,this.questSystem=n||null,n&&(this.sideQuests=n.sideQuests||n.availableQuests||[],this.activeQuests=n.activeQuests||[],this.currentRegion=n.currentRegion||this.currentRegion,this.discoveredRegions=new Set(n.discoveredRegions||["fry_valley"])),n&&n.inventory&&(this.inventory=n.inventory),n&&n.items&&(this.itemsData=n.items),n&&n.abilities&&(this.abilitiesData=n.abilities),t&&t.currentRegion&&(this.currentRegion=t.currentRegion),t&&t.discoveredRegions&&(this.discoveredRegions=new Set(t.discoveredRegions)),this.visible=!0,this.currentTab="party",this._tabFocusIdx=0,this._render(),this._bindKeys()}hide(){this.visible=!1,this._unbindKeys(),this._closeDetail(),this._closeActionPopup(),this._nemesisMenu.hide(),this._saveMenu.hide(),this._familiarMenu&&this._familiarMenu.hide&&this._familiarMenu.hide(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}update(){!this.visible||!this.overlay||this._renderTabContent(this.currentTab)}_bindKeys(){this._keyHandler=e=>{if(e.key==="Escape"){if(e.preventDefault(),this._detailOverlay){this._closeDetail();return}if(this._actionPopup){this._closeActionPopup();return}this.hide();return}e.key==="ArrowUp"?(e.preventDefault(),this._tabFocusIdx=(this._tabFocusIdx-1+gn.length)%gn.length,this._switchTab(gn[this._tabFocusIdx].id)):e.key==="ArrowDown"&&(e.preventDefault(),this._tabFocusIdx=(this._tabFocusIdx+1)%gn.length,this._switchTab(gn[this._tabFocusIdx].id))},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_switchTab(e){if(this.currentTab==="nemesis"&&this._nemesisMenu.visible||this.currentTab==="save"&&this._saveMenu.visible||this.currentTab==="familiars"&&this._familiarMenu&&this._familiarMenu.visible)return;this.currentTab=e,this._tabFocusIdx=gn.findIndex(i=>i.id===e),this._closeDetail(),this._closeActionPopup(),this.overlay.querySelectorAll(".mc-menu-tab").forEach((i,s)=>{gn[s].id===e?i.classList.add("mc-menu-tab-active"):i.classList.remove("mc-menu-tab-active")}),this.overlay.querySelectorAll(".mc-menu-tab-panel").forEach(i=>{i.dataset.tab===e?i.classList.add("mc-menu-tab-panel-active"):i.classList.remove("mc-menu-tab-panel-active")}),this._renderTabContent(e)}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-menu-overlay";const e=document.createElement("div");e.className="mc-menu-header",e.innerHTML='<h2 class="mc-menu-title">⚜ McChronicles ⚜</h2>';const t=document.createElement("button");t.className="mc-menu-close-btn",t.textContent="✕ Close (Esc)",t.onclick=()=>this.hide(),e.appendChild(t),this.overlay.appendChild(e);const n=document.createElement("div");n.className="mc-menu-body";const i=document.createElement("div");i.className="mc-menu-tabs",gn.forEach((a,o)=>{const l=document.createElement("button");l.className="mc-menu-tab",o===this._tabFocusIdx&&l.classList.add("mc-menu-tab-active"),l.innerHTML=`<span class="mc-menu-tab-icon">${a.icon}</span> ${a.label}`,l.onclick=()=>{this._tabFocusIdx=o,this._switchTab(a.id)},i.appendChild(l)}),n.appendChild(i);const s=document.createElement("div");s.className="mc-menu-content",s.id="mc-menu-content",gn.forEach(a=>{const o=document.createElement("div");o.className="mc-menu-tab-panel",o.dataset.tab=a.id,a.id===this.currentTab&&o.classList.add("mc-menu-tab-panel-active"),o.id=`mc-panel-${a.id}`,s.appendChild(o)}),n.appendChild(s),this.overlay.appendChild(n),document.body.appendChild(this.overlay),this._renderTabContent(this.currentTab)}_renderTabContent(e){switch(e){case"party":this._renderPartyTab();break;case"items":this._renderItemsTab();break;case"abilities":this._renderAbilitiesTab();break;case"map":this._renderMapTab();break;case"nemesis":this._renderNemesisTab();break;case"quests":this._renderQuestsTab();break;case"familiars":this._renderFamiliarsTab();break;case"save":this._renderSaveTab();break}}_renderPartyTab(){const e=this.overlay.querySelector("#mc-panel-party");if(!e)return;if(e.innerHTML="",this.party.length===0){e.innerHTML='<div class="mc-items-empty">No party members yet. Your adventure awaits!</div>';return}const t=document.createElement("div");t.className="mc-party-grid",this.party.forEach((n,i)=>{const s=document.createElement("div");s.className="mc-party-card",this.selectedMemberIdx===i&&s.classList.add("mc-party-card-selected");const a=ha(n.color),o=n.name?n.name.charAt(0).toUpperCase():"?",l=n.baseStats||{},c=l.hp||0,d=l.mp||0,u=c,h=d;s.innerHTML=`
        <div class="mc-party-card-top">
          <div class="mc-party-portrait" style="background: radial-gradient(circle at 35% 35%, ${a}, ${a}aa, ${a}66);">${o}</div>
          <div>
            <div class="mc-party-name">${n.name||"Unknown"}</div>
            <div class="mc-party-title">${n.title||""}</div>
            <div class="mc-party-level">Level ${n.level||1} · ${n.element||"None"}</div>
          </div>
        </div>
        <div class="mc-party-stats">
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">ATK</span><span class="mc-party-stat-value">${l.atk||0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">DEF</span><span class="mc-party-stat-value">${l.def||0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">AGI</span><span class="mc-party-stat-value">${l.agi||0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">MAG</span><span class="mc-party-stat-value">${l.mag||0}</span></div>
        </div>
        <div class="mc-party-bar-label"><span>HP</span><span>${u}/${u}</span></div>
        <div class="mc-party-hp-bar"><div class="mc-party-hp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-bar-label"><span>MP</span><span>${h}/${h}</span></div>
        <div class="mc-party-mp-bar"><div class="mc-party-mp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-equipped">
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${n.weapon||"—"}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${n.armor||"—"}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${n.accessory||"—"}</span></div>
        </div>
      `,s.onclick=()=>{this.selectedMemberIdx=i,this._showPartyDetail(n,i),this._renderPartyTab()},t.appendChild(s)}),e.appendChild(t),this._detailOverlay&&this.selectedMemberIdx!==null&&this._showPartyDetail(this.party[this.selectedMemberIdx],this.selectedMemberIdx)}_showPartyDetail(e,t){if(this._closeDetail(),!e)return;const n=document.createElement("div");n.className="mc-party-detail-overlay",n.id="mc-party-detail";const i=ha(e.color),s=e.name?e.name.charAt(0).toUpperCase():"?",a=e.baseStats||{},o=Mc[e.element]||"⭐";let l='<button class="mc-party-detail-close" id="mc-detail-close">✕</button>';if(l+='<div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">',l+=`<div class="mc-party-portrait" style="width:64px;height:64px;font-size:28px;background:radial-gradient(circle at 35% 35%, ${i}, ${i}aa, ${i}66);">${s}</div>`,l+=`<div><div class="mc-party-name" style="font-size:20px;">${e.name||"Unknown"}</div>`,l+=`<div class="mc-party-title">${e.title||""}</div>`,l+=`<div class="mc-party-level">Level ${e.level||1} · ${o} ${e.element||"None"} · ${e.role||"Adventurer"}</div></div></div>`,e.description&&(l+=`<div class="mc-party-detail-description">${e.description}</div>`),l+='<div class="mc-party-detail-section-title">Base Stats</div>',l+='<div class="mc-party-stats">',l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">HP</span><span class="mc-party-stat-value">${a.hp||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">MP</span><span class="mc-party-stat-value">${a.mp||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">ATK</span><span class="mc-party-stat-value">${a.atk||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">DEF</span><span class="mc-party-stat-value">${a.def||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">AGI</span><span class="mc-party-stat-value">${a.agi||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">MAG</span><span class="mc-party-stat-value">${a.mag||0}</span></div>`,l+="</div>",e.growth){l+='<div class="mc-party-detail-section-title">Growth Rates</div>',l+='<div class="mc-party-stats">';const c=e.growth;for(const[d,u]of Object.entries(c))l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">${d.toUpperCase()}</span><span class="mc-party-stat-value">+${u}</span></div>`;l+="</div>"}if(l+='<div class="mc-party-detail-section-title">Equipment</div>',l+='<div class="mc-party-equipped">',l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${e.weapon||"—"}</span></div>`,l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${e.armor||"—"}</span></div>`,l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${e.accessory||"—"}</span></div>`,l+="</div>",e.abilityTree&&e.abilityTree.length>0){l+='<div class="mc-party-detail-section-title">Abilities</div>',l+='<ul class="mc-party-ability-list">';for(const c of e.abilityTree){const d=c.ability||"Unknown",u=this.abilitiesData[d]||this.abilitiesData[c.ability]||null,h=u?u.description:"",p=(e.level||1)<(c.level||1);l+=`<li class="mc-party-ability-item ${p?"mc-ability-locked":""}">`,l+=`<div class="mc-party-ability-name">${p?"🔒 ":""}${d}`,l+=` <span style="font-size:11px;color:#a89070;">(Lv ${c.level})</span></div>`,h&&(l+=`<div class="mc-party-ability-desc">${h}</div>`),l+="</li>"}l+="</ul>"}n.innerHTML=l,this.overlay.querySelector("#mc-menu-content").appendChild(n),this._detailOverlay=n,n.querySelector("#mc-detail-close").onclick=()=>this._closeDetail()}_closeDetail(){this._detailOverlay&&(this._detailOverlay.remove(),this._detailOverlay=null)}_renderItemsTab(){const e=this.overlay.querySelector("#mc-panel-items");if(!e)return;if(e.innerHTML="",Object.keys(this.inventory||{}).length===0&&Object.entries(this.itemsData||{}).length===0){e.innerHTML='<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';return}const n=document.createElement("div");n.className="mc-items-grid";const i=Object.entries(this.inventory||{}),s=Object.entries(this.itemsData||{}).filter(([o])=>!this.inventory||!(o in this.inventory)),a=[...i,...s.map(([o,l])=>[o,{count:1,...l}])];if(a.length===0){e.innerHTML='<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';return}for(const[o,l]of a){const c=this.itemsData&&this.itemsData[o]?this.itemsData[o]:null;if(!c&&typeof l!="object")continue;const d=c||l,u=this.inventory&&this.inventory[o]&&this.inventory[o].count||1;if(u<=0)continue;const h=document.createElement("div");h.className="mc-item-card";const p=vc[d.type]||"📦",_=d.description||"";h.innerHTML=`
        <div class="mc-item-icon">${p}</div>
        <div class="mc-item-name">${d.name||o}</div>
        <div class="mc-item-type">${bc[d.type]||d.type||""}</div>
        ${u>1?`<div class="mc-item-count">×${u}</div>`:""}
        ${_?`<div class="mc-item-tooltip">${_}</div>`:""}
      `,h.onclick=g=>{g.stopPropagation(),this._showItemActions(o,d,h)},n.appendChild(h)}e.appendChild(n)}_showItemActions(e,t,n){this._closeActionPopup();const i=document.createElement("div");i.className="mc-item-action-popup";const s=t.type,a=[];s==="consumable"?a.push({label:"🧪 Use",action:"use"}):s==="equipment"?a.push({label:"⚔ Equip",action:"equip"}):s==="accessory"&&a.push({label:"💍 Equip",action:"equip"}),a.push({label:"📋 Examine",action:"examine"});for(const c of a){const d=document.createElement("button");d.className="mc-item-action-btn",d.textContent=c.label,d.onclick=u=>{u.stopPropagation(),this._closeActionPopup(),this._handleItemAction(e,t,c.action)},i.appendChild(d)}const o=n.getBoundingClientRect(),l=this.overlay.getBoundingClientRect();i.style.left=o.left-l.left+o.width/2+"px",i.style.top=o.bottom-l.top+4+"px",i.style.transform="translateX(-50%)",this.overlay.appendChild(i),this._actionPopup=i,setTimeout(()=>{const c=d=>{i.contains(d.target)||(this._closeActionPopup(),document.removeEventListener("click",c))};document.addEventListener("click",c)},0)}_closeActionPopup(){this._actionPopup&&(this._actionPopup.remove(),this._actionPopup=null)}_handleItemAction(e,t,n){if(n==="use")this.questSystem&&typeof this.questSystem.useItem=="function"&&this.questSystem.useItem(e),this.update();else if(n==="equip")this.questSystem&&typeof this.questSystem.equipItem=="function"&&this.questSystem.equipItem(e),this.update();else if(n==="examine"){this._closeDetail();const i=document.createElement("div");i.className="mc-party-detail-overlay",i.style.width="360px",i.innerHTML=`
        <button class="mc-party-detail-close" id="mc-item-detail-close">✕</button>
        <div style="font-size:28px;text-align:center;margin-bottom:8px;">${vc[t.type]||"📦"}</div>
        <div style="font-size:18px;font-weight:bold;color:#f5d090;text-align:center;margin-bottom:4px;">${t.name||e}</div>
        <div style="font-size:12px;color:#a89070;text-align:center;margin-bottom:14px;">${bc[t.type]||t.type}</div>
        <div class="mc-party-detail-description">${t.description||"A mysterious item."}</div>
        ${t.price?`<div style="font-size:13px;color:#c8a050;text-align:center;">💰 Worth ${t.price} gold</div>`:""}
        ${t.statBoost?`<div style="font-size:12px;color:#88bb66;margin-top:10px;"><strong>Stat Boost:</strong> ${JSON.stringify(t.statBoost)}</div>`:""}
        ${t.power?`<div style="font-size:12px;color:#cc8844;margin-top:6px;"><strong>Power:</strong> ${t.power}</div>`:""}
        ${t.effect?`<div style="font-size:12px;color:#a0c0e0;margin-top:6px;"><strong>Effect:</strong> ${t.effect}</div>`:""}
        ${t.slot?`<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Slot:</strong> ${t.slot}</div>`:""}
        ${t.target?`<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Target:</strong> ${t.target}</div>`:""}
      `,this.overlay.querySelector("#mc-menu-content").appendChild(i),this._detailOverlay=i,i.querySelector("#mc-item-detail-close").onclick=()=>this._closeDetail()}}_renderAbilitiesTab(){const e=this.overlay.querySelector("#mc-panel-abilities");if(!e)return;if(e.innerHTML="",this.party.length===0){e.innerHTML='<div class="mc-items-empty">No party members to show abilities for.</div>';return}const t=document.createElement("div");t.className="mc-abilities-member-select",this.party.forEach((a,o)=>{const l=document.createElement("button");l.className="mc-abilities-member-btn",this.selectedAbilityMemberIdx===o&&l.classList.add("mc-abilities-member-btn-active");const c=ha(a.color);l.innerHTML=`<span style="width:16px;height:16px;border-radius:50%;background:${c};display:inline-block;border:1px solid #c8a050;"></span> ${a.name||"Unknown"}`,l.onclick=()=>{this.selectedAbilityMemberIdx=o,this._renderAbilitiesTab()},t.appendChild(l)}),e.appendChild(t);const n=this.party[this.selectedAbilityMemberIdx];if(!n)return;const i=n.abilityTree||[];if(i.length===0){e.innerHTML+='<div class="mc-items-empty">This character has no abilities yet.</div>';return}const s=document.createElement("div");s.className="mc-abilities-list";for(const a of i){const o=a.ability,l=this.abilitiesData[o]||{name:o,description:""},c=(n.level||1)<(a.level||1),d=Mc[l.element]||"⭐",u=document.createElement("div");u.className="mc-ability-card"+(c?" mc-ability-locked":"");let h=[];l.type&&h.push(`<span class="mc-ability-meta-item">${l.type}</span>`),l.element&&h.push(`<span class="mc-ability-meta-item">${d} ${l.element}</span>`),l.mpCost&&h.push(`<span class="mc-ability-meta-item">MP: ${l.mpCost}</span>`),l.power&&h.push(`<span class="mc-ability-meta-item">PWR: ${l.power}</span>`),l.target&&h.push(`<span class="mc-ability-meta-item">→ ${l.target}</span>`),l.hits&&h.push(`<span class="mc-ability-meta-item">×${l.hits} hits</span>`),u.innerHTML=`
        <div class="mc-ability-icon">${c?"🔒":d}</div>
        <div class="mc-ability-info">
          <div class="mc-ability-name">${l.name||o} <span style="font-size:11px;color:#a89070;">(Lv ${a.level})</span></div>
          <div class="mc-ability-meta">${h.join("")}</div>
          <div class="mc-ability-desc">${l.description||"A mysterious ability."}</div>
        </div>
      `,s.appendChild(u)}e.appendChild(s)}_renderMapTab(){const e=this.overlay.querySelector("#mc-panel-map");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-map-container";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("mc-map-svg"),n.setAttribute("viewBox","0 0 1000 600"),n.setAttribute("preserveAspectRatio","xMidYMid meet");const i=new Set;for(const[a,o]of Object.entries(Ey)){const l=Qs.find(c=>c.id===a);if(l)for(const c of o){const d=[a,c].sort().join("-");if(i.has(d))continue;i.add(d);const u=Qs.find(_=>_.id===c);if(!u)continue;const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1",l.x*1e3),h.setAttribute("y1",l.y*600),h.setAttribute("x2",u.x*1e3),h.setAttribute("y2",u.y*600);const p=this.discoveredRegions.has(a)&&this.discoveredRegions.has(c);h.setAttribute("stroke",p?"#c8a050":"#4a3a25"),h.setAttribute("stroke-width","2.5"),h.setAttribute("opacity",p?"0.6":"0.3"),p||h.setAttribute("stroke-dasharray","5,5"),n.appendChild(h)}}for(const a of Qs){const o=this.discoveredRegions.has(a.id),l=this.currentRegion===a.id,c=a.x*1e3,d=a.y*600,u=document.createElementNS("http://www.w3.org/2000/svg","g");if(u.classList.add("mc-map-node"),l&&u.classList.add("mc-map-node-current"),u.dataset.regionId=a.id,u.style.cursor=o?"pointer":"default",l){const p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("cx",c),p.setAttribute("cy",d),p.setAttribute("r","32"),p.setAttribute("fill","rgba(245, 208, 144, 0.15)"),u.appendChild(p)}const h=document.createElementNS("http://www.w3.org/2000/svg","circle");if(h.setAttribute("cx",c),h.setAttribute("cy",d),h.setAttribute("r",l?"22":"16"),h.setAttribute("fill",o?l?"#f5d090":"#c8a050":"#3a2a1a"),h.setAttribute("stroke",o?"#f5d090":"#5a4a35"),h.setAttribute("stroke-width",l?"3":"2"),u.appendChild(h),o){const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d+38),p.setAttribute("text-anchor","middle"),p.setAttribute("fill",l?"#f5d090":"#c8b890"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","14"),p.setAttribute("font-weight",l?"bold":"normal"),p.textContent=a.name,u.appendChild(p)}else{const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d+38),p.setAttribute("text-anchor","middle"),p.setAttribute("fill","#5a4a35"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","12"),p.setAttribute("font-style","italic"),p.textContent="???",u.appendChild(p)}if(l){const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d-30),p.setAttribute("text-anchor","middle"),p.setAttribute("fill","#f5d090"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","20"),p.textContent="⬇",u.appendChild(p)}o&&(u.onclick=()=>{this.currentRegion=a.id,this._renderMapTab()}),n.appendChild(u)}t.appendChild(n);const s=document.createElement("div");s.className="mc-map-legend",s.innerHTML=`
      <div><span class="mc-map-legend-dot" style="background:#f5d090;"></span> Current Location</div>
      <div><span class="mc-map-legend-dot" style="background:#c8a050;"></span> Discovered</div>
      <div><span class="mc-map-legend-dot" style="background:#3a2a1a;border:1px solid #5a4a35;"></span> Undiscovered</div>
    `,t.appendChild(s),e.appendChild(t)}_renderNemesisTab(){const e=this.overlay.querySelector("#mc-panel-nemesis");if(!e)return;e.innerHTML="";const t=document.createElement("div");if(t.className="mc-submenu-container",!this.nemesisSystem){t.innerHTML='<div class="mc-items-empty">Nemesis system not yet available. Continue your quest to unlock it.</div>',e.appendChild(t);return}e.appendChild(t),this._nemesisMenu.show(this.nemesisSystem,()=>{this._switchTab("party")})}_renderQuestsTab(){const e=this.overlay.querySelector("#mc-panel-quests");if(!e)return;e.innerHTML="";const t=document.createElement("div");if(t.className="mc-quests-section",t.innerHTML='<div class="mc-quests-section-title">⚔ Active Quests</div>',this.activeQuests&&this.activeQuests.length>0)for(const i of this.activeQuests)t.appendChild(this._createQuestCard(i,!0));else t.innerHTML+='<div class="mc-quests-empty">No active quests. Seek out quest givers in the world!</div>';e.appendChild(t);const n=document.createElement("div");if(n.className="mc-quests-section",n.innerHTML='<div class="mc-quests-section-title">📋 Available Quests</div>',this.sideQuests&&this.sideQuests.length>0){for(const i of this.sideQuests)this.activeQuests&&this.activeQuests.some(a=>a.id===i.id)||n.appendChild(this._createQuestCard(i,!1));n.children.length===1&&(n.innerHTML+='<div class="mc-quests-empty">No new quests available. Check back later!</div>')}else n.innerHTML+='<div class="mc-quests-empty">No available quests. Explore more to find new adventures!</div>';e.appendChild(n)}_createQuestCard(e,t){const n=document.createElement("div");n.className="mc-quest-card";const i=e.reward||{};let s=[];if(i.gold&&s.push(`💰 ${i.gold} gold`),i.items&&Array.isArray(i.items))for(const a of i.items)s.push(`🎁 ${typeof a=="string"?a:a.name||a.id||"Item"}`);return n.innerHTML=`
      <div class="mc-quest-name">${t?"▸ ":""}${e.name||e.id}</div>
      <div class="mc-quest-giver">Given by ${e.giver||"Unknown"} in ${Cy(e.region)||"Unknown"}</div>
      <div class="mc-quest-description">${e.description||""}</div>
      <div class="mc-quest-objective"><strong>Objective:</strong> ${e.objective||"—"}</div>
      <div class="mc-quest-reward"><strong>Reward:</strong> ${s.join(" · ")||"Unknown"}</div>
    `,n}_renderFamiliarsTab(){const e=this.overlay.querySelector("#mc-panel-familiars");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-submenu-container",t.id="mc-familiars-container",e.appendChild(t);try{this._familiarMenu?this._familiarMenu.show(this.questSystem||this.nemesisSystem,()=>{this._switchTab("party")}):fy(()=>import("./familiarMenu-D4zPoHSm.js"),[]).then(n=>{const i=n.default;this._familiarMenu=new i,this._familiarMenu.show(this.questSystem||this.nemesisSystem,()=>{this._switchTab("party")})}).catch(()=>{t.innerHTML=`
              <div class="mc-items-empty">
                <p style="font-size:16px;margin-bottom:8px;">🐾 Familiars</p>
                <p>The Familiar Menu has not yet been discovered in your world.</p>
                <p style="margin-top:10px;font-size:12px;color:#665540;">(familiarMenu.js not found)</p>
              </div>
            `})}catch{t.innerHTML=`
        <div class="mc-items-empty">
          <p style="font-size:16px;margin-bottom:8px;">🐾 Familiars</p>
          <p>The Familiar Menu has not yet been discovered in your world.</p>
        </div>
      `}}_renderSaveTab(){const e=this.overlay.querySelector("#mc-panel-save");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-submenu-container",e.appendChild(t);const n=this._buildGameSaveObject();this._saveMenu.show("save",n,()=>{this._switchTab("party")})}_buildGameSaveObject(){const e=this;return{playtime:this.questSystem&&this.questSystem.playtime||0,partyLevel:this.party.length>0?Math.max(...this.party.map(t=>t.level||1)):1,currentRegion:this.currentRegion,serialize(){return{party:e.party,currentRegion:e.currentRegion,discoveredRegions:Array.from(e.discoveredRegions),inventory:e.inventory,activeQuests:e.activeQuests,sideQuests:e.sideQuests,playtime:this.playtime,partyLevel:this.partyLevel}},deserialize(t){t&&(t.party&&(e.party=t.party),t.currentRegion&&(e.currentRegion=t.currentRegion),t.discoveredRegions&&(e.discoveredRegions=new Set(t.discoveredRegions)),t.inventory&&(e.inventory=t.inventory),t.activeQuests&&(e.activeQuests=t.activeQuests),t.sideQuests&&(e.sideQuests=t.sideQuests),e.questSystem&&(e.questSystem.party=e.party,e.questSystem.currentRegion=e.currentRegion,e.questSystem.discoveredRegions=Array.from(e.discoveredRegions),e.questSystem.inventory=e.inventory,e.questSystem.activeQuests=e.activeQuests,e.questSystem.sideQuests=e.sideQuests))}}}}class Ly{constructor(e){this.container=e,this.root=null,this.styleElement=null,this.elements={},this.callbacks={onSelectCommand:null,onSelectAbility:null,onSelectTarget:null,onSelectItem:null,onFlee:null},this._logMessages=[]}_injectCSS(){const e=`
      .mc-battle-ui {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        font-family: 'Cinzel', 'Trajan Pro', 'Times New Roman', Georgia, serif;
        z-index: 100;
        user-select: none;
      }

      .mc-battle-ui * {
        box-sizing: border-box;
      }

      /* === Party Status Panel (bottom-left) === */
      .mc-party-panel {
        position: absolute;
        bottom: 16px;
        left: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: auto;
      }

      .mc-party-card {
        background: rgba(26, 26, 46, 0.85);
        border: 2px solid #d4af37;
        border-radius: 8px;
        padding: 8px 12px;
        min-width: 220px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.3);
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      .mc-party-card.active-turn {
        border-color: #ffdd44;
        box-shadow: 0 0 16px rgba(255, 221, 68, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5);
      }

      .mc-party-card.dead {
        opacity: 0.5;
        filter: grayscale(0.8);
      }

      .mc-party-name {
        font-size: 14px;
        font-weight: bold;
        color: #d4af37;
        margin-bottom: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .mc-party-level {
        font-size: 11px;
        color: #aaa;
      }

      .mc-bar-row {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 3px;
      }

      .mc-bar-label {
        font-size: 10px;
        width: 22px;
        text-align: right;
        color: #ccc;
        font-weight: bold;
      }

      .mc-bar-container {
        flex: 1;
        height: 10px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #555;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
      }

      .mc-bar-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      .mc-bar-fill.hp { background: linear-gradient(to right, #2ecc40, #3dff5e); }
      .mc-bar-fill.mp { background: linear-gradient(to right, #0074d9, #39a0ff); }
      .mc-bar-fill.atb { background: linear-gradient(to right, #d4af37, #ffdd44); }

      .mc-bar-text {
        font-size: 9px;
        color: #ddd;
        min-width: 52px;
        text-align: right;
      }

      .mc-status-icons {
        display: flex;
        gap: 4px;
        margin-top: 3px;
        min-height: 16px;
      }

      .mc-status-icon {
        font-size: 12px;
        title: attr(data-name);
      }

      /* === Enemy Info (top) === */
      .mc-enemy-info {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .mc-enemy-info.visible {
        opacity: 1;
      }

      .mc-enemy-name {
        background: rgba(26, 26, 46, 0.85);
        border: 2px solid #d4af37;
        border-radius: 6px;
        padding: 4px 14px;
        font-size: 13px;
        color: #d4af37;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      }

      .mc-enemy-name.targeted {
        background: rgba(80, 20, 20, 0.9);
        border-color: #ff4444;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
      }

      .mc-enemy-name.dead {
        text-decoration: line-through;
        opacity: 0.4;
      }

      /* === Command Menu (bottom-right) === */
      .mc-command-menu {
        position: absolute;
        bottom: 16px;
        right: 16px;
        background: rgba(26, 26, 46, 0.9);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 12px;
        display: none;
        flex-direction: column;
        gap: 6px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.2);
        min-width: 140px;
      }

      .mc-command-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      @keyframes mc-slide-in {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }

      .mc-cmd-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 4px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-cmd-btn {
        background: rgba(40, 40, 60, 0.9);
        border: 1px solid #d4af37;
        border-radius: 6px;
        color: #e8d8a0;
        padding: 8px 16px;
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
        text-align: center;
      }

      .mc-cmd-btn:hover {
        background: rgba(212, 175, 55, 0.3);
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
        transform: scale(1.03);
      }

      .mc-cmd-btn:active {
        transform: scale(0.98);
      }

      .mc-cmd-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-cmd-btn.danger {
        border-color: #cc4444;
        color: #ff8888;
      }

      .mc-cmd-btn.danger:hover {
        background: rgba(204, 68, 68, 0.3);
        box-shadow: 0 0 8px rgba(204, 68, 68, 0.4);
      }

      /* === Ability Menu === */
      .mc-ability-menu {
        position: absolute;
        bottom: 16px;
        right: 180px;
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 10px;
        display: none;
        flex-direction: column;
        gap: 4px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        min-width: 280px;
        max-height: 320px;
        overflow-y: auto;
      }

      .mc-ability-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      .mc-ability-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-ability-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(40, 40, 60, 0.7);
        border: 1px solid #666;
        border-radius: 6px;
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
      }

      .mc-ability-entry:hover {
        background: rgba(212, 175, 55, 0.2);
        border-color: #d4af37;
      }

      .mc-ability-entry.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-ability-entry.disabled:hover {
        background: rgba(40, 40, 60, 0.7);
        border-color: #666;
      }

      .mc-ability-name {
        font-size: 12px;
        color: #e8d8a0;
        font-weight: bold;
      }

      .mc-ability-cost {
        font-size: 11px;
        color: #39a0ff;
        font-weight: bold;
      }

      .mc-ability-desc {
        font-size: 10px;
        color: #aaa;
        margin-top: 2px;
        width: 100%;
      }

      .mc-ability-back {
        margin-top: 6px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-ability-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Item Menu === */
      .mc-item-menu {
        position: absolute;
        bottom: 16px;
        right: 180px;
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 10px;
        display: none;
        flex-direction: column;
        gap: 4px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        min-width: 240px;
        max-height: 300px;
        overflow-y: auto;
      }

      .mc-item-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      .mc-item-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-item-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(40, 40, 60, 0.7);
        border: 1px solid #666;
        border-radius: 6px;
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
      }

      .mc-item-entry:hover {
        background: rgba(212, 175, 55, 0.2);
        border-color: #d4af37;
      }

      .mc-item-name {
        font-size: 12px;
        color: #e8d8a0;
        font-weight: bold;
      }

      .mc-item-qty {
        font-size: 11px;
        color: #aaa;
      }

      .mc-item-desc {
        font-size: 10px;
        color: #aaa;
        margin-top: 2px;
        width: 100%;
      }

      .mc-item-back {
        margin-top: 6px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-item-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Target Selector === */
      .mc-target-selector {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 14px;
        display: none;
        flex-direction: column;
        gap: 6px;
        pointer-events: auto;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
        min-width: 200px;
      }

      .mc-target-selector.visible {
        display: flex;
        animation: mc-fade-in 0.2s ease;
      }

      @keyframes mc-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .mc-target-title {
        font-size: 13px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 6px;
      }

      .mc-target-entry {
        background: rgba(40, 40, 60, 0.8);
        border: 1px solid #888;
        border-radius: 6px;
        padding: 8px 16px;
        font-size: 13px;
        color: #e8d8a0;
        cursor: pointer;
        text-align: center;
        transition: background 0.2s, border-color 0.2s, transform 0.1s;
      }

      .mc-target-entry:hover {
        background: rgba(204, 68, 68, 0.3);
        border-color: #ff4444;
        transform: scale(1.03);
      }

      .mc-target-entry.dead {
        text-decoration: line-through;
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-target-entry.ally:hover {
        background: rgba(68, 204, 68, 0.3);
        border-color: #44ff44;
      }

      .mc-target-back {
        margin-top: 4px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-target-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Battle Log (bottom-center) === */
      .mc-battle-log {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column-reverse;
        gap: 2px;
        pointer-events: none;
        max-width: 400px;
        text-align: center;
      }

      .mc-log-line {
        background: rgba(26, 26, 46, 0.8);
        border: 1px solid #555;
        border-radius: 4px;
        padding: 3px 10px;
        font-size: 12px;
        color: #ddd;
        animation: mc-log-fade 0.3s ease;
      }

      @keyframes mc-log-fade {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* === Victory / Defeat Screens === */
      .mc-victory-screen,
      .mc-defeat-screen {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        pointer-events: auto;
        z-index: 200;
      }

      .mc-victory-screen.visible {
        display: flex;
        background: rgba(0, 0, 0, 0.7);
        animation: mc-victory-glow 0.5s ease;
      }

      @keyframes mc-victory-glow {
        from { background: rgba(0, 0, 0, 0); }
        to { background: rgba(0, 0, 0, 0.7); }
      }

      .mc-defeat-screen.visible {
        display: flex;
        background: rgba(20, 0, 0, 0.8);
        animation: mc-defeat-fade 0.5s ease;
      }

      @keyframes mc-defeat-fade {
        from { background: rgba(20, 0, 0, 0); }
        to { background: rgba(20, 0, 0, 0.8); }
      }

      .mc-victory-title {
        font-size: 48px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.6), 0 4px 8px rgba(0,0,0,0.8);
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 4px;
      }

      .mc-defeat-title {
        font-size: 48px;
        color: #cc4444;
        text-shadow: 0 0 20px rgba(204, 68, 68, 0.6), 0 4px 8px rgba(0,0,0,0.8);
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 4px;
      }

      .mc-rewards {
        background: rgba(26, 26, 46, 0.9);
        border: 2px solid #d4af37;
        border-radius: 12px;
        padding: 20px 32px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
      }

      .mc-reward-line {
        font-size: 16px;
        color: #e8d8a0;
        text-align: center;
      }

      .mc-reward-line .value {
        color: #d4af37;
        font-weight: bold;
      }

      .mc-continue-btn {
        background: rgba(40, 40, 60, 0.9);
        border: 2px solid #d4af37;
        border-radius: 8px;
        color: #d4af37;
        padding: 12px 40px;
        font-size: 16px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
      }

      .mc-continue-btn:hover {
        background: rgba(212, 175, 55, 0.3);
        box-shadow: 0 0 12px rgba(212, 175, 55, 0.5);
        transform: scale(1.05);
      }

      .mc-continue-btn:active {
        transform: scale(0.98);
      }

      /* Scrollbar styling for menus */
      .mc-ability-menu::-webkit-scrollbar,
      .mc-item-menu::-webkit-scrollbar {
        width: 6px;
      }

      .mc-ability-menu::-webkit-scrollbar-track,
      .mc-item-menu::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.3);
        border-radius: 3px;
      }

      .mc-ability-menu::-webkit-scrollbar-thumb,
      .mc-item-menu::-webkit-scrollbar-thumb {
        background: #d4af37;
        border-radius: 3px;
      }
    `;this.styleElement=document.createElement("style"),this.styleElement.id="mc-battle-ui-style",this.styleElement.textContent=e,document.head.appendChild(this.styleElement)}create(){this._injectCSS(),this.root=document.createElement("div"),this.root.className="mc-battle-ui",this.elements.partyPanel=document.createElement("div"),this.elements.partyPanel.className="mc-party-panel",this.elements.enemyInfo=document.createElement("div"),this.elements.enemyInfo.className="mc-enemy-info",this.elements.commandMenu=document.createElement("div"),this.elements.commandMenu.className="mc-command-menu",this.elements.abilityMenu=document.createElement("div"),this.elements.abilityMenu.className="mc-ability-menu",this.elements.itemMenu=document.createElement("div"),this.elements.itemMenu.className="mc-item-menu",this.elements.targetSelector=document.createElement("div"),this.elements.targetSelector.className="mc-target-selector",this.elements.battleLog=document.createElement("div"),this.elements.battleLog.className="mc-battle-log",this.elements.victoryScreen=document.createElement("div"),this.elements.victoryScreen.className="mc-victory-screen",this.elements.defeatScreen=document.createElement("div"),this.elements.defeatScreen.className="mc-defeat-screen",this.root.appendChild(this.elements.partyPanel),this.root.appendChild(this.elements.enemyInfo),this.root.appendChild(this.elements.commandMenu),this.root.appendChild(this.elements.abilityMenu),this.root.appendChild(this.elements.itemMenu),this.root.appendChild(this.elements.targetSelector),this.root.appendChild(this.elements.battleLog),this.root.appendChild(this.elements.victoryScreen),this.root.appendChild(this.elements.defeatScreen),this.container.appendChild(this.root)}update(e,t,n){this.showPartyStatus(e,n),this.showEnemyInfo(t)}showPartyStatus(e,t=null){const n=this.elements.partyPanel;n.innerHTML="";for(const i of e){const s=document.createElement("div");s.className="mc-party-card",t&&i===t&&s.classList.add("active-turn"),i.isAlive()||s.classList.add("dead");const a=document.createElement("div");a.className="mc-party-name",a.innerHTML=`<span>${i.name}</span><span class="mc-party-level">Lv ${i.level}</span>`,s.appendChild(a);const o=this._createBar(i.hp,i.getMaxHP(),"hp","HP");s.appendChild(o);const l=this._createBar(i.mp,i.getMaxMP(),"mp","MP");s.appendChild(l);const c=this._createBar(i.atb||0,100,"atb","ATB");s.appendChild(c);const d=document.createElement("div");if(d.className="mc-status-icons",i.statusEffects)for(const[u]of Object.entries(i.statusEffects)){const h=document.createElement("span");h.className="mc-status-icon",h.textContent=this._getStatusIcon(u),h.title=u,d.appendChild(h)}s.appendChild(d),n.appendChild(s)}}showEnemyInfo(e){const t=this.elements.enemyInfo;if(t.innerHTML="",!e||e.length===0){t.classList.remove("visible");return}for(const n of e){const i=document.createElement("div");i.className="mc-enemy-name",i.textContent=n.name,n.isAlive()||i.classList.add("dead"),t.appendChild(i)}t.classList.add("visible")}showCommandMenu(e){const t=this.elements.commandMenu;t.innerHTML="";const n=document.createElement("div");n.className="mc-cmd-title",n.textContent=`${e.name}'s Turn`,t.appendChild(n);const i=[{label:"Attack",cmd:"attack",style:""},{label:"Ability",cmd:"ability",style:""},{label:"Item",cmd:"item",style:""},{label:"Defend",cmd:"defend",style:""},{label:"Flee",cmd:"flee",style:"danger"}];for(const s of i){const a=document.createElement("button");a.className="mc-cmd-btn",s.style&&a.classList.add(s.style),a.textContent=s.label,a.addEventListener("click",()=>{this.callbacks.onSelectCommand&&this.callbacks.onSelectCommand(s.cmd)}),t.appendChild(a)}t.classList.add("visible")}hideCommandMenu(){this.elements.commandMenu.classList.remove("visible")}showAbilityMenu(e){const t=this.elements.abilityMenu;t.innerHTML="";const n=document.createElement("div");n.className="mc-ability-title",n.textContent="Abilities",t.appendChild(n);const i=e.getAvailableAbilities?e.getAvailableAbilities():[];if(i.length===0){const a=document.createElement("div");a.className="mc-ability-entry disabled",a.innerHTML='<span class="mc-ability-name">No abilities available</span>',t.appendChild(a)}else for(const a of i){const o=document.createElement("div");o.className="mc-ability-entry";const l=e.mp>=a.mpCost;l||o.classList.add("disabled");const c=document.createElement("div");c.style.display="flex",c.style.justifyContent="space-between",c.style.width="100%";const d=document.createElement("span");d.className="mc-ability-name",d.textContent=a.name;const u=document.createElement("span");u.className="mc-ability-cost",u.textContent=`${a.mpCost} MP`,c.appendChild(d),c.appendChild(u),o.appendChild(c);const h=document.createElement("div");h.className="mc-ability-desc",h.textContent=a.description||"",o.appendChild(h),l&&o.addEventListener("click",()=>{this.callbacks.onSelectAbility&&this.callbacks.onSelectAbility(a.id)}),t.appendChild(o)}const s=document.createElement("div");s.className="mc-ability-back",s.textContent="← Back",s.addEventListener("click",()=>{this.hideAbilityMenu(),this.showCommandMenu(e)}),t.appendChild(s),t.classList.add("visible")}hideAbilityMenu(){this.elements.abilityMenu.classList.remove("visible")}showItemMenu(e){const t=this.elements.itemMenu;t.innerHTML="";const n=document.createElement("div");if(n.className="mc-item-title",n.textContent="Items",t.appendChild(n),!e||e.length===0){const s=document.createElement("div");s.className="mc-item-entry disabled",s.innerHTML='<span class="mc-item-name">No usable items</span>',t.appendChild(s)}else for(const s of e){const a=document.createElement("div");a.className="mc-item-entry";const o=document.createElement("div");o.style.display="flex",o.style.justifyContent="space-between",o.style.width="100%";const l=document.createElement("span");l.className="mc-item-name",l.textContent=s.data.name;const c=document.createElement("span");c.className="mc-item-qty",c.textContent=`x${s.quantity}`,o.appendChild(l),o.appendChild(c),a.appendChild(o);const d=document.createElement("div");d.className="mc-item-desc",d.textContent=s.data.description||"",a.appendChild(d),a.addEventListener("click",()=>{this.callbacks.onSelectItem&&this.callbacks.onSelectItem(s.itemId)}),t.appendChild(a)}const i=document.createElement("div");i.className="mc-item-back",i.textContent="← Back",i.addEventListener("click",()=>{this.hideItemMenu(),this._lastActiveEntity&&this.showCommandMenu(this._lastActiveEntity)}),t.appendChild(i),t.classList.add("visible")}hideItemMenu(){this.elements.itemMenu.classList.remove("visible")}showTargetSelect(e,t=!0){const n=this.elements.targetSelector;n.innerHTML="";const i=document.createElement("div");i.className="mc-target-title",i.textContent=t?"Select Enemy Target":"Select Ally Target",n.appendChild(i),e.forEach((a,o)=>{const l=document.createElement("div");l.className="mc-target-entry",t||l.classList.add("ally"),a.isAlive()||l.classList.add("dead");const c=a.isAlive()?` (${a.hp}/${a.getMaxHP()} HP)`:" (KO)";l.textContent=a.name+c,(a.isAlive()||!t)&&l.addEventListener("click",()=>{this.callbacks.onSelectTarget&&this.callbacks.onSelectTarget(o)}),n.appendChild(l)});const s=document.createElement("div");s.className="mc-target-back",s.textContent="← Back",s.addEventListener("click",()=>{this.hideTargetSelect(),this._lastActiveEntity&&this.showCommandMenu(this._lastActiveEntity)}),n.appendChild(s),n.classList.add("visible")}hideTargetSelect(){this.elements.targetSelector.classList.remove("visible")}showVictory(e){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect();const t=this.elements.victoryScreen;t.innerHTML="";const n=document.createElement("div");n.className="mc-victory-title",n.textContent="VICTORY!",t.appendChild(n);const i=document.createElement("div");i.className="mc-rewards";const s=document.createElement("div");s.className="mc-reward-line",s.innerHTML=`XP Gained: <span class="value">${e.xp}</span>`,i.appendChild(s);const a=document.createElement("div");if(a.className="mc-reward-line",a.innerHTML=`Gold Earned: <span class="value">${e.gold}</span>`,i.appendChild(a),e.items&&e.items.length>0){const l=document.createElement("div");l.className="mc-reward-line",l.innerHTML=`Items Found: <span class="value">${e.items.join(", ")}</span>`,i.appendChild(l)}t.appendChild(i);const o=document.createElement("button");o.className="mc-continue-btn",o.textContent="Continue",o.addEventListener("click",()=>{t.classList.remove("visible")}),t.appendChild(o),t.classList.add("visible")}showDefeat(){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect();const e=this.elements.defeatScreen;e.innerHTML="";const t=document.createElement("div");t.className="mc-defeat-title",t.textContent="DEFEAT...",e.appendChild(t);const n=document.createElement("button");n.className="mc-continue-btn",n.textContent="Continue",n.addEventListener("click",()=>{e.classList.remove("visible")}),e.appendChild(n),e.classList.add("visible")}showMessage(e){this._logMessages.push(e),this._logMessages.length>4&&this._logMessages.shift();const t=this.elements.battleLog;t.innerHTML="";const n=this._logMessages.slice(-4);for(const i of n){const s=document.createElement("div");s.className="mc-log-line",s.textContent=i,t.appendChild(s)}}createBar(e,t,n,i){return this._createBar(e,t,n,i)}_createBar(e,t,n,i){const s=document.createElement("div");s.className="mc-bar-row";const a=document.createElement("span");a.className="mc-bar-label",a.textContent=i,s.appendChild(a);const o=document.createElement("div");o.className="mc-bar-container";const l=document.createElement("div");l.className=`mc-bar-fill ${n}`;const c=t>0?ni(e/t*100,0,100):0;l.style.width=`${c}%`,o.appendChild(l),s.appendChild(o);const d=document.createElement("span");return d.className="mc-bar-text",d.textContent=`${Math.ceil(e)}/${Math.ceil(t)}`,s.appendChild(d),s}_getStatusIcon(e){return{burn:"🔥",freeze:"❄️",slow:"🐌",sleep:"💤",poison:"☠️",stun:"⚡",atk_up:"⬆️",atk_down:"⬇️",def_up:"🛡️",def_down:"💔",agi_up:"🏃",agi_down:"🦶",taunt:"😤",cover:"🛡️",regen:"💚",mp_regen:"💙"}[e]||"❓"}hide(){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect(),this.elements.enemyInfo.classList.remove("visible"),this.elements.victoryScreen.classList.remove("visible"),this.elements.defeatScreen.classList.remove("visible"),this.elements.partyPanel.innerHTML="",this.elements.battleLog.innerHTML=""}dispose(){this.hide(),this.root&&this.root.parentNode&&this.root.parentNode.removeChild(this.root),this.styleElement&&this.styleElement.parentNode&&this.styleElement.parentNode.removeChild(this.styleElement),this.root=null,this.styleElement=null,this.elements={},this._logMessages=[],this.callbacks={}}}const dt={TITLE:"title",OVERWORLD:"overworld",BATTLE:"battle",MENU:"menu",DIALOGUE:"dialogue",GAME_OVER:"game_over",VICTORY:"victory"};class Py{constructor(e){this.canvas=e||document.getElementById("game-canvas"),this.renderer=new rd({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.renderer.outputColorSpace=st,this.camera=new Lt(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,10,15),this.shaderManager=new md,this.assetManager=new O_(this.shaderManager),this.cameraController=new B_(this.camera),this.sceneManager=new z_(this.renderer,this.cameraController,this.assetManager),this.inputSystem=new G_,this.audioSystem=new V_,this.saveSystem=new q_,this.tweenManager=new j_,this.questSystem=new tc,this.questSystem.init(),this.nemesisSystem=new cs,this.nemesisSystem.init(),this.progressionSystem=new $_,this.clock=new w0,this.lastTime=0,this.state=dt.TITLE,this.previousState=null,this.party=[],this.partyMemberIds=[...ia],this.recruitedIds=[...ia],this.gold=100,this.inventory={},this.playTime=0,this.steps=0,this.familiars=[],this.equippedFamiliars={},this.currentRegionId="fry_valley",this.currentRegionData=null,this.playerPosition=new R(0,0,0),this.playerRotation=0,this.playerMesh=null,this.playerSpeed=5,this.playerSprintSpeed=8,this.stepCount=0,this.encounterCooldown=0,this.currentDialogue=null,this.dialogueIndex=0,this.dialogueComplete=!1,this.battleData=null,this.saveSlot="mcchronicles_save_1",this.titleScreen=new sy,this.dialogueBox=new ay,this.hud=new hy,this.mainMenu=new Ry,this._onResize=this._onResize.bind(this),this._loop=this._loop.bind(this),window.addEventListener("resize",this._onResize),this.titleScreen.onSelect(t=>{this._handleTitleSelect(t)}),this.sceneManager.setState("title"),this.titleScreen.show(),this._audioInitialized=!1,this._modelsPreloaded=!1,this._preloadingModels=!1}async _preloadModels(){if(!this._modelsPreloaded){if(this._preloadingModels){for(;this._preloadingModels;)await new Promise(e=>setTimeout(e,100));return}this._preloadingModels=!0,this._showLoadingScreen("Loading 3D Models...");try{await this.assetManager.preloadAllModels(),this._modelsPreloaded=!0}catch(e){console.warn("Model preloading had errors, using procedural fallbacks:",e)}finally{this._hideLoadingScreen(),this._preloadingModels=!1}}}_showLoadingScreen(e){let t=document.getElementById("model-loading-overlay");if(t){const n=document.getElementById("loading-label");n&&(n.textContent=e),t.style.display="flex"}else{t=document.createElement("div"),t.id="model-loading-overlay",t.style.cssText=`
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(135deg, #1a0a2a, #2a1a3a);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: 'Courier New', monospace;
        color: #ffcc00;
      `;const n=document.createElement("div");n.id="loading-spinner",n.style.cssText=`
        width: 60px; height: 60px;
        border: 4px solid #333;
        border-top-color: #ffcc00;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
      `;const i=document.createElement("style");i.textContent="@keyframes spin { to { transform: rotate(360deg); } }",document.head.appendChild(i),t.appendChild(n);const s=document.createElement("div");s.id="loading-label",s.style.fontSize="24px",s.textContent=e,t.appendChild(s),document.body.appendChild(t)}}_hideLoadingScreen(){const e=document.getElementById("model-loading-overlay");e&&(e.style.display="none")}_initAudio(){if(!this._audioInitialized){this._audioInitialized=!0;try{this.audioSystem.init(),this.audioSystem.playMusic("title")}catch(e){console.warn("Audio init failed:",e)}}}_handleTitleSelect(e){switch(this._initAudio(),e){case"new_game":case"newgame":this._startNewGame();break;case"continue":data&&data.slot!==void 0&&(this.saveSlot=`mcchronicles_save_${data.slot}`),this.saveSystem.hasSave(this.saveSlot)&&(this.titleScreen.hide(),this.load().catch(t=>console.warn("Load failed:",t)));break}}start(){this.clock.start(),requestAnimationFrame(this._loop)}_loop(){const e=this.clock.getElapsedTime(),t=Math.min(e-this.lastTime,.1);this.lastTime=e,this.update(t),this.render(),requestAnimationFrame(this._loop)}update(e){switch(this.inputSystem.update(),this.tweenManager.update(performance.now()),this.shaderManager.updateTime(this.clock.getElapsedTime()),this.sceneManager.update(e),this.cameraController.update(e),this.state){case dt.TITLE:this._updateTitle(e);break;case dt.OVERWORLD:this._updateOverworld(e);break;case dt.BATTLE:this._updateBattle(e);break;case dt.MENU:this._updateMenu(e);break;case dt.DIALOGUE:this._updateDialogue(e);break;case dt.GAME_OVER:this._updateGameOver(e);break;case dt.VICTORY:this._updateVictory(e);break}this._updateAnimations(e),this.playTime+=e}render(){this.sceneManager.render()}_updateTitle(e){if(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space")){if(!this.titleScreen._isVisible)return;this._initAudio(),this._startNewGame()}}async _startNewGame(){await this._preloadModels(),this.party=this.partyMemberIds.map(e=>this._createPartyMember(e)),this.gold=100,this.inventory={mc_flurry_potion:3,ketchup_packet:1},this.questSystem=new tc,this.questSystem.init(),this.nemesisSystem=new cs,this.nemesisSystem.init(),this.titleScreen.hide(),this.changeRegion("fry_valley").catch(e=>console.error("Region change failed:",e)),this.startDialogue(vi.game_start),this.audioSystem.playMusic("overworld","fry_valley")}_updateOverworld(e){var s,a;const t=this.inputSystem.getMovementVector(),i=this.inputSystem.isPressed("ShiftLeft")||this.inputSystem.isPressed("ShiftRight")?this.playerSprintSpeed:this.playerSpeed;if(t.x!==0||t.z!==0){this.playerPosition.x+=t.x*i*e,this.playerPosition.z+=t.z*i*e;const l=(((s=this.currentRegionData)==null?void 0:s.size)||80)/2-2;this.playerPosition.x=ni(this.playerPosition.x,-l,l),this.playerPosition.z=ni(this.playerPosition.z,-l,l),this.playerRotation=Math.atan2(t.x,t.z),this.stepCount+=i*e,this.steps+=1,this.encounterCooldown<=0&&((a=this.currentRegionData)==null?void 0:a.encounterRate)>0&&this.stepCount>5&&Math.random()<this.currentRegionData.encounterRate&&(this.stepCount=0,this._triggerEncounter())}if(this.playerMesh){this.playerMesh.position.copy(this.playerPosition),this.playerMesh.rotation.y=this.playerRotation;const o=Math.sin(this.clock.getElapsedTime()*4)*.05;this.playerMesh.position.y=o}this.cameraController.setTarget({position:this.playerPosition}),this.encounterCooldown>0&&(this.encounterCooldown-=e),(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&this._checkNPCInteraction(),this.inputSystem.wasJustPressed("Escape")&&this.openMenu(),this._checkStoryEvents(),this._checkRegionTransition(),this.hud.update(this.party,this.currentRegionData,this.playerPosition,this.questSystem.getActiveQuests()[0])}_checkRegionTransition(){if(!this.currentRegionData)return;const e=ic[this.currentRegionId];if(!e)return;const t=this.currentRegionData.size/2-1;for(const n of e)if(la[n]){if(this.playerPosition.z<-t+1&&e.includes(n)){this._transitionToRegion(n,"north");return}if(this.playerPosition.z>t-1&&e.includes(n)){this._transitionToRegion(n,"south");return}if(this.playerPosition.x>t-1&&e.includes(n)){this._transitionToRegion(n,"east");return}if(this.playerPosition.x<-t+1&&e.includes(n)){this._transitionToRegion(n,"west");return}}}_transitionToRegion(e,t){var s;const n=ic[this.currentRegionId];if(!n||!n.includes(e))return;this.audioSystem.playSFX("transition"),this.changeRegion(e).catch(a=>console.error("Region change failed:",a));const i=(((s=la[e])==null?void 0:s.size)||80)/2-3;switch(t){case"north":this.playerPosition.set(0,0,i);break;case"south":this.playerPosition.set(0,0,-i);break;case"east":this.playerPosition.set(-i,0,0);break;case"west":this.playerPosition.set(i,0,0);break}}_triggerEncounter(){var i;const e=(i=this.currentRegionData)==null?void 0:i.encounterZone;if(!e)return;const t=U_(e);if(!t||t.length===0)return;const n={monsters:t,region:this.currentRegionId};this.startBattle(n).catch(s=>console.error("Battle start failed:",s))}_checkNPCInteraction(){var s;const e=this.sceneManager.getScene(),t=e.children.filter(a=>a.userData.type==="npc"||a.userData.npcData);for(const a of t)if(a.position.distanceTo(this.playerPosition)<3){const l=a.userData.npcData;l&&l.dialogue&&(this.audioSystem.playSFX("select"),this.startDialogue({id:`npc_${l.name}`,dialogue:l.dialogue.map(c=>({speaker:l.name,text:c}))}));return}const n=e.children.filter(a=>a.userData.treasureData);for(const a of n){if(a.userData.opened)continue;if(a.position.distanceTo(this.playerPosition)<2.5){a.userData.opened=!0;const l=a.userData.treasureData;l&&(this._addItem(l.item,1),this.audioSystem.playSFX("treasure"),this.startDialogue({id:`treasure_${l.item}`,dialogue:[{speaker:"Treasure",text:`You found a ${((s=Ji[l.item])==null?void 0:s.name)||l.item}!`}]}));return}}const i=e.children.filter(a=>a.userData.type==="savepoint");for(const a of i)if(a.position.distanceTo(this.playerPosition)<3){this.audioSystem.playSFX("save"),this.save(),this.startDialogue({id:"save_point",dialogue:[{speaker:"Save Point",text:"Your adventure has been saved! Rest easy, hero."}]});return}}_checkStoryEvents(){var e;if((e=this.currentRegionData)!=null&&e.storyEvents){for(const t of this.currentRegionData.storyEvents)if(t.trigger==="location"&&Math.sqrt((t.x-this.playerPosition.x)**2+(t.z-this.playerPosition.z)**2)<(t.radius||5)){const i=vi[t.event];i&&!this.questSystem.hasSeenBeat(t.event)&&(this.startDialogue(i),this.questSystem.seeStoryBeat(t.event))}}}_updateBattle(e){var n,i;if(!this.battleData)return;const t=this.battleData;if(this.battleUI&&this.battleUI.update(t.party,t.enemies,t.activeEntity),t.battleState==="executing"){t.actionTimer-=e,t.actionTimer<=0&&(t.battleState="idle",t.activeEntity=null,this._checkBattleEnd());return}if(t.battleState==="victory"||t.battleState==="defeat"){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&this.endBattle({result:t.battleState});return}if(t.battleState==="idle"){const s=[...t.party,...t.enemies];for(const a of s){if(!a.isAlive||a.atbGauge>=100)continue;const o=((n=a.stats)==null?void 0:n.agi)||a.agi||10;a.atbGauge+=o*e*8,a.atbGauge>=100&&(a.atbGauge=100,t.turnQueue.push(a))}t.turnQueue.length>0&&!t.activeEntity&&(t.activeEntity=t.turnQueue.shift(),t.battleState="selecting",t.activeEntity.isEnemy?this._executeEnemyTurn(t.activeEntity,t):this.battleUI&&this.battleUI.showCommandMenu(t.activeEntity))}this.inputSystem.wasJustPressed("Escape")&&t.battleState==="selecting"&&!((i=t.activeEntity)!=null&&i.isEnemy)&&(this.battleUI&&this.battleUI.hideCommandMenu(),t.battleState="idle",t.activeEntity.atbGauge=0,t.activeEntity=null,this.endBattle({result:"escaped"}))}_executeEnemyTurn(e,t){var a,o;const n=t.party.filter(l=>l.isAlive);if(n.length===0){t.battleState="defeat";return}const i=n[Math.floor(Math.random()*n.length)],s=Math.max(1,Math.floor((((a=e.stats)==null?void 0:a.atk)||e.atk||10)*1.2-(((o=i.stats)==null?void 0:o.def)||i.def||5)*.5));i.currentHP-=s,i.currentHP<=0&&(i.currentHP=0,i.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${e.name} attacks ${i.name} for ${s} damage!`),e.atbGauge=0,t.actionTimer=1,t.battleState="executing"}_executePlayerAction(e,t){var s,a,o,l,c,d,u,h,p,_,g,m;const n=this.battleData;if(!n||!n.activeEntity)return;const i=n.activeEntity;if(e.type==="attack"){const f=Math.max(1,Math.floor((i.atk||((s=i.stats)==null?void 0:s.atk)||15)*1.5-(((a=t.stats)==null?void 0:a.def)||t.def||5)*.5));t.currentHP-=f,t.currentHP<=0&&(t.currentHP=0,t.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${i.name} attacks ${t.name} for ${f} damage!`)}else if(e.type==="ability"){const f=jl[e.abilityId];if(f){if(f.type==="heal"){const x=Math.floor((i.mag||((o=i.stats)==null?void 0:o.mag)||20)*f.power);t.currentHP=Math.min(t.maxHP||((l=t.stats)==null?void 0:l.hp)||100,(t.currentHP||0)+x),this.battleUI&&this.battleUI.showMessage(`${i.name} uses ${f.name}! ${t.name} recovers ${x} HP!`)}else if(f.type==="aoe"||f.type==="ultimate"){const x=f.target==="enemies"?n.enemies.filter(y=>y.isAlive):n.party.filter(y=>y.isAlive);for(const y of x){const v=Math.max(1,Math.floor((i.mag||((c=i.stats)==null?void 0:c.mag)||20)*f.power-(((d=y.stats)==null?void 0:d.def)||y.def||5)*.3));y.currentHP-=v,y.currentHP<=0&&(y.currentHP=0,y.isAlive=!1)}this.battleUI&&this.battleUI.showMessage(`${i.name} casts ${f.name}! Hits all targets!`)}else{const x=Math.max(1,Math.floor((i.mag||((u=i.stats)==null?void 0:u.mag)||20)*f.power-(((h=t.stats)==null?void 0:h.def)||t.def||5)*.4));t.currentHP-=x,t.currentHP<=0&&(t.currentHP=0,t.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${i.name} uses ${f.name}! ${x} damage to ${t.name}!`)}i.currentMP=Math.max(0,(i.currentMP||0)-(f.mpCost||0))}}else if(e.type==="defend")i.isDefending=!0,this.battleUI&&this.battleUI.showMessage(`${i.name} takes a defensive stance!`);else if(e.type==="item"){const f=Ji[e.itemId];f&&f.effect==="heal_hp"?(t.currentHP=Math.min(t.maxHP||((p=t.stats)==null?void 0:p.hp)||100,(t.currentHP||0)+f.power),this.battleUI&&this.battleUI.showMessage(`Used ${f.name}! ${t.name} recovers ${f.power} HP!`),this._removeItem(e.itemId,1)):f&&f.effect==="heal_mp"?(t.currentMP=Math.min(t.maxMP||((_=t.stats)==null?void 0:_.mp)||50,(t.currentMP||0)+f.power),this.battleUI&&this.battleUI.showMessage(`Used ${f.name}! ${t.name} recovers ${f.power} MP!`),this._removeItem(e.itemId,1)):f&&f.effect==="heal_both"&&(t.currentHP=Math.min(t.maxHP||((g=t.stats)==null?void 0:g.hp)||100,(t.currentHP||0)+f.power),t.currentMP=Math.min(t.maxMP||((m=t.stats)==null?void 0:m.mp)||50,(t.currentMP||0)+f.power),this.battleUI&&this.battleUI.showMessage(`Used ${f.name}! ${t.name} recovers HP and MP!`),this._removeItem(e.itemId,1))}i.atbGauge=0,i.isDefending=!1,n.actionTimer=.8,n.battleState="executing",this.battleUI&&(this.battleUI.hideCommandMenu(),this.battleUI.hideAbilityMenu(),this.battleUI.hideTargetSelect())}_checkBattleEnd(){const e=this.battleData;if(!e)return;const t=e.enemies.filter(i=>i.isAlive),n=e.party.filter(i=>i.isAlive);if(t.length===0){e.battleState="victory";const i=e.enemies.reduce((a,o)=>a+(o.xp||10),0),s=e.enemies.reduce((a,o)=>a+(o.gold||5),0);this.battleUI&&this.battleUI.showVictory({xp:i,gold:s,items:[]})}else n.length===0&&(e.battleState="defeat",this.battleUI&&this.battleUI.showDefeat())}_updateMenu(e){this.inputSystem.wasJustPressed("Escape")&&this.closeMenu()}_updateDialogue(e){if(this.dialogueBox.update(e*1e3),!this.currentDialogue){this.state=this.previousState||dt.OVERWORLD;return}if(this.inputSystem.wasJustPressed("Escape")){this.dialogueBox.hide();const t=this.currentDialogue;if(this.currentDialogue=null,this.dialogueIndex=0,this.state=this.previousState||dt.OVERWORLD,t!=null&&t.unlocks)for(const n of t.unlocks)this.recruitedIds.includes(n)||(this.recruitedIds.push(n),this.partyMemberIds.push(n),this.party.push(this._createPartyMember(n)));t!=null&&t.id&&this.questSystem.seeStoryBeat(t.id)}}_updateGameOver(e){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&(this.state=dt.TITLE,this.sceneManager.setState("title"),this.titleScreen.show(),this.hud.hide())}_updateVictory(e){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&(this.state=dt.TITLE,this.sceneManager.setState("title"),this.titleScreen.show(),this.hud.hide())}async changeRegion(e){const t=la[e];if(!t){console.warn(`Unknown region: ${e}`);return}if(this.currentRegionId=e,this.currentRegionData=t,this.playerPosition.set(0,0,0),this.playerRotation=0,this.encounterCooldown=2,!this.playerMesh)try{this.playerMesh=await this.assetManager.loadModel(this.partyMemberIds[0])}catch{this.playerMesh=this.assetManager.createCharacterMesh(this.partyMemberIds[0])}this.state=dt.OVERWORLD,this.sceneManager.setState("overworld",{region:t});const n=this.sceneManager.getScene();if(this.playerMesh&&n.add(this.playerMesh),this.hud.show(),this.audioSystem.playMusic("overworld",e),this.save(),t.storyEvents){for(const i of t.storyEvents)if(i.trigger==="enter"&&vi[i.event]){this.questSystem.hasSeenBeat(i.event)||this.startDialogue(vi[i.event]);break}}}async startBattle(e){const t=e.monsters||e,n=[];for(let s=0;s<t.length;s++){const a=t[s],o=Ra[a];let l;try{l=await this.assetManager.loadModel(a)}catch{l=this.assetManager.createMonsterMesh(a)}const c={...(o==null?void 0:o.stats)||{hp:50,atk:10,def:5,agi:10,mag:5,mp:0}};n.push({id:a,name:(o==null?void 0:o.name)||a,stats:c,atk:c.atk,def:c.def,agi:c.agi,mag:c.mag,weakTo:(o==null?void 0:o.weakTo)||[],resists:(o==null?void 0:o.resists)||[],element:(o==null?void 0:o.element)||"physical",mesh:l,currentHP:c.hp,maxHP:c.hp,currentMP:c.mp,maxMP:c.mp,atbGauge:0,isAlive:!0,isEnemy:!0,statusEffects:[],abilities:(o==null?void 0:o.abilities)||["enemy_bite"],xp:(o==null?void 0:o.xp)||10,gold:(o==null?void 0:o.gold)||5,drops:(o==null?void 0:o.drops)||[],isDefending:!1})}const i=[];for(const s of this.party){const a={hp:s.maxHP,mp:s.maxMP,atk:s.atk,def:s.def,agi:s.agi,mag:s.mag};let o;try{o=await this.assetManager.loadModel(s.id)}catch{o=this.assetManager.createCharacterMesh(s.id)}i.push({...s,stats:a,mesh:o,atbGauge:0,isAlive:s.currentHP>0,isEnemy:!1,statusEffects:[],isDefending:!1})}this.battleData={party:i,enemies:n,region:this.currentRegionId,round:1,turnQueue:[],activeEntity:null,battleState:"idle",actionTimer:0},this.previousState=this.state,this.state=dt.BATTLE,this.sceneManager.setState("battle",{battle:this.battleData}),this.hud.hide(),this.audioSystem.playMusic("battle",this.currentRegionId),this.battleUI&&(this.battleUI.hide(),this.battleUI=null),this.battleUI=new Ly(document.body),this.battleUI.create(),this.battleUI._lastActiveEntity=null,this.battleUI.callbacks.onSelectCommand=s=>{var l,c;const a=this.battleData;if(!a||!a.activeEntity)return;const o=a.activeEntity;switch(this.audioSystem.playSFX("select"),s){case"attack":this.battleUI.hideCommandMenu(),this.battleUI.showTargetSelect(a.enemies.filter(h=>h.isAlive),!0),this.battleUI.callbacks.onSelectTarget=h=>{this._executePlayerAction({type:"attack"},h)};break;case"ability":this.battleUI.hideCommandMenu(),this.battleUI.showAbilityMenu(o),this.battleUI.callbacks.onSelectAbility=h=>{const p=jl[h];if(p){if((o.currentMP||0)<p.mpCost){this.battleUI.showMessage("Not enough MP!");return}if(p.target==="enemies"||p.target==="allies"){const _=p.target==="enemies"?a.enemies.filter(g=>g.isAlive):a.party.filter(g=>g.isAlive);this._executePlayerAction({type:"ability",abilityId:h},_[0])}else{const _=p.type==="attack"||p.type==="ultimate",g=_?a.enemies.filter(m=>m.isAlive):a.party.filter(m=>m.isAlive);this.battleUI.hideAbilityMenu(),this.battleUI.showTargetSelect(g,_),this.battleUI.callbacks.onSelectTarget=m=>{this._executePlayerAction({type:"ability",abilityId:h},m)}}}};break;case"item":this.battleUI.hideCommandMenu();const d=Object.keys(this.inventory).filter(h=>{var p;return((p=Ji[h])==null?void 0:p.type)==="consumable"}).map(h=>({id:h,...Ji[h],count:this.inventory[h]}));this.battleUI.showItemMenu(d),this.battleUI.callbacks.onSelectItem=h=>{if(this.battleUI.hideItemMenu(),!Ji[h])return;const _=a.party.filter(g=>g.isAlive);this.battleUI.showTargetSelect(_,!1),this.battleUI.callbacks.onSelectTarget=g=>{this._executePlayerAction({type:"item",itemId:h},g)}};break;case"defend":this._executePlayerAction({type:"defend"},o);break;case"flee":this.battleUI.hideCommandMenu();const u=.5+(((l=a.party[0])==null?void 0:l.agi)||10)*.01-(((c=a.enemies[0])==null?void 0:c.agi)||10)*.01;Math.random()<u?(this.battleUI.showMessage("Got away safely!"),setTimeout(()=>this.endBattle({result:"escaped"}),1e3)):(this.battleUI.showMessage("Could not escape!"),o.atbGauge=0,this.battleData.battleState="executing",this.battleData.actionTimer=.8);break}}}endBattle(e){if(this.battleUI&&(this.battleUI.hide(),this.battleUI=null),e.result==="victory"){let n=0,i=0;for(const s of this.battleData.enemies)n+=s.xp||10,i+=s.gold||5;this.gold+=i;for(const s of this.party){const a=Math.floor(n/this.party.length),o=this.progressionSystem.addXP(s,a);if(o.leveledUp)for(const l of o.unlockedAbilities)s.abilities.includes(l)||s.abilities.push(l)}for(const s of this.battleData.enemies)if(s.drops)for(const a of s.drops)Math.random()<a.chance&&this._addItem(a.item,1);this.audioSystem.playVictory()}else if(e.result==="defeat"){this.audioSystem.playDefeat(),this.state=dt.GAME_OVER,this.sceneManager.setState("title"),this.hud.hide(),this.battleData=null;return}else e.result;if(this.battleData)for(let n=0;n<this.battleData.party.length&&n<this.party.length;n++)this.party[n].currentHP=this.battleData.party[n].currentHP,this.party[n].currentMP=this.battleData.party[n].currentMP;this.state=dt.OVERWORLD,this.sceneManager.setState("overworld",{region:this.currentRegionData}),this.hud.show(),this.encounterCooldown=3;const t=this.sceneManager.getScene();this.playerMesh&&t.add(this.playerMesh),this.audioSystem.playMusic("overworld",this.currentRegionId),this.battleData=null}openMenu(){this.previousState=this.state,this.state=dt.MENU,this.sceneManager.setState("menu",{menu:!0}),this.hud.hide(),this.mainMenu.show(this.party,this.nemesisSystem,this.questSystem),this.audioSystem.playSFX("menu_open")}closeMenu(){this.state=this.previousState||dt.OVERWORLD,this.sceneManager.setState("overworld",{region:this.currentRegionData}),this.mainMenu.hide(),this.hud.show();const e=this.sceneManager.getScene();this.playerMesh&&e.add(this.playerMesh),this.audioSystem.playSFX("menu_close")}startDialogue(e){if(!e)return;this.previousState=this.state,this.state=dt.DIALOGUE,this.currentDialogue=e,this.dialogueIndex=0;const t=e.dialogue.map(n=>({speaker:n.speaker,text:n.text}));this.dialogueBox.show(t,()=>{const n=this.currentDialogue;if(this.currentDialogue=null,this.dialogueIndex=0,this.state=this.previousState||dt.OVERWORLD,this.dialogueBox.hide(),n!=null&&n.unlocks)for(const i of n.unlocks)this.recruitedIds.includes(i)||(this.recruitedIds.push(i),this.partyMemberIds.push(i),this.party.push(this._createPartyMember(i)));n!=null&&n.after&&vi[n.after]&&this.startDialogue(vi[n.after]),n!=null&&n.id&&this.questSystem.seeStoryBeat(n.id)})}save(){const e={version:1,partyMemberIds:this.partyMemberIds,recruitedIds:this.recruitedIds,party:this.party.map(t=>({id:t.id,level:t.level,xp:t.xp,currentHP:t.currentHP,currentMP:t.currentMP,equipment:t.equipment,abilities:t.abilities})),gold:this.gold,inventory:this.inventory,currentRegionId:this.currentRegionId,playerPosition:{x:this.playerPosition.x,y:this.playerPosition.y,z:this.playerPosition.z},playerRotation:this.playerRotation,playTime:this.playTime,steps:this.steps,quests:this.questSystem.toData(),nemesis:this.nemesisSystem.toData(),familiars:this.familiars.map(t=>t.toData?t.toData():t),equippedFamiliars:this.equippedFamiliars,timestamp:Date.now()};try{this.saveSystem.save(this.saveSlot,e),this.saveSystem.autoSave(e)}catch(t){console.warn("Failed to save:",t)}}async load(){try{const e=this.saveSystem.load(this.saveSlot);if(!e)return!1;await this._preloadModels(),this.partyMemberIds=e.partyMemberIds||[...ia],this.recruitedIds=e.recruitedIds||[...this.partyMemberIds],this.party=(e.party||[]).map(n=>{const i=this._createPartyMember(n.id);return i.level=n.level||1,i.xp=n.xp||0,i.currentHP=n.currentHP||i.maxHP,i.currentMP=n.currentMP||i.maxMP,i.equipment=n.equipment||{},i.abilities=n.abilities||i.abilities,i}),this.gold=e.gold||100,this.inventory=e.inventory||{},this.playTime=e.playTime||0,this.steps=e.steps||0,e.quests&&this.questSystem.fromData(e.quests),e.nemesis&&(this.nemesisSystem=cs.fromData(e.nemesis)),e.familiars&&(this.familiars=e.familiars),e.equippedFamiliars&&(this.equippedFamiliars=e.equippedFamiliars);const t=e.currentRegionId||"fry_valley";return this.changeRegion(t).catch(n=>console.error("Region change failed:",n)),e.playerPosition&&this.playerPosition.set(e.playerPosition.x,e.playerPosition.y,e.playerPosition.z),this.playerRotation=e.playerRotation||0,!0}catch(e){return console.warn("Failed to load:",e),!1}}hasSave(){return this.saveSystem.hasSave(this.saveSlot)}_createPartyMember(e){const t=fs[e];if(!t)return null;const n={...t.baseStats};return{id:e,name:t.name,title:t.title,role:t.role,description:t.description,level:1,xp:0,maxHP:n.hp,maxMP:n.mp,currentHP:n.hp,currentMP:n.mp,atk:n.atk,def:n.def,agi:n.agi,mag:n.mag,element:t.element,equipment:{weapon:null,armor:null,accessory:null},abilities:t.abilityTree.filter(i=>i.level===1).map(i=>i.ability),color:t.color,portraitColors:t.portraitColors,growth:t.growth,abilityTree:t.abilityTree}}_addItem(e,t=1){this.inventory[e]||(this.inventory[e]=0),this.inventory[e]+=t}_removeItem(e,t=1){return this.inventory[e]?(this.inventory[e]-=t,this.inventory[e]<=0&&delete this.inventory[e],!0):!1}_updateAnimations(e){const t=this.sceneManager.getScene(),n=this.clock.getElapsedTime();t.traverse(i=>{if(i.userData.float&&(i.position.y+=Math.sin(n*2+i.id)*.005),i.userData.spin&&(i.rotation.y+=e*3),i.userData.bounce){const s=1+Math.sin(n*4)*.05;i.scale.y=s}if(i.userData.type==="particles"&&!i.userData.dead&&(this.assetManager.updateParticleEffect&&this.assetManager.updateParticleEffect(i,e),i.userData.dead&&t.remove(i)),i.userData.glow&&i.material){const s=.8+Math.sin(n*3)*.2;i.material.opacity=s}i.userData.npcData&&(i.position.y=Math.sin(n*1.5+i.id)*.1),i.userData.treasureData&&!i.userData.opened&&(i.rotation.y=Math.sin(n*.8)*.1)})}_onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose(),this.inputSystem.dispose(),this.audioSystem.stopMusic(),this.titleScreen.hide(),this.dialogueBox.hide(),this.hud.hide(),this.mainMenu.hide()}}const Zs=document.getElementById("game-canvas"),vd=new Py(Zs);vd.start();function Iy(){const r=document.getElementById("loading-screen");r&&(r.classList.add("hidden"),setTimeout(()=>{r.remove()},800))}const Sc=document.getElementById("loading-bar"),wc=document.getElementById("loading-text"),ua=["Cooking fries...","Summoning Ronald...","Polishing golden arches...","Wrapping Happy Meals...","Hiding Hamburglar...","Ready to play!"];let $s=0;const Dy=setInterval(()=>{if($s+=5,Sc&&(Sc.style.width=`${Math.min($s,100)}%`),wc){const r=Math.floor($s/100*ua.length);wc.textContent=ua[Math.min(r,ua.length-1)]}$s>=100&&(clearInterval(Dy),setTimeout(Iy,300))},80);function ky(){const r=window.innerWidth,e=window.innerHeight;Zs&&(Zs.width=r,Zs.height=e)}ky();window.__game=vd;
