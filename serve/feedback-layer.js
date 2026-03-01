var FeedbackLayer=(()=>{var k0=Object.create;var dc=Object.defineProperty;var I0=Object.getOwnPropertyDescriptor;var _0=Object.getOwnPropertyNames;var P0=Object.getPrototypeOf,R0=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var A0=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of _0(r))!R0.call(e,a)&&a!==t&&dc(e,a,{get:()=>r[a],enumerable:!(n=I0(r,a))||n.enumerable});return e};var y=(e,r,t)=>(t=e!=null?k0(P0(e)):{},A0(r||!e||!e.__esModule?dc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((mG,xc)=>{"use strict";xc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((hG,wc)=>{"use strict";var N0=P();wc.exports=!N0(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((yG,Cc)=>{"use strict";var Sc=Mr(),Ec=Function.prototype,li=Ec.call,M0=Sc&&Ec.bind.bind(li,li);Cc.exports=Sc?M0:function(e){return function(){return li.apply(e,arguments)}}});var H=i((bG,Tc)=>{"use strict";var j0=N();Tc.exports=j0({}.isPrototypeOf)});var R=i((fi,Oc)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};Oc.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof fi=="object"&&fi)||function(){return this}()||Function("return this")()});var jr=i((gG,Pc)=>{"use strict";var L0=Mr(),_c=Function.prototype,kc=_c.apply,Ic=_c.call;Pc.exports=typeof Reflect=="object"&&Reflect.apply||(L0?Ic.bind(kc):function(){return Ic.apply(kc,arguments)})});var Te=i((qG,Ac)=>{"use strict";var Rc=N(),$0=Rc({}.toString),F0=Rc("".slice);Ac.exports=function(e){return F0($0(e),8,-1)}});var vt=i((xG,Nc)=>{"use strict";var D0=Te(),B0=N();Nc.exports=function(e){if(D0(e)==="Function")return B0(e)}});var M=i((wG,Mc)=>{"use strict";var pi=typeof document=="object"&&document.all;Mc.exports=typeof pi>"u"&&pi!==void 0?function(e){return typeof e=="function"||e===pi}:function(e){return typeof e=="function"}});var K=i((SG,jc)=>{"use strict";var G0=P();jc.exports=!G0(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((EG,Lc)=>{"use strict";var U0=Mr(),Cn=Function.prototype.call;Lc.exports=U0?Cn.bind(Cn):function(){return Cn.apply(Cn,arguments)}});var vi=i(Dc=>{"use strict";var $c={}.propertyIsEnumerable,Fc=Object.getOwnPropertyDescriptor,W0=Fc&&!$c.call({1:2},1);Dc.f=W0?function(r){var t=Fc(this,r);return!!t&&t.enumerable}:$c});var Qe=i((TG,Bc)=>{"use strict";Bc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((OG,Gc)=>{"use strict";var H0=N(),K0=P(),z0=Te(),di=Object,V0=H0("".split);Gc.exports=K0(function(){return!di("z").propertyIsEnumerable(0)})?function(e){return z0(e)==="String"?V0(e,""):di(e)}:di});var lr=i((kG,Uc)=>{"use strict";Uc.exports=function(e){return e==null}});var fr=i((IG,Wc)=>{"use strict";var Y0=lr(),J0=TypeError;Wc.exports=function(e){if(Y0(e))throw new J0("Can't call method on "+e);return e}});var Ae=i((_G,Hc)=>{"use strict";var Q0=Tn(),X0=fr();Hc.exports=function(e){return Q0(X0(e))}});var $=i((PG,Kc)=>{"use strict";var Z0=M();Kc.exports=function(e){return typeof e=="object"?e!==null:Z0(e)}});var J=i((RG,zc)=>{"use strict";zc.exports={}});var z=i((AG,Yc)=>{"use strict";var mi=J(),hi=R(),eO=M(),Vc=function(e){return eO(e)?e:void 0};Yc.exports=function(e,r){return arguments.length<2?Vc(mi[e])||Vc(hi[e]):mi[e]&&mi[e][r]||hi[e]&&hi[e][r]}});var Lr=i((NG,Xc)=>{"use strict";var rO=R(),Jc=rO.navigator,Qc=Jc&&Jc.userAgent;Xc.exports=Qc?String(Qc):""});var $r=i((MG,al)=>{"use strict";var nl=R(),yi=Lr(),Zc=nl.process,el=nl.Deno,rl=Zc&&Zc.versions||el&&el.version,tl=rl&&rl.v8,ge,On;tl&&(ge=tl.split("."),On=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!On&&yi&&(ge=yi.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=yi.match(/Chrome\/(\d+)/),ge&&(On=+ge[1])));al.exports=On});var pr=i((jG,ol)=>{"use strict";var il=$r(),tO=P(),nO=R(),aO=nO.String;ol.exports=!!Object.getOwnPropertySymbols&&!tO(function(){var e=Symbol("symbol detection");return!aO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&il&&il<41})});var bi=i((LG,ul)=>{"use strict";var iO=pr();ul.exports=iO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i(($G,sl)=>{"use strict";var oO=z(),uO=M(),sO=H(),cO=bi(),lO=Object;sl.exports=cO?function(e){return typeof e=="symbol"}:function(e){var r=oO("Symbol");return uO(r)&&sO(r.prototype,lO(e))}});var Xe=i((FG,cl)=>{"use strict";var fO=String;cl.exports=function(e){try{return fO(e)}catch{return"Object"}}});var D=i((DG,ll)=>{"use strict";var pO=M(),vO=Xe(),dO=TypeError;ll.exports=function(e){if(pO(e))return e;throw new dO(vO(e)+" is not a function")}});var kn=i((BG,fl)=>{"use strict";var mO=D(),hO=lr();fl.exports=function(e,r){var t=e[r];return hO(t)?void 0:mO(t)}});var vl=i((GG,pl)=>{"use strict";var gi=G(),qi=M(),xi=$(),yO=TypeError;pl.exports=function(e,r){var t,n;if(r==="string"&&qi(t=e.toString)&&!xi(n=gi(t,e))||qi(t=e.valueOf)&&!xi(n=gi(t,e))||r!=="string"&&qi(t=e.toString)&&!xi(n=gi(t,e)))return n;throw new yO("Can't convert object to primitive value")}});var re=i((UG,dl)=>{"use strict";dl.exports=!0});var yl=i((WG,hl)=>{"use strict";var ml=R(),bO=Object.defineProperty;hl.exports=function(e,r){try{bO(ml,e,{value:r,configurable:!0,writable:!0})}catch{ml[e]=r}return r}});var dt=i((HG,ql)=>{"use strict";var gO=re(),qO=R(),xO=yl(),bl="__core-js_shared__",gl=ql.exports=qO[bl]||xO(bl,{});(gl.versions||(gl.versions=[])).push({version:"3.48.0",mode:gO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vr=i((KG,wl)=>{"use strict";var xl=dt();wl.exports=function(e,r){return xl[e]||(xl[e]=r||{})}});var ne=i((zG,Sl)=>{"use strict";var wO=fr(),SO=Object;Sl.exports=function(e){return SO(wO(e))}});var V=i((VG,El)=>{"use strict";var EO=N(),CO=ne(),TO=EO({}.hasOwnProperty);El.exports=Object.hasOwn||function(r,t){return TO(CO(r),t)}});var Dr=i((YG,Cl)=>{"use strict";var OO=N(),kO=0,IO=Math.random(),_O=OO(1.1.toString);Cl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+_O(++kO+IO,36)}});var A=i((JG,Ol)=>{"use strict";var PO=R(),RO=vr(),Tl=V(),AO=Dr(),NO=pr(),MO=bi(),Br=PO.Symbol,wi=RO("wks"),jO=MO?Br.for||Br:Br&&Br.withoutSetter||AO;Ol.exports=function(e){return Tl(wi,e)||(wi[e]=NO&&Tl(Br,e)?Br[e]:jO("Symbol."+e)),wi[e]}});var Pl=i((QG,_l)=>{"use strict";var LO=G(),kl=$(),Il=Fr(),$O=kn(),FO=vl(),DO=A(),BO=TypeError,GO=DO("toPrimitive");_l.exports=function(e,r){if(!kl(e)||Il(e))return e;var t=$O(e,GO),n;if(t){if(r===void 0&&(r="default"),n=LO(t,e,r),!kl(n)||Il(n))return n;throw new BO("Can't convert object to primitive value")}return r===void 0&&(r="number"),FO(e,r)}});var In=i((XG,Rl)=>{"use strict";var UO=Pl(),WO=Fr();Rl.exports=function(e){var r=UO(e,"string");return WO(r)?r:r+""}});var _n=i((ZG,Nl)=>{"use strict";var HO=R(),Al=$(),Si=HO.document,KO=Al(Si)&&Al(Si.createElement);Nl.exports=function(e){return KO?Si.createElement(e):{}}});var Ei=i((e8,Ml)=>{"use strict";var zO=K(),VO=P(),YO=_n();Ml.exports=!zO&&!VO(function(){return Object.defineProperty(YO("div"),"a",{get:function(){return 7}}).a!==7})});var mt=i(Ll=>{"use strict";var JO=K(),QO=G(),XO=vi(),ZO=Qe(),ek=Ae(),rk=In(),tk=V(),nk=Ei(),jl=Object.getOwnPropertyDescriptor;Ll.f=JO?jl:function(r,t){if(r=ek(r),t=rk(t),nk)try{return jl(r,t)}catch{}if(tk(r,t))return ZO(!QO(XO.f,r,t),r[t])}});var Ci=i((t8,$l)=>{"use strict";var ak=P(),ik=M(),ok=/#|\.prototype\./,ht=function(e,r){var t=sk[uk(e)];return t===lk?!0:t===ck?!1:ik(r)?ak(r):!!r},uk=ht.normalize=function(e){return String(e).replace(ok,".").toLowerCase()},sk=ht.data={},ck=ht.NATIVE="N",lk=ht.POLYFILL="P";$l.exports=ht});var Q=i((n8,Dl)=>{"use strict";var Fl=vt(),fk=D(),pk=Mr(),vk=Fl(Fl.bind);Dl.exports=function(e,r){return fk(e),r===void 0?e:pk?vk(e,r):function(){return e.apply(r,arguments)}}});var Ti=i((a8,Bl)=>{"use strict";var dk=K(),mk=P();Bl.exports=dk&&mk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var ee=i((i8,Gl)=>{"use strict";var hk=$(),yk=String,bk=TypeError;Gl.exports=function(e){if(hk(e))return e;throw new bk(yk(e)+" is not an object")}});var ae=i(Wl=>{"use strict";var gk=K(),qk=Ei(),xk=Ti(),Pn=ee(),Ul=In(),wk=TypeError,Oi=Object.defineProperty,Sk=Object.getOwnPropertyDescriptor,ki="enumerable",Ii="configurable",_i="writable";Wl.f=gk?xk?function(r,t,n){if(Pn(r),t=Ul(t),Pn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&_i in n&&!n[_i]){var a=Sk(r,t);a&&a[_i]&&(r[t]=n.value,n={configurable:Ii in n?n[Ii]:a[Ii],enumerable:ki in n?n[ki]:a[ki],writable:!1})}return Oi(r,t,n)}:Oi:function(r,t,n){if(Pn(r),t=Ul(t),Pn(n),qk)try{return Oi(r,t,n)}catch{}if("get"in n||"set"in n)throw new wk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((u8,Hl)=>{"use strict";var Ek=K(),Ck=ae(),Tk=Qe();Hl.exports=Ek?function(e,r,t){return Ck.f(e,r,Tk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((s8,zl)=>{"use strict";var yt=R(),Ok=jr(),kk=vt(),Ik=M(),_k=mt().f,Pk=Ci(),Gr=J(),Rk=Q(),Ur=Oe(),Kl=V();dt();var Ak=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return Ok(e,this,arguments)};return r.prototype=e.prototype,r};zl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?yt:a?yt[t]:yt[t]&&yt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,x,b;for(v in r)l=Pk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Kl(u,v),h=s[v],f&&(e.dontCallGetSet?(b=_k(u,v),m=b&&b.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=Rk(d,yt):e.wrap&&f?x=Ak(d):o&&Ik(d)?x=kk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,v,x),o&&(p=t+"Prototype",Kl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],v,d),e.real&&c&&(l||!c[v])&&Ur(c,v,d)))}});var Ne=i((c8,Vl)=>{"use strict";var Nk=Te();Vl.exports=Array.isArray||function(r){return Nk(r)==="Array"}});var Rn=i((l8,Jl)=>{"use strict";var Mk=A(),jk=Mk("toStringTag"),Yl={};Yl[jk]="z";Jl.exports=String(Yl)==="[object z]"});var bt=i((f8,Ql)=>{"use strict";var Lk=Rn(),$k=M(),An=Te(),Fk=A(),Dk=Fk("toStringTag"),Bk=Object,Gk=An(function(){return arguments}())==="Arguments",Uk=function(e,r){try{return e[r]}catch{}};Ql.exports=Lk?An:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Uk(r=Bk(e),Dk))=="string"?t:Gk?An(r):(n=An(r))==="Object"&&$k(r.callee)?"Arguments":n}});var Ri=i((p8,Xl)=>{"use strict";var Wk=N(),Hk=M(),Pi=dt(),Kk=Wk(Function.toString);Hk(Pi.inspectSource)||(Pi.inspectSource=function(e){return Kk(e)});Xl.exports=Pi.inspectSource});var qt=i((v8,nf)=>{"use strict";var zk=N(),Vk=P(),Zl=M(),Yk=bt(),Jk=z(),Qk=Ri(),ef=function(){},rf=Jk("Reflect","construct"),Ai=/^\s*(?:class|function)\b/,Xk=zk(Ai.exec),Zk=!Ai.test(ef),gt=function(r){if(!Zl(r))return!1;try{return rf(ef,[],r),!0}catch{return!1}},tf=function(r){if(!Zl(r))return!1;switch(Yk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Zk||!!Xk(Ai,Qk(r))}catch{return!0}};tf.sham=!0;nf.exports=!rf||Vk(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?tf:gt});var of=i((d8,af)=>{"use strict";var e1=Math.ceil,r1=Math.floor;af.exports=Math.trunc||function(r){var t=+r;return(t>0?r1:e1)(t)}});var Nn=i((m8,uf)=>{"use strict";var t1=of();uf.exports=function(e){var r=+e;return r!==r||r===0?0:t1(r)}});var Ni=i((h8,sf)=>{"use strict";var n1=Nn(),a1=Math.max,i1=Math.min;sf.exports=function(e,r){var t=n1(e);return t<0?a1(t+r,0):i1(t,r)}});var Mi=i((y8,cf)=>{"use strict";var o1=Nn(),u1=Math.min;cf.exports=function(e){var r=o1(e);return r>0?u1(r,9007199254740991):0}});var de=i((b8,lf)=>{"use strict";var s1=Mi();lf.exports=function(e){return s1(e.length)}});var Wr=i((g8,ff)=>{"use strict";var c1=K(),l1=ae(),f1=Qe();ff.exports=function(e,r,t){c1?l1.f(e,r,f1(0,t)):e[r]=t}});var Hr=i((q8,pf)=>{"use strict";var p1=K(),v1=Ne(),d1=TypeError,m1=Object.getOwnPropertyDescriptor,h1=p1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();pf.exports=h1?function(e,r){if(v1(e)&&!m1(e,"length").writable)throw new d1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=i((x8,vf)=>{"use strict";var y1=P(),b1=A(),g1=$r(),q1=b1("species");vf.exports=function(e){return g1>=51||!y1(function(){var r=[],t=r.constructor={};return t[q1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var dr=i((w8,df)=>{"use strict";var x1=N();df.exports=x1([].slice)});var yf=i(()=>{"use strict";var w1=q(),mf=Ne(),S1=qt(),E1=$(),hf=Ni(),C1=de(),T1=Ae(),O1=Wr(),k1=Hr(),I1=A(),_1=xt(),P1=dr(),R1=_1("slice"),A1=I1("species"),ji=Array,N1=Math.max;w1({target:"Array",proto:!0,forced:!R1},{slice:function(r,t){var n=T1(this),a=C1(n),o=hf(r,a),u=hf(t===void 0?a:t,a),s,c,l;if(mf(n)&&(s=n.constructor,S1(s)&&(s===ji||mf(s.prototype))?s=void 0:E1(s)&&(s=s[A1],s===null&&(s=void 0)),s===ji||s===void 0))return P1(n,o,u);for(c=new(s===void 0?ji:s)(N1(u-o,0)),l=0;o<u;o++,l++)o in n&&O1(c,l,n[o]);return k1(c,l),c}})});var se=i((C8,bf)=>{"use strict";var M1=R(),j1=J();bf.exports=function(e,r){var t=j1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=M1[e],o=a&&a.prototype;return o&&o[r]}});var qf=i((T8,gf)=>{"use strict";yf();var L1=se();gf.exports=L1("Array","slice")});var wf=i((O8,xf)=>{"use strict";var $1=H(),F1=qf(),Li=Array.prototype;xf.exports=function(e){var r=e.slice;return e===Li||$1(Li,e)&&r===Li.slice?F1:r}});var Ef=i((k8,Sf)=>{"use strict";var D1=wf();Sf.exports=D1});var Tf=i((I8,Cf)=>{"use strict";var B1=Ef();Cf.exports=B1});var kf=i((_8,Of)=>{"use strict";var G1=Tf();Of.exports=G1});var $i=i((P8,If)=>{"use strict";If.exports=kf()});var Kr=i((R8,_f)=>{_f.exports=$i()});var Ze=i((A8,Pf)=>{"use strict";var U1=bt(),W1=String;Pf.exports=function(e){if(U1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return W1(e)}});var Mf=i((N8,Nf)=>{"use strict";var Fi=N(),H1=Nn(),K1=Ze(),z1=fr(),V1=Fi("".charAt),Rf=Fi("".charCodeAt),Y1=Fi("".slice),Af=function(e){return function(r,t){var n=K1(z1(r)),a=H1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Rf(n,a),u<55296||u>56319||a+1===o||(s=Rf(n,a+1))<56320||s>57343?e?V1(n,a):u:e?Y1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};Nf.exports={codeAt:Af(!1),charAt:Af(!0)}});var $f=i((M8,Lf)=>{"use strict";var J1=R(),Q1=M(),jf=J1.WeakMap;Lf.exports=Q1(jf)&&/native code/.test(String(jf))});var wt=i((j8,Df)=>{"use strict";var X1=vr(),Z1=Dr(),Ff=X1("keys");Df.exports=function(e){return Ff[e]||(Ff[e]=Z1(e))}});var zr=i((L8,Bf)=>{"use strict";Bf.exports={}});var er=i(($8,Wf)=>{"use strict";var eI=$f(),Uf=R(),rI=$(),tI=Oe(),Di=V(),Bi=dt(),nI=wt(),aI=zr(),Gf="Object already initialized",Gi=Uf.TypeError,iI=Uf.WeakMap,Mn,St,jn,oI=function(e){return jn(e)?St(e):Mn(e,{})},uI=function(e){return function(r){var t;if(!rI(r)||(t=St(r)).type!==e)throw new Gi("Incompatible receiver, "+e+" required");return t}};eI||Bi.state?(qe=Bi.state||(Bi.state=new iI),qe.get=qe.get,qe.has=qe.has,qe.set=qe.set,Mn=function(e,r){if(qe.has(e))throw new Gi(Gf);return r.facade=e,qe.set(e,r),r},St=function(e){return qe.get(e)||{}},jn=function(e){return qe.has(e)}):(mr=nI("state"),aI[mr]=!0,Mn=function(e,r){if(Di(e,mr))throw new Gi(Gf);return r.facade=e,tI(e,mr,r),r},St=function(e){return Di(e,mr)?e[mr]:{}},jn=function(e){return Di(e,mr)});var qe,mr;Wf.exports={set:Mn,get:St,has:jn,enforce:oI,getterFor:uI}});var zf=i((F8,Kf)=>{"use strict";var Ui=K(),sI=V(),Hf=Function.prototype,cI=Ui&&Object.getOwnPropertyDescriptor,Wi=sI(Hf,"name"),lI=Wi&&function(){}.name==="something",fI=Wi&&(!Ui||Ui&&cI(Hf,"name").configurable);Kf.exports={EXISTS:Wi,PROPER:lI,CONFIGURABLE:fI}});var Hi=i((D8,Yf)=>{"use strict";var pI=Ae(),vI=Ni(),dI=de(),Vf=function(e){return function(r,t,n){var a=pI(r),o=dI(a);if(o===0)return!e&&-1;var u=vI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Yf.exports={includes:Vf(!0),indexOf:Vf(!1)}});var zi=i((B8,Qf)=>{"use strict";var mI=N(),Ki=V(),hI=Ae(),yI=Hi().indexOf,bI=zr(),Jf=mI([].push);Qf.exports=function(e,r){var t=hI(e),n=0,a=[],o;for(o in t)!Ki(bI,o)&&Ki(t,o)&&Jf(a,o);for(;r.length>n;)Ki(t,o=r[n++])&&(~yI(a,o)||Jf(a,o));return a}});var Ln=i((G8,Xf)=>{"use strict";Xf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var $n=i((U8,Zf)=>{"use strict";var gI=zi(),qI=Ln();Zf.exports=Object.keys||function(r){return gI(r,qI)}});var Vi=i(ep=>{"use strict";var xI=K(),wI=Ti(),SI=ae(),EI=ee(),CI=Ae(),TI=$n();ep.f=xI&&!wI?Object.defineProperties:function(r,t){EI(r);for(var n=CI(t),a=TI(t),o=a.length,u=0,s;o>u;)SI.f(r,s=a[u++],n[s]);return r}});var Yi=i((H8,rp)=>{"use strict";var OI=z();rp.exports=OI("document","documentElement")});var rr=i((K8,sp)=>{"use strict";var kI=ee(),II=Vi(),tp=Ln(),_I=zr(),PI=Yi(),RI=_n(),AI=wt(),np=">",ap="<",Qi="prototype",Xi="script",op=AI("IE_PROTO"),Ji=function(){},up=function(e){return ap+Xi+np+e+ap+"/"+Xi+np},ip=function(e){e.write(up("")),e.close();var r=e.parentWindow.Object;return e=null,r},NI=function(){var e=RI("iframe"),r="java"+Xi+":",t;return e.style.display="none",PI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(up("document.F=Object")),t.close(),t.F},Fn,Dn=function(){try{Fn=new ActiveXObject("htmlfile")}catch{}Dn=typeof document<"u"?document.domain&&Fn?ip(Fn):NI():ip(Fn);for(var e=tp.length;e--;)delete Dn[Qi][tp[e]];return Dn()};_I[op]=!0;sp.exports=Object.create||function(r,t){var n;return r!==null?(Ji[Qi]=kI(r),n=new Ji,Ji[Qi]=null,n[op]=r):n=Dn(),t===void 0?n:II.f(n,t)}});var Zi=i((z8,cp)=>{"use strict";var MI=P();cp.exports=!MI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((V8,fp)=>{"use strict";var jI=V(),LI=M(),$I=ne(),FI=wt(),DI=Zi(),lp=FI("IE_PROTO"),eo=Object,BI=eo.prototype;fp.exports=DI?eo.getPrototypeOf:function(e){var r=$I(e);if(jI(r,lp))return r[lp];var t=r.constructor;return LI(t)&&r instanceof t?t.prototype:r instanceof eo?BI:null}});var Me=i((Y8,pp)=>{"use strict";var GI=Oe();pp.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:GI(e,r,t),e}});var ao=i((J8,mp)=>{"use strict";var UI=P(),WI=M(),HI=$(),KI=rr(),vp=Et(),zI=Me(),VI=A(),YI=re(),no=VI("iterator"),dp=!1,je,ro,to;[].keys&&(to=[].keys(),"next"in to?(ro=vp(vp(to)),ro!==Object.prototype&&(je=ro)):dp=!0);var JI=!HI(je)||UI(function(){var e={};return je[no].call(e)!==e});JI?je={}:YI&&(je=KI(je));WI(je[no])||zI(je,no,function(){return this});mp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:dp}});var yp=i((Q8,hp)=>{"use strict";var QI=Rn(),XI=bt();hp.exports=QI?{}.toString:function(){return"[object "+XI(this)+"]"}});var Le=i((X8,gp)=>{"use strict";var ZI=Rn(),e_=ae().f,r_=Oe(),t_=V(),n_=yp(),a_=A(),bp=a_("toStringTag");gp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(t_(a,bp)||e_(a,bp,{configurable:!0,value:r}),n&&!ZI&&r_(a,"toString",n_))}});var hr=i((Z8,qp)=>{"use strict";qp.exports={}});var wp=i((eU,xp)=>{"use strict";var i_=ao().IteratorPrototype,o_=rr(),u_=Qe(),s_=Le(),c_=hr(),l_=function(){return this};xp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=o_(i_,{next:u_(+!n,t)}),s_(e,a,!1,!0),c_[a]=l_,e}});var Ep=i((rU,Sp)=>{"use strict";var f_=N(),p_=D();Sp.exports=function(e,r,t){try{return f_(p_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Tp=i((tU,Cp)=>{"use strict";var v_=$();Cp.exports=function(e){return v_(e)||e===null}});var kp=i((nU,Op)=>{"use strict";var d_=Tp(),m_=String,h_=TypeError;Op.exports=function(e){if(d_(e))return e;throw new h_("Can't set "+m_(e)+" as a prototype")}});var Ct=i((aU,Ip)=>{"use strict";var y_=Ep(),b_=$(),g_=fr(),q_=kp();Ip.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=y_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return g_(a),q_(o),b_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Un=i((iU,Fp)=>{"use strict";var x_=q(),w_=G(),Bn=re(),Lp=zf(),S_=M(),E_=wp(),_p=Et(),Pp=Ct(),C_=Le(),T_=Oe(),io=Me(),O_=A(),Rp=hr(),$p=ao(),k_=Lp.PROPER,I_=Lp.CONFIGURABLE,Ap=$p.IteratorPrototype,Gn=$p.BUGGY_SAFARI_ITERATORS,Tt=O_("iterator"),Np="keys",Ot="values",Mp="entries",jp=function(){return this};Fp.exports=function(e,r,t,n,a,o,u){E_(t,r,n);var s=function(b){if(b===a&&v)return v;if(!Gn&&b&&b in f)return f[b];switch(b){case Np:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case Mp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],v=!Gn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,x;if(d&&(h=_p(d.call(new e)),h!==Object.prototype&&h.next&&(!Bn&&_p(h)!==Ap&&(Pp?Pp(h,Ap):S_(h[Tt])||io(h,Tt,jp)),C_(h,c,!0,!0),Bn&&(Rp[c]=jp))),k_&&a===Ot&&p&&p.name!==Ot&&(!Bn&&I_?T_(f,"name",Ot):(l=!0,v=function(){return w_(p,this)})),a)if(m={values:s(Ot),keys:o?v:s(Np),entries:s(Mp)},u)for(x in m)(Gn||l||!(x in f))&&io(f,x,m[x]);else x_({target:r,proto:!0,forced:Gn||l},m);return(!Bn||u)&&f[Tt]!==v&&io(f,Tt,v,{name:a}),Rp[r]=v,m}});var Wn=i((oU,Dp)=>{"use strict";Dp.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var __=Mf().charAt,P_=Ze(),Gp=er(),R_=Un(),Bp=Wn(),Up="String Iterator",A_=Gp.set,N_=Gp.getterFor(Up);R_(String,"String",function(e){A_(this,{type:Up,string:P_(e),index:0})},function(){var r=N_(this),t=r.string,n=r.index,a;return n>=t.length?Bp(void 0,!0):(a=__(t,n),r.index+=a.length,Bp(a,!1))})});var oo=i((cU,Hp)=>{"use strict";var M_=G(),Wp=ee(),j_=kn();Hp.exports=function(e,r,t){var n,a;Wp(e);try{if(n=j_(e,"return"),!n){if(r==="throw")throw t;return t}n=M_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Wp(n),t}});var zp=i((lU,Kp)=>{"use strict";var L_=ee(),$_=oo();Kp.exports=function(e,r,t,n){try{return n?r(L_(t)[0],t[1]):r(t)}catch(a){$_(e,"throw",a)}}});var uo=i((fU,Vp)=>{"use strict";var F_=A(),D_=hr(),B_=F_("iterator"),G_=Array.prototype;Vp.exports=function(e){return e!==void 0&&(D_.Array===e||G_[B_]===e)}});var kt=i((pU,Jp)=>{"use strict";var U_=bt(),Yp=kn(),W_=lr(),H_=hr(),K_=A(),z_=K_("iterator");Jp.exports=function(e){if(!W_(e))return Yp(e,z_)||Yp(e,"@@iterator")||H_[U_(e)]}});var Hn=i((vU,Qp)=>{"use strict";var V_=G(),Y_=D(),J_=ee(),Q_=Xe(),X_=kt(),Z_=TypeError;Qp.exports=function(e,r){var t=arguments.length<2?X_(e):r;if(Y_(t))return J_(V_(t,e));throw new Z_(Q_(e)+" is not iterable")}});var rv=i((dU,ev)=>{"use strict";var eP=Q(),rP=G(),tP=ne(),nP=zp(),aP=uo(),iP=qt(),oP=de(),Xp=Wr(),uP=Hr(),sP=Hn(),cP=kt(),Zp=Array;ev.exports=function(r){var t=tP(r),n=iP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=eP(o,a>2?arguments[2]:void 0));var s=cP(t),c=0,l,f,p,v,d,h;if(s&&!(this===Zp&&aP(s)))for(f=n?new this:[],v=sP(t,s),d=v.next;!(p=rP(d,v)).done;c++)h=u?nP(v,o,[p.value,c],!0):p.value,Xp(f,c,h);else for(l=oP(t),f=n?new this(l):Zp(l);l>c;c++)h=u?o(t[c],c):t[c],Xp(f,c,h);return uP(f,c),f}});var co=i((mU,iv)=>{"use strict";var lP=A(),nv=lP("iterator"),av=!1;try{tv=0,so={next:function(){return{done:!!tv++}},return:function(){av=!0}},so[nv]=function(){return this},Array.from(so,function(){throw 2})}catch{}var tv,so;iv.exports=function(e,r){try{if(!r&&!av)return!1}catch{return!1}var t=!1;try{var n={};n[nv]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var ov=i(()=>{"use strict";var fP=q(),pP=rv(),vP=co(),dP=!vP(function(e){Array.from(e)});fP({target:"Array",stat:!0,forced:dP},{from:pP})});var sv=i((bU,uv)=>{"use strict";yr();ov();var mP=J();uv.exports=mP.Array.from});var lv=i((gU,cv)=>{"use strict";var hP=sv();cv.exports=hP});var pv=i((qU,fv)=>{"use strict";var yP=lv();fv.exports=yP});var dv=i((xU,vv)=>{"use strict";var bP=pv();vv.exports=bP});var lo=i((wU,mv)=>{"use strict";mv.exports=dv()});var Kn=i((SU,hv)=>{hv.exports=lo()});var It=i((EU,yv)=>{"use strict";var gP=TypeError,qP=9007199254740991;yv.exports=function(e){if(e>qP)throw gP("Maximum allowed index exceeded");return e}});var xv=i((CU,qv)=>{"use strict";var bv=Ne(),xP=qt(),wP=$(),SP=A(),EP=SP("species"),gv=Array;qv.exports=function(e){var r;return bv(e)&&(r=e.constructor,xP(r)&&(r===gv||bv(r.prototype))?r=void 0:wP(r)&&(r=r[EP],r===null&&(r=void 0))),r===void 0?gv:r}});var zn=i((TU,wv)=>{"use strict";var CP=xv();wv.exports=function(e,r){return new(CP(e))(r===0?0:r)}});var fo=i(()=>{"use strict";var TP=q(),OP=P(),kP=Ne(),IP=$(),_P=ne(),PP=de(),Sv=It(),Ev=Wr(),RP=Hr(),AP=zn(),NP=xt(),MP=A(),jP=$r(),Cv=MP("isConcatSpreadable"),LP=jP>=51||!OP(function(){var e=[];return e[Cv]=!1,e.concat()[0]!==e}),$P=function(e){if(!IP(e))return!1;var r=e[Cv];return r!==void 0?!!r:kP(e)},FP=!LP||!NP("concat");TP({target:"Array",proto:!0,arity:1,forced:FP},{concat:function(r){var t=_P(this),n=AP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],$P(l))for(c=PP(l),Sv(a+c),u=0;u<c;u++,a++)u in l&&Ev(n,a,l[u]);else Sv(a+1),Ev(n,a++,l);return RP(n,a),n}})});var _t=i(()=>{});var Pt=i(Tv=>{"use strict";var DP=zi(),BP=Ln(),GP=BP.concat("length","prototype");Tv.f=Object.getOwnPropertyNames||function(r){return DP(r,GP)}});var po=i((RU,Iv)=>{"use strict";var UP=Te(),WP=Ae(),Ov=Pt().f,HP=dr(),kv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],KP=function(e){try{return Ov(e)}catch{return HP(kv)}};Iv.exports.f=function(r){return kv&&UP(r)==="Window"?KP(r):Ov(WP(r))}});var Vn=i(_v=>{"use strict";_v.f=Object.getOwnPropertySymbols});var Yn=i((NU,Pv)=>{"use strict";var zP=ae();Pv.exports=function(e,r,t){return zP.f(e,r,t)}});var Vr=i(Rv=>{"use strict";var VP=A();Rv.f=VP});var j=i((jU,Nv)=>{"use strict";var Av=J(),YP=V(),JP=Vr(),QP=ae().f;Nv.exports=function(e){var r=Av.Symbol||(Av.Symbol={});YP(r,e)||QP(r,e,{value:JP.f(e)})}});var vo=i((LU,Mv)=>{"use strict";var XP=G(),ZP=z(),eR=A(),rR=Me();Mv.exports=function(){var e=ZP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=eR("toPrimitive");r&&!r[n]&&rR(r,n,function(a){return XP(t,this)},{arity:1})}});var Rt=i(($U,Lv)=>{"use strict";var tR=Q(),nR=Tn(),aR=ne(),iR=de(),jv=zn(),mo=Wr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=aR(c),v=nR(p),d=iR(v),h=tR(l,f),m=0,x=0,b=r?jv(c,d):t||u?jv(c,0):void 0,g,O;d>m;m++)if((s||m in v)&&(g=v[m],O=h(g,m,p),e))if(r)mo(b,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:mo(b,x++,g)}else switch(e){case 4:return!1;case 7:mo(b,x++,g)}return o?-1:n||a?a:b}};Lv.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var ed=i(()=>{"use strict";var Jn=q(),Mt=R(),Eo=G(),oR=N(),uR=re(),Yr=K(),Jr=pr(),sR=P(),Y=V(),cR=H(),go=ee(),Qn=Ae(),Co=In(),lR=Ze(),qo=Qe(),Qr=rr(),Dv=$n(),fR=Pt(),Bv=po(),pR=Vn(),Gv=mt(),Uv=ae(),vR=Vi(),Wv=vi(),ho=Me(),dR=Yn(),To=vr(),mR=wt(),Hv=zr(),$v=Dr(),hR=A(),yR=Vr(),bR=j(),gR=vo(),qR=Le(),Kv=er(),Xn=Rt().forEach,ie=mR("hidden"),Zn="Symbol",Nt="prototype",xR=Kv.set,Fv=Kv.getterFor(Zn),me=Object[Nt],br=Mt.Symbol,At=br&&br[Nt],wR=Mt.RangeError,SR=Mt.TypeError,yo=Mt.QObject,zv=Gv.f,gr=Uv.f,Vv=Bv.f,ER=Wv.f,Yv=oR([].push),$e=To("symbols"),jt=To("op-symbols"),CR=To("wks"),xo=!yo||!yo[Nt]||!yo[Nt].findChild,Jv=function(e,r,t){var n=zv(me,r);n&&delete me[r],gr(e,r,t),n&&e!==me&&gr(me,r,n)},wo=Yr&&sR(function(){return Qr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?Jv:gr,bo=function(e,r){var t=$e[e]=Qr(At);return xR(t,{type:Zn,tag:e,description:r}),Yr||(t.description=r),t},ea=function(r,t,n){r===me&&ea(jt,t,n),go(r);var a=Co(t);return go(n),Y($e,a)?(n.enumerable?(Y(r,ie)&&r[ie][a]&&(r[ie][a]=!1),n=Qr(n,{enumerable:qo(0,!1)})):(Y(r,ie)||gr(r,ie,qo(1,Qr(null))),r[ie][a]=!0),wo(r,a,n)):gr(r,a,n)},Oo=function(r,t){go(r);var n=Qn(t),a=Dv(n).concat(Zv(n));return Xn(a,function(o){(!Yr||Eo(So,n,o))&&ea(r,o,n[o])}),r},TR=function(r,t){return t===void 0?Qr(r):Oo(Qr(r),t)},So=function(r){var t=Co(r),n=Eo(ER,this,t);return this===me&&Y($e,t)&&!Y(jt,t)?!1:n||!Y(this,t)||!Y($e,t)||Y(this,ie)&&this[ie][t]?n:!0},Qv=function(r,t){var n=Qn(r),a=Co(t);if(!(n===me&&Y($e,a)&&!Y(jt,a))){var o=zv(n,a);return o&&Y($e,a)&&!(Y(n,ie)&&n[ie][a])&&(o.enumerable=!0),o}},Xv=function(r){var t=Vv(Qn(r)),n=[];return Xn(t,function(a){!Y($e,a)&&!Y(Hv,a)&&Yv(n,a)}),n},Zv=function(e){var r=e===me,t=Vv(r?jt:Qn(e)),n=[];return Xn(t,function(a){Y($e,a)&&(!r||Y(me,a))&&Yv(n,$e[a])}),n};Jr||(br=function(){if(cR(At,this))throw new SR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:lR(arguments[0]),t=$v(r),n=function(a){var o=this===void 0?Mt:this;o===me&&Eo(n,jt,a),Y(o,ie)&&Y(o[ie],t)&&(o[ie][t]=!1);var u=qo(1,a);try{wo(o,t,u)}catch(s){if(!(s instanceof wR))throw s;Jv(o,t,u)}};return Yr&&xo&&wo(me,t,{configurable:!0,set:n}),bo(t,r)},At=br[Nt],ho(At,"toString",function(){return Fv(this).tag}),ho(br,"withoutSetter",function(e){return bo($v(e),e)}),Wv.f=So,Uv.f=ea,vR.f=Oo,Gv.f=Qv,fR.f=Bv.f=Xv,pR.f=Zv,yR.f=function(e){return bo(hR(e),e)},Yr&&(dR(At,"description",{configurable:!0,get:function(){return Fv(this).description}}),uR||ho(me,"propertyIsEnumerable",So,{unsafe:!0})));Jn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:br});Xn(Dv(CR),function(e){bR(e)});Jn({target:Zn,stat:!0,forced:!Jr},{useSetter:function(){xo=!0},useSimple:function(){xo=!1}});Jn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:TR,defineProperty:ea,defineProperties:Oo,getOwnPropertyDescriptor:Qv});Jn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:Xv});gR();qR(br,Zn);Hv[ie]=!0});var ko=i((BU,rd)=>{"use strict";var OR=pr();rd.exports=OR&&!!Symbol.for&&!!Symbol.keyFor});var nd=i(()=>{"use strict";var kR=q(),IR=z(),_R=V(),PR=Ze(),td=vr(),RR=ko(),Io=td("string-to-symbol-registry"),AR=td("symbol-to-string-registry");kR({target:"Symbol",stat:!0,forced:!RR},{for:function(e){var r=PR(e);if(_R(Io,r))return Io[r];var t=IR("Symbol")(r);return Io[r]=t,AR[t]=r,t}})});var id=i(()=>{"use strict";var NR=q(),MR=V(),jR=Fr(),LR=Xe(),$R=vr(),FR=ko(),ad=$R("symbol-to-string-registry");NR({target:"Symbol",stat:!0,forced:!FR},{keyFor:function(r){if(!jR(r))throw new TypeError(LR(r)+" is not a symbol");if(MR(ad,r))return ad[r]}})});var ud=i((KU,od)=>{"use strict";var DR=$(),BR=er().get;od.exports=function(r){if(!DR(r))return!1;var t=BR(r);return!!t&&t.type==="RawJSON"}});var pd=i((zU,fd)=>{"use strict";var _o=N(),GR=V(),ra=SyntaxError,UR=parseInt,WR=String.fromCharCode,HR=_o("".charAt),sd=_o("".slice),cd=_o(/./.exec),ld={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},KR=/^[\da-f]{4}$/i,zR=/^[\u0000-\u001F]$/;fd.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=HR(e,r);if(a==="\\"){var o=sd(e,r,r+2);if(GR(ld,o))n+=ld[o],r+=2;else if(o==="\\u"){r+=2;var u=sd(e,r,r+4);if(!cd(KR,u))throw new ra("Bad Unicode escape at: "+r);n+=WR(UR(u,16)),r+=4}else throw new ra('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(cd(zR,a))throw new ra("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ra("Unterminated string at: "+r);return{value:n,end:r}}});var dd=i((VU,vd)=>{"use strict";var VR=P();vd.exports=!VR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var kd=i(()=>{"use strict";var YR=q(),wd=z(),JR=jr(),Sd=G(),qr=N(),Ed=P(),md=Ne(),na=M(),QR=ud(),hd=Fr(),yd=Te(),XR=Ze(),ZR=dr(),eA=pd(),rA=Dr(),tA=pr(),Po=dd(),Cd=String,nr=wd("JSON","stringify"),ta=qr(/./.exec),Ao=qr("".charAt),nA=qr("".charCodeAt),aA=qr("".replace),Ro=qr("".slice),No=qr([].push),iA=qr(1.1.toString),oA=/[\uD800-\uDFFF]/g,bd=/^[\uD800-\uDBFF]$/,gd=/^[\uDC00-\uDFFF]$/,Mo=rA(),qd=Mo.length,Td=!tA||Ed(function(){var e=wd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),xd=Ed(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),uA=Td?function(e,r){var t=ZR(arguments),n=Od(r);if(!(!na(n)&&(e===void 0||hd(e))))return t[1]=function(a,o){if(na(n)&&(o=Sd(n,this,Cd(a),o)),!hd(o))return o},JR(nr,null,t)}:nr,sA=function(e,r,t){var n=Ao(t,r-1),a=Ao(t,r+1);return ta(bd,e)&&!ta(gd,a)||ta(gd,e)&&!ta(bd,n)?"\\u"+iA(nA(e,0),16):e},Od=function(e){if(na(e))return e;if(md(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?No(t,a):(typeof a=="number"||yd(a)==="Number"||yd(a)==="String")&&No(t,XR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(md(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&YR({target:"JSON",stat:!0,arity:3,forced:Td||xd||!Po},{stringify:function(r,t,n){var a=Od(t),o=[],u=uA(r,function(d,h){var m=na(a)?Sd(a,this,Cd(d),h):h;return!Po&&QR(m)?Mo+(No(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(xd&&(u=aA(u,oA,sA)),Po))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Ao(u,l);if(f==='"'){var p=eA(u,++l).end-1,v=Ro(u,l,p);s+=Ro(v,0,qd)===Mo?o[Ro(v,qd)]:'"'+v+'"',l=p}else s+=f}return s}})});var _d=i(()=>{"use strict";var cA=q(),lA=pr(),fA=P(),Id=Vn(),pA=ne(),vA=!lA||fA(function(){Id.f(1)});cA({target:"Object",stat:!0,forced:vA},{getOwnPropertySymbols:function(r){var t=Id.f;return t?t(pA(r)):[]}})});var Pd=i(()=>{"use strict";ed();nd();id();kd();_d()});var jo=i(()=>{"use strict";var dA=j();dA("asyncDispose")});var Lo=i(()=>{"use strict";var mA=j();mA("asyncIterator")});var Rd=i(()=>{});var $o=i(()=>{"use strict";var hA=j();hA("dispose")});var Ad=i(()=>{"use strict";var yA=j();yA("hasInstance")});var Nd=i(()=>{"use strict";var bA=j();bA("isConcatSpreadable")});var Fo=i(()=>{"use strict";var gA=j();gA("iterator")});var Md=i(()=>{"use strict";var qA=j();qA("match")});var jd=i(()=>{"use strict";var xA=j();xA("matchAll")});var Ld=i(()=>{"use strict";var wA=j();wA("replace")});var $d=i(()=>{"use strict";var SA=j();SA("search")});var Fd=i(()=>{"use strict";var EA=j();EA("species")});var Dd=i(()=>{"use strict";var CA=j();CA("split")});var Do=i(()=>{"use strict";var TA=j(),OA=vo();TA("toPrimitive");OA()});var Bd=i(()=>{"use strict";var kA=z(),IA=j(),_A=Le();IA("toStringTag");_A(kA("Symbol"),"Symbol")});var Gd=i(()=>{"use strict";var PA=j();PA("unscopables")});var Ud=i(()=>{"use strict";var RA=R(),AA=Le();AA(RA.JSON,"JSON",!0)});var Wd=i(()=>{});var Hd=i(()=>{});var zd=i((FW,Kd)=>{"use strict";fo();_t();Pd();jo();Lo();Rd();$o();Ad();Nd();Fo();Md();jd();Ld();$d();Fd();Dd();Do();Bd();Gd();Ud();Wd();Hd();var NA=J();Kd.exports=NA.Symbol});var Bo=i((DW,Vd)=>{"use strict";Vd.exports=function(){}});var xr=i((BW,Zd)=>{"use strict";var MA=Ae(),Go=Bo(),Yd=hr(),Qd=er(),jA=ae().f,LA=Un(),aa=Wn(),$A=re(),FA=K(),Xd="Array Iterator",DA=Qd.set,BA=Qd.getterFor(Xd);Zd.exports=LA(Array,"Array",function(e,r){DA(this,{type:Xd,target:MA(e),index:0,kind:r})},function(){var e=BA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,aa(void 0,!0);switch(e.kind){case"keys":return aa(t,!1);case"values":return aa(r[t],!1)}return aa([t,r[t]],!1)},"values");var Jd=Yd.Arguments=Yd.Array;Go("keys");Go("values");Go("entries");if(!$A&&FA&&Jd.name!=="values")try{jA(Jd,"name",{value:"values"})}catch{}});var rm=i((GW,em)=>{"use strict";em.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var GA=rm(),UA=R(),WA=Le(),tm=hr();for(ia in GA)WA(UA[ia],ia),tm[ia]=tm.Array;var ia});var am=i((HW,nm)=>{"use strict";var HA=zd();wr();nm.exports=HA});var um=i(()=>{"use strict";var KA=A(),zA=ae().f,im=KA("metadata"),om=Function.prototype;om[im]===void 0&&zA(om,im,{value:null})});var sm=i(()=>{"use strict";jo()});var cm=i(()=>{"use strict";$o()});var lm=i(()=>{"use strict";var VA=j();VA("metadata")});var pm=i((eH,fm)=>{"use strict";var YA=am();um();sm();cm();lm();fm.exports=YA});var Wo=i((rH,vm)=>{"use strict";var JA=z(),QA=N(),Uo=JA("Symbol"),XA=Uo.keyFor,ZA=QA(Uo.prototype.valueOf);vm.exports=Uo.isRegisteredSymbol||function(r){try{return XA(ZA(r))!==void 0}catch{return!1}}});var dm=i(()=>{"use strict";var e2=q(),r2=Wo();e2({target:"Symbol",stat:!0},{isRegisteredSymbol:r2})});var zo=i((aH,qm)=>{"use strict";var t2=vr(),bm=z(),n2=N(),a2=Fr(),i2=A(),ua=bm("Symbol"),mm=ua.isWellKnownSymbol,gm=bm("Object","getOwnPropertyNames"),o2=n2(ua.prototype.valueOf),hm=t2("wks");for(oa=0,Ho=gm(ua),ym=Ho.length;oa<ym;oa++)try{Ko=Ho[oa],a2(ua[Ko])&&i2(Ko)}catch{}var Ko,oa,Ho,ym;qm.exports=function(r){if(mm&&mm(r))return!0;try{for(var t=o2(r),n=0,a=gm(hm),o=a.length;n<o;n++)if(hm[a[n]]==t)return!0}catch{}return!1}});var xm=i(()=>{"use strict";var u2=q(),s2=zo();u2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:s2})});var wm=i(()=>{"use strict";var c2=j();c2("customMatcher")});var Sm=i(()=>{"use strict";var l2=j();l2("observable")});var Em=i(()=>{"use strict";var f2=q(),p2=Wo();f2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:p2})});var Cm=i(()=>{"use strict";var v2=q(),d2=zo();v2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:d2})});var Tm=i(()=>{"use strict";var m2=j();m2("matcher")});var Om=i(()=>{"use strict";var h2=j();h2("metadataKey")});var km=i(()=>{"use strict";var y2=j();y2("patternMatch")});var Im=i(()=>{"use strict";var b2=j();b2("replaceAll")});var Pm=i((SH,_m)=>{"use strict";var g2=pm();dm();xm();wm();Sm();Em();Cm();Tm();Om();km();Im();_m.exports=g2});var ke=i((EH,Rm)=>{"use strict";Rm.exports=Pm()});var sa=i((CH,Am)=>{Am.exports=ke()});var Mm=i((TH,Nm)=>{"use strict";xr();yr();var q2=kt();Nm.exports=q2});var Lm=i((OH,jm)=>{"use strict";var x2=Mm();wr();jm.exports=x2});var Fm=i((kH,$m)=>{"use strict";var w2=Lm();$m.exports=w2});var Bm=i((IH,Dm)=>{"use strict";var S2=Fm();Dm.exports=S2});var Vo=i((_H,Gm)=>{"use strict";Gm.exports=Bm()});var ca=i((PH,Um)=>{Um.exports=Vo()});var Hm=i((RH,Wm)=>{"use strict";xr();yr();var E2=Hn();Wm.exports=E2});var zm=i((AH,Km)=>{"use strict";var C2=Hm();wr();Km.exports=C2});var Ym=i((NH,Vm)=>{"use strict";var T2=zm();Vm.exports=T2});var Qm=i((MH,Jm)=>{"use strict";var O2=Ym();Jm.exports=O2});var Zm=i((jH,Xm)=>{"use strict";Xm.exports=Qm()});var la=i((LH,eh)=>{eh.exports=Zm()});var th=i(($H,rh)=>{"use strict";var k2=z(),I2=N(),_2=Pt(),P2=Vn(),R2=ee(),A2=I2([].concat);rh.exports=k2("Reflect","ownKeys")||function(r){var t=_2.f(R2(r)),n=P2.f;return n?A2(t,n(r)):t}});var ih=i((FH,ah)=>{"use strict";var nh=V(),N2=th(),M2=mt(),j2=ae();ah.exports=function(e,r,t){for(var n=N2(r),a=j2.f,o=M2.f,u=0;u<n.length;u++){var s=n[u];!nh(e,s)&&!(t&&nh(t,s))&&a(e,s,o(r,s))}}});var uh=i((DH,oh)=>{"use strict";var L2=$(),$2=Oe();oh.exports=function(e,r){L2(r)&&"cause"in r&&$2(e,"cause",r.cause)}});var fh=i((BH,lh)=>{"use strict";var F2=N(),sh=Error,D2=F2("".replace),B2=function(e){return String(new sh(e).stack)}("zxcasd"),ch=/\n\s*at [^:]*:[^\n]*/,G2=ch.test(B2);lh.exports=function(e,r){if(G2&&typeof e=="string"&&!sh.prepareStackTrace)for(;r--;)e=D2(e,ch,"");return e}});var vh=i((GH,ph)=>{"use strict";var U2=P(),W2=Qe();ph.exports=!U2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",W2(1,7)),e.stack!==7):!0})});var hh=i((UH,mh)=>{"use strict";var H2=Oe(),K2=fh(),z2=vh(),dh=Error.captureStackTrace;mh.exports=function(e,r,t,n){z2&&(dh?dh(e,r):H2(e,"stack",K2(t,n)))}});var he=i((WH,qh)=>{"use strict";var V2=Q(),Y2=G(),J2=ee(),Q2=Xe(),X2=uo(),Z2=de(),yh=H(),eN=Hn(),rN=kt(),bh=oo(),tN=TypeError,fa=function(e,r){this.stopped=e,this.result=r},gh=fa.prototype;qh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=V2(r,n),l,f,p,v,d,h,m,x=function(g){return l&&bh(l,"normal"),new fa(!0,g)},b=function(g){return a?(J2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=rN(e),!f)throw new tN(Q2(e)+" is not iterable");if(X2(f)){for(p=0,v=Z2(e);v>p;p++)if(d=b(e[p]),d&&yh(gh,d))return d;return new fa(!1)}l=eN(e,f)}for(h=o?e.next:l.next;!(m=Y2(h,l)).done;){try{d=b(m.value)}catch(g){bh(l,"throw",g)}if(typeof d=="object"&&d&&yh(gh,d))return d}return new fa(!1)}});var wh=i((HH,xh)=>{"use strict";var nN=Ze();xh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:nN(e)}});var Eh=i(()=>{"use strict";var aN=q(),iN=H(),oN=Et(),pa=Ct(),uN=ih(),Sh=rr(),Yo=Oe(),Jo=Qe(),sN=uh(),cN=hh(),lN=he(),fN=wh(),pN=A(),vN=pN("toStringTag"),va=Error,dN=[].push,Xr=function(r,t){var n=iN(Qo,this),a;pa?a=pa(new va,n?oN(this):Qo):(a=n?this:Sh(Qo),Yo(a,vN,"Error")),t!==void 0&&Yo(a,"message",fN(t)),cN(a,Xr,a.stack,1),arguments.length>2&&sN(a,arguments[2]);var o=[];return lN(r,dN,{that:o}),Yo(a,"errors",o),a};pa?pa(Xr,va):uN(Xr,va,{name:!0});var Qo=Xr.prototype=Sh(va.prototype,{constructor:Jo(1,Xr),message:Jo(1,""),name:Jo(1,"AggregateError")});aN({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Xo=i(()=>{"use strict";Eh()});var Zo=i((JH,Ch)=>{"use strict";var Lt=R(),mN=Lr(),hN=Te(),da=function(e){return mN.slice(0,e.length)===e};Ch.exports=function(){return da("Bun/")?"BUN":da("Cloudflare-Workers")?"CLOUDFLARE":da("Deno/")?"DENO":da("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":hN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var $t=i((QH,Th)=>{"use strict";var yN=Zo();Th.exports=yN==="NODE"});var eu=i((XH,kh)=>{"use strict";var bN=z(),gN=Yn(),qN=A(),xN=K(),Oh=qN("species");kh.exports=function(e){var r=bN(e);xN&&r&&!r[Oh]&&gN(r,Oh,{configurable:!0,get:function(){return this}})}});var ma=i((ZH,Ih)=>{"use strict";var wN=H(),SN=TypeError;Ih.exports=function(e,r){if(wN(r,e))return e;throw new SN("Incorrect invocation")}});var ru=i((eK,_h)=>{"use strict";var EN=qt(),CN=Xe(),TN=TypeError;_h.exports=function(e){if(EN(e))return e;throw new TN(CN(e)+" is not a constructor")}});var tu=i((rK,Rh)=>{"use strict";var Ph=ee(),ON=ru(),kN=lr(),IN=A(),_N=IN("species");Rh.exports=function(e,r){var t=Ph(e).constructor,n;return t===void 0||kN(n=Ph(t)[_N])?r:ON(n)}});var Nh=i((tK,Ah)=>{"use strict";var PN=TypeError;Ah.exports=function(e,r){if(e<r)throw new PN("Not enough arguments");return e}});var nu=i((nK,Mh)=>{"use strict";var RN=Lr();Mh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(RN)});var pu=i((aK,Wh)=>{"use strict";var ce=R(),AN=jr(),NN=Q(),jh=M(),MN=V(),Uh=P(),Lh=Yi(),jN=dr(),$h=_n(),LN=Nh(),$N=nu(),FN=$t(),cu=ce.setImmediate,lu=ce.clearImmediate,DN=ce.process,au=ce.Dispatch,BN=ce.Function,Fh=ce.MessageChannel,GN=ce.String,iu=0,Ft={},Dh="onreadystatechange",Dt,Sr,ou,uu;Uh(function(){Dt=ce.location});var fu=function(e){if(MN(Ft,e)){var r=Ft[e];delete Ft[e],r()}},su=function(e){return function(){fu(e)}},Bh=function(e){fu(e.data)},Gh=function(e){ce.postMessage(GN(e),Dt.protocol+"//"+Dt.host)};(!cu||!lu)&&(cu=function(r){LN(arguments.length,1);var t=jh(r)?r:BN(r),n=jN(arguments,1);return Ft[++iu]=function(){AN(t,void 0,n)},Sr(iu),iu},lu=function(r){delete Ft[r]},FN?Sr=function(e){DN.nextTick(su(e))}:au&&au.now?Sr=function(e){au.now(su(e))}:Fh&&!$N?(ou=new Fh,uu=ou.port2,ou.port1.onmessage=Bh,Sr=NN(uu.postMessage,uu)):ce.addEventListener&&jh(ce.postMessage)&&!ce.importScripts&&Dt&&Dt.protocol!=="file:"&&!Uh(Gh)?(Sr=Gh,ce.addEventListener("message",Bh,!1)):Dh in $h("script")?Sr=function(e){Lh.appendChild($h("script"))[Dh]=function(){Lh.removeChild(this),fu(e)}}:Sr=function(e){setTimeout(su(e),0)});Wh.exports={set:cu,clear:lu}});var zh=i((iK,Kh)=>{"use strict";var Hh=R(),UN=K(),WN=Object.getOwnPropertyDescriptor;Kh.exports=function(e){if(!UN)return Hh[e];var r=WN(Hh,e);return r&&r.value}});var vu=i((oK,Yh)=>{"use strict";var Vh=function(){this.head=null,this.tail=null};Vh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Yh.exports=Vh});var Qh=i((uK,Jh)=>{"use strict";var HN=Lr();Jh.exports=/ipad|iphone|ipod/i.test(HN)&&typeof Pebble<"u"});var Zh=i((sK,Xh)=>{"use strict";var KN=Lr();Xh.exports=/web0s(?!.*chrome)/i.test(KN)});var oy=i((cK,iy)=>{"use strict";var et=R(),zN=zh(),ey=Q(),du=pu().set,VN=vu(),YN=nu(),JN=Qh(),QN=Zh(),mu=$t(),ry=et.MutationObserver||et.WebKitMutationObserver,ty=et.document,ny=et.process,ha=et.Promise,bu=zN("queueMicrotask"),Zr,hu,yu,ya,ay;bu||(Bt=new VN,Gt=function(){var e,r;for(mu&&(e=ny.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Zr(),t}e&&e.enter()},!YN&&!mu&&!QN&&ry&&ty?(hu=!0,yu=ty.createTextNode(""),new ry(Gt).observe(yu,{characterData:!0}),Zr=function(){yu.data=hu=!hu}):!JN&&ha&&ha.resolve?(ya=ha.resolve(void 0),ya.constructor=ha,ay=ey(ya.then,ya),Zr=function(){ay(Gt)}):mu?Zr=function(){ny.nextTick(Gt)}:(du=ey(du,et),Zr=function(){du(Gt)}),bu=function(e){Bt.head||Zr(),Bt.add(e)});var Bt,Gt;iy.exports=bu});var sy=i((lK,uy)=>{"use strict";uy.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Er=i((fK,cy)=>{"use strict";cy.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((pK,ly)=>{"use strict";var XN=R();ly.exports=XN.Promise});var rt=i((vK,dy)=>{"use strict";var ZN=R(),Ut=Cr(),eM=M(),rM=Ci(),tM=Ri(),nM=A(),fy=Zo(),aM=re(),gu=$r(),py=Ut&&Ut.prototype,iM=nM("species"),qu=!1,vy=eM(ZN.PromiseRejectionEvent),oM=rM("Promise",function(){var e=tM(Ut),r=e!==String(Ut);if(!r&&gu===66||aM&&!(py.catch&&py.finally))return!0;if(!gu||gu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[iM]=n,qu=t.then(function(){})instanceof n,!qu)return!0}return!r&&(fy==="BROWSER"||fy==="DENO")&&!vy});dy.exports={CONSTRUCTOR:oM,REJECTION_EVENT:vy,SUBCLASSING:qu}});var Ie=i((dK,hy)=>{"use strict";var my=D(),uM=TypeError,sM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new uM("Bad Promise constructor");r=n,t=a}),this.resolve=my(r),this.reject=my(t)};hy.exports.f=function(e){return new sM(e)}});var jy=i(()=>{"use strict";var cM=q(),lM=re(),xa=$t(),ar=R(),fM=J(),it=G(),yy=Me(),by=Ct(),pM=Le(),vM=eu(),dM=D(),qa=M(),mM=$(),hM=ma(),yM=tu(),Sy=pu().set,Cu=oy(),bM=sy(),gM=Er(),qM=vu(),Ey=er(),wa=Cr(),Tu=rt(),Cy=Ie(),Sa="Promise",Ty=Tu.CONSTRUCTOR,xM=Tu.REJECTION_EVENT,wM=Tu.SUBCLASSING,xu=Ey.getterFor(Sa),SM=Ey.set,tt=wa&&wa.prototype,Tr=wa,ba=tt,Oy=ar.TypeError,wu=ar.document,Ou=ar.process,Su=Cy.f,EM=Su,CM=!!(wu&&wu.createEvent&&ar.dispatchEvent),ky="unhandledrejection",TM="rejectionhandled",gy=0,Iy=1,OM=2,ku=1,_y=2,ga,qy,Py,xy,Ry=function(e){var r;return mM(e)&&qa(r=e.then)?r:!1},Ay=function(e,r){var t=r.value,n=r.state===Iy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===_y&&IM(r),r.rejection=ku),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new Oy("Promise-chain cycle")):(l=Ry(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},Ny=function(e,r){e.notified||(e.notified=!0,Cu(function(){for(var t=e.reactions,n;n=t.get();)Ay(n,e);e.notified=!1,r&&!e.rejection&&kM(e)}))},My=function(e,r,t){var n,a;CM?(n=wu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!xM&&(a=ar["on"+e])?a(n):e===ky&&bM("Unhandled promise rejection",t)},kM=function(e){it(Sy,ar,function(){var r=e.facade,t=e.value,n=wy(e),a;if(n&&(a=gM(function(){xa?Ou.emit("unhandledRejection",t,r):My(ky,r,t)}),e.rejection=xa||wy(e)?_y:ku,a.error))throw a.value})},wy=function(e){return e.rejection!==ku&&!e.parent},IM=function(e){it(Sy,ar,function(){var r=e.facade;xa?Ou.emit("rejectionHandled",r):My(TM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=OM,Ny(e,!0))},Eu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Oy("Promise can't be resolved itself");var n=Ry(r);n?Cu(function(){var a={done:!1};try{it(n,r,nt(Eu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Iy,Ny(e,!1))}catch(a){at({done:!1},a,e)}}};if(Ty&&(Tr=function(r){hM(this,ba),dM(r),it(ga,this);var t=xu(this);try{r(nt(Eu,t),nt(at,t))}catch(n){at(t,n)}},ba=Tr.prototype,ga=function(r){SM(this,{type:Sa,done:!1,notified:!1,parent:!1,reactions:new qM,rejection:!1,state:gy,value:null})},ga.prototype=yy(ba,"then",function(r,t){var n=xu(this),a=Su(yM(this,Tr));return n.parent=!0,a.ok=qa(r)?r:!0,a.fail=qa(t)&&t,a.domain=xa?Ou.domain:void 0,n.state===gy?n.reactions.add(a):Cu(function(){Ay(a,n)}),a.promise}),qy=function(){var e=new ga,r=xu(e);this.promise=e,this.resolve=nt(Eu,r),this.reject=nt(at,r)},Cy.f=Su=function(e){return e===Tr||e===Py?new qy(e):EM(e)},!lM&&qa(wa)&&tt!==Object.prototype)){xy=tt.then,wM||yy(tt,"then",function(r,t){var n=this;return new Tr(function(a,o){it(xy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}by&&by(tt,ba)}cM({global:!0,constructor:!0,wrap:!0,forced:Ty},{Promise:Tr});Py=fM.Promise;pM(Tr,Sa,!1,!0);vM(Sa)});var Wt=i((yK,Ly)=>{"use strict";var _M=Cr(),PM=co(),RM=rt().CONSTRUCTOR;Ly.exports=RM||!PM(function(e){_M.all(e).then(void 0,function(){})})});var $y=i(()=>{"use strict";var AM=q(),NM=G(),MM=D(),jM=Ie(),LM=Er(),$M=he(),FM=Wt();AM({target:"Promise",stat:!0,forced:FM},{all:function(r){var t=this,n=jM.f(t),a=n.resolve,o=n.reject,u=LM(function(){var s=MM(t.resolve),c=[],l=0,f=1;$M(r,function(p){var v=l++,d=!1;f++,NM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Dy=i(()=>{"use strict";var DM=q(),BM=re(),GM=rt().CONSTRUCTOR,_u=Cr(),UM=z(),WM=M(),HM=Me(),Fy=_u&&_u.prototype;DM({target:"Promise",proto:!0,forced:GM,real:!0},{catch:function(e){return this.then(void 0,e)}});!BM&&WM(_u)&&(Iu=UM("Promise").prototype.catch,Fy.catch!==Iu&&HM(Fy,"catch",Iu,{unsafe:!0}));var Iu});var By=i(()=>{"use strict";var KM=q(),zM=G(),VM=D(),YM=Ie(),JM=Er(),QM=he(),XM=Wt();KM({target:"Promise",stat:!0,forced:XM},{race:function(r){var t=this,n=YM.f(t),a=n.reject,o=JM(function(){var u=VM(t.resolve);QM(r,function(s){zM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Gy=i(()=>{"use strict";var ZM=q(),ej=Ie(),rj=rt().CONSTRUCTOR;ZM({target:"Promise",stat:!0,forced:rj},{reject:function(r){var t=ej.f(this),n=t.reject;return n(r),t.promise}})});var Pu=i((TK,Uy)=>{"use strict";var tj=ee(),nj=$(),aj=Ie();Uy.exports=function(e,r){if(tj(e),nj(r)&&r.constructor===e)return r;var t=aj.f(e),n=t.resolve;return n(r),t.promise}});var Ky=i(()=>{"use strict";var ij=q(),oj=z(),Wy=re(),uj=Cr(),Hy=rt().CONSTRUCTOR,sj=Pu(),cj=oj("Promise"),lj=Wy&&!Hy;ij({target:"Promise",stat:!0,forced:Wy||Hy},{resolve:function(r){return sj(lj&&this===cj?uj:this,r)}})});var zy=i(()=>{"use strict";jy();$y();Dy();By();Gy();Ky()});var Ru=i(()=>{"use strict";var fj=q(),pj=G(),vj=D(),dj=Ie(),mj=Er(),hj=he(),yj=Wt();fj({target:"Promise",stat:!0,forced:yj},{allSettled:function(r){var t=this,n=dj.f(t),a=n.resolve,o=n.reject,u=mj(function(){var s=vj(t.resolve),c=[],l=0,f=1;hj(r,function(p){var v=l++,d=!1;f++,pj(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Au=i(()=>{"use strict";var bj=q(),gj=G(),qj=D(),xj=z(),wj=Ie(),Sj=Er(),Ej=he(),Cj=Wt(),Vy="No one promise resolved";bj({target:"Promise",stat:!0,forced:Cj},{any:function(r){var t=this,n=xj("AggregateError"),a=wj.f(t),o=a.resolve,u=a.reject,s=Sj(function(){var c=qj(t.resolve),l=[],f=0,p=1,v=!1;Ej(r,function(d){var h=f++,m=!1;p++,gj(c,t,d).then(function(x){m||v||(v=!0,o(x))},function(x){m||v||(m=!0,l[h]=x,--p||u(new n(l,Vy)))})}),--p||u(new n(l,Vy))});return s.error&&u(s.value),a.promise}})});var Mu=i(()=>{"use strict";var Tj=q(),Oj=R(),kj=jr(),Ij=dr(),_j=Ie(),Pj=D(),Jy=Er(),Nu=Oj.Promise,Yy=!1,Rj=!Nu||!Nu.try||Jy(function(){Nu.try(function(e){Yy=e===8},8)}).error||!Yy;Tj({target:"Promise",stat:!0,forced:Rj},{try:function(e){var r=arguments.length>1?Ij(arguments,1):[],t=_j.f(this),n=Jy(function(){return kj(Pj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var ju=i(()=>{"use strict";var Aj=q(),Nj=Ie();Aj({target:"Promise",stat:!0},{withResolvers:function(){var r=Nj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var eb=i(()=>{"use strict";var Mj=q(),jj=re(),Ea=Cr(),Lj=P(),Xy=z(),Zy=M(),$j=tu(),Qy=Pu(),Fj=Me(),$u=Ea&&Ea.prototype,Dj=!!Ea&&Lj(function(){$u.finally.call({then:function(){}},function(){})});Mj({target:"Promise",proto:!0,real:!0,forced:Dj},{finally:function(e){var r=$j(this,Xy("Promise")),t=Zy(e);return this.then(t?function(n){return Qy(r,e()).then(function(){return n})}:e,t?function(n){return Qy(r,e()).then(function(){throw n})}:e)}});!jj&&Zy(Ea)&&(Lu=Xy("Promise").prototype.finally,$u.finally!==Lu&&Fj($u,"finally",Lu,{unsafe:!0}));var Lu});var tb=i((BK,rb)=>{"use strict";Xo();xr();_t();zy();Ru();Au();Mu();ju();eb();yr();var Bj=J();rb.exports=Bj.Promise});var ab=i((GK,nb)=>{"use strict";var Gj=tb();wr();nb.exports=Gj});var ib=i(()=>{"use strict";Mu()});var ob=i(()=>{"use strict";ju()});var sb=i((zK,ub)=>{"use strict";var Uj=ab();ib();ob();ub.exports=Uj});var cb=i(()=>{"use strict";Xo()});var lb=i(()=>{"use strict";Ru()});var fb=i(()=>{"use strict";Au()});var vb=i((ez,pb)=>{"use strict";var Wj=sb();cb();lb();fb();pb.exports=Wj});var ot=i((rz,db)=>{"use strict";db.exports=vb()});var yb=i((oz,hb)=>{"use strict";Lo();var Hj=Vr();hb.exports=Hj.f("asyncIterator")});var gb=i((uz,bb)=>{"use strict";var Kj=yb();bb.exports=Kj});var xb=i((sz,qb)=>{"use strict";var zj=gb();qb.exports=zj});var Sb=i((cz,wb)=>{"use strict";var Vj=xb();wb.exports=Vj});var Ca=i((lz,Eb)=>{"use strict";Eb.exports=Sb()});var kb=i(()=>{"use strict";var Yj=q(),Jj=P(),Qj=ne(),Ob=Et(),Xj=Zi(),Zj=Jj(function(){Ob(1)});Yj({target:"Object",stat:!0,forced:Zj,sham:!Xj},{getPrototypeOf:function(r){return Ob(Qj(r))}})});var _b=i((mz,Ib)=>{"use strict";kb();var eL=J();Ib.exports=eL.Object.getPrototypeOf});var Rb=i((hz,Pb)=>{"use strict";var rL=_b();Pb.exports=rL});var Nb=i((yz,Ab)=>{"use strict";var tL=Rb();Ab.exports=tL});var jb=i((bz,Mb)=>{"use strict";var nL=Nb();Mb.exports=nL});var Ta=i((gz,Lb)=>{"use strict";Lb.exports=jb()});var Fb=i(()=>{"use strict";var aL=q(),iL=N(),oL=Ne(),uL=iL([].reverse),$b=[1,2];aL({target:"Array",proto:!0,forced:String($b)===String($b.reverse())},{reverse:function(){return oL(this)&&(this.length=this.length),uL(this)}})});var Bb=i((wz,Db)=>{"use strict";Fb();var sL=se();Db.exports=sL("Array","reverse")});var Ub=i((Sz,Gb)=>{"use strict";var cL=H(),lL=Bb(),Bu=Array.prototype;Gb.exports=function(e){var r=e.reverse;return e===Bu||cL(Bu,e)&&r===Bu.reverse?lL:r}});var Hb=i((Ez,Wb)=>{"use strict";var fL=Ub();Wb.exports=fL});var zb=i((Cz,Kb)=>{"use strict";var pL=Hb();Kb.exports=pL});var Yb=i((Tz,Vb)=>{"use strict";var vL=zb();Vb.exports=vL});var Qb=i((Oz,Jb)=>{"use strict";Jb.exports=Yb()});var Gu=i((kz,zt)=>{function dL(e,r){this.v=e,this.k=r}zt.exports=dL,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Xb=i(()=>{"use strict";var mL=q(),hL=K(),yL=rr();mL({target:"Object",stat:!0,sham:!hL},{create:yL})});var eg=i((Pz,Zb)=>{"use strict";Xb();var bL=J(),gL=bL.Object;Zb.exports=function(r,t){return gL.create(r,t)}});var tg=i((Rz,rg)=>{"use strict";var qL=eg();rg.exports=qL});var ag=i((Az,ng)=>{"use strict";var xL=tg();ng.exports=xL});var og=i((Nz,ig)=>{"use strict";var wL=ag();ig.exports=wL});var Oa=i((Mz,ug)=>{"use strict";ug.exports=og()});var Wu=i((jz,fg)=>{"use strict";var cg=N(),SL=D(),EL=$(),CL=V(),sg=dr(),TL=Mr(),lg=Function,OL=cg([].concat),kL=cg([].join),Uu={},IL=function(e,r,t){if(!CL(Uu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Uu[r]=lg("C,a","return new C("+kL(n,",")+")")}return Uu[r](e,t)};fg.exports=TL?lg.bind:function(r){var t=SL(this),n=t.prototype,a=sg(arguments,1),o=function(){var s=OL(a,sg(arguments));return this instanceof o?IL(t,s.length,s):t.apply(r,s)};return EL(n)&&(o.prototype=n),o}});var vg=i(()=>{"use strict";var _L=q(),pg=Wu();_L({target:"Function",proto:!0,forced:Function.bind!==pg},{bind:pg})});var mg=i((Fz,dg)=>{"use strict";vg();var PL=se();dg.exports=PL("Function","bind")});var yg=i((Dz,hg)=>{"use strict";var RL=H(),AL=mg(),Hu=Function.prototype;hg.exports=function(e){var r=e.bind;return e===Hu||RL(Hu,e)&&r===Hu.bind?AL:r}});var gg=i((Bz,bg)=>{"use strict";var NL=yg();bg.exports=NL});var xg=i((Gz,qg)=>{"use strict";var ML=gg();qg.exports=ML});var Sg=i((Uz,wg)=>{"use strict";var jL=xg();wg.exports=jL});var Vt=i((Wz,Eg)=>{"use strict";Eg.exports=Sg()});var Cg=i(()=>{"use strict";var LL=q(),$L=Ct();LL({target:"Object",stat:!0},{setPrototypeOf:$L})});var Og=i((zz,Tg)=>{"use strict";Cg();var FL=J();Tg.exports=FL.Object.setPrototypeOf});var Ig=i((Vz,kg)=>{"use strict";var DL=Og();kg.exports=DL});var Pg=i((Yz,_g)=>{"use strict";var BL=Ig();_g.exports=BL});var Ag=i((Jz,Rg)=>{"use strict";var GL=Pg();Rg.exports=GL});var ka=i((Qz,Ng)=>{"use strict";Ng.exports=Ag()});var jg=i(()=>{"use strict";var UL=q(),WL=K(),Mg=ae().f;UL({target:"Object",stat:!0,forced:Object.defineProperty!==Mg,sham:!WL},{defineProperty:Mg})});var Fg=i((eV,$g)=>{"use strict";jg();var HL=J(),Lg=HL.Object,KL=$g.exports=function(r,t,n){return Lg.defineProperty(r,t,n)};Lg.defineProperty.sham&&(KL.sham=!0)});var Bg=i((rV,Dg)=>{"use strict";var zL=Fg();Dg.exports=zL});var Ug=i((tV,Gg)=>{"use strict";var VL=Bg();Gg.exports=VL});var Hg=i((nV,Wg)=>{"use strict";var YL=Ug();Wg.exports=YL});var Yt=i((aV,Kg)=>{"use strict";Kg.exports=Hg()});var Ku=i((iV,Fe)=>{var JL=Yt();function Ia(e,r,t,n){var a=JL;try{a({},"",{})}catch{a=0}Fe.exports=Ia=function(u,s,c,l){function f(p,v){Ia(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,Ia(e,r,t,n)}Fe.exports=Ia,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Vu=i((oV,De)=>{var zg=ke(),zu=Oa(),QL=Vt(),XL=Ta(),Vg=ka(),Pe=Ku();function Yg(){var e,r,t=typeof zg=="function"?zg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var b=h&&h.prototype instanceof s?h:s,g=zu(b.prototype);return Pe(g,"_invoke",function(O,I,w){var E,S,T,L=0,Ee=w||[],_=!1,te={p:0,n:0,v:e,a:Ce,f:QL(Ce).call(Ce,e,4),d:function(F,be){return E=F,S=0,T=e,te.n=be,u}};function Ce(Z,F){for(S=Z,T=F,r=0;!_&&L&&!be&&r<Ee.length;r++){var be,C=Ee[r],Nr=te.p,Ye=C[2];Z>3?(be=Ye===F)&&(T=C[(S=C[4])?5:(S=3,3)],C[4]=C[5]=e):C[0]<=Nr&&((be=Z<2&&Nr<C[1])?(S=0,te.v=F,te.n=C[1]):Nr<Ye&&(be=Z<3||C[0]>F||F>Ye)&&(C[4]=Z,C[5]=F,te.n=Ye,S=0))}if(be||Z>1)return u;throw _=!0,F}return function(Z,F,be){if(L>1)throw TypeError("Generator is already running");for(_&&F===1&&Ce(F,be),S=F,T=be;(r=S<2?e:T)||!_;){E||(S?S<3?(S>1&&(te.n=-1),Ce(S,T)):te.n=T:te.v=T);try{if(L=2,E){if(S||(Z="next"),r=E[Z]){if(!(r=r.call(E,T)))throw TypeError("iterator result is not an object");if(!r.done)return r;T=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(T=TypeError("The iterator does not provide a '"+Z+"' method"),S=1);E=e}else if((r=(_=te.n<0)?T:O.call(I,te))!==u)break}catch(C){E=e,S=1,T=C}finally{L=1}}return{value:r,done:_}}}(d,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=XL;var f=[][n]?r(r([][n]())):(Pe(r={},n,function(){return this}),r),p=l.prototype=s.prototype=zu(f);function v(d){return Vg?Vg(d,l):(d.__proto__=l,Pe(d,a,"GeneratorFunction")),d.prototype=zu(p),d}return c.prototype=l,Pe(p,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,a,"GeneratorFunction"),Pe(p),Pe(p,a,"Generator"),Pe(p,n,function(){return this}),Pe(p,"toString",function(){return"[object Generator]"}),(De.exports=Yg=function(){return{w:o,m:v}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Yg,De.exports.__esModule=!0,De.exports.default=De.exports});var Qu=i((uV,Jt)=>{var ZL=ke(),e$=Ca(),r$=Gu(),Yu=Ku();function Ju(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof r$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Yu(Ju.prototype),Yu(Ju.prototype,typeof ZL=="function"&&e$||"@asyncIterator",function(){return this})),Yu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Jt.exports=Ju,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Xu=i((sV,Qt)=>{var t$=ot(),n$=Vu(),a$=Qu();function i$(e,r,t,n,a){return new a$(n$().w(e,r,t,n),a||t$)}Qt.exports=i$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Jg=i((cV,Xt)=>{var o$=Xu();function u$(e,r,t,n,a){var o=o$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=u$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Zg=i((lV,Xg)=>{"use strict";var Qg=Xe(),s$=TypeError;Xg.exports=function(e,r){if(!delete e[r])throw new s$("Cannot delete property "+Qg(r)+" of "+Qg(e))}});var eq=i(()=>{"use strict";var c$=q(),l$=ne(),f$=de(),p$=Hr(),v$=Zg(),d$=It(),m$=[].unshift(0)!==1,h$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},y$=m$||!h$();c$({target:"Array",proto:!0,arity:1,forced:y$},{unshift:function(r){var t=l$(this),n=f$(t),a=arguments.length;if(a){d$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:v$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return p$(t,n+a)}})});var tq=i((vV,rq)=>{"use strict";eq();var b$=se();rq.exports=b$("Array","unshift")});var aq=i((dV,nq)=>{"use strict";var g$=H(),q$=tq(),Zu=Array.prototype;nq.exports=function(e){var r=e.unshift;return e===Zu||g$(Zu,e)&&r===Zu.unshift?q$:r}});var oq=i((mV,iq)=>{"use strict";var x$=aq();iq.exports=x$});var sq=i((hV,uq)=>{"use strict";var w$=oq();uq.exports=w$});var lq=i((yV,cq)=>{"use strict";var S$=sq();cq.exports=S$});var pq=i((bV,fq)=>{"use strict";fq.exports=lq()});var vq=i((gV,Zt)=>{var E$=pq();function C$(e){var r=Object(e),t=[];for(var n in r)E$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Zt.exports=C$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var mq=i((qV,dq)=>{"use strict";xr();_t();yr();Fo();var T$=Vr();dq.exports=T$.f("iterator")});var yq=i((xV,hq)=>{"use strict";var O$=mq();wr();hq.exports=O$});var gq=i((wV,bq)=>{"use strict";var k$=yq();bq.exports=k$});var xq=i((SV,qq)=>{"use strict";var I$=gq();qq.exports=I$});var en=i((EV,wq)=>{"use strict";wq.exports=xq()});var Sq=i((CV,Be)=>{var _a=ke(),_$=en();function es(e){"@babel/helpers - typeof";return Be.exports=es=typeof _a=="function"&&typeof _$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof _a=="function"&&r.constructor===_a&&r!==_a.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,es(e)}Be.exports=es,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var Eq=i((TV,rn)=>{var P$=Sq().default,R$=ke(),A$=en();function N$(e){if(e!=null){var r=e[typeof R$=="function"&&A$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(P$(e)+" is not iterable")}rn.exports=N$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var Oq=i((OV,Ge)=>{var Cq=Ta(),M$=Qb(),j$=Gu(),L$=Vu(),$$=Jg(),F$=Xu(),D$=Qu(),B$=vq(),Tq=Eq();function rs(){"use strict";var e=L$(),r=e.m(rs),t=(Cq?Cq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,Tq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ge.exports=rs=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&M$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new j$(c,l)},AsyncIterator:D$,async:function(c,l,f,p,v){return(n(l)?F$:$$)(o(c),l,f,p,v)},keys:B$,values:Tq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=rs,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var le=i((kV,kq)=>{var Pa=Oq()();kq.exports=Pa;try{regeneratorRuntime=Pa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Pa:Function("r","regeneratorRuntime = r")(Pa)}});var ts=i((Aa,_q)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});var Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Iq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Aa.default=G$;function G$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=U$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function U$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Iq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):tn(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Iq(m,2),b=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(b)>-1;return!!(E&&(!g||w.attribs[b]===g))},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){c(L)&&T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L,Ee){c(L)&&(T.push(L),Ee())}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){return T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){c(L)&&T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var b=x.findIndex(function(g){return g===m});if(b===v)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(b,g){return d(g)&&b.push(g),b},[]):d(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}_q.exports=Aa.default});var Ma=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.convertNodeList=W$;Na.escapeValue=H$;function W$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function H$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Dq=i((ja,Fq)=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.default=K$;var Nq=Ma(),Pq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function K$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(g){return g===b}:b}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(b){b==="class"&&(d=!0);var g=l[b];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Nq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[b]=function(O,I){return g.test(I)})}),d&&function(){var b=l.attribute;l.attribute=function(g,O,I){return l.class(O)||b&&b(g,O,I)}}();p!==n;){if(m(p)!==!0){if(Rq(s,p,l,f,n)||Aq(p,l,f,n))break;Rq(s,p,l,f),f.length===v&&Aq(p,l,f),f.length===v&&z$(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=Lq(s,p,l);f.unshift(x)}return f.join(" ")}function Rq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Mq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Mq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var b=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?b===-1?0:-1:b-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Nq.escapeValue)(c.value),p=t[l]||t.attribute,v=Pq[l]||Pq.attribute;if(!$q(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Aq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=jq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function jq(e,r){var t=e.tagName.toLowerCase();return $q(r.tag,null,t)?null:t}function z$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Lq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Lq(e,r,t){var n=Mq(e,r,t);return n||(n=jq(r,t)),n}function $q(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Fq.exports=ja.default});var ns=i(($a,Bq)=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.default=X$;var V$=ts(),Y$=Q$(V$),J$=Ma();function Q$(e){return e&&e.__esModule?e:{default:e}}function X$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,J$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,Y$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return La("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(La(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=La("",a[0],a.slice(1).join(" "),r),a[a.length-1]=La(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function La(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var I=s[l];if(n.some(function(E){return I.contains(E)})){var w=I.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,I){return O.length-I.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),b=function(){var I=x[l];if(n.some(function(E){return I.contains(E)})){var w=I.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=b();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Bq.exports=$a.default});var as=i(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getCommonAncestor=Z$;Fa.getCommonProperties=eF;function Z$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function eF(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var zq=i(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var rF=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=os;nn.getMultiSelector=Kq;nn.default=uF;var tF=ts(),Uq=is(tF),nF=Dq(),aF=is(nF),iF=ns(),Wq=is(iF),Gq=Ma(),Hq=as();function is(e){return e&&e.__esModule?e:{default:e}}function os(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":rF(e))+'")');var t=(0,Uq.default)(e,r),n=(0,aF.default)(e,r),a=(0,Wq.default)(n,e,r);return t&&delete global.document,a}function Kq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Gq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Uq.default)(e[0],r),n=(0,Hq.getCommonAncestor)(e,r),a=os(n,r),o=oF(e),u=o[0],s=(0,Wq.default)(a+" "+u,e,r),c=(0,Gq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function oF(e){var r=(0,Hq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function uF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Kq(e,r):os(e,r)}});var Jq=i(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=oe.common=oe.optimize=oe.getMultiSelector=oe.getSingleSelector=oe.select=void 0;var us=zq();Object.defineProperty(oe,"getSingleSelector",{enumerable:!0,get:function(){return us.getSingleSelector}});Object.defineProperty(oe,"getMultiSelector",{enumerable:!0,get:function(){return us.getMultiSelector}});var Vq=Yq(us),sF=ns(),cF=Yq(sF),lF=as(),fF=pF(lF);function pF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Yq(e){return e&&e.__esModule?e:{default:e}}oe.select=Vq.default;oe.optimize=cF.default;oe.common=fF;oe.default=Vq.default});var Qq=i(()=>{"use strict";var wF=q(),SF=Ne();wF({target:"Array",stat:!0},{isArray:SF})});var Zq=i((HV,Xq)=>{"use strict";Qq();var EF=J();Xq.exports=EF.Array.isArray});var rx=i((KV,ex)=>{"use strict";var CF=Zq();ex.exports=CF});var nx=i((zV,tx)=>{"use strict";var TF=rx();tx.exports=TF});var ix=i((VV,ax)=>{"use strict";var OF=nx();ax.exports=OF});var ux=i((YV,ox)=>{"use strict";ox.exports=ix()});var lx=i(()=>{"use strict";var kF=q(),IF=ne(),_F=de(),PF=Hr(),RF=It(),AF=P(),NF=AF(function(){return[].push.call({length:4294967296},1)!==4294967297}),MF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},jF=NF||!MF();kF({target:"Array",proto:!0,arity:1,forced:jF},{push:function(r){var t=IF(this),n=_F(t),a=arguments.length;RF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return PF(t,n),n}})});var px=i((ZV,fx)=>{"use strict";lx();var LF=se();fx.exports=LF("Array","push")});var dx=i((e9,vx)=>{"use strict";var $F=H(),FF=px(),ss=Array.prototype;vx.exports=function(e){var r=e.push;return e===ss||$F(ss,e)&&r===ss.push?FF:r}});var hx=i((r9,mx)=>{"use strict";var DF=dx();mx.exports=DF});var bx=i((t9,yx)=>{"use strict";var BF=hx();yx.exports=BF});var qx=i((n9,gx)=>{"use strict";var GF=bx();gx.exports=GF});var cs=i((a9,xx)=>{"use strict";xx.exports=qx()});var Rx=i(()=>{"use strict";var UF=q(),WF=Rt().map,HF=xt(),KF=HF("map");UF({target:"Array",proto:!0,forced:!KF},{map:function(r){return WF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Nx=i((R9,Ax)=>{"use strict";Rx();var zF=se();Ax.exports=zF("Array","map")});var jx=i((A9,Mx)=>{"use strict";var VF=H(),YF=Nx(),fs=Array.prototype;Mx.exports=function(e){var r=e.map;return e===fs||VF(fs,e)&&r===fs.map?YF:r}});var $x=i((N9,Lx)=>{"use strict";var JF=jx();Lx.exports=JF});var Dx=i((M9,Fx)=>{"use strict";var QF=$x();Fx.exports=QF});var Gx=i((j9,Bx)=>{"use strict";var XF=Dx();Bx.exports=XF});var Wx=i((L9,Ux)=>{"use strict";Ux.exports=Gx()});var Kx=i(($9,Hx)=>{Hx.exports=Wx()});var Vx=i((F9,zx)=>{zx.exports=ot()});var Zx=i((D9,Xx)=>{"use strict";var ZF=D(),eD=ne(),rD=Tn(),tD=de(),Yx=TypeError,Jx="Reduce of empty array with no initial value",Qx=function(e){return function(r,t,n,a){var o=eD(r),u=rD(o),s=tD(o);if(ZF(t),s===0&&n<2)throw new Yx(Jx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Yx(Jx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};Xx.exports={left:Qx(!1),right:Qx(!0)}});var ps=i((B9,ew)=>{"use strict";var nD=P();ew.exports=function(e,r){var t=[][e];return!!t&&nD(function(){t.call(null,r||function(){return 1},1)})}});var tw=i(()=>{"use strict";var aD=q(),iD=Zx().left,oD=ps(),rw=$r(),uD=$t(),sD=!uD&&rw>79&&rw<83,cD=sD||!oD("reduce");aD({target:"Array",proto:!0,forced:cD},{reduce:function(r){var t=arguments.length;return iD(this,r,t,t>1?arguments[1]:void 0)}})});var aw=i((W9,nw)=>{"use strict";tw();var lD=se();nw.exports=lD("Array","reduce")});var ow=i((H9,iw)=>{"use strict";var fD=H(),pD=aw(),vs=Array.prototype;iw.exports=function(e){var r=e.reduce;return e===vs||fD(vs,e)&&r===vs.reduce?pD:r}});var sw=i((K9,uw)=>{"use strict";var vD=ow();uw.exports=vD});var lw=i((z9,cw)=>{"use strict";var dD=sw();cw.exports=dD});var pw=i((V9,fw)=>{"use strict";var mD=lw();fw.exports=mD});var dw=i((Y9,vw)=>{"use strict";vw.exports=pw()});var hw=i((J9,mw)=>{mw.exports=dw()});var gw=i((Q9,bw)=>{"use strict";var hD=Ne(),yD=de(),bD=It(),gD=Q(),qD=Wr(),yw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?gD(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&hD(p)?(v=yD(p),c=yw(e,r,p,v,c,o-1)-1):(bD(c+1),qD(e,c,p)),c++),l++;return c};bw.exports=yw});var qw=i(()=>{"use strict";var xD=q(),wD=gw(),SD=D(),ED=ne(),CD=de(),TD=zn();xD({target:"Array",proto:!0},{flatMap:function(r){var t=ED(this),n=CD(t),a;return SD(r),a=TD(t,0),wD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var xw=i(()=>{"use strict";var OD=Bo();OD("flatMap")});var Sw=i((t7,ww)=>{"use strict";qw();xw();var kD=se();ww.exports=kD("Array","flatMap")});var Cw=i((n7,Ew)=>{"use strict";var ID=H(),_D=Sw(),ds=Array.prototype;Ew.exports=function(e){var r=e.flatMap;return e===ds||ID(ds,e)&&r===ds.flatMap?_D:r}});var Ow=i((a7,Tw)=>{"use strict";var PD=Cw();Tw.exports=PD});var Iw=i((i7,kw)=>{"use strict";var RD=Ow();kw.exports=RD});var Pw=i((o7,_w)=>{"use strict";var AD=Iw();_w.exports=AD});var Aw=i((u7,Rw)=>{"use strict";Rw.exports=Pw()});var Mw=i((s7,Nw)=>{Nw.exports=Aw()});var Lw=i((c7,jw)=>{"use strict";fo();var ND=se();jw.exports=ND("Array","concat")});var Fw=i((l7,$w)=>{"use strict";var MD=H(),jD=Lw(),ms=Array.prototype;$w.exports=function(e){var r=e.concat;return e===ms||MD(ms,e)&&r===ms.concat?jD:r}});var Bw=i((f7,Dw)=>{"use strict";var LD=Fw();Dw.exports=LD});var Uw=i((p7,Gw)=>{"use strict";var $D=Bw();Gw.exports=$D});var Hw=i((v7,Ww)=>{"use strict";var FD=Uw();Ww.exports=FD});var zw=i((d7,Kw)=>{"use strict";Kw.exports=Hw()});var hs=i((m7,Vw)=>{Vw.exports=zw()});var Qw=i(()=>{});var Zw=i(($7,Xw)=>{"use strict";Qw();Do();var YD=Vr();Xw.exports=YD.f("toPrimitive")});var rS=i((F7,eS)=>{"use strict";var JD=Zw();eS.exports=JD});var nS=i((D7,tS)=>{"use strict";var QD=rS();tS.exports=QD});var iS=i((B7,aS)=>{"use strict";var XD=nS();aS.exports=XD});var uS=i((G7,oS)=>{"use strict";oS.exports=iS()});var hS=i((cY,mS)=>{"use strict";var e3=$(),r3=Te(),t3=A(),n3=t3("match");mS.exports=function(e){var r;return e3(e)&&((r=e[n3])!==void 0?!!r:r3(e)==="RegExp")}});var bS=i((lY,yS)=>{"use strict";var a3=hS(),i3=TypeError;yS.exports=function(e){if(a3(e))throw new i3("The method doesn't accept regular expressions");return e}});var qS=i((fY,gS)=>{"use strict";var o3=A(),u3=o3("match");gS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[u3]=!1,"/./"[e](r)}catch{}}return!1}});var SS=i(()=>{"use strict";var s3=q(),c3=vt(),l3=mt().f,f3=Mi(),xS=Ze(),p3=bS(),v3=fr(),d3=qS(),m3=re(),h3=c3("".slice),y3=Math.min,wS=d3("startsWith"),b3=!m3&&!wS&&!!function(){var e=l3(String.prototype,"startsWith");return e&&!e.writable}();s3({target:"String",proto:!0,forced:!b3&&!wS},{startsWith:function(r){var t=xS(v3(this));p3(r);var n=f3(y3(arguments.length>1?arguments[1]:void 0,t.length)),a=xS(r);return h3(t,n,n+a.length)===a}})});var CS=i((dY,ES)=>{"use strict";SS();var g3=se();ES.exports=g3("String","startsWith")});var OS=i((mY,TS)=>{"use strict";var q3=H(),x3=CS(),qs=String.prototype;TS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===qs||q3(qs,e)&&r===qs.startsWith?x3:r}});var IS=i((hY,kS)=>{"use strict";var w3=OS();kS.exports=w3});var PS=i((yY,_S)=>{"use strict";var S3=IS();_S.exports=S3});var AS=i((bY,RS)=>{"use strict";var E3=PS();RS.exports=E3});var MS=i((gY,NS)=>{"use strict";NS.exports=AS()});var LS=i((qY,jS)=>{jS.exports=MS()});var $S=i(()=>{"use strict";var C3=q(),T3=Rt().filter,O3=xt(),k3=O3("filter");C3({target:"Array",proto:!0,forced:!k3},{filter:function(r){return T3(this,r,arguments.length>1?arguments[1]:void 0)}})});var DS=i((SY,FS)=>{"use strict";$S();var I3=se();FS.exports=I3("Array","filter")});var GS=i((EY,BS)=>{"use strict";var _3=H(),P3=DS(),xs=Array.prototype;BS.exports=function(e){var r=e.filter;return e===xs||_3(xs,e)&&r===xs.filter?P3:r}});var WS=i((CY,US)=>{"use strict";var R3=GS();US.exports=R3});var KS=i((TY,HS)=>{"use strict";var A3=WS();HS.exports=A3});var VS=i((OY,zS)=>{"use strict";var N3=KS();zS.exports=N3});var JS=i((kY,YS)=>{"use strict";YS.exports=VS()});var XS=i((IY,QS)=>{QS.exports=JS()});var dE=i(()=>{"use strict";var G3=q(),U3=z(),Ss=jr(),W3=Wu(),sE=ru(),H3=ee(),cE=$(),K3=rr(),fE=P(),Es=U3("Reflect","construct"),z3=Object.prototype,V3=[].push,pE=fE(function(){function e(){}return!(Es(function(){},[],e)instanceof e)}),vE=!fE(function(){Es(function(){})}),lE=pE||vE;G3({target:"Reflect",stat:!0,forced:lE,sham:lE},{construct:function(r,t){sE(r),H3(t);var n=arguments.length<3?r:sE(arguments[2]);if(vE&&!pE)return Es(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return Ss(V3,a,t),new(Ss(W3,r,a))}var o=n.prototype,u=K3(cE(o)?o:z3),s=Ss(r,u,t);return cE(s)?s:u}})});var hE=i((cJ,mE)=>{"use strict";dE();var Y3=J();mE.exports=Y3.Reflect.construct});var bE=i((lJ,yE)=>{"use strict";var J3=hE();yE.exports=J3});var qE=i((fJ,gE)=>{"use strict";var Q3=bE();gE.exports=Q3});var wE=i((pJ,xE)=>{"use strict";var X3=qE();xE.exports=X3});var Ka=i((vJ,SE)=>{"use strict";SE.exports=wE()});var CE=i((dJ,EE)=>{EE.exports=Ka()});var NE=i((SJ,AE)=>{"use strict";var Z3=P();AE.exports=Z3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var LE=i((EJ,jE)=>{"use strict";var e4=P(),r4=$(),t4=Te(),ME=NE(),za=Object.isExtensible,n4=e4(function(){za(1)});jE.exports=n4||ME?function(r){return!r4(r)||ME&&t4(r)==="ArrayBuffer"?!1:za?za(r):!0}:za});var FE=i((CJ,$E)=>{"use strict";var a4=P();$E.exports=!a4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ps=i((TJ,GE)=>{"use strict";var i4=q(),o4=N(),u4=zr(),s4=$(),ks=V(),c4=ae().f,DE=Pt(),l4=po(),Is=LE(),f4=Dr(),p4=FE(),BE=!1,He=f4("meta"),v4=0,_s=function(e){c4(e,He,{value:{objectID:"O"+v4++,weakData:{}}})},d4=function(e,r){if(!s4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ks(e,He)){if(!Is(e))return"F";if(!r)return"E";_s(e)}return e[He].objectID},m4=function(e,r){if(!ks(e,He)){if(!Is(e))return!0;if(!r)return!1;_s(e)}return e[He].weakData},h4=function(e){return p4&&BE&&Is(e)&&!ks(e,He)&&_s(e),e},y4=function(){b4.enable=function(){},BE=!0;var e=DE.f,r=o4([].splice),t={};t[He]=1,e(t).length&&(DE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===He){r(a,o,1);break}return a},i4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l4.f}))},b4=GE.exports={enable:y4,fastKey:d4,getWeakData:m4,onFreeze:h4};u4[He]=!0});var HE=i((OJ,WE)=>{"use strict";var g4=q(),q4=R(),x4=Ps(),w4=P(),S4=Oe(),E4=he(),C4=ma(),T4=M(),O4=$(),k4=lr(),I4=Le(),_4=ae().f,P4=Rt().forEach,R4=K(),UE=er(),A4=UE.set,N4=UE.getterFor;WE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=q4[e],s=u&&u.prototype,c={},l;if(!R4||!T4(u)||!(a||s.forEach&&!w4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),x4.enable();else{l=r(function(v,d){A4(C4(v,f),{type:e,collection:new u}),k4(d)||E4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=N4(e);P4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&S4(f,v,function(h,m){var x=p(this).collection;if(!d&&a&&!O4(h))return v==="get"?void 0:!1;var b=x[v](h===0?0:h,m);return d?this:b})}),a||_4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return I4(l,e,!1,!0),c[e]=l,g4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var zE=i((kJ,KE)=>{"use strict";var M4=Me();KE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:M4(e,n,r[n],t);return e}});var eC=i((IJ,ZE)=>{"use strict";var VE=rr(),j4=Yn(),YE=zE(),L4=Q(),$4=ma(),F4=lr(),D4=he(),B4=Un(),Va=Wn(),G4=eu(),ln=K(),JE=Ps().fastKey,XE=er(),QE=XE.set,Rs=XE.getterFor;ZE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){$4(l,o),QE(l,{type:r,index:VE(null),first:null,last:null,size:0}),ln||(l.size=0),F4(f)||D4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Rs(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=JE(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),ln?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=JE(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return YE(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=VE(null),ln?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),ln?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=L4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),YE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),ln&&j4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Rs(r),o=Rs(n);B4(e,r,function(u,s){QE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Va(void 0,!0)):Va(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),G4(r)}}});var rC=i(()=>{"use strict";var U4=HE(),W4=eC();U4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},W4)});var tC=i(()=>{"use strict";rC()});var aC=i((NJ,nC)=>{"use strict";nC.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ue=i((MJ,oC)=>{"use strict";var H4=z(),Ya=aC(),iC=H4("Map");oC.exports={Map:iC,set:Ya("set",2),get:Ya("get",1),has:Ya("has",1),remove:Ya("delete",1),proto:iC.prototype}});var As=i(()=>{"use strict";var K4=q(),z4=N(),V4=D(),Y4=fr(),J4=he(),Ja=ue(),uC=re(),Q4=P(),sC=Ja.Map,X4=Ja.has,Z4=Ja.get,eB=Ja.set,rB=z4([].push),tB=uC||Q4(function(){return sC.groupBy("ab",function(e){return e}).get("a").length!==1});K4({target:"Map",stat:!0,forced:uC||tB},{groupBy:function(r,t){Y4(r),V4(t);var n=new sC,a=0;return J4(r,function(o){var u=t(o,a++);X4(n,u)?rB(Z4(n,u),o):eB(n,u,[o])}),n}})});var X=i(($J,cC)=>{"use strict";var nB=Xe(),aB=TypeError;cC.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new aB(nB(e)+" is not a map")}});var Ms=i(()=>{"use strict";var iB=q(),oB=X(),Ns=ue(),uB=re(),sB=Ns.get,cB=Ns.has,lB=Ns.set;iB({target:"Map",proto:!0,real:!0,forced:uB},{getOrInsert:function(r,t){return cB(oB(this),r)?sB(this,r):(lB(this,r,t),t)}})});var Ls=i(()=>{"use strict";var fB=q(),pB=D(),vB=X(),js=ue(),dB=re(),mB=js.get,hB=js.has,yB=js.set;fB({target:"Map",proto:!0,real:!0,forced:dB},{getOrInsertComputed:function(r,t){if(vB(this),pB(t),hB(this,r))return mB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return yB(this,r,n),n}})});var fC=i((UJ,lC)=>{"use strict";xr();tC();As();Ms();Ls();_t();yr();var bB=J();lC.exports=bB.Map});var vC=i((WJ,pC)=>{"use strict";var gB=fC();wr();pC.exports=gB});var $s=i(()=>{"use strict";Ms()});var Fs=i(()=>{"use strict";Ls()});var dC=i(()=>{"use strict";As()});var hC=i((QJ,mC)=>{"use strict";var qB=vC();$s();Fs();dC();mC.exports=qB});var bC=i((XJ,yC)=>{"use strict";var xB=Q(),wB=ee(),SB=ne(),EB=he();yC.exports=function(e,r,t){return function(a){var o=SB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?xB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return EB(o,function(v){var d=c?l(v,p++):v;t?r(f,wB(d)[0],d[1]):r(f,d)}),f}}});var qC=i(()=>{"use strict";var CB=q(),gC=ue(),TB=bC();CB({target:"Map",stat:!0,forced:!0},{from:TB(gC.Map,gC.set,!0)})});var wC=i((rQ,xC)=>{"use strict";var OB=ee();xC.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,OB(s)[0],s[1]):r(a,s)}return a}}});var EC=i(()=>{"use strict";var kB=q(),SC=ue(),IB=wC();kB({target:"Map",stat:!0,forced:!0},{of:IB(SC.Map,SC.set,!0)})});var TC=i(()=>{"use strict";var _B=q(),PB=G(),RB=he(),AB=M(),CC=D(),NB=ue().Map;_B({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=AB(this)?this:NB,a=new n;CC(t);var o=CC(a.set);return RB(r,function(u){PB(o,a,t(u),u)}),a}})});var OC=i(()=>{"use strict";var MB=q(),jB=X(),LB=ue().remove;MB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=jB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=LB(r,arguments[a]),t=t&&n;return!!t}})});var IC=i(()=>{"use strict";var $B=q(),FB=X(),Ds=ue(),DB=Ds.get,BB=Ds.has,kC=Ds.set;$B({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=FB(this),a,o;return BB(n,r)?(a=DB(n,r),"update"in t&&(a=t.update(a,r,n),kC(n,r,a)),a):(o=t.insert(r,n),kC(n,r,o),o)}})});var PC=i((lQ,_C)=>{"use strict";var GB=G();_C.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=GB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var xe=i((fQ,RC)=>{"use strict";var UB=PC();RC.exports=function(e,r,t){return t?UB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var AC=i(()=>{"use strict";var WB=q(),HB=Q(),KB=X(),zB=xe();WB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=KB(this),n=HB(r,arguments.length>1?arguments[1]:void 0);return zB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var MC=i(()=>{"use strict";var VB=q(),YB=Q(),JB=X(),NC=ue(),QB=xe(),XB=NC.Map,ZB=NC.set;VB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=JB(this),n=YB(r,arguments.length>1?arguments[1]:void 0),a=new XB;return QB(t,function(o,u){n(o,u,t)&&ZB(a,u,o)}),a}})});var jC=i(()=>{"use strict";var e5=q(),r5=Q(),t5=X(),n5=xe();e5({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=t5(this),n=r5(r,arguments.length>1?arguments[1]:void 0),a=n5(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var LC=i(()=>{"use strict";var a5=q(),i5=Q(),o5=X(),u5=xe();a5({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=o5(this),n=i5(r,arguments.length>1?arguments[1]:void 0),a=u5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var FC=i((qQ,$C)=>{"use strict";$C.exports=function(e,r){return e===r||e!==e&&r!==r}});var DC=i(()=>{"use strict";var s5=q(),c5=FC(),l5=X(),f5=xe();s5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return f5(l5(this),function(t){if(c5(t,r))return!0},!0)===!0}})});var BC=i(()=>{"use strict";var p5=q(),v5=X(),d5=xe();p5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=d5(v5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var UC=i(()=>{"use strict";var m5=q(),h5=Q(),y5=X(),GC=ue(),b5=xe(),g5=GC.Map,q5=GC.set;m5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=y5(this),n=h5(r,arguments.length>1?arguments[1]:void 0),a=new g5;return b5(t,function(o,u){q5(a,n(o,u,t),o)}),a}})});var HC=i(()=>{"use strict";var x5=q(),w5=Q(),S5=X(),WC=ue(),E5=xe(),C5=WC.Map,T5=WC.set;x5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=S5(this),n=w5(r,arguments.length>1?arguments[1]:void 0),a=new C5;return E5(t,function(o,u){T5(a,u,n(o,u,t))}),a}})});var KC=i(()=>{"use strict";var O5=q(),k5=X(),I5=he(),_5=ue().set;O5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=k5(this),n=arguments.length,a=0;a<n;)I5(arguments[a++],function(o,u){_5(t,o,u)},{AS_ENTRIES:!0});return t}})});var zC=i(()=>{"use strict";var P5=q(),R5=D(),A5=X(),N5=xe(),M5=TypeError;P5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=A5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(R5(r),N5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new M5("Reduce of empty map with no initial value");return a}})});var VC=i(()=>{"use strict";var j5=q(),L5=Q(),$5=X(),F5=xe();j5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=$5(this),n=L5(r,arguments.length>1?arguments[1]:void 0);return F5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var JC=i(()=>{"use strict";var D5=q(),YC=D(),B5=X(),Bs=ue(),G5=TypeError,U5=Bs.get,W5=Bs.has,H5=Bs.set;D5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=B5(this),a=arguments.length;YC(t);var o=W5(n,r);if(!o&&a<3)throw new G5("Updating absent value");var u=o?U5(n,r):YC(a>2?arguments[2]:void 0)(r,n);return H5(n,r,t(u,r,n)),n}})});var Us=i((LQ,QC)=>{"use strict";var Qa=G(),Gs=D(),Xa=M(),K5=ee(),z5=TypeError;QC.exports=function(r,t){var n=K5(this),a=Gs(n.get),o=Gs(n.has),u=Gs(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Xa(t)&&!Xa(s))throw new z5("At least one callback required");return Qa(o,n,r)?(c=Qa(a,n,r),Xa(t)&&(c=t(c),Qa(u,n,r,c))):Xa(s)&&(c=s(),Qa(u,n,r,c)),c}});var XC=i(()=>{"use strict";var V5=q(),Y5=Us();V5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:Y5})});var ZC=i(()=>{"use strict";var J5=q(),Q5=Us();J5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:Q5})});var rT=i((GQ,eT)=>{"use strict";var X5=hC();qC();EC();TC();OC();IC();AC();MC();jC();LC();DC();$s();Fs();BC();UC();HC();KC();zC();VC();JC();XC();ZC();eT.exports=X5});var nT=i((UQ,tT)=>{"use strict";tT.exports=rT()});var iT=i(()=>{"use strict";var Z5=q(),e6=vt(),r6=Hi().indexOf,t6=ps(),Ws=e6([].indexOf),aT=!!Ws&&1/Ws([1],1,-0)<0,n6=aT||!t6("indexOf");Z5({target:"Array",proto:!0,forced:n6},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return aT?Ws(this,r,t)||0:r6(this,r,t)}})});var uT=i((KQ,oT)=>{"use strict";iT();var a6=se();oT.exports=a6("Array","indexOf")});var cT=i((zQ,sT)=>{"use strict";var i6=H(),o6=uT(),Hs=Array.prototype;sT.exports=function(e){var r=e.indexOf;return e===Hs||i6(Hs,e)&&r===Hs.indexOf?o6:r}});var fT=i((VQ,lT)=>{"use strict";var u6=cT();lT.exports=u6});var vT=i((YQ,pT)=>{"use strict";var s6=fT();pT.exports=s6});var mT=i((JQ,dT)=>{"use strict";var c6=vT();dT.exports=c6});var yT=i((QQ,hT)=>{"use strict";hT.exports=mT()});var NT=i(()=>{"use strict";var m6=q(),h6=ne(),AT=$n(),y6=P(),b6=y6(function(){AT(1)});m6({target:"Object",stat:!0,forced:b6},{keys:function(r){return AT(h6(r))}})});var jT=i((tZ,MT)=>{"use strict";NT();var g6=J();MT.exports=g6.Object.keys});var $T=i((nZ,LT)=>{"use strict";var q6=jT();LT.exports=q6});var DT=i((aZ,FT)=>{"use strict";var x6=$T();FT.exports=x6});var GT=i((iZ,BT)=>{"use strict";var w6=DT();BT.exports=w6});var WT=i((oZ,UT)=>{"use strict";UT.exports=GT()});var KT=i((uZ,HT)=>{HT.exports=WT()});var Xs=i((gZ,VT)=>{var Qs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},I6=Qs.yellow,_6=Object.keys(Qs),P6=/^#[0-9a-fA-F]{6}$/;VT.exports={COLOR_PRESETS:Qs,DEFAULT_COLOR:I6,PRESET_NAMES:_6,HEX_COLOR_REGEX:P6}});var p0=i((MZ,f0)=>{var l0={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},j6=Object.keys(l0);f0.exports={ALLOWED_REACTIONS:l0,ALLOWED_REACTION_EMOJIS:j6}});var Je="";function mc(e){Je=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function hc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function si({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await cr(f,"Failed to create comment"),f.json()}async function ci(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await cr(a,"Failed to update comment"),a.json()}async function yc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function bc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function gc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function qc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var mF=y(Kr(),1),hF=y(Kn(),1),yF=y(sa(),1),bF=y(ca(),1),gF=y(la(),1);var Fu=y(ot(),1);function mb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Fu.default.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Fu.default(function(n,a){var o=e.apply(r,t);function u(c){mb(o,n,a,u,s,"next",c)}function s(c){mb(o,n,a,u,s,"throw",c)}u(void 0)})}}function Ht(e,r){this.v=e,this.k=r}function ir(e){return new Ht(e,0)}var Du=y(ot(),1),Cb=y(ke(),1),Tb=y(Ca(),1);function _e(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Ht;Du.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Du.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof Cb.default=="function"&&Tb.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var qF=y(le(),1),xF=y(Jq(),1);function fe(e){var r,t=vF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function vF(e){return"startContainer"in e}function ur(e){if(dF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function dF(e){return"startContainer"in e}var sx=y(ux(),1);function cx(e){if((0,sx.default)(e))return e}var wx=y(ke(),1),Sx=y(Vo(),1),Ex=y(cs(),1);function Cx(e,r){var t=e==null?null:typeof wx.default<"u"&&(0,Sx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Ex.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var Tx=y($i(),1),Ox=y(lo(),1);function Da(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function ls(e,r){if(e){var t;if(typeof e=="string")return Da(e,r);var n=(0,Tx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Ox.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Da(e,r):void 0}}function kx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return cx(e)||Cx(e,r)||ls(e,r)||kx()}var Ix=y(ke(),1),_x=y(Ca(),1),Px=y(en(),1),an=y(ot(),1);function st(e){var r,t,n,a=2;for(typeof Ix.default<"u"&&(t=_x.default,n=Px.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ba(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ba(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ba=function(n){this.s=n,this.n=n.next},Ba.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?an.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?an.default.reject(n):r(a.apply(this.s,arguments))}},new Ba(e)}var VD=y(le(),1);var GD=y(le(),1),UD=y(Kx(),1),WD=y(Vx(),1),HD=y(hw(),1),KD=y(Mw(),1),zD=y(hs(),1);var Vs=y(le(),1);var B3=y(le(),1);var bs=y(le(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Yw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ys=y(Yt(),1);var un=y(ke(),1),Jw=y(en(),1);function We(e){"@babel/helpers - typeof";return We=typeof un.default=="function"&&typeof Jw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},We(e)}var sS=y(uS(),1);function cS(e,r){if(We(e)!="object"||!e)return e;var t=e[sS.default];if(t!==void 0){var n=t.call(e,r||"default");if(We(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ga(e){var r=cS(e,"string");return We(r)=="symbol"?r:r+""}function lS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ys.default)(e,Ga(n.key),n)}}function sn(e,r,t){return r&&lS(e.prototype,r),t&&lS(e,t),(0,ys.default)(e,"prototype",{writable:!1}),e}var fS=y(Yt(),1);function Ir(e,r,t){return(r=Ga(r))in e?(0,fS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var pS=y(Kr(),1);var Ua="Iterator exhausted before seek ended.",cn=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Ue(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ua)}else for(;!on(this.currentChunk,n);){var s=this._readToNextChunk(),c=Ue(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ua)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,pS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Ue(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ua)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],b=m[1];if(t&&(u=x+u),b===null){if(o)break;throw new RangeError(Ua)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function dS(e,r){return gs.apply(this,arguments)}function gs(){return gs=Or(bs.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,x,b,g,O,I,w,E,S,T,L=arguments;return bs.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new cn(t()),p=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-m())/2),d=f.read(-x,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=s-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Wa(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Wa(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},I=Ha(O)(t()),_.next=16,I.next();case 16:if(w=_.sent,!(!w.done&&Yw(w.value,r))){_.next=21;break}return _.next=20,I.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(E.startChunk,E.startIndex-d.length),S=vS(f,p,!0),S!==void 0&&!o&&(S=Wa(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),T=vS(f,p,!1),T!==void 0&&!o&&(T=T+Wa(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(T===void 0||S.length<=T.length))){_.next=37;break}d=S+d,_.next=42;break;case 37:if(T===void 0){_.next=41;break}h=h+T,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(d=S+d),T!==void 0&&(h=h+T);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),gs.apply(this,arguments)}function vS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Wa(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(ZD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function ZD(e){return/^\s+$/.test(e)}var rE=y(Kr(),1),tE=y(Kn(),1),nE=y(sa(),1),aE=y(ca(),1),iE=y(la(),1);var ws=y(le(),1),oE=y(LS(),1),uE=y(XS(),1);function ZS(e,r){var t;if(typeof nE.default>"u"||(0,aE.default)(e)==null){if(Array.isArray(e)||(t=M3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,iE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function M3(e,r){var t;if(e){if(typeof e=="string")return eE(e,r);var n=(0,rE.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,tE.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eE(e,r)}}function eE(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ha(e){return function(){var r=_e(ws.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,x,b,g,O,I,w,E,S,T,L,Ee,_,te,Ce,Z,F;return ws.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=ZS(l),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(x=m.value,b=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-b,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-b,(O<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),I=c.length-b,!(I<=v.length)){C.next=24;break}if(!(0,oE.default)(v).call(v,c.substring(b))){C.next=22;break}return C.next=22,x;case 22:C.next=25;break;case 24:v===c.substring(b,b+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(l=d,!(c.length<=v.length)){C.next=49;break}w=0;case 38:if(!(w<=v.length)){C.next=49;break}if(E=v.indexOf(c,w),E!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:C.next=38;break;case 49:for(S=[],T=Math.max(v.length-c.length+1,0),L=function(Ye){var vc=v[Ye];S=(0,uE.default)(S).call(S,function(O0){return vc===c[Ye-O0]}),vc===c[0]&&S.push(Ye)},Ee=T;Ee<v.length;Ee++)L(Ee);_=ZS(S);try{for(_.s();!(te=_.n()).done;)Ce=te.value,Z=v.length-Ce,F={charactersMatched:Z},Z>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ce+u.length+o.length),(Z>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ce+u.length),l.push(F)}catch(Nr){_.e(Nr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var F3=y(le(),1);var j3=y(Kr(),1),L3=y(hs(),1);var D3=y(le(),1);var pn=y(CE(),1);var OE=y(Oa(),1),kE=y(Yt(),1);var Cs=y(ka(),1),TE=y(Vt(),1);function sr(e,r){var t;return sr=Cs.default?(0,TE.default)(t=Cs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function Ts(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,OE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,kE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function IE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _E(e,r){if(r&&(We(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return IE(e)}var PE=y(ka(),1),RE=y(Vt(),1),Os=y(Ta(),1);function _r(e){var r;return _r=PE.default?(0,RE.default)(r=Os.default).call(r):function(t){return t.__proto__||(0,Os.default)(t)},_r(e)}var zs=y(nT(),1),CT=y(Oa(),1);var bT=y(yT(),1);function gT(e){try{var r;return(0,bT.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var xT=y(Ka(),1),wT=y(cs(),1),ST=y(Vt(),1);var qT=y(Ka(),1);function Ks(){try{var e=!Boolean.prototype.valueOf.call((0,qT.default)(Boolean,[],function(){}))}catch{}return(Ks=function(){return!!e})()}function ET(e,r,t){if(Ks())return xT.default.apply(null,arguments);var n=[null];(0,wT.default)(n).apply(n,r);var a=new((0,ST.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function fn(e){var r=typeof zs.default=="function"?new zs.default:void 0;return fn=function(n){if(n===null||!gT(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return ET(n,arguments,_r(this).constructor)}return a.prototype=(0,CT.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},fn(e)}function kT(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=TT(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=TT(e.endContainer,e.endOffset),l=Ue(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function TT(e,r){var t;if(OT(e))return[e,r];var n;if(l6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(OT(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function OT(e){return e.nodeType===Node.TEXT_NODE}function l6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function _T(e){var r=f6();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,pn.default)(n,arguments,o)}else a=n.apply(this,arguments);return _E(this,a)}}function f6(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Za=function(e){Ts(t,e);var r=_T(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),p6=function(e){Ts(t,e);var r=_T(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!IT(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Za}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!IT(t))throw new Za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new p6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=kT(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function IT(e){return e.nodeType===Node.TEXT_NODE}function PT(e,r){return Ys.apply(this,arguments)}function Ys(){return Ys=Or(Vs.default.mark(function e(r,t){var n,a,o,u=arguments;return Vs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??fe(r)),o=new Pr(a),c.next=5,dS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ys.apply(this,arguments)}var Js=y(le(),1);function RT(e){var r=Ha(e);return function(){var t=_e(Js.default.mark(function a(o){var u,s,c,l,f,p,v,d;return Js.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var v6=y(le(),1);var d6=y(le(),1);var S6=y(KT(),1),E6=y(Kr(),1),C6=y(Kn(),1),T6=y(sa(),1),O6=y(ca(),1),k6=y(la(),1);async function zT(e,r){let t=await PT(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function vn(e,r){let t=RT({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ye=y(Xs()),dn=y(Xs());function ct(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return dn.COLOR_PRESETS[r]?dn.COLOR_PRESETS[r]:dn.HEX_COLOR_REGEX.test(r)?r:null}function ei(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var lt="fb-highlight",YT="fb-highlight-active",ri=new Map,mn=null;function QT(e){mn=e}function hn(e,r,t){let n=ct(t)||ye.DEFAULT_COLOR;ri.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=JT(e,r,n);a.push(o)}else{let o=A6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(JT(c,r,n))}}return a}function JT(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return R6(e,r,u,t);let s=document.createElement("mark");s.className=lt,s.dataset.commentId=r,s.style.backgroundColor=ei(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{mn&&mn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function R6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",lt),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let b=0;b<a.length;b++){let g=a[b],O=document.createElementNS(o,"rect"),I=t.createSVGPoint();I.x=g.left,I.y=g.top;let w=I.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",v.appendChild(O)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=b=>{b.preventDefault(),b.stopPropagation(),mn&&mn(r)};return h.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",x),b.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function ti(e){ri.delete(e),document.querySelectorAll(`.${lt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function XT(){ri.clear(),document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function yn(e){document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ri.get(t)||ye.DEFAULT_COLOR,o=ei(a,.55),u=ei(a,.35);n?r.classList.add(YT):r.classList.remove(YT),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Zs(e){let r=document.querySelector(`.${lt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function A6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function ZT(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function e0(e,r){let t=ZT(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var N6=`
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
`,r0=null,t0=null;function n0(e,r){t0=e,r0=r,M6()}function M6(){let e=document.createElement("style");e.textContent=N6,document.head.appendChild(e)}function a0(){let e=r0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(t0.contentSelector||"body").innerHTML,c=e0(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ke(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function i0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function ec(e,r){return e.length>r?e.slice(0,r)+"...":e}function o0(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var bn=null;function s0(e){bn=document.createElement("div"),bn.className="fb-toast-container",e.appendChild(bn)}function ze(e,r="success"){if(!bn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>u0(t)),t.appendChild(o)}bn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>u0(t),r==="error"?8e3:4e3)}function u0(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function c0(e,r){return r<=0?0:(e%r+r)%r}var ni=y(p0());var L6=320,m0="feedback-layer-commenter",B=null,pe=null,we=null,rc=null,h0=null,tc=null,nc=null,ac=null,ic=null,xn=null,$6=null,oc=null,y0=!1,b0=[],uc=new Set,Re=-1,gn=null,v0=!1;function F6(){v0||(v0=!0,Y6())}function Ve(){return localStorage.getItem(m0)||""}function g0({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){h0=e,tc=r,nc=t,ac=n,ic=a,xn=o,$6=u,oc=s||null,F6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-shortcuts-btn" title="Keyboard shortcuts (?)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${Ke(Ve())}">
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>ft()),document.body.appendChild(c),document.body.appendChild(B),s0(B),pe=B.querySelector(".fb-comment-list"),pe.setAttribute("role","list"),we=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(m0,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>a0()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>x0()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>sc());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{y0=d.checked,ve(b0,uc)}),document.addEventListener("keydown",B6)}function ft(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),U6(),pe?.querySelector(".fb-thread .fb-cmt-card")&&ai(0)}function sc(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),w0(),Re=-1,document.body.focus()}function q0(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function qn(){return pe?Array.from(pe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ai(e){let r=qn();if(r.length===0)return;e=c0(e,r.length),Re=e,pe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&uc.has(n.dataset.commentId)&&(yn(n.dataset.commentId),Zs(n.dataset.commentId))}function D6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),sc();return}if(!q0()){if(r==="Enter"){let t=qn();if(Re>=0&&Re<t.length){e.preventDefault();let a=t[Re].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),qn().length===0)return;let n=Re<0?0:Re+1;ai(n);return}if(r==="k"){e.preventDefault();let t=qn();if(t.length===0)return;let n=Re<0?t.length-1:Re-1;ai(n);return}r==="?"&&(e.preventDefault(),x0())}}function x0(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
    <div class="fb-shortcuts-header">
      <strong>Keyboard Shortcuts</strong>
      <button class="fb-shortcuts-close">&times;</button>
    </div>
    <div class="fb-shortcuts-body">
      <table class="fb-shortcuts-table">
        <tbody>
          <tr><td><kbd>s</kbd></td><td>Toggle sidebar open/closed</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close sidebar</td></tr>
          <tr><td><kbd>j</kbd></td><td>Next comment thread</td></tr>
          <tr><td><kbd>k</kbd></td><td>Previous comment thread</td></tr>
          <tr><td><kbd>Enter</kbd></td><td>Reply to focused thread</td></tr>
          <tr><td><kbd>Cmd+Enter</kbd></td><td>Submit comment or reply</td></tr>
          <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
        </tbody>
      </table>
    </div>
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function B6(e){q0()||e.key==="s"&&(e.preventDefault(),G6())}function G6(){B.classList.contains("fb-sidebar-collapsed")?ft():sc()}function U6(){w0(),gn=D6,document.addEventListener("keydown",gn)}function w0(){gn&&(document.removeEventListener("keydown",gn),gn=null)}function S0(e){if(ft(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}rc=e,we.style.display="";let r=Object.entries(ye.COLOR_PRESETS),t=oc||ye.DEFAULT_COLOR;we.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Ke(ec(e,120))}"</div>
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
  `;let n=t;we.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),we.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=we.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(h0({comment:u,commenter:Ve(),color:n}),we.style.display="none",rc=null)};we.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),we.querySelector(".fb-cancel-btn").addEventListener("click",()=>{we.style.display="none",rc=null}),we.scrollIntoView({behavior:"smooth",block:"nearest"})}function ve(e,r=new Set,t=new Map){b0=e,uc=r,Re=-1,pe.innerHTML="";let{topLevel:n,repliesByParent:a}=i0(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)});let s=[...o,...u],c=y0?s:s.filter(l=>l.status!=="closed");if(s.length===0){pe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){pe.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(d0(l,!1,f));let v=a.get(l.id)||[];for(let h of v)p.appendChild(d0(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),z6(l.id,p,d)}),p.appendChild(d),p.addEventListener("focus",()=>{let m=qn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&ai(m)}),pe.appendChild(p)}}function d0(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Ke(ec(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${Ke(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Ke(e.author)}</span>
      <span class="fb-cmt-time">${o0(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return H6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(yn(e.id),Zs(e.id)),pe.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),nc&&nc(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),V6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),tc&&tc(e.id)}),a}var cc=ni.ALLOWED_REACTIONS,W6=Object.keys(cc);function H6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=cc[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),xn&&xn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),K6(e,r,a)}),e.appendChild(a)}function K6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of W6){let s=cc[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),xn&&xn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function z6(e,r,t){ft();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ac&&ac({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function V6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=ct(e.color)||oc||ye.DEFAULT_COLOR,u=Object.entries(ye.COLOR_PRESETS);t.innerHTML=`
    ${a?`<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${u.map(([f,p])=>`<button type="button" class="fb-color-swatch${p===o?" fb-color-swatch-active":""}" data-color="${p}" title="${f}" style="background:${p};"></button>`).join("")}
      </div>
    </div>`:""}
    <textarea class="fb-form-textarea" rows="3">${Ke(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;ic&&ic(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function E0(e){let r=pe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(pe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function Y6(){let e=document.createElement("style");e.textContent=`
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

      --remarq-reaction-mine-bg: #e8f0fe;
      --remarq-reaction-mine-border: #1a73e8;
      --remarq-reaction-mine-text: #1a73e8;
      --remarq-reaction-mine-hover: #d2e3fc;
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

      --remarq-reaction-mine-bg: #1e2a4a;
      --remarq-reaction-mine-border: #6390e0;
      --remarq-reaction-mine-text: #7da8f0;
      --remarq-reaction-mine-hover: #253560;
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

        --remarq-reaction-mine-bg: #1e2a4a;
        --remarq-reaction-mine-border: #6390e0;
        --remarq-reaction-mine-text: #7da8f0;
        --remarq-reaction-mine-hover: #253560;
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
      width: ${L6}px;
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
    .fb-shortcuts-btn {
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
    .fb-shortcuts-btn:hover {
      background: #f3f0ff;
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
    .fb-cmt-orphaned-quote {
      font-size: 11px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
      padding: 4px 8px;
      border-left: 2px solid var(--remarq-danger);
      background: var(--remarq-error-bg);
      border-radius: 0 4px 4px 0;
      text-decoration: line-through;
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
    .fb-reactions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px;
      margin-top: 6px;
    }
    .fb-reaction-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid var(--remarq-border);
      background: var(--remarq-bg-secondary);
      font-size: 11px;
      color: var(--remarq-text-muted);
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge svg {
      color: var(--remarq-text-muted);
      flex-shrink: 0;
    }
    .fb-reaction-count {
      font-size: 11px;
      color: var(--remarq-text-muted);
    }
    .fb-reaction-badge:hover {
      border-color: var(--remarq-border-input);
      background: var(--remarq-bg-hover);
    }
    .fb-reaction-mine {
      border-color: var(--remarq-reaction-mine-border);
      background: var(--remarq-reaction-mine-bg);
    }
    .fb-reaction-mine svg {
      color: var(--remarq-reaction-mine-text);
    }
    .fb-reaction-mine .fb-reaction-count {
      color: var(--remarq-reaction-mine-text);
    }
    .fb-reaction-mine:hover {
      background: var(--remarq-reaction-mine-hover);
      border-color: var(--remarq-reaction-mine-border);
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid var(--remarq-border);
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-muted);
      cursor: pointer;
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: var(--remarq-border-input);
      background: var(--remarq-bg-hover);
    }
    .fb-emoji-picker {
      display: flex;
      gap: 2px;
      padding: 4px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border);
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--remarq-shadow);
    }
    .fb-emoji-option {
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      line-height: 1;
      color: var(--remarq-text-muted);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-emoji-option:hover {
      background: var(--remarq-bg-hover);
      color: var(--remarq-text);
    }
    .fb-filter-section {
      margin-bottom: 12px;
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

    /* Keyboard shortcuts modal */
    .fb-shortcuts-overlay {
      position: fixed;
      inset: 0;
      z-index: 10002;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-shortcuts-modal {
      background: white;
      border-radius: 12px;
      width: 340px;
      max-width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
    }
    .fb-shortcuts-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    .fb-shortcuts-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
      padding: 0 4px;
      line-height: 1;
    }
    .fb-shortcuts-body {
      padding: 12px 16px 16px;
    }
    .fb-shortcuts-table {
      width: 100%;
      border-collapse: collapse;
    }
    .fb-shortcuts-table td {
      padding: 6px 0;
      vertical-align: middle;
    }
    .fb-shortcuts-table td:first-child {
      width: 45%;
      white-space: nowrap;
    }
    .fb-shortcuts-table kbd {
      display: inline-block;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 11px;
      font-family: inherit;
      color: #374151;
      line-height: 1.4;
    }
    .fb-shortcuts-note {
      margin: 12px 0 0;
      font-size: 12px;
      color: #888;
      line-height: 1.4;
    }
  `,document.head.appendChild(e)}function C0(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}function J6(e){let r=new URL(e);return r.protocol=r.protocol==="https:"?"wss:":"ws:",r.pathname="/ws",r.toString()}function lc({apiBaseUrl:e,documentId:r,onEvent:t}){let n=J6(e),a=null,o=1e3,u=null,s=!1,c=!1;function l(){if(!s){c=!1;try{a=new WebSocket(n)}catch{f();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=p=>{try{let v=JSON.parse(p.data);if(v.type==="subscribed"&&v.documentId===r){c=!0;return}c&&t(v)}catch{}},a.onclose=()=>{c=!1,s||f()},a.onerror=()=>{}}}function f(){s||(u=setTimeout(()=>{l()},o),o=Math.min(o*2,3e4))}return l(),{close(){s=!0,clearTimeout(u),a&&(a.onclose=null,a.close())}}}var Ar=null,oi=null,En=null,pc=null,k=[],Rr=null,Se=null,U=new Set,W=new Map,wn=null,ii=null;function Q6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};mc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{C0(),Ar=document.querySelector(r.contentSelector)||document.body,oi=r.documentUri||window.location.origin+window.location.pathname,En=r.documentId||null,pc=ct(r.defaultColor)||null,ii=r.apiUrl||window.location.origin,document.documentElement.dataset.remarqTheme=r.theme,g0({onSubmit:tG,onDelete:pG,onResolve:nG,onReply:aG,onEdit:iG,onReaction:uG,onColorChange:oG,defaultColor:pc}),QT(a=>{ft(),E0(a),yn(a)}),eG(),await t(),await X6();{let a=En||(k.length>0?k[0].document:null);a&&(wn=lc({apiBaseUrl:ii,documentId:a,onEvent:T0}))}window.addEventListener("beforeunload",()=>{wn&&wn.close()}),n0(r,()=>k)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function X6(){try{k=await hc(oi,En),U=await Z6(k),ve(k,U,W)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function Z6(e){XT();let r=new Set;W.clear();for(let t of e)if(!t.parent)try{let n=await vn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},Ar);n&&t.status!=="closed"?(hn(n,t.id,t.color),r.add(t.id),W.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),W.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function eG(){document.addEventListener("mouseup",fc),document.addEventListener("keyup",fc),document.addEventListener("touchend",fc)}function fc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!Ar.contains(r.commonAncestorContainer)){Sn();return}rG(r)},10)}function rG(e){Sn();let r=e.getBoundingClientRect();Se=document.createElement("button"),Se.className="fb-annotate-tooltip",Se.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Se.style.top=window.scrollY+r.bottom+8+"px",Se.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Rr=await zT(o,Ar),S0(Rr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};Se.addEventListener("mousedown",t),Se.addEventListener("touchstart",t),document.body.appendChild(Se)}function Sn(){Se&&(Se.remove(),Se=null)}async function tG({comment:e,commenter:r,color:t}){if(!Rr)return;let n=t||pc||null;try{let a=await si({uri:oi,document:En,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r,color:n});k.push(a);let o=await vn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),U.add(a.id),W.set(a.id,o)),ve(k,U,W),!wn&&ii&&a.document&&(wn=lc({apiBaseUrl:ii,documentId:a.document,onEvent:T0})),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Rr=null}async function ui(e){if(!e.parent)if(ti(e.id),W.delete(e.id),e.status!=="closed")try{let r=await vn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r?(hn(r,e.id,e.color),U.add(e.id),W.set(e.id,r)):U.delete(e.id)}catch(r){console.warn(`[feedback-layer] Could not anchor comment ${e.id}:`,r),U.delete(e.id)}else U.delete(e.id)}async function nG(e,r){try{let n=await yc(e,r?"closed":"open"),a=k.findIndex(o=>o.id===e);a!==-1&&(k[a]=n),await ui(n),ve(k,U,W)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function aG({parent_id:e,comment:r,commenter:t}){try{let n=await si({uri:oi,document:En,body:r,author:t,parent:e});k.push(n),ve(k,U,W)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function iG(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await ci(e,n),o=k.findIndex(u=>u.id===e);o!==-1&&(k[o]=a),t!==void 0&&await ui(a),ve(k,U,W)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function oG(e,r){try{let t=await ci(e,{color:r}),n=k.findIndex(a=>a.id===e);n!==-1&&(k[n]=t),await ui(t),ve(k,U,W)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function uG(e,r){let t=Ve();if(t)try{let o=k.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await qc(e,r,t):u=await gc(e,r,t);let s=k.findIndex(c=>c.id===e);s!==-1&&(k[s]={...k[s],reactions:u.reactions}),ve(k,U,W)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function sG(e){if(!k.some(r=>r.id===e.id)){if(k.push(e),!e.parent){let r=await vn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r&&(hn(r,e.id,e.color),U.add(e.id),W.set(e.id,r))}ve(k,U,W)}}async function cG(e){let r=k.findIndex(t=>t.id===e.id);r!==-1&&(k[r]=e,await ui(e),ve(k,U,W))}async function lG(e){k.some(r=>r.id===e.id)&&(ti(e.id),U.delete(e.id),W.delete(e.id),k=k.filter(r=>r.id!==e.id&&r.parent!==e.id),ve(k,U,W))}var fG={"comment:created":sG,"comment:updated":cG,"comment:deleted":lG};async function T0(e){let{type:r,comment:t}=e;if(!t)return;let n=fG[r];if(n)try{await n(t)}catch(a){console.warn(`[feedback-layer] WebSocket ${r} failed for ${t.id}:`,a)}}async function pG(e){try{await bc(e),ti(e),U.delete(e),k=k.filter(r=>r.id!==e&&r.parent!==e),ve(k,U,W)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{Q6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
