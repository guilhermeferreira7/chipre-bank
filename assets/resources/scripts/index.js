'use strict';
window.onload = function() {

    let linkCriarConta = document.querySelector('h1 a');
    
        linkCriarConta.onmouseover = function() {
            linkCriarConta.classList.remove('green-text', 'text-darken-3');
            linkCriarConta.classList.add('green', 'white-text','darken-3');
            
        };
        
        linkCriarConta.onmouseleave = function() {
            linkCriarConta.classList.remove('green');
            linkCriarConta.classList.remove('white-text');
            linkCriarConta.classList.add('green-text', 'text-darken-3');
        };
}