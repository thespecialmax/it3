(window.webpackJsonp=window.webpackJsonp||[]).push([[34,119],{"2f5i":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("W0B4"),n=a.n(i),r=function(e){return(0,e.children)({display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:e.maxLines,overflow:"hidden"})};r.propTypes={children:n.a.func.isRequired,maxLines:n.a.number.isRequired};var s=r},"3ZqP":function(e,t,a){"use strict";var i=a("y1ZU"),n=a.n(i),r=a("edSL"),s=a.n(r),c=a("hUhZ"),o=a("EVaE"),l=a.n(o),u=a("ypWZ");t.a=function(e){var t=e.readingTime,a=e.publishedUnix,i=e.categories,r=void 0===i?[]:i,o=e.featuredImage,m=void 0===o?{}:o,d=e.firstImage,f=void 0===d?{}:d,p=e.path,h=void 0===p?{}:p,v=e.title,k=e.excerpt,g=e.type,b=void 0===g?{}:g,x=l()(Object(u.getCanonicalImageUrl)({featuredImage:s()(m,"image.imageProperties"),firstImage:f})),w=s()(m,"image.imageProperties.alt")||s()(m,"image.imageProperties.caption")||s()(m,"image.imageProperties.title")||s()(m,"caption")||v,j=n()(r),y=s()(j,"name"),O=s()(j,"slug"),N=s()(b,"slug"),C=a.publishedAtOrNow;return{category:y,readingTime:Object(c.a)(t)||"",publishedUnix:C,categoryUrl:O?Object(u.makeListUrl)({type:N,categorySlug:O}):"",imageSrc:x,alt:w,title:v,excerpt:k||"",key:v,url:s()(h,"alias")}}},"7u/i":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a("mK0O"),n=a("mXGw"),r=a.n(n),s=a("W0B4"),c=a.n(s),o=a("WhhD"),l=function(e){var t=e.query,a=e.matches;return(0,e.children)(Object(o.a)(t,a))};l.defaultProps={matches:!1},l.propTypes={query:c.a.string.isRequired,matches:c.a.bool,children:c.a.func.isRequired};var u=l,m=r.a.createElement;function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function f(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(r){return m(u,{query:t,matches:n},(function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(i.a)({},a,t));return m(e,n)}))}}},EeTg:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var i=a("YIwv"),n=a.n(i),r=a("mXGw"),s=a.n(r),c=a("8Jek"),o=a.n(c),l=a("ASJE"),u=a("9WxZ"),m=a("b9Kb"),d=a("fCho"),f=[".link.jsx-1721830925{-webkit-transition:opacity 200ms ease-in-out;-o-transition:opacity 200ms ease-in-out;-webkit-transition:opacity 200ms ease-in-out;transition:opacity 200ms ease-in-out;}",".link.jsx-1721830925:hover,.link.jsx-1721830925:focus,.link.jsx-1721830925:active{opacity:.75;}",".link.jsx-1721830925:focus{outline:1px lightgray dotted;outline-offset:2px;}",".linkDark.jsx-1721830925{color:#ffffff;}",".linkDark.jsx-1721830925:hover,.linkDark.jsx-1721830925:focus,.linkDark.jsx-1721830925:active{opacity:1;}",".icon.jsx-1721830925{height:0.75rem !important;margin-top:-2.3px;-webkit-transition:-webkit-transform 200ms ease-in-out;-o-transition:transform 200ms ease-in-out;-webkit-transition:-webkit-transform 200ms ease-in-out;-webkit-transition:-webkit-transform 200ms ease-in-out;transition:-webkit-transform 200ms ease-in-out;-webkit-transition:-webkit-transform 200ms ease-in-out;-webkit-transition:transform 200ms ease-in-out;transition:transform 200ms ease-in-out;-webkit-transition:-webkit-transform 200ms ease-in-out,-webkit-transform 200ms ease-in-out;-webkit-transition:transform 200ms ease-in-out,-webkit-transform 200ms ease-in-out;transition:transform 200ms ease-in-out,-webkit-transform 200ms ease-in-out;width:0.75rem !important;}","a.jsx-1721830925:hover .icon.jsx-1721830925,a.jsx-1721830925:focus .icon.jsx-1721830925,a.jsx-1721830925:active .icon.jsx-1721830925{-webkit-transform:translateX(-3px);-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}"];f.__hash="1721830925";var p=f,h=s.a.createElement,v=Object(u.a)(p),k=function(e){var t=e.className,a=e.children,i=e.newWindow,r=e.onClick,s=e.url,c=e.theme;return h("div",{className:"jsx-".concat(p.__hash)+" "+(o()("border-t border-grey-300 pt-10 pr-64",t)||"")},s?h(m.a,{url:s},h("a",{target:i?"_blank":void 0,rel:i?"noopener noreferrer":void 0,"data-testid":Object(d.a)(a,"callout","link"),onClick:r,className:"jsx-".concat(p.__hash)+" "+(o()("link text-blue-400 text-xs font-medium uppercase",{"linkDark opacity-75 text-white":"dark"===c})||"")},a,h(l.a,{className:v("icon ml-8")}))):h("button",{type:"button","data-testid":Object(d.a)(a,"callout","button"),onClick:r,className:"jsx-".concat(p.__hash)+" "+(o()("link text-blue-400 text-xs font-medium uppercase",{"linkDark opacity-75":"dark"===c})||"")},a," ",h(l.a,{className:v("icon ml-8")})),h(n.a,{id:p.__hash},p))};k.defaultProps={className:"",onClick:null,url:"",newWindow:!1,theme:"light"};var g=k},HyFM:function(e,t,a){"use strict";t.a=function(e){return"Published ".concat(e)}},IZ8t:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("Fcif"),n=a("mXGw"),r=a.n(n),s=a("ki3l"),c=r.a.createElement,o=function(e){var t,a=e.id,i=e.name,n=e.creative,r=e.position,s={event:"promotion-click",ecommerce:{promoClick:{promotions:[{id:(t={id:a,name:i,creative:n,position:r}).id,name:t.name,creative:t.creative,position:t.position}]}}};window.dataLayer.push(s)};function l(e){return function(t){return c(s.a,null,(function(a){var n=e.displayName||e.name;return c(e,Object(i.a)({},t,{handlePromotionClick:function(e){a&&o({id:e,name:"".concat(n," Click"),creative:n,position:a.title})}}))}))}}},T4N5:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a("Fcif"),n=a("dV/x"),r=a("mXGw"),s=a.n(r),c=a("dPne"),o=a("8Jek"),l=a.n(o),u=s.a.createElement,m=function(e){var t=e.className,a=e.htmlAttributes,r=e.lazyload,s=e.src,o=e.width,m=e.height,d=Object(n.a)(e,["className","htmlAttributes","lazyload","src","width","height"]),f=s.includes("imgix"),p={};return o&&(p.width="".concat(o,"px")),m&&(p.height="".concat(m,"px")),f?u(c.default,Object(i.a)({src:s,className:l()({lazyload:r},t),htmlAttributes:a},r&&{attributeConfig:{src:"data-src",srcSet:"data-srcset",sizes:"data-sizes"}},{width:o,height:m},d)):u("img",Object(i.a)({style:p},r?{"data-src":s}:{src:s},{width:o,height:m,alt:a.alt,className:l()({lazyload:r},t)},a))};m.defaultProps={className:"",htmlAttributes:{},lazyload:!1,width:null,height:null};var d=m},ULSn:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var i=a("mXGw"),n=a.n(i),r=n.a.createElement,s=n.a.createContext(null),c=s.Consumer,o=s.Provider;function l(e){var t=e.response,a=e.children;return r(o,{value:t()},a)}t.c=s},WhhD:function(e,t,a){"use strict";var i=a("mXGw");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(i.useState)(t),n=a[0],r=a[1];return Object(i.useEffect)((function(){var t=function(e){var t=e.matches;return r(t)},a=window.matchMedia(e);return r(a.matches),a.addListener(t),function(){return a.removeListener(t)}}),[e]),n}},ZIOL:function(e,t,a){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Preview"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NodeArticle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"readingTime"},name:{kind:"Name",value:"fieldArtReadTime"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"excerpt"},name:{kind:"Name",value:"fieldArtExcerpt"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"publishedUnix"},name:{kind:"Name",value:"publishedAt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"publishedAtOrNow"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ArticleCategories"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ArticleImage"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ArticleType"},directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alias"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}],loc:{start:0,end:440}};i.loc.source={body:'#import "~/articles/containers/detail/articleImage.fragment.gql"\n#import "~/articles/containers/detail/articleCategories.fragment.gql"\n#import "~/articles/containers/detail/articleType.fragment.gql"\n\nfragment Preview on NodeArticle {\n  readingTime: fieldArtReadTime\n  excerpt: fieldArtExcerpt\n  publishedUnix: publishedAt {\n    publishedAtOrNow\n  }\n  ...ArticleCategories\n  ...ArticleImage\n  ...ArticleType\n  path {\n    alias\n  }\n  title\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;return!n[t]&&(n[t]=!0,!0)}))}i.definitions=i.definitions.concat(r(a("yuk2").definitions)),i.definitions=i.definitions.concat(r(a("7CB5").definitions)),i.definitions=i.definitions.concat(r(a("LxTu").definitions)),e.exports=i},pvnw:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("Fcif"),n=a("aNYv"),r=a("mXGw"),s=a.n(r),c=a("vh07"),o=a.n(c),l=a("7u/i"),u=s.a.createElement;function m(e){return Object.entries(o.a.theme.screens).reduce((function(e,t){var a=Object(n.a)(t,2),i=a[0],r=a[1];return Object(l.a)(e,"(min-width: ".concat(r,")"),i)}),(function(t){var a=Object(r.useState)(!1),n=a[0],s=a[1];Object(r.useEffect)((function(){n||s(!0)}),[n,s]);var c=Object.keys(o.a.theme.screens).reduce((function(e,a){return e[a]=n&&!!t[a],e}),{});return u(e,Object(i.a)({},t,c))}))}},s4DR:function(e,t,a){"use strict";a.d(t,"a",(function(){return P}));var i=a("Fcif"),n=a("YIwv"),r=a.n(n),s=a("mXGw"),c=a.n(s),o=a("8Jek"),l=a.n(o),u=a("T4N5"),m=a("rqbA"),d=a("9WxZ"),f=a("b9Kb"),p=a("pvnw"),h=a("2f5i"),v=a("uNdt"),k=a.n(v),g=a("HyFM"),b=a("e1kf"),x=a("IZ8t"),w=a("BWQ3"),j=[".aspectRatioCropWrap.jsx-2736022025{padding-top:56.25%;}",".aspectRatioCropImage.jsx-2736022025{-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"];j.__hash="2736022025";var y=j,O=c.a.createElement,N=Object(d.a)(y),C={medium:{width:300,height:190,imgixParams:{auto:"format",ar:"16:9",fit:"crop",sharp:10,vib:20}},large:{width:630,height:360,imgixParams:{auto:"format",ar:"16:9",fit:"crop",crop:"entropy",sharp:10,vib:20}}},_=function(e){var t=e.className,a=e.url,n=e.onClick,c=e.title,o=e.imageSrc,d=e.imageOverlay,p=e.size,v=e.alt,x=e.category,j=e.categoryUrl,_=e.readingTime,P=e.publishedUnix,A=e.theme,S=e.index,T=e.handlePromotionClick,D=e.sm,F=e.tagularCategoryClick,I=e.tagularTitleClick,E=e.tagularImageClick,U=S+1,L=U?"".concat(U," - ").concat(c):c,W=function(e){return O(f.a,{url:a},O("a",{className:l()("relative block",{"cursor-pointer":a||n}),onClick:function(){n&&n(),T(L)}},e))},q="en-US"===Object(s.useContext)(w.b).language?"MMM D, YYYY":"D MMM YYYY";return O("article",{"data-testid":"card-preview",className:"jsx-".concat(y.__hash)+" "+(l()("CardPreview",t,{"text-white":"dark"===A})||"")},O("figure",{className:"jsx-".concat(y.__hash)},W(O("div",{"data-testid":"card-preview-".concat(c,"-image"),onClick:E,className:"jsx-".concat(y.__hash)+" \n              aspectRatioCropWrap\n              rounded\n              shadow-md\n              mb-16\n              relative\n              h-0\n              overflow-hidden\n            "},O(u.a,Object(i.a)({className:N("aspectRatioCropImage","h-auto w-full absolute left-1-2 top-1-2"),src:k()(o),htmlAttributes:{alt:v||c||""}},C[p],{lazyload:!0})),d&&O("div",{className:"jsx-".concat(y.__hash)+" absolute w-full h-full inset-0"},d))),O("figcaption",{className:"jsx-".concat(y.__hash)+" mt-16"},x&&O(h.a,{maxLines:1},(function(e){return O(m.a,{testId:c},j?O(f.a,{url:j},O("a",{onClick:F,className:"jsx-".concat(y.__hash)},x)):O("span",{style:e,className:"jsx-".concat(y.__hash)},x))})),W(O(h.a,{maxLines:3},(function(e){return O("h2",{"data-testid":"card-preview-".concat(c,"-description"),style:e,onClick:I,className:"jsx-".concat(y.__hash)+" "+(l()("leading-tight font-medium responsive-lg","dark"===A?"text-white":"text-primary")||"")},c)}))),D&&O("div",{className:"jsx-".concat(y.__hash)+" font-medium type-xs text-secondary"},_&&O("span",{className:"jsx-".concat(y.__hash)},_),_&&P&&O("span",{className:"jsx-".concat(y.__hash)}," \u2022 "),P&&O("span",{className:"jsx-".concat(y.__hash)},Object(g.a)(Object(b.a)(P,5,q)))))),O(r.a,{id:y.__hash},y))};_.defaultProps={className:"",url:null,onClick:null,imageOverlay:null,size:"medium",alt:"",category:"",categoryUrl:"",readingTime:"",publishedUnix:null,theme:"light",index:0,tagularCategoryClick:function(){},tagularTitleClick:function(){},tagularImageClick:function(){}};var P=Object(p.a)(Object(x.a)(_))}}]);