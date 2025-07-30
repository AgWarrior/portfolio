document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const faders = document.querySelectorAll('.fade-in');
const options = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');
});
