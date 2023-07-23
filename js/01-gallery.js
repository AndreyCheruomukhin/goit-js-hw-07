import { galleryItems } from "./gallery-items.js";



const container = document.querySelector(".gallery");
const murkup = galleryItems.map(
  ({ preview, original, description }, index) =>
    `<li class="gallery__item" >
<a class="gallery__link" href="${original}">
  <img
  data-index="${index}"
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
);

container.insertAdjacentHTML("beforeend", murkup.join(""));
container.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') {
    return;
  }

  
  const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        },
    });
    instance.show();
    
        function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
            instance.close();
    }
      
    }
   