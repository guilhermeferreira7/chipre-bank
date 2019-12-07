'use strict';

let Conta = function(nome, cpf, endereco, email, telefone, senha) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;
    this.saldo = 0.0;
};

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
    let telefone = $id('input-telefone');    
    let senha = $id('input-senha-cadastro');
    let senhaRepetida = $id('input-senha-repetida');
    
    validaPadraoCampo(nome, 'O nome deve iniciar com maiúscula e conter sobrenome!');
    validaPadraoCampo(cpf, 'Formato de CPF inválido!');
    validaPadraoCampo(endereco, 'O endereço deve estar no formato "Rua|Av. nome da rua, 10"');
    validaPadraoCampo(email, 'Email inválido!');
    validaPadraoCampo(telefone, 'O telefone deve estar no formato "(42) 99999-0000"');
    validaPadraoCampo(senha, 'A senha deve ter de 4 a 8 caracteres');

    let $telefone = $('#input-telefone');

    $('#input-cpf-novo').mask('000.000.000-00');

    $telefone.mask('(00) 00000-0000');

    function changePhoneMask() {
        let inpLenght = $telefone.val().length;

        if(inpLenght < 15){
            $telefone.mask('(00) 0000-00009');
        } else if (inpLenght === 15) {
            $telefone.mask('(00) 00000-0000');
        }
    }

    $telefone.blur(()=> {
        changePhoneMask();
    });

    $telefone.focus(()=> {
        changePhoneMask();
    });

    senha.onblur = function() {
        senhaRepetida.setAttribute('pattern', senha.value);
    };


    $id('criar-conta').onsubmit = function(e) {
        e.preventDefault();

        let conta = new Conta(nome.value, cpf.value, endereco.value, email.value, telefone.value, senha.value);
        let accounts = new Accounts(cpf.value);
        let movs = new Movimentacoes(cpf.value);

        if(accounts.thisAccount === undefined) {
            let depositoInicial = 0.0;
            if(confirm('Conta aberta com sucesso!\nDeseja realizar um deposito inicial?')) {
                depositoInicial = prompt('Digite o valor do deposito. Ele será creditado na sua conta imediatamente.', '0,00');
                if(depositoInicial.includes(',')) {
                    depositoInicial = depositoInicial.replace(',', '.');
                    depositoInicial = parseFloat(depositoInicial);
                }
            }
            if(isNaN(depositoInicial)) {
                alert('Deposito inicial inválido. Faça um depósito pelo menu do usuário.');
                depositoInicial = 0.0;
            }

            conta.saldo = parseFloat(depositoInicial);

            accounts.thisAccount = conta;
            accounts.save();
            movs.newAccount(conta);

            window.location.replace('index.html');
        } else {
            alert('Já existe uma conta com esse CPF. Por favor, insira seu CPF e sua senha na parte de login.');
        }
    };
});

