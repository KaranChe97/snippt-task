(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),u=a.n(i),r=(a(18),a(1)),c=a(2),o=a(4),s=a(3),m=a(5),d=a(8),b=a(11),h=(a(7),a(24)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleMultiValue=a.props.handleMultiValue,a.onChangeHandler=function(e){a.setState({multiValue:e.value},a.handleMultiValue(a.state.multiValue))},a.sportsData=["Badminton","Basketball","Cricket","Football","Golf","Gymnastics","Hockey","Rugby","Snooker","Tennis"],a.state={multiValue:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"mtselement"},l.a.createElement(h.a,{name:"multiValue",value:this.state.multiValue,dataSource:this.sportsData,allowCustomValue:!0,placeholder:"Select Multiple Values",change:this.onChangeHandler}))}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleMultiValue=function(e){e=["Not Selected"].concat(Object(d.a)(e)),a.setState({multiValue:e})},a.addColumn=function(){a.props.addHeaders(a.state),a.setState(a.intialState)},a.submitColumn=function(){a.props.submitHeader()},a.intialState={colType:"date",colName:"",multiValue:""},a.state=a.intialState,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null," Create Column"),l.a.createElement("form",null,l.a.createElement("label",null,"Column Name: "),l.a.createElement("input",{type:"text",name:"colName",value:this.state.colName,placeholder:"Column Name",onChange:this.handleChange}),l.a.createElement("label",{id:"colHeader"},"Column Type: "),l.a.createElement("select",{value:this.state.type,name:"colType",onChange:this.handleChange},l.a.createElement("option",{defaultValue:!0,value:"date"},"Date"),l.a.createElement("option",{value:"number"},"Number"),l.a.createElement("option",{value:"multiSelect"},"Multiselect")),"multiSelect"===this.state.colType?l.a.createElement(p,{handleMultiValue:this.handleMultiValue}):null,l.a.createElement("br",null),l.a.createElement("input",{type:"button",id:"addColumnBtn",value:"Add Column",onClick:this.addColumn}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",id:"submitColumnBtn",value:"Submit Columns",onClick:this.submitColumn})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState({localdata:e.target.value},a.sendData)},a.sendData=function(){a.state.writeData(a.state.a1,a.state.a2,a.state.localdata)},a.state={colType:e.colType,multiValue:e.multiValue,a1:e.key1,a2:e.key2,writeData:e.writeData},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"multiSelect"===this.state.colType?l.a.createElement("td",null,l.a.createElement("select",{id:"fooSelect",onChange:this.handleChange},this.state.multiValue.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))):l.a.createElement("td",null,l.a.createElement("input",{type:this.state.colType,placeholder:this.state.colType,onChange:this.handleChange}))}}]),t}(n.Component),D=function(e){return e.tableData.map(function(e,t){return l.a.createElement("thead",{key:t},l.a.createElement("tr",null,l.a.createElement("th",{id:"theader"},e.colName.toUpperCase())))})},y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).editableDataLocal=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],a.writeData=function(e,t,n){a.editableDataLocal[e][t]=n},a.submitTable=function(){a.setState({enteredData:a.editableDataLocal},a.displayTable)},a.displayTable=function(){a.state.submitData(a.state.enteredData)},a.state={tableData:e.tableData,editableData:e.editableData,enteredData:[],submitData:e.submitData},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("table",{id:"editTable"},l.a.createElement(D,{tableData:this.state.tableData}),l.a.createElement("tbody",null,this.state.editableData.map(function(t,a){return l.a.createElement("tr",{key:a},e.state.tableData.map(function(t,n){return l.a.createElement(f,{key:n,key1:a,key2:n,colType:t.colType,multiValue:t.multiValue,writeData:e.writeData})}))}))),l.a.createElement("br",null),l.a.createElement("input",{type:"button",id:"submitTableBtn",value:"Submit Table",onClick:this.submitTable}),l.a.createElement("br",null))}}]),t}(n.Component),v=function(e){return e.finalData.map(function(e,t){return l.a.createElement("tr",{key:t},e.map(function(e,t){return l.a.createElement("td",{id:"showTableTd",key:t}," ",e," ")}))})},C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={tableData:[],isSubmitted:!1,isDataSubmitted:!1,editableData:[{0:""},{1:""},{2:""},{3:""},{4:""},{5:""},{6:""},{7:""},{8:""},{9:""},{10:""},{11:""},{12:""},{13:""},{14:""},{15:""},{16:""},{17:""},{18:""},{19:""}],enteredData:[]},a.addHeaders=function(e){a.setState({tableData:[].concat(Object(d.a)(a.state.tableData),[e])})},a.submitHeader=function(){a.setState({isSubmitted:!0})},a.submitData=function(e){a.setState({enteredData:e,isDataSubmitted:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{addHeaders:this.addHeaders,submitHeader:this.submitHeader}),l.a.createElement("br",null),l.a.createElement("div",{id:"breaker"}),this.state.isSubmitted?l.a.createElement("div",null,l.a.createElement(y,{tableData:this.state.tableData,editableData:this.state.editableData,submitData:this.submitData})):null,l.a.createElement("br",null),this.state.isDataSubmitted?l.a.createElement("div",{id:"breakerUp"},l.a.createElement("table",{id:"showTable"},l.a.createElement(D,{tableData:this.state.tableData}),l.a.createElement("tbody",null,l.a.createElement(v,{finalData:this.state.enteredData})))):null)}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{id:"snippt"}," Snippt-Task :  Table Creator  "),l.a.createElement("div",{id:"breaker"}),l.a.createElement("br",null),l.a.createElement(C,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.17a66909.chunk.js.map