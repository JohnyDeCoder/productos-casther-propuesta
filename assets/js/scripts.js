$(document).ready(function () {
  $("#header").load("../header.html", function () {
    const title = document.title;

    const navItemsId = {
      Inicio: "#nav-home",
      Nosotros: "#nav-about",
      Productos: "#nav-products",
    };

    for (const [key, value] of Object.entries(navItemsId)) {
      if (title.includes(key)) {
        modifyNavItem(value, title);
      }
    }
  });

  $("#footer").load("../footer.html");
});

function modifyNavItem(idNavItem, title) {
  const navItemElement = $(idNavItem);
  navItemElement.addClass("active");
  navItemElement.attr("aria-current", "page");

  const dropdownItems = navItemElement.parent().find(".dropdown-item");
  dropdownItems.each(function (index, element) {
    const dropdownItem = $(element);

    if (title.includes(dropdownItem.text())) {
      dropdownItem.addClass("active");
    }
  });
}
