'use strict';

window.addEventListener('load', function() {
    let account = new Map(JSON.parse(localStorage.getItem('accounts')));
    let thisAccount = account.get(localStorage.getItem('session'));
    let userSaldo = parseFloat(thisAccount.saldo).toFixed(2);

    userSaldo = accounting.formatNumber(userSaldo, 2, '.');
    
    let numeros = userSaldo.split('');
    numeros[numeros.length - 3] = ',';

    userSaldo = numeros.join('');

    // userSaldo = userSaldo + '';

    // if(parseFloat(thisAccount.saldo) > 1000)
    //     userSaldo = userSaldo.replace('.', '-');

    // if(userSaldo.includes('.'))
    //    userSaldo = userSaldo.replace('.', ',');

    // userSaldo = userSaldo.replace('-', ',');


    $('#menu').load('menu-readylogin.html');

    $('#saldo').text(`Saldo: R\$${userSaldo}`);
    $('#name-user').text('seja bem-vindo,  ' + thisAccount.nome);
});