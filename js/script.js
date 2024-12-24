function filterProducts() {
  const category = document.getElementById("category-select").value;
  const categories = document.querySelectorAll(".category-content");
  categories.forEach((cat) => {
    if (category === "all" || cat.id === category) {
      cat.classList.add("active");
    } else {
      cat.classList.remove("active");
    }
  });
}

function searchProducts() {
  const query = document.getElementById("search-box").value.toLowerCase();
  const items = document.querySelectorAll(".category-content.active li");
  items.forEach((item) => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
}
