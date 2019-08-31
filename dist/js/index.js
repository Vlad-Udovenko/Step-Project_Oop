const e=document.querySelector("#visit-modal"),t=document.querySelector("#modal-btn"),l=document.querySelector(".close"),n=document.querySelector(".modal-footer button"),o=document.querySelector(".main-block"),i=document.querySelector(".clearAll");let s,c=0,d=0;const r=document.getElementById("list-of-doctors"),a=document.getElementById("form-inputs");function h(){e.style.display="none"}document.addEventListener("DOMContentLoaded",function(){let e,t;t=null===localStorage.getItem("positions")?[]:JSON.parse(localStorage.getItem("positions"));e=null===localStorage.getItem("cards")?[]:JSON.parse(localStorage.getItem("cards"));e.forEach(function(e){const l=document.createElement("ul");if(null!=e){null!=t[c]?l.style.top=`${t[c][0]}`:l.style.top=0,void 0!==t[c]?l.style.left=`${t[c][1]}`:l.style.left=0,l.setAttribute("id",`${c++}`),l.classList.add("created-elements"),o.appendChild(l);for(let[t,n]of Object.entries(e.slice(0,-2))){const e=document.createElement("li");e.innerHTML=`${n}`,l.appendChild(e)}let n=l.children;n[2].style.display="block",n[n.length-1].style.display="block";const i=S();l.appendChild(i);const s=v();l.appendChild(s),l.style.display="flex"}}),o.children.length>=3&&(document.querySelector(".main-block span").style.display="none");document.querySelectorAll(".created-elements").length&&document.querySelectorAll(".created-elements").forEach(e=>{!function(e){let t=e;function l(e){let l=t.getBoundingClientRect(),n=o.getBoundingClientRect();console.log(n),e.screenY<2*n.y-l.height/6?(t.style.top,n.y):e.screenY>n.y+n.width-l.height/2?(t.style.top,n.y,n.widt,l.height):t.style.top=e.clientY-n.top-l.height/2-70+"px",e.screenX<n.x+l.width/2?(t.style.left,n.x):e.screenX>n.x+n.width-l.width/2?(t.style.left,n.x,n.width,l.width):t.style.left=e.clientX-n.left-l.width/2-35+"px"}t.onmousedown=function(e){t.style.position="absolute",l(e),o.appendChild(t),t.style.zIndex=1e3,document.onmousemove=function(e){l(e)},t.onmouseup=function(){!function(e){let t;t=null===localStorage.getItem("positions")?[]:JSON.parse(localStorage.getItem("positions"));const l=[];l.push(e.style.top),l.push(e.style.left),t.splice(e.id,1,l),localStorage.setItem("positions",JSON.stringify(t))}(t),document.onmousemove=null}}}(e)})}),t.addEventListener("click",function(){e.style.display="block"}),l.addEventListener("click",h),window.addEventListener("click",function(t){t.target==e&&(e.style.display="none")}),n.addEventListener("click",function(){let e=a.children[d];if(o.children.length<11)for(let t=0;t<e.children.length;t++)if(""!=e.children[t].value&&null!=e.children[t].value){if(t==e.children.length-2)return g()}else e.children[t].classList.add("eror-msg");else n.disabled="true"}),i.addEventListener("click",function(){localStorage.removeItem("cards"),localStorage.removeItem("positions"),document.location.reload(!0)});class u{constructor(e,t,l){this.target=e,this.date=t,this.fullName=l}addCard(){const e=document.createElement("ul");e.setAttribute("id",`${c++}`),e.classList.add("created-elements"),o.appendChild(e);for(let[t,l]of Object.entries(this)){const n=document.createElement("li");n.innerHTML=`${t}: ${l}`,e.appendChild(n)}let t=e.children;t[2].style.display="block",t[t.length-1].style.display="block";const l=S();e.appendChild(l);const n=v();e.appendChild(n),e.style.display="flex",function(e){let t;t=null===localStorage.getItem("cards")?[]:JSON.parse(localStorage.getItem("cards"));const l=[];for(let t=0;t<e.length;t++)l.push(e[t].textContent);t.push(l),localStorage.setItem("cards",JSON.stringify(t))}(e.children)}}class p extends u{constructor(e,t,l,n,o,i,s){super(e,t,l),this.pressure=n,this.iWeight=o,this.diseases=i,this.age=s,this.position="Cardiologist",this.id=0}}class m extends u{constructor(e,t,l,n){super(e,t,l),this.dateLastVist=n,this.position="Dentist",this.id=1}}class y extends u{constructor(e,t,l,n){super(e,t,l),this.age=n,this.position="Therapist",this.id=2}}function g(){const e=[];let t="";for(let l=0;l<a.children.length;l++)if("block"==a.children[l].style.display){for(let t=0;t<a.children[l].children.length;t++)e.push(a.children[l].children[t].value);t=0===d?new p(...e):1===d?new m(...e):new y(...e),Object.defineProperty(t,"id",{enumerable:!1}),t.addCard(),h(),document.querySelector(".main-block span").style.display="none",f()}}function f(){for(let e=0;e<a.children[d].children.length;e++)a.children[d].children[e].value="",a.children[d].children[e].classList.remove("eror-msg")}function S(){return(s=document.createElement("p")).setAttribute("id","show-more"),s.innerText="Show More",s.addEventListener("mousedown",b),s}function b(e){const t=e.path[1].children;for(let e=0;e<t.length;e++)t[e].style.display="block";e.path[1].removeChild(e.target)}function v(){return btnDelete=document.createElement("div"),btnDelete.setAttribute("id","delete-visit"),btnDelete.innerText="",btnDelete.addEventListener("mousedown",C),btnDelete}function C(e){e.path[1].style.display="none";const t=JSON.parse(localStorage.getItem("cards")),l=[];for(let t=0;t<e.path[1].children.length;t++)l.push(e.path[1].children[t].textContent);delete t[e.path[1].id],localStorage.setItem("cards",JSON.stringify(t));const n=JSON.parse(localStorage.getItem("positions")),o=[];for(let t=0;t<e.path[1].children.length;t++)o.push(e.path[1].children[t].textContent);delete n[e.path[1].id],localStorage.setItem("positions",JSON.stringify(n)),document.location.reload(!0)}r.addEventListener("change",function(e){a.children[d].style.display="none";const t=Array.from(r.children),l=t.filter(t=>t.value===e.target.value);d=t.indexOf(l[0])-1,a.children[d].style.display="block"});