import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ModalActions from "../../../components/ModalActions";
import { ClientDTO } from "../../../models/client";
import * as clientServices from "../../../services/client-services";

type Props = {
  client: ClientDTO;
};

function TableRowClientMobile({ client }: Props) {
  const [modalActions, setModalActions] = useState({
    id: 0,
    visible: false,
    msg: "Tem certeza?",
  });

  function handleOpenModal(clientId: any) {
    setModalActions({ ...modalActions, id: clientId, visible: true });
  }
  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(answer: boolean, id: number) {
    if (answer === true) {
      clientServices
        .deleteById(id)
        .then(() => {
          atualizarPagina();
        })
        .catch((err) => {
          alert("A entidade presente está refereciada em outra entidade");
        });
    }

    setModalActions({ ...modalActions, visible: false });
  }

  function ButtonDeleter() {
    return (
      <button
        className="btn-delete"
        onClick={() => {
          handleDialogBoxConfirmationAnswer(true, client.id);
        }}
      >
        DELETAR
        <MdDeleteForever></MdDeleteForever>
      </button>
    );
  }

  const path = {
    local: "client",
    id: client.id,
  };
  return (
    <>
      <tr onClick={handleOpenModal}>
        <td>{client.name}</td>
        <td>{client.address}</td>
        <td>{client.phone}</td>
      </tr>

      {modalActions.visible && (
        <ModalActions
          path={path}
          nome={client.name}
          idObj={client.id}
          DeleteButton={ButtonDeleter}
          onDialogAnswer={handleDialogBoxConfirmationAnswer}
        ></ModalActions>
      )}
    </>
  );
}

export default TableRowClientMobile;
