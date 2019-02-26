(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(145),l=n(4),s=n.n(l),d=n(146),u=n.n(d),m=(n(32),n(144),o.a.createContext({})),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(e){var t=e.description,n=e.lang,a=e.meta,r=e.keywords,i=e.title;return o.a.createElement(p,{query:h,render:function(e){var c=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:c})}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func},g.defaultProps={lang:"en",meta:[],keywords:[]},g.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var E=g,h="1025518380",w=(n(155),function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"typewriter"},o.a.createElement("h1",null,"Hello, I am Olivier Keutgens!")),o.a.createElement("div",{className:"secondtypewriter"},o.a.createElement("h2",{className:"typewriter"},"... and this my ",o.a.createElement("span",null,"resume.")),o.a.createElement("h2",{className:"end"}," head.")))}),f=n(156),v=n.n(f),y=n(157),P=n.n(y),N=n(158),x=n.n(N),b=n(159),I=n.n(b),k=n(160),C=n.n(k),j=(n(161),function(){return o.a.createElement("div",{className:"profile-picture"},o.a.createElement("img",{src:v.a,id:"hair"}),o.a.createElement("img",{src:P.a,id:"eyes"}),o.a.createElement("img",{src:x.a,id:"nose"}),o.a.createElement("img",{src:I.a,id:"mouth"}),o.a.createElement("img",{src:C.a,id:"shadow"}))}),M=n(34),D=n.n(M),z=function(){return o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("p",null,"Bonjour"))},Z=function(){return o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("p",null,"Bonjour"))},W=function(){return o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("p",null,"Bonjour"))},Q=n(162),L=n.n(Q),H=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"dropdown-button",onClick:this.props.onClick},o.a.createElement("img",{src:L.a,className:"right-arrow",alt:"dropdown "+this.props.title}),o.a.createElement("h3",null,this.props.title)),o.a.createElement("div",{className:"background-div "+(this.props.toggle?"emphasis":"")}))},t}(i.Component),B=(n(163),function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleEducation=function(){var e=n.state.showEducation;n.setState({showEducation:!e,showWorkExperience:!1,showPersonalExperience:!1})},n.toggleWorkExperience=function(){var e=n.state.showWorkExperience;n.setState({showEducation:!1,showWorkExperience:!e,showPersonalExperience:!1})},n.togglePersonalExperience=function(){var e=n.state.showPersonalExperience;n.setState({showEducation:!1,showWorkExperience:!1,showPersonalExperience:!e})},n.state={showEducation:!1,showWorkExperience:!1,showPersonalExperience:!1},n.toggleEducation=n.toggleEducation.bind(D()(n)),n.toggleWorkExperience=n.toggleWorkExperience.bind(D()(n)),n.togglePersonalExperience=n.togglePersonalExperience.bind(D()(n)),n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"info-right"},o.a.createElement("div",{className:"info-container"},o.a.createElement(H,{onClick:this.toggleEducation,title:"Education",toggle:this.state.showEducation}),this.state.showEducation?o.a.createElement(z,null):""),o.a.createElement("div",{className:"info-container"},o.a.createElement(H,{onClick:this.toggleWorkExperience,title:"Work Experience",toggle:this.state.showWorkExperience}),this.state.showWorkExperience?o.a.createElement(Z,null):""),o.a.createElement("div",{className:"info-container"},o.a.createElement(H,{onClick:this.togglePersonalExperience,title:"Personal Experience",toggle:this.state.showPersonalExperience}),this.state.showPersonalExperience?o.a.createElement(W,null):""))},t}(i.Component)),K=(n(164),function(){return o.a.createElement("div",{className:"info-left"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null," Junior Developer - Front end & Back end  ")),o.a.createElement("div",{className:"introduction"},o.a.createElement("h5",null,"Passionate about ",o.a.createElement("b",null,"entrepreneurship"),", ",o.a.createElement("b",null,"creativity")," and"," ",o.a.createElement("b",null,"digitality"),", always optimist, nature and diversity lover, change-enthusiast, backpacker, dedicated and motivated volunteer, marketer (with Master!), flexible and eager to learn from others. I aimed at improving the world we are living in by putting my skills at the service of projects that make sense to me.")))}),G=(n(165),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{title:"Resume",keywords:["resume","gatsby","react"]}),o.a.createElement("body",null,o.a.createElement(w,null),o.a.createElement("div",{className:"content"},o.a.createElement(K,null),o.a.createElement(j,null),o.a.createElement(B,null))))},t}(i.Component));t.default=G},144:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Hire this man",description:"The online resume of Olivier Keutgens.",author:"@olivierk95"}}}}},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(68),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,n){e.exports=n.p+"static/profile_picture_destroyed_hair-422bc727729bbde1a023ee6b523d184e.png"},157:function(e,t,n){e.exports=n.p+"static/profile_picture_destroyed_eyes-17bcf07953a5fda1d12af6021c4821e2.png"},158:function(e,t,n){e.exports=n.p+"static/profile_picture_destroyed_nose-30fa0e701202dae422955aecdee11f80.png"},159:function(e,t,n){e.exports=n.p+"static/profile_picture_destroyed_mouth-2a0db5e24a4cb56352fa879232788fd9.png"},160:function(e,t,n){e.exports=n.p+"static/profile_picture_destroyed_shadow-76d77f087820efcf310066b814d0d0df.png"},162:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjMwNnB4IiBmaWxsPSIjMTYxNDExIiBoZWlnaHQ9IjMwNnB4IiB2aWV3Qm94PSIwIDAgMzA2IDMwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzA2IDMwNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9ImNoZXZyb24tcmlnaHQiPg0KCQk8cG9seWdvbiBwb2ludHM9Ijk0LjM1LDAgNTguNjUsMzUuNyAxNzUuOTUsMTUzIDU4LjY1LDI3MC4zIDk0LjM1LDMwNiAyNDcuMzUsMTUzIAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-index-js-ab1542d100ab0fb0087f.js.map