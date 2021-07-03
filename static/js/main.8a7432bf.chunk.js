(this["webpackJsonp@tomik23/react-circular-progress-bar"]=this["webpackJsonp@tomik23/react-circular-progress-bar"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),o=r(5),i=r.n(o),a=(r(10),r(2)),l=r(3),s=r(0),u=function(e){var t=e.index,r=e.linearGradient,c=-100,n="linear-gradient-".concat(t);return Object(s.jsx)("defs",{children:Object(s.jsx)("linearGradient",{id:n,children:r.map((function(e,t){return c+=100,Object(s.jsx)("stop",{offset:c/(r.length-1)+"%",stopColor:e},t)}))})})},d=Object(c.memo)((function(e){var t=e.id,r=e.linearGradient,c=e.counter,n=e.stroke,o=e.round,i=e.colorSlice,a=void 0!==r?"url(#linear-gradient-".concat(t,")"):i;return Object(s.jsxs)(s.Fragment,{children:[r&&Object(s.jsx)(u,{index:t,linearGradient:r}),Object(s.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",transform:"rotate(-90, 50, 50)",stroke:a,strokeWidth:n,strokeLinecap:o?"round":"",strokeDasharray:2.64*c+", 20000"})]})})),j=Object(c.memo)((function(e){var t=e.stroke,r=e.colorCircle;return Object(s.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",stroke:r,strokeWidth:t})})),f=Object(c.memo)((function(e){var t=e.number,r=e.counter,c=e.fontSize,n=e.fontWeight,o=e.fontColor;return t?Object(s.jsxs)("text",{x:"50%",y:"50%",fontSize:c,fontWeight:n,fill:o,textAnchor:"middle",dominantBaseline:"central",children:[r,"%"]}):null})),b=function(e,t){var r=e.stroke,c=e.colorSlice,n=e.opacity,o=e.size;return{width:o,height:o,borderRadius:"50%",boxShadow:void 0===t?"inset 0px 0px ".concat(r,"px ").concat(r,"px ").concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="string"===typeof e?parseInt(e.replace("#",""),16):e;return"rgba(".concat(r>>16,",\n    ").concat((65280&r)>>8,", \n    ").concat(255&r,", \n    ").concat(t/100,")")}(c,n)):""}},O=function(e){var t=e.id,r=e.size;return Object(s.jsxs)("svg",{width:r,height:r,"data-index":t,viewBox:"0 0 100 100",children:[Object(s.jsx)(f,Object(a.a)({},e)),Object(s.jsx)(j,Object(a.a)({},e)),Object(s.jsx)(d,Object(a.a)({},e))]})},p=Object(c.memo)((function(e){var t=e.percent,r=e.colorCircle,n=Object(c.useState)(0),o=Object(l.a)(n,2),i=o[0],u=o[1],d=Object(c.useRef)(),j=function(e){var t=Object(c.useState)(!1),r=Object(l.a)(t,2),n=r[0],o=r[1];return Object(c.useEffect)((function(){var t=new IntersectionObserver((function(e){var t=Object(l.a)(e,1)[0];t.intersectionRatio>=.5&&o(t.isIntersecting)}),{root:null,rootMargin:"0px",threshold:.5});return e.current&&t.observe(e.current),function(){t.unobserve(e.current)}}),[]),n}(d);return Object(c.useEffect)((function(){var e,r;if(j){var c=Number(null===(e=d.current)||void 0===e||null===(r=e.dataset)||void 0===r?void 0:r.angel);if(!(t>100||t<=0||c===t)){var n;return n=requestAnimationFrame((function(){c>t?u((function(e){return e-1})):c<t&&u((function(e){return e+1}))})),function(){return cancelAnimationFrame(n)}}}}),[i,j,t]),Object(s.jsx)("div",{ref:d,style:b(e,r),"data-angel":i,children:Object(s.jsx)(O,Object(a.a)({counter:i},e))})}));p.defaultProps={colorSlice:"#00a1ff",round:!1,initial:!0,number:!0,stroke:10,opacity:10,size:200,fontSize:"1.6rem",fontColor:"#365b74",fontWeight:400};var h=p,x=[{id:0,percent:50,colorSlice:"#E91E63"},{id:1,percent:60,colorSlice:"#ffc107"},{id:2,percent:70,colorSlice:"#00bcd4"}],m=[{id:3,linearGradient:["yellow","#ff0000"],round:!0,percent:70,colorSlice:"#4CAF50",colorCircle:"#e6e6e6"},{id:4,linearGradient:["#ff0000","#9c27b0"],round:!0,percent:80,colorSlice:"#4CAF50",colorCircle:"#e6e6e6"},{id:5,linearGradient:["#ff0000","yellow"],round:!0,percent:90,colorSlice:"#4CAF50",colorCircle:"#e6e6e6"}],v=[{id:6,percent:55,colorSlice:"#CDDC39",colorCircle:"#f1f1f1",fontWeight:100},{id:7,percent:75,colorSlice:"#ffc107",colorCircle:"#e6e6e6",fontWeight:100},{id:8,percent:85,colorSlice:"#00bcd4",colorCircle:"#e6e6e6",fontWeight:100}],g=[{id:9,percent:60,colorSlice:"#000",colorCircle:"#e6e6e6",number:!1},{id:10,percent:70,colorSlice:"#ffc107",colorCircle:"#e6e6e6",number:!1},{id:11,percent:80,colorSlice:"#00bcd4",colorCircle:"#e6e6e6",number:!1}];var S=function(){var e=Object(c.useState)(x[0]),t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){n(Object(a.a)(Object(a.a)({},x[0]),{},{id:0,percent:Math.floor(100*Math.random()+1)}))}),3e3);return function(){return clearInterval(e)}}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("section",{children:x.map((function(e,t){var c=t===r.id?Object(a.a)(Object(a.a)({},e),r):e;return Object(s.jsx)(h,Object(a.a)({},c),t)}))}),Object(s.jsx)("section",{children:m.map((function(e,t){return Object(s.jsx)(h,Object(a.a)({},e),t)}))}),Object(s.jsx)("section",{children:v.map((function(e,t){return Object(s.jsx)(h,Object(a.a)({},e),t)}))}),Object(s.jsx)("section",{children:g.map((function(e,t){return Object(s.jsx)(h,Object(a.a)({},e),t)}))})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8a7432bf.chunk.js.map