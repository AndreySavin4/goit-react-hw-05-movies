"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{130:function(n,t,e){e.d(t,{O:function(){return i}});var r=e(689),u=e(87),c=e(184),i=function(n){var t=n.moviesList,e=(0,r.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title},n.id)},n.id)}))})})}},667:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(439),u=e(87),c=e(791),i=e(289),a=e(130),o=e(184),s=function(n){var t=n.onSubmit,e=(0,c.useState)(""),u=(0,r.Z)(e,2),i=u[0],a=u[1],s=function(){a("")};return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==i.trim()?(t(i),s()):alert("Search can not be empty")},children:[(0,o.jsx)("input",{name:"query",placeholder:"Search films",type:"text",onChange:function(n){var t=n.currentTarget.value;a(t)}}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},f=function(){var n,t=(0,u.lr)(),e=(0,r.Z)(t,2),f=e[0],h=e[1],p=(0,c.useState)(null),l=(0,r.Z)(p,2),v=l[0],d=l[1],m=null!==(n=f.get("query"))&&void 0!==n?n:"";(0,c.useEffect)((function(){(0,i.R8)(m).then((function(n){return n.json()})).then((function(n){return d(n.results)})).catch((function(n){return new Error(n)}))}),[m]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{onSubmit:function(n){h({query:n})}}),v?(0,o.jsx)(a.O,{moviesList:v}):(0,o.jsx)("div",{children:"Loading..."})]})}},289:function(n,t,e){function r(n,t,e,r,u,c,i){try{var a=n[c](i),o=a.value}catch(s){return void e(s)}a.done?t(o):Promise.resolve(o).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,c){var i=n.apply(t,e);function a(n){r(i,u,c,a,o,"next",n)}function o(n){r(i,u,c,a,o,"throw",n)}a(void 0)}))}}e.d(t,{x1:function(){return h},lG:function(){return f},ei:function(){return p},R8:function(){return s},ZF:function(){return o}});var c=e(757),i=e.n(c),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzMyOGMzOTFjMGM2NzdhOGVlMTVkNzZhMGMwOWI0OSIsInN1YiI6IjY0NjNiNGI4ZGJiYjQyMDEzNjM4OGY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-onE9RDABl6DkqZwObgftaf4MPI3LnzHVcMmjrK6Mo"}},o=function(){var n=u(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e7328c391c0c677a8ee15d76a0c09b49",a);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),a)},f=function(){var n=u(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),a).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=u(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),a);case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=u(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),a);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=667.afa21f12.chunk.js.map