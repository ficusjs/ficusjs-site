import{use as e}from"https://cdn.skypack.dev/ficusjs";import{renderer as t,html as s}from"https://cdn.skypack.dev/@ficusjs/renderers/htm";import{module as o}from"https://cdn.skypack.dev/@ficusjs/components/custom-elements/navbar";const n=document.querySelector("#theme-toggle"),l=document.querySelector(".fd-theme-toggle__ball"),a=document.getElementById("ficus-logo"),c=document.getElementById("ficus-logo-white"),m=window.localStorage.getItem("theme");m&&(document.documentElement.setAttribute("data-theme",m),"dark"===m&&(n.checked=!0,l.setAttribute("style","transform:translatex(100%);"),a.style.display="none",c.style.display="block")),n.addEventListener("change",(e=>{e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem("theme","dark"),l.setAttribute("style","transform:translatex(100%);"),a.style.display="none",c.style.display="block"):(document.documentElement.setAttribute("data-theme","light"),window.localStorage.setItem("theme","light"),l.setAttribute("style","transform:translatex(0%);"),a.style.display="block",c.style.display="none")}));["https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"].forEach((function(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e,t.type="text/css";const s=document.getElementsByTagName("link")[0];s.parentNode.insertBefore(t,s)})),e(o,{renderer:t,html:s});
