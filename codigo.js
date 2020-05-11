function media() {        
    var nota1 = $('#nota1').val();
    var nota2 = $('#nota2').val();
    var nota3 = $('#nota3').val();

    var media = ( parseInt(nota1) + parseInt(nota2) + parseInt(nota3) ) / 3;
     
    if (media>=6 && media<8) {
        $('#mostrar').html('<h1 class="resultado_pass">você passou, sua média foi: '+media+'</h1>');

    }else if (media>=8) {
        $('#mostrar').html('<h1 class="resultado_pass">parabens, sua média foi: '+media+'</h1>');
        $('#mostrar').css('color','#00FF7F');
    }else if (media<=5) {
        $('#mostrar').html('<h1 class="resultado_rep">Reprovou, sua média foi: '+media+'</h1>');
        $('#mostrar').css('color','#8B0000');
    }
    
    media = $('#valor');    
}