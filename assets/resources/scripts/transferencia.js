'use strict';

let cpf = localStorage.getItem('session');

document.getElementById('form-transferencia').addEventListener('submit', function (e) {
    e.preventDefault();

    let valor = parseFloat($('#input-valor').val());
    let cpfDestino = document.getElementById('input-cpf-credito').value;

    let contaDestino = new Accounts(cpfDestino);

    if(contaDestino.thisAccount !== undefined) {

        if(contaDestino.thisAccount.cpf !== cpf) {

            let transf = new ContasManager(cpf, cpfDestino);
            transf.save(valor);

            let hist = new HistoricoManager(cpf, cpfDestino);
            hist.save(valor);

            window.location.replace('menu-user.html');
            alert('Transferência efetuada com sucesso.');
        } else
            alert('Você não pode fazer um depósito para sí mesmo.');

    } else
        alert('Conta destino não existe.');
});