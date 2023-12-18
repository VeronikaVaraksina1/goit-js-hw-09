'use strict';

const feedbackForm = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const input = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message;

const form = {
  email: input.value,
  message: textarea.value,
};

input.value = localStorage.getItem(localStorageKey) ?? '';
textarea.value = localStorage.getItem(localStorageKey) ?? '';

feedbackForm.addEventListener('input', () => {
  localStorage.setItem(localStorageKey, JSON.stringify(form));
});

feedbackForm.addEventListener('submit', e => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
