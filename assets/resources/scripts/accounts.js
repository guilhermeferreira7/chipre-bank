class Accounts {
    constructor(cpf) {
       this.accounts = new Map(JSON.parse(localStorage.getItem('accounts')));
       this._thisAccount = this.accounts.get(cpf);
    }

    get thisAccount() {
        return this._thisAccount;
    }

    set thisAccount(conta) {
        this._thisAccount = conta;
    }

    save() {
        this.accounts.set(this._thisAccount.cpf, this._thisAccount);
        localStorage.setItem('accounts', JSON.stringify(Array.from(this.accounts)));
    }
}