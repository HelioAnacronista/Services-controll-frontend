import { useEffect, useState } from 'react';
import './style.scss'
import { objattDTO } from '../../models/objattDTO';

type Props = {
   objattDTO: objattDTO
}


function CardRecentUpdates({ objattDTO }: Props) {

   const [timeSinceEvent, setTimeSinceEvent] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0
   });

   useEffect(() => {
      // Define o evento que deseja contar o tempo
      const eventTimestamp = Date.now();

      // Inicia o contador de tempo
      const intervalId = setInterval(() => {
         // Calcula o tempo em milissegundos desde que o evento ocorreu
         const timeInMilliseconds = Date.now() - eventTimestamp;

         // Converte o tempo em horas, minutos e segundos
         const hours = Math.floor(timeInMilliseconds / 3600000);
         const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
         const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);

         setTimeSinceEvent({ hours, minutes, seconds });
      }, 1000); // Atualiza a cada segundo

      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(intervalId);
   }, []); // Executa apenas uma vez



   return (
      <>
         <div className="updates">
            <div className="container-card-att">
               <p> <b>{objattDTO.name}</b> <br></br>{objattDTO.work}</p>
               <small className="legendas">{timeSinceEvent.hours + "H"}, {timeSinceEvent.minutes + "m"}, {timeSinceEvent.seconds} atrás</small>
            </div>

         </div>
      </>
   );
}

export default CardRecentUpdates;