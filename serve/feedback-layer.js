var FeedbackLayer=(()=>{var YC=Object.create;var Ws=Object.defineProperty;var JC=Object.getOwnPropertyDescriptor;var QC=Object.getOwnPropertyNames;var XC=Object.getPrototypeOf,ZC=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var eE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of QC(r))!ZC.call(e,i)&&i!==t&&Ws(e,i,{get:()=>r[i],enumerable:!(n=JC(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?YC(XC(e)):{},eE(r||!e||!e.__esModule?Ws(t,"default",{value:e,enumerable:!0}):t,e));var P=a((gU,Js)=>{"use strict";Js.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=a((bU,Qs)=>{"use strict";var rE=P();Qs.exports=!rE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((qU,ec)=>{"use strict";var Xs=Pr(),Zs=Function.prototype,Vi=Zs.call,tE=Xs&&Zs.bind.bind(Vi,Vi);ec.exports=Xs?tE:function(e){return function(){return Vi.apply(e,arguments)}}});var B=a((xU,rc)=>{"use strict";var nE=A();rc.exports=nE({}.isPrototypeOf)});var _=a((Yi,tc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};tc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Yi=="object"&&Yi)||function(){return this}()||Function("return this")()});var _r=a((SU,oc)=>{"use strict";var iE=Pr(),ac=Function.prototype,nc=ac.apply,ic=ac.call;oc.exports=typeof Reflect=="object"&&Reflect.apply||(iE?ic.bind(nc):function(){return ic.apply(nc,arguments)})});var qe=a((wU,sc)=>{"use strict";var uc=A(),aE=uc({}.toString),oE=uc("".slice);sc.exports=function(e){return oE(aE(e),8,-1)}});var ct=a((TU,cc)=>{"use strict";var uE=qe(),sE=A();cc.exports=function(e){if(uE(e)==="Function")return sE(e)}});var N=a((OU,lc)=>{"use strict";var Ji=typeof document=="object"&&document.all;lc.exports=typeof Ji>"u"&&Ji!==void 0?function(e){return typeof e=="function"||e===Ji}:function(e){return typeof e=="function"}});var G=a((CU,fc)=>{"use strict";var cE=P();fc.exports=!cE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((EU,pc)=>{"use strict";var lE=Pr(),vn=Function.prototype.call;pc.exports=lE?vn.bind(vn):function(){return vn.apply(vn,arguments)}});var Qi=a(mc=>{"use strict";var vc={}.propertyIsEnumerable,dc=Object.getOwnPropertyDescriptor,fE=dc&&!vc.call({1:2},1);mc.f=fE?function(r){var t=dc(this,r);return!!t&&t.enumerable}:vc});var He=a((kU,hc)=>{"use strict";hc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var dn=a((PU,yc)=>{"use strict";var pE=A(),vE=P(),dE=qe(),Xi=Object,mE=pE("".split);yc.exports=vE(function(){return!Xi("z").propertyIsEnumerable(0)})?function(e){return dE(e)==="String"?mE(e,""):Xi(e)}:Xi});var ir=a((_U,gc)=>{"use strict";gc.exports=function(e){return e==null}});var ar=a((RU,bc)=>{"use strict";var hE=ir(),yE=TypeError;bc.exports=function(e){if(hE(e))throw new yE("Can't call method on "+e);return e}});var Ee=a((AU,qc)=>{"use strict";var gE=dn(),bE=ar();qc.exports=function(e){return gE(bE(e))}});var $=a((NU,xc)=>{"use strict";var qE=N();xc.exports=function(e){return typeof e=="object"?e!==null:qE(e)}});var K=a((MU,Sc)=>{"use strict";Sc.exports={}});var U=a((jU,Tc)=>{"use strict";var Zi=K(),ea=_(),xE=N(),wc=function(e){return xE(e)?e:void 0};Tc.exports=function(e,r){return arguments.length<2?wc(Zi[e])||wc(ea[e]):Zi[e]&&Zi[e][r]||ea[e]&&ea[e][r]}});var Rr=a(($U,Ec)=>{"use strict";var SE=_(),Oc=SE.navigator,Cc=Oc&&Oc.userAgent;Ec.exports=Cc?String(Cc):""});var Ar=a((LU,Ac)=>{"use strict";var Rc=_(),ra=Rr(),Ic=Rc.process,kc=Rc.Deno,Pc=Ic&&Ic.versions||kc&&kc.version,_c=Pc&&Pc.v8,de,mn;_c&&(de=_c.split("."),mn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!mn&&ra&&(de=ra.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=ra.match(/Chrome\/(\d+)/),de&&(mn=+de[1])));Ac.exports=mn});var or=a((FU,Mc)=>{"use strict";var Nc=Ar(),wE=P(),TE=_(),OE=TE.String;Mc.exports=!!Object.getOwnPropertySymbols&&!wE(function(){var e=Symbol("symbol detection");return!OE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Nc&&Nc<41})});var ta=a((DU,jc)=>{"use strict";var CE=or();jc.exports=CE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=a((BU,$c)=>{"use strict";var EE=U(),IE=N(),kE=B(),PE=ta(),_E=Object;$c.exports=PE?function(e){return typeof e=="symbol"}:function(e){var r=EE("Symbol");return IE(r)&&kE(r.prototype,_E(e))}});var Ke=a((GU,Lc)=>{"use strict";var RE=String;Lc.exports=function(e){try{return RE(e)}catch{return"Object"}}});var F=a((UU,Fc)=>{"use strict";var AE=N(),NE=Ke(),ME=TypeError;Fc.exports=function(e){if(AE(e))return e;throw new ME(NE(e)+" is not a function")}});var hn=a((WU,Dc)=>{"use strict";var jE=F(),$E=ir();Dc.exports=function(e,r){var t=e[r];return $E(t)?void 0:jE(t)}});var Gc=a((HU,Bc)=>{"use strict";var na=D(),ia=N(),aa=$(),LE=TypeError;Bc.exports=function(e,r){var t,n;if(r==="string"&&ia(t=e.toString)&&!aa(n=na(t,e))||ia(t=e.valueOf)&&!aa(n=na(t,e))||r!=="string"&&ia(t=e.toString)&&!aa(n=na(t,e)))return n;throw new LE("Can't convert object to primitive value")}});var Z=a((KU,Uc)=>{"use strict";Uc.exports=!0});var Kc=a((zU,Hc)=>{"use strict";var Wc=_(),FE=Object.defineProperty;Hc.exports=function(e,r){try{FE(Wc,e,{value:r,configurable:!0,writable:!0})}catch{Wc[e]=r}return r}});var lt=a((VU,Yc)=>{"use strict";var DE=Z(),BE=_(),GE=Kc(),zc="__core-js_shared__",Vc=Yc.exports=BE[zc]||GE(zc,{});(Vc.versions||(Vc.versions=[])).push({version:"3.48.0",mode:DE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var ur=a((YU,Qc)=>{"use strict";var Jc=lt();Qc.exports=function(e,r){return Jc[e]||(Jc[e]=r||{})}});var re=a((JU,Xc)=>{"use strict";var UE=ar(),WE=Object;Xc.exports=function(e){return WE(UE(e))}});var W=a((QU,Zc)=>{"use strict";var HE=A(),KE=re(),zE=HE({}.hasOwnProperty);Zc.exports=Object.hasOwn||function(r,t){return zE(KE(r),t)}});var Mr=a((XU,el)=>{"use strict";var VE=A(),YE=0,JE=Math.random(),QE=VE(1.1.toString);el.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+QE(++YE+JE,36)}});var R=a((ZU,tl)=>{"use strict";var XE=_(),ZE=ur(),rl=W(),e0=Mr(),r0=or(),t0=ta(),jr=XE.Symbol,oa=ZE("wks"),n0=t0?jr.for||jr:jr&&jr.withoutSetter||e0;tl.exports=function(e){return rl(oa,e)||(oa[e]=r0&&rl(jr,e)?jr[e]:n0("Symbol."+e)),oa[e]}});var ol=a((e5,al)=>{"use strict";var i0=D(),nl=$(),il=Nr(),a0=hn(),o0=Gc(),u0=R(),s0=TypeError,c0=u0("toPrimitive");al.exports=function(e,r){if(!nl(e)||il(e))return e;var t=a0(e,c0),n;if(t){if(r===void 0&&(r="default"),n=i0(t,e,r),!nl(n)||il(n))return n;throw new s0("Can't convert object to primitive value")}return r===void 0&&(r="number"),o0(e,r)}});var yn=a((r5,ul)=>{"use strict";var l0=ol(),f0=Nr();ul.exports=function(e){var r=l0(e,"string");return f0(r)?r:r+""}});var gn=a((t5,cl)=>{"use strict";var p0=_(),sl=$(),ua=p0.document,v0=sl(ua)&&sl(ua.createElement);cl.exports=function(e){return v0?ua.createElement(e):{}}});var sa=a((n5,ll)=>{"use strict";var d0=G(),m0=P(),h0=gn();ll.exports=!d0&&!m0(function(){return Object.defineProperty(h0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(pl=>{"use strict";var y0=G(),g0=D(),b0=Qi(),q0=He(),x0=Ee(),S0=yn(),w0=W(),T0=sa(),fl=Object.getOwnPropertyDescriptor;pl.f=y0?fl:function(r,t){if(r=x0(r),t=S0(t),T0)try{return fl(r,t)}catch{}if(w0(r,t))return q0(!g0(b0.f,r,t),r[t])}});var ca=a((a5,vl)=>{"use strict";var O0=P(),C0=N(),E0=/#|\.prototype\./,pt=function(e,r){var t=k0[I0(e)];return t===_0?!0:t===P0?!1:C0(r)?O0(r):!!r},I0=pt.normalize=function(e){return String(e).replace(E0,".").toLowerCase()},k0=pt.data={},P0=pt.NATIVE="N",_0=pt.POLYFILL="P";vl.exports=pt});var z=a((o5,ml)=>{"use strict";var dl=ct(),R0=F(),A0=Pr(),N0=dl(dl.bind);ml.exports=function(e,r){return R0(e),r===void 0?e:A0?N0(e,r):function(){return e.apply(r,arguments)}}});var la=a((u5,hl)=>{"use strict";var M0=G(),j0=P();hl.exports=M0&&j0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((s5,yl)=>{"use strict";var $0=$(),L0=String,F0=TypeError;yl.exports=function(e){if($0(e))return e;throw new F0(L0(e)+" is not an object")}});var te=a(bl=>{"use strict";var D0=G(),B0=sa(),G0=la(),bn=Q(),gl=yn(),U0=TypeError,fa=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,pa="enumerable",va="configurable",da="writable";bl.f=D0?G0?function(r,t,n){if(bn(r),t=gl(t),bn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&da in n&&!n[da]){var i=W0(r,t);i&&i[da]&&(r[t]=n.value,n={configurable:va in n?n[va]:i[va],enumerable:pa in n?n[pa]:i[pa],writable:!1})}return fa(r,t,n)}:fa:function(r,t,n){if(bn(r),t=gl(t),bn(n),B0)try{return fa(r,t,n)}catch{}if("get"in n||"set"in n)throw new U0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((l5,ql)=>{"use strict";var H0=G(),K0=te(),z0=He();ql.exports=H0?function(e,r,t){return K0.f(e,r,z0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((f5,Sl)=>{"use strict";var vt=_(),V0=_r(),Y0=ct(),J0=N(),Q0=ft().f,X0=ca(),$r=K(),Z0=z(),Lr=xe(),xl=W();lt();var eI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return V0(e,this,arguments)};return r.prototype=e.prototype,r};Sl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,l=n?$r:$r[t]||Lr($r,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=X0(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&xl(u,v),h=l[v],f&&(e.dontCallGetSet?(q=Q0(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=Z0(d,vt):e.wrap&&f?y=eI(d):o&&J0(d)?y=Y0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(y,"sham",!0),Lr(l,v,y),o&&(p=t+"Prototype",xl($r,p)||Lr($r,p,{}),Lr($r[p],v,d),e.real&&c&&(s||!c[v])&&Lr(c,v,d)))}});var Ie=a((p5,wl)=>{"use strict";var rI=qe();wl.exports=Array.isArray||function(r){return rI(r)==="Array"}});var qn=a((v5,Ol)=>{"use strict";var tI=R(),nI=tI("toStringTag"),Tl={};Tl[nI]="z";Ol.exports=String(Tl)==="[object z]"});var dt=a((d5,Cl)=>{"use strict";var iI=qn(),aI=N(),xn=qe(),oI=R(),uI=oI("toStringTag"),sI=Object,cI=xn(function(){return arguments}())==="Arguments",lI=function(e,r){try{return e[r]}catch{}};Cl.exports=iI?xn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=lI(r=sI(e),uI))=="string"?t:cI?xn(r):(n=xn(r))==="Object"&&aI(r.callee)?"Arguments":n}});var ha=a((m5,El)=>{"use strict";var fI=A(),pI=N(),ma=lt(),vI=fI(Function.toString);pI(ma.inspectSource)||(ma.inspectSource=function(e){return vI(e)});El.exports=ma.inspectSource});var ht=a((h5,Rl)=>{"use strict";var dI=A(),mI=P(),Il=N(),hI=dt(),yI=U(),gI=ha(),kl=function(){},Pl=yI("Reflect","construct"),ya=/^\s*(?:class|function)\b/,bI=dI(ya.exec),qI=!ya.test(kl),mt=function(r){if(!Il(r))return!1;try{return Pl(kl,[],r),!0}catch{return!1}},_l=function(r){if(!Il(r))return!1;switch(hI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return qI||!!bI(ya,gI(r))}catch{return!0}};_l.sham=!0;Rl.exports=!Pl||mI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?_l:mt});var Nl=a((y5,Al)=>{"use strict";var xI=Math.ceil,SI=Math.floor;Al.exports=Math.trunc||function(r){var t=+r;return(t>0?SI:xI)(t)}});var Sn=a((g5,Ml)=>{"use strict";var wI=Nl();Ml.exports=function(e){var r=+e;return r!==r||r===0?0:wI(r)}});var ga=a((b5,jl)=>{"use strict";var TI=Sn(),OI=Math.max,CI=Math.min;jl.exports=function(e,r){var t=TI(e);return t<0?OI(t+r,0):CI(t,r)}});var ba=a((q5,$l)=>{"use strict";var EI=Sn(),II=Math.min;$l.exports=function(e){var r=EI(e);return r>0?II(r,9007199254740991):0}});var le=a((x5,Ll)=>{"use strict";var kI=ba();Ll.exports=function(e){return kI(e.length)}});var Fr=a((S5,Fl)=>{"use strict";var PI=G(),_I=te(),RI=He();Fl.exports=function(e,r,t){PI?_I.f(e,r,RI(0,t)):e[r]=t}});var Dr=a((w5,Dl)=>{"use strict";var AI=G(),NI=Ie(),MI=TypeError,jI=Object.getOwnPropertyDescriptor,$I=AI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Dl.exports=$I?function(e,r){if(NI(e)&&!jI(e,"length").writable)throw new MI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((T5,Bl)=>{"use strict";var LI=P(),FI=R(),DI=Ar(),BI=FI("species");Bl.exports=function(e){return DI>=51||!LI(function(){var r=[],t=r.constructor={};return t[BI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var sr=a((O5,Gl)=>{"use strict";var GI=A();Gl.exports=GI([].slice)});var Hl=a(()=>{"use strict";var UI=x(),Ul=Ie(),WI=ht(),HI=$(),Wl=ga(),KI=le(),zI=Ee(),VI=Fr(),YI=Dr(),JI=R(),QI=yt(),XI=sr(),ZI=QI("slice"),ek=JI("species"),qa=Array,rk=Math.max;UI({target:"Array",proto:!0,forced:!ZI},{slice:function(r,t){var n=zI(this),i=KI(n),o=Wl(r,i),u=Wl(t===void 0?i:t,i),l,c,s;if(Ul(n)&&(l=n.constructor,WI(l)&&(l===qa||Ul(l.prototype))?l=void 0:HI(l)&&(l=l[ek],l===null&&(l=void 0)),l===qa||l===void 0))return XI(n,o,u);for(c=new(l===void 0?qa:l)(rk(u-o,0)),s=0;o<u;o++,s++)o in n&&VI(c,s,n[o]);return YI(c,s),c}})});var oe=a((I5,Kl)=>{"use strict";var tk=_(),nk=K();Kl.exports=function(e,r){var t=nk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=tk[e],o=i&&i.prototype;return o&&o[r]}});var Vl=a((k5,zl)=>{"use strict";Hl();var ik=oe();zl.exports=ik("Array","slice")});var Jl=a((P5,Yl)=>{"use strict";var ak=B(),ok=Vl(),xa=Array.prototype;Yl.exports=function(e){var r=e.slice;return e===xa||ak(xa,e)&&r===xa.slice?ok:r}});var Xl=a((_5,Ql)=>{"use strict";var uk=Jl();Ql.exports=uk});var ef=a((R5,Zl)=>{"use strict";var sk=Xl();Zl.exports=sk});var tf=a((A5,rf)=>{"use strict";var ck=ef();rf.exports=ck});var Sa=a((N5,nf)=>{"use strict";nf.exports=tf()});var Br=a((M5,af)=>{af.exports=Sa()});var ze=a((j5,of)=>{"use strict";var lk=dt(),fk=String;of.exports=function(e){if(lk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return fk(e)}});var lf=a(($5,cf)=>{"use strict";var wa=A(),pk=Sn(),vk=ze(),dk=ar(),mk=wa("".charAt),uf=wa("".charCodeAt),hk=wa("".slice),sf=function(e){return function(r,t){var n=vk(dk(r)),i=pk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=uf(n,i),u<55296||u>56319||i+1===o||(l=uf(n,i+1))<56320||l>57343?e?mk(n,i):u:e?hk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};cf.exports={codeAt:sf(!1),charAt:sf(!0)}});var vf=a((L5,pf)=>{"use strict";var yk=_(),gk=N(),ff=yk.WeakMap;pf.exports=gk(ff)&&/native code/.test(String(ff))});var gt=a((F5,mf)=>{"use strict";var bk=ur(),qk=Mr(),df=bk("keys");mf.exports=function(e){return df[e]||(df[e]=qk(e))}});var Gr=a((D5,hf)=>{"use strict";hf.exports={}});var Ve=a((B5,bf)=>{"use strict";var xk=vf(),gf=_(),Sk=$(),wk=xe(),Ta=W(),Oa=lt(),Tk=gt(),Ok=Gr(),yf="Object already initialized",Ca=gf.TypeError,Ck=gf.WeakMap,wn,bt,Tn,Ek=function(e){return Tn(e)?bt(e):wn(e,{})},Ik=function(e){return function(r){var t;if(!Sk(r)||(t=bt(r)).type!==e)throw new Ca("Incompatible receiver, "+e+" required");return t}};xk||Oa.state?(me=Oa.state||(Oa.state=new Ck),me.get=me.get,me.has=me.has,me.set=me.set,wn=function(e,r){if(me.has(e))throw new Ca(yf);return r.facade=e,me.set(e,r),r},bt=function(e){return me.get(e)||{}},Tn=function(e){return me.has(e)}):(cr=Tk("state"),Ok[cr]=!0,wn=function(e,r){if(Ta(e,cr))throw new Ca(yf);return r.facade=e,wk(e,cr,r),r},bt=function(e){return Ta(e,cr)?e[cr]:{}},Tn=function(e){return Ta(e,cr)});var me,cr;bf.exports={set:wn,get:bt,has:Tn,enforce:Ek,getterFor:Ik}});var Sf=a((G5,xf)=>{"use strict";var Ea=G(),kk=W(),qf=Function.prototype,Pk=Ea&&Object.getOwnPropertyDescriptor,Ia=kk(qf,"name"),_k=Ia&&function(){}.name==="something",Rk=Ia&&(!Ea||Ea&&Pk(qf,"name").configurable);xf.exports={EXISTS:Ia,PROPER:_k,CONFIGURABLE:Rk}});var ka=a((U5,Tf)=>{"use strict";var Ak=Ee(),Nk=ga(),Mk=le(),wf=function(e){return function(r,t,n){var i=Ak(r),o=Mk(i);if(o===0)return!e&&-1;var u=Nk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Tf.exports={includes:wf(!0),indexOf:wf(!1)}});var _a=a((W5,Cf)=>{"use strict";var jk=A(),Pa=W(),$k=Ee(),Lk=ka().indexOf,Fk=Gr(),Of=jk([].push);Cf.exports=function(e,r){var t=$k(e),n=0,i=[],o;for(o in t)!Pa(Fk,o)&&Pa(t,o)&&Of(i,o);for(;r.length>n;)Pa(t,o=r[n++])&&(~Lk(i,o)||Of(i,o));return i}});var On=a((H5,Ef)=>{"use strict";Ef.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Cn=a((K5,If)=>{"use strict";var Dk=_a(),Bk=On();If.exports=Object.keys||function(r){return Dk(r,Bk)}});var Ra=a(kf=>{"use strict";var Gk=G(),Uk=la(),Wk=te(),Hk=Q(),Kk=Ee(),zk=Cn();kf.f=Gk&&!Uk?Object.defineProperties:function(r,t){Hk(r);for(var n=Kk(t),i=zk(t),o=i.length,u=0,l;o>u;)Wk.f(r,l=i[u++],n[l]);return r}});var Aa=a((V5,Pf)=>{"use strict";var Vk=U();Pf.exports=Vk("document","documentElement")});var Ye=a((Y5,$f)=>{"use strict";var Yk=Q(),Jk=Ra(),_f=On(),Qk=Gr(),Xk=Aa(),Zk=gn(),e1=gt(),Rf=">",Af="<",Ma="prototype",ja="script",Mf=e1("IE_PROTO"),Na=function(){},jf=function(e){return Af+ja+Rf+e+Af+"/"+ja+Rf},Nf=function(e){e.write(jf("")),e.close();var r=e.parentWindow.Object;return e=null,r},r1=function(){var e=Zk("iframe"),r="java"+ja+":",t;return e.style.display="none",Xk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(jf("document.F=Object")),t.close(),t.F},En,In=function(){try{En=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&En?Nf(En):r1():Nf(En);for(var e=_f.length;e--;)delete In[Ma][_f[e]];return In()};Qk[Mf]=!0;$f.exports=Object.create||function(r,t){var n;return r!==null?(Na[Ma]=Yk(r),n=new Na,Na[Ma]=null,n[Mf]=r):n=In(),t===void 0?n:Jk.f(n,t)}});var $a=a((J5,Lf)=>{"use strict";var t1=P();Lf.exports=!t1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((Q5,Df)=>{"use strict";var n1=W(),i1=N(),a1=re(),o1=gt(),u1=$a(),Ff=o1("IE_PROTO"),La=Object,s1=La.prototype;Df.exports=u1?La.getPrototypeOf:function(e){var r=a1(e);if(n1(r,Ff))return r[Ff];var t=r.constructor;return i1(t)&&r instanceof t?t.prototype:r instanceof La?s1:null}});var ke=a((X5,Bf)=>{"use strict";var c1=xe();Bf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:c1(e,r,t),e}});var Ga=a((Z5,Wf)=>{"use strict";var l1=P(),f1=N(),p1=$(),v1=Ye(),Gf=qt(),d1=ke(),m1=R(),h1=Z(),Ba=m1("iterator"),Uf=!1,Pe,Fa,Da;[].keys&&(Da=[].keys(),"next"in Da?(Fa=Gf(Gf(Da)),Fa!==Object.prototype&&(Pe=Fa)):Uf=!0);var y1=!p1(Pe)||l1(function(){var e={};return Pe[Ba].call(e)!==e});y1?Pe={}:h1&&(Pe=v1(Pe));f1(Pe[Ba])||d1(Pe,Ba,function(){return this});Wf.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Uf}});var Kf=a((eW,Hf)=>{"use strict";var g1=qn(),b1=dt();Hf.exports=g1?{}.toString:function(){return"[object "+b1(this)+"]"}});var _e=a((rW,Vf)=>{"use strict";var q1=qn(),x1=te().f,S1=xe(),w1=W(),T1=Kf(),O1=R(),zf=O1("toStringTag");Vf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(w1(i,zf)||x1(i,zf,{configurable:!0,value:r}),n&&!q1&&S1(i,"toString",T1))}});var lr=a((tW,Yf)=>{"use strict";Yf.exports={}});var Qf=a((nW,Jf)=>{"use strict";var C1=Ga().IteratorPrototype,E1=Ye(),I1=He(),k1=_e(),P1=lr(),_1=function(){return this};Jf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=E1(C1,{next:I1(+!n,t)}),k1(e,i,!1,!0),P1[i]=_1,e}});var Zf=a((iW,Xf)=>{"use strict";var R1=A(),A1=F();Xf.exports=function(e,r,t){try{return R1(A1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var rp=a((aW,ep)=>{"use strict";var N1=$();ep.exports=function(e){return N1(e)||e===null}});var np=a((oW,tp)=>{"use strict";var M1=rp(),j1=String,$1=TypeError;tp.exports=function(e){if(M1(e))return e;throw new $1("Can't set "+j1(e)+" as a prototype")}});var xt=a((uW,ip)=>{"use strict";var L1=Zf(),F1=$(),D1=ar(),B1=np();ip.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=L1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return D1(i),B1(o),F1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var _n=a((sW,dp)=>{"use strict";var G1=x(),U1=D(),kn=Z(),pp=Sf(),W1=N(),H1=Qf(),ap=qt(),op=xt(),K1=_e(),z1=xe(),Ua=ke(),V1=R(),up=lr(),vp=Ga(),Y1=pp.PROPER,J1=pp.CONFIGURABLE,sp=vp.IteratorPrototype,Pn=vp.BUGGY_SAFARI_ITERATORS,St=V1("iterator"),cp="keys",wt="values",lp="entries",fp=function(){return this};dp.exports=function(e,r,t,n,i,o,u){H1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Pn&&q&&q in f)return f[q];switch(q){case cp:return function(){return new t(this,q)};case wt:return function(){return new t(this,q)};case lp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[St]||f["@@iterator"]||i&&f[i],v=!Pn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=ap(d.call(new e)),h!==Object.prototype&&h.next&&(!kn&&ap(h)!==sp&&(op?op(h,sp):W1(h[St])||Ua(h,St,fp)),K1(h,c,!0,!0),kn&&(up[c]=fp))),Y1&&i===wt&&p&&p.name!==wt&&(!kn&&J1?z1(f,"name",wt):(s=!0,v=function(){return U1(p,this)})),i)if(m={values:l(wt),keys:o?v:l(cp),entries:l(lp)},u)for(y in m)(Pn||s||!(y in f))&&Ua(f,y,m[y]);else G1({target:r,proto:!0,forced:Pn||s},m);return(!kn||u)&&f[St]!==v&&Ua(f,St,v,{name:i}),up[r]=v,m}});var Rn=a((cW,mp)=>{"use strict";mp.exports=function(e,r){return{value:e,done:r}}});var fr=a(()=>{"use strict";var Q1=lf().charAt,X1=ze(),yp=Ve(),Z1=_n(),hp=Rn(),gp="String Iterator",eP=yp.set,rP=yp.getterFor(gp);Z1(String,"String",function(e){eP(this,{type:gp,string:X1(e),index:0})},function(){var r=rP(this),t=r.string,n=r.index,i;return n>=t.length?hp(void 0,!0):(i=Q1(t,n),r.index+=i.length,hp(i,!1))})});var Wa=a((pW,qp)=>{"use strict";var tP=D(),bp=Q(),nP=hn();qp.exports=function(e,r,t){var n,i;bp(e);try{if(n=nP(e,"return"),!n){if(r==="throw")throw t;return t}n=tP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return bp(n),t}});var Sp=a((vW,xp)=>{"use strict";var iP=Q(),aP=Wa();xp.exports=function(e,r,t,n){try{return n?r(iP(t)[0],t[1]):r(t)}catch(i){aP(e,"throw",i)}}});var Ha=a((dW,wp)=>{"use strict";var oP=R(),uP=lr(),sP=oP("iterator"),cP=Array.prototype;wp.exports=function(e){return e!==void 0&&(uP.Array===e||cP[sP]===e)}});var Tt=a((mW,Op)=>{"use strict";var lP=dt(),Tp=hn(),fP=ir(),pP=lr(),vP=R(),dP=vP("iterator");Op.exports=function(e){if(!fP(e))return Tp(e,dP)||Tp(e,"@@iterator")||pP[lP(e)]}});var An=a((hW,Cp)=>{"use strict";var mP=D(),hP=F(),yP=Q(),gP=Ke(),bP=Tt(),qP=TypeError;Cp.exports=function(e,r){var t=arguments.length<2?bP(e):r;if(hP(t))return yP(mP(t,e));throw new qP(gP(e)+" is not iterable")}});var Pp=a((yW,kp)=>{"use strict";var xP=z(),SP=D(),wP=re(),TP=Sp(),OP=Ha(),CP=ht(),EP=le(),Ep=Fr(),IP=Dr(),kP=An(),PP=Tt(),Ip=Array;kp.exports=function(r){var t=wP(r),n=CP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=xP(o,i>2?arguments[2]:void 0));var l=PP(t),c=0,s,f,p,v,d,h;if(l&&!(this===Ip&&OP(l)))for(f=n?new this:[],v=kP(t,l),d=v.next;!(p=SP(d,v)).done;c++)h=u?TP(v,o,[p.value,c],!0):p.value,Ep(f,c,h);else for(s=EP(t),f=n?new this(s):Ip(s);s>c;c++)h=u?o(t[c],c):t[c],Ep(f,c,h);return IP(f,c),f}});var za=a((gW,Np)=>{"use strict";var _P=R(),Rp=_P("iterator"),Ap=!1;try{_p=0,Ka={next:function(){return{done:!!_p++}},return:function(){Ap=!0}},Ka[Rp]=function(){return this},Array.from(Ka,function(){throw 2})}catch{}var _p,Ka;Np.exports=function(e,r){try{if(!r&&!Ap)return!1}catch{return!1}var t=!1;try{var n={};n[Rp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Mp=a(()=>{"use strict";var RP=x(),AP=Pp(),NP=za(),MP=!NP(function(e){Array.from(e)});RP({target:"Array",stat:!0,forced:MP},{from:AP})});var $p=a((xW,jp)=>{"use strict";fr();Mp();var jP=K();jp.exports=jP.Array.from});var Fp=a((SW,Lp)=>{"use strict";var $P=$p();Lp.exports=$P});var Bp=a((wW,Dp)=>{"use strict";var LP=Fp();Dp.exports=LP});var Up=a((TW,Gp)=>{"use strict";var FP=Bp();Gp.exports=FP});var Va=a((OW,Wp)=>{"use strict";Wp.exports=Up()});var Nn=a((CW,Hp)=>{Hp.exports=Va()});var Ot=a((EW,Kp)=>{"use strict";var DP=TypeError,BP=9007199254740991;Kp.exports=function(e){if(e>BP)throw DP("Maximum allowed index exceeded");return e}});var Jp=a((IW,Yp)=>{"use strict";var zp=Ie(),GP=ht(),UP=$(),WP=R(),HP=WP("species"),Vp=Array;Yp.exports=function(e){var r;return zp(e)&&(r=e.constructor,GP(r)&&(r===Vp||zp(r.prototype))?r=void 0:UP(r)&&(r=r[HP],r===null&&(r=void 0))),r===void 0?Vp:r}});var Mn=a((kW,Qp)=>{"use strict";var KP=Jp();Qp.exports=function(e,r){return new(KP(e))(r===0?0:r)}});var Ya=a(()=>{"use strict";var zP=x(),VP=P(),YP=Ie(),JP=$(),QP=re(),XP=le(),Xp=Ot(),Zp=Fr(),ZP=Dr(),e_=Mn(),r_=yt(),t_=R(),n_=Ar(),ev=t_("isConcatSpreadable"),i_=n_>=51||!VP(function(){var e=[];return e[ev]=!1,e.concat()[0]!==e}),a_=function(e){if(!JP(e))return!1;var r=e[ev];return r!==void 0?!!r:YP(e)},o_=!i_||!r_("concat");zP({target:"Array",proto:!0,arity:1,forced:o_},{concat:function(r){var t=QP(this),n=e_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],a_(s))for(c=XP(s),Xp(i+c),u=0;u<c;u++,i++)u in s&&Zp(n,i,s[u]);else Xp(i+1),Zp(n,i++,s);return ZP(n,i),n}})});var Ct=a(()=>{});var Et=a(rv=>{"use strict";var u_=_a(),s_=On(),c_=s_.concat("length","prototype");rv.f=Object.getOwnPropertyNames||function(r){return u_(r,c_)}});var Ja=a((MW,iv)=>{"use strict";var l_=qe(),f_=Ee(),tv=Et().f,p_=sr(),nv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],v_=function(e){try{return tv(e)}catch{return p_(nv)}};iv.exports.f=function(r){return nv&&l_(r)==="Window"?v_(r):tv(f_(r))}});var jn=a(av=>{"use strict";av.f=Object.getOwnPropertySymbols});var $n=a(($W,ov)=>{"use strict";var d_=te();ov.exports=function(e,r,t){return d_.f(e,r,t)}});var Ur=a(uv=>{"use strict";var m_=R();uv.f=m_});var M=a((FW,cv)=>{"use strict";var sv=K(),h_=W(),y_=Ur(),g_=te().f;cv.exports=function(e){var r=sv.Symbol||(sv.Symbol={});h_(r,e)||g_(r,e,{value:y_.f(e)})}});var Qa=a((DW,lv)=>{"use strict";var b_=D(),q_=U(),x_=R(),S_=ke();lv.exports=function(){var e=q_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=x_("toPrimitive");r&&!r[n]&&S_(r,n,function(i){return b_(t,this)},{arity:1})}});var It=a((BW,pv)=>{"use strict";var w_=z(),T_=dn(),O_=re(),C_=le(),fv=Mn(),Xa=Fr(),Je=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=O_(c),v=T_(p),d=C_(v),h=w_(s,f),m=0,y=0,q=r?fv(c,d):t||u?fv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)Xa(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:Xa(q,y++,b)}else switch(e){case 4:return!1;case 7:Xa(q,y++,b)}return o?-1:n||i?i:q}};pv.exports={forEach:Je(0),map:Je(1),filter:Je(2),some:Je(3),every:Je(4),find:Je(5),findIndex:Je(6),filterReject:Je(7)}});var kv=a(()=>{"use strict";var Ln=x(),_t=_(),uo=D(),E_=A(),I_=Z(),Wr=G(),Hr=or(),k_=P(),H=W(),P_=B(),to=Q(),Fn=Ee(),so=yn(),__=ze(),no=He(),Kr=Ye(),mv=Cn(),R_=Et(),hv=Ja(),A_=jn(),yv=ft(),gv=te(),N_=Ra(),bv=Qi(),Za=ke(),M_=$n(),co=ur(),j_=gt(),qv=Gr(),vv=Mr(),$_=R(),L_=Ur(),F_=M(),D_=Qa(),B_=_e(),xv=Ve(),Dn=It().forEach,ne=j_("hidden"),Bn="Symbol",Pt="prototype",G_=xv.set,dv=xv.getterFor(Bn),fe=Object[Pt],pr=_t.Symbol,kt=pr&&pr[Pt],U_=_t.RangeError,W_=_t.TypeError,eo=_t.QObject,Sv=yv.f,vr=gv.f,wv=hv.f,H_=bv.f,Tv=E_([].push),Re=co("symbols"),Rt=co("op-symbols"),K_=co("wks"),io=!eo||!eo[Pt]||!eo[Pt].findChild,Ov=function(e,r,t){var n=Sv(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},ao=Wr&&k_(function(){return Kr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?Ov:vr,ro=function(e,r){var t=Re[e]=Kr(kt);return G_(t,{type:Bn,tag:e,description:r}),Wr||(t.description=r),t},Gn=function(r,t,n){r===fe&&Gn(Rt,t,n),to(r);var i=so(t);return to(n),H(Re,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Kr(n,{enumerable:no(0,!1)})):(H(r,ne)||vr(r,ne,no(1,Kr(null))),r[ne][i]=!0),ao(r,i,n)):vr(r,i,n)},lo=function(r,t){to(r);var n=Fn(t),i=mv(n).concat(Iv(n));return Dn(i,function(o){(!Wr||uo(oo,n,o))&&Gn(r,o,n[o])}),r},z_=function(r,t){return t===void 0?Kr(r):lo(Kr(r),t)},oo=function(r){var t=so(r),n=uo(H_,this,t);return this===fe&&H(Re,t)&&!H(Rt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,ne)&&this[ne][t]?n:!0},Cv=function(r,t){var n=Fn(r),i=so(t);if(!(n===fe&&H(Re,i)&&!H(Rt,i))){var o=Sv(n,i);return o&&H(Re,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Ev=function(r){var t=wv(Fn(r)),n=[];return Dn(t,function(i){!H(Re,i)&&!H(qv,i)&&Tv(n,i)}),n},Iv=function(e){var r=e===fe,t=wv(r?Rt:Fn(e)),n=[];return Dn(t,function(i){H(Re,i)&&(!r||H(fe,i))&&Tv(n,Re[i])}),n};Hr||(pr=function(){if(P_(kt,this))throw new W_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:__(arguments[0]),t=vv(r),n=function(i){var o=this===void 0?_t:this;o===fe&&uo(n,Rt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=no(1,i);try{ao(o,t,u)}catch(l){if(!(l instanceof U_))throw l;Ov(o,t,u)}};return Wr&&io&&ao(fe,t,{configurable:!0,set:n}),ro(t,r)},kt=pr[Pt],Za(kt,"toString",function(){return dv(this).tag}),Za(pr,"withoutSetter",function(e){return ro(vv(e),e)}),bv.f=oo,gv.f=Gn,N_.f=lo,yv.f=Cv,R_.f=hv.f=Ev,A_.f=Iv,L_.f=function(e){return ro($_(e),e)},Wr&&(M_(kt,"description",{configurable:!0,get:function(){return dv(this).description}}),I_||Za(fe,"propertyIsEnumerable",oo,{unsafe:!0})));Ln({global:!0,constructor:!0,wrap:!0,forced:!Hr,sham:!Hr},{Symbol:pr});Dn(mv(K_),function(e){F_(e)});Ln({target:Bn,stat:!0,forced:!Hr},{useSetter:function(){io=!0},useSimple:function(){io=!1}});Ln({target:"Object",stat:!0,forced:!Hr,sham:!Wr},{create:z_,defineProperty:Gn,defineProperties:lo,getOwnPropertyDescriptor:Cv});Ln({target:"Object",stat:!0,forced:!Hr},{getOwnPropertyNames:Ev});D_();B_(pr,Bn);qv[ne]=!0});var fo=a((WW,Pv)=>{"use strict";var V_=or();Pv.exports=V_&&!!Symbol.for&&!!Symbol.keyFor});var Rv=a(()=>{"use strict";var Y_=x(),J_=U(),Q_=W(),X_=ze(),_v=ur(),Z_=fo(),po=_v("string-to-symbol-registry"),eR=_v("symbol-to-string-registry");Y_({target:"Symbol",stat:!0,forced:!Z_},{for:function(e){var r=X_(e);if(Q_(po,r))return po[r];var t=J_("Symbol")(r);return po[r]=t,eR[t]=r,t}})});var Nv=a(()=>{"use strict";var rR=x(),tR=W(),nR=Nr(),iR=Ke(),aR=ur(),oR=fo(),Av=aR("symbol-to-string-registry");rR({target:"Symbol",stat:!0,forced:!oR},{keyFor:function(r){if(!nR(r))throw new TypeError(iR(r)+" is not a symbol");if(tR(Av,r))return Av[r]}})});var jv=a((YW,Mv)=>{"use strict";var uR=$(),sR=Ve().get;Mv.exports=function(r){if(!uR(r))return!1;var t=sR(r);return!!t&&t.type==="RawJSON"}});var Bv=a((JW,Dv)=>{"use strict";var vo=A(),cR=W(),Un=SyntaxError,lR=parseInt,fR=String.fromCharCode,pR=vo("".charAt),$v=vo("".slice),Lv=vo(/./.exec),Fv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},vR=/^[\da-f]{4}$/i,dR=/^[\u0000-\u001F]$/;Dv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=pR(e,r);if(i==="\\"){var o=$v(e,r,r+2);if(cR(Fv,o))n+=Fv[o],r+=2;else if(o==="\\u"){r+=2;var u=$v(e,r,r+4);if(!Lv(vR,u))throw new Un("Bad Unicode escape at: "+r);n+=fR(lR(u,16)),r+=4}else throw new Un('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Lv(dR,i))throw new Un("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Un("Unterminated string at: "+r);return{value:n,end:r}}});var Uv=a((QW,Gv)=>{"use strict";var mR=P();Gv.exports=!mR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var nd=a(()=>{"use strict";var hR=x(),Qv=U(),yR=_r(),Xv=D(),dr=A(),Zv=P(),Wv=Ie(),Hn=N(),gR=jv(),Hv=Nr(),Kv=qe(),bR=ze(),qR=sr(),xR=Bv(),SR=Mr(),wR=or(),mo=Uv(),ed=String,Qe=Qv("JSON","stringify"),Wn=dr(/./.exec),yo=dr("".charAt),TR=dr("".charCodeAt),OR=dr("".replace),ho=dr("".slice),go=dr([].push),CR=dr(1.1.toString),ER=/[\uD800-\uDFFF]/g,zv=/^[\uD800-\uDBFF]$/,Vv=/^[\uDC00-\uDFFF]$/,bo=SR(),Yv=bo.length,rd=!wR||Zv(function(){var e=Qv("Symbol")("stringify detection");return Qe([e])!=="[null]"||Qe({a:e})!=="{}"||Qe(Object(e))!=="{}"}),Jv=Zv(function(){return Qe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Qe("\uDEAD")!=='"\\udead"'}),IR=rd?function(e,r){var t=qR(arguments),n=td(r);if(!(!Hn(n)&&(e===void 0||Hv(e))))return t[1]=function(i,o){if(Hn(n)&&(o=Xv(n,this,ed(i),o)),!Hv(o))return o},yR(Qe,null,t)}:Qe,kR=function(e,r,t){var n=yo(t,r-1),i=yo(t,r+1);return Wn(zv,e)&&!Wn(Vv,i)||Wn(Vv,e)&&!Wn(zv,n)?"\\u"+CR(TR(e,0),16):e},td=function(e){if(Hn(e))return e;if(Wv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?go(t,i):(typeof i=="number"||Kv(i)==="Number"||Kv(i)==="String")&&go(t,bR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Wv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Qe&&hR({target:"JSON",stat:!0,arity:3,forced:rd||Jv||!mo},{stringify:function(r,t,n){var i=td(t),o=[],u=IR(r,function(d,h){var m=Hn(i)?Xv(i,this,ed(d),h):h;return!mo&&gR(m)?bo+(go(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Jv&&(u=OR(u,ER,kR)),mo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=yo(u,s);if(f==='"'){var p=xR(u,++s).end-1,v=ho(u,s,p);l+=ho(v,0,Yv)===bo?o[ho(v,Yv)]:'"'+v+'"',s=p}else l+=f}return l}})});var ad=a(()=>{"use strict";var PR=x(),_R=or(),RR=P(),id=jn(),AR=re(),NR=!_R||RR(function(){id.f(1)});PR({target:"Object",stat:!0,forced:NR},{getOwnPropertySymbols:function(r){var t=id.f;return t?t(AR(r)):[]}})});var od=a(()=>{"use strict";kv();Rv();Nv();nd();ad()});var qo=a(()=>{"use strict";var MR=M();MR("asyncDispose")});var xo=a(()=>{"use strict";var jR=M();jR("asyncIterator")});var ud=a(()=>{});var So=a(()=>{"use strict";var $R=M();$R("dispose")});var sd=a(()=>{"use strict";var LR=M();LR("hasInstance")});var cd=a(()=>{"use strict";var FR=M();FR("isConcatSpreadable")});var wo=a(()=>{"use strict";var DR=M();DR("iterator")});var ld=a(()=>{"use strict";var BR=M();BR("match")});var fd=a(()=>{"use strict";var GR=M();GR("matchAll")});var pd=a(()=>{"use strict";var UR=M();UR("replace")});var vd=a(()=>{"use strict";var WR=M();WR("search")});var dd=a(()=>{"use strict";var HR=M();HR("species")});var md=a(()=>{"use strict";var KR=M();KR("split")});var To=a(()=>{"use strict";var zR=M(),VR=Qa();zR("toPrimitive");VR()});var hd=a(()=>{"use strict";var YR=U(),JR=M(),QR=_e();JR("toStringTag");QR(YR("Symbol"),"Symbol")});var yd=a(()=>{"use strict";var XR=M();XR("unscopables")});var gd=a(()=>{"use strict";var ZR=_(),eA=_e();eA(ZR.JSON,"JSON",!0)});var bd=a(()=>{});var qd=a(()=>{});var Sd=a((G8,xd)=>{"use strict";Ya();Ct();od();qo();xo();ud();So();sd();cd();wo();ld();fd();pd();vd();dd();md();To();hd();yd();gd();bd();qd();var rA=K();xd.exports=rA.Symbol});var Oo=a((U8,wd)=>{"use strict";wd.exports=function(){}});var mr=a((W8,Id)=>{"use strict";var tA=Ee(),Co=Oo(),Td=lr(),Cd=Ve(),nA=te().f,iA=_n(),Kn=Rn(),aA=Z(),oA=G(),Ed="Array Iterator",uA=Cd.set,sA=Cd.getterFor(Ed);Id.exports=iA(Array,"Array",function(e,r){uA(this,{type:Ed,target:tA(e),index:0,kind:r})},function(){var e=sA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Kn(void 0,!0);switch(e.kind){case"keys":return Kn(t,!1);case"values":return Kn(r[t],!1)}return Kn([t,r[t]],!1)},"values");var Od=Td.Arguments=Td.Array;Co("keys");Co("values");Co("entries");if(!aA&&oA&&Od.name!=="values")try{nA(Od,"name",{value:"values"})}catch{}});var Pd=a((H8,kd)=>{"use strict";kd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";mr();var cA=Pd(),lA=_(),fA=_e(),_d=lr();for(zn in cA)fA(lA[zn],zn),_d[zn]=_d.Array;var zn});var Ad=a((V8,Rd)=>{"use strict";var pA=Sd();hr();Rd.exports=pA});var jd=a(()=>{"use strict";var vA=R(),dA=te().f,Nd=vA("metadata"),Md=Function.prototype;Md[Nd]===void 0&&dA(Md,Nd,{value:null})});var $d=a(()=>{"use strict";qo()});var Ld=a(()=>{"use strict";So()});var Fd=a(()=>{"use strict";var mA=M();mA("metadata")});var Bd=a((n6,Dd)=>{"use strict";var hA=Ad();jd();$d();Ld();Fd();Dd.exports=hA});var Io=a((i6,Gd)=>{"use strict";var yA=U(),gA=A(),Eo=yA("Symbol"),bA=Eo.keyFor,qA=gA(Eo.prototype.valueOf);Gd.exports=Eo.isRegisteredSymbol||function(r){try{return bA(qA(r))!==void 0}catch{return!1}}});var Ud=a(()=>{"use strict";var xA=x(),SA=Io();xA({target:"Symbol",stat:!0},{isRegisteredSymbol:SA})});var _o=a((u6,Yd)=>{"use strict";var wA=ur(),zd=U(),TA=A(),OA=Nr(),CA=R(),Yn=zd("Symbol"),Wd=Yn.isWellKnownSymbol,Vd=zd("Object","getOwnPropertyNames"),EA=TA(Yn.prototype.valueOf),Hd=wA("wks");for(Vn=0,ko=Vd(Yn),Kd=ko.length;Vn<Kd;Vn++)try{Po=ko[Vn],OA(Yn[Po])&&CA(Po)}catch{}var Po,Vn,ko,Kd;Yd.exports=function(r){if(Wd&&Wd(r))return!0;try{for(var t=EA(r),n=0,i=Vd(Hd),o=i.length;n<o;n++)if(Hd[i[n]]==t)return!0}catch{}return!1}});var Jd=a(()=>{"use strict";var IA=x(),kA=_o();IA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:kA})});var Qd=a(()=>{"use strict";var PA=M();PA("customMatcher")});var Xd=a(()=>{"use strict";var _A=M();_A("observable")});var Zd=a(()=>{"use strict";var RA=x(),AA=Io();RA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:AA})});var em=a(()=>{"use strict";var NA=x(),MA=_o();NA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:MA})});var rm=a(()=>{"use strict";var jA=M();jA("matcher")});var tm=a(()=>{"use strict";var $A=M();$A("metadataKey")});var nm=a(()=>{"use strict";var LA=M();LA("patternMatch")});var im=a(()=>{"use strict";var FA=M();FA("replaceAll")});var om=a((C6,am)=>{"use strict";var DA=Bd();Ud();Jd();Qd();Xd();Zd();em();rm();tm();nm();im();am.exports=DA});var Se=a((E6,um)=>{"use strict";um.exports=om()});var Jn=a((I6,sm)=>{sm.exports=Se()});var lm=a((k6,cm)=>{"use strict";mr();fr();var BA=Tt();cm.exports=BA});var pm=a((P6,fm)=>{"use strict";var GA=lm();hr();fm.exports=GA});var dm=a((_6,vm)=>{"use strict";var UA=pm();vm.exports=UA});var hm=a((R6,mm)=>{"use strict";var WA=dm();mm.exports=WA});var Ro=a((A6,ym)=>{"use strict";ym.exports=hm()});var Qn=a((N6,gm)=>{gm.exports=Ro()});var qm=a((M6,bm)=>{"use strict";mr();fr();var HA=An();bm.exports=HA});var Sm=a((j6,xm)=>{"use strict";var KA=qm();hr();xm.exports=KA});var Tm=a(($6,wm)=>{"use strict";var zA=Sm();wm.exports=zA});var Cm=a((L6,Om)=>{"use strict";var VA=Tm();Om.exports=VA});var Im=a((F6,Em)=>{"use strict";Em.exports=Cm()});var Xn=a((D6,km)=>{km.exports=Im()});var _m=a((B6,Pm)=>{"use strict";var YA=U(),JA=A(),QA=Et(),XA=jn(),ZA=Q(),eN=JA([].concat);Pm.exports=YA("Reflect","ownKeys")||function(r){var t=QA.f(ZA(r)),n=XA.f;return n?eN(t,n(r)):t}});var Nm=a((G6,Am)=>{"use strict";var Rm=W(),rN=_m(),tN=ft(),nN=te();Am.exports=function(e,r,t){for(var n=rN(r),i=nN.f,o=tN.f,u=0;u<n.length;u++){var l=n[u];!Rm(e,l)&&!(t&&Rm(t,l))&&i(e,l,o(r,l))}}});var jm=a((U6,Mm)=>{"use strict";var iN=$(),aN=xe();Mm.exports=function(e,r){iN(r)&&"cause"in r&&aN(e,"cause",r.cause)}});var Dm=a((W6,Fm)=>{"use strict";var oN=A(),$m=Error,uN=oN("".replace),sN=function(e){return String(new $m(e).stack)}("zxcasd"),Lm=/\n\s*at [^:]*:[^\n]*/,cN=Lm.test(sN);Fm.exports=function(e,r){if(cN&&typeof e=="string"&&!$m.prepareStackTrace)for(;r--;)e=uN(e,Lm,"");return e}});var Gm=a((H6,Bm)=>{"use strict";var lN=P(),fN=He();Bm.exports=!lN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",fN(1,7)),e.stack!==7):!0})});var Hm=a((K6,Wm)=>{"use strict";var pN=xe(),vN=Dm(),dN=Gm(),Um=Error.captureStackTrace;Wm.exports=function(e,r,t,n){dN&&(Um?Um(e,r):pN(e,"stack",vN(t,n)))}});var pe=a((z6,Ym)=>{"use strict";var mN=z(),hN=D(),yN=Q(),gN=Ke(),bN=Ha(),qN=le(),Km=B(),xN=An(),SN=Tt(),zm=Wa(),wN=TypeError,Zn=function(e,r){this.stopped=e,this.result=r},Vm=Zn.prototype;Ym.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=mN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&zm(s,"normal"),new Zn(!0,b)},q=function(b){return i?(yN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=SN(e),!f)throw new wN(gN(e)+" is not iterable");if(bN(f)){for(p=0,v=qN(e);v>p;p++)if(d=q(e[p]),d&&Km(Vm,d))return d;return new Zn(!1)}s=xN(e,f)}for(h=o?e.next:s.next;!(m=hN(h,s)).done;){try{d=q(m.value)}catch(b){zm(s,"throw",b)}if(typeof d=="object"&&d&&Km(Vm,d))return d}return new Zn(!1)}});var Qm=a((V6,Jm)=>{"use strict";var TN=ze();Jm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:TN(e)}});var Zm=a(()=>{"use strict";var ON=x(),CN=B(),EN=qt(),ei=xt(),IN=Nm(),Xm=Ye(),Ao=xe(),No=He(),kN=jm(),PN=Hm(),_N=pe(),RN=Qm(),AN=R(),NN=AN("toStringTag"),ri=Error,MN=[].push,zr=function(r,t){var n=CN(Mo,this),i;ei?i=ei(new ri,n?EN(this):Mo):(i=n?this:Xm(Mo),Ao(i,NN,"Error")),t!==void 0&&Ao(i,"message",RN(t)),PN(i,zr,i.stack,1),arguments.length>2&&kN(i,arguments[2]);var o=[];return _N(r,MN,{that:o}),Ao(i,"errors",o),i};ei?ei(zr,ri):IN(zr,ri,{name:!0});var Mo=zr.prototype=Xm(ri.prototype,{constructor:No(1,zr),message:No(1,""),name:No(1,"AggregateError")});ON({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var jo=a(()=>{"use strict";Zm()});var $o=a((Z6,eh)=>{"use strict";var At=_(),jN=Rr(),$N=qe(),ti=function(e){return jN.slice(0,e.length)===e};eh.exports=function(){return ti("Bun/")?"BUN":ti("Cloudflare-Workers")?"CLOUDFLARE":ti("Deno/")?"DENO":ti("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":$N(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((eH,rh)=>{"use strict";var LN=$o();rh.exports=LN==="NODE"});var Lo=a((rH,nh)=>{"use strict";var FN=U(),DN=$n(),BN=R(),GN=G(),th=BN("species");nh.exports=function(e){var r=FN(e);GN&&r&&!r[th]&&DN(r,th,{configurable:!0,get:function(){return this}})}});var ni=a((tH,ih)=>{"use strict";var UN=B(),WN=TypeError;ih.exports=function(e,r){if(UN(r,e))return e;throw new WN("Incorrect invocation")}});var Fo=a((nH,ah)=>{"use strict";var HN=ht(),KN=Ke(),zN=TypeError;ah.exports=function(e){if(HN(e))return e;throw new zN(KN(e)+" is not a constructor")}});var Do=a((iH,uh)=>{"use strict";var oh=Q(),VN=Fo(),YN=ir(),JN=R(),QN=JN("species");uh.exports=function(e,r){var t=oh(e).constructor,n;return t===void 0||YN(n=oh(t)[QN])?r:VN(n)}});var ch=a((aH,sh)=>{"use strict";var XN=TypeError;sh.exports=function(e,r){if(e<r)throw new XN("Not enough arguments");return e}});var Bo=a((oH,lh)=>{"use strict";var ZN=Rr();lh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(ZN)});var Jo=a((uH,bh)=>{"use strict";var ue=_(),e2=_r(),r2=z(),fh=N(),t2=W(),gh=P(),ph=Aa(),n2=sr(),vh=gn(),i2=ch(),a2=Bo(),o2=Nt(),zo=ue.setImmediate,Vo=ue.clearImmediate,u2=ue.process,Go=ue.Dispatch,s2=ue.Function,dh=ue.MessageChannel,c2=ue.String,Uo=0,Mt={},mh="onreadystatechange",jt,yr,Wo,Ho;gh(function(){jt=ue.location});var Yo=function(e){if(t2(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Ko=function(e){return function(){Yo(e)}},hh=function(e){Yo(e.data)},yh=function(e){ue.postMessage(c2(e),jt.protocol+"//"+jt.host)};(!zo||!Vo)&&(zo=function(r){i2(arguments.length,1);var t=fh(r)?r:s2(r),n=n2(arguments,1);return Mt[++Uo]=function(){e2(t,void 0,n)},yr(Uo),Uo},Vo=function(r){delete Mt[r]},o2?yr=function(e){u2.nextTick(Ko(e))}:Go&&Go.now?yr=function(e){Go.now(Ko(e))}:dh&&!a2?(Wo=new dh,Ho=Wo.port2,Wo.port1.onmessage=hh,yr=r2(Ho.postMessage,Ho)):ue.addEventListener&&fh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!gh(yh)?(yr=yh,ue.addEventListener("message",hh,!1)):mh in vh("script")?yr=function(e){ph.appendChild(vh("script"))[mh]=function(){ph.removeChild(this),Yo(e)}}:yr=function(e){setTimeout(Ko(e),0)});bh.exports={set:zo,clear:Vo}});var Sh=a((sH,xh)=>{"use strict";var qh=_(),l2=G(),f2=Object.getOwnPropertyDescriptor;xh.exports=function(e){if(!l2)return qh[e];var r=f2(qh,e);return r&&r.value}});var Qo=a((cH,Th)=>{"use strict";var wh=function(){this.head=null,this.tail=null};wh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Th.exports=wh});var Ch=a((lH,Oh)=>{"use strict";var p2=Rr();Oh.exports=/ipad|iphone|ipod/i.test(p2)&&typeof Pebble<"u"});var Ih=a((fH,Eh)=>{"use strict";var v2=Rr();Eh.exports=/web0s(?!.*chrome)/i.test(v2)});var Mh=a((pH,Nh)=>{"use strict";var Yr=_(),d2=Sh(),kh=z(),Xo=Jo().set,m2=Qo(),h2=Bo(),y2=Ch(),g2=Ih(),Zo=Nt(),Ph=Yr.MutationObserver||Yr.WebKitMutationObserver,_h=Yr.document,Rh=Yr.process,ii=Yr.Promise,tu=d2("queueMicrotask"),Vr,eu,ru,ai,Ah;tu||($t=new m2,Lt=function(){var e,r;for(Zo&&(e=Rh.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Vr(),t}e&&e.enter()},!h2&&!Zo&&!g2&&Ph&&_h?(eu=!0,ru=_h.createTextNode(""),new Ph(Lt).observe(ru,{characterData:!0}),Vr=function(){ru.data=eu=!eu}):!y2&&ii&&ii.resolve?(ai=ii.resolve(void 0),ai.constructor=ii,Ah=kh(ai.then,ai),Vr=function(){Ah(Lt)}):Zo?Vr=function(){Rh.nextTick(Lt)}:(Xo=kh(Xo,Yr),Vr=function(){Xo(Lt)}),tu=function(e){$t.head||Vr(),$t.add(e)});var $t,Lt;Nh.exports=tu});var $h=a((vH,jh)=>{"use strict";jh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=a((dH,Lh)=>{"use strict";Lh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var br=a((mH,Fh)=>{"use strict";var b2=_();Fh.exports=b2.Promise});var Jr=a((hH,Uh)=>{"use strict";var q2=_(),Ft=br(),x2=N(),S2=ca(),w2=ha(),T2=R(),Dh=$o(),O2=Z(),nu=Ar(),Bh=Ft&&Ft.prototype,C2=T2("species"),iu=!1,Gh=x2(q2.PromiseRejectionEvent),E2=S2("Promise",function(){var e=w2(Ft),r=e!==String(Ft);if(!r&&nu===66||O2&&!(Bh.catch&&Bh.finally))return!0;if(!nu||nu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[C2]=n,iu=t.then(function(){})instanceof n,!iu)return!0}return!r&&(Dh==="BROWSER"||Dh==="DENO")&&!Gh});Uh.exports={CONSTRUCTOR:E2,REJECTION_EVENT:Gh,SUBCLASSING:iu}});var we=a((yH,Hh)=>{"use strict";var Wh=F(),I2=TypeError,k2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new I2("Bad Promise constructor");r=n,t=i}),this.resolve=Wh(r),this.reject=Wh(t)};Hh.exports.f=function(e){return new k2(e)}});var fy=a(()=>{"use strict";var P2=x(),_2=Z(),ci=Nt(),Xe=_(),R2=K(),et=D(),Kh=ke(),zh=xt(),A2=_e(),N2=Lo(),M2=F(),si=N(),j2=$(),$2=ni(),L2=Do(),Xh=Jo().set,cu=Mh(),F2=$h(),D2=gr(),B2=Qo(),Zh=Ve(),li=br(),lu=Jr(),ey=we(),fi="Promise",ry=lu.CONSTRUCTOR,G2=lu.REJECTION_EVENT,U2=lu.SUBCLASSING,au=Zh.getterFor(fi),W2=Zh.set,Qr=li&&li.prototype,qr=li,oi=Qr,ty=Xe.TypeError,ou=Xe.document,fu=Xe.process,uu=ey.f,H2=uu,K2=!!(ou&&ou.createEvent&&Xe.dispatchEvent),ny="unhandledrejection",z2="rejectionhandled",Vh=0,iy=1,V2=2,pu=1,ay=2,ui,Yh,oy,Jh,uy=function(e){var r;return j2(e)&&si(r=e.then)?r:!1},sy=function(e,r){var t=r.value,n=r.state===iy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===ay&&J2(r),r.rejection=pu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ty("Promise-chain cycle")):(s=uy(c))?et(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},cy=function(e,r){e.notified||(e.notified=!0,cu(function(){for(var t=e.reactions,n;n=t.get();)sy(n,e);e.notified=!1,r&&!e.rejection&&Y2(e)}))},ly=function(e,r,t){var n,i;K2?(n=ou.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Xe.dispatchEvent(n)):n={promise:r,reason:t},!G2&&(i=Xe["on"+e])?i(n):e===ny&&F2("Unhandled promise rejection",t)},Y2=function(e){et(Xh,Xe,function(){var r=e.facade,t=e.value,n=Qh(e),i;if(n&&(i=D2(function(){ci?fu.emit("unhandledRejection",t,r):ly(ny,r,t)}),e.rejection=ci||Qh(e)?ay:pu,i.error))throw i.value})},Qh=function(e){return e.rejection!==pu&&!e.parent},J2=function(e){et(Xh,Xe,function(){var r=e.facade;ci?fu.emit("rejectionHandled",r):ly(z2,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=V2,cy(e,!0))},su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ty("Promise can't be resolved itself");var n=uy(r);n?cu(function(){var i={done:!1};try{et(n,r,Xr(su,i,e),Xr(Zr,i,e))}catch(o){Zr(i,o,e)}}):(e.value=r,e.state=iy,cy(e,!1))}catch(i){Zr({done:!1},i,e)}}};if(ry&&(qr=function(r){$2(this,oi),M2(r),et(ui,this);var t=au(this);try{r(Xr(su,t),Xr(Zr,t))}catch(n){Zr(t,n)}},oi=qr.prototype,ui=function(r){W2(this,{type:fi,done:!1,notified:!1,parent:!1,reactions:new B2,rejection:!1,state:Vh,value:null})},ui.prototype=Kh(oi,"then",function(r,t){var n=au(this),i=uu(L2(this,qr));return n.parent=!0,i.ok=si(r)?r:!0,i.fail=si(t)&&t,i.domain=ci?fu.domain:void 0,n.state===Vh?n.reactions.add(i):cu(function(){sy(i,n)}),i.promise}),Yh=function(){var e=new ui,r=au(e);this.promise=e,this.resolve=Xr(su,r),this.reject=Xr(Zr,r)},ey.f=uu=function(e){return e===qr||e===oy?new Yh(e):H2(e)},!_2&&si(li)&&Qr!==Object.prototype)){Jh=Qr.then,U2||Kh(Qr,"then",function(r,t){var n=this;return new qr(function(i,o){et(Jh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}zh&&zh(Qr,oi)}P2({global:!0,constructor:!0,wrap:!0,forced:ry},{Promise:qr});oy=R2.Promise;A2(qr,fi,!1,!0);N2(fi)});var Dt=a((qH,py)=>{"use strict";var Q2=br(),X2=za(),Z2=Jr().CONSTRUCTOR;py.exports=Z2||!X2(function(e){Q2.all(e).then(void 0,function(){})})});var vy=a(()=>{"use strict";var eM=x(),rM=D(),tM=F(),nM=we(),iM=gr(),aM=pe(),oM=Dt();eM({target:"Promise",stat:!0,forced:oM},{all:function(r){var t=this,n=nM.f(t),i=n.resolve,o=n.reject,u=iM(function(){var l=tM(t.resolve),c=[],s=0,f=1;aM(r,function(p){var v=s++,d=!1;f++,rM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var my=a(()=>{"use strict";var uM=x(),sM=Z(),cM=Jr().CONSTRUCTOR,du=br(),lM=U(),fM=N(),pM=ke(),dy=du&&du.prototype;uM({target:"Promise",proto:!0,forced:cM,real:!0},{catch:function(e){return this.then(void 0,e)}});!sM&&fM(du)&&(vu=lM("Promise").prototype.catch,dy.catch!==vu&&pM(dy,"catch",vu,{unsafe:!0}));var vu});var hy=a(()=>{"use strict";var vM=x(),dM=D(),mM=F(),hM=we(),yM=gr(),gM=pe(),bM=Dt();vM({target:"Promise",stat:!0,forced:bM},{race:function(r){var t=this,n=hM.f(t),i=n.reject,o=yM(function(){var u=mM(t.resolve);gM(r,function(l){dM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var yy=a(()=>{"use strict";var qM=x(),xM=we(),SM=Jr().CONSTRUCTOR;qM({target:"Promise",stat:!0,forced:SM},{reject:function(r){var t=xM.f(this),n=t.reject;return n(r),t.promise}})});var mu=a((kH,gy)=>{"use strict";var wM=Q(),TM=$(),OM=we();gy.exports=function(e,r){if(wM(e),TM(r)&&r.constructor===e)return r;var t=OM.f(e),n=t.resolve;return n(r),t.promise}});var xy=a(()=>{"use strict";var CM=x(),EM=U(),by=Z(),IM=br(),qy=Jr().CONSTRUCTOR,kM=mu(),PM=EM("Promise"),_M=by&&!qy;CM({target:"Promise",stat:!0,forced:by||qy},{resolve:function(r){return kM(_M&&this===PM?IM:this,r)}})});var Sy=a(()=>{"use strict";fy();vy();my();hy();yy();xy()});var hu=a(()=>{"use strict";var RM=x(),AM=D(),NM=F(),MM=we(),jM=gr(),$M=pe(),LM=Dt();RM({target:"Promise",stat:!0,forced:LM},{allSettled:function(r){var t=this,n=MM.f(t),i=n.resolve,o=n.reject,u=jM(function(){var l=NM(t.resolve),c=[],s=0,f=1;$M(r,function(p){var v=s++,d=!1;f++,AM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yu=a(()=>{"use strict";var FM=x(),DM=D(),BM=F(),GM=U(),UM=we(),WM=gr(),HM=pe(),KM=Dt(),wy="No one promise resolved";FM({target:"Promise",stat:!0,forced:KM},{any:function(r){var t=this,n=GM("AggregateError"),i=UM.f(t),o=i.resolve,u=i.reject,l=WM(function(){var c=BM(t.resolve),s=[],f=0,p=1,v=!1;HM(r,function(d){var h=f++,m=!1;p++,DM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,wy)))})}),--p||u(new n(s,wy))});return l.error&&u(l.value),i.promise}})});var bu=a(()=>{"use strict";var zM=x(),VM=_(),YM=_r(),JM=sr(),QM=we(),XM=F(),Oy=gr(),gu=VM.Promise,Ty=!1,ZM=!gu||!gu.try||Oy(function(){gu.try(function(e){Ty=e===8},8)}).error||!Ty;zM({target:"Promise",stat:!0,forced:ZM},{try:function(e){var r=arguments.length>1?JM(arguments,1):[],t=QM.f(this),n=Oy(function(){return YM(XM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var qu=a(()=>{"use strict";var ej=x(),rj=we();ej({target:"Promise",stat:!0},{withResolvers:function(){var r=rj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var ky=a(()=>{"use strict";var tj=x(),nj=Z(),pi=br(),ij=P(),Ey=U(),Iy=N(),aj=Do(),Cy=mu(),oj=ke(),Su=pi&&pi.prototype,uj=!!pi&&ij(function(){Su.finally.call({then:function(){}},function(){})});tj({target:"Promise",proto:!0,real:!0,forced:uj},{finally:function(e){var r=aj(this,Ey("Promise")),t=Iy(e);return this.then(t?function(n){return Cy(r,e()).then(function(){return n})}:e,t?function(n){return Cy(r,e()).then(function(){throw n})}:e)}});!nj&&Iy(pi)&&(xu=Ey("Promise").prototype.finally,Su.finally!==xu&&oj(Su,"finally",xu,{unsafe:!0}));var xu});var _y=a((WH,Py)=>{"use strict";jo();mr();Ct();Sy();hu();yu();bu();qu();ky();fr();var sj=K();Py.exports=sj.Promise});var Ay=a((HH,Ry)=>{"use strict";var cj=_y();hr();Ry.exports=cj});var Ny=a(()=>{"use strict";bu()});var My=a(()=>{"use strict";qu()});var $y=a((JH,jy)=>{"use strict";var lj=Ay();Ny();My();jy.exports=lj});var Ly=a(()=>{"use strict";jo()});var Fy=a(()=>{"use strict";hu()});var Dy=a(()=>{"use strict";yu()});var Gy=a((nK,By)=>{"use strict";var fj=$y();Ly();Fy();Dy();By.exports=fj});var rt=a((iK,Uy)=>{"use strict";Uy.exports=Gy()});var Ky=a((cK,Hy)=>{"use strict";xo();var pj=Ur();Hy.exports=pj.f("asyncIterator")});var Vy=a((lK,zy)=>{"use strict";var vj=Ky();zy.exports=vj});var Jy=a((fK,Yy)=>{"use strict";var dj=Vy();Yy.exports=dj});var Xy=a((pK,Qy)=>{"use strict";var mj=Jy();Qy.exports=mj});var vi=a((vK,Zy)=>{"use strict";Zy.exports=Xy()});var ng=a(()=>{"use strict";var hj=x(),yj=P(),gj=re(),tg=qt(),bj=$a(),qj=yj(function(){tg(1)});hj({target:"Object",stat:!0,forced:qj,sham:!bj},{getPrototypeOf:function(r){return tg(gj(r))}})});var ag=a((gK,ig)=>{"use strict";ng();var xj=K();ig.exports=xj.Object.getPrototypeOf});var ug=a((bK,og)=>{"use strict";var Sj=ag();og.exports=Sj});var cg=a((qK,sg)=>{"use strict";var wj=ug();sg.exports=wj});var fg=a((xK,lg)=>{"use strict";var Tj=cg();lg.exports=Tj});var di=a((SK,pg)=>{"use strict";pg.exports=fg()});var dg=a(()=>{"use strict";var Oj=x(),Cj=A(),Ej=Ie(),Ij=Cj([].reverse),vg=[1,2];Oj({target:"Array",proto:!0,forced:String(vg)===String(vg.reverse())},{reverse:function(){return Ej(this)&&(this.length=this.length),Ij(this)}})});var hg=a((OK,mg)=>{"use strict";dg();var kj=oe();mg.exports=kj("Array","reverse")});var gg=a((CK,yg)=>{"use strict";var Pj=B(),_j=hg(),Ou=Array.prototype;yg.exports=function(e){var r=e.reverse;return e===Ou||Pj(Ou,e)&&r===Ou.reverse?_j:r}});var qg=a((EK,bg)=>{"use strict";var Rj=gg();bg.exports=Rj});var Sg=a((IK,xg)=>{"use strict";var Aj=qg();xg.exports=Aj});var Tg=a((kK,wg)=>{"use strict";var Nj=Sg();wg.exports=Nj});var Cg=a((PK,Og)=>{"use strict";Og.exports=Tg()});var Cu=a((_K,Ut)=>{function Mj(e,r){this.v=e,this.k=r}Ut.exports=Mj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Eg=a(()=>{"use strict";var jj=x(),$j=G(),Lj=Ye();jj({target:"Object",stat:!0,sham:!$j},{create:Lj})});var kg=a((NK,Ig)=>{"use strict";Eg();var Fj=K(),Dj=Fj.Object;Ig.exports=function(r,t){return Dj.create(r,t)}});var _g=a((MK,Pg)=>{"use strict";var Bj=kg();Pg.exports=Bj});var Ag=a((jK,Rg)=>{"use strict";var Gj=_g();Rg.exports=Gj});var Mg=a(($K,Ng)=>{"use strict";var Uj=Ag();Ng.exports=Uj});var mi=a((LK,jg)=>{"use strict";jg.exports=Mg()});var Iu=a((FK,Dg)=>{"use strict";var Lg=A(),Wj=F(),Hj=$(),Kj=W(),$g=sr(),zj=Pr(),Fg=Function,Vj=Lg([].concat),Yj=Lg([].join),Eu={},Jj=function(e,r,t){if(!Kj(Eu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Eu[r]=Fg("C,a","return new C("+Yj(n,",")+")")}return Eu[r](e,t)};Dg.exports=zj?Fg.bind:function(r){var t=Wj(this),n=t.prototype,i=$g(arguments,1),o=function(){var l=Vj(i,$g(arguments));return this instanceof o?Jj(t,l.length,l):t.apply(r,l)};return Hj(n)&&(o.prototype=n),o}});var Gg=a(()=>{"use strict";var Qj=x(),Bg=Iu();Qj({target:"Function",proto:!0,forced:Function.bind!==Bg},{bind:Bg})});var Wg=a((GK,Ug)=>{"use strict";Gg();var Xj=oe();Ug.exports=Xj("Function","bind")});var Kg=a((UK,Hg)=>{"use strict";var Zj=B(),e$=Wg(),ku=Function.prototype;Hg.exports=function(e){var r=e.bind;return e===ku||Zj(ku,e)&&r===ku.bind?e$:r}});var Vg=a((WK,zg)=>{"use strict";var r$=Kg();zg.exports=r$});var Jg=a((HK,Yg)=>{"use strict";var t$=Vg();Yg.exports=t$});var Xg=a((KK,Qg)=>{"use strict";var n$=Jg();Qg.exports=n$});var Wt=a((zK,Zg)=>{"use strict";Zg.exports=Xg()});var eb=a(()=>{"use strict";var i$=x(),a$=xt();i$({target:"Object",stat:!0},{setPrototypeOf:a$})});var tb=a((JK,rb)=>{"use strict";eb();var o$=K();rb.exports=o$.Object.setPrototypeOf});var ib=a((QK,nb)=>{"use strict";var u$=tb();nb.exports=u$});var ob=a((XK,ab)=>{"use strict";var s$=ib();ab.exports=s$});var sb=a((ZK,ub)=>{"use strict";var c$=ob();ub.exports=c$});var hi=a((ez,cb)=>{"use strict";cb.exports=sb()});var fb=a(()=>{"use strict";var l$=x(),f$=G(),lb=te().f;l$({target:"Object",stat:!0,forced:Object.defineProperty!==lb,sham:!f$},{defineProperty:lb})});var db=a((nz,vb)=>{"use strict";fb();var p$=K(),pb=p$.Object,v$=vb.exports=function(r,t,n){return pb.defineProperty(r,t,n)};pb.defineProperty.sham&&(v$.sham=!0)});var hb=a((iz,mb)=>{"use strict";var d$=db();mb.exports=d$});var gb=a((az,yb)=>{"use strict";var m$=hb();yb.exports=m$});var qb=a((oz,bb)=>{"use strict";var h$=gb();bb.exports=h$});var Ht=a((uz,xb)=>{"use strict";xb.exports=qb()});var Pu=a((sz,Ae)=>{var y$=Ht();function yi(e,r,t,n){var i=y$;try{i({},"",{})}catch{i=0}Ae.exports=yi=function(u,l,c,s){function f(p,v){yi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,yi(e,r,t,n)}Ae.exports=yi,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var Ru=a((cz,Ne)=>{var Sb=Se(),_u=mi(),g$=Wt(),b$=di(),wb=hi(),Oe=Pu();function Tb(){var e,r,t=typeof Sb=="function"?Sb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=_u(q.prototype);return Oe(b,"_invoke",function(I,E,S){var T,w,C,j=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:be,f:g$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,C=e,ee.n=ve,u}};function be(J,L){for(w=J,C=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],Ir=ee.p,We=O[2];J>3?(ve=We===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((ve=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<We&&(ve=J<3||O[0]>L||L>We)&&(O[4]=J,O[5]=L,ee.n=We,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,C=ve;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=b$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=s.prototype=l.prototype=_u(f);function v(d){return wb?wb(d,s):(d.__proto__=s,Oe(d,i,"GeneratorFunction")),d.prototype=_u(p),d}return c.prototype=s,Oe(p,"constructor",s),Oe(s,"constructor",c),c.displayName="GeneratorFunction",Oe(s,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),(Ne.exports=Tb=function(){return{w:o,m:v}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=Tb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Mu=a((lz,Kt)=>{var q$=Se(),x$=vi(),S$=Cu(),Au=Pu();function Nu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof S$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Au(Nu.prototype),Au(Nu.prototype,typeof q$=="function"&&x$||"@asyncIterator",function(){return this})),Au(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Kt.exports=Nu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var ju=a((fz,zt)=>{var w$=rt(),T$=Ru(),O$=Mu();function C$(e,r,t,n,i){return new O$(T$().w(e,r,t,n),i||w$)}zt.exports=C$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Ob=a((pz,Vt)=>{var E$=ju();function I$(e,r,t,n,i){var o=E$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=I$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Ib=a((vz,Eb)=>{"use strict";var Cb=Ke(),k$=TypeError;Eb.exports=function(e,r){if(!delete e[r])throw new k$("Cannot delete property "+Cb(r)+" of "+Cb(e))}});var kb=a(()=>{"use strict";var P$=x(),_$=re(),R$=le(),A$=Dr(),N$=Ib(),M$=Ot(),j$=[].unshift(0)!==1,$$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},L$=j$||!$$();P$({target:"Array",proto:!0,arity:1,forced:L$},{unshift:function(r){var t=_$(this),n=R$(t),i=arguments.length;if(i){M$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:N$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return A$(t,n+i)}})});var _b=a((hz,Pb)=>{"use strict";kb();var F$=oe();Pb.exports=F$("Array","unshift")});var Ab=a((yz,Rb)=>{"use strict";var D$=B(),B$=_b(),$u=Array.prototype;Rb.exports=function(e){var r=e.unshift;return e===$u||D$($u,e)&&r===$u.unshift?B$:r}});var Mb=a((gz,Nb)=>{"use strict";var G$=Ab();Nb.exports=G$});var $b=a((bz,jb)=>{"use strict";var U$=Mb();jb.exports=U$});var Fb=a((qz,Lb)=>{"use strict";var W$=$b();Lb.exports=W$});var Bb=a((xz,Db)=>{"use strict";Db.exports=Fb()});var Gb=a((Sz,Yt)=>{var H$=Bb();function K$(e){var r=Object(e),t=[];for(var n in r)H$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=K$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Wb=a((wz,Ub)=>{"use strict";mr();Ct();fr();wo();var z$=Ur();Ub.exports=z$.f("iterator")});var Kb=a((Tz,Hb)=>{"use strict";var V$=Wb();hr();Hb.exports=V$});var Vb=a((Oz,zb)=>{"use strict";var Y$=Kb();zb.exports=Y$});var Jb=a((Cz,Yb)=>{"use strict";var J$=Vb();Yb.exports=J$});var Jt=a((Ez,Qb)=>{"use strict";Qb.exports=Jb()});var Xb=a((Iz,Me)=>{var gi=Se(),Q$=Jt();function Lu(e){"@babel/helpers - typeof";return Me.exports=Lu=typeof gi=="function"&&typeof Q$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof gi=="function"&&r.constructor===gi&&r!==gi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Lu(e)}Me.exports=Lu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Zb=a((kz,Qt)=>{var X$=Xb().default,Z$=Se(),eL=Jt();function rL(e){if(e!=null){var r=e[typeof Z$=="function"&&eL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(X$(e)+" is not iterable")}Qt.exports=rL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var tq=a((Pz,je)=>{var eq=di(),tL=Cg(),nL=Cu(),iL=Ru(),aL=Ob(),oL=ju(),uL=Mu(),sL=Gb(),rq=Zb();function Fu(){"use strict";var e=iL(),r=e.m(Fu),t=(eq?eq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,rq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=Fu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&tL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new nL(c,s)},AsyncIterator:uL,async:function(c,s,f,p,v){return(n(s)?oL:aL)(o(c),s,f,p,v)},keys:sL,values:rq}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Fu,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((_z,nq)=>{var bi=tq()();nq.exports=bi;try{regeneratorRuntime=bi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=bi:Function("r","regeneratorRuntime = r")(bi)}});var Du=a((xi,aq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});var qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();xi.default=cL;function cL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return er(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return er([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=lL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return er([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function lL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=iq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=iq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j,ge){c(j)&&(C.push(j),ge())}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function er(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&er(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}aq.exports=xi.default});var wi=a(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.convertNodeList=fL;Si.escapeValue=pL;function fL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function pL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var mq=a((Ti,dq)=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.default=vL;var cq=wi(),oq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function vL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,cq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(uq(l,p,s,f,n)||sq(p,s,f,n))break;uq(l,p,s,f),f.length===v&&sq(p,s,f),f.length===v&&dL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=pq(l,p,s);f.unshift(y)}return f.join(" ")}function uq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=lq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function lq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,cq.escapeValue)(c.value),p=t[s]||t.attribute,v=oq[s]||oq.attribute;if(!vq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function sq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=fq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function fq(e,r){var t=e.tagName.toLowerCase();return vq(r.tag,null,t)?null:t}function dL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=pq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function pq(e,r,t){var n=lq(e,r,t);return n||(n=fq(r,t)),n}function vq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}dq.exports=Ti.default});var Bu=a((Ci,hq)=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=bL;var mL=Du(),hL=gL(mL),yL=wi();function gL(e){return e&&e.__esModule?e:{default:e}}function bL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,yL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,hL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Oi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Oi(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Oi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Oi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Oi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(tt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);tt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}hq.exports=Ci.default});var Gu=a(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.getCommonAncestor=qL;Ei.getCommonProperties=xL;function qL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function xL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Sq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var SL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=xq;Zt.default=IL;var wL=Du(),gq=Uu(wL),TL=mq(),OL=Uu(TL),CL=Bu(),bq=Uu(CL),yq=wi(),qq=Gu();function Uu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":SL(e))+'")');var t=(0,gq.default)(e,r),n=(0,OL.default)(e,r),i=(0,bq.default)(n,e,r);return t&&delete global.document,i}function xq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,yq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,gq.default)(e[0],r),n=(0,qq.getCommonAncestor)(e,r),i=Wu(n,r),o=EL(e),u=o[0],l=(0,bq.default)(i+" "+u,e,r),c=(0,yq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function EL(e){var r=(0,qq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function IL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?xq(e,r):Wu(e,r)}});var Oq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Hu=Sq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Hu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Hu.getMultiSelector}});var wq=Tq(Hu),kL=Bu(),PL=Tq(kL),_L=Gu(),RL=AL(_L);function AL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Tq(e){return e&&e.__esModule?e:{default:e}}ie.select=wq.default;ie.optimize=PL.default;ie.common=RL;ie.default=wq.default});var Cq=a(()=>{"use strict";var UL=x(),WL=Ie();UL({target:"Array",stat:!0},{isArray:WL})});var Iq=a((Vz,Eq)=>{"use strict";Cq();var HL=K();Eq.exports=HL.Array.isArray});var Pq=a((Yz,kq)=>{"use strict";var KL=Iq();kq.exports=KL});var Rq=a((Jz,_q)=>{"use strict";var zL=Pq();_q.exports=zL});var Nq=a((Qz,Aq)=>{"use strict";var VL=Rq();Aq.exports=VL});var jq=a((Xz,Mq)=>{"use strict";Mq.exports=Nq()});var Fq=a(()=>{"use strict";var YL=x(),JL=re(),QL=le(),XL=Dr(),ZL=Ot(),eF=P(),rF=eF(function(){return[].push.call({length:4294967296},1)!==4294967297}),tF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},nF=rF||!tF();YL({target:"Array",proto:!0,arity:1,forced:nF},{push:function(r){var t=JL(this),n=QL(t),i=arguments.length;ZL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return XL(t,n),n}})});var Bq=a((tV,Dq)=>{"use strict";Fq();var iF=oe();Dq.exports=iF("Array","push")});var Uq=a((nV,Gq)=>{"use strict";var aF=B(),oF=Bq(),Ku=Array.prototype;Gq.exports=function(e){var r=e.push;return e===Ku||aF(Ku,e)&&r===Ku.push?oF:r}});var Hq=a((iV,Wq)=>{"use strict";var uF=Uq();Wq.exports=uF});var zq=a((aV,Kq)=>{"use strict";var sF=Hq();Kq.exports=sF});var Yq=a((oV,Vq)=>{"use strict";var cF=zq();Vq.exports=cF});var zu=a((uV,Jq)=>{"use strict";Jq.exports=Yq()});var ux=a(()=>{"use strict";var lF=x(),fF=It().map,pF=yt(),vF=pF("map");lF({target:"Array",proto:!0,forced:!vF},{map:function(r){return fF(this,r,arguments.length>1?arguments[1]:void 0)}})});var cx=a((MV,sx)=>{"use strict";ux();var dF=oe();sx.exports=dF("Array","map")});var fx=a((jV,lx)=>{"use strict";var mF=B(),hF=cx(),Yu=Array.prototype;lx.exports=function(e){var r=e.map;return e===Yu||mF(Yu,e)&&r===Yu.map?hF:r}});var vx=a(($V,px)=>{"use strict";var yF=fx();px.exports=yF});var mx=a((LV,dx)=>{"use strict";var gF=vx();dx.exports=gF});var yx=a((FV,hx)=>{"use strict";var bF=mx();hx.exports=bF});var bx=a((DV,gx)=>{"use strict";gx.exports=yx()});var xx=a((BV,qx)=>{qx.exports=bx()});var wx=a((GV,Sx)=>{Sx.exports=rt()});var Ix=a((UV,Ex)=>{"use strict";var qF=F(),xF=re(),SF=dn(),wF=le(),Tx=TypeError,Ox="Reduce of empty array with no initial value",Cx=function(e){return function(r,t,n,i){var o=xF(r),u=SF(o),l=wF(o);if(qF(t),l===0&&n<2)throw new Tx(Ox);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Tx(Ox)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};Ex.exports={left:Cx(!1),right:Cx(!0)}});var Ju=a((WV,kx)=>{"use strict";var TF=P();kx.exports=function(e,r){var t=[][e];return!!t&&TF(function(){t.call(null,r||function(){return 1},1)})}});var _x=a(()=>{"use strict";var OF=x(),CF=Ix().left,EF=Ju(),Px=Ar(),IF=Nt(),kF=!IF&&Px>79&&Px<83,PF=kF||!EF("reduce");OF({target:"Array",proto:!0,forced:PF},{reduce:function(r){var t=arguments.length;return CF(this,r,t,t>1?arguments[1]:void 0)}})});var Ax=a((zV,Rx)=>{"use strict";_x();var _F=oe();Rx.exports=_F("Array","reduce")});var Mx=a((VV,Nx)=>{"use strict";var RF=B(),AF=Ax(),Qu=Array.prototype;Nx.exports=function(e){var r=e.reduce;return e===Qu||RF(Qu,e)&&r===Qu.reduce?AF:r}});var $x=a((YV,jx)=>{"use strict";var NF=Mx();jx.exports=NF});var Fx=a((JV,Lx)=>{"use strict";var MF=$x();Lx.exports=MF});var Bx=a((QV,Dx)=>{"use strict";var jF=Fx();Dx.exports=jF});var Ux=a((XV,Gx)=>{"use strict";Gx.exports=Bx()});var Hx=a((ZV,Wx)=>{Wx.exports=Ux()});var Vx=a((e7,zx)=>{"use strict";var $F=Ie(),LF=le(),FF=Ot(),DF=z(),BF=Fr(),Kx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?DF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&$F(p)?(v=LF(p),c=Kx(e,r,p,v,c,o-1)-1):(FF(c+1),BF(e,c,p)),c++),s++;return c};zx.exports=Kx});var Yx=a(()=>{"use strict";var GF=x(),UF=Vx(),WF=F(),HF=re(),KF=le(),zF=Mn();GF({target:"Array",proto:!0},{flatMap:function(r){var t=HF(this),n=KF(t),i;return WF(r),i=zF(t,0),UF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Jx=a(()=>{"use strict";var VF=Oo();VF("flatMap")});var Xx=a((a7,Qx)=>{"use strict";Yx();Jx();var YF=oe();Qx.exports=YF("Array","flatMap")});var eS=a((o7,Zx)=>{"use strict";var JF=B(),QF=Xx(),Xu=Array.prototype;Zx.exports=function(e){var r=e.flatMap;return e===Xu||JF(Xu,e)&&r===Xu.flatMap?QF:r}});var tS=a((u7,rS)=>{"use strict";var XF=eS();rS.exports=XF});var iS=a((s7,nS)=>{"use strict";var ZF=tS();nS.exports=ZF});var oS=a((c7,aS)=>{"use strict";var eD=iS();aS.exports=eD});var sS=a((l7,uS)=>{"use strict";uS.exports=oS()});var lS=a((f7,cS)=>{cS.exports=sS()});var pS=a((p7,fS)=>{"use strict";Ya();var rD=oe();fS.exports=rD("Array","concat")});var dS=a((v7,vS)=>{"use strict";var tD=B(),nD=pS(),Zu=Array.prototype;vS.exports=function(e){var r=e.concat;return e===Zu||tD(Zu,e)&&r===Zu.concat?nD:r}});var hS=a((d7,mS)=>{"use strict";var iD=dS();mS.exports=iD});var gS=a((m7,yS)=>{"use strict";var aD=hS();yS.exports=aD});var qS=a((h7,bS)=>{"use strict";var oD=gS();bS.exports=oD});var SS=a((y7,xS)=>{"use strict";xS.exports=qS()});var es=a((g7,wS)=>{wS.exports=SS()});var CS=a(()=>{});var IS=a((B7,ES)=>{"use strict";CS();To();var hD=Ur();ES.exports=hD.f("toPrimitive")});var PS=a((G7,kS)=>{"use strict";var yD=IS();kS.exports=yD});var RS=a((U7,_S)=>{"use strict";var gD=PS();_S.exports=gD});var NS=a((W7,AS)=>{"use strict";var bD=RS();AS.exports=bD});var jS=a((H7,MS)=>{"use strict";MS.exports=NS()});var HS=a((p9,WS)=>{"use strict";var xD=$(),SD=qe(),wD=R(),TD=wD("match");WS.exports=function(e){var r;return xD(e)&&((r=e[TD])!==void 0?!!r:SD(e)==="RegExp")}});var zS=a((v9,KS)=>{"use strict";var OD=HS(),CD=TypeError;KS.exports=function(e){if(OD(e))throw new CD("The method doesn't accept regular expressions");return e}});var YS=a((d9,VS)=>{"use strict";var ED=R(),ID=ED("match");VS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[ID]=!1,"/./"[e](r)}catch{}}return!1}});var XS=a(()=>{"use strict";var kD=x(),PD=ct(),_D=ft().f,RD=ba(),JS=ze(),AD=zS(),ND=ar(),MD=YS(),jD=Z(),$D=PD("".slice),LD=Math.min,QS=MD("startsWith"),FD=!jD&&!QS&&!!function(){var e=_D(String.prototype,"startsWith");return e&&!e.writable}();kD({target:"String",proto:!0,forced:!FD&&!QS},{startsWith:function(r){var t=JS(ND(this));AD(r);var n=RD(LD(arguments.length>1?arguments[1]:void 0,t.length)),i=JS(r);return $D(t,n,n+i.length)===i}})});var ew=a((y9,ZS)=>{"use strict";XS();var DD=oe();ZS.exports=DD("String","startsWith")});var tw=a((g9,rw)=>{"use strict";var BD=B(),GD=ew(),is=String.prototype;rw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===is||BD(is,e)&&r===is.startsWith?GD:r}});var iw=a((b9,nw)=>{"use strict";var UD=tw();nw.exports=UD});var ow=a((q9,aw)=>{"use strict";var WD=iw();aw.exports=WD});var sw=a((x9,uw)=>{"use strict";var HD=ow();uw.exports=HD});var lw=a((S9,cw)=>{"use strict";cw.exports=sw()});var pw=a((w9,fw)=>{fw.exports=lw()});var vw=a(()=>{"use strict";var KD=x(),zD=It().filter,VD=yt(),YD=VD("filter");KD({target:"Array",proto:!0,forced:!YD},{filter:function(r){return zD(this,r,arguments.length>1?arguments[1]:void 0)}})});var mw=a((C9,dw)=>{"use strict";vw();var JD=oe();dw.exports=JD("Array","filter")});var yw=a((E9,hw)=>{"use strict";var QD=B(),XD=mw(),as=Array.prototype;hw.exports=function(e){var r=e.filter;return e===as||QD(as,e)&&r===as.filter?XD:r}});var bw=a((I9,gw)=>{"use strict";var ZD=yw();gw.exports=ZD});var xw=a((k9,qw)=>{"use strict";var e3=bw();qw.exports=e3});var ww=a((P9,Sw)=>{"use strict";var r3=xw();Sw.exports=r3});var Ow=a((_9,Tw)=>{"use strict";Tw.exports=ww()});var Ew=a((R9,Cw)=>{Cw.exports=Ow()});var Uw=a(()=>{"use strict";var c3=x(),l3=U(),us=_r(),f3=Iu(),$w=Fo(),p3=Q(),Lw=$(),v3=Ye(),Dw=P(),ss=l3("Reflect","construct"),d3=Object.prototype,m3=[].push,Bw=Dw(function(){function e(){}return!(ss(function(){},[],e)instanceof e)}),Gw=!Dw(function(){ss(function(){})}),Fw=Bw||Gw;c3({target:"Reflect",stat:!0,forced:Fw,sham:Fw},{construct:function(r,t){$w(r),p3(t);var n=arguments.length<3?r:$w(arguments[2]);if(Gw&&!Bw)return ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return us(m3,i,t),new(us(f3,r,i))}var o=n.prototype,u=v3(Lw(o)?o:d3),l=us(r,u,t);return Lw(l)?l:u}})});var Hw=a((pY,Ww)=>{"use strict";Uw();var h3=K();Ww.exports=h3.Reflect.construct});var zw=a((vY,Kw)=>{"use strict";var y3=Hw();Kw.exports=y3});var Yw=a((dY,Vw)=>{"use strict";var g3=zw();Vw.exports=g3});var Qw=a((mY,Jw)=>{"use strict";var b3=Yw();Jw.exports=b3});var Ni=a((hY,Xw)=>{"use strict";Xw.exports=Qw()});var eT=a((yY,Zw)=>{Zw.exports=Ni()});var cT=a((CY,sT)=>{"use strict";var q3=P();sT.exports=q3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var pT=a((EY,fT)=>{"use strict";var x3=P(),S3=$(),w3=qe(),lT=cT(),Mi=Object.isExtensible,T3=x3(function(){Mi(1)});fT.exports=T3||lT?function(r){return!S3(r)||lT&&w3(r)==="ArrayBuffer"?!1:Mi?Mi(r):!0}:Mi});var dT=a((IY,vT)=>{"use strict";var O3=P();vT.exports=!O3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ms=a((kY,yT)=>{"use strict";var C3=x(),E3=A(),I3=Gr(),k3=$(),ps=W(),P3=te().f,mT=Et(),_3=Ja(),vs=pT(),R3=Mr(),A3=dT(),hT=!1,Fe=R3("meta"),N3=0,ds=function(e){P3(e,Fe,{value:{objectID:"O"+N3++,weakData:{}}})},M3=function(e,r){if(!k3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ps(e,Fe)){if(!vs(e))return"F";if(!r)return"E";ds(e)}return e[Fe].objectID},j3=function(e,r){if(!ps(e,Fe)){if(!vs(e))return!0;if(!r)return!1;ds(e)}return e[Fe].weakData},$3=function(e){return A3&&hT&&vs(e)&&!ps(e,Fe)&&ds(e),e},L3=function(){F3.enable=function(){},hT=!0;var e=mT.f,r=E3([].splice),t={};t[Fe]=1,e(t).length&&(mT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},C3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:_3.f}))},F3=yT.exports={enable:L3,fastKey:M3,getWeakData:j3,onFreeze:$3};I3[Fe]=!0});var qT=a((PY,bT)=>{"use strict";var D3=x(),B3=_(),G3=ms(),U3=P(),W3=xe(),H3=pe(),K3=ni(),z3=N(),V3=$(),Y3=ir(),J3=_e(),Q3=te().f,X3=It().forEach,Z3=G(),gT=Ve(),eB=gT.set,rB=gT.getterFor;bT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=B3[e],l=u&&u.prototype,c={},s;if(!Z3||!z3(u)||!(i||l.forEach&&!U3(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),G3.enable();else{s=r(function(v,d){eB(K3(v,f),{type:e,collection:new u}),Y3(d)||H3(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=rB(e);X3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&W3(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!V3(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||Q3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return J3(s,e,!1,!0),c[e]=s,D3({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var ST=a((_Y,xT)=>{"use strict";var tB=ke();xT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:tB(e,n,r[n],t);return e}});var kT=a((RY,IT)=>{"use strict";var wT=Ye(),nB=$n(),TT=ST(),iB=z(),aB=ni(),oB=ir(),uB=pe(),sB=_n(),ji=Rn(),cB=Lo(),on=G(),OT=ms().fastKey,ET=Ve(),CT=ET.set,hs=ET.getterFor;IT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){aB(s,o),CT(s,{type:r,index:wT(null),first:null,last:null,size:0}),on||(s.size=0),oB(f)||uB(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=hs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=OT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),on?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=OT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return TT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=wT(null),on?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),on?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=iB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),TT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),on&&nB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=hs(r),o=hs(n);sB(e,r,function(u,l){CT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,ji(void 0,!0)):ji(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),cB(r)}}});var PT=a(()=>{"use strict";var lB=qT(),fB=kT();lB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},fB)});var _T=a(()=>{"use strict";PT()});var AT=a(($Y,RT)=>{"use strict";RT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((LY,MT)=>{"use strict";var pB=U(),$i=AT(),NT=pB("Map");MT.exports={Map:NT,set:$i("set",2),get:$i("get",1),has:$i("has",1),remove:$i("delete",1),proto:NT.prototype}});var ys=a(()=>{"use strict";var vB=x(),dB=A(),mB=F(),hB=ar(),yB=pe(),Li=ae(),jT=Z(),gB=P(),$T=Li.Map,bB=Li.has,qB=Li.get,xB=Li.set,SB=dB([].push),wB=jT||gB(function(){return $T.groupBy("ab",function(e){return e}).get("a").length!==1});vB({target:"Map",stat:!0,forced:jT||wB},{groupBy:function(r,t){hB(r),mB(t);var n=new $T,i=0;return yB(r,function(o){var u=t(o,i++);bB(n,u)?SB(qB(n,u),o):xB(n,u,[o])}),n}})});var V=a((BY,LT)=>{"use strict";var TB=Ke(),OB=TypeError;LT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new OB(TB(e)+" is not a map")}});var bs=a(()=>{"use strict";var CB=x(),EB=V(),gs=ae(),IB=Z(),kB=gs.get,PB=gs.has,_B=gs.set;CB({target:"Map",proto:!0,real:!0,forced:IB},{getOrInsert:function(r,t){return PB(EB(this),r)?kB(this,r):(_B(this,r,t),t)}})});var xs=a(()=>{"use strict";var RB=x(),AB=F(),NB=V(),qs=ae(),MB=Z(),jB=qs.get,$B=qs.has,LB=qs.set;RB({target:"Map",proto:!0,real:!0,forced:MB},{getOrInsertComputed:function(r,t){if(NB(this),AB(t),$B(this,r))return jB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return LB(this,r,n),n}})});var DT=a((KY,FT)=>{"use strict";mr();_T();ys();bs();xs();Ct();fr();var FB=K();FT.exports=FB.Map});var GT=a((zY,BT)=>{"use strict";var DB=DT();hr();BT.exports=DB});var Ss=a(()=>{"use strict";bs()});var ws=a(()=>{"use strict";xs()});var UT=a(()=>{"use strict";ys()});var HT=a((eJ,WT)=>{"use strict";var BB=GT();Ss();ws();UT();WT.exports=BB});var zT=a((rJ,KT)=>{"use strict";var GB=z(),UB=Q(),WB=re(),HB=pe();KT.exports=function(e,r,t){return function(i){var o=WB(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?GB(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return HB(o,function(v){var d=c?s(v,p++):v;t?r(f,UB(d)[0],d[1]):r(f,d)}),f}}});var YT=a(()=>{"use strict";var KB=x(),VT=ae(),zB=zT();KB({target:"Map",stat:!0,forced:!0},{from:zB(VT.Map,VT.set,!0)})});var QT=a((iJ,JT)=>{"use strict";var VB=Q();JT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,VB(l)[0],l[1]):r(i,l)}return i}}});var ZT=a(()=>{"use strict";var YB=x(),XT=ae(),JB=QT();YB({target:"Map",stat:!0,forced:!0},{of:JB(XT.Map,XT.set,!0)})});var rO=a(()=>{"use strict";var QB=x(),XB=D(),ZB=pe(),e4=N(),eO=F(),r4=ae().Map;QB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=e4(this)?this:r4,i=new n;eO(t);var o=eO(i.set);return ZB(r,function(u){XB(o,i,t(u),u)}),i}})});var tO=a(()=>{"use strict";var t4=x(),n4=V(),i4=ae().remove;t4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=n4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=i4(r,arguments[i]),t=t&&n;return!!t}})});var iO=a(()=>{"use strict";var a4=x(),o4=V(),Ts=ae(),u4=Ts.get,s4=Ts.has,nO=Ts.set;a4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=o4(this),i,o;return s4(n,r)?(i=u4(n,r),"update"in t&&(i=t.update(i,r,n),nO(n,r,i)),i):(o=t.insert(r,n),nO(n,r,o),o)}})});var oO=a((vJ,aO)=>{"use strict";var c4=D();aO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=c4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=a((dJ,uO)=>{"use strict";var l4=oO();uO.exports=function(e,r,t){return t?l4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var sO=a(()=>{"use strict";var f4=x(),p4=z(),v4=V(),d4=he();f4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=v4(this),n=p4(r,arguments.length>1?arguments[1]:void 0);return d4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var lO=a(()=>{"use strict";var m4=x(),h4=z(),y4=V(),cO=ae(),g4=he(),b4=cO.Map,q4=cO.set;m4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=y4(this),n=h4(r,arguments.length>1?arguments[1]:void 0),i=new b4;return g4(t,function(o,u){n(o,u,t)&&q4(i,u,o)}),i}})});var fO=a(()=>{"use strict";var x4=x(),S4=z(),w4=V(),T4=he();x4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=w4(this),n=S4(r,arguments.length>1?arguments[1]:void 0),i=T4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var pO=a(()=>{"use strict";var O4=x(),C4=z(),E4=V(),I4=he();O4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=E4(this),n=C4(r,arguments.length>1?arguments[1]:void 0),i=I4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var dO=a((wJ,vO)=>{"use strict";vO.exports=function(e,r){return e===r||e!==e&&r!==r}});var mO=a(()=>{"use strict";var k4=x(),P4=dO(),_4=V(),R4=he();k4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return R4(_4(this),function(t){if(P4(t,r))return!0},!0)===!0}})});var hO=a(()=>{"use strict";var A4=x(),N4=V(),M4=he();A4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=M4(N4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var gO=a(()=>{"use strict";var j4=x(),$4=z(),L4=V(),yO=ae(),F4=he(),D4=yO.Map,B4=yO.set;j4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=L4(this),n=$4(r,arguments.length>1?arguments[1]:void 0),i=new D4;return F4(t,function(o,u){B4(i,n(o,u,t),o)}),i}})});var qO=a(()=>{"use strict";var G4=x(),U4=z(),W4=V(),bO=ae(),H4=he(),K4=bO.Map,z4=bO.set;G4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=W4(this),n=U4(r,arguments.length>1?arguments[1]:void 0),i=new K4;return H4(t,function(o,u){z4(i,u,n(o,u,t))}),i}})});var xO=a(()=>{"use strict";var V4=x(),Y4=V(),J4=pe(),Q4=ae().set;V4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=Y4(this),n=arguments.length,i=0;i<n;)J4(arguments[i++],function(o,u){Q4(t,o,u)},{AS_ENTRIES:!0});return t}})});var SO=a(()=>{"use strict";var X4=x(),Z4=F(),eG=V(),rG=he(),tG=TypeError;X4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=eG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(Z4(r),rG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new tG("Reduce of empty map with no initial value");return i}})});var wO=a(()=>{"use strict";var nG=x(),iG=z(),aG=V(),oG=he();nG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=aG(this),n=iG(r,arguments.length>1?arguments[1]:void 0);return oG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var OO=a(()=>{"use strict";var uG=x(),TO=F(),sG=V(),Os=ae(),cG=TypeError,lG=Os.get,fG=Os.has,pG=Os.set;uG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=sG(this),i=arguments.length;TO(t);var o=fG(n,r);if(!o&&i<3)throw new cG("Updating absent value");var u=o?lG(n,r):TO(i>2?arguments[2]:void 0)(r,n);return pG(n,r,t(u,r,n)),n}})});var Es=a((DJ,CO)=>{"use strict";var Fi=D(),Cs=F(),Di=N(),vG=Q(),dG=TypeError;CO.exports=function(r,t){var n=vG(this),i=Cs(n.get),o=Cs(n.has),u=Cs(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Di(t)&&!Di(l))throw new dG("At least one callback required");return Fi(o,n,r)?(c=Fi(i,n,r),Di(t)&&(c=t(c),Fi(u,n,r,c))):Di(l)&&(c=l(),Fi(u,n,r,c)),c}});var EO=a(()=>{"use strict";var mG=x(),hG=Es();mG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:hG})});var IO=a(()=>{"use strict";var yG=x(),gG=Es();yG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:gG})});var PO=a((HJ,kO)=>{"use strict";var bG=HT();YT();ZT();rO();tO();iO();sO();lO();fO();pO();mO();Ss();ws();hO();gO();qO();xO();SO();wO();OO();EO();IO();kO.exports=bG});var RO=a((KJ,_O)=>{"use strict";_O.exports=PO()});var NO=a(()=>{"use strict";var qG=x(),xG=ct(),SG=ka().indexOf,wG=Ju(),Is=xG([].indexOf),AO=!!Is&&1/Is([1],1,-0)<0,TG=AO||!wG("indexOf");qG({target:"Array",proto:!0,forced:TG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return AO?Is(this,r,t)||0:SG(this,r,t)}})});var jO=a((YJ,MO)=>{"use strict";NO();var OG=oe();MO.exports=OG("Array","indexOf")});var LO=a((JJ,$O)=>{"use strict";var CG=B(),EG=jO(),ks=Array.prototype;$O.exports=function(e){var r=e.indexOf;return e===ks||CG(ks,e)&&r===ks.indexOf?EG:r}});var DO=a((QJ,FO)=>{"use strict";var IG=LO();FO.exports=IG});var GO=a((XJ,BO)=>{"use strict";var kG=DO();BO.exports=kG});var WO=a((ZJ,UO)=>{"use strict";var PG=GO();UO.exports=PG});var KO=a((eQ,HO)=>{"use strict";HO.exports=WO()});var cC=a(()=>{"use strict";var jG=x(),$G=re(),sC=Cn(),LG=P(),FG=LG(function(){sC(1)});jG({target:"Object",stat:!0,forced:FG},{keys:function(r){return sC($G(r))}})});var fC=a((aX,lC)=>{"use strict";cC();var DG=K();lC.exports=DG.Object.keys});var vC=a((oX,pC)=>{"use strict";var BG=fC();pC.exports=BG});var mC=a((uX,dC)=>{"use strict";var GG=vC();dC.exports=GG});var yC=a((sX,hC)=>{"use strict";var UG=mC();hC.exports=UG});var bC=a((cX,gC)=>{"use strict";gC.exports=yC()});var xC=a((lX,qC)=>{qC.exports=bC()});var kr="";function Hs(e){kr=e.replace(/\/+$/,"")}async function ut(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Ks(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`);return await ut(n,"Failed to fetch comments"),(await n.json()).data}async function zi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ut(s,"Failed to create comment"),s.json()}async function zs(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ut(t,"Failed to update comment"),t.json()}async function Vs(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ut(t,"Failed to update comment status"),t.json()}async function Ys(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE"});await ut(r,"Failed to delete comment")}var jL=g(Br(),1),$L=g(Nn(),1),LL=g(Jn(),1),FL=g(Qn(),1),DL=g(Xn(),1);var wu=g(rt(),1);function Wy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):wu.default.resolve(c).then(n,i)}function xr(e){return function(){var r=this,t=arguments;return new wu.default(function(n,i){var o=e.apply(r,t);function u(c){Wy(o,n,i,u,l,"next",c)}function l(c){Wy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function Ze(e){return new Bt(e,0)}var Tu=g(rt(),1),eg=g(Se(),1),rg=g(vi(),1);function Te(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Bt;Tu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Tu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof eg.default=="function"&&rg.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var BL=g(se(),1),GL=g(Oq(),1);function ce(e){var r,t=NL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function NL(e){return"startContainer"in e}function rr(e){if(ML(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function ML(e){return"startContainer"in e}var $q=g(jq(),1);function Lq(e){if((0,$q.default)(e))return e}var Qq=g(Se(),1),Xq=g(Ro(),1),Zq=g(zu(),1);function ex(e,r){var t=e==null?null:typeof Qq.default<"u"&&(0,Xq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Zq.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var rx=g(Sa(),1),tx=g(Va(),1);function Ii(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Vu(e,r){if(e){var t;if(typeof e=="string")return Ii(e,r);var n=(0,rx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,tx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ii(e,r):void 0}}function nx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Lq(e)||ex(e,r)||Vu(e,r)||nx()}var ix=g(Se(),1),ax=g(vi(),1),ox=g(Jt(),1),en=g(rt(),1);function nt(e){var r,t,n,i=2;for(typeof ix.default<"u"&&(t=ax.default,n=ox.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ki(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ki(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return ki=function(n){this.s=n,this.n=n.next},ki.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new ki(e)}var mD=g(se(),1);var cD=g(se(),1),lD=g(xx(),1),fD=g(wx(),1),pD=g(Hx(),1),vD=g(lS(),1),dD=g(es(),1);var Rs=g(se(),1);var s3=g(se(),1);var ts=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function TS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Sr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var rs=g(Ht(),1);var tn=g(Se(),1),OS=g(Jt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof tn.default=="function"&&typeof OS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Le(e)}var $S=g(jS(),1);function LS(e,r){if(Le(e)!="object"||!e)return e;var t=e[$S.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Pi(e){var r=LS(e,"string");return Le(r)=="symbol"?r:r+""}function FS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,rs.default)(e,Pi(n.key),n)}}function nn(e,r,t){return r&&FS(e.prototype,r),t&&FS(e,t),(0,rs.default)(e,"prototype",{writable:!1}),e}var DS=g(Ht(),1);function wr(e,r,t){return(r=Pi(r))in e?(0,DS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var BS=g(Br(),1);var _i="Iterator exhausted before seek ended.",an=function(){function e(r){Sr(this,e),this.chunker=r,wr(this,"currentChunkPosition",0),wr(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=$e(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(_i)}else for(;!rn(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(_i)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,BS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(_i)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=$e(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(_i)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function US(e,r){return ns.apply(this,arguments)}function ns(){return ns=xr(ts.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return ts.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new an(t()),p=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ri(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ri(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Ai(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&TS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=GS(f,p,!0),w!==void 0&&!o&&(w=Ri(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=GS(f,p,!1),C!==void 0&&!o&&(C=C+Ri(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ns.apply(this,arguments)}function GS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ri(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(qD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function qD(e){return/^\s+$/.test(e)}var Pw=g(Br(),1),_w=g(Nn(),1),Rw=g(Jn(),1),Aw=g(Qn(),1),Nw=g(Xn(),1);var os=g(se(),1),Mw=g(pw(),1),jw=g(Ew(),1);function Iw(e,r){var t;if(typeof Rw.default>"u"||(0,Aw.default)(e)==null){if(Array.isArray(e)||(t=t3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Nw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function t3(e,r){var t;if(e){if(typeof e=="string")return kw(e,r);var n=(0,Pw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,_w.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kw(e,r)}}function kw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ai(e){return function(){var r=Te(os.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,ge,k,ee,be,J,L;return os.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Iw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,Mw.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(We){var Us=v[We];w=(0,jw.default)(w).call(w,function(VC){return Us===c[We-VC]}),Us===c[0]&&w.push(We)},ge=C;ge<v.length;ge++)j(ge);k=Iw(w);try{for(k.s();!(ee=k.n()).done;)be=ee.value,J=v.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),s.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var o3=g(se(),1);var n3=g(Br(),1),i3=g(es(),1);var u3=g(se(),1);var sn=g(eT(),1);var tT=g(mi(),1),nT=g(Ht(),1);var cs=g(hi(),1),rT=g(Wt(),1);function tr(e,r){var t;return tr=cs.default?(0,rT.default)(t=cs.default).call(t):function(n,i){return n.__proto__=i,n},tr(e,r)}function ls(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,tT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,nT.default)(e,"prototype",{writable:!1}),r&&tr(e,r)}function iT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iT(e)}var oT=g(hi(),1),uT=g(Wt(),1),fs=g(di(),1);function Tr(e){var r;return Tr=oT.default?(0,uT.default)(r=fs.default).call(r):function(t){return t.__proto__||(0,fs.default)(t)},Tr(e)}var _s=g(RO(),1),eC=g(mi(),1);var zO=g(KO(),1);function VO(e){try{var r;return(0,zO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var JO=g(Ni(),1),QO=g(zu(),1),XO=g(Wt(),1);var YO=g(Ni(),1);function Ps(){try{var e=!Boolean.prototype.valueOf.call((0,YO.default)(Boolean,[],function(){}))}catch{}return(Ps=function(){return!!e})()}function ZO(e,r,t){if(Ps())return JO.default.apply(null,arguments);var n=[null];(0,QO.default)(n).apply(n,r);var i=new((0,XO.default)(e).apply(e,n));return t&&tr(i,t.prototype),i}function un(e){var r=typeof _s.default=="function"?new _s.default:void 0;return un=function(n){if(n===null||!VO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return ZO(n,arguments,Tr(this).constructor)}return i.prototype=(0,eC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),tr(i,n)},un(e)}function nC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=rC(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=rC(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function rC(e,r){var t;if(tC(e))return[e,r];var n;if(_G(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(tC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function tC(e){return e.nodeType===Node.TEXT_NODE}function _G(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function aC(e){var r=RG();return function(){var n=Tr(e),i;if(r){var o=Tr(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return aT(this,i)}}function RG(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Bi=function(e){ls(t,e);var r=aC(t);function t(n){return Sr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),AG=function(e){ls(t,e);var r=aC(t);function t(n){return Sr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Or=function(){function e(r){var t=this;if(Sr(this,e),wr(this,"scope",void 0),wr(this,"iter",void 0),this.scope=rr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!iC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Bi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!iC(t))throw new Bi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new AG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=nC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function iC(e){return e.nodeType===Node.TEXT_NODE}function oC(e,r){return As.apply(this,arguments)}function As(){return As=xr(Rs.default.mark(function e(r,t){var n,i,o,u=arguments;return Rs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=rr(t??ce(r)),o=new Or(i),c.next=5,US(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),As.apply(this,arguments)}var Ns=g(se(),1);function uC(e){var r=Ai(e);return function(){var t=Te(Ns.default.mark(function i(o){var u,l,c,s,f,p,v,d;return Ns.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Or(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Bi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,Ze(f.next());case 17:return p=m.sent,l=p.done,m.next=21,Ze(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,Ze(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var NG=g(se(),1);var MG=g(se(),1);var WG=g(xC(),1),HG=g(Br(),1),KG=g(Nn(),1),zG=g(Jn(),1),VG=g(Qn(),1),YG=g(Xn(),1);async function SC(e,r){let t=await oC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Gi(e,r){let t=uC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var it="fb-highlight",wC="fb-highlight-active";var cn=null;function OC(e){cn=e}function Ui(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=TC(e,r);t.push(n)}else{let n=QG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(TC(u,r))}}return t}function TC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return JG(e,r,o);let u=document.createElement("mark");u.className=it,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function JG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",it),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ms(e){document.querySelectorAll(`.${it}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function CC(){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Wi(e){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(wC):r.classList.remove(wC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function EC(e){let r=document.querySelector(`.${it}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function QG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function IC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function kC(e,r){let t=IC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function De(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var XG=`
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
`,PC=null,_C=null;function RC(e,r){_C=e,PC=r,ZG()}function ZG(){let e=document.createElement("style");e.textContent=XG,document.head.appendChild(e)}function AC(){let e=PC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(_C.contentSelector||"body").innerHTML,c=kC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${De(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function eU(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function js(e){if(!e)return"";let r=De(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,i)=>{let o=t.length;return t.push(`<code>${i}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,i,o)=>{let u=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return eU(u)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${i}</a>`:i}),r=r.replace(/\x01(\d+)\x02/g,(n,i)=>t[i]),r=r.replace(/\n/g,"<br>"),r}function NC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function MC(e,r){return e.length>r?e.slice(0,r)+"...":e}function jC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function LC(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function Cr(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>$C(t)),t.appendChild(o)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>$C(t),r==="error"?8e3:4e3)}function $C(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var rU=320,DC="feedback-layer-commenter",X=null,Ge=null,Be=null,$s=null,BC=null,Ls=null,Fs=null,Ds=null,Bs=null,Gs=!1,GC=[],UC=new Set;function at(){return localStorage.getItem(DC)||""}function WC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){BC=e,Ls=r,Fs=t,Ds=n,Bs=i,aU(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${De(at())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>fn()),document.body.appendChild(o),document.body.appendChild(X),LC(X),Ge=X.querySelector(".fb-comment-list"),Be=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(DC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>AC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>tU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Gs=s.checked,nr(GC,UC)})}function fn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function tU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function HC(e){if(fn(),!at()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}$s=e,Be.style.display="",Be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${De(MC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Be.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!at()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(BC({comment:n,commenter:at()}),Be.style.display="none",$s=null)};Be.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Be.style.display="none",$s=null}),Be.scrollIntoView({behavior:"smooth",block:"nearest"})}function nr(e,r=new Set,t=new Map){GC=e,UC=r,Ge.innerHTML="";let{topLevel:n,repliesByParent:i}=NC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Gs}),l=Gs?u:u.filter(s=>s.status!=="closed");if(o.length===0){Ge.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ge.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ge.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(FC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(FC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),nU(s.id,f,v)}),f.appendChild(v),Ge.appendChild(f)}}function FC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${js(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${De(e.author)}</span>
      <span class="fb-cmt-time">${jC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Wi(e.id),EC(e.id),Ge.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Fs&&Fs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),iU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ls&&Ls(e.id)}),n}function nU(e,r,t){fn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!at()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Ds&&Ds({parent_id:e,comment:l,commenter:at()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function iU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${De(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Bs&&Bs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=js(n)})}function KC(e){let r=Ge.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ge.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function aU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${rU}px;
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
  `,document.head.appendChild(e)}var ot=null,Hi=null,Ki=null,Y=[],Er=null,Ce=null,ye=new Set,Ue=new Map;function oU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Hs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Hi=r.documentUri||window.location.origin+window.location.pathname,Ki=r.documentId||null,WC({onSubmit:fU,onDelete:mU,onResolve:pU,onReply:vU,onEdit:dU}),OC(i=>{fn(),KC(i),Wi(i)}),cU(),await t(),uU(),RC(r,()=>Y)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function uU(){try{Y=await Ks(Hi,Ki),ye=await sU(Y),nr(Y,ye,Ue)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Cr(`Failed to load comments: ${e.message}`,"error")}}async function sU(e){CC();let r=new Set;Ue.clear();for(let t of e)if(!t.parent)try{let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Ui(n,t.id),r.add(t.id),Ue.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ue.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function cU(){document.addEventListener("mouseup",zC),document.addEventListener("keyup",zC)}function zC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){pn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){pn();return}if(!ot.contains(r.commonAncestorContainer)){pn();return}lU(r)},10)}function lU(e){pn();let r=e.getBoundingClientRect();Ce=document.createElement("button"),Ce.className="fb-annotate-tooltip",Ce.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ce.style.top=window.scrollY+r.top-36+"px",Ce.style.left=window.scrollX+r.left+r.width/2-40+"px",Ce.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Er=await SC(i,ot),HC(Er.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}pn()}),document.body.appendChild(Ce)}function pn(){Ce&&(Ce.remove(),Ce=null)}async function fU({comment:e,commenter:r}){if(Er){try{let t=await zi({uri:Hi,document:Ki,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r});Y.push(t);let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&(Ui(n,t.id),ye.add(t.id)),nr(Y,ye,Ue),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Cr(`Failed to save comment: ${t.message}`,"error")}Er=null}}async function pU(e,r){try{let n=await Vs(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Ms(e);else{let o=n,u=await Gi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(Ui(u,o.id),ye.add(o.id)):ye.delete(o.id)}nr(Y,ye,Ue)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function vU({parent_id:e,comment:r,commenter:t}){try{let n=await zi({uri:Hi,document:Ki,body:r,author:t,parent:e});Y.push(n),nr(Y,ye,Ue)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Cr(`Failed to save reply: ${n.message}`,"error")}}async function dU(e,r){try{let t=await zs(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),nr(Y,ye,Ue)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function mU(e){try{await Ys(e),Ms(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),nr(Y,ye,Ue)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Cr(`Failed to delete comment: ${r.message}`,"error")}}try{oU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
