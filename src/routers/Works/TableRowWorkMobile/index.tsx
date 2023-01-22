import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import ModalActions from "../../../components/ModalActions";
import { WorkDTO } from "../../../models/work";
import * as workServices from "../../../services/work-services";

type Props = {
  work: WorkDTO;
};

function TableRowWorkMobile({ work }: Props) {
  const [modalActions, setModalActions] = useState({
    id: 0,
    visible: false,
    msg: "Tem certeza?",
  });

  function handleOpenModal(workId: any) {
    setModalActions({ ...modalActions, id: workId, visible: true });
  }
  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(answer: boolean, id: number) {
    if (answer === true) {
      workServices
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
          handleDialogBoxConfirmationAnswer(true, work.id);
        }}
      >
        DELETAR
        <MdDeleteForever></MdDeleteForever>
      </button>
    );
  }

  const path = {
    local: "work",
    id: work.id,
  };
  return (
    <>
      <tr onClick={handleOpenModal}>
        <td>{work.name}</td>
        <td>{work.client.name}</td>
        <td>{"R$" + work.valor?.toFixed(2)}</td>
      </tr>

      {modalActions.visible && (
        <ModalActions
          path={path}
          nome={work.name}
          idObj={work.id}
          DeleteButton={ButtonDeleter}
          onDialogAnswer={handleDialogBoxConfirmationAnswer}
        ></ModalActions>
      )}
    </>
  );
}

export default TableRowWorkMobile;
