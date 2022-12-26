import { categoryDTO } from "../../../models/category";
import { ClientDTO } from "../../../models/client";
import ButtonDelete from '../../../components/ButtonDelete';
import ButtonEdit from '../../../components/ButtonEdit';

type Props = {
   client: ClientDTO;
}

function TableRowClient({ client }: Props) {
   return (
      <>
         <tr>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.address}</td>
            <td>{client.phone}</td>
            <td><ButtonEdit></ButtonEdit></td>
            <td><ButtonDelete></ButtonDelete></td>
         </tr>

      </>
   );
}

export default TableRowClient;