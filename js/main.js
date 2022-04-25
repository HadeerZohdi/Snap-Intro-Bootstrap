let navItems = document.querySelectorAll(".nav-link");
console.log(navItems);

navItems.forEach(function (item, index) {
  item.onclick = function () {
    navItems.forEach(function (_item, _index) {
      if (index !== _index) _item.classList.remove("active");
    });
    item.classList.add("active");
  };
});
