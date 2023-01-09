import { WorkDTO } from '../../../models/work';

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

type Props = {
   work: WorkDTO;
}
function TableRowDash({work}: Props) {

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
         <tr>
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