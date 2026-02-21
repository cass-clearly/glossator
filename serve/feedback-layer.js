var FeedbackLayer=(()=>{var sE=Object.create;var ec=Object.defineProperty;var cE=Object.getOwnPropertyDescriptor;var lE=Object.getOwnPropertyNames;var fE=Object.getPrototypeOf,pE=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var vE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of lE(r))!pE.call(e,a)&&a!==t&&ec(e,a,{get:()=>r[a],enumerable:!(n=cE(r,a))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?sE(fE(e)):{},vE(r||!e||!e.__esModule?ec(t,"default",{value:e,enumerable:!0}):t,e));var _=i((P5,oc)=>{"use strict";oc.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=i((R5,uc)=>{"use strict";var dE=_();uc.exports=!dE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((A5,lc)=>{"use strict";var sc=Rr(),cc=Function.prototype,Za=cc.call,mE=sc&&cc.bind.bind(Za,Za);lc.exports=sc?mE:function(e){return function(){return Za.apply(e,arguments)}}});var U=i((N5,fc)=>{"use strict";var hE=A();fc.exports=hE({}.isPrototypeOf)});var P=i((ei,pc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};pc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ei=="object"&&ei)||function(){return this}()||Function("return this")()});var Ar=i((M5,hc)=>{"use strict";var yE=Rr(),mc=Function.prototype,vc=mc.apply,dc=mc.call;hc.exports=typeof Reflect=="object"&&Reflect.apply||(yE?dc.bind(vc):function(){return dc.apply(vc,arguments)})});var Te=i((j5,gc)=>{"use strict";var yc=A(),gE=yc({}.toString),bE=yc("".slice);gc.exports=function(e){return bE(gE(e),8,-1)}});var ft=i(($5,bc)=>{"use strict";var qE=Te(),xE=A();bc.exports=function(e){if(qE(e)==="Function")return xE(e)}});var N=i((L5,qc)=>{"use strict";var ri=typeof document=="object"&&document.all;qc.exports=typeof ri>"u"&&ri!==void 0?function(e){return typeof e=="function"||e===ri}:function(e){return typeof e=="function"}});var H=i((F5,xc)=>{"use strict";var SE=_();xc.exports=!SE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=i((D5,Sc)=>{"use strict";var wE=Rr(),yn=Function.prototype.call;Sc.exports=wE?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ti=i(Oc=>{"use strict";var wc={}.propertyIsEnumerable,Tc=Object.getOwnPropertyDescriptor,TE=Tc&&!wc.call({1:2},1);Oc.f=TE?function(r){var t=Tc(this,r);return!!t&&t.enumerable}:wc});var Ke=i((G5,Cc)=>{"use strict";Cc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=i((U5,Ec)=>{"use strict";var OE=A(),CE=_(),EE=Te(),ni=Object,IE=OE("".split);Ec.exports=CE(function(){return!ni("z").propertyIsEnumerable(0)})?function(e){return EE(e)==="String"?IE(e,""):ni(e)}:ni});var ir=i((H5,Ic)=>{"use strict";Ic.exports=function(e){return e==null}});var or=i((W5,kc)=>{"use strict";var kE=ir(),_E=TypeError;kc.exports=function(e){if(kE(e))throw new _E("Can't call method on "+e);return e}});var _e=i((K5,_c)=>{"use strict";var PE=gn(),RE=or();_c.exports=function(e){return PE(RE(e))}});var L=i((z5,Pc)=>{"use strict";var AE=N();Pc.exports=function(e){return typeof e=="object"?e!==null:AE(e)}});var V=i((V5,Rc)=>{"use strict";Rc.exports={}});var W=i((Y5,Nc)=>{"use strict";var ai=V(),ii=P(),NE=N(),Ac=function(e){return NE(e)?e:void 0};Nc.exports=function(e,r){return arguments.length<2?Ac(ai[e])||Ac(ii[e]):ai[e]&&ai[e][r]||ii[e]&&ii[e][r]}});var Nr=i((J5,$c)=>{"use strict";var ME=P(),Mc=ME.navigator,jc=Mc&&Mc.userAgent;$c.exports=jc?String(jc):""});var Mr=i((Q5,Uc)=>{"use strict";var Gc=P(),oi=Nr(),Lc=Gc.process,Fc=Gc.Deno,Dc=Lc&&Lc.versions||Fc&&Fc.version,Bc=Dc&&Dc.v8,he,bn;Bc&&(he=Bc.split("."),bn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!bn&&oi&&(he=oi.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=oi.match(/Chrome\/(\d+)/),he&&(bn=+he[1])));Uc.exports=bn});var ur=i((X5,Wc)=>{"use strict";var Hc=Mr(),jE=_(),$E=P(),LE=$E.String;Wc.exports=!!Object.getOwnPropertySymbols&&!jE(function(){var e=Symbol("symbol detection");return!LE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Hc&&Hc<41})});var ui=i((Z5,Kc)=>{"use strict";var FE=ur();Kc.exports=FE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=i((e6,zc)=>{"use strict";var DE=W(),BE=N(),GE=U(),UE=ui(),HE=Object;zc.exports=UE?function(e){return typeof e=="symbol"}:function(e){var r=DE("Symbol");return BE(r)&&GE(r.prototype,HE(e))}});var ze=i((r6,Vc)=>{"use strict";var WE=String;Vc.exports=function(e){try{return WE(e)}catch{return"Object"}}});var D=i((t6,Yc)=>{"use strict";var KE=N(),zE=ze(),VE=TypeError;Yc.exports=function(e){if(KE(e))return e;throw new VE(zE(e)+" is not a function")}});var qn=i((n6,Jc)=>{"use strict";var YE=D(),JE=ir();Jc.exports=function(e,r){var t=e[r];return JE(t)?void 0:YE(t)}});var Xc=i((a6,Qc)=>{"use strict";var si=B(),ci=N(),li=L(),QE=TypeError;Qc.exports=function(e,r){var t,n;if(r==="string"&&ci(t=e.toString)&&!li(n=si(t,e))||ci(t=e.valueOf)&&!li(n=si(t,e))||r!=="string"&&ci(t=e.toString)&&!li(n=si(t,e)))return n;throw new QE("Can't convert object to primitive value")}});var Z=i((i6,Zc)=>{"use strict";Zc.exports=!0});var tl=i((o6,rl)=>{"use strict";var el=P(),XE=Object.defineProperty;rl.exports=function(e,r){try{XE(el,e,{value:r,configurable:!0,writable:!0})}catch{el[e]=r}return r}});var pt=i((u6,il)=>{"use strict";var ZE=Z(),e0=P(),r0=tl(),nl="__core-js_shared__",al=il.exports=e0[nl]||r0(nl,{});(al.versions||(al.versions=[])).push({version:"3.48.0",mode:ZE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=i((s6,ul)=>{"use strict";var ol=pt();ul.exports=function(e,r){return ol[e]||(ol[e]=r||{})}});var te=i((c6,sl)=>{"use strict";var t0=or(),n0=Object;sl.exports=function(e){return n0(t0(e))}});var K=i((l6,cl)=>{"use strict";var a0=A(),i0=te(),o0=a0({}.hasOwnProperty);cl.exports=Object.hasOwn||function(r,t){return o0(i0(r),t)}});var $r=i((f6,ll)=>{"use strict";var u0=A(),s0=0,c0=Math.random(),l0=u0(1.1.toString);ll.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+l0(++s0+c0,36)}});var R=i((p6,pl)=>{"use strict";var f0=P(),p0=sr(),fl=K(),v0=$r(),d0=ur(),m0=ui(),Lr=f0.Symbol,fi=p0("wks"),h0=m0?Lr.for||Lr:Lr&&Lr.withoutSetter||v0;pl.exports=function(e){return fl(fi,e)||(fi[e]=d0&&fl(Lr,e)?Lr[e]:h0("Symbol."+e)),fi[e]}});var hl=i((v6,ml)=>{"use strict";var y0=B(),vl=L(),dl=jr(),g0=qn(),b0=Xc(),q0=R(),x0=TypeError,S0=q0("toPrimitive");ml.exports=function(e,r){if(!vl(e)||dl(e))return e;var t=g0(e,S0),n;if(t){if(r===void 0&&(r="default"),n=y0(t,e,r),!vl(n)||dl(n))return n;throw new x0("Can't convert object to primitive value")}return r===void 0&&(r="number"),b0(e,r)}});var xn=i((d6,yl)=>{"use strict";var w0=hl(),T0=jr();yl.exports=function(e){var r=w0(e,"string");return T0(r)?r:r+""}});var Sn=i((m6,bl)=>{"use strict";var O0=P(),gl=L(),pi=O0.document,C0=gl(pi)&&gl(pi.createElement);bl.exports=function(e){return C0?pi.createElement(e):{}}});var vi=i((h6,ql)=>{"use strict";var E0=H(),I0=_(),k0=Sn();ql.exports=!E0&&!I0(function(){return Object.defineProperty(k0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=i(Sl=>{"use strict";var _0=H(),P0=B(),R0=ti(),A0=Ke(),N0=_e(),M0=xn(),j0=K(),$0=vi(),xl=Object.getOwnPropertyDescriptor;Sl.f=_0?xl:function(r,t){if(r=N0(r),t=M0(t),$0)try{return xl(r,t)}catch{}if(j0(r,t))return A0(!P0(R0.f,r,t),r[t])}});var di=i((g6,wl)=>{"use strict";var L0=_(),F0=N(),D0=/#|\.prototype\./,dt=function(e,r){var t=G0[B0(e)];return t===H0?!0:t===U0?!1:F0(r)?L0(r):!!r},B0=dt.normalize=function(e){return String(e).replace(D0,".").toLowerCase()},G0=dt.data={},U0=dt.NATIVE="N",H0=dt.POLYFILL="P";wl.exports=dt});var Y=i((b6,Ol)=>{"use strict";var Tl=ft(),W0=D(),K0=Rr(),z0=Tl(Tl.bind);Ol.exports=function(e,r){return W0(e),r===void 0?e:K0?z0(e,r):function(){return e.apply(r,arguments)}}});var mi=i((q6,Cl)=>{"use strict";var V0=H(),Y0=_();Cl.exports=V0&&Y0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((x6,El)=>{"use strict";var J0=L(),Q0=String,X0=TypeError;El.exports=function(e){if(J0(e))return e;throw new X0(Q0(e)+" is not an object")}});var ne=i(kl=>{"use strict";var Z0=H(),eI=vi(),rI=mi(),wn=X(),Il=xn(),tI=TypeError,hi=Object.defineProperty,nI=Object.getOwnPropertyDescriptor,yi="enumerable",gi="configurable",bi="writable";kl.f=Z0?rI?function(r,t,n){if(wn(r),t=Il(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&bi in n&&!n[bi]){var a=nI(r,t);a&&a[bi]&&(r[t]=n.value,n={configurable:gi in n?n[gi]:a[gi],enumerable:yi in n?n[yi]:a[yi],writable:!1})}return hi(r,t,n)}:hi:function(r,t,n){if(wn(r),t=Il(t),wn(n),eI)try{return hi(r,t,n)}catch{}if("get"in n||"set"in n)throw new tI("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((w6,_l)=>{"use strict";var aI=H(),iI=ne(),oI=Ke();_l.exports=aI?function(e,r,t){return iI.f(e,r,oI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((T6,Rl)=>{"use strict";var mt=P(),uI=Ar(),sI=ft(),cI=N(),lI=vt().f,fI=di(),Fr=V(),pI=Y(),Dr=Oe(),Pl=K();pt();var vI=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return uI(e,this,arguments)};return r.prototype=e.prototype,r};Rl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?mt:a?mt[t]:mt[t]&&mt[t].prototype,s=n?Fr:Fr[t]||Dr(Fr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,y,b;for(v in r)l=fI(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Pl(u,v),h=s[v],f&&(e.dontCallGetSet?(b=lI(u,v),m=b&&b.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=pI(d,mt):e.wrap&&f?y=vI(d):o&&cI(d)?y=sI(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(s,v,y),o&&(p=t+"Prototype",Pl(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&c&&(l||!c[v])&&Dr(c,v,d)))}});var Pe=i((O6,Al)=>{"use strict";var dI=Te();Al.exports=Array.isArray||function(r){return dI(r)==="Array"}});var Tn=i((C6,Ml)=>{"use strict";var mI=R(),hI=mI("toStringTag"),Nl={};Nl[hI]="z";Ml.exports=String(Nl)==="[object z]"});var ht=i((E6,jl)=>{"use strict";var yI=Tn(),gI=N(),On=Te(),bI=R(),qI=bI("toStringTag"),xI=Object,SI=On(function(){return arguments}())==="Arguments",wI=function(e,r){try{return e[r]}catch{}};jl.exports=yI?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=wI(r=xI(e),qI))=="string"?t:SI?On(r):(n=On(r))==="Object"&&gI(r.callee)?"Arguments":n}});var xi=i((I6,$l)=>{"use strict";var TI=A(),OI=N(),qi=pt(),CI=TI(Function.toString);OI(qi.inspectSource)||(qi.inspectSource=function(e){return CI(e)});$l.exports=qi.inspectSource});var gt=i((k6,Gl)=>{"use strict";var EI=A(),II=_(),Ll=N(),kI=ht(),_I=W(),PI=xi(),Fl=function(){},Dl=_I("Reflect","construct"),Si=/^\s*(?:class|function)\b/,RI=EI(Si.exec),AI=!Si.test(Fl),yt=function(r){if(!Ll(r))return!1;try{return Dl(Fl,[],r),!0}catch{return!1}},Bl=function(r){if(!Ll(r))return!1;switch(kI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return AI||!!RI(Si,PI(r))}catch{return!0}};Bl.sham=!0;Gl.exports=!Dl||II(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Bl:yt});var Hl=i((_6,Ul)=>{"use strict";var NI=Math.ceil,MI=Math.floor;Ul.exports=Math.trunc||function(r){var t=+r;return(t>0?MI:NI)(t)}});var Cn=i((P6,Wl)=>{"use strict";var jI=Hl();Wl.exports=function(e){var r=+e;return r!==r||r===0?0:jI(r)}});var wi=i((R6,Kl)=>{"use strict";var $I=Cn(),LI=Math.max,FI=Math.min;Kl.exports=function(e,r){var t=$I(e);return t<0?LI(t+r,0):FI(t,r)}});var Ti=i((A6,zl)=>{"use strict";var DI=Cn(),BI=Math.min;zl.exports=function(e){var r=DI(e);return r>0?BI(r,9007199254740991):0}});var fe=i((N6,Vl)=>{"use strict";var GI=Ti();Vl.exports=function(e){return GI(e.length)}});var Br=i((M6,Yl)=>{"use strict";var UI=H(),HI=ne(),WI=Ke();Yl.exports=function(e,r,t){UI?HI.f(e,r,WI(0,t)):e[r]=t}});var Gr=i((j6,Jl)=>{"use strict";var KI=H(),zI=Pe(),VI=TypeError,YI=Object.getOwnPropertyDescriptor,JI=KI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Jl.exports=JI?function(e,r){if(zI(e)&&!YI(e,"length").writable)throw new VI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=i(($6,Ql)=>{"use strict";var QI=_(),XI=R(),ZI=Mr(),ek=XI("species");Ql.exports=function(e){return ZI>=51||!QI(function(){var r=[],t=r.constructor={};return t[ek]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=i((L6,Xl)=>{"use strict";var rk=A();Xl.exports=rk([].slice)});var rf=i(()=>{"use strict";var tk=x(),Zl=Pe(),nk=gt(),ak=L(),ef=wi(),ik=fe(),ok=_e(),uk=Br(),sk=Gr(),ck=R(),lk=bt(),fk=cr(),pk=lk("slice"),vk=ck("species"),Oi=Array,dk=Math.max;tk({target:"Array",proto:!0,forced:!pk},{slice:function(r,t){var n=ok(this),a=ik(n),o=ef(r,a),u=ef(t===void 0?a:t,a),s,c,l;if(Zl(n)&&(s=n.constructor,nk(s)&&(s===Oi||Zl(s.prototype))?s=void 0:ak(s)&&(s=s[vk],s===null&&(s=void 0)),s===Oi||s===void 0))return fk(n,o,u);for(c=new(s===void 0?Oi:s)(dk(u-o,0)),l=0;o<u;o++,l++)o in n&&uk(c,l,n[o]);return sk(c,l),c}})});var ue=i((B6,tf)=>{"use strict";var mk=P(),hk=V();tf.exports=function(e,r){var t=hk[e+"Prototype"],n=t&&t[r];if(n)return n;var a=mk[e],o=a&&a.prototype;return o&&o[r]}});var af=i((G6,nf)=>{"use strict";rf();var yk=ue();nf.exports=yk("Array","slice")});var uf=i((U6,of)=>{"use strict";var gk=U(),bk=af(),Ci=Array.prototype;of.exports=function(e){var r=e.slice;return e===Ci||gk(Ci,e)&&r===Ci.slice?bk:r}});var cf=i((H6,sf)=>{"use strict";var qk=uf();sf.exports=qk});var ff=i((W6,lf)=>{"use strict";var xk=cf();lf.exports=xk});var vf=i((K6,pf)=>{"use strict";var Sk=ff();pf.exports=Sk});var Ei=i((z6,df)=>{"use strict";df.exports=vf()});var Ur=i((V6,mf)=>{mf.exports=Ei()});var Ve=i((Y6,hf)=>{"use strict";var wk=ht(),Tk=String;hf.exports=function(e){if(wk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Tk(e)}});var qf=i((J6,bf)=>{"use strict";var Ii=A(),Ok=Cn(),Ck=Ve(),Ek=or(),Ik=Ii("".charAt),yf=Ii("".charCodeAt),kk=Ii("".slice),gf=function(e){return function(r,t){var n=Ck(Ek(r)),a=Ok(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=yf(n,a),u<55296||u>56319||a+1===o||(s=yf(n,a+1))<56320||s>57343?e?Ik(n,a):u:e?kk(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};bf.exports={codeAt:gf(!1),charAt:gf(!0)}});var wf=i((Q6,Sf)=>{"use strict";var _k=P(),Pk=N(),xf=_k.WeakMap;Sf.exports=Pk(xf)&&/native code/.test(String(xf))});var qt=i((X6,Of)=>{"use strict";var Rk=sr(),Ak=$r(),Tf=Rk("keys");Of.exports=function(e){return Tf[e]||(Tf[e]=Ak(e))}});var Hr=i((Z6,Cf)=>{"use strict";Cf.exports={}});var Ye=i((eU,kf)=>{"use strict";var Nk=wf(),If=P(),Mk=L(),jk=Oe(),ki=K(),_i=pt(),$k=qt(),Lk=Hr(),Ef="Object already initialized",Pi=If.TypeError,Fk=If.WeakMap,En,xt,In,Dk=function(e){return In(e)?xt(e):En(e,{})},Bk=function(e){return function(r){var t;if(!Mk(r)||(t=xt(r)).type!==e)throw new Pi("Incompatible receiver, "+e+" required");return t}};Nk||_i.state?(ye=_i.state||(_i.state=new Fk),ye.get=ye.get,ye.has=ye.has,ye.set=ye.set,En=function(e,r){if(ye.has(e))throw new Pi(Ef);return r.facade=e,ye.set(e,r),r},xt=function(e){return ye.get(e)||{}},In=function(e){return ye.has(e)}):(lr=$k("state"),Lk[lr]=!0,En=function(e,r){if(ki(e,lr))throw new Pi(Ef);return r.facade=e,jk(e,lr,r),r},xt=function(e){return ki(e,lr)?e[lr]:{}},In=function(e){return ki(e,lr)});var ye,lr;kf.exports={set:En,get:xt,has:In,enforce:Dk,getterFor:Bk}});var Rf=i((rU,Pf)=>{"use strict";var Ri=H(),Gk=K(),_f=Function.prototype,Uk=Ri&&Object.getOwnPropertyDescriptor,Ai=Gk(_f,"name"),Hk=Ai&&function(){}.name==="something",Wk=Ai&&(!Ri||Ri&&Uk(_f,"name").configurable);Pf.exports={EXISTS:Ai,PROPER:Hk,CONFIGURABLE:Wk}});var Ni=i((tU,Nf)=>{"use strict";var Kk=_e(),zk=wi(),Vk=fe(),Af=function(e){return function(r,t,n){var a=Kk(r),o=Vk(a);if(o===0)return!e&&-1;var u=zk(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Nf.exports={includes:Af(!0),indexOf:Af(!1)}});var ji=i((nU,jf)=>{"use strict";var Yk=A(),Mi=K(),Jk=_e(),Qk=Ni().indexOf,Xk=Hr(),Mf=Yk([].push);jf.exports=function(e,r){var t=Jk(e),n=0,a=[],o;for(o in t)!Mi(Xk,o)&&Mi(t,o)&&Mf(a,o);for(;r.length>n;)Mi(t,o=r[n++])&&(~Qk(a,o)||Mf(a,o));return a}});var kn=i((aU,$f)=>{"use strict";$f.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var _n=i((iU,Lf)=>{"use strict";var Zk=ji(),e1=kn();Lf.exports=Object.keys||function(r){return Zk(r,e1)}});var $i=i(Ff=>{"use strict";var r1=H(),t1=mi(),n1=ne(),a1=X(),i1=_e(),o1=_n();Ff.f=r1&&!t1?Object.defineProperties:function(r,t){a1(r);for(var n=i1(t),a=o1(t),o=a.length,u=0,s;o>u;)n1.f(r,s=a[u++],n[s]);return r}});var Li=i((uU,Df)=>{"use strict";var u1=W();Df.exports=u1("document","documentElement")});var Je=i((sU,zf)=>{"use strict";var s1=X(),c1=$i(),Bf=kn(),l1=Hr(),f1=Li(),p1=Sn(),v1=qt(),Gf=">",Uf="<",Di="prototype",Bi="script",Wf=v1("IE_PROTO"),Fi=function(){},Kf=function(e){return Uf+Bi+Gf+e+Uf+"/"+Bi+Gf},Hf=function(e){e.write(Kf("")),e.close();var r=e.parentWindow.Object;return e=null,r},d1=function(){var e=p1("iframe"),r="java"+Bi+":",t;return e.style.display="none",f1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Kf("document.F=Object")),t.close(),t.F},Pn,Rn=function(){try{Pn=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&Pn?Hf(Pn):d1():Hf(Pn);for(var e=Bf.length;e--;)delete Rn[Di][Bf[e]];return Rn()};l1[Wf]=!0;zf.exports=Object.create||function(r,t){var n;return r!==null?(Fi[Di]=s1(r),n=new Fi,Fi[Di]=null,n[Wf]=r):n=Rn(),t===void 0?n:c1.f(n,t)}});var Gi=i((cU,Vf)=>{"use strict";var m1=_();Vf.exports=!m1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=i((lU,Jf)=>{"use strict";var h1=K(),y1=N(),g1=te(),b1=qt(),q1=Gi(),Yf=b1("IE_PROTO"),Ui=Object,x1=Ui.prototype;Jf.exports=q1?Ui.getPrototypeOf:function(e){var r=g1(e);if(h1(r,Yf))return r[Yf];var t=r.constructor;return y1(t)&&r instanceof t?t.prototype:r instanceof Ui?x1:null}});var Re=i((fU,Qf)=>{"use strict";var S1=Oe();Qf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:S1(e,r,t),e}});var zi=i((pU,ep)=>{"use strict";var w1=_(),T1=N(),O1=L(),C1=Je(),Xf=St(),E1=Re(),I1=R(),k1=Z(),Ki=I1("iterator"),Zf=!1,Ae,Hi,Wi;[].keys&&(Wi=[].keys(),"next"in Wi?(Hi=Xf(Xf(Wi)),Hi!==Object.prototype&&(Ae=Hi)):Zf=!0);var _1=!O1(Ae)||w1(function(){var e={};return Ae[Ki].call(e)!==e});_1?Ae={}:k1&&(Ae=C1(Ae));T1(Ae[Ki])||E1(Ae,Ki,function(){return this});ep.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Zf}});var tp=i((vU,rp)=>{"use strict";var P1=Tn(),R1=ht();rp.exports=P1?{}.toString:function(){return"[object "+R1(this)+"]"}});var Ne=i((dU,ap)=>{"use strict";var A1=Tn(),N1=ne().f,M1=Oe(),j1=K(),$1=tp(),L1=R(),np=L1("toStringTag");ap.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(j1(a,np)||N1(a,np,{configurable:!0,value:r}),n&&!A1&&M1(a,"toString",$1))}});var fr=i((mU,ip)=>{"use strict";ip.exports={}});var up=i((hU,op)=>{"use strict";var F1=zi().IteratorPrototype,D1=Je(),B1=Ke(),G1=Ne(),U1=fr(),H1=function(){return this};op.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=D1(F1,{next:B1(+!n,t)}),G1(e,a,!1,!0),U1[a]=H1,e}});var cp=i((yU,sp)=>{"use strict";var W1=A(),K1=D();sp.exports=function(e,r,t){try{return W1(K1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var fp=i((gU,lp)=>{"use strict";var z1=L();lp.exports=function(e){return z1(e)||e===null}});var vp=i((bU,pp)=>{"use strict";var V1=fp(),Y1=String,J1=TypeError;pp.exports=function(e){if(V1(e))return e;throw new J1("Can't set "+Y1(e)+" as a prototype")}});var wt=i((qU,dp)=>{"use strict";var Q1=cp(),X1=L(),Z1=or(),e_=vp();dp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=Q1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return Z1(a),e_(o),X1(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Mn=i((xU,Tp)=>{"use strict";var r_=x(),t_=B(),An=Z(),Sp=Rf(),n_=N(),a_=up(),mp=St(),hp=wt(),i_=Ne(),o_=Oe(),Vi=Re(),u_=R(),yp=fr(),wp=zi(),s_=Sp.PROPER,c_=Sp.CONFIGURABLE,gp=wp.IteratorPrototype,Nn=wp.BUGGY_SAFARI_ITERATORS,Tt=u_("iterator"),bp="keys",Ot="values",qp="entries",xp=function(){return this};Tp.exports=function(e,r,t,n,a,o,u){a_(t,r,n);var s=function(b){if(b===a&&v)return v;if(!Nn&&b&&b in f)return f[b];switch(b){case bp:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case qp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],v=!Nn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=mp(d.call(new e)),h!==Object.prototype&&h.next&&(!An&&mp(h)!==gp&&(hp?hp(h,gp):n_(h[Tt])||Vi(h,Tt,xp)),i_(h,c,!0,!0),An&&(yp[c]=xp))),s_&&a===Ot&&p&&p.name!==Ot&&(!An&&c_?o_(f,"name",Ot):(l=!0,v=function(){return t_(p,this)})),a)if(m={values:s(Ot),keys:o?v:s(bp),entries:s(qp)},u)for(y in m)(Nn||l||!(y in f))&&Vi(f,y,m[y]);else r_({target:r,proto:!0,forced:Nn||l},m);return(!An||u)&&f[Tt]!==v&&Vi(f,Tt,v,{name:a}),yp[r]=v,m}});var jn=i((SU,Op)=>{"use strict";Op.exports=function(e,r){return{value:e,done:r}}});var pr=i(()=>{"use strict";var l_=qf().charAt,f_=Ve(),Ep=Ye(),p_=Mn(),Cp=jn(),Ip="String Iterator",v_=Ep.set,d_=Ep.getterFor(Ip);p_(String,"String",function(e){v_(this,{type:Ip,string:f_(e),index:0})},function(){var r=d_(this),t=r.string,n=r.index,a;return n>=t.length?Cp(void 0,!0):(a=l_(t,n),r.index+=a.length,Cp(a,!1))})});var Yi=i((OU,_p)=>{"use strict";var m_=B(),kp=X(),h_=qn();_p.exports=function(e,r,t){var n,a;kp(e);try{if(n=h_(e,"return"),!n){if(r==="throw")throw t;return t}n=m_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return kp(n),t}});var Rp=i((CU,Pp)=>{"use strict";var y_=X(),g_=Yi();Pp.exports=function(e,r,t,n){try{return n?r(y_(t)[0],t[1]):r(t)}catch(a){g_(e,"throw",a)}}});var Ji=i((EU,Ap)=>{"use strict";var b_=R(),q_=fr(),x_=b_("iterator"),S_=Array.prototype;Ap.exports=function(e){return e!==void 0&&(q_.Array===e||S_[x_]===e)}});var Ct=i((IU,Mp)=>{"use strict";var w_=ht(),Np=qn(),T_=ir(),O_=fr(),C_=R(),E_=C_("iterator");Mp.exports=function(e){if(!T_(e))return Np(e,E_)||Np(e,"@@iterator")||O_[w_(e)]}});var $n=i((kU,jp)=>{"use strict";var I_=B(),k_=D(),__=X(),P_=ze(),R_=Ct(),A_=TypeError;jp.exports=function(e,r){var t=arguments.length<2?R_(e):r;if(k_(t))return __(I_(t,e));throw new A_(P_(e)+" is not iterable")}});var Dp=i((_U,Fp)=>{"use strict";var N_=Y(),M_=B(),j_=te(),$_=Rp(),L_=Ji(),F_=gt(),D_=fe(),$p=Br(),B_=Gr(),G_=$n(),U_=Ct(),Lp=Array;Fp.exports=function(r){var t=j_(r),n=F_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=N_(o,a>2?arguments[2]:void 0));var s=U_(t),c=0,l,f,p,v,d,h;if(s&&!(this===Lp&&L_(s)))for(f=n?new this:[],v=G_(t,s),d=v.next;!(p=M_(d,v)).done;c++)h=u?$_(v,o,[p.value,c],!0):p.value,$p(f,c,h);else for(l=D_(t),f=n?new this(l):Lp(l);l>c;c++)h=u?o(t[c],c):t[c],$p(f,c,h);return B_(f,c),f}});var Xi=i((PU,Hp)=>{"use strict";var H_=R(),Gp=H_("iterator"),Up=!1;try{Bp=0,Qi={next:function(){return{done:!!Bp++}},return:function(){Up=!0}},Qi[Gp]=function(){return this},Array.from(Qi,function(){throw 2})}catch{}var Bp,Qi;Hp.exports=function(e,r){try{if(!r&&!Up)return!1}catch{return!1}var t=!1;try{var n={};n[Gp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Wp=i(()=>{"use strict";var W_=x(),K_=Dp(),z_=Xi(),V_=!z_(function(e){Array.from(e)});W_({target:"Array",stat:!0,forced:V_},{from:K_})});var zp=i((NU,Kp)=>{"use strict";pr();Wp();var Y_=V();Kp.exports=Y_.Array.from});var Yp=i((MU,Vp)=>{"use strict";var J_=zp();Vp.exports=J_});var Qp=i((jU,Jp)=>{"use strict";var Q_=Yp();Jp.exports=Q_});var Zp=i(($U,Xp)=>{"use strict";var X_=Qp();Xp.exports=X_});var Zi=i((LU,ev)=>{"use strict";ev.exports=Zp()});var Ln=i((FU,rv)=>{rv.exports=Zi()});var Et=i((DU,tv)=>{"use strict";var Z_=TypeError,eP=9007199254740991;tv.exports=function(e){if(e>eP)throw Z_("Maximum allowed index exceeded");return e}});var ov=i((BU,iv)=>{"use strict";var nv=Pe(),rP=gt(),tP=L(),nP=R(),aP=nP("species"),av=Array;iv.exports=function(e){var r;return nv(e)&&(r=e.constructor,rP(r)&&(r===av||nv(r.prototype))?r=void 0:tP(r)&&(r=r[aP],r===null&&(r=void 0))),r===void 0?av:r}});var Fn=i((GU,uv)=>{"use strict";var iP=ov();uv.exports=function(e,r){return new(iP(e))(r===0?0:r)}});var eo=i(()=>{"use strict";var oP=x(),uP=_(),sP=Pe(),cP=L(),lP=te(),fP=fe(),sv=Et(),cv=Br(),pP=Gr(),vP=Fn(),dP=bt(),mP=R(),hP=Mr(),lv=mP("isConcatSpreadable"),yP=hP>=51||!uP(function(){var e=[];return e[lv]=!1,e.concat()[0]!==e}),gP=function(e){if(!cP(e))return!1;var r=e[lv];return r!==void 0?!!r:sP(e)},bP=!yP||!dP("concat");oP({target:"Array",proto:!0,arity:1,forced:bP},{concat:function(r){var t=lP(this),n=vP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],gP(l))for(c=fP(l),sv(a+c),u=0;u<c;u++,a++)u in l&&cv(n,a,l[u]);else sv(a+1),cv(n,a++,l);return pP(n,a),n}})});var It=i(()=>{});var kt=i(fv=>{"use strict";var qP=ji(),xP=kn(),SP=xP.concat("length","prototype");fv.f=Object.getOwnPropertyNames||function(r){return qP(r,SP)}});var ro=i((VU,dv)=>{"use strict";var wP=Te(),TP=_e(),pv=kt().f,OP=cr(),vv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],CP=function(e){try{return pv(e)}catch{return OP(vv)}};dv.exports.f=function(r){return vv&&wP(r)==="Window"?CP(r):pv(TP(r))}});var Dn=i(mv=>{"use strict";mv.f=Object.getOwnPropertySymbols});var Bn=i((JU,hv)=>{"use strict";var EP=ne();hv.exports=function(e,r,t){return EP.f(e,r,t)}});var Wr=i(yv=>{"use strict";var IP=R();yv.f=IP});var M=i((XU,bv)=>{"use strict";var gv=V(),kP=K(),_P=Wr(),PP=ne().f;bv.exports=function(e){var r=gv.Symbol||(gv.Symbol={});kP(r,e)||PP(r,e,{value:_P.f(e)})}});var to=i((ZU,qv)=>{"use strict";var RP=B(),AP=W(),NP=R(),MP=Re();qv.exports=function(){var e=AP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=NP("toPrimitive");r&&!r[n]&&MP(r,n,function(a){return RP(t,this)},{arity:1})}});var _t=i((e8,Sv)=>{"use strict";var jP=Y(),$P=gn(),LP=te(),FP=fe(),xv=Fn(),no=Br(),Qe=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=LP(c),v=$P(p),d=FP(v),h=jP(l,f),m=0,y=0,b=r?xv(c,d):t||u?xv(c,0):void 0,q,I;d>m;m++)if((s||m in v)&&(q=v[m],I=h(q,m,p),e))if(r)no(b,m,I);else if(I)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:no(b,y++,q)}else switch(e){case 4:return!1;case 7:no(b,y++,q)}return o?-1:n||a?a:b}};Sv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var Fv=i(()=>{"use strict";var Gn=x(),At=P(),po=B(),DP=A(),BP=Z(),Kr=H(),zr=ur(),GP=_(),z=K(),UP=U(),uo=X(),Un=_e(),vo=xn(),HP=Ve(),so=Ke(),Vr=Je(),Ov=_n(),WP=kt(),Cv=ro(),KP=Dn(),Ev=vt(),Iv=ne(),zP=$i(),kv=ti(),ao=Re(),VP=Bn(),mo=sr(),YP=qt(),_v=Hr(),wv=$r(),JP=R(),QP=Wr(),XP=M(),ZP=to(),eR=Ne(),Pv=Ye(),Hn=_t().forEach,ae=YP("hidden"),Wn="Symbol",Rt="prototype",rR=Pv.set,Tv=Pv.getterFor(Wn),pe=Object[Rt],vr=At.Symbol,Pt=vr&&vr[Rt],tR=At.RangeError,nR=At.TypeError,io=At.QObject,Rv=Ev.f,dr=Iv.f,Av=Cv.f,aR=kv.f,Nv=DP([].push),Me=mo("symbols"),Nt=mo("op-symbols"),iR=mo("wks"),co=!io||!io[Rt]||!io[Rt].findChild,Mv=function(e,r,t){var n=Rv(pe,r);n&&delete pe[r],dr(e,r,t),n&&e!==pe&&dr(pe,r,n)},lo=Kr&&GP(function(){return Vr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Mv:dr,oo=function(e,r){var t=Me[e]=Vr(Pt);return rR(t,{type:Wn,tag:e,description:r}),Kr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),uo(r);var a=vo(t);return uo(n),z(Me,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Vr(n,{enumerable:so(0,!1)})):(z(r,ae)||dr(r,ae,so(1,Vr(null))),r[ae][a]=!0),lo(r,a,n)):dr(r,a,n)},ho=function(r,t){uo(r);var n=Un(t),a=Ov(n).concat(Lv(n));return Hn(a,function(o){(!Kr||po(fo,n,o))&&Kn(r,o,n[o])}),r},oR=function(r,t){return t===void 0?Vr(r):ho(Vr(r),t)},fo=function(r){var t=vo(r),n=po(aR,this,t);return this===pe&&z(Me,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(Me,t)||z(this,ae)&&this[ae][t]?n:!0},jv=function(r,t){var n=Un(r),a=vo(t);if(!(n===pe&&z(Me,a)&&!z(Nt,a))){var o=Rv(n,a);return o&&z(Me,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},$v=function(r){var t=Av(Un(r)),n=[];return Hn(t,function(a){!z(Me,a)&&!z(_v,a)&&Nv(n,a)}),n},Lv=function(e){var r=e===pe,t=Av(r?Nt:Un(e)),n=[];return Hn(t,function(a){z(Me,a)&&(!r||z(pe,a))&&Nv(n,Me[a])}),n};zr||(vr=function(){if(UP(Pt,this))throw new nR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:HP(arguments[0]),t=wv(r),n=function(a){var o=this===void 0?At:this;o===pe&&po(n,Nt,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=so(1,a);try{lo(o,t,u)}catch(s){if(!(s instanceof tR))throw s;Mv(o,t,u)}};return Kr&&co&&lo(pe,t,{configurable:!0,set:n}),oo(t,r)},Pt=vr[Rt],ao(Pt,"toString",function(){return Tv(this).tag}),ao(vr,"withoutSetter",function(e){return oo(wv(e),e)}),kv.f=fo,Iv.f=Kn,zP.f=ho,Ev.f=jv,WP.f=Cv.f=$v,KP.f=Lv,QP.f=function(e){return oo(JP(e),e)},Kr&&(VP(Pt,"description",{configurable:!0,get:function(){return Tv(this).description}}),BP||ao(pe,"propertyIsEnumerable",fo,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:vr});Hn(Ov(iR),function(e){XP(e)});Gn({target:Wn,stat:!0,forced:!zr},{useSetter:function(){co=!0},useSimple:function(){co=!1}});Gn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:oR,defineProperty:Kn,defineProperties:ho,getOwnPropertyDescriptor:jv});Gn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:$v});ZP();eR(vr,Wn);_v[ae]=!0});var yo=i((n8,Dv)=>{"use strict";var uR=ur();Dv.exports=uR&&!!Symbol.for&&!!Symbol.keyFor});var Gv=i(()=>{"use strict";var sR=x(),cR=W(),lR=K(),fR=Ve(),Bv=sr(),pR=yo(),go=Bv("string-to-symbol-registry"),vR=Bv("symbol-to-string-registry");sR({target:"Symbol",stat:!0,forced:!pR},{for:function(e){var r=fR(e);if(lR(go,r))return go[r];var t=cR("Symbol")(r);return go[r]=t,vR[t]=r,t}})});var Hv=i(()=>{"use strict";var dR=x(),mR=K(),hR=jr(),yR=ze(),gR=sr(),bR=yo(),Uv=gR("symbol-to-string-registry");dR({target:"Symbol",stat:!0,forced:!bR},{keyFor:function(r){if(!hR(r))throw new TypeError(yR(r)+" is not a symbol");if(mR(Uv,r))return Uv[r]}})});var Kv=i((s8,Wv)=>{"use strict";var qR=L(),xR=Ye().get;Wv.exports=function(r){if(!qR(r))return!1;var t=xR(r);return!!t&&t.type==="RawJSON"}});var Qv=i((c8,Jv)=>{"use strict";var bo=A(),SR=K(),zn=SyntaxError,wR=parseInt,TR=String.fromCharCode,OR=bo("".charAt),zv=bo("".slice),Vv=bo(/./.exec),Yv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},CR=/^[\da-f]{4}$/i,ER=/^[\u0000-\u001F]$/;Jv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=OR(e,r);if(a==="\\"){var o=zv(e,r,r+2);if(SR(Yv,o))n+=Yv[o],r+=2;else if(o==="\\u"){r+=2;var u=zv(e,r,r+4);if(!Vv(CR,u))throw new zn("Bad Unicode escape at: "+r);n+=TR(wR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Vv(ER,a))throw new zn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Zv=i((l8,Xv)=>{"use strict";var IR=_();Xv.exports=!IR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var vd=i(()=>{"use strict";var kR=x(),ud=W(),_R=Ar(),sd=B(),mr=A(),cd=_(),ed=Pe(),Yn=N(),PR=Kv(),rd=jr(),td=Te(),RR=Ve(),AR=cr(),NR=Qv(),MR=$r(),jR=ur(),qo=Zv(),ld=String,Xe=ud("JSON","stringify"),Vn=mr(/./.exec),So=mr("".charAt),$R=mr("".charCodeAt),LR=mr("".replace),xo=mr("".slice),wo=mr([].push),FR=mr(1.1.toString),DR=/[\uD800-\uDFFF]/g,nd=/^[\uD800-\uDBFF]$/,ad=/^[\uDC00-\uDFFF]$/,To=MR(),id=To.length,fd=!jR||cd(function(){var e=ud("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),od=cd(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),BR=fd?function(e,r){var t=AR(arguments),n=pd(r);if(!(!Yn(n)&&(e===void 0||rd(e))))return t[1]=function(a,o){if(Yn(n)&&(o=sd(n,this,ld(a),o)),!rd(o))return o},_R(Xe,null,t)}:Xe,GR=function(e,r,t){var n=So(t,r-1),a=So(t,r+1);return Vn(nd,e)&&!Vn(ad,a)||Vn(ad,e)&&!Vn(nd,n)?"\\u"+FR($R(e,0),16):e},pd=function(e){if(Yn(e))return e;if(ed(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?wo(t,a):(typeof a=="number"||td(a)==="Number"||td(a)==="String")&&wo(t,RR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(ed(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};Xe&&kR({target:"JSON",stat:!0,arity:3,forced:fd||od||!qo},{stringify:function(r,t,n){var a=pd(t),o=[],u=BR(r,function(d,h){var m=Yn(a)?sd(a,this,ld(d),h):h;return!qo&&PR(m)?To+(wo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(od&&(u=LR(u,DR,GR)),qo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=So(u,l);if(f==='"'){var p=NR(u,++l).end-1,v=xo(u,l,p);s+=xo(v,0,id)===To?o[xo(v,id)]:'"'+v+'"',l=p}else s+=f}return s}})});var md=i(()=>{"use strict";var UR=x(),HR=ur(),WR=_(),dd=Dn(),KR=te(),zR=!HR||WR(function(){dd.f(1)});UR({target:"Object",stat:!0,forced:zR},{getOwnPropertySymbols:function(r){var t=dd.f;return t?t(KR(r)):[]}})});var hd=i(()=>{"use strict";Fv();Gv();Hv();vd();md()});var Oo=i(()=>{"use strict";var VR=M();VR("asyncDispose")});var Co=i(()=>{"use strict";var YR=M();YR("asyncIterator")});var yd=i(()=>{});var Eo=i(()=>{"use strict";var JR=M();JR("dispose")});var gd=i(()=>{"use strict";var QR=M();QR("hasInstance")});var bd=i(()=>{"use strict";var XR=M();XR("isConcatSpreadable")});var Io=i(()=>{"use strict";var ZR=M();ZR("iterator")});var qd=i(()=>{"use strict";var eA=M();eA("match")});var xd=i(()=>{"use strict";var rA=M();rA("matchAll")});var Sd=i(()=>{"use strict";var tA=M();tA("replace")});var wd=i(()=>{"use strict";var nA=M();nA("search")});var Td=i(()=>{"use strict";var aA=M();aA("species")});var Od=i(()=>{"use strict";var iA=M();iA("split")});var ko=i(()=>{"use strict";var oA=M(),uA=to();oA("toPrimitive");uA()});var Cd=i(()=>{"use strict";var sA=W(),cA=M(),lA=Ne();cA("toStringTag");lA(sA("Symbol"),"Symbol")});var Ed=i(()=>{"use strict";var fA=M();fA("unscopables")});var Id=i(()=>{"use strict";var pA=P(),vA=Ne();vA(pA.JSON,"JSON",!0)});var kd=i(()=>{});var _d=i(()=>{});var Rd=i((rH,Pd)=>{"use strict";eo();It();hd();Oo();Co();yd();Eo();gd();bd();Io();qd();xd();Sd();wd();Td();Od();ko();Cd();Ed();Id();kd();_d();var dA=V();Pd.exports=dA.Symbol});var _o=i((tH,Ad)=>{"use strict";Ad.exports=function(){}});var hr=i((nH,Ld)=>{"use strict";var mA=_e(),Po=_o(),Nd=fr(),jd=Ye(),hA=ne().f,yA=Mn(),Jn=jn(),gA=Z(),bA=H(),$d="Array Iterator",qA=jd.set,xA=jd.getterFor($d);Ld.exports=yA(Array,"Array",function(e,r){qA(this,{type:$d,target:mA(e),index:0,kind:r})},function(){var e=xA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var Md=Nd.Arguments=Nd.Array;Po("keys");Po("values");Po("entries");if(!gA&&bA&&Md.name!=="values")try{hA(Md,"name",{value:"values"})}catch{}});var Dd=i((aH,Fd)=>{"use strict";Fd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=i(()=>{"use strict";hr();var SA=Dd(),wA=P(),TA=Ne(),Bd=fr();for(Qn in SA)TA(wA[Qn],Qn),Bd[Qn]=Bd.Array;var Qn});var Ud=i((uH,Gd)=>{"use strict";var OA=Rd();yr();Gd.exports=OA});var Kd=i(()=>{"use strict";var CA=R(),EA=ne().f,Hd=CA("metadata"),Wd=Function.prototype;Wd[Hd]===void 0&&EA(Wd,Hd,{value:null})});var zd=i(()=>{"use strict";Oo()});var Vd=i(()=>{"use strict";Eo()});var Yd=i(()=>{"use strict";var IA=M();IA("metadata")});var Qd=i((hH,Jd)=>{"use strict";var kA=Ud();Kd();zd();Vd();Yd();Jd.exports=kA});var Ao=i((yH,Xd)=>{"use strict";var _A=W(),PA=A(),Ro=_A("Symbol"),RA=Ro.keyFor,AA=PA(Ro.prototype.valueOf);Xd.exports=Ro.isRegisteredSymbol||function(r){try{return RA(AA(r))!==void 0}catch{return!1}}});var Zd=i(()=>{"use strict";var NA=x(),MA=Ao();NA({target:"Symbol",stat:!0},{isRegisteredSymbol:MA})});var jo=i((qH,im)=>{"use strict";var jA=sr(),nm=W(),$A=A(),LA=jr(),FA=R(),Zn=nm("Symbol"),em=Zn.isWellKnownSymbol,am=nm("Object","getOwnPropertyNames"),DA=$A(Zn.prototype.valueOf),rm=jA("wks");for(Xn=0,No=am(Zn),tm=No.length;Xn<tm;Xn++)try{Mo=No[Xn],LA(Zn[Mo])&&FA(Mo)}catch{}var Mo,Xn,No,tm;im.exports=function(r){if(em&&em(r))return!0;try{for(var t=DA(r),n=0,a=am(rm),o=a.length;n<o;n++)if(rm[a[n]]==t)return!0}catch{}return!1}});var om=i(()=>{"use strict";var BA=x(),GA=jo();BA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:GA})});var um=i(()=>{"use strict";var UA=M();UA("customMatcher")});var sm=i(()=>{"use strict";var HA=M();HA("observable")});var cm=i(()=>{"use strict";var WA=x(),KA=Ao();WA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:KA})});var lm=i(()=>{"use strict";var zA=x(),VA=jo();zA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:VA})});var fm=i(()=>{"use strict";var YA=M();YA("matcher")});var pm=i(()=>{"use strict";var JA=M();JA("metadataKey")});var vm=i(()=>{"use strict";var QA=M();QA("patternMatch")});var dm=i(()=>{"use strict";var XA=M();XA("replaceAll")});var hm=i((FH,mm)=>{"use strict";var ZA=Qd();Zd();om();um();sm();cm();lm();fm();pm();vm();dm();mm.exports=ZA});var Ce=i((DH,ym)=>{"use strict";ym.exports=hm()});var ea=i((BH,gm)=>{gm.exports=Ce()});var qm=i((GH,bm)=>{"use strict";hr();pr();var e2=Ct();bm.exports=e2});var Sm=i((UH,xm)=>{"use strict";var r2=qm();yr();xm.exports=r2});var Tm=i((HH,wm)=>{"use strict";var t2=Sm();wm.exports=t2});var Cm=i((WH,Om)=>{"use strict";var n2=Tm();Om.exports=n2});var $o=i((KH,Em)=>{"use strict";Em.exports=Cm()});var ra=i((zH,Im)=>{Im.exports=$o()});var _m=i((VH,km)=>{"use strict";hr();pr();var a2=$n();km.exports=a2});var Rm=i((YH,Pm)=>{"use strict";var i2=_m();yr();Pm.exports=i2});var Nm=i((JH,Am)=>{"use strict";var o2=Rm();Am.exports=o2});var jm=i((QH,Mm)=>{"use strict";var u2=Nm();Mm.exports=u2});var Lm=i((XH,$m)=>{"use strict";$m.exports=jm()});var ta=i((ZH,Fm)=>{Fm.exports=Lm()});var Bm=i((eW,Dm)=>{"use strict";var s2=W(),c2=A(),l2=kt(),f2=Dn(),p2=X(),v2=c2([].concat);Dm.exports=s2("Reflect","ownKeys")||function(r){var t=l2.f(p2(r)),n=f2.f;return n?v2(t,n(r)):t}});var Hm=i((rW,Um)=>{"use strict";var Gm=K(),d2=Bm(),m2=vt(),h2=ne();Um.exports=function(e,r,t){for(var n=d2(r),a=h2.f,o=m2.f,u=0;u<n.length;u++){var s=n[u];!Gm(e,s)&&!(t&&Gm(t,s))&&a(e,s,o(r,s))}}});var Km=i((tW,Wm)=>{"use strict";var y2=L(),g2=Oe();Wm.exports=function(e,r){y2(r)&&"cause"in r&&g2(e,"cause",r.cause)}});var Jm=i((nW,Ym)=>{"use strict";var b2=A(),zm=Error,q2=b2("".replace),x2=function(e){return String(new zm(e).stack)}("zxcasd"),Vm=/\n\s*at [^:]*:[^\n]*/,S2=Vm.test(x2);Ym.exports=function(e,r){if(S2&&typeof e=="string"&&!zm.prepareStackTrace)for(;r--;)e=q2(e,Vm,"");return e}});var Xm=i((aW,Qm)=>{"use strict";var w2=_(),T2=Ke();Qm.exports=!w2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",T2(1,7)),e.stack!==7):!0})});var rh=i((iW,eh)=>{"use strict";var O2=Oe(),C2=Jm(),E2=Xm(),Zm=Error.captureStackTrace;eh.exports=function(e,r,t,n){E2&&(Zm?Zm(e,r):O2(e,"stack",C2(t,n)))}});var ve=i((oW,ih)=>{"use strict";var I2=Y(),k2=B(),_2=X(),P2=ze(),R2=Ji(),A2=fe(),th=U(),N2=$n(),M2=Ct(),nh=Yi(),j2=TypeError,na=function(e,r){this.stopped=e,this.result=r},ah=na.prototype;ih.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=I2(r,n),l,f,p,v,d,h,m,y=function(q){return l&&nh(l,"normal"),new na(!0,q)},b=function(q){return a?(_2(q),s?c(q[0],q[1],y):c(q[0],q[1])):s?c(q,y):c(q)};if(o)l=e.iterator;else if(u)l=e;else{if(f=M2(e),!f)throw new j2(P2(e)+" is not iterable");if(R2(f)){for(p=0,v=A2(e);v>p;p++)if(d=b(e[p]),d&&th(ah,d))return d;return new na(!1)}l=N2(e,f)}for(h=o?e.next:l.next;!(m=k2(h,l)).done;){try{d=b(m.value)}catch(q){nh(l,"throw",q)}if(typeof d=="object"&&d&&th(ah,d))return d}return new na(!1)}});var uh=i((uW,oh)=>{"use strict";var $2=Ve();oh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:$2(e)}});var ch=i(()=>{"use strict";var L2=x(),F2=U(),D2=St(),aa=wt(),B2=Hm(),sh=Je(),Lo=Oe(),Fo=Ke(),G2=Km(),U2=rh(),H2=ve(),W2=uh(),K2=R(),z2=K2("toStringTag"),ia=Error,V2=[].push,Yr=function(r,t){var n=F2(Do,this),a;aa?a=aa(new ia,n?D2(this):Do):(a=n?this:sh(Do),Lo(a,z2,"Error")),t!==void 0&&Lo(a,"message",W2(t)),U2(a,Yr,a.stack,1),arguments.length>2&&G2(a,arguments[2]);var o=[];return H2(r,V2,{that:o}),Lo(a,"errors",o),a};aa?aa(Yr,ia):B2(Yr,ia,{name:!0});var Do=Yr.prototype=sh(ia.prototype,{constructor:Fo(1,Yr),message:Fo(1,""),name:Fo(1,"AggregateError")});L2({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var Bo=i(()=>{"use strict";ch()});var Go=i((pW,lh)=>{"use strict";var Mt=P(),Y2=Nr(),J2=Te(),oa=function(e){return Y2.slice(0,e.length)===e};lh.exports=function(){return oa("Bun/")?"BUN":oa("Cloudflare-Workers")?"CLOUDFLARE":oa("Deno/")?"DENO":oa("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":J2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=i((vW,fh)=>{"use strict";var Q2=Go();fh.exports=Q2==="NODE"});var Uo=i((dW,vh)=>{"use strict";var X2=W(),Z2=Bn(),eN=R(),rN=H(),ph=eN("species");vh.exports=function(e){var r=X2(e);rN&&r&&!r[ph]&&Z2(r,ph,{configurable:!0,get:function(){return this}})}});var ua=i((mW,dh)=>{"use strict";var tN=U(),nN=TypeError;dh.exports=function(e,r){if(tN(r,e))return e;throw new nN("Incorrect invocation")}});var Ho=i((hW,mh)=>{"use strict";var aN=gt(),iN=ze(),oN=TypeError;mh.exports=function(e){if(aN(e))return e;throw new oN(iN(e)+" is not a constructor")}});var Wo=i((yW,yh)=>{"use strict";var hh=X(),uN=Ho(),sN=ir(),cN=R(),lN=cN("species");yh.exports=function(e,r){var t=hh(e).constructor,n;return t===void 0||sN(n=hh(t)[lN])?r:uN(n)}});var bh=i((gW,gh)=>{"use strict";var fN=TypeError;gh.exports=function(e,r){if(e<r)throw new fN("Not enough arguments");return e}});var Ko=i((bW,qh)=>{"use strict";var pN=Nr();qh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(pN)});var ru=i((qW,kh)=>{"use strict";var se=P(),vN=Ar(),dN=Y(),xh=N(),mN=K(),Ih=_(),Sh=Li(),hN=cr(),wh=Sn(),yN=bh(),gN=Ko(),bN=jt(),Xo=se.setImmediate,Zo=se.clearImmediate,qN=se.process,zo=se.Dispatch,xN=se.Function,Th=se.MessageChannel,SN=se.String,Vo=0,$t={},Oh="onreadystatechange",Lt,gr,Yo,Jo;Ih(function(){Lt=se.location});var eu=function(e){if(mN($t,e)){var r=$t[e];delete $t[e],r()}},Qo=function(e){return function(){eu(e)}},Ch=function(e){eu(e.data)},Eh=function(e){se.postMessage(SN(e),Lt.protocol+"//"+Lt.host)};(!Xo||!Zo)&&(Xo=function(r){yN(arguments.length,1);var t=xh(r)?r:xN(r),n=hN(arguments,1);return $t[++Vo]=function(){vN(t,void 0,n)},gr(Vo),Vo},Zo=function(r){delete $t[r]},bN?gr=function(e){qN.nextTick(Qo(e))}:zo&&zo.now?gr=function(e){zo.now(Qo(e))}:Th&&!gN?(Yo=new Th,Jo=Yo.port2,Yo.port1.onmessage=Ch,gr=dN(Jo.postMessage,Jo)):se.addEventListener&&xh(se.postMessage)&&!se.importScripts&&Lt&&Lt.protocol!=="file:"&&!Ih(Eh)?(gr=Eh,se.addEventListener("message",Ch,!1)):Oh in wh("script")?gr=function(e){Sh.appendChild(wh("script"))[Oh]=function(){Sh.removeChild(this),eu(e)}}:gr=function(e){setTimeout(Qo(e),0)});kh.exports={set:Xo,clear:Zo}});var Rh=i((xW,Ph)=>{"use strict";var _h=P(),wN=H(),TN=Object.getOwnPropertyDescriptor;Ph.exports=function(e){if(!wN)return _h[e];var r=TN(_h,e);return r&&r.value}});var tu=i((SW,Nh)=>{"use strict";var Ah=function(){this.head=null,this.tail=null};Ah.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Nh.exports=Ah});var jh=i((wW,Mh)=>{"use strict";var ON=Nr();Mh.exports=/ipad|iphone|ipod/i.test(ON)&&typeof Pebble<"u"});var Lh=i((TW,$h)=>{"use strict";var CN=Nr();$h.exports=/web0s(?!.*chrome)/i.test(CN)});var Wh=i((OW,Hh)=>{"use strict";var Qr=P(),EN=Rh(),Fh=Y(),nu=ru().set,IN=tu(),kN=Ko(),_N=jh(),PN=Lh(),au=jt(),Dh=Qr.MutationObserver||Qr.WebKitMutationObserver,Bh=Qr.document,Gh=Qr.process,sa=Qr.Promise,uu=EN("queueMicrotask"),Jr,iu,ou,ca,Uh;uu||(Ft=new IN,Dt=function(){var e,r;for(au&&(e=Gh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Jr(),t}e&&e.enter()},!kN&&!au&&!PN&&Dh&&Bh?(iu=!0,ou=Bh.createTextNode(""),new Dh(Dt).observe(ou,{characterData:!0}),Jr=function(){ou.data=iu=!iu}):!_N&&sa&&sa.resolve?(ca=sa.resolve(void 0),ca.constructor=sa,Uh=Fh(ca.then,ca),Jr=function(){Uh(Dt)}):au?Jr=function(){Gh.nextTick(Dt)}:(nu=Fh(nu,Qr),Jr=function(){nu(Dt)}),uu=function(e){Ft.head||Jr(),Ft.add(e)});var Ft,Dt;Hh.exports=uu});var zh=i((CW,Kh)=>{"use strict";Kh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var br=i((EW,Vh)=>{"use strict";Vh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=i((IW,Yh)=>{"use strict";var RN=P();Yh.exports=RN.Promise});var Xr=i((kW,Zh)=>{"use strict";var AN=P(),Bt=qr(),NN=N(),MN=di(),jN=xi(),$N=R(),Jh=Go(),LN=Z(),su=Mr(),Qh=Bt&&Bt.prototype,FN=$N("species"),cu=!1,Xh=NN(AN.PromiseRejectionEvent),DN=MN("Promise",function(){var e=jN(Bt),r=e!==String(Bt);if(!r&&su===66||LN&&!(Qh.catch&&Qh.finally))return!0;if(!su||su<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[FN]=n,cu=t.then(function(){})instanceof n,!cu)return!0}return!r&&(Jh==="BROWSER"||Jh==="DENO")&&!Xh});Zh.exports={CONSTRUCTOR:DN,REJECTION_EVENT:Xh,SUBCLASSING:cu}});var Ee=i((_W,ry)=>{"use strict";var ey=D(),BN=TypeError,GN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new BN("Bad Promise constructor");r=n,t=a}),this.resolve=ey(r),this.reject=ey(t)};ry.exports.f=function(e){return new GN(e)}});var xy=i(()=>{"use strict";var UN=x(),HN=Z(),va=jt(),Ze=P(),WN=V(),tt=B(),ty=Re(),ny=wt(),KN=Ne(),zN=Uo(),VN=D(),pa=N(),YN=L(),JN=ua(),QN=Wo(),sy=ru().set,du=Wh(),XN=zh(),ZN=br(),eM=tu(),cy=Ye(),da=qr(),mu=Xr(),ly=Ee(),ma="Promise",fy=mu.CONSTRUCTOR,rM=mu.REJECTION_EVENT,tM=mu.SUBCLASSING,lu=cy.getterFor(ma),nM=cy.set,Zr=da&&da.prototype,xr=da,la=Zr,py=Ze.TypeError,fu=Ze.document,hu=Ze.process,pu=ly.f,aM=pu,iM=!!(fu&&fu.createEvent&&Ze.dispatchEvent),vy="unhandledrejection",oM="rejectionhandled",ay=0,dy=1,uM=2,yu=1,my=2,fa,iy,hy,oy,yy=function(e){var r;return YN(e)&&pa(r=e.then)?r:!1},gy=function(e,r){var t=r.value,n=r.state===dy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===my&&cM(r),r.rejection=yu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new py("Promise-chain cycle")):(l=yy(c))?tt(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},by=function(e,r){e.notified||(e.notified=!0,du(function(){for(var t=e.reactions,n;n=t.get();)gy(n,e);e.notified=!1,r&&!e.rejection&&sM(e)}))},qy=function(e,r,t){var n,a;iM?(n=fu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!rM&&(a=Ze["on"+e])?a(n):e===vy&&XN("Unhandled promise rejection",t)},sM=function(e){tt(sy,Ze,function(){var r=e.facade,t=e.value,n=uy(e),a;if(n&&(a=ZN(function(){va?hu.emit("unhandledRejection",t,r):qy(vy,r,t)}),e.rejection=va||uy(e)?my:yu,a.error))throw a.value})},uy=function(e){return e.rejection!==yu&&!e.parent},cM=function(e){tt(sy,Ze,function(){var r=e.facade;va?hu.emit("rejectionHandled",r):qy(oM,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=uM,by(e,!0))},vu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new py("Promise can't be resolved itself");var n=yy(r);n?du(function(){var a={done:!1};try{tt(n,r,et(vu,a,e),et(rt,a,e))}catch(o){rt(a,o,e)}}):(e.value=r,e.state=dy,by(e,!1))}catch(a){rt({done:!1},a,e)}}};if(fy&&(xr=function(r){JN(this,la),VN(r),tt(fa,this);var t=lu(this);try{r(et(vu,t),et(rt,t))}catch(n){rt(t,n)}},la=xr.prototype,fa=function(r){nM(this,{type:ma,done:!1,notified:!1,parent:!1,reactions:new eM,rejection:!1,state:ay,value:null})},fa.prototype=ty(la,"then",function(r,t){var n=lu(this),a=pu(QN(this,xr));return n.parent=!0,a.ok=pa(r)?r:!0,a.fail=pa(t)&&t,a.domain=va?hu.domain:void 0,n.state===ay?n.reactions.add(a):du(function(){gy(a,n)}),a.promise}),iy=function(){var e=new fa,r=lu(e);this.promise=e,this.resolve=et(vu,r),this.reject=et(rt,r)},ly.f=pu=function(e){return e===xr||e===hy?new iy(e):aM(e)},!HN&&pa(da)&&Zr!==Object.prototype)){oy=Zr.then,tM||ty(Zr,"then",function(r,t){var n=this;return new xr(function(a,o){tt(oy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}ny&&ny(Zr,la)}UN({global:!0,constructor:!0,wrap:!0,forced:fy},{Promise:xr});hy=WN.Promise;KN(xr,ma,!1,!0);zN(ma)});var Gt=i((AW,Sy)=>{"use strict";var lM=qr(),fM=Xi(),pM=Xr().CONSTRUCTOR;Sy.exports=pM||!fM(function(e){lM.all(e).then(void 0,function(){})})});var wy=i(()=>{"use strict";var vM=x(),dM=B(),mM=D(),hM=Ee(),yM=br(),gM=ve(),bM=Gt();vM({target:"Promise",stat:!0,forced:bM},{all:function(r){var t=this,n=hM.f(t),a=n.resolve,o=n.reject,u=yM(function(){var s=mM(t.resolve),c=[],l=0,f=1;gM(r,function(p){var v=l++,d=!1;f++,dM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Oy=i(()=>{"use strict";var qM=x(),xM=Z(),SM=Xr().CONSTRUCTOR,bu=qr(),wM=W(),TM=N(),OM=Re(),Ty=bu&&bu.prototype;qM({target:"Promise",proto:!0,forced:SM,real:!0},{catch:function(e){return this.then(void 0,e)}});!xM&&TM(bu)&&(gu=wM("Promise").prototype.catch,Ty.catch!==gu&&OM(Ty,"catch",gu,{unsafe:!0}));var gu});var Cy=i(()=>{"use strict";var CM=x(),EM=B(),IM=D(),kM=Ee(),_M=br(),PM=ve(),RM=Gt();CM({target:"Promise",stat:!0,forced:RM},{race:function(r){var t=this,n=kM.f(t),a=n.reject,o=_M(function(){var u=IM(t.resolve);PM(r,function(s){EM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ey=i(()=>{"use strict";var AM=x(),NM=Ee(),MM=Xr().CONSTRUCTOR;AM({target:"Promise",stat:!0,forced:MM},{reject:function(r){var t=NM.f(this),n=t.reject;return n(r),t.promise}})});var qu=i((GW,Iy)=>{"use strict";var jM=X(),$M=L(),LM=Ee();Iy.exports=function(e,r){if(jM(e),$M(r)&&r.constructor===e)return r;var t=LM.f(e),n=t.resolve;return n(r),t.promise}});var Py=i(()=>{"use strict";var FM=x(),DM=W(),ky=Z(),BM=qr(),_y=Xr().CONSTRUCTOR,GM=qu(),UM=DM("Promise"),HM=ky&&!_y;FM({target:"Promise",stat:!0,forced:ky||_y},{resolve:function(r){return GM(HM&&this===UM?BM:this,r)}})});var Ry=i(()=>{"use strict";xy();wy();Oy();Cy();Ey();Py()});var xu=i(()=>{"use strict";var WM=x(),KM=B(),zM=D(),VM=Ee(),YM=br(),JM=ve(),QM=Gt();WM({target:"Promise",stat:!0,forced:QM},{allSettled:function(r){var t=this,n=VM.f(t),a=n.resolve,o=n.reject,u=YM(function(){var s=zM(t.resolve),c=[],l=0,f=1;JM(r,function(p){var v=l++,d=!1;f++,KM(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Su=i(()=>{"use strict";var XM=x(),ZM=B(),ej=D(),rj=W(),tj=Ee(),nj=br(),aj=ve(),ij=Gt(),Ay="No one promise resolved";XM({target:"Promise",stat:!0,forced:ij},{any:function(r){var t=this,n=rj("AggregateError"),a=tj.f(t),o=a.resolve,u=a.reject,s=nj(function(){var c=ej(t.resolve),l=[],f=0,p=1,v=!1;aj(r,function(d){var h=f++,m=!1;p++,ZM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,l[h]=y,--p||u(new n(l,Ay)))})}),--p||u(new n(l,Ay))});return s.error&&u(s.value),a.promise}})});var Tu=i(()=>{"use strict";var oj=x(),uj=P(),sj=Ar(),cj=cr(),lj=Ee(),fj=D(),My=br(),wu=uj.Promise,Ny=!1,pj=!wu||!wu.try||My(function(){wu.try(function(e){Ny=e===8},8)}).error||!Ny;oj({target:"Promise",stat:!0,forced:pj},{try:function(e){var r=arguments.length>1?cj(arguments,1):[],t=lj.f(this),n=My(function(){return sj(fj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ou=i(()=>{"use strict";var vj=x(),dj=Ee();vj({target:"Promise",stat:!0},{withResolvers:function(){var r=dj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Fy=i(()=>{"use strict";var mj=x(),hj=Z(),ha=qr(),yj=_(),$y=W(),Ly=N(),gj=Wo(),jy=qu(),bj=Re(),Eu=ha&&ha.prototype,qj=!!ha&&yj(function(){Eu.finally.call({then:function(){}},function(){})});mj({target:"Promise",proto:!0,real:!0,forced:qj},{finally:function(e){var r=gj(this,$y("Promise")),t=Ly(e);return this.then(t?function(n){return jy(r,e()).then(function(){return n})}:e,t?function(n){return jy(r,e()).then(function(){throw n})}:e)}});!hj&&Ly(ha)&&(Cu=$y("Promise").prototype.finally,Eu.finally!==Cu&&bj(Eu,"finally",Cu,{unsafe:!0}));var Cu});var By=i((nK,Dy)=>{"use strict";Bo();hr();It();Ry();xu();Su();Tu();Ou();Fy();pr();var xj=V();Dy.exports=xj.Promise});var Uy=i((aK,Gy)=>{"use strict";var Sj=By();yr();Gy.exports=Sj});var Hy=i(()=>{"use strict";Tu()});var Wy=i(()=>{"use strict";Ou()});var zy=i((cK,Ky)=>{"use strict";var wj=Uy();Hy();Wy();Ky.exports=wj});var Vy=i(()=>{"use strict";Bo()});var Yy=i(()=>{"use strict";xu()});var Jy=i(()=>{"use strict";Su()});var Xy=i((hK,Qy)=>{"use strict";var Tj=zy();Vy();Yy();Jy();Qy.exports=Tj});var nt=i((yK,Zy)=>{"use strict";Zy.exports=Xy()});var tg=i((SK,rg)=>{"use strict";Co();var Oj=Wr();rg.exports=Oj.f("asyncIterator")});var ag=i((wK,ng)=>{"use strict";var Cj=tg();ng.exports=Cj});var og=i((TK,ig)=>{"use strict";var Ej=ag();ig.exports=Ej});var sg=i((OK,ug)=>{"use strict";var Ij=og();ug.exports=Ij});var ya=i((CK,cg)=>{"use strict";cg.exports=sg()});var vg=i(()=>{"use strict";var kj=x(),_j=_(),Pj=te(),pg=St(),Rj=Gi(),Aj=_j(function(){pg(1)});kj({target:"Object",stat:!0,forced:Aj,sham:!Rj},{getPrototypeOf:function(r){return pg(Pj(r))}})});var mg=i((PK,dg)=>{"use strict";vg();var Nj=V();dg.exports=Nj.Object.getPrototypeOf});var yg=i((RK,hg)=>{"use strict";var Mj=mg();hg.exports=Mj});var bg=i((AK,gg)=>{"use strict";var jj=yg();gg.exports=jj});var xg=i((NK,qg)=>{"use strict";var $j=bg();qg.exports=$j});var ga=i((MK,Sg)=>{"use strict";Sg.exports=xg()});var Tg=i(()=>{"use strict";var Lj=x(),Fj=A(),Dj=Pe(),Bj=Fj([].reverse),wg=[1,2];Lj({target:"Array",proto:!0,forced:String(wg)===String(wg.reverse())},{reverse:function(){return Dj(this)&&(this.length=this.length),Bj(this)}})});var Cg=i((LK,Og)=>{"use strict";Tg();var Gj=ue();Og.exports=Gj("Array","reverse")});var Ig=i((FK,Eg)=>{"use strict";var Uj=U(),Hj=Cg(),_u=Array.prototype;Eg.exports=function(e){var r=e.reverse;return e===_u||Uj(_u,e)&&r===_u.reverse?Hj:r}});var _g=i((DK,kg)=>{"use strict";var Wj=Ig();kg.exports=Wj});var Rg=i((BK,Pg)=>{"use strict";var Kj=_g();Pg.exports=Kj});var Ng=i((GK,Ag)=>{"use strict";var zj=Rg();Ag.exports=zj});var jg=i((UK,Mg)=>{"use strict";Mg.exports=Ng()});var Pu=i((HK,Wt)=>{function Vj(e,r){this.v=e,this.k=r}Wt.exports=Vj,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var $g=i(()=>{"use strict";var Yj=x(),Jj=H(),Qj=Je();Yj({target:"Object",stat:!0,sham:!Jj},{create:Qj})});var Fg=i((zK,Lg)=>{"use strict";$g();var Xj=V(),Zj=Xj.Object;Lg.exports=function(r,t){return Zj.create(r,t)}});var Bg=i((VK,Dg)=>{"use strict";var e$=Fg();Dg.exports=e$});var Ug=i((YK,Gg)=>{"use strict";var r$=Bg();Gg.exports=r$});var Wg=i((JK,Hg)=>{"use strict";var t$=Ug();Hg.exports=t$});var ba=i((QK,Kg)=>{"use strict";Kg.exports=Wg()});var Au=i((XK,Jg)=>{"use strict";var Vg=A(),n$=D(),a$=L(),i$=K(),zg=cr(),o$=Rr(),Yg=Function,u$=Vg([].concat),s$=Vg([].join),Ru={},c$=function(e,r,t){if(!i$(Ru,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Ru[r]=Yg("C,a","return new C("+s$(n,",")+")")}return Ru[r](e,t)};Jg.exports=o$?Yg.bind:function(r){var t=n$(this),n=t.prototype,a=zg(arguments,1),o=function(){var s=u$(a,zg(arguments));return this instanceof o?c$(t,s.length,s):t.apply(r,s)};return a$(n)&&(o.prototype=n),o}});var Xg=i(()=>{"use strict";var l$=x(),Qg=Au();l$({target:"Function",proto:!0,forced:Function.bind!==Qg},{bind:Qg})});var eb=i((rz,Zg)=>{"use strict";Xg();var f$=ue();Zg.exports=f$("Function","bind")});var tb=i((tz,rb)=>{"use strict";var p$=U(),v$=eb(),Nu=Function.prototype;rb.exports=function(e){var r=e.bind;return e===Nu||p$(Nu,e)&&r===Nu.bind?v$:r}});var ab=i((nz,nb)=>{"use strict";var d$=tb();nb.exports=d$});var ob=i((az,ib)=>{"use strict";var m$=ab();ib.exports=m$});var sb=i((iz,ub)=>{"use strict";var h$=ob();ub.exports=h$});var Kt=i((oz,cb)=>{"use strict";cb.exports=sb()});var lb=i(()=>{"use strict";var y$=x(),g$=wt();y$({target:"Object",stat:!0},{setPrototypeOf:g$})});var pb=i((cz,fb)=>{"use strict";lb();var b$=V();fb.exports=b$.Object.setPrototypeOf});var db=i((lz,vb)=>{"use strict";var q$=pb();vb.exports=q$});var hb=i((fz,mb)=>{"use strict";var x$=db();mb.exports=x$});var gb=i((pz,yb)=>{"use strict";var S$=hb();yb.exports=S$});var qa=i((vz,bb)=>{"use strict";bb.exports=gb()});var xb=i(()=>{"use strict";var w$=x(),T$=H(),qb=ne().f;w$({target:"Object",stat:!0,forced:Object.defineProperty!==qb,sham:!T$},{defineProperty:qb})});var Tb=i((hz,wb)=>{"use strict";xb();var O$=V(),Sb=O$.Object,C$=wb.exports=function(r,t,n){return Sb.defineProperty(r,t,n)};Sb.defineProperty.sham&&(C$.sham=!0)});var Cb=i((yz,Ob)=>{"use strict";var E$=Tb();Ob.exports=E$});var Ib=i((gz,Eb)=>{"use strict";var I$=Cb();Eb.exports=I$});var _b=i((bz,kb)=>{"use strict";var k$=Ib();kb.exports=k$});var zt=i((qz,Pb)=>{"use strict";Pb.exports=_b()});var Mu=i((xz,je)=>{var _$=zt();function xa(e,r,t,n){var a=_$;try{a({},"",{})}catch{a=0}je.exports=xa=function(u,s,c,l){function f(p,v){xa(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,xa(e,r,t,n)}je.exports=xa,je.exports.__esModule=!0,je.exports.default=je.exports});var $u=i((Sz,$e)=>{var Rb=Ce(),ju=ba(),P$=Kt(),R$=ga(),Ab=qa(),ke=Mu();function Nb(){var e,r,t=typeof Rb=="function"?Rb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var b=h&&h.prototype instanceof s?h:s,q=ju(b.prototype);return ke(q,"_invoke",function(I,E,S){var T,w,C,$=0,Se=S||[],k=!1,re={p:0,n:0,v:e,a:we,f:P$(we).call(we,e,4),d:function(F,me){return T=F,w=0,C=e,re.n=me,u}};function we(Q,F){for(w=Q,C=F,r=0;!k&&$&&!me&&r<Se.length;r++){var me,O=Se[r],_r=re.p,We=O[2];Q>3?(me=We===F)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=_r&&((me=Q<2&&_r<O[1])?(w=0,re.v=F,re.n=O[1]):_r<We&&(me=Q<3||O[0]>F||F>We)&&(O[4]=Q,O[5]=F,re.n=We,w=0))}if(me||Q>1)return u;throw k=!0,F}return function(Q,F,me){if($>1)throw TypeError("Generator is already running");for(k&&F===1&&we(F,me),w=F,C=me;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(re.n=-1),we(w,C)):re.n=C:re.v=C);try{if($=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=re.n<0)?C:I.call(E,re))!==u)break}catch(O){T=e,w=1,C=O}finally{$=1}}return{value:r,done:k}}}(d,m,y),!0),q}var u={};function s(){}function c(){}function l(){}r=R$;var f=[][n]?r(r([][n]())):(ke(r={},n,function(){return this}),r),p=l.prototype=s.prototype=ju(f);function v(d){return Ab?Ab(d,l):(d.__proto__=l,ke(d,a,"GeneratorFunction")),d.prototype=ju(p),d}return c.prototype=l,ke(p,"constructor",l),ke(l,"constructor",c),c.displayName="GeneratorFunction",ke(l,a,"GeneratorFunction"),ke(p),ke(p,a,"Generator"),ke(p,n,function(){return this}),ke(p,"toString",function(){return"[object Generator]"}),($e.exports=Nb=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Nb,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Du=i((wz,Vt)=>{var A$=Ce(),N$=ya(),M$=Pu(),Lu=Mu();function Fu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof M$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Lu(Fu.prototype),Lu(Fu.prototype,typeof A$=="function"&&N$||"@asyncIterator",function(){return this})),Lu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Vt.exports=Fu,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Bu=i((Tz,Yt)=>{var j$=nt(),$$=$u(),L$=Du();function F$(e,r,t,n,a){return new L$($$().w(e,r,t,n),a||j$)}Yt.exports=F$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Mb=i((Oz,Jt)=>{var D$=Bu();function B$(e,r,t,n,a){var o=D$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=B$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Lb=i((Cz,$b)=>{"use strict";var jb=ze(),G$=TypeError;$b.exports=function(e,r){if(!delete e[r])throw new G$("Cannot delete property "+jb(r)+" of "+jb(e))}});var Fb=i(()=>{"use strict";var U$=x(),H$=te(),W$=fe(),K$=Gr(),z$=Lb(),V$=Et(),Y$=[].unshift(0)!==1,J$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},Q$=Y$||!J$();U$({target:"Array",proto:!0,arity:1,forced:Q$},{unshift:function(r){var t=H$(this),n=W$(t),a=arguments.length;if(a){V$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:z$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return K$(t,n+a)}})});var Bb=i((kz,Db)=>{"use strict";Fb();var X$=ue();Db.exports=X$("Array","unshift")});var Ub=i((_z,Gb)=>{"use strict";var Z$=U(),eL=Bb(),Gu=Array.prototype;Gb.exports=function(e){var r=e.unshift;return e===Gu||Z$(Gu,e)&&r===Gu.unshift?eL:r}});var Wb=i((Pz,Hb)=>{"use strict";var rL=Ub();Hb.exports=rL});var zb=i((Rz,Kb)=>{"use strict";var tL=Wb();Kb.exports=tL});var Yb=i((Az,Vb)=>{"use strict";var nL=zb();Vb.exports=nL});var Qb=i((Nz,Jb)=>{"use strict";Jb.exports=Yb()});var Xb=i((Mz,Qt)=>{var aL=Qb();function iL(e){var r=Object(e),t=[];for(var n in r)aL(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Qt.exports=iL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var eq=i((jz,Zb)=>{"use strict";hr();It();pr();Io();var oL=Wr();Zb.exports=oL.f("iterator")});var tq=i(($z,rq)=>{"use strict";var uL=eq();yr();rq.exports=uL});var aq=i((Lz,nq)=>{"use strict";var sL=tq();nq.exports=sL});var oq=i((Fz,iq)=>{"use strict";var cL=aq();iq.exports=cL});var Xt=i((Dz,uq)=>{"use strict";uq.exports=oq()});var sq=i((Bz,Le)=>{var Sa=Ce(),lL=Xt();function Uu(e){"@babel/helpers - typeof";return Le.exports=Uu=typeof Sa=="function"&&typeof lL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Sa=="function"&&r.constructor===Sa&&r!==Sa.prototype?"symbol":typeof r},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Uu(e)}Le.exports=Uu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var cq=i((Gz,Zt)=>{var fL=sq().default,pL=Ce(),vL=Xt();function dL(e){if(e!=null){var r=e[typeof pL=="function"&&vL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(fL(e)+" is not iterable")}Zt.exports=dL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var pq=i((Uz,Fe)=>{var lq=ga(),mL=jg(),hL=Pu(),yL=$u(),gL=Mb(),bL=Bu(),qL=Du(),xL=Xb(),fq=cq();function Hu(){"use strict";var e=yL(),r=e.m(Hu),t=(lq?lq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,fq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Fe.exports=Hu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&mL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new hL(c,l)},AsyncIterator:qL,async:function(c,l,f,p,v){return(n(l)?bL:gL)(o(c),l,f,p,v)},keys:xL,values:fq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Hu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var ce=i((Hz,vq)=>{var wa=pq()();vq.exports=wa;try{regeneratorRuntime=wa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wa:Function("r","regeneratorRuntime = r")(wa)}});var Wu=i((Oa,mq)=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});var Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oa.default=SL;function SL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=wL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return rr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function wL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=dq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):en(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=dq(m,2),b=y[0],q=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(b)>-1;return!!(T&&(!q||S.attribs[b]===q))},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function($){c($)&&C.push($)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function($,Se){c($)&&(C.push($),Se())}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function($){return C.push($)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;default:c=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function($){c($)&&C.push($)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var b=y.findIndex(function(q){return q===m});if(b===v)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(b,q){return d(q)&&b.push(q),b},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}mq.exports=Oa.default});var Ea=i(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.convertNodeList=TL;Ca.escapeValue=OL;function TL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function OL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Oq=i((Ia,Tq)=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.default=CL;var bq=Ea(),hq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function CL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(q){return q===b}:b}),m=function(q){return o&&h.some(function(I){return I(q)})};for(Object.keys(l).forEach(function(b){b==="class"&&(d=!0);var q=l[b];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,bq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),l[b]=function(I,E){return q.test(E)})}),d&&function(){var b=l.attribute;l.attribute=function(q,I,E){return l.class(I)||b&&b(q,I,E)}}();p!==n;){if(m(p)!==!0){if(yq(s,p,l,f,n)||gq(p,l,f,n))break;yq(s,p,l,f),f.length===v&&gq(p,l,f),f.length===v&&EL(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=Sq(s,p,l);f.unshift(y)}return f.join(" ")}function yq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=qq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function qq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var b=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?b===-1?0:-1:b-q}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,bq.escapeValue)(c.value),p=t[l]||t.attribute,v=hq[l]||hq.attribute;if(!wq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function gq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=xq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function xq(e,r){var t=e.tagName.toLowerCase();return wq(r.tag,null,t)?null:t}function EL(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Sq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Sq(e,r,t){var n=qq(e,r,t);return n||(n=xq(r,t)),n}function wq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Tq.exports=Ia.default});var Ku=i((_a,Cq)=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.default=RL;var IL=Wu(),kL=PL(IL),_L=Ea();function PL(e){return e&&e.__esModule?e:{default:e}}function RL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,_L.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,kL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ka("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ka(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=ka("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ka(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ka(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(at(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var E=s[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);at(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);at(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);at(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),b=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,q=b();if(q==="break")break}}return r}function at(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Cq.exports=_a.default});var zu=i(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getCommonAncestor=AL;Pa.getCommonProperties=NL;function AL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function NL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Rq=i(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var ML=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=Yu;rn.getMultiSelector=Pq;rn.default=BL;var jL=Wu(),Iq=Vu(jL),$L=Oq(),LL=Vu($L),FL=Ku(),kq=Vu(FL),Eq=Ea(),_q=zu();function Vu(e){return e&&e.__esModule?e:{default:e}}function Yu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":ML(e))+'")');var t=(0,Iq.default)(e,r),n=(0,LL.default)(e,r),a=(0,kq.default)(n,e,r);return t&&delete global.document,a}function Pq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Eq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Iq.default)(e[0],r),n=(0,_q.getCommonAncestor)(e,r),a=Yu(n,r),o=DL(e),u=o[0],s=(0,kq.default)(a+" "+u,e,r),c=(0,Eq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function DL(e){var r=(0,_q.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function BL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Pq(e,r):Yu(e,r)}});var Mq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Ju=Rq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Ju.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Ju.getMultiSelector}});var Aq=Nq(Ju),GL=Ku(),UL=Nq(GL),HL=zu(),WL=KL(HL);function KL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Nq(e){return e&&e.__esModule?e:{default:e}}ie.select=Aq.default;ie.optimize=UL.default;ie.common=WL;ie.default=Aq.default});var jq=i(()=>{"use strict";var tF=x(),nF=Pe();tF({target:"Array",stat:!0},{isArray:nF})});var Lq=i((uV,$q)=>{"use strict";jq();var aF=V();$q.exports=aF.Array.isArray});var Dq=i((sV,Fq)=>{"use strict";var iF=Lq();Fq.exports=iF});var Gq=i((cV,Bq)=>{"use strict";var oF=Dq();Bq.exports=oF});var Hq=i((lV,Uq)=>{"use strict";var uF=Gq();Uq.exports=uF});var Kq=i((fV,Wq)=>{"use strict";Wq.exports=Hq()});var Yq=i(()=>{"use strict";var sF=x(),cF=te(),lF=fe(),fF=Gr(),pF=Et(),vF=_(),dF=vF(function(){return[].push.call({length:4294967296},1)!==4294967297}),mF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},hF=dF||!mF();sF({target:"Array",proto:!0,arity:1,forced:hF},{push:function(r){var t=cF(this),n=lF(t),a=arguments.length;pF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return fF(t,n),n}})});var Qq=i((mV,Jq)=>{"use strict";Yq();var yF=ue();Jq.exports=yF("Array","push")});var Zq=i((hV,Xq)=>{"use strict";var gF=U(),bF=Qq(),Qu=Array.prototype;Xq.exports=function(e){var r=e.push;return e===Qu||gF(Qu,e)&&r===Qu.push?bF:r}});var rx=i((yV,ex)=>{"use strict";var qF=Zq();ex.exports=qF});var nx=i((gV,tx)=>{"use strict";var xF=rx();tx.exports=xF});var ix=i((bV,ax)=>{"use strict";var SF=nx();ax.exports=SF});var Xu=i((qV,ox)=>{"use strict";ox.exports=ix()});var yx=i(()=>{"use strict";var wF=x(),TF=_t().map,OF=bt(),CF=OF("map");wF({target:"Array",proto:!0,forced:!CF},{map:function(r){return TF(this,r,arguments.length>1?arguments[1]:void 0)}})});var bx=i((VV,gx)=>{"use strict";yx();var EF=ue();gx.exports=EF("Array","map")});var xx=i((YV,qx)=>{"use strict";var IF=U(),kF=bx(),es=Array.prototype;qx.exports=function(e){var r=e.map;return e===es||IF(es,e)&&r===es.map?kF:r}});var wx=i((JV,Sx)=>{"use strict";var _F=xx();Sx.exports=_F});var Ox=i((QV,Tx)=>{"use strict";var PF=wx();Tx.exports=PF});var Ex=i((XV,Cx)=>{"use strict";var RF=Ox();Cx.exports=RF});var kx=i((ZV,Ix)=>{"use strict";Ix.exports=Ex()});var Px=i((e9,_x)=>{_x.exports=kx()});var Ax=i((r9,Rx)=>{Rx.exports=nt()});var Lx=i((t9,$x)=>{"use strict";var AF=D(),NF=te(),MF=gn(),jF=fe(),Nx=TypeError,Mx="Reduce of empty array with no initial value",jx=function(e){return function(r,t,n,a){var o=NF(r),u=MF(o),s=jF(o);if(AF(t),s===0&&n<2)throw new Nx(Mx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Nx(Mx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};$x.exports={left:jx(!1),right:jx(!0)}});var rs=i((n9,Fx)=>{"use strict";var $F=_();Fx.exports=function(e,r){var t=[][e];return!!t&&$F(function(){t.call(null,r||function(){return 1},1)})}});var Bx=i(()=>{"use strict";var LF=x(),FF=Lx().left,DF=rs(),Dx=Mr(),BF=jt(),GF=!BF&&Dx>79&&Dx<83,UF=GF||!DF("reduce");LF({target:"Array",proto:!0,forced:UF},{reduce:function(r){var t=arguments.length;return FF(this,r,t,t>1?arguments[1]:void 0)}})});var Ux=i((o9,Gx)=>{"use strict";Bx();var HF=ue();Gx.exports=HF("Array","reduce")});var Wx=i((u9,Hx)=>{"use strict";var WF=U(),KF=Ux(),ts=Array.prototype;Hx.exports=function(e){var r=e.reduce;return e===ts||WF(ts,e)&&r===ts.reduce?KF:r}});var zx=i((s9,Kx)=>{"use strict";var zF=Wx();Kx.exports=zF});var Yx=i((c9,Vx)=>{"use strict";var VF=zx();Vx.exports=VF});var Qx=i((l9,Jx)=>{"use strict";var YF=Yx();Jx.exports=YF});var Zx=i((f9,Xx)=>{"use strict";Xx.exports=Qx()});var rS=i((p9,eS)=>{eS.exports=Zx()});var aS=i((v9,nS)=>{"use strict";var JF=Pe(),QF=fe(),XF=Et(),ZF=Y(),eD=Br(),tS=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?ZF(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&JF(p)?(v=QF(p),c=tS(e,r,p,v,c,o-1)-1):(XF(c+1),eD(e,c,p)),c++),l++;return c};nS.exports=tS});var iS=i(()=>{"use strict";var rD=x(),tD=aS(),nD=D(),aD=te(),iD=fe(),oD=Fn();rD({target:"Array",proto:!0},{flatMap:function(r){var t=aD(this),n=iD(t),a;return nD(r),a=oD(t,0),tD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var oS=i(()=>{"use strict";var uD=_o();uD("flatMap")});var sS=i((g9,uS)=>{"use strict";iS();oS();var sD=ue();uS.exports=sD("Array","flatMap")});var lS=i((b9,cS)=>{"use strict";var cD=U(),lD=sS(),ns=Array.prototype;cS.exports=function(e){var r=e.flatMap;return e===ns||cD(ns,e)&&r===ns.flatMap?lD:r}});var pS=i((q9,fS)=>{"use strict";var fD=lS();fS.exports=fD});var dS=i((x9,vS)=>{"use strict";var pD=pS();vS.exports=pD});var hS=i((S9,mS)=>{"use strict";var vD=dS();mS.exports=vD});var gS=i((w9,yS)=>{"use strict";yS.exports=hS()});var qS=i((T9,bS)=>{bS.exports=gS()});var SS=i((O9,xS)=>{"use strict";eo();var dD=ue();xS.exports=dD("Array","concat")});var TS=i((C9,wS)=>{"use strict";var mD=U(),hD=SS(),as=Array.prototype;wS.exports=function(e){var r=e.concat;return e===as||mD(as,e)&&r===as.concat?hD:r}});var CS=i((E9,OS)=>{"use strict";var yD=TS();OS.exports=yD});var IS=i((I9,ES)=>{"use strict";var gD=CS();ES.exports=gD});var _S=i((k9,kS)=>{"use strict";var bD=IS();kS.exports=bD});var RS=i((_9,PS)=>{"use strict";PS.exports=_S()});var is=i((P9,AS)=>{AS.exports=RS()});var jS=i(()=>{});var LS=i((e7,$S)=>{"use strict";jS();ko();var kD=Wr();$S.exports=kD.f("toPrimitive")});var DS=i((r7,FS)=>{"use strict";var _D=LS();FS.exports=_D});var GS=i((t7,BS)=>{"use strict";var PD=DS();BS.exports=PD});var HS=i((n7,US)=>{"use strict";var RD=GS();US.exports=RD});var KS=i((a7,WS)=>{"use strict";WS.exports=HS()});var rw=i((O7,ew)=>{"use strict";var ND=L(),MD=Te(),jD=R(),$D=jD("match");ew.exports=function(e){var r;return ND(e)&&((r=e[$D])!==void 0?!!r:MD(e)==="RegExp")}});var nw=i((C7,tw)=>{"use strict";var LD=rw(),FD=TypeError;tw.exports=function(e){if(LD(e))throw new FD("The method doesn't accept regular expressions");return e}});var iw=i((E7,aw)=>{"use strict";var DD=R(),BD=DD("match");aw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[BD]=!1,"/./"[e](r)}catch{}}return!1}});var sw=i(()=>{"use strict";var GD=x(),UD=ft(),HD=vt().f,WD=Ti(),ow=Ve(),KD=nw(),zD=or(),VD=iw(),YD=Z(),JD=UD("".slice),QD=Math.min,uw=VD("startsWith"),XD=!YD&&!uw&&!!function(){var e=HD(String.prototype,"startsWith");return e&&!e.writable}();GD({target:"String",proto:!0,forced:!XD&&!uw},{startsWith:function(r){var t=ow(zD(this));KD(r);var n=WD(QD(arguments.length>1?arguments[1]:void 0,t.length)),a=ow(r);return JD(t,n,n+a.length)===a}})});var lw=i((_7,cw)=>{"use strict";sw();var ZD=ue();cw.exports=ZD("String","startsWith")});var pw=i((P7,fw)=>{"use strict";var e3=U(),r3=lw(),cs=String.prototype;fw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===cs||e3(cs,e)&&r===cs.startsWith?r3:r}});var dw=i((R7,vw)=>{"use strict";var t3=pw();vw.exports=t3});var hw=i((A7,mw)=>{"use strict";var n3=dw();mw.exports=n3});var gw=i((N7,yw)=>{"use strict";var a3=hw();yw.exports=a3});var qw=i((M7,bw)=>{"use strict";bw.exports=gw()});var Sw=i((j7,xw)=>{xw.exports=qw()});var ww=i(()=>{"use strict";var i3=x(),o3=_t().filter,u3=bt(),s3=u3("filter");i3({target:"Array",proto:!0,forced:!s3},{filter:function(r){return o3(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ow=i((F7,Tw)=>{"use strict";ww();var c3=ue();Tw.exports=c3("Array","filter")});var Ew=i((D7,Cw)=>{"use strict";var l3=U(),f3=Ow(),ls=Array.prototype;Cw.exports=function(e){var r=e.filter;return e===ls||l3(ls,e)&&r===ls.filter?f3:r}});var kw=i((B7,Iw)=>{"use strict";var p3=Ew();Iw.exports=p3});var Pw=i((G7,_w)=>{"use strict";var v3=kw();_w.exports=v3});var Aw=i((U7,Rw)=>{"use strict";var d3=Pw();Rw.exports=d3});var Mw=i((H7,Nw)=>{"use strict";Nw.exports=Aw()});var $w=i((W7,jw)=>{jw.exports=Mw()});var Zw=i(()=>{"use strict";var S3=x(),w3=W(),ps=Ar(),T3=Au(),zw=Ho(),O3=X(),Vw=L(),C3=Je(),Jw=_(),vs=w3("Reflect","construct"),E3=Object.prototype,I3=[].push,Qw=Jw(function(){function e(){}return!(vs(function(){},[],e)instanceof e)}),Xw=!Jw(function(){vs(function(){})}),Yw=Qw||Xw;S3({target:"Reflect",stat:!0,forced:Yw,sham:Yw},{construct:function(r,t){zw(r),O3(t);var n=arguments.length<3?r:zw(arguments[2]);if(Xw&&!Qw)return vs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ps(I3,a,t),new(ps(T3,r,a))}var o=n.prototype,u=C3(Vw(o)?o:E3),s=ps(r,u,t);return Vw(s)?s:u}})});var rT=i((OY,eT)=>{"use strict";Zw();var k3=V();eT.exports=k3.Reflect.construct});var nT=i((CY,tT)=>{"use strict";var _3=rT();tT.exports=_3});var iT=i((EY,aT)=>{"use strict";var P3=nT();aT.exports=P3});var uT=i((IY,oT)=>{"use strict";var R3=iT();oT.exports=R3});var La=i((kY,sT)=>{"use strict";sT.exports=uT()});var lT=i((_Y,cT)=>{cT.exports=La()});var bT=i((FY,gT)=>{"use strict";var A3=_();gT.exports=A3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var ST=i((DY,xT)=>{"use strict";var N3=_(),M3=L(),j3=Te(),qT=bT(),Fa=Object.isExtensible,$3=N3(function(){Fa(1)});xT.exports=$3||qT?function(r){return!M3(r)||qT&&j3(r)==="ArrayBuffer"?!1:Fa?Fa(r):!0}:Fa});var TT=i((BY,wT)=>{"use strict";var L3=_();wT.exports=!L3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var qs=i((GY,ET)=>{"use strict";var F3=x(),D3=A(),B3=Hr(),G3=L(),ys=K(),U3=ne().f,OT=kt(),H3=ro(),gs=ST(),W3=$r(),K3=TT(),CT=!1,Ge=W3("meta"),z3=0,bs=function(e){U3(e,Ge,{value:{objectID:"O"+z3++,weakData:{}}})},V3=function(e,r){if(!G3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ys(e,Ge)){if(!gs(e))return"F";if(!r)return"E";bs(e)}return e[Ge].objectID},Y3=function(e,r){if(!ys(e,Ge)){if(!gs(e))return!0;if(!r)return!1;bs(e)}return e[Ge].weakData},J3=function(e){return K3&&CT&&gs(e)&&!ys(e,Ge)&&bs(e),e},Q3=function(){X3.enable=function(){},CT=!0;var e=OT.f,r=D3([].splice),t={};t[Ge]=1,e(t).length&&(OT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ge){r(a,o,1);break}return a},F3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:H3.f}))},X3=ET.exports={enable:Q3,fastKey:V3,getWeakData:Y3,onFreeze:J3};B3[Ge]=!0});var _T=i((UY,kT)=>{"use strict";var Z3=x(),eB=P(),rB=qs(),tB=_(),nB=Oe(),aB=ve(),iB=ua(),oB=N(),uB=L(),sB=ir(),cB=Ne(),lB=ne().f,fB=_t().forEach,pB=H(),IT=Ye(),vB=IT.set,dB=IT.getterFor;kT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=eB[e],s=u&&u.prototype,c={},l;if(!pB||!oB(u)||!(a||s.forEach&&!tB(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),rB.enable();else{l=r(function(v,d){vB(iB(v,f),{type:e,collection:new u}),sB(d)||aB(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=dB(e);fB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&nB(f,v,function(h,m){var y=p(this).collection;if(!d&&a&&!uB(h))return v==="get"?void 0:!1;var b=y[v](h===0?0:h,m);return d?this:b})}),a||lB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return cB(l,e,!1,!0),c[e]=l,Z3({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var RT=i((HY,PT)=>{"use strict";var mB=Re();PT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:mB(e,n,r[n],t);return e}});var FT=i((WY,LT)=>{"use strict";var AT=Je(),hB=Bn(),NT=RT(),yB=Y(),gB=ua(),bB=ir(),qB=ve(),xB=Mn(),Da=jn(),SB=Uo(),sn=H(),MT=qs().fastKey,$T=Ye(),jT=$T.set,xs=$T.getterFor;LT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){gB(l,o),jT(l,{type:r,index:AT(null),first:null,last:null,size:0}),sn||(l.size=0),bB(f)||qB(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=xs(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=MT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=MT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return NT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=AT(null),sn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=yB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),NT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),sn&&hB(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=xs(r),o=xs(n);xB(e,r,function(u,s){jT(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Da(void 0,!0)):Da(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),SB(r)}}});var DT=i(()=>{"use strict";var wB=_T(),TB=FT();wB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},TB)});var BT=i(()=>{"use strict";DT()});var UT=i((JY,GT)=>{"use strict";GT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((QY,WT)=>{"use strict";var OB=W(),Ba=UT(),HT=OB("Map");WT.exports={Map:HT,set:Ba("set",2),get:Ba("get",1),has:Ba("has",1),remove:Ba("delete",1),proto:HT.prototype}});var Ss=i(()=>{"use strict";var CB=x(),EB=A(),IB=D(),kB=or(),_B=ve(),Ga=oe(),KT=Z(),PB=_(),zT=Ga.Map,RB=Ga.has,AB=Ga.get,NB=Ga.set,MB=EB([].push),jB=KT||PB(function(){return zT.groupBy("ab",function(e){return e}).get("a").length!==1});CB({target:"Map",stat:!0,forced:KT||jB},{groupBy:function(r,t){kB(r),IB(t);var n=new zT,a=0;return _B(r,function(o){var u=t(o,a++);RB(n,u)?MB(AB(n,u),o):NB(n,u,[o])}),n}})});var J=i((eJ,VT)=>{"use strict";var $B=ze(),LB=TypeError;VT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new LB($B(e)+" is not a map")}});var Ts=i(()=>{"use strict";var FB=x(),DB=J(),ws=oe(),BB=Z(),GB=ws.get,UB=ws.has,HB=ws.set;FB({target:"Map",proto:!0,real:!0,forced:BB},{getOrInsert:function(r,t){return UB(DB(this),r)?GB(this,r):(HB(this,r,t),t)}})});var Cs=i(()=>{"use strict";var WB=x(),KB=D(),zB=J(),Os=oe(),VB=Z(),YB=Os.get,JB=Os.has,QB=Os.set;WB({target:"Map",proto:!0,real:!0,forced:VB},{getOrInsertComputed:function(r,t){if(zB(this),KB(t),JB(this,r))return YB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return QB(this,r,n),n}})});var JT=i((iJ,YT)=>{"use strict";hr();BT();Ss();Ts();Cs();It();pr();var XB=V();YT.exports=XB.Map});var XT=i((oJ,QT)=>{"use strict";var ZB=JT();yr();QT.exports=ZB});var Es=i(()=>{"use strict";Ts()});var Is=i(()=>{"use strict";Cs()});var ZT=i(()=>{"use strict";Ss()});var rO=i((vJ,eO)=>{"use strict";var e4=XT();Es();Is();ZT();eO.exports=e4});var nO=i((dJ,tO)=>{"use strict";var r4=Y(),t4=X(),n4=te(),a4=ve();tO.exports=function(e,r,t){return function(a){var o=n4(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?r4(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return a4(o,function(v){var d=c?l(v,p++):v;t?r(f,t4(d)[0],d[1]):r(f,d)}),f}}});var iO=i(()=>{"use strict";var i4=x(),aO=oe(),o4=nO();i4({target:"Map",stat:!0,forced:!0},{from:o4(aO.Map,aO.set,!0)})});var uO=i((yJ,oO)=>{"use strict";var u4=X();oO.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,u4(s)[0],s[1]):r(a,s)}return a}}});var cO=i(()=>{"use strict";var s4=x(),sO=oe(),c4=uO();s4({target:"Map",stat:!0,forced:!0},{of:c4(sO.Map,sO.set,!0)})});var fO=i(()=>{"use strict";var l4=x(),f4=B(),p4=ve(),v4=N(),lO=D(),d4=oe().Map;l4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=v4(this)?this:d4,a=new n;lO(t);var o=lO(a.set);return p4(r,function(u){f4(o,a,t(u),u)}),a}})});var pO=i(()=>{"use strict";var m4=x(),h4=J(),y4=oe().remove;m4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=h4(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=y4(r,arguments[a]),t=t&&n;return!!t}})});var dO=i(()=>{"use strict";var g4=x(),b4=J(),ks=oe(),q4=ks.get,x4=ks.has,vO=ks.set;g4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=b4(this),a,o;return x4(n,r)?(a=q4(n,r),"update"in t&&(a=t.update(a,r,n),vO(n,r,a)),a):(o=t.insert(r,n),vO(n,r,o),o)}})});var hO=i((CJ,mO)=>{"use strict";var S4=B();mO.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=S4(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ge=i((EJ,yO)=>{"use strict";var w4=hO();yO.exports=function(e,r,t){return t?w4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var gO=i(()=>{"use strict";var T4=x(),O4=Y(),C4=J(),E4=ge();T4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=C4(this),n=O4(r,arguments.length>1?arguments[1]:void 0);return E4(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var qO=i(()=>{"use strict";var I4=x(),k4=Y(),_4=J(),bO=oe(),P4=ge(),R4=bO.Map,A4=bO.set;I4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=_4(this),n=k4(r,arguments.length>1?arguments[1]:void 0),a=new R4;return P4(t,function(o,u){n(o,u,t)&&A4(a,u,o)}),a}})});var xO=i(()=>{"use strict";var N4=x(),M4=Y(),j4=J(),$4=ge();N4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=j4(this),n=M4(r,arguments.length>1?arguments[1]:void 0),a=$4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var SO=i(()=>{"use strict";var L4=x(),F4=Y(),D4=J(),B4=ge();L4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=D4(this),n=F4(r,arguments.length>1?arguments[1]:void 0),a=B4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var TO=i((jJ,wO)=>{"use strict";wO.exports=function(e,r){return e===r||e!==e&&r!==r}});var OO=i(()=>{"use strict";var G4=x(),U4=TO(),H4=J(),W4=ge();G4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return W4(H4(this),function(t){if(U4(t,r))return!0},!0)===!0}})});var CO=i(()=>{"use strict";var K4=x(),z4=J(),V4=ge();K4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=V4(z4(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var IO=i(()=>{"use strict";var Y4=x(),J4=Y(),Q4=J(),EO=oe(),X4=ge(),Z4=EO.Map,eG=EO.set;Y4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=Q4(this),n=J4(r,arguments.length>1?arguments[1]:void 0),a=new Z4;return X4(t,function(o,u){eG(a,n(o,u,t),o)}),a}})});var _O=i(()=>{"use strict";var rG=x(),tG=Y(),nG=J(),kO=oe(),aG=ge(),iG=kO.Map,oG=kO.set;rG({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=nG(this),n=tG(r,arguments.length>1?arguments[1]:void 0),a=new iG;return aG(t,function(o,u){oG(a,u,n(o,u,t))}),a}})});var PO=i(()=>{"use strict";var uG=x(),sG=J(),cG=ve(),lG=oe().set;uG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=sG(this),n=arguments.length,a=0;a<n;)cG(arguments[a++],function(o,u){lG(t,o,u)},{AS_ENTRIES:!0});return t}})});var RO=i(()=>{"use strict";var fG=x(),pG=D(),vG=J(),dG=ge(),mG=TypeError;fG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=vG(this),n=arguments.length<2,a=n?void 0:arguments[1];if(pG(r),dG(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new mG("Reduce of empty map with no initial value");return a}})});var AO=i(()=>{"use strict";var hG=x(),yG=Y(),gG=J(),bG=ge();hG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=gG(this),n=yG(r,arguments.length>1?arguments[1]:void 0);return bG(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var MO=i(()=>{"use strict";var qG=x(),NO=D(),xG=J(),_s=oe(),SG=TypeError,wG=_s.get,TG=_s.has,OG=_s.set;qG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=xG(this),a=arguments.length;NO(t);var o=TG(n,r);if(!o&&a<3)throw new SG("Updating absent value");var u=o?wG(n,r):NO(a>2?arguments[2]:void 0)(r,n);return OG(n,r,t(u,r,n)),n}})});var Rs=i((ZJ,jO)=>{"use strict";var Ua=B(),Ps=D(),Ha=N(),CG=X(),EG=TypeError;jO.exports=function(r,t){var n=CG(this),a=Ps(n.get),o=Ps(n.has),u=Ps(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Ha(t)&&!Ha(s))throw new EG("At least one callback required");return Ua(o,n,r)?(c=Ua(a,n,r),Ha(t)&&(c=t(c),Ua(u,n,r,c))):Ha(s)&&(c=s(),Ua(u,n,r,c)),c}});var $O=i(()=>{"use strict";var IG=x(),kG=Rs();IG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:kG})});var LO=i(()=>{"use strict";var _G=x(),PG=Rs();_G({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:PG})});var DO=i((aQ,FO)=>{"use strict";var RG=rO();iO();cO();fO();pO();dO();gO();qO();xO();SO();OO();Es();Is();CO();IO();_O();PO();RO();AO();MO();$O();LO();FO.exports=RG});var GO=i((iQ,BO)=>{"use strict";BO.exports=DO()});var HO=i(()=>{"use strict";var AG=x(),NG=ft(),MG=Ni().indexOf,jG=rs(),As=NG([].indexOf),UO=!!As&&1/As([1],1,-0)<0,$G=UO||!jG("indexOf");AG({target:"Array",proto:!0,forced:$G},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return UO?As(this,r,t)||0:MG(this,r,t)}})});var KO=i((sQ,WO)=>{"use strict";HO();var LG=ue();WO.exports=LG("Array","indexOf")});var VO=i((cQ,zO)=>{"use strict";var FG=U(),DG=KO(),Ns=Array.prototype;zO.exports=function(e){var r=e.indexOf;return e===Ns||FG(Ns,e)&&r===Ns.indexOf?DG:r}});var JO=i((lQ,YO)=>{"use strict";var BG=VO();YO.exports=BG});var XO=i((fQ,QO)=>{"use strict";var GG=JO();QO.exports=GG});var eC=i((pQ,ZO)=>{"use strict";var UG=XO();ZO.exports=UG});var tC=i((vQ,rC)=>{"use strict";rC.exports=eC()});var bC=i(()=>{"use strict";var YG=x(),JG=te(),gC=_n(),QG=_(),XG=QG(function(){gC(1)});YG({target:"Object",stat:!0,forced:XG},{keys:function(r){return gC(JG(r))}})});var xC=i((gX,qC)=>{"use strict";bC();var ZG=V();qC.exports=ZG.Object.keys});var wC=i((bX,SC)=>{"use strict";var e5=xC();SC.exports=e5});var OC=i((qX,TC)=>{"use strict";var r5=wC();TC.exports=r5});var EC=i((xX,CC)=>{"use strict";var t5=OC();CC.exports=t5});var kC=i((SX,IC)=>{"use strict";IC.exports=EC()});var PC=i((wX,_C)=>{_C.exports=kC()});var Pr="",Ja="";function rc(e){Pr=e.replace(/\/+$/,"")}function tc(e){Ja=e}function st(){return Ja?{Authorization:`Bearer ${Ja}`}:{}}async function ct(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Qa(e,r,{search:t,author:n}={}){let a=[];r?a.push(`document=${encodeURIComponent(r)}`):e&&a.push(`uri=${encodeURIComponent(e)}`),t&&a.push(`search=${encodeURIComponent(t)}`),n&&a.push(`author=${encodeURIComponent(n)}`);let o=await fetch(`${Pr}/comments?${a.join("&")}`,{headers:st()});return await ct(o,"Failed to fetch comments"),(await o.json()).data}async function Xa({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s}){let c={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};r?c.document=r:c.uri=e;let l=await fetch(`${Pr}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify(c)});return await ct(l,"Failed to create comment"),l.json()}async function nc(e,{body:r}){let t=await fetch(`${Pr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({body:r})});return await ct(t,"Failed to update comment"),t.json()}async function ac(e,r){let t=await fetch(`${Pr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({status:r})});return await ct(t,"Failed to update comment status"),t.json()}async function ic(e){let r=await fetch(`${Pr}/comments/${e}`,{method:"DELETE",headers:st()});await ct(r,"Failed to delete comment")}var YL=g(Ur(),1),JL=g(Ln(),1),QL=g(ea(),1),XL=g(ra(),1),ZL=g(ta(),1);var Iu=g(nt(),1);function eg(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Iu.default.resolve(c).then(n,a)}function Sr(e){return function(){var r=this,t=arguments;return new Iu.default(function(n,a){var o=e.apply(r,t);function u(c){eg(o,n,a,u,s,"next",c)}function s(c){eg(o,n,a,u,s,"throw",c)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function er(e){return new Ut(e,0)}var ku=g(nt(),1),lg=g(Ce(),1),fg=g(ya(),1);function Ie(e){return function(){return new Ht(e.apply(this,arguments))}}function Ht(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Ut;ku.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ku.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ht.prototype[typeof lg.default=="function"&&fg.default||"@@asyncIterator"]=function(){return this},Ht.prototype.next=function(e){return this._invoke("next",e)},Ht.prototype.throw=function(e){return this._invoke("throw",e)},Ht.prototype.return=function(e){return this._invoke("return",e)};var eF=g(ce(),1),rF=g(Mq(),1);function le(e){var r,t=zL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function zL(e){return"startContainer"in e}function tr(e){if(VL(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function VL(e){return"startContainer"in e}var zq=g(Kq(),1);function Vq(e){if((0,zq.default)(e))return e}var ux=g(Ce(),1),sx=g($o(),1),cx=g(Xu(),1);function lx(e,r){var t=e==null?null:typeof ux.default<"u"&&(0,sx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,cx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var fx=g(Ei(),1),px=g(Zi(),1);function Ra(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Zu(e,r){if(e){var t;if(typeof e=="string")return Ra(e,r);var n=(0,fx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,px.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ra(e,r):void 0}}function vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Vq(e)||lx(e,r)||Zu(e,r)||vx()}var dx=g(Ce(),1),mx=g(ya(),1),hx=g(Xt(),1),tn=g(nt(),1);function it(e){var r,t,n,a=2;for(typeof dx.default<"u"&&(t=mx.default,n=hx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Aa(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Aa(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Aa=function(n){this.s=n,this.n=n.next},Aa.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?tn.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?tn.default.reject(n):r(a.apply(this.s,arguments))}},new Aa(e)}var ID=g(ce(),1);var SD=g(ce(),1),wD=g(Px(),1),TD=g(Ax(),1),OD=g(rS(),1),CD=g(qS(),1),ED=g(is(),1);var $s=g(ce(),1);var x3=g(ce(),1);var us=g(ce(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function NS(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var os=g(zt(),1);var an=g(Ce(),1),MS=g(Xt(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof an.default=="function"&&typeof MS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Be(e)}var zS=g(KS(),1);function VS(e,r){if(Be(e)!="object"||!e)return e;var t=e[zS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Na(e){var r=VS(e,"string");return Be(r)=="symbol"?r:r+""}function YS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,os.default)(e,Na(n.key),n)}}function on(e,r,t){return r&&YS(e.prototype,r),t&&YS(e,t),(0,os.default)(e,"prototype",{writable:!1}),e}var JS=g(zt(),1);function Tr(e,r,t){return(r=Na(r))in e?(0,JS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var QS=g(Ur(),1);var Ma="Iterator exhausted before seek ended.",un=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ma)}else for(;!nn(this.currentChunk,n);){var s=this._readToNextChunk(),c=De(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ma)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,QS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=De(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ma)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=De(h,2),y=m[0],b=m[1];if(t&&(u=y+u),b===null){if(o)break;throw new RangeError(Ma)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function ZS(e,r){return ss.apply(this,arguments)}function ss(){return ss=Sr(us.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,y,b,q,I,E,S,T,w,C,$=arguments;return us.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=$.length>2&&$[2]!==void 0?$[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((s-m())/2),d=f.read(-y,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=s-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ja(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+ja(f,l,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=$a(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&NS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=XS(f,p,!0),w!==void 0&&!o&&(w=ja(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=XS(f,p,!1),C!==void 0&&!o&&(C=C+ja(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ss.apply(this,arguments)}function XS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function ja(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(AD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function AD(e){return/^\s+$/.test(e)}var Dw=g(Ur(),1),Bw=g(Ln(),1),Gw=g(ea(),1),Uw=g(ra(),1),Hw=g(ta(),1);var fs=g(ce(),1),Ww=g(Sw(),1),Kw=g($w(),1);function Lw(e,r){var t;if(typeof Gw.default>"u"||(0,Uw.default)(e)==null){if(Array.isArray(e)||(t=m3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,Hw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function m3(e,r){var t;if(e){if(typeof e=="string")return Fw(e,r);var n=(0,Dw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Bw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fw(e,r)}}function Fw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $a(e){return function(){var r=Ie(fs.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,y,b,q,I,E,S,T,w,C,$,Se,k,re,we,Q,F;return fs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=Lw(l),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,b=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-b,q<=v.length&&(y.endChunk=p,y.endIndex=q)),y.startChunk===void 0&&(I=u.length-b,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-b,!(E<=v.length)){O.next=24;break}if(!(0,Ww.default)(v).call(v,c.substring(b))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(b,b+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(l=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),$=function(We){var Zs=v[We];w=(0,Kw.default)(w).call(w,function(uE){return Zs===c[We-uE]}),Zs===c[0]&&w.push(We)},Se=C;Se<v.length;Se++)$(Se);k=Lw(w);try{for(k.s();!(re=k.n()).done;)we=re.value,Q=v.length-we,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=we+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=we+u.length),l.push(F)}catch(_r){k.e(_r)}finally{k.f()}f=!1;case 56:if(a.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var b3=g(ce(),1);var h3=g(Ur(),1),y3=g(is(),1);var q3=g(ce(),1);var ln=g(lT(),1);var pT=g(ba(),1),vT=g(zt(),1);var ds=g(qa(),1),fT=g(Kt(),1);function nr(e,r){var t;return nr=ds.default?(0,fT.default)(t=ds.default).call(t):function(n,a){return n.__proto__=a,n},nr(e,r)}function ms(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,pT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,vT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function dT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dT(e)}var hT=g(qa(),1),yT=g(Kt(),1),hs=g(ga(),1);function Or(e){var r;return Or=hT.default?(0,yT.default)(r=hs.default).call(r):function(t){return t.__proto__||(0,hs.default)(t)},Or(e)}var js=g(GO(),1),lC=g(ba(),1);var nC=g(tC(),1);function aC(e){try{var r;return(0,nC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var oC=g(La(),1),uC=g(Xu(),1),sC=g(Kt(),1);var iC=g(La(),1);function Ms(){try{var e=!Boolean.prototype.valueOf.call((0,iC.default)(Boolean,[],function(){}))}catch{}return(Ms=function(){return!!e})()}function cC(e,r,t){if(Ms())return oC.default.apply(null,arguments);var n=[null];(0,uC.default)(n).apply(n,r);var a=new((0,sC.default)(e).apply(e,n));return t&&nr(a,t.prototype),a}function cn(e){var r=typeof js.default=="function"?new js.default:void 0;return cn=function(n){if(n===null||!aC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return cC(n,arguments,Or(this).constructor)}return a.prototype=(0,lC.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),nr(a,n)},cn(e)}function vC(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=fC(e.startContainer,e.startOffset),o=De(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=fC(e.endContainer,e.endOffset),l=De(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function fC(e,r){var t;if(pC(e))return[e,r];var n;if(HG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(pC(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function pC(e){return e.nodeType===Node.TEXT_NODE}function HG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function mC(e){var r=WG();return function(){var n=Or(e),a;if(r){var o=Or(this).constructor;a=(0,ln.default)(n,arguments,o)}else a=n.apply(this,arguments);return mT(this,a)}}function WG(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Wa=function(e){ms(t,e);var r=mC(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),KG=function(e){ms(t,e);var r=mC(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),Cr=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=tr(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!dC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Wa}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!dC(t))throw new Wa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new KG;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=vC(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function dC(e){return e.nodeType===Node.TEXT_NODE}function hC(e,r){return Ls.apply(this,arguments)}function Ls(){return Ls=Sr($s.default.mark(function e(r,t){var n,a,o,u=arguments;return $s.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=tr(t??le(r)),o=new Cr(a),c.next=5,ZS(o.rangeToChunkRange(r),function(){return new Cr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ls.apply(this,arguments)}var Fs=g(ce(),1);function yC(e){var r=$a(e);return function(){var t=Ie(Fs.default.mark(function a(o){var u,s,c,l,f,p,v,d;return Fs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Cr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Wa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=it(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,s=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var zG=g(ce(),1);var VG=g(ce(),1);var n5=g(PC(),1),a5=g(Ur(),1),i5=g(Ln(),1),o5=g(ea(),1),u5=g(ra(),1),s5=g(ta(),1);async function RC(e,r){let t=await hC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ka(e,r){let t=yC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Er="fb-highlight",Ds="fb-highlight-active";var fn=null;function NC(e){fn=e}function za(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=AC(e,r);t.push(n)}else{let n=l5(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(AC(u,r))}}return t}function AC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return c5(e,r,o);let u=document.createElement("mark");u.className=Er,u.dataset.commentId=r,u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return u}function c5(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let s=u,c=null;for(;s&&s!==t;){if(s.tagName==="text"){c=s.parentElement;break}s=s.parentElement}let l=c||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(a,"g");p.setAttribute("class",Er),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let b=n[y],q=document.createElementNS(a,"rect"),I=t.createSVGPoint();I.x=b.left,I.y=b.top;let E=I.matrixTransform(f.inverse()),S=b.width/f.a,T=b.height/f.d;q.setAttribute("x",E.x),q.setAttribute("y",E.y),q.setAttribute("width",S),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",p.appendChild(q)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(b=>d.add(b))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Bs(e){document.querySelectorAll(`.${Er}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function MC(){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Va(e){document.querySelectorAll(`.${Er}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(Ds):r.classList.remove(Ds)})}function jC(e){let r=document.querySelector(`.${Er}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Gs(e){let r="rgba(255, 212, 0, 0.12)",t="rgba(255, 212, 0, 0.35)";document.querySelectorAll(`.${Er}`).forEach(n=>{let a=n.dataset.commentId,o=e.has(a);n.classList.contains(Ds)||(n.tagName==="g"||n instanceof SVGElement?n.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill-opacity",o?"0.12":"0.35")}):n.style.backgroundColor=o?r:t)})}function l5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function $C(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function LC(e,r){let t=$C(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

## Original Document

\`\`\`html
${e}
\`\`\`

## Reviewer Feedback

${t}

## Instructions

1. Carefully read each piece of feedback and the highlighted text it refers to.
2. Revise the document HTML to address the feedback where appropriate.
3. Preserve the overall structure and formatting of the document.
4. After the revised HTML, include a brief changelog noting which feedback items you addressed and how.

Respond with:

### Revised Document
\`\`\`html
[your revised HTML here]
\`\`\`

### Changelog
[numbered list matching feedback numbers, explaining what you changed]`}function ar(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var f5=`
  .hf-overlay {
    position: fixed;
    inset: 0;
    z-index: 10001;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-modal {
    background: var(--remarq-bg-surface);
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px var(--remarq-shadow-strong);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--remarq-text);
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid var(--remarq-border-subtle);
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: var(--remarq-text);
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--remarq-text-muted);
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid var(--remarq-border-subtle);
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .hf-btn {
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
  }

  .hf-btn-primary {
    background: var(--remarq-accent);
    color: white;
  }
  .hf-btn-primary:hover { background: var(--remarq-accent-hover); }

  .hf-btn-secondary {
    background: var(--remarq-bg-secondary);
    color: var(--remarq-text-secondary);
  }
  .hf-btn-secondary:hover { background: var(--remarq-border-subtle); }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid var(--remarq-border-input);
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
    background: var(--remarq-bg);
    color: var(--remarq-text);
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: var(--remarq-info-bg); color: var(--remarq-info-text); }
  .hf-status-success { background: var(--remarq-success-bg); color: var(--remarq-success-text); }
  .hf-status-error { background: var(--remarq-error-bg); color: var(--remarq-error-text); }
`,FC=null,DC=null;function BC(e,r){DC=e,FC=r,p5()}function p5(){let e=document.createElement("style");e.textContent=f5,document.head.appendChild(e)}function GC(){let e=FC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(DC.contentSelector||"body").innerHTML,c=LC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ar(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function UC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function HC(e,r){return e.length>r?e.slice(0,r)+"...":e}function WC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var pn=null;function zC(e){pn=document.createElement("div"),pn.className="fb-toast-container",e.appendChild(pn)}function Ir(e,r="success"){if(!pn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>KC(t)),t.appendChild(o)}pn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>KC(t),r==="error"?8e3:4e3)}function KC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function VC(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}var v5=320,QC="feedback-layer-commenter",G=null,He=null,Ue=null,Us=null,XC=null,Ws=null,Ks=null,zs=null,Vs=null,Hs=null,Ys=!1,ZC=[],eE=new Set,rE=null,YC=!1;function Js(){YC||(YC=!0,y5())}function ot(){return localStorage.getItem(QC)||""}function tE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onSearch:o}){XC=e,Ws=r,Ks=t,zs=n,Vs=a,Hs=o,Js(),G=document.createElement("div"),G.className="fb-sidebar fb-sidebar-collapsed",G.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${ar(ot())}">
      </div>
      <div class="fb-filter-section">
        <input type="text" class="fb-search-input" placeholder="Search comments...">
        <select class="fb-author-filter">
          <option value="">All authors</option>
        </select>
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>vn()),document.body.appendChild(u),document.body.appendChild(G),zC(G),He=G.querySelector(".fb-comment-list"),Ue=G.querySelector(".fb-form-section");let s=G.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(QC,s.value.trim())}),G.querySelector(".fb-ai-btn").addEventListener("click",()=>GC()),G.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>d5());let f=G.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Ys=f.checked,be(ZC,eE,new Map,rE)});let p=G.querySelector(".fb-search-input"),v=G.querySelector(".fb-author-filter"),d=()=>{Hs&&Hs(p.value.trim(),v.value)};p.addEventListener("input",VC(d,300)),v.addEventListener("change",d)}function vn(){G.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function d5(){G.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function nE(e){if(vn(),!ot()){let n=G.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}Us=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ar(HC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ot()){let a=G.querySelector(".fb-name-input");a.focus(),a.classList.add("fb-name-input-error"),setTimeout(()=>a.classList.remove("fb-name-input-error"),2e3);return}let n=r.value.trim();n&&(XC({comment:n,commenter:ot()}),Ue.style.display="none",Us=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Us=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function aE(e){let r=G.querySelector(".fb-author-filter"),t=r.value;r.innerHTML='<option value="">All authors</option>';for(let n of e.sort()){let a=document.createElement("option");a.value=n,a.textContent=n,r.appendChild(a)}e.includes(t)&&(r.value=t)}function be(e,r=new Set,t=new Map,n=null){ZC=e,eE=r,rE=n,He.innerHTML="";let{topLevel:a,repliesByParent:o}=UC(e),u=a.slice().sort((f,p)=>{let v=t.get(f.id),d=t.get(p.id);return!v||!d?0:v.compareBoundaryPoints(Range.START_TO_START,d)}),s=u.filter(f=>{let p=r.has(f.id),v=f.status==="closed";return p||v&&Ys}),c=Ys?s:s.filter(f=>f.status!=="closed");if(u.length===0){He.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(c.length===0){l>0?He.innerHTML=`<div class="fb-empty">
        ${s.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:He.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f of c){let p=document.createElement("div");p.className="fb-thread";let v=o.get(f.id)||[];n!==null&&(n.has(f.id)||v.some(m=>n.has(m.id))||p.classList.add("fb-thread-dimmed")),p.appendChild(JC(f,!1));for(let h of v)p.appendChild(JC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),m5(f.id,p,d)}),p.appendChild(d),He.appendChild(p)}}function JC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ar(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ar(e.author)}</span>
      <span class="fb-cmt-time">${WC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",a=>{a.target.closest(".fb-cmt-delete")||a.target.closest(".fb-cmt-resolve")||a.target.closest(".fb-cmt-edit")||(Va(e.id),jC(e.id),He.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",a=>{a.stopPropagation(),Ks&&Ks(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",a=>{a.stopPropagation(),h5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",a=>{a.stopPropagation(),Ws&&Ws(e.id)}),n}function m5(e,r,t){vn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ot()){let c=G.querySelector(".fb-name-input");c.focus(),c.classList.add("fb-name-input-error"),setTimeout(()=>c.classList.remove("fb-name-input-error"),2e3);return}let s=a.querySelector("textarea").value.trim();s&&(zs&&zs({parent_id:e,comment:s,commenter:ot()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function h5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ar(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function iE(e){let r=He.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(He.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function y5(){let e=document.createElement("style");e.textContent=`
    /* \u2500\u2500 Light theme variables (default) \u2500\u2500 */
    [data-remarq-theme] {
      --remarq-bg: #fafafa;
      --remarq-bg-surface: #fff;
      --remarq-bg-hover: #f3f0ff;
      --remarq-bg-secondary: #f3f4f6;

      --remarq-text: #333;
      --remarq-text-secondary: #555;
      --remarq-text-muted: #666;
      --remarq-text-faint: #999;

      --remarq-border: #e0e0e0;
      --remarq-border-subtle: #e5e7eb;
      --remarq-border-input: #d1d5db;

      --remarq-accent: #7c3aed;
      --remarq-accent-hover: #6d28d9;
      --remarq-accent-ring: rgba(124,58,237,0.15);
      --remarq-accent-glow: rgba(124,58,237,0.12);

      --remarq-success: #16a34a;
      --remarq-danger: #ef4444;
      --remarq-icon-muted: #aaa;
      --remarq-icon-faint: #ccc;

      --remarq-info-bg: #eff6ff;
      --remarq-info-text: #1e40af;
      --remarq-success-bg: #f0fdf4;
      --remarq-success-text: #166534;
      --remarq-error-bg: #fef2f2;
      --remarq-error-text: #991b1b;

      --remarq-highlight: rgba(255, 212, 0, 0.35);
      --remarq-highlight-active: rgba(255, 180, 0, 0.55);

      --remarq-shadow: rgba(0,0,0,0.08);
      --remarq-shadow-strong: rgba(0,0,0,0.15);
    }

    /* \u2500\u2500 Dark theme overrides \u2500\u2500 */
    [data-remarq-theme="dark"] {
      --remarq-bg: #1e1e2e;
      --remarq-bg-surface: #282840;
      --remarq-bg-hover: #33305a;
      --remarq-bg-secondary: #313148;

      --remarq-text: #e0e0e6;
      --remarq-text-secondary: #b0b0be;
      --remarq-text-muted: #9090a0;
      --remarq-text-faint: #6e6e82;

      --remarq-border: #3a3a52;
      --remarq-border-subtle: #33334a;
      --remarq-border-input: #4a4a62;

      --remarq-accent: #a78bfa;
      --remarq-accent-hover: #8b5cf6;
      --remarq-accent-ring: rgba(167,139,250,0.25);
      --remarq-accent-glow: rgba(167,139,250,0.18);

      --remarq-success: #4ade80;
      --remarq-danger: #f87171;
      --remarq-icon-muted: #6e6e82;
      --remarq-icon-faint: #4a4a62;

      --remarq-info-bg: #1e2a4a;
      --remarq-info-text: #93b5f5;
      --remarq-success-bg: #1a2e1a;
      --remarq-success-text: #6ee7a0;
      --remarq-error-bg: #2e1a1a;
      --remarq-error-text: #fca5a5;

      --remarq-highlight: rgba(255, 212, 0, 0.25);
      --remarq-highlight-active: rgba(255, 180, 0, 0.45);

      --remarq-shadow: rgba(0,0,0,0.3);
      --remarq-shadow-strong: rgba(0,0,0,0.5);
    }

    @media (prefers-color-scheme: dark) {
      [data-remarq-theme="auto"] {
        --remarq-bg: #1e1e2e;
        --remarq-bg-surface: #282840;
        --remarq-bg-hover: #33305a;
        --remarq-bg-secondary: #313148;

        --remarq-text: #e0e0e6;
        --remarq-text-secondary: #b0b0be;
        --remarq-text-muted: #9090a0;
        --remarq-text-faint: #6e6e82;

        --remarq-border: #3a3a52;
        --remarq-border-subtle: #33334a;
        --remarq-border-input: #4a4a62;

        --remarq-accent: #a78bfa;
        --remarq-accent-hover: #8b5cf6;
        --remarq-accent-ring: rgba(167,139,250,0.25);
        --remarq-accent-glow: rgba(167,139,250,0.18);

        --remarq-success: #4ade80;
        --remarq-danger: #f87171;
        --remarq-icon-muted: #6e6e82;
        --remarq-icon-faint: #4a4a62;

        --remarq-info-bg: #1e2a4a;
        --remarq-info-text: #93b5f5;
        --remarq-success-bg: #1a2e1a;
        --remarq-success-text: #6ee7a0;
        --remarq-error-bg: #2e1a1a;
        --remarq-error-text: #fca5a5;

        --remarq-highlight: rgba(255, 212, 0, 0.25);
        --remarq-highlight-active: rgba(255, 180, 0, 0.45);

        --remarq-shadow: rgba(0,0,0,0.3);
        --remarq-shadow-strong: rgba(0,0,0,0.5);
      }
    }

    /* \u2500\u2500 Highlight styles (applied to host page content) \u2500\u2500 */
    .fb-highlight {
      background-color: var(--remarq-highlight);
      cursor: pointer;
      border-radius: 2px;
    }
    .fb-highlight-active {
      background-color: var(--remarq-highlight-active);
    }
    .fb-highlight rect {
      fill: var(--remarq-highlight);
    }
    .fb-highlight-active rect {
      fill: var(--remarq-highlight-active);
    }

    /* \u2500\u2500 Name input error state \u2500\u2500 */
    .fb-name-input-error {
      outline: 2px solid var(--remarq-danger) !important;
    }

    /* \u2500\u2500 Sidebar \u2500\u2500 */
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${v5}px;
      height: 100vh;
      background: var(--remarq-bg);
      border-left: 1px solid var(--remarq-border);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: var(--remarq-text);
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px var(--remarq-shadow);
    }
    .fb-sidebar-collapsed {
      transform: translateX(100%);
    }
    .fb-sidebar-tab {
      position: fixed;
      top: 50%;
      right: 0;
      z-index: 9998;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: bottom right;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px var(--remarq-shadow-strong);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: var(--remarq-accent-hover);
    }
    .fb-sidebar-tab-hidden {
      opacity: 0;
      pointer-events: none;
    }
    .fb-sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      border-bottom: 1px solid var(--remarq-border);
      background: var(--remarq-bg-surface);
      font-size: 15px;
    }
    .fb-sidebar-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .fb-ai-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--remarq-accent);
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      padding: 0 4px;
      line-height: 1;
    }
    .fb-sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }
    .fb-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--remarq-text-muted);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-name-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-name-section {
      margin-bottom: 16px;
    }
    .fb-comment-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-empty {
      color: var(--remarq-text-faint);
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-subtle);
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: var(--remarq-accent-ring);
    }
    .fb-cmt-active {
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-glow);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-cmt-body {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-cmt-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--remarq-text-faint);
    }
    .fb-cmt-author {
      font-weight: 600;
      color: var(--remarq-accent);
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: var(--remarq-success);
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: var(--remarq-accent);
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: var(--remarq-icon-faint);
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: var(--remarq-danger);
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid var(--remarq-success);
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: var(--remarq-success);
    }
    .fb-filter-section {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-search-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-author-filter {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-thread-dimmed {
      opacity: 0.35;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--remarq-text-faint);
      cursor: pointer;
    }
    .fb-filter-toggle input {
      cursor: pointer;
    }
    .fb-thread {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .fb-cmt-reply {
      margin-left: 20px;
      border-left: 2px solid var(--remarq-border-subtle);
      font-size: 13px;
    }
    .fb-cmt-reply .fb-cmt-body {
      font-size: 12px;
    }
    .fb-reply-btn {
      align-self: flex-start;
      margin-left: 20px;
      background: none;
      border: none;
      color: var(--remarq-accent);
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      font-family: inherit;
    }
    .fb-reply-btn:hover {
      text-decoration: underline;
    }
    .fb-reply-form {
      margin-left: 20px;
      padding: 8px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
    }
    .fb-reply-form .fb-form-textarea {
      font-size: 12px;
      min-height: unset;
    }
    .fb-reply-form .fb-form-actions {
      margin-top: 6px;
    }
    .fb-form-section {
      margin-top: 12px;
    }
    .fb-form-card {
      background: var(--remarq-bg-surface);
      border: 2px solid var(--remarq-accent);
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: var(--remarq-accent);
    }
    .fb-form-actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .fb-btn {
      border: none;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
    }
    .fb-btn-primary {
      background: var(--remarq-accent);
      color: white;
    }
    .fb-btn-primary:hover { background: var(--remarq-accent-hover); }
    .fb-btn-cancel {
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-secondary);
    }
    .fb-btn-cancel:hover { background: var(--remarq-border-subtle); }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px var(--remarq-accent-ring), 0 2px 4px var(--remarq-shadow);
      white-space: nowrap;
      transition: all 0.2s ease;
      animation: fb-tooltip-appear 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .fb-annotate-tooltip svg {
      width: 14px;
      height: 14px;
    }
    .fb-annotate-tooltip::after {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--remarq-accent);
      filter: drop-shadow(0 -2px 2px var(--remarq-shadow));
    }
    .fb-annotate-tooltip:hover {
      background: var(--remarq-accent-hover);
      transform: translateY(2px);
      box-shadow: 0 6px 16px var(--remarq-accent-ring), 0 2px 6px var(--remarq-shadow-strong);
    }
    .fb-annotate-tooltip:hover::after {
      border-bottom-color: var(--remarq-accent-hover);
    }
    @media (pointer: coarse) {
      .fb-annotate-tooltip {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 15px;
      }
      .fb-annotate-tooltip svg {
        width: 18px;
        height: 18px;
      }
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Toast notifications */
    .fb-toast-container {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
    }
    .fb-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: auto;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .fb-toast-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .fb-toast-success {
      background: #16a34a;
    }
    .fb-toast-error {
      background: #dc2626;
    }
    .fb-toast-dismiss {
      background: none;
      border: none;
      color: rgba(255,255,255,0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0 2px;
      line-height: 1;
      flex-shrink: 0;
    }
    .fb-toast-dismiss:hover {
      color: #fff;
    }
  `,document.head.appendChild(e)}var ut=null,mn=null,hn=null,j=[],kr=null,qe=null,ee=new Set,de=new Map,Xs=!1,xe=null;function g5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",apiKey:e?.dataset.apiKey||null};rc(r.apiUrl),r.apiKey&&tc(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,mn=r.documentUri||window.location.origin+window.location.pathname,hn=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,Js(),NC(a=>{oE(),vn(),iE(a),Va(a)}),x5(),await t(),b5(),BC(r,()=>j)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}function oE(){Xs||(tE({onSubmit:T5,onDelete:I5,onResolve:O5,onReply:C5,onEdit:E5,onSearch:w5}),j.length>0&&be(j,ee,de,xe),Xs=!0)}async function b5(){try{j=await Qa(mn,hn),ee=await q5(j),Ya(),Xs&&be(j,ee,de,xe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}function Ya(){let e=[...new Set(j.map(r=>r.author))];aE(e)}async function q5(e){MC();let r=new Set;de.clear();for(let t of e)if(!t.parent)try{let n=await Ka({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(za(n,t.id),r.add(t.id),de.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),de.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function x5(){document.addEventListener("mouseup",Qs),document.addEventListener("keyup",Qs),document.addEventListener("touchend",Qs)}function Qs(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){dn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){dn();return}if(!ut.contains(r.commonAncestorContainer)){dn();return}S5(r)},10)}function S5(e){dn();let r=e.getBoundingClientRect();qe=document.createElement("button"),qe.className="fb-annotate-tooltip",qe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',qe.style.top=window.scrollY+r.bottom+8+"px",qe.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{oE(),kr=await RC(o,ut),nE(kr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}dn()};qe.addEventListener("mousedown",t),qe.addEventListener("touchstart",t),document.body.appendChild(qe)}function dn(){qe&&(qe.remove(),qe=null)}async function w5(e,r){if(!e&&!r){xe=null,be(j,ee,de,null),Gs(new Set);return}try{let t=await Qa(mn,hn,{search:e,author:r});xe=new Set(t.map(a=>a.id)),be(j,ee,de,xe);let n=new Set;for(let a of j)!a.parent&&ee.has(a.id)&&!xe.has(a.id)&&n.add(a.id);Gs(n)}catch(t){console.error("[feedback-layer] Search failed:",t)}}async function T5({comment:e,commenter:r}){if(kr){try{let t=await Xa({uri:mn,document:hn,quote:kr.exact,prefix:kr.prefix,suffix:kr.suffix,body:e,author:r});j.push(t);let n=await Ka({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(za(n,t.id),ee.add(t.id)),Ya(),be(j,ee,de,xe),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}kr=null}}async function O5(e,r){try{let n=await ac(e,r?"closed":"open"),a=j.findIndex(o=>o.id===e);if(a!==-1&&(j[a]=n),r)Bs(e);else{let o=n,u=await Ka({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(za(u,o.id),ee.add(o.id)):ee.delete(o.id)}be(j,ee,de,xe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function C5({parent_id:e,comment:r,commenter:t}){try{let n=await Xa({uri:mn,document:hn,body:r,author:t,parent:e});j.push(n),Ya(),be(j,ee,de,xe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function E5(e,r){try{let t=await nc(e,{body:r}),n=j.findIndex(a=>a.id===e);n!==-1&&(j[n]=t),be(j,ee,de,xe)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function I5(e){try{await ic(e),Bs(e),ee.delete(e),j=j.filter(r=>r.id!==e&&r.parent!==e),Ya(),be(j,ee,de,xe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{g5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
/*! Bundled license information:

@babel/runtime-corejs3/helpers/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)

@apache-annotator/dom/lib/owner-document.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/to-range.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/css.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/cartesian.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/chunker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/seeker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/describe-text-quote.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/match-text-quote.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/code-point-seeker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/describe-text-position.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/match-text-position.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/normalize-range.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-node-chunker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/describe.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/describe.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/highlight-text.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)
*/
