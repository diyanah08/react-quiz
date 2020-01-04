(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{11:function(e,t,a){},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5f39ad2e.jpg"},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),i=(a(29),a(17)),l=a(18),o=a(22),u=a(19),m=a(23),d=(a(30),a(1)),b=a(7);function h(){var e=r.a.useState(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return r.a.createElement("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{class:"navbar-brand"},r.a.createElement("img",{src:a(31),width:"35px",height:"18px"})," FUN MATHS",r.a.createElement("div",{onClick:function(){c(!n)},role:"button",className:"navbar-burger burger ".concat(n?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(n?"is-active":"")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/react-quiz",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/react-quiz/numbers-to-1000",className:"nav-link"},"Numbers to 1000")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/react-quiz/addition-and-subtraction",className:"nav-link"},"Addition and Subtraction")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/react-quiz/multiplication-and-division",className:"nav-link"},"Multiplication and Division")))))}function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome!"),r.a.createElement("h2",null,"Revise what you have learnt with this online quiz.",r.a.createElement("br",null),"Click each topic for the different quizes.",r.a.createElement("br",null),"Each topic has 10 multiple choice questions.",r.a.createElement("br",null),"Remember!",r.a.createElement("br",null),"Do not rush through the questions and do your best!"))}function w(){return r.a.createElement("h2",null,"Read each question carefully. Select your answer and click on the Confirm button to go to the next question. At the end of the quiz, you will see which questions you got correct and which you got wrong. Restart the quiz to try to answer all the questions correctly.")}function v(e){return r.a.createElement("h3",null,"Question ",e.current," of ",e.total)}function f(e){return r.a.createElement("h1",null,e.question)}function _(e){var t=["answer"];return e.selected&&t.push("selected"),r.a.createElement("button",{value:e.options,className:t.join(" "),onClick:e.handleClick},r.a.createElement("span",{className:"options"},e.options,".")," ",e.answer)}function p(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{options:"a",answer:e.question.answer_a,handleClick:e.handleClick,selected:"a"===e.currentAnswer}),r.a.createElement(_,{options:"b",answer:e.question.answer_b,handleClick:e.handleClick,selected:"b"===e.currentAnswer}),r.a.createElement(_,{options:"c",answer:e.question.answer_c,handleClick:e.handleClick,selected:"c"===e.currentAnswer}),r.a.createElement(_,{options:"d",answer:e.question.answer_d,handleClick:e.handleClick,selected:"d"===e.currentAnswer}))}var q=[{id:1,question:"What is 1 thousands, 3 hundreds, 2 tens and 9 ones?",answer_a:"1239",answer_b:"1329",answer_c:"1932",answer_d:"2913",correct_answer:"b"},{id:2,question:"What is the value of the number 5 in 6859",answer_a:"5",answer_b:"500",answer_c:"50",answer_d:"5000",correct_answer:"c"},{id:3,question:"What is five thousand, six hundred and thrity-five in numbers?",answer_a:"5635",answer_b:"535",answer_c:"5630",answer_d:"5431",correct_answer:"a"}];a(11);var j=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)([]),m=Object(d.a)(u,2),b=m[0],h=m[1],E=Object(n.useState)(""),_=Object(d.a)(E,2),j=_[0],N=_[1],k=Object(n.useState)(!1),O=Object(d.a)(k,2),C=O[0],g=O[1],S=q[a];return C?r.a.createElement("div",{className:"container results"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,b.map((function(e){var t=q.find((function(t){return t.id===e.questionId}));return r.a.createElement("div",{key:t.id}," ",t.question," - ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",{className:"correct"},"Correct"):r.a.createElement("span",{className:"incorrect"},"Incorrect")}(t,e))}))),r.a.createElement("button",{className:"submit",onClick:function(){h([]),o(""),c(0),g(!1)}},"Restart Quiz")):r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(v,{total:q.length,current:a+1}),r.a.createElement(f,{question:S.question}),r.a.createElement(p,{question:S,currentAnswer:l,handleClick:function(e){o(e.target.value),N("")}}),function(){if(j)return r.a.createElement("div",{className:"error"},j)}(),r.a.createElement("button",{className:"submit",onClick:function(){var e={questionId:S.id,answer:l};l?(b.push(e),h(b),o(""),a+1<q.length?c(a+1):g(!0)):N("You didn't click an answer!")}},"Confirm"))},N=[{id:1,question:"What is 1000 + 3456?",answer_a:"1 3456",answer_b:"4456",answer_c:"3556",answer_d:"3566",correct_answer:"b"},{id:2,question:"What is 5793 +  4016 ?",answer_a:"9809",answer_b:"8099",answer_c:"8899",answer_d:"1779",correct_answer:"a"},{id:3,question:"What is 5050 - 15?",answer_a:"0",answer_b:"5065",answer_c:"4900",answer_d:"5035",correct_answer:"d"}];var k=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)([]),m=Object(d.a)(u,2),b=m[0],h=m[1],E=Object(n.useState)(""),_=Object(d.a)(E,2),q=_[0],j=_[1],k=Object(n.useState)(!1),O=Object(d.a)(k,2),C=O[0],g=O[1],S=N[a];return C?r.a.createElement("div",{className:"container results"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,b.map((function(e){var t=N.find((function(t){return t.id===e.questionId}));return r.a.createElement("div",{key:t.id}," ",t.question," - ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",{className:"correct"},"Correct"):r.a.createElement("span",{className:"incorrect"},"Incorrect")}(t,e))}))),r.a.createElement("button",{className:"submit",onClick:function(){h([]),o(""),c(0),g(!1)}},"Restart Quiz")):r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(v,{total:N.length,current:a+1}),r.a.createElement(f,{question:S.question}),r.a.createElement(p,{question:S,currentAnswer:l,handleClick:function(e){o(e.target.value),j("")}}),function(){if(q)return r.a.createElement("div",{className:"error"},q)}(),r.a.createElement("button",{className:"submit",onClick:function(){var e={questionId:S.id,answer:l};l?(b.push(e),h(b),o(""),a+1<N.length?c(a+1):g(!0)):j("You didn't click an answer!")}},"Confirm"))},O=[{id:1,question:"What is 1 x 1?",answer_a:"5",answer_b:"1",answer_c:"0",answer_d:"None of the above",correct_answer:"b"},{id:2,question:"Complete the equation:  5 _ 6 = 30",answer_a:"+",answer_b:"-",answer_c:"x",answer_d:"/",correct_answer:"c"},{id:3,question:"What is 50 / 10?",answer_a:"40",answer_b:"20",answer_c:"60",answer_d:"5",correct_answer:"d"}];var C=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),l=i[0],o=i[1],u=Object(n.useState)([]),m=Object(d.a)(u,2),b=m[0],h=m[1],E=Object(n.useState)(""),_=Object(d.a)(E,2),q=_[0],j=_[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),C=k[0],g=k[1],S=O[a];return C?r.a.createElement("div",{className:"container results"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,b.map((function(e){var t=O.find((function(t){return t.id===e.questionId}));return r.a.createElement("div",{key:t.id}," ",t.question," - ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",{className:"correct"},"Correct"):r.a.createElement("span",{className:"incorrect"},"Incorrect")}(t,e))}))),r.a.createElement("button",{className:"submit",onClick:function(){h([]),o(""),c(0),g(!1)}},"Restart Quiz")):r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(v,{total:O.length,current:a+1}),r.a.createElement(f,{question:S.question}),r.a.createElement(p,{question:S,currentAnswer:l,handleClick:function(e){o(e.target.value),j("")}}),function(){if(q)return r.a.createElement("div",{className:"error"},q)}(),r.a.createElement("button",{className:"submit",onClick:function(){var e={questionId:S.id,answer:l};l?(b.push(e),h(b),o(""),a+1<O.length?c(a+1):g(!0)):j("You didn't click an answer!")}},"Confirm"))},g=a(6),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b.a,null,r.a.createElement(h,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/numbers-to-1000"},r.a.createElement(j,null)),r.a.createElement(g.a,{path:"/addition-and-subtraction"},r.a.createElement(k,null)),r.a.createElement(g.a,{path:"/multiplication-and-division"},r.a.createElement(C,null)),r.a.createElement(g.a,{path:"/"},r.a.createElement(E,null)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.14a4276b.chunk.js.map