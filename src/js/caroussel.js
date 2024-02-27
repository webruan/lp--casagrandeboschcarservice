let currentVisibleIndex1 = 0;
let currentVisibleIndex3 = 0;

function toggleItems(direction) {
  const itemsInRow1 = document.querySelectorAll('#row-01 .item');
  const itemsInRow3 = document.querySelectorAll('#row-03 .item');

  // Atualiza o srcset do terceiro source das imagens na primeira linha
  for (let i = 0; i < itemsInRow1.length; i++) {
    const sourceElements = itemsInRow1[i].querySelectorAll('source');
    if (sourceElements.length >= 3) {
      sourceElements[2].setAttribute('srcset', './src/assets/images/mobile/arrow-01.webp');
    }
  }

  // Atualiza o srcset do terceiro source das imagens na terceira linha
  for (let i = 0; i < itemsInRow3.length; i++) {
    const sourceElements = itemsInRow3[i].querySelectorAll('source');
    if (sourceElements.length >= 3) {
      sourceElements[2].setAttribute('srcset', './src/assets/images/mobile/arrow-04.webp');
    }
  }


  // Esconde os itens atuais
  itemsInRow1[currentVisibleIndex1].style.display = 'none';
  itemsInRow3[currentVisibleIndex3].style.display = 'none';

  if (direction === 'next') {
    // Mostra os próximos itens
    currentVisibleIndex1 = (currentVisibleIndex1 + 1) % itemsInRow1.length;
    currentVisibleIndex3 = (currentVisibleIndex3 + 1) % itemsInRow3.length;
  } else if (direction === 'prev') {
    // Mostra os itens anteriores
    currentVisibleIndex1 = (currentVisibleIndex1 - 1 + itemsInRow1.length) % itemsInRow1.length;
    currentVisibleIndex3 = (currentVisibleIndex3 - 1 + itemsInRow3.length) % itemsInRow3.length;
  }

  itemsInRow1[currentVisibleIndex1].style.display = 'block';
  itemsInRow3[currentVisibleIndex3].style.display = 'block';
}

// Event listeners para as setas
document.getElementById('prevItem').addEventListener('click', () => toggleItems('prev'));
document.getElementById('nextItem').addEventListener('click', () => toggleItems('next'));

