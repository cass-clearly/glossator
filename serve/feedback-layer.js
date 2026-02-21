var FeedbackLayer=(()=>{var uE=Object.create;var Xs=Object.defineProperty;var sE=Object.getOwnPropertyDescriptor;var cE=Object.getOwnPropertyNames;var lE=Object.getPrototypeOf,fE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var pE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of cE(r))!fE.call(e,i)&&i!==t&&Xs(e,i,{get:()=>r[i],enumerable:!(n=sE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?uE(lE(e)):{},pE(r||!e||!e.__esModule?Xs(t,"default",{value:e,enumerable:!0}):t,e));var P=a(($5,ic)=>{"use strict";ic.exports=function(e){try{return!!e()}catch{return!0}}});var Ar=a((L5,ac)=>{"use strict";var vE=P();ac.exports=!vE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((F5,sc)=>{"use strict";var oc=Ar(),uc=Function.prototype,ra=uc.call,dE=oc&&uc.bind.bind(ra,ra);sc.exports=oc?dE:function(e){return function(){return ra.apply(e,arguments)}}});var G=a((D5,cc)=>{"use strict";var mE=A();cc.exports=mE({}.isPrototypeOf)});var _=a((ta,lc)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};lc.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof ta=="object"&&ta)||function(){return this}()||Function("return this")()});var Nr=a((B5,dc)=>{"use strict";var hE=Ar(),vc=Function.prototype,fc=vc.apply,pc=vc.call;dc.exports=typeof Reflect=="object"&&Reflect.apply||(hE?pc.bind(fc):function(){return pc.apply(fc,arguments)})});var Se=a((G5,hc)=>{"use strict";var mc=A(),yE=mc({}.toString),gE=mc("".slice);hc.exports=function(e){return gE(yE(e),8,-1)}});var vt=a((U5,yc)=>{"use strict";var bE=Se(),qE=A();yc.exports=function(e){if(bE(e)==="Function")return qE(e)}});var N=a((H5,gc)=>{"use strict";var na=typeof document=="object"&&document.all;gc.exports=typeof na>"u"&&na!==void 0?function(e){return typeof e=="function"||e===na}:function(e){return typeof e=="function"}});var U=a((W5,bc)=>{"use strict";var xE=P();bc.exports=!xE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=a((K5,qc)=>{"use strict";var wE=Ar(),qn=Function.prototype.call;qc.exports=wE?qn.bind(qn):function(){return qn.apply(qn,arguments)}});var ia=a(Sc=>{"use strict";var xc={}.propertyIsEnumerable,wc=Object.getOwnPropertyDescriptor,SE=wc&&!xc.call({1:2},1);Sc.f=SE?function(r){var t=wc(this,r);return!!t&&t.enumerable}:xc});var ze=a((V5,Tc)=>{"use strict";Tc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var xn=a((Y5,Oc)=>{"use strict";var TE=A(),OE=P(),CE=Se(),aa=Object,EE=TE("".split);Oc.exports=OE(function(){return!aa("z").propertyIsEnumerable(0)})?function(e){return CE(e)==="String"?EE(e,""):aa(e)}:aa});var ur=a((J5,Cc)=>{"use strict";Cc.exports=function(e){return e==null}});var sr=a((Q5,Ec)=>{"use strict";var kE=ur(),IE=TypeError;Ec.exports=function(e){if(kE(e))throw new IE("Can't call method on "+e);return e}});var Pe=a((X5,kc)=>{"use strict";var PE=xn(),_E=sr();kc.exports=function(e){return PE(_E(e))}});var L=a((Z5,Ic)=>{"use strict";var RE=N();Ic.exports=function(e){return typeof e=="object"?e!==null:RE(e)}});var z=a((eU,Pc)=>{"use strict";Pc.exports={}});var H=a((rU,Rc)=>{"use strict";var oa=z(),ua=_(),AE=N(),_c=function(e){return AE(e)?e:void 0};Rc.exports=function(e,r){return arguments.length<2?_c(oa[e])||_c(ua[e]):oa[e]&&oa[e][r]||ua[e]&&ua[e][r]}});var Mr=a((tU,Mc)=>{"use strict";var NE=_(),Ac=NE.navigator,Nc=Ac&&Ac.userAgent;Mc.exports=Nc?String(Nc):""});var jr=a((nU,Bc)=>{"use strict";var Dc=_(),sa=Mr(),jc=Dc.process,$c=Dc.Deno,Lc=jc&&jc.versions||$c&&$c.version,Fc=Lc&&Lc.v8,he,wn;Fc&&(he=Fc.split("."),wn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!wn&&sa&&(he=sa.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=sa.match(/Chrome\/(\d+)/),he&&(wn=+he[1])));Bc.exports=wn});var cr=a((iU,Uc)=>{"use strict";var Gc=jr(),ME=P(),jE=_(),$E=jE.String;Uc.exports=!!Object.getOwnPropertySymbols&&!ME(function(){var e=Symbol("symbol detection");return!$E(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Gc&&Gc<41})});var ca=a((aU,Hc)=>{"use strict";var LE=cr();Hc.exports=LE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var $r=a((oU,Wc)=>{"use strict";var FE=H(),DE=N(),BE=G(),GE=ca(),UE=Object;Wc.exports=GE?function(e){return typeof e=="symbol"}:function(e){var r=FE("Symbol");return DE(r)&&BE(r.prototype,UE(e))}});var Ve=a((uU,Kc)=>{"use strict";var HE=String;Kc.exports=function(e){try{return HE(e)}catch{return"Object"}}});var D=a((sU,zc)=>{"use strict";var WE=N(),KE=Ve(),zE=TypeError;zc.exports=function(e){if(WE(e))return e;throw new zE(KE(e)+" is not a function")}});var Sn=a((cU,Vc)=>{"use strict";var VE=D(),YE=ur();Vc.exports=function(e,r){var t=e[r];return YE(t)?void 0:VE(t)}});var Jc=a((lU,Yc)=>{"use strict";var la=B(),fa=N(),pa=L(),JE=TypeError;Yc.exports=function(e,r){var t,n;if(r==="string"&&fa(t=e.toString)&&!pa(n=la(t,e))||fa(t=e.valueOf)&&!pa(n=la(t,e))||r!=="string"&&fa(t=e.toString)&&!pa(n=la(t,e)))return n;throw new JE("Can't convert object to primitive value")}});var ee=a((fU,Qc)=>{"use strict";Qc.exports=!0});var el=a((pU,Zc)=>{"use strict";var Xc=_(),QE=Object.defineProperty;Zc.exports=function(e,r){try{QE(Xc,e,{value:r,configurable:!0,writable:!0})}catch{Xc[e]=r}return r}});var dt=a((vU,nl)=>{"use strict";var XE=ee(),ZE=_(),e0=el(),rl="__core-js_shared__",tl=nl.exports=ZE[rl]||e0(rl,{});(tl.versions||(tl.versions=[])).push({version:"3.48.0",mode:XE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var lr=a((dU,al)=>{"use strict";var il=dt();al.exports=function(e,r){return il[e]||(il[e]=r||{})}});var te=a((mU,ol)=>{"use strict";var r0=sr(),t0=Object;ol.exports=function(e){return t0(r0(e))}});var W=a((hU,ul)=>{"use strict";var n0=A(),i0=te(),a0=n0({}.hasOwnProperty);ul.exports=Object.hasOwn||function(r,t){return a0(i0(r),t)}});var Lr=a((yU,sl)=>{"use strict";var o0=A(),u0=0,s0=Math.random(),c0=o0(1.1.toString);sl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+c0(++u0+s0,36)}});var R=a((gU,ll)=>{"use strict";var l0=_(),f0=lr(),cl=W(),p0=Lr(),v0=cr(),d0=ca(),Fr=l0.Symbol,va=f0("wks"),m0=d0?Fr.for||Fr:Fr&&Fr.withoutSetter||p0;ll.exports=function(e){return cl(va,e)||(va[e]=v0&&cl(Fr,e)?Fr[e]:m0("Symbol."+e)),va[e]}});var dl=a((bU,vl)=>{"use strict";var h0=B(),fl=L(),pl=$r(),y0=Sn(),g0=Jc(),b0=R(),q0=TypeError,x0=b0("toPrimitive");vl.exports=function(e,r){if(!fl(e)||pl(e))return e;var t=y0(e,x0),n;if(t){if(r===void 0&&(r="default"),n=h0(t,e,r),!fl(n)||pl(n))return n;throw new q0("Can't convert object to primitive value")}return r===void 0&&(r="number"),g0(e,r)}});var Tn=a((qU,ml)=>{"use strict";var w0=dl(),S0=$r();ml.exports=function(e){var r=w0(e,"string");return S0(r)?r:r+""}});var On=a((xU,yl)=>{"use strict";var T0=_(),hl=L(),da=T0.document,O0=hl(da)&&hl(da.createElement);yl.exports=function(e){return O0?da.createElement(e):{}}});var ma=a((wU,gl)=>{"use strict";var C0=U(),E0=P(),k0=On();gl.exports=!C0&&!E0(function(){return Object.defineProperty(k0("div"),"a",{get:function(){return 7}}).a!==7})});var mt=a(ql=>{"use strict";var I0=U(),P0=B(),_0=ia(),R0=ze(),A0=Pe(),N0=Tn(),M0=W(),j0=ma(),bl=Object.getOwnPropertyDescriptor;ql.f=I0?bl:function(r,t){if(r=A0(r),t=N0(t),j0)try{return bl(r,t)}catch{}if(M0(r,t))return R0(!P0(_0.f,r,t),r[t])}});var ha=a((TU,xl)=>{"use strict";var $0=P(),L0=N(),F0=/#|\.prototype\./,ht=function(e,r){var t=B0[D0(e)];return t===U0?!0:t===G0?!1:L0(r)?$0(r):!!r},D0=ht.normalize=function(e){return String(e).replace(F0,".").toLowerCase()},B0=ht.data={},G0=ht.NATIVE="N",U0=ht.POLYFILL="P";xl.exports=ht});var V=a((OU,Sl)=>{"use strict";var wl=vt(),H0=D(),W0=Ar(),K0=wl(wl.bind);Sl.exports=function(e,r){return H0(e),r===void 0?e:W0?K0(e,r):function(){return e.apply(r,arguments)}}});var ya=a((CU,Tl)=>{"use strict";var z0=U(),V0=P();Tl.exports=z0&&V0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((EU,Ol)=>{"use strict";var Y0=L(),J0=String,Q0=TypeError;Ol.exports=function(e){if(Y0(e))return e;throw new Q0(J0(e)+" is not an object")}});var ne=a(El=>{"use strict";var X0=U(),Z0=ma(),ek=ya(),Cn=Q(),Cl=Tn(),rk=TypeError,ga=Object.defineProperty,tk=Object.getOwnPropertyDescriptor,ba="enumerable",qa="configurable",xa="writable";El.f=X0?ek?function(r,t,n){if(Cn(r),t=Cl(t),Cn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&xa in n&&!n[xa]){var i=tk(r,t);i&&i[xa]&&(r[t]=n.value,n={configurable:qa in n?n[qa]:i[qa],enumerable:ba in n?n[ba]:i[ba],writable:!1})}return ga(r,t,n)}:ga:function(r,t,n){if(Cn(r),t=Cl(t),Cn(n),Z0)try{return ga(r,t,n)}catch{}if("get"in n||"set"in n)throw new rk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Te=a((IU,kl)=>{"use strict";var nk=U(),ik=ne(),ak=ze();kl.exports=nk?function(e,r,t){return ik.f(e,r,ak(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((PU,Pl)=>{"use strict";var yt=_(),ok=Nr(),uk=vt(),sk=N(),ck=mt().f,lk=ha(),Dr=z(),fk=V(),Br=Te(),Il=W();dt();var pk=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return ok(e,this,arguments)};return r.prototype=e.prototype,r};Pl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?yt:i?yt[t]:yt[t]&&yt[t].prototype,l=n?Dr:Dr[t]||Br(Dr,t,{})[t],s=l.prototype,c,f,p,v,d,h,m,y,q;for(v in r)c=lk(n?v:t+(i?".":"#")+v,e.forced),f=!c&&u&&Il(u,v),h=l[v],f&&(e.dontCallGetSet?(q=ck(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!c&&!o&&typeof h==typeof d)&&(e.bind&&f?y=fk(d,yt):e.wrap&&f?y=pk(d):o&&sk(d)?y=uk(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Br(y,"sham",!0),Br(l,v,y),o&&(p=t+"Prototype",Il(Dr,p)||Br(Dr,p,{}),Br(Dr[p],v,d),e.real&&s&&(c||!s[v])&&Br(s,v,d)))}});var _e=a((_U,_l)=>{"use strict";var vk=Se();_l.exports=Array.isArray||function(r){return vk(r)==="Array"}});var En=a((RU,Al)=>{"use strict";var dk=R(),mk=dk("toStringTag"),Rl={};Rl[mk]="z";Al.exports=String(Rl)==="[object z]"});var gt=a((AU,Nl)=>{"use strict";var hk=En(),yk=N(),kn=Se(),gk=R(),bk=gk("toStringTag"),qk=Object,xk=kn(function(){return arguments}())==="Arguments",wk=function(e,r){try{return e[r]}catch{}};Nl.exports=hk?kn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=wk(r=qk(e),bk))=="string"?t:xk?kn(r):(n=kn(r))==="Object"&&yk(r.callee)?"Arguments":n}});var Sa=a((NU,Ml)=>{"use strict";var Sk=A(),Tk=N(),wa=dt(),Ok=Sk(Function.toString);Tk(wa.inspectSource)||(wa.inspectSource=function(e){return Ok(e)});Ml.exports=wa.inspectSource});var qt=a((MU,Dl)=>{"use strict";var Ck=A(),Ek=P(),jl=N(),kk=gt(),Ik=H(),Pk=Sa(),$l=function(){},Ll=Ik("Reflect","construct"),Ta=/^\s*(?:class|function)\b/,_k=Ck(Ta.exec),Rk=!Ta.test($l),bt=function(r){if(!jl(r))return!1;try{return Ll($l,[],r),!0}catch{return!1}},Fl=function(r){if(!jl(r))return!1;switch(kk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Rk||!!_k(Ta,Pk(r))}catch{return!0}};Fl.sham=!0;Dl.exports=!Ll||Ek(function(){var e;return bt(bt.call)||!bt(Object)||!bt(function(){e=!0})||e})?Fl:bt});var Gl=a((jU,Bl)=>{"use strict";var Ak=Math.ceil,Nk=Math.floor;Bl.exports=Math.trunc||function(r){var t=+r;return(t>0?Nk:Ak)(t)}});var In=a(($U,Ul)=>{"use strict";var Mk=Gl();Ul.exports=function(e){var r=+e;return r!==r||r===0?0:Mk(r)}});var Oa=a((LU,Hl)=>{"use strict";var jk=In(),$k=Math.max,Lk=Math.min;Hl.exports=function(e,r){var t=jk(e);return t<0?$k(t+r,0):Lk(t,r)}});var Ca=a((FU,Wl)=>{"use strict";var Fk=In(),Dk=Math.min;Wl.exports=function(e){var r=Fk(e);return r>0?Dk(r,9007199254740991):0}});var pe=a((DU,Kl)=>{"use strict";var Bk=Ca();Kl.exports=function(e){return Bk(e.length)}});var Gr=a((BU,zl)=>{"use strict";var Gk=U(),Uk=ne(),Hk=ze();zl.exports=function(e,r,t){Gk?Uk.f(e,r,Hk(0,t)):e[r]=t}});var Ur=a((GU,Vl)=>{"use strict";var Wk=U(),Kk=_e(),zk=TypeError,Vk=Object.getOwnPropertyDescriptor,Yk=Wk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Vl.exports=Yk?function(e,r){if(Kk(e)&&!Vk(e,"length").writable)throw new zk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=a((UU,Yl)=>{"use strict";var Jk=P(),Qk=R(),Xk=jr(),Zk=Qk("species");Yl.exports=function(e){return Xk>=51||!Jk(function(){var r=[],t=r.constructor={};return t[Zk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var fr=a((HU,Jl)=>{"use strict";var eI=A();Jl.exports=eI([].slice)});var Zl=a(()=>{"use strict";var rI=x(),Ql=_e(),tI=qt(),nI=L(),Xl=Oa(),iI=pe(),aI=Pe(),oI=Gr(),uI=Ur(),sI=R(),cI=xt(),lI=fr(),fI=cI("slice"),pI=sI("species"),Ea=Array,vI=Math.max;rI({target:"Array",proto:!0,forced:!fI},{slice:function(r,t){var n=aI(this),i=iI(n),o=Xl(r,i),u=Xl(t===void 0?i:t,i),l,s,c;if(Ql(n)&&(l=n.constructor,tI(l)&&(l===Ea||Ql(l.prototype))?l=void 0:nI(l)&&(l=l[pI],l===null&&(l=void 0)),l===Ea||l===void 0))return lI(n,o,u);for(s=new(l===void 0?Ea:l)(vI(u-o,0)),c=0;o<u;o++,c++)o in n&&oI(s,c,n[o]);return uI(s,c),s}})});var ue=a((zU,ef)=>{"use strict";var dI=_(),mI=z();ef.exports=function(e,r){var t=mI[e+"Prototype"],n=t&&t[r];if(n)return n;var i=dI[e],o=i&&i.prototype;return o&&o[r]}});var tf=a((VU,rf)=>{"use strict";Zl();var hI=ue();rf.exports=hI("Array","slice")});var af=a((YU,nf)=>{"use strict";var yI=G(),gI=tf(),ka=Array.prototype;nf.exports=function(e){var r=e.slice;return e===ka||yI(ka,e)&&r===ka.slice?gI:r}});var uf=a((JU,of)=>{"use strict";var bI=af();of.exports=bI});var cf=a((QU,sf)=>{"use strict";var qI=uf();sf.exports=qI});var ff=a((XU,lf)=>{"use strict";var xI=cf();lf.exports=xI});var Ia=a((ZU,pf)=>{"use strict";pf.exports=ff()});var Hr=a((e8,vf)=>{vf.exports=Ia()});var Ye=a((r8,df)=>{"use strict";var wI=gt(),SI=String;df.exports=function(e){if(wI(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return SI(e)}});var gf=a((t8,yf)=>{"use strict";var Pa=A(),TI=In(),OI=Ye(),CI=sr(),EI=Pa("".charAt),mf=Pa("".charCodeAt),kI=Pa("".slice),hf=function(e){return function(r,t){var n=OI(CI(r)),i=TI(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=mf(n,i),u<55296||u>56319||i+1===o||(l=mf(n,i+1))<56320||l>57343?e?EI(n,i):u:e?kI(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};yf.exports={codeAt:hf(!1),charAt:hf(!0)}});var xf=a((n8,qf)=>{"use strict";var II=_(),PI=N(),bf=II.WeakMap;qf.exports=PI(bf)&&/native code/.test(String(bf))});var wt=a((i8,Sf)=>{"use strict";var _I=lr(),RI=Lr(),wf=_I("keys");Sf.exports=function(e){return wf[e]||(wf[e]=RI(e))}});var Wr=a((a8,Tf)=>{"use strict";Tf.exports={}});var Je=a((o8,Ef)=>{"use strict";var AI=xf(),Cf=_(),NI=L(),MI=Te(),_a=W(),Ra=dt(),jI=wt(),$I=Wr(),Of="Object already initialized",Aa=Cf.TypeError,LI=Cf.WeakMap,Pn,St,_n,FI=function(e){return _n(e)?St(e):Pn(e,{})},DI=function(e){return function(r){var t;if(!NI(r)||(t=St(r)).type!==e)throw new Aa("Incompatible receiver, "+e+" required");return t}};AI||Ra.state?(ye=Ra.state||(Ra.state=new LI),ye.get=ye.get,ye.has=ye.has,ye.set=ye.set,Pn=function(e,r){if(ye.has(e))throw new Aa(Of);return r.facade=e,ye.set(e,r),r},St=function(e){return ye.get(e)||{}},_n=function(e){return ye.has(e)}):(pr=jI("state"),$I[pr]=!0,Pn=function(e,r){if(_a(e,pr))throw new Aa(Of);return r.facade=e,MI(e,pr,r),r},St=function(e){return _a(e,pr)?e[pr]:{}},_n=function(e){return _a(e,pr)});var ye,pr;Ef.exports={set:Pn,get:St,has:_n,enforce:FI,getterFor:DI}});var Pf=a((u8,If)=>{"use strict";var Na=U(),BI=W(),kf=Function.prototype,GI=Na&&Object.getOwnPropertyDescriptor,Ma=BI(kf,"name"),UI=Ma&&function(){}.name==="something",HI=Ma&&(!Na||Na&&GI(kf,"name").configurable);If.exports={EXISTS:Ma,PROPER:UI,CONFIGURABLE:HI}});var ja=a((s8,Rf)=>{"use strict";var WI=Pe(),KI=Oa(),zI=pe(),_f=function(e){return function(r,t,n){var i=WI(r),o=zI(i);if(o===0)return!e&&-1;var u=KI(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Rf.exports={includes:_f(!0),indexOf:_f(!1)}});var La=a((c8,Nf)=>{"use strict";var VI=A(),$a=W(),YI=Pe(),JI=ja().indexOf,QI=Wr(),Af=VI([].push);Nf.exports=function(e,r){var t=YI(e),n=0,i=[],o;for(o in t)!$a(QI,o)&&$a(t,o)&&Af(i,o);for(;r.length>n;)$a(t,o=r[n++])&&(~JI(i,o)||Af(i,o));return i}});var Rn=a((l8,Mf)=>{"use strict";Mf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var An=a((f8,jf)=>{"use strict";var XI=La(),ZI=Rn();jf.exports=Object.keys||function(r){return XI(r,ZI)}});var Fa=a($f=>{"use strict";var e1=U(),r1=ya(),t1=ne(),n1=Q(),i1=Pe(),a1=An();$f.f=e1&&!r1?Object.defineProperties:function(r,t){n1(r);for(var n=i1(t),i=a1(t),o=i.length,u=0,l;o>u;)t1.f(r,l=i[u++],n[l]);return r}});var Da=a((v8,Lf)=>{"use strict";var o1=H();Lf.exports=o1("document","documentElement")});var Qe=a((d8,Wf)=>{"use strict";var u1=Q(),s1=Fa(),Ff=Rn(),c1=Wr(),l1=Da(),f1=On(),p1=wt(),Df=">",Bf="<",Ga="prototype",Ua="script",Uf=p1("IE_PROTO"),Ba=function(){},Hf=function(e){return Bf+Ua+Df+e+Bf+"/"+Ua+Df},Gf=function(e){e.write(Hf("")),e.close();var r=e.parentWindow.Object;return e=null,r},v1=function(){var e=f1("iframe"),r="java"+Ua+":",t;return e.style.display="none",l1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Hf("document.F=Object")),t.close(),t.F},Nn,Mn=function(){try{Nn=new ActiveXObject("htmlfile")}catch{}Mn=typeof document<"u"?document.domain&&Nn?Gf(Nn):v1():Gf(Nn);for(var e=Ff.length;e--;)delete Mn[Ga][Ff[e]];return Mn()};c1[Uf]=!0;Wf.exports=Object.create||function(r,t){var n;return r!==null?(Ba[Ga]=u1(r),n=new Ba,Ba[Ga]=null,n[Uf]=r):n=Mn(),t===void 0?n:s1.f(n,t)}});var Ha=a((m8,Kf)=>{"use strict";var d1=P();Kf.exports=!d1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Tt=a((h8,Vf)=>{"use strict";var m1=W(),h1=N(),y1=te(),g1=wt(),b1=Ha(),zf=g1("IE_PROTO"),Wa=Object,q1=Wa.prototype;Vf.exports=b1?Wa.getPrototypeOf:function(e){var r=y1(e);if(m1(r,zf))return r[zf];var t=r.constructor;return h1(t)&&r instanceof t?t.prototype:r instanceof Wa?q1:null}});var Re=a((y8,Yf)=>{"use strict";var x1=Te();Yf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:x1(e,r,t),e}});var Ya=a((g8,Xf)=>{"use strict";var w1=P(),S1=N(),T1=L(),O1=Qe(),Jf=Tt(),C1=Re(),E1=R(),k1=ee(),Va=E1("iterator"),Qf=!1,Ae,Ka,za;[].keys&&(za=[].keys(),"next"in za?(Ka=Jf(Jf(za)),Ka!==Object.prototype&&(Ae=Ka)):Qf=!0);var I1=!T1(Ae)||w1(function(){var e={};return Ae[Va].call(e)!==e});I1?Ae={}:k1&&(Ae=O1(Ae));S1(Ae[Va])||C1(Ae,Va,function(){return this});Xf.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Qf}});var ep=a((b8,Zf)=>{"use strict";var P1=En(),_1=gt();Zf.exports=P1?{}.toString:function(){return"[object "+_1(this)+"]"}});var Ne=a((q8,tp)=>{"use strict";var R1=En(),A1=ne().f,N1=Te(),M1=W(),j1=ep(),$1=R(),rp=$1("toStringTag");tp.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(M1(i,rp)||A1(i,rp,{configurable:!0,value:r}),n&&!R1&&N1(i,"toString",j1))}});var vr=a((x8,np)=>{"use strict";np.exports={}});var ap=a((w8,ip)=>{"use strict";var L1=Ya().IteratorPrototype,F1=Qe(),D1=ze(),B1=Ne(),G1=vr(),U1=function(){return this};ip.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=F1(L1,{next:D1(+!n,t)}),B1(e,i,!1,!0),G1[i]=U1,e}});var up=a((S8,op)=>{"use strict";var H1=A(),W1=D();op.exports=function(e,r,t){try{return H1(W1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var cp=a((T8,sp)=>{"use strict";var K1=L();sp.exports=function(e){return K1(e)||e===null}});var fp=a((O8,lp)=>{"use strict";var z1=cp(),V1=String,Y1=TypeError;lp.exports=function(e){if(z1(e))return e;throw new Y1("Can't set "+V1(e)+" as a prototype")}});var Ot=a((C8,pp)=>{"use strict";var J1=up(),Q1=L(),X1=sr(),Z1=fp();pp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=J1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return X1(i),Z1(o),Q1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Ln=a((E8,wp)=>{"use strict";var eP=x(),rP=B(),jn=ee(),qp=Pf(),tP=N(),nP=ap(),vp=Tt(),dp=Ot(),iP=Ne(),aP=Te(),Ja=Re(),oP=R(),mp=vr(),xp=Ya(),uP=qp.PROPER,sP=qp.CONFIGURABLE,hp=xp.IteratorPrototype,$n=xp.BUGGY_SAFARI_ITERATORS,Ct=oP("iterator"),yp="keys",Et="values",gp="entries",bp=function(){return this};wp.exports=function(e,r,t,n,i,o,u){nP(t,r,n);var l=function(q){if(q===i&&v)return v;if(!$n&&q&&q in f)return f[q];switch(q){case yp:return function(){return new t(this,q)};case Et:return function(){return new t(this,q)};case gp:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",c=!1,f=e.prototype,p=f[Ct]||f["@@iterator"]||i&&f[i],v=!$n&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=vp(d.call(new e)),h!==Object.prototype&&h.next&&(!jn&&vp(h)!==hp&&(dp?dp(h,hp):tP(h[Ct])||Ja(h,Ct,bp)),iP(h,s,!0,!0),jn&&(mp[s]=bp))),uP&&i===Et&&p&&p.name!==Et&&(!jn&&sP?aP(f,"name",Et):(c=!0,v=function(){return rP(p,this)})),i)if(m={values:l(Et),keys:o?v:l(yp),entries:l(gp)},u)for(y in m)($n||c||!(y in f))&&Ja(f,y,m[y]);else eP({target:r,proto:!0,forced:$n||c},m);return(!jn||u)&&f[Ct]!==v&&Ja(f,Ct,v,{name:i}),mp[r]=v,m}});var Fn=a((k8,Sp)=>{"use strict";Sp.exports=function(e,r){return{value:e,done:r}}});var dr=a(()=>{"use strict";var cP=gf().charAt,lP=Ye(),Op=Je(),fP=Ln(),Tp=Fn(),Cp="String Iterator",pP=Op.set,vP=Op.getterFor(Cp);fP(String,"String",function(e){pP(this,{type:Cp,string:lP(e),index:0})},function(){var r=vP(this),t=r.string,n=r.index,i;return n>=t.length?Tp(void 0,!0):(i=cP(t,n),r.index+=i.length,Tp(i,!1))})});var Qa=a((_8,kp)=>{"use strict";var dP=B(),Ep=Q(),mP=Sn();kp.exports=function(e,r,t){var n,i;Ep(e);try{if(n=mP(e,"return"),!n){if(r==="throw")throw t;return t}n=dP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Ep(n),t}});var Pp=a((R8,Ip)=>{"use strict";var hP=Q(),yP=Qa();Ip.exports=function(e,r,t,n){try{return n?r(hP(t)[0],t[1]):r(t)}catch(i){yP(e,"throw",i)}}});var Xa=a((A8,_p)=>{"use strict";var gP=R(),bP=vr(),qP=gP("iterator"),xP=Array.prototype;_p.exports=function(e){return e!==void 0&&(bP.Array===e||xP[qP]===e)}});var kt=a((N8,Ap)=>{"use strict";var wP=gt(),Rp=Sn(),SP=ur(),TP=vr(),OP=R(),CP=OP("iterator");Ap.exports=function(e){if(!SP(e))return Rp(e,CP)||Rp(e,"@@iterator")||TP[wP(e)]}});var Dn=a((M8,Np)=>{"use strict";var EP=B(),kP=D(),IP=Q(),PP=Ve(),_P=kt(),RP=TypeError;Np.exports=function(e,r){var t=arguments.length<2?_P(e):r;if(kP(t))return IP(EP(t,e));throw new RP(PP(e)+" is not iterable")}});var Lp=a((j8,$p)=>{"use strict";var AP=V(),NP=B(),MP=te(),jP=Pp(),$P=Xa(),LP=qt(),FP=pe(),Mp=Gr(),DP=Ur(),BP=Dn(),GP=kt(),jp=Array;$p.exports=function(r){var t=MP(r),n=LP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=AP(o,i>2?arguments[2]:void 0));var l=GP(t),s=0,c,f,p,v,d,h;if(l&&!(this===jp&&$P(l)))for(f=n?new this:[],v=BP(t,l),d=v.next;!(p=NP(d,v)).done;s++)h=u?jP(v,o,[p.value,s],!0):p.value,Mp(f,s,h);else for(c=FP(t),f=n?new this(c):jp(c);c>s;s++)h=u?o(t[s],s):t[s],Mp(f,s,h);return DP(f,s),f}});var eo=a(($8,Gp)=>{"use strict";var UP=R(),Dp=UP("iterator"),Bp=!1;try{Fp=0,Za={next:function(){return{done:!!Fp++}},return:function(){Bp=!0}},Za[Dp]=function(){return this},Array.from(Za,function(){throw 2})}catch{}var Fp,Za;Gp.exports=function(e,r){try{if(!r&&!Bp)return!1}catch{return!1}var t=!1;try{var n={};n[Dp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Up=a(()=>{"use strict";var HP=x(),WP=Lp(),KP=eo(),zP=!KP(function(e){Array.from(e)});HP({target:"Array",stat:!0,forced:zP},{from:WP})});var Wp=a((D8,Hp)=>{"use strict";dr();Up();var VP=z();Hp.exports=VP.Array.from});var zp=a((B8,Kp)=>{"use strict";var YP=Wp();Kp.exports=YP});var Yp=a((G8,Vp)=>{"use strict";var JP=zp();Vp.exports=JP});var Qp=a((U8,Jp)=>{"use strict";var QP=Yp();Jp.exports=QP});var ro=a((H8,Xp)=>{"use strict";Xp.exports=Qp()});var Bn=a((W8,Zp)=>{Zp.exports=ro()});var It=a((K8,ev)=>{"use strict";var XP=TypeError,ZP=9007199254740991;ev.exports=function(e){if(e>ZP)throw XP("Maximum allowed index exceeded");return e}});var iv=a((z8,nv)=>{"use strict";var rv=_e(),e_=qt(),r_=L(),t_=R(),n_=t_("species"),tv=Array;nv.exports=function(e){var r;return rv(e)&&(r=e.constructor,e_(r)&&(r===tv||rv(r.prototype))?r=void 0:r_(r)&&(r=r[n_],r===null&&(r=void 0))),r===void 0?tv:r}});var Gn=a((V8,av)=>{"use strict";var i_=iv();av.exports=function(e,r){return new(i_(e))(r===0?0:r)}});var to=a(()=>{"use strict";var a_=x(),o_=P(),u_=_e(),s_=L(),c_=te(),l_=pe(),ov=It(),uv=Gr(),f_=Ur(),p_=Gn(),v_=xt(),d_=R(),m_=jr(),sv=d_("isConcatSpreadable"),h_=m_>=51||!o_(function(){var e=[];return e[sv]=!1,e.concat()[0]!==e}),y_=function(e){if(!s_(e))return!1;var r=e[sv];return r!==void 0?!!r:u_(e)},g_=!h_||!v_("concat");a_({target:"Array",proto:!0,arity:1,forced:g_},{concat:function(r){var t=c_(this),n=p_(t,0),i=0,o,u,l,s,c;for(o=-1,l=arguments.length;o<l;o++)if(c=o===-1?t:arguments[o],y_(c))for(s=l_(c),ov(i+s),u=0;u<s;u++,i++)u in c&&uv(n,i,c[u]);else ov(i+1),uv(n,i++,c);return f_(n,i),n}})});var Pt=a(()=>{});var _t=a(cv=>{"use strict";var b_=La(),q_=Rn(),x_=q_.concat("length","prototype");cv.f=Object.getOwnPropertyNames||function(r){return b_(r,x_)}});var no=a((eH,pv)=>{"use strict";var w_=Se(),S_=Pe(),lv=_t().f,T_=fr(),fv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],O_=function(e){try{return lv(e)}catch{return T_(fv)}};pv.exports.f=function(r){return fv&&w_(r)==="Window"?O_(r):lv(S_(r))}});var Un=a(vv=>{"use strict";vv.f=Object.getOwnPropertySymbols});var Hn=a((tH,dv)=>{"use strict";var C_=ne();dv.exports=function(e,r,t){return C_.f(e,r,t)}});var Kr=a(mv=>{"use strict";var E_=R();mv.f=E_});var M=a((iH,yv)=>{"use strict";var hv=z(),k_=W(),I_=Kr(),P_=ne().f;yv.exports=function(e){var r=hv.Symbol||(hv.Symbol={});k_(r,e)||P_(r,e,{value:I_.f(e)})}});var io=a((aH,gv)=>{"use strict";var __=B(),R_=H(),A_=R(),N_=Re();gv.exports=function(){var e=R_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=A_("toPrimitive");r&&!r[n]&&N_(r,n,function(i){return __(t,this)},{arity:1})}});var Rt=a((oH,qv)=>{"use strict";var M_=V(),j_=xn(),$_=te(),L_=pe(),bv=Gn(),ao=Gr(),Xe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(s,c,f){for(var p=$_(s),v=j_(p),d=L_(v),h=M_(c,f),m=0,y=0,q=r?bv(s,d):t||u?bv(s,0):void 0,b,k;d>m;m++)if((l||m in v)&&(b=v[m],k=h(b,m,p),e))if(r)ao(q,m,k);else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:ao(q,y++,b)}else switch(e){case 4:return!1;case 7:ao(q,y++,b)}return o?-1:n||i?i:q}};qv.exports={forEach:Xe(0),map:Xe(1),filter:Xe(2),some:Xe(3),every:Xe(4),find:Xe(5),findIndex:Xe(6),filterReject:Xe(7)}});var $v=a(()=>{"use strict";var Wn=x(),Mt=_(),mo=B(),F_=A(),D_=ee(),zr=U(),Vr=cr(),B_=P(),K=W(),G_=G(),co=Q(),Kn=Pe(),ho=Tn(),U_=Ye(),lo=ze(),Yr=Qe(),Sv=An(),H_=_t(),Tv=no(),W_=Un(),Ov=mt(),Cv=ne(),K_=Fa(),Ev=ia(),oo=Re(),z_=Hn(),yo=lr(),V_=wt(),kv=Wr(),xv=Lr(),Y_=R(),J_=Kr(),Q_=M(),X_=io(),Z_=Ne(),Iv=Je(),zn=Rt().forEach,ie=V_("hidden"),Vn="Symbol",Nt="prototype",eR=Iv.set,wv=Iv.getterFor(Vn),ve=Object[Nt],mr=Mt.Symbol,At=mr&&mr[Nt],rR=Mt.RangeError,tR=Mt.TypeError,uo=Mt.QObject,Pv=Ov.f,hr=Cv.f,_v=Tv.f,nR=Ev.f,Rv=F_([].push),Me=yo("symbols"),jt=yo("op-symbols"),iR=yo("wks"),fo=!uo||!uo[Nt]||!uo[Nt].findChild,Av=function(e,r,t){var n=Pv(ve,r);n&&delete ve[r],hr(e,r,t),n&&e!==ve&&hr(ve,r,n)},po=zr&&B_(function(){return Yr(hr({},"a",{get:function(){return hr(this,"a",{value:7}).a}})).a!==7})?Av:hr,so=function(e,r){var t=Me[e]=Yr(At);return eR(t,{type:Vn,tag:e,description:r}),zr||(t.description=r),t},Yn=function(r,t,n){r===ve&&Yn(jt,t,n),co(r);var i=ho(t);return co(n),K(Me,i)?(n.enumerable?(K(r,ie)&&r[ie][i]&&(r[ie][i]=!1),n=Yr(n,{enumerable:lo(0,!1)})):(K(r,ie)||hr(r,ie,lo(1,Yr(null))),r[ie][i]=!0),po(r,i,n)):hr(r,i,n)},go=function(r,t){co(r);var n=Kn(t),i=Sv(n).concat(jv(n));return zn(i,function(o){(!zr||mo(vo,n,o))&&Yn(r,o,n[o])}),r},aR=function(r,t){return t===void 0?Yr(r):go(Yr(r),t)},vo=function(r){var t=ho(r),n=mo(nR,this,t);return this===ve&&K(Me,t)&&!K(jt,t)?!1:n||!K(this,t)||!K(Me,t)||K(this,ie)&&this[ie][t]?n:!0},Nv=function(r,t){var n=Kn(r),i=ho(t);if(!(n===ve&&K(Me,i)&&!K(jt,i))){var o=Pv(n,i);return o&&K(Me,i)&&!(K(n,ie)&&n[ie][i])&&(o.enumerable=!0),o}},Mv=function(r){var t=_v(Kn(r)),n=[];return zn(t,function(i){!K(Me,i)&&!K(kv,i)&&Rv(n,i)}),n},jv=function(e){var r=e===ve,t=_v(r?jt:Kn(e)),n=[];return zn(t,function(i){K(Me,i)&&(!r||K(ve,i))&&Rv(n,Me[i])}),n};Vr||(mr=function(){if(G_(At,this))throw new tR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:U_(arguments[0]),t=xv(r),n=function(i){var o=this===void 0?Mt:this;o===ve&&mo(n,jt,i),K(o,ie)&&K(o[ie],t)&&(o[ie][t]=!1);var u=lo(1,i);try{po(o,t,u)}catch(l){if(!(l instanceof rR))throw l;Av(o,t,u)}};return zr&&fo&&po(ve,t,{configurable:!0,set:n}),so(t,r)},At=mr[Nt],oo(At,"toString",function(){return wv(this).tag}),oo(mr,"withoutSetter",function(e){return so(xv(e),e)}),Ev.f=vo,Cv.f=Yn,K_.f=go,Ov.f=Nv,H_.f=Tv.f=Mv,W_.f=jv,J_.f=function(e){return so(Y_(e),e)},zr&&(z_(At,"description",{configurable:!0,get:function(){return wv(this).description}}),D_||oo(ve,"propertyIsEnumerable",vo,{unsafe:!0})));Wn({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:mr});zn(Sv(iR),function(e){Q_(e)});Wn({target:Vn,stat:!0,forced:!Vr},{useSetter:function(){fo=!0},useSimple:function(){fo=!1}});Wn({target:"Object",stat:!0,forced:!Vr,sham:!zr},{create:aR,defineProperty:Yn,defineProperties:go,getOwnPropertyDescriptor:Nv});Wn({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:Mv});X_();Z_(mr,Vn);kv[ie]=!0});var bo=a((cH,Lv)=>{"use strict";var oR=cr();Lv.exports=oR&&!!Symbol.for&&!!Symbol.keyFor});var Dv=a(()=>{"use strict";var uR=x(),sR=H(),cR=W(),lR=Ye(),Fv=lr(),fR=bo(),qo=Fv("string-to-symbol-registry"),pR=Fv("symbol-to-string-registry");uR({target:"Symbol",stat:!0,forced:!fR},{for:function(e){var r=lR(e);if(cR(qo,r))return qo[r];var t=sR("Symbol")(r);return qo[r]=t,pR[t]=r,t}})});var Gv=a(()=>{"use strict";var vR=x(),dR=W(),mR=$r(),hR=Ve(),yR=lr(),gR=bo(),Bv=yR("symbol-to-string-registry");vR({target:"Symbol",stat:!0,forced:!gR},{keyFor:function(r){if(!mR(r))throw new TypeError(hR(r)+" is not a symbol");if(dR(Bv,r))return Bv[r]}})});var Hv=a((dH,Uv)=>{"use strict";var bR=L(),qR=Je().get;Uv.exports=function(r){if(!bR(r))return!1;var t=qR(r);return!!t&&t.type==="RawJSON"}});var Yv=a((mH,Vv)=>{"use strict";var xo=A(),xR=W(),Jn=SyntaxError,wR=parseInt,SR=String.fromCharCode,TR=xo("".charAt),Wv=xo("".slice),Kv=xo(/./.exec),zv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},OR=/^[\da-f]{4}$/i,CR=/^[\u0000-\u001F]$/;Vv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=TR(e,r);if(i==="\\"){var o=Wv(e,r,r+2);if(xR(zv,o))n+=zv[o],r+=2;else if(o==="\\u"){r+=2;var u=Wv(e,r,r+4);if(!Kv(OR,u))throw new Jn("Bad Unicode escape at: "+r);n+=SR(wR(u,16)),r+=4}else throw new Jn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Kv(CR,i))throw new Jn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Jn("Unterminated string at: "+r);return{value:n,end:r}}});var Qv=a((hH,Jv)=>{"use strict";var ER=P();Jv.exports=!ER(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var fd=a(()=>{"use strict";var kR=x(),ad=H(),IR=Nr(),od=B(),yr=A(),ud=P(),Xv=_e(),Xn=N(),PR=Hv(),Zv=$r(),ed=Se(),_R=Ye(),RR=fr(),AR=Yv(),NR=Lr(),MR=cr(),wo=Qv(),sd=String,Ze=ad("JSON","stringify"),Qn=yr(/./.exec),To=yr("".charAt),jR=yr("".charCodeAt),$R=yr("".replace),So=yr("".slice),Oo=yr([].push),LR=yr(1.1.toString),FR=/[\uD800-\uDFFF]/g,rd=/^[\uD800-\uDBFF]$/,td=/^[\uDC00-\uDFFF]$/,Co=NR(),nd=Co.length,cd=!MR||ud(function(){var e=ad("Symbol")("stringify detection");return Ze([e])!=="[null]"||Ze({a:e})!=="{}"||Ze(Object(e))!=="{}"}),id=ud(function(){return Ze("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ze("\uDEAD")!=='"\\udead"'}),DR=cd?function(e,r){var t=RR(arguments),n=ld(r);if(!(!Xn(n)&&(e===void 0||Zv(e))))return t[1]=function(i,o){if(Xn(n)&&(o=od(n,this,sd(i),o)),!Zv(o))return o},IR(Ze,null,t)}:Ze,BR=function(e,r,t){var n=To(t,r-1),i=To(t,r+1);return Qn(rd,e)&&!Qn(td,i)||Qn(td,e)&&!Qn(rd,n)?"\\u"+LR(jR(e,0),16):e},ld=function(e){if(Xn(e))return e;if(Xv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?Oo(t,i):(typeof i=="number"||ed(i)==="Number"||ed(i)==="String")&&Oo(t,_R(i))}var o=t.length,u=!0;return function(l,s){if(u)return u=!1,s;if(Xv(this))return s;for(var c=0;c<o;c++)if(t[c]===l)return s}}};Ze&&kR({target:"JSON",stat:!0,arity:3,forced:cd||id||!wo},{stringify:function(r,t,n){var i=ld(t),o=[],u=DR(r,function(d,h){var m=Xn(i)?od(i,this,sd(d),h):h;return!wo&&PR(m)?Co+(Oo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(id&&(u=$R(u,FR,BR)),wo))return u;for(var l="",s=u.length,c=0;c<s;c++){var f=To(u,c);if(f==='"'){var p=AR(u,++c).end-1,v=So(u,c,p);l+=So(v,0,nd)===Co?o[So(v,nd)]:'"'+v+'"',c=p}else l+=f}return l}})});var vd=a(()=>{"use strict";var GR=x(),UR=cr(),HR=P(),pd=Un(),WR=te(),KR=!UR||HR(function(){pd.f(1)});GR({target:"Object",stat:!0,forced:KR},{getOwnPropertySymbols:function(r){var t=pd.f;return t?t(WR(r)):[]}})});var dd=a(()=>{"use strict";$v();Dv();Gv();fd();vd()});var Eo=a(()=>{"use strict";var zR=M();zR("asyncDispose")});var ko=a(()=>{"use strict";var VR=M();VR("asyncIterator")});var md=a(()=>{});var Io=a(()=>{"use strict";var YR=M();YR("dispose")});var hd=a(()=>{"use strict";var JR=M();JR("hasInstance")});var yd=a(()=>{"use strict";var QR=M();QR("isConcatSpreadable")});var Po=a(()=>{"use strict";var XR=M();XR("iterator")});var gd=a(()=>{"use strict";var ZR=M();ZR("match")});var bd=a(()=>{"use strict";var eA=M();eA("matchAll")});var qd=a(()=>{"use strict";var rA=M();rA("replace")});var xd=a(()=>{"use strict";var tA=M();tA("search")});var wd=a(()=>{"use strict";var nA=M();nA("species")});var Sd=a(()=>{"use strict";var iA=M();iA("split")});var _o=a(()=>{"use strict";var aA=M(),oA=io();aA("toPrimitive");oA()});var Td=a(()=>{"use strict";var uA=H(),sA=M(),cA=Ne();sA("toStringTag");cA(uA("Symbol"),"Symbol")});var Od=a(()=>{"use strict";var lA=M();lA("unscopables")});var Cd=a(()=>{"use strict";var fA=_(),pA=Ne();pA(fA.JSON,"JSON",!0)});var Ed=a(()=>{});var kd=a(()=>{});var Pd=a((uW,Id)=>{"use strict";to();Pt();dd();Eo();ko();md();Io();hd();yd();Po();gd();bd();qd();xd();wd();Sd();_o();Td();Od();Cd();Ed();kd();var vA=z();Id.exports=vA.Symbol});var Ro=a((sW,_d)=>{"use strict";_d.exports=function(){}});var gr=a((cW,jd)=>{"use strict";var dA=Pe(),Ao=Ro(),Rd=vr(),Nd=Je(),mA=ne().f,hA=Ln(),Zn=Fn(),yA=ee(),gA=U(),Md="Array Iterator",bA=Nd.set,qA=Nd.getterFor(Md);jd.exports=hA(Array,"Array",function(e,r){bA(this,{type:Md,target:dA(e),index:0,kind:r})},function(){var e=qA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Zn(void 0,!0);switch(e.kind){case"keys":return Zn(t,!1);case"values":return Zn(r[t],!1)}return Zn([t,r[t]],!1)},"values");var Ad=Rd.Arguments=Rd.Array;Ao("keys");Ao("values");Ao("entries");if(!yA&&gA&&Ad.name!=="values")try{mA(Ad,"name",{value:"values"})}catch{}});var Ld=a((lW,$d)=>{"use strict";$d.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var br=a(()=>{"use strict";gr();var xA=Ld(),wA=_(),SA=Ne(),Fd=vr();for(ei in xA)SA(wA[ei],ei),Fd[ei]=Fd.Array;var ei});var Bd=a((vW,Dd)=>{"use strict";var TA=Pd();br();Dd.exports=TA});var Hd=a(()=>{"use strict";var OA=R(),CA=ne().f,Gd=OA("metadata"),Ud=Function.prototype;Ud[Gd]===void 0&&CA(Ud,Gd,{value:null})});var Wd=a(()=>{"use strict";Eo()});var Kd=a(()=>{"use strict";Io()});var zd=a(()=>{"use strict";var EA=M();EA("metadata")});var Yd=a((wW,Vd)=>{"use strict";var kA=Bd();Hd();Wd();Kd();zd();Vd.exports=kA});var Mo=a((SW,Jd)=>{"use strict";var IA=H(),PA=A(),No=IA("Symbol"),_A=No.keyFor,RA=PA(No.prototype.valueOf);Jd.exports=No.isRegisteredSymbol||function(r){try{return _A(RA(r))!==void 0}catch{return!1}}});var Qd=a(()=>{"use strict";var AA=x(),NA=Mo();AA({target:"Symbol",stat:!0},{isRegisteredSymbol:NA})});var Lo=a((CW,nm)=>{"use strict";var MA=lr(),rm=H(),jA=A(),$A=$r(),LA=R(),ti=rm("Symbol"),Xd=ti.isWellKnownSymbol,tm=rm("Object","getOwnPropertyNames"),FA=jA(ti.prototype.valueOf),Zd=MA("wks");for(ri=0,jo=tm(ti),em=jo.length;ri<em;ri++)try{$o=jo[ri],$A(ti[$o])&&LA($o)}catch{}var $o,ri,jo,em;nm.exports=function(r){if(Xd&&Xd(r))return!0;try{for(var t=FA(r),n=0,i=tm(Zd),o=i.length;n<o;n++)if(Zd[i[n]]==t)return!0}catch{}return!1}});var im=a(()=>{"use strict";var DA=x(),BA=Lo();DA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:BA})});var am=a(()=>{"use strict";var GA=M();GA("customMatcher")});var om=a(()=>{"use strict";var UA=M();UA("observable")});var um=a(()=>{"use strict";var HA=x(),WA=Mo();HA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:WA})});var sm=a(()=>{"use strict";var KA=x(),zA=Lo();KA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:zA})});var cm=a(()=>{"use strict";var VA=M();VA("matcher")});var lm=a(()=>{"use strict";var YA=M();YA("metadataKey")});var fm=a(()=>{"use strict";var JA=M();JA("patternMatch")});var pm=a(()=>{"use strict";var QA=M();QA("replaceAll")});var dm=a((WW,vm)=>{"use strict";var XA=Yd();Qd();im();am();om();um();sm();cm();lm();fm();pm();vm.exports=XA});var Oe=a((KW,mm)=>{"use strict";mm.exports=dm()});var ni=a((zW,hm)=>{hm.exports=Oe()});var gm=a((VW,ym)=>{"use strict";gr();dr();var ZA=kt();ym.exports=ZA});var qm=a((YW,bm)=>{"use strict";var eN=gm();br();bm.exports=eN});var wm=a((JW,xm)=>{"use strict";var rN=qm();xm.exports=rN});var Tm=a((QW,Sm)=>{"use strict";var tN=wm();Sm.exports=tN});var Fo=a((XW,Om)=>{"use strict";Om.exports=Tm()});var ii=a((ZW,Cm)=>{Cm.exports=Fo()});var km=a((e6,Em)=>{"use strict";gr();dr();var nN=Dn();Em.exports=nN});var Pm=a((r6,Im)=>{"use strict";var iN=km();br();Im.exports=iN});var Rm=a((t6,_m)=>{"use strict";var aN=Pm();_m.exports=aN});var Nm=a((n6,Am)=>{"use strict";var oN=Rm();Am.exports=oN});var jm=a((i6,Mm)=>{"use strict";Mm.exports=Nm()});var ai=a((a6,$m)=>{$m.exports=jm()});var Fm=a((o6,Lm)=>{"use strict";var uN=H(),sN=A(),cN=_t(),lN=Un(),fN=Q(),pN=sN([].concat);Lm.exports=uN("Reflect","ownKeys")||function(r){var t=cN.f(fN(r)),n=lN.f;return n?pN(t,n(r)):t}});var Gm=a((u6,Bm)=>{"use strict";var Dm=W(),vN=Fm(),dN=mt(),mN=ne();Bm.exports=function(e,r,t){for(var n=vN(r),i=mN.f,o=dN.f,u=0;u<n.length;u++){var l=n[u];!Dm(e,l)&&!(t&&Dm(t,l))&&i(e,l,o(r,l))}}});var Hm=a((s6,Um)=>{"use strict";var hN=L(),yN=Te();Um.exports=function(e,r){hN(r)&&"cause"in r&&yN(e,"cause",r.cause)}});var Vm=a((c6,zm)=>{"use strict";var gN=A(),Wm=Error,bN=gN("".replace),qN=function(e){return String(new Wm(e).stack)}("zxcasd"),Km=/\n\s*at [^:]*:[^\n]*/,xN=Km.test(qN);zm.exports=function(e,r){if(xN&&typeof e=="string"&&!Wm.prepareStackTrace)for(;r--;)e=bN(e,Km,"");return e}});var Jm=a((l6,Ym)=>{"use strict";var wN=P(),SN=ze();Ym.exports=!wN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",SN(1,7)),e.stack!==7):!0})});var Zm=a((f6,Xm)=>{"use strict";var TN=Te(),ON=Vm(),CN=Jm(),Qm=Error.captureStackTrace;Xm.exports=function(e,r,t,n){CN&&(Qm?Qm(e,r):TN(e,"stack",ON(t,n)))}});var de=a((p6,nh)=>{"use strict";var EN=V(),kN=B(),IN=Q(),PN=Ve(),_N=Xa(),RN=pe(),eh=G(),AN=Dn(),NN=kt(),rh=Qa(),MN=TypeError,oi=function(e,r){this.stopped=e,this.result=r},th=oi.prototype;nh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),s=EN(r,n),c,f,p,v,d,h,m,y=function(b){return c&&rh(c,"normal"),new oi(!0,b)},q=function(b){return i?(IN(b),l?s(b[0],b[1],y):s(b[0],b[1])):l?s(b,y):s(b)};if(o)c=e.iterator;else if(u)c=e;else{if(f=NN(e),!f)throw new MN(PN(e)+" is not iterable");if(_N(f)){for(p=0,v=RN(e);v>p;p++)if(d=q(e[p]),d&&eh(th,d))return d;return new oi(!1)}c=AN(e,f)}for(h=o?e.next:c.next;!(m=kN(h,c)).done;){try{d=q(m.value)}catch(b){rh(c,"throw",b)}if(typeof d=="object"&&d&&eh(th,d))return d}return new oi(!1)}});var ah=a((v6,ih)=>{"use strict";var jN=Ye();ih.exports=function(e,r){return e===void 0?arguments.length<2?"":r:jN(e)}});var uh=a(()=>{"use strict";var $N=x(),LN=G(),FN=Tt(),ui=Ot(),DN=Gm(),oh=Qe(),Do=Te(),Bo=ze(),BN=Hm(),GN=Zm(),UN=de(),HN=ah(),WN=R(),KN=WN("toStringTag"),si=Error,zN=[].push,Jr=function(r,t){var n=LN(Go,this),i;ui?i=ui(new si,n?FN(this):Go):(i=n?this:oh(Go),Do(i,KN,"Error")),t!==void 0&&Do(i,"message",HN(t)),GN(i,Jr,i.stack,1),arguments.length>2&&BN(i,arguments[2]);var o=[];return UN(r,zN,{that:o}),Do(i,"errors",o),i};ui?ui(Jr,si):DN(Jr,si,{name:!0});var Go=Jr.prototype=oh(si.prototype,{constructor:Bo(1,Jr),message:Bo(1,""),name:Bo(1,"AggregateError")});$N({global:!0,constructor:!0,arity:2},{AggregateError:Jr})});var Uo=a(()=>{"use strict";uh()});var Ho=a((g6,sh)=>{"use strict";var $t=_(),VN=Mr(),YN=Se(),ci=function(e){return VN.slice(0,e.length)===e};sh.exports=function(){return ci("Bun/")?"BUN":ci("Cloudflare-Workers")?"CLOUDFLARE":ci("Deno/")?"DENO":ci("Node.js/")?"NODE":$t.Bun&&typeof Bun.version=="string"?"BUN":$t.Deno&&typeof Deno.version=="object"?"DENO":YN($t.process)==="process"?"NODE":$t.window&&$t.document?"BROWSER":"REST"}()});var Lt=a((b6,ch)=>{"use strict";var JN=Ho();ch.exports=JN==="NODE"});var Wo=a((q6,fh)=>{"use strict";var QN=H(),XN=Hn(),ZN=R(),e2=U(),lh=ZN("species");fh.exports=function(e){var r=QN(e);e2&&r&&!r[lh]&&XN(r,lh,{configurable:!0,get:function(){return this}})}});var li=a((x6,ph)=>{"use strict";var r2=G(),t2=TypeError;ph.exports=function(e,r){if(r2(r,e))return e;throw new t2("Incorrect invocation")}});var Ko=a((w6,vh)=>{"use strict";var n2=qt(),i2=Ve(),a2=TypeError;vh.exports=function(e){if(n2(e))return e;throw new a2(i2(e)+" is not a constructor")}});var zo=a((S6,mh)=>{"use strict";var dh=Q(),o2=Ko(),u2=ur(),s2=R(),c2=s2("species");mh.exports=function(e,r){var t=dh(e).constructor,n;return t===void 0||u2(n=dh(t)[c2])?r:o2(n)}});var yh=a((T6,hh)=>{"use strict";var l2=TypeError;hh.exports=function(e,r){if(e<r)throw new l2("Not enough arguments");return e}});var Vo=a((O6,gh)=>{"use strict";var f2=Mr();gh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(f2)});var nu=a((C6,Eh)=>{"use strict";var se=_(),p2=Nr(),v2=V(),bh=N(),d2=W(),Ch=P(),qh=Da(),m2=fr(),xh=On(),h2=yh(),y2=Vo(),g2=Lt(),eu=se.setImmediate,ru=se.clearImmediate,b2=se.process,Yo=se.Dispatch,q2=se.Function,wh=se.MessageChannel,x2=se.String,Jo=0,Ft={},Sh="onreadystatechange",Dt,qr,Qo,Xo;Ch(function(){Dt=se.location});var tu=function(e){if(d2(Ft,e)){var r=Ft[e];delete Ft[e],r()}},Zo=function(e){return function(){tu(e)}},Th=function(e){tu(e.data)},Oh=function(e){se.postMessage(x2(e),Dt.protocol+"//"+Dt.host)};(!eu||!ru)&&(eu=function(r){h2(arguments.length,1);var t=bh(r)?r:q2(r),n=m2(arguments,1);return Ft[++Jo]=function(){p2(t,void 0,n)},qr(Jo),Jo},ru=function(r){delete Ft[r]},g2?qr=function(e){b2.nextTick(Zo(e))}:Yo&&Yo.now?qr=function(e){Yo.now(Zo(e))}:wh&&!y2?(Qo=new wh,Xo=Qo.port2,Qo.port1.onmessage=Th,qr=v2(Xo.postMessage,Xo)):se.addEventListener&&bh(se.postMessage)&&!se.importScripts&&Dt&&Dt.protocol!=="file:"&&!Ch(Oh)?(qr=Oh,se.addEventListener("message",Th,!1)):Sh in xh("script")?qr=function(e){qh.appendChild(xh("script"))[Sh]=function(){qh.removeChild(this),tu(e)}}:qr=function(e){setTimeout(Zo(e),0)});Eh.exports={set:eu,clear:ru}});var Ph=a((E6,Ih)=>{"use strict";var kh=_(),w2=U(),S2=Object.getOwnPropertyDescriptor;Ih.exports=function(e){if(!w2)return kh[e];var r=S2(kh,e);return r&&r.value}});var iu=a((k6,Rh)=>{"use strict";var _h=function(){this.head=null,this.tail=null};_h.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Rh.exports=_h});var Nh=a((I6,Ah)=>{"use strict";var T2=Mr();Ah.exports=/ipad|iphone|ipod/i.test(T2)&&typeof Pebble<"u"});var jh=a((P6,Mh)=>{"use strict";var O2=Mr();Mh.exports=/web0s(?!.*chrome)/i.test(O2)});var Uh=a((_6,Gh)=>{"use strict";var Xr=_(),C2=Ph(),$h=V(),au=nu().set,E2=iu(),k2=Vo(),I2=Nh(),P2=jh(),ou=Lt(),Lh=Xr.MutationObserver||Xr.WebKitMutationObserver,Fh=Xr.document,Dh=Xr.process,fi=Xr.Promise,cu=C2("queueMicrotask"),Qr,uu,su,pi,Bh;cu||(Bt=new E2,Gt=function(){var e,r;for(ou&&(e=Dh.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Qr(),t}e&&e.enter()},!k2&&!ou&&!P2&&Lh&&Fh?(uu=!0,su=Fh.createTextNode(""),new Lh(Gt).observe(su,{characterData:!0}),Qr=function(){su.data=uu=!uu}):!I2&&fi&&fi.resolve?(pi=fi.resolve(void 0),pi.constructor=fi,Bh=$h(pi.then,pi),Qr=function(){Bh(Gt)}):ou?Qr=function(){Dh.nextTick(Gt)}:(au=$h(au,Xr),Qr=function(){au(Gt)}),cu=function(e){Bt.head||Qr(),Bt.add(e)});var Bt,Gt;Gh.exports=cu});var Wh=a((R6,Hh)=>{"use strict";Hh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var xr=a((A6,Kh)=>{"use strict";Kh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var wr=a((N6,zh)=>{"use strict";var _2=_();zh.exports=_2.Promise});var Zr=a((M6,Qh)=>{"use strict";var R2=_(),Ut=wr(),A2=N(),N2=ha(),M2=Sa(),j2=R(),Vh=Ho(),$2=ee(),lu=jr(),Yh=Ut&&Ut.prototype,L2=j2("species"),fu=!1,Jh=A2(R2.PromiseRejectionEvent),F2=N2("Promise",function(){var e=M2(Ut),r=e!==String(Ut);if(!r&&lu===66||$2&&!(Yh.catch&&Yh.finally))return!0;if(!lu||lu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[L2]=n,fu=t.then(function(){})instanceof n,!fu)return!0}return!r&&(Vh==="BROWSER"||Vh==="DENO")&&!Jh});Qh.exports={CONSTRUCTOR:F2,REJECTION_EVENT:Jh,SUBCLASSING:fu}});var Ce=a((j6,Zh)=>{"use strict";var Xh=D(),D2=TypeError,B2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new D2("Bad Promise constructor");r=n,t=i}),this.resolve=Xh(r),this.reject=Xh(t)};Zh.exports.f=function(e){return new B2(e)}});var by=a(()=>{"use strict";var G2=x(),U2=ee(),hi=Lt(),er=_(),H2=z(),nt=B(),ey=Re(),ry=Ot(),W2=Ne(),K2=Wo(),z2=D(),mi=N(),V2=L(),Y2=li(),J2=zo(),oy=nu().set,hu=Uh(),Q2=Wh(),X2=xr(),Z2=iu(),uy=Je(),yi=wr(),yu=Zr(),sy=Ce(),gi="Promise",cy=yu.CONSTRUCTOR,eM=yu.REJECTION_EVENT,rM=yu.SUBCLASSING,pu=uy.getterFor(gi),tM=uy.set,et=yi&&yi.prototype,Sr=yi,vi=et,ly=er.TypeError,vu=er.document,gu=er.process,du=sy.f,nM=du,iM=!!(vu&&vu.createEvent&&er.dispatchEvent),fy="unhandledrejection",aM="rejectionhandled",ty=0,py=1,oM=2,bu=1,vy=2,di,ny,dy,iy,my=function(e){var r;return V2(e)&&mi(r=e.then)?r:!1},hy=function(e,r){var t=r.value,n=r.state===py,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,s,c,f;try{i?(n||(r.rejection===vy&&sM(r),r.rejection=bu),i===!0?s=t:(l&&l.enter(),s=i(t),l&&(l.exit(),f=!0)),s===e.promise?u(new ly("Promise-chain cycle")):(c=my(s))?nt(c,s,o,u):o(s)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},yy=function(e,r){e.notified||(e.notified=!0,hu(function(){for(var t=e.reactions,n;n=t.get();)hy(n,e);e.notified=!1,r&&!e.rejection&&uM(e)}))},gy=function(e,r,t){var n,i;iM?(n=vu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),er.dispatchEvent(n)):n={promise:r,reason:t},!eM&&(i=er["on"+e])?i(n):e===fy&&Q2("Unhandled promise rejection",t)},uM=function(e){nt(oy,er,function(){var r=e.facade,t=e.value,n=ay(e),i;if(n&&(i=X2(function(){hi?gu.emit("unhandledRejection",t,r):gy(fy,r,t)}),e.rejection=hi||ay(e)?vy:bu,i.error))throw i.value})},ay=function(e){return e.rejection!==bu&&!e.parent},sM=function(e){nt(oy,er,function(){var r=e.facade;hi?gu.emit("rejectionHandled",r):gy(aM,r,e.value)})},rt=function(e,r,t){return function(n){e(r,n,t)}},tt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=oM,yy(e,!0))},mu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ly("Promise can't be resolved itself");var n=my(r);n?hu(function(){var i={done:!1};try{nt(n,r,rt(mu,i,e),rt(tt,i,e))}catch(o){tt(i,o,e)}}):(e.value=r,e.state=py,yy(e,!1))}catch(i){tt({done:!1},i,e)}}};if(cy&&(Sr=function(r){Y2(this,vi),z2(r),nt(di,this);var t=pu(this);try{r(rt(mu,t),rt(tt,t))}catch(n){tt(t,n)}},vi=Sr.prototype,di=function(r){tM(this,{type:gi,done:!1,notified:!1,parent:!1,reactions:new Z2,rejection:!1,state:ty,value:null})},di.prototype=ey(vi,"then",function(r,t){var n=pu(this),i=du(J2(this,Sr));return n.parent=!0,i.ok=mi(r)?r:!0,i.fail=mi(t)&&t,i.domain=hi?gu.domain:void 0,n.state===ty?n.reactions.add(i):hu(function(){hy(i,n)}),i.promise}),ny=function(){var e=new di,r=pu(e);this.promise=e,this.resolve=rt(mu,r),this.reject=rt(tt,r)},sy.f=du=function(e){return e===Sr||e===dy?new ny(e):nM(e)},!U2&&mi(yi)&&et!==Object.prototype)){iy=et.then,rM||ey(et,"then",function(r,t){var n=this;return new Sr(function(i,o){nt(iy,n,i,o)}).then(r,t)},{unsafe:!0});try{delete et.constructor}catch{}ry&&ry(et,vi)}G2({global:!0,constructor:!0,wrap:!0,forced:cy},{Promise:Sr});dy=H2.Promise;W2(Sr,gi,!1,!0);K2(gi)});var Ht=a((F6,qy)=>{"use strict";var cM=wr(),lM=eo(),fM=Zr().CONSTRUCTOR;qy.exports=fM||!lM(function(e){cM.all(e).then(void 0,function(){})})});var xy=a(()=>{"use strict";var pM=x(),vM=B(),dM=D(),mM=Ce(),hM=xr(),yM=de(),gM=Ht();pM({target:"Promise",stat:!0,forced:gM},{all:function(r){var t=this,n=mM.f(t),i=n.resolve,o=n.reject,u=hM(function(){var l=dM(t.resolve),s=[],c=0,f=1;yM(r,function(p){var v=c++,d=!1;f++,vM(l,t,p).then(function(h){d||(d=!0,s[v]=h,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var Sy=a(()=>{"use strict";var bM=x(),qM=ee(),xM=Zr().CONSTRUCTOR,xu=wr(),wM=H(),SM=N(),TM=Re(),wy=xu&&xu.prototype;bM({target:"Promise",proto:!0,forced:xM,real:!0},{catch:function(e){return this.then(void 0,e)}});!qM&&SM(xu)&&(qu=wM("Promise").prototype.catch,wy.catch!==qu&&TM(wy,"catch",qu,{unsafe:!0}));var qu});var Ty=a(()=>{"use strict";var OM=x(),CM=B(),EM=D(),kM=Ce(),IM=xr(),PM=de(),_M=Ht();OM({target:"Promise",stat:!0,forced:_M},{race:function(r){var t=this,n=kM.f(t),i=n.reject,o=IM(function(){var u=EM(t.resolve);PM(r,function(l){CM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Oy=a(()=>{"use strict";var RM=x(),AM=Ce(),NM=Zr().CONSTRUCTOR;RM({target:"Promise",stat:!0,forced:NM},{reject:function(r){var t=AM.f(this),n=t.reject;return n(r),t.promise}})});var wu=a((V6,Cy)=>{"use strict";var MM=Q(),jM=L(),$M=Ce();Cy.exports=function(e,r){if(MM(e),jM(r)&&r.constructor===e)return r;var t=$M.f(e),n=t.resolve;return n(r),t.promise}});var Iy=a(()=>{"use strict";var LM=x(),FM=H(),Ey=ee(),DM=wr(),ky=Zr().CONSTRUCTOR,BM=wu(),GM=FM("Promise"),UM=Ey&&!ky;LM({target:"Promise",stat:!0,forced:Ey||ky},{resolve:function(r){return BM(UM&&this===GM?DM:this,r)}})});var Py=a(()=>{"use strict";by();xy();Sy();Ty();Oy();Iy()});var Su=a(()=>{"use strict";var HM=x(),WM=B(),KM=D(),zM=Ce(),VM=xr(),YM=de(),JM=Ht();HM({target:"Promise",stat:!0,forced:JM},{allSettled:function(r){var t=this,n=zM.f(t),i=n.resolve,o=n.reject,u=VM(function(){var l=KM(t.resolve),s=[],c=0,f=1;YM(r,function(p){var v=c++,d=!1;f++,WM(l,t,p).then(function(h){d||(d=!0,s[v]={status:"fulfilled",value:h},--f||i(s))},function(h){d||(d=!0,s[v]={status:"rejected",reason:h},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var Tu=a(()=>{"use strict";var QM=x(),XM=B(),ZM=D(),ej=H(),rj=Ce(),tj=xr(),nj=de(),ij=Ht(),_y="No one promise resolved";QM({target:"Promise",stat:!0,forced:ij},{any:function(r){var t=this,n=ej("AggregateError"),i=rj.f(t),o=i.resolve,u=i.reject,l=tj(function(){var s=ZM(t.resolve),c=[],f=0,p=1,v=!1;nj(r,function(d){var h=f++,m=!1;p++,XM(s,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,c[h]=y,--p||u(new n(c,_y)))})}),--p||u(new n(c,_y))});return l.error&&u(l.value),i.promise}})});var Cu=a(()=>{"use strict";var aj=x(),oj=_(),uj=Nr(),sj=fr(),cj=Ce(),lj=D(),Ay=xr(),Ou=oj.Promise,Ry=!1,fj=!Ou||!Ou.try||Ay(function(){Ou.try(function(e){Ry=e===8},8)}).error||!Ry;aj({target:"Promise",stat:!0,forced:fj},{try:function(e){var r=arguments.length>1?sj(arguments,1):[],t=cj.f(this),n=Ay(function(){return uj(lj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Eu=a(()=>{"use strict";var pj=x(),vj=Ce();pj({target:"Promise",stat:!0},{withResolvers:function(){var r=vj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var $y=a(()=>{"use strict";var dj=x(),mj=ee(),bi=wr(),hj=P(),My=H(),jy=N(),yj=zo(),Ny=wu(),gj=Re(),Iu=bi&&bi.prototype,bj=!!bi&&hj(function(){Iu.finally.call({then:function(){}},function(){})});dj({target:"Promise",proto:!0,real:!0,forced:bj},{finally:function(e){var r=yj(this,My("Promise")),t=jy(e);return this.then(t?function(n){return Ny(r,e()).then(function(){return n})}:e,t?function(n){return Ny(r,e()).then(function(){throw n})}:e)}});!mj&&jy(bi)&&(ku=My("Promise").prototype.finally,Iu.finally!==ku&&gj(Iu,"finally",ku,{unsafe:!0}));var ku});var Fy=a((cK,Ly)=>{"use strict";Uo();gr();Pt();Py();Su();Tu();Cu();Eu();$y();dr();var qj=z();Ly.exports=qj.Promise});var By=a((lK,Dy)=>{"use strict";var xj=Fy();br();Dy.exports=xj});var Gy=a(()=>{"use strict";Cu()});var Uy=a(()=>{"use strict";Eu()});var Wy=a((mK,Hy)=>{"use strict";var wj=By();Gy();Uy();Hy.exports=wj});var Ky=a(()=>{"use strict";Uo()});var zy=a(()=>{"use strict";Su()});var Vy=a(()=>{"use strict";Tu()});var Jy=a((wK,Yy)=>{"use strict";var Sj=Wy();Ky();zy();Vy();Yy.exports=Sj});var it=a((SK,Qy)=>{"use strict";Qy.exports=Jy()});var eg=a((kK,Zy)=>{"use strict";ko();var Tj=Kr();Zy.exports=Tj.f("asyncIterator")});var tg=a((IK,rg)=>{"use strict";var Oj=eg();rg.exports=Oj});var ig=a((PK,ng)=>{"use strict";var Cj=tg();ng.exports=Cj});var og=a((_K,ag)=>{"use strict";var Ej=ig();ag.exports=Ej});var qi=a((RK,ug)=>{"use strict";ug.exports=og()});var fg=a(()=>{"use strict";var kj=x(),Ij=P(),Pj=te(),lg=Tt(),_j=Ha(),Rj=Ij(function(){lg(1)});kj({target:"Object",stat:!0,forced:Rj,sham:!_j},{getPrototypeOf:function(r){return lg(Pj(r))}})});var vg=a(($K,pg)=>{"use strict";fg();var Aj=z();pg.exports=Aj.Object.getPrototypeOf});var mg=a((LK,dg)=>{"use strict";var Nj=vg();dg.exports=Nj});var yg=a((FK,hg)=>{"use strict";var Mj=mg();hg.exports=Mj});var bg=a((DK,gg)=>{"use strict";var jj=yg();gg.exports=jj});var xi=a((BK,qg)=>{"use strict";qg.exports=bg()});var wg=a(()=>{"use strict";var $j=x(),Lj=A(),Fj=_e(),Dj=Lj([].reverse),xg=[1,2];$j({target:"Array",proto:!0,forced:String(xg)===String(xg.reverse())},{reverse:function(){return Fj(this)&&(this.length=this.length),Dj(this)}})});var Tg=a((HK,Sg)=>{"use strict";wg();var Bj=ue();Sg.exports=Bj("Array","reverse")});var Cg=a((WK,Og)=>{"use strict";var Gj=G(),Uj=Tg(),Ru=Array.prototype;Og.exports=function(e){var r=e.reverse;return e===Ru||Gj(Ru,e)&&r===Ru.reverse?Uj:r}});var kg=a((KK,Eg)=>{"use strict";var Hj=Cg();Eg.exports=Hj});var Pg=a((zK,Ig)=>{"use strict";var Wj=kg();Ig.exports=Wj});var Rg=a((VK,_g)=>{"use strict";var Kj=Pg();_g.exports=Kj});var Ng=a((YK,Ag)=>{"use strict";Ag.exports=Rg()});var Au=a((JK,zt)=>{function zj(e,r){this.v=e,this.k=r}zt.exports=zj,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Mg=a(()=>{"use strict";var Vj=x(),Yj=U(),Jj=Qe();Vj({target:"Object",stat:!0,sham:!Yj},{create:Jj})});var $g=a((ZK,jg)=>{"use strict";Mg();var Qj=z(),Xj=Qj.Object;jg.exports=function(r,t){return Xj.create(r,t)}});var Fg=a((ez,Lg)=>{"use strict";var Zj=$g();Lg.exports=Zj});var Bg=a((rz,Dg)=>{"use strict";var e$=Fg();Dg.exports=e$});var Ug=a((tz,Gg)=>{"use strict";var r$=Bg();Gg.exports=r$});var wi=a((nz,Hg)=>{"use strict";Hg.exports=Ug()});var Mu=a((iz,Vg)=>{"use strict";var Kg=A(),t$=D(),n$=L(),i$=W(),Wg=fr(),a$=Ar(),zg=Function,o$=Kg([].concat),u$=Kg([].join),Nu={},s$=function(e,r,t){if(!i$(Nu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Nu[r]=zg("C,a","return new C("+u$(n,",")+")")}return Nu[r](e,t)};Vg.exports=a$?zg.bind:function(r){var t=t$(this),n=t.prototype,i=Wg(arguments,1),o=function(){var l=o$(i,Wg(arguments));return this instanceof o?s$(t,l.length,l):t.apply(r,l)};return n$(n)&&(o.prototype=n),o}});var Jg=a(()=>{"use strict";var c$=x(),Yg=Mu();c$({target:"Function",proto:!0,forced:Function.bind!==Yg},{bind:Yg})});var Xg=a((uz,Qg)=>{"use strict";Jg();var l$=ue();Qg.exports=l$("Function","bind")});var eb=a((sz,Zg)=>{"use strict";var f$=G(),p$=Xg(),ju=Function.prototype;Zg.exports=function(e){var r=e.bind;return e===ju||f$(ju,e)&&r===ju.bind?p$:r}});var tb=a((cz,rb)=>{"use strict";var v$=eb();rb.exports=v$});var ib=a((lz,nb)=>{"use strict";var d$=tb();nb.exports=d$});var ob=a((fz,ab)=>{"use strict";var m$=ib();ab.exports=m$});var Vt=a((pz,ub)=>{"use strict";ub.exports=ob()});var sb=a(()=>{"use strict";var h$=x(),y$=Ot();h$({target:"Object",stat:!0},{setPrototypeOf:y$})});var lb=a((mz,cb)=>{"use strict";sb();var g$=z();cb.exports=g$.Object.setPrototypeOf});var pb=a((hz,fb)=>{"use strict";var b$=lb();fb.exports=b$});var db=a((yz,vb)=>{"use strict";var q$=pb();vb.exports=q$});var hb=a((gz,mb)=>{"use strict";var x$=db();mb.exports=x$});var Si=a((bz,yb)=>{"use strict";yb.exports=hb()});var bb=a(()=>{"use strict";var w$=x(),S$=U(),gb=ne().f;w$({target:"Object",stat:!0,forced:Object.defineProperty!==gb,sham:!S$},{defineProperty:gb})});var wb=a((wz,xb)=>{"use strict";bb();var T$=z(),qb=T$.Object,O$=xb.exports=function(r,t,n){return qb.defineProperty(r,t,n)};qb.defineProperty.sham&&(O$.sham=!0)});var Tb=a((Sz,Sb)=>{"use strict";var C$=wb();Sb.exports=C$});var Cb=a((Tz,Ob)=>{"use strict";var E$=Tb();Ob.exports=E$});var kb=a((Oz,Eb)=>{"use strict";var k$=Cb();Eb.exports=k$});var Yt=a((Cz,Ib)=>{"use strict";Ib.exports=kb()});var $u=a((Ez,je)=>{var I$=Yt();function Ti(e,r,t,n){var i=I$;try{i({},"",{})}catch{i=0}je.exports=Ti=function(u,l,s,c){function f(p,v){Ti(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:s,enumerable:!c,configurable:!c,writable:!c}):u[l]=s:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,Ti(e,r,t,n)}je.exports=Ti,je.exports.__esModule=!0,je.exports.default=je.exports});var Fu=a((kz,$e)=>{var Pb=Oe(),Lu=wi(),P$=Vt(),_$=xi(),_b=Si(),ke=$u();function Rb(){var e,r,t=typeof Pb=="function"?Pb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=Lu(q.prototype);return ke(b,"_invoke",function(k,E,w){var T,S,C,$=0,xe=w||[],I=!1,re={p:0,n:0,v:e,a:we,f:P$(we).call(we,e,4),d:function(F,me){return T=F,S=0,C=e,re.n=me,u}};function we(J,F){for(S=J,C=F,r=0;!I&&$&&!me&&r<xe.length;r++){var me,O=xe[r],_r=re.p,Ke=O[2];J>3?(me=Ke===F)&&(C=O[(S=O[4])?5:(S=3,3)],O[4]=O[5]=e):O[0]<=_r&&((me=J<2&&_r<O[1])?(S=0,re.v=F,re.n=O[1]):_r<Ke&&(me=J<3||O[0]>F||F>Ke)&&(O[4]=J,O[5]=F,re.n=Ke,S=0))}if(me||J>1)return u;throw I=!0,F}return function(J,F,me){if($>1)throw TypeError("Generator is already running");for(I&&F===1&&we(F,me),S=F,C=me;(r=S<2?e:C)||!I;){T||(S?S<3?(S>1&&(re.n=-1),we(S,C)):re.n=C:re.v=C);try{if($=2,T){if(S||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=T.return)&&r.call(T),S<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),S=1);T=e}else if((r=(I=re.n<0)?C:k.call(E,re))!==u)break}catch(O){T=e,S=1,C=O}finally{$=1}}return{value:r,done:I}}}(d,m,y),!0),b}var u={};function l(){}function s(){}function c(){}r=_$;var f=[][n]?r(r([][n]())):(ke(r={},n,function(){return this}),r),p=c.prototype=l.prototype=Lu(f);function v(d){return _b?_b(d,c):(d.__proto__=c,ke(d,i,"GeneratorFunction")),d.prototype=Lu(p),d}return s.prototype=c,ke(p,"constructor",c),ke(c,"constructor",s),s.displayName="GeneratorFunction",ke(c,i,"GeneratorFunction"),ke(p),ke(p,i,"Generator"),ke(p,n,function(){return this}),ke(p,"toString",function(){return"[object Generator]"}),($e.exports=Rb=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Rb,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Gu=a((Iz,Jt)=>{var R$=Oe(),A$=qi(),N$=Au(),Du=$u();function Bu(e,r){function t(i,o,u,l){try{var s=e[i](o),c=s.value;return c instanceof N$?r.resolve(c.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(c).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Du(Bu.prototype),Du(Bu.prototype,typeof R$=="function"&&A$||"@asyncIterator",function(){return this})),Du(this,"_invoke",function(i,o,u){function l(){return new r(function(s,c){t(i,u,s,c)})}return n=n?n.then(l,l):l()},!0)}Jt.exports=Bu,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Uu=a((Pz,Qt)=>{var M$=it(),j$=Fu(),$$=Gu();function L$(e,r,t,n,i){return new $$(j$().w(e,r,t,n),i||M$)}Qt.exports=L$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Ab=a((_z,Xt)=>{var F$=Uu();function D$(e,r,t,n,i){var o=F$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=D$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var jb=a((Rz,Mb)=>{"use strict";var Nb=Ve(),B$=TypeError;Mb.exports=function(e,r){if(!delete e[r])throw new B$("Cannot delete property "+Nb(r)+" of "+Nb(e))}});var $b=a(()=>{"use strict";var G$=x(),U$=te(),H$=pe(),W$=Ur(),K$=jb(),z$=It(),V$=[].unshift(0)!==1,Y$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},J$=V$||!Y$();G$({target:"Array",proto:!0,arity:1,forced:J$},{unshift:function(r){var t=U$(this),n=H$(t),i=arguments.length;if(i){z$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:K$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return W$(t,n+i)}})});var Fb=a((Mz,Lb)=>{"use strict";$b();var Q$=ue();Lb.exports=Q$("Array","unshift")});var Bb=a((jz,Db)=>{"use strict";var X$=G(),Z$=Fb(),Hu=Array.prototype;Db.exports=function(e){var r=e.unshift;return e===Hu||X$(Hu,e)&&r===Hu.unshift?Z$:r}});var Ub=a(($z,Gb)=>{"use strict";var eL=Bb();Gb.exports=eL});var Wb=a((Lz,Hb)=>{"use strict";var rL=Ub();Hb.exports=rL});var zb=a((Fz,Kb)=>{"use strict";var tL=Wb();Kb.exports=tL});var Yb=a((Dz,Vb)=>{"use strict";Vb.exports=zb()});var Jb=a((Bz,Zt)=>{var nL=Yb();function iL(e){var r=Object(e),t=[];for(var n in r)nL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Zt.exports=iL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Xb=a((Gz,Qb)=>{"use strict";gr();Pt();dr();Po();var aL=Kr();Qb.exports=aL.f("iterator")});var eq=a((Uz,Zb)=>{"use strict";var oL=Xb();br();Zb.exports=oL});var tq=a((Hz,rq)=>{"use strict";var uL=eq();rq.exports=uL});var iq=a((Wz,nq)=>{"use strict";var sL=tq();nq.exports=sL});var en=a((Kz,aq)=>{"use strict";aq.exports=iq()});var oq=a((zz,Le)=>{var Oi=Oe(),cL=en();function Wu(e){"@babel/helpers - typeof";return Le.exports=Wu=typeof Oi=="function"&&typeof cL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Oi=="function"&&r.constructor===Oi&&r!==Oi.prototype?"symbol":typeof r},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Wu(e)}Le.exports=Wu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var uq=a((Vz,rn)=>{var lL=oq().default,fL=Oe(),pL=en();function vL(e){if(e!=null){var r=e[typeof fL=="function"&&pL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(lL(e)+" is not iterable")}rn.exports=vL,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var lq=a((Yz,Fe)=>{var sq=xi(),dL=Ng(),mL=Au(),hL=Fu(),yL=Ab(),gL=Uu(),bL=Gu(),qL=Jb(),cq=uq();function Ku(){"use strict";var e=hL(),r=e.m(Ku),t=(sq?sq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,s;return function(c){l||(l={stop:function(){return s(c.a,2)},catch:function(){return c.v},abrupt:function(p,v){return s(c.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,s(c.d,cq(p),d)},finish:function(p){return s(c.f,p)}},s=function(p,v,d){c.p=l.prev,c.n=l.next;try{return p(v,d)}finally{l.next=c.n}}),l.resultName&&(l[l.resultName]=c.v,l.resultName=void 0),l.sent=c.v,l.next=c.n;try{return u.call(this,l)}finally{c.p=l.prev,c.n=l.next}}}return(Fe.exports=Ku=function(){return{wrap:function(s,c,f,p){return e.w(o(s),c,f,p&&dL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,c){return new mL(s,c)},AsyncIterator:bL,async:function(s,c,f,p,v){return(n(c)?gL:yL)(o(s),c,f,p,v)},keys:qL,values:cq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Ku,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var ce=a((Jz,fq)=>{var Ci=lq()();fq.exports=Ci;try{regeneratorRuntime=Ci}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ci:Function("r","regeneratorRuntime = r")(Ci)}});var zu=a((ki,vq)=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});var Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),s;!(i=(s=l.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(c){o=!0,u=c}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();ki.default=xL;function xL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,s,c){return l[c]={name:s,value:i[s]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return tr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return tr([this],function(u){var l=u.attribs.class;l&&i.every(function(s){return l.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=wL(n),u=o.shift(),l=o.length;return u(this).filter(function(s){for(var c=0;c<l;){if(s=o[c](s,i),!s)return!1;c+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return tr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function wL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=pq(i,2),u=o[0],l=o[1],s=null,c=null;if(function(){switch(!0){case/>/.test(u):c=function(w){return function(T){return T(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var T=w.attribs.class;return T&&h.every(function(S){return T.indexOf(S)>-1})},c=function(w,T){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):tn(w,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=pq(m,2),q=y[0],b=y[1];s=function(w){var T=Object.keys(w.attribs).indexOf(q)>-1;return!!(T&&(!b||w.attribs[q]===b))},c=function(w,T){if(n){var S=function(){var C=[];return tr([w],function($){s($)&&C.push($)}),{v:C}}();if((typeof S>"u"?"undefined":Ei(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(w){return w.attribs.id===k},c=function(w,T){if(n){var S=function(){var C=[];return tr([w],function($,xe){s($)&&(C.push($),xe())}),{v:C}}();if((typeof S>"u"?"undefined":Ei(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,T,s)};break;case/\*/.test(u):s=function(w){return!0},c=function(w,T){if(n){var S=function(){var C=[];return tr([w],function($){return C.push($)}),{v:C}}();if((typeof S>"u"?"undefined":Ei(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,T,s)};break;default:s=function(w){return w.name===u},c=function(w,T){if(n){var S=function(){var C=[];return tr([w],function($){s($)&&C.push($)}),{v:C}}();if((typeof S>"u"?"undefined":Ei(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,T,s)}}}(),!l)return c;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(s));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=c(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function tr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&tr(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}vq.exports=ki.default});var Pi=a(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.convertNodeList=SL;Ii.escapeValue=TL;function SL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function TL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Sq=a((_i,wq)=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.default=OL;var yq=Pi(),dq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function OL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,s=r.ignore,c=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(k){return k(b)})};for(Object.keys(c).forEach(function(q){q==="class"&&(d=!0);var b=c[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,yq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),c[q]=function(k,E){return b.test(E)})}),d&&function(){var q=c.attribute;c.attribute=function(b,k,E){return c.class(k)||q&&q(b,k,E)}}();p!==n;){if(m(p)!==!0){if(mq(l,p,c,f,n)||hq(p,c,f,n))break;mq(l,p,c,f),f.length===v&&hq(p,c,f),f.length===v&&CL(l,p,c,f)}p=p.parentNode,v=f.length}if(p===n){var y=qq(l,p,c);f.unshift(y)}return f.join(" ")}function mq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=gq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function gq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],s=n[l],c=s.name,f=(0,yq.escapeValue)(s.value),p=t[c]||t.attribute,v=dq[c]||dq.attribute;if(!xq(p,c,f,v)){var d="["+c+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(c==="id"&&(d="#"+f),c==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function hq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=bq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function bq(e,r){var t=e.tagName.toLowerCase();return xq(r.tag,null,t)?null:t}function CL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var s=o[u];if(s===r){var c=qq(e,s,t);if(!c)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,c);var f="> "+c+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function qq(e,r,t){var n=gq(e,r,t);return n||(n=bq(r,t)),n}function xq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}wq.exports=_i.default});var Vu=a((Ai,Tq)=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default=_L;var EL=zu(),kL=PL(EL),IL=Pi();function PL(e){return e&&e.__esModule?e:{default:e}}function _L(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,IL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,kL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ri("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),s=o.join(" "),c=l+" "+s,f=document.querySelectorAll(c);f.length!==r.length&&o.unshift(Ri(l,u,s,r))}return o.unshift(i[0]),i=o,i[0]=Ri("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ri(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ri(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(at(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),s=function(){var E=l[c];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),at(u,n)&&(r=w),"break"}},c=0,f=l.length;c<f;c++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);at(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);at(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,E){return k.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);at(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[c];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),at(u,n)&&(r=w),"break"}},c=0,f=y.length;c<f;c++){var o,u,b=q();if(b==="break")break}}return r}function at(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}Tq.exports=Ai.default});var Yu=a(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.getCommonAncestor=RL;Ni.getCommonProperties=AL;function RL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[s],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},s=0,c=o.length;s<c;s++){var f=l();if(f==="break")break}return u}function AL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(c){return c===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,c=Object.keys(s).reduce(function(v,d){var h=s[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(c),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===c[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=c:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Pq=a(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var NL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=Qu;nn.getMultiSelector=Iq;nn.default=DL;var ML=zu(),Cq=Ju(ML),jL=Sq(),$L=Ju(jL),LL=Vu(),Eq=Ju(LL),Oq=Pi(),kq=Yu();function Ju(e){return e&&e.__esModule?e:{default:e}}function Qu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":NL(e))+'")');var t=(0,Cq.default)(e,r),n=(0,$L.default)(e,r),i=(0,Eq.default)(n,e,r);return t&&delete global.document,i}function Iq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Oq.convertNodeList)(e)),e.some(function(c){return c.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Cq.default)(e[0],r),n=(0,kq.getCommonAncestor)(e,r),i=Qu(n,r),o=FL(e),u=o[0],l=(0,Eq.default)(i+" "+u,e,r),s=(0,Oq.convertNodeList)(document.querySelectorAll(l));return e.every(function(c){return s.some(function(f){return f===c})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function FL(e){var r=(0,kq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(s,c){return s.push("["+c+'="'+n[c]+'"]'),s},[]).join("");o.push(l)}return o.length,[o.join("")]}function DL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Iq(e,r):Qu(e,r)}});var Aq=a(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Xu=Pq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Xu.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Xu.getMultiSelector}});var _q=Rq(Xu),BL=Vu(),GL=Rq(BL),UL=Yu(),HL=WL(UL);function WL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Rq(e){return e&&e.__esModule?e:{default:e}}ae.select=_q.default;ae.optimize=GL.default;ae.common=HL;ae.default=_q.default});var Nq=a(()=>{"use strict";var rF=x(),tF=_e();rF({target:"Array",stat:!0},{isArray:tF})});var jq=a((vV,Mq)=>{"use strict";Nq();var nF=z();Mq.exports=nF.Array.isArray});var Lq=a((dV,$q)=>{"use strict";var iF=jq();$q.exports=iF});var Dq=a((mV,Fq)=>{"use strict";var aF=Lq();Fq.exports=aF});var Gq=a((hV,Bq)=>{"use strict";var oF=Dq();Bq.exports=oF});var Hq=a((yV,Uq)=>{"use strict";Uq.exports=Gq()});var zq=a(()=>{"use strict";var uF=x(),sF=te(),cF=pe(),lF=Ur(),fF=It(),pF=P(),vF=pF(function(){return[].push.call({length:4294967296},1)!==4294967297}),dF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},mF=vF||!dF();uF({target:"Array",proto:!0,arity:1,forced:mF},{push:function(r){var t=sF(this),n=cF(t),i=arguments.length;fF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return lF(t,n),n}})});var Yq=a((xV,Vq)=>{"use strict";zq();var hF=ue();Vq.exports=hF("Array","push")});var Qq=a((wV,Jq)=>{"use strict";var yF=G(),gF=Yq(),Zu=Array.prototype;Jq.exports=function(e){var r=e.push;return e===Zu||yF(Zu,e)&&r===Zu.push?gF:r}});var Zq=a((SV,Xq)=>{"use strict";var bF=Qq();Xq.exports=bF});var rx=a((TV,ex)=>{"use strict";var qF=Zq();ex.exports=qF});var nx=a((OV,tx)=>{"use strict";var xF=rx();tx.exports=xF});var es=a((CV,ix)=>{"use strict";ix.exports=nx()});var mx=a(()=>{"use strict";var wF=x(),SF=Rt().map,TF=xt(),OF=TF("map");wF({target:"Array",proto:!0,forced:!OF},{map:function(r){return SF(this,r,arguments.length>1?arguments[1]:void 0)}})});var yx=a((e7,hx)=>{"use strict";mx();var CF=ue();hx.exports=CF("Array","map")});var bx=a((r7,gx)=>{"use strict";var EF=G(),kF=yx(),ts=Array.prototype;gx.exports=function(e){var r=e.map;return e===ts||EF(ts,e)&&r===ts.map?kF:r}});var xx=a((t7,qx)=>{"use strict";var IF=bx();qx.exports=IF});var Sx=a((n7,wx)=>{"use strict";var PF=xx();wx.exports=PF});var Ox=a((i7,Tx)=>{"use strict";var _F=Sx();Tx.exports=_F});var Ex=a((a7,Cx)=>{"use strict";Cx.exports=Ox()});var Ix=a((o7,kx)=>{kx.exports=Ex()});var _x=a((u7,Px)=>{Px.exports=it()});var jx=a((s7,Mx)=>{"use strict";var RF=D(),AF=te(),NF=xn(),MF=pe(),Rx=TypeError,Ax="Reduce of empty array with no initial value",Nx=function(e){return function(r,t,n,i){var o=AF(r),u=NF(o),l=MF(o);if(RF(t),l===0&&n<2)throw new Rx(Ax);var s=e?l-1:0,c=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=c;break}if(s+=c,e?s<0:l<=s)throw new Rx(Ax)}for(;e?s>=0:l>s;s+=c)s in u&&(i=t(i,u[s],s,o));return i}};Mx.exports={left:Nx(!1),right:Nx(!0)}});var ns=a((c7,$x)=>{"use strict";var jF=P();$x.exports=function(e,r){var t=[][e];return!!t&&jF(function(){t.call(null,r||function(){return 1},1)})}});var Fx=a(()=>{"use strict";var $F=x(),LF=jx().left,FF=ns(),Lx=jr(),DF=Lt(),BF=!DF&&Lx>79&&Lx<83,GF=BF||!FF("reduce");$F({target:"Array",proto:!0,forced:GF},{reduce:function(r){var t=arguments.length;return LF(this,r,t,t>1?arguments[1]:void 0)}})});var Bx=a((p7,Dx)=>{"use strict";Fx();var UF=ue();Dx.exports=UF("Array","reduce")});var Ux=a((v7,Gx)=>{"use strict";var HF=G(),WF=Bx(),is=Array.prototype;Gx.exports=function(e){var r=e.reduce;return e===is||HF(is,e)&&r===is.reduce?WF:r}});var Wx=a((d7,Hx)=>{"use strict";var KF=Ux();Hx.exports=KF});var zx=a((m7,Kx)=>{"use strict";var zF=Wx();Kx.exports=zF});var Yx=a((h7,Vx)=>{"use strict";var VF=zx();Vx.exports=VF});var Qx=a((y7,Jx)=>{"use strict";Jx.exports=Yx()});var Zx=a((g7,Xx)=>{Xx.exports=Qx()});var tw=a((b7,rw)=>{"use strict";var YF=_e(),JF=pe(),QF=It(),XF=V(),ZF=Gr(),ew=function(e,r,t,n,i,o,u,l){for(var s=i,c=0,f=u?XF(u,l):!1,p,v;c<n;)c in t&&(p=f?f(t[c],c,r):t[c],o>0&&YF(p)?(v=JF(p),s=ew(e,r,p,v,s,o-1)-1):(QF(s+1),ZF(e,s,p)),s++),c++;return s};rw.exports=ew});var nw=a(()=>{"use strict";var eD=x(),rD=tw(),tD=D(),nD=te(),iD=pe(),aD=Gn();eD({target:"Array",proto:!0},{flatMap:function(r){var t=nD(this),n=iD(t),i;return tD(r),i=aD(t,0),rD(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var iw=a(()=>{"use strict";var oD=Ro();oD("flatMap")});var ow=a((T7,aw)=>{"use strict";nw();iw();var uD=ue();aw.exports=uD("Array","flatMap")});var sw=a((O7,uw)=>{"use strict";var sD=G(),cD=ow(),as=Array.prototype;uw.exports=function(e){var r=e.flatMap;return e===as||sD(as,e)&&r===as.flatMap?cD:r}});var lw=a((C7,cw)=>{"use strict";var lD=sw();cw.exports=lD});var pw=a((E7,fw)=>{"use strict";var fD=lw();fw.exports=fD});var dw=a((k7,vw)=>{"use strict";var pD=pw();vw.exports=pD});var hw=a((I7,mw)=>{"use strict";mw.exports=dw()});var gw=a((P7,yw)=>{yw.exports=hw()});var qw=a((_7,bw)=>{"use strict";to();var vD=ue();bw.exports=vD("Array","concat")});var ww=a((R7,xw)=>{"use strict";var dD=G(),mD=qw(),os=Array.prototype;xw.exports=function(e){var r=e.concat;return e===os||dD(os,e)&&r===os.concat?mD:r}});var Tw=a((A7,Sw)=>{"use strict";var hD=ww();Sw.exports=hD});var Cw=a((N7,Ow)=>{"use strict";var yD=Tw();Ow.exports=yD});var kw=a((M7,Ew)=>{"use strict";var gD=Cw();Ew.exports=gD});var Pw=a((j7,Iw)=>{"use strict";Iw.exports=kw()});var us=a(($7,_w)=>{_w.exports=Pw()});var Nw=a(()=>{});var jw=a((o9,Mw)=>{"use strict";Nw();_o();var kD=Kr();Mw.exports=kD.f("toPrimitive")});var Lw=a((u9,$w)=>{"use strict";var ID=jw();$w.exports=ID});var Dw=a((s9,Fw)=>{"use strict";var PD=Lw();Fw.exports=PD});var Gw=a((c9,Bw)=>{"use strict";var _D=Dw();Bw.exports=_D});var Hw=a((l9,Uw)=>{"use strict";Uw.exports=Gw()});var Zw=a((_9,Xw)=>{"use strict";var AD=L(),ND=Se(),MD=R(),jD=MD("match");Xw.exports=function(e){var r;return AD(e)&&((r=e[jD])!==void 0?!!r:ND(e)==="RegExp")}});var rS=a((R9,eS)=>{"use strict";var $D=Zw(),LD=TypeError;eS.exports=function(e){if($D(e))throw new LD("The method doesn't accept regular expressions");return e}});var nS=a((A9,tS)=>{"use strict";var FD=R(),DD=FD("match");tS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[DD]=!1,"/./"[e](r)}catch{}}return!1}});var oS=a(()=>{"use strict";var BD=x(),GD=vt(),UD=mt().f,HD=Ca(),iS=Ye(),WD=rS(),KD=sr(),zD=nS(),VD=ee(),YD=GD("".slice),JD=Math.min,aS=zD("startsWith"),QD=!VD&&!aS&&!!function(){var e=UD(String.prototype,"startsWith");return e&&!e.writable}();BD({target:"String",proto:!0,forced:!QD&&!aS},{startsWith:function(r){var t=iS(KD(this));WD(r);var n=HD(JD(arguments.length>1?arguments[1]:void 0,t.length)),i=iS(r);return YD(t,n,n+i.length)===i}})});var sS=a((j9,uS)=>{"use strict";oS();var XD=ue();uS.exports=XD("String","startsWith")});var lS=a(($9,cS)=>{"use strict";var ZD=G(),eB=sS(),fs=String.prototype;cS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===fs||ZD(fs,e)&&r===fs.startsWith?eB:r}});var pS=a((L9,fS)=>{"use strict";var rB=lS();fS.exports=rB});var dS=a((F9,vS)=>{"use strict";var tB=pS();vS.exports=tB});var hS=a((D9,mS)=>{"use strict";var nB=dS();mS.exports=nB});var gS=a((B9,yS)=>{"use strict";yS.exports=hS()});var qS=a((G9,bS)=>{bS.exports=gS()});var xS=a(()=>{"use strict";var iB=x(),aB=Rt().filter,oB=xt(),uB=oB("filter");iB({target:"Array",proto:!0,forced:!uB},{filter:function(r){return aB(this,r,arguments.length>1?arguments[1]:void 0)}})});var SS=a((W9,wS)=>{"use strict";xS();var sB=ue();wS.exports=sB("Array","filter")});var OS=a((K9,TS)=>{"use strict";var cB=G(),lB=SS(),ps=Array.prototype;TS.exports=function(e){var r=e.filter;return e===ps||cB(ps,e)&&r===ps.filter?lB:r}});var ES=a((z9,CS)=>{"use strict";var fB=OS();CS.exports=fB});var IS=a((V9,kS)=>{"use strict";var pB=ES();kS.exports=pB});var _S=a((Y9,PS)=>{"use strict";var vB=IS();PS.exports=vB});var AS=a((J9,RS)=>{"use strict";RS.exports=_S()});var MS=a((Q9,NS)=>{NS.exports=AS()});var QS=a(()=>{"use strict";var xB=x(),wB=H(),ds=Nr(),SB=Mu(),WS=Ko(),TB=Q(),KS=L(),OB=Qe(),VS=P(),ms=wB("Reflect","construct"),CB=Object.prototype,EB=[].push,YS=VS(function(){function e(){}return!(ms(function(){},[],e)instanceof e)}),JS=!VS(function(){ms(function(){})}),zS=YS||JS;xB({target:"Reflect",stat:!0,forced:zS,sham:zS},{construct:function(r,t){WS(r),TB(t);var n=arguments.length<3?r:WS(arguments[2]);if(JS&&!YS)return ms(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ds(EB,i,t),new(ds(SB,r,i))}var o=n.prototype,u=OB(KS(o)?o:CB),l=ds(r,u,t);return KS(l)?l:u}})});var ZS=a((_Y,XS)=>{"use strict";QS();var kB=z();XS.exports=kB.Reflect.construct});var rT=a((RY,eT)=>{"use strict";var IB=ZS();eT.exports=IB});var nT=a((AY,tT)=>{"use strict";var PB=rT();tT.exports=PB});var aT=a((NY,iT)=>{"use strict";var _B=nT();iT.exports=_B});var Bi=a((MY,oT)=>{"use strict";oT.exports=aT()});var sT=a((jY,uT)=>{uT.exports=Bi()});var yT=a((WY,hT)=>{"use strict";var RB=P();hT.exports=RB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var qT=a((KY,bT)=>{"use strict";var AB=P(),NB=L(),MB=Se(),gT=yT(),Gi=Object.isExtensible,jB=AB(function(){Gi(1)});bT.exports=jB||gT?function(r){return!NB(r)||gT&&MB(r)==="ArrayBuffer"?!1:Gi?Gi(r):!0}:Gi});var wT=a((zY,xT)=>{"use strict";var $B=P();xT.exports=!$B(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ws=a((VY,OT)=>{"use strict";var LB=x(),FB=A(),DB=Wr(),BB=L(),bs=W(),GB=ne().f,ST=_t(),UB=no(),qs=qT(),HB=Lr(),WB=wT(),TT=!1,Ge=HB("meta"),KB=0,xs=function(e){GB(e,Ge,{value:{objectID:"O"+KB++,weakData:{}}})},zB=function(e,r){if(!BB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!bs(e,Ge)){if(!qs(e))return"F";if(!r)return"E";xs(e)}return e[Ge].objectID},VB=function(e,r){if(!bs(e,Ge)){if(!qs(e))return!0;if(!r)return!1;xs(e)}return e[Ge].weakData},YB=function(e){return WB&&TT&&qs(e)&&!bs(e,Ge)&&xs(e),e},JB=function(){QB.enable=function(){},TT=!0;var e=ST.f,r=FB([].splice),t={};t[Ge]=1,e(t).length&&(ST.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Ge){r(i,o,1);break}return i},LB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:UB.f}))},QB=OT.exports={enable:JB,fastKey:zB,getWeakData:VB,onFreeze:YB};DB[Ge]=!0});var kT=a((YY,ET)=>{"use strict";var XB=x(),ZB=_(),e3=ws(),r3=P(),t3=Te(),n3=de(),i3=li(),a3=N(),o3=L(),u3=ur(),s3=Ne(),c3=ne().f,l3=Rt().forEach,f3=U(),CT=Je(),p3=CT.set,v3=CT.getterFor;ET.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=ZB[e],l=u&&u.prototype,s={},c;if(!f3||!a3(u)||!(i||l.forEach&&!r3(function(){new u().entries().next()})))c=t.getConstructor(r,e,n,o),e3.enable();else{c=r(function(v,d){p3(i3(v,f),{type:e,collection:new u}),u3(d)||n3(d,v[o],{that:v,AS_ENTRIES:n})});var f=c.prototype,p=v3(e);l3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&t3(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!o3(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||c3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return s3(c,e,!1,!0),s[e]=c,XB({global:!0,forced:!0},s),i||t.setStrong(c,e,n),c}});var PT=a((JY,IT)=>{"use strict";var d3=Re();IT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:d3(e,n,r[n],t);return e}});var $T=a((QY,jT)=>{"use strict";var _T=Qe(),m3=Hn(),RT=PT(),h3=V(),y3=li(),g3=ur(),b3=de(),q3=Ln(),Ui=Fn(),x3=Wo(),ln=U(),AT=ws().fastKey,MT=Je(),NT=MT.set,Ss=MT.getterFor;jT.exports={getConstructor:function(e,r,t,n){var i=e(function(c,f){y3(c,o),NT(c,{type:r,index:_T(null),first:null,last:null,size:0}),ln||(c.size=0),g3(f)||b3(f,c[n],{that:c,AS_ENTRIES:t})}),o=i.prototype,u=Ss(r),l=function(c,f,p){var v=u(c),d=s(c,f),h,m;return d?d.value=p:(v.last=d={index:m=AT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),ln?v.size++:c.size++,m!=="F"&&(v.index[m]=d)),c},s=function(c,f){var p=u(c),v=AT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return RT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=_T(null),ln?p.size=0:f.size=0},delete:function(c){var f=this,p=u(f),v=s(f,c);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),ln?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=h3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),RT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),ln&&m3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=Ss(r),o=Ss(n);q3(e,r,function(u,l){NT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ui(void 0,!0)):Ui(l==="keys"?s.key:l==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),x3(r)}}});var LT=a(()=>{"use strict";var w3=kT(),S3=$T();w3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},S3)});var FT=a(()=>{"use strict";LT()});var BT=a((tJ,DT)=>{"use strict";DT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var oe=a((nJ,UT)=>{"use strict";var T3=H(),Hi=BT(),GT=T3("Map");UT.exports={Map:GT,set:Hi("set",2),get:Hi("get",1),has:Hi("has",1),remove:Hi("delete",1),proto:GT.prototype}});var Ts=a(()=>{"use strict";var O3=x(),C3=A(),E3=D(),k3=sr(),I3=de(),Wi=oe(),HT=ee(),P3=P(),WT=Wi.Map,_3=Wi.has,R3=Wi.get,A3=Wi.set,N3=C3([].push),M3=HT||P3(function(){return WT.groupBy("ab",function(e){return e}).get("a").length!==1});O3({target:"Map",stat:!0,forced:HT||M3},{groupBy:function(r,t){k3(r),E3(t);var n=new WT,i=0;return I3(r,function(o){var u=t(o,i++);_3(n,u)?N3(R3(n,u),o):A3(n,u,[o])}),n}})});var Y=a((oJ,KT)=>{"use strict";var j3=Ve(),$3=TypeError;KT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new $3(j3(e)+" is not a map")}});var Cs=a(()=>{"use strict";var L3=x(),F3=Y(),Os=oe(),D3=ee(),B3=Os.get,G3=Os.has,U3=Os.set;L3({target:"Map",proto:!0,real:!0,forced:D3},{getOrInsert:function(r,t){return G3(F3(this),r)?B3(this,r):(U3(this,r,t),t)}})});var ks=a(()=>{"use strict";var H3=x(),W3=D(),K3=Y(),Es=oe(),z3=ee(),V3=Es.get,Y3=Es.has,J3=Es.set;H3({target:"Map",proto:!0,real:!0,forced:z3},{getOrInsertComputed:function(r,t){if(K3(this),W3(t),Y3(this,r))return V3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return J3(this,r,n),n}})});var VT=a((fJ,zT)=>{"use strict";gr();FT();Ts();Cs();ks();Pt();dr();var Q3=z();zT.exports=Q3.Map});var JT=a((pJ,YT)=>{"use strict";var X3=VT();br();YT.exports=X3});var Is=a(()=>{"use strict";Cs()});var Ps=a(()=>{"use strict";ks()});var QT=a(()=>{"use strict";Ts()});var ZT=a((bJ,XT)=>{"use strict";var Z3=JT();Is();Ps();QT();XT.exports=Z3});var rO=a((qJ,eO)=>{"use strict";var e4=V(),r4=Q(),t4=te(),n4=de();eO.exports=function(e,r,t){return function(i){var o=t4(i),u=arguments.length,l=u>1?arguments[1]:void 0,s=l!==void 0,c=s?e4(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return n4(o,function(v){var d=s?c(v,p++):v;t?r(f,r4(d)[0],d[1]):r(f,d)}),f}}});var nO=a(()=>{"use strict";var i4=x(),tO=oe(),a4=rO();i4({target:"Map",stat:!0,forced:!0},{from:a4(tO.Map,tO.set,!0)})});var aO=a((SJ,iO)=>{"use strict";var o4=Q();iO.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,o4(l)[0],l[1]):r(i,l)}return i}}});var uO=a(()=>{"use strict";var u4=x(),oO=oe(),s4=aO();u4({target:"Map",stat:!0,forced:!0},{of:s4(oO.Map,oO.set,!0)})});var cO=a(()=>{"use strict";var c4=x(),l4=B(),f4=de(),p4=N(),sO=D(),v4=oe().Map;c4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=p4(this)?this:v4,i=new n;sO(t);var o=sO(i.set);return f4(r,function(u){l4(o,i,t(u),u)}),i}})});var lO=a(()=>{"use strict";var d4=x(),m4=Y(),h4=oe().remove;d4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=m4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=h4(r,arguments[i]),t=t&&n;return!!t}})});var pO=a(()=>{"use strict";var y4=x(),g4=Y(),_s=oe(),b4=_s.get,q4=_s.has,fO=_s.set;y4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=g4(this),i,o;return q4(n,r)?(i=b4(n,r),"update"in t&&(i=t.update(i,r,n),fO(n,r,i)),i):(o=t.insert(r,n),fO(n,r,o),o)}})});var dO=a((RJ,vO)=>{"use strict";var x4=B();vO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=x4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ge=a((AJ,mO)=>{"use strict";var w4=dO();mO.exports=function(e,r,t){return t?w4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var hO=a(()=>{"use strict";var S4=x(),T4=V(),O4=Y(),C4=ge();S4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=O4(this),n=T4(r,arguments.length>1?arguments[1]:void 0);return C4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var gO=a(()=>{"use strict";var E4=x(),k4=V(),I4=Y(),yO=oe(),P4=ge(),_4=yO.Map,R4=yO.set;E4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=I4(this),n=k4(r,arguments.length>1?arguments[1]:void 0),i=new _4;return P4(t,function(o,u){n(o,u,t)&&R4(i,u,o)}),i}})});var bO=a(()=>{"use strict";var A4=x(),N4=V(),M4=Y(),j4=ge();A4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=M4(this),n=N4(r,arguments.length>1?arguments[1]:void 0),i=j4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var qO=a(()=>{"use strict";var $4=x(),L4=V(),F4=Y(),D4=ge();$4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=F4(this),n=L4(r,arguments.length>1?arguments[1]:void 0),i=D4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var wO=a((GJ,xO)=>{"use strict";xO.exports=function(e,r){return e===r||e!==e&&r!==r}});var SO=a(()=>{"use strict";var B4=x(),G4=wO(),U4=Y(),H4=ge();B4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return H4(U4(this),function(t){if(G4(t,r))return!0},!0)===!0}})});var TO=a(()=>{"use strict";var W4=x(),K4=Y(),z4=ge();W4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=z4(K4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var CO=a(()=>{"use strict";var V4=x(),Y4=V(),J4=Y(),OO=oe(),Q4=ge(),X4=OO.Map,Z4=OO.set;V4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=J4(this),n=Y4(r,arguments.length>1?arguments[1]:void 0),i=new X4;return Q4(t,function(o,u){Z4(i,n(o,u,t),o)}),i}})});var kO=a(()=>{"use strict";var eG=x(),rG=V(),tG=Y(),EO=oe(),nG=ge(),iG=EO.Map,aG=EO.set;eG({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=tG(this),n=rG(r,arguments.length>1?arguments[1]:void 0),i=new iG;return nG(t,function(o,u){aG(i,u,n(o,u,t))}),i}})});var IO=a(()=>{"use strict";var oG=x(),uG=Y(),sG=de(),cG=oe().set;oG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=uG(this),n=arguments.length,i=0;i<n;)sG(arguments[i++],function(o,u){cG(t,o,u)},{AS_ENTRIES:!0});return t}})});var PO=a(()=>{"use strict";var lG=x(),fG=D(),pG=Y(),vG=ge(),dG=TypeError;lG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=pG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(fG(r),vG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new dG("Reduce of empty map with no initial value");return i}})});var _O=a(()=>{"use strict";var mG=x(),hG=V(),yG=Y(),gG=ge();mG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=yG(this),n=hG(r,arguments.length>1?arguments[1]:void 0);return gG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var AO=a(()=>{"use strict";var bG=x(),RO=D(),qG=Y(),Rs=oe(),xG=TypeError,wG=Rs.get,SG=Rs.has,TG=Rs.set;bG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=qG(this),i=arguments.length;RO(t);var o=SG(n,r);if(!o&&i<3)throw new xG("Updating absent value");var u=o?wG(n,r):RO(i>2?arguments[2]:void 0)(r,n);return TG(n,r,t(u,r,n)),n}})});var Ns=a((aQ,NO)=>{"use strict";var Ki=B(),As=D(),zi=N(),OG=Q(),CG=TypeError;NO.exports=function(r,t){var n=OG(this),i=As(n.get),o=As(n.has),u=As(n.set),l=arguments.length>2?arguments[2]:void 0,s;if(!zi(t)&&!zi(l))throw new CG("At least one callback required");return Ki(o,n,r)?(s=Ki(i,n,r),zi(t)&&(s=t(s),Ki(u,n,r,s))):zi(l)&&(s=l(),Ki(u,n,r,s)),s}});var MO=a(()=>{"use strict";var EG=x(),kG=Ns();EG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:kG})});var jO=a(()=>{"use strict";var IG=x(),PG=Ns();IG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:PG})});var LO=a((lQ,$O)=>{"use strict";var _G=ZT();nO();uO();cO();lO();pO();hO();gO();bO();qO();SO();Is();Ps();TO();CO();kO();IO();PO();_O();AO();MO();jO();$O.exports=_G});var DO=a((fQ,FO)=>{"use strict";FO.exports=LO()});var GO=a(()=>{"use strict";var RG=x(),AG=vt(),NG=ja().indexOf,MG=ns(),Ms=AG([].indexOf),BO=!!Ms&&1/Ms([1],1,-0)<0,jG=BO||!MG("indexOf");RG({target:"Array",proto:!0,forced:jG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return BO?Ms(this,r,t)||0:NG(this,r,t)}})});var HO=a((dQ,UO)=>{"use strict";GO();var $G=ue();UO.exports=$G("Array","indexOf")});var KO=a((mQ,WO)=>{"use strict";var LG=G(),FG=HO(),js=Array.prototype;WO.exports=function(e){var r=e.indexOf;return e===js||LG(js,e)&&r===js.indexOf?FG:r}});var VO=a((hQ,zO)=>{"use strict";var DG=KO();zO.exports=DG});var JO=a((yQ,YO)=>{"use strict";var BG=VO();YO.exports=BG});var XO=a((gQ,QO)=>{"use strict";var GG=JO();QO.exports=GG});var eC=a((bQ,ZO)=>{"use strict";ZO.exports=XO()});var yC=a(()=>{"use strict";var VG=x(),YG=te(),hC=An(),JG=P(),QG=JG(function(){hC(1)});VG({target:"Object",stat:!0,forced:QG},{keys:function(r){return hC(YG(r))}})});var bC=a((TX,gC)=>{"use strict";yC();var XG=z();gC.exports=XG.Object.keys});var xC=a((OX,qC)=>{"use strict";var ZG=bC();qC.exports=ZG});var SC=a((CX,wC)=>{"use strict";var e5=xC();wC.exports=e5});var OC=a((EX,TC)=>{"use strict";var r5=SC();TC.exports=r5});var EC=a((kX,CC)=>{"use strict";CC.exports=OC()});var IC=a((IX,kC)=>{kC.exports=EC()});var Rr="";function Zs(e){Rr=e.replace(/\/+$/,"")}async function ft(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function ec(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Rr}/comments?${t}`);return await ft(n,"Failed to fetch comments"),(await n.json()).data}async function ea({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let s={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?s.document=r:s.uri=e;let c=await fetch(`${Rr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await ft(c,"Failed to create comment"),c.json()}async function rc(e,{body:r}){let t=await fetch(`${Rr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ft(t,"Failed to update comment"),t.json()}async function tc(e,r){let t=await fetch(`${Rr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ft(t,"Failed to update comment status"),t.json()}async function nc(e){let r=await fetch(`${Rr}/comments/${e}`,{method:"DELETE"});await ft(r,"Failed to delete comment")}var VL=g(Hr(),1),YL=g(Bn(),1),JL=g(ni(),1),QL=g(ii(),1),XL=g(ai(),1);var Pu=g(it(),1);function Xy(e,r,t,n,i,o,u){try{var l=e[o](u),s=l.value}catch(c){return void t(c)}l.done?r(s):Pu.default.resolve(s).then(n,i)}function Tr(e){return function(){var r=this,t=arguments;return new Pu.default(function(n,i){var o=e.apply(r,t);function u(s){Xy(o,n,i,u,l,"next",s)}function l(s){Xy(o,n,i,u,l,"throw",s)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function rr(e){return new Wt(e,0)}var _u=g(it(),1),sg=g(Oe(),1),cg=g(qi(),1);function Ee(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var l=e[o](u),s=l.value,c=s instanceof Wt;_u.default.resolve(c?s.v:s).then(function(f){if(c){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new _u.default(function(l,s){var c={key:o,arg:u,resolve:l,reject:s,next:null};t?t=t.next=c:(r=t=c,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof sg.default=="function"&&cg.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var ZL=g(ce(),1),eF=g(Aq(),1);function le(e){var r,t=KL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function KL(e){return"startContainer"in e}function nr(e){if(zL(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function zL(e){return"startContainer"in e}var Wq=g(Hq(),1);function Kq(e){if((0,Wq.default)(e))return e}var ax=g(Oe(),1),ox=g(Fo(),1),ux=g(es(),1);function sx(e,r){var t=e==null?null:typeof ax.default<"u"&&(0,ox.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,ux.default)(l).call(l,n.value),l.length!==r);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw i}}return l}}var cx=g(Ia(),1),lx=g(ro(),1);function Mi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function rs(e,r){if(e){var t;if(typeof e=="string")return Mi(e,r);var n=(0,cx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,lx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Mi(e,r):void 0}}function fx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Kq(e)||sx(e,r)||rs(e,r)||fx()}var px=g(Oe(),1),vx=g(qi(),1),dx=g(en(),1),an=g(it(),1);function ot(e){var r,t,n,i=2;for(typeof px.default<"u"&&(t=vx.default,n=dx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ji(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ji(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return ji=function(n){this.s=n,this.n=n.next},ji.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?an.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?an.default.reject(n):r(i.apply(this.s,arguments))}},new ji(e)}var ED=g(ce(),1);var xD=g(ce(),1),wD=g(Ix(),1),SD=g(_x(),1),TD=g(Zx(),1),OD=g(gw(),1),CD=g(us(),1);var Fs=g(ce(),1);var qB=g(ce(),1);var cs=g(ce(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Rw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Or(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ss=g(Yt(),1);var un=g(Oe(),1),Aw=g(en(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof un.default=="function"&&typeof Aw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},Be(e)}var Ww=g(Hw(),1);function Kw(e,r){if(Be(e)!="object"||!e)return e;var t=e[Ww.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $i(e){var r=Kw(e,"string");return Be(r)=="symbol"?r:r+""}function zw(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ss.default)(e,$i(n.key),n)}}function sn(e,r,t){return r&&zw(e.prototype,r),t&&zw(e,t),(0,ss.default)(e,"prototype",{writable:!1}),e}var Vw=g(Yt(),1);function Cr(e,r,t){return(r=$i(r))in e?(0,Vw.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Yw=g(Hr(),1);var Li="Iterator exhausted before seek ended.",cn=function(){function e(r){Or(this,e),this.chunker=r,Cr(this,"currentChunkPosition",0),Cr(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Li)}else for(;!on(this.currentChunk,n);){var l=this._readToNextChunk(),s=De(l,2),c=s[0],f=s[1];if(t&&(u+=c),f===null)throw new RangeError(Li)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,Yw.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var s=this._readToNextChunk(),c=De(s,2),f=c[0],p=c[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Li)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=De(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Li)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function Qw(e,r){return ls.apply(this,arguments)}function ls(){return ls=Tr(cs.default.mark(function e(r,t){var n,i,o,u,l,s,c,f,p,v,d,h,m,y,q,b,k,E,w,T,S,C,$=arguments;return cs.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=$.length>2&&$[2]!==void 0?$[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,s=n.maxWordLength,c=s===void 0?50:s,f=new cn(t()),p=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Fi(f,c,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Fi(f,c,!1));case 11:return k={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Di(k)(t()),I.next=16,E.next();case 16:if(w=I.sent,!(!w.done&&Rw(w.value,r))){I.next=21;break}return I.next=20,E.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),S=Jw(f,p,!0),S!==void 0&&!o&&(S=Fi(f,c,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=Jw(f,p,!1),C!==void 0&&!o&&(C=C+Fi(f,c,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ls.apply(this,arguments)}function Jw(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Fi(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(RD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function RD(e){return/^\s+$/.test(e)}var LS=g(Hr(),1),FS=g(Bn(),1),DS=g(ni(),1),BS=g(ii(),1),GS=g(ai(),1);var vs=g(ce(),1),US=g(qS(),1),HS=g(MS(),1);function jS(e,r){var t;if(typeof DS.default>"u"||(0,BS.default)(e)==null){if(Array.isArray(e)||(t=dB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,GS.default)(e)},n:function(){var c=t.next();return o=c.done,c},e:function(c){u=!0,l=c},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function dB(e,r){var t;if(e){if(typeof e=="string")return $S(e,r);var n=(0,LS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,FS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $S(e,r)}}function $S(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Di(e){return function(){var r=Ee(vs.default.mark(function n(i){var o,u,l,s,c,f,p,v,d,h,m,y,q,b,k,E,w,T,S,C,$,xe,I,re,we,J,F;return vs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",s=u+o+l,c=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=jS(c),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(k=u.length-q,(k<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=k)),E=s.length-q,!(E<=v.length)){O.next=24;break}if(!(0,US.default)(v).call(v,s.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===s.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(c=d,!(s.length<=v.length)){O.next=49;break}w=0;case 38:if(!(w<=v.length)){O.next=49;break}if(T=v.indexOf(s,w),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(w=T+1,!(T===0&&s.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(S=[],C=Math.max(v.length-s.length+1,0),$=function(Ke){var Qs=v[Ke];S=(0,HS.default)(S).call(S,function(oE){return Qs===s[Ke-oE]}),Qs===s[0]&&S.push(Ke)},xe=C;xe<v.length;xe++)$(xe);I=jS(S);try{for(I.s();!(re=I.n()).done;)we=re.value,J=v.length-we,F={charactersMatched:J},J>=u.length+o.length&&(F.endChunk=p,F.endIndex=we+u.length+o.length),(J>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=we+u.length),c.push(F)}catch(_r){I.e(_r)}finally{I.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var gB=g(ce(),1);var mB=g(Hr(),1),hB=g(us(),1);var bB=g(ce(),1);var pn=g(sT(),1);var lT=g(wi(),1),fT=g(Yt(),1);var hs=g(Si(),1),cT=g(Vt(),1);function ir(e,r){var t;return ir=hs.default?(0,cT.default)(t=hs.default).call(t):function(n,i){return n.__proto__=i,n},ir(e,r)}function ys(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,lT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,fT.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function pT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pT(e)}var dT=g(Si(),1),mT=g(Vt(),1),gs=g(xi(),1);function Er(e){var r;return Er=dT.default?(0,mT.default)(r=gs.default).call(r):function(t){return t.__proto__||(0,gs.default)(t)},Er(e)}var Ls=g(DO(),1),sC=g(wi(),1);var rC=g(eC(),1);function tC(e){try{var r;return(0,rC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var iC=g(Bi(),1),aC=g(es(),1),oC=g(Vt(),1);var nC=g(Bi(),1);function $s(){try{var e=!Boolean.prototype.valueOf.call((0,nC.default)(Boolean,[],function(){}))}catch{}return($s=function(){return!!e})()}function uC(e,r,t){if($s())return iC.default.apply(null,arguments);var n=[null];(0,aC.default)(n).apply(n,r);var i=new((0,oC.default)(e).apply(e,n));return t&&ir(i,t.prototype),i}function fn(e){var r=typeof Ls.default=="function"?new Ls.default:void 0;return fn=function(n){if(n===null||!tC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return uC(n,arguments,Er(this).constructor)}return i.prototype=(0,sC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ir(i,n)},fn(e)}function fC(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=cC(e.startContainer,e.startOffset),o=De(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var s=cC(e.endContainer,e.endOffset),c=De(s,2),f=c[0],p=c[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function cC(e,r){var t;if(lC(e))return[e,r];var n;if(UG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(lC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function lC(e){return e.nodeType===Node.TEXT_NODE}function UG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function vC(e){var r=HG();return function(){var n=Er(e),i;if(r){var o=Er(this).constructor;i=(0,pn.default)(n,arguments,o)}else i=n.apply(this,arguments);return vT(this,i)}}function HG(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Vi=function(e){ys(t,e);var r=vC(t);function t(n){return Or(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),WG=function(e){ys(t,e);var r=vC(t);function t(n){return Or(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),kr=function(){function e(r){var t=this;if(Or(this,e),Cr(this,"scope",void 0),Cr(this,"iter",void 0),this.scope=nr(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!pC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Vi}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!pC(t))throw new Vi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new WG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=fC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function pC(e){return e.nodeType===Node.TEXT_NODE}function dC(e,r){return Ds.apply(this,arguments)}function Ds(){return Ds=Tr(Fs.default.mark(function e(r,t){var n,i,o,u=arguments;return Fs.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=nr(t??le(r)),o=new kr(i),s.next=5,Qw(o.rangeToChunkRange(r),function(){return new kr(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ds.apply(this,arguments)}var Bs=g(ce(),1);function mC(e){var r=Di(e);return function(){var t=Ee(Bs.default.mark(function i(o){var u,l,s,c,f,p,v,d;return Bs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new kr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Vi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,s=!1,m.prev=13,f=ot(r(u));case 15:return m.next=17,rr(f.next());case 17:return p=m.sent,l=p.done,m.next=21,rr(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,c=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,rr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw c;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var KG=g(ce(),1);var zG=g(ce(),1);var t5=g(IC(),1),n5=g(Hr(),1),i5=g(Bn(),1),a5=g(ni(),1),o5=g(ii(),1),u5=g(ai(),1);async function PC(e,r){let t=await dC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function vn(e,r){let t=mC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ut="fb-highlight",_C="fb-highlight-active";var dn=null;function AC(e){dn=e}function mn(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=RC(e,r);t.push(n)}else{let n=c5(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(RC(u,r))}}return t}function RC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return s5(e,r,o);let u=document.createElement("mark");u.className=ut,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{dn&&dn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function s5(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,s=null;for(;l&&l!==t;){if(l.tagName==="text"){s=l.parentElement;break}l=l.parentElement}let c=s||t,f=o;c!==t&&c.getScreenCTM&&(f=c.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",ut),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),k=t.createSVGPoint();k.x=q.left,k.y=q.top;let E=k.matrixTransform(f.inverse()),w=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",w),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}c&&c!==t?c.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),dn&&dn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Gs(e){document.querySelectorAll(`.${ut}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function NC(){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Yi(e){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(_C):r.classList.remove(_C),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function MC(e){let r=document.querySelector(`.${ut}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function c5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function jC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function $C(e,r){let t=jC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ar(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var l5=`
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
`,LC=null,FC=null;function DC(e,r){FC=e,LC=r,f5()}function f5(){let e=document.createElement("style");e.textContent=l5,document.head.appendChild(e)}function BC(){let e=LC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(FC.contentSelector||"body").innerHTML,s=$C(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ar(s)}</textarea>
  `;let c=document.createElement("button");c.className="hf-btn hf-btn-primary",c.textContent="Copy Prompt",c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),c.textContent="Copied!"}catch{c.textContent="Copy failed"}setTimeout(()=>c.textContent="Copy Prompt",2e3)}),u.appendChild(c);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function GC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function UC(e,r){return e.length>r?e.slice(0,r)+"...":e}function HC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var hn=null;function KC(e){hn=document.createElement("div"),hn.className="fb-toast-container",e.appendChild(hn)}function Ir(e,r="success"){if(!hn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>WC(t)),t.appendChild(o)}hn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>WC(t),r==="error"?8e3:4e3)}function WC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var p5=320,VC="feedback-layer-commenter",X=null,He=null,Ue=null,Us=null,YC=null,Hs=null,Ws=null,Ks=null,zs=null,Vs=!1,JC=[],QC=new Set;function st(){return localStorage.getItem(VC)||""}function XC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){YC=e,Hs=r,Ws=t,Ks=n,zs=i,h5(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${ar(st())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>yn()),document.body.appendChild(o),document.body.appendChild(X),KC(X),He=X.querySelector(".fb-comment-list"),Ue=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(VC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>BC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>v5());let c=X.querySelector(".fb-show-resolved-cb");c.addEventListener("change",()=>{Vs=c.checked,We(JC,QC)})}function yn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function v5(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function ZC(e){if(yn(),!st()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Us=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ar(UC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!st()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(YC({comment:n,commenter:st()}),Ue.style.display="none",Us=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Us=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){JC=e,QC=r,He.innerHTML="";let{topLevel:n,repliesByParent:i}=GC(e),o=n.slice().sort((c,f)=>{let p=t.get(c.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(c=>{let f=r.has(c.id),p=c.status==="closed";return f||p&&Vs}),l=Vs?u:u.filter(c=>c.status!=="closed");if(o.length===0){He.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(c=>!r.has(c.id)&&c.status!=="closed").length;if(l.length===0){s>0?He.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:He.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let c of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(zC(c,!1));let p=i.get(c.id)||[];for(let d of p)f.appendChild(zC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),d5(c.id,f,v)}),f.appendChild(v),He.appendChild(f)}}function zC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ar(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ar(e.author)}</span>
      <span class="fb-cmt-time">${HC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Yi(e.id),MC(e.id),He.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ws&&Ws(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),m5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Hs&&Hs(e.id)}),n}function d5(e,r,t){yn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!st()){let s=X.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Ks&&Ks({parent_id:e,comment:l,commenter:st()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function m5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ar(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&zs&&zs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function eE(e){let r=He.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(He.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function h5(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${p5}px;
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
      gap: 8px;
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
  `,document.head.appendChild(e)}var Z=null,Ji=null,Js=[],y5=200;function tE(e){Js=e||[],Z||g5()}function ct(e){Js=e||[]}function gn(e,r){e.addEventListener("mouseenter",t=>{clearTimeout(Ji),Ji=setTimeout(()=>{b5(r,t)},y5)}),e.addEventListener("mouseleave",()=>{clearTimeout(Ji),Ys()}),e.addEventListener("mousemove",t=>{t.target!==e&&!e.contains(t.target)&&Ys()})}function g5(){Z=document.createElement("div"),Z.className="remarq-preview-tooltip",Z.style.display="none",Z.addEventListener("mouseenter",()=>{clearTimeout(Ji)}),Z.addEventListener("mouseleave",()=>{Ys()}),document.body.appendChild(Z)}function b5(e,r){let t=Js.find(u=>u.id===e);if(!t||!Z)return;let n=x5(t.comment,100),i=t.resolved?"Resolved":"Open",o=t.resolved?"resolved":"open";Z.innerHTML=`
    <div class="remarq-preview-status remarq-preview-status-${o}">${i}</div>
    <div class="remarq-preview-text">"${rE(n)}"</div>
    <div class="remarq-preview-author">\u2014 ${rE(t.commenter||"Anonymous")}</div>
  `,q5(r),Z.style.display="block"}function Ys(){Z&&(Z.style.display="none")}function q5(e){if(!Z)return;let r=10,t=e.clientX+r,n=e.clientY+r,i=Z.getBoundingClientRect(),o=window.innerWidth,u=window.innerHeight;t+i.width>o&&(t=e.clientX-i.width-r),n+i.height>u&&(n=e.clientY-i.height-r),Z.style.left=`${t}px`,Z.style.top=`${n}px`}function x5(e,r){return e?e.length<=r?e:e.substring(0,r)+"\u2026":""}function rE(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}function nE(){if(document.getElementById("remarq-preview-styles"))return;let e=document.createElement("style");e.id="remarq-preview-styles",e.textContent=`
    .remarq-preview-tooltip {
      position: fixed;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      max-width: 300px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
      z-index: 10001;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      pointer-events: auto;
    }

    .remarq-preview-status {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .remarq-preview-status-open {
      color: #10b981;
    }

    .remarq-preview-status-resolved {
      color: #6b7280;
    }

    .remarq-preview-text {
      font-style: italic;
      color: #374151;
      margin-bottom: 8px;
    }

    .remarq-preview-author {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
    }
  `,document.head.appendChild(e)}function iE(){let e=new Map;return{add(r,t){e.set(r.id,{comment:r,selector:t,attempts:0})},remove(r){e.delete(r)},hasPending(){return e.size>0},getAll(){return[...e.values()]},recordAttempt(r){let t=e.get(r);return t?(t.attempts++,t.attempts>=10?(e.delete(r),!1):!0):!1},clear(){e.clear()},size(){return e.size}}}var or=null,Xi=null,Zi=null,j=[],Pr=null,Ie=null,fe=new Set,qe=new Map,be=iE(),lt=null,Qi=null;function w5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{or=document.querySelector(r.contentSelector)||document.body,Xi=r.documentUri||window.location.origin+window.location.pathname,Zi=r.documentId||null,nE(),XC({onSubmit:P5,onDelete:N5,onResolve:_5,onReply:R5,onEdit:A5}),AC(i=>{yn(),eE(i),Yi(i)}),k5(),await t(),S5(),DC(r,()=>j)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function S5(){try{j=await ec(Xi,Zi),tE(j),fe=await T5(j),We(j,fe,qe),be.hasPending()&&O5()}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}async function T5(e){NC(),be.clear();let r=new Set;qe.clear();for(let t of e){if(t.parent)continue;let n={exact:t.quote,prefix:t.prefix,suffix:t.suffix};try{let i=await vn(n,or);if(i&&t.status!=="closed"){let o=mn(i,t.id);for(let u of o)u&&gn(u,t.id);r.add(t.id),qe.set(t.id,i)}else i&&t.status==="closed"?(r.add(t.id),qe.set(t.id,i)):i||be.add(t,n)}catch(i){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,i)}}return be.hasPending()&&console.log(`[feedback-layer] ${be.size()} comment(s) queued for deferred anchoring`),r}function O5(){lt||(lt=new MutationObserver(()=>{clearTimeout(Qi),Qi=setTimeout(E5,500)}),lt.observe(or,{childList:!0,subtree:!0}))}function C5(){lt&&(lt.disconnect(),lt=null),clearTimeout(Qi),Qi=null}async function E5(){let e=be.getAll(),r=!1;for(let{comment:t,selector:n}of e)try{let i=await vn(n,or);if(i){if(console.log(`[feedback-layer] Deferred anchor succeeded for comment ${t.id}`),be.remove(t.id),t.status!=="closed"){let o=mn(i,t.id);for(let u of o)u&&gn(u,t.id)}fe.add(t.id),qe.set(t.id,i),r=!0}else be.recordAttempt(t.id)||console.warn(`[feedback-layer] Gave up anchoring comment ${t.id} after max retries`)}catch(i){console.warn(`[feedback-layer] Error retrying anchor for comment ${t.id}:`,i),be.recordAttempt(t.id)}r&&We(j,fe,qe),be.hasPending()||C5()}function k5(){document.addEventListener("mouseup",aE),document.addEventListener("keyup",aE)}function aE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){bn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){bn();return}if(!or.contains(r.commonAncestorContainer)){bn();return}I5(r)},10)}function I5(e){bn();let r=e.getBoundingClientRect();Ie=document.createElement("button"),Ie.className="fb-annotate-tooltip",Ie.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ie.style.top=window.scrollY+r.top-36+"px",Ie.style.left=window.scrollX+r.left+r.width/2-40+"px",Ie.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Pr=await PC(i,or),ZC(Pr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}bn()}),document.body.appendChild(Ie)}function bn(){Ie&&(Ie.remove(),Ie=null)}async function P5({comment:e,commenter:r}){if(Pr){try{let t=await ea({uri:Xi,document:Zi,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});j.push(t);let n=await vn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},or);if(n){let i=mn(n,t.id);for(let o of i)o&&gn(o,t.id);fe.add(t.id)}ct(j),We(j,fe,qe),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function _5(e,r){try{let n=await tc(e,r?"closed":"open"),i=j.findIndex(o=>o.id===e);if(i!==-1&&(j[i]=n),r)Gs(e);else{let o=n,u=await vn({exact:o.quote,prefix:o.prefix,suffix:o.suffix},or);if(u){let l=mn(u,o.id);for(let s of l)s&&gn(s,o.id);fe.add(o.id)}else fe.delete(o.id)}ct(j),We(j,fe,qe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function R5({parent_id:e,comment:r,commenter:t}){try{let n=await ea({uri:Xi,document:Zi,body:r,author:t,parent:e});j.push(n),ct(j),We(j,fe,qe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function A5(e,r){try{let t=await rc(e,{body:r}),n=j.findIndex(i=>i.id===e);n!==-1&&(j[n]=t),ct(j),We(j,fe,qe)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function N5(e){try{await nc(e),Gs(e),fe.delete(e),be.remove(e),j=j.filter(r=>r.id!==e&&r.parent!==e),ct(j),We(j,fe,qe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{w5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
