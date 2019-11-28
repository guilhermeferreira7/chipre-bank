'use strict';
let $id = function(id) {
    return document.getElementById(id);
};

(function() {
    $('select').formSelect();
})();

function validaPadraoCampo(campo, mensagemErro) {
    campo.addEventListener('invalid', function() {
        if (campo.validity.patternMismatch) {
            campo.setCustomValidity(mensagemErro);
        } else {
            campo.setCustomValidity('');
        }
    });
}

window.addEventListener('load', function() {
    let nome = $id('input-nome');
    let cpf = $id('input-cpf-novo');    
    let endereco = $id('input-endereco');    
    let email = $id('input-email');    
    let select = $id('select-tipo');
    let telefone = $id('input-telefone');    
    let senha = $id('input-senha-cadastro');
    let senhaRepetida = $id('input-senha-repetida');
    
    validaPadraoCampo(nome, 'O nome deve iniciar com maiúscula e conter sobrenome!');
    validaPadraoCampo(cpf, 'Formato de CPF inválido!');
    validaPadraoCampo(endereco, 'O endereço deve estar no formato "Rua|Av. nome da rua, 10"');
    validaPadraoCampo(email, 'Email inválido!');
    validaPadraoCampo(telefone, 'O telefone deve estar no formato "(42) 99999-0000"');
    validaPadraoCampo(senha, 'A senha deve ter de 4 a 8 caracteres');

    senha.onblur = function() {
        senhaRepetida.setAttribute('pattern', senha.value);
    };

    $id('criar-conta').addEventListener('submit', function(e) {
        if (select.options[0].selected) {
            window.alert('Por favor, selecione o tipo de conta!');
            e.preventDefault();
        }
    });
});

