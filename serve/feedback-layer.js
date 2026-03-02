var FeedbackLayer=(()=>{var _C=Object.create;var hc=Object.defineProperty;var PC=Object.getOwnPropertyDescriptor;var RC=Object.getOwnPropertyNames;var AC=Object.getPrototypeOf,NC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var MC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of RC(r))!NC.call(e,a)&&a!==t&&hc(e,a,{get:()=>r[a],enumerable:!(n=PC(r,a))||n.enumerable});return e};var y=(e,r,t)=>(t=e!=null?_C(AC(e)):{},MC(r||!e||!e.__esModule?hc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((bG,Sc)=>{"use strict";Sc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((gG,Ec)=>{"use strict";var jC=P();Ec.exports=!jC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((qG,Oc)=>{"use strict";var Tc=Mr(),Cc=Function.prototype,ci=Cc.call,LC=Tc&&Cc.bind.bind(ci,ci);Oc.exports=Tc?LC:function(e){return function(){return ci.apply(e,arguments)}}});var W=i((xG,kc)=>{"use strict";var $C=N();kc.exports=$C({}.isPrototypeOf)});var R=i((li,Ic)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};Ic.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof li=="object"&&li)||function(){return this}()||Function("return this")()});var jr=i((wG,Ac)=>{"use strict";var FC=Mr(),Rc=Function.prototype,_c=Rc.apply,Pc=Rc.call;Ac.exports=typeof Reflect=="object"&&Reflect.apply||(FC?Pc.bind(_c):function(){return Pc.apply(_c,arguments)})});var Ce=i((SG,Mc)=>{"use strict";var Nc=N(),DC=Nc({}.toString),BC=Nc("".slice);Mc.exports=function(e){return BC(DC(e),8,-1)}});var dt=i((EG,jc)=>{"use strict";var GC=Ce(),UC=N();jc.exports=function(e){if(GC(e)==="Function")return UC(e)}});var M=i((TG,Lc)=>{"use strict";var fi=typeof document=="object"&&document.all;Lc.exports=typeof fi>"u"&&fi!==void 0?function(e){return typeof e=="function"||e===fi}:function(e){return typeof e=="function"}});var K=i((CG,$c)=>{"use strict";var HC=P();$c.exports=!HC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((OG,Fc)=>{"use strict";var WC=Mr(),Tn=Function.prototype.call;Fc.exports=WC?Tn.bind(Tn):function(){return Tn.apply(Tn,arguments)}});var pi=i(Gc=>{"use strict";var Dc={}.propertyIsEnumerable,Bc=Object.getOwnPropertyDescriptor,KC=Bc&&!Dc.call({1:2},1);Gc.f=KC?function(r){var t=Bc(this,r);return!!t&&t.enumerable}:Dc});var Qe=i((IG,Uc)=>{"use strict";Uc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Cn=i((_G,Hc)=>{"use strict";var zC=N(),VC=P(),YC=Ce(),di=Object,JC=zC("".split);Hc.exports=VC(function(){return!di("z").propertyIsEnumerable(0)})?function(e){return YC(e)==="String"?JC(e,""):di(e)}:di});var lr=i((PG,Wc)=>{"use strict";Wc.exports=function(e){return e==null}});var fr=i((RG,Kc)=>{"use strict";var QC=lr(),XC=TypeError;Kc.exports=function(e){if(QC(e))throw new XC("Can't call method on "+e);return e}});var Ne=i((AG,zc)=>{"use strict";var ZC=Cn(),eO=fr();zc.exports=function(e){return ZC(eO(e))}});var $=i((NG,Vc)=>{"use strict";var rO=M();Vc.exports=function(e){return typeof e=="object"?e!==null:rO(e)}});var J=i((MG,Yc)=>{"use strict";Yc.exports={}});var z=i((jG,Qc)=>{"use strict";var vi=J(),mi=R(),tO=M(),Jc=function(e){return tO(e)?e:void 0};Qc.exports=function(e,r){return arguments.length<2?Jc(vi[e])||Jc(mi[e]):vi[e]&&vi[e][r]||mi[e]&&mi[e][r]}});var Lr=i((LG,el)=>{"use strict";var nO=R(),Xc=nO.navigator,Zc=Xc&&Xc.userAgent;el.exports=Zc?String(Zc):""});var $r=i(($G,ol)=>{"use strict";var il=R(),hi=Lr(),rl=il.process,tl=il.Deno,nl=rl&&rl.versions||tl&&tl.version,al=nl&&nl.v8,ge,On;al&&(ge=al.split("."),On=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!On&&hi&&(ge=hi.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=hi.match(/Chrome\/(\d+)/),ge&&(On=+ge[1])));ol.exports=On});var pr=i((FG,sl)=>{"use strict";var ul=$r(),aO=P(),iO=R(),oO=iO.String;sl.exports=!!Object.getOwnPropertySymbols&&!aO(function(){var e=Symbol("symbol detection");return!oO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ul&&ul<41})});var yi=i((DG,cl)=>{"use strict";var uO=pr();cl.exports=uO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((BG,ll)=>{"use strict";var sO=z(),cO=M(),lO=W(),fO=yi(),pO=Object;ll.exports=fO?function(e){return typeof e=="symbol"}:function(e){var r=sO("Symbol");return cO(r)&&lO(r.prototype,pO(e))}});var Xe=i((GG,fl)=>{"use strict";var dO=String;fl.exports=function(e){try{return dO(e)}catch{return"Object"}}});var D=i((UG,pl)=>{"use strict";var vO=M(),mO=Xe(),hO=TypeError;pl.exports=function(e){if(vO(e))return e;throw new hO(mO(e)+" is not a function")}});var kn=i((HG,dl)=>{"use strict";var yO=D(),bO=lr();dl.exports=function(e,r){var t=e[r];return bO(t)?void 0:yO(t)}});var ml=i((WG,vl)=>{"use strict";var bi=G(),gi=M(),qi=$(),gO=TypeError;vl.exports=function(e,r){var t,n;if(r==="string"&&gi(t=e.toString)&&!qi(n=bi(t,e))||gi(t=e.valueOf)&&!qi(n=bi(t,e))||r!=="string"&&gi(t=e.toString)&&!qi(n=bi(t,e)))return n;throw new gO("Can't convert object to primitive value")}});var re=i((KG,hl)=>{"use strict";hl.exports=!0});var gl=i((zG,bl)=>{"use strict";var yl=R(),qO=Object.defineProperty;bl.exports=function(e,r){try{qO(yl,e,{value:r,configurable:!0,writable:!0})}catch{yl[e]=r}return r}});var vt=i((VG,wl)=>{"use strict";var xO=re(),wO=R(),SO=gl(),ql="__core-js_shared__",xl=wl.exports=wO[ql]||SO(ql,{});(xl.versions||(xl.versions=[])).push({version:"3.48.0",mode:xO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((YG,El)=>{"use strict";var Sl=vt();El.exports=function(e,r){return Sl[e]||(Sl[e]=r||{})}});var ne=i((JG,Tl)=>{"use strict";var EO=fr(),TO=Object;Tl.exports=function(e){return TO(EO(e))}});var V=i((QG,Cl)=>{"use strict";var CO=N(),OO=ne(),kO=CO({}.hasOwnProperty);Cl.exports=Object.hasOwn||function(r,t){return kO(OO(r),t)}});var Dr=i((XG,Ol)=>{"use strict";var IO=N(),_O=0,PO=Math.random(),RO=IO(1.1.toString);Ol.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+RO(++_O+PO,36)}});var A=i((ZG,Il)=>{"use strict";var AO=R(),NO=dr(),kl=V(),MO=Dr(),jO=pr(),LO=yi(),Br=AO.Symbol,xi=NO("wks"),$O=LO?Br.for||Br:Br&&Br.withoutSetter||MO;Il.exports=function(e){return kl(xi,e)||(xi[e]=jO&&kl(Br,e)?Br[e]:$O("Symbol."+e)),xi[e]}});var Al=i((e8,Rl)=>{"use strict";var FO=G(),_l=$(),Pl=Fr(),DO=kn(),BO=ml(),GO=A(),UO=TypeError,HO=GO("toPrimitive");Rl.exports=function(e,r){if(!_l(e)||Pl(e))return e;var t=DO(e,HO),n;if(t){if(r===void 0&&(r="default"),n=FO(t,e,r),!_l(n)||Pl(n))return n;throw new UO("Can't convert object to primitive value")}return r===void 0&&(r="number"),BO(e,r)}});var In=i((r8,Nl)=>{"use strict";var WO=Al(),KO=Fr();Nl.exports=function(e){var r=WO(e,"string");return KO(r)?r:r+""}});var _n=i((t8,jl)=>{"use strict";var zO=R(),Ml=$(),wi=zO.document,VO=Ml(wi)&&Ml(wi.createElement);jl.exports=function(e){return VO?wi.createElement(e):{}}});var Si=i((n8,Ll)=>{"use strict";var YO=K(),JO=P(),QO=_n();Ll.exports=!YO&&!JO(function(){return Object.defineProperty(QO("div"),"a",{get:function(){return 7}}).a!==7})});var mt=i(Fl=>{"use strict";var XO=K(),ZO=G(),ek=pi(),rk=Qe(),tk=Ne(),nk=In(),ak=V(),ik=Si(),$l=Object.getOwnPropertyDescriptor;Fl.f=XO?$l:function(r,t){if(r=tk(r),t=nk(t),ik)try{return $l(r,t)}catch{}if(ak(r,t))return rk(!ZO(ek.f,r,t),r[t])}});var Ei=i((i8,Dl)=>{"use strict";var ok=P(),uk=M(),sk=/#|\.prototype\./,ht=function(e,r){var t=lk[ck(e)];return t===pk?!0:t===fk?!1:uk(r)?ok(r):!!r},ck=ht.normalize=function(e){return String(e).replace(sk,".").toLowerCase()},lk=ht.data={},fk=ht.NATIVE="N",pk=ht.POLYFILL="P";Dl.exports=ht});var Q=i((o8,Gl)=>{"use strict";var Bl=dt(),dk=D(),vk=Mr(),mk=Bl(Bl.bind);Gl.exports=function(e,r){return dk(e),r===void 0?e:vk?mk(e,r):function(){return e.apply(r,arguments)}}});var Ti=i((u8,Ul)=>{"use strict";var hk=K(),yk=P();Ul.exports=hk&&yk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var ee=i((s8,Hl)=>{"use strict";var bk=$(),gk=String,qk=TypeError;Hl.exports=function(e){if(bk(e))return e;throw new qk(gk(e)+" is not an object")}});var ae=i(Kl=>{"use strict";var xk=K(),wk=Si(),Sk=Ti(),Pn=ee(),Wl=In(),Ek=TypeError,Ci=Object.defineProperty,Tk=Object.getOwnPropertyDescriptor,Oi="enumerable",ki="configurable",Ii="writable";Kl.f=xk?Sk?function(r,t,n){if(Pn(r),t=Wl(t),Pn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ii in n&&!n[Ii]){var a=Tk(r,t);a&&a[Ii]&&(r[t]=n.value,n={configurable:ki in n?n[ki]:a[ki],enumerable:Oi in n?n[Oi]:a[Oi],writable:!1})}return Ci(r,t,n)}:Ci:function(r,t,n){if(Pn(r),t=Wl(t),Pn(n),wk)try{return Ci(r,t,n)}catch{}if("get"in n||"set"in n)throw new Ek("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((l8,zl)=>{"use strict";var Ck=K(),Ok=ae(),kk=Qe();zl.exports=Ck?function(e,r,t){return Ok.f(e,r,kk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((f8,Yl)=>{"use strict";var yt=R(),Ik=jr(),_k=dt(),Pk=M(),Rk=mt().f,Ak=Ei(),Gr=J(),Nk=Q(),Ur=Oe(),Vl=V();vt();var Mk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return Ik(e,this,arguments)};return r.prototype=e.prototype,r};Yl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?yt:a?yt[t]:yt[t]&&yt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,d,v,h,m,x,b;for(d in r)l=Ak(n?d:t+(a?".":"#")+d,e.forced),f=!l&&u&&Vl(u,d),h=s[d],f&&(e.dontCallGetSet?(b=Rk(u,d),m=b&&b.value):m=u[d]),v=f&&m?m:r[d],!(!l&&!o&&typeof h==typeof v)&&(e.bind&&f?x=Nk(v,yt):e.wrap&&f?x=Mk(v):o&&Pk(v)?x=_k(v):x=v,(e.sham||v&&v.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,d,x),o&&(p=t+"Prototype",Vl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],d,v),e.real&&c&&(l||!c[d])&&Ur(c,d,v)))}});var Me=i((p8,Jl)=>{"use strict";var jk=Ce();Jl.exports=Array.isArray||function(r){return jk(r)==="Array"}});var Rn=i((d8,Xl)=>{"use strict";var Lk=A(),$k=Lk("toStringTag"),Ql={};Ql[$k]="z";Xl.exports=String(Ql)==="[object z]"});var bt=i((v8,Zl)=>{"use strict";var Fk=Rn(),Dk=M(),An=Ce(),Bk=A(),Gk=Bk("toStringTag"),Uk=Object,Hk=An(function(){return arguments}())==="Arguments",Wk=function(e,r){try{return e[r]}catch{}};Zl.exports=Fk?An:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Wk(r=Uk(e),Gk))=="string"?t:Hk?An(r):(n=An(r))==="Object"&&Dk(r.callee)?"Arguments":n}});var Pi=i((m8,ef)=>{"use strict";var Kk=N(),zk=M(),_i=vt(),Vk=Kk(Function.toString);zk(_i.inspectSource)||(_i.inspectSource=function(e){return Vk(e)});ef.exports=_i.inspectSource});var qt=i((h8,of)=>{"use strict";var Yk=N(),Jk=P(),rf=M(),Qk=bt(),Xk=z(),Zk=Pi(),tf=function(){},nf=Xk("Reflect","construct"),Ri=/^\s*(?:class|function)\b/,e1=Yk(Ri.exec),r1=!Ri.test(tf),gt=function(r){if(!rf(r))return!1;try{return nf(tf,[],r),!0}catch{return!1}},af=function(r){if(!rf(r))return!1;switch(Qk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return r1||!!e1(Ri,Zk(r))}catch{return!0}};af.sham=!0;of.exports=!nf||Jk(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?af:gt});var sf=i((y8,uf)=>{"use strict";var t1=Math.ceil,n1=Math.floor;uf.exports=Math.trunc||function(r){var t=+r;return(t>0?n1:t1)(t)}});var Nn=i((b8,cf)=>{"use strict";var a1=sf();cf.exports=function(e){var r=+e;return r!==r||r===0?0:a1(r)}});var Ai=i((g8,lf)=>{"use strict";var i1=Nn(),o1=Math.max,u1=Math.min;lf.exports=function(e,r){var t=i1(e);return t<0?o1(t+r,0):u1(t,r)}});var Ni=i((q8,ff)=>{"use strict";var s1=Nn(),c1=Math.min;ff.exports=function(e){var r=s1(e);return r>0?c1(r,9007199254740991):0}});var de=i((x8,pf)=>{"use strict";var l1=Ni();pf.exports=function(e){return l1(e.length)}});var Hr=i((w8,df)=>{"use strict";var f1=K(),p1=ae(),d1=Qe();df.exports=function(e,r,t){f1?p1.f(e,r,d1(0,t)):e[r]=t}});var Wr=i((S8,vf)=>{"use strict";var v1=K(),m1=Me(),h1=TypeError,y1=Object.getOwnPropertyDescriptor,b1=v1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();vf.exports=b1?function(e,r){if(m1(e)&&!y1(e,"length").writable)throw new h1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=i((E8,mf)=>{"use strict";var g1=P(),q1=A(),x1=$r(),w1=q1("species");mf.exports=function(e){return x1>=51||!g1(function(){var r=[],t=r.constructor={};return t[w1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((T8,hf)=>{"use strict";var S1=N();hf.exports=S1([].slice)});var gf=i(()=>{"use strict";var E1=q(),yf=Me(),T1=qt(),C1=$(),bf=Ai(),O1=de(),k1=Ne(),I1=Hr(),_1=Wr(),P1=A(),R1=xt(),A1=vr(),N1=R1("slice"),M1=P1("species"),Mi=Array,j1=Math.max;E1({target:"Array",proto:!0,forced:!N1},{slice:function(r,t){var n=k1(this),a=O1(n),o=bf(r,a),u=bf(t===void 0?a:t,a),s,c,l;if(yf(n)&&(s=n.constructor,T1(s)&&(s===Mi||yf(s.prototype))?s=void 0:C1(s)&&(s=s[M1],s===null&&(s=void 0)),s===Mi||s===void 0))return A1(n,o,u);for(c=new(s===void 0?Mi:s)(j1(u-o,0)),l=0;o<u;o++,l++)o in n&&I1(c,l,n[o]);return _1(c,l),c}})});var se=i((k8,qf)=>{"use strict";var L1=R(),$1=J();qf.exports=function(e,r){var t=$1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=L1[e],o=a&&a.prototype;return o&&o[r]}});var wf=i((I8,xf)=>{"use strict";gf();var F1=se();xf.exports=F1("Array","slice")});var Ef=i((_8,Sf)=>{"use strict";var D1=W(),B1=wf(),ji=Array.prototype;Sf.exports=function(e){var r=e.slice;return e===ji||D1(ji,e)&&r===ji.slice?B1:r}});var Cf=i((P8,Tf)=>{"use strict";var G1=Ef();Tf.exports=G1});var kf=i((R8,Of)=>{"use strict";var U1=Cf();Of.exports=U1});var _f=i((A8,If)=>{"use strict";var H1=kf();If.exports=H1});var Li=i((N8,Pf)=>{"use strict";Pf.exports=_f()});var Kr=i((M8,Rf)=>{Rf.exports=Li()});var Ze=i((j8,Af)=>{"use strict";var W1=bt(),K1=String;Af.exports=function(e){if(W1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return K1(e)}});var Lf=i((L8,jf)=>{"use strict";var $i=N(),z1=Nn(),V1=Ze(),Y1=fr(),J1=$i("".charAt),Nf=$i("".charCodeAt),Q1=$i("".slice),Mf=function(e){return function(r,t){var n=V1(Y1(r)),a=z1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Nf(n,a),u<55296||u>56319||a+1===o||(s=Nf(n,a+1))<56320||s>57343?e?J1(n,a):u:e?Q1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};jf.exports={codeAt:Mf(!1),charAt:Mf(!0)}});var Df=i(($8,Ff)=>{"use strict";var X1=R(),Z1=M(),$f=X1.WeakMap;Ff.exports=Z1($f)&&/native code/.test(String($f))});var wt=i((F8,Gf)=>{"use strict";var eI=dr(),rI=Dr(),Bf=eI("keys");Gf.exports=function(e){return Bf[e]||(Bf[e]=rI(e))}});var zr=i((D8,Uf)=>{"use strict";Uf.exports={}});var er=i((B8,Kf)=>{"use strict";var tI=Df(),Wf=R(),nI=$(),aI=Oe(),Fi=V(),Di=vt(),iI=wt(),oI=zr(),Hf="Object already initialized",Bi=Wf.TypeError,uI=Wf.WeakMap,Mn,St,jn,sI=function(e){return jn(e)?St(e):Mn(e,{})},cI=function(e){return function(r){var t;if(!nI(r)||(t=St(r)).type!==e)throw new Bi("Incompatible receiver, "+e+" required");return t}};tI||Di.state?(qe=Di.state||(Di.state=new uI),qe.get=qe.get,qe.has=qe.has,qe.set=qe.set,Mn=function(e,r){if(qe.has(e))throw new Bi(Hf);return r.facade=e,qe.set(e,r),r},St=function(e){return qe.get(e)||{}},jn=function(e){return qe.has(e)}):(mr=iI("state"),oI[mr]=!0,Mn=function(e,r){if(Fi(e,mr))throw new Bi(Hf);return r.facade=e,aI(e,mr,r),r},St=function(e){return Fi(e,mr)?e[mr]:{}},jn=function(e){return Fi(e,mr)});var qe,mr;Kf.exports={set:Mn,get:St,has:jn,enforce:sI,getterFor:cI}});var Yf=i((G8,Vf)=>{"use strict";var Gi=K(),lI=V(),zf=Function.prototype,fI=Gi&&Object.getOwnPropertyDescriptor,Ui=lI(zf,"name"),pI=Ui&&function(){}.name==="something",dI=Ui&&(!Gi||Gi&&fI(zf,"name").configurable);Vf.exports={EXISTS:Ui,PROPER:pI,CONFIGURABLE:dI}});var Hi=i((U8,Qf)=>{"use strict";var vI=Ne(),mI=Ai(),hI=de(),Jf=function(e){return function(r,t,n){var a=vI(r),o=hI(a);if(o===0)return!e&&-1;var u=mI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Qf.exports={includes:Jf(!0),indexOf:Jf(!1)}});var Ki=i((H8,Zf)=>{"use strict";var yI=N(),Wi=V(),bI=Ne(),gI=Hi().indexOf,qI=zr(),Xf=yI([].push);Zf.exports=function(e,r){var t=bI(e),n=0,a=[],o;for(o in t)!Wi(qI,o)&&Wi(t,o)&&Xf(a,o);for(;r.length>n;)Wi(t,o=r[n++])&&(~gI(a,o)||Xf(a,o));return a}});var Ln=i((W8,ep)=>{"use strict";ep.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var $n=i((K8,rp)=>{"use strict";var xI=Ki(),wI=Ln();rp.exports=Object.keys||function(r){return xI(r,wI)}});var zi=i(tp=>{"use strict";var SI=K(),EI=Ti(),TI=ae(),CI=ee(),OI=Ne(),kI=$n();tp.f=SI&&!EI?Object.defineProperties:function(r,t){CI(r);for(var n=OI(t),a=kI(t),o=a.length,u=0,s;o>u;)TI.f(r,s=a[u++],n[s]);return r}});var Vi=i((V8,np)=>{"use strict";var II=z();np.exports=II("document","documentElement")});var rr=i((Y8,lp)=>{"use strict";var _I=ee(),PI=zi(),ap=Ln(),RI=zr(),AI=Vi(),NI=_n(),MI=wt(),ip=">",op="<",Ji="prototype",Qi="script",sp=MI("IE_PROTO"),Yi=function(){},cp=function(e){return op+Qi+ip+e+op+"/"+Qi+ip},up=function(e){e.write(cp("")),e.close();var r=e.parentWindow.Object;return e=null,r},jI=function(){var e=NI("iframe"),r="java"+Qi+":",t;return e.style.display="none",AI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(cp("document.F=Object")),t.close(),t.F},Fn,Dn=function(){try{Fn=new ActiveXObject("htmlfile")}catch{}Dn=typeof document<"u"?document.domain&&Fn?up(Fn):jI():up(Fn);for(var e=ap.length;e--;)delete Dn[Ji][ap[e]];return Dn()};RI[sp]=!0;lp.exports=Object.create||function(r,t){var n;return r!==null?(Yi[Ji]=_I(r),n=new Yi,Yi[Ji]=null,n[sp]=r):n=Dn(),t===void 0?n:PI.f(n,t)}});var Xi=i((J8,fp)=>{"use strict";var LI=P();fp.exports=!LI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((Q8,dp)=>{"use strict";var $I=V(),FI=M(),DI=ne(),BI=wt(),GI=Xi(),pp=BI("IE_PROTO"),Zi=Object,UI=Zi.prototype;dp.exports=GI?Zi.getPrototypeOf:function(e){var r=DI(e);if($I(r,pp))return r[pp];var t=r.constructor;return FI(t)&&r instanceof t?t.prototype:r instanceof Zi?UI:null}});var je=i((X8,vp)=>{"use strict";var HI=Oe();vp.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:HI(e,r,t),e}});var no=i((Z8,yp)=>{"use strict";var WI=P(),KI=M(),zI=$(),VI=rr(),mp=Et(),YI=je(),JI=A(),QI=re(),to=JI("iterator"),hp=!1,Le,eo,ro;[].keys&&(ro=[].keys(),"next"in ro?(eo=mp(mp(ro)),eo!==Object.prototype&&(Le=eo)):hp=!0);var XI=!zI(Le)||WI(function(){var e={};return Le[to].call(e)!==e});XI?Le={}:QI&&(Le=VI(Le));KI(Le[to])||YI(Le,to,function(){return this});yp.exports={IteratorPrototype:Le,BUGGY_SAFARI_ITERATORS:hp}});var gp=i((eU,bp)=>{"use strict";var ZI=Rn(),e_=bt();bp.exports=ZI?{}.toString:function(){return"[object "+e_(this)+"]"}});var $e=i((rU,xp)=>{"use strict";var r_=Rn(),t_=ae().f,n_=Oe(),a_=V(),i_=gp(),o_=A(),qp=o_("toStringTag");xp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(a_(a,qp)||t_(a,qp,{configurable:!0,value:r}),n&&!r_&&n_(a,"toString",i_))}});var hr=i((tU,wp)=>{"use strict";wp.exports={}});var Ep=i((nU,Sp)=>{"use strict";var u_=no().IteratorPrototype,s_=rr(),c_=Qe(),l_=$e(),f_=hr(),p_=function(){return this};Sp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=s_(u_,{next:c_(+!n,t)}),l_(e,a,!1,!0),f_[a]=p_,e}});var Cp=i((aU,Tp)=>{"use strict";var d_=N(),v_=D();Tp.exports=function(e,r,t){try{return d_(v_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var kp=i((iU,Op)=>{"use strict";var m_=$();Op.exports=function(e){return m_(e)||e===null}});var _p=i((oU,Ip)=>{"use strict";var h_=kp(),y_=String,b_=TypeError;Ip.exports=function(e){if(h_(e))return e;throw new b_("Can't set "+y_(e)+" as a prototype")}});var Tt=i((uU,Pp)=>{"use strict";var g_=Cp(),q_=$(),x_=fr(),w_=_p();Pp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=g_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return x_(a),w_(o),q_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Un=i((sU,Bp)=>{"use strict";var S_=q(),E_=G(),Bn=re(),Fp=Yf(),T_=M(),C_=Ep(),Rp=Et(),Ap=Tt(),O_=$e(),k_=Oe(),ao=je(),I_=A(),Np=hr(),Dp=no(),__=Fp.PROPER,P_=Fp.CONFIGURABLE,Mp=Dp.IteratorPrototype,Gn=Dp.BUGGY_SAFARI_ITERATORS,Ct=I_("iterator"),jp="keys",Ot="values",Lp="entries",$p=function(){return this};Bp.exports=function(e,r,t,n,a,o,u){C_(t,r,n);var s=function(b){if(b===a&&d)return d;if(!Gn&&b&&b in f)return f[b];switch(b){case jp:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case Lp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Ct]||f["@@iterator"]||a&&f[a],d=!Gn&&p||s(a),v=r==="Array"&&f.entries||p,h,m,x;if(v&&(h=Rp(v.call(new e)),h!==Object.prototype&&h.next&&(!Bn&&Rp(h)!==Mp&&(Ap?Ap(h,Mp):T_(h[Ct])||ao(h,Ct,$p)),O_(h,c,!0,!0),Bn&&(Np[c]=$p))),__&&a===Ot&&p&&p.name!==Ot&&(!Bn&&P_?k_(f,"name",Ot):(l=!0,d=function(){return E_(p,this)})),a)if(m={values:s(Ot),keys:o?d:s(jp),entries:s(Lp)},u)for(x in m)(Gn||l||!(x in f))&&ao(f,x,m[x]);else S_({target:r,proto:!0,forced:Gn||l},m);return(!Bn||u)&&f[Ct]!==d&&ao(f,Ct,d,{name:a}),Np[r]=d,m}});var Hn=i((cU,Gp)=>{"use strict";Gp.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var R_=Lf().charAt,A_=Ze(),Hp=er(),N_=Un(),Up=Hn(),Wp="String Iterator",M_=Hp.set,j_=Hp.getterFor(Wp);N_(String,"String",function(e){M_(this,{type:Wp,string:A_(e),index:0})},function(){var r=j_(this),t=r.string,n=r.index,a;return n>=t.length?Up(void 0,!0):(a=R_(t,n),r.index+=a.length,Up(a,!1))})});var io=i((pU,zp)=>{"use strict";var L_=G(),Kp=ee(),$_=kn();zp.exports=function(e,r,t){var n,a;Kp(e);try{if(n=$_(e,"return"),!n){if(r==="throw")throw t;return t}n=L_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Kp(n),t}});var Yp=i((dU,Vp)=>{"use strict";var F_=ee(),D_=io();Vp.exports=function(e,r,t,n){try{return n?r(F_(t)[0],t[1]):r(t)}catch(a){D_(e,"throw",a)}}});var oo=i((vU,Jp)=>{"use strict";var B_=A(),G_=hr(),U_=B_("iterator"),H_=Array.prototype;Jp.exports=function(e){return e!==void 0&&(G_.Array===e||H_[U_]===e)}});var kt=i((mU,Xp)=>{"use strict";var W_=bt(),Qp=kn(),K_=lr(),z_=hr(),V_=A(),Y_=V_("iterator");Xp.exports=function(e){if(!K_(e))return Qp(e,Y_)||Qp(e,"@@iterator")||z_[W_(e)]}});var Wn=i((hU,Zp)=>{"use strict";var J_=G(),Q_=D(),X_=ee(),Z_=Xe(),eP=kt(),rP=TypeError;Zp.exports=function(e,r){var t=arguments.length<2?eP(e):r;if(Q_(t))return X_(J_(t,e));throw new rP(Z_(e)+" is not iterable")}});var nd=i((yU,td)=>{"use strict";var tP=Q(),nP=G(),aP=ne(),iP=Yp(),oP=oo(),uP=qt(),sP=de(),ed=Hr(),cP=Wr(),lP=Wn(),fP=kt(),rd=Array;td.exports=function(r){var t=aP(r),n=uP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=tP(o,a>2?arguments[2]:void 0));var s=fP(t),c=0,l,f,p,d,v,h;if(s&&!(this===rd&&oP(s)))for(f=n?new this:[],d=lP(t,s),v=d.next;!(p=nP(v,d)).done;c++)h=u?iP(d,o,[p.value,c],!0):p.value,ed(f,c,h);else for(l=sP(t),f=n?new this(l):rd(l);l>c;c++)h=u?o(t[c],c):t[c],ed(f,c,h);return cP(f,c),f}});var so=i((bU,ud)=>{"use strict";var pP=A(),id=pP("iterator"),od=!1;try{ad=0,uo={next:function(){return{done:!!ad++}},return:function(){od=!0}},uo[id]=function(){return this},Array.from(uo,function(){throw 2})}catch{}var ad,uo;ud.exports=function(e,r){try{if(!r&&!od)return!1}catch{return!1}var t=!1;try{var n={};n[id]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var sd=i(()=>{"use strict";var dP=q(),vP=nd(),mP=so(),hP=!mP(function(e){Array.from(e)});dP({target:"Array",stat:!0,forced:hP},{from:vP})});var ld=i((xU,cd)=>{"use strict";yr();sd();var yP=J();cd.exports=yP.Array.from});var pd=i((wU,fd)=>{"use strict";var bP=ld();fd.exports=bP});var vd=i((SU,dd)=>{"use strict";var gP=pd();dd.exports=gP});var hd=i((EU,md)=>{"use strict";var qP=vd();md.exports=qP});var co=i((TU,yd)=>{"use strict";yd.exports=hd()});var Kn=i((CU,bd)=>{bd.exports=co()});var It=i((OU,gd)=>{"use strict";var xP=TypeError,wP=9007199254740991;gd.exports=function(e){if(e>wP)throw xP("Maximum allowed index exceeded");return e}});var Sd=i((kU,wd)=>{"use strict";var qd=Me(),SP=qt(),EP=$(),TP=A(),CP=TP("species"),xd=Array;wd.exports=function(e){var r;return qd(e)&&(r=e.constructor,SP(r)&&(r===xd||qd(r.prototype))?r=void 0:EP(r)&&(r=r[CP],r===null&&(r=void 0))),r===void 0?xd:r}});var zn=i((IU,Ed)=>{"use strict";var OP=Sd();Ed.exports=function(e,r){return new(OP(e))(r===0?0:r)}});var lo=i(()=>{"use strict";var kP=q(),IP=P(),_P=Me(),PP=$(),RP=ne(),AP=de(),Td=It(),Cd=Hr(),NP=Wr(),MP=zn(),jP=xt(),LP=A(),$P=$r(),Od=LP("isConcatSpreadable"),FP=$P>=51||!IP(function(){var e=[];return e[Od]=!1,e.concat()[0]!==e}),DP=function(e){if(!PP(e))return!1;var r=e[Od];return r!==void 0?!!r:_P(e)},BP=!FP||!jP("concat");kP({target:"Array",proto:!0,arity:1,forced:BP},{concat:function(r){var t=RP(this),n=MP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],DP(l))for(c=AP(l),Td(a+c),u=0;u<c;u++,a++)u in l&&Cd(n,a,l[u]);else Td(a+1),Cd(n,a++,l);return NP(n,a),n}})});var _t=i(()=>{});var Pt=i(kd=>{"use strict";var GP=Ki(),UP=Ln(),HP=UP.concat("length","prototype");kd.f=Object.getOwnPropertyNames||function(r){return GP(r,HP)}});var fo=i((MU,Pd)=>{"use strict";var WP=Ce(),KP=Ne(),Id=Pt().f,zP=vr(),_d=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],VP=function(e){try{return Id(e)}catch{return zP(_d)}};Pd.exports.f=function(r){return _d&&WP(r)==="Window"?VP(r):Id(KP(r))}});var Vn=i(Rd=>{"use strict";Rd.f=Object.getOwnPropertySymbols});var Yn=i((LU,Ad)=>{"use strict";var YP=ae();Ad.exports=function(e,r,t){return YP.f(e,r,t)}});var Vr=i(Nd=>{"use strict";var JP=A();Nd.f=JP});var j=i((FU,jd)=>{"use strict";var Md=J(),QP=V(),XP=Vr(),ZP=ae().f;jd.exports=function(e){var r=Md.Symbol||(Md.Symbol={});QP(r,e)||ZP(r,e,{value:XP.f(e)})}});var po=i((DU,Ld)=>{"use strict";var eR=G(),rR=z(),tR=A(),nR=je();Ld.exports=function(){var e=rR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=tR("toPrimitive");r&&!r[n]&&nR(r,n,function(a){return eR(t,this)},{arity:1})}});var Rt=i((BU,Fd)=>{"use strict";var aR=Q(),iR=Cn(),oR=ne(),uR=de(),$d=zn(),vo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=oR(c),d=iR(p),v=uR(d),h=aR(l,f),m=0,x=0,b=r?$d(c,v):t||u?$d(c,0):void 0,g,O;v>m;m++)if((s||m in d)&&(g=d[m],O=h(g,m,p),e))if(r)vo(b,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:vo(b,x++,g)}else switch(e){case 4:return!1;case 7:vo(b,x++,g)}return o?-1:n||a?a:b}};Fd.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var tv=i(()=>{"use strict";var Jn=q(),Mt=R(),So=G(),sR=N(),cR=re(),Yr=K(),Jr=pr(),lR=P(),Y=V(),fR=W(),bo=ee(),Qn=Ne(),Eo=In(),pR=Ze(),go=Qe(),Qr=rr(),Gd=$n(),dR=Pt(),Ud=fo(),vR=Vn(),Hd=mt(),Wd=ae(),mR=zi(),Kd=pi(),mo=je(),hR=Yn(),To=dr(),yR=wt(),zd=zr(),Dd=Dr(),bR=A(),gR=Vr(),qR=j(),xR=po(),wR=$e(),Vd=er(),Xn=Rt().forEach,ie=yR("hidden"),Zn="Symbol",Nt="prototype",SR=Vd.set,Bd=Vd.getterFor(Zn),ve=Object[Nt],br=Mt.Symbol,At=br&&br[Nt],ER=Mt.RangeError,TR=Mt.TypeError,ho=Mt.QObject,Yd=Hd.f,gr=Wd.f,Jd=Ud.f,CR=Kd.f,Qd=sR([].push),Fe=To("symbols"),jt=To("op-symbols"),OR=To("wks"),qo=!ho||!ho[Nt]||!ho[Nt].findChild,Xd=function(e,r,t){var n=Yd(ve,r);n&&delete ve[r],gr(e,r,t),n&&e!==ve&&gr(ve,r,n)},xo=Yr&&lR(function(){return Qr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?Xd:gr,yo=function(e,r){var t=Fe[e]=Qr(At);return SR(t,{type:Zn,tag:e,description:r}),Yr||(t.description=r),t},ea=function(r,t,n){r===ve&&ea(jt,t,n),bo(r);var a=Eo(t);return bo(n),Y(Fe,a)?(n.enumerable?(Y(r,ie)&&r[ie][a]&&(r[ie][a]=!1),n=Qr(n,{enumerable:go(0,!1)})):(Y(r,ie)||gr(r,ie,go(1,Qr(null))),r[ie][a]=!0),xo(r,a,n)):gr(r,a,n)},Co=function(r,t){bo(r);var n=Qn(t),a=Gd(n).concat(rv(n));return Xn(a,function(o){(!Yr||So(wo,n,o))&&ea(r,o,n[o])}),r},kR=function(r,t){return t===void 0?Qr(r):Co(Qr(r),t)},wo=function(r){var t=Eo(r),n=So(CR,this,t);return this===ve&&Y(Fe,t)&&!Y(jt,t)?!1:n||!Y(this,t)||!Y(Fe,t)||Y(this,ie)&&this[ie][t]?n:!0},Zd=function(r,t){var n=Qn(r),a=Eo(t);if(!(n===ve&&Y(Fe,a)&&!Y(jt,a))){var o=Yd(n,a);return o&&Y(Fe,a)&&!(Y(n,ie)&&n[ie][a])&&(o.enumerable=!0),o}},ev=function(r){var t=Jd(Qn(r)),n=[];return Xn(t,function(a){!Y(Fe,a)&&!Y(zd,a)&&Qd(n,a)}),n},rv=function(e){var r=e===ve,t=Jd(r?jt:Qn(e)),n=[];return Xn(t,function(a){Y(Fe,a)&&(!r||Y(ve,a))&&Qd(n,Fe[a])}),n};Jr||(br=function(){if(fR(At,this))throw new TR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:pR(arguments[0]),t=Dd(r),n=function(a){var o=this===void 0?Mt:this;o===ve&&So(n,jt,a),Y(o,ie)&&Y(o[ie],t)&&(o[ie][t]=!1);var u=go(1,a);try{xo(o,t,u)}catch(s){if(!(s instanceof ER))throw s;Xd(o,t,u)}};return Yr&&qo&&xo(ve,t,{configurable:!0,set:n}),yo(t,r)},At=br[Nt],mo(At,"toString",function(){return Bd(this).tag}),mo(br,"withoutSetter",function(e){return yo(Dd(e),e)}),Kd.f=wo,Wd.f=ea,mR.f=Co,Hd.f=Zd,dR.f=Ud.f=ev,vR.f=rv,gR.f=function(e){return yo(bR(e),e)},Yr&&(hR(At,"description",{configurable:!0,get:function(){return Bd(this).description}}),cR||mo(ve,"propertyIsEnumerable",wo,{unsafe:!0})));Jn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:br});Xn(Gd(OR),function(e){qR(e)});Jn({target:Zn,stat:!0,forced:!Jr},{useSetter:function(){qo=!0},useSimple:function(){qo=!1}});Jn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:kR,defineProperty:ea,defineProperties:Co,getOwnPropertyDescriptor:Zd});Jn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:ev});xR();wR(br,Zn);zd[ie]=!0});var Oo=i((HU,nv)=>{"use strict";var IR=pr();nv.exports=IR&&!!Symbol.for&&!!Symbol.keyFor});var iv=i(()=>{"use strict";var _R=q(),PR=z(),RR=V(),AR=Ze(),av=dr(),NR=Oo(),ko=av("string-to-symbol-registry"),MR=av("symbol-to-string-registry");_R({target:"Symbol",stat:!0,forced:!NR},{for:function(e){var r=AR(e);if(RR(ko,r))return ko[r];var t=PR("Symbol")(r);return ko[r]=t,MR[t]=r,t}})});var uv=i(()=>{"use strict";var jR=q(),LR=V(),$R=Fr(),FR=Xe(),DR=dr(),BR=Oo(),ov=DR("symbol-to-string-registry");jR({target:"Symbol",stat:!0,forced:!BR},{keyFor:function(r){if(!$R(r))throw new TypeError(FR(r)+" is not a symbol");if(LR(ov,r))return ov[r]}})});var cv=i((YU,sv)=>{"use strict";var GR=$(),UR=er().get;sv.exports=function(r){if(!GR(r))return!1;var t=UR(r);return!!t&&t.type==="RawJSON"}});var vv=i((JU,dv)=>{"use strict";var Io=N(),HR=V(),ra=SyntaxError,WR=parseInt,KR=String.fromCharCode,zR=Io("".charAt),lv=Io("".slice),fv=Io(/./.exec),pv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},VR=/^[\da-f]{4}$/i,YR=/^[\u0000-\u001F]$/;dv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=zR(e,r);if(a==="\\"){var o=lv(e,r,r+2);if(HR(pv,o))n+=pv[o],r+=2;else if(o==="\\u"){r+=2;var u=lv(e,r,r+4);if(!fv(VR,u))throw new ra("Bad Unicode escape at: "+r);n+=KR(WR(u,16)),r+=4}else throw new ra('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(fv(YR,a))throw new ra("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ra("Unterminated string at: "+r);return{value:n,end:r}}});var hv=i((QU,mv)=>{"use strict";var JR=P();mv.exports=!JR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var _v=i(()=>{"use strict";var QR=q(),Ev=z(),XR=jr(),Tv=G(),qr=N(),Cv=P(),yv=Me(),na=M(),ZR=cv(),bv=Fr(),gv=Ce(),eA=Ze(),rA=vr(),tA=vv(),nA=Dr(),aA=pr(),_o=hv(),Ov=String,nr=Ev("JSON","stringify"),ta=qr(/./.exec),Ro=qr("".charAt),iA=qr("".charCodeAt),oA=qr("".replace),Po=qr("".slice),Ao=qr([].push),uA=qr(1.1.toString),sA=/[\uD800-\uDFFF]/g,qv=/^[\uD800-\uDBFF]$/,xv=/^[\uDC00-\uDFFF]$/,No=nA(),wv=No.length,kv=!aA||Cv(function(){var e=Ev("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),Sv=Cv(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),cA=kv?function(e,r){var t=rA(arguments),n=Iv(r);if(!(!na(n)&&(e===void 0||bv(e))))return t[1]=function(a,o){if(na(n)&&(o=Tv(n,this,Ov(a),o)),!bv(o))return o},XR(nr,null,t)}:nr,lA=function(e,r,t){var n=Ro(t,r-1),a=Ro(t,r+1);return ta(qv,e)&&!ta(xv,a)||ta(xv,e)&&!ta(qv,n)?"\\u"+uA(iA(e,0),16):e},Iv=function(e){if(na(e))return e;if(yv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Ao(t,a):(typeof a=="number"||gv(a)==="Number"||gv(a)==="String")&&Ao(t,eA(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(yv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&QR({target:"JSON",stat:!0,arity:3,forced:kv||Sv||!_o},{stringify:function(r,t,n){var a=Iv(t),o=[],u=cA(r,function(v,h){var m=na(a)?Tv(a,this,Ov(v),h):h;return!_o&&ZR(m)?No+(Ao(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Sv&&(u=oA(u,sA,lA)),_o))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Ro(u,l);if(f==='"'){var p=tA(u,++l).end-1,d=Po(u,l,p);s+=Po(d,0,wv)===No?o[Po(d,wv)]:'"'+d+'"',l=p}else s+=f}return s}})});var Rv=i(()=>{"use strict";var fA=q(),pA=pr(),dA=P(),Pv=Vn(),vA=ne(),mA=!pA||dA(function(){Pv.f(1)});fA({target:"Object",stat:!0,forced:mA},{getOwnPropertySymbols:function(r){var t=Pv.f;return t?t(vA(r)):[]}})});var Av=i(()=>{"use strict";tv();iv();uv();_v();Rv()});var Mo=i(()=>{"use strict";var hA=j();hA("asyncDispose")});var jo=i(()=>{"use strict";var yA=j();yA("asyncIterator")});var Nv=i(()=>{});var Lo=i(()=>{"use strict";var bA=j();bA("dispose")});var Mv=i(()=>{"use strict";var gA=j();gA("hasInstance")});var jv=i(()=>{"use strict";var qA=j();qA("isConcatSpreadable")});var $o=i(()=>{"use strict";var xA=j();xA("iterator")});var Lv=i(()=>{"use strict";var wA=j();wA("match")});var $v=i(()=>{"use strict";var SA=j();SA("matchAll")});var Fv=i(()=>{"use strict";var EA=j();EA("replace")});var Dv=i(()=>{"use strict";var TA=j();TA("search")});var Bv=i(()=>{"use strict";var CA=j();CA("species")});var Gv=i(()=>{"use strict";var OA=j();OA("split")});var Fo=i(()=>{"use strict";var kA=j(),IA=po();kA("toPrimitive");IA()});var Uv=i(()=>{"use strict";var _A=z(),PA=j(),RA=$e();PA("toStringTag");RA(_A("Symbol"),"Symbol")});var Hv=i(()=>{"use strict";var AA=j();AA("unscopables")});var Wv=i(()=>{"use strict";var NA=R(),MA=$e();MA(NA.JSON,"JSON",!0)});var Kv=i(()=>{});var zv=i(()=>{});var Yv=i((GH,Vv)=>{"use strict";lo();_t();Av();Mo();jo();Nv();Lo();Mv();jv();$o();Lv();$v();Fv();Dv();Bv();Gv();Fo();Uv();Hv();Wv();Kv();zv();var jA=J();Vv.exports=jA.Symbol});var Do=i((UH,Jv)=>{"use strict";Jv.exports=function(){}});var xr=i((HH,rm)=>{"use strict";var LA=Ne(),Bo=Do(),Qv=hr(),Zv=er(),$A=ae().f,FA=Un(),aa=Hn(),DA=re(),BA=K(),em="Array Iterator",GA=Zv.set,UA=Zv.getterFor(em);rm.exports=FA(Array,"Array",function(e,r){GA(this,{type:em,target:LA(e),index:0,kind:r})},function(){var e=UA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,aa(void 0,!0);switch(e.kind){case"keys":return aa(t,!1);case"values":return aa(r[t],!1)}return aa([t,r[t]],!1)},"values");var Xv=Qv.Arguments=Qv.Array;Bo("keys");Bo("values");Bo("entries");if(!DA&&BA&&Xv.name!=="values")try{$A(Xv,"name",{value:"values"})}catch{}});var nm=i((WH,tm)=>{"use strict";tm.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var HA=nm(),WA=R(),KA=$e(),am=hr();for(ia in HA)KA(WA[ia],ia),am[ia]=am.Array;var ia});var om=i((VH,im)=>{"use strict";var zA=Yv();wr();im.exports=zA});var cm=i(()=>{"use strict";var VA=A(),YA=ae().f,um=VA("metadata"),sm=Function.prototype;sm[um]===void 0&&YA(sm,um,{value:null})});var lm=i(()=>{"use strict";Mo()});var fm=i(()=>{"use strict";Lo()});var pm=i(()=>{"use strict";var JA=j();JA("metadata")});var vm=i((nW,dm)=>{"use strict";var QA=om();cm();lm();fm();pm();dm.exports=QA});var Uo=i((aW,mm)=>{"use strict";var XA=z(),ZA=N(),Go=XA("Symbol"),e2=Go.keyFor,r2=ZA(Go.prototype.valueOf);mm.exports=Go.isRegisteredSymbol||function(r){try{return e2(r2(r))!==void 0}catch{return!1}}});var hm=i(()=>{"use strict";var t2=q(),n2=Uo();t2({target:"Symbol",stat:!0},{isRegisteredSymbol:n2})});var Ko=i((uW,wm)=>{"use strict";var a2=dr(),qm=z(),i2=N(),o2=Fr(),u2=A(),ua=qm("Symbol"),ym=ua.isWellKnownSymbol,xm=qm("Object","getOwnPropertyNames"),s2=i2(ua.prototype.valueOf),bm=a2("wks");for(oa=0,Ho=xm(ua),gm=Ho.length;oa<gm;oa++)try{Wo=Ho[oa],o2(ua[Wo])&&u2(Wo)}catch{}var Wo,oa,Ho,gm;wm.exports=function(r){if(ym&&ym(r))return!0;try{for(var t=s2(r),n=0,a=xm(bm),o=a.length;n<o;n++)if(bm[a[n]]==t)return!0}catch{}return!1}});var Sm=i(()=>{"use strict";var c2=q(),l2=Ko();c2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:l2})});var Em=i(()=>{"use strict";var f2=j();f2("customMatcher")});var Tm=i(()=>{"use strict";var p2=j();p2("observable")});var Cm=i(()=>{"use strict";var d2=q(),v2=Uo();d2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:v2})});var Om=i(()=>{"use strict";var m2=q(),h2=Ko();m2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:h2})});var km=i(()=>{"use strict";var y2=j();y2("matcher")});var Im=i(()=>{"use strict";var b2=j();b2("metadataKey")});var _m=i(()=>{"use strict";var g2=j();g2("patternMatch")});var Pm=i(()=>{"use strict";var q2=j();q2("replaceAll")});var Am=i((CW,Rm)=>{"use strict";var x2=vm();hm();Sm();Em();Tm();Cm();Om();km();Im();_m();Pm();Rm.exports=x2});var ke=i((OW,Nm)=>{"use strict";Nm.exports=Am()});var sa=i((kW,Mm)=>{Mm.exports=ke()});var Lm=i((IW,jm)=>{"use strict";xr();yr();var w2=kt();jm.exports=w2});var Fm=i((_W,$m)=>{"use strict";var S2=Lm();wr();$m.exports=S2});var Bm=i((PW,Dm)=>{"use strict";var E2=Fm();Dm.exports=E2});var Um=i((RW,Gm)=>{"use strict";var T2=Bm();Gm.exports=T2});var zo=i((AW,Hm)=>{"use strict";Hm.exports=Um()});var ca=i((NW,Wm)=>{Wm.exports=zo()});var zm=i((MW,Km)=>{"use strict";xr();yr();var C2=Wn();Km.exports=C2});var Ym=i((jW,Vm)=>{"use strict";var O2=zm();wr();Vm.exports=O2});var Qm=i((LW,Jm)=>{"use strict";var k2=Ym();Jm.exports=k2});var Zm=i(($W,Xm)=>{"use strict";var I2=Qm();Xm.exports=I2});var rh=i((FW,eh)=>{"use strict";eh.exports=Zm()});var la=i((DW,th)=>{th.exports=rh()});var ah=i((BW,nh)=>{"use strict";var _2=z(),P2=N(),R2=Pt(),A2=Vn(),N2=ee(),M2=P2([].concat);nh.exports=_2("Reflect","ownKeys")||function(r){var t=R2.f(N2(r)),n=A2.f;return n?M2(t,n(r)):t}});var uh=i((GW,oh)=>{"use strict";var ih=V(),j2=ah(),L2=mt(),$2=ae();oh.exports=function(e,r,t){for(var n=j2(r),a=$2.f,o=L2.f,u=0;u<n.length;u++){var s=n[u];!ih(e,s)&&!(t&&ih(t,s))&&a(e,s,o(r,s))}}});var ch=i((UW,sh)=>{"use strict";var F2=$(),D2=Oe();sh.exports=function(e,r){F2(r)&&"cause"in r&&D2(e,"cause",r.cause)}});var dh=i((HW,ph)=>{"use strict";var B2=N(),lh=Error,G2=B2("".replace),U2=function(e){return String(new lh(e).stack)}("zxcasd"),fh=/\n\s*at [^:]*:[^\n]*/,H2=fh.test(U2);ph.exports=function(e,r){if(H2&&typeof e=="string"&&!lh.prepareStackTrace)for(;r--;)e=G2(e,fh,"");return e}});var mh=i((WW,vh)=>{"use strict";var W2=P(),K2=Qe();vh.exports=!W2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",K2(1,7)),e.stack!==7):!0})});var bh=i((KW,yh)=>{"use strict";var z2=Oe(),V2=dh(),Y2=mh(),hh=Error.captureStackTrace;yh.exports=function(e,r,t,n){Y2&&(hh?hh(e,r):z2(e,"stack",V2(t,n)))}});var me=i((zW,wh)=>{"use strict";var J2=Q(),Q2=G(),X2=ee(),Z2=Xe(),eN=oo(),rN=de(),gh=W(),tN=Wn(),nN=kt(),qh=io(),aN=TypeError,fa=function(e,r){this.stopped=e,this.result=r},xh=fa.prototype;wh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=J2(r,n),l,f,p,d,v,h,m,x=function(g){return l&&qh(l,"normal"),new fa(!0,g)},b=function(g){return a?(X2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=nN(e),!f)throw new aN(Z2(e)+" is not iterable");if(eN(f)){for(p=0,d=rN(e);d>p;p++)if(v=b(e[p]),v&&gh(xh,v))return v;return new fa(!1)}l=tN(e,f)}for(h=o?e.next:l.next;!(m=Q2(h,l)).done;){try{v=b(m.value)}catch(g){qh(l,"throw",g)}if(typeof v=="object"&&v&&gh(xh,v))return v}return new fa(!1)}});var Eh=i((VW,Sh)=>{"use strict";var iN=Ze();Sh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:iN(e)}});var Ch=i(()=>{"use strict";var oN=q(),uN=W(),sN=Et(),pa=Tt(),cN=uh(),Th=rr(),Vo=Oe(),Yo=Qe(),lN=ch(),fN=bh(),pN=me(),dN=Eh(),vN=A(),mN=vN("toStringTag"),da=Error,hN=[].push,Xr=function(r,t){var n=uN(Jo,this),a;pa?a=pa(new da,n?sN(this):Jo):(a=n?this:Th(Jo),Vo(a,mN,"Error")),t!==void 0&&Vo(a,"message",dN(t)),fN(a,Xr,a.stack,1),arguments.length>2&&lN(a,arguments[2]);var o=[];return pN(r,hN,{that:o}),Vo(a,"errors",o),a};pa?pa(Xr,da):cN(Xr,da,{name:!0});var Jo=Xr.prototype=Th(da.prototype,{constructor:Yo(1,Xr),message:Yo(1,""),name:Yo(1,"AggregateError")});oN({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Qo=i(()=>{"use strict";Ch()});var Xo=i((ZW,Oh)=>{"use strict";var Lt=R(),yN=Lr(),bN=Ce(),va=function(e){return yN.slice(0,e.length)===e};Oh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":bN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var $t=i((eK,kh)=>{"use strict";var gN=Xo();kh.exports=gN==="NODE"});var Zo=i((rK,_h)=>{"use strict";var qN=z(),xN=Yn(),wN=A(),SN=K(),Ih=wN("species");_h.exports=function(e){var r=qN(e);SN&&r&&!r[Ih]&&xN(r,Ih,{configurable:!0,get:function(){return this}})}});var ma=i((tK,Ph)=>{"use strict";var EN=W(),TN=TypeError;Ph.exports=function(e,r){if(EN(r,e))return e;throw new TN("Incorrect invocation")}});var eu=i((nK,Rh)=>{"use strict";var CN=qt(),ON=Xe(),kN=TypeError;Rh.exports=function(e){if(CN(e))return e;throw new kN(ON(e)+" is not a constructor")}});var ru=i((aK,Nh)=>{"use strict";var Ah=ee(),IN=eu(),_N=lr(),PN=A(),RN=PN("species");Nh.exports=function(e,r){var t=Ah(e).constructor,n;return t===void 0||_N(n=Ah(t)[RN])?r:IN(n)}});var jh=i((iK,Mh)=>{"use strict";var AN=TypeError;Mh.exports=function(e,r){if(e<r)throw new AN("Not enough arguments");return e}});var tu=i((oK,Lh)=>{"use strict";var NN=Lr();Lh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(NN)});var fu=i((uK,Kh)=>{"use strict";var ce=R(),MN=jr(),jN=Q(),$h=M(),LN=V(),Wh=P(),Fh=Vi(),$N=vr(),Dh=_n(),FN=jh(),DN=tu(),BN=$t(),su=ce.setImmediate,cu=ce.clearImmediate,GN=ce.process,nu=ce.Dispatch,UN=ce.Function,Bh=ce.MessageChannel,HN=ce.String,au=0,Ft={},Gh="onreadystatechange",Dt,Sr,iu,ou;Wh(function(){Dt=ce.location});var lu=function(e){if(LN(Ft,e)){var r=Ft[e];delete Ft[e],r()}},uu=function(e){return function(){lu(e)}},Uh=function(e){lu(e.data)},Hh=function(e){ce.postMessage(HN(e),Dt.protocol+"//"+Dt.host)};(!su||!cu)&&(su=function(r){FN(arguments.length,1);var t=$h(r)?r:UN(r),n=$N(arguments,1);return Ft[++au]=function(){MN(t,void 0,n)},Sr(au),au},cu=function(r){delete Ft[r]},BN?Sr=function(e){GN.nextTick(uu(e))}:nu&&nu.now?Sr=function(e){nu.now(uu(e))}:Bh&&!DN?(iu=new Bh,ou=iu.port2,iu.port1.onmessage=Uh,Sr=jN(ou.postMessage,ou)):ce.addEventListener&&$h(ce.postMessage)&&!ce.importScripts&&Dt&&Dt.protocol!=="file:"&&!Wh(Hh)?(Sr=Hh,ce.addEventListener("message",Uh,!1)):Gh in Dh("script")?Sr=function(e){Fh.appendChild(Dh("script"))[Gh]=function(){Fh.removeChild(this),lu(e)}}:Sr=function(e){setTimeout(uu(e),0)});Kh.exports={set:su,clear:cu}});var Yh=i((sK,Vh)=>{"use strict";var zh=R(),WN=K(),KN=Object.getOwnPropertyDescriptor;Vh.exports=function(e){if(!WN)return zh[e];var r=KN(zh,e);return r&&r.value}});var pu=i((cK,Qh)=>{"use strict";var Jh=function(){this.head=null,this.tail=null};Jh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Qh.exports=Jh});var Zh=i((lK,Xh)=>{"use strict";var zN=Lr();Xh.exports=/ipad|iphone|ipod/i.test(zN)&&typeof Pebble<"u"});var ry=i((fK,ey)=>{"use strict";var VN=Lr();ey.exports=/web0s(?!.*chrome)/i.test(VN)});var sy=i((pK,uy)=>{"use strict";var et=R(),YN=Yh(),ty=Q(),du=fu().set,JN=pu(),QN=tu(),XN=Zh(),ZN=ry(),vu=$t(),ny=et.MutationObserver||et.WebKitMutationObserver,ay=et.document,iy=et.process,ha=et.Promise,yu=YN("queueMicrotask"),Zr,mu,hu,ya,oy;yu||(Bt=new JN,Gt=function(){var e,r;for(vu&&(e=iy.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Zr(),t}e&&e.enter()},!QN&&!vu&&!ZN&&ny&&ay?(mu=!0,hu=ay.createTextNode(""),new ny(Gt).observe(hu,{characterData:!0}),Zr=function(){hu.data=mu=!mu}):!XN&&ha&&ha.resolve?(ya=ha.resolve(void 0),ya.constructor=ha,oy=ty(ya.then,ya),Zr=function(){oy(Gt)}):vu?Zr=function(){iy.nextTick(Gt)}:(du=ty(du,et),Zr=function(){du(Gt)}),yu=function(e){Bt.head||Zr(),Bt.add(e)});var Bt,Gt;uy.exports=yu});var ly=i((dK,cy)=>{"use strict";cy.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Er=i((vK,fy)=>{"use strict";fy.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i((mK,py)=>{"use strict";var eM=R();py.exports=eM.Promise});var rt=i((hK,hy)=>{"use strict";var rM=R(),Ut=Tr(),tM=M(),nM=Ei(),aM=Pi(),iM=A(),dy=Xo(),oM=re(),bu=$r(),vy=Ut&&Ut.prototype,uM=iM("species"),gu=!1,my=tM(rM.PromiseRejectionEvent),sM=nM("Promise",function(){var e=aM(Ut),r=e!==String(Ut);if(!r&&bu===66||oM&&!(vy.catch&&vy.finally))return!0;if(!bu||bu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[uM]=n,gu=t.then(function(){})instanceof n,!gu)return!0}return!r&&(dy==="BROWSER"||dy==="DENO")&&!my});hy.exports={CONSTRUCTOR:sM,REJECTION_EVENT:my,SUBCLASSING:gu}});var Ie=i((yK,by)=>{"use strict";var yy=D(),cM=TypeError,lM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new cM("Bad Promise constructor");r=n,t=a}),this.resolve=yy(r),this.reject=yy(t)};by.exports.f=function(e){return new lM(e)}});var $y=i(()=>{"use strict";var fM=q(),pM=re(),xa=$t(),ar=R(),dM=J(),it=G(),gy=je(),qy=Tt(),vM=$e(),mM=Zo(),hM=D(),qa=M(),yM=$(),bM=ma(),gM=ru(),Ty=fu().set,Eu=sy(),qM=ly(),xM=Er(),wM=pu(),Cy=er(),wa=Tr(),Tu=rt(),Oy=Ie(),Sa="Promise",ky=Tu.CONSTRUCTOR,SM=Tu.REJECTION_EVENT,EM=Tu.SUBCLASSING,qu=Cy.getterFor(Sa),TM=Cy.set,tt=wa&&wa.prototype,Cr=wa,ba=tt,Iy=ar.TypeError,xu=ar.document,Cu=ar.process,wu=Oy.f,CM=wu,OM=!!(xu&&xu.createEvent&&ar.dispatchEvent),_y="unhandledrejection",kM="rejectionhandled",xy=0,Py=1,IM=2,Ou=1,Ry=2,ga,wy,Ay,Sy,Ny=function(e){var r;return yM(e)&&qa(r=e.then)?r:!1},My=function(e,r){var t=r.value,n=r.state===Py,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Ry&&PM(r),r.rejection=Ou),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new Iy("Promise-chain cycle")):(l=Ny(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},jy=function(e,r){e.notified||(e.notified=!0,Eu(function(){for(var t=e.reactions,n;n=t.get();)My(n,e);e.notified=!1,r&&!e.rejection&&_M(e)}))},Ly=function(e,r,t){var n,a;OM?(n=xu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!SM&&(a=ar["on"+e])?a(n):e===_y&&qM("Unhandled promise rejection",t)},_M=function(e){it(Ty,ar,function(){var r=e.facade,t=e.value,n=Ey(e),a;if(n&&(a=xM(function(){xa?Cu.emit("unhandledRejection",t,r):Ly(_y,r,t)}),e.rejection=xa||Ey(e)?Ry:Ou,a.error))throw a.value})},Ey=function(e){return e.rejection!==Ou&&!e.parent},PM=function(e){it(Ty,ar,function(){var r=e.facade;xa?Cu.emit("rejectionHandled",r):Ly(kM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=IM,jy(e,!0))},Su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Iy("Promise can't be resolved itself");var n=Ny(r);n?Eu(function(){var a={done:!1};try{it(n,r,nt(Su,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Py,jy(e,!1))}catch(a){at({done:!1},a,e)}}};if(ky&&(Cr=function(r){bM(this,ba),hM(r),it(ga,this);var t=qu(this);try{r(nt(Su,t),nt(at,t))}catch(n){at(t,n)}},ba=Cr.prototype,ga=function(r){TM(this,{type:Sa,done:!1,notified:!1,parent:!1,reactions:new wM,rejection:!1,state:xy,value:null})},ga.prototype=gy(ba,"then",function(r,t){var n=qu(this),a=wu(gM(this,Cr));return n.parent=!0,a.ok=qa(r)?r:!0,a.fail=qa(t)&&t,a.domain=xa?Cu.domain:void 0,n.state===xy?n.reactions.add(a):Eu(function(){My(a,n)}),a.promise}),wy=function(){var e=new ga,r=qu(e);this.promise=e,this.resolve=nt(Su,r),this.reject=nt(at,r)},Oy.f=wu=function(e){return e===Cr||e===Ay?new wy(e):CM(e)},!pM&&qa(wa)&&tt!==Object.prototype)){Sy=tt.then,EM||gy(tt,"then",function(r,t){var n=this;return new Cr(function(a,o){it(Sy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}qy&&qy(tt,ba)}fM({global:!0,constructor:!0,wrap:!0,forced:ky},{Promise:Cr});Ay=dM.Promise;vM(Cr,Sa,!1,!0);mM(Sa)});var Ht=i((qK,Fy)=>{"use strict";var RM=Tr(),AM=so(),NM=rt().CONSTRUCTOR;Fy.exports=NM||!AM(function(e){RM.all(e).then(void 0,function(){})})});var Dy=i(()=>{"use strict";var MM=q(),jM=G(),LM=D(),$M=Ie(),FM=Er(),DM=me(),BM=Ht();MM({target:"Promise",stat:!0,forced:BM},{all:function(r){var t=this,n=$M.f(t),a=n.resolve,o=n.reject,u=FM(function(){var s=LM(t.resolve),c=[],l=0,f=1;DM(r,function(p){var d=l++,v=!1;f++,jM(s,t,p).then(function(h){v||(v=!0,c[d]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Gy=i(()=>{"use strict";var GM=q(),UM=re(),HM=rt().CONSTRUCTOR,Iu=Tr(),WM=z(),KM=M(),zM=je(),By=Iu&&Iu.prototype;GM({target:"Promise",proto:!0,forced:HM,real:!0},{catch:function(e){return this.then(void 0,e)}});!UM&&KM(Iu)&&(ku=WM("Promise").prototype.catch,By.catch!==ku&&zM(By,"catch",ku,{unsafe:!0}));var ku});var Uy=i(()=>{"use strict";var VM=q(),YM=G(),JM=D(),QM=Ie(),XM=Er(),ZM=me(),ej=Ht();VM({target:"Promise",stat:!0,forced:ej},{race:function(r){var t=this,n=QM.f(t),a=n.reject,o=XM(function(){var u=JM(t.resolve);ZM(r,function(s){YM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Hy=i(()=>{"use strict";var rj=q(),tj=Ie(),nj=rt().CONSTRUCTOR;rj({target:"Promise",stat:!0,forced:nj},{reject:function(r){var t=tj.f(this),n=t.reject;return n(r),t.promise}})});var _u=i((IK,Wy)=>{"use strict";var aj=ee(),ij=$(),oj=Ie();Wy.exports=function(e,r){if(aj(e),ij(r)&&r.constructor===e)return r;var t=oj.f(e),n=t.resolve;return n(r),t.promise}});var Vy=i(()=>{"use strict";var uj=q(),sj=z(),Ky=re(),cj=Tr(),zy=rt().CONSTRUCTOR,lj=_u(),fj=sj("Promise"),pj=Ky&&!zy;uj({target:"Promise",stat:!0,forced:Ky||zy},{resolve:function(r){return lj(pj&&this===fj?cj:this,r)}})});var Yy=i(()=>{"use strict";$y();Dy();Gy();Uy();Hy();Vy()});var Pu=i(()=>{"use strict";var dj=q(),vj=G(),mj=D(),hj=Ie(),yj=Er(),bj=me(),gj=Ht();dj({target:"Promise",stat:!0,forced:gj},{allSettled:function(r){var t=this,n=hj.f(t),a=n.resolve,o=n.reject,u=yj(function(){var s=mj(t.resolve),c=[],l=0,f=1;bj(r,function(p){var d=l++,v=!1;f++,vj(s,t,p).then(function(h){v||(v=!0,c[d]={status:"fulfilled",value:h},--f||a(c))},function(h){v||(v=!0,c[d]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Ru=i(()=>{"use strict";var qj=q(),xj=G(),wj=D(),Sj=z(),Ej=Ie(),Tj=Er(),Cj=me(),Oj=Ht(),Jy="No one promise resolved";qj({target:"Promise",stat:!0,forced:Oj},{any:function(r){var t=this,n=Sj("AggregateError"),a=Ej.f(t),o=a.resolve,u=a.reject,s=Tj(function(){var c=wj(t.resolve),l=[],f=0,p=1,d=!1;Cj(r,function(v){var h=f++,m=!1;p++,xj(c,t,v).then(function(x){m||d||(d=!0,o(x))},function(x){m||d||(m=!0,l[h]=x,--p||u(new n(l,Jy)))})}),--p||u(new n(l,Jy))});return s.error&&u(s.value),a.promise}})});var Nu=i(()=>{"use strict";var kj=q(),Ij=R(),_j=jr(),Pj=vr(),Rj=Ie(),Aj=D(),Xy=Er(),Au=Ij.Promise,Qy=!1,Nj=!Au||!Au.try||Xy(function(){Au.try(function(e){Qy=e===8},8)}).error||!Qy;kj({target:"Promise",stat:!0,forced:Nj},{try:function(e){var r=arguments.length>1?Pj(arguments,1):[],t=Rj.f(this),n=Xy(function(){return _j(Aj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Mu=i(()=>{"use strict";var Mj=q(),jj=Ie();Mj({target:"Promise",stat:!0},{withResolvers:function(){var r=jj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var tb=i(()=>{"use strict";var Lj=q(),$j=re(),Ea=Tr(),Fj=P(),eb=z(),rb=M(),Dj=ru(),Zy=_u(),Bj=je(),Lu=Ea&&Ea.prototype,Gj=!!Ea&&Fj(function(){Lu.finally.call({then:function(){}},function(){})});Lj({target:"Promise",proto:!0,real:!0,forced:Gj},{finally:function(e){var r=Dj(this,eb("Promise")),t=rb(e);return this.then(t?function(n){return Zy(r,e()).then(function(){return n})}:e,t?function(n){return Zy(r,e()).then(function(){throw n})}:e)}});!$j&&rb(Ea)&&(ju=eb("Promise").prototype.finally,Lu.finally!==ju&&Bj(Lu,"finally",ju,{unsafe:!0}));var ju});var ab=i((HK,nb)=>{"use strict";Qo();xr();_t();Yy();Pu();Ru();Nu();Mu();tb();yr();var Uj=J();nb.exports=Uj.Promise});var ob=i((WK,ib)=>{"use strict";var Hj=ab();wr();ib.exports=Hj});var ub=i(()=>{"use strict";Nu()});var sb=i(()=>{"use strict";Mu()});var lb=i((JK,cb)=>{"use strict";var Wj=ob();ub();sb();cb.exports=Wj});var fb=i(()=>{"use strict";Qo()});var pb=i(()=>{"use strict";Pu()});var db=i(()=>{"use strict";Ru()});var mb=i((nz,vb)=>{"use strict";var Kj=lb();fb();pb();db();vb.exports=Kj});var ot=i((az,hb)=>{"use strict";hb.exports=mb()});var gb=i((cz,bb)=>{"use strict";jo();var zj=Vr();bb.exports=zj.f("asyncIterator")});var xb=i((lz,qb)=>{"use strict";var Vj=gb();qb.exports=Vj});var Sb=i((fz,wb)=>{"use strict";var Yj=xb();wb.exports=Yj});var Tb=i((pz,Eb)=>{"use strict";var Jj=Sb();Eb.exports=Jj});var Ta=i((dz,Cb)=>{"use strict";Cb.exports=Tb()});var _b=i(()=>{"use strict";var Qj=q(),Xj=P(),Zj=ne(),Ib=Et(),eL=Xi(),rL=Xj(function(){Ib(1)});Qj({target:"Object",stat:!0,forced:rL,sham:!eL},{getPrototypeOf:function(r){return Ib(Zj(r))}})});var Rb=i((bz,Pb)=>{"use strict";_b();var tL=J();Pb.exports=tL.Object.getPrototypeOf});var Nb=i((gz,Ab)=>{"use strict";var nL=Rb();Ab.exports=nL});var jb=i((qz,Mb)=>{"use strict";var aL=Nb();Mb.exports=aL});var $b=i((xz,Lb)=>{"use strict";var iL=jb();Lb.exports=iL});var Ca=i((wz,Fb)=>{"use strict";Fb.exports=$b()});var Bb=i(()=>{"use strict";var oL=q(),uL=N(),sL=Me(),cL=uL([].reverse),Db=[1,2];oL({target:"Array",proto:!0,forced:String(Db)===String(Db.reverse())},{reverse:function(){return sL(this)&&(this.length=this.length),cL(this)}})});var Ub=i((Tz,Gb)=>{"use strict";Bb();var lL=se();Gb.exports=lL("Array","reverse")});var Wb=i((Cz,Hb)=>{"use strict";var fL=W(),pL=Ub(),Du=Array.prototype;Hb.exports=function(e){var r=e.reverse;return e===Du||fL(Du,e)&&r===Du.reverse?pL:r}});var zb=i((Oz,Kb)=>{"use strict";var dL=Wb();Kb.exports=dL});var Yb=i((kz,Vb)=>{"use strict";var vL=zb();Vb.exports=vL});var Qb=i((Iz,Jb)=>{"use strict";var mL=Yb();Jb.exports=mL});var Zb=i((_z,Xb)=>{"use strict";Xb.exports=Qb()});var Bu=i((Pz,zt)=>{function hL(e,r){this.v=e,this.k=r}zt.exports=hL,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var eg=i(()=>{"use strict";var yL=q(),bL=K(),gL=rr();yL({target:"Object",stat:!0,sham:!bL},{create:gL})});var tg=i((Nz,rg)=>{"use strict";eg();var qL=J(),xL=qL.Object;rg.exports=function(r,t){return xL.create(r,t)}});var ag=i((Mz,ng)=>{"use strict";var wL=tg();ng.exports=wL});var og=i((jz,ig)=>{"use strict";var SL=ag();ig.exports=SL});var sg=i((Lz,ug)=>{"use strict";var EL=og();ug.exports=EL});var Oa=i(($z,cg)=>{"use strict";cg.exports=sg()});var Uu=i((Fz,dg)=>{"use strict";var fg=N(),TL=D(),CL=$(),OL=V(),lg=vr(),kL=Mr(),pg=Function,IL=fg([].concat),_L=fg([].join),Gu={},PL=function(e,r,t){if(!OL(Gu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Gu[r]=pg("C,a","return new C("+_L(n,",")+")")}return Gu[r](e,t)};dg.exports=kL?pg.bind:function(r){var t=TL(this),n=t.prototype,a=lg(arguments,1),o=function(){var s=IL(a,lg(arguments));return this instanceof o?PL(t,s.length,s):t.apply(r,s)};return CL(n)&&(o.prototype=n),o}});var mg=i(()=>{"use strict";var RL=q(),vg=Uu();RL({target:"Function",proto:!0,forced:Function.bind!==vg},{bind:vg})});var yg=i((Gz,hg)=>{"use strict";mg();var AL=se();hg.exports=AL("Function","bind")});var gg=i((Uz,bg)=>{"use strict";var NL=W(),ML=yg(),Hu=Function.prototype;bg.exports=function(e){var r=e.bind;return e===Hu||NL(Hu,e)&&r===Hu.bind?ML:r}});var xg=i((Hz,qg)=>{"use strict";var jL=gg();qg.exports=jL});var Sg=i((Wz,wg)=>{"use strict";var LL=xg();wg.exports=LL});var Tg=i((Kz,Eg)=>{"use strict";var $L=Sg();Eg.exports=$L});var Vt=i((zz,Cg)=>{"use strict";Cg.exports=Tg()});var Og=i(()=>{"use strict";var FL=q(),DL=Tt();FL({target:"Object",stat:!0},{setPrototypeOf:DL})});var Ig=i((Jz,kg)=>{"use strict";Og();var BL=J();kg.exports=BL.Object.setPrototypeOf});var Pg=i((Qz,_g)=>{"use strict";var GL=Ig();_g.exports=GL});var Ag=i((Xz,Rg)=>{"use strict";var UL=Pg();Rg.exports=UL});var Mg=i((Zz,Ng)=>{"use strict";var HL=Ag();Ng.exports=HL});var ka=i((eV,jg)=>{"use strict";jg.exports=Mg()});var $g=i(()=>{"use strict";var WL=q(),KL=K(),Lg=ae().f;WL({target:"Object",stat:!0,forced:Object.defineProperty!==Lg,sham:!KL},{defineProperty:Lg})});var Bg=i((nV,Dg)=>{"use strict";$g();var zL=J(),Fg=zL.Object,VL=Dg.exports=function(r,t,n){return Fg.defineProperty(r,t,n)};Fg.defineProperty.sham&&(VL.sham=!0)});var Ug=i((aV,Gg)=>{"use strict";var YL=Bg();Gg.exports=YL});var Wg=i((iV,Hg)=>{"use strict";var JL=Ug();Hg.exports=JL});var zg=i((oV,Kg)=>{"use strict";var QL=Wg();Kg.exports=QL});var Yt=i((uV,Vg)=>{"use strict";Vg.exports=zg()});var Wu=i((sV,De)=>{var XL=Yt();function Ia(e,r,t,n){var a=XL;try{a({},"",{})}catch{a=0}De.exports=Ia=function(u,s,c,l){function f(p,d){Ia(u,p,function(v){return this._invoke(p,d,v)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},De.exports.__esModule=!0,De.exports.default=De.exports,Ia(e,r,t,n)}De.exports=Ia,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((cV,Be)=>{var Yg=ke(),Ku=Oa(),ZL=Vt(),e$=Ca(),Jg=ka(),Pe=Wu();function Qg(){var e,r,t=typeof Yg=="function"?Yg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(v,h,m,x){var b=h&&h.prototype instanceof s?h:s,g=Ku(b.prototype);return Pe(g,"_invoke",function(O,k,w){var E,S,C,L=0,Ee=w||[],_=!1,te={p:0,n:0,v:e,a:Te,f:ZL(Te).call(Te,e,4),d:function(F,be){return E=F,S=0,C=e,te.n=be,u}};function Te(Z,F){for(S=Z,C=F,r=0;!_&&L&&!be&&r<Ee.length;r++){var be,T=Ee[r],Nr=te.p,Ye=T[2];Z>3?(be=Ye===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((be=Z<2&&Nr<T[1])?(S=0,te.v=F,te.n=T[1]):Nr<Ye&&(be=Z<3||T[0]>F||F>Ye)&&(T[4]=Z,T[5]=F,te.n=Ye,S=0))}if(be||Z>1)return u;throw _=!0,F}return function(Z,F,be){if(L>1)throw TypeError("Generator is already running");for(_&&F===1&&Te(F,be),S=F,C=be;(r=S<2?e:C)||!_;){E||(S?S<3?(S>1&&(te.n=-1),Te(S,C)):te.n=C:te.v=C);try{if(L=2,E){if(S||(Z="next"),r=E[Z]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Z+"' method"),S=1);E=e}else if((r=(_=te.n<0)?C:O.call(k,te))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:_}}}(v,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=e$;var f=[][n]?r(r([][n]())):(Pe(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Ku(f);function d(v){return Jg?Jg(v,l):(v.__proto__=l,Pe(v,a,"GeneratorFunction")),v.prototype=Ku(p),v}return c.prototype=l,Pe(p,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,a,"GeneratorFunction"),Pe(p),Pe(p,a,"Generator"),Pe(p,n,function(){return this}),Pe(p,"toString",function(){return"[object Generator]"}),(Be.exports=Qg=function(){return{w:o,m:d}},Be.exports.__esModule=!0,Be.exports.default=Be.exports)()}Be.exports=Qg,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var Ju=i((lV,Jt)=>{var r$=ke(),t$=Ta(),n$=Bu(),Vu=Wu();function Yu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof n$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Vu(Yu.prototype),Vu(Yu.prototype,typeof r$=="function"&&t$||"@asyncIterator",function(){return this})),Vu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Jt.exports=Yu,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Qu=i((fV,Qt)=>{var a$=ot(),i$=zu(),o$=Ju();function u$(e,r,t,n,a){return new o$(i$().w(e,r,t,n),a||a$)}Qt.exports=u$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Xg=i((pV,Xt)=>{var s$=Qu();function c$(e,r,t,n,a){var o=s$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=c$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var rq=i((dV,eq)=>{"use strict";var Zg=Xe(),l$=TypeError;eq.exports=function(e,r){if(!delete e[r])throw new l$("Cannot delete property "+Zg(r)+" of "+Zg(e))}});var tq=i(()=>{"use strict";var f$=q(),p$=ne(),d$=de(),v$=Wr(),m$=rq(),h$=It(),y$=[].unshift(0)!==1,b$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},g$=y$||!b$();f$({target:"Array",proto:!0,arity:1,forced:g$},{unshift:function(r){var t=p$(this),n=d$(t),a=arguments.length;if(a){h$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:m$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return v$(t,n+a)}})});var aq=i((hV,nq)=>{"use strict";tq();var q$=se();nq.exports=q$("Array","unshift")});var oq=i((yV,iq)=>{"use strict";var x$=W(),w$=aq(),Xu=Array.prototype;iq.exports=function(e){var r=e.unshift;return e===Xu||x$(Xu,e)&&r===Xu.unshift?w$:r}});var sq=i((bV,uq)=>{"use strict";var S$=oq();uq.exports=S$});var lq=i((gV,cq)=>{"use strict";var E$=sq();cq.exports=E$});var pq=i((qV,fq)=>{"use strict";var T$=lq();fq.exports=T$});var vq=i((xV,dq)=>{"use strict";dq.exports=pq()});var mq=i((wV,Zt)=>{var C$=vq();function O$(e){var r=Object(e),t=[];for(var n in r)C$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Zt.exports=O$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var yq=i((SV,hq)=>{"use strict";xr();_t();yr();$o();var k$=Vr();hq.exports=k$.f("iterator")});var gq=i((EV,bq)=>{"use strict";var I$=yq();wr();bq.exports=I$});var xq=i((TV,qq)=>{"use strict";var _$=gq();qq.exports=_$});var Sq=i((CV,wq)=>{"use strict";var P$=xq();wq.exports=P$});var en=i((OV,Eq)=>{"use strict";Eq.exports=Sq()});var Tq=i((kV,Ge)=>{var _a=ke(),R$=en();function Zu(e){"@babel/helpers - typeof";return Ge.exports=Zu=typeof _a=="function"&&typeof R$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof _a=="function"&&r.constructor===_a&&r!==_a.prototype?"symbol":typeof r},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports,Zu(e)}Ge.exports=Zu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var Cq=i((IV,rn)=>{var A$=Tq().default,N$=ke(),M$=en();function j$(e){if(e!=null){var r=e[typeof N$=="function"&&M$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(A$(e)+" is not iterable")}rn.exports=j$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var Iq=i((_V,Ue)=>{var Oq=Ca(),L$=Zb(),$$=Bu(),F$=zu(),D$=Xg(),B$=Qu(),G$=Ju(),U$=mq(),kq=Cq();function es(){"use strict";var e=F$(),r=e.m(es),t=(Oq?Oq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,d){return c(l.a,a[p],d)},delegateYield:function(p,d,v){return s.resultName=d,c(l.d,kq(p),v)},finish:function(p){return c(l.f,p)}},c=function(p,d,v){l.p=s.prev,l.n=s.next;try{return p(d,v)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ue.exports=es=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&L$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new $$(c,l)},AsyncIterator:G$,async:function(c,l,f,p,d){return(n(l)?B$:D$)(o(c),l,f,p,d)},keys:U$,values:kq}},Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports)()}Ue.exports=es,Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports});var le=i((PV,_q)=>{var Pa=Iq()();_q.exports=Pa;try{regeneratorRuntime=Pa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Pa:Function("r","regeneratorRuntime = r")(Pa)}});var rs=i((Aa,Rq)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});var Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Aa.default=H$;function H$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=W$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function W$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Pq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):tn(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Pq(m,2),b=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(b)>-1;return!!(E&&(!g||w.attribs[b]===g))},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L,Ee){c(L)&&(C.push(L),Ee())}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],d=parseInt(f[2],10)-1,v=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var b=x.findIndex(function(g){return g===m});if(b===d)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(b,g){return v(g)&&b.push(g),b},[]):v(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Rq.exports=Aa.default});var Ma=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.convertNodeList=K$;Na.escapeValue=z$;function K$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function z$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Gq=i((ja,Bq)=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.default=V$;var jq=Ma(),Aq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function V$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,d=f.length,v=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(g){return g===b}:b}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(b){b==="class"&&(v=!0);var g=l[b];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,jq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[b]=function(O,k){return g.test(k)})}),v&&function(){var b=l.attribute;l.attribute=function(g,O,k){return l.class(O)||b&&b(g,O,k)}}();p!==n;){if(m(p)!==!0){if(Nq(s,p,l,f,n)||Mq(p,l,f,n))break;Nq(s,p,l,f),f.length===d&&Mq(p,l,f),f.length===d&&Y$(s,p,l,f)}p=p.parentNode,d=f.length}if(p===n){var x=Fq(s,p,l);f.unshift(x)}return f.join(" ")}function Nq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Lq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Lq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var b=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?b===-1?0:-1:b-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,jq.escapeValue)(c.value),p=t[l]||t.attribute,d=Aq[l]||Aq.attribute;if(!Dq(p,l,f,d)){var v="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(v="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");v="."+h}return v}}return null}function Mq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=$q(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function $q(e,r){var t=e.tagName.toLowerCase();return Dq(r.tag,null,t)?null:t}function Y$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Fq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Fq(e,r,t){var n=Lq(e,r,t);return n||(n=$q(r,t)),n}function Dq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Bq.exports=ja.default});var ts=i(($a,Uq)=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.default=eF;var J$=rs(),Q$=Z$(J$),X$=Ma();function Z$(e){return e&&e.__esModule?e:{default:e}}function eF(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,X$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,Q$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return La("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(La(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=La("",a[0],a.slice(1).join(" "),r),a[a.length-1]=La(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function La(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var k=s[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var d=r.replace(/>/,""),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/:nth-child/.test(r)){var v=r.replace(/nth-child/g,"nth-of-type"),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),b=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=b();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Uq.exports=$a.default});var ns=i(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getCommonAncestor=rF;Fa.getCommonProperties=tF;function rF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,d){for(var v=[];p!==n;)p=p.parentNode,v.unshift(p);a[d]=v}),a.sort(function(p,d){return p.length-d.length});for(var o=a.shift(),u=null,s=function(){var d=o[c],v=a.some(function(h){return!h.some(function(m){return m===d})});if(v)return"break";u=d},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function tF(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(d,v){var h=c[v],m=h.name;return h&&m!=="class"&&(d[m]=h.value),d},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(d,v){var h=a[v];return h===l[v]&&(d[v]=h),d},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Yq=i(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var nF=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=is;nn.getMultiSelector=Vq;nn.default=cF;var aF=rs(),Wq=as(aF),iF=Gq(),oF=as(iF),uF=ts(),Kq=as(uF),Hq=Ma(),zq=ns();function as(e){return e&&e.__esModule?e:{default:e}}function is(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":nF(e))+'")');var t=(0,Wq.default)(e,r),n=(0,oF.default)(e,r),a=(0,Kq.default)(n,e,r);return t&&delete global.document,a}function Vq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Hq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Wq.default)(e[0],r),n=(0,zq.getCommonAncestor)(e,r),a=is(n,r),o=sF(e),u=o[0],s=(0,Kq.default)(a+" "+u,e,r),c=(0,Hq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function sF(e){var r=(0,zq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function cF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Vq(e,r):is(e,r)}});var Xq=i(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=oe.common=oe.optimize=oe.getMultiSelector=oe.getSingleSelector=oe.select=void 0;var os=Yq();Object.defineProperty(oe,"getSingleSelector",{enumerable:!0,get:function(){return os.getSingleSelector}});Object.defineProperty(oe,"getMultiSelector",{enumerable:!0,get:function(){return os.getMultiSelector}});var Jq=Qq(os),lF=ts(),fF=Qq(lF),pF=ns(),dF=vF(pF);function vF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Qq(e){return e&&e.__esModule?e:{default:e}}oe.select=Jq.default;oe.optimize=fF.default;oe.common=dF;oe.default=Jq.default});var Zq=i(()=>{"use strict";var EF=q(),TF=Me();EF({target:"Array",stat:!0},{isArray:TF})});var rx=i((VV,ex)=>{"use strict";Zq();var CF=J();ex.exports=CF.Array.isArray});var nx=i((YV,tx)=>{"use strict";var OF=rx();tx.exports=OF});var ix=i((JV,ax)=>{"use strict";var kF=nx();ax.exports=kF});var ux=i((QV,ox)=>{"use strict";var IF=ix();ox.exports=IF});var cx=i((XV,sx)=>{"use strict";sx.exports=ux()});var px=i(()=>{"use strict";var _F=q(),PF=ne(),RF=de(),AF=Wr(),NF=It(),MF=P(),jF=MF(function(){return[].push.call({length:4294967296},1)!==4294967297}),LF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},$F=jF||!LF();_F({target:"Array",proto:!0,arity:1,forced:$F},{push:function(r){var t=PF(this),n=RF(t),a=arguments.length;NF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return AF(t,n),n}})});var vx=i((t9,dx)=>{"use strict";px();var FF=se();dx.exports=FF("Array","push")});var hx=i((n9,mx)=>{"use strict";var DF=W(),BF=vx(),us=Array.prototype;mx.exports=function(e){var r=e.push;return e===us||DF(us,e)&&r===us.push?BF:r}});var bx=i((a9,yx)=>{"use strict";var GF=hx();yx.exports=GF});var qx=i((i9,gx)=>{"use strict";var UF=bx();gx.exports=UF});var wx=i((o9,xx)=>{"use strict";var HF=qx();xx.exports=HF});var ss=i((u9,Sx)=>{"use strict";Sx.exports=wx()});var Nx=i(()=>{"use strict";var WF=q(),KF=Rt().map,zF=xt(),VF=zF("map");WF({target:"Array",proto:!0,forced:!VF},{map:function(r){return KF(this,r,arguments.length>1?arguments[1]:void 0)}})});var jx=i((M9,Mx)=>{"use strict";Nx();var YF=se();Mx.exports=YF("Array","map")});var $x=i((j9,Lx)=>{"use strict";var JF=W(),QF=jx(),ls=Array.prototype;Lx.exports=function(e){var r=e.map;return e===ls||JF(ls,e)&&r===ls.map?QF:r}});var Dx=i((L9,Fx)=>{"use strict";var XF=$x();Fx.exports=XF});var Gx=i(($9,Bx)=>{"use strict";var ZF=Dx();Bx.exports=ZF});var Hx=i((F9,Ux)=>{"use strict";var eD=Gx();Ux.exports=eD});var Kx=i((D9,Wx)=>{"use strict";Wx.exports=Hx()});var Vx=i((B9,zx)=>{zx.exports=Kx()});var Jx=i((G9,Yx)=>{Yx.exports=ot()});var rw=i((U9,ew)=>{"use strict";var rD=D(),tD=ne(),nD=Cn(),aD=de(),Qx=TypeError,Xx="Reduce of empty array with no initial value",Zx=function(e){return function(r,t,n,a){var o=tD(r),u=nD(o),s=aD(o);if(rD(t),s===0&&n<2)throw new Qx(Xx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Qx(Xx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};ew.exports={left:Zx(!1),right:Zx(!0)}});var fs=i((H9,tw)=>{"use strict";var iD=P();tw.exports=function(e,r){var t=[][e];return!!t&&iD(function(){t.call(null,r||function(){return 1},1)})}});var aw=i(()=>{"use strict";var oD=q(),uD=rw().left,sD=fs(),nw=$r(),cD=$t(),lD=!cD&&nw>79&&nw<83,fD=lD||!sD("reduce");oD({target:"Array",proto:!0,forced:fD},{reduce:function(r){var t=arguments.length;return uD(this,r,t,t>1?arguments[1]:void 0)}})});var ow=i((z9,iw)=>{"use strict";aw();var pD=se();iw.exports=pD("Array","reduce")});var sw=i((V9,uw)=>{"use strict";var dD=W(),vD=ow(),ps=Array.prototype;uw.exports=function(e){var r=e.reduce;return e===ps||dD(ps,e)&&r===ps.reduce?vD:r}});var lw=i((Y9,cw)=>{"use strict";var mD=sw();cw.exports=mD});var pw=i((J9,fw)=>{"use strict";var hD=lw();fw.exports=hD});var vw=i((Q9,dw)=>{"use strict";var yD=pw();dw.exports=yD});var hw=i((X9,mw)=>{"use strict";mw.exports=vw()});var bw=i((Z9,yw)=>{yw.exports=hw()});var xw=i((e7,qw)=>{"use strict";var bD=Me(),gD=de(),qD=It(),xD=Q(),wD=Hr(),gw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?xD(u,s):!1,p,d;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&bD(p)?(d=gD(p),c=gw(e,r,p,d,c,o-1)-1):(qD(c+1),wD(e,c,p)),c++),l++;return c};qw.exports=gw});var ww=i(()=>{"use strict";var SD=q(),ED=xw(),TD=D(),CD=ne(),OD=de(),kD=zn();SD({target:"Array",proto:!0},{flatMap:function(r){var t=CD(this),n=OD(t),a;return TD(r),a=kD(t,0),ED(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var Sw=i(()=>{"use strict";var ID=Do();ID("flatMap")});var Tw=i((i7,Ew)=>{"use strict";ww();Sw();var _D=se();Ew.exports=_D("Array","flatMap")});var Ow=i((o7,Cw)=>{"use strict";var PD=W(),RD=Tw(),ds=Array.prototype;Cw.exports=function(e){var r=e.flatMap;return e===ds||PD(ds,e)&&r===ds.flatMap?RD:r}});var Iw=i((u7,kw)=>{"use strict";var AD=Ow();kw.exports=AD});var Pw=i((s7,_w)=>{"use strict";var ND=Iw();_w.exports=ND});var Aw=i((c7,Rw)=>{"use strict";var MD=Pw();Rw.exports=MD});var Mw=i((l7,Nw)=>{"use strict";Nw.exports=Aw()});var Lw=i((f7,jw)=>{jw.exports=Mw()});var Fw=i((p7,$w)=>{"use strict";lo();var jD=se();$w.exports=jD("Array","concat")});var Bw=i((d7,Dw)=>{"use strict";var LD=W(),$D=Fw(),vs=Array.prototype;Dw.exports=function(e){var r=e.concat;return e===vs||LD(vs,e)&&r===vs.concat?$D:r}});var Uw=i((v7,Gw)=>{"use strict";var FD=Bw();Gw.exports=FD});var Ww=i((m7,Hw)=>{"use strict";var DD=Uw();Hw.exports=DD});var zw=i((h7,Kw)=>{"use strict";var BD=Ww();Kw.exports=BD});var Yw=i((y7,Vw)=>{"use strict";Vw.exports=zw()});var ms=i((b7,Jw)=>{Jw.exports=Yw()});var Zw=i(()=>{});var rS=i((B7,eS)=>{"use strict";Zw();Fo();var QD=Vr();eS.exports=QD.f("toPrimitive")});var nS=i((G7,tS)=>{"use strict";var XD=rS();tS.exports=XD});var iS=i((U7,aS)=>{"use strict";var ZD=nS();aS.exports=ZD});var uS=i((H7,oS)=>{"use strict";var e3=iS();oS.exports=e3});var cS=i((W7,sS)=>{"use strict";sS.exports=uS()});var bS=i((pY,yS)=>{"use strict";var t3=$(),n3=Ce(),a3=A(),i3=a3("match");yS.exports=function(e){var r;return t3(e)&&((r=e[i3])!==void 0?!!r:n3(e)==="RegExp")}});var qS=i((dY,gS)=>{"use strict";var o3=bS(),u3=TypeError;gS.exports=function(e){if(o3(e))throw new u3("The method doesn't accept regular expressions");return e}});var wS=i((vY,xS)=>{"use strict";var s3=A(),c3=s3("match");xS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[c3]=!1,"/./"[e](r)}catch{}}return!1}});var TS=i(()=>{"use strict";var l3=q(),f3=dt(),p3=mt().f,d3=Ni(),SS=Ze(),v3=qS(),m3=fr(),h3=wS(),y3=re(),b3=f3("".slice),g3=Math.min,ES=h3("startsWith"),q3=!y3&&!ES&&!!function(){var e=p3(String.prototype,"startsWith");return e&&!e.writable}();l3({target:"String",proto:!0,forced:!q3&&!ES},{startsWith:function(r){var t=SS(m3(this));v3(r);var n=d3(g3(arguments.length>1?arguments[1]:void 0,t.length)),a=SS(r);return b3(t,n,n+a.length)===a}})});var OS=i((yY,CS)=>{"use strict";TS();var x3=se();CS.exports=x3("String","startsWith")});var IS=i((bY,kS)=>{"use strict";var w3=W(),S3=OS(),gs=String.prototype;kS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===gs||w3(gs,e)&&r===gs.startsWith?S3:r}});var PS=i((gY,_S)=>{"use strict";var E3=IS();_S.exports=E3});var AS=i((qY,RS)=>{"use strict";var T3=PS();RS.exports=T3});var MS=i((xY,NS)=>{"use strict";var C3=AS();NS.exports=C3});var LS=i((wY,jS)=>{"use strict";jS.exports=MS()});var FS=i((SY,$S)=>{$S.exports=LS()});var DS=i(()=>{"use strict";var O3=q(),k3=Rt().filter,I3=xt(),_3=I3("filter");O3({target:"Array",proto:!0,forced:!_3},{filter:function(r){return k3(this,r,arguments.length>1?arguments[1]:void 0)}})});var GS=i((CY,BS)=>{"use strict";DS();var P3=se();BS.exports=P3("Array","filter")});var HS=i((OY,US)=>{"use strict";var R3=W(),A3=GS(),qs=Array.prototype;US.exports=function(e){var r=e.filter;return e===qs||R3(qs,e)&&r===qs.filter?A3:r}});var KS=i((kY,WS)=>{"use strict";var N3=HS();WS.exports=N3});var VS=i((IY,zS)=>{"use strict";var M3=KS();zS.exports=M3});var JS=i((_Y,YS)=>{"use strict";var j3=VS();YS.exports=j3});var XS=i((PY,QS)=>{"use strict";QS.exports=JS()});var eE=i((RY,ZS)=>{ZS.exports=XS()});var hE=i(()=>{"use strict";var H3=q(),W3=z(),ws=jr(),K3=Uu(),lE=eu(),z3=ee(),fE=$(),V3=rr(),dE=P(),Ss=W3("Reflect","construct"),Y3=Object.prototype,J3=[].push,vE=dE(function(){function e(){}return!(Ss(function(){},[],e)instanceof e)}),mE=!dE(function(){Ss(function(){})}),pE=vE||mE;H3({target:"Reflect",stat:!0,forced:pE,sham:pE},{construct:function(r,t){lE(r),z3(t);var n=arguments.length<3?r:lE(arguments[2]);if(mE&&!vE)return Ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ws(J3,a,t),new(ws(K3,r,a))}var o=n.prototype,u=V3(fE(o)?o:Y3),s=ws(r,u,t);return fE(s)?s:u}})});var bE=i((pJ,yE)=>{"use strict";hE();var Q3=J();yE.exports=Q3.Reflect.construct});var qE=i((dJ,gE)=>{"use strict";var X3=bE();gE.exports=X3});var wE=i((vJ,xE)=>{"use strict";var Z3=qE();xE.exports=Z3});var EE=i((mJ,SE)=>{"use strict";var e4=wE();SE.exports=e4});var Ka=i((hJ,TE)=>{"use strict";TE.exports=EE()});var OE=i((yJ,CE)=>{CE.exports=Ka()});var jE=i((CJ,ME)=>{"use strict";var r4=P();ME.exports=r4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var FE=i((OJ,$E)=>{"use strict";var t4=P(),n4=$(),a4=Ce(),LE=jE(),za=Object.isExtensible,i4=t4(function(){za(1)});$E.exports=i4||LE?function(r){return!n4(r)||LE&&a4(r)==="ArrayBuffer"?!1:za?za(r):!0}:za});var BE=i((kJ,DE)=>{"use strict";var o4=P();DE.exports=!o4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var _s=i((IJ,HE)=>{"use strict";var u4=q(),s4=N(),c4=zr(),l4=$(),Os=V(),f4=ae().f,GE=Pt(),p4=fo(),ks=FE(),d4=Dr(),v4=BE(),UE=!1,Ke=d4("meta"),m4=0,Is=function(e){f4(e,Ke,{value:{objectID:"O"+m4++,weakData:{}}})},h4=function(e,r){if(!l4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Os(e,Ke)){if(!ks(e))return"F";if(!r)return"E";Is(e)}return e[Ke].objectID},y4=function(e,r){if(!Os(e,Ke)){if(!ks(e))return!0;if(!r)return!1;Is(e)}return e[Ke].weakData},b4=function(e){return v4&&UE&&ks(e)&&!Os(e,Ke)&&Is(e),e},g4=function(){q4.enable=function(){},UE=!0;var e=GE.f,r=s4([].splice),t={};t[Ke]=1,e(t).length&&(GE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ke){r(a,o,1);break}return a},u4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:p4.f}))},q4=HE.exports={enable:g4,fastKey:h4,getWeakData:y4,onFreeze:b4};c4[Ke]=!0});var zE=i((_J,KE)=>{"use strict";var x4=q(),w4=R(),S4=_s(),E4=P(),T4=Oe(),C4=me(),O4=ma(),k4=M(),I4=$(),_4=lr(),P4=$e(),R4=ae().f,A4=Rt().forEach,N4=K(),WE=er(),M4=WE.set,j4=WE.getterFor;KE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=w4[e],s=u&&u.prototype,c={},l;if(!N4||!k4(u)||!(a||s.forEach&&!E4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),S4.enable();else{l=r(function(d,v){M4(O4(d,f),{type:e,collection:new u}),_4(v)||C4(v,d[o],{that:d,AS_ENTRIES:n})});var f=l.prototype,p=j4(e);A4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(d){var v=d==="add"||d==="set";d in s&&!(a&&d==="clear")&&T4(f,d,function(h,m){var x=p(this).collection;if(!v&&a&&!I4(h))return d==="get"?void 0:!1;var b=x[d](h===0?0:h,m);return v?this:b})}),a||R4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return P4(l,e,!1,!0),c[e]=l,x4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var YE=i((PJ,VE)=>{"use strict";var L4=je();VE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:L4(e,n,r[n],t);return e}});var t0=i((RJ,r0)=>{"use strict";var JE=rr(),$4=Yn(),QE=YE(),F4=Q(),D4=ma(),B4=lr(),G4=me(),U4=Un(),Va=Hn(),H4=Zo(),ln=K(),XE=_s().fastKey,e0=er(),ZE=e0.set,Ps=e0.getterFor;r0.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){D4(l,o),ZE(l,{type:r,index:JE(null),first:null,last:null,size:0}),ln||(l.size=0),B4(f)||G4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Ps(r),s=function(l,f,p){var d=u(l),v=c(l,f),h,m;return v?v.value=p:(d.last=v={index:m=XE(f,!0),key:f,value:p,previous:h=d.last,next:null,removed:!1},d.first||(d.first=v),h&&(h.next=v),ln?d.size++:l.size++,m!=="F"&&(d.index[m]=v)),l},c=function(l,f){var p=u(l),d=XE(f),v;if(d!=="F")return p.index[d];for(v=p.first;v;v=v.next)if(v.key===f)return v};return QE(o,{clear:function(){for(var f=this,p=u(f),d=p.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=null),d=d.next;p.first=p.last=null,p.index=JE(null),ln?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),d=c(f,l);if(d){var v=d.next,h=d.previous;delete p.index[d.index],d.removed=!0,h&&(h.next=v),v&&(v.previous=h),p.first===d&&(p.first=v),p.last===d&&(p.last=h),ln?p.size--:f.size--}return!!d},forEach:function(f){for(var p=u(this),d=F4(f,arguments.length>1?arguments[1]:void 0),v;v=v?v.next:p.first;)for(d(v.value,v.key,this);v&&v.removed;)v=v.previous},has:function(f){return!!c(this,f)}}),QE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),ln&&$4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Ps(r),o=Ps(n);U4(e,r,function(u,s){ZE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Va(void 0,!0)):Va(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),H4(r)}}});var n0=i(()=>{"use strict";var W4=zE(),K4=t0();W4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},K4)});var a0=i(()=>{"use strict";n0()});var o0=i((LJ,i0)=>{"use strict";i0.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ue=i(($J,s0)=>{"use strict";var z4=z(),Ya=o0(),u0=z4("Map");s0.exports={Map:u0,set:Ya("set",2),get:Ya("get",1),has:Ya("has",1),remove:Ya("delete",1),proto:u0.prototype}});var Rs=i(()=>{"use strict";var V4=q(),Y4=N(),J4=D(),Q4=fr(),X4=me(),Ja=ue(),c0=re(),Z4=P(),l0=Ja.Map,eB=Ja.has,rB=Ja.get,tB=Ja.set,nB=Y4([].push),aB=c0||Z4(function(){return l0.groupBy("ab",function(e){return e}).get("a").length!==1});V4({target:"Map",stat:!0,forced:c0||aB},{groupBy:function(r,t){Q4(r),J4(t);var n=new l0,a=0;return X4(r,function(o){var u=t(o,a++);eB(n,u)?nB(rB(n,u),o):tB(n,u,[o])}),n}})});var X=i((BJ,f0)=>{"use strict";var iB=Xe(),oB=TypeError;f0.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new oB(iB(e)+" is not a map")}});var Ns=i(()=>{"use strict";var uB=q(),sB=X(),As=ue(),cB=re(),lB=As.get,fB=As.has,pB=As.set;uB({target:"Map",proto:!0,real:!0,forced:cB},{getOrInsert:function(r,t){return fB(sB(this),r)?lB(this,r):(pB(this,r,t),t)}})});var js=i(()=>{"use strict";var dB=q(),vB=D(),mB=X(),Ms=ue(),hB=re(),yB=Ms.get,bB=Ms.has,gB=Ms.set;dB({target:"Map",proto:!0,real:!0,forced:hB},{getOrInsertComputed:function(r,t){if(mB(this),vB(t),bB(this,r))return yB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return gB(this,r,n),n}})});var d0=i((KJ,p0)=>{"use strict";xr();a0();Rs();Ns();js();_t();yr();var qB=J();p0.exports=qB.Map});var m0=i((zJ,v0)=>{"use strict";var xB=d0();wr();v0.exports=xB});var Ls=i(()=>{"use strict";Ns()});var $s=i(()=>{"use strict";js()});var h0=i(()=>{"use strict";Rs()});var b0=i((eQ,y0)=>{"use strict";var wB=m0();Ls();$s();h0();y0.exports=wB});var q0=i((rQ,g0)=>{"use strict";var SB=Q(),EB=ee(),TB=ne(),CB=me();g0.exports=function(e,r,t){return function(a){var o=TB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?SB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return CB(o,function(d){var v=c?l(d,p++):d;t?r(f,EB(v)[0],v[1]):r(f,v)}),f}}});var w0=i(()=>{"use strict";var OB=q(),x0=ue(),kB=q0();OB({target:"Map",stat:!0,forced:!0},{from:kB(x0.Map,x0.set,!0)})});var E0=i((aQ,S0)=>{"use strict";var IB=ee();S0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,IB(s)[0],s[1]):r(a,s)}return a}}});var C0=i(()=>{"use strict";var _B=q(),T0=ue(),PB=E0();_B({target:"Map",stat:!0,forced:!0},{of:PB(T0.Map,T0.set,!0)})});var k0=i(()=>{"use strict";var RB=q(),AB=G(),NB=me(),MB=M(),O0=D(),jB=ue().Map;RB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=MB(this)?this:jB,a=new n;O0(t);var o=O0(a.set);return NB(r,function(u){AB(o,a,t(u),u)}),a}})});var I0=i(()=>{"use strict";var LB=q(),$B=X(),FB=ue().remove;LB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=$B(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=FB(r,arguments[a]),t=t&&n;return!!t}})});var P0=i(()=>{"use strict";var DB=q(),BB=X(),Fs=ue(),GB=Fs.get,UB=Fs.has,_0=Fs.set;DB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=BB(this),a,o;return UB(n,r)?(a=GB(n,r),"update"in t&&(a=t.update(a,r,n),_0(n,r,a)),a):(o=t.insert(r,n),_0(n,r,o),o)}})});var A0=i((dQ,R0)=>{"use strict";var HB=G();R0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=HB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var xe=i((vQ,N0)=>{"use strict";var WB=A0();N0.exports=function(e,r,t){return t?WB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var M0=i(()=>{"use strict";var KB=q(),zB=Q(),VB=X(),YB=xe();KB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=VB(this),n=zB(r,arguments.length>1?arguments[1]:void 0);return YB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var L0=i(()=>{"use strict";var JB=q(),QB=Q(),XB=X(),j0=ue(),ZB=xe(),e5=j0.Map,r5=j0.set;JB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=XB(this),n=QB(r,arguments.length>1?arguments[1]:void 0),a=new e5;return ZB(t,function(o,u){n(o,u,t)&&r5(a,u,o)}),a}})});var $0=i(()=>{"use strict";var t5=q(),n5=Q(),a5=X(),i5=xe();t5({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=a5(this),n=n5(r,arguments.length>1?arguments[1]:void 0),a=i5(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var F0=i(()=>{"use strict";var o5=q(),u5=Q(),s5=X(),c5=xe();o5({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=s5(this),n=u5(r,arguments.length>1?arguments[1]:void 0),a=c5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var B0=i((SQ,D0)=>{"use strict";D0.exports=function(e,r){return e===r||e!==e&&r!==r}});var G0=i(()=>{"use strict";var l5=q(),f5=B0(),p5=X(),d5=xe();l5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return d5(p5(this),function(t){if(f5(t,r))return!0},!0)===!0}})});var U0=i(()=>{"use strict";var v5=q(),m5=X(),h5=xe();v5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=h5(m5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var W0=i(()=>{"use strict";var y5=q(),b5=Q(),g5=X(),H0=ue(),q5=xe(),x5=H0.Map,w5=H0.set;y5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=g5(this),n=b5(r,arguments.length>1?arguments[1]:void 0),a=new x5;return q5(t,function(o,u){w5(a,n(o,u,t),o)}),a}})});var z0=i(()=>{"use strict";var S5=q(),E5=Q(),T5=X(),K0=ue(),C5=xe(),O5=K0.Map,k5=K0.set;S5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=T5(this),n=E5(r,arguments.length>1?arguments[1]:void 0),a=new O5;return C5(t,function(o,u){k5(a,u,n(o,u,t))}),a}})});var V0=i(()=>{"use strict";var I5=q(),_5=X(),P5=me(),R5=ue().set;I5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=_5(this),n=arguments.length,a=0;a<n;)P5(arguments[a++],function(o,u){R5(t,o,u)},{AS_ENTRIES:!0});return t}})});var Y0=i(()=>{"use strict";var A5=q(),N5=D(),M5=X(),j5=xe(),L5=TypeError;A5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=M5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(N5(r),j5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new L5("Reduce of empty map with no initial value");return a}})});var J0=i(()=>{"use strict";var $5=q(),F5=Q(),D5=X(),B5=xe();$5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=D5(this),n=F5(r,arguments.length>1?arguments[1]:void 0);return B5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var X0=i(()=>{"use strict";var G5=q(),Q0=D(),U5=X(),Ds=ue(),H5=TypeError,W5=Ds.get,K5=Ds.has,z5=Ds.set;G5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=U5(this),a=arguments.length;Q0(t);var o=K5(n,r);if(!o&&a<3)throw new H5("Updating absent value");var u=o?W5(n,r):Q0(a>2?arguments[2]:void 0)(r,n);return z5(n,r,t(u,r,n)),n}})});var Gs=i((DQ,Z0)=>{"use strict";var Qa=G(),Bs=D(),Xa=M(),V5=ee(),Y5=TypeError;Z0.exports=function(r,t){var n=V5(this),a=Bs(n.get),o=Bs(n.has),u=Bs(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Xa(t)&&!Xa(s))throw new Y5("At least one callback required");return Qa(o,n,r)?(c=Qa(a,n,r),Xa(t)&&(c=t(c),Qa(u,n,r,c))):Xa(s)&&(c=s(),Qa(u,n,r,c)),c}});var eT=i(()=>{"use strict";var J5=q(),Q5=Gs();J5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:Q5})});var rT=i(()=>{"use strict";var X5=q(),Z5=Gs();X5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:Z5})});var nT=i((WQ,tT)=>{"use strict";var e6=b0();w0();C0();k0();I0();P0();M0();L0();$0();F0();G0();Ls();$s();U0();W0();z0();V0();Y0();J0();X0();eT();rT();tT.exports=e6});var iT=i((KQ,aT)=>{"use strict";aT.exports=nT()});var uT=i(()=>{"use strict";var r6=q(),t6=dt(),n6=Hi().indexOf,a6=fs(),Us=t6([].indexOf),oT=!!Us&&1/Us([1],1,-0)<0,i6=oT||!a6("indexOf");r6({target:"Array",proto:!0,forced:i6},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return oT?Us(this,r,t)||0:n6(this,r,t)}})});var cT=i((YQ,sT)=>{"use strict";uT();var o6=se();sT.exports=o6("Array","indexOf")});var fT=i((JQ,lT)=>{"use strict";var u6=W(),s6=cT(),Hs=Array.prototype;lT.exports=function(e){var r=e.indexOf;return e===Hs||u6(Hs,e)&&r===Hs.indexOf?s6:r}});var dT=i((QQ,pT)=>{"use strict";var c6=fT();pT.exports=c6});var mT=i((XQ,vT)=>{"use strict";var l6=dT();vT.exports=l6});var yT=i((ZQ,hT)=>{"use strict";var f6=mT();hT.exports=f6});var gT=i((eX,bT)=>{"use strict";bT.exports=yT()});var jT=i(()=>{"use strict";var y6=q(),b6=ne(),MT=$n(),g6=P(),q6=g6(function(){MT(1)});y6({target:"Object",stat:!0,forced:q6},{keys:function(r){return MT(b6(r))}})});var $T=i((iZ,LT)=>{"use strict";jT();var x6=J();LT.exports=x6.Object.keys});var DT=i((oZ,FT)=>{"use strict";var w6=$T();FT.exports=w6});var GT=i((uZ,BT)=>{"use strict";var S6=DT();BT.exports=S6});var HT=i((sZ,UT)=>{"use strict";var E6=GT();UT.exports=E6});var KT=i((cZ,WT)=>{"use strict";WT.exports=HT()});var VT=i((lZ,zT)=>{zT.exports=KT()});var Qs=i((wZ,JT)=>{var Js={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},P6=Js.yellow,R6=Object.keys(Js),A6=/^#[0-9a-fA-F]{6}$/;JT.exports={COLOR_PRESETS:Js,DEFAULT_COLOR:P6,PRESET_NAMES:R6,HEX_COLOR_REGEX:A6}});var vC=i((DZ,dC)=>{var pC={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},F6=Object.keys(pC);dC.exports={ALLOWED_REACTIONS:pC,ALLOWED_REACTION_EMOJIS:F6}});var Je="";function yc(e){Je=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function bc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function ui({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await cr(f,"Failed to create comment"),f.json()}async function si(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await cr(a,"Failed to update comment"),a.json()}async function gc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function qc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function xc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function wc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var yF=y(Kr(),1),bF=y(Kn(),1),gF=y(sa(),1),qF=y(ca(),1),xF=y(la(),1);var $u=y(ot(),1);function yb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):$u.default.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new $u.default(function(n,a){var o=e.apply(r,t);function u(c){yb(o,n,a,u,s,"next",c)}function s(c){yb(o,n,a,u,s,"throw",c)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function ir(e){return new Wt(e,0)}var Fu=y(ot(),1),Ob=y(ke(),1),kb=y(Ta(),1);function _e(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Wt;Fu.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Fu.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof Ob.default=="function"&&kb.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var wF=y(le(),1),SF=y(Xq(),1);function fe(e){var r,t=mF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function mF(e){return"startContainer"in e}function ur(e){if(hF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function hF(e){return"startContainer"in e}var lx=y(cx(),1);function fx(e){if((0,lx.default)(e))return e}var Ex=y(ke(),1),Tx=y(zo(),1),Cx=y(ss(),1);function Ox(e,r){var t=e==null?null:typeof Ex.default<"u"&&(0,Tx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Cx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var kx=y(Li(),1),Ix=y(co(),1);function Da(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function cs(e,r){if(e){var t;if(typeof e=="string")return Da(e,r);var n=(0,kx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Ix.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Da(e,r):void 0}}function _x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,r){return fx(e)||Ox(e,r)||cs(e,r)||_x()}var Px=y(ke(),1),Rx=y(Ta(),1),Ax=y(en(),1),an=y(ot(),1);function st(e){var r,t,n,a=2;for(typeof Px.default<"u"&&(t=Rx.default,n=Ax.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ba(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ba(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ba=function(n){this.s=n,this.n=n.next},Ba.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?an.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?an.default.reject(n):r(a.apply(this.s,arguments))}},new Ba(e)}var JD=y(le(),1);var HD=y(le(),1),WD=y(Vx(),1),KD=y(Jx(),1),zD=y(bw(),1),VD=y(Lw(),1),YD=y(ms(),1);var zs=y(le(),1);var U3=y(le(),1);var ys=y(le(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Qw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var hs=y(Yt(),1);var un=y(ke(),1),Xw=y(en(),1);function We(e){"@babel/helpers - typeof";return We=typeof un.default=="function"&&typeof Xw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},We(e)}var lS=y(cS(),1);function fS(e,r){if(We(e)!="object"||!e)return e;var t=e[lS.default];if(t!==void 0){var n=t.call(e,r||"default");if(We(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ga(e){var r=fS(e,"string");return We(r)=="symbol"?r:r+""}function pS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,hs.default)(e,Ga(n.key),n)}}function sn(e,r,t){return r&&pS(e.prototype,r),t&&pS(e,t),(0,hs.default)(e,"prototype",{writable:!1}),e}var dS=y(Yt(),1);function Ir(e,r,t){return(r=Ga(r))in e?(0,dS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var vS=y(Kr(),1);var Ua="Iterator exhausted before seek ended.",cn=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var p=this._readToPreviousChunk(),d=He(p,2),v=d[0],h=d[1];if(t&&(u=v+u),h===null)throw new RangeError(Ua)}else for(;!on(this.currentChunk,n);){var s=this._readToNextChunk(),c=He(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ua)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,vS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=He(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ua)}}else{var d=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,d)),this.offsetInChunk=d,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var v=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(v,this.offsetInChunk)+u),this.offsetInChunk=v;break}else{var h=this._readToPreviousChunk(),m=He(h,2),x=m[0],b=m[1];if(t&&(u=x+u),b===null){if(o)break;throw new RangeError(Ua)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function hS(e,r){return bs.apply(this,arguments)}function bs(){return bs=Or(ys.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,k,w,E,S,C,L=arguments;return ys.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new cn(t()),p=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),d=f.readToChunk(r.endChunk,r.endIndex),v="",h="",m=function(){return v.length+d.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),x=Math.floor((s-m())/2),v=f.read(-x,!1,!0)+v,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),g=s-m(),v=f.read(-g,!1,!0)+v))),o||(f.seekToChunk(r.startChunk,r.startIndex-v.length),v=Ha(f,l,!0)+v,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ha(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:d,prefix:v,suffix:h},k=Wa(O)(t()),_.next=16,k.next();case 16:if(w=_.sent,!(!w.done&&Qw(w.value,r))){_.next=21;break}return _.next=20,k.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-v.length),p.seekToChunk(E.startChunk,E.startIndex-v.length),S=mS(f,p,!0),S!==void 0&&!o&&(S=Ha(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=mS(f,p,!1),C!==void 0&&!o&&(C=C+Ha(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){_.next=37;break}v=S+v,_.next=42;break;case 37:if(C===void 0){_.next=41;break}h=h+C,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(v=S+v),C!==void 0&&(h=h+C);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),bs.apply(this,arguments)}function mS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ha(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(r3(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function r3(e){return/^\s+$/.test(e)}var nE=y(Kr(),1),aE=y(Kn(),1),iE=y(sa(),1),oE=y(ca(),1),uE=y(la(),1);var xs=y(le(),1),sE=y(FS(),1),cE=y(eE(),1);function rE(e,r){var t;if(typeof iE.default>"u"||(0,oE.default)(e)==null){if(Array.isArray(e)||(t=L3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,uE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function L3(e,r){var t;if(e){if(typeof e=="string")return tE(e,r);var n=(0,nE.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,aE.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tE(e,r)}}function tE(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Wa(e){return function(){var r=_e(xs.default.mark(function n(a){var o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,k,w,E,S,C,L,Ee,_,te,Te,Z,F;return xs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,d=p.data,v=[],h=rE(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,b=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-b,g<=d.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-b,(O<d.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=c.length-b,!(k<=d.length)){T.next=24;break}if(!(0,sE.default)(d).call(d,c.substring(b))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:d===c.substring(b,b+d.length)&&(x.charactersMatched+=d.length,v.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=v,!(c.length<=d.length)){T.next=49;break}w=0;case 38:if(!(w<=d.length)){T.next=49;break}if(E=d.indexOf(c,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(d.length-c.length+1,0),L=function(Ye){var mc=d[Ye];S=(0,cE.default)(S).call(S,function(IC){return mc===c[Ye-IC]}),mc===c[0]&&S.push(Ye)},Ee=C;Ee<d.length;Ee++)L(Ee);_=rE(S);try{for(_.s();!(te=_.n()).done;)Te=te.value,Z=d.length-Te,F={charactersMatched:Z},Z>=u.length+o.length&&(F.endChunk=p,F.endIndex=Te+u.length+o.length),(Z>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Te+u.length),l.push(F)}catch(Nr){_.e(Nr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var B3=y(le(),1);var $3=y(Kr(),1),F3=y(ms(),1);var G3=y(le(),1);var pn=y(OE(),1);var IE=y(Oa(),1),_E=y(Yt(),1);var Es=y(ka(),1),kE=y(Vt(),1);function sr(e,r){var t;return sr=Es.default?(0,kE.default)(t=Es.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function Ts(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,IE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,_E.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function PE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RE(e,r){if(r&&(We(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PE(e)}var AE=y(ka(),1),NE=y(Vt(),1),Cs=y(Ca(),1);function _r(e){var r;return _r=AE.default?(0,NE.default)(r=Cs.default).call(r):function(t){return t.__proto__||(0,Cs.default)(t)},_r(e)}var Ks=y(iT(),1),OT=y(Oa(),1);var qT=y(gT(),1);function xT(e){try{var r;return(0,qT.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var ST=y(Ka(),1),ET=y(ss(),1),TT=y(Vt(),1);var wT=y(Ka(),1);function Ws(){try{var e=!Boolean.prototype.valueOf.call((0,wT.default)(Boolean,[],function(){}))}catch{}return(Ws=function(){return!!e})()}function CT(e,r,t){if(Ws())return ST.default.apply(null,arguments);var n=[null];(0,ET.default)(n).apply(n,r);var a=new((0,TT.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function fn(e){var r=typeof Ks.default=="function"?new Ks.default:void 0;return fn=function(n){if(n===null||!xT(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return CT(n,arguments,_r(this).constructor)}return a.prototype=(0,OT.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},fn(e)}function _T(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(v){return!r||r.intersectsNode(v)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=kT(e.startContainer,e.startOffset),o=He(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=kT(e.endContainer,e.endOffset),l=He(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function kT(e,r){var t;if(IT(e))return[e,r];var n;if(p6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(IT(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function IT(e){return e.nodeType===Node.TEXT_NODE}function p6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function RT(e){var r=d6();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,pn.default)(n,arguments,o)}else a=n.apply(this,arguments);return RE(this,a)}}function d6(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Za=function(e){Ts(t,e);var r=RT(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),v6=function(e){Ts(t,e);var r=RT(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!PT(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Za}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!PT(t))throw new Za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new v6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=_T(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function PT(e){return e.nodeType===Node.TEXT_NODE}function AT(e,r){return Vs.apply(this,arguments)}function Vs(){return Vs=Or(zs.default.mark(function e(r,t){var n,a,o,u=arguments;return zs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??fe(r)),o=new Pr(a),c.next=5,hS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Vs.apply(this,arguments)}var Ys=y(le(),1);function NT(e){var r=Wa(e);return function(){var t=_e(Ys.default.mark(function a(o){var u,s,c,l,f,p,d,v;return Ys.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(d=m.sent,s){m.next=29;break}return v=d,m.next=26,u.chunkRangeToRange(v);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var m6=y(le(),1);var h6=y(le(),1);var T6=y(VT(),1),C6=y(Kr(),1),O6=y(Kn(),1),k6=y(sa(),1),I6=y(ca(),1),_6=y(la(),1);async function YT(e,r){let t=await AT(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function dn(e,r){let t=NT({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=y(Qs()),vn=y(Qs());function ct(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return vn.COLOR_PRESETS[r]?vn.COLOR_PRESETS[r]:vn.HEX_COLOR_REGEX.test(r)?r:null}function ei(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var lt="fb-highlight",QT="fb-highlight-active",ri=new Map,mn=null;function ZT(e){mn=e}function hn(e,r,t){let n=ct(t)||he.DEFAULT_COLOR;ri.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=XT(e,r,n);a.push(o)}else{let o=M6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(XT(c,r,n))}}return a}function XT(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return N6(e,r,u,t);let s=document.createElement("mark");s.className=lt,s.dataset.commentId=r,s.style.backgroundColor=ei(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{mn&&mn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function N6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let d=document.createElementNS(o,"g");d.setAttribute("class",lt),d.setAttribute("data-comment-id",r),d.style.cursor="pointer";for(let b=0;b<a.length;b++){let g=a[b],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",d.appendChild(O)}f&&f!==t?f.appendChild(d):t.appendChild(d);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let h=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=b=>{b.preventDefault(),b.stopPropagation(),mn&&mn(r)};return h.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",x),b.dataset.fbCommentId=r}),d}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function ti(e){ri.delete(e),document.querySelectorAll(`.${lt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function eC(){ri.clear(),document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function yn(e){document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ri.get(t)||he.DEFAULT_COLOR,o=ei(a,.55),u=ei(a,.35);n?r.classList.add(QT):r.classList.remove(QT),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Xs(e){let r=document.querySelector(`.${lt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function M6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function rC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function tC(e,r){let t=rC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Re(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var j6=`
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
`,nC=null,aC=null;function iC(e,r){aC=e,nC=r,L6()}function L6(){let e=document.createElement("style");e.textContent=j6,document.head.appendChild(e)}function oC(){let e=nC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(aC.contentSelector||"body").innerHTML,c=tC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Re(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function $6(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function Zs(e){if(!e)return"";let r=Re(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,a)=>{let o=t.length;return t.push(`<code>${a}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/__(.+?)__/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,a,o)=>{let u=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return $6(u)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${a}</a>`:a}),r=r.replace(/\x01(\d+)\x02/g,(n,a)=>t[a]),r=r.replace(/\n/g,"<br>"),r}function uC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function ec(e,r){return e.length>r?e.slice(0,r)+"...":e}function sC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var bn=null;function lC(e){bn=document.createElement("div"),bn.className="fb-toast-container",e.appendChild(bn)}function ze(e,r="success"){if(!bn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>cC(t)),t.appendChild(o)}bn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>cC(t),r==="error"?8e3:4e3)}function cC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function fC(e,r){return r<=0?0:(e%r+r)%r}var ni=y(vC());var D6=320,yC="feedback-layer-commenter",B=null,ye=null,we=null,rc=null,bC=null,tc=null,nc=null,ac=null,ic=null,xn=null,B6=null,uc=null,gC=!1,qC=[],sc=new Set,Ae=-1,gn=null,mC=!1;function G6(){mC||(mC=!0,X6())}function Ve(){return localStorage.getItem(yC)||""}function xC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){bC=e,tc=r,nc=t,ac=n,ic=a,xn=o,B6=u,uc=s||null,G6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
               value="${Re(Ve())}">
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>ft()),document.body.appendChild(c),document.body.appendChild(B),lC(B),ye=B.querySelector(".fb-comment-list"),ye.setAttribute("role","list"),we=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(yC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>oC()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>SC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>cc());let v=B.querySelector(".fb-show-resolved-cb");v.addEventListener("change",()=>{gC=v.checked,pe(qC,sc)}),document.addEventListener("keydown",H6)}function ft(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),K6()}function cc(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),EC(),Ae=-1,document.body.focus()}function wC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function qn(){return ye?Array.from(ye.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function oc(e){let r=qn();if(r.length===0)return;e=fC(e,r.length),Ae=e,ye.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&sc.has(n.dataset.commentId)&&(yn(n.dataset.commentId),Xs(n.dataset.commentId))}function U6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),cc();return}if(!wC()){if(r==="Enter"){let t=qn();if(Ae>=0&&Ae<t.length){e.preventDefault();let a=t[Ae].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),qn().length===0)return;let n=Ae<0?0:Ae+1;oc(n);return}if(r==="k"){e.preventDefault();let t=qn();if(t.length===0)return;let n=Ae<0?t.length-1:Ae-1;oc(n);return}r==="?"&&(e.preventDefault(),SC())}}function SC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function H6(e){wC()||e.key==="s"&&(e.preventDefault(),W6())}function W6(){B.classList.contains("fb-sidebar-collapsed")?ft():cc()}function K6(){EC(),gn=U6,document.addEventListener("keydown",gn)}function EC(){gn&&(document.removeEventListener("keydown",gn),gn=null)}function TC(e){if(ft(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}rc=e,we.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=uc||he.DEFAULT_COLOR;we.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Re(ec(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
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
  `;let n=t;we.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),we.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=we.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(bC({comment:u,commenter:Ve(),color:n}),we.style.display="none",rc=null)};we.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),we.querySelector(".fb-cancel-btn").addEventListener("click",()=>{we.style.display="none",rc=null}),we.scrollIntoView({behavior:"smooth",block:"nearest"})}function pe(e,r=new Set,t=new Map){qC=e,sc=r,Ae=-1,ye.innerHTML="";let{topLevel:n,repliesByParent:a}=uC(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),d=t.get(f.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)});let s=[...o,...u],c=gC?s:s.filter(l=>l.status!=="closed");if(s.length===0){ye.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){ye.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(hC(l,!1,f));let d=a.get(l.id)||[];for(let h of d)p.appendChild(hC(h,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",h=>{h.stopPropagation(),J6(l.id,p,v)}),p.appendChild(v),p.addEventListener("focus",()=>{let m=qn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&oc(m)}),ye.appendChild(p)}}function hC(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Re(ec(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${Zs(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Re(e.author)}</span>
      <span class="fb-cmt-time">${sC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return V6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(yn(e.id),Xs(e.id)),ye.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),nc&&nc(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),Q6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),tc&&tc(e.id)}),a}var lc=ni.ALLOWED_REACTIONS,z6=Object.keys(lc);function V6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=lc[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),xn&&xn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),Y6(e,r,a)}),e.appendChild(a)}function Y6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of z6){let s=lc[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),xn&&xn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function J6(e,r,t){ft();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ac&&ac({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function Q6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=ct(e.color)||uc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
    ${a?`<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${u.map(([f,p])=>`<button type="button" class="fb-color-swatch${p===o?" fb-color-swatch-active":""}" data-color="${p}" title="${f}" style="background:${p};"></button>`).join("")}
      </div>
    </div>`:""}
    <textarea class="fb-form-textarea" rows="3">${Re(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(d=>d.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;ic&&ic(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=Zs(n)})}function CC(e){let r=ye.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(ye.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function X6(){let e=document.createElement("style");e.textContent=`
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
      width: ${D6}px;
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
    .fb-cmt-body code {
      background: var(--remarq-bg-secondary);
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
    }
    .fb-cmt-body a {
      color: var(--remarq-accent);
      text-decoration: underline;
    }
    .fb-cmt-body a:hover {
      color: var(--remarq-accent-hover);
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
  `,document.head.appendChild(e)}function OC(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}function Z6(e){let r=new URL(e);return r.protocol=r.protocol==="https:"?"wss:":"ws:",r.pathname="/ws",r.toString()}function fc({apiBaseUrl:e,documentId:r,onEvent:t}){let n=Z6(e),a=null,o=1e3,u=null,s=!1,c=!1;function l(){if(!s){c=!1;try{a=new WebSocket(n)}catch{f();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=p=>{try{let d=JSON.parse(p.data);if(d.type==="subscribed"&&d.documentId===r){c=!0;return}c&&t(d)}catch{}},a.onclose=()=>{c=!1,s||f()},a.onerror=()=>{}}}function f(){s||(u=setTimeout(()=>{l()},o),o=Math.min(o*2,3e4))}return l(),{close(){s=!0,clearTimeout(u),a&&(a.onclose=null,a.close())}}}var Ar=null,ii=null,En=null,dc=null,I=[],Rr=null,Se=null,U=new Set,H=new Map,wn=null,ai=null;function vc(e){return I.some(r=>r.id===e.id)?!1:(I.push(e),!0)}function eG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};yc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{OC(),Ar=document.querySelector(r.contentSelector)||document.body,ii=r.documentUri||window.location.origin+window.location.pathname,En=r.documentId||null,dc=ct(r.defaultColor)||null,ai=r.apiUrl||window.location.origin,document.documentElement.dataset.remarqTheme=r.theme,xC({onSubmit:iG,onDelete:mG,onResolve:oG,onReply:uG,onEdit:sG,onReaction:lG,onColorChange:cG,defaultColor:dc}),ZT(a=>{ft(),CC(a),yn(a)}),nG(),await t(),await rG();{let a=En||(I.length>0?I[0].document:null);a&&(wn=fc({apiBaseUrl:ai,documentId:a,onEvent:kC}))}window.addEventListener("beforeunload",()=>{wn&&wn.close()}),iC(r,()=>I)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function rG(){try{I=await bc(ii,En),U=await tG(I),pe(I,U,H)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function tG(e){eC();let r=new Set;H.clear();for(let t of e)if(!t.parent)try{let n=await dn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},Ar);n&&t.status!=="closed"?(hn(n,t.id,t.color),r.add(t.id),H.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),H.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function nG(){document.addEventListener("mouseup",pc),document.addEventListener("keyup",pc),document.addEventListener("touchend",pc)}function pc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!Ar.contains(r.commonAncestorContainer)){Sn();return}aG(r)},10)}function aG(e){Sn();let r=e.getBoundingClientRect();Se=document.createElement("button"),Se.className="fb-annotate-tooltip",Se.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Se.style.top=window.scrollY+r.bottom+8+"px",Se.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Rr=await YT(o,Ar),TC(Rr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};Se.addEventListener("mousedown",t),Se.addEventListener("touchstart",t),document.body.appendChild(Se)}function Sn(){Se&&(Se.remove(),Se=null)}async function iG({comment:e,commenter:r,color:t}){if(!Rr)return;let n=t||dc||null;try{let a=await ui({uri:ii,document:En,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r,color:n});vc(a);let o=await dn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),U.add(a.id),H.set(a.id,o)),pe(I,U,H),!wn&&ai&&a.document&&(wn=fc({apiBaseUrl:ai,documentId:a.document,onEvent:kC})),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Rr=null}async function oi(e){if(!e.parent)if(ti(e.id),H.delete(e.id),e.status!=="closed")try{let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r?(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r)):U.delete(e.id)}catch(r){console.warn(`[feedback-layer] Could not anchor comment ${e.id}:`,r),U.delete(e.id)}else U.delete(e.id)}async function oG(e,r){try{let n=await gc(e,r?"closed":"open"),a=I.findIndex(o=>o.id===e);a!==-1&&(I[a]=n),await oi(n),pe(I,U,H)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function uG({parent_id:e,comment:r,commenter:t}){try{let n=await ui({uri:ii,document:En,body:r,author:t,parent:e});vc(n),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function sG(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await si(e,n),o=I.findIndex(u=>u.id===e);o!==-1&&(I[o]=a),t!==void 0&&await oi(a),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function cG(e,r){try{let t=await si(e,{color:r}),n=I.findIndex(a=>a.id===e);n!==-1&&(I[n]=t),await oi(t),pe(I,U,H)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function lG(e,r){let t=Ve();if(t)try{let o=I.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await wc(e,r,t):u=await xc(e,r,t);let s=I.findIndex(c=>c.id===e);s!==-1&&(I[s]={...I[s],reactions:u.reactions}),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function fG(e){if(vc(e)){if(!e.parent){let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r&&(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r))}pe(I,U,H)}}async function pG(e){let r=I.findIndex(t=>t.id===e.id);r!==-1&&(I[r]=e,await oi(e),pe(I,U,H))}async function dG(e){I.some(r=>r.id===e.id)&&(ti(e.id),U.delete(e.id),H.delete(e.id),I=I.filter(r=>r.id!==e.id&&r.parent!==e.id),pe(I,U,H))}var vG={"comment:created":fG,"comment:updated":pG,"comment:deleted":dG};async function kC(e){let{type:r,comment:t}=e;if(!t)return;let n=vG[r];if(n)try{await n(t)}catch(a){console.warn(`[feedback-layer] WebSocket ${r} failed for ${t.id}:`,a)}}async function mG(e){try{await qc(e),ti(e),U.delete(e),I=I.filter(r=>r.id!==e&&r.parent!==e),pe(I,U,H)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{eG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
