export class Cliente{

    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf, tel){
        this.nome = nome;
        this._cpf = cpf;
        this.tel = tel;
    }
}

//const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")