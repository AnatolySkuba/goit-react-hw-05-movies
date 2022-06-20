"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[812,983,443,717,797,258],{6409:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(885),r=n(501),a=n(6871),c=n(184);function o(e){var t=e.title,n=e.id,o=(0,r.lr)(),s=(0,i.Z)(o,2),u=s[0];s[1];return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(n),state:{location:(0,a.TH)().pathname,search:u.get("query")},children:t})})}function s(e){var t=e.movies;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title;return(0,c.jsx)(o,{title:n,id:t},t)}))})})}},3983:function(e,t,n){n.r(t),n.d(t,{HomePage:function(){return u}});var i=n(2982),r=n(885),a=n(2791),c=n(6409),o=n(7433),s=n(184),u=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,a.useEffect)((function(){o.Z.getTrendingMovies().then((function(e){e.results.map((function(e){var t=e.id,n=e.title;return u((function(e){return[].concat((0,i.Z)(e),[{id:t,title:n}])}))}))}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending today"}),0!==n.length&&(0,s.jsx)(c.Z,{movies:n})]})}},5443:function(e,t,n){n.r(t),n.d(t,{MovieDetailsPage:function(){return v}});var i=n(885),r=n(2791),a=n(7433),c=n(501),o=n(6871),s="AdditionalInformation_list__+nXYI",u=n(184);function l(){var e=(0,o.UO)().movieId;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("ul",{className:s,children:["Cast","Reviews"].map((function(t,n){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(e,"/").concat(t.toLowerCase()),children:t})},n)}))}),(0,u.jsx)(o.j3,{})]})}var f=n(6717),v=function(){var e=(0,r.useState)(null),t=(0,i.Z)(e,2),n=t[0],s=t[1],v=(0,o.UO)().movieId,d=(0,r.useRef)((0,o.TH)().state);if((0,r.useEffect)((function(){try{a.Z.fetchMoviesWithId(v).then((function(e){var t=e.data,n=t.title,i=t.overview,r=t.poster_path,a=t.vote_average,c=t.genres,o=t.release_date;s({title:n,overview:i,poster_path:r,vote_average:a,genres:c,release_date:o})}))}catch(e){}}),[v]),n){var h=n.title,m=n.overview,g=n.poster_path,_=n.vote_average,x=n.genres,j=n.release_date;return(0,u.jsxs)(u.Fragment,{children:[d.current&&(0,u.jsx)(c.rU,{className:f.default.link,to:d.current.location,state:d.current.search,children:"\u2190 Go back"}),(0,u.jsxs)("div",{className:f.default.info,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(g),className:f.default.img,alt:h}),(0,u.jsxs)("div",{className:f.default.text,children:[(0,u.jsx)("h2",{children:"".concat(h," (").concat(j.slice(0,4),")")}),(0,u.jsx)("p",{children:"User score: ".concat(10*_,"%")}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:m}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:x.map((function(e){var t=e.name;return"".concat(t," ")}))})]})]}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsx)(l,{})]})}}},4797:function(e,t,n){n.r(t),n.d(t,{MoviesPage:function(){return v}});var i=n(2982),r=n(885),a=n(2791),c=n(501),o=n(6871),s=n(6409),u=n(7433),l=n(2258),f=n(184),v=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],v=t[1],d=(0,a.useState)([]),h=(0,r.Z)(d,2),m=h[0],g=h[1],_=(0,c.lr)(),x=(0,r.Z)(_,2),j=x[0],p=x[1],M=(0,o.TH)().state||j.get("query");function P(e){if(e){p("query=".concat(e)),g([]);try{u.Z.fetchMoviesWithQuery(e).then((function(e){e.data.results.map((function(e){var t=e.id,n=e.title;return g((function(e){return[].concat((0,i.Z)(e),[{id:t,title:n}])}))}))}))}catch(t){}}}(0,a.useEffect)((function(){M&&j.set("query",M),M&&P(M)}),[]),(0,a.useEffect)((function(){g([])}),[M]);return(0,f.jsxs)("main",{children:[(0,f.jsxs)("form",{className:l.default.form,onSubmit:function(e){e.preventDefault()},children:[(0,f.jsx)("input",{onChange:function(e){v(e.target.value)},value:n}),(0,f.jsx)("button",{onClick:function(){return P(n)},children:"Search"})]}),0!==m.length&&(0,f.jsx)(s.Z,{movies:m})]})}},4812:function(e,t,n){n.r(t),n.d(t,{HomePage:function(){return i.HomePage},MovieDetailsPage:function(){return a.MovieDetailsPage},MoviesPage:function(){return r.MoviesPage}});var i=n(3983),r=n(4797),a=n(5443)},6717:function(e,t,n){n.r(t),t.default={link:"MovieDetailsPage_link__k0vIs",img:"MovieDetailsPage_img__KBqKH",info:"MovieDetailsPage_info__MP-24",text:"MovieDetailsPage_text__wjX-+"}},2258:function(e,t,n){n.r(t),t.default={form:"MoviesPage_form__vECho"}}}]);
//# sourceMappingURL=812.063fc5a2.chunk.js.map