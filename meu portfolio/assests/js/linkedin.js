document.addEventListener("DOMContentLoaded", () => {
  const linkedin = document.querySelector(".linkedin-fixed");

  if (!linkedin) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      linkedin.classList.add("show");
    } else {
      linkedin.classList.remove("show");
    }
  });
});



document.querySelector(".linkedin-fixed")?.classList.add("show");
