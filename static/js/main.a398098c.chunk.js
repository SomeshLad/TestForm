(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(13),a=n.n(i),o=(n(19),n(4)),r=n(14),l=n.n(r),j=n(0),b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(),a=Object(o.a)(i,2),r=a[0],b=a[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"form-container",children:Object(j.jsx)("p",{children:"Register Here"})}),Object(j.jsxs)("form",{className:"fields",onSubmit:function(e){e.preventDefault();var t={name:n,phoneNo:r};l.a.post("https://cloudservertest.herokuapp.com/data",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(j.jsxs)("div",{className:"Name",children:[Object(j.jsx)("label",{id:"nameId",children:"Name:"}),Object(j.jsx)("input",{id:"nameIn",type:"text",onChange:function(e){s(e.target.value),console.log("Name:"+n)},required:!0})]}),Object(j.jsxs)("div",{className:"Mobile",children:[Object(j.jsx)("br",{}),Object(j.jsx)("label",{id:"mobId",children:"Mobile No:"}),Object(j.jsx)("input",{type:"tel",pattern:"[0-9]{10}",onChange:function(e){b(e.target.value),console.log("Mobile:"+r)},required:!0})]}),Object(j.jsx)("input",{type:"submit",value:"Submit",id:"submitbtn"})]})]})};var u=function(){return Object(j.jsx)(b,{})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a398098c.chunk.js.map