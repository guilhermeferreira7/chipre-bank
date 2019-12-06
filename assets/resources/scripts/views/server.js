'use strict';
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const mysql = require('mysql');


    app.use(bodyParser.urlencoded({extended: true}));

    app.set('view engine', 'ejs');

    app.use(express.static('views'));

    app.get('/', (req, res) => {
        res.render('form.ejs');
    });

    app.post('/send', (req, res) => {
        let dados = req.body;
        if(dados.nome !== undefined)
            addRows(dados);
        res.send('Obrigado por entrar em contato.');
    });

    app.use(express.static('__dirname + \'/public\''));

    app.listen(3000, () => {
        console.log('running');
    });

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'admchipre',
    password: 'adm',
    database: 'comentarios'
});

connection.connect(function (err) {
    if(err) return console.log(err);
    console.log('connected!');
    createTable(connection);
});

function createTable(conn) {
    const sql = 'create table if not exists  clients(ID int NOT NULL AUTO_INCREMENT, Nome varchar(150) NOT NULL, CPF char(11) NOT NULL, email varchar(100) not null, opcao varchar(45), mensagem varchar(300) not null, PRIMARY KEY (ID))';

    conn.query(sql, function (error, results, fields) {
        if(error) return console.log(error);
        console.log('Table created!');
    });
}

function addRows(dados) {
    const sql = "insert into clients(Nome, CPF, email, opcao, mensagem) values ?";
    const values = [
        [dados.nome, dados.cpf, dados.email, dados.opcao, dados.mensagem]
    ];

    connection.query(sql, [values], function (error, results, fields) {
        if(error) console.log(error);
        console.log('Adicionou registros');
        connection.end();
    });
}