const modal = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button-popup");
const closeSentence = document.querySelector(".close-sentence-popup");
const popupTitle = $("#popupTitle");
const popupContent = $("#popupContent");

function toggleModal() {
    if (actualScreen === 2 || actualScreen === 3 || actualScreen === 4 || actualScreen === 6)
        modal.classList.toggle("show-popup");
    if (actualScreen === 2) {
        popupTitle.text("huh, infact you have to stroke the cat");
        popupContent.text("«Ah yeah»");
    } else if (actualScreen === 3) {
        popupTitle.text("ahh there, in fact it is necessary to strike the cat, 3 times");
        popupContent.text("«Ah yes ok»");
    } else if (actualScreen === 4) {
        popupTitle.text("so there in fact you have to stroke the cat but in the other direction");
        popupContent.text("«I'm going but am afraid»");
    } else if (actualScreen === 6) {
        popupTitle.text("This is a gift you can play with cat...");
        popupContent.text("«very cool»");
    }
}

function windowOnClick(event) {
    if (event.target === modal)
        toggleModal();
}


closeSentence.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);