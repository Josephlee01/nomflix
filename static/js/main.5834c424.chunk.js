(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,u,d,p,j,b,h,g,x,O,m,v,f,y,_,w,k,S,T,R,U,M,z,C,N,I,P=n(1),F=n.n(P),V=n(38),A=n.n(V),B=n(12),D=n(13),L=n(15),q=n(14),J=n(19),E=n(5),H=n(10),G=n.n(H),K=n(17),Q=n(3),W=n(2),X=n(0),Y=W.c.div(r||(r=Object(Q.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 32px;\n  margin-top: 50px\n"]))),Z=function(){return Object(X.jsx)(Y,{children:Object(X.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},$=W.c.div(a||(a=Object(Q.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),ee=W.c.span(i||(i=Object(Q.a)(["\n  color: ",";\n"])),(function(e){return e.color})),te=function(e){var t=e.text,n=e.color;return Object(X.jsx)($,{children:Object(X.jsx)(ee,{color:n,children:t})})},ne=W.c.div(c||(c=Object(Q.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),re=W.c.span(o||(o=Object(Q.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),ae=W.c.div(s||(s=Object(Q.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),ie=function(e){var t=e.title,n=e.children;return Object(X.jsxs)(ne,{children:[Object(X.jsx)(re,{children:t}),Object(X.jsx)(ae,{children:n})]})},ce=n(16),oe=W.c.div(l||(l=Object(Q.a)(["\n  font-size: 14px;\n"]))),se=W.c.div(u||(u=Object(Q.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 5px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),le=W.c.span(d||(d=Object(Q.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),ue=W.c.div(p||(p=Object(Q.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),se,le),de=W.c.span(j||(j=Object(Q.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),pe=W.c.span(b||(b=Object(Q.a)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),je=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(X.jsx)(J.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(X.jsxs)(oe,{children:[Object(X.jsxs)(ue,{children:[Object(X.jsx)(se,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(29).default}),Object(X.jsxs)(le,{children:[Object(X.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(X.jsx)(de,{children:a.length>15?"".concat(a.substring(0,15),"..."):a}),Object(X.jsx)(pe,{children:c})]})})},be=W.c.div(h||(h=Object(Q.a)(["\n  padding: 20px;\n"]))),he=function(e){var t=e.nowPlaying,n=e.popular,r=e.upcoming,a=e.loading,i=e.error;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(ce.a,{children:Object(X.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(X.jsx)(Z,{}):Object(X.jsxs)(be,{children:[t&&t.length>0&&Object(X.jsx)(ie,{title:"Now Playing",children:t.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0,rating:e.vote_average},e.id)}))}),r&&r.length>0&&Object(X.jsx)(ie,{title:"Upcoming Movies",children:r.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0,rating:e.vote_average},e.id)}))}),n&&n.length>0&&Object(X.jsx)(ie,{title:"Popular Movies",children:n.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0,rating:e.vote_average},e.id)}))}),i&&Object(X.jsx)(te,{text:i,color:"#e74c3c"})]})]})},ge=n(44),xe=n.n(ge).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"33158bb84ecdb7fa41e6c45b2c443fe6",language:"en-US"}}),Oe=function(){return xe.get("movie/now_playing")},me=function(){return xe.get("movie/upcoming")},ve=function(){return xe.get("movie/popular")},fe=function(e){return xe.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ye=function(e){return xe.get("search/movie",{params:{query:encodeURIComponent(e)}})},_e=function(){return xe.get("tv/top_rated")},we=function(){return xe.get("tv/popular")},ke=function(){return xe.get("tv/airing_today")},Se=function(e){return xe.get("tv/".concat(e),{params:{append_to_response:"videos"}})},Te=function(e){return xe.get("search/tv",{params:{query:encodeURIComponent(e)}})},Re=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe();case 3:return t=e.sent,n=t.data.results,e.next=7,me();case 7:return r=e.sent,a=r.data.results,e.next=11,ve();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(X.jsx)(he,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(F.a.Component),Ue=W.c.div(g||(g=Object(Q.a)(["\n  padding: 20px;\n"]))),Me=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(ce.a,{children:Object(X.jsx)("title",{children:"TV | Nomflix"})}),a?Object(X.jsx)(Z,{}):Object(X.jsxs)(Ue,{children:[t&&t.length>0&&Object(X.jsx)(ie,{title:"Top Rated Show",children:t.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_name,year:e.first_air_date&&e.first_air_date.substring(0,4),rating:e.vote_average},e.id)}))}),n&&n.length>0&&Object(X.jsx)(ie,{title:"Popular Show",children:n.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_name,year:e.first_air_date&&e.first_air_date.substring(0,4),rating:e.vote_average},e.id)}))}),r&&r.length>0&&Object(X.jsx)(ie,{title:"Airing Today",children:r.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_name,year:e.first_air_date&&e.first_air_date.substring(0,4),rating:e.vote_average},e.id)}))}),i&&Object(X.jsx)(te,{text:i,color:"#e74c3c"})]})]})},ze=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e();case 3:return t=e.sent,n=t.data.results,e.next=7,we();case 7:return r=e.sent,a=r.data.results,e.next=11,ke();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return console.log(this.state),Object(X.jsx)(Me,{topRated:t,popular:n,airingToday:r,loading:a,error:i})}}]),n}(F.a.Component),Ce=W.c.header(x||(x=Object(Q.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Ne=W.c.ul(O||(O=Object(Q.a)(["\n  display: flex;\n"]))),Ie=W.c.li(m||(m=Object(Q.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Pe=Object(W.c)(J.b)(v||(v=Object(Q.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Fe=Object(E.g)((function(e){var t=e.location.pathname;return Object(X.jsx)(Ce,{children:Object(X.jsxs)(Ne,{children:[Object(X.jsx)(Ie,{current:"/"===t,children:Object(X.jsx)(Pe,{to:"/",children:"Movies"})}),Object(X.jsx)(Ie,{current:"/tv"===t,children:Object(X.jsx)(Pe,{to:"/tv",children:"TV"})}),Object(X.jsx)(Ie,{current:"/search"===t,children:Object(X.jsx)(Pe,{to:"/search",children:"Search"})})]})})})),Ve=W.c.div(f||(f=Object(Q.a)(["\n  padding: 0px 20px;\n"]))),Ae=W.c.form(y||(y=Object(Q.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Be=W.c.input(_||(_=Object(Q.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),De=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.searchTerm,i=e.handleSubmit,c=e.error,o=e.updateTerm;return Object(X.jsxs)(Ve,{children:[Object(X.jsx)(ce.a,{children:Object(X.jsx)("title",{children:"Search | Nomflix"})}),Object(X.jsx)(Ae,{onSubmit:i,children:Object(X.jsx)(Be,{placeholder:"Search Movies or TV Shows...",value:a,onChange:o})}),r?Object(X.jsx)(Z,{}):Object(X.jsxs)(X.Fragment,{children:[t&&t.length>0&&Object(X.jsx)(ie,{title:"Movie Results",children:t.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0,rating:e.vote_average},e.id)}))}),n&&n.length>0&&Object(X.jsx)(ie,{title:"TV Show Results",children:n.map((function(e){return Object(X.jsx)(je,{id:e.id,imageUrl:e.poster_path,title:e.original_name,year:e.first_air_date&&e.first_air_date.substring(0,4),rating:e.vote_average},e.id)}))})]}),c&&Object(X.jsx)(te,{text:c,color:"#e74c3c"}),n&&t&&0===n.length&&0===t.length&&Object(X.jsx)(te,{text:"Nothing found",color:"#95a5a6"})]})},Le=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(B.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;console.log(n),e.setState({searchTerm:n})},e.searchByTerm=Object(K.a)(G.a.mark((function t(){var n,r,a,i,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ye(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Te(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(D.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(X.jsx)(De,{movieResults:t,tvResults:n,searchTerm:r,loading:a,error:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(F.a.Component),qe=W.c.div(w||(w=Object(Q.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Je=W.c.div(k||(k=Object(Q.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Ee=W.c.div(S||(S=Object(Q.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),He=W.c.div(T||(T=Object(Q.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"])),(function(e){return e.bgImage})),Ge=W.c.div(R||(R=Object(Q.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),Ke=W.c.h3(U||(U=Object(Q.a)(["\n  font-size: 32px;\n"]))),Qe=W.c.div(M||(M=Object(Q.a)(["\n  margin: 20px 0;\n"]))),We=W.c.span(z||(z=Object(Q.a)([""]))),Xe=W.c.span(C||(C=Object(Q.a)(["\n  margin: 0 10px;\n"]))),Ye=W.c.p(N||(N=Object(Q.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Ze=function(e){var t=e.result,r=e.loading;e.error;return r?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(ce.b,{children:Object(X.jsx)("title",{children:"Loading... | Nomflix"})}),Object(X.jsx)(Z,{})]}):Object(X.jsxs)(qe,{children:[Object(X.jsx)(ce.b,{children:Object(X.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," ","| Nomflix"]})}),Object(X.jsx)(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(X.jsxs)(Je,{children:[Object(X.jsx)(Ee,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),Object(X.jsxs)(Ge,{children:[Object(X.jsx)(Ke,{children:t.original_title?t.original_title:t.original_name}),Object(X.jsxs)(Qe,{children:[Object(X.jsx)(We,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(X.jsx)(Xe,{children:"\u2022"}),Object(X.jsxs)(We,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(X.jsx)(Xe,{children:"\u2022"}),Object(X.jsx)(We,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(X.jsx)(Ye,{children:t.overview})]})]})]})},$e=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(e){var r;Object(B.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c,o,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,fe(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Se(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return console.log(this.state),Object(X.jsx)(Ze,{result:t,error:n,loading:r})}}]),n}(F.a.Component),et=function(){return Object(X.jsx)(J.a,{children:Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Fe,{}),Object(X.jsxs)(E.d,{children:[Object(X.jsx)(E.b,{path:"/",exact:!0,component:Re}),Object(X.jsx)(E.b,{path:"/tv",component:ze}),Object(X.jsx)(E.b,{path:"/search",component:Le}),Object(X.jsx)(E.b,{path:"/movie/:id",component:$e}),Object(X.jsx)(E.b,{path:"/show/:id",component:$e}),Object(X.jsx)(E.a,{from:"*",to:"/"})]})]})})},tt=n(45),nt=Object(W.a)(I||(I=Object(Q.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),tt.a),rt=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){return Object(B.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(et,{}),Object(X.jsx)(nt,{})]})}}]),n}(P.Component);A.a.render(Object(X.jsx)(rt,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.5834c424.chunk.js.map