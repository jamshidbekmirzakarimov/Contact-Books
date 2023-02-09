const arrayContacts = [];

//GET ELEMENT
const elContactForm = document.querySelector(".js-contact-form");
const elContactInputName = elContactForm.querySelector(".js-contact-name");
const elContactInputRel = elContactForm.querySelector(".js-contact-relationship");
const elContactInputNumber = elContactForm.querySelector(".js-contact-phone-number");
const elContactList = document.querySelector(".js-contact-list");


const arrayPush = (userName, relationship, phoneNumber) => {
  arrayContacts.push({
    name: userName,
    rel: relationship,
    phone: phoneNumber
  });
};

function createContact(array) {
  const elContactTemplate = document.querySelector("#js-contact-temp").content;
  const elContactTempClone = elContactTemplate.cloneNode(true);
  
  array.forEach(function (contact, index) {
    elContactTempClone.querySelector(".js-contact-username").textContent = contact.name;
    elContactTempClone.querySelector(".js-contact-rel").textContent = contact.rel;
    elContactTempClone.querySelector(".js-contact-number").textContent = contact.phone;
    elContactTempClone.querySelector(".js-contact-number").href = `tel:${contact.phone}`;
    elContactTempClone.querySelector(".js-delete-btn").dataset.contactId = index;
    
    
    elContactList.appendChild(elContactTempClone);
  });
}

elContactForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elContactList.innerHTML = null;
  
  const inputNameValue = elContactInputName.value.trim();
  const inputRelValue = elContactInputRel.value.trim();
  const inputPhoneValue = elContactInputNumber.value.trim();
  
  arrayPush(inputNameValue, inputRelValue, inputPhoneValue);
  
  createContact(arrayContacts);
  
  elContactInputName.value = "";
  elContactInputRel.value = "";
  elContactInputNumber.value = "";
});

