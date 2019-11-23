'use strict';
(function() {
    $('#menu').load('menu.html');
    $('#footer').load('footer.html');
    
    let $id = function(id) {
        return document.getElementById(id);
    };

    function validaPadrao(id, mensagem) {
        id.addEventListener('invalid', function() {
            if (id.validity.patternMismatch) {
                id.setCustomValidity(mensagem);
            } else {
                id.setCustomValidity('');
            }
        });
    }

    window.addEventListener('load',  function() {
        let inputCpf = $id('input-cpf');
        let inputSenha = $id('input-senha');

        validaPadrao(inputCpf, 
            'CPF invalido, precisa estar no padrao "000.000.000-00" ou somente numeros!');
        validaPadrao(inputSenha,
            'A senha não pode ter acentos, deve ter pelo menos um número e uma letra maiúscula!');
        
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
