//////////////////////
//TopBar/Open/Close//
////////////////////
function fechar_sidebar(){
  $('.about_container').removeClass('open');
  setTimeout(function(){
    $('.about_container').animate({'top': '-25%'}, 800, function(){
      $('.push_me').animate({"top":"98%"},750);
      $('.blackscreen').fadeOut();
    });//fim da call back
  },500);//fim da função principal
};
$('.blackscreen').click(function(){fechar_sidebar();});
$('.push_me').click(function(){
  if ($('.about_container').hasClass('open')){
    fechar_sidebar(); 
  }else{
    $('.about_container').addClass('open');
    setTimeout(function(){
      $('.push_me').animate({'top': '0'}, 750, function(){
        $('.about_container').animate({'top': '50%'}, 800, function(){
          $('.blackscreen').fadeIn();
        });//Segunda CallBack
      });//Primeira CallBack
    },500);//fim da função principal
  };//Fim else
});//FIm Tudo  
///////////////
//Animação X//
/////////////
$('#btn').click(function(){
    $(this).fadeOut();
    fechar_sidebar();
    $(this).fadeIn(3500);
});
//////////////////////
//H1 & H2 Movimentos//
/////////////////////
$(document).ready(function() {
  setTimeout( function(){
    $('#h2off').fadeOut('slow');
    setTimeout(function(){
      $('#h1sobe').animate({top:'-25%'}, 2000);
    },300); //Tempo para o h1 subir
    setTimeout(function(){
      $('.nome_container').fadeIn('slow');
    },1000); //Tempo para aparecer o input
  },5000);   //Tempo para correr tudo
});
//////////////////////
//ANIMAÇÃO BLINK_MF//
////////////////////
$(window).click(function(){
  if($('#nome_intro').val() == ''){
    $('#nome').addClass('blink_MF');
  }
});//Ver se o nome form tem alguma coisa para o Blink_MF
$('#nome_intro').on('input change',function(){
  if ($('#nome_intro').val() == '') { 
    $('#seta_enviar').css('opacity','0.4');
    $('#nome').addClass('blink_MF');
  }else{
    $('#seta_enviar').css('opacity','1');
    $('#nome').removeClass('blink_MF');
  }
});
///////////////////
//Submit e forms//
/////////////////
$('#nome_form').on('submit',function(i){
  i.preventDefault();
  $('.start span').html( $('#nome_intro').val());
  $('.fish').animate({'top':'9em'});
  var nome = $('#nome_intro').val();
  setTimeout(function(){
    $('.hideall').fadeOut('slow');
  },500);//tempo para o fade
  setTimeout(function(){
    $('.landing').animate({'height':'35vh'},2000, function(){
        $('.showall').fadeIn('slow');
    });//end call back
  },800);//tempos para css
});
////////
//CTA//
//////
$('.intro_cta').click(function(){
  $('.landing_container').fadeOut();
  $('.quiz_container').fadeIn();
  $('.quiz').fadeIn();
  $('.quiz').css({'display':'grid'});
  $('.container').css({'display':'none'});
});//Fim click CTA
//////////////
//Perguntas//
////////////
var p_activa = 0;
var pontuacao = 0;
var ponto_ganho = 0;
$('.resposta').click(function(){
  ponto_ganho = $(this).data('valor');
  pontuacao = pontuacao + ponto_ganho;
  p_activa = p_activa + 1;
  if (p_activa >= 10 && pontuacao <= 12) {
    $('.quiz_container').animate({'height':'0','top':'50%','opacity':'0'},3000, function(){
         $('.alldeath').fadeIn(100, function(){
          $('body').css({'background-image': 'url(assets/img/morto.svg)'});
          setTimeout(function(){
            $('.death_resultado').fadeOut();
            $('.death_final').fadeIn();
            $('.death_final h1 span').html( pontuacao);
          },4000);
        });//End segunda callback
      });//End callback
    $('.fish').animate({'top':'30em'});
  } else if (p_activa >= 10) {
    $('.quiz_container').animate({'height':'0','top':'50%','opacity':'0'},3000, function(){
      $('.resultado_container').fadeIn(100, function(){
        $('body').css({'background-image': 'url(assets/img/meu_bg.svg)'});
        setTimeout(function(){
          $('.resultado_pre').fadeOut();
          $('.resultado_100').fadeIn();
          $('.resultado_100 h1 span').html( pontuacao);
        },4000);
      });//End segunda callback
    });//End callback
    $('.fish').animate({'top':'30em'});
  }else{
    $('.pergunta_activa').fadeOut();
    $('.pergunta_activa').removeClass('pergunta_activa');
    $('.pergunta'+p_activa).addClass('pergunta_activa');
    $('.pergunta_activa').fadeIn();
}
}); // Soma os pontos
/*$('.voltar').click(function(){
  pontuacao = pontuacao - ponto_ganho;
  $('.pergunta_activa').fadeOut();
  p_activa = p_activa - 1
  $('.pergunta'+p_activa).addClass('pergunta_activa');
  $('.pergunta_activa').fadeIn();
});//Retirar os pontos quando volta atras*/
//////////////
//REDO QUIZ//
////////////

$('.partilha_redo img').click(function(){
   p_activa = 0;
   pontuacao = 0;
   ponto_ganho = 0;
  $('.resultado_container').fadeOut(function(){
    $('.alldeath').fadeOut();
    $('.death_final').css({'display':'none'});
    $('.death_final').fadeOut();
    $('.resultado_100').fadeOut();
    $('.quiz_container').animate({'height':'100vh','top':'0','opacity':'1'});
    $('.quiz_container').fadeIn();
    $('.quiz').fadeIn();
    $('.quiz').css({'display':'grid'});
  });//end callback
});