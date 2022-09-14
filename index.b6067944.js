function t({tagName:t,className:e,attributes:a={}}){const s=document.createElement(t);if(e){const t=e.split(" ").filter(Boolean);s.classList.add(...t)}return Object.keys(a).forEach((t=>s.setAttribute(t,a[t]))),s}(()=>{const e=document.getElementById("root");e.appendChild(t({tagName:"div",className:"test"}))})();
//# sourceMappingURL=index.b6067944.js.map
