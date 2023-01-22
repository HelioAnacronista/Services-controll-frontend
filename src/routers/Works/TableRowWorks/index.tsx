import { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonDelete from '../../../components/ButtonDelete';
import ButtonDetails from '../../../components/ButtonDetails';
import ButtonEdit from '../../../components/ButtonEdit';
import DialogBoxConfirmation from '../../../components/DialogBoxConfirmation';
import { workMinDTO } from '../../../models/workmindto';
import * as workServices from '../../../services/work-services';

type Props = {
  work: workMinDTO;
};

const statusColors = {
  ABERTO: {
    name: "ABERTO",
    color: "#7380EC",
  },
  AGUARDANDO_PAGAMENTO: {
    name: "AGUARDANDO PAGAMENTO",
    color: "#FFBB55",
  },
  PAGO: {
    name: "PAGO",
    color: "#41f1b6",
  },
};

function TableRowWork({ work }: Props) {
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

  function handleDeleteClick(workId: any) {
    setDialogBoxConfirmation({
      ...dialogBoxConfirmation,
      id: workId,
      visible: true,
    });
  }

  function atualizarPagina() {
    window.location.reload();
  }

  function handleDialogBoxConfirmationAnswer(answer: boolean, workId: number) {
    if (answer === true) {
      workServices.deleteById(workId).then(() => {
        atualizarPagina();
      });
    }

    setDialogBoxConfirmation({ ...dialogBoxConfirmation, visible: false });
  }

  function retornaStatus(status: any) {
    if (status == "1") {
      return statusColors.ABERTO;
    } else if (status == "2") {
      return statusColors.AGUARDANDO_PAGAMENTO;
    } else {
      return statusColors.PAGO;
    }
  }

  return (
    <>
      <tr className="table-work">
        <td>{work.id}</td>
        <td>{work.name}</td>
        <td>R${work.valor?.toFixed(2)}</td>
        <td style={{ color: retornaStatus(work.status).color }}>
          {retornaStatus(work.status).name}{" "}
        </td>

        <Link to={`/work/${work.id}`}>
          <td>
            <ButtonEdit></ButtonEdit>
          </td>
        </Link>

        <td>
          <ButtonDelete
            onClick={() => handleDeleteClick(work.id)}
          ></ButtonDelete>
        </td>

        <Link to={`/work-details/${work.id}`}>
          <td>
            <ButtonDetails></ButtonDetails>
          </td>
        </Link>
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

export default TableRowWork;
