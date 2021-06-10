(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[304],{5944:function(e,t,a){"use strict";a.d(t,{Z:function(){return U}});var o=a(7294),l=a(6096),r=a(7399),n=a(1010),c=a(2122),i=a(1253),s=a(2585),m=(0,a(7053).Z)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=a(3288),p=a(395),u=a(7969),h=a(1177);function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=o.forwardRef((function(e,t){var a=e.avatar,l=e.classes,r=e.className,n=e.clickable,d=e.color,b=void 0===d?"default":d,y=e.component,f=e.deleteIcon,v=e.disabled,C=void 0!==v&&v,k=e.icon,E=e.label,Z=e.onClick,w=e.onDelete,S=e.onKeyDown,x=e.onKeyUp,I=e.size,N=void 0===I?"medium":I,L=e.variant,R=void 0===L?"default":L,T=(0,i.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=o.useRef(null),P=(0,p.Z)($,t),D=function(e){e.stopPropagation(),w&&w(e)},U=!(!1===n||!Z)||n,z="small"===N,M=y||(U?h.Z:"div"),_=M===h.Z?{component:"div"}:{},A=null;if(w){var B=(0,s.Z)("default"!==b&&("default"===R?l["deleteIconColor".concat((0,u.Z)(b))]:l["deleteIconOutlinedColor".concat((0,u.Z)(b))]),z&&l.deleteIconSmall);A=f&&o.isValidElement(f)?o.cloneElement(f,{className:(0,s.Z)(f.props.className,l.deleteIcon,B),onClick:D}):o.createElement(m,{className:(0,s.Z)(l.deleteIcon,B),onClick:D})}var O=null;a&&o.isValidElement(a)&&(O=o.cloneElement(a,{className:(0,s.Z)(l.avatar,a.props.className,z&&l.avatarSmall,"default"!==b&&l["avatarColor".concat((0,u.Z)(b))])}));var K=null;return k&&o.isValidElement(k)&&(K=o.cloneElement(k,{className:(0,s.Z)(l.icon,k.props.className,z&&l.iconSmall,"default"!==b&&l["iconColor".concat((0,u.Z)(b))])})),o.createElement(M,(0,c.Z)({role:U||w?"button":void 0,className:(0,s.Z)(l.root,r,"default"!==b&&[l["color".concat((0,u.Z)(b))],U&&l["clickableColor".concat((0,u.Z)(b))],w&&l["deletableColor".concat((0,u.Z)(b))]],"default"!==R&&[l.outlined,{primary:l.outlinedPrimary,secondary:l.outlinedSecondary}[b]],C&&l.disabled,z&&l.sizeSmall,U&&l.clickable,w&&l.deletable),"aria-disabled":!!C||void 0,tabIndex:U||w?0:void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),S&&S(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&g(e)?w(e):"Escape"===e.key&&$.current&&$.current.blur()),x&&x(e)},ref:P},_,T),O||K,o.createElement("span",{className:(0,s.Z)(l.label,z&&l.labelSmall)},E),A)})),y=(0,d.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=(0,n.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,n._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,n._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,n._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,n._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,n._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,n._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,n.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,n.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,n.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,n.U1)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,n.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,n.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,n.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,n.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b),f=a(9186),v=(0,r.Z)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0,backgroundColor:"transparent",boxShadow:"none"},chip:{margin:e.spacing(.5),backgroundColor:(0,n.U1)(e.palette.common.white,.25),color:e.palette.common.white}}}));function C(e){var t=v(),a=e.chipData[0],r=e.chipData[1],n=o.useState([]),c=n[0],i=n[1];(0,o.useEffect)((function(){s()}),[e.chipData]);var s=function(){var t=a||"All",o=r||9,n=!1,s=c.map((function(e){return e.label===t?(n=!0,{key:e.key,label:t,value:o}):e}));if(!n){var m={key:c.length,label:t,value:o};s[s.length]=m}i(s),"All"!==t&&9!==o&&(0,l.I)(t,o,e.updateSearchParams)};return o.createElement(f.Z,{component:"ul",className:t.root},c.length>0?c.map((function(a,r){return o.createElement("li",{key:a.key+r},o.createElement(y,{label:a.label+": "+a.value,onDelete:(n=a,function(){i((function(e){return e.filter((function(e){return e.key!==n.key}))})),(0,l.I)(n.label,"",e.updateSearchParams)}),className:t.chip,size:"small"}));var n})):null)}var k=a(701),E=a(8663),Z=a(7229),w=a(2785),S=a(5935),x=a(3266),I=a(4985),N=a(5163),L=a(7938),R=a(5785),T=a(2308),$=a(1424),P=a(995),D=(0,r.Z)((function(e){var t,a,o;return{root:(t={boxShadow:"none",flexGrow:1,backgroundColor:"rgb(81,45,168)",display:"block"},t[e.breakpoints.down("md")]={display:"none"},t),appBar:{boxShadow:"none",backgroundColor:"rgb(81,45,168)"},search:(a={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,n.U1)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,n.U1)(e.palette.common.white,.25)},marginRight:e.spacing(5),marginLeft:0,width:"100%"},a[e.breakpoints.up("sm")]={marginLeft:e.spacing(3),width:"auto"},a),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(o={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + "+e.spacing(4)+"px)",transition:e.transitions.create("width"),width:"100%"},o[e.breakpoints.up("md")]={width:"20ch"},o),formControl:{margin:e.spacing(1),minWidth:120,"& *":{color:e.palette.common.white},"&:focused":{color:e.palette.common.white}},selectEmpty:{marginTop:e.spacing(2),"&:not(.Mui-disabled):hover::before":{borderColor:e.palette.common.white},"&.MuiInput-underline:after":{borderColor:e.palette.common.white},"&.MuiInput-underline:before":{borderColor:e.palette.common.white},"& .MuiSelect-root":{}},clearIconButton:{color:e.palette.common.white},addIconButton:{color:e.palette.common.white},inputLabel:{"&.MuiFormLabel-root.Mui-focused":{color:e.palette.common.white}},underline:{color:e.palette.common.white}}}));function U(e){var t=D(),a=e.updateTextSearch,l=e.textSearchVal,r=e.handleClearSearchText,n=o.useState(""),c=n[0],i=n[1],s=o.useState(""),m=s[0],d=s[1],p=o.useState([]),u=p[0],h=p[1],g=function(e){e.preventDefault()};return o.createElement("div",{className:t.root},o.createElement(k.Z,{position:"static",className:t.appBar},o.createElement(E.Z,{disableGutters:!0},o.createElement("div",{className:t.search},o.createElement("div",{className:t.searchIcon},o.createElement(T.Z,null)),o.createElement(w.Z,{placeholder:"Search…",value:l,classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:a,endAdornment:o.createElement(R.Z,{position:"end"},o.createElement(Z.Z,{className:t.clearIconButton,"aria-label":"clear search field",onClick:r,onMouseDown:g},l.length>0?o.createElement($.Z,null):null))})),o.createElement(S.Z,{className:t.formControl},o.createElement(x.Z,{className:t.inputLabel,shrink:!0,id:"attribute-select"},"Attribute"),o.createElement(I.Z,{labelId:"attribute-select",id:"attribute",value:m,onChange:function(e){d(e.target.value)},displayEmpty:!0,className:t.selectEmpty},o.createElement(N.Z,{value:""},o.createElement("em",null,"All")),e.attributeList.map((function(e,t){return o.createElement(N.Z,{key:t,value:e},e)}))),o.createElement(L.Z,null,"Attribute with Power")),o.createElement(S.Z,{className:t.formControl},o.createElement(x.Z,{className:t.inputLabel,shrink:!0,id:"power-level-select"},"Power Level"),o.createElement(I.Z,{labelId:"power-level-select",id:"power-level",value:c,onChange:function(e){i(e.target.value)},displayEmpty:!0,className:t.selectEmpty},o.createElement(N.Z,{value:""},o.createElement("em",null,"All")),o.createElement(N.Z,{value:9},"9"),o.createElement(N.Z,{value:8},"8"),o.createElement(N.Z,{value:7},"7"),o.createElement(N.Z,{value:6},"6"),o.createElement(N.Z,{value:5},"5"),o.createElement(N.Z,{value:4},"4"),o.createElement(N.Z,{value:3},"3"),o.createElement(N.Z,{value:2},"2"),o.createElement(N.Z,{value:1},"1")),o.createElement(L.Z,null,"Equal to or Less Than")),o.createElement(Z.Z,{className:t.addIconButton,"aria-label":"submit attribute filter",onClick:function(){""!==m&&""!==c&&h([m,c])},onMouseDown:g},o.createElement(P.Z,null)),o.createElement(C,{chipData:u,attribute:m,powerLevel:c,updateSearchParams:e.updateSearchParams}))))}}}]);
//# sourceMappingURL=29aa913251166f7527963e6a0746d3af30527e18-82f733aa538d03d35738.js.map