import { categoryDTO } from "../../../models/category";
import ButtonDelete from '../../../components/ButtonDelete';
import ButtonEdit from '../../../components/ButtonEdit';

type Props = {
   category : categoryDTO;
}

function TableRowCategory({ category }: Props) {
   return (
      <>
         <tr>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td><ButtonEdit></ButtonEdit></td>
            <td><ButtonDelete></ButtonDelete></td>
         </tr>

      </>
   );
}

export default TableRowCategory;