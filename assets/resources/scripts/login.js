'use strict';

document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    let cpf = document.getElementById('input-cpf').value;
    let senhaInput = document.getElementById('input-senha').value;
    let accounts = new Map(JSON.parse(localStorage.getItem('accounts')));

    if(accounts.get(cpf) !== undefined && accounts.get(cpf).senha === senhaInput) {
        localStorage.setItem('session', cpf);
        window.location.replace('menu-user.html');
    } else
       alert('Não foi possível localizar uma conta com esse CPF e senha');
});