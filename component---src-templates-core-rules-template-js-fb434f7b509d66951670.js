(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[51],{1228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(1228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(1228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},3715:function(e,t,r){"use strict";var n=r(2122),o=r(1253),a=r(6156),i=r(7294),s=r(2585),u=r(3288),l=r(7969),p=i.forwardRef((function(e,t){var r=e.classes,a=e.className,u=e.component,p=void 0===u?"div":u,c=e.disableGutters,d=void 0!==c&&c,f=e.fixed,x=void 0!==f&&f,m=e.maxWidth,b=void 0===m?"lg":m,g=(0,o.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(p,(0,n.Z)({className:(0,s.Z)(r.root,a,x&&r.fixed,d&&r.disableGutters,!1!==b&&r["maxWidth".concat((0,l.Z)(String(b)))]),ref:t},g))}));t.Z=(0,u.Z)((function(e){return{root:(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:(0,a.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,a.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,a.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,a.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,a.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(p)},7442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(7013),a=r(3715),i=r(3497),s=r(2964),u=r(8233),l=(0,r(7399).Z)({content:{fontSize:"16px",paddingTop:"64px",paddingBottom:"16px","& h2":{background:"rgba(50,39,176,.15)",padding:"8px"},"& blockquote":{backgroundColor:"#fbf9ff"},"& .sticky-sidebar":{background:"black"}}});function p(e){var t=e.data,r=e.pageContext,p=l(),c=r.prev?{url:""+r.prev.frontmatter.slug,title:r.prev.frontmatter.title}:null,d=r.next?{url:""+r.next.frontmatter.slug,title:r.next.frontmatter.title}:null,f=t.mdx;console.log("mdx",f);f.frontmatter;var x=f.body,m=f.headings;return n.createElement(u.Z,null,n.createElement(a.Z,{maxWidth:"xl",className:p.content},n.createElement(i.MDXProvider,null,n.createElement(s.MDXRenderer,{headings:m},x)),n.createElement("div",null,c&&n.createElement(o.Link,{to:c.url},n.createElement("h4",null,"Previous Chapter >")),d&&n.createElement(o.Link,{to:d.url},n.createElement("h4",null,"Next Chapter >")))))}},2964:function(e,t,r){var n=r(2331);e.exports={MDXRenderer:n}},2331:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),p=r(3497).mdx,c=r(6745).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),s=c(t),d=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return l.createElement(d,u({},a))}}}]);
//# sourceMappingURL=component---src-templates-core-rules-template-js-fb434f7b509d66951670.js.map