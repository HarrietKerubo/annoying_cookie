const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalTextElement = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const modalChoice = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoice.classList.toggle("reverse");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userFormData = new FormData(consentForm);
  const name = userFormData.get("fullName");
  modalTextElement.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>  `;
  setTimeout(function () {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    modalInner.innerHTML = `
    <h2>Thanks <span class="modal-display-name"> ${name} </span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});
