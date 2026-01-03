# Homework Assignment №9

Before starting the homework, be sure to watch this video:
[https://www.youtube.com/watch?v=isfHfQsLpNE&t=2s](https://www.youtube.com/watch?v=isfHfQsLpNE&t=2s)

After making changes in your repository, please wait **5 minutes** before
submitting the work for review. GitHub needs some time to update the version.

> [!NOTE] To style the markup of your tasks, use this
> [layout](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=3-969&mode=design).

---

## Homework Instructions

1. Create a repository **`goit-js-hw-09`**.
2. Build the project using **Vite**. We have prepared a ready-made setup with
   all additional project configurations — be sure to use it.
3. Read the task description and complete it in a code editor.
4. Make sure the code is formatted using **Prettier**, and there are no errors
   or warnings in the console when opening the live page.
5. Submit the homework for review.

**Submission format:** The homework must include two links: one to the source
files and one to the live page on GitHub Pages.

---

## Project Structure

To style the markup of your tasks, use the provided layout.

Take the
[project template](https://github.com/goitacademy/vanilla-app-template), remove
unnecessary HTML and JS files that were created as examples, and add new ones to
complete the tasks of this homework.

The folder and file structure inside the `src` directory should look as follows:

![Project preview](assets/goit-js-09.jpg)

### Example of linking HTML files to `index.html`

```html
<ul>
  <li><a href="./1-gallery.html">Gallery</a></li>
  <li><a href="./2-form.html">Form</a></li>
</ul>
```

## Task 1 — Image Gallery

Complete this task in the `1-gallery.html` and `1-gallery.js` files.

In the previous homework, you independently created an image gallery using event
delegation and added a modal window library via CDN to display the full-size
version of an image.

Creating galleries is a common developer task, but writing them manually every
time is too time-consuming. That’s why there are libraries that implement all
the gallery logic.

Create the same gallery, but this time using the
[**SimpleLightbox**](https://www.npmjs.com/package/simplelightbox) library,
which will fully handle image click events, opening and closing the modal
window, as well as navigating images using the keyboard.

Watch the demo video of the gallery in action.

## 🎥 Demo video

https://github.com/user-attachments/assets/d4e65d76-6ea9-4b1e-83aa-80028b419a2f

---

### Pay attention to the following details:

- You no longer need to manually set up event delegation, since the
  [**SimpleLightbox**](https://www.npmjs.com/package/simplelightbox) library
  automatically tracks clicks on gallery items. There is no need to add event
  listeners to gallery elements.
- A separate **BasicLightbox** library for creating modal windows is no longer
  required, since the modal functionality is built into the
  [**SimpleLightbox**](https://www.npmjs.com/package/simplelightbox) library.
- To install libraries, you no longer need to add CDN links to `index.html`.
  Instead, libraries are installed via **npm** in the terminal.

---

Complete this task in the `1-gallery.html` and `1-gallery.js` files. Break it
down into several subtasks:

Use the code from the previous homework and refactor it. There is no need to
write everything from scratch. For example, creating gallery elements will
remain the same. However, the event delegation and modal opening code must be
removed.

You need to slightly change the gallery card markup. Use the following template:

```html
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img class="gallery-image" src="small-image.jpg" alt="Image description" />
  </a>
</li>
```

Add the [**SimpleLightbox**](https://www.npmjs.com/package/simplelightbox)
library as a project dependency using **npm**.

To connect the library’s CSS code to the project, you need to add one more
import in addition to the one described in the documentation.

```js
// Import described in the documentation
import SimpleLightbox from 'simplelightbox';

// Additional import for styles
import 'simplelightbox/dist/simple-lightbox.min.css';
```

The next step is to initialize the library after creating and adding the gallery
elements to `ul.gallery`. To do this, review the
[**SimpleLightbox**](https://www.npmjs.com/package/simplelightbox)
documentation—first of all, the **“Usage”** and **“Markup”** sections.

After that, check the **“Options”** section in the documentation and add
captions for images using the `alt` attribute. The caption should appear at the
bottom and show up **250 milliseconds** after the modal window opens.

## What the mentor will check

- The live page displays an image gallery created from the `images` data array
- The image gallery is styled according to the layout
- Gallery data is generated dynamically in JavaScript
- There are no custom event listeners
- The **SimpleLightbox** library is connected using **npm**
- The library instance is initialized after the gallery elements are added to
  the DOM and outside of any functions
- When clicking on a gallery item, a modal window of the connected library
  opens, displaying the enlarged version of the clicked image. All basic library
  functionality works
- **250 milliseconds** after the modal window opens, the content of the `alt`
  attribute appears at the bottom as an image caption

---

## Task 2 — Feedback Form

Complete this task in the `2-form.html` and `2-form.js` files.

Add the form markup to the HTML. In the JavaScript file, write a script that
saves the values of the form fields to local storage while the user is typing.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Complete this task in the `2-form.html` and `2-form.js` files. Break it down
into several subtasks:

- Declare an object `formData` outside of any functions with the fields `email`
  and `message`, initially set to empty strings: `{ email: "", message: "" }`.

- Use event delegation to track changes in the form through the `input` event.
  Save the current values of the `email` and `message` fields into `formData`
  and write this object to local storage. Use the key
  **`"feedback-form-state"`** to store the data.

- On page load, check if there is data in local storage. If so, use it to
  populate the form and the `formData` object. If not, leave the form fields
  empty.

- Before submitting the form, make sure both form fields are filled. If any
  field (property of the `formData` object) is empty, display a message: **“Fill
  please all fields”**. If all fields are filled:
  - Log the `formData` object with the current values to the console;
  - Clear the local storage;
  - Clear the `formData` object;
  - Clear the form fields.

## What the mentor will check

- The live page displays a form with two input elements and a `submit` button
- The form is styled according to the layout
- The form listens to `input` and `submit` events
- When entering data into any form element, it is saved in local storage under
  the key **`"feedback-form-state"`**; the saved data contains no leading or
  trailing spaces
- Entering data in one form field does not delete the stored data for the other
  field
- On page reload, data from local storage is populated into the form elements;
  no `undefined` appears in form fields
- On form submission, there is a check to ensure both form fields are filled
- On form submission, if both fields are filled, the `formData` object with
  `email` and `message` and their current values is logged to the console, and
  the storage and form fields are cleared
- If, after submitting the form, you enter data into any form field, no data
  from the previous submission appears in local storage

---

**Live pag: [GitHub Pages](https://akinaru72.github.io/goit-js-hw-09/)**
