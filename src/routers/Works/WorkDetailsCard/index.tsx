import { BsTypeH1 } from 'react-icons/bs';
import './style.scss'
import { WorkDTO } from '../../../models/work';

type Props = {
   work: WorkDTO;
}

const statusColors = {
   ABERTO: {
      name: 'ABERTO',
      color: '#7380EC'
   },
   AGUARDANDO_PAGAMENTO: {
      name: 'AGUARDANDO PAGAMENTO',
      color: '#FFBB55'
   },
   PAGO: {
      name: 'PAGO',
      color: '#41f1b6'
   }
}

function WorkDetailsCard({ work }: Props) {

   function retornaStatus(status: any) {
      if (status == '1') {
         return statusColors.ABERTO;
      } else if (status == '2') {
         return statusColors.AGUARDANDO_PAGAMENTO
      } else {
         return statusColors.PAGO
      }
   }

   return (
      <>
         <div className='mt-30 title-details'>
            <h1> <span>Detalhes do serviço:</span> {work.name}</h1>
         </div>
         <div className='container'>
            <div className='details-container'>
               <div className='details-card-work style-card-details'>
                  <div>
                     <h1> <span>Nome do serviço:</span> {work.name}</h1>

                     <div className="divide-text"></div>
                  </div>
                  <div>
                     <h1 style={{ color: retornaStatus(work.status).color }}> 
                     <span>Status: </span> {retornaStatus(Number(work.status)).name}</h1>

                     <div className="divide-text"></div>
                  </div>
                  <div>
                     <h1> <span>Valor: </span> R${work.valor?.toFixed(2)}</h1>

                     <div className="divide-text"></div>
                  </div>
               </div>

               <div className='details-card-cliet style-card-details'>
                  <div>
                     <h1> <span>Nome do cliente: </span> {work.client.name}</h1>
                     <div className="divide-text"></div>
                  </div>
                  <div>
                     <h1><span>Telefone: </span> {work.client.phone}</h1>
                     <div className="divide-text"></div>
                  </div>
                  <div>
                     <h1> <span>Endereço: </span> {work.client.address}</h1>
                     <div className="divide-text"></div>
                  </div>
               </div>

               <div className='details-card-category style-card-details'>
                  <div>
                     <h1> <span>Nome da categoria</span> {work.category.name}</h1>
                     <div className="divide-text"></div>
                  </div>
                  <div>
                     <h1> <span>descriçao da categoria: </span> {work.category.description}</h1>
                     <div className="divide-text"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default WorkDetailsCard;