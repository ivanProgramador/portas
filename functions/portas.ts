
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

/*
A função para ataualizar portas recebe um array de objetos baseados na portaModel no rimeriop parâmetro
no segundo ela pega desse array a posra que foi modificada(selecionada) com isso é criado um array
chamado portas.

depois ela cria um outro array vazio baseado na classe porta model 

e quando ela faz o retorno eu uso o map para listar as portas contidas no array de portas 
então eu faço uma comparação de cada uma das portas para identificar qual foi a porta modificada 
depis qua encontro eu retorno a porta modificada para que ela seja mostrada na tela

caso eu não encontre eu retorno todas portas sem nenhuma modificação 

eu estou chamndoa função de desselecionar para evitar que duas postas fiquem
selecionadas ao mesmo tempo  

*/

export function atualizarPortas(portas:PortaModel[],portaModificada:PortaModel):PortaModel[]{

    return portas.map(portaAtual=>{
         const igualModificada = portaAtual.numero === portaModificada.numero;

         if(igualModificada){
           return portaModificada
         }else{

           /*
             mesmo que o usuario abara umna porta diferente a porta selecionada por ele não deve perder 
             a seleção
             por exemplo se o cliente selecionou a porta 1 e abriu a porta 2 a porta um tem que ficar selecionada 
             até porque uma ação não tem nada a ver com a outra  
           */

            return portaModificada.aberta?portaAtual: portaAtual.desselecionar() 

         }
    })
}