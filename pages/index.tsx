import Cartao from "@/components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";


export default function Formulario() {

  const[qtdePortas,setQtdePortas] = useState(4)
  const[comPresente,setComPresente] = useState(2)

  return (
    <div className={styles.formulario} >
     <div>
       <Cartao bgcolor="#c0392c">
         <h2>Month Hall</h2>
       </Cartao>
       <Cartao>
           <EntradaNumerica 
              text="Qtd de Portas"
              value={qtdePortas}
              onChange={novaQte => setQtdePortas(novaQte)}
            />
     

       </Cartao>
     </div>
     <div>
    <Cartao>

    <EntradaNumerica 
              text="Com presente"
              value={comPresente}
              onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
      />
     </Cartao>
     <Cartao  bgcolor="#28a085">
       <Link href={`/jogo/4/2`} >
        <h2 className={styles.link} >Iniciar</h2>
        
       </Link>
     </Cartao>
         
     </div>
      
      
    </div>
  );
}
