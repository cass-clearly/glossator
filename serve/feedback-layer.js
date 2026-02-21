var FeedbackLayer=(()=>{var cE=Object.create;var ec=Object.defineProperty;var lE=Object.getOwnPropertyDescriptor;var fE=Object.getOwnPropertyNames;var pE=Object.getPrototypeOf,vE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var dE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of fE(r))!vE.call(e,i)&&i!==t&&ec(e,i,{get:()=>r[i],enumerable:!(n=lE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?cE(pE(e)):{},dE(r||!e||!e.__esModule?ec(t,"default",{value:e,enumerable:!0}):t,e));var _=a((MU,oc)=>{"use strict";oc.exports=function(e){try{return!!e()}catch{return!0}}});var Nr=a((jU,uc)=>{"use strict";var mE=_();uc.exports=!mE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a(($U,lc)=>{"use strict";var sc=Nr(),cc=Function.prototype,ra=cc.call,hE=sc&&cc.bind.bind(ra,ra);lc.exports=sc?hE:function(e){return function(){return ra.apply(e,arguments)}}});var B=a((LU,fc)=>{"use strict";var yE=A();fc.exports=yE({}.isPrototypeOf)});var P=a((ta,pc)=>{"use strict";var vt=function(e){return e&&e.Math===Math&&e};pc.exports=vt(typeof globalThis=="object"&&globalThis)||vt(typeof window=="object"&&window)||vt(typeof self=="object"&&self)||vt(typeof global=="object"&&global)||vt(typeof ta=="object"&&ta)||function(){return this}()||Function("return this")()});var Mr=a((FU,hc)=>{"use strict";var gE=Nr(),mc=Function.prototype,vc=mc.apply,dc=mc.call;hc.exports=typeof Reflect=="object"&&Reflect.apply||(gE?dc.bind(vc):function(){return dc.apply(vc,arguments)})});var xe=a((DU,gc)=>{"use strict";var yc=A(),bE=yc({}.toString),qE=yc("".slice);gc.exports=function(e){return qE(bE(e),8,-1)}});var dt=a((BU,bc)=>{"use strict";var xE=xe(),SE=A();bc.exports=function(e){if(xE(e)==="Function")return SE(e)}});var N=a((GU,qc)=>{"use strict";var na=typeof document=="object"&&document.all;qc.exports=typeof na>"u"&&na!==void 0?function(e){return typeof e=="function"||e===na}:function(e){return typeof e=="function"}});var G=a((UU,xc)=>{"use strict";var wE=_();xc.exports=!wE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((WU,Sc)=>{"use strict";var TE=Nr(),qn=Function.prototype.call;Sc.exports=TE?qn.bind(qn):function(){return qn.apply(qn,arguments)}});var ia=a(Oc=>{"use strict";var wc={}.propertyIsEnumerable,Tc=Object.getOwnPropertyDescriptor,OE=Tc&&!wc.call({1:2},1);Oc.f=OE?function(r){var t=Tc(this,r);return!!t&&t.enumerable}:wc});var Ke=a((KU,Cc)=>{"use strict";Cc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var xn=a((zU,Ec)=>{"use strict";var CE=A(),EE=_(),IE=xe(),aa=Object,kE=CE("".split);Ec.exports=EE(function(){return!aa("z").propertyIsEnumerable(0)})?function(e){return IE(e)==="String"?kE(e,""):aa(e)}:aa});var or=a((VU,Ic)=>{"use strict";Ic.exports=function(e){return e==null}});var ur=a((YU,kc)=>{"use strict";var _E=or(),PE=TypeError;kc.exports=function(e){if(_E(e))throw new PE("Can't call method on "+e);return e}});var Ie=a((JU,_c)=>{"use strict";var RE=xn(),AE=ur();_c.exports=function(e){return RE(AE(e))}});var $=a((QU,Pc)=>{"use strict";var NE=N();Pc.exports=function(e){return typeof e=="object"?e!==null:NE(e)}});var K=a((XU,Rc)=>{"use strict";Rc.exports={}});var U=a((ZU,Nc)=>{"use strict";var oa=K(),ua=P(),ME=N(),Ac=function(e){return ME(e)?e:void 0};Nc.exports=function(e,r){return arguments.length<2?Ac(oa[e])||Ac(ua[e]):oa[e]&&oa[e][r]||ua[e]&&ua[e][r]}});var jr=a((e5,$c)=>{"use strict";var jE=P(),Mc=jE.navigator,jc=Mc&&Mc.userAgent;$c.exports=jc?String(jc):""});var $r=a((r5,Uc)=>{"use strict";var Gc=P(),sa=jr(),Lc=Gc.process,Fc=Gc.Deno,Dc=Lc&&Lc.versions||Fc&&Fc.version,Bc=Dc&&Dc.v8,me,Sn;Bc&&(me=Bc.split("."),Sn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!Sn&&sa&&(me=sa.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=sa.match(/Chrome\/(\d+)/),me&&(Sn=+me[1])));Uc.exports=Sn});var sr=a((t5,Hc)=>{"use strict";var Wc=$r(),$E=_(),LE=P(),FE=LE.String;Hc.exports=!!Object.getOwnPropertySymbols&&!$E(function(){var e=Symbol("symbol detection");return!FE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Wc&&Wc<41})});var ca=a((n5,Kc)=>{"use strict";var DE=sr();Kc.exports=DE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Lr=a((i5,zc)=>{"use strict";var BE=U(),GE=N(),UE=B(),WE=ca(),HE=Object;zc.exports=WE?function(e){return typeof e=="symbol"}:function(e){var r=BE("Symbol");return GE(r)&&UE(r.prototype,HE(e))}});var ze=a((a5,Vc)=>{"use strict";var KE=String;Vc.exports=function(e){try{return KE(e)}catch{return"Object"}}});var F=a((o5,Yc)=>{"use strict";var zE=N(),VE=ze(),YE=TypeError;Yc.exports=function(e){if(zE(e))return e;throw new YE(VE(e)+" is not a function")}});var wn=a((u5,Jc)=>{"use strict";var JE=F(),QE=or();Jc.exports=function(e,r){var t=e[r];return QE(t)?void 0:JE(t)}});var Xc=a((s5,Qc)=>{"use strict";var la=D(),fa=N(),pa=$(),XE=TypeError;Qc.exports=function(e,r){var t,n;if(r==="string"&&fa(t=e.toString)&&!pa(n=la(t,e))||fa(t=e.valueOf)&&!pa(n=la(t,e))||r!=="string"&&fa(t=e.toString)&&!pa(n=la(t,e)))return n;throw new XE("Can't convert object to primitive value")}});var ee=a((c5,Zc)=>{"use strict";Zc.exports=!0});var tl=a((l5,rl)=>{"use strict";var el=P(),ZE=Object.defineProperty;rl.exports=function(e,r){try{ZE(el,e,{value:r,configurable:!0,writable:!0})}catch{el[e]=r}return r}});var mt=a((f5,al)=>{"use strict";var e0=ee(),r0=P(),t0=tl(),nl="__core-js_shared__",il=al.exports=r0[nl]||t0(nl,{});(il.versions||(il.versions=[])).push({version:"3.48.0",mode:e0?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var cr=a((p5,ul)=>{"use strict";var ol=mt();ul.exports=function(e,r){return ol[e]||(ol[e]=r||{})}});var te=a((v5,sl)=>{"use strict";var n0=ur(),i0=Object;sl.exports=function(e){return i0(n0(e))}});var W=a((d5,cl)=>{"use strict";var a0=A(),o0=te(),u0=a0({}.hasOwnProperty);cl.exports=Object.hasOwn||function(r,t){return u0(o0(r),t)}});var Fr=a((m5,ll)=>{"use strict";var s0=A(),c0=0,l0=Math.random(),f0=s0(1.1.toString);ll.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+f0(++c0+l0,36)}});var R=a((h5,pl)=>{"use strict";var p0=P(),v0=cr(),fl=W(),d0=Fr(),m0=sr(),h0=ca(),Dr=p0.Symbol,va=v0("wks"),y0=h0?Dr.for||Dr:Dr&&Dr.withoutSetter||d0;pl.exports=function(e){return fl(va,e)||(va[e]=m0&&fl(Dr,e)?Dr[e]:y0("Symbol."+e)),va[e]}});var hl=a((y5,ml)=>{"use strict";var g0=D(),vl=$(),dl=Lr(),b0=wn(),q0=Xc(),x0=R(),S0=TypeError,w0=x0("toPrimitive");ml.exports=function(e,r){if(!vl(e)||dl(e))return e;var t=b0(e,w0),n;if(t){if(r===void 0&&(r="default"),n=g0(t,e,r),!vl(n)||dl(n))return n;throw new S0("Can't convert object to primitive value")}return r===void 0&&(r="number"),q0(e,r)}});var Tn=a((g5,yl)=>{"use strict";var T0=hl(),O0=Lr();yl.exports=function(e){var r=T0(e,"string");return O0(r)?r:r+""}});var On=a((b5,bl)=>{"use strict";var C0=P(),gl=$(),da=C0.document,E0=gl(da)&&gl(da.createElement);bl.exports=function(e){return E0?da.createElement(e):{}}});var ma=a((q5,ql)=>{"use strict";var I0=G(),k0=_(),_0=On();ql.exports=!I0&&!k0(function(){return Object.defineProperty(_0("div"),"a",{get:function(){return 7}}).a!==7})});var ht=a(Sl=>{"use strict";var P0=G(),R0=D(),A0=ia(),N0=Ke(),M0=Ie(),j0=Tn(),$0=W(),L0=ma(),xl=Object.getOwnPropertyDescriptor;Sl.f=P0?xl:function(r,t){if(r=M0(r),t=j0(t),L0)try{return xl(r,t)}catch{}if($0(r,t))return N0(!R0(A0.f,r,t),r[t])}});var ha=a((S5,wl)=>{"use strict";var F0=_(),D0=N(),B0=/#|\.prototype\./,yt=function(e,r){var t=U0[G0(e)];return t===H0?!0:t===W0?!1:D0(r)?F0(r):!!r},G0=yt.normalize=function(e){return String(e).replace(B0,".").toLowerCase()},U0=yt.data={},W0=yt.NATIVE="N",H0=yt.POLYFILL="P";wl.exports=yt});var z=a((w5,Ol)=>{"use strict";var Tl=dt(),K0=F(),z0=Nr(),V0=Tl(Tl.bind);Ol.exports=function(e,r){return K0(e),r===void 0?e:z0?V0(e,r):function(){return e.apply(r,arguments)}}});var ya=a((T5,Cl)=>{"use strict";var Y0=G(),J0=_();Cl.exports=Y0&&J0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((O5,El)=>{"use strict";var Q0=$(),X0=String,Z0=TypeError;El.exports=function(e){if(Q0(e))return e;throw new Z0(X0(e)+" is not an object")}});var ne=a(kl=>{"use strict";var eI=G(),rI=ma(),tI=ya(),Cn=X(),Il=Tn(),nI=TypeError,ga=Object.defineProperty,iI=Object.getOwnPropertyDescriptor,ba="enumerable",qa="configurable",xa="writable";kl.f=eI?tI?function(r,t,n){if(Cn(r),t=Il(t),Cn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&xa in n&&!n[xa]){var i=iI(r,t);i&&i[xa]&&(r[t]=n.value,n={configurable:qa in n?n[qa]:i[qa],enumerable:ba in n?n[ba]:i[ba],writable:!1})}return ga(r,t,n)}:ga:function(r,t,n){if(Cn(r),t=Il(t),Cn(n),rI)try{return ga(r,t,n)}catch{}if("get"in n||"set"in n)throw new nI("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((E5,_l)=>{"use strict";var aI=G(),oI=ne(),uI=Ke();_l.exports=aI?function(e,r,t){return oI.f(e,r,uI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((I5,Rl)=>{"use strict";var gt=P(),sI=Mr(),cI=dt(),lI=N(),fI=ht().f,pI=ha(),Br=K(),vI=z(),Gr=Se(),Pl=W();mt();var dI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return sI(e,this,arguments)};return r.prototype=e.prototype,r};Rl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?gt:i?gt[t]:gt[t]&&gt[t].prototype,l=n?Br:Br[t]||Gr(Br,t,{})[t],c=l.prototype,s,f,p,d,v,h,m,y,q;for(d in r)s=pI(n?d:t+(i?".":"#")+d,e.forced),f=!s&&u&&Pl(u,d),h=l[d],f&&(e.dontCallGetSet?(q=fI(u,d),m=q&&q.value):m=u[d]),v=f&&m?m:r[d],!(!s&&!o&&typeof h==typeof v)&&(e.bind&&f?y=vI(v,gt):e.wrap&&f?y=dI(v):o&&lI(v)?y=cI(v):y=v,(e.sham||v&&v.sham||h&&h.sham)&&Gr(y,"sham",!0),Gr(l,d,y),o&&(p=t+"Prototype",Pl(Br,p)||Gr(Br,p,{}),Gr(Br[p],d,v),e.real&&c&&(s||!c[d])&&Gr(c,d,v)))}});var ke=a((k5,Al)=>{"use strict";var mI=xe();Al.exports=Array.isArray||function(r){return mI(r)==="Array"}});var En=a((_5,Ml)=>{"use strict";var hI=R(),yI=hI("toStringTag"),Nl={};Nl[yI]="z";Ml.exports=String(Nl)==="[object z]"});var bt=a((P5,jl)=>{"use strict";var gI=En(),bI=N(),In=xe(),qI=R(),xI=qI("toStringTag"),SI=Object,wI=In(function(){return arguments}())==="Arguments",TI=function(e,r){try{return e[r]}catch{}};jl.exports=gI?In:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=TI(r=SI(e),xI))=="string"?t:wI?In(r):(n=In(r))==="Object"&&bI(r.callee)?"Arguments":n}});var wa=a((R5,$l)=>{"use strict";var OI=A(),CI=N(),Sa=mt(),EI=OI(Function.toString);CI(Sa.inspectSource)||(Sa.inspectSource=function(e){return EI(e)});$l.exports=Sa.inspectSource});var xt=a((A5,Gl)=>{"use strict";var II=A(),kI=_(),Ll=N(),_I=bt(),PI=U(),RI=wa(),Fl=function(){},Dl=PI("Reflect","construct"),Ta=/^\s*(?:class|function)\b/,AI=II(Ta.exec),NI=!Ta.test(Fl),qt=function(r){if(!Ll(r))return!1;try{return Dl(Fl,[],r),!0}catch{return!1}},Bl=function(r){if(!Ll(r))return!1;switch(_I(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return NI||!!AI(Ta,RI(r))}catch{return!0}};Bl.sham=!0;Gl.exports=!Dl||kI(function(){var e;return qt(qt.call)||!qt(Object)||!qt(function(){e=!0})||e})?Bl:qt});var Wl=a((N5,Ul)=>{"use strict";var MI=Math.ceil,jI=Math.floor;Ul.exports=Math.trunc||function(r){var t=+r;return(t>0?jI:MI)(t)}});var kn=a((M5,Hl)=>{"use strict";var $I=Wl();Hl.exports=function(e){var r=+e;return r!==r||r===0?0:$I(r)}});var Oa=a((j5,Kl)=>{"use strict";var LI=kn(),FI=Math.max,DI=Math.min;Kl.exports=function(e,r){var t=LI(e);return t<0?FI(t+r,0):DI(t,r)}});var Ca=a(($5,zl)=>{"use strict";var BI=kn(),GI=Math.min;zl.exports=function(e){var r=BI(e);return r>0?GI(r,9007199254740991):0}});var fe=a((L5,Vl)=>{"use strict";var UI=Ca();Vl.exports=function(e){return UI(e.length)}});var Ur=a((F5,Yl)=>{"use strict";var WI=G(),HI=ne(),KI=Ke();Yl.exports=function(e,r,t){WI?HI.f(e,r,KI(0,t)):e[r]=t}});var Wr=a((D5,Jl)=>{"use strict";var zI=G(),VI=ke(),YI=TypeError,JI=Object.getOwnPropertyDescriptor,QI=zI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Jl.exports=QI?function(e,r){if(VI(e)&&!JI(e,"length").writable)throw new YI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=a((B5,Ql)=>{"use strict";var XI=_(),ZI=R(),ek=$r(),rk=ZI("species");Ql.exports=function(e){return ek>=51||!XI(function(){var r=[],t=r.constructor={};return t[rk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var lr=a((G5,Xl)=>{"use strict";var tk=A();Xl.exports=tk([].slice)});var rf=a(()=>{"use strict";var nk=x(),Zl=ke(),ik=xt(),ak=$(),ef=Oa(),ok=fe(),uk=Ie(),sk=Ur(),ck=Wr(),lk=R(),fk=St(),pk=lr(),vk=fk("slice"),dk=lk("species"),Ea=Array,mk=Math.max;nk({target:"Array",proto:!0,forced:!vk},{slice:function(r,t){var n=uk(this),i=ok(n),o=ef(r,i),u=ef(t===void 0?i:t,i),l,c,s;if(Zl(n)&&(l=n.constructor,ik(l)&&(l===Ea||Zl(l.prototype))?l=void 0:ak(l)&&(l=l[dk],l===null&&(l=void 0)),l===Ea||l===void 0))return pk(n,o,u);for(c=new(l===void 0?Ea:l)(mk(u-o,0)),s=0;o<u;o++,s++)o in n&&sk(c,s,n[o]);return ck(c,s),c}})});var ue=a((H5,tf)=>{"use strict";var hk=P(),yk=K();tf.exports=function(e,r){var t=yk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=hk[e],o=i&&i.prototype;return o&&o[r]}});var af=a((K5,nf)=>{"use strict";rf();var gk=ue();nf.exports=gk("Array","slice")});var uf=a((z5,of)=>{"use strict";var bk=B(),qk=af(),Ia=Array.prototype;of.exports=function(e){var r=e.slice;return e===Ia||bk(Ia,e)&&r===Ia.slice?qk:r}});var cf=a((V5,sf)=>{"use strict";var xk=uf();sf.exports=xk});var ff=a((Y5,lf)=>{"use strict";var Sk=cf();lf.exports=Sk});var vf=a((J5,pf)=>{"use strict";var wk=ff();pf.exports=wk});var ka=a((Q5,df)=>{"use strict";df.exports=vf()});var Hr=a((X5,mf)=>{mf.exports=ka()});var Ve=a((Z5,hf)=>{"use strict";var Tk=bt(),Ok=String;hf.exports=function(e){if(Tk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Ok(e)}});var qf=a((e8,bf)=>{"use strict";var _a=A(),Ck=kn(),Ek=Ve(),Ik=ur(),kk=_a("".charAt),yf=_a("".charCodeAt),_k=_a("".slice),gf=function(e){return function(r,t){var n=Ek(Ik(r)),i=Ck(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=yf(n,i),u<55296||u>56319||i+1===o||(l=yf(n,i+1))<56320||l>57343?e?kk(n,i):u:e?_k(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};bf.exports={codeAt:gf(!1),charAt:gf(!0)}});var wf=a((r8,Sf)=>{"use strict";var Pk=P(),Rk=N(),xf=Pk.WeakMap;Sf.exports=Rk(xf)&&/native code/.test(String(xf))});var wt=a((t8,Of)=>{"use strict";var Ak=cr(),Nk=Fr(),Tf=Ak("keys");Of.exports=function(e){return Tf[e]||(Tf[e]=Nk(e))}});var Kr=a((n8,Cf)=>{"use strict";Cf.exports={}});var Ye=a((i8,kf)=>{"use strict";var Mk=wf(),If=P(),jk=$(),$k=Se(),Pa=W(),Ra=mt(),Lk=wt(),Fk=Kr(),Ef="Object already initialized",Aa=If.TypeError,Dk=If.WeakMap,_n,Tt,Pn,Bk=function(e){return Pn(e)?Tt(e):_n(e,{})},Gk=function(e){return function(r){var t;if(!jk(r)||(t=Tt(r)).type!==e)throw new Aa("Incompatible receiver, "+e+" required");return t}};Mk||Ra.state?(he=Ra.state||(Ra.state=new Dk),he.get=he.get,he.has=he.has,he.set=he.set,_n=function(e,r){if(he.has(e))throw new Aa(Ef);return r.facade=e,he.set(e,r),r},Tt=function(e){return he.get(e)||{}},Pn=function(e){return he.has(e)}):(fr=Lk("state"),Fk[fr]=!0,_n=function(e,r){if(Pa(e,fr))throw new Aa(Ef);return r.facade=e,$k(e,fr,r),r},Tt=function(e){return Pa(e,fr)?e[fr]:{}},Pn=function(e){return Pa(e,fr)});var he,fr;kf.exports={set:_n,get:Tt,has:Pn,enforce:Bk,getterFor:Gk}});var Rf=a((a8,Pf)=>{"use strict";var Na=G(),Uk=W(),_f=Function.prototype,Wk=Na&&Object.getOwnPropertyDescriptor,Ma=Uk(_f,"name"),Hk=Ma&&function(){}.name==="something",Kk=Ma&&(!Na||Na&&Wk(_f,"name").configurable);Pf.exports={EXISTS:Ma,PROPER:Hk,CONFIGURABLE:Kk}});var ja=a((o8,Nf)=>{"use strict";var zk=Ie(),Vk=Oa(),Yk=fe(),Af=function(e){return function(r,t,n){var i=zk(r),o=Yk(i);if(o===0)return!e&&-1;var u=Vk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Nf.exports={includes:Af(!0),indexOf:Af(!1)}});var La=a((u8,jf)=>{"use strict";var Jk=A(),$a=W(),Qk=Ie(),Xk=ja().indexOf,Zk=Kr(),Mf=Jk([].push);jf.exports=function(e,r){var t=Qk(e),n=0,i=[],o;for(o in t)!$a(Zk,o)&&$a(t,o)&&Mf(i,o);for(;r.length>n;)$a(t,o=r[n++])&&(~Xk(i,o)||Mf(i,o));return i}});var Rn=a((s8,$f)=>{"use strict";$f.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var An=a((c8,Lf)=>{"use strict";var e1=La(),r1=Rn();Lf.exports=Object.keys||function(r){return e1(r,r1)}});var Fa=a(Ff=>{"use strict";var t1=G(),n1=ya(),i1=ne(),a1=X(),o1=Ie(),u1=An();Ff.f=t1&&!n1?Object.defineProperties:function(r,t){a1(r);for(var n=o1(t),i=u1(t),o=i.length,u=0,l;o>u;)i1.f(r,l=i[u++],n[l]);return r}});var Da=a((f8,Df)=>{"use strict";var s1=U();Df.exports=s1("document","documentElement")});var Je=a((p8,zf)=>{"use strict";var c1=X(),l1=Fa(),Bf=Rn(),f1=Kr(),p1=Da(),v1=On(),d1=wt(),Gf=">",Uf="<",Ga="prototype",Ua="script",Hf=d1("IE_PROTO"),Ba=function(){},Kf=function(e){return Uf+Ua+Gf+e+Uf+"/"+Ua+Gf},Wf=function(e){e.write(Kf("")),e.close();var r=e.parentWindow.Object;return e=null,r},m1=function(){var e=v1("iframe"),r="java"+Ua+":",t;return e.style.display="none",p1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Kf("document.F=Object")),t.close(),t.F},Nn,Mn=function(){try{Nn=new ActiveXObject("htmlfile")}catch{}Mn=typeof document<"u"?document.domain&&Nn?Wf(Nn):m1():Wf(Nn);for(var e=Bf.length;e--;)delete Mn[Ga][Bf[e]];return Mn()};f1[Hf]=!0;zf.exports=Object.create||function(r,t){var n;return r!==null?(Ba[Ga]=c1(r),n=new Ba,Ba[Ga]=null,n[Hf]=r):n=Mn(),t===void 0?n:l1.f(n,t)}});var Wa=a((v8,Vf)=>{"use strict";var h1=_();Vf.exports=!h1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Ot=a((d8,Jf)=>{"use strict";var y1=W(),g1=N(),b1=te(),q1=wt(),x1=Wa(),Yf=q1("IE_PROTO"),Ha=Object,S1=Ha.prototype;Jf.exports=x1?Ha.getPrototypeOf:function(e){var r=b1(e);if(y1(r,Yf))return r[Yf];var t=r.constructor;return g1(t)&&r instanceof t?t.prototype:r instanceof Ha?S1:null}});var _e=a((m8,Qf)=>{"use strict";var w1=Se();Qf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:w1(e,r,t),e}});var Ya=a((h8,ep)=>{"use strict";var T1=_(),O1=N(),C1=$(),E1=Je(),Xf=Ot(),I1=_e(),k1=R(),_1=ee(),Va=k1("iterator"),Zf=!1,Pe,Ka,za;[].keys&&(za=[].keys(),"next"in za?(Ka=Xf(Xf(za)),Ka!==Object.prototype&&(Pe=Ka)):Zf=!0);var P1=!C1(Pe)||T1(function(){var e={};return Pe[Va].call(e)!==e});P1?Pe={}:_1&&(Pe=E1(Pe));O1(Pe[Va])||I1(Pe,Va,function(){return this});ep.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Zf}});var tp=a((y8,rp)=>{"use strict";var R1=En(),A1=bt();rp.exports=R1?{}.toString:function(){return"[object "+A1(this)+"]"}});var Re=a((g8,ip)=>{"use strict";var N1=En(),M1=ne().f,j1=Se(),$1=W(),L1=tp(),F1=R(),np=F1("toStringTag");ip.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&($1(i,np)||M1(i,np,{configurable:!0,value:r}),n&&!N1&&j1(i,"toString",L1))}});var pr=a((b8,ap)=>{"use strict";ap.exports={}});var up=a((q8,op)=>{"use strict";var D1=Ya().IteratorPrototype,B1=Je(),G1=Ke(),U1=Re(),W1=pr(),H1=function(){return this};op.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=B1(D1,{next:G1(+!n,t)}),U1(e,i,!1,!0),W1[i]=H1,e}});var cp=a((x8,sp)=>{"use strict";var K1=A(),z1=F();sp.exports=function(e,r,t){try{return K1(z1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var fp=a((S8,lp)=>{"use strict";var V1=$();lp.exports=function(e){return V1(e)||e===null}});var vp=a((w8,pp)=>{"use strict";var Y1=fp(),J1=String,Q1=TypeError;pp.exports=function(e){if(Y1(e))return e;throw new Q1("Can't set "+J1(e)+" as a prototype")}});var Ct=a((T8,dp)=>{"use strict";var X1=cp(),Z1=$(),e_=ur(),r_=vp();dp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=X1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return e_(i),r_(o),Z1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Ln=a((O8,Tp)=>{"use strict";var t_=x(),n_=D(),jn=ee(),Sp=Rf(),i_=N(),a_=up(),mp=Ot(),hp=Ct(),o_=Re(),u_=Se(),Ja=_e(),s_=R(),yp=pr(),wp=Ya(),c_=Sp.PROPER,l_=Sp.CONFIGURABLE,gp=wp.IteratorPrototype,$n=wp.BUGGY_SAFARI_ITERATORS,Et=s_("iterator"),bp="keys",It="values",qp="entries",xp=function(){return this};Tp.exports=function(e,r,t,n,i,o,u){a_(t,r,n);var l=function(q){if(q===i&&d)return d;if(!$n&&q&&q in f)return f[q];switch(q){case bp:return function(){return new t(this,q)};case It:return function(){return new t(this,q)};case qp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[Et]||f["@@iterator"]||i&&f[i],d=!$n&&p||l(i),v=r==="Array"&&f.entries||p,h,m,y;if(v&&(h=mp(v.call(new e)),h!==Object.prototype&&h.next&&(!jn&&mp(h)!==gp&&(hp?hp(h,gp):i_(h[Et])||Ja(h,Et,xp)),o_(h,c,!0,!0),jn&&(yp[c]=xp))),c_&&i===It&&p&&p.name!==It&&(!jn&&l_?u_(f,"name",It):(s=!0,d=function(){return n_(p,this)})),i)if(m={values:l(It),keys:o?d:l(bp),entries:l(qp)},u)for(y in m)($n||s||!(y in f))&&Ja(f,y,m[y]);else t_({target:r,proto:!0,forced:$n||s},m);return(!jn||u)&&f[Et]!==d&&Ja(f,Et,d,{name:i}),yp[r]=d,m}});var Fn=a((C8,Op)=>{"use strict";Op.exports=function(e,r){return{value:e,done:r}}});var vr=a(()=>{"use strict";var f_=qf().charAt,p_=Ve(),Ep=Ye(),v_=Ln(),Cp=Fn(),Ip="String Iterator",d_=Ep.set,m_=Ep.getterFor(Ip);v_(String,"String",function(e){d_(this,{type:Ip,string:p_(e),index:0})},function(){var r=m_(this),t=r.string,n=r.index,i;return n>=t.length?Cp(void 0,!0):(i=f_(t,n),r.index+=i.length,Cp(i,!1))})});var Qa=a((k8,_p)=>{"use strict";var h_=D(),kp=X(),y_=wn();_p.exports=function(e,r,t){var n,i;kp(e);try{if(n=y_(e,"return"),!n){if(r==="throw")throw t;return t}n=h_(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return kp(n),t}});var Rp=a((_8,Pp)=>{"use strict";var g_=X(),b_=Qa();Pp.exports=function(e,r,t,n){try{return n?r(g_(t)[0],t[1]):r(t)}catch(i){b_(e,"throw",i)}}});var Xa=a((P8,Ap)=>{"use strict";var q_=R(),x_=pr(),S_=q_("iterator"),w_=Array.prototype;Ap.exports=function(e){return e!==void 0&&(x_.Array===e||w_[S_]===e)}});var kt=a((R8,Mp)=>{"use strict";var T_=bt(),Np=wn(),O_=or(),C_=pr(),E_=R(),I_=E_("iterator");Mp.exports=function(e){if(!O_(e))return Np(e,I_)||Np(e,"@@iterator")||C_[T_(e)]}});var Dn=a((A8,jp)=>{"use strict";var k_=D(),__=F(),P_=X(),R_=ze(),A_=kt(),N_=TypeError;jp.exports=function(e,r){var t=arguments.length<2?A_(e):r;if(__(t))return P_(k_(t,e));throw new N_(R_(e)+" is not iterable")}});var Dp=a((N8,Fp)=>{"use strict";var M_=z(),j_=D(),$_=te(),L_=Rp(),F_=Xa(),D_=xt(),B_=fe(),$p=Ur(),G_=Wr(),U_=Dn(),W_=kt(),Lp=Array;Fp.exports=function(r){var t=$_(r),n=D_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=M_(o,i>2?arguments[2]:void 0));var l=W_(t),c=0,s,f,p,d,v,h;if(l&&!(this===Lp&&F_(l)))for(f=n?new this:[],d=U_(t,l),v=d.next;!(p=j_(v,d)).done;c++)h=u?L_(d,o,[p.value,c],!0):p.value,$p(f,c,h);else for(s=B_(t),f=n?new this(s):Lp(s);s>c;c++)h=u?o(t[c],c):t[c],$p(f,c,h);return G_(f,c),f}});var eo=a((M8,Wp)=>{"use strict";var H_=R(),Gp=H_("iterator"),Up=!1;try{Bp=0,Za={next:function(){return{done:!!Bp++}},return:function(){Up=!0}},Za[Gp]=function(){return this},Array.from(Za,function(){throw 2})}catch{}var Bp,Za;Wp.exports=function(e,r){try{if(!r&&!Up)return!1}catch{return!1}var t=!1;try{var n={};n[Gp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Hp=a(()=>{"use strict";var K_=x(),z_=Dp(),V_=eo(),Y_=!V_(function(e){Array.from(e)});K_({target:"Array",stat:!0,forced:Y_},{from:z_})});var zp=a((L8,Kp)=>{"use strict";vr();Hp();var J_=K();Kp.exports=J_.Array.from});var Yp=a((F8,Vp)=>{"use strict";var Q_=zp();Vp.exports=Q_});var Qp=a((D8,Jp)=>{"use strict";var X_=Yp();Jp.exports=X_});var Zp=a((B8,Xp)=>{"use strict";var Z_=Qp();Xp.exports=Z_});var ro=a((G8,ev)=>{"use strict";ev.exports=Zp()});var Bn=a((U8,rv)=>{rv.exports=ro()});var _t=a((W8,tv)=>{"use strict";var eP=TypeError,rP=9007199254740991;tv.exports=function(e){if(e>rP)throw eP("Maximum allowed index exceeded");return e}});var ov=a((H8,av)=>{"use strict";var nv=ke(),tP=xt(),nP=$(),iP=R(),aP=iP("species"),iv=Array;av.exports=function(e){var r;return nv(e)&&(r=e.constructor,tP(r)&&(r===iv||nv(r.prototype))?r=void 0:nP(r)&&(r=r[aP],r===null&&(r=void 0))),r===void 0?iv:r}});var Gn=a((K8,uv)=>{"use strict";var oP=ov();uv.exports=function(e,r){return new(oP(e))(r===0?0:r)}});var to=a(()=>{"use strict";var uP=x(),sP=_(),cP=ke(),lP=$(),fP=te(),pP=fe(),sv=_t(),cv=Ur(),vP=Wr(),dP=Gn(),mP=St(),hP=R(),yP=$r(),lv=hP("isConcatSpreadable"),gP=yP>=51||!sP(function(){var e=[];return e[lv]=!1,e.concat()[0]!==e}),bP=function(e){if(!lP(e))return!1;var r=e[lv];return r!==void 0?!!r:cP(e)},qP=!gP||!mP("concat");uP({target:"Array",proto:!0,arity:1,forced:qP},{concat:function(r){var t=fP(this),n=dP(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],bP(s))for(c=pP(s),sv(i+c),u=0;u<c;u++,i++)u in s&&cv(n,i,s[u]);else sv(i+1),cv(n,i++,s);return vP(n,i),n}})});var Pt=a(()=>{});var Rt=a(fv=>{"use strict";var xP=La(),SP=Rn(),wP=SP.concat("length","prototype");fv.f=Object.getOwnPropertyNames||function(r){return xP(r,wP)}});var no=a((X8,dv)=>{"use strict";var TP=xe(),OP=Ie(),pv=Rt().f,CP=lr(),vv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],EP=function(e){try{return pv(e)}catch{return CP(vv)}};dv.exports.f=function(r){return vv&&TP(r)==="Window"?EP(r):pv(OP(r))}});var Un=a(mv=>{"use strict";mv.f=Object.getOwnPropertySymbols});var Wn=a((eW,hv)=>{"use strict";var IP=ne();hv.exports=function(e,r,t){return IP.f(e,r,t)}});var zr=a(yv=>{"use strict";var kP=R();yv.f=kP});var M=a((tW,bv)=>{"use strict";var gv=K(),_P=W(),PP=zr(),RP=ne().f;bv.exports=function(e){var r=gv.Symbol||(gv.Symbol={});_P(r,e)||RP(r,e,{value:PP.f(e)})}});var io=a((nW,qv)=>{"use strict";var AP=D(),NP=U(),MP=R(),jP=_e();qv.exports=function(){var e=NP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=MP("toPrimitive");r&&!r[n]&&jP(r,n,function(i){return AP(t,this)},{arity:1})}});var At=a((iW,Sv)=>{"use strict";var $P=z(),LP=xn(),FP=te(),DP=fe(),xv=Gn(),ao=Ur(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=FP(c),d=LP(p),v=DP(d),h=$P(s,f),m=0,y=0,q=r?xv(c,v):t||u?xv(c,0):void 0,b,I;v>m;m++)if((l||m in d)&&(b=d[m],I=h(b,m,p),e))if(r)ao(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:ao(q,y++,b)}else switch(e){case 4:return!1;case 7:ao(q,y++,b)}return o?-1:n||i?i:q}};Sv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var Fv=a(()=>{"use strict";var Hn=x(),jt=P(),mo=D(),BP=A(),GP=ee(),Vr=G(),Yr=sr(),UP=_(),H=W(),WP=B(),co=X(),Kn=Ie(),ho=Tn(),HP=Ve(),lo=Ke(),Jr=Je(),Ov=An(),KP=Rt(),Cv=no(),zP=Un(),Ev=ht(),Iv=ne(),VP=Fa(),kv=ia(),oo=_e(),YP=Wn(),yo=cr(),JP=wt(),_v=Kr(),wv=Fr(),QP=R(),XP=zr(),ZP=M(),eR=io(),rR=Re(),Pv=Ye(),zn=At().forEach,ie=JP("hidden"),Vn="Symbol",Mt="prototype",tR=Pv.set,Tv=Pv.getterFor(Vn),pe=Object[Mt],dr=jt.Symbol,Nt=dr&&dr[Mt],nR=jt.RangeError,iR=jt.TypeError,uo=jt.QObject,Rv=Ev.f,mr=Iv.f,Av=Cv.f,aR=kv.f,Nv=BP([].push),Ae=yo("symbols"),$t=yo("op-symbols"),oR=yo("wks"),fo=!uo||!uo[Mt]||!uo[Mt].findChild,Mv=function(e,r,t){var n=Rv(pe,r);n&&delete pe[r],mr(e,r,t),n&&e!==pe&&mr(pe,r,n)},po=Vr&&UP(function(){return Jr(mr({},"a",{get:function(){return mr(this,"a",{value:7}).a}})).a!==7})?Mv:mr,so=function(e,r){var t=Ae[e]=Jr(Nt);return tR(t,{type:Vn,tag:e,description:r}),Vr||(t.description=r),t},Yn=function(r,t,n){r===pe&&Yn($t,t,n),co(r);var i=ho(t);return co(n),H(Ae,i)?(n.enumerable?(H(r,ie)&&r[ie][i]&&(r[ie][i]=!1),n=Jr(n,{enumerable:lo(0,!1)})):(H(r,ie)||mr(r,ie,lo(1,Jr(null))),r[ie][i]=!0),po(r,i,n)):mr(r,i,n)},go=function(r,t){co(r);var n=Kn(t),i=Ov(n).concat(Lv(n));return zn(i,function(o){(!Vr||mo(vo,n,o))&&Yn(r,o,n[o])}),r},uR=function(r,t){return t===void 0?Jr(r):go(Jr(r),t)},vo=function(r){var t=ho(r),n=mo(aR,this,t);return this===pe&&H(Ae,t)&&!H($t,t)?!1:n||!H(this,t)||!H(Ae,t)||H(this,ie)&&this[ie][t]?n:!0},jv=function(r,t){var n=Kn(r),i=ho(t);if(!(n===pe&&H(Ae,i)&&!H($t,i))){var o=Rv(n,i);return o&&H(Ae,i)&&!(H(n,ie)&&n[ie][i])&&(o.enumerable=!0),o}},$v=function(r){var t=Av(Kn(r)),n=[];return zn(t,function(i){!H(Ae,i)&&!H(_v,i)&&Nv(n,i)}),n},Lv=function(e){var r=e===pe,t=Av(r?$t:Kn(e)),n=[];return zn(t,function(i){H(Ae,i)&&(!r||H(pe,i))&&Nv(n,Ae[i])}),n};Yr||(dr=function(){if(WP(Nt,this))throw new iR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:HP(arguments[0]),t=wv(r),n=function(i){var o=this===void 0?jt:this;o===pe&&mo(n,$t,i),H(o,ie)&&H(o[ie],t)&&(o[ie][t]=!1);var u=lo(1,i);try{po(o,t,u)}catch(l){if(!(l instanceof nR))throw l;Mv(o,t,u)}};return Vr&&fo&&po(pe,t,{configurable:!0,set:n}),so(t,r)},Nt=dr[Mt],oo(Nt,"toString",function(){return Tv(this).tag}),oo(dr,"withoutSetter",function(e){return so(wv(e),e)}),kv.f=vo,Iv.f=Yn,VP.f=go,Ev.f=jv,KP.f=Cv.f=$v,zP.f=Lv,XP.f=function(e){return so(QP(e),e)},Vr&&(YP(Nt,"description",{configurable:!0,get:function(){return Tv(this).description}}),GP||oo(pe,"propertyIsEnumerable",vo,{unsafe:!0})));Hn({global:!0,constructor:!0,wrap:!0,forced:!Yr,sham:!Yr},{Symbol:dr});zn(Ov(oR),function(e){ZP(e)});Hn({target:Vn,stat:!0,forced:!Yr},{useSetter:function(){fo=!0},useSimple:function(){fo=!1}});Hn({target:"Object",stat:!0,forced:!Yr,sham:!Vr},{create:uR,defineProperty:Yn,defineProperties:go,getOwnPropertyDescriptor:jv});Hn({target:"Object",stat:!0,forced:!Yr},{getOwnPropertyNames:$v});eR();rR(dr,Vn);_v[ie]=!0});var bo=a((uW,Dv)=>{"use strict";var sR=sr();Dv.exports=sR&&!!Symbol.for&&!!Symbol.keyFor});var Gv=a(()=>{"use strict";var cR=x(),lR=U(),fR=W(),pR=Ve(),Bv=cr(),vR=bo(),qo=Bv("string-to-symbol-registry"),dR=Bv("symbol-to-string-registry");cR({target:"Symbol",stat:!0,forced:!vR},{for:function(e){var r=pR(e);if(fR(qo,r))return qo[r];var t=lR("Symbol")(r);return qo[r]=t,dR[t]=r,t}})});var Wv=a(()=>{"use strict";var mR=x(),hR=W(),yR=Lr(),gR=ze(),bR=cr(),qR=bo(),Uv=bR("symbol-to-string-registry");mR({target:"Symbol",stat:!0,forced:!qR},{keyFor:function(r){if(!yR(r))throw new TypeError(gR(r)+" is not a symbol");if(hR(Uv,r))return Uv[r]}})});var Kv=a((pW,Hv)=>{"use strict";var xR=$(),SR=Ye().get;Hv.exports=function(r){if(!xR(r))return!1;var t=SR(r);return!!t&&t.type==="RawJSON"}});var Qv=a((vW,Jv)=>{"use strict";var xo=A(),wR=W(),Jn=SyntaxError,TR=parseInt,OR=String.fromCharCode,CR=xo("".charAt),zv=xo("".slice),Vv=xo(/./.exec),Yv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},ER=/^[\da-f]{4}$/i,IR=/^[\u0000-\u001F]$/;Jv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=CR(e,r);if(i==="\\"){var o=zv(e,r,r+2);if(wR(Yv,o))n+=Yv[o],r+=2;else if(o==="\\u"){r+=2;var u=zv(e,r,r+4);if(!Vv(ER,u))throw new Jn("Bad Unicode escape at: "+r);n+=OR(TR(u,16)),r+=4}else throw new Jn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Vv(IR,i))throw new Jn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Jn("Unterminated string at: "+r);return{value:n,end:r}}});var Zv=a((dW,Xv)=>{"use strict";var kR=_();Xv.exports=!kR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var vd=a(()=>{"use strict";var _R=x(),ud=U(),PR=Mr(),sd=D(),hr=A(),cd=_(),ed=ke(),Xn=N(),RR=Kv(),rd=Lr(),td=xe(),AR=Ve(),NR=lr(),MR=Qv(),jR=Fr(),$R=sr(),So=Zv(),ld=String,Xe=ud("JSON","stringify"),Qn=hr(/./.exec),To=hr("".charAt),LR=hr("".charCodeAt),FR=hr("".replace),wo=hr("".slice),Oo=hr([].push),DR=hr(1.1.toString),BR=/[\uD800-\uDFFF]/g,nd=/^[\uD800-\uDBFF]$/,id=/^[\uDC00-\uDFFF]$/,Co=jR(),ad=Co.length,fd=!$R||cd(function(){var e=ud("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),od=cd(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),GR=fd?function(e,r){var t=NR(arguments),n=pd(r);if(!(!Xn(n)&&(e===void 0||rd(e))))return t[1]=function(i,o){if(Xn(n)&&(o=sd(n,this,ld(i),o)),!rd(o))return o},PR(Xe,null,t)}:Xe,UR=function(e,r,t){var n=To(t,r-1),i=To(t,r+1);return Qn(nd,e)&&!Qn(id,i)||Qn(id,e)&&!Qn(nd,n)?"\\u"+DR(LR(e,0),16):e},pd=function(e){if(Xn(e))return e;if(ed(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?Oo(t,i):(typeof i=="number"||td(i)==="Number"||td(i)==="String")&&Oo(t,AR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(ed(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Xe&&_R({target:"JSON",stat:!0,arity:3,forced:fd||od||!So},{stringify:function(r,t,n){var i=pd(t),o=[],u=GR(r,function(v,h){var m=Xn(i)?sd(i,this,ld(v),h):h;return!So&&RR(m)?Co+(Oo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(od&&(u=FR(u,BR,UR)),So))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=To(u,s);if(f==='"'){var p=MR(u,++s).end-1,d=wo(u,s,p);l+=wo(d,0,ad)===Co?o[wo(d,ad)]:'"'+d+'"',s=p}else l+=f}return l}})});var md=a(()=>{"use strict";var WR=x(),HR=sr(),KR=_(),dd=Un(),zR=te(),VR=!HR||KR(function(){dd.f(1)});WR({target:"Object",stat:!0,forced:VR},{getOwnPropertySymbols:function(r){var t=dd.f;return t?t(zR(r)):[]}})});var hd=a(()=>{"use strict";Fv();Gv();Wv();vd();md()});var Eo=a(()=>{"use strict";var YR=M();YR("asyncDispose")});var Io=a(()=>{"use strict";var JR=M();JR("asyncIterator")});var yd=a(()=>{});var ko=a(()=>{"use strict";var QR=M();QR("dispose")});var gd=a(()=>{"use strict";var XR=M();XR("hasInstance")});var bd=a(()=>{"use strict";var ZR=M();ZR("isConcatSpreadable")});var _o=a(()=>{"use strict";var eA=M();eA("iterator")});var qd=a(()=>{"use strict";var rA=M();rA("match")});var xd=a(()=>{"use strict";var tA=M();tA("matchAll")});var Sd=a(()=>{"use strict";var nA=M();nA("replace")});var wd=a(()=>{"use strict";var iA=M();iA("search")});var Td=a(()=>{"use strict";var aA=M();aA("species")});var Od=a(()=>{"use strict";var oA=M();oA("split")});var Po=a(()=>{"use strict";var uA=M(),sA=io();uA("toPrimitive");sA()});var Cd=a(()=>{"use strict";var cA=U(),lA=M(),fA=Re();lA("toStringTag");fA(cA("Symbol"),"Symbol")});var Ed=a(()=>{"use strict";var pA=M();pA("unscopables")});var Id=a(()=>{"use strict";var vA=P(),dA=Re();dA(vA.JSON,"JSON",!0)});var kd=a(()=>{});var _d=a(()=>{});var Rd=a((a6,Pd)=>{"use strict";to();Pt();hd();Eo();Io();yd();ko();gd();bd();_o();qd();xd();Sd();wd();Td();Od();Po();Cd();Ed();Id();kd();_d();var mA=K();Pd.exports=mA.Symbol});var Ro=a((o6,Ad)=>{"use strict";Ad.exports=function(){}});var yr=a((u6,Ld)=>{"use strict";var hA=Ie(),Ao=Ro(),Nd=pr(),jd=Ye(),yA=ne().f,gA=Ln(),Zn=Fn(),bA=ee(),qA=G(),$d="Array Iterator",xA=jd.set,SA=jd.getterFor($d);Ld.exports=gA(Array,"Array",function(e,r){xA(this,{type:$d,target:hA(e),index:0,kind:r})},function(){var e=SA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Zn(void 0,!0);switch(e.kind){case"keys":return Zn(t,!1);case"values":return Zn(r[t],!1)}return Zn([t,r[t]],!1)},"values");var Md=Nd.Arguments=Nd.Array;Ao("keys");Ao("values");Ao("entries");if(!bA&&qA&&Md.name!=="values")try{yA(Md,"name",{value:"values"})}catch{}});var Dd=a((s6,Fd)=>{"use strict";Fd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var gr=a(()=>{"use strict";yr();var wA=Dd(),TA=P(),OA=Re(),Bd=pr();for(ei in wA)OA(TA[ei],ei),Bd[ei]=Bd.Array;var ei});var Ud=a((f6,Gd)=>{"use strict";var CA=Rd();gr();Gd.exports=CA});var Kd=a(()=>{"use strict";var EA=R(),IA=ne().f,Wd=EA("metadata"),Hd=Function.prototype;Hd[Wd]===void 0&&IA(Hd,Wd,{value:null})});var zd=a(()=>{"use strict";Eo()});var Vd=a(()=>{"use strict";ko()});var Yd=a(()=>{"use strict";var kA=M();kA("metadata")});var Qd=a((q6,Jd)=>{"use strict";var _A=Ud();Kd();zd();Vd();Yd();Jd.exports=_A});var Mo=a((x6,Xd)=>{"use strict";var PA=U(),RA=A(),No=PA("Symbol"),AA=No.keyFor,NA=RA(No.prototype.valueOf);Xd.exports=No.isRegisteredSymbol||function(r){try{return AA(NA(r))!==void 0}catch{return!1}}});var Zd=a(()=>{"use strict";var MA=x(),jA=Mo();MA({target:"Symbol",stat:!0},{isRegisteredSymbol:jA})});var Lo=a((T6,am)=>{"use strict";var $A=cr(),nm=U(),LA=A(),FA=Lr(),DA=R(),ti=nm("Symbol"),em=ti.isWellKnownSymbol,im=nm("Object","getOwnPropertyNames"),BA=LA(ti.prototype.valueOf),rm=$A("wks");for(ri=0,jo=im(ti),tm=jo.length;ri<tm;ri++)try{$o=jo[ri],FA(ti[$o])&&DA($o)}catch{}var $o,ri,jo,tm;am.exports=function(r){if(em&&em(r))return!0;try{for(var t=BA(r),n=0,i=im(rm),o=i.length;n<o;n++)if(rm[i[n]]==t)return!0}catch{}return!1}});var om=a(()=>{"use strict";var GA=x(),UA=Lo();GA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:UA})});var um=a(()=>{"use strict";var WA=M();WA("customMatcher")});var sm=a(()=>{"use strict";var HA=M();HA("observable")});var cm=a(()=>{"use strict";var KA=x(),zA=Mo();KA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:zA})});var lm=a(()=>{"use strict";var VA=x(),YA=Lo();VA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:YA})});var fm=a(()=>{"use strict";var JA=M();JA("matcher")});var pm=a(()=>{"use strict";var QA=M();QA("metadataKey")});var vm=a(()=>{"use strict";var XA=M();XA("patternMatch")});var dm=a(()=>{"use strict";var ZA=M();ZA("replaceAll")});var hm=a((U6,mm)=>{"use strict";var eN=Qd();Zd();om();um();sm();cm();lm();fm();pm();vm();dm();mm.exports=eN});var we=a((W6,ym)=>{"use strict";ym.exports=hm()});var ni=a((H6,gm)=>{gm.exports=we()});var qm=a((K6,bm)=>{"use strict";yr();vr();var rN=kt();bm.exports=rN});var Sm=a((z6,xm)=>{"use strict";var tN=qm();gr();xm.exports=tN});var Tm=a((V6,wm)=>{"use strict";var nN=Sm();wm.exports=nN});var Cm=a((Y6,Om)=>{"use strict";var iN=Tm();Om.exports=iN});var Fo=a((J6,Em)=>{"use strict";Em.exports=Cm()});var ii=a((Q6,Im)=>{Im.exports=Fo()});var _m=a((X6,km)=>{"use strict";yr();vr();var aN=Dn();km.exports=aN});var Rm=a((Z6,Pm)=>{"use strict";var oN=_m();gr();Pm.exports=oN});var Nm=a((eH,Am)=>{"use strict";var uN=Rm();Am.exports=uN});var jm=a((rH,Mm)=>{"use strict";var sN=Nm();Mm.exports=sN});var Lm=a((tH,$m)=>{"use strict";$m.exports=jm()});var ai=a((nH,Fm)=>{Fm.exports=Lm()});var Bm=a((iH,Dm)=>{"use strict";var cN=U(),lN=A(),fN=Rt(),pN=Un(),vN=X(),dN=lN([].concat);Dm.exports=cN("Reflect","ownKeys")||function(r){var t=fN.f(vN(r)),n=pN.f;return n?dN(t,n(r)):t}});var Wm=a((aH,Um)=>{"use strict";var Gm=W(),mN=Bm(),hN=ht(),yN=ne();Um.exports=function(e,r,t){for(var n=mN(r),i=yN.f,o=hN.f,u=0;u<n.length;u++){var l=n[u];!Gm(e,l)&&!(t&&Gm(t,l))&&i(e,l,o(r,l))}}});var Km=a((oH,Hm)=>{"use strict";var gN=$(),bN=Se();Hm.exports=function(e,r){gN(r)&&"cause"in r&&bN(e,"cause",r.cause)}});var Jm=a((uH,Ym)=>{"use strict";var qN=A(),zm=Error,xN=qN("".replace),SN=function(e){return String(new zm(e).stack)}("zxcasd"),Vm=/\n\s*at [^:]*:[^\n]*/,wN=Vm.test(SN);Ym.exports=function(e,r){if(wN&&typeof e=="string"&&!zm.prepareStackTrace)for(;r--;)e=xN(e,Vm,"");return e}});var Xm=a((sH,Qm)=>{"use strict";var TN=_(),ON=Ke();Qm.exports=!TN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",ON(1,7)),e.stack!==7):!0})});var rh=a((cH,eh)=>{"use strict";var CN=Se(),EN=Jm(),IN=Xm(),Zm=Error.captureStackTrace;eh.exports=function(e,r,t,n){IN&&(Zm?Zm(e,r):CN(e,"stack",EN(t,n)))}});var ve=a((lH,ah)=>{"use strict";var kN=z(),_N=D(),PN=X(),RN=ze(),AN=Xa(),NN=fe(),th=B(),MN=Dn(),jN=kt(),nh=Qa(),$N=TypeError,oi=function(e,r){this.stopped=e,this.result=r},ih=oi.prototype;ah.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=kN(r,n),s,f,p,d,v,h,m,y=function(b){return s&&nh(s,"normal"),new oi(!0,b)},q=function(b){return i?(PN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=jN(e),!f)throw new $N(RN(e)+" is not iterable");if(AN(f)){for(p=0,d=NN(e);d>p;p++)if(v=q(e[p]),v&&th(ih,v))return v;return new oi(!1)}s=MN(e,f)}for(h=o?e.next:s.next;!(m=_N(h,s)).done;){try{v=q(m.value)}catch(b){nh(s,"throw",b)}if(typeof v=="object"&&v&&th(ih,v))return v}return new oi(!1)}});var uh=a((fH,oh)=>{"use strict";var LN=Ve();oh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:LN(e)}});var ch=a(()=>{"use strict";var FN=x(),DN=B(),BN=Ot(),ui=Ct(),GN=Wm(),sh=Je(),Do=Se(),Bo=Ke(),UN=Km(),WN=rh(),HN=ve(),KN=uh(),zN=R(),VN=zN("toStringTag"),si=Error,YN=[].push,Qr=function(r,t){var n=DN(Go,this),i;ui?i=ui(new si,n?BN(this):Go):(i=n?this:sh(Go),Do(i,VN,"Error")),t!==void 0&&Do(i,"message",KN(t)),WN(i,Qr,i.stack,1),arguments.length>2&&UN(i,arguments[2]);var o=[];return HN(r,YN,{that:o}),Do(i,"errors",o),i};ui?ui(Qr,si):GN(Qr,si,{name:!0});var Go=Qr.prototype=sh(si.prototype,{constructor:Bo(1,Qr),message:Bo(1,""),name:Bo(1,"AggregateError")});FN({global:!0,constructor:!0,arity:2},{AggregateError:Qr})});var Uo=a(()=>{"use strict";ch()});var Wo=a((hH,lh)=>{"use strict";var Lt=P(),JN=jr(),QN=xe(),ci=function(e){return JN.slice(0,e.length)===e};lh.exports=function(){return ci("Bun/")?"BUN":ci("Cloudflare-Workers")?"CLOUDFLARE":ci("Deno/")?"DENO":ci("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":QN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var Ft=a((yH,fh)=>{"use strict";var XN=Wo();fh.exports=XN==="NODE"});var Ho=a((gH,vh)=>{"use strict";var ZN=U(),e2=Wn(),r2=R(),t2=G(),ph=r2("species");vh.exports=function(e){var r=ZN(e);t2&&r&&!r[ph]&&e2(r,ph,{configurable:!0,get:function(){return this}})}});var li=a((bH,dh)=>{"use strict";var n2=B(),i2=TypeError;dh.exports=function(e,r){if(n2(r,e))return e;throw new i2("Incorrect invocation")}});var Ko=a((qH,mh)=>{"use strict";var a2=xt(),o2=ze(),u2=TypeError;mh.exports=function(e){if(a2(e))return e;throw new u2(o2(e)+" is not a constructor")}});var zo=a((xH,yh)=>{"use strict";var hh=X(),s2=Ko(),c2=or(),l2=R(),f2=l2("species");yh.exports=function(e,r){var t=hh(e).constructor,n;return t===void 0||c2(n=hh(t)[f2])?r:s2(n)}});var bh=a((SH,gh)=>{"use strict";var p2=TypeError;gh.exports=function(e,r){if(e<r)throw new p2("Not enough arguments");return e}});var Vo=a((wH,qh)=>{"use strict";var v2=jr();qh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(v2)});var nu=a((TH,kh)=>{"use strict";var se=P(),d2=Mr(),m2=z(),xh=N(),h2=W(),Ih=_(),Sh=Da(),y2=lr(),wh=On(),g2=bh(),b2=Vo(),q2=Ft(),eu=se.setImmediate,ru=se.clearImmediate,x2=se.process,Yo=se.Dispatch,S2=se.Function,Th=se.MessageChannel,w2=se.String,Jo=0,Dt={},Oh="onreadystatechange",Bt,br,Qo,Xo;Ih(function(){Bt=se.location});var tu=function(e){if(h2(Dt,e)){var r=Dt[e];delete Dt[e],r()}},Zo=function(e){return function(){tu(e)}},Ch=function(e){tu(e.data)},Eh=function(e){se.postMessage(w2(e),Bt.protocol+"//"+Bt.host)};(!eu||!ru)&&(eu=function(r){g2(arguments.length,1);var t=xh(r)?r:S2(r),n=y2(arguments,1);return Dt[++Jo]=function(){d2(t,void 0,n)},br(Jo),Jo},ru=function(r){delete Dt[r]},q2?br=function(e){x2.nextTick(Zo(e))}:Yo&&Yo.now?br=function(e){Yo.now(Zo(e))}:Th&&!b2?(Qo=new Th,Xo=Qo.port2,Qo.port1.onmessage=Ch,br=m2(Xo.postMessage,Xo)):se.addEventListener&&xh(se.postMessage)&&!se.importScripts&&Bt&&Bt.protocol!=="file:"&&!Ih(Eh)?(br=Eh,se.addEventListener("message",Ch,!1)):Oh in wh("script")?br=function(e){Sh.appendChild(wh("script"))[Oh]=function(){Sh.removeChild(this),tu(e)}}:br=function(e){setTimeout(Zo(e),0)});kh.exports={set:eu,clear:ru}});var Rh=a((OH,Ph)=>{"use strict";var _h=P(),T2=G(),O2=Object.getOwnPropertyDescriptor;Ph.exports=function(e){if(!T2)return _h[e];var r=O2(_h,e);return r&&r.value}});var iu=a((CH,Nh)=>{"use strict";var Ah=function(){this.head=null,this.tail=null};Ah.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Nh.exports=Ah});var jh=a((EH,Mh)=>{"use strict";var C2=jr();Mh.exports=/ipad|iphone|ipod/i.test(C2)&&typeof Pebble<"u"});var Lh=a((IH,$h)=>{"use strict";var E2=jr();$h.exports=/web0s(?!.*chrome)/i.test(E2)});var Hh=a((kH,Wh)=>{"use strict";var Zr=P(),I2=Rh(),Fh=z(),au=nu().set,k2=iu(),_2=Vo(),P2=jh(),R2=Lh(),ou=Ft(),Dh=Zr.MutationObserver||Zr.WebKitMutationObserver,Bh=Zr.document,Gh=Zr.process,fi=Zr.Promise,cu=I2("queueMicrotask"),Xr,uu,su,pi,Uh;cu||(Gt=new k2,Ut=function(){var e,r;for(ou&&(e=Gh.domain)&&e.exit();r=Gt.get();)try{r()}catch(t){throw Gt.head&&Xr(),t}e&&e.enter()},!_2&&!ou&&!R2&&Dh&&Bh?(uu=!0,su=Bh.createTextNode(""),new Dh(Ut).observe(su,{characterData:!0}),Xr=function(){su.data=uu=!uu}):!P2&&fi&&fi.resolve?(pi=fi.resolve(void 0),pi.constructor=fi,Uh=Fh(pi.then,pi),Xr=function(){Uh(Ut)}):ou?Xr=function(){Gh.nextTick(Ut)}:(au=Fh(au,Zr),Xr=function(){au(Ut)}),cu=function(e){Gt.head||Xr(),Gt.add(e)});var Gt,Ut;Wh.exports=cu});var zh=a((_H,Kh)=>{"use strict";Kh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var qr=a((PH,Vh)=>{"use strict";Vh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var xr=a((RH,Yh)=>{"use strict";var A2=P();Yh.exports=A2.Promise});var et=a((AH,Zh)=>{"use strict";var N2=P(),Wt=xr(),M2=N(),j2=ha(),$2=wa(),L2=R(),Jh=Wo(),F2=ee(),lu=$r(),Qh=Wt&&Wt.prototype,D2=L2("species"),fu=!1,Xh=M2(N2.PromiseRejectionEvent),B2=j2("Promise",function(){var e=$2(Wt),r=e!==String(Wt);if(!r&&lu===66||F2&&!(Qh.catch&&Qh.finally))return!0;if(!lu||lu<51||!/native code/.test(e)){var t=new Wt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[D2]=n,fu=t.then(function(){})instanceof n,!fu)return!0}return!r&&(Jh==="BROWSER"||Jh==="DENO")&&!Xh});Zh.exports={CONSTRUCTOR:B2,REJECTION_EVENT:Xh,SUBCLASSING:fu}});var Te=a((NH,ry)=>{"use strict";var ey=F(),G2=TypeError,U2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new G2("Bad Promise constructor");r=n,t=i}),this.resolve=ey(r),this.reject=ey(t)};ry.exports.f=function(e){return new U2(e)}});var xy=a(()=>{"use strict";var W2=x(),H2=ee(),hi=Ft(),Ze=P(),K2=K(),it=D(),ty=_e(),ny=Ct(),z2=Re(),V2=Ho(),Y2=F(),mi=N(),J2=$(),Q2=li(),X2=zo(),sy=nu().set,hu=Hh(),Z2=zh(),eM=qr(),rM=iu(),cy=Ye(),yi=xr(),yu=et(),ly=Te(),gi="Promise",fy=yu.CONSTRUCTOR,tM=yu.REJECTION_EVENT,nM=yu.SUBCLASSING,pu=cy.getterFor(gi),iM=cy.set,rt=yi&&yi.prototype,Sr=yi,vi=rt,py=Ze.TypeError,vu=Ze.document,gu=Ze.process,du=ly.f,aM=du,oM=!!(vu&&vu.createEvent&&Ze.dispatchEvent),vy="unhandledrejection",uM="rejectionhandled",iy=0,dy=1,sM=2,bu=1,my=2,di,ay,hy,oy,yy=function(e){var r;return J2(e)&&mi(r=e.then)?r:!1},gy=function(e,r){var t=r.value,n=r.state===dy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===my&&lM(r),r.rejection=bu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new py("Promise-chain cycle")):(s=yy(c))?it(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},by=function(e,r){e.notified||(e.notified=!0,hu(function(){for(var t=e.reactions,n;n=t.get();)gy(n,e);e.notified=!1,r&&!e.rejection&&cM(e)}))},qy=function(e,r,t){var n,i;oM?(n=vu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!tM&&(i=Ze["on"+e])?i(n):e===vy&&Z2("Unhandled promise rejection",t)},cM=function(e){it(sy,Ze,function(){var r=e.facade,t=e.value,n=uy(e),i;if(n&&(i=eM(function(){hi?gu.emit("unhandledRejection",t,r):qy(vy,r,t)}),e.rejection=hi||uy(e)?my:bu,i.error))throw i.value})},uy=function(e){return e.rejection!==bu&&!e.parent},lM=function(e){it(sy,Ze,function(){var r=e.facade;hi?gu.emit("rejectionHandled",r):qy(uM,r,e.value)})},tt=function(e,r,t){return function(n){e(r,n,t)}},nt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=sM,by(e,!0))},mu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new py("Promise can't be resolved itself");var n=yy(r);n?hu(function(){var i={done:!1};try{it(n,r,tt(mu,i,e),tt(nt,i,e))}catch(o){nt(i,o,e)}}):(e.value=r,e.state=dy,by(e,!1))}catch(i){nt({done:!1},i,e)}}};if(fy&&(Sr=function(r){Q2(this,vi),Y2(r),it(di,this);var t=pu(this);try{r(tt(mu,t),tt(nt,t))}catch(n){nt(t,n)}},vi=Sr.prototype,di=function(r){iM(this,{type:gi,done:!1,notified:!1,parent:!1,reactions:new rM,rejection:!1,state:iy,value:null})},di.prototype=ty(vi,"then",function(r,t){var n=pu(this),i=du(X2(this,Sr));return n.parent=!0,i.ok=mi(r)?r:!0,i.fail=mi(t)&&t,i.domain=hi?gu.domain:void 0,n.state===iy?n.reactions.add(i):hu(function(){gy(i,n)}),i.promise}),ay=function(){var e=new di,r=pu(e);this.promise=e,this.resolve=tt(mu,r),this.reject=tt(nt,r)},ly.f=du=function(e){return e===Sr||e===hy?new ay(e):aM(e)},!H2&&mi(yi)&&rt!==Object.prototype)){oy=rt.then,nM||ty(rt,"then",function(r,t){var n=this;return new Sr(function(i,o){it(oy,n,i,o)}).then(r,t)},{unsafe:!0});try{delete rt.constructor}catch{}ny&&ny(rt,vi)}W2({global:!0,constructor:!0,wrap:!0,forced:fy},{Promise:Sr});hy=K2.Promise;z2(Sr,gi,!1,!0);V2(gi)});var Ht=a(($H,Sy)=>{"use strict";var fM=xr(),pM=eo(),vM=et().CONSTRUCTOR;Sy.exports=vM||!pM(function(e){fM.all(e).then(void 0,function(){})})});var wy=a(()=>{"use strict";var dM=x(),mM=D(),hM=F(),yM=Te(),gM=qr(),bM=ve(),qM=Ht();dM({target:"Promise",stat:!0,forced:qM},{all:function(r){var t=this,n=yM.f(t),i=n.resolve,o=n.reject,u=gM(function(){var l=hM(t.resolve),c=[],s=0,f=1;bM(r,function(p){var d=s++,v=!1;f++,mM(l,t,p).then(function(h){v||(v=!0,c[d]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Oy=a(()=>{"use strict";var xM=x(),SM=ee(),wM=et().CONSTRUCTOR,xu=xr(),TM=U(),OM=N(),CM=_e(),Ty=xu&&xu.prototype;xM({target:"Promise",proto:!0,forced:wM,real:!0},{catch:function(e){return this.then(void 0,e)}});!SM&&OM(xu)&&(qu=TM("Promise").prototype.catch,Ty.catch!==qu&&CM(Ty,"catch",qu,{unsafe:!0}));var qu});var Cy=a(()=>{"use strict";var EM=x(),IM=D(),kM=F(),_M=Te(),PM=qr(),RM=ve(),AM=Ht();EM({target:"Promise",stat:!0,forced:AM},{race:function(r){var t=this,n=_M.f(t),i=n.reject,o=PM(function(){var u=kM(t.resolve);RM(r,function(l){IM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Ey=a(()=>{"use strict";var NM=x(),MM=Te(),jM=et().CONSTRUCTOR;NM({target:"Promise",stat:!0,forced:jM},{reject:function(r){var t=MM.f(this),n=t.reject;return n(r),t.promise}})});var Su=a((KH,Iy)=>{"use strict";var $M=X(),LM=$(),FM=Te();Iy.exports=function(e,r){if($M(e),LM(r)&&r.constructor===e)return r;var t=FM.f(e),n=t.resolve;return n(r),t.promise}});var Py=a(()=>{"use strict";var DM=x(),BM=U(),ky=ee(),GM=xr(),_y=et().CONSTRUCTOR,UM=Su(),WM=BM("Promise"),HM=ky&&!_y;DM({target:"Promise",stat:!0,forced:ky||_y},{resolve:function(r){return UM(HM&&this===WM?GM:this,r)}})});var Ry=a(()=>{"use strict";xy();wy();Oy();Cy();Ey();Py()});var wu=a(()=>{"use strict";var KM=x(),zM=D(),VM=F(),YM=Te(),JM=qr(),QM=ve(),XM=Ht();KM({target:"Promise",stat:!0,forced:XM},{allSettled:function(r){var t=this,n=YM.f(t),i=n.resolve,o=n.reject,u=JM(function(){var l=VM(t.resolve),c=[],s=0,f=1;QM(r,function(p){var d=s++,v=!1;f++,zM(l,t,p).then(function(h){v||(v=!0,c[d]={status:"fulfilled",value:h},--f||i(c))},function(h){v||(v=!0,c[d]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Tu=a(()=>{"use strict";var ZM=x(),ej=D(),rj=F(),tj=U(),nj=Te(),ij=qr(),aj=ve(),oj=Ht(),Ay="No one promise resolved";ZM({target:"Promise",stat:!0,forced:oj},{any:function(r){var t=this,n=tj("AggregateError"),i=nj.f(t),o=i.resolve,u=i.reject,l=ij(function(){var c=rj(t.resolve),s=[],f=0,p=1,d=!1;aj(r,function(v){var h=f++,m=!1;p++,ej(c,t,v).then(function(y){m||d||(d=!0,o(y))},function(y){m||d||(m=!0,s[h]=y,--p||u(new n(s,Ay)))})}),--p||u(new n(s,Ay))});return l.error&&u(l.value),i.promise}})});var Cu=a(()=>{"use strict";var uj=x(),sj=P(),cj=Mr(),lj=lr(),fj=Te(),pj=F(),My=qr(),Ou=sj.Promise,Ny=!1,vj=!Ou||!Ou.try||My(function(){Ou.try(function(e){Ny=e===8},8)}).error||!Ny;uj({target:"Promise",stat:!0,forced:vj},{try:function(e){var r=arguments.length>1?lj(arguments,1):[],t=fj.f(this),n=My(function(){return cj(pj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Eu=a(()=>{"use strict";var dj=x(),mj=Te();dj({target:"Promise",stat:!0},{withResolvers:function(){var r=mj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Fy=a(()=>{"use strict";var hj=x(),yj=ee(),bi=xr(),gj=_(),$y=U(),Ly=N(),bj=zo(),jy=Su(),qj=_e(),ku=bi&&bi.prototype,xj=!!bi&&gj(function(){ku.finally.call({then:function(){}},function(){})});hj({target:"Promise",proto:!0,real:!0,forced:xj},{finally:function(e){var r=bj(this,$y("Promise")),t=Ly(e);return this.then(t?function(n){return jy(r,e()).then(function(){return n})}:e,t?function(n){return jy(r,e()).then(function(){throw n})}:e)}});!yj&&Ly(bi)&&(Iu=$y("Promise").prototype.finally,ku.finally!==Iu&&qj(ku,"finally",Iu,{unsafe:!0}));var Iu});var By=a((uK,Dy)=>{"use strict";Uo();yr();Pt();Ry();wu();Tu();Cu();Eu();Fy();vr();var Sj=K();Dy.exports=Sj.Promise});var Uy=a((sK,Gy)=>{"use strict";var wj=By();gr();Gy.exports=wj});var Wy=a(()=>{"use strict";Cu()});var Hy=a(()=>{"use strict";Eu()});var zy=a((vK,Ky)=>{"use strict";var Tj=Uy();Wy();Hy();Ky.exports=Tj});var Vy=a(()=>{"use strict";Uo()});var Yy=a(()=>{"use strict";wu()});var Jy=a(()=>{"use strict";Tu()});var Xy=a((qK,Qy)=>{"use strict";var Oj=zy();Vy();Yy();Jy();Qy.exports=Oj});var at=a((xK,Zy)=>{"use strict";Zy.exports=Xy()});var tg=a((CK,rg)=>{"use strict";Io();var Cj=zr();rg.exports=Cj.f("asyncIterator")});var ig=a((EK,ng)=>{"use strict";var Ej=tg();ng.exports=Ej});var og=a((IK,ag)=>{"use strict";var Ij=ig();ag.exports=Ij});var sg=a((kK,ug)=>{"use strict";var kj=og();ug.exports=kj});var qi=a((_K,cg)=>{"use strict";cg.exports=sg()});var vg=a(()=>{"use strict";var _j=x(),Pj=_(),Rj=te(),pg=Ot(),Aj=Wa(),Nj=Pj(function(){pg(1)});_j({target:"Object",stat:!0,forced:Nj,sham:!Aj},{getPrototypeOf:function(r){return pg(Rj(r))}})});var mg=a((MK,dg)=>{"use strict";vg();var Mj=K();dg.exports=Mj.Object.getPrototypeOf});var yg=a((jK,hg)=>{"use strict";var jj=mg();hg.exports=jj});var bg=a(($K,gg)=>{"use strict";var $j=yg();gg.exports=$j});var xg=a((LK,qg)=>{"use strict";var Lj=bg();qg.exports=Lj});var xi=a((FK,Sg)=>{"use strict";Sg.exports=xg()});var Tg=a(()=>{"use strict";var Fj=x(),Dj=A(),Bj=ke(),Gj=Dj([].reverse),wg=[1,2];Fj({target:"Array",proto:!0,forced:String(wg)===String(wg.reverse())},{reverse:function(){return Bj(this)&&(this.length=this.length),Gj(this)}})});var Cg=a((GK,Og)=>{"use strict";Tg();var Uj=ue();Og.exports=Uj("Array","reverse")});var Ig=a((UK,Eg)=>{"use strict";var Wj=B(),Hj=Cg(),Ru=Array.prototype;Eg.exports=function(e){var r=e.reverse;return e===Ru||Wj(Ru,e)&&r===Ru.reverse?Hj:r}});var _g=a((WK,kg)=>{"use strict";var Kj=Ig();kg.exports=Kj});var Rg=a((HK,Pg)=>{"use strict";var zj=_g();Pg.exports=zj});var Ng=a((KK,Ag)=>{"use strict";var Vj=Rg();Ag.exports=Vj});var jg=a((zK,Mg)=>{"use strict";Mg.exports=Ng()});var Au=a((VK,Vt)=>{function Yj(e,r){this.v=e,this.k=r}Vt.exports=Yj,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var $g=a(()=>{"use strict";var Jj=x(),Qj=G(),Xj=Je();Jj({target:"Object",stat:!0,sham:!Qj},{create:Xj})});var Fg=a((QK,Lg)=>{"use strict";$g();var Zj=K(),e$=Zj.Object;Lg.exports=function(r,t){return e$.create(r,t)}});var Bg=a((XK,Dg)=>{"use strict";var r$=Fg();Dg.exports=r$});var Ug=a((ZK,Gg)=>{"use strict";var t$=Bg();Gg.exports=t$});var Hg=a((ez,Wg)=>{"use strict";var n$=Ug();Wg.exports=n$});var Si=a((rz,Kg)=>{"use strict";Kg.exports=Hg()});var Mu=a((tz,Jg)=>{"use strict";var Vg=A(),i$=F(),a$=$(),o$=W(),zg=lr(),u$=Nr(),Yg=Function,s$=Vg([].concat),c$=Vg([].join),Nu={},l$=function(e,r,t){if(!o$(Nu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Nu[r]=Yg("C,a","return new C("+c$(n,",")+")")}return Nu[r](e,t)};Jg.exports=u$?Yg.bind:function(r){var t=i$(this),n=t.prototype,i=zg(arguments,1),o=function(){var l=s$(i,zg(arguments));return this instanceof o?l$(t,l.length,l):t.apply(r,l)};return a$(n)&&(o.prototype=n),o}});var Xg=a(()=>{"use strict";var f$=x(),Qg=Mu();f$({target:"Function",proto:!0,forced:Function.bind!==Qg},{bind:Qg})});var eb=a((az,Zg)=>{"use strict";Xg();var p$=ue();Zg.exports=p$("Function","bind")});var tb=a((oz,rb)=>{"use strict";var v$=B(),d$=eb(),ju=Function.prototype;rb.exports=function(e){var r=e.bind;return e===ju||v$(ju,e)&&r===ju.bind?d$:r}});var ib=a((uz,nb)=>{"use strict";var m$=tb();nb.exports=m$});var ob=a((sz,ab)=>{"use strict";var h$=ib();ab.exports=h$});var sb=a((cz,ub)=>{"use strict";var y$=ob();ub.exports=y$});var Yt=a((lz,cb)=>{"use strict";cb.exports=sb()});var lb=a(()=>{"use strict";var g$=x(),b$=Ct();g$({target:"Object",stat:!0},{setPrototypeOf:b$})});var pb=a((vz,fb)=>{"use strict";lb();var q$=K();fb.exports=q$.Object.setPrototypeOf});var db=a((dz,vb)=>{"use strict";var x$=pb();vb.exports=x$});var hb=a((mz,mb)=>{"use strict";var S$=db();mb.exports=S$});var gb=a((hz,yb)=>{"use strict";var w$=hb();yb.exports=w$});var wi=a((yz,bb)=>{"use strict";bb.exports=gb()});var xb=a(()=>{"use strict";var T$=x(),O$=G(),qb=ne().f;T$({target:"Object",stat:!0,forced:Object.defineProperty!==qb,sham:!O$},{defineProperty:qb})});var Tb=a((qz,wb)=>{"use strict";xb();var C$=K(),Sb=C$.Object,E$=wb.exports=function(r,t,n){return Sb.defineProperty(r,t,n)};Sb.defineProperty.sham&&(E$.sham=!0)});var Cb=a((xz,Ob)=>{"use strict";var I$=Tb();Ob.exports=I$});var Ib=a((Sz,Eb)=>{"use strict";var k$=Cb();Eb.exports=k$});var _b=a((wz,kb)=>{"use strict";var _$=Ib();kb.exports=_$});var Jt=a((Tz,Pb)=>{"use strict";Pb.exports=_b()});var $u=a((Oz,Ne)=>{var P$=Jt();function Ti(e,r,t,n){var i=P$;try{i({},"",{})}catch{i=0}Ne.exports=Ti=function(u,l,c,s){function f(p,d){Ti(u,p,function(v){return this._invoke(p,d,v)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,Ti(e,r,t,n)}Ne.exports=Ti,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Fu=a((Cz,Me)=>{var Rb=we(),Lu=Si(),R$=Yt(),A$=xi(),Ab=wi(),Ce=$u();function Nb(){var e,r,t=typeof Rb=="function"?Rb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(v,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=Lu(q.prototype);return Ce(b,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,re={p:0,n:0,v:e,a:qe,f:R$(qe).call(qe,e,4),d:function(L,de){return T=L,w=0,C=e,re.n=de,u}};function qe(Q,L){for(w=Q,C=L,r=0;!k&&j&&!de&&r<be.length;r++){var de,O=be[r],Rr=re.p,He=O[2];Q>3?(de=He===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Rr&&((de=Q<2&&Rr<O[1])?(w=0,re.v=L,re.n=O[1]):Rr<He&&(de=Q<3||O[0]>L||L>He)&&(O[4]=Q,O[5]=L,re.n=He,w=0))}if(de||Q>1)return u;throw k=!0,L}return function(Q,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(re.n=-1),qe(w,C)):re.n=C:re.v=C);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=re.n<0)?C:I.call(E,re))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(v,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=A$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=s.prototype=l.prototype=Lu(f);function d(v){return Ab?Ab(v,s):(v.__proto__=s,Ce(v,i,"GeneratorFunction")),v.prototype=Lu(p),v}return c.prototype=s,Ce(p,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(Me.exports=Nb=function(){return{w:o,m:d}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=Nb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Gu=a((Ez,Qt)=>{var N$=we(),M$=qi(),j$=Au(),Du=$u();function Bu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof j$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Du(Bu.prototype),Du(Bu.prototype,typeof N$=="function"&&M$||"@asyncIterator",function(){return this})),Du(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Qt.exports=Bu,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Uu=a((Iz,Xt)=>{var $$=at(),L$=Fu(),F$=Gu();function D$(e,r,t,n,i){return new F$(L$().w(e,r,t,n),i||$$)}Xt.exports=D$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Mb=a((kz,Zt)=>{var B$=Uu();function G$(e,r,t,n,i){var o=B$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Zt.exports=G$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Lb=a((_z,$b)=>{"use strict";var jb=ze(),U$=TypeError;$b.exports=function(e,r){if(!delete e[r])throw new U$("Cannot delete property "+jb(r)+" of "+jb(e))}});var Fb=a(()=>{"use strict";var W$=x(),H$=te(),K$=fe(),z$=Wr(),V$=Lb(),Y$=_t(),J$=[].unshift(0)!==1,Q$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},X$=J$||!Q$();W$({target:"Array",proto:!0,arity:1,forced:X$},{unshift:function(r){var t=H$(this),n=K$(t),i=arguments.length;if(i){Y$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:V$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return z$(t,n+i)}})});var Bb=a((Az,Db)=>{"use strict";Fb();var Z$=ue();Db.exports=Z$("Array","unshift")});var Ub=a((Nz,Gb)=>{"use strict";var eL=B(),rL=Bb(),Wu=Array.prototype;Gb.exports=function(e){var r=e.unshift;return e===Wu||eL(Wu,e)&&r===Wu.unshift?rL:r}});var Hb=a((Mz,Wb)=>{"use strict";var tL=Ub();Wb.exports=tL});var zb=a((jz,Kb)=>{"use strict";var nL=Hb();Kb.exports=nL});var Yb=a(($z,Vb)=>{"use strict";var iL=zb();Vb.exports=iL});var Qb=a((Lz,Jb)=>{"use strict";Jb.exports=Yb()});var Xb=a((Fz,en)=>{var aL=Qb();function oL(e){var r=Object(e),t=[];for(var n in r)aL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}en.exports=oL,en.exports.__esModule=!0,en.exports.default=en.exports});var eq=a((Dz,Zb)=>{"use strict";yr();Pt();vr();_o();var uL=zr();Zb.exports=uL.f("iterator")});var tq=a((Bz,rq)=>{"use strict";var sL=eq();gr();rq.exports=sL});var iq=a((Gz,nq)=>{"use strict";var cL=tq();nq.exports=cL});var oq=a((Uz,aq)=>{"use strict";var lL=iq();aq.exports=lL});var rn=a((Wz,uq)=>{"use strict";uq.exports=oq()});var sq=a((Hz,je)=>{var Oi=we(),fL=rn();function Hu(e){"@babel/helpers - typeof";return je.exports=Hu=typeof Oi=="function"&&typeof fL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Oi=="function"&&r.constructor===Oi&&r!==Oi.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Hu(e)}je.exports=Hu,je.exports.__esModule=!0,je.exports.default=je.exports});var cq=a((Kz,tn)=>{var pL=sq().default,vL=we(),dL=rn();function mL(e){if(e!=null){var r=e[typeof vL=="function"&&dL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(pL(e)+" is not iterable")}tn.exports=mL,tn.exports.__esModule=!0,tn.exports.default=tn.exports});var pq=a((zz,$e)=>{var lq=xi(),hL=jg(),yL=Au(),gL=Fu(),bL=Mb(),qL=Uu(),xL=Gu(),SL=Xb(),fq=cq();function Ku(){"use strict";var e=gL(),r=e.m(Ku),t=(lq?lq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,d){return c(s.a,i[p],d)},delegateYield:function(p,d,v){return l.resultName=d,c(s.d,fq(p),v)},finish:function(p){return c(s.f,p)}},c=function(p,d,v){s.p=l.prev,s.n=l.next;try{return p(d,v)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return($e.exports=Ku=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&hL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new yL(c,s)},AsyncIterator:xL,async:function(c,s,f,p,d){return(n(s)?qL:bL)(o(c),s,f,p,d)},keys:SL,values:fq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Ku,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var ce=a((Vz,vq)=>{var Ci=pq()();vq.exports=Ci;try{regeneratorRuntime=Ci}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ci:Function("r","regeneratorRuntime = r")(Ci)}});var zu=a((Ii,mq)=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});var Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ii.default=wL;function wL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=TL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function TL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=dq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):nn(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=dq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ei(w))==="object")return w.v}return typeof S=="function"?S(c):nn(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":Ei(w))==="object")return w.v}return typeof S=="function"?S(c):nn(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ei(w))==="object")return w.v}return typeof S=="function"?S(c):nn(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ei(w))==="object")return w.v}return typeof S=="function"?S(c):nn(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],d=parseInt(f[2],10)-1,v=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===d)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return v(b)&&q.push(b),q},[]):v(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function nn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}mq.exports=Ii.default});var _i=a(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.convertNodeList=OL;ki.escapeValue=CL;function OL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function CL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Oq=a((Pi,Tq)=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=EL;var bq=_i(),hq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function EL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,d=f.length,v=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(v=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,bq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),v&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(yq(l,p,s,f,n)||gq(p,s,f,n))break;yq(l,p,s,f),f.length===d&&gq(p,s,f),f.length===d&&IL(l,p,s,f)}p=p.parentNode,d=f.length}if(p===n){var y=Sq(l,p,s);f.unshift(y)}return f.join(" ")}function yq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=qq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function qq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,bq.escapeValue)(c.value),p=t[s]||t.attribute,d=hq[s]||hq.attribute;if(!wq(p,s,f,d)){var v="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(v="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");v="."+h}return v}}return null}function gq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=xq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function xq(e,r){var t=e.tagName.toLowerCase();return wq(r.tag,null,t)?null:t}function IL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=Sq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Sq(e,r,t){var n=qq(e,r,t);return n||(n=xq(r,t)),n}function wq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}Tq.exports=Pi.default});var Vu=a((Ai,Cq)=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default=AL;var kL=zu(),_L=RL(kL),PL=_i();function RL(e){return e&&e.__esModule?e:{default:e}}function AL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,PL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,_L.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ri("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Ri(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Ri("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ri(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ri(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(ot(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ot(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var d=r.replace(/>/,""),o=""+e+d+t,u=document.querySelectorAll(o);ot(u,n)&&(r=d)}if(/:nth-child/.test(r)){var v=r.replace(/nth-child/g,"nth-of-type"),o=""+e+v+t,u=document.querySelectorAll(o);ot(u,n)&&(r=v)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ot(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ot(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function ot(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}Cq.exports=Ai.default});var Yu=a(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.getCommonAncestor=NL;Ni.getCommonProperties=ML;function NL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,d){for(var v=[];p!==n;)p=p.parentNode,v.unshift(p);i[d]=v}),i.sort(function(p,d){return p.length-d.length});for(var o=i.shift(),u=null,l=function(){var d=o[c],v=i.some(function(h){return!h.some(function(m){return m===d})});if(v)return"break";u=d},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function ML(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(d,v){var h=c[v],m=h.name;return h&&m!=="class"&&(d[m]=h.value),d},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(d,v){var h=i[v];return h===s[v]&&(d[v]=h),d},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Rq=a(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});var jL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};an.getSingleSelector=Qu;an.getMultiSelector=Pq;an.default=GL;var $L=zu(),Iq=Ju($L),LL=Oq(),FL=Ju(LL),DL=Vu(),kq=Ju(DL),Eq=_i(),_q=Yu();function Ju(e){return e&&e.__esModule?e:{default:e}}function Qu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":jL(e))+'")');var t=(0,Iq.default)(e,r),n=(0,FL.default)(e,r),i=(0,kq.default)(n,e,r);return t&&delete global.document,i}function Pq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Eq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Iq.default)(e[0],r),n=(0,_q.getCommonAncestor)(e,r),i=Qu(n,r),o=BL(e),u=o[0],l=(0,kq.default)(i+" "+u,e,r),c=(0,Eq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function BL(e){var r=(0,_q.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function GL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Pq(e,r):Qu(e,r)}});var Mq=a(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Xu=Rq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Xu.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Xu.getMultiSelector}});var Aq=Nq(Xu),UL=Vu(),WL=Nq(UL),HL=Yu(),KL=zL(HL);function zL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Nq(e){return e&&e.__esModule?e:{default:e}}ae.select=Aq.default;ae.optimize=WL.default;ae.common=KL;ae.default=Aq.default});var jq=a(()=>{"use strict";var nF=x(),iF=ke();nF({target:"Array",stat:!0},{isArray:iF})});var Lq=a((fV,$q)=>{"use strict";jq();var aF=K();$q.exports=aF.Array.isArray});var Dq=a((pV,Fq)=>{"use strict";var oF=Lq();Fq.exports=oF});var Gq=a((vV,Bq)=>{"use strict";var uF=Dq();Bq.exports=uF});var Wq=a((dV,Uq)=>{"use strict";var sF=Gq();Uq.exports=sF});var Kq=a((mV,Hq)=>{"use strict";Hq.exports=Wq()});var Yq=a(()=>{"use strict";var cF=x(),lF=te(),fF=fe(),pF=Wr(),vF=_t(),dF=_(),mF=dF(function(){return[].push.call({length:4294967296},1)!==4294967297}),hF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},yF=mF||!hF();cF({target:"Array",proto:!0,arity:1,forced:yF},{push:function(r){var t=lF(this),n=fF(t),i=arguments.length;vF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return pF(t,n),n}})});var Qq=a((bV,Jq)=>{"use strict";Yq();var gF=ue();Jq.exports=gF("Array","push")});var Zq=a((qV,Xq)=>{"use strict";var bF=B(),qF=Qq(),Zu=Array.prototype;Xq.exports=function(e){var r=e.push;return e===Zu||bF(Zu,e)&&r===Zu.push?qF:r}});var rx=a((xV,ex)=>{"use strict";var xF=Zq();ex.exports=xF});var nx=a((SV,tx)=>{"use strict";var SF=rx();tx.exports=SF});var ax=a((wV,ix)=>{"use strict";var wF=nx();ix.exports=wF});var es=a((TV,ox)=>{"use strict";ox.exports=ax()});var yx=a(()=>{"use strict";var TF=x(),OF=At().map,CF=St(),EF=CF("map");TF({target:"Array",proto:!0,forced:!EF},{map:function(r){return OF(this,r,arguments.length>1?arguments[1]:void 0)}})});var bx=a((XV,gx)=>{"use strict";yx();var IF=ue();gx.exports=IF("Array","map")});var xx=a((ZV,qx)=>{"use strict";var kF=B(),_F=bx(),ts=Array.prototype;qx.exports=function(e){var r=e.map;return e===ts||kF(ts,e)&&r===ts.map?_F:r}});var wx=a((e7,Sx)=>{"use strict";var PF=xx();Sx.exports=PF});var Ox=a((r7,Tx)=>{"use strict";var RF=wx();Tx.exports=RF});var Ex=a((t7,Cx)=>{"use strict";var AF=Ox();Cx.exports=AF});var kx=a((n7,Ix)=>{"use strict";Ix.exports=Ex()});var Px=a((i7,_x)=>{_x.exports=kx()});var Ax=a((a7,Rx)=>{Rx.exports=at()});var Lx=a((o7,$x)=>{"use strict";var NF=F(),MF=te(),jF=xn(),$F=fe(),Nx=TypeError,Mx="Reduce of empty array with no initial value",jx=function(e){return function(r,t,n,i){var o=MF(r),u=jF(o),l=$F(o);if(NF(t),l===0&&n<2)throw new Nx(Mx);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Nx(Mx)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};$x.exports={left:jx(!1),right:jx(!0)}});var ns=a((u7,Fx)=>{"use strict";var LF=_();Fx.exports=function(e,r){var t=[][e];return!!t&&LF(function(){t.call(null,r||function(){return 1},1)})}});var Bx=a(()=>{"use strict";var FF=x(),DF=Lx().left,BF=ns(),Dx=$r(),GF=Ft(),UF=!GF&&Dx>79&&Dx<83,WF=UF||!BF("reduce");FF({target:"Array",proto:!0,forced:WF},{reduce:function(r){var t=arguments.length;return DF(this,r,t,t>1?arguments[1]:void 0)}})});var Ux=a((l7,Gx)=>{"use strict";Bx();var HF=ue();Gx.exports=HF("Array","reduce")});var Hx=a((f7,Wx)=>{"use strict";var KF=B(),zF=Ux(),is=Array.prototype;Wx.exports=function(e){var r=e.reduce;return e===is||KF(is,e)&&r===is.reduce?zF:r}});var zx=a((p7,Kx)=>{"use strict";var VF=Hx();Kx.exports=VF});var Yx=a((v7,Vx)=>{"use strict";var YF=zx();Vx.exports=YF});var Qx=a((d7,Jx)=>{"use strict";var JF=Yx();Jx.exports=JF});var Zx=a((m7,Xx)=>{"use strict";Xx.exports=Qx()});var rS=a((h7,eS)=>{eS.exports=Zx()});var iS=a((y7,nS)=>{"use strict";var QF=ke(),XF=fe(),ZF=_t(),eD=z(),rD=Ur(),tS=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?eD(u,l):!1,p,d;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&QF(p)?(d=XF(p),c=tS(e,r,p,d,c,o-1)-1):(ZF(c+1),rD(e,c,p)),c++),s++;return c};nS.exports=tS});var aS=a(()=>{"use strict";var tD=x(),nD=iS(),iD=F(),aD=te(),oD=fe(),uD=Gn();tD({target:"Array",proto:!0},{flatMap:function(r){var t=aD(this),n=oD(t),i;return iD(r),i=uD(t,0),nD(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var oS=a(()=>{"use strict";var sD=Ro();sD("flatMap")});var sS=a((S7,uS)=>{"use strict";aS();oS();var cD=ue();uS.exports=cD("Array","flatMap")});var lS=a((w7,cS)=>{"use strict";var lD=B(),fD=sS(),as=Array.prototype;cS.exports=function(e){var r=e.flatMap;return e===as||lD(as,e)&&r===as.flatMap?fD:r}});var pS=a((T7,fS)=>{"use strict";var pD=lS();fS.exports=pD});var dS=a((O7,vS)=>{"use strict";var vD=pS();vS.exports=vD});var hS=a((C7,mS)=>{"use strict";var dD=dS();mS.exports=dD});var gS=a((E7,yS)=>{"use strict";yS.exports=hS()});var qS=a((I7,bS)=>{bS.exports=gS()});var SS=a((k7,xS)=>{"use strict";to();var mD=ue();xS.exports=mD("Array","concat")});var TS=a((_7,wS)=>{"use strict";var hD=B(),yD=SS(),os=Array.prototype;wS.exports=function(e){var r=e.concat;return e===os||hD(os,e)&&r===os.concat?yD:r}});var CS=a((P7,OS)=>{"use strict";var gD=TS();OS.exports=gD});var IS=a((R7,ES)=>{"use strict";var bD=CS();ES.exports=bD});var _S=a((A7,kS)=>{"use strict";var qD=IS();kS.exports=qD});var RS=a((N7,PS)=>{"use strict";PS.exports=_S()});var us=a((M7,AS)=>{AS.exports=RS()});var jS=a(()=>{});var LS=a((i9,$S)=>{"use strict";jS();Po();var _D=zr();$S.exports=_D.f("toPrimitive")});var DS=a((a9,FS)=>{"use strict";var PD=LS();FS.exports=PD});var GS=a((o9,BS)=>{"use strict";var RD=DS();BS.exports=RD});var WS=a((u9,US)=>{"use strict";var AD=GS();US.exports=AD});var KS=a((s9,HS)=>{"use strict";HS.exports=WS()});var rw=a((k9,ew)=>{"use strict";var MD=$(),jD=xe(),$D=R(),LD=$D("match");ew.exports=function(e){var r;return MD(e)&&((r=e[LD])!==void 0?!!r:jD(e)==="RegExp")}});var nw=a((_9,tw)=>{"use strict";var FD=rw(),DD=TypeError;tw.exports=function(e){if(FD(e))throw new DD("The method doesn't accept regular expressions");return e}});var aw=a((P9,iw)=>{"use strict";var BD=R(),GD=BD("match");iw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[GD]=!1,"/./"[e](r)}catch{}}return!1}});var sw=a(()=>{"use strict";var UD=x(),WD=dt(),HD=ht().f,KD=Ca(),ow=Ve(),zD=nw(),VD=ur(),YD=aw(),JD=ee(),QD=WD("".slice),XD=Math.min,uw=YD("startsWith"),ZD=!JD&&!uw&&!!function(){var e=HD(String.prototype,"startsWith");return e&&!e.writable}();UD({target:"String",proto:!0,forced:!ZD&&!uw},{startsWith:function(r){var t=ow(VD(this));zD(r);var n=KD(XD(arguments.length>1?arguments[1]:void 0,t.length)),i=ow(r);return QD(t,n,n+i.length)===i}})});var lw=a((N9,cw)=>{"use strict";sw();var eB=ue();cw.exports=eB("String","startsWith")});var pw=a((M9,fw)=>{"use strict";var rB=B(),tB=lw(),fs=String.prototype;fw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===fs||rB(fs,e)&&r===fs.startsWith?tB:r}});var dw=a((j9,vw)=>{"use strict";var nB=pw();vw.exports=nB});var hw=a(($9,mw)=>{"use strict";var iB=dw();mw.exports=iB});var gw=a((L9,yw)=>{"use strict";var aB=hw();yw.exports=aB});var qw=a((F9,bw)=>{"use strict";bw.exports=gw()});var Sw=a((D9,xw)=>{xw.exports=qw()});var ww=a(()=>{"use strict";var oB=x(),uB=At().filter,sB=St(),cB=sB("filter");oB({target:"Array",proto:!0,forced:!cB},{filter:function(r){return uB(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ow=a((U9,Tw)=>{"use strict";ww();var lB=ue();Tw.exports=lB("Array","filter")});var Ew=a((W9,Cw)=>{"use strict";var fB=B(),pB=Ow(),ps=Array.prototype;Cw.exports=function(e){var r=e.filter;return e===ps||fB(ps,e)&&r===ps.filter?pB:r}});var kw=a((H9,Iw)=>{"use strict";var vB=Ew();Iw.exports=vB});var Pw=a((K9,_w)=>{"use strict";var dB=kw();_w.exports=dB});var Aw=a((z9,Rw)=>{"use strict";var mB=Pw();Rw.exports=mB});var Mw=a((V9,Nw)=>{"use strict";Nw.exports=Aw()});var $w=a((Y9,jw)=>{jw.exports=Mw()});var Zw=a(()=>{"use strict";var wB=x(),TB=U(),ds=Mr(),OB=Mu(),zw=Ko(),CB=X(),Vw=$(),EB=Je(),Jw=_(),ms=TB("Reflect","construct"),IB=Object.prototype,kB=[].push,Qw=Jw(function(){function e(){}return!(ms(function(){},[],e)instanceof e)}),Xw=!Jw(function(){ms(function(){})}),Yw=Qw||Xw;wB({target:"Reflect",stat:!0,forced:Yw,sham:Yw},{construct:function(r,t){zw(r),CB(t);var n=arguments.length<3?r:zw(arguments[2]);if(Xw&&!Qw)return ms(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ds(kB,i,t),new(ds(OB,r,i))}var o=n.prototype,u=EB(Vw(o)?o:IB),l=ds(r,u,t);return Vw(l)?l:u}})});var rT=a((kY,eT)=>{"use strict";Zw();var _B=K();eT.exports=_B.Reflect.construct});var nT=a((_Y,tT)=>{"use strict";var PB=rT();tT.exports=PB});var aT=a((PY,iT)=>{"use strict";var RB=nT();iT.exports=RB});var uT=a((RY,oT)=>{"use strict";var AB=aT();oT.exports=AB});var Bi=a((AY,sT)=>{"use strict";sT.exports=uT()});var lT=a((NY,cT)=>{cT.exports=Bi()});var bT=a((UY,gT)=>{"use strict";var NB=_();gT.exports=NB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var ST=a((WY,xT)=>{"use strict";var MB=_(),jB=$(),$B=xe(),qT=bT(),Gi=Object.isExtensible,LB=MB(function(){Gi(1)});xT.exports=LB||qT?function(r){return!jB(r)||qT&&$B(r)==="ArrayBuffer"?!1:Gi?Gi(r):!0}:Gi});var TT=a((HY,wT)=>{"use strict";var FB=_();wT.exports=!FB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ss=a((KY,ET)=>{"use strict";var DB=x(),BB=A(),GB=Kr(),UB=$(),bs=W(),WB=ne().f,OT=Rt(),HB=no(),qs=ST(),KB=Fr(),zB=TT(),CT=!1,De=KB("meta"),VB=0,xs=function(e){WB(e,De,{value:{objectID:"O"+VB++,weakData:{}}})},YB=function(e,r){if(!UB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!bs(e,De)){if(!qs(e))return"F";if(!r)return"E";xs(e)}return e[De].objectID},JB=function(e,r){if(!bs(e,De)){if(!qs(e))return!0;if(!r)return!1;xs(e)}return e[De].weakData},QB=function(e){return zB&&CT&&qs(e)&&!bs(e,De)&&xs(e),e},XB=function(){ZB.enable=function(){},CT=!0;var e=OT.f,r=BB([].splice),t={};t[De]=1,e(t).length&&(OT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===De){r(i,o,1);break}return i},DB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:HB.f}))},ZB=ET.exports={enable:XB,fastKey:YB,getWeakData:JB,onFreeze:QB};GB[De]=!0});var _T=a((zY,kT)=>{"use strict";var e3=x(),r3=P(),t3=Ss(),n3=_(),i3=Se(),a3=ve(),o3=li(),u3=N(),s3=$(),c3=or(),l3=Re(),f3=ne().f,p3=At().forEach,v3=G(),IT=Ye(),d3=IT.set,m3=IT.getterFor;kT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=r3[e],l=u&&u.prototype,c={},s;if(!v3||!u3(u)||!(i||l.forEach&&!n3(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),t3.enable();else{s=r(function(d,v){d3(o3(d,f),{type:e,collection:new u}),c3(v)||a3(v,d[o],{that:d,AS_ENTRIES:n})});var f=s.prototype,p=m3(e);p3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(d){var v=d==="add"||d==="set";d in l&&!(i&&d==="clear")&&i3(f,d,function(h,m){var y=p(this).collection;if(!v&&i&&!s3(h))return d==="get"?void 0:!1;var q=y[d](h===0?0:h,m);return v?this:q})}),i||f3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return l3(s,e,!1,!0),c[e]=s,e3({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var RT=a((VY,PT)=>{"use strict";var h3=_e();PT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:h3(e,n,r[n],t);return e}});var FT=a((YY,LT)=>{"use strict";var AT=Je(),y3=Wn(),NT=RT(),g3=z(),b3=li(),q3=or(),x3=ve(),S3=Ln(),Ui=Fn(),w3=Ho(),fn=G(),MT=Ss().fastKey,$T=Ye(),jT=$T.set,ws=$T.getterFor;LT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){b3(s,o),jT(s,{type:r,index:AT(null),first:null,last:null,size:0}),fn||(s.size=0),q3(f)||x3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=ws(r),l=function(s,f,p){var d=u(s),v=c(s,f),h,m;return v?v.value=p:(d.last=v={index:m=MT(f,!0),key:f,value:p,previous:h=d.last,next:null,removed:!1},d.first||(d.first=v),h&&(h.next=v),fn?d.size++:s.size++,m!=="F"&&(d.index[m]=v)),s},c=function(s,f){var p=u(s),d=MT(f),v;if(d!=="F")return p.index[d];for(v=p.first;v;v=v.next)if(v.key===f)return v};return NT(o,{clear:function(){for(var f=this,p=u(f),d=p.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=null),d=d.next;p.first=p.last=null,p.index=AT(null),fn?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),d=c(f,s);if(d){var v=d.next,h=d.previous;delete p.index[d.index],d.removed=!0,h&&(h.next=v),v&&(v.previous=h),p.first===d&&(p.first=v),p.last===d&&(p.last=h),fn?p.size--:f.size--}return!!d},forEach:function(f){for(var p=u(this),d=g3(f,arguments.length>1?arguments[1]:void 0),v;v=v?v.next:p.first;)for(d(v.value,v.key,this);v&&v.removed;)v=v.previous},has:function(f){return!!c(this,f)}}),NT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),fn&&y3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ws(r),o=ws(n);S3(e,r,function(u,l){jT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Ui(void 0,!0)):Ui(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),w3(r)}}});var DT=a(()=>{"use strict";var T3=_T(),O3=FT();T3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},O3)});var BT=a(()=>{"use strict";DT()});var UT=a((eJ,GT)=>{"use strict";GT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var oe=a((rJ,HT)=>{"use strict";var C3=U(),Wi=UT(),WT=C3("Map");HT.exports={Map:WT,set:Wi("set",2),get:Wi("get",1),has:Wi("has",1),remove:Wi("delete",1),proto:WT.prototype}});var Ts=a(()=>{"use strict";var E3=x(),I3=A(),k3=F(),_3=ur(),P3=ve(),Hi=oe(),KT=ee(),R3=_(),zT=Hi.Map,A3=Hi.has,N3=Hi.get,M3=Hi.set,j3=I3([].push),$3=KT||R3(function(){return zT.groupBy("ab",function(e){return e}).get("a").length!==1});E3({target:"Map",stat:!0,forced:KT||$3},{groupBy:function(r,t){_3(r),k3(t);var n=new zT,i=0;return P3(r,function(o){var u=t(o,i++);A3(n,u)?j3(N3(n,u),o):M3(n,u,[o])}),n}})});var V=a((iJ,VT)=>{"use strict";var L3=ze(),F3=TypeError;VT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new F3(L3(e)+" is not a map")}});var Cs=a(()=>{"use strict";var D3=x(),B3=V(),Os=oe(),G3=ee(),U3=Os.get,W3=Os.has,H3=Os.set;D3({target:"Map",proto:!0,real:!0,forced:G3},{getOrInsert:function(r,t){return W3(B3(this),r)?U3(this,r):(H3(this,r,t),t)}})});var Is=a(()=>{"use strict";var K3=x(),z3=F(),V3=V(),Es=oe(),Y3=ee(),J3=Es.get,Q3=Es.has,X3=Es.set;K3({target:"Map",proto:!0,real:!0,forced:Y3},{getOrInsertComputed:function(r,t){if(V3(this),z3(t),Q3(this,r))return J3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return X3(this,r,n),n}})});var JT=a((cJ,YT)=>{"use strict";yr();BT();Ts();Cs();Is();Pt();vr();var Z3=K();YT.exports=Z3.Map});var XT=a((lJ,QT)=>{"use strict";var e4=JT();gr();QT.exports=e4});var ks=a(()=>{"use strict";Cs()});var _s=a(()=>{"use strict";Is()});var ZT=a(()=>{"use strict";Ts()});var rO=a((yJ,eO)=>{"use strict";var r4=XT();ks();_s();ZT();eO.exports=r4});var nO=a((gJ,tO)=>{"use strict";var t4=z(),n4=X(),i4=te(),a4=ve();tO.exports=function(e,r,t){return function(i){var o=i4(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?t4(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return a4(o,function(d){var v=c?s(d,p++):d;t?r(f,n4(v)[0],v[1]):r(f,v)}),f}}});var aO=a(()=>{"use strict";var o4=x(),iO=oe(),u4=nO();o4({target:"Map",stat:!0,forced:!0},{from:u4(iO.Map,iO.set,!0)})});var uO=a((xJ,oO)=>{"use strict";var s4=X();oO.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,s4(l)[0],l[1]):r(i,l)}return i}}});var cO=a(()=>{"use strict";var c4=x(),sO=oe(),l4=uO();c4({target:"Map",stat:!0,forced:!0},{of:l4(sO.Map,sO.set,!0)})});var fO=a(()=>{"use strict";var f4=x(),p4=D(),v4=ve(),d4=N(),lO=F(),m4=oe().Map;f4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=d4(this)?this:m4,i=new n;lO(t);var o=lO(i.set);return v4(r,function(u){p4(o,i,t(u),u)}),i}})});var pO=a(()=>{"use strict";var h4=x(),y4=V(),g4=oe().remove;h4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=y4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=g4(r,arguments[i]),t=t&&n;return!!t}})});var dO=a(()=>{"use strict";var b4=x(),q4=V(),Ps=oe(),x4=Ps.get,S4=Ps.has,vO=Ps.set;b4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=q4(this),i,o;return S4(n,r)?(i=x4(n,r),"update"in t&&(i=t.update(i,r,n),vO(n,r,i)),i):(o=t.insert(r,n),vO(n,r,o),o)}})});var hO=a((_J,mO)=>{"use strict";var w4=D();mO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=w4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((PJ,yO)=>{"use strict";var T4=hO();yO.exports=function(e,r,t){return t?T4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var gO=a(()=>{"use strict";var O4=x(),C4=z(),E4=V(),I4=ye();O4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=E4(this),n=C4(r,arguments.length>1?arguments[1]:void 0);return I4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var qO=a(()=>{"use strict";var k4=x(),_4=z(),P4=V(),bO=oe(),R4=ye(),A4=bO.Map,N4=bO.set;k4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=P4(this),n=_4(r,arguments.length>1?arguments[1]:void 0),i=new A4;return R4(t,function(o,u){n(o,u,t)&&N4(i,u,o)}),i}})});var xO=a(()=>{"use strict";var M4=x(),j4=z(),$4=V(),L4=ye();M4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=$4(this),n=j4(r,arguments.length>1?arguments[1]:void 0),i=L4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var SO=a(()=>{"use strict";var F4=x(),D4=z(),B4=V(),G4=ye();F4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=B4(this),n=D4(r,arguments.length>1?arguments[1]:void 0),i=G4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var TO=a((DJ,wO)=>{"use strict";wO.exports=function(e,r){return e===r||e!==e&&r!==r}});var OO=a(()=>{"use strict";var U4=x(),W4=TO(),H4=V(),K4=ye();U4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return K4(H4(this),function(t){if(W4(t,r))return!0},!0)===!0}})});var CO=a(()=>{"use strict";var z4=x(),V4=V(),Y4=ye();z4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=Y4(V4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var IO=a(()=>{"use strict";var J4=x(),Q4=z(),X4=V(),EO=oe(),Z4=ye(),eG=EO.Map,rG=EO.set;J4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=X4(this),n=Q4(r,arguments.length>1?arguments[1]:void 0),i=new eG;return Z4(t,function(o,u){rG(i,n(o,u,t),o)}),i}})});var _O=a(()=>{"use strict";var tG=x(),nG=z(),iG=V(),kO=oe(),aG=ye(),oG=kO.Map,uG=kO.set;tG({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=iG(this),n=nG(r,arguments.length>1?arguments[1]:void 0),i=new oG;return aG(t,function(o,u){uG(i,u,n(o,u,t))}),i}})});var PO=a(()=>{"use strict";var sG=x(),cG=V(),lG=ve(),fG=oe().set;sG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=cG(this),n=arguments.length,i=0;i<n;)lG(arguments[i++],function(o,u){fG(t,o,u)},{AS_ENTRIES:!0});return t}})});var RO=a(()=>{"use strict";var pG=x(),vG=F(),dG=V(),mG=ye(),hG=TypeError;pG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=dG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(vG(r),mG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new hG("Reduce of empty map with no initial value");return i}})});var AO=a(()=>{"use strict";var yG=x(),gG=z(),bG=V(),qG=ye();yG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=bG(this),n=gG(r,arguments.length>1?arguments[1]:void 0);return qG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var MO=a(()=>{"use strict";var xG=x(),NO=F(),SG=V(),Rs=oe(),wG=TypeError,TG=Rs.get,OG=Rs.has,CG=Rs.set;xG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=SG(this),i=arguments.length;NO(t);var o=OG(n,r);if(!o&&i<3)throw new wG("Updating absent value");var u=o?TG(n,r):NO(i>2?arguments[2]:void 0)(r,n);return CG(n,r,t(u,r,n)),n}})});var Ns=a((nQ,jO)=>{"use strict";var Ki=D(),As=F(),zi=N(),EG=X(),IG=TypeError;jO.exports=function(r,t){var n=EG(this),i=As(n.get),o=As(n.has),u=As(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!zi(t)&&!zi(l))throw new IG("At least one callback required");return Ki(o,n,r)?(c=Ki(i,n,r),zi(t)&&(c=t(c),Ki(u,n,r,c))):zi(l)&&(c=l(),Ki(u,n,r,c)),c}});var $O=a(()=>{"use strict";var kG=x(),_G=Ns();kG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:_G})});var LO=a(()=>{"use strict";var PG=x(),RG=Ns();PG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:RG})});var DO=a((sQ,FO)=>{"use strict";var AG=rO();aO();cO();fO();pO();dO();gO();qO();xO();SO();OO();ks();_s();CO();IO();_O();PO();RO();AO();MO();$O();LO();FO.exports=AG});var GO=a((cQ,BO)=>{"use strict";BO.exports=DO()});var WO=a(()=>{"use strict";var NG=x(),MG=dt(),jG=ja().indexOf,$G=ns(),Ms=MG([].indexOf),UO=!!Ms&&1/Ms([1],1,-0)<0,LG=UO||!$G("indexOf");NG({target:"Array",proto:!0,forced:LG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return UO?Ms(this,r,t)||0:jG(this,r,t)}})});var KO=a((pQ,HO)=>{"use strict";WO();var FG=ue();HO.exports=FG("Array","indexOf")});var VO=a((vQ,zO)=>{"use strict";var DG=B(),BG=KO(),js=Array.prototype;zO.exports=function(e){var r=e.indexOf;return e===js||DG(js,e)&&r===js.indexOf?BG:r}});var JO=a((dQ,YO)=>{"use strict";var GG=VO();YO.exports=GG});var XO=a((mQ,QO)=>{"use strict";var UG=JO();QO.exports=UG});var eC=a((hQ,ZO)=>{"use strict";var WG=XO();ZO.exports=WG});var tC=a((yQ,rC)=>{"use strict";rC.exports=eC()});var bC=a(()=>{"use strict";var JG=x(),QG=te(),gC=An(),XG=_(),ZG=XG(function(){gC(1)});JG({target:"Object",stat:!0,forced:ZG},{keys:function(r){return gC(QG(r))}})});var xC=a((SX,qC)=>{"use strict";bC();var eU=K();qC.exports=eU.Object.keys});var wC=a((wX,SC)=>{"use strict";var rU=xC();SC.exports=rU});var OC=a((TX,TC)=>{"use strict";var tU=wC();TC.exports=tU});var EC=a((OX,CC)=>{"use strict";var nU=OC();CC.exports=nU});var kC=a((CX,IC)=>{"use strict";IC.exports=EC()});var PC=a((EX,_C)=>{_C.exports=kC()});var Ar="";function rc(e){Ar=e.replace(/\/+$/,"")}async function pt(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function tc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ar}/comments?${t}`);return await pt(n,"Failed to fetch comments"),(await n.json()).data}async function ea({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${Ar}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await pt(s,"Failed to create comment"),s.json()}async function nc(e,{body:r}){let t=await fetch(`${Ar}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await pt(t,"Failed to update comment"),t.json()}async function ic(e,r){let t=await fetch(`${Ar}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await pt(t,"Failed to update comment status"),t.json()}async function ac(e){let r=await fetch(`${Ar}/comments/${e}`,{method:"DELETE"});await pt(r,"Failed to delete comment")}var JL=g(Hr(),1),QL=g(Bn(),1),XL=g(ni(),1),ZL=g(ii(),1),eF=g(ai(),1);var _u=g(at(),1);function eg(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):_u.default.resolve(c).then(n,i)}function wr(e){return function(){var r=this,t=arguments;return new _u.default(function(n,i){var o=e.apply(r,t);function u(c){eg(o,n,i,u,l,"next",c)}function l(c){eg(o,n,i,u,l,"throw",c)}u(void 0)})}}function Kt(e,r){this.v=e,this.k=r}function er(e){return new Kt(e,0)}var Pu=g(at(),1),lg=g(we(),1),fg=g(qi(),1);function Oe(e){return function(){return new zt(e.apply(this,arguments))}}function zt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Kt;Pu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Pu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}zt.prototype[typeof lg.default=="function"&&fg.default||"@@asyncIterator"]=function(){return this},zt.prototype.next=function(e){return this._invoke("next",e)},zt.prototype.throw=function(e){return this._invoke("throw",e)},zt.prototype.return=function(e){return this._invoke("return",e)};var rF=g(ce(),1),tF=g(Mq(),1);function le(e){var r,t=VL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function VL(e){return"startContainer"in e}function tr(e){if(YL(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function YL(e){return"startContainer"in e}var zq=g(Kq(),1);function Vq(e){if((0,zq.default)(e))return e}var ux=g(we(),1),sx=g(Fo(),1),cx=g(es(),1);function lx(e,r){var t=e==null?null:typeof ux.default<"u"&&(0,sx.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,cx.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var fx=g(ka(),1),px=g(ro(),1);function Mi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function rs(e,r){if(e){var t;if(typeof e=="string")return Mi(e,r);var n=(0,fx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,px.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Mi(e,r):void 0}}function vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return Vq(e)||lx(e,r)||rs(e,r)||vx()}var dx=g(we(),1),mx=g(qi(),1),hx=g(rn(),1),on=g(at(),1);function ut(e){var r,t,n,i=2;for(typeof dx.default<"u"&&(t=mx.default,n=hx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ji(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ji(e){function r(t){if(Object(t)!==t)return on.default.reject(new TypeError(t+" is not an object."));var n=t.done;return on.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return ji=function(n){this.s=n,this.n=n.next},ji.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?on.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?on.default.reject(n):r(i.apply(this.s,arguments))}},new ji(e)}var kD=g(ce(),1);var wD=g(ce(),1),TD=g(Px(),1),OD=g(Ax(),1),CD=g(rS(),1),ED=g(qS(),1),ID=g(us(),1);var Fs=g(ce(),1);var SB=g(ce(),1);var cs=g(ce(),1);function un(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function NS(e,r){return un(e.startChunk,r.startChunk)&&un(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Tr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ss=g(Jt(),1);var sn=g(we(),1),MS=g(rn(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof sn.default=="function"&&typeof MS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof sn.default=="function"&&r.constructor===sn.default&&r!==sn.default.prototype?"symbol":typeof r},Fe(e)}var zS=g(KS(),1);function VS(e,r){if(Fe(e)!="object"||!e)return e;var t=e[zS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $i(e){var r=VS(e,"string");return Fe(r)=="symbol"?r:r+""}function YS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ss.default)(e,$i(n.key),n)}}function cn(e,r,t){return r&&YS(e.prototype,r),t&&YS(e,t),(0,ss.default)(e,"prototype",{writable:!1}),e}var JS=g(Jt(),1);function Or(e,r,t){return(r=$i(r))in e?(0,JS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var QS=g(Hr(),1);var Li="Iterator exhausted before seek ended.",ln=function(){function e(r){Tr(this,e),this.chunker=r,Or(this,"currentChunkPosition",0),Or(this,"offsetInChunk",0),this.seekTo(0)}return cn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!un(this.currentChunk,n);){var p=this._readToPreviousChunk(),d=Le(p,2),v=d[0],h=d[1];if(t&&(u=v+u),h===null)throw new RangeError(Li)}else for(;!un(this.currentChunk,n);){var l=this._readToNextChunk(),c=Le(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Li)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,QS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Le(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Li)}}else{var d=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,d)),this.offsetInChunk=d,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var v=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(v,this.offsetInChunk)+u),this.offsetInChunk=v;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Li)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function ZS(e,r){return ls.apply(this,arguments)}function ls(){return ls=wr(cs.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,d,v,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return cs.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new ln(t()),p=new ln(t()),f.seekToChunk(r.startChunk,r.startIndex),d=f.readToChunk(r.endChunk,r.endIndex),v="",h="",m=function(){return v.length+d.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),y=Math.floor((l-m())/2),v=f.read(-y,!1,!0)+v,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),b=l-m(),v=f.read(-b,!1,!0)+v))),o||(f.seekToChunk(r.startChunk,r.startIndex-v.length),v=Fi(f,s,!0)+v,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Fi(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:d,prefix:v,suffix:h},E=Di(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&NS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-v.length),p.seekToChunk(T.startChunk,T.startIndex-v.length),w=XS(f,p,!0),w!==void 0&&!o&&(w=Fi(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=XS(f,p,!1),C!==void 0&&!o&&(C=C+Fi(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}v=w+v,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(v=w+v),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ls.apply(this,arguments)}function XS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Fi(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(ND(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function ND(e){return/^\s+$/.test(e)}var Dw=g(Hr(),1),Bw=g(Bn(),1),Gw=g(ni(),1),Uw=g(ii(),1),Ww=g(ai(),1);var vs=g(ce(),1),Hw=g(Sw(),1),Kw=g($w(),1);function Lw(e,r){var t;if(typeof Gw.default>"u"||(0,Uw.default)(e)==null){if(Array.isArray(e)||(t=hB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Ww.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function hB(e,r){var t;if(e){if(typeof e=="string")return Fw(e,r);var n=(0,Dw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Bw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fw(e,r)}}function Fw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Di(e){return function(){var r=Oe(vs.default.mark(function n(i){var o,u,l,c,s,f,p,d,v,h,m,y,q,b,I,E,S,T,w,C,j,be,k,re,qe,Q,L;return vs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,d=p.data,v=[],h=Lw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=d.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<d.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=d.length)){O.next=24;break}if(!(0,Hw.default)(d).call(d,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:d===c.substring(q,q+d.length)&&(y.charactersMatched+=d.length,v.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=v,!(c.length<=d.length)){O.next=49;break}S=0;case 38:if(!(S<=d.length)){O.next=49;break}if(T=d.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(d.length-c.length+1,0),j=function(He){var Zs=d[He];w=(0,Kw.default)(w).call(w,function(sE){return Zs===c[He-sE]}),Zs===c[0]&&w.push(He)},be=C;be<d.length;be++)j(be);k=Lw(w);try{for(k.s();!(re=k.n()).done;)qe=re.value,Q=d.length-qe,L={charactersMatched:Q},Q>=u.length+o.length&&(L.endChunk=p,L.endIndex=qe+u.length+o.length),(Q>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=qe+u.length),s.push(L)}catch(Rr){k.e(Rr)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var qB=g(ce(),1);var yB=g(Hr(),1),gB=g(us(),1);var xB=g(ce(),1);var vn=g(lT(),1);var pT=g(Si(),1),vT=g(Jt(),1);var hs=g(wi(),1),fT=g(Yt(),1);function nr(e,r){var t;return nr=hs.default?(0,fT.default)(t=hs.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function ys(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,pT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,vT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function dT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dT(e)}var hT=g(wi(),1),yT=g(Yt(),1),gs=g(xi(),1);function Cr(e){var r;return Cr=hT.default?(0,yT.default)(r=gs.default).call(r):function(t){return t.__proto__||(0,gs.default)(t)},Cr(e)}var Ls=g(GO(),1),lC=g(Si(),1);var nC=g(tC(),1);function iC(e){try{var r;return(0,nC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var oC=g(Bi(),1),uC=g(es(),1),sC=g(Yt(),1);var aC=g(Bi(),1);function $s(){try{var e=!Boolean.prototype.valueOf.call((0,aC.default)(Boolean,[],function(){}))}catch{}return($s=function(){return!!e})()}function cC(e,r,t){if($s())return oC.default.apply(null,arguments);var n=[null];(0,uC.default)(n).apply(n,r);var i=new((0,sC.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function pn(e){var r=typeof Ls.default=="function"?new Ls.default:void 0;return pn=function(n){if(n===null||!iC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return cC(n,arguments,Cr(this).constructor)}return i.prototype=(0,lC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},pn(e)}function vC(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(v){return!r||r.intersectsNode(v)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=fC(e.startContainer,e.startOffset),o=Le(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=fC(e.endContainer,e.endOffset),s=Le(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function fC(e,r){var t;if(pC(e))return[e,r];var n;if(HG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(pC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function pC(e){return e.nodeType===Node.TEXT_NODE}function HG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function mC(e){var r=KG();return function(){var n=Cr(e),i;if(r){var o=Cr(this).constructor;i=(0,vn.default)(n,arguments,o)}else i=n.apply(this,arguments);return mT(this,i)}}function KG(){if(typeof Reflect>"u"||!vn.default||vn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,vn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Vi=function(e){ys(t,e);var r=mC(t);function t(n){return Tr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(pn(TypeError)),zG=function(e){ys(t,e);var r=mC(t);function t(n){return Tr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(pn(TypeError)),Er=function(){function e(r){var t=this;if(Tr(this,e),Or(this,"scope",void 0),Or(this,"iter",void 0),this.scope=tr(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!dC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Vi}}return cn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!dC(t))throw new Vi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new zG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=vC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function dC(e){return e.nodeType===Node.TEXT_NODE}function hC(e,r){return Ds.apply(this,arguments)}function Ds(){return Ds=wr(Fs.default.mark(function e(r,t){var n,i,o,u=arguments;return Fs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??le(r)),o=new Er(i),c.next=5,ZS(o.rangeToChunkRange(r),function(){return new Er(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ds.apply(this,arguments)}var Bs=g(ce(),1);function yC(e){var r=Di(e);return function(){var t=Oe(Bs.default.mark(function i(o){var u,l,c,s,f,p,d,v;return Bs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Er(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Vi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=ut(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,l=p.done,m.next=21,er(p.value);case 21:if(d=m.sent,l){m.next=29;break}return v=d,m.next=26,u.chunkRangeToRange(v);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var VG=g(ce(),1);var YG=g(ce(),1);var iU=g(PC(),1),aU=g(Hr(),1),oU=g(Bn(),1),uU=g(ni(),1),sU=g(ii(),1),cU=g(ai(),1);async function RC(e,r){let t=await hC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Yi(e,r){let t=yC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var st="fb-highlight",AC="fb-highlight-active";var dn=null;function MC(e){dn=e}function Ji(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=NC(e,r);t.push(n)}else{let n=fU(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(NC(u,r))}}return t}function NC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return lU(e,r,o);let u=document.createElement("mark");u.className=st,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{dn&&dn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function lU(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",st),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let v=new Set,h=d;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(v.add(h),h.querySelectorAll("tspan").forEach(q=>v.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),dn&&dn(r)};return v.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Gs(e){document.querySelectorAll(`.${st}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function jC(){document.querySelectorAll(`.${st}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Qi(e){document.querySelectorAll(`.${st}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(AC):r.classList.remove(AC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function $C(e){let r=document.querySelector(`.${st}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function fU(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function LC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function FC(e,r){let t=LC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Be(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var pU=`
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
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid #e5e7eb;
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
    background: #7c3aed;
    color: white;
  }
  .hf-btn-primary:hover { background: #6d28d9; }

  .hf-btn-secondary {
    background: #f3f4f6;
    color: #374151;
  }
  .hf-btn-secondary:hover { background: #e5e7eb; }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: #eff6ff; color: #1e40af; }
  .hf-status-success { background: #f0fdf4; color: #166534; }
  .hf-status-error { background: #fef2f2; color: #991b1b; }
`,DC=null,BC=null;function GC(e,r){BC=e,DC=r,vU()}function vU(){let e=document.createElement("style");e.textContent=pU,document.head.appendChild(e)}function UC(){let e=DC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(BC.contentSelector||"body").innerHTML,c=FC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Be(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function WC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function HC(e,r){return e.length>r?e.slice(0,r)+"...":e}function KC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var mn=null;function VC(e){mn=document.createElement("div"),mn.className="fb-toast-container",e.appendChild(mn)}function Ir(e,r="success"){if(!mn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>zC(t)),t.appendChild(o)}mn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>zC(t),r==="error"?8e3:4e3)}function zC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function YC({scrollTop:e,viewportHeight:r,itemHeights:t,buffer:n=5}){let i=t.length;if(i===0)return{startIndex:0,endIndex:0,offsetBefore:0,offsetAfter:0};let o=0,u=i;for(let v=0;v<i;v++){if(o+t[v]>e){u=v;break}o+=t[v]}let l=i,c=o;for(let v=u;v<i;v++){if(c>=e+r){l=v;break}c+=t[v]}let s=Math.max(0,u-n),f=Math.min(i,l+n),p=0;for(let v=0;v<s;v++)p+=t[v];let d=0;for(let v=f;v<i;v++)d+=t[v];return{startIndex:s,endIndex:f,offsetBefore:p,offsetAfter:d}}function JC(e,r){let t=0,n=Math.min(e,r.length);for(let i=0;i<n;i++)t+=r[i];return t}var dU=320,XC="feedback-layer-commenter",mU=80,ZC=8,hU=5,Y=null,Z=null,Ge=null,Us=null,eE=null,Hs=null,Ks=null,zs=null,Vs=null,Ys=!1,rE=[],tE=new Set,nE=new Map,ir=[],kr=[],hn=new Map,_r=null,yn=null,ct=null,Ws=null,Ue=null,Js=null,Qs=0;function lt(){return localStorage.getItem(XC)||""}function iE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){eE=e,Hs=r,Ks=t,zs=n,Vs=i,SU(),Y=document.createElement("div"),Y.className="fb-sidebar fb-sidebar-collapsed",Y.innerHTML=`
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
               value="${Be(lt())}">
      </div>
      <div class="fb-filter-section">
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>gn()),document.body.appendChild(o),document.body.appendChild(Y),VC(Y),Z=Y.querySelector(".fb-comment-list"),Ge=Y.querySelector(".fb-form-section"),_r=Y.querySelector(".fb-sidebar-content"),_r.addEventListener("scroll",gU);let u=Y.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(XC,u.value.trim())}),Y.querySelector(".fb-ai-btn").addEventListener("click",()=>UC()),Y.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>yU());let s=Y.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ys=s.checked,ar(rE,tE,nE)})}function gn(){Y.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function yU(){Y.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function aE(e){if(gn(),!lt()){let n=Y.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Us=e,Ge.style.display="",Ge.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Be(HC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ge.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!lt()){let i=Y.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(eE({comment:n,commenter:lt()}),Ge.style.display="none",Us=null)};Ge.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ge.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ge.style.display="none",Us=null}),Ge.scrollIntoView({behavior:"smooth",block:"nearest"})}function ar(e,r=new Set,t=new Map){rE=e,tE=r,t.size>0&&(nE=t),hn.clear();let{topLevel:n,repliesByParent:i}=WC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),d=t.get(f.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Ys}),l=Ys?u:u.filter(s=>s.status!=="closed");if(o.length===0){ir=[],Z.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){ir=[],c>0?Z.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Z.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}ir=l.map(s=>({parent:s,replies:i.get(s.id)||[]})),kr=ir.map(s=>hn.has(s.parent.id)?hn.get(s.parent.id):(1+s.replies.length)*mU+ZC),Z.innerHTML="",yn=document.createElement("div"),yn.className="fb-vs-spacer",ct=document.createElement("div"),ct.className="fb-vs-spacer",Z.appendChild(yn),Z.appendChild(ct),Qs=Z.offsetTop-_r.offsetTop,Ue=null,Xs()}function gU(){Ws||(Ws=requestAnimationFrame(()=>{Ws=null,Xs()}))}function Xs(){if(ir.length===0||!_r)return;let e=Math.max(0,_r.scrollTop-Qs),r=_r.clientHeight,{startIndex:t,endIndex:n,offsetBefore:i,offsetAfter:o}=YC({scrollTop:e,viewportHeight:r,itemHeights:kr,buffer:hU});if(Ue&&Ue.startIndex===t&&Ue.endIndex===n)return;for(Ue={startIndex:t,endIndex:n};Z.children.length>2;)Z.removeChild(Z.children[1]);yn.style.height=i+"px",ct.style.height=o+"px";let u=document.createDocumentFragment();for(let l=t;l<n;l++){let{parent:c,replies:s}=ir[l],f=document.createElement("div");f.className="fb-thread",f.dataset.threadIndex=l,f.appendChild(QC(c,!1));for(let d of s)f.appendChild(QC(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),qU(c.id,f,p)}),f.appendChild(p),u.appendChild(f)}Z.insertBefore(u,ct),bU()}function bU(){let e=Z.querySelectorAll(".fb-thread"),r=!1;for(let t of e){let n=parseInt(t.dataset.threadIndex,10),i=ir[n];if(!i)continue;let o=t.offsetHeight+ZC;hn.get(i.parent.id)!==o&&(hn.set(i.parent.id,o),kr[n]=o,r=!0)}if(r&&Ue){let t=0;for(let i=0;i<Ue.startIndex;i++)t+=kr[i];let n=0;for(let i=Ue.endIndex;i<kr.length;i++)n+=kr[i];yn.style.height=t+"px",ct.style.height=n+"px"}}function QC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,Js===e.id&&n.classList.add("fb-cmt-active"),n.innerHTML=`
    <div class="fb-cmt-body">${Be(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Be(e.author)}</span>
      <span class="fb-cmt-time">${KC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Qi(e.id),$C(e.id),Js=e.id,Z.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ks&&Ks(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),xU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Hs&&Hs(e.id)}),n}function qU(e,r,t){gn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!lt()){let c=Y.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(zs&&zs({parent_id:e,comment:l,commenter:lt()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function xU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${Be(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=Be(n)})}function oE(e){let r=ir.findIndex(n=>n.parent.id===e||n.replies.some(i=>i.id===e));if(r!==-1){let n=JC(r,kr);_r.scrollTop=n+Qs,Ue=null,Xs()}Js=e;let t=Z.querySelector(`.fb-cmt-card[data-id="${e}"]`);t&&(Z.querySelectorAll(".fb-cmt-card").forEach(n=>n.classList.remove("fb-cmt-active")),t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"}))}function SU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${dU}px;
      height: 100vh;
      background: #fafafa;
      border-left: 1px solid #e0e0e0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px rgba(0,0,0,0.08);
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
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px rgba(0,0,0,0.15);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: #6d28d9;
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
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
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
      color: #7c3aed;
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: #f3f0ff;
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
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
      color: #666;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .fb-name-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
    }
    .fb-name-section {
      margin-bottom: 16px;
    }
    .fb-comment-list {
      display: flex;
      flex-direction: column;
    }
    .fb-vs-spacer {
      flex-shrink: 0;
    }
    .fb-empty {
      color: #999;
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: #c4b5fd;
    }
    .fb-cmt-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-cmt-body {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-cmt-body code {
      background: #f3f4f6;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
    }
    .fb-cmt-body a {
      color: #7c3aed;
      text-decoration: underline;
    }
    .fb-cmt-body a:hover {
      color: #6d28d9;
    }
    .fb-cmt-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: #999;
    }
    .fb-cmt-author {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: #16a34a;
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: #7c3aed;
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: #ef4444;
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: #16a34a;
    }
    .fb-filter-section {
      margin-bottom: 12px;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #888;
      cursor: pointer;
    }
    .fb-filter-toggle input {
      cursor: pointer;
    }
    .fb-thread {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 8px;
    }
    .fb-cmt-reply {
      margin-left: 20px;
      border-left: 2px solid #e5e7eb;
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
      color: #7c3aed;
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
      background: #fff;
      border: 1px solid #d1d5db;
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
      background: #fff;
      border: 2px solid #7c3aed;
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: #7c3aed;
    }
    .fb-fmt-hints {
      font-size: 11px;
      color: #aaa;
      margin-top: 4px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
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
      background: #7c3aed;
      color: white;
    }
    .fb-btn-primary:hover { background: #6d28d9; }
    .fb-btn-cancel {
      background: #f3f4f6;
      color: #555;
    }
    .fb-btn-cancel:hover { background: #e5e7eb; }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4), 0 2px 4px rgba(0,0,0,0.1);
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
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #7c3aed;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }
    .fb-annotate-tooltip:hover {
      background: #6d28d9;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5), 0 2px 6px rgba(0,0,0,0.15);
    }
    .fb-annotate-tooltip:hover::after {
      border-top-color: #6d28d9;
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(-4px);
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
  `,document.head.appendChild(e)}var ft=null,Xi=null,Zi=null,J=[],Pr=null,Ee=null,ge=new Set,We=new Map;function wU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};rc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ft=document.querySelector(r.contentSelector)||document.body,Xi=r.documentUri||window.location.origin+window.location.pathname,Zi=r.documentId||null,iE({onSubmit:IU,onDelete:RU,onResolve:kU,onReply:_U,onEdit:PU}),MC(i=>{gn(),oE(i),Qi(i)}),CU(),await t(),TU(),GC(r,()=>J)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function TU(){try{J=await tc(Xi,Zi),ge=await OU(J),ar(J,ge,We)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}async function OU(e){jC();let r=new Set;We.clear();for(let t of e)if(!t.parent)try{let n=await Yi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ft);n&&t.status!=="closed"?(Ji(n,t.id),r.add(t.id),We.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),We.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function CU(){document.addEventListener("mouseup",uE),document.addEventListener("keyup",uE)}function uE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){bn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){bn();return}if(!ft.contains(r.commonAncestorContainer)){bn();return}EU(r)},10)}function EU(e){bn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Pr=await RC(i,ft),aE(Pr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}bn()}),document.body.appendChild(Ee)}function bn(){Ee&&(Ee.remove(),Ee=null)}async function IU({comment:e,commenter:r}){if(Pr){try{let t=await ea({uri:Xi,document:Zi,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});J.push(t);let n=await Yi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ft);n&&(Ji(n,t.id),ge.add(t.id)),ar(J,ge,We),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function kU(e,r){try{let n=await ic(e,r?"closed":"open"),i=J.findIndex(o=>o.id===e);if(i!==-1&&(J[i]=n),r)Gs(e);else{let o=n,u=await Yi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ft);u?(Ji(u,o.id),ge.add(o.id)):ge.delete(o.id)}ar(J,ge,We)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function _U({parent_id:e,comment:r,commenter:t}){try{let n=await ea({uri:Xi,document:Zi,body:r,author:t,parent:e});J.push(n),ar(J,ge,We)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function PU(e,r){try{let t=await nc(e,{body:r}),n=J.findIndex(i=>i.id===e);n!==-1&&(J[n]=t),ar(J,ge,We)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function RU(e){try{await ac(e),Gs(e),ge.delete(e),J=J.filter(r=>r.id!==e&&r.parent!==e),ar(J,ge,We)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{wU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
