"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[443,717],{5443:function(e,t,a){a.r(t),a.d(t,{MovieDetailsPage:function(){return h}});var i=a(885),n=a(2791),r=a(7433),s=a(501),c=a(6871),o="AdditionalInformation_list__+nXYI",l=a(184);function v(){var e=(0,c.UO)().movieId;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("ul",{className:o,children:["Cast","Reviews"].map((function(t,a){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(e,"/").concat(t.toLowerCase()),children:t})},a)}))}),(0,l.jsx)(c.j3,{})]})}var d=a(6717),h=function(){var e=(0,n.useState)(null),t=(0,i.Z)(e,2),a=t[0],o=t[1],h=(0,c.UO)().movieId,_=(0,n.useRef)((0,c.TH)().state);if((0,n.useEffect)((function(){try{r.Z.fetchMoviesWithId(h).then((function(e){var t=e.data,a=t.title,i=t.overview,n=t.poster_path,r=t.vote_average,s=t.genres,c=t.release_date;o({title:a,overview:i,poster_path:n,vote_average:r,genres:s,release_date:c})}))}catch(e){}}),[h]),a){var u=a.title,f=a.overview,m=a.poster_path,g=a.vote_average,x=a.genres,j=a.release_date;return(0,l.jsxs)(l.Fragment,{children:[_.current&&(0,l.jsx)(s.rU,{className:d.default.link,to:_.current.location,state:_.current.search,children:"\u2190 Go back"}),(0,l.jsxs)("div",{className:d.default.info,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m),className:d.default.img,alt:u}),(0,l.jsxs)("div",{className:d.default.text,children:[(0,l.jsx)("h2",{children:"".concat(u," (").concat(j.slice(0,4),")")}),(0,l.jsx)("p",{children:"User score: ".concat(10*g,"%")}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:f}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:x.map((function(e){var t=e.name;return"".concat(t," ")}))})]})]}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(v,{})]})}}},6717:function(e,t,a){a.r(t),t.default={link:"MovieDetailsPage_link__k0vIs",img:"MovieDetailsPage_img__KBqKH",info:"MovieDetailsPage_info__MP-24",text:"MovieDetailsPage_text__wjX-+"}}}]);
//# sourceMappingURL=443.c5d87fce.chunk.js.map