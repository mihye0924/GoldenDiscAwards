(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7568)}])},7495:function(e,t,n){"use strict";n.d(t,{Je:function(){return o}});var r=n(7294);let l=r.createContext(),o=l.Provider;l.Consumer,t.ZP=l},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let l="refresh",o="navigate",i="restore",a="server-patch",s="prefetch",c="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(8754),l=r._(n(7294)),o=n(4532),i=n(3353),a=n(1410),s=n(9064),c=n(370),u=n(9955),d=n(4224),f=n(508),_=n(1516),h=n(4266),p=n(3991),m=new Set;function v(e,t,n,r,l,o){if(!o&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let l=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+l;if(m.has(o))return;m.add(o)}let a=o?e.prefetch(t,l):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:j,prefetch:x=null,passHref:g,replace:y,shallow:N,scroll:O,locale:k,onClick:C,onMouseEnter:E,onTouchStart:w,legacyBehavior:A=!1,...P}=e;n=j,A&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let T=l.default.useContext(u.RouterContext),S=l.default.useContext(d.AppRouterContext),R=null!=T?T:S,I=!T,M=!1!==x,D=null===x?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:L,as:H}=l.default.useMemo(()=>{if(!T){let e=b(a);return{href:e,as:m?b(m):e}}let[e,t]=(0,o.resolveHref)(T,a,!0);return{href:e,as:m?(0,o.resolveHref)(T,m):t||e}},[T,a,m]),U=l.default.useRef(L),F=l.default.useRef(H);A&&(r=l.default.Children.only(n));let G=A?r&&"object"==typeof r&&r.ref:t,[K,V,W]=(0,f.useIntersection)({rootMargin:"200px"}),q=l.default.useCallback(e=>{(F.current!==H||U.current!==L)&&(W(),F.current=H,U.current=L),K(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[H,G,L,W,K]);l.default.useEffect(()=>{R&&V&&M&&v(R,L,H,{locale:k},{kind:D},I)},[H,L,V,k,M,null==T?void 0:T.locale,R,I,D]);let B={ref:q,onClick(e){A||"function"!=typeof C||C(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,c,u,d){let{nodeName:f}=e.currentTarget,_="A"===f.toUpperCase();if(_&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};u?l.default.startTransition(h):h()}(e,R,L,H,y,N,O,k,I,M)},onMouseEnter(e){A||"function"!=typeof E||E(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(M||!I)&&v(R,L,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:D},I)},onTouchStart(e){A||"function"!=typeof w||w(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(M||!I)&&v(R,L,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:D},I)}};if((0,s.isAbsoluteUrl)(H))B.href=H;else if(!A||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,_.getDomainLocale)(H,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);B.href=t||(0,h.addBasePath)((0,c.addLocale)(H,e,null==T?void 0:T.defaultLocale))}return A?l.default.cloneElement(r,B):l.default.createElement("a",{...P,...B},n)}),x=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(7294),l=n(29),o="function"==typeof IntersectionObserver,i=new Map,a=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),_=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:l},a.push(n),i.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,l.requestIdleCallback)(()=>d(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,n,t,u,f.current]);let h=(0,r.useCallback)(()=>{d(!1)},[]);return[_,u,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7568:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893);n(5220);var l=n(9008),o=n.n(l),i=n(7110),a=n.n(i);let s=[{id:1,link:"/about",title:"ABOUT"},{id:2,link:"/nominees",title:"NOMINEES"},{id:3,link:"/history",title:"HISTORY"},{id:4,link:"/gdanow",title:"GDA NOW"}];var c=n(1664),u=n.n(c),d=n(7294);function f(e){let{onclick:t}=e,[n,l]=(0,d.useState)(""),[o,i]=(0,d.useState)(!0);(0,d.useEffect)(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]);let c=()=>{let e=window.scrollY;e>80?l("active"):l("")};return(0,r.jsx)("header",{className:"l-header",children:(0,r.jsx)("div",{id:"scroll",className:"".concat(a().header_wrap," ").concat(n&&a()[n]),children:(0,r.jsxs)("div",{className:a().header_inner,children:[(0,r.jsxs)("div",{className:a().header_left,children:[(0,r.jsx)("div",{className:a().header_logo,children:(0,r.jsx)(u(),{href:"/",children:"GOLDENDISCAWARDS"})}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:a().header_gnb,children:s.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:e.link,children:e.title})},e.id))})})]}),(0,r.jsxs)("div",{className:a().header_right,children:[(0,r.jsxs)("div",{className:a().header_lang,children:[(0,r.jsx)("button",{className:"".concat(o?a().header_lang_active:""),onClick:()=>{i(!0)},children:"KO"}),(0,r.jsx)("button",{className:"".concat(o?"":a().header_lang_active),onClick:()=>{i(!1)},children:"EN"})]}),(0,r.jsx)("button",{className:a().header_menu_icon,onClick:t,children:(0,r.jsx)("span",{})})]})]})})})}var _=n(6491),h=n.n(_);let p=[{id:1,title:"ABOUT",subtitle:[{id:1,label:"시상식소개",link:"/about"},{id:2,label:"시상부문",link:"/categories"}]},{id:2,title:"NOMINEES",subtitle:[{id:1,label:"제 36회 후보자",link:"/nominees"}]},{id:3,title:"HISTORY",subtitle:[{id:1,label:"역대수상",link:"/history"}]},{id:4,title:"GDA NOW",subtitle:[{id:1,label:"다시보기",link:"/gdanow"},{id:2,label:"공지사항",link:"/notice"}]},{id:5,title:"VOTE",subtitle:[{id:1,label:"투표하기",link:"/vote"}]}];var m=n(7495);function v(){let{prefix:e}=(0,d.useContext)(m.ZP);return(0,r.jsxs)("footer",{className:"l-footer",children:[(0,r.jsx)("div",{className:h().footer_sns_wrap,children:(0,r.jsxs)("ul",{className:h().footer_sns,children:[(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"https://www.instagram.com/golden_disc/",target:"_blank",children:(0,r.jsx)("img",{src:"".concat(e,"/images/content/instagram.png"),alt:"인스타그램"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"https://www.facebook.com/gdajtbcplus/",target:"_blank",children:(0,r.jsx)("img",{src:"".concat(e,"/images/content/facebook.png"),alt:"페이스북"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"https://twitter.com/GoldenDisc_en",target:"_blank",children:(0,r.jsx)("img",{src:"".concat(e,"/images/content/twitter.png"),alt:"트위터"})})})]})}),(0,r.jsxs)("div",{className:h().footer_wrap,children:[(0,r.jsx)("h1",{children:(0,r.jsxs)("a",{href:"#",children:["GOLDENDISCAWARDS",(0,r.jsx)("span",{children:"골든디스크어워즈 2023.01.07"})]})}),(0,r.jsx)("div",{className:h().footer_nav,children:(0,r.jsx)("ul",{className:h().footer_nav_ul,children:p.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{children:[e.title," "]}),(0,r.jsx)("ul",{className:h().footer_nav_ul_sub,children:e.subtitle.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:e.link,children:(0,r.jsx)("span",{children:e.label})})},e.id))})]},e.id))})})]})]})}var b=n(443),j=n.n(b);function x(e){let{show:t,onClose:n}=e,{prefix:l}=(0,d.useContext)(m.ZP);return t&&(0,r.jsxs)("div",{className:j().menu_bg,children:[(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:j().menu_nav,children:p.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{children:[e.title," "]}),(0,r.jsx)("ul",{className:j().menu_nav_sub,children:e.subtitle.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"".concat(l,"/").concat(e.link),children:(0,r.jsx)("span",{children:e.label})})},e.id))})]},e.id))})}),(0,r.jsx)("div",{className:j().menu_logo,onClick:n,children:(0,r.jsx)(u(),{href:"/",children:"GOLDENDISCAWARDS"})}),(0,r.jsx)("button",{className:j().menu_icon,onClick:n,children:(0,r.jsx)("span",{})})]})}function g(e){let{Component:t,pageProps:n}=e,[l,i]=(0,d.useState)(!1),a=()=>{i(!0),document.querySelector("body").classList.add("active")},s=()=>{i(!1),document.querySelector("body").classList.remove("active")};return(0,r.jsxs)(m.Je,{value:{prefix:"https://mihye0924.github.io/GoldenDiscAwards"},children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"GoldenDiscAwards"}),(0,r.jsx)("meta",{name:"description",content:"GoldenDiscAwards"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"favicon.ico"})]}),(0,r.jsx)(f,{onclick:()=>{a()}}),(0,r.jsx)(x,{show:l,onClose:()=>{s()}}),(0,r.jsx)(t,{...n}),(0,r.jsx)(v,{})]})}},5220:function(){},6491:function(e){e.exports={footer_wrap:"footer_footer_wrap__eloK7",footer_sns:"footer_footer_sns__CUBQn",footer_sns_wrap:"footer_footer_sns_wrap__jejVz",footer_nav:"footer_footer_nav___ON7F",footer_nav_ul:"footer_footer_nav_ul__KbqVH",footer_nav_ul_sub:"footer_footer_nav_ul_sub__pWDqp"}},7110:function(e){e.exports={header_wrap:"header_header_wrap__7ZJsW",active:"header_active__LAF1B",header_gnb:"header_header_gnb__IJ_N0",header_inner:"header_header_inner__BWHEk",header_logo:"header_header_logo__SZkkc",header_left:"header_header_left__DpC32",header_right:"header_header_right__uX0Ho",header_lang:"header_header_lang__O9l4S",header_lang_active:"header_header_lang_active__uT20R",header_menu_icon:"header_header_menu_icon__sP_6E"}},443:function(e){e.exports={menu_bg:"menu_menu_bg__yelmV",opacity:"menu_opacity__cF0qo",menu_nav:"menu_menu_nav__HY5M2",menu_nav_sub:"menu_menu_nav_sub__yhQDC",menu_icon:"menu_menu_icon__Fewf6",menu_logo:"menu_menu_logo__Vi4zT"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);