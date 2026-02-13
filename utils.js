function renderCombo(title, price, courses) {
  const template = document
    .querySelector("#combo-template")
    .content.querySelector(".combo");
  const element = template.cloneNode(true);
  const container = document.querySelector(".combos-list");

  element.querySelector(".combo__title").textContent = title;
  element.querySelector(".combo__price").textContent = `$${price}`;

  const coursesList = element.querySelector(".combo__courses");

  coursesList.innerHTML = "";

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = course;
    li.classList.add("combo__course-item");
    coursesList.append(li);
  });

  container.append(element);
}

function renderCard(title, description, price, imageUrl) {
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const element = template.cloneNode(true);
  const container = document.querySelector(".menu-list");

  const img = element.querySelector(".card__image");
  img.src = imageUrl;
  img.alt = title;

  element.querySelector(".card__title").textContent = title;
  element.querySelector(".card__description").textContent = description;
  element.querySelector(".card__price").textContent = `$${price}`;

  container.append(element);
}
