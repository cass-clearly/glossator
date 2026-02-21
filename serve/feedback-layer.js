var FeedbackLayer=(()=>{var aE=Object.create;var Xs=Object.defineProperty;var oE=Object.getOwnPropertyDescriptor;var uE=Object.getOwnPropertyNames;var sE=Object.getPrototypeOf,cE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var lE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of uE(r))!cE.call(e,i)&&i!==t&&Xs(e,i,{get:()=>r[i],enumerable:!(n=oE(r,i))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?aE(sE(e)):{},lE(r||!e||!e.__esModule?Xs(t,"default",{value:e,enumerable:!0}):t,e));var _=a((_5,nc)=>{"use strict";nc.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=a((P5,ic)=>{"use strict";var fE=_();ic.exports=!fE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=a((R5,uc)=>{"use strict";var ac=Pr(),oc=Function.prototype,ra=oc.call,pE=ac&&oc.bind.bind(ra,ra);uc.exports=ac?pE:function(e){return function(){return ra.apply(e,arguments)}}});var G=a((A5,sc)=>{"use strict";var vE=N();sc.exports=vE({}.isPrototypeOf)});var P=a((ta,cc)=>{"use strict";var ct=function(e){return e&&e.Math===Math&&e};cc.exports=ct(typeof globalThis=="object"&&globalThis)||ct(typeof window=="object"&&window)||ct(typeof self=="object"&&self)||ct(typeof global=="object"&&global)||ct(typeof ta=="object"&&ta)||function(){return this}()||Function("return this")()});var Rr=a((N5,vc)=>{"use strict";var dE=Pr(),pc=Function.prototype,lc=pc.apply,fc=pc.call;vc.exports=typeof Reflect=="object"&&Reflect.apply||(dE?fc.bind(lc):function(){return fc.apply(lc,arguments)})});var xe=a((M5,hc)=>{"use strict";var dc=N(),hE=dc({}.toString),mE=dc("".slice);hc.exports=function(e){return mE(hE(e),8,-1)}});var lt=a((j5,mc)=>{"use strict";var yE=xe(),bE=N();mc.exports=function(e){if(yE(e)==="Function")return bE(e)}});var M=a(($5,yc)=>{"use strict";var na=typeof document=="object"&&document.all;yc.exports=typeof na>"u"&&na!==void 0?function(e){return typeof e=="function"||e===na}:function(e){return typeof e=="function"}});var U=a((L5,bc)=>{"use strict";var gE=_();bc.exports=!gE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=a((F5,gc)=>{"use strict";var qE=Pr(),gn=Function.prototype.call;gc.exports=qE?gn.bind(gn):function(){return gn.apply(gn,arguments)}});var ia=a(Sc=>{"use strict";var qc={}.propertyIsEnumerable,xc=Object.getOwnPropertyDescriptor,xE=xc&&!qc.call({1:2},1);Sc.f=xE?function(r){var t=xc(this,r);return!!t&&t.enumerable}:qc});var Ke=a((B5,wc)=>{"use strict";wc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var qn=a((G5,Tc)=>{"use strict";var SE=N(),wE=_(),TE=xe(),aa=Object,CE=SE("".split);Tc.exports=wE(function(){return!aa("z").propertyIsEnumerable(0)})?function(e){return TE(e)==="String"?CE(e,""):aa(e)}:aa});var ar=a((U5,Cc)=>{"use strict";Cc.exports=function(e){return e==null}});var or=a((W5,Oc)=>{"use strict";var OE=ar(),EE=TypeError;Oc.exports=function(e){if(OE(e))throw new EE("Can't call method on "+e);return e}});var _e=a((H5,Ec)=>{"use strict";var IE=qn(),kE=or();Ec.exports=function(e){return IE(kE(e))}});var L=a((K5,Ic)=>{"use strict";var _E=M();Ic.exports=function(e){return typeof e=="object"?e!==null:_E(e)}});var V=a((z5,kc)=>{"use strict";kc.exports={}});var W=a((V5,Pc)=>{"use strict";var oa=V(),ua=P(),PE=M(),_c=function(e){return PE(e)?e:void 0};Pc.exports=function(e,r){return arguments.length<2?_c(oa[e])||_c(ua[e]):oa[e]&&oa[e][r]||ua[e]&&ua[e][r]}});var Ar=a((Y5,Nc)=>{"use strict";var RE=P(),Rc=RE.navigator,Ac=Rc&&Rc.userAgent;Nc.exports=Ac?String(Ac):""});var Nr=a((J5,Dc)=>{"use strict";var Fc=P(),sa=Ar(),Mc=Fc.process,jc=Fc.Deno,$c=Mc&&Mc.versions||jc&&jc.version,Lc=$c&&$c.v8,he,xn;Lc&&(he=Lc.split("."),xn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!xn&&sa&&(he=sa.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=sa.match(/Chrome\/(\d+)/),he&&(xn=+he[1])));Dc.exports=xn});var ur=a((Q5,Gc)=>{"use strict";var Bc=Nr(),AE=_(),NE=P(),ME=NE.String;Gc.exports=!!Object.getOwnPropertySymbols&&!AE(function(){var e=Symbol("symbol detection");return!ME(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Bc&&Bc<41})});var ca=a((X5,Uc)=>{"use strict";var jE=ur();Uc.exports=jE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Mr=a((Z5,Wc)=>{"use strict";var $E=W(),LE=M(),FE=G(),DE=ca(),BE=Object;Wc.exports=DE?function(e){return typeof e=="symbol"}:function(e){var r=$E("Symbol");return LE(r)&&FE(r.prototype,BE(e))}});var ze=a((e6,Hc)=>{"use strict";var GE=String;Hc.exports=function(e){try{return GE(e)}catch{return"Object"}}});var D=a((r6,Kc)=>{"use strict";var UE=M(),WE=ze(),HE=TypeError;Kc.exports=function(e){if(UE(e))return e;throw new HE(WE(e)+" is not a function")}});var Sn=a((t6,zc)=>{"use strict";var KE=D(),zE=ar();zc.exports=function(e,r){var t=e[r];return zE(t)?void 0:KE(t)}});var Yc=a((n6,Vc)=>{"use strict";var la=B(),fa=M(),pa=L(),VE=TypeError;Vc.exports=function(e,r){var t,n;if(r==="string"&&fa(t=e.toString)&&!pa(n=la(t,e))||fa(t=e.valueOf)&&!pa(n=la(t,e))||r!=="string"&&fa(t=e.toString)&&!pa(n=la(t,e)))return n;throw new VE("Can't convert object to primitive value")}});var Z=a((i6,Jc)=>{"use strict";Jc.exports=!0});var Zc=a((a6,Xc)=>{"use strict";var Qc=P(),YE=Object.defineProperty;Xc.exports=function(e,r){try{YE(Qc,e,{value:r,configurable:!0,writable:!0})}catch{Qc[e]=r}return r}});var ft=a((o6,tl)=>{"use strict";var JE=Z(),QE=P(),XE=Zc(),el="__core-js_shared__",rl=tl.exports=QE[el]||XE(el,{});(rl.versions||(rl.versions=[])).push({version:"3.48.0",mode:JE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=a((u6,il)=>{"use strict";var nl=ft();il.exports=function(e,r){return nl[e]||(nl[e]=r||{})}});var re=a((s6,al)=>{"use strict";var ZE=or(),e0=Object;al.exports=function(e){return e0(ZE(e))}});var H=a((c6,ol)=>{"use strict";var r0=N(),t0=re(),n0=r0({}.hasOwnProperty);ol.exports=Object.hasOwn||function(r,t){return n0(t0(r),t)}});var jr=a((l6,ul)=>{"use strict";var i0=N(),a0=0,o0=Math.random(),u0=i0(1.1.toString);ul.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+u0(++a0+o0,36)}});var R=a((f6,cl)=>{"use strict";var s0=P(),c0=sr(),sl=H(),l0=jr(),f0=ur(),p0=ca(),$r=s0.Symbol,va=c0("wks"),v0=p0?$r.for||$r:$r&&$r.withoutSetter||l0;cl.exports=function(e){return sl(va,e)||(va[e]=f0&&sl($r,e)?$r[e]:v0("Symbol."+e)),va[e]}});var vl=a((p6,pl)=>{"use strict";var d0=B(),ll=L(),fl=Mr(),h0=Sn(),m0=Yc(),y0=R(),b0=TypeError,g0=y0("toPrimitive");pl.exports=function(e,r){if(!ll(e)||fl(e))return e;var t=h0(e,g0),n;if(t){if(r===void 0&&(r="default"),n=d0(t,e,r),!ll(n)||fl(n))return n;throw new b0("Can't convert object to primitive value")}return r===void 0&&(r="number"),m0(e,r)}});var wn=a((v6,dl)=>{"use strict";var q0=vl(),x0=Mr();dl.exports=function(e){var r=q0(e,"string");return x0(r)?r:r+""}});var Tn=a((d6,ml)=>{"use strict";var S0=P(),hl=L(),da=S0.document,w0=hl(da)&&hl(da.createElement);ml.exports=function(e){return w0?da.createElement(e):{}}});var ha=a((h6,yl)=>{"use strict";var T0=U(),C0=_(),O0=Tn();yl.exports=!T0&&!C0(function(){return Object.defineProperty(O0("div"),"a",{get:function(){return 7}}).a!==7})});var pt=a(gl=>{"use strict";var E0=U(),I0=B(),k0=ia(),_0=Ke(),P0=_e(),R0=wn(),A0=H(),N0=ha(),bl=Object.getOwnPropertyDescriptor;gl.f=E0?bl:function(r,t){if(r=P0(r),t=R0(t),N0)try{return bl(r,t)}catch{}if(A0(r,t))return _0(!I0(k0.f,r,t),r[t])}});var ma=a((y6,ql)=>{"use strict";var M0=_(),j0=M(),$0=/#|\.prototype\./,vt=function(e,r){var t=F0[L0(e)];return t===B0?!0:t===D0?!1:j0(r)?M0(r):!!r},L0=vt.normalize=function(e){return String(e).replace($0,".").toLowerCase()},F0=vt.data={},D0=vt.NATIVE="N",B0=vt.POLYFILL="P";ql.exports=vt});var Y=a((b6,Sl)=>{"use strict";var xl=lt(),G0=D(),U0=Pr(),W0=xl(xl.bind);Sl.exports=function(e,r){return G0(e),r===void 0?e:U0?W0(e,r):function(){return e.apply(r,arguments)}}});var ya=a((g6,wl)=>{"use strict";var H0=U(),K0=_();wl.exports=H0&&K0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((q6,Tl)=>{"use strict";var z0=L(),V0=String,Y0=TypeError;Tl.exports=function(e){if(z0(e))return e;throw new Y0(V0(e)+" is not an object")}});var te=a(Ol=>{"use strict";var J0=U(),Q0=ha(),X0=ya(),Cn=X(),Cl=wn(),Z0=TypeError,ba=Object.defineProperty,eI=Object.getOwnPropertyDescriptor,ga="enumerable",qa="configurable",xa="writable";Ol.f=J0?X0?function(r,t,n){if(Cn(r),t=Cl(t),Cn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&xa in n&&!n[xa]){var i=eI(r,t);i&&i[xa]&&(r[t]=n.value,n={configurable:qa in n?n[qa]:i[qa],enumerable:ga in n?n[ga]:i[ga],writable:!1})}return ba(r,t,n)}:ba:function(r,t,n){if(Cn(r),t=Cl(t),Cn(n),Q0)try{return ba(r,t,n)}catch{}if("get"in n||"set"in n)throw new Z0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((S6,El)=>{"use strict";var rI=U(),tI=te(),nI=Ke();El.exports=rI?function(e,r,t){return tI.f(e,r,nI(1,t))}:function(e,r,t){return e[r]=t,e}});var q=a((w6,kl)=>{"use strict";var dt=P(),iI=Rr(),aI=lt(),oI=M(),uI=pt().f,sI=ma(),Lr=V(),cI=Y(),Fr=Se(),Il=H();ft();var lI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return iI(e,this,arguments)};return r.prototype=e.prototype,r};kl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?dt:i?dt[t]:dt[t]&&dt[t].prototype,s=n?Lr:Lr[t]||Fr(Lr,t,{})[t],c=s.prototype,l,f,p,v,d,m,h,x,y;for(v in r)l=sI(n?v:t+(i?".":"#")+v,e.forced),f=!l&&u&&Il(u,v),m=s[v],f&&(e.dontCallGetSet?(y=uI(u,v),h=y&&y.value):h=u[v]),d=f&&h?h:r[v],!(!l&&!o&&typeof m==typeof d)&&(e.bind&&f?x=cI(d,dt):e.wrap&&f?x=lI(d):o&&oI(d)?x=aI(d):x=d,(e.sham||d&&d.sham||m&&m.sham)&&Fr(x,"sham",!0),Fr(s,v,x),o&&(p=t+"Prototype",Il(Lr,p)||Fr(Lr,p,{}),Fr(Lr[p],v,d),e.real&&c&&(l||!c[v])&&Fr(c,v,d)))}});var Pe=a((T6,_l)=>{"use strict";var fI=xe();_l.exports=Array.isArray||function(r){return fI(r)==="Array"}});var On=a((C6,Rl)=>{"use strict";var pI=R(),vI=pI("toStringTag"),Pl={};Pl[vI]="z";Rl.exports=String(Pl)==="[object z]"});var ht=a((O6,Al)=>{"use strict";var dI=On(),hI=M(),En=xe(),mI=R(),yI=mI("toStringTag"),bI=Object,gI=En(function(){return arguments}())==="Arguments",qI=function(e,r){try{return e[r]}catch{}};Al.exports=dI?En:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=qI(r=bI(e),yI))=="string"?t:gI?En(r):(n=En(r))==="Object"&&hI(r.callee)?"Arguments":n}});var wa=a((E6,Nl)=>{"use strict";var xI=N(),SI=M(),Sa=ft(),wI=xI(Function.toString);SI(Sa.inspectSource)||(Sa.inspectSource=function(e){return wI(e)});Nl.exports=Sa.inspectSource});var yt=a((I6,Fl)=>{"use strict";var TI=N(),CI=_(),Ml=M(),OI=ht(),EI=W(),II=wa(),jl=function(){},$l=EI("Reflect","construct"),Ta=/^\s*(?:class|function)\b/,kI=TI(Ta.exec),_I=!Ta.test(jl),mt=function(r){if(!Ml(r))return!1;try{return $l(jl,[],r),!0}catch{return!1}},Ll=function(r){if(!Ml(r))return!1;switch(OI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _I||!!kI(Ta,II(r))}catch{return!0}};Ll.sham=!0;Fl.exports=!$l||CI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Ll:mt});var Bl=a((k6,Dl)=>{"use strict";var PI=Math.ceil,RI=Math.floor;Dl.exports=Math.trunc||function(r){var t=+r;return(t>0?RI:PI)(t)}});var In=a((_6,Gl)=>{"use strict";var AI=Bl();Gl.exports=function(e){var r=+e;return r!==r||r===0?0:AI(r)}});var Ca=a((P6,Ul)=>{"use strict";var NI=In(),MI=Math.max,jI=Math.min;Ul.exports=function(e,r){var t=NI(e);return t<0?MI(t+r,0):jI(t,r)}});var Oa=a((R6,Wl)=>{"use strict";var $I=In(),LI=Math.min;Wl.exports=function(e){var r=$I(e);return r>0?LI(r,9007199254740991):0}});var le=a((A6,Hl)=>{"use strict";var FI=Oa();Hl.exports=function(e){return FI(e.length)}});var Dr=a((N6,Kl)=>{"use strict";var DI=U(),BI=te(),GI=Ke();Kl.exports=function(e,r,t){DI?BI.f(e,r,GI(0,t)):e[r]=t}});var Br=a((M6,zl)=>{"use strict";var UI=U(),WI=Pe(),HI=TypeError,KI=Object.getOwnPropertyDescriptor,zI=UI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();zl.exports=zI?function(e,r){if(WI(e)&&!KI(e,"length").writable)throw new HI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=a((j6,Vl)=>{"use strict";var VI=_(),YI=R(),JI=Nr(),QI=YI("species");Vl.exports=function(e){return JI>=51||!VI(function(){var r=[],t=r.constructor={};return t[QI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=a(($6,Yl)=>{"use strict";var XI=N();Yl.exports=XI([].slice)});var Xl=a(()=>{"use strict";var ZI=q(),Jl=Pe(),ek=yt(),rk=L(),Ql=Ca(),tk=le(),nk=_e(),ik=Dr(),ak=Br(),ok=R(),uk=bt(),sk=cr(),ck=uk("slice"),lk=ok("species"),Ea=Array,fk=Math.max;ZI({target:"Array",proto:!0,forced:!ck},{slice:function(r,t){var n=nk(this),i=tk(n),o=Ql(r,i),u=Ql(t===void 0?i:t,i),s,c,l;if(Jl(n)&&(s=n.constructor,ek(s)&&(s===Ea||Jl(s.prototype))?s=void 0:rk(s)&&(s=s[lk],s===null&&(s=void 0)),s===Ea||s===void 0))return sk(n,o,u);for(c=new(s===void 0?Ea:s)(fk(u-o,0)),l=0;o<u;o++,l++)o in n&&ik(c,l,n[o]);return ak(c,l),c}})});var oe=a((D6,Zl)=>{"use strict";var pk=P(),vk=V();Zl.exports=function(e,r){var t=vk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=pk[e],o=i&&i.prototype;return o&&o[r]}});var rf=a((B6,ef)=>{"use strict";Xl();var dk=oe();ef.exports=dk("Array","slice")});var nf=a((G6,tf)=>{"use strict";var hk=G(),mk=rf(),Ia=Array.prototype;tf.exports=function(e){var r=e.slice;return e===Ia||hk(Ia,e)&&r===Ia.slice?mk:r}});var of=a((U6,af)=>{"use strict";var yk=nf();af.exports=yk});var sf=a((W6,uf)=>{"use strict";var bk=of();uf.exports=bk});var lf=a((H6,cf)=>{"use strict";var gk=sf();cf.exports=gk});var ka=a((K6,ff)=>{"use strict";ff.exports=lf()});var Gr=a((z6,pf)=>{pf.exports=ka()});var Ve=a((V6,vf)=>{"use strict";var qk=ht(),xk=String;vf.exports=function(e){if(qk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return xk(e)}});var yf=a((Y6,mf)=>{"use strict";var _a=N(),Sk=In(),wk=Ve(),Tk=or(),Ck=_a("".charAt),df=_a("".charCodeAt),Ok=_a("".slice),hf=function(e){return function(r,t){var n=wk(Tk(r)),i=Sk(t),o=n.length,u,s;return i<0||i>=o?e?"":void 0:(u=df(n,i),u<55296||u>56319||i+1===o||(s=df(n,i+1))<56320||s>57343?e?Ck(n,i):u:e?Ok(n,i,i+2):(u-55296<<10)+(s-56320)+65536)}};mf.exports={codeAt:hf(!1),charAt:hf(!0)}});var qf=a((J6,gf)=>{"use strict";var Ek=P(),Ik=M(),bf=Ek.WeakMap;gf.exports=Ik(bf)&&/native code/.test(String(bf))});var gt=a((Q6,Sf)=>{"use strict";var kk=sr(),_k=jr(),xf=kk("keys");Sf.exports=function(e){return xf[e]||(xf[e]=_k(e))}});var Ur=a((X6,wf)=>{"use strict";wf.exports={}});var Ye=a((Z6,Of)=>{"use strict";var Pk=qf(),Cf=P(),Rk=L(),Ak=Se(),Pa=H(),Ra=ft(),Nk=gt(),Mk=Ur(),Tf="Object already initialized",Aa=Cf.TypeError,jk=Cf.WeakMap,kn,qt,_n,$k=function(e){return _n(e)?qt(e):kn(e,{})},Lk=function(e){return function(r){var t;if(!Rk(r)||(t=qt(r)).type!==e)throw new Aa("Incompatible receiver, "+e+" required");return t}};Pk||Ra.state?(me=Ra.state||(Ra.state=new jk),me.get=me.get,me.has=me.has,me.set=me.set,kn=function(e,r){if(me.has(e))throw new Aa(Tf);return r.facade=e,me.set(e,r),r},qt=function(e){return me.get(e)||{}},_n=function(e){return me.has(e)}):(lr=Nk("state"),Mk[lr]=!0,kn=function(e,r){if(Pa(e,lr))throw new Aa(Tf);return r.facade=e,Ak(e,lr,r),r},qt=function(e){return Pa(e,lr)?e[lr]:{}},_n=function(e){return Pa(e,lr)});var me,lr;Of.exports={set:kn,get:qt,has:_n,enforce:$k,getterFor:Lk}});var kf=a((eU,If)=>{"use strict";var Na=U(),Fk=H(),Ef=Function.prototype,Dk=Na&&Object.getOwnPropertyDescriptor,Ma=Fk(Ef,"name"),Bk=Ma&&function(){}.name==="something",Gk=Ma&&(!Na||Na&&Dk(Ef,"name").configurable);If.exports={EXISTS:Ma,PROPER:Bk,CONFIGURABLE:Gk}});var ja=a((rU,Pf)=>{"use strict";var Uk=_e(),Wk=Ca(),Hk=le(),_f=function(e){return function(r,t,n){var i=Uk(r),o=Hk(i);if(o===0)return!e&&-1;var u=Wk(n,o),s;if(e&&t!==t){for(;o>u;)if(s=i[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Pf.exports={includes:_f(!0),indexOf:_f(!1)}});var La=a((tU,Af)=>{"use strict";var Kk=N(),$a=H(),zk=_e(),Vk=ja().indexOf,Yk=Ur(),Rf=Kk([].push);Af.exports=function(e,r){var t=zk(e),n=0,i=[],o;for(o in t)!$a(Yk,o)&&$a(t,o)&&Rf(i,o);for(;r.length>n;)$a(t,o=r[n++])&&(~Vk(i,o)||Rf(i,o));return i}});var Pn=a((nU,Nf)=>{"use strict";Nf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Rn=a((iU,Mf)=>{"use strict";var Jk=La(),Qk=Pn();Mf.exports=Object.keys||function(r){return Jk(r,Qk)}});var Fa=a(jf=>{"use strict";var Xk=U(),Zk=ya(),e1=te(),r1=X(),t1=_e(),n1=Rn();jf.f=Xk&&!Zk?Object.defineProperties:function(r,t){r1(r);for(var n=t1(t),i=n1(t),o=i.length,u=0,s;o>u;)e1.f(r,s=i[u++],n[s]);return r}});var Da=a((oU,$f)=>{"use strict";var i1=W();$f.exports=i1("document","documentElement")});var Je=a((uU,Wf)=>{"use strict";var a1=X(),o1=Fa(),Lf=Pn(),u1=Ur(),s1=Da(),c1=Tn(),l1=gt(),Ff=">",Df="<",Ga="prototype",Ua="script",Gf=l1("IE_PROTO"),Ba=function(){},Uf=function(e){return Df+Ua+Ff+e+Df+"/"+Ua+Ff},Bf=function(e){e.write(Uf("")),e.close();var r=e.parentWindow.Object;return e=null,r},f1=function(){var e=c1("iframe"),r="java"+Ua+":",t;return e.style.display="none",s1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Uf("document.F=Object")),t.close(),t.F},An,Nn=function(){try{An=new ActiveXObject("htmlfile")}catch{}Nn=typeof document<"u"?document.domain&&An?Bf(An):f1():Bf(An);for(var e=Lf.length;e--;)delete Nn[Ga][Lf[e]];return Nn()};u1[Gf]=!0;Wf.exports=Object.create||function(r,t){var n;return r!==null?(Ba[Ga]=a1(r),n=new Ba,Ba[Ga]=null,n[Gf]=r):n=Nn(),t===void 0?n:o1.f(n,t)}});var Wa=a((sU,Hf)=>{"use strict";var p1=_();Hf.exports=!p1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var xt=a((cU,zf)=>{"use strict";var v1=H(),d1=M(),h1=re(),m1=gt(),y1=Wa(),Kf=m1("IE_PROTO"),Ha=Object,b1=Ha.prototype;zf.exports=y1?Ha.getPrototypeOf:function(e){var r=h1(e);if(v1(r,Kf))return r[Kf];var t=r.constructor;return d1(t)&&r instanceof t?t.prototype:r instanceof Ha?b1:null}});var Re=a((lU,Vf)=>{"use strict";var g1=Se();Vf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:g1(e,r,t),e}});var Ya=a((fU,Qf)=>{"use strict";var q1=_(),x1=M(),S1=L(),w1=Je(),Yf=xt(),T1=Re(),C1=R(),O1=Z(),Va=C1("iterator"),Jf=!1,Ae,Ka,za;[].keys&&(za=[].keys(),"next"in za?(Ka=Yf(Yf(za)),Ka!==Object.prototype&&(Ae=Ka)):Jf=!0);var E1=!S1(Ae)||q1(function(){var e={};return Ae[Va].call(e)!==e});E1?Ae={}:O1&&(Ae=w1(Ae));x1(Ae[Va])||T1(Ae,Va,function(){return this});Qf.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Jf}});var Zf=a((pU,Xf)=>{"use strict";var I1=On(),k1=ht();Xf.exports=I1?{}.toString:function(){return"[object "+k1(this)+"]"}});var Ne=a((vU,rp)=>{"use strict";var _1=On(),P1=te().f,R1=Se(),A1=H(),N1=Zf(),M1=R(),ep=M1("toStringTag");rp.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(A1(i,ep)||P1(i,ep,{configurable:!0,value:r}),n&&!_1&&R1(i,"toString",N1))}});var fr=a((dU,tp)=>{"use strict";tp.exports={}});var ip=a((hU,np)=>{"use strict";var j1=Ya().IteratorPrototype,$1=Je(),L1=Ke(),F1=Ne(),D1=fr(),B1=function(){return this};np.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=$1(j1,{next:L1(+!n,t)}),F1(e,i,!1,!0),D1[i]=B1,e}});var op=a((mU,ap)=>{"use strict";var G1=N(),U1=D();ap.exports=function(e,r,t){try{return G1(U1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var sp=a((yU,up)=>{"use strict";var W1=L();up.exports=function(e){return W1(e)||e===null}});var lp=a((bU,cp)=>{"use strict";var H1=sp(),K1=String,z1=TypeError;cp.exports=function(e){if(H1(e))return e;throw new z1("Can't set "+K1(e)+" as a prototype")}});var St=a((gU,fp)=>{"use strict";var V1=op(),Y1=L(),J1=or(),Q1=lp();fp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=V1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return J1(i),Q1(o),Y1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var $n=a((qU,xp)=>{"use strict";var X1=q(),Z1=B(),Mn=Z(),gp=kf(),e_=M(),r_=ip(),pp=xt(),vp=St(),t_=Ne(),n_=Se(),Ja=Re(),i_=R(),dp=fr(),qp=Ya(),a_=gp.PROPER,o_=gp.CONFIGURABLE,hp=qp.IteratorPrototype,jn=qp.BUGGY_SAFARI_ITERATORS,wt=i_("iterator"),mp="keys",Tt="values",yp="entries",bp=function(){return this};xp.exports=function(e,r,t,n,i,o,u){r_(t,r,n);var s=function(y){if(y===i&&v)return v;if(!jn&&y&&y in f)return f[y];switch(y){case mp:return function(){return new t(this,y)};case Tt:return function(){return new t(this,y)};case yp:return function(){return new t(this,y)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[wt]||f["@@iterator"]||i&&f[i],v=!jn&&p||s(i),d=r==="Array"&&f.entries||p,m,h,x;if(d&&(m=pp(d.call(new e)),m!==Object.prototype&&m.next&&(!Mn&&pp(m)!==hp&&(vp?vp(m,hp):e_(m[wt])||Ja(m,wt,bp)),t_(m,c,!0,!0),Mn&&(dp[c]=bp))),a_&&i===Tt&&p&&p.name!==Tt&&(!Mn&&o_?n_(f,"name",Tt):(l=!0,v=function(){return Z1(p,this)})),i)if(h={values:s(Tt),keys:o?v:s(mp),entries:s(yp)},u)for(x in h)(jn||l||!(x in f))&&Ja(f,x,h[x]);else X1({target:r,proto:!0,forced:jn||l},h);return(!Mn||u)&&f[wt]!==v&&Ja(f,wt,v,{name:i}),dp[r]=v,h}});var Ln=a((xU,Sp)=>{"use strict";Sp.exports=function(e,r){return{value:e,done:r}}});var pr=a(()=>{"use strict";var u_=yf().charAt,s_=Ve(),Tp=Ye(),c_=$n(),wp=Ln(),Cp="String Iterator",l_=Tp.set,f_=Tp.getterFor(Cp);c_(String,"String",function(e){l_(this,{type:Cp,string:s_(e),index:0})},function(){var r=f_(this),t=r.string,n=r.index,i;return n>=t.length?wp(void 0,!0):(i=u_(t,n),r.index+=i.length,wp(i,!1))})});var Qa=a((TU,Ep)=>{"use strict";var p_=B(),Op=X(),v_=Sn();Ep.exports=function(e,r,t){var n,i;Op(e);try{if(n=v_(e,"return"),!n){if(r==="throw")throw t;return t}n=p_(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Op(n),t}});var kp=a((CU,Ip)=>{"use strict";var d_=X(),h_=Qa();Ip.exports=function(e,r,t,n){try{return n?r(d_(t)[0],t[1]):r(t)}catch(i){h_(e,"throw",i)}}});var Xa=a((OU,_p)=>{"use strict";var m_=R(),y_=fr(),b_=m_("iterator"),g_=Array.prototype;_p.exports=function(e){return e!==void 0&&(y_.Array===e||g_[b_]===e)}});var Ct=a((EU,Rp)=>{"use strict";var q_=ht(),Pp=Sn(),x_=ar(),S_=fr(),w_=R(),T_=w_("iterator");Rp.exports=function(e){if(!x_(e))return Pp(e,T_)||Pp(e,"@@iterator")||S_[q_(e)]}});var Fn=a((IU,Ap)=>{"use strict";var C_=B(),O_=D(),E_=X(),I_=ze(),k_=Ct(),__=TypeError;Ap.exports=function(e,r){var t=arguments.length<2?k_(e):r;if(O_(t))return E_(C_(t,e));throw new __(I_(e)+" is not iterable")}});var $p=a((kU,jp)=>{"use strict";var P_=Y(),R_=B(),A_=re(),N_=kp(),M_=Xa(),j_=yt(),$_=le(),Np=Dr(),L_=Br(),F_=Fn(),D_=Ct(),Mp=Array;jp.exports=function(r){var t=A_(r),n=j_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=P_(o,i>2?arguments[2]:void 0));var s=D_(t),c=0,l,f,p,v,d,m;if(s&&!(this===Mp&&M_(s)))for(f=n?new this:[],v=F_(t,s),d=v.next;!(p=R_(d,v)).done;c++)m=u?N_(v,o,[p.value,c],!0):p.value,Np(f,c,m);else for(l=$_(t),f=n?new this(l):Mp(l);l>c;c++)m=u?o(t[c],c):t[c],Np(f,c,m);return L_(f,c),f}});var eo=a((_U,Bp)=>{"use strict";var B_=R(),Fp=B_("iterator"),Dp=!1;try{Lp=0,Za={next:function(){return{done:!!Lp++}},return:function(){Dp=!0}},Za[Fp]=function(){return this},Array.from(Za,function(){throw 2})}catch{}var Lp,Za;Bp.exports=function(e,r){try{if(!r&&!Dp)return!1}catch{return!1}var t=!1;try{var n={};n[Fp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Gp=a(()=>{"use strict";var G_=q(),U_=$p(),W_=eo(),H_=!W_(function(e){Array.from(e)});G_({target:"Array",stat:!0,forced:H_},{from:U_})});var Wp=a((AU,Up)=>{"use strict";pr();Gp();var K_=V();Up.exports=K_.Array.from});var Kp=a((NU,Hp)=>{"use strict";var z_=Wp();Hp.exports=z_});var Vp=a((MU,zp)=>{"use strict";var V_=Kp();zp.exports=V_});var Jp=a((jU,Yp)=>{"use strict";var Y_=Vp();Yp.exports=Y_});var ro=a(($U,Qp)=>{"use strict";Qp.exports=Jp()});var Dn=a((LU,Xp)=>{Xp.exports=ro()});var Ot=a((FU,Zp)=>{"use strict";var J_=TypeError,Q_=9007199254740991;Zp.exports=function(e){if(e>Q_)throw J_("Maximum allowed index exceeded");return e}});var nv=a((DU,tv)=>{"use strict";var ev=Pe(),X_=yt(),Z_=L(),eP=R(),rP=eP("species"),rv=Array;tv.exports=function(e){var r;return ev(e)&&(r=e.constructor,X_(r)&&(r===rv||ev(r.prototype))?r=void 0:Z_(r)&&(r=r[rP],r===null&&(r=void 0))),r===void 0?rv:r}});var Bn=a((BU,iv)=>{"use strict";var tP=nv();iv.exports=function(e,r){return new(tP(e))(r===0?0:r)}});var to=a(()=>{"use strict";var nP=q(),iP=_(),aP=Pe(),oP=L(),uP=re(),sP=le(),av=Ot(),ov=Dr(),cP=Br(),lP=Bn(),fP=bt(),pP=R(),vP=Nr(),uv=pP("isConcatSpreadable"),dP=vP>=51||!iP(function(){var e=[];return e[uv]=!1,e.concat()[0]!==e}),hP=function(e){if(!oP(e))return!1;var r=e[uv];return r!==void 0?!!r:aP(e)},mP=!dP||!fP("concat");nP({target:"Array",proto:!0,arity:1,forced:mP},{concat:function(r){var t=uP(this),n=lP(t,0),i=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],hP(l))for(c=sP(l),av(i+c),u=0;u<c;u++,i++)u in l&&ov(n,i,l[u]);else av(i+1),ov(n,i++,l);return cP(n,i),n}})});var Et=a(()=>{});var It=a(sv=>{"use strict";var yP=La(),bP=Pn(),gP=bP.concat("length","prototype");sv.f=Object.getOwnPropertyNames||function(r){return yP(r,gP)}});var no=a((zU,fv)=>{"use strict";var qP=xe(),xP=_e(),cv=It().f,SP=cr(),lv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],wP=function(e){try{return cv(e)}catch{return SP(lv)}};fv.exports.f=function(r){return lv&&qP(r)==="Window"?wP(r):cv(xP(r))}});var Gn=a(pv=>{"use strict";pv.f=Object.getOwnPropertySymbols});var Un=a((YU,vv)=>{"use strict";var TP=te();vv.exports=function(e,r,t){return TP.f(e,r,t)}});var Wr=a(dv=>{"use strict";var CP=R();dv.f=CP});var j=a((QU,mv)=>{"use strict";var hv=V(),OP=H(),EP=Wr(),IP=te().f;mv.exports=function(e){var r=hv.Symbol||(hv.Symbol={});OP(r,e)||IP(r,e,{value:EP.f(e)})}});var io=a((XU,yv)=>{"use strict";var kP=B(),_P=W(),PP=R(),RP=Re();yv.exports=function(){var e=_P("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=PP("toPrimitive");r&&!r[n]&&RP(r,n,function(i){return kP(t,this)},{arity:1})}});var kt=a((ZU,gv)=>{"use strict";var AP=Y(),NP=qn(),MP=re(),jP=le(),bv=Bn(),ao=Dr(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=MP(c),v=NP(p),d=jP(v),m=AP(l,f),h=0,x=0,y=r?bv(c,d):t||u?bv(c,0):void 0,g,E;d>h;h++)if((s||h in v)&&(g=v[h],E=m(g,h,p),e))if(r)ao(y,h,E);else if(E)switch(e){case 3:return!0;case 5:return g;case 6:return h;case 2:ao(y,x++,g)}else switch(e){case 4:return!1;case 7:ao(y,x++,g)}return o?-1:n||i?i:y}};gv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var jv=a(()=>{"use strict";var Wn=q(),Rt=P(),ho=B(),$P=N(),LP=Z(),Hr=U(),Kr=ur(),FP=_(),K=H(),DP=G(),co=X(),Hn=_e(),mo=wn(),BP=Ve(),lo=Ke(),zr=Je(),Sv=Rn(),GP=It(),wv=no(),UP=Gn(),Tv=pt(),Cv=te(),WP=Fa(),Ov=ia(),oo=Re(),HP=Un(),yo=sr(),KP=gt(),Ev=Ur(),qv=jr(),zP=R(),VP=Wr(),YP=j(),JP=io(),QP=Ne(),Iv=Ye(),Kn=kt().forEach,ne=KP("hidden"),zn="Symbol",Pt="prototype",XP=Iv.set,xv=Iv.getterFor(zn),fe=Object[Pt],vr=Rt.Symbol,_t=vr&&vr[Pt],ZP=Rt.RangeError,eR=Rt.TypeError,uo=Rt.QObject,kv=Tv.f,dr=Cv.f,_v=wv.f,rR=Ov.f,Pv=$P([].push),Me=yo("symbols"),At=yo("op-symbols"),tR=yo("wks"),fo=!uo||!uo[Pt]||!uo[Pt].findChild,Rv=function(e,r,t){var n=kv(fe,r);n&&delete fe[r],dr(e,r,t),n&&e!==fe&&dr(fe,r,n)},po=Hr&&FP(function(){return zr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Rv:dr,so=function(e,r){var t=Me[e]=zr(_t);return XP(t,{type:zn,tag:e,description:r}),Hr||(t.description=r),t},Vn=function(r,t,n){r===fe&&Vn(At,t,n),co(r);var i=mo(t);return co(n),K(Me,i)?(n.enumerable?(K(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=zr(n,{enumerable:lo(0,!1)})):(K(r,ne)||dr(r,ne,lo(1,zr(null))),r[ne][i]=!0),po(r,i,n)):dr(r,i,n)},bo=function(r,t){co(r);var n=Hn(t),i=Sv(n).concat(Mv(n));return Kn(i,function(o){(!Hr||ho(vo,n,o))&&Vn(r,o,n[o])}),r},nR=function(r,t){return t===void 0?zr(r):bo(zr(r),t)},vo=function(r){var t=mo(r),n=ho(rR,this,t);return this===fe&&K(Me,t)&&!K(At,t)?!1:n||!K(this,t)||!K(Me,t)||K(this,ne)&&this[ne][t]?n:!0},Av=function(r,t){var n=Hn(r),i=mo(t);if(!(n===fe&&K(Me,i)&&!K(At,i))){var o=kv(n,i);return o&&K(Me,i)&&!(K(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Nv=function(r){var t=_v(Hn(r)),n=[];return Kn(t,function(i){!K(Me,i)&&!K(Ev,i)&&Pv(n,i)}),n},Mv=function(e){var r=e===fe,t=_v(r?At:Hn(e)),n=[];return Kn(t,function(i){K(Me,i)&&(!r||K(fe,i))&&Pv(n,Me[i])}),n};Kr||(vr=function(){if(DP(_t,this))throw new eR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:BP(arguments[0]),t=qv(r),n=function(i){var o=this===void 0?Rt:this;o===fe&&ho(n,At,i),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=lo(1,i);try{po(o,t,u)}catch(s){if(!(s instanceof ZP))throw s;Rv(o,t,u)}};return Hr&&fo&&po(fe,t,{configurable:!0,set:n}),so(t,r)},_t=vr[Pt],oo(_t,"toString",function(){return xv(this).tag}),oo(vr,"withoutSetter",function(e){return so(qv(e),e)}),Ov.f=vo,Cv.f=Vn,WP.f=bo,Tv.f=Av,GP.f=wv.f=Nv,UP.f=Mv,VP.f=function(e){return so(zP(e),e)},Hr&&(HP(_t,"description",{configurable:!0,get:function(){return xv(this).description}}),LP||oo(fe,"propertyIsEnumerable",vo,{unsafe:!0})));Wn({global:!0,constructor:!0,wrap:!0,forced:!Kr,sham:!Kr},{Symbol:vr});Kn(Sv(tR),function(e){YP(e)});Wn({target:zn,stat:!0,forced:!Kr},{useSetter:function(){fo=!0},useSimple:function(){fo=!1}});Wn({target:"Object",stat:!0,forced:!Kr,sham:!Hr},{create:nR,defineProperty:Vn,defineProperties:bo,getOwnPropertyDescriptor:Av});Wn({target:"Object",stat:!0,forced:!Kr},{getOwnPropertyNames:Nv});JP();QP(vr,zn);Ev[ne]=!0});var go=a((t8,$v)=>{"use strict";var iR=ur();$v.exports=iR&&!!Symbol.for&&!!Symbol.keyFor});var Fv=a(()=>{"use strict";var aR=q(),oR=W(),uR=H(),sR=Ve(),Lv=sr(),cR=go(),qo=Lv("string-to-symbol-registry"),lR=Lv("symbol-to-string-registry");aR({target:"Symbol",stat:!0,forced:!cR},{for:function(e){var r=sR(e);if(uR(qo,r))return qo[r];var t=oR("Symbol")(r);return qo[r]=t,lR[t]=r,t}})});var Bv=a(()=>{"use strict";var fR=q(),pR=H(),vR=Mr(),dR=ze(),hR=sr(),mR=go(),Dv=hR("symbol-to-string-registry");fR({target:"Symbol",stat:!0,forced:!mR},{keyFor:function(r){if(!vR(r))throw new TypeError(dR(r)+" is not a symbol");if(pR(Dv,r))return Dv[r]}})});var Uv=a((u8,Gv)=>{"use strict";var yR=L(),bR=Ye().get;Gv.exports=function(r){if(!yR(r))return!1;var t=bR(r);return!!t&&t.type==="RawJSON"}});var Vv=a((s8,zv)=>{"use strict";var xo=N(),gR=H(),Yn=SyntaxError,qR=parseInt,xR=String.fromCharCode,SR=xo("".charAt),Wv=xo("".slice),Hv=xo(/./.exec),Kv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},wR=/^[\da-f]{4}$/i,TR=/^[\u0000-\u001F]$/;zv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=SR(e,r);if(i==="\\"){var o=Wv(e,r,r+2);if(gR(Kv,o))n+=Kv[o],r+=2;else if(o==="\\u"){r+=2;var u=Wv(e,r,r+4);if(!Hv(wR,u))throw new Yn("Bad Unicode escape at: "+r);n+=xR(qR(u,16)),r+=4}else throw new Yn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Hv(TR,i))throw new Yn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Yn("Unterminated string at: "+r);return{value:n,end:r}}});var Jv=a((c8,Yv)=>{"use strict";var CR=_();Yv.exports=!CR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var ld=a(()=>{"use strict";var OR=q(),id=W(),ER=Rr(),ad=B(),hr=N(),od=_(),Qv=Pe(),Qn=M(),IR=Uv(),Xv=Mr(),Zv=xe(),kR=Ve(),_R=cr(),PR=Vv(),RR=jr(),AR=ur(),So=Jv(),ud=String,Xe=id("JSON","stringify"),Jn=hr(/./.exec),To=hr("".charAt),NR=hr("".charCodeAt),MR=hr("".replace),wo=hr("".slice),Co=hr([].push),jR=hr(1.1.toString),$R=/[\uD800-\uDFFF]/g,ed=/^[\uD800-\uDBFF]$/,rd=/^[\uDC00-\uDFFF]$/,Oo=RR(),td=Oo.length,sd=!AR||od(function(){var e=id("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),nd=od(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),LR=sd?function(e,r){var t=_R(arguments),n=cd(r);if(!(!Qn(n)&&(e===void 0||Xv(e))))return t[1]=function(i,o){if(Qn(n)&&(o=ad(n,this,ud(i),o)),!Xv(o))return o},ER(Xe,null,t)}:Xe,FR=function(e,r,t){var n=To(t,r-1),i=To(t,r+1);return Jn(ed,e)&&!Jn(rd,i)||Jn(rd,e)&&!Jn(ed,n)?"\\u"+jR(NR(e,0),16):e},cd=function(e){if(Qn(e))return e;if(Qv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?Co(t,i):(typeof i=="number"||Zv(i)==="Number"||Zv(i)==="String")&&Co(t,kR(i))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(Qv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};Xe&&OR({target:"JSON",stat:!0,arity:3,forced:sd||nd||!So},{stringify:function(r,t,n){var i=cd(t),o=[],u=LR(r,function(d,m){var h=Qn(i)?ad(i,this,ud(d),m):m;return!So&&IR(h)?Oo+(Co(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(nd&&(u=MR(u,$R,FR)),So))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=To(u,l);if(f==='"'){var p=PR(u,++l).end-1,v=wo(u,l,p);s+=wo(v,0,td)===Oo?o[wo(v,td)]:'"'+v+'"',l=p}else s+=f}return s}})});var pd=a(()=>{"use strict";var DR=q(),BR=ur(),GR=_(),fd=Gn(),UR=re(),WR=!BR||GR(function(){fd.f(1)});DR({target:"Object",stat:!0,forced:WR},{getOwnPropertySymbols:function(r){var t=fd.f;return t?t(UR(r)):[]}})});var vd=a(()=>{"use strict";jv();Fv();Bv();ld();pd()});var Eo=a(()=>{"use strict";var HR=j();HR("asyncDispose")});var Io=a(()=>{"use strict";var KR=j();KR("asyncIterator")});var dd=a(()=>{});var ko=a(()=>{"use strict";var zR=j();zR("dispose")});var hd=a(()=>{"use strict";var VR=j();VR("hasInstance")});var md=a(()=>{"use strict";var YR=j();YR("isConcatSpreadable")});var _o=a(()=>{"use strict";var JR=j();JR("iterator")});var yd=a(()=>{"use strict";var QR=j();QR("match")});var bd=a(()=>{"use strict";var XR=j();XR("matchAll")});var gd=a(()=>{"use strict";var ZR=j();ZR("replace")});var qd=a(()=>{"use strict";var eA=j();eA("search")});var xd=a(()=>{"use strict";var rA=j();rA("species")});var Sd=a(()=>{"use strict";var tA=j();tA("split")});var Po=a(()=>{"use strict";var nA=j(),iA=io();nA("toPrimitive");iA()});var wd=a(()=>{"use strict";var aA=W(),oA=j(),uA=Ne();oA("toStringTag");uA(aA("Symbol"),"Symbol")});var Td=a(()=>{"use strict";var sA=j();sA("unscopables")});var Cd=a(()=>{"use strict";var cA=P(),lA=Ne();lA(cA.JSON,"JSON",!0)});var Od=a(()=>{});var Ed=a(()=>{});var kd=a((eW,Id)=>{"use strict";to();Et();vd();Eo();Io();dd();ko();hd();md();_o();yd();bd();gd();qd();xd();Sd();Po();wd();Td();Cd();Od();Ed();var fA=V();Id.exports=fA.Symbol});var Ro=a((rW,_d)=>{"use strict";_d.exports=function(){}});var mr=a((tW,Md)=>{"use strict";var pA=_e(),Ao=Ro(),Pd=fr(),Ad=Ye(),vA=te().f,dA=$n(),Xn=Ln(),hA=Z(),mA=U(),Nd="Array Iterator",yA=Ad.set,bA=Ad.getterFor(Nd);Md.exports=dA(Array,"Array",function(e,r){yA(this,{type:Nd,target:pA(e),index:0,kind:r})},function(){var e=bA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Xn(void 0,!0);switch(e.kind){case"keys":return Xn(t,!1);case"values":return Xn(r[t],!1)}return Xn([t,r[t]],!1)},"values");var Rd=Pd.Arguments=Pd.Array;Ao("keys");Ao("values");Ao("entries");if(!hA&&mA&&Rd.name!=="values")try{vA(Rd,"name",{value:"values"})}catch{}});var $d=a((nW,jd)=>{"use strict";jd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=a(()=>{"use strict";mr();var gA=$d(),qA=P(),xA=Ne(),Ld=fr();for(Zn in gA)xA(qA[Zn],Zn),Ld[Zn]=Ld.Array;var Zn});var Dd=a((oW,Fd)=>{"use strict";var SA=kd();yr();Fd.exports=SA});var Ud=a(()=>{"use strict";var wA=R(),TA=te().f,Bd=wA("metadata"),Gd=Function.prototype;Gd[Bd]===void 0&&TA(Gd,Bd,{value:null})});var Wd=a(()=>{"use strict";Eo()});var Hd=a(()=>{"use strict";ko()});var Kd=a(()=>{"use strict";var CA=j();CA("metadata")});var Vd=a((hW,zd)=>{"use strict";var OA=Dd();Ud();Wd();Hd();Kd();zd.exports=OA});var Mo=a((mW,Yd)=>{"use strict";var EA=W(),IA=N(),No=EA("Symbol"),kA=No.keyFor,_A=IA(No.prototype.valueOf);Yd.exports=No.isRegisteredSymbol||function(r){try{return kA(_A(r))!==void 0}catch{return!1}}});var Jd=a(()=>{"use strict";var PA=q(),RA=Mo();PA({target:"Symbol",stat:!0},{isRegisteredSymbol:RA})});var Lo=a((gW,th)=>{"use strict";var AA=sr(),eh=W(),NA=N(),MA=Mr(),jA=R(),ri=eh("Symbol"),Qd=ri.isWellKnownSymbol,rh=eh("Object","getOwnPropertyNames"),$A=NA(ri.prototype.valueOf),Xd=AA("wks");for(ei=0,jo=rh(ri),Zd=jo.length;ei<Zd;ei++)try{$o=jo[ei],MA(ri[$o])&&jA($o)}catch{}var $o,ei,jo,Zd;th.exports=function(r){if(Qd&&Qd(r))return!0;try{for(var t=$A(r),n=0,i=rh(Xd),o=i.length;n<o;n++)if(Xd[i[n]]==t)return!0}catch{}return!1}});var nh=a(()=>{"use strict";var LA=q(),FA=Lo();LA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:FA})});var ih=a(()=>{"use strict";var DA=j();DA("customMatcher")});var ah=a(()=>{"use strict";var BA=j();BA("observable")});var oh=a(()=>{"use strict";var GA=q(),UA=Mo();GA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:UA})});var uh=a(()=>{"use strict";var WA=q(),HA=Lo();WA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:HA})});var sh=a(()=>{"use strict";var KA=j();KA("matcher")});var ch=a(()=>{"use strict";var zA=j();zA("metadataKey")});var lh=a(()=>{"use strict";var VA=j();VA("patternMatch")});var fh=a(()=>{"use strict";var YA=j();YA("replaceAll")});var vh=a((LW,ph)=>{"use strict";var JA=Vd();Jd();nh();ih();ah();oh();uh();sh();ch();lh();fh();ph.exports=JA});var we=a((FW,dh)=>{"use strict";dh.exports=vh()});var ti=a((DW,hh)=>{hh.exports=we()});var yh=a((BW,mh)=>{"use strict";mr();pr();var QA=Ct();mh.exports=QA});var gh=a((GW,bh)=>{"use strict";var XA=yh();yr();bh.exports=XA});var xh=a((UW,qh)=>{"use strict";var ZA=gh();qh.exports=ZA});var wh=a((WW,Sh)=>{"use strict";var eN=xh();Sh.exports=eN});var Fo=a((HW,Th)=>{"use strict";Th.exports=wh()});var ni=a((KW,Ch)=>{Ch.exports=Fo()});var Eh=a((zW,Oh)=>{"use strict";mr();pr();var rN=Fn();Oh.exports=rN});var kh=a((VW,Ih)=>{"use strict";var tN=Eh();yr();Ih.exports=tN});var Ph=a((YW,_h)=>{"use strict";var nN=kh();_h.exports=nN});var Ah=a((JW,Rh)=>{"use strict";var iN=Ph();Rh.exports=iN});var Mh=a((QW,Nh)=>{"use strict";Nh.exports=Ah()});var ii=a((XW,jh)=>{jh.exports=Mh()});var Lh=a((ZW,$h)=>{"use strict";var aN=W(),oN=N(),uN=It(),sN=Gn(),cN=X(),lN=oN([].concat);$h.exports=aN("Reflect","ownKeys")||function(r){var t=uN.f(cN(r)),n=sN.f;return n?lN(t,n(r)):t}});var Bh=a((eH,Dh)=>{"use strict";var Fh=H(),fN=Lh(),pN=pt(),vN=te();Dh.exports=function(e,r,t){for(var n=fN(r),i=vN.f,o=pN.f,u=0;u<n.length;u++){var s=n[u];!Fh(e,s)&&!(t&&Fh(t,s))&&i(e,s,o(r,s))}}});var Uh=a((rH,Gh)=>{"use strict";var dN=L(),hN=Se();Gh.exports=function(e,r){dN(r)&&"cause"in r&&hN(e,"cause",r.cause)}});var zh=a((tH,Kh)=>{"use strict";var mN=N(),Wh=Error,yN=mN("".replace),bN=function(e){return String(new Wh(e).stack)}("zxcasd"),Hh=/\n\s*at [^:]*:[^\n]*/,gN=Hh.test(bN);Kh.exports=function(e,r){if(gN&&typeof e=="string"&&!Wh.prepareStackTrace)for(;r--;)e=yN(e,Hh,"");return e}});var Yh=a((nH,Vh)=>{"use strict";var qN=_(),xN=Ke();Vh.exports=!qN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",xN(1,7)),e.stack!==7):!0})});var Xh=a((iH,Qh)=>{"use strict";var SN=Se(),wN=zh(),TN=Yh(),Jh=Error.captureStackTrace;Qh.exports=function(e,r,t,n){TN&&(Jh?Jh(e,r):SN(e,"stack",wN(t,n)))}});var pe=a((aH,tm)=>{"use strict";var CN=Y(),ON=B(),EN=X(),IN=ze(),kN=Xa(),_N=le(),Zh=G(),PN=Fn(),RN=Ct(),em=Qa(),AN=TypeError,ai=function(e,r){this.stopped=e,this.result=r},rm=ai.prototype;tm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=CN(r,n),l,f,p,v,d,m,h,x=function(g){return l&&em(l,"normal"),new ai(!0,g)},y=function(g){return i?(EN(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=RN(e),!f)throw new AN(IN(e)+" is not iterable");if(kN(f)){for(p=0,v=_N(e);v>p;p++)if(d=y(e[p]),d&&Zh(rm,d))return d;return new ai(!1)}l=PN(e,f)}for(m=o?e.next:l.next;!(h=ON(m,l)).done;){try{d=y(h.value)}catch(g){em(l,"throw",g)}if(typeof d=="object"&&d&&Zh(rm,d))return d}return new ai(!1)}});var im=a((oH,nm)=>{"use strict";var NN=Ve();nm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:NN(e)}});var om=a(()=>{"use strict";var MN=q(),jN=G(),$N=xt(),oi=St(),LN=Bh(),am=Je(),Do=Se(),Bo=Ke(),FN=Uh(),DN=Xh(),BN=pe(),GN=im(),UN=R(),WN=UN("toStringTag"),ui=Error,HN=[].push,Vr=function(r,t){var n=jN(Go,this),i;oi?i=oi(new ui,n?$N(this):Go):(i=n?this:am(Go),Do(i,WN,"Error")),t!==void 0&&Do(i,"message",GN(t)),DN(i,Vr,i.stack,1),arguments.length>2&&FN(i,arguments[2]);var o=[];return BN(r,HN,{that:o}),Do(i,"errors",o),i};oi?oi(Vr,ui):LN(Vr,ui,{name:!0});var Go=Vr.prototype=am(ui.prototype,{constructor:Bo(1,Vr),message:Bo(1,""),name:Bo(1,"AggregateError")});MN({global:!0,constructor:!0,arity:2},{AggregateError:Vr})});var Uo=a(()=>{"use strict";om()});var Wo=a((fH,um)=>{"use strict";var Nt=P(),KN=Ar(),zN=xe(),si=function(e){return KN.slice(0,e.length)===e};um.exports=function(){return si("Bun/")?"BUN":si("Cloudflare-Workers")?"CLOUDFLARE":si("Deno/")?"DENO":si("Node.js/")?"NODE":Nt.Bun&&typeof Bun.version=="string"?"BUN":Nt.Deno&&typeof Deno.version=="object"?"DENO":zN(Nt.process)==="process"?"NODE":Nt.window&&Nt.document?"BROWSER":"REST"}()});var Mt=a((pH,sm)=>{"use strict";var VN=Wo();sm.exports=VN==="NODE"});var Ho=a((vH,lm)=>{"use strict";var YN=W(),JN=Un(),QN=R(),XN=U(),cm=QN("species");lm.exports=function(e){var r=YN(e);XN&&r&&!r[cm]&&JN(r,cm,{configurable:!0,get:function(){return this}})}});var ci=a((dH,fm)=>{"use strict";var ZN=G(),e2=TypeError;fm.exports=function(e,r){if(ZN(r,e))return e;throw new e2("Incorrect invocation")}});var Ko=a((hH,pm)=>{"use strict";var r2=yt(),t2=ze(),n2=TypeError;pm.exports=function(e){if(r2(e))return e;throw new n2(t2(e)+" is not a constructor")}});var zo=a((mH,dm)=>{"use strict";var vm=X(),i2=Ko(),a2=ar(),o2=R(),u2=o2("species");dm.exports=function(e,r){var t=vm(e).constructor,n;return t===void 0||a2(n=vm(t)[u2])?r:i2(n)}});var mm=a((yH,hm)=>{"use strict";var s2=TypeError;hm.exports=function(e,r){if(e<r)throw new s2("Not enough arguments");return e}});var Vo=a((bH,ym)=>{"use strict";var c2=Ar();ym.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(c2)});var nu=a((gH,Om)=>{"use strict";var ue=P(),l2=Rr(),f2=Y(),bm=M(),p2=H(),Cm=_(),gm=Da(),v2=cr(),qm=Tn(),d2=mm(),h2=Vo(),m2=Mt(),eu=ue.setImmediate,ru=ue.clearImmediate,y2=ue.process,Yo=ue.Dispatch,b2=ue.Function,xm=ue.MessageChannel,g2=ue.String,Jo=0,jt={},Sm="onreadystatechange",$t,br,Qo,Xo;Cm(function(){$t=ue.location});var tu=function(e){if(p2(jt,e)){var r=jt[e];delete jt[e],r()}},Zo=function(e){return function(){tu(e)}},wm=function(e){tu(e.data)},Tm=function(e){ue.postMessage(g2(e),$t.protocol+"//"+$t.host)};(!eu||!ru)&&(eu=function(r){d2(arguments.length,1);var t=bm(r)?r:b2(r),n=v2(arguments,1);return jt[++Jo]=function(){l2(t,void 0,n)},br(Jo),Jo},ru=function(r){delete jt[r]},m2?br=function(e){y2.nextTick(Zo(e))}:Yo&&Yo.now?br=function(e){Yo.now(Zo(e))}:xm&&!h2?(Qo=new xm,Xo=Qo.port2,Qo.port1.onmessage=wm,br=f2(Xo.postMessage,Xo)):ue.addEventListener&&bm(ue.postMessage)&&!ue.importScripts&&$t&&$t.protocol!=="file:"&&!Cm(Tm)?(br=Tm,ue.addEventListener("message",wm,!1)):Sm in qm("script")?br=function(e){gm.appendChild(qm("script"))[Sm]=function(){gm.removeChild(this),tu(e)}}:br=function(e){setTimeout(Zo(e),0)});Om.exports={set:eu,clear:ru}});var km=a((qH,Im)=>{"use strict";var Em=P(),q2=U(),x2=Object.getOwnPropertyDescriptor;Im.exports=function(e){if(!q2)return Em[e];var r=x2(Em,e);return r&&r.value}});var iu=a((xH,Pm)=>{"use strict";var _m=function(){this.head=null,this.tail=null};_m.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Pm.exports=_m});var Am=a((SH,Rm)=>{"use strict";var S2=Ar();Rm.exports=/ipad|iphone|ipod/i.test(S2)&&typeof Pebble<"u"});var Mm=a((wH,Nm)=>{"use strict";var w2=Ar();Nm.exports=/web0s(?!.*chrome)/i.test(w2)});var Gm=a((TH,Bm)=>{"use strict";var Jr=P(),T2=km(),jm=Y(),au=nu().set,C2=iu(),O2=Vo(),E2=Am(),I2=Mm(),ou=Mt(),$m=Jr.MutationObserver||Jr.WebKitMutationObserver,Lm=Jr.document,Fm=Jr.process,li=Jr.Promise,cu=T2("queueMicrotask"),Yr,uu,su,fi,Dm;cu||(Lt=new C2,Ft=function(){var e,r;for(ou&&(e=Fm.domain)&&e.exit();r=Lt.get();)try{r()}catch(t){throw Lt.head&&Yr(),t}e&&e.enter()},!O2&&!ou&&!I2&&$m&&Lm?(uu=!0,su=Lm.createTextNode(""),new $m(Ft).observe(su,{characterData:!0}),Yr=function(){su.data=uu=!uu}):!E2&&li&&li.resolve?(fi=li.resolve(void 0),fi.constructor=li,Dm=jm(fi.then,fi),Yr=function(){Dm(Ft)}):ou?Yr=function(){Fm.nextTick(Ft)}:(au=jm(au,Jr),Yr=function(){au(Ft)}),cu=function(e){Lt.head||Yr(),Lt.add(e)});var Lt,Ft;Bm.exports=cu});var Wm=a((CH,Um)=>{"use strict";Um.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=a((OH,Hm)=>{"use strict";Hm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=a((EH,Km)=>{"use strict";var k2=P();Km.exports=k2.Promise});var Qr=a((IH,Jm)=>{"use strict";var _2=P(),Dt=qr(),P2=M(),R2=ma(),A2=wa(),N2=R(),zm=Wo(),M2=Z(),lu=Nr(),Vm=Dt&&Dt.prototype,j2=N2("species"),fu=!1,Ym=P2(_2.PromiseRejectionEvent),$2=R2("Promise",function(){var e=A2(Dt),r=e!==String(Dt);if(!r&&lu===66||M2&&!(Vm.catch&&Vm.finally))return!0;if(!lu||lu<51||!/native code/.test(e)){var t=new Dt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[j2]=n,fu=t.then(function(){})instanceof n,!fu)return!0}return!r&&(zm==="BROWSER"||zm==="DENO")&&!Ym});Jm.exports={CONSTRUCTOR:$2,REJECTION_EVENT:Ym,SUBCLASSING:fu}});var Te=a((kH,Xm)=>{"use strict";var Qm=D(),L2=TypeError,F2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new L2("Bad Promise constructor");r=n,t=i}),this.resolve=Qm(r),this.reject=Qm(t)};Xm.exports.f=function(e){return new F2(e)}});var by=a(()=>{"use strict";var D2=q(),B2=Z(),hi=Mt(),Ze=P(),G2=V(),rt=B(),Zm=Re(),ey=St(),U2=Ne(),W2=Ho(),H2=D(),di=M(),K2=L(),z2=ci(),V2=zo(),ay=nu().set,mu=Gm(),Y2=Wm(),J2=gr(),Q2=iu(),oy=Ye(),mi=qr(),yu=Qr(),uy=Te(),yi="Promise",sy=yu.CONSTRUCTOR,X2=yu.REJECTION_EVENT,Z2=yu.SUBCLASSING,pu=oy.getterFor(yi),eM=oy.set,Xr=mi&&mi.prototype,xr=mi,pi=Xr,cy=Ze.TypeError,vu=Ze.document,bu=Ze.process,du=uy.f,rM=du,tM=!!(vu&&vu.createEvent&&Ze.dispatchEvent),ly="unhandledrejection",nM="rejectionhandled",ry=0,fy=1,iM=2,gu=1,py=2,vi,ty,vy,ny,dy=function(e){var r;return K2(e)&&di(r=e.then)?r:!1},hy=function(e,r){var t=r.value,n=r.state===fy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{i?(n||(r.rejection===py&&oM(r),r.rejection=gu),i===!0?c=t:(s&&s.enter(),c=i(t),s&&(s.exit(),f=!0)),c===e.promise?u(new cy("Promise-chain cycle")):(l=dy(c))?rt(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},my=function(e,r){e.notified||(e.notified=!0,mu(function(){for(var t=e.reactions,n;n=t.get();)hy(n,e);e.notified=!1,r&&!e.rejection&&aM(e)}))},yy=function(e,r,t){var n,i;tM?(n=vu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!X2&&(i=Ze["on"+e])?i(n):e===ly&&Y2("Unhandled promise rejection",t)},aM=function(e){rt(ay,Ze,function(){var r=e.facade,t=e.value,n=iy(e),i;if(n&&(i=J2(function(){hi?bu.emit("unhandledRejection",t,r):yy(ly,r,t)}),e.rejection=hi||iy(e)?py:gu,i.error))throw i.value})},iy=function(e){return e.rejection!==gu&&!e.parent},oM=function(e){rt(ay,Ze,function(){var r=e.facade;hi?bu.emit("rejectionHandled",r):yy(nM,r,e.value)})},Zr=function(e,r,t){return function(n){e(r,n,t)}},et=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=iM,my(e,!0))},hu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new cy("Promise can't be resolved itself");var n=dy(r);n?mu(function(){var i={done:!1};try{rt(n,r,Zr(hu,i,e),Zr(et,i,e))}catch(o){et(i,o,e)}}):(e.value=r,e.state=fy,my(e,!1))}catch(i){et({done:!1},i,e)}}};if(sy&&(xr=function(r){z2(this,pi),H2(r),rt(vi,this);var t=pu(this);try{r(Zr(hu,t),Zr(et,t))}catch(n){et(t,n)}},pi=xr.prototype,vi=function(r){eM(this,{type:yi,done:!1,notified:!1,parent:!1,reactions:new Q2,rejection:!1,state:ry,value:null})},vi.prototype=Zm(pi,"then",function(r,t){var n=pu(this),i=du(V2(this,xr));return n.parent=!0,i.ok=di(r)?r:!0,i.fail=di(t)&&t,i.domain=hi?bu.domain:void 0,n.state===ry?n.reactions.add(i):mu(function(){hy(i,n)}),i.promise}),ty=function(){var e=new vi,r=pu(e);this.promise=e,this.resolve=Zr(hu,r),this.reject=Zr(et,r)},uy.f=du=function(e){return e===xr||e===vy?new ty(e):rM(e)},!B2&&di(mi)&&Xr!==Object.prototype)){ny=Xr.then,Z2||Zm(Xr,"then",function(r,t){var n=this;return new xr(function(i,o){rt(ny,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Xr.constructor}catch{}ey&&ey(Xr,pi)}D2({global:!0,constructor:!0,wrap:!0,forced:sy},{Promise:xr});vy=G2.Promise;U2(xr,yi,!1,!0);W2(yi)});var Bt=a((RH,gy)=>{"use strict";var uM=qr(),sM=eo(),cM=Qr().CONSTRUCTOR;gy.exports=cM||!sM(function(e){uM.all(e).then(void 0,function(){})})});var qy=a(()=>{"use strict";var lM=q(),fM=B(),pM=D(),vM=Te(),dM=gr(),hM=pe(),mM=Bt();lM({target:"Promise",stat:!0,forced:mM},{all:function(r){var t=this,n=vM.f(t),i=n.resolve,o=n.reject,u=dM(function(){var s=pM(t.resolve),c=[],l=0,f=1;hM(r,function(p){var v=l++,d=!1;f++,fM(s,t,p).then(function(m){d||(d=!0,c[v]=m,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Sy=a(()=>{"use strict";var yM=q(),bM=Z(),gM=Qr().CONSTRUCTOR,xu=qr(),qM=W(),xM=M(),SM=Re(),xy=xu&&xu.prototype;yM({target:"Promise",proto:!0,forced:gM,real:!0},{catch:function(e){return this.then(void 0,e)}});!bM&&xM(xu)&&(qu=qM("Promise").prototype.catch,xy.catch!==qu&&SM(xy,"catch",qu,{unsafe:!0}));var qu});var wy=a(()=>{"use strict";var wM=q(),TM=B(),CM=D(),OM=Te(),EM=gr(),IM=pe(),kM=Bt();wM({target:"Promise",stat:!0,forced:kM},{race:function(r){var t=this,n=OM.f(t),i=n.reject,o=EM(function(){var u=CM(t.resolve);IM(r,function(s){TM(u,t,s).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Ty=a(()=>{"use strict";var _M=q(),PM=Te(),RM=Qr().CONSTRUCTOR;_M({target:"Promise",stat:!0,forced:RM},{reject:function(r){var t=PM.f(this),n=t.reject;return n(r),t.promise}})});var Su=a((BH,Cy)=>{"use strict";var AM=X(),NM=L(),MM=Te();Cy.exports=function(e,r){if(AM(e),NM(r)&&r.constructor===e)return r;var t=MM.f(e),n=t.resolve;return n(r),t.promise}});var Iy=a(()=>{"use strict";var jM=q(),$M=W(),Oy=Z(),LM=qr(),Ey=Qr().CONSTRUCTOR,FM=Su(),DM=$M("Promise"),BM=Oy&&!Ey;jM({target:"Promise",stat:!0,forced:Oy||Ey},{resolve:function(r){return FM(BM&&this===DM?LM:this,r)}})});var ky=a(()=>{"use strict";by();qy();Sy();wy();Ty();Iy()});var wu=a(()=>{"use strict";var GM=q(),UM=B(),WM=D(),HM=Te(),KM=gr(),zM=pe(),VM=Bt();GM({target:"Promise",stat:!0,forced:VM},{allSettled:function(r){var t=this,n=HM.f(t),i=n.resolve,o=n.reject,u=KM(function(){var s=WM(t.resolve),c=[],l=0,f=1;zM(r,function(p){var v=l++,d=!1;f++,UM(s,t,p).then(function(m){d||(d=!0,c[v]={status:"fulfilled",value:m},--f||i(c))},function(m){d||(d=!0,c[v]={status:"rejected",reason:m},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Tu=a(()=>{"use strict";var YM=q(),JM=B(),QM=D(),XM=W(),ZM=Te(),ej=gr(),rj=pe(),tj=Bt(),_y="No one promise resolved";YM({target:"Promise",stat:!0,forced:tj},{any:function(r){var t=this,n=XM("AggregateError"),i=ZM.f(t),o=i.resolve,u=i.reject,s=ej(function(){var c=QM(t.resolve),l=[],f=0,p=1,v=!1;rj(r,function(d){var m=f++,h=!1;p++,JM(c,t,d).then(function(x){h||v||(v=!0,o(x))},function(x){h||v||(h=!0,l[m]=x,--p||u(new n(l,_y)))})}),--p||u(new n(l,_y))});return s.error&&u(s.value),i.promise}})});var Ou=a(()=>{"use strict";var nj=q(),ij=P(),aj=Rr(),oj=cr(),uj=Te(),sj=D(),Ry=gr(),Cu=ij.Promise,Py=!1,cj=!Cu||!Cu.try||Ry(function(){Cu.try(function(e){Py=e===8},8)}).error||!Py;nj({target:"Promise",stat:!0,forced:cj},{try:function(e){var r=arguments.length>1?oj(arguments,1):[],t=uj.f(this),n=Ry(function(){return aj(sj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Eu=a(()=>{"use strict";var lj=q(),fj=Te();lj({target:"Promise",stat:!0},{withResolvers:function(){var r=fj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var jy=a(()=>{"use strict";var pj=q(),vj=Z(),bi=qr(),dj=_(),Ny=W(),My=M(),hj=zo(),Ay=Su(),mj=Re(),ku=bi&&bi.prototype,yj=!!bi&&dj(function(){ku.finally.call({then:function(){}},function(){})});pj({target:"Promise",proto:!0,real:!0,forced:yj},{finally:function(e){var r=hj(this,Ny("Promise")),t=My(e);return this.then(t?function(n){return Ay(r,e()).then(function(){return n})}:e,t?function(n){return Ay(r,e()).then(function(){throw n})}:e)}});!vj&&My(bi)&&(Iu=Ny("Promise").prototype.finally,ku.finally!==Iu&&mj(ku,"finally",Iu,{unsafe:!0}));var Iu});var Ly=a((tK,$y)=>{"use strict";Uo();mr();Et();ky();wu();Tu();Ou();Eu();jy();pr();var bj=V();$y.exports=bj.Promise});var Dy=a((nK,Fy)=>{"use strict";var gj=Ly();yr();Fy.exports=gj});var By=a(()=>{"use strict";Ou()});var Gy=a(()=>{"use strict";Eu()});var Wy=a((sK,Uy)=>{"use strict";var qj=Dy();By();Gy();Uy.exports=qj});var Hy=a(()=>{"use strict";Uo()});var Ky=a(()=>{"use strict";wu()});var zy=a(()=>{"use strict";Tu()});var Yy=a((hK,Vy)=>{"use strict";var xj=Wy();Hy();Ky();zy();Vy.exports=xj});var tt=a((mK,Jy)=>{"use strict";Jy.exports=Yy()});var Zy=a((xK,Xy)=>{"use strict";Io();var Sj=Wr();Xy.exports=Sj.f("asyncIterator")});var rb=a((SK,eb)=>{"use strict";var wj=Zy();eb.exports=wj});var nb=a((wK,tb)=>{"use strict";var Tj=rb();tb.exports=Tj});var ab=a((TK,ib)=>{"use strict";var Cj=nb();ib.exports=Cj});var gi=a((CK,ob)=>{"use strict";ob.exports=ab()});var lb=a(()=>{"use strict";var Oj=q(),Ej=_(),Ij=re(),cb=xt(),kj=Wa(),_j=Ej(function(){cb(1)});Oj({target:"Object",stat:!0,forced:_j,sham:!kj},{getPrototypeOf:function(r){return cb(Ij(r))}})});var pb=a((_K,fb)=>{"use strict";lb();var Pj=V();fb.exports=Pj.Object.getPrototypeOf});var db=a((PK,vb)=>{"use strict";var Rj=pb();vb.exports=Rj});var mb=a((RK,hb)=>{"use strict";var Aj=db();hb.exports=Aj});var bb=a((AK,yb)=>{"use strict";var Nj=mb();yb.exports=Nj});var qi=a((NK,gb)=>{"use strict";gb.exports=bb()});var xb=a(()=>{"use strict";var Mj=q(),jj=N(),$j=Pe(),Lj=jj([].reverse),qb=[1,2];Mj({target:"Array",proto:!0,forced:String(qb)===String(qb.reverse())},{reverse:function(){return $j(this)&&(this.length=this.length),Lj(this)}})});var wb=a(($K,Sb)=>{"use strict";xb();var Fj=oe();Sb.exports=Fj("Array","reverse")});var Cb=a((LK,Tb)=>{"use strict";var Dj=G(),Bj=wb(),Ru=Array.prototype;Tb.exports=function(e){var r=e.reverse;return e===Ru||Dj(Ru,e)&&r===Ru.reverse?Bj:r}});var Eb=a((FK,Ob)=>{"use strict";var Gj=Cb();Ob.exports=Gj});var kb=a((DK,Ib)=>{"use strict";var Uj=Eb();Ib.exports=Uj});var Pb=a((BK,_b)=>{"use strict";var Wj=kb();_b.exports=Wj});var Ab=a((GK,Rb)=>{"use strict";Rb.exports=Pb()});var Au=a((UK,Wt)=>{function Hj(e,r){this.v=e,this.k=r}Wt.exports=Hj,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Nb=a(()=>{"use strict";var Kj=q(),zj=U(),Vj=Je();Kj({target:"Object",stat:!0,sham:!zj},{create:Vj})});var jb=a((KK,Mb)=>{"use strict";Nb();var Yj=V(),Jj=Yj.Object;Mb.exports=function(r,t){return Jj.create(r,t)}});var Lb=a((zK,$b)=>{"use strict";var Qj=jb();$b.exports=Qj});var Db=a((VK,Fb)=>{"use strict";var Xj=Lb();Fb.exports=Xj});var Gb=a((YK,Bb)=>{"use strict";var Zj=Db();Bb.exports=Zj});var xi=a((JK,Ub)=>{"use strict";Ub.exports=Gb()});var Mu=a((QK,zb)=>{"use strict";var Hb=N(),e$=D(),r$=L(),t$=H(),Wb=cr(),n$=Pr(),Kb=Function,i$=Hb([].concat),a$=Hb([].join),Nu={},o$=function(e,r,t){if(!t$(Nu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Nu[r]=Kb("C,a","return new C("+a$(n,",")+")")}return Nu[r](e,t)};zb.exports=n$?Kb.bind:function(r){var t=e$(this),n=t.prototype,i=Wb(arguments,1),o=function(){var s=i$(i,Wb(arguments));return this instanceof o?o$(t,s.length,s):t.apply(r,s)};return r$(n)&&(o.prototype=n),o}});var Yb=a(()=>{"use strict";var u$=q(),Vb=Mu();u$({target:"Function",proto:!0,forced:Function.bind!==Vb},{bind:Vb})});var Qb=a((ez,Jb)=>{"use strict";Yb();var s$=oe();Jb.exports=s$("Function","bind")});var Zb=a((rz,Xb)=>{"use strict";var c$=G(),l$=Qb(),ju=Function.prototype;Xb.exports=function(e){var r=e.bind;return e===ju||c$(ju,e)&&r===ju.bind?l$:r}});var rg=a((tz,eg)=>{"use strict";var f$=Zb();eg.exports=f$});var ng=a((nz,tg)=>{"use strict";var p$=rg();tg.exports=p$});var ag=a((iz,ig)=>{"use strict";var v$=ng();ig.exports=v$});var Ht=a((az,og)=>{"use strict";og.exports=ag()});var ug=a(()=>{"use strict";var d$=q(),h$=St();d$({target:"Object",stat:!0},{setPrototypeOf:h$})});var cg=a((sz,sg)=>{"use strict";ug();var m$=V();sg.exports=m$.Object.setPrototypeOf});var fg=a((cz,lg)=>{"use strict";var y$=cg();lg.exports=y$});var vg=a((lz,pg)=>{"use strict";var b$=fg();pg.exports=b$});var hg=a((fz,dg)=>{"use strict";var g$=vg();dg.exports=g$});var Si=a((pz,mg)=>{"use strict";mg.exports=hg()});var bg=a(()=>{"use strict";var q$=q(),x$=U(),yg=te().f;q$({target:"Object",stat:!0,forced:Object.defineProperty!==yg,sham:!x$},{defineProperty:yg})});var xg=a((hz,qg)=>{"use strict";bg();var S$=V(),gg=S$.Object,w$=qg.exports=function(r,t,n){return gg.defineProperty(r,t,n)};gg.defineProperty.sham&&(w$.sham=!0)});var wg=a((mz,Sg)=>{"use strict";var T$=xg();Sg.exports=T$});var Cg=a((yz,Tg)=>{"use strict";var C$=wg();Tg.exports=C$});var Eg=a((bz,Og)=>{"use strict";var O$=Cg();Og.exports=O$});var Kt=a((gz,Ig)=>{"use strict";Ig.exports=Eg()});var $u=a((qz,je)=>{var E$=Kt();function wi(e,r,t,n){var i=E$;try{i({},"",{})}catch{i=0}je.exports=wi=function(u,s,c,l){function f(p,v){wi(u,p,function(d){return this._invoke(p,v,d)})}s?i?i(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,wi(e,r,t,n)}je.exports=wi,je.exports.__esModule=!0,je.exports.default=je.exports});var Fu=a((xz,$e)=>{var kg=we(),Lu=xi(),I$=Ht(),k$=qi(),_g=Si(),Oe=$u();function Pg(){var e,r,t=typeof kg=="function"?kg:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,x){var y=m&&m.prototype instanceof s?m:s,g=Lu(y.prototype);return Oe(g,"_invoke",function(E,I,S){var T,w,O,$=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:I$(qe).call(qe,e,4),d:function(F,de){return T=F,w=0,O=e,ee.n=de,u}};function qe(Q,F){for(w=Q,O=F,r=0;!k&&$&&!de&&r<ge.length;r++){var de,C=ge[r],kr=ee.p,He=C[2];Q>3?(de=He===F)&&(O=C[(w=C[4])?5:(w=3,3)],C[4]=C[5]=e):C[0]<=kr&&((de=Q<2&&kr<C[1])?(w=0,ee.v=F,ee.n=C[1]):kr<He&&(de=Q<3||C[0]>F||F>He)&&(C[4]=Q,C[5]=F,ee.n=He,w=0))}if(de||Q>1)return u;throw k=!0,F}return function(Q,F,de){if($>1)throw TypeError("Generator is already running");for(k&&F===1&&qe(F,de),w=F,O=de;(r=w<2?e:O)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,O)):ee.n=O:ee.v=O);try{if($=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(O=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?O:E.call(I,ee))!==u)break}catch(C){T=e,w=1,O=C}finally{$=1}}return{value:r,done:k}}}(d,h,x),!0),g}var u={};function s(){}function c(){}function l(){}r=k$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Lu(f);function v(d){return _g?_g(d,l):(d.__proto__=l,Oe(d,i,"GeneratorFunction")),d.prototype=Lu(p),d}return c.prototype=l,Oe(p,"constructor",l),Oe(l,"constructor",c),c.displayName="GeneratorFunction",Oe(l,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),($e.exports=Pg=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Pg,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Gu=a((Sz,zt)=>{var _$=we(),P$=gi(),R$=Au(),Du=$u();function Bu(e,r){function t(i,o,u,s){try{var c=e[i](o),l=c.value;return l instanceof R$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Du(Bu.prototype),Du(Bu.prototype,typeof _$=="function"&&P$||"@asyncIterator",function(){return this})),Du(this,"_invoke",function(i,o,u){function s(){return new r(function(c,l){t(i,u,c,l)})}return n=n?n.then(s,s):s()},!0)}zt.exports=Bu,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Uu=a((wz,Vt)=>{var A$=tt(),N$=Fu(),M$=Gu();function j$(e,r,t,n,i){return new M$(N$().w(e,r,t,n),i||A$)}Vt.exports=j$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Rg=a((Tz,Yt)=>{var $$=Uu();function L$(e,r,t,n,i){var o=$$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Yt.exports=L$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Mg=a((Cz,Ng)=>{"use strict";var Ag=ze(),F$=TypeError;Ng.exports=function(e,r){if(!delete e[r])throw new F$("Cannot delete property "+Ag(r)+" of "+Ag(e))}});var jg=a(()=>{"use strict";var D$=q(),B$=re(),G$=le(),U$=Br(),W$=Mg(),H$=Ot(),K$=[].unshift(0)!==1,z$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},V$=K$||!z$();D$({target:"Array",proto:!0,arity:1,forced:V$},{unshift:function(r){var t=B$(this),n=G$(t),i=arguments.length;if(i){H$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:W$(t,u)}for(var s=0;s<i;s++)t[s]=arguments[s]}return U$(t,n+i)}})});var Lg=a((Iz,$g)=>{"use strict";jg();var Y$=oe();$g.exports=Y$("Array","unshift")});var Dg=a((kz,Fg)=>{"use strict";var J$=G(),Q$=Lg(),Wu=Array.prototype;Fg.exports=function(e){var r=e.unshift;return e===Wu||J$(Wu,e)&&r===Wu.unshift?Q$:r}});var Gg=a((_z,Bg)=>{"use strict";var X$=Dg();Bg.exports=X$});var Wg=a((Pz,Ug)=>{"use strict";var Z$=Gg();Ug.exports=Z$});var Kg=a((Rz,Hg)=>{"use strict";var eL=Wg();Hg.exports=eL});var Vg=a((Az,zg)=>{"use strict";zg.exports=Kg()});var Yg=a((Nz,Jt)=>{var rL=Vg();function tL(e){var r=Object(e),t=[];for(var n in r)rL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Jt.exports=tL,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Qg=a((Mz,Jg)=>{"use strict";mr();Et();pr();_o();var nL=Wr();Jg.exports=nL.f("iterator")});var Zg=a((jz,Xg)=>{"use strict";var iL=Qg();yr();Xg.exports=iL});var rq=a(($z,eq)=>{"use strict";var aL=Zg();eq.exports=aL});var nq=a((Lz,tq)=>{"use strict";var oL=rq();tq.exports=oL});var Qt=a((Fz,iq)=>{"use strict";iq.exports=nq()});var aq=a((Dz,Le)=>{var Ti=we(),uL=Qt();function Hu(e){"@babel/helpers - typeof";return Le.exports=Hu=typeof Ti=="function"&&typeof uL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ti=="function"&&r.constructor===Ti&&r!==Ti.prototype?"symbol":typeof r},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Hu(e)}Le.exports=Hu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var oq=a((Bz,Xt)=>{var sL=aq().default,cL=we(),lL=Qt();function fL(e){if(e!=null){var r=e[typeof cL=="function"&&lL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(sL(e)+" is not iterable")}Xt.exports=fL,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var cq=a((Gz,Fe)=>{var uq=qi(),pL=Ab(),vL=Au(),dL=Fu(),hL=Rg(),mL=Uu(),yL=Gu(),bL=Yg(),sq=oq();function Ku(){"use strict";var e=dL(),r=e.m(Ku),t=(uq?uq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,i[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,sq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Fe.exports=Ku=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&pL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new vL(c,l)},AsyncIterator:yL,async:function(c,l,f,p,v){return(n(l)?mL:hL)(o(c),l,f,p,v)},keys:bL,values:sq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Ku,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var se=a((Uz,lq)=>{var Ci=cq()();lq.exports=Ci;try{regeneratorRuntime=Ci}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ci:Function("r","regeneratorRuntime = r")(Ci)}});var zu=a((Ei,pq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});var Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(i=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ei.default=gL;function gL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(s,c,l){return s[l]={name:c,value:i[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var s=u.attribs.class;s&&i.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=qL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,i),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function qL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=fq(i,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(c):Zt(S,T,c)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),x=fq(h,2),y=x[0],g=x[1];c=function(S){var T=Object.keys(S.attribs).indexOf(y)>-1;return!!(T&&(!g||S.attribs[y]===g))},l=function(S,T){if(n){var w=function(){var O=[];return rr([S],function($){c($)&&O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;case/^#/.test(u):var E=u.substr(1);c=function(S){return S.attribs.id===E},l=function(S,T){if(n){var w=function(){var O=[];return rr([S],function($,ge){c($)&&(O.push($),ge())}),{v:O}}();if((typeof w>"u"?"undefined":Oi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},l=function(S,T){if(n){var w=function(){var O=[];return rr([S],function($){return O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;default:c=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var O=[];return rr([S],function($){c($)&&O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(h){if(h){var x=h.parent.childTags;p==="type"&&(x=x.filter(c));var y=x.findIndex(function(g){return g===h});if(y===v)return!0}return!1};return function(h){var x=l(h);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function Zt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}pq.exports=Ei.default});var ki=a(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.convertNodeList=xL;Ii.escapeValue=SL;function xL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function SL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Sq=a((_i,xq)=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.default=wL;var mq=ki(),vq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function wL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),h=function(g){return o&&m.some(function(E){return E(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,mq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(E,I){return g.test(I)})}),d&&function(){var y=l.attribute;l.attribute=function(g,E,I){return l.class(E)||y&&y(g,E,I)}}();p!==n;){if(h(p)!==!0){if(dq(s,p,l,f,n)||hq(p,l,f,n))break;dq(s,p,l,f),f.length===v&&hq(p,l,f),f.length===v&&TL(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=gq(s,p,l);f.unshift(x)}return f.join(" ")}function dq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=yq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function yq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,x){var y=e.indexOf(n[h].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=i.length;o<u;o++){var s=i[o],c=n[s],l=c.name,f=(0,mq.escapeValue)(c.value),p=t[l]||t.attribute,v=vq[l]||vq.attribute;if(!qq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function hq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=bq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function bq(e,r){var t=e.tagName.toLowerCase();return qq(r.tag,null,t)?null:t}function TL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=gq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function gq(e,r,t){var n=yq(e,r,t);return n||(n=bq(r,t)),n}function qq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}xq.exports=_i.default});var Vu=a((Ri,wq)=>{"use strict";Object.defineProperty(Ri,"__esModule",{value:!0});Ri.default=kL;var CL=zu(),OL=IL(CL),EL=ki();function IL(e){return e&&e.__esModule?e:{default:e}}function kL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,EL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,OL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Pi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),s=i.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Pi(s,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Pi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Pi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Pi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(nt(u,n))r=i;else for(var s=document.querySelectorAll(""+e+i),c=function(){var I=s[l];if(n.some(function(T){return I.contains(T)})){var S=I.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),nt(u,n)&&(r=S),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);nt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);nt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(E){return"."+E}).sort(function(E,I){return E.length-I.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);nt(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var I=x[l];if(n.some(function(T){return I.contains(T)})){var S=I.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),nt(u,n)&&(r=S),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function nt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}wq.exports=Ri.default});var Yu=a(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.getCommonAncestor=_L;Ai.getCommonProperties=PL;function _L(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,s=function(){var v=o[c],d=i.some(function(m){return!m.some(function(h){return h===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function PL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var m=c[d],h=m.name;return m&&h!=="class"&&(v[h]=m.value),v},{}),f=Object.keys(l),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var m=i[d];return m===l[d]&&(v[d]=m),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var kq=a(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});var RL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};en.getSingleSelector=Qu;en.getMultiSelector=Iq;en.default=LL;var AL=zu(),Cq=Ju(AL),NL=Sq(),ML=Ju(NL),jL=Vu(),Oq=Ju(jL),Tq=ki(),Eq=Yu();function Ju(e){return e&&e.__esModule?e:{default:e}}function Qu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":RL(e))+'")');var t=(0,Cq.default)(e,r),n=(0,ML.default)(e,r),i=(0,Oq.default)(n,e,r);return t&&delete global.document,i}function Iq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Tq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Cq.default)(e[0],r),n=(0,Eq.getCommonAncestor)(e,r),i=Qu(n,r),o=$L(e),u=o[0],s=(0,Oq.default)(i+" "+u,e,r),c=(0,Tq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function $L(e){var r=(0,Eq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function LL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Iq(e,r):Qu(e,r)}});var Rq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Xu=kq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Xu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Xu.getMultiSelector}});var _q=Pq(Xu),FL=Vu(),DL=Pq(FL),BL=Yu(),GL=UL(BL);function UL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Pq(e){return e&&e.__esModule?e:{default:e}}ie.select=_q.default;ie.optimize=DL.default;ie.common=GL;ie.default=_q.default});var Aq=a(()=>{"use strict";var ZL=q(),eF=Pe();ZL({target:"Array",stat:!0},{isArray:eF})});var Mq=a((o7,Nq)=>{"use strict";Aq();var rF=V();Nq.exports=rF.Array.isArray});var $q=a((u7,jq)=>{"use strict";var tF=Mq();jq.exports=tF});var Fq=a((s7,Lq)=>{"use strict";var nF=$q();Lq.exports=nF});var Bq=a((c7,Dq)=>{"use strict";var iF=Fq();Dq.exports=iF});var Uq=a((l7,Gq)=>{"use strict";Gq.exports=Bq()});var Kq=a(()=>{"use strict";var aF=q(),oF=re(),uF=le(),sF=Br(),cF=Ot(),lF=_(),fF=lF(function(){return[].push.call({length:4294967296},1)!==4294967297}),pF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},vF=fF||!pF();aF({target:"Array",proto:!0,arity:1,forced:vF},{push:function(r){var t=oF(this),n=uF(t),i=arguments.length;cF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return sF(t,n),n}})});var Vq=a((d7,zq)=>{"use strict";Kq();var dF=oe();zq.exports=dF("Array","push")});var Jq=a((h7,Yq)=>{"use strict";var hF=G(),mF=Vq(),Zu=Array.prototype;Yq.exports=function(e){var r=e.push;return e===Zu||hF(Zu,e)&&r===Zu.push?mF:r}});var Xq=a((m7,Qq)=>{"use strict";var yF=Jq();Qq.exports=yF});var ex=a((y7,Zq)=>{"use strict";var bF=Xq();Zq.exports=bF});var tx=a((b7,rx)=>{"use strict";var gF=ex();rx.exports=gF});var es=a((g7,nx)=>{"use strict";nx.exports=tx()});var dx=a(()=>{"use strict";var qF=q(),xF=kt().map,SF=bt(),wF=SF("map");qF({target:"Array",proto:!0,forced:!wF},{map:function(r){return xF(this,r,arguments.length>1?arguments[1]:void 0)}})});var mx=a((z7,hx)=>{"use strict";dx();var TF=oe();hx.exports=TF("Array","map")});var bx=a((V7,yx)=>{"use strict";var CF=G(),OF=mx(),ts=Array.prototype;yx.exports=function(e){var r=e.map;return e===ts||CF(ts,e)&&r===ts.map?OF:r}});var qx=a((Y7,gx)=>{"use strict";var EF=bx();gx.exports=EF});var Sx=a((J7,xx)=>{"use strict";var IF=qx();xx.exports=IF});var Tx=a((Q7,wx)=>{"use strict";var kF=Sx();wx.exports=kF});var Ox=a((X7,Cx)=>{"use strict";Cx.exports=Tx()});var Ix=a((Z7,Ex)=>{Ex.exports=Ox()});var _x=a((eV,kx)=>{kx.exports=tt()});var Mx=a((rV,Nx)=>{"use strict";var _F=D(),PF=re(),RF=qn(),AF=le(),Px=TypeError,Rx="Reduce of empty array with no initial value",Ax=function(e){return function(r,t,n,i){var o=PF(r),u=RF(o),s=AF(o);if(_F(t),s===0&&n<2)throw new Px(Rx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Px(Rx)}for(;e?c>=0:s>c;c+=l)c in u&&(i=t(i,u[c],c,o));return i}};Nx.exports={left:Ax(!1),right:Ax(!0)}});var ns=a((tV,jx)=>{"use strict";var NF=_();jx.exports=function(e,r){var t=[][e];return!!t&&NF(function(){t.call(null,r||function(){return 1},1)})}});var Lx=a(()=>{"use strict";var MF=q(),jF=Mx().left,$F=ns(),$x=Nr(),LF=Mt(),FF=!LF&&$x>79&&$x<83,DF=FF||!$F("reduce");MF({target:"Array",proto:!0,forced:DF},{reduce:function(r){var t=arguments.length;return jF(this,r,t,t>1?arguments[1]:void 0)}})});var Dx=a((aV,Fx)=>{"use strict";Lx();var BF=oe();Fx.exports=BF("Array","reduce")});var Gx=a((oV,Bx)=>{"use strict";var GF=G(),UF=Dx(),is=Array.prototype;Bx.exports=function(e){var r=e.reduce;return e===is||GF(is,e)&&r===is.reduce?UF:r}});var Wx=a((uV,Ux)=>{"use strict";var WF=Gx();Ux.exports=WF});var Kx=a((sV,Hx)=>{"use strict";var HF=Wx();Hx.exports=HF});var Vx=a((cV,zx)=>{"use strict";var KF=Kx();zx.exports=KF});var Jx=a((lV,Yx)=>{"use strict";Yx.exports=Vx()});var Xx=a((fV,Qx)=>{Qx.exports=Jx()});var rS=a((pV,eS)=>{"use strict";var zF=Pe(),VF=le(),YF=Ot(),JF=Y(),QF=Dr(),Zx=function(e,r,t,n,i,o,u,s){for(var c=i,l=0,f=u?JF(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&zF(p)?(v=VF(p),c=Zx(e,r,p,v,c,o-1)-1):(YF(c+1),QF(e,c,p)),c++),l++;return c};eS.exports=Zx});var tS=a(()=>{"use strict";var XF=q(),ZF=rS(),eD=D(),rD=re(),tD=le(),nD=Bn();XF({target:"Array",proto:!0},{flatMap:function(r){var t=rD(this),n=tD(t),i;return eD(r),i=nD(t,0),ZF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var nS=a(()=>{"use strict";var iD=Ro();iD("flatMap")});var aS=a((yV,iS)=>{"use strict";tS();nS();var aD=oe();iS.exports=aD("Array","flatMap")});var uS=a((bV,oS)=>{"use strict";var oD=G(),uD=aS(),as=Array.prototype;oS.exports=function(e){var r=e.flatMap;return e===as||oD(as,e)&&r===as.flatMap?uD:r}});var cS=a((gV,sS)=>{"use strict";var sD=uS();sS.exports=sD});var fS=a((qV,lS)=>{"use strict";var cD=cS();lS.exports=cD});var vS=a((xV,pS)=>{"use strict";var lD=fS();pS.exports=lD});var hS=a((SV,dS)=>{"use strict";dS.exports=vS()});var yS=a((wV,mS)=>{mS.exports=hS()});var gS=a((TV,bS)=>{"use strict";to();var fD=oe();bS.exports=fD("Array","concat")});var xS=a((CV,qS)=>{"use strict";var pD=G(),vD=gS(),os=Array.prototype;qS.exports=function(e){var r=e.concat;return e===os||pD(os,e)&&r===os.concat?vD:r}});var wS=a((OV,SS)=>{"use strict";var dD=xS();SS.exports=dD});var CS=a((EV,TS)=>{"use strict";var hD=wS();TS.exports=hD});var ES=a((IV,OS)=>{"use strict";var mD=CS();OS.exports=mD});var kS=a((kV,IS)=>{"use strict";IS.exports=ES()});var us=a((_V,_S)=>{_S.exports=kS()});var AS=a(()=>{});var MS=a((ZV,NS)=>{"use strict";AS();Po();var OD=Wr();NS.exports=OD.f("toPrimitive")});var $S=a((e9,jS)=>{"use strict";var ED=MS();jS.exports=ED});var FS=a((r9,LS)=>{"use strict";var ID=$S();LS.exports=ID});var BS=a((t9,DS)=>{"use strict";var kD=FS();DS.exports=kD});var US=a((n9,GS)=>{"use strict";GS.exports=BS()});var XS=a((T9,QS)=>{"use strict";var PD=L(),RD=xe(),AD=R(),ND=AD("match");QS.exports=function(e){var r;return PD(e)&&((r=e[ND])!==void 0?!!r:RD(e)==="RegExp")}});var ew=a((C9,ZS)=>{"use strict";var MD=XS(),jD=TypeError;ZS.exports=function(e){if(MD(e))throw new jD("The method doesn't accept regular expressions");return e}});var tw=a((O9,rw)=>{"use strict";var $D=R(),LD=$D("match");rw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[LD]=!1,"/./"[e](r)}catch{}}return!1}});var aw=a(()=>{"use strict";var FD=q(),DD=lt(),BD=pt().f,GD=Oa(),nw=Ve(),UD=ew(),WD=or(),HD=tw(),KD=Z(),zD=DD("".slice),VD=Math.min,iw=HD("startsWith"),YD=!KD&&!iw&&!!function(){var e=BD(String.prototype,"startsWith");return e&&!e.writable}();FD({target:"String",proto:!0,forced:!YD&&!iw},{startsWith:function(r){var t=nw(WD(this));UD(r);var n=GD(VD(arguments.length>1?arguments[1]:void 0,t.length)),i=nw(r);return zD(t,n,n+i.length)===i}})});var uw=a((k9,ow)=>{"use strict";aw();var JD=oe();ow.exports=JD("String","startsWith")});var cw=a((_9,sw)=>{"use strict";var QD=G(),XD=uw(),fs=String.prototype;sw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===fs||QD(fs,e)&&r===fs.startsWith?XD:r}});var fw=a((P9,lw)=>{"use strict";var ZD=cw();lw.exports=ZD});var vw=a((R9,pw)=>{"use strict";var e3=fw();pw.exports=e3});var hw=a((A9,dw)=>{"use strict";var r3=vw();dw.exports=r3});var yw=a((N9,mw)=>{"use strict";mw.exports=hw()});var gw=a((M9,bw)=>{bw.exports=yw()});var qw=a(()=>{"use strict";var t3=q(),n3=kt().filter,i3=bt(),a3=i3("filter");t3({target:"Array",proto:!0,forced:!a3},{filter:function(r){return n3(this,r,arguments.length>1?arguments[1]:void 0)}})});var Sw=a((L9,xw)=>{"use strict";qw();var o3=oe();xw.exports=o3("Array","filter")});var Tw=a((F9,ww)=>{"use strict";var u3=G(),s3=Sw(),ps=Array.prototype;ww.exports=function(e){var r=e.filter;return e===ps||u3(ps,e)&&r===ps.filter?s3:r}});var Ow=a((D9,Cw)=>{"use strict";var c3=Tw();Cw.exports=c3});var Iw=a((B9,Ew)=>{"use strict";var l3=Ow();Ew.exports=l3});var _w=a((G9,kw)=>{"use strict";var f3=Iw();kw.exports=f3});var Rw=a((U9,Pw)=>{"use strict";Pw.exports=_w()});var Nw=a((W9,Aw)=>{Aw.exports=Rw()});var Jw=a(()=>{"use strict";var g3=q(),q3=W(),ds=Rr(),x3=Mu(),Ww=Ko(),S3=X(),Hw=L(),w3=Je(),zw=_(),hs=q3("Reflect","construct"),T3=Object.prototype,C3=[].push,Vw=zw(function(){function e(){}return!(hs(function(){},[],e)instanceof e)}),Yw=!zw(function(){hs(function(){})}),Kw=Vw||Yw;g3({target:"Reflect",stat:!0,forced:Kw,sham:Kw},{construct:function(r,t){Ww(r),S3(t);var n=arguments.length<3?r:Ww(arguments[2]);if(Yw&&!Vw)return hs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ds(C3,i,t),new(ds(x3,r,i))}var o=n.prototype,u=w3(Hw(o)?o:T3),s=ds(r,u,t);return Hw(s)?s:u}})});var Xw=a((TY,Qw)=>{"use strict";Jw();var O3=V();Qw.exports=O3.Reflect.construct});var eT=a((CY,Zw)=>{"use strict";var E3=Xw();Zw.exports=E3});var tT=a((OY,rT)=>{"use strict";var I3=eT();rT.exports=I3});var iT=a((EY,nT)=>{"use strict";var k3=tT();nT.exports=k3});var Di=a((IY,aT)=>{"use strict";aT.exports=iT()});var uT=a((kY,oT)=>{oT.exports=Di()});var mT=a((LY,hT)=>{"use strict";var _3=_();hT.exports=_3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var gT=a((FY,bT)=>{"use strict";var P3=_(),R3=L(),A3=xe(),yT=mT(),Bi=Object.isExtensible,N3=P3(function(){Bi(1)});bT.exports=N3||yT?function(r){return!R3(r)||yT&&A3(r)==="ArrayBuffer"?!1:Bi?Bi(r):!0}:Bi});var xT=a((DY,qT)=>{"use strict";var M3=_();qT.exports=!M3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ss=a((BY,TT)=>{"use strict";var j3=q(),$3=N(),L3=Ur(),F3=L(),gs=H(),D3=te().f,ST=It(),B3=no(),qs=gT(),G3=jr(),U3=xT(),wT=!1,Ge=G3("meta"),W3=0,xs=function(e){D3(e,Ge,{value:{objectID:"O"+W3++,weakData:{}}})},H3=function(e,r){if(!F3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!gs(e,Ge)){if(!qs(e))return"F";if(!r)return"E";xs(e)}return e[Ge].objectID},K3=function(e,r){if(!gs(e,Ge)){if(!qs(e))return!0;if(!r)return!1;xs(e)}return e[Ge].weakData},z3=function(e){return U3&&wT&&qs(e)&&!gs(e,Ge)&&xs(e),e},V3=function(){Y3.enable=function(){},wT=!0;var e=ST.f,r=$3([].splice),t={};t[Ge]=1,e(t).length&&(ST.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Ge){r(i,o,1);break}return i},j3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:B3.f}))},Y3=TT.exports={enable:V3,fastKey:H3,getWeakData:K3,onFreeze:z3};L3[Ge]=!0});var ET=a((GY,OT)=>{"use strict";var J3=q(),Q3=P(),X3=Ss(),Z3=_(),e4=Se(),r4=pe(),t4=ci(),n4=M(),i4=L(),a4=ar(),o4=Ne(),u4=te().f,s4=kt().forEach,c4=U(),CT=Ye(),l4=CT.set,f4=CT.getterFor;OT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=Q3[e],s=u&&u.prototype,c={},l;if(!c4||!n4(u)||!(i||s.forEach&&!Z3(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),X3.enable();else{l=r(function(v,d){l4(t4(v,f),{type:e,collection:new u}),a4(d)||r4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=f4(e);s4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(i&&v==="clear")&&e4(f,v,function(m,h){var x=p(this).collection;if(!d&&i&&!i4(m))return v==="get"?void 0:!1;var y=x[v](m===0?0:m,h);return d?this:y})}),i||u4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return o4(l,e,!1,!0),c[e]=l,J3({global:!0,forced:!0},c),i||t.setStrong(l,e,n),l}});var kT=a((UY,IT)=>{"use strict";var p4=Re();IT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:p4(e,n,r[n],t);return e}});var jT=a((WY,MT)=>{"use strict";var _T=Je(),v4=Un(),PT=kT(),d4=Y(),h4=ci(),m4=ar(),y4=pe(),b4=$n(),Gi=Ln(),g4=Ho(),un=U(),RT=Ss().fastKey,NT=Ye(),AT=NT.set,ws=NT.getterFor;MT.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){h4(l,o),AT(l,{type:r,index:_T(null),first:null,last:null,size:0}),un||(l.size=0),m4(f)||y4(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=ws(r),s=function(l,f,p){var v=u(l),d=c(l,f),m,h;return d?d.value=p:(v.last=d={index:h=RT(f,!0),key:f,value:p,previous:m=v.last,next:null,removed:!1},v.first||(v.first=d),m&&(m.next=d),un?v.size++:l.size++,h!=="F"&&(v.index[h]=d)),l},c=function(l,f){var p=u(l),v=RT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return PT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=_T(null),un?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,m=v.previous;delete p.index[v.index],v.removed=!0,m&&(m.next=d),d&&(d.previous=m),p.first===v&&(p.first=d),p.last===v&&(p.last=m),un?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=d4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),PT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),un&&v4(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ws(r),o=ws(n);b4(e,r,function(u,s){AT(this,{type:n,target:u,state:i(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Gi(void 0,!0)):Gi(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),g4(r)}}});var $T=a(()=>{"use strict";var q4=ET(),x4=jT();q4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},x4)});var LT=a(()=>{"use strict";$T()});var DT=a((YY,FT)=>{"use strict";FT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((JY,GT)=>{"use strict";var S4=W(),Ui=DT(),BT=S4("Map");GT.exports={Map:BT,set:Ui("set",2),get:Ui("get",1),has:Ui("has",1),remove:Ui("delete",1),proto:BT.prototype}});var Ts=a(()=>{"use strict";var w4=q(),T4=N(),C4=D(),O4=or(),E4=pe(),Wi=ae(),UT=Z(),I4=_(),WT=Wi.Map,k4=Wi.has,_4=Wi.get,P4=Wi.set,R4=T4([].push),A4=UT||I4(function(){return WT.groupBy("ab",function(e){return e}).get("a").length!==1});w4({target:"Map",stat:!0,forced:UT||A4},{groupBy:function(r,t){O4(r),C4(t);var n=new WT,i=0;return E4(r,function(o){var u=t(o,i++);k4(n,u)?R4(_4(n,u),o):P4(n,u,[o])}),n}})});var J=a((ZY,HT)=>{"use strict";var N4=ze(),M4=TypeError;HT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new M4(N4(e)+" is not a map")}});var Os=a(()=>{"use strict";var j4=q(),$4=J(),Cs=ae(),L4=Z(),F4=Cs.get,D4=Cs.has,B4=Cs.set;j4({target:"Map",proto:!0,real:!0,forced:L4},{getOrInsert:function(r,t){return D4($4(this),r)?F4(this,r):(B4(this,r,t),t)}})});var Is=a(()=>{"use strict";var G4=q(),U4=D(),W4=J(),Es=ae(),H4=Z(),K4=Es.get,z4=Es.has,V4=Es.set;G4({target:"Map",proto:!0,real:!0,forced:H4},{getOrInsertComputed:function(r,t){if(W4(this),U4(t),z4(this,r))return K4(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return V4(this,r,n),n}})});var zT=a((iJ,KT)=>{"use strict";mr();LT();Ts();Os();Is();Et();pr();var Y4=V();KT.exports=Y4.Map});var YT=a((aJ,VT)=>{"use strict";var J4=zT();yr();VT.exports=J4});var ks=a(()=>{"use strict";Os()});var _s=a(()=>{"use strict";Is()});var JT=a(()=>{"use strict";Ts()});var XT=a((pJ,QT)=>{"use strict";var Q4=YT();ks();_s();JT();QT.exports=Q4});var eC=a((vJ,ZT)=>{"use strict";var X4=Y(),Z4=X(),eB=re(),rB=pe();ZT.exports=function(e,r,t){return function(i){var o=eB(i),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?X4(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return rB(o,function(v){var d=c?l(v,p++):v;t?r(f,Z4(d)[0],d[1]):r(f,d)}),f}}});var tC=a(()=>{"use strict";var tB=q(),rC=ae(),nB=eC();tB({target:"Map",stat:!0,forced:!0},{from:nB(rC.Map,rC.set,!0)})});var iC=a((mJ,nC)=>{"use strict";var iB=X();nC.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(i,iB(s)[0],s[1]):r(i,s)}return i}}});var oC=a(()=>{"use strict";var aB=q(),aC=ae(),oB=iC();aB({target:"Map",stat:!0,forced:!0},{of:oB(aC.Map,aC.set,!0)})});var sC=a(()=>{"use strict";var uB=q(),sB=B(),cB=pe(),lB=M(),uC=D(),fB=ae().Map;uB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=lB(this)?this:fB,i=new n;uC(t);var o=uC(i.set);return cB(r,function(u){sB(o,i,t(u),u)}),i}})});var cC=a(()=>{"use strict";var pB=q(),vB=J(),dB=ae().remove;pB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=vB(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=dB(r,arguments[i]),t=t&&n;return!!t}})});var fC=a(()=>{"use strict";var hB=q(),mB=J(),Ps=ae(),yB=Ps.get,bB=Ps.has,lC=Ps.set;hB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=mB(this),i,o;return bB(n,r)?(i=yB(n,r),"update"in t&&(i=t.update(i,r,n),lC(n,r,i)),i):(o=t.insert(r,n),lC(n,r,o),o)}})});var vC=a((CJ,pC)=>{"use strict";var gB=B();pC.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=gB(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((OJ,dC)=>{"use strict";var qB=vC();dC.exports=function(e,r,t){return t?qB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var hC=a(()=>{"use strict";var xB=q(),SB=Y(),wB=J(),TB=ye();xB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=wB(this),n=SB(r,arguments.length>1?arguments[1]:void 0);return TB(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var yC=a(()=>{"use strict";var CB=q(),OB=Y(),EB=J(),mC=ae(),IB=ye(),kB=mC.Map,_B=mC.set;CB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=EB(this),n=OB(r,arguments.length>1?arguments[1]:void 0),i=new kB;return IB(t,function(o,u){n(o,u,t)&&_B(i,u,o)}),i}})});var bC=a(()=>{"use strict";var PB=q(),RB=Y(),AB=J(),NB=ye();PB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=AB(this),n=RB(r,arguments.length>1?arguments[1]:void 0),i=NB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var gC=a(()=>{"use strict";var MB=q(),jB=Y(),$B=J(),LB=ye();MB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=$B(this),n=jB(r,arguments.length>1?arguments[1]:void 0),i=LB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var xC=a((MJ,qC)=>{"use strict";qC.exports=function(e,r){return e===r||e!==e&&r!==r}});var SC=a(()=>{"use strict";var FB=q(),DB=xC(),BB=J(),GB=ye();FB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return GB(BB(this),function(t){if(DB(t,r))return!0},!0)===!0}})});var wC=a(()=>{"use strict";var UB=q(),WB=J(),HB=ye();UB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=HB(WB(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var CC=a(()=>{"use strict";var KB=q(),zB=Y(),VB=J(),TC=ae(),YB=ye(),JB=TC.Map,QB=TC.set;KB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=VB(this),n=zB(r,arguments.length>1?arguments[1]:void 0),i=new JB;return YB(t,function(o,u){QB(i,n(o,u,t),o)}),i}})});var EC=a(()=>{"use strict";var XB=q(),ZB=Y(),eG=J(),OC=ae(),rG=ye(),tG=OC.Map,nG=OC.set;XB({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=eG(this),n=ZB(r,arguments.length>1?arguments[1]:void 0),i=new tG;return rG(t,function(o,u){nG(i,u,n(o,u,t))}),i}})});var IC=a(()=>{"use strict";var iG=q(),aG=J(),oG=pe(),uG=ae().set;iG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=aG(this),n=arguments.length,i=0;i<n;)oG(arguments[i++],function(o,u){uG(t,o,u)},{AS_ENTRIES:!0});return t}})});var kC=a(()=>{"use strict";var sG=q(),cG=D(),lG=J(),fG=ye(),pG=TypeError;sG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=lG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(cG(r),fG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new pG("Reduce of empty map with no initial value");return i}})});var _C=a(()=>{"use strict";var vG=q(),dG=Y(),hG=J(),mG=ye();vG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=hG(this),n=dG(r,arguments.length>1?arguments[1]:void 0);return mG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var RC=a(()=>{"use strict";var yG=q(),PC=D(),bG=J(),Rs=ae(),gG=TypeError,qG=Rs.get,xG=Rs.has,SG=Rs.set;yG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=bG(this),i=arguments.length;PC(t);var o=xG(n,r);if(!o&&i<3)throw new gG("Updating absent value");var u=o?qG(n,r):PC(i>2?arguments[2]:void 0)(r,n);return SG(n,r,t(u,r,n)),n}})});var Ns=a((XJ,AC)=>{"use strict";var Hi=B(),As=D(),Ki=M(),wG=X(),TG=TypeError;AC.exports=function(r,t){var n=wG(this),i=As(n.get),o=As(n.has),u=As(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Ki(t)&&!Ki(s))throw new TG("At least one callback required");return Hi(o,n,r)?(c=Hi(i,n,r),Ki(t)&&(c=t(c),Hi(u,n,r,c))):Ki(s)&&(c=s(),Hi(u,n,r,c)),c}});var NC=a(()=>{"use strict";var CG=q(),OG=Ns();CG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:OG})});var MC=a(()=>{"use strict";var EG=q(),IG=Ns();EG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:IG})});var $C=a((nQ,jC)=>{"use strict";var kG=XT();tC();oC();sC();cC();fC();hC();yC();bC();gC();SC();ks();_s();wC();CC();EC();IC();kC();_C();RC();NC();MC();jC.exports=kG});var FC=a((iQ,LC)=>{"use strict";LC.exports=$C()});var BC=a(()=>{"use strict";var _G=q(),PG=lt(),RG=ja().indexOf,AG=ns(),Ms=PG([].indexOf),DC=!!Ms&&1/Ms([1],1,-0)<0,NG=DC||!AG("indexOf");_G({target:"Array",proto:!0,forced:NG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return DC?Ms(this,r,t)||0:RG(this,r,t)}})});var UC=a((uQ,GC)=>{"use strict";BC();var MG=oe();GC.exports=MG("Array","indexOf")});var HC=a((sQ,WC)=>{"use strict";var jG=G(),$G=UC(),js=Array.prototype;WC.exports=function(e){var r=e.indexOf;return e===js||jG(js,e)&&r===js.indexOf?$G:r}});var zC=a((cQ,KC)=>{"use strict";var LG=HC();KC.exports=LG});var YC=a((lQ,VC)=>{"use strict";var FG=zC();VC.exports=FG});var QC=a((fQ,JC)=>{"use strict";var DG=YC();JC.exports=DG});var ZC=a((pQ,XC)=>{"use strict";XC.exports=QC()});var mO=a(()=>{"use strict";var KG=q(),zG=re(),hO=Rn(),VG=_(),YG=VG(function(){hO(1)});KG({target:"Object",stat:!0,forced:YG},{keys:function(r){return hO(zG(r))}})});var bO=a((yX,yO)=>{"use strict";mO();var JG=V();yO.exports=JG.Object.keys});var qO=a((bX,gO)=>{"use strict";var QG=bO();gO.exports=QG});var SO=a((gX,xO)=>{"use strict";var XG=qO();xO.exports=XG});var TO=a((qX,wO)=>{"use strict";var ZG=SO();wO.exports=ZG});var OO=a((xX,CO)=>{"use strict";CO.exports=TO()});var IO=a((SX,EO)=>{EO.exports=OO()});var _r="";function Zs(e){_r=e.replace(/\/+$/,"")}async function st(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Zi(e,r,{search:t,author:n}={}){let i=new URLSearchParams;r?i.set("document",r):e&&i.set("uri",e),t&&i.set("search",t),n&&i.set("author",n);let o=await fetch(`${_r}/comments?${i}`);return await st(o,"Failed to fetch comments"),(await o.json()).data}async function ea({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:i,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${_r}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await st(f,"Failed to create comment"),f.json()}async function ec(e,{body:r}){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await st(t,"Failed to update comment"),t.json()}async function rc(e,r){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await st(t,"Failed to update comment status"),t.json()}async function tc(e){let r=await fetch(`${_r}/comments/${e}`,{method:"DELETE"});await st(r,"Failed to delete comment")}var KL=b(Gr(),1),zL=b(Dn(),1),VL=b(ti(),1),YL=b(ni(),1),JL=b(ii(),1);var _u=b(tt(),1);function Qy(e,r,t,n,i,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):_u.default.resolve(c).then(n,i)}function Sr(e){return function(){var r=this,t=arguments;return new _u.default(function(n,i){var o=e.apply(r,t);function u(c){Qy(o,n,i,u,s,"next",c)}function s(c){Qy(o,n,i,u,s,"throw",c)}u(void 0)})}}function Gt(e,r){this.v=e,this.k=r}function er(e){return new Gt(e,0)}var Pu=b(tt(),1),ub=b(we(),1),sb=b(gi(),1);function Ce(e){return function(){return new Ut(e.apply(this,arguments))}}function Ut(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Gt;Pu.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Pu.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ut.prototype[typeof ub.default=="function"&&sb.default||"@@asyncIterator"]=function(){return this},Ut.prototype.next=function(e){return this._invoke("next",e)},Ut.prototype.throw=function(e){return this._invoke("throw",e)},Ut.prototype.return=function(e){return this._invoke("return",e)};var QL=b(se(),1),XL=b(Rq(),1);function ce(e){var r,t=WL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function WL(e){return"startContainer"in e}function tr(e){if(HL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function HL(e){return"startContainer"in e}var Wq=b(Uq(),1);function Hq(e){if((0,Wq.default)(e))return e}var ix=b(we(),1),ax=b(Fo(),1),ox=b(es(),1);function ux(e,r){var t=e==null?null:typeof ix.default<"u"&&(0,ax.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ox.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return s}}var sx=b(ka(),1),cx=b(ro(),1);function Ni(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function rs(e,r){if(e){var t;if(typeof e=="string")return Ni(e,r);var n=(0,sx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,cx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ni(e,r):void 0}}function lx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Hq(e)||ux(e,r)||rs(e,r)||lx()}var fx=b(we(),1),px=b(gi(),1),vx=b(Qt(),1),rn=b(tt(),1);function it(e){var r,t,n,i=2;for(typeof fx.default<"u"&&(t=px.default,n=vx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Mi(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Mi(e){function r(t){if(Object(t)!==t)return rn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return rn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Mi=function(n){this.s=n,this.n=n.next},Mi.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?rn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?rn.default.reject(n):r(i.apply(this.s,arguments))}},new Mi(e)}var CD=b(se(),1);var gD=b(se(),1),qD=b(Ix(),1),xD=b(_x(),1),SD=b(Xx(),1),wD=b(yS(),1),TD=b(us(),1);var Fs=b(se(),1);var b3=b(se(),1);var cs=b(se(),1);function tn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function PS(e,r){return tn(e.startChunk,r.startChunk)&&tn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ss=b(Kt(),1);var nn=b(we(),1),RS=b(Qt(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof nn.default=="function"&&typeof RS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof nn.default=="function"&&r.constructor===nn.default&&r!==nn.default.prototype?"symbol":typeof r},Be(e)}var WS=b(US(),1);function HS(e,r){if(Be(e)!="object"||!e)return e;var t=e[WS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ji(e){var r=HS(e,"string");return Be(r)=="symbol"?r:r+""}function KS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ss.default)(e,ji(n.key),n)}}function an(e,r,t){return r&&KS(e.prototype,r),t&&KS(e,t),(0,ss.default)(e,"prototype",{writable:!1}),e}var zS=b(Kt(),1);function Tr(e,r,t){return(r=ji(r))in e?(0,zS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var VS=b(Gr(),1);var $i="Iterator exhausted before seek ended.",on=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return an(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!tn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],m=v[1];if(t&&(u=d+u),m===null)throw new RangeError($i)}else for(;!tn(this.currentChunk,n);){var s=this._readToNextChunk(),c=De(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError($i)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,VS.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=De(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError($i)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=De(m,2),x=h[0],y=h[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError($i)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function JS(e,r){return ls.apply(this,arguments)}function ls(){return ls=Sr(cs.default.mark(function e(r,t){var n,i,o,u,s,c,l,f,p,v,d,m,h,x,y,g,E,I,S,T,w,O,$=arguments;return cs.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=$.length>2&&$[2]!==void 0?$[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new on(t()),p=new on(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+v.length+m.length},h()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-h())/2),d=f.read(-x,!1,!0)+d,h()<s&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),y=s-h(),m=m+f.read(y,!1,!0),h()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=s-h(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Li(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+Li(f,l,!1));case 11:return E={type:"TextQuoteSelector",exact:v,prefix:d,suffix:m},I=Fi(E)(t()),k.next=16,I.next();case 16:if(S=k.sent,!(!S.done&&PS(S.value,r))){k.next=21;break}return k.next=20,I.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",E);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=YS(f,p,!0),w!==void 0&&!o&&(w=Li(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),p.seekToChunk(T.endChunk,T.endIndex+m.length),O=YS(f,p,!1),O!==void 0&&!o&&(O=O+Li(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(O===void 0||w.length<=O.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(O===void 0){k.next=41;break}m=m+O,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),O!==void 0&&(m=m+O);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ls.apply(this,arguments)}function YS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Li(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(_D(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function _D(e){return/^\s+$/.test(e)}var $w=b(Gr(),1),Lw=b(Dn(),1),Fw=b(ti(),1),Dw=b(ni(),1),Bw=b(ii(),1);var vs=b(se(),1),Gw=b(gw(),1),Uw=b(Nw(),1);function Mw(e,r){var t;if(typeof Fw.default>"u"||(0,Dw.default)(e)==null){if(Array.isArray(e)||(t=p3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,Bw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function p3(e,r){var t;if(e){if(typeof e=="string")return jw(e,r);var n=(0,$w.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Lw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jw(e,r)}}function jw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Fi(e){return function(){var r=Ce(vs.default.mark(function n(i){var o,u,s,c,l,f,p,v,d,m,h,x,y,g,E,I,S,T,w,O,$,ge,k,ee,qe,Q,F;return vs.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],m=Mw(l),C.prev=10,m.s();case 12:if((h=m.n()).done){C.next=27;break}if(x=h.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(E=u.length-y,(E<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=E)),I=c.length-y,!(I<=v.length)){C.next=24;break}if(!(0,Gw.default)(v).call(v,c.substring(y))){C.next=22;break}return C.next=22,x;case 22:C.next=25;break;case 24:v===c.substring(y,y+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),m.e(C.t0);case 32:return C.prev=32,m.f(),C.finish(32);case 35:if(l=d,!(c.length<=v.length)){C.next=49;break}S=0;case 38:if(!(S<=v.length)){C.next=49;break}if(T=v.indexOf(c,S),T!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:C.next=38;break;case 49:for(w=[],O=Math.max(v.length-c.length+1,0),$=function(He){var Qs=v[He];w=(0,Uw.default)(w).call(w,function(iE){return Qs===c[He-iE]}),Qs===c[0]&&w.push(He)},ge=O;ge<v.length;ge++)$(ge);k=Mw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,Q=v.length-qe,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=qe+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=qe+u.length),l.push(F)}catch(kr){k.e(kr)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var m3=b(se(),1);var v3=b(Gr(),1),d3=b(us(),1);var y3=b(se(),1);var cn=b(uT(),1);var cT=b(xi(),1),lT=b(Kt(),1);var ms=b(Si(),1),sT=b(Ht(),1);function nr(e,r){var t;return nr=ms.default?(0,sT.default)(t=ms.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function ys(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,cT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,lT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function fT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fT(e)}var vT=b(Si(),1),dT=b(Ht(),1),bs=b(qi(),1);function Cr(e){var r;return Cr=vT.default?(0,dT.default)(r=bs.default).call(r):function(t){return t.__proto__||(0,bs.default)(t)},Cr(e)}var Ls=b(FC(),1),uO=b(xi(),1);var eO=b(ZC(),1);function rO(e){try{var r;return(0,eO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var nO=b(Di(),1),iO=b(es(),1),aO=b(Ht(),1);var tO=b(Di(),1);function $s(){try{var e=!Boolean.prototype.valueOf.call((0,tO.default)(Boolean,[],function(){}))}catch{}return($s=function(){return!!e})()}function oO(e,r,t){if($s())return nO.default.apply(null,arguments);var n=[null];(0,iO.default)(n).apply(n,r);var i=new((0,aO.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function sn(e){var r=typeof Ls.default=="function"?new Ls.default:void 0;return sn=function(n){if(n===null||!rO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return oO(n,arguments,Cr(this).constructor)}return i.prototype=(0,uO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},sn(e)}function lO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=sO(e.startContainer,e.startOffset),o=De(i,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=sO(e.endContainer,e.endOffset),l=De(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function sO(e,r){var t;if(cO(e))return[e,r];var n;if(BG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(cO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function cO(e){return e.nodeType===Node.TEXT_NODE}function BG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function pO(e){var r=GG();return function(){var n=Cr(e),i;if(r){var o=Cr(this).constructor;i=(0,cn.default)(n,arguments,o)}else i=n.apply(this,arguments);return pT(this,i)}}function GG(){if(typeof Reflect>"u"||!cn.default||cn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,cn.default)(Boolean,[],function(){})),!0}catch{return!1}}var zi=function(e){ys(t,e);var r=pO(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(sn(TypeError)),UG=function(e){ys(t,e);var r=pO(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(sn(TypeError)),Or=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=tr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!fO(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new zi}}return an(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!fO(t))throw new zi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new UG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=lO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function fO(e){return e.nodeType===Node.TEXT_NODE}function vO(e,r){return Ds.apply(this,arguments)}function Ds(){return Ds=Sr(Fs.default.mark(function e(r,t){var n,i,o,u=arguments;return Fs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??ce(r)),o=new Or(i),c.next=5,JS(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ds.apply(this,arguments)}var Bs=b(se(),1);function dO(e){var r=Fi(e);return function(){var t=Ce(Bs.default.mark(function i(o){var u,s,c,l,f,p,v,d;return Bs.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Or(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof zi)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:s=!0,c=!1,h.prev=13,f=it(r(u));case 15:return h.next=17,er(f.next());case 17:return p=h.sent,s=p.done,h.next=21,er(p.value);case 21:if(v=h.sent,s){h.next=29;break}return d=v,h.next=26,u.chunkRangeToRange(d);case 26:s=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),c=!0,l=h.t1;case 35:if(h.prev=35,h.prev=36,!(!s&&f.return!=null)){h.next=40;break}return h.next=40,er(f.return());case 40:if(h.prev=40,!c){h.next=43;break}throw l;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var WG=b(se(),1);var HG=b(se(),1);var e5=b(IO(),1),r5=b(Gr(),1),t5=b(Dn(),1),n5=b(ti(),1),i5=b(ni(),1),a5=b(ii(),1);async function kO(e,r){let t=await vO(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Vi(e,r){let t=dO({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Yi={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},at="#ffd400",o5=/^#[0-9a-fA-F]{6}$/;function Ji(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return Yi[r]?Yi[r]:o5.test(r)?r:null}function ln(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${i}, ${r})`}var Er="fb-highlight",_O="fb-highlight-active";var pn=new Map,fn=null;function RO(e){fn=e}function Qi(e,r,t){let n=Ji(t)||at;pn.set(r,n);let i=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=PO(e,r,n);i.push(o)}else{let o=s5(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||i.push(PO(c,r,n))}}return i}function PO(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let i=n,o=!1,u=null;for(;i;){if(i.tagName==="foreignObject"){o=!1;break}i.tagName==="text"&&i instanceof SVGElement&&(o=!0),i.tagName==="svg"&&(u=i),i=i.parentElement}if(o&&u)return u5(e,r,u,t);let s=document.createElement("mark");s.className=Er,s.dataset.commentId=r,s.style.backgroundColor=ln(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function u5(e,r,t,n){try{let i=e.getClientRects();if(i.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",Er),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<i.length;y++){let g=i[y],E=document.createElementNS(o,"rect"),I=t.createSVGPoint();I.x=g.left,I.y=g.top;let S=I.matrixTransform(p.inverse()),T=g.width/p.a,w=g.height/p.d;E.setAttribute("x",S.x),E.setAttribute("y",S.y),E.setAttribute("width",T),E.setAttribute("height",w),E.setAttribute("fill",n),E.setAttribute("fill-opacity","0.35"),E.setAttribute("rx","2"),E.setAttribute("ry","2"),E.style.pointerEvents="none",v.appendChild(E)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let m=new Set,h=d;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(m.add(h),h.querySelectorAll("tspan").forEach(g=>m.add(g))),h=h.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return m.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),v}catch(i){return console.warn("[feedback-layer] Failed to create SVG highlight:",i),null}}function Gs(e){pn.delete(e),document.querySelectorAll(`.${Er}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function AO(){pn.clear(),document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Xi(e){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,i=pn.get(t)||at,o=ln(i,.55),u=ln(i,.35);n?r.classList.add(_O):r.classList.remove(_O),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",i),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function NO(e){let r=document.querySelector(`.${Er}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Us(e){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.dataset.commentId,i=e!=null&&!e.has(t)?.1:.35;if(r.tagName==="g"||r instanceof SVGElement)r.querySelectorAll("rect").forEach(u=>u.setAttribute("fill-opacity",String(i)));else{let o=pn.get(t)||at;r.style.backgroundColor=ln(o,i)}})}function s5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function MO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function jO(e,r){let t=MO(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Ee(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var c5=`
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
`,$O=null,LO=null;function FO(e,r){LO=e,$O=r,l5()}function l5(){let e=document.createElement("style");e.textContent=c5,document.head.appendChild(e)}function DO(){let e=$O(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(LO.contentSelector||"body").innerHTML,c=jO(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ee(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function BO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function GO(e,r){return e.length>r?e.slice(0,r)+"...":e}function UO(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var vn=null;function HO(e){vn=document.createElement("div"),vn.className="fb-toast-container",e.appendChild(vn)}function ir(e,r="success"){if(!vn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>WO(t)),t.appendChild(o)}vn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>WO(t),r==="error"?8e3:4e3)}function WO(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function KO(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}var f5=320,VO="feedback-layer-commenter",A=null,Ue=null,be=null,Ws=null,YO=null,Hs=null,Ks=null,zs=null,Vs=null,dn=null,JO=null,Ys=!1,QO=[],XO=new Set;function ot(){return localStorage.getItem(VO)||""}function ZO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,onSearch:o,defaultColor:u}){YO=e,Hs=r,Ks=t,zs=n,Vs=i,dn=o||null,JO=u||null,m5(),A=document.createElement("div"),A.className="fb-sidebar fb-sidebar-collapsed",A.innerHTML=`
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
               value="${Ee(ot())}">
      </div>
      <div class="fb-search-section">
        <input type="text" class="fb-search-input" placeholder="Search comments...">
        <select class="fb-author-filter">
          <option value="">All authors</option>
        </select>
        <button class="fb-clear-filters" title="Clear filters" style="display:none">&times;</button>
      </div>
      <div class="fb-filter-section">
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
        <span class="fb-result-count"></span>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let s=document.createElement("button");s.className="fb-sidebar-tab",s.textContent="Feedback",s.addEventListener("click",()=>hn()),document.body.appendChild(s),document.body.appendChild(A),HO(A),Ue=A.querySelector(".fb-comment-list"),be=A.querySelector(".fb-form-section");let c=A.querySelector(".fb-name-input");c.addEventListener("input",()=>{localStorage.setItem(VO,c.value.trim())}),A.querySelector(".fb-ai-btn").addEventListener("click",()=>DO()),A.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>p5());let p=A.querySelector(".fb-show-resolved-cb");p.addEventListener("change",()=>{Ys=p.checked,We(QO,XO)});let v=A.querySelector(".fb-search-input"),d=A.querySelector(".fb-author-filter"),m=A.querySelector(".fb-clear-filters");function h(){let y=v.value.trim()||d.value;m.style.display=y?"":"none"}let x=KO(()=>{h(),dn&&dn({search:v.value.trim(),author:d.value})},300);v.addEventListener("input",x),d.addEventListener("change",x),m.addEventListener("click",()=>{v.value="",d.value="",h(),dn&&dn({search:"",author:""})})}function hn(){A.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function p5(){A.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function eE(e){if(hn(),!ot()){let u=A.querySelector(".fb-name-input");u.style.outline="2px solid #ef4444",setTimeout(()=>u.style.outline="",2e3)}Ws=e,be.style.display="";let r=Object.entries(Yi),t=JO||at;be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Ee(GO(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-color-picker">
        <label class="fb-color-label">Color</label>
        <div class="fb-color-swatches">
          ${r.map(([u,s])=>`<button type="button" class="fb-color-swatch${s===t?" fb-color-swatch-active":""}" data-color="${s}" title="${u}" style="background:${s};"></button>`).join("")}
        </div>
      </div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let n=t;be.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),be.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let i=be.querySelector(".fb-form-textarea");i.focus();let o=()=>{if(!ot()){let s=A.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let u=i.value.trim();u&&(YO({comment:u,commenter:ot(),color:n}),be.style.display="none",Ws=null)};be.querySelector(".fb-submit-btn").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{be.style.display="none",Ws=null}),be.scrollIntoView({behavior:"smooth",block:"nearest"})}function v5(e){let r=A&&A.querySelector(".fb-result-count");if(!r)return;let t=A.querySelector(".fb-search-input"),n=A.querySelector(".fb-author-filter"),i=t&&t.value.trim()||n&&n.value;r.textContent=i?`${e} result${e!==1?"s":""}`:""}function We(e,r=new Set,t=new Map){QO=e,XO=r,Ue.innerHTML="";let n=e.filter(f=>!f.parent).length;v5(n);let{topLevel:i,repliesByParent:o}=BO(e),u=i.slice().sort((f,p)=>{let v=t.get(f.id),d=t.get(p.id);return!v||!d?0:v.compareBoundaryPoints(Range.START_TO_START,d)}),s=u.filter(f=>{let p=r.has(f.id),v=f.status==="closed";return p||v&&Ys}),c=Ys?s:s.filter(f=>f.status!=="closed");if(u.length===0){Ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(c.length===0){l>0?Ue.innerHTML=`<div class="fb-empty">
        ${s.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ue.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f of c){let p=document.createElement("div");p.className="fb-thread",p.appendChild(zO(f,!1));let v=o.get(f.id)||[];for(let m of v)p.appendChild(zO(m,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",m=>{m.stopPropagation(),d5(f.id,p,d)}),p.appendChild(d),Ue.appendChild(p)}}function zO(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${Ee(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Ee(e.author)}</span>
      <span class="fb-cmt-time">${UO(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Xi(e.id),NO(e.id),Ue.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ks&&Ks(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),h5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Hs&&Hs(e.id)}),n}function d5(e,r,t){hn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ot()){let c=A.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let s=i.querySelector("textarea").value.trim();s&&(zs&&zs({parent_id:e,comment:s,commenter:ot()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function h5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${Ee(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function rE(e){let r=A&&A.querySelector(".fb-author-filter");if(!r)return;let t=r.value,n=[...new Set(e.map(i=>i.author).filter(Boolean))].sort();r.innerHTML='<option value="">All authors</option>'+n.map(i=>`<option value="${Ee(i)}">${Ee(i)}</option>`).join(""),n.includes(t)&&(r.value=t)}function tE(e){let r=Ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function m5(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${f5}px;
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
    .fb-search-section {
      display: flex;
      gap: 6px;
      margin-bottom: 12px;
    }
    .fb-search-input {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
    }
    .fb-search-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
    }
    .fb-author-filter {
      width: 110px;
      padding: 6px 4px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 13px;
      background: #fff;
      font-family: inherit;
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: #7c3aed;
    }
    .fb-clear-filters {
      background: none;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      color: #888;
      cursor: pointer;
      font-size: 16px;
      padding: 0 6px;
      line-height: 1;
      flex-shrink: 0;
      font-family: inherit;
    }
    .fb-clear-filters:hover {
      color: #ef4444;
      border-color: #ef4444;
    }
    .fb-filter-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    .fb-result-count {
      font-size: 11px;
      color: #7c3aed;
      font-weight: 600;
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

    /* Color picker */
    .fb-color-picker {
      margin-bottom: 8px;
    }
    .fb-color-label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: #888;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-color-swatches {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fb-color-swatch {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      padding: 0;
      transition: border-color 0.15s, transform 0.1s;
    }
    .fb-color-swatch:hover {
      transform: scale(1.15);
    }
    .fb-color-swatch-active {
      border-color: #333;
      box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    }

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
  `,document.head.appendChild(e)}var ut=null,yn=null,bn=null,Js=null,z=[],Ir=null,Ie=null,ve=new Set,ke=new Map;function y5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,defaultColor:e?.dataset.defaultColor||null};Zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,yn=r.documentUri||window.location.origin+window.location.pathname,bn=r.documentId||null,Js=Ji(r.defaultColor)||null,ZO({onSubmit:S5,onDelete:E5,onResolve:w5,onReply:T5,onEdit:C5,onSearch:O5,defaultColor:Js}),RO(i=>{hn(),tE(i),Xi(i)}),q5(),await t(),b5(),FO(r,()=>z)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function b5(){try{z=await Zi(yn,bn),ve=await g5(z),rE(z),We(z,ve,ke)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ir(`Failed to load comments: ${e.message}`,"error")}}async function g5(e){AO();let r=new Set;ke.clear();for(let t of e)if(!t.parent)try{let n=await Vi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(Qi(n,t.id,t.color),r.add(t.id),ke.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),ke.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function q5(){document.addEventListener("mouseup",nE),document.addEventListener("keyup",nE)}function nE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){mn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){mn();return}if(!ut.contains(r.commonAncestorContainer)){mn();return}x5(r)},10)}function x5(e){mn();let r=e.getBoundingClientRect();Ie=document.createElement("button"),Ie.className="fb-annotate-tooltip",Ie.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ie.style.top=window.scrollY+r.top-36+"px",Ie.style.left=window.scrollX+r.left+r.width/2-40+"px",Ie.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Ir=await kO(i,ut),eE(Ir.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}mn()}),document.body.appendChild(Ie)}function mn(){Ie&&(Ie.remove(),Ie=null)}async function S5({comment:e,commenter:r,color:t}){if(!Ir)return;let n=t||Js||null;try{let i=await ea({uri:yn,document:bn,quote:Ir.exact,prefix:Ir.prefix,suffix:Ir.suffix,body:e,author:r,color:n});z.push(i);let o=await Vi({exact:i.quote,prefix:i.prefix,suffix:i.suffix},ut);o&&(Qi(o,i.id,i.color),ve.add(i.id)),We(z,ve,ke),window.getSelection().removeAllRanges()}catch(i){console.error("[feedback-layer] Failed to create comment:",i),ir(`Failed to save comment: ${i.message}`,"error")}Ir=null}async function w5(e,r){try{let n=await rc(e,r?"closed":"open"),i=z.findIndex(o=>o.id===e);if(i!==-1&&(z[i]=n),r)Gs(e);else{let o=n,u=await Vi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(Qi(u,o.id,o.color),ve.add(o.id)):ve.delete(o.id)}We(z,ve,ke)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ir(`Failed to update comment: ${t.message}`,"error")}}async function T5({parent_id:e,comment:r,commenter:t}){try{let n=await ea({uri:yn,document:bn,body:r,author:t,parent:e});z.push(n),We(z,ve,ke)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ir(`Failed to save reply: ${n.message}`,"error")}}async function C5(e,r){try{let t=await ec(e,{body:r}),n=z.findIndex(i=>i.id===e);n!==-1&&(z[n]=t),We(z,ve,ke)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ir(`Failed to update comment: ${t.message}`,"error")}}async function O5({search:e,author:r}){try{let t=e||r,n=await Zi(yn,bn,{search:e,author:r});if(t){let i=new Set(n.map(o=>o.id));Us(i)}else Us(null);We(n,ve,ke)}catch(t){console.error("[feedback-layer] Failed to search comments:",t),ir(`Failed to search comments: ${t.message}`,"error")}}async function E5(e){try{await tc(e),Gs(e),ve.delete(e),z=z.filter(r=>r.id!==e&&r.parent!==e),We(z,ve,ke)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ir(`Failed to delete comment: ${r.message}`,"error")}}try{y5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
