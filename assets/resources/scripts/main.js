'use strict';
(function() {
    $('#menu').load('menu.html');
    $('#footer').load('footer.html');
    
    let $id = function(id) {
        return document.getElementById(id);
    };


    window.addEventListener('load',  function() {
        let inputCpf = $id('input-cpf');
        let inputSenha = $id('input-senha');

        inputCpf.addEventListener('invalid', function() {
            if (inputCpf.validity.patternMismatch) {
                inputCpf.setCustomValidity('CPF invalido!');
            } else {
                inputCpf.setCustomValidity('');
            }
        });        
        
        inputCpf.onfocus = function() {
            inputCpf.setAttribute('placeholder', '000.000.000-00');
        };

        inputSenha.onfocus = function() {
            inputSenha.setAttribute('placeholder', '********');
        };

        document.forms[0].onsubmit = function(e) {
            
        };
    });

})();
