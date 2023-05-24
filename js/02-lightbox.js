import { galleryItems } from "./gallery-items.js";
// Change code below this line

let ulEl = document.querySelector(".gallery");
let galeryContainer = document.createDocumentFragment();
galleryItems.forEach((item) => {
  let galleryEl = document.createElement("li");
  galleryEl.classList.add("gallery__item");

  let galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  let galleryItem = document.createElement("img");
  galleryItem.src = item.preview;
  galleryItem.classList.add("gallery__image");
  galleryItem.alt = item.description;
  galleryLink.appendChild(galleryItem);
  galleryEl.appendChild(galleryLink);
  galeryContainer.appendChild(galleryEl);
});
ulEl.appendChild(galeryContainer);

let lightbox = new SimpleLightbox(".gallery a", {});
