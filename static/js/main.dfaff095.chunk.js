(window["webpackJsonpzip-search"]=window["webpackJsonpzip-search"]||[]).push([[0],{229:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(78),c=a.n(l),r=(a(89),a(79)),i=a(80),s=a(82),u=a(81),d=a(83),p=(a(90),a(91),a(92),function(e){var t=e.zipCodeUrl;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"output"},o.a.createElement("header",{className:"output-header"},e.LocationText," "),o.a.createElement("div",{className:"unordered-items"},o.a.createElement("ul",null,o.a.createElement("li",null,"State: ",e.State),o.a.createElement("li",null,"Location: (",e.Lat,",",e.Long,")"),o.a.createElement("li",null,"Population(Estimated): ",e.EstimatedPopulation),o.a.createElement("li",null,"Total Wages: ",e.TotalWages)))))})))}),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={zipcodeValue:"",zipCodeUrl:[]},a.onChangeHandler=function(e){a.setState({zipcodeValue:e.target.value})},a.onKeyPresshandler=function(){var e="http://ctp-zip-api.herokuapp.com/zip/".concat(a.state.zipcodeValue);fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({zipcodeValue:"",zipCodeUrl:e})})).catch(console.log)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("h2",null,"Zip Code Search")),o.a.createElement("div",{className:"container-zipcode"},o.a.createElement("div",{className:"inlineZipCode"},o.a.createElement("h5",null,"Zip Code: "),o.a.createElement("input",{value:this.state.zipcodeValue,onChange:this.onChangeHandler,onKeyPress:this.onKeyPresshandler}))),o.a.createElement(p,{zipCodeUrl:this.state.zipCodeUrl}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(229)},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},91:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.dfaff095.chunk.js.map