// selecione o elemento que deseja carregar
const heroSection = document.getElementById('hero');

// função que verifica se o elemento está visível na tela
function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  return (vertInView && horInView);
}

// função que carrega a seção quando o usuário chegar nela
function loadSection() {
  if (isElementVisible(heroSection)) {
    section_03_img_01 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-01.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-01.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-01.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-01.webp" alt="Linha decoração">
      </picture>
    `;

    section_03_img_02 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-02.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-02.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-02.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-02.webp" alt="Linha decoração">
      </picture>
    `;

    section_03_img_03 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-03.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-03.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-03.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-03.webp" alt="Linha decoração">
      </picture>
    `;

    section_03_img_04 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/car-services.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/car-services.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/car-services.webp">
        <img loading="lazy" src="./src/assets/images/desktop/car-services.webp" alt="Jetta branco">
      </picture>
    `;

    section_03_img_05 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-04.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-04.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-04.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-04.webp" alt="Linha decoração">
      </picture>
    `;

    section_03_img_06 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-05.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-05.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-05.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-05.webp" alt="Linha decoração">
      </picture>
    `;

    section_03_img_07 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/arrow-06.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/arrow-06.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/arrow-06.webp">
        <img loading="lazy" src="./src/assets/images/desktop/arrow-06.webp" alt="Linha decoração">
      </picture>
    `;

    footer_img_01 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/logo.webp">
        <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/logo.webp">
        <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/logo.webp">
        <img loading="lazy" src="./src/assets/images/desktop/logo.webp" alt="Casagrande Bosch Car Service Logo">
      </picture>
    `;

    icons = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" integrity="sha512-ZnR2wlLbSbr8/c9AgLg3jQPAattCUImNsae6NHYnS9KrIwRdcY9DxFotXhNAKIKbAXlRnujIqUWoXXwqyFOeIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`
  };
 
  document.getElementById('section-03-img-01').innerHTML = section_03_img_01;  
  document.getElementById('section-03-img-02').innerHTML = section_03_img_02;  
  document.getElementById('section-03-img-03').innerHTML = section_03_img_03;  
  document.getElementById('section-03-img-04').innerHTML = section_03_img_04;  
  document.getElementById('section-03-img-05').innerHTML = section_03_img_05;  
  document.getElementById('section-03-img-06').innerHTML = section_03_img_06;  
  document.getElementById('section-03-img-07').innerHTML = section_03_img_07;  
  document.getElementById('footer-img-01').innerHTML = footer_img_01;  
  document.getElementById("iframe").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.134542392183!2d-46.56072852512158!3d-23.63535227874907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cd4c6680a7d%3A0x1556ae23403f5e86!2sAv.%20Pres.%20Kennedy%2C%202653%20-%20Santa%20Paula%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009561-200!5e0!3m2!1spt-BR!2sbr!4v1683119956038!5m2!1spt-BR!2sbr";
  document.getElementById('icons').innerHTML = icons;  
  
  window.removeEventListener('scroll', loadSection);
}
  
// adicione um evento de scroll no objeto window para chamar a função de carga da seção
window.addEventListener('scroll', loadSection);