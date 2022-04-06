(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36,46,48,49],{104:function(e,t,a){"use strict";var c=a(103),o=a(135),n=a(2),s=(a(130),a(131),a(19));t.a=function(e){var t=e.children,a=e.message,r=e.hold,i=void 0!==r&&r,l=e.childProps,d=void 0===l?{}:l,j=Object(n.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(s.jsx)(o.a,{className:"Tooltip",content:"string"===typeof a?Object(s.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:a.trim().split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):a,arrow:!1,animation:"shift-away",touch:!i||["hold",300],children:Object(s.jsx)("div",Object(c.a)(Object(c.a)({onClick:j},d),{},{children:t}))})}},146:function(e,t,a){"use strict";var c=a(104),o=a(95),n=a(574),s=a(19);t.a=function(e){var t=e.title,a=e.statistic,r=e.total,i=e.formula,l=e.date,d=e.description,j=e.className,m=Object(n.a)().t;return Object(s.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(s.jsxs)("div",{className:"meta-item-top",children:[Object(s.jsx)("h3",{children:t}),i&&Object(s.jsx)(c.a,{message:i,children:Object(s.jsx)(o.p,{size:16})})]}),Object(s.jsx)("h1",{children:a}),Object(s.jsx)("h5",{children:l}),r&&Object(s.jsx)("h5",{children:"".concat(m("India has")," ").concat(r," ").concat(m("CPL"))}),Object(s.jsx)("p",{children:d})]})}},300:function(e,t,a){"use strict";a.r(t);var c=a(146),o=a(10),n=a(24),s=a(68),r=a(81),i=a(2),l=a.n(i),d=a(23),j=a.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,c,o=function(e,t){if(null==e)return{};var a,c,o={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var O=Object(i.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,o=e.size,n=void 0===o?24:o,s=b(e,["color","size"]);return l.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));O.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},O.displayName="Compass";var u=O,h=a(574),p=a(19);function f(e){var t=e.numerator,a=e.denominator;return Object(p.jsxs)("div",{className:"frac",children:[Object(p.jsx)("span",{children:t}),Object(p.jsx)("span",{className:"bottom",children:a})]})}function v(e){var t,a,i,l,d,j=e.stateCode,m=e.data,b=e.timeseries,O=Object(h.a)().t,v=Object(n.i)(m[j],"total","confirmed",{normalizedByPopulationPer:"lakh"}),x=Object(n.i)(m[j],"total","tested",{normalizedByPopulationPer:"lakh"}),y=Object(n.i)(m.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),g=Object(n.i)(m[j],"total","activeRatio"),k=Object(n.i)(m[j],"total","recoveryRatio"),w=Object(n.i)(m[j],"total","cfr"),N=Object.keys(b||{}).filter((function(e){return e<=Object(n.h)()})),P=N[N.length-1],T=Object(s.a)(Object(r.a)(Object(n.k)(P),6)),C=Object(n.i)(null===b||void 0===b?void 0:b[P],"delta","tpr",{movingAverage:!0});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"StateMeta population",children:[Object(p.jsxs)("div",{className:"meta-item population",children:[Object(p.jsx)("h3",{children:O("Population")}),Object(p.jsx)("h1",{children:Object(n.f)(null===(t=m[j])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(p.jsxs)("div",{className:"alert",children:[Object(p.jsx)(u,{}),Object(p.jsxs)("div",{className:"alert-right",children:[O("Based on 2019 population projection by NCP"),Object(p.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(p.jsxs)("div",{className:"StateMeta",children:[Object(p.jsx)(c.a,{className:"confirmed",title:O("Confirmed Per Lakh"),statistic:Object(n.f)(v),total:Object(n.f)(y),formula:Object(p.jsxs)(p.Fragment,{children:["".concat(1e5," x "),Object(p.jsx)(f,{numerator:O("Total confirmed cases"),denominator:O("Total population")})]}),description:"\n            ~".concat(Object(n.f)(v,"long")," ").concat(O("out of every lakh people in")," ").concat(o.C[j]," ").concat(O("have tested positive for the virus."),"\n            ")}),Object(p.jsx)(c.a,{className:"active",title:O("Active Ratio"),statistic:"".concat(Object(n.f)(g,"%")),formula:Object(p.jsxs)(p.Fragment,{children:["100 x ",Object(p.jsx)(f,{numerator:O("Total active cases right now"),denominator:O("Total confirmed cases")})]}),description:g>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(g,"long")," ").concat(O("are currently infected.")):O("Currently, there are no active cases in this state.")}),Object(p.jsx)(c.a,{className:"recovery",title:O("Recovery Ratio"),statistic:"".concat(Object(n.f)(k,"%")),formula:Object(p.jsxs)(p.Fragment,{children:["100 x ",Object(p.jsx)(f,{numerator:O("Total recovered cases"),denominator:O("Total confirmed cases")})]}),description:k>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(k,"long")," ").concat(O("have recovered from the virus.")):O("Unfortunately, there are no recoveries in this state yet.")}),Object(p.jsx)(c.a,{className:"mortality",title:O("Case Fatality Ratio"),statistic:"".concat(Object(n.f)(w,"%")),formula:Object(p.jsxs)(p.Fragment,{children:["100 x ",Object(p.jsx)(f,{numerator:O("Total deaths"),denominator:O("Total confirmed cases")})]}),description:w>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(w,"long")," ").concat(O("have unfortunately passed away from the virus.")):O("Fortunately, no one has passed away from the virus in this state.")}),Object(p.jsx)(c.a,{className:"tpr",title:O("Test Positivity Ratio"),statistic:C>0?"".concat(Object(n.f)(C,"%")):"-",formula:Object(p.jsxs)(p.Fragment,{children:["100 x ",Object(p.jsx)(f,{numerator:O("Confirmed cases last week"),denominator:O("Samples tested last week")})]}),date:"".concat(Object(n.c)(T,"dd MMM")," - ").concat(Object(n.c)(P,"dd MMM")),description:C>0?"".concat(O("In the last one week,")," ").concat(Object(n.f)(C,"%"),"\n              ").concat(O("of samples tested came back positive.")):O("No tested sample came back positive in last one week.")}),Object(p.jsx)(c.a,{className:"tpl",title:O("Tests Per Lakh"),statistic:"".concat(Object(n.f)(x)),formula:Object(p.jsxs)(p.Fragment,{children:["".concat(1e5," x "),Object(p.jsx)(f,{numerator:O("Total samples tested"),denominator:O("Total population")})]}),date:x&&(null===(i=m[j])||void 0===i||null===(l=i.meta)||void 0===l||null===(d=l.tested)||void 0===d?void 0:d.date)?"".concat(O("As of")," ").concat(Object(n.e)(m[j].meta.tested.date)," ").concat(O("ago")):"",description:x>0?"".concat(O("For every lakh people in")," ").concat(o.C[j],",\n                ~").concat(Object(n.f)(x,"long")," ").concat(O("samples were tested.")):O("No tests have been conducted in this state yet.")})]})]})}var x=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(i.memo)(v,x)}}]);
//# sourceMappingURL=36.7049b10d.chunk.js.map