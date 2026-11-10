(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="160",Wl=0,Za=1,ql=2,el=1,tl=2,on=3,wn=0,Mt=1,ln=2,yn=0,oi=1,Ja=2,er=3,tr=4,Xl=5,Dn=100,$l=101,Yl=102,nr=103,ir=104,jl=200,Kl=201,Ql=202,Zl=203,Ma=204,wa=205,Jl=206,ec=207,tc=208,nc=209,ic=210,sc=211,ac=212,rc=213,oc=214,lc=0,cc=1,dc=2,ms=3,hc=4,uc=5,pc=6,fc=7,nl=0,mc=1,gc=2,bn=0,_c=1,vc=2,xc=3,yc=4,bc=5,Mc=6,il=300,ci=301,di=302,Sa=303,Ea=304,bs=306,Ta=1e3,Xt=1001,Aa=1002,At=1003,sr=1004,Is=1005,Ot=1006,wc=1007,Li=1008,Mn=1009,Sc=1010,Ec=1011,Fa=1012,sl=1013,vn=1014,xn=1015,Ii=1016,al=1017,rl=1018,Un=1020,Tc=1021,$t=1023,Ac=1024,Cc=1025,Fn=1026,hi=1027,Rc=1028,ol=1029,Pc=1030,ll=1031,cl=1033,ks=33776,Ds=33777,Ns=33778,Us=33779,ar=35840,rr=35841,or=35842,lr=35843,dl=36196,cr=37492,dr=37496,hr=37808,ur=37809,pr=37810,fr=37811,mr=37812,gr=37813,_r=37814,vr=37815,xr=37816,yr=37817,br=37818,Mr=37819,wr=37820,Sr=37821,Fs=36492,Er=36494,Tr=36495,Lc=36283,Ar=36284,Cr=36285,Rr=36286,hl=3e3,On=3001,Ic=3200,kc=3201,Dc=0,Nc=1,zt="",mt="srgb",dn="srgb-linear",Oa="display-p3",Ms="display-p3-linear",gs="linear",Je="srgb",_s="rec709",vs="p3",zn=7680,Pr=519,Uc=512,Fc=513,Oc=514,ul=515,Bc=516,zc=517,Hc=518,Gc=519,Lr=35044,Ir="300 es",Ca=1035,cn=2e3,xs=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,Ra=180/Math.PI;function Ui(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Pt(a,e,t){return Math.max(e,Math.min(t,a))}function Vc(a,e){return(a%e+e)%e}function Bs(a,e,t){return(1-t)*a+t*e}function kr(a){return(a&a-1)===0&&a!==0}function Pa(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function _i(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ct(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,r,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],u=i[6],v=i[1],x=i[4],M=i[7],R=i[2],T=i[5],A=i[8];return s[0]=r*g+o*v+l*R,s[3]=r*m+o*x+l*T,s[6]=r*u+o*M+l*A,s[1]=c*g+d*v+f*R,s[4]=c*m+d*x+f*T,s[7]=c*u+d*M+f*A,s[2]=h*g+p*v+_*R,s[5]=h*m+p*x+_*T,s[8]=h*u+p*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*s*d+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*r-o*c,h=o*l-d*s,p=c*s-r*l,_=t*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*r)*g,e[3]=h*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new He;function pl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ys(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Wc(){const a=ys("canvas");return a.style.display="block",a}const Dr={};function Ti(a){a in Dr||(Dr[a]=!0,console.warn(a))}const Nr=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ur=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[dn]:{transfer:gs,primaries:_s,toReference:a=>a,fromReference:a=>a},[mt]:{transfer:Je,primaries:_s,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Ms]:{transfer:gs,primaries:vs,toReference:a=>a.applyMatrix3(Ur),fromReference:a=>a.applyMatrix3(Nr)},[Oa]:{transfer:Je,primaries:vs,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Ur),fromReference:a=>a.applyMatrix3(Nr).convertLinearToSRGB()}},qc=new Set([dn,Ms]),je={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!qc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Hi[e].toReference,i=Hi[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Hi[a].primaries},getTransfer:function(a){return a===zt?gs:Hi[a].transfer}};function li(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Hs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Hn;class fl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=ys("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=li(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xc=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Gs(i[r].image)):s.push(Gs(i[r]))}else s=Gs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?fl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class Dt extends fi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Xt,i=Xt,s=Ot,r=Li,o=$t,l=Mn,c=Dt.DEFAULT_ANISOTROPY,d=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ui(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===On?mt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?On:hl}set encoding(e){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===On?mt:zt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=il;Dt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,R=(u+1)/2,T=(d+h)/4,A=(f+g)/4,k=(_+m)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=A/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=k/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=k/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-d)/v,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yc extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?mt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],d=n[i+2],f=n[i+3];const h=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==p||d!==_){let m=1-o;const u=l*h+c*p+d*_+f*g,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,u*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const M=o*v;if(l=l*m+h*M,c=c*m+p*M,d=d*m+_*M,f=f*m+g*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],f=s[r],h=s[r+1],p=s[r+2],_=s[r+3];return e[t]=o*_+d*f+l*p-c*h,e[t+1]=l*_+d*h+c*f-o*p,e[t+2]=c*_+d*p+o*h-l*f,e[t+3]=d*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),f=o(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(r){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+i*c-s*l,this._y=i*d+r*l+s*o-n*c,this._z=s*d+r*c+n*l-i*o,this._w=r*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=r*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),d=2*(o*t-s*i),f=2*(s*n-r*t);return this.x=t+l*c+r*f-o*d,this.y=n+l*d+o*c-s*f,this.z=i+l*f+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new I,Fr=new Fi;class Oi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ht):Ht.fromBufferAttribute(s,r),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Vi.subVectors(this.max,vi),Gn.subVectors(e.a,vi),Vn.subVectors(e.b,vi),Wn.subVectors(e.c,vi),un.subVectors(Vn,Gn),pn.subVectors(Wn,Vn),An.subVectors(Gn,Wn);let t=[0,-un.z,un.y,0,-pn.z,pn.y,0,-An.z,An.y,un.z,0,-un.x,pn.z,0,-pn.x,An.z,0,-An.x,-un.y,un.x,0,-pn.y,pn.x,0,-An.y,An.x,0];return!Ws(t,Gn,Vn,Wn,Vi)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,Gn,Vn,Wn,Vi))?!1:(Wi.crossVectors(un,pn),t=[Wi.x,Wi.y,Wi.z],Ws(t,Gn,Vn,Wn,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new I,new I,new I,new I,new I,new I,new I,new I],Ht=new I,Gi=new Oi,Gn=new I,Vn=new I,Wn=new I,un=new I,pn=new I,An=new I,vi=new I,Vi=new I,Wi=new I,Cn=new I;function Ws(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Cn.fromArray(a,s);const o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),d=n.dot(Cn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Kc=new Oi,xi=new I,qs=new I;class Ba{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(qs)),this.expandByPoint(xi.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new I,Xs=new I,qi=new I,fn=new I,$s=new I,Xi=new I,Ys=new I;class Qc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xs.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(Xs);const s=e.distanceTo(t)*.5,r=-this.direction.dot(qi),o=fn.dot(this.direction),l=-fn.dot(qi),c=fn.lengthSq(),d=Math.abs(1-r*r);let f,h,p,_;if(d>0)if(f=r*l-o,h=r*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const g=1/d;f*=g,h*=g,p=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-r*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(r*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=r>0?-s:s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Xs).addScaledVector(qi,h),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,s){$s.subVectors(t,e),Xi.subVectors(n,e),Ys.crossVectors($s,Xi);let r=this.direction.dot(Ys),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fn.subVectors(this.origin,e);const l=o*this.direction.dot(Xi.crossVectors(fn,Xi));if(l<0)return null;const c=o*this.direction.dot($s.cross(fn));if(c<0||l+c>r)return null;const d=-o*fn.dot(Ys);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,i,s,r,o,l,c,d,f,h,p,_,g,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c,d,f,h,p,_,g,m)}set(e,t,n,i,s,r,o,l,c,d,f,h,p,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),r=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=r*d,p=r*f,_=o*d,g=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,g=c*f;t[0]=h+g*o,t[4]=_*o-p,t[8]=r*c,t[1]=r*f,t[5]=r*d,t[9]=-o,t[2]=p*o-_,t[6]=g+h*o,t[10]=r*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,g=c*f;t[0]=h-g*o,t[4]=-r*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=r*d,t[9]=g-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const h=r*d,p=r*f,_=o*d,g=o*f;t[0]=l*d,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,p=r*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-h*f,t[8]=_*f+p,t[1]=f,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=r*l,p=r*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+g,t[5]=r*d,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*d,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zc,e,Jc)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),mn.crossVectors(n,It),mn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),mn.crossVectors(n,It)),mn.normalize(),$i.crossVectors(It,mn),i[0]=mn.x,i[4]=$i.x,i[8]=It.x,i[1]=mn.y,i[5]=$i.y,i[9]=It.y,i[2]=mn.z,i[6]=$i.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],u=n[14],v=n[3],x=n[7],M=n[11],R=n[15],T=i[0],A=i[4],k=i[8],y=i[12],w=i[1],z=i[5],G=i[9],J=i[13],L=i[2],B=i[6],W=i[10],$=i[14],q=i[3],X=i[7],Y=i[11],ne=i[15];return s[0]=r*T+o*w+l*L+c*q,s[4]=r*A+o*z+l*B+c*X,s[8]=r*k+o*G+l*W+c*Y,s[12]=r*y+o*J+l*$+c*ne,s[1]=d*T+f*w+h*L+p*q,s[5]=d*A+f*z+h*B+p*X,s[9]=d*k+f*G+h*W+p*Y,s[13]=d*y+f*J+h*$+p*ne,s[2]=_*T+g*w+m*L+u*q,s[6]=_*A+g*z+m*B+u*X,s[10]=_*k+g*G+m*W+u*Y,s[14]=_*y+g*J+m*$+u*ne,s[3]=v*T+x*w+M*L+R*q,s[7]=v*A+x*z+M*B+R*X,s[11]=v*k+x*G+M*W+R*Y,s[15]=v*y+x*J+M*$+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*p-n*l*p)+g*(+t*l*p-t*c*h+s*r*h-i*r*p+i*c*d-s*l*d)+m*(+t*c*f-t*o*p-s*r*f+n*r*p+s*o*d-n*c*d)+u*(-i*o*d-t*l*f+t*o*h+i*r*f-n*r*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],u=e[15],v=f*m*c-g*h*c+g*l*p-o*m*p-f*l*u+o*h*u,x=_*h*c-d*m*c-_*l*p+r*m*p+d*l*u-r*h*u,M=d*g*c-_*f*c+_*o*p-r*g*p-d*o*u+r*f*u,R=_*f*l-d*g*l-_*o*h+r*g*h+d*o*m-r*f*m,T=t*v+n*x+i*M+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(g*h*s-f*m*s-g*i*p+n*m*p+f*i*u-n*h*u)*A,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*u+n*l*u)*A,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*p-n*l*p)*A,e[4]=x*A,e[5]=(d*m*s-_*h*s+_*i*p-t*m*p-d*i*u+t*h*u)*A,e[6]=(_*l*s-r*m*s-_*i*c+t*m*c+r*i*u-t*l*u)*A,e[7]=(r*h*s-d*l*s+d*i*c-t*h*c-r*i*p+t*l*p)*A,e[8]=M*A,e[9]=(_*f*s-d*g*s-_*n*p+t*g*p+d*n*u-t*f*u)*A,e[10]=(r*g*s-_*o*s+_*n*c-t*g*c-r*n*u+t*o*u)*A,e[11]=(d*o*s-r*f*s-d*n*c+t*f*c+r*n*p-t*o*p)*A,e[12]=R*A,e[13]=(d*g*i-_*f*i+_*n*h-t*g*h-d*n*m+t*f*m)*A,e[14]=(_*o*i-r*g*i-_*n*l+t*g*l+r*n*m-t*o*m)*A,e[15]=(r*f*i-d*o*i+d*n*l-t*f*l-r*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*r,0,c*l-i*o,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,d=r+r,f=o+o,h=s*c,p=s*d,_=s*f,g=r*d,m=r*f,u=o*f,v=l*c,x=l*d,M=l*f,R=n.x,T=n.y,A=n.z;return i[0]=(1-(g+u))*R,i[1]=(p+M)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(h+u))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(_+x)*A,i[9]=(m-v)*A,i[10]=(1-(h+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qn.set(i[0],i[1],i[2]).length();const r=qn.set(i[4],i[5],i[6]).length(),o=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const c=1/s,d=1/r,f=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=d,Gt.elements[5]*=d,Gt.elements[6]*=d,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r,o=cn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(o===cn)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===xs)p=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=cn){const l=this.elements,c=1/(t-e),d=1/(n-i),f=1/(r-s),h=(t+e)*c,p=(n+i)*d;let _,g;if(o===cn)_=(r+s)*f,g=-2*f;else if(o===xs)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new I,Gt=new ct,Zc=new I(0,0,0),Jc=new I(1,1,1),mn=new I,$i=new I,It=new I,Or=new ct,Br=new Fi;class ws{constructor(e=0,t=0,n=0,i=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],d=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Or.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Or,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Br.setFromEuler(this),this.setFromQuaternion(Br,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ed=0;const zr=new I,Xn=new Fi,tn=new ct,Yi=new I,yi=new I,td=new I,nd=new Fi,Hr=new I(1,0,0),Gr=new I(0,1,0),Vr=new I(0,0,1),id={type:"added"},sd={type:"removed"};class vt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new ws,n=new Fi,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(Hr,e)}rotateY(e){return this.rotateOnAxis(Gr,e)}rotateZ(e){return this.rotateOnAxis(Vr,e)}translateOnAxis(e,t){return zr.copy(e).applyQuaternion(this.quaternion),this.position.add(zr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hr,e)}translateY(e){return this.translateOnAxis(Gr,e)}translateZ(e){return this.translateOnAxis(Vr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(yi,Yi,this.up):tn.lookAt(Yi,yi,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(tn),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(id)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),f=r(e.shapes),h=r(e.skeletons),p=r(e.animations),_=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new I,nn=new I,js=new I,sn=new I,$n=new I,Yn=new I,Wr=new I,Ks=new I,Qs=new I,Zs=new I;let ji=!1;class qt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vt.subVectors(i,t),nn.subVectors(n,t),js.subVectors(e,t);const r=Vt.dot(Vt),o=Vt.dot(nn),l=Vt.dot(js),c=nn.dot(nn),d=nn.dot(js),f=r*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,_=(r*d-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,s,r,o,l){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(e,t,n,i,s,r,o,l)}static getInterpolation(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(r,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),nn.subVectors(e,t),Vt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Vt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;$n.subVectors(i,n),Yn.subVectors(s,n),Ks.subVectors(e,n);const l=$n.dot(Ks),c=Yn.dot(Ks);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,i);const d=$n.dot(Qs),f=Yn.dot(Qs);if(d>=0&&f<=d)return t.copy(i);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector($n,r);Zs.subVectors(e,s);const p=$n.dot(Zs),_=Yn.dot(Zs);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Yn,o);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return Wr.subVectors(s,i),o=(f-d)/(f-d+(p-_)),t.copy(i).addScaledVector(Wr,o);const u=1/(m+g+h);return r=g*u,o=h*u,t.copy(n).addScaledVector($n,r).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Js(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Vc(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Js(r,s,e+1/3),this.g=Js(r,s,e),this.b=Js(r,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return je.fromWorkingColorSpace(bt.copy(this),e),Math.round(Pt(bt.r*255,0,255))*65536+Math.round(Pt(bt.g*255,0,255))*256+Math.round(Pt(bt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,s=bt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=d<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=mt){je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Ki);const n=Bs(gn.h,Ki.h,t),i=Bs(gn.s,Ki.s,t),s=Bs(gn.l,Ki.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ve;Ve.NAMES=vl;let ad=0;class Ss extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=oi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=wa,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ki extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new I,Qi=new We;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lr&&(e.usage=this.usage),e}}class xl extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rd=0;const Ft=new ct,ea=new vt,jn=new I,kt=new Oi,bi=new Oi,ft=new I;class Nt extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?yl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(kt.min,bi.min),kt.expandByPoint(ft),ft.addVectors(kt.max,bi.max),kt.expandByPoint(ft)):(kt.expandByPoint(bi.min),kt.expandByPoint(bi.max))}kt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ft.fromBufferAttribute(o,c),l&&(jn.fromBufferAttribute(e,c),ft.add(jn)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<o;w++)c[w]=new I,d[w]=new I;const f=new I,h=new I,p=new I,_=new We,g=new We,m=new We,u=new I,v=new I;function x(w,z,G){f.fromArray(i,w*3),h.fromArray(i,z*3),p.fromArray(i,G*3),_.fromArray(r,w*2),g.fromArray(r,z*2),m.fromArray(r,G*2),h.sub(f),p.sub(f),g.sub(_),m.sub(_);const J=1/(g.x*m.y-m.x*g.y);isFinite(J)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(J),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(J),c[w].add(u),c[z].add(u),c[G].add(u),d[w].add(v),d[z].add(v),d[G].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,z=M.length;w<z;++w){const G=M[w],J=G.start,L=G.count;for(let B=J,W=J+L;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}const R=new I,T=new I,A=new I,k=new I;function y(w){A.fromArray(s,w*3),k.copy(A);const z=c[w];R.copy(z),R.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(k,z);const J=T.dot(d[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=J}for(let w=0,z=M.length;w<z;++w){const G=M[w],J=G.start,L=G.count;for(let B=J,W=J+L;B<W;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,r=new I,o=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Qt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qr=new ct,Rn=new Qc,Zi=new Ba,Xr=new I,Kn=new I,Qn=new I,Zn=new I,ta=new I,Ji=new I,es=new We,ts=new We,ns=new We,$r=new I,Yr=new I,jr=new I,is=new I,ss=new I;class C extends vt{constructor(e=new Nt,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ji.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(ta.fromBufferAttribute(f,e),r?Ji.addScaledVector(ta,d):Ji.addScaledVector(ta.sub(t),d))}t.add(Ji)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(s),Rn.copy(e.ray).recast(e.near),!(Zi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Zi,Xr)===null||Rn.origin.distanceToSquared(Xr)>(e.far-e.near)**2))&&(qr.copy(s).invert(),Rn.copy(e.ray).applyMatrix4(qr),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],u=r[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,R=x;M<R;M+=3){const T=o.getX(M),A=o.getX(M+1),k=o.getX(M+2);i=as(this,u,e,n,c,d,f,T,A,k),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=as(this,r,e,n,c,d,f,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],u=r[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,R=x;M<R;M+=3){const T=M,A=M+1,k=M+2;i=as(this,u,e,n,c,d,f,T,A,k),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const v=m,x=m+1,M=m+2;i=as(this,r,e,n,c,d,f,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function od(a,e,t,n,i,s,r,o){let l;if(e.side===Mt?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===wn,o),l===null)return null;ss.copy(o),ss.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:a}}function as(a,e,t,n,i,s,r,o,l,c){a.getVertexPosition(o,Kn),a.getVertexPosition(l,Qn),a.getVertexPosition(c,Zn);const d=od(a,e,t,n,Kn,Qn,Zn,is);if(d){i&&(es.fromBufferAttribute(i,o),ts.fromBufferAttribute(i,l),ns.fromBufferAttribute(i,c),d.uv=qt.getInterpolation(is,Kn,Qn,Zn,es,ts,ns,new We)),s&&(es.fromBufferAttribute(s,o),ts.fromBufferAttribute(s,l),ns.fromBufferAttribute(s,c),d.uv1=qt.getInterpolation(is,Kn,Qn,Zn,es,ts,ns,new We),d.uv2=d.uv1),r&&($r.fromBufferAttribute(r,o),Yr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,c),d.normal=qt.getInterpolation(is,Kn,Qn,Zn,$r,Yr,jr,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};qt.getNormal(Kn,Qn,Zn,f.normal),d.face=f}return d}class Ae extends Nt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function _(g,m,u,v,x,M,R,T,A,k,y){const w=M/A,z=R/k,G=M/2,J=R/2,L=T/2,B=A+1,W=k+1;let $=0,q=0;const X=new I;for(let Y=0;Y<W;Y++){const ne=Y*z-J;for(let ie=0;ie<B;ie++){const V=ie*w-G;X[g]=V*v,X[m]=ne*x,X[u]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[u]=T>0?1:-1,d.push(X.x,X.y,X.z),f.push(ie/A),f.push(1-Y/k),$+=1}}for(let Y=0;Y<k;Y++)for(let ne=0;ne<A;ne++){const ie=h+ne+B*Y,V=h+ne+B*(Y+1),j=h+(ne+1)+B*(Y+1),ce=h+(ne+1)+B*Y;l.push(ie,V,ce),l.push(V,j,ce),q+=6}o.addGroup(p,q,y),p+=q,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ae(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const n=ui(a[t]);for(const i in n)e[i]=n[i]}return e}function ld(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function bl(a){return a.getRenderTarget()===null?a.outputColorSpace:je.workingColorSpace}const cd={clone:ui,merge:Tt};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ml extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,ei=1;class ud extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(Jn,ei,e,t);i.layers=this.layers,this.add(i);const s=new Bt(Jn,ei,e,t);s.layers=this.layers,this.add(s);const r=new Bt(Jn,ei,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Jn,ei,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Jn,ei,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Jn,ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wl extends Dt{constructor(e,t,n,i,s,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pd extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===On?mt:zt),this.texture=new wl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ae(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:yn});s.uniforms.tEquirect.value=t;const r=new C(i,s),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=Ot),new ud(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const na=new I,fd=new I,md=new He;class In{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=na.subVectors(n,t).cross(fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),i=this.coplanarPoint(na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Ba,rs=new I;class za{constructor(e=new In,t=new In,n=new In,i=new In,s=new In,r=new In){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],d=i[5],f=i[6],h=i[7],p=i[8],_=i[9],g=i[10],m=i[11],u=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,m-p,M-u).normalize(),n[1].setComponents(l+s,h+c,m+p,M+u).normalize(),n[2].setComponents(l+r,h+d,m+_,M+v).normalize(),n[3].setComponents(l-r,h-d,m-_,M-v).normalize(),n[4].setComponents(l-o,h-f,m-g,M-x).normalize(),t===cn)n[5].setComponents(l+o,h+f,m+g,M+x).normalize();else if(t===xs)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sl(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function gd(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const f=c.array,h=c.usage,p=f.byteLength,_=a.createBuffer();a.bindBuffer(d,_),a.bufferData(d,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=a.SHORT;else if(f instanceof Uint32Array)g=a.UNSIGNED_INT;else if(f instanceof Int32Array)g=a.INT;else if(f instanceof Int8Array)g=a.BYTE;else if(f instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,f){const h=d.array,p=d._updateRange,_=d.updateRanges;if(a.bindBuffer(f,c),p.count===-1&&_.length===0&&a.bufferSubData(f,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const u=_[g];t?a.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):a.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}p.count!==-1&&(t?a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(a.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:r,remove:o,update:l}}class _t extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,f=e/o,h=t/l,p=[],_=[],g=[],m=[];for(let u=0;u<d;u++){const v=u*h-r;for(let x=0;x<c;x++){const M=x*f-s;_.push(M,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;p.push(x,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(g,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.widthSegments,e.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
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
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sh=`#ifdef USE_GRADIENTMAP
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
}`,ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ch=`uniform bool receiveShadow;
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
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mh=`PhysicalMaterial material;
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
#endif`,gh=`struct PhysicalMaterial {
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
}`,_h=`
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
#endif`,vh=`#if defined( RE_IndirectDiffuse )
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
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ah=`#if defined( USE_POINTS_UV )
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
#endif`,Ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ph=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
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
#endif`,Ih=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Dh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
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
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$h=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tu=`float getShadowMask() {
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
}`,nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
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
#endif`,su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
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
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,du=`#ifdef USE_TRANSMISSION
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
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
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
}`,vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`#include <common>
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
}`,wu=`#if DEPTH_PACKING == 3200
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
}`,Su=`#define DISTANCE
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
}`,Eu=`#define DISTANCE
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
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`uniform float scale;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Pu=`#include <common>
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
}`,Lu=`uniform vec3 diffuse;
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
}`,Iu=`#define LAMBERT
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
}`,ku=`#define LAMBERT
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
}`,Du=`#define MATCAP
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
}`,Nu=`#define MATCAP
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
}`,Uu=`#define NORMAL
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
}`,Fu=`#define NORMAL
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
}`,Ou=`#define PHONG
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
}`,Bu=`#define PHONG
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
}`,zu=`#define STANDARD
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
}`,Hu=`#define STANDARD
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
}`,Gu=`#define TOON
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
}`,Vu=`#define TOON
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
}`,Wu=`uniform float size;
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
}`,qu=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,$u=`uniform vec3 color;
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
}`,Yu=`uniform float rotation;
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
}`,ju=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:xd,alphamap_pars_fragment:yd,alphatest_fragment:bd,alphatest_pars_fragment:Md,aomap_fragment:wd,aomap_pars_fragment:Sd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Cd,bsdfs:Rd,iridescence_fragment:Pd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:qd,emissivemap_pars_fragment:Xd,colorspace_fragment:$d,colorspace_pars_fragment:Yd,envmap_fragment:jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Qd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:dh,envmap_vertex:Jd,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:nh,fog_pars_fragment:ih,gradientmap_pars_fragment:sh,lightmap_fragment:ah,lightmap_pars_fragment:rh,lights_lambert_fragment:oh,lights_lambert_pars_fragment:lh,lights_pars_begin:ch,lights_toon_fragment:hh,lights_toon_pars_fragment:uh,lights_phong_fragment:ph,lights_phong_pars_fragment:fh,lights_physical_fragment:mh,lights_physical_pars_fragment:gh,lights_fragment_begin:_h,lights_fragment_maps:vh,lights_fragment_end:xh,logdepthbuf_fragment:yh,logdepthbuf_pars_fragment:bh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:wh,map_fragment:Sh,map_pars_fragment:Eh,map_particle_fragment:Th,map_particle_pars_fragment:Ah,metalnessmap_fragment:Ch,metalnessmap_pars_fragment:Rh,morphcolor_vertex:Ph,morphnormal_vertex:Lh,morphtarget_pars_vertex:Ih,morphtarget_vertex:kh,normal_fragment_begin:Dh,normal_fragment_maps:Nh,normal_pars_fragment:Uh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:Gh,iridescence_pars_fragment:Vh,opaque_fragment:Wh,packing:qh,premultiplied_alpha_fragment:Xh,project_vertex:$h,dithering_fragment:Yh,dithering_pars_fragment:jh,roughnessmap_fragment:Kh,roughnessmap_pars_fragment:Qh,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:Jh,shadowmap_vertex:eu,shadowmask_pars_fragment:tu,skinbase_vertex:nu,skinning_pars_vertex:iu,skinning_vertex:su,skinnormal_vertex:au,specularmap_fragment:ru,specularmap_pars_fragment:ou,tonemapping_fragment:lu,tonemapping_pars_fragment:cu,transmission_fragment:du,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:pu,uv_vertex:fu,worldpos_vertex:mu,background_vert:gu,background_frag:_u,backgroundCube_vert:vu,backgroundCube_frag:xu,cube_vert:yu,cube_frag:bu,depth_vert:Mu,depth_frag:wu,distanceRGBA_vert:Su,distanceRGBA_frag:Eu,equirect_vert:Tu,equirect_frag:Au,linedashed_vert:Cu,linedashed_frag:Ru,meshbasic_vert:Pu,meshbasic_frag:Lu,meshlambert_vert:Iu,meshlambert_frag:ku,meshmatcap_vert:Du,meshmatcap_frag:Nu,meshnormal_vert:Uu,meshnormal_frag:Fu,meshphong_vert:Ou,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Hu,meshtoon_vert:Gu,meshtoon_frag:Vu,points_vert:Wu,points_frag:qu,shadow_vert:Xu,shadow_frag:$u,sprite_vert:Yu,sprite_frag:ju},ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Kt={basic:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Tt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Tt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Tt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Tt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Tt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Tt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Tt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Tt([ae.lights,ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Kt.physical={uniforms:Tt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const os={r:0,b:0,g:0};function Ku(a,e,t,n,i,s,r){const o=new Ve(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(m,u){let v=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const M=a.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===bs)?(d===void 0&&(d=new C(new Ae(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ui(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=je.getTransfer(x.colorSpace)!==Je,(f!==x||h!==x.version||p!==a.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,p=a.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new C(new _t(2,2),new hn({name:"BackgroundMaterial",uniforms:ui(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,u){m.getRGB(os,bl(a)),n.buffers.color.setClear(os.r,os.g,os.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Qu(a,e,t,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function f(L,B,W,$,q){let X=!1;if(r){const Y=g($,W,B);c!==Y&&(c=Y,p(c.object)),X=u(L,$,W,q),X&&v(L,$,W,q)}else{const Y=B.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==Y)&&(c.geometry=$.id,c.program=W.id,c.wireframe=Y,X=!0)}q!==null&&t.update(q,a.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,k(L,B,W,$),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?a.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?a.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,B,W){const $=W.wireframe===!0;let q=o[L.id];q===void 0&&(q={},o[L.id]=q);let X=q[B.id];X===void 0&&(X={},q[B.id]=X);let Y=X[$];return Y===void 0&&(Y=m(h()),X[$]=Y),Y}function m(L){const B=[],W=[],$=[];for(let q=0;q<i;q++)B[q]=0,W[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,B,W,$){const q=c.attributes,X=B.attributes;let Y=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const j=q[ie];let ce=X[ie];if(ce===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==$}function v(L,B,W,$){const q={},X=B.attributes;let Y=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let j=X[ie];j===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),q[ie]=ce,Y++}c.attributes=q,c.attributesNum=Y,c.index=$}function x(){const L=c.newAttributes;for(let B=0,W=L.length;B<W;B++)L[B]=0}function M(L){R(L,0)}function R(L,B){const W=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;W[L]=1,$[L]===0&&(a.enableVertexAttribArray(L),$[L]=1),q[L]!==B&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),q[L]=B)}function T(){const L=c.newAttributes,B=c.enabledAttributes;for(let W=0,$=B.length;W<$;W++)B[W]!==L[W]&&(a.disableVertexAttribArray(W),B[W]=0)}function A(L,B,W,$,q,X,Y){Y===!0?a.vertexAttribIPointer(L,B,W,q,X):a.vertexAttribPointer(L,B,W,$,q,X)}function k(L,B,W,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=$.attributes,X=W.getAttributes(),Y=B.defaultAttributeValues;for(const ne in X){const ie=X[ne];if(ie.location>=0){let V=q[ne];if(V===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const j=V.normalized,ce=V.itemSize,ve=t.get(V);if(ve===void 0)continue;const _e=ve.buffer,Le=ve.type,ke=ve.bytesPerElement,Se=n.isWebGL2===!0&&(Le===a.INT||Le===a.UNSIGNED_INT||V.gpuType===sl);if(V.isInterleavedBufferAttribute){const qe=V.data,N=qe.stride,wt=V.offset;if(qe.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)R(ie.location+ye,qe.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ye=0;ye<ie.locationSize;ye++)M(ie.location+ye);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let ye=0;ye<ie.locationSize;ye++)A(ie.location+ye,ce/ie.locationSize,Le,j,N*ke,(wt+ce/ie.locationSize*ye)*ke,Se)}else{if(V.isInstancedBufferAttribute){for(let qe=0;qe<ie.locationSize;qe++)R(ie.location+qe,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let qe=0;qe<ie.locationSize;qe++)M(ie.location+qe);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let qe=0;qe<ie.locationSize;qe++)A(ie.location+qe,ce/ie.locationSize,Le,j,ce*ke,ce/ie.locationSize*qe*ke,Se)}}else if(Y!==void 0){const j=Y[ne];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(ie.location,j);break;case 3:a.vertexAttrib3fv(ie.location,j);break;case 4:a.vertexAttrib4fv(ie.location,j);break;default:a.vertexAttrib1fv(ie.location,j)}}}}T()}function y(){G();for(const L in o){const B=o[L];for(const W in B){const $=B[W];for(const q in $)_($[q].object),delete $[q];delete B[W]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const B=o[L.id];for(const W in B){const $=B[W];for(const q in $)_($[q].object),delete $[q];delete B[W]}delete o[L.id]}function z(L){for(const B in o){const W=o[B];if(W[L.id]===void 0)continue;const $=W[L.id];for(const q in $)_($[q].object),delete $[q];delete W[L.id]}}function G(){J(),d=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:J,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function Zu(a,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}function o(d,f){a.drawArrays(s,d,f),t.update(f,s,1)}function l(d,f,h){if(h===0)return;let p,_;if(i)p=a,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,d,f,h),t.update(f,s,h)}function c(d,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{p.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ju(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),u=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=r||e.has("OES_texture_float"),R=x&&M,T=r?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:T}}function ep(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new In,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,u=a.get(f);if(!i||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:n,x=v*4;let M=u.clippingState||null;l.value=M,M=d(_,h,x,p);for(let R=0;R!==x;++R)M[R]=t[R];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=p;x!==g;++x,M+=4)r.copy(f[x]).applyMatrix4(v,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tp(a){let e=new WeakMap;function t(r,o){return o===Sa?r.mapping=ci:o===Ea&&(r.mapping=di),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Sa||o===Ea)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new pd(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ha extends Ml{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Kr=[.125,.215,.35,.446,.526,.582],Nn=20,ia=new Ha,Qr=new Ve;let sa=null,aa=0,ra=0;const kn=(1+Math.sqrt(5))/2,ti=1/kn,Zr=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,kn,ti),new I(0,kn,-ti),new I(ti,0,kn),new I(-ti,0,kn),new I(kn,ti,0),new I(-kn,ti,0)];class Jr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,aa,ra),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ii,format:$t,colorSpace:dn,depthBuffer:!1},i=eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=ip(s,e,t)}return i}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Qr),d.toneMapping=bn,d.autoClear=!1;const p=new ki({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),_=new C(new Ae,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Qr),g=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;ls(i,v*x,u>2?x:0,x,x),d.setRenderTarget(i),g&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Zr[(i-1)%Zr.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new C(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):Nn;m>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const u=[];let v=0;for(let A=0;A<Nn;++A){const k=A/g,y=Math.exp(-k*k/2);u.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-si?i-x+si:0),T=4*(this._cubeSize-M);ls(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(f,ia)}}function np(a){const e=[],t=[],n=[];let i=a;const s=a-si+1+Kr.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-si?l=Kr[r-a+si-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,g=3,m=2,u=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,k=T>2?0:-1,y=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];v.set(y,g*_*T),x.set(h,m*_*T);const w=[T,T,T,T,T,T];M.set(w,u*_*T)}const R=new Nt;R.setAttribute("position",new Qt(v,g)),R.setAttribute("uv",new Qt(x,m)),R.setAttribute("faceIndex",new Qt(M,u)),e.push(R),i>si&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eo(a,e,t){const n=new Bn(a,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function ip(a,e,t){const n=new Float32Array(Nn),i=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function to(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function no(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function sp(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,d=l===ci||l===di;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Jr(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&i(f)){t===null&&(t=new Jr(a));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ap(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rp(a,e,t,n){const i={},s=new WeakMap;function r(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,u=g.length;m<u;m++)e.remove(g[m])}h.removeEventListener("dispose",r),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],a.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,u=g.length;m<u;m++)e.update(g[m],a.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],T=v[x+1],A=v[x+2];h.push(R,T,T,A,A,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,T=x+1,A=x+2;h.push(R,T,T,A,A,R)}}else return;const m=new(pl(h)?yl:xl)(h,1);m.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function op(a,e,t,n){const i=n.isWebGL2;let s;function r(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,_){a.drawElements(s,_,o,p*l),t.update(_,s,1)}function f(p,_,g){if(g===0)return;let m,u;if(i)m=a,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,o,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<g;u++)this.render(p[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,o,p,0,g);let u=0;for(let v=0;v<g;v++)u+=_[v];t.update(u,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function lp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cp(a,e){return a[0]-e[0]}function dp(a,e){return Math.abs(e[1])-Math.abs(a[1])}function hp(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==g){let B=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),R===!0&&(y=3);let w=d.attributes.position.count*y,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const G=new Float32Array(w*z*4*g),J=new gl(G,w,z,g);J.type=xn,J.needsUpdate=!0;const L=y*4;for(let W=0;W<g;W++){const $=T[W],q=A[W],X=k[W],Y=w*z*4*W;for(let ne=0;ne<$.count;ne++){const ie=ne*L;x===!0&&(r.fromBufferAttribute($,ne),G[Y+ie+0]=r.x,G[Y+ie+1]=r.y,G[Y+ie+2]=r.z,G[Y+ie+3]=0),M===!0&&(r.fromBufferAttribute(q,ne),G[Y+ie+4]=r.x,G[Y+ie+5]=r.y,G[Y+ie+6]=r.z,G[Y+ie+7]=0),R===!0&&(r.fromBufferAttribute(X,ne),G[Y+ie+8]=r.x,G[Y+ie+9]=r.y,G[Y+ie+10]=r.z,G[Y+ie+11]=X.itemSize===4?r.w:1)}}m={count:g,texture:J,size:new We(w,z)},s.set(d,m),d.addEventListener("dispose",B)}let u=0;for(let x=0;x<h.length;x++)u+=h[x];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[d.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[d.id]=g}for(let M=0;M<_;M++){const R=g[M];R[0]=M,R[1]=h[M]}g.sort(dp);for(let M=0;M<8;M++)M<_&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(cp);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const R=o[M],T=R[0],A=R[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+M)!==m[T]&&d.setAttribute("morphTarget"+M,m[T]),u&&d.getAttribute("morphNormal"+M)!==u[T]&&d.setAttribute("morphNormal"+M,u[T]),i[M]=A,v+=A):(m&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),i[M]=0)}const x=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function up(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class El extends Dt{constructor(e,t,n,i,s,r,o,l,c,d){if(d=d!==void 0?d:Fn,d!==Fn&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Fn&&(n=vn),n===void 0&&d===hi&&(n=Un),super(null,i,s,r,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tl=new Dt,Al=new El(1,1);Al.compareFunction=ul;const Cl=new gl,Rl=new jc,Pl=new wl,io=[],so=[],ao=new Float32Array(16),ro=new Float32Array(9),oo=new Float32Array(4);function mi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=io[i];if(s===void 0&&(s=new Float32Array(i),io[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function dt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ht(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Es(a,e){let t=so[e];t===void 0&&(t=new Int32Array(e),so[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function pp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function fp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2fv(this.addr,e),ht(t,e)}}function mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;a.uniform3fv(this.addr,e),ht(t,e)}}function gp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4fv(this.addr,e),ht(t,e)}}function _p(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;oo.set(n),a.uniformMatrix2fv(this.addr,!1,oo),ht(t,n)}}function vp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;ro.set(n),a.uniformMatrix3fv(this.addr,!1,ro),ht(t,n)}}function xp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;ao.set(n),a.uniformMatrix4fv(this.addr,!1,ao),ht(t,n)}}function yp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function bp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2iv(this.addr,e),ht(t,e)}}function Mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;a.uniform3iv(this.addr,e),ht(t,e)}}function wp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4iv(this.addr,e),ht(t,e)}}function Sp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ep(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2uiv(this.addr,e),ht(t,e)}}function Tp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;a.uniform3uiv(this.addr,e),ht(t,e)}}function Ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4uiv(this.addr,e),ht(t,e)}}function Cp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const s=this.type===a.SAMPLER_2D_SHADOW?Al:Tl;t.setTexture2D(e||s,i)}function Rp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rl,i)}function Pp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pl,i)}function Lp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cl,i)}function Ip(a){switch(a){case 5126:return pp;case 35664:return fp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return Mp;case 35669:case 35673:return wp;case 5125:return Sp;case 36294:return Ep;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function kp(a,e){a.uniform1fv(this.addr,e)}function Dp(a,e){const t=mi(e,this.size,2);a.uniform2fv(this.addr,t)}function Np(a,e){const t=mi(e,this.size,3);a.uniform3fv(this.addr,t)}function Up(a,e){const t=mi(e,this.size,4);a.uniform4fv(this.addr,t)}function Fp(a,e){const t=mi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Op(a,e){const t=mi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Bp(a,e){const t=mi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function zp(a,e){a.uniform1iv(this.addr,e)}function Hp(a,e){a.uniform2iv(this.addr,e)}function Gp(a,e){a.uniform3iv(this.addr,e)}function Vp(a,e){a.uniform4iv(this.addr,e)}function Wp(a,e){a.uniform1uiv(this.addr,e)}function qp(a,e){a.uniform2uiv(this.addr,e)}function Xp(a,e){a.uniform3uiv(this.addr,e)}function $p(a,e){a.uniform4uiv(this.addr,e)}function Yp(a,e,t){const n=this.cache,i=e.length,s=Es(t,i);dt(n,s)||(a.uniform1iv(this.addr,s),ht(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Tl,s[r])}function jp(a,e,t){const n=this.cache,i=e.length,s=Es(t,i);dt(n,s)||(a.uniform1iv(this.addr,s),ht(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Rl,s[r])}function Kp(a,e,t){const n=this.cache,i=e.length,s=Es(t,i);dt(n,s)||(a.uniform1iv(this.addr,s),ht(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Pl,s[r])}function Qp(a,e,t){const n=this.cache,i=e.length,s=Es(t,i);dt(n,s)||(a.uniform1iv(this.addr,s),ht(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Cl,s[r])}function Zp(a){switch(a){case 5126:return kp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return qp;case 36295:return Xp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Qp}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ip(t.type)}}class ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zp(t.type)}}class tf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function lo(a,e){a.seq.push(e),a.map[e.id]=e}function nf(a,e,t){const n=a.name,i=n.length;for(oa.lastIndex=0;;){const s=oa.exec(n),r=oa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){lo(t,c===void 0?new Jp(o,a,e):new ef(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new tf(o),lo(t,f)),t=f}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);nf(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function co(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const sf=37297;let af=0;function rf(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function of(a){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(a);let n;switch(e===t?n="":e===vs&&t===_s?n="LinearDisplayP3ToLinearSRGB":e===_s&&t===vs&&(n="LinearSRGBToLinearDisplayP3"),a){case dn:case Ms:return[n,"LinearTransferOETF"];case mt:case Oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function ho(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rf(a.getShaderSource(e),r)}else return i}function lf(a,e){const t=of(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cf(a,e){let t;switch(e){case _c:t="Linear";break;case vc:t="Reinhard";break;case xc:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case Mc:t="AgX";break;case bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function df(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function hf(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ai).join(`
`)}function uf(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pf(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ai(a){return a!==""}function uo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function po(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(a){return a.replace(ff,gf)}const mf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gf(a,e){let t=Ne[e];if(t===void 0){const n=mf.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const _f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(a){return a.replace(_f,vf)}function vf(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mo(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xf(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function yf(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ci:case di:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bf(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Mf(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case mc:e="ENVMAP_BLENDING_MIX";break;case gc:e="ENVMAP_BLENDING_ADD";break}return e}function wf(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sf(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=xf(t),c=yf(t),d=bf(t),f=Mf(t),h=wf(t),p=t.isWebGL2?"":df(t),_=hf(t),g=uf(s),m=i.createProgram();let u,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ai).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ai).join(`
`),v.length>0&&(v+=`
`)):(u=[mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),v=[p,mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==bn?cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ai).join(`
`)),r=La(r),r=uo(r,t),r=po(r,t),o=La(o),o=uo(o,t),o=po(o,t),r=fo(r),o=fo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+u+r,R=x+v+o,T=co(i,i.VERTEX_SHADER,M),A=co(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function k(G){if(a.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),B=i.getShaderInfoLog(A).trim();let W=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,T,A);else{const q=ho(i,T,"vertex"),X=ho(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||B==="")&&($=!1);$&&(G.diagnostics={runnable:W,programLog:J,vertexShader:{log:L,prefix:u},fragmentShader:{log:B,prefix:v}})}i.deleteShader(T),i.deleteShader(A),y=new hs(i,m),w=pf(i,m)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,sf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=af++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let Ef=0;class Tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Af(e),t.set(e,n)),n}}class Af{constructor(e){this.id=Ef++,this.code=e,this.usedTimes=0}}function Cf(a,e,t,n,i,s,r){const o=new _l,l=new Tf,c=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,w,z,G,J){const L=G.fog,B=J.geometry,W=y.isMeshStandardMaterial?G.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),q=$&&$.mapping===bs?$.image.height:null,X=_[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let V,j,ce,ve;if(X){const St=Kt[X];V=St.vertexShader,j=St.fragmentShader}else V=y.vertexShader,j=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const _e=a.getRenderTarget(),Le=J.isInstancedMesh===!0,ke=J.isBatchedMesh===!0,Se=!!y.map,qe=!!y.matcap,N=!!$,wt=!!y.aoMap,ye=!!y.lightMap,Re=!!y.bumpMap,fe=!!y.normalMap,tt=!!y.displacementMap,Ue=!!y.emissiveMap,E=!!y.metalnessMap,b=!!y.roughnessMap,F=y.anisotropy>0,Z=y.clearcoat>0,Q=y.iridescence>0,ee=y.sheen>0,me=y.transmission>0,le=F&&!!y.anisotropyMap,ue=Z&&!!y.clearcoatMap,we=Z&&!!y.clearcoatNormalMap,Fe=Z&&!!y.clearcoatRoughnessMap,K=Q&&!!y.iridescenceMap,Ye=Q&&!!y.iridescenceThicknessMap,Ge=ee&&!!y.sheenColorMap,Ce=ee&&!!y.sheenRoughnessMap,xe=!!y.specularMap,pe=!!y.specularColorMap,De=!!y.specularIntensityMap,$e=me&&!!y.transmissionMap,it=me&&!!y.thicknessMap,Be=!!y.gradientMap,se=!!y.alphaMap,P=y.alphaTest>0,re=!!y.alphaHash,oe=!!y.extensions,Ee=!!B.attributes.uv1,be=!!B.attributes.uv2,Ke=!!B.attributes.uv3;let Qe=bn;return y.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Qe=a.toneMapping),{isWebGL2:d,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:j,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ke,instancing:Le,instancingColor:Le&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?a.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:dn,map:Se,matcap:qe,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:q,aoMap:wt,lightMap:ye,bumpMap:Re,normalMap:fe,displacementMap:h&&tt,emissiveMap:Ue,normalMapObjectSpace:fe&&y.normalMapType===Nc,normalMapTangentSpace:fe&&y.normalMapType===Dc,metalnessMap:E,roughnessMap:b,anisotropy:F,anisotropyMap:le,clearcoat:Z,clearcoatMap:ue,clearcoatNormalMap:we,clearcoatRoughnessMap:Fe,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Ye,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:pe,specularIntensityMap:De,transmission:me,transmissionMap:$e,thicknessMap:it,gradientMap:Be,opaque:y.transparent===!1&&y.blending===oi,alphaMap:se,alphaTest:P,alphaHash:re,combine:y.combine,mapUv:Se&&g(y.map.channel),aoMapUv:wt&&g(y.aoMap.channel),lightMapUv:ye&&g(y.lightMap.channel),bumpMapUv:Re&&g(y.bumpMap.channel),normalMapUv:fe&&g(y.normalMap.channel),displacementMapUv:tt&&g(y.displacementMap.channel),emissiveMapUv:Ue&&g(y.emissiveMap.channel),metalnessMapUv:E&&g(y.metalnessMap.channel),roughnessMapUv:b&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:ue&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(y.sheenRoughnessMap.channel),specularMapUv:xe&&g(y.specularMap.channel),specularColorMapUv:pe&&g(y.specularColorMap.channel),specularIntensityMapUv:De&&g(y.specularIntensityMap.channel),transmissionMapUv:$e&&g(y.transmissionMap.channel),thicknessMapUv:it&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:be,vertexUv3s:Ke,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(Se||se),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:Qe,useLegacyLights:a._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Mt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)w.push(z),w.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(v(w,y),x(w,y),w.push(a.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const w=_[y.type];let z;if(w){const G=Kt[w];z=cd.clone(G.uniforms)}else z=y.uniforms;return z}function R(y,w){let z;for(let G=0,J=c.length;G<J;G++){const L=c[G];if(L.cacheKey===w){z=L,++z.usedTimes;break}}return z===void 0&&(z=new Sf(a,w,y,s),c.push(z)),z}function T(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:k}}function Rf(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Pf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function go(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _o(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f,h,p,_,g,m){let u=a[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},a[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=m),e++,u}function o(f,h,p,_,g,m){const u=r(f,h,p,_,g,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(f,h,p,_,g,m){const u=r(f,h,p,_,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||Pf),n.length>1&&n.sort(h||go),i.length>1&&i.sort(h||go)}function d(){for(let f=e,h=a.length;f<h;f++){const p=a[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function Lf(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new _o,a.set(n,[r])):i>=s.length?(r=new _o,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function If(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function kf(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Df=0;function Nf(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Uf(a,e){const t=new If,n=kf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new I);const s=new I,r=new ct,o=new ct;function l(d,f){let h=0,p=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,u=0,v=0,x=0,M=0,R=0,T=0,A=0,k=0,y=0;d.sort(Nf);const w=f===!0?Math.PI:1;for(let G=0,J=d.length;G<J;G++){const L=d[G],B=L.color,W=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*W*w,p+=B.g*W*w,_+=B.b*W*w;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],W);y++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=L.shadow.matrix,M++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(W*w),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[u]=X;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&k++),i.spotLightMatrix[u]=Y.matrix,L.castShadow){const ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,i.spotShadow[u]=ne,i.spotShadowMap[u]=q,T++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=X,v++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ne=n.get(L);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W*w),X.groundColor.copy(L.groundColor).multiplyScalar(W*w),i.hemi[x]=X,x++}}v>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==g||z.pointLength!==m||z.spotLength!==u||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==M||z.numPointShadows!==R||z.numSpotShadows!==T||z.numSpotMaps!==A||z.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+A-k,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=y,z.directionalLength=g,z.pointLength=m,z.spotLength=u,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=M,z.numPointShadows=R,z.numSpotShadows=T,z.numSpotMaps=A,z.numLightProbes=y,i.version=Df++)}function c(d,f){let h=0,p=0,_=0,g=0,m=0;const u=f.matrixWorldInverse;for(let v=0,x=d.length;v<x;v++){const M=d[v];if(M.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(M.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),o.identity(),r.copy(M.matrixWorld),r.premultiply(u),o.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:i}}function vo(a,e){const t=new Uf(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Ff(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new vo(a,e),t.set(s,[l])):r>=o.length?(l=new vo(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Of extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
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
}`;function Gf(a,e,t){let n=new za;const i=new We,s=new We,r=new gt,o=new Of({depthPacking:kc}),l=new Bf,c={},d=t.maxTextureSize,f={[wn]:Mt,[Mt]:wn,[ln]:ln},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:zf,fragmentShader:Hf}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new C(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let u=this.type;this.render=function(T,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=a.getRenderTarget(),w=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),G=a.state;G.setBlending(yn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=u!==on&&this.type===on,L=u===on&&this.type!==on;for(let B=0,W=T.length;B<W;B++){const $=T[B],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const X=q.getFrameExtents();if(i.multiply(X),s.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/X.x),i.x=s.x*X.x,q.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/X.y),i.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||J===!0||L===!0){const ne=this.type!==on?{minFilter:At,magFilter:At}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(i.x,i.y,ne),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const Y=q.getViewportCount();for(let ne=0;ne<Y;ne++){const ie=q.getViewport(ne);r.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),G.viewport(r),q.updateMatrices($,ne),n=q.getFrustum(),M(A,k,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===on&&v(q,k),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,a.setRenderTarget(y,w,z)};function v(T,A){const k=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(A,null,k,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(A,null,k,p,g,null)}function x(T,A,k,y){let w=null;const z=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)w=z;else if(w=k.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=w.uuid,J=A.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let B=L[J];B===void 0&&(B=w.clone(),L[J]=B,A.addEventListener("dispose",R)),w=B}if(w.visible=A.visible,w.wireframe=A.wireframe,y===on?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:f[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=a.properties.get(w);G.light=k}return w}function M(T,A,k,y,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===on)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const J=e.update(T),L=T.material;if(Array.isArray(L)){const B=J.groups;for(let W=0,$=B.length;W<$;W++){const q=B[W],X=L[q.materialIndex];if(X&&X.visible){const Y=x(T,X,y,w);T.onBeforeShadow(a,T,A,k,J,Y,q),a.renderBufferDirect(k,null,J,Y,T,q),T.onAfterShadow(a,T,A,k,J,Y,q)}}}else if(L.visible){const B=x(T,L,y,w);T.onBeforeShadow(a,T,A,k,J,B,null),a.renderBufferDirect(k,null,J,B,T,null),T.onAfterShadow(a,T,A,k,J,B,null)}}const G=T.children;for(let J=0,L=G.length;J<L;J++)M(G[J],A,k,y,w)}function R(T){T.target.removeEventListener("dispose",R);for(const k in c){const y=c[k],w=T.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Vf(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const re=new gt;let oe=null;const Ee=new gt(0,0,0,0);return{setMask:function(be){oe!==be&&!P&&(a.colorMask(be,be,be,be),oe=be)},setLocked:function(be){P=be},setClear:function(be,Ke,Qe,ut,St){St===!0&&(be*=ut,Ke*=ut,Qe*=ut),re.set(be,Ke,Qe,ut),Ee.equals(re)===!1&&(a.clearColor(be,Ke,Qe,ut),Ee.copy(re))},reset:function(){P=!1,oe=null,Ee.set(-1,0,0,0)}}}function s(){let P=!1,re=null,oe=null,Ee=null;return{setTest:function(be){be?ke(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(be){re!==be&&!P&&(a.depthMask(be),re=be)},setFunc:function(be){if(oe!==be){switch(be){case lc:a.depthFunc(a.NEVER);break;case cc:a.depthFunc(a.ALWAYS);break;case dc:a.depthFunc(a.LESS);break;case ms:a.depthFunc(a.LEQUAL);break;case hc:a.depthFunc(a.EQUAL);break;case uc:a.depthFunc(a.GEQUAL);break;case pc:a.depthFunc(a.GREATER);break;case fc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}oe=be}},setLocked:function(be){P=be},setClear:function(be){Ee!==be&&(a.clearDepth(be),Ee=be)},reset:function(){P=!1,re=null,oe=null,Ee=null}}}function r(){let P=!1,re=null,oe=null,Ee=null,be=null,Ke=null,Qe=null,ut=null,St=null;return{setTest:function(Ze){P||(Ze?ke(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!P&&(a.stencilMask(Ze),re=Ze)},setFunc:function(Ze,Et,Yt){(oe!==Ze||Ee!==Et||be!==Yt)&&(a.stencilFunc(Ze,Et,Yt),oe=Ze,Ee=Et,be=Yt)},setOp:function(Ze,Et,Yt){(Ke!==Ze||Qe!==Et||ut!==Yt)&&(a.stencilOp(Ze,Et,Yt),Ke=Ze,Qe=Et,ut=Yt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){St!==Ze&&(a.clearStencil(Ze),St=Ze)},reset:function(){P=!1,re=null,oe=null,Ee=null,be=null,Ke=null,Qe=null,ut=null,St=null}}}const o=new i,l=new s,c=new r,d=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,u=!1,v=null,x=null,M=null,R=null,T=null,A=null,k=null,y=new Ve(0,0,0),w=0,z=!1,G=null,J=null,L=null,B=null,W=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=X>=2);let ne=null,ie={};const V=a.getParameter(a.SCISSOR_BOX),j=a.getParameter(a.VIEWPORT),ce=new gt().fromArray(V),ve=new gt().fromArray(j);function _e(P,re,oe,Ee){const be=new Uint8Array(4),Ke=a.createTexture();a.bindTexture(P,Ke),a.texParameteri(P,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(P,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<oe;Qe++)n&&(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)?a.texImage3D(re,0,a.RGBA,1,1,Ee,0,a.RGBA,a.UNSIGNED_BYTE,be):a.texImage2D(re+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,be);return Ke}const Le={};Le[a.TEXTURE_2D]=_e(a.TEXTURE_2D,a.TEXTURE_2D,1),Le[a.TEXTURE_CUBE_MAP]=_e(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[a.TEXTURE_2D_ARRAY]=_e(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Le[a.TEXTURE_3D]=_e(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(a.DEPTH_TEST),l.setFunc(ms),Ue(!1),E(Za),ke(a.CULL_FACE),fe(yn);function ke(P){h[P]!==!0&&(a.enable(P),h[P]=!0)}function Se(P){h[P]!==!1&&(a.disable(P),h[P]=!1)}function qe(P,re){return p[P]!==re?(a.bindFramebuffer(P,re),p[P]=re,n&&(P===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=re),P===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=re)),!0):!1}function N(P,re){let oe=g,Ee=!1;if(P)if(oe=_.get(re),oe===void 0&&(oe=[],_.set(re,oe)),P.isWebGLMultipleRenderTargets){const be=P.texture;if(oe.length!==be.length||oe[0]!==a.COLOR_ATTACHMENT0){for(let Ke=0,Qe=be.length;Ke<Qe;Ke++)oe[Ke]=a.COLOR_ATTACHMENT0+Ke;oe.length=be.length,Ee=!0}}else oe[0]!==a.COLOR_ATTACHMENT0&&(oe[0]=a.COLOR_ATTACHMENT0,Ee=!0);else oe[0]!==a.BACK&&(oe[0]=a.BACK,Ee=!0);Ee&&(t.isWebGL2?a.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function wt(P){return m!==P?(a.useProgram(P),m=P,!0):!1}const ye={[Dn]:a.FUNC_ADD,[$l]:a.FUNC_SUBTRACT,[Yl]:a.FUNC_REVERSE_SUBTRACT};if(n)ye[nr]=a.MIN,ye[ir]=a.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[nr]=P.MIN_EXT,ye[ir]=P.MAX_EXT)}const Re={[jl]:a.ZERO,[Kl]:a.ONE,[Ql]:a.SRC_COLOR,[Ma]:a.SRC_ALPHA,[ic]:a.SRC_ALPHA_SATURATE,[tc]:a.DST_COLOR,[Jl]:a.DST_ALPHA,[Zl]:a.ONE_MINUS_SRC_COLOR,[wa]:a.ONE_MINUS_SRC_ALPHA,[nc]:a.ONE_MINUS_DST_COLOR,[ec]:a.ONE_MINUS_DST_ALPHA,[sc]:a.CONSTANT_COLOR,[ac]:a.ONE_MINUS_CONSTANT_COLOR,[rc]:a.CONSTANT_ALPHA,[oc]:a.ONE_MINUS_CONSTANT_ALPHA};function fe(P,re,oe,Ee,be,Ke,Qe,ut,St,Ze){if(P===yn){u===!0&&(Se(a.BLEND),u=!1);return}if(u===!1&&(ke(a.BLEND),u=!0),P!==Xl){if(P!==v||Ze!==z){if((x!==Dn||T!==Dn)&&(a.blendEquation(a.FUNC_ADD),x=Dn,T=Dn),Ze)switch(P){case oi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ja:a.blendFunc(a.ONE,a.ONE);break;case er:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case tr:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case oi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ja:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case er:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case tr:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,R=null,A=null,k=null,y.set(0,0,0),w=0,v=P,z=Ze}return}be=be||re,Ke=Ke||oe,Qe=Qe||Ee,(re!==x||be!==T)&&(a.blendEquationSeparate(ye[re],ye[be]),x=re,T=be),(oe!==M||Ee!==R||Ke!==A||Qe!==k)&&(a.blendFuncSeparate(Re[oe],Re[Ee],Re[Ke],Re[Qe]),M=oe,R=Ee,A=Ke,k=Qe),(ut.equals(y)===!1||St!==w)&&(a.blendColor(ut.r,ut.g,ut.b,St),y.copy(ut),w=St),v=P,z=!1}function tt(P,re){P.side===ln?Se(a.CULL_FACE):ke(a.CULL_FACE);let oe=P.side===Mt;re&&(oe=!oe),Ue(oe),P.blending===oi&&P.transparent===!1?fe(yn):fe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Ee=P.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ke(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(P){G!==P&&(P?a.frontFace(a.CW):a.frontFace(a.CCW),G=P)}function E(P){P!==Wl?(ke(a.CULL_FACE),P!==J&&(P===Za?a.cullFace(a.BACK):P===ql?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),J=P}function b(P){P!==L&&(q&&a.lineWidth(P),L=P)}function F(P,re,oe){P?(ke(a.POLYGON_OFFSET_FILL),(B!==re||W!==oe)&&(a.polygonOffset(re,oe),B=re,W=oe)):Se(a.POLYGON_OFFSET_FILL)}function Z(P){P?ke(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function Q(P){P===void 0&&(P=a.TEXTURE0+$-1),ne!==P&&(a.activeTexture(P),ne=P)}function ee(P,re,oe){oe===void 0&&(ne===null?oe=a.TEXTURE0+$-1:oe=ne);let Ee=ie[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},ie[oe]=Ee),(Ee.type!==P||Ee.texture!==re)&&(ne!==oe&&(a.activeTexture(oe),ne=oe),a.bindTexture(P,re||Le[P]),Ee.type=P,Ee.texture=re)}function me(){const P=ie[ne];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){ce.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function $e(P){ve.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),ve.copy(P))}function it(P,re){let oe=f.get(re);oe===void 0&&(oe=new WeakMap,f.set(re,oe));let Ee=oe.get(P);Ee===void 0&&(Ee=a.getUniformBlockIndex(re,P.name),oe.set(P,Ee))}function Be(P,re){const Ee=f.get(re).get(P);d.get(re)!==Ee&&(a.uniformBlockBinding(re,Ee,P.__bindingPointIndex),d.set(re,Ee))}function se(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},ne=null,ie={},p={},_=new WeakMap,g=[],m=null,u=!1,v=null,x=null,M=null,R=null,T=null,A=null,k=null,y=new Ve(0,0,0),w=0,z=!1,G=null,J=null,L=null,B=null,W=null,ce.set(0,0,a.canvas.width,a.canvas.height),ve.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ke,disable:Se,bindFramebuffer:qe,drawBuffers:N,useProgram:wt,setBlending:fe,setMaterial:tt,setFlipSided:Ue,setCullFace:E,setLineWidth:b,setPolygonOffset:F,setScissorTest:Z,activeTexture:Q,bindTexture:ee,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:ue,texImage2D:xe,texImage3D:pe,updateUBOMapping:it,uniformBlockBinding:Be,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:we,texSubImage3D:Fe,compressedTexSubImage2D:K,compressedTexSubImage3D:Ye,scissor:De,viewport:$e,reset:se}}function Wf(a,e,t,n,i,s,r){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,b){return p?new OffscreenCanvas(E,b):ys("canvas")}function g(E,b,F,Z){let Q=1;if((E.width>Z||E.height>Z)&&(Q=Z/Math.max(E.width,E.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ee=b?Pa:Math.floor,me=ee(Q*E.width),le=ee(Q*E.height);f===void 0&&(f=_(me,le));const ue=F?_(me,le):f;return ue.width=me,ue.height=le,ue.getContext("2d").drawImage(E,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+le+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return kr(E.width)&&kr(E.height)}function u(E){return o?!1:E.wrapS!==Xt||E.wrapT!==Xt||E.minFilter!==At&&E.minFilter!==Ot}function v(E,b){return E.generateMipmaps&&b&&E.minFilter!==At&&E.minFilter!==Ot}function x(E){a.generateMipmap(E)}function M(E,b,F,Z,Q=!1){if(o===!1)return b;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=b;if(b===a.RED&&(F===a.FLOAT&&(ee=a.R32F),F===a.HALF_FLOAT&&(ee=a.R16F),F===a.UNSIGNED_BYTE&&(ee=a.R8)),b===a.RED_INTEGER&&(F===a.UNSIGNED_BYTE&&(ee=a.R8UI),F===a.UNSIGNED_SHORT&&(ee=a.R16UI),F===a.UNSIGNED_INT&&(ee=a.R32UI),F===a.BYTE&&(ee=a.R8I),F===a.SHORT&&(ee=a.R16I),F===a.INT&&(ee=a.R32I)),b===a.RG&&(F===a.FLOAT&&(ee=a.RG32F),F===a.HALF_FLOAT&&(ee=a.RG16F),F===a.UNSIGNED_BYTE&&(ee=a.RG8)),b===a.RGBA){const me=Q?gs:je.getTransfer(Z);F===a.FLOAT&&(ee=a.RGBA32F),F===a.HALF_FLOAT&&(ee=a.RGBA16F),F===a.UNSIGNED_BYTE&&(ee=me===Je?a.SRGB8_ALPHA8:a.RGBA8),F===a.UNSIGNED_SHORT_4_4_4_4&&(ee=a.RGBA4),F===a.UNSIGNED_SHORT_5_5_5_1&&(ee=a.RGB5_A1)}return(ee===a.R16F||ee===a.R32F||ee===a.RG16F||ee===a.RG32F||ee===a.RGBA16F||ee===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(E,b,F){return v(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){return E===At||E===sr||E===Is?a.NEAREST:a.LINEAR}function A(E){const b=E.target;b.removeEventListener("dispose",A),y(b),b.isVideoTexture&&d.delete(b)}function k(E){const b=E.target;b.removeEventListener("dispose",k),z(b)}function y(E){const b=n.get(E);if(b.__webglInit===void 0)return;const F=E.source,Z=h.get(F);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(E),Object.keys(Z).length===0&&h.delete(F)}n.remove(E)}function w(E){const b=n.get(E);a.deleteTexture(b.__webglTexture);const F=E.source,Z=h.get(F);delete Z[b.__cacheKey],r.memory.textures--}function z(E){const b=E.texture,F=n.get(E),Z=n.get(b);if(Z.__webglTexture!==void 0&&(a.deleteTexture(Z.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let ee=0;ee<F.__webglFramebuffer[Q].length;ee++)a.deleteFramebuffer(F.__webglFramebuffer[Q][ee]);else a.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)a.deleteFramebuffer(F.__webglFramebuffer[Q]);else a.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&a.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&a.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,ee=b.length;Q<ee;Q++){const me=n.get(b[Q]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),r.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(E)}let G=0;function J(){G=0}function L(){const E=G;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),G+=1,E}function B(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function W(E,b){const F=n.get(E);if(E.isVideoTexture&&tt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,E,b);return}}t.bindTexture(a.TEXTURE_2D,F.__webglTexture,a.TEXTURE0+b)}function $(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,b);return}t.bindTexture(a.TEXTURE_2D_ARRAY,F.__webglTexture,a.TEXTURE0+b)}function q(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,b);return}t.bindTexture(a.TEXTURE_3D,F.__webglTexture,a.TEXTURE0+b)}function X(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ve(F,E,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+b)}const Y={[Ta]:a.REPEAT,[Xt]:a.CLAMP_TO_EDGE,[Aa]:a.MIRRORED_REPEAT},ne={[At]:a.NEAREST,[sr]:a.NEAREST_MIPMAP_NEAREST,[Is]:a.NEAREST_MIPMAP_LINEAR,[Ot]:a.LINEAR,[wc]:a.LINEAR_MIPMAP_NEAREST,[Li]:a.LINEAR_MIPMAP_LINEAR},ie={[Uc]:a.NEVER,[Gc]:a.ALWAYS,[Fc]:a.LESS,[ul]:a.LEQUAL,[Oc]:a.EQUAL,[Hc]:a.GEQUAL,[Bc]:a.GREATER,[zc]:a.NOTEQUAL};function V(E,b,F){if(F?(a.texParameteri(E,a.TEXTURE_WRAP_S,Y[b.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,Y[b.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,Y[b.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,ne[b.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,ne[b.minFilter])):(a.texParameteri(E,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(E,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(b.wrapS!==Xt||b.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,a.TEXTURE_MAG_FILTER,T(b.magFilter)),a.texParameteri(E,a.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==At&&b.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===At||b.minFilter!==Is&&b.minFilter!==Li||b.type===xn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(a.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function j(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",A));const Z=b.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const ee=B(b);if(ee!==E.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Q[ee].usedTimes++;const me=Q[E.__cacheKey];me!==void 0&&(Q[E.__cacheKey].usedTimes--,me.usedTimes===0&&w(b)),E.__cacheKey=ee,E.__webglTexture=Q[ee].texture}return F}function ce(E,b,F){let Z=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=a.TEXTURE_3D);const Q=j(E,b),ee=b.source;t.bindTexture(Z,E.__webglTexture,a.TEXTURE0+F);const me=n.get(ee);if(ee.version!==me.__version||Q===!0){t.activeTexture(a.TEXTURE0+F);const le=je.getPrimaries(je.workingColorSpace),ue=b.colorSpace===zt?null:je.getPrimaries(b.colorSpace),we=b.colorSpace===zt||le===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=u(b)&&m(b.image)===!1;let K=g(b.image,Fe,!1,i.maxTextureSize);K=Ue(b,K);const Ye=m(K)||o,Ge=s.convert(b.format,b.colorSpace);let Ce=s.convert(b.type),xe=M(b.internalFormat,Ge,Ce,b.colorSpace,b.isVideoTexture);V(Z,b,Ye);let pe;const De=b.mipmaps,$e=o&&b.isVideoTexture!==!0&&xe!==dl,it=me.__version===void 0||Q===!0,Be=R(b,K,Ye);if(b.isDepthTexture)xe=a.DEPTH_COMPONENT,o?b.type===xn?xe=a.DEPTH_COMPONENT32F:b.type===vn?xe=a.DEPTH_COMPONENT24:b.type===Un?xe=a.DEPTH24_STENCIL8:xe=a.DEPTH_COMPONENT16:b.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Fn&&xe===a.DEPTH_COMPONENT&&b.type!==Fa&&b.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vn,Ce=s.convert(b.type)),b.format===hi&&xe===a.DEPTH_COMPONENT&&(xe=a.DEPTH_STENCIL,b.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Un,Ce=s.convert(b.type))),it&&($e?t.texStorage2D(a.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(a.TEXTURE_2D,0,xe,K.width,K.height,0,Ge,Ce,null));else if(b.isDataTexture)if(De.length>0&&Ye){$e&&it&&t.texStorage2D(a.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let se=0,P=De.length;se<P;se++)pe=De[se],$e?t.texSubImage2D(a.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,Ce,pe.data):t.texImage2D(a.TEXTURE_2D,se,xe,pe.width,pe.height,0,Ge,Ce,pe.data);b.generateMipmaps=!1}else $e?(it&&t.texStorage2D(a.TEXTURE_2D,Be,xe,K.width,K.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,K.width,K.height,Ge,Ce,K.data)):t.texImage2D(a.TEXTURE_2D,0,xe,K.width,K.height,0,Ge,Ce,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Be,xe,De[0].width,De[0].height,K.depth);for(let se=0,P=De.length;se<P;se++)pe=De[se],b.format!==$t?Ge!==null?$e?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,K.depth,Ge,pe.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,se,xe,pe.width,pe.height,K.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(a.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,K.depth,Ge,Ce,pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,se,xe,pe.width,pe.height,K.depth,0,Ge,Ce,pe.data)}else{$e&&it&&t.texStorage2D(a.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let se=0,P=De.length;se<P;se++)pe=De[se],b.format!==$t?Ge!==null?$e?t.compressedTexSubImage2D(a.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,pe.data):t.compressedTexImage2D(a.TEXTURE_2D,se,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(a.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,Ce,pe.data):t.texImage2D(a.TEXTURE_2D,se,xe,pe.width,pe.height,0,Ge,Ce,pe.data)}else if(b.isDataArrayTexture)$e?(it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Be,xe,K.width,K.height,K.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ge,Ce,K.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,Ge,Ce,K.data);else if(b.isData3DTexture)$e?(it&&t.texStorage3D(a.TEXTURE_3D,Be,xe,K.width,K.height,K.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ge,Ce,K.data)):t.texImage3D(a.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,Ge,Ce,K.data);else if(b.isFramebufferTexture){if(it)if($e)t.texStorage2D(a.TEXTURE_2D,Be,xe,K.width,K.height);else{let se=K.width,P=K.height;for(let re=0;re<Be;re++)t.texImage2D(a.TEXTURE_2D,re,xe,se,P,0,Ge,Ce,null),se>>=1,P>>=1}}else if(De.length>0&&Ye){$e&&it&&t.texStorage2D(a.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let se=0,P=De.length;se<P;se++)pe=De[se],$e?t.texSubImage2D(a.TEXTURE_2D,se,0,0,Ge,Ce,pe):t.texImage2D(a.TEXTURE_2D,se,xe,Ge,Ce,pe);b.generateMipmaps=!1}else $e?(it&&t.texStorage2D(a.TEXTURE_2D,Be,xe,K.width,K.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ge,Ce,K)):t.texImage2D(a.TEXTURE_2D,0,xe,Ge,Ce,K);v(b,Ye)&&x(Z),me.__version=ee.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ve(E,b,F){if(b.image.length!==6)return;const Z=j(E,b),Q=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+F);const ee=n.get(Q);if(Q.version!==ee.__version||Z===!0){t.activeTexture(a.TEXTURE0+F);const me=je.getPrimaries(je.workingColorSpace),le=b.colorSpace===zt?null:je.getPrimaries(b.colorSpace),ue=b.colorSpace===zt||me===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,K=[];for(let se=0;se<6;se++)!we&&!Fe?K[se]=g(b.image[se],!1,!0,i.maxCubemapSize):K[se]=Fe?b.image[se].image:b.image[se],K[se]=Ue(b,K[se]);const Ye=K[0],Ge=m(Ye)||o,Ce=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),pe=M(b.internalFormat,Ce,xe,b.colorSpace),De=o&&b.isVideoTexture!==!0,$e=ee.__version===void 0||Z===!0;let it=R(b,Ye,Ge);V(a.TEXTURE_CUBE_MAP,b,Ge);let Be;if(we){De&&$e&&t.texStorage2D(a.TEXTURE_CUBE_MAP,it,pe,Ye.width,Ye.height);for(let se=0;se<6;se++){Be=K[se].mipmaps;for(let P=0;P<Be.length;P++){const re=Be[P];b.format!==$t?Ce!==null?De?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,pe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,re.width,re.height,Ce,xe,re.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,pe,re.width,re.height,0,Ce,xe,re.data)}}}else{Be=b.mipmaps,De&&$e&&(Be.length>0&&it++,t.texStorage2D(a.TEXTURE_CUBE_MAP,it,pe,K[0].width,K[0].height));for(let se=0;se<6;se++)if(Fe){De?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,K[se].width,K[se].height,Ce,xe,K[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,K[se].width,K[se].height,0,Ce,xe,K[se].data);for(let P=0;P<Be.length;P++){const oe=Be[P].image[se].image;De?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,oe.width,oe.height,Ce,xe,oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,pe,oe.width,oe.height,0,Ce,xe,oe.data)}}else{De?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,xe,K[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,Ce,xe,K[se]);for(let P=0;P<Be.length;P++){const re=Be[P];De?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,Ce,xe,re.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,pe,Ce,xe,re.image[se])}}}v(b,Ge)&&x(a.TEXTURE_CUBE_MAP),ee.__version=Q.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function _e(E,b,F,Z,Q,ee){const me=s.convert(F.format,F.colorSpace),le=s.convert(F.type),ue=M(F.internalFormat,me,le,F.colorSpace);if(!n.get(b).__hasExternalTextures){const Fe=Math.max(1,b.width>>ee),K=Math.max(1,b.height>>ee);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,ue,Fe,K,b.depth,0,me,le,null):t.texImage2D(Q,ee,ue,Fe,K,0,me,le,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),fe(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,Q,n.get(F).__webglTexture,0,Re(b)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Z,Q,n.get(F).__webglTexture,ee),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Le(E,b,F){if(a.bindRenderbuffer(a.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let Z=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(F||fe(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xn?Z=a.DEPTH_COMPONENT32F:Q.type===vn&&(Z=a.DEPTH_COMPONENT24));const ee=Re(b);fe(b)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,Z,b.width,b.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,Z,b.width,b.height)}else a.renderbufferStorage(a.RENDERBUFFER,Z,b.width,b.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){const Z=Re(b);F&&fe(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Z,a.DEPTH24_STENCIL8,b.width,b.height):fe(b)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Z,a.DEPTH24_STENCIL8,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,E)}else{const Z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<Z.length;Q++){const ee=Z[Q],me=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),ue=M(ee.internalFormat,me,le,ee.colorSpace),we=Re(b);F&&fe(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,ue,b.width,b.height):fe(b)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,ue,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ue,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ke(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const Z=n.get(b.depthTexture).__webglTexture,Q=Re(b);if(b.depthTexture.format===Fn)fe(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(b.depthTexture.format===hi)fe(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Se(E){const b=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ke(b.__webglFramebuffer,E)}else if(F){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=a.createRenderbuffer(),Le(b.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),Le(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function qe(E,b,F){const Z=n.get(E);b!==void 0&&_e(Z.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),F!==void 0&&Se(E)}function N(E){const b=E.texture,F=n.get(E),Z=n.get(b);E.addEventListener("dispose",k),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=b.version,r.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,me=m(E)||o;if(Q){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ue=0;ue<b.mipmaps.length;ue++)F.__webglFramebuffer[le][ue]=a.createFramebuffer()}else F.__webglFramebuffer[le]=a.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)F.__webglFramebuffer[le]=a.createFramebuffer()}else F.__webglFramebuffer=a.createFramebuffer();if(ee)if(i.drawBuffers){const le=E.texture;for(let ue=0,we=le.length;ue<we;ue++){const Fe=n.get(le[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&fe(E)===!1){const le=ee?b:[b];F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<le.length;ue++){const we=le[ue];F.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Fe=s.convert(we.format,we.colorSpace),K=s.convert(we.type),Ye=M(we.internalFormat,Fe,K,we.colorSpace,E.isXRRenderTarget===!0),Ge=Re(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,Ye,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Q){t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),V(a.TEXTURE_CUBE_MAP,b,me);for(let le=0;le<6;le++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)_e(F.__webglFramebuffer[le][ue],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else _e(F.__webglFramebuffer[le],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(b,me)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const le=E.texture;for(let ue=0,we=le.length;ue<we;ue++){const Fe=le[ue],K=n.get(Fe);t.bindTexture(a.TEXTURE_2D,K.__webglTexture),V(a.TEXTURE_2D,Fe,me),_e(F.__webglFramebuffer,E,Fe,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,0),v(Fe,me)&&x(a.TEXTURE_2D)}t.unbindTexture()}else{let le=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Z.__webglTexture),V(le,b,me),o&&b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)_e(F.__webglFramebuffer[ue],E,b,a.COLOR_ATTACHMENT0,le,ue);else _e(F.__webglFramebuffer,E,b,a.COLOR_ATTACHMENT0,le,0);v(b,me)&&x(le),t.unbindTexture()}E.depthBuffer&&Se(E)}function wt(E){const b=m(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,Q=F.length;Z<Q;Z++){const ee=F[Z];if(v(ee,b)){const me=E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,le=n.get(ee).__webglTexture;t.bindTexture(me,le),x(me),t.unbindTexture()}}}function ye(E){if(o&&E.samples>0&&fe(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,Z=E.height;let Q=a.COLOR_BUFFER_BIT;const ee=[],me=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=n.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let we=0;we<b.length;we++)t.bindFramebuffer(a.FRAMEBUFFER,le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let we=0;we<b.length;we++){ee.push(a.COLOR_ATTACHMENT0+we),E.depthBuffer&&ee.push(me);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),ue&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,le.__webglColorRenderbuffer[we]),Fe===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[me]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[me])),ue){const K=n.get(b[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,K,0)}a.blitFramebuffer(0,0,F,Z,0,0,F,Z,Q,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<b.length;we++){t.bindFramebuffer(a.FRAMEBUFFER,le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,le.__webglColorRenderbuffer[we]);const Fe=n.get(b[we]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,Fe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(i.maxSamples,E.samples)}function fe(E){const b=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(E){const b=r.render.frame;d.get(E)!==b&&(d.set(E,b),E.update())}function Ue(E,b){const F=E.colorSpace,Z=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ca||F!==dn&&F!==zt&&(je.getTransfer(F)===Je?o===!1?e.has("EXT_sRGB")===!0&&Z===$t?(E.format=Ca,E.minFilter=Ot,E.generateMipmaps=!1):b=fl.sRGBToLinear(b):(Z!==$t||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe}function qf(a,e,t){const n=t.isWebGL2;function i(s,r=zt){let o;const l=je.getTransfer(r);if(s===Mn)return a.UNSIGNED_BYTE;if(s===al)return a.UNSIGNED_SHORT_4_4_4_4;if(s===rl)return a.UNSIGNED_SHORT_5_5_5_1;if(s===Sc)return a.BYTE;if(s===Ec)return a.SHORT;if(s===Fa)return a.UNSIGNED_SHORT;if(s===sl)return a.INT;if(s===vn)return a.UNSIGNED_INT;if(s===xn)return a.FLOAT;if(s===Ii)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Tc)return a.ALPHA;if(s===$t)return a.RGBA;if(s===Ac)return a.LUMINANCE;if(s===Cc)return a.LUMINANCE_ALPHA;if(s===Fn)return a.DEPTH_COMPONENT;if(s===hi)return a.DEPTH_STENCIL;if(s===Ca)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Rc)return a.RED;if(s===ol)return a.RED_INTEGER;if(s===Pc)return a.RG;if(s===ll)return a.RG_INTEGER;if(s===cl)return a.RGBA_INTEGER;if(s===ks||s===Ds||s===Ns||s===Us)if(l===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ar||s===rr||s===or||s===lr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ar)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===or)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cr||s===dr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cr)return l===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===dr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hr||s===ur||s===pr||s===fr||s===mr||s===gr||s===_r||s===vr||s===xr||s===yr||s===br||s===Mr||s===wr||s===Sr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ur)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_r)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===br)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fs||s===Er||s===Tr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fs)return l===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Er)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lc||s===Ar||s===Cr||s===Rr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ar)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Xf extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xe extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yf extends fi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,u=null;const v=[],x=[],M=new We;let R=null;const T=new Bt;T.layers.enable(1),T.viewport=new gt;const A=new Bt;A.layers.enable(2),A.viewport=new gt;const k=[T,A],y=new Xf;y.layers.enable(1),y.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=v[V];return j===void 0&&(j=new la,v[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=v[V];return j===void 0&&(j=new la,v[V]=j),j.getGripSpace()},this.getHand=function(V){let j=v[V];return j===void 0&&(j=new la,v[V]=j),j.getHandSpace()};function G(V){const j=x.indexOf(V.inputSource);if(j===-1)return;const ce=v[j];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||r),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){const j=x[V];j!==null&&(x[V]=null,v[V].disconnect(j))}w=null,z=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,u=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",J),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Bn(p.framebufferWidth,p.framebufferHeight,{format:$t,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ce=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?hi:Fn,ce=g.stencil?Un:vn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(_e),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Bn(h.textureWidth,h.textureHeight,{format:$t,type:Mn,depthTexture:new El(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let j=0;j<V.removed.length;j++){const ce=V.removed[j],ve=x.indexOf(ce);ve>=0&&(x[ve]=null,v[ve].disconnect(ce))}for(let j=0;j<V.added.length;j++){const ce=V.added[j];let ve=x.indexOf(ce);if(ve===-1){for(let Le=0;Le<v.length;Le++)if(Le>=x.length){x.push(ce),ve=Le;break}else if(x[Le]===null){x[Le]=ce,ve=Le;break}if(ve===-1)break}const _e=v[ve];_e&&_e.connect(ce)}}const B=new I,W=new I;function $(V,j,ce){B.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const ve=B.distanceTo(W),_e=j.projectionMatrix.elements,Le=ce.projectionMatrix.elements,ke=_e[14]/(_e[10]-1),Se=_e[14]/(_e[10]+1),qe=(_e[9]+1)/_e[5],N=(_e[9]-1)/_e[5],wt=(_e[8]-1)/_e[0],ye=(Le[8]+1)/Le[0],Re=ke*wt,fe=ke*ye,tt=ve/(-wt+ye),Ue=tt*-wt;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=ke+tt,b=Se+tt,F=Re-Ue,Z=fe+(ve-Ue),Q=qe*Se/b*E,ee=N*Se/b*E;V.projectionMatrix.makePerspective(F,Z,Q,ee,E,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=A.near=T.near=V.near,y.far=A.far=T.far=V.far,(w!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,z=y.far);const j=V.parent,ce=y.cameras;q(y,j);for(let ve=0;ve<ce.length;ve++)q(ce[ve],j);ce.length===2?$(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),X(V,y,j)};function X(V,j,ce){ce===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ra*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Y=null;function ne(V,j){if(d=j.getViewerPose(c||r),_=j,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ve=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let _e=0;_e<ce.length;_e++){const Le=ce[_e];let ke=null;if(p!==null)ke=p.getViewport(Le);else{const qe=f.getViewSubImage(h,Le);ke=qe.viewport,_e===0&&(e.setRenderTargetTextures(u,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Se=k[_e];Se===void 0&&(Se=new Bt,Se.layers.enable(_e),Se.viewport=new gt,k[_e]=Se),Se.matrix.fromArray(Le.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Le.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(ke.x,ke.y,ke.width,ke.height),_e===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(Se)}}for(let ce=0;ce<v.length;ce++){const ve=x[ce],_e=v[ce];ve!==null&&_e!==void 0&&_e.update(ve,j,c||r)}Y&&Y(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const ie=new Sl;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function jf(a,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,bl(a)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Mt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Mt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const x=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kf(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(_(v),M=d(v),i[v.id]=M,v.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function d(v){const x=f();v.__bindingPointIndex=x;const M=a.createBuffer(),R=v.__size,T=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,R,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,M),M}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],M=v.uniforms,R=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let T=0,A=M.length;T<A;T++){const k=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,w=k.length;y<w;y++){const z=k[y];if(p(z,T,y,R)===!0){const G=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let B=0;B<J.length;B++){const W=J[B],$=g(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,a.bufferSubData(a.UNIFORM_BUFFER,G+L,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,G,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(v,x,M,R){const T=v.value,A=x+"_"+M;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const k=R[A];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return R[A]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function _(v){const x=v.uniforms;let M=0;const R=16;for(let A=0,k=x.length;A<k;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,z=y.length;w<z;w++){const G=y[w],J=Array.isArray(G.value)?G.value:[G.value];for(let L=0,B=J.length;L<B;L++){const W=J[L],$=g(W),q=M%R;q!==0&&R-q<$.boundary&&(M+=R-q),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=$.storage}}}const T=M%R;return T>0&&(M+=R-T),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function u(){for(const v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:u}}class Ll{constructor(e={}){const{canvas:t=Wc(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=r;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let M=!1,R=0,T=0,A=null,k=-1,y=null;const w=new gt,z=new gt;let G=null;const J=new Ve(0);let L=0,B=t.width,W=t.height,$=1,q=null,X=null;const Y=new gt(0,0,B,W),ne=new gt(0,0,B,W);let ie=!1;const V=new za;let j=!1,ce=!1,ve=null;const _e=new ct,Le=new We,ke=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return A===null?$:1}let N=n;function wt(S,D){for(let O=0;O<S.length;O++){const H=S[O],U=t.getContext(H,D);if(U!==null)return U}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",re,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),N=wt(D,S),N===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Re,fe,tt,Ue,E,b,F,Z,Q,ee,me,le,ue,we,Fe,K,Ye,Ge,Ce,xe,pe,De,$e;function it(){ye=new ap(N),Re=new Ju(N,ye,e),ye.init(Re),pe=new qf(N,ye,Re),fe=new Vf(N,ye,Re),tt=new lp(N),Ue=new Rf,E=new Wf(N,ye,fe,Ue,Re,pe,tt),b=new tp(x),F=new sp(x),Z=new gd(N,Re),De=new Qu(N,ye,Z,Re),Q=new rp(N,Z,tt,De),ee=new up(N,Q,Z,tt),Ge=new hp(N,Re,E),Fe=new ep(Ue),me=new Cf(x,b,F,ye,Re,De,Fe),le=new jf(x,Ue),ue=new Lf,we=new Ff(ye,Re),Ye=new Ku(x,b,F,fe,ee,h,l),K=new Gf(x,ee,Re),$e=new Kf(N,tt,Re,fe),Ce=new Zu(N,ye,tt,Re),xe=new op(N,ye,tt,Re),tt.programs=me.programs,x.capabilities=Re,x.extensions=ye,x.properties=Ue,x.renderLists=ue,x.shadowMap=K,x.state=fe,x.info=tt}it();const Be=new Yf(x,N);this.xr=Be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(B,W,!1))},this.getSize=function(S){return S.set(B,W)},this.setSize=function(S,D,O=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,W=D,t.width=Math.floor(S*$),t.height=Math.floor(D*$),O===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(B*$,W*$).floor()},this.setDrawingBufferSize=function(S,D,O){B=S,W=D,$=O,t.width=Math.floor(S*O),t.height=Math.floor(D*O),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,O,H){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,O,H),fe.viewport(w.copy(Y).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,D,O,H){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,D,O,H),fe.scissor(z.copy(ne).multiplyScalar($).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){fe.setScissorTest(ie=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(S=!0,D=!0,O=!0){let H=0;if(S){let U=!1;if(A!==null){const de=A.texture.format;U=de===cl||de===ll||de===ol}if(U){const de=A.texture.type,ge=de===Mn||de===vn||de===Fa||de===Un||de===al||de===rl,Me=Ye.getClearColor(),Te=Ye.getClearAlpha(),Oe=Me.r,Pe=Me.g,Ie=Me.b;ge?(p[0]=Oe,p[1]=Pe,p[2]=Ie,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Oe,_[1]=Pe,_[2]=Ie,_[3]=Te,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),O&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),we.dispose(),Ue.dispose(),b.dispose(),F.dispose(),ee.dispose(),De.dispose(),$e.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",St),Be.removeEventListener("sessionend",Ze),ve&&(ve.dispose(),ve=null),Et.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=tt.autoReset,D=K.enabled,O=K.autoUpdate,H=K.needsUpdate,U=K.type;it(),tt.autoReset=S,K.enabled=D,K.autoUpdate=O,K.needsUpdate=H,K.type=U}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const D=S.target;D.removeEventListener("dispose",oe),Ee(D)}function Ee(S){be(S),Ue.remove(S)}function be(S){const D=Ue.get(S).programs;D!==void 0&&(D.forEach(function(O){me.releaseProgram(O)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,O,H,U,de){D===null&&(D=Se);const ge=U.isMesh&&U.matrixWorld.determinant()<0,Me=zl(S,D,O,H,U);fe.setMaterial(H,ge);let Te=O.index,Oe=1;if(H.wireframe===!0){if(Te=Q.getWireframeAttribute(O),Te===void 0)return;Oe=2}const Pe=O.drawRange,Ie=O.attributes.position;let at=Pe.start*Oe,Lt=(Pe.start+Pe.count)*Oe;de!==null&&(at=Math.max(at,de.start*Oe),Lt=Math.min(Lt,(de.start+de.count)*Oe)),Te!==null?(at=Math.max(at,0),Lt=Math.min(Lt,Te.count)):Ie!=null&&(at=Math.max(at,0),Lt=Math.min(Lt,Ie.count));const pt=Lt-at;if(pt<0||pt===1/0)return;De.setup(U,H,Me,O,Te);let Zt,nt=Ce;if(Te!==null&&(Zt=Z.get(Te),nt=xe,nt.setIndex(Zt)),U.isMesh)H.wireframe===!0?(fe.setLineWidth(H.wireframeLinewidth*qe()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(U.isLine){let ze=H.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*qe()),U.isLineSegments?nt.setMode(N.LINES):U.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else U.isPoints?nt.setMode(N.POINTS):U.isSprite&&nt.setMode(N.TRIANGLES);if(U.isBatchedMesh)nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)nt.renderInstances(at,pt,U.count);else if(O.isInstancedBufferGeometry){const ze=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Cs=Math.min(O.instanceCount,ze);nt.renderInstances(at,pt,Cs)}else nt.render(at,pt)};function Ke(S,D,O){S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Mt,S.needsUpdate=!0,zi(S,D,O),S.side=wn,S.needsUpdate=!0,zi(S,D,O),S.side=ln):zi(S,D,O)}this.compile=function(S,D,O=null){O===null&&(O=S),m=we.get(O),m.init(),v.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(x._useLegacyLights);const H=new Set;return S.traverse(function(U){const de=U.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Me=de[ge];Ke(Me,O,U),H.add(Me)}else Ke(de,O,U),H.add(de)}),v.pop(),m=null,H},this.compileAsync=function(S,D,O=null){const H=this.compile(S,D,O);return new Promise(U=>{function de(){if(H.forEach(function(ge){Ue.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){U(S);return}setTimeout(de,10)}ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Qe=null;function ut(S){Qe&&Qe(S)}function St(){Et.stop()}function Ze(){Et.start()}const Et=new Sl;Et.setAnimationLoop(ut),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(S){Qe=S,Be.setAnimationLoop(S),S===null?Et.stop():Et.start()},Be.addEventListener("sessionstart",St),Be.addEventListener("sessionend",Ze),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(D),D=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,A),m=we.get(S,v.length),m.init(),v.push(m),_e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,j=Fe.init(this.clippingPlanes,ce),g=ue.get(S,u.length),g.init(),u.push(g),Yt(S,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,X),this.info.render.frame++,j===!0&&Fe.beginShadows();const O=m.state.shadowsArray;if(K.render(O,S,D),j===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(g,S),m.setupLights(x._useLegacyLights),D.isArrayCamera){const H=D.cameras;for(let U=0,de=H.length;U<de;U++){const ge=H[U];Xa(g,S,ge,ge.viewport)}}else Xa(g,S,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,D),De.resetDefaultState(),k=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Yt(S,D,O,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const ge=ee.update(S),Me=S.material;Me.visible&&g.push(S,ge,Me,O,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const ge=ee.update(S),Me=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ke.copy(ge.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Me)){const Te=ge.groups;for(let Oe=0,Pe=Te.length;Oe<Pe;Oe++){const Ie=Te[Oe],at=Me[Ie.materialIndex];at&&at.visible&&g.push(S,ge,at,O,ke.z,Ie)}}else Me.visible&&g.push(S,ge,Me,O,ke.z,null)}}const de=S.children;for(let ge=0,Me=de.length;ge<Me;ge++)Yt(de[ge],D,O,H)}function Xa(S,D,O,H){const U=S.opaque,de=S.transmissive,ge=S.transparent;m.setupLightsView(O),j===!0&&Fe.setGlobalState(x.clippingPlanes,O),de.length>0&&Bl(U,de,D,O),H&&fe.viewport(w.copy(H)),U.length>0&&Bi(U,D,O),de.length>0&&Bi(de,D,O),ge.length>0&&Bi(ge,D,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Bl(S,D,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;ve===null&&(ve=new Bn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ii:Mn,minFilter:Li,samples:de?4:0})),x.getDrawingBufferSize(Le),de?ve.setSize(Le.x,Le.y):ve.setSize(Pa(Le.x),Pa(Le.y));const ge=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(J),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=bn,Bi(S,O,H),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve);let Te=!1;for(let Oe=0,Pe=D.length;Oe<Pe;Oe++){const Ie=D[Oe],at=Ie.object,Lt=Ie.geometry,pt=Ie.material,Zt=Ie.group;if(pt.side===ln&&at.layers.test(H.layers)){const nt=pt.side;pt.side=Mt,pt.needsUpdate=!0,$a(at,O,H,Lt,pt,Zt),pt.side=nt,pt.needsUpdate=!0,Te=!0}}Te===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve)),x.setRenderTarget(ge),x.setClearColor(J,L),x.toneMapping=Me}function Bi(S,D,O){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,de=S.length;U<de;U++){const ge=S[U],Me=ge.object,Te=ge.geometry,Oe=H===null?ge.material:H,Pe=ge.group;Me.layers.test(O.layers)&&$a(Me,D,O,Te,Oe,Pe)}}function $a(S,D,O,H,U,de){S.onBeforeRender(x,D,O,H,U,de),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,D,O,H,S,de),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=Mt,U.needsUpdate=!0,x.renderBufferDirect(O,D,H,U,S,de),U.side=wn,U.needsUpdate=!0,x.renderBufferDirect(O,D,H,U,S,de),U.side=ln):x.renderBufferDirect(O,D,H,U,S,de),S.onAfterRender(x,D,O,H,U,de)}function zi(S,D,O){D.isScene!==!0&&(D=Se);const H=Ue.get(S),U=m.state.lights,de=m.state.shadowsArray,ge=U.state.version,Me=me.getParameters(S,U.state,de,D,O),Te=me.getProgramCacheKey(Me);let Oe=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?F:b).get(S.envMap||H.environment),Oe===void 0&&(S.addEventListener("dispose",oe),Oe=new Map,H.programs=Oe);let Pe=Oe.get(Te);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===ge)return ja(S,Me),Pe}else Me.uniforms=me.getUniforms(S),S.onBuild(O,Me,x),S.onBeforeCompile(Me,x),Pe=me.acquireProgram(Me,Te),Oe.set(Te,Pe),H.uniforms=Me.uniforms;const Ie=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),ja(S,Me),H.needsLights=Gl(S),H.lightsStateVersion=ge,H.needsLights&&(Ie.ambientLightColor.value=U.state.ambient,Ie.lightProbe.value=U.state.probe,Ie.directionalLights.value=U.state.directional,Ie.directionalLightShadows.value=U.state.directionalShadow,Ie.spotLights.value=U.state.spot,Ie.spotLightShadows.value=U.state.spotShadow,Ie.rectAreaLights.value=U.state.rectArea,Ie.ltc_1.value=U.state.rectAreaLTC1,Ie.ltc_2.value=U.state.rectAreaLTC2,Ie.pointLights.value=U.state.point,Ie.pointLightShadows.value=U.state.pointShadow,Ie.hemisphereLights.value=U.state.hemi,Ie.directionalShadowMap.value=U.state.directionalShadowMap,Ie.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ie.spotShadowMap.value=U.state.spotShadowMap,Ie.spotLightMatrix.value=U.state.spotLightMatrix,Ie.spotLightMap.value=U.state.spotLightMap,Ie.pointShadowMap.value=U.state.pointShadowMap,Ie.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Ya(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=hs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ja(S,D){const O=Ue.get(S);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function zl(S,D,O,H,U){D.isScene!==!0&&(D=Se),E.resetTextureUnits();const de=D.fog,ge=H.isMeshStandardMaterial?D.environment:null,Me=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dn,Te=(H.isMeshStandardMaterial?F:b).get(H.envMap||ge),Oe=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!O.morphAttributes.position,at=!!O.morphAttributes.normal,Lt=!!O.morphAttributes.color;let pt=bn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Zt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=Zt!==void 0?Zt.length:0,ze=Ue.get(H),Cs=m.state.lights;if(j===!0&&(ce===!0||S!==y)){const Ut=S===y&&H.id===k;Fe.setState(H,S,Ut)}let st=!1;H.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Cs.state.version||ze.outputColorSpace!==Me||U.isBatchedMesh&&ze.batching===!1||!U.isBatchedMesh&&ze.batching===!0||U.isInstancedMesh&&ze.instancing===!1||!U.isInstancedMesh&&ze.instancing===!0||U.isSkinnedMesh&&ze.skinning===!1||!U.isSkinnedMesh&&ze.skinning===!0||U.isInstancedMesh&&ze.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ze.instancingColor===!1&&U.instanceColor!==null||ze.envMap!==Te||H.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Pe||ze.morphTargets!==Ie||ze.morphNormals!==at||ze.morphColors!==Lt||ze.toneMapping!==pt||Re.isWebGL2===!0&&ze.morphTargetsCount!==nt)&&(st=!0):(st=!0,ze.__version=H.version);let En=ze.currentProgram;st===!0&&(En=zi(H,D,U));let Ka=!1,gi=!1,Rs=!1;const xt=En.getUniforms(),Tn=ze.uniforms;if(fe.useProgram(En.program)&&(Ka=!0,gi=!0,Rs=!0),H.id!==k&&(k=H.id,gi=!0),Ka||y!==S){xt.setValue(N,"projectionMatrix",S.projectionMatrix),xt.setValue(N,"viewMatrix",S.matrixWorldInverse);const Ut=xt.map.cameraPosition;Ut!==void 0&&Ut.setValue(N,ke.setFromMatrixPosition(S.matrixWorld)),Re.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,gi=!0,Rs=!0)}if(U.isSkinnedMesh){xt.setOptional(N,U,"bindMatrix"),xt.setOptional(N,U,"bindMatrixInverse");const Ut=U.skeleton;Ut&&(Re.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),xt.setValue(N,"boneTexture",Ut.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(xt.setOptional(N,U,"batchingTexture"),xt.setValue(N,"batchingTexture",U._matricesTexture,E));const Ps=O.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Re.isWebGL2===!0)&&Ge.update(U,O,En),(gi||ze.receiveShadow!==U.receiveShadow)&&(ze.receiveShadow=U.receiveShadow,xt.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Tn.envMap.value=Te,Tn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),gi&&(xt.setValue(N,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Hl(Tn,Rs),de&&H.fog===!0&&le.refreshFogUniforms(Tn,de),le.refreshMaterialUniforms(Tn,H,$,W,ve),hs.upload(N,Ya(ze),Tn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(hs.upload(N,Ya(ze),Tn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(N,"center",U.center),xt.setValue(N,"modelViewMatrix",U.modelViewMatrix),xt.setValue(N,"normalMatrix",U.normalMatrix),xt.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let Ls=0,Vl=Ut.length;Ls<Vl;Ls++)if(Re.isWebGL2){const Qa=Ut[Ls];$e.update(Qa,En),$e.bind(Qa,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Hl(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Gl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,O){Ue.get(S.texture).__webglTexture=D,Ue.get(S.depthTexture).__webglTexture=O;const H=Ue.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const O=Ue.get(S);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,O=0){A=S,R=D,T=O;let H=!0,U=null,de=!1,ge=!1;if(S){const Te=Ue.get(S);Te.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Te.__webglFramebuffer===void 0?E.setupRenderTarget(S):Te.__hasExternalTextures&&E.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Pe=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?U=Pe[D][O]:U=Pe[D],de=!0):Re.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?U=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[O]:U=Pe,w.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else w.copy(Y).multiplyScalar($).floor(),z.copy(ne).multiplyScalar($).floor(),G=ie;if(fe.bindFramebuffer(N.FRAMEBUFFER,U)&&Re.drawBuffers&&H&&fe.drawBuffers(S,U),fe.viewport(w),fe.scissor(z),fe.setScissorTest(G),de){const Te=Ue.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,O)}else if(ge){const Te=Ue.get(S.texture),Oe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Oe)}k=-1},this.readRenderTargetPixels=function(S,D,O,H,U,de,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){fe.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Te=S.texture,Oe=Te.format,Pe=Te.type;if(Oe!==$t&&pe.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===Ii&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==Mn&&pe.convert(Pe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===xn&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&O>=0&&O<=S.height-U&&N.readPixels(D,O,H,U,pe.convert(Oe),pe.convert(Pe),de)}finally{const Te=A!==null?Ue.get(A).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(S,D,O=0){const H=Math.pow(2,-O),U=Math.floor(D.image.width*H),de=Math.floor(D.image.height*H);E.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,S.x,S.y,U,de),fe.unbindTexture()},this.copyTextureToTexture=function(S,D,O,H=0){const U=D.image.width,de=D.image.height,ge=pe.convert(O.format),Me=pe.convert(O.type);E.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,U,de,ge,Me,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,ge,Me,D.image),H===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,D,O,H,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=S.max.x-S.min.x+1,ge=S.max.y-S.min.y+1,Me=S.max.z-S.min.z+1,Te=pe.convert(H.format),Oe=pe.convert(H.type);let Pe;if(H.isData3DTexture)E.setTexture3D(H,0),Pe=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Pe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Ie=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Lt=N.getParameter(N.UNPACK_SKIP_PIXELS),pt=N.getParameter(N.UNPACK_SKIP_ROWS),Zt=N.getParameter(N.UNPACK_SKIP_IMAGES),nt=O.isCompressedTexture?O.mipmaps[U]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Pe,U,D.x,D.y,D.z,de,ge,Me,Te,Oe,nt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pe,U,D.x,D.y,D.z,de,ge,Me,Te,nt.data)):N.texSubImage3D(Pe,U,D.x,D.y,D.z,de,ge,Me,Te,Oe,nt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt),U===0&&H.generateMipmaps&&N.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oa?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Ms?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?On:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===On?mt:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Qf extends Ll{}Qf.prototype.isWebGL1Renderer=!0;class ri{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new ri(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mi extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class _n extends Nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new I,d=new We;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[h]/e+1)/2,d.y=(r[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class he extends Nt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],f=[],h=[],p=[];let _=0;const g=[],m=n/2;let u=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(p,2));function v(){const M=new I,R=new I;let T=0;const A=(t-e)/n;for(let k=0;k<=s;k++){const y=[],w=k/s,z=w*(t-e)+e;for(let G=0;G<=i;G++){const J=G/i,L=J*l+o,B=Math.sin(L),W=Math.cos(L);R.x=z*B,R.y=-w*n+m,R.z=z*W,f.push(R.x,R.y,R.z),M.set(B,A,W).normalize(),h.push(M.x,M.y,M.z),p.push(J,1-w),y.push(_++)}g.push(y)}for(let k=0;k<i;k++)for(let y=0;y<s;y++){const w=g[y][k],z=g[y+1][k],G=g[y+1][k+1],J=g[y][k+1];d.push(w,z,J),d.push(z,G,J),T+=6}c.addGroup(u,T,0),u+=T}function x(M){const R=_,T=new We,A=new I;let k=0;const y=M===!0?e:t,w=M===!0?1:-1;for(let G=1;G<=i;G++)f.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),_++;const z=_;for(let G=0;G<=i;G++){const L=G/i*l+o,B=Math.cos(L),W=Math.sin(L);A.x=y*W,A.y=m*w,A.z=y*B,f.push(A.x,A.y,A.z),h.push(0,w,0),T.x=B*.5+.5,T.y=W*.5*w+.5,p.push(T.x,T.y),_++}for(let G=0;G<i;G++){const J=R+G,L=z+G;M===!0?d.push(L,L+1,J):d.push(L+1,L,J),k+=3}c.addGroup(u,k,M===!0?1:2),u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lt extends he{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new lt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ts extends Nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),c(n),d(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new I,M=new I,R=new I;for(let T=0;T<t.length;T+=3)p(t[T+0],x),p(t[T+1],M),p(t[T+2],R),l(x,M,R,v)}function l(v,x,M,R){const T=R+1,A=[];for(let k=0;k<=T;k++){A[k]=[];const y=v.clone().lerp(M,k/T),w=x.clone().lerp(M,k/T),z=T-k;for(let G=0;G<=z;G++)G===0&&k===T?A[k][G]=y:A[k][G]=y.clone().lerp(w,G/z)}for(let k=0;k<T;k++)for(let y=0;y<2*(T-k)-1;y++){const w=Math.floor(y/2);y%2===0?(h(A[k][w+1]),h(A[k+1][w]),h(A[k][w])):(h(A[k][w+1]),h(A[k+1][w+1]),h(A[k+1][w]))}}function c(v){const x=new I;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function d(){const v=new I;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=m(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;r.push(M,1-R)}_(),f()}function f(){for(let v=0;v<r.length;v+=6){const x=r[v+0],M=r[v+2],R=r[v+4],T=Math.max(x,M,R),A=Math.min(x,M,R);T>.9&&A<.1&&(x<.2&&(r[v+0]+=1),M<.2&&(r[v+2]+=1),R<.2&&(r[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function _(){const v=new I,x=new I,M=new I,R=new I,T=new We,A=new We,k=new We;for(let y=0,w=0;y<s.length;y+=9,w+=6){v.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),T.set(r[w+0],r[w+1]),A.set(r[w+2],r[w+3]),k.set(r[w+4],r[w+5]),R.copy(v).add(x).add(M).divideScalar(3);const z=m(R);g(T,w+0,v,z),g(A,w+2,x,z),g(k,w+4,M,z)}}function g(v,x,M,R){R<0&&v.x===1&&(r[x]=v.x-1),M.x===0&&M.z===0&&(r[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.vertices,e.indices,e.radius,e.details)}}class Va extends Ts{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Va(e.radius,e.detail)}}class Ai extends Ts{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ai(e.radius,e.detail)}}class Wa extends Nt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let f=e;const h=(t-e)/i,p=new I,_=new We;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const u=s+m/n*r;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}f+=h}for(let g=0;g<i;g++){const m=g*(n+1);for(let u=0;u<n;u++){const v=u+m,x=v,M=v+n+1,R=v+n+2,T=v+1;o.push(x,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class te extends Nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],f=new I,h=new I,p=[],_=[],g=[],m=[];for(let u=0;u<=n;u++){const v=[],x=u/n;let M=0;u===0&&r===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const T=R/t;f.x=-e*Math.cos(i+T*s)*Math.sin(r+x*o),f.y=e*Math.cos(r+x*o),f.z=e*Math.sin(i+T*s)*Math.sin(r+x*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(T+M,1-x),v.push(c++)}d.push(v)}for(let u=0;u<n;u++)for(let v=0;v<t;v++){const x=d[u][v+1],M=d[u][v],R=d[u+1][v],T=d[u+1][v+1];(u!==0||r>0)&&p.push(x,M,T),(u!==n-1||l<Math.PI)&&p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(g,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new te(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rt extends Nt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],d=new I,f=new I,h=new I;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,u=(i+1)*(p-1)+_,v=(i+1)*p+_;r.push(g,m,v),r.push(m,u,v)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qa extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xo extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ca=new ct,yo=new I,bo=new I;class Zf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bo),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jf extends Zf{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cs extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class da extends qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const tm=`// Toon vertex shader — Ni no Kuni inspired cell shading
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
`,nm=`// Toon fragment shader — cell shading with rim lighting and outline support
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
`,im=new I(-.5,-1,-.3),sm=16774365,am=4482730,rm=4,om=3,lm=8947865,Il=.03,kl=1118481,cm=.6,dm=0,pi=new Map,Di=new Map;function Dl(a){return new Ve(a)}function hm(a,e){const n=Object.keys(e).sort().map(i=>`${i}:${e[i]}`);return`${a.toString(16)}|${n.join(",")}`}function Ei(a,e){return a==null?new Ve(e):a instanceof Ve?a.clone():new Ve(a)}function um(a,e){return a instanceof I?a.clone():e.clone()}class Nl{createToonMaterial(e,t={}){return pm(e,t)}createOutlineMaterial(e,t={}){return fm(e,t)}updateTime(e){return mm(e)}clearCache(){return gm()}getCacheSize(){return _m()}}function pm(a,e={}){const t=hm(a,e),n=pi.get(t);if(n)return n;const i=Dl(a),s=um(e.uLightDir,im),r=Ei(e.uLightColor,sm),o=Ei(e.uAmbientColor,am),l=e.uRoughness??cm,c=e.uMetalness??dm,d=e.uOutlineWidth??Il,f=Ei(e.uOutlineColor,kl),h=e.uRimPower??om,p=Ei(e.uRimColor,lm),_=e.uTime??0,g=e.uSteps??rm,m=new hn({vertexShader:tm,fragmentShader:nm,uniforms:{uColor:{value:i},uLightDir:{value:s},uLightColor:{value:r},uAmbientColor:{value:o},uRoughness:{value:l},uMetalness:{value:c},uOutlineWidth:{value:d},uOutlineColor:{value:f},uRimPower:{value:h},uRimColor:{value:p},uTime:{value:_},uSteps:{value:g}}});return pi.set(t,m),m}function fm(a=kl,e={}){const t=e.uOutlineColor!==void 0?Ei(e.uOutlineColor,a):Dl(a),n=`outline|${t.getHexString()}|${e.outlineWidth??Il}`,i=Di.get(n);if(i)return i;const s=new ki({color:t,side:Mt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return Di.set(n,s),s}function mm(a){for(const e of pi.values())e.uniforms.uTime.value=a}function gm(){for(const a of pi.values())a.dispose();for(const a of Di.values())a.dispose();pi.clear(),Di.clear()}function _m(){return pi.size+Di.size}function Sn(a,e,t){return Math.min(Math.max(a,e),t)}function ha(a){return a[Math.floor(Math.random()*a.length)]}function Ia(a,e,t){const n=Sn((t-a)/(e-a),0,1);return n*n*(3-2*n)}function vm(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=Math.random()*16|0;return(a==="x"?e:e&3|8).toString(16)})}class Ci{constructor(e=Date.now()){this.seed=e}next(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}range(e,t){return this.next()*(t-e)+e}int(e,t){return Math.floor(this.range(e,t+1))}choice(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}}function Ri(a){return Math.floor(100*a+50*a*a)}function ka(a){let e=1,t=Ri(1);for(;a>=t;)a-=t,e++,t=Ri(e);return{level:e,xpIntoLevel:a,xpForNext:t}}const xm=["Three-Finger","One-Eye","Sly","Crooked","Greasy","Slippery","Sneaky","Rotten","Black","Mad","Crazy","Silent","Smiling","Broken","Wild","Cold","Iron","Silver","Golden","Midnight","Dawn","Shade","Smoke","Ash"],ym=["Mack","Jack","Rex","Vex","Dex","Nix","Zax","Blax","Crumb","Grindle","Munch","Crunch","Slab","Gristle","Bun","Patty","Melt","Sizzle","Char","Drip","Grease","Sloppy","Wicked","Dastardly","Mean","Nasty","Foul","Rancid","Stale","Burnt","Crispy","Soggy","Moldy"],bm=["the Greasy","the Burger Thief","the Bun Snatcher","the Fry Filcher","the Patty Pirate","the Meat Miser","the Condiment Criminal","the Snack Stealer","of the Dark Arches","the Wrong Order","the Cold Fry","the Burnt Bun","the Soggy Patty","the Missing Toy"];function Ul(a){const e=new Ci(a),t=ha(xm),n=ha(ym),i=e.chance(.5)?` ${ha(bm)}`:"";return`Hamburglar ${t} ${n}${i}`}const Ni={ronald:{id:"ronald",name:"Ronald McDonald",title:"The Fry-Mage",role:"Healer + Elemental Magic",description:"A cheerful mage with fiery fries and healing ketchup. The heart of the party.",color:16711680,accentColor:16776960,baseStats:{hp:80,mp:60,atk:15,def:12,agi:14,mag:20},growth:{hp:8,mp:6,atk:2.2,def:1.8,agi:2,mag:3},element:"fire",weapon:"Fry Wand",armor:"Happy Meal Cloak",accessory:"Golden Arch Charm",abilityTree:[{level:1,ability:"fry_storm"},{level:1,ability:"ketchup_heal"},{level:5,ability:"mustard_shield"},{level:10,ability:"fry_lance"},{level:15,ability:"ketchup_splash"},{level:20,ability:"happy_meal"},{level:30,ability:"mustard_barrier"},{level:40,ability:"golden_fry_lance"},{level:50,ability:"mc_flurry_blizzard"}],portraitColors:{skin:16764074,hair:16724770,body:16763904,accent:16711680}},grimace:{id:"grimace",name:"Grimace",title:"The McTank",role:"Heavy Tank + Taunt",description:"A big purple friend who takes hits so others do not have to.",color:10040268,accentColor:16763904,baseStats:{hp:150,mp:20,atk:18,def:25,agi:6,mag:8},growth:{hp:15,mp:1.5,atk:2.5,def:3.5,agi:.8,mag:1},element:"earth",weapon:"McShake Maul",armor:"Grimace Hide",accessory:"Purple Charm",abilityTree:[{level:1,ability:"grimace_slam"},{level:1,ability:"purple_body"},{level:5,ability:"grimace_guard"},{level:10,ability:"shake_quake"},{level:15,ability:"purple_pound"},{level:20,ability:"grimace_roar"},{level:30,ability:"shake_storm"},{level:40,ability:"grimace_fortress"},{level:50,ability:"purple_titan"}],portraitColors:{skin:10040268,hair:8921770,body:10040268,accent:16763904}},birdie:{id:"birdie",name:"Birdie the Early Bird",title:"The Sky-Scout",role:"Ranged Speed Attacker + Debuffs",description:"Fast as the morning sun, Birdie strikes from afar and weakens foes.",color:16738740,accentColor:16776960,baseStats:{hp:70,mp:35,atk:16,def:10,agi:25,mag:14},growth:{hp:6,mp:4,atk:2.8,def:1.5,agi:3.5,mag:2},element:"air",weapon:"Feather Darts",armor:"Sky Vest",accessory:"Morning Charm",abilityTree:[{level:1,ability:"feather_darts"},{level:1,ability:"breakfast_blitz"},{level:5,ability:"egg_bomb"},{level:10,ability:"morning_song"},{level:15,ability:"dive_bomb"},{level:20,ability:"dawn_chorus"},{level:30,ability:"sky_dance"},{level:40,ability:"hurricane_feathers"},{level:50,ability:"sunny_side_up"}],portraitColors:{skin:16738740,hair:16764108,body:16738740,accent:16776960}},bigmac:{id:"bigmac",name:"Officer Big Mac",title:"The McCrusader",role:"Paladin — Tank + Holy Attacks",description:"A burger-headed knight of the law. Justice never tasted so good.",color:9127187,accentColor:16766720,baseStats:{hp:130,mp:40,atk:20,def:22,agi:8,mag:16},growth:{hp:12,mp:3.5,atk:3,def:3,agi:1.2,mag:2.5},element:"holy",weapon:"Sesame Sword",armor:"Double Patty Armor",accessory:"Badge of Order",abilityTree:[{level:1,ability:"big_mac_smash"},{level:1,ability:"sesame_shield"},{level:5,ability:"mcgriddle_charge"},{level:10,ability:"special_sauce_smite"},{level:15,ability:"lettuce_wall"},{level:20,ability:"triple_stack"},{level:30,ability:"sesame_sanctuary"},{level:40,ability:"big_mac_judgment"},{level:50,ability:"special_sauce_storm"}],portraitColors:{skin:13934615,hair:9127187,body:9127187,accent:16766720}},mactonight:{id:"mactonight",name:"Mac Tonight",title:"The Moon-Bard",role:"Support — Buffs, Debuffs, Minor Healing",description:"A cool crescent moon crooner who buffs allies and debuffs enemies.",color:2763338,accentColor:13421823,baseStats:{hp:85,mp:55,atk:12,def:12,agi:16,mag:18},growth:{hp:7,mp:5.5,atk:1.8,def:1.8,agi:2.5,mag:2.8},element:"dark",weapon:"Moon Mic",armor:"Midnight Suit",accessory:"Sunglasses",abilityTree:[{level:1,ability:"moon_melody"},{level:1,ability:"nightjam"},{level:5,ability:"mac_jazz"},{level:10,ability:"moonlight_serenade"},{level:15,ability:"blue_moon"},{level:20,ability:"midnight_blues"},{level:30,ability:"eclipse"},{level:40,ability:"moon_sonata"},{level:50,ability:"lunar_eclipse"}],portraitColors:{skin:13421823,hair:2763338,body:2763338,accent:16776960}}},ua=["ronald","grimace","birdie"],wo={fry_storm:{id:"fry_storm",name:"Fry Storm",character:"ronald",type:"aoe",element:"fire",mpCost:12,power:.8,target:"enemies",description:"Rain fiery fries on all enemies.",unlockLevel:1},ketchup_heal:{id:"ketchup_heal",name:"Ketchup Heal",character:"ronald",type:"heal",element:"fire",mpCost:8,power:1.5,target:"ally",description:"Restore HP to one ally with ketchup magic.",unlockLevel:1},mustard_shield:{id:"mustard_shield",name:"Mustard Shield",character:"ronald",type:"buff",element:"fire",mpCost:10,power:0,target:"ally",status:["def_up"],description:"Boost an ally's defense with golden mustard.",unlockLevel:5},fry_lance:{id:"fry_lance",name:"Fry Lance",character:"ronald",type:"attack",element:"fire",mpCost:14,power:1.6,target:"enemy",description:"A piercing lance of solidified fry grease.",unlockLevel:10},ketchup_splash:{id:"ketchup_splash",name:"Ketchup Splash",character:"ronald",type:"heal",element:"fire",mpCost:18,power:1.2,target:"allies",description:"Heal the whole party with a wave of ketchup.",unlockLevel:15},happy_meal:{id:"happy_meal",name:"Happy Meal",character:"ronald",type:"heal",element:"holy",mpCost:30,power:2,target:"allies",status:["regen"],description:"Full party heal with a side of joy.",unlockLevel:20},mustard_barrier:{id:"mustard_barrier",name:"Mustard Barrier",character:"ronald",type:"buff",element:"fire",mpCost:22,power:0,target:"allies",status:["def_up"],description:"Party-wide defense boost.",unlockLevel:30},golden_fry_lance:{id:"golden_fry_lance",name:"Golden Fry Lance",character:"ronald",type:"ultimate",element:"fire",mpCost:45,power:3.5,target:"enemy",status:["burn"],description:"A legendary golden fry that pierces all defenses.",unlockLevel:40},mc_flurry_blizzard:{id:"mc_flurry_blizzard",name:"McFlurry Blizzard",character:"ronald",type:"ultimate",element:"ice",mpCost:50,power:2.5,target:"enemies",status:["freeze"],description:"An ice storm of McFlurry proportions.",unlockLevel:50},grimace_slam:{id:"grimace_slam",name:"Grimace Slam",character:"grimace",type:"attack",element:"earth",mpCost:5,power:1.8,target:"enemy",description:"A heavy body slam.",unlockLevel:1},purple_body:{id:"purple_body",name:"Purple Body",character:"grimace",type:"buff",element:"earth",mpCost:8,power:0,target:"self",status:["taunt","def_up"],description:"Taunt enemies and boost DEF.",unlockLevel:1},grimace_guard:{id:"grimace_guard",name:"Grimace Guard",character:"grimace",type:"buff",element:"earth",mpCost:6,power:0,target:"ally",status:["cover"],description:"Take damage meant for an ally.",unlockLevel:5},shake_quake:{id:"shake_quake",name:"Shake Quake",character:"grimace",type:"aoe",element:"earth",mpCost:15,power:1,target:"enemies",status:["stun"],description:"Ground-shaking AoE that may stun.",unlockLevel:10},purple_pound:{id:"purple_pound",name:"Purple Pound",character:"grimace",type:"attack",element:"earth",mpCost:12,power:2.2,target:"enemy",status:["def_down"],description:"A crushing blow that lowers enemy DEF.",unlockLevel:15},grimace_roar:{id:"grimace_roar",name:"Grimace Roar",character:"grimace",type:"debuff",element:"earth",mpCost:14,power:0,target:"enemies",status:["atk_down"],description:"A terrifying roar that weakens all enemies.",unlockLevel:20},shake_storm:{id:"shake_storm",name:"Shake Storm",character:"grimace",type:"aoe",element:"earth",mpCost:25,power:1.5,target:"enemies",status:["slow"],description:"A storm of milkshakes slows all enemies.",unlockLevel:30},grimace_fortress:{id:"grimace_fortress",name:"Grimace Fortress",character:"grimace",type:"buff",element:"earth",mpCost:20,power:0,target:"allies",status:["def_up","cover"],description:"Become the ultimate fortress for the party.",unlockLevel:40},purple_titan:{id:"purple_titan",name:"Purple Titan",character:"grimace",type:"ultimate",element:"earth",mpCost:45,power:3,target:"enemies",status:["stun","def_down"],description:"Grimace becomes a titan and crushes all.",unlockLevel:50},feather_darts:{id:"feather_darts",name:"Feather Darts",character:"birdie",type:"attack",element:"air",mpCost:4,power:.6,target:"enemy",hits:3,description:"Throw 3 feather darts at one enemy.",unlockLevel:1},breakfast_blitz:{id:"breakfast_blitz",name:"Breakfast Blitz",character:"birdie",type:"attack",element:"air",mpCost:8,power:1.4,target:"enemy",description:"A speedy rush attack that strikes first.",unlockLevel:1,priority:!0},egg_bomb:{id:"egg_bomb",name:"Egg Bomb",character:"birdie",type:"aoe",element:"air",mpCost:14,power:1.1,target:"enemies",status:["atk_down"],description:"Bomb all enemies with explosive eggs.",unlockLevel:5},morning_song:{id:"morning_song",name:"Morning Song",character:"birdie",type:"buff",element:"air",mpCost:10,power:0,target:"allies",status:["agi_up"],description:"A cheerful song that boosts party AGI.",unlockLevel:10},dive_bomb:{id:"dive_bomb",name:"Dive Bomb",character:"birdie",type:"attack",element:"air",mpCost:12,power:1.9,target:"enemy",description:"A devastating aerial dive attack.",unlockLevel:15},dawn_chorus:{id:"dawn_chorus",name:"Dawn Chorus",character:"birdie",type:"debuff",element:"air",mpCost:16,power:0,target:"enemies",status:["agi_down"],description:"A chorus that slows all enemies.",unlockLevel:20},sky_dance:{id:"sky_dance",name:"Sky Dance",character:"birdie",type:"buff",element:"air",mpCost:18,power:0,target:"allies",status:["agi_up","atk_up"],description:"A dance that boosts ATK and AGI.",unlockLevel:30},hurricane_feathers:{id:"hurricane_feathers",name:"Hurricane Feathers",character:"birdie",type:"aoe",element:"air",mpCost:28,power:1.8,target:"enemies",hits:2,description:"A hurricane of feathers hits all enemies twice.",unlockLevel:40},sunny_side_up:{id:"sunny_side_up",name:"Sunny Side Up",character:"birdie",type:"ultimate",element:"holy",mpCost:45,power:2.8,target:"enemies",status:["burn","atk_down"],description:"A solar egg explosion sears all enemies.",unlockLevel:50},big_mac_smash:{id:"big_mac_smash",name:"Big Mac Smash",character:"bigmac",type:"attack",element:"holy",mpCost:6,power:1.7,target:"enemy",description:"A holy smash with the sesame sword.",unlockLevel:1},sesame_shield:{id:"sesame_shield",name:"Sesame Shield",character:"bigmac",type:"buff",element:"holy",mpCost:12,power:0,target:"allies",status:["def_up"],description:"Party-wide defense boost with sesame seeds.",unlockLevel:1},mcgriddle_charge:{id:"mcgriddle_charge",name:"McGriddle Charge",character:"bigmac",type:"attack",element:"holy",mpCost:10,power:1.5,target:"enemy",description:"A charging rush attack.",unlockLevel:5},special_sauce_smite:{id:"special_sauce_smite",name:"Special Sauce Smite",character:"bigmac",type:"aoe",element:"holy",mpCost:18,power:1.2,target:"enemies",description:"Holy AoE smite with special sauce.",unlockLevel:10},lettuce_wall:{id:"lettuce_wall",name:"Lettuce Wall",character:"bigmac",type:"buff",element:"holy",mpCost:14,power:0,target:"allies",status:["def_up","regen"],description:"A wall of lettuce that heals and protects.",unlockLevel:15},triple_stack:{id:"triple_stack",name:"Triple Stack",character:"bigmac",type:"attack",element:"holy",mpCost:16,power:2,target:"enemy",hits:3,description:"Three consecutive holy strikes.",unlockLevel:20},sesame_sanctuary:{id:"sesame_sanctuary",name:"Sesame Sanctuary",character:"bigmac",type:"buff",element:"holy",mpCost:22,power:0,target:"allies",status:["def_up","regen"],description:"A sanctuary that heals and shields.",unlockLevel:30},big_mac_judgment:{id:"big_mac_judgment",name:"Big Mac Judgment",character:"bigmac",type:"attack",element:"holy",mpCost:30,power:2.8,target:"enemy",status:["def_down"],description:"A judgment strike that shatters defenses.",unlockLevel:40},special_sauce_storm:{id:"special_sauce_storm",name:"Special Sauce Storm",character:"bigmac",type:"ultimate",element:"holy",mpCost:50,power:3.2,target:"enemies",status:["def_down"],description:"The ultimate special sauce storm.",unlockLevel:50},moon_melody:{id:"moon_melody",name:"Moon Melody",character:"mactonight",type:"buff",element:"dark",mpCost:8,power:0,target:"allies",status:["atk_up"],description:"A melody that boosts party ATK.",unlockLevel:1},nightjam:{id:"nightjam",name:"Nightjam",character:"mactonight",type:"debuff",element:"dark",mpCost:8,power:0,target:"enemies",status:["atk_down"],description:"A jam that lowers enemy ATK.",unlockLevel:1},mac_jazz:{id:"mac_jazz",name:"Mac Jazz",character:"mactonight",type:"buff",element:"dark",mpCost:10,power:0,target:"allies",status:["mp_regen"],description:"Smooth jazz that regenerates MP.",unlockLevel:5},moonlight_serenade:{id:"moonlight_serenade",name:"Moonlight Serenade",character:"mactonight",type:"utility",element:"dark",mpCost:14,power:.5,target:"enemies",status:["sleep"],description:"A serenade that puts enemies to sleep and heals party.",unlockLevel:10},blue_moon:{id:"blue_moon",name:"Blue Moon",character:"mactonight",type:"heal",element:"dark",mpCost:16,power:1.3,target:"ally",status:["regen"],description:"Heal an ally and grant regen.",unlockLevel:15},midnight_blues:{id:"midnight_blues",name:"Midnight Blues",character:"mactonight",type:"debuff",element:"dark",mpCost:18,power:0,target:"enemies",status:["atk_down","def_down"],description:"A blues number that weakens all enemies.",unlockLevel:20},eclipse:{id:"eclipse",name:"Eclipse",character:"mactonight",type:"utility",element:"dark",mpCost:22,power:0,target:"enemies",status:["stun","agi_down"],description:"Block out the sun, stunning all enemies.",unlockLevel:30},moon_sonata:{id:"moon_sonata",name:"Moon Sonata",character:"mactonight",type:"buff",element:"dark",mpCost:28,power:0,target:"allies",status:["atk_up","def_up","agi_up"],description:"A grand sonata that boosts all stats.",unlockLevel:40},lunar_eclipse:{id:"lunar_eclipse",name:"Lunar Eclipse",character:"mactonight",type:"ultimate",element:"dark",mpCost:50,power:2.5,target:"enemies",status:["stun","atk_down","def_down"],description:"The ultimate performance.",unlockLevel:50},enemy_bite:{id:"enemy_bite",name:"Bite",type:"attack",element:"physical",mpCost:0,power:1,target:"enemy",description:"A basic bite."},enemy_swarm:{id:"enemy_swarm",name:"Swarm",type:"attack",element:"physical",mpCost:0,power:.5,target:"enemy",hits:3,description:"Multiple weak hits."},enemy_slam:{id:"enemy_slam",name:"Slam",type:"attack",element:"physical",mpCost:0,power:1.5,target:"enemy",description:"A heavy slam."},enemy_fire_breath:{id:"enemy_fire_breath",name:"Fire Breath",type:"aoe",element:"fire",mpCost:0,power:1,target:"enemies",status:["burn"],description:"Fire AoE."},enemy_ice_breath:{id:"enemy_ice_breath",name:"Ice Breath",type:"aoe",element:"ice",mpCost:0,power:.9,target:"enemies",status:["slow"],description:"Ice AoE."},enemy_water_jet:{id:"enemy_water_jet",name:"Water Jet",type:"attack",element:"water",mpCost:0,power:1.3,target:"enemy",description:"A jet of water."},enemy_heal:{id:"enemy_heal",name:"Heal",type:"heal",element:"holy",mpCost:0,power:1,target:"ally",description:"Heal an ally."},enemy_buff:{id:"enemy_buff",name:"Battle Cry",type:"buff",element:"physical",mpCost:0,power:0,target:"allies",status:["atk_up"],description:"ATK buff."},enemy_debuff:{id:"enemy_debuff",name:"Intimidate",type:"debuff",element:"dark",mpCost:0,power:0,target:"enemies",status:["def_down"],description:"DEF debuff."},enemy_poison_spit:{id:"enemy_poison_spit",name:"Poison Spit",type:"attack",element:"water",mpCost:0,power:.8,target:"enemy",status:["poison"],description:"Poison attack."},enemy_drain:{id:"enemy_drain",name:"MP Drain",type:"utility",element:"dark",mpCost:0,power:0,target:"enemy",drainMP:15,description:"Drain MP from target."},enemy_fizz:{id:"enemy_fizz",name:"Fizz Blast",type:"aoe",element:"water",mpCost:0,power:1.1,target:"enemies",status:["atk_down"],description:"Carbonated AoE."},enemy_lightning:{id:"enemy_lightning",name:"Spark",type:"attack",element:"air",mpCost:0,power:1.4,target:"enemy",description:"Electric spark."},enemy_steal:{id:"enemy_steal",name:"Steal",type:"utility",element:"dark",mpCost:0,power:0,target:"enemy",description:"Steals items or HP."},enemy_acid:{id:"enemy_acid",name:"Acid Splash",type:"attack",element:"water",mpCost:0,power:1,target:"enemy",status:["def_down"],description:"Acid that lowers DEF."}},Da={mcnugget_goblin:{id:"mcnugget_goblin",name:"McNugget Goblin",tier:"weak",stats:{hp:30,mp:0,atk:10,def:5,agi:12,mag:5},element:"physical",weakTo:["fire","holy"],resists:["physical"],abilities:["enemy_bite"],xp:8,gold:5,drops:[{item:"ketchup_packet",chance:.3}],color:13934615,size:.6,shape:"nugget",description:"A small crispy nugget creature. Weak but comes in groups."},hash_brown_sprite:{id:"hash_brown_sprite",name:"Hash Brown Sprite",tier:"weak",stats:{hp:25,mp:5,atk:8,def:4,agi:20,mag:8},element:"physical",weakTo:["fire"],resists:["earth"],abilities:["enemy_swarm"],xp:7,gold:4,drops:[{item:"hash_brown_shard",chance:.4}],color:13141516,size:.5,shape:"sprite",description:"A tiny crispy sprite. Fast but fragile."},mcdouble_drone:{id:"mcdouble_drone",name:"McDouble Drone",tier:"weak",stats:{hp:35,mp:0,atk:9,def:6,agi:15,mag:3},element:"physical",weakTo:["ice","air"],resists:["fire"],abilities:["enemy_bite","enemy_swarm"],xp:9,gold:6,drops:[{item:"cheese_scrap",chance:.3}],color:9127187,size:.55,shape:"drone",description:"A small drone that swarms in groups."},ketchup_goblin:{id:"ketchup_goblin",name:"Ketchup Goblin",tier:"weak",stats:{hp:20,mp:10,atk:7,def:3,agi:18,mag:10},element:"fire",weakTo:["ice","water"],resists:["fire"],abilities:["enemy_bite","enemy_poison_spit"],xp:6,gold:3,drops:[{item:"ketchup_packet",chance:.5}],color:12852794,size:.5,shape:"goblin",description:"A goblin made of ketchup. Weak but numerous."},sausage_burrito_rogue:{id:"sausage_burrito_rogue",name:"Sausage Burrito Rogue",tier:"weak",stats:{hp:40,mp:5,atk:12,def:7,agi:16,mag:6},element:"physical",weakTo:["fire"],resists:["dark"],abilities:["enemy_bite","enemy_steal"],xp:10,gold:12,drops:[{item:"tortilla_scrap",chance:.25}],color:13789470,size:.6,shape:"rogue",description:"A stealthy rogue wrapped in a tortilla."},quarter_pounder_knight:{id:"quarter_pounder_knight",name:"Quarter Pounder Knight",tier:"normal",stats:{hp:70,mp:10,atk:18,def:14,agi:8,mag:8},element:"physical",weakTo:["fire","holy"],resists:["physical","dark"],abilities:["enemy_slam","enemy_bite"],xp:20,gold:15,drops:[{item:"patty_fragment",chance:.3},{item:"mc_flurry_potion",chance:.1}],color:7029795,size:.9,shape:"knight",description:"A knight with a quarter-pound patty shield."},mcrib_wraith:{id:"mcrib_wraith",name:"McRib Wraith",tier:"normal",stats:{hp:60,mp:20,atk:16,def:10,agi:14,mag:14},element:"dark",weakTo:["holy","fire"],resists:["dark","water"],abilities:["enemy_bite","enemy_drain"],xp:22,gold:18,drops:[{item:"rib_bone",chance:.3},{item:"mc_flurry_potion",chance:.15}],color:9109504,size:.85,shape:"wraith",description:"A ghostly rib sandwich that slides on the ground."},filet_o_fish_siren:{id:"filet_o_fish_siren",name:"Filet-O-Fish Siren",tier:"normal",stats:{hp:55,mp:25,atk:14,def:8,agi:12,mag:18},element:"water",weakTo:["fire","holy"],resists:["water","ice"],abilities:["enemy_water_jet","enemy_debuff"],xp:24,gold:20,drops:[{item:"fish_scale",chance:.35},{item:"mc_flurry_potion",chance:.15}],color:4886745,size:.8,shape:"siren",description:"A fishy siren that lures heroes with water spells."},mcmuffin_golem:{id:"mcmuffin_golem",name:"McMuffin Golem",tier:"normal",stats:{hp:90,mp:5,atk:15,def:20,agi:5,mag:8},element:"earth",weakTo:["water","air"],resists:["earth","fire"],abilities:["enemy_slam","enemy_buff"],xp:25,gold:18,drops:[{item:"egg_fragment",chance:.4},{item:"english_muffin",chance:.2}],color:16766720,size:1,shape:"golem",description:"A morning golem built from egg and muffin."},sundae_slime:{id:"sundae_slime",name:"Sundae Slime",tier:"normal",stats:{hp:50,mp:15,atk:10,def:12,agi:7,mag:12},element:"water",weakTo:["fire"],resists:["water","ice"],abilities:["enemy_bite","enemy_debuff"],xp:18,gold:14,drops:[{item:"sundae_drip",chance:.35}],color:16738740,size:.7,shape:"slime",description:"A sticky slime that slows the party."},onion_ring_knight:{id:"onion_ring_knight",name:"Onion Ring Knight",tier:"normal",stats:{hp:65,mp:8,atk:14,def:16,agi:10,mag:10},element:"physical",weakTo:["fire"],resists:["physical","water"],abilities:["enemy_slam","enemy_bite"],xp:21,gold:16,drops:[{item:"onion_ring",chance:.4}],color:14329120,size:.85,shape:"knight",description:"A knight in circular formation armor."},mustard_knight:{id:"mustard_knight",name:"Mustard Knight",tier:"normal",stats:{hp:75,mp:10,atk:16,def:15,agi:9,mag:12},element:"fire",weakTo:["water","ice"],resists:["fire","physical"],abilities:["enemy_slam","enemy_fire_breath"],xp:23,gold:17,drops:[{item:"mustard_jar",chance:.35}],color:16763904,size:.9,shape:"knight",description:"A knight bathed in mustard, resistant to fire."},mcchicken_harpy:{id:"mcchicken_harpy",name:"McChicken Harpy",tier:"normal",stats:{hp:58,mp:12,atk:15,def:9,agi:22,mag:10},element:"air",weakTo:["ice","earth"],resists:["air"],abilities:["enemy_swarm","enemy_debuff"],xp:22,gold:16,drops:[{item:"feather",chance:.4}],color:16767673,size:.8,shape:"harpy",description:"A flying chicken harpy."},parfait_pixie:{id:"parfait_pixie",name:"Parfait Pixie",tier:"normal",stats:{hp:45,mp:30,atk:8,def:7,agi:18,mag:20},element:"holy",weakTo:["dark"],resists:["holy","water"],abilities:["enemy_heal","enemy_buff"],xp:20,gold:22,drops:[{item:"parfait_glass",chance:.3}],color:16761035,size:.55,shape:"pixie",description:"A pixie that buffs and heals enemies."},iced_coffee_wraith:{id:"iced_coffee_wraith",name:"Iced Coffee Wraith",tier:"normal",stats:{hp:68,mp:18,atk:14,def:12,agi:11,mag:16},element:"ice",weakTo:["fire"],resists:["ice","water"],abilities:["enemy_ice_breath","enemy_drain"],xp:24,gold:19,drops:[{item:"coffee_ground",chance:.35}],color:4860951,size:.85,shape:"wraith",description:"A cold aura wraith made of iced coffee."},ranch_ooze:{id:"ranch_ooze",name:"Ranch Dressing Ooze",tier:"normal",stats:{hp:72,mp:8,atk:12,def:14,agi:6,mag:10},element:"water",weakTo:["fire","earth"],resists:["water"],abilities:["enemy_acid","enemy_bite"],xp:22,gold:16,drops:[{item:"ranch_drip",chance:.4}],color:16119260,size:.75,shape:"slime",description:"An acidic ooze that melts defenses."},big_mac_brute:{id:"big_mac_brute",name:"Big Mac Brute",tier:"elite",stats:{hp:120,mp:15,atk:22,def:18,agi:7,mag:10},element:"physical",weakTo:["fire","holy"],resists:["physical","dark"],abilities:["enemy_slam","enemy_buff","enemy_fire_breath"],xp:45,gold:35,drops:[{item:"big_mac_crown",chance:.25},{item:"happy_meal_charm",chance:.1}],color:9127187,size:1.2,shape:"brute",description:"A massive brute. Slow but hits like a truck."},apple_pie_dragon:{id:"apple_pie_dragon",name:"Apple Pie Dragon",tier:"elite",stats:{hp:100,mp:30,atk:20,def:14,agi:15,mag:22},element:"fire",weakTo:["ice","water"],resists:["fire","earth"],abilities:["enemy_fire_breath","enemy_swarm","enemy_bite"],xp:50,gold:40,drops:[{item:"apple_pie_scale",chance:.3},{item:"mc_flurry_potion",chance:.2}],color:12868113,size:1.3,shape:"dragon",description:"A dragon with crispy apple pie scales."},mcflurry_elemental:{id:"mcflurry_elemental",name:"McFlurry Elemental",tier:"elite",stats:{hp:95,mp:35,atk:16,def:12,agi:14,mag:24},element:"ice",weakTo:["fire"],resists:["ice","water"],abilities:["enemy_ice_breath","enemy_debuff","enemy_drain"],xp:48,gold:38,drops:[{item:"mcflurry_shard",chance:.35},{item:"mc_flurry_potion",chance:.3}],color:8965375,size:1.1,shape:"elemental",description:"An elemental of swirling McFlurry ice."},sprite_fairy:{id:"sprite_fairy",name:"Sprite Fairy",tier:"elite",stats:{hp:80,mp:40,atk:14,def:8,agi:28,mag:22},element:"air",weakTo:["earth"],resists:["air","fire"],abilities:["enemy_lightning","enemy_swarm","enemy_buff"],xp:46,gold:36,drops:[{item:"sprite_bottle",chance:.3},{item:"happy_meal_charm",chance:.15}],color:65416,size:.7,shape:"fairy",description:"A lightning fairy that sparks with Sprite energy."},coke_colossus:{id:"coke_colossus",name:"Coke Colossus",tier:"elite",stats:{hp:110,mp:25,atk:18,def:16,agi:10,mag:18},element:"water",weakTo:["fire","ice"],resists:["water","earth"],abilities:["enemy_fizz","enemy_water_jet","enemy_slam"],xp:50,gold:42,drops:[{item:"coke_can",chance:.35},{item:"happy_meal_charm",chance:.15}],color:12852794,size:1.4,shape:"colossus",description:"A fizzy giant that deals AoE damage."},mcnugget_king:{id:"mcnugget_king",name:"McNugget King",tier:"elite",stats:{hp:130,mp:20,atk:24,def:20,agi:8,mag:12},element:"physical",weakTo:["fire","holy"],resists:["physical"],abilities:["enemy_slam","enemy_buff","enemy_swarm"],xp:55,gold:45,drops:[{item:"nugget_crown",chance:.3},{item:"arch_armor",chance:.1}],color:13934615,size:1.3,shape:"king",description:"The king of all nuggets. A elite brute."},bacon_cheeseburger_bandit:{id:"bacon_cheeseburger_bandit",name:"Bacon Cheeseburger Bandit",tier:"elite",stats:{hp:105,mp:18,atk:26,def:14,agi:18,mag:10},element:"dark",weakTo:["holy"],resists:["dark","fire"],abilities:["enemy_bite","enemy_steal","enemy_slam"],xp:52,gold:48,drops:[{item:"bacon_strip",chance:.35},{item:"happy_meal_charm",chance:.12}],color:4860951,size:1,shape:"bandit",description:"A dark attacker with bacon strips for weapons."},deluxe_quarter_pounder:{id:"deluxe_quarter_pounder",name:"Deluxe Quarter Pounder",tier:"elite",stats:{hp:140,mp:15,atk:22,def:22,agi:10,mag:12},element:"physical",weakTo:["fire","ice"],resists:["physical","dark"],abilities:["enemy_slam","enemy_buff","enemy_fire_breath"],xp:58,gold:50,drops:[{item:"deluxe_patty",chance:.3},{item:"arch_armor",chance:.15}],color:7029795,size:1.15,shape:"knight",description:"An upgraded elite knight."},hotcake_sentinel:{id:"hotcake_sentinel",name:"Hotcake Sentinel",tier:"elite",stats:{hp:150,mp:10,atk:18,def:28,agi:5,mag:8},element:"earth",weakTo:["water","fire"],resists:["earth","physical"],abilities:["enemy_slam","enemy_buff"],xp:55,gold:42,drops:[{item:"syrup_bottle",chance:.4},{item:"arch_armor",chance:.12}],color:13141516,size:1.2,shape:"sentinel",description:"A shield wall sentinel made of hotcakes."},mccookie_titan:{id:"mccookie_titan",name:"McCookie Titan",tier:"elite",stats:{hp:180,mp:5,atk:20,def:15,agi:6,mag:8},element:"earth",weakTo:["water"],resists:["earth","fire"],abilities:["enemy_slam","enemy_swarm"],xp:60,gold:50,drops:[{item:"cookie_chunk",chance:.4},{item:"arch_armor",chance:.15}],color:13789470,size:1.5,shape:"titan",description:"A giant cookie with massive HP."},cheese_melt_mage:{id:"cheese_melt_mage",name:"Cheese Melt Mage",tier:"elite",stats:{hp:90,mp:40,atk:14,def:16,agi:12,mag:26},element:"fire",weakTo:["water","ice"],resists:["fire","holy"],abilities:["enemy_fire_breath","enemy_buff","enemy_debuff"],xp:54,gold:44,drops:[{item:"melted_cheese",chance:.35},{item:"happy_meal_charm",chance:.15}],color:16753920,size:1,shape:"mage",description:"A mage of molten cheese with fire and shields."},cookie_monster:{id:"cookie_monster",name:"Cookie Monster",tier:"elite",stats:{hp:100,mp:35,atk:16,def:14,agi:13,mag:20},element:"dark",weakTo:["holy","fire"],resists:["dark"],abilities:["enemy_drain","enemy_bite","enemy_debuff"],xp:52,gold:40,drops:[{item:"cookie_chunk",chance:.4},{item:"mc_flurry_potion",chance:.2}],color:13226,size:1.1,shape:"monster",description:"Feeds on party MP. A dangerous cookie beast."},sweet_tea_spirit:{id:"sweet_tea_spirit",name:"Sweet Tea Spirit",tier:"elite",stats:{hp:85,mp:45,atk:12,def:10,agi:16,mag:24},element:"water",weakTo:["fire"],resists:["water","ice"],abilities:["enemy_heal","enemy_buff","enemy_water_jet"],xp:48,gold:38,drops:[{item:"tea_leaf",chance:.35}],color:9127187,size:.9,shape:"spirit",description:"Heals enemy party. Take it out first!"},the_condiment_king:{id:"the_condiment_king",name:"The Condiment King",tier:"boss",stats:{hp:350,mp:80,atk:26,def:20,agi:14,mag:28},element:"fire",weakTo:["ice","holy"],resists:["fire","water","dark"],abilities:["enemy_fire_breath","enemy_ice_breath","enemy_acid","enemy_fizz","enemy_buff","enemy_heal"],xp:200,gold:150,drops:[{item:"condiment_crown",chance:1},{item:"golden_arch_charm",chance:.5}],color:16737792,size:1.8,shape:"boss",description:"The master of all sauces. A dangerous mini-boss."}},Mm={fry_valley:[{monsters:["mcnugget_goblin","mcnugget_goblin"],weight:30},{monsters:["hash_brown_sprite","mcnugget_goblin"],weight:25},{monsters:["hash_brown_sprite","hash_brown_sprite"],weight:20},{monsters:["mcnugget_goblin","mcnugget_goblin","mcnugget_goblin"],weight:15},{monsters:["ketchup_goblin","ketchup_goblin"],weight:10}],burger_highlands:[{monsters:["quarter_pounder_knight"],weight:25},{monsters:["quarter_pounder_knight","mcnugget_goblin"],weight:20},{monsters:["mcrib_wraith"],weight:20},{monsters:["onion_ring_knight","onion_ring_knight"],weight:15},{monsters:["mustard_knight"],weight:15},{monsters:["mcnugget_king"],weight:5}],mcflurry_tundra:[{monsters:["mcflurry_elemental"],weight:25},{monsters:["iced_coffee_wraith","iced_coffee_wraith"],weight:20},{monsters:["mcflurry_elemental","iced_coffee_wraith"],weight:20},{monsters:["sundae_slime","sundae_slime"],weight:15},{monsters:["sprite_fairy"],weight:15},{monsters:["coke_colossus"],weight:5}],happy_meal_forest:[{monsters:["mcrib_wraith","ketchup_goblin"],weight:20},{monsters:["mcchicken_harpy","mcchicken_harpy"],weight:20},{monsters:["parfait_pixie","mcnugget_goblin"],weight:20},{monsters:["apple_pie_dragon"],weight:15},{monsters:["cookie_monster"],weight:15},{monsters:["bacon_cheeseburger_bandit"],weight:10}],drive_thru_desert:[{monsters:["mcmuffin_golem"],weight:20},{monsters:["bacon_cheeseburger_bandit","mcdouble_drone"],weight:20},{monsters:["hotcake_sentinel"],weight:15},{monsters:["ranch_ooze","ranch_ooze"],weight:15},{monsters:["deluxe_quarter_pounder"],weight:15},{monsters:["the_condiment_king"],weight:5},{monsters:["mccookie_titan"],weight:10}],mccafe_springs:[{monsters:["sweet_tea_spirit","parfait_pixie"],weight:20},{monsters:["iced_coffee_wraith","sweet_tea_spirit"],weight:20},{monsters:["sprite_fairy","sprite_fairy"],weight:15},{monsters:["coke_colossus"],weight:10},{monsters:["cheese_melt_mage"],weight:15},{monsters:["mcflurry_elemental","parfait_pixie"],weight:15},{monsters:["deluxe_quarter_pounder","mustard_knight"],weight:5}],play_place_plains:[{monsters:["big_mac_brute","onion_ring_knight"],weight:20},{monsters:["apple_pie_dragon","mcchicken_harpy"],weight:20},{monsters:["mcnugget_king","mcnugget_goblin","mcnugget_goblin"],weight:15},{monsters:["deluxe_quarter_pounder","quarter_pounder_knight"],weight:15},{monsters:["cheese_melt_mage","ranch_ooze"],weight:15},{monsters:["mccookie_titan"],weight:10},{monsters:["the_condiment_king"],weight:5}],golden_arches_castle:[{monsters:["big_mac_brute","mustard_knight","onion_ring_knight"],weight:20},{monsters:["apple_pie_dragon","mcflurry_elemental"],weight:20},{monsters:["deluxe_quarter_pounder","deluxe_quarter_pounder"],weight:15},{monsters:["mcnugget_king","bacon_cheeseburger_bandit"],weight:15},{monsters:["cheese_melt_mage","cookie_monster","sweet_tea_spirit"],weight:15},{monsters:["mccookie_titan","hotcake_sentinel"],weight:10},{monsters:["the_condiment_king"],weight:5}]};function wm(a){const e=Mm[a];if(!e)return null;const t=e.reduce((i,s)=>i+s.weight,0);let n=Math.random()*t;for(const i of e)if(n-=i.weight,n<=0)return i.monsters;return e[0].monsters}class Sm{constructor(e){this.shaderManager=e||new Nl,this.textureCache=new Map,this.geometryCache=new Map}loadModel(e){if(Ni[e])return this.createCharacterMesh(e);if(Da[e])return this.createMonsterMesh(e);const t=new Xe,n=this._material(13421772),i=new C(new Ae(1,2,1),n);return i.position.y=1,t.add(i),t}async preloadModels(e){}async preloadAllModels(){}_getGeometry(e,t){return this.geometryCache.has(e)||this.geometryCache.set(e,t()),this.geometryCache.get(e)}_material(e,t={}){return this.shaderManager.createToonMaterial(e,t)}_addMesh(e,t,n,i=0,s=0,r=0,o=!0){const l=new C(t,n);return l.position.set(i,s,r),l.castShadow=o,l.receiveShadow=!0,e.add(l),l}createCharacterMesh(e){const t=Ni[e];if(!t)return console.warn(`Unknown character: ${e}`),new Xe;const i={ronald:()=>this._buildRonald(t),grimace:()=>this._buildGrimace(t),birdie:()=>this._buildBirdie(t),bigmac:()=>this._buildBigMac(t),mactonight:()=>this._buildMacTonight(t)}[e],s=i?i():this._buildGenericCharacter(t);return s.userData.type="character",s.userData.characterId=e,s.castShadow=!0,s.receiveShadow=!0,s.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),s}_buildRonald(e){const t=new Xe,n=this._material(14492211),i=this._material(16768256),s=this._material(16774638);this._material(16764074),this._material(3368652);const r=this._material(2236962),o=.55,l=.75,c=1.4,d=5,f=c/d;for(let y=0;y<d;y++){const w=y/d,z=o+(l-o)*(1-w),G=o+(l-o)*(1-(w+1/d)),J=y%2===0?n:i,L=new C(new he(z,G,f,16),J);L.position.y=.3+y*f+f/2,t.add(L)}const h=new C(new he(.75,.6,.3,16),i);h.position.y=.15,t.add(h);const p=new C(new he(.78,.78,.12,16),this._material(9127187));p.position.y=.3,t.add(p);const _=new C(new Ae(.2,.15,.05),i);_.position.set(0,.3,.78),t.add(_);const g=new C(new te(.5,20,16),s);g.position.y=2,g.scale.set(1,1.1,.95),t.add(g);const m=[[0,2.4,0],[-.35,2.3,.1],[.35,2.3,.1],[-.3,2.15,.35],[.3,2.15,.35],[-.4,2.1,-.1],[.4,2.1,-.1],[0,2.45,-.2],[-.2,2.45,.2],[.2,2.45,.2]];for(const[y,w,z]of m){const G=new C(new te(.22,12,10),n);G.position.set(y,w,z),t.add(G)}const u=new C(new te(.12,12,10),n);u.position.set(0,1.95,.45),t.add(u);const v=this._material(16777215),x=new C(new te(.1,12,10),v);x.position.set(-.15,2.1,.42),t.add(x);const M=new C(new te(.1,12,10),v);M.position.set(.15,2.1,.42),t.add(M);const R=new C(new te(.05,8,6),r);R.position.set(-.15,2.1,.5),t.add(R);const T=new C(new te(.05,8,6),r);T.position.set(.15,2.1,.5),t.add(T);const A=new C(new Rt(.15,.04,8,12,Math.PI),n);A.position.set(0,1.82,.42),A.rotation.x=Math.PI,t.add(A);for(const y of[-1,1]){const w=new C(new he(.12,.15,.8,8),n);w.position.set(y*.65,1,0),w.rotation.z=y*.2,t.add(w);const z=new C(new te(.2,12,10),i);z.position.set(y*.75,.6,0),t.add(z)}for(const y of[-1,1]){const w=new C(new te(.3,12,10),this._material(14492194));w.position.set(y*.25,.08,.1),w.scale.set(1.5,.5,1.8),t.add(w)}const k=new C(new he(.15,.18,.2,8),s);return k.position.y=1.65,t.add(k),t}_buildGrimace(e){const t=new Xe,n=this._material(7812010),i=this._material(5579400),s=this._material(16777215),r=this._material(2236962);this._material(16737945);const o=new C(new te(1.1,20,16),n);o.position.y=1.2,o.scale.set(1.3,1.5,1.2),t.add(o);const l=new C(new te(1,16,12),i);l.position.y=.15,l.scale.set(1.6,.3,1.5),t.add(l);const c=new C(new te(.12,12,10),s);c.position.set(-.3,2,.85),t.add(c);const d=new C(new te(.12,12,10),s);d.position.set(.3,2,.85),t.add(d);const f=new C(new te(.06,8,6),r);f.position.set(-.3,2,.93),t.add(f);const h=new C(new te(.06,8,6),r);h.position.set(.3,2,.93),t.add(h);const p=new C(new Rt(.25,.06,8,16,Math.PI),r);p.position.set(0,1.65,.9),p.rotation.x=Math.PI,t.add(p);for(const m of[-1,1]){const u=new C(new te(.3,12,10),n);u.position.set(m*1.35,1.4,0),u.scale.set(.7,1,.7),t.add(u);const v=new C(new te(.18,10,8),i);v.position.set(m*1.55,1.15,0),t.add(v)}const _=new C(new Rt(.1,.03,6,8,Math.PI),i);_.position.set(-.3,2.2,.85),_.rotation.x=Math.PI,t.add(_);const g=new C(new Rt(.1,.03,6,8,Math.PI),i);return g.position.set(.3,2.2,.85),g.rotation.x=Math.PI,t.add(g),t}_buildBirdie(e){const t=new Xe,n=this._material(16746700),i=this._material(16768256),s=this._material(16746496),r=this._material(16777215),o=this._material(2236962);this._material(4491519);const l=new C(new te(.65,16,14),n);l.position.y=.9,l.scale.set(.9,1.2,.85),t.add(l);const c=new C(new te(.4,16,14),n);c.position.y=1.6,c.scale.set(.95,1,.9),t.add(c);const d=new C(new lt(.15,.35,8),i);d.position.set(0,1.55,.45),d.rotation.x=Math.PI/2,t.add(d);const f=new C(new lt(.12,.25,8),s);f.position.set(0,1.45,.42),f.rotation.x=Math.PI/2,t.add(f);for(let _=0;_<3;_++){const g=new C(new lt(.06,.25,6),i);g.position.set(Math.cos(_*.5)*.1,2+_*.05,Math.sin(_*.3)*.1),g.rotation.z=(_-1)*.15,t.add(g)}const h=this._material(11184895),p=new C(new Rt(.38,.04,6,16),o);p.position.set(0,1.65,0),p.rotation.y=Math.PI/2,p.scale.set(1,.7,1),t.add(p);for(const _ of[-1,1]){const g=new C(new Rt(.13,.04,8,12),h);g.position.set(_*.18,1.68,.32),t.add(g);const m=new C(new _n(.1,12),this._material(8969727));m.position.set(_*.18,1.68,.35),t.add(m);const u=new C(new te(.08,10,8),r);u.position.set(_*.18,1.68,.3),t.add(u);const v=new C(new te(.04,6,6),o);v.position.set(_*.18,1.68,.36),t.add(v)}for(const _ of[-1,1]){const g=new C(new te(.15,8,6),s);g.position.set(_*.2,.08,.1),g.scale.set(1,.3,1.5),t.add(g);for(let m=-1;m<=1;m++){const u=new C(new lt(.04,.15,4),s);u.position.set(_*.2+m*.08,.05,.22),u.rotation.x=Math.PI/2,t.add(u)}}for(const _ of[-1,1]){const g=new C(new te(.25,10,8),n);g.position.set(_*.65,1,0),g.scale.set(.5,1,.8),t.add(g)}return t}_buildBigMac(e){const t=new Xe,n=this._material(13934615),i=this._material(5909772),s=this._material(16763904),r=this._material(4500019),o=this._material(1127338),l=this._material(16766720),c=this._material(2236962),d=this._material(16764074),f=new C(new he(.85,.7,.35,20),n);f.position.y=.2,t.add(f);const h=new C(new he(.88,.88,.1,20),r);h.position.y=.42,t.add(h);const p=new C(new he(.82,.82,.4,20),i);p.position.y=.65,t.add(p);const _=new C(new he(.85,.85,.08,20),s);_.position.y=.88,t.add(_);const g=new C(new he(.8,.85,.4,20),n);g.position.y=1.1,t.add(g);for(let k=0;k<8;k++){const y=k/8*Math.PI*2,w=new C(new te(.05,6,6),this._material(16774624));w.position.set(Math.cos(y)*.45,1.32,Math.sin(y)*.45),w.scale.set(1.5,.5,.8),t.add(w)}const m=new C(new te(.42,16,14),d);m.position.y=1.7,t.add(m);const u=new C(new he(.55,.55,.08,16),o);u.position.y=2,t.add(u);const v=new C(new he(.35,.4,.3,16),o);v.position.y=2.2,t.add(v);const x=new C(new _n(.1,12),l);x.position.set(0,2.25,.36),t.add(x);const M=this._material(16777215);for(const k of[-1,1]){const y=new C(new te(.08,10,8),M);y.position.set(k*.15,1.75,.36),t.add(y);const w=new C(new te(.04,6,6),c);w.position.set(k*.15,1.75,.42),t.add(w)}for(const k of[-1,1]){const y=new C(new Ae(.18,.04,.05),c);y.position.set(k*.15,1.88,.38),y.rotation.z=k*.15,t.add(y)}const R=new C(new Ae(.3,.06,.05),c);R.position.set(0,1.58,.38),t.add(R);const T=new C(new _n(.12,12),l);T.position.set(0,.7,.86),t.add(T);const A=new C(new Ai(.06,0),this._material(16769024));A.position.set(0,.7,.9),t.add(A);for(const k of[-1,1]){const y=new C(new he(.18,.22,.9,10),o);y.position.set(k*.85,.7,0),y.rotation.z=k*.15,t.add(y);const w=new C(new te(.22,12,10),d);w.position.set(k*.95,.3,0),t.add(w)}for(const k of[-1,1]){const y=new C(new he(.15,.18,.2,8),o);y.position.set(k*.3,.08,0),t.add(y);const w=new C(new te(.18,10,8),c);w.position.set(k*.3,.03,.05),w.scale.set(1,.5,1.4),t.add(w)}return t}_buildMacTonight(e){const t=new Xe,n=this._material(16771899),i=this._material(16774557),s=this._material(1118481),r=this._material(16777215),o=this._material(1710638);this._material(8947848);const l=new C(new te(.55,20,16),n);l.position.y=2.1,l.scale.set(1,1,.8),t.add(l);const c=new C(new te(.48,20,16),s);c.position.set(.18,2.15,0),c.scale.set(1,1,.8),t.add(c);const d=new C(new te(.6,16,12),i);d.position.y=2.1,d.scale.set(1,1,.7),d.material=this._material(16774557,{uRoughness:.9}),t.add(d);const f=new C(new Ae(.7,.15,.08),s);f.position.set(0,2.15,.45),t.add(f);for(const u of[-1,1]){const v=new C(new _n(.12,12),this._material(2236996));v.position.set(u*.18,2.15,.5),t.add(v)}const h=new C(new Rt(.12,.03,6,12,Math.PI),s);h.position.set(0,1.95,.48),h.rotation.x=Math.PI,t.add(h);const p=new C(new he(.5,.7,1.2,16),o);p.position.y=.9,t.add(p);const _=new C(new he(.55,.5,.15,16),r);_.position.y=1.5,t.add(_);const g=new C(new Ae(.25,.1,.08),this._material(13378082));g.position.set(0,1.45,.52),t.add(g);for(const u of[-1,1]){const v=new C(new he(.12,.15,.9,8),o);v.position.set(u*.6,.9,0),v.rotation.z=u*.1,t.add(v);const x=new C(new te(.18,12,10),r);x.position.set(u*.68,.48,0),t.add(x)}for(const u of[-1,1]){const v=new C(new he(.15,.18,.35,8),o);v.position.set(u*.22,.2,0),t.add(v);const x=new C(new te(.15,10,8),s);x.position.set(u*.22,.03,.06),x.scale.set(1,.4,1.5),t.add(x)}const m=new C(new he(.12,.15,.2,8),n);return m.position.y=1.75,t.add(m),t}_buildGenericCharacter(e){const t=new Xe,n=this._material(e.color||8947848),i=new C(new he(.5,.7,1.6,8),n);i.position.y=.8,t.add(i);const s=new C(new te(.4,12,10),this._material(16764074));return s.position.y=1.8,t.add(s),t}createMonsterMesh(e){const t=Da[e];if(!t&&!["hamburglar","hamburglar_elite"].includes(e))return new Xe;const i={mcnugget_goblin:()=>this._buildMcNuggetGoblin(t),bigmac_brute:()=>this._buildBigMacBrute(t),applepie_dragon:()=>this._buildApplePieDragon(t),mcflurry_elemental:()=>this._buildMcFlurryElemental(t),mcrib_wraith:()=>this._buildMcRibWraith(t),quarterpounder_knight:()=>this._buildQuarterPounderKnight(t),filetfish_siren:()=>this._buildFiletOFishSiren(t),sundae_slime:()=>this._buildSundaeSlime(t),hamburglar:()=>this._buildHamburglar(),hamburglar_elite:()=>this._buildHamburglarElite()}[e],s=i?i():this._buildGenericMonster(t);return s.userData.type="monster",s.userData.monsterId=e,s.castShadow=!0,s.receiveShadow=!0,s.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),s}_buildMcNuggetGoblin(e){const t=new Xe,n=this._material(13934615),i=this._material(12092939),s=this._material(13378082),r=this._material(16777215),o=this._material(1118481),l=new C(new te(.7,16,12),n);l.position.y=.8,l.scale.set(.8,1,.7),t.add(l);for(const d of[-1,1]){const f=new C(new te(.12,10,8),r);f.position.set(d*.2,1,.5),f.scale.set(1,1,.5),t.add(f);const h=new C(new te(.06,8,6),s);h.position.set(d*.2,1,.55),t.add(h);const p=new C(new Ae(.15,.04,.05),o);p.position.set(d*.2,1.15,.5),p.rotation.z=d*.3,t.add(p)}const c=new C(new Ae(.25,.08,.05),o);c.position.set(0,.8,.55),t.add(c);for(let d=0;d<3;d++){const f=new C(new lt(.03,.08,4),r);f.position.set(-.08+d*.08,.82,.57),f.rotation.x=Math.PI,t.add(f)}for(const d of[-1,1]){const f=new C(new lt(.15,.4,4),i);f.position.set(d*.65,1,0),f.rotation.z=d*1.2,f.rotation.y=d*.3,t.add(f)}for(const d of[-1,1]){const f=new C(new he(.1,.08,.3,6),i);f.position.set(d*.25,.2,0),t.add(f)}return t}_buildBigMacBrute(e){const t=new Xe,n=this._material(13934615),i=this._material(5909772),s=this._material(16763904),r=this._material(4500019),o=this._material(16777215),l=this._material(1118481);this._material(13378082);const c=new C(new he(1,.85,.4,20),n);c.position.y=.25,t.add(c);const d=new C(new he(.95,.95,.5,20),i);d.position.y=.65,t.add(d);const f=new C(new he(1,.95,.1,20),s);f.position.y=.93,t.add(f);const h=new C(new he(1.05,1,.12,20),r);h.position.y=1.05,t.add(h);const p=new C(new he(.9,1.05,.5,20),n);p.position.y=1.35,t.add(p);for(const g of[-1,1]){const m=new C(new te(.1,10,8),o);m.position.set(g*.3,1.6,.55),m.scale.set(1.5,.8,.5),t.add(m);const u=new C(new te(.05,8,6),l);u.position.set(g*.3,1.6,.62),t.add(u);const v=new C(new Ae(.2,.05,.06),l);v.position.set(g*.3,1.75,.55),v.rotation.z=g*.35,t.add(v)}const _=new C(new Ae(.4,.1,.06),l);_.position.set(0,1.4,.75),t.add(_);for(let g=0;g<4;g++){const m=new C(new lt(.04,.12,4),o);m.position.set(-.15+g*.1,1.35,.78),m.rotation.x=Math.PI,t.add(m)}for(let g=0;g<12;g++){const m=g/12*Math.PI*2,u=.3+Math.random()*.35,v=new C(new te(.04,6,6),this._material(16774624));v.position.set(Math.cos(m)*u,1.62+Math.random()*.05,Math.sin(m)*u),v.scale.set(1.5,.5,.8),t.add(v)}for(const g of[-1,1]){const m=new C(new he(.2,.25,.7,10),i);m.position.set(g*1,.7,0),m.rotation.z=g*.2,t.add(m);const u=new C(new te(.25,12,10),i);u.position.set(g*1.1,.35,0),t.add(u)}return t}_buildApplePieDragon(e){const t=new Xe,n=this._material(12868113),i=this._material(9124362);this._material(13378082);const s=this._material(16777215),r=this._material(1118481),o=this._material(9127187),l=new C(new Ae(1.2,.7,.8),n);l.position.y=.9,t.add(l);const c=new C(new Ae(1.22,.1,.82),i);c.position.y=1.3,t.add(c);for(let p=0;p<6;p++){const _=new C(new te(.06,8,6),i);_.position.set(-.55+p*.22,1.32,.4),t.add(_)}const d=new C(new Ae(.6,.5,.5),n);d.position.set(0,1.2,.65),t.add(d);for(const p of[-1,1]){const _=new C(new te(.1,10,8),s);_.position.set(p*.18,1.35,.88),t.add(_);const g=new C(new te(.05,8,6),r);g.position.set(p*.18,1.35,.93),t.add(g)}for(const p of[-1,1]){const _=new C(new te(.04,6,6),r);_.position.set(p*.1,1.15,.92),t.add(_)}const f=new _t(.8,.6);for(const p of[-1,1]){const _=new C(f,i);_.position.set(p*.8,1.1,0),_.rotation.y=p*.5,_.rotation.z=p*.3,t.add(_);const g=new C(new _t(.6,.4),n);g.position.set(p*.75,1.15,.05),g.rotation.y=p*.5,t.add(g)}const h=new C(new lt(.15,.8,8),o);h.position.set(0,.9,-.6),h.rotation.x=-Math.PI/3,h.rotation.z=Math.PI,t.add(h);for(let p=0;p<3;p++){const _=new C(new lt(.05,.15,4),i);_.position.set(0,1.2-p*.2,-.5-p*.15),_.rotation.x=-Math.PI/3,t.add(_)}for(const p of[-1,1]){const _=new C(new he(.12,.15,.35,8),i);_.position.set(p*.35,.2,.2),t.add(_);const g=new C(new te(.1,8,6),o);g.position.set(p*.35,.05,.28),g.scale.set(1,.4,1.3),t.add(g)}return t}_buildMcFlurryElemental(e){const t=new Xe,n=this._material(8965375),i=this._material(16777215);this._material(2245734);const s=this._material(1118481),r=this._material(2759178),o=this._material(13421772),l=new C(new he(.65,.45,.6,16),o);l.position.y=.35,t.add(l);const c=new C(new te(.65,16,14),i);c.position.y=.9,c.scale.set(1,1.2,1),t.add(c);const d=new C(new lt(.25,.5,12),i);d.position.y=1.45,t.add(d);const f=new C(new Rt(.5,.05,6,16),n);f.position.y=.95,f.rotation.x=Math.PI/2,t.add(f);for(const h of[-1,1]){const p=new C(new he(.12,.12,.06,12),r);p.position.set(h*.22,1,.55),p.rotation.x=Math.PI/2,t.add(p);const _=new C(new he(.08,.08,.02,12),i);_.position.set(h*.22,1,.58),_.rotation.x=Math.PI/2,t.add(_);const g=new C(new te(.04,8,6),s);g.position.set(h*.22,1,.62),t.add(g)}for(const h of[-1,1]){const p=new C(new he(.1,.08,.6,8),n);p.position.set(h*.7,.8,0),p.rotation.z=h*.3,t.add(p);const _=new C(new Ai(.12,0),n);_.position.set(h*.78,.5,0),t.add(_)}for(let h=0;h<6;h++){const p=h/6*Math.PI*2,_=new C(new te(.08,6,6),n);_.position.set(Math.cos(p)*.6,.1,Math.sin(p)*.6),_.scale.set(1,.5,1),t.add(_)}return t}_buildMcRibWraith(e){const t=new Xe,n=this._material(9109504),i=this._material(5898240),s=this._material(11176072),r=this._material(1118481);this._material(16777215);const o=this._material(15261904),l=new C(new Ae(.8,1.2,.5),n);l.position.y=1,t.add(l);for(let h=0;h<5;h++){const p=new C(new Rt(.35,.05,6,12,Math.PI),o);p.position.set(0,.6+h*.22,.26),p.rotation.x=-Math.PI/2,t.add(p)}const c=new C(new Ae(.82,.3,.52),i);c.position.y=.8,t.add(c);const d=new C(new lt(.4,.6,12),s);d.position.y=.3,t.add(d);for(let h=0;h<4;h++){const p=new C(new te(.1,8,6),s);p.position.set((Math.random()-.5)*.6,.15+Math.random()*.2,(Math.random()-.5)*.4),p.scale.set(1,1.5,.5),t.add(p)}for(const h of[-1,1]){const p=new C(new te(.12,10,8),r);p.position.set(h*.2,1.35,.25),t.add(p);const _=new C(new te(.04,8,6),this._material(16729156));_.position.set(h*.2,1.35,.3),t.add(_)}const f=new C(new Ae(.3,.15,.05),r);f.position.set(0,1.1,.25),t.add(f);for(const h of[-1,1]){const p=new C(new he(.08,.06,.5,6),s);p.position.set(h*.5,1,0),p.rotation.z=h*.4,t.add(p)}return t}_buildQuarterPounderKnight(e){const t=new Xe,n=this._material(13934615),i=this._material(5909772),s=this._material(16763904),r=this._material(6970061),o=this._material(8947865);this._material(16777215);const l=this._material(1118481),c=this._material(16766720),d=new C(new he(.8,.7,.3,16),n);d.position.y=.2,t.add(d);const f=new C(new he(.78,.78,.4,16),i);f.position.y=.5,t.add(f);const h=new C(new he(.82,.78,.08,16),s);h.position.y=.72,t.add(h);const p=new C(new he(.75,.82,.35,16),n);p.position.y=.95,t.add(p);const _=new C(new te(.45,16,14),o);_.position.y=1.5,t.add(_);const g=new C(new Ae(.5,.08,.05),l);g.position.set(0,1.5,.4),t.add(g);for(const T of[-1,1]){const A=new C(new te(.04,8,6),this._material(4500223));A.position.set(T*.12,1.5,.43),t.add(A)}const m=new C(new Ae(.06,.25,.06),c);m.position.set(0,1.85,0),t.add(m);const u=new C(new Ae(.08,1.2,.02),o);u.position.set(.85,.8,0),u.rotation.z=-.2,t.add(u);const v=new C(new Ae(.25,.06,.06),c);v.position.set(.8,1.35,0),v.rotation.z=-.2,t.add(v);const x=new C(new te(.06,8,6),c);x.position.set(.76,1.45,0),t.add(x);const M=new C(new he(.35,.35,.08,12),r);M.position.set(-.85,.7,.1),M.rotation.x=Math.PI/2,M.rotation.z=.2,t.add(M);const R=new C(new _n(.15,12),c);R.position.set(-.85,.7,.15),t.add(R);for(const T of[-1,1]){const A=new C(new he(.15,.18,.7,8),o);A.position.set(T*.7,.5,0),A.rotation.z=T*.15,t.add(A)}for(const T of[-1,1]){const A=new C(new he(.13,.15,.2,8),o);A.position.set(T*.25,.08,0),t.add(A)}return t}_buildFiletOFishSiren(e){const t=new Xe,n=this._material(4886745),i=this._material(6992121),s=this._material(16777215),r=this._material(1118481),o=this._material(3832521),l=this._material(16763904),c=new C(new te(.7,16,14),n);c.position.y=.9,c.scale.set(1.1,1.3,.8),t.add(c);const d=new C(new te(.6,14,12),i);d.position.set(0,.8,.15),d.scale.set(.9,1.1,.5),t.add(d);const f=new C(new Ae(1,.05,.5),l);f.position.set(0,1.45,0),f.rotation.x=-.1,t.add(f);const h=new C(new te(.5,16,14),n);h.position.set(0,1.7,.1),h.scale.set(1,.9,.9),t.add(h);for(const m of[-1,1]){const u=new C(new te(.1,10,8),s);u.position.set(m*.2,1.85,.45),t.add(u);const v=new C(new te(.05,8,6),r);v.position.set(m*.2,1.85,.52),t.add(v)}const p=new C(new te(.12,10,8),r);p.position.set(0,1.55,.5),p.scale.set(1.2,.8,.5),t.add(p);const _=new C(new _t(.5,.4),o);_.position.set(0,1.4,-.3),_.rotation.x=-Math.PI/4,t.add(_);for(const m of[-1,1]){const u=new C(new _t(.4,.35),o);u.position.set(m*.7,.9,0),u.rotation.y=m*Math.PI/3,t.add(u)}const g=new C(new lt(.3,.6,8),o);g.position.set(0,.6,-.7),g.rotation.x=-Math.PI/2,g.scale.set(1,1,.4),t.add(g);for(const m of[-1,1]){const u=new C(new _t(.3,.3),o);u.position.set(m*.1,.6,-.95),u.rotation.y=m*.5,u.rotation.x=Math.PI/2,t.add(u)}for(const m of[-1,1]){const u=new C(new he(.08,.06,.5,6),n);u.position.set(m*.6,1,.1),u.rotation.z=m*.3,t.add(u)}return t}_buildSundaeSlime(e){const t=new Xe,n=this._material(16738740),i=this._material(16775399),s=this._material(13373713),r=this._material(9127187),o=this._material(16777215),l=this._material(1118481),c=new C(new te(.8,16,12),i);c.position.y=.4,c.scale.set(1.3,.8,1.3),t.add(c);const d=new C(new te(.7,14,10),n);d.position.y=.55,d.scale.set(1.1,.6,1.1),t.add(d);for(let g=0;g<8;g++){const m=g/8*Math.PI*2,u=new C(new te(.1+Math.random()*.06,8,6),n);u.position.set(Math.cos(m)*.85,.15+Math.random()*.1,Math.sin(m)*.85),u.scale.set(1,1.5+Math.random(),1),t.add(u)}const f=new C(new te(.15,12,10),s);f.position.y=1,t.add(f);const h=new C(new he(.02,.02,.15,4),r);h.position.y=1.15,t.add(h);for(const g of[-1,1]){const m=new C(new te(.1,10,8),o);m.position.set(g*.25,.55,.7),t.add(m);const u=new C(new te(.05,8,6),l);u.position.set(g*.25,.55,.78),t.add(u)}const p=new C(new Rt(.15,.04,6,12,Math.PI),l);p.position.set(0,.35,.7),p.rotation.x=Math.PI,t.add(p);const _=[16729156,4521796,4474111,16777028,16729343,4521983];for(let g=0;g<12;g++){const m=g/12*Math.PI*2,u=.5+Math.random()*.3,v=new C(new Ae(.04,.12,.04),this._material(_[g%_.length]));v.position.set(Math.cos(m)*u,.65+Math.random()*.15,Math.sin(m)*u),v.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),t.add(v)}return t}_buildHamburglar(){const e=new Xe,t=this._material(1118481),n=this._material(16777215),i=this._material(13378082),s=this._material(16764074);this._material(6636321),this._material(6710886);const r=4,o=1/r;for(let m=0;m<r;m++){const u=m%2===0?t:n,v=new C(new he(.45,.55,o,12),u);v.position.y=.3+m*o+o/2,e.add(v)}const l=new C(new te(.4,16,14),s);l.position.y=1.7,e.add(l);const c=new C(new Ae(.65,.18,.1),t);c.position.set(0,1.8,.3),e.add(c);for(const m of[-1,1]){const u=new C(new _n(.05,8),s);u.position.set(m*.15,1.8,.36),e.add(u)}const d=new C(new he(.5,.5,.06,16),t);d.position.y=2.05,e.add(d);const f=new C(new he(.3,.32,.35,16),t);f.position.y=2.25,e.add(f);const h=new C(new he(.33,.33,.08,16),i);h.position.y=2.12,e.add(h);const p=new C(new _t(1.2,1.6),t);p.position.set(0,1,-.35),e.add(p);const _=new C(new _t(1.1,1.5),i);_.position.set(0,1,-.34),e.add(_);for(const m of[-1,1]){const u=new C(new he(.1,.12,.7,8),t);u.position.set(m*.55,.9,0),u.rotation.z=m*.15,e.add(u);const v=new C(new te(.15,10,8),n);v.position.set(m*.62,.55,0),e.add(v)}for(const m of[-1,1]){const u=new C(new he(.12,.14,.3,8),t);u.position.set(m*.2,.15,0),e.add(u);const v=new C(new te(.15,10,8),t);v.position.set(m*.2,.03,.06),v.scale.set(1,.4,1.4),e.add(v)}const g=new C(new Ae(.2,.04,.05),t);return g.position.set(.05,1.58,.36),g.rotation.z=-.1,e.add(g),e}_buildHamburglarElite(){const e=new Xe,t=this._material(1118481);this._material(16777215);const n=this._material(6697898),i=this._material(4460936),s=this._material(16764074);this._material(13378082);const r=this._material(16729343),o=4,l=1.2/o;for(let v=0;v<o;v++){const x=v%2===0?n:i,M=new C(new he(.5,.65,l,12),x);M.position.y=.3+v*l+l/2,e.add(M)}const c=new C(new Ae(.9,.6,.3),i);c.position.set(0,.8,.3),e.add(c);const d=new C(new te(.45,16,14),s);d.position.y=1.9,e.add(d);const f=new C(new Ae(.7,.2,.12),t);f.position.set(0,2,.32),e.add(f);for(const v of[-1,1]){const x=new C(new te(.06,10,8),r);x.position.set(v*.15,2,.4),e.add(x)}const h=new C(new he(.55,.55,.08,16),i);h.position.y=2.3,e.add(h);const p=new C(new he(.34,.36,.4,16),i);p.position.y=2.5,e.add(p);const _=new C(new he(.37,.37,.08,16),r);_.position.y=2.36,e.add(_);const g=new C(new _t(1.4,1.8),i);g.position.set(0,1.1,-.4),e.add(g);const m=new C(new _t(1.3,1.7),n);m.position.set(0,1.1,-.39),e.add(m);for(const v of[-1,1]){const x=new C(new he(.14,.16,.8,8),n);x.position.set(v*.6,1,0),x.rotation.z=v*.15,e.add(x);const M=new C(new te(.2,10,8),i);M.position.set(v*.55,1.35,0),e.add(M);const R=new C(new te(.18,10,8),t);R.position.set(v*.68,.6,0),e.add(R)}for(const v of[-1,1]){const x=new C(new he(.15,.17,.3,8),i);x.position.set(v*.22,.15,0),e.add(x);const M=new C(new te(.18,10,8),t);M.position.set(v*.22,.03,.06),M.scale.set(1,.4,1.4),e.add(M)}const u=new C(new Rt(.18,.04,6,12,Math.PI),t);return u.position.set(0,1.75,.38),u.rotation.x=Math.PI,u.rotation.z=Math.PI,e.add(u),e.scale.setScalar(1.15),e}_buildGenericMonster(e){const t=new Xe,n=this._material((e==null?void 0:e.color)||8934690),i=new C(new te(1,12,10),n);i.position.y=1,i.scale.set(1.2,1.5,1),t.add(i);const s=this._material(16777215),r=new C(new te(.15,8,6),s);r.position.set(-.3,1.3,.8),t.add(r);const o=new C(new te(.15,8,6),s);return o.position.set(.3,1.3,.8),t.add(o),t}createGround(e){const t=typeof e=="number"?e:(e==null?void 0:e.groundColor)||4880954,n=new Xe,i=new _t(200,200,64,64),s=i.attributes.position;for(let p=0;p<s.count;p++){const _=s.getX(p),g=s.getY(p),m=Math.sin(_*.1)*Math.cos(g*.1)*.5+Math.sin(_*.05+2)*Math.cos(g*.07)*1;s.setZ(p,m)}i.computeVertexNormals();const r=this._material(t),o=new C(i,r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=this._getPathColor(t),c=this._material(l),d=new C(new _t(6,200,1,20),c);d.rotation.x=-Math.PI/2,d.position.y=.05,d.receiveShadow=!0,n.add(d);const f=this._material(this._darkenColor(t,.15));for(let p=0;p<80;p++){const _=Math.random()*Math.PI*2,g=10+Math.random()*80,m=new C(new lt(.15+Math.random()*.1,.4+Math.random()*.3,4),f);m.position.set(Math.cos(_)*g,.2,Math.sin(_)*g),m.rotation.y=Math.random()*Math.PI,m.castShadow=!0,n.add(m)}const h=this._getFlowerColors(t);for(let p=0;p<40;p++){const _=Math.random()*Math.PI*2,g=15+Math.random()*70,m=h[Math.floor(Math.random()*h.length)],u=new C(new te(.12,6,4),this._material(m));u.position.set(Math.cos(_)*g,.25,Math.sin(_)*g),n.add(u)}return n.receiveShadow=!0,n}_getPathColor(e){const t=e.toString(16).padStart(6,"0"),n=parseInt(t.substr(0,2),16),i=parseInt(t.substr(2,2),16),s=parseInt(t.substr(4,2),16),r=Math.round(n*.4+196*.6),o=Math.round(i*.4+168*.6),l=Math.round(s*.4+122*.6);return r<<16|o<<8|l}_darkenColor(e,t){const n=e.toString(16).padStart(6,"0"),i=Math.max(0,parseInt(n.substr(0,2),16)-Math.round(255*t)),s=Math.max(0,parseInt(n.substr(2,2),16)-Math.round(255*t)),r=Math.max(0,parseInt(n.substr(4,2),16)-Math.round(255*t));return i<<16|s<<8|r}_getFlowerColors(e){return[16729190,16768256,16746496,16777215,11158783]}createTree(e=0){typeof e=="string"&&(e=e.split("").reduce((l,c)=>l+c.charCodeAt(0),0));const t=new Ci(e),n=new Xe,i=this._material(4860426),s=this._material(2775594+Math.floor(t.next()*2236962)),r=new C(new he(.2,.3,2,6),i);r.position.y=1,r.castShadow=!0,n.add(r);const o=new C(new te(1+t.next()*.5,8,6),s);return o.position.y=2.5,o.castShadow=!0,n.add(o),n}createRock(e=0){const t=new Ci(e),n=this._material(8947848+Math.floor(t.next()*2236962)),i=new C(new Va(.5+t.next()*.5,0),n);return i.position.y=.3,i.rotation.set(t.next()*Math.PI,t.next()*Math.PI,t.next()*Math.PI),i.castShadow=!0,i.receiveShadow=!0,i}createBuilding(e=0,t=13404228){const n=new Ci(e),i=new Xe,s=this._material(t),r=2+n.next()*2,o=2+n.next()*3,l=2+n.next()*2,c=new C(new Ae(r,o,l),s);c.position.y=o/2,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const d=this._material(8925986),f=new C(new lt(Math.max(r,l)*.7,1,4),d);return f.position.y=o+.5,f.rotation.y=Math.PI/4,f.castShadow=!0,i.add(f),i}getTexture(e,t){return this.textureCache.has(e)||this.textureCache.set(e,t()),this.textureCache.get(e)}createStructure(e){const t=new Xe;switch(e){case"house":{const n=this._material(14535867),i=this._material(9127187),s=new C(new Ae(2,1.5,1.5),n);s.position.y=.75,t.add(s);const r=new C(new lt(1.5,1,4),i);r.position.y=1.75,r.rotation.y=Math.PI/4,t.add(r);const o=new C(new Ae(.5,.9,.05),this._material(4860944));o.position.set(0,.45,.78),t.add(o);break}case"golden_arches":{const n=this._material(16766720);for(const s of[-1,1]){const r=new C(new Rt(1,.15,8,16,Math.PI),n);r.position.set(s*1,1,0),t.add(r)}const i=new C(new Ae(3,.2,.5),this._material(13421772));i.position.y=0,t.add(i);break}case"shop":{const n=this._material(15658734),i=new C(new Ae(3,2,2),n);i.position.y=1,t.add(i);const s=new C(new Ae(2,.5,.1),this._material(16768256));s.position.set(0,2.2,.95),t.add(s);break}case"inn":{const n=this._material(14524637),i=new C(new Ae(3,2.5,2),n);i.position.y=1.25,t.add(i);const s=new C(new lt(2.2,1,4),this._material(9127187));s.position.y=3,s.rotation.y=Math.PI/4,t.add(s);break}case"castle_wall":{const n=this._material(11184810),i=new C(new Ae(5,4,.5),n);i.position.y=2,t.add(i);for(let s=-2;s<=2;s++){const r=new C(new Ae(.8,.5,.6),n);r.position.set(s*1,4.25,0),t.add(r)}break}case"castle_tower":{const n=this._material(12303291),i=new C(new he(1.5,1.5,6,12),n);i.position.y=3,t.add(i);const s=new C(new lt(2,2,12),this._material(9109504));s.position.y=7,t.add(s);break}case"cactus":{const n=this._material(2787882),i=new C(new he(.4,.5,3,8),n);i.position.y=1.5,t.add(i);for(const s of[-1,1]){const r=new C(new he(.25,.3,1.5,8),n);r.position.set(s*.7,1.8,0),r.rotation.z=s*Math.PI/4,t.add(r)}break}case"tube":{const n=this._material(16737860),i=new C(new he(.8,.8,3,12),n);i.rotation.z=Math.PI/2,t.add(i);break}default:{const n=new C(new Ae(2,2,2),this._material(8947848));n.position.y=1,t.add(n);break}}return t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),t}createTreasureChest(){const e=new Xe,t=this._material(9127187),n=this._material(16766720),i=new C(new Ae(1,.6,.7),t);i.position.y=.3,e.add(i);const s=new C(new Ae(1,.3,.7),t);s.position.y=.75,e.add(s);const r=new C(new Ae(.2,.2,.1),n);return r.position.set(0,.5,.4),e.add(r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),e.userData.isTreasure=!0,e}createSavePoint(){const e=new Xe,t=this._material(4521983),n=new C(new Ai(.5,0),t);n.position.y=1,e.add(n);const i=new C(new he(.6,.8,.3,8),this._material(4473924));return i.position.y=.15,e.add(i),e.userData.isSavePoint=!0,e}createNPCMesh(e){const t=new Xe,n=this._material(4491468),i=this._material(16764074),s=new C(new he(.4,.6,1.4,8),n);s.position.y=.7,t.add(s);const r=new C(new te(.35,12,10),i);return r.position.y=1.6,t.add(r),t.userData.npcName=e,t.userData.isNPC=!0,t.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),t}updateParticleEffect(e,t){if(!e.userData.velocities)return;const n=e.geometry.attributes.position,i=e.userData.velocities,s=e.userData.lifetimes,r=e.userData.maxLifetimes;e.userData.elapsed+=t;let o=!0;for(let l=0;l<i.length;l++){if(s[l]<=0)continue;o=!1,s[l]-=t,n.setX(l,n.getX(l)+i[l].x*t),n.setY(l,n.getY(l)+i[l].y*t),n.setZ(l,n.getZ(l)+i[l].z*t),i[l].y-=2*t;const c=Sn(s[l]/r[l],0,1);e.material.opacity=c*0}n.needsUpdate=!0,o&&(e.userData.dead=!0)}}class Em{constructor(e){this.camera=e,this.currentMode="overworld",this.targetObject=null,this.cameraYaw=0,this.transitionT=1,this.transitionSpeed=3,this.previousPosition=new I,this.previousLookAt=new I,this.targetPosition=new I,this.targetLookAt=new I,this.currentLookAt=new I,this.overworldOffset=new I(0,8,12),this.overworldFollowSpeed=5,this.overworldYawSpeed=2.5,this.battleCombatants=[],this.battleTime=0,this.battleSwayAmplitude=.6,this.battleSwaySpeed=1.2,this.battleDistance=18,this.battleHeight=12,this.menuPosition=new I(0,20,20),this.menuLookAt=new I(0,0,0),this.titleRadius=20,this.titleHeight=10,this.titleOrbitSpeed=.25,this.regionData=null,this.inputRotateLeft=!1,this.inputRotateRight=!1,this.currentLookAt.set(0,0,0),this.previousPosition.copy(this.camera.position),this.previousLookAt.copy(this.currentLookAt),this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt)}setMode(e){e!==this.currentMode&&(this.previousPosition.copy(this.camera.position),this.previousLookAt.copy(this.currentLookAt),this.currentMode=e,this.transitionT=0,this._updateTargetPosition(0))}setTarget(e){this.targetObject=e}setBattleCombatants(e){this.battleCombatants=e}setRegion(e){this.regionData=e;const t=this.camera.userData.fog;t&&e&&(e.fogColor!==void 0&&t.color.setHex(e.fogColor),e.fogDensity!==void 0&&(t.density=e.fogDensity),e.fogNear!==void 0&&(t.near=e.fogNear),e.fogFar!==void 0&&(t.far=e.fogFar))}update(e){if(this.transitionT<1&&(this.transitionT=Math.min(1,this.transitionT+this.transitionSpeed*e)),this.currentMode==="overworld"&&(this.inputRotateLeft&&(this.cameraYaw+=this.overworldYawSpeed*e),this.inputRotateRight&&(this.cameraYaw-=this.overworldYawSpeed*e)),this._updateTargetPosition(e),this.transitionT<1){const t=Ia(0,1,this.transitionT);this.camera.position.lerpVectors(this.previousPosition,this.targetPosition,t),this.currentLookAt.lerpVectors(this.previousLookAt,this.targetLookAt,t)}else this.camera.position.lerp(this.targetPosition,Sn(this.overworldFollowSpeed*e,0,1)),this.currentLookAt.lerp(this.targetLookAt,Sn(this.overworldFollowSpeed*e,0,1));this.camera.lookAt(this.currentLookAt)}_updateTargetPosition(e){switch(this.currentMode){case"overworld":this._computeOverworld(e);break;case"battle":this._computeBattle(e);break;case"menu":this._computeMenu();break;case"title":this._computeTitle(e);break;default:this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt);break}}_computeOverworld(e){if(!this.targetObject){this.targetPosition.copy(this.camera.position),this.targetLookAt.copy(this.currentLookAt);return}const t=this.targetObject.position,n=Math.cos(this.cameraYaw),i=Math.sin(this.cameraYaw),s=this.overworldOffset.x*n-this.overworldOffset.z*i,r=this.overworldOffset.x*i+this.overworldOffset.z*n,o=this.overworldOffset.y;this.targetPosition.set(t.x+s,t.y+o,t.z+r),this.targetLookAt.set(t.x,t.y+1,t.z)}_computeBattle(e){if(this.battleTime+=e,this.battleCombatants.length===0){this.targetPosition.set(0,this.battleHeight,this.battleDistance),this.targetLookAt.set(0,0,0);return}const t=new I;for(const c of this.battleCombatants)t.add(c);t.divideScalar(this.battleCombatants.length);const n=-Math.PI*.25,i=t.x+Math.sin(n)*this.battleDistance,s=t.z+Math.cos(n)*this.battleDistance,r=t.y+this.battleHeight,o=Math.sin(this.battleTime*this.battleSwaySpeed)*this.battleSwayAmplitude,l=Math.cos(this.battleTime*this.battleSwaySpeed)*this.battleSwayAmplitude;this.targetPosition.set(i+o,r+l,s),this.targetLookAt.set(t.x,t.y+1.5,t.z)}_computeMenu(){this.targetPosition.copy(this.menuPosition),this.targetLookAt.copy(this.menuLookAt)}_computeTitle(e){this._titleAngle||(this._titleAngle=0),this._titleAngle+=this.titleOrbitSpeed*e;const t=Math.cos(this._titleAngle)*this.titleRadius,n=Math.sin(this._titleAngle)*this.titleRadius,i=this.titleHeight;this.targetPosition.set(t,i,n),this.targetLookAt.set(0,0,0)}}class Tm{constructor(e,t,n){this.renderer=e,this.cameraController=t,this.assetManager=n,this.currentState="title",this.scenes={title:new Mi,overworld:new Mi,battle:new Mi,menu:new Mi},this.sceneFog={},this.transitioning=!1,this.transitionT=0,this.transitionDuration=.5,this.transitionFromState=null,this.transitionToState=null,this.pendingData=null,this.overlayGeometry=new _t(2,2),this.overlayMaterial=new ki({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.overlay=new C(this.overlayGeometry,this.overlayMaterial),this.overlay.position.z=-.1,this.overlayScene=new Mi,this.overlayCamera=new Ha(-1,1,1,-1,0,1),this.overlayScene.add(this.overlay),this.currentRegion=null,this.battleData=null,this.skySettings={},this._setupTitleScene()}_setupTitleScene(){const e=this.scenes.title,t=new da(8952251,1.2);e.add(t);const n=new xo(11184895,4469606,.6);n.position.set(0,20,0),e.add(n);const i=new cs(16774365,1.5);i.position.set(-5,10,-3),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,e.add(i);const s=new cs(16755421,.5);s.position.set(5,8,3),e.add(s),e.fog=new ri(2759226,.015);const r=new te(200,32,16),o=new hn({uniforms:{topColor:{value:new Ve(4864618)},bottomColor:{value:new Ve(6965850)},offset:{value:33},exponent:{value:.6}},vertexShader:`
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
      `,side:Mt,depthWrite:!1}),l=new C(r,o);l.userData.persistent=!0,e.add(l);const c=this.assetManager.shaderManager.createToonMaterial(5917242),d=new C(new _t(100,100),c);d.rotation.x=-Math.PI/2,d.position.y=-2,d.receiveShadow=!0,e.add(d);const f=this.assetManager.createStructure("golden_arches");f.position.set(0,-2,-10),e.add(f)}setState(e,t={}){this.currentState===e&&!this.transitioning||(this.transitioning=!0,this.transitionT=0,this.transitionFromState=this.currentState,this.transitionToState=e,this.pendingData=t)}_completeTransition(){this.currentState=this.transitionToState,this.transitioning=!1,this.transitionT=0,this.transitionFromState=null,this.transitionToState=null,this.pendingData&&(this.pendingData.region&&(this.currentRegion=this.pendingData.region,this._setupOverworldScene(this.pendingData.region)),this.pendingData.battle&&(this.battleData=this.pendingData.battle,this._setupBattleScene(this.pendingData.battle)),this.pendingData.menu&&this._setupMenuScene(this.pendingData.menu)),this.pendingData=null,this.currentState==="title"?this.cameraController.setMode("title"):this.currentState==="overworld"?this.cameraController.setMode("overworld"):this.currentState==="battle"?this.cameraController.setMode("battle"):this.currentState==="menu"&&this.cameraController.setMode("menu")}_setupOverworldScene(e){const t=this.scenes.overworld,n=[];t.children.forEach(l=>{l.userData.persistent||n.push(l)}),n.forEach(l=>t.remove(l));const i=new da(e.ambientColor||6715306,.8);i.userData.persistent=!0,t.add(i);const s=new xo(11184895,6706500,.5);s.position.set(0,20,0),s.userData.persistent=!0,t.add(s);const r=new cs(e.lightColor||16774365,1.3);r.position.set(-5,10,-3),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,r.shadow.camera.near=.5,r.shadow.camera.far=50,r.shadow.camera.left=-40,r.shadow.camera.right=40,r.shadow.camera.top=40,r.shadow.camera.bottom=-40,r.userData.persistent=!0,t.add(r),t.fog=new ri(e.fogColor||8956620,e.fogDensity||.02);const o=this.assetManager.createGround(e);if(t.add(o),e.decorations){const l=e.decorations,c=l.trees||0,d=l.rocks||0,f=l.structures||0;for(let h=0;h<c;h++){const p=this.assetManager.createTree(e.id),_=h/c*Math.PI*2+Math.random()*.5,g=(e.size||80)*.35+Math.random()*10;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,t.add(p)}for(let h=0;h<d;h++){const p=this.assetManager.createRock(.5+Math.random()*1),_=Math.random()*Math.PI*2,g=Math.random()*(e.size||80)*.4;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,t.add(p)}if(e.isHub){const h=["shop","inn","house","house","golden_arches"];h.forEach((_,g)=>{const m=this.assetManager.createStructure(_),u=g/h.length*Math.PI*2,v=12;m.position.x=Math.cos(u)*v,m.position.z=Math.sin(u)*v,m.lookAt(0,m.position.y,0),t.add(m)});const p=this.assetManager.createSavePoint();p.position.set(0,0,-10),t.add(p)}else for(let h=0;h<f;h++){const p=e.decorations.cactus?["cactus","cactus","house"]:["house","golden_arches","castle_wall"],_=p[h%p.length],g=this.assetManager.createStructure(_),m=Math.random()*Math.PI*2,u=(e.size||80)*.3+Math.random()*10;g.position.x=Math.cos(m)*u,g.position.z=Math.sin(m)*u,t.add(g)}if(e.decorations.castle){for(let h=0;h<4;h++){const p=this.assetManager.createStructure("castle_wall"),_=h/4*Math.PI*2,g=(e.size||80)*.35;p.position.x=Math.cos(_)*g,p.position.z=Math.sin(_)*g,p.lookAt(0,p.position.y,0),t.add(p)}for(let h=0;h<2;h++){const p=this.assetManager.createStructure("castle_tower");p.position.set(h===0?-20:20,0,-30),t.add(p)}}if(e.decorations.labyrinth)for(let h=0;h<15;h++){const p=this.assetManager.createStructure("tube"),_=Math.random()*Math.PI*2,g=Math.random()*(e.size||80)*.3;p.position.x=Math.cos(_)*g,p.position.y=1+Math.random()*2,p.position.z=Math.sin(_)*g,p.rotation.y=Math.random()*Math.PI,t.add(p)}}e.npcs&&e.npcs.forEach(l=>{const c=this.assetManager.createNPCMesh(l.name);c.position.set(l.x,0,l.z),c.userData.npcData=l,t.add(c)}),e.treasures&&e.treasures.forEach(l=>{const c=this.assetManager.createTreasureChest();c.position.set(l.x,0,l.z),c.userData.treasureData=l,t.add(c)}),this.cameraController.setRegion(e)}_setupBattleScene(e){var d,f,h;const t=this.scenes.battle;for(;t.children.length>0;)t.remove(t.children[0]);const n=new da(6715306,.7);t.add(n);const i=new cs(16774365,1.5);i.position.set(-5,10,-3),i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,t.add(i);const s=this.assetManager.shaderManager.createToonMaterial(((d=this.currentRegion)==null?void 0:d.groundColor)||4864554),r=new C(new he(8,8,.5,32),s);r.position.y=-.25,r.receiveShadow=!0,t.add(r),t.fog=new ri(((f=this.currentRegion)==null?void 0:f.fogColor)||8956620,.03);const o=this.assetManager.shaderManager.createToonMaterial(((h=this.currentRegion)==null?void 0:h.color)||4881466),l=new C(new Wa(8,15,32),o);l.rotation.x=-Math.PI/2,l.position.y=-.24,t.add(l);const c=[];e.party&&e.party.forEach((p,_)=>{if(p.mesh){const g=-3-_*1.5,m=2-_*.5;p.mesh.position.set(g,0,m),p.mesh.lookAt(0,p.mesh.position.y,0),t.add(p.mesh),c.push(new I(g,1,m))}}),e.enemies&&e.enemies.forEach((p,_)=>{if(p.mesh){const g=3+_*1.5,m=2-_*.5;p.mesh.position.set(g,0,m),p.mesh.lookAt(0,p.mesh.position.y,0),t.add(p.mesh),c.push(new I(g,1,m))}}),this.cameraController.setBattleCombatants(c)}_setupMenuScene(e){const t=this.scenes.menu;for(;t.children.length>0;)t.remove(t.children[0]);const n=new C(new _t(100,100),new ki({color:1710638}));n.position.z=-10,t.add(n),t.fog=new ri(1710638,.05)}getScene(){return this.transitioning?this.scenes[this.transitionFromState]||this.scenes[this.currentState]:this.scenes[this.currentState]}getCamera(){return this.cameraController.camera}update(e){if(this.transitioning){this.transitionT+=e/this.transitionDuration;const t=Sn(this.transitionT,0,1);t<.5?this.overlayMaterial.opacity=Ia(0,1,t*2):(this.overlayMaterial.opacity=Ia(1,0,(t-.5)*2),t>=.5&&this.currentState!==this.transitionToState&&this._completeTransition()),t>=1&&(this.transitioning=!1,this.overlayMaterial.opacity=0)}}render(){this.renderer.render(this.getScene(),this.getCamera()),this.overlayMaterial.opacity>0&&(this.renderer.autoClear=!1,this.renderer.render(this.overlayScene,this.overlayCamera),this.renderer.autoClear=!0)}}const So={confirm:["Enter","Space"],cancel:["Escape"],menu:["Escape"],sprint:["ShiftLeft","ShiftRight"],camera_left:["KeyQ"],camera_right:["KeyE"],party_1:["Digit1"],party_2:["Digit2"],party_3:["Digit3"],party_4:["Digit4"]},Am={confirm:0,cancel:1,menu:9,camera_left:4,camera_right:5},Eo=new Set(["KeyW","ArrowUp"]),To=new Set(["KeyS","ArrowDown"]),Ao=new Set(["KeyA","ArrowLeft"]),Co=new Set(["KeyD","ArrowRight"]),pa=.15;function Ro(a){return Math.abs(a)<pa?0:Math.sign(a)*(Math.abs(a)-pa)/(1-pa)}class Cm{constructor(){this._pressed=new Set,this._justPressed=new Set,this._justReleased=new Set,this._rawKeyDown=new Set,this._gpButtonWasDown=new Array(16).fill(!1),this._onKeyDown=e=>{this._isGameKey(e.code)&&e.preventDefault(),this._rawKeyDown.has(e.code)||this._rawKeyDown.add(e.code)},this._onKeyUp=e=>{this._rawKeyDown.delete(e.code),this._pressed.has(e.code)&&this._justReleased.add(e.code)},this._onBlur=()=>{for(const e of this._rawKeyDown)this._pressed.has(e)&&this._justReleased.add(e);this._rawKeyDown.clear()},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur)}update(){this._justPressed.clear(),this._justReleased.clear();for(const e of this._rawKeyDown)this._pressed.has(e)||(this._pressed.add(e),this._justPressed.add(e));for(const e of this._pressed)this._rawKeyDown.has(e)||this._justReleased.add(e);for(const e of this._justReleased)this._pressed.delete(e);this._pollGamepad()}isPressed(e){return this._pressed.has(e)}wasJustPressed(e){return this._justPressed.has(e)}wasJustReleased(e){return this._justReleased.has(e)}getAction(e){if(e==="sprint"){const i=So[e];if(i){for(const r of i)if(this.isPressed(r))return!0}const s=this._getActiveGamepad();return!!(s&&(s.buttons[10]&&s.buttons[10].pressed||s.buttons[7]&&s.buttons[7].value>.5))}const t=So[e];if(t){for(const i of t)if(this.wasJustPressed(i))return!0}const n=Am[e];if(n!==void 0){const i=this._getActiveGamepad();if(i&&i.buttons[n]&&this._gpJustPressed&&this._gpJustPressed.has(n))return!0}return!1}getMovementVector(){let e=0,t=0;this._anyPressed(Eo)&&(t-=1),this._anyPressed(To)&&(t+=1),this._anyPressed(Ao)&&(e-=1),this._anyPressed(Co)&&(e+=1);const n=this._getActiveGamepad();if(n){const s=n.axes[0]||0,r=n.axes[1]||0,o=Ro(s),l=Ro(r);e+=o,t+=l}const i=Math.hypot(e,t);return i>1&&(e/=i,t/=i),{x:e,z:t}}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),this._pressed.clear(),this._justPressed.clear(),this._justReleased.clear(),this._rawKeyDown.clear(),this._gpButtonWasDown.fill(!1)}_anyPressed(e){for(const t of e)if(this._pressed.has(t))return!0;return!1}_isGameKey(e){return Eo.has(e)||To.has(e)||Ao.has(e)||Co.has(e)||e==="Enter"||e==="Space"||e==="Escape"||e==="KeyQ"||e==="KeyE"||e==="Digit1"||e==="Digit2"||e==="Digit3"||e==="Digit4"||e==="ShiftLeft"||e==="ShiftRight"}_getActiveGamepad(){if(!navigator.getGamepads)return null;const e=navigator.getGamepads();if(!e)return null;for(let t=0;t<e.length;t++)if(e[t]&&e[t].connected)return e[t];return null}_pollGamepad(){this._gpJustPressed=new Set;const e=this._getActiveGamepad();if(!e){this._gpButtonWasDown.fill(!1);return}for(let t=0;t<e.buttons.length;t++){const n=e.buttons[t]?e.buttons[t].pressed:!1,i=this._gpButtonWasDown[t];n&&!i&&this._gpJustPressed.add(t),this._gpButtonWasDown[t]=n}}}class Rm{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.masterVolume=1,this.musicVolume=.5,this.sfxVolume=.7,this.currentMusic=null,this.musicSchedulerId=null,this.regionConfig={fry_valley:{tempo:400,wave:"triangle",scale:"majorPentatonic",root:261.63},burger_highlands:{tempo:360,wave:"square",scale:"minorPentatonic",root:293.66},mcflurry_tundra:{tempo:500,wave:"sine",scale:"majorPentatonic",root:220},happy_meal_forest:{tempo:380,wave:"triangle",scale:"majorPentatonic",root:246.94},drive_thru_desert:{tempo:340,wave:"sawtooth",scale:"minorPentatonic",root:311.13},mccafe_springs:{tempo:450,wave:"sine",scale:"majorPentatonic",root:277.18},play_place_plains:{tempo:320,wave:"square",scale:"majorPentatonic",root:329.63},golden_arches_castle:{tempo:280,wave:"sawtooth",scale:"minorPentatonic",root:196}},this.typeConfig={overworld:{tempoMul:1,waveOverride:null},battle:{tempoMul:.55,waveOverride:"sawtooth"},town:{tempoMul:1.3,waveOverride:"sine"},dungeon:{tempoMul:.75,waveOverride:"square"}},this.scales={majorPentatonic:[0,2,4,7,9,12,14,16,19,21],minorPentatonic:[0,3,5,7,10,12,15,17,19,22]}}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;if(!e){console.warn("[AudioSystem] Web Audio API not supported");return}this.ctx=new e,this.masterGain=this.ctx.createGain(),this.musicGain=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.masterGain.gain.value=this.masterVolume,this.musicGain.gain.value=this.musicVolume,this.sfxGain.gain.value=this.sfxVolume}_ensureRunning(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.masterGain&&!this.muted&&(this.masterGain.gain.value=this.masterVolume)}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&(this.musicGain.gain.value=this.musicVolume)}setSFXVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxGain&&(this.sfxGain.gain.value=this.sfxVolume)}mute(){this.muted=!0,this.masterGain&&(this.masterGain.gain.value=0)}unmute(){this.muted=!1,this.masterGain&&(this.masterGain.gain.value=this.masterVolume)}playMusic(e,t){if(this._ensureRunning(),!this.ctx)return;this.stopMusic();const n=this.regionConfig[t]||this.regionConfig.fry_valley,i=this.typeConfig[e]||this.typeConfig.overworld,s=n.tempo*(i.tempoMul||1),r=i.waveOverride||n.wave,o=this.scales[n.scale]||this.scales.majorPentatonic,l=n.root;let c=0;const d=[l/2,l/2,l*1.5,l/2],f=()=>{if(!this.ctx||!this.currentMusic)return;const p=this.ctx.currentTime,_=o[c%o.length],g=l*Math.pow(2,_/12);let m=!0;if(e==="town"&&c%4===3&&(m=!1),e==="dungeon"&&c%5===4&&(m=!1),m&&this._playNote(g,r,p,s/1e3*.9,.15,this.musicGain),c%2===0){const u=d[c/2%d.length];this._playNote(u,"triangle",p,s/1e3*1.8,.12,this.musicGain)}e==="battle"&&c%2===0&&this._playPercussion(p,.1),c++};f();const h=setInterval(f,s);this.currentMusic={type:e,regionId:t,intervalId:h,stopFn:()=>{clearInterval(h)}}}stopMusic(){this.currentMusic&&(this.currentMusic.stopFn(),this.currentMusic=null)}playSFX(e){if(this._ensureRunning(),!this.ctx)return;const t=this.ctx.currentTime,n=this.sfxGain;switch(e){case"blip":this._playNote(880,"square",t,.05,.15,n);break;case"select":this._playNote(660,"square",t,.06,.15,n),this._playNote(990,"square",t+.06,.06,.15,n);break;case"confirm":this._playNote(523.25,"square",t,.05,.15,n),this._playNote(659.25,"square",t+.05,.05,.15,n),this._playNote(783.99,"square",t+.1,.08,.15,n);break;case"cancel":this._playNote(440,"square",t,.06,.15,n),this._playNote(330,"square",t+.06,.08,.15,n);break;case"cursor":this._playNote(1200,"square",t,.02,.08,n);break;case"fire":{const i=this._createNoiseBuffer(.3),s=this.ctx.createBufferSource();s.buffer=i;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2e3,t),r.frequency.exponentialRampToValueAtTime(200,t+.3);const o=this.ctx.createGain();o.gain.setValueAtTime(.3,t),o.gain.exponentialRampToValueAtTime(.001,t+.3),s.connect(r),r.connect(o),o.connect(n),s.start(t),s.stop(t+.3);break}case"ice":{const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(2e3,t),i.frequency.exponentialRampToValueAtTime(600,t+.4);const s=this.ctx.createGain();s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),i.connect(s),s.connect(n),i.start(t),i.stop(t+.4);const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(3e3,t),r.frequency.exponentialRampToValueAtTime(1200,t+.3);const o=this.ctx.createGain();o.gain.setValueAtTime(.1,t),o.gain.exponentialRampToValueAtTime(.001,t+.3),r.connect(o),o.connect(n),r.start(t),r.stop(t+.3);break}case"heal":{[392,523.25,659.25].forEach((o,l)=>{this._playNote(o,"sine",t+l*.1,.25,.15,n)});const s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(1046.5,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.05,t),r.gain.exponentialRampToValueAtTime(.001,t+.5),s.connect(r),r.connect(n),s.start(t),s.stop(t+.5);break}case"hit":this._playPercussion(t,.15),this._playNote(150,"sawtooth",t,.08,.2,n);break;case"slash":{const i=this._createNoiseBuffer(.15),s=this.ctx.createBufferSource();s.buffer=i;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.setValueAtTime(800,t),r.frequency.exponentialRampToValueAtTime(3e3,t+.15);const o=this.ctx.createGain();o.gain.setValueAtTime(.25,t),o.gain.exponentialRampToValueAtTime(.001,t+.15),s.connect(r),r.connect(o),o.connect(n),s.start(t),s.stop(t+.15);break}case"levelup":{[523.25,659.25,783.99,1046.5,1318.51].forEach((s,r)=>{this._playNote(s,"square",t+r*.08,.12,.15,n)});break}case"save":{this._playNote(880,"sine",t,.15,.12,n),this._playNote(1108.73,"sine",t+.1,.2,.12,n);break}case"error":{const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(200,t),i.frequency.linearRampToValueAtTime(100,t+.2);const s=this.ctx.createGain();s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(n),i.start(t),i.stop(t+.2);break}default:console.warn(`[AudioSystem] Unknown SFX type: ${e}`)}}playVictory(){if(this._ensureRunning(),!this.ctx)return;const e=this.ctx.currentTime,t=this.sfxGain;[{f:523.25,t:0},{f:659.25,t:.12},{f:783.99,t:.24},{f:1046.5,t:.36},{f:659.25,t:.48},{f:783.99,t:.6},{f:1046.5,t:.72},{f:1318.51,t:.84}].forEach(({f:i,t:s})=>{this._playNote(i,"square",e+s,.18,.18,t)}),[523.25,659.25,783.99].forEach(i=>{this._playNote(i,"triangle",e+1,.6,.12,t)})}playDefeat(){if(this._ensureRunning(),!this.ctx)return;const e=this.ctx.currentTime,t=this.sfxGain;[{f:440,t:0,dur:.3},{f:392,t:.3,dur:.3},{f:349.23,t:.6,dur:.3},{f:293.66,t:.9,dur:.3},{f:261.63,t:1.2,dur:.5},{f:196,t:1.7,dur:.8}].forEach(({f:i,t:s,dur:r})=>{this._playNote(i,"sawtooth",e+s,r,.15,t)})}_playNote(e,t,n,i,s,r){if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=t,o.frequency.value=e;const c=.01,d=Math.min(.05,i*.3),f=n+c,h=s*.7,p=n+i-d;l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(s,f),l.gain.linearRampToValueAtTime(h,f+.03),l.gain.setValueAtTime(h,p),l.gain.exponentialRampToValueAtTime(.001,n+i),o.connect(l),l.connect(r||this.masterGain),o.start(n),o.stop(n+i+.05)}_playPercussion(e,t){if(!this.ctx)return;const n=this._createNoiseBuffer(.1),i=this.ctx.createBufferSource();i.buffer=n;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=200,s.Q.value=2;const r=this.ctx.createGain();r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(.001,e+.1),i.connect(s),s.connect(r),r.connect(this.sfxGain),i.start(e),i.stop(e+.1)}_createNoiseBuffer(e){const t=this.ctx.sampleRate,n=this.ctx.createBuffer(1,Math.floor(t*e),t),i=n.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return n}}const Pm="mcchronicles_save_",Na="mcchronicles_autosave",fa=5,Lm=1;function jt(a){return a==="auto"?Na:`${Pm}${a}`}function ma(a){return a==="auto"?"Auto-Save":`Slot ${Number(a)+1}`}class Im{constructor(){}save(e,t){try{const n=jt(e),i=Date.now(),s={version:Lm,timestamp:i,name:ma(e),playtime:t.playtime||0,data:t},r=JSON.stringify(s);return localStorage.setItem(n,r),!0}catch(n){return console.error("[SaveSystem] Save failed:",n),!1}}load(e){try{const t=jt(e),n=localStorage.getItem(t);if(!n)return null;const i=JSON.parse(n);return i.version!==void 0&&i.data!==void 0?i.data:i}catch(t){return console.error("[SaveSystem] Load failed:",t),null}}deleteSave(e){try{const t=jt(e);return localStorage.removeItem(t),!0}catch(t){return console.error("[SaveSystem] Delete failed:",t),!1}}hasSave(e){const t=jt(e);return localStorage.getItem(t)!==null}getSaveInfo(e){const t=jt(e),n=localStorage.getItem(t),i={slot:e,exists:!1,name:ma(e),playtime:0,partyLevel:0,region:"",timestamp:0};if(!n)return i;try{const s=JSON.parse(n);if(s.version!==void 0&&s.data!==void 0){i.exists=!0,i.playtime=s.playtime||0,i.timestamp=s.timestamp||0,i.name=s.name||ma(e);const r=s.data;if(r.party&&Array.isArray(r.party)&&r.party.length>0){const o=r.party.reduce((l,c)=>l+(c.level||1),0);i.partyLevel=Math.floor(o/r.party.length)}return r.currentRegion&&(i.region=typeof r.currentRegion=="string"?r.currentRegion:r.currentRegion.name||r.currentRegion.id||""),i}if(i.exists=!0,i.playtime=s.playtime||0,i.timestamp=s.timestamp||0,s.party&&Array.isArray(s.party)&&s.party.length>0){const r=s.party.reduce((o,l)=>o+(l.level||1),0);i.partyLevel=Math.floor(r/s.party.length)}return s.currentRegion&&(i.region=typeof s.currentRegion=="string"?s.currentRegion:s.currentRegion.name||s.currentRegion.id||""),i}catch(s){return console.error("[SaveSystem] getSaveInfo parse error:",s),i}}listSaves(){const e=[];for(let t=0;t<fa;t++)e.push(this.getSaveInfo(t));return e}autoSave(e){return this.save("auto",e)}loadAutoSave(){return this.load("auto")}hasAutoSave(){return this.hasSave("auto")}deleteAutoSave(){return this.deleteSave("auto")}getSlotKey(e){return jt(e)}getTotalSaveSize(){let e=0;for(let n=0;n<fa;n++){const i=localStorage.getItem(jt(n));i&&(e+=i.length)}const t=localStorage.getItem(Na);return t&&(e+=t.length),e}clearAllSaves(){try{for(let e=0;e<fa;e++)localStorage.removeItem(jt(e));return localStorage.removeItem(Na),!0}catch(e){return console.error("[SaveSystem] clearAllSaves failed:",e),!1}}exportSave(e){return localStorage.getItem(jt(e))||null}importSave(e,t){try{return JSON.parse(t),localStorage.setItem(jt(e),t),!0}catch(n){return console.error("[SaveSystem] importSave failed:",n),!1}}}const ni={game_start:{id:"game_start",backdrop:"/backdrops/game_start.png",dialogue:[{speaker:"Narrator",text:"In a world where burgers are life and fries are freedom..."},{speaker:"Narrator",text:"A darkness fell upon the McWorld."},{speaker:"Narrator",text:"The Hamburglar, once a petty thief, seized the Golden Arches..."},{speaker:"Narrator",text:"And stole every burger in the land."},{speaker:"Narrator",text:"Only a band of brave mascots could restore order."},{speaker:"Narrator",text:"This... is their story."}],after:"fry_valley_intro"},fry_valley_intro:{id:"fry_valley_intro",backdrop:"/backdrops/fry_valley_intro.png",dialogue:[{speaker:"Ronald",text:"Ah, Fry Valley! Home sweet home."},{speaker:"Grimace",text:"It's so peaceful here. Or... it used to be."},{speaker:"Birdie",text:"Look! Nuggets! They seem... different."},{speaker:"Ronald",text:"Don't worry, friends. Whatever's happening, we'll figure it out."},{speaker:"Ronald",text:"Let's talk to the locals and see what's going on."}]},burger_highlands_intro:{id:"burger_highlands_intro",backdrop:"/backdrops/burger_highlands_intro.png",dialogue:[{speaker:"Grimace",text:"The mountains are so steep! My legs are tired."},{speaker:"Birdie",text:"I can fly over them! ...Oh wait, I can't actually fly in this game."},{speaker:"Ronald",text:"Stay focused. The Hamburglar's lieutenant is supposed to be here."},{speaker:"Ronald",text:"And I heard Officer Big Mac is patrolling these peaks!"}]},meet_officer_big_mac:{id:"meet_officer_big_mac",backdrop:"/backdrops/meet_officer_big_mac.png",dialogue:[{speaker:"Officer Big Mac",text:"Halt! Who goes there?"},{speaker:"Ronald",text:"Officer! It's me, Ronald. We're here to stop the Hamburglar."},{speaker:"Officer Big Mac",text:"Ronald McDonald? By the golden arches, it's really you!"},{speaker:"Officer Big Mac",text:"I've been fighting these burger bandits for weeks."},{speaker:"Officer Big Mac",text:"The Hamburglar has lieutenants everywhere. They're organized!"},{speaker:"Ronald",text:"We could use your strength, Officer. Will you join us?"},{speaker:"Officer Big Mac",text:"It would be an honor! Justice must be served... with fries!"}],unlocks:["bigmac"]},mcflurry_tundra_intro:{id:"mcflurry_tundra_intro",backdrop:"/backdrops/mcflurry_tundra_intro.png",dialogue:[{speaker:"Birdie",text:"Brrr! It's freezing! My feathers are icing up!"},{speaker:"Grimace",text:"I'm so cold I think I'm turning blue... er, bluer."},{speaker:"Ronald",text:"The McFlurry Elementals are powerful here. We need to be careful."},{speaker:"Officer Big Mac",text:"I sense dark magic. Someone is controlling the ice."}]},meet_mac_tonight:{id:"meet_mac_tonight",backdrop:"/backdrops/meet_mac_tonight.png",dialogue:[{speaker:"Mac Tonight",text:"♪ Underneath the moonlight... ♪ Oh, hello there!"},{speaker:"Ronald",text:"Mac Tonight! The famous moon bard! What are you doing out here?"},{speaker:"Mac Tonight",text:"I was performing at the ice palace, but the Hamburglar's goons crashed my gig."},{speaker:"Mac Tonight",text:'They said my music was "too cool." Can you imagine?'},{speaker:"Ronald",text:"We could really use your musical talents. Will you join us?"},{speaker:"Mac Tonight",text:"Anything for a chance to perform again. Let's jam!"}],unlocks:["mactonight"]},happy_meal_forest_intro:{id:"happy_meal_forest_intro",backdrop:"/backdrops/happy_meal_forest_intro.png",dialogue:[{speaker:"Birdie",text:"The Happy Meal Forest! I love it here. So many toys!"},{speaker:"Ronald",text:"Something's wrong. The trees look... darker than usual."},{speaker:"Grimace",text:"I hear something in the bushes. Is it... a dragon?"},{speaker:"Ronald",text:"Stay on guard. The Hamburglar's influence reaches everywhere."}]},drive_thru_desert_intro:{id:"drive_thru_desert_intro",backdrop:"/backdrops/drive_thru_desert_intro.png",dialogue:[{speaker:"Grimace",text:"So... much... sand. Can we get a McFlurry?"},{speaker:"Birdie",text:"Look! There's a Drive-Thru in the middle of nowhere!"},{speaker:"Ronald",text:"The Condiment King is supposed to be out here. Stay sharp."},{speaker:"Officer Big Mac",text:"I've been waiting for this. Let's serve justice — extra crispy!"}]},mccafe_springs_intro:{id:"mccafe_springs_intro",backdrop:"/backdrops/mccafe_springs_intro.png",dialogue:[{speaker:"Ronald",text:"McCafe Springs! The hub of the McWorld."},{speaker:"Ronald",text:"We can rest, shop, and save our progress here."},{speaker:"Mac Tonight",text:"I could use a warm coffee after that tundra!"}]},play_place_plains_intro:{id:"play_place_plains_intro",backdrop:"/backdrops/play_place_plains_intro.png",dialogue:[{speaker:"Birdie",text:"The PlayPlace! I always wanted to explore one of these!"},{speaker:"Grimace",text:"It's... a lot bigger from the inside."},{speaker:"Ronald",text:"This labyrinth leads to the Golden Arches Castle. We're close!"},{speaker:"Officer Big Mac",text:"The final stretch. Everyone, stay sharp. We end this now."}]},golden_arches_castle_intro:{id:"golden_arches_castle_intro",backdrop:"/backdrops/golden_arches_castle_intro.png",dialogue:[{speaker:"Ronald",text:"The Golden Arches Castle. The Hamburglar's fortress."},{speaker:"Grimace",text:"He has so many stolen burgers in there..."},{speaker:"Birdie",text:"It's now or never!"},{speaker:"Officer Big Mac",text:"For justice! For burgers! For the McWorld!"},{speaker:"Mac Tonight",text:"Let's give them one final performance to remember."}]},final_boss:{id:"final_boss",backdrop:"/backdrops/final_boss.png",dialogue:[{speaker:"Hamburglar",text:"Robble robble! You've made it this far, have you?"},{speaker:"Ronald",text:"Hamburglar! Return the burgers you've stolen!"},{speaker:"Hamburglar",text:"Why should I? I took them fair and square!"},{speaker:"Officer Big Mac",text:"Theft is not fair, criminal!"},{speaker:"Hamburglar",text:"You don't understand. I was always the villain."},{speaker:"Hamburglar",text:"Everyone loved Ronald, Grimace, and Birdie. But me?"},{speaker:"Hamburglar",text:"I was always the one who stole. The one who was chased."},{speaker:"Hamburglar",text:"So I decided... if they call me a thief, I'll be the BEST thief!"},{speaker:"Ronald",text:"It doesn't have to be this way. We can be friends."},{speaker:"Hamburglar",text:"...Robble. You always say that. But this time..."},{speaker:"Hamburglar",text:"This time I have my most powerful lieutenants!"},{speaker:"Hamburglar",text:"Defeat them all, and I'll fight you myself!"}]},victory:{id:"victory",backdrop:"/backdrops/victory.png",dialogue:[{speaker:"Hamburglar",text:"You... you beat me. Fair and square."},{speaker:"Ronald",text:"It's over, Hamburglar. Let's go home."},{speaker:"Hamburglar",text:"...Can I have a Happy Meal?"},{speaker:"Ronald",text:"...Of course you can. You always could."},{speaker:"Narrator",text:"And so, the McDonald's heroes saved the McWorld."},{speaker:"Narrator",text:"The burgers were returned. The arches shone golden once more."},{speaker:"Narrator",text:"And the Hamburglar? He got his Happy Meal."},{speaker:"Narrator",text:"THE END."}]},nemesis_defeated:{id:"nemesis_defeated",dialogue:[{speaker:"Narrator",text:"A Hamburglar lieutenant has been defeated!"}]},nemesis_escaped:{id:"nemesis_escaped",dialogue:[{speaker:"Narrator",text:"The lieutenant escaped! They will return stronger..."}]},nemesis_promoted:{id:"nemesis_promoted",dialogue:[{speaker:"Narrator",text:"A lieutenant has been promoted! The hierarchy shifts."}]}},ga=[{id:"lost_child_quest",name:"The Lost Child",giver:"Lost Child",region:"happy_meal_forest",description:"A child got lost in the Happy Meal Forest. Help them reach McCafe Springs.",objective:"Escort the lost child to McCafe Springs",reward:{gold:100,items:["happy_meal_charm"]}},{id:"condiment_king_bounty",name:"Condiment King Bounty",giver:"Quest Giver",region:"mccafe_springs",description:"The Condiment King is terrorizing the Drive-Thru Desert. Defeat him!",objective:"Defeat The Condiment King in Drive-Thru Desert",reward:{gold:500,items:["big_mac_armor"]}},{id:"nugget_extermination",name:"Nugget Extermination",giver:"Old Fry Farmer",region:"fry_valley",description:"The McNugget Goblins are ruining the crops. Defeat 10 of them.",objective:"Defeat 10 McNugget Goblins in Fry Valley",reward:{gold:80,items:["mc_flurry_potion","mc_flurry_potion"]}},{id:"ice_palace_concert",name:"Ice Palace Concert",giver:"Frozen Fry Kid",region:"mcflurry_tundra",description:"Mac Tonight's concert was interrupted. Clear the ice palace of enemies.",objective:"Defeat 15 enemies in McFlurry Tundra",reward:{gold:200,items:["arch_deluxe"]}},{id:"tube_guardian_challenge",name:"The Tube Guardian's Challenge",giver:"Tube Guardian",region:"play_place_plains",description:"The Tube Guardian challenges you. Defeat 5 elite monsters in the labyrinth.",objective:"Defeat 5 elite monsters in PlayPlace Plains",reward:{gold:400,items:["golden_arch_charm"]}},{id:"familiar_collector",name:"Familiar Collector",giver:"Familiar Keeper",region:"mccafe_springs",description:"Collect 5 different Fry Kid familiars from across the McWorld.",objective:"Collect 5 unique familiars",reward:{gold:300,items:["golden_arch_charm"]}},{id:"highland_patrol",name:"Highland Patrol",giver:"Highland Guard",region:"burger_highlands",description:"Patrol the highlands and defeat 8 enemies to secure the mountain pass.",objective:"Defeat 8 enemies in Burger Highlands",reward:{gold:150,items:["arch_armor"]}},{id:"desert_explorer",name:"Desert Explorer",giver:"Sand Surfer",region:"drive_thru_desert",description:"Find all 3 treasure chests in the Drive-Thru Desert.",objective:"Find all treasures in Drive-Thru Desert",reward:{gold:250,items:["big_mc_flurry","big_mc_flurry"]}},{id:"master_chef",name:"The Master Chef",giver:"Shopkeeper",region:"mccafe_springs",description:"Bring the shopkeeper 5 cheese scraps and 3 patty fragments for a special recipe.",objective:"Collect 5 cheese scraps and 3 patty fragments",reward:{gold:200,items:["arch_deluxe","arch_deluxe"]}},{id:"toy_retrieval",name:"Toy Retrieval",giver:"Forest Toy Maker",region:"happy_meal_forest",description:"The Hamburglar stole 10 Happy Meal toys. Find them by defeating forest enemies.",objective:"Defeat 10 enemies in Happy Meal Forest",reward:{gold:180,items:["fry_kid_whistle"]}}];class Po{constructor(){this.activeQuests=[],this.completedQuests=[],this.availableQuests=[],this.storyProgress=[],this._initialized=!1}init(){this._initialized||(ga&&Array.isArray(ga)&&(this.availableQuests=ga.map(e=>({...e}))),this._initialized=!0)}acceptQuest(e){const t=this.availableQuests.find(n=>n.id===e);return t?(this.availableQuests=this.availableQuests.filter(n=>n.id!==e),this.activeQuests.push({questId:t.id,progress:0,objective:t.objective,name:t.name,region:t.region,giver:t.giver,description:t.description,reward:t.reward}),!0):!1}updateProgress(e,t){const n=this.activeQuests.find(i=>i.questId===e);return n?(n.progress=t,!0):!1}completeQuest(e){const t=this.activeQuests.find(n=>n.questId===e);return t?(this.activeQuests=this.activeQuests.filter(n=>n.questId!==e),this.completedQuests.push(e),t.reward||{gold:0,items:[]}):null}isQuestActive(e){return this.activeQuests.some(t=>t.questId===e)}isQuestCompleted(e){return this.completedQuests.includes(e)}getActiveQuests(){return this.activeQuests}getAvailableQuests(){return this.availableQuests}getCompletedQuests(){return this.completedQuests}seeStoryBeat(e){return this.storyProgress.includes(e)?!1:(this.storyProgress.push(e),!0)}hasSeenBeat(e){return this.storyProgress.includes(e)}toData(){return{activeQuests:this.activeQuests.map(e=>({...e})),completedQuests:[...this.completedQuests],availableQuests:this.availableQuests.map(e=>({...e})),storyProgress:[...this.storyProgress]}}fromData(e){e&&(this.activeQuests=(e.activeQuests||[]).map(t=>({...t})),this.completedQuests=[...e.completedQuests||[]],this.availableQuests=(e.availableQuests||[]).map(t=>({...t})),this.storyProgress=[...e.storyProgress||[]],this._initialized=!0)}}const Lo=[1,5,10,15,20,25,30,40,50];class km{constructor(){}addXP(e,t){const n=e.level;e.xp=(e.xp||0)+t;const i=ka(e.xp),s=i-n,r=s>0;let o=[];if(r){for(let c=n+1;c<=i;c++)e.level=c,this.applyLevelUpStats(e);const l=e.id||e.key||e.name;for(let c=n+1;c<=i;c++){const d=this.getUnlockedAbilities(l,c);o.push(...d)}}return{leveledUp:r,newLevel:i,gainedLevels:Math.max(0,s),unlockedAbilities:o}}levelUp(e){return e.level=(e.level||1)+1,this.applyLevelUpStats(e),e}getXPToNext(e){const t=Ri(e);return Ri(e+1)-t}getUnlockedAbilities(e,t){if(!Lo.includes(t))return[];const n=Ni[e];if(!n||!n.abilityTree)return[];const i=[];for(const s of n.abilityTree)s.level===t&&i.push(s.ability);return i}getAllUnlockedAbilities(e,t){const n=Ni[e];if(!n||!n.abilityTree)return[];const i=[];for(const s of n.abilityTree)s.level<=t&&Lo.includes(s.level)&&i.push(s.ability);return i}applyLevelUpStats(e){const t=e.baseStats||{},n=e.growth||{},s=(e.level||1)-1,r=["hp","mp","atk","def","agi","mag"];e.stats||(e.stats={});for(const o of r){const l=t[o]||0,c=n[o]||0;e.stats["max"+o.charAt(0).toUpperCase()+o.slice(1)]=l+c*s;const d=o,f="max"+o.charAt(0).toUpperCase()+o.slice(1);(e.stats[d]===void 0||e.stats[d]>e.stats[f])&&(e.stats[d]=e.stats[f])}return e.stats.maxHp!==void 0&&(e.stats.hp===void 0||e.stats.hp>e.stats.maxHp)&&(e.stats.hp=e.stats.maxHp),e.stats.maxMp!==void 0&&(e.stats.mp===void 0||e.stats.mp>e.stats.maxMp)&&(e.stats.mp=e.stats.maxMp),e}initCharacterStats(e){return e.level=e.level||1,e.xp=e.xp||0,this.applyLevelUpStats(e),e}getLevelFromXP(e){return ka(e)}getXPForLevel(e){return Ri(e)}}class Dm{constructor(){this.tweens=[]}add(e){return this.tweens.push(e),e}update(e){this.tweens=this.tweens.filter(t=>!t.update(e))}clear(){this.tweens=[]}}const Io={fry_valley:["burger_highlands","happy_meal_forest"],burger_highlands:["fry_valley","mcflurry_tundra"],mcflurry_tundra:["burger_highlands","mccafe_springs"],happy_meal_forest:["fry_valley","drive_thru_desert"],drive_thru_desert:["happy_meal_forest","mccafe_springs","play_place_plains"],mccafe_springs:["mcflurry_tundra","drive_thru_desert","play_place_plains"],play_place_plains:["drive_thru_desert","mccafe_springs","golden_arches_castle"],golden_arches_castle:["play_place_plains"]},_a={fry_valley:{id:"fry_valley",name:"Fry Valley",subtitle:"The Golden Grasslands",description:"Rolling hills of golden fry grass where every adventurer begins their journey.",color:16766720,groundColor:15120384,fogColor:16772778,fogDensity:.015,ambientColor:16775388,lightColor:16777215,skyTop:8965375,skyBottom:16768392,encounterRate:.08,encounterZone:"fry_valley",recommendedLevel:[1,8],isHub:!1,isDungeon:!1,npcs:[{name:"Old Fry Farmer",x:20,z:15,dialogue:["Welcome to Fry Valley, young adventurer!","The golden grass here grows from the fries of old.","Beware the Nugget Goblins — they come in packs!","If you seek the Hamburglar, head north to the Burger Highlands."]},{name:"Ketchup Merchant",x:-15,z:-10,dialogue:["Ketchup for sale! Fresh and red!","A pinch of ketchup can heal the mightiest warrior.","You seem strong. Be careful out there!"]}],treasures:[{x:30,z:-20,item:"mc_flurry_potion"},{x:-25,z:25,item:"ketchup_packet"},{x:0,z:-35,item:"happy_meal_box"}],storyEvents:[{trigger:"enter",event:"fry_valley_intro"},{trigger:"location",x:0,z:-40,radius:5,event:"fry_valley_exit"}],bossNemesis:"fry_valley_boss",size:80,decorations:{trees:15,rocks:10,structures:2}},burger_highlands:{id:"burger_highlands",name:"Burger Highlands",subtitle:"The Stacked Peaks",description:"Mountainous terrain where the patties grow tall and the winds are fierce.",color:9127187,groundColor:7029795,fogColor:11184827,fogDensity:.02,ambientColor:14535867,lightColor:16772829,skyTop:6719658,skyBottom:14531481,encounterRate:.1,encounterZone:"burger_highlands",recommendedLevel:[8,15],isHub:!1,isDungeon:!1,npcs:[{name:"Highland Guard",x:15,z:20,dialogue:["The Highlands are dangerous. Are you prepared?","Officer Big Mac was seen patroling the eastern ridge.","Hamburglar's lieutenant has taken over the mountain pass!"]},{name:"Wandering Monk",x:-30,z:-15,dialogue:["I sense a great darkness in these mountains.","The Hamburglar has been stealing burgers across the land.","You must gather all the heroes. Only together can you stop him."]}],treasures:[{x:40,z:-30,item:"big_mc_flurry"},{x:-35,z:35,item:"arch_armor"},{x:20,z:-45,item:"happy_meal_charm"}],storyEvents:[{trigger:"enter",event:"burger_highlands_intro"},{trigger:"location",x:45,z:0,radius:5,event:"meet_officer_big_mac"}],bossNemesis:"burger_highlands_boss",size:100,decorations:{trees:8,rocks:25,structures:3}},mcflurry_tundra:{id:"mcflurry_tundra",name:"McFlurry Tundra",subtitle:"The Frozen Delight",description:"An icy wasteland where McFlurries swirl eternally and frost coats everything.",color:8965375,groundColor:11197951,fogColor:14544639,fogDensity:.025,ambientColor:14544639,lightColor:16777215,skyTop:4491468,skyBottom:14544639,encounterRate:.1,encounterZone:"mcflurry_tundra",recommendedLevel:[15,22],isHub:!1,isDungeon:!1,npcs:[{name:"Frozen Fry Kid",x:20,z:-20,dialogue:["S-so c-cold! The McFlurry Elementals are relentless!","Mac Tonight was seen performing at the ice palace.","If you can defeat the ice lieutenant, the tundra will thaw."]},{name:"Ice Fisherman",x:-20,z:25,dialogue:["I fish for Filet-O-Fish in the frozen lakes.","The Sirens here will freeze you solid if you're not careful.","Bring fire magic. It's your best friend here."]}],treasures:[{x:35,z:30,item:"arch_deluxe"},{x:-40,z:-30,item:"grimace_hide"},{x:0,z:50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"mcflurry_tundra_intro"},{trigger:"location",x:0,z:55,radius:5,event:"meet_mac_tonight"}],bossNemesis:"mcflurry_tundra_boss",size:100,decorations:{trees:5,rocks:20,structures:4,ice:!0}},happy_meal_forest:{id:"happy_meal_forest",name:"Happy Meal Forest",subtitle:"The Toy-Laden Woods",description:"A dense forest where Happy Meal toys hang from every tree and mystery lurks in shadows.",color:2263842,groundColor:3038510,fogColor:8956552,fogDensity:.03,ambientColor:10075033,lightColor:14548957,skyTop:4486980,skyBottom:10074999,encounterRate:.12,encounterZone:"happy_meal_forest",recommendedLevel:[10,18],isHub:!1,isDungeon:!1,npcs:[{name:"Forest Toy Maker",x:25,z:20,dialogue:["I craft toys for every Happy Meal!","But the Hamburglar has been stealing them all...","There's a dragon deep in the forest. It bakes apple pies!"]},{name:"Lost Child",x:-20,z:-25,dialogue:["I got separated from my parents at the PlayPlace...","Can you help me find my way to McCafe Springs?","The forest is scary at night!"]}],treasures:[{x:40,z:-35,item:"fry_wand"},{x:-35,z:40,item:"fry_kid_whistle"},{x:0,z:-50,item:"happy_meal_map"}],storyEvents:[{trigger:"enter",event:"happy_meal_forest_intro"}],bossNemesis:"happy_meal_forest_boss",size:90,decorations:{trees:40,rocks:5,structures:2,denseForest:!0}},drive_thru_desert:{id:"drive_thru_desert",name:"Drive-Thru Desert",subtitle:"The Endless Order",description:"A vast desert where the Drive-Thru never closes and the heat shimmers with mirages.",color:15123046,groundColor:13936721,fogColor:15783560,fogDensity:.012,ambientColor:16772795,lightColor:16777164,skyTop:13408597,skyBottom:16768392,encounterRate:.09,encounterZone:"drive_thru_desert",recommendedLevel:[20,28],isHub:!1,isDungeon:!1,npcs:[{name:"Desert Drive-Thru Worker",x:30,z:10,dialogue:["Welcome to the Drive-Thru! Can I take your order?","The Condiment King has been terrorizing the desert.","Bring water... or McFlurry potions. You'll need them."]},{name:"Sand Surfer",x:-25,z:-30,dialogue:["I surf the dunes on a tray!","The Hotcake Sentinels guard the ancient ruins.","Beyond this desert lies the PlayPlace Plains. Be careful."]}],treasures:[{x:45,z:-40,item:"big_mac_armor"},{x:-45,z:35,item:"mc_shake_maul"},{x:10,z:50,item:"badge_of_order"}],storyEvents:[{trigger:"enter",event:"drive_thru_desert_intro"}],bossNemesis:"drive_thru_desert_boss",size:110,decorations:{trees:3,rocks:30,structures:5,cactus:!0}},mccafe_springs:{id:"mccafe_springs",name:"McCafe Springs",subtitle:"The Hub Town",description:"A cozy town built around warm McCafe springs. Rest, shop, and save here.",color:9136404,groundColor:7034384,fogColor:13417352,fogDensity:.008,ambientColor:16772812,lightColor:16777198,skyTop:8956620,skyBottom:16768426,encounterRate:0,encounterZone:null,recommendedLevel:[1,99],isHub:!0,isDungeon:!1,npcs:[{name:"Innkeeper",x:10,z:5,dialogue:["Welcome to the McCafe Inn! Rest here to fully heal.","That'll be 50 gold. Would you like to rest?"]},{name:"Shopkeeper",x:-10,z:10,dialogue:["Welcome to the McCafe Shop!","We have potions, armor, and charms for sale.","Stock up before heading out!"]},{name:"Save Point Attendant",x:0,z:-10,dialogue:["Welcome! You can save your adventure here.","Your progress will be preserved in the golden arches."]},{name:"Quest Giver",x:20,z:-15,dialogue:["I have quests for adventurous heroes!","Help the townsfolk and earn rewards.","Check the quest board for available tasks."]},{name:"Familiar Keeper",x:-20,z:-20,dialogue:["I take care of the Fry Kids!","Would you like to see your familiar collection?"]}],treasures:[{x:30,z:30,item:"golden_fry_key"}],storyEvents:[{trigger:"enter",event:"mccafe_springs_intro"}],bossNemesis:null,size:60,decorations:{trees:5,rocks:3,structures:12,town:!0},hasShop:!0,hasInn:!0,hasSavePoint:!0},play_place_plains:{id:"play_place_plains",name:"PlayPlace Plains",subtitle:"The Labyrinth of Tubes",description:"A massive labyrinth of colorful tubes and ball pits. Only the worthy can navigate it.",color:16729343,groundColor:6697830,fogColor:11167402,fogDensity:.035,ambientColor:10053273,lightColor:16755455,skyTop:4465220,skyBottom:11167402,encounterRate:.15,encounterZone:"play_place_plains",recommendedLevel:[28,38],isHub:!1,isDungeon:!0,npcs:[{name:"Lost PlayPlace Kid",x:20,z:15,dialogue:["I've been lost in these tubes for hours!","The labyrinth shifts and changes. Be careful!","I heard there's a golden key somewhere in here..."]},{name:"Tube Guardian",x:-15,z:-20,dialogue:["I guard the tubes. Only the worthy may pass.","Defeat my challenge and I'll open the path.","The Golden Arches Castle lies beyond."]}],treasures:[{x:40,z:40,item:"sesame_sword"},{x:-40,z:-40,item:"moon_mic"},{x:50,z:-50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"play_place_plains_intro"}],bossNemesis:"play_place_plains_boss",size:120,decorations:{trees:0,rocks:0,structures:20,labyrinth:!0}},golden_arches_castle:{id:"golden_arches_castle",name:"Golden Arches Castle",subtitle:"The Final Dungeon",description:"The Hamburglar's fortress. Two golden arches pierce the sky. This is the end.",color:16766720,groundColor:3355443,fogColor:2232610,fogDensity:.04,ambientColor:4465220,lightColor:16768426,skyTop:1114129,skyBottom:4465186,encounterRate:.18,encounterZone:"golden_arches_castle",recommendedLevel:[38,50],isHub:!1,isDungeon:!0,npcs:[{name:"Hamburglar's Prisoner",x:20,z:30,dialogue:["You've made it! The Hamburglar is just ahead!","He has the stolen burgers... millions of them!","Please, save our world from his greasy grasp!"]}],treasures:[{x:30,z:-30,item:"arch_deluxe"},{x:-30,z:30,item:"big_mac_armor"},{x:0,z:-50,item:"golden_arch_charm"}],storyEvents:[{trigger:"enter",event:"golden_arches_castle_intro"},{trigger:"location",x:0,z:-60,radius:5,event:"final_boss"}],bossNemesis:"hamburglar_final",size:80,decorations:{trees:0,rocks:10,structures:15,castle:!0}}},wi={mc_flurry_potion:{id:"mc_flurry_potion",name:"McFlurry Potion",type:"consumable",effect:"heal_hp",power:60,target:"ally",description:"A refreshing McFlurry that restores 60 HP.",price:50,stackable:!0},big_mc_flurry:{id:"big_mc_flurry",name:"Big McFlurry",type:"consumable",effect:"heal_hp",power:150,target:"ally",description:"A large McFlurry that restores 150 HP.",price:120,stackable:!0},mc_muffin:{id:"mc_muffin",name:"McMuffin",type:"consumable",effect:"heal_mp",power:30,target:"ally",description:"A warm McMuffin that restores 30 MP.",price:40,stackable:!0},happy_meal_box:{id:"happy_meal_box",name:"Happy Meal Box",type:"consumable",effect:"heal_both",power:80,target:"ally",description:"A full Happy Meal that restores 80 HP and 80 MP.",price:100,stackable:!0},egg_mcmuffin:{id:"egg_mcmuffin",name:"Egg McMuffin",type:"consumable",effect:"revive",power:.5,target:"ally",description:"Revives a fallen ally with 50% HP.",price:200,stackable:!0},arch_deluxe:{id:"arch_deluxe",name:"Arch Deluxe",type:"consumable",effect:"heal_both",power:200,target:"ally",description:"A gourmet burger that restores 200 HP and 200 MP.",price:300,stackable:!0},mc_rib_sauce:{id:"mc_rib_sauce",name:"McRib Sauce",type:"consumable",effect:"cure_status",power:0,target:"ally",description:"Cures all status ailments.",price:60,stackable:!0},sprite_bottle:{id:"sprite_bottle",name:"Sprite Bottle",type:"consumable",effect:"buff_agi",power:0,target:"ally",status:["agi_up"],description:"Boosts an ally's agility.",price:80,stackable:!0},arch_armor:{id:"arch_armor",name:"Arch Armor",type:"equipment",slot:"armor",statBoost:{def:15,hp:30},description:"Golden arches armor. Boosts DEF and HP.",price:500},big_mac_armor:{id:"big_mac_armor",name:"Big Mac Armor",type:"equipment",slot:"armor",statBoost:{def:25,hp:50,atk:10},description:"A legendary patty-stacked armor.",price:1500},fry_suit:{id:"fry_suit",name:"Fry Suit",type:"equipment",slot:"armor",statBoost:{def:10,agi:8,mag:10},description:"A suit made of golden fries.",price:800},grimace_hide:{id:"grimace_hide",name:"Grimace Hide",type:"equipment",slot:"armor",statBoost:{def:30,hp:60},description:"Thick purple hide that absorbs damage.",price:1200},fry_wand:{id:"fry_wand",name:"Fry Wand",type:"equipment",slot:"weapon",statBoost:{mag:15,mp:20},description:"A wand tipped with a golden fry.",price:600},mc_shake_maul:{id:"mc_shake_maul",name:"McShake Maul",type:"equipment",slot:"weapon",statBoost:{atk:20,def:5},description:"A heavy maul made of a milkshake cup.",price:700},feather_darts_weapon:{id:"feather_darts_weapon",name:"Feather Darts",type:"equipment",slot:"weapon",statBoost:{atk:12,agi:15},description:"A set of razor-sharp feather darts.",price:650},sesame_sword:{id:"sesame_sword",name:"Sesame Sword",type:"equipment",slot:"weapon",statBoost:{atk:25,def:10,mag:8},description:"A holy sword topped with sesame seeds.",price:1e3},moon_mic:{id:"moon_mic",name:"Moon Mic",type:"equipment",slot:"weapon",statBoost:{mag:18,mp:25},description:"A microphone that channels lunar energy.",price:800},happy_meal_charm:{id:"happy_meal_charm",name:"Happy Meal Charm",type:"accessory",slot:"accessory",statBoost:{hp:20,mp:20,luck:5},description:"A charm from a Happy Meal toy.",price:400},golden_arch_charm:{id:"golden_arch_charm",name:"Golden Arch Charm",type:"accessory",slot:"accessory",statBoost:{hp:50,mp:50,atk:10,def:10},description:"A legendary charm bearing the golden arches.",price:2e3},ketchup_packet:{id:"ketchup_packet",name:"Ketchup Packet",type:"accessory",slot:"accessory",statBoost:{atk:5},description:"A small packet of ketchup. Slightly boosts ATK.",price:50},badge_of_order:{id:"badge_of_order",name:"Badge of Order",type:"accessory",slot:"accessory",statBoost:{def:15,mag:10},description:"An officer's badge that radiates authority.",price:600},sunglasses:{id:"sunglasses",name:"Cool Sunglasses",type:"accessory",slot:"accessory",statBoost:{agi:10,mag:8},description:"Shady sunglasses that boost AGI.",price:350},patty_fragment:{id:"patty_fragment",name:"Patty Fragment",type:"craft",description:"A fragment of a burger patty. Crafting material.",price:10,stackable:!0},cheese_scrap:{id:"cheese_scrap",name:"Cheese Scrap",type:"craft",description:"A scrap of melted cheese. Crafting material.",price:8,stackable:!0},hash_brown_shard:{id:"hash_brown_shard",name:"Hash Brown Shard",type:"craft",description:"A crispy shard of hash brown. Crafting material.",price:5,stackable:!0},fish_scale:{id:"fish_scale",name:"Fish Scale",type:"craft",description:"A shimmering fish scale. Crafting material.",price:15,stackable:!0},egg_fragment:{id:"egg_fragment",name:"Egg Fragment",type:"craft",description:"A fragment of a McMuffin egg. Crafting material.",price:12,stackable:!0},onion_ring:{id:"onion_ring",name:"Onion Ring",type:"craft",description:"A perfectly circular onion ring. Crafting material.",price:10,stackable:!0},feather:{id:"feather",name:"Feather",type:"craft",description:"A colorful feather. Crafting material.",price:8,stackable:!0},rib_bone:{id:"rib_bone",name:"Rib Bone",type:"craft",description:"A McRib bone. Crafting material.",price:20,stackable:!0},syrup_bottle:{id:"syrup_bottle",name:"Syrup Bottle",type:"craft",description:"A bottle of hotcake syrup. Crafting material.",price:15,stackable:!0},cookie_chunk:{id:"cookie_chunk",name:"Cookie Chunk",type:"craft",description:"A chunk of cookie. Crafting material.",price:10,stackable:!0},apple_pie_scale:{id:"apple_pie_scale",name:"Apple Pie Scale",type:"craft",description:"A crispy scale from an Apple Pie Dragon. Crafting material.",price:25,stackable:!0},mcflurry_shard:{id:"mcflurry_shard",name:"McFlurry Shard",type:"craft",description:"A shard of McFlurry ice. Crafting material.",price:20,stackable:!0},bacon_strip:{id:"bacon_strip",name:"Bacon Strip",type:"craft",description:"A crispy bacon strip. Crafting material.",price:15,stackable:!0},coffee_ground:{id:"coffee_ground",name:"Coffee Ground",type:"craft",description:"Used coffee grounds. Crafting material.",price:8,stackable:!0},ranch_drip:{id:"ranch_drip",name:"Ranch Drip",type:"craft",description:"A drip of ranch dressing. Crafting material.",price:12,stackable:!0},tea_leaf:{id:"tea_leaf",name:"Tea Leaf",type:"craft",description:"A sweet tea leaf. Crafting material.",price:10,stackable:!0},sprite_bottle_craft:{id:"sprite_bottle_craft",name:"Sprite Bottle (Craft)",type:"craft",description:"An empty Sprite bottle. Crafting material.",price:18,stackable:!0},coke_can:{id:"coke_can",name:"Coke Can",type:"craft",description:"A crushed Coke can. Crafting material.",price:20,stackable:!0},melted_cheese:{id:"melted_cheese",name:"Melted Cheese",type:"craft",description:"A glob of melted cheese. Crafting material.",price:15,stackable:!0},nugget_crown:{id:"nugget_crown",name:"Nugget Crown",type:"craft",description:"A crown from a McNugget King. Rare crafting material.",price:50,stackable:!0},condiment_crown:{id:"condiment_crown",name:"Condiment Crown",type:"craft",description:"The crown of the Condiment King. Legendary crafting material.",price:200,stackable:!0},big_mac_crown:{id:"big_mac_crown",name:"Big Mac Crown",type:"craft",description:"A crown from a Big Mac Brute. Rare crafting material.",price:60,stackable:!0},deluxe_patty:{id:"deluxe_patty",name:"Deluxe Patty",type:"craft",description:"A premium patty from a Deluxe Quarter Pounder.",price:45,stackable:!0},tortilla_scrap:{id:"tortilla_scrap",name:"Tortilla Scrap",type:"craft",description:"A scrap of tortilla. Crafting material.",price:5,stackable:!0},mustard_jar:{id:"mustard_jar",name:"Mustard Jar",type:"craft",description:"A jar of mustard. Crafting material.",price:18,stackable:!0},sundae_drip:{id:"sundae_drip",name:"Sundae Drip",type:"craft",description:"A drip of sundae. Crafting material.",price:10,stackable:!0},parfait_glass:{id:"parfait_glass",name:"Parfait Glass",type:"craft",description:"A shard of parfait glass. Crafting material.",price:14,stackable:!0},english_muffin:{id:"english_muffin",name:"English Muffin",type:"craft",description:"An English muffin. Crafting material.",price:12,stackable:!0},golden_fry_key:{id:"golden_fry_key",name:"Golden Fry Key",type:"key_item",description:"A key shaped like a golden fry. Opens the Golden Arches Castle.",price:0},hamburglar_mask:{id:"hamburglar_mask",name:"Hamburglar's Mask",type:"key_item",description:"The mask of the Hamburglar. A key story item.",price:0},happy_meal_map:{id:"happy_meal_map",name:"Happy Meal Map",type:"key_item",description:"A map of the McWorld. Shows all discovered regions.",price:0},fry_kid_whistle:{id:"fry_kid_whistle",name:"Fry Kid Whistle",type:"key_item",description:"A whistle that calls Fry Kids. Used to collect familiars.",price:0}},va=["Thief","Bandit","Rogue","Lieutenant","Captain","Lord"],Nm=[1,1.3,1.6,2,2.5,3],Fl=["fire","ice","water","earth","holy","dark"],us=["Aggressive","Cunning","Cowardly","Honorable","Vengeful"],Um=[2,2,3,3,4,4],ii={hp:80,mp:30,atk:12,def:10,agi:8,mag:10},ko={fire:["Grease Fireball","Flaming Fry Burst","Sizzling Patty Slam","Inferno Grill"],ice:["Frosty Shake Blizzard","Frozen McFlurry","Ice Cube Barrage","Arctic Condiment Storm"],water:["Soda Tidal Wave","Cola Flood","Ice Drench","Splash of Syrup"],earth:["Burger Boulder","Sesame Seed Quake","Hash Brown Wall","Terra Patty Crush"],holy:["Blessing of the Arches","Radiant McNugget","Golden Fry Beam","Halo of Ketchup"],dark:["Shadow Robbery","Midnight Burger Curse","Dark Drive-Thru","Eclipse of Fries"]},Do={fire:["Grease Armor","Spice Rush","Ember Guard"],ice:["Frosty Shield","Chill Aura","Frozen Sanctuary"],water:["Soda Refresh","Cola Cleansing","Hydration Ward"],earth:["Sesame Barrier","Hash Brown Bastion","Stone Bun Guard"],holy:["Golden Blessing","Arch Light"," McNugget Mercy"],dark:["Shadow Cloak","Dark Deal","Veil of Robbery"]},No={Aggressive:["Intimidating ROBBLE","Frightening Grease","Berserker Howl"],Cunning:["Sneak Sabotage","Clever Trip","Underhanded Tactic"],Cowardly:["Panic Scramble","Desperate Dodge","Frightened Flee"],Honorable:["Challenge Strike","Fair Warning","Warrior Focus"],Vengeful:["Grudge Mark","Revenge Plot","Bitter Memory"]},Wt={eyeColor:["Red","Yellow","Greasy Black","Mustard Gold","Ketchup Red","Pale Blue","Fry Brown"],scar:["None","Burn Mark","Grease Stain","Ketchup Splash","Missing Bun","Crack on Patty"],weapon:["Stolen Fry","Grease Gun","Ketchup Knife","Bun Boomerang","Patty Mace","Sesame Shiv","Condiment Crossbow"],bodyType:["Stout","Lanky","Round","Muscular","Wiry","Pudgy"],height:["Short","Average","Tall","Tiny","Imposing"]},Uo={Aggressive:"All-out attack, ignores defense",Cunning:"Targets weakest party member, uses debuffs",Cowardly:"Defensive, uses buffs then flees if hurt",Honorable:"Balanced attack and defense, fights fair",Vengeful:"Focuses on characters with grudges, relentless"},Fo={Aggressive:"I'll crush you next time! ROBBLE ROBBLE!",Cunning:"You got lucky... but I've learned your weaknesses.",Cowardly:"Y-you won't catch me off guard again! I'll be ready!",Honorable:"A worthy victory. But I shall grow stronger from this defeat.",Vengeful:"You'll pay for this humiliation! I swear it on the Golden Arches!"},Oo={Aggressive:"I'm tired of losing for the Hamburglar. I'm done!",Cunning:"The Hamburglar's organization is falling apart. I'm saving myself.",Cowardly:"P-please don't hurt me! I'll leave the Hamburglar! Just let me go!",Honorable:"I cannot serve a master who shames his own followers. I resign.",Vengeful:"The Hamburglar betrayed us all! I'll have my revenge — but not for him!"};class As{constructor(e={}){this.id=e.id||vm(),this.name=e.name||Ul(Date.now()+Math.random()*1e4),this.rankIndex=e.rankIndex??0,this.rank=va[this.rankIndex],this.level=e.level??1,this.xp=e.xp??0,this.bodyElement=e.bodyElement||Fl[0],this.strengths=e.strengths||[],this.weaknesses=e.weaknesses||[],this.personality=e.personality||us[0],this.grudges=new Map,this.rivals=[],this.traits=e.traits||this._rollDefaultTraits(),this.isAlive=!0,this.isShamed=!1,this.defected=!1,this.commanderId=null,this.subordinates=[],this.assignedRegion=null,this.backstory=null,this.immunities=[],this.resistances=[],this._categorizeStrengths(),this.combatStyle=this.getCombatStyle(),this.stats={},this.abilities=[],this.generateStats(),this.generateAbilities()}_rollDefaultTraits(){const e=Math.random;return{eyeColor:Wt.eyeColor[Math.floor(e()*Wt.eyeColor.length)],scar:Wt.scar[Math.floor(e()*Wt.scar.length)],weapon:Wt.weapon[Math.floor(e()*Wt.weapon.length)],bodyType:Wt.bodyType[Math.floor(e()*Wt.bodyType.length)],height:Wt.height[Math.floor(e()*Wt.height.length)]}}_categorizeStrengths(){this.immunities=[],this.resistances=[];for(const e of this.strengths)Math.random()<.4?this.immunities.push(e):this.resistances.push(e)}generateStats(){const e=Nm[this.rankIndex],t=this.level;this.stats.maxHp=Math.floor(ii.hp*e+15*e*(t-1)),this.stats.maxMp=Math.floor(ii.mp*e+8*e*(t-1)),this.stats.atk=Math.floor(ii.atk*e+3*e*(t-1)),this.stats.def=Math.floor(ii.def*e+3*e*(t-1)),this.stats.agi=Math.floor(ii.agi*e+2*e*(t-1)),this.stats.mag=Math.floor(ii.mag*e+2*e*(t-1)),this.stats.hp=this.stats.maxHp,this.stats.mp=this.stats.maxMp}generateAbilities(){this.abilities=[];const e=Um[this.rankIndex],t=ko[this.bodyElement]||ko.fire,n=Do[this.bodyElement]||Do.fire,i=No[this.personality]||No.Aggressive,s=new Set,r=t[0];s.add(r),this.abilities.push({id:`${this.id}_atk1`,name:r,type:"attack",element:this.bodyElement,power:1+this.rankIndex*.15,mpCost:4+this.rankIndex*2,description:`A ${this.bodyElement}-elemental attack dealing significant damage.`});const o=n[0];s.add(o),this.abilities.push({id:`${this.id}_sup1`,name:o,type:this.personality==="Cowardly"?"buff":"heal",element:this.bodyElement,power:.8+this.rankIndex*.1,mpCost:6+this.rankIndex*2,description:`Restores HP or grants a protective ${this.bodyElement} effect.`});let l=1,c=1,d=0;for(;this.abilities.length<e;){if(e-this.abilities.length===1){const g=i[d%i.length];s.has(g)||(s.add(g),this.abilities.push({id:`${this.id}_debuff${d+1}`,name:g,type:"debuff",element:"physical",power:.5+this.rankIndex*.1,mpCost:5+this.rankIndex*2,description:`Inflicts a debilitating effect driven by ${this.personality.toLowerCase()} tactics.`}));break}const h=t[l%t.length];if(s.has(h)||(s.add(h),this.abilities.push({id:`${this.id}_atk${l+1}`,name:h,type:"aoe",element:this.bodyElement,power:.7+this.rankIndex*.12,mpCost:8+this.rankIndex*3,description:`A devastating ${this.bodyElement} area attack.`})),l++,this.abilities.length>=e)break;const p=i[d%i.length];if(s.has(p)||(s.add(p),this.abilities.push({id:`${this.id}_debuff${d+1}`,name:p,type:"debuff",element:"physical",power:.5+this.rankIndex*.1,mpCost:5+this.rankIndex*2,description:`Lowers enemy stats through ${this.personality.toLowerCase()} cunning.`})),d++,this.abilities.length>=e)break;const _=n[c%n.length];s.has(_)||(s.add(_),this.abilities.push({id:`${this.id}_sup${c+1}`,name:_,type:"buff",element:this.bodyElement,power:.6+this.rankIndex*.1,mpCost:7+this.rankIndex*2,description:`Empowers the user with ${this.bodyElement} energy.`})),c++}}addGrudge(e,t){const n=this.grudges.get(e);n?(n.timesBeaten++,n.howTheyBeatMe=t):this.grudges.set(e,{howTheyBeatMe:t,timesBeaten:1})}gainXP(e){const t=this.level;this.xp+=e;const n=ka(this.xp);this.level=n.level;let i=!1;this.level>t&&this.generateStats();const s=[10,18,25,32,40];for(const r of s)t<r&&this.level>=r&&this.rankIndex<5&&(this.promote(),i=!0);return{leveledUp:this.level>t,newLevel:this.level,rankedUp:i}}promote(){return this.rankIndex>=5?!1:(this.rankIndex++,this.rank=va[this.rankIndex],this.generateStats(),this.generateAbilities(),!0)}demote(){return this.rankIndex<=0?!1:(this.rankIndex--,this.rank=va[this.rankIndex],this.generateStats(),this.generateAbilities(),!0)}shame(){return this.isShamed=!0,this.backstory=this.getBackstory(),this.demote(),this.backstory}getResistance(e){return this.immunities.includes(e)?0:this.resistances.includes(e)?.5:this.weaknesses.includes(e)?2:1}getCombatStyle(){return Uo[this.personality]||Uo.Aggressive}getTaunt(){return Fo[this.personality]||Fo.Aggressive}getDefectionMessage(){return Oo[this.personality]||Oo.Aggressive}getBackstory(){const e=this.rank,t=this.bodyElement,n=`${this.traits.bodyType.toLowerCase()}, ${this.traits.height.toLowerCase()} figure with ${this.traits.eyeColor.toLowerCase()} eyes`,i=this.traits.weapon,s=this.traits.scar!=="None"?` bears a ${this.traits.scar.toLowerCase()}`:"",r=[`Once a humble ${e} of the Hamburglar's crew, this ${n}${s} rose through the ranks wielding a ${i}. Their ${this.personality.toLowerCase()} nature and mastery of ${t} made them a feared enforcer of the Happy Meal underground.`,`Born in the grease pits of Fry Valley, this ${n} operative${s} found their calling under the Hamburglar's banner. Wielding a ${i} with ${this.personality.toLowerCase()} precision, they channel ${t} energy to steal every last McNugget.`,`A ${n} rogue${s} who clawed their way up to ${e}, armed with a ${i} and an unquenchable thirst for stolen meals. Their ${this.personality.toLowerCase()} disposition and ${t} powers make them a dangerous foe in the drive-thru wars.`];return r[Math.floor(Math.random()*r.length)]}toData(){return{id:this.id,name:this.name,rank:this.rank,rankIndex:this.rankIndex,level:this.level,xp:this.xp,bodyElement:this.bodyElement,strengths:this.strengths,weaknesses:this.weaknesses,immunities:this.immunities,resistances:this.resistances,personality:this.personality,grudges:Array.from(this.grudges.entries()),rivals:this.rivals,traits:this.traits,isAlive:this.isAlive,isShamed:this.isShamed,defected:this.defected,stats:this.stats,abilities:this.abilities,combatStyle:this.combatStyle,commanderId:this.commanderId,subordinates:this.subordinates,assignedRegion:this.assignedRegion,backstory:this.backstory}}static fromData(e){const t=Object.create(As.prototype);return t.id=e.id,t.name=e.name,t.rank=e.rank,t.rankIndex=e.rankIndex,t.level=e.level,t.xp=e.xp,t.bodyElement=e.bodyElement,t.strengths=e.strengths||[],t.weaknesses=e.weaknesses||[],t.immunities=e.immunities||[],t.resistances=e.resistances||[],t.personality=e.personality,t.grudges=new Map(e.grudges||[]),t.rivals=e.rivals||[],t.traits=e.traits,t.isAlive=e.isAlive,t.isShamed=e.isShamed,t.defected=e.defected||!1,t.stats=e.stats,t.abilities=e.abilities||[],t.combatStyle=e.combatStyle,t.commanderId=e.commanderId,t.subordinates=e.subordinates||[],t.assignedRegion=e.assignedRegion,t.backstory=e.backstory,t}}const Si=Fl,Fm=["eyeColor","scar","weapon","bodyType","height"];class Om{constructor(e=Date.now()){this.rng=new Ci(e),this.elementDistribution=new Map,this.personalityDistribution=new Map,this.traitDistribution=new Map}generateHierarchy(e=18){const t=[],n=e>=18?3:2,i=e>=18?5:4,s=4,r=3,o=e-1-n-i-s-r,l=[{rankIndex:5,count:1},{rankIndex:4,count:n},{rankIndex:3,count:i},{rankIndex:2,count:s},{rankIndex:1,count:r},{rankIndex:0,count:Math.max(2,o)}],c=[3,8,15,22,30,40];for(const{rankIndex:d,count:f}of l)for(let h=0;h<f;h++){const p=this.rollElement(),_=this.rollPersonality(),g=this.rollStrengths(p),m=this.rollWeaknesses(p,g),u=this.rollTraits(),v=c[d],x=Math.max(1,v+this.rng.int(-2,2)),M=new As({rankIndex:d,level:x,bodyElement:p,personality:_,strengths:g,weaknesses:m,traits:u});t.push(M)}return this.assignRivals(t),this.assignCommand(t),t}generateName(e){return Ul(e)}rollPersonality(){const e=us.map(s=>this.personalityDistribution.get(s)||0),t=Math.min(...e),n=us.filter(s=>(this.personalityDistribution.get(s)||0)===t);let i;return n.length>0&&this.rng.chance(.7)?i=this.rng.choice(n):i=this.rng.choice(us),this.personalityDistribution.set(i,(this.personalityDistribution.get(i)||0)+1),i}rollElement(){const e=Si.map(s=>this.elementDistribution.get(s)||0),t=Math.min(...e),n=Si.filter(s=>(this.elementDistribution.get(s)||0)===t);let i;return n.length>0&&this.rng.chance(.7)?i=this.rng.choice(n):i=this.rng.choice(Si),this.elementDistribution.set(i,(this.elementDistribution.get(i)||0)+1),i}rollStrengths(e){const t=Si.filter(r=>r!==e),n=this.rng.chance(.25)?2:1,i=[],s=[...t];for(let r=s.length-1;r>0;r--){const o=Math.floor(this.rng.next()*(r+1));[s[r],s[o]]=[s[o],s[r]]}for(let r=0;r<n&&r<s.length;r++)i.push(s[r]);return i}rollWeaknesses(e,t){const n=Si.filter(o=>o!==e&&!t.includes(o)),i=this.rng.chance(.25)?2:1,s=[],r=[...n];for(let o=r.length-1;o>0;o--){const l=Math.floor(this.rng.next()*(o+1));[r[o],r[l]]=[r[l],r[o]]}for(let o=0;o<i&&o<r.length;o++)s.push(r[o]);return s}rollTraits(){const e={};for(const t of Fm){const n=Wt[t],i=this.traitDistribution.get(t)||new Map,s=n.map(c=>i.get(c)||0),r=Math.min(...s),o=n.filter(c=>(i.get(c)||0)===r);let l;o.length>0&&this.rng.chance(.6)?l=this.rng.choice(o):l=this.rng.choice(n),i.set(l,(i.get(l)||0)+1),this.traitDistribution.set(t,i),e[t]=l}return e}assignRivals(e){const t=new Map;for(const n of e)t.has(n.rankIndex)||t.set(n.rankIndex,[]),t.get(n.rankIndex).push(n);for(const n of e){if(n.rivals.length>=1)continue;const i=[n.rankIndex,n.rankIndex-1,n.rankIndex+1];let s=[];for(const r of i){const o=t.get(r)||[];s=s.concat(o.filter(l=>l.id!==n.id&&!n.rivals.includes(l.id)))}if(s.length===0&&(s=e.filter(r=>r.id!==n.id&&!n.rivals.includes(r.id))),s.length>0){const r=s.filter(c=>c.rivals.length===0),o=r.length>0?r:s,l=this.rng.choice(o);n.rivals.push(l.id),l.rivals.includes(n.id)||l.rivals.push(n.id)}}}assignCommand(e){const t=new Map;for(const h of e)t.has(h.rankIndex)||t.set(h.rankIndex,[]),t.get(h.rankIndex).push(h);const n=(t.get(5)||[])[0],i=t.get(4)||[],s=t.get(3)||[],r=t.get(2)||[],o=t.get(1)||[],l=t.get(0)||[];if(n)for(const h of i)h.commanderId=n.id,n.subordinates.push(h.id);let c=0;for(const h of i){const p=this.rng.int(2,3);for(let _=0;_<p&&c<s.length;_++){const g=s[c++];g.commanderId=h.id,h.subordinates.push(g.id)}}const d=[...r,...o,...l];for(let h=d.length-1;h>0;h--){const p=Math.floor(this.rng.next()*(h+1));[d[h],d[p]]=[d[p],d[h]]}let f=0;for(const h of s){const p=this.rng.int(1,2);for(let _=0;_<p&&f<d.length;_++){const g=d[f++];g.commanderId||(g.commanderId=h.id,h.subordinates.push(g.id))}}for(;f<d.length;){const h=d[f++];if(!h.commanderId)if(i.length>0){const p=this.rng.choice(i);h.commanderId=p.id,p.subordinates.push(h.id)}else n&&(h.commanderId=n.id,n.subordinates.push(h.id))}}}const xa=["fry_valley","burger_highlands","mcflurry_tundra","happy_meal_forest","drive_thru_desert","play_place_plains","golden_arches_castle"],Bm=50;class Pi{constructor(){this.lieutenants=[],this.hierarchy=null,this.playerDefeats=0,this.playerVictories=0,this.regionBosses=new Map,this.eventLog=[],this.backgroundTimer=0,this._xpTimer=0,this._rivalryTimer=0}init(){const e=new Om(Date.now());this.lieutenants=e.generateHierarchy(18),this._buildHierarchyTree(),this._assignRegionBosses(),this._addEvent("The Hamburglar's lieutenant hierarchy has been established.")}_buildHierarchyTree(){const e=this.lieutenants.find(t=>t.rankIndex===5);if(!e){this.hierarchy={lordId:null,captains:[]};return}this.hierarchy={lordId:e.id,captains:e.subordinates.map(t=>{const n=this.getLieutenant(t);return{id:t,subordinates:n?n.subordinates.map(i=>{const s=this.getLieutenant(i);return{id:i,subordinates:s?s.subordinates:[]}}):[]}})}}_assignRegionBosses(){const e=this.lieutenants.filter(t=>t.isAlive&&!t.isShamed&&t.rankIndex>=3&&t.rankIndex<=4).sort((t,n)=>n.rankIndex-t.rankIndex);if(e.length<xa.length){const t=this.lieutenants.filter(n=>n.isAlive&&!n.isShamed&&n.rankIndex===2&&!e.includes(n)).sort((n,i)=>i.level-n.level);e.push(...t)}for(let t=0;t<xa.length&&t<e.length;t++)this.assignToRegion(e[t].id,xa[t])}getLieutenant(e){return this.lieutenants.find(t=>t.id===e)||null}getActiveLieutenants(){return this.lieutenants.filter(e=>e.isAlive&&!e.isShamed)}getByRank(e){return this.lieutenants.filter(t=>t.rank===e)}recordPlayerDefeat(e,t){const n=this.getLieutenant(e);if(!n||!n.isAlive)return{taunt:"...",promoted:!1,newRank:null};this.playerDefeats++;const i=(t==null?void 0:t.levels)||[1],s=i.reduce((d,f)=>d+f,0)/i.length,r=Math.floor(s*20),o=n.gainXP(r);if(t!=null&&t.memberIds)for(const d of t.memberIds)n.addGrudge(d,"Defeated the party in combat");const l=n.getTaunt();let c=null;return o.rankedUp&&(c=n.rank,this._addEvent(`${n.name} has been promoted to ${n.rank} after defeating the party!`)),this._addEvent(`${n.name} defeated the party and gained ${r} XP. "${l}"`),{taunt:l,promoted:o.rankedUp,newRank:c}}recordPlayerVictory(e,t,n){const i=this.getLieutenant(e);if(!i||!i.isAlive)return{defeated:!1,promotions:[],message:"..."};if(n){this.playerVictories++;const o=15*(i.level||1),l=i.gainXP(o);t&&!i.strengths.includes(t)&&!i.weaknesses.includes(t)&&Math.random()<.5&&(i.strengths.push(t),Math.random()<.4?i.immunities.push(t):i.resistances.push(t),this._addEvent(`${i.name} developed a resistance to ${t}!`));const c=i.getTaunt();return l.rankedUp&&(i.rank,this._addEvent(`${i.name} was promoted to ${i.rank} after surviving the encounter!`)),this._addEvent(`${i.name} escaped but grew stronger. "${c}"`),{defeated:!1,promotions:l.rankedUp?[{id:i.id,newRank:i.rank}]:[],message:c}}this.playerVictories++,i.isAlive=!1;const s=[];for(const o of i.rivals){const l=this.getLieutenant(o);if(l&&l.isAlive&&!l.isShamed){const c=i.level*30,d=l.gainXP(c);d.rankedUp?(s.push({id:l.id,newRank:l.rank}),this._addEvent(`${l.name} was promoted to ${l.rank} after their rival ${i.name} was defeated!`)):d.leveledUp&&this._addEvent(`${l.name} gained ${c} XP from rival ${i.name}'s defeat.`)}}const r=`${i.name} has been defeated!`;return this._addEvent(r),{defeated:!0,promotions:s,message:r}}recordShame(e,t){const n=this.getLieutenant(e);if(!n)return{backstory:"",demotedTo:""};const i=n.shame();return this._addEvent(`${n.name} has been SHAMED using ${t||"their weakness"}! Demoted to ${n.rank}.`),this._addEvent(`Backstory: ${i}`),{backstory:i,demotedTo:n.rank}}processPowerStruggles(){const e=[],t=this.lieutenants.filter(n=>n.isShamed&&n.isAlive);for(const n of t)for(const i of n.rivals){const s=this.getLieutenant(i);if(!s||!s.isAlive||s.defected)continue;if(Math.random()<.3){s.defected=!0;const o=s.getDefectionMessage();this._addEvent(`${s.name} has defected! "${o}"`),e.push({lieutenantId:s.id,message:o,defected:!0})}else e.push({lieutenantId:s.id,message:"",defected:!1})}return e}getTauntingMessage(e){return typeof e=="string"&&(e=this.getLieutenant(e)),e?e.getTaunt():"..."}getDefectionMessage(e){return typeof e=="string"&&(e=this.getLieutenant(e)),e?e.getDefectionMessage():"..."}getHierarchyMap(){const e=this.lieutenants.map(i=>({id:i.id,name:i.name,rank:i.rank,rankIndex:i.rankIndex,isAlive:i.isAlive,isShamed:i.isShamed,assignedRegion:i.assignedRegion})),t=[];for(const i of this.lieutenants)for(const s of i.subordinates)t.push({from:i.id,to:s,type:"command"});const n=new Set;for(const i of this.lieutenants)for(const s of i.rivals){const r=[i.id,s].sort().join("|");n.has(r)||(n.add(r),t.push({from:i.id,to:s,type:"rivalry"}))}return{nodes:e,edges:t}}assignToRegion(e,t){const n=this.getLieutenant(e);if(n){for(const[i,s]of this.regionBosses)s===e&&this.regionBosses.delete(i);n.assignedRegion=t,this.regionBosses.set(t,e)}}getRegionBoss(e){const t=this.regionBosses.get(e);if(!t)return null;const n=this.getLieutenant(t);return!n||!n.isAlive?null:n}update(e){this.backgroundTimer+=e,this._xpTimer+=e,this._rivalryTimer+=e;const t=[];if(this._xpTimer>=60){this._xpTimer=0;const n=this.getActiveLieutenants();if(n.length>0){const i=n[Math.floor(Math.random()*n.length)],s=5+Math.floor(Math.random()*11),r=i.gainXP(s);if(r.leveledUp){const o=`${i.name} trained in secret and reached level ${i.level}!`;if(t.push(o),this._addEvent(o),r.rankedUp){const l=`${i.name} was promoted to ${i.rank}!`;t.push(l),this._addEvent(l)}}}}if(this._rivalryTimer>=120){this._rivalryTimer=0;const n=this.getActiveLieutenants().filter(i=>i.rivals.length>0);if(n.length>0){const i=n[Math.floor(Math.random()*n.length)],s=i.rivals[Math.floor(Math.random()*i.rivals.length)],r=this.getLieutenant(s);if(r&&r.isAlive){const o=[`${i.name} challenged ${r.name} for control of territory!`,`${i.name} sabotaged ${r.name}'s robbery operation!`,`${r.name} ambushed ${i.name} in a turf dispute!`,`${i.name} and ${r.name} clashed over stolen Happy Meals!`],l=o[Math.floor(Math.random()*o.length)];t.push(l),this._addEvent(l)}}}return t}_addEvent(e){this.eventLog.push(e),this.eventLog.length>Bm&&this.eventLog.shift()}getEventLog(){return[...this.eventLog]}toData(){return{lieutenants:this.lieutenants.map(e=>e.toData()),hierarchy:this.hierarchy,playerDefeats:this.playerDefeats,playerVictories:this.playerVictories,regionBosses:Array.from(this.regionBosses.entries()),eventLog:[...this.eventLog],backgroundTimer:this.backgroundTimer,_xpTimer:this._xpTimer,_rivalryTimer:this._rivalryTimer}}static fromData(e){const t=Object.create(Pi.prototype);return t.lieutenants=(e.lieutenants||[]).map(n=>As.fromData(n)),t.hierarchy=e.hierarchy||null,t.playerDefeats=e.playerDefeats||0,t.playerVictories=e.playerVictories||0,t.regionBosses=new Map(e.regionBosses||[]),t.eventLog=e.eventLog||[],t.backgroundTimer=e.backgroundTimer||0,t._xpTimer=e._xpTimer||0,t._rivalryTimer=e._rivalryTimer||0,t}}const Bo="mc-title-screen-styles",zm=`
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
`,Hm="v0.1.0 Alpha",Gm="McChronicles — A JRPG Adventure · Built with love & fries",Vm={fry_valley:"Fry Valley",burger_highlands:"Burger Highlands",mcflurry_tundra:"McFlurry Tundra",happy_meal_forest:"Happy Meal Forest",drive_thru_desert:"Drive-Thru Desert",mccafe_springs:"McCafé Springs",play_place_plains:"Play Place Plains",golden_arches_castle:"Golden Arches Castle"};class Wm{constructor(){this._onSelectCallback=null,this._container=null,this._settings={masterVolume:70,musicVolume:60,sfxVolume:80},this._saveSlots=this._loadSaveSlots(),this._isVisible=!1,this._particleInterval=null,this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(Bo))return;const e=document.createElement("style");e.id=Bo,e.textContent=zm,document.head.appendChild(e)}_loadSaveSlots(){try{const e=localStorage.getItem("mcchronicles_saves");if(e)return JSON.parse(e)}catch{}return[null,null,null]}_saveSaveSlots(){try{localStorage.setItem("mcchronicles_saves",JSON.stringify(this._saveSlots))}catch{}}_build(){this._container=document.createElement("div"),this._container.className="mc-title-overlay",this._container.style.display="none";const e=document.createElement("div");e.className="mc-title-particles",this._container.appendChild(e);const t=document.createElement("div");t.className="mc-title-vignette",this._container.appendChild(t);const n=document.createElement("div");n.className="mc-title-content";const i=document.createElement("h1");i.className="mc-title-main",i.textContent="McChronicles",n.appendChild(i);const s=document.createElement("div");s.className="mc-title-subtitle",s.textContent="The Happy Meal Quest",n.appendChild(s);const r=document.createElement("div");r.className="mc-title-divider",n.appendChild(r);const o=document.createElement("div");o.className="mc-title-buttons",this._newGameBtn=document.createElement("button"),this._newGameBtn.className="mc-title-btn",this._newGameBtn.textContent="New Game",this._newGameBtn.addEventListener("click",()=>this._handleSelect("newgame")),o.appendChild(this._newGameBtn),this._continueBtn=document.createElement("button"),this._continueBtn.className="mc-title-btn",this._continueBtn.textContent="Continue",this._continueBtn.addEventListener("click",()=>this._showSavePanel()),this._saveSlots.some(c=>c!==null)||(this._continueBtn.disabled=!0),o.appendChild(this._continueBtn),this._settingsBtn=document.createElement("button"),this._settingsBtn.className="mc-title-btn",this._settingsBtn.textContent="Settings",this._settingsBtn.addEventListener("click",()=>this._showSettingsPanel()),o.appendChild(this._settingsBtn),n.appendChild(o),this._container.appendChild(n),this._settingsPanel=this._buildSettingsPanel(),this._container.appendChild(this._settingsPanel),this._savesPanel=this._buildSavesPanel(),this._container.appendChild(this._savesPanel);const l=document.createElement("div");l.className="mc-title-credits",l.textContent=`${Gm}  ·  ${Hm}`,this._container.appendChild(l),this._container.addEventListener("click",c=>{(c.target===this._container||c.target.classList.contains("mc-title-particles")||c.target.classList.contains("mc-title-vignette"))&&this._hideAllPanels()}),document.body.appendChild(this._container)}_buildSettingsPanel(){const e=document.createElement("div");e.className="mc-title-settings-panel";const t=document.createElement("h2");t.className="mc-panel-title",t.textContent="Settings",e.appendChild(t);const n=[{key:"masterVolume",label:"Master Volume"},{key:"musicVolume",label:"Music Volume"},{key:"sfxVolume",label:"SFX Volume"}];n.forEach(({key:s,label:r})=>{const o=document.createElement("div");o.className="mc-setting-row";const l=document.createElement("span");l.className="mc-setting-label",l.textContent=r,o.appendChild(l);const c=document.createElement("input");c.type="range",c.min=0,c.max=100,c.value=this._settings[s],c.className="mc-slider";const d=document.createElement("span");d.className="mc-setting-value",d.textContent=`${this._settings[s]}%`,c.addEventListener("input",()=>{this._settings[s]=parseInt(c.value,10),d.textContent=`${c.value}%`;try{localStorage.setItem("mcchronicles_settings",JSON.stringify(this._settings))}catch{}}),o.appendChild(c),o.appendChild(d),e.appendChild(o)});try{const s=localStorage.getItem("mcchronicles_settings");if(s){const r=JSON.parse(s);Object.assign(this._settings,r),e.querySelectorAll(".mc-slider").forEach((o,l)=>{o.value=this._settings[n[l].key],o.dispatchEvent(new Event("input"))})}}catch{}const i=document.createElement("button");return i.className="mc-panel-close",i.textContent="← Back",i.addEventListener("click",()=>this._hideAllPanels()),e.appendChild(i),e}_buildSavesPanel(){const e=document.createElement("div");e.className="mc-title-saves-panel";const t=document.createElement("h2");t.className="mc-panel-title",t.textContent="Select Save Slot",e.appendChild(t);for(let i=0;i<3;i++){const s=document.createElement("div");s.className="mc-save-slot";const r=this._saveSlots[i];if(r){const o=document.createElement("span");o.className="mc-save-slot-name",o.textContent=`Slot ${i+1}`,s.appendChild(o);const l=document.createElement("span");l.className="mc-save-slot-info";const c=Vm[r.region]||r.region||"Unknown";l.textContent=`Lv ${r.level||"?"} · ${c} · ${r.playtime||"0:00"}`,s.appendChild(l),s.addEventListener("click",()=>{this._hideAllPanels(),this._onSelectCallback&&this._onSelectCallback("continue",{slot:i,data:r})})}else{const o=document.createElement("span");o.className="mc-save-slot-empty",o.textContent=`Slot ${i+1} — Empty`,s.appendChild(o),s.style.cursor="default",s.addEventListener("click",()=>{this._hideAllPanels(),this._onSelectCallback&&this._onSelectCallback("newgame",{slot:i})})}e.appendChild(s)}const n=document.createElement("button");return n.className="mc-panel-close",n.textContent="← Back",n.addEventListener("click",()=>this._hideAllPanels()),e.appendChild(n),e}_showSettingsPanel(){this._hideAllPanels(),this._settingsPanel.classList.add("visible")}_showSavePanel(){this._hideAllPanels(),this._savesPanel.remove(),this._savesPanel=this._buildSavesPanel(),this._container.appendChild(this._savesPanel),this._savesPanel.classList.add("visible")}_hideAllPanels(){this._settingsPanel.classList.remove("visible"),this._savesPanel.classList.remove("visible")}_handleSelect(e){e==="newgame"&&this._onSelectCallback&&this._onSelectCallback("newgame",null)}_spawnFryParticle(){const e=this._container.querySelector(".mc-title-particles");if(!e)return;const t=document.createElement("div");t.className="mc-title-fry";const n=Math.random()*100,i=6+Math.random()*8,s=0,r=.6+Math.random()*.8;t.style.left=`${n}%`,t.style.animationDuration=`${i}s`,t.style.animationDelay=`${s}s`,t.style.transform=`scale(${r})`,t.style.opacity="0",e.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},(i+s)*1e3+500)}_startParticles(){for(let e=0;e<15;e++)setTimeout(()=>this._spawnFryParticle(),e*200);this._particleInterval=setInterval(()=>{this._spawnFryParticle()},600)}_stopParticles(){this._particleInterval&&(clearInterval(this._particleInterval),this._particleInterval=null);const e=this._container.querySelector(".mc-title-particles");e&&(e.innerHTML="")}show(){this._container.style.display="flex",this._isVisible=!0,this._startParticles()}hide(){this._container.style.display="none",this._isVisible=!1,this._hideAllPanels(),this._stopParticles()}onSelect(e){this._onSelectCallback=e}destroy(){this._stopParticles(),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container)}}const zo="mc-dialogue-box-styles",qm=`
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

@keyframes mc-backdrop-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes mc-backdrop-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
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

/* Story backdrop image — full screen behind dialogue */
.mc-story-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 8998;
  display: none;
  pointer-events: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
}

.mc-story-backdrop.visible {
  display: block;
  animation: mc-backdrop-fade-in 0.8s ease-out forwards;
}

.mc-story-backdrop.fading-out {
  animation: mc-backdrop-fade-out 0.6s ease-out forwards;
}

/* Voice mute/unmute button */
.mc-voice-toggle {
  position: fixed;
  top: 1rem; right: 1rem;
  z-index: 9001;
  background: rgba(45,25,10,0.9);
  border: 2px solid #ffd700;
  border-radius: 50%;
  width: 44px; height: 44px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #ffd700;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  pointer-events: auto;
}

.mc-voice-toggle.visible {
  display: flex;
}

.mc-voice-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 15px rgba(255,200,80,0.4);
}

.mc-voice-toggle.muted {
  opacity: 0.5;
}
`;class Xm{constructor(){this._container=null,this._backdrop=null,this._storyBackdrop=null,this._textEl=null,this._bannerEl=null,this._promptEl=null,this._voiceToggle=null,this._dialogueQueue=[],this._currentIndex=0,this._fullText="",this._displayedText="",this._typeSpeed=30,this._typeAccumulator=0,this._isTyping=!1,this._isVisible=!1,this._onComplete=null,this._keyHandler=null,this._clickHandler=null,this._currentBackdropUrl=null,this._backdropFadeTimer=null,this._voiceMuted=!1,this._voicePrefix=null,this._currentAudio=null,this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(zo))return;const e=document.createElement("style");e.id=zo,e.textContent=qm,document.head.appendChild(e)}_build(){this._storyBackdrop=document.createElement("div"),this._storyBackdrop.className="mc-story-backdrop",document.body.appendChild(this._storyBackdrop),this._backdrop=document.createElement("div"),this._backdrop.className="mc-dialogue-backdrop",document.body.appendChild(this._backdrop),this._container=document.createElement("div"),this._container.className="mc-dialogue-overlay";const e=document.createElement("div");e.className="mc-dialogue-box";const t=document.createElement("div");t.className="mc-dialogue-ornament",e.appendChild(t),this._bannerEl=document.createElement("div"),this._bannerEl.className="mc-dialogue-banner",this._bannerEl.textContent="",e.appendChild(this._bannerEl);const n=document.createElement("div");n.className="mc-dialogue-content",this._textEl=document.createElement("p"),this._textEl.className="mc-dialogue-text",this._textEl.textContent="",n.appendChild(this._textEl),e.appendChild(n),this._promptEl=document.createElement("div"),this._promptEl.className="mc-dialogue-prompt",this._promptEl.textContent="▼ Press Space",this._promptEl.style.display="none",e.appendChild(this._promptEl),this._container.appendChild(e),document.body.appendChild(this._container),this._voiceToggle=document.createElement("button"),this._voiceToggle.className="mc-voice-toggle",this._voiceToggle.title="Toggle Voice Narration",this._voiceToggle.textContent="🔊",this._voiceToggle.addEventListener("click",()=>{this._voiceMuted=!this._voiceMuted,this._voiceToggle.classList.toggle("muted",this._voiceMuted),this._voiceToggle.textContent=this._voiceMuted?"🔇":"🔊",this._voiceMuted&&this._currentAudio&&(this._currentAudio.pause(),this._currentAudio=null)}),document.body.appendChild(this._voiceToggle),this._keyHandler=i=>{this._isVisible&&(i.code==="Enter"||i.code==="Space"||i.code==="NumpadEnter")&&(i.preventDefault(),i.stopPropagation(),this._advance())}}_advance(){if(this._isTyping){this._skip();return}if(this._currentIndex++,this._currentIndex>=this._dialogueQueue.length){this.hide();const e=this._onComplete;this._onComplete=null,e&&e();return}this._showCurrentLine()}_showCurrentLine(){const e=this._dialogueQueue[this._currentIndex];e&&(this._bannerEl.textContent=e.speaker||"",this._fullText=e.text||"",this._displayedText="",this._textEl.textContent="",this._isTyping=!0,this._typeAccumulator=0,this._promptEl.style.display="none",this._playVoiceLine(this._currentIndex))}_playVoiceLine(e){if(this._currentAudio&&(this._currentAudio.pause(),this._currentAudio=null),this._voiceMuted||!this._voicePrefix)return;const t=`${this._voicePrefix}_${e}.mp3`,n=new Audio(t);n.onerror=()=>{this._currentAudio=null},n.onended=()=>{this._currentAudio=null},this._currentAudio=n,n.play().catch(()=>{this._currentAudio=null})}_updateTyping(e){if(this._isTyping){for(this._typeAccumulator+=e;this._typeAccumulator>=this._typeSpeed&&this._displayedText.length<this._fullText.length;)this._typeAccumulator-=this._typeSpeed,this._displayedText=this._fullText.slice(0,this._displayedText.length+1),this._textEl.innerHTML=this._escapeHtml(this._displayedText)+'<span class="mc-cursor"></span>';this._displayedText.length>=this._fullText.length&&(this._isTyping=!1,this._textEl.textContent=this._fullText,this._currentIndex<this._dialogueQueue.length-1?this._promptEl.textContent="▼ Press Space":this._promptEl.textContent="✦ Press Space to close",this._promptEl.style.display="block")}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}show(e,t,n={}){if(!e||e.length===0){t&&t();return}this._dialogueQueue=e,this._currentIndex=0,this._onComplete=t||null,this._isVisible=!0,n.backdrop&&this._showBackdrop(n.backdrop),this._voicePrefix=n.voicePrefix||null,this._container.classList.add("visible"),this._backdrop.classList.add("visible"),this._voicePrefix&&this._voiceToggle.classList.add("visible"),this._showCurrentLine(),document.addEventListener("keydown",this._keyHandler,!0);const i=this._container.querySelector(".mc-dialogue-box");i&&i.addEventListener("click",this._clickHandler=()=>this._advance())}_showBackdrop(e){this._currentBackdropUrl!==e&&(this._backdropFadeTimer&&(clearTimeout(this._backdropFadeTimer),this._backdropFadeTimer=null),this._storyBackdrop.classList.remove("fading-out"),this._storyBackdrop.style.backgroundImage=`url('${e}')`,this._storyBackdrop.classList.add("visible"),this._currentBackdropUrl=e)}_hideBackdrop(){this._currentBackdropUrl&&(this._storyBackdrop.classList.add("fading-out"),this._backdropFadeTimer=setTimeout(()=>{this._storyBackdrop.classList.remove("visible","fading-out"),this._storyBackdrop.style.backgroundImage="",this._currentBackdropUrl=null,this._backdropFadeTimer=null},600))}hide(){this._isVisible=!1,this._isTyping=!1,this._container.classList.remove("visible"),this._backdrop.classList.remove("visible"),this._textEl.textContent="",this._bannerEl.textContent="",this._promptEl.style.display="none",this._hideBackdrop(),this._currentAudio&&(this._currentAudio.pause(),this._currentAudio=null),this._voiceToggle.classList.remove("visible"),this._voicePrefix=null,document.removeEventListener("keydown",this._keyHandler,!0);const e=this._container.querySelector(".mc-dialogue-box");e&&this._clickHandler&&(e.removeEventListener("click",this._clickHandler),this._clickHandler=null)}update(e){this._isVisible&&this._isTyping&&this._updateTyping(e)}skip(){this._isTyping&&(this._displayedText=this._fullText,this._isTyping=!1,this._textEl.textContent=this._fullText,this._currentIndex<this._dialogueQueue.length-1?this._promptEl.textContent="▼ Press Space":this._promptEl.textContent="✦ Press Space to close",this._promptEl.style.display="block")}setVoiceMuted(e){this._voiceMuted=e,this._voiceToggle.classList.toggle("muted",e),this._voiceToggle.textContent=e?"🔇":"🔊",e&&this._currentAudio&&(this._currentAudio.pause(),this._currentAudio=null)}destroy(){this.hide(),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._backdrop&&this._backdrop.parentNode&&this._backdrop.parentNode.removeChild(this._backdrop),this._storyBackdrop&&this._storyBackdrop.parentNode&&this._storyBackdrop.parentNode.removeChild(this._storyBackdrop),this._voiceToggle&&this._voiceToggle.parentNode&&this._voiceToggle.parentNode.removeChild(this._voiceToggle)}}const Ho="mc-hud-styles",$m=`
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
`,Ln={fry_valley:{name:"Fry Valley",x:.3,y:.55,color:"#ffcc44"},burger_highlands:{name:"Burger Highlands",x:.3,y:.3,color:"#cc6633"},mcflurry_tundra:{name:"McFlurry Tundra",x:.3,y:.1,color:"#aaccff"},happy_meal_forest:{name:"Happy Meal Forest",x:.55,y:.55,color:"#44aa55"},drive_thru_desert:{name:"Drive-Thru Desert",x:.72,y:.5,color:"#ddaa66"},mccafe_springs:{name:"McCafé Springs",x:.55,y:.25,color:"#cc9966"},play_place_plains:{name:"Play Place Plains",x:.82,y:.35,color:"#ff88dd"},golden_arches_castle:{name:"Golden Arches Castle",x:.88,y:.15,color:"#ffd700"}},Ym=[["fry_valley","burger_highlands"],["fry_valley","happy_meal_forest"],["burger_highlands","mcflurry_tundra"],["happy_meal_forest","drive_thru_desert"],["drive_thru_desert","mccafe_springs"],["mcflurry_tundra","mccafe_springs"],["drive_thru_desert","play_place_plains"],["mccafe_springs","play_place_plains"],["play_place_plains","golden_arches_castle"]],jm={fry_valley:"Where the Golden Fries Grow",burger_highlands:"Misty Peaks of Flame",mcflurry_tundra:"Frozen Dairy Wastes",happy_meal_forest:"Whispers of the Toy",drive_thru_desert:"Endless Asphalt Sands",mccafe_springs:"Aromatic Healing Waters",play_place_plains:"Land of Wonder & Play",golden_arches_castle:"Throne of the McKing"};function Km(a){return typeof a=="string"?a:"#"+(a&16777215).toString(16).padStart(6,"0")}class Qm{constructor(){this._container=null,this._isVisible=!1,this._minimapCanvas=null,this._minimapCtx=null,this._goldEl=null,this._regionNameEl=null,this._regionSubEl=null,this._partyEl=null,this._questEl=null,this._questTextEl=null,this._controlsEl=null,this._controlsFadeTimer=null,this._currentRegion=null,this._playerPosition={x:.5,y:.5},this._injectStyles(),this._build()}_injectStyles(){if(document.getElementById(Ho))return;const e=document.createElement("style");e.id=Ho,e.textContent=$m,document.head.appendChild(e)}_build(){this._container=document.createElement("div"),this._container.className="mc-hud-overlay";const e=document.createElement("div");e.className="mc-hud-gold";const t=document.createElement("span");t.className="mc-hud-coin",e.appendChild(t),this._goldEl=document.createElement("span"),this._goldEl.textContent="0",this._goldEl.className="mc-hud-gold-amount",e.appendChild(this._goldEl),this._container.appendChild(e);const n=document.createElement("div");n.className="mc-hud-region",this._regionNameEl=document.createElement("div"),this._regionNameEl.className="mc-hud-region-name",this._regionNameEl.textContent="—",n.appendChild(this._regionNameEl),this._regionSubEl=document.createElement("div"),this._regionSubEl.className="mc-hud-region-sub",this._regionSubEl.textContent="",n.appendChild(this._regionSubEl),this._container.appendChild(n);const i=document.createElement("div");i.className="mc-hud-minimap",this._minimapCanvas=document.createElement("canvas"),this._minimapCanvas.width=180,this._minimapCanvas.height=140,i.appendChild(this._minimapCanvas);const s=document.createElement("div");s.className="mc-hud-minimap-label",s.textContent="World Map",i.appendChild(s),this._container.appendChild(i),this._minimapCtx=this._minimapCanvas.getContext("2d"),this._partyEl=document.createElement("div"),this._partyEl.className="mc-hud-party",this._container.appendChild(this._partyEl),this._questEl=document.createElement("div"),this._questEl.className="mc-hud-quest";const r=document.createElement("div");r.className="mc-hud-quest-title",r.textContent="⚔ Current Quest",this._questEl.appendChild(r),this._questTextEl=document.createElement("div"),this._questTextEl.className="mc-hud-quest-text",this._questTextEl.textContent="",this._questEl.appendChild(this._questTextEl),this._container.appendChild(this._questEl),this._controlsEl=document.createElement("div"),this._controlsEl.className="mc-hud-controls",this._controlsEl.innerHTML=`
      <span class="mc-hud-controls-key">↑↓←→</span> Move &nbsp;
      <span class="mc-hud-controls-key">E</span> Interact<br>
      <span class="mc-hud-controls-key">M</span> Menu &nbsp;
      <span class="mc-hud-controls-key">Tab</span> Map
    `,this._container.appendChild(this._controlsEl),document.body.appendChild(this._container)}_drawMinimap(){const e=this._minimapCtx,t=this._minimapCanvas.width,n=this._minimapCanvas.height;e.fillStyle="#2a1a08",e.fillRect(0,0,t,n),e.strokeStyle="rgba(204,136,0,0.08)",e.lineWidth=1;for(let i=0;i<t;i+=20)e.beginPath(),e.moveTo(i,0),e.lineTo(i,n),e.stroke();for(let i=0;i<n;i+=20)e.beginPath(),e.moveTo(0,i),e.lineTo(t,i),e.stroke();e.strokeStyle="rgba(255,215,0,0.35)",e.lineWidth=2;for(const[i,s]of Ym){const r=Ln[i],o=Ln[s];!r||!o||(e.beginPath(),e.moveTo(r.x*t,r.y*n),e.lineTo(o.x*t,o.y*n),e.stroke())}for(const[i,s]of Object.entries(Ln)){const r=s.x*t,o=s.y*n,l=i===this._currentRegion,c=l?7:4;if(l){const d=e.createRadialGradient(r,o,0,r,o,14);d.addColorStop(0,"rgba(255,215,0,0.6)"),d.addColorStop(1,"rgba(255,215,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(r,o,14,0,Math.PI*2),e.fill()}e.fillStyle=s.color,e.strokeStyle=l?"#ffd700":"rgba(204,136,0,0.5)",e.lineWidth=l?2:1,e.beginPath(),e.arc(r,o,c,0,Math.PI*2),e.fill(),e.stroke()}if(this._currentRegion&&Ln[this._currentRegion]){const i=Ln[this._currentRegion],s=i.x*t,r=i.y*n,o=(this._playerPosition.x-.5)*20,l=(this._playerPosition.y-.5)*16,c=s+o,d=r+l;e.fillStyle="#ffffff",e.strokeStyle="#ffd700",e.lineWidth=1.5,e.beginPath(),e.moveTo(c,d-5),e.lineTo(c-4,d+3),e.lineTo(c+4,d+3),e.closePath(),e.fill(),e.stroke()}e.strokeStyle="rgba(255,215,0,0.3)",e.lineWidth=1,e.strokeRect(.5,.5,t-1,n-1)}_renderParty(e){if(this._partyEl.innerHTML="",!(!e||e.length===0))for(const t of e){const n=document.createElement("div");n.className="mc-hud-party-member";const i=document.createElement("div");i.className="mc-hud-party-header";const s=document.createElement("span");s.className="mc-hud-party-name",s.textContent=t.name||t.id||"Unknown";const r=Km(t.color||16766720);s.style.color=r,s.style.textShadow=`1px 1px 2px rgba(0,0,0,0.8), 0 0 8px ${r}66`,i.appendChild(s);const o=document.createElement("span");o.className="mc-hud-party-level";const l=t.level||1;o.textContent=`Lv ${l}`,i.appendChild(o),n.appendChild(i);const c=t.baseStats||t.stats||{},d=c.hp||t.maxHp||100,f=t.currentHp!==void 0?t.currentHp:d,h=Math.max(0,Math.min(100,f/d*100)),p=document.createElement("div");p.className="mc-hud-bar-row";const _=document.createElement("span");_.className="mc-hud-bar-label",_.textContent="HP",p.appendChild(_);const g=document.createElement("div");g.className="mc-hud-bar-bg";const m=document.createElement("div");m.className="mc-hud-bar-fill mc-hud-hp-fill",m.style.width=`${h}%`,g.appendChild(m),p.appendChild(g);const u=document.createElement("span");u.className="mc-hud-bar-text",u.textContent=`${Math.ceil(f)}/${d}`,p.appendChild(u),n.appendChild(p);const v=c.mp||t.maxMp||50,x=t.currentMp!==void 0?t.currentMp:v,M=Math.max(0,Math.min(100,x/v*100)),R=document.createElement("div");R.className="mc-hud-bar-row";const T=document.createElement("span");T.className="mc-hud-bar-label",T.textContent="MP",R.appendChild(T);const A=document.createElement("div");A.className="mc-hud-bar-bg";const k=document.createElement("div");k.className="mc-hud-bar-fill mc-hud-mp-fill",k.style.width=`${M}%`,A.appendChild(k),R.appendChild(A);const y=document.createElement("span");y.className="mc-hud-bar-text",y.textContent=`${Math.ceil(x)}/${v}`,R.appendChild(y),n.appendChild(R),this._partyEl.appendChild(n)}}_showControlsHint(){this._controlsFadeTimer&&clearTimeout(this._controlsFadeTimer),this._controlsEl.style.removeProperty("animation"),this._controlsEl.style.opacity="1",this._controlsEl.style.pointerEvents="none",this._controlsEl.offsetWidth,this._controlsEl.style.animation="mc-hud-fade-out 6s ease-in-out forwards"}update(e,t,n,i){if(!this._isVisible)return;t&&Ln[t]?(this._currentRegion=t,this._regionNameEl.textContent=Ln[t].name,this._regionSubEl.textContent=jm[t]||""):t&&(this._currentRegion=t,this._regionNameEl.textContent=t,this._regionSubEl.textContent=""),n&&(this._playerPosition={x:n.x||.5,y:n.y||.5}),this._renderParty(e);const s=e&&e.gold!==void 0?e.gold:this._lastGold||0;this._lastGold=s,this._goldEl.textContent=s.toLocaleString(),i?(this._questEl.classList.add("visible"),this._questTextEl.textContent=i):this._questEl.classList.remove("visible"),this._drawMinimap()}show(){this._container.classList.add("visible"),this._isVisible=!0,this._showControlsHint(),this._drawMinimap()}hide(){this._container.classList.remove("visible"),this._isVisible=!1}destroy(){this._controlsFadeTimer&&clearTimeout(this._controlsFadeTimer),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container)}}const Zm="modulepreload",Jm=function(a){return"/"+a},Go={},e0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Jm(l),l in Go)return;Go[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Zm,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Vo={1:"♛",2:"♜",3:"♝",4:"♞",5:"♟"},t0={1:"Supreme Commander",2:"High Commander",3:"Commander",4:"Lieutenant",5:"Ensign"},Wo={fire:"#e8503a",water:"#3a7be8",earth:"#8b6b3a",air:"#a8c8e8",light:"#f5d76e",dark:"#6a4a7a",lightning:"#f0c040",ice:"#80c8e8",nature:"#4a8b4a",none:"#b0b0b0"};function qo(a){return Wo[a]||Wo.none}const n0=`
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
`;let Xo=!1;function i0(){if(Xo)return;const a=document.createElement("style");a.id="mc-nemesis-styles",a.textContent=n0,document.head.appendChild(a),Xo=!0}class s0{constructor(){this.nemesisSystem=null,this.lieutenants=[],this.selectedId=null,this.overlay=null,this.visible=!1,this._keyHandler=null,this._onClose=null}show(e,t){i0(),this.nemesisSystem=e,this._onClose=t||null,this.lieutenants=e&&typeof e.getHierarchy=="function"?e.getHierarchy():[],this.selectedId=null,this.visible=!0,this._render(),this._bindKeys()}hide(){this.visible=!1,this.selectedId=null,this._unbindKeys(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}selectLieutenant(e){this.selectedId=e,this._renderDetailPanel(),this._highlightNode()}_bindKeys(){this._keyHandler=e=>{e.key==="Escape"&&(e.preventDefault(),this.hide(),this._onClose&&this._onClose())},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-nemesis-overlay";const e=document.createElement("div");e.className="mc-nemesis-header",e.innerHTML=`
      <h2 class="mc-nemesis-title">⚔ Nemesis Hierarchy ⚔</h2>
      <div class="mc-nemesis-subtitle">The Burger King's Dread Command</div>
      <div class="mc-nemesis-legend">
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gold"></span> Command</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-red"></span> Rivalry</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gray"></span> Deceased</div>
      </div>
    `;const t=document.createElement("button");t.className="mc-nemesis-close-btn",t.textContent="✕ Close",t.onclick=()=>{this.hide(),this._onClose&&this._onClose()},e.appendChild(t),this.overlay.appendChild(e);const n=document.createElement("div");n.className="mc-nemesis-body";const i=document.createElement("div");i.className="mc-nemesis-tree-container",i.id="mc-nemesis-tree-container",n.appendChild(i);const s=document.createElement("div");s.className="mc-nemesis-detail-panel",s.id="mc-nemesis-detail-panel",s.innerHTML='<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>',n.appendChild(s),this.overlay.appendChild(n),document.body.appendChild(this.overlay),this._renderTree(i),this._renderDetailPanel()}_renderTree(e){if(e.innerHTML="",this.lieutenants.length===0){e.innerHTML='<div class="mc-nemesis-detail-empty">No nemesis data available.</div>';return}const t=[...this.lieutenants].sort((g,m)=>(g.rank||5)-(m.rank||5)),n={};for(const g of t){const m=g.rank||5;n[m]||(n[m]=[]),n[m].push(g)}const i=Object.keys(n).map(Number).sort((g,m)=>g-m),s=Math.max(...i.map(g=>n[g].length)),r=140,o=150,l=Math.max(s*r,600),c=i.length*o+40,d={},f=[];i.forEach((g,m)=>{const u=n[g],v=u.length*r,x=(l-v)/2;u.forEach((M,R)=>{const T=x+R*r+r/2,A=m*o+30;d[M.id]={x:T,y:A},f.push({lt:M,x:T,y:A})})});const h=document.createElement("div");h.className="mc-nemesis-tree",h.style.width=l+"px",h.style.height=c+"px";const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.classList.add("mc-nemesis-svg-lines"),p.setAttribute("width",l),p.setAttribute("height",c),p.style.width=l+"px",p.style.height=c+"px";const _={};for(const g of this.lieutenants)_[g.id]=g;for(let g=1;g<i.length;g++){const m=i[g],u=n[m],v=n[i[g-1]];for(const x of u){let M=null,R=1/0;x.rivals;for(const T of v){const A=d[x.id],k=d[T.id],y=Math.hypot(A.x-k.x,A.y-k.y);y<R&&(R=y,M=T)}if(M){const T=d[x.id],A=d[M.id],k=document.createElementNS("http://www.w3.org/2000/svg","line");k.setAttribute("x1",A.x),k.setAttribute("y1",A.y+32),k.setAttribute("x2",T.x),k.setAttribute("y2",T.y-32),k.setAttribute("stroke","#c8a050"),k.setAttribute("stroke-width","2"),k.setAttribute("opacity","0.5"),p.appendChild(k)}}}for(const g of this.lieutenants)if(g.rivals&&Array.isArray(g.rivals)){for(const m of g.rivals)if(d[g.id]&&d[m]){const u=d[g.id],v=d[m],x=`rival-${[g.id,m].sort().join("-")}`;if(p.querySelector(`[data-rival="${x}"]`))continue;const M=document.createElementNS("http://www.w3.org/2000/svg","line");M.setAttribute("x1",u.x),M.setAttribute("y1",u.y),M.setAttribute("x2",v.x),M.setAttribute("y2",v.y),M.setAttribute("stroke","#cc4444"),M.setAttribute("stroke-width","2"),M.setAttribute("stroke-dasharray","5,3"),M.setAttribute("opacity","0.6"),M.setAttribute("data-rival",x),p.appendChild(M)}}h.appendChild(p);for(const{lt:g,x:m,y:u}of f){const v=document.createElement("div");v.className="mc-nemesis-node",v.dataset.id=g.id,v.style.left=m-32+"px",v.style.top=u-32+"px",g.alive||v.classList.add("mc-nemesis-node-dead"),g.shamed&&v.classList.add("mc-nemesis-node-shamed"),this.selectedId===g.id&&v.classList.add("mc-nemesis-node-selected");const x=qo(g.element),M=document.createElement("div");M.className="mc-nemesis-node-portrait",M.style.background=`radial-gradient(circle at 35% 35%, ${x}, ${x}99, ${x}55)`;const R=g.name?g.name.charAt(0).toUpperCase():"?";M.textContent=R,v.appendChild(M);const T=document.createElement("div");T.className="mc-nemesis-node-info";const A=document.createElement("div");A.className="mc-nemesis-node-name",A.textContent=g.name||"Unknown",T.appendChild(A);const k=document.createElement("div");k.className="mc-nemesis-node-rank",k.textContent=Vo[g.rank]||"♟",T.appendChild(k);const y=document.createElement("div");y.className="mc-nemesis-node-level",y.textContent=`Lv ${g.level||"?"}`,T.appendChild(y);const w=document.createElement("span");w.className="mc-nemesis-node-status-tag",g.alive?g.shamed?(w.classList.add("mc-nemesis-tag-shamed"),w.textContent="Shamed"):(w.classList.add("mc-nemesis-tag-alive"),w.textContent="Active"):(w.classList.add("mc-nemesis-tag-dead"),w.textContent="Fallen"),T.appendChild(w),v.appendChild(T),v.onclick=()=>this.selectLieutenant(g.id),h.appendChild(v)}e.appendChild(h)}_highlightNode(){this.overlay.querySelectorAll(".mc-nemesis-node").forEach(t=>{t.dataset.id===String(this.selectedId)?t.classList.add("mc-nemesis-node-selected"):t.classList.remove("mc-nemesis-node-selected")})}_renderDetailPanel(){const e=this.overlay.querySelector("#mc-nemesis-detail-panel");if(!e)return;if(!this.selectedId){e.innerHTML='<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>';return}const t=this.lieutenants.find(o=>String(o.id)===String(this.selectedId));if(!t){e.innerHTML='<div class="mc-nemesis-detail-empty">Lieutenant not found.</div>';return}const n=qo(t.element),i=t0[t.rank]||"Unknown Rank",s=Vo[t.rank]||"♟";let r="";if(r+='<div style="text-align:center; margin-bottom: 16px;">',r+=`<div style="width:80px;height:80px;border-radius:50%;border:3px solid #c8a050;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,0.7);background:radial-gradient(circle at 35% 35%, ${n}, ${n}99, ${n}55);">`,r+=t.name?t.name.charAt(0).toUpperCase():"?",r+="</div>",r+=`<div class="mc-nemesis-detail-name">${t.name||"Unknown"}</div>`,r+=`<div class="mc-nemesis-detail-title">${s} ${i} · Level ${t.level||"?"}</div>`,t.alive||(r+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-dead">Fallen in Battle</span> '),t.shamed&&(r+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-shamed">Disgraced</span>'),t.alive&&!t.shamed&&(r+='<span class="mc-nemesis-node-status-tag mc-nemesis-tag-alive">Active Threat</span>'),r+="</div>",r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Element</div>',r+=`<span class="mc-nemesis-element-badge" style="background:${n};">${t.element?t.element.charAt(0).toUpperCase()+t.element.slice(1):"None"}</span>`,r+="</div>",t.stats){r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Combat Stats</div>',r+='<div class="mc-nemesis-stat-grid">';const o={hp:"HP",mp:"MP",atk:"ATK",def:"DEF",agi:"AGI",mag:"MAG"};for(const[l,c]of Object.entries(o)){const d=t.stats[l];d!=null&&(r+=`<div class="mc-nemesis-stat-row"><span class="mc-nemesis-stat-label">${c}</span><span class="mc-nemesis-stat-value">${d}</span></div>`)}r+="</div></div>"}if(t.strengths&&t.strengths.length>0&&(r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Strengths</div>',r+=`<div class="mc-nemesis-detail-value">${t.strengths.join(", ")}</div>`,r+="</div>"),t.weaknesses&&t.weaknesses.length>0&&(r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Weaknesses</div>',r+=`<div class="mc-nemesis-detail-value">${t.weaknesses.join(", ")}</div>`,r+="</div>"),t.personality&&(r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Personality</div>',r+=`<div class="mc-nemesis-detail-value">${t.personality}</div>`,r+="</div>"),t.grudges&&t.grudges.length>0){r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Grudges</div>',r+='<div class="mc-nemesis-detail-value">';for(const o of t.grudges)r+=`• ${o}<br>`;r+="</div></div>"}if(t.rivals&&t.rivals.length>0){const o=t.rivals.map(l=>{const c=this.lieutenants.find(d=>String(d.id)===String(l));return c?c.name:l});r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Rivals</div>',r+=`<div class="mc-nemesis-detail-value" style="color:#cc6666;">${o.join(", ")}</div>`,r+="</div>"}t.revealed&&t.backstory?(r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Backstory</div>',r+=`<div class="mc-nemesis-detail-value" style="font-style:italic;">${t.backstory}</div>`,r+="</div>"):t.revealed||(r+='<div class="mc-nemesis-detail-section">',r+='<div class="mc-nemesis-detail-label">Backstory</div>',r+='<div class="mc-nemesis-detail-value" style="font-style:italic;color:#665540;">? ? ? — Secrets yet to be uncovered ? ? ?</div>',r+="</div>"),e.innerHTML=r}}const a0=`
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
`;let $o=!1;function r0(){if($o)return;const a=document.createElement("style");a.id="mc-save-styles",a.textContent=a0,document.head.appendChild(a),$o=!0}const an=["mcchronicles_save_0","mcchronicles_save_1","mcchronicles_save_2","mcchronicles_save_3","mcchronicles_save_4"],o0={fry_valley:"Fry Valley",burger_highlands:"Burger Highlands",mcflurry_tundra:"McFlurry Tundra",happy_meal_forest:"Happy Meal Forest",drive_thru_desert:"Drive-Thru Desert",mccafe_springs:"McCafé Springs",play_place_plains:"Play Place Plains",golden_arches_castle:"Golden Arch Castle"};function l0(a){if(!a||a<0)return"0:00";const e=Math.floor(a/3600),t=Math.floor(a%3600/60),n=Math.floor(a%60);return e>0?`${e}h ${t}m`:`${t}m ${n}s`}function c0(a){if(!a)return"—";try{const e=new Date(a),t=e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),n=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});return`${t}, ${n}`}catch{return"—"}}class d0{constructor(){this.mode="save",this.game=null,this.overlay=null,this.visible=!1,this.selectedSlot=null,this._keyHandler=null,this._onClose=null,this._toastTimer=null}show(e,t,n){r0(),this.mode=e||"save",this.game=t||null,this._onClose=n||null,this.selectedSlot=null,this.visible=!0,this._render(),this._bindKeys()}hide(){this.visible=!1,this.selectedSlot=null,this._unbindKeys(),this._toastTimer&&(clearTimeout(this._toastTimer),this._toastTimer=null),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}save(e){if(!this.game){this._showToast("No game data available to save.");return}if(e<0||e>=an.length)return;const t={name:`Save ${e+1}`,timestamp:Date.now(),playtime:this.game.playtime||0,partyLevel:this.game.partyLevel||1,currentRegion:this.game.currentRegion||"fry_valley",gameState:this.game.serialize?this.game.serialize():{...this.game}};this._showNamingDialog(e,t)}load(e){if(e<0||e>=an.length)return;const t=localStorage.getItem(an[e]);if(!t){this._showToast("That slot is empty.");return}try{const n=JSON.parse(t);this.game&&this.game.deserialize&&this.game.deserialize(n.gameState),this._showToast(`Loaded "${n.name}" successfully!`),setTimeout(()=>{this.hide(),this._onClose&&this._onClose("load",n)},800)}catch{this._showToast("Failed to load save: corrupted data.")}}deleteSlot(e){if(e<0||e>=an.length)return;if(!localStorage.getItem(an[e])){this._showToast("That slot is already empty.");return}this._showConfirmDialog("Delete this save? This cannot be undone.",()=>{localStorage.removeItem(an[e]),this._showToast("Save deleted."),this._renderSlots()})}_bindKeys(){this._keyHandler=e=>{e.key==="Escape"&&(e.preventDefault(),this.hide(),this._onClose&&this._onClose("cancel"))},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_getSaveData(e){const t=localStorage.getItem(an[e]);if(!t)return null;try{return JSON.parse(t)}catch{return null}}_hasAutoSave(){return localStorage.getItem("mcchronicles_autosave")!==null}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-save-overlay";const e=document.createElement("button");e.className="mc-save-close-btn",e.textContent="✕ Close",e.onclick=()=>{this.hide(),this._onClose&&this._onClose("cancel")},this.overlay.appendChild(e);const t=document.createElement("div");t.className="mc-save-header";const n=this.mode==="save"?"📜 Save Your Quest 📜":"📖 Load a Saved Quest 📖";t.innerHTML=`
      <h2 class="mc-save-title">${n}</h2>
      <div class="mc-save-subtitle">${this.mode==="save"?"Preserve your adventure for a future day":"Continue a journey once paused"}</div>
    `;const i=document.createElement("div");if(i.className=`mc-save-mode-indicator ${this.mode==="save"?"mc-save-mode-save":"mc-save-mode-load"}`,i.textContent=this.mode==="save"?"⬇ Saving":"⬆ Loading",t.appendChild(i),this._hasAutoSave()){const r=document.createElement("div");r.className="mc-save-autosave-indicator",r.innerHTML='<span class="mc-save-autosave-dot"></span> Auto-save active',t.appendChild(r)}this.overlay.appendChild(t);const s=document.createElement("div");s.className="mc-save-slots",s.id="mc-save-slots",this.overlay.appendChild(s),this._renderSlots(),document.body.appendChild(this.overlay)}_renderSlots(){const e=this.overlay.querySelector("#mc-save-slots");if(e){e.innerHTML="";for(let t=0;t<an.length;t++){const n=this._getSaveData(t),i=document.createElement("div");i.className="mc-save-slot",n||i.classList.add("mc-save-slot-empty"),this.selectedSlot===t&&i.classList.add("mc-save-slot-selected");const s=document.createElement("div");s.className="mc-save-slot-number",s.textContent=(t+1).toString().padStart(2,"0"),i.appendChild(s);const r=document.createElement("div");if(r.className="mc-save-slot-info",n){const l=document.createElement("div");l.className="mc-save-slot-name",l.textContent=n.name||`Save ${t+1}`,r.appendChild(l);const c=document.createElement("div");c.className="mc-save-slot-meta",c.appendChild(this._metaItem("⏱",l0(n.playtime))),c.appendChild(this._metaItem("Lv",n.partyLevel||1)),c.appendChild(this._metaItem("📍",o0[n.currentRegion]||n.currentRegion||"Unknown")),c.appendChild(this._metaItem("🕒",c0(n.timestamp))),r.appendChild(c)}else{const l=document.createElement("div");l.className="mc-save-slot-empty-label",l.textContent="— Empty Slot —",r.appendChild(l);const c=document.createElement("div");c.className="mc-save-slot-meta",c.style.color="#665540",c.textContent=this.mode==="save"?"Click to create a new save":"No data to load",r.appendChild(c)}i.appendChild(r);const o=document.createElement("div");if(o.className="mc-save-slot-actions",this.mode==="save"){const l=document.createElement("button");if(l.className="mc-save-action-btn",l.textContent=n?"Overwrite":"Save Here",l.onclick=c=>{c.stopPropagation(),this.save(t)},o.appendChild(l),n){const c=document.createElement("button");c.className="mc-save-action-btn mc-save-action-btn-delete",c.textContent="Delete",c.onclick=d=>{d.stopPropagation(),this.deleteSlot(t)},o.appendChild(c)}}else{const l=document.createElement("button");if(l.className="mc-save-action-btn",l.textContent="Load",l.disabled=!n,l.onclick=c=>{c.stopPropagation(),n&&this.load(t)},o.appendChild(l),n){const c=document.createElement("button");c.className="mc-save-action-btn mc-save-action-btn-delete",c.textContent="Delete",c.onclick=d=>{d.stopPropagation(),this.deleteSlot(t)},o.appendChild(c)}}i.appendChild(o),i.onclick=()=>{this.selectedSlot=t,this._renderSlots()},e.appendChild(i)}}}_metaItem(e,t){const n=document.createElement("span");return n.className="mc-save-slot-meta-item",n.innerHTML=`<span class="mc-save-slot-meta-label">${e}</span><span class="mc-save-slot-meta-value">${t}</span>`,n}_showNamingDialog(e,t){const n=document.createElement("div");n.className="mc-save-confirmation",n.id="mc-save-naming-dialog";const i=this._getSaveData(e),s=i?i.name:`Save ${e+1}`;n.innerHTML=`
      <div style="font-size:16px;color:#f5d090;font-weight:bold;margin-bottom:14px;">Name Your Save</div>
      <input type="text" class="mc-save-naming-input" id="mc-save-name-input" value="${this._escapeHtml(s)}" maxlength="30" />
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn" id="mc-save-confirm-save">Confirm Save</button>
        <button class="mc-save-confirm-btn" id="mc-save-cancel-save">Cancel</button>
      </div>
    `,this.overlay.appendChild(n);const r=n.querySelector("#mc-save-name-input");r.focus(),r.select();const o=()=>{const c=r.value.trim()||`Save ${e+1}`;t.name=c;try{localStorage.setItem(an[e],JSON.stringify(t)),this._showToast(`Saved "${c}" to Slot ${e+1}!`),n.remove(),this._renderSlots()}catch{this._showToast("Failed to save: storage may be full."),n.remove()}},l=()=>{n.remove()};n.querySelector("#mc-save-confirm-save").onclick=o,n.querySelector("#mc-save-cancel-save").onclick=l,r.onkeydown=c=>{c.key==="Enter"?(c.preventDefault(),o()):c.key==="Escape"&&(c.preventDefault(),l())}}_showConfirmDialog(e,t){const n=document.createElement("div");n.className="mc-save-confirmation",n.innerHTML=`
      <div class="mc-save-confirmation-text">${e}</div>
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn mc-save-confirm-btn-danger" id="mc-confirm-yes">Delete</button>
        <button class="mc-save-confirm-btn" id="mc-confirm-no">Keep</button>
      </div>
    `,this.overlay.appendChild(n),n.querySelector("#mc-confirm-yes").onclick=()=>{n.remove(),t()},n.querySelector("#mc-confirm-no").onclick=()=>{n.remove()}}_showToast(e){this._toastTimer&&clearTimeout(this._toastTimer);const t=this.overlay.querySelector(".mc-save-toast");t&&t.remove();const n=document.createElement("div");n.className="mc-save-toast",n.textContent=e,this.overlay.appendChild(n),this._toastTimer=setTimeout(()=>{n.parentNode&&n.remove()},2500)}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}}const ps=[{id:"fry_valley",name:"Fry Valley",x:.25,y:.55},{id:"burger_highlands",name:"Burger Highlands",x:.32,y:.28},{id:"mcflurry_tundra",name:"McFlurry Tundra",x:.48,y:.15},{id:"happy_meal_forest",name:"Happy Meal Forest",x:.15,y:.72},{id:"drive_thru_desert",name:"Drive-Thru Desert",x:.42,y:.72},{id:"mccafe_springs",name:"McCafé Springs",x:.58,y:.48},{id:"play_place_plains",name:"Play Place Plains",x:.68,y:.68},{id:"golden_arches_castle",name:"Golden Arch Castle",x:.85,y:.55}],h0={fry_valley:["burger_highlands","happy_meal_forest"],burger_highlands:["fry_valley","mcflurry_tundra"],mcflurry_tundra:["burger_highlands","mccafe_springs"],happy_meal_forest:["fry_valley","drive_thru_desert"],drive_thru_desert:["happy_meal_forest","mccafe_springs","play_place_plains"],mccafe_springs:["mcflurry_tundra","drive_thru_desert","play_place_plains"],play_place_plains:["drive_thru_desert","mccafe_springs","golden_arches_castle"],golden_arches_castle:["play_place_plains"]},u0=`
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
`;let Yo=!1;function p0(){if(Yo)return;const a=document.createElement("style");a.id="mc-menu-styles",a.textContent=u0,document.head.appendChild(a),Yo=!0}const jo={consumable:"🧪",equipment:"⚔",accessory:"💍",key_item:"🗝",craft:"🔨"},Ko={consumable:"Consumable",equipment:"Equipment",accessory:"Accessory",key_item:"Key Item",craft:"Crafting"},Qo={fire:"🔥",water:"💧",earth:"🏔",air:"💨",light:"✨",dark:"🌑",lightning:"⚡",ice:"❄",nature:"🌿",none:"⭐"};function ya(a){return typeof a!="number"?"#c8a050":"#"+(a&16777215).toString(16).padStart(6,"0")}function f0(a){const e=ps.find(t=>t.id===a);return e?e.name:a}const rn=[{id:"party",label:"Party",icon:"👥"},{id:"items",label:"Items",icon:"🎒"},{id:"abilities",label:"Abilities",icon:"✨"},{id:"map",label:"Map",icon:"🗺"},{id:"nemesis",label:"Nemesis",icon:"⚔"},{id:"quests",label:"Quests",icon:"📜"},{id:"familiars",label:"Familiars",icon:"🐾"},{id:"save",label:"Save",icon:"💾"}];class m0{constructor(){this.party=[],this.nemesisSystem=null,this.questSystem=null,this.currentTab="party",this.overlay=null,this.visible=!1,this.selectedMemberIdx=0,this.selectedAbilityMemberIdx=0,this.currentRegion="fry_valley",this.discoveredRegions=new Set(["fry_valley"]),this.inventory={},this.abilitiesData={},this.itemsData={},this.sideQuests=[],this.activeQuests=[],this._keyHandler=null,this._nemesisMenu=new s0,this._saveMenu=new d0,this._familiarMenu=null,this._tabFocusIdx=0,this._detailOverlay=null,this._actionPopup=null}show(e,t,n){p0(),this.party=e||[],this.nemesisSystem=t||null,this.questSystem=n||null,n&&(this.sideQuests=n.sideQuests||n.availableQuests||[],this.activeQuests=n.activeQuests||[],this.currentRegion=n.currentRegion||this.currentRegion,this.discoveredRegions=new Set(n.discoveredRegions||["fry_valley"])),n&&n.inventory&&(this.inventory=n.inventory),n&&n.items&&(this.itemsData=n.items),n&&n.abilities&&(this.abilitiesData=n.abilities),t&&t.currentRegion&&(this.currentRegion=t.currentRegion),t&&t.discoveredRegions&&(this.discoveredRegions=new Set(t.discoveredRegions)),this.visible=!0,this.currentTab="party",this._tabFocusIdx=0,this._render(),this._bindKeys()}hide(){this.visible=!1,this._unbindKeys(),this._closeDetail(),this._closeActionPopup(),this._nemesisMenu.hide(),this._saveMenu.hide(),this._familiarMenu&&this._familiarMenu.hide&&this._familiarMenu.hide(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null}update(){!this.visible||!this.overlay||this._renderTabContent(this.currentTab)}_bindKeys(){this._keyHandler=e=>{if(e.key==="Escape"){if(e.preventDefault(),this._detailOverlay){this._closeDetail();return}if(this._actionPopup){this._closeActionPopup();return}this.hide();return}e.key==="ArrowUp"?(e.preventDefault(),this._tabFocusIdx=(this._tabFocusIdx-1+rn.length)%rn.length,this._switchTab(rn[this._tabFocusIdx].id)):e.key==="ArrowDown"&&(e.preventDefault(),this._tabFocusIdx=(this._tabFocusIdx+1)%rn.length,this._switchTab(rn[this._tabFocusIdx].id))},document.addEventListener("keydown",this._keyHandler)}_unbindKeys(){this._keyHandler&&(document.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)}_switchTab(e){if(this.currentTab==="nemesis"&&this._nemesisMenu.visible||this.currentTab==="save"&&this._saveMenu.visible||this.currentTab==="familiars"&&this._familiarMenu&&this._familiarMenu.visible)return;this.currentTab=e,this._tabFocusIdx=rn.findIndex(i=>i.id===e),this._closeDetail(),this._closeActionPopup(),this.overlay.querySelectorAll(".mc-menu-tab").forEach((i,s)=>{rn[s].id===e?i.classList.add("mc-menu-tab-active"):i.classList.remove("mc-menu-tab-active")}),this.overlay.querySelectorAll(".mc-menu-tab-panel").forEach(i=>{i.dataset.tab===e?i.classList.add("mc-menu-tab-panel-active"):i.classList.remove("mc-menu-tab-panel-active")}),this._renderTabContent(e)}_render(){this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=document.createElement("div"),this.overlay.className="mc-menu-overlay";const e=document.createElement("div");e.className="mc-menu-header",e.innerHTML='<h2 class="mc-menu-title">⚜ McChronicles ⚜</h2>';const t=document.createElement("button");t.className="mc-menu-close-btn",t.textContent="✕ Close (Esc)",t.onclick=()=>this.hide(),e.appendChild(t),this.overlay.appendChild(e);const n=document.createElement("div");n.className="mc-menu-body";const i=document.createElement("div");i.className="mc-menu-tabs",rn.forEach((r,o)=>{const l=document.createElement("button");l.className="mc-menu-tab",o===this._tabFocusIdx&&l.classList.add("mc-menu-tab-active"),l.innerHTML=`<span class="mc-menu-tab-icon">${r.icon}</span> ${r.label}`,l.onclick=()=>{this._tabFocusIdx=o,this._switchTab(r.id)},i.appendChild(l)}),n.appendChild(i);const s=document.createElement("div");s.className="mc-menu-content",s.id="mc-menu-content",rn.forEach(r=>{const o=document.createElement("div");o.className="mc-menu-tab-panel",o.dataset.tab=r.id,r.id===this.currentTab&&o.classList.add("mc-menu-tab-panel-active"),o.id=`mc-panel-${r.id}`,s.appendChild(o)}),n.appendChild(s),this.overlay.appendChild(n),document.body.appendChild(this.overlay),this._renderTabContent(this.currentTab)}_renderTabContent(e){switch(e){case"party":this._renderPartyTab();break;case"items":this._renderItemsTab();break;case"abilities":this._renderAbilitiesTab();break;case"map":this._renderMapTab();break;case"nemesis":this._renderNemesisTab();break;case"quests":this._renderQuestsTab();break;case"familiars":this._renderFamiliarsTab();break;case"save":this._renderSaveTab();break}}_renderPartyTab(){const e=this.overlay.querySelector("#mc-panel-party");if(!e)return;if(e.innerHTML="",this.party.length===0){e.innerHTML='<div class="mc-items-empty">No party members yet. Your adventure awaits!</div>';return}const t=document.createElement("div");t.className="mc-party-grid",this.party.forEach((n,i)=>{const s=document.createElement("div");s.className="mc-party-card",this.selectedMemberIdx===i&&s.classList.add("mc-party-card-selected");const r=ya(n.color),o=n.name?n.name.charAt(0).toUpperCase():"?",l=n.baseStats||{},c=l.hp||0,d=l.mp||0,f=c,h=d;s.innerHTML=`
        <div class="mc-party-card-top">
          <div class="mc-party-portrait" style="background: radial-gradient(circle at 35% 35%, ${r}, ${r}aa, ${r}66);">${o}</div>
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
        <div class="mc-party-bar-label"><span>HP</span><span>${f}/${f}</span></div>
        <div class="mc-party-hp-bar"><div class="mc-party-hp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-bar-label"><span>MP</span><span>${h}/${h}</span></div>
        <div class="mc-party-mp-bar"><div class="mc-party-mp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-equipped">
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${n.weapon||"—"}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${n.armor||"—"}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${n.accessory||"—"}</span></div>
        </div>
      `,s.onclick=()=>{this.selectedMemberIdx=i,this._showPartyDetail(n,i),this._renderPartyTab()},t.appendChild(s)}),e.appendChild(t),this._detailOverlay&&this.selectedMemberIdx!==null&&this._showPartyDetail(this.party[this.selectedMemberIdx],this.selectedMemberIdx)}_showPartyDetail(e,t){if(this._closeDetail(),!e)return;const n=document.createElement("div");n.className="mc-party-detail-overlay",n.id="mc-party-detail";const i=ya(e.color),s=e.name?e.name.charAt(0).toUpperCase():"?",r=e.baseStats||{},o=Qo[e.element]||"⭐";let l='<button class="mc-party-detail-close" id="mc-detail-close">✕</button>';if(l+='<div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">',l+=`<div class="mc-party-portrait" style="width:64px;height:64px;font-size:28px;background:radial-gradient(circle at 35% 35%, ${i}, ${i}aa, ${i}66);">${s}</div>`,l+=`<div><div class="mc-party-name" style="font-size:20px;">${e.name||"Unknown"}</div>`,l+=`<div class="mc-party-title">${e.title||""}</div>`,l+=`<div class="mc-party-level">Level ${e.level||1} · ${o} ${e.element||"None"} · ${e.role||"Adventurer"}</div></div></div>`,e.description&&(l+=`<div class="mc-party-detail-description">${e.description}</div>`),l+='<div class="mc-party-detail-section-title">Base Stats</div>',l+='<div class="mc-party-stats">',l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">HP</span><span class="mc-party-stat-value">${r.hp||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">MP</span><span class="mc-party-stat-value">${r.mp||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">ATK</span><span class="mc-party-stat-value">${r.atk||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">DEF</span><span class="mc-party-stat-value">${r.def||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">AGI</span><span class="mc-party-stat-value">${r.agi||0}</span></div>`,l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">MAG</span><span class="mc-party-stat-value">${r.mag||0}</span></div>`,l+="</div>",e.growth){l+='<div class="mc-party-detail-section-title">Growth Rates</div>',l+='<div class="mc-party-stats">';const c=e.growth;for(const[d,f]of Object.entries(c))l+=`<div class="mc-party-stat-row"><span class="mc-party-stat-label">${d.toUpperCase()}</span><span class="mc-party-stat-value">+${f}</span></div>`;l+="</div>"}if(l+='<div class="mc-party-detail-section-title">Equipment</div>',l+='<div class="mc-party-equipped">',l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${e.weapon||"—"}</span></div>`,l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${e.armor||"—"}</span></div>`,l+=`<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${e.accessory||"—"}</span></div>`,l+="</div>",e.abilityTree&&e.abilityTree.length>0){l+='<div class="mc-party-detail-section-title">Abilities</div>',l+='<ul class="mc-party-ability-list">';for(const c of e.abilityTree){const d=c.ability||"Unknown",f=this.abilitiesData[d]||this.abilitiesData[c.ability]||null,h=f?f.description:"",p=(e.level||1)<(c.level||1);l+=`<li class="mc-party-ability-item ${p?"mc-ability-locked":""}">`,l+=`<div class="mc-party-ability-name">${p?"🔒 ":""}${d}`,l+=` <span style="font-size:11px;color:#a89070;">(Lv ${c.level})</span></div>`,h&&(l+=`<div class="mc-party-ability-desc">${h}</div>`),l+="</li>"}l+="</ul>"}n.innerHTML=l,this.overlay.querySelector("#mc-menu-content").appendChild(n),this._detailOverlay=n,n.querySelector("#mc-detail-close").onclick=()=>this._closeDetail()}_closeDetail(){this._detailOverlay&&(this._detailOverlay.remove(),this._detailOverlay=null)}_renderItemsTab(){const e=this.overlay.querySelector("#mc-panel-items");if(!e)return;if(e.innerHTML="",Object.keys(this.inventory||{}).length===0&&Object.entries(this.itemsData||{}).length===0){e.innerHTML='<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';return}const n=document.createElement("div");n.className="mc-items-grid";const i=Object.entries(this.inventory||{}),s=Object.entries(this.itemsData||{}).filter(([o])=>!this.inventory||!(o in this.inventory)),r=[...i,...s.map(([o,l])=>[o,{count:1,...l}])];if(r.length===0){e.innerHTML='<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';return}for(const[o,l]of r){const c=this.itemsData&&this.itemsData[o]?this.itemsData[o]:null;if(!c&&typeof l!="object")continue;const d=c||l,f=this.inventory&&this.inventory[o]&&this.inventory[o].count||1;if(f<=0)continue;const h=document.createElement("div");h.className="mc-item-card";const p=jo[d.type]||"📦",_=d.description||"";h.innerHTML=`
        <div class="mc-item-icon">${p}</div>
        <div class="mc-item-name">${d.name||o}</div>
        <div class="mc-item-type">${Ko[d.type]||d.type||""}</div>
        ${f>1?`<div class="mc-item-count">×${f}</div>`:""}
        ${_?`<div class="mc-item-tooltip">${_}</div>`:""}
      `,h.onclick=g=>{g.stopPropagation(),this._showItemActions(o,d,h)},n.appendChild(h)}e.appendChild(n)}_showItemActions(e,t,n){this._closeActionPopup();const i=document.createElement("div");i.className="mc-item-action-popup";const s=t.type,r=[];s==="consumable"?r.push({label:"🧪 Use",action:"use"}):s==="equipment"?r.push({label:"⚔ Equip",action:"equip"}):s==="accessory"&&r.push({label:"💍 Equip",action:"equip"}),r.push({label:"📋 Examine",action:"examine"});for(const c of r){const d=document.createElement("button");d.className="mc-item-action-btn",d.textContent=c.label,d.onclick=f=>{f.stopPropagation(),this._closeActionPopup(),this._handleItemAction(e,t,c.action)},i.appendChild(d)}const o=n.getBoundingClientRect(),l=this.overlay.getBoundingClientRect();i.style.left=o.left-l.left+o.width/2+"px",i.style.top=o.bottom-l.top+4+"px",i.style.transform="translateX(-50%)",this.overlay.appendChild(i),this._actionPopup=i,setTimeout(()=>{const c=d=>{i.contains(d.target)||(this._closeActionPopup(),document.removeEventListener("click",c))};document.addEventListener("click",c)},0)}_closeActionPopup(){this._actionPopup&&(this._actionPopup.remove(),this._actionPopup=null)}_handleItemAction(e,t,n){if(n==="use")this.questSystem&&typeof this.questSystem.useItem=="function"&&this.questSystem.useItem(e),this.update();else if(n==="equip")this.questSystem&&typeof this.questSystem.equipItem=="function"&&this.questSystem.equipItem(e),this.update();else if(n==="examine"){this._closeDetail();const i=document.createElement("div");i.className="mc-party-detail-overlay",i.style.width="360px",i.innerHTML=`
        <button class="mc-party-detail-close" id="mc-item-detail-close">✕</button>
        <div style="font-size:28px;text-align:center;margin-bottom:8px;">${jo[t.type]||"📦"}</div>
        <div style="font-size:18px;font-weight:bold;color:#f5d090;text-align:center;margin-bottom:4px;">${t.name||e}</div>
        <div style="font-size:12px;color:#a89070;text-align:center;margin-bottom:14px;">${Ko[t.type]||t.type}</div>
        <div class="mc-party-detail-description">${t.description||"A mysterious item."}</div>
        ${t.price?`<div style="font-size:13px;color:#c8a050;text-align:center;">💰 Worth ${t.price} gold</div>`:""}
        ${t.statBoost?`<div style="font-size:12px;color:#88bb66;margin-top:10px;"><strong>Stat Boost:</strong> ${JSON.stringify(t.statBoost)}</div>`:""}
        ${t.power?`<div style="font-size:12px;color:#cc8844;margin-top:6px;"><strong>Power:</strong> ${t.power}</div>`:""}
        ${t.effect?`<div style="font-size:12px;color:#a0c0e0;margin-top:6px;"><strong>Effect:</strong> ${t.effect}</div>`:""}
        ${t.slot?`<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Slot:</strong> ${t.slot}</div>`:""}
        ${t.target?`<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Target:</strong> ${t.target}</div>`:""}
      `,this.overlay.querySelector("#mc-menu-content").appendChild(i),this._detailOverlay=i,i.querySelector("#mc-item-detail-close").onclick=()=>this._closeDetail()}}_renderAbilitiesTab(){const e=this.overlay.querySelector("#mc-panel-abilities");if(!e)return;if(e.innerHTML="",this.party.length===0){e.innerHTML='<div class="mc-items-empty">No party members to show abilities for.</div>';return}const t=document.createElement("div");t.className="mc-abilities-member-select",this.party.forEach((r,o)=>{const l=document.createElement("button");l.className="mc-abilities-member-btn",this.selectedAbilityMemberIdx===o&&l.classList.add("mc-abilities-member-btn-active");const c=ya(r.color);l.innerHTML=`<span style="width:16px;height:16px;border-radius:50%;background:${c};display:inline-block;border:1px solid #c8a050;"></span> ${r.name||"Unknown"}`,l.onclick=()=>{this.selectedAbilityMemberIdx=o,this._renderAbilitiesTab()},t.appendChild(l)}),e.appendChild(t);const n=this.party[this.selectedAbilityMemberIdx];if(!n)return;const i=n.abilityTree||[];if(i.length===0){e.innerHTML+='<div class="mc-items-empty">This character has no abilities yet.</div>';return}const s=document.createElement("div");s.className="mc-abilities-list";for(const r of i){const o=r.ability,l=this.abilitiesData[o]||{name:o,description:""},c=(n.level||1)<(r.level||1),d=Qo[l.element]||"⭐",f=document.createElement("div");f.className="mc-ability-card"+(c?" mc-ability-locked":"");let h=[];l.type&&h.push(`<span class="mc-ability-meta-item">${l.type}</span>`),l.element&&h.push(`<span class="mc-ability-meta-item">${d} ${l.element}</span>`),l.mpCost&&h.push(`<span class="mc-ability-meta-item">MP: ${l.mpCost}</span>`),l.power&&h.push(`<span class="mc-ability-meta-item">PWR: ${l.power}</span>`),l.target&&h.push(`<span class="mc-ability-meta-item">→ ${l.target}</span>`),l.hits&&h.push(`<span class="mc-ability-meta-item">×${l.hits} hits</span>`),f.innerHTML=`
        <div class="mc-ability-icon">${c?"🔒":d}</div>
        <div class="mc-ability-info">
          <div class="mc-ability-name">${l.name||o} <span style="font-size:11px;color:#a89070;">(Lv ${r.level})</span></div>
          <div class="mc-ability-meta">${h.join("")}</div>
          <div class="mc-ability-desc">${l.description||"A mysterious ability."}</div>
        </div>
      `,s.appendChild(f)}e.appendChild(s)}_renderMapTab(){const e=this.overlay.querySelector("#mc-panel-map");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-map-container";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("mc-map-svg"),n.setAttribute("viewBox","0 0 1000 600"),n.setAttribute("preserveAspectRatio","xMidYMid meet");const i=new Set;for(const[r,o]of Object.entries(h0)){const l=ps.find(c=>c.id===r);if(l)for(const c of o){const d=[r,c].sort().join("-");if(i.has(d))continue;i.add(d);const f=ps.find(_=>_.id===c);if(!f)continue;const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1",l.x*1e3),h.setAttribute("y1",l.y*600),h.setAttribute("x2",f.x*1e3),h.setAttribute("y2",f.y*600);const p=this.discoveredRegions.has(r)&&this.discoveredRegions.has(c);h.setAttribute("stroke",p?"#c8a050":"#4a3a25"),h.setAttribute("stroke-width","2.5"),h.setAttribute("opacity",p?"0.6":"0.3"),p||h.setAttribute("stroke-dasharray","5,5"),n.appendChild(h)}}for(const r of ps){const o=this.discoveredRegions.has(r.id),l=this.currentRegion===r.id,c=r.x*1e3,d=r.y*600,f=document.createElementNS("http://www.w3.org/2000/svg","g");if(f.classList.add("mc-map-node"),l&&f.classList.add("mc-map-node-current"),f.dataset.regionId=r.id,f.style.cursor=o?"pointer":"default",l){const p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("cx",c),p.setAttribute("cy",d),p.setAttribute("r","32"),p.setAttribute("fill","rgba(245, 208, 144, 0.15)"),f.appendChild(p)}const h=document.createElementNS("http://www.w3.org/2000/svg","circle");if(h.setAttribute("cx",c),h.setAttribute("cy",d),h.setAttribute("r",l?"22":"16"),h.setAttribute("fill",o?l?"#f5d090":"#c8a050":"#3a2a1a"),h.setAttribute("stroke",o?"#f5d090":"#5a4a35"),h.setAttribute("stroke-width",l?"3":"2"),f.appendChild(h),o){const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d+38),p.setAttribute("text-anchor","middle"),p.setAttribute("fill",l?"#f5d090":"#c8b890"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","14"),p.setAttribute("font-weight",l?"bold":"normal"),p.textContent=r.name,f.appendChild(p)}else{const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d+38),p.setAttribute("text-anchor","middle"),p.setAttribute("fill","#5a4a35"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","12"),p.setAttribute("font-style","italic"),p.textContent="???",f.appendChild(p)}if(l){const p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",c),p.setAttribute("y",d-30),p.setAttribute("text-anchor","middle"),p.setAttribute("fill","#f5d090"),p.setAttribute("font-family","Georgia, serif"),p.setAttribute("font-size","20"),p.textContent="⬇",f.appendChild(p)}o&&(f.onclick=()=>{this.currentRegion=r.id,this._renderMapTab()}),n.appendChild(f)}t.appendChild(n);const s=document.createElement("div");s.className="mc-map-legend",s.innerHTML=`
      <div><span class="mc-map-legend-dot" style="background:#f5d090;"></span> Current Location</div>
      <div><span class="mc-map-legend-dot" style="background:#c8a050;"></span> Discovered</div>
      <div><span class="mc-map-legend-dot" style="background:#3a2a1a;border:1px solid #5a4a35;"></span> Undiscovered</div>
    `,t.appendChild(s),e.appendChild(t)}_renderNemesisTab(){const e=this.overlay.querySelector("#mc-panel-nemesis");if(!e)return;e.innerHTML="";const t=document.createElement("div");if(t.className="mc-submenu-container",!this.nemesisSystem){t.innerHTML='<div class="mc-items-empty">Nemesis system not yet available. Continue your quest to unlock it.</div>',e.appendChild(t);return}e.appendChild(t),this._nemesisMenu.show(this.nemesisSystem,()=>{this._switchTab("party")})}_renderQuestsTab(){const e=this.overlay.querySelector("#mc-panel-quests");if(!e)return;e.innerHTML="";const t=document.createElement("div");if(t.className="mc-quests-section",t.innerHTML='<div class="mc-quests-section-title">⚔ Active Quests</div>',this.activeQuests&&this.activeQuests.length>0)for(const i of this.activeQuests)t.appendChild(this._createQuestCard(i,!0));else t.innerHTML+='<div class="mc-quests-empty">No active quests. Seek out quest givers in the world!</div>';e.appendChild(t);const n=document.createElement("div");if(n.className="mc-quests-section",n.innerHTML='<div class="mc-quests-section-title">📋 Available Quests</div>',this.sideQuests&&this.sideQuests.length>0){for(const i of this.sideQuests)this.activeQuests&&this.activeQuests.some(r=>r.id===i.id)||n.appendChild(this._createQuestCard(i,!1));n.children.length===1&&(n.innerHTML+='<div class="mc-quests-empty">No new quests available. Check back later!</div>')}else n.innerHTML+='<div class="mc-quests-empty">No available quests. Explore more to find new adventures!</div>';e.appendChild(n)}_createQuestCard(e,t){const n=document.createElement("div");n.className="mc-quest-card";const i=e.reward||{};let s=[];if(i.gold&&s.push(`💰 ${i.gold} gold`),i.items&&Array.isArray(i.items))for(const r of i.items)s.push(`🎁 ${typeof r=="string"?r:r.name||r.id||"Item"}`);return n.innerHTML=`
      <div class="mc-quest-name">${t?"▸ ":""}${e.name||e.id}</div>
      <div class="mc-quest-giver">Given by ${e.giver||"Unknown"} in ${f0(e.region)||"Unknown"}</div>
      <div class="mc-quest-description">${e.description||""}</div>
      <div class="mc-quest-objective"><strong>Objective:</strong> ${e.objective||"—"}</div>
      <div class="mc-quest-reward"><strong>Reward:</strong> ${s.join(" · ")||"Unknown"}</div>
    `,n}_renderFamiliarsTab(){const e=this.overlay.querySelector("#mc-panel-familiars");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-submenu-container",t.id="mc-familiars-container",e.appendChild(t);try{this._familiarMenu?this._familiarMenu.show(this.questSystem||this.nemesisSystem,()=>{this._switchTab("party")}):e0(()=>import("./familiarMenu-D4zPoHSm.js"),[]).then(n=>{const i=n.default;this._familiarMenu=new i,this._familiarMenu.show(this.questSystem||this.nemesisSystem,()=>{this._switchTab("party")})}).catch(()=>{t.innerHTML=`
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
      `}}_renderSaveTab(){const e=this.overlay.querySelector("#mc-panel-save");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="mc-submenu-container",e.appendChild(t);const n=this._buildGameSaveObject();this._saveMenu.show("save",n,()=>{this._switchTab("party")})}_buildGameSaveObject(){const e=this;return{playtime:this.questSystem&&this.questSystem.playtime||0,partyLevel:this.party.length>0?Math.max(...this.party.map(t=>t.level||1)):1,currentRegion:this.currentRegion,serialize(){return{party:e.party,currentRegion:e.currentRegion,discoveredRegions:Array.from(e.discoveredRegions),inventory:e.inventory,activeQuests:e.activeQuests,sideQuests:e.sideQuests,playtime:this.playtime,partyLevel:this.partyLevel}},deserialize(t){t&&(t.party&&(e.party=t.party),t.currentRegion&&(e.currentRegion=t.currentRegion),t.discoveredRegions&&(e.discoveredRegions=new Set(t.discoveredRegions)),t.inventory&&(e.inventory=t.inventory),t.activeQuests&&(e.activeQuests=t.activeQuests),t.sideQuests&&(e.sideQuests=t.sideQuests),e.questSystem&&(e.questSystem.party=e.party,e.questSystem.currentRegion=e.currentRegion,e.questSystem.discoveredRegions=Array.from(e.discoveredRegions),e.questSystem.inventory=e.inventory,e.questSystem.activeQuests=e.activeQuests,e.questSystem.sideQuests=e.sideQuests))}}}}class g0{constructor(e){this.container=e,this.root=null,this.styleElement=null,this.elements={},this.callbacks={onSelectCommand:null,onSelectAbility:null,onSelectTarget:null,onSelectItem:null,onFlee:null},this._logMessages=[]}_injectCSS(){const e=`
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
    `;this.styleElement=document.createElement("style"),this.styleElement.id="mc-battle-ui-style",this.styleElement.textContent=e,document.head.appendChild(this.styleElement)}create(){this._injectCSS(),this.root=document.createElement("div"),this.root.className="mc-battle-ui",this.elements.partyPanel=document.createElement("div"),this.elements.partyPanel.className="mc-party-panel",this.elements.enemyInfo=document.createElement("div"),this.elements.enemyInfo.className="mc-enemy-info",this.elements.commandMenu=document.createElement("div"),this.elements.commandMenu.className="mc-command-menu",this.elements.abilityMenu=document.createElement("div"),this.elements.abilityMenu.className="mc-ability-menu",this.elements.itemMenu=document.createElement("div"),this.elements.itemMenu.className="mc-item-menu",this.elements.targetSelector=document.createElement("div"),this.elements.targetSelector.className="mc-target-selector",this.elements.battleLog=document.createElement("div"),this.elements.battleLog.className="mc-battle-log",this.elements.victoryScreen=document.createElement("div"),this.elements.victoryScreen.className="mc-victory-screen",this.elements.defeatScreen=document.createElement("div"),this.elements.defeatScreen.className="mc-defeat-screen",this.root.appendChild(this.elements.partyPanel),this.root.appendChild(this.elements.enemyInfo),this.root.appendChild(this.elements.commandMenu),this.root.appendChild(this.elements.abilityMenu),this.root.appendChild(this.elements.itemMenu),this.root.appendChild(this.elements.targetSelector),this.root.appendChild(this.elements.battleLog),this.root.appendChild(this.elements.victoryScreen),this.root.appendChild(this.elements.defeatScreen),this.container.appendChild(this.root)}update(e,t,n){this.showPartyStatus(e,n),this.showEnemyInfo(t)}showPartyStatus(e,t=null){const n=this.elements.partyPanel;n.innerHTML="";for(const i of e){const s=document.createElement("div");s.className="mc-party-card",t&&i===t&&s.classList.add("active-turn"),i.isAlive()||s.classList.add("dead");const r=document.createElement("div");r.className="mc-party-name",r.innerHTML=`<span>${i.name}</span><span class="mc-party-level">Lv ${i.level}</span>`,s.appendChild(r);const o=this._createBar(i.hp,i.getMaxHP(),"hp","HP");s.appendChild(o);const l=this._createBar(i.mp,i.getMaxMP(),"mp","MP");s.appendChild(l);const c=this._createBar(i.atb||0,100,"atb","ATB");s.appendChild(c);const d=document.createElement("div");if(d.className="mc-status-icons",i.statusEffects)for(const[f]of Object.entries(i.statusEffects)){const h=document.createElement("span");h.className="mc-status-icon",h.textContent=this._getStatusIcon(f),h.title=f,d.appendChild(h)}s.appendChild(d),n.appendChild(s)}}showEnemyInfo(e){const t=this.elements.enemyInfo;if(t.innerHTML="",!e||e.length===0){t.classList.remove("visible");return}for(const n of e){const i=document.createElement("div");i.className="mc-enemy-name",i.textContent=n.name,n.isAlive()||i.classList.add("dead"),t.appendChild(i)}t.classList.add("visible")}showCommandMenu(e){const t=this.elements.commandMenu;t.innerHTML="";const n=document.createElement("div");n.className="mc-cmd-title",n.textContent=`${e.name}'s Turn`,t.appendChild(n);const i=[{label:"Attack",cmd:"attack",style:""},{label:"Ability",cmd:"ability",style:""},{label:"Item",cmd:"item",style:""},{label:"Defend",cmd:"defend",style:""},{label:"Flee",cmd:"flee",style:"danger"}];for(const s of i){const r=document.createElement("button");r.className="mc-cmd-btn",s.style&&r.classList.add(s.style),r.textContent=s.label,r.addEventListener("click",()=>{this.callbacks.onSelectCommand&&this.callbacks.onSelectCommand(s.cmd)}),t.appendChild(r)}t.classList.add("visible")}hideCommandMenu(){this.elements.commandMenu.classList.remove("visible")}showAbilityMenu(e){const t=this.elements.abilityMenu;t.innerHTML="";const n=document.createElement("div");n.className="mc-ability-title",n.textContent="Abilities",t.appendChild(n);const i=e.getAvailableAbilities?e.getAvailableAbilities():[];if(i.length===0){const r=document.createElement("div");r.className="mc-ability-entry disabled",r.innerHTML='<span class="mc-ability-name">No abilities available</span>',t.appendChild(r)}else for(const r of i){const o=document.createElement("div");o.className="mc-ability-entry";const l=e.mp>=r.mpCost;l||o.classList.add("disabled");const c=document.createElement("div");c.style.display="flex",c.style.justifyContent="space-between",c.style.width="100%";const d=document.createElement("span");d.className="mc-ability-name",d.textContent=r.name;const f=document.createElement("span");f.className="mc-ability-cost",f.textContent=`${r.mpCost} MP`,c.appendChild(d),c.appendChild(f),o.appendChild(c);const h=document.createElement("div");h.className="mc-ability-desc",h.textContent=r.description||"",o.appendChild(h),l&&o.addEventListener("click",()=>{this.callbacks.onSelectAbility&&this.callbacks.onSelectAbility(r.id)}),t.appendChild(o)}const s=document.createElement("div");s.className="mc-ability-back",s.textContent="← Back",s.addEventListener("click",()=>{this.hideAbilityMenu(),this.showCommandMenu(e)}),t.appendChild(s),t.classList.add("visible")}hideAbilityMenu(){this.elements.abilityMenu.classList.remove("visible")}showItemMenu(e){const t=this.elements.itemMenu;t.innerHTML="";const n=document.createElement("div");if(n.className="mc-item-title",n.textContent="Items",t.appendChild(n),!e||e.length===0){const s=document.createElement("div");s.className="mc-item-entry disabled",s.innerHTML='<span class="mc-item-name">No usable items</span>',t.appendChild(s)}else for(const s of e){const r=document.createElement("div");r.className="mc-item-entry";const o=document.createElement("div");o.style.display="flex",o.style.justifyContent="space-between",o.style.width="100%";const l=document.createElement("span");l.className="mc-item-name",l.textContent=s.data.name;const c=document.createElement("span");c.className="mc-item-qty",c.textContent=`x${s.quantity}`,o.appendChild(l),o.appendChild(c),r.appendChild(o);const d=document.createElement("div");d.className="mc-item-desc",d.textContent=s.data.description||"",r.appendChild(d),r.addEventListener("click",()=>{this.callbacks.onSelectItem&&this.callbacks.onSelectItem(s.itemId)}),t.appendChild(r)}const i=document.createElement("div");i.className="mc-item-back",i.textContent="← Back",i.addEventListener("click",()=>{this.hideItemMenu(),this._lastActiveEntity&&this.showCommandMenu(this._lastActiveEntity)}),t.appendChild(i),t.classList.add("visible")}hideItemMenu(){this.elements.itemMenu.classList.remove("visible")}showTargetSelect(e,t=!0){const n=this.elements.targetSelector;n.innerHTML="";const i=document.createElement("div");i.className="mc-target-title",i.textContent=t?"Select Enemy Target":"Select Ally Target",n.appendChild(i),e.forEach((r,o)=>{const l=document.createElement("div");l.className="mc-target-entry",t||l.classList.add("ally"),r.isAlive()||l.classList.add("dead");const c=r.isAlive()?` (${r.hp}/${r.getMaxHP()} HP)`:" (KO)";l.textContent=r.name+c,(r.isAlive()||!t)&&l.addEventListener("click",()=>{this.callbacks.onSelectTarget&&this.callbacks.onSelectTarget(o)}),n.appendChild(l)});const s=document.createElement("div");s.className="mc-target-back",s.textContent="← Back",s.addEventListener("click",()=>{this.hideTargetSelect(),this._lastActiveEntity&&this.showCommandMenu(this._lastActiveEntity)}),n.appendChild(s),n.classList.add("visible")}hideTargetSelect(){this.elements.targetSelector.classList.remove("visible")}showVictory(e){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect();const t=this.elements.victoryScreen;t.innerHTML="";const n=document.createElement("div");n.className="mc-victory-title",n.textContent="VICTORY!",t.appendChild(n);const i=document.createElement("div");i.className="mc-rewards";const s=document.createElement("div");s.className="mc-reward-line",s.innerHTML=`XP Gained: <span class="value">${e.xp}</span>`,i.appendChild(s);const r=document.createElement("div");if(r.className="mc-reward-line",r.innerHTML=`Gold Earned: <span class="value">${e.gold}</span>`,i.appendChild(r),e.items&&e.items.length>0){const l=document.createElement("div");l.className="mc-reward-line",l.innerHTML=`Items Found: <span class="value">${e.items.join(", ")}</span>`,i.appendChild(l)}t.appendChild(i);const o=document.createElement("button");o.className="mc-continue-btn",o.textContent="Continue",o.addEventListener("click",()=>{t.classList.remove("visible")}),t.appendChild(o),t.classList.add("visible")}showDefeat(){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect();const e=this.elements.defeatScreen;e.innerHTML="";const t=document.createElement("div");t.className="mc-defeat-title",t.textContent="DEFEAT...",e.appendChild(t);const n=document.createElement("button");n.className="mc-continue-btn",n.textContent="Continue",n.addEventListener("click",()=>{e.classList.remove("visible")}),e.appendChild(n),e.classList.add("visible")}showMessage(e){this._logMessages.push(e),this._logMessages.length>4&&this._logMessages.shift();const t=this.elements.battleLog;t.innerHTML="";const n=this._logMessages.slice(-4);for(const i of n){const s=document.createElement("div");s.className="mc-log-line",s.textContent=i,t.appendChild(s)}}createBar(e,t,n,i){return this._createBar(e,t,n,i)}_createBar(e,t,n,i){const s=document.createElement("div");s.className="mc-bar-row";const r=document.createElement("span");r.className="mc-bar-label",r.textContent=i,s.appendChild(r);const o=document.createElement("div");o.className="mc-bar-container";const l=document.createElement("div");l.className=`mc-bar-fill ${n}`;const c=t>0?Sn(e/t*100,0,100):0;l.style.width=`${c}%`,o.appendChild(l),s.appendChild(o);const d=document.createElement("span");return d.className="mc-bar-text",d.textContent=`${Math.ceil(e)}/${Math.ceil(t)}`,s.appendChild(d),s}_getStatusIcon(e){return{burn:"🔥",freeze:"❄️",slow:"🐌",sleep:"💤",poison:"☠️",stun:"⚡",atk_up:"⬆️",atk_down:"⬇️",def_up:"🛡️",def_down:"💔",agi_up:"🏃",agi_down:"🦶",taunt:"😤",cover:"🛡️",regen:"💚",mp_regen:"💙"}[e]||"❓"}hide(){this.hideCommandMenu(),this.hideAbilityMenu(),this.hideItemMenu(),this.hideTargetSelect(),this.elements.enemyInfo.classList.remove("visible"),this.elements.victoryScreen.classList.remove("visible"),this.elements.defeatScreen.classList.remove("visible"),this.elements.partyPanel.innerHTML="",this.elements.battleLog.innerHTML=""}dispose(){this.hide(),this.root&&this.root.parentNode&&this.root.parentNode.removeChild(this.root),this.styleElement&&this.styleElement.parentNode&&this.styleElement.parentNode.removeChild(this.styleElement),this.root=null,this.styleElement=null,this.elements={},this._logMessages=[],this.callbacks={}}}const ot={TITLE:"title",OVERWORLD:"overworld",BATTLE:"battle",MENU:"menu",DIALOGUE:"dialogue",GAME_OVER:"game_over",VICTORY:"victory"};class _0{constructor(e){this.canvas=e||document.getElementById("game-canvas"),this.renderer=new Ll({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tl,this.renderer.outputColorSpace=mt,this.camera=new Bt(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,10,15),this.shaderManager=new Nl,this.assetManager=new Sm(this.shaderManager),this.cameraController=new Em(this.camera),this.sceneManager=new Tm(this.renderer,this.cameraController,this.assetManager),this.inputSystem=new Cm,this.audioSystem=new Rm,this.saveSystem=new Im,this.tweenManager=new Dm,this.questSystem=new Po,this.questSystem.init(),this.nemesisSystem=new Pi,this.nemesisSystem.init(),this.progressionSystem=new km,this.clock=new em,this.lastTime=0,this.state=ot.TITLE,this.previousState=null,this.party=[],this.partyMemberIds=[...ua],this.recruitedIds=[...ua],this.gold=100,this.inventory={},this.playTime=0,this.steps=0,this.familiars=[],this.equippedFamiliars={},this.currentRegionId="fry_valley",this.currentRegionData=null,this.playerPosition=new I(0,0,0),this.playerRotation=0,this.playerMesh=null,this.playerSpeed=5,this.playerSprintSpeed=8,this.stepCount=0,this.encounterCooldown=0,this.currentDialogue=null,this.dialogueIndex=0,this.dialogueComplete=!1,this.battleData=null,this.saveSlot="mcchronicles_save_1",this.titleScreen=new Wm,this.dialogueBox=new Xm,this.hud=new Qm,this.mainMenu=new m0,this._onResize=this._onResize.bind(this),this._loop=this._loop.bind(this),window.addEventListener("resize",this._onResize),this.titleScreen.onSelect(t=>{this._handleTitleSelect(t)}),this.sceneManager.setState("title"),this.titleScreen.show(),this._audioInitialized=!1,this._modelsPreloaded=!1,this._preloadingModels=!1}async _preloadModels(){this._modelsPreloaded=!0}_showLoadingScreen(e){let t=document.getElementById("model-loading-overlay");if(t){const n=document.getElementById("loading-label");n&&(n.textContent=e),t.style.display="flex"}else{t=document.createElement("div"),t.id="model-loading-overlay",t.style.cssText=`
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
      `;const i=document.createElement("style");i.textContent="@keyframes spin { to { transform: rotate(360deg); } }",document.head.appendChild(i),t.appendChild(n);const s=document.createElement("div");s.id="loading-label",s.style.fontSize="24px",s.textContent=e,t.appendChild(s),document.body.appendChild(t)}}_hideLoadingScreen(){const e=document.getElementById("model-loading-overlay");e&&(e.style.display="none")}_initAudio(){if(!this._audioInitialized){this._audioInitialized=!0;try{this.audioSystem.init(),this.audioSystem.playMusic("title")}catch(e){console.warn("Audio init failed:",e)}}}_handleTitleSelect(e){switch(this._initAudio(),e){case"new_game":case"newgame":this._startNewGame();break;case"continue":data&&data.slot!==void 0&&(this.saveSlot=`mcchronicles_save_${data.slot}`),this.saveSystem.hasSave(this.saveSlot)&&(this.titleScreen.hide(),this.load().catch(t=>console.warn("Load failed:",t)));break}}start(){this.clock.start(),requestAnimationFrame(this._loop)}_loop(){const e=this.clock.getElapsedTime(),t=Math.min(e-this.lastTime,.1);this.lastTime=e,this.update(t),this.render(),requestAnimationFrame(this._loop)}update(e){switch(this.inputSystem.update(),this.tweenManager.update(performance.now()),this.shaderManager.updateTime(this.clock.getElapsedTime()),this.sceneManager.update(e),this.cameraController.update(e),this.state){case ot.TITLE:this._updateTitle(e);break;case ot.OVERWORLD:this._updateOverworld(e);break;case ot.BATTLE:this._updateBattle(e);break;case ot.MENU:this._updateMenu(e);break;case ot.DIALOGUE:this._updateDialogue(e);break;case ot.GAME_OVER:this._updateGameOver(e);break;case ot.VICTORY:this._updateVictory(e);break}this._updateAnimations(e),this.playTime+=e}render(){this.sceneManager.render()}_updateTitle(e){if(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space")){if(!this.titleScreen._isVisible)return;this._initAudio(),this._startNewGame()}}async _startNewGame(){await this._preloadModels(),this.party=this.partyMemberIds.map(e=>this._createPartyMember(e)),this.gold=100,this.inventory={mc_flurry_potion:3,ketchup_packet:1},this.questSystem=new Po,this.questSystem.init(),this.nemesisSystem=new Pi,this.nemesisSystem.init(),this.titleScreen.hide(),this.changeRegion("fry_valley").catch(e=>console.error("Region change failed:",e)),this.startDialogue(ni.game_start),this.audioSystem.playMusic("overworld","fry_valley")}_updateOverworld(e){var s,r;const t=this.inputSystem.getMovementVector(),i=this.inputSystem.isPressed("ShiftLeft")||this.inputSystem.isPressed("ShiftRight")?this.playerSprintSpeed:this.playerSpeed;if(t.x!==0||t.z!==0){this.playerPosition.x+=t.x*i*e,this.playerPosition.z+=t.z*i*e;const l=(((s=this.currentRegionData)==null?void 0:s.size)||80)/2-2;this.playerPosition.x=Sn(this.playerPosition.x,-l,l),this.playerPosition.z=Sn(this.playerPosition.z,-l,l),this.playerRotation=Math.atan2(t.x,t.z),this.stepCount+=i*e,this.steps+=1,this.encounterCooldown<=0&&((r=this.currentRegionData)==null?void 0:r.encounterRate)>0&&this.stepCount>5&&Math.random()<this.currentRegionData.encounterRate&&(this.stepCount=0,this._triggerEncounter())}if(this.playerMesh){this.playerMesh.position.copy(this.playerPosition),this.playerMesh.rotation.y=this.playerRotation;const o=Math.sin(this.clock.getElapsedTime()*4)*.05;this.playerMesh.position.y=o}this.cameraController.setTarget({position:this.playerPosition}),this.encounterCooldown>0&&(this.encounterCooldown-=e),(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&this._checkNPCInteraction(),this.inputSystem.wasJustPressed("Escape")&&this.openMenu(),this._checkStoryEvents(),this._checkRegionTransition(),this.hud.update(this.party,this.currentRegionData,this.playerPosition,this.questSystem.getActiveQuests()[0])}_checkRegionTransition(){if(!this.currentRegionData)return;const e=Io[this.currentRegionId];if(!e)return;const t=this.currentRegionData.size/2-1;for(const n of e)if(_a[n]){if(this.playerPosition.z<-t+1&&e.includes(n)){this._transitionToRegion(n,"north");return}if(this.playerPosition.z>t-1&&e.includes(n)){this._transitionToRegion(n,"south");return}if(this.playerPosition.x>t-1&&e.includes(n)){this._transitionToRegion(n,"east");return}if(this.playerPosition.x<-t+1&&e.includes(n)){this._transitionToRegion(n,"west");return}}}_transitionToRegion(e,t){var s;const n=Io[this.currentRegionId];if(!n||!n.includes(e))return;this.audioSystem.playSFX("transition"),this.changeRegion(e).catch(r=>console.error("Region change failed:",r));const i=(((s=_a[e])==null?void 0:s.size)||80)/2-3;switch(t){case"north":this.playerPosition.set(0,0,i);break;case"south":this.playerPosition.set(0,0,-i);break;case"east":this.playerPosition.set(-i,0,0);break;case"west":this.playerPosition.set(i,0,0);break}}_triggerEncounter(){var i;const e=(i=this.currentRegionData)==null?void 0:i.encounterZone;if(!e)return;const t=wm(e);if(!t||t.length===0)return;const n={monsters:t,region:this.currentRegionId};this.startBattle(n).catch(s=>console.error("Battle start failed:",s))}_checkNPCInteraction(){var s;const e=this.sceneManager.getScene(),t=e.children.filter(r=>r.userData.type==="npc"||r.userData.npcData);for(const r of t)if(r.position.distanceTo(this.playerPosition)<3){const l=r.userData.npcData;l&&l.dialogue&&(this.audioSystem.playSFX("select"),this.startDialogue({id:`npc_${l.name}`,dialogue:l.dialogue.map(c=>({speaker:l.name,text:c}))}));return}const n=e.children.filter(r=>r.userData.treasureData);for(const r of n){if(r.userData.opened)continue;if(r.position.distanceTo(this.playerPosition)<2.5){r.userData.opened=!0;const l=r.userData.treasureData;l&&(this._addItem(l.item,1),this.audioSystem.playSFX("treasure"),this.startDialogue({id:`treasure_${l.item}`,dialogue:[{speaker:"Treasure",text:`You found a ${((s=wi[l.item])==null?void 0:s.name)||l.item}!`}]}));return}}const i=e.children.filter(r=>r.userData.type==="savepoint");for(const r of i)if(r.position.distanceTo(this.playerPosition)<3){this.audioSystem.playSFX("save"),this.save(),this.startDialogue({id:"save_point",dialogue:[{speaker:"Save Point",text:"Your adventure has been saved! Rest easy, hero."}]});return}}_checkStoryEvents(){var e;if((e=this.currentRegionData)!=null&&e.storyEvents){for(const t of this.currentRegionData.storyEvents)if(t.trigger==="location"&&Math.sqrt((t.x-this.playerPosition.x)**2+(t.z-this.playerPosition.z)**2)<(t.radius||5)){const i=ni[t.event];i&&!this.questSystem.hasSeenBeat(t.event)&&(this.startDialogue(i),this.questSystem.seeStoryBeat(t.event))}}}_updateBattle(e){var n,i;if(!this.battleData)return;const t=this.battleData;if(this.battleUI&&this.battleUI.update(t.party,t.enemies,t.activeEntity),t.battleState==="executing"){t.actionTimer-=e,t.actionTimer<=0&&(t.battleState="idle",t.activeEntity=null,this._checkBattleEnd());return}if(t.battleState==="victory"||t.battleState==="defeat"){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&this.endBattle({result:t.battleState});return}if(t.battleState==="idle"){const s=[...t.party,...t.enemies];for(const r of s){if(!r.isAlive||r.atbGauge>=100)continue;const o=((n=r.stats)==null?void 0:n.agi)||r.agi||10;r.atbGauge+=o*e*8,r.atbGauge>=100&&(r.atbGauge=100,t.turnQueue.push(r))}t.turnQueue.length>0&&!t.activeEntity&&(t.activeEntity=t.turnQueue.shift(),t.battleState="selecting",t.activeEntity.isEnemy?this._executeEnemyTurn(t.activeEntity,t):this.battleUI&&this.battleUI.showCommandMenu(t.activeEntity))}this.inputSystem.wasJustPressed("Escape")&&t.battleState==="selecting"&&!((i=t.activeEntity)!=null&&i.isEnemy)&&(this.battleUI&&this.battleUI.hideCommandMenu(),t.battleState="idle",t.activeEntity.atbGauge=0,t.activeEntity=null,this.endBattle({result:"escaped"}))}_executeEnemyTurn(e,t){var r,o;const n=t.party.filter(l=>l.isAlive);if(n.length===0){t.battleState="defeat";return}const i=n[Math.floor(Math.random()*n.length)],s=Math.max(1,Math.floor((((r=e.stats)==null?void 0:r.atk)||e.atk||10)*1.2-(((o=i.stats)==null?void 0:o.def)||i.def||5)*.5));i.currentHP-=s,i.currentHP<=0&&(i.currentHP=0,i.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${e.name} attacks ${i.name} for ${s} damage!`),e.atbGauge=0,t.actionTimer=1,t.battleState="executing"}_executePlayerAction(e,t){var s,r,o,l,c,d,f,h,p,_,g,m;const n=this.battleData;if(!n||!n.activeEntity)return;const i=n.activeEntity;if(e.type==="attack"){const u=Math.max(1,Math.floor((i.atk||((s=i.stats)==null?void 0:s.atk)||15)*1.5-(((r=t.stats)==null?void 0:r.def)||t.def||5)*.5));t.currentHP-=u,t.currentHP<=0&&(t.currentHP=0,t.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${i.name} attacks ${t.name} for ${u} damage!`)}else if(e.type==="ability"){const u=wo[e.abilityId];if(u){if(u.type==="heal"){const v=Math.floor((i.mag||((o=i.stats)==null?void 0:o.mag)||20)*u.power);t.currentHP=Math.min(t.maxHP||((l=t.stats)==null?void 0:l.hp)||100,(t.currentHP||0)+v),this.battleUI&&this.battleUI.showMessage(`${i.name} uses ${u.name}! ${t.name} recovers ${v} HP!`)}else if(u.type==="aoe"||u.type==="ultimate"){const v=u.target==="enemies"?n.enemies.filter(x=>x.isAlive):n.party.filter(x=>x.isAlive);for(const x of v){const M=Math.max(1,Math.floor((i.mag||((c=i.stats)==null?void 0:c.mag)||20)*u.power-(((d=x.stats)==null?void 0:d.def)||x.def||5)*.3));x.currentHP-=M,x.currentHP<=0&&(x.currentHP=0,x.isAlive=!1)}this.battleUI&&this.battleUI.showMessage(`${i.name} casts ${u.name}! Hits all targets!`)}else{const v=Math.max(1,Math.floor((i.mag||((f=i.stats)==null?void 0:f.mag)||20)*u.power-(((h=t.stats)==null?void 0:h.def)||t.def||5)*.4));t.currentHP-=v,t.currentHP<=0&&(t.currentHP=0,t.isAlive=!1),this.battleUI&&this.battleUI.showMessage(`${i.name} uses ${u.name}! ${v} damage to ${t.name}!`)}i.currentMP=Math.max(0,(i.currentMP||0)-(u.mpCost||0))}}else if(e.type==="defend")i.isDefending=!0,this.battleUI&&this.battleUI.showMessage(`${i.name} takes a defensive stance!`);else if(e.type==="item"){const u=wi[e.itemId];u&&u.effect==="heal_hp"?(t.currentHP=Math.min(t.maxHP||((p=t.stats)==null?void 0:p.hp)||100,(t.currentHP||0)+u.power),this.battleUI&&this.battleUI.showMessage(`Used ${u.name}! ${t.name} recovers ${u.power} HP!`),this._removeItem(e.itemId,1)):u&&u.effect==="heal_mp"?(t.currentMP=Math.min(t.maxMP||((_=t.stats)==null?void 0:_.mp)||50,(t.currentMP||0)+u.power),this.battleUI&&this.battleUI.showMessage(`Used ${u.name}! ${t.name} recovers ${u.power} MP!`),this._removeItem(e.itemId,1)):u&&u.effect==="heal_both"&&(t.currentHP=Math.min(t.maxHP||((g=t.stats)==null?void 0:g.hp)||100,(t.currentHP||0)+u.power),t.currentMP=Math.min(t.maxMP||((m=t.stats)==null?void 0:m.mp)||50,(t.currentMP||0)+u.power),this.battleUI&&this.battleUI.showMessage(`Used ${u.name}! ${t.name} recovers HP and MP!`),this._removeItem(e.itemId,1))}i.atbGauge=0,i.isDefending=!1,n.actionTimer=.8,n.battleState="executing",this.battleUI&&(this.battleUI.hideCommandMenu(),this.battleUI.hideAbilityMenu(),this.battleUI.hideTargetSelect())}_checkBattleEnd(){const e=this.battleData;if(!e)return;const t=e.enemies.filter(i=>i.isAlive),n=e.party.filter(i=>i.isAlive);if(t.length===0){e.battleState="victory";const i=e.enemies.reduce((r,o)=>r+(o.xp||10),0),s=e.enemies.reduce((r,o)=>r+(o.gold||5),0);this.battleUI&&this.battleUI.showVictory({xp:i,gold:s,items:[]})}else n.length===0&&(e.battleState="defeat",this.battleUI&&this.battleUI.showDefeat())}_updateMenu(e){this.inputSystem.wasJustPressed("Escape")&&this.closeMenu()}_updateDialogue(e){if(this.dialogueBox.update(e*1e3),!this.currentDialogue){this.state=this.previousState||ot.OVERWORLD;return}if(this.inputSystem.wasJustPressed("Escape")){this.dialogueBox.hide();const t=this.currentDialogue;if(this.currentDialogue=null,this.dialogueIndex=0,this.state=this.previousState||ot.OVERWORLD,t!=null&&t.unlocks)for(const n of t.unlocks)this.recruitedIds.includes(n)||(this.recruitedIds.push(n),this.partyMemberIds.push(n),this.party.push(this._createPartyMember(n)));t!=null&&t.id&&this.questSystem.seeStoryBeat(t.id)}}_updateGameOver(e){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&(this.state=ot.TITLE,this.sceneManager.setState("title"),this.titleScreen.show(),this.hud.hide())}_updateVictory(e){(this.inputSystem.wasJustPressed("Enter")||this.inputSystem.wasJustPressed("Space"))&&(this.state=ot.TITLE,this.sceneManager.setState("title"),this.titleScreen.show(),this.hud.hide())}async changeRegion(e){const t=_a[e];if(!t){console.warn(`Unknown region: ${e}`);return}this.currentRegionId=e,this.currentRegionData=t,this.playerPosition.set(0,0,0),this.playerRotation=0,this.encounterCooldown=2,this.playerMesh||(this.playerMesh=this.assetManager.createCharacterMesh(this.partyMemberIds[0])),this.state=ot.OVERWORLD,this.sceneManager.setState("overworld",{region:t});const n=this.sceneManager.getScene();if(this.playerMesh&&n.add(this.playerMesh),this.hud.show(),this.audioSystem.playMusic("overworld",e),this.save(),t.storyEvents){for(const i of t.storyEvents)if(i.trigger==="enter"&&ni[i.event]){this.questSystem.hasSeenBeat(i.event)||this.startDialogue(ni[i.event]);break}}}async startBattle(e){const t=e.monsters||e,n=[];for(let s=0;s<t.length;s++){const r=t[s],o=Da[r],l=this.assetManager.createMonsterMesh(r),c={...(o==null?void 0:o.stats)||{hp:50,atk:10,def:5,agi:10,mag:5,mp:0}};n.push({id:r,name:(o==null?void 0:o.name)||r,stats:c,atk:c.atk,def:c.def,agi:c.agi,mag:c.mag,weakTo:(o==null?void 0:o.weakTo)||[],resists:(o==null?void 0:o.resists)||[],element:(o==null?void 0:o.element)||"physical",mesh:l,currentHP:c.hp,maxHP:c.hp,currentMP:c.mp,maxMP:c.mp,atbGauge:0,isAlive:!0,isEnemy:!0,statusEffects:[],abilities:(o==null?void 0:o.abilities)||["enemy_bite"],xp:(o==null?void 0:o.xp)||10,gold:(o==null?void 0:o.gold)||5,drops:(o==null?void 0:o.drops)||[],isDefending:!1})}const i=[];for(const s of this.party){const r={hp:s.maxHP,mp:s.maxMP,atk:s.atk,def:s.def,agi:s.agi,mag:s.mag};let o;o=this.assetManager.createCharacterMesh(s.id),i.push({...s,stats:r,mesh:o,atbGauge:0,isAlive:s.currentHP>0,isEnemy:!1,statusEffects:[],isDefending:!1})}this.battleData={party:i,enemies:n,region:this.currentRegionId,round:1,turnQueue:[],activeEntity:null,battleState:"idle",actionTimer:0},this.previousState=this.state,this.state=ot.BATTLE,this.sceneManager.setState("battle",{battle:this.battleData}),this.hud.hide(),this.audioSystem.playMusic("battle",this.currentRegionId),this.battleUI&&(this.battleUI.hide(),this.battleUI=null),this.battleUI=new g0(document.body),this.battleUI.create(),this.battleUI._lastActiveEntity=null,this.battleUI.callbacks.onSelectCommand=s=>{var l,c;const r=this.battleData;if(!r||!r.activeEntity)return;const o=r.activeEntity;switch(this.audioSystem.playSFX("select"),s){case"attack":this.battleUI.hideCommandMenu(),this.battleUI.showTargetSelect(r.enemies.filter(h=>h.isAlive),!0),this.battleUI.callbacks.onSelectTarget=h=>{this._executePlayerAction({type:"attack"},h)};break;case"ability":this.battleUI.hideCommandMenu(),this.battleUI.showAbilityMenu(o),this.battleUI.callbacks.onSelectAbility=h=>{const p=wo[h];if(p){if((o.currentMP||0)<p.mpCost){this.battleUI.showMessage("Not enough MP!");return}if(p.target==="enemies"||p.target==="allies"){const _=p.target==="enemies"?r.enemies.filter(g=>g.isAlive):r.party.filter(g=>g.isAlive);this._executePlayerAction({type:"ability",abilityId:h},_[0])}else{const _=p.type==="attack"||p.type==="ultimate",g=_?r.enemies.filter(m=>m.isAlive):r.party.filter(m=>m.isAlive);this.battleUI.hideAbilityMenu(),this.battleUI.showTargetSelect(g,_),this.battleUI.callbacks.onSelectTarget=m=>{this._executePlayerAction({type:"ability",abilityId:h},m)}}}};break;case"item":this.battleUI.hideCommandMenu();const d=Object.keys(this.inventory).filter(h=>{var p;return((p=wi[h])==null?void 0:p.type)==="consumable"}).map(h=>({id:h,...wi[h],count:this.inventory[h]}));this.battleUI.showItemMenu(d),this.battleUI.callbacks.onSelectItem=h=>{if(this.battleUI.hideItemMenu(),!wi[h])return;const _=r.party.filter(g=>g.isAlive);this.battleUI.showTargetSelect(_,!1),this.battleUI.callbacks.onSelectTarget=g=>{this._executePlayerAction({type:"item",itemId:h},g)}};break;case"defend":this._executePlayerAction({type:"defend"},o);break;case"flee":this.battleUI.hideCommandMenu();const f=.5+(((l=r.party[0])==null?void 0:l.agi)||10)*.01-(((c=r.enemies[0])==null?void 0:c.agi)||10)*.01;Math.random()<f?(this.battleUI.showMessage("Got away safely!"),setTimeout(()=>this.endBattle({result:"escaped"}),1e3)):(this.battleUI.showMessage("Could not escape!"),o.atbGauge=0,this.battleData.battleState="executing",this.battleData.actionTimer=.8);break}}}endBattle(e){if(this.battleUI&&(this.battleUI.hide(),this.battleUI=null),e.result==="victory"){let n=0,i=0;for(const s of this.battleData.enemies)n+=s.xp||10,i+=s.gold||5;this.gold+=i;for(const s of this.party){const r=Math.floor(n/this.party.length),o=this.progressionSystem.addXP(s,r);if(o.leveledUp)for(const l of o.unlockedAbilities)s.abilities.includes(l)||s.abilities.push(l)}for(const s of this.battleData.enemies)if(s.drops)for(const r of s.drops)Math.random()<r.chance&&this._addItem(r.item,1);this.audioSystem.playVictory()}else if(e.result==="defeat"){this.audioSystem.playDefeat(),this.state=ot.GAME_OVER,this.sceneManager.setState("title"),this.hud.hide(),this.battleData=null;return}else e.result;if(this.battleData)for(let n=0;n<this.battleData.party.length&&n<this.party.length;n++)this.party[n].currentHP=this.battleData.party[n].currentHP,this.party[n].currentMP=this.battleData.party[n].currentMP;this.state=ot.OVERWORLD,this.sceneManager.setState("overworld",{region:this.currentRegionData}),this.hud.show(),this.encounterCooldown=3;const t=this.sceneManager.getScene();this.playerMesh&&t.add(this.playerMesh),this.audioSystem.playMusic("overworld",this.currentRegionId),this.battleData=null}openMenu(){this.previousState=this.state,this.state=ot.MENU,this.sceneManager.setState("menu",{menu:!0}),this.hud.hide(),this.mainMenu.show(this.party,this.nemesisSystem,this.questSystem),this.audioSystem.playSFX("menu_open")}closeMenu(){this.state=this.previousState||ot.OVERWORLD,this.sceneManager.setState("overworld",{region:this.currentRegionData}),this.mainMenu.hide(),this.hud.show();const e=this.sceneManager.getScene();this.playerMesh&&e.add(this.playerMesh),this.audioSystem.playSFX("menu_close")}startDialogue(e){if(!e)return;this.previousState=this.state,this.state=ot.DIALOGUE,this.currentDialogue=e,this.dialogueIndex=0;const t={};e.backdrop&&(t.backdrop=e.backdrop),e.id&&(t.voicePrefix=`/voice/${e.id}`);const n=e.dialogue.map(i=>({speaker:i.speaker,text:i.text}));this.dialogueBox.show(n,()=>{const i=this.currentDialogue;if(this.currentDialogue=null,this.dialogueIndex=0,this.state=this.previousState||ot.OVERWORLD,this.dialogueBox.hide(),i!=null&&i.unlocks)for(const s of i.unlocks)this.recruitedIds.includes(s)||(this.recruitedIds.push(s),this.partyMemberIds.push(s),this.party.push(this._createPartyMember(s)));i!=null&&i.after&&ni[i.after]&&this.startDialogue(ni[i.after]),i!=null&&i.id&&this.questSystem.seeStoryBeat(i.id)},t)}save(){const e={version:1,partyMemberIds:this.partyMemberIds,recruitedIds:this.recruitedIds,party:this.party.map(t=>({id:t.id,level:t.level,xp:t.xp,currentHP:t.currentHP,currentMP:t.currentMP,equipment:t.equipment,abilities:t.abilities})),gold:this.gold,inventory:this.inventory,currentRegionId:this.currentRegionId,playerPosition:{x:this.playerPosition.x,y:this.playerPosition.y,z:this.playerPosition.z},playerRotation:this.playerRotation,playTime:this.playTime,steps:this.steps,quests:this.questSystem.toData(),nemesis:this.nemesisSystem.toData(),familiars:this.familiars.map(t=>t.toData?t.toData():t),equippedFamiliars:this.equippedFamiliars,timestamp:Date.now()};try{this.saveSystem.save(this.saveSlot,e),this.saveSystem.autoSave(e)}catch(t){console.warn("Failed to save:",t)}}async load(){try{const e=this.saveSystem.load(this.saveSlot);if(!e)return!1;await this._preloadModels(),this.partyMemberIds=e.partyMemberIds||[...ua],this.recruitedIds=e.recruitedIds||[...this.partyMemberIds],this.party=(e.party||[]).map(n=>{const i=this._createPartyMember(n.id);return i.level=n.level||1,i.xp=n.xp||0,i.currentHP=n.currentHP||i.maxHP,i.currentMP=n.currentMP||i.maxMP,i.equipment=n.equipment||{},i.abilities=n.abilities||i.abilities,i}),this.gold=e.gold||100,this.inventory=e.inventory||{},this.playTime=e.playTime||0,this.steps=e.steps||0,e.quests&&this.questSystem.fromData(e.quests),e.nemesis&&(this.nemesisSystem=Pi.fromData(e.nemesis)),e.familiars&&(this.familiars=e.familiars),e.equippedFamiliars&&(this.equippedFamiliars=e.equippedFamiliars);const t=e.currentRegionId||"fry_valley";return this.changeRegion(t).catch(n=>console.error("Region change failed:",n)),e.playerPosition&&this.playerPosition.set(e.playerPosition.x,e.playerPosition.y,e.playerPosition.z),this.playerRotation=e.playerRotation||0,!0}catch(e){return console.warn("Failed to load:",e),!1}}hasSave(){return this.saveSystem.hasSave(this.saveSlot)}_createPartyMember(e){const t=Ni[e];if(!t)return null;const n={...t.baseStats};return{id:e,name:t.name,title:t.title,role:t.role,description:t.description,level:1,xp:0,maxHP:n.hp,maxMP:n.mp,currentHP:n.hp,currentMP:n.mp,atk:n.atk,def:n.def,agi:n.agi,mag:n.mag,element:t.element,equipment:{weapon:null,armor:null,accessory:null},abilities:t.abilityTree.filter(i=>i.level===1).map(i=>i.ability),color:t.color,portraitColors:t.portraitColors,growth:t.growth,abilityTree:t.abilityTree}}_addItem(e,t=1){this.inventory[e]||(this.inventory[e]=0),this.inventory[e]+=t}_removeItem(e,t=1){return this.inventory[e]?(this.inventory[e]-=t,this.inventory[e]<=0&&delete this.inventory[e],!0):!1}_updateAnimations(e){const t=this.sceneManager.getScene(),n=this.clock.getElapsedTime();t.traverse(i=>{if(i.userData.float&&(i.position.y+=Math.sin(n*2+i.id)*.005),i.userData.spin&&(i.rotation.y+=e*3),i.userData.bounce){const s=1+Math.sin(n*4)*.05;i.scale.y=s}if(i.userData.type==="particles"&&!i.userData.dead&&(this.assetManager.updateParticleEffect&&this.assetManager.updateParticleEffect(i,e),i.userData.dead&&t.remove(i)),i.userData.glow&&i.material){const s=.8+Math.sin(n*3)*.2;i.material.opacity=s}i.userData.npcData&&(i.position.y=Math.sin(n*1.5+i.id)*.1),i.userData.treasureData&&!i.userData.opened&&(i.rotation.y=Math.sin(n*.8)*.1)})}_onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose(),this.inputSystem.dispose(),this.audioSystem.stopMusic(),this.titleScreen.hide(),this.dialogueBox.hide(),this.hud.hide(),this.mainMenu.hide()}}const fs=document.getElementById("game-canvas"),Ol=new _0(fs);Ol.start();function v0(){const a=document.getElementById("loading-screen");a&&(a.classList.add("hidden"),setTimeout(()=>{a.remove()},800))}const Zo=document.getElementById("loading-bar"),Jo=document.getElementById("loading-text"),ba=["Cooking fries...","Summoning Ronald...","Polishing golden arches...","Wrapping Happy Meals...","Hiding Hamburglar...","Ready to play!"];let ds=0;const x0=setInterval(()=>{if(ds+=5,Zo&&(Zo.style.width=`${Math.min(ds,100)}%`),Jo){const a=Math.floor(ds/100*ba.length);Jo.textContent=ba[Math.min(a,ba.length-1)]}ds>=100&&(clearInterval(x0),setTimeout(v0,300))},80);function y0(){const a=window.innerWidth,e=window.innerHeight;fs&&(fs.width=a,fs.height=e)}y0();window.__game=Ol;
