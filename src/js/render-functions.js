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

form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const findValue = form.elements.searchQuery.value.trim();
    console.log(findValue);

    getPicture(findValue).then((data)=>console.log(data))
}
function markup(arr) {
    const newMarkup = arr.map(elem => `<li>
    <img src="" alt = "">
    </li>`)
    
}