import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),o="feedback-form-state";l();function l(){const t=localStorage.getItem(o);t&&(e={...e,...JSON.parse(t)},a.email.value=e.email||"",a.message.value=e.message||"")}a.addEventListener("input",s);function s(t){const{name:m,value:r}=t.target;e[m]=r.trim(),localStorage.setItem(o,JSON.stringify(e))}a.addEventListener("submit",i);function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("formData:",e),localStorage.removeItem(o),e.email="",e.message="",a.reset()}
//# sourceMappingURL=2-form.js.map