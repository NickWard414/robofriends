(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(24),n(9)),s=n(7),u=n(18),l=n(1),h=n(2),d=n(4),b=n(3),p=n(5),m=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=(n(15),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(r.Component),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).updateCount=function(){e.setState(function(t){return{count:e.state.count+1}})},e.state={count:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"Robofriends"),a.a.createElement(v,{color:"red"}))}}]),t}(r.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(j,null),a.a.createElement(f,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(g,null,a.a.createElement(E,{robots:c}))))}}]),t}(r.Component),C=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={searchField:""},S={isPending:!1,robots:[],error:""};n(31);n.d(t,"store",function(){return _});var w=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(s.d)(w,Object(s.a)(u.a));c.a.render(a.a.createElement(i.a,{store:_},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.2b52c390.chunk.js.map