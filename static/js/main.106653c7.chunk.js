(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(t,e,o){t.exports={item:"TodoItem_item__2olry",checkbox:"TodoItem_checkbox__3UTxr"}},33:function(t,e,o){},34:function(t,e,o){},35:function(t,e,o){},44:function(t,e,o){},45:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),a=o(25),i=o.n(a),r=o(27),s=o(14),d=o(4),l=o(5),j=o(7),h=o(6),u=o(0),b=function(){return Object(u.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(u.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},p=o(13);c.a.Component;var O=function(t){var e=t.todosProp.filter((function(t){return!0===t.completed}));return Object(u.jsxs)("p",{children:[e.length,"/",t.todosProp.length," Todos erledigt"]})},x=o(20),m=o(17),f=o.n(m),g=(n.Component,function(t){return Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsx)("input",{className:f.a.checkbox,type:"checkbox",checked:t.completed,onChange:function(){t.handleChangeProp(t.id)}}),Object(u.jsx)("div",{style:{display:"inline-block"},onDoubleClick:function(){console.log("edit mode activated")},children:Object(u.jsx)("span",{style:t.completed?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:t.children})}),Object(u.jsx)("button",{onClick:function(){t.delTodoProp(t.id)},children:Object(u.jsx)(x.b,{style:{color:"orangered",fontSize:"16px"}})})]})}),v=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return console.log(this.props),Object(u.jsx)("ul",{children:this.props.todosProp.map((function(e){return Object(u.jsx)(g,{id:e.id,completed:e.completed,handleChangeProp:t.props.handleChangeProp,delTodoProp:t.props.delTodoProp,children:e.title},e.id)}))})}}]),o}(c.a.Component),C=o(19);o(33);n.Component;var y=function(t){var e=Object(n.useState)(""),o=Object(p.a)(e,2),c=o[0],a=o[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c),""!==c.trim()?(t.addTodoProp(c.trim()),a("")):alert("Bitte Item reinschreiben!")},className:"form-container",children:[Object(u.jsx)("input",{type:"text",name:"title",placeholder:"Add Todo...",value:c,onChange:function(t){a(t.target.value)},className:"input-text"}),Object(u.jsx)("button",{className:"input-submit",children:Object(u.jsx)(x.a,{color:"darkcyan",size:"20px"})})]})})},k=(n.Component,o(47)),T=(o(34),c.a.Component,o(2)),N=function(){return Object(u.jsx)("div",{children:"Hello from about page"})},S=function(){return Object(u.jsx)("h2",{children:"No Match for this page"})},P=o(11),D=(o(35),function(){var t="active-menu-item";return Object(u.jsx)("nav",{className:"topNav",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(P.b,{activeClassName:t,to:"/",exact:!0,children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.b,{activeClassName:t,to:"/about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.b,{activeClassName:t,to:"/contact",children:"Contact"})})]})})}),I=function(){return Object(u.jsx)("p",{children:"Hello from Contact"})},J=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(){var t;return Object(d.a)(this,o),(t=e.call(this)).handleChange=function(e){console.log("checkbox clicked:",e),t.setState({todos:t.state.todos.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}))})},t.addTodo=function(e){console.log(e);var o={id:Object(k.a)(),title:e,completed:!1};t.setState({todos:[o].concat(Object(r.a)(t.state.todos))})},t.delTodo=function(e){var o=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:o})},t.state={todos:[]},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){console.log("%c ComponentDidMount aus TodoContainer ausgef\xfchrt","background: #bada55");var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("%c componentDidUpdate aus TodoContainer asugef\xfchrt","background: #bada55"),JSON.stringify(e.todos)!==JSON.stringify(this.state.todos)&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{}),Object(u.jsxs)(T.c,{children:[Object(u.jsx)(T.a,{path:"/",exact:!0,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)(b,{}),Object(u.jsx)(y,{addTodoProp:this.addTodo}),Object(u.jsx)(v,{todosProp:this.state.todos,handleChangeProp:this.handleChange,delTodoProp:this.delTodo}),Object(u.jsx)(O,{todosProp:this.state.todos})]})})}),Object(u.jsx)(T.a,{path:"/about",children:Object(u.jsx)(N,{})}),Object(u.jsx)(T.a,{path:"/about",children:Object(u.jsx)(N,{})}),Object(u.jsx)(T.a,{path:"/contact",children:Object(u.jsx)(I,{})}),Object(u.jsx)(T.a,{path:"*",children:Object(u.jsx)(S,{})})]})]})}}]),o}(c.a.Component);o(44);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P.a,{children:Object(u.jsx)(J,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.106653c7.chunk.js.map