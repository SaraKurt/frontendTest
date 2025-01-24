const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function getVisibleItems() {
  if (window.matchMedia("(max-width: 576px)").matches) {
      return 1; // 1 item visible for small smartphones
  } else if (window.matchMedia("(max-width: 768px)").matches) {
      return 2; // 2 items visible for smartphones
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
      return 3; // 3 items visible for tablets
  } else {
      return 4; // 4 items visible for desktops
  }
}
// function to update the carousel's position
function updateCarousel() {
  const visibleItems = 4; // 4 items visible at a time
  const itemWidth = items[0].offsetWidth;
  const maxIndex = Math.ceil(items.length / visibleItems) - 1;
  track.style.transform = `translateX(-${currentIndex * visibleItems * itemWidth}px)`;

  // disable buttons at start or end
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= maxIndex;
}
// move right
nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});
//move left
prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});
// initialize carousel
updateCarousel();
// recalculate on window resize
window.addEventListener('resize', updateCarousel);

// navbar responsivity
function toggleMenu() {
  const rightNavbar = document.querySelector('.right-navbar');
  const navbarBottom = document.querySelector('.navbar-bottom');
  rightNavbar.style.display = rightNavbar.style.display === 'flex' ? 'none' : 'flex';
  navbarBottom.style.display = navbarBottom.style.display === 'flex' ? 'none' : 'flex';
}