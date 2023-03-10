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
import { ActionsBtn, Container, ContentFrom } from "./style";

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

  const [client, setClient] = useState<ClientDTO[]>([]);

  const [isLoading, setIsLoading] = useState(true);

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

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Digite o nome do serviço...",
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
      placeholder: "Digite o valor do serviço...",
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
      placeholder: "Selecione o cliente",
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
      <Container>
        <div className="title">
          <h3>
            <span>Workspace de Serviços</span>
          </h3>
        </div>

        <ContentFrom>
          <div className="card-from">
            <form onSubmit={handleSubmit}>
              <div className="input-from">
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

              <div className="input-from">
                <div>
                  <h3>Status: </h3>
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
                  placeholder="Selecione o status do serviço"
                />
              </div>

              <div className="input-from">
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
              <div className="input-from">
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
                  <ButtonLayout name="SALVAR"></ButtonLayout>
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

export default WorkFrom;
