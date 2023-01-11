import { ActionsBtn } from "./style";

import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

import ButtonLayout from "../../../components/ButtonLayout";
import FromInput from "../../../components/FromInput";
import FromSelect from "../../../components/FromSelect";
import { CategoryDTO } from "../../../models/category";
import { ClientDTO } from "../../../models/client";
import * as categoryServices from "../../../services/category-services";
import * as clientServices from "../../../services/client-services";
import * as workServices from "../../../services/work-services";
import * as froms from "../../../utils/from";


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

function WorkFrom() {
  const navigate = useNavigate();

  const buttonPropsSave = {
    name: "Salvar",
    img: "",
  };

  const params = useParams();

  const isEditing = params.workId !== "create";

  const [category, setCategory] = useState<CategoryDTO[]>([]);

  const [selectStatus, setSelectStatus] = useState<number>();
  function findStatus() {
    if (selectStatus === 1) {
      return 1;
    }
    if (selectStatus === 1) {
      return 2;
    }
    return 3;
  }

  const [client, setClient] = useState<ClientDTO[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
    },
    status: {
      value: findStatus(),
      id: "status",
      name: "status",
      type: "number",
      placeholder: "Status do serviço",
    },
    address: {
      value: "",
      id: "address",
      name: "address",
      type: "text",
      placeholder: "Endereço",
    },
    valor: {
      value: "",
      id: "valor",
      name: "valor",
      type: "number",
      placeholder: "Valor do serviço",
    },
    category: {
      value: [],
      id: "category",
      name: "category",
      placeholder: "Selecione uma categoria",
    },
    client: {
      value: [],
      id: "client",
      name: "client",
      placeholder: "Cliente",
    },
  });

  useEffect(() => {
    categoryServices.getListRequest().then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    clientServices.getListRequest().then((res) => {
      setClient(res.data);
      setIsLoading(false);
    });
  }, []);

  //Atualizar os valores do fromData usando a função fromsUpdate
  useEffect(() => {
    if (isEditing) {
      workServices.findById(Number(params.workId)).then((res) => {
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
      requstBody.id = params.workId;
    }

    const request = isEditing
      ? workServices.updateRequest(requstBody)
      : workServices.insertRequest(requstBody);

    request.then(() => {
      navigate("/work");
    });
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

  //yarn add react-select
  const optionsStatus = [
    { value: "PAGO", label: "PAGO" },
    { value: "AGUARDANDO PAGAMENTO", label: "AGUARDANDO PAGAMENTO" },
    { value: "ABERTO", label: "ABERTO" },
  ];

  return (
    <>
      <div className="mt-30 card-create title-details">
        <h1>
          {" "}
          <span>Workspace de Serviços</span>{" "}
        </h1>
      </div>
      <div className="container div-c"></div>

      <div className="details-container">
        <div className="details-card-work style-card-details">
          <form onSubmit={handleSubmit}>
            <div className="text-top-category">
              <div>
                <h2>Nome: </h2>
              </div>
              <FromInput
                {...formData.name}
                className="input-c-c"
                onChange={handleInputChange}
              />
              <div className="divide-text"></div>
            </div>

            <div className="text-top-category">
              <div>
                <h2>status: </h2>
              </div>
              <Select
                options={optionsStatus}
                onChange={(obj) => {
                  let v;
                  if (obj?.value === "PAGO") {
                    v = 1;
                  }
                  if (obj?.value === "AGUARDANDO PAGAMENTO") {
                    v = 2;
                  }
                  if (obj?.value === "ABERTO") {
                    v = 3;
                  }
                  setSelectStatus(v);
                }}
                isLoading={isLoading}
                className="basic-single"
                classNamePrefix="Selecione um Status"
                name="color"
              />
              <div className="divide-text"></div>
            </div>

            <div className="text-top-category">
              <div>
                <h2>Valor: </h2>
              </div>
              <FromInput
                {...formData.valor}
                className="input-c-c"
                onChange={handleInputChange}
              />
              <div className="divide-text"></div>
            </div>

            <div className="my-20">
              <FromSelect
                options={category}
                {...formData.category}
                onChange={(obj: any) => {
                  const newFromData = froms.update(formData, "category", obj);
                  console.log(newFromData);
                  setFormData(newFromData);
                }}
                isLoading={isLoading}
                className="basic-single"
                classNamePrefix="select"
                name="color"
                getOptionLabel={(obj: any) => obj.name}
                getOptionValue={(obj: any) => String(obj.id)}
              />
            </div>
            <div>
              <FromSelect
                options={client}
                {...formData.client}
                onChange={(obj: any) => {
                  const newFromData = froms.update(formData, "client", obj);
                  console.log(newFromData);
                  setFormData(newFromData);
                }}
                isLoading={isLoading}
                className="basic-single"
                classNamePrefix="select"
                name="color"
                getOptionLabel={(obj: any) => obj.name}
                getOptionValue={(obj: any) => String(obj.id)}
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
      </div>
    </>
  );
}

export default WorkFrom;
