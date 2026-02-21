var FeedbackLayer=(()=>{var uO=Object.create;var Xs=Object.defineProperty;var sO=Object.getOwnPropertyDescriptor;var cO=Object.getOwnPropertyNames;var lO=Object.getPrototypeOf,fO=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var pO=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of cO(r))!fO.call(e,i)&&i!==t&&Xs(e,i,{get:()=>r[i],enumerable:!(n=sO(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?uO(lO(e)):{},pO(r||!e||!e.__esModule?Xs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((NU,ic)=>{"use strict";ic.exports=function(e){try{return!!e()}catch{return!0}}});var Ar=a((MU,ac)=>{"use strict";var vO=P();ac.exports=!vO(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((jU,sc)=>{"use strict";var oc=Ar(),uc=Function.prototype,Zi=uc.call,dO=oc&&uc.bind.bind(Zi,Zi);sc.exports=oc?dO:function(e){return function(){return Zi.apply(e,arguments)}}});var B=a(($U,cc)=>{"use strict";var mO=A();cc.exports=mO({}.isPrototypeOf)});var _=a((ea,lc)=>{"use strict";var ft=function(e){return e&&e.Math===Math&&e};lc.exports=ft(typeof globalThis=="object"&&globalThis)||ft(typeof window=="object"&&window)||ft(typeof self=="object"&&self)||ft(typeof global=="object"&&global)||ft(typeof ea=="object"&&ea)||function(){return this}()||Function("return this")()});var Nr=a((LU,dc)=>{"use strict";var hO=Ar(),vc=Function.prototype,fc=vc.apply,pc=vc.call;dc.exports=typeof Reflect=="object"&&Reflect.apply||(hO?pc.bind(fc):function(){return pc.apply(fc,arguments)})});var qe=a((FU,hc)=>{"use strict";var mc=A(),yO=mc({}.toString),gO=mc("".slice);hc.exports=function(e){return gO(yO(e),8,-1)}});var pt=a((DU,yc)=>{"use strict";var bO=qe(),qO=A();yc.exports=function(e){if(bO(e)==="Function")return qO(e)}});var N=a((BU,gc)=>{"use strict";var ra=typeof document=="object"&&document.all;gc.exports=typeof ra>"u"&&ra!==void 0?function(e){return typeof e=="function"||e===ra}:function(e){return typeof e=="function"}});var G=a((GU,bc)=>{"use strict";var xO=P();bc.exports=!xO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((UU,qc)=>{"use strict";var SO=Ar(),gn=Function.prototype.call;qc.exports=SO?gn.bind(gn):function(){return gn.apply(gn,arguments)}});var ta=a(wc=>{"use strict";var xc={}.propertyIsEnumerable,Sc=Object.getOwnPropertyDescriptor,wO=Sc&&!xc.call({1:2},1);wc.f=wO?function(r){var t=Sc(this,r);return!!t&&t.enumerable}:xc});var We=a((HU,Tc)=>{"use strict";Tc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var bn=a((WU,Cc)=>{"use strict";var TO=A(),CO=P(),EO=qe(),na=Object,OO=TO("".split);Cc.exports=CO(function(){return!na("z").propertyIsEnumerable(0)})?function(e){return EO(e)==="String"?OO(e,""):na(e)}:na});var or=a((zU,Ec)=>{"use strict";Ec.exports=function(e){return e==null}});var ur=a((VU,Oc)=>{"use strict";var kO=or(),IO=TypeError;Oc.exports=function(e){if(kO(e))throw new IO("Can't call method on "+e);return e}});var ke=a((YU,kc)=>{"use strict";var PO=bn(),_O=ur();kc.exports=function(e){return PO(_O(e))}});var $=a((JU,Ic)=>{"use strict";var RO=N();Ic.exports=function(e){return typeof e=="object"?e!==null:RO(e)}});var W=a((QU,Pc)=>{"use strict";Pc.exports={}});var U=a((XU,Rc)=>{"use strict";var ia=W(),aa=_(),AO=N(),_c=function(e){return AO(e)?e:void 0};Rc.exports=function(e,r){return arguments.length<2?_c(ia[e])||_c(aa[e]):ia[e]&&ia[e][r]||aa[e]&&aa[e][r]}});var Mr=a((ZU,Mc)=>{"use strict";var NO=_(),Ac=NO.navigator,Nc=Ac&&Ac.userAgent;Mc.exports=Nc?String(Nc):""});var jr=a((e5,Bc)=>{"use strict";var Dc=_(),oa=Mr(),jc=Dc.process,$c=Dc.Deno,Lc=jc&&jc.versions||$c&&$c.version,Fc=Lc&&Lc.v8,de,qn;Fc&&(de=Fc.split("."),qn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!qn&&oa&&(de=oa.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=oa.match(/Chrome\/(\d+)/),de&&(qn=+de[1])));Bc.exports=qn});var sr=a((r5,Uc)=>{"use strict";var Gc=jr(),MO=P(),jO=_(),$O=jO.String;Uc.exports=!!Object.getOwnPropertySymbols&&!MO(function(){var e=Symbol("symbol detection");return!$O(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Gc&&Gc<41})});var ua=a((t5,Kc)=>{"use strict";var LO=sr();Kc.exports=LO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var $r=a((n5,Hc)=>{"use strict";var FO=U(),DO=N(),BO=B(),GO=ua(),UO=Object;Hc.exports=GO?function(e){return typeof e=="symbol"}:function(e){var r=FO("Symbol");return DO(r)&&BO(r.prototype,UO(e))}});var ze=a((i5,Wc)=>{"use strict";var KO=String;Wc.exports=function(e){try{return KO(e)}catch{return"Object"}}});var F=a((a5,zc)=>{"use strict";var HO=N(),WO=ze(),zO=TypeError;zc.exports=function(e){if(HO(e))return e;throw new zO(WO(e)+" is not a function")}});var xn=a((o5,Vc)=>{"use strict";var VO=F(),YO=or();Vc.exports=function(e,r){var t=e[r];return YO(t)?void 0:VO(t)}});var Jc=a((u5,Yc)=>{"use strict";var sa=D(),ca=N(),la=$(),JO=TypeError;Yc.exports=function(e,r){var t,n;if(r==="string"&&ca(t=e.toString)&&!la(n=sa(t,e))||ca(t=e.valueOf)&&!la(n=sa(t,e))||r!=="string"&&ca(t=e.toString)&&!la(n=sa(t,e)))return n;throw new JO("Can't convert object to primitive value")}});var Z=a((s5,Qc)=>{"use strict";Qc.exports=!0});var el=a((c5,Zc)=>{"use strict";var Xc=_(),QO=Object.defineProperty;Zc.exports=function(e,r){try{QO(Xc,e,{value:r,configurable:!0,writable:!0})}catch{Xc[e]=r}return r}});var vt=a((l5,nl)=>{"use strict";var XO=Z(),ZO=_(),e0=el(),rl="__core-js_shared__",tl=nl.exports=ZO[rl]||e0(rl,{});(tl.versions||(tl.versions=[])).push({version:"3.48.0",mode:XO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var cr=a((f5,al)=>{"use strict";var il=vt();al.exports=function(e,r){return il[e]||(il[e]=r||{})}});var re=a((p5,ol)=>{"use strict";var r0=ur(),t0=Object;ol.exports=function(e){return t0(r0(e))}});var K=a((v5,ul)=>{"use strict";var n0=A(),i0=re(),a0=n0({}.hasOwnProperty);ul.exports=Object.hasOwn||function(r,t){return a0(i0(r),t)}});var Lr=a((d5,sl)=>{"use strict";var o0=A(),u0=0,s0=Math.random(),c0=o0(1.1.toString);sl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+c0(++u0+s0,36)}});var R=a((m5,ll)=>{"use strict";var l0=_(),f0=cr(),cl=K(),p0=Lr(),v0=sr(),d0=ua(),Fr=l0.Symbol,fa=f0("wks"),m0=d0?Fr.for||Fr:Fr&&Fr.withoutSetter||p0;ll.exports=function(e){return cl(fa,e)||(fa[e]=v0&&cl(Fr,e)?Fr[e]:m0("Symbol."+e)),fa[e]}});var dl=a((h5,vl)=>{"use strict";var h0=D(),fl=$(),pl=$r(),y0=xn(),g0=Jc(),b0=R(),q0=TypeError,x0=b0("toPrimitive");vl.exports=function(e,r){if(!fl(e)||pl(e))return e;var t=y0(e,x0),n;if(t){if(r===void 0&&(r="default"),n=h0(t,e,r),!fl(n)||pl(n))return n;throw new q0("Can't convert object to primitive value")}return r===void 0&&(r="number"),g0(e,r)}});var Sn=a((y5,ml)=>{"use strict";var S0=dl(),w0=$r();ml.exports=function(e){var r=S0(e,"string");return w0(r)?r:r+""}});var wn=a((g5,yl)=>{"use strict";var T0=_(),hl=$(),pa=T0.document,C0=hl(pa)&&hl(pa.createElement);yl.exports=function(e){return C0?pa.createElement(e):{}}});var va=a((b5,gl)=>{"use strict";var E0=G(),O0=P(),k0=wn();gl.exports=!E0&&!O0(function(){return Object.defineProperty(k0("div"),"a",{get:function(){return 7}}).a!==7})});var dt=a(ql=>{"use strict";var I0=G(),P0=D(),_0=ta(),R0=We(),A0=ke(),N0=Sn(),M0=K(),j0=va(),bl=Object.getOwnPropertyDescriptor;ql.f=I0?bl:function(r,t){if(r=A0(r),t=N0(t),j0)try{return bl(r,t)}catch{}if(M0(r,t))return R0(!P0(_0.f,r,t),r[t])}});var da=a((x5,xl)=>{"use strict";var $0=P(),L0=N(),F0=/#|\.prototype\./,mt=function(e,r){var t=B0[D0(e)];return t===U0?!0:t===G0?!1:L0(r)?$0(r):!!r},D0=mt.normalize=function(e){return String(e).replace(F0,".").toLowerCase()},B0=mt.data={},G0=mt.NATIVE="N",U0=mt.POLYFILL="P";xl.exports=mt});var z=a((S5,wl)=>{"use strict";var Sl=pt(),K0=F(),H0=Ar(),W0=Sl(Sl.bind);wl.exports=function(e,r){return K0(e),r===void 0?e:H0?W0(e,r):function(){return e.apply(r,arguments)}}});var ma=a((w5,Tl)=>{"use strict";var z0=G(),V0=P();Tl.exports=z0&&V0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((T5,Cl)=>{"use strict";var Y0=$(),J0=String,Q0=TypeError;Cl.exports=function(e){if(Y0(e))return e;throw new Q0(J0(e)+" is not an object")}});var te=a(Ol=>{"use strict";var X0=G(),Z0=va(),ek=ma(),Tn=X(),El=Sn(),rk=TypeError,ha=Object.defineProperty,tk=Object.getOwnPropertyDescriptor,ya="enumerable",ga="configurable",ba="writable";Ol.f=X0?ek?function(r,t,n){if(Tn(r),t=El(t),Tn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ba in n&&!n[ba]){var i=tk(r,t);i&&i[ba]&&(r[t]=n.value,n={configurable:ga in n?n[ga]:i[ga],enumerable:ya in n?n[ya]:i[ya],writable:!1})}return ha(r,t,n)}:ha:function(r,t,n){if(Tn(r),t=El(t),Tn(n),Z0)try{return ha(r,t,n)}catch{}if("get"in n||"set"in n)throw new rk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((E5,kl)=>{"use strict";var nk=G(),ik=te(),ak=We();kl.exports=nk?function(e,r,t){return ik.f(e,r,ak(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((O5,Pl)=>{"use strict";var ht=_(),ok=Nr(),uk=pt(),sk=N(),ck=dt().f,lk=da(),Dr=W(),fk=z(),Br=xe(),Il=K();vt();var pk=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return ok(e,this,arguments)};return r.prototype=e.prototype,r};Pl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?ht:i?ht[t]:ht[t]&&ht[t].prototype,l=n?Dr:Dr[t]||Br(Dr,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=lk(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&Il(u,v),h=l[v],f&&(e.dontCallGetSet?(q=ck(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=fk(d,ht):e.wrap&&f?y=pk(d):o&&sk(d)?y=uk(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Br(y,"sham",!0),Br(l,v,y),o&&(p=t+"Prototype",Il(Dr,p)||Br(Dr,p,{}),Br(Dr[p],v,d),e.real&&c&&(s||!c[v])&&Br(c,v,d)))}});var Ie=a((k5,_l)=>{"use strict";var vk=qe();_l.exports=Array.isArray||function(r){return vk(r)==="Array"}});var Cn=a((I5,Al)=>{"use strict";var dk=R(),mk=dk("toStringTag"),Rl={};Rl[mk]="z";Al.exports=String(Rl)==="[object z]"});var yt=a((P5,Nl)=>{"use strict";var hk=Cn(),yk=N(),En=qe(),gk=R(),bk=gk("toStringTag"),qk=Object,xk=En(function(){return arguments}())==="Arguments",Sk=function(e,r){try{return e[r]}catch{}};Nl.exports=hk?En:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Sk(r=qk(e),bk))=="string"?t:xk?En(r):(n=En(r))==="Object"&&yk(r.callee)?"Arguments":n}});var xa=a((_5,Ml)=>{"use strict";var wk=A(),Tk=N(),qa=vt(),Ck=wk(Function.toString);Tk(qa.inspectSource)||(qa.inspectSource=function(e){return Ck(e)});Ml.exports=qa.inspectSource});var bt=a((R5,Dl)=>{"use strict";var Ek=A(),Ok=P(),jl=N(),kk=yt(),Ik=U(),Pk=xa(),$l=function(){},Ll=Ik("Reflect","construct"),Sa=/^\s*(?:class|function)\b/,_k=Ek(Sa.exec),Rk=!Sa.test($l),gt=function(r){if(!jl(r))return!1;try{return Ll($l,[],r),!0}catch{return!1}},Fl=function(r){if(!jl(r))return!1;switch(kk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Rk||!!_k(Sa,Pk(r))}catch{return!0}};Fl.sham=!0;Dl.exports=!Ll||Ok(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?Fl:gt});var Gl=a((A5,Bl)=>{"use strict";var Ak=Math.ceil,Nk=Math.floor;Bl.exports=Math.trunc||function(r){var t=+r;return(t>0?Nk:Ak)(t)}});var On=a((N5,Ul)=>{"use strict";var Mk=Gl();Ul.exports=function(e){var r=+e;return r!==r||r===0?0:Mk(r)}});var wa=a((M5,Kl)=>{"use strict";var jk=On(),$k=Math.max,Lk=Math.min;Kl.exports=function(e,r){var t=jk(e);return t<0?$k(t+r,0):Lk(t,r)}});var Ta=a((j5,Hl)=>{"use strict";var Fk=On(),Dk=Math.min;Hl.exports=function(e){var r=Fk(e);return r>0?Dk(r,9007199254740991):0}});var le=a(($5,Wl)=>{"use strict";var Bk=Ta();Wl.exports=function(e){return Bk(e.length)}});var Gr=a((L5,zl)=>{"use strict";var Gk=G(),Uk=te(),Kk=We();zl.exports=function(e,r,t){Gk?Uk.f(e,r,Kk(0,t)):e[r]=t}});var Ur=a((F5,Vl)=>{"use strict";var Hk=G(),Wk=Ie(),zk=TypeError,Vk=Object.getOwnPropertyDescriptor,Yk=Hk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Vl.exports=Yk?function(e,r){if(Wk(e)&&!Vk(e,"length").writable)throw new zk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var qt=a((D5,Yl)=>{"use strict";var Jk=P(),Qk=R(),Xk=jr(),Zk=Qk("species");Yl.exports=function(e){return Xk>=51||!Jk(function(){var r=[],t=r.constructor={};return t[Zk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var lr=a((B5,Jl)=>{"use strict";var eI=A();Jl.exports=eI([].slice)});var Zl=a(()=>{"use strict";var rI=x(),Ql=Ie(),tI=bt(),nI=$(),Xl=wa(),iI=le(),aI=ke(),oI=Gr(),uI=Ur(),sI=R(),cI=qt(),lI=lr(),fI=cI("slice"),pI=sI("species"),Ca=Array,vI=Math.max;rI({target:"Array",proto:!0,forced:!fI},{slice:function(r,t){var n=aI(this),i=iI(n),o=Xl(r,i),u=Xl(t===void 0?i:t,i),l,c,s;if(Ql(n)&&(l=n.constructor,tI(l)&&(l===Ca||Ql(l.prototype))?l=void 0:nI(l)&&(l=l[pI],l===null&&(l=void 0)),l===Ca||l===void 0))return lI(n,o,u);for(c=new(l===void 0?Ca:l)(vI(u-o,0)),s=0;o<u;o++,s++)o in n&&oI(c,s,n[o]);return uI(c,s),c}})});var oe=a((K5,ef)=>{"use strict";var dI=_(),mI=W();ef.exports=function(e,r){var t=mI[e+"Prototype"],n=t&&t[r];if(n)return n;var i=dI[e],o=i&&i.prototype;return o&&o[r]}});var tf=a((H5,rf)=>{"use strict";Zl();var hI=oe();rf.exports=hI("Array","slice")});var af=a((W5,nf)=>{"use strict";var yI=B(),gI=tf(),Ea=Array.prototype;nf.exports=function(e){var r=e.slice;return e===Ea||yI(Ea,e)&&r===Ea.slice?gI:r}});var uf=a((z5,of)=>{"use strict";var bI=af();of.exports=bI});var cf=a((V5,sf)=>{"use strict";var qI=uf();sf.exports=qI});var ff=a((Y5,lf)=>{"use strict";var xI=cf();lf.exports=xI});var Oa=a((J5,pf)=>{"use strict";pf.exports=ff()});var Kr=a((Q5,vf)=>{vf.exports=Oa()});var Ve=a((X5,df)=>{"use strict";var SI=yt(),wI=String;df.exports=function(e){if(SI(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return wI(e)}});var gf=a((Z5,yf)=>{"use strict";var ka=A(),TI=On(),CI=Ve(),EI=ur(),OI=ka("".charAt),mf=ka("".charCodeAt),kI=ka("".slice),hf=function(e){return function(r,t){var n=CI(EI(r)),i=TI(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=mf(n,i),u<55296||u>56319||i+1===o||(l=mf(n,i+1))<56320||l>57343?e?OI(n,i):u:e?kI(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};yf.exports={codeAt:hf(!1),charAt:hf(!0)}});var xf=a((e6,qf)=>{"use strict";var II=_(),PI=N(),bf=II.WeakMap;qf.exports=PI(bf)&&/native code/.test(String(bf))});var xt=a((r6,wf)=>{"use strict";var _I=cr(),RI=Lr(),Sf=_I("keys");wf.exports=function(e){return Sf[e]||(Sf[e]=RI(e))}});var Hr=a((t6,Tf)=>{"use strict";Tf.exports={}});var Ye=a((n6,Of)=>{"use strict";var AI=xf(),Ef=_(),NI=$(),MI=xe(),Ia=K(),Pa=vt(),jI=xt(),$I=Hr(),Cf="Object already initialized",_a=Ef.TypeError,LI=Ef.WeakMap,kn,St,In,FI=function(e){return In(e)?St(e):kn(e,{})},DI=function(e){return function(r){var t;if(!NI(r)||(t=St(r)).type!==e)throw new _a("Incompatible receiver, "+e+" required");return t}};AI||Pa.state?(me=Pa.state||(Pa.state=new LI),me.get=me.get,me.has=me.has,me.set=me.set,kn=function(e,r){if(me.has(e))throw new _a(Cf);return r.facade=e,me.set(e,r),r},St=function(e){return me.get(e)||{}},In=function(e){return me.has(e)}):(fr=jI("state"),$I[fr]=!0,kn=function(e,r){if(Ia(e,fr))throw new _a(Cf);return r.facade=e,MI(e,fr,r),r},St=function(e){return Ia(e,fr)?e[fr]:{}},In=function(e){return Ia(e,fr)});var me,fr;Of.exports={set:kn,get:St,has:In,enforce:FI,getterFor:DI}});var Pf=a((i6,If)=>{"use strict";var Ra=G(),BI=K(),kf=Function.prototype,GI=Ra&&Object.getOwnPropertyDescriptor,Aa=BI(kf,"name"),UI=Aa&&function(){}.name==="something",KI=Aa&&(!Ra||Ra&&GI(kf,"name").configurable);If.exports={EXISTS:Aa,PROPER:UI,CONFIGURABLE:KI}});var Na=a((a6,Rf)=>{"use strict";var HI=ke(),WI=wa(),zI=le(),_f=function(e){return function(r,t,n){var i=HI(r),o=zI(i);if(o===0)return!e&&-1;var u=WI(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Rf.exports={includes:_f(!0),indexOf:_f(!1)}});var ja=a((o6,Nf)=>{"use strict";var VI=A(),Ma=K(),YI=ke(),JI=Na().indexOf,QI=Hr(),Af=VI([].push);Nf.exports=function(e,r){var t=YI(e),n=0,i=[],o;for(o in t)!Ma(QI,o)&&Ma(t,o)&&Af(i,o);for(;r.length>n;)Ma(t,o=r[n++])&&(~JI(i,o)||Af(i,o));return i}});var Pn=a((u6,Mf)=>{"use strict";Mf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var _n=a((s6,jf)=>{"use strict";var XI=ja(),ZI=Pn();jf.exports=Object.keys||function(r){return XI(r,ZI)}});var $a=a($f=>{"use strict";var e1=G(),r1=ma(),t1=te(),n1=X(),i1=ke(),a1=_n();$f.f=e1&&!r1?Object.defineProperties:function(r,t){n1(r);for(var n=i1(t),i=a1(t),o=i.length,u=0,l;o>u;)t1.f(r,l=i[u++],n[l]);return r}});var La=a((l6,Lf)=>{"use strict";var o1=U();Lf.exports=o1("document","documentElement")});var Je=a((f6,Hf)=>{"use strict";var u1=X(),s1=$a(),Ff=Pn(),c1=Hr(),l1=La(),f1=wn(),p1=xt(),Df=">",Bf="<",Da="prototype",Ba="script",Uf=p1("IE_PROTO"),Fa=function(){},Kf=function(e){return Bf+Ba+Df+e+Bf+"/"+Ba+Df},Gf=function(e){e.write(Kf("")),e.close();var r=e.parentWindow.Object;return e=null,r},v1=function(){var e=f1("iframe"),r="java"+Ba+":",t;return e.style.display="none",l1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Kf("document.F=Object")),t.close(),t.F},Rn,An=function(){try{Rn=new ActiveXObject("htmlfile")}catch{}An=typeof document<"u"?document.domain&&Rn?Gf(Rn):v1():Gf(Rn);for(var e=Ff.length;e--;)delete An[Da][Ff[e]];return An()};c1[Uf]=!0;Hf.exports=Object.create||function(r,t){var n;return r!==null?(Fa[Da]=u1(r),n=new Fa,Fa[Da]=null,n[Uf]=r):n=An(),t===void 0?n:s1.f(n,t)}});var Ga=a((p6,Wf)=>{"use strict";var d1=P();Wf.exports=!d1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var wt=a((v6,Vf)=>{"use strict";var m1=K(),h1=N(),y1=re(),g1=xt(),b1=Ga(),zf=g1("IE_PROTO"),Ua=Object,q1=Ua.prototype;Vf.exports=b1?Ua.getPrototypeOf:function(e){var r=y1(e);if(m1(r,zf))return r[zf];var t=r.constructor;return h1(t)&&r instanceof t?t.prototype:r instanceof Ua?q1:null}});var Pe=a((d6,Yf)=>{"use strict";var x1=xe();Yf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:x1(e,r,t),e}});var za=a((m6,Xf)=>{"use strict";var S1=P(),w1=N(),T1=$(),C1=Je(),Jf=wt(),E1=Pe(),O1=R(),k1=Z(),Wa=O1("iterator"),Qf=!1,_e,Ka,Ha;[].keys&&(Ha=[].keys(),"next"in Ha?(Ka=Jf(Jf(Ha)),Ka!==Object.prototype&&(_e=Ka)):Qf=!0);var I1=!T1(_e)||S1(function(){var e={};return _e[Wa].call(e)!==e});I1?_e={}:k1&&(_e=C1(_e));w1(_e[Wa])||E1(_e,Wa,function(){return this});Xf.exports={IteratorPrototype:_e,BUGGY_SAFARI_ITERATORS:Qf}});var ep=a((h6,Zf)=>{"use strict";var P1=Cn(),_1=yt();Zf.exports=P1?{}.toString:function(){return"[object "+_1(this)+"]"}});var Re=a((y6,tp)=>{"use strict";var R1=Cn(),A1=te().f,N1=xe(),M1=K(),j1=ep(),$1=R(),rp=$1("toStringTag");tp.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(M1(i,rp)||A1(i,rp,{configurable:!0,value:r}),n&&!R1&&N1(i,"toString",j1))}});var pr=a((g6,np)=>{"use strict";np.exports={}});var ap=a((b6,ip)=>{"use strict";var L1=za().IteratorPrototype,F1=Je(),D1=We(),B1=Re(),G1=pr(),U1=function(){return this};ip.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=F1(L1,{next:D1(+!n,t)}),B1(e,i,!1,!0),G1[i]=U1,e}});var up=a((q6,op)=>{"use strict";var K1=A(),H1=F();op.exports=function(e,r,t){try{return K1(H1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var cp=a((x6,sp)=>{"use strict";var W1=$();sp.exports=function(e){return W1(e)||e===null}});var fp=a((S6,lp)=>{"use strict";var z1=cp(),V1=String,Y1=TypeError;lp.exports=function(e){if(z1(e))return e;throw new Y1("Can't set "+V1(e)+" as a prototype")}});var Tt=a((w6,pp)=>{"use strict";var J1=up(),Q1=$(),X1=ur(),Z1=fp();pp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=J1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return X1(i),Z1(o),Q1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var jn=a((T6,Sp)=>{"use strict";var eP=x(),rP=D(),Nn=Z(),qp=Pf(),tP=N(),nP=ap(),vp=wt(),dp=Tt(),iP=Re(),aP=xe(),Va=Pe(),oP=R(),mp=pr(),xp=za(),uP=qp.PROPER,sP=qp.CONFIGURABLE,hp=xp.IteratorPrototype,Mn=xp.BUGGY_SAFARI_ITERATORS,Ct=oP("iterator"),yp="keys",Et="values",gp="entries",bp=function(){return this};Sp.exports=function(e,r,t,n,i,o,u){nP(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Mn&&q&&q in f)return f[q];switch(q){case yp:return function(){return new t(this,q)};case Et:return function(){return new t(this,q)};case gp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[Ct]||f["@@iterator"]||i&&f[i],v=!Mn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=vp(d.call(new e)),h!==Object.prototype&&h.next&&(!Nn&&vp(h)!==hp&&(dp?dp(h,hp):tP(h[Ct])||Va(h,Ct,bp)),iP(h,c,!0,!0),Nn&&(mp[c]=bp))),uP&&i===Et&&p&&p.name!==Et&&(!Nn&&sP?aP(f,"name",Et):(s=!0,v=function(){return rP(p,this)})),i)if(m={values:l(Et),keys:o?v:l(yp),entries:l(gp)},u)for(y in m)(Mn||s||!(y in f))&&Va(f,y,m[y]);else eP({target:r,proto:!0,forced:Mn||s},m);return(!Nn||u)&&f[Ct]!==v&&Va(f,Ct,v,{name:i}),mp[r]=v,m}});var $n=a((C6,wp)=>{"use strict";wp.exports=function(e,r){return{value:e,done:r}}});var vr=a(()=>{"use strict";var cP=gf().charAt,lP=Ve(),Cp=Ye(),fP=jn(),Tp=$n(),Ep="String Iterator",pP=Cp.set,vP=Cp.getterFor(Ep);fP(String,"String",function(e){pP(this,{type:Ep,string:lP(e),index:0})},function(){var r=vP(this),t=r.string,n=r.index,i;return n>=t.length?Tp(void 0,!0):(i=cP(t,n),r.index+=i.length,Tp(i,!1))})});var Ya=a((k6,kp)=>{"use strict";var dP=D(),Op=X(),mP=xn();kp.exports=function(e,r,t){var n,i;Op(e);try{if(n=mP(e,"return"),!n){if(r==="throw")throw t;return t}n=dP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Op(n),t}});var Pp=a((I6,Ip)=>{"use strict";var hP=X(),yP=Ya();Ip.exports=function(e,r,t,n){try{return n?r(hP(t)[0],t[1]):r(t)}catch(i){yP(e,"throw",i)}}});var Ja=a((P6,_p)=>{"use strict";var gP=R(),bP=pr(),qP=gP("iterator"),xP=Array.prototype;_p.exports=function(e){return e!==void 0&&(bP.Array===e||xP[qP]===e)}});var Ot=a((_6,Ap)=>{"use strict";var SP=yt(),Rp=xn(),wP=or(),TP=pr(),CP=R(),EP=CP("iterator");Ap.exports=function(e){if(!wP(e))return Rp(e,EP)||Rp(e,"@@iterator")||TP[SP(e)]}});var Ln=a((R6,Np)=>{"use strict";var OP=D(),kP=F(),IP=X(),PP=ze(),_P=Ot(),RP=TypeError;Np.exports=function(e,r){var t=arguments.length<2?_P(e):r;if(kP(t))return IP(OP(t,e));throw new RP(PP(e)+" is not iterable")}});var Lp=a((A6,$p)=>{"use strict";var AP=z(),NP=D(),MP=re(),jP=Pp(),$P=Ja(),LP=bt(),FP=le(),Mp=Gr(),DP=Ur(),BP=Ln(),GP=Ot(),jp=Array;$p.exports=function(r){var t=MP(r),n=LP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=AP(o,i>2?arguments[2]:void 0));var l=GP(t),c=0,s,f,p,v,d,h;if(l&&!(this===jp&&$P(l)))for(f=n?new this:[],v=BP(t,l),d=v.next;!(p=NP(d,v)).done;c++)h=u?jP(v,o,[p.value,c],!0):p.value,Mp(f,c,h);else for(s=FP(t),f=n?new this(s):jp(s);s>c;c++)h=u?o(t[c],c):t[c],Mp(f,c,h);return DP(f,c),f}});var Xa=a((N6,Gp)=>{"use strict";var UP=R(),Dp=UP("iterator"),Bp=!1;try{Fp=0,Qa={next:function(){return{done:!!Fp++}},return:function(){Bp=!0}},Qa[Dp]=function(){return this},Array.from(Qa,function(){throw 2})}catch{}var Fp,Qa;Gp.exports=function(e,r){try{if(!r&&!Bp)return!1}catch{return!1}var t=!1;try{var n={};n[Dp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Up=a(()=>{"use strict";var KP=x(),HP=Lp(),WP=Xa(),zP=!WP(function(e){Array.from(e)});KP({target:"Array",stat:!0,forced:zP},{from:HP})});var Hp=a(($6,Kp)=>{"use strict";vr();Up();var VP=W();Kp.exports=VP.Array.from});var zp=a((L6,Wp)=>{"use strict";var YP=Hp();Wp.exports=YP});var Yp=a((F6,Vp)=>{"use strict";var JP=zp();Vp.exports=JP});var Qp=a((D6,Jp)=>{"use strict";var QP=Yp();Jp.exports=QP});var Za=a((B6,Xp)=>{"use strict";Xp.exports=Qp()});var Fn=a((G6,Zp)=>{Zp.exports=Za()});var kt=a((U6,ev)=>{"use strict";var XP=TypeError,ZP=9007199254740991;ev.exports=function(e){if(e>ZP)throw XP("Maximum allowed index exceeded");return e}});var iv=a((K6,nv)=>{"use strict";var rv=Ie(),e_=bt(),r_=$(),t_=R(),n_=t_("species"),tv=Array;nv.exports=function(e){var r;return rv(e)&&(r=e.constructor,e_(r)&&(r===tv||rv(r.prototype))?r=void 0:r_(r)&&(r=r[n_],r===null&&(r=void 0))),r===void 0?tv:r}});var Dn=a((H6,av)=>{"use strict";var i_=iv();av.exports=function(e,r){return new(i_(e))(r===0?0:r)}});var eo=a(()=>{"use strict";var a_=x(),o_=P(),u_=Ie(),s_=$(),c_=re(),l_=le(),ov=kt(),uv=Gr(),f_=Ur(),p_=Dn(),v_=qt(),d_=R(),m_=jr(),sv=d_("isConcatSpreadable"),h_=m_>=51||!o_(function(){var e=[];return e[sv]=!1,e.concat()[0]!==e}),y_=function(e){if(!s_(e))return!1;var r=e[sv];return r!==void 0?!!r:u_(e)},g_=!h_||!v_("concat");a_({target:"Array",proto:!0,arity:1,forced:g_},{concat:function(r){var t=c_(this),n=p_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],y_(s))for(c=l_(s),ov(i+c),u=0;u<c;u++,i++)u in s&&uv(n,i,s[u]);else ov(i+1),uv(n,i++,s);return f_(n,i),n}})});var It=a(()=>{});var Pt=a(cv=>{"use strict";var b_=ja(),q_=Pn(),x_=q_.concat("length","prototype");cv.f=Object.getOwnPropertyNames||function(r){return b_(r,x_)}});var ro=a((Q6,pv)=>{"use strict";var S_=qe(),w_=ke(),lv=Pt().f,T_=lr(),fv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],C_=function(e){try{return lv(e)}catch{return T_(fv)}};pv.exports.f=function(r){return fv&&S_(r)==="Window"?C_(r):lv(w_(r))}});var Bn=a(vv=>{"use strict";vv.f=Object.getOwnPropertySymbols});var Gn=a((Z6,dv)=>{"use strict";var E_=te();dv.exports=function(e,r,t){return E_.f(e,r,t)}});var Wr=a(mv=>{"use strict";var O_=R();mv.f=O_});var M=a((r8,yv)=>{"use strict";var hv=W(),k_=K(),I_=Wr(),P_=te().f;yv.exports=function(e){var r=hv.Symbol||(hv.Symbol={});k_(r,e)||P_(r,e,{value:I_.f(e)})}});var to=a((t8,gv)=>{"use strict";var __=D(),R_=U(),A_=R(),N_=Pe();gv.exports=function(){var e=R_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=A_("toPrimitive");r&&!r[n]&&N_(r,n,function(i){return __(t,this)},{arity:1})}});var _t=a((n8,qv)=>{"use strict";var M_=z(),j_=bn(),$_=re(),L_=le(),bv=Dn(),no=Gr(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=$_(c),v=j_(p),d=L_(v),h=M_(s,f),m=0,y=0,q=r?bv(c,d):t||u?bv(c,0):void 0,b,k;d>m;m++)if((l||m in v)&&(b=v[m],k=h(b,m,p),e))if(r)no(q,m,k);else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:no(q,y++,b)}else switch(e){case 4:return!1;case 7:no(q,y++,b)}return o?-1:n||i?i:q}};qv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var $v=a(()=>{"use strict";var Un=x(),Nt=_(),po=D(),F_=A(),D_=Z(),zr=G(),Vr=sr(),B_=P(),H=K(),G_=B(),uo=X(),Kn=ke(),vo=Sn(),U_=Ve(),so=We(),Yr=Je(),wv=_n(),K_=Pt(),Tv=ro(),H_=Bn(),Cv=dt(),Ev=te(),W_=$a(),Ov=ta(),io=Pe(),z_=Gn(),mo=cr(),V_=xt(),kv=Hr(),xv=Lr(),Y_=R(),J_=Wr(),Q_=M(),X_=to(),Z_=Re(),Iv=Ye(),Hn=_t().forEach,ne=V_("hidden"),Wn="Symbol",At="prototype",eR=Iv.set,Sv=Iv.getterFor(Wn),fe=Object[At],dr=Nt.Symbol,Rt=dr&&dr[At],rR=Nt.RangeError,tR=Nt.TypeError,ao=Nt.QObject,Pv=Cv.f,mr=Ev.f,_v=Tv.f,nR=Ov.f,Rv=F_([].push),Ae=mo("symbols"),Mt=mo("op-symbols"),iR=mo("wks"),co=!ao||!ao[At]||!ao[At].findChild,Av=function(e,r,t){var n=Pv(fe,r);n&&delete fe[r],mr(e,r,t),n&&e!==fe&&mr(fe,r,n)},lo=zr&&B_(function(){return Yr(mr({},"a",{get:function(){return mr(this,"a",{value:7}).a}})).a!==7})?Av:mr,oo=function(e,r){var t=Ae[e]=Yr(Rt);return eR(t,{type:Wn,tag:e,description:r}),zr||(t.description=r),t},zn=function(r,t,n){r===fe&&zn(Mt,t,n),uo(r);var i=vo(t);return uo(n),H(Ae,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Yr(n,{enumerable:so(0,!1)})):(H(r,ne)||mr(r,ne,so(1,Yr(null))),r[ne][i]=!0),lo(r,i,n)):mr(r,i,n)},ho=function(r,t){uo(r);var n=Kn(t),i=wv(n).concat(jv(n));return Hn(i,function(o){(!zr||po(fo,n,o))&&zn(r,o,n[o])}),r},aR=function(r,t){return t===void 0?Yr(r):ho(Yr(r),t)},fo=function(r){var t=vo(r),n=po(nR,this,t);return this===fe&&H(Ae,t)&&!H(Mt,t)?!1:n||!H(this,t)||!H(Ae,t)||H(this,ne)&&this[ne][t]?n:!0},Nv=function(r,t){var n=Kn(r),i=vo(t);if(!(n===fe&&H(Ae,i)&&!H(Mt,i))){var o=Pv(n,i);return o&&H(Ae,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Mv=function(r){var t=_v(Kn(r)),n=[];return Hn(t,function(i){!H(Ae,i)&&!H(kv,i)&&Rv(n,i)}),n},jv=function(e){var r=e===fe,t=_v(r?Mt:Kn(e)),n=[];return Hn(t,function(i){H(Ae,i)&&(!r||H(fe,i))&&Rv(n,Ae[i])}),n};Vr||(dr=function(){if(G_(Rt,this))throw new tR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:U_(arguments[0]),t=xv(r),n=function(i){var o=this===void 0?Nt:this;o===fe&&po(n,Mt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=so(1,i);try{lo(o,t,u)}catch(l){if(!(l instanceof rR))throw l;Av(o,t,u)}};return zr&&co&&lo(fe,t,{configurable:!0,set:n}),oo(t,r)},Rt=dr[At],io(Rt,"toString",function(){return Sv(this).tag}),io(dr,"withoutSetter",function(e){return oo(xv(e),e)}),Ov.f=fo,Ev.f=zn,W_.f=ho,Cv.f=Nv,K_.f=Tv.f=Mv,H_.f=jv,J_.f=function(e){return oo(Y_(e),e)},zr&&(z_(Rt,"description",{configurable:!0,get:function(){return Sv(this).description}}),D_||io(fe,"propertyIsEnumerable",fo,{unsafe:!0})));Un({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:dr});Hn(wv(iR),function(e){Q_(e)});Un({target:Wn,stat:!0,forced:!Vr},{useSetter:function(){co=!0},useSimple:function(){co=!1}});Un({target:"Object",stat:!0,forced:!Vr,sham:!zr},{create:aR,defineProperty:zn,defineProperties:ho,getOwnPropertyDescriptor:Nv});Un({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:Mv});X_();Z_(dr,Wn);kv[ne]=!0});var yo=a((o8,Lv)=>{"use strict";var oR=sr();Lv.exports=oR&&!!Symbol.for&&!!Symbol.keyFor});var Dv=a(()=>{"use strict";var uR=x(),sR=U(),cR=K(),lR=Ve(),Fv=cr(),fR=yo(),go=Fv("string-to-symbol-registry"),pR=Fv("symbol-to-string-registry");uR({target:"Symbol",stat:!0,forced:!fR},{for:function(e){var r=lR(e);if(cR(go,r))return go[r];var t=sR("Symbol")(r);return go[r]=t,pR[t]=r,t}})});var Gv=a(()=>{"use strict";var vR=x(),dR=K(),mR=$r(),hR=ze(),yR=cr(),gR=yo(),Bv=yR("symbol-to-string-registry");vR({target:"Symbol",stat:!0,forced:!gR},{keyFor:function(r){if(!mR(r))throw new TypeError(hR(r)+" is not a symbol");if(dR(Bv,r))return Bv[r]}})});var Kv=a((f8,Uv)=>{"use strict";var bR=$(),qR=Ye().get;Uv.exports=function(r){if(!bR(r))return!1;var t=qR(r);return!!t&&t.type==="RawJSON"}});var Yv=a((p8,Vv)=>{"use strict";var bo=A(),xR=K(),Vn=SyntaxError,SR=parseInt,wR=String.fromCharCode,TR=bo("".charAt),Hv=bo("".slice),Wv=bo(/./.exec),zv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},CR=/^[\da-f]{4}$/i,ER=/^[\u0000-\u001F]$/;Vv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=TR(e,r);if(i==="\\"){var o=Hv(e,r,r+2);if(xR(zv,o))n+=zv[o],r+=2;else if(o==="\\u"){r+=2;var u=Hv(e,r,r+4);if(!Wv(CR,u))throw new Vn("Bad Unicode escape at: "+r);n+=wR(SR(u,16)),r+=4}else throw new Vn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Wv(ER,i))throw new Vn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Vn("Unterminated string at: "+r);return{value:n,end:r}}});var Qv=a((v8,Jv)=>{"use strict";var OR=P();Jv.exports=!OR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var fd=a(()=>{"use strict";var kR=x(),ad=U(),IR=Nr(),od=D(),hr=A(),ud=P(),Xv=Ie(),Jn=N(),PR=Kv(),Zv=$r(),ed=qe(),_R=Ve(),RR=lr(),AR=Yv(),NR=Lr(),MR=sr(),qo=Qv(),sd=String,Xe=ad("JSON","stringify"),Yn=hr(/./.exec),So=hr("".charAt),jR=hr("".charCodeAt),$R=hr("".replace),xo=hr("".slice),wo=hr([].push),LR=hr(1.1.toString),FR=/[\uD800-\uDFFF]/g,rd=/^[\uD800-\uDBFF]$/,td=/^[\uDC00-\uDFFF]$/,To=NR(),nd=To.length,cd=!MR||ud(function(){var e=ad("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),id=ud(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),DR=cd?function(e,r){var t=RR(arguments),n=ld(r);if(!(!Jn(n)&&(e===void 0||Zv(e))))return t[1]=function(i,o){if(Jn(n)&&(o=od(n,this,sd(i),o)),!Zv(o))return o},IR(Xe,null,t)}:Xe,BR=function(e,r,t){var n=So(t,r-1),i=So(t,r+1);return Yn(rd,e)&&!Yn(td,i)||Yn(td,e)&&!Yn(rd,n)?"\\u"+LR(jR(e,0),16):e},ld=function(e){if(Jn(e))return e;if(Xv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?wo(t,i):(typeof i=="number"||ed(i)==="Number"||ed(i)==="String")&&wo(t,_R(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Xv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Xe&&kR({target:"JSON",stat:!0,arity:3,forced:cd||id||!qo},{stringify:function(r,t,n){var i=ld(t),o=[],u=DR(r,function(d,h){var m=Jn(i)?od(i,this,sd(d),h):h;return!qo&&PR(m)?To+(wo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(id&&(u=$R(u,FR,BR)),qo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=So(u,s);if(f==='"'){var p=AR(u,++s).end-1,v=xo(u,s,p);l+=xo(v,0,nd)===To?o[xo(v,nd)]:'"'+v+'"',s=p}else l+=f}return l}})});var vd=a(()=>{"use strict";var GR=x(),UR=sr(),KR=P(),pd=Bn(),HR=re(),WR=!UR||KR(function(){pd.f(1)});GR({target:"Object",stat:!0,forced:WR},{getOwnPropertySymbols:function(r){var t=pd.f;return t?t(HR(r)):[]}})});var dd=a(()=>{"use strict";$v();Dv();Gv();fd();vd()});var Co=a(()=>{"use strict";var zR=M();zR("asyncDispose")});var Eo=a(()=>{"use strict";var VR=M();VR("asyncIterator")});var md=a(()=>{});var Oo=a(()=>{"use strict";var YR=M();YR("dispose")});var hd=a(()=>{"use strict";var JR=M();JR("hasInstance")});var yd=a(()=>{"use strict";var QR=M();QR("isConcatSpreadable")});var ko=a(()=>{"use strict";var XR=M();XR("iterator")});var gd=a(()=>{"use strict";var ZR=M();ZR("match")});var bd=a(()=>{"use strict";var eA=M();eA("matchAll")});var qd=a(()=>{"use strict";var rA=M();rA("replace")});var xd=a(()=>{"use strict";var tA=M();tA("search")});var Sd=a(()=>{"use strict";var nA=M();nA("species")});var wd=a(()=>{"use strict";var iA=M();iA("split")});var Io=a(()=>{"use strict";var aA=M(),oA=to();aA("toPrimitive");oA()});var Td=a(()=>{"use strict";var uA=U(),sA=M(),cA=Re();sA("toStringTag");cA(uA("Symbol"),"Symbol")});var Cd=a(()=>{"use strict";var lA=M();lA("unscopables")});var Ed=a(()=>{"use strict";var fA=_(),pA=Re();pA(fA.JSON,"JSON",!0)});var Od=a(()=>{});var kd=a(()=>{});var Pd=a((iK,Id)=>{"use strict";eo();It();dd();Co();Eo();md();Oo();hd();yd();ko();gd();bd();qd();xd();Sd();wd();Io();Td();Cd();Ed();Od();kd();var vA=W();Id.exports=vA.Symbol});var Po=a((aK,_d)=>{"use strict";_d.exports=function(){}});var yr=a((oK,jd)=>{"use strict";var dA=ke(),_o=Po(),Rd=pr(),Nd=Ye(),mA=te().f,hA=jn(),Qn=$n(),yA=Z(),gA=G(),Md="Array Iterator",bA=Nd.set,qA=Nd.getterFor(Md);jd.exports=hA(Array,"Array",function(e,r){bA(this,{type:Md,target:dA(e),index:0,kind:r})},function(){var e=qA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Qn(void 0,!0);switch(e.kind){case"keys":return Qn(t,!1);case"values":return Qn(r[t],!1)}return Qn([t,r[t]],!1)},"values");var Ad=Rd.Arguments=Rd.Array;_o("keys");_o("values");_o("entries");if(!yA&&gA&&Ad.name!=="values")try{mA(Ad,"name",{value:"values"})}catch{}});var Ld=a((uK,$d)=>{"use strict";$d.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var gr=a(()=>{"use strict";yr();var xA=Ld(),SA=_(),wA=Re(),Fd=pr();for(Xn in xA)wA(SA[Xn],Xn),Fd[Xn]=Fd.Array;var Xn});var Bd=a((lK,Dd)=>{"use strict";var TA=Pd();gr();Dd.exports=TA});var Kd=a(()=>{"use strict";var CA=R(),EA=te().f,Gd=CA("metadata"),Ud=Function.prototype;Ud[Gd]===void 0&&EA(Ud,Gd,{value:null})});var Hd=a(()=>{"use strict";Co()});var Wd=a(()=>{"use strict";Oo()});var zd=a(()=>{"use strict";var OA=M();OA("metadata")});var Yd=a((bK,Vd)=>{"use strict";var kA=Bd();Kd();Hd();Wd();zd();Vd.exports=kA});var Ao=a((qK,Jd)=>{"use strict";var IA=U(),PA=A(),Ro=IA("Symbol"),_A=Ro.keyFor,RA=PA(Ro.prototype.valueOf);Jd.exports=Ro.isRegisteredSymbol||function(r){try{return _A(RA(r))!==void 0}catch{return!1}}});var Qd=a(()=>{"use strict";var AA=x(),NA=Ao();AA({target:"Symbol",stat:!0},{isRegisteredSymbol:NA})});var jo=a((wK,nm)=>{"use strict";var MA=cr(),rm=U(),jA=A(),$A=$r(),LA=R(),ei=rm("Symbol"),Xd=ei.isWellKnownSymbol,tm=rm("Object","getOwnPropertyNames"),FA=jA(ei.prototype.valueOf),Zd=MA("wks");for(Zn=0,No=tm(ei),em=No.length;Zn<em;Zn++)try{Mo=No[Zn],$A(ei[Mo])&&LA(Mo)}catch{}var Mo,Zn,No,em;nm.exports=function(r){if(Xd&&Xd(r))return!0;try{for(var t=FA(r),n=0,i=tm(Zd),o=i.length;n<o;n++)if(Zd[i[n]]==t)return!0}catch{}return!1}});var im=a(()=>{"use strict";var DA=x(),BA=jo();DA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:BA})});var am=a(()=>{"use strict";var GA=M();GA("customMatcher")});var om=a(()=>{"use strict";var UA=M();UA("observable")});var um=a(()=>{"use strict";var KA=x(),HA=Ao();KA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:HA})});var sm=a(()=>{"use strict";var WA=x(),zA=jo();WA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:zA})});var cm=a(()=>{"use strict";var VA=M();VA("matcher")});var lm=a(()=>{"use strict";var YA=M();YA("metadataKey")});var fm=a(()=>{"use strict";var JA=M();JA("patternMatch")});var pm=a(()=>{"use strict";var QA=M();QA("replaceAll")});var dm=a((GK,vm)=>{"use strict";var XA=Yd();Qd();im();am();om();um();sm();cm();lm();fm();pm();vm.exports=XA});var Se=a((UK,mm)=>{"use strict";mm.exports=dm()});var ri=a((KK,hm)=>{hm.exports=Se()});var gm=a((HK,ym)=>{"use strict";yr();vr();var ZA=Ot();ym.exports=ZA});var qm=a((WK,bm)=>{"use strict";var eN=gm();gr();bm.exports=eN});var Sm=a((zK,xm)=>{"use strict";var rN=qm();xm.exports=rN});var Tm=a((VK,wm)=>{"use strict";var tN=Sm();wm.exports=tN});var $o=a((YK,Cm)=>{"use strict";Cm.exports=Tm()});var ti=a((JK,Em)=>{Em.exports=$o()});var km=a((QK,Om)=>{"use strict";yr();vr();var nN=Ln();Om.exports=nN});var Pm=a((XK,Im)=>{"use strict";var iN=km();gr();Im.exports=iN});var Rm=a((ZK,_m)=>{"use strict";var aN=Pm();_m.exports=aN});var Nm=a((eH,Am)=>{"use strict";var oN=Rm();Am.exports=oN});var jm=a((rH,Mm)=>{"use strict";Mm.exports=Nm()});var ni=a((tH,$m)=>{$m.exports=jm()});var Fm=a((nH,Lm)=>{"use strict";var uN=U(),sN=A(),cN=Pt(),lN=Bn(),fN=X(),pN=sN([].concat);Lm.exports=uN("Reflect","ownKeys")||function(r){var t=cN.f(fN(r)),n=lN.f;return n?pN(t,n(r)):t}});var Gm=a((iH,Bm)=>{"use strict";var Dm=K(),vN=Fm(),dN=dt(),mN=te();Bm.exports=function(e,r,t){for(var n=vN(r),i=mN.f,o=dN.f,u=0;u<n.length;u++){var l=n[u];!Dm(e,l)&&!(t&&Dm(t,l))&&i(e,l,o(r,l))}}});var Km=a((aH,Um)=>{"use strict";var hN=$(),yN=xe();Um.exports=function(e,r){hN(r)&&"cause"in r&&yN(e,"cause",r.cause)}});var Vm=a((oH,zm)=>{"use strict";var gN=A(),Hm=Error,bN=gN("".replace),qN=function(e){return String(new Hm(e).stack)}("zxcasd"),Wm=/\n\s*at [^:]*:[^\n]*/,xN=Wm.test(qN);zm.exports=function(e,r){if(xN&&typeof e=="string"&&!Hm.prepareStackTrace)for(;r--;)e=bN(e,Wm,"");return e}});var Jm=a((uH,Ym)=>{"use strict";var SN=P(),wN=We();Ym.exports=!SN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",wN(1,7)),e.stack!==7):!0})});var Zm=a((sH,Xm)=>{"use strict";var TN=xe(),CN=Vm(),EN=Jm(),Qm=Error.captureStackTrace;Xm.exports=function(e,r,t,n){EN&&(Qm?Qm(e,r):TN(e,"stack",CN(t,n)))}});var pe=a((cH,nh)=>{"use strict";var ON=z(),kN=D(),IN=X(),PN=ze(),_N=Ja(),RN=le(),eh=B(),AN=Ln(),NN=Ot(),rh=Ya(),MN=TypeError,ii=function(e,r){this.stopped=e,this.result=r},th=ii.prototype;nh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=ON(r,n),s,f,p,v,d,h,m,y=function(b){return s&&rh(s,"normal"),new ii(!0,b)},q=function(b){return i?(IN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=NN(e),!f)throw new MN(PN(e)+" is not iterable");if(_N(f)){for(p=0,v=RN(e);v>p;p++)if(d=q(e[p]),d&&eh(th,d))return d;return new ii(!1)}s=AN(e,f)}for(h=o?e.next:s.next;!(m=kN(h,s)).done;){try{d=q(m.value)}catch(b){rh(s,"throw",b)}if(typeof d=="object"&&d&&eh(th,d))return d}return new ii(!1)}});var ah=a((lH,ih)=>{"use strict";var jN=Ve();ih.exports=function(e,r){return e===void 0?arguments.length<2?"":r:jN(e)}});var uh=a(()=>{"use strict";var $N=x(),LN=B(),FN=wt(),ai=Tt(),DN=Gm(),oh=Je(),Lo=xe(),Fo=We(),BN=Km(),GN=Zm(),UN=pe(),KN=ah(),HN=R(),WN=HN("toStringTag"),oi=Error,zN=[].push,Jr=function(r,t){var n=LN(Do,this),i;ai?i=ai(new oi,n?FN(this):Do):(i=n?this:oh(Do),Lo(i,WN,"Error")),t!==void 0&&Lo(i,"message",KN(t)),GN(i,Jr,i.stack,1),arguments.length>2&&BN(i,arguments[2]);var o=[];return UN(r,zN,{that:o}),Lo(i,"errors",o),i};ai?ai(Jr,oi):DN(Jr,oi,{name:!0});var Do=Jr.prototype=oh(oi.prototype,{constructor:Fo(1,Jr),message:Fo(1,""),name:Fo(1,"AggregateError")});$N({global:!0,constructor:!0,arity:2},{AggregateError:Jr})});var Bo=a(()=>{"use strict";uh()});var Go=a((mH,sh)=>{"use strict";var jt=_(),VN=Mr(),YN=qe(),ui=function(e){return VN.slice(0,e.length)===e};sh.exports=function(){return ui("Bun/")?"BUN":ui("Cloudflare-Workers")?"CLOUDFLARE":ui("Deno/")?"DENO":ui("Node.js/")?"NODE":jt.Bun&&typeof Bun.version=="string"?"BUN":jt.Deno&&typeof Deno.version=="object"?"DENO":YN(jt.process)==="process"?"NODE":jt.window&&jt.document?"BROWSER":"REST"}()});var $t=a((hH,ch)=>{"use strict";var JN=Go();ch.exports=JN==="NODE"});var Uo=a((yH,fh)=>{"use strict";var QN=U(),XN=Gn(),ZN=R(),e2=G(),lh=ZN("species");fh.exports=function(e){var r=QN(e);e2&&r&&!r[lh]&&XN(r,lh,{configurable:!0,get:function(){return this}})}});var si=a((gH,ph)=>{"use strict";var r2=B(),t2=TypeError;ph.exports=function(e,r){if(r2(r,e))return e;throw new t2("Incorrect invocation")}});var Ko=a((bH,vh)=>{"use strict";var n2=bt(),i2=ze(),a2=TypeError;vh.exports=function(e){if(n2(e))return e;throw new a2(i2(e)+" is not a constructor")}});var Ho=a((qH,mh)=>{"use strict";var dh=X(),o2=Ko(),u2=or(),s2=R(),c2=s2("species");mh.exports=function(e,r){var t=dh(e).constructor,n;return t===void 0||u2(n=dh(t)[c2])?r:o2(n)}});var yh=a((xH,hh)=>{"use strict";var l2=TypeError;hh.exports=function(e,r){if(e<r)throw new l2("Not enough arguments");return e}});var Wo=a((SH,gh)=>{"use strict";var f2=Mr();gh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(f2)});var ru=a((wH,Oh)=>{"use strict";var ue=_(),p2=Nr(),v2=z(),bh=N(),d2=K(),Eh=P(),qh=La(),m2=lr(),xh=wn(),h2=yh(),y2=Wo(),g2=$t(),Xo=ue.setImmediate,Zo=ue.clearImmediate,b2=ue.process,zo=ue.Dispatch,q2=ue.Function,Sh=ue.MessageChannel,x2=ue.String,Vo=0,Lt={},wh="onreadystatechange",Ft,br,Yo,Jo;Eh(function(){Ft=ue.location});var eu=function(e){if(d2(Lt,e)){var r=Lt[e];delete Lt[e],r()}},Qo=function(e){return function(){eu(e)}},Th=function(e){eu(e.data)},Ch=function(e){ue.postMessage(x2(e),Ft.protocol+"//"+Ft.host)};(!Xo||!Zo)&&(Xo=function(r){h2(arguments.length,1);var t=bh(r)?r:q2(r),n=m2(arguments,1);return Lt[++Vo]=function(){p2(t,void 0,n)},br(Vo),Vo},Zo=function(r){delete Lt[r]},g2?br=function(e){b2.nextTick(Qo(e))}:zo&&zo.now?br=function(e){zo.now(Qo(e))}:Sh&&!y2?(Yo=new Sh,Jo=Yo.port2,Yo.port1.onmessage=Th,br=v2(Jo.postMessage,Jo)):ue.addEventListener&&bh(ue.postMessage)&&!ue.importScripts&&Ft&&Ft.protocol!=="file:"&&!Eh(Ch)?(br=Ch,ue.addEventListener("message",Th,!1)):wh in xh("script")?br=function(e){qh.appendChild(xh("script"))[wh]=function(){qh.removeChild(this),eu(e)}}:br=function(e){setTimeout(Qo(e),0)});Oh.exports={set:Xo,clear:Zo}});var Ph=a((TH,Ih)=>{"use strict";var kh=_(),S2=G(),w2=Object.getOwnPropertyDescriptor;Ih.exports=function(e){if(!S2)return kh[e];var r=w2(kh,e);return r&&r.value}});var tu=a((CH,Rh)=>{"use strict";var _h=function(){this.head=null,this.tail=null};_h.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Rh.exports=_h});var Nh=a((EH,Ah)=>{"use strict";var T2=Mr();Ah.exports=/ipad|iphone|ipod/i.test(T2)&&typeof Pebble<"u"});var jh=a((OH,Mh)=>{"use strict";var C2=Mr();Mh.exports=/web0s(?!.*chrome)/i.test(C2)});var Uh=a((kH,Gh)=>{"use strict";var Xr=_(),E2=Ph(),$h=z(),nu=ru().set,O2=tu(),k2=Wo(),I2=Nh(),P2=jh(),iu=$t(),Lh=Xr.MutationObserver||Xr.WebKitMutationObserver,Fh=Xr.document,Dh=Xr.process,ci=Xr.Promise,uu=E2("queueMicrotask"),Qr,au,ou,li,Bh;uu||(Dt=new O2,Bt=function(){var e,r;for(iu&&(e=Dh.domain)&&e.exit();r=Dt.get();)try{r()}catch(t){throw Dt.head&&Qr(),t}e&&e.enter()},!k2&&!iu&&!P2&&Lh&&Fh?(au=!0,ou=Fh.createTextNode(""),new Lh(Bt).observe(ou,{characterData:!0}),Qr=function(){ou.data=au=!au}):!I2&&ci&&ci.resolve?(li=ci.resolve(void 0),li.constructor=ci,Bh=$h(li.then,li),Qr=function(){Bh(Bt)}):iu?Qr=function(){Dh.nextTick(Bt)}:(nu=$h(nu,Xr),Qr=function(){nu(Bt)}),uu=function(e){Dt.head||Qr(),Dt.add(e)});var Dt,Bt;Gh.exports=uu});var Hh=a((IH,Kh)=>{"use strict";Kh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var qr=a((PH,Wh)=>{"use strict";Wh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var xr=a((_H,zh)=>{"use strict";var _2=_();zh.exports=_2.Promise});var Zr=a((RH,Qh)=>{"use strict";var R2=_(),Gt=xr(),A2=N(),N2=da(),M2=xa(),j2=R(),Vh=Go(),$2=Z(),su=jr(),Yh=Gt&&Gt.prototype,L2=j2("species"),cu=!1,Jh=A2(R2.PromiseRejectionEvent),F2=N2("Promise",function(){var e=M2(Gt),r=e!==String(Gt);if(!r&&su===66||$2&&!(Yh.catch&&Yh.finally))return!0;if(!su||su<51||!/native code/.test(e)){var t=new Gt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[L2]=n,cu=t.then(function(){})instanceof n,!cu)return!0}return!r&&(Vh==="BROWSER"||Vh==="DENO")&&!Jh});Qh.exports={CONSTRUCTOR:F2,REJECTION_EVENT:Jh,SUBCLASSING:cu}});var we=a((AH,Zh)=>{"use strict";var Xh=F(),D2=TypeError,B2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new D2("Bad Promise constructor");r=n,t=i}),this.resolve=Xh(r),this.reject=Xh(t)};Zh.exports.f=function(e){return new B2(e)}});var by=a(()=>{"use strict";var G2=x(),U2=Z(),di=$t(),Ze=_(),K2=W(),nt=D(),ey=Pe(),ry=Tt(),H2=Re(),W2=Uo(),z2=F(),vi=N(),V2=$(),Y2=si(),J2=Ho(),oy=ru().set,du=Uh(),Q2=Hh(),X2=qr(),Z2=tu(),uy=Ye(),mi=xr(),mu=Zr(),sy=we(),hi="Promise",cy=mu.CONSTRUCTOR,eM=mu.REJECTION_EVENT,rM=mu.SUBCLASSING,lu=uy.getterFor(hi),tM=uy.set,et=mi&&mi.prototype,Sr=mi,fi=et,ly=Ze.TypeError,fu=Ze.document,hu=Ze.process,pu=sy.f,nM=pu,iM=!!(fu&&fu.createEvent&&Ze.dispatchEvent),fy="unhandledrejection",aM="rejectionhandled",ty=0,py=1,oM=2,yu=1,vy=2,pi,ny,dy,iy,my=function(e){var r;return V2(e)&&vi(r=e.then)?r:!1},hy=function(e,r){var t=r.value,n=r.state===py,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===vy&&sM(r),r.rejection=yu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ly("Promise-chain cycle")):(s=my(c))?nt(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},yy=function(e,r){e.notified||(e.notified=!0,du(function(){for(var t=e.reactions,n;n=t.get();)hy(n,e);e.notified=!1,r&&!e.rejection&&uM(e)}))},gy=function(e,r,t){var n,i;iM?(n=fu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!eM&&(i=Ze["on"+e])?i(n):e===fy&&Q2("Unhandled promise rejection",t)},uM=function(e){nt(oy,Ze,function(){var r=e.facade,t=e.value,n=ay(e),i;if(n&&(i=X2(function(){di?hu.emit("unhandledRejection",t,r):gy(fy,r,t)}),e.rejection=di||ay(e)?vy:yu,i.error))throw i.value})},ay=function(e){return e.rejection!==yu&&!e.parent},sM=function(e){nt(oy,Ze,function(){var r=e.facade;di?hu.emit("rejectionHandled",r):gy(aM,r,e.value)})},rt=function(e,r,t){return function(n){e(r,n,t)}},tt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=oM,yy(e,!0))},vu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ly("Promise can't be resolved itself");var n=my(r);n?du(function(){var i={done:!1};try{nt(n,r,rt(vu,i,e),rt(tt,i,e))}catch(o){tt(i,o,e)}}):(e.value=r,e.state=py,yy(e,!1))}catch(i){tt({done:!1},i,e)}}};if(cy&&(Sr=function(r){Y2(this,fi),z2(r),nt(pi,this);var t=lu(this);try{r(rt(vu,t),rt(tt,t))}catch(n){tt(t,n)}},fi=Sr.prototype,pi=function(r){tM(this,{type:hi,done:!1,notified:!1,parent:!1,reactions:new Z2,rejection:!1,state:ty,value:null})},pi.prototype=ey(fi,"then",function(r,t){var n=lu(this),i=pu(J2(this,Sr));return n.parent=!0,i.ok=vi(r)?r:!0,i.fail=vi(t)&&t,i.domain=di?hu.domain:void 0,n.state===ty?n.reactions.add(i):du(function(){hy(i,n)}),i.promise}),ny=function(){var e=new pi,r=lu(e);this.promise=e,this.resolve=rt(vu,r),this.reject=rt(tt,r)},sy.f=pu=function(e){return e===Sr||e===dy?new ny(e):nM(e)},!U2&&vi(mi)&&et!==Object.prototype)){iy=et.then,rM||ey(et,"then",function(r,t){var n=this;return new Sr(function(i,o){nt(iy,n,i,o)}).then(r,t)},{unsafe:!0});try{delete et.constructor}catch{}ry&&ry(et,fi)}G2({global:!0,constructor:!0,wrap:!0,forced:cy},{Promise:Sr});dy=K2.Promise;H2(Sr,hi,!1,!0);W2(hi)});var Ut=a((jH,qy)=>{"use strict";var cM=xr(),lM=Xa(),fM=Zr().CONSTRUCTOR;qy.exports=fM||!lM(function(e){cM.all(e).then(void 0,function(){})})});var xy=a(()=>{"use strict";var pM=x(),vM=D(),dM=F(),mM=we(),hM=qr(),yM=pe(),gM=Ut();pM({target:"Promise",stat:!0,forced:gM},{all:function(r){var t=this,n=mM.f(t),i=n.resolve,o=n.reject,u=hM(function(){var l=dM(t.resolve),c=[],s=0,f=1;yM(r,function(p){var v=s++,d=!1;f++,vM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var wy=a(()=>{"use strict";var bM=x(),qM=Z(),xM=Zr().CONSTRUCTOR,bu=xr(),SM=U(),wM=N(),TM=Pe(),Sy=bu&&bu.prototype;bM({target:"Promise",proto:!0,forced:xM,real:!0},{catch:function(e){return this.then(void 0,e)}});!qM&&wM(bu)&&(gu=SM("Promise").prototype.catch,Sy.catch!==gu&&TM(Sy,"catch",gu,{unsafe:!0}));var gu});var Ty=a(()=>{"use strict";var CM=x(),EM=D(),OM=F(),kM=we(),IM=qr(),PM=pe(),_M=Ut();CM({target:"Promise",stat:!0,forced:_M},{race:function(r){var t=this,n=kM.f(t),i=n.reject,o=IM(function(){var u=OM(t.resolve);PM(r,function(l){EM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Cy=a(()=>{"use strict";var RM=x(),AM=we(),NM=Zr().CONSTRUCTOR;RM({target:"Promise",stat:!0,forced:NM},{reject:function(r){var t=AM.f(this),n=t.reject;return n(r),t.promise}})});var qu=a((HH,Ey)=>{"use strict";var MM=X(),jM=$(),$M=we();Ey.exports=function(e,r){if(MM(e),jM(r)&&r.constructor===e)return r;var t=$M.f(e),n=t.resolve;return n(r),t.promise}});var Iy=a(()=>{"use strict";var LM=x(),FM=U(),Oy=Z(),DM=xr(),ky=Zr().CONSTRUCTOR,BM=qu(),GM=FM("Promise"),UM=Oy&&!ky;LM({target:"Promise",stat:!0,forced:Oy||ky},{resolve:function(r){return BM(UM&&this===GM?DM:this,r)}})});var Py=a(()=>{"use strict";by();xy();wy();Ty();Cy();Iy()});var xu=a(()=>{"use strict";var KM=x(),HM=D(),WM=F(),zM=we(),VM=qr(),YM=pe(),JM=Ut();KM({target:"Promise",stat:!0,forced:JM},{allSettled:function(r){var t=this,n=zM.f(t),i=n.resolve,o=n.reject,u=VM(function(){var l=WM(t.resolve),c=[],s=0,f=1;YM(r,function(p){var v=s++,d=!1;f++,HM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Su=a(()=>{"use strict";var QM=x(),XM=D(),ZM=F(),ej=U(),rj=we(),tj=qr(),nj=pe(),ij=Ut(),_y="No one promise resolved";QM({target:"Promise",stat:!0,forced:ij},{any:function(r){var t=this,n=ej("AggregateError"),i=rj.f(t),o=i.resolve,u=i.reject,l=tj(function(){var c=ZM(t.resolve),s=[],f=0,p=1,v=!1;nj(r,function(d){var h=f++,m=!1;p++,XM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,_y)))})}),--p||u(new n(s,_y))});return l.error&&u(l.value),i.promise}})});var Tu=a(()=>{"use strict";var aj=x(),oj=_(),uj=Nr(),sj=lr(),cj=we(),lj=F(),Ay=qr(),wu=oj.Promise,Ry=!1,fj=!wu||!wu.try||Ay(function(){wu.try(function(e){Ry=e===8},8)}).error||!Ry;aj({target:"Promise",stat:!0,forced:fj},{try:function(e){var r=arguments.length>1?sj(arguments,1):[],t=cj.f(this),n=Ay(function(){return uj(lj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Cu=a(()=>{"use strict";var pj=x(),vj=we();pj({target:"Promise",stat:!0},{withResolvers:function(){var r=vj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var $y=a(()=>{"use strict";var dj=x(),mj=Z(),yi=xr(),hj=P(),My=U(),jy=N(),yj=Ho(),Ny=qu(),gj=Pe(),Ou=yi&&yi.prototype,bj=!!yi&&hj(function(){Ou.finally.call({then:function(){}},function(){})});dj({target:"Promise",proto:!0,real:!0,forced:bj},{finally:function(e){var r=yj(this,My("Promise")),t=jy(e);return this.then(t?function(n){return Ny(r,e()).then(function(){return n})}:e,t?function(n){return Ny(r,e()).then(function(){throw n})}:e)}});!mj&&jy(yi)&&(Eu=My("Promise").prototype.finally,Ou.finally!==Eu&&gj(Ou,"finally",Eu,{unsafe:!0}));var Eu});var Fy=a((oW,Ly)=>{"use strict";Bo();yr();It();Py();xu();Su();Tu();Cu();$y();vr();var qj=W();Ly.exports=qj.Promise});var By=a((uW,Dy)=>{"use strict";var xj=Fy();gr();Dy.exports=xj});var Gy=a(()=>{"use strict";Tu()});var Uy=a(()=>{"use strict";Cu()});var Hy=a((pW,Ky)=>{"use strict";var Sj=By();Gy();Uy();Ky.exports=Sj});var Wy=a(()=>{"use strict";Bo()});var zy=a(()=>{"use strict";xu()});var Vy=a(()=>{"use strict";Su()});var Jy=a((bW,Yy)=>{"use strict";var wj=Hy();Wy();zy();Vy();Yy.exports=wj});var it=a((qW,Qy)=>{"use strict";Qy.exports=Jy()});var eg=a((CW,Zy)=>{"use strict";Eo();var Tj=Wr();Zy.exports=Tj.f("asyncIterator")});var tg=a((EW,rg)=>{"use strict";var Cj=eg();rg.exports=Cj});var ig=a((OW,ng)=>{"use strict";var Ej=tg();ng.exports=Ej});var og=a((kW,ag)=>{"use strict";var Oj=ig();ag.exports=Oj});var gi=a((IW,ug)=>{"use strict";ug.exports=og()});var fg=a(()=>{"use strict";var kj=x(),Ij=P(),Pj=re(),lg=wt(),_j=Ga(),Rj=Ij(function(){lg(1)});kj({target:"Object",stat:!0,forced:Rj,sham:!_j},{getPrototypeOf:function(r){return lg(Pj(r))}})});var vg=a((NW,pg)=>{"use strict";fg();var Aj=W();pg.exports=Aj.Object.getPrototypeOf});var mg=a((MW,dg)=>{"use strict";var Nj=vg();dg.exports=Nj});var yg=a((jW,hg)=>{"use strict";var Mj=mg();hg.exports=Mj});var bg=a(($W,gg)=>{"use strict";var jj=yg();gg.exports=jj});var bi=a((LW,qg)=>{"use strict";qg.exports=bg()});var Sg=a(()=>{"use strict";var $j=x(),Lj=A(),Fj=Ie(),Dj=Lj([].reverse),xg=[1,2];$j({target:"Array",proto:!0,forced:String(xg)===String(xg.reverse())},{reverse:function(){return Fj(this)&&(this.length=this.length),Dj(this)}})});var Tg=a((BW,wg)=>{"use strict";Sg();var Bj=oe();wg.exports=Bj("Array","reverse")});var Eg=a((GW,Cg)=>{"use strict";var Gj=B(),Uj=Tg(),Pu=Array.prototype;Cg.exports=function(e){var r=e.reverse;return e===Pu||Gj(Pu,e)&&r===Pu.reverse?Uj:r}});var kg=a((UW,Og)=>{"use strict";var Kj=Eg();Og.exports=Kj});var Pg=a((KW,Ig)=>{"use strict";var Hj=kg();Ig.exports=Hj});var Rg=a((HW,_g)=>{"use strict";var Wj=Pg();_g.exports=Wj});var Ng=a((WW,Ag)=>{"use strict";Ag.exports=Rg()});var _u=a((zW,Wt)=>{function zj(e,r){this.v=e,this.k=r}Wt.exports=zj,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Mg=a(()=>{"use strict";var Vj=x(),Yj=G(),Jj=Je();Vj({target:"Object",stat:!0,sham:!Yj},{create:Jj})});var $g=a((JW,jg)=>{"use strict";Mg();var Qj=W(),Xj=Qj.Object;jg.exports=function(r,t){return Xj.create(r,t)}});var Fg=a((QW,Lg)=>{"use strict";var Zj=$g();Lg.exports=Zj});var Bg=a((XW,Dg)=>{"use strict";var e$=Fg();Dg.exports=e$});var Ug=a((ZW,Gg)=>{"use strict";var r$=Bg();Gg.exports=r$});var qi=a((ez,Kg)=>{"use strict";Kg.exports=Ug()});var Au=a((rz,Vg)=>{"use strict";var Wg=A(),t$=F(),n$=$(),i$=K(),Hg=lr(),a$=Ar(),zg=Function,o$=Wg([].concat),u$=Wg([].join),Ru={},s$=function(e,r,t){if(!i$(Ru,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Ru[r]=zg("C,a","return new C("+u$(n,",")+")")}return Ru[r](e,t)};Vg.exports=a$?zg.bind:function(r){var t=t$(this),n=t.prototype,i=Hg(arguments,1),o=function(){var l=o$(i,Hg(arguments));return this instanceof o?s$(t,l.length,l):t.apply(r,l)};return n$(n)&&(o.prototype=n),o}});var Jg=a(()=>{"use strict";var c$=x(),Yg=Au();c$({target:"Function",proto:!0,forced:Function.bind!==Yg},{bind:Yg})});var Xg=a((iz,Qg)=>{"use strict";Jg();var l$=oe();Qg.exports=l$("Function","bind")});var eb=a((az,Zg)=>{"use strict";var f$=B(),p$=Xg(),Nu=Function.prototype;Zg.exports=function(e){var r=e.bind;return e===Nu||f$(Nu,e)&&r===Nu.bind?p$:r}});var tb=a((oz,rb)=>{"use strict";var v$=eb();rb.exports=v$});var ib=a((uz,nb)=>{"use strict";var d$=tb();nb.exports=d$});var ob=a((sz,ab)=>{"use strict";var m$=ib();ab.exports=m$});var zt=a((cz,ub)=>{"use strict";ub.exports=ob()});var sb=a(()=>{"use strict";var h$=x(),y$=Tt();h$({target:"Object",stat:!0},{setPrototypeOf:y$})});var lb=a((pz,cb)=>{"use strict";sb();var g$=W();cb.exports=g$.Object.setPrototypeOf});var pb=a((vz,fb)=>{"use strict";var b$=lb();fb.exports=b$});var db=a((dz,vb)=>{"use strict";var q$=pb();vb.exports=q$});var hb=a((mz,mb)=>{"use strict";var x$=db();mb.exports=x$});var xi=a((hz,yb)=>{"use strict";yb.exports=hb()});var bb=a(()=>{"use strict";var S$=x(),w$=G(),gb=te().f;S$({target:"Object",stat:!0,forced:Object.defineProperty!==gb,sham:!w$},{defineProperty:gb})});var Sb=a((bz,xb)=>{"use strict";bb();var T$=W(),qb=T$.Object,C$=xb.exports=function(r,t,n){return qb.defineProperty(r,t,n)};qb.defineProperty.sham&&(C$.sham=!0)});var Tb=a((qz,wb)=>{"use strict";var E$=Sb();wb.exports=E$});var Eb=a((xz,Cb)=>{"use strict";var O$=Tb();Cb.exports=O$});var kb=a((Sz,Ob)=>{"use strict";var k$=Eb();Ob.exports=k$});var Vt=a((wz,Ib)=>{"use strict";Ib.exports=kb()});var Mu=a((Tz,Ne)=>{var I$=Vt();function Si(e,r,t,n){var i=I$;try{i({},"",{})}catch{i=0}Ne.exports=Si=function(u,l,c,s){function f(p,v){Si(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,Si(e,r,t,n)}Ne.exports=Si,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var $u=a((Cz,Me)=>{var Pb=Se(),ju=qi(),P$=zt(),_$=bi(),_b=xi(),Ce=Mu();function Rb(){var e,r,t=typeof Pb=="function"?Pb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=ju(q.prototype);return Ce(b,"_invoke",function(k,O,S){var T,w,E,j=0,ge=S||[],I=!1,ee={p:0,n:0,v:e,a:be,f:P$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,E=e,ee.n=ve,u}};function be(Q,L){for(w=Q,E=L,r=0;!I&&j&&!ve&&r<ge.length;r++){var ve,C=ge[r],_r=ee.p,He=C[2];Q>3?(ve=He===L)&&(E=C[(w=C[4])?5:(w=3,3)],C[4]=C[5]=e):C[0]<=_r&&((ve=Q<2&&_r<C[1])?(w=0,ee.v=L,ee.n=C[1]):_r<He&&(ve=Q<3||C[0]>L||L>He)&&(C[4]=Q,C[5]=L,ee.n=He,w=0))}if(ve||Q>1)return u;throw I=!0,L}return function(Q,L,ve){if(j>1)throw TypeError("Generator is already running");for(I&&L===1&&be(L,ve),w=L,E=ve;(r=w<2?e:E)||!I;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,E)):ee.n=E:ee.v=E);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(I=ee.n<0)?E:k.call(O,ee))!==u)break}catch(C){T=e,w=1,E=C}finally{j=1}}return{value:r,done:I}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=_$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=s.prototype=l.prototype=ju(f);function v(d){return _b?_b(d,s):(d.__proto__=s,Ce(d,i,"GeneratorFunction")),d.prototype=ju(p),d}return c.prototype=s,Ce(p,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(Me.exports=Rb=function(){return{w:o,m:v}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=Rb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Du=a((Ez,Yt)=>{var R$=Se(),A$=gi(),N$=_u(),Lu=Mu();function Fu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof N$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Lu(Fu.prototype),Lu(Fu.prototype,typeof R$=="function"&&A$||"@asyncIterator",function(){return this})),Lu(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Yt.exports=Fu,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Bu=a((Oz,Jt)=>{var M$=it(),j$=$u(),$$=Du();function L$(e,r,t,n,i){return new $$(j$().w(e,r,t,n),i||M$)}Jt.exports=L$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Ab=a((kz,Qt)=>{var F$=Bu();function D$(e,r,t,n,i){var o=F$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Qt.exports=D$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var jb=a((Iz,Mb)=>{"use strict";var Nb=ze(),B$=TypeError;Mb.exports=function(e,r){if(!delete e[r])throw new B$("Cannot delete property "+Nb(r)+" of "+Nb(e))}});var $b=a(()=>{"use strict";var G$=x(),U$=re(),K$=le(),H$=Ur(),W$=jb(),z$=kt(),V$=[].unshift(0)!==1,Y$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},J$=V$||!Y$();G$({target:"Array",proto:!0,arity:1,forced:J$},{unshift:function(r){var t=U$(this),n=K$(t),i=arguments.length;if(i){z$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:W$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return H$(t,n+i)}})});var Fb=a((Rz,Lb)=>{"use strict";$b();var Q$=oe();Lb.exports=Q$("Array","unshift")});var Bb=a((Az,Db)=>{"use strict";var X$=B(),Z$=Fb(),Gu=Array.prototype;Db.exports=function(e){var r=e.unshift;return e===Gu||X$(Gu,e)&&r===Gu.unshift?Z$:r}});var Ub=a((Nz,Gb)=>{"use strict";var eL=Bb();Gb.exports=eL});var Hb=a((Mz,Kb)=>{"use strict";var rL=Ub();Kb.exports=rL});var zb=a((jz,Wb)=>{"use strict";var tL=Hb();Wb.exports=tL});var Yb=a(($z,Vb)=>{"use strict";Vb.exports=zb()});var Jb=a((Lz,Xt)=>{var nL=Yb();function iL(e){var r=Object(e),t=[];for(var n in r)nL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Xt.exports=iL,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Xb=a((Fz,Qb)=>{"use strict";yr();It();vr();ko();var aL=Wr();Qb.exports=aL.f("iterator")});var eq=a((Dz,Zb)=>{"use strict";var oL=Xb();gr();Zb.exports=oL});var tq=a((Bz,rq)=>{"use strict";var uL=eq();rq.exports=uL});var iq=a((Gz,nq)=>{"use strict";var sL=tq();nq.exports=sL});var Zt=a((Uz,aq)=>{"use strict";aq.exports=iq()});var oq=a((Kz,je)=>{var wi=Se(),cL=Zt();function Uu(e){"@babel/helpers - typeof";return je.exports=Uu=typeof wi=="function"&&typeof cL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof wi=="function"&&r.constructor===wi&&r!==wi.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Uu(e)}je.exports=Uu,je.exports.__esModule=!0,je.exports.default=je.exports});var uq=a((Hz,en)=>{var lL=oq().default,fL=Se(),pL=Zt();function vL(e){if(e!=null){var r=e[typeof fL=="function"&&pL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(lL(e)+" is not iterable")}en.exports=vL,en.exports.__esModule=!0,en.exports.default=en.exports});var lq=a((Wz,$e)=>{var sq=bi(),dL=Ng(),mL=_u(),hL=$u(),yL=Ab(),gL=Bu(),bL=Du(),qL=Jb(),cq=uq();function Ku(){"use strict";var e=hL(),r=e.m(Ku),t=(sq?sq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,cq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return($e.exports=Ku=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&dL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new mL(c,s)},AsyncIterator:bL,async:function(c,s,f,p,v){return(n(s)?gL:yL)(o(c),s,f,p,v)},keys:qL,values:cq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Ku,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var se=a((zz,fq)=>{var Ti=lq()();fq.exports=Ti;try{regeneratorRuntime=Ti}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ti:Function("r","regeneratorRuntime = r")(Ti)}});var Hu=a((Ei,vq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});var Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ei.default=xL;function xL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=SL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function SL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=pq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):rn(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=pq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var E=[];return rr([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":Ci(w))==="object")return w.v}return typeof S=="function"?S(c):rn(S,T,c)};break;case/^#/.test(u):var k=u.substr(1);c=function(S){return S.attribs.id===k},s=function(S,T){if(n){var w=function(){var E=[];return rr([S],function(j,ge){c(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":Ci(w))==="object")return w.v}return typeof S=="function"?S(c):rn(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var E=[];return rr([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":Ci(w))==="object")return w.v}return typeof S=="function"?S(c):rn(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var E=[];return rr([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":Ci(w))==="object")return w.v}return typeof S=="function"?S(c):rn(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function rn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}vq.exports=Ei.default});var ki=a(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.convertNodeList=wL;Oi.escapeValue=TL;function wL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function TL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var wq=a((Ii,Sq)=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=CL;var yq=ki(),dq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function CL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(k){return k(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,yq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(k,O){return b.test(O)})}),d&&function(){var q=s.attribute;s.attribute=function(b,k,O){return s.class(k)||q&&q(b,k,O)}}();p!==n;){if(m(p)!==!0){if(mq(l,p,s,f,n)||hq(p,s,f,n))break;mq(l,p,s,f),f.length===v&&hq(p,s,f),f.length===v&&EL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=qq(l,p,s);f.unshift(y)}return f.join(" ")}function mq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=gq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function gq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,yq.escapeValue)(c.value),p=t[s]||t.attribute,v=dq[s]||dq.attribute;if(!xq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function hq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=bq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function bq(e,r){var t=e.tagName.toLowerCase();return xq(r.tag,null,t)?null:t}function EL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=qq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function qq(e,r,t){var n=gq(e,r,t);return n||(n=bq(r,t)),n}function xq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}Sq.exports=Ii.default});var Wu=a((_i,Tq)=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.default=_L;var OL=Hu(),kL=PL(OL),IL=ki();function PL(e){return e&&e.__esModule?e:{default:e}}function _L(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,IL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,kL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Pi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Pi(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Pi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Pi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Pi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(at(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var O=l[s];if(n.some(function(T){return O.contains(T)})){var S=O.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);at(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);at(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,O){return k.length-O.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);at(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var O=y[s];if(n.some(function(T){return O.contains(T)})){var S=O.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function at(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}Tq.exports=_i.default});var zu=a(Ri=>{"use strict";Object.defineProperty(Ri,"__esModule",{value:!0});Ri.getCommonAncestor=RL;Ri.getCommonProperties=AL;function RL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function AL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Pq=a(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});var NL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};tn.getSingleSelector=Yu;tn.getMultiSelector=Iq;tn.default=DL;var ML=Hu(),Eq=Vu(ML),jL=wq(),$L=Vu(jL),LL=Wu(),Oq=Vu(LL),Cq=ki(),kq=zu();function Vu(e){return e&&e.__esModule?e:{default:e}}function Yu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":NL(e))+'")');var t=(0,Eq.default)(e,r),n=(0,$L.default)(e,r),i=(0,Oq.default)(n,e,r);return t&&delete global.document,i}function Iq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Cq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Eq.default)(e[0],r),n=(0,kq.getCommonAncestor)(e,r),i=Yu(n,r),o=FL(e),u=o[0],l=(0,Oq.default)(i+" "+u,e,r),c=(0,Cq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function FL(e){var r=(0,kq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function DL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Iq(e,r):Yu(e,r)}});var Aq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Ju=Pq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Ju.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Ju.getMultiSelector}});var _q=Rq(Ju),BL=Wu(),GL=Rq(BL),UL=zu(),KL=HL(UL);function HL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Rq(e){return e&&e.__esModule?e:{default:e}}ie.select=_q.default;ie.optimize=GL.default;ie.common=KL;ie.default=_q.default});var Nq=a(()=>{"use strict";var rF=x(),tF=Ie();rF({target:"Array",stat:!0},{isArray:tF})});var jq=a((lV,Mq)=>{"use strict";Nq();var nF=W();Mq.exports=nF.Array.isArray});var Lq=a((fV,$q)=>{"use strict";var iF=jq();$q.exports=iF});var Dq=a((pV,Fq)=>{"use strict";var aF=Lq();Fq.exports=aF});var Gq=a((vV,Bq)=>{"use strict";var oF=Dq();Bq.exports=oF});var Kq=a((dV,Uq)=>{"use strict";Uq.exports=Gq()});var zq=a(()=>{"use strict";var uF=x(),sF=re(),cF=le(),lF=Ur(),fF=kt(),pF=P(),vF=pF(function(){return[].push.call({length:4294967296},1)!==4294967297}),dF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},mF=vF||!dF();uF({target:"Array",proto:!0,arity:1,forced:mF},{push:function(r){var t=sF(this),n=cF(t),i=arguments.length;fF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return lF(t,n),n}})});var Yq=a((gV,Vq)=>{"use strict";zq();var hF=oe();Vq.exports=hF("Array","push")});var Qq=a((bV,Jq)=>{"use strict";var yF=B(),gF=Yq(),Qu=Array.prototype;Jq.exports=function(e){var r=e.push;return e===Qu||yF(Qu,e)&&r===Qu.push?gF:r}});var Zq=a((qV,Xq)=>{"use strict";var bF=Qq();Xq.exports=bF});var rx=a((xV,ex)=>{"use strict";var qF=Zq();ex.exports=qF});var nx=a((SV,tx)=>{"use strict";var xF=rx();tx.exports=xF});var Xu=a((wV,ix)=>{"use strict";ix.exports=nx()});var mx=a(()=>{"use strict";var SF=x(),wF=_t().map,TF=qt(),CF=TF("map");SF({target:"Array",proto:!0,forced:!CF},{map:function(r){return wF(this,r,arguments.length>1?arguments[1]:void 0)}})});var yx=a((QV,hx)=>{"use strict";mx();var EF=oe();hx.exports=EF("Array","map")});var bx=a((XV,gx)=>{"use strict";var OF=B(),kF=yx(),es=Array.prototype;gx.exports=function(e){var r=e.map;return e===es||OF(es,e)&&r===es.map?kF:r}});var xx=a((ZV,qx)=>{"use strict";var IF=bx();qx.exports=IF});var wx=a((e7,Sx)=>{"use strict";var PF=xx();Sx.exports=PF});var Cx=a((r7,Tx)=>{"use strict";var _F=wx();Tx.exports=_F});var Ox=a((t7,Ex)=>{"use strict";Ex.exports=Cx()});var Ix=a((n7,kx)=>{kx.exports=Ox()});var _x=a((i7,Px)=>{Px.exports=it()});var jx=a((a7,Mx)=>{"use strict";var RF=F(),AF=re(),NF=bn(),MF=le(),Rx=TypeError,Ax="Reduce of empty array with no initial value",Nx=function(e){return function(r,t,n,i){var o=AF(r),u=NF(o),l=MF(o);if(RF(t),l===0&&n<2)throw new Rx(Ax);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Rx(Ax)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};Mx.exports={left:Nx(!1),right:Nx(!0)}});var rs=a((o7,$x)=>{"use strict";var jF=P();$x.exports=function(e,r){var t=[][e];return!!t&&jF(function(){t.call(null,r||function(){return 1},1)})}});var Fx=a(()=>{"use strict";var $F=x(),LF=jx().left,FF=rs(),Lx=jr(),DF=$t(),BF=!DF&&Lx>79&&Lx<83,GF=BF||!FF("reduce");$F({target:"Array",proto:!0,forced:GF},{reduce:function(r){var t=arguments.length;return LF(this,r,t,t>1?arguments[1]:void 0)}})});var Bx=a((c7,Dx)=>{"use strict";Fx();var UF=oe();Dx.exports=UF("Array","reduce")});var Ux=a((l7,Gx)=>{"use strict";var KF=B(),HF=Bx(),ts=Array.prototype;Gx.exports=function(e){var r=e.reduce;return e===ts||KF(ts,e)&&r===ts.reduce?HF:r}});var Hx=a((f7,Kx)=>{"use strict";var WF=Ux();Kx.exports=WF});var zx=a((p7,Wx)=>{"use strict";var zF=Hx();Wx.exports=zF});var Yx=a((v7,Vx)=>{"use strict";var VF=zx();Vx.exports=VF});var Qx=a((d7,Jx)=>{"use strict";Jx.exports=Yx()});var Zx=a((m7,Xx)=>{Xx.exports=Qx()});var tS=a((h7,rS)=>{"use strict";var YF=Ie(),JF=le(),QF=kt(),XF=z(),ZF=Gr(),eS=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?XF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&YF(p)?(v=JF(p),c=eS(e,r,p,v,c,o-1)-1):(QF(c+1),ZF(e,c,p)),c++),s++;return c};rS.exports=eS});var nS=a(()=>{"use strict";var eD=x(),rD=tS(),tD=F(),nD=re(),iD=le(),aD=Dn();eD({target:"Array",proto:!0},{flatMap:function(r){var t=nD(this),n=iD(t),i;return tD(r),i=aD(t,0),rD(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var iS=a(()=>{"use strict";var oD=Po();oD("flatMap")});var oS=a((x7,aS)=>{"use strict";nS();iS();var uD=oe();aS.exports=uD("Array","flatMap")});var sS=a((S7,uS)=>{"use strict";var sD=B(),cD=oS(),ns=Array.prototype;uS.exports=function(e){var r=e.flatMap;return e===ns||sD(ns,e)&&r===ns.flatMap?cD:r}});var lS=a((w7,cS)=>{"use strict";var lD=sS();cS.exports=lD});var pS=a((T7,fS)=>{"use strict";var fD=lS();fS.exports=fD});var dS=a((C7,vS)=>{"use strict";var pD=pS();vS.exports=pD});var hS=a((E7,mS)=>{"use strict";mS.exports=dS()});var gS=a((O7,yS)=>{yS.exports=hS()});var qS=a((k7,bS)=>{"use strict";eo();var vD=oe();bS.exports=vD("Array","concat")});var SS=a((I7,xS)=>{"use strict";var dD=B(),mD=qS(),is=Array.prototype;xS.exports=function(e){var r=e.concat;return e===is||dD(is,e)&&r===is.concat?mD:r}});var TS=a((P7,wS)=>{"use strict";var hD=SS();wS.exports=hD});var ES=a((_7,CS)=>{"use strict";var yD=TS();CS.exports=yD});var kS=a((R7,OS)=>{"use strict";var gD=ES();OS.exports=gD});var PS=a((A7,IS)=>{"use strict";IS.exports=kS()});var as=a((N7,_S)=>{_S.exports=PS()});var NS=a(()=>{});var jS=a((n9,MS)=>{"use strict";NS();Io();var kD=Wr();MS.exports=kD.f("toPrimitive")});var LS=a((i9,$S)=>{"use strict";var ID=jS();$S.exports=ID});var DS=a((a9,FS)=>{"use strict";var PD=LS();FS.exports=PD});var GS=a((o9,BS)=>{"use strict";var _D=DS();BS.exports=_D});var KS=a((u9,US)=>{"use strict";US.exports=GS()});var ZS=a((k9,XS)=>{"use strict";var AD=$(),ND=qe(),MD=R(),jD=MD("match");XS.exports=function(e){var r;return AD(e)&&((r=e[jD])!==void 0?!!r:ND(e)==="RegExp")}});var rw=a((I9,ew)=>{"use strict";var $D=ZS(),LD=TypeError;ew.exports=function(e){if($D(e))throw new LD("The method doesn't accept regular expressions");return e}});var nw=a((P9,tw)=>{"use strict";var FD=R(),DD=FD("match");tw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[DD]=!1,"/./"[e](r)}catch{}}return!1}});var ow=a(()=>{"use strict";var BD=x(),GD=pt(),UD=dt().f,KD=Ta(),iw=Ve(),HD=rw(),WD=ur(),zD=nw(),VD=Z(),YD=GD("".slice),JD=Math.min,aw=zD("startsWith"),QD=!VD&&!aw&&!!function(){var e=UD(String.prototype,"startsWith");return e&&!e.writable}();BD({target:"String",proto:!0,forced:!QD&&!aw},{startsWith:function(r){var t=iw(WD(this));HD(r);var n=KD(JD(arguments.length>1?arguments[1]:void 0,t.length)),i=iw(r);return YD(t,n,n+i.length)===i}})});var sw=a((A9,uw)=>{"use strict";ow();var XD=oe();uw.exports=XD("String","startsWith")});var lw=a((N9,cw)=>{"use strict";var ZD=B(),e3=sw(),cs=String.prototype;cw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===cs||ZD(cs,e)&&r===cs.startsWith?e3:r}});var pw=a((M9,fw)=>{"use strict";var r3=lw();fw.exports=r3});var dw=a((j9,vw)=>{"use strict";var t3=pw();vw.exports=t3});var hw=a(($9,mw)=>{"use strict";var n3=dw();mw.exports=n3});var gw=a((L9,yw)=>{"use strict";yw.exports=hw()});var qw=a((F9,bw)=>{bw.exports=gw()});var xw=a(()=>{"use strict";var i3=x(),a3=_t().filter,o3=qt(),u3=o3("filter");i3({target:"Array",proto:!0,forced:!u3},{filter:function(r){return a3(this,r,arguments.length>1?arguments[1]:void 0)}})});var ww=a((G9,Sw)=>{"use strict";xw();var s3=oe();Sw.exports=s3("Array","filter")});var Cw=a((U9,Tw)=>{"use strict";var c3=B(),l3=ww(),ls=Array.prototype;Tw.exports=function(e){var r=e.filter;return e===ls||c3(ls,e)&&r===ls.filter?l3:r}});var Ow=a((K9,Ew)=>{"use strict";var f3=Cw();Ew.exports=f3});var Iw=a((H9,kw)=>{"use strict";var p3=Ow();kw.exports=p3});var _w=a((W9,Pw)=>{"use strict";var v3=Iw();Pw.exports=v3});var Aw=a((z9,Rw)=>{"use strict";Rw.exports=_w()});var Mw=a((V9,Nw)=>{Nw.exports=Aw()});var Qw=a(()=>{"use strict";var x3=x(),S3=U(),ps=Nr(),w3=Au(),Hw=Ko(),T3=X(),Ww=$(),C3=Je(),Vw=P(),vs=S3("Reflect","construct"),E3=Object.prototype,O3=[].push,Yw=Vw(function(){function e(){}return!(vs(function(){},[],e)instanceof e)}),Jw=!Vw(function(){vs(function(){})}),zw=Yw||Jw;x3({target:"Reflect",stat:!0,forced:zw,sham:zw},{construct:function(r,t){Hw(r),T3(t);var n=arguments.length<3?r:Hw(arguments[2]);if(Jw&&!Yw)return vs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ps(O3,i,t),new(ps(w3,r,i))}var o=n.prototype,u=C3(Ww(o)?o:E3),l=ps(r,u,t);return Ww(l)?l:u}})});var Zw=a((kY,Xw)=>{"use strict";Qw();var k3=W();Xw.exports=k3.Reflect.construct});var rT=a((IY,eT)=>{"use strict";var I3=Zw();eT.exports=I3});var nT=a((PY,tT)=>{"use strict";var P3=rT();tT.exports=P3});var aT=a((_Y,iT)=>{"use strict";var _3=nT();iT.exports=_3});var Fi=a((RY,oT)=>{"use strict";oT.exports=aT()});var sT=a((AY,uT)=>{uT.exports=Fi()});var yT=a((GY,hT)=>{"use strict";var R3=P();hT.exports=R3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var qT=a((UY,bT)=>{"use strict";var A3=P(),N3=$(),M3=qe(),gT=yT(),Di=Object.isExtensible,j3=A3(function(){Di(1)});bT.exports=j3||gT?function(r){return!N3(r)||gT&&M3(r)==="ArrayBuffer"?!1:Di?Di(r):!0}:Di});var ST=a((KY,xT)=>{"use strict";var $3=P();xT.exports=!$3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var qs=a((HY,CT)=>{"use strict";var L3=x(),F3=A(),D3=Hr(),B3=$(),ys=K(),G3=te().f,wT=Pt(),U3=ro(),gs=qT(),K3=Lr(),H3=ST(),TT=!1,De=K3("meta"),W3=0,bs=function(e){G3(e,De,{value:{objectID:"O"+W3++,weakData:{}}})},z3=function(e,r){if(!B3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ys(e,De)){if(!gs(e))return"F";if(!r)return"E";bs(e)}return e[De].objectID},V3=function(e,r){if(!ys(e,De)){if(!gs(e))return!0;if(!r)return!1;bs(e)}return e[De].weakData},Y3=function(e){return H3&&TT&&gs(e)&&!ys(e,De)&&bs(e),e},J3=function(){Q3.enable=function(){},TT=!0;var e=wT.f,r=F3([].splice),t={};t[De]=1,e(t).length&&(wT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===De){r(i,o,1);break}return i},L3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:U3.f}))},Q3=CT.exports={enable:J3,fastKey:z3,getWeakData:V3,onFreeze:Y3};D3[De]=!0});var kT=a((WY,OT)=>{"use strict";var X3=x(),Z3=_(),eB=qs(),rB=P(),tB=xe(),nB=pe(),iB=si(),aB=N(),oB=$(),uB=or(),sB=Re(),cB=te().f,lB=_t().forEach,fB=G(),ET=Ye(),pB=ET.set,vB=ET.getterFor;OT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=Z3[e],l=u&&u.prototype,c={},s;if(!fB||!aB(u)||!(i||l.forEach&&!rB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),eB.enable();else{s=r(function(v,d){pB(iB(v,f),{type:e,collection:new u}),uB(d)||nB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=vB(e);lB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&tB(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!oB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||cB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return sB(s,e,!1,!0),c[e]=s,X3({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var PT=a((zY,IT)=>{"use strict";var dB=Pe();IT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:dB(e,n,r[n],t);return e}});var $T=a((VY,jT)=>{"use strict";var _T=Je(),mB=Gn(),RT=PT(),hB=z(),yB=si(),gB=or(),bB=pe(),qB=jn(),Bi=$n(),xB=Uo(),cn=G(),AT=qs().fastKey,MT=Ye(),NT=MT.set,xs=MT.getterFor;jT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){yB(s,o),NT(s,{type:r,index:_T(null),first:null,last:null,size:0}),cn||(s.size=0),gB(f)||bB(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=xs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=AT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),cn?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=AT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return RT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=_T(null),cn?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),cn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=hB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),RT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),cn&&mB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=xs(r),o=xs(n);qB(e,r,function(u,l){NT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Bi(void 0,!0)):Bi(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),xB(r)}}});var LT=a(()=>{"use strict";var SB=kT(),wB=$T();SB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},wB)});var FT=a(()=>{"use strict";LT()});var BT=a((ZY,DT)=>{"use strict";DT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((eJ,UT)=>{"use strict";var TB=U(),Gi=BT(),GT=TB("Map");UT.exports={Map:GT,set:Gi("set",2),get:Gi("get",1),has:Gi("has",1),remove:Gi("delete",1),proto:GT.prototype}});var Ss=a(()=>{"use strict";var CB=x(),EB=A(),OB=F(),kB=ur(),IB=pe(),Ui=ae(),KT=Z(),PB=P(),HT=Ui.Map,_B=Ui.has,RB=Ui.get,AB=Ui.set,NB=EB([].push),MB=KT||PB(function(){return HT.groupBy("ab",function(e){return e}).get("a").length!==1});CB({target:"Map",stat:!0,forced:KT||MB},{groupBy:function(r,t){kB(r),OB(t);var n=new HT,i=0;return IB(r,function(o){var u=t(o,i++);_B(n,u)?NB(RB(n,u),o):AB(n,u,[o])}),n}})});var V=a((nJ,WT)=>{"use strict";var jB=ze(),$B=TypeError;WT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new $B(jB(e)+" is not a map")}});var Ts=a(()=>{"use strict";var LB=x(),FB=V(),ws=ae(),DB=Z(),BB=ws.get,GB=ws.has,UB=ws.set;LB({target:"Map",proto:!0,real:!0,forced:DB},{getOrInsert:function(r,t){return GB(FB(this),r)?BB(this,r):(UB(this,r,t),t)}})});var Es=a(()=>{"use strict";var KB=x(),HB=F(),WB=V(),Cs=ae(),zB=Z(),VB=Cs.get,YB=Cs.has,JB=Cs.set;KB({target:"Map",proto:!0,real:!0,forced:zB},{getOrInsertComputed:function(r,t){if(WB(this),HB(t),YB(this,r))return VB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return JB(this,r,n),n}})});var VT=a((sJ,zT)=>{"use strict";yr();FT();Ss();Ts();Es();It();vr();var QB=W();zT.exports=QB.Map});var JT=a((cJ,YT)=>{"use strict";var XB=VT();gr();YT.exports=XB});var Os=a(()=>{"use strict";Ts()});var ks=a(()=>{"use strict";Es()});var QT=a(()=>{"use strict";Ss()});var ZT=a((hJ,XT)=>{"use strict";var ZB=JT();Os();ks();QT();XT.exports=ZB});var rC=a((yJ,eC)=>{"use strict";var e4=z(),r4=X(),t4=re(),n4=pe();eC.exports=function(e,r,t){return function(i){var o=t4(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?e4(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return n4(o,function(v){var d=c?s(v,p++):v;t?r(f,r4(d)[0],d[1]):r(f,d)}),f}}});var nC=a(()=>{"use strict";var i4=x(),tC=ae(),a4=rC();i4({target:"Map",stat:!0,forced:!0},{from:a4(tC.Map,tC.set,!0)})});var aC=a((qJ,iC)=>{"use strict";var o4=X();iC.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,o4(l)[0],l[1]):r(i,l)}return i}}});var uC=a(()=>{"use strict";var u4=x(),oC=ae(),s4=aC();u4({target:"Map",stat:!0,forced:!0},{of:s4(oC.Map,oC.set,!0)})});var cC=a(()=>{"use strict";var c4=x(),l4=D(),f4=pe(),p4=N(),sC=F(),v4=ae().Map;c4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=p4(this)?this:v4,i=new n;sC(t);var o=sC(i.set);return f4(r,function(u){l4(o,i,t(u),u)}),i}})});var lC=a(()=>{"use strict";var d4=x(),m4=V(),h4=ae().remove;d4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=m4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=h4(r,arguments[i]),t=t&&n;return!!t}})});var pC=a(()=>{"use strict";var y4=x(),g4=V(),Is=ae(),b4=Is.get,q4=Is.has,fC=Is.set;y4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=g4(this),i,o;return q4(n,r)?(i=b4(n,r),"update"in t&&(i=t.update(i,r,n),fC(n,r,i)),i):(o=t.insert(r,n),fC(n,r,o),o)}})});var dC=a((IJ,vC)=>{"use strict";var x4=D();vC.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=x4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=a((PJ,mC)=>{"use strict";var S4=dC();mC.exports=function(e,r,t){return t?S4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var hC=a(()=>{"use strict";var w4=x(),T4=z(),C4=V(),E4=he();w4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=C4(this),n=T4(r,arguments.length>1?arguments[1]:void 0);return E4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var gC=a(()=>{"use strict";var O4=x(),k4=z(),I4=V(),yC=ae(),P4=he(),_4=yC.Map,R4=yC.set;O4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=I4(this),n=k4(r,arguments.length>1?arguments[1]:void 0),i=new _4;return P4(t,function(o,u){n(o,u,t)&&R4(i,u,o)}),i}})});var bC=a(()=>{"use strict";var A4=x(),N4=z(),M4=V(),j4=he();A4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=M4(this),n=N4(r,arguments.length>1?arguments[1]:void 0),i=j4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var qC=a(()=>{"use strict";var $4=x(),L4=z(),F4=V(),D4=he();$4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=F4(this),n=L4(r,arguments.length>1?arguments[1]:void 0),i=D4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var SC=a((FJ,xC)=>{"use strict";xC.exports=function(e,r){return e===r||e!==e&&r!==r}});var wC=a(()=>{"use strict";var B4=x(),G4=SC(),U4=V(),K4=he();B4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return K4(U4(this),function(t){if(G4(t,r))return!0},!0)===!0}})});var TC=a(()=>{"use strict";var H4=x(),W4=V(),z4=he();H4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=z4(W4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var EC=a(()=>{"use strict";var V4=x(),Y4=z(),J4=V(),CC=ae(),Q4=he(),X4=CC.Map,Z4=CC.set;V4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=J4(this),n=Y4(r,arguments.length>1?arguments[1]:void 0),i=new X4;return Q4(t,function(o,u){Z4(i,n(o,u,t),o)}),i}})});var kC=a(()=>{"use strict";var eG=x(),rG=z(),tG=V(),OC=ae(),nG=he(),iG=OC.Map,aG=OC.set;eG({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=tG(this),n=rG(r,arguments.length>1?arguments[1]:void 0),i=new iG;return nG(t,function(o,u){aG(i,u,n(o,u,t))}),i}})});var IC=a(()=>{"use strict";var oG=x(),uG=V(),sG=pe(),cG=ae().set;oG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=uG(this),n=arguments.length,i=0;i<n;)sG(arguments[i++],function(o,u){cG(t,o,u)},{AS_ENTRIES:!0});return t}})});var PC=a(()=>{"use strict";var lG=x(),fG=F(),pG=V(),vG=he(),dG=TypeError;lG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=pG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(fG(r),vG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new dG("Reduce of empty map with no initial value");return i}})});var _C=a(()=>{"use strict";var mG=x(),hG=z(),yG=V(),gG=he();mG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=yG(this),n=hG(r,arguments.length>1?arguments[1]:void 0);return gG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var AC=a(()=>{"use strict";var bG=x(),RC=F(),qG=V(),Ps=ae(),xG=TypeError,SG=Ps.get,wG=Ps.has,TG=Ps.set;bG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=qG(this),i=arguments.length;RC(t);var o=wG(n,r);if(!o&&i<3)throw new xG("Updating absent value");var u=o?SG(n,r):RC(i>2?arguments[2]:void 0)(r,n);return TG(n,r,t(u,r,n)),n}})});var Rs=a((tQ,NC)=>{"use strict";var Ki=D(),_s=F(),Hi=N(),CG=X(),EG=TypeError;NC.exports=function(r,t){var n=CG(this),i=_s(n.get),o=_s(n.has),u=_s(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Hi(t)&&!Hi(l))throw new EG("At least one callback required");return Ki(o,n,r)?(c=Ki(i,n,r),Hi(t)&&(c=t(c),Ki(u,n,r,c))):Hi(l)&&(c=l(),Ki(u,n,r,c)),c}});var MC=a(()=>{"use strict";var OG=x(),kG=Rs();OG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:kG})});var jC=a(()=>{"use strict";var IG=x(),PG=Rs();IG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:PG})});var LC=a((uQ,$C)=>{"use strict";var _G=ZT();nC();uC();cC();lC();pC();hC();gC();bC();qC();wC();Os();ks();TC();EC();kC();IC();PC();_C();AC();MC();jC();$C.exports=_G});var DC=a((sQ,FC)=>{"use strict";FC.exports=LC()});var GC=a(()=>{"use strict";var RG=x(),AG=pt(),NG=Na().indexOf,MG=rs(),As=AG([].indexOf),BC=!!As&&1/As([1],1,-0)<0,jG=BC||!MG("indexOf");RG({target:"Array",proto:!0,forced:jG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return BC?As(this,r,t)||0:NG(this,r,t)}})});var KC=a((fQ,UC)=>{"use strict";GC();var $G=oe();UC.exports=$G("Array","indexOf")});var WC=a((pQ,HC)=>{"use strict";var LG=B(),FG=KC(),Ns=Array.prototype;HC.exports=function(e){var r=e.indexOf;return e===Ns||LG(Ns,e)&&r===Ns.indexOf?FG:r}});var VC=a((vQ,zC)=>{"use strict";var DG=WC();zC.exports=DG});var JC=a((dQ,YC)=>{"use strict";var BG=VC();YC.exports=BG});var XC=a((mQ,QC)=>{"use strict";var GG=JC();QC.exports=GG});var eE=a((hQ,ZC)=>{"use strict";ZC.exports=XC()});var yE=a(()=>{"use strict";var VG=x(),YG=re(),hE=_n(),JG=P(),QG=JG(function(){hE(1)});VG({target:"Object",stat:!0,forced:QG},{keys:function(r){return hE(YG(r))}})});var bE=a((xX,gE)=>{"use strict";yE();var XG=W();gE.exports=XG.Object.keys});var xE=a((SX,qE)=>{"use strict";var ZG=bE();qE.exports=ZG});var wE=a((wX,SE)=>{"use strict";var eU=xE();SE.exports=eU});var CE=a((TX,TE)=>{"use strict";var rU=wE();TE.exports=rU});var OE=a((CX,EE)=>{"use strict";EE.exports=CE()});var IE=a((EX,kE)=>{kE.exports=OE()});var Rr="";function Zs(e){Rr=e.replace(/\/+$/,"")}async function lt(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function ec(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Rr}/comments?${t}`);return await lt(n,"Failed to fetch comments"),(await n.json()).data}async function Xi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${Rr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await lt(s,"Failed to create comment"),s.json()}async function rc(e,{body:r}){let t=await fetch(`${Rr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await lt(t,"Failed to update comment"),t.json()}async function tc(e,r){let t=await fetch(`${Rr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await lt(t,"Failed to update comment status"),t.json()}async function nc(e){let r=await fetch(`${Rr}/comments/${e}`,{method:"DELETE"});await lt(r,"Failed to delete comment")}var VL=g(Kr(),1),YL=g(Fn(),1),JL=g(ri(),1),QL=g(ti(),1),XL=g(ni(),1);var ku=g(it(),1);function Xy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):ku.default.resolve(c).then(n,i)}function wr(e){return function(){var r=this,t=arguments;return new ku.default(function(n,i){var o=e.apply(r,t);function u(c){Xy(o,n,i,u,l,"next",c)}function l(c){Xy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Kt(e,r){this.v=e,this.k=r}function er(e){return new Kt(e,0)}var Iu=g(it(),1),sg=g(Se(),1),cg=g(gi(),1);function Te(e){return function(){return new Ht(e.apply(this,arguments))}}function Ht(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Kt;Iu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Iu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ht.prototype[typeof sg.default=="function"&&cg.default||"@@asyncIterator"]=function(){return this},Ht.prototype.next=function(e){return this._invoke("next",e)},Ht.prototype.throw=function(e){return this._invoke("throw",e)},Ht.prototype.return=function(e){return this._invoke("return",e)};var ZL=g(se(),1),eF=g(Aq(),1);function ce(e){var r,t=WL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function WL(e){return"startContainer"in e}function tr(e){if(zL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function zL(e){return"startContainer"in e}var Hq=g(Kq(),1);function Wq(e){if((0,Hq.default)(e))return e}var ax=g(Se(),1),ox=g($o(),1),ux=g(Xu(),1);function sx(e,r){var t=e==null?null:typeof ax.default<"u"&&(0,ox.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ux.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var cx=g(Oa(),1),lx=g(Za(),1);function Ai(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Zu(e,r){if(e){var t;if(typeof e=="string")return Ai(e,r);var n=(0,cx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,lx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ai(e,r):void 0}}function fx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return Wq(e)||sx(e,r)||Zu(e,r)||fx()}var px=g(Se(),1),vx=g(gi(),1),dx=g(Zt(),1),nn=g(it(),1);function ot(e){var r,t,n,i=2;for(typeof px.default<"u"&&(t=vx.default,n=dx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ni(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ni(e){function r(t){if(Object(t)!==t)return nn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return nn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ni=function(n){this.s=n,this.n=n.next},Ni.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?nn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?nn.default.reject(n):r(i.apply(this.s,arguments))}},new Ni(e)}var OD=g(se(),1);var xD=g(se(),1),SD=g(Ix(),1),wD=g(_x(),1),TD=g(Zx(),1),CD=g(gS(),1),ED=g(as(),1);var $s=g(se(),1);var q3=g(se(),1);var us=g(se(),1);function an(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function RS(e,r){return an(e.startChunk,r.startChunk)&&an(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Tr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var os=g(Vt(),1);var on=g(Se(),1),AS=g(Zt(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof on.default=="function"&&typeof AS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof on.default=="function"&&r.constructor===on.default&&r!==on.default.prototype?"symbol":typeof r},Fe(e)}var HS=g(KS(),1);function WS(e,r){if(Fe(e)!="object"||!e)return e;var t=e[HS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Mi(e){var r=WS(e,"string");return Fe(r)=="symbol"?r:r+""}function zS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,os.default)(e,Mi(n.key),n)}}function un(e,r,t){return r&&zS(e.prototype,r),t&&zS(e,t),(0,os.default)(e,"prototype",{writable:!1}),e}var VS=g(Vt(),1);function Cr(e,r,t){return(r=Mi(r))in e?(0,VS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var YS=g(Kr(),1);var ji="Iterator exhausted before seek ended.",sn=function(){function e(r){Tr(this,e),this.chunker=r,Cr(this,"currentChunkPosition",0),Cr(this,"offsetInChunk",0),this.seekTo(0)}return un(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!an(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Le(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(ji)}else for(;!an(this.currentChunk,n);){var l=this._readToNextChunk(),c=Le(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(ji)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,YS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Le(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(ji)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(ji)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function QS(e,r){return ss.apply(this,arguments)}function ss(){return ss=wr(us.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,k,O,S,T,w,E,j=arguments;return us.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new sn(t()),p=new sn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=$i(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+$i(f,s,!1));case 11:return k={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},O=Li(k)(t()),I.next=16,O.next();case 16:if(S=I.sent,!(!S.done&&RS(S.value,r))){I.next=21;break}return I.next=20,O.next();case 20:S=I.sent;case 21:if(!S.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=JS(f,p,!0),w!==void 0&&!o&&(w=$i(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),E=JS(f,p,!1),E!==void 0&&!o&&(E=E+$i(f,s,!1)),!o){I.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){I.next=37;break}d=w+d,I.next=42;break;case 37:if(E===void 0){I.next=41;break}h=h+E,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(h=h+E);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ss.apply(this,arguments)}function JS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function $i(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(RD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function RD(e){return/^\s+$/.test(e)}var Lw=g(Kr(),1),Fw=g(Fn(),1),Dw=g(ri(),1),Bw=g(ti(),1),Gw=g(ni(),1);var fs=g(se(),1),Uw=g(qw(),1),Kw=g(Mw(),1);function jw(e,r){var t;if(typeof Dw.default>"u"||(0,Bw.default)(e)==null){if(Array.isArray(e)||(t=d3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Gw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function d3(e,r){var t;if(e){if(typeof e=="string")return $w(e,r);var n=(0,Lw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Fw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $w(e,r)}}function $w(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Li(e){return function(){var r=Te(fs.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,k,O,S,T,w,E,j,ge,I,ee,be,Q,L;return fs.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=jw(s),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(k=u.length-q,(k<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=k)),O=c.length-q,!(O<=v.length)){C.next=24;break}if(!(0,Uw.default)(v).call(v,c.substring(q))){C.next=22;break}return C.next=22,y;case 22:C.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(s=d,!(c.length<=v.length)){C.next=49;break}S=0;case 38:if(!(S<=v.length)){C.next=49;break}if(T=v.indexOf(c,S),T!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:C.next=38;break;case 49:for(w=[],E=Math.max(v.length-c.length+1,0),j=function(He){var Qs=v[He];w=(0,Kw.default)(w).call(w,function(oO){return Qs===c[He-oO]}),Qs===c[0]&&w.push(He)},ge=E;ge<v.length;ge++)j(ge);I=jw(w);try{for(I.s();!(ee=I.n()).done;)be=ee.value,Q=v.length-be,L={charactersMatched:Q},Q>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(Q>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),s.push(L)}catch(_r){I.e(_r)}finally{I.f()}f=!1;case 56:if(i.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var g3=g(se(),1);var m3=g(Kr(),1),h3=g(as(),1);var b3=g(se(),1);var fn=g(sT(),1);var lT=g(qi(),1),fT=g(Vt(),1);var ds=g(xi(),1),cT=g(zt(),1);function nr(e,r){var t;return nr=ds.default?(0,cT.default)(t=ds.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function ms(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,lT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,fT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function pT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pT(e)}var dT=g(xi(),1),mT=g(zt(),1),hs=g(bi(),1);function Er(e){var r;return Er=dT.default?(0,mT.default)(r=hs.default).call(r):function(t){return t.__proto__||(0,hs.default)(t)},Er(e)}var js=g(DC(),1),sE=g(qi(),1);var rE=g(eE(),1);function tE(e){try{var r;return(0,rE.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var iE=g(Fi(),1),aE=g(Xu(),1),oE=g(zt(),1);var nE=g(Fi(),1);function Ms(){try{var e=!Boolean.prototype.valueOf.call((0,nE.default)(Boolean,[],function(){}))}catch{}return(Ms=function(){return!!e})()}function uE(e,r,t){if(Ms())return iE.default.apply(null,arguments);var n=[null];(0,aE.default)(n).apply(n,r);var i=new((0,oE.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function ln(e){var r=typeof js.default=="function"?new js.default:void 0;return ln=function(n){if(n===null||!tE(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return uE(n,arguments,Er(this).constructor)}return i.prototype=(0,sE.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},ln(e)}function fE(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=cE(e.startContainer,e.startOffset),o=Le(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=cE(e.endContainer,e.endOffset),s=Le(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function cE(e,r){var t;if(lE(e))return[e,r];var n;if(UG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(lE(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function lE(e){return e.nodeType===Node.TEXT_NODE}function UG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function vE(e){var r=KG();return function(){var n=Er(e),i;if(r){var o=Er(this).constructor;i=(0,fn.default)(n,arguments,o)}else i=n.apply(this,arguments);return vT(this,i)}}function KG(){if(typeof Reflect>"u"||!fn.default||fn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,fn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Wi=function(e){ms(t,e);var r=vE(t);function t(n){return Tr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(ln(TypeError)),HG=function(e){ms(t,e);var r=vE(t);function t(n){return Tr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(ln(TypeError)),Or=function(){function e(r){var t=this;if(Tr(this,e),Cr(this,"scope",void 0),Cr(this,"iter",void 0),this.scope=tr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!pE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Wi}}return un(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!pE(t))throw new Wi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new HG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=fE(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function pE(e){return e.nodeType===Node.TEXT_NODE}function dE(e,r){return Ls.apply(this,arguments)}function Ls(){return Ls=wr($s.default.mark(function e(r,t){var n,i,o,u=arguments;return $s.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??ce(r)),o=new Or(i),c.next=5,QS(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ls.apply(this,arguments)}var Fs=g(se(),1);function mE(e){var r=Li(e);return function(){var t=Te(Fs.default.mark(function i(o){var u,l,c,s,f,p,v,d;return Fs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Or(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Wi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=ot(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,l=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var WG=g(se(),1);var zG=g(se(),1);var tU=g(IE(),1),nU=g(Kr(),1),iU=g(Fn(),1),aU=g(ri(),1),oU=g(ti(),1),uU=g(ni(),1);async function PE(e,r){let t=await dE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function zi(e,r){let t=mE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ut="fb-highlight",_E="fb-highlight-active";var pn=null;function AE(e){pn=e}function Vi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=RE(e,r);t.push(n)}else{let n=cU(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(RE(u,r))}}return t}function RE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return sU(e,r,o);let u=document.createElement("mark");u.className=ut,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{pn&&pn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function sU(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",ut),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),k=t.createSVGPoint();k.x=q.left,k.y=q.top;let O=k.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",O.x),b.setAttribute("y",O.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),pn&&pn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ds(e){document.querySelectorAll(`.${ut}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function NE(){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function vn(e){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(_E):r.classList.remove(_E),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function Bs(e){let r=document.querySelector(`.${ut}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function cU(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function ME(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function jE(e,r){let t=ME(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ir(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var lU=`
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
`,$E=null,LE=null;function FE(e,r){LE=e,$E=r,fU()}function fU(){let e=document.createElement("style");e.textContent=lU,document.head.appendChild(e)}function DE(){let e=$E(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(LE.contentSelector||"body").innerHTML,c=jE(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ir(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function BE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function GE(e,r){return e.length>r?e.slice(0,r)+"...":e}function UE(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var dn=null;function HE(e){dn=document.createElement("div"),dn.className="fb-toast-container",e.appendChild(dn)}function kr(e,r="success"){if(!dn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>KE(t)),t.appendChild(o)}dn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>KE(t),r==="error"?8e3:4e3)}function KE(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var WE=!1,Ir=[],Be=-1,mn=null,Gs=null,Ee=null,pU=[{keys:["j","ArrowDown"],description:"Next annotation"},{keys:["k","ArrowUp"],description:"Previous annotation"},{keys:["Escape"],description:"Close sidebar"},{keys:["?"],description:"Show this help"}];function zE({onNavigate:e,onClose:r}){mn=e,Gs=r,document.addEventListener("keydown",vU),hU()}function Us(e){WE=e,e||(Be=-1)}function VE(e){Ir=e||[],Be=-1}function vU(e){if(!WE)return;let r=document.activeElement;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable))return;let t=e.key;t==="j"||t==="ArrowDown"?(e.preventDefault(),dU()):t==="k"||t==="ArrowUp"?(e.preventDefault(),mU()):t==="Escape"?(e.preventDefault(),Gs&&Gs()):t==="?"&&e.shiftKey===!1&&(e.preventDefault(),Yi())}function dU(){if(Ir.length===0)return;Be=(Be+1)%Ir.length;let e=Ir[Be];mn&&e&&mn(e.id)}function mU(){if(Ir.length===0)return;Be=Be<=0?Ir.length-1:Be-1;let e=Ir[Be];mn&&e&&mn(e.id)}function hU(){Ee=document.createElement("div"),Ee.className="remarq-keyboard-help",Ee.style.display="none";let e=document.createElement("div");e.className="remarq-keyboard-help-content";let r=document.createElement("h3");r.textContent="Keyboard Shortcuts",e.appendChild(r);let t=document.createElement("dl");pU.forEach(({keys:i,description:o})=>{let u=document.createElement("dt");u.textContent=i.join(" / ");let l=document.createElement("dd");l.textContent=o,t.appendChild(u),t.appendChild(l)}),e.appendChild(t);let n=document.createElement("button");n.textContent="Close",n.className="remarq-keyboard-help-close",n.onclick=()=>Yi(),e.appendChild(n),Ee.appendChild(e),document.body.appendChild(Ee),Ee.addEventListener("click",i=>{i.target===Ee&&Yi()})}function Yi(){if(!Ee)return;let e=Ee.style.display!=="none";Ee.style.display=e?"none":"flex"}function YE(e){let r=e.querySelector(".remarq-sidebar-footer");if(!r)return;let t=document.createElement("button");t.className="remarq-keyboard-help-btn",t.textContent="?",t.title="Keyboard shortcuts",t.onclick=()=>Yi(),r.appendChild(t)}var JE=`/* Keyboard Shortcuts Help Overlay */
.remarq-keyboard-help {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10002;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.remarq-keyboard-help-content {
  background: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.remarq-keyboard-help-content h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
}

.remarq-keyboard-help-content dl {
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px 16px;
}

.remarq-keyboard-help-content dt {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  font-weight: 600;
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.remarq-keyboard-help-content dd {
  margin: 0;
  display: flex;
  align-items: center;
}

.remarq-keyboard-help-close {
  margin-top: 20px;
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.remarq-keyboard-help-close:hover {
  background: #2563eb;
}

.remarq-keyboard-help-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e5e7eb;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remarq-keyboard-help-btn:hover {
  background: #d1d5db;
}
`;var gU=320,ZE="feedback-layer-commenter",Y=null,Ue=null,Ge=null,Ks=null,eO=null,Hs=null,Ws=null,zs=null,Vs=null,Ys=!1,rO=[],tO=new Set;function st(){return localStorage.getItem(ZE)||""}function nO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){eO=e,Hs=r,Ws=t,zs=n,Vs=i,xU(),Y=document.createElement("div"),Y.className="fb-sidebar fb-sidebar-collapsed",Y.innerHTML=`
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
               value="${ir(st())}">
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
    <div class="remarq-sidebar-footer"></div>
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>hn()),document.body.appendChild(o),document.body.appendChild(Y),HE(Y),Ue=Y.querySelector(".fb-comment-list"),Ge=Y.querySelector(".fb-form-section");let u=Y.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(ZE,u.value.trim())}),Y.querySelector(".fb-ai-btn").addEventListener("click",()=>DE()),Y.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>QE());let s=Y.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ys=s.checked,ar(rO,tO)}),zE({onNavigate:f=>{vn(f),Bs(f),Js(f)},onClose:()=>QE()}),YE(Y)}function hn(){Y.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),Us(!0)}function QE(){Y.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),Us(!1)}function iO(e){if(hn(),!st()){let n=Y.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Ks=e,Ge.style.display="",Ge.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ir(GE(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ge.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!st()){let i=Y.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(eO({comment:n,commenter:st()}),Ge.style.display="none",Ks=null)};Ge.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ge.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ge.style.display="none",Ks=null}),Ge.scrollIntoView({behavior:"smooth",block:"nearest"})}function ar(e,r=new Set,t=new Map){rO=e,tO=r,Ue.innerHTML="";let{topLevel:n,repliesByParent:i}=BE(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Ys}),l=Ys?u:u.filter(s=>s.status!=="closed");if(VE(l),o.length===0){Ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ue.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ue.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(XE(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(XE(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),bU(s.id,f,v)}),f.appendChild(v),Ue.appendChild(f)}}function XE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ir(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ir(e.author)}</span>
      <span class="fb-cmt-time">${UE(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(vn(e.id),Bs(e.id),Ue.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ws&&Ws(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),qU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Hs&&Hs(e.id)}),n}function bU(e,r,t){hn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!st()){let c=Y.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(zs&&zs({parent_id:e,comment:l,commenter:st()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function qU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ir(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function Js(e){let r=Ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function xU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${gU}px;
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
  `,document.head.appendChild(e);let r=document.createElement("style");r.textContent=JE,document.head.appendChild(r)}var ct=null,Ji=null,Qi=null,J=[],Pr=null,Oe=null,ye=new Set,Ke=new Map;function SU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ct=document.querySelector(r.contentSelector)||document.body,Ji=r.documentUri||window.location.origin+window.location.pathname,Qi=r.documentId||null,nO({onSubmit:OU,onDelete:_U,onResolve:kU,onReply:IU,onEdit:PU}),AE(i=>{hn(),Js(i),vn(i)}),CU(),await t(),wU(),FE(r,()=>J)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function wU(){try{J=await ec(Ji,Qi),ye=await TU(J),ar(J,ye,Ke)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),kr(`Failed to load comments: ${e.message}`,"error")}}async function TU(e){NE();let r=new Set;Ke.clear();for(let t of e)if(!t.parent)try{let n=await zi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&t.status!=="closed"?(Vi(n,t.id),r.add(t.id),Ke.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ke.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function CU(){document.addEventListener("mouseup",aO),document.addEventListener("keyup",aO)}function aO(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){yn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){yn();return}if(!ct.contains(r.commonAncestorContainer)){yn();return}EU(r)},10)}function EU(e){yn();let r=e.getBoundingClientRect();Oe=document.createElement("button"),Oe.className="fb-annotate-tooltip",Oe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Oe.style.top=window.scrollY+r.top-36+"px",Oe.style.left=window.scrollX+r.left+r.width/2-40+"px",Oe.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Pr=await PE(i,ct),iO(Pr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}yn()}),document.body.appendChild(Oe)}function yn(){Oe&&(Oe.remove(),Oe=null)}async function OU({comment:e,commenter:r}){if(Pr){try{let t=await Xi({uri:Ji,document:Qi,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});J.push(t);let n=await zi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&(Vi(n,t.id),ye.add(t.id)),ar(J,ye,Ke),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),kr(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function kU(e,r){try{let n=await tc(e,r?"closed":"open"),i=J.findIndex(o=>o.id===e);if(i!==-1&&(J[i]=n),r)Ds(e);else{let o=n,u=await zi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ct);u?(Vi(u,o.id),ye.add(o.id)):ye.delete(o.id)}ar(J,ye,Ke)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),kr(`Failed to update comment: ${t.message}`,"error")}}async function IU({parent_id:e,comment:r,commenter:t}){try{let n=await Xi({uri:Ji,document:Qi,body:r,author:t,parent:e});J.push(n),ar(J,ye,Ke)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),kr(`Failed to save reply: ${n.message}`,"error")}}async function PU(e,r){try{let t=await rc(e,{body:r}),n=J.findIndex(i=>i.id===e);n!==-1&&(J[n]=t),ar(J,ye,Ke)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),kr(`Failed to update comment: ${t.message}`,"error")}}async function _U(e){try{await nc(e),Ds(e),ye.delete(e),J=J.filter(r=>r.id!==e&&r.parent!==e),ar(J,ye,Ke)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),kr(`Failed to delete comment: ${r.message}`,"error")}}try{SU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
