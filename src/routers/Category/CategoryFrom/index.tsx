import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonLayout from "../../../components/ButtonLayout";
import FromInput from "../../../components/FromInput";
import FromTextArea from "../../../components/FromTextArea";
import * as categoryServices from "../../../services/category-services";
import * as froms from "../../../utils/from";
import { ActionsBtn, Container, ContentFrom } from "./style";

function CategoryFrom() {
  const navigate = useNavigate();

  const params = useParams();

  const isEditing = params.categoryId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Escreva o nome da categoria",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Escreva uma descrição simples",
    },
  });

  //Atualizar os valores do fromData usando a função fromsUpdate
  useEffect(() => {
    if (isEditing) {
      categoryServices.findById(Number(params.categoryId)).then((res) => {
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
      requstBody.id = params.categoryId;
    }

    const request = isEditing
      ? categoryServices.updateRequest(requstBody)
      : categoryServices.insertRequest(requstBody);

    request.then(() => {
      navigate("/category");
    });
  }
  return (
    <>
      <Container>
        <div className="title">
          {isEditing ? (
            <>
              <h3>{formData.name.value}</h3>
            </>
          ) : (
            <>
              <h3>Criar uma nova categoria</h3>
            </>
          )}
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
              <div>
                <div>
                  <h3>Descrição:</h3>
                </div>
                <FromTextArea
                  {...formData.description}
                  className="input-c-c-txa"
                  onChange={handleInputChange}
                />
              </div>
              <ActionsBtn>
                <div className="save">
                  <ButtonLayout name="SALVAR"></ButtonLayout>
                </div>
                <div className="cancel">
                  <Link to={"/category"}>
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

export default CategoryFrom;
