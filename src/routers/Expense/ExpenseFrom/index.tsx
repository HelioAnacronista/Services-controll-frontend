import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonLayout from "../../../components/ButtonLayout";
import FromInput from "../../../components/FromInput";
import * as expenseServices from "../../../services/expense-services";
import * as froms from "../../../utils/from";
import { ActionsBtn, Container, ContentFrom } from "./style";

function ExpenseFrom() {
  const navigate = useNavigate();

  const params = useParams();

  const isEditing = params.expenseId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Escreva o nome da dispesa",
    },
    valor: {
      value: "",
      id: "valor",
      name: "valor",
      type: "number",
      placeholder: "Digite o valor do serviço...",
    },
  });

  //Atualizar os valores do fromData usando a função fromsUpdate
  useEffect(() => {
    if (isEditing) {
      expenseServices.findById(Number(params.expenseId)).then((res) => {
        console.log(res);
        setFormData(froms.updateAll(formData, res.data));
      });
    }
  }, []);

  function handleInputChange(event: any) {
    setFormData(froms.update(formData, event.target.name, event.target.value));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const requstBody = froms.toValues(formData);
    if (isEditing) {
      requstBody.id = params.expenseId;
    }

    const request = isEditing
      ? expenseServices.updateRequest(requstBody)
      : expenseServices.insertRequest(requstBody);

    request.then(() => {
      navigate("/expense");
    });
  }

  return (
    <>
      <Container>
        <div className="title">
          <h3>Workspace de dispesa</h3>
        </div>

        <ContentFrom>
          <div className="card-from">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <h3>Nome: </h3>
                </div>
                <FromInput
                  {...formData.name}
                  className="input-c-c"
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-from">
                <div>
                  <h3>Valor: </h3>
                </div>
                <FromInput
                  {...formData.valor}
                  className="input-c-c"
                  onChange={handleInputChange}
                />
              </div>

              <ActionsBtn>
                <div className="save">
                  <ButtonLayout name="SALVAR"></ButtonLayout>
                </div>
                <div className="cancel">
                  <Link to={"/expense"}>
                    <ButtonLayout name="CANCELAR"></ButtonLayout>
                  </Link>
                </div>
              </ActionsBtn>
            </form>
          </div>
        </ContentFrom>
      </Container>
    </>
  );
}

export default ExpenseFrom;
