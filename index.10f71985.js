!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequire0cc4;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire0cc4=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var a,n=(a=r("8NIkP"))&&a.__esModule?a:{default:a}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n.default(e,t)};var a,n=(a=r("8NIkP"))&&a.__esModule?a:{default:a}})),r.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a;return e}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return c.default(e)||i.default(e)||u.default(e)||d.default()};var c=l(r("kMC0W")),i=l(r("7AJDX")),d=l(r("8CtQK")),u=l(r("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}function s(t){var a=t.tagName,n=t.className,r=t.attributes,c=void 0===r?{}:r,i=document.createElement(a);if(n){var d,u=n.split(" ").filter(Boolean);(d=i.classList).add.apply(d,e(o)(u))}return Object.keys(c).forEach((function(e){return i.setAttribute(e,c[e])})),i}var m=["","Name","Created","Category","Content","Dates",""],f=["","Note Category","","Active","","Archive","","",""],v={task:"Task",idea:"Idea",quote:"Quote",randomThought:"Random Thought"},p={archive:"M5.109 5.016h13.781l-0.938-1.031h-12zM12 17.484l5.484-5.484h-3.469v-2.016h-4.031v2.016h-3.469zM20.531 5.25q0.469 0.563 0.469 1.266v12.469q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-12.469q0-0.703 0.469-1.266l1.359-1.688q0.469-0.563 1.172-0.563h12q0.703 0 1.172 0.563z",edit:"M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z",delete:"M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z",grocery:"M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z",lightbulb:"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z",mind:"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z",quote:"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z",unarchive:"M5.109 5.016h13.781l-0.938-1.031h-12zM12 9.516l-5.484 5.484h3.469v2.016h4.031v-2.016h3.469zM20.531 5.203q0.469 0.563 0.469 1.313v12.469q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-12.469q0-0.75 0.469-1.313l1.359-1.641q0.469-0.563 1.172-0.563h12q0.703 0 1.172 0.563z"},g=function(){var e=s({tagName:"div",className:"headerContainer"}),t=m.map((function(e){var t=s({tagName:"p",className:"headerText"});return t.insertAdjacentHTML("beforeend",e),t.outerHTML})).join(""),a=s({tagName:"svg",className:"headerSVG",attributes:{id:"allArch",viewBox:"0 0 24 24",preserveAspectRatio:"none"}});a.insertAdjacentHTML("beforeend",'<path d="'.concat(p.archive,'"></path>'));var n=s({tagName:"svg",className:"headerSVG",attributes:{id:"allDelete",viewBox:"0 0 24 24",preserveAspectRatio:"none"}});return n.insertAdjacentHTML("beforeend",'<path d="'.concat(p.delete,'"></path>')),e.insertAdjacentHTML("beforeend",[t,a.outerHTML,n.outerHTML].join("")),e},h=function(e,t){var a=s({tagName:"svg",className:"categorySVG",attributes:{viewBox:"0 0 24 24",preserveAspectRatio:"none"}});a.insertAdjacentHTML("beforeend",'<path d="'.concat(p[e],'" id="svg').concat(t,'"></path>'));var n=s({tagName:"div",className:"categoryContainerSVG"});return n.insertAdjacentHTML("beforeend",a.outerHTML),n},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case"Task":return h("grocery",t);case"Random Thought":return h("mind",t);case"Idea":return h("lightbulb",t);case"Quote":return h("quote",t)}},y=function(){return JSON.parse(localStorage.getItem("data"))},N=function(){return y().filter((function(e){return!e.isArch})).map((function(e){return(t=e,a=t.name,n=t.createDate,r=t.category,o=t.content,c=t.expDate,i=t.id,d=function(e){switch(e){case 0:return"name";case 2:return"category";case 3:return"content";case 4:return"expDate"}},u=[a,n,r,o,c].map((function(e,t){var a=s({tagName:"p",className:"elementText ".concat(0===t?"elementText__title":""),attributes:{id:"".concat(d(t)).concat(i)}});return a.insertAdjacentHTML("beforeend",e),a.outerHTML})).join(""),l=["edit","archive","delete"].map((function(e){var t=s({tagName:"svg",className:"elementSVG",attributes:{key:e,id:i,viewBox:"0 0 24 24",preserveAspectRatio:"none"}});return t.insertAdjacentHTML("beforeend",'<path d="'.concat(p[e],'"></path>')),t.outerHTML})).join(""),m=s({tagName:"div",className:"headerContainer headerContainer__el",attributes:{id:"div".concat(i)}}),m.insertAdjacentHTML("beforeend",[b(r,i).outerHTML,u,l].join("")),m).outerHTML;var t,a,n,r,o,c,i,d,u,l,m})).join("")},M=function(e){return Object.values(v).map((function(t){return{category:t,active:e.filter((function(e){return e.category===t&&!e.isArch})).length,archive:e.filter((function(e){return e.category===t&&e.isArch})).length}}))},T=function(){return M(y()).map((function(e){return(t=e,a=t.category,n=t.active,r=t.archive,o=function(e,t){switch(t){case 0:return"".concat(e);case 2:return"".concat(e,"_active");case 4:return"".concat(e,"_archive");default:return""}},c=[a,"",n,"",r,"","",""].map((function(e,t){var n=s({tagName:"p",className:"elementText ".concat(0===t?"elementText__title":""," ").concat(r&&4===t?"activeArch":""),attributes:{id:"".concat(o(a,t))}});return n.insertAdjacentHTML("beforeend",String(e)),n.outerHTML})).join(""),i=s({tagName:"div",className:"headerContainer headerContainer__el"}),i.insertAdjacentHTML("beforeend",[b(a).outerHTML,c].join("")),i).outerHTML;var t,a,n,r,o,c,i})).join("")},q=[{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!1,id:"1"},{name:"Shopping list",createDate:"27 April, 2022",category:"Quote",content:"milk, water",expDate:"",isArch:!0,id:"2"},{name:"Shopping list",createDate:"27 April, 2022",category:"Random Thought",content:"milk, water",expDate:"",isArch:!1,id:"3"},{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!0,id:"4"},{name:"Shopping list",createDate:"27 April, 2022",category:"Quote",content:"milk, water",expDate:"",isArch:!1,id:"5"},{name:"Shopping list",createDate:"27 April, 2022",category:"Idea",content:"milk, water",expDate:"",isArch:!1,id:"6"},{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!1,id:"7"}],A=function(e){localStorage.setItem("data",JSON.stringify(e))},_=function(){var t,a=s({tagName:"p",className:"modalTitle",attributes:{id:"modalTitle"}}),n=s({tagName:"p",className:"modalText"});n.insertAdjacentHTML("beforeend","Name");var r=s({tagName:"input",className:"input inputName",attributes:{id:"inputName",name:"name"}}),c=s({tagName:"p",className:"modalText"});c.insertAdjacentHTML("beforeend","Category");var i=s({tagName:"select",className:"input selectCategory",attributes:{id:"selectCategory",name:"category"}});(t=i).append.apply(t,e(o)(["Task","Idea","Quote","Random Thought"].map((function(e){var t=s({tagName:"option",attributes:{value:"".concat(e)}});return t.insertAdjacentHTML("beforeend","".concat(e)),t}))));var d=s({tagName:"p",className:"modalText"});d.insertAdjacentHTML("beforeend","Content");var u=s({tagName:"input",className:"input inputName",attributes:{id:"inputContent",name:"content"}}),l=s({tagName:"p",className:"modalText"});l.insertAdjacentHTML("beforeend","Date");var m=s({tagName:"input",className:"input inputDate",attributes:{id:"inputDate",name:"date"}}),f=s({tagName:"button",className:"modalBtn",attributes:{id:"btnCancelNewEdit",type:"button"}});f.insertAdjacentHTML("beforeend","Cancel");var v=s({tagName:"button",className:"modalBtn",attributes:{id:"btnSave",type:"submit"}});v.insertAdjacentHTML("beforeend","Save");var p=s({tagName:"div",className:"modalBtnContainer"});p.append(f,v);var g=s({tagName:"form",className:"modalForm",attributes:{id:"modalForm"}});g.append(n,r,c,i,d,u,l,m,p);var h=s({tagName:"div",className:"modalWindow",attributes:{id:"modalWindow"}});h.append(a,g);var b=s({tagName:"div",className:"modal modal__hidden",attributes:{id:"modal_new_edit"}});return b.appendChild(h),b},j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){H.default(e,t,a[t])}))}return e};var L,H=(L=r("hKHmD"))&&L.__esModule?L:{default:L};var x,E=function(e){var t;["svg","path"].includes(e.path[0].nodeName)&&(t="path"===e.path[0].nodeName?e.target.parentNode:e.target),t&&w(t.id,t.attributes.key.value,t.parentNode.childNodes[3].textContent)},w=function(e,t,a){switch(t){case"edit":I(e);break;case"archive":D(e,a);break;case"delete":B(e,a)}},I=function(e){var t=y().find((function(t){return t.id===e}));document.getElementById("modalTitle").setAttribute("key","".concat(e)),document.getElementById("modalTitle").innerHTML="Edit record",document.getElementById("inputName").value="".concat(t.name),document.getElementById("selectCategory").value="".concat(t.category),document.getElementById("inputContent").value="".concat(t.content),document.getElementById("inputDate").value="".concat(t.expDate),document.getElementById("modal_new_edit").classList.remove("modal__hidden")},D=function(t,a){var n=y().map((function(a){return a.id===t?e(j)({},a,{isArch:!0}):a})),r=M(n).find((function(e){return e.category===a}));r.archive&&document.getElementById("".concat(a,"_archive")).classList.add("activeArch"),document.getElementById("".concat(a,"_archive")).innerHTML="".concat(r.archive),document.getElementById("".concat(a,"_active")).innerHTML="".concat(r.active),document.getElementById("div".concat(t)).remove(),A(n)},B=function(e,t){var a=y().filter((function(t){return t.id!==e})),n=M(a).find((function(e){return e.category===t})).active;document.getElementById("".concat(t,"_active")).innerHTML="".concat(n),document.getElementById("div".concat(e)).remove(),A(a)},C=function(e){switch(e){case"Task":return"grocery";case"Random Thought":return"mind";case"Idea":return"lightbulb";case"Quote":return"quote"}},k=function(e){e.preventDefault();var t=Object.fromEntries(new FormData(e.target).entries()),a=document.getElementById("modalTitle").attributes.key.value;"new"===a?newRecord(t):z(t,a),O()},S=function(e){O()},O=function(){document.getElementById("modal_new_edit").classList.add("modal__hidden")},z=function(e,t){var a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=M(e).find((function(a){return a.category===e[t].category})).active-a;document.getElementById("".concat(e[t].category,"_active")).innerHTML="".concat(n)},n=y(),r=n.findIndex((function(e){return e.id===t}));a(n,r,1),n[r].name=e.name,n[r].category=e.category,n[r].content=e.content,n[r].expDate+=e.date,a(n,r,0),A(n),document.getElementById("svg".concat(t)).attributes.d.value=p[C(e.category)],document.getElementById("name".concat(t)).innerHTML=e.name,document.getElementById("category".concat(t)).innerHTML=e.category,document.getElementById("content".concat(t)).innerHTML=e.content,document.getElementById("expDate".concat(t)).innerHTML+=e.date?"".concat(e.date,", "):""};!function(){localStorage.getItem("data")||A(q||[]);var e=s({tagName:"div",className:"table",attributes:{id:"tableTodo"}});e.insertAdjacentHTML("beforeend",N());var t=s({tagName:"div",className:"table table__stat",attributes:{id:"tableStat"}});t.insertAdjacentHTML("beforeend",T());var a,n,r,o=document.getElementById("root");o.append(g(),e,((r=s({tagName:"button",className:"button",attributes:{id:"button"}})).insertAdjacentHTML("afterbegin","Create Note"),r),(a=f.map((function(e){var t=s({tagName:"p",className:"headerText"});return t.insertAdjacentHTML("beforeend",e),t.outerHTML})).join(""),(n=s({tagName:"div",className:"headerContainer headerContainer__stat"})).insertAdjacentHTML("beforeend",a),n),t,_())}(),(x={tableToDo:document.getElementById("tableTodo"),tableStat:document.getElementById("tableStat"),button:document.getElementById("button"),modalNewEdit:document.getElementById("modalForm"),btnCancelNewEdit:document.getElementById("btnCancelNewEdit")}).tableToDo.addEventListener("click",E,!1),x.modalNewEdit.addEventListener("submit",k,!1),x.btnCancelNewEdit.addEventListener("click",S,!1)}();
//# sourceMappingURL=index.10f71985.js.map
