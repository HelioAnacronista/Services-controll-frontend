import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ModalActions from "../../../components/ModalActions";
import { CategoryDTO } from "../../../models/category";
import * as categoryServices from "../../../services/category-services";

type Props = {
  category: CategoryDTO;
};

function TableRowCategoryMobile({ category }: Props) {
  const [modalActions, setModalActions] = useState({
    id: 0,
    visible: false,
    msg: "Tem certeza?",
  });

  function handleOpenModal(categoryId: any) {
    setModalActions({ ...modalActions, id: categoryId, visible: true });
  }
  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(answer: boolean, id: number) {
    if (answer === true) {
      categoryServices
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
          handleDialogBoxConfirmationAnswer(true, category.id);
        }}
      >
        DELETAR
        <MdDeleteForever></MdDeleteForever>
      </button>
    );
  }

  const path = {
    local: "category",
    id: category.id,
  };
  return (
    <>
      <tr onClick={handleOpenModal}>
        <td>{category.name}</td>
        <td>{category.description}</td>
      </tr>

      {modalActions.visible && (
        <ModalActions
          path={path}
          nome={category.name}
          idObj={category.id}
          DeleteButton={ButtonDeleter}
          onDialogAnswer={handleDialogBoxConfirmationAnswer}
        ></ModalActions>
      )}
    </>
  );
}

export default TableRowCategoryMobile;
