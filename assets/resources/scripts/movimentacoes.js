class Movimentacoes {
    constructor(cpf) {
        this.cpf = cpf;
        this.movs = new Map(JSON.parse(localStorage.getItem('movs')));
        this._thisMovs = this.movs.get(cpf);
        this.now = new MyDate();
    }

    get thisMovs() {
        return this._thisMovs;
    }

    set thisMovs(mov) {
        this._thisMovs = mov;
    }

    save() {
        this.movs.set(this.cpf, this._thisMovs);
        localStorage.setItem('movs', JSON.stringify(Array.from(this.movs)));
    }

    newAccount(conta) {
        let firstMov = [];
        firstMov.push(`CONTA ABERTA EM ${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`);
        firstMov.push(`Saldo: ${parseFloat(conta.saldo).toFixed(2).replace('.', ',')}`);
        firstMov.push('--------------------------------------------------------');
        this.thisMovs = firstMov;
        this.save();
    }

    insertMovimentacaoDeposito(valor, account) {
        this._thisMovs.push([`\nDeposito de valor R\$${valor.toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`\tSaldo R\$${account.saldo.toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`]);
        this._thisMovs.push(' -------------------------------------------------------- ');
        this.save();
    }

    insertMovimentacaoTranferencia(valor, conta) {
        this._thisMovs.push([`\nTransferência efetuada no valor de R\$${parseFloat(valor).toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`\tSaldo R\$${conta.saldo.toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`]);
        this._thisMovs.push(' -------------------------------------------------------- ');
        this.save();
    }

    insertReceveidMovimentacaoTranferencia(valor, conta) {
        this._thisMovs.push([`\nTransferência recebida no valor de R\$${parseFloat(valor).toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`\tSaldo R\$${conta.saldo.toFixed(2).replace('.', ',')}`]);
        this._thisMovs.push([`${this.now.day}/${this.now.month + 1}/${this.now.year} - ${this.now.hour}:${this.now.min}`]);
        this._thisMovs.push(' -------------------------------------------------------- ');
        this.save();
    }

}