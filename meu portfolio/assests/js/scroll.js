const profile = document.querySelector('.right img');

window.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  profile.style.transform = `translate(${x}px, ${y}px)`;
});
