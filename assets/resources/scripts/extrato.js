'use strict';

let accountMov = new Movimentacoes(localStorage.getItem('session'));
let thisMovs = accountMov.thisMovs;

if(thisMovs.length > 0)
    for(let mov of thisMovs)
            document.getElementById('list-extrato').innerHTML += `<li> ${mov} </li>`;

document.getElementById('download-ext').addEventListener('click', function () {
    open('http://localhost:3000/');
});