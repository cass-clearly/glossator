var FeedbackLayer=(()=>{var BE=Object.create;var Gs=Object.defineProperty;var GE=Object.getOwnPropertyDescriptor;var UE=Object.getOwnPropertyNames;var WE=Object.getPrototypeOf,HE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var KE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of UE(r))!HE.call(e,i)&&i!==t&&Gs(e,i,{get:()=>r[i],enumerable:!(n=GE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?BE(WE(e)):{},KE(r||!e||!e.__esModule?Gs(t,"default",{value:e,enumerable:!0}):t,e));var _=a((yU,zs)=>{"use strict";zs.exports=function(e){try{return!!e()}catch{return!0}}});var Ir=a((gU,Ys)=>{"use strict";var VE=_();Ys.exports=!VE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((bU,Xs)=>{"use strict";var Js=Ir(),Qs=Function.prototype,Hi=Qs.call,zE=Js&&Qs.bind.bind(Hi,Hi);Xs.exports=Js?zE:function(e){return function(){return Hi.apply(e,arguments)}}});var B=a((qU,Zs)=>{"use strict";var YE=A();Zs.exports=YE({}.isPrototypeOf)});var P=a((Ki,ec)=>{"use strict";var at=function(e){return e&&e.Math===Math&&e};ec.exports=at(typeof globalThis=="object"&&globalThis)||at(typeof window=="object"&&window)||at(typeof self=="object"&&self)||at(typeof global=="object"&&global)||at(typeof Ki=="object"&&Ki)||function(){return this}()||Function("return this")()});var kr=a((xU,ic)=>{"use strict";var JE=Ir(),nc=Function.prototype,rc=nc.apply,tc=nc.call;ic.exports=typeof Reflect=="object"&&Reflect.apply||(JE?tc.bind(rc):function(){return tc.apply(rc,arguments)})});var qe=a((SU,oc)=>{"use strict";var ac=A(),QE=ac({}.toString),XE=ac("".slice);oc.exports=function(e){return XE(QE(e),8,-1)}});var ot=a((wU,uc)=>{"use strict";var ZE=qe(),eC=A();uc.exports=function(e){if(ZE(e)==="Function")return eC(e)}});var N=a((TU,sc)=>{"use strict";var Vi=typeof document=="object"&&document.all;sc.exports=typeof Vi>"u"&&Vi!==void 0?function(e){return typeof e=="function"||e===Vi}:function(e){return typeof e=="function"}});var G=a((OU,cc)=>{"use strict";var rC=_();cc.exports=!rC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((EU,lc)=>{"use strict";var tC=Ir(),fn=Function.prototype.call;lc.exports=tC?fn.bind(fn):function(){return fn.apply(fn,arguments)}});var zi=a(pc=>{"use strict";var fc={}.propertyIsEnumerable,vc=Object.getOwnPropertyDescriptor,nC=vc&&!fc.call({1:2},1);pc.f=nC?function(r){var t=vc(this,r);return!!t&&t.enumerable}:fc});var We=a((IU,dc)=>{"use strict";dc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var vn=a((kU,hc)=>{"use strict";var iC=A(),aC=_(),oC=qe(),Yi=Object,uC=iC("".split);hc.exports=aC(function(){return!Yi("z").propertyIsEnumerable(0)})?function(e){return oC(e)==="String"?uC(e,""):Yi(e)}:Yi});var nr=a((_U,mc)=>{"use strict";mc.exports=function(e){return e==null}});var ir=a((PU,yc)=>{"use strict";var sC=nr(),cC=TypeError;yc.exports=function(e){if(sC(e))throw new cC("Can't call method on "+e);return e}});var Ce=a((RU,gc)=>{"use strict";var lC=vn(),fC=ir();gc.exports=function(e){return lC(fC(e))}});var $=a((AU,bc)=>{"use strict";var vC=N();bc.exports=function(e){return typeof e=="object"?e!==null:vC(e)}});var K=a((NU,qc)=>{"use strict";qc.exports={}});var U=a((MU,Sc)=>{"use strict";var Ji=K(),Qi=P(),pC=N(),xc=function(e){return pC(e)?e:void 0};Sc.exports=function(e,r){return arguments.length<2?xc(Ji[e])||xc(Qi[e]):Ji[e]&&Ji[e][r]||Qi[e]&&Qi[e][r]}});var _r=a((jU,Oc)=>{"use strict";var dC=P(),wc=dC.navigator,Tc=wc&&wc.userAgent;Oc.exports=Tc?String(Tc):""});var Pr=a(($U,Pc)=>{"use strict";var _c=P(),Xi=_r(),Ec=_c.process,Cc=_c.Deno,Ic=Ec&&Ec.versions||Cc&&Cc.version,kc=Ic&&Ic.v8,de,pn;kc&&(de=kc.split("."),pn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!pn&&Xi&&(de=Xi.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=Xi.match(/Chrome\/(\d+)/),de&&(pn=+de[1])));Pc.exports=pn});var ar=a((LU,Ac)=>{"use strict";var Rc=Pr(),hC=_(),mC=P(),yC=mC.String;Ac.exports=!!Object.getOwnPropertySymbols&&!hC(function(){var e=Symbol("symbol detection");return!yC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Rc&&Rc<41})});var Zi=a((FU,Nc)=>{"use strict";var gC=ar();Nc.exports=gC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Rr=a((DU,Mc)=>{"use strict";var bC=U(),qC=N(),xC=B(),SC=Zi(),wC=Object;Mc.exports=SC?function(e){return typeof e=="symbol"}:function(e){var r=bC("Symbol");return qC(r)&&xC(r.prototype,wC(e))}});var He=a((BU,jc)=>{"use strict";var TC=String;jc.exports=function(e){try{return TC(e)}catch{return"Object"}}});var F=a((GU,$c)=>{"use strict";var OC=N(),EC=He(),CC=TypeError;$c.exports=function(e){if(OC(e))return e;throw new CC(EC(e)+" is not a function")}});var dn=a((UU,Lc)=>{"use strict";var IC=F(),kC=nr();Lc.exports=function(e,r){var t=e[r];return kC(t)?void 0:IC(t)}});var Dc=a((WU,Fc)=>{"use strict";var ea=D(),ra=N(),ta=$(),_C=TypeError;Fc.exports=function(e,r){var t,n;if(r==="string"&&ra(t=e.toString)&&!ta(n=ea(t,e))||ra(t=e.valueOf)&&!ta(n=ea(t,e))||r!=="string"&&ra(t=e.toString)&&!ta(n=ea(t,e)))return n;throw new _C("Can't convert object to primitive value")}});var X=a((HU,Bc)=>{"use strict";Bc.exports=!0});var Wc=a((KU,Uc)=>{"use strict";var Gc=P(),PC=Object.defineProperty;Uc.exports=function(e,r){try{PC(Gc,e,{value:r,configurable:!0,writable:!0})}catch{Gc[e]=r}return r}});var ut=a((VU,Vc)=>{"use strict";var RC=X(),AC=P(),NC=Wc(),Hc="__core-js_shared__",Kc=Vc.exports=AC[Hc]||NC(Hc,{});(Kc.versions||(Kc.versions=[])).push({version:"3.48.0",mode:RC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var or=a((zU,Yc)=>{"use strict";var zc=ut();Yc.exports=function(e,r){return zc[e]||(zc[e]=r||{})}});var ee=a((YU,Jc)=>{"use strict";var MC=ir(),jC=Object;Jc.exports=function(e){return jC(MC(e))}});var W=a((JU,Qc)=>{"use strict";var $C=A(),LC=ee(),FC=$C({}.hasOwnProperty);Qc.exports=Object.hasOwn||function(r,t){return FC(LC(r),t)}});var Ar=a((QU,Xc)=>{"use strict";var DC=A(),BC=0,GC=Math.random(),UC=DC(1.1.toString);Xc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+UC(++BC+GC,36)}});var R=a((XU,el)=>{"use strict";var WC=P(),HC=or(),Zc=W(),KC=Ar(),VC=ar(),zC=Zi(),Nr=WC.Symbol,na=HC("wks"),YC=zC?Nr.for||Nr:Nr&&Nr.withoutSetter||KC;el.exports=function(e){return Zc(na,e)||(na[e]=VC&&Zc(Nr,e)?Nr[e]:YC("Symbol."+e)),na[e]}});var il=a((ZU,nl)=>{"use strict";var JC=D(),rl=$(),tl=Rr(),QC=dn(),XC=Dc(),ZC=R(),eI=TypeError,rI=ZC("toPrimitive");nl.exports=function(e,r){if(!rl(e)||tl(e))return e;var t=QC(e,rI),n;if(t){if(r===void 0&&(r="default"),n=JC(t,e,r),!rl(n)||tl(n))return n;throw new eI("Can't convert object to primitive value")}return r===void 0&&(r="number"),XC(e,r)}});var hn=a((eW,al)=>{"use strict";var tI=il(),nI=Rr();al.exports=function(e){var r=tI(e,"string");return nI(r)?r:r+""}});var mn=a((rW,ul)=>{"use strict";var iI=P(),ol=$(),ia=iI.document,aI=ol(ia)&&ol(ia.createElement);ul.exports=function(e){return aI?ia.createElement(e):{}}});var aa=a((tW,sl)=>{"use strict";var oI=G(),uI=_(),sI=mn();sl.exports=!oI&&!uI(function(){return Object.defineProperty(sI("div"),"a",{get:function(){return 7}}).a!==7})});var st=a(ll=>{"use strict";var cI=G(),lI=D(),fI=zi(),vI=We(),pI=Ce(),dI=hn(),hI=W(),mI=aa(),cl=Object.getOwnPropertyDescriptor;ll.f=cI?cl:function(r,t){if(r=pI(r),t=dI(t),mI)try{return cl(r,t)}catch{}if(hI(r,t))return vI(!lI(fI.f,r,t),r[t])}});var oa=a((iW,fl)=>{"use strict";var yI=_(),gI=N(),bI=/#|\.prototype\./,ct=function(e,r){var t=xI[qI(e)];return t===wI?!0:t===SI?!1:gI(r)?yI(r):!!r},qI=ct.normalize=function(e){return String(e).replace(bI,".").toLowerCase()},xI=ct.data={},SI=ct.NATIVE="N",wI=ct.POLYFILL="P";fl.exports=ct});var V=a((aW,pl)=>{"use strict";var vl=ot(),TI=F(),OI=Ir(),EI=vl(vl.bind);pl.exports=function(e,r){return TI(e),r===void 0?e:OI?EI(e,r):function(){return e.apply(r,arguments)}}});var ua=a((oW,dl)=>{"use strict";var CI=G(),II=_();dl.exports=CI&&II(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((uW,hl)=>{"use strict";var kI=$(),_I=String,PI=TypeError;hl.exports=function(e){if(kI(e))return e;throw new PI(_I(e)+" is not an object")}});var re=a(yl=>{"use strict";var RI=G(),AI=aa(),NI=ua(),yn=Q(),ml=hn(),MI=TypeError,sa=Object.defineProperty,jI=Object.getOwnPropertyDescriptor,ca="enumerable",la="configurable",fa="writable";yl.f=RI?NI?function(r,t,n){if(yn(r),t=ml(t),yn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&fa in n&&!n[fa]){var i=jI(r,t);i&&i[fa]&&(r[t]=n.value,n={configurable:la in n?n[la]:i[la],enumerable:ca in n?n[ca]:i[ca],writable:!1})}return sa(r,t,n)}:sa:function(r,t,n){if(yn(r),t=ml(t),yn(n),AI)try{return sa(r,t,n)}catch{}if("get"in n||"set"in n)throw new MI("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((cW,gl)=>{"use strict";var $I=G(),LI=re(),FI=We();gl.exports=$I?function(e,r,t){return LI.f(e,r,FI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((lW,ql)=>{"use strict";var lt=P(),DI=kr(),BI=ot(),GI=N(),UI=st().f,WI=oa(),Mr=K(),HI=V(),jr=xe(),bl=W();ut();var KI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return DI(e,this,arguments)};return r.prototype=e.prototype,r};ql.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?lt:i?lt[t]:lt[t]&&lt[t].prototype,l=n?Mr:Mr[t]||jr(Mr,t,{})[t],s=l.prototype,c,f,v,p,d,m,h,y,q;for(p in r)c=WI(n?p:t+(i?".":"#")+p,e.forced),f=!c&&u&&bl(u,p),m=l[p],f&&(e.dontCallGetSet?(q=UI(u,p),h=q&&q.value):h=u[p]),d=f&&h?h:r[p],!(!c&&!o&&typeof m==typeof d)&&(e.bind&&f?y=HI(d,lt):e.wrap&&f?y=KI(d):o&&GI(d)?y=BI(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&jr(y,"sham",!0),jr(l,p,y),o&&(v=t+"Prototype",bl(Mr,v)||jr(Mr,v,{}),jr(Mr[v],p,d),e.real&&s&&(c||!s[p])&&jr(s,p,d)))}});var Ie=a((fW,xl)=>{"use strict";var VI=qe();xl.exports=Array.isArray||function(r){return VI(r)==="Array"}});var gn=a((vW,wl)=>{"use strict";var zI=R(),YI=zI("toStringTag"),Sl={};Sl[YI]="z";wl.exports=String(Sl)==="[object z]"});var ft=a((pW,Tl)=>{"use strict";var JI=gn(),QI=N(),bn=qe(),XI=R(),ZI=XI("toStringTag"),ek=Object,rk=bn(function(){return arguments}())==="Arguments",tk=function(e,r){try{return e[r]}catch{}};Tl.exports=JI?bn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=tk(r=ek(e),ZI))=="string"?t:rk?bn(r):(n=bn(r))==="Object"&&QI(r.callee)?"Arguments":n}});var pa=a((dW,Ol)=>{"use strict";var nk=A(),ik=N(),va=ut(),ak=nk(Function.toString);ik(va.inspectSource)||(va.inspectSource=function(e){return ak(e)});Ol.exports=va.inspectSource});var pt=a((hW,_l)=>{"use strict";var ok=A(),uk=_(),El=N(),sk=ft(),ck=U(),lk=pa(),Cl=function(){},Il=ck("Reflect","construct"),da=/^\s*(?:class|function)\b/,fk=ok(da.exec),vk=!da.test(Cl),vt=function(r){if(!El(r))return!1;try{return Il(Cl,[],r),!0}catch{return!1}},kl=function(r){if(!El(r))return!1;switch(sk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return vk||!!fk(da,lk(r))}catch{return!0}};kl.sham=!0;_l.exports=!Il||uk(function(){var e;return vt(vt.call)||!vt(Object)||!vt(function(){e=!0})||e})?kl:vt});var Rl=a((mW,Pl)=>{"use strict";var pk=Math.ceil,dk=Math.floor;Pl.exports=Math.trunc||function(r){var t=+r;return(t>0?dk:pk)(t)}});var qn=a((yW,Al)=>{"use strict";var hk=Rl();Al.exports=function(e){var r=+e;return r!==r||r===0?0:hk(r)}});var ha=a((gW,Nl)=>{"use strict";var mk=qn(),yk=Math.max,gk=Math.min;Nl.exports=function(e,r){var t=mk(e);return t<0?yk(t+r,0):gk(t,r)}});var ma=a((bW,Ml)=>{"use strict";var bk=qn(),qk=Math.min;Ml.exports=function(e){var r=bk(e);return r>0?qk(r,9007199254740991):0}});var le=a((qW,jl)=>{"use strict";var xk=ma();jl.exports=function(e){return xk(e.length)}});var $r=a((xW,$l)=>{"use strict";var Sk=G(),wk=re(),Tk=We();$l.exports=function(e,r,t){Sk?wk.f(e,r,Tk(0,t)):e[r]=t}});var Lr=a((SW,Ll)=>{"use strict";var Ok=G(),Ek=Ie(),Ck=TypeError,Ik=Object.getOwnPropertyDescriptor,kk=Ok&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Ll.exports=kk?function(e,r){if(Ek(e)&&!Ik(e,"length").writable)throw new Ck("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var dt=a((wW,Fl)=>{"use strict";var _k=_(),Pk=R(),Rk=Pr(),Ak=Pk("species");Fl.exports=function(e){return Rk>=51||!_k(function(){var r=[],t=r.constructor={};return t[Ak]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var ur=a((TW,Dl)=>{"use strict";var Nk=A();Dl.exports=Nk([].slice)});var Ul=a(()=>{"use strict";var Mk=x(),Bl=Ie(),jk=pt(),$k=$(),Gl=ha(),Lk=le(),Fk=Ce(),Dk=$r(),Bk=Lr(),Gk=R(),Uk=dt(),Wk=ur(),Hk=Uk("slice"),Kk=Gk("species"),ya=Array,Vk=Math.max;Mk({target:"Array",proto:!0,forced:!Hk},{slice:function(r,t){var n=Fk(this),i=Lk(n),o=Gl(r,i),u=Gl(t===void 0?i:t,i),l,s,c;if(Bl(n)&&(l=n.constructor,jk(l)&&(l===ya||Bl(l.prototype))?l=void 0:$k(l)&&(l=l[Kk],l===null&&(l=void 0)),l===ya||l===void 0))return Wk(n,o,u);for(s=new(l===void 0?ya:l)(Vk(u-o,0)),c=0;o<u;o++,c++)o in n&&Dk(s,c,n[o]);return Bk(s,c),s}})});var oe=a((CW,Wl)=>{"use strict";var zk=P(),Yk=K();Wl.exports=function(e,r){var t=Yk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=zk[e],o=i&&i.prototype;return o&&o[r]}});var Kl=a((IW,Hl)=>{"use strict";Ul();var Jk=oe();Hl.exports=Jk("Array","slice")});var zl=a((kW,Vl)=>{"use strict";var Qk=B(),Xk=Kl(),ga=Array.prototype;Vl.exports=function(e){var r=e.slice;return e===ga||Qk(ga,e)&&r===ga.slice?Xk:r}});var Jl=a((_W,Yl)=>{"use strict";var Zk=zl();Yl.exports=Zk});var Xl=a((PW,Ql)=>{"use strict";var e0=Jl();Ql.exports=e0});var ef=a((RW,Zl)=>{"use strict";var r0=Xl();Zl.exports=r0});var ba=a((AW,rf)=>{"use strict";rf.exports=ef()});var Fr=a((NW,tf)=>{tf.exports=ba()});var Ke=a((MW,nf)=>{"use strict";var t0=ft(),n0=String;nf.exports=function(e){if(t0(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return n0(e)}});var sf=a((jW,uf)=>{"use strict";var qa=A(),i0=qn(),a0=Ke(),o0=ir(),u0=qa("".charAt),af=qa("".charCodeAt),s0=qa("".slice),of=function(e){return function(r,t){var n=a0(o0(r)),i=i0(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=af(n,i),u<55296||u>56319||i+1===o||(l=af(n,i+1))<56320||l>57343?e?u0(n,i):u:e?s0(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};uf.exports={codeAt:of(!1),charAt:of(!0)}});var ff=a(($W,lf)=>{"use strict";var c0=P(),l0=N(),cf=c0.WeakMap;lf.exports=l0(cf)&&/native code/.test(String(cf))});var ht=a((LW,pf)=>{"use strict";var f0=or(),v0=Ar(),vf=f0("keys");pf.exports=function(e){return vf[e]||(vf[e]=v0(e))}});var Dr=a((FW,df)=>{"use strict";df.exports={}});var Ve=a((DW,yf)=>{"use strict";var p0=ff(),mf=P(),d0=$(),h0=xe(),xa=W(),Sa=ut(),m0=ht(),y0=Dr(),hf="Object already initialized",wa=mf.TypeError,g0=mf.WeakMap,xn,mt,Sn,b0=function(e){return Sn(e)?mt(e):xn(e,{})},q0=function(e){return function(r){var t;if(!d0(r)||(t=mt(r)).type!==e)throw new wa("Incompatible receiver, "+e+" required");return t}};p0||Sa.state?(he=Sa.state||(Sa.state=new g0),he.get=he.get,he.has=he.has,he.set=he.set,xn=function(e,r){if(he.has(e))throw new wa(hf);return r.facade=e,he.set(e,r),r},mt=function(e){return he.get(e)||{}},Sn=function(e){return he.has(e)}):(sr=m0("state"),y0[sr]=!0,xn=function(e,r){if(xa(e,sr))throw new wa(hf);return r.facade=e,h0(e,sr,r),r},mt=function(e){return xa(e,sr)?e[sr]:{}},Sn=function(e){return xa(e,sr)});var he,sr;yf.exports={set:xn,get:mt,has:Sn,enforce:b0,getterFor:q0}});var qf=a((BW,bf)=>{"use strict";var Ta=G(),x0=W(),gf=Function.prototype,S0=Ta&&Object.getOwnPropertyDescriptor,Oa=x0(gf,"name"),w0=Oa&&function(){}.name==="something",T0=Oa&&(!Ta||Ta&&S0(gf,"name").configurable);bf.exports={EXISTS:Oa,PROPER:w0,CONFIGURABLE:T0}});var Ea=a((GW,Sf)=>{"use strict";var O0=Ce(),E0=ha(),C0=le(),xf=function(e){return function(r,t,n){var i=O0(r),o=C0(i);if(o===0)return!e&&-1;var u=E0(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Sf.exports={includes:xf(!0),indexOf:xf(!1)}});var Ia=a((UW,Tf)=>{"use strict";var I0=A(),Ca=W(),k0=Ce(),_0=Ea().indexOf,P0=Dr(),wf=I0([].push);Tf.exports=function(e,r){var t=k0(e),n=0,i=[],o;for(o in t)!Ca(P0,o)&&Ca(t,o)&&wf(i,o);for(;r.length>n;)Ca(t,o=r[n++])&&(~_0(i,o)||wf(i,o));return i}});var wn=a((WW,Of)=>{"use strict";Of.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Tn=a((HW,Ef)=>{"use strict";var R0=Ia(),A0=wn();Ef.exports=Object.keys||function(r){return R0(r,A0)}});var ka=a(Cf=>{"use strict";var N0=G(),M0=ua(),j0=re(),$0=Q(),L0=Ce(),F0=Tn();Cf.f=N0&&!M0?Object.defineProperties:function(r,t){$0(r);for(var n=L0(t),i=F0(t),o=i.length,u=0,l;o>u;)j0.f(r,l=i[u++],n[l]);return r}});var _a=a((VW,If)=>{"use strict";var D0=U();If.exports=D0("document","documentElement")});var ze=a((zW,Mf)=>{"use strict";var B0=Q(),G0=ka(),kf=wn(),U0=Dr(),W0=_a(),H0=mn(),K0=ht(),_f=">",Pf="<",Ra="prototype",Aa="script",Af=K0("IE_PROTO"),Pa=function(){},Nf=function(e){return Pf+Aa+_f+e+Pf+"/"+Aa+_f},Rf=function(e){e.write(Nf("")),e.close();var r=e.parentWindow.Object;return e=null,r},V0=function(){var e=H0("iframe"),r="java"+Aa+":",t;return e.style.display="none",W0.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Nf("document.F=Object")),t.close(),t.F},On,En=function(){try{On=new ActiveXObject("htmlfile")}catch{}En=typeof document<"u"?document.domain&&On?Rf(On):V0():Rf(On);for(var e=kf.length;e--;)delete En[Ra][kf[e]];return En()};U0[Af]=!0;Mf.exports=Object.create||function(r,t){var n;return r!==null?(Pa[Ra]=B0(r),n=new Pa,Pa[Ra]=null,n[Af]=r):n=En(),t===void 0?n:G0.f(n,t)}});var Na=a((YW,jf)=>{"use strict";var z0=_();jf.exports=!z0(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var yt=a((JW,Lf)=>{"use strict";var Y0=W(),J0=N(),Q0=ee(),X0=ht(),Z0=Na(),$f=X0("IE_PROTO"),Ma=Object,e_=Ma.prototype;Lf.exports=Z0?Ma.getPrototypeOf:function(e){var r=Q0(e);if(Y0(r,$f))return r[$f];var t=r.constructor;return J0(t)&&r instanceof t?t.prototype:r instanceof Ma?e_:null}});var ke=a((QW,Ff)=>{"use strict";var r_=xe();Ff.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:r_(e,r,t),e}});var Fa=a((XW,Gf)=>{"use strict";var t_=_(),n_=N(),i_=$(),a_=ze(),Df=yt(),o_=ke(),u_=R(),s_=X(),La=u_("iterator"),Bf=!1,_e,ja,$a;[].keys&&($a=[].keys(),"next"in $a?(ja=Df(Df($a)),ja!==Object.prototype&&(_e=ja)):Bf=!0);var c_=!i_(_e)||t_(function(){var e={};return _e[La].call(e)!==e});c_?_e={}:s_&&(_e=a_(_e));n_(_e[La])||o_(_e,La,function(){return this});Gf.exports={IteratorPrototype:_e,BUGGY_SAFARI_ITERATORS:Bf}});var Wf=a((ZW,Uf)=>{"use strict";var l_=gn(),f_=ft();Uf.exports=l_?{}.toString:function(){return"[object "+f_(this)+"]"}});var Pe=a((eH,Kf)=>{"use strict";var v_=gn(),p_=re().f,d_=xe(),h_=W(),m_=Wf(),y_=R(),Hf=y_("toStringTag");Kf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(h_(i,Hf)||p_(i,Hf,{configurable:!0,value:r}),n&&!v_&&d_(i,"toString",m_))}});var cr=a((rH,Vf)=>{"use strict";Vf.exports={}});var Yf=a((tH,zf)=>{"use strict";var g_=Fa().IteratorPrototype,b_=ze(),q_=We(),x_=Pe(),S_=cr(),w_=function(){return this};zf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=b_(g_,{next:q_(+!n,t)}),x_(e,i,!1,!0),S_[i]=w_,e}});var Qf=a((nH,Jf)=>{"use strict";var T_=A(),O_=F();Jf.exports=function(e,r,t){try{return T_(O_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Zf=a((iH,Xf)=>{"use strict";var E_=$();Xf.exports=function(e){return E_(e)||e===null}});var rv=a((aH,ev)=>{"use strict";var C_=Zf(),I_=String,k_=TypeError;ev.exports=function(e){if(C_(e))return e;throw new k_("Can't set "+I_(e)+" as a prototype")}});var gt=a((oH,tv)=>{"use strict";var __=Qf(),P_=$(),R_=ir(),A_=rv();tv.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=__(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return R_(i),A_(o),P_(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var kn=a((uH,vv)=>{"use strict";var N_=x(),M_=D(),Cn=X(),lv=qf(),j_=N(),$_=Yf(),nv=yt(),iv=gt(),L_=Pe(),F_=xe(),Da=ke(),D_=R(),av=cr(),fv=Fa(),B_=lv.PROPER,G_=lv.CONFIGURABLE,ov=fv.IteratorPrototype,In=fv.BUGGY_SAFARI_ITERATORS,bt=D_("iterator"),uv="keys",qt="values",sv="entries",cv=function(){return this};vv.exports=function(e,r,t,n,i,o,u){$_(t,r,n);var l=function(q){if(q===i&&p)return p;if(!In&&q&&q in f)return f[q];switch(q){case uv:return function(){return new t(this,q)};case qt:return function(){return new t(this,q)};case sv:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",c=!1,f=e.prototype,v=f[bt]||f["@@iterator"]||i&&f[i],p=!In&&v||l(i),d=r==="Array"&&f.entries||v,m,h,y;if(d&&(m=nv(d.call(new e)),m!==Object.prototype&&m.next&&(!Cn&&nv(m)!==ov&&(iv?iv(m,ov):j_(m[bt])||Da(m,bt,cv)),L_(m,s,!0,!0),Cn&&(av[s]=cv))),B_&&i===qt&&v&&v.name!==qt&&(!Cn&&G_?F_(f,"name",qt):(c=!0,p=function(){return M_(v,this)})),i)if(h={values:l(qt),keys:o?p:l(uv),entries:l(sv)},u)for(y in h)(In||c||!(y in f))&&Da(f,y,h[y]);else N_({target:r,proto:!0,forced:In||c},h);return(!Cn||u)&&f[bt]!==p&&Da(f,bt,p,{name:i}),av[r]=p,h}});var _n=a((sH,pv)=>{"use strict";pv.exports=function(e,r){return{value:e,done:r}}});var lr=a(()=>{"use strict";var U_=sf().charAt,W_=Ke(),hv=Ve(),H_=kn(),dv=_n(),mv="String Iterator",K_=hv.set,V_=hv.getterFor(mv);H_(String,"String",function(e){K_(this,{type:mv,string:W_(e),index:0})},function(){var r=V_(this),t=r.string,n=r.index,i;return n>=t.length?dv(void 0,!0):(i=U_(t,n),r.index+=i.length,dv(i,!1))})});var Ba=a((fH,gv)=>{"use strict";var z_=D(),yv=Q(),Y_=dn();gv.exports=function(e,r,t){var n,i;yv(e);try{if(n=Y_(e,"return"),!n){if(r==="throw")throw t;return t}n=z_(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return yv(n),t}});var qv=a((vH,bv)=>{"use strict";var J_=Q(),Q_=Ba();bv.exports=function(e,r,t,n){try{return n?r(J_(t)[0],t[1]):r(t)}catch(i){Q_(e,"throw",i)}}});var Ga=a((pH,xv)=>{"use strict";var X_=R(),Z_=cr(),eP=X_("iterator"),rP=Array.prototype;xv.exports=function(e){return e!==void 0&&(Z_.Array===e||rP[eP]===e)}});var xt=a((dH,wv)=>{"use strict";var tP=ft(),Sv=dn(),nP=nr(),iP=cr(),aP=R(),oP=aP("iterator");wv.exports=function(e){if(!nP(e))return Sv(e,oP)||Sv(e,"@@iterator")||iP[tP(e)]}});var Pn=a((hH,Tv)=>{"use strict";var uP=D(),sP=F(),cP=Q(),lP=He(),fP=xt(),vP=TypeError;Tv.exports=function(e,r){var t=arguments.length<2?fP(e):r;if(sP(t))return cP(uP(t,e));throw new vP(lP(e)+" is not iterable")}});var Iv=a((mH,Cv)=>{"use strict";var pP=V(),dP=D(),hP=ee(),mP=qv(),yP=Ga(),gP=pt(),bP=le(),Ov=$r(),qP=Lr(),xP=Pn(),SP=xt(),Ev=Array;Cv.exports=function(r){var t=hP(r),n=gP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=pP(o,i>2?arguments[2]:void 0));var l=SP(t),s=0,c,f,v,p,d,m;if(l&&!(this===Ev&&yP(l)))for(f=n?new this:[],p=xP(t,l),d=p.next;!(v=dP(d,p)).done;s++)m=u?mP(p,o,[v.value,s],!0):v.value,Ov(f,s,m);else for(c=bP(t),f=n?new this(c):Ev(c);c>s;s++)m=u?o(t[s],s):t[s],Ov(f,s,m);return qP(f,s),f}});var Wa=a((yH,Rv)=>{"use strict";var wP=R(),_v=wP("iterator"),Pv=!1;try{kv=0,Ua={next:function(){return{done:!!kv++}},return:function(){Pv=!0}},Ua[_v]=function(){return this},Array.from(Ua,function(){throw 2})}catch{}var kv,Ua;Rv.exports=function(e,r){try{if(!r&&!Pv)return!1}catch{return!1}var t=!1;try{var n={};n[_v]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Av=a(()=>{"use strict";var TP=x(),OP=Iv(),EP=Wa(),CP=!EP(function(e){Array.from(e)});TP({target:"Array",stat:!0,forced:CP},{from:OP})});var Mv=a((qH,Nv)=>{"use strict";lr();Av();var IP=K();Nv.exports=IP.Array.from});var $v=a((xH,jv)=>{"use strict";var kP=Mv();jv.exports=kP});var Fv=a((SH,Lv)=>{"use strict";var _P=$v();Lv.exports=_P});var Bv=a((wH,Dv)=>{"use strict";var PP=Fv();Dv.exports=PP});var Ha=a((TH,Gv)=>{"use strict";Gv.exports=Bv()});var Rn=a((OH,Uv)=>{Uv.exports=Ha()});var St=a((EH,Wv)=>{"use strict";var RP=TypeError,AP=9007199254740991;Wv.exports=function(e){if(e>AP)throw RP("Maximum allowed index exceeded");return e}});var zv=a((CH,Vv)=>{"use strict";var Hv=Ie(),NP=pt(),MP=$(),jP=R(),$P=jP("species"),Kv=Array;Vv.exports=function(e){var r;return Hv(e)&&(r=e.constructor,NP(r)&&(r===Kv||Hv(r.prototype))?r=void 0:MP(r)&&(r=r[$P],r===null&&(r=void 0))),r===void 0?Kv:r}});var An=a((IH,Yv)=>{"use strict";var LP=zv();Yv.exports=function(e,r){return new(LP(e))(r===0?0:r)}});var Ka=a(()=>{"use strict";var FP=x(),DP=_(),BP=Ie(),GP=$(),UP=ee(),WP=le(),Jv=St(),Qv=$r(),HP=Lr(),KP=An(),VP=dt(),zP=R(),YP=Pr(),Xv=zP("isConcatSpreadable"),JP=YP>=51||!DP(function(){var e=[];return e[Xv]=!1,e.concat()[0]!==e}),QP=function(e){if(!GP(e))return!1;var r=e[Xv];return r!==void 0?!!r:BP(e)},XP=!JP||!VP("concat");FP({target:"Array",proto:!0,arity:1,forced:XP},{concat:function(r){var t=UP(this),n=KP(t,0),i=0,o,u,l,s,c;for(o=-1,l=arguments.length;o<l;o++)if(c=o===-1?t:arguments[o],QP(c))for(s=WP(c),Jv(i+s),u=0;u<s;u++,i++)u in c&&Qv(n,i,c[u]);else Jv(i+1),Qv(n,i++,c);return HP(n,i),n}})});var wt=a(()=>{});var Tt=a(Zv=>{"use strict";var ZP=Ia(),eR=wn(),rR=eR.concat("length","prototype");Zv.f=Object.getOwnPropertyNames||function(r){return ZP(r,rR)}});var Va=a((NH,tp)=>{"use strict";var tR=qe(),nR=Ce(),ep=Tt().f,iR=ur(),rp=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],aR=function(e){try{return ep(e)}catch{return iR(rp)}};tp.exports.f=function(r){return rp&&tR(r)==="Window"?aR(r):ep(nR(r))}});var Nn=a(np=>{"use strict";np.f=Object.getOwnPropertySymbols});var Mn=a((jH,ip)=>{"use strict";var oR=re();ip.exports=function(e,r,t){return oR.f(e,r,t)}});var Br=a(ap=>{"use strict";var uR=R();ap.f=uR});var M=a((LH,up)=>{"use strict";var op=K(),sR=W(),cR=Br(),lR=re().f;up.exports=function(e){var r=op.Symbol||(op.Symbol={});sR(r,e)||lR(r,e,{value:cR.f(e)})}});var za=a((FH,sp)=>{"use strict";var fR=D(),vR=U(),pR=R(),dR=ke();sp.exports=function(){var e=vR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=pR("toPrimitive");r&&!r[n]&&dR(r,n,function(i){return fR(t,this)},{arity:1})}});var Ot=a((DH,lp)=>{"use strict";var hR=V(),mR=vn(),yR=ee(),gR=le(),cp=An(),Ya=$r(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(s,c,f){for(var v=yR(s),p=mR(v),d=gR(p),m=hR(c,f),h=0,y=0,q=r?cp(s,d):t||u?cp(s,0):void 0,b,I;d>h;h++)if((l||h in p)&&(b=p[h],I=m(b,h,v),e))if(r)Ya(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:Ya(q,y++,b)}else switch(e){case 4:return!1;case 7:Ya(q,y++,b)}return o?-1:n||i?i:q}};lp.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Cp=a(()=>{"use strict";var jn=x(),It=P(),io=D(),bR=A(),qR=X(),Gr=G(),Ur=ar(),xR=_(),H=W(),SR=B(),Za=Q(),$n=Ce(),ao=hn(),wR=Ke(),eo=We(),Wr=ze(),pp=Tn(),TR=Tt(),dp=Va(),OR=Nn(),hp=st(),mp=re(),ER=ka(),yp=zi(),Ja=ke(),CR=Mn(),oo=or(),IR=ht(),gp=Dr(),fp=Ar(),kR=R(),_R=Br(),PR=M(),RR=za(),AR=Pe(),bp=Ve(),Ln=Ot().forEach,te=IR("hidden"),Fn="Symbol",Ct="prototype",NR=bp.set,vp=bp.getterFor(Fn),fe=Object[Ct],fr=It.Symbol,Et=fr&&fr[Ct],MR=It.RangeError,jR=It.TypeError,Qa=It.QObject,qp=hp.f,vr=mp.f,xp=dp.f,$R=yp.f,Sp=bR([].push),Re=oo("symbols"),kt=oo("op-symbols"),LR=oo("wks"),ro=!Qa||!Qa[Ct]||!Qa[Ct].findChild,wp=function(e,r,t){var n=qp(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},to=Gr&&xR(function(){return Wr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?wp:vr,Xa=function(e,r){var t=Re[e]=Wr(Et);return NR(t,{type:Fn,tag:e,description:r}),Gr||(t.description=r),t},Dn=function(r,t,n){r===fe&&Dn(kt,t,n),Za(r);var i=ao(t);return Za(n),H(Re,i)?(n.enumerable?(H(r,te)&&r[te][i]&&(r[te][i]=!1),n=Wr(n,{enumerable:eo(0,!1)})):(H(r,te)||vr(r,te,eo(1,Wr(null))),r[te][i]=!0),to(r,i,n)):vr(r,i,n)},uo=function(r,t){Za(r);var n=$n(t),i=pp(n).concat(Ep(n));return Ln(i,function(o){(!Gr||io(no,n,o))&&Dn(r,o,n[o])}),r},FR=function(r,t){return t===void 0?Wr(r):uo(Wr(r),t)},no=function(r){var t=ao(r),n=io($R,this,t);return this===fe&&H(Re,t)&&!H(kt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,te)&&this[te][t]?n:!0},Tp=function(r,t){var n=$n(r),i=ao(t);if(!(n===fe&&H(Re,i)&&!H(kt,i))){var o=qp(n,i);return o&&H(Re,i)&&!(H(n,te)&&n[te][i])&&(o.enumerable=!0),o}},Op=function(r){var t=xp($n(r)),n=[];return Ln(t,function(i){!H(Re,i)&&!H(gp,i)&&Sp(n,i)}),n},Ep=function(e){var r=e===fe,t=xp(r?kt:$n(e)),n=[];return Ln(t,function(i){H(Re,i)&&(!r||H(fe,i))&&Sp(n,Re[i])}),n};Ur||(fr=function(){if(SR(Et,this))throw new jR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:wR(arguments[0]),t=fp(r),n=function(i){var o=this===void 0?It:this;o===fe&&io(n,kt,i),H(o,te)&&H(o[te],t)&&(o[te][t]=!1);var u=eo(1,i);try{to(o,t,u)}catch(l){if(!(l instanceof MR))throw l;wp(o,t,u)}};return Gr&&ro&&to(fe,t,{configurable:!0,set:n}),Xa(t,r)},Et=fr[Ct],Ja(Et,"toString",function(){return vp(this).tag}),Ja(fr,"withoutSetter",function(e){return Xa(fp(e),e)}),yp.f=no,mp.f=Dn,ER.f=uo,hp.f=Tp,TR.f=dp.f=Op,OR.f=Ep,_R.f=function(e){return Xa(kR(e),e)},Gr&&(CR(Et,"description",{configurable:!0,get:function(){return vp(this).description}}),qR||Ja(fe,"propertyIsEnumerable",no,{unsafe:!0})));jn({global:!0,constructor:!0,wrap:!0,forced:!Ur,sham:!Ur},{Symbol:fr});Ln(pp(LR),function(e){PR(e)});jn({target:Fn,stat:!0,forced:!Ur},{useSetter:function(){ro=!0},useSimple:function(){ro=!1}});jn({target:"Object",stat:!0,forced:!Ur,sham:!Gr},{create:FR,defineProperty:Dn,defineProperties:uo,getOwnPropertyDescriptor:Tp});jn({target:"Object",stat:!0,forced:!Ur},{getOwnPropertyNames:Op});RR();AR(fr,Fn);gp[te]=!0});var so=a((UH,Ip)=>{"use strict";var DR=ar();Ip.exports=DR&&!!Symbol.for&&!!Symbol.keyFor});var _p=a(()=>{"use strict";var BR=x(),GR=U(),UR=W(),WR=Ke(),kp=or(),HR=so(),co=kp("string-to-symbol-registry"),KR=kp("symbol-to-string-registry");BR({target:"Symbol",stat:!0,forced:!HR},{for:function(e){var r=WR(e);if(UR(co,r))return co[r];var t=GR("Symbol")(r);return co[r]=t,KR[t]=r,t}})});var Rp=a(()=>{"use strict";var VR=x(),zR=W(),YR=Rr(),JR=He(),QR=or(),XR=so(),Pp=QR("symbol-to-string-registry");VR({target:"Symbol",stat:!0,forced:!XR},{keyFor:function(r){if(!YR(r))throw new TypeError(JR(r)+" is not a symbol");if(zR(Pp,r))return Pp[r]}})});var Np=a((zH,Ap)=>{"use strict";var ZR=$(),e1=Ve().get;Ap.exports=function(r){if(!ZR(r))return!1;var t=e1(r);return!!t&&t.type==="RawJSON"}});var Fp=a((YH,Lp)=>{"use strict";var lo=A(),r1=W(),Bn=SyntaxError,t1=parseInt,n1=String.fromCharCode,i1=lo("".charAt),Mp=lo("".slice),jp=lo(/./.exec),$p={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},a1=/^[\da-f]{4}$/i,o1=/^[\u0000-\u001F]$/;Lp.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=i1(e,r);if(i==="\\"){var o=Mp(e,r,r+2);if(r1($p,o))n+=$p[o],r+=2;else if(o==="\\u"){r+=2;var u=Mp(e,r,r+4);if(!jp(a1,u))throw new Bn("Bad Unicode escape at: "+r);n+=n1(t1(u,16)),r+=4}else throw new Bn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(jp(o1,i))throw new Bn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Bn("Unterminated string at: "+r);return{value:n,end:r}}});var Bp=a((JH,Dp)=>{"use strict";var u1=_();Dp.exports=!u1(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var rd=a(()=>{"use strict";var s1=x(),Yp=U(),c1=kr(),Jp=D(),pr=A(),Qp=_(),Gp=Ie(),Un=N(),l1=Np(),Up=Rr(),Wp=qe(),f1=Ke(),v1=ur(),p1=Fp(),d1=Ar(),h1=ar(),fo=Bp(),Xp=String,Je=Yp("JSON","stringify"),Gn=pr(/./.exec),po=pr("".charAt),m1=pr("".charCodeAt),y1=pr("".replace),vo=pr("".slice),ho=pr([].push),g1=pr(1.1.toString),b1=/[\uD800-\uDFFF]/g,Hp=/^[\uD800-\uDBFF]$/,Kp=/^[\uDC00-\uDFFF]$/,mo=d1(),Vp=mo.length,Zp=!h1||Qp(function(){var e=Yp("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),zp=Qp(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),q1=Zp?function(e,r){var t=v1(arguments),n=ed(r);if(!(!Un(n)&&(e===void 0||Up(e))))return t[1]=function(i,o){if(Un(n)&&(o=Jp(n,this,Xp(i),o)),!Up(o))return o},c1(Je,null,t)}:Je,x1=function(e,r,t){var n=po(t,r-1),i=po(t,r+1);return Gn(Hp,e)&&!Gn(Kp,i)||Gn(Kp,e)&&!Gn(Hp,n)?"\\u"+g1(m1(e,0),16):e},ed=function(e){if(Un(e))return e;if(Gp(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?ho(t,i):(typeof i=="number"||Wp(i)==="Number"||Wp(i)==="String")&&ho(t,f1(i))}var o=t.length,u=!0;return function(l,s){if(u)return u=!1,s;if(Gp(this))return s;for(var c=0;c<o;c++)if(t[c]===l)return s}}};Je&&s1({target:"JSON",stat:!0,arity:3,forced:Zp||zp||!fo},{stringify:function(r,t,n){var i=ed(t),o=[],u=q1(r,function(d,m){var h=Un(i)?Jp(i,this,Xp(d),m):m;return!fo&&l1(h)?mo+(ho(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(zp&&(u=y1(u,b1,x1)),fo))return u;for(var l="",s=u.length,c=0;c<s;c++){var f=po(u,c);if(f==='"'){var v=p1(u,++c).end-1,p=vo(u,c,v);l+=vo(p,0,Vp)===mo?o[vo(p,Vp)]:'"'+p+'"',c=v}else l+=f}return l}})});var nd=a(()=>{"use strict";var S1=x(),w1=ar(),T1=_(),td=Nn(),O1=ee(),E1=!w1||T1(function(){td.f(1)});S1({target:"Object",stat:!0,forced:E1},{getOwnPropertySymbols:function(r){var t=td.f;return t?t(O1(r)):[]}})});var id=a(()=>{"use strict";Cp();_p();Rp();rd();nd()});var yo=a(()=>{"use strict";var C1=M();C1("asyncDispose")});var go=a(()=>{"use strict";var I1=M();I1("asyncIterator")});var ad=a(()=>{});var bo=a(()=>{"use strict";var k1=M();k1("dispose")});var od=a(()=>{"use strict";var _1=M();_1("hasInstance")});var ud=a(()=>{"use strict";var P1=M();P1("isConcatSpreadable")});var qo=a(()=>{"use strict";var R1=M();R1("iterator")});var sd=a(()=>{"use strict";var A1=M();A1("match")});var cd=a(()=>{"use strict";var N1=M();N1("matchAll")});var ld=a(()=>{"use strict";var M1=M();M1("replace")});var fd=a(()=>{"use strict";var j1=M();j1("search")});var vd=a(()=>{"use strict";var $1=M();$1("species")});var pd=a(()=>{"use strict";var L1=M();L1("split")});var xo=a(()=>{"use strict";var F1=M(),D1=za();F1("toPrimitive");D1()});var dd=a(()=>{"use strict";var B1=U(),G1=M(),U1=Pe();G1("toStringTag");U1(B1("Symbol"),"Symbol")});var hd=a(()=>{"use strict";var W1=M();W1("unscopables")});var md=a(()=>{"use strict";var H1=P(),K1=Pe();K1(H1.JSON,"JSON",!0)});var yd=a(()=>{});var gd=a(()=>{});var qd=a((B6,bd)=>{"use strict";Ka();wt();id();yo();go();ad();bo();od();ud();qo();sd();cd();ld();fd();vd();pd();xo();dd();hd();md();yd();gd();var V1=K();bd.exports=V1.Symbol});var So=a((G6,xd)=>{"use strict";xd.exports=function(){}});var dr=a((U6,Ed)=>{"use strict";var z1=Ce(),wo=So(),Sd=cr(),Td=Ve(),Y1=re().f,J1=kn(),Wn=_n(),Q1=X(),X1=G(),Od="Array Iterator",Z1=Td.set,eA=Td.getterFor(Od);Ed.exports=J1(Array,"Array",function(e,r){Z1(this,{type:Od,target:z1(e),index:0,kind:r})},function(){var e=eA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Wn(void 0,!0);switch(e.kind){case"keys":return Wn(t,!1);case"values":return Wn(r[t],!1)}return Wn([t,r[t]],!1)},"values");var wd=Sd.Arguments=Sd.Array;wo("keys");wo("values");wo("entries");if(!Q1&&X1&&wd.name!=="values")try{Y1(wd,"name",{value:"values"})}catch{}});var Id=a((W6,Cd)=>{"use strict";Cd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";dr();var rA=Id(),tA=P(),nA=Pe(),kd=cr();for(Hn in rA)nA(tA[Hn],Hn),kd[Hn]=kd.Array;var Hn});var Pd=a((V6,_d)=>{"use strict";var iA=qd();hr();_d.exports=iA});var Nd=a(()=>{"use strict";var aA=R(),oA=re().f,Rd=aA("metadata"),Ad=Function.prototype;Ad[Rd]===void 0&&oA(Ad,Rd,{value:null})});var Md=a(()=>{"use strict";yo()});var jd=a(()=>{"use strict";bo()});var $d=a(()=>{"use strict";var uA=M();uA("metadata")});var Fd=a((tK,Ld)=>{"use strict";var sA=Pd();Nd();Md();jd();$d();Ld.exports=sA});var Oo=a((nK,Dd)=>{"use strict";var cA=U(),lA=A(),To=cA("Symbol"),fA=To.keyFor,vA=lA(To.prototype.valueOf);Dd.exports=To.isRegisteredSymbol||function(r){try{return fA(vA(r))!==void 0}catch{return!1}}});var Bd=a(()=>{"use strict";var pA=x(),dA=Oo();pA({target:"Symbol",stat:!0},{isRegisteredSymbol:dA})});var Io=a((oK,Vd)=>{"use strict";var hA=or(),Hd=U(),mA=A(),yA=Rr(),gA=R(),Vn=Hd("Symbol"),Gd=Vn.isWellKnownSymbol,Kd=Hd("Object","getOwnPropertyNames"),bA=mA(Vn.prototype.valueOf),Ud=hA("wks");for(Kn=0,Eo=Kd(Vn),Wd=Eo.length;Kn<Wd;Kn++)try{Co=Eo[Kn],yA(Vn[Co])&&gA(Co)}catch{}var Co,Kn,Eo,Wd;Vd.exports=function(r){if(Gd&&Gd(r))return!0;try{for(var t=bA(r),n=0,i=Kd(Ud),o=i.length;n<o;n++)if(Ud[i[n]]==t)return!0}catch{}return!1}});var zd=a(()=>{"use strict";var qA=x(),xA=Io();qA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:xA})});var Yd=a(()=>{"use strict";var SA=M();SA("customMatcher")});var Jd=a(()=>{"use strict";var wA=M();wA("observable")});var Qd=a(()=>{"use strict";var TA=x(),OA=Oo();TA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:OA})});var Xd=a(()=>{"use strict";var EA=x(),CA=Io();EA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:CA})});var Zd=a(()=>{"use strict";var IA=M();IA("matcher")});var eh=a(()=>{"use strict";var kA=M();kA("metadataKey")});var rh=a(()=>{"use strict";var _A=M();_A("patternMatch")});var th=a(()=>{"use strict";var PA=M();PA("replaceAll")});var ih=a((OK,nh)=>{"use strict";var RA=Fd();Bd();zd();Yd();Jd();Qd();Xd();Zd();eh();rh();th();nh.exports=RA});var Se=a((EK,ah)=>{"use strict";ah.exports=ih()});var zn=a((CK,oh)=>{oh.exports=Se()});var sh=a((IK,uh)=>{"use strict";dr();lr();var AA=xt();uh.exports=AA});var lh=a((kK,ch)=>{"use strict";var NA=sh();hr();ch.exports=NA});var vh=a((_K,fh)=>{"use strict";var MA=lh();fh.exports=MA});var dh=a((PK,ph)=>{"use strict";var jA=vh();ph.exports=jA});var ko=a((RK,hh)=>{"use strict";hh.exports=dh()});var Yn=a((AK,mh)=>{mh.exports=ko()});var gh=a((NK,yh)=>{"use strict";dr();lr();var $A=Pn();yh.exports=$A});var qh=a((MK,bh)=>{"use strict";var LA=gh();hr();bh.exports=LA});var Sh=a((jK,xh)=>{"use strict";var FA=qh();xh.exports=FA});var Th=a(($K,wh)=>{"use strict";var DA=Sh();wh.exports=DA});var Eh=a((LK,Oh)=>{"use strict";Oh.exports=Th()});var Jn=a((FK,Ch)=>{Ch.exports=Eh()});var kh=a((DK,Ih)=>{"use strict";var BA=U(),GA=A(),UA=Tt(),WA=Nn(),HA=Q(),KA=GA([].concat);Ih.exports=BA("Reflect","ownKeys")||function(r){var t=UA.f(HA(r)),n=WA.f;return n?KA(t,n(r)):t}});var Rh=a((BK,Ph)=>{"use strict";var _h=W(),VA=kh(),zA=st(),YA=re();Ph.exports=function(e,r,t){for(var n=VA(r),i=YA.f,o=zA.f,u=0;u<n.length;u++){var l=n[u];!_h(e,l)&&!(t&&_h(t,l))&&i(e,l,o(r,l))}}});var Nh=a((GK,Ah)=>{"use strict";var JA=$(),QA=xe();Ah.exports=function(e,r){JA(r)&&"cause"in r&&QA(e,"cause",r.cause)}});var Lh=a((UK,$h)=>{"use strict";var XA=A(),Mh=Error,ZA=XA("".replace),eN=function(e){return String(new Mh(e).stack)}("zxcasd"),jh=/\n\s*at [^:]*:[^\n]*/,rN=jh.test(eN);$h.exports=function(e,r){if(rN&&typeof e=="string"&&!Mh.prepareStackTrace)for(;r--;)e=ZA(e,jh,"");return e}});var Dh=a((WK,Fh)=>{"use strict";var tN=_(),nN=We();Fh.exports=!tN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",nN(1,7)),e.stack!==7):!0})});var Uh=a((HK,Gh)=>{"use strict";var iN=xe(),aN=Lh(),oN=Dh(),Bh=Error.captureStackTrace;Gh.exports=function(e,r,t,n){oN&&(Bh?Bh(e,r):iN(e,"stack",aN(t,n)))}});var ve=a((KK,Vh)=>{"use strict";var uN=V(),sN=D(),cN=Q(),lN=He(),fN=Ga(),vN=le(),Wh=B(),pN=Pn(),dN=xt(),Hh=Ba(),hN=TypeError,Qn=function(e,r){this.stopped=e,this.result=r},Kh=Qn.prototype;Vh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),s=uN(r,n),c,f,v,p,d,m,h,y=function(b){return c&&Hh(c,"normal"),new Qn(!0,b)},q=function(b){return i?(cN(b),l?s(b[0],b[1],y):s(b[0],b[1])):l?s(b,y):s(b)};if(o)c=e.iterator;else if(u)c=e;else{if(f=dN(e),!f)throw new hN(lN(e)+" is not iterable");if(fN(f)){for(v=0,p=vN(e);p>v;v++)if(d=q(e[v]),d&&Wh(Kh,d))return d;return new Qn(!1)}c=pN(e,f)}for(m=o?e.next:c.next;!(h=sN(m,c)).done;){try{d=q(h.value)}catch(b){Hh(c,"throw",b)}if(typeof d=="object"&&d&&Wh(Kh,d))return d}return new Qn(!1)}});var Yh=a((VK,zh)=>{"use strict";var mN=Ke();zh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:mN(e)}});var Qh=a(()=>{"use strict";var yN=x(),gN=B(),bN=yt(),Xn=gt(),qN=Rh(),Jh=ze(),_o=xe(),Po=We(),xN=Nh(),SN=Uh(),wN=ve(),TN=Yh(),ON=R(),EN=ON("toStringTag"),Zn=Error,CN=[].push,Hr=function(r,t){var n=gN(Ro,this),i;Xn?i=Xn(new Zn,n?bN(this):Ro):(i=n?this:Jh(Ro),_o(i,EN,"Error")),t!==void 0&&_o(i,"message",TN(t)),SN(i,Hr,i.stack,1),arguments.length>2&&xN(i,arguments[2]);var o=[];return wN(r,CN,{that:o}),_o(i,"errors",o),i};Xn?Xn(Hr,Zn):qN(Hr,Zn,{name:!0});var Ro=Hr.prototype=Jh(Zn.prototype,{constructor:Po(1,Hr),message:Po(1,""),name:Po(1,"AggregateError")});yN({global:!0,constructor:!0,arity:2},{AggregateError:Hr})});var Ao=a(()=>{"use strict";Qh()});var No=a((XK,Xh)=>{"use strict";var _t=P(),IN=_r(),kN=qe(),ei=function(e){return IN.slice(0,e.length)===e};Xh.exports=function(){return ei("Bun/")?"BUN":ei("Cloudflare-Workers")?"CLOUDFLARE":ei("Deno/")?"DENO":ei("Node.js/")?"NODE":_t.Bun&&typeof Bun.version=="string"?"BUN":_t.Deno&&typeof Deno.version=="object"?"DENO":kN(_t.process)==="process"?"NODE":_t.window&&_t.document?"BROWSER":"REST"}()});var Pt=a((ZK,Zh)=>{"use strict";var _N=No();Zh.exports=_N==="NODE"});var Mo=a((e8,rm)=>{"use strict";var PN=U(),RN=Mn(),AN=R(),NN=G(),em=AN("species");rm.exports=function(e){var r=PN(e);NN&&r&&!r[em]&&RN(r,em,{configurable:!0,get:function(){return this}})}});var ri=a((r8,tm)=>{"use strict";var MN=B(),jN=TypeError;tm.exports=function(e,r){if(MN(r,e))return e;throw new jN("Incorrect invocation")}});var jo=a((t8,nm)=>{"use strict";var $N=pt(),LN=He(),FN=TypeError;nm.exports=function(e){if($N(e))return e;throw new FN(LN(e)+" is not a constructor")}});var $o=a((n8,am)=>{"use strict";var im=Q(),DN=jo(),BN=nr(),GN=R(),UN=GN("species");am.exports=function(e,r){var t=im(e).constructor,n;return t===void 0||BN(n=im(t)[UN])?r:DN(n)}});var um=a((i8,om)=>{"use strict";var WN=TypeError;om.exports=function(e,r){if(e<r)throw new WN("Not enough arguments");return e}});var Lo=a((a8,sm)=>{"use strict";var HN=_r();sm.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(HN)});var Vo=a((o8,ym)=>{"use strict";var ue=P(),KN=kr(),VN=V(),cm=N(),zN=W(),mm=_(),lm=_a(),YN=ur(),fm=mn(),JN=um(),QN=Lo(),XN=Pt(),Wo=ue.setImmediate,Ho=ue.clearImmediate,ZN=ue.process,Fo=ue.Dispatch,eM=ue.Function,vm=ue.MessageChannel,rM=ue.String,Do=0,Rt={},pm="onreadystatechange",At,mr,Bo,Go;mm(function(){At=ue.location});var Ko=function(e){if(zN(Rt,e)){var r=Rt[e];delete Rt[e],r()}},Uo=function(e){return function(){Ko(e)}},dm=function(e){Ko(e.data)},hm=function(e){ue.postMessage(rM(e),At.protocol+"//"+At.host)};(!Wo||!Ho)&&(Wo=function(r){JN(arguments.length,1);var t=cm(r)?r:eM(r),n=YN(arguments,1);return Rt[++Do]=function(){KN(t,void 0,n)},mr(Do),Do},Ho=function(r){delete Rt[r]},XN?mr=function(e){ZN.nextTick(Uo(e))}:Fo&&Fo.now?mr=function(e){Fo.now(Uo(e))}:vm&&!QN?(Bo=new vm,Go=Bo.port2,Bo.port1.onmessage=dm,mr=VN(Go.postMessage,Go)):ue.addEventListener&&cm(ue.postMessage)&&!ue.importScripts&&At&&At.protocol!=="file:"&&!mm(hm)?(mr=hm,ue.addEventListener("message",dm,!1)):pm in fm("script")?mr=function(e){lm.appendChild(fm("script"))[pm]=function(){lm.removeChild(this),Ko(e)}}:mr=function(e){setTimeout(Uo(e),0)});ym.exports={set:Wo,clear:Ho}});var qm=a((u8,bm)=>{"use strict";var gm=P(),tM=G(),nM=Object.getOwnPropertyDescriptor;bm.exports=function(e){if(!tM)return gm[e];var r=nM(gm,e);return r&&r.value}});var zo=a((s8,Sm)=>{"use strict";var xm=function(){this.head=null,this.tail=null};xm.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Sm.exports=xm});var Tm=a((c8,wm)=>{"use strict";var iM=_r();wm.exports=/ipad|iphone|ipod/i.test(iM)&&typeof Pebble<"u"});var Em=a((l8,Om)=>{"use strict";var aM=_r();Om.exports=/web0s(?!.*chrome)/i.test(aM)});var Am=a((f8,Rm)=>{"use strict";var Vr=P(),oM=qm(),Cm=V(),Yo=Vo().set,uM=zo(),sM=Lo(),cM=Tm(),lM=Em(),Jo=Pt(),Im=Vr.MutationObserver||Vr.WebKitMutationObserver,km=Vr.document,_m=Vr.process,ti=Vr.Promise,Zo=oM("queueMicrotask"),Kr,Qo,Xo,ni,Pm;Zo||(Nt=new uM,Mt=function(){var e,r;for(Jo&&(e=_m.domain)&&e.exit();r=Nt.get();)try{r()}catch(t){throw Nt.head&&Kr(),t}e&&e.enter()},!sM&&!Jo&&!lM&&Im&&km?(Qo=!0,Xo=km.createTextNode(""),new Im(Mt).observe(Xo,{characterData:!0}),Kr=function(){Xo.data=Qo=!Qo}):!cM&&ti&&ti.resolve?(ni=ti.resolve(void 0),ni.constructor=ti,Pm=Cm(ni.then,ni),Kr=function(){Pm(Mt)}):Jo?Kr=function(){_m.nextTick(Mt)}:(Yo=Cm(Yo,Vr),Kr=function(){Yo(Mt)}),Zo=function(e){Nt.head||Kr(),Nt.add(e)});var Nt,Mt;Rm.exports=Zo});var Mm=a((v8,Nm)=>{"use strict";Nm.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var yr=a((p8,jm)=>{"use strict";jm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var gr=a((d8,$m)=>{"use strict";var fM=P();$m.exports=fM.Promise});var zr=a((h8,Bm)=>{"use strict";var vM=P(),jt=gr(),pM=N(),dM=oa(),hM=pa(),mM=R(),Lm=No(),yM=X(),eu=Pr(),Fm=jt&&jt.prototype,gM=mM("species"),ru=!1,Dm=pM(vM.PromiseRejectionEvent),bM=dM("Promise",function(){var e=hM(jt),r=e!==String(jt);if(!r&&eu===66||yM&&!(Fm.catch&&Fm.finally))return!0;if(!eu||eu<51||!/native code/.test(e)){var t=new jt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[gM]=n,ru=t.then(function(){})instanceof n,!ru)return!0}return!r&&(Lm==="BROWSER"||Lm==="DENO")&&!Dm});Bm.exports={CONSTRUCTOR:bM,REJECTION_EVENT:Dm,SUBCLASSING:ru}});var we=a((m8,Um)=>{"use strict";var Gm=F(),qM=TypeError,xM=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new qM("Bad Promise constructor");r=n,t=i}),this.resolve=Gm(r),this.reject=Gm(t)};Um.exports.f=function(e){return new xM(e)}});var cy=a(()=>{"use strict";var SM=x(),wM=X(),ui=Pt(),Qe=P(),TM=K(),Xr=D(),Wm=ke(),Hm=gt(),OM=Pe(),EM=Mo(),CM=F(),oi=N(),IM=$(),kM=ri(),_M=$o(),Jm=Vo().set,ou=Am(),PM=Mm(),RM=yr(),AM=zo(),Qm=Ve(),si=gr(),uu=zr(),Xm=we(),ci="Promise",Zm=uu.CONSTRUCTOR,NM=uu.REJECTION_EVENT,MM=uu.SUBCLASSING,tu=Qm.getterFor(ci),jM=Qm.set,Yr=si&&si.prototype,br=si,ii=Yr,ey=Qe.TypeError,nu=Qe.document,su=Qe.process,iu=Xm.f,$M=iu,LM=!!(nu&&nu.createEvent&&Qe.dispatchEvent),ry="unhandledrejection",FM="rejectionhandled",Km=0,ty=1,DM=2,cu=1,ny=2,ai,Vm,iy,zm,ay=function(e){var r;return IM(e)&&oi(r=e.then)?r:!1},oy=function(e,r){var t=r.value,n=r.state===ty,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,s,c,f;try{i?(n||(r.rejection===ny&&GM(r),r.rejection=cu),i===!0?s=t:(l&&l.enter(),s=i(t),l&&(l.exit(),f=!0)),s===e.promise?u(new ey("Promise-chain cycle")):(c=ay(s))?Xr(c,s,o,u):o(s)):u(t)}catch(v){l&&!f&&l.exit(),u(v)}},uy=function(e,r){e.notified||(e.notified=!0,ou(function(){for(var t=e.reactions,n;n=t.get();)oy(n,e);e.notified=!1,r&&!e.rejection&&BM(e)}))},sy=function(e,r,t){var n,i;LM?(n=nu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!NM&&(i=Qe["on"+e])?i(n):e===ry&&PM("Unhandled promise rejection",t)},BM=function(e){Xr(Jm,Qe,function(){var r=e.facade,t=e.value,n=Ym(e),i;if(n&&(i=RM(function(){ui?su.emit("unhandledRejection",t,r):sy(ry,r,t)}),e.rejection=ui||Ym(e)?ny:cu,i.error))throw i.value})},Ym=function(e){return e.rejection!==cu&&!e.parent},GM=function(e){Xr(Jm,Qe,function(){var r=e.facade;ui?su.emit("rejectionHandled",r):sy(FM,r,e.value)})},Jr=function(e,r,t){return function(n){e(r,n,t)}},Qr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=DM,uy(e,!0))},au=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ey("Promise can't be resolved itself");var n=ay(r);n?ou(function(){var i={done:!1};try{Xr(n,r,Jr(au,i,e),Jr(Qr,i,e))}catch(o){Qr(i,o,e)}}):(e.value=r,e.state=ty,uy(e,!1))}catch(i){Qr({done:!1},i,e)}}};if(Zm&&(br=function(r){kM(this,ii),CM(r),Xr(ai,this);var t=tu(this);try{r(Jr(au,t),Jr(Qr,t))}catch(n){Qr(t,n)}},ii=br.prototype,ai=function(r){jM(this,{type:ci,done:!1,notified:!1,parent:!1,reactions:new AM,rejection:!1,state:Km,value:null})},ai.prototype=Wm(ii,"then",function(r,t){var n=tu(this),i=iu(_M(this,br));return n.parent=!0,i.ok=oi(r)?r:!0,i.fail=oi(t)&&t,i.domain=ui?su.domain:void 0,n.state===Km?n.reactions.add(i):ou(function(){oy(i,n)}),i.promise}),Vm=function(){var e=new ai,r=tu(e);this.promise=e,this.resolve=Jr(au,r),this.reject=Jr(Qr,r)},Xm.f=iu=function(e){return e===br||e===iy?new Vm(e):$M(e)},!wM&&oi(si)&&Yr!==Object.prototype)){zm=Yr.then,MM||Wm(Yr,"then",function(r,t){var n=this;return new br(function(i,o){Xr(zm,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Yr.constructor}catch{}Hm&&Hm(Yr,ii)}SM({global:!0,constructor:!0,wrap:!0,forced:Zm},{Promise:br});iy=TM.Promise;OM(br,ci,!1,!0);EM(ci)});var $t=a((b8,ly)=>{"use strict";var UM=gr(),WM=Wa(),HM=zr().CONSTRUCTOR;ly.exports=HM||!WM(function(e){UM.all(e).then(void 0,function(){})})});var fy=a(()=>{"use strict";var KM=x(),VM=D(),zM=F(),YM=we(),JM=yr(),QM=ve(),XM=$t();KM({target:"Promise",stat:!0,forced:XM},{all:function(r){var t=this,n=YM.f(t),i=n.resolve,o=n.reject,u=JM(function(){var l=zM(t.resolve),s=[],c=0,f=1;QM(r,function(v){var p=c++,d=!1;f++,VM(l,t,v).then(function(m){d||(d=!0,s[p]=m,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var py=a(()=>{"use strict";var ZM=x(),e2=X(),r2=zr().CONSTRUCTOR,fu=gr(),t2=U(),n2=N(),i2=ke(),vy=fu&&fu.prototype;ZM({target:"Promise",proto:!0,forced:r2,real:!0},{catch:function(e){return this.then(void 0,e)}});!e2&&n2(fu)&&(lu=t2("Promise").prototype.catch,vy.catch!==lu&&i2(vy,"catch",lu,{unsafe:!0}));var lu});var dy=a(()=>{"use strict";var a2=x(),o2=D(),u2=F(),s2=we(),c2=yr(),l2=ve(),f2=$t();a2({target:"Promise",stat:!0,forced:f2},{race:function(r){var t=this,n=s2.f(t),i=n.reject,o=c2(function(){var u=u2(t.resolve);l2(r,function(l){o2(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var hy=a(()=>{"use strict";var v2=x(),p2=we(),d2=zr().CONSTRUCTOR;v2({target:"Promise",stat:!0,forced:d2},{reject:function(r){var t=p2.f(this),n=t.reject;return n(r),t.promise}})});var vu=a((I8,my)=>{"use strict";var h2=Q(),m2=$(),y2=we();my.exports=function(e,r){if(h2(e),m2(r)&&r.constructor===e)return r;var t=y2.f(e),n=t.resolve;return n(r),t.promise}});var by=a(()=>{"use strict";var g2=x(),b2=U(),yy=X(),q2=gr(),gy=zr().CONSTRUCTOR,x2=vu(),S2=b2("Promise"),w2=yy&&!gy;g2({target:"Promise",stat:!0,forced:yy||gy},{resolve:function(r){return x2(w2&&this===S2?q2:this,r)}})});var qy=a(()=>{"use strict";cy();fy();py();dy();hy();by()});var pu=a(()=>{"use strict";var T2=x(),O2=D(),E2=F(),C2=we(),I2=yr(),k2=ve(),_2=$t();T2({target:"Promise",stat:!0,forced:_2},{allSettled:function(r){var t=this,n=C2.f(t),i=n.resolve,o=n.reject,u=I2(function(){var l=E2(t.resolve),s=[],c=0,f=1;k2(r,function(v){var p=c++,d=!1;f++,O2(l,t,v).then(function(m){d||(d=!0,s[p]={status:"fulfilled",value:m},--f||i(s))},function(m){d||(d=!0,s[p]={status:"rejected",reason:m},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var du=a(()=>{"use strict";var P2=x(),R2=D(),A2=F(),N2=U(),M2=we(),j2=yr(),$2=ve(),L2=$t(),xy="No one promise resolved";P2({target:"Promise",stat:!0,forced:L2},{any:function(r){var t=this,n=N2("AggregateError"),i=M2.f(t),o=i.resolve,u=i.reject,l=j2(function(){var s=A2(t.resolve),c=[],f=0,v=1,p=!1;$2(r,function(d){var m=f++,h=!1;v++,R2(s,t,d).then(function(y){h||p||(p=!0,o(y))},function(y){h||p||(h=!0,c[m]=y,--v||u(new n(c,xy)))})}),--v||u(new n(c,xy))});return l.error&&u(l.value),i.promise}})});var mu=a(()=>{"use strict";var F2=x(),D2=P(),B2=kr(),G2=ur(),U2=we(),W2=F(),wy=yr(),hu=D2.Promise,Sy=!1,H2=!hu||!hu.try||wy(function(){hu.try(function(e){Sy=e===8},8)}).error||!Sy;F2({target:"Promise",stat:!0,forced:H2},{try:function(e){var r=arguments.length>1?G2(arguments,1):[],t=U2.f(this),n=wy(function(){return B2(W2(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var yu=a(()=>{"use strict";var K2=x(),V2=we();K2({target:"Promise",stat:!0},{withResolvers:function(){var r=V2.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Cy=a(()=>{"use strict";var z2=x(),Y2=X(),li=gr(),J2=_(),Oy=U(),Ey=N(),Q2=$o(),Ty=vu(),X2=ke(),bu=li&&li.prototype,Z2=!!li&&J2(function(){bu.finally.call({then:function(){}},function(){})});z2({target:"Promise",proto:!0,real:!0,forced:Z2},{finally:function(e){var r=Q2(this,Oy("Promise")),t=Ey(e);return this.then(t?function(n){return Ty(r,e()).then(function(){return n})}:e,t?function(n){return Ty(r,e()).then(function(){throw n})}:e)}});!Y2&&Ey(li)&&(gu=Oy("Promise").prototype.finally,bu.finally!==gu&&X2(bu,"finally",gu,{unsafe:!0}));var gu});var ky=a((U8,Iy)=>{"use strict";Ao();dr();wt();qy();pu();du();mu();yu();Cy();lr();var ej=K();Iy.exports=ej.Promise});var Py=a((W8,_y)=>{"use strict";var rj=ky();hr();_y.exports=rj});var Ry=a(()=>{"use strict";mu()});var Ay=a(()=>{"use strict";yu()});var My=a((Y8,Ny)=>{"use strict";var tj=Py();Ry();Ay();Ny.exports=tj});var jy=a(()=>{"use strict";Ao()});var $y=a(()=>{"use strict";pu()});var Ly=a(()=>{"use strict";du()});var Dy=a((t5,Fy)=>{"use strict";var nj=My();jy();$y();Ly();Fy.exports=nj});var Zr=a((n5,By)=>{"use strict";By.exports=Dy()});var Wy=a((s5,Uy)=>{"use strict";go();var ij=Br();Uy.exports=ij.f("asyncIterator")});var Ky=a((c5,Hy)=>{"use strict";var aj=Wy();Hy.exports=aj});var zy=a((l5,Vy)=>{"use strict";var oj=Ky();Vy.exports=oj});var Jy=a((f5,Yy)=>{"use strict";var uj=zy();Yy.exports=uj});var fi=a((v5,Qy)=>{"use strict";Qy.exports=Jy()});var rg=a(()=>{"use strict";var sj=x(),cj=_(),lj=ee(),eg=yt(),fj=Na(),vj=cj(function(){eg(1)});sj({target:"Object",stat:!0,forced:vj,sham:!fj},{getPrototypeOf:function(r){return eg(lj(r))}})});var ng=a((y5,tg)=>{"use strict";rg();var pj=K();tg.exports=pj.Object.getPrototypeOf});var ag=a((g5,ig)=>{"use strict";var dj=ng();ig.exports=dj});var ug=a((b5,og)=>{"use strict";var hj=ag();og.exports=hj});var cg=a((q5,sg)=>{"use strict";var mj=ug();sg.exports=mj});var vi=a((x5,lg)=>{"use strict";lg.exports=cg()});var vg=a(()=>{"use strict";var yj=x(),gj=A(),bj=Ie(),qj=gj([].reverse),fg=[1,2];yj({target:"Array",proto:!0,forced:String(fg)===String(fg.reverse())},{reverse:function(){return bj(this)&&(this.length=this.length),qj(this)}})});var dg=a((T5,pg)=>{"use strict";vg();var xj=oe();pg.exports=xj("Array","reverse")});var mg=a((O5,hg)=>{"use strict";var Sj=B(),wj=dg(),Su=Array.prototype;hg.exports=function(e){var r=e.reverse;return e===Su||Sj(Su,e)&&r===Su.reverse?wj:r}});var gg=a((E5,yg)=>{"use strict";var Tj=mg();yg.exports=Tj});var qg=a((C5,bg)=>{"use strict";var Oj=gg();bg.exports=Oj});var Sg=a((I5,xg)=>{"use strict";var Ej=qg();xg.exports=Ej});var Tg=a((k5,wg)=>{"use strict";wg.exports=Sg()});var wu=a((_5,Dt)=>{function Cj(e,r){this.v=e,this.k=r}Dt.exports=Cj,Dt.exports.__esModule=!0,Dt.exports.default=Dt.exports});var Og=a(()=>{"use strict";var Ij=x(),kj=G(),_j=ze();Ij({target:"Object",stat:!0,sham:!kj},{create:_j})});var Cg=a((A5,Eg)=>{"use strict";Og();var Pj=K(),Rj=Pj.Object;Eg.exports=function(r,t){return Rj.create(r,t)}});var kg=a((N5,Ig)=>{"use strict";var Aj=Cg();Ig.exports=Aj});var Pg=a((M5,_g)=>{"use strict";var Nj=kg();_g.exports=Nj});var Ag=a((j5,Rg)=>{"use strict";var Mj=Pg();Rg.exports=Mj});var pi=a(($5,Ng)=>{"use strict";Ng.exports=Ag()});var Ou=a((L5,Lg)=>{"use strict";var jg=A(),jj=F(),$j=$(),Lj=W(),Mg=ur(),Fj=Ir(),$g=Function,Dj=jg([].concat),Bj=jg([].join),Tu={},Gj=function(e,r,t){if(!Lj(Tu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Tu[r]=$g("C,a","return new C("+Bj(n,",")+")")}return Tu[r](e,t)};Lg.exports=Fj?$g.bind:function(r){var t=jj(this),n=t.prototype,i=Mg(arguments,1),o=function(){var l=Dj(i,Mg(arguments));return this instanceof o?Gj(t,l.length,l):t.apply(r,l)};return $j(n)&&(o.prototype=n),o}});var Dg=a(()=>{"use strict";var Uj=x(),Fg=Ou();Uj({target:"Function",proto:!0,forced:Function.bind!==Fg},{bind:Fg})});var Gg=a((B5,Bg)=>{"use strict";Dg();var Wj=oe();Bg.exports=Wj("Function","bind")});var Wg=a((G5,Ug)=>{"use strict";var Hj=B(),Kj=Gg(),Eu=Function.prototype;Ug.exports=function(e){var r=e.bind;return e===Eu||Hj(Eu,e)&&r===Eu.bind?Kj:r}});var Kg=a((U5,Hg)=>{"use strict";var Vj=Wg();Hg.exports=Vj});var zg=a((W5,Vg)=>{"use strict";var zj=Kg();Vg.exports=zj});var Jg=a((H5,Yg)=>{"use strict";var Yj=zg();Yg.exports=Yj});var Bt=a((K5,Qg)=>{"use strict";Qg.exports=Jg()});var Xg=a(()=>{"use strict";var Jj=x(),Qj=gt();Jj({target:"Object",stat:!0},{setPrototypeOf:Qj})});var eb=a((Y5,Zg)=>{"use strict";Xg();var Xj=K();Zg.exports=Xj.Object.setPrototypeOf});var tb=a((J5,rb)=>{"use strict";var Zj=eb();rb.exports=Zj});var ib=a((Q5,nb)=>{"use strict";var e$=tb();nb.exports=e$});var ob=a((X5,ab)=>{"use strict";var r$=ib();ab.exports=r$});var di=a((Z5,ub)=>{"use strict";ub.exports=ob()});var cb=a(()=>{"use strict";var t$=x(),n$=G(),sb=re().f;t$({target:"Object",stat:!0,forced:Object.defineProperty!==sb,sham:!n$},{defineProperty:sb})});var vb=a((tV,fb)=>{"use strict";cb();var i$=K(),lb=i$.Object,a$=fb.exports=function(r,t,n){return lb.defineProperty(r,t,n)};lb.defineProperty.sham&&(a$.sham=!0)});var db=a((nV,pb)=>{"use strict";var o$=vb();pb.exports=o$});var mb=a((iV,hb)=>{"use strict";var u$=db();hb.exports=u$});var gb=a((aV,yb)=>{"use strict";var s$=mb();yb.exports=s$});var Gt=a((oV,bb)=>{"use strict";bb.exports=gb()});var Cu=a((uV,Ae)=>{var c$=Gt();function hi(e,r,t,n){var i=c$;try{i({},"",{})}catch{i=0}Ae.exports=hi=function(u,l,s,c){function f(v,p){hi(u,v,function(d){return this._invoke(v,p,d)})}l?i?i(u,l,{value:s,enumerable:!c,configurable:!c,writable:!c}):u[l]=s:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,hi(e,r,t,n)}Ae.exports=hi,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var ku=a((sV,Ne)=>{var qb=Se(),Iu=pi(),l$=Bt(),f$=vi(),xb=di(),Oe=Cu();function Sb(){var e,r,t=typeof qb=="function"?qb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof l?m:l,b=Iu(q.prototype);return Oe(b,"_invoke",function(I,C,S){var T,w,E,j=0,ge=S||[],k=!1,Z={p:0,n:0,v:e,a:be,f:l$(be).call(be,e,4),d:function(L,pe){return T=L,w=0,E=e,Z.n=pe,u}};function be(J,L){for(w=J,E=L,r=0;!k&&j&&!pe&&r<ge.length;r++){var pe,O=ge[r],Er=Z.p,Ue=O[2];J>3?(pe=Ue===L)&&(E=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Er&&((pe=J<2&&Er<O[1])?(w=0,Z.v=L,Z.n=O[1]):Er<Ue&&(pe=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,Z.n=Ue,w=0))}if(pe||J>1)return u;throw k=!0,L}return function(J,L,pe){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,pe),w=L,E=pe;(r=w<2?e:E)||!k;){T||(w?w<3?(w>1&&(Z.n=-1),be(w,E)):Z.n=E:Z.v=E);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=Z.n<0)?E:I.call(C,Z))!==u)break}catch(O){T=e,w=1,E=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function l(){}function s(){}function c(){}r=f$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),v=c.prototype=l.prototype=Iu(f);function p(d){return xb?xb(d,c):(d.__proto__=c,Oe(d,i,"GeneratorFunction")),d.prototype=Iu(v),d}return s.prototype=c,Oe(v,"constructor",c),Oe(c,"constructor",s),s.displayName="GeneratorFunction",Oe(c,i,"GeneratorFunction"),Oe(v),Oe(v,i,"Generator"),Oe(v,n,function(){return this}),Oe(v,"toString",function(){return"[object Generator]"}),(Ne.exports=Sb=function(){return{w:o,m:p}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=Sb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Ru=a((cV,Ut)=>{var v$=Se(),p$=fi(),d$=wu(),_u=Cu();function Pu(e,r){function t(i,o,u,l){try{var s=e[i](o),c=s.value;return c instanceof d$?r.resolve(c.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(c).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(_u(Pu.prototype),_u(Pu.prototype,typeof v$=="function"&&p$||"@asyncIterator",function(){return this})),_u(this,"_invoke",function(i,o,u){function l(){return new r(function(s,c){t(i,u,s,c)})}return n=n?n.then(l,l):l()},!0)}Ut.exports=Pu,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Au=a((lV,Wt)=>{var h$=Zr(),m$=ku(),y$=Ru();function g$(e,r,t,n,i){return new y$(m$().w(e,r,t,n),i||h$)}Wt.exports=g$,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var wb=a((fV,Ht)=>{var b$=Au();function q$(e,r,t,n,i){var o=b$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Ht.exports=q$,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var Eb=a((vV,Ob)=>{"use strict";var Tb=He(),x$=TypeError;Ob.exports=function(e,r){if(!delete e[r])throw new x$("Cannot delete property "+Tb(r)+" of "+Tb(e))}});var Cb=a(()=>{"use strict";var S$=x(),w$=ee(),T$=le(),O$=Lr(),E$=Eb(),C$=St(),I$=[].unshift(0)!==1,k$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},_$=I$||!k$();S$({target:"Array",proto:!0,arity:1,forced:_$},{unshift:function(r){var t=w$(this),n=T$(t),i=arguments.length;if(i){C$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:E$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return O$(t,n+i)}})});var kb=a((hV,Ib)=>{"use strict";Cb();var P$=oe();Ib.exports=P$("Array","unshift")});var Pb=a((mV,_b)=>{"use strict";var R$=B(),A$=kb(),Nu=Array.prototype;_b.exports=function(e){var r=e.unshift;return e===Nu||R$(Nu,e)&&r===Nu.unshift?A$:r}});var Ab=a((yV,Rb)=>{"use strict";var N$=Pb();Rb.exports=N$});var Mb=a((gV,Nb)=>{"use strict";var M$=Ab();Nb.exports=M$});var $b=a((bV,jb)=>{"use strict";var j$=Mb();jb.exports=j$});var Fb=a((qV,Lb)=>{"use strict";Lb.exports=$b()});var Db=a((xV,Kt)=>{var $$=Fb();function L$(e){var r=Object(e),t=[];for(var n in r)$$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Kt.exports=L$,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Gb=a((SV,Bb)=>{"use strict";dr();wt();lr();qo();var F$=Br();Bb.exports=F$.f("iterator")});var Wb=a((wV,Ub)=>{"use strict";var D$=Gb();hr();Ub.exports=D$});var Kb=a((TV,Hb)=>{"use strict";var B$=Wb();Hb.exports=B$});var zb=a((OV,Vb)=>{"use strict";var G$=Kb();Vb.exports=G$});var Vt=a((EV,Yb)=>{"use strict";Yb.exports=zb()});var Jb=a((CV,Me)=>{var mi=Se(),U$=Vt();function Mu(e){"@babel/helpers - typeof";return Me.exports=Mu=typeof mi=="function"&&typeof U$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof mi=="function"&&r.constructor===mi&&r!==mi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Mu(e)}Me.exports=Mu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Qb=a((IV,zt)=>{var W$=Jb().default,H$=Se(),K$=Vt();function V$(e){if(e!=null){var r=e[typeof H$=="function"&&K$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(W$(e)+" is not iterable")}zt.exports=V$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var eq=a((kV,je)=>{var Xb=vi(),z$=Tg(),Y$=wu(),J$=ku(),Q$=wb(),X$=Au(),Z$=Ru(),eL=Db(),Zb=Qb();function ju(){"use strict";var e=J$(),r=e.m(ju),t=(Xb?Xb(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,s;return function(c){l||(l={stop:function(){return s(c.a,2)},catch:function(){return c.v},abrupt:function(v,p){return s(c.a,i[v],p)},delegateYield:function(v,p,d){return l.resultName=p,s(c.d,Zb(v),d)},finish:function(v){return s(c.f,v)}},s=function(v,p,d){c.p=l.prev,c.n=l.next;try{return v(p,d)}finally{l.next=c.n}}),l.resultName&&(l[l.resultName]=c.v,l.resultName=void 0),l.sent=c.v,l.next=c.n;try{return u.call(this,l)}finally{c.p=l.prev,c.n=l.next}}}return(je.exports=ju=function(){return{wrap:function(s,c,f,v){return e.w(o(s),c,f,v&&z$(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(s,c){return new Y$(s,c)},AsyncIterator:Z$,async:function(s,c,f,v,p){return(n(c)?X$:Q$)(o(s),c,f,v,p)},keys:eL,values:Zb}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=ju,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((_V,rq)=>{var yi=eq()();rq.exports=yi;try{regeneratorRuntime=yi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=yi:Function("r","regeneratorRuntime = r")(yi)}});var $u=a((bi,nq)=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});var gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),s;!(i=(s=l.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(c){o=!0,u=c}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();bi.default=rL;function rL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,s,c){return l[c]={name:s,value:i[s]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&i.every(function(s){return l.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=tL(n),u=o.shift(),l=o.length;return u(this).filter(function(s){for(var c=0;c<l;){if(s=o[c](s,i),!s)return!1;c+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function tL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=tq(i,2),u=o[0],l=o[1],s=null,c=null;if(function(){switch(!0){case/>/.test(u):c=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},c=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(s):Yt(S,T,s)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=tq(h,2),q=y[0],b=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":gi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/^#/.test(u):var I=u.substr(1);s=function(S){return S.attribs.id===I},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j,ge){s(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":gi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":gi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;default:s=function(S){return S.name===u},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":gi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)}}}(),!l)return c;var f=l.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;v==="type"&&(y=y.filter(s));var q=y.findIndex(function(b){return b===h});if(q===p)return!0}return!1};return function(h){var y=c(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Yt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}nq.exports=bi.default});var xi=a(qi=>{"use strict";Object.defineProperty(qi,"__esModule",{value:!0});qi.convertNodeList=nL;qi.escapeValue=iL;function nL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function iL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var pq=a((Si,vq)=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.default=aL;var uq=xi(),iq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function aL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,s=r.ignore,c=s===void 0?{}:s,f=[],v=e,p=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(c).forEach(function(q){q==="class"&&(d=!0);var b=c[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,uq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),c[q]=function(I,C){return b.test(C)})}),d&&function(){var q=c.attribute;c.attribute=function(b,I,C){return c.class(I)||q&&q(b,I,C)}}();v!==n;){if(h(v)!==!0){if(aq(l,v,c,f,n)||oq(v,c,f,n))break;aq(l,v,c,f),f.length===p&&oq(v,c,f),f.length===p&&oL(l,v,c,f)}v=v.parentNode,p=f.length}if(v===n){var y=lq(l,v,c);f.unshift(y)}return f.join(" ")}function aq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=sq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function sq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],s=n[l],c=s.name,f=(0,uq.escapeValue)(s.value),v=t[c]||t.attribute,p=iq[c]||iq.attribute;if(!fq(v,c,f,p)){var d="["+c+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(c==="id"&&(d="#"+f),c==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function oq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=cq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function cq(e,r){var t=e.tagName.toLowerCase();return fq(r.tag,null,t)?null:t}function oL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var s=o[u];if(s===r){var c=lq(e,s,t);if(!c)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,c);var f="> "+c+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function lq(e,r,t){var n=sq(e,r,t);return n||(n=cq(r,t)),n}function fq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}vq.exports=Si.default});var Lu=a((Ti,dq)=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.default=fL;var uL=$u(),sL=lL(uL),cL=xi();function lL(e){return e&&e.__esModule?e:{default:e}}function fL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,cL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,sL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return wi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),s=o.join(" "),c=l+" "+s,f=document.querySelectorAll(c);f.length!==r.length&&o.unshift(wi(l,u,s,r))}return o.unshift(i[0]),i=o,i[0]=wi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=wi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function wi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(et(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),s=function(){var C=l[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},c=0,f=l.length;c<f;c++){var o,u,v=s();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);et(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);et(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,C){return I.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);et(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},c=0,f=y.length;c<f;c++){var o,u,b=q();if(b==="break")break}}return r}function et(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}dq.exports=Ti.default});var Fu=a(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.getCommonAncestor=vL;Oi.getCommonProperties=pL;function vL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);i[p]=d}),i.sort(function(v,p){return v.length-p.length});for(var o=i.shift(),u=null,l=function(){var p=o[s],d=i.some(function(m){return!m.some(function(h){return h===p})});if(d)return"break";u=p},s=0,c=o.length;s<c;s++){var f=l();if(f==="break")break}return u}function pL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(c){return c===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,c=Object.keys(s).reduce(function(p,d){var m=s[d],h=m.name;return m&&h!=="class"&&(p[h]=m.value),p},{}),f=Object.keys(c),v=Object.keys(i);f.length?v.length?(i=v.reduce(function(p,d){var m=i[d];return m===c[d]&&(p[d]=m),p},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=c:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var qq=a(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});var dL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Jt.getSingleSelector=Bu;Jt.getMultiSelector=bq;Jt.default=qL;var hL=$u(),mq=Du(hL),mL=pq(),yL=Du(mL),gL=Lu(),yq=Du(gL),hq=xi(),gq=Fu();function Du(e){return e&&e.__esModule?e:{default:e}}function Bu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":dL(e))+'")');var t=(0,mq.default)(e,r),n=(0,yL.default)(e,r),i=(0,yq.default)(n,e,r);return t&&delete global.document,i}function bq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,hq.convertNodeList)(e)),e.some(function(c){return c.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,mq.default)(e[0],r),n=(0,gq.getCommonAncestor)(e,r),i=Bu(n,r),o=bL(e),u=o[0],l=(0,yq.default)(i+" "+u,e,r),s=(0,hq.convertNodeList)(document.querySelectorAll(l));return e.every(function(c){return s.some(function(f){return f===c})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function bL(e){var r=(0,gq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(s,c){return s.push("["+c+'="'+n[c]+'"]'),s},[]).join("");o.push(l)}return o.length,[o.join("")]}function qL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?bq(e,r):Bu(e,r)}});var wq=a(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=ne.common=ne.optimize=ne.getMultiSelector=ne.getSingleSelector=ne.select=void 0;var Gu=qq();Object.defineProperty(ne,"getSingleSelector",{enumerable:!0,get:function(){return Gu.getSingleSelector}});Object.defineProperty(ne,"getMultiSelector",{enumerable:!0,get:function(){return Gu.getMultiSelector}});var xq=Sq(Gu),xL=Lu(),SL=Sq(xL),wL=Fu(),TL=OL(wL);function OL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Sq(e){return e&&e.__esModule?e:{default:e}}ne.select=xq.default;ne.optimize=SL.default;ne.common=TL;ne.default=xq.default});var Tq=a(()=>{"use strict";var ML=x(),jL=Ie();ML({target:"Array",stat:!0},{isArray:jL})});var Eq=a((VV,Oq)=>{"use strict";Tq();var $L=K();Oq.exports=$L.Array.isArray});var Iq=a((zV,Cq)=>{"use strict";var LL=Eq();Cq.exports=LL});var _q=a((YV,kq)=>{"use strict";var FL=Iq();kq.exports=FL});var Rq=a((JV,Pq)=>{"use strict";var DL=_q();Pq.exports=DL});var Nq=a((QV,Aq)=>{"use strict";Aq.exports=Rq()});var $q=a(()=>{"use strict";var BL=x(),GL=ee(),UL=le(),WL=Lr(),HL=St(),KL=_(),VL=KL(function(){return[].push.call({length:4294967296},1)!==4294967297}),zL=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},YL=VL||!zL();BL({target:"Array",proto:!0,arity:1,forced:YL},{push:function(r){var t=GL(this),n=UL(t),i=arguments.length;HL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return WL(t,n),n}})});var Fq=a((rz,Lq)=>{"use strict";$q();var JL=oe();Lq.exports=JL("Array","push")});var Bq=a((tz,Dq)=>{"use strict";var QL=B(),XL=Fq(),Uu=Array.prototype;Dq.exports=function(e){var r=e.push;return e===Uu||QL(Uu,e)&&r===Uu.push?XL:r}});var Uq=a((nz,Gq)=>{"use strict";var ZL=Bq();Gq.exports=ZL});var Hq=a((iz,Wq)=>{"use strict";var eF=Uq();Wq.exports=eF});var Vq=a((az,Kq)=>{"use strict";var rF=Hq();Kq.exports=rF});var Wu=a((oz,zq)=>{"use strict";zq.exports=Vq()});var ax=a(()=>{"use strict";var tF=x(),nF=Ot().map,iF=dt(),aF=iF("map");tF({target:"Array",proto:!0,forced:!aF},{map:function(r){return nF(this,r,arguments.length>1?arguments[1]:void 0)}})});var ux=a((Nz,ox)=>{"use strict";ax();var oF=oe();ox.exports=oF("Array","map")});var cx=a((Mz,sx)=>{"use strict";var uF=B(),sF=ux(),Ku=Array.prototype;sx.exports=function(e){var r=e.map;return e===Ku||uF(Ku,e)&&r===Ku.map?sF:r}});var fx=a((jz,lx)=>{"use strict";var cF=cx();lx.exports=cF});var px=a(($z,vx)=>{"use strict";var lF=fx();vx.exports=lF});var hx=a((Lz,dx)=>{"use strict";var fF=px();dx.exports=fF});var yx=a((Fz,mx)=>{"use strict";mx.exports=hx()});var bx=a((Dz,gx)=>{gx.exports=yx()});var xx=a((Bz,qx)=>{qx.exports=Zr()});var Ex=a((Gz,Ox)=>{"use strict";var vF=F(),pF=ee(),dF=vn(),hF=le(),Sx=TypeError,wx="Reduce of empty array with no initial value",Tx=function(e){return function(r,t,n,i){var o=pF(r),u=dF(o),l=hF(o);if(vF(t),l===0&&n<2)throw new Sx(wx);var s=e?l-1:0,c=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=c;break}if(s+=c,e?s<0:l<=s)throw new Sx(wx)}for(;e?s>=0:l>s;s+=c)s in u&&(i=t(i,u[s],s,o));return i}};Ox.exports={left:Tx(!1),right:Tx(!0)}});var Vu=a((Uz,Cx)=>{"use strict";var mF=_();Cx.exports=function(e,r){var t=[][e];return!!t&&mF(function(){t.call(null,r||function(){return 1},1)})}});var kx=a(()=>{"use strict";var yF=x(),gF=Ex().left,bF=Vu(),Ix=Pr(),qF=Pt(),xF=!qF&&Ix>79&&Ix<83,SF=xF||!bF("reduce");yF({target:"Array",proto:!0,forced:SF},{reduce:function(r){var t=arguments.length;return gF(this,r,t,t>1?arguments[1]:void 0)}})});var Px=a((Kz,_x)=>{"use strict";kx();var wF=oe();_x.exports=wF("Array","reduce")});var Ax=a((Vz,Rx)=>{"use strict";var TF=B(),OF=Px(),zu=Array.prototype;Rx.exports=function(e){var r=e.reduce;return e===zu||TF(zu,e)&&r===zu.reduce?OF:r}});var Mx=a((zz,Nx)=>{"use strict";var EF=Ax();Nx.exports=EF});var $x=a((Yz,jx)=>{"use strict";var CF=Mx();jx.exports=CF});var Fx=a((Jz,Lx)=>{"use strict";var IF=$x();Lx.exports=IF});var Bx=a((Qz,Dx)=>{"use strict";Dx.exports=Fx()});var Ux=a((Xz,Gx)=>{Gx.exports=Bx()});var Kx=a((Zz,Hx)=>{"use strict";var kF=Ie(),_F=le(),PF=St(),RF=V(),AF=$r(),Wx=function(e,r,t,n,i,o,u,l){for(var s=i,c=0,f=u?RF(u,l):!1,v,p;c<n;)c in t&&(v=f?f(t[c],c,r):t[c],o>0&&kF(v)?(p=_F(v),s=Wx(e,r,v,p,s,o-1)-1):(PF(s+1),AF(e,s,v)),s++),c++;return s};Hx.exports=Wx});var Vx=a(()=>{"use strict";var NF=x(),MF=Kx(),jF=F(),$F=ee(),LF=le(),FF=An();NF({target:"Array",proto:!0},{flatMap:function(r){var t=$F(this),n=LF(t),i;return jF(r),i=FF(t,0),MF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var zx=a(()=>{"use strict";var DF=So();DF("flatMap")});var Jx=a((i7,Yx)=>{"use strict";Vx();zx();var BF=oe();Yx.exports=BF("Array","flatMap")});var Xx=a((a7,Qx)=>{"use strict";var GF=B(),UF=Jx(),Yu=Array.prototype;Qx.exports=function(e){var r=e.flatMap;return e===Yu||GF(Yu,e)&&r===Yu.flatMap?UF:r}});var eS=a((o7,Zx)=>{"use strict";var WF=Xx();Zx.exports=WF});var tS=a((u7,rS)=>{"use strict";var HF=eS();rS.exports=HF});var iS=a((s7,nS)=>{"use strict";var KF=tS();nS.exports=KF});var oS=a((c7,aS)=>{"use strict";aS.exports=iS()});var sS=a((l7,uS)=>{uS.exports=oS()});var lS=a((f7,cS)=>{"use strict";Ka();var VF=oe();cS.exports=VF("Array","concat")});var vS=a((v7,fS)=>{"use strict";var zF=B(),YF=lS(),Ju=Array.prototype;fS.exports=function(e){var r=e.concat;return e===Ju||zF(Ju,e)&&r===Ju.concat?YF:r}});var dS=a((p7,pS)=>{"use strict";var JF=vS();pS.exports=JF});var mS=a((d7,hS)=>{"use strict";var QF=dS();hS.exports=QF});var gS=a((h7,yS)=>{"use strict";var XF=mS();yS.exports=XF});var qS=a((m7,bS)=>{"use strict";bS.exports=gS()});var Qu=a((y7,xS)=>{xS.exports=qS()});var TS=a(()=>{});var ES=a((D7,OS)=>{"use strict";TS();xo();var sD=Br();OS.exports=sD.f("toPrimitive")});var IS=a((B7,CS)=>{"use strict";var cD=ES();CS.exports=cD});var _S=a((G7,kS)=>{"use strict";var lD=IS();kS.exports=lD});var RS=a((U7,PS)=>{"use strict";var fD=_S();PS.exports=fD});var NS=a((W7,AS)=>{"use strict";AS.exports=RS()});var US=a((f9,GS)=>{"use strict";var pD=$(),dD=qe(),hD=R(),mD=hD("match");GS.exports=function(e){var r;return pD(e)&&((r=e[mD])!==void 0?!!r:dD(e)==="RegExp")}});var HS=a((v9,WS)=>{"use strict";var yD=US(),gD=TypeError;WS.exports=function(e){if(yD(e))throw new gD("The method doesn't accept regular expressions");return e}});var VS=a((p9,KS)=>{"use strict";var bD=R(),qD=bD("match");KS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[qD]=!1,"/./"[e](r)}catch{}}return!1}});var JS=a(()=>{"use strict";var xD=x(),SD=ot(),wD=st().f,TD=ma(),zS=Ke(),OD=HS(),ED=ir(),CD=VS(),ID=X(),kD=SD("".slice),_D=Math.min,YS=CD("startsWith"),PD=!ID&&!YS&&!!function(){var e=wD(String.prototype,"startsWith");return e&&!e.writable}();xD({target:"String",proto:!0,forced:!PD&&!YS},{startsWith:function(r){var t=zS(ED(this));OD(r);var n=TD(_D(arguments.length>1?arguments[1]:void 0,t.length)),i=zS(r);return kD(t,n,n+i.length)===i}})});var XS=a((m9,QS)=>{"use strict";JS();var RD=oe();QS.exports=RD("String","startsWith")});var ew=a((y9,ZS)=>{"use strict";var AD=B(),ND=XS(),rs=String.prototype;ZS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===rs||AD(rs,e)&&r===rs.startsWith?ND:r}});var tw=a((g9,rw)=>{"use strict";var MD=ew();rw.exports=MD});var iw=a((b9,nw)=>{"use strict";var jD=tw();nw.exports=jD});var ow=a((q9,aw)=>{"use strict";var $D=iw();aw.exports=$D});var sw=a((x9,uw)=>{"use strict";uw.exports=ow()});var lw=a((S9,cw)=>{cw.exports=sw()});var fw=a(()=>{"use strict";var LD=x(),FD=Ot().filter,DD=dt(),BD=DD("filter");LD({target:"Array",proto:!0,forced:!BD},{filter:function(r){return FD(this,r,arguments.length>1?arguments[1]:void 0)}})});var pw=a((O9,vw)=>{"use strict";fw();var GD=oe();vw.exports=GD("Array","filter")});var hw=a((E9,dw)=>{"use strict";var UD=B(),WD=pw(),ts=Array.prototype;dw.exports=function(e){var r=e.filter;return e===ts||UD(ts,e)&&r===ts.filter?WD:r}});var yw=a((C9,mw)=>{"use strict";var HD=hw();mw.exports=HD});var bw=a((I9,gw)=>{"use strict";var KD=yw();gw.exports=KD});var xw=a((k9,qw)=>{"use strict";var VD=bw();qw.exports=VD});var ww=a((_9,Sw)=>{"use strict";Sw.exports=xw()});var Ow=a((P9,Tw)=>{Tw.exports=ww()});var Bw=a(()=>{"use strict";var rB=x(),tB=U(),is=kr(),nB=Ou(),Mw=jo(),iB=Q(),jw=$(),aB=ze(),Lw=_(),as=tB("Reflect","construct"),oB=Object.prototype,uB=[].push,Fw=Lw(function(){function e(){}return!(as(function(){},[],e)instanceof e)}),Dw=!Lw(function(){as(function(){})}),$w=Fw||Dw;rB({target:"Reflect",stat:!0,forced:$w,sham:$w},{construct:function(r,t){Mw(r),iB(t);var n=arguments.length<3?r:Mw(arguments[2]);if(Dw&&!Fw)return as(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return is(uB,i,t),new(is(nB,r,i))}var o=n.prototype,u=aB(jw(o)?o:oB),l=is(r,u,t);return jw(l)?l:u}})});var Uw=a((fY,Gw)=>{"use strict";Bw();var sB=K();Gw.exports=sB.Reflect.construct});var Hw=a((vY,Ww)=>{"use strict";var cB=Uw();Ww.exports=cB});var Vw=a((pY,Kw)=>{"use strict";var lB=Hw();Kw.exports=lB});var Yw=a((dY,zw)=>{"use strict";var fB=Vw();zw.exports=fB});var Ri=a((hY,Jw)=>{"use strict";Jw.exports=Yw()});var Xw=a((mY,Qw)=>{Qw.exports=Ri()});var uT=a((OY,oT)=>{"use strict";var vB=_();oT.exports=vB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var lT=a((EY,cT)=>{"use strict";var pB=_(),dB=$(),hB=qe(),sT=uT(),Ai=Object.isExtensible,mB=pB(function(){Ai(1)});cT.exports=mB||sT?function(r){return!dB(r)||sT&&hB(r)==="ArrayBuffer"?!1:Ai?Ai(r):!0}:Ai});var vT=a((CY,fT)=>{"use strict";var yB=_();fT.exports=!yB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var vs=a((IY,hT)=>{"use strict";var gB=x(),bB=A(),qB=Dr(),xB=$(),cs=W(),SB=re().f,pT=Tt(),wB=Va(),ls=lT(),TB=Ar(),OB=vT(),dT=!1,Fe=TB("meta"),EB=0,fs=function(e){SB(e,Fe,{value:{objectID:"O"+EB++,weakData:{}}})},CB=function(e,r){if(!xB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!cs(e,Fe)){if(!ls(e))return"F";if(!r)return"E";fs(e)}return e[Fe].objectID},IB=function(e,r){if(!cs(e,Fe)){if(!ls(e))return!0;if(!r)return!1;fs(e)}return e[Fe].weakData},kB=function(e){return OB&&dT&&ls(e)&&!cs(e,Fe)&&fs(e),e},_B=function(){PB.enable=function(){},dT=!0;var e=pT.f,r=bB([].splice),t={};t[Fe]=1,e(t).length&&(pT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},gB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:wB.f}))},PB=hT.exports={enable:_B,fastKey:CB,getWeakData:IB,onFreeze:kB};qB[Fe]=!0});var gT=a((kY,yT)=>{"use strict";var RB=x(),AB=P(),NB=vs(),MB=_(),jB=xe(),$B=ve(),LB=ri(),FB=N(),DB=$(),BB=nr(),GB=Pe(),UB=re().f,WB=Ot().forEach,HB=G(),mT=Ve(),KB=mT.set,VB=mT.getterFor;yT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=AB[e],l=u&&u.prototype,s={},c;if(!HB||!FB(u)||!(i||l.forEach&&!MB(function(){new u().entries().next()})))c=t.getConstructor(r,e,n,o),NB.enable();else{c=r(function(p,d){KB(LB(p,f),{type:e,collection:new u}),BB(d)||$B(d,p[o],{that:p,AS_ENTRIES:n})});var f=c.prototype,v=VB(e);WB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in l&&!(i&&p==="clear")&&jB(f,p,function(m,h){var y=v(this).collection;if(!d&&i&&!DB(m))return p==="get"?void 0:!1;var q=y[p](m===0?0:m,h);return d?this:q})}),i||UB(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return GB(c,e,!1,!0),s[e]=c,RB({global:!0,forced:!0},s),i||t.setStrong(c,e,n),c}});var qT=a((_Y,bT)=>{"use strict";var zB=ke();bT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:zB(e,n,r[n],t);return e}});var CT=a((PY,ET)=>{"use strict";var xT=ze(),YB=Mn(),ST=qT(),JB=V(),QB=ri(),XB=nr(),ZB=ve(),e3=kn(),Ni=_n(),r3=Mo(),tn=G(),wT=vs().fastKey,OT=Ve(),TT=OT.set,ps=OT.getterFor;ET.exports={getConstructor:function(e,r,t,n){var i=e(function(c,f){QB(c,o),TT(c,{type:r,index:xT(null),first:null,last:null,size:0}),tn||(c.size=0),XB(f)||ZB(f,c[n],{that:c,AS_ENTRIES:t})}),o=i.prototype,u=ps(r),l=function(c,f,v){var p=u(c),d=s(c,f),m,h;return d?d.value=v:(p.last=d={index:h=wT(f,!0),key:f,value:v,previous:m=p.last,next:null,removed:!1},p.first||(p.first=d),m&&(m.next=d),tn?p.size++:c.size++,h!=="F"&&(p.index[h]=d)),c},s=function(c,f){var v=u(c),p=wT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return ST(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=xT(null),tn?v.size=0:f.size=0},delete:function(c){var f=this,v=u(f),p=s(f,c);if(p){var d=p.next,m=p.previous;delete v.index[p.index],p.removed=!0,m&&(m.next=d),d&&(d.previous=m),v.first===p&&(v.first=d),v.last===p&&(v.last=m),tn?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=JB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),ST(o,t?{get:function(f){var v=s(this,f);return v&&v.value},set:function(f,v){return l(this,f===0?0:f,v)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),tn&&YB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ps(r),o=ps(n);e3(e,r,function(u,l){TT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ni(void 0,!0)):Ni(l==="keys"?s.key:l==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),r3(r)}}});var IT=a(()=>{"use strict";var t3=gT(),n3=CT();t3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},n3)});var kT=a(()=>{"use strict";IT()});var PT=a((jY,_T)=>{"use strict";_T.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ie=a(($Y,AT)=>{"use strict";var i3=U(),Mi=PT(),RT=i3("Map");AT.exports={Map:RT,set:Mi("set",2),get:Mi("get",1),has:Mi("has",1),remove:Mi("delete",1),proto:RT.prototype}});var ds=a(()=>{"use strict";var a3=x(),o3=A(),u3=F(),s3=ir(),c3=ve(),ji=ie(),NT=X(),l3=_(),MT=ji.Map,f3=ji.has,v3=ji.get,p3=ji.set,d3=o3([].push),h3=NT||l3(function(){return MT.groupBy("ab",function(e){return e}).get("a").length!==1});a3({target:"Map",stat:!0,forced:NT||h3},{groupBy:function(r,t){s3(r),u3(t);var n=new MT,i=0;return c3(r,function(o){var u=t(o,i++);f3(n,u)?d3(v3(n,u),o):p3(n,u,[o])}),n}})});var z=a((DY,jT)=>{"use strict";var m3=He(),y3=TypeError;jT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new y3(m3(e)+" is not a map")}});var ms=a(()=>{"use strict";var g3=x(),b3=z(),hs=ie(),q3=X(),x3=hs.get,S3=hs.has,w3=hs.set;g3({target:"Map",proto:!0,real:!0,forced:q3},{getOrInsert:function(r,t){return S3(b3(this),r)?x3(this,r):(w3(this,r,t),t)}})});var gs=a(()=>{"use strict";var T3=x(),O3=F(),E3=z(),ys=ie(),C3=X(),I3=ys.get,k3=ys.has,_3=ys.set;T3({target:"Map",proto:!0,real:!0,forced:C3},{getOrInsertComputed:function(r,t){if(E3(this),O3(t),k3(this,r))return I3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return _3(this,r,n),n}})});var LT=a((HY,$T)=>{"use strict";dr();kT();ds();ms();gs();wt();lr();var P3=K();$T.exports=P3.Map});var DT=a((KY,FT)=>{"use strict";var R3=LT();hr();FT.exports=R3});var bs=a(()=>{"use strict";ms()});var qs=a(()=>{"use strict";gs()});var BT=a(()=>{"use strict";ds()});var UT=a((ZY,GT)=>{"use strict";var A3=DT();bs();qs();BT();GT.exports=A3});var HT=a((eJ,WT)=>{"use strict";var N3=V(),M3=Q(),j3=ee(),$3=ve();WT.exports=function(e,r,t){return function(i){var o=j3(i),u=arguments.length,l=u>1?arguments[1]:void 0,s=l!==void 0,c=s?N3(l,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return $3(o,function(p){var d=s?c(p,v++):p;t?r(f,M3(d)[0],d[1]):r(f,d)}),f}}});var VT=a(()=>{"use strict";var L3=x(),KT=ie(),F3=HT();L3({target:"Map",stat:!0,forced:!0},{from:F3(KT.Map,KT.set,!0)})});var YT=a((nJ,zT)=>{"use strict";var D3=Q();zT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,D3(l)[0],l[1]):r(i,l)}return i}}});var QT=a(()=>{"use strict";var B3=x(),JT=ie(),G3=YT();B3({target:"Map",stat:!0,forced:!0},{of:G3(JT.Map,JT.set,!0)})});var ZT=a(()=>{"use strict";var U3=x(),W3=D(),H3=ve(),K3=N(),XT=F(),V3=ie().Map;U3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=K3(this)?this:V3,i=new n;XT(t);var o=XT(i.set);return H3(r,function(u){W3(o,i,t(u),u)}),i}})});var eO=a(()=>{"use strict";var z3=x(),Y3=z(),J3=ie().remove;z3({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=Y3(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=J3(r,arguments[i]),t=t&&n;return!!t}})});var tO=a(()=>{"use strict";var Q3=x(),X3=z(),xs=ie(),Z3=xs.get,e4=xs.has,rO=xs.set;Q3({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=X3(this),i,o;return e4(n,r)?(i=Z3(n,r),"update"in t&&(i=t.update(i,r,n),rO(n,r,i)),i):(o=t.insert(r,n),rO(n,r,o),o)}})});var iO=a((vJ,nO)=>{"use strict";var r4=D();nO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=r4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var me=a((pJ,aO)=>{"use strict";var t4=iO();aO.exports=function(e,r,t){return t?t4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var oO=a(()=>{"use strict";var n4=x(),i4=V(),a4=z(),o4=me();n4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=a4(this),n=i4(r,arguments.length>1?arguments[1]:void 0);return o4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var sO=a(()=>{"use strict";var u4=x(),s4=V(),c4=z(),uO=ie(),l4=me(),f4=uO.Map,v4=uO.set;u4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=c4(this),n=s4(r,arguments.length>1?arguments[1]:void 0),i=new f4;return l4(t,function(o,u){n(o,u,t)&&v4(i,u,o)}),i}})});var cO=a(()=>{"use strict";var p4=x(),d4=V(),h4=z(),m4=me();p4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=h4(this),n=d4(r,arguments.length>1?arguments[1]:void 0),i=m4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var lO=a(()=>{"use strict";var y4=x(),g4=V(),b4=z(),q4=me();y4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=b4(this),n=g4(r,arguments.length>1?arguments[1]:void 0),i=q4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var vO=a((SJ,fO)=>{"use strict";fO.exports=function(e,r){return e===r||e!==e&&r!==r}});var pO=a(()=>{"use strict";var x4=x(),S4=vO(),w4=z(),T4=me();x4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return T4(w4(this),function(t){if(S4(t,r))return!0},!0)===!0}})});var dO=a(()=>{"use strict";var O4=x(),E4=z(),C4=me();O4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=C4(E4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var mO=a(()=>{"use strict";var I4=x(),k4=V(),_4=z(),hO=ie(),P4=me(),R4=hO.Map,A4=hO.set;I4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=_4(this),n=k4(r,arguments.length>1?arguments[1]:void 0),i=new R4;return P4(t,function(o,u){A4(i,n(o,u,t),o)}),i}})});var gO=a(()=>{"use strict";var N4=x(),M4=V(),j4=z(),yO=ie(),$4=me(),L4=yO.Map,F4=yO.set;N4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=j4(this),n=M4(r,arguments.length>1?arguments[1]:void 0),i=new L4;return $4(t,function(o,u){F4(i,u,n(o,u,t))}),i}})});var bO=a(()=>{"use strict";var D4=x(),B4=z(),G4=ve(),U4=ie().set;D4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=B4(this),n=arguments.length,i=0;i<n;)G4(arguments[i++],function(o,u){U4(t,o,u)},{AS_ENTRIES:!0});return t}})});var qO=a(()=>{"use strict";var W4=x(),H4=F(),K4=z(),V4=me(),z4=TypeError;W4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=K4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(H4(r),V4(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new z4("Reduce of empty map with no initial value");return i}})});var xO=a(()=>{"use strict";var Y4=x(),J4=V(),Q4=z(),X4=me();Y4({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=Q4(this),n=J4(r,arguments.length>1?arguments[1]:void 0);return X4(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var wO=a(()=>{"use strict";var Z4=x(),SO=F(),eG=z(),Ss=ie(),rG=TypeError,tG=Ss.get,nG=Ss.has,iG=Ss.set;Z4({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=eG(this),i=arguments.length;SO(t);var o=nG(n,r);if(!o&&i<3)throw new rG("Updating absent value");var u=o?tG(n,r):SO(i>2?arguments[2]:void 0)(r,n);return iG(n,r,t(u,r,n)),n}})});var Ts=a((FJ,TO)=>{"use strict";var $i=D(),ws=F(),Li=N(),aG=Q(),oG=TypeError;TO.exports=function(r,t){var n=aG(this),i=ws(n.get),o=ws(n.has),u=ws(n.set),l=arguments.length>2?arguments[2]:void 0,s;if(!Li(t)&&!Li(l))throw new oG("At least one callback required");return $i(o,n,r)?(s=$i(i,n,r),Li(t)&&(s=t(s),$i(u,n,r,s))):Li(l)&&(s=l(),$i(u,n,r,s)),s}});var OO=a(()=>{"use strict";var uG=x(),sG=Ts();uG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:sG})});var EO=a(()=>{"use strict";var cG=x(),lG=Ts();cG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:lG})});var IO=a((WJ,CO)=>{"use strict";var fG=UT();VT();QT();ZT();eO();tO();oO();sO();cO();lO();pO();bs();qs();dO();mO();gO();bO();qO();xO();wO();OO();EO();CO.exports=fG});var _O=a((HJ,kO)=>{"use strict";kO.exports=IO()});var RO=a(()=>{"use strict";var vG=x(),pG=ot(),dG=Ea().indexOf,hG=Vu(),Os=pG([].indexOf),PO=!!Os&&1/Os([1],1,-0)<0,mG=PO||!hG("indexOf");vG({target:"Array",proto:!0,forced:mG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return PO?Os(this,r,t)||0:dG(this,r,t)}})});var NO=a((zJ,AO)=>{"use strict";RO();var yG=oe();AO.exports=yG("Array","indexOf")});var jO=a((YJ,MO)=>{"use strict";var gG=B(),bG=NO(),Es=Array.prototype;MO.exports=function(e){var r=e.indexOf;return e===Es||gG(Es,e)&&r===Es.indexOf?bG:r}});var LO=a((JJ,$O)=>{"use strict";var qG=jO();$O.exports=qG});var DO=a((QJ,FO)=>{"use strict";var xG=LO();FO.exports=xG});var GO=a((XJ,BO)=>{"use strict";var SG=DO();BO.exports=SG});var WO=a((ZJ,UO)=>{"use strict";UO.exports=GO()});var uE=a(()=>{"use strict";var IG=x(),kG=ee(),oE=Tn(),_G=_(),PG=_G(function(){oE(1)});IG({target:"Object",stat:!0,forced:PG},{keys:function(r){return oE(kG(r))}})});var cE=a((iX,sE)=>{"use strict";uE();var RG=K();sE.exports=RG.Object.keys});var fE=a((aX,lE)=>{"use strict";var AG=cE();lE.exports=AG});var pE=a((oX,vE)=>{"use strict";var NG=fE();vE.exports=NG});var hE=a((uX,dE)=>{"use strict";var MG=pE();dE.exports=MG});var yE=a((sX,mE)=>{"use strict";mE.exports=hE()});var bE=a((cX,gE)=>{gE.exports=yE()});var Cr="";function Us(e){Cr=e.replace(/\/+$/,"")}var ln={"Content-Type":"application/json"};async function Ws(e){let r=await fetch(`${Cr}/comments?document=${encodeURIComponent(e)}`,{headers:ln});if(!r.ok)throw new Error(`Failed to fetch comments: ${r.status}`);return r.json()}async function Wi({document:e,selectors:r,comment:t,commenter:n,parent_id:i}){let o=await fetch(`${Cr}/comments`,{method:"POST",headers:ln,body:JSON.stringify({document:e,selectors:r,comment:t,commenter:n,parent_id:i})});if(!o.ok){let u=await o.json().catch(()=>({error:{message:o.statusText}}));throw new Error(u.error&&u.error.message||"Failed to create comment")}return o.json()}async function Hs(e,{comment:r}){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:ln,body:JSON.stringify({comment:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Ks(e,r){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:ln,body:JSON.stringify({status:r})});if(!t.ok)throw new Error(`Failed to update comment status: ${t.status}`);return t.json()}async function Vs(e){let r=await fetch(`${Cr}/comments/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete comment: ${r.status}`)}var IL=g(Fr(),1),kL=g(Rn(),1),_L=g(zn(),1),PL=g(Yn(),1),RL=g(Jn(),1);var qu=g(Zr(),1);function Gy(e,r,t,n,i,o,u){try{var l=e[o](u),s=l.value}catch(c){return void t(c)}l.done?r(s):qu.default.resolve(s).then(n,i)}function qr(e){return function(){var r=this,t=arguments;return new qu.default(function(n,i){var o=e.apply(r,t);function u(s){Gy(o,n,i,u,l,"next",s)}function l(s){Gy(o,n,i,u,l,"throw",s)}u(void 0)})}}function Lt(e,r){this.v=e,this.k=r}function Xe(e){return new Lt(e,0)}var xu=g(Zr(),1),Xy=g(Se(),1),Zy=g(fi(),1);function Te(e){return function(){return new Ft(e.apply(this,arguments))}}function Ft(e){var r,t;function n(o,u){try{var l=e[o](u),s=l.value,c=s instanceof Lt;xu.default.resolve(c?s.v:s).then(function(f){if(c){var v=o==="return"?"return":"next";if(!s.k||f.done)return n(v,f);f=e[v](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new xu.default(function(l,s){var c={key:o,arg:u,resolve:l,reject:s,next:null};t?t=t.next=c:(r=t=c,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ft.prototype[typeof Xy.default=="function"&&Zy.default||"@@asyncIterator"]=function(){return this},Ft.prototype.next=function(e){return this._invoke("next",e)},Ft.prototype.throw=function(e){return this._invoke("throw",e)},Ft.prototype.return=function(e){return this._invoke("return",e)};var AL=g(se(),1),NL=g(wq(),1);function ce(e){var r,t=EL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function EL(e){return"startContainer"in e}function er(e){if(CL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function CL(e){return"startContainer"in e}var Mq=g(Nq(),1);function jq(e){if((0,Mq.default)(e))return e}var Yq=g(Se(),1),Jq=g(ko(),1),Qq=g(Wu(),1);function Xq(e,r){var t=e==null?null:typeof Yq.default<"u"&&(0,Jq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,Qq.default)(l).call(l,n.value),l.length!==r);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw i}}return l}}var Zq=g(ba(),1),ex=g(Ha(),1);function Ei(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Hu(e,r){if(e){var t;if(typeof e=="string")return Ei(e,r);var n=(0,Zq.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ex.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ei(e,r):void 0}}function rx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return jq(e)||Xq(e,r)||Hu(e,r)||rx()}var tx=g(Se(),1),nx=g(fi(),1),ix=g(Vt(),1),Qt=g(Zr(),1);function rt(e){var r,t,n,i=2;for(typeof tx.default<"u"&&(t=nx.default,n=ix.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ci(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ci(e){function r(t){if(Object(t)!==t)return Qt.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Qt.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ci=function(n){this.s=n,this.n=n.next},Ci.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?Qt.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?Qt.default.reject(n):r(i.apply(this.s,arguments))}},new Ci(e)}var uD=g(se(),1);var rD=g(se(),1),tD=g(bx(),1),nD=g(xx(),1),iD=g(Ux(),1),aD=g(sS(),1),oD=g(Qu(),1);var ks=g(se(),1);var eB=g(se(),1);var Zu=g(se(),1);function Xt(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function SS(e,r){return Xt(e.startChunk,r.startChunk)&&Xt(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function xr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Xu=g(Gt(),1);var Zt=g(Se(),1),wS=g(Vt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof Zt.default=="function"&&typeof wS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Zt.default=="function"&&r.constructor===Zt.default&&r!==Zt.default.prototype?"symbol":typeof r},Le(e)}var MS=g(NS(),1);function jS(e,r){if(Le(e)!="object"||!e)return e;var t=e[MS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ii(e){var r=jS(e,"string");return Le(r)=="symbol"?r:r+""}function $S(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Xu.default)(e,Ii(n.key),n)}}function en(e,r,t){return r&&$S(e.prototype,r),t&&$S(e,t),(0,Xu.default)(e,"prototype",{writable:!1}),e}var LS=g(Gt(),1);function Sr(e,r,t){return(r=Ii(r))in e?(0,LS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var FS=g(Fr(),1);var ki="Iterator exhausted before seek ended.",rn=function(){function e(r){xr(this,e),this.chunker=r,Sr(this,"currentChunkPosition",0),Sr(this,"offsetInChunk",0),this.seekTo(0)}return en(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!Xt(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=$e(v,2),d=p[0],m=p[1];if(t&&(u=d+u),m===null)throw new RangeError(ki)}else for(;!Xt(this.currentChunk,n);){var l=this._readToNextChunk(),s=$e(l,2),c=s[0],f=s[1];if(t&&(u+=c),f===null)throw new RangeError(ki)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,FS.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var s=this._readToNextChunk(),c=$e(s,2),f=c[0],v=c[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(ki)}}else{var p=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(ki)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function BS(e,r){return es.apply(this,arguments)}function es(){return es=qr(Zu.default.mark(function e(r,t){var n,i,o,u,l,s,c,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j=arguments;return Zu.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,s=n.maxWordLength,c=s===void 0?50:s,f=new rn(t()),v=new rn(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+p.length+m.length},h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-h())/2),d=f.read(-y,!1,!0)+d,h()<l&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=l-h(),m=m+f.read(q,!1,!0),h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=_i(f,c,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+_i(f,c,!1));case 11:return I={type:"TextQuoteSelector",exact:p,prefix:d,suffix:m},C=Pi(I)(t()),k.next=16,C.next();case 16:if(S=k.sent,!(!S.done&&SS(S.value,r))){k.next=21;break}return k.next=20,C.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=DS(f,v,!0),w!==void 0&&!o&&(w=_i(f,c,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),v.seekToChunk(T.endChunk,T.endIndex+m.length),E=DS(f,v,!1),E!==void 0&&!o&&(E=E+_i(f,c,!1)),!o){k.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(E===void 0){k.next=41;break}m=m+E,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(m=m+E);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),es.apply(this,arguments)}function DS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function _i(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(vD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function vD(e){return/^\s+$/.test(e)}var Iw=g(Fr(),1),kw=g(Rn(),1),_w=g(zn(),1),Pw=g(Yn(),1),Rw=g(Jn(),1);var ns=g(se(),1),Aw=g(lw(),1),Nw=g(Ow(),1);function Ew(e,r){var t;if(typeof _w.default>"u"||(0,Pw.default)(e)==null){if(Array.isArray(e)||(t=zD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Rw.default)(e)},n:function(){var c=t.next();return o=c.done,c},e:function(c){u=!0,l=c},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function zD(e,r){var t;if(e){if(typeof e=="string")return Cw(e,r);var n=(0,Iw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,kw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cw(e,r)}}function Cw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Pi(e){return function(){var r=Te(ns.default.mark(function n(i){var o,u,l,s,c,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j,ge,k,Z,be,J,L;return ns.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",s=u+o+l,c=[],f=!0;case 6:v=i.currentChunk,p=v.data,d=[],m=Ew(c),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=p.length&&(y.endChunk=v,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=I)),C=s.length-q,!(C<=p.length)){O.next=24;break}if(!(0,Aw.default)(p).call(p,s.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:p===s.substring(q,q+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(c=d,!(s.length<=p.length)){O.next=49;break}S=0;case 38:if(!(S<=p.length)){O.next=49;break}if(T=p.indexOf(s,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],E=Math.max(p.length-s.length+1,0),j=function(Ue){var Bs=p[Ue];w=(0,Nw.default)(w).call(w,function(DE){return Bs===s[Ue-DE]}),Bs===s[0]&&w.push(Ue)},ge=E;ge<p.length;ge++)j(ge);k=Ew(w);try{for(k.s();!(Z=k.n()).done;)be=Z.value,J=p.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=v,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=v,L.startIndex=be+u.length),c.push(L)}catch(Er){k.e(Er)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var XD=g(se(),1);var YD=g(Fr(),1),JD=g(Qu(),1);var ZD=g(se(),1);var an=g(Xw(),1);var eT=g(pi(),1),rT=g(Gt(),1);var os=g(di(),1),Zw=g(Bt(),1);function rr(e,r){var t;return rr=os.default?(0,Zw.default)(t=os.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function us(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,eT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,rT.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function tT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tT(e)}var iT=g(di(),1),aT=g(Bt(),1),ss=g(vi(),1);function wr(e){var r;return wr=iT.default?(0,aT.default)(r=ss.default).call(r):function(t){return t.__proto__||(0,ss.default)(t)},wr(e)}var Is=g(_O(),1),XO=g(pi(),1);var HO=g(WO(),1);function KO(e){try{var r;return(0,HO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var zO=g(Ri(),1),YO=g(Wu(),1),JO=g(Bt(),1);var VO=g(Ri(),1);function Cs(){try{var e=!Boolean.prototype.valueOf.call((0,VO.default)(Boolean,[],function(){}))}catch{}return(Cs=function(){return!!e})()}function QO(e,r,t){if(Cs())return zO.default.apply(null,arguments);var n=[null];(0,YO.default)(n).apply(n,r);var i=new((0,JO.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function nn(e){var r=typeof Is.default=="function"?new Is.default:void 0;return nn=function(n){if(n===null||!KO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return QO(n,arguments,wr(this).constructor)}return i.prototype=(0,XO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},nn(e)}function rE(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=ZO(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var s=ZO(e.endContainer,e.endOffset),c=$e(s,2),f=c[0],v=c[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function ZO(e,r){var t;if(eE(e))return[e,r];var n;if(wG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(eE(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function eE(e){return e.nodeType===Node.TEXT_NODE}function wG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function nE(e){var r=TG();return function(){var n=wr(e),i;if(r){var o=wr(this).constructor;i=(0,an.default)(n,arguments,o)}else i=n.apply(this,arguments);return nT(this,i)}}function TG(){if(typeof Reflect>"u"||!an.default||an.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,an.default)(Boolean,[],function(){})),!0}catch{return!1}}var Fi=function(e){us(t,e);var r=nE(t);function t(n){return xr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(nn(TypeError)),OG=function(e){us(t,e);var r=nE(t);function t(n){return xr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(nn(TypeError)),Tr=function(){function e(r){var t=this;if(xr(this,e),Sr(this,"scope",void 0),Sr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!tE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Fi}}return en(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!tE(t))throw new Fi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new OG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=rE(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function tE(e){return e.nodeType===Node.TEXT_NODE}function iE(e,r){return _s.apply(this,arguments)}function _s(){return _s=qr(ks.default.mark(function e(r,t){var n,i,o,u=arguments;return ks.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Tr(i),s.next=5,BS(o.rangeToChunkRange(r),function(){return new Tr(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),_s.apply(this,arguments)}var Ps=g(se(),1);function aE(e){var r=Pi(e);return function(){var t=Te(Ps.default.mark(function i(o){var u,l,s,c,f,v,p,d;return Ps.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Tr(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Fi)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:l=!0,s=!1,h.prev=13,f=rt(r(u));case 15:return h.next=17,Xe(f.next());case 17:return v=h.sent,l=v.done,h.next=21,Xe(v.value);case 21:if(p=h.sent,l){h.next=29;break}return d=p,h.next=26,u.chunkRangeToRange(d);case 26:l=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),s=!0,c=h.t1;case 35:if(h.prev=35,h.prev=36,!(!l&&f.return!=null)){h.next=40;break}return h.next=40,Xe(f.return());case 40:if(h.prev=40,!s){h.next=43;break}throw c;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var EG=g(se(),1);var CG=g(se(),1);var jG=g(bE(),1),$G=g(Fr(),1),LG=g(Rn(),1),FG=g(zn(),1),DG=g(Yn(),1),BG=g(Jn(),1);async function qE(e,r){let t=await iE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Di(e,r){let t=aE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var tt="fb-highlight",xE="fb-highlight-active";var on=null;function wE(e){on=e}function Bi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=SE(e,r);t.push(n)}else{let n=UG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(SE(u,r))}}return t}function SE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return GG(e,r,o);let u=document.createElement("mark");u.className=tt,u.dataset.annotationId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{on&&on(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function GG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,s=null;for(;l&&l!==t;){if(l.tagName==="text"){s=l.parentElement;break}l=l.parentElement}let c=s||t,f=o;c!==t&&c.getScreenCTM&&(f=c.getScreenCTM());let v=document.createElementNS(i,"g");v.setAttribute("class",tt),v.setAttribute("data-annotation-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let C=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",C.x),b.setAttribute("y",C.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",v.appendChild(b)}c&&c!==t?c.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,m=p;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),on&&on(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbAnnotationId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Rs(e){document.querySelectorAll(`.${tt}[data-annotation-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-annotation-id="${e}"]`).forEach(n=>{delete n.dataset.fbAnnotationId,n.style.cursor=""})}function TE(){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Gi(e){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.dataset.annotationId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(xE):r.classList.remove(xE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function OE(e){let r=document.querySelector(`.${tt}[data-annotation-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function UG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}var WG=320,Ns="feedback-layer-commenter",EE=["Funky","Jaunty","Crimson","Swift","Clever","Daring","Gentle","Jolly","Lively","Nimble","Quirky","Rusty","Snappy","Witty"],CE=["Squid","Octopus","Narwhal","Pangolin","Axolotl","Quokka","Capybara","Meerkat","Tardigrade","Wombat","Platypus","Caracal"];function HG(){let e=EE[Math.floor(Math.random()*EE.length)],r=CE[Math.floor(Math.random()*CE.length)];return`${e} ${r}`}var ae=null,Be=null,De=null,As=null,kE=null,Ms=null,js=null,$s=null,Ls=null,Fs=!1,_E=[],PE=new Set;function nt(){let e=localStorage.getItem(Ns);return e||(e=HG(),localStorage.setItem(Ns,e)),e}function RE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){kE=e,Ms=r,js=t,$s=n,Ls=i,XG(),ae=document.createElement("div"),ae.className="fb-sidebar fb-sidebar-collapsed",ae.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${un(nt())}">
      </div>
      <div class="fb-filter-section">
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show resolved</span>
        </label>
      </div>
      <div class="fb-annotation-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>sn()),document.body.appendChild(o),document.body.appendChild(ae),Be=ae.querySelector(".fb-annotation-list"),De=ae.querySelector(".fb-form-section");let u=ae.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(Ns,u.value.trim())}),ae.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>KG());let s=ae.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Fs=s.checked,tr(_E,PE)})}function sn(){ae.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function KG(){ae.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function AE(e){if(sn(),!nt()){let n=ae.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}As=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${un(JG(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!nt()){let i=ae.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(kE({comment:n,commenter:nt()}),De.style.display="none",As=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",As=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function VG(e){let r=[],t=new Map;for(let n of e)n.parent_id?(t.has(n.parent_id)||t.set(n.parent_id,[]),t.get(n.parent_id).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function tr(e,r=new Set,t=new Map){_E=e,PE=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=VG(e),o=n.slice().sort((c,f)=>{let v=t.get(c.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(c=>{let f=r.has(c.id),v=c.status==="closed";return f||v&&Fs}),l=Fs?u:u.filter(c=>c.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No annotations yet. Select text to add one.</div>';return}let s=o.filter(c=>!r.has(c.id)&&c.status!=="closed").length;if(l.length===0){s>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} annotation(s) closed.
        ${s>0?`<br>${s} annotation(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show resolved" to see closed annotations.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} annotation(s) closed. Check "Show resolved" to see them.</div>`;return}for(let c of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(IE(c,!1));let v=i.get(c.id)||[];for(let d of v)f.appendChild(IE(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),zG(c.id,f,p)}),f.appendChild(p),Be.appendChild(f)}}function IE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-ann-card"+(t?" fb-ann-resolved":"")+(r?" fb-ann-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-ann-comment">${un(e.comment)}</div>
    <div class="fb-ann-meta">
      <span class="fb-ann-commenter">${un(e.commenter)}</span>
      <span class="fb-ann-time">${QG(e.created_at)}</span>
      <button class="fb-ann-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-ann-resolve" title="${t?"Reopen":"Close"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-ann-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-ann-delete")||i.target.closest(".fb-ann-resolve")||i.target.closest(".fb-ann-edit")||(Gi(e.id),OE(e.id),Be.querySelectorAll(".fb-ann-card").forEach(o=>o.classList.remove("fb-ann-active")),n.classList.add("fb-ann-active"))}),n.querySelector(".fb-ann-resolve").addEventListener("click",i=>{i.stopPropagation(),js&&js(e.id,!t)})),n.querySelector(".fb-ann-edit").addEventListener("click",i=>{i.stopPropagation(),YG(e,n)}),n.querySelector(".fb-ann-delete").addEventListener("click",i=>{i.stopPropagation(),Ms&&Ms(e.id)}),n}function zG(e,r,t){sn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!nt()){let s=ae.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&($s&&$s({parent_id:e,comment:l,commenter:nt()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function YG(e,r){let t=r.querySelector(".fb-ann-comment"),n=e.comment;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${un(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Ls&&Ls(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function NE(e){let r=Be.querySelector(`.fb-ann-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-ann-card").forEach(t=>t.classList.remove("fb-ann-active")),r.classList.add("fb-ann-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function JG(e,r){return e.length>r?e.slice(0,r)+"...":e}function QG(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function un(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}function XG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${WG}px;
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
    .fb-annotation-list {
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
    .fb-ann-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-ann-card:hover {
      border-color: #c4b5fd;
    }
    .fb-ann-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-ann-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-ann-comment {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-ann-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: #999;
    }
    .fb-ann-commenter {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-ann-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-ann-resolve:hover {
      color: #16a34a;
    }
    .fb-ann-edit {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-ann-edit:hover {
      color: #7c3aed;
    }
    .fb-ann-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-ann-delete:hover {
      color: #ef4444;
    }
    .fb-ann-resolved {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-ann-resolved .fb-ann-comment {
      text-decoration: line-through;
    }
    .fb-ann-resolved .fb-ann-resolve {
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
    .fb-ann-reply {
      margin-left: 20px;
      border-left: 2px solid #e5e7eb;
      font-size: 13px;
    }
    .fb-ann-reply .fb-ann-comment {
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
  `,document.head.appendChild(e)}function ME(e,r){let t=ZG(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent_id).length} reviewer annotation(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ZG(e){let r=[],t=new Map;for(let n of e)n.parent_id?(t.has(n.parent_id)||t.set(n.parent_id,[]),t.get(n.parent_id).push(n)):r.push(n);return r.length===0?"_No annotations found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.commenter}]**`],u=Array.isArray(n.selectors)?n.selectors.find(s=>s.type==="TextQuoteSelector"):null;u&&u.quote&&o.push(`Highlighted text: "${u.quote}"`),n.comment&&o.push(`Comment: ${n.comment}`);let l=t.get(n.id)||[];for(let s of l)o.push(`  - **[${s.commenter}]** (reply): ${s.comment}`);return o.join(`
`)}).join(`

`)}var eU=`
  .hf-button {
    position: fixed;
    bottom: 24px;
    left: 24px;
    z-index: 10000;
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: background 0.2s;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  .hf-button:hover { background: #6d28d9; }

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
`,jE=null,$E=null;function LE(e,r){new URLSearchParams(window.location.search).get("author")==="true"&&($E=e,jE=r,rU(),tU())}function rU(){let e=document.createElement("style");e.textContent=eU,document.head.appendChild(e)}function tU(){let e=document.createElement("button");e.className="hf-button",e.textContent="Send Feedback to Claude",e.addEventListener("click",()=>nU()),document.body.appendChild(e)}function nU(){let e=jE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No annotations yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector($E.contentSelector||"body").innerHTML,s=ME(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} annotation(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${iU(s)}</textarea>
  `;let c=document.createElement("button");c.className="hf-btn hf-btn-primary",c.textContent="Copy Prompt",c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),c.textContent="Copied!"}catch{c.textContent="Copy failed"}setTimeout(()=>c.textContent="Copy Prompt",2e3)}),u.appendChild(c);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function iU(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}var it=null,Ui=null,Y=[],Or=null,Ee=null,ye=new Set,Ge=new Map;function Ds(e){return Array.isArray(e.selectors)&&e.selectors.find(r=>r.type==="TextQuoteSelector")||null}function aU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Us(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{it=document.querySelector(r.contentSelector)||document.body,Ui=r.documentUri||window.location.origin+window.location.pathname,RE({onSubmit:lU,onDelete:dU,onResolve:fU,onReply:vU,onEdit:pU}),wE(i=>{sn(),NE(i),Gi(i)}),sU(),await t(),oU(),LE(r,()=>Y)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function oU(){try{Y=await Ws(Ui),ye=await uU(Y),tr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e)}}async function uU(e){TE();let r=new Set;Ge.clear();for(let t of e){if(t.parent_id)continue;let n=Ds(t);if(n)try{let i=await Di({exact:n.quote,prefix:n.prefix,suffix:n.suffix},it);i&&t.status!=="closed"?(Bi(i,t.id),r.add(t.id),Ge.set(t.id,i)):i&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,i))}catch(i){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,i)}}return r}function sU(){document.addEventListener("mouseup",FE),document.addEventListener("keyup",FE)}function FE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){cn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){cn();return}if(!it.contains(r.commonAncestorContainer)){cn();return}cU(r)},10)}function cU(e){cn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.textContent="\u270E Annotate",Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Or=await qE(i,it),AE(Or.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}cn()}),document.body.appendChild(Ee)}function cn(){Ee&&(Ee.remove(),Ee=null)}async function lU({comment:e,commenter:r}){if(Or){try{let t=await Wi({document:Ui,selectors:[{type:"TextQuoteSelector",quote:Or.exact,prefix:Or.prefix||"",suffix:Or.suffix||""}],comment:e,commenter:r});Y.push(t);let n=Ds(t);if(n){let i=await Di({exact:n.quote,prefix:n.prefix,suffix:n.suffix},it);i&&(Bi(i,t.id),ye.add(t.id))}tr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),alert("Failed to save comment: "+t.message)}Or=null}}async function fU(e,r){try{let n=await Ks(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Rs(e);else{let o=Ds(n);if(o){let u=await Di({exact:o.quote,prefix:o.prefix,suffix:o.suffix},it);u?(Bi(u,n.id),ye.add(n.id)):ye.delete(n.id)}}tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to update comment status:",t)}}async function vU({parent_id:e,comment:r,commenter:t}){try{let n=await Wi({document:Ui,selectors:[],comment:r,commenter:t,parent_id:e});Y.push(n),tr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),alert("Failed to save reply: "+n.message)}}async function pU(e,r){try{let t=await Hs(e,{comment:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),alert("Failed to update comment: "+t.message)}}async function dU(e){try{await Vs(e),Rs(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent_id!==e),tr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r)}}aU();})();
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
