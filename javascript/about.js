// Cycles images by moving the first image to the end every 2 seconds using appendChild
/*
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider-content');
  if (!slider) return;

  setInterval(() => {
    const firstImg = slider.querySelector('img');
    if (firstImg) {
      slider.appendChild(firstImg);
    }
  }, 2000);
});
*/








// Cycles images by moving the first image to the end every 2 seconds using appendChild with smooth transition

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider-content');
  if (!slider) return;

  // Ensure slider has relative position for transform
  slider.style.transition = "transform 0.5s";
  slider.style.willChange = "transform";

  let isSliding = false;

  setInterval(() => {
    if (isSliding) return;
    isSliding = true;

    // Slide left by one image width
    const firstImg = slider.querySelector('img');
    const imgWidth = firstImg.offsetWidth;

    slider.style.transform = `translateX(-${imgWidth}px)`;

    setTimeout(() => {
      // Move first image to end and reset transform
      slider.appendChild(firstImg);
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
      // Force reflow to apply the reset transform before re-enabling transition
      void slider.offsetWidth;
      slider.style.transition = "transform 0.5s";
      isSliding = false;
    }, 500); // Match the transition duration
  }, 2000);
});




