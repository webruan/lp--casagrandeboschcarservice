$(document).ready(function(){
  $('p.copy-it').click(function(){

    var text = $(this).get(0)
    var selection = window.getSelection();
    var range = document.createRange();
    
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');

    const copiedText = text.textContent;

    // Exibir mensagem de "copiado" com o texto entre aspas
    window.alert(`Texto '${copiedText}' copiado!`);
  })
});
