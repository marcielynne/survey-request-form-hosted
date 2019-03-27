(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=a(16),s=a(1),i=a(2),u=a(4),p=a(3),m=a(5),d=a(13),h=a(12),j=function(){return r.a.createElement("div",{className:"main-nav"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"item",id:"item-1"},r.a.createElement(d.b,{exact:!0,to:"/"},"Main")),r.a.createElement("li",{className:"item",id:"item-2"},r.a.createElement(d.b,{to:"/projects"},"Projects")),r.a.createElement("li",{className:"logo"},r.a.createElement("img",{src:"img/3d-logo.png",alt:"Company Logo",id:"image"})),r.a.createElement("li",{className:"item",id:"item-3"},r.a.createElement(d.b,{to:"/search"},"Search")),r.a.createElement("li",{className:"item",id:"item-4"},r.a.createElement(d.b,{to:"/time"},"Time"))))},E=a(15),b=a(26),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null}},{key:"componentWillMount",value:function(){this.viewPoint()}},{key:"viewPoint",value:function(){var e=this;Object(E.b)(["esri/layers/GraphicsLayer","esri/Graphic","esri/geometry/Point","esri/PopupTemplate"]).then(function(t){var a=Object(b.a)(t,4),n=a[0],r=a[1],l=a[2],o=a[3],c=new n;e.props.view.on("click",function(e){var t=new l({longitude:e.mapPoint.longitude,latitude:e.mapPoint.latitude}),a=new o({title:"<b>Location</b>",content:"X Lon: "+e.mapPoint.longitude+"<br>Y Lat: "+e.mapPoint.latitude}),n=new r({geometry:t,symbol:{type:"simple-marker",size:10,color:[128,0,0,.9],outline:{color:[255,0,0,1],width:1}},popupTemplate:a});c.add(n);var s=document.getElementById("projectLon"),i=document.getElementById("projectLat");s.value=e.mapPoint.longitude.toString(),i.value=e.mapPoint.latitude.toString()}),e.props.view.on("click",function(){c.removeAll()}),document.getElementById("btnSubmit").addEventListener("click",function(){c.removeAll()}),e.props.map.add(c)}).catch(function(e){return console.error(e)})}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleMapLoad=function(e,t){a.setState({map:e,view:t})},a.handleClick=function(e){a.setState({lonClick:e.mapPoint.longitude,latClick:e.mapPoint.latitude})},a.state={map:null,view:null,lonClick:"",latClick:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement(E.a,{mapProperties:{basemap:"hybrid"},viewProperties:{center:[-95,40],zoom:4},onLoad:this.handleMapLoad,onClick:this.handleClick},n.createElement(v,{lonClick:this.state.lonClick,latClick:this.state.latClick}))}}]),t}(n.Component),g=a(7),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:this.props.singleRow.vendorImage,alt:"vendor",id:"vendorImage"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"resultsTitle"},"Vendor Information"),r.a.createElement("ul",null,r.a.createElement("li",null,"Vendor: ",this.props.singleRow.projectVendor),r.a.createElement("li",null,"Species: ",this.props.singleRow.vendorSpecies),r.a.createElement("li",null,"Home: ",this.props.singleRow.vendorHouse),r.a.createElement("li",null,"Ancestry: ",this.props.singleRow.vendorAncestry)),r.a.createElement("label",{id:"resultsTitle"},"Project Information"),r.a.createElement("ul",null,r.a.createElement("li",null,"Project Name: ",this.props.singleRow.projectName),r.a.createElement("li",null,"SRID: ",this.props.singleRow.projectSRID),r.a.createElement("li",null,"Bill Num Type: ",this.props.singleRow.projectBillNumType),r.a.createElement("li",null,"Bill Num Value: ",this.props.singleRow.projectBillNumValue),r.a.createElement("li",null,"Date Requested: ",this.props.singleRow.projectDateReq),r.a.createElement("li",null,"Asset Area: ",this.props.singleRow.projectAssetArea),r.a.createElement("li",null,"Project Type: ",this.props.singleRow.projectType),r.a.createElement("li",null,"Latitude: ",this.props.singleRow.projectLat),r.a.createElement("li",null,"Longitude: ",this.props.singleRow.projectLon)))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState({singleRow:e,showValues:!0})},a.state={showValues:!1,singleRow:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{id:"resultsTable",name:"resultsTable",summary:"Table of search results."},r.a.createElement("thead",{id:"thead"}),r.a.createElement("tbody",{id:"tbody"},r.a.createElement("tr",null,r.a.createElement("th",null,"Project Name"),r.a.createElement("th",null,"SRID"),r.a.createElement("th",null,"Billing Number")),this.props.searchResults.map(function(t,a){return r.a.createElement("tr",{key:a.toString(),value:a,onClick:function(){return e.handleChange(t)}},r.a.createElement("td",null,t.projectName),r.a.createElement("td",null,t.projectSRID),r.a.createElement("td",null,t.projectBillNumType),r.a.createElement("td",{style:{display:"none"}},t.projectBillNumValue),r.a.createElement("td",{style:{display:"none"}},t.projectVendor),r.a.createElement("td",{style:{display:"none"}},t.projectDateReq),r.a.createElement("td",{style:{display:"none"}},t.projectAssetArea),r.a.createElement("td",{style:{display:"none"}},t.projectType),r.a.createElement("td",{style:{display:"none"}},t.projectLon),r.a.createElement("td",{style:{display:"none"}},t.projectLat),r.a.createElement("td",{style:{display:"none"}},t.vendorImage))}))),r.a.createElement("br",null),r.a.createElement("button",{className:"button",id:"btnClear",type:"button",onClick:this.props.clearValues},"Clear"),r.a.createElement("br",null),r.a.createElement("br",null),this.state.showValues?r.a.createElement(f,{singleRow:this.state.singleRow}):null)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.compareObjects=function(e,t){var a="";for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(e[a]!==t[a])return!1;return!0},a.itemExists=function(e,t){for(var n=0;n<e.length;n++)if(a.compareObjects(e[n],t))return!0;return!1},a.updateSearchResults=function(e){a.setState(function(t){return{searchResults:[].concat(Object(c.a)(t.searchResults),[a.props.surveyRequests[e]])}})},a.searchValues=function(e){var t,n=e.target,r=n.name,l=n.value;a.setState((t={},Object(g.a)(t,r,l),Object(g.a)(t,"searchResults",[]),t));var o=a.state.searchValue.toUpperCase();if(0!==o.length)for(var c=0;c<a.props.surveyRequests.length;c++)for(var s in a.props.surveyRequests[c])-1!==a.props.surveyRequests[c][s].indexOf(o)&&(a.itemExists(a.state.searchResults,a.props.surveyRequests[c])||a.updateSearchResults(c))},a.displayValues=function(){if(a.state.searchResults.length>0)a.setState({showValues:!0});else{alert("No results found"),a.setState({searchValue:""})}},a.clearValues=function(){a.setState({projectName:"",projectSRID:"",projectBillNumType:"",projectBillNumValue:"",projectVendor:"",projectDateReq:"",projectAssetArea:"",projectType:"",projectLon:"",projectLat:"",searchValue:"",vendorImage:"",searchResults:[],showValues:!1})},a.state={searchValue:"",searchResults:[],showValues:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-display-flex"},r.a.createElement("h2",{id:"existingRequests"},"Search Existing Requests"),r.a.createElement("label",{htmlFor:"searchValue"},"Value:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"searchValue",name:"searchValue",value:this.state.searchValue,onChange:this.searchValues}),r.a.createElement("br",null),r.a.createElement("button",{className:"button",id:"btnSearch",type:"button",onClick:this.displayValues},"Search"),this.state.showValues?r.a.createElement(R,{searchResults:this.state.searchResults,clearValues:this.clearValues}):null)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).fetchData=function(e){return fetch(e).then(a.checkStatus).then(function(e){return e.json()}).catch(function(e){return console.log("Looks like there was a problem!",e)})},a.checkStatus=function(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))},a.onSelect=function(e){var t,n=e.target.options.selectedIndex,r=e.target,l=r.name,o=r.value;a.setState((t={},Object(g.a)(t,l,o),Object(g.a)(t,"vendorImage",e.target.options[n].getAttribute("data-key")),Object(g.a)(t,"vendorName",e.target.options[n].getAttribute("vendor-name")),Object(g.a)(t,"vendorSpecies",e.target.options[n].getAttribute("species")),Object(g.a)(t,"vendorHouse",e.target.options[n].getAttribute("house")),Object(g.a)(t,"vendorAncestry",e.target.options[n].getAttribute("ancestry")),t))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleChangeLatLon=function(e){e.preventDefault(),""===a.inputLon.current.value?(alert("Please choose a point on the map first."),a.inputLon.current.focus()):a.setState({projectLon:a.inputLon.current.value,projectLat:a.inputLat.current.value})},a.handleAddNew=function(e){var t=a.state.projectDateReq,n=t.split("/"),r=parseInt(n[1],10),l=parseInt(n[0],10),o=parseInt(n[2],10);if(""===a.state.projectName||""===a.state.projectSRID||""===a.state.projectBillNumType||""===a.state.projectBillNumValue||""===a.state.projectVendor||""===a.state.projectDateReq||""===a.state.projectAssetArea||""===a.state.projectType||""===a.state.projectLon||""===a.state.projectLat)alert("Oops, looks like you missed some fields.");else if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)||o<1900||o>2100||0===l||l>12||r<=0||r>31)alert("Date is not in the correct format or the value is wrong.");else{e.preventDefault();var c={projectName:a.state.projectName.toUpperCase(),projectSRID:a.state.projectSRID,projectBillNumType:a.state.projectBillNumType.toUpperCase(),projectBillNumValue:a.state.projectBillNumValue,projectVendor:a.state.projectVendor.toUpperCase(),projectDateReq:a.state.projectDateReq,projectAssetArea:a.state.projectAssetArea.toUpperCase(),projectType:a.state.projectType.toUpperCase(),projectLon:a.state.projectLon,projectLat:a.state.projectLat,vendorImage:a.state.vendorImage,vendorName:a.state.vendorName,vendorSpecies:a.state.vendorSpecies,vendorHouse:a.state.vendorHouse,vendorAncestry:a.state.vendorAncestry};a.props.myFunction(c);alert("Yay! You added a thing!"),a.inputLon.current.value="",a.inputLat.current.value="",a.setState({projectName:"",projectSRID:"",projectBillNumType:"",projectBillNumValue:"",projectVendor:"",projectDateReq:"",projectAssetArea:"",projectType:"",projectLon:"",projectLat:"",vendorImage:"",vendorName:"",vendorSpecies:"",vendorHouse:"",vendorAncestry:""})}},a.inputLat=r.a.createRef(),a.inputLon=r.a.createRef(),a.state={projectName:"",projectSRID:"",projectBillNumType:"",projectBillNumValue:"",projectVendor:"",projectDateReq:"",projectAssetArea:"",projectType:"",projectLon:"",projectLat:"",assetAreas:[],vendorNames:[],projectTypes:[],billNumTypes:[],vendorImage:"",vendorName:"",vendorSpecies:"",vendorHouse:"",vendorAncestry:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.fetchData("https://swapi.co/api/planets/"),this.fetchData("https://hp-api.herokuapp.com/api/characters"),this.fetchData("https://swapi.co/api/people/"),this.fetchData("https://api.openbrewerydb.org/breweries")]).then(function(t){var a=t[0].results.map(function(e){return r.a.createElement("option",{key:e.url},e.name)}),n=t[1].map(function(t){return r.a.createElement("option",{key:t.image,"data-key":t.image,"vendor-name":t.name,species:t.species,house:t.house,ancestry:t.ancestry,onClick:e.onSelect},t.name)}),l=t[2].results.map(function(e){return r.a.createElement("option",{key:e.url},e.name)}),o=t[3].map(function(e){return r.a.createElement("option",{key:e.website_url},e.name)});e.setState({assetAreas:a,vendorNames:n,projectTypes:l,billNumTypes:o})})}},{key:"render",value:function(){return r.a.createElement("form",{className:"fieldset",name:"inputForm"},r.a.createElement("div",{className:"form-flex"},r.a.createElement("h2",{id:"newRequests"},"Enter New Survey Request"),r.a.createElement("label",{htmlFor:"projectName"},"Project Name:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectName",name:"projectName",onChange:this.handleChange,value:this.state.projectName,onFocus:this.handleChangeLatLon}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectSRID"},"SRID:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectSRID",name:"projectSRID",onChange:this.handleChange,value:this.state.projectSRID}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectBillNumType"},"Bill Number Type:"),r.a.createElement("br",null),r.a.createElement("select",{id:"projectBillNumType",name:"projectBillNumType",onChange:this.handleChange,value:this.state.projectBillNumType},r.a.createElement("option",{style:{display:"none"}}),this.state.billNumTypes),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectBillNumValue"},"Bill Number Value:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectBillNumValue",name:"projectBillNumValue",onChange:this.handleChange,value:this.state.projectBillNumValue}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectVendor"},"Vendor:"),r.a.createElement("br",null),r.a.createElement("select",{id:"projectVendor",name:"projectVendor",onChange:this.onSelect,value:this.state.projectVendor},r.a.createElement("option",{style:{display:"none"}}),this.state.vendorNames),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectDateReq"},"Date Requested:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectDateReq",name:"projectDateReq",placeholder:"DD/MM/YYYY",onChange:this.handleChange,value:this.state.projectDateReq}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectAssetArea"},"Asset Area:"),r.a.createElement("br",null),r.a.createElement("select",{id:"projectAssetArea",name:"projectAssetArea",onChange:this.handleChange,value:this.state.projectAssetArea},r.a.createElement("option",{style:{display:"none"}}),this.state.assetAreas),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectType"},"Project Type:"),r.a.createElement("br",null),r.a.createElement("select",{id:"projectType",name:"projectType",onChange:this.handleChange,value:this.state.projectType},r.a.createElement("option",{style:{display:"none"}}),this.state.projectTypes),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectLon"},"X Longitude:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectLon",name:"projectLon",ref:this.inputLon,readOnly:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"projectLat"},"Y Latitude:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"projectLat",name:"projectLat",ref:this.inputLat,readOnly:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:"button",id:"btnSubmit",type:"button",onClick:this.handleAddNew},"Submit")),r.a.createElement(N,{surveyRequests:this.props.surveyRequests}))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"overall-flex"},r.a.createElement("div",{id:"mapDiv"},r.a.createElement(y,null),r.a.createElement("p",{className:"mapText",alt:"Form Map"},"Click on the map to add a point.")),r.a.createElement("div",null,r.a.createElement(O,{surveyRequests:this.props.surveyRequests,myFunction:this.props.myFunction}))))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"resultsList"},this.props.surveyRequests.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{id:"resultsTitle"},"Project information for: ",r.a.createElement("i",null,e.projectName)," "),r.a.createElement("br",null),r.a.createElement("img",{src:e.vendorImage,alt:"vendor",id:"vendorImage"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Vendor: ",e.projectVendor),r.a.createElement("li",null,"Species: ",e.vendorSpecies),r.a.createElement("li",null,"House: ",e.vendorHouse),r.a.createElement("li",null,"Ancestry: ",e.vendorAncestry),r.a.createElement("li",null,"Project Name: ",e.projectName),r.a.createElement("li",null,"SRID: ",e.projectSRID),r.a.createElement("li",null,"Bill Num Type: ",e.projectBillNumType),r.a.createElement("li",null,"Bill Num Value: ",e.projectBillNumValue),r.a.createElement("li",null,"Date Requested: ",e.projectDateReq),r.a.createElement("li",null,"Asset Area: ",e.projectAssetArea),r.a.createElement("li",null,"Project Type: ",e.projectType),r.a.createElement("li",null,"Latitude: ",e.projectLat),r.a.createElement("li",null,"Longitude: ",e.projectLon)),r.a.createElement("br",null))}))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This will be where the time magic happens.",r.a.createElement("div",null,r.a.createElement("img",{src:"https://www.placecage.com/200/300",alt:"nick cage"}))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleAddNew=function(e){a.setState(function(t){return{surveyRequests:[].concat(Object(c.a)(t.surveyRequests),[e])}},function(){return console.log(a.state.surveyRequests)})},a.state={surveyRequests:[{projectAssetArea:"YAVIN IV",projectBillNumType:"TRIM TAB BREWING",projectBillNumValue:"191",projectDateReq:"12/12/2019",projectLat:"42.05515118647973",projectLon:"-94.73632812499847",projectName:"TEST",projectSRID:"1234",projectType:"LUKE SKYWALKER",projectVendor:"DRACO MALFOY",vendorAncestry:"pure-blood",vendorHouse:"Slytherin",vendorImage:"http://hp-api.herokuapp.com/images/draco.jpg",vendorName:"Draco Malfoy",vendorSpecies:"human"}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{surveyRequests:e.state.surveyRequests,myFunction:e.handleAddNew}))}}),r.a.createElement(h.a,{path:"/projects",render:function(t){return r.a.createElement(L,Object.assign({},t,{surveyRequests:e.state.surveyRequests}))}}),r.a.createElement(h.a,{path:"/time",component:S}),r.a.createElement(h.a,{path:"/search",render:function(t){return r.a.createElement(N,Object.assign({},t,{surveyRequests:e.state.surveyRequests}))}})))}}]),t}(n.Component);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.c14eb37f.chunk.js.map