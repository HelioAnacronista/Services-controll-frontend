import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonDelete from "../../../components/ButtonDelete";
import ButtonEdit from "../../../components/ButtonEdit";
import DialogBoxConfirmation from "../../../components/DialogBoxConfirmation";
import { ClientDTO } from "../../../models/client";
import * as clientServices from "../../../services/client-services";

type Props = {
  client: ClientDTO;
};

function TableRowClient({ client }: Props) {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    msg: "Operação feita com sucesso!",
  });

  const [dialogBoxConfirmation, setDialogBoxConfirmation] = useState({
    id: 0,
    visible: false,
    msg: "Tem certeza?",
  });

  function handleInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(categoryId: any) {
    setDialogBoxConfirmation({
      ...dialogBoxConfirmation,
      id: categoryId,
      visible: true,
    });
  }

  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(
    answer: boolean,
    categoryId: number
  ) {
    if (answer === true) {
      clientServices.deleteById(categoryId).then(() => {
        atualizarPagina();
      });
    }

    setDialogBoxConfirmation({ ...dialogBoxConfirmation, visible: false });
  }

  return (
    <>
      <tr>
        <td>{client.name}</td>
        <td>{client.address}</td>
        <td>{client.phone}</td>
        <Link to={`/client/${client.id}`}>
          <td>
            <ButtonEdit></ButtonEdit>
          </td>
        </Link>
        <td>
          <ButtonDelete
            onClick={() => handleDeleteClick(client.id)}
          ></ButtonDelete>
        </td>
      </tr>
      {dialogBoxConfirmation.visible && (
        <DialogBoxConfirmation
          id={dialogBoxConfirmation.id}
          msg={dialogBoxConfirmation.msg}
          onDialogAnswer={handleDialogBoxConfirmationAnswer}
        />
      )}
    </>
  );
}

export default TableRowClient;
