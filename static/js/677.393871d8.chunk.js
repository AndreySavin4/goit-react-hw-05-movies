"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{130:function(n,e,t){t.d(e,{O:function(){return i}});var r=t(689),u=t(87),c=t(184),i=function(n){var e=n.moviesList,t=(0,r.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:e.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title},n.id)},n.id)}))})})}},677:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(439),u=t(87),c=t(791),i=t(289),a=t(130),o=t(184),s=function(n){var e=n.onChange;return(0,o.jsxs)("form",{children:[(0,o.jsx)("input",{name:"query",type:"text"}),(0,o.jsx)("button",{type:"submit",onChange:e,children:"Search"})]})},f=function(){var n,e=(0,u.lr)(),t=(0,r.Z)(e,2),f=t[0],h=t[1],p=(0,c.useState)(null),l=(0,r.Z)(p,2),v=l[0],d=l[1],m=null!==(n=f.get("query"))&&void 0!==n?n:"";(0,c.useEffect)((function(){(0,i.R8)(m).then((function(n){return n.json()})).then((function(n){return d(n.results)})).catch((function(n){return new Error(n)}))}),[m]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{onChange:function(n){var e=n.target.value.trim();h({query:e}),n.target.reset()}}),v?(0,o.jsx)(a.O,{moviesList:v}):(0,o.jsx)("div",{children:"Loading..."})]})}},289:function(n,e,t){function r(n,e,t,r,u,c,i){try{var a=n[c](i),o=a.value}catch(s){return void t(s)}a.done?e(o):Promise.resolve(o).then(r,u)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(u,c){var i=n.apply(e,t);function a(n){r(i,u,c,a,o,"next",n)}function o(n){r(i,u,c,a,o,"throw",n)}a(void 0)}))}}t.d(e,{x1:function(){return h},lG:function(){return f},ei:function(){return p},R8:function(){return s},ZF:function(){return o}});var c=t(757),i=t.n(c),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzMyOGMzOTFjMGM2NzdhOGVlMTVkNzZhMGMwOWI0OSIsInN1YiI6IjY0NjNiNGI4ZGJiYjQyMDEzNjM4OGY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-onE9RDABl6DkqZwObgftaf4MPI3LnzHVcMmjrK6Mo"}},o=function(){var n=u(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e7328c391c0c677a8ee15d76a0c09b49",a);case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),a)},f=function(){var n=u(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),a).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=u(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),a);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=u(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),a);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=677.393871d8.chunk.js.map