// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { getPicture } from "./pixabay-api";
const form = document.querySelector(".form");
const input = document.querySelector(".search-input")
const gallery = document.querySelector(".gallery")
const loader =

form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const findValue = form.elements.searchQuery.value.trim();
    getPicture(findValue).then(data => markup(data.hits))


    getPicture(findValue).then((data)=>console.log(data))
}
function markup(arr) {
    const newMarkup = arr.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width="360"
                height="152"/>
        </a>
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${likes}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${views}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${comments}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${downloads}</p>
            </div>
        </div>
    </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}
    
