let market = document.querySelector("#market"),
  list = document.querySelectorAll("ul li");

function activeLink(event, link) {
  market.style.left = `${event.offsetLeft}px`;
  market.style.width = `${event.offsetWidth}px`;
  list.forEach((item) => {
    item.classList.remove("active");
    link.classList.add("active");
  });
}

list.forEach((link) =>
  link.addEventListener("click", (e) => activeLink(e.target, link))
);
