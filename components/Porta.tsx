
import PortaModel from "@/model/porta";
import styles from "../styles/Porta.module.css"


/*
 
 uma interface se comporta como um controle remoto onde eu posso
 assumir o controle de uma classe sem precisa mexer nela diretamente
 eu criei uma interface chamada PortaProps que recebe como valor a classe PortaModel  
 e tem ma função onChange que retorna um objeto basedo na mimha classe
 
 Assim eu não preciso alterar o obvjeto original digamos que a pessoa clica na porta 
 eu retono uma nova porta selecionada ao inves de mexer nbo objeto criado inicialmente 
 sem essa seleção.
 
*/
interface PortaProps {
   value: PortaModel
   onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){

    const porta = props.value

    const selecionada = porta.selecionada ? styles.selecionada:''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao());

    return(   
       <div className={styles.area} onClick={alternarSelecao}>

         <div className={`${styles.estrutura} ${selecionada}`} >

            <div className={styles.porta} >

              <div className={styles.numero}>{porta.numero}</div>

              <div className={styles.macaneta}></div>

            </div>
         </div>
         <div className={styles.chao}></div>
        </div>
    )
}