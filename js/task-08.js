"use strict";
const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = loginForm.elements;

  const formData = {
    email: formElements.email.value,

    password: formElements.password.value,
  };

  if (!formData.email || !formData.password) {
    alert("Uzupełnij wszystkie pola");

    return;
  }

  console.log(formData);

  loginForm.reset();
});
