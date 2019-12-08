'use strict';

let cpf = localStorage.getItem('session');
let account = new Accounts(cpf);
let mov = new Movimentacoes(cpf);

$('#form-deposito').submit((e) => {
    e.preventDefault();
    let deposito = parseFloat(document.querySelector('#input-valor').value);

    account.thisAccount.saldo += deposito;
    mov.insertMovimentacaoDeposito(deposito, account.thisAccount);

    account.save();

    alert('Depósito efetuado com sucesso!');
    window.location.replace('menu-user.html');
});