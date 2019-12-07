'use strict';
let cpf = localStorage.getItem('session');
let conta = new Accounts(cpf);

$('#info').click(() => {
    let dados = '';
    conta = conta.thisAccount;
    
    dados += `Nome: ${conta.nome}`;
    dados += `\nCPF: ${conta.cpf}`;
    dados += `\nEndereço: ${conta.endereco}`;
    dados += `\nEmail: ${conta.email}`;
    dados += `\nTelefone: ${conta.telefone}`;
    dados += `\nSaldo: ${conta.saldo}`;

    window.alert(`Dados cadastrados:\n${dados}`);
});

$('#input-telefone').mask('(00) 00000-0000');

function changePhoneMask() {
    let inpLenght = $('#input-telefone').val().length;

    if(inpLenght < 15){
        $('#input-telefone').mask('(00) 0000-00009');
    } else if (inpLenght === 15) {
        $('#input-telefone').mask('(00) 00000-0000');
    }
}

$('#input-telefone').blur(()=> {
    changePhoneMask();
});

$('#input-telefone').focus(()=> {
    changePhoneMask();
});


$('#form-config').submit((e) => {
    e.preventDefault();
    
    let emailNovo = $('#input-email-novo').val();
    let telefoneNovo = $('#input-telefone').val();
    let senhaNova = $('#input-senha-nova').val();
    let senhaConta = $('#input-senha-config').val();

    function mudaEmail() {
        conta.thisAccount.email = emailNovo;
    }
    
    function mudaSenha() {
        conta.thisAccount.senha = senhaNova;
    }
    
    function mudaTelefone() {
        conta.thisAccount.telefone = telefoneNovo;
    }
    
    if (conta.thisAccount.senha === senhaConta) {
        let novasInformações = '';
        if (emailNovo !== '') {
            mudaEmail();
            novasInformações += `Novo email: ${emailNovo}\n`;
        }
        
        if (telefoneNovo !== '') {
            mudaTelefone();
            novasInformações += `Novo telefone: ${telefoneNovo}\n`;
        }
        
        if (senhaNova !== '') {
            mudaSenha();
            novasInformações += `Nova Senha: ${senhaNova}\n`;
        }

        conta.save();

        window.alert(`Conta alterada com sucesso!\nSuas novas informações são:\n${novasInformações}`);
        window.location.replace('menu-user.html');

    } else {
        window.alert('Senha errada! Não foi possível alterar as informações');
    }
    
});