(this["webpackJsonptable-sorting"]=this["webpackJsonptable-sorting"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(23),o=n.n(a),i=(n(32),n(33),n(24)),l=n(2),u=n(12),d=n(17),h=n(7),j=n(26);n(34);function b(e){var t=e.type,n=Object(j.a)(e,["type"]);return 1===t?Object(c.jsx)(m,Object(u.a)({},n)):Object(c.jsx)(x,Object(u.a)({},n))}function x(e){var t=e.value,n=e.onChange,r=e.onText,s=e.offText,a=e.constantText,o=e.extraClasses;return Object(c.jsxs)("label",{htmlFor:"custom-checkbox",className:"custom-checkbox__container custom-checkbox__container-0 ".concat(o),children:[Object(c.jsx)("input",{type:"checkbox",id:"custom-checkbox",name:"custom-checkbox",checked:t,onChange:function(e){return n(e.target.checked)}}),Object(c.jsx)("div",{className:"custom-checkbox__background",children:Object(c.jsx)("span",{className:"custom-checkbox__thumb"})}),Object(c.jsxs)("p",{className:"custom-checkbox__text",children:[a,Object(c.jsx)("span",{children:s})," ",Object(c.jsx)("span",{children:r})]})]})}function m(e){var t=e.value,n=e.onChange,r=e.onText,s=e.offText,a=e.constantText,o=e.extraClasses;return Object(c.jsxs)("label",{htmlFor:"custom-checkbox",className:"custom-checkbox__container custom-checkbox__container-1 ".concat(o),children:[Object(c.jsx)("input",{type:"checkbox",id:"custom-checkbox",name:"custom-checkbox",checked:t,onChange:function(e){return n(e.target.checked)}}),Object(c.jsx)("div",{className:"custom-checkbox__background",children:Object(c.jsx)("span",{className:"custom-checkbox__thumb"})}),Object(c.jsxs)("p",{className:"custom-checkbox__text",children:[Object(c.jsx)("span",{className:"custom-checkbox__constantText",children:a}),Object(c.jsx)("span",{className:"custom-checkbox__offText",children:s}),Object(c.jsx)("span",{className:"custom-checkbox__onText",children:r})]})]})}b.defaultProps={type:0,onText:"",offText:"",constantText:"",extraClasses:"",value:!1};var f=n(16),g=function e(t,n,c){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],s=arguments.length>4?arguments[4]:void 0,a=2*c+1,o=2*c+2,i=c;a<n&&w(t[a],t[i],r)&&(i=a),o<n&&w(t[o],t[i],r)&&(i=o),i!==c&&(C(t,i,c),s&&s(i,c,[c],[],!0),e(t,n,i,r,s))},O=function(e,t,n){for(var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],r=arguments.length>4?arguments[4]:void 0,s=Math.round(e.length/2-1);s>=0;s--)g(e,e.length,s,c,r);for(var a=e.length-1;a>0;a--)C(e,0,a),r&&r(0,a,[a],[],!0),g(e,a,0,c,r)},p=function(e,t,n){for(var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],r=arguments.length>4?arguments[4]:void 0,s=t-1,a=t;a<=n;a++)w(e[n],e[a],c)&&(s++,C(e,s,a),s!==a&&r&&r(s,a,[t,n],[],!0));return s},v=function e(t,n,c){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],s=arguments.length>4?arguments[4]:void 0,a=n||0,o=void 0===c||null===c?t.length-1:c;if(!(a>=o)){var i=p(t,a,o,r,s);e(t,a,i-1,r,s),e(t,i+1,o,r,s)}},k=function(e,t,n){for(var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],r=arguments.length>4?arguments[4]:void 0,s=e.length-1;s>0;s--)for(var a=0;a<s;a++)w(e[a],e[a+1],c)&&(C(e,a,a+1),r&&r(a,a+1,[s],[],!0))},N=function(e,t,n,c,r,s){for(var a=e.slice(t,n),o=e.slice(n,c+1),i=0,l=0,u=t;i!==a.length&&l!==o.length;)w(o[l],a[i],r)?(e[u]=a[i],s&&s(u,D(e[u]),[t+i,n+l],[u],!1),i++,u++):(e[u]=o[l],s&&s(u,D(e[u]),[t+i,n+l],[u],!1),l++,u++);for(;i!==a.length;)e[u]=a[i],s&&s(u,D(e[u]),[t+i,c],[u],!1),i++,u++;for(;l!==o.length;)e[u]=o[l],s&&s(u,D(e[u]),[n-1,n+l],[u],!1),l++,u++},y=function e(t,n,c){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],s=arguments.length>4?arguments[4]:void 0,a=n||0,o=void 0===c||null===c?t.length-1:c;if(0===a&&c===t.length-1&&console.log(t),!(a>=o)){var i=Math.round((a+o)/2);e(t,a,i-1,r,s),e(t,i,o,r,s),N(t,a,i,o,r,s),0===a&&c===t.length-1&&console.log(t)}},_=function(e,t,n){for(var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],r=arguments.length>4?arguments[4]:void 0,s=0;s<e.length-1;s++){for(var a=s,o=s+1;o<=e.length-1;o++)w(e[o],e[a],c)||(a=o);a!==s&&(C(e,s,a),r&&r(s,a,[s,a],[],!0))}},S=function(e,t,n){for(var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{key:"value",inAscending:!0}],r=arguments.length>4?arguments[4]:void 0,s=1;s<e.length;s++){for(var a=e[s],o=s;0!==o&&w(e[o-1],a,c);)C(e,o,o-1),r&&r(o,o-1,[s,o-1],[],!0),o--;e[o]=a}},w=function e(t,n){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{key:"value",inAscending:!0}],r=Object(f.a)(c),s=r[0],a=r.slice(1),o=D(t,s.key),i=D(n,s.key);return o===i?0===a.length||e(t,n,a):(o-i)*(s.inAscending?1:-1)>0},T=function(e){return"bubble-sort"===e?k:"heap-sort"===e?O:"merge-sort"===e?y:"selection-sort"===e?_:"insertion-sort"===e?S:v},C=function(e,t,n){var c=e[n];e[n]=e[t],e[t]=c},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";return"number"===typeof e?e:e[t]};n(35),n(36);function A(e){var t=e.onDragStart,n=e.keysToSortBy,a=e.sorter,o=Object(r.useState)([{}]),i=Object(h.a)(o,2),l=i[0],u=i[1],d=function(e){return e.toLowerCase().replace(" ","-")},j=function(e){return e&&e[0]?Object.keys(e[0]):[]},b=Object(r.useRef)(j(l)),x=n.map((function(e){return e.key})),m=(new Date).getTime();s.a.useMemo((function(){return a(l,0,l.length-1,n&&n[0]?n.map((function(e){return{key:e.key,inAscending:e.isDirectionUp}})):[{key:b.current[0],inAscending:!0}])}),[n]),console.log("Sort Operation: ",(new Date).getTime()-m);return Object(r.useEffect)((function(){fetch((function(){var e;return 0===(null===(e=/(localhost|127.0.0.0|0.0.0.0)/.exec(window.location.origin))||void 0===e?void 0:e.length)}()?"table-sorter/":"")+"factbook.json").then((function(e){return e.json()})).then((function(e){b.current=j(e),u(e)}))}),[]),Object(c.jsxs)("section",{className:"sortable-table__container",children:[Object(c.jsx)("input",{type:"checkbox",id:"sortable-table__first-column-control",className:"hidden"}),Object(c.jsxs)("table",{className:"sortable-table",children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:b.current.map((function(e,n){var r=d(e),s=x.includes(e);return 0===n?Object(c.jsx)("th",{id:r,draggable:!s,className:"sortable-table__header__item ".concat(s?"disabled":""),onDragStart:t,children:Object(c.jsxs)("label",{htmlFor:"sortable-table__first-column-control",className:"flex items-center justify-end",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("i",{className:"fas fa-angle-double-left ml-2"}),Object(c.jsx)("i",{className:"fas fa-angle-double-right"})]})},n):Object(c.jsx)("th",{id:r,draggable:!s,className:"sortable-table__header__item ".concat(s?"disabled":""),onDragStart:t,children:Object(c.jsx)("span",{children:e})},n)}))})}),Object(c.jsx)("tbody",{children:l&&l.map((function(e,t){return Object(c.jsx)("tr",{children:b.current.map((function(t,n){return Object(c.jsx)("td",{className:"".concat(d(t)," ").concat(x.includes(t)?"isSorted":""),children:Object(c.jsx)("span",{children:e[t]||""})},n)}))},t+1)}))})]})]})}function q(){var e=Object(r.useState)(!0),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)("quick-sort"),o=Object(h.a)(a,2),i=o[0],l=o[1],j=Object(r.useState)([]),x=Object(h.a)(j,2),m=x[0],f=x[1];return Object(c.jsxs)("div",{className:"table-sorter",children:[Object(c.jsxs)("header",{className:"table-sorter__header grid p-4 lg:flex lg:justify-between lg:flex-row lg:items-end",children:[Object(c.jsxs)("section",{className:"flex justify-between items-center lg:inline-block relative z-10",children:[Object(c.jsx)("h1",{className:"text-2xl lg:text-4xl",children:"Table Sorter"}),Object(c.jsx)("label",{htmlFor:"app-menu-control--hidden",id:"app-menu-control",className:"text-2xl flex lg:hidden rounded-full hover:bg-gray-100 w-10 h-10 justify-center items-center",children:Object(c.jsx)("i",{className:"fas fa-bars"})})]}),Object(c.jsx)("input",{type:"checkbox",id:"app-menu-control--hidden",className:"hidden"}),Object(c.jsxs)("section",{className:"app-menu pt-4 lg:pt-0 flex text-lg flex-col lg:flex-row ",children:[Object(c.jsxs)("div",{className:"flex items-center lg:mr-8 flex-col lg:flex-row",children:[Object(c.jsx)("button",{className:" py-2 btn btn--link",onClick:function(){return f([])},children:"Reset"}),Object(c.jsx)("span",{className:"p-4 py-2 hidden",children:Object(c.jsx)(b,{type:1,value:n,onChange:s,constantText:"Direction: ",onText:"Reverse",offText:"Normal",extraClasses:"with-muted-p"})})]}),Object(c.jsxs)("ul",{className:"sort-algorithms flex items-stretch flex-col lg:flex-row rounded overflow-hidden",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{className:"hidden sort-algorithm",type:"radio",name:"sort-algorithm",value:"quick-sort",id:"quick-sort",checked:"quick-sort"===i,onChange:function(e){return e.target.checked&&l("quick-sort")}}),Object(c.jsx)("label",{className:"p-4 py-2 text-center",htmlFor:"quick-sort",children:"Quick Sort"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{className:"hidden sort-algorithm",type:"radio",name:"sort-algorithm",value:"bubble-sort",id:"bubble-sort",checked:"bubble-sort"===i,onChange:function(e){return e.target.checked&&l("bubble-sort")}}),Object(c.jsx)("label",{className:"p-4 py-2 text-center",htmlFor:"bubble-sort",children:"Bubble Sort"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{className:"hidden sort-algorithm",type:"radio",name:"sort-algorithm",value:"merge-sort",id:"merge-sort",checked:"merge-sort"===i,onChange:function(e){return e.target.checked&&l("merge-sort")}}),Object(c.jsx)("label",{className:"p-4 py-2 text-center",htmlFor:"merge-sort",children:"Merge Sort"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{className:"hidden sort-algorithm",type:"radio",name:"sort-algorithm",value:"insertion-sort",id:"insertion-sort",checked:"insertion-sort"===i,onChange:function(e){return e.target.checked&&l("insertion-sort")}}),Object(c.jsx)("label",{className:"p-4 py-2 text-center",htmlFor:"insertion-sort",children:"Insertion Sort"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{className:"hidden sort-algorithm",type:"radio",name:"sort-algorithm",value:"quartile-sort",id:"quartile-sort",checked:"quick-sort"===i,onChange:function(e){return e.target.checked&&l("quick-sort")}}),Object(c.jsx)("label",{className:"p-4 py-2 text-center",htmlFor:"quartile-sort",children:"Quartile Sort"})]})]})]})]}),Object(c.jsxs)("main",{className:"overflow-hidden flex flex-col",children:[Object(c.jsxs)("section",{className:"px-4 py-2 lg:py-6 text-md md:text-lg border-t border-b bg-gray-50",onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDrop:function(e){var t;t=JSON.parse(e.dataTransfer.getData("text")),f((function(e){return m.find((function(e){return e.id===t.id}))?e:[].concat(Object(d.a)(e),[Object(u.a)({},t)])}))},children:[Object(c.jsx)("span",{className:"text-sm lg:text-md",children:"Drag headers here to sort: "}),m.map((function(e,t){return Object(c.jsxs)("span",{onClick:function(){},id:"".concat(e.id,"--cloned"),className:"sort-key",children:[Object(c.jsxs)("label",{htmlFor:"".concat(e.id,"--cloned-checkbox"),children:[e.key,Object(c.jsx)("input",{type:"checkbox",id:"".concat(e.id,"--cloned-checkbox"),className:"hidden",checked:e.isDirectionUp,onChange:function(t){var n,c;n=e.id,c=t.target.checked,f((function(e){return e.map((function(e){return e.id===n&&(e.isDirectionUp=c),e}))}))}}),Object(c.jsx)("i",{className:"fas fa-caret-up"}),Object(c.jsx)("i",{className:"fas fa-caret-down"})]}),Object(c.jsx)("span",{className:"remove",onClick:function(){return t=e.id,f((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:Object(c.jsx)("i",{className:"fas fa-times"})})]},t)}))]}),Object(c.jsx)(A,{onDragStart:function(e){var t,n=e.currentTarget.querySelector("input[type=checkbox]");e.dataTransfer.setData("text",JSON.stringify({id:e.currentTarget.id,key:null===(t=e.currentTarget.querySelector("span"))||void 0===t?void 0:t.innerText,isDirectionUp:!n||n.checked}))},keysToSortBy:m,sorter:T(i)})]})]})}n(37);var F=n.p+"static/media/bg.cd4da263.svg";n(38);function z(e){var t=e.nBars,n=Object(r.useState)("merge-sort"),s=Object(h.a)(n,2),a=s[0],o=s[1],i=function(){return 5+5*Math.round(20*Math.random())},l=Object(r.useRef)(Array(t).fill(0).map((function(e,t){return{value:i(),handleNo:t,class:""}}))),u=Object(r.useRef)([]),j=Object(r.useState)(0),b=Object(h.a)(j,2),x=b[0],m=b[1],g=function(){return m((function(e){return e+1}))};return Object(r.useEffect)((function(){if(0===u.current.length)new Promise((function(e){return setTimeout(e,1500)})).then((function(){l.current.forEach((function(e){return e.value=i()})),u.current.push({f:function(){},timeout:1500}),T(a)(l.current.map((function(e){return e.value})),0,l.current.length-1,[{key:"value",inAscending:!0}],(function(e,t,n,c,r){return u.current.push({f:function(){r&&C(l.current,e,t),r||(l.current[e].value=t),l.current.forEach((function(e){return e.class=""})),null===n||void 0===n||n.forEach((function(e){return l.current[e].class="emphasis-1"})),null===c||void 0===c||c.forEach((function(e){return l.current[e].class="emphasis-2"}))},timeout:0===u.current.length?1500:300})})),g()}));else{var e=Object(f.a)(u.current),t=e[0],n=e.slice(1);t&&new Promise((function(e){return setTimeout(e,t.timeout)})).then((function(){t.f(),u.current=n,g()}))}}),[x]),Object(c.jsxs)("div",{id:"sort-vizualizer",style:{"--count":2*l.current.length},children:[l.current.map((function(e,t){var n=l.current.findIndex((function(e){return e.handleNo===t})),r=l.current[n].value,s=l.current[n].class;return Object(c.jsx)("div",{style:{height:r+"%",left:"calc(".concat(n," * 2 * var(--width))")},className:s,id:"sort-vizualizer-bar-".concat(t)},t)})).reduce((function(e,t,n){return[].concat(Object(d.a)(e),[t,Object(c.jsx)("div",{},l.current.length+n)])}),[Object(c.jsx)("div",{})]).slice(1),Object(c.jsxs)("div",{className:"sort-vizualizer__settings",children:[Object(c.jsx)("i",{className:"fa fa-info-circle","aria-hidden":"true"}),Object(c.jsxs)("select",{id:"sort-vizualizer__algorithm",name:"sort-vizualizer__algorithm",value:a,onChange:function(e){return t=e.target.value,u.current=[],void o(t);var t},children:[Object(c.jsx)("option",{value:"quick-sort",children:"Quick Sort"}),Object(c.jsx)("option",{value:"bubble-sort",children:"Bubble Sort"}),Object(c.jsx)("option",{value:"heap-sort",children:"Heap Sort"}),Object(c.jsx)("option",{value:"merge-sort",children:"Merge Sort"}),Object(c.jsx)("option",{value:"selection-sort",children:"Selection Sort"}),Object(c.jsx)("option",{value:"insertion-sort",children:"Insertion Sort"})]})]})]})}function E(e){var t=e.onStartExploring;return Object(c.jsxs)("main",{id:"welcome",children:[Object(c.jsxs)("header",{className:"welcome__header",children:[Object(c.jsx)("h1",{className:"text-4xl mb-4 lg:text-6xl lg:mb-8",children:"Table Sorter"}),Object(c.jsx)("h2",{className:"text-1xl-m lg:text-3xl",children:"Application that demonstrate sorting algorithms on tabular data"})]}),Object(c.jsx)("section",{className:"welcome__hero flex align-center",children:Object(c.jsx)("img",{src:F,alt:"Sorting Algorithm"})}),Object(c.jsx)("section",{className:"welcome__subtext",children:Object(c.jsxs)("h3",{children:[Object(c.jsx)("p",{className:"text-1xl-m mb-4 lg:text-2xl",children:"Supported Sorters: "}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Quick Sort"})," "]}),Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Merge Sort"})," "]}),Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Heap Sort"})," "]}),Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Bubble Sort"})," "]}),Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Insertion Sort"})," "]}),Object(c.jsxs)("li",{className:"lg:text-1xl-m",children:[Object(c.jsx)("i",{className:"far fa-check-circle mr-4 ml-4 mb-2"}),Object(c.jsx)("span",{children:"Selection Sort"})," "]})]})]})}),Object(c.jsx)("footer",{className:"w-full welcome__footer ",children:Object(c.jsx)("button",{className:"btn w-full ",onClick:t,children:"Start Exploring"})}),Object(c.jsx)("div",{className:"welcome__design-element flex hidden- md:flex- md:absolute",children:Object(c.jsx)(z,{})})]})}z.defaultProps={nBars:15};var B=function(){return function(e){var t=e||document.querySelector(":root"),n=function(e){null===e||void 0===e||e.style.setProperty("--vh",window.innerHeight/100+"px")};n(t),Object(r.useEffect)((function(){return window.addEventListener("resize",(function(){return n(t)})),function(){window.removeEventListener("resize",(function(){return n(t)}))}}))}(),Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/welcome",render:function(e){var t=e.history;return Object(c.jsx)(E,{onStartExploring:function(){return t.push("/sorter")}})}}),Object(c.jsx)(l.b,{path:"/sorter",children:Object(c.jsx)(q,{})}),Object(c.jsx)(l.b,{path:"/",children:Object(c.jsx)(l.a,{to:"/welcome"})}),Object(c.jsx)(l.b,{path:"*",children:Object(c.jsx)(l.a,{to:"/sorter"})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),M()}},[[44,1,2]]]);
//# sourceMappingURL=main.2c4fe479.chunk.js.map