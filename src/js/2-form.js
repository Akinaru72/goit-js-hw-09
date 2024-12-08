let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');

const StorageKey = 'feedback-form-state';

loadForm();

function loadForm() {
  const savedForm = localStorage.getItem(StorageKey);
    if (savedForm) {
        formData = { ...formData, ...JSON.parse(savedForm) };
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
  }
}

form.addEventListener('input', inputChange);

function inputChange(event) {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  localStorage.setItem(StorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('formData:', formData);
  localStorage.removeItem(StorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}