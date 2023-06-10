$(document).ready(function(){
$('header button').click(function(){
    $('form').slideDown(); //faz com que a barra de adicionar a imagem desça //
})

$('#botao-cancelar').click(function(){
    $('form').slideUp(); 
})

$('form').on('submit', function(e){
    e.preventDefault(); 
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); 
    const novoItem = $('<li style="display:none"></li>'); 
    $(`<img src = "${enderecoDaNovaImagem}" />`).appendTo(novoItem)
    $(`
        <div class="overlay-imagemk-link">
        <a href="${enderecoDaNovaImagem}" target = "_blank" tittle= "Ver imagem em tamanho real"
        </a>
        </div>
    `).appendTo(novoItem); 
    $(novoItem).appendTo('ul'); 
    $(novoItem).fadeIn(5000);
    $('#endereco-imagem-nova').val('')
})
})