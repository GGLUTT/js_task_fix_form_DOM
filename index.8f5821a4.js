var e=document.querySelectorAll("form input"),t=function(e){return e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()})};e.forEach(function(e){var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",e.id),r.textContent=t(e.name),e.placeholder=t(e.name),e.parentNode.insertBefore(r,e)});
//# sourceMappingURL=index.8f5821a4.js.map
