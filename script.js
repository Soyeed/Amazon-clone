const imgs = document.querySelectorAll(" .header-slider ul img");
const prev_btn = document.querySelector(" .control_prev");
const next_btn = document.querySelector(" .control_next");

/*frist image */
let n = 0;
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    //for loop//
    imgs[i].style.display = "none";
  }c
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", () => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});
next_btn.addEventListener("click", () => {
  if (n < imgs.length - 1) {
    n++;
  } else { 
    n = 0;
  }
  changeSlide();
});

// Horizontal Scrollbar

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
