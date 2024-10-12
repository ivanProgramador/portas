export default class PortaModel{


    // esse atributos são privados por isso eles tem o # na frente
    //como estou usando typescript eu tenho que dizer qwuais são os tipos dessas variáveis 

    #numero: number
    #temPresente: boolean
    #selecionada:boolean
    #aberta: boolean

    /*
     esse eo construtor que recebe os parâmetros para a criação de um objeto
     basedo na classe PortaModel por exemplo todos os opbjetos que são criados
     baseados nessa classe são portas porém uma porta dessa classe pode ter:
     "numero 2" ela pode estar fechada ou aberta isso quem decide são os parâmetros
     que serão enviados ao construtor    

    */

     constructor(numero:number, temPresente = false,selecionada=false, aberta = false){
        
         this.#numero = numero
         this.#temPresente = temPresente 
         this.#selecionada = selecionada
         this.#aberta = aberta

     }

     get numero(){
         return this.#numero
     }

     get temPresente(){
        return this.#temPresente
    }

    get aberta(){
        return this.#aberta
    }

    get selecionada(){
        return this.#selecionada
    }

    get fechada(){
         return !this.aberta
    }

    desselecionar(){
        const selecionada = false;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.#selecionada;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true;
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }









}

