'use strict';

let logIn = localStorage.getItem('session') === 'None';

(function() {
    let $id = function(id) {
        return document.getElementById(id);
    };

    if(logIn) {
        $('#menu').load('menu.html');

        window.addEventListener('load',  function() {
            let inputCpf = $id('input-cpf');
            let inputSenha = $id('input-senha');

            inputCpf.onfocus = function() {
                inputCpf.setAttribute('placeholder', '000.000.000-00');
            };

            inputSenha.onfocus = function() {
                inputSenha.setAttribute('placeholder', '********');
            };
        });
    }
    else
        $('#menu').load('menu-readylogin.html');
    $('#footer').load('footer.html');
})();
