(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(50)},26:function(e,t,n){},27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),i=n.n(l),c=(n(26),n(1)),s=n(2),r=n(4),d=n(3),m=n(6),u=n(5),h=(n(27),n(7)),p=n.n(h),f=n(19),g=n.n(f),v=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{height:"1000px",width:"1000px"}},o.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyCLXUeNBnr-U_526lUfTfpPFg6Y6h9ogg4"},defaultCenter:{lat:this.props.lat,lng:this.props.lng},defaultZoom:14}))}}]),t}(a.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).state={lat:0,lng:0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return p.a.setApiKey("AIzaSyCLXUeNBnr-U_526lUfTfpPFg6Y6h9ogg4"),p.a.enableDebug(),p.a.fromAddress(this.props.place).then(function(t){var n=t.results[0].geometry.location,a=n.lat,o=n.lng;e.setState({lat:a,lng:o})},function(e){console.error(e)}),console.log(this.state.lat,this.state.lng),o.a.createElement("div",{className:"grid"},o.a.createElement(v,{lat:this.state.lat,lng:this.state.lng}))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={condition:0,list:[]},n.sameName=n.sameName.bind(Object(m.a)(n)),n.diffloc=n.diffloc.bind(Object(m.a)(n)),n.handleUploadImage=n.handleUploadImage.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleUploadImage",value:function(e){var t=this;e.preventDefault();var n=new FormData;n.append("file",this.uploadInput.files[0]),fetch("https://find-locations.herokuapp.com/upload",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({list:e.list,condition:e.condition})}).catch(function(e){console.log(e)})}},{key:"diffloc",value:function(e){var t=this;e.preventDefault();var n={name:(e=document.getElementById("myselects")).options[e.selectedIndex].text};fetch("https://find-locations.herokuapp.com/upload/diffloc",{method:"POST",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({list:e.list,condition:e.condition})}).catch(function(e){console.log(e)})}},{key:"sameName",value:function(){var e=document.getElementById("myselect"),t=e.options[e.selectedIndex].text;document.getElementById("samename").innerHTML="";var n=document.createElement("h1"),a=document.createTextNode("You live in "+this.state.list[this.state.list.length-1]+", "+t);n.appendChild(a),document.getElementById("samename").appendChild(n)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row heading"},o.a.createElement("h1",null," Location Finder ")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("form",{onSubmit:this.handleUploadImage},o.a.createElement("input",{ref:function(t){e.uploadInput=t},type:"file"}),o.a.createElement("button",{type:"submit"},"Upload"))),1==this.state.condition&&o.a.createElement("div",{className:"row heading2"},o.a.createElement("h1",null,"You live in ",this.state.list[0]," and in the state"," ",this.state.list[1]," "),o.a.createElement("div",{className:"marked"},o.a.createElement(b,{place:this.state.list[0]}))),2==this.state.condition&&o.a.createElement("div",{className:"row heading2",id:"samename"},o.a.createElement("h1",null,"Which state among the following do you live in?"),o.a.createElement("form",{id:"mine"},o.a.createElement("select",{id:"myselect"},o.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},"Choose here"),o.a.createElement("option",{value:"1"},this.state.list[0]),o.a.createElement("option",{value:"2"},this.state.list[1])),o.a.createElement("button",{type:"button",onClick:this.sameName},"Submit"))),3==this.state.condition&&o.a.createElement("div",{className:"heading2"},o.a.createElement("h1",null,"I got two locations"),o.a.createElement("p",null,"Where do you live among these?"),o.a.createElement("form",null,o.a.createElement("select",{id:"myselects"},o.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},"Choose here"),o.a.createElement("option",{value:"1"},this.state.list[0]),o.a.createElement("option",{value:"2"},this.state.list[1])),o.a.createElement("button",{type:"button",onClick:this.diffloc},"Submit"))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.9bee0daf.chunk.js.map