var FeedbackLayer=(()=>{var F0=Object.create;var af=Object.defineProperty;var $0=Object.getOwnPropertyDescriptor;var B0=Object.getOwnPropertyNames;var U0=Object.getPrototypeOf,G0=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var H0=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of B0(r))!G0.call(e,a)&&a!==t&&af(e,a,{get:()=>r[a],enumerable:!(n=$0(r,a))||n.enumerable});return e};var q=(e,r,t)=>(t=e!=null?F0(U0(e)):{},H0(r||!e||!e.__esModule?af(t,"default",{value:e,enumerable:!0}):t,e));var L=i((VW,pf)=>{"use strict";pf.exports=function(e){try{return!!e()}catch{return!0}}});var vt=i((YW,df)=>{"use strict";var W0=L();df.exports=!W0(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var B=i((XW,hf)=>{"use strict";var vf=vt(),mf=Function.prototype,qo=mf.call,z0=vf&&mf.bind.bind(qo,qo);hf.exports=vf?z0:function(e){return function(){return qo.apply(e,arguments)}}});var ne=i((JW,yf)=>{"use strict";var K0=B();yf.exports=K0({}.isPrototypeOf)});var D=i((xo,gf)=>{"use strict";var Yt=function(e){return e&&e.Math===Math&&e};gf.exports=Yt(typeof globalThis=="object"&&globalThis)||Yt(typeof window=="object"&&window)||Yt(typeof self=="object"&&self)||Yt(typeof global=="object"&&global)||Yt(typeof xo=="object"&&xo)||function(){return this}()||Function("return this")()});var mt=i((QW,Sf)=>{"use strict";var V0=vt(),xf=Function.prototype,bf=xf.apply,qf=xf.call;Sf.exports=typeof Reflect=="object"&&Reflect.apply||(V0?qf.bind(bf):function(){return qf.apply(bf,arguments)})});var Ve=i((ZW,wf)=>{"use strict";var Ef=B(),Y0=Ef({}.toString),X0=Ef("".slice);wf.exports=function(e){return X0(Y0(e),8,-1)}});var Xt=i((e6,Tf)=>{"use strict";var J0=Ve(),Q0=B();Tf.exports=function(e){if(J0(e)==="Function")return Q0(e)}});var U=i((r6,Cf)=>{"use strict";var So=typeof document=="object"&&document.all;Cf.exports=typeof So>"u"&&So!==void 0?function(e){return typeof e=="function"||e===So}:function(e){return typeof e=="function"}});var ae=i((t6,Of)=>{"use strict";var Z0=L();Of.exports=!Z0(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var Q=i((n6,_f)=>{"use strict";var eI=vt(),qa=Function.prototype.call;_f.exports=eI?qa.bind(qa):function(){return qa.apply(qa,arguments)}});var Eo=i(Af=>{"use strict";var If={}.propertyIsEnumerable,kf=Object.getOwnPropertyDescriptor,rI=kf&&!If.call({1:2},1);Af.f=rI?function(r){var t=kf(this,r);return!!t&&t.enumerable}:If});var Sr=i((i6,Rf)=>{"use strict";Rf.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var xa=i((o6,Pf)=>{"use strict";var tI=B(),nI=L(),aI=Ve(),wo=Object,iI=tI("".split);Pf.exports=nI(function(){return!wo("z").propertyIsEnumerable(0)})?function(e){return aI(e)==="String"?iI(e,""):wo(e)}:wo});var Dr=i((s6,Nf)=>{"use strict";Nf.exports=function(e){return e==null}});var jr=i((u6,Mf)=>{"use strict";var oI=Dr(),sI=TypeError;Mf.exports=function(e){if(oI(e))throw new sI("Can't call method on "+e);return e}});var or=i((c6,Lf)=>{"use strict";var uI=xa(),cI=jr();Lf.exports=function(e){return uI(cI(e))}});var W=i((l6,Df)=>{"use strict";var lI=U();Df.exports=function(e){return typeof e=="object"?e!==null:lI(e)}});var le=i((f6,jf)=>{"use strict";jf.exports={}});var ie=i((p6,$f)=>{"use strict";var To=le(),Co=D(),fI=U(),Ff=function(e){return fI(e)?e:void 0};$f.exports=function(e,r){return arguments.length<2?Ff(To[e])||Ff(Co[e]):To[e]&&To[e][r]||Co[e]&&Co[e][r]}});var ht=i((d6,Gf)=>{"use strict";var pI=D(),Bf=pI.navigator,Uf=Bf&&Bf.userAgent;Gf.exports=Uf?String(Uf):""});var yt=i((v6,Yf)=>{"use strict";var Vf=D(),Oo=ht(),Hf=Vf.process,Wf=Vf.Deno,zf=Hf&&Hf.versions||Wf&&Wf.version,Kf=zf&&zf.v8,$e,Sa;Kf&&($e=Kf.split("."),Sa=$e[0]>0&&$e[0]<4?1:+($e[0]+$e[1]));!Sa&&Oo&&($e=Oo.match(/Edge\/(\d+)/),(!$e||$e[1]>=74)&&($e=Oo.match(/Chrome\/(\d+)/),$e&&(Sa=+$e[1])));Yf.exports=Sa});var Fr=i((m6,Jf)=>{"use strict";var Xf=yt(),dI=L(),vI=D(),mI=vI.String;Jf.exports=!!Object.getOwnPropertySymbols&&!dI(function(){var e=Symbol("symbol detection");return!mI(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Xf&&Xf<41})});var _o=i((h6,Qf)=>{"use strict";var hI=Fr();Qf.exports=hI&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var gt=i((y6,Zf)=>{"use strict";var yI=ie(),gI=U(),bI=ne(),qI=_o(),xI=Object;Zf.exports=qI?function(e){return typeof e=="symbol"}:function(e){var r=yI("Symbol");return gI(r)&&bI(r.prototype,xI(e))}});var Er=i((g6,ep)=>{"use strict";var SI=String;ep.exports=function(e){try{return SI(e)}catch{return"Object"}}});var K=i((b6,rp)=>{"use strict";var EI=U(),wI=Er(),TI=TypeError;rp.exports=function(e){if(EI(e))return e;throw new TI(wI(e)+" is not a function")}});var Ea=i((q6,tp)=>{"use strict";var CI=K(),OI=Dr();tp.exports=function(e,r){var t=e[r];return OI(t)?void 0:CI(t)}});var ap=i((x6,np)=>{"use strict";var Io=Q(),ko=U(),Ao=W(),_I=TypeError;np.exports=function(e,r){var t,n;if(r==="string"&&ko(t=e.toString)&&!Ao(n=Io(t,e))||ko(t=e.valueOf)&&!Ao(n=Io(t,e))||r!=="string"&&ko(t=e.toString)&&!Ao(n=Io(t,e)))return n;throw new _I("Can't convert object to primitive value")}});var me=i((S6,ip)=>{"use strict";ip.exports=!0});var up=i((E6,sp)=>{"use strict";var op=D(),II=Object.defineProperty;sp.exports=function(e,r){try{II(op,e,{value:r,configurable:!0,writable:!0})}catch{op[e]=r}return r}});var Jt=i((w6,fp)=>{"use strict";var kI=me(),AI=D(),RI=up(),cp="__core-js_shared__",lp=fp.exports=AI[cp]||RI(cp,{});(lp.versions||(lp.versions=[])).push({version:"3.48.0",mode:kI?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var $r=i((T6,dp)=>{"use strict";var pp=Jt();dp.exports=function(e,r){return pp[e]||(pp[e]=r||{})}});var xe=i((C6,vp)=>{"use strict";var PI=jr(),NI=Object;vp.exports=function(e){return NI(PI(e))}});var oe=i((O6,mp)=>{"use strict";var MI=B(),LI=xe(),DI=MI({}.hasOwnProperty);mp.exports=Object.hasOwn||function(r,t){return DI(LI(r),t)}});var bt=i((_6,hp)=>{"use strict";var jI=B(),FI=0,$I=Math.random(),BI=jI(1.1.toString);hp.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+BI(++FI+$I,36)}});var j=i((I6,gp)=>{"use strict";var UI=D(),GI=$r(),yp=oe(),HI=bt(),WI=Fr(),zI=_o(),qt=UI.Symbol,Ro=GI("wks"),KI=zI?qt.for||qt:qt&&qt.withoutSetter||HI;gp.exports=function(e){return yp(Ro,e)||(Ro[e]=WI&&yp(qt,e)?qt[e]:KI("Symbol."+e)),Ro[e]}});var Sp=i((k6,xp)=>{"use strict";var VI=Q(),bp=W(),qp=gt(),YI=Ea(),XI=ap(),JI=j(),QI=TypeError,ZI=JI("toPrimitive");xp.exports=function(e,r){if(!bp(e)||qp(e))return e;var t=YI(e,ZI),n;if(t){if(r===void 0&&(r="default"),n=VI(t,e,r),!bp(n)||qp(n))return n;throw new QI("Can't convert object to primitive value")}return r===void 0&&(r="number"),XI(e,r)}});var wa=i((A6,Ep)=>{"use strict";var ek=Sp(),rk=gt();Ep.exports=function(e){var r=ek(e,"string");return rk(r)?r:r+""}});var Ta=i((R6,Tp)=>{"use strict";var tk=D(),wp=W(),Po=tk.document,nk=wp(Po)&&wp(Po.createElement);Tp.exports=function(e){return nk?Po.createElement(e):{}}});var No=i((P6,Cp)=>{"use strict";var ak=ae(),ik=L(),ok=Ta();Cp.exports=!ak&&!ik(function(){return Object.defineProperty(ok("div"),"a",{get:function(){return 7}}).a!==7})});var Qt=i(_p=>{"use strict";var sk=ae(),uk=Q(),ck=Eo(),lk=Sr(),fk=or(),pk=wa(),dk=oe(),vk=No(),Op=Object.getOwnPropertyDescriptor;_p.f=sk?Op:function(r,t){if(r=fk(r),t=pk(t),vk)try{return Op(r,t)}catch{}if(dk(r,t))return lk(!uk(ck.f,r,t),r[t])}});var Mo=i((M6,Ip)=>{"use strict";var mk=L(),hk=U(),yk=/#|\.prototype\./,Zt=function(e,r){var t=bk[gk(e)];return t===xk?!0:t===qk?!1:hk(r)?mk(r):!!r},gk=Zt.normalize=function(e){return String(e).replace(yk,".").toLowerCase()},bk=Zt.data={},qk=Zt.NATIVE="N",xk=Zt.POLYFILL="P";Ip.exports=Zt});var fe=i((L6,Ap)=>{"use strict";var kp=Xt(),Sk=K(),Ek=vt(),wk=kp(kp.bind);Ap.exports=function(e,r){return Sk(e),r===void 0?e:Ek?wk(e,r):function(){return e.apply(r,arguments)}}});var Lo=i((D6,Rp)=>{"use strict";var Tk=ae(),Ck=L();Rp.exports=Tk&&Ck(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var ve=i((j6,Pp)=>{"use strict";var Ok=W(),_k=String,Ik=TypeError;Pp.exports=function(e){if(Ok(e))return e;throw new Ik(_k(e)+" is not an object")}});var Se=i(Mp=>{"use strict";var kk=ae(),Ak=No(),Rk=Lo(),Ca=ve(),Np=wa(),Pk=TypeError,Do=Object.defineProperty,Nk=Object.getOwnPropertyDescriptor,jo="enumerable",Fo="configurable",$o="writable";Mp.f=kk?Rk?function(r,t,n){if(Ca(r),t=Np(t),Ca(n),typeof r=="function"&&t==="prototype"&&"value"in n&&$o in n&&!n[$o]){var a=Nk(r,t);a&&a[$o]&&(r[t]=n.value,n={configurable:Fo in n?n[Fo]:a[Fo],enumerable:jo in n?n[jo]:a[jo],writable:!1})}return Do(r,t,n)}:Do:function(r,t,n){if(Ca(r),t=Np(t),Ca(n),Ak)try{return Do(r,t,n)}catch{}if("get"in n||"set"in n)throw new Pk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ye=i(($6,Lp)=>{"use strict";var Mk=ae(),Lk=Se(),Dk=Sr();Lp.exports=Mk?function(e,r,t){return Lk.f(e,r,Dk(1,t))}:function(e,r,t){return e[r]=t,e}});var S=i((B6,jp)=>{"use strict";var en=D(),jk=mt(),Fk=Xt(),$k=U(),Bk=Qt().f,Uk=Mo(),xt=le(),Gk=fe(),St=Ye(),Dp=oe();Jt();var Hk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return jk(e,this,arguments)};return r.prototype=e.prototype,r};jp.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,s=n?en:a?en[t]:en[t]&&en[t].prototype,c=n?xt:xt[t]||St(xt,t,{})[t],u=c.prototype,l,f,p,v,m,y,h,w,b;for(v in r)l=Uk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&s&&Dp(s,v),y=c[v],f&&(e.dontCallGetSet?(b=Bk(s,v),h=b&&b.value):h=s[v]),m=f&&h?h:r[v],!(!l&&!o&&typeof y==typeof m)&&(e.bind&&f?w=Gk(m,en):e.wrap&&f?w=Hk(m):o&&$k(m)?w=Fk(m):w=m,(e.sham||m&&m.sham||y&&y.sham)&&St(w,"sham",!0),St(c,v,w),o&&(p=t+"Prototype",Dp(xt,p)||St(xt,p,{}),St(xt[p],v,m),e.real&&u&&(l||!u[v])&&St(u,v,m)))}});var sr=i((U6,Fp)=>{"use strict";var Wk=Ve();Fp.exports=Array.isArray||function(r){return Wk(r)==="Array"}});var Oa=i((G6,Bp)=>{"use strict";var zk=j(),Kk=zk("toStringTag"),$p={};$p[Kk]="z";Bp.exports=String($p)==="[object z]"});var rn=i((H6,Up)=>{"use strict";var Vk=Oa(),Yk=U(),_a=Ve(),Xk=j(),Jk=Xk("toStringTag"),Qk=Object,Zk=_a(function(){return arguments}())==="Arguments",eA=function(e,r){try{return e[r]}catch{}};Up.exports=Vk?_a:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=eA(r=Qk(e),Jk))=="string"?t:Zk?_a(r):(n=_a(r))==="Object"&&Yk(r.callee)?"Arguments":n}});var Uo=i((W6,Gp)=>{"use strict";var rA=B(),tA=U(),Bo=Jt(),nA=rA(Function.toString);tA(Bo.inspectSource)||(Bo.inspectSource=function(e){return nA(e)});Gp.exports=Bo.inspectSource});var nn=i((z6,Vp)=>{"use strict";var aA=B(),iA=L(),Hp=U(),oA=rn(),sA=ie(),uA=Uo(),Wp=function(){},zp=sA("Reflect","construct"),Go=/^\s*(?:class|function)\b/,cA=aA(Go.exec),lA=!Go.test(Wp),tn=function(r){if(!Hp(r))return!1;try{return zp(Wp,[],r),!0}catch{return!1}},Kp=function(r){if(!Hp(r))return!1;switch(oA(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return lA||!!cA(Go,uA(r))}catch{return!0}};Kp.sham=!0;Vp.exports=!zp||iA(function(){var e;return tn(tn.call)||!tn(Object)||!tn(function(){e=!0})||e})?Kp:tn});var Xp=i((K6,Yp)=>{"use strict";var fA=Math.ceil,pA=Math.floor;Yp.exports=Math.trunc||function(r){var t=+r;return(t>0?pA:fA)(t)}});var Ia=i((V6,Jp)=>{"use strict";var dA=Xp();Jp.exports=function(e){var r=+e;return r!==r||r===0?0:dA(r)}});var Ho=i((Y6,Qp)=>{"use strict";var vA=Ia(),mA=Math.max,hA=Math.min;Qp.exports=function(e,r){var t=vA(e);return t<0?mA(t+r,0):hA(t,r)}});var Wo=i((X6,Zp)=>{"use strict";var yA=Ia(),gA=Math.min;Zp.exports=function(e){var r=yA(e);return r>0?gA(r,9007199254740991):0}});var Pe=i((J6,ed)=>{"use strict";var bA=Wo();ed.exports=function(e){return bA(e.length)}});var Et=i((Q6,rd)=>{"use strict";var qA=ae(),xA=Se(),SA=Sr();rd.exports=function(e,r,t){qA?xA.f(e,r,SA(0,t)):e[r]=t}});var wt=i((Z6,td)=>{"use strict";var EA=ae(),wA=sr(),TA=TypeError,CA=Object.getOwnPropertyDescriptor,OA=EA&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();td.exports=OA?function(e,r){if(wA(e)&&!CA(e,"length").writable)throw new TA("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var an=i((ez,nd)=>{"use strict";var _A=L(),IA=j(),kA=yt(),AA=IA("species");nd.exports=function(e){return kA>=51||!_A(function(){var r=[],t=r.constructor={};return t[AA]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var Br=i((rz,ad)=>{"use strict";var RA=B();ad.exports=RA([].slice)});var sd=i(()=>{"use strict";var PA=S(),id=sr(),NA=nn(),MA=W(),od=Ho(),LA=Pe(),DA=or(),jA=Et(),FA=wt(),$A=j(),BA=an(),UA=Br(),GA=BA("slice"),HA=$A("species"),zo=Array,WA=Math.max;PA({target:"Array",proto:!0,forced:!GA},{slice:function(r,t){var n=DA(this),a=LA(n),o=od(r,a),s=od(t===void 0?a:t,a),c,u,l;if(id(n)&&(c=n.constructor,NA(c)&&(c===zo||id(c.prototype))?c=void 0:MA(c)&&(c=c[HA],c===null&&(c=void 0)),c===zo||c===void 0))return UA(n,o,s);for(u=new(c===void 0?zo:c)(WA(s-o,0)),l=0;o<s;o++,l++)o in n&&jA(u,l,n[o]);return FA(u,l),u}})});var Oe=i((az,ud)=>{"use strict";var zA=D(),KA=le();ud.exports=function(e,r){var t=KA[e+"Prototype"],n=t&&t[r];if(n)return n;var a=zA[e],o=a&&a.prototype;return o&&o[r]}});var ld=i((iz,cd)=>{"use strict";sd();var VA=Oe();cd.exports=VA("Array","slice")});var pd=i((oz,fd)=>{"use strict";var YA=ne(),XA=ld(),Ko=Array.prototype;fd.exports=function(e){var r=e.slice;return e===Ko||YA(Ko,e)&&r===Ko.slice?XA:r}});var vd=i((sz,dd)=>{"use strict";var JA=pd();dd.exports=JA});var hd=i((uz,md)=>{"use strict";var QA=vd();md.exports=QA});var gd=i((cz,yd)=>{"use strict";var ZA=hd();yd.exports=ZA});var Vo=i((lz,bd)=>{"use strict";bd.exports=gd()});var Tt=i((fz,qd)=>{qd.exports=Vo()});var wr=i((pz,xd)=>{"use strict";var e1=rn(),r1=String;xd.exports=function(e){if(e1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return r1(e)}});var Td=i((dz,wd)=>{"use strict";var Yo=B(),t1=Ia(),n1=wr(),a1=jr(),i1=Yo("".charAt),Sd=Yo("".charCodeAt),o1=Yo("".slice),Ed=function(e){return function(r,t){var n=n1(a1(r)),a=t1(t),o=n.length,s,c;return a<0||a>=o?e?"":void 0:(s=Sd(n,a),s<55296||s>56319||a+1===o||(c=Sd(n,a+1))<56320||c>57343?e?i1(n,a):s:e?o1(n,a,a+2):(s-55296<<10)+(c-56320)+65536)}};wd.exports={codeAt:Ed(!1),charAt:Ed(!0)}});var _d=i((vz,Od)=>{"use strict";var s1=D(),u1=U(),Cd=s1.WeakMap;Od.exports=u1(Cd)&&/native code/.test(String(Cd))});var on=i((mz,kd)=>{"use strict";var c1=$r(),l1=bt(),Id=c1("keys");kd.exports=function(e){return Id[e]||(Id[e]=l1(e))}});var Ct=i((hz,Ad)=>{"use strict";Ad.exports={}});var Tr=i((yz,Nd)=>{"use strict";var f1=_d(),Pd=D(),p1=W(),d1=Ye(),Xo=oe(),Jo=Jt(),v1=on(),m1=Ct(),Rd="Object already initialized",Qo=Pd.TypeError,h1=Pd.WeakMap,ka,sn,Aa,y1=function(e){return Aa(e)?sn(e):ka(e,{})},g1=function(e){return function(r){var t;if(!p1(r)||(t=sn(r)).type!==e)throw new Qo("Incompatible receiver, "+e+" required");return t}};f1||Jo.state?(Be=Jo.state||(Jo.state=new h1),Be.get=Be.get,Be.has=Be.has,Be.set=Be.set,ka=function(e,r){if(Be.has(e))throw new Qo(Rd);return r.facade=e,Be.set(e,r),r},sn=function(e){return Be.get(e)||{}},Aa=function(e){return Be.has(e)}):(Ur=v1("state"),m1[Ur]=!0,ka=function(e,r){if(Xo(e,Ur))throw new Qo(Rd);return r.facade=e,d1(e,Ur,r),r},sn=function(e){return Xo(e,Ur)?e[Ur]:{}},Aa=function(e){return Xo(e,Ur)});var Be,Ur;Nd.exports={set:ka,get:sn,has:Aa,enforce:y1,getterFor:g1}});var Dd=i((gz,Ld)=>{"use strict";var Zo=ae(),b1=oe(),Md=Function.prototype,q1=Zo&&Object.getOwnPropertyDescriptor,es=b1(Md,"name"),x1=es&&function(){}.name==="something",S1=es&&(!Zo||Zo&&q1(Md,"name").configurable);Ld.exports={EXISTS:es,PROPER:x1,CONFIGURABLE:S1}});var rs=i((bz,Fd)=>{"use strict";var E1=or(),w1=Ho(),T1=Pe(),jd=function(e){return function(r,t,n){var a=E1(r),o=T1(a);if(o===0)return!e&&-1;var s=w1(n,o),c;if(e&&t!==t){for(;o>s;)if(c=a[s++],c!==c)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===t)return e||s||0;return!e&&-1}};Fd.exports={includes:jd(!0),indexOf:jd(!1)}});var ns=i((qz,Bd)=>{"use strict";var C1=B(),ts=oe(),O1=or(),_1=rs().indexOf,I1=Ct(),$d=C1([].push);Bd.exports=function(e,r){var t=O1(e),n=0,a=[],o;for(o in t)!ts(I1,o)&&ts(t,o)&&$d(a,o);for(;r.length>n;)ts(t,o=r[n++])&&(~_1(a,o)||$d(a,o));return a}});var Ra=i((xz,Ud)=>{"use strict";Ud.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pa=i((Sz,Gd)=>{"use strict";var k1=ns(),A1=Ra();Gd.exports=Object.keys||function(r){return k1(r,A1)}});var as=i(Hd=>{"use strict";var R1=ae(),P1=Lo(),N1=Se(),M1=ve(),L1=or(),D1=Pa();Hd.f=R1&&!P1?Object.defineProperties:function(r,t){M1(r);for(var n=L1(t),a=D1(t),o=a.length,s=0,c;o>s;)N1.f(r,c=a[s++],n[c]);return r}});var is=i((wz,Wd)=>{"use strict";var j1=ie();Wd.exports=j1("document","documentElement")});var Cr=i((Tz,Qd)=>{"use strict";var F1=ve(),$1=as(),zd=Ra(),B1=Ct(),U1=is(),G1=Ta(),H1=on(),Kd=">",Vd="<",ss="prototype",us="script",Xd=H1("IE_PROTO"),os=function(){},Jd=function(e){return Vd+us+Kd+e+Vd+"/"+us+Kd},Yd=function(e){e.write(Jd("")),e.close();var r=e.parentWindow.Object;return e=null,r},W1=function(){var e=G1("iframe"),r="java"+us+":",t;return e.style.display="none",U1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Jd("document.F=Object")),t.close(),t.F},Na,Ma=function(){try{Na=new ActiveXObject("htmlfile")}catch{}Ma=typeof document<"u"?document.domain&&Na?Yd(Na):W1():Yd(Na);for(var e=zd.length;e--;)delete Ma[ss][zd[e]];return Ma()};B1[Xd]=!0;Qd.exports=Object.create||function(r,t){var n;return r!==null?(os[ss]=F1(r),n=new os,os[ss]=null,n[Xd]=r):n=Ma(),t===void 0?n:$1.f(n,t)}});var cs=i((Cz,Zd)=>{"use strict";var z1=L();Zd.exports=!z1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var un=i((Oz,rv)=>{"use strict";var K1=oe(),V1=U(),Y1=xe(),X1=on(),J1=cs(),ev=X1("IE_PROTO"),ls=Object,Q1=ls.prototype;rv.exports=J1?ls.getPrototypeOf:function(e){var r=Y1(e);if(K1(r,ev))return r[ev];var t=r.constructor;return V1(t)&&r instanceof t?t.prototype:r instanceof ls?Q1:null}});var ur=i((_z,tv)=>{"use strict";var Z1=Ye();tv.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:Z1(e,r,t),e}});var vs=i((Iz,iv)=>{"use strict";var eR=L(),rR=U(),tR=W(),nR=Cr(),nv=un(),aR=ur(),iR=j(),oR=me(),ds=iR("iterator"),av=!1,cr,fs,ps;[].keys&&(ps=[].keys(),"next"in ps?(fs=nv(nv(ps)),fs!==Object.prototype&&(cr=fs)):av=!0);var sR=!tR(cr)||eR(function(){var e={};return cr[ds].call(e)!==e});sR?cr={}:oR&&(cr=nR(cr));rR(cr[ds])||aR(cr,ds,function(){return this});iv.exports={IteratorPrototype:cr,BUGGY_SAFARI_ITERATORS:av}});var sv=i((kz,ov)=>{"use strict";var uR=Oa(),cR=rn();ov.exports=uR?{}.toString:function(){return"[object "+cR(this)+"]"}});var lr=i((Az,cv)=>{"use strict";var lR=Oa(),fR=Se().f,pR=Ye(),dR=oe(),vR=sv(),mR=j(),uv=mR("toStringTag");cv.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(dR(a,uv)||fR(a,uv,{configurable:!0,value:r}),n&&!lR&&pR(a,"toString",vR))}});var Gr=i((Rz,lv)=>{"use strict";lv.exports={}});var pv=i((Pz,fv)=>{"use strict";var hR=vs().IteratorPrototype,yR=Cr(),gR=Sr(),bR=lr(),qR=Gr(),xR=function(){return this};fv.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=yR(hR,{next:gR(+!n,t)}),bR(e,a,!1,!0),qR[a]=xR,e}});var vv=i((Nz,dv)=>{"use strict";var SR=B(),ER=K();dv.exports=function(e,r,t){try{return SR(ER(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var hv=i((Mz,mv)=>{"use strict";var wR=W();mv.exports=function(e){return wR(e)||e===null}});var gv=i((Lz,yv)=>{"use strict";var TR=hv(),CR=String,OR=TypeError;yv.exports=function(e){if(TR(e))return e;throw new OR("Can't set "+CR(e)+" as a prototype")}});var cn=i((Dz,bv)=>{"use strict";var _R=vv(),IR=W(),kR=jr(),AR=gv();bv.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=_R(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return kR(a),AR(o),IR(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var ja=i((jz,Iv)=>{"use strict";var RR=S(),PR=Q(),La=me(),Ov=Dd(),NR=U(),MR=pv(),qv=un(),xv=cn(),LR=lr(),DR=Ye(),ms=ur(),jR=j(),Sv=Gr(),_v=vs(),FR=Ov.PROPER,$R=Ov.CONFIGURABLE,Ev=_v.IteratorPrototype,Da=_v.BUGGY_SAFARI_ITERATORS,ln=jR("iterator"),wv="keys",fn="values",Tv="entries",Cv=function(){return this};Iv.exports=function(e,r,t,n,a,o,s){MR(t,r,n);var c=function(b){if(b===a&&v)return v;if(!Da&&b&&b in f)return f[b];switch(b){case wv:return function(){return new t(this,b)};case fn:return function(){return new t(this,b)};case Tv:return function(){return new t(this,b)}}return function(){return new t(this)}},u=r+" Iterator",l=!1,f=e.prototype,p=f[ln]||f["@@iterator"]||a&&f[a],v=!Da&&p||c(a),m=r==="Array"&&f.entries||p,y,h,w;if(m&&(y=qv(m.call(new e)),y!==Object.prototype&&y.next&&(!La&&qv(y)!==Ev&&(xv?xv(y,Ev):NR(y[ln])||ms(y,ln,Cv)),LR(y,u,!0,!0),La&&(Sv[u]=Cv))),FR&&a===fn&&p&&p.name!==fn&&(!La&&$R?DR(f,"name",fn):(l=!0,v=function(){return PR(p,this)})),a)if(h={values:c(fn),keys:o?v:c(wv),entries:c(Tv)},s)for(w in h)(Da||l||!(w in f))&&ms(f,w,h[w]);else RR({target:r,proto:!0,forced:Da||l},h);return(!La||s)&&f[ln]!==v&&ms(f,ln,v,{name:a}),Sv[r]=v,h}});var Fa=i((Fz,kv)=>{"use strict";kv.exports=function(e,r){return{value:e,done:r}}});var Hr=i(()=>{"use strict";var BR=Td().charAt,UR=wr(),Rv=Tr(),GR=ja(),Av=Fa(),Pv="String Iterator",HR=Rv.set,WR=Rv.getterFor(Pv);GR(String,"String",function(e){HR(this,{type:Pv,string:UR(e),index:0})},function(){var r=WR(this),t=r.string,n=r.index,a;return n>=t.length?Av(void 0,!0):(a=BR(t,n),r.index+=a.length,Av(a,!1))})});var hs=i((Uz,Mv)=>{"use strict";var zR=Q(),Nv=ve(),KR=Ea();Mv.exports=function(e,r,t){var n,a;Nv(e);try{if(n=KR(e,"return"),!n){if(r==="throw")throw t;return t}n=zR(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Nv(n),t}});var Dv=i((Gz,Lv)=>{"use strict";var VR=ve(),YR=hs();Lv.exports=function(e,r,t,n){try{return n?r(VR(t)[0],t[1]):r(t)}catch(a){YR(e,"throw",a)}}});var ys=i((Hz,jv)=>{"use strict";var XR=j(),JR=Gr(),QR=XR("iterator"),ZR=Array.prototype;jv.exports=function(e){return e!==void 0&&(JR.Array===e||ZR[QR]===e)}});var pn=i((Wz,$v)=>{"use strict";var eP=rn(),Fv=Ea(),rP=Dr(),tP=Gr(),nP=j(),aP=nP("iterator");$v.exports=function(e){if(!rP(e))return Fv(e,aP)||Fv(e,"@@iterator")||tP[eP(e)]}});var $a=i((zz,Bv)=>{"use strict";var iP=Q(),oP=K(),sP=ve(),uP=Er(),cP=pn(),lP=TypeError;Bv.exports=function(e,r){var t=arguments.length<2?cP(e):r;if(oP(t))return sP(iP(t,e));throw new lP(uP(e)+" is not iterable")}});var Wv=i((Kz,Hv)=>{"use strict";var fP=fe(),pP=Q(),dP=xe(),vP=Dv(),mP=ys(),hP=nn(),yP=Pe(),Uv=Et(),gP=wt(),bP=$a(),qP=pn(),Gv=Array;Hv.exports=function(r){var t=dP(r),n=hP(this),a=arguments.length,o=a>1?arguments[1]:void 0,s=o!==void 0;s&&(o=fP(o,a>2?arguments[2]:void 0));var c=qP(t),u=0,l,f,p,v,m,y;if(c&&!(this===Gv&&mP(c)))for(f=n?new this:[],v=bP(t,c),m=v.next;!(p=pP(m,v)).done;u++)y=s?vP(v,o,[p.value,u],!0):p.value,Uv(f,u,y);else for(l=yP(t),f=n?new this(l):Gv(l);l>u;u++)y=s?o(t[u],u):t[u],Uv(f,u,y);return gP(f,u),f}});var bs=i((Vz,Yv)=>{"use strict";var xP=j(),Kv=xP("iterator"),Vv=!1;try{zv=0,gs={next:function(){return{done:!!zv++}},return:function(){Vv=!0}},gs[Kv]=function(){return this},Array.from(gs,function(){throw 2})}catch{}var zv,gs;Yv.exports=function(e,r){try{if(!r&&!Vv)return!1}catch{return!1}var t=!1;try{var n={};n[Kv]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Xv=i(()=>{"use strict";var SP=S(),EP=Wv(),wP=bs(),TP=!wP(function(e){Array.from(e)});SP({target:"Array",stat:!0,forced:TP},{from:EP})});var Qv=i((Jz,Jv)=>{"use strict";Hr();Xv();var CP=le();Jv.exports=CP.Array.from});var em=i((Qz,Zv)=>{"use strict";var OP=Qv();Zv.exports=OP});var tm=i((Zz,rm)=>{"use strict";var _P=em();rm.exports=_P});var am=i((e8,nm)=>{"use strict";var IP=tm();nm.exports=IP});var qs=i((r8,im)=>{"use strict";im.exports=am()});var Ba=i((t8,om)=>{om.exports=qs()});var dn=i((n8,sm)=>{"use strict";var kP=TypeError,AP=9007199254740991;sm.exports=function(e){if(e>AP)throw kP("Maximum allowed index exceeded");return e}});var fm=i((a8,lm)=>{"use strict";var um=sr(),RP=nn(),PP=W(),NP=j(),MP=NP("species"),cm=Array;lm.exports=function(e){var r;return um(e)&&(r=e.constructor,RP(r)&&(r===cm||um(r.prototype))?r=void 0:PP(r)&&(r=r[MP],r===null&&(r=void 0))),r===void 0?cm:r}});var Ua=i((i8,pm)=>{"use strict";var LP=fm();pm.exports=function(e,r){return new(LP(e))(r===0?0:r)}});var xs=i(()=>{"use strict";var DP=S(),jP=L(),FP=sr(),$P=W(),BP=xe(),UP=Pe(),dm=dn(),vm=Et(),GP=wt(),HP=Ua(),WP=an(),zP=j(),KP=yt(),mm=zP("isConcatSpreadable"),VP=KP>=51||!jP(function(){var e=[];return e[mm]=!1,e.concat()[0]!==e}),YP=function(e){if(!$P(e))return!1;var r=e[mm];return r!==void 0?!!r:FP(e)},XP=!VP||!WP("concat");DP({target:"Array",proto:!0,arity:1,forced:XP},{concat:function(r){var t=BP(this),n=HP(t,0),a=0,o,s,c,u,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],YP(l))for(u=UP(l),dm(a+u),s=0;s<u;s++,a++)s in l&&vm(n,a,l[s]);else dm(a+1),vm(n,a++,l);return GP(n,a),n}})});var vn=i(()=>{});var mn=i(hm=>{"use strict";var JP=ns(),QP=Ra(),ZP=QP.concat("length","prototype");hm.f=Object.getOwnPropertyNames||function(r){return JP(r,ZP)}});var Ss=i((f8,bm)=>{"use strict";var eN=Ve(),rN=or(),ym=mn().f,tN=Br(),gm=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],nN=function(e){try{return ym(e)}catch{return tN(gm)}};bm.exports.f=function(r){return gm&&eN(r)==="Window"?nN(r):ym(rN(r))}});var Ga=i(qm=>{"use strict";qm.f=Object.getOwnPropertySymbols});var Ha=i((d8,xm)=>{"use strict";var aN=Se();xm.exports=function(e,r,t){return aN.f(e,r,t)}});var Ot=i(Sm=>{"use strict";var iN=j();Sm.f=iN});var G=i((m8,wm)=>{"use strict";var Em=le(),oN=oe(),sN=Ot(),uN=Se().f;wm.exports=function(e){var r=Em.Symbol||(Em.Symbol={});oN(r,e)||uN(r,e,{value:sN.f(e)})}});var Es=i((h8,Tm)=>{"use strict";var cN=Q(),lN=ie(),fN=j(),pN=ur();Tm.exports=function(){var e=lN("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=fN("toPrimitive");r&&!r[n]&&pN(r,n,function(a){return cN(t,this)},{arity:1})}});var hn=i((y8,Om)=>{"use strict";var dN=fe(),vN=xa(),mN=xe(),hN=Pe(),Cm=Ua(),ws=Et(),Or=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,s=e===7,c=e===5||o;return function(u,l,f){for(var p=mN(u),v=vN(p),m=hN(v),y=dN(l,f),h=0,w=0,b=r?Cm(u,m):t||s?Cm(u,0):void 0,x,A;m>h;h++)if((c||h in v)&&(x=v[h],A=y(x,h,p),e))if(r)ws(b,h,A);else if(A)switch(e){case 3:return!0;case 5:return x;case 6:return h;case 2:ws(b,w++,x)}else switch(e){case 4:return!1;case 7:ws(b,w++,x)}return o?-1:n||a?a:b}};Om.exports={forEach:Or(0),map:Or(1),filter:Or(2),some:Or(3),every:Or(4),find:Or(5),findIndex:Or(6),filterReject:Or(7)}});var Hm=i(()=>{"use strict";var Wa=S(),bn=D(),Ps=Q(),yN=B(),gN=me(),_t=ae(),It=Fr(),bN=L(),se=oe(),qN=ne(),_s=ve(),za=or(),Ns=wa(),xN=wr(),Is=Sr(),kt=Cr(),km=Pa(),SN=mn(),Am=Ss(),EN=Ga(),Rm=Qt(),Pm=Se(),wN=as(),Nm=Eo(),Ts=ur(),TN=Ha(),Ms=$r(),CN=on(),Mm=Ct(),_m=bt(),ON=j(),_N=Ot(),IN=G(),kN=Es(),AN=lr(),Lm=Tr(),Ka=hn().forEach,Ee=CN("hidden"),Va="Symbol",gn="prototype",RN=Lm.set,Im=Lm.getterFor(Va),Ne=Object[gn],Wr=bn.Symbol,yn=Wr&&Wr[gn],PN=bn.RangeError,NN=bn.TypeError,Cs=bn.QObject,Dm=Rm.f,zr=Pm.f,jm=Am.f,MN=Nm.f,Fm=yN([].push),fr=Ms("symbols"),qn=Ms("op-symbols"),LN=Ms("wks"),ks=!Cs||!Cs[gn]||!Cs[gn].findChild,$m=function(e,r,t){var n=Dm(Ne,r);n&&delete Ne[r],zr(e,r,t),n&&e!==Ne&&zr(Ne,r,n)},As=_t&&bN(function(){return kt(zr({},"a",{get:function(){return zr(this,"a",{value:7}).a}})).a!==7})?$m:zr,Os=function(e,r){var t=fr[e]=kt(yn);return RN(t,{type:Va,tag:e,description:r}),_t||(t.description=r),t},Ya=function(r,t,n){r===Ne&&Ya(qn,t,n),_s(r);var a=Ns(t);return _s(n),se(fr,a)?(n.enumerable?(se(r,Ee)&&r[Ee][a]&&(r[Ee][a]=!1),n=kt(n,{enumerable:Is(0,!1)})):(se(r,Ee)||zr(r,Ee,Is(1,kt(null))),r[Ee][a]=!0),As(r,a,n)):zr(r,a,n)},Ls=function(r,t){_s(r);var n=za(t),a=km(n).concat(Gm(n));return Ka(a,function(o){(!_t||Ps(Rs,n,o))&&Ya(r,o,n[o])}),r},DN=function(r,t){return t===void 0?kt(r):Ls(kt(r),t)},Rs=function(r){var t=Ns(r),n=Ps(MN,this,t);return this===Ne&&se(fr,t)&&!se(qn,t)?!1:n||!se(this,t)||!se(fr,t)||se(this,Ee)&&this[Ee][t]?n:!0},Bm=function(r,t){var n=za(r),a=Ns(t);if(!(n===Ne&&se(fr,a)&&!se(qn,a))){var o=Dm(n,a);return o&&se(fr,a)&&!(se(n,Ee)&&n[Ee][a])&&(o.enumerable=!0),o}},Um=function(r){var t=jm(za(r)),n=[];return Ka(t,function(a){!se(fr,a)&&!se(Mm,a)&&Fm(n,a)}),n},Gm=function(e){var r=e===Ne,t=jm(r?qn:za(e)),n=[];return Ka(t,function(a){se(fr,a)&&(!r||se(Ne,a))&&Fm(n,fr[a])}),n};It||(Wr=function(){if(qN(yn,this))throw new NN("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:xN(arguments[0]),t=_m(r),n=function(a){var o=this===void 0?bn:this;o===Ne&&Ps(n,qn,a),se(o,Ee)&&se(o[Ee],t)&&(o[Ee][t]=!1);var s=Is(1,a);try{As(o,t,s)}catch(c){if(!(c instanceof PN))throw c;$m(o,t,s)}};return _t&&ks&&As(Ne,t,{configurable:!0,set:n}),Os(t,r)},yn=Wr[gn],Ts(yn,"toString",function(){return Im(this).tag}),Ts(Wr,"withoutSetter",function(e){return Os(_m(e),e)}),Nm.f=Rs,Pm.f=Ya,wN.f=Ls,Rm.f=Bm,SN.f=Am.f=Um,EN.f=Gm,_N.f=function(e){return Os(ON(e),e)},_t&&(TN(yn,"description",{configurable:!0,get:function(){return Im(this).description}}),gN||Ts(Ne,"propertyIsEnumerable",Rs,{unsafe:!0})));Wa({global:!0,constructor:!0,wrap:!0,forced:!It,sham:!It},{Symbol:Wr});Ka(km(LN),function(e){IN(e)});Wa({target:Va,stat:!0,forced:!It},{useSetter:function(){ks=!0},useSimple:function(){ks=!1}});Wa({target:"Object",stat:!0,forced:!It,sham:!_t},{create:DN,defineProperty:Ya,defineProperties:Ls,getOwnPropertyDescriptor:Bm});Wa({target:"Object",stat:!0,forced:!It},{getOwnPropertyNames:Um});kN();AN(Wr,Va);Mm[Ee]=!0});var Ds=i((q8,Wm)=>{"use strict";var jN=Fr();Wm.exports=jN&&!!Symbol.for&&!!Symbol.keyFor});var Km=i(()=>{"use strict";var FN=S(),$N=ie(),BN=oe(),UN=wr(),zm=$r(),GN=Ds(),js=zm("string-to-symbol-registry"),HN=zm("symbol-to-string-registry");FN({target:"Symbol",stat:!0,forced:!GN},{for:function(e){var r=UN(e);if(BN(js,r))return js[r];var t=$N("Symbol")(r);return js[r]=t,HN[t]=r,t}})});var Ym=i(()=>{"use strict";var WN=S(),zN=oe(),KN=gt(),VN=Er(),YN=$r(),XN=Ds(),Vm=YN("symbol-to-string-registry");WN({target:"Symbol",stat:!0,forced:!XN},{keyFor:function(r){if(!KN(r))throw new TypeError(VN(r)+" is not a symbol");if(zN(Vm,r))return Vm[r]}})});var Jm=i((T8,Xm)=>{"use strict";var JN=W(),QN=Tr().get;Xm.exports=function(r){if(!JN(r))return!1;var t=QN(r);return!!t&&t.type==="RawJSON"}});var th=i((C8,rh)=>{"use strict";var Fs=B(),ZN=oe(),Xa=SyntaxError,eM=parseInt,rM=String.fromCharCode,tM=Fs("".charAt),Qm=Fs("".slice),Zm=Fs(/./.exec),eh={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},nM=/^[\da-f]{4}$/i,aM=/^[\u0000-\u001F]$/;rh.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=tM(e,r);if(a==="\\"){var o=Qm(e,r,r+2);if(ZN(eh,o))n+=eh[o],r+=2;else if(o==="\\u"){r+=2;var s=Qm(e,r,r+4);if(!Zm(nM,s))throw new Xa("Bad Unicode escape at: "+r);n+=rM(eM(s,16)),r+=4}else throw new Xa('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Zm(aM,a))throw new Xa("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Xa("Unterminated string at: "+r);return{value:n,end:r}}});var ah=i((O8,nh)=>{"use strict";var iM=L();nh.exports=!iM(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var gh=i(()=>{"use strict";var oM=S(),ph=ie(),sM=mt(),dh=Q(),Kr=B(),vh=L(),ih=sr(),Qa=U(),uM=Jm(),oh=gt(),sh=Ve(),cM=wr(),lM=Br(),fM=th(),pM=bt(),dM=Fr(),$s=ah(),mh=String,_r=ph("JSON","stringify"),Ja=Kr(/./.exec),Us=Kr("".charAt),vM=Kr("".charCodeAt),mM=Kr("".replace),Bs=Kr("".slice),Gs=Kr([].push),hM=Kr(1.1.toString),yM=/[\uD800-\uDFFF]/g,uh=/^[\uD800-\uDBFF]$/,ch=/^[\uDC00-\uDFFF]$/,Hs=pM(),lh=Hs.length,hh=!dM||vh(function(){var e=ph("Symbol")("stringify detection");return _r([e])!=="[null]"||_r({a:e})!=="{}"||_r(Object(e))!=="{}"}),fh=vh(function(){return _r("\uDF06\uD834")!=='"\\udf06\\ud834"'||_r("\uDEAD")!=='"\\udead"'}),gM=hh?function(e,r){var t=lM(arguments),n=yh(r);if(!(!Qa(n)&&(e===void 0||oh(e))))return t[1]=function(a,o){if(Qa(n)&&(o=dh(n,this,mh(a),o)),!oh(o))return o},sM(_r,null,t)}:_r,bM=function(e,r,t){var n=Us(t,r-1),a=Us(t,r+1);return Ja(uh,e)&&!Ja(ch,a)||Ja(ch,e)&&!Ja(uh,n)?"\\u"+hM(vM(e,0),16):e},yh=function(e){if(Qa(e))return e;if(ih(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Gs(t,a):(typeof a=="number"||sh(a)==="Number"||sh(a)==="String")&&Gs(t,cM(a))}var o=t.length,s=!0;return function(c,u){if(s)return s=!1,u;if(ih(this))return u;for(var l=0;l<o;l++)if(t[l]===c)return u}}};_r&&oM({target:"JSON",stat:!0,arity:3,forced:hh||fh||!$s},{stringify:function(r,t,n){var a=yh(t),o=[],s=gM(r,function(m,y){var h=Qa(a)?dh(a,this,mh(m),y):y;return!$s&&uM(h)?Hs+(Gs(o,h.rawJSON)-1):h},n);if(typeof s!="string"||(fh&&(s=mM(s,yM,bM)),$s))return s;for(var c="",u=s.length,l=0;l<u;l++){var f=Us(s,l);if(f==='"'){var p=fM(s,++l).end-1,v=Bs(s,l,p);c+=Bs(v,0,lh)===Hs?o[Bs(v,lh)]:'"'+v+'"',l=p}else c+=f}return c}})});var qh=i(()=>{"use strict";var qM=S(),xM=Fr(),SM=L(),bh=Ga(),EM=xe(),wM=!xM||SM(function(){bh.f(1)});qM({target:"Object",stat:!0,forced:wM},{getOwnPropertySymbols:function(r){var t=bh.f;return t?t(EM(r)):[]}})});var xh=i(()=>{"use strict";Hm();Km();Ym();gh();qh()});var Ws=i(()=>{"use strict";var TM=G();TM("asyncDispose")});var zs=i(()=>{"use strict";var CM=G();CM("asyncIterator")});var Sh=i(()=>{});var Ks=i(()=>{"use strict";var OM=G();OM("dispose")});var Eh=i(()=>{"use strict";var _M=G();_M("hasInstance")});var wh=i(()=>{"use strict";var IM=G();IM("isConcatSpreadable")});var Vs=i(()=>{"use strict";var kM=G();kM("iterator")});var Th=i(()=>{"use strict";var AM=G();AM("match")});var Ch=i(()=>{"use strict";var RM=G();RM("matchAll")});var Oh=i(()=>{"use strict";var PM=G();PM("replace")});var _h=i(()=>{"use strict";var NM=G();NM("search")});var Ih=i(()=>{"use strict";var MM=G();MM("species")});var kh=i(()=>{"use strict";var LM=G();LM("split")});var Ys=i(()=>{"use strict";var DM=G(),jM=Es();DM("toPrimitive");jM()});var Ah=i(()=>{"use strict";var FM=ie(),$M=G(),BM=lr();$M("toStringTag");BM(FM("Symbol"),"Symbol")});var Rh=i(()=>{"use strict";var UM=G();UM("unscopables")});var Ph=i(()=>{"use strict";var GM=D(),HM=lr();HM(GM.JSON,"JSON",!0)});var Nh=i(()=>{});var Mh=i(()=>{});var Dh=i((gK,Lh)=>{"use strict";xs();vn();xh();Ws();zs();Sh();Ks();Eh();wh();Vs();Th();Ch();Oh();_h();Ih();kh();Ys();Ah();Rh();Ph();Nh();Mh();var WM=le();Lh.exports=WM.Symbol});var Xs=i((bK,jh)=>{"use strict";jh.exports=function(){}});var Vr=i((qK,Gh)=>{"use strict";var zM=or(),Js=Xs(),Fh=Gr(),Bh=Tr(),KM=Se().f,VM=ja(),Za=Fa(),YM=me(),XM=ae(),Uh="Array Iterator",JM=Bh.set,QM=Bh.getterFor(Uh);Gh.exports=VM(Array,"Array",function(e,r){JM(this,{type:Uh,target:zM(e),index:0,kind:r})},function(){var e=QM(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Za(void 0,!0);switch(e.kind){case"keys":return Za(t,!1);case"values":return Za(r[t],!1)}return Za([t,r[t]],!1)},"values");var $h=Fh.Arguments=Fh.Array;Js("keys");Js("values");Js("entries");if(!YM&&XM&&$h.name!=="values")try{KM($h,"name",{value:"values"})}catch{}});var Wh=i((xK,Hh)=>{"use strict";Hh.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Yr=i(()=>{"use strict";Vr();var ZM=Wh(),e2=D(),r2=lr(),zh=Gr();for(ei in ZM)r2(e2[ei],ei),zh[ei]=zh.Array;var ei});var Vh=i((wK,Kh)=>{"use strict";var t2=Dh();Yr();Kh.exports=t2});var Jh=i(()=>{"use strict";var n2=j(),a2=Se().f,Yh=n2("metadata"),Xh=Function.prototype;Xh[Yh]===void 0&&a2(Xh,Yh,{value:null})});var Qh=i(()=>{"use strict";Ws()});var Zh=i(()=>{"use strict";Ks()});var ey=i(()=>{"use strict";var i2=G();i2("metadata")});var ty=i((PK,ry)=>{"use strict";var o2=Vh();Jh();Qh();Zh();ey();ry.exports=o2});var Zs=i((NK,ny)=>{"use strict";var s2=ie(),u2=B(),Qs=s2("Symbol"),c2=Qs.keyFor,l2=u2(Qs.prototype.valueOf);ny.exports=Qs.isRegisteredSymbol||function(r){try{return c2(l2(r))!==void 0}catch{return!1}}});var ay=i(()=>{"use strict";var f2=S(),p2=Zs();f2({target:"Symbol",stat:!0},{isRegisteredSymbol:p2})});var tu=i((DK,ly)=>{"use strict";var d2=$r(),uy=ie(),v2=B(),m2=gt(),h2=j(),ti=uy("Symbol"),iy=ti.isWellKnownSymbol,cy=uy("Object","getOwnPropertyNames"),y2=v2(ti.prototype.valueOf),oy=d2("wks");for(ri=0,eu=cy(ti),sy=eu.length;ri<sy;ri++)try{ru=eu[ri],m2(ti[ru])&&h2(ru)}catch{}var ru,ri,eu,sy;ly.exports=function(r){if(iy&&iy(r))return!0;try{for(var t=y2(r),n=0,a=cy(oy),o=a.length;n<o;n++)if(oy[a[n]]==t)return!0}catch{}return!1}});var fy=i(()=>{"use strict";var g2=S(),b2=tu();g2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:b2})});var py=i(()=>{"use strict";var q2=G();q2("customMatcher")});var dy=i(()=>{"use strict";var x2=G();x2("observable")});var vy=i(()=>{"use strict";var S2=S(),E2=Zs();S2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:E2})});var my=i(()=>{"use strict";var w2=S(),T2=tu();w2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:T2})});var hy=i(()=>{"use strict";var C2=G();C2("matcher")});var yy=i(()=>{"use strict";var O2=G();O2("metadataKey")});var gy=i(()=>{"use strict";var _2=G();_2("patternMatch")});var by=i(()=>{"use strict";var I2=G();I2("replaceAll")});var xy=i((tV,qy)=>{"use strict";var k2=ty();ay();fy();py();dy();vy();my();hy();yy();gy();by();qy.exports=k2});var Xe=i((nV,Sy)=>{"use strict";Sy.exports=xy()});var ni=i((aV,Ey)=>{Ey.exports=Xe()});var Ty=i((iV,wy)=>{"use strict";Vr();Hr();var A2=pn();wy.exports=A2});var Oy=i((oV,Cy)=>{"use strict";var R2=Ty();Yr();Cy.exports=R2});var Iy=i((sV,_y)=>{"use strict";var P2=Oy();_y.exports=P2});var Ay=i((uV,ky)=>{"use strict";var N2=Iy();ky.exports=N2});var nu=i((cV,Ry)=>{"use strict";Ry.exports=Ay()});var ai=i((lV,Py)=>{Py.exports=nu()});var My=i((fV,Ny)=>{"use strict";Vr();Hr();var M2=$a();Ny.exports=M2});var Dy=i((pV,Ly)=>{"use strict";var L2=My();Yr();Ly.exports=L2});var Fy=i((dV,jy)=>{"use strict";var D2=Dy();jy.exports=D2});var By=i((vV,$y)=>{"use strict";var j2=Fy();$y.exports=j2});var Gy=i((mV,Uy)=>{"use strict";Uy.exports=By()});var ii=i((hV,Hy)=>{Hy.exports=Gy()});var zy=i((yV,Wy)=>{"use strict";var F2=ie(),$2=B(),B2=mn(),U2=Ga(),G2=ve(),H2=$2([].concat);Wy.exports=F2("Reflect","ownKeys")||function(r){var t=B2.f(G2(r)),n=U2.f;return n?H2(t,n(r)):t}});var Yy=i((gV,Vy)=>{"use strict";var Ky=oe(),W2=zy(),z2=Qt(),K2=Se();Vy.exports=function(e,r,t){for(var n=W2(r),a=K2.f,o=z2.f,s=0;s<n.length;s++){var c=n[s];!Ky(e,c)&&!(t&&Ky(t,c))&&a(e,c,o(r,c))}}});var Jy=i((bV,Xy)=>{"use strict";var V2=W(),Y2=Ye();Xy.exports=function(e,r){V2(r)&&"cause"in r&&Y2(e,"cause",r.cause)}});var rg=i((qV,eg)=>{"use strict";var X2=B(),Qy=Error,J2=X2("".replace),Q2=function(e){return String(new Qy(e).stack)}("zxcasd"),Zy=/\n\s*at [^:]*:[^\n]*/,Z2=Zy.test(Q2);eg.exports=function(e,r){if(Z2&&typeof e=="string"&&!Qy.prepareStackTrace)for(;r--;)e=J2(e,Zy,"");return e}});var ng=i((xV,tg)=>{"use strict";var eL=L(),rL=Sr();tg.exports=!eL(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",rL(1,7)),e.stack!==7):!0})});var og=i((SV,ig)=>{"use strict";var tL=Ye(),nL=rg(),aL=ng(),ag=Error.captureStackTrace;ig.exports=function(e,r,t,n){aL&&(ag?ag(e,r):tL(e,"stack",nL(t,n)))}});var Me=i((EV,lg)=>{"use strict";var iL=fe(),oL=Q(),sL=ve(),uL=Er(),cL=ys(),lL=Pe(),sg=ne(),fL=$a(),pL=pn(),ug=hs(),dL=TypeError,oi=function(e,r){this.stopped=e,this.result=r},cg=oi.prototype;lg.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),s=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),u=iL(r,n),l,f,p,v,m,y,h,w=function(x){return l&&ug(l,"normal"),new oi(!0,x)},b=function(x){return a?(sL(x),c?u(x[0],x[1],w):u(x[0],x[1])):c?u(x,w):u(x)};if(o)l=e.iterator;else if(s)l=e;else{if(f=pL(e),!f)throw new dL(uL(e)+" is not iterable");if(cL(f)){for(p=0,v=lL(e);v>p;p++)if(m=b(e[p]),m&&sg(cg,m))return m;return new oi(!1)}l=fL(e,f)}for(y=o?e.next:l.next;!(h=oL(y,l)).done;){try{m=b(h.value)}catch(x){ug(l,"throw",x)}if(typeof m=="object"&&m&&sg(cg,m))return m}return new oi(!1)}});var pg=i((wV,fg)=>{"use strict";var vL=wr();fg.exports=function(e,r){return e===void 0?arguments.length<2?"":r:vL(e)}});var vg=i(()=>{"use strict";var mL=S(),hL=ne(),yL=un(),si=cn(),gL=Yy(),dg=Cr(),au=Ye(),iu=Sr(),bL=Jy(),qL=og(),xL=Me(),SL=pg(),EL=j(),wL=EL("toStringTag"),ui=Error,TL=[].push,At=function(r,t){var n=hL(ou,this),a;si?a=si(new ui,n?yL(this):ou):(a=n?this:dg(ou),au(a,wL,"Error")),t!==void 0&&au(a,"message",SL(t)),qL(a,At,a.stack,1),arguments.length>2&&bL(a,arguments[2]);var o=[];return xL(r,TL,{that:o}),au(a,"errors",o),a};si?si(At,ui):gL(At,ui,{name:!0});var ou=At.prototype=dg(ui.prototype,{constructor:iu(1,At),message:iu(1,""),name:iu(1,"AggregateError")});mL({global:!0,constructor:!0,arity:2},{AggregateError:At})});var su=i(()=>{"use strict";vg()});var uu=i((IV,mg)=>{"use strict";var xn=D(),CL=ht(),OL=Ve(),ci=function(e){return CL.slice(0,e.length)===e};mg.exports=function(){return ci("Bun/")?"BUN":ci("Cloudflare-Workers")?"CLOUDFLARE":ci("Deno/")?"DENO":ci("Node.js/")?"NODE":xn.Bun&&typeof Bun.version=="string"?"BUN":xn.Deno&&typeof Deno.version=="object"?"DENO":OL(xn.process)==="process"?"NODE":xn.window&&xn.document?"BROWSER":"REST"}()});var Sn=i((kV,hg)=>{"use strict";var _L=uu();hg.exports=_L==="NODE"});var cu=i((AV,gg)=>{"use strict";var IL=ie(),kL=Ha(),AL=j(),RL=ae(),yg=AL("species");gg.exports=function(e){var r=IL(e);RL&&r&&!r[yg]&&kL(r,yg,{configurable:!0,get:function(){return this}})}});var li=i((RV,bg)=>{"use strict";var PL=ne(),NL=TypeError;bg.exports=function(e,r){if(PL(r,e))return e;throw new NL("Incorrect invocation")}});var lu=i((PV,qg)=>{"use strict";var ML=nn(),LL=Er(),DL=TypeError;qg.exports=function(e){if(ML(e))return e;throw new DL(LL(e)+" is not a constructor")}});var fu=i((NV,Sg)=>{"use strict";var xg=ve(),jL=lu(),FL=Dr(),$L=j(),BL=$L("species");Sg.exports=function(e,r){var t=xg(e).constructor,n;return t===void 0||FL(n=xg(t)[BL])?r:jL(n)}});var wg=i((MV,Eg)=>{"use strict";var UL=TypeError;Eg.exports=function(e,r){if(e<r)throw new UL("Not enough arguments");return e}});var pu=i((LV,Tg)=>{"use strict";var GL=ht();Tg.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(GL)});var xu=i((DV,Ng)=>{"use strict";var _e=D(),HL=mt(),WL=fe(),Cg=U(),zL=oe(),Pg=L(),Og=is(),KL=Br(),_g=Ta(),VL=wg(),YL=pu(),XL=Sn(),gu=_e.setImmediate,bu=_e.clearImmediate,JL=_e.process,du=_e.Dispatch,QL=_e.Function,Ig=_e.MessageChannel,ZL=_e.String,vu=0,En={},kg="onreadystatechange",wn,Xr,mu,hu;Pg(function(){wn=_e.location});var qu=function(e){if(zL(En,e)){var r=En[e];delete En[e],r()}},yu=function(e){return function(){qu(e)}},Ag=function(e){qu(e.data)},Rg=function(e){_e.postMessage(ZL(e),wn.protocol+"//"+wn.host)};(!gu||!bu)&&(gu=function(r){VL(arguments.length,1);var t=Cg(r)?r:QL(r),n=KL(arguments,1);return En[++vu]=function(){HL(t,void 0,n)},Xr(vu),vu},bu=function(r){delete En[r]},XL?Xr=function(e){JL.nextTick(yu(e))}:du&&du.now?Xr=function(e){du.now(yu(e))}:Ig&&!YL?(mu=new Ig,hu=mu.port2,mu.port1.onmessage=Ag,Xr=WL(hu.postMessage,hu)):_e.addEventListener&&Cg(_e.postMessage)&&!_e.importScripts&&wn&&wn.protocol!=="file:"&&!Pg(Rg)?(Xr=Rg,_e.addEventListener("message",Ag,!1)):kg in _g("script")?Xr=function(e){Og.appendChild(_g("script"))[kg]=function(){Og.removeChild(this),qu(e)}}:Xr=function(e){setTimeout(yu(e),0)});Ng.exports={set:gu,clear:bu}});var Dg=i((jV,Lg)=>{"use strict";var Mg=D(),eD=ae(),rD=Object.getOwnPropertyDescriptor;Lg.exports=function(e){if(!eD)return Mg[e];var r=rD(Mg,e);return r&&r.value}});var Su=i((FV,Fg)=>{"use strict";var jg=function(){this.head=null,this.tail=null};jg.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Fg.exports=jg});var Bg=i(($V,$g)=>{"use strict";var tD=ht();$g.exports=/ipad|iphone|ipod/i.test(tD)&&typeof Pebble<"u"});var Gg=i((BV,Ug)=>{"use strict";var nD=ht();Ug.exports=/web0s(?!.*chrome)/i.test(nD)});var Xg=i((UV,Yg)=>{"use strict";var Pt=D(),aD=Dg(),Hg=fe(),Eu=xu().set,iD=Su(),oD=pu(),sD=Bg(),uD=Gg(),wu=Sn(),Wg=Pt.MutationObserver||Pt.WebKitMutationObserver,zg=Pt.document,Kg=Pt.process,fi=Pt.Promise,Ou=aD("queueMicrotask"),Rt,Tu,Cu,pi,Vg;Ou||(Tn=new iD,Cn=function(){var e,r;for(wu&&(e=Kg.domain)&&e.exit();r=Tn.get();)try{r()}catch(t){throw Tn.head&&Rt(),t}e&&e.enter()},!oD&&!wu&&!uD&&Wg&&zg?(Tu=!0,Cu=zg.createTextNode(""),new Wg(Cn).observe(Cu,{characterData:!0}),Rt=function(){Cu.data=Tu=!Tu}):!sD&&fi&&fi.resolve?(pi=fi.resolve(void 0),pi.constructor=fi,Vg=Hg(pi.then,pi),Rt=function(){Vg(Cn)}):wu?Rt=function(){Kg.nextTick(Cn)}:(Eu=Hg(Eu,Pt),Rt=function(){Eu(Cn)}),Ou=function(e){Tn.head||Rt(),Tn.add(e)});var Tn,Cn;Yg.exports=Ou});var Qg=i((GV,Jg)=>{"use strict";Jg.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Jr=i((HV,Zg)=>{"use strict";Zg.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Qr=i((WV,eb)=>{"use strict";var cD=D();eb.exports=cD.Promise});var Nt=i((zV,ab)=>{"use strict";var lD=D(),On=Qr(),fD=U(),pD=Mo(),dD=Uo(),vD=j(),rb=uu(),mD=me(),_u=yt(),tb=On&&On.prototype,hD=vD("species"),Iu=!1,nb=fD(lD.PromiseRejectionEvent),yD=pD("Promise",function(){var e=dD(On),r=e!==String(On);if(!r&&_u===66||mD&&!(tb.catch&&tb.finally))return!0;if(!_u||_u<51||!/native code/.test(e)){var t=new On(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[hD]=n,Iu=t.then(function(){})instanceof n,!Iu)return!0}return!r&&(rb==="BROWSER"||rb==="DENO")&&!nb});ab.exports={CONSTRUCTOR:yD,REJECTION_EVENT:nb,SUBCLASSING:Iu}});var Je=i((KV,ob)=>{"use strict";var ib=K(),gD=TypeError,bD=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new gD("Bad Promise constructor");r=n,t=a}),this.resolve=ib(r),this.reject=ib(t)};ob.exports.f=function(e){return new bD(e)}});var Cb=i(()=>{"use strict";var qD=S(),xD=me(),hi=Sn(),Ir=D(),SD=le(),jt=Q(),sb=ur(),ub=cn(),ED=lr(),wD=cu(),TD=K(),mi=U(),CD=W(),OD=li(),_D=fu(),db=xu().set,Nu=Xg(),ID=Qg(),kD=Jr(),AD=Su(),vb=Tr(),yi=Qr(),Mu=Nt(),mb=Je(),gi="Promise",hb=Mu.CONSTRUCTOR,RD=Mu.REJECTION_EVENT,PD=Mu.SUBCLASSING,ku=vb.getterFor(gi),ND=vb.set,Mt=yi&&yi.prototype,Zr=yi,di=Mt,yb=Ir.TypeError,Au=Ir.document,Lu=Ir.process,Ru=mb.f,MD=Ru,LD=!!(Au&&Au.createEvent&&Ir.dispatchEvent),gb="unhandledrejection",DD="rejectionhandled",cb=0,bb=1,jD=2,Du=1,qb=2,vi,lb,xb,fb,Sb=function(e){var r;return CD(e)&&mi(r=e.then)?r:!1},Eb=function(e,r){var t=r.value,n=r.state===bb,a=n?e.ok:e.fail,o=e.resolve,s=e.reject,c=e.domain,u,l,f;try{a?(n||(r.rejection===qb&&$D(r),r.rejection=Du),a===!0?u=t:(c&&c.enter(),u=a(t),c&&(c.exit(),f=!0)),u===e.promise?s(new yb("Promise-chain cycle")):(l=Sb(u))?jt(l,u,o,s):o(u)):s(t)}catch(p){c&&!f&&c.exit(),s(p)}},wb=function(e,r){e.notified||(e.notified=!0,Nu(function(){for(var t=e.reactions,n;n=t.get();)Eb(n,e);e.notified=!1,r&&!e.rejection&&FD(e)}))},Tb=function(e,r,t){var n,a;LD?(n=Au.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ir.dispatchEvent(n)):n={promise:r,reason:t},!RD&&(a=Ir["on"+e])?a(n):e===gb&&ID("Unhandled promise rejection",t)},FD=function(e){jt(db,Ir,function(){var r=e.facade,t=e.value,n=pb(e),a;if(n&&(a=kD(function(){hi?Lu.emit("unhandledRejection",t,r):Tb(gb,r,t)}),e.rejection=hi||pb(e)?qb:Du,a.error))throw a.value})},pb=function(e){return e.rejection!==Du&&!e.parent},$D=function(e){jt(db,Ir,function(){var r=e.facade;hi?Lu.emit("rejectionHandled",r):Tb(DD,r,e.value)})},Lt=function(e,r,t){return function(n){e(r,n,t)}},Dt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=jD,wb(e,!0))},Pu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new yb("Promise can't be resolved itself");var n=Sb(r);n?Nu(function(){var a={done:!1};try{jt(n,r,Lt(Pu,a,e),Lt(Dt,a,e))}catch(o){Dt(a,o,e)}}):(e.value=r,e.state=bb,wb(e,!1))}catch(a){Dt({done:!1},a,e)}}};if(hb&&(Zr=function(r){OD(this,di),TD(r),jt(vi,this);var t=ku(this);try{r(Lt(Pu,t),Lt(Dt,t))}catch(n){Dt(t,n)}},di=Zr.prototype,vi=function(r){ND(this,{type:gi,done:!1,notified:!1,parent:!1,reactions:new AD,rejection:!1,state:cb,value:null})},vi.prototype=sb(di,"then",function(r,t){var n=ku(this),a=Ru(_D(this,Zr));return n.parent=!0,a.ok=mi(r)?r:!0,a.fail=mi(t)&&t,a.domain=hi?Lu.domain:void 0,n.state===cb?n.reactions.add(a):Nu(function(){Eb(a,n)}),a.promise}),lb=function(){var e=new vi,r=ku(e);this.promise=e,this.resolve=Lt(Pu,r),this.reject=Lt(Dt,r)},mb.f=Ru=function(e){return e===Zr||e===xb?new lb(e):MD(e)},!xD&&mi(yi)&&Mt!==Object.prototype)){fb=Mt.then,PD||sb(Mt,"then",function(r,t){var n=this;return new Zr(function(a,o){jt(fb,n,a,o)}).then(r,t)},{unsafe:!0});try{delete Mt.constructor}catch{}ub&&ub(Mt,di)}qD({global:!0,constructor:!0,wrap:!0,forced:hb},{Promise:Zr});xb=SD.Promise;ED(Zr,gi,!1,!0);wD(gi)});var _n=i((XV,Ob)=>{"use strict";var BD=Qr(),UD=bs(),GD=Nt().CONSTRUCTOR;Ob.exports=GD||!UD(function(e){BD.all(e).then(void 0,function(){})})});var _b=i(()=>{"use strict";var HD=S(),WD=Q(),zD=K(),KD=Je(),VD=Jr(),YD=Me(),XD=_n();HD({target:"Promise",stat:!0,forced:XD},{all:function(r){var t=this,n=KD.f(t),a=n.resolve,o=n.reject,s=VD(function(){var c=zD(t.resolve),u=[],l=0,f=1;YD(r,function(p){var v=l++,m=!1;f++,WD(c,t,p).then(function(y){m||(m=!0,u[v]=y,--f||a(u))},o)}),--f||a(u)});return s.error&&o(s.value),n.promise}})});var kb=i(()=>{"use strict";var JD=S(),QD=me(),ZD=Nt().CONSTRUCTOR,Fu=Qr(),ej=ie(),rj=U(),tj=ur(),Ib=Fu&&Fu.prototype;JD({target:"Promise",proto:!0,forced:ZD,real:!0},{catch:function(e){return this.then(void 0,e)}});!QD&&rj(Fu)&&(ju=ej("Promise").prototype.catch,Ib.catch!==ju&&tj(Ib,"catch",ju,{unsafe:!0}));var ju});var Ab=i(()=>{"use strict";var nj=S(),aj=Q(),ij=K(),oj=Je(),sj=Jr(),uj=Me(),cj=_n();nj({target:"Promise",stat:!0,forced:cj},{race:function(r){var t=this,n=oj.f(t),a=n.reject,o=sj(function(){var s=ij(t.resolve);uj(r,function(c){aj(s,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Rb=i(()=>{"use strict";var lj=S(),fj=Je(),pj=Nt().CONSTRUCTOR;lj({target:"Promise",stat:!0,forced:pj},{reject:function(r){var t=fj.f(this),n=t.reject;return n(r),t.promise}})});var $u=i((i9,Pb)=>{"use strict";var dj=ve(),vj=W(),mj=Je();Pb.exports=function(e,r){if(dj(e),vj(r)&&r.constructor===e)return r;var t=mj.f(e),n=t.resolve;return n(r),t.promise}});var Lb=i(()=>{"use strict";var hj=S(),yj=ie(),Nb=me(),gj=Qr(),Mb=Nt().CONSTRUCTOR,bj=$u(),qj=yj("Promise"),xj=Nb&&!Mb;hj({target:"Promise",stat:!0,forced:Nb||Mb},{resolve:function(r){return bj(xj&&this===qj?gj:this,r)}})});var Db=i(()=>{"use strict";Cb();_b();kb();Ab();Rb();Lb()});var Bu=i(()=>{"use strict";var Sj=S(),Ej=Q(),wj=K(),Tj=Je(),Cj=Jr(),Oj=Me(),_j=_n();Sj({target:"Promise",stat:!0,forced:_j},{allSettled:function(r){var t=this,n=Tj.f(t),a=n.resolve,o=n.reject,s=Cj(function(){var c=wj(t.resolve),u=[],l=0,f=1;Oj(r,function(p){var v=l++,m=!1;f++,Ej(c,t,p).then(function(y){m||(m=!0,u[v]={status:"fulfilled",value:y},--f||a(u))},function(y){m||(m=!0,u[v]={status:"rejected",reason:y},--f||a(u))})}),--f||a(u)});return s.error&&o(s.value),n.promise}})});var Uu=i(()=>{"use strict";var Ij=S(),kj=Q(),Aj=K(),Rj=ie(),Pj=Je(),Nj=Jr(),Mj=Me(),Lj=_n(),jb="No one promise resolved";Ij({target:"Promise",stat:!0,forced:Lj},{any:function(r){var t=this,n=Rj("AggregateError"),a=Pj.f(t),o=a.resolve,s=a.reject,c=Nj(function(){var u=Aj(t.resolve),l=[],f=0,p=1,v=!1;Mj(r,function(m){var y=f++,h=!1;p++,kj(u,t,m).then(function(w){h||v||(v=!0,o(w))},function(w){h||v||(h=!0,l[y]=w,--p||s(new n(l,jb)))})}),--p||s(new n(l,jb))});return c.error&&s(c.value),a.promise}})});var Hu=i(()=>{"use strict";var Dj=S(),jj=D(),Fj=mt(),$j=Br(),Bj=Je(),Uj=K(),$b=Jr(),Gu=jj.Promise,Fb=!1,Gj=!Gu||!Gu.try||$b(function(){Gu.try(function(e){Fb=e===8},8)}).error||!Fb;Dj({target:"Promise",stat:!0,forced:Gj},{try:function(e){var r=arguments.length>1?$j(arguments,1):[],t=Bj.f(this),n=$b(function(){return Fj(Uj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Wu=i(()=>{"use strict";var Hj=S(),Wj=Je();Hj({target:"Promise",stat:!0},{withResolvers:function(){var r=Wj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Hb=i(()=>{"use strict";var zj=S(),Kj=me(),bi=Qr(),Vj=L(),Ub=ie(),Gb=U(),Yj=fu(),Bb=$u(),Xj=ur(),Ku=bi&&bi.prototype,Jj=!!bi&&Vj(function(){Ku.finally.call({then:function(){}},function(){})});zj({target:"Promise",proto:!0,real:!0,forced:Jj},{finally:function(e){var r=Yj(this,Ub("Promise")),t=Gb(e);return this.then(t?function(n){return Bb(r,e()).then(function(){return n})}:e,t?function(n){return Bb(r,e()).then(function(){throw n})}:e)}});!Kj&&Gb(bi)&&(zu=Ub("Promise").prototype.finally,Ku.finally!==zu&&Xj(Ku,"finally",zu,{unsafe:!0}));var zu});var zb=i((q9,Wb)=>{"use strict";su();Vr();vn();Db();Bu();Uu();Hu();Wu();Hb();Hr();var Qj=le();Wb.exports=Qj.Promise});var Vb=i((x9,Kb)=>{"use strict";var Zj=zb();Yr();Kb.exports=Zj});var Yb=i(()=>{"use strict";Hu()});var Xb=i(()=>{"use strict";Wu()});var Qb=i((C9,Jb)=>{"use strict";var eF=Vb();Yb();Xb();Jb.exports=eF});var Zb=i(()=>{"use strict";su()});var eq=i(()=>{"use strict";Bu()});var rq=i(()=>{"use strict";Uu()});var nq=i((P9,tq)=>{"use strict";var rF=Qb();Zb();eq();rq();tq.exports=rF});var Ft=i((N9,aq)=>{"use strict";aq.exports=nq()});var sq=i((F9,oq)=>{"use strict";zs();var tF=Ot();oq.exports=tF.f("asyncIterator")});var cq=i(($9,uq)=>{"use strict";var nF=sq();uq.exports=nF});var fq=i((B9,lq)=>{"use strict";var aF=cq();lq.exports=aF});var dq=i((U9,pq)=>{"use strict";var iF=fq();pq.exports=iF});var qi=i((G9,vq)=>{"use strict";vq.exports=dq()});var gq=i(()=>{"use strict";var oF=S(),sF=L(),uF=xe(),yq=un(),cF=cs(),lF=sF(function(){yq(1)});oF({target:"Object",stat:!0,forced:lF,sham:!cF},{getPrototypeOf:function(r){return yq(uF(r))}})});var qq=i((V9,bq)=>{"use strict";gq();var fF=le();bq.exports=fF.Object.getPrototypeOf});var Sq=i((Y9,xq)=>{"use strict";var pF=qq();xq.exports=pF});var wq=i((X9,Eq)=>{"use strict";var dF=Sq();Eq.exports=dF});var Cq=i((J9,Tq)=>{"use strict";var vF=wq();Tq.exports=vF});var xi=i((Q9,Oq)=>{"use strict";Oq.exports=Cq()});var Iq=i(()=>{"use strict";var mF=S(),hF=B(),yF=sr(),gF=hF([].reverse),_q=[1,2];mF({target:"Array",proto:!0,forced:String(_q)===String(_q.reverse())},{reverse:function(){return yF(this)&&(this.length=this.length),gF(this)}})});var Aq=i((r7,kq)=>{"use strict";Iq();var bF=Oe();kq.exports=bF("Array","reverse")});var Pq=i((t7,Rq)=>{"use strict";var qF=ne(),xF=Aq(),Xu=Array.prototype;Rq.exports=function(e){var r=e.reverse;return e===Xu||qF(Xu,e)&&r===Xu.reverse?xF:r}});var Mq=i((n7,Nq)=>{"use strict";var SF=Pq();Nq.exports=SF});var Dq=i((a7,Lq)=>{"use strict";var EF=Mq();Lq.exports=EF});var Fq=i((i7,jq)=>{"use strict";var wF=Dq();jq.exports=wF});var Bq=i((o7,$q)=>{"use strict";$q.exports=Fq()});var Ju=i((s7,An)=>{function TF(e,r){this.v=e,this.k=r}An.exports=TF,An.exports.__esModule=!0,An.exports.default=An.exports});var Uq=i(()=>{"use strict";var CF=S(),OF=ae(),_F=Cr();CF({target:"Object",stat:!0,sham:!OF},{create:_F})});var Hq=i((l7,Gq)=>{"use strict";Uq();var IF=le(),kF=IF.Object;Gq.exports=function(r,t){return kF.create(r,t)}});var zq=i((f7,Wq)=>{"use strict";var AF=Hq();Wq.exports=AF});var Vq=i((p7,Kq)=>{"use strict";var RF=zq();Kq.exports=RF});var Xq=i((d7,Yq)=>{"use strict";var PF=Vq();Yq.exports=PF});var Si=i((v7,Jq)=>{"use strict";Jq.exports=Xq()});var Zu=i((m7,rx)=>{"use strict";var Zq=B(),NF=K(),MF=W(),LF=oe(),Qq=Br(),DF=vt(),ex=Function,jF=Zq([].concat),FF=Zq([].join),Qu={},$F=function(e,r,t){if(!LF(Qu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Qu[r]=ex("C,a","return new C("+FF(n,",")+")")}return Qu[r](e,t)};rx.exports=DF?ex.bind:function(r){var t=NF(this),n=t.prototype,a=Qq(arguments,1),o=function(){var c=jF(a,Qq(arguments));return this instanceof o?$F(t,c.length,c):t.apply(r,c)};return MF(n)&&(o.prototype=n),o}});var nx=i(()=>{"use strict";var BF=S(),tx=Zu();BF({target:"Function",proto:!0,forced:Function.bind!==tx},{bind:tx})});var ix=i((g7,ax)=>{"use strict";nx();var UF=Oe();ax.exports=UF("Function","bind")});var sx=i((b7,ox)=>{"use strict";var GF=ne(),HF=ix(),ec=Function.prototype;ox.exports=function(e){var r=e.bind;return e===ec||GF(ec,e)&&r===ec.bind?HF:r}});var cx=i((q7,ux)=>{"use strict";var WF=sx();ux.exports=WF});var fx=i((x7,lx)=>{"use strict";var zF=cx();lx.exports=zF});var dx=i((S7,px)=>{"use strict";var KF=fx();px.exports=KF});var Rn=i((E7,vx)=>{"use strict";vx.exports=dx()});var mx=i(()=>{"use strict";var VF=S(),YF=cn();VF({target:"Object",stat:!0},{setPrototypeOf:YF})});var yx=i((C7,hx)=>{"use strict";mx();var XF=le();hx.exports=XF.Object.setPrototypeOf});var bx=i((O7,gx)=>{"use strict";var JF=yx();gx.exports=JF});var xx=i((_7,qx)=>{"use strict";var QF=bx();qx.exports=QF});var Ex=i((I7,Sx)=>{"use strict";var ZF=xx();Sx.exports=ZF});var Ei=i((k7,wx)=>{"use strict";wx.exports=Ex()});var Cx=i(()=>{"use strict";var e$=S(),r$=ae(),Tx=Se().f;e$({target:"Object",stat:!0,forced:Object.defineProperty!==Tx,sham:!r$},{defineProperty:Tx})});var Ix=i((P7,_x)=>{"use strict";Cx();var t$=le(),Ox=t$.Object,n$=_x.exports=function(r,t,n){return Ox.defineProperty(r,t,n)};Ox.defineProperty.sham&&(n$.sham=!0)});var Ax=i((N7,kx)=>{"use strict";var a$=Ix();kx.exports=a$});var Px=i((M7,Rx)=>{"use strict";var i$=Ax();Rx.exports=i$});var Mx=i((L7,Nx)=>{"use strict";var o$=Px();Nx.exports=o$});var Pn=i((D7,Lx)=>{"use strict";Lx.exports=Mx()});var rc=i((j7,pr)=>{var s$=Pn();function wi(e,r,t,n){var a=s$;try{a({},"",{})}catch{a=0}pr.exports=wi=function(s,c,u,l){function f(p,v){wi(s,p,function(m){return this._invoke(p,v,m)})}c?a?a(s,c,{value:u,enumerable:!l,configurable:!l,writable:!l}):s[c]=u:(f("next",0),f("throw",1),f("return",2))},pr.exports.__esModule=!0,pr.exports.default=pr.exports,wi(e,r,t,n)}pr.exports=wi,pr.exports.__esModule=!0,pr.exports.default=pr.exports});var nc=i((F7,dr)=>{var Dx=Xe(),tc=Si(),u$=Rn(),c$=xi(),jx=Ei(),Ze=rc();function Fx(){var e,r,t=typeof Dx=="function"?Dx:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(m,y,h,w){var b=y&&y.prototype instanceof c?y:c,x=tc(b.prototype);return Ze(x,"_invoke",function(A,_,E){var I,C,P,F=0,Re=E||[],k=!1,te={p:0,n:0,v:e,a:be,f:u$(be).call(be,e,4),d:function(H,Ce){return I=H,C=0,P=e,te.n=Ce,s}};function be(Y,H){for(C=Y,P=H,r=0;!k&&F&&!Ce&&r<Re.length;r++){var Ce,R=Re[r],tr=te.p,We=R[2];Y>3?(Ce=We===H)&&(P=R[(C=R[4])?5:(C=3,3)],R[4]=R[5]=e):R[0]<=tr&&((Ce=Y<2&&tr<R[1])?(C=0,te.v=H,te.n=R[1]):tr<We&&(Ce=Y<3||R[0]>H||H>We)&&(R[4]=Y,R[5]=H,te.n=We,C=0))}if(Ce||Y>1)return s;throw k=!0,H}return function(Y,H,Ce){if(F>1)throw TypeError("Generator is already running");for(k&&H===1&&be(H,Ce),C=H,P=Ce;(r=C<2?e:P)||!k;){I||(C?C<3?(C>1&&(te.n=-1),be(C,P)):te.n=P:te.v=P);try{if(F=2,I){if(C||(Y="next"),r=I[Y]){if(!(r=r.call(I,P)))throw TypeError("iterator result is not an object");if(!r.done)return r;P=r.value,C<2&&(C=0)}else C===1&&(r=I.return)&&r.call(I),C<2&&(P=TypeError("The iterator does not provide a '"+Y+"' method"),C=1);I=e}else if((r=(k=te.n<0)?P:A.call(_,te))!==s)break}catch(R){I=e,C=1,P=R}finally{F=1}}return{value:r,done:k}}}(m,h,w),!0),x}var s={};function c(){}function u(){}function l(){}r=c$;var f=[][n]?r(r([][n]())):(Ze(r={},n,function(){return this}),r),p=l.prototype=c.prototype=tc(f);function v(m){return jx?jx(m,l):(m.__proto__=l,Ze(m,a,"GeneratorFunction")),m.prototype=tc(p),m}return u.prototype=l,Ze(p,"constructor",l),Ze(l,"constructor",u),u.displayName="GeneratorFunction",Ze(l,a,"GeneratorFunction"),Ze(p),Ze(p,a,"Generator"),Ze(p,n,function(){return this}),Ze(p,"toString",function(){return"[object Generator]"}),(dr.exports=Fx=function(){return{w:o,m:v}},dr.exports.__esModule=!0,dr.exports.default=dr.exports)()}dr.exports=Fx,dr.exports.__esModule=!0,dr.exports.default=dr.exports});var oc=i(($7,Nn)=>{var l$=Xe(),f$=qi(),p$=Ju(),ac=rc();function ic(e,r){function t(a,o,s,c){try{var u=e[a](o),l=u.value;return l instanceof p$?r.resolve(l.v).then(function(f){t("next",f,s,c)},function(f){t("throw",f,s,c)}):r.resolve(l).then(function(f){u.value=f,s(u)},function(f){return t("throw",f,s,c)})}catch(f){c(f)}}var n;this.next||(ac(ic.prototype),ac(ic.prototype,typeof l$=="function"&&f$||"@asyncIterator",function(){return this})),ac(this,"_invoke",function(a,o,s){function c(){return new r(function(u,l){t(a,s,u,l)})}return n=n?n.then(c,c):c()},!0)}Nn.exports=ic,Nn.exports.__esModule=!0,Nn.exports.default=Nn.exports});var sc=i((B7,Mn)=>{var d$=Ft(),v$=nc(),m$=oc();function h$(e,r,t,n,a){return new m$(v$().w(e,r,t,n),a||d$)}Mn.exports=h$,Mn.exports.__esModule=!0,Mn.exports.default=Mn.exports});var $x=i((U7,Ln)=>{var y$=sc();function g$(e,r,t,n,a){var o=y$(e,r,t,n,a);return o.next().then(function(s){return s.done?s.value:o.next()})}Ln.exports=g$,Ln.exports.__esModule=!0,Ln.exports.default=Ln.exports});var Gx=i((G7,Ux)=>{"use strict";var Bx=Er(),b$=TypeError;Ux.exports=function(e,r){if(!delete e[r])throw new b$("Cannot delete property "+Bx(r)+" of "+Bx(e))}});var Hx=i(()=>{"use strict";var q$=S(),x$=xe(),S$=Pe(),E$=wt(),w$=Gx(),T$=dn(),C$=[].unshift(0)!==1,O$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},_$=C$||!O$();q$({target:"Array",proto:!0,arity:1,forced:_$},{unshift:function(r){var t=x$(this),n=S$(t),a=arguments.length;if(a){T$(n+a);for(var o=n;o--;){var s=o+a;o in t?t[s]=t[o]:w$(t,s)}for(var c=0;c<a;c++)t[c]=arguments[c]}return E$(t,n+a)}})});var zx=i((z7,Wx)=>{"use strict";Hx();var I$=Oe();Wx.exports=I$("Array","unshift")});var Vx=i((K7,Kx)=>{"use strict";var k$=ne(),A$=zx(),uc=Array.prototype;Kx.exports=function(e){var r=e.unshift;return e===uc||k$(uc,e)&&r===uc.unshift?A$:r}});var Xx=i((V7,Yx)=>{"use strict";var R$=Vx();Yx.exports=R$});var Qx=i((Y7,Jx)=>{"use strict";var P$=Xx();Jx.exports=P$});var eS=i((X7,Zx)=>{"use strict";var N$=Qx();Zx.exports=N$});var tS=i((J7,rS)=>{"use strict";rS.exports=eS()});var nS=i((Q7,Dn)=>{var M$=tS();function L$(e){var r=Object(e),t=[];for(var n in r)M$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Dn.exports=L$,Dn.exports.__esModule=!0,Dn.exports.default=Dn.exports});var iS=i((Z7,aS)=>{"use strict";Vr();vn();Hr();Vs();var D$=Ot();aS.exports=D$.f("iterator")});var sS=i((eY,oS)=>{"use strict";var j$=iS();Yr();oS.exports=j$});var cS=i((rY,uS)=>{"use strict";var F$=sS();uS.exports=F$});var fS=i((tY,lS)=>{"use strict";var $$=cS();lS.exports=$$});var jn=i((nY,pS)=>{"use strict";pS.exports=fS()});var dS=i((aY,vr)=>{var Ti=Xe(),B$=jn();function cc(e){"@babel/helpers - typeof";return vr.exports=cc=typeof Ti=="function"&&typeof B$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ti=="function"&&r.constructor===Ti&&r!==Ti.prototype?"symbol":typeof r},vr.exports.__esModule=!0,vr.exports.default=vr.exports,cc(e)}vr.exports=cc,vr.exports.__esModule=!0,vr.exports.default=vr.exports});var vS=i((iY,Fn)=>{var U$=dS().default,G$=Xe(),H$=jn();function W$(e){if(e!=null){var r=e[typeof G$=="function"&&H$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(U$(e)+" is not iterable")}Fn.exports=W$,Fn.exports.__esModule=!0,Fn.exports.default=Fn.exports});var yS=i((oY,mr)=>{var mS=xi(),z$=Bq(),K$=Ju(),V$=nc(),Y$=$x(),X$=sc(),J$=oc(),Q$=nS(),hS=vS();function lc(){"use strict";var e=V$(),r=e.m(lc),t=(mS?mS(r):r.__proto__).constructor;function n(s){var c=typeof s=="function"&&s.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(s){var c,u;return function(l){c||(c={stop:function(){return u(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return u(l.a,a[p],v)},delegateYield:function(p,v,m){return c.resultName=v,u(l.d,hS(p),m)},finish:function(p){return u(l.f,p)}},u=function(p,v,m){l.p=c.prev,l.n=c.next;try{return p(v,m)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return s.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(mr.exports=lc=function(){return{wrap:function(u,l,f,p){return e.w(o(u),l,f,p&&z$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(u,l){return new K$(u,l)},AsyncIterator:J$,async:function(u,l,f,p,v){return(n(l)?X$:Y$)(o(u),l,f,p,v)},keys:Q$,values:hS}},mr.exports.__esModule=!0,mr.exports.default=mr.exports)()}mr.exports=lc,mr.exports.__esModule=!0,mr.exports.default=mr.exports});var Ie=i((sY,gS)=>{var Ci=yS()();gS.exports=Ci;try{regeneratorRuntime=Ci}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ci:Function("r","regeneratorRuntime = r")(Ci)}});var fc=i((_i,qS)=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});var Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bS=function(){function e(r,t){var n=[],a=!0,o=!1,s=void 0;try{for(var c=r[Symbol.iterator](),u;!(a=(u=c.next()).done)&&(n.push(u.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,s=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw s}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();_i.default=Z$;function Z$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),s=o.reduce(function(c,u,l){return c[l]={name:u,value:a[u]},c},{});return Object.defineProperty(s,"length",{enumerable:!1,configurable:!1,value:o.length}),s}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return Ar(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ar([this],function(s){var c=s.attribs.class;c&&a.every(function(u){return c.indexOf(u)>-1})&&o.push(s)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=eB(n),s=o.shift(),c=o.length;return s(this).filter(function(u){for(var l=0;l<c;){if(u=o[l](u,a),!u)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return Ar([this],function(o,s){o===n&&(a=!0,s())}),a}),!0}function eB(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=bS(a,2),s=o[0],c=o[1],u=null,l=null;if(function(){switch(!0){case/>/.test(s):l=function(E){return function(I){return I(E.parent)&&E.parent}};break;case/^\./.test(s):var y=s.substr(1).split(".");u=function(E){var I=E.attribs.class;return I&&y.every(function(C){return I.indexOf(C)>-1})},l=function(E,I){return n?E.getElementsByClassName(y.join(" ")):typeof E=="function"?E(u):$n(E,I,u)};break;case/^\[/.test(s):var h=s.replace(/\[|\]|"/g,"").split("="),w=bS(h,2),b=w[0],x=w[1];u=function(E){var I=Object.keys(E.attribs).indexOf(b)>-1;return!!(I&&(!x||E.attribs[b]===x))},l=function(E,I){if(n){var C=function(){var P=[];return Ar([E],function(F){u(F)&&P.push(F)}),{v:P}}();if((typeof C>"u"?"undefined":Oi(C))==="object")return C.v}return typeof E=="function"?E(u):$n(E,I,u)};break;case/^#/.test(s):var A=s.substr(1);u=function(E){return E.attribs.id===A},l=function(E,I){if(n){var C=function(){var P=[];return Ar([E],function(F,Re){u(F)&&(P.push(F),Re())}),{v:P}}();if((typeof C>"u"?"undefined":Oi(C))==="object")return C.v}return typeof E=="function"?E(u):$n(E,I,u)};break;case/\*/.test(s):u=function(E){return!0},l=function(E,I){if(n){var C=function(){var P=[];return Ar([E],function(F){return P.push(F)}),{v:P}}();if((typeof C>"u"?"undefined":Oi(C))==="object")return C.v}return typeof E=="function"?E(u):$n(E,I,u)};break;default:u=function(E){return E.name===s},l=function(E,I){if(n){var C=function(){var P=[];return Ar([E],function(F){u(F)&&P.push(F)}),{v:P}}();if((typeof C>"u"?"undefined":Oi(C))==="object")return C.v}return typeof E=="function"?E(u):$n(E,I,u)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,m=function(h){if(h){var w=h.parent.childTags;p==="type"&&(w=w.filter(u));var b=w.findIndex(function(x){return x===h});if(b===v)return!0}return!1};return function(h){var w=l(h);return n?w.reduce(function(b,x){return m(x)&&b.push(x),b},[]):m(w)&&w}})}function Ar(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ar(t.childTags,r)})}function $n(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}qS.exports=_i.default});var ki=i(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.convertNodeList=rB;Ii.escapeValue=tB;function rB(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function tB(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var kS=i((Ai,IS)=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default=nB;var wS=ki(),xS={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function nB(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,s=r.priority,c=s===void 0?["id","class","href","src"]:s,u=r.ignore,l=u===void 0?{}:u,f=[],p=e,v=f.length,m=!1,y=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(x){return x===b}:b}),h=function(x){return o&&y.some(function(A){return A(x)})};for(Object.keys(l).forEach(function(b){b==="class"&&(m=!0);var x=l[b];typeof x!="function"&&(typeof x=="number"&&(x=x.toString()),typeof x=="string"&&(x=new RegExp((0,wS.escapeValue)(x).replace(/\\/g,"\\\\"))),typeof x=="boolean"&&(x=x?/(?:)/:/.^/),l[b]=function(A,_){return x.test(_)})}),m&&function(){var b=l.attribute;l.attribute=function(x,A,_){return l.class(A)||b&&b(x,A,_)}}();p!==n;){if(h(p)!==!0){if(SS(c,p,l,f,n)||ES(p,l,f,n))break;SS(c,p,l,f),f.length===v&&ES(p,l,f),f.length===v&&aB(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var w=OS(c,p,l);f.unshift(w)}return f.join(" ")}function SS(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=TS(e,r,t);if(o){var s=a.querySelectorAll(o);if(s.length===1)return n.unshift(o),!0}return!1}function TS(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(h,w){var b=e.indexOf(n[h].name),x=e.indexOf(n[w].name);return x===-1?b===-1?0:-1:b-x}),o=0,s=a.length;o<s;o++){var c=a[o],u=n[c],l=u.name,f=(0,wS.escapeValue)(u.value),p=t[l]||t.attribute,v=xS[l]||xS.attribute;if(!_S(p,l,f,v)){var m="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(m="#"+f),l==="class")){var y=f.trim().replace(/\s+/g,".");m="."+y}return m}}return null}function ES(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=CS(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function CS(e,r){var t=e.tagName.toLowerCase();return _S(r.tag,null,t)?null:t}function aB(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,s=0,c=o.length;s<c;s++){var u=o[s];if(u===r){var l=OS(e,u,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,u,t,l);var f="> "+l+":nth-child("+(s+1)+")";return n.unshift(f),!0}}return!1}function OS(e,r,t){var n=TS(e,r,t);return n||(n=CS(r,t)),n}function _S(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}IS.exports=Ai.default});var pc=i((Pi,AS)=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=cB;var iB=fc(),oB=uB(iB),sB=ki();function uB(e){return e&&e.__esModule?e:{default:e}}function cB(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,sB.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,oB.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Ri("",e,"",r);for(var o=[a.pop()];a.length>1;){var s=a.pop(),c=a.join(" "),u=o.join(" "),l=c+" "+u,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ri(c,s,u,r))}return o.unshift(a[0]),a=o,a[0]=Ri("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Ri(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Ri(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,s=document.querySelectorAll(o);if($t(s,n))r=a;else for(var c=document.querySelectorAll(""+e+a),u=function(){var _=c[l];if(n.some(function(I){return _.contains(I)})){var E=_.tagName.toLowerCase();return o=""+e+E+t,s=document.querySelectorAll(o),$t(s,n)&&(r=E),"break"}},l=0,f=c.length;l<f;l++){var o,s,p=u();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,s=document.querySelectorAll(o);$t(s,n)&&(r=v)}if(/:nth-child/.test(r)){var m=r.replace(/nth-child/g,"nth-of-type"),o=""+e+m+t,s=document.querySelectorAll(o);$t(s,n)&&(r=m)}if(/\.\S+\.\S+/.test(r)){for(var y=r.trim().split(".").slice(1).map(function(A){return"."+A}).sort(function(A,_){return A.length-_.length});y.length;){var h=r.replace(y.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var s=document.querySelectorAll(o);$t(s,n)&&(r=h)}if(y=r&&r.match(/\./g),y&&y.length>2)for(var w=document.querySelectorAll(""+e+r),b=function(){var _=w[l];if(n.some(function(I){return _.contains(I)})){var E=_.tagName.toLowerCase();return o=""+e+E+t,s=document.querySelectorAll(o),$t(s,n)&&(r=E),"break"}},l=0,f=w.length;l<f;l++){var o,s,x=b();if(x==="break")break}}return r}function $t(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}AS.exports=Pi.default});var dc=i(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.getCommonAncestor=lB;Ni.getCommonProperties=fB;function lB(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var m=[];p!==n;)p=p.parentNode,m.unshift(p);a[v]=m}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),s=null,c=function(){var v=o[u],m=a.some(function(y){return!y.some(function(h){return h===v})});if(m)return"break";s=v},u=0,l=o.length;u<l;u++){var f=c();if(f==="break")break}return s}function fB(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var s=t.getAttribute("class");s?(s=s.trim().split(" "),n.length?(n=n.filter(function(u){return s.some(function(l){return l===u})}),n.length?r.classes=n:delete r.classes):r.classes=s):delete r.classes}if(a!==void 0&&function(){var u=t.attributes,l=Object.keys(u).reduce(function(v,m){var y=u[m],h=y.name;return y&&h!=="class"&&(v[h]=y.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,m){var y=a[m];return y===l[m]&&(v[m]=y),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var DS=i(Bn=>{"use strict";Object.defineProperty(Bn,"__esModule",{value:!0});var pB=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Bn.getSingleSelector=mc;Bn.getMultiSelector=LS;Bn.default=gB;var dB=fc(),PS=vc(dB),vB=kS(),mB=vc(vB),hB=pc(),NS=vc(hB),RS=ki(),MS=dc();function vc(e){return e&&e.__esModule?e:{default:e}}function mc(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":pB(e))+'")');var t=(0,PS.default)(e,r),n=(0,mB.default)(e,r),a=(0,NS.default)(n,e,r);return t&&delete global.document,a}function LS(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,RS.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,PS.default)(e[0],r),n=(0,MS.getCommonAncestor)(e,r),a=mc(n,r),o=yB(e),s=o[0],c=(0,NS.default)(a+" "+s,e,r),u=(0,RS.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return u.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function yB(e){var r=(0,MS.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var s=t.map(function(u){return"."+u}).join("");o.push(s)}if(n){var c=Object.keys(n).reduce(function(u,l){return u.push("["+l+'="'+n[l]+'"]'),u},[]).join("");o.push(c)}return o.length,[o.join("")]}function gB(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?LS(e,r):mc(e,r)}});var $S=i(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.default=we.common=we.optimize=we.getMultiSelector=we.getSingleSelector=we.select=void 0;var hc=DS();Object.defineProperty(we,"getSingleSelector",{enumerable:!0,get:function(){return hc.getSingleSelector}});Object.defineProperty(we,"getMultiSelector",{enumerable:!0,get:function(){return hc.getMultiSelector}});var jS=FS(hc),bB=pc(),qB=FS(bB),xB=dc(),SB=EB(xB);function EB(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function FS(e){return e&&e.__esModule?e:{default:e}}we.select=jS.default;we.optimize=qB.default;we.common=SB;we.default=jS.default});var BS=i(()=>{"use strict";var PB=S(),NB=sr();PB({target:"Array",stat:!0},{isArray:NB})});var GS=i((wY,US)=>{"use strict";BS();var MB=le();US.exports=MB.Array.isArray});var WS=i((TY,HS)=>{"use strict";var LB=GS();HS.exports=LB});var KS=i((CY,zS)=>{"use strict";var DB=WS();zS.exports=DB});var YS=i((OY,VS)=>{"use strict";var jB=KS();VS.exports=jB});var JS=i((_Y,XS)=>{"use strict";XS.exports=YS()});var eE=i(()=>{"use strict";var FB=S(),$B=xe(),BB=Pe(),UB=wt(),GB=dn(),HB=L(),WB=HB(function(){return[].push.call({length:4294967296},1)!==4294967297}),zB=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},KB=WB||!zB();FB({target:"Array",proto:!0,arity:1,forced:KB},{push:function(r){var t=$B(this),n=BB(t),a=arguments.length;GB(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return UB(t,n),n}})});var tE=i((RY,rE)=>{"use strict";eE();var VB=Oe();rE.exports=VB("Array","push")});var aE=i((PY,nE)=>{"use strict";var YB=ne(),XB=tE(),yc=Array.prototype;nE.exports=function(e){var r=e.push;return e===yc||YB(yc,e)&&r===yc.push?XB:r}});var oE=i((NY,iE)=>{"use strict";var JB=aE();iE.exports=JB});var uE=i((MY,sE)=>{"use strict";var QB=oE();sE.exports=QB});var lE=i((LY,cE)=>{"use strict";var ZB=uE();cE.exports=ZB});var gc=i((DY,fE)=>{"use strict";fE.exports=lE()});var SE=i(()=>{"use strict";var e3=S(),r3=hn().map,t3=an(),n3=t3("map");e3({target:"Array",proto:!0,forced:!n3},{map:function(r){return r3(this,r,arguments.length>1?arguments[1]:void 0)}})});var wE=i((fX,EE)=>{"use strict";SE();var a3=Oe();EE.exports=a3("Array","map")});var CE=i((pX,TE)=>{"use strict";var i3=ne(),o3=wE(),qc=Array.prototype;TE.exports=function(e){var r=e.map;return e===qc||i3(qc,e)&&r===qc.map?o3:r}});var _E=i((dX,OE)=>{"use strict";var s3=CE();OE.exports=s3});var kE=i((vX,IE)=>{"use strict";var u3=_E();IE.exports=u3});var RE=i((mX,AE)=>{"use strict";var c3=kE();AE.exports=c3});var NE=i((hX,PE)=>{"use strict";PE.exports=RE()});var LE=i((yX,ME)=>{ME.exports=NE()});var jE=i((gX,DE)=>{DE.exports=Ft()});var GE=i((bX,UE)=>{"use strict";var l3=K(),f3=xe(),p3=xa(),d3=Pe(),FE=TypeError,$E="Reduce of empty array with no initial value",BE=function(e){return function(r,t,n,a){var o=f3(r),s=p3(o),c=d3(o);if(l3(t),c===0&&n<2)throw new FE($E);var u=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(u in s){a=s[u],u+=l;break}if(u+=l,e?u<0:c<=u)throw new FE($E)}for(;e?u>=0:c>u;u+=l)u in s&&(a=t(a,s[u],u,o));return a}};UE.exports={left:BE(!1),right:BE(!0)}});var xc=i((qX,HE)=>{"use strict";var v3=L();HE.exports=function(e,r){var t=[][e];return!!t&&v3(function(){t.call(null,r||function(){return 1},1)})}});var zE=i(()=>{"use strict";var m3=S(),h3=GE().left,y3=xc(),WE=yt(),g3=Sn(),b3=!g3&&WE>79&&WE<83,q3=b3||!y3("reduce");m3({target:"Array",proto:!0,forced:q3},{reduce:function(r){var t=arguments.length;return h3(this,r,t,t>1?arguments[1]:void 0)}})});var VE=i((EX,KE)=>{"use strict";zE();var x3=Oe();KE.exports=x3("Array","reduce")});var XE=i((wX,YE)=>{"use strict";var S3=ne(),E3=VE(),Sc=Array.prototype;YE.exports=function(e){var r=e.reduce;return e===Sc||S3(Sc,e)&&r===Sc.reduce?E3:r}});var QE=i((TX,JE)=>{"use strict";var w3=XE();JE.exports=w3});var ew=i((CX,ZE)=>{"use strict";var T3=QE();ZE.exports=T3});var tw=i((OX,rw)=>{"use strict";var C3=ew();rw.exports=C3});var aw=i((_X,nw)=>{"use strict";nw.exports=tw()});var ow=i((IX,iw)=>{iw.exports=aw()});var cw=i((kX,uw)=>{"use strict";var O3=sr(),_3=Pe(),I3=dn(),k3=fe(),A3=Et(),sw=function(e,r,t,n,a,o,s,c){for(var u=a,l=0,f=s?k3(s,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&O3(p)?(v=_3(p),u=sw(e,r,p,v,u,o-1)-1):(I3(u+1),A3(e,u,p)),u++),l++;return u};uw.exports=sw});var lw=i(()=>{"use strict";var R3=S(),P3=cw(),N3=K(),M3=xe(),L3=Pe(),D3=Ua();R3({target:"Array",proto:!0},{flatMap:function(r){var t=M3(this),n=L3(t),a;return N3(r),a=D3(t,0),P3(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var fw=i(()=>{"use strict";var j3=Xs();j3("flatMap")});var dw=i((MX,pw)=>{"use strict";lw();fw();var F3=Oe();pw.exports=F3("Array","flatMap")});var mw=i((LX,vw)=>{"use strict";var $3=ne(),B3=dw(),Ec=Array.prototype;vw.exports=function(e){var r=e.flatMap;return e===Ec||$3(Ec,e)&&r===Ec.flatMap?B3:r}});var yw=i((DX,hw)=>{"use strict";var U3=mw();hw.exports=U3});var bw=i((jX,gw)=>{"use strict";var G3=yw();gw.exports=G3});var xw=i((FX,qw)=>{"use strict";var H3=bw();qw.exports=H3});var Ew=i(($X,Sw)=>{"use strict";Sw.exports=xw()});var Tw=i((BX,ww)=>{ww.exports=Ew()});var Ow=i((UX,Cw)=>{"use strict";xs();var W3=Oe();Cw.exports=W3("Array","concat")});var Iw=i((GX,_w)=>{"use strict";var z3=ne(),K3=Ow(),wc=Array.prototype;_w.exports=function(e){var r=e.concat;return e===wc||z3(wc,e)&&r===wc.concat?K3:r}});var Aw=i((HX,kw)=>{"use strict";var V3=Iw();kw.exports=V3});var Pw=i((WX,Rw)=>{"use strict";var Y3=Aw();Rw.exports=Y3});var Mw=i((zX,Nw)=>{"use strict";var X3=Pw();Nw.exports=X3});var Dw=i((KX,Lw)=>{"use strict";Lw.exports=Mw()});var Tc=i((VX,jw)=>{jw.exports=Dw()});var Bw=i(()=>{});var Gw=i((yJ,Uw)=>{"use strict";Bw();Ys();var oU=Ot();Uw.exports=oU.f("toPrimitive")});var Ww=i((gJ,Hw)=>{"use strict";var sU=Gw();Hw.exports=sU});var Kw=i((bJ,zw)=>{"use strict";var uU=Ww();zw.exports=uU});var Yw=i((qJ,Vw)=>{"use strict";var cU=Kw();Vw.exports=cU});var Jw=i((xJ,Xw)=>{"use strict";Xw.exports=Yw()});var oT=i((UJ,iT)=>{"use strict";var fU=W(),pU=Ve(),dU=j(),vU=dU("match");iT.exports=function(e){var r;return fU(e)&&((r=e[vU])!==void 0?!!r:pU(e)==="RegExp")}});var uT=i((GJ,sT)=>{"use strict";var mU=oT(),hU=TypeError;sT.exports=function(e){if(mU(e))throw new hU("The method doesn't accept regular expressions");return e}});var lT=i((HJ,cT)=>{"use strict";var yU=j(),gU=yU("match");cT.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[gU]=!1,"/./"[e](r)}catch{}}return!1}});var dT=i(()=>{"use strict";var bU=S(),qU=Xt(),xU=Qt().f,SU=Wo(),fT=wr(),EU=uT(),wU=jr(),TU=lT(),CU=me(),OU=qU("".slice),_U=Math.min,pT=TU("startsWith"),IU=!CU&&!pT&&!!function(){var e=xU(String.prototype,"startsWith");return e&&!e.writable}();bU({target:"String",proto:!0,forced:!IU&&!pT},{startsWith:function(r){var t=fT(wU(this));EU(r);var n=SU(_U(arguments.length>1?arguments[1]:void 0,t.length)),a=fT(r);return OU(t,n,n+a.length)===a}})});var mT=i((KJ,vT)=>{"use strict";dT();var kU=Oe();vT.exports=kU("String","startsWith")});var yT=i((VJ,hT)=>{"use strict";var AU=ne(),RU=mT(),Ic=String.prototype;hT.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===Ic||AU(Ic,e)&&r===Ic.startsWith?RU:r}});var bT=i((YJ,gT)=>{"use strict";var PU=yT();gT.exports=PU});var xT=i((XJ,qT)=>{"use strict";var NU=bT();qT.exports=NU});var ET=i((JJ,ST)=>{"use strict";var MU=xT();ST.exports=MU});var TT=i((QJ,wT)=>{"use strict";wT.exports=ET()});var OT=i((ZJ,CT)=>{CT.exports=TT()});var _T=i(()=>{"use strict";var LU=S(),DU=hn().filter,jU=an(),FU=jU("filter");LU({target:"Array",proto:!0,forced:!FU},{filter:function(r){return DU(this,r,arguments.length>1?arguments[1]:void 0)}})});var kT=i((tQ,IT)=>{"use strict";_T();var $U=Oe();IT.exports=$U("Array","filter")});var RT=i((nQ,AT)=>{"use strict";var BU=ne(),UU=kT(),kc=Array.prototype;AT.exports=function(e){var r=e.filter;return e===kc||BU(kc,e)&&r===kc.filter?UU:r}});var NT=i((aQ,PT)=>{"use strict";var GU=RT();PT.exports=GU});var LT=i((iQ,MT)=>{"use strict";var HU=NT();MT.exports=HU});var jT=i((oQ,DT)=>{"use strict";var WU=LT();DT.exports=WU});var $T=i((sQ,FT)=>{"use strict";FT.exports=jT()});var UT=i((uQ,BT)=>{BT.exports=$T()});var aC=i(()=>{"use strict";var ZU=S(),e4=ie(),Rc=mt(),r4=Zu(),QT=lu(),t4=ve(),ZT=W(),n4=Cr(),rC=L(),Pc=e4("Reflect","construct"),a4=Object.prototype,i4=[].push,tC=rC(function(){function e(){}return!(Pc(function(){},[],e)instanceof e)}),nC=!rC(function(){Pc(function(){})}),eC=tC||nC;ZU({target:"Reflect",stat:!0,forced:eC,sham:eC},{construct:function(r,t){QT(r),t4(t);var n=arguments.length<3?r:QT(arguments[2]);if(nC&&!tC)return Pc(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return Rc(i4,a,t),new(Rc(r4,r,a))}var o=n.prototype,s=n4(ZT(o)?o:a4),c=Rc(r,s,t);return ZT(c)?c:s}})});var oC=i((UQ,iC)=>{"use strict";aC();var o4=le();iC.exports=o4.Reflect.construct});var uC=i((GQ,sC)=>{"use strict";var s4=oC();sC.exports=s4});var lC=i((HQ,cC)=>{"use strict";var u4=uC();cC.exports=u4});var pC=i((WQ,fC)=>{"use strict";var c4=lC();fC.exports=c4});var Bi=i((zQ,dC)=>{"use strict";dC.exports=pC()});var mC=i((KQ,vC)=>{vC.exports=Bi()});var wC=i((tZ,EC)=>{"use strict";var l4=L();EC.exports=l4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var OC=i((nZ,CC)=>{"use strict";var f4=L(),p4=W(),d4=Ve(),TC=wC(),Ui=Object.isExtensible,v4=f4(function(){Ui(1)});CC.exports=v4||TC?function(r){return!p4(r)||TC&&d4(r)==="ArrayBuffer"?!1:Ui?Ui(r):!0}:Ui});var IC=i((aZ,_C)=>{"use strict";var m4=L();_C.exports=!m4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var $c=i((iZ,RC)=>{"use strict";var h4=S(),y4=B(),g4=Ct(),b4=W(),Dc=oe(),q4=Se().f,kC=mn(),x4=Ss(),jc=OC(),S4=bt(),E4=IC(),AC=!1,gr=S4("meta"),w4=0,Fc=function(e){q4(e,gr,{value:{objectID:"O"+w4++,weakData:{}}})},T4=function(e,r){if(!b4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Dc(e,gr)){if(!jc(e))return"F";if(!r)return"E";Fc(e)}return e[gr].objectID},C4=function(e,r){if(!Dc(e,gr)){if(!jc(e))return!0;if(!r)return!1;Fc(e)}return e[gr].weakData},O4=function(e){return E4&&AC&&jc(e)&&!Dc(e,gr)&&Fc(e),e},_4=function(){I4.enable=function(){},AC=!0;var e=kC.f,r=y4([].splice),t={};t[gr]=1,e(t).length&&(kC.f=function(n){for(var a=e(n),o=0,s=a.length;o<s;o++)if(a[o]===gr){r(a,o,1);break}return a},h4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:x4.f}))},I4=RC.exports={enable:_4,fastKey:T4,getWeakData:C4,onFreeze:O4};g4[gr]=!0});var MC=i((oZ,NC)=>{"use strict";var k4=S(),A4=D(),R4=$c(),P4=L(),N4=Ye(),M4=Me(),L4=li(),D4=U(),j4=W(),F4=Dr(),$4=lr(),B4=Se().f,U4=hn().forEach,G4=ae(),PC=Tr(),H4=PC.set,W4=PC.getterFor;NC.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",s=A4[e],c=s&&s.prototype,u={},l;if(!G4||!D4(s)||!(a||c.forEach&&!P4(function(){new s().entries().next()})))l=t.getConstructor(r,e,n,o),R4.enable();else{l=r(function(v,m){H4(L4(v,f),{type:e,collection:new s}),F4(m)||M4(m,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=W4(e);U4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var m=v==="add"||v==="set";v in c&&!(a&&v==="clear")&&N4(f,v,function(y,h){var w=p(this).collection;if(!m&&a&&!j4(y))return v==="get"?void 0:!1;var b=w[v](y===0?0:y,h);return m?this:b})}),a||B4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return $4(l,e,!1,!0),u[e]=l,k4({global:!0,forced:!0},u),a||t.setStrong(l,e,n),l}});var DC=i((sZ,LC)=>{"use strict";var z4=ur();LC.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:z4(e,n,r[n],t);return e}});var HC=i((uZ,GC)=>{"use strict";var jC=Cr(),K4=Ha(),FC=DC(),V4=fe(),Y4=li(),X4=Dr(),J4=Me(),Q4=ja(),Gi=Fa(),Z4=cu(),Kn=ae(),$C=$c().fastKey,UC=Tr(),BC=UC.set,Bc=UC.getterFor;GC.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){Y4(l,o),BC(l,{type:r,index:jC(null),first:null,last:null,size:0}),Kn||(l.size=0),X4(f)||J4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,s=Bc(r),c=function(l,f,p){var v=s(l),m=u(l,f),y,h;return m?m.value=p:(v.last=m={index:h=$C(f,!0),key:f,value:p,previous:y=v.last,next:null,removed:!1},v.first||(v.first=m),y&&(y.next=m),Kn?v.size++:l.size++,h!=="F"&&(v.index[h]=m)),l},u=function(l,f){var p=s(l),v=$C(f),m;if(v!=="F")return p.index[v];for(m=p.first;m;m=m.next)if(m.key===f)return m};return FC(o,{clear:function(){for(var f=this,p=s(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=jC(null),Kn?p.size=0:f.size=0},delete:function(l){var f=this,p=s(f),v=u(f,l);if(v){var m=v.next,y=v.previous;delete p.index[v.index],v.removed=!0,y&&(y.next=m),m&&(m.previous=y),p.first===v&&(p.first=m),p.last===v&&(p.last=y),Kn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=s(this),v=V4(f,arguments.length>1?arguments[1]:void 0),m;m=m?m.next:p.first;)for(v(m.value,m.key,this);m&&m.removed;)m=m.previous},has:function(f){return!!u(this,f)}}),FC(o,t?{get:function(f){var p=u(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),Kn&&K4(o,"size",{configurable:!0,get:function(){return s(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Bc(r),o=Bc(n);Q4(e,r,function(s,c){BC(this,{type:n,target:s,state:a(s),kind:c,last:null})},function(){for(var s=o(this),c=s.kind,u=s.last;u&&u.removed;)u=u.previous;return!s.target||!(s.last=u=u?u.next:s.state.first)?(s.target=null,Gi(void 0,!0)):Gi(c==="keys"?u.key:c==="values"?u.value:[u.key,u.value],!1)},t?"entries":"values",!t,!0),Z4(r)}}});var WC=i(()=>{"use strict";var eG=MC(),rG=HC();eG("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},rG)});var zC=i(()=>{"use strict";WC()});var VC=i((dZ,KC)=>{"use strict";KC.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var Te=i((vZ,XC)=>{"use strict";var tG=ie(),Hi=VC(),YC=tG("Map");XC.exports={Map:YC,set:Hi("set",2),get:Hi("get",1),has:Hi("has",1),remove:Hi("delete",1),proto:YC.prototype}});var Uc=i(()=>{"use strict";var nG=S(),aG=B(),iG=K(),oG=jr(),sG=Me(),Wi=Te(),JC=me(),uG=L(),QC=Wi.Map,cG=Wi.has,lG=Wi.get,fG=Wi.set,pG=aG([].push),dG=JC||uG(function(){return QC.groupBy("ab",function(e){return e}).get("a").length!==1});nG({target:"Map",stat:!0,forced:JC||dG},{groupBy:function(r,t){oG(r),iG(t);var n=new QC,a=0;return sG(r,function(o){var s=t(o,a++);cG(n,s)?pG(lG(n,s),o):fG(n,s,[o])}),n}})});var pe=i((yZ,ZC)=>{"use strict";var vG=Er(),mG=TypeError;ZC.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new mG(vG(e)+" is not a map")}});var Hc=i(()=>{"use strict";var hG=S(),yG=pe(),Gc=Te(),gG=me(),bG=Gc.get,qG=Gc.has,xG=Gc.set;hG({target:"Map",proto:!0,real:!0,forced:gG},{getOrInsert:function(r,t){return qG(yG(this),r)?bG(this,r):(xG(this,r,t),t)}})});var zc=i(()=>{"use strict";var SG=S(),EG=K(),wG=pe(),Wc=Te(),TG=me(),CG=Wc.get,OG=Wc.has,_G=Wc.set;SG({target:"Map",proto:!0,real:!0,forced:TG},{getOrInsertComputed:function(r,t){if(wG(this),EG(t),OG(this,r))return CG(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return _G(this,r,n),n}})});var rO=i((SZ,eO)=>{"use strict";Vr();zC();Uc();Hc();zc();vn();Hr();var IG=le();eO.exports=IG.Map});var nO=i((EZ,tO)=>{"use strict";var kG=rO();Yr();tO.exports=kG});var Kc=i(()=>{"use strict";Hc()});var Vc=i(()=>{"use strict";zc()});var aO=i(()=>{"use strict";Uc()});var oO=i((kZ,iO)=>{"use strict";var AG=nO();Kc();Vc();aO();iO.exports=AG});var uO=i((AZ,sO)=>{"use strict";var RG=fe(),PG=ve(),NG=xe(),MG=Me();sO.exports=function(e,r,t){return function(a){var o=NG(a),s=arguments.length,c=s>1?arguments[1]:void 0,u=c!==void 0,l=u?RG(c,s>2?arguments[2]:void 0):void 0,f=new e,p=0;return MG(o,function(v){var m=u?l(v,p++):v;t?r(f,PG(m)[0],m[1]):r(f,m)}),f}}});var lO=i(()=>{"use strict";var LG=S(),cO=Te(),DG=uO();LG({target:"Map",stat:!0,forced:!0},{from:DG(cO.Map,cO.set,!0)})});var pO=i((NZ,fO)=>{"use strict";var jG=ve();fO.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,s=0;s<o;s++){var c=arguments[s];t?r(a,jG(c)[0],c[1]):r(a,c)}return a}}});var vO=i(()=>{"use strict";var FG=S(),dO=Te(),$G=pO();FG({target:"Map",stat:!0,forced:!0},{of:$G(dO.Map,dO.set,!0)})});var hO=i(()=>{"use strict";var BG=S(),UG=Q(),GG=Me(),HG=U(),mO=K(),WG=Te().Map;BG({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=HG(this)?this:WG,a=new n;mO(t);var o=mO(a.set);return GG(r,function(s){UG(o,a,t(s),s)}),a}})});var yO=i(()=>{"use strict";var zG=S(),KG=pe(),VG=Te().remove;zG({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=KG(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=VG(r,arguments[a]),t=t&&n;return!!t}})});var bO=i(()=>{"use strict";var YG=S(),XG=pe(),Yc=Te(),JG=Yc.get,QG=Yc.has,gO=Yc.set;YG({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=XG(this),a,o;return QG(n,r)?(a=JG(n,r),"update"in t&&(a=t.update(a,r,n),gO(n,r,a)),a):(o=t.insert(r,n),gO(n,r,o),o)}})});var xO=i((GZ,qO)=>{"use strict";var ZG=Q();qO.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,s;!(o=ZG(a,n)).done;)if(s=r(o.value),s!==void 0)return s}});var Ue=i((HZ,SO)=>{"use strict";var eH=xO();SO.exports=function(e,r,t){return t?eH(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var EO=i(()=>{"use strict";var rH=S(),tH=fe(),nH=pe(),aH=Ue();rH({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=nH(this),n=tH(r,arguments.length>1?arguments[1]:void 0);return aH(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var TO=i(()=>{"use strict";var iH=S(),oH=fe(),sH=pe(),wO=Te(),uH=Ue(),cH=wO.Map,lH=wO.set;iH({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=sH(this),n=oH(r,arguments.length>1?arguments[1]:void 0),a=new cH;return uH(t,function(o,s){n(o,s,t)&&lH(a,s,o)}),a}})});var CO=i(()=>{"use strict";var fH=S(),pH=fe(),dH=pe(),vH=Ue();fH({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=dH(this),n=pH(r,arguments.length>1?arguments[1]:void 0),a=vH(t,function(o,s){if(n(o,s,t))return{value:o}},!0);return a&&a.value}})});var OO=i(()=>{"use strict";var mH=S(),hH=fe(),yH=pe(),gH=Ue();mH({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=yH(this),n=hH(r,arguments.length>1?arguments[1]:void 0),a=gH(t,function(o,s){if(n(o,s,t))return{key:s}},!0);return a&&a.key}})});var IO=i((ZZ,_O)=>{"use strict";_O.exports=function(e,r){return e===r||e!==e&&r!==r}});var kO=i(()=>{"use strict";var bH=S(),qH=IO(),xH=pe(),SH=Ue();bH({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return SH(xH(this),function(t){if(qH(t,r))return!0},!0)===!0}})});var AO=i(()=>{"use strict";var EH=S(),wH=pe(),TH=Ue();EH({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=TH(wH(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var PO=i(()=>{"use strict";var CH=S(),OH=fe(),_H=pe(),RO=Te(),IH=Ue(),kH=RO.Map,AH=RO.set;CH({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=_H(this),n=OH(r,arguments.length>1?arguments[1]:void 0),a=new kH;return IH(t,function(o,s){AH(a,n(o,s,t),o)}),a}})});var MO=i(()=>{"use strict";var RH=S(),PH=fe(),NH=pe(),NO=Te(),MH=Ue(),LH=NO.Map,DH=NO.set;RH({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=NH(this),n=PH(r,arguments.length>1?arguments[1]:void 0),a=new LH;return MH(t,function(o,s){DH(a,s,n(o,s,t))}),a}})});var LO=i(()=>{"use strict";var jH=S(),FH=pe(),$H=Me(),BH=Te().set;jH({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=FH(this),n=arguments.length,a=0;a<n;)$H(arguments[a++],function(o,s){BH(t,o,s)},{AS_ENTRIES:!0});return t}})});var DO=i(()=>{"use strict";var UH=S(),GH=K(),HH=pe(),WH=Ue(),zH=TypeError;UH({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=HH(this),n=arguments.length<2,a=n?void 0:arguments[1];if(GH(r),WH(t,function(o,s){n?(n=!1,a=o):a=r(a,o,s,t)}),n)throw new zH("Reduce of empty map with no initial value");return a}})});var jO=i(()=>{"use strict";var KH=S(),VH=fe(),YH=pe(),XH=Ue();KH({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=YH(this),n=VH(r,arguments.length>1?arguments[1]:void 0);return XH(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var $O=i(()=>{"use strict";var JH=S(),FO=K(),QH=pe(),Xc=Te(),ZH=TypeError,e5=Xc.get,r5=Xc.has,t5=Xc.set;JH({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=QH(this),a=arguments.length;FO(t);var o=r5(n,r);if(!o&&a<3)throw new ZH("Updating absent value");var s=o?e5(n,r):FO(a>2?arguments[2]:void 0)(r,n);return t5(n,r,t(s,r,n)),n}})});var Qc=i((hee,BO)=>{"use strict";var zi=Q(),Jc=K(),Ki=U(),n5=ve(),a5=TypeError;BO.exports=function(r,t){var n=n5(this),a=Jc(n.get),o=Jc(n.has),s=Jc(n.set),c=arguments.length>2?arguments[2]:void 0,u;if(!Ki(t)&&!Ki(c))throw new a5("At least one callback required");return zi(o,n,r)?(u=zi(a,n,r),Ki(t)&&(u=t(u),zi(s,n,r,u))):Ki(c)&&(u=c(),zi(s,n,r,u)),u}});var UO=i(()=>{"use strict";var i5=S(),o5=Qc();i5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:o5})});var GO=i(()=>{"use strict";var s5=S(),u5=Qc();s5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:u5})});var WO=i((xee,HO)=>{"use strict";var c5=oO();lO();vO();hO();yO();bO();EO();TO();CO();OO();kO();Kc();Vc();AO();PO();MO();LO();DO();jO();$O();UO();GO();HO.exports=c5});var KO=i((See,zO)=>{"use strict";zO.exports=WO()});var YO=i(()=>{"use strict";var l5=S(),f5=Xt(),p5=rs().indexOf,d5=xc(),Zc=f5([].indexOf),VO=!!Zc&&1/Zc([1],1,-0)<0,v5=VO||!d5("indexOf");l5({target:"Array",proto:!0,forced:v5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return VO?Zc(this,r,t)||0:p5(this,r,t)}})});var JO=i((Tee,XO)=>{"use strict";YO();var m5=Oe();XO.exports=m5("Array","indexOf")});var ZO=i((Cee,QO)=>{"use strict";var h5=ne(),y5=JO(),el=Array.prototype;QO.exports=function(e){var r=e.indexOf;return e===el||h5(el,e)&&r===el.indexOf?y5:r}});var r_=i((Oee,e_)=>{"use strict";var g5=ZO();e_.exports=g5});var n_=i((_ee,t_)=>{"use strict";var b5=r_();t_.exports=b5});var i_=i((Iee,a_)=>{"use strict";var q5=n_();a_.exports=q5});var s_=i((kee,o_)=>{"use strict";o_.exports=i_()});var w_=i(()=>{"use strict";var C5=S(),O5=xe(),E_=Pa(),_5=L(),I5=_5(function(){E_(1)});C5({target:"Object",stat:!0,forced:I5},{keys:function(r){return E_(O5(r))}})});var C_=i((Mre,T_)=>{"use strict";w_();var k5=le();T_.exports=k5.Object.keys});var __=i((Lre,O_)=>{"use strict";var A5=C_();O_.exports=A5});var k_=i((Dre,I_)=>{"use strict";var R5=__();I_.exports=R5});var R_=i((jre,A_)=>{"use strict";var P5=k_();A_.exports=P5});var N_=i((Fre,P_)=>{"use strict";P_.exports=R_()});var L_=i(($re,M_)=>{M_.exports=N_()});var sl=i((Qre,j_)=>{var ol={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},$5=ol.yellow,B5=Object.keys(ol),U5=/^#[0-9a-fA-F]{6}$/;j_.exports={COLOR_PRESETS:ol,DEFAULT_COLOR:$5,PRESET_NAMES:B5,HEX_COLOR_REGEX:U5}});var h0=i((gte,m0)=>{var v0={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},mW=Object.keys(v0);m0.exports={ALLOWED_REACTIONS:v0,ALLOWED_REACTION_EMOJIS:mW}});var xr="";function of(e){xr=e.replace(/\/+$/,"")}async function Lr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function sf(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${xr}/comments?${t}`);return await Lr(n,"Failed to fetch comments"),(await n.json()).data}async function go({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:s,parent:c,color:u}){let l={quote:t,prefix:n,suffix:a,body:o,author:s,parent:c};u&&(l.color=u),r?l.document=r:l.uri=e;let f=await fetch(`${xr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await Lr(f,"Failed to create comment"),f.json()}async function bo(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${xr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await Lr(a,"Failed to update comment"),a.json()}async function uf(e,r){let t=await fetch(`${xr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await Lr(t,"Failed to update comment status"),t.json()}async function cf(e){let r=await fetch(`${xr}/comments/${e}`,{method:"DELETE"});await Lr(r,"Failed to delete comment")}async function lf(e,r,t){let n=await fetch(`${xr}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await Lr(n,"Failed to add reaction"),n.json()}async function ff(e,r,t){let n=await fetch(`${xr}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await Lr(n,"Failed to remove reaction"),n.json()}var CB=q(Tt(),1),OB=q(Ba(),1),_B=q(ni(),1),IB=q(ai(),1),kB=q(ii(),1);var Vu=q(Ft(),1);function iq(e,r,t,n,a,o,s){try{var c=e[o](s),u=c.value}catch(l){return void t(l)}c.done?r(u):Vu.default.resolve(u).then(n,a)}function et(e){return function(){var r=this,t=arguments;return new Vu.default(function(n,a){var o=e.apply(r,t);function s(u){iq(o,n,a,s,c,"next",u)}function c(u){iq(o,n,a,s,c,"throw",u)}s(void 0)})}}function In(e,r){this.v=e,this.k=r}function kr(e){return new In(e,0)}var Yu=q(Ft(),1),mq=q(Xe(),1),hq=q(qi(),1);function Qe(e){return function(){return new kn(e.apply(this,arguments))}}function kn(e){var r,t;function n(o,s){try{var c=e[o](s),u=c.value,l=u instanceof In;Yu.default.resolve(l?u.v:u).then(function(f){if(l){var p=o==="return"?"return":"next";if(!u.k||f.done)return n(p,f);f=e[p](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,s){switch(o){case"return":r.resolve({value:s,done:!0});break;case"throw":r.reject(s);break;default:r.resolve({value:s,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,s){return new Yu.default(function(c,u){var l={key:o,arg:s,resolve:c,reject:u,next:null};t?t=t.next=l:(r=t=l,n(o,s))})},typeof e.return!="function"&&(this.return=void 0)}kn.prototype[typeof mq.default=="function"&&hq.default||"@@asyncIterator"]=function(){return this},kn.prototype.next=function(e){return this._invoke("next",e)},kn.prototype.throw=function(e){return this._invoke("throw",e)},kn.prototype.return=function(e){return this._invoke("return",e)};var AB=q(Ie(),1),RB=q($S(),1);function ke(e){var r,t=wB(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function wB(e){return"startContainer"in e}function Rr(e){if(TB(e))return e;var r=e,t=ke(r).createRange();return t.selectNodeContents(r),t}function TB(e){return"startContainer"in e}var QS=q(JS(),1);function ZS(e){if((0,QS.default)(e))return e}var pE=q(Xe(),1),dE=q(nu(),1),vE=q(gc(),1);function mE(e,r){var t=e==null?null:typeof pE.default<"u"&&(0,dE.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,s,c=[],u=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=o.call(t)).done)&&((0,vE.default)(c).call(c,n.value),c.length!==r);u=!0);}catch(f){l=!0,a=f}finally{try{if(!u&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw a}}return c}}var hE=q(Vo(),1),yE=q(qs(),1);function Mi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function bc(e,r){if(e){var t;if(typeof e=="string")return Mi(e,r);var n=(0,hE.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,yE.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Mi(e,r):void 0}}function gE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hr(e,r){return ZS(e)||mE(e,r)||bc(e,r)||gE()}var bE=q(Xe(),1),qE=q(qi(),1),xE=q(jn(),1),Un=q(Ft(),1);function Bt(e){var r,t,n,a=2;for(typeof bE.default<"u"&&(t=qE.default,n=xE.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Li(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Li(e){function r(t){if(Object(t)!==t)return Un.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Un.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Li=function(n){this.s=n,this.n=n.next},Li.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?Un.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?Un.default.reject(n):r(a.apply(this.s,arguments))}},new Li(e)}var iU=q(Ie(),1);var Z3=q(Ie(),1),eU=q(LE(),1),rU=q(jE(),1),tU=q(ow(),1),nU=q(Tw(),1),aU=q(Tc(),1);var nl=q(Ie(),1);var QU=q(Ie(),1);var Oc=q(Ie(),1);function Gn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Fw(e,r){return Gn(e.startChunk,r.startChunk)&&Gn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function rt(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Cc=q(Pn(),1);var Hn=q(Xe(),1),$w=q(jn(),1);function yr(e){"@babel/helpers - typeof";return yr=typeof Hn.default=="function"&&typeof $w.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Hn.default=="function"&&r.constructor===Hn.default&&r!==Hn.default.prototype?"symbol":typeof r},yr(e)}var Qw=q(Jw(),1);function Zw(e,r){if(yr(e)!="object"||!e)return e;var t=e[Qw.default];if(t!==void 0){var n=t.call(e,r||"default");if(yr(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Di(e){var r=Zw(e,"string");return yr(r)=="symbol"?r:r+""}function eT(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Cc.default)(e,Di(n.key),n)}}function Wn(e,r,t){return r&&eT(e.prototype,r),t&&eT(e,t),(0,Cc.default)(e,"prototype",{writable:!1}),e}var rT=q(Pn(),1);function tt(e,r,t){return(r=Di(r))in e?(0,rT.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var tT=q(Tt(),1);var ji="Iterator exhausted before seek ended.",zn=function(){function e(r){rt(this,e),this.chunker=r,tt(this,"currentChunkPosition",0),tt(this,"offsetInChunk",0),this.seekTo(0)}return Wn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,s="";if(this.chunker.precedesCurrentChunk(n))for(;!Gn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=hr(p,2),m=v[0],y=v[1];if(t&&(s=m+s),y===null)throw new RangeError(ji)}else for(;!Gn(this.currentChunk,n);){var c=this._readToNextChunk(),u=hr(c,2),l=u[0],f=u[1];if(t&&(s+=l),f===null)throw new RangeError(ji)}var h=this.currentChunkPosition+a;if(!t)this.seekTo(h);else return h>=this.position?s+=this.readTo(h):h>=o?(this.seekTo(h),s=(0,tT.default)(s).call(s,0,h-o)):(this.seekTo(o),s=this.readTo(h)),s}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,s="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var u=this._readToNextChunk(),l=hr(u,2),f=l[0],p=l[1];if(t&&(s+=f),p===null){if(this.position===n||o)break;throw new RangeError(ji)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(s+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var m=a?0:n-this.currentChunkPosition;t&&(s=this.currentChunk.data.substring(m,this.offsetInChunk)+s),this.offsetInChunk=m;break}else{var y=this._readToPreviousChunk(),h=hr(y,2),w=h[0],b=h[1];if(t&&(s=w+s),b===null){if(o)break;throw new RangeError(ji)}}if(t)return s}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function aT(e,r){return _c.apply(this,arguments)}function _c(){return _c=et(Oc.default.mark(function e(r,t){var n,a,o,s,c,u,l,f,p,v,m,y,h,w,b,x,A,_,E,I,C,P,F=arguments;return Oc.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=F.length>2&&F[2]!==void 0?F[2]:{},a=n.minimalContext,o=a===void 0?!1:a,s=n.minimumQuoteLength,c=s===void 0?0:s,u=n.maxWordLength,l=u===void 0?50:u,f=new zn(t()),p=new zn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),m="",y="",h=function(){return m.length+v.length+y.length},h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-m.length),w=Math.floor((c-h())/2),m=f.read(-w,!1,!0)+m,h()<c&&(f.seekToChunk(r.endChunk,r.endIndex+y.length),b=c-h(),y=y+f.read(b,!1,!0),h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-m.length),x=c-h(),m=f.read(-x,!1,!0)+m))),o||(f.seekToChunk(r.startChunk,r.startIndex-m.length),m=Fi(f,l,!0)+m,f.seekToChunk(r.endChunk,r.endIndex+y.length),y=y+Fi(f,l,!1));case 11:return A={type:"TextQuoteSelector",exact:v,prefix:m,suffix:y},_=$i(A)(t()),k.next=16,_.next();case 16:if(E=k.sent,!(!E.done&&Fw(E.value,r))){k.next=21;break}return k.next=20,_.next();case 20:E=k.sent;case 21:if(!E.done){k.next=23;break}return k.abrupt("return",A);case 23:if(I=E.value,f.seekToChunk(r.startChunk,r.startIndex-m.length),p.seekToChunk(I.startChunk,I.startIndex-m.length),C=nT(f,p,!0),C!==void 0&&!o&&(C=Fi(f,l,!0)+C),f.seekToChunk(r.endChunk,r.endIndex+y.length),p.seekToChunk(I.endChunk,I.endIndex+y.length),P=nT(f,p,!1),P!==void 0&&!o&&(P=P+Fi(f,l,!1)),!o){k.next=44;break}if(!(C!==void 0&&(P===void 0||C.length<=P.length))){k.next=37;break}m=C+m,k.next=42;break;case 37:if(P===void 0){k.next=41;break}y=y+P,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:C!==void 0&&(m=C+m),P!==void 0&&(y=y+P);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),_c.apply(this,arguments)}function nT(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(s){if(!(s instanceof RangeError))throw s}if(a!==o)return n}}function Fi(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(lU(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function lU(e){return/^\s+$/.test(e)}var WT=q(Tt(),1),zT=q(Ba(),1),KT=q(ni(),1),VT=q(ai(),1),YT=q(ii(),1);var Ac=q(Ie(),1),XT=q(OT(),1),JT=q(UT(),1);function GT(e,r){var t;if(typeof KT.default>"u"||(0,VT.default)(e)==null){if(Array.isArray(e)||(t=zU(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,c;return{s:function(){t=(0,YT.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(s)throw c}}}}function zU(e,r){var t;if(e){if(typeof e=="string")return HT(e,r);var n=(0,WT.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,zT.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HT(e,r)}}function HT(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $i(e){return function(){var r=Qe(Ac.default.mark(function n(a){var o,s,c,u,l,f,p,v,m,y,h,w,b,x,A,_,E,I,C,P,F,Re,k,te,be,Y,H;return Ac.default.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:o=e.exact,s=e.prefix||"",c=e.suffix||"",u=s+o+c,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,m=[],y=GT(l),R.prev=10,y.s();case 12:if((h=y.n()).done){R.next=27;break}if(w=h.value,b=w.charactersMatched,w.endChunk===void 0&&(x=s.length+o.length-b,x<=v.length&&(w.endChunk=p,w.endIndex=x)),w.startChunk===void 0&&(A=s.length-b,(A<v.length||w.endChunk!==void 0)&&(w.startChunk=p,w.startIndex=A)),_=u.length-b,!(_<=v.length)){R.next=24;break}if(!(0,XT.default)(v).call(v,u.substring(b))){R.next=22;break}return R.next=22,w;case 22:R.next=25;break;case 24:v===u.substring(b,b+v.length)&&(w.charactersMatched+=v.length,m.push(w));case 25:R.next=12;break;case 27:R.next=32;break;case 29:R.prev=29,R.t0=R.catch(10),y.e(R.t0);case 32:return R.prev=32,y.f(),R.finish(32);case 35:if(l=m,!(u.length<=v.length)){R.next=49;break}E=0;case 38:if(!(E<=v.length)){R.next=49;break}if(I=v.indexOf(u,E),I!==-1){R.next=42;break}return R.abrupt("break",49);case 42:if(E=I+1,!(I===0&&u.length===0&&!f)){R.next=45;break}return R.abrupt("continue",38);case 45:return R.next=47,{startChunk:p,startIndex:I+s.length,endChunk:p,endIndex:I+s.length+o.length};case 47:R.next=38;break;case 49:for(C=[],P=Math.max(v.length-u.length+1,0),F=function(We){var Wt=v[We];C=(0,JT.default)(C).call(C,function(X){return Wt===u[We-X]}),Wt===u[0]&&C.push(We)},Re=P;Re<v.length;Re++)F(Re);k=GT(C);try{for(k.s();!(te=k.n()).done;)be=te.value,Y=v.length-be,H={charactersMatched:Y},Y>=s.length+o.length&&(H.endChunk=p,H.endIndex=be+s.length+o.length),(Y>s.length||H.endChunk!==void 0)&&(H.startChunk=p,H.startIndex=be+s.length),l.push(H)}catch(tr){k.e(tr)}finally{k.f()}f=!1;case 56:if(a.nextChunk()!==null){R.next=6;break}case 57:case"end":return R.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var XU=q(Ie(),1);var KU=q(Tt(),1),VU=q(Tc(),1);var JU=q(Ie(),1);var Yn=q(mC(),1);var yC=q(Si(),1),gC=q(Pn(),1);var Nc=q(Ei(),1),hC=q(Rn(),1);function Pr(e,r){var t;return Pr=Nc.default?(0,hC.default)(t=Nc.default).call(t):function(n,a){return n.__proto__=a,n},Pr(e,r)}function Mc(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,yC.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,gC.default)(e,"prototype",{writable:!1}),r&&Pr(e,r)}function bC(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qC(e,r){if(r&&(yr(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bC(e)}var xC=q(Ei(),1),SC=q(Rn(),1),Lc=q(xi(),1);function nt(e){var r;return nt=xC.default?(0,SC.default)(r=Lc.default).call(r):function(t){return t.__proto__||(0,Lc.default)(t)},nt(e)}var tl=q(KO(),1),m_=q(Si(),1);var u_=q(s_(),1);function c_(e){try{var r;return(0,u_.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var f_=q(Bi(),1),p_=q(gc(),1),d_=q(Rn(),1);var l_=q(Bi(),1);function rl(){try{var e=!Boolean.prototype.valueOf.call((0,l_.default)(Boolean,[],function(){}))}catch{}return(rl=function(){return!!e})()}function v_(e,r,t){if(rl())return f_.default.apply(null,arguments);var n=[null];(0,p_.default)(n).apply(n,r);var a=new((0,d_.default)(e).apply(e,n));return t&&Pr(a,t.prototype),a}function Vn(e){var r=typeof tl.default=="function"?new tl.default:void 0;return Vn=function(n){if(n===null||!c_(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return v_(n,arguments,nt(this).constructor)}return a.prototype=(0,m_.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Pr(a,n)},Vn(e)}function g_(e,r){var t=ke(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(m){return!r||r.intersectsNode(m)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=h_(e.startContainer,e.startOffset),o=hr(a,2),s=o[0],c=o[1];for(n.currentNode=s;c===s.length&&n.nextNode();)s=n.currentNode,c=0;e.setStart(s,c);var u=h_(e.endContainer,e.endOffset),l=hr(u,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function h_(e,r){var t;if(y_(e))return[e,r];var n;if(x5(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(y_(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function y_(e){return e.nodeType===Node.TEXT_NODE}function x5(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function q_(e){var r=S5();return function(){var n=nt(e),a;if(r){var o=nt(this).constructor;a=(0,Yn.default)(n,arguments,o)}else a=n.apply(this,arguments);return qC(this,a)}}function S5(){if(typeof Reflect>"u"||!Yn.default||Yn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,Yn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Vi=function(e){Mc(t,e);var r=q_(t);function t(n){return rt(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(Vn(TypeError)),E5=function(e){Mc(t,e);var r=q_(t);function t(n){return rt(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(Vn(TypeError)),at=function(){function e(r){var t=this;if(rt(this,e),tt(this,"scope",void 0),tt(this,"iter",void 0),this.scope=Rr(r),this.iter=ke(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!b_(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Vi}}return Wn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!b_(t))throw new Vi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new E5;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(s){return s.node===this.node&&s.startOffset===this.startOffset&&s.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=g_(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,s=this.nodeToChunk(n.endContainer),c=n.endOffset-s.startOffset;return{startChunk:a,startIndex:o,endChunk:s,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ke(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function b_(e){return e.nodeType===Node.TEXT_NODE}function x_(e,r){return al.apply(this,arguments)}function al(){return al=et(nl.default.mark(function e(r,t){var n,a,o,s=arguments;return nl.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=s.length>2&&s[2]!==void 0?s[2]:{},a=Rr(t??ke(r)),o=new at(a),u.next=5,aT(o.rangeToChunkRange(r),function(){return new at(a)},n);case 5:return u.abrupt("return",u.sent);case 6:case"end":return u.stop()}},e)})),al.apply(this,arguments)}var il=q(Ie(),1);function S_(e){var r=$i(e);return function(){var t=Qe(il.default.mark(function a(o){var s,c,u,l,f,p,v,m;return il.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,s=new at(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Vi)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:c=!0,u=!1,h.prev=13,f=Bt(r(s));case 15:return h.next=17,kr(f.next());case 17:return p=h.sent,c=p.done,h.next=21,kr(p.value);case 21:if(v=h.sent,c){h.next=29;break}return m=v,h.next=26,s.chunkRangeToRange(m);case 26:c=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),u=!0,l=h.t1;case 35:if(h.prev=35,h.prev=36,!(!c&&f.return!=null)){h.next=40;break}return h.next=40,kr(f.return());case 40:if(h.prev=40,!u){h.next=43;break}throw l;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var w5=q(Ie(),1);var T5=q(Ie(),1);var N5=q(L_(),1),M5=q(Tt(),1),L5=q(Ba(),1),D5=q(ni(),1),j5=q(ai(),1),F5=q(ii(),1);async function D_(e,r){let t=await x_(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Xn(e,r){let t=S_({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Le=q(sl()),Jn=q(sl());function Ut(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return Jn.COLOR_PRESETS[r]?Jn.COLOR_PRESETS[r]:Jn.HEX_COLOR_REGEX.test(r)?r:null}function Yi(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var Gt="fb-highlight",F_="fb-highlight-active",Xi=new Map,Qn=null;function B_(e){Qn=e}function Zn(e,r,t){let n=Ut(t)||Le.DEFAULT_COLOR;Xi.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=$_(e,r,n);a.push(o)}else{let o=H5(e);for(let s=0;s<o.length;s++){let c=o[s],u=document.createRange();c===e.startContainer?(u.setStart(c,e.startOffset),u.setEnd(c,c.textContent.length)):c===e.endContainer?(u.setStart(c,0),u.setEnd(c,e.endOffset)):u.selectNodeContents(c),u.collapsed||a.push($_(u,r,n))}}return a}function $_(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,s=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(s=a),a=a.parentElement}if(o&&s)return G5(e,r,s,t);let c=document.createElement("mark");c.className=Gt,c.dataset.commentId=r,c.style.backgroundColor=Yi(t,.35),c.style.cursor="pointer",c.style.borderRadius="2px",c.addEventListener("click",()=>{Qn&&Qn(r)});try{e.surroundContents(c)}catch(u){return console.warn("[feedback-layer] Failed to create highlight:",u),null}return c}function G5(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",s=t.getScreenCTM();if(!s)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let c=e.commonAncestorContainer;for(;c&&c.nodeType!==Node.ELEMENT_NODE;)c=c.parentNode;let u=c,l=null;for(;u&&u!==t;){if(u.tagName==="text"){l=u.parentElement;break}u=u.parentElement}let f=l||t,p=s;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",Gt),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let b=0;b<a.length;b++){let x=a[b],A=document.createElementNS(o,"rect"),_=t.createSVGPoint();_.x=x.left,_.y=x.top;let E=_.matrixTransform(p.inverse()),I=x.width/p.a,C=x.height/p.d;A.setAttribute("x",E.x),A.setAttribute("y",E.y),A.setAttribute("width",I),A.setAttribute("height",C),A.setAttribute("fill",n),A.setAttribute("fill-opacity","0.35"),A.setAttribute("rx","2"),A.setAttribute("ry","2"),A.style.pointerEvents="none",v.appendChild(A)}f&&f!==t?f.appendChild(v):t.appendChild(v);let m=e.commonAncestorContainer;for(;m&&m.nodeType!==Node.ELEMENT_NODE;)m=m.parentNode;let y=new Set,h=m;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(y.add(h),h.querySelectorAll("tspan").forEach(x=>y.add(x))),h=h.parentElement;let w=b=>{b.preventDefault(),b.stopPropagation(),Qn&&Qn(r)};return y.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",w),b.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function Ji(e){Xi.delete(e),document.querySelectorAll(`.${Gt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function U_(){Xi.clear(),document.querySelectorAll(`.${Gt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function ea(e){document.querySelectorAll(`.${Gt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=Xi.get(t)||Le.DEFAULT_COLOR,o=Yi(a,.55),s=Yi(a,.35);n?r.classList.add(F_):r.classList.remove(F_),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",a),u.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:s})}function ul(e){let r=document.querySelector(`.${Gt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function H5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function G_(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let s=t.get(n.id)||[];for(let c of s)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function H_(e,r){let t=G_(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}var W5=`
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
`,W_=null,z_=null;function K_(e,r){z_=e,W_=r,z5()}function z5(){let e=document.createElement("style");e.textContent=W5,document.head.appendChild(e)}function V_(){let e=W_(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header";let a=document.createElement("h2");a.textContent="Send Feedback to Claude",n.appendChild(a);let o=document.createElement("button");o.className="hf-modal-close",o.textContent="\xD7",o.addEventListener("click",()=>r.remove()),n.appendChild(o);let s=document.createElement("div");s.className="hf-modal-body";let c=document.createElement("div");if(c.className="hf-modal-footer",t.append(n,s,c),r.appendChild(t),r.addEventListener("click",y=>{y.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){let y=document.createElement("div");y.className="hf-status hf-status-info",y.textContent="No comments yet. Ask reviewers to highlight text and add comments first.",s.appendChild(y);return}let u=document.querySelector(z_.contentSelector||"body").innerHTML,l=H_(u,e),f=document.createElement("div");f.className="hf-status hf-status-success",f.textContent=`${e.length} comment(s) found \u2014 prompt ready (${l.length.toLocaleString()} chars)`,s.appendChild(f);let p=document.createElement("textarea");p.className="hf-prompt-area",p.readOnly=!0,p.value=l,s.appendChild(p);let v=document.createElement("button");v.className="hf-btn hf-btn-primary",v.textContent="Copy Prompt",v.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l),v.textContent="Copied!"}catch{v.textContent="Copy failed"}setTimeout(()=>v.textContent="Copy Prompt",2e3)}),c.appendChild(v);let m=document.createElement("button");m.className="hf-btn hf-btn-secondary",m.textContent="Close",m.addEventListener("click",()=>r.remove()),c.appendChild(m)}function Y_(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K5(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function cl(e){if(!e)return"";let r=Y_(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,a)=>{let o=t.length;return t.push(`<code>${a}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/__(.+?)__/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,a,o)=>{let s=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return K5(s)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${a}</a>`:a}),r=r.replace(/\x01(\d+)\x02/g,(n,a)=>t[a]),r=r.replace(/\n/g,"<br>"),r}var{entries:a0,setPrototypeOf:X_,isFrozen:V5,getPrototypeOf:Y5,getOwnPropertyDescriptor:X5}=Object,{freeze:ye,seal:De,create:hl}=Object,{apply:yl,construct:gl}=typeof Reflect<"u"&&Reflect;ye||(ye=function(r){return r});De||(De=function(r){return r});yl||(yl=function(r,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return r.apply(t,a)});gl||(gl=function(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return new r(...n)});var Qi=ge(Array.prototype.forEach),J5=ge(Array.prototype.lastIndexOf),J_=ge(Array.prototype.pop),ra=ge(Array.prototype.push),Q5=ge(Array.prototype.splice),eo=ge(String.prototype.toLowerCase),ll=ge(String.prototype.toString),fl=ge(String.prototype.match),ta=ge(String.prototype.replace),Z5=ge(String.prototype.indexOf),eW=ge(String.prototype.trim),Ge=ge(Object.prototype.hasOwnProperty),he=ge(RegExp.prototype.test),na=rW(TypeError);function ge(e){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return yl(e,r,n)}}function rW(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return gl(e,t)}}function N(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:eo;X_&&X_(e,null);let n=r.length;for(;n--;){let a=r[n];if(typeof a=="string"){let o=t(a);o!==a&&(V5(r)||(r[n]=o),a=o)}e[a]=!0}return e}function tW(e){for(let r=0;r<e.length;r++)Ge(e,r)||(e[r]=null);return e}function er(e){let r=hl(null);for(let[t,n]of a0(e))Ge(e,t)&&(Array.isArray(n)?r[t]=tW(n):n&&typeof n=="object"&&n.constructor===Object?r[t]=er(n):r[t]=n);return r}function aa(e,r){for(;e!==null;){let n=X5(e,r);if(n){if(n.get)return ge(n.get);if(typeof n.value=="function")return ge(n.value)}e=Y5(e)}function t(){return null}return t}var Q_=ye(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pl=ye(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),dl=ye(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nW=ye(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),vl=ye(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),aW=ye(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Z_=ye(["#text"]),e0=ye(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ml=ye(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),r0=ye(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zi=ye(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),iW=De(/\{\{[\w\W]*|[\w\W]*\}\}/gm),oW=De(/<%[\w\W]*|[\w\W]*%>/gm),sW=De(/\$\{[\w\W]*/gm),uW=De(/^data-[\-\w.\u00B7-\uFFFF]+$/),cW=De(/^aria-[\-\w]+$/),i0=De(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),lW=De(/^(?:\w+script|data):/i),fW=De(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),o0=De(/^html$/i),pW=De(/^[a-z][.\w]*(-[.\w]+)+$/i),t0=Object.freeze({__proto__:null,ARIA_ATTR:cW,ATTR_WHITESPACE:fW,CUSTOM_ELEMENT:pW,DATA_ATTR:uW,DOCTYPE_NAME:o0,ERB_EXPR:oW,IS_ALLOWED_URI:i0,IS_SCRIPT_OR_DATA:lW,MUSTACHE_EXPR:iW,TMPLIT_EXPR:sW}),ia={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},dW=function(){return typeof window>"u"?null:window},vW=function(r,t){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let n=null,a="data-tt-policy-suffix";t&&t.hasAttribute(a)&&(n=t.getAttribute(a));let o="dompurify"+(n?"#"+n:"");try{return r.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},n0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function s0(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dW(),r=O=>s0(O);if(r.version="3.3.1",r.removed=[],!e||!e.document||e.document.nodeType!==ia.document||!e.Element)return r.isSupported=!1,r;let{document:t}=e,n=t,a=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:c,Element:u,NodeFilter:l,NamedNodeMap:f=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:v,trustedTypes:m}=e,y=u.prototype,h=aa(y,"cloneNode"),w=aa(y,"remove"),b=aa(y,"nextSibling"),x=aa(y,"childNodes"),A=aa(y,"parentNode");if(typeof s=="function"){let O=t.createElement("template");O.content&&O.content.ownerDocument&&(t=O.content.ownerDocument)}let _,E="",{implementation:I,createNodeIterator:C,createDocumentFragment:P,getElementsByTagName:F}=t,{importNode:Re}=n,k=n0();r.isSupported=typeof a0=="function"&&typeof A=="function"&&I&&I.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:be,TMPLIT_EXPR:Y,DATA_ATTR:H,ARIA_ATTR:Ce,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:tr,CUSTOM_ELEMENT:We}=t0,{IS_ALLOWED_URI:Wt}=t0,X=null,Ll=N({},[...Q_,...pl,...dl,...vl,...Z_]),ue=null,Dl=N({},[...e0,...ml,...r0,...Zi]),z=Object.seal(hl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),zt=null,io=null,st=Object.seal(hl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),jl=!0,oo=!0,Fl=!1,$l=!0,ut=!1,da=!0,Nr=!1,so=!1,uo=!1,ct=!1,va=!1,ma=!1,Bl=!0,Ul=!1,A0="user-content-",co=!0,Kt=!1,lt={},ze=null,lo=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gl=null,Hl=N({},["audio","video","img","source","image","track"]),fo=null,Wl=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ha="http://www.w3.org/1998/Math/MathML",ya="http://www.w3.org/2000/svg",nr="http://www.w3.org/1999/xhtml",ft=nr,po=!1,vo=null,R0=N({},[ha,ya,nr],ll),ga=N({},["mi","mo","mn","ms","mtext"]),ba=N({},["annotation-xml"]),P0=N({},["title","style","font","a","script"]),Vt=null,N0=["application/xhtml+xml","text/html"],M0="text/html",ee=null,pt=null,L0=t.createElement("form"),zl=function(d){return d instanceof RegExp||d instanceof Function},mo=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(pt&&pt===d)){if((!d||typeof d!="object")&&(d={}),d=er(d),Vt=N0.indexOf(d.PARSER_MEDIA_TYPE)===-1?M0:d.PARSER_MEDIA_TYPE,ee=Vt==="application/xhtml+xml"?ll:eo,X=Ge(d,"ALLOWED_TAGS")?N({},d.ALLOWED_TAGS,ee):Ll,ue=Ge(d,"ALLOWED_ATTR")?N({},d.ALLOWED_ATTR,ee):Dl,vo=Ge(d,"ALLOWED_NAMESPACES")?N({},d.ALLOWED_NAMESPACES,ll):R0,fo=Ge(d,"ADD_URI_SAFE_ATTR")?N(er(Wl),d.ADD_URI_SAFE_ATTR,ee):Wl,Gl=Ge(d,"ADD_DATA_URI_TAGS")?N(er(Hl),d.ADD_DATA_URI_TAGS,ee):Hl,ze=Ge(d,"FORBID_CONTENTS")?N({},d.FORBID_CONTENTS,ee):lo,zt=Ge(d,"FORBID_TAGS")?N({},d.FORBID_TAGS,ee):er({}),io=Ge(d,"FORBID_ATTR")?N({},d.FORBID_ATTR,ee):er({}),lt=Ge(d,"USE_PROFILES")?d.USE_PROFILES:!1,jl=d.ALLOW_ARIA_ATTR!==!1,oo=d.ALLOW_DATA_ATTR!==!1,Fl=d.ALLOW_UNKNOWN_PROTOCOLS||!1,$l=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ut=d.SAFE_FOR_TEMPLATES||!1,da=d.SAFE_FOR_XML!==!1,Nr=d.WHOLE_DOCUMENT||!1,ct=d.RETURN_DOM||!1,va=d.RETURN_DOM_FRAGMENT||!1,ma=d.RETURN_TRUSTED_TYPE||!1,uo=d.FORCE_BODY||!1,Bl=d.SANITIZE_DOM!==!1,Ul=d.SANITIZE_NAMED_PROPS||!1,co=d.KEEP_CONTENT!==!1,Kt=d.IN_PLACE||!1,Wt=d.ALLOWED_URI_REGEXP||i0,ft=d.NAMESPACE||nr,ga=d.MATHML_TEXT_INTEGRATION_POINTS||ga,ba=d.HTML_INTEGRATION_POINTS||ba,z=d.CUSTOM_ELEMENT_HANDLING||{},d.CUSTOM_ELEMENT_HANDLING&&zl(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&zl(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ut&&(oo=!1),va&&(ct=!0),lt&&(X=N({},Z_),ue=[],lt.html===!0&&(N(X,Q_),N(ue,e0)),lt.svg===!0&&(N(X,pl),N(ue,ml),N(ue,Zi)),lt.svgFilters===!0&&(N(X,dl),N(ue,ml),N(ue,Zi)),lt.mathMl===!0&&(N(X,vl),N(ue,r0),N(ue,Zi))),d.ADD_TAGS&&(typeof d.ADD_TAGS=="function"?st.tagCheck=d.ADD_TAGS:(X===Ll&&(X=er(X)),N(X,d.ADD_TAGS,ee))),d.ADD_ATTR&&(typeof d.ADD_ATTR=="function"?st.attributeCheck=d.ADD_ATTR:(ue===Dl&&(ue=er(ue)),N(ue,d.ADD_ATTR,ee))),d.ADD_URI_SAFE_ATTR&&N(fo,d.ADD_URI_SAFE_ATTR,ee),d.FORBID_CONTENTS&&(ze===lo&&(ze=er(ze)),N(ze,d.FORBID_CONTENTS,ee)),d.ADD_FORBID_CONTENTS&&(ze===lo&&(ze=er(ze)),N(ze,d.ADD_FORBID_CONTENTS,ee)),co&&(X["#text"]=!0),Nr&&N(X,["html","head","body"]),X.table&&(N(X,["tbody"]),delete zt.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw na('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw na('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=d.TRUSTED_TYPES_POLICY,E=_.createHTML("")}else _===void 0&&(_=vW(m,a)),_!==null&&typeof E=="string"&&(E=_.createHTML(""));ye&&ye(d),pt=d}},Kl=N({},[...pl,...dl,...nW]),Vl=N({},[...vl,...aW]),D0=function(d){let g=A(d);(!g||!g.tagName)&&(g={namespaceURI:ft,tagName:"template"});let T=eo(d.tagName),$=eo(g.tagName);return vo[d.namespaceURI]?d.namespaceURI===ya?g.namespaceURI===nr?T==="svg":g.namespaceURI===ha?T==="svg"&&($==="annotation-xml"||ga[$]):!!Kl[T]:d.namespaceURI===ha?g.namespaceURI===nr?T==="math":g.namespaceURI===ya?T==="math"&&ba[$]:!!Vl[T]:d.namespaceURI===nr?g.namespaceURI===ya&&!ba[$]||g.namespaceURI===ha&&!ga[$]?!1:!Vl[T]&&(P0[T]||!Kl[T]):!!(Vt==="application/xhtml+xml"&&vo[d.namespaceURI]):!1},Ke=function(d){ra(r.removed,{element:d});try{A(d).removeChild(d)}catch{w(d)}},Mr=function(d,g){try{ra(r.removed,{attribute:g.getAttributeNode(d),from:g})}catch{ra(r.removed,{attribute:null,from:g})}if(g.removeAttribute(d),d==="is")if(ct||va)try{Ke(g)}catch{}else try{g.setAttribute(d,"")}catch{}},Yl=function(d){let g=null,T=null;if(uo)d="<remove></remove>"+d;else{let J=fl(d,/^[\r\n\t ]+/);T=J&&J[0]}Vt==="application/xhtml+xml"&&ft===nr&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let $=_?_.createHTML(d):d;if(ft===nr)try{g=new v().parseFromString($,Vt)}catch{}if(!g||!g.documentElement){g=I.createDocument(ft,"template",null);try{g.documentElement.innerHTML=po?E:$}catch{}}let de=g.body||g.documentElement;return d&&T&&de.insertBefore(t.createTextNode(T),de.childNodes[0]||null),ft===nr?F.call(g,Nr?"html":"body")[0]:Nr?g.documentElement:de},Xl=function(d){return C.call(d.ownerDocument||d,d,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},ho=function(d){return d instanceof p&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof f)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},Jl=function(d){return typeof c=="function"&&d instanceof c};function ar(O,d,g){Qi(O,T=>{T.call(r,d,g,pt)})}let Ql=function(d){let g=null;if(ar(k.beforeSanitizeElements,d,null),ho(d))return Ke(d),!0;let T=ee(d.nodeName);if(ar(k.uponSanitizeElement,d,{tagName:T,allowedTags:X}),da&&d.hasChildNodes()&&!Jl(d.firstElementChild)&&he(/<[/\w!]/g,d.innerHTML)&&he(/<[/\w!]/g,d.textContent)||d.nodeType===ia.progressingInstruction||da&&d.nodeType===ia.comment&&he(/<[/\w]/g,d.data))return Ke(d),!0;if(!(st.tagCheck instanceof Function&&st.tagCheck(T))&&(!X[T]||zt[T])){if(!zt[T]&&ef(T)&&(z.tagNameCheck instanceof RegExp&&he(z.tagNameCheck,T)||z.tagNameCheck instanceof Function&&z.tagNameCheck(T)))return!1;if(co&&!ze[T]){let $=A(d)||d.parentNode,de=x(d)||d.childNodes;if(de&&$){let J=de.length;for(let qe=J-1;qe>=0;--qe){let ir=h(de[qe],!0);ir.__removalCount=(d.__removalCount||0)+1,$.insertBefore(ir,b(d))}}}return Ke(d),!0}return d instanceof u&&!D0(d)||(T==="noscript"||T==="noembed"||T==="noframes")&&he(/<\/no(script|embed|frames)/i,d.innerHTML)?(Ke(d),!0):(ut&&d.nodeType===ia.text&&(g=d.textContent,Qi([te,be,Y],$=>{g=ta(g,$," ")}),d.textContent!==g&&(ra(r.removed,{element:d.cloneNode()}),d.textContent=g)),ar(k.afterSanitizeElements,d,null),!1)},Zl=function(d,g,T){if(Bl&&(g==="id"||g==="name")&&(T in t||T in L0))return!1;if(!(oo&&!io[g]&&he(H,g))){if(!(jl&&he(Ce,g))){if(!(st.attributeCheck instanceof Function&&st.attributeCheck(g,d))){if(!ue[g]||io[g]){if(!(ef(d)&&(z.tagNameCheck instanceof RegExp&&he(z.tagNameCheck,d)||z.tagNameCheck instanceof Function&&z.tagNameCheck(d))&&(z.attributeNameCheck instanceof RegExp&&he(z.attributeNameCheck,g)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(g,d))||g==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&he(z.tagNameCheck,T)||z.tagNameCheck instanceof Function&&z.tagNameCheck(T))))return!1}else if(!fo[g]){if(!he(Wt,ta(T,tr,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&d!=="script"&&Z5(T,"data:")===0&&Gl[d])){if(!(Fl&&!he(R,ta(T,tr,"")))){if(T)return!1}}}}}}}return!0},ef=function(d){return d!=="annotation-xml"&&fl(d,We)},rf=function(d){ar(k.beforeSanitizeAttributes,d,null);let{attributes:g}=d;if(!g||ho(d))return;let T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ue,forceKeepAttr:void 0},$=g.length;for(;$--;){let de=g[$],{name:J,namespaceURI:qe,value:ir}=de,dt=ee(J),yo=ir,ce=J==="value"?yo:eW(yo);if(T.attrName=dt,T.attrValue=ce,T.keepAttr=!0,T.forceKeepAttr=void 0,ar(k.uponSanitizeAttribute,d,T),ce=T.attrValue,Ul&&(dt==="id"||dt==="name")&&(Mr(J,d),ce=A0+ce),da&&he(/((--!?|])>)|<\/(style|title|textarea)/i,ce)){Mr(J,d);continue}if(dt==="attributename"&&fl(ce,"href")){Mr(J,d);continue}if(T.forceKeepAttr)continue;if(!T.keepAttr){Mr(J,d);continue}if(!$l&&he(/\/>/i,ce)){Mr(J,d);continue}ut&&Qi([te,be,Y],nf=>{ce=ta(ce,nf," ")});let tf=ee(d.nodeName);if(!Zl(tf,dt,ce)){Mr(J,d);continue}if(_&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!qe)switch(m.getAttributeType(tf,dt)){case"TrustedHTML":{ce=_.createHTML(ce);break}case"TrustedScriptURL":{ce=_.createScriptURL(ce);break}}if(ce!==yo)try{qe?d.setAttributeNS(qe,J,ce):d.setAttribute(J,ce),ho(d)?Ke(d):J_(r.removed)}catch{Mr(J,d)}}ar(k.afterSanitizeAttributes,d,null)},j0=function O(d){let g=null,T=Xl(d);for(ar(k.beforeSanitizeShadowDOM,d,null);g=T.nextNode();)ar(k.uponSanitizeShadowNode,g,null),Ql(g),rf(g),g.content instanceof o&&O(g.content);ar(k.afterSanitizeShadowDOM,d,null)};return r.sanitize=function(O){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=null,T=null,$=null,de=null;if(po=!O,po&&(O="<!-->"),typeof O!="string"&&!Jl(O))if(typeof O.toString=="function"){if(O=O.toString(),typeof O!="string")throw na("dirty is not a string, aborting")}else throw na("toString is not a function");if(!r.isSupported)return O;if(so||mo(d),r.removed=[],typeof O=="string"&&(Kt=!1),Kt){if(O.nodeName){let ir=ee(O.nodeName);if(!X[ir]||zt[ir])throw na("root node is forbidden and cannot be sanitized in-place")}}else if(O instanceof c)g=Yl("<!---->"),T=g.ownerDocument.importNode(O,!0),T.nodeType===ia.element&&T.nodeName==="BODY"||T.nodeName==="HTML"?g=T:g.appendChild(T);else{if(!ct&&!ut&&!Nr&&O.indexOf("<")===-1)return _&&ma?_.createHTML(O):O;if(g=Yl(O),!g)return ct?null:ma?E:""}g&&uo&&Ke(g.firstChild);let J=Xl(Kt?O:g);for(;$=J.nextNode();)Ql($),rf($),$.content instanceof o&&j0($.content);if(Kt)return O;if(ct){if(va)for(de=P.call(g.ownerDocument);g.firstChild;)de.appendChild(g.firstChild);else de=g;return(ue.shadowroot||ue.shadowrootmode)&&(de=Re.call(n,de,!0)),de}let qe=Nr?g.outerHTML:g.innerHTML;return Nr&&X["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&he(o0,g.ownerDocument.doctype.name)&&(qe="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+qe),ut&&Qi([te,be,Y],ir=>{qe=ta(qe,ir," ")}),_&&ma?_.createHTML(qe):qe},r.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mo(O),so=!0},r.clearConfig=function(){pt=null,so=!1},r.isValidAttribute=function(O,d,g){pt||mo({});let T=ee(O),$=ee(d);return Zl(T,$,g)},r.addHook=function(O,d){typeof d=="function"&&ra(k[O],d)},r.removeHook=function(O,d){if(d!==void 0){let g=J5(k[O],d);return g===-1?void 0:Q5(k[O],g,1)[0]}return J_(k[O])},r.removeHooks=function(O){k[O]=[]},r.removeAllHooks=function(){k=n0()},r}var u0=s0();function bl(e){return u0.sanitize(e)}function c0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function ql(e,r){return e.length>r?e.slice(0,r)+"...":e}function l0(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var oa=null;function p0(e){oa=document.createElement("div"),oa.className="fb-toast-container",e.appendChild(oa)}function br(e,r="success"){if(!oa)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.textContent="\xD7",o.addEventListener("click",()=>f0(t)),t.appendChild(o)}oa.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>f0(t),r==="error"?8e3:4e3)}function f0(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function d0(e,r){return r<=0?0:(e%r+r)%r}var ro=q(h0());function Ol(e){let r=e.closest(".fb-sidebar-content")||e.closest(".fb-sidebar")||e.parentElement;if(!r||r.scrollHeight<=r.clientHeight)return;let t=e.getBoundingClientRect(),n=r.getBoundingClientRect(),a=t.top-n.top+r.scrollTop,o=a+e.offsetHeight,s=r.scrollTop,c=s+r.clientHeight;a<s?r.scrollTo({top:a,behavior:"smooth"}):o>c&&r.scrollTo({top:o-r.clientHeight,behavior:"smooth"})}var hW=320,b0="feedback-layer-commenter",V=null,Fe=null,je=null,xl=null,q0=null,Sl=null,El=null,wl=null,Tl=null,ca=null,yW=null,_l=null,x0=!1,S0=[],Il=new Set,rr=-1,sa=null,y0=!1;function gW(){y0||(y0=!0,_W())}function qr(){return localStorage.getItem(b0)||""}function E0({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:s,defaultColor:c}){q0=e,Sl=r,El=t,wl=n,Tl=a,ca=o,yW=s,_l=c||null,gW(),V=document.createElement("div"),V.className="fb-sidebar fb-sidebar-collapsed",V.setAttribute("role","complementary"),V.setAttribute("aria-label","Feedback sidebar"),V.innerHTML=`
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
        <input type="text" class="fb-name-input" placeholder="Enter your name...">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>Ht()),document.body.appendChild(u),document.body.appendChild(V),p0(V),Fe=V.querySelector(".fb-comment-list"),Fe.setAttribute("role","list"),je=V.querySelector(".fb-form-section");let l=V.querySelector(".fb-name-input");l.value=qr(),l.addEventListener("input",()=>{localStorage.setItem(b0,l.value.trim())}),V.querySelector(".fb-ai-btn").addEventListener("click",()=>V_()),V.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>T0()),V.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>kl());let m=V.querySelector(".fb-show-resolved-cb");m.addEventListener("change",()=>{x0=m.checked,Ae(S0,Il)}),document.addEventListener("keydown",qW)}function Ht(){V.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),SW()}function kl(){V.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),C0(),rr=-1,document.body.focus()}function w0(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function ua(){return Fe?Array.from(Fe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function Cl(e){let r=ua();if(r.length===0)return;e=d0(e,r.length),rr=e,Fe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),Ol(t);let n=t.closest(".fb-thread");n?.dataset.commentId&&Il.has(n.dataset.commentId)&&(ea(n.dataset.commentId),ul(n.dataset.commentId))}function bW(e){if(V.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),kl();return}if(!w0()){if(r==="Enter"){let t=ua();if(rr>=0&&rr<t.length){e.preventDefault();let a=t[rr].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),ua().length===0)return;let n=rr<0?0:rr+1;Cl(n);return}if(r==="k"){e.preventDefault();let t=ua();if(t.length===0)return;let n=rr<0?t.length-1:rr-1;Cl(n);return}r==="?"&&(e.preventDefault(),T0())}}function T0(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function qW(e){w0()||e.key==="s"&&(e.preventDefault(),xW())}function xW(){V.classList.contains("fb-sidebar-collapsed")?Ht():kl()}function SW(){C0(),sa=bW,document.addEventListener("keydown",sa)}function C0(){sa&&(document.removeEventListener("keydown",sa),sa=null)}function O0(e){if(Ht(),!qr()){let s=V.querySelector(".fb-name-input");s.classList.add("fb-name-input-error"),setTimeout(()=>s.classList.remove("fb-name-input-error"),2e3)}xl=e,je.style.display="";let r=Object.entries(Le.COLOR_PRESETS),t=_l||Le.DEFAULT_COLOR;je.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote"></div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
      <div class="fb-color-picker">
        <label class="fb-color-label">Color</label>
        <div class="fb-color-swatches">
          ${r.map(([s,c])=>`<button type="button" class="fb-color-swatch${c===t?" fb-color-swatch-active":""}" data-color="${c}" title="${s}" style="background:${c};"></button>`).join("")}
        </div>
      </div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `,je.querySelector(".fb-form-quote").textContent=`\u201C${ql(e,120)}\u201D`;let n=t;je.querySelectorAll(".fb-color-swatch").forEach(s=>{s.addEventListener("click",c=>{c.preventDefault(),je.querySelectorAll(".fb-color-swatch").forEach(u=>u.classList.remove("fb-color-swatch-active")),s.classList.add("fb-color-swatch-active"),n=s.dataset.color})});let a=je.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!qr()){let c=V.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.value.trim();s&&(q0({comment:s,commenter:qr(),color:n}),je.style.display="none",xl=null)};je.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),je.querySelector(".fb-cancel-btn").addEventListener("click",()=>{je.style.display="none",xl=null}),Ol(je)}function Ae(e,r=new Set,t=new Map){S0=e,Il=r,rr=-1,Fe.replaceChildren();let{topLevel:n,repliesByParent:a}=c0(e),o=[],s=[];for(let l of n)r.has(l.id)?o.push(l):s.push(l);o.sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)});let c=[...o,...s],u=x0?c:c.filter(l=>l.status!=="closed");if(c.length===0){let l=document.createElement("div");l.className="fb-empty",l.textContent="No comments yet. Select text to add one.",Fe.appendChild(l);return}if(u.length===0){let l=document.createElement("div");l.className="fb-empty",l.textContent=`All ${c.length} comment(s) resolved. Check \u201CShow closed\u201D to see them.`,Fe.appendChild(l);return}for(let l of u){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(g0(l,!1,f));let v=a.get(l.id)||[];for(let y of v)p.appendChild(g0(y,!0));let m=document.createElement("button");m.className="fb-reply-btn",m.textContent="Reply",m.addEventListener("click",y=>{y.stopPropagation(),CW(l.id,p,m)}),p.appendChild(m),p.addEventListener("focus",()=>{let h=ua().indexOf(p.querySelector(".fb-cmt-card"));h>=0&&Cl(h)}),Fe.appendChild(p)}}function g0(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");if(a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id,t&&e.quote){let m=document.createElement("div");m.className="fb-cmt-orphaned-quote",m.textContent=`Content Deleted: \u201C${ql(e.quote,120)}\u201D`,a.appendChild(m)}let o=document.createElement("div");o.className="fb-cmt-body",o.innerHTML=bl(cl(e.body)),a.appendChild(o);let s=document.createElement("div");s.className="fb-cmt-meta";let c=document.createElement("span");c.className="fb-cmt-author",c.textContent=e.author,s.appendChild(c);let u=document.createElement("span");u.className="fb-cmt-time",u.textContent=l0(e.created_at),s.appendChild(u);let l=document.createElement("button");l.className="fb-cmt-edit",l.title="Edit",l.textContent="\u270E",s.appendChild(l);let f=null;r||(f=document.createElement("button"),f.className="fb-cmt-resolve",f.title=n?"Reopen":"Resolve",f.textContent=n?"\u21A9":"\u2713",s.appendChild(f));let p=document.createElement("button");p.className="fb-cmt-delete",p.title="Delete",p.textContent="\xD7",s.appendChild(p),a.appendChild(s);let v=document.createElement("div");return v.className="fb-reactions",a.appendChild(v),wW(v,e),r||(a.addEventListener("click",m=>{m.target.closest(".fb-cmt-delete")||m.target.closest(".fb-cmt-resolve")||m.target.closest(".fb-cmt-edit")||m.target.closest(".fb-reactions")||(t||(ea(e.id),ul(e.id)),Fe.querySelectorAll(".fb-cmt-card").forEach(y=>y.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),f.addEventListener("click",m=>{m.stopPropagation(),El&&El(e.id,!n)})),l.addEventListener("click",m=>{m.stopPropagation(),OW(e,a)}),p.addEventListener("click",m=>{m.stopPropagation(),Sl&&Sl(e.id)}),a}var Al=ro.ALLOWED_REACTIONS,EW=Object.keys(Al);function wW(e,r){let t=r.reactions||[],n=qr();for(let o of t){let s=document.createElement("button");s.className="fb-reaction-badge",n&&o.authors.includes(n)&&s.classList.add("fb-reaction-mine");let u=Al[o.emoji];s.append(document.createTextNode(o.emoji));let l=document.createElement("span");l.className="fb-reaction-count",l.textContent=o.count,s.appendChild(l),s.title=(u?u+": ":"")+o.authors.join(", "),s.addEventListener("click",f=>{f.stopPropagation(),ca&&ca(r.id,o.emoji)}),e.appendChild(s)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),TW(e,r,a)}),e.appendChild(a)}function TW(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let s of EW){let c=Al[s],u=document.createElement("button");u.className="fb-emoji-option",u.textContent=s,u.title=c,u.addEventListener("click",l=>{l.stopPropagation(),a.remove(),ca&&ca(r.id,s)}),a.appendChild(u)}e.insertBefore(a,t.nextSibling);let o=s=>{!a.contains(s.target)&&s.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function CW(e,r,t){Ht();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!qr()){let u=V.querySelector(".fb-name-input");u.focus(),u.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>u.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(wl&&wl({parent_id:e,comment:c,commenter:qr()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let s=a.querySelector("textarea");s.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),s.focus()}function OW(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=Ut(e.color)||_l||Le.DEFAULT_COLOR,s=Object.entries(Le.COLOR_PRESETS);t.innerHTML=`
    ${a?`<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${s.map(([f,p])=>`<button type="button" class="fb-color-swatch${p===o?" fb-color-swatch-active":""}" data-color="${p}" title="${f}" style="background:${p};"></button>`).join("")}
      </div>
    </div>`:""}
    <textarea class="fb-form-textarea" rows="3"></textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let c=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),c=f.dataset.color})});let u=t.querySelector("textarea");u.value=n,u.focus(),u.setSelectionRange(u.value.length,u.value.length);let l=()=>{let f=u.value.trim();if(!f)return;let p=a&&c!==o;Tl&&Tl(e.id,f,p?c:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),u.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=bl(cl(n))})}function _0(e){let r=Fe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Fe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),Ol(r))}function _W(){let e=document.createElement("style");e.textContent=`
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
      width: ${hW}px;
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
  `,document.head.appendChild(e)}function I0(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}function IW(e){let r=new URL(e);return r.protocol=r.protocol==="https:"?"wss:":"ws:",r.pathname="/ws",r.toString()}function Rl({apiBaseUrl:e,documentId:r,onEvent:t}){let n=IW(e),a=null,o=1e3,s=null,c=!1,u=!1;function l(){if(!c){u=!1;try{a=new WebSocket(n)}catch{f();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=p=>{try{let v=JSON.parse(p.data);if(v.type==="subscribed"&&v.documentId===r){u=!0;return}u&&t(v)}catch{}},a.onclose=()=>{u=!1,c||f()},a.onerror=()=>{}}}function f(){c||(s=setTimeout(()=>{l()},o),o=Math.min(o*2,3e4))}return l(),{close(){c=!0,clearTimeout(s),a&&(a.onclose=null,a.close())}}}var ot=null,no=null,pa=null,Nl=null,M=[],it=null,He=null,Z=new Set,re=new Map,la=null,to=null;function Ml(e){return M.some(r=>r.id===e.id)?!1:(M.push(e),!0)}function kW(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};of(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{I0(),ot=document.querySelector(r.contentSelector)||document.body,no=r.documentUri||window.location.origin+window.location.pathname,pa=r.documentId||null,Nl=Ut(r.defaultColor)||null,to=r.apiUrl||window.location.origin,document.documentElement.dataset.remarqTheme=r.theme,E0({onSubmit:MW,onDelete:WW,onResolve:LW,onReply:DW,onEdit:jW,onReaction:$W,onColorChange:FW,defaultColor:Nl}),B_(a=>{Ht(),_0(a),ea(a)}),PW(),await t(),await AW();{let a=pa||(M.length>0?M[0].document:null);a&&(la=Rl({apiBaseUrl:to,documentId:a,onEvent:k0}))}window.addEventListener("beforeunload",()=>{la&&la.close()}),K_(r,()=>M)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function AW(){try{M=await sf(no,pa),Z=await RW(M),Ae(M,Z,re)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),br(`Failed to load comments: ${e.message}`,"error")}}async function RW(e){U_();let r=new Set;re.clear();for(let t of e)if(!t.parent)try{let n=await Xn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Zn(n,t.id,t.color),r.add(t.id),re.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),re.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function PW(){document.addEventListener("mouseup",Pl),document.addEventListener("keyup",Pl),document.addEventListener("touchend",Pl)}function Pl(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){fa();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){fa();return}if(!ot.contains(r.commonAncestorContainer)){fa();return}NW(r)},10)}function NW(e){fa();let r=e.getBoundingClientRect();He=document.createElement("button"),He.className="fb-annotate-tooltip",He.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',He.style.top=window.scrollY+r.bottom+8+"px",He.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{it=await D_(o,ot),O0(it.exact)}catch(s){console.error("[feedback-layer] Failed to create selector:",s)}fa()};He.addEventListener("mousedown",t),He.addEventListener("touchstart",t),document.body.appendChild(He)}function fa(){He&&(He.remove(),He=null)}async function MW({comment:e,commenter:r,color:t}){if(!it)return;let n=t||Nl||null;try{let a=await go({uri:no,document:pa,quote:it.exact,prefix:it.prefix,suffix:it.suffix,body:e,author:r,color:n});Ml(a);let o=await Xn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},ot);o&&(Zn(o,a.id,a.color),Z.add(a.id),re.set(a.id,o)),Ae(M,Z,re),!la&&to&&a.document&&(la=Rl({apiBaseUrl:to,documentId:a.document,onEvent:k0})),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),br(`Failed to save comment: ${a.message}`,"error")}it=null}async function ao(e){if(!e.parent)if(Ji(e.id),re.delete(e.id),e.status!=="closed")try{let r=await Xn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},ot);r?(Zn(r,e.id,e.color),Z.add(e.id),re.set(e.id,r)):Z.delete(e.id)}catch(r){console.warn(`[feedback-layer] Could not anchor comment ${e.id}:`,r),Z.delete(e.id)}else Z.delete(e.id)}async function LW(e,r){try{let n=await uf(e,r?"closed":"open"),a=M.findIndex(o=>o.id===e);a!==-1&&(M[a]=n),await ao(n),Ae(M,Z,re)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),br(`Failed to update comment: ${t.message}`,"error")}}async function DW({parent_id:e,comment:r,commenter:t}){try{let n=await go({uri:no,document:pa,body:r,author:t,parent:e});Ml(n),Ae(M,Z,re)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),br(`Failed to save reply: ${n.message}`,"error")}}async function jW(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await bo(e,n),o=M.findIndex(s=>s.id===e);o!==-1&&(M[o]=a),t!==void 0&&await ao(a),Ae(M,Z,re)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),br(`Failed to update comment: ${n.message}`,"error")}}async function FW(e,r){try{let t=await bo(e,{color:r}),n=M.findIndex(a=>a.id===e);n!==-1&&(M[n]=t),await ao(t),Ae(M,Z,re)}catch(t){console.error("[feedback-layer] Failed to change color:",t),br(`Failed to update color: ${t.message}`,"error")}}async function $W(e,r){let t=qr();if(t)try{let o=M.find(u=>u.id===e)?.reactions?.find(u=>u.emoji===r)?.authors.includes(t),s;o?s=await ff(e,r,t):s=await lf(e,r,t);let c=M.findIndex(u=>u.id===e);c!==-1&&(M[c]={...M[c],reactions:s.reactions}),Ae(M,Z,re)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),br(`Failed to update reaction: ${n.message}`,"error")}}async function BW(e){if(Ml(e)){if(!e.parent){let r=await Xn({exact:e.quote,prefix:e.prefix,suffix:e.suffix},ot);r&&(Zn(r,e.id,e.color),Z.add(e.id),re.set(e.id,r))}Ae(M,Z,re)}}async function UW(e){let r=M.findIndex(t=>t.id===e.id);r!==-1&&(M[r]=e,await ao(e),Ae(M,Z,re))}async function GW(e){M.some(r=>r.id===e.id)&&(Ji(e.id),Z.delete(e.id),re.delete(e.id),M=M.filter(r=>r.id!==e.id&&r.parent!==e.id),Ae(M,Z,re))}var HW={"comment:created":BW,"comment:updated":UW,"comment:deleted":GW};async function k0(e){let{type:r,comment:t}=e;if(!t)return;let n=HW[r];if(n)try{await n(t)}catch(a){console.warn(`[feedback-layer] WebSocket ${r} failed for ${t.id}:`,a)}}async function WW(e){try{await cf(e),Ji(e),Z.delete(e),M=M.filter(r=>r.id!==e&&r.parent!==e),Ae(M,Z,re)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),br(`Failed to delete comment: ${r.message}`,"error")}}try{kW()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE *)
*/
