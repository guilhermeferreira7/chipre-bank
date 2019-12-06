class HistoricoManager {
    constructor(cpfAtual, cpfDestino) {
        this.movs = new Map(JSON.parse(localStorage.getItem('movs')));
        this.contaAtual = this.movs.get(cpfAtual);
        this.contaDestino = this.movs.get(cpfDestino);
        this.now = new MyDate();
        this.contas = new Map(JSON.parse(localStorage.getItem('accounts')));
        this.conta = this.contas.get(cpfAtual);
        this.destino = this.contas.get(cpfDestino);
    }

    getContaAtual() {
        return this.contaAtual;
    }

    getContaDestino() {
        return this.contaDestino;
    }

    setContaAtual(conta) {
        this.contaAtual = conta;
    }

    setContaDestino(conta) {
        this.contaDestino = conta;
    }

    save(valor) {
        this.contaAtual.push([`\nTransferência efetuada no valor de R\$${parseFloat(valor).toFixed(2).replace('.', ',')}`]);
        this.contaAtual.push([`\tSaldo R\$${this.conta.saldo.toFixed(2).replace('.', ',')}`]);
        this.contaAtual.push([`${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`]);
        this.contaAtual.push(' -------------------------------------------------------- ');

        this.contaDestino.push([`\nTransferência recebida no valor de R\$${parseFloat(valor).toFixed(2).replace('.', ',')}`]);
        this.contaDestino.push([`\tSaldo R\$${this.destino.saldo.toFixed(2).replace('.', ',')}`]);
        this.contaDestino.push([`${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`]);
        this.contaDestino.push(' -------------------------------------------------------- ');

        localStorage.setItem('movs', JSON.stringify(Array.from(this.movs)));
    }
}
