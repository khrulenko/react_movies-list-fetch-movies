(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse("[]")},,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(5),l=a.n(i),m=(a(13),a(7)),s=a(1),r=(a(14),a(15),a(16),function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,i=e.Poster,l=e.imdbID;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:i,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t))),c.a.createElement("div",{className:"content"},n,c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(l)},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return c.a.createElement("div",{className:"movies"},a.map((function(e){return c.a.createElement(r,Object.assign({key:e.imdbID},e))})))};a(17);var u=function(e){var t=e.addMovie,a=Object(n.useState)(""),i=Object(s.a)(a,2),l=i[0],m=i[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],v=u[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),b=f[0],p=f[1],N=Object(n.useState)(!1),g=Object(s.a)(N,2),h=g[0],j=g[1];return Object(n.useEffect)((function(){var e;(e=l,fetch("".concat("https://www.omdbapi.com/?apikey=b49501d4&t=").concat(e)).then((function(e){return e.json()}))).then((function(e){v(e)}))}),[l]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat("False"===d.Response&&"is-danger"),value:l,onChange:function(e){return function(e){var t=e.target.value;m(t)}(e)}})),"False"===d.Response&&c.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){l.trim().length>0&&(j(!0),p(d))}},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){t(b,h),m(""),j(!1)}},"Add to the list")))),c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Preview"),h&&c.a.createElement(r,b)))},d=a(6),v=function(){var e=Object(n.useState)(d),t=Object(s.a)(e,2),a=t[0],i=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement(o,{movies:a})),c.a.createElement("div",{className:"sidebar"},c.a.createElement(u,{addMovie:function(e,t){var n=a.some((function(t){return t.imdbID===e.imdbID}));e&&t&&!n&&i((function(t){return[e].concat(Object(m.a)(t))}))}}))))};l.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ca68ee6d.chunk.js.map