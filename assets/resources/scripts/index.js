'use strict';
window.addEventListener('load', ()=> {

    let linkCriarConta = document.querySelector('h1 a');
    let imgPropaganda = document.querySelector('#img-propaganda');
    
    linkCriarConta.onmouseover = function() {
      $('#abre-conta-link').css('text-decoration',  'underline');
      $('#abre-conta-link').addClass('white-text green darken-3');
    };

    linkCriarConta.onmouseleave = function() {
        $('#abre-conta-link').css('text-decoration', 'none');
        $('#abre-conta-link').removeClass('white-text green darken-3');
    };

    (function mudaPropaganda() {
        let link1 = 'assets/resources/images/propaganda-1.jpg';
        let link2 = 'assets/resources/images/propaganda-2.jpg';
        let link3 = 'assets/resources/images/propaganda-3.jpg';

        if (imgPropaganda.getAttribute('src') === link1) {
            imgPropaganda.setAttribute('src', link2);
        } else if (imgPropaganda.getAttribute('src') === link2) {
            imgPropaganda.setAttribute('src', link3);
        } else {
            imgPropaganda.setAttribute('src', link1);
        }

        setTimeout(mudaPropaganda, 4000);
    })();

});

