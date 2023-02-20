// returns collection of child elements of specified class
const forwards = document.querySelectorAll(".forward");
const backwards = document.querySelectorAll(".backward");
// slidechanger
function changeSlide(e, direction) {
  let currentSlide = e.target.parentElement.querySelector(".current");
  if (direction === 'next') {
    imageSeries = e.target.previousElementSibling.previousElementSibling
    nextSlide = currentSlide.nextElementSibling 
  } else {
    imageSeries = e.target.previousElementSibling;
    nextSlide = currentSlide.previousElementSibling;
  }
  if (nextSlide) {
    imageSeries.style.right = +(imageSeries.style.right.slice(0, -2)) + (direction === 'next' ? 250 : -250) + "px";
    nextSlide.classList.add("current");
  } else {
    if(direction === 'next') {
      imageSeries.style.right = 0
      currentSlide.parentElement['firstElementChild'].classList.add("current")
    } else {
      imageSeries.style.right = 250 * (currentSlide.parentElement.children.length - 1) + "px";
      currentSlide.parentElement['lastElementChild'].classList.add("current")
    }
  }
  currentSlide.classList.remove("current");
}
// passing the event object on mouseclick to the function
forwards.forEach(forward => {
  forward.addEventListener("click", (e) => changeSlide(e, 'next'));
});

backwards.forEach(backward => {
  backward.addEventListener("click", (e) => changeSlide(e, 'prev'));
});
