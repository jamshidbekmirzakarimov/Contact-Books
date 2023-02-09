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


