class ContasManager {
    constructor(cpfAtual, cpfDestino) {
        this.contas = new Map(JSON.parse(localStorage.getItem('accounts')));
        this.contaAtual = this.contas.get(cpfAtual);
        this.contaDestino = this.contas.get(cpfDestino);
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
        this.contaDestino.saldo += valor;
        this.contaAtual.saldo -= valor;
        this.contas.set(this.contaDestino.cpf, this.contaDestino);
        this.contas.set(this.contaAtual.cpf, this.contaAtual);
        localStorage.setItem('accounts', JSON.stringify(Array.from(this.contas)));
    }
}
