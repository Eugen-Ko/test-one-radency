function e({tagName:e,className:t,attributes:a={}}){const n=document.createElement(e);if(t){const e=t.split(" ").filter(Boolean);n.classList.add(...e)}return Object.keys(a).forEach((e=>n.setAttribute(e,a[e]))),n}const t=["","Name","Created","Category","Content","Dates",""],a=["","Note Category","","Active","","Archive","","",""],n={task:"Task",idea:"Idea",quote:"Quote",randomThought:"Random Thought"},r={archive:"M5.109 5.016h13.781l-0.938-1.031h-12zM12 17.484l5.484-5.484h-3.469v-2.016h-4.031v2.016h-3.469zM20.531 5.25q0.469 0.563 0.469 1.266v12.469q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-12.469q0-0.703 0.469-1.266l1.359-1.688q0.469-0.563 1.172-0.563h12q0.703 0 1.172 0.563z",edit:"M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z",delete:"M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z",grocery:"M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z",lightbulb:"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z",mind:"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z",quote:"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z",unArchive:"M5.109 5.016h13.781l-0.938-1.031h-12zM12 9.516l-5.484 5.484h3.469v2.016h4.031v-2.016h3.469zM20.531 5.203q0.469 0.563 0.469 1.313v12.469q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-12.469q0-0.75 0.469-1.313l1.359-1.641q0.469-0.563 1.172-0.563h12q0.703 0 1.172 0.563z"},o=()=>{const a=e({tagName:"div",className:"headerContainer",attributes:{id:"headerToDo"}}),n=t.map((t=>{const a=e({tagName:"p",className:"headerText"});return a.insertAdjacentHTML("beforeend",t),a.outerHTML})).join(""),o=e({tagName:"svg",className:"headerSVG",attributes:{id:"allArch",viewBox:"0 0 24 24",preserveAspectRatio:"none"}});o.insertAdjacentHTML("beforeend",`<path d="${r.archive}"></path>`);const d=e({tagName:"svg",className:"headerSVG",attributes:{id:"allDelete",viewBox:"0 0 24 24",preserveAspectRatio:"none"}});return d.insertAdjacentHTML("beforeend",`<path d="${r.delete}"></path>`),a.insertAdjacentHTML("beforeend",[n,o.outerHTML,d.outerHTML].join("")),a},d=(t,a)=>{const n=e({tagName:"svg",className:"categorySVG",attributes:{viewBox:"0 0 24 24",preserveAspectRatio:"none"}});n.insertAdjacentHTML("beforeend",`<path d="${r[t]}" id="svg${a}"></path>`);const o=e({tagName:"div",className:"categoryContainerSVG"});return o.insertAdjacentHTML("beforeend",n.outerHTML),o},i=(e,t="")=>{switch(e){case"Task":return d("grocery",t);case"Random Thought":return d("mind",t);case"Idea":return d("lightbulb",t);case"Quote":return d("quote",t)}},c=({name:t,createDate:a,category:n,content:o,expDate:d,id:c})=>{const s=e=>{switch(e){case 0:return"name";case 2:return"category";case 3:return"content";case 4:return"expDate"}},l=[t,a,n,o,d].map(((t,a)=>{const n=e({tagName:"p",className:"elementText "+(0===a?"elementText__title":""),attributes:{id:`${s(a)}${c}`}});return n.insertAdjacentHTML("beforeend",t),n.outerHTML})).join(""),m=["edit","archive","delete"].map((t=>{const a=e({tagName:"svg",className:"elementSVG",attributes:{key:t,id:c,viewBox:"0 0 24 24",preserveAspectRatio:"none"}});return a.insertAdjacentHTML("beforeend",`<path d="${r[t]}"></path>`),a.outerHTML})).join(""),u=e({tagName:"div",className:"headerContainer headerContainer__el",attributes:{id:`div${c}`}});return u.insertAdjacentHTML("beforeend",[i(n,c).outerHTML,l,m].join("")),u},s=()=>JSON.parse(localStorage.getItem("data")),l=()=>s().filter((e=>!e.isArch)).map((e=>c(e).outerHTML)).join(""),m=()=>{const t=e({tagName:"button",className:"button",attributes:{id:"createBtn"}});return t.insertAdjacentHTML("afterbegin","Create Note"),t},u=()=>{const t=a.map((t=>{const a=e({tagName:"p",className:"headerText"});return a.insertAdjacentHTML("beforeend",t),a.outerHTML})).join(""),n=e({tagName:"div",className:"headerContainer headerContainer__stat"});return n.insertAdjacentHTML("beforeend",t),n},h=({category:t,active:a,archive:n})=>{const r=(e,t)=>{switch(t){case 0:return`${e}`;case 2:return`${e}_active`;case 4:return`${e}_archive`;default:return""}},o=[t,"",a,"",n,"","",""].map(((a,o)=>{const d=e({tagName:"p",className:`elementText ${0===o?"elementText__title":""} ${n&&4===o?"activeArch":""}`,attributes:{id:`${r(t,o)}`}});return d.insertAdjacentHTML("beforeend",String(a)),d.outerHTML})).join(""),d=e({tagName:"div",className:"headerContainer headerContainer__el"});return d.insertAdjacentHTML("beforeend",[i(t).outerHTML,o].join("")),d},g=()=>{var e;return(e=s(),Object.values(n).map((t=>({category:t,active:e.filter((e=>e.category===t&&!e.isArch)).length,archive:e.filter((e=>e.category===t&&e.isArch)).length})))).map((e=>h(e).outerHTML)).join("")},p=[{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!1,id:"1"},{name:"Shopping list",createDate:"27 April, 2022",category:"Quote",content:"milk, water",expDate:"",isArch:!0,id:"2"},{name:"Shopping list",createDate:"27 April, 2022",category:"Random Thought",content:"milk, water",expDate:"",isArch:!1,id:"3"},{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!0,id:"4"},{name:"Shopping list",createDate:"27 April, 2022",category:"Quote",content:"milk, water",expDate:"",isArch:!1,id:"5"},{name:"Shopping list",createDate:"27 April, 2022",category:"Idea",content:"milk, water",expDate:"",isArch:!1,id:"6"},{name:"Shopping list",createDate:"27 April, 2022",category:"Task",content:"milk, water",expDate:"",isArch:!1,id:"7"}],v=e=>{localStorage.setItem("data",JSON.stringify(e))},N=()=>{const t=e({tagName:"p",className:"modalTitle",attributes:{id:"modalTitle"}}),a=e({tagName:"p",className:"modalText"});a.insertAdjacentHTML("beforeend","Name");const n=e({tagName:"input",className:"input inputName",attributes:{id:"inputName",name:"name"}}),r=e({tagName:"p",className:"modalText"});r.insertAdjacentHTML("beforeend","Category");const o=e({tagName:"select",className:"input selectCategory",attributes:{id:"selectCategory",name:"category"}});o.append(...["Task","Idea","Quote","Random Thought"].map((t=>{const a=e({tagName:"option",attributes:{value:`${t}`}});return a.insertAdjacentHTML("beforeend",`${t}`),a})));const d=e({tagName:"p",className:"modalText"});d.insertAdjacentHTML("beforeend","Content");const i=e({tagName:"input",className:"input inputName",attributes:{id:"inputContent",name:"content"}}),c=e({tagName:"p",className:"modalText"});c.insertAdjacentHTML("beforeend","Date");const s=e({tagName:"input",className:"input inputDate",attributes:{id:"inputDate",name:"date"}}),l=e({tagName:"button",className:"modalBtn",attributes:{id:"btnCancelNewEdit",type:"button"}});l.insertAdjacentHTML("beforeend","Cancel");const m=e({tagName:"button",className:"modalBtn",attributes:{id:"btnSave",type:"submit"}});m.insertAdjacentHTML("beforeend","Save");const u=e({tagName:"div",className:"modalBtnContainer"});u.append(l,m);const h=e({tagName:"form",className:"modalForm",attributes:{id:"modalForm"}});h.append(a,n,r,o,d,i,c,s,u);const g=e({tagName:"div",className:"modalWindow",attributes:{id:"modalWindow"}});g.append(t,h);const p=e({tagName:"div",className:"modal modal__hidden",attributes:{id:"modal_new_edit"}});return p.appendChild(g),p},b=()=>{const t=e({tagName:"p",className:"modalTitle",attributes:{id:"modalTitle"}});t.insertAdjacentHTML("beforeend","Archiving records");const a=e({tagName:"div",className:"modalArchList",attributes:{id:"modalArchList"}}),n=e({tagName:"button",className:"modalBtn",attributes:{id:"btnCloseArch",type:"button"}});n.insertAdjacentHTML("beforeend","Close");const r=e({tagName:"div",className:"modalBtnContainer"});r.append(n);const o=e({tagName:"div",className:"modalWindow modalWindow__arch",attributes:{id:"modalArhWindow"}});o.append(t,a,r);const d=e({tagName:"div",className:"modal modal__hidden modal__archive",attributes:{id:"modalArchContainer"}});return d.appendChild(o),d},T=()=>{document.getElementById("tableTodo").innerHTML=l(),document.getElementById("tableStat").innerHTML=g()},A=e=>{let t;["svg","path"].includes(e.path[0].nodeName)&&(t="path"===e.path[0].nodeName?e.target.parentNode:e.target),t&&y(t.id,t.attributes.key.value)},y=(e,t)=>{switch(t){case"edit":L(e);break;case"archive":M(e);break;case"delete":q(e)}},L=e=>{const t=s().find((t=>t.id===e));document.getElementById("modalTitle").setAttribute("key",`${e}`),document.getElementById("modalTitle").innerHTML="Edit record",document.getElementById("inputName").value=`${t.name}`,document.getElementById("selectCategory").value=`${t.category}`,document.getElementById("inputContent").value=`${t.content}`,document.getElementById("inputDate").value=`${t.expDate}`;document.getElementById("modal_new_edit").classList.remove("modal__hidden")},M=e=>{const t=s().map((t=>t.id===e?{...t,isArch:!0}:t));v(t),T()},q=e=>{const t=s().filter((t=>t.id!==e));v(t),T()},E=e=>{e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a=document.getElementById("modalTitle").attributes.key.value;"new"===a?C(t):B(t,a),f()},f=e=>{document.getElementById("modal_new_edit").classList.add("modal__hidden")},B=(e,t)=>{const a=s(),n=a.findIndex((e=>e.id===t));a[n].name=e.name,a[n].category=e.category,a[n].content=e.content,a[n].expDate=e.date,v(a),T()},C=e=>{const t={name:e.name?e.name:"",createDate:(new Date).toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"}),category:e.category?e.category:"",content:e.content?e.content:"",expDate:e.expDate?e.expDate:"",isArch:!1,id:String(Date.now())},a=s();a.push(t),v(a),T()},H=()=>{document.getElementById("modalTitle").setAttribute("key","new"),document.getElementById("modalTitle").innerHTML="New record",document.getElementById("inputName").value="",document.getElementById("selectCategory").value="Task",document.getElementById("inputContent").value="",document.getElementById("inputDate").value="";document.getElementById("modal_new_edit").classList.remove("modal__hidden")},_=t=>{const a=s().filter((e=>e.category===t&&e.isArch)).map((t=>{let a=c(t);a.lastChild.remove(),a.lastChild.remove(),a.lastChild.remove();const n=e({tagName:"svg",className:"elementSVG",attributes:{key:"unArch",id:t.id,viewBox:"0 0 24 24",preserveAspectRatio:"none"}});return n.insertAdjacentHTML("beforeend",`<path d="${r.unArchive}"></path>`),a.appendChild(n),a.outerHTML})).join("");document.getElementById("modalArchList").innerHTML=a},D=(e,t)=>{const a=s(),n=a.findIndex((t=>t.id===e));a[n].isArch=!1,v(a),_(t),T()},j=e=>{if(!["Task_archive","Idea_archive","Quote_archive","Random Thought_archive"].includes(e.target.id))return;if("0"===e.target.textContent)return;document.getElementById("modalArchContainer").classList.remove("modal__hidden"),_(e.target.id.slice(0,-8))},I=()=>{document.getElementById("modalArchContainer").classList.add("modal__hidden")},w=e=>{let t;["svg","path"].includes(e.path[0].nodeName)&&(t="path"===e.path[0].nodeName?e.target.parentNode:e.target,D(t.id,t.parentNode.childNodes[3].textContent))},k=e=>{let t;["svg","path"].includes(e.path[0].nodeName)&&(t="path"===e.path[0].nodeName?e.target.parentNode:e.target),t&&x(t.attributes.id.value)},x=e=>{switch(e){case"allArch":S();break;case"allDelete":$()}},S=()=>{v(s().map((e=>(e.isArch=!0,e)))),T()},$=()=>{v(s().filter((e=>e.isArch))),T()};(()=>{localStorage.getItem("data")||v(p||[]);const t=e({tagName:"div",className:"table",attributes:{id:"tableTodo"}});t.insertAdjacentHTML("beforeend",l());const a=e({tagName:"div",className:"table table__stat",attributes:{id:"tableStat"}});a.insertAdjacentHTML("beforeend",g());const n=document.getElementById("root");n.append(o(),t,m(),u(),a,N(),b())})(),(()=>{const e={tableToDo:document.getElementById("tableTodo"),tableStat:document.getElementById("tableStat"),createBtn:document.getElementById("createBtn"),modalNewEdit:document.getElementById("modalForm"),btnCancelNewEdit:document.getElementById("btnCancelNewEdit"),btnCloseArch:document.getElementById("btnCloseArch"),modalArchList:document.getElementById("modalArchList"),headerToDo:document.getElementById("headerToDo")};e.tableToDo.addEventListener("click",A,!1),e.modalNewEdit.addEventListener("submit",E,!1),e.btnCancelNewEdit.addEventListener("click",f,!1),e.createBtn.addEventListener("click",H,!1),e.tableStat.addEventListener("click",j,!1),e.btnCloseArch.addEventListener("click",I,!1),e.modalArchList.addEventListener("click",w,!1),e.headerToDo.addEventListener("click",k,!1)})();
//# sourceMappingURL=index.f5c35bb0.js.map
