import PortaModel from "@/model/porta";
import Porta from "../../../components/Porta";
import { useEffect, useState } from "react";
import style  from "../../../styles/Jogo.module.css";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";



export default function jogo() {

const router = useRouter();

 const[portas, setPortas] = useState([]);


 /*
  Quando a requisição é feita na primeira leitura 
  o "router.query" chega vázio. Depois que ele processa
  a interface é que ele pega os valores que vieram 
  na requisição isso faz com que o jogo não saiba  
  quantas portas mostrar e nem qual é a porta que está
  com o presente.
  
  porque os dados os mudam depois que a página já existe
  então estou usando o useEffect() para monitorar as 
  variáveis e assim que elas mudarem ele vai passar 
  os valores delas para dentro da função que gera as 
  portas.
  
  a função useEEffect() recebe 2 parãmetros

  1 - é oque deve acontecer quando os recursos  
      que estão sendo monitorados mudarem.
      
  2 - são os recursos/ dependencias/ variaveis 
      que ele está monitorando no meu caso ele 
      está monitorando o objeto que vem da query.



 */
 useEffect(()=>{
    const portas = +router.query.portas 
    const temPresente = +router.query.temPresente 
    setPortas(criarPortas(portas, temPresente))
 },[router?.query])




 function renderizarPortas(){
    return portas.map(porta=>{
       return <div> 
                  <Porta key={porta.numero} value={porta} 
                         onChange={
                            novaPorta => setPortas(atualizarPortas(portas,novaPorta))
                          }
                  />
              </div>
    })
 }


  return (
    <div id={style.jogo} >

      <div className={style.portas} >

        {renderizarPortas()}

      </div>

      <div className={style.botoes} >
        <Link href="http://localhost:3000/" >
           <button>
              Reiniciar Jogo
           </button>
        </Link>
          


      </div>

     
      
    </div>
  );
}
