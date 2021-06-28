//funcões
function alertDismissed() {
    np++;
    if(np < perguntas.length){
      $('#pergunta').attr('src','img/'+perguntas[np]);    
      $('#display').html('');
      resposta = "";
    }else{
      $('#pergunta').attr('src','img/fim.png');    
      $('.alternativa').hide();
      $('#display').html('Fim de Jogo');
      $('#responder').html('Iniciar');      
      np=-1; //volta para o inicio
    }
}

  var resposta = "";
  var perguntas = ['casa.png','carro.png'];
  var np = 0;


  $(document).ready(function(){    
    $('#pergunta').attr('src','img/'+perguntas[np]);        
  });

  $(document).on('click','.alternativa',function(){
    resposta += $(this).html();
    navigator.notification.beep(1);
    $('#display').html(resposta);
  });

  $(document).on('click','#responder',function(){
    //caso o jogo tenha chego ao fim, aqui reinicia 
    if(np == -1){
      np = 0;
      $('#pergunta').attr('src','img/'+perguntas[np]);   
      $('#display').html('');
      $('#responder').html('Responder');       
    }else{
      //dividindo a string dos nomes das imagens
      var res = perguntas[np].split(".");     
      //pegando apenas o nome, sem a extensão e transformando em maiúsculo
      res[0].toUpperCase();
      
      if(resposta == res[0].toUpperCase()){       
        
        navigator.notification.alert(
            'Parabéns! Você acertou.',
            alertDismissed, 
            'Game', 
            'Continuar'      
        );
      }else{
        resposta ="";
        navigator.vibrate(2000);
        $('#display').html('');
      }
    }
  });

