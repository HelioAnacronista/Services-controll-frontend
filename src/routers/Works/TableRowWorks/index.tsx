import ButtonDelete from '../../../components/ButtonDelete';
import ButtonEdit from '../../../components/ButtonEdit';
import { workMinDTO } from '../../../models/workmindto';



type Props = {
   work: workMinDTO;
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

function TableRowWork({ work }: Props) {

   function retornaStatus(status: any) {
      if (status == 'ABERTO') {
         return statusColors.ABERTO;
      } else if (status == 'AGUARDANDO_PAGAMENTO') {
         return statusColors.AGUARDANDO_PAGAMENTO
      } else {
         return statusColors.PAGO
      }
   }

   console.log(work.status)

   return (
      <>
         <tr className="table-work">
            <td>{work.id}</td>
            <td>{work.name}</td>
            <td>R${work.valor?.toFixed(2)}</td>
            <td style={{ color: retornaStatus(work.status).color }}>{retornaStatus(work.status).name} </td>
            <td> <ButtonDelete></ButtonDelete>   </td>
            <td> <ButtonEdit></ButtonEdit>       </td>
         </tr>
      </>
   );
}

export default TableRowWork;