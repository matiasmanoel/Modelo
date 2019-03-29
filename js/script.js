// INICIANDO JQUERY

$(function(){

    //abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e){
        // isso previne que quando cliquemos no local, no menu, não redirecione para nenhum lugar, n aconteca nada.
        e.preventDefault();

        $('.nav').toggleClass('active');

    });

    //FIXAR HEADER
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });
});