!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body,n=null;console.log("hello"),t.addEventListener("click",(function(){n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0,o.style.backgroundColor="stop"}))}();
//# sourceMappingURL=01-color-switcher.bbe6f23d.js.map