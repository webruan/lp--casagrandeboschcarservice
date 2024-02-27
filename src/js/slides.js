document.addEventListener("DOMContentLoaded", function() {
  const images = [
      "image1",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6"
  ];
  
  const slidesContainer = document.getElementById("slides");
  const dotsContainer = document.getElementById("dots");
  let currentIndex = 0;
  
  // Cria os slides
  images.forEach((image, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      if (index === currentIndex) {
          slide.classList.add("open");
      }
  
      const img = document.createElement("img");
      img.src = `./src/assets/images/${image}.webp`;
      img.alt = "Centro automotivo - Casagrande Bosch Car Service"
  
      slide.appendChild(img);
      slidesContainer.appendChild(slide);
  });
  
  // Cria os pontos de navegação
  images.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === currentIndex) {
          dot.classList.add("open");
      }
  
      dot.addEventListener("click", () => {
          // Remove a classe 'active' do slide atual e do ponto de navegação atual
          slidesContainer.querySelector(".open").classList.remove("open");
          dotsContainer.querySelector(".open").classList.remove("open");
  
          // Adiciona a classe 'active' ao slide e ao ponto de navegação correspondente ao clique
          slidesContainer.children[index].classList.add("open");
          dot.classList.add("open");
  
          currentIndex = index;
      });
  
      dotsContainer.appendChild(dot);
  });    

  // Adicione eventos de clique para as setas de navegação
  const prevArrow = document.getElementById("prev");
  const nextArrow = document.getElementById("next");

  prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  });

  nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  });

  function updateSlide() {
    slidesContainer.querySelector(".open").classList.remove("open");
    dotsContainer.querySelector(".open").classList.remove("open");
    slidesContainer.children[currentIndex].classList.add("open");
    dotsContainer.children[currentIndex].classList.add("open");
  }
});
