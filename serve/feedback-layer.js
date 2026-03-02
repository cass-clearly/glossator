var FeedbackLayer=(()=>{var IT=Object.create;var mc=Object.defineProperty;var _T=Object.getOwnPropertyDescriptor;var PT=Object.getOwnPropertyNames;var RT=Object.getPrototypeOf,AT=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var NT=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of PT(r))!AT.call(e,a)&&a!==t&&mc(e,a,{get:()=>r[a],enumerable:!(n=_T(r,a))||n.enumerable});return e};var y=(e,r,t)=>(t=e!=null?IT(RT(e)):{},NT(r||!e||!e.__esModule?mc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((y8,wc)=>{"use strict";wc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((b8,Sc)=>{"use strict";var MT=P();Sc.exports=!MT(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((g8,Tc)=>{"use strict";var Ec=Mr(),Cc=Function.prototype,li=Cc.call,jT=Ec&&Cc.bind.bind(li,li);Tc.exports=Ec?jT:function(e){return function(){return li.apply(e,arguments)}}});var W=i((q8,Oc)=>{"use strict";var LT=N();Oc.exports=LT({}.isPrototypeOf)});var R=i((fi,kc)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};kc.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof fi=="object"&&fi)||function(){return this}()||Function("return this")()});var jr=i((x8,Rc)=>{"use strict";var $T=Mr(),Pc=Function.prototype,Ic=Pc.apply,_c=Pc.call;Rc.exports=typeof Reflect=="object"&&Reflect.apply||($T?_c.bind(Ic):function(){return _c.apply(Ic,arguments)})});var Te=i((w8,Nc)=>{"use strict";var Ac=N(),FT=Ac({}.toString),DT=Ac("".slice);Nc.exports=function(e){return DT(FT(e),8,-1)}});var dt=i((S8,Mc)=>{"use strict";var BT=Te(),GT=N();Mc.exports=function(e){if(BT(e)==="Function")return GT(e)}});var M=i((E8,jc)=>{"use strict";var pi=typeof document=="object"&&document.all;jc.exports=typeof pi>"u"&&pi!==void 0?function(e){return typeof e=="function"||e===pi}:function(e){return typeof e=="function"}});var K=i((C8,Lc)=>{"use strict";var UT=P();Lc.exports=!UT(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((T8,$c)=>{"use strict";var HT=Mr(),Cn=Function.prototype.call;$c.exports=HT?Cn.bind(Cn):function(){return Cn.apply(Cn,arguments)}});var di=i(Bc=>{"use strict";var Fc={}.propertyIsEnumerable,Dc=Object.getOwnPropertyDescriptor,WT=Dc&&!Fc.call({1:2},1);Bc.f=WT?function(r){var t=Dc(this,r);return!!t&&t.enumerable}:Fc});var Qe=i((k8,Gc)=>{"use strict";Gc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((I8,Uc)=>{"use strict";var KT=N(),zT=P(),VT=Te(),vi=Object,YT=KT("".split);Uc.exports=zT(function(){return!vi("z").propertyIsEnumerable(0)})?function(e){return VT(e)==="String"?YT(e,""):vi(e)}:vi});var lr=i((_8,Hc)=>{"use strict";Hc.exports=function(e){return e==null}});var fr=i((P8,Wc)=>{"use strict";var JT=lr(),QT=TypeError;Wc.exports=function(e){if(JT(e))throw new QT("Can't call method on "+e);return e}});var Ne=i((R8,Kc)=>{"use strict";var XT=Tn(),ZT=fr();Kc.exports=function(e){return XT(ZT(e))}});var $=i((A8,zc)=>{"use strict";var eO=M();zc.exports=function(e){return typeof e=="object"?e!==null:eO(e)}});var J=i((N8,Vc)=>{"use strict";Vc.exports={}});var z=i((M8,Jc)=>{"use strict";var mi=J(),hi=R(),rO=M(),Yc=function(e){return rO(e)?e:void 0};Jc.exports=function(e,r){return arguments.length<2?Yc(mi[e])||Yc(hi[e]):mi[e]&&mi[e][r]||hi[e]&&hi[e][r]}});var Lr=i((j8,Zc)=>{"use strict";var tO=R(),Qc=tO.navigator,Xc=Qc&&Qc.userAgent;Zc.exports=Xc?String(Xc):""});var $r=i((L8,il)=>{"use strict";var al=R(),yi=Lr(),el=al.process,rl=al.Deno,tl=el&&el.versions||rl&&rl.version,nl=tl&&tl.v8,ge,On;nl&&(ge=nl.split("."),On=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!On&&yi&&(ge=yi.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=yi.match(/Chrome\/(\d+)/),ge&&(On=+ge[1])));il.exports=On});var pr=i(($8,ul)=>{"use strict";var ol=$r(),nO=P(),aO=R(),iO=aO.String;ul.exports=!!Object.getOwnPropertySymbols&&!nO(function(){var e=Symbol("symbol detection");return!iO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ol&&ol<41})});var bi=i((F8,sl)=>{"use strict";var oO=pr();sl.exports=oO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((D8,cl)=>{"use strict";var uO=z(),sO=M(),cO=W(),lO=bi(),fO=Object;cl.exports=lO?function(e){return typeof e=="symbol"}:function(e){var r=uO("Symbol");return sO(r)&&cO(r.prototype,fO(e))}});var Xe=i((B8,ll)=>{"use strict";var pO=String;ll.exports=function(e){try{return pO(e)}catch{return"Object"}}});var D=i((G8,fl)=>{"use strict";var dO=M(),vO=Xe(),mO=TypeError;fl.exports=function(e){if(dO(e))return e;throw new mO(vO(e)+" is not a function")}});var kn=i((U8,pl)=>{"use strict";var hO=D(),yO=lr();pl.exports=function(e,r){var t=e[r];return yO(t)?void 0:hO(t)}});var vl=i((H8,dl)=>{"use strict";var gi=G(),qi=M(),xi=$(),bO=TypeError;dl.exports=function(e,r){var t,n;if(r==="string"&&qi(t=e.toString)&&!xi(n=gi(t,e))||qi(t=e.valueOf)&&!xi(n=gi(t,e))||r!=="string"&&qi(t=e.toString)&&!xi(n=gi(t,e)))return n;throw new bO("Can't convert object to primitive value")}});var re=i((W8,ml)=>{"use strict";ml.exports=!0});var bl=i((K8,yl)=>{"use strict";var hl=R(),gO=Object.defineProperty;yl.exports=function(e,r){try{gO(hl,e,{value:r,configurable:!0,writable:!0})}catch{hl[e]=r}return r}});var vt=i((z8,xl)=>{"use strict";var qO=re(),xO=R(),wO=bl(),gl="__core-js_shared__",ql=xl.exports=xO[gl]||wO(gl,{});(ql.versions||(ql.versions=[])).push({version:"3.48.0",mode:qO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((V8,Sl)=>{"use strict";var wl=vt();Sl.exports=function(e,r){return wl[e]||(wl[e]=r||{})}});var ne=i((Y8,El)=>{"use strict";var SO=fr(),EO=Object;El.exports=function(e){return EO(SO(e))}});var V=i((J8,Cl)=>{"use strict";var CO=N(),TO=ne(),OO=CO({}.hasOwnProperty);Cl.exports=Object.hasOwn||function(r,t){return OO(TO(r),t)}});var Dr=i((Q8,Tl)=>{"use strict";var kO=N(),IO=0,_O=Math.random(),PO=kO(1.1.toString);Tl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+PO(++IO+_O,36)}});var A=i((X8,kl)=>{"use strict";var RO=R(),AO=dr(),Ol=V(),NO=Dr(),MO=pr(),jO=bi(),Br=RO.Symbol,wi=AO("wks"),LO=jO?Br.for||Br:Br&&Br.withoutSetter||NO;kl.exports=function(e){return Ol(wi,e)||(wi[e]=MO&&Ol(Br,e)?Br[e]:LO("Symbol."+e)),wi[e]}});var Rl=i((Z8,Pl)=>{"use strict";var $O=G(),Il=$(),_l=Fr(),FO=kn(),DO=vl(),BO=A(),GO=TypeError,UO=BO("toPrimitive");Pl.exports=function(e,r){if(!Il(e)||_l(e))return e;var t=FO(e,UO),n;if(t){if(r===void 0&&(r="default"),n=$O(t,e,r),!Il(n)||_l(n))return n;throw new GO("Can't convert object to primitive value")}return r===void 0&&(r="number"),DO(e,r)}});var In=i((eG,Al)=>{"use strict";var HO=Rl(),WO=Fr();Al.exports=function(e){var r=HO(e,"string");return WO(r)?r:r+""}});var _n=i((rG,Ml)=>{"use strict";var KO=R(),Nl=$(),Si=KO.document,zO=Nl(Si)&&Nl(Si.createElement);Ml.exports=function(e){return zO?Si.createElement(e):{}}});var Ei=i((tG,jl)=>{"use strict";var VO=K(),YO=P(),JO=_n();jl.exports=!VO&&!YO(function(){return Object.defineProperty(JO("div"),"a",{get:function(){return 7}}).a!==7})});var mt=i($l=>{"use strict";var QO=K(),XO=G(),ZO=di(),ek=Qe(),rk=Ne(),tk=In(),nk=V(),ak=Ei(),Ll=Object.getOwnPropertyDescriptor;$l.f=QO?Ll:function(r,t){if(r=rk(r),t=tk(t),ak)try{return Ll(r,t)}catch{}if(nk(r,t))return ek(!XO(ZO.f,r,t),r[t])}});var Ci=i((aG,Fl)=>{"use strict";var ik=P(),ok=M(),uk=/#|\.prototype\./,ht=function(e,r){var t=ck[sk(e)];return t===fk?!0:t===lk?!1:ok(r)?ik(r):!!r},sk=ht.normalize=function(e){return String(e).replace(uk,".").toLowerCase()},ck=ht.data={},lk=ht.NATIVE="N",fk=ht.POLYFILL="P";Fl.exports=ht});var Q=i((iG,Bl)=>{"use strict";var Dl=dt(),pk=D(),dk=Mr(),vk=Dl(Dl.bind);Bl.exports=function(e,r){return pk(e),r===void 0?e:dk?vk(e,r):function(){return e.apply(r,arguments)}}});var Ti=i((oG,Gl)=>{"use strict";var mk=K(),hk=P();Gl.exports=mk&&hk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var ee=i((uG,Ul)=>{"use strict";var yk=$(),bk=String,gk=TypeError;Ul.exports=function(e){if(yk(e))return e;throw new gk(bk(e)+" is not an object")}});var ae=i(Wl=>{"use strict";var qk=K(),xk=Ei(),wk=Ti(),Pn=ee(),Hl=In(),Sk=TypeError,Oi=Object.defineProperty,Ek=Object.getOwnPropertyDescriptor,ki="enumerable",Ii="configurable",_i="writable";Wl.f=qk?wk?function(r,t,n){if(Pn(r),t=Hl(t),Pn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&_i in n&&!n[_i]){var a=Ek(r,t);a&&a[_i]&&(r[t]=n.value,n={configurable:Ii in n?n[Ii]:a[Ii],enumerable:ki in n?n[ki]:a[ki],writable:!1})}return Oi(r,t,n)}:Oi:function(r,t,n){if(Pn(r),t=Hl(t),Pn(n),xk)try{return Oi(r,t,n)}catch{}if("get"in n||"set"in n)throw new Sk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((cG,Kl)=>{"use strict";var Ck=K(),Tk=ae(),Ok=Qe();Kl.exports=Ck?function(e,r,t){return Tk.f(e,r,Ok(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((lG,Vl)=>{"use strict";var yt=R(),kk=jr(),Ik=dt(),_k=M(),Pk=mt().f,Rk=Ci(),Gr=J(),Ak=Q(),Ur=Oe(),zl=V();vt();var Nk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return kk(e,this,arguments)};return r.prototype=e.prototype,r};Vl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?yt:a?yt[t]:yt[t]&&yt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,d,v,h,m,x,b;for(d in r)l=Rk(n?d:t+(a?".":"#")+d,e.forced),f=!l&&u&&zl(u,d),h=s[d],f&&(e.dontCallGetSet?(b=Pk(u,d),m=b&&b.value):m=u[d]),v=f&&m?m:r[d],!(!l&&!o&&typeof h==typeof v)&&(e.bind&&f?x=Ak(v,yt):e.wrap&&f?x=Nk(v):o&&_k(v)?x=Ik(v):x=v,(e.sham||v&&v.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,d,x),o&&(p=t+"Prototype",zl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],d,v),e.real&&c&&(l||!c[d])&&Ur(c,d,v)))}});var Me=i((fG,Yl)=>{"use strict";var Mk=Te();Yl.exports=Array.isArray||function(r){return Mk(r)==="Array"}});var Rn=i((pG,Ql)=>{"use strict";var jk=A(),Lk=jk("toStringTag"),Jl={};Jl[Lk]="z";Ql.exports=String(Jl)==="[object z]"});var bt=i((dG,Xl)=>{"use strict";var $k=Rn(),Fk=M(),An=Te(),Dk=A(),Bk=Dk("toStringTag"),Gk=Object,Uk=An(function(){return arguments}())==="Arguments",Hk=function(e,r){try{return e[r]}catch{}};Xl.exports=$k?An:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Hk(r=Gk(e),Bk))=="string"?t:Uk?An(r):(n=An(r))==="Object"&&Fk(r.callee)?"Arguments":n}});var Ri=i((vG,Zl)=>{"use strict";var Wk=N(),Kk=M(),Pi=vt(),zk=Wk(Function.toString);Kk(Pi.inspectSource)||(Pi.inspectSource=function(e){return zk(e)});Zl.exports=Pi.inspectSource});var qt=i((mG,af)=>{"use strict";var Vk=N(),Yk=P(),ef=M(),Jk=bt(),Qk=z(),Xk=Ri(),rf=function(){},tf=Qk("Reflect","construct"),Ai=/^\s*(?:class|function)\b/,Zk=Vk(Ai.exec),e1=!Ai.test(rf),gt=function(r){if(!ef(r))return!1;try{return tf(rf,[],r),!0}catch{return!1}},nf=function(r){if(!ef(r))return!1;switch(Jk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return e1||!!Zk(Ai,Xk(r))}catch{return!0}};nf.sham=!0;af.exports=!tf||Yk(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?nf:gt});var uf=i((hG,of)=>{"use strict";var r1=Math.ceil,t1=Math.floor;of.exports=Math.trunc||function(r){var t=+r;return(t>0?t1:r1)(t)}});var Nn=i((yG,sf)=>{"use strict";var n1=uf();sf.exports=function(e){var r=+e;return r!==r||r===0?0:n1(r)}});var Ni=i((bG,cf)=>{"use strict";var a1=Nn(),i1=Math.max,o1=Math.min;cf.exports=function(e,r){var t=a1(e);return t<0?i1(t+r,0):o1(t,r)}});var Mi=i((gG,lf)=>{"use strict";var u1=Nn(),s1=Math.min;lf.exports=function(e){var r=u1(e);return r>0?s1(r,9007199254740991):0}});var ve=i((qG,ff)=>{"use strict";var c1=Mi();ff.exports=function(e){return c1(e.length)}});var Hr=i((xG,pf)=>{"use strict";var l1=K(),f1=ae(),p1=Qe();pf.exports=function(e,r,t){l1?f1.f(e,r,p1(0,t)):e[r]=t}});var Wr=i((wG,df)=>{"use strict";var d1=K(),v1=Me(),m1=TypeError,h1=Object.getOwnPropertyDescriptor,y1=d1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();df.exports=y1?function(e,r){if(v1(e)&&!h1(e,"length").writable)throw new m1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=i((SG,vf)=>{"use strict";var b1=P(),g1=A(),q1=$r(),x1=g1("species");vf.exports=function(e){return q1>=51||!b1(function(){var r=[],t=r.constructor={};return t[x1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((EG,mf)=>{"use strict";var w1=N();mf.exports=w1([].slice)});var bf=i(()=>{"use strict";var S1=q(),hf=Me(),E1=qt(),C1=$(),yf=Ni(),T1=ve(),O1=Ne(),k1=Hr(),I1=Wr(),_1=A(),P1=xt(),R1=vr(),A1=P1("slice"),N1=_1("species"),ji=Array,M1=Math.max;S1({target:"Array",proto:!0,forced:!A1},{slice:function(r,t){var n=O1(this),a=T1(n),o=yf(r,a),u=yf(t===void 0?a:t,a),s,c,l;if(hf(n)&&(s=n.constructor,E1(s)&&(s===ji||hf(s.prototype))?s=void 0:C1(s)&&(s=s[N1],s===null&&(s=void 0)),s===ji||s===void 0))return R1(n,o,u);for(c=new(s===void 0?ji:s)(M1(u-o,0)),l=0;o<u;o++,l++)o in n&&k1(c,l,n[o]);return I1(c,l),c}})});var se=i((OG,gf)=>{"use strict";var j1=R(),L1=J();gf.exports=function(e,r){var t=L1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=j1[e],o=a&&a.prototype;return o&&o[r]}});var xf=i((kG,qf)=>{"use strict";bf();var $1=se();qf.exports=$1("Array","slice")});var Sf=i((IG,wf)=>{"use strict";var F1=W(),D1=xf(),Li=Array.prototype;wf.exports=function(e){var r=e.slice;return e===Li||F1(Li,e)&&r===Li.slice?D1:r}});var Cf=i((_G,Ef)=>{"use strict";var B1=Sf();Ef.exports=B1});var Of=i((PG,Tf)=>{"use strict";var G1=Cf();Tf.exports=G1});var If=i((RG,kf)=>{"use strict";var U1=Of();kf.exports=U1});var $i=i((AG,_f)=>{"use strict";_f.exports=If()});var Kr=i((NG,Pf)=>{Pf.exports=$i()});var Ze=i((MG,Rf)=>{"use strict";var H1=bt(),W1=String;Rf.exports=function(e){if(H1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return W1(e)}});var jf=i((jG,Mf)=>{"use strict";var Fi=N(),K1=Nn(),z1=Ze(),V1=fr(),Y1=Fi("".charAt),Af=Fi("".charCodeAt),J1=Fi("".slice),Nf=function(e){return function(r,t){var n=z1(V1(r)),a=K1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Af(n,a),u<55296||u>56319||a+1===o||(s=Af(n,a+1))<56320||s>57343?e?Y1(n,a):u:e?J1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};Mf.exports={codeAt:Nf(!1),charAt:Nf(!0)}});var Ff=i((LG,$f)=>{"use strict";var Q1=R(),X1=M(),Lf=Q1.WeakMap;$f.exports=X1(Lf)&&/native code/.test(String(Lf))});var wt=i(($G,Bf)=>{"use strict";var Z1=dr(),eI=Dr(),Df=Z1("keys");Bf.exports=function(e){return Df[e]||(Df[e]=eI(e))}});var zr=i((FG,Gf)=>{"use strict";Gf.exports={}});var er=i((DG,Wf)=>{"use strict";var rI=Ff(),Hf=R(),tI=$(),nI=Oe(),Di=V(),Bi=vt(),aI=wt(),iI=zr(),Uf="Object already initialized",Gi=Hf.TypeError,oI=Hf.WeakMap,Mn,St,jn,uI=function(e){return jn(e)?St(e):Mn(e,{})},sI=function(e){return function(r){var t;if(!tI(r)||(t=St(r)).type!==e)throw new Gi("Incompatible receiver, "+e+" required");return t}};rI||Bi.state?(qe=Bi.state||(Bi.state=new oI),qe.get=qe.get,qe.has=qe.has,qe.set=qe.set,Mn=function(e,r){if(qe.has(e))throw new Gi(Uf);return r.facade=e,qe.set(e,r),r},St=function(e){return qe.get(e)||{}},jn=function(e){return qe.has(e)}):(mr=aI("state"),iI[mr]=!0,Mn=function(e,r){if(Di(e,mr))throw new Gi(Uf);return r.facade=e,nI(e,mr,r),r},St=function(e){return Di(e,mr)?e[mr]:{}},jn=function(e){return Di(e,mr)});var qe,mr;Wf.exports={set:Mn,get:St,has:jn,enforce:uI,getterFor:sI}});var Vf=i((BG,zf)=>{"use strict";var Ui=K(),cI=V(),Kf=Function.prototype,lI=Ui&&Object.getOwnPropertyDescriptor,Hi=cI(Kf,"name"),fI=Hi&&function(){}.name==="something",pI=Hi&&(!Ui||Ui&&lI(Kf,"name").configurable);zf.exports={EXISTS:Hi,PROPER:fI,CONFIGURABLE:pI}});var Wi=i((GG,Jf)=>{"use strict";var dI=Ne(),vI=Ni(),mI=ve(),Yf=function(e){return function(r,t,n){var a=dI(r),o=mI(a);if(o===0)return!e&&-1;var u=vI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Jf.exports={includes:Yf(!0),indexOf:Yf(!1)}});var zi=i((UG,Xf)=>{"use strict";var hI=N(),Ki=V(),yI=Ne(),bI=Wi().indexOf,gI=zr(),Qf=hI([].push);Xf.exports=function(e,r){var t=yI(e),n=0,a=[],o;for(o in t)!Ki(gI,o)&&Ki(t,o)&&Qf(a,o);for(;r.length>n;)Ki(t,o=r[n++])&&(~bI(a,o)||Qf(a,o));return a}});var Ln=i((HG,Zf)=>{"use strict";Zf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var $n=i((WG,ep)=>{"use strict";var qI=zi(),xI=Ln();ep.exports=Object.keys||function(r){return qI(r,xI)}});var Vi=i(rp=>{"use strict";var wI=K(),SI=Ti(),EI=ae(),CI=ee(),TI=Ne(),OI=$n();rp.f=wI&&!SI?Object.defineProperties:function(r,t){CI(r);for(var n=TI(t),a=OI(t),o=a.length,u=0,s;o>u;)EI.f(r,s=a[u++],n[s]);return r}});var Yi=i((zG,tp)=>{"use strict";var kI=z();tp.exports=kI("document","documentElement")});var rr=i((VG,cp)=>{"use strict";var II=ee(),_I=Vi(),np=Ln(),PI=zr(),RI=Yi(),AI=_n(),NI=wt(),ap=">",ip="<",Qi="prototype",Xi="script",up=NI("IE_PROTO"),Ji=function(){},sp=function(e){return ip+Xi+ap+e+ip+"/"+Xi+ap},op=function(e){e.write(sp("")),e.close();var r=e.parentWindow.Object;return e=null,r},MI=function(){var e=AI("iframe"),r="java"+Xi+":",t;return e.style.display="none",RI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(sp("document.F=Object")),t.close(),t.F},Fn,Dn=function(){try{Fn=new ActiveXObject("htmlfile")}catch{}Dn=typeof document<"u"?document.domain&&Fn?op(Fn):MI():op(Fn);for(var e=np.length;e--;)delete Dn[Qi][np[e]];return Dn()};PI[up]=!0;cp.exports=Object.create||function(r,t){var n;return r!==null?(Ji[Qi]=II(r),n=new Ji,Ji[Qi]=null,n[up]=r):n=Dn(),t===void 0?n:_I.f(n,t)}});var Zi=i((YG,lp)=>{"use strict";var jI=P();lp.exports=!jI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((JG,pp)=>{"use strict";var LI=V(),$I=M(),FI=ne(),DI=wt(),BI=Zi(),fp=DI("IE_PROTO"),eo=Object,GI=eo.prototype;pp.exports=BI?eo.getPrototypeOf:function(e){var r=FI(e);if(LI(r,fp))return r[fp];var t=r.constructor;return $I(t)&&r instanceof t?t.prototype:r instanceof eo?GI:null}});var je=i((QG,dp)=>{"use strict";var UI=Oe();dp.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:UI(e,r,t),e}});var ao=i((XG,hp)=>{"use strict";var HI=P(),WI=M(),KI=$(),zI=rr(),vp=Et(),VI=je(),YI=A(),JI=re(),no=YI("iterator"),mp=!1,Le,ro,to;[].keys&&(to=[].keys(),"next"in to?(ro=vp(vp(to)),ro!==Object.prototype&&(Le=ro)):mp=!0);var QI=!KI(Le)||HI(function(){var e={};return Le[no].call(e)!==e});QI?Le={}:JI&&(Le=zI(Le));WI(Le[no])||VI(Le,no,function(){return this});hp.exports={IteratorPrototype:Le,BUGGY_SAFARI_ITERATORS:mp}});var bp=i((ZG,yp)=>{"use strict";var XI=Rn(),ZI=bt();yp.exports=XI?{}.toString:function(){return"[object "+ZI(this)+"]"}});var $e=i((eU,qp)=>{"use strict";var e_=Rn(),r_=ae().f,t_=Oe(),n_=V(),a_=bp(),i_=A(),gp=i_("toStringTag");qp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(n_(a,gp)||r_(a,gp,{configurable:!0,value:r}),n&&!e_&&t_(a,"toString",a_))}});var hr=i((rU,xp)=>{"use strict";xp.exports={}});var Sp=i((tU,wp)=>{"use strict";var o_=ao().IteratorPrototype,u_=rr(),s_=Qe(),c_=$e(),l_=hr(),f_=function(){return this};wp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=u_(o_,{next:s_(+!n,t)}),c_(e,a,!1,!0),l_[a]=f_,e}});var Cp=i((nU,Ep)=>{"use strict";var p_=N(),d_=D();Ep.exports=function(e,r,t){try{return p_(d_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Op=i((aU,Tp)=>{"use strict";var v_=$();Tp.exports=function(e){return v_(e)||e===null}});var Ip=i((iU,kp)=>{"use strict";var m_=Op(),h_=String,y_=TypeError;kp.exports=function(e){if(m_(e))return e;throw new y_("Can't set "+h_(e)+" as a prototype")}});var Ct=i((oU,_p)=>{"use strict";var b_=Cp(),g_=$(),q_=fr(),x_=Ip();_p.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=b_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return q_(a),x_(o),g_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Un=i((uU,Dp)=>{"use strict";var w_=q(),S_=G(),Bn=re(),$p=Vf(),E_=M(),C_=Sp(),Pp=Et(),Rp=Ct(),T_=$e(),O_=Oe(),io=je(),k_=A(),Ap=hr(),Fp=ao(),I_=$p.PROPER,__=$p.CONFIGURABLE,Np=Fp.IteratorPrototype,Gn=Fp.BUGGY_SAFARI_ITERATORS,Tt=k_("iterator"),Mp="keys",Ot="values",jp="entries",Lp=function(){return this};Dp.exports=function(e,r,t,n,a,o,u){C_(t,r,n);var s=function(b){if(b===a&&d)return d;if(!Gn&&b&&b in f)return f[b];switch(b){case Mp:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case jp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],d=!Gn&&p||s(a),v=r==="Array"&&f.entries||p,h,m,x;if(v&&(h=Pp(v.call(new e)),h!==Object.prototype&&h.next&&(!Bn&&Pp(h)!==Np&&(Rp?Rp(h,Np):E_(h[Tt])||io(h,Tt,Lp)),T_(h,c,!0,!0),Bn&&(Ap[c]=Lp))),I_&&a===Ot&&p&&p.name!==Ot&&(!Bn&&__?O_(f,"name",Ot):(l=!0,d=function(){return S_(p,this)})),a)if(m={values:s(Ot),keys:o?d:s(Mp),entries:s(jp)},u)for(x in m)(Gn||l||!(x in f))&&io(f,x,m[x]);else w_({target:r,proto:!0,forced:Gn||l},m);return(!Bn||u)&&f[Tt]!==d&&io(f,Tt,d,{name:a}),Ap[r]=d,m}});var Hn=i((sU,Bp)=>{"use strict";Bp.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var P_=jf().charAt,R_=Ze(),Up=er(),A_=Un(),Gp=Hn(),Hp="String Iterator",N_=Up.set,M_=Up.getterFor(Hp);A_(String,"String",function(e){N_(this,{type:Hp,string:R_(e),index:0})},function(){var r=M_(this),t=r.string,n=r.index,a;return n>=t.length?Gp(void 0,!0):(a=P_(t,n),r.index+=a.length,Gp(a,!1))})});var oo=i((fU,Kp)=>{"use strict";var j_=G(),Wp=ee(),L_=kn();Kp.exports=function(e,r,t){var n,a;Wp(e);try{if(n=L_(e,"return"),!n){if(r==="throw")throw t;return t}n=j_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Wp(n),t}});var Vp=i((pU,zp)=>{"use strict";var $_=ee(),F_=oo();zp.exports=function(e,r,t,n){try{return n?r($_(t)[0],t[1]):r(t)}catch(a){F_(e,"throw",a)}}});var uo=i((dU,Yp)=>{"use strict";var D_=A(),B_=hr(),G_=D_("iterator"),U_=Array.prototype;Yp.exports=function(e){return e!==void 0&&(B_.Array===e||U_[G_]===e)}});var kt=i((vU,Qp)=>{"use strict";var H_=bt(),Jp=kn(),W_=lr(),K_=hr(),z_=A(),V_=z_("iterator");Qp.exports=function(e){if(!W_(e))return Jp(e,V_)||Jp(e,"@@iterator")||K_[H_(e)]}});var Wn=i((mU,Xp)=>{"use strict";var Y_=G(),J_=D(),Q_=ee(),X_=Xe(),Z_=kt(),eP=TypeError;Xp.exports=function(e,r){var t=arguments.length<2?Z_(e):r;if(J_(t))return Q_(Y_(t,e));throw new eP(X_(e)+" is not iterable")}});var td=i((hU,rd)=>{"use strict";var rP=Q(),tP=G(),nP=ne(),aP=Vp(),iP=uo(),oP=qt(),uP=ve(),Zp=Hr(),sP=Wr(),cP=Wn(),lP=kt(),ed=Array;rd.exports=function(r){var t=nP(r),n=oP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=rP(o,a>2?arguments[2]:void 0));var s=lP(t),c=0,l,f,p,d,v,h;if(s&&!(this===ed&&iP(s)))for(f=n?new this:[],d=cP(t,s),v=d.next;!(p=tP(v,d)).done;c++)h=u?aP(d,o,[p.value,c],!0):p.value,Zp(f,c,h);else for(l=uP(t),f=n?new this(l):ed(l);l>c;c++)h=u?o(t[c],c):t[c],Zp(f,c,h);return sP(f,c),f}});var co=i((yU,od)=>{"use strict";var fP=A(),ad=fP("iterator"),id=!1;try{nd=0,so={next:function(){return{done:!!nd++}},return:function(){id=!0}},so[ad]=function(){return this},Array.from(so,function(){throw 2})}catch{}var nd,so;od.exports=function(e,r){try{if(!r&&!id)return!1}catch{return!1}var t=!1;try{var n={};n[ad]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var ud=i(()=>{"use strict";var pP=q(),dP=td(),vP=co(),mP=!vP(function(e){Array.from(e)});pP({target:"Array",stat:!0,forced:mP},{from:dP})});var cd=i((qU,sd)=>{"use strict";yr();ud();var hP=J();sd.exports=hP.Array.from});var fd=i((xU,ld)=>{"use strict";var yP=cd();ld.exports=yP});var dd=i((wU,pd)=>{"use strict";var bP=fd();pd.exports=bP});var md=i((SU,vd)=>{"use strict";var gP=dd();vd.exports=gP});var lo=i((EU,hd)=>{"use strict";hd.exports=md()});var Kn=i((CU,yd)=>{yd.exports=lo()});var It=i((TU,bd)=>{"use strict";var qP=TypeError,xP=9007199254740991;bd.exports=function(e){if(e>xP)throw qP("Maximum allowed index exceeded");return e}});var wd=i((OU,xd)=>{"use strict";var gd=Me(),wP=qt(),SP=$(),EP=A(),CP=EP("species"),qd=Array;xd.exports=function(e){var r;return gd(e)&&(r=e.constructor,wP(r)&&(r===qd||gd(r.prototype))?r=void 0:SP(r)&&(r=r[CP],r===null&&(r=void 0))),r===void 0?qd:r}});var zn=i((kU,Sd)=>{"use strict";var TP=wd();Sd.exports=function(e,r){return new(TP(e))(r===0?0:r)}});var fo=i(()=>{"use strict";var OP=q(),kP=P(),IP=Me(),_P=$(),PP=ne(),RP=ve(),Ed=It(),Cd=Hr(),AP=Wr(),NP=zn(),MP=xt(),jP=A(),LP=$r(),Td=jP("isConcatSpreadable"),$P=LP>=51||!kP(function(){var e=[];return e[Td]=!1,e.concat()[0]!==e}),FP=function(e){if(!_P(e))return!1;var r=e[Td];return r!==void 0?!!r:IP(e)},DP=!$P||!MP("concat");OP({target:"Array",proto:!0,arity:1,forced:DP},{concat:function(r){var t=PP(this),n=NP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],FP(l))for(c=RP(l),Ed(a+c),u=0;u<c;u++,a++)u in l&&Cd(n,a,l[u]);else Ed(a+1),Cd(n,a++,l);return AP(n,a),n}})});var _t=i(()=>{});var Pt=i(Od=>{"use strict";var BP=zi(),GP=Ln(),UP=GP.concat("length","prototype");Od.f=Object.getOwnPropertyNames||function(r){return BP(r,UP)}});var po=i((NU,_d)=>{"use strict";var HP=Te(),WP=Ne(),kd=Pt().f,KP=vr(),Id=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],zP=function(e){try{return kd(e)}catch{return KP(Id)}};_d.exports.f=function(r){return Id&&HP(r)==="Window"?zP(r):kd(WP(r))}});var Vn=i(Pd=>{"use strict";Pd.f=Object.getOwnPropertySymbols});var Yn=i((jU,Rd)=>{"use strict";var VP=ae();Rd.exports=function(e,r,t){return VP.f(e,r,t)}});var Vr=i(Ad=>{"use strict";var YP=A();Ad.f=YP});var j=i(($U,Md)=>{"use strict";var Nd=J(),JP=V(),QP=Vr(),XP=ae().f;Md.exports=function(e){var r=Nd.Symbol||(Nd.Symbol={});JP(r,e)||XP(r,e,{value:QP.f(e)})}});var vo=i((FU,jd)=>{"use strict";var ZP=G(),eR=z(),rR=A(),tR=je();jd.exports=function(){var e=eR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=rR("toPrimitive");r&&!r[n]&&tR(r,n,function(a){return ZP(t,this)},{arity:1})}});var Rt=i((DU,$d)=>{"use strict";var nR=Q(),aR=Tn(),iR=ne(),oR=ve(),Ld=zn(),mo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=iR(c),d=aR(p),v=oR(d),h=nR(l,f),m=0,x=0,b=r?Ld(c,v):t||u?Ld(c,0):void 0,g,O;v>m;m++)if((s||m in d)&&(g=d[m],O=h(g,m,p),e))if(r)mo(b,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:mo(b,x++,g)}else switch(e){case 4:return!1;case 7:mo(b,x++,g)}return o?-1:n||a?a:b}};$d.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var rv=i(()=>{"use strict";var Jn=q(),Mt=R(),Eo=G(),uR=N(),sR=re(),Yr=K(),Jr=pr(),cR=P(),Y=V(),lR=W(),go=ee(),Qn=Ne(),Co=In(),fR=Ze(),qo=Qe(),Qr=rr(),Bd=$n(),pR=Pt(),Gd=po(),dR=Vn(),Ud=mt(),Hd=ae(),vR=Vi(),Wd=di(),ho=je(),mR=Yn(),To=dr(),hR=wt(),Kd=zr(),Fd=Dr(),yR=A(),bR=Vr(),gR=j(),qR=vo(),xR=$e(),zd=er(),Xn=Rt().forEach,ie=hR("hidden"),Zn="Symbol",Nt="prototype",wR=zd.set,Dd=zd.getterFor(Zn),me=Object[Nt],br=Mt.Symbol,At=br&&br[Nt],SR=Mt.RangeError,ER=Mt.TypeError,yo=Mt.QObject,Vd=Ud.f,gr=Hd.f,Yd=Gd.f,CR=Wd.f,Jd=uR([].push),Fe=To("symbols"),jt=To("op-symbols"),TR=To("wks"),xo=!yo||!yo[Nt]||!yo[Nt].findChild,Qd=function(e,r,t){var n=Vd(me,r);n&&delete me[r],gr(e,r,t),n&&e!==me&&gr(me,r,n)},wo=Yr&&cR(function(){return Qr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?Qd:gr,bo=function(e,r){var t=Fe[e]=Qr(At);return wR(t,{type:Zn,tag:e,description:r}),Yr||(t.description=r),t},ea=function(r,t,n){r===me&&ea(jt,t,n),go(r);var a=Co(t);return go(n),Y(Fe,a)?(n.enumerable?(Y(r,ie)&&r[ie][a]&&(r[ie][a]=!1),n=Qr(n,{enumerable:qo(0,!1)})):(Y(r,ie)||gr(r,ie,qo(1,Qr(null))),r[ie][a]=!0),wo(r,a,n)):gr(r,a,n)},Oo=function(r,t){go(r);var n=Qn(t),a=Bd(n).concat(ev(n));return Xn(a,function(o){(!Yr||Eo(So,n,o))&&ea(r,o,n[o])}),r},OR=function(r,t){return t===void 0?Qr(r):Oo(Qr(r),t)},So=function(r){var t=Co(r),n=Eo(CR,this,t);return this===me&&Y(Fe,t)&&!Y(jt,t)?!1:n||!Y(this,t)||!Y(Fe,t)||Y(this,ie)&&this[ie][t]?n:!0},Xd=function(r,t){var n=Qn(r),a=Co(t);if(!(n===me&&Y(Fe,a)&&!Y(jt,a))){var o=Vd(n,a);return o&&Y(Fe,a)&&!(Y(n,ie)&&n[ie][a])&&(o.enumerable=!0),o}},Zd=function(r){var t=Yd(Qn(r)),n=[];return Xn(t,function(a){!Y(Fe,a)&&!Y(Kd,a)&&Jd(n,a)}),n},ev=function(e){var r=e===me,t=Yd(r?jt:Qn(e)),n=[];return Xn(t,function(a){Y(Fe,a)&&(!r||Y(me,a))&&Jd(n,Fe[a])}),n};Jr||(br=function(){if(lR(At,this))throw new ER("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:fR(arguments[0]),t=Fd(r),n=function(a){var o=this===void 0?Mt:this;o===me&&Eo(n,jt,a),Y(o,ie)&&Y(o[ie],t)&&(o[ie][t]=!1);var u=qo(1,a);try{wo(o,t,u)}catch(s){if(!(s instanceof SR))throw s;Qd(o,t,u)}};return Yr&&xo&&wo(me,t,{configurable:!0,set:n}),bo(t,r)},At=br[Nt],ho(At,"toString",function(){return Dd(this).tag}),ho(br,"withoutSetter",function(e){return bo(Fd(e),e)}),Wd.f=So,Hd.f=ea,vR.f=Oo,Ud.f=Xd,pR.f=Gd.f=Zd,dR.f=ev,bR.f=function(e){return bo(yR(e),e)},Yr&&(mR(At,"description",{configurable:!0,get:function(){return Dd(this).description}}),sR||ho(me,"propertyIsEnumerable",So,{unsafe:!0})));Jn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:br});Xn(Bd(TR),function(e){gR(e)});Jn({target:Zn,stat:!0,forced:!Jr},{useSetter:function(){xo=!0},useSimple:function(){xo=!1}});Jn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:OR,defineProperty:ea,defineProperties:Oo,getOwnPropertyDescriptor:Xd});Jn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:Zd});qR();xR(br,Zn);Kd[ie]=!0});var ko=i((UU,tv)=>{"use strict";var kR=pr();tv.exports=kR&&!!Symbol.for&&!!Symbol.keyFor});var av=i(()=>{"use strict";var IR=q(),_R=z(),PR=V(),RR=Ze(),nv=dr(),AR=ko(),Io=nv("string-to-symbol-registry"),NR=nv("symbol-to-string-registry");IR({target:"Symbol",stat:!0,forced:!AR},{for:function(e){var r=RR(e);if(PR(Io,r))return Io[r];var t=_R("Symbol")(r);return Io[r]=t,NR[t]=r,t}})});var ov=i(()=>{"use strict";var MR=q(),jR=V(),LR=Fr(),$R=Xe(),FR=dr(),DR=ko(),iv=FR("symbol-to-string-registry");MR({target:"Symbol",stat:!0,forced:!DR},{keyFor:function(r){if(!LR(r))throw new TypeError($R(r)+" is not a symbol");if(jR(iv,r))return iv[r]}})});var sv=i((VU,uv)=>{"use strict";var BR=$(),GR=er().get;uv.exports=function(r){if(!BR(r))return!1;var t=GR(r);return!!t&&t.type==="RawJSON"}});var dv=i((YU,pv)=>{"use strict";var _o=N(),UR=V(),ra=SyntaxError,HR=parseInt,WR=String.fromCharCode,KR=_o("".charAt),cv=_o("".slice),lv=_o(/./.exec),fv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},zR=/^[\da-f]{4}$/i,VR=/^[\u0000-\u001F]$/;pv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=KR(e,r);if(a==="\\"){var o=cv(e,r,r+2);if(UR(fv,o))n+=fv[o],r+=2;else if(o==="\\u"){r+=2;var u=cv(e,r,r+4);if(!lv(zR,u))throw new ra("Bad Unicode escape at: "+r);n+=WR(HR(u,16)),r+=4}else throw new ra('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(lv(VR,a))throw new ra("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ra("Unterminated string at: "+r);return{value:n,end:r}}});var mv=i((JU,vv)=>{"use strict";var YR=P();vv.exports=!YR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Iv=i(()=>{"use strict";var JR=q(),Sv=z(),QR=jr(),Ev=G(),qr=N(),Cv=P(),hv=Me(),na=M(),XR=sv(),yv=Fr(),bv=Te(),ZR=Ze(),eA=vr(),rA=dv(),tA=Dr(),nA=pr(),Po=mv(),Tv=String,nr=Sv("JSON","stringify"),ta=qr(/./.exec),Ao=qr("".charAt),aA=qr("".charCodeAt),iA=qr("".replace),Ro=qr("".slice),No=qr([].push),oA=qr(1.1.toString),uA=/[\uD800-\uDFFF]/g,gv=/^[\uD800-\uDBFF]$/,qv=/^[\uDC00-\uDFFF]$/,Mo=tA(),xv=Mo.length,Ov=!nA||Cv(function(){var e=Sv("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),wv=Cv(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),sA=Ov?function(e,r){var t=eA(arguments),n=kv(r);if(!(!na(n)&&(e===void 0||yv(e))))return t[1]=function(a,o){if(na(n)&&(o=Ev(n,this,Tv(a),o)),!yv(o))return o},QR(nr,null,t)}:nr,cA=function(e,r,t){var n=Ao(t,r-1),a=Ao(t,r+1);return ta(gv,e)&&!ta(qv,a)||ta(qv,e)&&!ta(gv,n)?"\\u"+oA(aA(e,0),16):e},kv=function(e){if(na(e))return e;if(hv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?No(t,a):(typeof a=="number"||bv(a)==="Number"||bv(a)==="String")&&No(t,ZR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(hv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&JR({target:"JSON",stat:!0,arity:3,forced:Ov||wv||!Po},{stringify:function(r,t,n){var a=kv(t),o=[],u=sA(r,function(v,h){var m=na(a)?Ev(a,this,Tv(v),h):h;return!Po&&XR(m)?Mo+(No(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(wv&&(u=iA(u,uA,cA)),Po))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Ao(u,l);if(f==='"'){var p=rA(u,++l).end-1,d=Ro(u,l,p);s+=Ro(d,0,xv)===Mo?o[Ro(d,xv)]:'"'+d+'"',l=p}else s+=f}return s}})});var Pv=i(()=>{"use strict";var lA=q(),fA=pr(),pA=P(),_v=Vn(),dA=ne(),vA=!fA||pA(function(){_v.f(1)});lA({target:"Object",stat:!0,forced:vA},{getOwnPropertySymbols:function(r){var t=_v.f;return t?t(dA(r)):[]}})});var Rv=i(()=>{"use strict";rv();av();ov();Iv();Pv()});var jo=i(()=>{"use strict";var mA=j();mA("asyncDispose")});var Lo=i(()=>{"use strict";var hA=j();hA("asyncIterator")});var Av=i(()=>{});var $o=i(()=>{"use strict";var yA=j();yA("dispose")});var Nv=i(()=>{"use strict";var bA=j();bA("hasInstance")});var Mv=i(()=>{"use strict";var gA=j();gA("isConcatSpreadable")});var Fo=i(()=>{"use strict";var qA=j();qA("iterator")});var jv=i(()=>{"use strict";var xA=j();xA("match")});var Lv=i(()=>{"use strict";var wA=j();wA("matchAll")});var $v=i(()=>{"use strict";var SA=j();SA("replace")});var Fv=i(()=>{"use strict";var EA=j();EA("search")});var Dv=i(()=>{"use strict";var CA=j();CA("species")});var Bv=i(()=>{"use strict";var TA=j();TA("split")});var Do=i(()=>{"use strict";var OA=j(),kA=vo();OA("toPrimitive");kA()});var Gv=i(()=>{"use strict";var IA=z(),_A=j(),PA=$e();_A("toStringTag");PA(IA("Symbol"),"Symbol")});var Uv=i(()=>{"use strict";var RA=j();RA("unscopables")});var Hv=i(()=>{"use strict";var AA=R(),NA=$e();NA(AA.JSON,"JSON",!0)});var Wv=i(()=>{});var Kv=i(()=>{});var Vv=i((BH,zv)=>{"use strict";fo();_t();Rv();jo();Lo();Av();$o();Nv();Mv();Fo();jv();Lv();$v();Fv();Dv();Bv();Do();Gv();Uv();Hv();Wv();Kv();var MA=J();zv.exports=MA.Symbol});var Bo=i((GH,Yv)=>{"use strict";Yv.exports=function(){}});var xr=i((UH,em)=>{"use strict";var jA=Ne(),Go=Bo(),Jv=hr(),Xv=er(),LA=ae().f,$A=Un(),aa=Hn(),FA=re(),DA=K(),Zv="Array Iterator",BA=Xv.set,GA=Xv.getterFor(Zv);em.exports=$A(Array,"Array",function(e,r){BA(this,{type:Zv,target:jA(e),index:0,kind:r})},function(){var e=GA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,aa(void 0,!0);switch(e.kind){case"keys":return aa(t,!1);case"values":return aa(r[t],!1)}return aa([t,r[t]],!1)},"values");var Qv=Jv.Arguments=Jv.Array;Go("keys");Go("values");Go("entries");if(!FA&&DA&&Qv.name!=="values")try{LA(Qv,"name",{value:"values"})}catch{}});var tm=i((HH,rm)=>{"use strict";rm.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var UA=tm(),HA=R(),WA=$e(),nm=hr();for(ia in UA)WA(HA[ia],ia),nm[ia]=nm.Array;var ia});var im=i((zH,am)=>{"use strict";var KA=Vv();wr();am.exports=KA});var sm=i(()=>{"use strict";var zA=A(),VA=ae().f,om=zA("metadata"),um=Function.prototype;um[om]===void 0&&VA(um,om,{value:null})});var cm=i(()=>{"use strict";jo()});var lm=i(()=>{"use strict";$o()});var fm=i(()=>{"use strict";var YA=j();YA("metadata")});var dm=i((tW,pm)=>{"use strict";var JA=im();sm();cm();lm();fm();pm.exports=JA});var Ho=i((nW,vm)=>{"use strict";var QA=z(),XA=N(),Uo=QA("Symbol"),ZA=Uo.keyFor,e2=XA(Uo.prototype.valueOf);vm.exports=Uo.isRegisteredSymbol||function(r){try{return ZA(e2(r))!==void 0}catch{return!1}}});var mm=i(()=>{"use strict";var r2=q(),t2=Ho();r2({target:"Symbol",stat:!0},{isRegisteredSymbol:t2})});var zo=i((oW,xm)=>{"use strict";var n2=dr(),gm=z(),a2=N(),i2=Fr(),o2=A(),ua=gm("Symbol"),hm=ua.isWellKnownSymbol,qm=gm("Object","getOwnPropertyNames"),u2=a2(ua.prototype.valueOf),ym=n2("wks");for(oa=0,Wo=qm(ua),bm=Wo.length;oa<bm;oa++)try{Ko=Wo[oa],i2(ua[Ko])&&o2(Ko)}catch{}var Ko,oa,Wo,bm;xm.exports=function(r){if(hm&&hm(r))return!0;try{for(var t=u2(r),n=0,a=qm(ym),o=a.length;n<o;n++)if(ym[a[n]]==t)return!0}catch{}return!1}});var wm=i(()=>{"use strict";var s2=q(),c2=zo();s2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:c2})});var Sm=i(()=>{"use strict";var l2=j();l2("customMatcher")});var Em=i(()=>{"use strict";var f2=j();f2("observable")});var Cm=i(()=>{"use strict";var p2=q(),d2=Ho();p2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:d2})});var Tm=i(()=>{"use strict";var v2=q(),m2=zo();v2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:m2})});var Om=i(()=>{"use strict";var h2=j();h2("matcher")});var km=i(()=>{"use strict";var y2=j();y2("metadataKey")});var Im=i(()=>{"use strict";var b2=j();b2("patternMatch")});var _m=i(()=>{"use strict";var g2=j();g2("replaceAll")});var Rm=i((CW,Pm)=>{"use strict";var q2=dm();mm();wm();Sm();Em();Cm();Tm();Om();km();Im();_m();Pm.exports=q2});var ke=i((TW,Am)=>{"use strict";Am.exports=Rm()});var sa=i((OW,Nm)=>{Nm.exports=ke()});var jm=i((kW,Mm)=>{"use strict";xr();yr();var x2=kt();Mm.exports=x2});var $m=i((IW,Lm)=>{"use strict";var w2=jm();wr();Lm.exports=w2});var Dm=i((_W,Fm)=>{"use strict";var S2=$m();Fm.exports=S2});var Gm=i((PW,Bm)=>{"use strict";var E2=Dm();Bm.exports=E2});var Vo=i((RW,Um)=>{"use strict";Um.exports=Gm()});var ca=i((AW,Hm)=>{Hm.exports=Vo()});var Km=i((NW,Wm)=>{"use strict";xr();yr();var C2=Wn();Wm.exports=C2});var Vm=i((MW,zm)=>{"use strict";var T2=Km();wr();zm.exports=T2});var Jm=i((jW,Ym)=>{"use strict";var O2=Vm();Ym.exports=O2});var Xm=i((LW,Qm)=>{"use strict";var k2=Jm();Qm.exports=k2});var eh=i(($W,Zm)=>{"use strict";Zm.exports=Xm()});var la=i((FW,rh)=>{rh.exports=eh()});var nh=i((DW,th)=>{"use strict";var I2=z(),_2=N(),P2=Pt(),R2=Vn(),A2=ee(),N2=_2([].concat);th.exports=I2("Reflect","ownKeys")||function(r){var t=P2.f(A2(r)),n=R2.f;return n?N2(t,n(r)):t}});var oh=i((BW,ih)=>{"use strict";var ah=V(),M2=nh(),j2=mt(),L2=ae();ih.exports=function(e,r,t){for(var n=M2(r),a=L2.f,o=j2.f,u=0;u<n.length;u++){var s=n[u];!ah(e,s)&&!(t&&ah(t,s))&&a(e,s,o(r,s))}}});var sh=i((GW,uh)=>{"use strict";var $2=$(),F2=Oe();uh.exports=function(e,r){$2(r)&&"cause"in r&&F2(e,"cause",r.cause)}});var ph=i((UW,fh)=>{"use strict";var D2=N(),ch=Error,B2=D2("".replace),G2=function(e){return String(new ch(e).stack)}("zxcasd"),lh=/\n\s*at [^:]*:[^\n]*/,U2=lh.test(G2);fh.exports=function(e,r){if(U2&&typeof e=="string"&&!ch.prepareStackTrace)for(;r--;)e=B2(e,lh,"");return e}});var vh=i((HW,dh)=>{"use strict";var H2=P(),W2=Qe();dh.exports=!H2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",W2(1,7)),e.stack!==7):!0})});var yh=i((WW,hh)=>{"use strict";var K2=Oe(),z2=ph(),V2=vh(),mh=Error.captureStackTrace;hh.exports=function(e,r,t,n){V2&&(mh?mh(e,r):K2(e,"stack",z2(t,n)))}});var he=i((KW,xh)=>{"use strict";var Y2=Q(),J2=G(),Q2=ee(),X2=Xe(),Z2=uo(),eN=ve(),bh=W(),rN=Wn(),tN=kt(),gh=oo(),nN=TypeError,fa=function(e,r){this.stopped=e,this.result=r},qh=fa.prototype;xh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=Y2(r,n),l,f,p,d,v,h,m,x=function(g){return l&&gh(l,"normal"),new fa(!0,g)},b=function(g){return a?(Q2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=tN(e),!f)throw new nN(X2(e)+" is not iterable");if(Z2(f)){for(p=0,d=eN(e);d>p;p++)if(v=b(e[p]),v&&bh(qh,v))return v;return new fa(!1)}l=rN(e,f)}for(h=o?e.next:l.next;!(m=J2(h,l)).done;){try{v=b(m.value)}catch(g){gh(l,"throw",g)}if(typeof v=="object"&&v&&bh(qh,v))return v}return new fa(!1)}});var Sh=i((zW,wh)=>{"use strict";var aN=Ze();wh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:aN(e)}});var Ch=i(()=>{"use strict";var iN=q(),oN=W(),uN=Et(),pa=Ct(),sN=oh(),Eh=rr(),Yo=Oe(),Jo=Qe(),cN=sh(),lN=yh(),fN=he(),pN=Sh(),dN=A(),vN=dN("toStringTag"),da=Error,mN=[].push,Xr=function(r,t){var n=oN(Qo,this),a;pa?a=pa(new da,n?uN(this):Qo):(a=n?this:Eh(Qo),Yo(a,vN,"Error")),t!==void 0&&Yo(a,"message",pN(t)),lN(a,Xr,a.stack,1),arguments.length>2&&cN(a,arguments[2]);var o=[];return fN(r,mN,{that:o}),Yo(a,"errors",o),a};pa?pa(Xr,da):sN(Xr,da,{name:!0});var Qo=Xr.prototype=Eh(da.prototype,{constructor:Jo(1,Xr),message:Jo(1,""),name:Jo(1,"AggregateError")});iN({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Xo=i(()=>{"use strict";Ch()});var Zo=i((XW,Th)=>{"use strict";var Lt=R(),hN=Lr(),yN=Te(),va=function(e){return hN.slice(0,e.length)===e};Th.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":yN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var $t=i((ZW,Oh)=>{"use strict";var bN=Zo();Oh.exports=bN==="NODE"});var eu=i((eK,Ih)=>{"use strict";var gN=z(),qN=Yn(),xN=A(),wN=K(),kh=xN("species");Ih.exports=function(e){var r=gN(e);wN&&r&&!r[kh]&&qN(r,kh,{configurable:!0,get:function(){return this}})}});var ma=i((rK,_h)=>{"use strict";var SN=W(),EN=TypeError;_h.exports=function(e,r){if(SN(r,e))return e;throw new EN("Incorrect invocation")}});var ru=i((tK,Ph)=>{"use strict";var CN=qt(),TN=Xe(),ON=TypeError;Ph.exports=function(e){if(CN(e))return e;throw new ON(TN(e)+" is not a constructor")}});var tu=i((nK,Ah)=>{"use strict";var Rh=ee(),kN=ru(),IN=lr(),_N=A(),PN=_N("species");Ah.exports=function(e,r){var t=Rh(e).constructor,n;return t===void 0||IN(n=Rh(t)[PN])?r:kN(n)}});var Mh=i((aK,Nh)=>{"use strict";var RN=TypeError;Nh.exports=function(e,r){if(e<r)throw new RN("Not enough arguments");return e}});var nu=i((iK,jh)=>{"use strict";var AN=Lr();jh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(AN)});var pu=i((oK,Wh)=>{"use strict";var ce=R(),NN=jr(),MN=Q(),Lh=M(),jN=V(),Hh=P(),$h=Yi(),LN=vr(),Fh=_n(),$N=Mh(),FN=nu(),DN=$t(),cu=ce.setImmediate,lu=ce.clearImmediate,BN=ce.process,au=ce.Dispatch,GN=ce.Function,Dh=ce.MessageChannel,UN=ce.String,iu=0,Ft={},Bh="onreadystatechange",Dt,Sr,ou,uu;Hh(function(){Dt=ce.location});var fu=function(e){if(jN(Ft,e)){var r=Ft[e];delete Ft[e],r()}},su=function(e){return function(){fu(e)}},Gh=function(e){fu(e.data)},Uh=function(e){ce.postMessage(UN(e),Dt.protocol+"//"+Dt.host)};(!cu||!lu)&&(cu=function(r){$N(arguments.length,1);var t=Lh(r)?r:GN(r),n=LN(arguments,1);return Ft[++iu]=function(){NN(t,void 0,n)},Sr(iu),iu},lu=function(r){delete Ft[r]},DN?Sr=function(e){BN.nextTick(su(e))}:au&&au.now?Sr=function(e){au.now(su(e))}:Dh&&!FN?(ou=new Dh,uu=ou.port2,ou.port1.onmessage=Gh,Sr=MN(uu.postMessage,uu)):ce.addEventListener&&Lh(ce.postMessage)&&!ce.importScripts&&Dt&&Dt.protocol!=="file:"&&!Hh(Uh)?(Sr=Uh,ce.addEventListener("message",Gh,!1)):Bh in Fh("script")?Sr=function(e){$h.appendChild(Fh("script"))[Bh]=function(){$h.removeChild(this),fu(e)}}:Sr=function(e){setTimeout(su(e),0)});Wh.exports={set:cu,clear:lu}});var Vh=i((uK,zh)=>{"use strict";var Kh=R(),HN=K(),WN=Object.getOwnPropertyDescriptor;zh.exports=function(e){if(!HN)return Kh[e];var r=WN(Kh,e);return r&&r.value}});var du=i((sK,Jh)=>{"use strict";var Yh=function(){this.head=null,this.tail=null};Yh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Jh.exports=Yh});var Xh=i((cK,Qh)=>{"use strict";var KN=Lr();Qh.exports=/ipad|iphone|ipod/i.test(KN)&&typeof Pebble<"u"});var ey=i((lK,Zh)=>{"use strict";var zN=Lr();Zh.exports=/web0s(?!.*chrome)/i.test(zN)});var uy=i((fK,oy)=>{"use strict";var et=R(),VN=Vh(),ry=Q(),vu=pu().set,YN=du(),JN=nu(),QN=Xh(),XN=ey(),mu=$t(),ty=et.MutationObserver||et.WebKitMutationObserver,ny=et.document,ay=et.process,ha=et.Promise,bu=VN("queueMicrotask"),Zr,hu,yu,ya,iy;bu||(Bt=new YN,Gt=function(){var e,r;for(mu&&(e=ay.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Zr(),t}e&&e.enter()},!JN&&!mu&&!XN&&ty&&ny?(hu=!0,yu=ny.createTextNode(""),new ty(Gt).observe(yu,{characterData:!0}),Zr=function(){yu.data=hu=!hu}):!QN&&ha&&ha.resolve?(ya=ha.resolve(void 0),ya.constructor=ha,iy=ry(ya.then,ya),Zr=function(){iy(Gt)}):mu?Zr=function(){ay.nextTick(Gt)}:(vu=ry(vu,et),Zr=function(){vu(Gt)}),bu=function(e){Bt.head||Zr(),Bt.add(e)});var Bt,Gt;oy.exports=bu});var cy=i((pK,sy)=>{"use strict";sy.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Er=i((dK,ly)=>{"use strict";ly.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((vK,fy)=>{"use strict";var ZN=R();fy.exports=ZN.Promise});var rt=i((mK,my)=>{"use strict";var eM=R(),Ut=Cr(),rM=M(),tM=Ci(),nM=Ri(),aM=A(),py=Zo(),iM=re(),gu=$r(),dy=Ut&&Ut.prototype,oM=aM("species"),qu=!1,vy=rM(eM.PromiseRejectionEvent),uM=tM("Promise",function(){var e=nM(Ut),r=e!==String(Ut);if(!r&&gu===66||iM&&!(dy.catch&&dy.finally))return!0;if(!gu||gu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[oM]=n,qu=t.then(function(){})instanceof n,!qu)return!0}return!r&&(py==="BROWSER"||py==="DENO")&&!vy});my.exports={CONSTRUCTOR:uM,REJECTION_EVENT:vy,SUBCLASSING:qu}});var Ie=i((hK,yy)=>{"use strict";var hy=D(),sM=TypeError,cM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new sM("Bad Promise constructor");r=n,t=a}),this.resolve=hy(r),this.reject=hy(t)};yy.exports.f=function(e){return new cM(e)}});var Ly=i(()=>{"use strict";var lM=q(),fM=re(),xa=$t(),ar=R(),pM=J(),it=G(),by=je(),gy=Ct(),dM=$e(),vM=eu(),mM=D(),qa=M(),hM=$(),yM=ma(),bM=tu(),Ey=pu().set,Cu=uy(),gM=cy(),qM=Er(),xM=du(),Cy=er(),wa=Cr(),Tu=rt(),Ty=Ie(),Sa="Promise",Oy=Tu.CONSTRUCTOR,wM=Tu.REJECTION_EVENT,SM=Tu.SUBCLASSING,xu=Cy.getterFor(Sa),EM=Cy.set,tt=wa&&wa.prototype,Tr=wa,ba=tt,ky=ar.TypeError,wu=ar.document,Ou=ar.process,Su=Ty.f,CM=Su,TM=!!(wu&&wu.createEvent&&ar.dispatchEvent),Iy="unhandledrejection",OM="rejectionhandled",qy=0,_y=1,kM=2,ku=1,Py=2,ga,xy,Ry,wy,Ay=function(e){var r;return hM(e)&&qa(r=e.then)?r:!1},Ny=function(e,r){var t=r.value,n=r.state===_y,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Py&&_M(r),r.rejection=ku),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new ky("Promise-chain cycle")):(l=Ay(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},My=function(e,r){e.notified||(e.notified=!0,Cu(function(){for(var t=e.reactions,n;n=t.get();)Ny(n,e);e.notified=!1,r&&!e.rejection&&IM(e)}))},jy=function(e,r,t){var n,a;TM?(n=wu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!wM&&(a=ar["on"+e])?a(n):e===Iy&&gM("Unhandled promise rejection",t)},IM=function(e){it(Ey,ar,function(){var r=e.facade,t=e.value,n=Sy(e),a;if(n&&(a=qM(function(){xa?Ou.emit("unhandledRejection",t,r):jy(Iy,r,t)}),e.rejection=xa||Sy(e)?Py:ku,a.error))throw a.value})},Sy=function(e){return e.rejection!==ku&&!e.parent},_M=function(e){it(Ey,ar,function(){var r=e.facade;xa?Ou.emit("rejectionHandled",r):jy(OM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=kM,My(e,!0))},Eu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ky("Promise can't be resolved itself");var n=Ay(r);n?Cu(function(){var a={done:!1};try{it(n,r,nt(Eu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=_y,My(e,!1))}catch(a){at({done:!1},a,e)}}};if(Oy&&(Tr=function(r){yM(this,ba),mM(r),it(ga,this);var t=xu(this);try{r(nt(Eu,t),nt(at,t))}catch(n){at(t,n)}},ba=Tr.prototype,ga=function(r){EM(this,{type:Sa,done:!1,notified:!1,parent:!1,reactions:new xM,rejection:!1,state:qy,value:null})},ga.prototype=by(ba,"then",function(r,t){var n=xu(this),a=Su(bM(this,Tr));return n.parent=!0,a.ok=qa(r)?r:!0,a.fail=qa(t)&&t,a.domain=xa?Ou.domain:void 0,n.state===qy?n.reactions.add(a):Cu(function(){Ny(a,n)}),a.promise}),xy=function(){var e=new ga,r=xu(e);this.promise=e,this.resolve=nt(Eu,r),this.reject=nt(at,r)},Ty.f=Su=function(e){return e===Tr||e===Ry?new xy(e):CM(e)},!fM&&qa(wa)&&tt!==Object.prototype)){wy=tt.then,SM||by(tt,"then",function(r,t){var n=this;return new Tr(function(a,o){it(wy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}gy&&gy(tt,ba)}lM({global:!0,constructor:!0,wrap:!0,forced:Oy},{Promise:Tr});Ry=pM.Promise;dM(Tr,Sa,!1,!0);vM(Sa)});var Ht=i((gK,$y)=>{"use strict";var PM=Cr(),RM=co(),AM=rt().CONSTRUCTOR;$y.exports=AM||!RM(function(e){PM.all(e).then(void 0,function(){})})});var Fy=i(()=>{"use strict";var NM=q(),MM=G(),jM=D(),LM=Ie(),$M=Er(),FM=he(),DM=Ht();NM({target:"Promise",stat:!0,forced:DM},{all:function(r){var t=this,n=LM.f(t),a=n.resolve,o=n.reject,u=$M(function(){var s=jM(t.resolve),c=[],l=0,f=1;FM(r,function(p){var d=l++,v=!1;f++,MM(s,t,p).then(function(h){v||(v=!0,c[d]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var By=i(()=>{"use strict";var BM=q(),GM=re(),UM=rt().CONSTRUCTOR,_u=Cr(),HM=z(),WM=M(),KM=je(),Dy=_u&&_u.prototype;BM({target:"Promise",proto:!0,forced:UM,real:!0},{catch:function(e){return this.then(void 0,e)}});!GM&&WM(_u)&&(Iu=HM("Promise").prototype.catch,Dy.catch!==Iu&&KM(Dy,"catch",Iu,{unsafe:!0}));var Iu});var Gy=i(()=>{"use strict";var zM=q(),VM=G(),YM=D(),JM=Ie(),QM=Er(),XM=he(),ZM=Ht();zM({target:"Promise",stat:!0,forced:ZM},{race:function(r){var t=this,n=JM.f(t),a=n.reject,o=QM(function(){var u=YM(t.resolve);XM(r,function(s){VM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Uy=i(()=>{"use strict";var ej=q(),rj=Ie(),tj=rt().CONSTRUCTOR;ej({target:"Promise",stat:!0,forced:tj},{reject:function(r){var t=rj.f(this),n=t.reject;return n(r),t.promise}})});var Pu=i((kK,Hy)=>{"use strict";var nj=ee(),aj=$(),ij=Ie();Hy.exports=function(e,r){if(nj(e),aj(r)&&r.constructor===e)return r;var t=ij.f(e),n=t.resolve;return n(r),t.promise}});var zy=i(()=>{"use strict";var oj=q(),uj=z(),Wy=re(),sj=Cr(),Ky=rt().CONSTRUCTOR,cj=Pu(),lj=uj("Promise"),fj=Wy&&!Ky;oj({target:"Promise",stat:!0,forced:Wy||Ky},{resolve:function(r){return cj(fj&&this===lj?sj:this,r)}})});var Vy=i(()=>{"use strict";Ly();Fy();By();Gy();Uy();zy()});var Ru=i(()=>{"use strict";var pj=q(),dj=G(),vj=D(),mj=Ie(),hj=Er(),yj=he(),bj=Ht();pj({target:"Promise",stat:!0,forced:bj},{allSettled:function(r){var t=this,n=mj.f(t),a=n.resolve,o=n.reject,u=hj(function(){var s=vj(t.resolve),c=[],l=0,f=1;yj(r,function(p){var d=l++,v=!1;f++,dj(s,t,p).then(function(h){v||(v=!0,c[d]={status:"fulfilled",value:h},--f||a(c))},function(h){v||(v=!0,c[d]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Au=i(()=>{"use strict";var gj=q(),qj=G(),xj=D(),wj=z(),Sj=Ie(),Ej=Er(),Cj=he(),Tj=Ht(),Yy="No one promise resolved";gj({target:"Promise",stat:!0,forced:Tj},{any:function(r){var t=this,n=wj("AggregateError"),a=Sj.f(t),o=a.resolve,u=a.reject,s=Ej(function(){var c=xj(t.resolve),l=[],f=0,p=1,d=!1;Cj(r,function(v){var h=f++,m=!1;p++,qj(c,t,v).then(function(x){m||d||(d=!0,o(x))},function(x){m||d||(m=!0,l[h]=x,--p||u(new n(l,Yy)))})}),--p||u(new n(l,Yy))});return s.error&&u(s.value),a.promise}})});var Mu=i(()=>{"use strict";var Oj=q(),kj=R(),Ij=jr(),_j=vr(),Pj=Ie(),Rj=D(),Qy=Er(),Nu=kj.Promise,Jy=!1,Aj=!Nu||!Nu.try||Qy(function(){Nu.try(function(e){Jy=e===8},8)}).error||!Jy;Oj({target:"Promise",stat:!0,forced:Aj},{try:function(e){var r=arguments.length>1?_j(arguments,1):[],t=Pj.f(this),n=Qy(function(){return Ij(Rj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var ju=i(()=>{"use strict";var Nj=q(),Mj=Ie();Nj({target:"Promise",stat:!0},{withResolvers:function(){var r=Mj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var rb=i(()=>{"use strict";var jj=q(),Lj=re(),Ea=Cr(),$j=P(),Zy=z(),eb=M(),Fj=tu(),Xy=Pu(),Dj=je(),$u=Ea&&Ea.prototype,Bj=!!Ea&&$j(function(){$u.finally.call({then:function(){}},function(){})});jj({target:"Promise",proto:!0,real:!0,forced:Bj},{finally:function(e){var r=Fj(this,Zy("Promise")),t=eb(e);return this.then(t?function(n){return Xy(r,e()).then(function(){return n})}:e,t?function(n){return Xy(r,e()).then(function(){throw n})}:e)}});!Lj&&eb(Ea)&&(Lu=Zy("Promise").prototype.finally,$u.finally!==Lu&&Dj($u,"finally",Lu,{unsafe:!0}));var Lu});var nb=i((UK,tb)=>{"use strict";Xo();xr();_t();Vy();Ru();Au();Mu();ju();rb();yr();var Gj=J();tb.exports=Gj.Promise});var ib=i((HK,ab)=>{"use strict";var Uj=nb();wr();ab.exports=Uj});var ob=i(()=>{"use strict";Mu()});var ub=i(()=>{"use strict";ju()});var cb=i((YK,sb)=>{"use strict";var Hj=ib();ob();ub();sb.exports=Hj});var lb=i(()=>{"use strict";Xo()});var fb=i(()=>{"use strict";Ru()});var pb=i(()=>{"use strict";Au()});var vb=i((tz,db)=>{"use strict";var Wj=cb();lb();fb();pb();db.exports=Wj});var ot=i((nz,mb)=>{"use strict";mb.exports=vb()});var bb=i((sz,yb)=>{"use strict";Lo();var Kj=Vr();yb.exports=Kj.f("asyncIterator")});var qb=i((cz,gb)=>{"use strict";var zj=bb();gb.exports=zj});var wb=i((lz,xb)=>{"use strict";var Vj=qb();xb.exports=Vj});var Eb=i((fz,Sb)=>{"use strict";var Yj=wb();Sb.exports=Yj});var Ca=i((pz,Cb)=>{"use strict";Cb.exports=Eb()});var Ib=i(()=>{"use strict";var Jj=q(),Qj=P(),Xj=ne(),kb=Et(),Zj=Zi(),eL=Qj(function(){kb(1)});Jj({target:"Object",stat:!0,forced:eL,sham:!Zj},{getPrototypeOf:function(r){return kb(Xj(r))}})});var Pb=i((yz,_b)=>{"use strict";Ib();var rL=J();_b.exports=rL.Object.getPrototypeOf});var Ab=i((bz,Rb)=>{"use strict";var tL=Pb();Rb.exports=tL});var Mb=i((gz,Nb)=>{"use strict";var nL=Ab();Nb.exports=nL});var Lb=i((qz,jb)=>{"use strict";var aL=Mb();jb.exports=aL});var Ta=i((xz,$b)=>{"use strict";$b.exports=Lb()});var Db=i(()=>{"use strict";var iL=q(),oL=N(),uL=Me(),sL=oL([].reverse),Fb=[1,2];iL({target:"Array",proto:!0,forced:String(Fb)===String(Fb.reverse())},{reverse:function(){return uL(this)&&(this.length=this.length),sL(this)}})});var Gb=i((Ez,Bb)=>{"use strict";Db();var cL=se();Bb.exports=cL("Array","reverse")});var Hb=i((Cz,Ub)=>{"use strict";var lL=W(),fL=Gb(),Bu=Array.prototype;Ub.exports=function(e){var r=e.reverse;return e===Bu||lL(Bu,e)&&r===Bu.reverse?fL:r}});var Kb=i((Tz,Wb)=>{"use strict";var pL=Hb();Wb.exports=pL});var Vb=i((Oz,zb)=>{"use strict";var dL=Kb();zb.exports=dL});var Jb=i((kz,Yb)=>{"use strict";var vL=Vb();Yb.exports=vL});var Xb=i((Iz,Qb)=>{"use strict";Qb.exports=Jb()});var Gu=i((_z,zt)=>{function mL(e,r){this.v=e,this.k=r}zt.exports=mL,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Zb=i(()=>{"use strict";var hL=q(),yL=K(),bL=rr();hL({target:"Object",stat:!0,sham:!yL},{create:bL})});var rg=i((Az,eg)=>{"use strict";Zb();var gL=J(),qL=gL.Object;eg.exports=function(r,t){return qL.create(r,t)}});var ng=i((Nz,tg)=>{"use strict";var xL=rg();tg.exports=xL});var ig=i((Mz,ag)=>{"use strict";var wL=ng();ag.exports=wL});var ug=i((jz,og)=>{"use strict";var SL=ig();og.exports=SL});var Oa=i((Lz,sg)=>{"use strict";sg.exports=ug()});var Hu=i(($z,pg)=>{"use strict";var lg=N(),EL=D(),CL=$(),TL=V(),cg=vr(),OL=Mr(),fg=Function,kL=lg([].concat),IL=lg([].join),Uu={},_L=function(e,r,t){if(!TL(Uu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Uu[r]=fg("C,a","return new C("+IL(n,",")+")")}return Uu[r](e,t)};pg.exports=OL?fg.bind:function(r){var t=EL(this),n=t.prototype,a=cg(arguments,1),o=function(){var s=kL(a,cg(arguments));return this instanceof o?_L(t,s.length,s):t.apply(r,s)};return CL(n)&&(o.prototype=n),o}});var vg=i(()=>{"use strict";var PL=q(),dg=Hu();PL({target:"Function",proto:!0,forced:Function.bind!==dg},{bind:dg})});var hg=i((Bz,mg)=>{"use strict";vg();var RL=se();mg.exports=RL("Function","bind")});var bg=i((Gz,yg)=>{"use strict";var AL=W(),NL=hg(),Wu=Function.prototype;yg.exports=function(e){var r=e.bind;return e===Wu||AL(Wu,e)&&r===Wu.bind?NL:r}});var qg=i((Uz,gg)=>{"use strict";var ML=bg();gg.exports=ML});var wg=i((Hz,xg)=>{"use strict";var jL=qg();xg.exports=jL});var Eg=i((Wz,Sg)=>{"use strict";var LL=wg();Sg.exports=LL});var Vt=i((Kz,Cg)=>{"use strict";Cg.exports=Eg()});var Tg=i(()=>{"use strict";var $L=q(),FL=Ct();$L({target:"Object",stat:!0},{setPrototypeOf:FL})});var kg=i((Yz,Og)=>{"use strict";Tg();var DL=J();Og.exports=DL.Object.setPrototypeOf});var _g=i((Jz,Ig)=>{"use strict";var BL=kg();Ig.exports=BL});var Rg=i((Qz,Pg)=>{"use strict";var GL=_g();Pg.exports=GL});var Ng=i((Xz,Ag)=>{"use strict";var UL=Rg();Ag.exports=UL});var ka=i((Zz,Mg)=>{"use strict";Mg.exports=Ng()});var Lg=i(()=>{"use strict";var HL=q(),WL=K(),jg=ae().f;HL({target:"Object",stat:!0,forced:Object.defineProperty!==jg,sham:!WL},{defineProperty:jg})});var Dg=i((t9,Fg)=>{"use strict";Lg();var KL=J(),$g=KL.Object,zL=Fg.exports=function(r,t,n){return $g.defineProperty(r,t,n)};$g.defineProperty.sham&&(zL.sham=!0)});var Gg=i((n9,Bg)=>{"use strict";var VL=Dg();Bg.exports=VL});var Hg=i((a9,Ug)=>{"use strict";var YL=Gg();Ug.exports=YL});var Kg=i((i9,Wg)=>{"use strict";var JL=Hg();Wg.exports=JL});var Yt=i((o9,zg)=>{"use strict";zg.exports=Kg()});var Ku=i((u9,De)=>{var QL=Yt();function Ia(e,r,t,n){var a=QL;try{a({},"",{})}catch{a=0}De.exports=Ia=function(u,s,c,l){function f(p,d){Ia(u,p,function(v){return this._invoke(p,d,v)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},De.exports.__esModule=!0,De.exports.default=De.exports,Ia(e,r,t,n)}De.exports=Ia,De.exports.__esModule=!0,De.exports.default=De.exports});var Vu=i((s9,Be)=>{var Vg=ke(),zu=Oa(),XL=Vt(),ZL=Ta(),Yg=ka(),Pe=Ku();function Jg(){var e,r,t=typeof Vg=="function"?Vg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(v,h,m,x){var b=h&&h.prototype instanceof s?h:s,g=zu(b.prototype);return Pe(g,"_invoke",function(O,I,w){var E,S,T,L=0,Ee=w||[],_=!1,te={p:0,n:0,v:e,a:Ce,f:XL(Ce).call(Ce,e,4),d:function(F,be){return E=F,S=0,T=e,te.n=be,u}};function Ce(Z,F){for(S=Z,T=F,r=0;!_&&L&&!be&&r<Ee.length;r++){var be,C=Ee[r],Nr=te.p,Ye=C[2];Z>3?(be=Ye===F)&&(T=C[(S=C[4])?5:(S=3,3)],C[4]=C[5]=e):C[0]<=Nr&&((be=Z<2&&Nr<C[1])?(S=0,te.v=F,te.n=C[1]):Nr<Ye&&(be=Z<3||C[0]>F||F>Ye)&&(C[4]=Z,C[5]=F,te.n=Ye,S=0))}if(be||Z>1)return u;throw _=!0,F}return function(Z,F,be){if(L>1)throw TypeError("Generator is already running");for(_&&F===1&&Ce(F,be),S=F,T=be;(r=S<2?e:T)||!_;){E||(S?S<3?(S>1&&(te.n=-1),Ce(S,T)):te.n=T:te.v=T);try{if(L=2,E){if(S||(Z="next"),r=E[Z]){if(!(r=r.call(E,T)))throw TypeError("iterator result is not an object");if(!r.done)return r;T=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(T=TypeError("The iterator does not provide a '"+Z+"' method"),S=1);E=e}else if((r=(_=te.n<0)?T:O.call(I,te))!==u)break}catch(C){E=e,S=1,T=C}finally{L=1}}return{value:r,done:_}}}(v,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=ZL;var f=[][n]?r(r([][n]())):(Pe(r={},n,function(){return this}),r),p=l.prototype=s.prototype=zu(f);function d(v){return Yg?Yg(v,l):(v.__proto__=l,Pe(v,a,"GeneratorFunction")),v.prototype=zu(p),v}return c.prototype=l,Pe(p,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,a,"GeneratorFunction"),Pe(p),Pe(p,a,"Generator"),Pe(p,n,function(){return this}),Pe(p,"toString",function(){return"[object Generator]"}),(Be.exports=Jg=function(){return{w:o,m:d}},Be.exports.__esModule=!0,Be.exports.default=Be.exports)()}Be.exports=Jg,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var Qu=i((c9,Jt)=>{var e$=ke(),r$=Ca(),t$=Gu(),Yu=Ku();function Ju(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof t$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Yu(Ju.prototype),Yu(Ju.prototype,typeof e$=="function"&&r$||"@asyncIterator",function(){return this})),Yu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Jt.exports=Ju,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Xu=i((l9,Qt)=>{var n$=ot(),a$=Vu(),i$=Qu();function o$(e,r,t,n,a){return new i$(a$().w(e,r,t,n),a||n$)}Qt.exports=o$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Qg=i((f9,Xt)=>{var u$=Xu();function s$(e,r,t,n,a){var o=u$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=s$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var eq=i((p9,Zg)=>{"use strict";var Xg=Xe(),c$=TypeError;Zg.exports=function(e,r){if(!delete e[r])throw new c$("Cannot delete property "+Xg(r)+" of "+Xg(e))}});var rq=i(()=>{"use strict";var l$=q(),f$=ne(),p$=ve(),d$=Wr(),v$=eq(),m$=It(),h$=[].unshift(0)!==1,y$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},b$=h$||!y$();l$({target:"Array",proto:!0,arity:1,forced:b$},{unshift:function(r){var t=f$(this),n=p$(t),a=arguments.length;if(a){m$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:v$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return d$(t,n+a)}})});var nq=i((m9,tq)=>{"use strict";rq();var g$=se();tq.exports=g$("Array","unshift")});var iq=i((h9,aq)=>{"use strict";var q$=W(),x$=nq(),Zu=Array.prototype;aq.exports=function(e){var r=e.unshift;return e===Zu||q$(Zu,e)&&r===Zu.unshift?x$:r}});var uq=i((y9,oq)=>{"use strict";var w$=iq();oq.exports=w$});var cq=i((b9,sq)=>{"use strict";var S$=uq();sq.exports=S$});var fq=i((g9,lq)=>{"use strict";var E$=cq();lq.exports=E$});var dq=i((q9,pq)=>{"use strict";pq.exports=fq()});var vq=i((x9,Zt)=>{var C$=dq();function T$(e){var r=Object(e),t=[];for(var n in r)C$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Zt.exports=T$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var hq=i((w9,mq)=>{"use strict";xr();_t();yr();Fo();var O$=Vr();mq.exports=O$.f("iterator")});var bq=i((S9,yq)=>{"use strict";var k$=hq();wr();yq.exports=k$});var qq=i((E9,gq)=>{"use strict";var I$=bq();gq.exports=I$});var wq=i((C9,xq)=>{"use strict";var _$=qq();xq.exports=_$});var en=i((T9,Sq)=>{"use strict";Sq.exports=wq()});var Eq=i((O9,Ge)=>{var _a=ke(),P$=en();function es(e){"@babel/helpers - typeof";return Ge.exports=es=typeof _a=="function"&&typeof P$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof _a=="function"&&r.constructor===_a&&r!==_a.prototype?"symbol":typeof r},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports,es(e)}Ge.exports=es,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var Cq=i((k9,rn)=>{var R$=Eq().default,A$=ke(),N$=en();function M$(e){if(e!=null){var r=e[typeof A$=="function"&&N$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(R$(e)+" is not iterable")}rn.exports=M$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var kq=i((I9,Ue)=>{var Tq=Ta(),j$=Xb(),L$=Gu(),$$=Vu(),F$=Qg(),D$=Xu(),B$=Qu(),G$=vq(),Oq=Cq();function rs(){"use strict";var e=$$(),r=e.m(rs),t=(Tq?Tq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,d){return c(l.a,a[p],d)},delegateYield:function(p,d,v){return s.resultName=d,c(l.d,Oq(p),v)},finish:function(p){return c(l.f,p)}},c=function(p,d,v){l.p=s.prev,l.n=s.next;try{return p(d,v)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ue.exports=rs=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&j$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new L$(c,l)},AsyncIterator:B$,async:function(c,l,f,p,d){return(n(l)?D$:F$)(o(c),l,f,p,d)},keys:G$,values:Oq}},Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports)()}Ue.exports=rs,Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports});var le=i((_9,Iq)=>{var Pa=kq()();Iq.exports=Pa;try{regeneratorRuntime=Pa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Pa:Function("r","regeneratorRuntime = r")(Pa)}});var ts=i((Aa,Pq)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});var Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_q=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Aa.default=U$;function U$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=H$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function H$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=_q(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):tn(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=_q(m,2),b=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(b)>-1;return!!(E&&(!g||w.attribs[b]===g))},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){c(L)&&T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L,Ee){c(L)&&(T.push(L),Ee())}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){return T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var T=[];return or([w],function(L){c(L)&&T.push(L)}),{v:T}}();if((typeof S>"u"?"undefined":Ra(S))==="object")return S.v}return typeof w=="function"?w(c):tn(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],d=parseInt(f[2],10)-1,v=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var b=x.findIndex(function(g){return g===m});if(b===d)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(b,g){return v(g)&&b.push(g),b},[]):v(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Pq.exports=Aa.default});var Ma=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.convertNodeList=W$;Na.escapeValue=K$;function W$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function K$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Bq=i((ja,Dq)=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.default=z$;var Mq=Ma(),Rq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function z$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,d=f.length,v=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(g){return g===b}:b}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(b){b==="class"&&(v=!0);var g=l[b];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Mq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[b]=function(O,I){return g.test(I)})}),v&&function(){var b=l.attribute;l.attribute=function(g,O,I){return l.class(O)||b&&b(g,O,I)}}();p!==n;){if(m(p)!==!0){if(Aq(s,p,l,f,n)||Nq(p,l,f,n))break;Aq(s,p,l,f),f.length===d&&Nq(p,l,f),f.length===d&&V$(s,p,l,f)}p=p.parentNode,d=f.length}if(p===n){var x=$q(s,p,l);f.unshift(x)}return f.join(" ")}function Aq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=jq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function jq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var b=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?b===-1?0:-1:b-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Mq.escapeValue)(c.value),p=t[l]||t.attribute,d=Rq[l]||Rq.attribute;if(!Fq(p,l,f,d)){var v="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(v="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");v="."+h}return v}}return null}function Nq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Lq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Lq(e,r){var t=e.tagName.toLowerCase();return Fq(r.tag,null,t)?null:t}function V$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=$q(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function $q(e,r,t){var n=jq(e,r,t);return n||(n=Lq(r,t)),n}function Fq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Dq.exports=ja.default});var ns=i(($a,Gq)=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.default=Z$;var Y$=ts(),J$=X$(Y$),Q$=Ma();function X$(e){return e&&e.__esModule?e:{default:e}}function Z$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,Q$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,J$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return La("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(La(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=La("",a[0],a.slice(1).join(" "),r),a[a.length-1]=La(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function La(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var I=s[l];if(n.some(function(E){return I.contains(E)})){var w=I.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var d=r.replace(/>/,""),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/:nth-child/.test(r)){var v=r.replace(/nth-child/g,"nth-of-type"),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,I){return O.length-I.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),b=function(){var I=x[l];if(n.some(function(E){return I.contains(E)})){var w=I.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=b();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Gq.exports=$a.default});var as=i(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getCommonAncestor=eF;Fa.getCommonProperties=rF;function eF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,d){for(var v=[];p!==n;)p=p.parentNode,v.unshift(p);a[d]=v}),a.sort(function(p,d){return p.length-d.length});for(var o=a.shift(),u=null,s=function(){var d=o[c],v=a.some(function(h){return!h.some(function(m){return m===d})});if(v)return"break";u=d},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function rF(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(d,v){var h=c[v],m=h.name;return h&&m!=="class"&&(d[m]=h.value),d},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(d,v){var h=a[v];return h===l[v]&&(d[v]=h),d},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Vq=i(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var tF=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=os;nn.getMultiSelector=zq;nn.default=sF;var nF=ts(),Hq=is(nF),aF=Bq(),iF=is(aF),oF=ns(),Wq=is(oF),Uq=Ma(),Kq=as();function is(e){return e&&e.__esModule?e:{default:e}}function os(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":tF(e))+'")');var t=(0,Hq.default)(e,r),n=(0,iF.default)(e,r),a=(0,Wq.default)(n,e,r);return t&&delete global.document,a}function zq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Uq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Hq.default)(e[0],r),n=(0,Kq.getCommonAncestor)(e,r),a=os(n,r),o=uF(e),u=o[0],s=(0,Wq.default)(a+" "+u,e,r),c=(0,Uq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function uF(e){var r=(0,Kq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function sF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?zq(e,r):os(e,r)}});var Qq=i(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=oe.common=oe.optimize=oe.getMultiSelector=oe.getSingleSelector=oe.select=void 0;var us=Vq();Object.defineProperty(oe,"getSingleSelector",{enumerable:!0,get:function(){return us.getSingleSelector}});Object.defineProperty(oe,"getMultiSelector",{enumerable:!0,get:function(){return us.getMultiSelector}});var Yq=Jq(us),cF=ns(),lF=Jq(cF),fF=as(),pF=dF(fF);function dF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Jq(e){return e&&e.__esModule?e:{default:e}}oe.select=Yq.default;oe.optimize=lF.default;oe.common=pF;oe.default=Yq.default});var Xq=i(()=>{"use strict";var SF=q(),EF=Me();SF({target:"Array",stat:!0},{isArray:EF})});var ex=i((z9,Zq)=>{"use strict";Xq();var CF=J();Zq.exports=CF.Array.isArray});var tx=i((V9,rx)=>{"use strict";var TF=ex();rx.exports=TF});var ax=i((Y9,nx)=>{"use strict";var OF=tx();nx.exports=OF});var ox=i((J9,ix)=>{"use strict";var kF=ax();ix.exports=kF});var sx=i((Q9,ux)=>{"use strict";ux.exports=ox()});var fx=i(()=>{"use strict";var IF=q(),_F=ne(),PF=ve(),RF=Wr(),AF=It(),NF=P(),MF=NF(function(){return[].push.call({length:4294967296},1)!==4294967297}),jF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},LF=MF||!jF();IF({target:"Array",proto:!0,arity:1,forced:LF},{push:function(r){var t=_F(this),n=PF(t),a=arguments.length;AF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return RF(t,n),n}})});var dx=i((rV,px)=>{"use strict";fx();var $F=se();px.exports=$F("Array","push")});var mx=i((tV,vx)=>{"use strict";var FF=W(),DF=dx(),ss=Array.prototype;vx.exports=function(e){var r=e.push;return e===ss||FF(ss,e)&&r===ss.push?DF:r}});var yx=i((nV,hx)=>{"use strict";var BF=mx();hx.exports=BF});var gx=i((aV,bx)=>{"use strict";var GF=yx();bx.exports=GF});var xx=i((iV,qx)=>{"use strict";var UF=gx();qx.exports=UF});var cs=i((oV,wx)=>{"use strict";wx.exports=xx()});var Ax=i(()=>{"use strict";var HF=q(),WF=Rt().map,KF=xt(),zF=KF("map");HF({target:"Array",proto:!0,forced:!zF},{map:function(r){return WF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Mx=i((NV,Nx)=>{"use strict";Ax();var VF=se();Nx.exports=VF("Array","map")});var Lx=i((MV,jx)=>{"use strict";var YF=W(),JF=Mx(),fs=Array.prototype;jx.exports=function(e){var r=e.map;return e===fs||YF(fs,e)&&r===fs.map?JF:r}});var Fx=i((jV,$x)=>{"use strict";var QF=Lx();$x.exports=QF});var Bx=i((LV,Dx)=>{"use strict";var XF=Fx();Dx.exports=XF});var Ux=i(($V,Gx)=>{"use strict";var ZF=Bx();Gx.exports=ZF});var Wx=i((FV,Hx)=>{"use strict";Hx.exports=Ux()});var zx=i((DV,Kx)=>{Kx.exports=Wx()});var Yx=i((BV,Vx)=>{Vx.exports=ot()});var ew=i((GV,Zx)=>{"use strict";var eD=D(),rD=ne(),tD=Tn(),nD=ve(),Jx=TypeError,Qx="Reduce of empty array with no initial value",Xx=function(e){return function(r,t,n,a){var o=rD(r),u=tD(o),s=nD(o);if(eD(t),s===0&&n<2)throw new Jx(Qx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Jx(Qx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};Zx.exports={left:Xx(!1),right:Xx(!0)}});var ps=i((UV,rw)=>{"use strict";var aD=P();rw.exports=function(e,r){var t=[][e];return!!t&&aD(function(){t.call(null,r||function(){return 1},1)})}});var nw=i(()=>{"use strict";var iD=q(),oD=ew().left,uD=ps(),tw=$r(),sD=$t(),cD=!sD&&tw>79&&tw<83,lD=cD||!uD("reduce");iD({target:"Array",proto:!0,forced:lD},{reduce:function(r){var t=arguments.length;return oD(this,r,t,t>1?arguments[1]:void 0)}})});var iw=i((KV,aw)=>{"use strict";nw();var fD=se();aw.exports=fD("Array","reduce")});var uw=i((zV,ow)=>{"use strict";var pD=W(),dD=iw(),ds=Array.prototype;ow.exports=function(e){var r=e.reduce;return e===ds||pD(ds,e)&&r===ds.reduce?dD:r}});var cw=i((VV,sw)=>{"use strict";var vD=uw();sw.exports=vD});var fw=i((YV,lw)=>{"use strict";var mD=cw();lw.exports=mD});var dw=i((JV,pw)=>{"use strict";var hD=fw();pw.exports=hD});var mw=i((QV,vw)=>{"use strict";vw.exports=dw()});var yw=i((XV,hw)=>{hw.exports=mw()});var qw=i((ZV,gw)=>{"use strict";var yD=Me(),bD=ve(),gD=It(),qD=Q(),xD=Hr(),bw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?qD(u,s):!1,p,d;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&yD(p)?(d=bD(p),c=bw(e,r,p,d,c,o-1)-1):(gD(c+1),xD(e,c,p)),c++),l++;return c};gw.exports=bw});var xw=i(()=>{"use strict";var wD=q(),SD=qw(),ED=D(),CD=ne(),TD=ve(),OD=zn();wD({target:"Array",proto:!0},{flatMap:function(r){var t=CD(this),n=TD(t),a;return ED(r),a=OD(t,0),SD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var ww=i(()=>{"use strict";var kD=Bo();kD("flatMap")});var Ew=i((a7,Sw)=>{"use strict";xw();ww();var ID=se();Sw.exports=ID("Array","flatMap")});var Tw=i((i7,Cw)=>{"use strict";var _D=W(),PD=Ew(),vs=Array.prototype;Cw.exports=function(e){var r=e.flatMap;return e===vs||_D(vs,e)&&r===vs.flatMap?PD:r}});var kw=i((o7,Ow)=>{"use strict";var RD=Tw();Ow.exports=RD});var _w=i((u7,Iw)=>{"use strict";var AD=kw();Iw.exports=AD});var Rw=i((s7,Pw)=>{"use strict";var ND=_w();Pw.exports=ND});var Nw=i((c7,Aw)=>{"use strict";Aw.exports=Rw()});var jw=i((l7,Mw)=>{Mw.exports=Nw()});var $w=i((f7,Lw)=>{"use strict";fo();var MD=se();Lw.exports=MD("Array","concat")});var Dw=i((p7,Fw)=>{"use strict";var jD=W(),LD=$w(),ms=Array.prototype;Fw.exports=function(e){var r=e.concat;return e===ms||jD(ms,e)&&r===ms.concat?LD:r}});var Gw=i((d7,Bw)=>{"use strict";var $D=Dw();Bw.exports=$D});var Hw=i((v7,Uw)=>{"use strict";var FD=Gw();Uw.exports=FD});var Kw=i((m7,Ww)=>{"use strict";var DD=Hw();Ww.exports=DD});var Vw=i((h7,zw)=>{"use strict";zw.exports=Kw()});var hs=i((y7,Yw)=>{Yw.exports=Vw()});var Xw=i(()=>{});var eS=i((D7,Zw)=>{"use strict";Xw();Do();var JD=Vr();Zw.exports=JD.f("toPrimitive")});var tS=i((B7,rS)=>{"use strict";var QD=eS();rS.exports=QD});var aS=i((G7,nS)=>{"use strict";var XD=tS();nS.exports=XD});var oS=i((U7,iS)=>{"use strict";var ZD=aS();iS.exports=ZD});var sS=i((H7,uS)=>{"use strict";uS.exports=oS()});var yS=i((fY,hS)=>{"use strict";var r3=$(),t3=Te(),n3=A(),a3=n3("match");hS.exports=function(e){var r;return r3(e)&&((r=e[a3])!==void 0?!!r:t3(e)==="RegExp")}});var gS=i((pY,bS)=>{"use strict";var i3=yS(),o3=TypeError;bS.exports=function(e){if(i3(e))throw new o3("The method doesn't accept regular expressions");return e}});var xS=i((dY,qS)=>{"use strict";var u3=A(),s3=u3("match");qS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[s3]=!1,"/./"[e](r)}catch{}}return!1}});var ES=i(()=>{"use strict";var c3=q(),l3=dt(),f3=mt().f,p3=Mi(),wS=Ze(),d3=gS(),v3=fr(),m3=xS(),h3=re(),y3=l3("".slice),b3=Math.min,SS=m3("startsWith"),g3=!h3&&!SS&&!!function(){var e=f3(String.prototype,"startsWith");return e&&!e.writable}();c3({target:"String",proto:!0,forced:!g3&&!SS},{startsWith:function(r){var t=wS(v3(this));d3(r);var n=p3(b3(arguments.length>1?arguments[1]:void 0,t.length)),a=wS(r);return y3(t,n,n+a.length)===a}})});var TS=i((hY,CS)=>{"use strict";ES();var q3=se();CS.exports=q3("String","startsWith")});var kS=i((yY,OS)=>{"use strict";var x3=W(),w3=TS(),qs=String.prototype;OS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===qs||x3(qs,e)&&r===qs.startsWith?w3:r}});var _S=i((bY,IS)=>{"use strict";var S3=kS();IS.exports=S3});var RS=i((gY,PS)=>{"use strict";var E3=_S();PS.exports=E3});var NS=i((qY,AS)=>{"use strict";var C3=RS();AS.exports=C3});var jS=i((xY,MS)=>{"use strict";MS.exports=NS()});var $S=i((wY,LS)=>{LS.exports=jS()});var FS=i(()=>{"use strict";var T3=q(),O3=Rt().filter,k3=xt(),I3=k3("filter");T3({target:"Array",proto:!0,forced:!I3},{filter:function(r){return O3(this,r,arguments.length>1?arguments[1]:void 0)}})});var BS=i((CY,DS)=>{"use strict";FS();var _3=se();DS.exports=_3("Array","filter")});var US=i((TY,GS)=>{"use strict";var P3=W(),R3=BS(),xs=Array.prototype;GS.exports=function(e){var r=e.filter;return e===xs||P3(xs,e)&&r===xs.filter?R3:r}});var WS=i((OY,HS)=>{"use strict";var A3=US();HS.exports=A3});var zS=i((kY,KS)=>{"use strict";var N3=WS();KS.exports=N3});var YS=i((IY,VS)=>{"use strict";var M3=zS();VS.exports=M3});var QS=i((_Y,JS)=>{"use strict";JS.exports=YS()});var ZS=i((PY,XS)=>{XS.exports=QS()});var mE=i(()=>{"use strict";var U3=q(),H3=z(),Ss=jr(),W3=Hu(),cE=ru(),K3=ee(),lE=$(),z3=rr(),pE=P(),Es=H3("Reflect","construct"),V3=Object.prototype,Y3=[].push,dE=pE(function(){function e(){}return!(Es(function(){},[],e)instanceof e)}),vE=!pE(function(){Es(function(){})}),fE=dE||vE;U3({target:"Reflect",stat:!0,forced:fE,sham:fE},{construct:function(r,t){cE(r),K3(t);var n=arguments.length<3?r:cE(arguments[2]);if(vE&&!dE)return Es(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return Ss(Y3,a,t),new(Ss(W3,r,a))}var o=n.prototype,u=z3(lE(o)?o:V3),s=Ss(r,u,t);return lE(s)?s:u}})});var yE=i((fJ,hE)=>{"use strict";mE();var J3=J();hE.exports=J3.Reflect.construct});var gE=i((pJ,bE)=>{"use strict";var Q3=yE();bE.exports=Q3});var xE=i((dJ,qE)=>{"use strict";var X3=gE();qE.exports=X3});var SE=i((vJ,wE)=>{"use strict";var Z3=xE();wE.exports=Z3});var Ka=i((mJ,EE)=>{"use strict";EE.exports=SE()});var TE=i((hJ,CE)=>{CE.exports=Ka()});var ME=i((CJ,NE)=>{"use strict";var e4=P();NE.exports=e4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var $E=i((TJ,LE)=>{"use strict";var r4=P(),t4=$(),n4=Te(),jE=ME(),za=Object.isExtensible,a4=r4(function(){za(1)});LE.exports=a4||jE?function(r){return!t4(r)||jE&&n4(r)==="ArrayBuffer"?!1:za?za(r):!0}:za});var DE=i((OJ,FE)=>{"use strict";var i4=P();FE.exports=!i4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ps=i((kJ,UE)=>{"use strict";var o4=q(),u4=N(),s4=zr(),c4=$(),ks=V(),l4=ae().f,BE=Pt(),f4=po(),Is=$E(),p4=Dr(),d4=DE(),GE=!1,Ke=p4("meta"),v4=0,_s=function(e){l4(e,Ke,{value:{objectID:"O"+v4++,weakData:{}}})},m4=function(e,r){if(!c4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ks(e,Ke)){if(!Is(e))return"F";if(!r)return"E";_s(e)}return e[Ke].objectID},h4=function(e,r){if(!ks(e,Ke)){if(!Is(e))return!0;if(!r)return!1;_s(e)}return e[Ke].weakData},y4=function(e){return d4&&GE&&Is(e)&&!ks(e,Ke)&&_s(e),e},b4=function(){g4.enable=function(){},GE=!0;var e=BE.f,r=u4([].splice),t={};t[Ke]=1,e(t).length&&(BE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ke){r(a,o,1);break}return a},o4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f4.f}))},g4=UE.exports={enable:b4,fastKey:m4,getWeakData:h4,onFreeze:y4};s4[Ke]=!0});var KE=i((IJ,WE)=>{"use strict";var q4=q(),x4=R(),w4=Ps(),S4=P(),E4=Oe(),C4=he(),T4=ma(),O4=M(),k4=$(),I4=lr(),_4=$e(),P4=ae().f,R4=Rt().forEach,A4=K(),HE=er(),N4=HE.set,M4=HE.getterFor;WE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=x4[e],s=u&&u.prototype,c={},l;if(!A4||!O4(u)||!(a||s.forEach&&!S4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),w4.enable();else{l=r(function(d,v){N4(T4(d,f),{type:e,collection:new u}),I4(v)||C4(v,d[o],{that:d,AS_ENTRIES:n})});var f=l.prototype,p=M4(e);R4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(d){var v=d==="add"||d==="set";d in s&&!(a&&d==="clear")&&E4(f,d,function(h,m){var x=p(this).collection;if(!v&&a&&!k4(h))return d==="get"?void 0:!1;var b=x[d](h===0?0:h,m);return v?this:b})}),a||P4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return _4(l,e,!1,!0),c[e]=l,q4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var VE=i((_J,zE)=>{"use strict";var j4=je();zE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:j4(e,n,r[n],t);return e}});var r0=i((PJ,e0)=>{"use strict";var YE=rr(),L4=Yn(),JE=VE(),$4=Q(),F4=ma(),D4=lr(),B4=he(),G4=Un(),Va=Hn(),U4=eu(),ln=K(),QE=Ps().fastKey,ZE=er(),XE=ZE.set,Rs=ZE.getterFor;e0.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){F4(l,o),XE(l,{type:r,index:YE(null),first:null,last:null,size:0}),ln||(l.size=0),D4(f)||B4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Rs(r),s=function(l,f,p){var d=u(l),v=c(l,f),h,m;return v?v.value=p:(d.last=v={index:m=QE(f,!0),key:f,value:p,previous:h=d.last,next:null,removed:!1},d.first||(d.first=v),h&&(h.next=v),ln?d.size++:l.size++,m!=="F"&&(d.index[m]=v)),l},c=function(l,f){var p=u(l),d=QE(f),v;if(d!=="F")return p.index[d];for(v=p.first;v;v=v.next)if(v.key===f)return v};return JE(o,{clear:function(){for(var f=this,p=u(f),d=p.first;d;)d.removed=!0,d.previous&&(d.previous=d.previous.next=null),d=d.next;p.first=p.last=null,p.index=YE(null),ln?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),d=c(f,l);if(d){var v=d.next,h=d.previous;delete p.index[d.index],d.removed=!0,h&&(h.next=v),v&&(v.previous=h),p.first===d&&(p.first=v),p.last===d&&(p.last=h),ln?p.size--:f.size--}return!!d},forEach:function(f){for(var p=u(this),d=$4(f,arguments.length>1?arguments[1]:void 0),v;v=v?v.next:p.first;)for(d(v.value,v.key,this);v&&v.removed;)v=v.previous},has:function(f){return!!c(this,f)}}),JE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),ln&&L4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Rs(r),o=Rs(n);G4(e,r,function(u,s){XE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Va(void 0,!0)):Va(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),U4(r)}}});var t0=i(()=>{"use strict";var H4=KE(),W4=r0();H4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},W4)});var n0=i(()=>{"use strict";t0()});var i0=i((jJ,a0)=>{"use strict";a0.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ue=i((LJ,u0)=>{"use strict";var K4=z(),Ya=i0(),o0=K4("Map");u0.exports={Map:o0,set:Ya("set",2),get:Ya("get",1),has:Ya("has",1),remove:Ya("delete",1),proto:o0.prototype}});var As=i(()=>{"use strict";var z4=q(),V4=N(),Y4=D(),J4=fr(),Q4=he(),Ja=ue(),s0=re(),X4=P(),c0=Ja.Map,Z4=Ja.has,eB=Ja.get,rB=Ja.set,tB=V4([].push),nB=s0||X4(function(){return c0.groupBy("ab",function(e){return e}).get("a").length!==1});z4({target:"Map",stat:!0,forced:s0||nB},{groupBy:function(r,t){J4(r),Y4(t);var n=new c0,a=0;return Q4(r,function(o){var u=t(o,a++);Z4(n,u)?tB(eB(n,u),o):rB(n,u,[o])}),n}})});var X=i((DJ,l0)=>{"use strict";var aB=Xe(),iB=TypeError;l0.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new iB(aB(e)+" is not a map")}});var Ms=i(()=>{"use strict";var oB=q(),uB=X(),Ns=ue(),sB=re(),cB=Ns.get,lB=Ns.has,fB=Ns.set;oB({target:"Map",proto:!0,real:!0,forced:sB},{getOrInsert:function(r,t){return lB(uB(this),r)?cB(this,r):(fB(this,r,t),t)}})});var Ls=i(()=>{"use strict";var pB=q(),dB=D(),vB=X(),js=ue(),mB=re(),hB=js.get,yB=js.has,bB=js.set;pB({target:"Map",proto:!0,real:!0,forced:mB},{getOrInsertComputed:function(r,t){if(vB(this),dB(t),yB(this,r))return hB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return bB(this,r,n),n}})});var p0=i((WJ,f0)=>{"use strict";xr();n0();As();Ms();Ls();_t();yr();var gB=J();f0.exports=gB.Map});var v0=i((KJ,d0)=>{"use strict";var qB=p0();wr();d0.exports=qB});var $s=i(()=>{"use strict";Ms()});var Fs=i(()=>{"use strict";Ls()});var m0=i(()=>{"use strict";As()});var y0=i((ZJ,h0)=>{"use strict";var xB=v0();$s();Fs();m0();h0.exports=xB});var g0=i((eQ,b0)=>{"use strict";var wB=Q(),SB=ee(),EB=ne(),CB=he();b0.exports=function(e,r,t){return function(a){var o=EB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?wB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return CB(o,function(d){var v=c?l(d,p++):d;t?r(f,SB(v)[0],v[1]):r(f,v)}),f}}});var x0=i(()=>{"use strict";var TB=q(),q0=ue(),OB=g0();TB({target:"Map",stat:!0,forced:!0},{from:OB(q0.Map,q0.set,!0)})});var S0=i((nQ,w0)=>{"use strict";var kB=ee();w0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,kB(s)[0],s[1]):r(a,s)}return a}}});var C0=i(()=>{"use strict";var IB=q(),E0=ue(),_B=S0();IB({target:"Map",stat:!0,forced:!0},{of:_B(E0.Map,E0.set,!0)})});var O0=i(()=>{"use strict";var PB=q(),RB=G(),AB=he(),NB=M(),T0=D(),MB=ue().Map;PB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=NB(this)?this:MB,a=new n;T0(t);var o=T0(a.set);return AB(r,function(u){RB(o,a,t(u),u)}),a}})});var k0=i(()=>{"use strict";var jB=q(),LB=X(),$B=ue().remove;jB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=LB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=$B(r,arguments[a]),t=t&&n;return!!t}})});var _0=i(()=>{"use strict";var FB=q(),DB=X(),Ds=ue(),BB=Ds.get,GB=Ds.has,I0=Ds.set;FB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=DB(this),a,o;return GB(n,r)?(a=BB(n,r),"update"in t&&(a=t.update(a,r,n),I0(n,r,a)),a):(o=t.insert(r,n),I0(n,r,o),o)}})});var R0=i((pQ,P0)=>{"use strict";var UB=G();P0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=UB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var xe=i((dQ,A0)=>{"use strict";var HB=R0();A0.exports=function(e,r,t){return t?HB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var N0=i(()=>{"use strict";var WB=q(),KB=Q(),zB=X(),VB=xe();WB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=zB(this),n=KB(r,arguments.length>1?arguments[1]:void 0);return VB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var j0=i(()=>{"use strict";var YB=q(),JB=Q(),QB=X(),M0=ue(),XB=xe(),ZB=M0.Map,e5=M0.set;YB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=QB(this),n=JB(r,arguments.length>1?arguments[1]:void 0),a=new ZB;return XB(t,function(o,u){n(o,u,t)&&e5(a,u,o)}),a}})});var L0=i(()=>{"use strict";var r5=q(),t5=Q(),n5=X(),a5=xe();r5({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=n5(this),n=t5(r,arguments.length>1?arguments[1]:void 0),a=a5(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var $0=i(()=>{"use strict";var i5=q(),o5=Q(),u5=X(),s5=xe();i5({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=u5(this),n=o5(r,arguments.length>1?arguments[1]:void 0),a=s5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var D0=i((wQ,F0)=>{"use strict";F0.exports=function(e,r){return e===r||e!==e&&r!==r}});var B0=i(()=>{"use strict";var c5=q(),l5=D0(),f5=X(),p5=xe();c5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return p5(f5(this),function(t){if(l5(t,r))return!0},!0)===!0}})});var G0=i(()=>{"use strict";var d5=q(),v5=X(),m5=xe();d5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=m5(v5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var H0=i(()=>{"use strict";var h5=q(),y5=Q(),b5=X(),U0=ue(),g5=xe(),q5=U0.Map,x5=U0.set;h5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=b5(this),n=y5(r,arguments.length>1?arguments[1]:void 0),a=new q5;return g5(t,function(o,u){x5(a,n(o,u,t),o)}),a}})});var K0=i(()=>{"use strict";var w5=q(),S5=Q(),E5=X(),W0=ue(),C5=xe(),T5=W0.Map,O5=W0.set;w5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=E5(this),n=S5(r,arguments.length>1?arguments[1]:void 0),a=new T5;return C5(t,function(o,u){O5(a,u,n(o,u,t))}),a}})});var z0=i(()=>{"use strict";var k5=q(),I5=X(),_5=he(),P5=ue().set;k5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=I5(this),n=arguments.length,a=0;a<n;)_5(arguments[a++],function(o,u){P5(t,o,u)},{AS_ENTRIES:!0});return t}})});var V0=i(()=>{"use strict";var R5=q(),A5=D(),N5=X(),M5=xe(),j5=TypeError;R5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=N5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(A5(r),M5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new j5("Reduce of empty map with no initial value");return a}})});var Y0=i(()=>{"use strict";var L5=q(),$5=Q(),F5=X(),D5=xe();L5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=F5(this),n=$5(r,arguments.length>1?arguments[1]:void 0);return D5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var Q0=i(()=>{"use strict";var B5=q(),J0=D(),G5=X(),Bs=ue(),U5=TypeError,H5=Bs.get,W5=Bs.has,K5=Bs.set;B5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=G5(this),a=arguments.length;J0(t);var o=W5(n,r);if(!o&&a<3)throw new U5("Updating absent value");var u=o?H5(n,r):J0(a>2?arguments[2]:void 0)(r,n);return K5(n,r,t(u,r,n)),n}})});var Us=i((FQ,X0)=>{"use strict";var Qa=G(),Gs=D(),Xa=M(),z5=ee(),V5=TypeError;X0.exports=function(r,t){var n=z5(this),a=Gs(n.get),o=Gs(n.has),u=Gs(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Xa(t)&&!Xa(s))throw new V5("At least one callback required");return Qa(o,n,r)?(c=Qa(a,n,r),Xa(t)&&(c=t(c),Qa(u,n,r,c))):Xa(s)&&(c=s(),Qa(u,n,r,c)),c}});var Z0=i(()=>{"use strict";var Y5=q(),J5=Us();Y5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:J5})});var eC=i(()=>{"use strict";var Q5=q(),X5=Us();Q5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:X5})});var tC=i((HQ,rC)=>{"use strict";var Z5=y0();x0();C0();O0();k0();_0();N0();j0();L0();$0();B0();$s();Fs();G0();H0();K0();z0();V0();Y0();Q0();Z0();eC();rC.exports=Z5});var aC=i((WQ,nC)=>{"use strict";nC.exports=tC()});var oC=i(()=>{"use strict";var e6=q(),r6=dt(),t6=Wi().indexOf,n6=ps(),Hs=r6([].indexOf),iC=!!Hs&&1/Hs([1],1,-0)<0,a6=iC||!n6("indexOf");e6({target:"Array",proto:!0,forced:a6},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return iC?Hs(this,r,t)||0:t6(this,r,t)}})});var sC=i((VQ,uC)=>{"use strict";oC();var i6=se();uC.exports=i6("Array","indexOf")});var lC=i((YQ,cC)=>{"use strict";var o6=W(),u6=sC(),Ws=Array.prototype;cC.exports=function(e){var r=e.indexOf;return e===Ws||o6(Ws,e)&&r===Ws.indexOf?u6:r}});var pC=i((JQ,fC)=>{"use strict";var s6=lC();fC.exports=s6});var vC=i((QQ,dC)=>{"use strict";var c6=pC();dC.exports=c6});var hC=i((XQ,mC)=>{"use strict";var l6=vC();mC.exports=l6});var bC=i((ZQ,yC)=>{"use strict";yC.exports=hC()});var MC=i(()=>{"use strict";var h6=q(),y6=ne(),NC=$n(),b6=P(),g6=b6(function(){NC(1)});h6({target:"Object",stat:!0,forced:g6},{keys:function(r){return NC(y6(r))}})});var LC=i((aZ,jC)=>{"use strict";MC();var q6=J();jC.exports=q6.Object.keys});var FC=i((iZ,$C)=>{"use strict";var x6=LC();$C.exports=x6});var BC=i((oZ,DC)=>{"use strict";var w6=FC();DC.exports=w6});var UC=i((uZ,GC)=>{"use strict";var S6=BC();GC.exports=S6});var WC=i((sZ,HC)=>{"use strict";HC.exports=UC()});var zC=i((cZ,KC)=>{KC.exports=WC()});var Xs=i((xZ,YC)=>{var Qs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},_6=Qs.yellow,P6=Object.keys(Qs),R6=/^#[0-9a-fA-F]{6}$/;YC.exports={COLOR_PRESETS:Qs,DEFAULT_COLOR:_6,PRESET_NAMES:P6,HEX_COLOR_REGEX:R6}});var dT=i((FZ,pT)=>{var fT={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},$6=Object.keys(fT);pT.exports={ALLOWED_REACTIONS:fT,ALLOWED_REACTION_EMOJIS:$6}});var Je="";function hc(e){Je=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function yc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function si({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await cr(f,"Failed to create comment"),f.json()}async function ci(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await cr(a,"Failed to update comment"),a.json()}async function bc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function gc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function qc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function xc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var hF=y(Kr(),1),yF=y(Kn(),1),bF=y(sa(),1),gF=y(ca(),1),qF=y(la(),1);var Fu=y(ot(),1);function hb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Fu.default.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Fu.default(function(n,a){var o=e.apply(r,t);function u(c){hb(o,n,a,u,s,"next",c)}function s(c){hb(o,n,a,u,s,"throw",c)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function ir(e){return new Wt(e,0)}var Du=y(ot(),1),Tb=y(ke(),1),Ob=y(Ca(),1);function _e(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Wt;Du.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Du.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof Tb.default=="function"&&Ob.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var xF=y(le(),1),wF=y(Qq(),1);function fe(e){var r,t=vF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function vF(e){return"startContainer"in e}function ur(e){if(mF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function mF(e){return"startContainer"in e}var cx=y(sx(),1);function lx(e){if((0,cx.default)(e))return e}var Sx=y(ke(),1),Ex=y(Vo(),1),Cx=y(cs(),1);function Tx(e,r){var t=e==null?null:typeof Sx.default<"u"&&(0,Ex.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Cx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var Ox=y($i(),1),kx=y(lo(),1);function Da(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function ls(e,r){if(e){var t;if(typeof e=="string")return Da(e,r);var n=(0,Ox.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,kx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Da(e,r):void 0}}function Ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,r){return lx(e)||Tx(e,r)||ls(e,r)||Ix()}var _x=y(ke(),1),Px=y(Ca(),1),Rx=y(en(),1),an=y(ot(),1);function st(e){var r,t,n,a=2;for(typeof _x.default<"u"&&(t=Px.default,n=Rx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ba(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ba(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ba=function(n){this.s=n,this.n=n.next},Ba.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?an.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?an.default.reject(n):r(a.apply(this.s,arguments))}},new Ba(e)}var YD=y(le(),1);var UD=y(le(),1),HD=y(zx(),1),WD=y(Yx(),1),KD=y(yw(),1),zD=y(jw(),1),VD=y(hs(),1);var Vs=y(le(),1);var G3=y(le(),1);var bs=y(le(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Jw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ys=y(Yt(),1);var un=y(ke(),1),Qw=y(en(),1);function We(e){"@babel/helpers - typeof";return We=typeof un.default=="function"&&typeof Qw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},We(e)}var cS=y(sS(),1);function lS(e,r){if(We(e)!="object"||!e)return e;var t=e[cS.default];if(t!==void 0){var n=t.call(e,r||"default");if(We(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ga(e){var r=lS(e,"string");return We(r)=="symbol"?r:r+""}function fS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ys.default)(e,Ga(n.key),n)}}function sn(e,r,t){return r&&fS(e.prototype,r),t&&fS(e,t),(0,ys.default)(e,"prototype",{writable:!1}),e}var pS=y(Yt(),1);function Ir(e,r,t){return(r=Ga(r))in e?(0,pS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var dS=y(Kr(),1);var Ua="Iterator exhausted before seek ended.",cn=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var p=this._readToPreviousChunk(),d=He(p,2),v=d[0],h=d[1];if(t&&(u=v+u),h===null)throw new RangeError(Ua)}else for(;!on(this.currentChunk,n);){var s=this._readToNextChunk(),c=He(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ua)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,dS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=He(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ua)}}else{var d=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,d)),this.offsetInChunk=d,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var v=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(v,this.offsetInChunk)+u),this.offsetInChunk=v;break}else{var h=this._readToPreviousChunk(),m=He(h,2),x=m[0],b=m[1];if(t&&(u=x+u),b===null){if(o)break;throw new RangeError(Ua)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function mS(e,r){return gs.apply(this,arguments)}function gs(){return gs=Or(bs.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,I,w,E,S,T,L=arguments;return bs.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new cn(t()),p=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),d=f.readToChunk(r.endChunk,r.endIndex),v="",h="",m=function(){return v.length+d.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),x=Math.floor((s-m())/2),v=f.read(-x,!1,!0)+v,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-v.length),g=s-m(),v=f.read(-g,!1,!0)+v))),o||(f.seekToChunk(r.startChunk,r.startIndex-v.length),v=Ha(f,l,!0)+v,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ha(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:d,prefix:v,suffix:h},I=Wa(O)(t()),_.next=16,I.next();case 16:if(w=_.sent,!(!w.done&&Jw(w.value,r))){_.next=21;break}return _.next=20,I.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-v.length),p.seekToChunk(E.startChunk,E.startIndex-v.length),S=vS(f,p,!0),S!==void 0&&!o&&(S=Ha(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),T=vS(f,p,!1),T!==void 0&&!o&&(T=T+Ha(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(T===void 0||S.length<=T.length))){_.next=37;break}v=S+v,_.next=42;break;case 37:if(T===void 0){_.next=41;break}h=h+T,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(v=S+v),T!==void 0&&(h=h+T);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),gs.apply(this,arguments)}function vS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ha(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(e3(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function e3(e){return/^\s+$/.test(e)}var tE=y(Kr(),1),nE=y(Kn(),1),aE=y(sa(),1),iE=y(ca(),1),oE=y(la(),1);var ws=y(le(),1),uE=y($S(),1),sE=y(ZS(),1);function eE(e,r){var t;if(typeof aE.default>"u"||(0,iE.default)(e)==null){if(Array.isArray(e)||(t=j3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,oE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function j3(e,r){var t;if(e){if(typeof e=="string")return rE(e,r);var n=(0,tE.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,nE.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rE(e,r)}}function rE(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Wa(e){return function(){var r=_e(ws.default.mark(function n(a){var o,u,s,c,l,f,p,d,v,h,m,x,b,g,O,I,w,E,S,T,L,Ee,_,te,Ce,Z,F;return ws.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,d=p.data,v=[],h=eE(l),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(x=m.value,b=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-b,g<=d.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-b,(O<d.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),I=c.length-b,!(I<=d.length)){C.next=24;break}if(!(0,uE.default)(d).call(d,c.substring(b))){C.next=22;break}return C.next=22,x;case 22:C.next=25;break;case 24:d===c.substring(b,b+d.length)&&(x.charactersMatched+=d.length,v.push(x));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(l=v,!(c.length<=d.length)){C.next=49;break}w=0;case 38:if(!(w<=d.length)){C.next=49;break}if(E=d.indexOf(c,w),E!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:C.next=38;break;case 49:for(S=[],T=Math.max(d.length-c.length+1,0),L=function(Ye){var vc=d[Ye];S=(0,sE.default)(S).call(S,function(kT){return vc===c[Ye-kT]}),vc===c[0]&&S.push(Ye)},Ee=T;Ee<d.length;Ee++)L(Ee);_=eE(S);try{for(_.s();!(te=_.n()).done;)Ce=te.value,Z=d.length-Ce,F={charactersMatched:Z},Z>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ce+u.length+o.length),(Z>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ce+u.length),l.push(F)}catch(Nr){_.e(Nr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var D3=y(le(),1);var L3=y(Kr(),1),$3=y(hs(),1);var B3=y(le(),1);var pn=y(TE(),1);var kE=y(Oa(),1),IE=y(Yt(),1);var Cs=y(ka(),1),OE=y(Vt(),1);function sr(e,r){var t;return sr=Cs.default?(0,OE.default)(t=Cs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function Ts(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,kE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,IE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function _E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PE(e,r){if(r&&(We(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _E(e)}var RE=y(ka(),1),AE=y(Vt(),1),Os=y(Ta(),1);function _r(e){var r;return _r=RE.default?(0,AE.default)(r=Os.default).call(r):function(t){return t.__proto__||(0,Os.default)(t)},_r(e)}var zs=y(aC(),1),TC=y(Oa(),1);var gC=y(bC(),1);function qC(e){try{var r;return(0,gC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var wC=y(Ka(),1),SC=y(cs(),1),EC=y(Vt(),1);var xC=y(Ka(),1);function Ks(){try{var e=!Boolean.prototype.valueOf.call((0,xC.default)(Boolean,[],function(){}))}catch{}return(Ks=function(){return!!e})()}function CC(e,r,t){if(Ks())return wC.default.apply(null,arguments);var n=[null];(0,SC.default)(n).apply(n,r);var a=new((0,EC.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function fn(e){var r=typeof zs.default=="function"?new zs.default:void 0;return fn=function(n){if(n===null||!qC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return CC(n,arguments,_r(this).constructor)}return a.prototype=(0,TC.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},fn(e)}function IC(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(v){return!r||r.intersectsNode(v)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=OC(e.startContainer,e.startOffset),o=He(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=OC(e.endContainer,e.endOffset),l=He(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function OC(e,r){var t;if(kC(e))return[e,r];var n;if(f6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(kC(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function kC(e){return e.nodeType===Node.TEXT_NODE}function f6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function PC(e){var r=p6();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,pn.default)(n,arguments,o)}else a=n.apply(this,arguments);return PE(this,a)}}function p6(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Za=function(e){Ts(t,e);var r=PC(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),d6=function(e){Ts(t,e);var r=PC(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!_C(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Za}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!_C(t))throw new Za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new d6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=IC(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function _C(e){return e.nodeType===Node.TEXT_NODE}function RC(e,r){return Ys.apply(this,arguments)}function Ys(){return Ys=Or(Vs.default.mark(function e(r,t){var n,a,o,u=arguments;return Vs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??fe(r)),o=new Pr(a),c.next=5,mS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ys.apply(this,arguments)}var Js=y(le(),1);function AC(e){var r=Wa(e);return function(){var t=_e(Js.default.mark(function a(o){var u,s,c,l,f,p,d,v;return Js.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(d=m.sent,s){m.next=29;break}return v=d,m.next=26,u.chunkRangeToRange(v);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var v6=y(le(),1);var m6=y(le(),1);var E6=y(zC(),1),C6=y(Kr(),1),T6=y(Kn(),1),O6=y(sa(),1),k6=y(ca(),1),I6=y(la(),1);async function VC(e,r){let t=await RC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function dn(e,r){let t=AC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ye=y(Xs()),vn=y(Xs());function ct(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return vn.COLOR_PRESETS[r]?vn.COLOR_PRESETS[r]:vn.HEX_COLOR_REGEX.test(r)?r:null}function ei(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var lt="fb-highlight",JC="fb-highlight-active",ri=new Map,mn=null;function XC(e){mn=e}function hn(e,r,t){let n=ct(t)||ye.DEFAULT_COLOR;ri.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=QC(e,r,n);a.push(o)}else{let o=N6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(QC(c,r,n))}}return a}function QC(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return A6(e,r,u,t);let s=document.createElement("mark");s.className=lt,s.dataset.commentId=r,s.style.backgroundColor=ei(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{mn&&mn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function A6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let d=document.createElementNS(o,"g");d.setAttribute("class",lt),d.setAttribute("data-comment-id",r),d.style.cursor="pointer";for(let b=0;b<a.length;b++){let g=a[b],O=document.createElementNS(o,"rect"),I=t.createSVGPoint();I.x=g.left,I.y=g.top;let w=I.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",d.appendChild(O)}f&&f!==t?f.appendChild(d):t.appendChild(d);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let h=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=b=>{b.preventDefault(),b.stopPropagation(),mn&&mn(r)};return h.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",x),b.dataset.fbCommentId=r}),d}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function ti(e){ri.delete(e),document.querySelectorAll(`.${lt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function ZC(){ri.clear(),document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function yn(e){document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ri.get(t)||ye.DEFAULT_COLOR,o=ei(a,.55),u=ei(a,.35);n?r.classList.add(JC):r.classList.remove(JC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Zs(e){let r=document.querySelector(`.${lt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function N6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function eT(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function rT(e,r){let t=eT(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Re(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var M6=`
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
`,tT=null,nT=null;function aT(e,r){nT=e,tT=r,j6()}function j6(){let e=document.createElement("style");e.textContent=M6,document.head.appendChild(e)}function iT(){let e=tT(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(nT.contentSelector||"body").innerHTML,c=rT(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Re(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function L6(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function ec(e){if(!e)return"";let r=Re(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,a)=>{let o=t.length;return t.push(`<code>${a}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,a,o)=>{let u=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return L6(u)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${a}</a>`:a}),r=r.replace(/\x01(\d+)\x02/g,(n,a)=>t[a]),r=r.replace(/\n/g,"<br>"),r}function oT(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function rc(e,r){return e.length>r?e.slice(0,r)+"...":e}function uT(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var bn=null;function cT(e){bn=document.createElement("div"),bn.className="fb-toast-container",e.appendChild(bn)}function ze(e,r="success"){if(!bn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>sT(t)),t.appendChild(o)}bn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>sT(t),r==="error"?8e3:4e3)}function sT(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function lT(e,r){return r<=0?0:(e%r+r)%r}var ni=y(dT());var F6=320,hT="feedback-layer-commenter",B=null,pe=null,we=null,tc=null,yT=null,nc=null,ac=null,ic=null,oc=null,xn=null,D6=null,uc=null,bT=!1,gT=[],sc=new Set,Ae=-1,gn=null,vT=!1;function B6(){vT||(vT=!0,Q6())}function Ve(){return localStorage.getItem(hT)||""}function qT({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){yT=e,nc=r,ac=t,ic=n,oc=a,xn=o,D6=u,uc=s||null,B6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>ft()),document.body.appendChild(c),document.body.appendChild(B),cT(B),pe=B.querySelector(".fb-comment-list"),pe.setAttribute("role","list"),we=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(hT,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>iT()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>wT()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>cc());let v=B.querySelector(".fb-show-resolved-cb");v.addEventListener("change",()=>{bT=v.checked,de(gT,sc)}),document.addEventListener("keydown",U6)}function ft(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),W6(),pe?.querySelector(".fb-thread .fb-cmt-card")&&ai(0)}function cc(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),ST(),Ae=-1,document.body.focus()}function xT(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function qn(){return pe?Array.from(pe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ai(e){let r=qn();if(r.length===0)return;e=lT(e,r.length),Ae=e,pe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&sc.has(n.dataset.commentId)&&(yn(n.dataset.commentId),Zs(n.dataset.commentId))}function G6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),cc();return}if(!xT()){if(r==="Enter"){let t=qn();if(Ae>=0&&Ae<t.length){e.preventDefault();let a=t[Ae].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),qn().length===0)return;let n=Ae<0?0:Ae+1;ai(n);return}if(r==="k"){e.preventDefault();let t=qn();if(t.length===0)return;let n=Ae<0?t.length-1:Ae-1;ai(n);return}r==="?"&&(e.preventDefault(),wT())}}function wT(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function U6(e){xT()||e.key==="s"&&(e.preventDefault(),H6())}function H6(){B.classList.contains("fb-sidebar-collapsed")?ft():cc()}function W6(){ST(),gn=G6,document.addEventListener("keydown",gn)}function ST(){gn&&(document.removeEventListener("keydown",gn),gn=null)}function ET(e){if(ft(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}tc=e,we.style.display="";let r=Object.entries(ye.COLOR_PRESETS),t=uc||ye.DEFAULT_COLOR;we.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Re(rc(e,120))}"</div>
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
  `;let n=t;we.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),we.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=we.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(yT({comment:u,commenter:Ve(),color:n}),we.style.display="none",tc=null)};we.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),we.querySelector(".fb-cancel-btn").addEventListener("click",()=>{we.style.display="none",tc=null}),we.scrollIntoView({behavior:"smooth",block:"nearest"})}function de(e,r=new Set,t=new Map){gT=e,sc=r,Ae=-1,pe.innerHTML="";let{topLevel:n,repliesByParent:a}=oT(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),d=t.get(f.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)});let s=[...o,...u],c=bT?s:s.filter(l=>l.status!=="closed");if(s.length===0){pe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){pe.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(mT(l,!1,f));let d=a.get(l.id)||[];for(let h of d)p.appendChild(mT(h,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",h=>{h.stopPropagation(),Y6(l.id,p,v)}),p.appendChild(v),p.addEventListener("focus",()=>{let m=qn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&ai(m)}),pe.appendChild(p)}}function mT(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Re(rc(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${ec(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Re(e.author)}</span>
      <span class="fb-cmt-time">${uT(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return z6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(yn(e.id),Zs(e.id)),pe.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),ac&&ac(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),J6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),nc&&nc(e.id)}),a}var lc=ni.ALLOWED_REACTIONS,K6=Object.keys(lc);function z6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=lc[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),xn&&xn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),V6(e,r,a)}),e.appendChild(a)}function V6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of K6){let s=lc[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),xn&&xn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function Y6(e,r,t){ft();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ic&&ic({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function J6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=ct(e.color)||uc||ye.DEFAULT_COLOR,u=Object.entries(ye.COLOR_PRESETS);t.innerHTML=`
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
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(d=>d.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;oc&&oc(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=ec(n)})}function CT(e){let r=pe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(pe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function Q6(){let e=document.createElement("style");e.textContent=`
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
      width: ${F6}px;
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
  `,document.head.appendChild(e)}function TT(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}function X6(e){let r=new URL(e);return r.protocol=r.protocol==="https:"?"wss:":"ws:",r.pathname="/ws",r.toString()}function fc({apiBaseUrl:e,documentId:r,onEvent:t}){let n=X6(e),a=null,o=1e3,u=null,s=!1,c=!1;function l(){if(!s){c=!1;try{a=new WebSocket(n)}catch{f();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=p=>{try{let d=JSON.parse(p.data);if(d.type==="subscribed"&&d.documentId===r){c=!0;return}c&&t(d)}catch{}},a.onclose=()=>{c=!1,s||f()},a.onerror=()=>{}}}function f(){s||(u=setTimeout(()=>{l()},o),o=Math.min(o*2,3e4))}return l(),{close(){s=!0,clearTimeout(u),a&&(a.onclose=null,a.close())}}}var Ar=null,oi=null,En=null,dc=null,k=[],Rr=null,Se=null,U=new Set,H=new Map,wn=null,ii=null;function Z6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};hc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{TT(),Ar=document.querySelector(r.contentSelector)||document.body,oi=r.documentUri||window.location.origin+window.location.pathname,En=r.documentId||null,dc=ct(r.defaultColor)||null,ii=r.apiUrl||window.location.origin,document.documentElement.dataset.remarqTheme=r.theme,qT({onSubmit:a8,onDelete:v8,onResolve:i8,onReply:o8,onEdit:u8,onReaction:c8,onColorChange:s8,defaultColor:dc}),XC(a=>{ft(),CT(a),yn(a)}),t8(),await t(),await e8();{let a=En||(k.length>0?k[0].document:null);a&&(wn=fc({apiBaseUrl:ii,documentId:a,onEvent:OT}))}window.addEventListener("beforeunload",()=>{wn&&wn.close()}),aT(r,()=>k)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function e8(){try{k=await yc(oi,En),U=await r8(k),de(k,U,H)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function r8(e){ZC();let r=new Set;H.clear();for(let t of e)if(!t.parent)try{let n=await dn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},Ar);n&&t.status!=="closed"?(hn(n,t.id,t.color),r.add(t.id),H.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),H.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function t8(){document.addEventListener("mouseup",pc),document.addEventListener("keyup",pc),document.addEventListener("touchend",pc)}function pc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!Ar.contains(r.commonAncestorContainer)){Sn();return}n8(r)},10)}function n8(e){Sn();let r=e.getBoundingClientRect();Se=document.createElement("button"),Se.className="fb-annotate-tooltip",Se.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Se.style.top=window.scrollY+r.bottom+8+"px",Se.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Rr=await VC(o,Ar),ET(Rr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};Se.addEventListener("mousedown",t),Se.addEventListener("touchstart",t),document.body.appendChild(Se)}function Sn(){Se&&(Se.remove(),Se=null)}async function a8({comment:e,commenter:r,color:t}){if(!Rr)return;let n=t||dc||null;try{let a=await si({uri:oi,document:En,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r,color:n});k.push(a);let o=await dn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),U.add(a.id),H.set(a.id,o)),de(k,U,H),!wn&&ii&&a.document&&(wn=fc({apiBaseUrl:ii,documentId:a.document,onEvent:OT})),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Rr=null}async function ui(e){if(!e.parent)if(ti(e.id),H.delete(e.id),e.status!=="closed")try{let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r?(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r)):U.delete(e.id)}catch(r){console.warn(`[feedback-layer] Could not anchor comment ${e.id}:`,r),U.delete(e.id)}else U.delete(e.id)}async function i8(e,r){try{let n=await bc(e,r?"closed":"open"),a=k.findIndex(o=>o.id===e);a!==-1&&(k[a]=n),await ui(n),de(k,U,H)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function o8({parent_id:e,comment:r,commenter:t}){try{let n=await si({uri:oi,document:En,body:r,author:t,parent:e});k.push(n),de(k,U,H)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function u8(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await ci(e,n),o=k.findIndex(u=>u.id===e);o!==-1&&(k[o]=a),t!==void 0&&await ui(a),de(k,U,H)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function s8(e,r){try{let t=await ci(e,{color:r}),n=k.findIndex(a=>a.id===e);n!==-1&&(k[n]=t),await ui(t),de(k,U,H)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function c8(e,r){let t=Ve();if(t)try{let o=k.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await xc(e,r,t):u=await qc(e,r,t);let s=k.findIndex(c=>c.id===e);s!==-1&&(k[s]={...k[s],reactions:u.reactions}),de(k,U,H)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function l8(e){if(!k.some(r=>r.id===e.id)){if(k.push(e),!e.parent){let r=await dn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},Ar);r&&(hn(r,e.id,e.color),U.add(e.id),H.set(e.id,r))}de(k,U,H)}}async function f8(e){let r=k.findIndex(t=>t.id===e.id);r!==-1&&(k[r]=e,await ui(e),de(k,U,H))}async function p8(e){k.some(r=>r.id===e.id)&&(ti(e.id),U.delete(e.id),H.delete(e.id),k=k.filter(r=>r.id!==e.id&&r.parent!==e.id),de(k,U,H))}var d8={"comment:created":l8,"comment:updated":f8,"comment:deleted":p8};async function OT(e){let{type:r,comment:t}=e;if(!t)return;let n=d8[r];if(n)try{await n(t)}catch(a){console.warn(`[feedback-layer] WebSocket ${r} failed for ${t.id}:`,a)}}async function v8(e){try{await gc(e),ti(e),U.delete(e),k=k.filter(r=>r.id!==e&&r.parent!==e),de(k,U,H)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{Z6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
