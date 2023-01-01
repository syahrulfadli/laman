const searchForm = document.getElementById("search-form");
const searchIcon = document.getElementById("searchIcon");
const closeIcon = document.getElementById("closeIcon");
function searchToggle() {
  closeIcon.classList.toggle("hidden")
  searchIcon.classList.toggle("hidden")
  searchForm.classList.toggle("hidden")
}