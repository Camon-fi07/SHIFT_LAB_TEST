const searchBtn = document.querySelector(".search__button");
const searchElement = document.getElementById("tableInput");
const table = document.querySelector(".table__content");
const countElement = document.querySelector(".search__count");
const selectElement = document.getElementById("tableOptions");
searchBtn.addEventListener("click", () => {
  let count = 0;
  const elements = table.children;
  const selectedIndex = selectElement.selectedIndex;
  for (let i = 1; i < elements.length; i++) {
    const element = elements[i].children[selectedIndex].innerHTML.toLowerCase();
    if (element.includes(searchElement.value.toLowerCase())) {
      count++;
      elements[i].classList.add("found");
    } else elements[i].classList.remove("found");
  }
  countElement.innerHTML = count
    ? `Количество совпадений: ${count}`
    : "Ничего не найдено";
});
