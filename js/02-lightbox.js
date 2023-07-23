import { galleryItems } from "./gallery-items.js";
// Change code below this line


const container = document.querySelector(".gallery");
const murkup = galleryItems.map(
  ({ preview, original, description }, index) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);

container.insertAdjacentHTML("beforeend", murkup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


