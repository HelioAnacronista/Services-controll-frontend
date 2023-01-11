import { ActionsBtn } from "./style";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonLayout from "../../../components/ButtonLayout";
import FromInput from "../../../components/FromInput";
import * as cleintServices from "../../../services/client-services";
import * as froms from "../../../utils/from";


function ClientFrom() {
  const navigate = useNavigate();

  const buttonPropsSave = {
    name: "Salvar",
    img: "",
  };

  const params = useParams();

  const isEditing = params.clientId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
    },
    phone: {
      value: "",
      id: "phone",
      name: "phone",
      type: "text",
      placeholder: "Numero de telefone",
    },
    address: {
      value: "",
      id: "address",
      name: "address",
      type: "text",
      placeholder: "Endereço",
    },
  });

  //Atualizar os valores do fromData usando a função fromsUpdate
  useEffect(() => {
    if (isEditing) {
      cleintServices.findById(Number(params.clientId)).then((res) => {
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
      requstBody.id = params.clientId;
    }

    const request = isEditing
      ? cleintServices.updateRequest(requstBody)
      : cleintServices.insertRequest(requstBody);

    request.then(() => {
      navigate("/client");
    });
  }

  return (
    <>
      <div className="mt-30 title-details">
        <h1>
          {" "}
          <span>Workspace Cliente</span>{" "}
        </h1>
      </div>
      <div className="container div-c">
        <div className="details-card-category style-card-details">
          <form onSubmit={handleSubmit}>
            <div className="text-top-category">
              <div>
                <h1>Nome: </h1>
              </div>
              <FromInput
                {...formData.name}
                className="input-c-c"
                onChange={handleInputChange}
              />
              <div className="divide-text"></div>
            </div>
            <div className="text-top-category txt-area-dsc">
              <div>
                <h1>Telefone:</h1>
              </div>
              <FromInput
                {...formData.phone}
                className="input-c-c"
                onChange={handleInputChange}
              />
              <div className="divide-text"></div>
            </div>
            <div className="text-top-category txt-area-dsc">
              <div>
                <h1>Endereço:</h1>
              </div>
              <FromInput
                {...formData.address}
                className="input-c-c"
                onChange={handleInputChange}
              />
              <div className="divide-text"></div>
            </div>

            <ActionsBtn>
              <div className="btn-save">
                <ButtonLayout {...buttonPropsSave}>
                  {" "}
                  <p>SALVAR</p>{" "}
                </ButtonLayout>
              </div>
              <div className="container mt-20 div-c">
                <Link to={"/client"}>
                  <ButtonLayout name="CANCELAR"></ButtonLayout>
                </Link>
              </div>
            </ActionsBtn>
          </form>
        </div>
      </div>
    </>
  );
}

export default ClientFrom;
