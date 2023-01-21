import { MdChangeCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

type Props = {
  idObj: number;
  nome: string;
  onDialogAnswer: Function;
  DeleteButton: React.FunctionComponent;
  path: {
    id: number;
  };
};

function ModalActions({
  idObj,
  nome,
  onDialogAnswer,
  path,
  DeleteButton,
}: Props) {
  const navigate = useNavigate();

  return (
    <>
      <Container onClick={() => onDialogAnswer(false, idObj)}>
        <div
          className="dialog-box"
          onClick={(event) => event.stopPropagation()}
        >
          <h3 className="title">{nome}</h3>
          <div>
            <button
              className="btn-edit"
              onClick={() => {
                navigate(`${path.id}`);
              }}
            >
              EDITAR <MdChangeCircle></MdChangeCircle>
            </button>
            <DeleteButton></DeleteButton>
          </div>
          <div
            className="btn-exit"
            onClick={() => onDialogAnswer(false, idObj)}
          >
            <button>SAIR</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ModalActions;
