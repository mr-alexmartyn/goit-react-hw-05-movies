"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{5094:function(n,t,e){e.d(t,{Hg:function(){return s},Jh:function(){return h},TP:function(){return p},z1:function(){return o},zv:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="5ccb43eb34bca3490aaae9a8e1157c65";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,u,i=e(9439),s=e(7689),o=e(2791),p=e(5094),f=e(168),h=e(6444),l=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=h.ZP.li(a||(a=(0,f.Z)(["\n  margin: 10px 0 16px;\n  padding: 2px 8px;\n  max-width: 120px;\n  flex-basis: calc(100% / 3-30px);\n"]))),d=h.ZP.h3(c||(c=(0,f.Z)(["\n  margin: 8px 0;\n"]))),v=h.ZP.p(u||(u=(0,f.Z)(["\n  margin: 0;\n"]))),x=e(184),m=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,p.zv)(a).then((function(n){return r(n.cast)}))}),[a]),(0,x.jsx)(l,{children:e.length>0?e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,x.jsxs)(g,{children:[(0,x.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,x.jsx)(d,{children:e}),(0,x.jsxs)(v,{children:[" Character: ",a]})]},t)})):"Sorry, there isn't any info :("})}}}]);
//# sourceMappingURL=387.20dbeac6.chunk.js.map