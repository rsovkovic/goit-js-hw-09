const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.body;let o=null;console.log("hello"),e.addEventListener("click",(()=>{o=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(()=>{clearInterval(o),e.disabled=!1,t.disabled=!0,l.style.backgroundColor="stop"}));
//# sourceMappingURL=01-color-switcher.8b30995e.js.map