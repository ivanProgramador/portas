
import PortaModel from "@/model/porta";


/*
 Embora os eventos estejam funcionando eles estão apontando para o objeto porta de forma geral 
 no caso se eu tiver mais de um objeto que pertence a classe porta na interface ele vai assumr as 
 mesmas caracteristicas.

 para contornar esse problema eu vou precisar elaborar um array de objetos onde cada inidce desse array vai 
 conter um objeto porta então eu vou usar a diferença de numerção entre os indices para tprnbar esse objeto 
 unico para que ele  possa ser manipulado sem afetar os outros objetos presentes na interface.
*/


/*
 Essa função vai receber a quantidade de portas selecionadas e o numero da porta selecionada 
*/
export function criarPortas(qtde:number, selecionada: number):PortaModel[]{
       
       //a afunção array.from() esta gerando um array do tamanho da quantidade de portas selecionadas 

        return Array.from({length:qtde},(_,i)=>{

            const numero = i + 1
            const temPresente  = numero === selecionada

            return new PortaModel(numero,temPresente)

        })
}