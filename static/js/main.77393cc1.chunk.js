(this.webpackJsonpRobofriends=this.webpackJsonpRobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(6);var l=n(1),i=n(2),s=n(4),h=n(3),u=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow pointer bw5 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/test/".concat(t),alt:"Robos",height:"200",width:"200"}),r.a.createElement("h2",null," ",n),r.a.createElement("p",null," ",a))},m=function(e){var t=e.robots.map((function(e,t){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},d=function(e){var t=e.change;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Searchbyname",className:"pa3 ma3 bg-lightest-blue b--green",onChange:t}))},b=function(e){return console.log(e),r.a.createElement("div",{style:{overflowY:"scroll",border:" 5px solid black",height:"800px"}},e.children)},p=(n(14),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).props=e,a.state={hasErro:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasErro:!0})}},{key:"render",value:function(){return this.state.hasErro?r.a.createElement("h1",null," Ooops, something erro"):this.props.children}}]),n}(a.Component)),f=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value}),console.log("change")},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Seach a Robot "),r.a.createElement(d,{change:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(m,{robots:t}))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}}]),n}(a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.77393cc1.chunk.js.map