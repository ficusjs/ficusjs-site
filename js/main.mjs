function toKebabCase(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function elementRenderer(e,t){for(;t.firstChild;)t.removeChild(t.firstChild);let s;if("string"==typeof e)s=document.createElement("div"),s.innerHTML=e;else{if(!e.nodeName)throw new Error(`Unable to render ${e}. Have you included a renderer function?`);s=e}s&&t.appendChild(s)}const e=function(e){const t=arguments,s=this;let n,o,r=1,i="",a="",c=[0];const commit=e=>{1===r&&(e||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(e?t[e]:i):3===r&&(e||i)?(c[1]=e?t[e]:i,r=2):2===r&&"..."===i&&e?c[2]=Object.assign(c[2]||{},t[e]):2===r&&i&&!e?(c[2]=c[2]||{})[i]=!0:r>=5&&(5===r?((c[2]=c[2]||{})[o]=e?i?i+t[e]:t[e]:i,r=6):(e||i)&&(c[2][o]+=e?i+t[e]:i)),i=""};for(let t=0;t<e.length;t++){t&&(1===r&&commit(),commit(t));for(let l=0;l<e[t].length;l++)n=e[t][l],1===r?"<"===n?(commit(),c=[c,"",null],r=3):i+=n:4===r?"--"===i&&">"===n?(r=1,i=""):i=n+i[0]:a?n===a?a="":i+=n:'"'===n||"'"===n?a=n:">"===n?(commit(),r=1):r&&("="===n?(r=5,o=i,i=""):"/"===n&&(r<5||">"===e[t][l+1])?(commit(),3===r&&(c=c[0]),r=c,(c=c[0]).push(s.apply(null,r.slice(1))),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(commit(),r=2):i+=n),3===r&&"!--"===i&&(r=4,c=c[0])}return commit(),c.length>2?c.slice(1):c[1]}.bind(((e,t,...s)=>{let n=null,o=!1;["svg","use","symbol","path","g","defs","title"].indexOf(e)>-1?(n=document.createElementNS("http://www.w3.org/2000/svg",e),o=!0):n=document.createElement(e);for(const e in t)if("on"===e.slice(0,2)){const s=e.slice(2),o=t[e];if(null==o)continue;n.addEventListener(s,o)}else if(["disabled","selected","checked"].indexOf(e)>-1)t[e]&&n.setAttribute(e,e);else if("xlinkHref"===e&&o)t[e]&&n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t[e]);else if("href"===e&&o)t[e]&&n.setAttributeNS("http://www.w3.org/1999/xlink","href",t[e]);else{if(null==t[e])continue;n.setAttribute(e,t[e])}return 0===s.length?n:(s.flat(1).forEach((e=>{e instanceof Node?n.appendChild(e):n.appendChild(document.createTextNode(e))})),null==e?n.children:n)}));const t={create(e){!function({createComponent:e,renderer:t,html:s}){const n="fc-navbar__collapse--open";e("fc-navbar",{renderer:t,mounted(){this.classList.add("fc-navbar");const e=this.querySelector(".fc-navbar__toggler"),t=this.querySelector("nav.fc-navbar__collapse");e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),t.classList.toggle(n),this.emit("toggle",{instance:this,isOpen:t.classList.contains(n)}),t.classList.contains(n)?window.addEventListener("click",this.hideNavbarCollapse):window.removeEventListener("click",this.hideNavbarCollapse)}))},hideNavbarCollapse(e){const t=e.target.closest("fc-navbar");t&&t===this||this.querySelector("nav.fc-navbar__collapse").classList.remove(n)},render(){return s`${this.slots.default}`}})}(e)}},s=document.querySelector("#theme-toggle"),n=document.querySelector(".fd-theme-toggle__ball"),o=window.localStorage.getItem("theme");function setDarkTheme(){s.checked=!0,n.setAttribute("style","transform:translatex(100%);")}o?(document.documentElement.setAttribute("data-theme",o),"dark"===o&&setDarkTheme()):"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media&&setDarkTheme(),s.addEventListener("change",(e=>{e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem("theme","dark"),n.setAttribute("style","transform:translatex(100%);")):(document.documentElement.setAttribute("data-theme","light"),window.localStorage.setItem("theme","light"),n.setAttribute("style","transform:translatex(0%);"))}));["https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"].forEach((function(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e,t.type="text/css";const s=document.getElementsByTagName("link")[0];s.parentNode.insertBefore(t,s)})),function use(e,{...t}){if(e.create&&"function"==typeof e.create)return e.create({...t,use:use})}(t,{createComponent:function(e,t){!function(e,t){const s=function(e){if(!e)return[];const t=[];return Object.keys(e).forEach((s=>{(null==e[s].observed||e[s].observed)&&t.push(toKebabCase(s))})),t}(t.props);globalThis.customElements.get(e)||globalThis.customElements.define(e,class extends globalThis.HTMLElement{static get observedAttributes(){return s}get componentTagName(){return e}connectedCallback(){null==this.connectedCallbackCount&&(this.connectedCallbackCount=0),this.connectedCallbackCount=this.connectedCallbackCount+1,this._checkInit(),this._preprocess()}disconnectedCallback(){"function"==typeof this.removed&&(this.removed(),this.isRemovedCalled=!0)}attributeChangedCallback(){null!=this.connectedCallbackCount&&(this._checkInit(),this._preprocess())}get initialised(){return this._props&&this._computed&&this.templateRenderer}_checkInit(){this.initialised||this._init(t)}_init(t){this.ficusCustomElement=e,this._props=t.props||{},this._computed=t.computed||{},this.computedCache={},this.status="render",this.connectedCallbackCount=0,this.props=this._processProps(),this.root=this._processRoot(t.root),this.slots=this._processSlots(),this.render=t.render||null,this.templateRenderer=t.renderer||elementRenderer,this.template=null,this.created=t.created||null,this.mounted=t.mounted||null,this.updated=t.updated||null,this.removed=t.removed||null,this.isCreatedCalled=!1,this.isMountedCalled=!1,this.isRemovedCalled=!1,this.emit=(e,t)=>{!function(e,t,s={}){const n=Object.assign({},{bubbles:!0,cancelable:!0,composed:!1},s),o=globalThis.document.createEvent("CustomEvent");o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),Object.defineProperty(o,"composed",{value:n.composed}),e.dispatchEvent(o)}(this,e,{detail:t})},this._processMethodsAndComputedProps(t),this._processInstanceProps(this._props),"function"!=typeof this.created||this.isCreatedCalled||(this.created(),this.isCreatedCalled=!0)}_processProps(){const e={};return Object.keys(this._props).forEach((t=>{const s={},n=this._props[t],o=this._getAttribute(t);let r=null;if(null!=n.default&&(r=n.default),n.required&&null==o)null!=r?(console.info(`No biggie, the required prop '${t}' has no value set, so the default has been set`),s[t]=r):(s[t]=null,console.error(`The required prop '${t}' has no value set`));else switch(n.type){case String:default:s[t]=o||r;break;case Number:s[t]=null!=o?parseFloat(o):null!=r?r:0;break;case Boolean:s[t]=null!=o?"true"===o.toString():null!=r&&r;break;case Object:try{s[t]=null!=o?JSON.parse(o):null!=r?r:void 0}catch(e){s[t]=null!=r?r:void 0,console.error(`An object prop parse issue occurred with prop ${t} and value ${o}`)}}e[t]=s[t],this._instanceProps&&this._instanceProps[t]&&(e[t]=this._instanceProps[t])})),e}_processMethodsAndComputedProps(e){const t=this,s=Object.keys(e);s.length&&s.forEach((s=>{t[s]||"function"!=typeof e[s]||(t[s]=e[s].bind(t)),"computed"===s&&this._processComputed(e[s])}))}_processRoot(e){switch(e){case"standard":default:return this;case"shadow":return this.attachShadow({mode:"open"});case"shadow:closed":return this.attachShadow({mode:"closed"})}}_processComputed(e){const t=this,s=Object.keys(e);s.length&&s.forEach((s=>{t[s]?console.warn(`Computed property '${s}' already exists on the component instance`):Object.defineProperty(t,s,{get:()=>(t.computedCache[s]||(t.computedCache[s]=e[s].bind(t)()),t.computedCache[s])})}))}_processRender(){const e=this.render?this.render():void 0;e&&(this.template=e,this._updateRender())}_processSlots(){const e=this.childNodes,t={default:[]};return e.length>0&&[...e].forEach((e=>{const s=e.getAttribute?e.getAttribute("slot"):null;s?t[s]=e:t.default.push(e)})),t}_getAttribute(e){try{return this.getAttribute(toKebabCase(e))}catch(e){return console.error("A get prop error occurred",e),""}}_processInstanceProps(e){const t=this,s=Object.keys(e);e&&s.forEach((e=>{let s;t[e]&&(s=t[e],delete t[e]),Object.defineProperty(t,e,{get(){return this._instanceProps&&this._instanceProps[e]?this._instanceProps[e]:this.getAttribute(toKebabCase(e))},set(t){return this._instanceProps||(this._instanceProps={}),this._instanceProps[e]=t,this.setAttribute(toKebabCase(e),"object"==typeof t?JSON.stringify(t):t.toString()),!0},enumerable:!0}),s&&(t[e]=s)}))}_preprocess(){this.computedCache={},this.props=this._processProps(),this._processRender()}_updateRender(){var e;this.template&&("object"!=typeof(e=this.template)&&"function"!=typeof e||"function"!=typeof e.then?(this.templateRenderer(this.template,this.root),this._callLifecycleMethods()):this.template.then((e=>{this.templateRenderer(e,this.root),this._callLifecycleMethods()})).catch((e=>console.error("A component render error occurred",e))))}_callLifecycleMethods(){"function"!=typeof this.mounted||this.isMountedCalled||this.mounted(),this.isMountedCalled=!0,"function"==typeof this.updated&&this.isMountedCalled&&this.updated()}})}(e,function(e){return{...e,created(){if(e.state&&"function"!=typeof e.state)throw new Error("State must be a function!");this._state=e.state||{},"function"==typeof this._state&&(this._state=this._state.bind(this)()),this.state=this._monitorState(this._state),this.setState=(e,t)=>{const setter=e=>{if(!e||"object"!=typeof e)return;const s=this.updated;t&&(this.updated=()=>{t(),this.updated=s||void 0}),this.status="transaction";for(const t in e)this.state[t]&&this.state[t]===e[t]||(this.state[t]=e[t]);this.status="render",this._processRender()},s=e(this.state);var n;"object"!=typeof(n=s)&&"function"!=typeof n||"function"!=typeof n.then?setter(s):s.then(setter)},e.created&&e.created.call(this)},_monitorState(e){const t=this;return new Proxy(e,{set:(e,s,n)=>(e[s]===n||(e[s]=n,t.computedCache={},"render"===t.status&&t._processRender()),!0)})}}}(t))},renderer:function(e,t){for(;t.firstChild;)t.removeChild(t.firstChild);Array.isArray(e)?e.forEach((e=>t.appendChild(e))):t.appendChild(e)},html:e});
