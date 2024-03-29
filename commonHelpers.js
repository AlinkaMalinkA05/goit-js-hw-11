import"./assets/vendor-db7463ae.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(s){const t="https://pixabay.com/api/",o="43059548-3adc942b003e7790296d060a7",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error("error");return e.json()}).then(e=>(console.log(e),e)).catch(e=>console.log("error"))}const l=document.querySelector(".form");document.querySelector(".search-input");const d=document.querySelector(".gallery");l.addEventListener("submit",f);function f(s){s.preventDefault();const t=l.elements.searchQuery.value.trim();c(t).then(o=>a(o.hits)),c(t).then(o=>console.log(o))}function a(s){s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:u})=>`<a class="gallery-link" href="${o}">
            <img class="gallery-image"
                src="${t}"
                alt="${i}"
                width="360"
                height="152"/>
        </a>
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${e}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${r}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${n}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${u}</p>
            </div>
        </div>
    </li>`).join(""),d.innerHTML=a,lightbox.refresh()}
//# sourceMappingURL=commonHelpers.js.map
