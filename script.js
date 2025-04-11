document.addEventListener('DOMContentLoaded', () => {
// Show the scroll button
  window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block"; 
    } else {
      scrollTopBtn.style.display = "none"; 
    }
  };
});
// Scroll the page to the top
function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
}

// Cat following cursor
const cat = document.getElementById('cat');
document.addEventListener('mousemove', (e) => {
  // Show the cat if hidden
  cat.style.display = 'block';
  // Update the position of the cat to follow the cursor
  cat.style.left = `${e.pageX}px`;
  cat.style.top = `${e.pageY}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const itemFade = document.querySelectorAll(".fade-in");
  const scrollWatcher = new IntersectionObserver((things, chill) => {
    things.forEach(thing => {
      if (thing.isIntersecting) {
        thing.target.classList.add("visible");
        chill.unobserve(thing.target);
      }
    });
  }, { threshold: 0.1 });
  itemFade.forEach(item => scrollWatcher.observe(item));
});
