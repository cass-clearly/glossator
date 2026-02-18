var FeedbackLayer=(()=>{var $E=Object.create;var Fs=Object.defineProperty;var LE=Object.getOwnPropertyDescriptor;var FE=Object.getOwnPropertyNames;var DE=Object.getPrototypeOf,BE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var GE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of FE(r))!BE.call(e,i)&&i!==t&&Fs(e,i,{get:()=>r[i],enumerable:!(n=LE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?$E(DE(e)):{},GE(r||!e||!e.__esModule?Fs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((pU,Hs)=>{"use strict";Hs.exports=function(e){try{return!!e()}catch{return!0}}});var Ir=a((vU,Ks)=>{"use strict";var UE=P();Ks.exports=!UE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((dU,Ys)=>{"use strict";var Vs=Ir(),zs=Function.prototype,Wi=zs.call,WE=Vs&&zs.bind.bind(Wi,Wi);Ys.exports=Vs?WE:function(e){return function(){return Wi.apply(e,arguments)}}});var B=a((hU,Js)=>{"use strict";var HE=A();Js.exports=HE({}.isPrototypeOf)});var _=a((Hi,Qs)=>{"use strict";var at=function(e){return e&&e.Math===Math&&e};Qs.exports=at(typeof globalThis=="object"&&globalThis)||at(typeof window=="object"&&window)||at(typeof self=="object"&&self)||at(typeof global=="object"&&global)||at(typeof Hi=="object"&&Hi)||function(){return this}()||Function("return this")()});var kr=a((mU,rc)=>{"use strict";var KE=Ir(),ec=Function.prototype,Xs=ec.apply,Zs=ec.call;rc.exports=typeof Reflect=="object"&&Reflect.apply||(KE?Zs.bind(Xs):function(){return Zs.apply(Xs,arguments)})});var qe=a((yU,nc)=>{"use strict";var tc=A(),VE=tc({}.toString),zE=tc("".slice);nc.exports=function(e){return zE(VE(e),8,-1)}});var ot=a((gU,ic)=>{"use strict";var YE=qe(),JE=A();ic.exports=function(e){if(YE(e)==="Function")return JE(e)}});var N=a((bU,ac)=>{"use strict";var Ki=typeof document=="object"&&document.all;ac.exports=typeof Ki>"u"&&Ki!==void 0?function(e){return typeof e=="function"||e===Ki}:function(e){return typeof e=="function"}});var G=a((qU,oc)=>{"use strict";var QE=P();oc.exports=!QE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((xU,uc)=>{"use strict";var XE=Ir(),ln=Function.prototype.call;uc.exports=XE?ln.bind(ln):function(){return ln.apply(ln,arguments)}});var Vi=a(lc=>{"use strict";var sc={}.propertyIsEnumerable,cc=Object.getOwnPropertyDescriptor,ZE=cc&&!sc.call({1:2},1);lc.f=ZE?function(r){var t=cc(this,r);return!!t&&t.enumerable}:sc});var We=a((wU,fc)=>{"use strict";fc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var fn=a((TU,pc)=>{"use strict";var eC=A(),rC=P(),tC=qe(),zi=Object,nC=eC("".split);pc.exports=rC(function(){return!zi("z").propertyIsEnumerable(0)})?function(e){return tC(e)==="String"?nC(e,""):zi(e)}:zi});var nr=a((OU,vc)=>{"use strict";vc.exports=function(e){return e==null}});var ir=a((EU,dc)=>{"use strict";var iC=nr(),aC=TypeError;dc.exports=function(e){if(iC(e))throw new aC("Can't call method on "+e);return e}});var Ce=a((CU,hc)=>{"use strict";var oC=fn(),uC=ir();hc.exports=function(e){return oC(uC(e))}});var $=a((IU,mc)=>{"use strict";var sC=N();mc.exports=function(e){return typeof e=="object"?e!==null:sC(e)}});var K=a((kU,yc)=>{"use strict";yc.exports={}});var U=a((PU,bc)=>{"use strict";var Yi=K(),Ji=_(),cC=N(),gc=function(e){return cC(e)?e:void 0};bc.exports=function(e,r){return arguments.length<2?gc(Yi[e])||gc(Ji[e]):Yi[e]&&Yi[e][r]||Ji[e]&&Ji[e][r]}});var Pr=a((_U,Sc)=>{"use strict";var lC=_(),qc=lC.navigator,xc=qc&&qc.userAgent;Sc.exports=xc?String(xc):""});var _r=a((RU,Ic)=>{"use strict";var Cc=_(),Qi=Pr(),wc=Cc.process,Tc=Cc.Deno,Oc=wc&&wc.versions||Tc&&Tc.version,Ec=Oc&&Oc.v8,de,pn;Ec&&(de=Ec.split("."),pn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!pn&&Qi&&(de=Qi.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=Qi.match(/Chrome\/(\d+)/),de&&(pn=+de[1])));Ic.exports=pn});var ar=a((AU,Pc)=>{"use strict";var kc=_r(),fC=P(),pC=_(),vC=pC.String;Pc.exports=!!Object.getOwnPropertySymbols&&!fC(function(){var e=Symbol("symbol detection");return!vC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&kc&&kc<41})});var Xi=a((NU,_c)=>{"use strict";var dC=ar();_c.exports=dC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Rr=a((MU,Rc)=>{"use strict";var hC=U(),mC=N(),yC=B(),gC=Xi(),bC=Object;Rc.exports=gC?function(e){return typeof e=="symbol"}:function(e){var r=hC("Symbol");return mC(r)&&yC(r.prototype,bC(e))}});var He=a((jU,Ac)=>{"use strict";var qC=String;Ac.exports=function(e){try{return qC(e)}catch{return"Object"}}});var F=a(($U,Nc)=>{"use strict";var xC=N(),SC=He(),wC=TypeError;Nc.exports=function(e){if(xC(e))return e;throw new wC(SC(e)+" is not a function")}});var vn=a((LU,Mc)=>{"use strict";var TC=F(),OC=nr();Mc.exports=function(e,r){var t=e[r];return OC(t)?void 0:TC(t)}});var $c=a((FU,jc)=>{"use strict";var Zi=D(),ea=N(),ra=$(),EC=TypeError;jc.exports=function(e,r){var t,n;if(r==="string"&&ea(t=e.toString)&&!ra(n=Zi(t,e))||ea(t=e.valueOf)&&!ra(n=Zi(t,e))||r!=="string"&&ea(t=e.toString)&&!ra(n=Zi(t,e)))return n;throw new EC("Can't convert object to primitive value")}});var X=a((DU,Lc)=>{"use strict";Lc.exports=!0});var Bc=a((BU,Dc)=>{"use strict";var Fc=_(),CC=Object.defineProperty;Dc.exports=function(e,r){try{CC(Fc,e,{value:r,configurable:!0,writable:!0})}catch{Fc[e]=r}return r}});var ut=a((GU,Wc)=>{"use strict";var IC=X(),kC=_(),PC=Bc(),Gc="__core-js_shared__",Uc=Wc.exports=kC[Gc]||PC(Gc,{});(Uc.versions||(Uc.versions=[])).push({version:"3.48.0",mode:IC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var or=a((UU,Kc)=>{"use strict";var Hc=ut();Kc.exports=function(e,r){return Hc[e]||(Hc[e]=r||{})}});var ee=a((WU,Vc)=>{"use strict";var _C=ir(),RC=Object;Vc.exports=function(e){return RC(_C(e))}});var W=a((HU,zc)=>{"use strict";var AC=A(),NC=ee(),MC=AC({}.hasOwnProperty);zc.exports=Object.hasOwn||function(r,t){return MC(NC(r),t)}});var Ar=a((KU,Yc)=>{"use strict";var jC=A(),$C=0,LC=Math.random(),FC=jC(1.1.toString);Yc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+FC(++$C+LC,36)}});var R=a((VU,Qc)=>{"use strict";var DC=_(),BC=or(),Jc=W(),GC=Ar(),UC=ar(),WC=Xi(),Nr=DC.Symbol,ta=BC("wks"),HC=WC?Nr.for||Nr:Nr&&Nr.withoutSetter||GC;Qc.exports=function(e){return Jc(ta,e)||(ta[e]=UC&&Jc(Nr,e)?Nr[e]:HC("Symbol."+e)),ta[e]}});var rl=a((zU,el)=>{"use strict";var KC=D(),Xc=$(),Zc=Rr(),VC=vn(),zC=$c(),YC=R(),JC=TypeError,QC=YC("toPrimitive");el.exports=function(e,r){if(!Xc(e)||Zc(e))return e;var t=VC(e,QC),n;if(t){if(r===void 0&&(r="default"),n=KC(t,e,r),!Xc(n)||Zc(n))return n;throw new JC("Can't convert object to primitive value")}return r===void 0&&(r="number"),zC(e,r)}});var dn=a((YU,tl)=>{"use strict";var XC=rl(),ZC=Rr();tl.exports=function(e){var r=XC(e,"string");return ZC(r)?r:r+""}});var hn=a((JU,il)=>{"use strict";var eI=_(),nl=$(),na=eI.document,rI=nl(na)&&nl(na.createElement);il.exports=function(e){return rI?na.createElement(e):{}}});var ia=a((QU,al)=>{"use strict";var tI=G(),nI=P(),iI=hn();al.exports=!tI&&!nI(function(){return Object.defineProperty(iI("div"),"a",{get:function(){return 7}}).a!==7})});var st=a(ul=>{"use strict";var aI=G(),oI=D(),uI=Vi(),sI=We(),cI=Ce(),lI=dn(),fI=W(),pI=ia(),ol=Object.getOwnPropertyDescriptor;ul.f=aI?ol:function(r,t){if(r=cI(r),t=lI(t),pI)try{return ol(r,t)}catch{}if(fI(r,t))return sI(!oI(uI.f,r,t),r[t])}});var aa=a((ZU,sl)=>{"use strict";var vI=P(),dI=N(),hI=/#|\.prototype\./,ct=function(e,r){var t=yI[mI(e)];return t===bI?!0:t===gI?!1:dI(r)?vI(r):!!r},mI=ct.normalize=function(e){return String(e).replace(hI,".").toLowerCase()},yI=ct.data={},gI=ct.NATIVE="N",bI=ct.POLYFILL="P";sl.exports=ct});var V=a((eW,ll)=>{"use strict";var cl=ot(),qI=F(),xI=Ir(),SI=cl(cl.bind);ll.exports=function(e,r){return qI(e),r===void 0?e:xI?SI(e,r):function(){return e.apply(r,arguments)}}});var oa=a((rW,fl)=>{"use strict";var wI=G(),TI=P();fl.exports=wI&&TI(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((tW,pl)=>{"use strict";var OI=$(),EI=String,CI=TypeError;pl.exports=function(e){if(OI(e))return e;throw new CI(EI(e)+" is not an object")}});var re=a(dl=>{"use strict";var II=G(),kI=ia(),PI=oa(),mn=Q(),vl=dn(),_I=TypeError,ua=Object.defineProperty,RI=Object.getOwnPropertyDescriptor,sa="enumerable",ca="configurable",la="writable";dl.f=II?PI?function(r,t,n){if(mn(r),t=vl(t),mn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&la in n&&!n[la]){var i=RI(r,t);i&&i[la]&&(r[t]=n.value,n={configurable:ca in n?n[ca]:i[ca],enumerable:sa in n?n[sa]:i[sa],writable:!1})}return ua(r,t,n)}:ua:function(r,t,n){if(mn(r),t=vl(t),mn(n),kI)try{return ua(r,t,n)}catch{}if("get"in n||"set"in n)throw new _I("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((iW,hl)=>{"use strict";var AI=G(),NI=re(),MI=We();hl.exports=AI?function(e,r,t){return NI.f(e,r,MI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((aW,yl)=>{"use strict";var lt=_(),jI=kr(),$I=ot(),LI=N(),FI=st().f,DI=aa(),Mr=K(),BI=V(),jr=xe(),ml=W();ut();var GI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return jI(e,this,arguments)};return r.prototype=e.prototype,r};yl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?lt:i?lt[t]:lt[t]&&lt[t].prototype,c=n?Mr:Mr[t]||jr(Mr,t,{})[t],s=c.prototype,l,f,p,v,d,m,h,y,q;for(v in r)l=DI(n?v:t+(i?".":"#")+v,e.forced),f=!l&&u&&ml(u,v),m=c[v],f&&(e.dontCallGetSet?(q=FI(u,v),h=q&&q.value):h=u[v]),d=f&&h?h:r[v],!(!l&&!o&&typeof m==typeof d)&&(e.bind&&f?y=BI(d,lt):e.wrap&&f?y=GI(d):o&&LI(d)?y=$I(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&jr(y,"sham",!0),jr(c,v,y),o&&(p=t+"Prototype",ml(Mr,p)||jr(Mr,p,{}),jr(Mr[p],v,d),e.real&&s&&(l||!s[v])&&jr(s,v,d)))}});var Ie=a((oW,gl)=>{"use strict";var UI=qe();gl.exports=Array.isArray||function(r){return UI(r)==="Array"}});var yn=a((uW,ql)=>{"use strict";var WI=R(),HI=WI("toStringTag"),bl={};bl[HI]="z";ql.exports=String(bl)==="[object z]"});var ft=a((sW,xl)=>{"use strict";var KI=yn(),VI=N(),gn=qe(),zI=R(),YI=zI("toStringTag"),JI=Object,QI=gn(function(){return arguments}())==="Arguments",XI=function(e,r){try{return e[r]}catch{}};xl.exports=KI?gn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=XI(r=JI(e),YI))=="string"?t:QI?gn(r):(n=gn(r))==="Object"&&VI(r.callee)?"Arguments":n}});var pa=a((cW,Sl)=>{"use strict";var ZI=A(),e0=N(),fa=ut(),r0=ZI(Function.toString);e0(fa.inspectSource)||(fa.inspectSource=function(e){return r0(e)});Sl.exports=fa.inspectSource});var vt=a((lW,Cl)=>{"use strict";var t0=A(),n0=P(),wl=N(),i0=ft(),a0=U(),o0=pa(),Tl=function(){},Ol=a0("Reflect","construct"),va=/^\s*(?:class|function)\b/,u0=t0(va.exec),s0=!va.test(Tl),pt=function(r){if(!wl(r))return!1;try{return Ol(Tl,[],r),!0}catch{return!1}},El=function(r){if(!wl(r))return!1;switch(i0(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return s0||!!u0(va,o0(r))}catch{return!0}};El.sham=!0;Cl.exports=!Ol||n0(function(){var e;return pt(pt.call)||!pt(Object)||!pt(function(){e=!0})||e})?El:pt});var kl=a((fW,Il)=>{"use strict";var c0=Math.ceil,l0=Math.floor;Il.exports=Math.trunc||function(r){var t=+r;return(t>0?l0:c0)(t)}});var bn=a((pW,Pl)=>{"use strict";var f0=kl();Pl.exports=function(e){var r=+e;return r!==r||r===0?0:f0(r)}});var da=a((vW,_l)=>{"use strict";var p0=bn(),v0=Math.max,d0=Math.min;_l.exports=function(e,r){var t=p0(e);return t<0?v0(t+r,0):d0(t,r)}});var ha=a((dW,Rl)=>{"use strict";var h0=bn(),m0=Math.min;Rl.exports=function(e){var r=h0(e);return r>0?m0(r,9007199254740991):0}});var le=a((hW,Al)=>{"use strict";var y0=ha();Al.exports=function(e){return y0(e.length)}});var $r=a((mW,Nl)=>{"use strict";var g0=G(),b0=re(),q0=We();Nl.exports=function(e,r,t){g0?b0.f(e,r,q0(0,t)):e[r]=t}});var Lr=a((yW,Ml)=>{"use strict";var x0=G(),S0=Ie(),w0=TypeError,T0=Object.getOwnPropertyDescriptor,O0=x0&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Ml.exports=O0?function(e,r){if(S0(e)&&!T0(e,"length").writable)throw new w0("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var dt=a((gW,jl)=>{"use strict";var E0=P(),C0=R(),I0=_r(),k0=C0("species");jl.exports=function(e){return I0>=51||!E0(function(){var r=[],t=r.constructor={};return t[k0]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var ur=a((bW,$l)=>{"use strict";var P0=A();$l.exports=P0([].slice)});var Dl=a(()=>{"use strict";var _0=x(),Ll=Ie(),R0=vt(),A0=$(),Fl=da(),N0=le(),M0=Ce(),j0=$r(),$0=Lr(),L0=R(),F0=dt(),D0=ur(),B0=F0("slice"),G0=L0("species"),ma=Array,U0=Math.max;_0({target:"Array",proto:!0,forced:!B0},{slice:function(r,t){var n=M0(this),i=N0(n),o=Fl(r,i),u=Fl(t===void 0?i:t,i),c,s,l;if(Ll(n)&&(c=n.constructor,R0(c)&&(c===ma||Ll(c.prototype))?c=void 0:A0(c)&&(c=c[G0],c===null&&(c=void 0)),c===ma||c===void 0))return D0(n,o,u);for(s=new(c===void 0?ma:c)(U0(u-o,0)),l=0;o<u;o++,l++)o in n&&j0(s,l,n[o]);return $0(s,l),s}})});var oe=a((SW,Bl)=>{"use strict";var W0=_(),H0=K();Bl.exports=function(e,r){var t=H0[e+"Prototype"],n=t&&t[r];if(n)return n;var i=W0[e],o=i&&i.prototype;return o&&o[r]}});var Ul=a((wW,Gl)=>{"use strict";Dl();var K0=oe();Gl.exports=K0("Array","slice")});var Hl=a((TW,Wl)=>{"use strict";var V0=B(),z0=Ul(),ya=Array.prototype;Wl.exports=function(e){var r=e.slice;return e===ya||V0(ya,e)&&r===ya.slice?z0:r}});var Vl=a((OW,Kl)=>{"use strict";var Y0=Hl();Kl.exports=Y0});var Yl=a((EW,zl)=>{"use strict";var J0=Vl();zl.exports=J0});var Ql=a((CW,Jl)=>{"use strict";var Q0=Yl();Jl.exports=Q0});var ga=a((IW,Xl)=>{"use strict";Xl.exports=Ql()});var Fr=a((kW,Zl)=>{Zl.exports=ga()});var Ke=a((PW,ef)=>{"use strict";var X0=ft(),Z0=String;ef.exports=function(e){if(X0(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Z0(e)}});var af=a((_W,nf)=>{"use strict";var ba=A(),ek=bn(),rk=Ke(),tk=ir(),nk=ba("".charAt),rf=ba("".charCodeAt),ik=ba("".slice),tf=function(e){return function(r,t){var n=rk(tk(r)),i=ek(t),o=n.length,u,c;return i<0||i>=o?e?"":void 0:(u=rf(n,i),u<55296||u>56319||i+1===o||(c=rf(n,i+1))<56320||c>57343?e?nk(n,i):u:e?ik(n,i,i+2):(u-55296<<10)+(c-56320)+65536)}};nf.exports={codeAt:tf(!1),charAt:tf(!0)}});var sf=a((RW,uf)=>{"use strict";var ak=_(),ok=N(),of=ak.WeakMap;uf.exports=ok(of)&&/native code/.test(String(of))});var ht=a((AW,lf)=>{"use strict";var uk=or(),sk=Ar(),cf=uk("keys");lf.exports=function(e){return cf[e]||(cf[e]=sk(e))}});var Dr=a((NW,ff)=>{"use strict";ff.exports={}});var Ve=a((MW,df)=>{"use strict";var ck=sf(),vf=_(),lk=$(),fk=xe(),qa=W(),xa=ut(),pk=ht(),vk=Dr(),pf="Object already initialized",Sa=vf.TypeError,dk=vf.WeakMap,qn,mt,xn,hk=function(e){return xn(e)?mt(e):qn(e,{})},mk=function(e){return function(r){var t;if(!lk(r)||(t=mt(r)).type!==e)throw new Sa("Incompatible receiver, "+e+" required");return t}};ck||xa.state?(he=xa.state||(xa.state=new dk),he.get=he.get,he.has=he.has,he.set=he.set,qn=function(e,r){if(he.has(e))throw new Sa(pf);return r.facade=e,he.set(e,r),r},mt=function(e){return he.get(e)||{}},xn=function(e){return he.has(e)}):(sr=pk("state"),vk[sr]=!0,qn=function(e,r){if(qa(e,sr))throw new Sa(pf);return r.facade=e,fk(e,sr,r),r},mt=function(e){return qa(e,sr)?e[sr]:{}},xn=function(e){return qa(e,sr)});var he,sr;df.exports={set:qn,get:mt,has:xn,enforce:hk,getterFor:mk}});var yf=a((jW,mf)=>{"use strict";var wa=G(),yk=W(),hf=Function.prototype,gk=wa&&Object.getOwnPropertyDescriptor,Ta=yk(hf,"name"),bk=Ta&&function(){}.name==="something",qk=Ta&&(!wa||wa&&gk(hf,"name").configurable);mf.exports={EXISTS:Ta,PROPER:bk,CONFIGURABLE:qk}});var Oa=a(($W,bf)=>{"use strict";var xk=Ce(),Sk=da(),wk=le(),gf=function(e){return function(r,t,n){var i=xk(r),o=wk(i);if(o===0)return!e&&-1;var u=Sk(n,o),c;if(e&&t!==t){for(;o>u;)if(c=i[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};bf.exports={includes:gf(!0),indexOf:gf(!1)}});var Ca=a((LW,xf)=>{"use strict";var Tk=A(),Ea=W(),Ok=Ce(),Ek=Oa().indexOf,Ck=Dr(),qf=Tk([].push);xf.exports=function(e,r){var t=Ok(e),n=0,i=[],o;for(o in t)!Ea(Ck,o)&&Ea(t,o)&&qf(i,o);for(;r.length>n;)Ea(t,o=r[n++])&&(~Ek(i,o)||qf(i,o));return i}});var Sn=a((FW,Sf)=>{"use strict";Sf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var wn=a((DW,wf)=>{"use strict";var Ik=Ca(),kk=Sn();wf.exports=Object.keys||function(r){return Ik(r,kk)}});var Ia=a(Tf=>{"use strict";var Pk=G(),_k=oa(),Rk=re(),Ak=Q(),Nk=Ce(),Mk=wn();Tf.f=Pk&&!_k?Object.defineProperties:function(r,t){Ak(r);for(var n=Nk(t),i=Mk(t),o=i.length,u=0,c;o>u;)Rk.f(r,c=i[u++],n[c]);return r}});var ka=a((GW,Of)=>{"use strict";var jk=U();Of.exports=jk("document","documentElement")});var ze=a((UW,Rf)=>{"use strict";var $k=Q(),Lk=Ia(),Ef=Sn(),Fk=Dr(),Dk=ka(),Bk=hn(),Gk=ht(),Cf=">",If="<",_a="prototype",Ra="script",Pf=Gk("IE_PROTO"),Pa=function(){},_f=function(e){return If+Ra+Cf+e+If+"/"+Ra+Cf},kf=function(e){e.write(_f("")),e.close();var r=e.parentWindow.Object;return e=null,r},Uk=function(){var e=Bk("iframe"),r="java"+Ra+":",t;return e.style.display="none",Dk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(_f("document.F=Object")),t.close(),t.F},Tn,On=function(){try{Tn=new ActiveXObject("htmlfile")}catch{}On=typeof document<"u"?document.domain&&Tn?kf(Tn):Uk():kf(Tn);for(var e=Ef.length;e--;)delete On[_a][Ef[e]];return On()};Fk[Pf]=!0;Rf.exports=Object.create||function(r,t){var n;return r!==null?(Pa[_a]=$k(r),n=new Pa,Pa[_a]=null,n[Pf]=r):n=On(),t===void 0?n:Lk.f(n,t)}});var Aa=a((WW,Af)=>{"use strict";var Wk=P();Af.exports=!Wk(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var yt=a((HW,Mf)=>{"use strict";var Hk=W(),Kk=N(),Vk=ee(),zk=ht(),Yk=Aa(),Nf=zk("IE_PROTO"),Na=Object,Jk=Na.prototype;Mf.exports=Yk?Na.getPrototypeOf:function(e){var r=Vk(e);if(Hk(r,Nf))return r[Nf];var t=r.constructor;return Kk(t)&&r instanceof t?t.prototype:r instanceof Na?Jk:null}});var ke=a((KW,jf)=>{"use strict";var Qk=xe();jf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:Qk(e,r,t),e}});var La=a((VW,Ff)=>{"use strict";var Xk=P(),Zk=N(),eP=$(),rP=ze(),$f=yt(),tP=ke(),nP=R(),iP=X(),$a=nP("iterator"),Lf=!1,Pe,Ma,ja;[].keys&&(ja=[].keys(),"next"in ja?(Ma=$f($f(ja)),Ma!==Object.prototype&&(Pe=Ma)):Lf=!0);var aP=!eP(Pe)||Xk(function(){var e={};return Pe[$a].call(e)!==e});aP?Pe={}:iP&&(Pe=rP(Pe));Zk(Pe[$a])||tP(Pe,$a,function(){return this});Ff.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Lf}});var Bf=a((zW,Df)=>{"use strict";var oP=yn(),uP=ft();Df.exports=oP?{}.toString:function(){return"[object "+uP(this)+"]"}});var _e=a((YW,Uf)=>{"use strict";var sP=yn(),cP=re().f,lP=xe(),fP=W(),pP=Bf(),vP=R(),Gf=vP("toStringTag");Uf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(fP(i,Gf)||cP(i,Gf,{configurable:!0,value:r}),n&&!sP&&lP(i,"toString",pP))}});var cr=a((JW,Wf)=>{"use strict";Wf.exports={}});var Kf=a((QW,Hf)=>{"use strict";var dP=La().IteratorPrototype,hP=ze(),mP=We(),yP=_e(),gP=cr(),bP=function(){return this};Hf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=hP(dP,{next:mP(+!n,t)}),yP(e,i,!1,!0),gP[i]=bP,e}});var zf=a((XW,Vf)=>{"use strict";var qP=A(),xP=F();Vf.exports=function(e,r,t){try{return qP(xP(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Jf=a((ZW,Yf)=>{"use strict";var SP=$();Yf.exports=function(e){return SP(e)||e===null}});var Xf=a((eH,Qf)=>{"use strict";var wP=Jf(),TP=String,OP=TypeError;Qf.exports=function(e){if(wP(e))return e;throw new OP("Can't set "+TP(e)+" as a prototype")}});var gt=a((rH,Zf)=>{"use strict";var EP=zf(),CP=$(),IP=ir(),kP=Xf();Zf.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=EP(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return IP(i),kP(o),CP(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var In=a((tH,cp)=>{"use strict";var PP=x(),_P=D(),En=X(),up=yf(),RP=N(),AP=Kf(),ep=yt(),rp=gt(),NP=_e(),MP=xe(),Fa=ke(),jP=R(),tp=cr(),sp=La(),$P=up.PROPER,LP=up.CONFIGURABLE,np=sp.IteratorPrototype,Cn=sp.BUGGY_SAFARI_ITERATORS,bt=jP("iterator"),ip="keys",qt="values",ap="entries",op=function(){return this};cp.exports=function(e,r,t,n,i,o,u){AP(t,r,n);var c=function(q){if(q===i&&v)return v;if(!Cn&&q&&q in f)return f[q];switch(q){case ip:return function(){return new t(this,q)};case qt:return function(){return new t(this,q)};case ap:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,p=f[bt]||f["@@iterator"]||i&&f[i],v=!Cn&&p||c(i),d=r==="Array"&&f.entries||p,m,h,y;if(d&&(m=ep(d.call(new e)),m!==Object.prototype&&m.next&&(!En&&ep(m)!==np&&(rp?rp(m,np):RP(m[bt])||Fa(m,bt,op)),NP(m,s,!0,!0),En&&(tp[s]=op))),$P&&i===qt&&p&&p.name!==qt&&(!En&&LP?MP(f,"name",qt):(l=!0,v=function(){return _P(p,this)})),i)if(h={values:c(qt),keys:o?v:c(ip),entries:c(ap)},u)for(y in h)(Cn||l||!(y in f))&&Fa(f,y,h[y]);else PP({target:r,proto:!0,forced:Cn||l},h);return(!En||u)&&f[bt]!==v&&Fa(f,bt,v,{name:i}),tp[r]=v,h}});var kn=a((nH,lp)=>{"use strict";lp.exports=function(e,r){return{value:e,done:r}}});var lr=a(()=>{"use strict";var FP=af().charAt,DP=Ke(),pp=Ve(),BP=In(),fp=kn(),vp="String Iterator",GP=pp.set,UP=pp.getterFor(vp);BP(String,"String",function(e){GP(this,{type:vp,string:DP(e),index:0})},function(){var r=UP(this),t=r.string,n=r.index,i;return n>=t.length?fp(void 0,!0):(i=FP(t,n),r.index+=i.length,fp(i,!1))})});var Da=a((oH,hp)=>{"use strict";var WP=D(),dp=Q(),HP=vn();hp.exports=function(e,r,t){var n,i;dp(e);try{if(n=HP(e,"return"),!n){if(r==="throw")throw t;return t}n=WP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return dp(n),t}});var yp=a((uH,mp)=>{"use strict";var KP=Q(),VP=Da();mp.exports=function(e,r,t,n){try{return n?r(KP(t)[0],t[1]):r(t)}catch(i){VP(e,"throw",i)}}});var Ba=a((sH,gp)=>{"use strict";var zP=R(),YP=cr(),JP=zP("iterator"),QP=Array.prototype;gp.exports=function(e){return e!==void 0&&(YP.Array===e||QP[JP]===e)}});var xt=a((cH,qp)=>{"use strict";var XP=ft(),bp=vn(),ZP=nr(),e_=cr(),r_=R(),t_=r_("iterator");qp.exports=function(e){if(!ZP(e))return bp(e,t_)||bp(e,"@@iterator")||e_[XP(e)]}});var Pn=a((lH,xp)=>{"use strict";var n_=D(),i_=F(),a_=Q(),o_=He(),u_=xt(),s_=TypeError;xp.exports=function(e,r){var t=arguments.length<2?u_(e):r;if(i_(t))return a_(n_(t,e));throw new s_(o_(e)+" is not iterable")}});var Op=a((fH,Tp)=>{"use strict";var c_=V(),l_=D(),f_=ee(),p_=yp(),v_=Ba(),d_=vt(),h_=le(),Sp=$r(),m_=Lr(),y_=Pn(),g_=xt(),wp=Array;Tp.exports=function(r){var t=f_(r),n=d_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=c_(o,i>2?arguments[2]:void 0));var c=g_(t),s=0,l,f,p,v,d,m;if(c&&!(this===wp&&v_(c)))for(f=n?new this:[],v=y_(t,c),d=v.next;!(p=l_(d,v)).done;s++)m=u?p_(v,o,[p.value,s],!0):p.value,Sp(f,s,m);else for(l=h_(t),f=n?new this(l):wp(l);l>s;s++)m=u?o(t[s],s):t[s],Sp(f,s,m);return m_(f,s),f}});var Ua=a((pH,kp)=>{"use strict";var b_=R(),Cp=b_("iterator"),Ip=!1;try{Ep=0,Ga={next:function(){return{done:!!Ep++}},return:function(){Ip=!0}},Ga[Cp]=function(){return this},Array.from(Ga,function(){throw 2})}catch{}var Ep,Ga;kp.exports=function(e,r){try{if(!r&&!Ip)return!1}catch{return!1}var t=!1;try{var n={};n[Cp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Pp=a(()=>{"use strict";var q_=x(),x_=Op(),S_=Ua(),w_=!S_(function(e){Array.from(e)});q_({target:"Array",stat:!0,forced:w_},{from:x_})});var Rp=a((hH,_p)=>{"use strict";lr();Pp();var T_=K();_p.exports=T_.Array.from});var Np=a((mH,Ap)=>{"use strict";var O_=Rp();Ap.exports=O_});var jp=a((yH,Mp)=>{"use strict";var E_=Np();Mp.exports=E_});var Lp=a((gH,$p)=>{"use strict";var C_=jp();$p.exports=C_});var Wa=a((bH,Fp)=>{"use strict";Fp.exports=Lp()});var _n=a((qH,Dp)=>{Dp.exports=Wa()});var St=a((xH,Bp)=>{"use strict";var I_=TypeError,k_=9007199254740991;Bp.exports=function(e){if(e>k_)throw I_("Maximum allowed index exceeded");return e}});var Hp=a((SH,Wp)=>{"use strict";var Gp=Ie(),P_=vt(),__=$(),R_=R(),A_=R_("species"),Up=Array;Wp.exports=function(e){var r;return Gp(e)&&(r=e.constructor,P_(r)&&(r===Up||Gp(r.prototype))?r=void 0:__(r)&&(r=r[A_],r===null&&(r=void 0))),r===void 0?Up:r}});var Rn=a((wH,Kp)=>{"use strict";var N_=Hp();Kp.exports=function(e,r){return new(N_(e))(r===0?0:r)}});var Ha=a(()=>{"use strict";var M_=x(),j_=P(),$_=Ie(),L_=$(),F_=ee(),D_=le(),Vp=St(),zp=$r(),B_=Lr(),G_=Rn(),U_=dt(),W_=R(),H_=_r(),Yp=W_("isConcatSpreadable"),K_=H_>=51||!j_(function(){var e=[];return e[Yp]=!1,e.concat()[0]!==e}),V_=function(e){if(!L_(e))return!1;var r=e[Yp];return r!==void 0?!!r:$_(e)},z_=!K_||!U_("concat");M_({target:"Array",proto:!0,arity:1,forced:z_},{concat:function(r){var t=F_(this),n=G_(t,0),i=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],V_(l))for(s=D_(l),Vp(i+s),u=0;u<s;u++,i++)u in l&&zp(n,i,l[u]);else Vp(i+1),zp(n,i++,l);return B_(n,i),n}})});var wt=a(()=>{});var Tt=a(Jp=>{"use strict";var Y_=Ca(),J_=Sn(),Q_=J_.concat("length","prototype");Jp.f=Object.getOwnPropertyNames||function(r){return Y_(r,Q_)}});var Ka=a((kH,Zp)=>{"use strict";var X_=qe(),Z_=Ce(),Qp=Tt().f,eR=ur(),Xp=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],rR=function(e){try{return Qp(e)}catch{return eR(Xp)}};Zp.exports.f=function(r){return Xp&&X_(r)==="Window"?rR(r):Qp(Z_(r))}});var An=a(ev=>{"use strict";ev.f=Object.getOwnPropertySymbols});var Nn=a((_H,rv)=>{"use strict";var tR=re();rv.exports=function(e,r,t){return tR.f(e,r,t)}});var Br=a(tv=>{"use strict";var nR=R();tv.f=nR});var M=a((AH,iv)=>{"use strict";var nv=K(),iR=W(),aR=Br(),oR=re().f;iv.exports=function(e){var r=nv.Symbol||(nv.Symbol={});iR(r,e)||oR(r,e,{value:aR.f(e)})}});var Va=a((NH,av)=>{"use strict";var uR=D(),sR=U(),cR=R(),lR=ke();av.exports=function(){var e=sR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=cR("toPrimitive");r&&!r[n]&&lR(r,n,function(i){return uR(t,this)},{arity:1})}});var Ot=a((MH,uv)=>{"use strict";var fR=V(),pR=fn(),vR=ee(),dR=le(),ov=Rn(),za=$r(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var p=vR(s),v=pR(p),d=dR(v),m=fR(l,f),h=0,y=0,q=r?ov(s,d):t||u?ov(s,0):void 0,b,I;d>h;h++)if((c||h in v)&&(b=v[h],I=m(b,h,p),e))if(r)za(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:za(q,y++,b)}else switch(e){case 4:return!1;case 7:za(q,y++,b)}return o?-1:n||i?i:q}};uv.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Tv=a(()=>{"use strict";var Mn=x(),It=_(),no=D(),hR=A(),mR=X(),Gr=G(),Ur=ar(),yR=P(),H=W(),gR=B(),Xa=Q(),jn=Ce(),io=dn(),bR=Ke(),Za=We(),Wr=ze(),lv=wn(),qR=Tt(),fv=Ka(),xR=An(),pv=st(),vv=re(),SR=Ia(),dv=Vi(),Ya=ke(),wR=Nn(),ao=or(),TR=ht(),hv=Dr(),sv=Ar(),OR=R(),ER=Br(),CR=M(),IR=Va(),kR=_e(),mv=Ve(),$n=Ot().forEach,te=TR("hidden"),Ln="Symbol",Ct="prototype",PR=mv.set,cv=mv.getterFor(Ln),fe=Object[Ct],fr=It.Symbol,Et=fr&&fr[Ct],_R=It.RangeError,RR=It.TypeError,Ja=It.QObject,yv=pv.f,pr=vv.f,gv=fv.f,AR=dv.f,bv=hR([].push),Re=ao("symbols"),kt=ao("op-symbols"),NR=ao("wks"),eo=!Ja||!Ja[Ct]||!Ja[Ct].findChild,qv=function(e,r,t){var n=yv(fe,r);n&&delete fe[r],pr(e,r,t),n&&e!==fe&&pr(fe,r,n)},ro=Gr&&yR(function(){return Wr(pr({},"a",{get:function(){return pr(this,"a",{value:7}).a}})).a!==7})?qv:pr,Qa=function(e,r){var t=Re[e]=Wr(Et);return PR(t,{type:Ln,tag:e,description:r}),Gr||(t.description=r),t},Fn=function(r,t,n){r===fe&&Fn(kt,t,n),Xa(r);var i=io(t);return Xa(n),H(Re,i)?(n.enumerable?(H(r,te)&&r[te][i]&&(r[te][i]=!1),n=Wr(n,{enumerable:Za(0,!1)})):(H(r,te)||pr(r,te,Za(1,Wr(null))),r[te][i]=!0),ro(r,i,n)):pr(r,i,n)},oo=function(r,t){Xa(r);var n=jn(t),i=lv(n).concat(wv(n));return $n(i,function(o){(!Gr||no(to,n,o))&&Fn(r,o,n[o])}),r},MR=function(r,t){return t===void 0?Wr(r):oo(Wr(r),t)},to=function(r){var t=io(r),n=no(AR,this,t);return this===fe&&H(Re,t)&&!H(kt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,te)&&this[te][t]?n:!0},xv=function(r,t){var n=jn(r),i=io(t);if(!(n===fe&&H(Re,i)&&!H(kt,i))){var o=yv(n,i);return o&&H(Re,i)&&!(H(n,te)&&n[te][i])&&(o.enumerable=!0),o}},Sv=function(r){var t=gv(jn(r)),n=[];return $n(t,function(i){!H(Re,i)&&!H(hv,i)&&bv(n,i)}),n},wv=function(e){var r=e===fe,t=gv(r?kt:jn(e)),n=[];return $n(t,function(i){H(Re,i)&&(!r||H(fe,i))&&bv(n,Re[i])}),n};Ur||(fr=function(){if(gR(Et,this))throw new RR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:bR(arguments[0]),t=sv(r),n=function(i){var o=this===void 0?It:this;o===fe&&no(n,kt,i),H(o,te)&&H(o[te],t)&&(o[te][t]=!1);var u=Za(1,i);try{ro(o,t,u)}catch(c){if(!(c instanceof _R))throw c;qv(o,t,u)}};return Gr&&eo&&ro(fe,t,{configurable:!0,set:n}),Qa(t,r)},Et=fr[Ct],Ya(Et,"toString",function(){return cv(this).tag}),Ya(fr,"withoutSetter",function(e){return Qa(sv(e),e)}),dv.f=to,vv.f=Fn,SR.f=oo,pv.f=xv,qR.f=fv.f=Sv,xR.f=wv,ER.f=function(e){return Qa(OR(e),e)},Gr&&(wR(Et,"description",{configurable:!0,get:function(){return cv(this).description}}),mR||Ya(fe,"propertyIsEnumerable",to,{unsafe:!0})));Mn({global:!0,constructor:!0,wrap:!0,forced:!Ur,sham:!Ur},{Symbol:fr});$n(lv(NR),function(e){CR(e)});Mn({target:Ln,stat:!0,forced:!Ur},{useSetter:function(){eo=!0},useSimple:function(){eo=!1}});Mn({target:"Object",stat:!0,forced:!Ur,sham:!Gr},{create:MR,defineProperty:Fn,defineProperties:oo,getOwnPropertyDescriptor:xv});Mn({target:"Object",stat:!0,forced:!Ur},{getOwnPropertyNames:Sv});IR();kR(fr,Ln);hv[te]=!0});var uo=a((LH,Ov)=>{"use strict";var jR=ar();Ov.exports=jR&&!!Symbol.for&&!!Symbol.keyFor});var Cv=a(()=>{"use strict";var $R=x(),LR=U(),FR=W(),DR=Ke(),Ev=or(),BR=uo(),so=Ev("string-to-symbol-registry"),GR=Ev("symbol-to-string-registry");$R({target:"Symbol",stat:!0,forced:!BR},{for:function(e){var r=DR(e);if(FR(so,r))return so[r];var t=LR("Symbol")(r);return so[r]=t,GR[t]=r,t}})});var kv=a(()=>{"use strict";var UR=x(),WR=W(),HR=Rr(),KR=He(),VR=or(),zR=uo(),Iv=VR("symbol-to-string-registry");UR({target:"Symbol",stat:!0,forced:!zR},{keyFor:function(r){if(!HR(r))throw new TypeError(KR(r)+" is not a symbol");if(WR(Iv,r))return Iv[r]}})});var _v=a((UH,Pv)=>{"use strict";var YR=$(),JR=Ve().get;Pv.exports=function(r){if(!YR(r))return!1;var t=JR(r);return!!t&&t.type==="RawJSON"}});var jv=a((WH,Mv)=>{"use strict";var co=A(),QR=W(),Dn=SyntaxError,XR=parseInt,ZR=String.fromCharCode,e1=co("".charAt),Rv=co("".slice),Av=co(/./.exec),Nv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},r1=/^[\da-f]{4}$/i,t1=/^[\u0000-\u001F]$/;Mv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=e1(e,r);if(i==="\\"){var o=Rv(e,r,r+2);if(QR(Nv,o))n+=Nv[o],r+=2;else if(o==="\\u"){r+=2;var u=Rv(e,r,r+4);if(!Av(r1,u))throw new Dn("Bad Unicode escape at: "+r);n+=ZR(XR(u,16)),r+=4}else throw new Dn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Av(t1,i))throw new Dn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Dn("Unterminated string at: "+r);return{value:n,end:r}}});var Lv=a((HH,$v)=>{"use strict";var n1=P();$v.exports=!n1(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Xv=a(()=>{"use strict";var i1=x(),Kv=U(),a1=kr(),Vv=D(),vr=A(),zv=P(),Fv=Ie(),Gn=N(),o1=_v(),Dv=Rr(),Bv=qe(),u1=Ke(),s1=ur(),c1=jv(),l1=Ar(),f1=ar(),lo=Lv(),Yv=String,Je=Kv("JSON","stringify"),Bn=vr(/./.exec),po=vr("".charAt),p1=vr("".charCodeAt),v1=vr("".replace),fo=vr("".slice),vo=vr([].push),d1=vr(1.1.toString),h1=/[\uD800-\uDFFF]/g,Gv=/^[\uD800-\uDBFF]$/,Uv=/^[\uDC00-\uDFFF]$/,ho=l1(),Wv=ho.length,Jv=!f1||zv(function(){var e=Kv("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Hv=zv(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),m1=Jv?function(e,r){var t=s1(arguments),n=Qv(r);if(!(!Gn(n)&&(e===void 0||Dv(e))))return t[1]=function(i,o){if(Gn(n)&&(o=Vv(n,this,Yv(i),o)),!Dv(o))return o},a1(Je,null,t)}:Je,y1=function(e,r,t){var n=po(t,r-1),i=po(t,r+1);return Bn(Gv,e)&&!Bn(Uv,i)||Bn(Uv,e)&&!Bn(Gv,n)?"\\u"+d1(p1(e,0),16):e},Qv=function(e){if(Gn(e))return e;if(Fv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?vo(t,i):(typeof i=="number"||Bv(i)==="Number"||Bv(i)==="String")&&vo(t,u1(i))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(Fv(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};Je&&i1({target:"JSON",stat:!0,arity:3,forced:Jv||Hv||!lo},{stringify:function(r,t,n){var i=Qv(t),o=[],u=m1(r,function(d,m){var h=Gn(i)?Vv(i,this,Yv(d),m):m;return!lo&&o1(h)?ho+(vo(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(Hv&&(u=v1(u,h1,y1)),lo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=po(u,l);if(f==='"'){var p=c1(u,++l).end-1,v=fo(u,l,p);c+=fo(v,0,Wv)===ho?o[fo(v,Wv)]:'"'+v+'"',l=p}else c+=f}return c}})});var ed=a(()=>{"use strict";var g1=x(),b1=ar(),q1=P(),Zv=An(),x1=ee(),S1=!b1||q1(function(){Zv.f(1)});g1({target:"Object",stat:!0,forced:S1},{getOwnPropertySymbols:function(r){var t=Zv.f;return t?t(x1(r)):[]}})});var rd=a(()=>{"use strict";Tv();Cv();kv();Xv();ed()});var mo=a(()=>{"use strict";var w1=M();w1("asyncDispose")});var yo=a(()=>{"use strict";var T1=M();T1("asyncIterator")});var td=a(()=>{});var go=a(()=>{"use strict";var O1=M();O1("dispose")});var nd=a(()=>{"use strict";var E1=M();E1("hasInstance")});var id=a(()=>{"use strict";var C1=M();C1("isConcatSpreadable")});var bo=a(()=>{"use strict";var I1=M();I1("iterator")});var ad=a(()=>{"use strict";var k1=M();k1("match")});var od=a(()=>{"use strict";var P1=M();P1("matchAll")});var ud=a(()=>{"use strict";var _1=M();_1("replace")});var sd=a(()=>{"use strict";var R1=M();R1("search")});var cd=a(()=>{"use strict";var A1=M();A1("species")});var ld=a(()=>{"use strict";var N1=M();N1("split")});var qo=a(()=>{"use strict";var M1=M(),j1=Va();M1("toPrimitive");j1()});var fd=a(()=>{"use strict";var $1=U(),L1=M(),F1=_e();L1("toStringTag");F1($1("Symbol"),"Symbol")});var pd=a(()=>{"use strict";var D1=M();D1("unscopables")});var vd=a(()=>{"use strict";var B1=_(),G1=_e();G1(B1.JSON,"JSON",!0)});var dd=a(()=>{});var hd=a(()=>{});var yd=a((j6,md)=>{"use strict";Ha();wt();rd();mo();yo();td();go();nd();id();bo();ad();od();ud();sd();cd();ld();qo();fd();pd();vd();dd();hd();var U1=K();md.exports=U1.Symbol});var xo=a(($6,gd)=>{"use strict";gd.exports=function(){}});var dr=a((L6,wd)=>{"use strict";var W1=Ce(),So=xo(),bd=cr(),xd=Ve(),H1=re().f,K1=In(),Un=kn(),V1=X(),z1=G(),Sd="Array Iterator",Y1=xd.set,J1=xd.getterFor(Sd);wd.exports=K1(Array,"Array",function(e,r){Y1(this,{type:Sd,target:W1(e),index:0,kind:r})},function(){var e=J1(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Un(void 0,!0);switch(e.kind){case"keys":return Un(t,!1);case"values":return Un(r[t],!1)}return Un([t,r[t]],!1)},"values");var qd=bd.Arguments=bd.Array;So("keys");So("values");So("entries");if(!V1&&z1&&qd.name!=="values")try{H1(qd,"name",{value:"values"})}catch{}});var Od=a((F6,Td)=>{"use strict";Td.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";dr();var Q1=Od(),X1=_(),Z1=_e(),Ed=cr();for(Wn in Q1)Z1(X1[Wn],Wn),Ed[Wn]=Ed.Array;var Wn});var Id=a((G6,Cd)=>{"use strict";var eA=yd();hr();Cd.exports=eA});var _d=a(()=>{"use strict";var rA=R(),tA=re().f,kd=rA("metadata"),Pd=Function.prototype;Pd[kd]===void 0&&tA(Pd,kd,{value:null})});var Rd=a(()=>{"use strict";mo()});var Ad=a(()=>{"use strict";go()});var Nd=a(()=>{"use strict";var nA=M();nA("metadata")});var jd=a((Q6,Md)=>{"use strict";var iA=Id();_d();Rd();Ad();Nd();Md.exports=iA});var To=a((X6,$d)=>{"use strict";var aA=U(),oA=A(),wo=aA("Symbol"),uA=wo.keyFor,sA=oA(wo.prototype.valueOf);$d.exports=wo.isRegisteredSymbol||function(r){try{return uA(sA(r))!==void 0}catch{return!1}}});var Ld=a(()=>{"use strict";var cA=x(),lA=To();cA({target:"Symbol",stat:!0},{isRegisteredSymbol:lA})});var Co=a((rK,Wd)=>{"use strict";var fA=or(),Gd=U(),pA=A(),vA=Rr(),dA=R(),Kn=Gd("Symbol"),Fd=Kn.isWellKnownSymbol,Ud=Gd("Object","getOwnPropertyNames"),hA=pA(Kn.prototype.valueOf),Dd=fA("wks");for(Hn=0,Oo=Ud(Kn),Bd=Oo.length;Hn<Bd;Hn++)try{Eo=Oo[Hn],vA(Kn[Eo])&&dA(Eo)}catch{}var Eo,Hn,Oo,Bd;Wd.exports=function(r){if(Fd&&Fd(r))return!0;try{for(var t=hA(r),n=0,i=Ud(Dd),o=i.length;n<o;n++)if(Dd[i[n]]==t)return!0}catch{}return!1}});var Hd=a(()=>{"use strict";var mA=x(),yA=Co();mA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:yA})});var Kd=a(()=>{"use strict";var gA=M();gA("customMatcher")});var Vd=a(()=>{"use strict";var bA=M();bA("observable")});var zd=a(()=>{"use strict";var qA=x(),xA=To();qA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:xA})});var Yd=a(()=>{"use strict";var SA=x(),wA=Co();SA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:wA})});var Jd=a(()=>{"use strict";var TA=M();TA("matcher")});var Qd=a(()=>{"use strict";var OA=M();OA("metadataKey")});var Xd=a(()=>{"use strict";var EA=M();EA("patternMatch")});var Zd=a(()=>{"use strict";var CA=M();CA("replaceAll")});var rh=a((qK,eh)=>{"use strict";var IA=jd();Ld();Hd();Kd();Vd();zd();Yd();Jd();Qd();Xd();Zd();eh.exports=IA});var Se=a((xK,th)=>{"use strict";th.exports=rh()});var Vn=a((SK,nh)=>{nh.exports=Se()});var ah=a((wK,ih)=>{"use strict";dr();lr();var kA=xt();ih.exports=kA});var uh=a((TK,oh)=>{"use strict";var PA=ah();hr();oh.exports=PA});var ch=a((OK,sh)=>{"use strict";var _A=uh();sh.exports=_A});var fh=a((EK,lh)=>{"use strict";var RA=ch();lh.exports=RA});var Io=a((CK,ph)=>{"use strict";ph.exports=fh()});var zn=a((IK,vh)=>{vh.exports=Io()});var hh=a((kK,dh)=>{"use strict";dr();lr();var AA=Pn();dh.exports=AA});var yh=a((PK,mh)=>{"use strict";var NA=hh();hr();mh.exports=NA});var bh=a((_K,gh)=>{"use strict";var MA=yh();gh.exports=MA});var xh=a((RK,qh)=>{"use strict";var jA=bh();qh.exports=jA});var wh=a((AK,Sh)=>{"use strict";Sh.exports=xh()});var Yn=a((NK,Th)=>{Th.exports=wh()});var Eh=a((MK,Oh)=>{"use strict";var $A=U(),LA=A(),FA=Tt(),DA=An(),BA=Q(),GA=LA([].concat);Oh.exports=$A("Reflect","ownKeys")||function(r){var t=FA.f(BA(r)),n=DA.f;return n?GA(t,n(r)):t}});var kh=a((jK,Ih)=>{"use strict";var Ch=W(),UA=Eh(),WA=st(),HA=re();Ih.exports=function(e,r,t){for(var n=UA(r),i=HA.f,o=WA.f,u=0;u<n.length;u++){var c=n[u];!Ch(e,c)&&!(t&&Ch(t,c))&&i(e,c,o(r,c))}}});var _h=a(($K,Ph)=>{"use strict";var KA=$(),VA=xe();Ph.exports=function(e,r){KA(r)&&"cause"in r&&VA(e,"cause",r.cause)}});var Mh=a((LK,Nh)=>{"use strict";var zA=A(),Rh=Error,YA=zA("".replace),JA=function(e){return String(new Rh(e).stack)}("zxcasd"),Ah=/\n\s*at [^:]*:[^\n]*/,QA=Ah.test(JA);Nh.exports=function(e,r){if(QA&&typeof e=="string"&&!Rh.prepareStackTrace)for(;r--;)e=YA(e,Ah,"");return e}});var $h=a((FK,jh)=>{"use strict";var XA=P(),ZA=We();jh.exports=!XA(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",ZA(1,7)),e.stack!==7):!0})});var Dh=a((DK,Fh)=>{"use strict";var eN=xe(),rN=Mh(),tN=$h(),Lh=Error.captureStackTrace;Fh.exports=function(e,r,t,n){tN&&(Lh?Lh(e,r):eN(e,"stack",rN(t,n)))}});var pe=a((BK,Wh)=>{"use strict";var nN=V(),iN=D(),aN=Q(),oN=He(),uN=Ba(),sN=le(),Bh=B(),cN=Pn(),lN=xt(),Gh=Da(),fN=TypeError,Jn=function(e,r){this.stopped=e,this.result=r},Uh=Jn.prototype;Wh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=nN(r,n),l,f,p,v,d,m,h,y=function(b){return l&&Gh(l,"normal"),new Jn(!0,b)},q=function(b){return i?(aN(b),c?s(b[0],b[1],y):s(b[0],b[1])):c?s(b,y):s(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=lN(e),!f)throw new fN(oN(e)+" is not iterable");if(uN(f)){for(p=0,v=sN(e);v>p;p++)if(d=q(e[p]),d&&Bh(Uh,d))return d;return new Jn(!1)}l=cN(e,f)}for(m=o?e.next:l.next;!(h=iN(m,l)).done;){try{d=q(h.value)}catch(b){Gh(l,"throw",b)}if(typeof d=="object"&&d&&Bh(Uh,d))return d}return new Jn(!1)}});var Kh=a((GK,Hh)=>{"use strict";var pN=Ke();Hh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:pN(e)}});var zh=a(()=>{"use strict";var vN=x(),dN=B(),hN=yt(),Qn=gt(),mN=kh(),Vh=ze(),ko=xe(),Po=We(),yN=_h(),gN=Dh(),bN=pe(),qN=Kh(),xN=R(),SN=xN("toStringTag"),Xn=Error,wN=[].push,Hr=function(r,t){var n=dN(_o,this),i;Qn?i=Qn(new Xn,n?hN(this):_o):(i=n?this:Vh(_o),ko(i,SN,"Error")),t!==void 0&&ko(i,"message",qN(t)),gN(i,Hr,i.stack,1),arguments.length>2&&yN(i,arguments[2]);var o=[];return bN(r,wN,{that:o}),ko(i,"errors",o),i};Qn?Qn(Hr,Xn):mN(Hr,Xn,{name:!0});var _o=Hr.prototype=Vh(Xn.prototype,{constructor:Po(1,Hr),message:Po(1,""),name:Po(1,"AggregateError")});vN({global:!0,constructor:!0,arity:2},{AggregateError:Hr})});var Ro=a(()=>{"use strict";zh()});var Ao=a((VK,Yh)=>{"use strict";var Pt=_(),TN=Pr(),ON=qe(),Zn=function(e){return TN.slice(0,e.length)===e};Yh.exports=function(){return Zn("Bun/")?"BUN":Zn("Cloudflare-Workers")?"CLOUDFLARE":Zn("Deno/")?"DENO":Zn("Node.js/")?"NODE":Pt.Bun&&typeof Bun.version=="string"?"BUN":Pt.Deno&&typeof Deno.version=="object"?"DENO":ON(Pt.process)==="process"?"NODE":Pt.window&&Pt.document?"BROWSER":"REST"}()});var _t=a((zK,Jh)=>{"use strict";var EN=Ao();Jh.exports=EN==="NODE"});var No=a((YK,Xh)=>{"use strict";var CN=U(),IN=Nn(),kN=R(),PN=G(),Qh=kN("species");Xh.exports=function(e){var r=CN(e);PN&&r&&!r[Qh]&&IN(r,Qh,{configurable:!0,get:function(){return this}})}});var ei=a((JK,Zh)=>{"use strict";var _N=B(),RN=TypeError;Zh.exports=function(e,r){if(_N(r,e))return e;throw new RN("Incorrect invocation")}});var Mo=a((QK,em)=>{"use strict";var AN=vt(),NN=He(),MN=TypeError;em.exports=function(e){if(AN(e))return e;throw new MN(NN(e)+" is not a constructor")}});var jo=a((XK,tm)=>{"use strict";var rm=Q(),jN=Mo(),$N=nr(),LN=R(),FN=LN("species");tm.exports=function(e,r){var t=rm(e).constructor,n;return t===void 0||$N(n=rm(t)[FN])?r:jN(n)}});var im=a((ZK,nm)=>{"use strict";var DN=TypeError;nm.exports=function(e,r){if(e<r)throw new DN("Not enough arguments");return e}});var $o=a((e8,am)=>{"use strict";var BN=Pr();am.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(BN)});var Ko=a((r8,dm)=>{"use strict";var ue=_(),GN=kr(),UN=V(),om=N(),WN=W(),vm=P(),um=ka(),HN=ur(),sm=hn(),KN=im(),VN=$o(),zN=_t(),Uo=ue.setImmediate,Wo=ue.clearImmediate,YN=ue.process,Lo=ue.Dispatch,JN=ue.Function,cm=ue.MessageChannel,QN=ue.String,Fo=0,Rt={},lm="onreadystatechange",At,mr,Do,Bo;vm(function(){At=ue.location});var Ho=function(e){if(WN(Rt,e)){var r=Rt[e];delete Rt[e],r()}},Go=function(e){return function(){Ho(e)}},fm=function(e){Ho(e.data)},pm=function(e){ue.postMessage(QN(e),At.protocol+"//"+At.host)};(!Uo||!Wo)&&(Uo=function(r){KN(arguments.length,1);var t=om(r)?r:JN(r),n=HN(arguments,1);return Rt[++Fo]=function(){GN(t,void 0,n)},mr(Fo),Fo},Wo=function(r){delete Rt[r]},zN?mr=function(e){YN.nextTick(Go(e))}:Lo&&Lo.now?mr=function(e){Lo.now(Go(e))}:cm&&!VN?(Do=new cm,Bo=Do.port2,Do.port1.onmessage=fm,mr=UN(Bo.postMessage,Bo)):ue.addEventListener&&om(ue.postMessage)&&!ue.importScripts&&At&&At.protocol!=="file:"&&!vm(pm)?(mr=pm,ue.addEventListener("message",fm,!1)):lm in sm("script")?mr=function(e){um.appendChild(sm("script"))[lm]=function(){um.removeChild(this),Ho(e)}}:mr=function(e){setTimeout(Go(e),0)});dm.exports={set:Uo,clear:Wo}});var ym=a((t8,mm)=>{"use strict";var hm=_(),XN=G(),ZN=Object.getOwnPropertyDescriptor;mm.exports=function(e){if(!XN)return hm[e];var r=ZN(hm,e);return r&&r.value}});var Vo=a((n8,bm)=>{"use strict";var gm=function(){this.head=null,this.tail=null};gm.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};bm.exports=gm});var xm=a((i8,qm)=>{"use strict";var eM=Pr();qm.exports=/ipad|iphone|ipod/i.test(eM)&&typeof Pebble<"u"});var wm=a((a8,Sm)=>{"use strict";var rM=Pr();Sm.exports=/web0s(?!.*chrome)/i.test(rM)});var Pm=a((o8,km)=>{"use strict";var Vr=_(),tM=ym(),Tm=V(),zo=Ko().set,nM=Vo(),iM=$o(),aM=xm(),oM=wm(),Yo=_t(),Om=Vr.MutationObserver||Vr.WebKitMutationObserver,Em=Vr.document,Cm=Vr.process,ri=Vr.Promise,Xo=tM("queueMicrotask"),Kr,Jo,Qo,ti,Im;Xo||(Nt=new nM,Mt=function(){var e,r;for(Yo&&(e=Cm.domain)&&e.exit();r=Nt.get();)try{r()}catch(t){throw Nt.head&&Kr(),t}e&&e.enter()},!iM&&!Yo&&!oM&&Om&&Em?(Jo=!0,Qo=Em.createTextNode(""),new Om(Mt).observe(Qo,{characterData:!0}),Kr=function(){Qo.data=Jo=!Jo}):!aM&&ri&&ri.resolve?(ti=ri.resolve(void 0),ti.constructor=ri,Im=Tm(ti.then,ti),Kr=function(){Im(Mt)}):Yo?Kr=function(){Cm.nextTick(Mt)}:(zo=Tm(zo,Vr),Kr=function(){zo(Mt)}),Xo=function(e){Nt.head||Kr(),Nt.add(e)});var Nt,Mt;km.exports=Xo});var Rm=a((u8,_m)=>{"use strict";_m.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var yr=a((s8,Am)=>{"use strict";Am.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var gr=a((c8,Nm)=>{"use strict";var uM=_();Nm.exports=uM.Promise});var zr=a((l8,Lm)=>{"use strict";var sM=_(),jt=gr(),cM=N(),lM=aa(),fM=pa(),pM=R(),Mm=Ao(),vM=X(),Zo=_r(),jm=jt&&jt.prototype,dM=pM("species"),eu=!1,$m=cM(sM.PromiseRejectionEvent),hM=lM("Promise",function(){var e=fM(jt),r=e!==String(jt);if(!r&&Zo===66||vM&&!(jm.catch&&jm.finally))return!0;if(!Zo||Zo<51||!/native code/.test(e)){var t=new jt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[dM]=n,eu=t.then(function(){})instanceof n,!eu)return!0}return!r&&(Mm==="BROWSER"||Mm==="DENO")&&!$m});Lm.exports={CONSTRUCTOR:hM,REJECTION_EVENT:$m,SUBCLASSING:eu}});var we=a((f8,Dm)=>{"use strict";var Fm=F(),mM=TypeError,yM=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new mM("Bad Promise constructor");r=n,t=i}),this.resolve=Fm(r),this.reject=Fm(t)};Dm.exports.f=function(e){return new yM(e)}});var oy=a(()=>{"use strict";var gM=x(),bM=X(),oi=_t(),Qe=_(),qM=K(),Xr=D(),Bm=ke(),Gm=gt(),xM=_e(),SM=No(),wM=F(),ai=N(),TM=$(),OM=ei(),EM=jo(),Vm=Ko().set,au=Pm(),CM=Rm(),IM=yr(),kM=Vo(),zm=Ve(),ui=gr(),ou=zr(),Ym=we(),si="Promise",Jm=ou.CONSTRUCTOR,PM=ou.REJECTION_EVENT,_M=ou.SUBCLASSING,ru=zm.getterFor(si),RM=zm.set,Yr=ui&&ui.prototype,br=ui,ni=Yr,Qm=Qe.TypeError,tu=Qe.document,uu=Qe.process,nu=Ym.f,AM=nu,NM=!!(tu&&tu.createEvent&&Qe.dispatchEvent),Xm="unhandledrejection",MM="rejectionhandled",Um=0,Zm=1,jM=2,su=1,ey=2,ii,Wm,ry,Hm,ty=function(e){var r;return TM(e)&&ai(r=e.then)?r:!1},ny=function(e,r){var t=r.value,n=r.state===Zm,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{i?(n||(r.rejection===ey&&LM(r),r.rejection=su),i===!0?s=t:(c&&c.enter(),s=i(t),c&&(c.exit(),f=!0)),s===e.promise?u(new Qm("Promise-chain cycle")):(l=ty(s))?Xr(l,s,o,u):o(s)):u(t)}catch(p){c&&!f&&c.exit(),u(p)}},iy=function(e,r){e.notified||(e.notified=!0,au(function(){for(var t=e.reactions,n;n=t.get();)ny(n,e);e.notified=!1,r&&!e.rejection&&$M(e)}))},ay=function(e,r,t){var n,i;NM?(n=tu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!PM&&(i=Qe["on"+e])?i(n):e===Xm&&CM("Unhandled promise rejection",t)},$M=function(e){Xr(Vm,Qe,function(){var r=e.facade,t=e.value,n=Km(e),i;if(n&&(i=IM(function(){oi?uu.emit("unhandledRejection",t,r):ay(Xm,r,t)}),e.rejection=oi||Km(e)?ey:su,i.error))throw i.value})},Km=function(e){return e.rejection!==su&&!e.parent},LM=function(e){Xr(Vm,Qe,function(){var r=e.facade;oi?uu.emit("rejectionHandled",r):ay(MM,r,e.value)})},Jr=function(e,r,t){return function(n){e(r,n,t)}},Qr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=jM,iy(e,!0))},iu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Qm("Promise can't be resolved itself");var n=ty(r);n?au(function(){var i={done:!1};try{Xr(n,r,Jr(iu,i,e),Jr(Qr,i,e))}catch(o){Qr(i,o,e)}}):(e.value=r,e.state=Zm,iy(e,!1))}catch(i){Qr({done:!1},i,e)}}};if(Jm&&(br=function(r){OM(this,ni),wM(r),Xr(ii,this);var t=ru(this);try{r(Jr(iu,t),Jr(Qr,t))}catch(n){Qr(t,n)}},ni=br.prototype,ii=function(r){RM(this,{type:si,done:!1,notified:!1,parent:!1,reactions:new kM,rejection:!1,state:Um,value:null})},ii.prototype=Bm(ni,"then",function(r,t){var n=ru(this),i=nu(EM(this,br));return n.parent=!0,i.ok=ai(r)?r:!0,i.fail=ai(t)&&t,i.domain=oi?uu.domain:void 0,n.state===Um?n.reactions.add(i):au(function(){ny(i,n)}),i.promise}),Wm=function(){var e=new ii,r=ru(e);this.promise=e,this.resolve=Jr(iu,r),this.reject=Jr(Qr,r)},Ym.f=nu=function(e){return e===br||e===ry?new Wm(e):AM(e)},!bM&&ai(ui)&&Yr!==Object.prototype)){Hm=Yr.then,_M||Bm(Yr,"then",function(r,t){var n=this;return new br(function(i,o){Xr(Hm,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Yr.constructor}catch{}Gm&&Gm(Yr,ni)}gM({global:!0,constructor:!0,wrap:!0,forced:Jm},{Promise:br});ry=qM.Promise;xM(br,si,!1,!0);SM(si)});var $t=a((d8,uy)=>{"use strict";var FM=gr(),DM=Ua(),BM=zr().CONSTRUCTOR;uy.exports=BM||!DM(function(e){FM.all(e).then(void 0,function(){})})});var sy=a(()=>{"use strict";var GM=x(),UM=D(),WM=F(),HM=we(),KM=yr(),VM=pe(),zM=$t();GM({target:"Promise",stat:!0,forced:zM},{all:function(r){var t=this,n=HM.f(t),i=n.resolve,o=n.reject,u=KM(function(){var c=WM(t.resolve),s=[],l=0,f=1;VM(r,function(p){var v=l++,d=!1;f++,UM(c,t,p).then(function(m){d||(d=!0,s[v]=m,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var ly=a(()=>{"use strict";var YM=x(),JM=X(),QM=zr().CONSTRUCTOR,lu=gr(),XM=U(),ZM=N(),e2=ke(),cy=lu&&lu.prototype;YM({target:"Promise",proto:!0,forced:QM,real:!0},{catch:function(e){return this.then(void 0,e)}});!JM&&ZM(lu)&&(cu=XM("Promise").prototype.catch,cy.catch!==cu&&e2(cy,"catch",cu,{unsafe:!0}));var cu});var fy=a(()=>{"use strict";var r2=x(),t2=D(),n2=F(),i2=we(),a2=yr(),o2=pe(),u2=$t();r2({target:"Promise",stat:!0,forced:u2},{race:function(r){var t=this,n=i2.f(t),i=n.reject,o=a2(function(){var u=n2(t.resolve);o2(r,function(c){t2(u,t,c).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var py=a(()=>{"use strict";var s2=x(),c2=we(),l2=zr().CONSTRUCTOR;s2({target:"Promise",stat:!0,forced:l2},{reject:function(r){var t=c2.f(this),n=t.reject;return n(r),t.promise}})});var fu=a((w8,vy)=>{"use strict";var f2=Q(),p2=$(),v2=we();vy.exports=function(e,r){if(f2(e),p2(r)&&r.constructor===e)return r;var t=v2.f(e),n=t.resolve;return n(r),t.promise}});var my=a(()=>{"use strict";var d2=x(),h2=U(),dy=X(),m2=gr(),hy=zr().CONSTRUCTOR,y2=fu(),g2=h2("Promise"),b2=dy&&!hy;d2({target:"Promise",stat:!0,forced:dy||hy},{resolve:function(r){return y2(b2&&this===g2?m2:this,r)}})});var yy=a(()=>{"use strict";oy();sy();ly();fy();py();my()});var pu=a(()=>{"use strict";var q2=x(),x2=D(),S2=F(),w2=we(),T2=yr(),O2=pe(),E2=$t();q2({target:"Promise",stat:!0,forced:E2},{allSettled:function(r){var t=this,n=w2.f(t),i=n.resolve,o=n.reject,u=T2(function(){var c=S2(t.resolve),s=[],l=0,f=1;O2(r,function(p){var v=l++,d=!1;f++,x2(c,t,p).then(function(m){d||(d=!0,s[v]={status:"fulfilled",value:m},--f||i(s))},function(m){d||(d=!0,s[v]={status:"rejected",reason:m},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var vu=a(()=>{"use strict";var C2=x(),I2=D(),k2=F(),P2=U(),_2=we(),R2=yr(),A2=pe(),N2=$t(),gy="No one promise resolved";C2({target:"Promise",stat:!0,forced:N2},{any:function(r){var t=this,n=P2("AggregateError"),i=_2.f(t),o=i.resolve,u=i.reject,c=R2(function(){var s=k2(t.resolve),l=[],f=0,p=1,v=!1;A2(r,function(d){var m=f++,h=!1;p++,I2(s,t,d).then(function(y){h||v||(v=!0,o(y))},function(y){h||v||(h=!0,l[m]=y,--p||u(new n(l,gy)))})}),--p||u(new n(l,gy))});return c.error&&u(c.value),i.promise}})});var hu=a(()=>{"use strict";var M2=x(),j2=_(),$2=kr(),L2=ur(),F2=we(),D2=F(),qy=yr(),du=j2.Promise,by=!1,B2=!du||!du.try||qy(function(){du.try(function(e){by=e===8},8)}).error||!by;M2({target:"Promise",stat:!0,forced:B2},{try:function(e){var r=arguments.length>1?L2(arguments,1):[],t=F2.f(this),n=qy(function(){return $2(D2(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var mu=a(()=>{"use strict";var G2=x(),U2=we();G2({target:"Promise",stat:!0},{withResolvers:function(){var r=U2.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ty=a(()=>{"use strict";var W2=x(),H2=X(),ci=gr(),K2=P(),Sy=U(),wy=N(),V2=jo(),xy=fu(),z2=ke(),gu=ci&&ci.prototype,Y2=!!ci&&K2(function(){gu.finally.call({then:function(){}},function(){})});W2({target:"Promise",proto:!0,real:!0,forced:Y2},{finally:function(e){var r=V2(this,Sy("Promise")),t=wy(e);return this.then(t?function(n){return xy(r,e()).then(function(){return n})}:e,t?function(n){return xy(r,e()).then(function(){throw n})}:e)}});!H2&&wy(ci)&&(yu=Sy("Promise").prototype.finally,gu.finally!==yu&&z2(gu,"finally",yu,{unsafe:!0}));var yu});var Ey=a((L8,Oy)=>{"use strict";Ro();dr();wt();yy();pu();vu();hu();mu();Ty();lr();var J2=K();Oy.exports=J2.Promise});var Iy=a((F8,Cy)=>{"use strict";var Q2=Ey();hr();Cy.exports=Q2});var ky=a(()=>{"use strict";hu()});var Py=a(()=>{"use strict";mu()});var Ry=a((W8,_y)=>{"use strict";var X2=Iy();ky();Py();_y.exports=X2});var Ay=a(()=>{"use strict";Ro()});var Ny=a(()=>{"use strict";pu()});var My=a(()=>{"use strict";vu()});var $y=a((Q8,jy)=>{"use strict";var Z2=Ry();Ay();Ny();My();jy.exports=Z2});var Zr=a((X8,Ly)=>{"use strict";Ly.exports=$y()});var By=a((n5,Dy)=>{"use strict";yo();var ej=Br();Dy.exports=ej.f("asyncIterator")});var Uy=a((i5,Gy)=>{"use strict";var rj=By();Gy.exports=rj});var Hy=a((a5,Wy)=>{"use strict";var tj=Uy();Wy.exports=tj});var Vy=a((o5,Ky)=>{"use strict";var nj=Hy();Ky.exports=nj});var li=a((u5,zy)=>{"use strict";zy.exports=Vy()});var Xy=a(()=>{"use strict";var ij=x(),aj=P(),oj=ee(),Qy=yt(),uj=Aa(),sj=aj(function(){Qy(1)});ij({target:"Object",stat:!0,forced:sj,sham:!uj},{getPrototypeOf:function(r){return Qy(oj(r))}})});var eg=a((p5,Zy)=>{"use strict";Xy();var cj=K();Zy.exports=cj.Object.getPrototypeOf});var tg=a((v5,rg)=>{"use strict";var lj=eg();rg.exports=lj});var ig=a((d5,ng)=>{"use strict";var fj=tg();ng.exports=fj});var og=a((h5,ag)=>{"use strict";var pj=ig();ag.exports=pj});var fi=a((m5,ug)=>{"use strict";ug.exports=og()});var cg=a(()=>{"use strict";var vj=x(),dj=A(),hj=Ie(),mj=dj([].reverse),sg=[1,2];vj({target:"Array",proto:!0,forced:String(sg)===String(sg.reverse())},{reverse:function(){return hj(this)&&(this.length=this.length),mj(this)}})});var fg=a((b5,lg)=>{"use strict";cg();var yj=oe();lg.exports=yj("Array","reverse")});var vg=a((q5,pg)=>{"use strict";var gj=B(),bj=fg(),xu=Array.prototype;pg.exports=function(e){var r=e.reverse;return e===xu||gj(xu,e)&&r===xu.reverse?bj:r}});var hg=a((x5,dg)=>{"use strict";var qj=vg();dg.exports=qj});var yg=a((S5,mg)=>{"use strict";var xj=hg();mg.exports=xj});var bg=a((w5,gg)=>{"use strict";var Sj=yg();gg.exports=Sj});var xg=a((T5,qg)=>{"use strict";qg.exports=bg()});var Su=a((O5,Dt)=>{function wj(e,r){this.v=e,this.k=r}Dt.exports=wj,Dt.exports.__esModule=!0,Dt.exports.default=Dt.exports});var Sg=a(()=>{"use strict";var Tj=x(),Oj=G(),Ej=ze();Tj({target:"Object",stat:!0,sham:!Oj},{create:Ej})});var Tg=a((I5,wg)=>{"use strict";Sg();var Cj=K(),Ij=Cj.Object;wg.exports=function(r,t){return Ij.create(r,t)}});var Eg=a((k5,Og)=>{"use strict";var kj=Tg();Og.exports=kj});var Ig=a((P5,Cg)=>{"use strict";var Pj=Eg();Cg.exports=Pj});var Pg=a((_5,kg)=>{"use strict";var _j=Ig();kg.exports=_j});var pi=a((R5,_g)=>{"use strict";_g.exports=Pg()});var Tu=a((A5,Mg)=>{"use strict";var Ag=A(),Rj=F(),Aj=$(),Nj=W(),Rg=ur(),Mj=Ir(),Ng=Function,jj=Ag([].concat),$j=Ag([].join),wu={},Lj=function(e,r,t){if(!Nj(wu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";wu[r]=Ng("C,a","return new C("+$j(n,",")+")")}return wu[r](e,t)};Mg.exports=Mj?Ng.bind:function(r){var t=Rj(this),n=t.prototype,i=Rg(arguments,1),o=function(){var c=jj(i,Rg(arguments));return this instanceof o?Lj(t,c.length,c):t.apply(r,c)};return Aj(n)&&(o.prototype=n),o}});var $g=a(()=>{"use strict";var Fj=x(),jg=Tu();Fj({target:"Function",proto:!0,forced:Function.bind!==jg},{bind:jg})});var Fg=a((j5,Lg)=>{"use strict";$g();var Dj=oe();Lg.exports=Dj("Function","bind")});var Bg=a(($5,Dg)=>{"use strict";var Bj=B(),Gj=Fg(),Ou=Function.prototype;Dg.exports=function(e){var r=e.bind;return e===Ou||Bj(Ou,e)&&r===Ou.bind?Gj:r}});var Ug=a((L5,Gg)=>{"use strict";var Uj=Bg();Gg.exports=Uj});var Hg=a((F5,Wg)=>{"use strict";var Wj=Ug();Wg.exports=Wj});var Vg=a((D5,Kg)=>{"use strict";var Hj=Hg();Kg.exports=Hj});var Bt=a((B5,zg)=>{"use strict";zg.exports=Vg()});var Yg=a(()=>{"use strict";var Kj=x(),Vj=gt();Kj({target:"Object",stat:!0},{setPrototypeOf:Vj})});var Qg=a((W5,Jg)=>{"use strict";Yg();var zj=K();Jg.exports=zj.Object.setPrototypeOf});var Zg=a((H5,Xg)=>{"use strict";var Yj=Qg();Xg.exports=Yj});var rb=a((K5,eb)=>{"use strict";var Jj=Zg();eb.exports=Jj});var nb=a((V5,tb)=>{"use strict";var Qj=rb();tb.exports=Qj});var vi=a((z5,ib)=>{"use strict";ib.exports=nb()});var ob=a(()=>{"use strict";var Xj=x(),Zj=G(),ab=re().f;Xj({target:"Object",stat:!0,forced:Object.defineProperty!==ab,sham:!Zj},{defineProperty:ab})});var cb=a((Q5,sb)=>{"use strict";ob();var e$=K(),ub=e$.Object,r$=sb.exports=function(r,t,n){return ub.defineProperty(r,t,n)};ub.defineProperty.sham&&(r$.sham=!0)});var fb=a((X5,lb)=>{"use strict";var t$=cb();lb.exports=t$});var vb=a((Z5,pb)=>{"use strict";var n$=fb();pb.exports=n$});var hb=a((eV,db)=>{"use strict";var i$=vb();db.exports=i$});var Gt=a((rV,mb)=>{"use strict";mb.exports=hb()});var Eu=a((tV,Ae)=>{var a$=Gt();function di(e,r,t,n){var i=a$;try{i({},"",{})}catch{i=0}Ae.exports=di=function(u,c,s,l){function f(p,v){di(u,p,function(d){return this._invoke(p,v,d)})}c?i?i(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,di(e,r,t,n)}Ae.exports=di,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var Iu=a((nV,Ne)=>{var yb=Se(),Cu=pi(),o$=Bt(),u$=fi(),gb=vi(),Oe=Eu();function bb(){var e,r,t=typeof yb=="function"?yb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof c?m:c,b=Cu(q.prototype);return Oe(b,"_invoke",function(I,C,S){var T,w,E,j=0,ge=S||[],k=!1,Z={p:0,n:0,v:e,a:be,f:o$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,E=e,Z.n=ve,u}};function be(J,L){for(w=J,E=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],Er=Z.p,Ue=O[2];J>3?(ve=Ue===L)&&(E=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Er&&((ve=J<2&&Er<O[1])?(w=0,Z.v=L,Z.n=O[1]):Er<Ue&&(ve=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,Z.n=Ue,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,E=ve;(r=w<2?e:E)||!k;){T||(w?w<3?(w>1&&(Z.n=-1),be(w,E)):Z.n=E:Z.v=E);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=Z.n<0)?E:I.call(C,Z))!==u)break}catch(O){T=e,w=1,E=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function c(){}function s(){}function l(){}r=u$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=l.prototype=c.prototype=Cu(f);function v(d){return gb?gb(d,l):(d.__proto__=l,Oe(d,i,"GeneratorFunction")),d.prototype=Cu(p),d}return s.prototype=l,Oe(p,"constructor",l),Oe(l,"constructor",s),s.displayName="GeneratorFunction",Oe(l,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),(Ne.exports=bb=function(){return{w:o,m:v}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=bb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var _u=a((iV,Ut)=>{var s$=Se(),c$=li(),l$=Su(),ku=Eu();function Pu(e,r){function t(i,o,u,c){try{var s=e[i](o),l=s.value;return l instanceof l$?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(ku(Pu.prototype),ku(Pu.prototype,typeof s$=="function"&&c$||"@asyncIterator",function(){return this})),ku(this,"_invoke",function(i,o,u){function c(){return new r(function(s,l){t(i,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Ut.exports=Pu,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Ru=a((aV,Wt)=>{var f$=Zr(),p$=Iu(),v$=_u();function d$(e,r,t,n,i){return new v$(p$().w(e,r,t,n),i||f$)}Wt.exports=d$,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var qb=a((oV,Ht)=>{var h$=Ru();function m$(e,r,t,n,i){var o=h$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Ht.exports=m$,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var wb=a((uV,Sb)=>{"use strict";var xb=He(),y$=TypeError;Sb.exports=function(e,r){if(!delete e[r])throw new y$("Cannot delete property "+xb(r)+" of "+xb(e))}});var Tb=a(()=>{"use strict";var g$=x(),b$=ee(),q$=le(),x$=Lr(),S$=wb(),w$=St(),T$=[].unshift(0)!==1,O$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},E$=T$||!O$();g$({target:"Array",proto:!0,arity:1,forced:E$},{unshift:function(r){var t=b$(this),n=q$(t),i=arguments.length;if(i){w$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:S$(t,u)}for(var c=0;c<i;c++)t[c]=arguments[c]}return x$(t,n+i)}})});var Eb=a((lV,Ob)=>{"use strict";Tb();var C$=oe();Ob.exports=C$("Array","unshift")});var Ib=a((fV,Cb)=>{"use strict";var I$=B(),k$=Eb(),Au=Array.prototype;Cb.exports=function(e){var r=e.unshift;return e===Au||I$(Au,e)&&r===Au.unshift?k$:r}});var Pb=a((pV,kb)=>{"use strict";var P$=Ib();kb.exports=P$});var Rb=a((vV,_b)=>{"use strict";var _$=Pb();_b.exports=_$});var Nb=a((dV,Ab)=>{"use strict";var R$=Rb();Ab.exports=R$});var jb=a((hV,Mb)=>{"use strict";Mb.exports=Nb()});var $b=a((mV,Kt)=>{var A$=jb();function N$(e){var r=Object(e),t=[];for(var n in r)A$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Kt.exports=N$,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Fb=a((yV,Lb)=>{"use strict";dr();wt();lr();bo();var M$=Br();Lb.exports=M$.f("iterator")});var Bb=a((gV,Db)=>{"use strict";var j$=Fb();hr();Db.exports=j$});var Ub=a((bV,Gb)=>{"use strict";var $$=Bb();Gb.exports=$$});var Hb=a((qV,Wb)=>{"use strict";var L$=Ub();Wb.exports=L$});var Vt=a((xV,Kb)=>{"use strict";Kb.exports=Hb()});var Vb=a((SV,Me)=>{var hi=Se(),F$=Vt();function Nu(e){"@babel/helpers - typeof";return Me.exports=Nu=typeof hi=="function"&&typeof F$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof hi=="function"&&r.constructor===hi&&r!==hi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Nu(e)}Me.exports=Nu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var zb=a((wV,zt)=>{var D$=Vb().default,B$=Se(),G$=Vt();function U$(e){if(e!=null){var r=e[typeof B$=="function"&&G$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(D$(e)+" is not iterable")}zt.exports=U$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Qb=a((TV,je)=>{var Yb=fi(),W$=xg(),H$=Su(),K$=Iu(),V$=qb(),z$=Ru(),Y$=_u(),J$=$b(),Jb=zb();function Mu(){"use strict";var e=K$(),r=e.m(Mu),t=(Yb?Yb(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return s(l.a,i[p],v)},delegateYield:function(p,v,d){return c.resultName=v,s(l.d,Jb(p),d)},finish:function(p){return s(l.f,p)}},s=function(p,v,d){l.p=c.prev,l.n=c.next;try{return p(v,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(je.exports=Mu=function(){return{wrap:function(s,l,f,p){return e.w(o(s),l,f,p&&W$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new H$(s,l)},AsyncIterator:Y$,async:function(s,l,f,p,v){return(n(l)?z$:V$)(o(s),l,f,p,v)},keys:J$,values:Jb}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Mu,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((OV,Xb)=>{var mi=Qb()();Xb.exports=mi;try{regeneratorRuntime=mi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=mi:Function("r","regeneratorRuntime = r")(mi)}});var ju=a((gi,eq)=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});var yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zb=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(i=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();gi.default=Q$;function Q$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(c,s,l){return c[l]={name:s,value:i[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var c=u.attribs.class;c&&i.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=X$(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,i),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function X$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=Zb(i,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(s):Yt(S,T,s)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=Zb(h,2),q=y[0],b=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},l=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/^#/.test(u):var I=u.substr(1);s=function(S){return S.attribs.id===I},l=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j,ge){s(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},l=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;default:s=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;p==="type"&&(y=y.filter(s));var q=y.findIndex(function(b){return b===h});if(q===v)return!0}return!1};return function(h){var y=l(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Yt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}eq.exports=gi.default});var qi=a(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.convertNodeList=Z$;bi.escapeValue=eL;function Z$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function eL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var lq=a((xi,cq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.default=rL;var iq=qi(),rq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function rL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(l).forEach(function(q){q==="class"&&(d=!0);var b=l[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,iq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[q]=function(I,C){return b.test(C)})}),d&&function(){var q=l.attribute;l.attribute=function(b,I,C){return l.class(I)||q&&q(b,I,C)}}();p!==n;){if(h(p)!==!0){if(tq(c,p,l,f,n)||nq(p,l,f,n))break;tq(c,p,l,f),f.length===v&&nq(p,l,f),f.length===v&&tL(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=uq(c,p,l);f.unshift(y)}return f.join(" ")}function tq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=aq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function aq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var c=i[o],s=n[c],l=s.name,f=(0,iq.escapeValue)(s.value),p=t[l]||t.attribute,v=rq[l]||rq.attribute;if(!sq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function nq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=oq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function oq(e,r){var t=e.tagName.toLowerCase();return sq(r.tag,null,t)?null:t}function tL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=uq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function uq(e,r,t){var n=aq(e,r,t);return n||(n=oq(r,t)),n}function sq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}cq.exports=xi.default});var $u=a((wi,fq)=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.default=uL;var nL=ju(),iL=oL(nL),aL=qi();function oL(e){return e&&e.__esModule?e:{default:e}}function uL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,aL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,iL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Si("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),c=i.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Si(c,u,s,r))}return o.unshift(i[0]),i=o,i[0]=Si("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Si(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Si(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(et(u,n))r=i;else for(var c=document.querySelectorAll(""+e+i),s=function(){var C=c[l];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},l=0,f=c.length;l<f;l++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);et(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);et(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,C){return I.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);et(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[l];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,b=q();if(b==="break")break}}return r}function et(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}fq.exports=wi.default});var Lu=a(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.getCommonAncestor=sL;Ti.getCommonProperties=cL;function sL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,c=function(){var v=o[s],d=i.some(function(m){return!m.some(function(h){return h===v})});if(d)return"break";u=v},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function cL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(v,d){var m=s[d],h=m.name;return m&&h!=="class"&&(v[h]=m.value),v},{}),f=Object.keys(l),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var m=i[d];return m===l[d]&&(v[d]=m),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var yq=a(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});var lL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Jt.getSingleSelector=Du;Jt.getMultiSelector=mq;Jt.default=mL;var fL=ju(),vq=Fu(fL),pL=lq(),vL=Fu(pL),dL=$u(),dq=Fu(dL),pq=qi(),hq=Lu();function Fu(e){return e&&e.__esModule?e:{default:e}}function Du(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":lL(e))+'")');var t=(0,vq.default)(e,r),n=(0,vL.default)(e,r),i=(0,dq.default)(n,e,r);return t&&delete global.document,i}function mq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,pq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,vq.default)(e[0],r),n=(0,hq.getCommonAncestor)(e,r),i=Du(n,r),o=hL(e),u=o[0],c=(0,dq.default)(i+" "+u,e,r),s=(0,pq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function hL(e){var r=(0,hq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function mL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?mq(e,r):Du(e,r)}});var qq=a(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=ne.common=ne.optimize=ne.getMultiSelector=ne.getSingleSelector=ne.select=void 0;var Bu=yq();Object.defineProperty(ne,"getSingleSelector",{enumerable:!0,get:function(){return Bu.getSingleSelector}});Object.defineProperty(ne,"getMultiSelector",{enumerable:!0,get:function(){return Bu.getMultiSelector}});var gq=bq(Bu),yL=$u(),gL=bq(yL),bL=Lu(),qL=xL(bL);function xL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function bq(e){return e&&e.__esModule?e:{default:e}}ne.select=gq.default;ne.optimize=gL.default;ne.common=qL;ne.default=gq.default});var xq=a(()=>{"use strict";var _L=x(),RL=Ie();_L({target:"Array",stat:!0},{isArray:RL})});var wq=a((GV,Sq)=>{"use strict";xq();var AL=K();Sq.exports=AL.Array.isArray});var Oq=a((UV,Tq)=>{"use strict";var NL=wq();Tq.exports=NL});var Cq=a((WV,Eq)=>{"use strict";var ML=Oq();Eq.exports=ML});var kq=a((HV,Iq)=>{"use strict";var jL=Cq();Iq.exports=jL});var _q=a((KV,Pq)=>{"use strict";Pq.exports=kq()});var Nq=a(()=>{"use strict";var $L=x(),LL=ee(),FL=le(),DL=Lr(),BL=St(),GL=P(),UL=GL(function(){return[].push.call({length:4294967296},1)!==4294967297}),WL=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},HL=UL||!WL();$L({target:"Array",proto:!0,arity:1,forced:HL},{push:function(r){var t=LL(this),n=FL(t),i=arguments.length;BL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return DL(t,n),n}})});var jq=a((JV,Mq)=>{"use strict";Nq();var KL=oe();Mq.exports=KL("Array","push")});var Lq=a((QV,$q)=>{"use strict";var VL=B(),zL=jq(),Gu=Array.prototype;$q.exports=function(e){var r=e.push;return e===Gu||VL(Gu,e)&&r===Gu.push?zL:r}});var Dq=a((XV,Fq)=>{"use strict";var YL=Lq();Fq.exports=YL});var Gq=a((ZV,Bq)=>{"use strict";var JL=Dq();Bq.exports=JL});var Wq=a((ez,Uq)=>{"use strict";var QL=Gq();Uq.exports=QL});var Uu=a((rz,Hq)=>{"use strict";Hq.exports=Wq()});var tx=a(()=>{"use strict";var XL=x(),ZL=Ot().map,eF=dt(),rF=eF("map");XL({target:"Array",proto:!0,forced:!rF},{map:function(r){return ZL(this,r,arguments.length>1?arguments[1]:void 0)}})});var ix=a((kz,nx)=>{"use strict";tx();var tF=oe();nx.exports=tF("Array","map")});var ox=a((Pz,ax)=>{"use strict";var nF=B(),iF=ix(),Hu=Array.prototype;ax.exports=function(e){var r=e.map;return e===Hu||nF(Hu,e)&&r===Hu.map?iF:r}});var sx=a((_z,ux)=>{"use strict";var aF=ox();ux.exports=aF});var lx=a((Rz,cx)=>{"use strict";var oF=sx();cx.exports=oF});var px=a((Az,fx)=>{"use strict";var uF=lx();fx.exports=uF});var dx=a((Nz,vx)=>{"use strict";vx.exports=px()});var mx=a((Mz,hx)=>{hx.exports=dx()});var gx=a((jz,yx)=>{yx.exports=Zr()});var wx=a(($z,Sx)=>{"use strict";var sF=F(),cF=ee(),lF=fn(),fF=le(),bx=TypeError,qx="Reduce of empty array with no initial value",xx=function(e){return function(r,t,n,i){var o=cF(r),u=lF(o),c=fF(o);if(sF(t),c===0&&n<2)throw new bx(qx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new bx(qx)}for(;e?s>=0:c>s;s+=l)s in u&&(i=t(i,u[s],s,o));return i}};Sx.exports={left:xx(!1),right:xx(!0)}});var Ku=a((Lz,Tx)=>{"use strict";var pF=P();Tx.exports=function(e,r){var t=[][e];return!!t&&pF(function(){t.call(null,r||function(){return 1},1)})}});var Ex=a(()=>{"use strict";var vF=x(),dF=wx().left,hF=Ku(),Ox=_r(),mF=_t(),yF=!mF&&Ox>79&&Ox<83,gF=yF||!hF("reduce");vF({target:"Array",proto:!0,forced:gF},{reduce:function(r){var t=arguments.length;return dF(this,r,t,t>1?arguments[1]:void 0)}})});var Ix=a((Bz,Cx)=>{"use strict";Ex();var bF=oe();Cx.exports=bF("Array","reduce")});var Px=a((Gz,kx)=>{"use strict";var qF=B(),xF=Ix(),Vu=Array.prototype;kx.exports=function(e){var r=e.reduce;return e===Vu||qF(Vu,e)&&r===Vu.reduce?xF:r}});var Rx=a((Uz,_x)=>{"use strict";var SF=Px();_x.exports=SF});var Nx=a((Wz,Ax)=>{"use strict";var wF=Rx();Ax.exports=wF});var jx=a((Hz,Mx)=>{"use strict";var TF=Nx();Mx.exports=TF});var Lx=a((Kz,$x)=>{"use strict";$x.exports=jx()});var Dx=a((Vz,Fx)=>{Fx.exports=Lx()});var Ux=a((zz,Gx)=>{"use strict";var OF=Ie(),EF=le(),CF=St(),IF=V(),kF=$r(),Bx=function(e,r,t,n,i,o,u,c){for(var s=i,l=0,f=u?IF(u,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&OF(p)?(v=EF(p),s=Bx(e,r,p,v,s,o-1)-1):(CF(s+1),kF(e,s,p)),s++),l++;return s};Gx.exports=Bx});var Wx=a(()=>{"use strict";var PF=x(),_F=Ux(),RF=F(),AF=ee(),NF=le(),MF=Rn();PF({target:"Array",proto:!0},{flatMap:function(r){var t=AF(this),n=NF(t),i;return RF(r),i=MF(t,0),_F(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Hx=a(()=>{"use strict";var jF=xo();jF("flatMap")});var Vx=a((Zz,Kx)=>{"use strict";Wx();Hx();var $F=oe();Kx.exports=$F("Array","flatMap")});var Yx=a((e7,zx)=>{"use strict";var LF=B(),FF=Vx(),zu=Array.prototype;zx.exports=function(e){var r=e.flatMap;return e===zu||LF(zu,e)&&r===zu.flatMap?FF:r}});var Qx=a((r7,Jx)=>{"use strict";var DF=Yx();Jx.exports=DF});var Zx=a((t7,Xx)=>{"use strict";var BF=Qx();Xx.exports=BF});var rS=a((n7,eS)=>{"use strict";var GF=Zx();eS.exports=GF});var nS=a((i7,tS)=>{"use strict";tS.exports=rS()});var aS=a((a7,iS)=>{iS.exports=nS()});var uS=a((o7,oS)=>{"use strict";Ha();var UF=oe();oS.exports=UF("Array","concat")});var cS=a((u7,sS)=>{"use strict";var WF=B(),HF=uS(),Yu=Array.prototype;sS.exports=function(e){var r=e.concat;return e===Yu||WF(Yu,e)&&r===Yu.concat?HF:r}});var fS=a((s7,lS)=>{"use strict";var KF=cS();lS.exports=KF});var vS=a((c7,pS)=>{"use strict";var VF=fS();pS.exports=VF});var hS=a((l7,dS)=>{"use strict";var zF=vS();dS.exports=zF});var yS=a((f7,mS)=>{"use strict";mS.exports=hS()});var Ju=a((p7,gS)=>{gS.exports=yS()});var xS=a(()=>{});var wS=a((M7,SS)=>{"use strict";xS();qo();var iD=Br();SS.exports=iD.f("toPrimitive")});var OS=a((j7,TS)=>{"use strict";var aD=wS();TS.exports=aD});var CS=a(($7,ES)=>{"use strict";var oD=OS();ES.exports=oD});var kS=a((L7,IS)=>{"use strict";var uD=CS();IS.exports=uD});var _S=a((F7,PS)=>{"use strict";PS.exports=kS()});var DS=a((o9,FS)=>{"use strict";var cD=$(),lD=qe(),fD=R(),pD=fD("match");FS.exports=function(e){var r;return cD(e)&&((r=e[pD])!==void 0?!!r:lD(e)==="RegExp")}});var GS=a((u9,BS)=>{"use strict";var vD=DS(),dD=TypeError;BS.exports=function(e){if(vD(e))throw new dD("The method doesn't accept regular expressions");return e}});var WS=a((s9,US)=>{"use strict";var hD=R(),mD=hD("match");US.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[mD]=!1,"/./"[e](r)}catch{}}return!1}});var VS=a(()=>{"use strict";var yD=x(),gD=ot(),bD=st().f,qD=ha(),HS=Ke(),xD=GS(),SD=ir(),wD=WS(),TD=X(),OD=gD("".slice),ED=Math.min,KS=wD("startsWith"),CD=!TD&&!KS&&!!function(){var e=bD(String.prototype,"startsWith");return e&&!e.writable}();yD({target:"String",proto:!0,forced:!CD&&!KS},{startsWith:function(r){var t=HS(SD(this));xD(r);var n=qD(ED(arguments.length>1?arguments[1]:void 0,t.length)),i=HS(r);return OD(t,n,n+i.length)===i}})});var YS=a((f9,zS)=>{"use strict";VS();var ID=oe();zS.exports=ID("String","startsWith")});var QS=a((p9,JS)=>{"use strict";var kD=B(),PD=YS(),es=String.prototype;JS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===es||kD(es,e)&&r===es.startsWith?PD:r}});var ZS=a((v9,XS)=>{"use strict";var _D=QS();XS.exports=_D});var rw=a((d9,ew)=>{"use strict";var RD=ZS();ew.exports=RD});var nw=a((h9,tw)=>{"use strict";var AD=rw();tw.exports=AD});var aw=a((m9,iw)=>{"use strict";iw.exports=nw()});var uw=a((y9,ow)=>{ow.exports=aw()});var sw=a(()=>{"use strict";var ND=x(),MD=Ot().filter,jD=dt(),$D=jD("filter");ND({target:"Array",proto:!0,forced:!$D},{filter:function(r){return MD(this,r,arguments.length>1?arguments[1]:void 0)}})});var lw=a((q9,cw)=>{"use strict";sw();var LD=oe();cw.exports=LD("Array","filter")});var pw=a((x9,fw)=>{"use strict";var FD=B(),DD=lw(),rs=Array.prototype;fw.exports=function(e){var r=e.filter;return e===rs||FD(rs,e)&&r===rs.filter?DD:r}});var dw=a((S9,vw)=>{"use strict";var BD=pw();vw.exports=BD});var mw=a((w9,hw)=>{"use strict";var GD=dw();hw.exports=GD});var gw=a((T9,yw)=>{"use strict";var UD=mw();yw.exports=UD});var qw=a((O9,bw)=>{"use strict";bw.exports=gw()});var Sw=a((E9,xw)=>{xw.exports=qw()});var Lw=a(()=>{"use strict";var QD=x(),XD=U(),ns=kr(),ZD=Tu(),Rw=Mo(),eB=Q(),Aw=$(),rB=ze(),Mw=P(),is=XD("Reflect","construct"),tB=Object.prototype,nB=[].push,jw=Mw(function(){function e(){}return!(is(function(){},[],e)instanceof e)}),$w=!Mw(function(){is(function(){})}),Nw=jw||$w;QD({target:"Reflect",stat:!0,forced:Nw,sham:Nw},{construct:function(r,t){Rw(r),eB(t);var n=arguments.length<3?r:Rw(arguments[2]);if($w&&!jw)return is(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ns(nB,i,t),new(ns(ZD,r,i))}var o=n.prototype,u=rB(Aw(o)?o:tB),c=ns(r,u,t);return Aw(c)?c:u}})});var Dw=a((oY,Fw)=>{"use strict";Lw();var iB=K();Fw.exports=iB.Reflect.construct});var Gw=a((uY,Bw)=>{"use strict";var aB=Dw();Bw.exports=aB});var Ww=a((sY,Uw)=>{"use strict";var oB=Gw();Uw.exports=oB});var Kw=a((cY,Hw)=>{"use strict";var uB=Ww();Hw.exports=uB});var _i=a((lY,Vw)=>{"use strict";Vw.exports=Kw()});var Yw=a((fY,zw)=>{zw.exports=_i()});var iT=a((qY,nT)=>{"use strict";var sB=P();nT.exports=sB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var uT=a((xY,oT)=>{"use strict";var cB=P(),lB=$(),fB=qe(),aT=iT(),Ri=Object.isExtensible,pB=cB(function(){Ri(1)});oT.exports=pB||aT?function(r){return!lB(r)||aT&&fB(r)==="ArrayBuffer"?!1:Ri?Ri(r):!0}:Ri});var cT=a((SY,sT)=>{"use strict";var vB=P();sT.exports=!vB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var fs=a((wY,pT)=>{"use strict";var dB=x(),hB=A(),mB=Dr(),yB=$(),ss=W(),gB=re().f,lT=Tt(),bB=Ka(),cs=uT(),qB=Ar(),xB=cT(),fT=!1,Fe=qB("meta"),SB=0,ls=function(e){gB(e,Fe,{value:{objectID:"O"+SB++,weakData:{}}})},wB=function(e,r){if(!yB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ss(e,Fe)){if(!cs(e))return"F";if(!r)return"E";ls(e)}return e[Fe].objectID},TB=function(e,r){if(!ss(e,Fe)){if(!cs(e))return!0;if(!r)return!1;ls(e)}return e[Fe].weakData},OB=function(e){return xB&&fT&&cs(e)&&!ss(e,Fe)&&ls(e),e},EB=function(){CB.enable=function(){},fT=!0;var e=lT.f,r=hB([].splice),t={};t[Fe]=1,e(t).length&&(lT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},dB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:bB.f}))},CB=pT.exports={enable:EB,fastKey:wB,getWeakData:TB,onFreeze:OB};mB[Fe]=!0});var hT=a((TY,dT)=>{"use strict";var IB=x(),kB=_(),PB=fs(),_B=P(),RB=xe(),AB=pe(),NB=ei(),MB=N(),jB=$(),$B=nr(),LB=_e(),FB=re().f,DB=Ot().forEach,BB=G(),vT=Ve(),GB=vT.set,UB=vT.getterFor;dT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=kB[e],c=u&&u.prototype,s={},l;if(!BB||!MB(u)||!(i||c.forEach&&!_B(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),PB.enable();else{l=r(function(v,d){GB(NB(v,f),{type:e,collection:new u}),$B(d)||AB(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=UB(e);DB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in c&&!(i&&v==="clear")&&RB(f,v,function(m,h){var y=p(this).collection;if(!d&&i&&!jB(m))return v==="get"?void 0:!1;var q=y[v](m===0?0:m,h);return d?this:q})}),i||FB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return LB(l,e,!1,!0),s[e]=l,IB({global:!0,forced:!0},s),i||t.setStrong(l,e,n),l}});var yT=a((OY,mT)=>{"use strict";var WB=ke();mT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:WB(e,n,r[n],t);return e}});var TT=a((EY,wT)=>{"use strict";var gT=ze(),HB=Nn(),bT=yT(),KB=V(),VB=ei(),zB=nr(),YB=pe(),JB=In(),Ai=kn(),QB=No(),tn=G(),qT=fs().fastKey,ST=Ve(),xT=ST.set,ps=ST.getterFor;wT.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){VB(l,o),xT(l,{type:r,index:gT(null),first:null,last:null,size:0}),tn||(l.size=0),zB(f)||YB(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=ps(r),c=function(l,f,p){var v=u(l),d=s(l,f),m,h;return d?d.value=p:(v.last=d={index:h=qT(f,!0),key:f,value:p,previous:m=v.last,next:null,removed:!1},v.first||(v.first=d),m&&(m.next=d),tn?v.size++:l.size++,h!=="F"&&(v.index[h]=d)),l},s=function(l,f){var p=u(l),v=qT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return bT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=gT(null),tn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=s(f,l);if(v){var d=v.next,m=v.previous;delete p.index[v.index],v.removed=!0,m&&(m.next=d),d&&(d.previous=m),p.first===v&&(p.first=d),p.last===v&&(p.last=m),tn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=KB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),bT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),tn&&HB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ps(r),o=ps(n);JB(e,r,function(u,c){xT(this,{type:n,target:u,state:i(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ai(void 0,!0)):Ai(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),QB(r)}}});var OT=a(()=>{"use strict";var XB=hT(),ZB=TT();XB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},ZB)});var ET=a(()=>{"use strict";OT()});var IT=a((_Y,CT)=>{"use strict";CT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ie=a((RY,PT)=>{"use strict";var e3=U(),Ni=IT(),kT=e3("Map");PT.exports={Map:kT,set:Ni("set",2),get:Ni("get",1),has:Ni("has",1),remove:Ni("delete",1),proto:kT.prototype}});var vs=a(()=>{"use strict";var r3=x(),t3=A(),n3=F(),i3=ir(),a3=pe(),Mi=ie(),_T=X(),o3=P(),RT=Mi.Map,u3=Mi.has,s3=Mi.get,c3=Mi.set,l3=t3([].push),f3=_T||o3(function(){return RT.groupBy("ab",function(e){return e}).get("a").length!==1});r3({target:"Map",stat:!0,forced:_T||f3},{groupBy:function(r,t){i3(r),n3(t);var n=new RT,i=0;return a3(r,function(o){var u=t(o,i++);u3(n,u)?l3(s3(n,u),o):c3(n,u,[o])}),n}})});var z=a((MY,AT)=>{"use strict";var p3=He(),v3=TypeError;AT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new v3(p3(e)+" is not a map")}});var hs=a(()=>{"use strict";var d3=x(),h3=z(),ds=ie(),m3=X(),y3=ds.get,g3=ds.has,b3=ds.set;d3({target:"Map",proto:!0,real:!0,forced:m3},{getOrInsert:function(r,t){return g3(h3(this),r)?y3(this,r):(b3(this,r,t),t)}})});var ys=a(()=>{"use strict";var q3=x(),x3=F(),S3=z(),ms=ie(),w3=X(),T3=ms.get,O3=ms.has,E3=ms.set;q3({target:"Map",proto:!0,real:!0,forced:w3},{getOrInsertComputed:function(r,t){if(S3(this),x3(t),O3(this,r))return T3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return E3(this,r,n),n}})});var MT=a((DY,NT)=>{"use strict";dr();ET();vs();hs();ys();wt();lr();var C3=K();NT.exports=C3.Map});var $T=a((BY,jT)=>{"use strict";var I3=MT();hr();jT.exports=I3});var gs=a(()=>{"use strict";hs()});var bs=a(()=>{"use strict";ys()});var LT=a(()=>{"use strict";vs()});var DT=a((zY,FT)=>{"use strict";var k3=$T();gs();bs();LT();FT.exports=k3});var GT=a((YY,BT)=>{"use strict";var P3=V(),_3=Q(),R3=ee(),A3=pe();BT.exports=function(e,r,t){return function(i){var o=R3(i),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?P3(c,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return A3(o,function(v){var d=s?l(v,p++):v;t?r(f,_3(d)[0],d[1]):r(f,d)}),f}}});var WT=a(()=>{"use strict";var N3=x(),UT=ie(),M3=GT();N3({target:"Map",stat:!0,forced:!0},{from:M3(UT.Map,UT.set,!0)})});var KT=a((XY,HT)=>{"use strict";var j3=Q();HT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(i,j3(c)[0],c[1]):r(i,c)}return i}}});var zT=a(()=>{"use strict";var $3=x(),VT=ie(),L3=KT();$3({target:"Map",stat:!0,forced:!0},{of:L3(VT.Map,VT.set,!0)})});var JT=a(()=>{"use strict";var F3=x(),D3=D(),B3=pe(),G3=N(),YT=F(),U3=ie().Map;F3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=G3(this)?this:U3,i=new n;YT(t);var o=YT(i.set);return B3(r,function(u){D3(o,i,t(u),u)}),i}})});var QT=a(()=>{"use strict";var W3=x(),H3=z(),K3=ie().remove;W3({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=H3(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=K3(r,arguments[i]),t=t&&n;return!!t}})});var ZT=a(()=>{"use strict";var V3=x(),z3=z(),qs=ie(),Y3=qs.get,J3=qs.has,XT=qs.set;V3({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=z3(this),i,o;return J3(n,r)?(i=Y3(n,r),"update"in t&&(i=t.update(i,r,n),XT(n,r,i)),i):(o=t.insert(r,n),XT(n,r,o),o)}})});var rO=a((uJ,eO)=>{"use strict";var Q3=D();eO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=Q3(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var me=a((sJ,tO)=>{"use strict";var X3=rO();tO.exports=function(e,r,t){return t?X3(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var nO=a(()=>{"use strict";var Z3=x(),e4=V(),r4=z(),t4=me();Z3({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=r4(this),n=e4(r,arguments.length>1?arguments[1]:void 0);return t4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var aO=a(()=>{"use strict";var n4=x(),i4=V(),a4=z(),iO=ie(),o4=me(),u4=iO.Map,s4=iO.set;n4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=a4(this),n=i4(r,arguments.length>1?arguments[1]:void 0),i=new u4;return o4(t,function(o,u){n(o,u,t)&&s4(i,u,o)}),i}})});var oO=a(()=>{"use strict";var c4=x(),l4=V(),f4=z(),p4=me();c4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=f4(this),n=l4(r,arguments.length>1?arguments[1]:void 0),i=p4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var uO=a(()=>{"use strict";var v4=x(),d4=V(),h4=z(),m4=me();v4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=h4(this),n=d4(r,arguments.length>1?arguments[1]:void 0),i=m4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var cO=a((yJ,sO)=>{"use strict";sO.exports=function(e,r){return e===r||e!==e&&r!==r}});var lO=a(()=>{"use strict";var y4=x(),g4=cO(),b4=z(),q4=me();y4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return q4(b4(this),function(t){if(g4(t,r))return!0},!0)===!0}})});var fO=a(()=>{"use strict";var x4=x(),S4=z(),w4=me();x4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=w4(S4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var vO=a(()=>{"use strict";var T4=x(),O4=V(),E4=z(),pO=ie(),C4=me(),I4=pO.Map,k4=pO.set;T4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=E4(this),n=O4(r,arguments.length>1?arguments[1]:void 0),i=new I4;return C4(t,function(o,u){k4(i,n(o,u,t),o)}),i}})});var hO=a(()=>{"use strict";var P4=x(),_4=V(),R4=z(),dO=ie(),A4=me(),N4=dO.Map,M4=dO.set;P4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=R4(this),n=_4(r,arguments.length>1?arguments[1]:void 0),i=new N4;return A4(t,function(o,u){M4(i,u,n(o,u,t))}),i}})});var mO=a(()=>{"use strict";var j4=x(),$4=z(),L4=pe(),F4=ie().set;j4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=$4(this),n=arguments.length,i=0;i<n;)L4(arguments[i++],function(o,u){F4(t,o,u)},{AS_ENTRIES:!0});return t}})});var yO=a(()=>{"use strict";var D4=x(),B4=F(),G4=z(),U4=me(),W4=TypeError;D4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=G4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(B4(r),U4(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new W4("Reduce of empty map with no initial value");return i}})});var gO=a(()=>{"use strict";var H4=x(),K4=V(),V4=z(),z4=me();H4({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=V4(this),n=K4(r,arguments.length>1?arguments[1]:void 0);return z4(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var qO=a(()=>{"use strict";var Y4=x(),bO=F(),J4=z(),xs=ie(),Q4=TypeError,X4=xs.get,Z4=xs.has,eG=xs.set;Y4({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=J4(this),i=arguments.length;bO(t);var o=Z4(n,r);if(!o&&i<3)throw new Q4("Updating absent value");var u=o?X4(n,r):bO(i>2?arguments[2]:void 0)(r,n);return eG(n,r,t(u,r,n)),n}})});var ws=a((NJ,xO)=>{"use strict";var ji=D(),Ss=F(),$i=N(),rG=Q(),tG=TypeError;xO.exports=function(r,t){var n=rG(this),i=Ss(n.get),o=Ss(n.has),u=Ss(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!$i(t)&&!$i(c))throw new tG("At least one callback required");return ji(o,n,r)?(s=ji(i,n,r),$i(t)&&(s=t(s),ji(u,n,r,s))):$i(c)&&(s=c(),ji(u,n,r,s)),s}});var SO=a(()=>{"use strict";var nG=x(),iG=ws();nG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:iG})});var wO=a(()=>{"use strict";var aG=x(),oG=ws();aG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:oG})});var OO=a((FJ,TO)=>{"use strict";var uG=DT();WT();zT();JT();QT();ZT();nO();aO();oO();uO();lO();gs();bs();fO();vO();hO();mO();yO();gO();qO();SO();wO();TO.exports=uG});var CO=a((DJ,EO)=>{"use strict";EO.exports=OO()});var kO=a(()=>{"use strict";var sG=x(),cG=ot(),lG=Oa().indexOf,fG=Ku(),Ts=cG([].indexOf),IO=!!Ts&&1/Ts([1],1,-0)<0,pG=IO||!fG("indexOf");sG({target:"Array",proto:!0,forced:pG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return IO?Ts(this,r,t)||0:lG(this,r,t)}})});var _O=a((UJ,PO)=>{"use strict";kO();var vG=oe();PO.exports=vG("Array","indexOf")});var AO=a((WJ,RO)=>{"use strict";var dG=B(),hG=_O(),Os=Array.prototype;RO.exports=function(e){var r=e.indexOf;return e===Os||dG(Os,e)&&r===Os.indexOf?hG:r}});var MO=a((HJ,NO)=>{"use strict";var mG=AO();NO.exports=mG});var $O=a((KJ,jO)=>{"use strict";var yG=MO();jO.exports=yG});var FO=a((VJ,LO)=>{"use strict";var gG=$O();LO.exports=gG});var BO=a((zJ,DO)=>{"use strict";DO.exports=FO()});var iE=a(()=>{"use strict";var TG=x(),OG=ee(),nE=wn(),EG=P(),CG=EG(function(){nE(1)});TG({target:"Object",stat:!0,forced:CG},{keys:function(r){return nE(OG(r))}})});var oE=a((ZQ,aE)=>{"use strict";iE();var IG=K();aE.exports=IG.Object.keys});var sE=a((eX,uE)=>{"use strict";var kG=oE();uE.exports=kG});var lE=a((rX,cE)=>{"use strict";var PG=sE();cE.exports=PG});var pE=a((tX,fE)=>{"use strict";var _G=lE();fE.exports=_G});var dE=a((nX,vE)=>{"use strict";vE.exports=pE()});var mE=a((iX,hE)=>{hE.exports=dE()});var Cr="";function Ds(e){Cr=e.replace(/\/+$/,"")}async function Bs(e){let r=await fetch(`${Cr}/comments?uri=${encodeURIComponent(e)}`);if(!r.ok)throw new Error(`Failed to fetch comments: ${r.status}`);return(await r.json()).data}async function Ui({uri:e,quote:r,prefix:t,suffix:n,body:i,author:o,parent:u}){let c=await fetch(`${Cr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uri:e,quote:r,prefix:t,suffix:n,body:i,author:o,parent:u})});if(!c.ok){let s=await c.json().catch(()=>({error:{message:c.statusText}}));throw new Error(s.error?.message||"Failed to create comment")}return c.json()}async function Gs(e,{body:r}){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Us(e,r){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Ws(e){let r=await fetch(`${Cr}/comments/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete comment: ${r.status}`)}var TL=g(Fr(),1),OL=g(_n(),1),EL=g(Vn(),1),CL=g(zn(),1),IL=g(Yn(),1);var bu=g(Zr(),1);function Fy(e,r,t,n,i,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):bu.default.resolve(s).then(n,i)}function qr(e){return function(){var r=this,t=arguments;return new bu.default(function(n,i){var o=e.apply(r,t);function u(s){Fy(o,n,i,u,c,"next",s)}function c(s){Fy(o,n,i,u,c,"throw",s)}u(void 0)})}}function Lt(e,r){this.v=e,this.k=r}function Xe(e){return new Lt(e,0)}var qu=g(Zr(),1),Yy=g(Se(),1),Jy=g(li(),1);function Te(e){return function(){return new Ft(e.apply(this,arguments))}}function Ft(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Lt;qu.default.resolve(l?s.v:s).then(function(f){if(l){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}i(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new qu.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ft.prototype[typeof Yy.default=="function"&&Jy.default||"@@asyncIterator"]=function(){return this},Ft.prototype.next=function(e){return this._invoke("next",e)},Ft.prototype.throw=function(e){return this._invoke("throw",e)},Ft.prototype.return=function(e){return this._invoke("return",e)};var kL=g(se(),1),PL=g(qq(),1);function ce(e){var r,t=SL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function SL(e){return"startContainer"in e}function er(e){if(wL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function wL(e){return"startContainer"in e}var Rq=g(_q(),1);function Aq(e){if((0,Rq.default)(e))return e}var Kq=g(Se(),1),Vq=g(Io(),1),zq=g(Uu(),1);function Yq(e,r){var t=e==null?null:typeof Kq.default<"u"&&(0,Vq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,zq.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return c}}var Jq=g(ga(),1),Qq=g(Wa(),1);function Oi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Wu(e,r){if(e){var t;if(typeof e=="string")return Oi(e,r);var n=(0,Jq.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Qq.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oi(e,r):void 0}}function Xq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Aq(e)||Yq(e,r)||Wu(e,r)||Xq()}var Zq=g(Se(),1),ex=g(li(),1),rx=g(Vt(),1),Qt=g(Zr(),1);function rt(e){var r,t,n,i=2;for(typeof Zq.default<"u"&&(t=ex.default,n=rx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ei(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ei(e){function r(t){if(Object(t)!==t)return Qt.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Qt.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ei=function(n){this.s=n,this.n=n.next},Ei.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?Qt.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?Qt.default.reject(n):r(i.apply(this.s,arguments))}},new Ei(e)}var nD=g(se(),1);var QF=g(se(),1),XF=g(mx(),1),ZF=g(gx(),1),eD=g(Dx(),1),rD=g(aS(),1),tD=g(Ju(),1);var Is=g(se(),1);var JD=g(se(),1);var Xu=g(se(),1);function Xt(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function bS(e,r){return Xt(e.startChunk,r.startChunk)&&Xt(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function xr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Qu=g(Gt(),1);var Zt=g(Se(),1),qS=g(Vt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof Zt.default=="function"&&typeof qS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Zt.default=="function"&&r.constructor===Zt.default&&r!==Zt.default.prototype?"symbol":typeof r},Le(e)}var RS=g(_S(),1);function AS(e,r){if(Le(e)!="object"||!e)return e;var t=e[RS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ci(e){var r=AS(e,"string");return Le(r)=="symbol"?r:r+""}function NS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Qu.default)(e,Ci(n.key),n)}}function en(e,r,t){return r&&NS(e.prototype,r),t&&NS(e,t),(0,Qu.default)(e,"prototype",{writable:!1}),e}var MS=g(Gt(),1);function Sr(e,r,t){return(r=Ci(r))in e?(0,MS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var jS=g(Fr(),1);var Ii="Iterator exhausted before seek ended.",rn=function(){function e(r){xr(this,e),this.chunker=r,Sr(this,"currentChunkPosition",0),Sr(this,"offsetInChunk",0),this.seekTo(0)}return en(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!Xt(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=$e(p,2),d=v[0],m=v[1];if(t&&(u=d+u),m===null)throw new RangeError(Ii)}else for(;!Xt(this.currentChunk,n);){var c=this._readToNextChunk(),s=$e(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Ii)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,jS.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=$e(s,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ii)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ii)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function LS(e,r){return Zu.apply(this,arguments)}function Zu(){return Zu=qr(Xu.default.mark(function e(r,t){var n,i,o,u,c,s,l,f,p,v,d,m,h,y,q,b,I,C,S,T,w,E,j=arguments;return Xu.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new rn(t()),p=new rn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+v.length+m.length},h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-h())/2),d=f.read(-y,!1,!0)+d,h()<c&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=c-h(),m=m+f.read(q,!1,!0),h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=c-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ki(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+ki(f,l,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:m},C=Pi(I)(t()),k.next=16,C.next();case 16:if(S=k.sent,!(!S.done&&bS(S.value,r))){k.next=21;break}return k.next=20,C.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=$S(f,p,!0),w!==void 0&&!o&&(w=ki(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),p.seekToChunk(T.endChunk,T.endIndex+m.length),E=$S(f,p,!1),E!==void 0&&!o&&(E=E+ki(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(E===void 0){k.next=41;break}m=m+E,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(m=m+E);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),Zu.apply(this,arguments)}function $S(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ki(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(sD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function sD(e){return/^\s+$/.test(e)}var Ow=g(Fr(),1),Ew=g(_n(),1),Cw=g(Vn(),1),Iw=g(zn(),1),kw=g(Yn(),1);var ts=g(se(),1),Pw=g(uw(),1),_w=g(Sw(),1);function ww(e,r){var t;if(typeof Cw.default>"u"||(0,Iw.default)(e)==null){if(Array.isArray(e)||(t=WD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,kw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function WD(e,r){var t;if(e){if(typeof e=="string")return Tw(e,r);var n=(0,Ow.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Ew.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tw(e,r)}}function Tw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Pi(e){return function(){var r=Te(ts.default.mark(function n(i){var o,u,c,s,l,f,p,v,d,m,h,y,q,b,I,C,S,T,w,E,j,ge,k,Z,be,J,L;return ts.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],m=ww(l),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),C=s.length-q,!(C<=v.length)){O.next=24;break}if(!(0,Pw.default)(v).call(v,s.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===s.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(l=d,!(s.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(s,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],E=Math.max(v.length-s.length+1,0),j=function(Ue){var Ls=v[Ue];w=(0,_w.default)(w).call(w,function(jE){return Ls===s[Ue-jE]}),Ls===s[0]&&w.push(Ue)},ge=E;ge<v.length;ge++)j(ge);k=ww(w);try{for(k.s();!(Z=k.n()).done;)be=Z.value,J=v.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),l.push(L)}catch(Er){k.e(Er)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var zD=g(se(),1);var HD=g(Fr(),1),KD=g(Ju(),1);var YD=g(se(),1);var an=g(Yw(),1);var Qw=g(pi(),1),Xw=g(Gt(),1);var as=g(vi(),1),Jw=g(Bt(),1);function rr(e,r){var t;return rr=as.default?(0,Jw.default)(t=as.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function os(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,Qw.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,Xw.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function Zw(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zw(e)}var rT=g(vi(),1),tT=g(Bt(),1),us=g(fi(),1);function wr(e){var r;return wr=rT.default?(0,tT.default)(r=us.default).call(r):function(t){return t.__proto__||(0,us.default)(t)},wr(e)}var Cs=g(CO(),1),YO=g(pi(),1);var GO=g(BO(),1);function UO(e){try{var r;return(0,GO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var HO=g(_i(),1),KO=g(Uu(),1),VO=g(Bt(),1);var WO=g(_i(),1);function Es(){try{var e=!Boolean.prototype.valueOf.call((0,WO.default)(Boolean,[],function(){}))}catch{}return(Es=function(){return!!e})()}function zO(e,r,t){if(Es())return HO.default.apply(null,arguments);var n=[null];(0,KO.default)(n).apply(n,r);var i=new((0,VO.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function nn(e){var r=typeof Cs.default=="function"?new Cs.default:void 0;return nn=function(n){if(n===null||!UO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return zO(n,arguments,wr(this).constructor)}return i.prototype=(0,YO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},nn(e)}function XO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=JO(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=JO(e.endContainer,e.endOffset),l=$e(s,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function JO(e,r){var t;if(QO(e))return[e,r];var n;if(bG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(QO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function QO(e){return e.nodeType===Node.TEXT_NODE}function bG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function eE(e){var r=qG();return function(){var n=wr(e),i;if(r){var o=wr(this).constructor;i=(0,an.default)(n,arguments,o)}else i=n.apply(this,arguments);return eT(this,i)}}function qG(){if(typeof Reflect>"u"||!an.default||an.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,an.default)(Boolean,[],function(){})),!0}catch{return!1}}var Li=function(e){os(t,e);var r=eE(t);function t(n){return xr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(nn(TypeError)),xG=function(e){os(t,e);var r=eE(t);function t(n){return xr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(nn(TypeError)),Tr=function(){function e(r){var t=this;if(xr(this,e),Sr(this,"scope",void 0),Sr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!ZO(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Li}}return en(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!ZO(t))throw new Li;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new xG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=XO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function ZO(e){return e.nodeType===Node.TEXT_NODE}function rE(e,r){return ks.apply(this,arguments)}function ks(){return ks=qr(Is.default.mark(function e(r,t){var n,i,o,u=arguments;return Is.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Tr(i),s.next=5,LS(o.rangeToChunkRange(r),function(){return new Tr(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),ks.apply(this,arguments)}var Ps=g(se(),1);function tE(e){var r=Pi(e);return function(){var t=Te(Ps.default.mark(function i(o){var u,c,s,l,f,p,v,d;return Ps.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Tr(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Li)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:c=!0,s=!1,h.prev=13,f=rt(r(u));case 15:return h.next=17,Xe(f.next());case 17:return p=h.sent,c=p.done,h.next=21,Xe(p.value);case 21:if(v=h.sent,c){h.next=29;break}return d=v,h.next=26,u.chunkRangeToRange(d);case 26:c=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),s=!0,l=h.t1;case 35:if(h.prev=35,h.prev=36,!(!c&&f.return!=null)){h.next=40;break}return h.next=40,Xe(f.return());case 40:if(h.prev=40,!s){h.next=43;break}throw l;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var SG=g(se(),1);var wG=g(se(),1);var RG=g(mE(),1),AG=g(Fr(),1),NG=g(_n(),1),MG=g(Vn(),1),jG=g(zn(),1),$G=g(Yn(),1);async function yE(e,r){let t=await rE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Fi(e,r){let t=tE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var tt="fb-highlight",gE="fb-highlight-active";var on=null;function qE(e){on=e}function Di(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=bE(e,r);t.push(n)}else{let n=FG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(bE(u,r))}}return t}function bE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return LG(e,r,o);let u=document.createElement("mark");u.className=tt,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{on&&on(r)});try{e.surroundContents(u)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return u}function LG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",tt),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let C=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",C.x),b.setAttribute("y",C.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),on&&on(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function _s(e){document.querySelectorAll(`.${tt}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function xE(){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Bi(e){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(gE):r.classList.remove(gE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function SE(e){let r=document.querySelector(`.${tt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function FG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}var DG=320,TE="feedback-layer-commenter",ae=null,Be=null,De=null,Rs=null,OE=null,As=null,Ns=null,Ms=null,js=null,$s=!1,EE=[],CE=new Set;function nt(){return localStorage.getItem(TE)||""}function IE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){OE=e,As=r,Ns=t,Ms=n,js=i,VG(),ae=document.createElement("div"),ae.className="fb-sidebar fb-sidebar-collapsed",ae.innerHTML=`
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
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>sn()),document.body.appendChild(o),document.body.appendChild(ae),Be=ae.querySelector(".fb-comment-list"),De=ae.querySelector(".fb-form-section");let u=ae.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(TE,u.value.trim())}),ae.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>BG());let s=ae.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{$s=s.checked,tr(EE,CE)})}function sn(){ae.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function BG(){ae.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function kE(e){if(sn(),!nt()){let n=ae.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Rs=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${un(HG(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!nt()){let i=ae.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(OE({comment:n,commenter:nt()}),De.style.display="none",Rs=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",Rs=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function GG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function tr(e,r=new Set,t=new Map){EE=e,CE=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=GG(e),o=n.slice().sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(l=>{let f=r.has(l.id),p=l.status==="closed";return f||p&&$s}),c=$s?u:u.filter(l=>l.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.appendChild(wE(l,!1));let p=i.get(l.id)||[];for(let d of p)f.appendChild(wE(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),UG(l.id,f,v)}),f.appendChild(v),Be.appendChild(f)}}function wE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${un(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${un(e.author)}</span>
      <span class="fb-cmt-time">${KG(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Bi(e.id),SE(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ns&&Ns(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),WG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),As&&As(e.id)}),n}function UG(e,r,t){sn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!nt()){let s=ae.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let c=i.querySelector("textarea").value.trim();c&&(Ms&&Ms({parent_id:e,comment:c,commenter:nt()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function WG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${un(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&js&&js(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function PE(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function HG(e,r){return e.length>r?e.slice(0,r)+"...":e}function KG(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function un(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}function VG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${DG}px;
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
  `,document.head.appendChild(e)}function _E(e,r){let t=zG(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function zG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}var YG=`
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
`,RE=null,AE=null;function NE(e,r){new URLSearchParams(window.location.search).get("author")==="true"&&(AE=e,RE=r,JG(),QG())}function JG(){let e=document.createElement("style");e.textContent=YG,document.head.appendChild(e)}function QG(){let e=document.createElement("button");e.className="hf-button",e.textContent="Send Feedback to Claude",e.addEventListener("click",()=>XG()),document.body.appendChild(e)}function XG(){let e=RE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(AE.contentSelector||"body").innerHTML,s=_E(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ZG(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function ZG(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}var it=null,Gi=null,Y=[],Or=null,Ee=null,ye=new Set,Ge=new Map;function eU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Ds(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{it=document.querySelector(r.contentSelector)||document.body,Gi=r.documentUri||window.location.origin+window.location.pathname,IE({onSubmit:aU,onDelete:cU,onResolve:oU,onReply:uU,onEdit:sU}),qE(i=>{sn(),PE(i),Bi(i)}),nU(),await t(),rU(),NE(r,()=>Y)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function rU(){try{Y=await Bs(Gi),ye=await tU(Y),tr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e)}}async function tU(e){xE();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&t.status!=="closed"?(Di(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function nU(){document.addEventListener("mouseup",ME),document.addEventListener("keyup",ME)}function ME(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){cn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){cn();return}if(!it.contains(r.commonAncestorContainer)){cn();return}iU(r)},10)}function iU(e){cn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.textContent="\u270E Annotate",Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Or=await yE(i,it),kE(Or.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}cn()}),document.body.appendChild(Ee)}function cn(){Ee&&(Ee.remove(),Ee=null)}async function aU({comment:e,commenter:r}){if(Or){try{let t=await Ui({uri:Gi,quote:Or.exact,prefix:Or.prefix,suffix:Or.suffix,body:e,author:r});Y.push(t);let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&(Di(n,t.id),ye.add(t.id)),tr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),alert("Failed to save comment: "+t.message)}Or=null}}async function oU(e,r){try{let n=await Us(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)_s(e);else{let o=n,u=await Fi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},it);u?(Di(u,o.id),ye.add(o.id)):ye.delete(o.id)}tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t)}}async function uU({parent_id:e,comment:r,commenter:t}){try{let n=await Ui({uri:Gi,body:r,author:t,parent:e});Y.push(n),tr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),alert("Failed to save reply: "+n.message)}}async function sU(e,r){try{let t=await Gs(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),alert("Failed to update comment: "+t.message)}}async function cU(e){try{await Ws(e),_s(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),tr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r)}}eU();})();
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
