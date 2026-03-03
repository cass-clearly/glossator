var FeedbackLayer=(()=>{var PC=Object.create;var yc=Object.defineProperty;var RC=Object.getOwnPropertyDescriptor;var AC=Object.getOwnPropertyNames;var NC=Object.getPrototypeOf,MC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var jC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of AC(r))!MC.call(e,a)&&a!==t&&yc(e,a,{get:()=>r[a],enumerable:!(n=RC(r,a))||n.enumerable});return e};var y=(e,r,t)=>(t=e!=null?PC(NC(e)):{},jC(r||!e||!e.__esModule?yc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((gG,Ec)=>{"use strict";Ec.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((qG,Tc)=>{"use strict";var LC=P();Tc.exports=!LC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((xG,kc)=>{"use strict";var Cc=Mr(),Oc=Function.prototype,ci=Oc.call,$C=Cc&&Oc.bind.bind(ci,ci);kc.exports=Cc?$C:function(e){return function(){return ci.apply(e,arguments)}}});var W=i((wG,Ic)=>{"use strict";var FC=N();Ic.exports=FC({}.isPrototypeOf)});var R=i((li,_c)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};_c.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof li=="object"&&li)||function(){return this}()||Function("return this")()});var jr=i((SG,Nc)=>{"use strict";var DC=Mr(),Ac=Function.prototype,Pc=Ac.apply,Rc=Ac.call;Nc.exports=typeof Reflect=="object"&&Reflect.apply||(DC?Rc.bind(Pc):function(){return Rc.apply(Pc,arguments)})});var Ce=i((EG,jc)=>{"use strict";var Mc=N(),BC=Mc({}.toString),GC=Mc("".slice);jc.exports=function(e){return GC(BC(e),8,-1)}});var dt=i((TG,Lc)=>{"use strict";var UC=Ce(),HC=N();Lc.exports=function(e){if(UC(e)==="Function")return HC(e)}});var M=i((CG,$c)=>{"use strict";var fi=typeof document=="object"&&document.all;$c.exports=typeof fi>"u"&&fi!==void 0?function(e){return typeof e=="function"||e===fi}:function(e){return typeof e=="function"}});var K=i((OG,Fc)=>{"use strict";var WC=P();Fc.exports=!WC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((kG,Dc)=>{"use strict";var KC=Mr(),Tn=Function.prototype.call;Dc.exports=KC?Tn.bind(Tn):function(){return Tn.apply(Tn,arguments)}});var pi=i(Uc=>{"use strict";var Bc={}.propertyIsEnumerable,Gc=Object.getOwnPropertyDescriptor,zC=Gc&&!Bc.call({1:2},1);Uc.f=zC?function(r){var t=Gc(this,r);return!!t&&t.enumerable}:Bc});var Qe=i((_G,Hc)=>{"use strict";Hc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Cn=i((PG,Wc)=>{"use strict";var VC=N(),YC=P(),JC=Ce(),di=Object,QC=VC("".split);Wc.exports=YC(function(){return!di("z").propertyIsEnumerable(0)})?function(e){return JC(e)==="String"?QC(e,""):di(e)}:di});var lr=i((RG,Kc)=>{"use strict";Kc.exports=function(e){return e==null}});var fr=i((AG,zc)=>{"use strict";var XC=lr(),ZC=TypeError;zc.exports=function(e){if(XC(e))throw new ZC("Can't call method on "+e);return e}});var Ne=i((NG,Vc)=>{"use strict";var eO=Cn(),rO=fr();Vc.exports=function(e){return eO(rO(e))}});var $=i((MG,Yc)=>{"use strict";var tO=M();Yc.exports=function(e){return typeof e=="object"?e!==null:tO(e)}});var J=i((jG,Jc)=>{"use strict";Jc.exports={}});var z=i((LG,Xc)=>{"use strict";var vi=J(),mi=R(),nO=M(),Qc=function(e){return nO(e)?e:void 0};Xc.exports=function(e,r){return arguments.length<2?Qc(vi[e])||Qc(mi[e]):vi[e]&&vi[e][r]||mi[e]&&mi[e][r]}});var Lr=i(($G,rl)=>{"use strict";var aO=R(),Zc=aO.navigator,el=Zc&&Zc.userAgent;rl.exports=el?String(el):""});var $r=i((FG,ul)=>{"use strict";var ol=R(),hi=Lr(),tl=ol.process,nl=ol.Deno,al=tl&&tl.versions||nl&&nl.version,il=al&&al.v8,ge,On;il&&(ge=il.split("."),On=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!On&&hi&&(ge=hi.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=hi.match(/Chrome\/(\d+)/),ge&&(On=+ge[1])));ul.exports=On});var pr=i((DG,cl)=>{"use strict";var sl=$r(),iO=P(),oO=R(),uO=oO.String;cl.exports=!!Object.getOwnPropertySymbols&&!iO(function(){var e=Symbol("symbol detection");return!uO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&sl&&sl<41})});var yi=i((BG,ll)=>{"use strict";var sO=pr();ll.exports=sO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((GG,fl)=>{"use strict";var cO=z(),lO=M(),fO=W(),pO=yi(),dO=Object;fl.exports=pO?function(e){return typeof e=="symbol"}:function(e){var r=cO("Symbol");return lO(r)&&fO(r.prototype,dO(e))}});var Xe=i((UG,pl)=>{"use strict";var vO=String;pl.exports=function(e){try{return vO(e)}catch{return"Object"}}});var D=i((HG,dl)=>{"use strict";var mO=M(),hO=Xe(),yO=TypeError;dl.exports=function(e){if(mO(e))return e;throw new yO(hO(e)+" is not a function")}});var kn=i((WG,vl)=>{"use strict";var bO=D(),gO=lr();vl.exports=function(e,r){var t=e[r];return gO(t)?void 0:bO(t)}});var hl=i((KG,ml)=>{"use strict";var bi=G(),gi=M(),qi=$(),qO=TypeError;ml.exports=function(e,r){var t,n;if(r==="string"&&gi(t=e.toString)&&!qi(n=bi(t,e))||gi(t=e.valueOf)&&!qi(n=bi(t,e))||r!=="string"&&gi(t=e.toString)&&!qi(n=bi(t,e)))return n;throw new qO("Can't convert object to primitive value")}});var re=i((zG,yl)=>{"use strict";yl.exports=!0});var ql=i((VG,gl)=>{"use strict";var bl=R(),xO=Object.defineProperty;gl.exports=function(e,r){try{xO(bl,e,{value:r,configurable:!0,writable:!0})}catch{bl[e]=r}return r}});var vt=i((YG,Sl)=>{"use strict";var wO=re(),SO=R(),EO=ql(),xl="__core-js_shared__",wl=Sl.exports=SO[xl]||EO(xl,{});(wl.versions||(wl.versions=[])).push({version:"3.48.0",mode:wO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((JG,Tl)=>{"use strict";var El=vt();Tl.exports=function(e,r){return El[e]||(El[e]=r||{})}});var ne=i((QG,Cl)=>{"use strict";var TO=fr(),CO=Object;Cl.exports=function(e){return CO(TO(e))}});var V=i((XG,Ol)=>{"use strict";var OO=N(),kO=ne(),IO=OO({}.hasOwnProperty);Ol.exports=Object.hasOwn||function(r,t){return IO(kO(r),t)}});var Dr=i((ZG,kl)=>{"use strict";var _O=N(),PO=0,RO=Math.random(),AO=_O(1.1.toString);kl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+AO(++PO+RO,36)}});var A=i((e8,_l)=>{"use strict";var NO=R(),MO=dr(),Il=V(),jO=Dr(),LO=pr(),$O=yi(),Br=NO.Symbol,xi=MO("wks"),FO=$O?Br.for||Br:Br&&Br.withoutSetter||jO;_l.exports=function(e){return Il(xi,e)||(xi[e]=LO&&Il(Br,e)?Br[e]:FO("Symbol."+e)),xi[e]}});var Nl=i((r8,Al)=>{"use strict";var DO=G(),Pl=$(),Rl=Fr(),BO=kn(),GO=hl(),UO=A(),HO=TypeError,WO=UO("toPrimitive");Al.exports=function(e,r){if(!Pl(e)||Rl(e))return e;var t=BO(e,WO),n;if(t){if(r===void 0&&(r="default"),n=DO(t,e,r),!Pl(n)||Rl(n))return n;throw new HO("Can't convert object to primitive value")}return r===void 0&&(r="number"),GO(e,r)}});var In=i((t8,Ml)=>{"use strict";var KO=Nl(),zO=Fr();Ml.exports=function(e){var r=KO(e,"string");return zO(r)?r:r+""}});var _n=i((n8,Ll)=>{"use strict";var VO=R(),jl=$(),wi=VO.document,YO=jl(wi)&&jl(wi.createElement);Ll.exports=function(e){return YO?wi.createElement(e):{}}});var Si=i((a8,$l)=>{"use strict";var JO=K(),QO=P(),XO=_n();$l.exports=!JO&&!QO(function(){return Object.defineProperty(XO("div"),"a",{get:function(){return 7}}).a!==7})});var mt=i(Dl=>{"use strict";var ZO=K(),ek=G(),rk=pi(),tk=Qe(),nk=Ne(),ak=In(),ik=V(),ok=Si(),Fl=Object.getOwnPropertyDescriptor;Dl.f=ZO?Fl:function(r,t){if(r=nk(r),t=ak(t),ok)try{return Fl(r,t)}catch{}if(ik(r,t))return tk(!ek(rk.f,r,t),r[t])}});var Ei=i((o8,Bl)=>{"use strict";var uk=P(),sk=M(),ck=/#|\.prototype\./,ht=function(e,r){var t=fk[lk(e)];return t===dk?!0:t===pk?!1:sk(r)?uk(r):!!r},lk=ht.normalize=function(e){return String(e).replace(ck,".").toLowerCase()},fk=ht.data={},pk=ht.NATIVE="N",dk=ht.POLYFILL="P";Bl.exports=ht});var Q=i((u8,Ul)=>{"use strict";var Gl=dt(),vk=D(),mk=Mr(),hk=Gl(Gl.bind);Ul.exports=function(e,r){return vk(e),r===void 0?e:mk?hk(e,r):function(){return e.apply(r,arguments)}}});var Ti=i((s8,Hl)=>{"use strict";var yk=K(),bk=P();Hl.exports=yk&&bk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var ee=i((c8,Wl)=>{"use strict";var gk=$(),qk=String,xk=TypeError;Wl.exports=function(e){if(gk(e))return e;throw new xk(qk(e)+" is not an object")}});var ae=i(zl=>{"use strict";var wk=K(),Sk=Si(),Ek=Ti(),Pn=ee(),Kl=In(),Tk=TypeError,Ci=Object.defineProperty,Ck=Object.getOwnPropertyDescriptor,Oi="enumerable",ki="configurable",Ii="writable";zl.f=wk?Ek?function(r,t,n){if(Pn(r),t=Kl(t),Pn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ii in n&&!n[Ii]){var a=Ck(r,t);a&&a[Ii]&&(r[t]=n.value,n={configurable:ki in n?n[ki]:a[ki],enumerable:Oi in n?n[Oi]:a[Oi],writable:!1})}return Ci(r,t,n)}:Ci:function(r,t,n){if(Pn(r),t=Kl(t),Pn(n),Sk)try{return Ci(r,t,n)}catch{}if("get"in n||"set"in n)throw new Tk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((f8,Vl)=>{"use strict";var Ok=K(),kk=ae(),Ik=Qe();Vl.exports=Ok?function(e,r,t){return kk.f(e,r,Ik(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((p8,Jl)=>{"use strict";var yt=R(),_k=jr(),Pk=dt(),Rk=M(),Ak=mt().f,Nk=Ei(),Gr=J(),Mk=Q(),Ur=Oe(),Yl=V();vt();var jk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return _k(e,this,arguments)};return r.prototype=e.prototype,r};Jl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?yt:a?yt[t]:yt[t]&&yt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,d,v,h,m,x,b;for(d in r)l=Nk(n?d:t+(a?".":"#")+d,e.forced),f=!l&&u&&Yl(u,d),h=s[d],f&&(e.dontCallGetSet?(b=Ak(u,d),m=b&&b.value):m=u[d]),v=f&&m?m:r[d],!(!l&&!o&&typeof h==typeof v)&&(e.bind&&f?x=Mk(v,yt):e.wrap&&f?x=jk(v):o&&Rk(v)?x=Pk(v):x=v,(e.sham||v&&v.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,d,x),o&&(p=t+"Prototype",Yl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],d,v),e.real&&c&&(l||!c[d])&&Ur(c,d,v)))}});var Me=i((d8,Ql)=>{"use strict";var Lk=Ce();Ql.exports=Array.isArray||function(r){return Lk(r)==="Array"}});var Rn=i((v8,Zl)=>{"use strict";var $k=A(),Fk=$k("toStringTag"),Xl={};Xl[Fk]="z";Zl.exports=String(Xl)==="[object z]"});var bt=i((m8,ef)=>{"use strict";var Dk=Rn(),Bk=M(),An=Ce(),Gk=A(),Uk=Gk("toStringTag"),Hk=Object,Wk=An(function(){return arguments}())==="Arguments",Kk=function(e,r){try{return e[r]}catch{}};ef.exports=Dk?An:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Kk(r=Hk(e),Uk))=="string"?t:Wk?An(r):(n=An(r))==="Object"&&Bk(r.callee)?"Arguments":n}});var Pi=i((h8,rf)=>{"use strict";var zk=N(),Vk=M(),_i=vt(),Yk=zk(Function.toString);Vk(_i.inspectSource)||(_i.inspectSource=function(e){return Yk(e)});rf.exports=_i.inspectSource});var qt=i((y8,uf)=>{"use strict";var Jk=N(),Qk=P(),tf=M(),Xk=bt(),Zk=z(),e1=Pi(),nf=function(){},af=Zk("Reflect","construct"),Ri=/^\s*(?:class|function)\b/,r1=Jk(Ri.exec),t1=!Ri.test(nf),gt=function(r){if(!tf(r))return!1;try{return af(nf,[],r),!0}catch{return!1}},of=function(r){if(!tf(r))return!1;switch(Xk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return t1||!!r1(Ri,e1(r))}catch{return!0}};of.sham=!0;uf.exports=!af||Qk(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?of:gt});var cf=i((b8,sf)=>{"use strict";var n1=Math.ceil,a1=Math.floor;sf.exports=Math.trunc||function(r){var t=+r;return(t>0?a1:n1)(t)}});var Nn=i((g8,lf)=>{"use strict";var i1=cf();lf.exports=function(e){var r=+e;return r!==r||r===0?0:i1(r)}});var Ai=i((q8,ff)=>{"use strict";var o1=Nn(),u1=Math.max,s1=Math.min;ff.exports=function(e,r){var t=o1(e);return t<0?u1(t+r,0):s1(t,r)}});var Ni=i((x8,pf)=>{"use strict";var c1=Nn(),l1=Math.min;pf.exports=function(e){var r=c1(e);return r>0?l1(r,9007199254740991):0}});var de=i((w8,df)=>{"use strict";var f1=Ni();df.exports=function(e){return f1(e.length)}});var Hr=i((S8,vf)=>{"use strict";var p1=K(),d1=ae(),v1=Qe();vf.exports=function(e,r,t){p1?d1.f(e,r,v1(0,t)):e[r]=t}});var Wr=i((E8,mf)=>{"use strict";var m1=K(),h1=Me(),y1=TypeError,b1=Object.getOwnPropertyDescriptor,g1=m1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();mf.exports=g1?function(e,r){if(h1(e)&&!b1(e,"length").writable)throw new y1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=i((T8,hf)=>{"use strict";var q1=P(),x1=A(),w1=$r(),S1=x1("species");hf.exports=function(e){return w1>=51||!q1(function(){var r=[],t=r.constructor={};return t[S1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((C8,yf)=>{"use strict";var E1=N();yf.exports=E1([].slice)});var qf=i(()=>{"use strict";var T1=q(),bf=Me(),C1=qt(),O1=$(),gf=Ai(),k1=de(),I1=Ne(),_1=Hr(),P1=Wr(),R1=A(),A1=xt(),N1=vr(),M1=A1("slice"),j1=R1("species"),Mi=Array,L1=Math.max;T1({target:"Array",proto:!0,forced:!M1},{slice:function(r,t){var n=I1(this),a=k1(n),o=gf(r,a),u=gf(t===void 0?a:t,a),s,c,l;if(bf(n)&&(s=n.constructor,C1(s)&&(s===Mi||bf(s.prototype))?s=void 0:O1(s)&&(s=s[j1],s===null&&(s=void 0)),s===Mi||s===void 0))return N1(n,o,u);for(c=new(s===void 0?Mi:s)(L1(u-o,0)),l=0;o<u;o++,l++)o in n&&_1(c,l,n[o]);return P1(c,l),c}})});var se=i((I8,xf)=>{"use strict";var $1=R(),F1=J();xf.exports=function(e,r){var t=F1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=$1[e],o=a&&a.prototype;return o&&o[r]}});var Sf=i((_8,wf)=>{"use strict";qf();var D1=se();wf.exports=D1("Array","slice")});var Tf=i((P8,Ef)=>{"use strict";var B1=W(),G1=Sf(),ji=Array.prototype;Ef.exports=function(e){var r=e.slice;return e===ji||B1(ji,e)&&r===ji.slice?G1:r}});var Of=i((R8,Cf)=>{"use strict";var U1=Tf();Cf.exports=U1});var If=i((A8,kf)=>{"use strict";var H1=Of();kf.exports=H1});var Pf=i((N8,_f)=>{"use strict";var W1=If();_f.exports=W1});var Li=i((M8,Rf)=>{"use strict";Rf.exports=Pf()});var Kr=i((j8,Af)=>{Af.exports=Li()});var Ze=i((L8,Nf)=>{"use strict";var K1=bt(),z1=String;Nf.exports=function(e){if(K1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return z1(e)}});var $f=i(($8,Lf)=>{"use strict";var $i=N(),V1=Nn(),Y1=Ze(),J1=fr(),Q1=$i("".charAt),Mf=$i("".charCodeAt),X1=$i("".slice),jf=function(e){return function(r,t){var n=Y1(J1(r)),a=V1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Mf(n,a),u<55296||u>56319||a+1===o||(s=Mf(n,a+1))<56320||s>57343?e?Q1(n,a):u:e?X1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};Lf.exports={codeAt:jf(!1),charAt:jf(!0)}});var Bf=i((F8,Df)=>{"use strict";var Z1=R(),eI=M(),Ff=Z1.WeakMap;Df.exports=eI(Ff)&&/native code/.test(String(Ff))});var wt=i((D8,Uf)=>{"use strict";var rI=dr(),tI=Dr(),Gf=rI("keys");Uf.exports=function(e){return Gf[e]||(Gf[e]=tI(e))}});var zr=i((B8,Hf)=>{"use strict";Hf.exports={}});var er=i((G8,zf)=>{"use strict";var nI=Bf(),Kf=R(),aI=$(),iI=Oe(),Fi=V(),Di=vt(),oI=wt(),uI=zr(),Wf="Object already initialized",Bi=Kf.TypeError,sI=Kf.WeakMap,Mn,St,jn,cI=function(e){return jn(e)?St(e):Mn(e,{})},lI=function(e){return function(r){var t;if(!aI(r)||(t=St(r)).type!==e)throw new Bi("Incompatible receiver, "+e+" required");return t}};nI||Di.state?(qe=Di.state||(Di.state=new sI),qe.get=qe.get,qe.has=qe.has,qe.set=qe.set,Mn=function(e,r){if(qe.has(e))throw new Bi(Wf);return r.facade=e,qe.set(e,r),r},St=function(e){return qe.get(e)||{}},jn=function(e){return qe.has(e)}):(mr=oI("state"),uI[mr]=!0,Mn=function(e,r){if(Fi(e,mr))throw new Bi(Wf);return r.facade=e,iI(e,mr,r),r},St=function(e){return Fi(e,mr)?e[mr]:{}},jn=function(e){return Fi(e,mr)});var qe,mr;zf.exports={set:Mn,get:St,has:jn,enforce:cI,getterFor:lI}});var Jf=i((U8,Yf)=>{"use strict";var Gi=K(),fI=V(),Vf=Function.prototype,pI=Gi&&Object.getOwnPropertyDescriptor,Ui=fI(Vf,"name"),dI=Ui&&function(){}.name==="something",vI=Ui&&(!Gi||Gi&&pI(Vf,"name").configurable);Yf.exports={EXISTS:Ui,PROPER:dI,CONFIGURABLE:vI}});var Hi=i((H8,Xf)=>{"use strict";var mI=Ne(),hI=Ai(),yI=de(),Qf=function(e){return function(r,t,n){var a=mI(r),o=yI(a);if(o===0)return!e&&-1;var u=hI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Xf.exports={includes:Qf(!0),indexOf:Qf(!1)}});var Ki=i((W8,ep)=>{"use strict";var bI=N(),Wi=V(),gI=Ne(),qI=Hi().indexOf,xI=zr(),Zf=bI([].push);ep.exports=function(e,r){var t=gI(e),n=0,a=[],o;for(o in t)!Wi(xI,o)&&Wi(t,o)&&Zf(a,o);for(;r.length>n;)Wi(t,o=r[n++])&&(~qI(a,o)||Zf(a,o));return a}});var Ln=i((K8,rp)=>{"use strict";rp.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var $n=i((z8,tp)=>{"use strict";var wI=Ki(),SI=Ln();tp.exports=Object.keys||function(r){return wI(r,SI)}});var zi=i(np=>{"use strict";var EI=K(),TI=Ti(),CI=ae(),OI=ee(),kI=Ne(),II=$n();np.f=EI&&!TI?Object.defineProperties:function(r,t){OI(r);for(var n=kI(t),a=II(t),o=a.length,u=0,s;o>u;)CI.f(r,s=a[u++],n[s]);return r}});var Vi=i((Y8,ap)=>{"use strict";var _I=z();ap.exports=_I("document","documentElement")});var rr=i((J8,fp)=>{"use strict";var PI=ee(),RI=zi(),ip=Ln(),AI=zr(),NI=Vi(),MI=_n(),jI=wt(),op=">",up="<",Ji="prototype",Qi="script",cp=jI("IE_PROTO"),Yi=function(){},lp=function(e){return up+Qi+op+e+up+"/"+Qi+op},sp=function(e){e.write(lp("")),e.close();var r=e.parentWindow.Object;return e=null,r},LI=function(){var e=MI("iframe"),r="java"+Qi+":",t;return e.style.display="none",NI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(lp("document.F=Object")),t.close(),t.F},Fn,Dn=function(){try{Fn=new ActiveXObject("htmlfile")}catch{}Dn=typeof document<"u"?document.domain&&Fn?sp(Fn):LI():sp(Fn);for(var e=ip.length;e--;)delete Dn[Ji][ip[e]];return Dn()};AI[cp]=!0;fp.exports=Object.create||function(r,t){var n;return r!==null?(Yi[Ji]=PI(r),n=new Yi,Yi[Ji]=null,n[cp]=r):n=Dn(),t===void 0?n:RI.f(n,t)}});var Xi=i((Q8,pp)=>{"use strict";var $I=P();pp.exports=!$I(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((X8,vp)=>{"use strict";var FI=V(),DI=M(),BI=ne(),GI=wt(),UI=Xi(),dp=GI("IE_PROTO"),Zi=Object,HI=Zi.prototype;vp.exports=UI?Zi.getPrototypeOf:function(e){var r=BI(e);if(FI(r,dp))return r[dp];var t=r.constructor;return DI(t)&&r instanceof t?t.prototype:r instanceof Zi?HI:null}});var je=i((Z8,mp)=>{"use strict";var WI=Oe();mp.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:WI(e,r,t),e}});var no=i((eU,bp)=>{"use strict";var KI=P(),zI=M(),VI=$(),YI=rr(),hp=Et(),JI=je(),QI=A(),XI=re(),to=QI("iterator"),yp=!1,Le,eo,ro;[].keys&&(ro=[].keys(),"next"in ro?(eo=hp(hp(ro)),eo!==Object.prototype&&(Le=eo)):yp=!0);var ZI=!VI(Le)||KI(function(){var e={};return Le[to].call(e)!==e});ZI?Le={}:XI&&(Le=YI(Le));zI(Le[to])||JI(Le,to,function(){return this});bp.exports={IteratorPrototype:Le,BUGGY_SAFARI_ITERATORS:yp}});var qp=i((rU,gp)=>{"use strict";var e_=Rn(),r_=bt();gp.exports=e_?{}.toString:function(){return"[object "+r_(this)+"]"}});var $e=i((tU,wp)=>{"use strict";var t_=Rn(),n_=ae().f,a_=Oe(),i_=V(),o_=qp(),u_=A(),xp=u_("toStringTag");wp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(i_(a,xp)||n_(a,xp,{configurable:!0,value:r}),n&&!t_&&a_(a,"toString",o_))}});var hr=i((nU,Sp)=>{"use strict";Sp.exports={}});var Tp=i((aU,Ep)=>{"use strict";var s_=no().IteratorPrototype,c_=rr(),l_=Qe(),f_=$e(),p_=hr(),d_=function(){return this};Ep.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=c_(s_,{next:l_(+!n,t)}),f_(e,a,!1,!0),p_[a]=d_,e}});var Op=i((iU,Cp)=>{"use strict";var v_=N(),m_=D();Cp.exports=function(e,r,t){try{return v_(m_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Ip=i((oU,kp)=>{"use strict";var h_=$();kp.exports=function(e){return h_(e)||e===null}});var Pp=i((uU,_p)=>{"use strict";var y_=Ip(),b_=String,g_=TypeError;_p.exports=function(e){if(y_(e))return e;throw new g_("Can't set "+b_(e)+" as a prototype")}});var Tt=i((sU,Rp)=>{"use strict";var q_=Op(),x_=$(),w_=fr(),S_=Pp();Rp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=q_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return w_(a),S_(o),x_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Un=i((cU,Gp)=>{"use strict";var E_=q(),T_=G(),Bn=re(),Dp=Jf(),C_=M(),O_=Tp(),Ap=Et(),Np=Tt(),k_=$e(),I_=Oe(),ao=je(),__=A(),Mp=hr(),Bp=no(),P_=Dp.PROPER,R_=Dp.CONFIGURABLE,jp=Bp.IteratorPrototype,Gn=Bp.BUGGY_SAFARI_ITERATORS,Ct=__("iterator"),Lp="keys",Ot="values",$p="entries",Fp=function(){return this};Gp.exports=function(e,r,t,n,a,o,u){O_(t,r,n);var s=function(b){if(b===a&&d)return d;if(!Gn&&b&&b in f)return f[b];switch(b){case Lp:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case $p:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Ct]||f["@@iterator"]||a&&f[a],d=!Gn&&p||s(a),v=r==="Array"&&f.entries||p,h,m,x;if(v&&(h=Ap(v.call(new e)),h!==Object.prototype&&h.next&&(!Bn&&Ap(h)!==jp&&(Np?Np(h,jp):C_(h[Ct])||ao(h,Ct,Fp)),k_(h,c,!0,!0),Bn&&(Mp[c]=Fp))),P_&&a===Ot&&p&&p.name!==Ot&&(!Bn&&R_?I_(f,"name",Ot):(l=!0,d=function(){return T_(p,this)})),a)if(m={values:s(Ot),keys:o?d:s(Lp),entries:s($p)},u)for(x in m)(Gn||l||!(x in f))&&ao(f,x,m[x]);else E_({target:r,proto:!0,forced:Gn||l},m);return(!Bn||u)&&f[Ct]!==d&&ao(f,Ct,d,{name:a}),Mp[r]=d,m}});var Hn=i((lU,Up)=>{"use strict";Up.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var A_=$f().charAt,N_=Ze(),Wp=er(),M_=Un(),Hp=Hn(),Kp="String Iterator",j_=Wp.set,L_=Wp.getterFor(Kp);M_(String,"String",function(e){j_(this,{type:Kp,string:N_(e),index:0})},function(){var r=L_(this),t=r.string,n=r.index,a;return n>=t.length?Hp(void 0,!0):(a=A_(t,n),r.index+=a.length,Hp(a,!1))})});var io=i((dU,Vp)=>{"use strict";var $_=G(),zp=ee(),F_=kn();Vp.exports=function(e,r,t){var n,a;zp(e);try{if(n=F_(e,"return"),!n){if(r==="throw")throw t;return t}n=$_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return zp(n),t}});var Jp=i((vU,Yp)=>{"use strict";var D_=ee(),B_=io();Yp.exports=function(e,r,t,n){try{return n?r(D_(t)[0],t[1]):r(t)}catch(a){B_(e,"throw",a)}}});var oo=i((mU,Qp)=>{"use strict";var G_=A(),U_=hr(),H_=G_("iterator"),W_=Array.prototype;Qp.exports=function(e){return e!==void 0&&(U_.Array===e||W_[H_]===e)}});var kt=i((hU,Zp)=>{"use strict";var K_=bt(),Xp=kn(),z_=lr(),V_=hr(),Y_=A(),J_=Y_("iterator");Zp.exports=function(e){if(!z_(e))return Xp(e,J_)||Xp(e,"@@iterator")||V_[K_(e)]}});var Wn=i((yU,ed)=>{"use strict";var Q_=G(),X_=D(),Z_=ee(),eP=Xe(),rP=kt(),tP=TypeError;ed.exports=function(e,r){var t=arguments.length<2?rP(e):r;if(X_(t))return Z_(Q_(t,e));throw new tP(eP(e)+" is not iterable")}});var ad=i((bU,nd)=>{"use strict";var nP=Q(),aP=G(),iP=ne(),oP=Jp(),uP=oo(),sP=qt(),cP=de(),rd=Hr(),lP=Wr(),fP=Wn(),pP=kt(),td=Array;nd.exports=function(r){var t=iP(r),n=sP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=nP(o,a>2?arguments[2]:void 0));var s=pP(t),c=0,l,f,p,d,v,h;if(s&&!(this===td&&uP(s)))for(f=n?new this:[],d=fP(t,s),v=d.next;!(p=aP(v,d)).done;c++)h=u?oP(d,o,[p.value,c],!0):p.value,rd(f,c,h);else for(l=cP(t),f=n?new this(l):td(l);l>c;c++)h=u?o(t[c],c):t[c],rd(f,c,h);return lP(f,c),f}});var so=i((gU,sd)=>{"use strict";var dP=A(),od=dP("iterator"),ud=!1;try{id=0,uo={next:function(){return{done:!!id++}},return:function(){ud=!0}},uo[od]=function(){return this},Array.from(uo,function(){throw 2})}catch{}var id,uo;sd.exports=function(e,r){try{if(!r&&!ud)return!1}catch{return!1}var t=!1;try{var n={};n[od]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var cd=i(()=>{"use strict";var vP=q(),mP=ad(),hP=so(),yP=!hP(function(e){Array.from(e)});vP({target:"Array",stat:!0,forced:yP},{from:mP})});var fd=i((wU,ld)=>{"use strict";yr();cd();var bP=J();ld.exports=bP.Array.from});var dd=i((SU,pd)=>{"use strict";var gP=fd();pd.exports=gP});var md=i((EU,vd)=>{"use strict";var qP=dd();vd.exports=qP});var yd=i((TU,hd)=>{"use strict";var xP=md();hd.exports=xP});var co=i((CU,bd)=>{"use strict";bd.exports=yd()});var Kn=i((OU,gd)=>{gd.exports=co()});var It=i((kU,qd)=>{"use strict";var wP=TypeError,SP=9007199254740991;qd.exports=function(e){if(e>SP)throw wP("Maximum allowed index exceeded");return e}});var Ed=i((IU,Sd)=>{"use strict";var xd=Me(),EP=qt(),TP=$(),CP=A(),OP=CP("species"),wd=Array;Sd.exports=function(e){var r;return xd(e)&&(r=e.constructor,EP(r)&&(r===wd||xd(r.prototype))?r=void 0:TP(r)&&(r=r[OP],r===null&&(r=void 0))),r===void 0?wd:r}});var zn=i((_U,Td)=>{"use strict";var kP=Ed();Td.exports=function(e,r){return new(kP(e))(r===0?0:r)}});var lo=i(()=>{"use strict";var IP=q(),_P=P(),PP=Me(),RP=$(),AP=ne(),NP=de(),Cd=It(),Od=Hr(),MP=Wr(),jP=zn(),LP=xt(),$P=A(),FP=$r(),kd=$P("isConcatSpreadable"),DP=FP>=51||!_P(function(){var e=[];return e[kd]=!1,e.concat()[0]!==e}),BP=function(e){if(!RP(e))return!1;var r=e[kd];return r!==void 0?!!r:PP(e)},GP=!DP||!LP("concat");IP({target:"Array",proto:!0,arity:1,forced:GP},{concat:function(r){var t=AP(this),n=jP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],BP(l))for(c=NP(l),Cd(a+c),u=0;u<c;u++,a++)u in l&&Od(n,a,l[u]);else Cd(a+1),Od(n,a++,l);return MP(n,a),n}})});var _t=i(()=>{});var Pt=i(Id=>{"use strict";var UP=Ki(),HP=Ln(),WP=HP.concat("length","prototype");Id.f=Object.getOwnPropertyNames||function(r){return UP(r,WP)}});var fo=i((jU,Rd)=>{"use strict";var KP=Ce(),zP=Ne(),_d=Pt().f,VP=vr(),Pd=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],YP=function(e){try{return _d(e)}catch{return VP(Pd)}};Rd.exports.f=function(r){return Pd&&KP(r)==="Window"?YP(r):_d(zP(r))}});var Vn=i(Ad=>{"use strict";Ad.f=Object.getOwnPropertySymbols});var Yn=i(($U,Nd)=>{"use strict";var JP=ae();Nd.exports=function(e,r,t){return JP.f(e,r,t)}});var Vr=i(Md=>{"use strict";var QP=A();Md.f=QP});var j=i((DU,Ld)=>{"use strict";var jd=J(),XP=V(),ZP=Vr(),eR=ae().f;Ld.exports=function(e){var r=jd.Symbol||(jd.Symbol={});XP(r,e)||eR(r,e,{value:ZP.f(e)})}});var po=i((BU,$d)=>{"use strict";var rR=G(),tR=z(),nR=A(),aR=je();$d.exports=function(){var e=tR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=nR("toPrimitive");r&&!r[n]&&aR(r,n,function(a){return rR(t,this)},{arity:1})}});var Rt=i((GU,Dd)=>{"use strict";var iR=Q(),oR=Cn(),uR=ne(),sR=de(),Fd=zn(),vo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=uR(c),d=oR(p),v=sR(d),h=iR(l,f),m=0,x=0,b=r?Fd(c,v):t||u?Fd(c,0):void 0,g,O;v>m;m++)if((s||m in d)&&(g=d[m],O=h(g,m,p),e))if(r)vo(b,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:vo(b,x++,g)}else switch(e){case 4:return!1;case 7:vo(b,x++,g)}return o?-1:n||a?a:b}};Dd.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var nv=i(()=>{"use strict";var Jn=q(),Mt=R(),So=G(),cR=N(),lR=re(),Yr=K(),Jr=pr(),fR=P(),Y=V(),pR=W(),bo=ee(),Qn=Ne(),Eo=In(),dR=Ze(),go=Qe(),Qr=rr(),Ud=$n(),vR=Pt(),Hd=fo(),mR=Vn(),Wd=mt(),Kd=ae(),hR=zi(),zd=pi(),mo=je(),yR=Yn(),To=dr(),bR=wt(),Vd=zr(),Bd=Dr(),gR=A(),qR=Vr(),xR=j(),wR=po(),SR=$e(),Yd=er(),Xn=Rt().forEach,ie=bR("hidden"),Zn="Symbol",Nt="prototype",ER=Yd.set,Gd=Yd.getterFor(Zn),ve=Object[Nt],br=Mt.Symbol,At=br&&br[Nt],TR=Mt.RangeError,CR=Mt.TypeError,ho=Mt.QObject,Jd=Wd.f,gr=Kd.f,Qd=Hd.f,OR=zd.f,Xd=cR([].push),Fe=To("symbols"),jt=To("op-symbols"),kR=To("wks"),qo=!ho||!ho[Nt]||!ho[Nt].findChild,Zd=function(e,r,t){var n=Jd(ve,r);n&&delete ve[r],gr(e,r,t),n&&e!==ve&&gr(ve,r,n)},xo=Yr&&fR(function(){return Qr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?Zd:gr,yo=function(e,r){var t=Fe[e]=Qr(At);return ER(t,{type:Zn,tag:e,description:r}),Yr||(t.description=r),t},ea=function(r,t,n){r===ve&&ea(jt,t,n),bo(r);var a=Eo(t);return bo(n),Y(Fe,a)?(n.enumerable?(Y(r,ie)&&r[ie][a]&&(r[ie][a]=!1),n=Qr(n,{enumerable:go(0,!1)})):(Y(r,ie)||gr(r,ie,go(1,Qr(null))),r[ie][a]=!0),xo(r,a,n)):gr(r,a,n)},Co=function(r,t){bo(r);var n=Qn(t),a=Ud(n).concat(tv(n));return Xn(a,function(o){(!Yr||So(wo,n,o))&&ea(r,o,n[o])}),r},IR=function(r,t){return t===void 0?Qr(r):Co(Qr(r),t)},wo=function(r){var t=Eo(r),n=So(OR,this,t);return this===ve&&Y(Fe,t)&&!Y(jt,t)?!1:n||!Y(this,t)||!Y(Fe,t)||Y(this,ie)&&this[ie][t]?n:!0},ev=function(r,t){var n=Qn(r),a=Eo(t);if(!(n===ve&&Y(Fe,a)&&!Y(jt,a))){var o=Jd(n,a);return o&&Y(Fe,a)&&!(Y(n,ie)&&n[ie][a])&&(o.enumerable=!0),o}},rv=function(r){var t=Qd(Qn(r)),n=[];return Xn(t,function(a){!Y(Fe,a)&&!Y(Vd,a)&&Xd(n,a)}),n},tv=function(e){var r=e===ve,t=Qd(r?jt:Qn(e)),n=[];return Xn(t,function(a){Y(Fe,a)&&(!r||Y(ve,a))&&Xd(n,Fe[a])}),n};Jr||(br=function(){if(pR(At,this))throw new CR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:dR(arguments[0]),t=Bd(r),n=function(a){var o=this===void 0?Mt:this;o===ve&&So(n,jt,a),Y(o,ie)&&Y(o[ie],t)&&(o[ie][t]=!1);var u=go(1,a);try{xo(o,t,u)}catch(s){if(!(s instanceof TR))throw s;Zd(o,t,u)}};return Yr&&qo&&xo(ve,t,{configurable:!0,set:n}),yo(t,r)},At=br[Nt],mo(At,"toString",function(){return Gd(this).tag}),mo(br,"withoutSetter",function(e){return yo(Bd(e),e)}),zd.f=wo,Kd.f=ea,hR.f=Co,Wd.f=ev,vR.f=Hd.f=rv,mR.f=tv,qR.f=function(e){return yo(gR(e),e)},Yr&&(yR(At,"description",{configurable:!0,get:function(){return Gd(this).description}}),lR||mo(ve,"propertyIsEnumerable",wo,{unsafe:!0})));Jn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:br});Xn(Ud(kR),function(e){xR(e)});Jn({target:Zn,stat:!0,forced:!Jr},{useSetter:function(){qo=!0},useSimple:function(){qo=!1}});Jn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:IR,defineProperty:ea,defineProperties:Co,getOwnPropertyDescriptor:ev});Jn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:rv});wR();SR(br,Zn);Vd[ie]=!0});var Oo=i((WU,av)=>{"use strict";var _R=pr();av.exports=_R&&!!Symbol.for&&!!Symbol.keyFor});var ov=i(()=>{"use strict";var PR=q(),RR=z(),AR=V(),NR=Ze(),iv=dr(),MR=Oo(),ko=iv("string-to-symbol-registry"),jR=iv("symbol-to-string-registry");PR({target:"Symbol",stat:!0,forced:!MR},{for:function(e){var r=NR(e);if(AR(ko,r))return ko[r];var t=RR("Symbol")(r);return ko[r]=t,jR[t]=r,t}})});var sv=i(()=>{"use strict";var LR=q(),$R=V(),FR=Fr(),DR=Xe(),BR=dr(),GR=Oo(),uv=BR("symbol-to-string-registry");LR({target:"Symbol",stat:!0,forced:!GR},{keyFor:function(r){if(!FR(r))throw new TypeError(DR(r)+" is not a symbol");if($R(uv,r))return uv[r]}})});var lv=i((JU,cv)=>{"use strict";var UR=$(),HR=er().get;cv.exports=function(r){if(!UR(r))return!1;var t=HR(r);return!!t&&t.type==="RawJSON"}});var mv=i((QU,vv)=>{"use strict";var Io=N(),WR=V(),ra=SyntaxError,KR=parseInt,zR=String.fromCharCode,VR=Io("".charAt),fv=Io("".slice),pv=Io(/./.exec),dv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},YR=/^[\da-f]{4}$/i,JR=/^[\u0000-\u001F]$/;vv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=VR(e,r);if(a==="\\"){var o=fv(e,r,r+2);if(WR(dv,o))n+=dv[o],r+=2;else if(o==="\\u"){r+=2;var u=fv(e,r,r+4);if(!pv(YR,u))throw new ra("Bad Unicode escape at: "+r);n+=zR(KR(u,16)),r+=4}else throw new ra('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(pv(JR,a))throw new ra("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ra("Unterminated string at: "+r);return{value:n,end:r}}});var yv=i((XU,hv)=>{"use strict";var QR=P();hv.exports=!QR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Pv=i(()=>{"use strict";var XR=q(),Tv=z(),ZR=jr(),Cv=G(),qr=N(),Ov=P(),bv=Me(),na=M(),eA=lv(),gv=Fr(),qv=Ce(),rA=Ze(),tA=vr(),nA=mv(),aA=Dr(),iA=pr(),_o=yv(),kv=String,nr=Tv("JSON","stringify"),ta=qr(/./.exec),Ro=qr("".charAt),oA=qr("".charCodeAt),uA=qr("".replace),Po=qr("".slice),Ao=qr([].push),sA=qr(1.1.toString),cA=/[\uD800-\uDFFF]/g,xv=/^[\uD800-\uDBFF]$/,wv=/^[\uDC00-\uDFFF]$/,No=aA(),Sv=No.length,Iv=!iA||Ov(function(){var e=Tv("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),Ev=Ov(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),lA=Iv?function(e,r){var t=tA(arguments),n=_v(r);if(!(!na(n)&&(e===void 0||gv(e))))return t[1]=function(a,o){if(na(n)&&(o=Cv(n,this,kv(a),o)),!gv(o))return o},ZR(nr,null,t)}:nr,fA=function(e,r,t){var n=Ro(t,r-1),a=Ro(t,r+1);return ta(xv,e)&&!ta(wv,a)||ta(wv,e)&&!ta(xv,n)?"\\u"+sA(oA(e,0),16):e},_v=function(e){if(na(e))return e;if(bv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Ao(t,a):(typeof a=="number"||qv(a)==="Number"||qv(a)==="String")&&Ao(t,rA(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(bv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&XR({target:"JSON",stat:!0,arity:3,forced:Iv||Ev||!_o},{stringify:function(r,t,n){var a=_v(t),o=[],u=lA(r,function(v,h){var m=na(a)?Cv(a,this,kv(v),h):h;return!_o&&eA(m)?No+(Ao(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Ev&&(u=uA(u,cA,fA)),_o))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Ro(u,l);if(f==='"'){var p=nA(u,++l).end-1,d=Po(u,l,p);s+=Po(d,0,Sv)===No?o[Po(d,Sv)]:'"'+d+'"',l=p}else s+=f}return s}})});var Av=i(()=>{"use strict";var pA=q(),dA=pr(),vA=P(),Rv=Vn(),mA=ne(),hA=!dA||vA(function(){Rv.f(1)});pA({target:"Object",stat:!0,forced:hA},{getOwnPropertySymbols:function(r){var t=Rv.f;return t?t(mA(r)):[]}})});var Nv=i(()=>{"use strict";nv();ov();sv();Pv();Av()});var Mo=i(()=>{"use strict";var yA=j();yA("asyncDispose")});var jo=i(()=>{"use strict";var bA=j();bA("asyncIterator")});var Mv=i(()=>{});var Lo=i(()=>{"use strict";var gA=j();gA("dispose")});var jv=i(()=>{"use strict";var qA=j();qA("hasInstance")});var Lv=i(()=>{"use strict";var xA=j();xA("isConcatSpreadable")});var $o=i(()=>{"use strict";var wA=j();wA("iterator")});var $v=i(()=>{"use strict";var SA=j();SA("match")});var Fv=i(()=>{"use strict";var EA=j();EA("matchAll")});var Dv=i(()=>{"use strict";var TA=j();TA("replace")});var Bv=i(()=>{"use strict";var CA=j();CA("search")});var Gv=i(()=>{"use strict";var OA=j();OA("species")});var Uv=i(()=>{"use strict";var kA=j();kA("split")});var Fo=i(()=>{"use strict";var IA=j(),_A=po();IA("toPrimitive");_A()});var Hv=i(()=>{"use strict";var PA=z(),RA=j(),AA=$e();RA("toStringTag");AA(PA("Symbol"),"Symbol")});var Wv=i(()=>{"use strict";var NA=j();NA("unscopables")});var Kv=i(()=>{"use strict";var MA=R(),jA=$e();jA(MA.JSON,"JSON",!0)});var zv=i(()=>{});var Vv=i(()=>{});var Jv=i((UH,Yv)=>{"use strict";lo();_t();Nv();Mo();jo();Mv();Lo();jv();Lv();$o();$v();Fv();Dv();Bv();Gv();Uv();Fo();Hv();Wv();Kv();zv();Vv();var LA=J();Yv.exports=LA.Symbol});var Do=i((HH,Qv)=>{"use strict";Qv.exports=function(){}});var xr=i((WH,tm)=>{"use strict";var $A=Ne(),Bo=Do(),Xv=hr(),em=er(),FA=ae().f,DA=Un(),aa=Hn(),BA=re(),GA=K(),rm="Array Iterator",UA=em.set,HA=em.getterFor(rm);tm.exports=DA(Array,"Array",function(e,r){UA(this,{type:rm,target:$A(e),index:0,kind:r})},function(){var e=HA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,aa(void 0,!0);switch(e.kind){case"keys":return aa(t,!1);case"values":return aa(r[t],!1)}return aa([t,r[t]],!1)},"values");var Zv=Xv.Arguments=Xv.Array;Bo("keys");Bo("values");Bo("entries");if(!BA&&GA&&Zv.name!=="values")try{FA(Zv,"name",{value:"values"})}catch{}});var am=i((KH,nm)=>{"use strict";nm.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var WA=am(),KA=R(),zA=$e(),im=hr();for(ia in WA)zA(KA[ia],ia),im[ia]=im.Array;var ia});var um=i((YH,om)=>{"use strict";var VA=Jv();wr();om.exports=VA});var lm=i(()=>{"use strict";var YA=A(),JA=ae().f,sm=YA("metadata"),cm=Function.prototype;cm[sm]===void 0&&JA(cm,sm,{value:null})});var fm=i(()=>{"use strict";Mo()});var pm=i(()=>{"use strict";Lo()});var dm=i(()=>{"use strict";var QA=j();QA("metadata")});var mm=i((aW,vm)=>{"use strict";var XA=um();lm();fm();pm();dm();vm.exports=XA});var Uo=i((iW,hm)=>{"use strict";var ZA=z(),e2=N(),Go=ZA("Symbol"),r2=Go.keyFor,t2=e2(Go.prototype.valueOf);hm.exports=Go.isRegisteredSymbol||function(r){try{return r2(t2(r))!==void 0}catch{return!1}}});var ym=i(()=>{"use strict";var n2=q(),a2=Uo();n2({target:"Symbol",stat:!0},{isRegisteredSymbol:a2})});var Ko=i((sW,Sm)=>{"use strict";var i2=dr(),xm=z(),o2=N(),u2=Fr(),s2=A(),ua=xm("Symbol"),bm=ua.isWellKnownSymbol,wm=xm("Object","getOwnPropertyNames"),c2=o2(ua.prototype.valueOf),gm=i2("wks");for(oa=0,Ho=wm(ua),qm=Ho.length;oa<qm;oa++)try{Wo=Ho[oa],u2(ua[Wo])&&s2(Wo)}catch{}var Wo,oa,Ho,qm;Sm.exports=function(r){if(bm&&bm(r))return!0;try{for(var t=c2(r),n=0,a=wm(gm),o=a.length;n<o;n++)if(gm[a[n]]==t)return!0}catch{}return!1}});var Em=i(()=>{"use strict";var l2=q(),f2=Ko();l2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:f2})});var Tm=i(()=>{"use strict";var p2=j();p2("customMatcher")});var Cm=i(()=>{"use strict";var d2=j();d2("observable")});var Om=i(()=>{"use strict";var v2=q(),m2=Uo();v2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:m2})});var km=i(()=>{"use strict";var h2=q(),y2=Ko();h2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:y2})});var Im=i(()=>{"use strict";var b2=j();b2("matcher")});var _m=i(()=>{"use strict";var g2=j();g2("metadataKey")});var Pm=i(()=>{"use strict";var q2=j();q2("patternMatch")});var Rm=i(()=>{"use strict";var x2=j();x2("replaceAll")});var Nm=i((OW,Am)=>{"use strict";var w2=mm();ym();Em();Tm();Cm();Om();km();Im();_m();Pm();Rm();Am.exports=w2});var ke=i((kW,Mm)=>{"use strict";Mm.exports=Nm()});var sa=i((IW,jm)=>{jm.exports=ke()});var $m=i((_W,Lm)=>{"use strict";xr();yr();var S2=kt();Lm.exports=S2});var Dm=i((PW,Fm)=>{"use strict";var E2=$m();wr();Fm.exports=E2});var Gm=i((RW,Bm)=>{"use strict";var T2=Dm();Bm.exports=T2});var Hm=i((AW,Um)=>{"use strict";var C2=Gm();Um.exports=C2});var zo=i((NW,Wm)=>{"use strict";Wm.exports=Hm()});var ca=i((MW,Km)=>{Km.exports=zo()});var Vm=i((jW,zm)=>{"use strict";xr();yr();var O2=Wn();zm.exports=O2});var Jm=i((LW,Ym)=>{"use strict";var k2=Vm();wr();Ym.exports=k2});var Xm=i(($W,Qm)=>{"use strict";var I2=Jm();Qm.exports=I2});var eh=i((FW,Zm)=>{"use strict";var _2=Xm();Zm.exports=_2});var th=i((DW,rh)=>{"use strict";rh.exports=eh()});var la=i((BW,nh)=>{nh.exports=th()});var ih=i((GW,ah)=>{"use strict";var P2=z(),R2=N(),A2=Pt(),N2=Vn(),M2=ee(),j2=R2([].concat);ah.exports=P2("Reflect","ownKeys")||function(r){var t=A2.f(M2(r)),n=N2.f;return n?j2(t,n(r)):t}});var sh=i((UW,uh)=>{"use strict";var oh=V(),L2=ih(),$2=mt(),F2=ae();uh.exports=function(e,r,t){for(var n=L2(r),a=F2.f,o=$2.f,u=0;u<n.length;u++){var s=n[u];!oh(e,s)&&!(t&&oh(t,s))&&a(e,s,o(r,s))}}});var lh=i((HW,ch)=>{"use strict";var D2=$(),B2=Oe();ch.exports=function(e,r){D2(r)&&"cause"in r&&B2(e,"cause",r.cause)}});var vh=i((WW,dh)=>{"use strict";var G2=N(),fh=Error,U2=G2("".replace),H2=function(e){return String(new fh(e).stack)}("zxcasd"),ph=/\n\s*at [^:]*:[^\n]*/,W2=ph.test(H2);dh.exports=function(e,r){if(W2&&typeof e=="string"&&!fh.prepareStackTrace)for(;r--;)e=U2(e,ph,"");return e}});var hh=i((KW,mh)=>{"use strict";var K2=P(),z2=Qe();mh.exports=!K2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",z2(1,7)),e.stack!==7):!0})});var gh=i((zW,bh)=>{"use strict";var V2=Oe(),Y2=vh(),J2=hh(),yh=Error.captureStackTrace;bh.exports=function(e,r,t,n){J2&&(yh?yh(e,r):V2(e,"stack",Y2(t,n)))}});var me=i((VW,Sh)=>{"use strict";var Q2=Q(),X2=G(),Z2=ee(),eN=Xe(),rN=oo(),tN=de(),qh=W(),nN=Wn(),aN=kt(),xh=io(),iN=TypeError,fa=function(e,r){this.stopped=e,this.result=r},wh=fa.prototype;Sh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=Q2(r,n),l,f,p,d,v,h,m,x=function(g){return l&&xh(l,"normal"),new fa(!0,g)},b=function(g){return a?(Z2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=aN(e),!f)throw new iN(eN(e)+" is not iterable");if(rN(f)){for(p=0,d=tN(e);d>p;p++)if(v=b(e[p]),v&&qh(wh,v))return v;return new fa(!1)}l=nN(e,f)}for(h=o?e.next:l.next;!(m=X2(h,l)).done;){try{v=b(m.value)}catch(g){xh(l,"throw",g)}if(typeof v=="object"&&v&&qh(wh,v))return v}return new fa(!1)}});var Th=i((YW,Eh)=>{"use strict";var oN=Ze();Eh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:oN(e)}});var Oh=i(()=>{"use strict";var uN=q(),sN=W(),cN=Et(),pa=Tt(),lN=sh(),Ch=rr(),Vo=Oe(),Yo=Qe(),fN=lh(),pN=gh(),dN=me(),vN=Th(),mN=A(),hN=mN("toStringTag"),da=Error,yN=[].push,Xr=function(r,t){var n=sN(Jo,this),a;pa?a=pa(new da,n?cN(this):Jo):(a=n?this:Ch(Jo),Vo(a,hN,"Error")),t!==void 0&&Vo(a,"message",vN(t)),pN(a,Xr,a.stack,1),arguments.length>2&&fN(a,arguments[2]);var o=[];return dN(r,yN,{that:o}),Vo(a,"errors",o),a};pa?pa(Xr,da):lN(Xr,da,{name:!0});var Jo=Xr.prototype=Ch(da.prototype,{constructor:Yo(1,Xr),message:Yo(1,""),name:Yo(1,"AggregateError")});uN({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Qo=i(()=>{"use strict";Oh()});var Xo=i((eK,kh)=>{"use strict";var Lt=R(),bN=Lr(),gN=Ce(),va=function(e){return bN.slice(0,e.length)===e};kh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":gN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var $t=i((rK,Ih)=>{"use strict";var qN=Xo();Ih.exports=qN==="NODE"});var Zo=i((tK,Ph)=>{"use strict";var xN=z(),wN=Yn(),SN=A(),EN=K(),_h=SN("species");Ph.exports=function(e){var r=xN(e);EN&&r&&!r[_h]&&wN(r,_h,{configurable:!0,get:function(){return this}})}});var ma=i((nK,Rh)=>{"use strict";var TN=W(),CN=TypeError;Rh.exports=function(e,r){if(TN(r,e))return e;throw new CN("Incorrect invocation")}});var eu=i((aK,Ah)=>{"use strict";var ON=qt(),kN=Xe(),IN=TypeError;Ah.exports=function(e){if(ON(e))return e;throw new IN(kN(e)+" is not a constructor")}});var ru=i((iK,Mh)=>{"use strict";var Nh=ee(),_N=eu(),PN=lr(),RN=A(),AN=RN("species");Mh.exports=function(e,r){var t=Nh(e).constructor,n;return t===void 0||PN(n=Nh(t)[AN])?r:_N(n)}});var Lh=i((oK,jh)=>{"use strict";var NN=TypeError;jh.exports=function(e,r){if(e<r)throw new NN("Not enough arguments");return e}});var tu=i((uK,$h)=>{"use strict";var MN=Lr();$h.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(MN)});var fu=i((sK,zh)=>{"use strict";var ce=R(),jN=jr(),LN=Q(),Fh=M(),$N=V(),Kh=P(),Dh=Vi(),FN=vr(),Bh=_n(),DN=Lh(),BN=tu(),GN=$t(),su=ce.setImmediate,cu=ce.clearImmediate,UN=ce.process,nu=ce.Dispatch,HN=ce.Function,Gh=ce.MessageChannel,WN=ce.String,au=0,Ft={},Uh="onreadystatechange",Dt,Sr,iu,ou;Kh(function(){Dt=ce.location});var lu=function(e){if($N(Ft,e)){var r=Ft[e];delete Ft[e],r()}},uu=function(e){return function(){lu(e)}},Hh=function(e){lu(e.data)},Wh=function(e){ce.postMessage(WN(e),Dt.protocol+"//"+Dt.host)};(!su||!cu)&&(su=function(r){DN(arguments.length,1);var t=Fh(r)?r:HN(r),n=FN(arguments,1);return Ft[++au]=function(){jN(t,void 0,n)},Sr(au),au},cu=function(r){delete Ft[r]},GN?Sr=function(e){UN.nextTick(uu(e))}:nu&&nu.now?Sr=function(e){nu.now(uu(e))}:Gh&&!BN?(iu=new Gh,ou=iu.port2,iu.port1.onmessage=Hh,Sr=LN(ou.postMessage,ou)):ce.addEventListener&&Fh(ce.postMessage)&&!ce.importScripts&&Dt&&Dt.protocol!=="file:"&&!Kh(Wh)?(Sr=Wh,ce.addEventListener("message",Hh,!1)):Uh in Bh("script")?Sr=function(e){Dh.appendChild(Bh("script"))[Uh]=function(){Dh.removeChild(this),lu(e)}}:Sr=function(e){setTimeout(uu(e),0)});zh.exports={set:su,clear:cu}});var Jh=i((cK,Yh)=>{"use strict";var Vh=R(),KN=K(),zN=Object.getOwnPropertyDescriptor;Yh.exports=function(e){if(!KN)return Vh[e];var r=zN(Vh,e);return r&&r.value}});var pu=i((lK,Xh)=>{"use strict";var Qh=function(){this.head=null,this.tail=null};Qh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Xh.exports=Qh});var ey=i((fK,Zh)=>{"use strict";var VN=Lr();Zh.exports=/ipad|iphone|ipod/i.test(VN)&&typeof Pebble<"u"});var ty=i((pK,ry)=>{"use strict";var YN=Lr();ry.exports=/web0s(?!.*chrome)/i.test(YN)});var cy=i((dK,sy)=>{"use strict";var et=R(),JN=Jh(),ny=Q(),du=fu().set,QN=pu(),XN=tu(),ZN=ey(),eM=ty(),vu=$t(),ay=et.MutationObserver||et.WebKitMutationObserver,iy=et.document,oy=et.process,ha=et.Promise,yu=JN("queueMicrotask"),Zr,mu,hu,ya,uy;yu||(Bt=new QN,Gt=function(){var e,r;for(vu&&(e=oy.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Zr(),t}e&&e.enter()},!XN&&!vu&&!eM&&ay&&iy?(mu=!0,hu=iy.createTextNode(""),new ay(Gt).observe(hu,{characterData:!0}),Zr=function(){hu.data=mu=!mu}):!ZN&&ha&&ha.resolve?(ya=ha.resolve(void 0),ya.constructor=ha,uy=ny(ya.then,ya),Zr=function(){uy(Gt)}):vu?Zr=function(){oy.nextTick(Gt)}:(du=ny(du,et),Zr=function(){du(Gt)}),yu=function(e){Bt.head||Zr(),Bt.add(e)});var Bt,Gt;sy.exports=yu});var fy=i((vK,ly)=>{"use strict";ly.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Er=i((mK,py)=>{"use strict";py.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i((hK,dy)=>{"use strict";var rM=R();dy.exports=rM.Promise});var rt=i((yK,yy)=>{"use strict";var tM=R(),Ut=Tr(),nM=M(),aM=Ei(),iM=Pi(),oM=A(),vy=Xo(),uM=re(),bu=$r(),my=Ut&&Ut.prototype,sM=oM("species"),gu=!1,hy=nM(tM.PromiseRejectionEvent),cM=aM("Promise",function(){var e=iM(Ut),r=e!==String(Ut);if(!r&&bu===66||uM&&!(my.catch&&my.finally))return!0;if(!bu||bu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[sM]=n,gu=t.then(function(){})instanceof n,!gu)return!0}return!r&&(vy==="BROWSER"||vy==="DENO")&&!hy});yy.exports={CONSTRUCTOR:cM,REJECTION_EVENT:hy,SUBCLASSING:gu}});var Ie=i((bK,gy)=>{"use strict";var by=D(),lM=TypeError,fM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new lM("Bad Promise constructor");r=n,t=a}),this.resolve=by(r),this.reject=by(t)};gy.exports.f=function(e){return new fM(e)}});var Fy=i(()=>{"use strict";var pM=q(),dM=re(),xa=$t(),ar=R(),vM=J(),it=G(),qy=je(),xy=Tt(),mM=$e(),hM=Zo(),yM=D(),qa=M(),bM=$(),gM=ma(),qM=ru(),Cy=fu().set,Eu=cy(),xM=fy(),wM=Er(),SM=pu(),Oy=er(),wa=Tr(),Tu=rt(),ky=Ie(),Sa="Promise",Iy=Tu.CONSTRUCTOR,EM=Tu.REJECTION_EVENT,TM=Tu.SUBCLASSING,qu=Oy.getterFor(Sa),CM=Oy.set,tt=wa&&wa.prototype,Cr=wa,ba=tt,_y=ar.TypeError,xu=ar.document,Cu=ar.process,wu=ky.f,OM=wu,kM=!!(xu&&xu.createEvent&&ar.dispatchEvent),Py="unhandledrejection",IM="rejectionhandled",wy=0,Ry=1,_M=2,Ou=1,Ay=2,ga,Sy,Ny,Ey,My=function(e){var r;return bM(e)&&qa(r=e.then)?r:!1},jy=function(e,r){var t=r.value,n=r.state===Ry,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Ay&&RM(r),r.rejection=Ou),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new _y("Promise-chain cycle")):(l=My(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},Ly=function(e,r){e.notified||(e.notified=!0,Eu(function(){for(var t=e.reactions,n;n=t.get();)jy(n,e);e.notified=!1,r&&!e.rejection&&PM(e)}))},$y=function(e,r,t){var n,a;kM?(n=xu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!EM&&(a=ar["on"+e])?a(n):e===Py&&xM("Unhandled promise rejection",t)},PM=function(e){it(Cy,ar,function(){var r=e.facade,t=e.value,n=Ty(e),a;if(n&&(a=wM(function(){xa?Cu.emit("unhandledRejection",t,r):$y(Py,r,t)}),e.rejection=xa||Ty(e)?Ay:Ou,a.error))throw a.value})},Ty=function(e){return e.rejection!==Ou&&!e.parent},RM=function(e){it(Cy,ar,function(){var r=e.facade;xa?Cu.emit("rejectionHandled",r):$y(IM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=_M,Ly(e,!0))},Su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new _y("Promise can't be resolved itself");var n=My(r);n?Eu(function(){var a={done:!1};try{it(n,r,nt(Su,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Ry,Ly(e,!1))}catch(a){at({done:!1},a,e)}}};if(Iy&&(Cr=function(r){gM(this,ba),yM(r),it(ga,this);var t=qu(this);try{r(nt(Su,t),nt(at,t))}catch(n){at(t,n)}},ba=Cr.prototype,ga=function(r){CM(this,{type:Sa,done:!1,notified:!1,parent:!1,reactions:new SM,rejection:!1,state:wy,value:null})},ga.prototype=qy(ba,"then",function(r,t){var n=qu(this),a=wu(qM(this,Cr));return n.parent=!0,a.ok=qa(r)?r:!0,a.fail=qa(t)&&t,a.domain=xa?Cu.domain:void 0,n.state===wy?n.reactions.add(a):Eu(function(){jy(a,n)}),a.promise}),Sy=function(){var e=new ga,r=qu(e);this.promise=e,this.resolve=nt(Su,r),this.reject=nt(at,r)},ky.f=wu=function(e){return e===Cr||e===Ny?new Sy(e):OM(e)},!dM&&qa(wa)&&tt!==Object.prototype)){Ey=tt.then,TM||qy(tt,"then",function(r,t){var n=this;return new Cr(function(a,o){it(Ey,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}xy&&xy(tt,ba)}pM({global:!0,constructor:!0,wrap:!0,forced:Iy},{Promise:Cr});Ny=vM.Promise;mM(Cr,Sa,!1,!0);hM(Sa)});var Ht=i((xK,Dy)=>{"use strict";var AM=Tr(),NM=so(),MM=rt().CONSTRUCTOR;Dy.exports=MM||!NM(function(e){AM.all(e).then(void 0,function(){})})});var By=i(()=>{"use strict";var jM=q(),LM=G(),$M=D(),FM=Ie(),DM=Er(),BM=me(),GM=Ht();jM({target:"Promise",stat:!0,forced:GM},{all:function(r){var t=this,n=FM.f(t),a=n.resolve,o=n.reject,u=DM(function(){var s=$M(t.resolve),c=[],l=0,f=1;BM(r,function(p){var d=l++,v=!1;f++,LM(s,t,p).then(function(h){v||(v=!0,c[d]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Uy=i(()=>{"use strict";var UM=q(),HM=re(),WM=rt().CONSTRUCTOR,Iu=Tr(),KM=z(),zM=M(),VM=je(),Gy=Iu&&Iu.prototype;UM({target:"Promise",proto:!0,forced:WM,real:!0},{catch:function(e){return this.then(void 0,e)}});!HM&&zM(Iu)&&(ku=KM("Promise").prototype.catch,Gy.catch!==ku&&VM(Gy,"catch",ku,{unsafe:!0}));var ku});var Hy=i(()=>{"use strict";var YM=q(),JM=G(),QM=D(),XM=Ie(),ZM=Er(),ej=me(),rj=Ht();YM({target:"Promise",stat:!0,forced:rj},{race:function(r){var t=this,n=XM.f(t),a=n.reject,o=ZM(function(){var u=QM(t.resolve);ej(r,function(s){JM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Wy=i(()=>{"use strict";var tj=q(),nj=Ie(),aj=rt().CONSTRUCTOR;tj({target:"Promise",stat:!0,forced:aj},{reject:function(r){var t=nj.f(this),n=t.reject;return n(r),t.promise}})});var _u=i((_K,Ky)=>{"use strict";var ij=ee(),oj=$(),uj=Ie();Ky.exports=function(e,r){if(ij(e),oj(r)&&r.constructor===e)return r;var t=uj.f(e),n=t.resolve;return n(r),t.promise}});var Yy=i(()=>{"use strict";var sj=q(),cj=z(),zy=re(),lj=Tr(),Vy=rt().CONSTRUCTOR,fj=_u(),pj=cj("Promise"),dj=zy&&!Vy;sj({target:"Promise",stat:!0,forced:zy||Vy},{resolve:function(r){return fj(dj&&this===pj?lj:this,r)}})});var Jy=i(()=>{"use strict";Fy();By();Uy();Hy();Wy();Yy()});var Pu=i(()=>{"use strict";var vj=q(),mj=G(),hj=D(),yj=Ie(),bj=Er(),gj=me(),qj=Ht();vj({target:"Promise",stat:!0,forced:qj},{allSettled:function(r){var t=this,n=yj.f(t),a=n.resolve,o=n.reject,u=bj(function(){var s=hj(t.resolve),c=[],l=0,f=1;gj(r,function(p){var d=l++,v=!1;f++,mj(s,t,p).then(function(h){v||(v=!0,c[d]={status:"fulfilled",value:h},--f||a(c))},function(h){v||(v=!0,c[d]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Ru=i(()=>{"use strict";var xj=q(),wj=G(),Sj=D(),Ej=z(),Tj=Ie(),Cj=Er(),Oj=me(),kj=Ht(),Qy="No one promise resolved";xj({target:"Promise",stat:!0,forced:kj},{any:function(r){var t=this,n=Ej("AggregateError"),a=Tj.f(t),o=a.resolve,u=a.reject,s=Cj(function(){var c=Sj(t.resolve),l=[],f=0,p=1,d=!1;Oj(r,function(v){var h=f++,m=!1;p++,wj(c,t,v).then(function(x){m||d||(d=!0,o(x))},function(x){m||d||(m=!0,l[h]=x,--p||u(new n(l,Qy)))})}),--p||u(new n(l,Qy))});return s.error&&u(s.value),a.promise}})});var Nu=i(()=>{"use strict";var Ij=q(),_j=R(),Pj=jr(),Rj=vr(),Aj=Ie(),Nj=D(),Zy=Er(),Au=_j.Promise,Xy=!1,Mj=!Au||!Au.try||Zy(function(){Au.try(function(e){Xy=e===8},8)}).error||!Xy;Ij({target:"Promise",stat:!0,forced:Mj},{try:function(e){var r=arguments.length>1?Rj(arguments,1):[],t=Aj.f(this),n=Zy(function(){return Pj(Nj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Mu=i(()=>{"use strict";var jj=q(),Lj=Ie();jj({target:"Promise",stat:!0},{withResolvers:function(){var r=Lj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var nb=i(()=>{"use strict";var $j=q(),Fj=re(),Ea=Tr(),Dj=P(),rb=z(),tb=M(),Bj=ru(),eb=_u(),Gj=je(),Lu=Ea&&Ea.prototype,Uj=!!Ea&&Dj(function(){Lu.finally.call({then:function(){}},function(){})});$j({target:"Promise",proto:!0,real:!0,forced:Uj},{finally:function(e){var r=Bj(this,rb("Promise")),t=tb(e);return this.then(t?function(n){return eb(r,e()).then(function(){return n})}:e,t?function(n){return eb(r,e()).then(function(){throw n})}:e)}});!Fj&&tb(Ea)&&(ju=rb("Promise").prototype.finally,Lu.finally!==ju&&Gj(Lu,"finally",ju,{unsafe:!0}));var ju});var ib=i((WK,ab)=>{"use strict";Qo();xr();_t();Jy();Pu();Ru();Nu();Mu();nb();yr();var Hj=J();ab.exports=Hj.Promise});var ub=i((KK,ob)=>{"use strict";var Wj=ib();wr();ob.exports=Wj});var sb=i(()=>{"use strict";Nu()});var cb=i(()=>{"use strict";Mu()});var fb=i((QK,lb)=>{"use strict";var Kj=ub();sb();cb();lb.exports=Kj});var pb=i(()=>{"use strict";Qo()});var db=i(()=>{"use strict";Pu()});var vb=i(()=>{"use strict";Ru()});var hb=i((az,mb)=>{"use strict";var zj=fb();pb();db();vb();mb.exports=zj});var ot=i((iz,yb)=>{"use strict";yb.exports=hb()});var qb=i((lz,gb)=>{"use strict";jo();var Vj=Vr();gb.exports=Vj.f("asyncIterator")});var wb=i((fz,xb)=>{"use strict";var Yj=qb();xb.exports=Yj});var Eb=i((pz,Sb)=>{"use strict";var Jj=wb();Sb.exports=Jj});var Cb=i((dz,Tb)=>{"use strict";var Qj=Eb();Tb.exports=Qj});var Ta=i((vz,Ob)=>{"use strict";Ob.exports=Cb()});var Pb=i(()=>{"use strict";var Xj=q(),Zj=P(),eL=ne(),_b=Et(),rL=Xi(),tL=Zj(function(){_b(1)});Xj({target:"Object",stat:!0,forced:tL,sham:!rL},{getPrototypeOf:function(r){return _b(eL(r))}})});var Ab=i((gz,Rb)=>{"use strict";Pb();var nL=J();Rb.exports=nL.Object.getPrototypeOf});var Mb=i((qz,Nb)=>{"use strict";var aL=Ab();Nb.exports=aL});var Lb=i((xz,jb)=>{"use strict";var iL=Mb();jb.exports=iL});var Fb=i((wz,$b)=>{"use strict";var oL=Lb();$b.exports=oL});var Ca=i((Sz,Db)=>{"use strict";Db.exports=Fb()});var Gb=i(()=>{"use strict";var uL=q(),sL=N(),cL=Me(),lL=sL([].reverse),Bb=[1,2];uL({target:"Array",proto:!0,forced:String(Bb)===String(Bb.reverse())},{reverse:function(){return cL(this)&&(this.length=this.length),lL(this)}})});var Hb=i((Cz,Ub)=>{"use strict";Gb();var fL=se();Ub.exports=fL("Array","reverse")});var Kb=i((Oz,Wb)=>{"use strict";var pL=W(),dL=Hb(),Du=Array.prototype;Wb.exports=function(e){var r=e.reverse;return e===Du||pL(Du,e)&&r===Du.reverse?dL:r}});var Vb=i((kz,zb)=>{"use strict";var vL=Kb();zb.exports=vL});var Jb=i((Iz,Yb)=>{"use strict";var mL=Vb();Yb.exports=mL});var Xb=i((_z,Qb)=>{"use strict";var hL=Jb();Qb.exports=hL});var eg=i((Pz,Zb)=>{"use strict";Zb.exports=Xb()});var Bu=i((Rz,zt)=>{function yL(e,r){this.v=e,this.k=r}zt.exports=yL,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var rg=i(()=>{"use strict";var bL=q(),gL=K(),qL=rr();bL({target:"Object",stat:!0,sham:!gL},{create:qL})});var ng=i((Mz,tg)=>{"use strict";rg();var xL=J(),wL=xL.Object;tg.exports=function(r,t){return wL.create(r,t)}});var ig=i((jz,ag)=>{"use strict";var SL=ng();ag.exports=SL});var ug=i((Lz,og)=>{"use strict";var EL=ig();og.exports=EL});var cg=i(($z,sg)=>{"use strict";var TL=ug();sg.exports=TL});var Oa=i((Fz,lg)=>{"use strict";lg.exports=cg()});var Uu=i((Dz,vg)=>{"use strict";var pg=N(),CL=D(),OL=$(),kL=V(),fg=vr(),IL=Mr(),dg=Function,_L=pg([].concat),PL=pg([].join),Gu={},RL=function(e,r,t){if(!kL(Gu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Gu[r]=dg("C,a","return new C("+PL(n,",")+")")}return Gu[r](e,t)};vg.exports=IL?dg.bind:function(r){var t=CL(this),n=t.prototype,a=fg(arguments,1),o=function(){var s=_L(a,fg(arguments));return this instanceof o?RL(t,s.length,s):t.apply(r,s)};return OL(n)&&(o.prototype=n),o}});var hg=i(()=>{"use strict";var AL=q(),mg=Uu();AL({target:"Function",proto:!0,forced:Function.bind!==mg},{bind:mg})});var bg=i((Uz,yg)=>{"use strict";hg();var NL=se();yg.exports=NL("Function","bind")});var qg=i((Hz,gg)=>{"use strict";var ML=W(),jL=bg(),Hu=Function.prototype;gg.exports=function(e){var r=e.bind;return e===Hu||ML(Hu,e)&&r===Hu.bind?jL:r}});var wg=i((Wz,xg)=>{"use strict";var LL=qg();xg.exports=LL});var Eg=i((Kz,Sg)=>{"use strict";var $L=wg();Sg.exports=$L});var Cg=i((zz,Tg)=>{"use strict";var FL=Eg();Tg.exports=FL});var Vt=i((Vz,Og)=>{"use strict";Og.exports=Cg()});var kg=i(()=>{"use strict";var DL=q(),BL=Tt();DL({target:"Object",stat:!0},{setPrototypeOf:BL})});var _g=i((Qz,Ig)=>{"use strict";kg();var GL=J();Ig.exports=GL.Object.setPrototypeOf});var Rg=i((Xz,Pg)=>{"use strict";var UL=_g();Pg.exports=UL});var Ng=i((Zz,Ag)=>{"use strict";var HL=Rg();Ag.exports=HL});var jg=i((e9,Mg)=>{"use strict";var WL=Ng();Mg.exports=WL});var ka=i((r9,Lg)=>{"use strict";Lg.exports=jg()});var Fg=i(()=>{"use strict";var KL=q(),zL=K(),$g=ae().f;KL({target:"Object",stat:!0,forced:Object.defineProperty!==$g,sham:!zL},{defineProperty:$g})});var Gg=i((a9,Bg)=>{"use strict";Fg();var VL=J(),Dg=VL.Object,YL=Bg.exports=function(r,t,n){return Dg.defineProperty(r,t,n)};Dg.defineProperty.sham&&(YL.sham=!0)});var Hg=i((i9,Ug)=>{"use strict";var JL=Gg();Ug.exports=JL});var Kg=i((o9,Wg)=>{"use strict";var QL=Hg();Wg.exports=QL});var Vg=i((u9,zg)=>{"use strict";var XL=Kg();zg.exports=XL});var Yt=i((s9,Yg)=>{"use strict";Yg.exports=Vg()});var Wu=i((c9,De)=>{var ZL=Yt();function Ia(e,r,t,n){var a=ZL;try{a({},"",{})}catch{a=0}De.exports=Ia=function(u,s,c,l){function f(p,d){Ia(u,p,function(v){return this._invoke(p,d,v)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},De.exports.__esModule=!0,De.exports.default=De.exports,Ia(e,r,t,n)}De.exports=Ia,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((l9,Be)=>{var Jg=ke(),Ku=Oa(),e$=Vt(),r$=Ca(),Qg=ka(),Pe=Wu();function Xg(){var e,r,t=typeof Jg=="function"?Jg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(v,h,m,x){var b=h&&h.prototype instanceof s?h:s,g=Ku(b.prototype);return Pe(g,"_invoke",function(O,k,w){var E,S,C,L=0,Ee=w||[],_=!1,te={p:0,n:0,v:e,a:Te,f:e$(Te).call(Te,e,4),d:function(F,be){return E=F,S=0,C=e,te.n=be,u}};function Te(Z,F){for(S=Z,C=F,r=0;!_&&L&&!be&&r<Ee.length;r++){var be,T=Ee[r],Nr=te.p,Ye=T[2];Z>3?(be=Ye===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((be=Z<2&&Nr<T[1])?(S=0,te.v=F,te.n=T[1]):Nr<Ye&&(be=Z<3||T[0]>F||F>Ye)&&(T[4]=Z,T[5]=F,te.n=Ye,S=0))}if(be||Z>1)return u;throw _=!0,F}return function(Z,F,be){if(L>1)throw TypeError("Generator is already running");for(_&&F===1&&Te(F,be),S=F,C=be;(r=S<2?e:C)||!_;){E||(S?S<3?(S>1&&(te.n=-1),Te(S,C)):te.n=C:te.v=C);try{if(L=2,E){if(S||(Z="next"),r=E[Z]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Z+"' method"),S=1);E=e}else if((r=(_=te.n<0)?C:O.call(k,te))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:_}}}(v,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=r$;var f=[][n]?r(r([][n]())):(Pe(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Ku(f);function d(v){return Qg?Qg(v,l):(v.__proto__=l,Pe(v,a,"GeneratorFunction")),v.prototype=Ku(p),v}return c.prototype=l,Pe(p,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,a,"GeneratorFunction"),Pe(p),Pe(p,a,"Generator"),Pe(p,n,function(){return this}),Pe(p,"toString",function(){return"[object Generator]"}),(Be.exports=Xg=function(){return{w:o,m:d}},Be.exports.__esModule=!0,Be.exports.default=Be.exports)()}Be.exports=Xg,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var Ju=i((f9,Jt)=>{var t$=ke(),n$=Ta(),a$=Bu(),Vu=Wu();function Yu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof a$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Vu(Yu.prototype),Vu(Yu.prototype,typeof t$=="function"&&n$||"@asyncIterator",function(){return this})),Vu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Jt.exports=Yu,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Qu=i((p9,Qt)=>{var i$=ot(),o$=zu(),u$=Ju();function s$(e,r,t,n,a){return new u$(o$().w(e,r,t,n),a||i$)}Qt.exports=s$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Zg=i((d9,Xt)=>{var c$=Qu();function l$(e,r,t,n,a){var o=c$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=l$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var tq=i((v9,rq)=>{"use strict";var eq=Xe(),f$=TypeError;rq.exports=function(e,r){if(!delete e[r])throw new f$("Cannot delete property "+eq(r)+" of "+eq(e))}});var nq=i(()=>{"use strict";var p$=q(),d$=ne(),v$=de(),m$=Wr(),h$=tq(),y$=It(),b$=[].unshift(0)!==1,g$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},q$=b$||!g$();p$({target:"Array",proto:!0,arity:1,forced:q$},{unshift:function(r){var t=d$(this),n=v$(t),a=arguments.length;if(a){y$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:h$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return m$(t,n+a)}})});var iq=i((y9,aq)=>{"use strict";nq();var x$=se();aq.exports=x$("Array","unshift")});var uq=i((b9,oq)=>{"use strict";var w$=W(),S$=iq(),Xu=Array.prototype;oq.exports=function(e){var r=e.unshift;return e===Xu||w$(Xu,e)&&r===Xu.unshift?S$:r}});var cq=i((g9,sq)=>{"use strict";var E$=uq();sq.exports=E$});var fq=i((q9,lq)=>{"use strict";var T$=cq();lq.exports=T$});var dq=i((x9,pq)=>{"use strict";var C$=fq();pq.exports=C$});var mq=i((w9,vq)=>{"use strict";vq.exports=dq()});var hq=i((S9,Zt)=>{var O$=mq();function k$(e){var r=Object(e),t=[];for(var n in r)O$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Zt.exports=k$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var bq=i((E9,yq)=>{"use strict";xr();_t();yr();$o();var I$=Vr();yq.exports=I$.f("iterator")});var qq=i((T9,gq)=>{"use strict";var _$=bq();wr();gq.exports=_$});var wq=i((C9,xq)=>{"use strict";var P$=qq();xq.exports=P$});var Eq=i((O9,Sq)=>{"use strict";var R$=wq();Sq.exports=R$});var en=i((k9,Tq)=>{"use strict";Tq.exports=Eq()});var Cq=i((I9,Ge)=>{var _a=ke(),A$=en();function Zu(e){"@babel/helpers - typeof";return Ge.exports=Zu=typeof _a=="function"&&typeof A$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof _a=="function"&&r.constructor===_a&&r!==_a.prototype?"symbol":typeof r},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports,Zu(e)}Ge.exports=Zu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var Oq=i((_9,rn)=>{var N$=Cq().default,M$=ke(),j$=en();function L$(e){if(e!=null){var r=e[typeof M$=="function"&&j$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(N$(e)+" is not iterable")}rn.exports=L$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var _q=i((P9,Ue)=>{var kq=Ca(),$$=eg(),F$=Bu(),D$=zu(),B$=Zg(),G$=Qu(),U$=Ju(),H$=hq(),Iq=Oq();function es(){"use strict";var e=D$(),r=e.m(es),t=(kq?kq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,d){return c(l.a,a[p],d)},delegateYield:function(p,d,v){return s.resultName=d,c(l.d,Iq(p),v)},finish:function(p){return c(l.f,p)}},c=function(p,d,v){l.p=s.prev,l.n=s.next;try{return p(d,v)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ue.exports=es=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&$$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new F$(c,l)},AsyncIterator:U$,async:function(c,l,f,p,d){return(n(l)?G$:B$)(o(c),l,f,p,d)},keys:H$,values:Iq}},Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports)()}Ue.exports=es,Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports});var le=i((R9,Pq)=>{var Pa=_q()();Pq.exports=Pa;try{regeneratorRuntime=Pa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Pa:Function("r","regeneratorRuntime = r")(Pa)}});var rs=i((Aa,Aq)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});var Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Aa.default=W$;function W$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=K$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function K$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Rq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):tn(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Rq(m,2),b=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(b)>-1;return!!(E&&(!g||w.attribs[b]===g))},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L,Ee){c(L)&&(C.push(L),Ee())}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],d=parseInt(f[2],10)-1,v=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var b=x.findIndex(function(g){return g===m});if(b===d)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(b,g){return v(g)&&b.push(g),b},[]):v(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Aq.exports=Aa.default});var Ma=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.convertNodeList=z$;Na.escapeValue=V$;function z$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function V$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Uq=i((ja,Gq)=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.default=Y$;var Lq=Ma(),Nq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function Y$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,d=f.length,v=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(g){return g===b}:b}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(b){b==="class"&&(v=!0);var g=l[b];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Lq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[b]=function(O,k){return g.test(k)})}),v&&function(){var b=l.attribute;l.attribute=function(g,O,k){return l.class(O)||b&&b(g,O,k)}}();p!==n;){if(m(p)!==!0){if(Mq(s,p,l,f,n)||jq(p,l,f,n))break;Mq(s,p,l,f),f.length===d&&jq(p,l,f),f.length===d&&J$(s,p,l,f)}p=p.parentNode,d=f.length}if(p===n){var x=Dq(s,p,l);f.unshift(x)}return f.join(" ")}function Mq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=$q(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function $q(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var b=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?b===-1?0:-1:b-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Lq.escapeValue)(c.value),p=t[l]||t.attribute,d=Nq[l]||Nq.attribute;if(!Bq(p,l,f,d)){var v="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(v="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");v="."+h}return v}}return null}function jq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Fq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Fq(e,r){var t=e.tagName.toLowerCase();return Bq(r.tag,null,t)?null:t}function J$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Dq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Dq(e,r,t){var n=$q(e,r,t);return n||(n=Fq(r,t)),n}function Bq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Gq.exports=ja.default});var ts=i(($a,Hq)=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.default=rF;var Q$=rs(),X$=eF(Q$),Z$=Ma();function eF(e){return e&&e.__esModule?e:{default:e}}function rF(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,Z$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,X$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return La("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(La(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=La("",a[0],a.slice(1).join(" "),r),a[a.length-1]=La(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function La(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var k=s[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var d=r.replace(/>/,""),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/:nth-child/.test(r)){var v=r.replace(/nth-child/g,"nth-of-type"),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),b=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=b();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Hq.exports=$a.default});var ns=i(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getCommonAncestor=tF;Fa.getCommonProperties=nF;function tF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,d){for(var v=[];p!==n;)p=p.parentNode,v.unshift(p);a[d]=v}),a.sort(function(p,d){return p.length-d.length});for(var o=a.shift(),u=null,s=function(){var d=o[c],v=a.some(function(h){return!h.some(function(m){return m===d})});if(v)return"break";u=d},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function nF(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(d,v){var h=c[v],m=h.name;return h&&m!=="class"&&(d[m]=h.value),d},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(d,v){var h=a[v];return h===l[v]&&(d[v]=h),d},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Jq=i(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var aF=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=is;nn.getMultiSelector=Yq;nn.default=lF;var iF=rs(),Kq=as(iF),oF=Uq(),uF=as(oF),sF=ts(),zq=as(sF),Wq=Ma(),Vq=ns();function as(e){return e&&e.__esModule?e:{default:e}}function is(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":aF(e))+'")');var t=(0,Kq.default)(e,r),n=(0,uF.default)(e,r),a=(0,zq.default)(n,e,r);return t&&delete global.document,a}function Yq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Wq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Kq.default)(e[0],r),n=(0,Vq.getCommonAncestor)(e,r),a=is(n,r),o=cF(e),u=o[0],s=(0,zq.default)(a+" "+u,e,r),c=(0,Wq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function cF(e){var r=(0,Vq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function lF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Yq(e,r):is(e,r)}});var Zq=i(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=oe.common=oe.optimize=oe.getMultiSelector=oe.getSingleSelector=oe.select=void 0;var os=Jq();Object.defineProperty(oe,"getSingleSelector",{enumerable:!0,get:function(){return os.getSingleSelector}});Object.defineProperty(oe,"getMultiSelector",{enumerable:!0,get:function(){return os.getMultiSelector}});var Qq=Xq(os),fF=ts(),pF=Xq(fF),dF=ns(),vF=mF(dF);function mF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Xq(e){return e&&e.__esModule?e:{default:e}}oe.select=Qq.default;oe.optimize=pF.default;oe.common=vF;oe.default=Qq.default});var ex=i(()=>{"use strict";var TF=q(),CF=Me();TF({target:"Array",stat:!0},{isArray:CF})});var tx=i((Y9,rx)=>{"use strict";ex();var OF=J();rx.exports=OF.Array.isArray});var ax=i((J9,nx)=>{"use strict";var kF=tx();nx.exports=kF});var ox=i((Q9,ix)=>{"use strict";var IF=ax();ix.exports=IF});var sx=i((X9,ux)=>{"use strict";var _F=ox();ux.exports=_F});var lx=i((Z9,cx)=>{"use strict";cx.exports=sx()});var dx=i(()=>{"use strict";var PF=q(),RF=ne(),AF=de(),NF=Wr(),MF=It(),jF=P(),LF=jF(function(){return[].push.call({length:4294967296},1)!==4294967297}),$F=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},FF=LF||!$F();PF({target:"Array",proto:!0,arity:1,forced:FF},{push:function(r){var t=RF(this),n=AF(t),a=arguments.length;MF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return NF(t,n),n}})});var mx=i((nV,vx)=>{"use strict";dx();var DF=se();vx.exports=DF("Array","push")});var yx=i((aV,hx)=>{"use strict";var BF=W(),GF=mx(),us=Array.prototype;hx.exports=function(e){var r=e.push;return e===us||BF(us,e)&&r===us.push?GF:r}});var gx=i((iV,bx)=>{"use strict";var UF=yx();bx.exports=UF});var xx=i((oV,qx)=>{"use strict";var HF=gx();qx.exports=HF});var Sx=i((uV,wx)=>{"use strict";var WF=xx();wx.exports=WF});var ss=i((sV,Ex)=>{"use strict";Ex.exports=Sx()});var Mx=i(()=>{"use strict";var KF=q(),zF=Rt().map,VF=xt(),YF=VF("map");KF({target:"Array",proto:!0,forced:!YF},{map:function(r){return zF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Lx=i((jV,jx)=>{"use strict";Mx();var JF=se();jx.exports=JF("Array","map")});var Fx=i((LV,$x)=>{"use strict";var QF=W(),XF=Lx(),ls=Array.prototype;$x.exports=function(e){var r=e.map;return e===ls||QF(ls,e)&&r===ls.map?XF:r}});var Bx=i(($V,Dx)=>{"use strict";var ZF=Fx();Dx.exports=ZF});var Ux=i((FV,Gx)=>{"use strict";var eD=Bx();Gx.exports=eD});var Wx=i((DV,Hx)=>{"use strict";var rD=Ux();Hx.exports=rD});var zx=i((BV,Kx)=>{"use strict";Kx.exports=Wx()});var Yx=i((GV,Vx)=>{Vx.exports=zx()});var Qx=i((UV,Jx)=>{Jx.exports=ot()});var tw=i((HV,rw)=>{"use strict";var tD=D(),nD=ne(),aD=Cn(),iD=de(),Xx=TypeError,Zx="Reduce of empty array with no initial value",ew=function(e){return function(r,t,n,a){var o=nD(r),u=aD(o),s=iD(o);if(tD(t),s===0&&n<2)throw new Xx(Zx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Xx(Zx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};rw.exports={left:ew(!1),right:ew(!0)}});var fs=i((WV,nw)=>{"use strict";var oD=P();nw.exports=function(e,r){var t=[][e];return!!t&&oD(function(){t.call(null,r||function(){return 1},1)})}});var iw=i(()=>{"use strict";var uD=q(),sD=tw().left,cD=fs(),aw=$r(),lD=$t(),fD=!lD&&aw>79&&aw<83,pD=fD||!cD("reduce");uD({target:"Array",proto:!0,forced:pD},{reduce:function(r){var t=arguments.length;return sD(this,r,t,t>1?arguments[1]:void 0)}})});var uw=i((VV,ow)=>{"use strict";iw();var dD=se();ow.exports=dD("Array","reduce")});var cw=i((YV,sw)=>{"use strict";var vD=W(),mD=uw(),ps=Array.prototype;sw.exports=function(e){var r=e.reduce;return e===ps||vD(ps,e)&&r===ps.reduce?mD:r}});var fw=i((JV,lw)=>{"use strict";var hD=cw();lw.exports=hD});var dw=i((QV,pw)=>{"use strict";var yD=fw();pw.exports=yD});var mw=i((XV,vw)=>{"use strict";var bD=dw();vw.exports=bD});var yw=i((ZV,hw)=>{"use strict";hw.exports=mw()});var gw=i((e7,bw)=>{bw.exports=yw()});var ww=i((r7,xw)=>{"use strict";var gD=Me(),qD=de(),xD=It(),wD=Q(),SD=Hr(),qw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?wD(u,s):!1,p,d;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&gD(p)?(d=qD(p),c=qw(e,r,p,d,c,o-1)-1):(xD(c+1),SD(e,c,p)),c++),l++;return c};xw.exports=qw});var Sw=i(()=>{"use strict";var ED=q(),TD=ww(),CD=D(),OD=ne(),kD=de(),ID=zn();ED({target:"Array",proto:!0},{flatMap:function(r){var t=OD(this),n=kD(t),a;return CD(r),a=ID(t,0),TD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var Ew=i(()=>{"use strict";var _D=Do();_D("flatMap")});var Cw=i((o7,Tw)=>{"use strict";Sw();Ew();var PD=se();Tw.exports=PD("Array","flatMap")});var kw=i((u7,Ow)=>{"use strict";var RD=W(),AD=Cw(),ds=Array.prototype;Ow.exports=function(e){var r=e.flatMap;return e===ds||RD(ds,e)&&r===ds.flatMap?AD:r}});var _w=i((s7,Iw)=>{"use strict";var ND=kw();Iw.exports=ND});var Rw=i((c7,Pw)=>{"use strict";var MD=_w();Pw.exports=MD});var Nw=i((l7,Aw)=>{"use strict";var jD=Rw();Aw.exports=jD});var jw=i((f7,Mw)=>{"use strict";Mw.exports=Nw()});var $w=i((p7,Lw)=>{Lw.exports=jw()});var Dw=i((d7,Fw)=>{"use strict";lo();var LD=se();Fw.exports=LD("Array","concat")});var Gw=i((v7,Bw)=>{"use strict";var $D=W(),FD=Dw(),vs=Array.prototype;Bw.exports=function(e){var r=e.concat;return e===vs||$D(vs,e)&&r===vs.concat?FD:r}});var Hw=i((m7,Uw)=>{"use strict";var DD=Gw();Uw.exports=DD});var Kw=i((h7,Ww)=>{"use strict";var BD=Hw();Ww.exports=BD});var Vw=i((y7,zw)=>{"use strict";var GD=Kw();zw.exports=GD});var Jw=i((b7,Yw)=>{"use strict";Yw.exports=Vw()});var ms=i((g7,Qw)=>{Qw.exports=Jw()});var eS=i(()=>{});var tS=i((G7,rS)=>{"use strict";eS();Fo();var XD=Vr();rS.exports=XD.f("toPrimitive")});var aS=i((U7,nS)=>{"use strict";var ZD=tS();nS.exports=ZD});var oS=i((H7,iS)=>{"use strict";var e3=aS();iS.exports=e3});var sS=i((W7,uS)=>{"use strict";var r3=oS();uS.exports=r3});var lS=i((K7,cS)=>{"use strict";cS.exports=sS()});var gS=i((dY,bS)=>{"use strict";var n3=$(),a3=Ce(),i3=A(),o3=i3("match");bS.exports=function(e){var r;return n3(e)&&((r=e[o3])!==void 0?!!r:a3(e)==="RegExp")}});var xS=i((vY,qS)=>{"use strict";var u3=gS(),s3=TypeError;qS.exports=function(e){if(u3(e))throw new s3("The method doesn't accept regular expressions");return e}});var SS=i((mY,wS)=>{"use strict";var c3=A(),l3=c3("match");wS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[l3]=!1,"/./"[e](r)}catch{}}return!1}});var CS=i(()=>{"use strict";var f3=q(),p3=dt(),d3=mt().f,v3=Ni(),ES=Ze(),m3=xS(),h3=fr(),y3=SS(),b3=re(),g3=p3("".slice),q3=Math.min,TS=y3("startsWith"),x3=!b3&&!TS&&!!function(){var e=d3(String.prototype,"startsWith");return e&&!e.writable}();f3({target:"String",proto:!0,forced:!x3&&!TS},{startsWith:function(r){var t=ES(h3(this));m3(r);var n=v3(q3(arguments.length>1?arguments[1]:void 0,t.length)),a=ES(r);return g3(t,n,n+a.length)===a}})});var kS=i((bY,OS)=>{"use strict";CS();var w3=se();OS.exports=w3("String","startsWith")});var _S=i((gY,IS)=>{"use strict";var S3=W(),E3=kS(),gs=String.prototype;IS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===gs||S3(gs,e)&&r===gs.startsWith?E3:r}});var RS=i((qY,PS)=>{"use strict";var T3=_S();PS.exports=T3});var NS=i((xY,AS)=>{"use strict";var C3=RS();AS.exports=C3});var jS=i((wY,MS)=>{"use strict";var O3=NS();MS.exports=O3});var $S=i((SY,LS)=>{"use strict";LS.exports=jS()});var DS=i((EY,FS)=>{FS.exports=$S()});var BS=i(()=>{"use strict";var k3=q(),I3=Rt().filter,_3=xt(),P3=_3("filter");k3({target:"Array",proto:!0,forced:!P3},{filter:function(r){return I3(this,r,arguments.length>1?arguments[1]:void 0)}})});var US=i((OY,GS)=>{"use strict";BS();var R3=se();GS.exports=R3("Array","filter")});var WS=i((kY,HS)=>{"use strict";var A3=W(),N3=US(),qs=Array.prototype;HS.exports=function(e){var r=e.filter;return e===qs||A3(qs,e)&&r===qs.filter?N3:r}});var zS=i((IY,KS)=>{"use strict";var M3=WS();KS.exports=M3});var YS=i((_Y,VS)=>{"use strict";var j3=zS();VS.exports=j3});var QS=i((PY,JS)=>{"use strict";var L3=YS();JS.exports=L3});var ZS=i((RY,XS)=>{"use strict";XS.exports=QS()});var rE=i((AY,eE)=>{eE.exports=ZS()});var yE=i(()=>{"use strict";var W3=q(),K3=z(),ws=jr(),z3=Uu(),fE=eu(),V3=ee(),pE=$(),Y3=rr(),vE=P(),Ss=K3("Reflect","construct"),J3=Object.prototype,Q3=[].push,mE=vE(function(){function e(){}return!(Ss(function(){},[],e)instanceof e)}),hE=!vE(function(){Ss(function(){})}),dE=mE||hE;W3({target:"Reflect",stat:!0,forced:dE,sham:dE},{construct:function(r,t){fE(r),V3(t);var n=arguments.length<3?r:fE(arguments[2]);if(hE&&!mE)return Ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ws(Q3,a,t),new(ws(z3,r,a))}var o=n.prototype,u=Y3(pE(o)?o:J3),s=ws(r,u,t);return pE(s)?s:u}})});var gE=i((dJ,bE)=>{"use strict";yE();var X3=J();bE.exports=X3.Reflect.construct});var xE=i((vJ,qE)=>{"use strict";var Z3=gE();qE.exports=Z3});var SE=i((mJ,wE)=>{"use strict";var e4=xE();wE.exports=e4});var TE=i((hJ,EE)=>{"use strict";var r4=SE();EE.exports=r4});var Ka=i((yJ,CE)=>{"use strict";CE.exports=TE()});var kE=i((bJ,OE)=>{OE.exports=Ka()});var LE=i((OJ,jE)=>{"use strict";var t4=P();jE.exports=t4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var DE=i((kJ,FE)=>{"use strict";var n4=P(),a4=$(),i4=Ce(),$E=LE(),za=Object.isExtensible,o4=n4(function(){za(1)});FE.exports=o4||$E?function(r){return!a4(r)||$E&&i4(r)==="ArrayBuffer"?!1:za?za(r):!0}:za});var GE=i((IJ,BE)=>{"use strict";var u4=P();BE.exports=!u4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var _s=i((_J,WE)=>{"use strict";var s4=q(),c4=N(),l4=zr(),f4=$(),Os=V(),p4=ae().f,UE=Pt(),d4=fo(),ks=DE(),v4=Dr(),m4=GE(),HE=!1,Ke=v4("meta"),h4=0,Is=function(e){p4(e,Ke,{value:{objectID:"O"+h4++,weakData:{}}})},y4=function(e,r){if(!f4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Os(e,Ke)){if(!ks(e))return"F";if(!r)return"E";Is(e)}return e[Ke].objectID},b4=function(e,r){if(!Os(e,Ke)){if(!ks(e))return!0;if(!r)return!1;Is(e)}return e[Ke].weakData},g4=function(e){return m4&&HE&&ks(e)&&!Os(e,Ke)&&Is(e),e},q4=function(){x4.enable=function(){},HE=!0;var e=UE.f,r=c4([].splice),t={};t[Ke]=1,e(t).length&&(UE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ke){r(a,o,1);break}return a},s4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d4.f}))},x4=WE.exports={enable:q4,fastKey:y4,getWeakData:b4,onFreeze:g4};l4[Ke]=!0});var VE=i((PJ,zE)=>{"use strict";var w4=q(),S4=R(),E4=_s(),T4=P(),C4=Oe(),O4=me(),k4=ma(),I4=M(),_4=$(),P4=lr(),R4=$e(),A4=ae().f,N4=Rt().forEach,M4=K(),KE=er(),j4=KE.set,L4=KE.getterFor;zE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=S4[e],s=u&&u.prototype,c={},l;if(!M4||!I4(u)||!(a||s.forEach&&!T4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),E4.enable();else{l=r(function(d,v){j4(k4(d,f),{type:e,collection:new u}),P4(v)||O4(v,d[o],{that:d,AS_ENTRIES:n})});var f=l.prototype,p=L4(e);N4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(d){var v=d==="add"||d==="set";d in s&&!(a&&d==="clear")&&C4(f,d,function(h,m){var x=p(this).collection;if(!v&&a&&!_4(h))return d==="get"?void 0:!1;var b=x[d](h===0?0:h,m);return v?this:b})}),a||A4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return R4(l,e,!1,!0),c[e]=l,w4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var JE=i((RJ,YE)=>{"use strict";var $4=je();YE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:$4(e,n,r[n],t);return e}});var nT=i((AJ,tT)=>{"use strict";var QE=rr(),F4=Yn(),XE=JE(),D4=Q(),B4=ma(),G4=lr(),U4=me(),H4=Un(),Va=Hn(),W4=Zo(),ln=K(),ZE=_s().fastKey,rT=er(),eT=rT.set,Ps=rT.getterFor;tT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){B4(l,o),eT(l,{type:r,index:QE(null),first:null,last:null,size:0}),ln||(l.size=0),G4(f)||U4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Ps(r),s=function(l,f,p){var d=u(l),v=c(l,f),h,m;return v?v.value=p:(d.last=v={index:m=ZE(f,!0),key:f,value:p,previous:h=d.last,next:null,removed:!1},d.first||(d.first=v),h&&(h.next=v),ln?d.size++:l.size++,m!=="F"&&(d.index[m]=v)),l},c=function(l,f){var p=u(l),d=ZE(f),v;if(d!=="F")return p.index[d];for(v=p.first;v;v=v.next)if(v.key===f)return v};return XE(o,{clear:function(){for(var f=this,p=u(f),d=p.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=null),d=d.next;p.first=p.last=null,p.index=QE(null),ln?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),d=c(f,l);if(d){var v=d.next,h=d.previous;delete p.index[d.index],d.removed=!0,h&&(h.next=v),v&&(v.previous=h),p.first===d&&(p.first=v),p.last===d&&(p.last=h),ln?p.size--:f.size--}return!!d},forEach:function(f){for(var p=u(this),d=D4(f,arguments.length>1?arguments[1]:void 0),v;v=v?v.next:p.first;)for(d(v.value,v.key,this);v&&v.removed;)v=v.previous},has:function(f){return!!c(this,f)}}),XE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),ln&&F4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Ps(r),o=Ps(n);H4(e,r,function(u,s){eT(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Va(void 0,!0)):Va(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),W4(r)}}});var aT=i(()=>{"use strict";var K4=VE(),z4=nT();K4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},z4)});var iT=i(()=>{"use strict";aT()});var uT=i(($J,oT)=>{"use strict";oT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ue=i((FJ,cT)=>{"use strict";var V4=z(),Ya=uT(),sT=V4("Map");cT.exports={Map:sT,set:Ya("set",2),get:Ya("get",1),has:Ya("has",1),remove:Ya("delete",1),proto:sT.prototype}});var Rs=i(()=>{"use strict";var Y4=q(),J4=N(),Q4=D(),X4=fr(),Z4=me(),Ja=ue(),lT=re(),eB=P(),fT=Ja.Map,rB=Ja.has,tB=Ja.get,nB=Ja.set,aB=J4([].push),iB=lT||eB(function(){return fT.groupBy("ab",function(e){return e}).get("a").length!==1});Y4({target:"Map",stat:!0,forced:lT||iB},{groupBy:function(r,t){X4(r),Q4(t);var n=new fT,a=0;return Z4(r,function(o){var u=t(o,a++);rB(n,u)?aB(tB(n,u),o):nB(n,u,[o])}),n}})});var X=i((GJ,pT)=>{"use strict";var oB=Xe(),uB=TypeError;pT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new uB(oB(e)+" is not a map")}});var Ns=i(()=>{"use strict";var sB=q(),cB=X(),As=ue(),lB=re(),fB=As.get,pB=As.has,dB=As.set;sB({target:"Map",proto:!0,real:!0,forced:lB},{getOrInsert:function(r,t){return pB(cB(this),r)?fB(this,r):(dB(this,r,t),t)}})});var js=i(()=>{"use strict";var vB=q(),mB=D(),hB=X(),Ms=ue(),yB=re(),bB=Ms.get,gB=Ms.has,qB=Ms.set;vB({target:"Map",proto:!0,real:!0,forced:yB},{getOrInsertComputed:function(r,t){if(hB(this),mB(t),gB(this,r))return bB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return qB(this,r,n),n}})});var vT=i((zJ,dT)=>{"use strict";xr();iT();Rs();Ns();js();_t();yr();var xB=J();dT.exports=xB.Map});var hT=i((VJ,mT)=>{"use strict";var wB=vT();wr();mT.exports=wB});var Ls=i(()=>{"use strict";Ns()});var $s=i(()=>{"use strict";js()});var yT=i(()=>{"use strict";Rs()});var gT=i((rQ,bT)=>{"use strict";var SB=hT();Ls();$s();yT();bT.exports=SB});var xT=i((tQ,qT)=>{"use strict";var EB=Q(),TB=ee(),CB=ne(),OB=me();qT.exports=function(e,r,t){return function(a){var o=CB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?EB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return OB(o,function(d){var v=c?l(d,p++):d;t?r(f,TB(v)[0],v[1]):r(f,v)}),f}}});var ST=i(()=>{"use strict";var kB=q(),wT=ue(),IB=xT();kB({target:"Map",stat:!0,forced:!0},{from:IB(wT.Map,wT.set,!0)})});var TT=i((iQ,ET)=>{"use strict";var _B=ee();ET.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,_B(s)[0],s[1]):r(a,s)}return a}}});var OT=i(()=>{"use strict";var PB=q(),CT=ue(),RB=TT();PB({target:"Map",stat:!0,forced:!0},{of:RB(CT.Map,CT.set,!0)})});var IT=i(()=>{"use strict";var AB=q(),NB=G(),MB=me(),jB=M(),kT=D(),LB=ue().Map;AB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=jB(this)?this:LB,a=new n;kT(t);var o=kT(a.set);return MB(r,function(u){NB(o,a,t(u),u)}),a}})});var _T=i(()=>{"use strict";var $B=q(),FB=X(),DB=ue().remove;$B({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=FB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=DB(r,arguments[a]),t=t&&n;return!!t}})});var RT=i(()=>{"use strict";var BB=q(),GB=X(),Fs=ue(),UB=Fs.get,HB=Fs.has,PT=Fs.set;BB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=GB(this),a,o;return HB(n,r)?(a=UB(n,r),"update"in t&&(a=t.update(a,r,n),PT(n,r,a)),a):(o=t.insert(r,n),PT(n,r,o),o)}})});var NT=i((vQ,AT)=>{"use strict";var WB=G();AT.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=WB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var xe=i((mQ,MT)=>{"use strict";var KB=NT();MT.exports=function(e,r,t){return t?KB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var jT=i(()=>{"use strict";var zB=q(),VB=Q(),YB=X(),JB=xe();zB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=YB(this),n=VB(r,arguments.length>1?arguments[1]:void 0);return JB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var $T=i(()=>{"use strict";var QB=q(),XB=Q(),ZB=X(),LT=ue(),e5=xe(),r5=LT.Map,t5=LT.set;QB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=ZB(this),n=XB(r,arguments.length>1?arguments[1]:void 0),a=new r5;return e5(t,function(o,u){n(o,u,t)&&t5(a,u,o)}),a}})});var FT=i(()=>{"use strict";var n5=q(),a5=Q(),i5=X(),o5=xe();n5({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=i5(this),n=a5(r,arguments.length>1?arguments[1]:void 0),a=o5(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var DT=i(()=>{"use strict";var u5=q(),s5=Q(),c5=X(),l5=xe();u5({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=c5(this),n=s5(r,arguments.length>1?arguments[1]:void 0),a=l5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var GT=i((EQ,BT)=>{"use strict";BT.exports=function(e,r){return e===r||e!==e&&r!==r}});var UT=i(()=>{"use strict";var f5=q(),p5=GT(),d5=X(),v5=xe();f5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return v5(d5(this),function(t){if(p5(t,r))return!0},!0)===!0}})});var HT=i(()=>{"use strict";var m5=q(),h5=X(),y5=xe();m5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=y5(h5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var KT=i(()=>{"use strict";var b5=q(),g5=Q(),q5=X(),WT=ue(),x5=xe(),w5=WT.Map,S5=WT.set;b5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=q5(this),n=g5(r,arguments.length>1?arguments[1]:void 0),a=new w5;return x5(t,function(o,u){S5(a,n(o,u,t),o)}),a}})});var VT=i(()=>{"use strict";var E5=q(),T5=Q(),C5=X(),zT=ue(),O5=xe(),k5=zT.Map,I5=zT.set;E5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=C5(this),n=T5(r,arguments.length>1?arguments[1]:void 0),a=new k5;return O5(t,function(o,u){I5(a,u,n(o,u,t))}),a}})});var YT=i(()=>{"use strict";var _5=q(),P5=X(),R5=me(),A5=ue().set;_5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=P5(this),n=arguments.length,a=0;a<n;)R5(arguments[a++],function(o,u){A5(t,o,u)},{AS_ENTRIES:!0});return t}})});var JT=i(()=>{"use strict";var N5=q(),M5=D(),j5=X(),L5=xe(),$5=TypeError;N5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=j5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(M5(r),L5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new $5("Reduce of empty map with no initial value");return a}})});var QT=i(()=>{"use strict";var F5=q(),D5=Q(),B5=X(),G5=xe();F5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=B5(this),n=D5(r,arguments.length>1?arguments[1]:void 0);return G5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var ZT=i(()=>{"use strict";var U5=q(),XT=D(),H5=X(),Ds=ue(),W5=TypeError,K5=Ds.get,z5=Ds.has,V5=Ds.set;U5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=H5(this),a=arguments.length;XT(t);var o=z5(n,r);if(!o&&a<3)throw new W5("Updating absent value");var u=o?K5(n,r):XT(a>2?arguments[2]:void 0)(r,n);return V5(n,r,t(u,r,n)),n}})});var Gs=i((BQ,e0)=>{"use strict";var Qa=G(),Bs=D(),Xa=M(),Y5=ee(),J5=TypeError;e0.exports=function(r,t){var n=Y5(this),a=Bs(n.get),o=Bs(n.has),u=Bs(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Xa(t)&&!Xa(s))throw new J5("At least one callback required");return Qa(o,n,r)?(c=Qa(a,n,r),Xa(t)&&(c=t(c),Qa(u,n,r,c))):Xa(s)&&(c=s(),Qa(u,n,r,c)),c}});var r0=i(()=>{"use strict";var Q5=q(),X5=Gs();Q5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:X5})});var t0=i(()=>{"use strict";var Z5=q(),e6=Gs();Z5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:e6})});var a0=i((KQ,n0)=>{"use strict";var r6=gT();ST();OT();IT();_T();RT();jT();$T();FT();DT();UT();Ls();$s();HT();KT();VT();YT();JT();QT();ZT();r0();t0();n0.exports=r6});var o0=i((zQ,i0)=>{"use strict";i0.exports=a0()});var s0=i(()=>{"use strict";var t6=q(),n6=dt(),a6=Hi().indexOf,i6=fs(),Us=n6([].indexOf),u0=!!Us&&1/Us([1],1,-0)<0,o6=u0||!i6("indexOf");t6({target:"Array",proto:!0,forced:o6},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return u0?Us(this,r,t)||0:a6(this,r,t)}})});var l0=i((JQ,c0)=>{"use strict";s0();var u6=se();c0.exports=u6("Array","indexOf")});var p0=i((QQ,f0)=>{"use strict";var s6=W(),c6=l0(),Hs=Array.prototype;f0.exports=function(e){var r=e.indexOf;return e===Hs||s6(Hs,e)&&r===Hs.indexOf?c6:r}});var v0=i((XQ,d0)=>{"use strict";var l6=p0();d0.exports=l6});var h0=i((ZQ,m0)=>{"use strict";var f6=v0();m0.exports=f6});var b0=i((eX,y0)=>{"use strict";var p6=h0();y0.exports=p6});var q0=i((rX,g0)=>{"use strict";g0.exports=b0()});var L0=i(()=>{"use strict";var b6=q(),g6=ne(),j0=$n(),q6=P(),x6=q6(function(){j0(1)});b6({target:"Object",stat:!0,forced:x6},{keys:function(r){return j0(g6(r))}})});var F0=i((oZ,$0)=>{"use strict";L0();var w6=J();$0.exports=w6.Object.keys});var B0=i((uZ,D0)=>{"use strict";var S6=F0();D0.exports=S6});var U0=i((sZ,G0)=>{"use strict";var E6=B0();G0.exports=E6});var W0=i((cZ,H0)=>{"use strict";var T6=U0();H0.exports=T6});var z0=i((lZ,K0)=>{"use strict";K0.exports=W0()});var Y0=i((fZ,V0)=>{V0.exports=z0()});var Qs=i((SZ,Q0)=>{var Js={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},R6=Js.yellow,A6=Object.keys(Js),N6=/^#[0-9a-fA-F]{6}$/;Q0.exports={COLOR_PRESETS:Js,DEFAULT_COLOR:R6,PRESET_NAMES:A6,HEX_COLOR_REGEX:N6}});var mC=i((BZ,vC)=>{var dC={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},D6=Object.keys(dC);vC.exports={ALLOWED_REACTIONS:dC,ALLOWED_REACTION_EMOJIS:D6}});var Je="";function bc(e){Je=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function gc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function ui({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await cr(f,"Failed to create comment"),f.json()}async function si(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await cr(a,"Failed to update comment"),a.json()}async function qc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function xc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function wc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function Sc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var bF=y(Kr(),1),gF=y(Kn(),1),qF=y(sa(),1),xF=y(ca(),1),wF=y(la(),1);var $u=y(ot(),1);function bb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):$u.default.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new $u.default(function(n,a){var o=e.apply(r,t);function u(c){bb(o,n,a,u,s,"next",c)}function s(c){bb(o,n,a,u,s,"throw",c)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function ir(e){return new Wt(e,0)}var Fu=y(ot(),1),kb=y(ke(),1),Ib=y(Ta(),1);function _e(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Wt;Fu.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Fu.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof kb.default=="function"&&Ib.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var SF=y(le(),1),EF=y(Zq(),1);function fe(e){var r,t=hF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function hF(e){return"startContainer"in e}function ur(e){if(yF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function yF(e){return"startContainer"in e}var fx=y(lx(),1);function px(e){if((0,fx.default)(e))return e}var Tx=y(ke(),1),Cx=y(zo(),1),Ox=y(ss(),1);function kx(e,r){var t=e==null?null:typeof Tx.default<"u"&&(0,Cx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Ox.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var Ix=y(Li(),1),_x=y(co(),1);function Da(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function cs(e,r){if(e){var t;if(typeof e=="string")return Da(e,r);var n=(0,Ix.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,_x.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Da(e,r):void 0}}function Px(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,r){return px(e)||kx(e,r)||cs(e,r)||Px()}var Rx=y(ke(),1),Ax=y(Ta(),1),Nx=y(en(),1),an=y(ot(),1);function st(e){var r,t,n,a=2;for(typeof Rx.default<"u"&&(t=Ax.default,n=Nx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ba(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ba(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ba=function(n){this.s=n,this.n=n.next},Ba.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?an.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?an.default.reject(n):r(a.apply(this.s,arguments))}},new Ba(e)}var QD=y(le(),1);var WD=y(le(),1),KD=y(Yx(),1),zD=y(Qx(),1),VD=y(gw(),1),YD=y($w(),1),JD=y(ms(),1);var zs=y(le(),1);var H3=y(le(),1);var ys=y(le(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Xw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var hs=y(Yt(),1);var un=y(ke(),1),Zw=y(en(),1);function We(e){"@babel/helpers - typeof";return We=typeof un.default=="function"&&typeof Zw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},We(e)}var fS=y(lS(),1);function pS(e,r){if(We(e)!="object"||!e)return e;var t=e[fS.default];if(t!==void 0){var n=t.call(e,r||"default");if(We(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ga(e){var r=pS(e,"string");return We(r)=="symbol"?r:r+""}function dS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,hs.default)(e,Ga(n.key),n)}}function sn(e,r,t){return r&&dS(e.prototype,r),t&&dS(e,t),(0,hs.default)(e,"prototype",{writable:!1}),e}var vS=y(Yt(),1);function Ir(e,r,t){return(r=Ga(r))in e?(0,vS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var mS=y(Kr(),1);var Ua="Iterator exhausted before seek ended.",cn=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var p=this._readToPreviousChunk(),d=He(p,2),v=d[0],h=d[1];if(t&&(u=v+u),h===null)throw new RangeError(Ua)}else for(;!on(this.currentChunk,n);){var s=this._readToNextChunk(),c=He(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ua)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,mS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=He(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ua)}}else{var d=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,d)),this.offsetInChunk=d,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var v=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(v,this.offsetInChunk)+u),this.offsetInChunk=v;break}else{var h=this._readToPreviousChunk(),m=He(h,2),x=m[0],b=m[1];if(t&&(u=x+u),b===null){if(o)break;throw new RangeError(Ua)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function yS(e,r){return bs.apply(this,arguments)}function bs(){return bs=Or(ys.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,k,w,E,S,C,L=arguments;return ys.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new cn(t()),p=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),d=f.readToChunk(r.endChunk,r.endIndex),v="",h="",m=function(){return v.length+d.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),x=Math.floor((s-m())/2),v=f.read(-x,!1,!0)+v,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),g=s-m(),v=f.read(-g,!1,!0)+v))),o||(f.seekToChunk(r.startChunk,r.startIndex-v.length),v=Ha(f,l,!0)+v,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ha(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:d,prefix:v,suffix:h},k=Wa(O)(t()),_.next=16,k.next();case 16:if(w=_.sent,!(!w.done&&Xw(w.value,r))){_.next=21;break}return _.next=20,k.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-v.length),p.seekToChunk(E.startChunk,E.startIndex-v.length),S=hS(f,p,!0),S!==void 0&&!o&&(S=Ha(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=hS(f,p,!1),C!==void 0&&!o&&(C=C+Ha(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){_.next=37;break}v=S+v,_.next=42;break;case 37:if(C===void 0){_.next=41;break}h=h+C,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(v=S+v),C!==void 0&&(h=h+C);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),bs.apply(this,arguments)}function hS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ha(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(t3(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function t3(e){return/^\s+$/.test(e)}var aE=y(Kr(),1),iE=y(Kn(),1),oE=y(sa(),1),uE=y(ca(),1),sE=y(la(),1);var xs=y(le(),1),cE=y(DS(),1),lE=y(rE(),1);function tE(e,r){var t;if(typeof oE.default>"u"||(0,uE.default)(e)==null){if(Array.isArray(e)||(t=$3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,sE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function $3(e,r){var t;if(e){if(typeof e=="string")return nE(e,r);var n=(0,aE.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,iE.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nE(e,r)}}function nE(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Wa(e){return function(){var r=_e(xs.default.mark(function n(a){var o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,k,w,E,S,C,L,Ee,_,te,Te,Z,F;return xs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,d=p.data,v=[],h=tE(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,b=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-b,g<=d.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-b,(O<d.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=c.length-b,!(k<=d.length)){T.next=24;break}if(!(0,cE.default)(d).call(d,c.substring(b))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:d===c.substring(b,b+d.length)&&(x.charactersMatched+=d.length,v.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=v,!(c.length<=d.length)){T.next=49;break}w=0;case 38:if(!(w<=d.length)){T.next=49;break}if(E=d.indexOf(c,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(d.length-c.length+1,0),L=function(Ye){var hc=d[Ye];S=(0,lE.default)(S).call(S,function(_C){return hc===c[Ye-_C]}),hc===c[0]&&S.push(Ye)},Ee=C;Ee<d.length;Ee++)L(Ee);_=tE(S);try{for(_.s();!(te=_.n()).done;)Te=te.value,Z=d.length-Te,F={charactersMatched:Z},Z>=u.length+o.length&&(F.endChunk=p,F.endIndex=Te+u.length+o.length),(Z>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Te+u.length),l.push(F)}catch(Nr){_.e(Nr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var G3=y(le(),1);var F3=y(Kr(),1),D3=y(ms(),1);var U3=y(le(),1);var pn=y(kE(),1);var _E=y(Oa(),1),PE=y(Yt(),1);var Es=y(ka(),1),IE=y(Vt(),1);function sr(e,r){var t;return sr=Es.default?(0,IE.default)(t=Es.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function Ts(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,_E.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,PE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function RE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AE(e,r){if(r&&(We(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return RE(e)}var NE=y(ka(),1),ME=y(Vt(),1),Cs=y(Ca(),1);function _r(e){var r;return _r=NE.default?(0,ME.default)(r=Cs.default).call(r):function(t){return t.__proto__||(0,Cs.default)(t)},_r(e)}var Ks=y(o0(),1),k0=y(Oa(),1);var x0=y(q0(),1);function w0(e){try{var r;return(0,x0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var E0=y(Ka(),1),T0=y(ss(),1),C0=y(Vt(),1);var S0=y(Ka(),1);function Ws(){try{var e=!Boolean.prototype.valueOf.call((0,S0.default)(Boolean,[],function(){}))}catch{}return(Ws=function(){return!!e})()}function O0(e,r,t){if(Ws())return E0.default.apply(null,arguments);var n=[null];(0,T0.default)(n).apply(n,r);var a=new((0,C0.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function fn(e){var r=typeof Ks.default=="function"?new Ks.default:void 0;return fn=function(n){if(n===null||!w0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return O0(n,arguments,_r(this).constructor)}return a.prototype=(0,k0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},fn(e)}function P0(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(v){return!r||r.intersectsNode(v)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=I0(e.startContainer,e.startOffset),o=He(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=I0(e.endContainer,e.endOffset),l=He(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function I0(e,r){var t;if(_0(e))return[e,r];var n;if(d6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(_0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function _0(e){return e.nodeType===Node.TEXT_NODE}function d6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function A0(e){var r=v6();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,pn.default)(n,arguments,o)}else a=n.apply(this,arguments);return AE(this,a)}}function v6(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Za=function(e){Ts(t,e);var r=A0(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),m6=function(e){Ts(t,e);var r=A0(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!R0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Za}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!R0(t))throw new Za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new m6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=P0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function R0(e){return e.nodeType===Node.TEXT_NODE}function N0(e,r){return Vs.apply(this,arguments)}function Vs(){return Vs=Or(zs.default.mark(function e(r,t){var n,a,o,u=arguments;return zs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??fe(r)),o=new Pr(a),c.next=5,yS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Vs.apply(this,arguments)}var Ys=y(le(),1);function M0(e){var r=Wa(e);return function(){var t=_e(Ys.default.mark(function a(o){var u,s,c,l,f,p,d,v;return Ys.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(d=m.sent,s){m.next=29;break}return v=d,m.next=26,u.chunkRangeToRange(v);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var h6=y(le(),1);var y6=y(le(),1);var C6=y(Y0(),1),O6=y(Kr(),1),k6=y(Kn(),1),I6=y(sa(),1),_6=y(ca(),1),P6=y(la(),1);async function J0(e,r){let t=await N0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function dn(e,r){let t=M0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=y(Qs()),vn=y(Qs());function ct(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return vn.COLOR_PRESETS[r]?vn.COLOR_PRESETS[r]:vn.HEX_COLOR_REGEX.test(r)?r:null}function ei(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var lt="fb-highlight",X0="fb-highlight-active",ri=new Map,mn=null;function eC(e){mn=e}function hn(e,r,t){let n=ct(t)||he.DEFAULT_COLOR;ri.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=Z0(e,r,n);a.push(o)}else{let o=j6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(Z0(c,r,n))}}return a}function Z0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return M6(e,r,u,t);let s=document.createElement("mark");s.className=lt,s.dataset.commentId=r,s.style.backgroundColor=ei(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{mn&&mn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function M6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let d=document.createElementNS(o,"g");d.setAttribute("class",lt),d.setAttribute("data-comment-id",r),d.style.cursor="pointer";for(let b=0;b<a.length;b++){let g=a[b],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",d.appendChild(O)}f&&f!==t?f.appendChild(d):t.appendChild(d);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let h=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=b=>{b.preventDefault(),b.stopPropagation(),mn&&mn(r)};return h.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",x),b.dataset.fbCommentId=r}),d}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function ti(e){ri.delete(e),document.querySelectorAll(`.${lt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function rC(){ri.clear(),document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function yn(e){document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ri.get(t)||he.DEFAULT_COLOR,o=ei(a,.55),u=ei(a,.35);n?r.classList.add(X0):r.classList.remove(X0),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Xs(e){let r=document.querySelector(`.${lt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function j6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function tC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function nC(e,r){let t=tC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Re(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var L6=`
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
`,aC=null,iC=null;function oC(e,r){iC=e,aC=r,$6()}function $6(){let e=document.createElement("style");e.textContent=L6,document.head.appendChild(e)}function uC(){let e=aC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(iC.contentSelector||"body").innerHTML,c=nC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Re(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function F6(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function Zs(e){if(!e)return"";let r=Re(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,a)=>{let o=t.length;return t.push(`<code>${a}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/__(.+?)__/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,a,o)=>{let u=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return F6(u)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${a}</a>`:a}),r=r.replace(/\x01(\d+)\x02/g,(n,a)=>t[a]),r=r.replace(/\n/g,"<br>"),r}function sC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function ec(e,r){return e.length>r?e.slice(0,r)+"...":e}function cC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var bn=null;function fC(e){bn=document.createElement("div"),bn.className="fb-toast-container",e.appendChild(bn)}function ze(e,r="success"){if(!bn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>lC(t)),t.appendChild(o)}bn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>lC(t),r==="error"?8e3:4e3)}function lC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function pC(e,r){return r<=0?0:(e%r+r)%r}var ni=y(mC());function uc(e){let r=e.closest(".fb-sidebar-content")||e.closest(".fb-sidebar")||e.parentElement;if(!r||r.scrollHeight<=r.clientHeight)return;let t=e.getBoundingClientRect(),n=r.getBoundingClientRect(),a=t.top-n.top+r.scrollTop,o=a+e.offsetHeight,u=r.scrollTop,s=u+r.clientHeight;a<u?r.scrollTo({top:a,behavior:"smooth"}):o>s&&r.scrollTo({top:o-r.clientHeight,behavior:"smooth"})}var B6=320,bC="feedback-layer-commenter",B=null,ye=null,we=null,rc=null,gC=null,tc=null,nc=null,ac=null,ic=null,xn=null,G6=null,sc=null,qC=!1,xC=[],cc=new Set,Ae=-1,gn=null,hC=!1;function U6(){hC||(hC=!0,Z6())}function Ve(){return localStorage.getItem(bC)||""}function wC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){gC=e,tc=r,nc=t,ac=n,ic=a,xn=o,G6=u,sc=s||null,U6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>ft()),document.body.appendChild(c),document.body.appendChild(B),fC(B),ye=B.querySelector(".fb-comment-list"),ye.setAttribute("role","list"),we=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(bC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>uC()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>EC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>lc());let v=B.querySelector(".fb-show-resolved-cb");v.addEventListener("change",()=>{qC=v.checked,pe(xC,cc)}),document.addEventListener("keydown",W6)}function ft(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),z6()}function lc(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),TC(),Ae=-1,document.body.focus()}function SC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function qn(){return ye?Array.from(ye.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function oc(e){let r=qn();if(r.length===0)return;e=pC(e,r.length),Ae=e,ye.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),uc(t);let n=t.closest(".fb-thread");n?.dataset.commentId&&cc.has(n.dataset.commentId)&&(yn(n.dataset.commentId),Xs(n.dataset.commentId))}function H6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),lc();return}if(!SC()){if(r==="Enter"){let t=qn();if(Ae>=0&&Ae<t.length){e.preventDefault();let a=t[Ae].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),qn().length===0)return;let n=Ae<0?0:Ae+1;oc(n);return}if(r==="k"){e.preventDefault();let t=qn();if(t.length===0)return;let n=Ae<0?t.length-1:Ae-1;oc(n);return}r==="?"&&(e.preventDefault(),EC())}}function EC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function W6(e){SC()||e.key==="s"&&(e.preventDefault(),K6())}function K6(){B.classList.contains("fb-sidebar-collapsed")?ft():lc()}function z6(){TC(),gn=H6,document.addEventListener("keydown",gn)}function TC(){gn&&(document.removeEventListener("keydown",gn),gn=null)}function CC(e){if(ft(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}rc=e,we.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=sc||he.DEFAULT_COLOR;we.innerHTML=`
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
  `;let n=t;we.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),we.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=we.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(gC({comment:u,commenter:Ve(),color:n}),we.style.display="none",rc=null)};we.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),we.querySelector(".fb-cancel-btn").addEventListener("click",()=>{we.style.display="none",rc=null}),uc(we)}function pe(e,r=new Set,t=new Map){xC=e,cc=r,Ae=-1,ye.innerHTML="";let{topLevel:n,repliesByParent:a}=sC(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),d=t.get(f.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)});let s=[...o,...u],c=qC?s:s.filter(l=>l.status!=="closed");if(s.length===0){ye.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){ye.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(yC(l,!1,f));let d=a.get(l.id)||[];for(let h of d)p.appendChild(yC(h,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",h=>{h.stopPropagation(),Q6(l.id,p,v)}),p.appendChild(v),p.addEventListener("focus",()=>{let m=qn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&oc(m)}),ye.appendChild(p)}}function yC(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Re(ec(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${Zs(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Re(e.author)}</span>
      <span class="fb-cmt-time">${cC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return Y6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(yn(e.id),Xs(e.id)),ye.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),nc&&nc(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),X6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),tc&&tc(e.id)}),a}var fc=ni.ALLOWED_REACTIONS,V6=Object.keys(fc);function Y6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=fc[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),xn&&xn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),J6(e,r,a)}),e.appendChild(a)}function J6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of V6){let s=fc[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),xn&&xn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function Q6(e,r,t){ft();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ac&&ac({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function X6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=ct(e.color)||sc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
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
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(d=>d.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;ic&&ic(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=Zs(n)})}function OC(e){let r=ye.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(ye.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),uc(r))}function Z6(){let e=document.createElement("style");e.textContent=`
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
      width: ${B6}px;
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
  `,document.head.appendChild(e)}function kC(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}function eG(e){let r=new URL(e);return r.protocol=r.protocol==="https:"?"wss:":"ws:",r.pathname="/ws",r.toString()}function pc({apiBaseUrl:e,documentId:r,onEvent:t}){let n=eG(e),a=null,o=1e3,u=null,s=!1,c=!1;function l(){if(!s){c=!1;try{a=new WebSocket(n)}catch{f();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=p=>{try{let d=JSON.parse(p.data);if(d.type==="subscribed"&&d.documentId===r){c=!0;return}c&&t(d)}catch{}},a.onclose=()=>{c=!1,s||f()},a.onerror=()=>{}}}function f(){s||(u=setTimeout(()=>{l()},o),o=Math.min(o*2,3e4))}return l(),{close(){s=!0,clearTimeout(u),a&&(a.onclose=null,a.close())}}}var Ar=null,ii=null,En=null,vc=null,I=[],Rr=null,Se=null,U=new Set,H=new Map,wn=null,ai=null;function mc(e){return I.some(r=>r.id===e.id)?!1:(I.push(e),!0)}function rG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};bc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{kC(),Ar=document.querySelector(r.contentSelector)||document.body,ii=r.documentUri||window.location.origin+window.location.pathname,En=r.documentId||null,vc=ct(r.defaultColor)||null,ai=r.apiUrl||window.location.origin,document.documentElement.dataset.remarqTheme=r.theme,wC({onSubmit:oG,onDelete:hG,onResolve:uG,onReply:sG,onEdit:cG,onReaction:fG,onColorChange:lG,defaultColor:vc}),eC(a=>{ft(),OC(a),yn(a)}),aG(),await t(),await tG();{let a=En||(I.length>0?I[0].document:null);a&&(wn=pc({apiBaseUrl:ai,documentId:a,onEvent:IC}))}window.addEventListener("beforeunload",()=>{wn&&wn.close()}),oC(r,()=>I)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function tG(){try{I=await gc(ii,En),U=await nG(I),pe(I,U,H)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function nG(e){rC();let r=new Set;H.clear();for(let t of e)if(!t.parent)try{let n=await dn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},Ar);n&&t.status!=="closed"?(hn(n,t.id,t.color),r.add(t.id),H.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),H.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function aG(){document.addEventListener("mouseup",dc),document.addEventListener("keyup",dc),document.addEventListener("touchend",dc)}function dc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!Ar.contains(r.commonAncestorContainer)){Sn();return}iG(r)},10)}function iG(e){Sn();let r=e.getBoundingClientRect();Se=document.createElement("button"),Se.className="fb-annotate-tooltip",Se.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Se.style.top=window.scrollY+r.bottom+8+"px",Se.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Rr=await J0(o,Ar),CC(Rr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};Se.addEventListener("mousedown",t),Se.addEventListener("touchstart",t),document.body.appendChild(Se)}function Sn(){Se&&(Se.remove(),Se=null)}async function oG({comment:e,commenter:r,color:t}){if(!Rr)return;let n=t||vc||null;try{let a=await ui({uri:ii,document:En,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r,color:n});mc(a);let o=await dn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),U.add(a.id),H.set(a.id,o)),pe(I,U,H),!wn&&ai&&a.document&&(wn=pc({apiBaseUrl:ai,documentId:a.document,onEvent:IC})),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Rr=null}async function oi(e){if(!e.parent)if(ti(e.id),H.delete(e.id),e.status!=="closed")try{let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r?(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r)):U.delete(e.id)}catch(r){console.warn(`[feedback-layer] Could not anchor comment ${e.id}:`,r),U.delete(e.id)}else U.delete(e.id)}async function uG(e,r){try{let n=await qc(e,r?"closed":"open"),a=I.findIndex(o=>o.id===e);a!==-1&&(I[a]=n),await oi(n),pe(I,U,H)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function sG({parent_id:e,comment:r,commenter:t}){try{let n=await ui({uri:ii,document:En,body:r,author:t,parent:e});mc(n),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function cG(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await si(e,n),o=I.findIndex(u=>u.id===e);o!==-1&&(I[o]=a),t!==void 0&&await oi(a),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function lG(e,r){try{let t=await si(e,{color:r}),n=I.findIndex(a=>a.id===e);n!==-1&&(I[n]=t),await oi(t),pe(I,U,H)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function fG(e,r){let t=Ve();if(t)try{let o=I.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await Sc(e,r,t):u=await wc(e,r,t);let s=I.findIndex(c=>c.id===e);s!==-1&&(I[s]={...I[s],reactions:u.reactions}),pe(I,U,H)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function pG(e){if(mc(e)){if(!e.parent){let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r&&(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r))}pe(I,U,H)}}async function dG(e){let r=I.findIndex(t=>t.id===e.id);r!==-1&&(I[r]=e,await oi(e),pe(I,U,H))}async function vG(e){I.some(r=>r.id===e.id)&&(ti(e.id),U.delete(e.id),H.delete(e.id),I=I.filter(r=>r.id!==e.id&&r.parent!==e.id),pe(I,U,H))}var mG={"comment:created":pG,"comment:updated":dG,"comment:deleted":vG};async function IC(e){let{type:r,comment:t}=e;if(!t)return;let n=mG[r];if(n)try{await n(t)}catch(a){console.warn(`[feedback-layer] WebSocket ${r} failed for ${t.id}:`,a)}}async function hG(e){try{await xc(e),ti(e),U.delete(e),I=I.filter(r=>r.id!==e&&r.parent!==e),pe(I,U,H)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{rG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
