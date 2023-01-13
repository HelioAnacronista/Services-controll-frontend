import { ActionsBtn, Container, ContentFrom } from "./style";


import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import FromInput from "../../../components/FromInput";
import ButtonLayout from "../../../components/ButtonLayout";
import FromTextArea from "../../../components/FromTextArea";

import * as categoryServices from "../../../services/category-services";
import * as froms from "../../../utils/from";



function CategoryFrom() {
  const navigate = useNavigate();

  const buttonPropsSave = {
    name: "Salvar",
    img: "",
  };

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
        <h1>
          <span>Workspace de categoria</span>
        </h1>
      </div>


      <ContentFrom>
        <div className="card-from">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <h1>Nome: </h1>
              </div>
              <FromInput
                {...formData.name}
                className="input-c-c"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>
                <h1>Descrição:</h1>
              </div>
              <FromTextArea
                {...formData.description}
                className="input-c-c-txa"
                onChange={handleInputChange}
              />
            </div>
            <ActionsBtn>
              <div className="save">
                <ButtonLayout {...buttonPropsSave}>
                  <p>SALVAR</p>
                </ButtonLayout>
              </div>
              <div className="cancel">
                <Link to={"/work"}>
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
