let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
  try {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (!savedData) return;

    formData = savedData;

    Object.entries(savedData).forEach(([name, value]) => {
      if (formEl.elements[name]) {
        formEl.elements[name].value = value;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormInput = event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  event.currentTarget.reset();
};

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
