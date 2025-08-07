    const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

  document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yavaşça gelsin
    document.body.classList.add("fade-in");

    // Tüm linklere animasyon uygula
    document.querySelectorAll("a").forEach(function (link) {
      const href = link.getAttribute("href");

      // Geçerli sayfa içi anchor değilse
      if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          document.body.classList.add("fade-out");
          setTimeout(function () {
            window.location.href = href;
          }, 300); // animasyon süresi
        });
      }
    });
  });
