document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      const items = document.querySelectorAll('.blog-item');
      const icons = document.querySelectorAll('.bi-arrow-bar-right');
      const img = document.querySelector('#image');

      items.forEach((item) => {
          item.addEventListener('click', () => {
              // Remove a classe active do item padrão
              document.querySelector('.blog-item.active').classList.remove('active');

              // Adiciona a classe selected no item clicado
              item.classList.add('active');

              // Altera a imagem
              const id = item.id;
              img.setAttribute('src', `./src/assets/images/${id}.webp`);
          });
      });
  }, 1000);
});