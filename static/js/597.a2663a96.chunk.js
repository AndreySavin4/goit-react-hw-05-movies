"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(n,t,e){e.r(t);var r=e(439),c=e(791),a=e(689),u=e(721),i=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1],s=(0,a.UO)().id;return(0,c.useEffect)((function(){(0,u.x1)(s).then((function(n){o(n.cast)})).catch((function(n){return new Error(n)}))}),[s]),(0,i.jsx)("ul",{children:e.map((function(n){var t=n.profile_path,e=n.name,r=n.character,c=n.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t),alt:e}),(0,i.jsx)("p",{children:e}),(0,i.jsxs)("p",{children:["Character: ",r]})]},c)}))})}},721:function(n,t,e){function r(n,t,e,r,c,a,u){try{var i=n[a](u),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function i(n){r(u,c,a,i,o,"next",n)}function o(n){r(u,c,a,i,o,"throw",n)}i(void 0)}))}}e.d(t,{x1:function(){return f},lG:function(){return s},ei:function(){return p},ZF:function(){return o}});var a=e(757),u=e.n(a),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzMyOGMzOTFjMGM2NzdhOGVlMTVkNzZhMGMwOWI0OSIsInN1YiI6IjY0NjNiNGI4ZGJiYjQyMDEzNjM4OGY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-onE9RDABl6DkqZwObgftaf4MPI3LnzHVcMmjrK6Mo"}},o=function(){var n=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e7328c391c0c677a8ee15d76a0c09b49",i);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=c(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=c(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.a2663a96.chunk.js.map