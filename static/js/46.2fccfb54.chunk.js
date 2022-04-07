(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[46],{300:function(e,t,a){"use strict";a.r(t);var c=a(146),o=a(10),n=a(24),r=a(68),s=a(81),i=a(2),l=a.n(i),d=a(23),j=a.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,c,o=function(e,t){if(null==e)return{};var a,c,o={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var O=Object(i.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,o=e.size,n=void 0===o?24:o,r=b(e,["color","size"]);return l.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),l.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));O.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},O.displayName="Compass";var p=O,u=a(574),f=a(19);function v(e){var t=e.numerator,a=e.denominator;return Object(f.jsxs)("div",{className:"frac",children:[Object(f.jsx)("span",{children:t}),Object(f.jsx)("span",{className:"bottom",children:a})]})}function h(e){var t,a,i,l,d,j=e.stateCode,m=e.data,b=e.timeseries,O=Object(u.a)().t,h=Object(n.i)(m[j],"total","confirmed",{normalizedByPopulationPer:"lakh"}),x=Object(n.i)(m[j],"total","tested",{normalizedByPopulationPer:"lakh"}),y=Object(n.i)(m.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),g=Object(n.i)(m[j],"total","activeRatio"),k=Object(n.i)(m[j],"total","recoveryRatio"),w=Object(n.i)(m[j],"total","cfr"),N=Object.keys(b||{}).filter((function(e){return e<=Object(n.h)()})),P=N[N.length-1],T=Object(r.a)(Object(s.a)(Object(n.k)(P),6)),F=Object(n.i)(null===b||void 0===b?void 0:b[P],"delta","tpr",{movingAverage:!0});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"StateMeta population",children:[Object(f.jsxs)("div",{className:"meta-item population",children:[Object(f.jsx)("h3",{children:O("Population")}),Object(f.jsx)("h1",{children:Object(n.f)(null===(t=m[j])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(f.jsxs)("div",{className:"alert",children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"alert-right",children:[O("Based on 2019 population projection by NCP"),Object(f.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(f.jsxs)("div",{className:"StateMeta",children:[Object(f.jsx)(c.a,{className:"confirmed",title:O("Confirmed Per Lakh"),statistic:Object(n.f)(h),total:Object(n.f)(y),formula:Object(f.jsxs)(f.Fragment,{children:["".concat(1e5," x "),Object(f.jsx)(v,{numerator:O("Total confirmed cases"),denominator:O("Total population")})]}),description:"\n            ~".concat(Object(n.f)(h,"long")," ").concat(O("out of every lakh people in")," ").concat(o.C[j]," ").concat(O("have tested positive for the virus."),"\n            ")}),Object(f.jsx)(c.a,{className:"active",title:O("Active Ratio"),statistic:"".concat(Object(n.f)(g,"%")),formula:Object(f.jsxs)(f.Fragment,{children:["100 x ",Object(f.jsx)(v,{numerator:O("Total active cases right now"),denominator:O("Total confirmed cases")})]}),description:g>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(g,"long")," ").concat(O("are currently infected.")):O("Currently, there are no active cases in this state.")}),Object(f.jsx)(c.a,{className:"recovery",title:O("Recovery Ratio"),statistic:"".concat(Object(n.f)(k,"%")),formula:Object(f.jsxs)(f.Fragment,{children:["100 x ",Object(f.jsx)(v,{numerator:O("Total recovered cases"),denominator:O("Total confirmed cases")})]}),description:k>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(k,"long")," ").concat(O("have recovered from the virus.")):O("Unfortunately, there are no recoveries in this state yet.")}),Object(f.jsx)(c.a,{className:"mortality",title:O("Case Fatality Ratio"),statistic:"".concat(Object(n.f)(w,"%")),formula:Object(f.jsxs)(f.Fragment,{children:["100 x ",Object(f.jsx)(v,{numerator:O("Total deaths"),denominator:O("Total confirmed cases")})]}),description:w>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(n.f)(w,"long")," ").concat(O("have unfortunately passed away from the virus.")):O("Fortunately, no one has passed away from the virus in this state.")}),Object(f.jsx)(c.a,{className:"tpr",title:O("Test Positivity Ratio"),statistic:F>0?"".concat(Object(n.f)(F,"%")):"-",formula:Object(f.jsxs)(f.Fragment,{children:["100 x ",Object(f.jsx)(v,{numerator:O("Confirmed cases last week"),denominator:O("Samples tested last week")})]}),date:"".concat(Object(n.c)(T,"dd MMM")," - ").concat(Object(n.c)(P,"dd MMM")),description:F>0?"".concat(O("In the last one week,")," ").concat(Object(n.f)(F,"%"),"\n              ").concat(O("of samples tested came back positive.")):O("No tested sample came back positive in last one week.")}),Object(f.jsx)(c.a,{className:"tpl",title:O("Tests Per Lakh"),statistic:"".concat(Object(n.f)(x)),formula:Object(f.jsxs)(f.Fragment,{children:["".concat(1e5," x "),Object(f.jsx)(v,{numerator:O("Total samples tested"),denominator:O("Total population")})]}),date:x&&(null===(i=m[j])||void 0===i||null===(l=i.meta)||void 0===l||null===(d=l.tested)||void 0===d?void 0:d.date)?"".concat(O("As of")," ").concat(Object(n.e)(m[j].meta.tested.date)," ").concat(O("ago")):"",description:x>0?"".concat(O("For every lakh people in")," ").concat(o.C[j],",\n                ~").concat(Object(n.f)(x,"long")," ").concat(O("samples were tested.")):O("No tests have been conducted in this state yet.")})]})]})}var x=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(i.memo)(h,x)}}]);
//# sourceMappingURL=46.2fccfb54.chunk.js.map