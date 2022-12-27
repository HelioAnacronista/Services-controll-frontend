import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as categoryServices from '../../../services/category-services'
import ButtonDelete from '../../../components/ButtonDelete';
import ButtonEdit from '../../../components/ButtonEdit';
import DialogBoxConfirmation from '../../../components/DialogBoxConfirmation';
import { categoryDTO } from '../../../models/category';

type Props = {
   category: categoryDTO;
}

function TableRowCategory({ category }: Props) {


   const [dialogInfoData, setDialogInfoData] = useState({
      visible: false,
      msg: "Operação feita com sucesso!"
   })

   const [dialogBoxConfirmation, setDialogBoxConfirmation] = useState({
      id: 0,
      visible: false,
      msg: "Tem certeza?"
   })

   function handleInfoClose() {
      setDialogInfoData({ ...dialogInfoData, visible: false });
   }

   function handleDeleteClick(categoryId: any) {
      setDialogBoxConfirmation({ ...dialogBoxConfirmation, id: categoryId, visible: true })

   }

   function atualizarPagina() {
      window.location.reload();
    }
    

   function handleDialogBoxConfirmationAnswer(answer: boolean, categoryId: number) {
      if (answer === true) {
         categoryServices.deleteById(categoryId).then(() => {


            atualizarPagina()
         })
      }

      setDialogBoxConfirmation({ ...dialogBoxConfirmation, visible: false })
   }

   return (
      <>
         <tr>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <Link to={`/category/${category.id}`}>
               <td><ButtonEdit></ButtonEdit></td>
            </Link>
            <td><ButtonDelete onClick={() => handleDeleteClick(category.id)}></ButtonDelete></td>
         </tr>
         {
            dialogBoxConfirmation.visible &&
            <DialogBoxConfirmation
               id={dialogBoxConfirmation.id}
               msg={dialogBoxConfirmation.msg}
               onDialogAnswer={handleDialogBoxConfirmationAnswer}
            />
         }
      </>
   );
}

export default TableRowCategory;