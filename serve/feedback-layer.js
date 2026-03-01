var FeedbackLayer=(()=>{var SC=Object.create;var lc=Object.defineProperty;var EC=Object.getOwnPropertyDescriptor;var TC=Object.getOwnPropertyNames;var CC=Object.getPrototypeOf,OC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var kC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of TC(r))!OC.call(e,a)&&a!==t&&lc(e,a,{get:()=>r[a],enumerable:!(n=EC(r,a))||n.enumerable});return e};var y=(e,r,t)=>(t=e!=null?SC(CC(e)):{},kC(r||!e||!e.__esModule?lc(t,"default",{value:e,enumerable:!0}):t,e));var _=i((iG,yc)=>{"use strict";yc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((oG,bc)=>{"use strict";var IC=_();bc.exports=!IC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((uG,xc)=>{"use strict";var gc=Mr(),qc=Function.prototype,ui=qc.call,_C=gc&&qc.bind.bind(ui,ui);xc.exports=gc?_C:function(e){return function(){return ui.apply(e,arguments)}}});var U=i((sG,wc)=>{"use strict";var PC=N();wc.exports=PC({}.isPrototypeOf)});var P=i((si,Sc)=>{"use strict";var dt=function(e){return e&&e.Math===Math&&e};Sc.exports=dt(typeof globalThis=="object"&&globalThis)||dt(typeof window=="object"&&window)||dt(typeof self=="object"&&self)||dt(typeof global=="object"&&global)||dt(typeof si=="object"&&si)||function(){return this}()||Function("return this")()});var jr=i((cG,Oc)=>{"use strict";var RC=Mr(),Cc=Function.prototype,Ec=Cc.apply,Tc=Cc.call;Oc.exports=typeof Reflect=="object"&&Reflect.apply||(RC?Tc.bind(Ec):function(){return Tc.apply(Ec,arguments)})});var Te=i((lG,Ic)=>{"use strict";var kc=N(),AC=kc({}.toString),NC=kc("".slice);Ic.exports=function(e){return NC(AC(e),8,-1)}});var mt=i((fG,_c)=>{"use strict";var MC=Te(),jC=N();_c.exports=function(e){if(MC(e)==="Function")return jC(e)}});var M=i((pG,Pc)=>{"use strict";var ci=typeof document=="object"&&document.all;Pc.exports=typeof ci>"u"&&ci!==void 0?function(e){return typeof e=="function"||e===ci}:function(e){return typeof e=="function"}});var H=i((vG,Rc)=>{"use strict";var LC=_();Rc.exports=!LC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((dG,Ac)=>{"use strict";var $C=Mr(),En=Function.prototype.call;Ac.exports=$C?En.bind(En):function(){return En.apply(En,arguments)}});var li=i(jc=>{"use strict";var Nc={}.propertyIsEnumerable,Mc=Object.getOwnPropertyDescriptor,FC=Mc&&!Nc.call({1:2},1);jc.f=FC?function(r){var t=Mc(this,r);return!!t&&t.enumerable}:Nc});var Qe=i((hG,Lc)=>{"use strict";Lc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((yG,$c)=>{"use strict";var DC=N(),BC=_(),GC=Te(),fi=Object,UC=DC("".split);$c.exports=BC(function(){return!fi("z").propertyIsEnumerable(0)})?function(e){return GC(e)==="String"?UC(e,""):fi(e)}:fi});var fr=i((bG,Fc)=>{"use strict";Fc.exports=function(e){return e==null}});var pr=i((gG,Dc)=>{"use strict";var HC=fr(),WC=TypeError;Dc.exports=function(e){if(HC(e))throw new WC("Can't call method on "+e);return e}});var Ae=i((qG,Bc)=>{"use strict";var KC=Tn(),zC=pr();Bc.exports=function(e){return KC(zC(e))}});var $=i((xG,Gc)=>{"use strict";var VC=M();Gc.exports=function(e){return typeof e=="object"?e!==null:VC(e)}});var V=i((wG,Uc)=>{"use strict";Uc.exports={}});var W=i((SG,Wc)=>{"use strict";var pi=V(),vi=P(),YC=M(),Hc=function(e){return YC(e)?e:void 0};Wc.exports=function(e,r){return arguments.length<2?Hc(pi[e])||Hc(vi[e]):pi[e]&&pi[e][r]||vi[e]&&vi[e][r]}});var Lr=i((EG,Vc)=>{"use strict";var JC=P(),Kc=JC.navigator,zc=Kc&&Kc.userAgent;Vc.exports=zc?String(zc):""});var $r=i((TG,el)=>{"use strict";var Zc=P(),di=Lr(),Yc=Zc.process,Jc=Zc.Deno,Qc=Yc&&Yc.versions||Jc&&Jc.version,Xc=Qc&&Qc.v8,be,Cn;Xc&&(be=Xc.split("."),Cn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!Cn&&di&&(be=di.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=di.match(/Chrome\/(\d+)/),be&&(Cn=+be[1])));el.exports=Cn});var vr=i((CG,tl)=>{"use strict";var rl=$r(),QC=_(),XC=P(),ZC=XC.String;tl.exports=!!Object.getOwnPropertySymbols&&!QC(function(){var e=Symbol("symbol detection");return!ZC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&rl&&rl<41})});var mi=i((OG,nl)=>{"use strict";var eO=vr();nl.exports=eO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((kG,al)=>{"use strict";var rO=W(),tO=M(),nO=U(),aO=mi(),iO=Object;al.exports=aO?function(e){return typeof e=="symbol"}:function(e){var r=rO("Symbol");return tO(r)&&nO(r.prototype,iO(e))}});var Xe=i((IG,il)=>{"use strict";var oO=String;il.exports=function(e){try{return oO(e)}catch{return"Object"}}});var D=i((_G,ol)=>{"use strict";var uO=M(),sO=Xe(),cO=TypeError;ol.exports=function(e){if(uO(e))return e;throw new cO(sO(e)+" is not a function")}});var On=i((PG,ul)=>{"use strict";var lO=D(),fO=fr();ul.exports=function(e,r){var t=e[r];return fO(t)?void 0:lO(t)}});var cl=i((RG,sl)=>{"use strict";var hi=G(),yi=M(),bi=$(),pO=TypeError;sl.exports=function(e,r){var t,n;if(r==="string"&&yi(t=e.toString)&&!bi(n=hi(t,e))||yi(t=e.valueOf)&&!bi(n=hi(t,e))||r!=="string"&&yi(t=e.toString)&&!bi(n=hi(t,e)))return n;throw new pO("Can't convert object to primitive value")}});var Z=i((AG,ll)=>{"use strict";ll.exports=!0});var vl=i((NG,pl)=>{"use strict";var fl=P(),vO=Object.defineProperty;pl.exports=function(e,r){try{vO(fl,e,{value:r,configurable:!0,writable:!0})}catch{fl[e]=r}return r}});var ht=i((MG,hl)=>{"use strict";var dO=Z(),mO=P(),hO=vl(),dl="__core-js_shared__",ml=hl.exports=mO[dl]||hO(dl,{});(ml.versions||(ml.versions=[])).push({version:"3.48.0",mode:dO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((jG,bl)=>{"use strict";var yl=ht();bl.exports=function(e,r){return yl[e]||(yl[e]=r||{})}});var te=i((LG,gl)=>{"use strict";var yO=pr(),bO=Object;gl.exports=function(e){return bO(yO(e))}});var K=i(($G,ql)=>{"use strict";var gO=N(),qO=te(),xO=gO({}.hasOwnProperty);ql.exports=Object.hasOwn||function(r,t){return xO(qO(r),t)}});var Dr=i((FG,xl)=>{"use strict";var wO=N(),SO=0,EO=Math.random(),TO=wO(1.1.toString);xl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+TO(++SO+EO,36)}});var R=i((DG,Sl)=>{"use strict";var CO=P(),OO=dr(),wl=K(),kO=Dr(),IO=vr(),_O=mi(),Br=CO.Symbol,gi=OO("wks"),PO=_O?Br.for||Br:Br&&Br.withoutSetter||kO;Sl.exports=function(e){return wl(gi,e)||(gi[e]=IO&&wl(Br,e)?Br[e]:PO("Symbol."+e)),gi[e]}});var Ol=i((BG,Cl)=>{"use strict";var RO=G(),El=$(),Tl=Fr(),AO=On(),NO=cl(),MO=R(),jO=TypeError,LO=MO("toPrimitive");Cl.exports=function(e,r){if(!El(e)||Tl(e))return e;var t=AO(e,LO),n;if(t){if(r===void 0&&(r="default"),n=RO(t,e,r),!El(n)||Tl(n))return n;throw new jO("Can't convert object to primitive value")}return r===void 0&&(r="number"),NO(e,r)}});var kn=i((GG,kl)=>{"use strict";var $O=Ol(),FO=Fr();kl.exports=function(e){var r=$O(e,"string");return FO(r)?r:r+""}});var In=i((UG,_l)=>{"use strict";var DO=P(),Il=$(),qi=DO.document,BO=Il(qi)&&Il(qi.createElement);_l.exports=function(e){return BO?qi.createElement(e):{}}});var xi=i((HG,Pl)=>{"use strict";var GO=H(),UO=_(),HO=In();Pl.exports=!GO&&!UO(function(){return Object.defineProperty(HO("div"),"a",{get:function(){return 7}}).a!==7})});var yt=i(Al=>{"use strict";var WO=H(),KO=G(),zO=li(),VO=Qe(),YO=Ae(),JO=kn(),QO=K(),XO=xi(),Rl=Object.getOwnPropertyDescriptor;Al.f=WO?Rl:function(r,t){if(r=YO(r),t=JO(t),XO)try{return Rl(r,t)}catch{}if(QO(r,t))return VO(!KO(zO.f,r,t),r[t])}});var wi=i((KG,Nl)=>{"use strict";var ZO=_(),ek=M(),rk=/#|\.prototype\./,bt=function(e,r){var t=nk[tk(e)];return t===ik?!0:t===ak?!1:ek(r)?ZO(r):!!r},tk=bt.normalize=function(e){return String(e).replace(rk,".").toLowerCase()},nk=bt.data={},ak=bt.NATIVE="N",ik=bt.POLYFILL="P";Nl.exports=bt});var Y=i((zG,jl)=>{"use strict";var Ml=mt(),ok=D(),uk=Mr(),sk=Ml(Ml.bind);jl.exports=function(e,r){return ok(e),r===void 0?e:uk?sk(e,r):function(){return e.apply(r,arguments)}}});var Si=i((VG,Ll)=>{"use strict";var ck=H(),lk=_();Ll.exports=ck&&lk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((YG,$l)=>{"use strict";var fk=$(),pk=String,vk=TypeError;$l.exports=function(e){if(fk(e))return e;throw new vk(pk(e)+" is not an object")}});var ne=i(Dl=>{"use strict";var dk=H(),mk=xi(),hk=Si(),_n=X(),Fl=kn(),yk=TypeError,Ei=Object.defineProperty,bk=Object.getOwnPropertyDescriptor,Ti="enumerable",Ci="configurable",Oi="writable";Dl.f=dk?hk?function(r,t,n){if(_n(r),t=Fl(t),_n(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Oi in n&&!n[Oi]){var a=bk(r,t);a&&a[Oi]&&(r[t]=n.value,n={configurable:Ci in n?n[Ci]:a[Ci],enumerable:Ti in n?n[Ti]:a[Ti],writable:!1})}return Ei(r,t,n)}:Ei:function(r,t,n){if(_n(r),t=Fl(t),_n(n),mk)try{return Ei(r,t,n)}catch{}if("get"in n||"set"in n)throw new yk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((QG,Bl)=>{"use strict";var gk=H(),qk=ne(),xk=Qe();Bl.exports=gk?function(e,r,t){return qk.f(e,r,xk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((XG,Ul)=>{"use strict";var gt=P(),wk=jr(),Sk=mt(),Ek=M(),Tk=yt().f,Ck=wi(),Gr=V(),Ok=Y(),Ur=Ce(),Gl=K();ht();var kk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return wk(e,this,arguments)};return r.prototype=e.prototype,r};Ul.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,x,b;for(v in r)l=Ck(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Gl(u,v),h=s[v],f&&(e.dontCallGetSet?(b=Tk(u,v),m=b&&b.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=Ok(d,gt):e.wrap&&f?x=kk(d):o&&Ek(d)?x=Sk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,v,x),o&&(p=t+"Prototype",Gl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],v,d),e.real&&c&&(l||!c[v])&&Ur(c,v,d)))}});var Ne=i((ZG,Hl)=>{"use strict";var Ik=Te();Hl.exports=Array.isArray||function(r){return Ik(r)==="Array"}});var Pn=i((e8,Kl)=>{"use strict";var _k=R(),Pk=_k("toStringTag"),Wl={};Wl[Pk]="z";Kl.exports=String(Wl)==="[object z]"});var qt=i((r8,zl)=>{"use strict";var Rk=Pn(),Ak=M(),Rn=Te(),Nk=R(),Mk=Nk("toStringTag"),jk=Object,Lk=Rn(function(){return arguments}())==="Arguments",$k=function(e,r){try{return e[r]}catch{}};zl.exports=Rk?Rn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=$k(r=jk(e),Mk))=="string"?t:Lk?Rn(r):(n=Rn(r))==="Object"&&Ak(r.callee)?"Arguments":n}});var Ii=i((t8,Vl)=>{"use strict";var Fk=N(),Dk=M(),ki=ht(),Bk=Fk(Function.toString);Dk(ki.inspectSource)||(ki.inspectSource=function(e){return Bk(e)});Vl.exports=ki.inspectSource});var wt=i((n8,Zl)=>{"use strict";var Gk=N(),Uk=_(),Yl=M(),Hk=qt(),Wk=W(),Kk=Ii(),Jl=function(){},Ql=Wk("Reflect","construct"),_i=/^\s*(?:class|function)\b/,zk=Gk(_i.exec),Vk=!_i.test(Jl),xt=function(r){if(!Yl(r))return!1;try{return Ql(Jl,[],r),!0}catch{return!1}},Xl=function(r){if(!Yl(r))return!1;switch(Hk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Vk||!!zk(_i,Kk(r))}catch{return!0}};Xl.sham=!0;Zl.exports=!Ql||Uk(function(){var e;return xt(xt.call)||!xt(Object)||!xt(function(){e=!0})||e})?Xl:xt});var rf=i((a8,ef)=>{"use strict";var Yk=Math.ceil,Jk=Math.floor;ef.exports=Math.trunc||function(r){var t=+r;return(t>0?Jk:Yk)(t)}});var An=i((i8,tf)=>{"use strict";var Qk=rf();tf.exports=function(e){var r=+e;return r!==r||r===0?0:Qk(r)}});var Pi=i((o8,nf)=>{"use strict";var Xk=An(),Zk=Math.max,e1=Math.min;nf.exports=function(e,r){var t=Xk(e);return t<0?Zk(t+r,0):e1(t,r)}});var Ri=i((u8,af)=>{"use strict";var r1=An(),t1=Math.min;af.exports=function(e){var r=r1(e);return r>0?t1(r,9007199254740991):0}});var ve=i((s8,of)=>{"use strict";var n1=Ri();of.exports=function(e){return n1(e.length)}});var Hr=i((c8,uf)=>{"use strict";var a1=H(),i1=ne(),o1=Qe();uf.exports=function(e,r,t){a1?i1.f(e,r,o1(0,t)):e[r]=t}});var Wr=i((l8,sf)=>{"use strict";var u1=H(),s1=Ne(),c1=TypeError,l1=Object.getOwnPropertyDescriptor,f1=u1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();sf.exports=f1?function(e,r){if(s1(e)&&!l1(e,"length").writable)throw new c1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=i((f8,cf)=>{"use strict";var p1=_(),v1=R(),d1=$r(),m1=v1("species");cf.exports=function(e){return d1>=51||!p1(function(){var r=[],t=r.constructor={};return t[m1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var mr=i((p8,lf)=>{"use strict";var h1=N();lf.exports=h1([].slice)});var vf=i(()=>{"use strict";var y1=q(),ff=Ne(),b1=wt(),g1=$(),pf=Pi(),q1=ve(),x1=Ae(),w1=Hr(),S1=Wr(),E1=R(),T1=St(),C1=mr(),O1=T1("slice"),k1=E1("species"),Ai=Array,I1=Math.max;y1({target:"Array",proto:!0,forced:!O1},{slice:function(r,t){var n=x1(this),a=q1(n),o=pf(r,a),u=pf(t===void 0?a:t,a),s,c,l;if(ff(n)&&(s=n.constructor,b1(s)&&(s===Ai||ff(s.prototype))?s=void 0:g1(s)&&(s=s[k1],s===null&&(s=void 0)),s===Ai||s===void 0))return C1(n,o,u);for(c=new(s===void 0?Ai:s)(I1(u-o,0)),l=0;o<u;o++,l++)o in n&&w1(c,l,n[o]);return S1(c,l),c}})});var ue=i((m8,df)=>{"use strict";var _1=P(),P1=V();df.exports=function(e,r){var t=P1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=_1[e],o=a&&a.prototype;return o&&o[r]}});var hf=i((h8,mf)=>{"use strict";vf();var R1=ue();mf.exports=R1("Array","slice")});var bf=i((y8,yf)=>{"use strict";var A1=U(),N1=hf(),Ni=Array.prototype;yf.exports=function(e){var r=e.slice;return e===Ni||A1(Ni,e)&&r===Ni.slice?N1:r}});var qf=i((b8,gf)=>{"use strict";var M1=bf();gf.exports=M1});var wf=i((g8,xf)=>{"use strict";var j1=qf();xf.exports=j1});var Ef=i((q8,Sf)=>{"use strict";var L1=wf();Sf.exports=L1});var Mi=i((x8,Tf)=>{"use strict";Tf.exports=Ef()});var Kr=i((w8,Cf)=>{Cf.exports=Mi()});var Ze=i((S8,Of)=>{"use strict";var $1=qt(),F1=String;Of.exports=function(e){if($1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return F1(e)}});var Pf=i((E8,_f)=>{"use strict";var ji=N(),D1=An(),B1=Ze(),G1=pr(),U1=ji("".charAt),kf=ji("".charCodeAt),H1=ji("".slice),If=function(e){return function(r,t){var n=B1(G1(r)),a=D1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=kf(n,a),u<55296||u>56319||a+1===o||(s=kf(n,a+1))<56320||s>57343?e?U1(n,a):u:e?H1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};_f.exports={codeAt:If(!1),charAt:If(!0)}});var Nf=i((T8,Af)=>{"use strict";var W1=P(),K1=M(),Rf=W1.WeakMap;Af.exports=K1(Rf)&&/native code/.test(String(Rf))});var Et=i((C8,jf)=>{"use strict";var z1=dr(),V1=Dr(),Mf=z1("keys");jf.exports=function(e){return Mf[e]||(Mf[e]=V1(e))}});var zr=i((O8,Lf)=>{"use strict";Lf.exports={}});var er=i((k8,Df)=>{"use strict";var Y1=Nf(),Ff=P(),J1=$(),Q1=Ce(),Li=K(),$i=ht(),X1=Et(),Z1=zr(),$f="Object already initialized",Fi=Ff.TypeError,eI=Ff.WeakMap,Nn,Tt,Mn,rI=function(e){return Mn(e)?Tt(e):Nn(e,{})},tI=function(e){return function(r){var t;if(!J1(r)||(t=Tt(r)).type!==e)throw new Fi("Incompatible receiver, "+e+" required");return t}};Y1||$i.state?(ge=$i.state||($i.state=new eI),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,Nn=function(e,r){if(ge.has(e))throw new Fi($f);return r.facade=e,ge.set(e,r),r},Tt=function(e){return ge.get(e)||{}},Mn=function(e){return ge.has(e)}):(hr=X1("state"),Z1[hr]=!0,Nn=function(e,r){if(Li(e,hr))throw new Fi($f);return r.facade=e,Q1(e,hr,r),r},Tt=function(e){return Li(e,hr)?e[hr]:{}},Mn=function(e){return Li(e,hr)});var ge,hr;Df.exports={set:Nn,get:Tt,has:Mn,enforce:rI,getterFor:tI}});var Uf=i((I8,Gf)=>{"use strict";var Di=H(),nI=K(),Bf=Function.prototype,aI=Di&&Object.getOwnPropertyDescriptor,Bi=nI(Bf,"name"),iI=Bi&&function(){}.name==="something",oI=Bi&&(!Di||Di&&aI(Bf,"name").configurable);Gf.exports={EXISTS:Bi,PROPER:iI,CONFIGURABLE:oI}});var Gi=i((_8,Wf)=>{"use strict";var uI=Ae(),sI=Pi(),cI=ve(),Hf=function(e){return function(r,t,n){var a=uI(r),o=cI(a);if(o===0)return!e&&-1;var u=sI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Wf.exports={includes:Hf(!0),indexOf:Hf(!1)}});var Hi=i((P8,zf)=>{"use strict";var lI=N(),Ui=K(),fI=Ae(),pI=Gi().indexOf,vI=zr(),Kf=lI([].push);zf.exports=function(e,r){var t=fI(e),n=0,a=[],o;for(o in t)!Ui(vI,o)&&Ui(t,o)&&Kf(a,o);for(;r.length>n;)Ui(t,o=r[n++])&&(~pI(a,o)||Kf(a,o));return a}});var jn=i((R8,Vf)=>{"use strict";Vf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ln=i((A8,Yf)=>{"use strict";var dI=Hi(),mI=jn();Yf.exports=Object.keys||function(r){return dI(r,mI)}});var Wi=i(Jf=>{"use strict";var hI=H(),yI=Si(),bI=ne(),gI=X(),qI=Ae(),xI=Ln();Jf.f=hI&&!yI?Object.defineProperties:function(r,t){gI(r);for(var n=qI(t),a=xI(t),o=a.length,u=0,s;o>u;)bI.f(r,s=a[u++],n[s]);return r}});var Ki=i((M8,Qf)=>{"use strict";var wI=W();Qf.exports=wI("document","documentElement")});var rr=i((j8,ap)=>{"use strict";var SI=X(),EI=Wi(),Xf=jn(),TI=zr(),CI=Ki(),OI=In(),kI=Et(),Zf=">",ep="<",Vi="prototype",Yi="script",tp=kI("IE_PROTO"),zi=function(){},np=function(e){return ep+Yi+Zf+e+ep+"/"+Yi+Zf},rp=function(e){e.write(np("")),e.close();var r=e.parentWindow.Object;return e=null,r},II=function(){var e=OI("iframe"),r="java"+Yi+":",t;return e.style.display="none",CI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(np("document.F=Object")),t.close(),t.F},$n,Fn=function(){try{$n=new ActiveXObject("htmlfile")}catch{}Fn=typeof document<"u"?document.domain&&$n?rp($n):II():rp($n);for(var e=Xf.length;e--;)delete Fn[Vi][Xf[e]];return Fn()};TI[tp]=!0;ap.exports=Object.create||function(r,t){var n;return r!==null?(zi[Vi]=SI(r),n=new zi,zi[Vi]=null,n[tp]=r):n=Fn(),t===void 0?n:EI.f(n,t)}});var Ji=i((L8,ip)=>{"use strict";var _I=_();ip.exports=!_I(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Ct=i(($8,up)=>{"use strict";var PI=K(),RI=M(),AI=te(),NI=Et(),MI=Ji(),op=NI("IE_PROTO"),Qi=Object,jI=Qi.prototype;up.exports=MI?Qi.getPrototypeOf:function(e){var r=AI(e);if(PI(r,op))return r[op];var t=r.constructor;return RI(t)&&r instanceof t?t.prototype:r instanceof Qi?jI:null}});var Me=i((F8,sp)=>{"use strict";var LI=Ce();sp.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:LI(e,r,t),e}});var ro=i((D8,fp)=>{"use strict";var $I=_(),FI=M(),DI=$(),BI=rr(),cp=Ct(),GI=Me(),UI=R(),HI=Z(),eo=UI("iterator"),lp=!1,je,Xi,Zi;[].keys&&(Zi=[].keys(),"next"in Zi?(Xi=cp(cp(Zi)),Xi!==Object.prototype&&(je=Xi)):lp=!0);var WI=!DI(je)||$I(function(){var e={};return je[eo].call(e)!==e});WI?je={}:HI&&(je=BI(je));FI(je[eo])||GI(je,eo,function(){return this});fp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:lp}});var vp=i((B8,pp)=>{"use strict";var KI=Pn(),zI=qt();pp.exports=KI?{}.toString:function(){return"[object "+zI(this)+"]"}});var Le=i((G8,mp)=>{"use strict";var VI=Pn(),YI=ne().f,JI=Ce(),QI=K(),XI=vp(),ZI=R(),dp=ZI("toStringTag");mp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(QI(a,dp)||YI(a,dp,{configurable:!0,value:r}),n&&!VI&&JI(a,"toString",XI))}});var yr=i((U8,hp)=>{"use strict";hp.exports={}});var bp=i((H8,yp)=>{"use strict";var e_=ro().IteratorPrototype,r_=rr(),t_=Qe(),n_=Le(),a_=yr(),i_=function(){return this};yp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=r_(e_,{next:t_(+!n,t)}),n_(e,a,!1,!0),a_[a]=i_,e}});var qp=i((W8,gp)=>{"use strict";var o_=N(),u_=D();gp.exports=function(e,r,t){try{return o_(u_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var wp=i((K8,xp)=>{"use strict";var s_=$();xp.exports=function(e){return s_(e)||e===null}});var Ep=i((z8,Sp)=>{"use strict";var c_=wp(),l_=String,f_=TypeError;Sp.exports=function(e){if(c_(e))return e;throw new f_("Can't set "+l_(e)+" as a prototype")}});var Ot=i((V8,Tp)=>{"use strict";var p_=qp(),v_=$(),d_=pr(),m_=Ep();Tp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=p_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return d_(a),m_(o),v_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Gn=i((Y8,Mp)=>{"use strict";var h_=q(),y_=G(),Dn=Z(),Ap=Uf(),b_=M(),g_=bp(),Cp=Ct(),Op=Ot(),q_=Le(),x_=Ce(),to=Me(),w_=R(),kp=yr(),Np=ro(),S_=Ap.PROPER,E_=Ap.CONFIGURABLE,Ip=Np.IteratorPrototype,Bn=Np.BUGGY_SAFARI_ITERATORS,kt=w_("iterator"),_p="keys",It="values",Pp="entries",Rp=function(){return this};Mp.exports=function(e,r,t,n,a,o,u){g_(t,r,n);var s=function(b){if(b===a&&v)return v;if(!Bn&&b&&b in f)return f[b];switch(b){case _p:return function(){return new t(this,b)};case It:return function(){return new t(this,b)};case Pp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[kt]||f["@@iterator"]||a&&f[a],v=!Bn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,x;if(d&&(h=Cp(d.call(new e)),h!==Object.prototype&&h.next&&(!Dn&&Cp(h)!==Ip&&(Op?Op(h,Ip):b_(h[kt])||to(h,kt,Rp)),q_(h,c,!0,!0),Dn&&(kp[c]=Rp))),S_&&a===It&&p&&p.name!==It&&(!Dn&&E_?x_(f,"name",It):(l=!0,v=function(){return y_(p,this)})),a)if(m={values:s(It),keys:o?v:s(_p),entries:s(Pp)},u)for(x in m)(Bn||l||!(x in f))&&to(f,x,m[x]);else h_({target:r,proto:!0,forced:Bn||l},m);return(!Dn||u)&&f[kt]!==v&&to(f,kt,v,{name:a}),kp[r]=v,m}});var Un=i((J8,jp)=>{"use strict";jp.exports=function(e,r){return{value:e,done:r}}});var br=i(()=>{"use strict";var T_=Pf().charAt,C_=Ze(),$p=er(),O_=Gn(),Lp=Un(),Fp="String Iterator",k_=$p.set,I_=$p.getterFor(Fp);O_(String,"String",function(e){k_(this,{type:Fp,string:C_(e),index:0})},function(){var r=I_(this),t=r.string,n=r.index,a;return n>=t.length?Lp(void 0,!0):(a=T_(t,n),r.index+=a.length,Lp(a,!1))})});var no=i((Z8,Bp)=>{"use strict";var __=G(),Dp=X(),P_=On();Bp.exports=function(e,r,t){var n,a;Dp(e);try{if(n=P_(e,"return"),!n){if(r==="throw")throw t;return t}n=__(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Dp(n),t}});var Up=i((eU,Gp)=>{"use strict";var R_=X(),A_=no();Gp.exports=function(e,r,t,n){try{return n?r(R_(t)[0],t[1]):r(t)}catch(a){A_(e,"throw",a)}}});var ao=i((rU,Hp)=>{"use strict";var N_=R(),M_=yr(),j_=N_("iterator"),L_=Array.prototype;Hp.exports=function(e){return e!==void 0&&(M_.Array===e||L_[j_]===e)}});var _t=i((tU,Kp)=>{"use strict";var $_=qt(),Wp=On(),F_=fr(),D_=yr(),B_=R(),G_=B_("iterator");Kp.exports=function(e){if(!F_(e))return Wp(e,G_)||Wp(e,"@@iterator")||D_[$_(e)]}});var Hn=i((nU,zp)=>{"use strict";var U_=G(),H_=D(),W_=X(),K_=Xe(),z_=_t(),V_=TypeError;zp.exports=function(e,r){var t=arguments.length<2?z_(e):r;if(H_(t))return W_(U_(t,e));throw new V_(K_(e)+" is not iterable")}});var Qp=i((aU,Jp)=>{"use strict";var Y_=Y(),J_=G(),Q_=te(),X_=Up(),Z_=ao(),eP=wt(),rP=ve(),Vp=Hr(),tP=Wr(),nP=Hn(),aP=_t(),Yp=Array;Jp.exports=function(r){var t=Q_(r),n=eP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=Y_(o,a>2?arguments[2]:void 0));var s=aP(t),c=0,l,f,p,v,d,h;if(s&&!(this===Yp&&Z_(s)))for(f=n?new this:[],v=nP(t,s),d=v.next;!(p=J_(d,v)).done;c++)h=u?X_(v,o,[p.value,c],!0):p.value,Vp(f,c,h);else for(l=rP(t),f=n?new this(l):Yp(l);l>c;c++)h=u?o(t[c],c):t[c],Vp(f,c,h);return tP(f,c),f}});var oo=i((iU,rv)=>{"use strict";var iP=R(),Zp=iP("iterator"),ev=!1;try{Xp=0,io={next:function(){return{done:!!Xp++}},return:function(){ev=!0}},io[Zp]=function(){return this},Array.from(io,function(){throw 2})}catch{}var Xp,io;rv.exports=function(e,r){try{if(!r&&!ev)return!1}catch{return!1}var t=!1;try{var n={};n[Zp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var tv=i(()=>{"use strict";var oP=q(),uP=Qp(),sP=oo(),cP=!sP(function(e){Array.from(e)});oP({target:"Array",stat:!0,forced:cP},{from:uP})});var av=i((sU,nv)=>{"use strict";br();tv();var lP=V();nv.exports=lP.Array.from});var ov=i((cU,iv)=>{"use strict";var fP=av();iv.exports=fP});var sv=i((lU,uv)=>{"use strict";var pP=ov();uv.exports=pP});var lv=i((fU,cv)=>{"use strict";var vP=sv();cv.exports=vP});var uo=i((pU,fv)=>{"use strict";fv.exports=lv()});var Wn=i((vU,pv)=>{pv.exports=uo()});var Pt=i((dU,vv)=>{"use strict";var dP=TypeError,mP=9007199254740991;vv.exports=function(e){if(e>mP)throw dP("Maximum allowed index exceeded");return e}});var yv=i((mU,hv)=>{"use strict";var dv=Ne(),hP=wt(),yP=$(),bP=R(),gP=bP("species"),mv=Array;hv.exports=function(e){var r;return dv(e)&&(r=e.constructor,hP(r)&&(r===mv||dv(r.prototype))?r=void 0:yP(r)&&(r=r[gP],r===null&&(r=void 0))),r===void 0?mv:r}});var Kn=i((hU,bv)=>{"use strict";var qP=yv();bv.exports=function(e,r){return new(qP(e))(r===0?0:r)}});var so=i(()=>{"use strict";var xP=q(),wP=_(),SP=Ne(),EP=$(),TP=te(),CP=ve(),gv=Pt(),qv=Hr(),OP=Wr(),kP=Kn(),IP=St(),_P=R(),PP=$r(),xv=_P("isConcatSpreadable"),RP=PP>=51||!wP(function(){var e=[];return e[xv]=!1,e.concat()[0]!==e}),AP=function(e){if(!EP(e))return!1;var r=e[xv];return r!==void 0?!!r:SP(e)},NP=!RP||!IP("concat");xP({target:"Array",proto:!0,arity:1,forced:NP},{concat:function(r){var t=TP(this),n=kP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],AP(l))for(c=CP(l),gv(a+c),u=0;u<c;u++,a++)u in l&&qv(n,a,l[u]);else gv(a+1),qv(n,a++,l);return OP(n,a),n}})});var Rt=i(()=>{});var At=i(wv=>{"use strict";var MP=Hi(),jP=jn(),LP=jP.concat("length","prototype");wv.f=Object.getOwnPropertyNames||function(r){return MP(r,LP)}});var co=i((wU,Tv)=>{"use strict";var $P=Te(),FP=Ae(),Sv=At().f,DP=mr(),Ev=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],BP=function(e){try{return Sv(e)}catch{return DP(Ev)}};Tv.exports.f=function(r){return Ev&&$P(r)==="Window"?BP(r):Sv(FP(r))}});var zn=i(Cv=>{"use strict";Cv.f=Object.getOwnPropertySymbols});var Vn=i((EU,Ov)=>{"use strict";var GP=ne();Ov.exports=function(e,r,t){return GP.f(e,r,t)}});var Vr=i(kv=>{"use strict";var UP=R();kv.f=UP});var j=i((CU,_v)=>{"use strict";var Iv=V(),HP=K(),WP=Vr(),KP=ne().f;_v.exports=function(e){var r=Iv.Symbol||(Iv.Symbol={});HP(r,e)||KP(r,e,{value:WP.f(e)})}});var lo=i((OU,Pv)=>{"use strict";var zP=G(),VP=W(),YP=R(),JP=Me();Pv.exports=function(){var e=VP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=YP("toPrimitive");r&&!r[n]&&JP(r,n,function(a){return zP(t,this)},{arity:1})}});var Nt=i((kU,Av)=>{"use strict";var QP=Y(),XP=Tn(),ZP=te(),eR=ve(),Rv=Kn(),fo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=ZP(c),v=XP(p),d=eR(v),h=QP(l,f),m=0,x=0,b=r?Rv(c,d):t||u?Rv(c,0):void 0,g,O;d>m;m++)if((s||m in v)&&(g=v[m],O=h(g,m,p),e))if(r)fo(b,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:fo(b,x++,g)}else switch(e){case 4:return!1;case 7:fo(b,x++,g)}return o?-1:n||a?a:b}};Av.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var Jv=i(()=>{"use strict";var Yn=q(),Lt=P(),xo=G(),rR=N(),tR=Z(),Yr=H(),Jr=vr(),nR=_(),z=K(),aR=U(),ho=X(),Jn=Ae(),wo=kn(),iR=Ze(),yo=Qe(),Qr=rr(),jv=Ln(),oR=At(),Lv=co(),uR=zn(),$v=yt(),Fv=ne(),sR=Wi(),Dv=li(),po=Me(),cR=Vn(),So=dr(),lR=Et(),Bv=zr(),Nv=Dr(),fR=R(),pR=Vr(),vR=j(),dR=lo(),mR=Le(),Gv=er(),Qn=Nt().forEach,ae=lR("hidden"),Xn="Symbol",jt="prototype",hR=Gv.set,Mv=Gv.getterFor(Xn),de=Object[jt],gr=Lt.Symbol,Mt=gr&&gr[jt],yR=Lt.RangeError,bR=Lt.TypeError,vo=Lt.QObject,Uv=$v.f,qr=Fv.f,Hv=Lv.f,gR=Dv.f,Wv=rR([].push),$e=So("symbols"),$t=So("op-symbols"),qR=So("wks"),bo=!vo||!vo[jt]||!vo[jt].findChild,Kv=function(e,r,t){var n=Uv(de,r);n&&delete de[r],qr(e,r,t),n&&e!==de&&qr(de,r,n)},go=Yr&&nR(function(){return Qr(qr({},"a",{get:function(){return qr(this,"a",{value:7}).a}})).a!==7})?Kv:qr,mo=function(e,r){var t=$e[e]=Qr(Mt);return hR(t,{type:Xn,tag:e,description:r}),Yr||(t.description=r),t},Zn=function(r,t,n){r===de&&Zn($t,t,n),ho(r);var a=wo(t);return ho(n),z($e,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Qr(n,{enumerable:yo(0,!1)})):(z(r,ae)||qr(r,ae,yo(1,Qr(null))),r[ae][a]=!0),go(r,a,n)):qr(r,a,n)},Eo=function(r,t){ho(r);var n=Jn(t),a=jv(n).concat(Yv(n));return Qn(a,function(o){(!Yr||xo(qo,n,o))&&Zn(r,o,n[o])}),r},xR=function(r,t){return t===void 0?Qr(r):Eo(Qr(r),t)},qo=function(r){var t=wo(r),n=xo(gR,this,t);return this===de&&z($e,t)&&!z($t,t)?!1:n||!z(this,t)||!z($e,t)||z(this,ae)&&this[ae][t]?n:!0},zv=function(r,t){var n=Jn(r),a=wo(t);if(!(n===de&&z($e,a)&&!z($t,a))){var o=Uv(n,a);return o&&z($e,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},Vv=function(r){var t=Hv(Jn(r)),n=[];return Qn(t,function(a){!z($e,a)&&!z(Bv,a)&&Wv(n,a)}),n},Yv=function(e){var r=e===de,t=Hv(r?$t:Jn(e)),n=[];return Qn(t,function(a){z($e,a)&&(!r||z(de,a))&&Wv(n,$e[a])}),n};Jr||(gr=function(){if(aR(Mt,this))throw new bR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:iR(arguments[0]),t=Nv(r),n=function(a){var o=this===void 0?Lt:this;o===de&&xo(n,$t,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=yo(1,a);try{go(o,t,u)}catch(s){if(!(s instanceof yR))throw s;Kv(o,t,u)}};return Yr&&bo&&go(de,t,{configurable:!0,set:n}),mo(t,r)},Mt=gr[jt],po(Mt,"toString",function(){return Mv(this).tag}),po(gr,"withoutSetter",function(e){return mo(Nv(e),e)}),Dv.f=qo,Fv.f=Zn,sR.f=Eo,$v.f=zv,oR.f=Lv.f=Vv,uR.f=Yv,pR.f=function(e){return mo(fR(e),e)},Yr&&(cR(Mt,"description",{configurable:!0,get:function(){return Mv(this).description}}),tR||po(de,"propertyIsEnumerable",qo,{unsafe:!0})));Yn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:gr});Qn(jv(qR),function(e){vR(e)});Yn({target:Xn,stat:!0,forced:!Jr},{useSetter:function(){bo=!0},useSimple:function(){bo=!1}});Yn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:xR,defineProperty:Zn,defineProperties:Eo,getOwnPropertyDescriptor:zv});Yn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:Vv});dR();mR(gr,Xn);Bv[ae]=!0});var To=i((PU,Qv)=>{"use strict";var wR=vr();Qv.exports=wR&&!!Symbol.for&&!!Symbol.keyFor});var Zv=i(()=>{"use strict";var SR=q(),ER=W(),TR=K(),CR=Ze(),Xv=dr(),OR=To(),Co=Xv("string-to-symbol-registry"),kR=Xv("symbol-to-string-registry");SR({target:"Symbol",stat:!0,forced:!OR},{for:function(e){var r=CR(e);if(TR(Co,r))return Co[r];var t=ER("Symbol")(r);return Co[r]=t,kR[t]=r,t}})});var rd=i(()=>{"use strict";var IR=q(),_R=K(),PR=Fr(),RR=Xe(),AR=dr(),NR=To(),ed=AR("symbol-to-string-registry");IR({target:"Symbol",stat:!0,forced:!NR},{keyFor:function(r){if(!PR(r))throw new TypeError(RR(r)+" is not a symbol");if(_R(ed,r))return ed[r]}})});var nd=i((jU,td)=>{"use strict";var MR=$(),jR=er().get;td.exports=function(r){if(!MR(r))return!1;var t=jR(r);return!!t&&t.type==="RawJSON"}});var sd=i((LU,ud)=>{"use strict";var Oo=N(),LR=K(),ea=SyntaxError,$R=parseInt,FR=String.fromCharCode,DR=Oo("".charAt),ad=Oo("".slice),id=Oo(/./.exec),od={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},BR=/^[\da-f]{4}$/i,GR=/^[\u0000-\u001F]$/;ud.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=DR(e,r);if(a==="\\"){var o=ad(e,r,r+2);if(LR(od,o))n+=od[o],r+=2;else if(o==="\\u"){r+=2;var u=ad(e,r,r+4);if(!id(BR,u))throw new ea("Bad Unicode escape at: "+r);n+=FR($R(u,16)),r+=4}else throw new ea('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(id(GR,a))throw new ea("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ea("Unterminated string at: "+r);return{value:n,end:r}}});var ld=i(($U,cd)=>{"use strict";var UR=_();cd.exports=!UR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Ed=i(()=>{"use strict";var HR=q(),bd=W(),WR=jr(),gd=G(),xr=N(),qd=_(),fd=Ne(),ta=M(),KR=nd(),pd=Fr(),vd=Te(),zR=Ze(),VR=mr(),YR=sd(),JR=Dr(),QR=vr(),ko=ld(),xd=String,nr=bd("JSON","stringify"),ra=xr(/./.exec),_o=xr("".charAt),XR=xr("".charCodeAt),ZR=xr("".replace),Io=xr("".slice),Po=xr([].push),eA=xr(1.1.toString),rA=/[\uD800-\uDFFF]/g,dd=/^[\uD800-\uDBFF]$/,md=/^[\uDC00-\uDFFF]$/,Ro=JR(),hd=Ro.length,wd=!QR||qd(function(){var e=bd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),yd=qd(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),tA=wd?function(e,r){var t=VR(arguments),n=Sd(r);if(!(!ta(n)&&(e===void 0||pd(e))))return t[1]=function(a,o){if(ta(n)&&(o=gd(n,this,xd(a),o)),!pd(o))return o},WR(nr,null,t)}:nr,nA=function(e,r,t){var n=_o(t,r-1),a=_o(t,r+1);return ra(dd,e)&&!ra(md,a)||ra(md,e)&&!ra(dd,n)?"\\u"+eA(XR(e,0),16):e},Sd=function(e){if(ta(e))return e;if(fd(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Po(t,a):(typeof a=="number"||vd(a)==="Number"||vd(a)==="String")&&Po(t,zR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(fd(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&HR({target:"JSON",stat:!0,arity:3,forced:wd||yd||!ko},{stringify:function(r,t,n){var a=Sd(t),o=[],u=tA(r,function(d,h){var m=ta(a)?gd(a,this,xd(d),h):h;return!ko&&KR(m)?Ro+(Po(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(yd&&(u=ZR(u,rA,nA)),ko))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=_o(u,l);if(f==='"'){var p=YR(u,++l).end-1,v=Io(u,l,p);s+=Io(v,0,hd)===Ro?o[Io(v,hd)]:'"'+v+'"',l=p}else s+=f}return s}})});var Cd=i(()=>{"use strict";var aA=q(),iA=vr(),oA=_(),Td=zn(),uA=te(),sA=!iA||oA(function(){Td.f(1)});aA({target:"Object",stat:!0,forced:sA},{getOwnPropertySymbols:function(r){var t=Td.f;return t?t(uA(r)):[]}})});var Od=i(()=>{"use strict";Jv();Zv();rd();Ed();Cd()});var Ao=i(()=>{"use strict";var cA=j();cA("asyncDispose")});var No=i(()=>{"use strict";var lA=j();lA("asyncIterator")});var kd=i(()=>{});var Mo=i(()=>{"use strict";var fA=j();fA("dispose")});var Id=i(()=>{"use strict";var pA=j();pA("hasInstance")});var _d=i(()=>{"use strict";var vA=j();vA("isConcatSpreadable")});var jo=i(()=>{"use strict";var dA=j();dA("iterator")});var Pd=i(()=>{"use strict";var mA=j();mA("match")});var Rd=i(()=>{"use strict";var hA=j();hA("matchAll")});var Ad=i(()=>{"use strict";var yA=j();yA("replace")});var Nd=i(()=>{"use strict";var bA=j();bA("search")});var Md=i(()=>{"use strict";var gA=j();gA("species")});var jd=i(()=>{"use strict";var qA=j();qA("split")});var Lo=i(()=>{"use strict";var xA=j(),wA=lo();xA("toPrimitive");wA()});var Ld=i(()=>{"use strict";var SA=W(),EA=j(),TA=Le();EA("toStringTag");TA(SA("Symbol"),"Symbol")});var $d=i(()=>{"use strict";var CA=j();CA("unscopables")});var Fd=i(()=>{"use strict";var OA=P(),kA=Le();kA(OA.JSON,"JSON",!0)});var Dd=i(()=>{});var Bd=i(()=>{});var Ud=i((IH,Gd)=>{"use strict";so();Rt();Od();Ao();No();kd();Mo();Id();_d();jo();Pd();Rd();Ad();Nd();Md();jd();Lo();Ld();$d();Fd();Dd();Bd();var IA=V();Gd.exports=IA.Symbol});var $o=i((_H,Hd)=>{"use strict";Hd.exports=function(){}});var wr=i((PH,Yd)=>{"use strict";var _A=Ae(),Fo=$o(),Wd=yr(),zd=er(),PA=ne().f,RA=Gn(),na=Un(),AA=Z(),NA=H(),Vd="Array Iterator",MA=zd.set,jA=zd.getterFor(Vd);Yd.exports=RA(Array,"Array",function(e,r){MA(this,{type:Vd,target:_A(e),index:0,kind:r})},function(){var e=jA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,na(void 0,!0);switch(e.kind){case"keys":return na(t,!1);case"values":return na(r[t],!1)}return na([t,r[t]],!1)},"values");var Kd=Wd.Arguments=Wd.Array;Fo("keys");Fo("values");Fo("entries");if(!AA&&NA&&Kd.name!=="values")try{PA(Kd,"name",{value:"values"})}catch{}});var Qd=i((RH,Jd)=>{"use strict";Jd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=i(()=>{"use strict";wr();var LA=Qd(),$A=P(),FA=Le(),Xd=yr();for(aa in LA)FA($A[aa],aa),Xd[aa]=Xd.Array;var aa});var em=i((MH,Zd)=>{"use strict";var DA=Ud();Sr();Zd.exports=DA});var nm=i(()=>{"use strict";var BA=R(),GA=ne().f,rm=BA("metadata"),tm=Function.prototype;tm[rm]===void 0&&GA(tm,rm,{value:null})});var am=i(()=>{"use strict";Ao()});var im=i(()=>{"use strict";Mo()});var om=i(()=>{"use strict";var UA=j();UA("metadata")});var sm=i((HH,um)=>{"use strict";var HA=em();nm();am();im();om();um.exports=HA});var Bo=i((WH,cm)=>{"use strict";var WA=W(),KA=N(),Do=WA("Symbol"),zA=Do.keyFor,VA=KA(Do.prototype.valueOf);cm.exports=Do.isRegisteredSymbol||function(r){try{return zA(VA(r))!==void 0}catch{return!1}}});var lm=i(()=>{"use strict";var YA=q(),JA=Bo();YA({target:"Symbol",stat:!0},{isRegisteredSymbol:JA})});var Ho=i((VH,hm)=>{"use strict";var QA=dr(),dm=W(),XA=N(),ZA=Fr(),e2=R(),oa=dm("Symbol"),fm=oa.isWellKnownSymbol,mm=dm("Object","getOwnPropertyNames"),r2=XA(oa.prototype.valueOf),pm=QA("wks");for(ia=0,Go=mm(oa),vm=Go.length;ia<vm;ia++)try{Uo=Go[ia],ZA(oa[Uo])&&e2(Uo)}catch{}var Uo,ia,Go,vm;hm.exports=function(r){if(fm&&fm(r))return!0;try{for(var t=r2(r),n=0,a=mm(pm),o=a.length;n<o;n++)if(pm[a[n]]==t)return!0}catch{}return!1}});var ym=i(()=>{"use strict";var t2=q(),n2=Ho();t2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:n2})});var bm=i(()=>{"use strict";var a2=j();a2("customMatcher")});var gm=i(()=>{"use strict";var i2=j();i2("observable")});var qm=i(()=>{"use strict";var o2=q(),u2=Bo();o2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:u2})});var xm=i(()=>{"use strict";var s2=q(),c2=Ho();s2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:c2})});var wm=i(()=>{"use strict";var l2=j();l2("matcher")});var Sm=i(()=>{"use strict";var f2=j();f2("metadataKey")});var Em=i(()=>{"use strict";var p2=j();p2("patternMatch")});var Tm=i(()=>{"use strict";var v2=j();v2("replaceAll")});var Om=i((vW,Cm)=>{"use strict";var d2=sm();lm();ym();bm();gm();qm();xm();wm();Sm();Em();Tm();Cm.exports=d2});var Oe=i((dW,km)=>{"use strict";km.exports=Om()});var ua=i((mW,Im)=>{Im.exports=Oe()});var Pm=i((hW,_m)=>{"use strict";wr();br();var m2=_t();_m.exports=m2});var Am=i((yW,Rm)=>{"use strict";var h2=Pm();Sr();Rm.exports=h2});var Mm=i((bW,Nm)=>{"use strict";var y2=Am();Nm.exports=y2});var Lm=i((gW,jm)=>{"use strict";var b2=Mm();jm.exports=b2});var Wo=i((qW,$m)=>{"use strict";$m.exports=Lm()});var sa=i((xW,Fm)=>{Fm.exports=Wo()});var Bm=i((wW,Dm)=>{"use strict";wr();br();var g2=Hn();Dm.exports=g2});var Um=i((SW,Gm)=>{"use strict";var q2=Bm();Sr();Gm.exports=q2});var Wm=i((EW,Hm)=>{"use strict";var x2=Um();Hm.exports=x2});var zm=i((TW,Km)=>{"use strict";var w2=Wm();Km.exports=w2});var Ym=i((CW,Vm)=>{"use strict";Vm.exports=zm()});var ca=i((OW,Jm)=>{Jm.exports=Ym()});var Xm=i((kW,Qm)=>{"use strict";var S2=W(),E2=N(),T2=At(),C2=zn(),O2=X(),k2=E2([].concat);Qm.exports=S2("Reflect","ownKeys")||function(r){var t=T2.f(O2(r)),n=C2.f;return n?k2(t,n(r)):t}});var rh=i((IW,eh)=>{"use strict";var Zm=K(),I2=Xm(),_2=yt(),P2=ne();eh.exports=function(e,r,t){for(var n=I2(r),a=P2.f,o=_2.f,u=0;u<n.length;u++){var s=n[u];!Zm(e,s)&&!(t&&Zm(t,s))&&a(e,s,o(r,s))}}});var nh=i((_W,th)=>{"use strict";var R2=$(),A2=Ce();th.exports=function(e,r){R2(r)&&"cause"in r&&A2(e,"cause",r.cause)}});var uh=i((PW,oh)=>{"use strict";var N2=N(),ah=Error,M2=N2("".replace),j2=function(e){return String(new ah(e).stack)}("zxcasd"),ih=/\n\s*at [^:]*:[^\n]*/,L2=ih.test(j2);oh.exports=function(e,r){if(L2&&typeof e=="string"&&!ah.prepareStackTrace)for(;r--;)e=M2(e,ih,"");return e}});var ch=i((RW,sh)=>{"use strict";var $2=_(),F2=Qe();sh.exports=!$2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",F2(1,7)),e.stack!==7):!0})});var ph=i((AW,fh)=>{"use strict";var D2=Ce(),B2=uh(),G2=ch(),lh=Error.captureStackTrace;fh.exports=function(e,r,t,n){G2&&(lh?lh(e,r):D2(e,"stack",B2(t,n)))}});var me=i((NW,hh)=>{"use strict";var U2=Y(),H2=G(),W2=X(),K2=Xe(),z2=ao(),V2=ve(),vh=U(),Y2=Hn(),J2=_t(),dh=no(),Q2=TypeError,la=function(e,r){this.stopped=e,this.result=r},mh=la.prototype;hh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=U2(r,n),l,f,p,v,d,h,m,x=function(g){return l&&dh(l,"normal"),new la(!0,g)},b=function(g){return a?(W2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=J2(e),!f)throw new Q2(K2(e)+" is not iterable");if(z2(f)){for(p=0,v=V2(e);v>p;p++)if(d=b(e[p]),d&&vh(mh,d))return d;return new la(!1)}l=Y2(e,f)}for(h=o?e.next:l.next;!(m=H2(h,l)).done;){try{d=b(m.value)}catch(g){dh(l,"throw",g)}if(typeof d=="object"&&d&&vh(mh,d))return d}return new la(!1)}});var bh=i((MW,yh)=>{"use strict";var X2=Ze();yh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:X2(e)}});var qh=i(()=>{"use strict";var Z2=q(),eN=U(),rN=Ct(),fa=Ot(),tN=rh(),gh=rr(),Ko=Ce(),zo=Qe(),nN=nh(),aN=ph(),iN=me(),oN=bh(),uN=R(),sN=uN("toStringTag"),pa=Error,cN=[].push,Xr=function(r,t){var n=eN(Vo,this),a;fa?a=fa(new pa,n?rN(this):Vo):(a=n?this:gh(Vo),Ko(a,sN,"Error")),t!==void 0&&Ko(a,"message",oN(t)),aN(a,Xr,a.stack,1),arguments.length>2&&nN(a,arguments[2]);var o=[];return iN(r,cN,{that:o}),Ko(a,"errors",o),a};fa?fa(Xr,pa):tN(Xr,pa,{name:!0});var Vo=Xr.prototype=gh(pa.prototype,{constructor:zo(1,Xr),message:zo(1,""),name:zo(1,"AggregateError")});Z2({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Yo=i(()=>{"use strict";qh()});var Jo=i((DW,xh)=>{"use strict";var Ft=P(),lN=Lr(),fN=Te(),va=function(e){return lN.slice(0,e.length)===e};xh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Ft.Bun&&typeof Bun.version=="string"?"BUN":Ft.Deno&&typeof Deno.version=="object"?"DENO":fN(Ft.process)==="process"?"NODE":Ft.window&&Ft.document?"BROWSER":"REST"}()});var Dt=i((BW,wh)=>{"use strict";var pN=Jo();wh.exports=pN==="NODE"});var Qo=i((GW,Eh)=>{"use strict";var vN=W(),dN=Vn(),mN=R(),hN=H(),Sh=mN("species");Eh.exports=function(e){var r=vN(e);hN&&r&&!r[Sh]&&dN(r,Sh,{configurable:!0,get:function(){return this}})}});var da=i((UW,Th)=>{"use strict";var yN=U(),bN=TypeError;Th.exports=function(e,r){if(yN(r,e))return e;throw new bN("Incorrect invocation")}});var Xo=i((HW,Ch)=>{"use strict";var gN=wt(),qN=Xe(),xN=TypeError;Ch.exports=function(e){if(gN(e))return e;throw new xN(qN(e)+" is not a constructor")}});var Zo=i((WW,kh)=>{"use strict";var Oh=X(),wN=Xo(),SN=fr(),EN=R(),TN=EN("species");kh.exports=function(e,r){var t=Oh(e).constructor,n;return t===void 0||SN(n=Oh(t)[TN])?r:wN(n)}});var _h=i((KW,Ih)=>{"use strict";var CN=TypeError;Ih.exports=function(e,r){if(e<r)throw new CN("Not enough arguments");return e}});var eu=i((zW,Ph)=>{"use strict";var ON=Lr();Ph.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(ON)});var cu=i((VW,Dh)=>{"use strict";var se=P(),kN=jr(),IN=Y(),Rh=M(),_N=K(),Fh=_(),Ah=Ki(),PN=mr(),Nh=In(),RN=_h(),AN=eu(),NN=Dt(),ou=se.setImmediate,uu=se.clearImmediate,MN=se.process,ru=se.Dispatch,jN=se.Function,Mh=se.MessageChannel,LN=se.String,tu=0,Bt={},jh="onreadystatechange",Gt,Er,nu,au;Fh(function(){Gt=se.location});var su=function(e){if(_N(Bt,e)){var r=Bt[e];delete Bt[e],r()}},iu=function(e){return function(){su(e)}},Lh=function(e){su(e.data)},$h=function(e){se.postMessage(LN(e),Gt.protocol+"//"+Gt.host)};(!ou||!uu)&&(ou=function(r){RN(arguments.length,1);var t=Rh(r)?r:jN(r),n=PN(arguments,1);return Bt[++tu]=function(){kN(t,void 0,n)},Er(tu),tu},uu=function(r){delete Bt[r]},NN?Er=function(e){MN.nextTick(iu(e))}:ru&&ru.now?Er=function(e){ru.now(iu(e))}:Mh&&!AN?(nu=new Mh,au=nu.port2,nu.port1.onmessage=Lh,Er=IN(au.postMessage,au)):se.addEventListener&&Rh(se.postMessage)&&!se.importScripts&&Gt&&Gt.protocol!=="file:"&&!Fh($h)?(Er=$h,se.addEventListener("message",Lh,!1)):jh in Nh("script")?Er=function(e){Ah.appendChild(Nh("script"))[jh]=function(){Ah.removeChild(this),su(e)}}:Er=function(e){setTimeout(iu(e),0)});Dh.exports={set:ou,clear:uu}});var Uh=i((YW,Gh)=>{"use strict";var Bh=P(),$N=H(),FN=Object.getOwnPropertyDescriptor;Gh.exports=function(e){if(!$N)return Bh[e];var r=FN(Bh,e);return r&&r.value}});var lu=i((JW,Wh)=>{"use strict";var Hh=function(){this.head=null,this.tail=null};Hh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Wh.exports=Hh});var zh=i((QW,Kh)=>{"use strict";var DN=Lr();Kh.exports=/ipad|iphone|ipod/i.test(DN)&&typeof Pebble<"u"});var Yh=i((XW,Vh)=>{"use strict";var BN=Lr();Vh.exports=/web0s(?!.*chrome)/i.test(BN)});var ty=i((ZW,ry)=>{"use strict";var et=P(),GN=Uh(),Jh=Y(),fu=cu().set,UN=lu(),HN=eu(),WN=zh(),KN=Yh(),pu=Dt(),Qh=et.MutationObserver||et.WebKitMutationObserver,Xh=et.document,Zh=et.process,ma=et.Promise,mu=GN("queueMicrotask"),Zr,vu,du,ha,ey;mu||(Ut=new UN,Ht=function(){var e,r;for(pu&&(e=Zh.domain)&&e.exit();r=Ut.get();)try{r()}catch(t){throw Ut.head&&Zr(),t}e&&e.enter()},!HN&&!pu&&!KN&&Qh&&Xh?(vu=!0,du=Xh.createTextNode(""),new Qh(Ht).observe(du,{characterData:!0}),Zr=function(){du.data=vu=!vu}):!WN&&ma&&ma.resolve?(ha=ma.resolve(void 0),ha.constructor=ma,ey=Jh(ha.then,ha),Zr=function(){ey(Ht)}):pu?Zr=function(){Zh.nextTick(Ht)}:(fu=Jh(fu,et),Zr=function(){fu(Ht)}),mu=function(e){Ut.head||Zr(),Ut.add(e)});var Ut,Ht;ry.exports=mu});var ay=i((eK,ny)=>{"use strict";ny.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((rK,iy)=>{"use strict";iy.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((tK,oy)=>{"use strict";var zN=P();oy.exports=zN.Promise});var rt=i((nK,ly)=>{"use strict";var VN=P(),Wt=Cr(),YN=M(),JN=wi(),QN=Ii(),XN=R(),uy=Jo(),ZN=Z(),hu=$r(),sy=Wt&&Wt.prototype,eM=XN("species"),yu=!1,cy=YN(VN.PromiseRejectionEvent),rM=JN("Promise",function(){var e=QN(Wt),r=e!==String(Wt);if(!r&&hu===66||ZN&&!(sy.catch&&sy.finally))return!0;if(!hu||hu<51||!/native code/.test(e)){var t=new Wt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[eM]=n,yu=t.then(function(){})instanceof n,!yu)return!0}return!r&&(uy==="BROWSER"||uy==="DENO")&&!cy});ly.exports={CONSTRUCTOR:rM,REJECTION_EVENT:cy,SUBCLASSING:yu}});var ke=i((aK,py)=>{"use strict";var fy=D(),tM=TypeError,nM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new tM("Bad Promise constructor");r=n,t=a}),this.resolve=fy(r),this.reject=fy(t)};py.exports.f=function(e){return new nM(e)}});var Ry=i(()=>{"use strict";var aM=q(),iM=Z(),qa=Dt(),ar=P(),oM=V(),it=G(),vy=Me(),dy=Ot(),uM=Le(),sM=Qo(),cM=D(),ga=M(),lM=$(),fM=da(),pM=Zo(),gy=cu().set,wu=ty(),vM=ay(),dM=Tr(),mM=lu(),qy=er(),xa=Cr(),Su=rt(),xy=ke(),wa="Promise",wy=Su.CONSTRUCTOR,hM=Su.REJECTION_EVENT,yM=Su.SUBCLASSING,bu=qy.getterFor(wa),bM=qy.set,tt=xa&&xa.prototype,Or=xa,ya=tt,Sy=ar.TypeError,gu=ar.document,Eu=ar.process,qu=xy.f,gM=qu,qM=!!(gu&&gu.createEvent&&ar.dispatchEvent),Ey="unhandledrejection",xM="rejectionhandled",my=0,Ty=1,wM=2,Tu=1,Cy=2,ba,hy,Oy,yy,ky=function(e){var r;return lM(e)&&ga(r=e.then)?r:!1},Iy=function(e,r){var t=r.value,n=r.state===Ty,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Cy&&EM(r),r.rejection=Tu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new Sy("Promise-chain cycle")):(l=ky(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},_y=function(e,r){e.notified||(e.notified=!0,wu(function(){for(var t=e.reactions,n;n=t.get();)Iy(n,e);e.notified=!1,r&&!e.rejection&&SM(e)}))},Py=function(e,r,t){var n,a;qM?(n=gu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!hM&&(a=ar["on"+e])?a(n):e===Ey&&vM("Unhandled promise rejection",t)},SM=function(e){it(gy,ar,function(){var r=e.facade,t=e.value,n=by(e),a;if(n&&(a=dM(function(){qa?Eu.emit("unhandledRejection",t,r):Py(Ey,r,t)}),e.rejection=qa||by(e)?Cy:Tu,a.error))throw a.value})},by=function(e){return e.rejection!==Tu&&!e.parent},EM=function(e){it(gy,ar,function(){var r=e.facade;qa?Eu.emit("rejectionHandled",r):Py(xM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=wM,_y(e,!0))},xu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Sy("Promise can't be resolved itself");var n=ky(r);n?wu(function(){var a={done:!1};try{it(n,r,nt(xu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Ty,_y(e,!1))}catch(a){at({done:!1},a,e)}}};if(wy&&(Or=function(r){fM(this,ya),cM(r),it(ba,this);var t=bu(this);try{r(nt(xu,t),nt(at,t))}catch(n){at(t,n)}},ya=Or.prototype,ba=function(r){bM(this,{type:wa,done:!1,notified:!1,parent:!1,reactions:new mM,rejection:!1,state:my,value:null})},ba.prototype=vy(ya,"then",function(r,t){var n=bu(this),a=qu(pM(this,Or));return n.parent=!0,a.ok=ga(r)?r:!0,a.fail=ga(t)&&t,a.domain=qa?Eu.domain:void 0,n.state===my?n.reactions.add(a):wu(function(){Iy(a,n)}),a.promise}),hy=function(){var e=new ba,r=bu(e);this.promise=e,this.resolve=nt(xu,r),this.reject=nt(at,r)},xy.f=qu=function(e){return e===Or||e===Oy?new hy(e):gM(e)},!iM&&ga(xa)&&tt!==Object.prototype)){yy=tt.then,yM||vy(tt,"then",function(r,t){var n=this;return new Or(function(a,o){it(yy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}dy&&dy(tt,ya)}aM({global:!0,constructor:!0,wrap:!0,forced:wy},{Promise:Or});Oy=oM.Promise;uM(Or,wa,!1,!0);sM(wa)});var Kt=i((uK,Ay)=>{"use strict";var TM=Cr(),CM=oo(),OM=rt().CONSTRUCTOR;Ay.exports=OM||!CM(function(e){TM.all(e).then(void 0,function(){})})});var Ny=i(()=>{"use strict";var kM=q(),IM=G(),_M=D(),PM=ke(),RM=Tr(),AM=me(),NM=Kt();kM({target:"Promise",stat:!0,forced:NM},{all:function(r){var t=this,n=PM.f(t),a=n.resolve,o=n.reject,u=RM(function(){var s=_M(t.resolve),c=[],l=0,f=1;AM(r,function(p){var v=l++,d=!1;f++,IM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var jy=i(()=>{"use strict";var MM=q(),jM=Z(),LM=rt().CONSTRUCTOR,Ou=Cr(),$M=W(),FM=M(),DM=Me(),My=Ou&&Ou.prototype;MM({target:"Promise",proto:!0,forced:LM,real:!0},{catch:function(e){return this.then(void 0,e)}});!jM&&FM(Ou)&&(Cu=$M("Promise").prototype.catch,My.catch!==Cu&&DM(My,"catch",Cu,{unsafe:!0}));var Cu});var Ly=i(()=>{"use strict";var BM=q(),GM=G(),UM=D(),HM=ke(),WM=Tr(),KM=me(),zM=Kt();BM({target:"Promise",stat:!0,forced:zM},{race:function(r){var t=this,n=HM.f(t),a=n.reject,o=WM(function(){var u=UM(t.resolve);KM(r,function(s){GM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var $y=i(()=>{"use strict";var VM=q(),YM=ke(),JM=rt().CONSTRUCTOR;VM({target:"Promise",stat:!0,forced:JM},{reject:function(r){var t=YM.f(this),n=t.reject;return n(r),t.promise}})});var ku=i((hK,Fy)=>{"use strict";var QM=X(),XM=$(),ZM=ke();Fy.exports=function(e,r){if(QM(e),XM(r)&&r.constructor===e)return r;var t=ZM.f(e),n=t.resolve;return n(r),t.promise}});var Gy=i(()=>{"use strict";var ej=q(),rj=W(),Dy=Z(),tj=Cr(),By=rt().CONSTRUCTOR,nj=ku(),aj=rj("Promise"),ij=Dy&&!By;ej({target:"Promise",stat:!0,forced:Dy||By},{resolve:function(r){return nj(ij&&this===aj?tj:this,r)}})});var Uy=i(()=>{"use strict";Ry();Ny();jy();Ly();$y();Gy()});var Iu=i(()=>{"use strict";var oj=q(),uj=G(),sj=D(),cj=ke(),lj=Tr(),fj=me(),pj=Kt();oj({target:"Promise",stat:!0,forced:pj},{allSettled:function(r){var t=this,n=cj.f(t),a=n.resolve,o=n.reject,u=lj(function(){var s=sj(t.resolve),c=[],l=0,f=1;fj(r,function(p){var v=l++,d=!1;f++,uj(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var _u=i(()=>{"use strict";var vj=q(),dj=G(),mj=D(),hj=W(),yj=ke(),bj=Tr(),gj=me(),qj=Kt(),Hy="No one promise resolved";vj({target:"Promise",stat:!0,forced:qj},{any:function(r){var t=this,n=hj("AggregateError"),a=yj.f(t),o=a.resolve,u=a.reject,s=bj(function(){var c=mj(t.resolve),l=[],f=0,p=1,v=!1;gj(r,function(d){var h=f++,m=!1;p++,dj(c,t,d).then(function(x){m||v||(v=!0,o(x))},function(x){m||v||(m=!0,l[h]=x,--p||u(new n(l,Hy)))})}),--p||u(new n(l,Hy))});return s.error&&u(s.value),a.promise}})});var Ru=i(()=>{"use strict";var xj=q(),wj=P(),Sj=jr(),Ej=mr(),Tj=ke(),Cj=D(),Ky=Tr(),Pu=wj.Promise,Wy=!1,Oj=!Pu||!Pu.try||Ky(function(){Pu.try(function(e){Wy=e===8},8)}).error||!Wy;xj({target:"Promise",stat:!0,forced:Oj},{try:function(e){var r=arguments.length>1?Ej(arguments,1):[],t=Tj.f(this),n=Ky(function(){return Sj(Cj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Au=i(()=>{"use strict";var kj=q(),Ij=ke();kj({target:"Promise",stat:!0},{withResolvers:function(){var r=Ij.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Jy=i(()=>{"use strict";var _j=q(),Pj=Z(),Sa=Cr(),Rj=_(),Vy=W(),Yy=M(),Aj=Zo(),zy=ku(),Nj=Me(),Mu=Sa&&Sa.prototype,Mj=!!Sa&&Rj(function(){Mu.finally.call({then:function(){}},function(){})});_j({target:"Promise",proto:!0,real:!0,forced:Mj},{finally:function(e){var r=Aj(this,Vy("Promise")),t=Yy(e);return this.then(t?function(n){return zy(r,e()).then(function(){return n})}:e,t?function(n){return zy(r,e()).then(function(){throw n})}:e)}});!Pj&&Yy(Sa)&&(Nu=Vy("Promise").prototype.finally,Mu.finally!==Nu&&Nj(Mu,"finally",Nu,{unsafe:!0}));var Nu});var Xy=i((PK,Qy)=>{"use strict";Yo();wr();Rt();Uy();Iu();_u();Ru();Au();Jy();br();var jj=V();Qy.exports=jj.Promise});var eb=i((RK,Zy)=>{"use strict";var Lj=Xy();Sr();Zy.exports=Lj});var rb=i(()=>{"use strict";Ru()});var tb=i(()=>{"use strict";Au()});var ab=i((LK,nb)=>{"use strict";var $j=eb();rb();tb();nb.exports=$j});var ib=i(()=>{"use strict";Yo()});var ob=i(()=>{"use strict";Iu()});var ub=i(()=>{"use strict";_u()});var cb=i((HK,sb)=>{"use strict";var Fj=ab();ib();ob();ub();sb.exports=Fj});var ot=i((WK,lb)=>{"use strict";lb.exports=cb()});var vb=i((JK,pb)=>{"use strict";No();var Dj=Vr();pb.exports=Dj.f("asyncIterator")});var mb=i((QK,db)=>{"use strict";var Bj=vb();db.exports=Bj});var yb=i((XK,hb)=>{"use strict";var Gj=mb();hb.exports=Gj});var gb=i((ZK,bb)=>{"use strict";var Uj=yb();bb.exports=Uj});var Ea=i((ez,qb)=>{"use strict";qb.exports=gb()});var Eb=i(()=>{"use strict";var Hj=q(),Wj=_(),Kj=te(),Sb=Ct(),zj=Ji(),Vj=Wj(function(){Sb(1)});Hj({target:"Object",stat:!0,forced:Vj,sham:!zj},{getPrototypeOf:function(r){return Sb(Kj(r))}})});var Cb=i((iz,Tb)=>{"use strict";Eb();var Yj=V();Tb.exports=Yj.Object.getPrototypeOf});var kb=i((oz,Ob)=>{"use strict";var Jj=Cb();Ob.exports=Jj});var _b=i((uz,Ib)=>{"use strict";var Qj=kb();Ib.exports=Qj});var Rb=i((sz,Pb)=>{"use strict";var Xj=_b();Pb.exports=Xj});var Ta=i((cz,Ab)=>{"use strict";Ab.exports=Rb()});var Mb=i(()=>{"use strict";var Zj=q(),eL=N(),rL=Ne(),tL=eL([].reverse),Nb=[1,2];Zj({target:"Array",proto:!0,forced:String(Nb)===String(Nb.reverse())},{reverse:function(){return rL(this)&&(this.length=this.length),tL(this)}})});var Lb=i((pz,jb)=>{"use strict";Mb();var nL=ue();jb.exports=nL("Array","reverse")});var Fb=i((vz,$b)=>{"use strict";var aL=U(),iL=Lb(),$u=Array.prototype;$b.exports=function(e){var r=e.reverse;return e===$u||aL($u,e)&&r===$u.reverse?iL:r}});var Bb=i((dz,Db)=>{"use strict";var oL=Fb();Db.exports=oL});var Ub=i((mz,Gb)=>{"use strict";var uL=Bb();Gb.exports=uL});var Wb=i((hz,Hb)=>{"use strict";var sL=Ub();Hb.exports=sL});var zb=i((yz,Kb)=>{"use strict";Kb.exports=Wb()});var Fu=i((bz,Yt)=>{function cL(e,r){this.v=e,this.k=r}Yt.exports=cL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Vb=i(()=>{"use strict";var lL=q(),fL=H(),pL=rr();lL({target:"Object",stat:!0,sham:!fL},{create:pL})});var Jb=i((xz,Yb)=>{"use strict";Vb();var vL=V(),dL=vL.Object;Yb.exports=function(r,t){return dL.create(r,t)}});var Xb=i((wz,Qb)=>{"use strict";var mL=Jb();Qb.exports=mL});var eg=i((Sz,Zb)=>{"use strict";var hL=Xb();Zb.exports=hL});var tg=i((Ez,rg)=>{"use strict";var yL=eg();rg.exports=yL});var Ca=i((Tz,ng)=>{"use strict";ng.exports=tg()});var Bu=i((Cz,ug)=>{"use strict";var ig=N(),bL=D(),gL=$(),qL=K(),ag=mr(),xL=Mr(),og=Function,wL=ig([].concat),SL=ig([].join),Du={},EL=function(e,r,t){if(!qL(Du,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Du[r]=og("C,a","return new C("+SL(n,",")+")")}return Du[r](e,t)};ug.exports=xL?og.bind:function(r){var t=bL(this),n=t.prototype,a=ag(arguments,1),o=function(){var s=wL(a,ag(arguments));return this instanceof o?EL(t,s.length,s):t.apply(r,s)};return gL(n)&&(o.prototype=n),o}});var cg=i(()=>{"use strict";var TL=q(),sg=Bu();TL({target:"Function",proto:!0,forced:Function.bind!==sg},{bind:sg})});var fg=i((Iz,lg)=>{"use strict";cg();var CL=ue();lg.exports=CL("Function","bind")});var vg=i((_z,pg)=>{"use strict";var OL=U(),kL=fg(),Gu=Function.prototype;pg.exports=function(e){var r=e.bind;return e===Gu||OL(Gu,e)&&r===Gu.bind?kL:r}});var mg=i((Pz,dg)=>{"use strict";var IL=vg();dg.exports=IL});var yg=i((Rz,hg)=>{"use strict";var _L=mg();hg.exports=_L});var gg=i((Az,bg)=>{"use strict";var PL=yg();bg.exports=PL});var Jt=i((Nz,qg)=>{"use strict";qg.exports=gg()});var xg=i(()=>{"use strict";var RL=q(),AL=Ot();RL({target:"Object",stat:!0},{setPrototypeOf:AL})});var Sg=i((Lz,wg)=>{"use strict";xg();var NL=V();wg.exports=NL.Object.setPrototypeOf});var Tg=i(($z,Eg)=>{"use strict";var ML=Sg();Eg.exports=ML});var Og=i((Fz,Cg)=>{"use strict";var jL=Tg();Cg.exports=jL});var Ig=i((Dz,kg)=>{"use strict";var LL=Og();kg.exports=LL});var Oa=i((Bz,_g)=>{"use strict";_g.exports=Ig()});var Rg=i(()=>{"use strict";var $L=q(),FL=H(),Pg=ne().f;$L({target:"Object",stat:!0,forced:Object.defineProperty!==Pg,sham:!FL},{defineProperty:Pg})});var Mg=i((Hz,Ng)=>{"use strict";Rg();var DL=V(),Ag=DL.Object,BL=Ng.exports=function(r,t,n){return Ag.defineProperty(r,t,n)};Ag.defineProperty.sham&&(BL.sham=!0)});var Lg=i((Wz,jg)=>{"use strict";var GL=Mg();jg.exports=GL});var Fg=i((Kz,$g)=>{"use strict";var UL=Lg();$g.exports=UL});var Bg=i((zz,Dg)=>{"use strict";var HL=Fg();Dg.exports=HL});var Qt=i((Vz,Gg)=>{"use strict";Gg.exports=Bg()});var Uu=i((Yz,Fe)=>{var WL=Qt();function ka(e,r,t,n){var a=WL;try{a({},"",{})}catch{a=0}Fe.exports=ka=function(u,s,c,l){function f(p,v){ka(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,ka(e,r,t,n)}Fe.exports=ka,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Wu=i((Jz,De)=>{var Ug=Oe(),Hu=Ca(),KL=Jt(),zL=Ta(),Hg=Oa(),_e=Uu();function Wg(){var e,r,t=typeof Ug=="function"?Ug:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var b=h&&h.prototype instanceof s?h:s,g=Hu(b.prototype);return _e(g,"_invoke",function(O,k,w){var E,S,C,L=0,Se=w||[],I=!1,re={p:0,n:0,v:e,a:Ee,f:KL(Ee).call(Ee,e,4),d:function(F,ye){return E=F,S=0,C=e,re.n=ye,u}};function Ee(Q,F){for(S=Q,C=F,r=0;!I&&L&&!ye&&r<Se.length;r++){var ye,T=Se[r],Nr=re.p,Ye=T[2];Q>3?(ye=Ye===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((ye=Q<2&&Nr<T[1])?(S=0,re.v=F,re.n=T[1]):Nr<Ye&&(ye=Q<3||T[0]>F||F>Ye)&&(T[4]=Q,T[5]=F,re.n=Ye,S=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(L>1)throw TypeError("Generator is already running");for(I&&F===1&&Ee(F,ye),S=F,C=ye;(r=S<2?e:C)||!I;){E||(S?S<3?(S>1&&(re.n=-1),Ee(S,C)):re.n=C:re.v=C);try{if(L=2,E){if(S||(Q="next"),r=E[Q]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);E=e}else if((r=(I=re.n<0)?C:O.call(k,re))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=zL;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Hu(f);function v(d){return Hg?Hg(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Hu(p),d}return c.prototype=l,_e(p,"constructor",l),_e(l,"constructor",c),c.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(p),_e(p,a,"Generator"),_e(p,n,function(){return this}),_e(p,"toString",function(){return"[object Generator]"}),(De.exports=Wg=function(){return{w:o,m:v}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Wg,De.exports.__esModule=!0,De.exports.default=De.exports});var Vu=i((Qz,Xt)=>{var VL=Oe(),YL=Ea(),JL=Fu(),Ku=Uu();function zu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof JL?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Ku(zu.prototype),Ku(zu.prototype,typeof VL=="function"&&YL||"@asyncIterator",function(){return this})),Ku(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Xt.exports=zu,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Yu=i((Xz,Zt)=>{var QL=ot(),XL=Wu(),ZL=Vu();function e$(e,r,t,n,a){return new ZL(XL().w(e,r,t,n),a||QL)}Zt.exports=e$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Kg=i((Zz,en)=>{var r$=Yu();function t$(e,r,t,n,a){var o=r$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}en.exports=t$,en.exports.__esModule=!0,en.exports.default=en.exports});var Yg=i((eV,Vg)=>{"use strict";var zg=Xe(),n$=TypeError;Vg.exports=function(e,r){if(!delete e[r])throw new n$("Cannot delete property "+zg(r)+" of "+zg(e))}});var Jg=i(()=>{"use strict";var a$=q(),i$=te(),o$=ve(),u$=Wr(),s$=Yg(),c$=Pt(),l$=[].unshift(0)!==1,f$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},p$=l$||!f$();a$({target:"Array",proto:!0,arity:1,forced:p$},{unshift:function(r){var t=i$(this),n=o$(t),a=arguments.length;if(a){c$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:s$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return u$(t,n+a)}})});var Xg=i((nV,Qg)=>{"use strict";Jg();var v$=ue();Qg.exports=v$("Array","unshift")});var eq=i((aV,Zg)=>{"use strict";var d$=U(),m$=Xg(),Ju=Array.prototype;Zg.exports=function(e){var r=e.unshift;return e===Ju||d$(Ju,e)&&r===Ju.unshift?m$:r}});var tq=i((iV,rq)=>{"use strict";var h$=eq();rq.exports=h$});var aq=i((oV,nq)=>{"use strict";var y$=tq();nq.exports=y$});var oq=i((uV,iq)=>{"use strict";var b$=aq();iq.exports=b$});var sq=i((sV,uq)=>{"use strict";uq.exports=oq()});var cq=i((cV,rn)=>{var g$=sq();function q$(e){var r=Object(e),t=[];for(var n in r)g$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}rn.exports=q$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var fq=i((lV,lq)=>{"use strict";wr();Rt();br();jo();var x$=Vr();lq.exports=x$.f("iterator")});var vq=i((fV,pq)=>{"use strict";var w$=fq();Sr();pq.exports=w$});var mq=i((pV,dq)=>{"use strict";var S$=vq();dq.exports=S$});var yq=i((vV,hq)=>{"use strict";var E$=mq();hq.exports=E$});var tn=i((dV,bq)=>{"use strict";bq.exports=yq()});var gq=i((mV,Be)=>{var Ia=Oe(),T$=tn();function Qu(e){"@babel/helpers - typeof";return Be.exports=Qu=typeof Ia=="function"&&typeof T$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ia=="function"&&r.constructor===Ia&&r!==Ia.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,Qu(e)}Be.exports=Qu,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var qq=i((hV,nn)=>{var C$=gq().default,O$=Oe(),k$=tn();function I$(e){if(e!=null){var r=e[typeof O$=="function"&&k$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(C$(e)+" is not iterable")}nn.exports=I$,nn.exports.__esModule=!0,nn.exports.default=nn.exports});var Sq=i((yV,Ge)=>{var xq=Ta(),_$=zb(),P$=Fu(),R$=Wu(),A$=Kg(),N$=Yu(),M$=Vu(),j$=cq(),wq=qq();function Xu(){"use strict";var e=R$(),r=e.m(Xu),t=(xq?xq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,wq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ge.exports=Xu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&_$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new P$(c,l)},AsyncIterator:M$,async:function(c,l,f,p,v){return(n(l)?N$:A$)(o(c),l,f,p,v)},keys:j$,values:wq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=Xu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var ce=i((bV,Eq)=>{var _a=Sq()();Eq.exports=_a;try{regeneratorRuntime=_a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=_a:Function("r","regeneratorRuntime = r")(_a)}});var Zu=i((Ra,Cq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});var Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ra.default=L$;function L$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=$$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function $$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Tq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):an(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Tq(m,2),b=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(b)>-1;return!!(E&&(!g||w.attribs[b]===g))},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L,Se){c(L)&&(C.push(L),Se())}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var b=x.findIndex(function(g){return g===m});if(b===v)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(b,g){return d(g)&&b.push(g),b},[]):d(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function an(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Cq.exports=Ra.default});var Na=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.convertNodeList=F$;Aa.escapeValue=D$;function F$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function D$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var jq=i((Ma,Mq)=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.default=B$;var _q=Na(),Oq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function B$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(g){return g===b}:b}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(b){b==="class"&&(d=!0);var g=l[b];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,_q.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[b]=function(O,k){return g.test(k)})}),d&&function(){var b=l.attribute;l.attribute=function(g,O,k){return l.class(O)||b&&b(g,O,k)}}();p!==n;){if(m(p)!==!0){if(kq(s,p,l,f,n)||Iq(p,l,f,n))break;kq(s,p,l,f),f.length===v&&Iq(p,l,f),f.length===v&&G$(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=Aq(s,p,l);f.unshift(x)}return f.join(" ")}function kq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Pq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Pq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var b=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?b===-1?0:-1:b-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,_q.escapeValue)(c.value),p=t[l]||t.attribute,v=Oq[l]||Oq.attribute;if(!Nq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Iq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Rq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Rq(e,r){var t=e.tagName.toLowerCase();return Nq(r.tag,null,t)?null:t}function G$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Aq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Aq(e,r,t){var n=Pq(e,r,t);return n||(n=Rq(r,t)),n}function Nq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Mq.exports=Ma.default});var es=i((La,Lq)=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.default=z$;var U$=Zu(),H$=K$(U$),W$=Na();function K$(e){return e&&e.__esModule?e:{default:e}}function z$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,W$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,H$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ja("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ja(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=ja("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ja(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ja(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var k=s[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),b=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=b();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Lq.exports=La.default});var rs=i($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.getCommonAncestor=V$;$a.getCommonProperties=Y$;function V$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function Y$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Uq=i(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});var J$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};on.getSingleSelector=ns;on.getMultiSelector=Gq;on.default=tF;var Q$=Zu(),Fq=ts(Q$),X$=jq(),Z$=ts(X$),eF=es(),Dq=ts(eF),$q=Na(),Bq=rs();function ts(e){return e&&e.__esModule?e:{default:e}}function ns(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":J$(e))+'")');var t=(0,Fq.default)(e,r),n=(0,Z$.default)(e,r),a=(0,Dq.default)(n,e,r);return t&&delete global.document,a}function Gq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,$q.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Fq.default)(e[0],r),n=(0,Bq.getCommonAncestor)(e,r),a=ns(n,r),o=rF(e),u=o[0],s=(0,Dq.default)(a+" "+u,e,r),c=(0,$q.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function rF(e){var r=(0,Bq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function tF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Gq(e,r):ns(e,r)}});var Kq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var as=Uq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return as.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return as.getMultiSelector}});var Hq=Wq(as),nF=es(),aF=Wq(nF),iF=rs(),oF=uF(iF);function uF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Wq(e){return e&&e.__esModule?e:{default:e}}ie.select=Hq.default;ie.optimize=aF.default;ie.common=oF;ie.default=Hq.default});var zq=i(()=>{"use strict";var yF=q(),bF=Ne();yF({target:"Array",stat:!0},{isArray:bF})});var Yq=i((MV,Vq)=>{"use strict";zq();var gF=V();Vq.exports=gF.Array.isArray});var Qq=i((jV,Jq)=>{"use strict";var qF=Yq();Jq.exports=qF});var Zq=i((LV,Xq)=>{"use strict";var xF=Qq();Xq.exports=xF});var rx=i(($V,ex)=>{"use strict";var wF=Zq();ex.exports=wF});var nx=i((FV,tx)=>{"use strict";tx.exports=rx()});var ox=i(()=>{"use strict";var SF=q(),EF=te(),TF=ve(),CF=Wr(),OF=Pt(),kF=_(),IF=kF(function(){return[].push.call({length:4294967296},1)!==4294967297}),_F=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},PF=IF||!_F();SF({target:"Array",proto:!0,arity:1,forced:PF},{push:function(r){var t=EF(this),n=TF(t),a=arguments.length;OF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return CF(t,n),n}})});var sx=i((UV,ux)=>{"use strict";ox();var RF=ue();ux.exports=RF("Array","push")});var lx=i((HV,cx)=>{"use strict";var AF=U(),NF=sx(),is=Array.prototype;cx.exports=function(e){var r=e.push;return e===is||AF(is,e)&&r===is.push?NF:r}});var px=i((WV,fx)=>{"use strict";var MF=lx();fx.exports=MF});var dx=i((KV,vx)=>{"use strict";var jF=px();vx.exports=jF});var hx=i((zV,mx)=>{"use strict";var LF=dx();mx.exports=LF});var os=i((VV,yx)=>{"use strict";yx.exports=hx()});var kx=i(()=>{"use strict";var $F=q(),FF=Nt().map,DF=St(),BF=DF("map");$F({target:"Array",proto:!0,forced:!BF},{map:function(r){return FF(this,r,arguments.length>1?arguments[1]:void 0)}})});var _x=i((w9,Ix)=>{"use strict";kx();var GF=ue();Ix.exports=GF("Array","map")});var Rx=i((S9,Px)=>{"use strict";var UF=U(),HF=_x(),ss=Array.prototype;Px.exports=function(e){var r=e.map;return e===ss||UF(ss,e)&&r===ss.map?HF:r}});var Nx=i((E9,Ax)=>{"use strict";var WF=Rx();Ax.exports=WF});var jx=i((T9,Mx)=>{"use strict";var KF=Nx();Mx.exports=KF});var $x=i((C9,Lx)=>{"use strict";var zF=jx();Lx.exports=zF});var Dx=i((O9,Fx)=>{"use strict";Fx.exports=$x()});var Gx=i((k9,Bx)=>{Bx.exports=Dx()});var Hx=i((I9,Ux)=>{Ux.exports=ot()});var Yx=i((_9,Vx)=>{"use strict";var VF=D(),YF=te(),JF=Tn(),QF=ve(),Wx=TypeError,Kx="Reduce of empty array with no initial value",zx=function(e){return function(r,t,n,a){var o=YF(r),u=JF(o),s=QF(o);if(VF(t),s===0&&n<2)throw new Wx(Kx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Wx(Kx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};Vx.exports={left:zx(!1),right:zx(!0)}});var cs=i((P9,Jx)=>{"use strict";var XF=_();Jx.exports=function(e,r){var t=[][e];return!!t&&XF(function(){t.call(null,r||function(){return 1},1)})}});var Xx=i(()=>{"use strict";var ZF=q(),eD=Yx().left,rD=cs(),Qx=$r(),tD=Dt(),nD=!tD&&Qx>79&&Qx<83,aD=nD||!rD("reduce");ZF({target:"Array",proto:!0,forced:aD},{reduce:function(r){var t=arguments.length;return eD(this,r,t,t>1?arguments[1]:void 0)}})});var ew=i((N9,Zx)=>{"use strict";Xx();var iD=ue();Zx.exports=iD("Array","reduce")});var tw=i((M9,rw)=>{"use strict";var oD=U(),uD=ew(),ls=Array.prototype;rw.exports=function(e){var r=e.reduce;return e===ls||oD(ls,e)&&r===ls.reduce?uD:r}});var aw=i((j9,nw)=>{"use strict";var sD=tw();nw.exports=sD});var ow=i((L9,iw)=>{"use strict";var cD=aw();iw.exports=cD});var sw=i(($9,uw)=>{"use strict";var lD=ow();uw.exports=lD});var lw=i((F9,cw)=>{"use strict";cw.exports=sw()});var pw=i((D9,fw)=>{fw.exports=lw()});var mw=i((B9,dw)=>{"use strict";var fD=Ne(),pD=ve(),vD=Pt(),dD=Y(),mD=Hr(),vw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?dD(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&fD(p)?(v=pD(p),c=vw(e,r,p,v,c,o-1)-1):(vD(c+1),mD(e,c,p)),c++),l++;return c};dw.exports=vw});var hw=i(()=>{"use strict";var hD=q(),yD=mw(),bD=D(),gD=te(),qD=ve(),xD=Kn();hD({target:"Array",proto:!0},{flatMap:function(r){var t=gD(this),n=qD(t),a;return bD(r),a=xD(t,0),yD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var yw=i(()=>{"use strict";var wD=$o();wD("flatMap")});var gw=i((K9,bw)=>{"use strict";hw();yw();var SD=ue();bw.exports=SD("Array","flatMap")});var xw=i((z9,qw)=>{"use strict";var ED=U(),TD=gw(),fs=Array.prototype;qw.exports=function(e){var r=e.flatMap;return e===fs||ED(fs,e)&&r===fs.flatMap?TD:r}});var Sw=i((V9,ww)=>{"use strict";var CD=xw();ww.exports=CD});var Tw=i((Y9,Ew)=>{"use strict";var OD=Sw();Ew.exports=OD});var Ow=i((J9,Cw)=>{"use strict";var kD=Tw();Cw.exports=kD});var Iw=i((Q9,kw)=>{"use strict";kw.exports=Ow()});var Pw=i((X9,_w)=>{_w.exports=Iw()});var Aw=i((Z9,Rw)=>{"use strict";so();var ID=ue();Rw.exports=ID("Array","concat")});var Mw=i((e7,Nw)=>{"use strict";var _D=U(),PD=Aw(),ps=Array.prototype;Nw.exports=function(e){var r=e.concat;return e===ps||_D(ps,e)&&r===ps.concat?PD:r}});var Lw=i((r7,jw)=>{"use strict";var RD=Mw();jw.exports=RD});var Fw=i((t7,$w)=>{"use strict";var AD=Lw();$w.exports=AD});var Bw=i((n7,Dw)=>{"use strict";var ND=Fw();Dw.exports=ND});var Uw=i((a7,Gw)=>{"use strict";Gw.exports=Bw()});var vs=i((i7,Hw)=>{Hw.exports=Uw()});var zw=i(()=>{});var Yw=i((k7,Vw)=>{"use strict";zw();Lo();var HD=Vr();Vw.exports=HD.f("toPrimitive")});var Qw=i((I7,Jw)=>{"use strict";var WD=Yw();Jw.exports=WD});var Zw=i((_7,Xw)=>{"use strict";var KD=Qw();Xw.exports=KD});var rS=i((P7,eS)=>{"use strict";var zD=Zw();eS.exports=zD});var nS=i((R7,tS)=>{"use strict";tS.exports=rS()});var pS=i((Z7,fS)=>{"use strict";var YD=$(),JD=Te(),QD=R(),XD=QD("match");fS.exports=function(e){var r;return YD(e)&&((r=e[XD])!==void 0?!!r:JD(e)==="RegExp")}});var dS=i((eY,vS)=>{"use strict";var ZD=pS(),e3=TypeError;vS.exports=function(e){if(ZD(e))throw new e3("The method doesn't accept regular expressions");return e}});var hS=i((rY,mS)=>{"use strict";var r3=R(),t3=r3("match");mS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[t3]=!1,"/./"[e](r)}catch{}}return!1}});var gS=i(()=>{"use strict";var n3=q(),a3=mt(),i3=yt().f,o3=Ri(),yS=Ze(),u3=dS(),s3=pr(),c3=hS(),l3=Z(),f3=a3("".slice),p3=Math.min,bS=c3("startsWith"),v3=!l3&&!bS&&!!function(){var e=i3(String.prototype,"startsWith");return e&&!e.writable}();n3({target:"String",proto:!0,forced:!v3&&!bS},{startsWith:function(r){var t=yS(s3(this));u3(r);var n=o3(p3(arguments.length>1?arguments[1]:void 0,t.length)),a=yS(r);return f3(t,n,n+a.length)===a}})});var xS=i((aY,qS)=>{"use strict";gS();var d3=ue();qS.exports=d3("String","startsWith")});var SS=i((iY,wS)=>{"use strict";var m3=U(),h3=xS(),ys=String.prototype;wS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===ys||m3(ys,e)&&r===ys.startsWith?h3:r}});var TS=i((oY,ES)=>{"use strict";var y3=SS();ES.exports=y3});var OS=i((uY,CS)=>{"use strict";var b3=TS();CS.exports=b3});var IS=i((sY,kS)=>{"use strict";var g3=OS();kS.exports=g3});var PS=i((cY,_S)=>{"use strict";_S.exports=IS()});var AS=i((lY,RS)=>{RS.exports=PS()});var NS=i(()=>{"use strict";var q3=q(),x3=Nt().filter,w3=St(),S3=w3("filter");q3({target:"Array",proto:!0,forced:!S3},{filter:function(r){return x3(this,r,arguments.length>1?arguments[1]:void 0)}})});var jS=i((vY,MS)=>{"use strict";NS();var E3=ue();MS.exports=E3("Array","filter")});var $S=i((dY,LS)=>{"use strict";var T3=U(),C3=jS(),bs=Array.prototype;LS.exports=function(e){var r=e.filter;return e===bs||T3(bs,e)&&r===bs.filter?C3:r}});var DS=i((mY,FS)=>{"use strict";var O3=$S();FS.exports=O3});var GS=i((hY,BS)=>{"use strict";var k3=DS();BS.exports=k3});var HS=i((yY,US)=>{"use strict";var I3=GS();US.exports=I3});var KS=i((bY,WS)=>{"use strict";WS.exports=HS()});var VS=i((gY,zS)=>{zS.exports=KS()});var lE=i(()=>{"use strict";var L3=q(),$3=W(),qs=jr(),F3=Bu(),aE=Xo(),D3=X(),iE=$(),B3=rr(),uE=_(),xs=$3("Reflect","construct"),G3=Object.prototype,U3=[].push,sE=uE(function(){function e(){}return!(xs(function(){},[],e)instanceof e)}),cE=!uE(function(){xs(function(){})}),oE=sE||cE;L3({target:"Reflect",stat:!0,forced:oE,sham:oE},{construct:function(r,t){aE(r),D3(t);var n=arguments.length<3?r:aE(arguments[2]);if(cE&&!sE)return xs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return qs(U3,a,t),new(qs(F3,r,a))}var o=n.prototype,u=B3(iE(o)?o:G3),s=qs(r,u,t);return iE(s)?s:u}})});var pE=i((ZY,fE)=>{"use strict";lE();var H3=V();fE.exports=H3.Reflect.construct});var dE=i((eJ,vE)=>{"use strict";var W3=pE();vE.exports=W3});var hE=i((rJ,mE)=>{"use strict";var K3=dE();mE.exports=K3});var bE=i((tJ,yE)=>{"use strict";var z3=hE();yE.exports=z3});var Wa=i((nJ,gE)=>{"use strict";gE.exports=bE()});var xE=i((aJ,qE)=>{qE.exports=Wa()});var _E=i((vJ,IE)=>{"use strict";var V3=_();IE.exports=V3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var AE=i((dJ,RE)=>{"use strict";var Y3=_(),J3=$(),Q3=Te(),PE=_E(),Ka=Object.isExtensible,X3=Y3(function(){Ka(1)});RE.exports=X3||PE?function(r){return!J3(r)||PE&&Q3(r)==="ArrayBuffer"?!1:Ka?Ka(r):!0}:Ka});var ME=i((mJ,NE)=>{"use strict";var Z3=_();NE.exports=!Z3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ks=i((hJ,$E)=>{"use strict";var e4=q(),r4=N(),t4=zr(),n4=$(),Ts=K(),a4=ne().f,jE=At(),i4=co(),Cs=AE(),o4=Dr(),u4=ME(),LE=!1,We=o4("meta"),s4=0,Os=function(e){a4(e,We,{value:{objectID:"O"+s4++,weakData:{}}})},c4=function(e,r){if(!n4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Ts(e,We)){if(!Cs(e))return"F";if(!r)return"E";Os(e)}return e[We].objectID},l4=function(e,r){if(!Ts(e,We)){if(!Cs(e))return!0;if(!r)return!1;Os(e)}return e[We].weakData},f4=function(e){return u4&&LE&&Cs(e)&&!Ts(e,We)&&Os(e),e},p4=function(){v4.enable=function(){},LE=!0;var e=jE.f,r=r4([].splice),t={};t[We]=1,e(t).length&&(jE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},e4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:i4.f}))},v4=$E.exports={enable:p4,fastKey:c4,getWeakData:l4,onFreeze:f4};t4[We]=!0});var BE=i((yJ,DE)=>{"use strict";var d4=q(),m4=P(),h4=ks(),y4=_(),b4=Ce(),g4=me(),q4=da(),x4=M(),w4=$(),S4=fr(),E4=Le(),T4=ne().f,C4=Nt().forEach,O4=H(),FE=er(),k4=FE.set,I4=FE.getterFor;DE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=m4[e],s=u&&u.prototype,c={},l;if(!O4||!x4(u)||!(a||s.forEach&&!y4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),h4.enable();else{l=r(function(v,d){k4(q4(v,f),{type:e,collection:new u}),S4(d)||g4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=I4(e);C4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&b4(f,v,function(h,m){var x=p(this).collection;if(!d&&a&&!w4(h))return v==="get"?void 0:!1;var b=x[v](h===0?0:h,m);return d?this:b})}),a||T4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return E4(l,e,!1,!0),c[e]=l,d4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var UE=i((bJ,GE)=>{"use strict";var _4=Me();GE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:_4(e,n,r[n],t);return e}});var JE=i((gJ,YE)=>{"use strict";var HE=rr(),P4=Vn(),WE=UE(),R4=Y(),A4=da(),N4=fr(),M4=me(),j4=Gn(),za=Un(),L4=Qo(),pn=H(),KE=ks().fastKey,VE=er(),zE=VE.set,Is=VE.getterFor;YE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){A4(l,o),zE(l,{type:r,index:HE(null),first:null,last:null,size:0}),pn||(l.size=0),N4(f)||M4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Is(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=KE(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),pn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=KE(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return WE(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=HE(null),pn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),pn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=R4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),WE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),pn&&P4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Is(r),o=Is(n);j4(e,r,function(u,s){zE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,za(void 0,!0)):za(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),L4(r)}}});var QE=i(()=>{"use strict";var $4=BE(),F4=JE();$4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},F4)});var XE=i(()=>{"use strict";QE()});var eT=i((EJ,ZE)=>{"use strict";ZE.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((TJ,tT)=>{"use strict";var D4=W(),Va=eT(),rT=D4("Map");tT.exports={Map:rT,set:Va("set",2),get:Va("get",1),has:Va("has",1),remove:Va("delete",1),proto:rT.prototype}});var _s=i(()=>{"use strict";var B4=q(),G4=N(),U4=D(),H4=pr(),W4=me(),Ya=oe(),nT=Z(),K4=_(),aT=Ya.Map,z4=Ya.has,V4=Ya.get,Y4=Ya.set,J4=G4([].push),Q4=nT||K4(function(){return aT.groupBy("ab",function(e){return e}).get("a").length!==1});B4({target:"Map",stat:!0,forced:nT||Q4},{groupBy:function(r,t){H4(r),U4(t);var n=new aT,a=0;return W4(r,function(o){var u=t(o,a++);z4(n,u)?J4(V4(n,u),o):Y4(n,u,[o])}),n}})});var J=i((kJ,iT)=>{"use strict";var X4=Xe(),Z4=TypeError;iT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new Z4(X4(e)+" is not a map")}});var Rs=i(()=>{"use strict";var eB=q(),rB=J(),Ps=oe(),tB=Z(),nB=Ps.get,aB=Ps.has,iB=Ps.set;eB({target:"Map",proto:!0,real:!0,forced:tB},{getOrInsert:function(r,t){return aB(rB(this),r)?nB(this,r):(iB(this,r,t),t)}})});var Ns=i(()=>{"use strict";var oB=q(),uB=D(),sB=J(),As=oe(),cB=Z(),lB=As.get,fB=As.has,pB=As.set;oB({target:"Map",proto:!0,real:!0,forced:cB},{getOrInsertComputed:function(r,t){if(sB(this),uB(t),fB(this,r))return lB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return pB(this,r,n),n}})});var uT=i((AJ,oT)=>{"use strict";wr();XE();_s();Rs();Ns();Rt();br();var vB=V();oT.exports=vB.Map});var cT=i((NJ,sT)=>{"use strict";var dB=uT();Sr();sT.exports=dB});var Ms=i(()=>{"use strict";Rs()});var js=i(()=>{"use strict";Ns()});var lT=i(()=>{"use strict";_s()});var pT=i((BJ,fT)=>{"use strict";var mB=cT();Ms();js();lT();fT.exports=mB});var dT=i((GJ,vT)=>{"use strict";var hB=Y(),yB=X(),bB=te(),gB=me();vT.exports=function(e,r,t){return function(a){var o=bB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?hB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return gB(o,function(v){var d=c?l(v,p++):v;t?r(f,yB(d)[0],d[1]):r(f,d)}),f}}});var hT=i(()=>{"use strict";var qB=q(),mT=oe(),xB=dT();qB({target:"Map",stat:!0,forced:!0},{from:xB(mT.Map,mT.set,!0)})});var bT=i((WJ,yT)=>{"use strict";var wB=X();yT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,wB(s)[0],s[1]):r(a,s)}return a}}});var qT=i(()=>{"use strict";var SB=q(),gT=oe(),EB=bT();SB({target:"Map",stat:!0,forced:!0},{of:EB(gT.Map,gT.set,!0)})});var wT=i(()=>{"use strict";var TB=q(),CB=G(),OB=me(),kB=M(),xT=D(),IB=oe().Map;TB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=kB(this)?this:IB,a=new n;xT(t);var o=xT(a.set);return OB(r,function(u){CB(o,a,t(u),u)}),a}})});var ST=i(()=>{"use strict";var _B=q(),PB=J(),RB=oe().remove;_B({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=PB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=RB(r,arguments[a]),t=t&&n;return!!t}})});var TT=i(()=>{"use strict";var AB=q(),NB=J(),Ls=oe(),MB=Ls.get,jB=Ls.has,ET=Ls.set;AB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=NB(this),a,o;return jB(n,r)?(a=MB(n,r),"update"in t&&(a=t.update(a,r,n),ET(n,r,a)),a):(o=t.insert(r,n),ET(n,r,o),o)}})});var OT=i((eQ,CT)=>{"use strict";var LB=G();CT.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=LB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((rQ,kT)=>{"use strict";var $B=OT();kT.exports=function(e,r,t){return t?$B(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var IT=i(()=>{"use strict";var FB=q(),DB=Y(),BB=J(),GB=qe();FB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=BB(this),n=DB(r,arguments.length>1?arguments[1]:void 0);return GB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var PT=i(()=>{"use strict";var UB=q(),HB=Y(),WB=J(),_T=oe(),KB=qe(),zB=_T.Map,VB=_T.set;UB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=WB(this),n=HB(r,arguments.length>1?arguments[1]:void 0),a=new zB;return KB(t,function(o,u){n(o,u,t)&&VB(a,u,o)}),a}})});var RT=i(()=>{"use strict";var YB=q(),JB=Y(),QB=J(),XB=qe();YB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=QB(this),n=JB(r,arguments.length>1?arguments[1]:void 0),a=XB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var AT=i(()=>{"use strict";var ZB=q(),e5=Y(),r5=J(),t5=qe();ZB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=r5(this),n=e5(r,arguments.length>1?arguments[1]:void 0),a=t5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var MT=i((lQ,NT)=>{"use strict";NT.exports=function(e,r){return e===r||e!==e&&r!==r}});var jT=i(()=>{"use strict";var n5=q(),a5=MT(),i5=J(),o5=qe();n5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return o5(i5(this),function(t){if(a5(t,r))return!0},!0)===!0}})});var LT=i(()=>{"use strict";var u5=q(),s5=J(),c5=qe();u5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=c5(s5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var FT=i(()=>{"use strict";var l5=q(),f5=Y(),p5=J(),$T=oe(),v5=qe(),d5=$T.Map,m5=$T.set;l5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=p5(this),n=f5(r,arguments.length>1?arguments[1]:void 0),a=new d5;return v5(t,function(o,u){m5(a,n(o,u,t),o)}),a}})});var BT=i(()=>{"use strict";var h5=q(),y5=Y(),b5=J(),DT=oe(),g5=qe(),q5=DT.Map,x5=DT.set;h5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=b5(this),n=y5(r,arguments.length>1?arguments[1]:void 0),a=new q5;return g5(t,function(o,u){x5(a,u,n(o,u,t))}),a}})});var GT=i(()=>{"use strict";var w5=q(),S5=J(),E5=me(),T5=oe().set;w5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=S5(this),n=arguments.length,a=0;a<n;)E5(arguments[a++],function(o,u){T5(t,o,u)},{AS_ENTRIES:!0});return t}})});var UT=i(()=>{"use strict";var C5=q(),O5=D(),k5=J(),I5=qe(),_5=TypeError;C5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=k5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(O5(r),I5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new _5("Reduce of empty map with no initial value");return a}})});var HT=i(()=>{"use strict";var P5=q(),R5=Y(),A5=J(),N5=qe();P5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=A5(this),n=R5(r,arguments.length>1?arguments[1]:void 0);return N5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var KT=i(()=>{"use strict";var M5=q(),WT=D(),j5=J(),$s=oe(),L5=TypeError,$5=$s.get,F5=$s.has,D5=$s.set;M5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=j5(this),a=arguments.length;WT(t);var o=F5(n,r);if(!o&&a<3)throw new L5("Updating absent value");var u=o?$5(n,r):WT(a>2?arguments[2]:void 0)(r,n);return D5(n,r,t(u,r,n)),n}})});var Ds=i((OQ,zT)=>{"use strict";var Ja=G(),Fs=D(),Qa=M(),B5=X(),G5=TypeError;zT.exports=function(r,t){var n=B5(this),a=Fs(n.get),o=Fs(n.has),u=Fs(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Qa(t)&&!Qa(s))throw new G5("At least one callback required");return Ja(o,n,r)?(c=Ja(a,n,r),Qa(t)&&(c=t(c),Ja(u,n,r,c))):Qa(s)&&(c=s(),Ja(u,n,r,c)),c}});var VT=i(()=>{"use strict";var U5=q(),H5=Ds();U5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:H5})});var YT=i(()=>{"use strict";var W5=q(),K5=Ds();W5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:K5})});var QT=i((RQ,JT)=>{"use strict";var z5=pT();hT();qT();wT();ST();TT();IT();PT();RT();AT();jT();Ms();js();LT();FT();BT();GT();UT();HT();KT();VT();YT();JT.exports=z5});var ZT=i((AQ,XT)=>{"use strict";XT.exports=QT()});var r0=i(()=>{"use strict";var V5=q(),Y5=mt(),J5=Gi().indexOf,Q5=cs(),Bs=Y5([].indexOf),e0=!!Bs&&1/Bs([1],1,-0)<0,X5=e0||!Q5("indexOf");V5({target:"Array",proto:!0,forced:X5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return e0?Bs(this,r,t)||0:J5(this,r,t)}})});var n0=i((jQ,t0)=>{"use strict";r0();var Z5=ue();t0.exports=Z5("Array","indexOf")});var i0=i((LQ,a0)=>{"use strict";var e6=U(),r6=n0(),Gs=Array.prototype;a0.exports=function(e){var r=e.indexOf;return e===Gs||e6(Gs,e)&&r===Gs.indexOf?r6:r}});var u0=i(($Q,o0)=>{"use strict";var t6=i0();o0.exports=t6});var c0=i((FQ,s0)=>{"use strict";var n6=u0();s0.exports=n6});var f0=i((DQ,l0)=>{"use strict";var a6=c0();l0.exports=a6});var v0=i((BQ,p0)=>{"use strict";p0.exports=f0()});var _0=i(()=>{"use strict";var l6=q(),f6=te(),I0=Ln(),p6=_(),v6=p6(function(){I0(1)});l6({target:"Object",stat:!0,forced:v6},{keys:function(r){return I0(f6(r))}})});var R0=i((KX,P0)=>{"use strict";_0();var d6=V();P0.exports=d6.Object.keys});var N0=i((zX,A0)=>{"use strict";var m6=R0();A0.exports=m6});var j0=i((VX,M0)=>{"use strict";var h6=N0();M0.exports=h6});var $0=i((YX,L0)=>{"use strict";var y6=j0();L0.exports=y6});var D0=i((JX,F0)=>{"use strict";F0.exports=$0()});var G0=i((QX,B0)=>{B0.exports=D0()});var Ys=i((cZ,H0)=>{var Vs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},E6=Vs.yellow,T6=Object.keys(Vs),C6=/^#[0-9a-fA-F]{6}$/;H0.exports={COLOR_PRESETS:Vs,DEFAULT_COLOR:E6,PRESET_NAMES:T6,HEX_COLOR_REGEX:C6}});var sC=i((TZ,uC)=>{var oC={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},P6=Object.keys(oC);uC.exports={ALLOWED_REACTIONS:oC,ALLOWED_REACTION_EMOJIS:P6}});var Je="";function fc(e){Je=e.replace(/\/+$/,"")}async function lr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function pc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await lr(n,"Failed to fetch comments"),(await n.json()).data}async function ii({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await lr(f,"Failed to create comment"),f.json()}async function oi(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await lr(a,"Failed to update comment"),a.json()}async function vc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await lr(t,"Failed to update comment status"),t.json()}async function dc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await lr(r,"Failed to delete comment")}async function mc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await lr(n,"Failed to add reaction"),n.json()}async function hc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await lr(n,"Failed to remove reaction"),n.json()}var lF=y(Kr(),1),fF=y(Wn(),1),pF=y(ua(),1),vF=y(sa(),1),dF=y(ca(),1);var ju=y(ot(),1);function fb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):ju.default.resolve(c).then(n,a)}function kr(e){return function(){var r=this,t=arguments;return new ju.default(function(n,a){var o=e.apply(r,t);function u(c){fb(o,n,a,u,s,"next",c)}function s(c){fb(o,n,a,u,s,"throw",c)}u(void 0)})}}function zt(e,r){this.v=e,this.k=r}function ir(e){return new zt(e,0)}var Lu=y(ot(),1),xb=y(Oe(),1),wb=y(Ea(),1);function Ie(e){return function(){return new Vt(e.apply(this,arguments))}}function Vt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof zt;Lu.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Lu.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Vt.prototype[typeof xb.default=="function"&&wb.default||"@@asyncIterator"]=function(){return this},Vt.prototype.next=function(e){return this._invoke("next",e)},Vt.prototype.throw=function(e){return this._invoke("throw",e)},Vt.prototype.return=function(e){return this._invoke("return",e)};var mF=y(ce(),1),hF=y(Kq(),1);function le(e){var r,t=sF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function sF(e){return"startContainer"in e}function ur(e){if(cF(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function cF(e){return"startContainer"in e}var ax=y(nx(),1);function ix(e){if((0,ax.default)(e))return e}var bx=y(Oe(),1),gx=y(Wo(),1),qx=y(os(),1);function xx(e,r){var t=e==null?null:typeof bx.default<"u"&&(0,gx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,qx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var wx=y(Mi(),1),Sx=y(uo(),1);function Fa(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function us(e,r){if(e){var t;if(typeof e=="string")return Fa(e,r);var n=(0,wx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Sx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fa(e,r):void 0}}function Ex(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return ix(e)||xx(e,r)||us(e,r)||Ex()}var Tx=y(Oe(),1),Cx=y(Ea(),1),Ox=y(tn(),1),un=y(ot(),1);function st(e){var r,t,n,a=2;for(typeof Tx.default<"u"&&(t=Cx.default,n=Ox.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Da(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Da(e){function r(t){if(Object(t)!==t)return un.default.reject(new TypeError(t+" is not an object."));var n=t.done;return un.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Da=function(n){this.s=n,this.n=n.next},Da.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?un.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?un.default.reject(n):r(a.apply(this.s,arguments))}},new Da(e)}var UD=y(ce(),1);var LD=y(ce(),1),$D=y(Gx(),1),FD=y(Hx(),1),DD=y(pw(),1),BD=y(Pw(),1),GD=y(vs(),1);var Ws=y(ce(),1);var j3=y(ce(),1);var ms=y(ce(),1);function sn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Ww(e,r){return sn(e.startChunk,r.startChunk)&&sn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Ir(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ds=y(Qt(),1);var cn=y(Oe(),1),Kw=y(tn(),1);function He(e){"@babel/helpers - typeof";return He=typeof cn.default=="function"&&typeof Kw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof cn.default=="function"&&r.constructor===cn.default&&r!==cn.default.prototype?"symbol":typeof r},He(e)}var aS=y(nS(),1);function iS(e,r){if(He(e)!="object"||!e)return e;var t=e[aS.default];if(t!==void 0){var n=t.call(e,r||"default");if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ba(e){var r=iS(e,"string");return He(r)=="symbol"?r:r+""}function oS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ds.default)(e,Ba(n.key),n)}}function ln(e,r,t){return r&&oS(e.prototype,r),t&&oS(e,t),(0,ds.default)(e,"prototype",{writable:!1}),e}var uS=y(Qt(),1);function _r(e,r,t){return(r=Ba(r))in e?(0,uS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var sS=y(Kr(),1);var Ga="Iterator exhausted before seek ended.",fn=function(){function e(r){Ir(this,e),this.chunker=r,_r(this,"currentChunkPosition",0),_r(this,"offsetInChunk",0),this.seekTo(0)}return ln(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!sn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Ue(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ga)}else for(;!sn(this.currentChunk,n);){var s=this._readToNextChunk(),c=Ue(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ga)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,sS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Ue(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ga)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],b=m[1];if(t&&(u=x+u),b===null){if(o)break;throw new RangeError(Ga)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function lS(e,r){return hs.apply(this,arguments)}function hs(){return hs=kr(ms.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,x,b,g,O,k,w,E,S,C,L=arguments;return ms.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new fn(t()),p=new fn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-m())/2),d=f.read(-x,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=s-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ua(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ua(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},k=Ha(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Ww(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(E.startChunk,E.startIndex-d.length),S=cS(f,p,!0),S!==void 0&&!o&&(S=Ua(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=cS(f,p,!1),C!==void 0&&!o&&(C=C+Ua(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),hs.apply(this,arguments)}function cS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ua(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(VD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function VD(e){return/^\s+$/.test(e)}var QS=y(Kr(),1),XS=y(Wn(),1),ZS=y(ua(),1),eE=y(sa(),1),rE=y(ca(),1);var gs=y(ce(),1),tE=y(AS(),1),nE=y(VS(),1);function YS(e,r){var t;if(typeof ZS.default>"u"||(0,eE.default)(e)==null){if(Array.isArray(e)||(t=_3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,rE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function _3(e,r){var t;if(e){if(typeof e=="string")return JS(e,r);var n=(0,QS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,XS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return JS(e,r)}}function JS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ha(e){return function(){var r=Ie(gs.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,x,b,g,O,k,w,E,S,C,L,Se,I,re,Ee,Q,F;return gs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=YS(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,b=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-b,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-b,(O<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=c.length-b,!(k<=v.length)){T.next=24;break}if(!(0,tE.default)(v).call(v,c.substring(b))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:v===c.substring(b,b+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=d,!(c.length<=v.length)){T.next=49;break}w=0;case 38:if(!(w<=v.length)){T.next=49;break}if(E=v.indexOf(c,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(v.length-c.length+1,0),L=function(Ye){var cc=v[Ye];S=(0,nE.default)(S).call(S,function(wC){return cc===c[Ye-wC]}),cc===c[0]&&S.push(Ye)},Se=C;Se<v.length;Se++)L(Se);I=YS(S);try{for(I.s();!(re=I.n()).done;)Ee=re.value,Q=v.length-Ee,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ee+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ee+u.length),l.push(F)}catch(Nr){I.e(Nr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var N3=y(ce(),1);var P3=y(Kr(),1),R3=y(vs(),1);var M3=y(ce(),1);var dn=y(xE(),1);var SE=y(Ca(),1),EE=y(Qt(),1);var ws=y(Oa(),1),wE=y(Jt(),1);function sr(e,r){var t;return sr=ws.default?(0,wE.default)(t=ws.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function Ss(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,SE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,EE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function TE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CE(e,r){if(r&&(He(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return TE(e)}var OE=y(Oa(),1),kE=y(Jt(),1),Es=y(Ta(),1);function Pr(e){var r;return Pr=OE.default?(0,kE.default)(r=Es.default).call(r):function(t){return t.__proto__||(0,Es.default)(t)},Pr(e)}var Hs=y(ZT(),1),x0=y(Ca(),1);var d0=y(v0(),1);function m0(e){try{var r;return(0,d0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var y0=y(Wa(),1),b0=y(os(),1),g0=y(Jt(),1);var h0=y(Wa(),1);function Us(){try{var e=!Boolean.prototype.valueOf.call((0,h0.default)(Boolean,[],function(){}))}catch{}return(Us=function(){return!!e})()}function q0(e,r,t){if(Us())return y0.default.apply(null,arguments);var n=[null];(0,b0.default)(n).apply(n,r);var a=new((0,g0.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function vn(e){var r=typeof Hs.default=="function"?new Hs.default:void 0;return vn=function(n){if(n===null||!m0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return q0(n,arguments,Pr(this).constructor)}return a.prototype=(0,x0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},vn(e)}function E0(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=w0(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=w0(e.endContainer,e.endOffset),l=Ue(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function w0(e,r){var t;if(S0(e))return[e,r];var n;if(i6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(S0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function S0(e){return e.nodeType===Node.TEXT_NODE}function i6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function C0(e){var r=o6();return function(){var n=Pr(e),a;if(r){var o=Pr(this).constructor;a=(0,dn.default)(n,arguments,o)}else a=n.apply(this,arguments);return CE(this,a)}}function o6(){if(typeof Reflect>"u"||!dn.default||dn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,dn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Xa=function(e){Ss(t,e);var r=C0(t);function t(n){return Ir(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(vn(TypeError)),u6=function(e){Ss(t,e);var r=C0(t);function t(n){return Ir(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(vn(TypeError)),Rr=function(){function e(r){var t=this;if(Ir(this,e),_r(this,"scope",void 0),_r(this,"iter",void 0),this.scope=ur(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!T0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Xa}}return ln(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!T0(t))throw new Xa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new u6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=E0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function T0(e){return e.nodeType===Node.TEXT_NODE}function O0(e,r){return Ks.apply(this,arguments)}function Ks(){return Ks=kr(Ws.default.mark(function e(r,t){var n,a,o,u=arguments;return Ws.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??le(r)),o=new Rr(a),c.next=5,lS(o.rangeToChunkRange(r),function(){return new Rr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ks.apply(this,arguments)}var zs=y(ce(),1);function k0(e){var r=Ha(e);return function(){var t=Ie(zs.default.mark(function a(o){var u,s,c,l,f,p,v,d;return zs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Rr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Xa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var s6=y(ce(),1);var c6=y(ce(),1);var b6=y(G0(),1),g6=y(Kr(),1),q6=y(Wn(),1),x6=y(ua(),1),w6=y(sa(),1),S6=y(ca(),1);async function U0(e,r){let t=await O0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function ct(e,r){let t=k0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=y(Ys()),mn=y(Ys());function lt(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return mn.COLOR_PRESETS[r]?mn.COLOR_PRESETS[r]:mn.HEX_COLOR_REGEX.test(r)?r:null}function Za(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var ft="fb-highlight",W0="fb-highlight-active",ei=new Map,hn=null;function z0(e){hn=e}function pt(e,r,t){let n=lt(t)||he.DEFAULT_COLOR;ei.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=K0(e,r,n);a.push(o)}else{let o=k6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(K0(c,r,n))}}return a}function K0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return O6(e,r,u,t);let s=document.createElement("mark");s.className=ft,s.dataset.commentId=r,s.style.backgroundColor=Za(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{hn&&hn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function O6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",ft),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let b=0;b<a.length;b++){let g=a[b],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",v.appendChild(O)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=b=>{b.preventDefault(),b.stopPropagation(),hn&&hn(r)};return h.forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",x),b.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function yn(e){ei.delete(e),document.querySelectorAll(`.${ft}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function V0(){ei.clear(),document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function bn(e){document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ei.get(t)||he.DEFAULT_COLOR,o=Za(a,.55),u=Za(a,.35);n?r.classList.add(W0):r.classList.remove(W0),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Js(e){let r=document.querySelector(`.${ft}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function k6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function Y0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function J0(e,r){let t=Y0(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var I6=`
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
`,Q0=null,X0=null;function Z0(e,r){X0=e,Q0=r,_6()}function _6(){let e=document.createElement("style");e.textContent=I6,document.head.appendChild(e)}function eC(){let e=Q0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(X0.contentSelector||"body").innerHTML,c=J0(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ke(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function rC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function Qs(e,r){return e.length>r?e.slice(0,r)+"...":e}function tC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var gn=null;function aC(e){gn=document.createElement("div"),gn.className="fb-toast-container",e.appendChild(gn)}function ze(e,r="success"){if(!gn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>nC(t)),t.appendChild(o)}gn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>nC(t),r==="error"?8e3:4e3)}function nC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function iC(e,r){return r<=0?0:(e%r+r)%r}var ri=y(sC());var R6=320,fC="feedback-layer-commenter",B=null,fe=null,xe=null,Xs=null,pC=null,Zs=null,ec=null,rc=null,tc=null,wn=null,A6=null,nc=null,vC=!1,dC=[],ac=new Set,Pe=-1,qn=null,cC=!1;function N6(){cC||(cC=!0,H6())}function Ve(){return localStorage.getItem(fC)||""}function mC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){pC=e,Zs=r,ec=t,rc=n,tc=a,wn=o,A6=u,nc=s||null,N6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>vt()),document.body.appendChild(c),document.body.appendChild(B),aC(B),fe=B.querySelector(".fb-comment-list"),fe.setAttribute("role","list"),xe=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(fC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>eC()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>yC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>ic());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{vC=d.checked,Re(dC,ac)}),document.addEventListener("keydown",j6)}function vt(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),$6(),fe?.querySelector(".fb-thread .fb-cmt-card")&&ti(0)}function ic(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),bC(),Pe=-1,document.body.focus()}function hC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function xn(){return fe?Array.from(fe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ti(e){let r=xn();if(r.length===0)return;e=iC(e,r.length),Pe=e,fe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&ac.has(n.dataset.commentId)&&(bn(n.dataset.commentId),Js(n.dataset.commentId))}function M6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),ic();return}if(!hC()){if(r==="Enter"){let t=xn();if(Pe>=0&&Pe<t.length){e.preventDefault();let a=t[Pe].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),xn().length===0)return;let n=Pe<0?0:Pe+1;ti(n);return}if(r==="k"){e.preventDefault();let t=xn();if(t.length===0)return;let n=Pe<0?t.length-1:Pe-1;ti(n);return}r==="?"&&(e.preventDefault(),yC())}}function yC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function j6(e){hC()||e.key==="s"&&(e.preventDefault(),L6())}function L6(){B.classList.contains("fb-sidebar-collapsed")?vt():ic()}function $6(){bC(),qn=M6,document.addEventListener("keydown",qn)}function bC(){qn&&(document.removeEventListener("keydown",qn),qn=null)}function gC(e){if(vt(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}Xs=e,xe.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=nc||he.DEFAULT_COLOR;xe.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Ke(Qs(e,120))}"</div>
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
  `;let n=t;xe.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),xe.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=xe.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(pC({comment:u,commenter:Ve(),color:n}),xe.style.display="none",Xs=null)};xe.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),xe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{xe.style.display="none",Xs=null}),xe.scrollIntoView({behavior:"smooth",block:"nearest"})}function Re(e,r=new Set,t=new Map){dC=e,ac=r,Pe=-1,fe.innerHTML="";let{topLevel:n,repliesByParent:a}=rC(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)});let s=[...o,...u],c=vC?s:s.filter(l=>l.status!=="closed");if(s.length===0){fe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){fe.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(lC(l,!1,f));let v=a.get(l.id)||[];for(let h of v)p.appendChild(lC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),G6(l.id,p,d)}),p.appendChild(d),p.addEventListener("focus",()=>{let m=xn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&ti(m)}),fe.appendChild(p)}}function lC(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Ke(Qs(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${Ke(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Ke(e.author)}</span>
      <span class="fb-cmt-time">${tC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return D6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(bn(e.id),Js(e.id)),fe.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),ec&&ec(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),U6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),Zs&&Zs(e.id)}),a}var oc=ri.ALLOWED_REACTIONS,F6=Object.keys(oc);function D6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=oc[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),wn&&wn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),B6(e,r,a)}),e.appendChild(a)}function B6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of F6){let s=oc[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),wn&&wn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function G6(e,r,t){vt();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(rc&&rc({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function U6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=lt(e.color)||nc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
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
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;tc&&tc(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function qC(e){let r=fe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(fe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function H6(){let e=document.createElement("style");e.textContent=`
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
      width: ${R6}px;
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
  `,document.head.appendChild(e)}function xC(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}var cr=null,ni=null,ai=null,sc=null,A=[],Ar=null,we=null,ee=new Set,pe=new Map;function W6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};fc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{xC(),cr=document.querySelector(r.contentSelector)||document.body,ni=r.documentUri||window.location.origin+window.location.pathname,ai=r.documentId||null,sc=lt(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,mC({onSubmit:J6,onDelete:tG,onResolve:Q6,onReply:X6,onEdit:Z6,onReaction:rG,onColorChange:eG,defaultColor:sc}),z0(a=>{vt(),qC(a),bn(a)}),V6(),await t(),K6(),Z0(r,()=>A)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function K6(){try{A=await pc(ni,ai),ee=await z6(A),Re(A,ee,pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function z6(e){V0();let r=new Set;pe.clear();for(let t of e)if(!t.parent)try{let n=await ct({exact:t.quote,prefix:t.prefix,suffix:t.suffix},cr);n&&t.status!=="closed"?(pt(n,t.id,t.color),r.add(t.id),pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function V6(){document.addEventListener("mouseup",uc),document.addEventListener("keyup",uc),document.addEventListener("touchend",uc)}function uc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!cr.contains(r.commonAncestorContainer)){Sn();return}Y6(r)},10)}function Y6(e){Sn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Ar=await U0(o,cr),gC(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function Sn(){we&&(we.remove(),we=null)}async function J6({comment:e,commenter:r,color:t}){if(!Ar)return;let n=t||sc||null;try{let a=await ii({uri:ni,document:ai,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,color:n});A.push(a);let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id)),Re(A,ee,pe),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Ar=null}async function Q6(e,r){try{let n=await vc(e,r?"closed":"open"),a=A.findIndex(o=>o.id===e);if(a!==-1&&(A[a]=n),r)yn(e);else{let o=n,u=await ct({exact:o.quote,prefix:o.prefix,suffix:o.suffix},cr);u?(pt(u,o.id,o.color),ee.add(o.id)):ee.delete(o.id)}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function X6({parent_id:e,comment:r,commenter:t}){try{let n=await ii({uri:ni,document:ai,body:r,author:t,parent:e});A.push(n),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function Z6(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await oi(e,n),o=A.findIndex(u=>u.id===e);if(o!==-1&&(A[o]=a),t!==void 0){yn(e);let u=a;if(u.status!=="closed"){let s=await ct({exact:u.quote,prefix:u.prefix,suffix:u.suffix},cr);s&&(pt(s,u.id,u.color),ee.add(u.id),pe.set(u.id,s))}}Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function eG(e,r){try{let t=await oi(e,{color:r}),n=A.findIndex(o=>o.id===e);n!==-1&&(A[n]=t),yn(e);let a=t;if(a.status!=="closed"){let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id),pe.set(a.id,o))}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function rG(e,r){let t=Ve();if(t)try{let o=A.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await hc(e,r,t):u=await mc(e,r,t);let s=A.findIndex(c=>c.id===e);s!==-1&&(A[s]={...A[s],reactions:u.reactions}),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function tG(e){try{await dc(e),yn(e),ee.delete(e),A=A.filter(r=>r.id!==e&&r.parent!==e),Re(A,ee,pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{W6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
