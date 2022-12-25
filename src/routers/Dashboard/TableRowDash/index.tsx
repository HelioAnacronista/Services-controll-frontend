import ButtonDelete from '../../../components/ButtonDelete';
import ButtonEdit from '../../../components/ButtonEdit';
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

function TableRowDash({work}: Props) {

   function retornaStatus(status: any) {
      if (status == 'ABERTO') {
         return statusColors.ABERTO;
      } else if (status == 'AGUARDANDO_PAGAMENTO') {
         return statusColors.AGUARDANDO_PAGAMENTO
      } else {
         return statusColors.PAGO
      }
   }

   

   return (
      <>
         <tr className="table-work">
            <td>{work.id}</td>
            <td>{work.name}</td>
            <td>R${work.valor?.toFixed(2)}</td>
            <td style={{ color: retornaStatus(work.status).color }}>{retornaStatus(work.status).name} </td>
            <td>  {work.client.name} </td>
            <td>  {work.client.phone}       </td>
         </tr>
      </>
   );
}

export default TableRowDash;