
let elem = document.querySelector('.backdrop');
let btn = document.querySelector('.btn');
btn.addEventListener('click', myFunc);
function myFunc() {
elem.classList.toggle('backdrop--is-hidden');
}
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();