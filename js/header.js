const popupToggle = document.querySelector(".notifications button");

const openPopup = () => {
    const popUp = popupToggle.nextElementSibling;

    popUp.classList.toggle("active");
}

if(popupToggle) {
    popupToggle.addEventListener("click", openPopup);
}