import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonDelete from "../../../components/ButtonDelete";
import ButtonEdit from "../../../components/ButtonEdit";
import DialogBoxConfirmation from "../../../components/DialogBoxConfirmation";
import { ExpenseDTO } from "../../../models/Expense";
import * as expenseServices from "../../../services/expense-services";

type Props = {
  expense: ExpenseDTO;
};

function TableRowExpense({ expense }: Props) {
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

  function handleDeleteClick(expenseId: any) {
    setDialogBoxConfirmation({
      ...dialogBoxConfirmation,
      id: expenseId,
      visible: true,
    });
  }

  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(
    answer: boolean,
    expenseId: number
  ) {
    if (answer === true) {
      expenseServices.deleteById(expenseId).then(() => {
        atualizarPagina();
      });
    }

    setDialogBoxConfirmation({ ...dialogBoxConfirmation, visible: false });
  }

  return (
    <>
      <tr>
        <td>{expense.name}</td>
        <td>{expense.valor}</td>
        <Link to={`/expense/${expense.id}`}>
          <td>
            <ButtonEdit></ButtonEdit>
          </td>
        </Link>
        <td>
          <ButtonDelete
            onClick={() => handleDeleteClick(expense.id)}
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

export default TableRowExpense;
