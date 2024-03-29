import{i as a,S as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function c(s){const o="https://pixabay.com/api/",t="43059548-3adc942b003e7790296d060a7",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error("error");return e.json()}).then(e=>(console.log(e),e)).catch(e=>console.log("error"))}const d=document.querySelector(".form");document.querySelector(".search-input");const u=document.querySelector(".gallery"),l=document.querySelector(".loader");d.addEventListener("submit",m);function m(s){s.preventDefault(),u.innerHTML="";const o=d.elements.searchQuery.value.trim();if(c(o).then(t=>{if(t.hits.length===0)return a.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",position:"topRight"});y(t.hits)}),o===""){a.error({title:"Error",message:"Field can`t be empty ",position:"topRight"}),l.classList.add("is-hidden");return}l.classList.remove("is-hidden"),c(o).then(t=>console.log(t)).catch(t=>{a.error({title:"Error",message:`${t.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"})}).finally(()=>{l.classList.add("is-hidden")})}const g=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(s){const o=s.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:n,comments:h,downloads:f})=>`<li>
            <a class="gallery-link" href="${i}">
            <img class="gallery-image"
                src="${t}"
                alt="${e}"
                width="360"
                height="152"/>
        </a>
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${r}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${n}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${h}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${f}</p>
            </div>
        </div>
    </li>`).join("");u.innerHTML=o,g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
