var FeedbackLayer=(()=>{var XC=Object.create;var Hs=Object.defineProperty;var ZC=Object.getOwnPropertyDescriptor;var eE=Object.getOwnPropertyNames;var rE=Object.getPrototypeOf,tE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var nE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of eE(r))!tE.call(e,i)&&i!==t&&Hs(e,i,{get:()=>r[i],enumerable:!(n=ZC(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?XC(rE(e)):{},nE(r||!e||!e.__esModule?Hs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((qU,Qs)=>{"use strict";Qs.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=a((xU,Xs)=>{"use strict";var iE=P();Xs.exports=!iE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((SU,rc)=>{"use strict";var Zs=Pr(),ec=Function.prototype,Vi=ec.call,aE=Zs&&ec.bind.bind(Vi,Vi);rc.exports=Zs?aE:function(e){return function(){return Vi.apply(e,arguments)}}});var G=a((wU,tc)=>{"use strict";var oE=A();tc.exports=oE({}.isPrototypeOf)});var _=a((Yi,nc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};nc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Yi=="object"&&Yi)||function(){return this}()||Function("return this")()});var _r=a((TU,uc)=>{"use strict";var uE=Pr(),oc=Function.prototype,ic=oc.apply,ac=oc.call;uc.exports=typeof Reflect=="object"&&Reflect.apply||(uE?ac.bind(ic):function(){return ac.apply(ic,arguments)})});var xe=a((OU,cc)=>{"use strict";var sc=A(),sE=sc({}.toString),cE=sc("".slice);cc.exports=function(e){return cE(sE(e),8,-1)}});var ct=a((CU,lc)=>{"use strict";var lE=xe(),fE=A();lc.exports=function(e){if(lE(e)==="Function")return fE(e)}});var N=a((EU,fc)=>{"use strict";var Ji=typeof document=="object"&&document.all;fc.exports=typeof Ji>"u"&&Ji!==void 0?function(e){return typeof e=="function"||e===Ji}:function(e){return typeof e=="function"}});var U=a((IU,pc)=>{"use strict";var pE=P();pc.exports=!pE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((kU,vc)=>{"use strict";var vE=Pr(),vn=Function.prototype.call;vc.exports=vE?vn.bind(vn):function(){return vn.apply(vn,arguments)}});var Qi=a(hc=>{"use strict";var dc={}.propertyIsEnumerable,mc=Object.getOwnPropertyDescriptor,dE=mc&&!dc.call({1:2},1);hc.f=dE?function(r){var t=mc(this,r);return!!t&&t.enumerable}:dc});var Ke=a((_U,yc)=>{"use strict";yc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var dn=a((RU,gc)=>{"use strict";var mE=A(),hE=P(),yE=xe(),Xi=Object,gE=mE("".split);gc.exports=hE(function(){return!Xi("z").propertyIsEnumerable(0)})?function(e){return yE(e)==="String"?gE(e,""):Xi(e)}:Xi});var ar=a((AU,bc)=>{"use strict";bc.exports=function(e){return e==null}});var or=a((NU,qc)=>{"use strict";var bE=ar(),qE=TypeError;qc.exports=function(e){if(bE(e))throw new qE("Can't call method on "+e);return e}});var ke=a((MU,xc)=>{"use strict";var xE=dn(),SE=or();xc.exports=function(e){return xE(SE(e))}});var $=a((jU,Sc)=>{"use strict";var wE=N();Sc.exports=function(e){return typeof e=="object"?e!==null:wE(e)}});var z=a(($U,wc)=>{"use strict";wc.exports={}});var W=a((LU,Oc)=>{"use strict";var Zi=z(),ea=_(),TE=N(),Tc=function(e){return TE(e)?e:void 0};Oc.exports=function(e,r){return arguments.length<2?Tc(Zi[e])||Tc(ea[e]):Zi[e]&&Zi[e][r]||ea[e]&&ea[e][r]}});var Rr=a((FU,Ic)=>{"use strict";var OE=_(),Cc=OE.navigator,Ec=Cc&&Cc.userAgent;Ic.exports=Ec?String(Ec):""});var Ar=a((DU,Nc)=>{"use strict";var Ac=_(),ra=Rr(),kc=Ac.process,Pc=Ac.Deno,_c=kc&&kc.versions||Pc&&Pc.version,Rc=_c&&_c.v8,he,mn;Rc&&(he=Rc.split("."),mn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!mn&&ra&&(he=ra.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=ra.match(/Chrome\/(\d+)/),he&&(mn=+he[1])));Nc.exports=mn});var ur=a((BU,jc)=>{"use strict";var Mc=Ar(),CE=P(),EE=_(),IE=EE.String;jc.exports=!!Object.getOwnPropertySymbols&&!CE(function(){var e=Symbol("symbol detection");return!IE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Mc&&Mc<41})});var ta=a((GU,$c)=>{"use strict";var kE=ur();$c.exports=kE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=a((UU,Lc)=>{"use strict";var PE=W(),_E=N(),RE=G(),AE=ta(),NE=Object;Lc.exports=AE?function(e){return typeof e=="symbol"}:function(e){var r=PE("Symbol");return _E(r)&&RE(r.prototype,NE(e))}});var ze=a((WU,Fc)=>{"use strict";var ME=String;Fc.exports=function(e){try{return ME(e)}catch{return"Object"}}});var F=a((HU,Dc)=>{"use strict";var jE=N(),$E=ze(),LE=TypeError;Dc.exports=function(e){if(jE(e))return e;throw new LE($E(e)+" is not a function")}});var hn=a((KU,Bc)=>{"use strict";var FE=F(),DE=ar();Bc.exports=function(e,r){var t=e[r];return DE(t)?void 0:FE(t)}});var Uc=a((zU,Gc)=>{"use strict";var na=D(),ia=N(),aa=$(),BE=TypeError;Gc.exports=function(e,r){var t,n;if(r==="string"&&ia(t=e.toString)&&!aa(n=na(t,e))||ia(t=e.valueOf)&&!aa(n=na(t,e))||r!=="string"&&ia(t=e.toString)&&!aa(n=na(t,e)))return n;throw new BE("Can't convert object to primitive value")}});var Z=a((VU,Wc)=>{"use strict";Wc.exports=!0});var zc=a((YU,Kc)=>{"use strict";var Hc=_(),GE=Object.defineProperty;Kc.exports=function(e,r){try{GE(Hc,e,{value:r,configurable:!0,writable:!0})}catch{Hc[e]=r}return r}});var lt=a((JU,Jc)=>{"use strict";var UE=Z(),WE=_(),HE=zc(),Vc="__core-js_shared__",Yc=Jc.exports=WE[Vc]||HE(Vc,{});(Yc.versions||(Yc.versions=[])).push({version:"3.48.0",mode:UE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=a((QU,Xc)=>{"use strict";var Qc=lt();Xc.exports=function(e,r){return Qc[e]||(Qc[e]=r||{})}});var re=a((XU,Zc)=>{"use strict";var KE=or(),zE=Object;Zc.exports=function(e){return zE(KE(e))}});var H=a((ZU,el)=>{"use strict";var VE=A(),YE=re(),JE=VE({}.hasOwnProperty);el.exports=Object.hasOwn||function(r,t){return JE(YE(r),t)}});var Mr=a((e5,rl)=>{"use strict";var QE=A(),XE=0,ZE=Math.random(),e0=QE(1.1.toString);rl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+e0(++XE+ZE,36)}});var R=a((r5,nl)=>{"use strict";var r0=_(),t0=sr(),tl=H(),n0=Mr(),i0=ur(),a0=ta(),jr=r0.Symbol,oa=t0("wks"),o0=a0?jr.for||jr:jr&&jr.withoutSetter||n0;nl.exports=function(e){return tl(oa,e)||(oa[e]=i0&&tl(jr,e)?jr[e]:o0("Symbol."+e)),oa[e]}});var ul=a((t5,ol)=>{"use strict";var u0=D(),il=$(),al=Nr(),s0=hn(),c0=Uc(),l0=R(),f0=TypeError,p0=l0("toPrimitive");ol.exports=function(e,r){if(!il(e)||al(e))return e;var t=s0(e,p0),n;if(t){if(r===void 0&&(r="default"),n=u0(t,e,r),!il(n)||al(n))return n;throw new f0("Can't convert object to primitive value")}return r===void 0&&(r="number"),c0(e,r)}});var yn=a((n5,sl)=>{"use strict";var v0=ul(),d0=Nr();sl.exports=function(e){var r=v0(e,"string");return d0(r)?r:r+""}});var gn=a((i5,ll)=>{"use strict";var m0=_(),cl=$(),ua=m0.document,h0=cl(ua)&&cl(ua.createElement);ll.exports=function(e){return h0?ua.createElement(e):{}}});var sa=a((a5,fl)=>{"use strict";var y0=U(),g0=P(),b0=gn();fl.exports=!y0&&!g0(function(){return Object.defineProperty(b0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(vl=>{"use strict";var q0=U(),x0=D(),S0=Qi(),w0=Ke(),T0=ke(),O0=yn(),C0=H(),E0=sa(),pl=Object.getOwnPropertyDescriptor;vl.f=q0?pl:function(r,t){if(r=T0(r),t=O0(t),E0)try{return pl(r,t)}catch{}if(C0(r,t))return w0(!x0(S0.f,r,t),r[t])}});var ca=a((u5,dl)=>{"use strict";var I0=P(),k0=N(),P0=/#|\.prototype\./,pt=function(e,r){var t=R0[_0(e)];return t===N0?!0:t===A0?!1:k0(r)?I0(r):!!r},_0=pt.normalize=function(e){return String(e).replace(P0,".").toLowerCase()},R0=pt.data={},A0=pt.NATIVE="N",N0=pt.POLYFILL="P";dl.exports=pt});var V=a((s5,hl)=>{"use strict";var ml=ct(),M0=F(),j0=Pr(),$0=ml(ml.bind);hl.exports=function(e,r){return M0(e),r===void 0?e:j0?$0(e,r):function(){return e.apply(r,arguments)}}});var la=a((c5,yl)=>{"use strict";var L0=U(),F0=P();yl.exports=L0&&F0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((l5,gl)=>{"use strict";var D0=$(),B0=String,G0=TypeError;gl.exports=function(e){if(D0(e))return e;throw new G0(B0(e)+" is not an object")}});var te=a(ql=>{"use strict";var U0=U(),W0=sa(),H0=la(),bn=Q(),bl=yn(),K0=TypeError,fa=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,pa="enumerable",va="configurable",da="writable";ql.f=U0?H0?function(r,t,n){if(bn(r),t=bl(t),bn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&da in n&&!n[da]){var i=z0(r,t);i&&i[da]&&(r[t]=n.value,n={configurable:va in n?n[va]:i[va],enumerable:pa in n?n[pa]:i[pa],writable:!1})}return fa(r,t,n)}:fa:function(r,t,n){if(bn(r),t=bl(t),bn(n),W0)try{return fa(r,t,n)}catch{}if("get"in n||"set"in n)throw new K0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((p5,xl)=>{"use strict";var V0=U(),Y0=te(),J0=Ke();xl.exports=V0?function(e,r,t){return Y0.f(e,r,J0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((v5,wl)=>{"use strict";var vt=_(),Q0=_r(),X0=ct(),Z0=N(),eI=ft().f,rI=ca(),$r=z(),tI=V(),Lr=Se(),Sl=H();lt();var nI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return Q0(e,this,arguments)};return r.prototype=e.prototype,r};wl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,l=n?$r:$r[t]||Lr($r,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=rI(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&Sl(u,v),h=l[v],f&&(e.dontCallGetSet?(q=eI(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=tI(d,vt):e.wrap&&f?y=nI(d):o&&Z0(d)?y=X0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(y,"sham",!0),Lr(l,v,y),o&&(p=t+"Prototype",Sl($r,p)||Lr($r,p,{}),Lr($r[p],v,d),e.real&&c&&(s||!c[v])&&Lr(c,v,d)))}});var Pe=a((d5,Tl)=>{"use strict";var iI=xe();Tl.exports=Array.isArray||function(r){return iI(r)==="Array"}});var qn=a((m5,Cl)=>{"use strict";var aI=R(),oI=aI("toStringTag"),Ol={};Ol[oI]="z";Cl.exports=String(Ol)==="[object z]"});var dt=a((h5,El)=>{"use strict";var uI=qn(),sI=N(),xn=xe(),cI=R(),lI=cI("toStringTag"),fI=Object,pI=xn(function(){return arguments}())==="Arguments",vI=function(e,r){try{return e[r]}catch{}};El.exports=uI?xn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=vI(r=fI(e),lI))=="string"?t:pI?xn(r):(n=xn(r))==="Object"&&sI(r.callee)?"Arguments":n}});var ha=a((y5,Il)=>{"use strict";var dI=A(),mI=N(),ma=lt(),hI=dI(Function.toString);mI(ma.inspectSource)||(ma.inspectSource=function(e){return hI(e)});Il.exports=ma.inspectSource});var ht=a((g5,Al)=>{"use strict";var yI=A(),gI=P(),kl=N(),bI=dt(),qI=W(),xI=ha(),Pl=function(){},_l=qI("Reflect","construct"),ya=/^\s*(?:class|function)\b/,SI=yI(ya.exec),wI=!ya.test(Pl),mt=function(r){if(!kl(r))return!1;try{return _l(Pl,[],r),!0}catch{return!1}},Rl=function(r){if(!kl(r))return!1;switch(bI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return wI||!!SI(ya,xI(r))}catch{return!0}};Rl.sham=!0;Al.exports=!_l||gI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Rl:mt});var Ml=a((b5,Nl)=>{"use strict";var TI=Math.ceil,OI=Math.floor;Nl.exports=Math.trunc||function(r){var t=+r;return(t>0?OI:TI)(t)}});var Sn=a((q5,jl)=>{"use strict";var CI=Ml();jl.exports=function(e){var r=+e;return r!==r||r===0?0:CI(r)}});var ga=a((x5,$l)=>{"use strict";var EI=Sn(),II=Math.max,kI=Math.min;$l.exports=function(e,r){var t=EI(e);return t<0?II(t+r,0):kI(t,r)}});var ba=a((S5,Ll)=>{"use strict";var PI=Sn(),_I=Math.min;Ll.exports=function(e){var r=PI(e);return r>0?_I(r,9007199254740991):0}});var le=a((w5,Fl)=>{"use strict";var RI=ba();Fl.exports=function(e){return RI(e.length)}});var Fr=a((T5,Dl)=>{"use strict";var AI=U(),NI=te(),MI=Ke();Dl.exports=function(e,r,t){AI?NI.f(e,r,MI(0,t)):e[r]=t}});var Dr=a((O5,Bl)=>{"use strict";var jI=U(),$I=Pe(),LI=TypeError,FI=Object.getOwnPropertyDescriptor,DI=jI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Bl.exports=DI?function(e,r){if($I(e)&&!FI(e,"length").writable)throw new LI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((C5,Gl)=>{"use strict";var BI=P(),GI=R(),UI=Ar(),WI=GI("species");Gl.exports=function(e){return UI>=51||!BI(function(){var r=[],t=r.constructor={};return t[WI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=a((E5,Ul)=>{"use strict";var HI=A();Ul.exports=HI([].slice)});var Kl=a(()=>{"use strict";var KI=x(),Wl=Pe(),zI=ht(),VI=$(),Hl=ga(),YI=le(),JI=ke(),QI=Fr(),XI=Dr(),ZI=R(),ek=yt(),rk=cr(),tk=ek("slice"),nk=ZI("species"),qa=Array,ik=Math.max;KI({target:"Array",proto:!0,forced:!tk},{slice:function(r,t){var n=JI(this),i=YI(n),o=Hl(r,i),u=Hl(t===void 0?i:t,i),l,c,s;if(Wl(n)&&(l=n.constructor,zI(l)&&(l===qa||Wl(l.prototype))?l=void 0:VI(l)&&(l=l[nk],l===null&&(l=void 0)),l===qa||l===void 0))return rk(n,o,u);for(c=new(l===void 0?qa:l)(ik(u-o,0)),s=0;o<u;o++,s++)o in n&&QI(c,s,n[o]);return XI(c,s),c}})});var oe=a((P5,zl)=>{"use strict";var ak=_(),ok=z();zl.exports=function(e,r){var t=ok[e+"Prototype"],n=t&&t[r];if(n)return n;var i=ak[e],o=i&&i.prototype;return o&&o[r]}});var Yl=a((_5,Vl)=>{"use strict";Kl();var uk=oe();Vl.exports=uk("Array","slice")});var Ql=a((R5,Jl)=>{"use strict";var sk=G(),ck=Yl(),xa=Array.prototype;Jl.exports=function(e){var r=e.slice;return e===xa||sk(xa,e)&&r===xa.slice?ck:r}});var Zl=a((A5,Xl)=>{"use strict";var lk=Ql();Xl.exports=lk});var rf=a((N5,ef)=>{"use strict";var fk=Zl();ef.exports=fk});var nf=a((M5,tf)=>{"use strict";var pk=rf();tf.exports=pk});var Sa=a((j5,af)=>{"use strict";af.exports=nf()});var Br=a(($5,of)=>{of.exports=Sa()});var Ve=a((L5,uf)=>{"use strict";var vk=dt(),dk=String;uf.exports=function(e){if(vk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return dk(e)}});var ff=a((F5,lf)=>{"use strict";var wa=A(),mk=Sn(),hk=Ve(),yk=or(),gk=wa("".charAt),sf=wa("".charCodeAt),bk=wa("".slice),cf=function(e){return function(r,t){var n=hk(yk(r)),i=mk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=sf(n,i),u<55296||u>56319||i+1===o||(l=sf(n,i+1))<56320||l>57343?e?gk(n,i):u:e?bk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};lf.exports={codeAt:cf(!1),charAt:cf(!0)}});var df=a((D5,vf)=>{"use strict";var qk=_(),xk=N(),pf=qk.WeakMap;vf.exports=xk(pf)&&/native code/.test(String(pf))});var gt=a((B5,hf)=>{"use strict";var Sk=sr(),wk=Mr(),mf=Sk("keys");hf.exports=function(e){return mf[e]||(mf[e]=wk(e))}});var Gr=a((G5,yf)=>{"use strict";yf.exports={}});var Ye=a((U5,qf)=>{"use strict";var Tk=df(),bf=_(),Ok=$(),Ck=Se(),Ta=H(),Oa=lt(),Ek=gt(),Ik=Gr(),gf="Object already initialized",Ca=bf.TypeError,kk=bf.WeakMap,wn,bt,Tn,Pk=function(e){return Tn(e)?bt(e):wn(e,{})},_k=function(e){return function(r){var t;if(!Ok(r)||(t=bt(r)).type!==e)throw new Ca("Incompatible receiver, "+e+" required");return t}};Tk||Oa.state?(ye=Oa.state||(Oa.state=new kk),ye.get=ye.get,ye.has=ye.has,ye.set=ye.set,wn=function(e,r){if(ye.has(e))throw new Ca(gf);return r.facade=e,ye.set(e,r),r},bt=function(e){return ye.get(e)||{}},Tn=function(e){return ye.has(e)}):(lr=Ek("state"),Ik[lr]=!0,wn=function(e,r){if(Ta(e,lr))throw new Ca(gf);return r.facade=e,Ck(e,lr,r),r},bt=function(e){return Ta(e,lr)?e[lr]:{}},Tn=function(e){return Ta(e,lr)});var ye,lr;qf.exports={set:wn,get:bt,has:Tn,enforce:Pk,getterFor:_k}});var wf=a((W5,Sf)=>{"use strict";var Ea=U(),Rk=H(),xf=Function.prototype,Ak=Ea&&Object.getOwnPropertyDescriptor,Ia=Rk(xf,"name"),Nk=Ia&&function(){}.name==="something",Mk=Ia&&(!Ea||Ea&&Ak(xf,"name").configurable);Sf.exports={EXISTS:Ia,PROPER:Nk,CONFIGURABLE:Mk}});var ka=a((H5,Of)=>{"use strict";var jk=ke(),$k=ga(),Lk=le(),Tf=function(e){return function(r,t,n){var i=jk(r),o=Lk(i);if(o===0)return!e&&-1;var u=$k(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Of.exports={includes:Tf(!0),indexOf:Tf(!1)}});var _a=a((K5,Ef)=>{"use strict";var Fk=A(),Pa=H(),Dk=ke(),Bk=ka().indexOf,Gk=Gr(),Cf=Fk([].push);Ef.exports=function(e,r){var t=Dk(e),n=0,i=[],o;for(o in t)!Pa(Gk,o)&&Pa(t,o)&&Cf(i,o);for(;r.length>n;)Pa(t,o=r[n++])&&(~Bk(i,o)||Cf(i,o));return i}});var On=a((z5,If)=>{"use strict";If.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Cn=a((V5,kf)=>{"use strict";var Uk=_a(),Wk=On();kf.exports=Object.keys||function(r){return Uk(r,Wk)}});var Ra=a(Pf=>{"use strict";var Hk=U(),Kk=la(),zk=te(),Vk=Q(),Yk=ke(),Jk=Cn();Pf.f=Hk&&!Kk?Object.defineProperties:function(r,t){Vk(r);for(var n=Yk(t),i=Jk(t),o=i.length,u=0,l;o>u;)zk.f(r,l=i[u++],n[l]);return r}});var Aa=a((J5,_f)=>{"use strict";var Qk=W();_f.exports=Qk("document","documentElement")});var Je=a((Q5,Lf)=>{"use strict";var Xk=Q(),Zk=Ra(),Rf=On(),e1=Gr(),r1=Aa(),t1=gn(),n1=gt(),Af=">",Nf="<",Ma="prototype",ja="script",jf=n1("IE_PROTO"),Na=function(){},$f=function(e){return Nf+ja+Af+e+Nf+"/"+ja+Af},Mf=function(e){e.write($f("")),e.close();var r=e.parentWindow.Object;return e=null,r},i1=function(){var e=t1("iframe"),r="java"+ja+":",t;return e.style.display="none",r1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write($f("document.F=Object")),t.close(),t.F},En,In=function(){try{En=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&En?Mf(En):i1():Mf(En);for(var e=Rf.length;e--;)delete In[Ma][Rf[e]];return In()};e1[jf]=!0;Lf.exports=Object.create||function(r,t){var n;return r!==null?(Na[Ma]=Xk(r),n=new Na,Na[Ma]=null,n[jf]=r):n=In(),t===void 0?n:Zk.f(n,t)}});var $a=a((X5,Ff)=>{"use strict";var a1=P();Ff.exports=!a1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((Z5,Bf)=>{"use strict";var o1=H(),u1=N(),s1=re(),c1=gt(),l1=$a(),Df=c1("IE_PROTO"),La=Object,f1=La.prototype;Bf.exports=l1?La.getPrototypeOf:function(e){var r=s1(e);if(o1(r,Df))return r[Df];var t=r.constructor;return u1(t)&&r instanceof t?t.prototype:r instanceof La?f1:null}});var _e=a((eW,Gf)=>{"use strict";var p1=Se();Gf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:p1(e,r,t),e}});var Ga=a((rW,Hf)=>{"use strict";var v1=P(),d1=N(),m1=$(),h1=Je(),Uf=qt(),y1=_e(),g1=R(),b1=Z(),Ba=g1("iterator"),Wf=!1,Re,Fa,Da;[].keys&&(Da=[].keys(),"next"in Da?(Fa=Uf(Uf(Da)),Fa!==Object.prototype&&(Re=Fa)):Wf=!0);var q1=!m1(Re)||v1(function(){var e={};return Re[Ba].call(e)!==e});q1?Re={}:b1&&(Re=h1(Re));d1(Re[Ba])||y1(Re,Ba,function(){return this});Hf.exports={IteratorPrototype:Re,BUGGY_SAFARI_ITERATORS:Wf}});var zf=a((tW,Kf)=>{"use strict";var x1=qn(),S1=dt();Kf.exports=x1?{}.toString:function(){return"[object "+S1(this)+"]"}});var Ae=a((nW,Yf)=>{"use strict";var w1=qn(),T1=te().f,O1=Se(),C1=H(),E1=zf(),I1=R(),Vf=I1("toStringTag");Yf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(C1(i,Vf)||T1(i,Vf,{configurable:!0,value:r}),n&&!w1&&O1(i,"toString",E1))}});var fr=a((iW,Jf)=>{"use strict";Jf.exports={}});var Xf=a((aW,Qf)=>{"use strict";var k1=Ga().IteratorPrototype,P1=Je(),_1=Ke(),R1=Ae(),A1=fr(),N1=function(){return this};Qf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=P1(k1,{next:_1(+!n,t)}),R1(e,i,!1,!0),A1[i]=N1,e}});var ep=a((oW,Zf)=>{"use strict";var M1=A(),j1=F();Zf.exports=function(e,r,t){try{return M1(j1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var tp=a((uW,rp)=>{"use strict";var $1=$();rp.exports=function(e){return $1(e)||e===null}});var ip=a((sW,np)=>{"use strict";var L1=tp(),F1=String,D1=TypeError;np.exports=function(e){if(L1(e))return e;throw new D1("Can't set "+F1(e)+" as a prototype")}});var xt=a((cW,ap)=>{"use strict";var B1=ep(),G1=$(),U1=or(),W1=ip();ap.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=B1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return U1(i),W1(o),G1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var _n=a((lW,mp)=>{"use strict";var H1=x(),K1=D(),kn=Z(),vp=wf(),z1=N(),V1=Xf(),op=qt(),up=xt(),Y1=Ae(),J1=Se(),Ua=_e(),Q1=R(),sp=fr(),dp=Ga(),X1=vp.PROPER,Z1=vp.CONFIGURABLE,cp=dp.IteratorPrototype,Pn=dp.BUGGY_SAFARI_ITERATORS,St=Q1("iterator"),lp="keys",wt="values",fp="entries",pp=function(){return this};mp.exports=function(e,r,t,n,i,o,u){V1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Pn&&q&&q in f)return f[q];switch(q){case lp:return function(){return new t(this,q)};case wt:return function(){return new t(this,q)};case fp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[St]||f["@@iterator"]||i&&f[i],v=!Pn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=op(d.call(new e)),h!==Object.prototype&&h.next&&(!kn&&op(h)!==cp&&(up?up(h,cp):z1(h[St])||Ua(h,St,pp)),Y1(h,c,!0,!0),kn&&(sp[c]=pp))),X1&&i===wt&&p&&p.name!==wt&&(!kn&&Z1?J1(f,"name",wt):(s=!0,v=function(){return K1(p,this)})),i)if(m={values:l(wt),keys:o?v:l(lp),entries:l(fp)},u)for(y in m)(Pn||s||!(y in f))&&Ua(f,y,m[y]);else H1({target:r,proto:!0,forced:Pn||s},m);return(!kn||u)&&f[St]!==v&&Ua(f,St,v,{name:i}),sp[r]=v,m}});var Rn=a((fW,hp)=>{"use strict";hp.exports=function(e,r){return{value:e,done:r}}});var pr=a(()=>{"use strict";var eP=ff().charAt,rP=Ve(),gp=Ye(),tP=_n(),yp=Rn(),bp="String Iterator",nP=gp.set,iP=gp.getterFor(bp);tP(String,"String",function(e){nP(this,{type:bp,string:rP(e),index:0})},function(){var r=iP(this),t=r.string,n=r.index,i;return n>=t.length?yp(void 0,!0):(i=eP(t,n),r.index+=i.length,yp(i,!1))})});var Wa=a((dW,xp)=>{"use strict";var aP=D(),qp=Q(),oP=hn();xp.exports=function(e,r,t){var n,i;qp(e);try{if(n=oP(e,"return"),!n){if(r==="throw")throw t;return t}n=aP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return qp(n),t}});var wp=a((mW,Sp)=>{"use strict";var uP=Q(),sP=Wa();Sp.exports=function(e,r,t,n){try{return n?r(uP(t)[0],t[1]):r(t)}catch(i){sP(e,"throw",i)}}});var Ha=a((hW,Tp)=>{"use strict";var cP=R(),lP=fr(),fP=cP("iterator"),pP=Array.prototype;Tp.exports=function(e){return e!==void 0&&(lP.Array===e||pP[fP]===e)}});var Tt=a((yW,Cp)=>{"use strict";var vP=dt(),Op=hn(),dP=ar(),mP=fr(),hP=R(),yP=hP("iterator");Cp.exports=function(e){if(!dP(e))return Op(e,yP)||Op(e,"@@iterator")||mP[vP(e)]}});var An=a((gW,Ep)=>{"use strict";var gP=D(),bP=F(),qP=Q(),xP=ze(),SP=Tt(),wP=TypeError;Ep.exports=function(e,r){var t=arguments.length<2?SP(e):r;if(bP(t))return qP(gP(t,e));throw new wP(xP(e)+" is not iterable")}});var _p=a((bW,Pp)=>{"use strict";var TP=V(),OP=D(),CP=re(),EP=wp(),IP=Ha(),kP=ht(),PP=le(),Ip=Fr(),_P=Dr(),RP=An(),AP=Tt(),kp=Array;Pp.exports=function(r){var t=CP(r),n=kP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=TP(o,i>2?arguments[2]:void 0));var l=AP(t),c=0,s,f,p,v,d,h;if(l&&!(this===kp&&IP(l)))for(f=n?new this:[],v=RP(t,l),d=v.next;!(p=OP(d,v)).done;c++)h=u?EP(v,o,[p.value,c],!0):p.value,Ip(f,c,h);else for(s=PP(t),f=n?new this(s):kp(s);s>c;c++)h=u?o(t[c],c):t[c],Ip(f,c,h);return _P(f,c),f}});var za=a((qW,Mp)=>{"use strict";var NP=R(),Ap=NP("iterator"),Np=!1;try{Rp=0,Ka={next:function(){return{done:!!Rp++}},return:function(){Np=!0}},Ka[Ap]=function(){return this},Array.from(Ka,function(){throw 2})}catch{}var Rp,Ka;Mp.exports=function(e,r){try{if(!r&&!Np)return!1}catch{return!1}var t=!1;try{var n={};n[Ap]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var jp=a(()=>{"use strict";var MP=x(),jP=_p(),$P=za(),LP=!$P(function(e){Array.from(e)});MP({target:"Array",stat:!0,forced:LP},{from:jP})});var Lp=a((wW,$p)=>{"use strict";pr();jp();var FP=z();$p.exports=FP.Array.from});var Dp=a((TW,Fp)=>{"use strict";var DP=Lp();Fp.exports=DP});var Gp=a((OW,Bp)=>{"use strict";var BP=Dp();Bp.exports=BP});var Wp=a((CW,Up)=>{"use strict";var GP=Gp();Up.exports=GP});var Va=a((EW,Hp)=>{"use strict";Hp.exports=Wp()});var Nn=a((IW,Kp)=>{Kp.exports=Va()});var Ot=a((kW,zp)=>{"use strict";var UP=TypeError,WP=9007199254740991;zp.exports=function(e){if(e>WP)throw UP("Maximum allowed index exceeded");return e}});var Qp=a((PW,Jp)=>{"use strict";var Vp=Pe(),HP=ht(),KP=$(),zP=R(),VP=zP("species"),Yp=Array;Jp.exports=function(e){var r;return Vp(e)&&(r=e.constructor,HP(r)&&(r===Yp||Vp(r.prototype))?r=void 0:KP(r)&&(r=r[VP],r===null&&(r=void 0))),r===void 0?Yp:r}});var Mn=a((_W,Xp)=>{"use strict";var YP=Qp();Xp.exports=function(e,r){return new(YP(e))(r===0?0:r)}});var Ya=a(()=>{"use strict";var JP=x(),QP=P(),XP=Pe(),ZP=$(),e_=re(),r_=le(),Zp=Ot(),ev=Fr(),t_=Dr(),n_=Mn(),i_=yt(),a_=R(),o_=Ar(),rv=a_("isConcatSpreadable"),u_=o_>=51||!QP(function(){var e=[];return e[rv]=!1,e.concat()[0]!==e}),s_=function(e){if(!ZP(e))return!1;var r=e[rv];return r!==void 0?!!r:XP(e)},c_=!u_||!i_("concat");JP({target:"Array",proto:!0,arity:1,forced:c_},{concat:function(r){var t=e_(this),n=n_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],s_(s))for(c=r_(s),Zp(i+c),u=0;u<c;u++,i++)u in s&&ev(n,i,s[u]);else Zp(i+1),ev(n,i++,s);return t_(n,i),n}})});var Ct=a(()=>{});var Et=a(tv=>{"use strict";var l_=_a(),f_=On(),p_=f_.concat("length","prototype");tv.f=Object.getOwnPropertyNames||function(r){return l_(r,p_)}});var Ja=a(($W,av)=>{"use strict";var v_=xe(),d_=ke(),nv=Et().f,m_=cr(),iv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h_=function(e){try{return nv(e)}catch{return m_(iv)}};av.exports.f=function(r){return iv&&v_(r)==="Window"?h_(r):nv(d_(r))}});var jn=a(ov=>{"use strict";ov.f=Object.getOwnPropertySymbols});var $n=a((FW,uv)=>{"use strict";var y_=te();uv.exports=function(e,r,t){return y_.f(e,r,t)}});var Ur=a(sv=>{"use strict";var g_=R();sv.f=g_});var M=a((BW,lv)=>{"use strict";var cv=z(),b_=H(),q_=Ur(),x_=te().f;lv.exports=function(e){var r=cv.Symbol||(cv.Symbol={});b_(r,e)||x_(r,e,{value:q_.f(e)})}});var Qa=a((GW,fv)=>{"use strict";var S_=D(),w_=W(),T_=R(),O_=_e();fv.exports=function(){var e=w_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=T_("toPrimitive");r&&!r[n]&&O_(r,n,function(i){return S_(t,this)},{arity:1})}});var It=a((UW,vv)=>{"use strict";var C_=V(),E_=dn(),I_=re(),k_=le(),pv=Mn(),Xa=Fr(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=I_(c),v=E_(p),d=k_(v),h=C_(s,f),m=0,y=0,q=r?pv(c,d):t||u?pv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)Xa(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:Xa(q,y++,b)}else switch(e){case 4:return!1;case 7:Xa(q,y++,b)}return o?-1:n||i?i:q}};vv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var Pv=a(()=>{"use strict";var Ln=x(),_t=_(),uo=D(),P_=A(),__=Z(),Wr=U(),Hr=ur(),R_=P(),K=H(),A_=G(),to=Q(),Fn=ke(),so=yn(),N_=Ve(),no=Ke(),Kr=Je(),hv=Cn(),M_=Et(),yv=Ja(),j_=jn(),gv=ft(),bv=te(),$_=Ra(),qv=Qi(),Za=_e(),L_=$n(),co=sr(),F_=gt(),xv=Gr(),dv=Mr(),D_=R(),B_=Ur(),G_=M(),U_=Qa(),W_=Ae(),Sv=Ye(),Dn=It().forEach,ne=F_("hidden"),Bn="Symbol",Pt="prototype",H_=Sv.set,mv=Sv.getterFor(Bn),fe=Object[Pt],vr=_t.Symbol,kt=vr&&vr[Pt],K_=_t.RangeError,z_=_t.TypeError,eo=_t.QObject,wv=gv.f,dr=bv.f,Tv=yv.f,V_=qv.f,Ov=P_([].push),Ne=co("symbols"),Rt=co("op-symbols"),Y_=co("wks"),io=!eo||!eo[Pt]||!eo[Pt].findChild,Cv=function(e,r,t){var n=wv(fe,r);n&&delete fe[r],dr(e,r,t),n&&e!==fe&&dr(fe,r,n)},ao=Wr&&R_(function(){return Kr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Cv:dr,ro=function(e,r){var t=Ne[e]=Kr(kt);return H_(t,{type:Bn,tag:e,description:r}),Wr||(t.description=r),t},Gn=function(r,t,n){r===fe&&Gn(Rt,t,n),to(r);var i=so(t);return to(n),K(Ne,i)?(n.enumerable?(K(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Kr(n,{enumerable:no(0,!1)})):(K(r,ne)||dr(r,ne,no(1,Kr(null))),r[ne][i]=!0),ao(r,i,n)):dr(r,i,n)},lo=function(r,t){to(r);var n=Fn(t),i=hv(n).concat(kv(n));return Dn(i,function(o){(!Wr||uo(oo,n,o))&&Gn(r,o,n[o])}),r},J_=function(r,t){return t===void 0?Kr(r):lo(Kr(r),t)},oo=function(r){var t=so(r),n=uo(V_,this,t);return this===fe&&K(Ne,t)&&!K(Rt,t)?!1:n||!K(this,t)||!K(Ne,t)||K(this,ne)&&this[ne][t]?n:!0},Ev=function(r,t){var n=Fn(r),i=so(t);if(!(n===fe&&K(Ne,i)&&!K(Rt,i))){var o=wv(n,i);return o&&K(Ne,i)&&!(K(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Iv=function(r){var t=Tv(Fn(r)),n=[];return Dn(t,function(i){!K(Ne,i)&&!K(xv,i)&&Ov(n,i)}),n},kv=function(e){var r=e===fe,t=Tv(r?Rt:Fn(e)),n=[];return Dn(t,function(i){K(Ne,i)&&(!r||K(fe,i))&&Ov(n,Ne[i])}),n};Hr||(vr=function(){if(A_(kt,this))throw new z_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:N_(arguments[0]),t=dv(r),n=function(i){var o=this===void 0?_t:this;o===fe&&uo(n,Rt,i),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=no(1,i);try{ao(o,t,u)}catch(l){if(!(l instanceof K_))throw l;Cv(o,t,u)}};return Wr&&io&&ao(fe,t,{configurable:!0,set:n}),ro(t,r)},kt=vr[Pt],Za(kt,"toString",function(){return mv(this).tag}),Za(vr,"withoutSetter",function(e){return ro(dv(e),e)}),qv.f=oo,bv.f=Gn,$_.f=lo,gv.f=Ev,M_.f=yv.f=Iv,j_.f=kv,B_.f=function(e){return ro(D_(e),e)},Wr&&(L_(kt,"description",{configurable:!0,get:function(){return mv(this).description}}),__||Za(fe,"propertyIsEnumerable",oo,{unsafe:!0})));Ln({global:!0,constructor:!0,wrap:!0,forced:!Hr,sham:!Hr},{Symbol:vr});Dn(hv(Y_),function(e){G_(e)});Ln({target:Bn,stat:!0,forced:!Hr},{useSetter:function(){io=!0},useSimple:function(){io=!1}});Ln({target:"Object",stat:!0,forced:!Hr,sham:!Wr},{create:J_,defineProperty:Gn,defineProperties:lo,getOwnPropertyDescriptor:Ev});Ln({target:"Object",stat:!0,forced:!Hr},{getOwnPropertyNames:Iv});U_();W_(vr,Bn);xv[ne]=!0});var fo=a((KW,_v)=>{"use strict";var Q_=ur();_v.exports=Q_&&!!Symbol.for&&!!Symbol.keyFor});var Av=a(()=>{"use strict";var X_=x(),Z_=W(),eR=H(),rR=Ve(),Rv=sr(),tR=fo(),po=Rv("string-to-symbol-registry"),nR=Rv("symbol-to-string-registry");X_({target:"Symbol",stat:!0,forced:!tR},{for:function(e){var r=rR(e);if(eR(po,r))return po[r];var t=Z_("Symbol")(r);return po[r]=t,nR[t]=r,t}})});var Mv=a(()=>{"use strict";var iR=x(),aR=H(),oR=Nr(),uR=ze(),sR=sr(),cR=fo(),Nv=sR("symbol-to-string-registry");iR({target:"Symbol",stat:!0,forced:!cR},{keyFor:function(r){if(!oR(r))throw new TypeError(uR(r)+" is not a symbol");if(aR(Nv,r))return Nv[r]}})});var $v=a((QW,jv)=>{"use strict";var lR=$(),fR=Ye().get;jv.exports=function(r){if(!lR(r))return!1;var t=fR(r);return!!t&&t.type==="RawJSON"}});var Gv=a((XW,Bv)=>{"use strict";var vo=A(),pR=H(),Un=SyntaxError,vR=parseInt,dR=String.fromCharCode,mR=vo("".charAt),Lv=vo("".slice),Fv=vo(/./.exec),Dv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},hR=/^[\da-f]{4}$/i,yR=/^[\u0000-\u001F]$/;Bv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=mR(e,r);if(i==="\\"){var o=Lv(e,r,r+2);if(pR(Dv,o))n+=Dv[o],r+=2;else if(o==="\\u"){r+=2;var u=Lv(e,r,r+4);if(!Fv(hR,u))throw new Un("Bad Unicode escape at: "+r);n+=dR(vR(u,16)),r+=4}else throw new Un('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Fv(yR,i))throw new Un("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Un("Unterminated string at: "+r);return{value:n,end:r}}});var Wv=a((ZW,Uv)=>{"use strict";var gR=P();Uv.exports=!gR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var id=a(()=>{"use strict";var bR=x(),Xv=W(),qR=_r(),Zv=D(),mr=A(),ed=P(),Hv=Pe(),Hn=N(),xR=$v(),Kv=Nr(),zv=xe(),SR=Ve(),wR=cr(),TR=Gv(),OR=Mr(),CR=ur(),mo=Wv(),rd=String,Xe=Xv("JSON","stringify"),Wn=mr(/./.exec),yo=mr("".charAt),ER=mr("".charCodeAt),IR=mr("".replace),ho=mr("".slice),go=mr([].push),kR=mr(1.1.toString),PR=/[\uD800-\uDFFF]/g,Vv=/^[\uD800-\uDBFF]$/,Yv=/^[\uDC00-\uDFFF]$/,bo=OR(),Jv=bo.length,td=!CR||ed(function(){var e=Xv("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),Qv=ed(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),_R=td?function(e,r){var t=wR(arguments),n=nd(r);if(!(!Hn(n)&&(e===void 0||Kv(e))))return t[1]=function(i,o){if(Hn(n)&&(o=Zv(n,this,rd(i),o)),!Kv(o))return o},qR(Xe,null,t)}:Xe,RR=function(e,r,t){var n=yo(t,r-1),i=yo(t,r+1);return Wn(Vv,e)&&!Wn(Yv,i)||Wn(Yv,e)&&!Wn(Vv,n)?"\\u"+kR(ER(e,0),16):e},nd=function(e){if(Hn(e))return e;if(Hv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?go(t,i):(typeof i=="number"||zv(i)==="Number"||zv(i)==="String")&&go(t,SR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Hv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Xe&&bR({target:"JSON",stat:!0,arity:3,forced:td||Qv||!mo},{stringify:function(r,t,n){var i=nd(t),o=[],u=_R(r,function(d,h){var m=Hn(i)?Zv(i,this,rd(d),h):h;return!mo&&xR(m)?bo+(go(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Qv&&(u=IR(u,PR,RR)),mo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=yo(u,s);if(f==='"'){var p=TR(u,++s).end-1,v=ho(u,s,p);l+=ho(v,0,Jv)===bo?o[ho(v,Jv)]:'"'+v+'"',s=p}else l+=f}return l}})});var od=a(()=>{"use strict";var AR=x(),NR=ur(),MR=P(),ad=jn(),jR=re(),$R=!NR||MR(function(){ad.f(1)});AR({target:"Object",stat:!0,forced:$R},{getOwnPropertySymbols:function(r){var t=ad.f;return t?t(jR(r)):[]}})});var ud=a(()=>{"use strict";Pv();Av();Mv();id();od()});var qo=a(()=>{"use strict";var LR=M();LR("asyncDispose")});var xo=a(()=>{"use strict";var FR=M();FR("asyncIterator")});var sd=a(()=>{});var So=a(()=>{"use strict";var DR=M();DR("dispose")});var cd=a(()=>{"use strict";var BR=M();BR("hasInstance")});var ld=a(()=>{"use strict";var GR=M();GR("isConcatSpreadable")});var wo=a(()=>{"use strict";var UR=M();UR("iterator")});var fd=a(()=>{"use strict";var WR=M();WR("match")});var pd=a(()=>{"use strict";var HR=M();HR("matchAll")});var vd=a(()=>{"use strict";var KR=M();KR("replace")});var dd=a(()=>{"use strict";var zR=M();zR("search")});var md=a(()=>{"use strict";var VR=M();VR("species")});var hd=a(()=>{"use strict";var YR=M();YR("split")});var To=a(()=>{"use strict";var JR=M(),QR=Qa();JR("toPrimitive");QR()});var yd=a(()=>{"use strict";var XR=W(),ZR=M(),eA=Ae();ZR("toStringTag");eA(XR("Symbol"),"Symbol")});var gd=a(()=>{"use strict";var rA=M();rA("unscopables")});var bd=a(()=>{"use strict";var tA=_(),nA=Ae();nA(tA.JSON,"JSON",!0)});var qd=a(()=>{});var xd=a(()=>{});var wd=a((W8,Sd)=>{"use strict";Ya();Ct();ud();qo();xo();sd();So();cd();ld();wo();fd();pd();vd();dd();md();hd();To();yd();gd();bd();qd();xd();var iA=z();Sd.exports=iA.Symbol});var Oo=a((H8,Td)=>{"use strict";Td.exports=function(){}});var hr=a((K8,kd)=>{"use strict";var aA=ke(),Co=Oo(),Od=fr(),Ed=Ye(),oA=te().f,uA=_n(),Kn=Rn(),sA=Z(),cA=U(),Id="Array Iterator",lA=Ed.set,fA=Ed.getterFor(Id);kd.exports=uA(Array,"Array",function(e,r){lA(this,{type:Id,target:aA(e),index:0,kind:r})},function(){var e=fA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Kn(void 0,!0);switch(e.kind){case"keys":return Kn(t,!1);case"values":return Kn(r[t],!1)}return Kn([t,r[t]],!1)},"values");var Cd=Od.Arguments=Od.Array;Co("keys");Co("values");Co("entries");if(!sA&&cA&&Cd.name!=="values")try{oA(Cd,"name",{value:"values"})}catch{}});var _d=a((z8,Pd)=>{"use strict";Pd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=a(()=>{"use strict";hr();var pA=_d(),vA=_(),dA=Ae(),Rd=fr();for(zn in pA)dA(vA[zn],zn),Rd[zn]=Rd.Array;var zn});var Nd=a((J8,Ad)=>{"use strict";var mA=wd();yr();Ad.exports=mA});var $d=a(()=>{"use strict";var hA=R(),yA=te().f,Md=hA("metadata"),jd=Function.prototype;jd[Md]===void 0&&yA(jd,Md,{value:null})});var Ld=a(()=>{"use strict";qo()});var Fd=a(()=>{"use strict";So()});var Dd=a(()=>{"use strict";var gA=M();gA("metadata")});var Gd=a((a6,Bd)=>{"use strict";var bA=Nd();$d();Ld();Fd();Dd();Bd.exports=bA});var Io=a((o6,Ud)=>{"use strict";var qA=W(),xA=A(),Eo=qA("Symbol"),SA=Eo.keyFor,wA=xA(Eo.prototype.valueOf);Ud.exports=Eo.isRegisteredSymbol||function(r){try{return SA(wA(r))!==void 0}catch{return!1}}});var Wd=a(()=>{"use strict";var TA=x(),OA=Io();TA({target:"Symbol",stat:!0},{isRegisteredSymbol:OA})});var _o=a((c6,Jd)=>{"use strict";var CA=sr(),Vd=W(),EA=A(),IA=Nr(),kA=R(),Yn=Vd("Symbol"),Hd=Yn.isWellKnownSymbol,Yd=Vd("Object","getOwnPropertyNames"),PA=EA(Yn.prototype.valueOf),Kd=CA("wks");for(Vn=0,ko=Yd(Yn),zd=ko.length;Vn<zd;Vn++)try{Po=ko[Vn],IA(Yn[Po])&&kA(Po)}catch{}var Po,Vn,ko,zd;Jd.exports=function(r){if(Hd&&Hd(r))return!0;try{for(var t=PA(r),n=0,i=Yd(Kd),o=i.length;n<o;n++)if(Kd[i[n]]==t)return!0}catch{}return!1}});var Qd=a(()=>{"use strict";var _A=x(),RA=_o();_A({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:RA})});var Xd=a(()=>{"use strict";var AA=M();AA("customMatcher")});var Zd=a(()=>{"use strict";var NA=M();NA("observable")});var em=a(()=>{"use strict";var MA=x(),jA=Io();MA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:jA})});var rm=a(()=>{"use strict";var $A=x(),LA=_o();$A({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:LA})});var tm=a(()=>{"use strict";var FA=M();FA("matcher")});var nm=a(()=>{"use strict";var DA=M();DA("metadataKey")});var im=a(()=>{"use strict";var BA=M();BA("patternMatch")});var am=a(()=>{"use strict";var GA=M();GA("replaceAll")});var um=a((I6,om)=>{"use strict";var UA=Gd();Wd();Qd();Xd();Zd();em();rm();tm();nm();im();am();om.exports=UA});var we=a((k6,sm)=>{"use strict";sm.exports=um()});var Jn=a((P6,cm)=>{cm.exports=we()});var fm=a((_6,lm)=>{"use strict";hr();pr();var WA=Tt();lm.exports=WA});var vm=a((R6,pm)=>{"use strict";var HA=fm();yr();pm.exports=HA});var mm=a((A6,dm)=>{"use strict";var KA=vm();dm.exports=KA});var ym=a((N6,hm)=>{"use strict";var zA=mm();hm.exports=zA});var Ro=a((M6,gm)=>{"use strict";gm.exports=ym()});var Qn=a((j6,bm)=>{bm.exports=Ro()});var xm=a(($6,qm)=>{"use strict";hr();pr();var VA=An();qm.exports=VA});var wm=a((L6,Sm)=>{"use strict";var YA=xm();yr();Sm.exports=YA});var Om=a((F6,Tm)=>{"use strict";var JA=wm();Tm.exports=JA});var Em=a((D6,Cm)=>{"use strict";var QA=Om();Cm.exports=QA});var km=a((B6,Im)=>{"use strict";Im.exports=Em()});var Xn=a((G6,Pm)=>{Pm.exports=km()});var Rm=a((U6,_m)=>{"use strict";var XA=W(),ZA=A(),eN=Et(),rN=jn(),tN=Q(),nN=ZA([].concat);_m.exports=XA("Reflect","ownKeys")||function(r){var t=eN.f(tN(r)),n=rN.f;return n?nN(t,n(r)):t}});var Mm=a((W6,Nm)=>{"use strict";var Am=H(),iN=Rm(),aN=ft(),oN=te();Nm.exports=function(e,r,t){for(var n=iN(r),i=oN.f,o=aN.f,u=0;u<n.length;u++){var l=n[u];!Am(e,l)&&!(t&&Am(t,l))&&i(e,l,o(r,l))}}});var $m=a((H6,jm)=>{"use strict";var uN=$(),sN=Se();jm.exports=function(e,r){uN(r)&&"cause"in r&&sN(e,"cause",r.cause)}});var Bm=a((K6,Dm)=>{"use strict";var cN=A(),Lm=Error,lN=cN("".replace),fN=function(e){return String(new Lm(e).stack)}("zxcasd"),Fm=/\n\s*at [^:]*:[^\n]*/,pN=Fm.test(fN);Dm.exports=function(e,r){if(pN&&typeof e=="string"&&!Lm.prepareStackTrace)for(;r--;)e=lN(e,Fm,"");return e}});var Um=a((z6,Gm)=>{"use strict";var vN=P(),dN=Ke();Gm.exports=!vN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",dN(1,7)),e.stack!==7):!0})});var Km=a((V6,Hm)=>{"use strict";var mN=Se(),hN=Bm(),yN=Um(),Wm=Error.captureStackTrace;Hm.exports=function(e,r,t,n){yN&&(Wm?Wm(e,r):mN(e,"stack",hN(t,n)))}});var pe=a((Y6,Jm)=>{"use strict";var gN=V(),bN=D(),qN=Q(),xN=ze(),SN=Ha(),wN=le(),zm=G(),TN=An(),ON=Tt(),Vm=Wa(),CN=TypeError,Zn=function(e,r){this.stopped=e,this.result=r},Ym=Zn.prototype;Jm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=gN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&Vm(s,"normal"),new Zn(!0,b)},q=function(b){return i?(qN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=ON(e),!f)throw new CN(xN(e)+" is not iterable");if(SN(f)){for(p=0,v=wN(e);v>p;p++)if(d=q(e[p]),d&&zm(Ym,d))return d;return new Zn(!1)}s=TN(e,f)}for(h=o?e.next:s.next;!(m=bN(h,s)).done;){try{d=q(m.value)}catch(b){Vm(s,"throw",b)}if(typeof d=="object"&&d&&zm(Ym,d))return d}return new Zn(!1)}});var Xm=a((J6,Qm)=>{"use strict";var EN=Ve();Qm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:EN(e)}});var eh=a(()=>{"use strict";var IN=x(),kN=G(),PN=qt(),ei=xt(),_N=Mm(),Zm=Je(),Ao=Se(),No=Ke(),RN=$m(),AN=Km(),NN=pe(),MN=Xm(),jN=R(),$N=jN("toStringTag"),ri=Error,LN=[].push,zr=function(r,t){var n=kN(Mo,this),i;ei?i=ei(new ri,n?PN(this):Mo):(i=n?this:Zm(Mo),Ao(i,$N,"Error")),t!==void 0&&Ao(i,"message",MN(t)),AN(i,zr,i.stack,1),arguments.length>2&&RN(i,arguments[2]);var o=[];return NN(r,LN,{that:o}),Ao(i,"errors",o),i};ei?ei(zr,ri):_N(zr,ri,{name:!0});var Mo=zr.prototype=Zm(ri.prototype,{constructor:No(1,zr),message:No(1,""),name:No(1,"AggregateError")});IN({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var jo=a(()=>{"use strict";eh()});var $o=a((rH,rh)=>{"use strict";var At=_(),FN=Rr(),DN=xe(),ti=function(e){return FN.slice(0,e.length)===e};rh.exports=function(){return ti("Bun/")?"BUN":ti("Cloudflare-Workers")?"CLOUDFLARE":ti("Deno/")?"DENO":ti("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":DN(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((tH,th)=>{"use strict";var BN=$o();th.exports=BN==="NODE"});var Lo=a((nH,ih)=>{"use strict";var GN=W(),UN=$n(),WN=R(),HN=U(),nh=WN("species");ih.exports=function(e){var r=GN(e);HN&&r&&!r[nh]&&UN(r,nh,{configurable:!0,get:function(){return this}})}});var ni=a((iH,ah)=>{"use strict";var KN=G(),zN=TypeError;ah.exports=function(e,r){if(KN(r,e))return e;throw new zN("Incorrect invocation")}});var Fo=a((aH,oh)=>{"use strict";var VN=ht(),YN=ze(),JN=TypeError;oh.exports=function(e){if(VN(e))return e;throw new JN(YN(e)+" is not a constructor")}});var Do=a((oH,sh)=>{"use strict";var uh=Q(),QN=Fo(),XN=ar(),ZN=R(),e2=ZN("species");sh.exports=function(e,r){var t=uh(e).constructor,n;return t===void 0||XN(n=uh(t)[e2])?r:QN(n)}});var lh=a((uH,ch)=>{"use strict";var r2=TypeError;ch.exports=function(e,r){if(e<r)throw new r2("Not enough arguments");return e}});var Bo=a((sH,fh)=>{"use strict";var t2=Rr();fh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(t2)});var Jo=a((cH,qh)=>{"use strict";var ue=_(),n2=_r(),i2=V(),ph=N(),a2=H(),bh=P(),vh=Aa(),o2=cr(),dh=gn(),u2=lh(),s2=Bo(),c2=Nt(),zo=ue.setImmediate,Vo=ue.clearImmediate,l2=ue.process,Go=ue.Dispatch,f2=ue.Function,mh=ue.MessageChannel,p2=ue.String,Uo=0,Mt={},hh="onreadystatechange",jt,gr,Wo,Ho;bh(function(){jt=ue.location});var Yo=function(e){if(a2(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Ko=function(e){return function(){Yo(e)}},yh=function(e){Yo(e.data)},gh=function(e){ue.postMessage(p2(e),jt.protocol+"//"+jt.host)};(!zo||!Vo)&&(zo=function(r){u2(arguments.length,1);var t=ph(r)?r:f2(r),n=o2(arguments,1);return Mt[++Uo]=function(){n2(t,void 0,n)},gr(Uo),Uo},Vo=function(r){delete Mt[r]},c2?gr=function(e){l2.nextTick(Ko(e))}:Go&&Go.now?gr=function(e){Go.now(Ko(e))}:mh&&!s2?(Wo=new mh,Ho=Wo.port2,Wo.port1.onmessage=yh,gr=i2(Ho.postMessage,Ho)):ue.addEventListener&&ph(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!bh(gh)?(gr=gh,ue.addEventListener("message",yh,!1)):hh in dh("script")?gr=function(e){vh.appendChild(dh("script"))[hh]=function(){vh.removeChild(this),Yo(e)}}:gr=function(e){setTimeout(Ko(e),0)});qh.exports={set:zo,clear:Vo}});var wh=a((lH,Sh)=>{"use strict";var xh=_(),v2=U(),d2=Object.getOwnPropertyDescriptor;Sh.exports=function(e){if(!v2)return xh[e];var r=d2(xh,e);return r&&r.value}});var Qo=a((fH,Oh)=>{"use strict";var Th=function(){this.head=null,this.tail=null};Th.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Oh.exports=Th});var Eh=a((pH,Ch)=>{"use strict";var m2=Rr();Ch.exports=/ipad|iphone|ipod/i.test(m2)&&typeof Pebble<"u"});var kh=a((vH,Ih)=>{"use strict";var h2=Rr();Ih.exports=/web0s(?!.*chrome)/i.test(h2)});var jh=a((dH,Mh)=>{"use strict";var Yr=_(),y2=wh(),Ph=V(),Xo=Jo().set,g2=Qo(),b2=Bo(),q2=Eh(),x2=kh(),Zo=Nt(),_h=Yr.MutationObserver||Yr.WebKitMutationObserver,Rh=Yr.document,Ah=Yr.process,ii=Yr.Promise,tu=y2("queueMicrotask"),Vr,eu,ru,ai,Nh;tu||($t=new g2,Lt=function(){var e,r;for(Zo&&(e=Ah.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Vr(),t}e&&e.enter()},!b2&&!Zo&&!x2&&_h&&Rh?(eu=!0,ru=Rh.createTextNode(""),new _h(Lt).observe(ru,{characterData:!0}),Vr=function(){ru.data=eu=!eu}):!q2&&ii&&ii.resolve?(ai=ii.resolve(void 0),ai.constructor=ii,Nh=Ph(ai.then,ai),Vr=function(){Nh(Lt)}):Zo?Vr=function(){Ah.nextTick(Lt)}:(Xo=Ph(Xo,Yr),Vr=function(){Xo(Lt)}),tu=function(e){$t.head||Vr(),$t.add(e)});var $t,Lt;Mh.exports=tu});var Lh=a((mH,$h)=>{"use strict";$h.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var br=a((hH,Fh)=>{"use strict";Fh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=a((yH,Dh)=>{"use strict";var S2=_();Dh.exports=S2.Promise});var Jr=a((gH,Wh)=>{"use strict";var w2=_(),Ft=qr(),T2=N(),O2=ca(),C2=ha(),E2=R(),Bh=$o(),I2=Z(),nu=Ar(),Gh=Ft&&Ft.prototype,k2=E2("species"),iu=!1,Uh=T2(w2.PromiseRejectionEvent),P2=O2("Promise",function(){var e=C2(Ft),r=e!==String(Ft);if(!r&&nu===66||I2&&!(Gh.catch&&Gh.finally))return!0;if(!nu||nu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[k2]=n,iu=t.then(function(){})instanceof n,!iu)return!0}return!r&&(Bh==="BROWSER"||Bh==="DENO")&&!Uh});Wh.exports={CONSTRUCTOR:P2,REJECTION_EVENT:Uh,SUBCLASSING:iu}});var Te=a((bH,Kh)=>{"use strict";var Hh=F(),_2=TypeError,R2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new _2("Bad Promise constructor");r=n,t=i}),this.resolve=Hh(r),this.reject=Hh(t)};Kh.exports.f=function(e){return new R2(e)}});var py=a(()=>{"use strict";var A2=x(),N2=Z(),ci=Nt(),Ze=_(),M2=z(),et=D(),zh=_e(),Vh=xt(),j2=Ae(),$2=Lo(),L2=F(),si=N(),F2=$(),D2=ni(),B2=Do(),Zh=Jo().set,cu=jh(),G2=Lh(),U2=br(),W2=Qo(),ey=Ye(),li=qr(),lu=Jr(),ry=Te(),fi="Promise",ty=lu.CONSTRUCTOR,H2=lu.REJECTION_EVENT,K2=lu.SUBCLASSING,au=ey.getterFor(fi),z2=ey.set,Qr=li&&li.prototype,xr=li,oi=Qr,ny=Ze.TypeError,ou=Ze.document,fu=Ze.process,uu=ry.f,V2=uu,Y2=!!(ou&&ou.createEvent&&Ze.dispatchEvent),iy="unhandledrejection",J2="rejectionhandled",Yh=0,ay=1,Q2=2,pu=1,oy=2,ui,Jh,uy,Qh,sy=function(e){var r;return F2(e)&&si(r=e.then)?r:!1},cy=function(e,r){var t=r.value,n=r.state===ay,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===oy&&Z2(r),r.rejection=pu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ny("Promise-chain cycle")):(s=sy(c))?et(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},ly=function(e,r){e.notified||(e.notified=!0,cu(function(){for(var t=e.reactions,n;n=t.get();)cy(n,e);e.notified=!1,r&&!e.rejection&&X2(e)}))},fy=function(e,r,t){var n,i;Y2?(n=ou.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!H2&&(i=Ze["on"+e])?i(n):e===iy&&G2("Unhandled promise rejection",t)},X2=function(e){et(Zh,Ze,function(){var r=e.facade,t=e.value,n=Xh(e),i;if(n&&(i=U2(function(){ci?fu.emit("unhandledRejection",t,r):fy(iy,r,t)}),e.rejection=ci||Xh(e)?oy:pu,i.error))throw i.value})},Xh=function(e){return e.rejection!==pu&&!e.parent},Z2=function(e){et(Zh,Ze,function(){var r=e.facade;ci?fu.emit("rejectionHandled",r):fy(J2,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=Q2,ly(e,!0))},su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ny("Promise can't be resolved itself");var n=sy(r);n?cu(function(){var i={done:!1};try{et(n,r,Xr(su,i,e),Xr(Zr,i,e))}catch(o){Zr(i,o,e)}}):(e.value=r,e.state=ay,ly(e,!1))}catch(i){Zr({done:!1},i,e)}}};if(ty&&(xr=function(r){D2(this,oi),L2(r),et(ui,this);var t=au(this);try{r(Xr(su,t),Xr(Zr,t))}catch(n){Zr(t,n)}},oi=xr.prototype,ui=function(r){z2(this,{type:fi,done:!1,notified:!1,parent:!1,reactions:new W2,rejection:!1,state:Yh,value:null})},ui.prototype=zh(oi,"then",function(r,t){var n=au(this),i=uu(B2(this,xr));return n.parent=!0,i.ok=si(r)?r:!0,i.fail=si(t)&&t,i.domain=ci?fu.domain:void 0,n.state===Yh?n.reactions.add(i):cu(function(){cy(i,n)}),i.promise}),Jh=function(){var e=new ui,r=au(e);this.promise=e,this.resolve=Xr(su,r),this.reject=Xr(Zr,r)},ry.f=uu=function(e){return e===xr||e===uy?new Jh(e):V2(e)},!N2&&si(li)&&Qr!==Object.prototype)){Qh=Qr.then,K2||zh(Qr,"then",function(r,t){var n=this;return new xr(function(i,o){et(Qh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}Vh&&Vh(Qr,oi)}A2({global:!0,constructor:!0,wrap:!0,forced:ty},{Promise:xr});uy=M2.Promise;j2(xr,fi,!1,!0);$2(fi)});var Dt=a((SH,vy)=>{"use strict";var eM=qr(),rM=za(),tM=Jr().CONSTRUCTOR;vy.exports=tM||!rM(function(e){eM.all(e).then(void 0,function(){})})});var dy=a(()=>{"use strict";var nM=x(),iM=D(),aM=F(),oM=Te(),uM=br(),sM=pe(),cM=Dt();nM({target:"Promise",stat:!0,forced:cM},{all:function(r){var t=this,n=oM.f(t),i=n.resolve,o=n.reject,u=uM(function(){var l=aM(t.resolve),c=[],s=0,f=1;sM(r,function(p){var v=s++,d=!1;f++,iM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var hy=a(()=>{"use strict";var lM=x(),fM=Z(),pM=Jr().CONSTRUCTOR,du=qr(),vM=W(),dM=N(),mM=_e(),my=du&&du.prototype;lM({target:"Promise",proto:!0,forced:pM,real:!0},{catch:function(e){return this.then(void 0,e)}});!fM&&dM(du)&&(vu=vM("Promise").prototype.catch,my.catch!==vu&&mM(my,"catch",vu,{unsafe:!0}));var vu});var yy=a(()=>{"use strict";var hM=x(),yM=D(),gM=F(),bM=Te(),qM=br(),xM=pe(),SM=Dt();hM({target:"Promise",stat:!0,forced:SM},{race:function(r){var t=this,n=bM.f(t),i=n.reject,o=qM(function(){var u=gM(t.resolve);xM(r,function(l){yM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var gy=a(()=>{"use strict";var wM=x(),TM=Te(),OM=Jr().CONSTRUCTOR;wM({target:"Promise",stat:!0,forced:OM},{reject:function(r){var t=TM.f(this),n=t.reject;return n(r),t.promise}})});var mu=a((_H,by)=>{"use strict";var CM=Q(),EM=$(),IM=Te();by.exports=function(e,r){if(CM(e),EM(r)&&r.constructor===e)return r;var t=IM.f(e),n=t.resolve;return n(r),t.promise}});var Sy=a(()=>{"use strict";var kM=x(),PM=W(),qy=Z(),_M=qr(),xy=Jr().CONSTRUCTOR,RM=mu(),AM=PM("Promise"),NM=qy&&!xy;kM({target:"Promise",stat:!0,forced:qy||xy},{resolve:function(r){return RM(NM&&this===AM?_M:this,r)}})});var wy=a(()=>{"use strict";py();dy();hy();yy();gy();Sy()});var hu=a(()=>{"use strict";var MM=x(),jM=D(),$M=F(),LM=Te(),FM=br(),DM=pe(),BM=Dt();MM({target:"Promise",stat:!0,forced:BM},{allSettled:function(r){var t=this,n=LM.f(t),i=n.resolve,o=n.reject,u=FM(function(){var l=$M(t.resolve),c=[],s=0,f=1;DM(r,function(p){var v=s++,d=!1;f++,jM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yu=a(()=>{"use strict";var GM=x(),UM=D(),WM=F(),HM=W(),KM=Te(),zM=br(),VM=pe(),YM=Dt(),Ty="No one promise resolved";GM({target:"Promise",stat:!0,forced:YM},{any:function(r){var t=this,n=HM("AggregateError"),i=KM.f(t),o=i.resolve,u=i.reject,l=zM(function(){var c=WM(t.resolve),s=[],f=0,p=1,v=!1;VM(r,function(d){var h=f++,m=!1;p++,UM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,Ty)))})}),--p||u(new n(s,Ty))});return l.error&&u(l.value),i.promise}})});var bu=a(()=>{"use strict";var JM=x(),QM=_(),XM=_r(),ZM=cr(),ej=Te(),rj=F(),Cy=br(),gu=QM.Promise,Oy=!1,tj=!gu||!gu.try||Cy(function(){gu.try(function(e){Oy=e===8},8)}).error||!Oy;JM({target:"Promise",stat:!0,forced:tj},{try:function(e){var r=arguments.length>1?ZM(arguments,1):[],t=ej.f(this),n=Cy(function(){return XM(rj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var qu=a(()=>{"use strict";var nj=x(),ij=Te();nj({target:"Promise",stat:!0},{withResolvers:function(){var r=ij.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Py=a(()=>{"use strict";var aj=x(),oj=Z(),pi=qr(),uj=P(),Iy=W(),ky=N(),sj=Do(),Ey=mu(),cj=_e(),Su=pi&&pi.prototype,lj=!!pi&&uj(function(){Su.finally.call({then:function(){}},function(){})});aj({target:"Promise",proto:!0,real:!0,forced:lj},{finally:function(e){var r=sj(this,Iy("Promise")),t=ky(e);return this.then(t?function(n){return Ey(r,e()).then(function(){return n})}:e,t?function(n){return Ey(r,e()).then(function(){throw n})}:e)}});!oj&&ky(pi)&&(xu=Iy("Promise").prototype.finally,Su.finally!==xu&&cj(Su,"finally",xu,{unsafe:!0}));var xu});var Ry=a((KH,_y)=>{"use strict";jo();hr();Ct();wy();hu();yu();bu();qu();Py();pr();var fj=z();_y.exports=fj.Promise});var Ny=a((zH,Ay)=>{"use strict";var pj=Ry();yr();Ay.exports=pj});var My=a(()=>{"use strict";bu()});var jy=a(()=>{"use strict";qu()});var Ly=a((XH,$y)=>{"use strict";var vj=Ny();My();jy();$y.exports=vj});var Fy=a(()=>{"use strict";jo()});var Dy=a(()=>{"use strict";hu()});var By=a(()=>{"use strict";yu()});var Uy=a((aK,Gy)=>{"use strict";var dj=Ly();Fy();Dy();By();Gy.exports=dj});var rt=a((oK,Wy)=>{"use strict";Wy.exports=Uy()});var zy=a((fK,Ky)=>{"use strict";xo();var mj=Ur();Ky.exports=mj.f("asyncIterator")});var Yy=a((pK,Vy)=>{"use strict";var hj=zy();Vy.exports=hj});var Qy=a((vK,Jy)=>{"use strict";var yj=Yy();Jy.exports=yj});var Zy=a((dK,Xy)=>{"use strict";var gj=Qy();Xy.exports=gj});var vi=a((mK,eg)=>{"use strict";eg.exports=Zy()});var ig=a(()=>{"use strict";var bj=x(),qj=P(),xj=re(),ng=qt(),Sj=$a(),wj=qj(function(){ng(1)});bj({target:"Object",stat:!0,forced:wj,sham:!Sj},{getPrototypeOf:function(r){return ng(xj(r))}})});var og=a((qK,ag)=>{"use strict";ig();var Tj=z();ag.exports=Tj.Object.getPrototypeOf});var sg=a((xK,ug)=>{"use strict";var Oj=og();ug.exports=Oj});var lg=a((SK,cg)=>{"use strict";var Cj=sg();cg.exports=Cj});var pg=a((wK,fg)=>{"use strict";var Ej=lg();fg.exports=Ej});var di=a((TK,vg)=>{"use strict";vg.exports=pg()});var mg=a(()=>{"use strict";var Ij=x(),kj=A(),Pj=Pe(),_j=kj([].reverse),dg=[1,2];Ij({target:"Array",proto:!0,forced:String(dg)===String(dg.reverse())},{reverse:function(){return Pj(this)&&(this.length=this.length),_j(this)}})});var yg=a((EK,hg)=>{"use strict";mg();var Rj=oe();hg.exports=Rj("Array","reverse")});var bg=a((IK,gg)=>{"use strict";var Aj=G(),Nj=yg(),Ou=Array.prototype;gg.exports=function(e){var r=e.reverse;return e===Ou||Aj(Ou,e)&&r===Ou.reverse?Nj:r}});var xg=a((kK,qg)=>{"use strict";var Mj=bg();qg.exports=Mj});var wg=a((PK,Sg)=>{"use strict";var jj=xg();Sg.exports=jj});var Og=a((_K,Tg)=>{"use strict";var $j=wg();Tg.exports=$j});var Eg=a((RK,Cg)=>{"use strict";Cg.exports=Og()});var Cu=a((AK,Ut)=>{function Lj(e,r){this.v=e,this.k=r}Ut.exports=Lj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Ig=a(()=>{"use strict";var Fj=x(),Dj=U(),Bj=Je();Fj({target:"Object",stat:!0,sham:!Dj},{create:Bj})});var Pg=a((jK,kg)=>{"use strict";Ig();var Gj=z(),Uj=Gj.Object;kg.exports=function(r,t){return Uj.create(r,t)}});var Rg=a(($K,_g)=>{"use strict";var Wj=Pg();_g.exports=Wj});var Ng=a((LK,Ag)=>{"use strict";var Hj=Rg();Ag.exports=Hj});var jg=a((FK,Mg)=>{"use strict";var Kj=Ng();Mg.exports=Kj});var mi=a((DK,$g)=>{"use strict";$g.exports=jg()});var Iu=a((BK,Bg)=>{"use strict";var Fg=A(),zj=F(),Vj=$(),Yj=H(),Lg=cr(),Jj=Pr(),Dg=Function,Qj=Fg([].concat),Xj=Fg([].join),Eu={},Zj=function(e,r,t){if(!Yj(Eu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Eu[r]=Dg("C,a","return new C("+Xj(n,",")+")")}return Eu[r](e,t)};Bg.exports=Jj?Dg.bind:function(r){var t=zj(this),n=t.prototype,i=Lg(arguments,1),o=function(){var l=Qj(i,Lg(arguments));return this instanceof o?Zj(t,l.length,l):t.apply(r,l)};return Vj(n)&&(o.prototype=n),o}});var Ug=a(()=>{"use strict";var e$=x(),Gg=Iu();e$({target:"Function",proto:!0,forced:Function.bind!==Gg},{bind:Gg})});var Hg=a((WK,Wg)=>{"use strict";Ug();var r$=oe();Wg.exports=r$("Function","bind")});var zg=a((HK,Kg)=>{"use strict";var t$=G(),n$=Hg(),ku=Function.prototype;Kg.exports=function(e){var r=e.bind;return e===ku||t$(ku,e)&&r===ku.bind?n$:r}});var Yg=a((KK,Vg)=>{"use strict";var i$=zg();Vg.exports=i$});var Qg=a((zK,Jg)=>{"use strict";var a$=Yg();Jg.exports=a$});var Zg=a((VK,Xg)=>{"use strict";var o$=Qg();Xg.exports=o$});var Wt=a((YK,eb)=>{"use strict";eb.exports=Zg()});var rb=a(()=>{"use strict";var u$=x(),s$=xt();u$({target:"Object",stat:!0},{setPrototypeOf:s$})});var nb=a((XK,tb)=>{"use strict";rb();var c$=z();tb.exports=c$.Object.setPrototypeOf});var ab=a((ZK,ib)=>{"use strict";var l$=nb();ib.exports=l$});var ub=a((ez,ob)=>{"use strict";var f$=ab();ob.exports=f$});var cb=a((rz,sb)=>{"use strict";var p$=ub();sb.exports=p$});var hi=a((tz,lb)=>{"use strict";lb.exports=cb()});var pb=a(()=>{"use strict";var v$=x(),d$=U(),fb=te().f;v$({target:"Object",stat:!0,forced:Object.defineProperty!==fb,sham:!d$},{defineProperty:fb})});var mb=a((az,db)=>{"use strict";pb();var m$=z(),vb=m$.Object,h$=db.exports=function(r,t,n){return vb.defineProperty(r,t,n)};vb.defineProperty.sham&&(h$.sham=!0)});var yb=a((oz,hb)=>{"use strict";var y$=mb();hb.exports=y$});var bb=a((uz,gb)=>{"use strict";var g$=yb();gb.exports=g$});var xb=a((sz,qb)=>{"use strict";var b$=bb();qb.exports=b$});var Ht=a((cz,Sb)=>{"use strict";Sb.exports=xb()});var Pu=a((lz,Me)=>{var q$=Ht();function yi(e,r,t,n){var i=q$;try{i({},"",{})}catch{i=0}Me.exports=yi=function(u,l,c,s){function f(p,v){yi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Me.exports.__esModule=!0,Me.exports.default=Me.exports,yi(e,r,t,n)}Me.exports=yi,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Ru=a((fz,je)=>{var wb=we(),_u=mi(),x$=Wt(),S$=di(),Tb=hi(),Ce=Pu();function Ob(){var e,r,t=typeof wb=="function"?wb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=_u(q.prototype);return Ce(b,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:x$(qe).call(qe,e,4),d:function(L,me){return T=L,w=0,C=e,ee.n=me,u}};function qe(J,L){for(w=J,C=L,r=0;!k&&j&&!me&&r<be.length;r++){var me,O=be[r],Ir=ee.p,He=O[2];J>3?(me=He===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((me=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<He&&(me=J<3||O[0]>L||L>He)&&(O[4]=J,O[5]=L,ee.n=He,w=0))}if(me||J>1)return u;throw k=!0,L}return function(J,L,me){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,me),w=L,C=me;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=S$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=s.prototype=l.prototype=_u(f);function v(d){return Tb?Tb(d,s):(d.__proto__=s,Ce(d,i,"GeneratorFunction")),d.prototype=_u(p),d}return c.prototype=s,Ce(p,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(je.exports=Ob=function(){return{w:o,m:v}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Ob,je.exports.__esModule=!0,je.exports.default=je.exports});var Mu=a((pz,Kt)=>{var w$=we(),T$=vi(),O$=Cu(),Au=Pu();function Nu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof O$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Au(Nu.prototype),Au(Nu.prototype,typeof w$=="function"&&T$||"@asyncIterator",function(){return this})),Au(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Kt.exports=Nu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var ju=a((vz,zt)=>{var C$=rt(),E$=Ru(),I$=Mu();function k$(e,r,t,n,i){return new I$(E$().w(e,r,t,n),i||C$)}zt.exports=k$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Cb=a((dz,Vt)=>{var P$=ju();function _$(e,r,t,n,i){var o=P$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=_$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var kb=a((mz,Ib)=>{"use strict";var Eb=ze(),R$=TypeError;Ib.exports=function(e,r){if(!delete e[r])throw new R$("Cannot delete property "+Eb(r)+" of "+Eb(e))}});var Pb=a(()=>{"use strict";var A$=x(),N$=re(),M$=le(),j$=Dr(),$$=kb(),L$=Ot(),F$=[].unshift(0)!==1,D$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},B$=F$||!D$();A$({target:"Array",proto:!0,arity:1,forced:B$},{unshift:function(r){var t=N$(this),n=M$(t),i=arguments.length;if(i){L$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:$$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return j$(t,n+i)}})});var Rb=a((gz,_b)=>{"use strict";Pb();var G$=oe();_b.exports=G$("Array","unshift")});var Nb=a((bz,Ab)=>{"use strict";var U$=G(),W$=Rb(),$u=Array.prototype;Ab.exports=function(e){var r=e.unshift;return e===$u||U$($u,e)&&r===$u.unshift?W$:r}});var jb=a((qz,Mb)=>{"use strict";var H$=Nb();Mb.exports=H$});var Lb=a((xz,$b)=>{"use strict";var K$=jb();$b.exports=K$});var Db=a((Sz,Fb)=>{"use strict";var z$=Lb();Fb.exports=z$});var Gb=a((wz,Bb)=>{"use strict";Bb.exports=Db()});var Ub=a((Tz,Yt)=>{var V$=Gb();function Y$(e){var r=Object(e),t=[];for(var n in r)V$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=Y$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Hb=a((Oz,Wb)=>{"use strict";hr();Ct();pr();wo();var J$=Ur();Wb.exports=J$.f("iterator")});var zb=a((Cz,Kb)=>{"use strict";var Q$=Hb();yr();Kb.exports=Q$});var Yb=a((Ez,Vb)=>{"use strict";var X$=zb();Vb.exports=X$});var Qb=a((Iz,Jb)=>{"use strict";var Z$=Yb();Jb.exports=Z$});var Jt=a((kz,Xb)=>{"use strict";Xb.exports=Qb()});var Zb=a((Pz,$e)=>{var gi=we(),eL=Jt();function Lu(e){"@babel/helpers - typeof";return $e.exports=Lu=typeof gi=="function"&&typeof eL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof gi=="function"&&r.constructor===gi&&r!==gi.prototype?"symbol":typeof r},$e.exports.__esModule=!0,$e.exports.default=$e.exports,Lu(e)}$e.exports=Lu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var eq=a((_z,Qt)=>{var rL=Zb().default,tL=we(),nL=Jt();function iL(e){if(e!=null){var r=e[typeof tL=="function"&&nL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(rL(e)+" is not iterable")}Qt.exports=iL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var nq=a((Rz,Le)=>{var rq=di(),aL=Eg(),oL=Cu(),uL=Ru(),sL=Cb(),cL=ju(),lL=Mu(),fL=Ub(),tq=eq();function Fu(){"use strict";var e=uL(),r=e.m(Fu),t=(rq?rq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,tq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(Le.exports=Fu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&aL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new oL(c,s)},AsyncIterator:lL,async:function(c,s,f,p,v){return(n(s)?cL:sL)(o(c),s,f,p,v)},keys:fL,values:tq}},Le.exports.__esModule=!0,Le.exports.default=Le.exports)()}Le.exports=Fu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var se=a((Az,iq)=>{var bi=nq()();iq.exports=bi;try{regeneratorRuntime=bi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=bi:Function("r","regeneratorRuntime = r")(bi)}});var Du=a((xi,oq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});var qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},aq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();xi.default=pL;function pL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=vL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function vL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=aq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=aq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}oq.exports=xi.default});var wi=a(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.convertNodeList=dL;Si.escapeValue=mL;function dL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function mL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var hq=a((Ti,mq)=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.default=hL;var lq=wi(),uq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function hL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,lq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(sq(l,p,s,f,n)||cq(p,s,f,n))break;sq(l,p,s,f),f.length===v&&cq(p,s,f),f.length===v&&yL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=vq(l,p,s);f.unshift(y)}return f.join(" ")}function sq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=fq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function fq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,lq.escapeValue)(c.value),p=t[s]||t.attribute,v=uq[s]||uq.attribute;if(!dq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function cq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=pq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function pq(e,r){var t=e.tagName.toLowerCase();return dq(r.tag,null,t)?null:t}function yL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=vq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function vq(e,r,t){var n=fq(e,r,t);return n||(n=pq(r,t)),n}function dq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}mq.exports=Ti.default});var Bu=a((Ci,yq)=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=SL;var gL=Du(),bL=xL(gL),qL=wi();function xL(e){return e&&e.__esModule?e:{default:e}}function SL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,qL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,bL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Oi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Oi(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Oi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Oi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Oi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(tt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);tt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}yq.exports=Ci.default});var Gu=a(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.getCommonAncestor=wL;Ei.getCommonProperties=TL;function wL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function TL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var wq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var OL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=Sq;Zt.default=_L;var CL=Du(),bq=Uu(CL),EL=hq(),IL=Uu(EL),kL=Bu(),qq=Uu(kL),gq=wi(),xq=Gu();function Uu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":OL(e))+'")');var t=(0,bq.default)(e,r),n=(0,IL.default)(e,r),i=(0,qq.default)(n,e,r);return t&&delete global.document,i}function Sq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,gq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,bq.default)(e[0],r),n=(0,xq.getCommonAncestor)(e,r),i=Wu(n,r),o=PL(e),u=o[0],l=(0,qq.default)(i+" "+u,e,r),c=(0,gq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function PL(e){var r=(0,xq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function _L(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Sq(e,r):Wu(e,r)}});var Cq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Hu=wq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Hu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Hu.getMultiSelector}});var Tq=Oq(Hu),RL=Bu(),AL=Oq(RL),NL=Gu(),ML=jL(NL);function jL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Oq(e){return e&&e.__esModule?e:{default:e}}ie.select=Tq.default;ie.optimize=AL.default;ie.common=ML;ie.default=Tq.default});var Eq=a(()=>{"use strict";var KL=x(),zL=Pe();KL({target:"Array",stat:!0},{isArray:zL})});var kq=a((Jz,Iq)=>{"use strict";Eq();var VL=z();Iq.exports=VL.Array.isArray});var _q=a((Qz,Pq)=>{"use strict";var YL=kq();Pq.exports=YL});var Aq=a((Xz,Rq)=>{"use strict";var JL=_q();Rq.exports=JL});var Mq=a((Zz,Nq)=>{"use strict";var QL=Aq();Nq.exports=QL});var $q=a((eV,jq)=>{"use strict";jq.exports=Mq()});var Dq=a(()=>{"use strict";var XL=x(),ZL=re(),eF=le(),rF=Dr(),tF=Ot(),nF=P(),iF=nF(function(){return[].push.call({length:4294967296},1)!==4294967297}),aF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},oF=iF||!aF();XL({target:"Array",proto:!0,arity:1,forced:oF},{push:function(r){var t=ZL(this),n=eF(t),i=arguments.length;tF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return rF(t,n),n}})});var Gq=a((iV,Bq)=>{"use strict";Dq();var uF=oe();Bq.exports=uF("Array","push")});var Wq=a((aV,Uq)=>{"use strict";var sF=G(),cF=Gq(),Ku=Array.prototype;Uq.exports=function(e){var r=e.push;return e===Ku||sF(Ku,e)&&r===Ku.push?cF:r}});var Kq=a((oV,Hq)=>{"use strict";var lF=Wq();Hq.exports=lF});var Vq=a((uV,zq)=>{"use strict";var fF=Kq();zq.exports=fF});var Jq=a((sV,Yq)=>{"use strict";var pF=Vq();Yq.exports=pF});var zu=a((cV,Qq)=>{"use strict";Qq.exports=Jq()});var sx=a(()=>{"use strict";var vF=x(),dF=It().map,mF=yt(),hF=mF("map");vF({target:"Array",proto:!0,forced:!hF},{map:function(r){return dF(this,r,arguments.length>1?arguments[1]:void 0)}})});var lx=a(($V,cx)=>{"use strict";sx();var yF=oe();cx.exports=yF("Array","map")});var px=a((LV,fx)=>{"use strict";var gF=G(),bF=lx(),Yu=Array.prototype;fx.exports=function(e){var r=e.map;return e===Yu||gF(Yu,e)&&r===Yu.map?bF:r}});var dx=a((FV,vx)=>{"use strict";var qF=px();vx.exports=qF});var hx=a((DV,mx)=>{"use strict";var xF=dx();mx.exports=xF});var gx=a((BV,yx)=>{"use strict";var SF=hx();yx.exports=SF});var qx=a((GV,bx)=>{"use strict";bx.exports=gx()});var Sx=a((UV,xx)=>{xx.exports=qx()});var Tx=a((WV,wx)=>{wx.exports=rt()});var kx=a((HV,Ix)=>{"use strict";var wF=F(),TF=re(),OF=dn(),CF=le(),Ox=TypeError,Cx="Reduce of empty array with no initial value",Ex=function(e){return function(r,t,n,i){var o=TF(r),u=OF(o),l=CF(o);if(wF(t),l===0&&n<2)throw new Ox(Cx);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Ox(Cx)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};Ix.exports={left:Ex(!1),right:Ex(!0)}});var Ju=a((KV,Px)=>{"use strict";var EF=P();Px.exports=function(e,r){var t=[][e];return!!t&&EF(function(){t.call(null,r||function(){return 1},1)})}});var Rx=a(()=>{"use strict";var IF=x(),kF=kx().left,PF=Ju(),_x=Ar(),_F=Nt(),RF=!_F&&_x>79&&_x<83,AF=RF||!PF("reduce");IF({target:"Array",proto:!0,forced:AF},{reduce:function(r){var t=arguments.length;return kF(this,r,t,t>1?arguments[1]:void 0)}})});var Nx=a((YV,Ax)=>{"use strict";Rx();var NF=oe();Ax.exports=NF("Array","reduce")});var jx=a((JV,Mx)=>{"use strict";var MF=G(),jF=Nx(),Qu=Array.prototype;Mx.exports=function(e){var r=e.reduce;return e===Qu||MF(Qu,e)&&r===Qu.reduce?jF:r}});var Lx=a((QV,$x)=>{"use strict";var $F=jx();$x.exports=$F});var Dx=a((XV,Fx)=>{"use strict";var LF=Lx();Fx.exports=LF});var Gx=a((ZV,Bx)=>{"use strict";var FF=Dx();Bx.exports=FF});var Wx=a((e7,Ux)=>{"use strict";Ux.exports=Gx()});var Kx=a((r7,Hx)=>{Hx.exports=Wx()});var Yx=a((t7,Vx)=>{"use strict";var DF=Pe(),BF=le(),GF=Ot(),UF=V(),WF=Fr(),zx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?UF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&DF(p)?(v=BF(p),c=zx(e,r,p,v,c,o-1)-1):(GF(c+1),WF(e,c,p)),c++),s++;return c};Vx.exports=zx});var Jx=a(()=>{"use strict";var HF=x(),KF=Yx(),zF=F(),VF=re(),YF=le(),JF=Mn();HF({target:"Array",proto:!0},{flatMap:function(r){var t=VF(this),n=YF(t),i;return zF(r),i=JF(t,0),KF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Qx=a(()=>{"use strict";var QF=Oo();QF("flatMap")});var Zx=a((u7,Xx)=>{"use strict";Jx();Qx();var XF=oe();Xx.exports=XF("Array","flatMap")});var rS=a((s7,eS)=>{"use strict";var ZF=G(),eD=Zx(),Xu=Array.prototype;eS.exports=function(e){var r=e.flatMap;return e===Xu||ZF(Xu,e)&&r===Xu.flatMap?eD:r}});var nS=a((c7,tS)=>{"use strict";var rD=rS();tS.exports=rD});var aS=a((l7,iS)=>{"use strict";var tD=nS();iS.exports=tD});var uS=a((f7,oS)=>{"use strict";var nD=aS();oS.exports=nD});var cS=a((p7,sS)=>{"use strict";sS.exports=uS()});var fS=a((v7,lS)=>{lS.exports=cS()});var vS=a((d7,pS)=>{"use strict";Ya();var iD=oe();pS.exports=iD("Array","concat")});var mS=a((m7,dS)=>{"use strict";var aD=G(),oD=vS(),Zu=Array.prototype;dS.exports=function(e){var r=e.concat;return e===Zu||aD(Zu,e)&&r===Zu.concat?oD:r}});var yS=a((h7,hS)=>{"use strict";var uD=mS();hS.exports=uD});var bS=a((y7,gS)=>{"use strict";var sD=yS();gS.exports=sD});var xS=a((g7,qS)=>{"use strict";var cD=bS();qS.exports=cD});var wS=a((b7,SS)=>{"use strict";SS.exports=xS()});var es=a((q7,TS)=>{TS.exports=wS()});var ES=a(()=>{});var kS=a((U7,IS)=>{"use strict";ES();To();var bD=Ur();IS.exports=bD.f("toPrimitive")});var _S=a((W7,PS)=>{"use strict";var qD=kS();PS.exports=qD});var AS=a((H7,RS)=>{"use strict";var xD=_S();RS.exports=xD});var MS=a((K7,NS)=>{"use strict";var SD=AS();NS.exports=SD});var $S=a((z7,jS)=>{"use strict";jS.exports=MS()});var KS=a((d9,HS)=>{"use strict";var TD=$(),OD=xe(),CD=R(),ED=CD("match");HS.exports=function(e){var r;return TD(e)&&((r=e[ED])!==void 0?!!r:OD(e)==="RegExp")}});var VS=a((m9,zS)=>{"use strict";var ID=KS(),kD=TypeError;zS.exports=function(e){if(ID(e))throw new kD("The method doesn't accept regular expressions");return e}});var JS=a((h9,YS)=>{"use strict";var PD=R(),_D=PD("match");YS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[_D]=!1,"/./"[e](r)}catch{}}return!1}});var ZS=a(()=>{"use strict";var RD=x(),AD=ct(),ND=ft().f,MD=ba(),QS=Ve(),jD=VS(),$D=or(),LD=JS(),FD=Z(),DD=AD("".slice),BD=Math.min,XS=LD("startsWith"),GD=!FD&&!XS&&!!function(){var e=ND(String.prototype,"startsWith");return e&&!e.writable}();RD({target:"String",proto:!0,forced:!GD&&!XS},{startsWith:function(r){var t=QS($D(this));jD(r);var n=MD(BD(arguments.length>1?arguments[1]:void 0,t.length)),i=QS(r);return DD(t,n,n+i.length)===i}})});var rw=a((b9,ew)=>{"use strict";ZS();var UD=oe();ew.exports=UD("String","startsWith")});var nw=a((q9,tw)=>{"use strict";var WD=G(),HD=rw(),is=String.prototype;tw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===is||WD(is,e)&&r===is.startsWith?HD:r}});var aw=a((x9,iw)=>{"use strict";var KD=nw();iw.exports=KD});var uw=a((S9,ow)=>{"use strict";var zD=aw();ow.exports=zD});var cw=a((w9,sw)=>{"use strict";var VD=uw();sw.exports=VD});var fw=a((T9,lw)=>{"use strict";lw.exports=cw()});var vw=a((O9,pw)=>{pw.exports=fw()});var dw=a(()=>{"use strict";var YD=x(),JD=It().filter,QD=yt(),XD=QD("filter");YD({target:"Array",proto:!0,forced:!XD},{filter:function(r){return JD(this,r,arguments.length>1?arguments[1]:void 0)}})});var hw=a((I9,mw)=>{"use strict";dw();var ZD=oe();mw.exports=ZD("Array","filter")});var gw=a((k9,yw)=>{"use strict";var eB=G(),rB=hw(),as=Array.prototype;yw.exports=function(e){var r=e.filter;return e===as||eB(as,e)&&r===as.filter?rB:r}});var qw=a((P9,bw)=>{"use strict";var tB=gw();bw.exports=tB});var Sw=a((_9,xw)=>{"use strict";var nB=qw();xw.exports=nB});var Tw=a((R9,ww)=>{"use strict";var iB=Sw();ww.exports=iB});var Cw=a((A9,Ow)=>{"use strict";Ow.exports=Tw()});var Iw=a((N9,Ew)=>{Ew.exports=Cw()});var Ww=a(()=>{"use strict";var pB=x(),vB=W(),us=_r(),dB=Iu(),Lw=Fo(),mB=Q(),Fw=$(),hB=Je(),Bw=P(),ss=vB("Reflect","construct"),yB=Object.prototype,gB=[].push,Gw=Bw(function(){function e(){}return!(ss(function(){},[],e)instanceof e)}),Uw=!Bw(function(){ss(function(){})}),Dw=Gw||Uw;pB({target:"Reflect",stat:!0,forced:Dw,sham:Dw},{construct:function(r,t){Lw(r),mB(t);var n=arguments.length<3?r:Lw(arguments[2]);if(Uw&&!Gw)return ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return us(gB,i,t),new(us(dB,r,i))}var o=n.prototype,u=hB(Fw(o)?o:yB),l=us(r,u,t);return Fw(l)?l:u}})});var Kw=a((dY,Hw)=>{"use strict";Ww();var bB=z();Hw.exports=bB.Reflect.construct});var Vw=a((mY,zw)=>{"use strict";var qB=Kw();zw.exports=qB});var Jw=a((hY,Yw)=>{"use strict";var xB=Vw();Yw.exports=xB});var Xw=a((yY,Qw)=>{"use strict";var SB=Jw();Qw.exports=SB});var Ni=a((gY,Zw)=>{"use strict";Zw.exports=Xw()});var rT=a((bY,eT)=>{eT.exports=Ni()});var lT=a((IY,cT)=>{"use strict";var wB=P();cT.exports=wB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var vT=a((kY,pT)=>{"use strict";var TB=P(),OB=$(),CB=xe(),fT=lT(),Mi=Object.isExtensible,EB=TB(function(){Mi(1)});pT.exports=EB||fT?function(r){return!OB(r)||fT&&CB(r)==="ArrayBuffer"?!1:Mi?Mi(r):!0}:Mi});var mT=a((PY,dT)=>{"use strict";var IB=P();dT.exports=!IB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ms=a((_Y,gT)=>{"use strict";var kB=x(),PB=A(),_B=Gr(),RB=$(),ps=H(),AB=te().f,hT=Et(),NB=Ja(),vs=vT(),MB=Mr(),jB=mT(),yT=!1,Be=MB("meta"),$B=0,ds=function(e){AB(e,Be,{value:{objectID:"O"+$B++,weakData:{}}})},LB=function(e,r){if(!RB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ps(e,Be)){if(!vs(e))return"F";if(!r)return"E";ds(e)}return e[Be].objectID},FB=function(e,r){if(!ps(e,Be)){if(!vs(e))return!0;if(!r)return!1;ds(e)}return e[Be].weakData},DB=function(e){return jB&&yT&&vs(e)&&!ps(e,Be)&&ds(e),e},BB=function(){GB.enable=function(){},yT=!0;var e=hT.f,r=PB([].splice),t={};t[Be]=1,e(t).length&&(hT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Be){r(i,o,1);break}return i},kB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:NB.f}))},GB=gT.exports={enable:BB,fastKey:LB,getWeakData:FB,onFreeze:DB};_B[Be]=!0});var xT=a((RY,qT)=>{"use strict";var UB=x(),WB=_(),HB=ms(),KB=P(),zB=Se(),VB=pe(),YB=ni(),JB=N(),QB=$(),XB=ar(),ZB=Ae(),e3=te().f,r3=It().forEach,t3=U(),bT=Ye(),n3=bT.set,i3=bT.getterFor;qT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=WB[e],l=u&&u.prototype,c={},s;if(!t3||!JB(u)||!(i||l.forEach&&!KB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),HB.enable();else{s=r(function(v,d){n3(YB(v,f),{type:e,collection:new u}),XB(d)||VB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=i3(e);r3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&zB(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!QB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||e3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return ZB(s,e,!1,!0),c[e]=s,UB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var wT=a((AY,ST)=>{"use strict";var a3=_e();ST.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:a3(e,n,r[n],t);return e}});var PT=a((NY,kT)=>{"use strict";var TT=Je(),o3=$n(),OT=wT(),u3=V(),s3=ni(),c3=ar(),l3=pe(),f3=_n(),ji=Rn(),p3=Lo(),on=U(),CT=ms().fastKey,IT=Ye(),ET=IT.set,hs=IT.getterFor;kT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){s3(s,o),ET(s,{type:r,index:TT(null),first:null,last:null,size:0}),on||(s.size=0),c3(f)||l3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=hs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=CT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),on?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=CT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return OT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=TT(null),on?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),on?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=u3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),OT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),on&&o3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=hs(r),o=hs(n);f3(e,r,function(u,l){ET(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,ji(void 0,!0)):ji(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),p3(r)}}});var _T=a(()=>{"use strict";var v3=xT(),d3=PT();v3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},d3)});var RT=a(()=>{"use strict";_T()});var NT=a((FY,AT)=>{"use strict";AT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((DY,jT)=>{"use strict";var m3=W(),$i=NT(),MT=m3("Map");jT.exports={Map:MT,set:$i("set",2),get:$i("get",1),has:$i("has",1),remove:$i("delete",1),proto:MT.prototype}});var ys=a(()=>{"use strict";var h3=x(),y3=A(),g3=F(),b3=or(),q3=pe(),Li=ae(),$T=Z(),x3=P(),LT=Li.Map,S3=Li.has,w3=Li.get,T3=Li.set,O3=y3([].push),C3=$T||x3(function(){return LT.groupBy("ab",function(e){return e}).get("a").length!==1});h3({target:"Map",stat:!0,forced:$T||C3},{groupBy:function(r,t){b3(r),g3(t);var n=new LT,i=0;return q3(r,function(o){var u=t(o,i++);S3(n,u)?O3(w3(n,u),o):T3(n,u,[o])}),n}})});var Y=a((UY,FT)=>{"use strict";var E3=ze(),I3=TypeError;FT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new I3(E3(e)+" is not a map")}});var bs=a(()=>{"use strict";var k3=x(),P3=Y(),gs=ae(),_3=Z(),R3=gs.get,A3=gs.has,N3=gs.set;k3({target:"Map",proto:!0,real:!0,forced:_3},{getOrInsert:function(r,t){return A3(P3(this),r)?R3(this,r):(N3(this,r,t),t)}})});var xs=a(()=>{"use strict";var M3=x(),j3=F(),$3=Y(),qs=ae(),L3=Z(),F3=qs.get,D3=qs.has,B3=qs.set;M3({target:"Map",proto:!0,real:!0,forced:L3},{getOrInsertComputed:function(r,t){if($3(this),j3(t),D3(this,r))return F3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return B3(this,r,n),n}})});var BT=a((VY,DT)=>{"use strict";hr();RT();ys();bs();xs();Ct();pr();var G3=z();DT.exports=G3.Map});var UT=a((YY,GT)=>{"use strict";var U3=BT();yr();GT.exports=U3});var Ss=a(()=>{"use strict";bs()});var ws=a(()=>{"use strict";xs()});var WT=a(()=>{"use strict";ys()});var KT=a((tJ,HT)=>{"use strict";var W3=UT();Ss();ws();WT();HT.exports=W3});var VT=a((nJ,zT)=>{"use strict";var H3=V(),K3=Q(),z3=re(),V3=pe();zT.exports=function(e,r,t){return function(i){var o=z3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?H3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return V3(o,function(v){var d=c?s(v,p++):v;t?r(f,K3(d)[0],d[1]):r(f,d)}),f}}});var JT=a(()=>{"use strict";var Y3=x(),YT=ae(),J3=VT();Y3({target:"Map",stat:!0,forced:!0},{from:J3(YT.Map,YT.set,!0)})});var XT=a((oJ,QT)=>{"use strict";var Q3=Q();QT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,Q3(l)[0],l[1]):r(i,l)}return i}}});var eO=a(()=>{"use strict";var X3=x(),ZT=ae(),Z3=XT();X3({target:"Map",stat:!0,forced:!0},{of:Z3(ZT.Map,ZT.set,!0)})});var tO=a(()=>{"use strict";var e4=x(),r4=D(),t4=pe(),n4=N(),rO=F(),i4=ae().Map;e4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=n4(this)?this:i4,i=new n;rO(t);var o=rO(i.set);return t4(r,function(u){r4(o,i,t(u),u)}),i}})});var nO=a(()=>{"use strict";var a4=x(),o4=Y(),u4=ae().remove;a4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=o4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=u4(r,arguments[i]),t=t&&n;return!!t}})});var aO=a(()=>{"use strict";var s4=x(),c4=Y(),Ts=ae(),l4=Ts.get,f4=Ts.has,iO=Ts.set;s4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=c4(this),i,o;return f4(n,r)?(i=l4(n,r),"update"in t&&(i=t.update(i,r,n),iO(n,r,i)),i):(o=t.insert(r,n),iO(n,r,o),o)}})});var uO=a((mJ,oO)=>{"use strict";var p4=D();oO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=p4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ge=a((hJ,sO)=>{"use strict";var v4=uO();sO.exports=function(e,r,t){return t?v4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var cO=a(()=>{"use strict";var d4=x(),m4=V(),h4=Y(),y4=ge();d4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=h4(this),n=m4(r,arguments.length>1?arguments[1]:void 0);return y4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var fO=a(()=>{"use strict";var g4=x(),b4=V(),q4=Y(),lO=ae(),x4=ge(),S4=lO.Map,w4=lO.set;g4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=q4(this),n=b4(r,arguments.length>1?arguments[1]:void 0),i=new S4;return x4(t,function(o,u){n(o,u,t)&&w4(i,u,o)}),i}})});var pO=a(()=>{"use strict";var T4=x(),O4=V(),C4=Y(),E4=ge();T4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=C4(this),n=O4(r,arguments.length>1?arguments[1]:void 0),i=E4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var vO=a(()=>{"use strict";var I4=x(),k4=V(),P4=Y(),_4=ge();I4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=P4(this),n=k4(r,arguments.length>1?arguments[1]:void 0),i=_4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var mO=a((OJ,dO)=>{"use strict";dO.exports=function(e,r){return e===r||e!==e&&r!==r}});var hO=a(()=>{"use strict";var R4=x(),A4=mO(),N4=Y(),M4=ge();R4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return M4(N4(this),function(t){if(A4(t,r))return!0},!0)===!0}})});var yO=a(()=>{"use strict";var j4=x(),$4=Y(),L4=ge();j4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=L4($4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var bO=a(()=>{"use strict";var F4=x(),D4=V(),B4=Y(),gO=ae(),G4=ge(),U4=gO.Map,W4=gO.set;F4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=B4(this),n=D4(r,arguments.length>1?arguments[1]:void 0),i=new U4;return G4(t,function(o,u){W4(i,n(o,u,t),o)}),i}})});var xO=a(()=>{"use strict";var H4=x(),K4=V(),z4=Y(),qO=ae(),V4=ge(),Y4=qO.Map,J4=qO.set;H4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=z4(this),n=K4(r,arguments.length>1?arguments[1]:void 0),i=new Y4;return V4(t,function(o,u){J4(i,u,n(o,u,t))}),i}})});var SO=a(()=>{"use strict";var Q4=x(),X4=Y(),Z4=pe(),eG=ae().set;Q4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=X4(this),n=arguments.length,i=0;i<n;)Z4(arguments[i++],function(o,u){eG(t,o,u)},{AS_ENTRIES:!0});return t}})});var wO=a(()=>{"use strict";var rG=x(),tG=F(),nG=Y(),iG=ge(),aG=TypeError;rG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=nG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(tG(r),iG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new aG("Reduce of empty map with no initial value");return i}})});var TO=a(()=>{"use strict";var oG=x(),uG=V(),sG=Y(),cG=ge();oG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=sG(this),n=uG(r,arguments.length>1?arguments[1]:void 0);return cG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var CO=a(()=>{"use strict";var lG=x(),OO=F(),fG=Y(),Os=ae(),pG=TypeError,vG=Os.get,dG=Os.has,mG=Os.set;lG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=fG(this),i=arguments.length;OO(t);var o=dG(n,r);if(!o&&i<3)throw new pG("Updating absent value");var u=o?vG(n,r):OO(i>2?arguments[2]:void 0)(r,n);return mG(n,r,t(u,r,n)),n}})});var Es=a((GJ,EO)=>{"use strict";var Fi=D(),Cs=F(),Di=N(),hG=Q(),yG=TypeError;EO.exports=function(r,t){var n=hG(this),i=Cs(n.get),o=Cs(n.has),u=Cs(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Di(t)&&!Di(l))throw new yG("At least one callback required");return Fi(o,n,r)?(c=Fi(i,n,r),Di(t)&&(c=t(c),Fi(u,n,r,c))):Di(l)&&(c=l(),Fi(u,n,r,c)),c}});var IO=a(()=>{"use strict";var gG=x(),bG=Es();gG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:bG})});var kO=a(()=>{"use strict";var qG=x(),xG=Es();qG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:xG})});var _O=a((zJ,PO)=>{"use strict";var SG=KT();JT();eO();tO();nO();aO();cO();fO();pO();vO();hO();Ss();ws();yO();bO();xO();SO();wO();TO();CO();IO();kO();PO.exports=SG});var AO=a((VJ,RO)=>{"use strict";RO.exports=_O()});var MO=a(()=>{"use strict";var wG=x(),TG=ct(),OG=ka().indexOf,CG=Ju(),Is=TG([].indexOf),NO=!!Is&&1/Is([1],1,-0)<0,EG=NO||!CG("indexOf");wG({target:"Array",proto:!0,forced:EG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return NO?Is(this,r,t)||0:OG(this,r,t)}})});var $O=a((QJ,jO)=>{"use strict";MO();var IG=oe();jO.exports=IG("Array","indexOf")});var FO=a((XJ,LO)=>{"use strict";var kG=G(),PG=$O(),ks=Array.prototype;LO.exports=function(e){var r=e.indexOf;return e===ks||kG(ks,e)&&r===ks.indexOf?PG:r}});var BO=a((ZJ,DO)=>{"use strict";var _G=FO();DO.exports=_G});var UO=a((eQ,GO)=>{"use strict";var RG=BO();GO.exports=RG});var HO=a((rQ,WO)=>{"use strict";var AG=UO();WO.exports=AG});var zO=a((tQ,KO)=>{"use strict";KO.exports=HO()});var lC=a(()=>{"use strict";var FG=x(),DG=re(),cC=Cn(),BG=P(),GG=BG(function(){cC(1)});FG({target:"Object",stat:!0,forced:GG},{keys:function(r){return cC(DG(r))}})});var pC=a((uX,fC)=>{"use strict";lC();var UG=z();fC.exports=UG.Object.keys});var dC=a((sX,vC)=>{"use strict";var WG=pC();vC.exports=WG});var hC=a((cX,mC)=>{"use strict";var HG=dC();mC.exports=HG});var gC=a((lX,yC)=>{"use strict";var KG=hC();yC.exports=KG});var qC=a((fX,bC)=>{"use strict";bC.exports=gC()});var SC=a((pX,xC)=>{xC.exports=qC()});var kr="";function Ks(e){kr=e.replace(/\/+$/,"")}async function ut(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function zs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`);return await ut(n,"Failed to fetch comments"),(await n.json()).data}async function zi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ut(s,"Failed to create comment"),s.json()}async function Vs(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ut(t,"Failed to update comment"),t.json()}async function Ys(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ut(t,"Failed to update comment status"),t.json()}async function Js(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE"});await ut(r,"Failed to delete comment")}var FL=g(Br(),1),DL=g(Nn(),1),BL=g(Jn(),1),GL=g(Qn(),1),UL=g(Xn(),1);var wu=g(rt(),1);function Hy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):wu.default.resolve(c).then(n,i)}function Sr(e){return function(){var r=this,t=arguments;return new wu.default(function(n,i){var o=e.apply(r,t);function u(c){Hy(o,n,i,u,l,"next",c)}function l(c){Hy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function er(e){return new Bt(e,0)}var Tu=g(rt(),1),rg=g(we(),1),tg=g(vi(),1);function Oe(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Bt;Tu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Tu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof rg.default=="function"&&tg.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var WL=g(se(),1),HL=g(Cq(),1);function ce(e){var r,t=$L(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function $L(e){return"startContainer"in e}function tr(e){if(LL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function LL(e){return"startContainer"in e}var Lq=g($q(),1);function Fq(e){if((0,Lq.default)(e))return e}var Xq=g(we(),1),Zq=g(Ro(),1),ex=g(zu(),1);function rx(e,r){var t=e==null?null:typeof Xq.default<"u"&&(0,Zq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ex.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var tx=g(Sa(),1),nx=g(Va(),1);function Ii(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Vu(e,r){if(e){var t;if(typeof e=="string")return Ii(e,r);var n=(0,tx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,nx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ii(e,r):void 0}}function ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,r){return Fq(e)||rx(e,r)||Vu(e,r)||ix()}var ax=g(we(),1),ox=g(vi(),1),ux=g(Jt(),1),en=g(rt(),1);function nt(e){var r,t,n,i=2;for(typeof ax.default<"u"&&(t=ox.default,n=ux.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ki(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ki(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return ki=function(n){this.s=n,this.n=n.next},ki.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new ki(e)}var gD=g(se(),1);var pD=g(se(),1),vD=g(Sx(),1),dD=g(Tx(),1),mD=g(Kx(),1),hD=g(fS(),1),yD=g(es(),1);var Rs=g(se(),1);var fB=g(se(),1);var ts=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function OS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var rs=g(Ht(),1);var tn=g(we(),1),CS=g(Jt(),1);function De(e){"@babel/helpers - typeof";return De=typeof tn.default=="function"&&typeof CS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},De(e)}var LS=g($S(),1);function FS(e,r){if(De(e)!="object"||!e)return e;var t=e[LS.default];if(t!==void 0){var n=t.call(e,r||"default");if(De(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Pi(e){var r=FS(e,"string");return De(r)=="symbol"?r:r+""}function DS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,rs.default)(e,Pi(n.key),n)}}function nn(e,r,t){return r&&DS(e.prototype,r),t&&DS(e,t),(0,rs.default)(e,"prototype",{writable:!1}),e}var BS=g(Ht(),1);function Tr(e,r,t){return(r=Pi(r))in e?(0,BS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var GS=g(Br(),1);var _i="Iterator exhausted before seek ended.",an=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Fe(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(_i)}else for(;!rn(this.currentChunk,n);){var l=this._readToNextChunk(),c=Fe(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(_i)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,GS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Fe(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(_i)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Fe(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(_i)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function WS(e,r){return ns.apply(this,arguments)}function ns(){return ns=Sr(ts.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return ts.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new an(t()),p=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ri(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ri(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Ai(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&OS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=US(f,p,!0),w!==void 0&&!o&&(w=Ri(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=US(f,p,!1),C!==void 0&&!o&&(C=C+Ri(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ns.apply(this,arguments)}function US(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ri(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(wD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function wD(e){return/^\s+$/.test(e)}var _w=g(Br(),1),Rw=g(Nn(),1),Aw=g(Jn(),1),Nw=g(Qn(),1),Mw=g(Xn(),1);var os=g(se(),1),jw=g(vw(),1),$w=g(Iw(),1);function kw(e,r){var t;if(typeof Aw.default>"u"||(0,Nw.default)(e)==null){if(Array.isArray(e)||(t=aB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Mw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function aB(e,r){var t;if(e){if(typeof e=="string")return Pw(e,r);var n=(0,_w.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Rw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pw(e,r)}}function Pw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ai(e){return function(){var r=Oe(os.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,be,k,ee,qe,J,L;return os.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=kw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,jw.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(He){var Ws=v[He];w=(0,$w.default)(w).call(w,function(QC){return Ws===c[He-QC]}),Ws===c[0]&&w.push(He)},be=C;be<v.length;be++)j(be);k=kw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,J=v.length-qe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=qe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=qe+u.length),s.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var cB=g(se(),1);var oB=g(Br(),1),uB=g(es(),1);var lB=g(se(),1);var sn=g(rT(),1);var nT=g(mi(),1),iT=g(Ht(),1);var cs=g(hi(),1),tT=g(Wt(),1);function nr(e,r){var t;return nr=cs.default?(0,tT.default)(t=cs.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function ls(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,nT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,iT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function aT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oT(e,r){if(r&&(De(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aT(e)}var uT=g(hi(),1),sT=g(Wt(),1),fs=g(di(),1);function Or(e){var r;return Or=uT.default?(0,sT.default)(r=fs.default).call(r):function(t){return t.__proto__||(0,fs.default)(t)},Or(e)}var _s=g(AO(),1),rC=g(mi(),1);var VO=g(zO(),1);function YO(e){try{var r;return(0,VO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var QO=g(Ni(),1),XO=g(zu(),1),ZO=g(Wt(),1);var JO=g(Ni(),1);function Ps(){try{var e=!Boolean.prototype.valueOf.call((0,JO.default)(Boolean,[],function(){}))}catch{}return(Ps=function(){return!!e})()}function eC(e,r,t){if(Ps())return QO.default.apply(null,arguments);var n=[null];(0,XO.default)(n).apply(n,r);var i=new((0,ZO.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function un(e){var r=typeof _s.default=="function"?new _s.default:void 0;return un=function(n){if(n===null||!YO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return eC(n,arguments,Or(this).constructor)}return i.prototype=(0,rC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},un(e)}function iC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=tC(e.startContainer,e.startOffset),o=Fe(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=tC(e.endContainer,e.endOffset),s=Fe(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function tC(e,r){var t;if(nC(e))return[e,r];var n;if(NG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(nC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function nC(e){return e.nodeType===Node.TEXT_NODE}function NG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function oC(e){var r=MG();return function(){var n=Or(e),i;if(r){var o=Or(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return oT(this,i)}}function MG(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Bi=function(e){ls(t,e);var r=oC(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),jG=function(e){ls(t,e);var r=oC(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Cr=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=tr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!aC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Bi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!aC(t))throw new Bi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new jG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=iC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function aC(e){return e.nodeType===Node.TEXT_NODE}function uC(e,r){return As.apply(this,arguments)}function As(){return As=Sr(Rs.default.mark(function e(r,t){var n,i,o,u=arguments;return Rs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??ce(r)),o=new Cr(i),c.next=5,WS(o.rangeToChunkRange(r),function(){return new Cr(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),As.apply(this,arguments)}var Ns=g(se(),1);function sC(e){var r=Ai(e);return function(){var t=Oe(Ns.default.mark(function i(o){var u,l,c,s,f,p,v,d;return Ns.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Cr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Bi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,l=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var $G=g(se(),1);var LG=g(se(),1);var zG=g(SC(),1),VG=g(Br(),1),YG=g(Nn(),1),JG=g(Jn(),1),QG=g(Qn(),1),XG=g(Xn(),1);async function wC(e,r){let t=await uC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Gi(e,r){let t=sC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var it="fb-highlight",TC="fb-highlight-active";var cn=null;function CC(e){cn=e}function Ui(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=OC(e,r);t.push(n)}else{let n=eU(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(OC(u,r))}}return t}function OC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return ZG(e,r,o);let u=document.createElement("mark");u.className=it,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function ZG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",it),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ms(e){document.querySelectorAll(`.${it}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function EC(){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Wi(e){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(TC):r.classList.remove(TC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function IC(e){let r=document.querySelector(`.${it}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function eU(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function kC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function PC(e,r){let t=kC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ir(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var rU=`
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
`,_C=null,RC=null;function AC(e,r){RC=e,_C=r,tU()}function tU(){let e=document.createElement("style");e.textContent=rU,document.head.appendChild(e)}function NC(){let e=_C(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(RC.contentSelector||"body").innerHTML,c=PC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ir(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function MC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function jC(e,r){return e.length>r?e.slice(0,r)+"...":e}function $C(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function FC(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function ve(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let i=document.createElement("button");i.className="fb-toast-dismiss",i.innerHTML="&times;",i.addEventListener("click",()=>LC(t)),t.appendChild(i)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),r==="success"&&setTimeout(()=>LC(t),4e3)}function LC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var nU=320,GC="feedback-layer-commenter",X=null,Ue=null,Ge=null,js=null,UC=null,$s=null,Ls=null,Fs=null,Ds=null,Bs=!1,WC=[],HC=new Set,DC=!1;function Gs(){DC||(DC=!0,uU())}function at(){return localStorage.getItem(GC)||""}function KC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){UC=e,$s=r,Ls=t,Fs=n,Ds=i,Gs(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${ir(at())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>fn()),document.body.appendChild(o),document.body.appendChild(X),FC(X),Ue=X.querySelector(".fb-comment-list"),Ge=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(GC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>NC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>iU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Bs=s.checked,We(WC,HC)})}function fn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function iU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function zC(e){if(fn(),!at()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}js=e,Ge.style.display="",Ge.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ir(jC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ge.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!at()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(UC({comment:n,commenter:at()}),Ge.style.display="none",js=null)};Ge.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ge.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ge.style.display="none",js=null}),Ge.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){WC=e,HC=r,Ue.innerHTML="";let{topLevel:n,repliesByParent:i}=MC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Bs}),l=Bs?u:u.filter(s=>s.status!=="closed");if(o.length===0){Ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ue.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ue.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(BC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(BC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),aU(s.id,f,v)}),f.appendChild(v),Ue.appendChild(f)}}function BC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ir(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ir(e.author)}</span>
      <span class="fb-cmt-time">${$C(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Wi(e.id),IC(e.id),Ue.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ls&&Ls(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),oU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),$s&&$s(e.id)}),n}function aU(e,r,t){fn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!at()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Fs&&Fs({parent_id:e,comment:l,commenter:at()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function oU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ir(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Ds&&Ds(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function VC(e){let r=Ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function uU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${nU}px;
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
  `,document.head.appendChild(e)}var ot=null,Hi=null,Ki=null,B=[],Er=null,Ee=null,de=new Set,Ie=new Map,Us=!1;function sU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Ks(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Hi=r.documentUri||window.location.origin+window.location.pathname,Ki=r.documentId||null,Gs(),CC(i=>{JC(),fn(),VC(i),Wi(i)}),fU(),await t(),cU(),AC(r,()=>B)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}function JC(){Us||(KC({onSubmit:vU,onDelete:yU,onResolve:dU,onReply:mU,onEdit:hU}),B.length>0&&We(B,de,Ie),Us=!0)}async function cU(){try{B=await zs(Hi,Ki),de=await lU(B),Us&&We(B,de,Ie)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ve("Failed to load comments","error")}}async function lU(e){EC();let r=new Set;Ie.clear();for(let t of e)if(!t.parent)try{let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Ui(n,t.id),r.add(t.id),Ie.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ie.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function fU(){document.addEventListener("mouseup",YC),document.addEventListener("keyup",YC)}function YC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){pn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){pn();return}if(!ot.contains(r.commonAncestorContainer)){pn();return}pU(r)},10)}function pU(e){pn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{JC(),Er=await wC(i,ot),zC(Er.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}pn()}),document.body.appendChild(Ee)}function pn(){Ee&&(Ee.remove(),Ee=null)}async function vU({comment:e,commenter:r}){if(Er){try{let t=await zi({uri:Hi,document:Ki,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r});B.push(t);let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&(Ui(n,t.id),de.add(t.id)),We(B,de,Ie),ve("Comment saved","success"),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),ve("Failed to save comment","error")}Er=null}}async function dU(e,r){try{let n=await Ys(e,r?"closed":"open"),i=B.findIndex(o=>o.id===e);if(i!==-1&&(B[i]=n),r)Ms(e);else{let o=n,u=await Gi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(Ui(u,o.id),de.add(o.id)):de.delete(o.id)}We(B,de,Ie),ve(r?"Comment resolved":"Comment reopened","success")}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ve("Failed to update comment","error")}}async function mU({parent_id:e,comment:r,commenter:t}){try{let n=await zi({uri:Hi,document:Ki,body:r,author:t,parent:e});B.push(n),We(B,de,Ie),ve("Reply saved","success")}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ve("Failed to save reply","error")}}async function hU(e,r){try{let t=await Vs(e,{body:r}),n=B.findIndex(i=>i.id===e);n!==-1&&(B[n]=t),We(B,de,Ie),ve("Comment updated","success")}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ve("Failed to update comment","error")}}async function yU(e){try{await Js(e),Ms(e),de.delete(e),B=B.filter(r=>r.id!==e&&r.parent!==e),We(B,de,Ie),ve("Comment deleted","success")}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ve("Failed to delete comment","error")}}try{sU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
