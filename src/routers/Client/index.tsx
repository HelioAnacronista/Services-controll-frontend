import "./style.scss";

import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import ButtonLayout from "../../components/ButtonLayout";
import { ClientDTO } from "../../models/client";
import * as clientServices from "../../services/client-services";
import TableRowClient from "./TableRowClient";
import LoadingPage from "../../components/LoadingPage/loading";
import { useNavigate } from "react-router-dom";

type PropsParent = {
  params: string;
};

function Client({ params }: PropsParent) {
  const navigate = useNavigate();

  const buttonPropsSave = {
    name: "Salvar",
    img: "",
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const [clientList, setClientList] = useState<ClientDTO[]>([]);

  const [isListPage, setisListPage] = useState(false);

  const [queryParams, setQueryParams] = useState<any>({
    page: 0,
    name: "",
  });

  //Fazer a requisição com os params passados
  useEffect(() => {
    clientServices
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setClientList(clientList.concat(nextPage));
        setisListPage(response.data.last);
      });
  }, [queryParams]);

  //Proxima pagina
  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleNewClick() {
    navigate("/client/create");
  }
  return (
    <>
      <main>
        {loading ? (
          <LoadingPage></LoadingPage>
        ) : (
          <>
            <div>
              <div className="btn-center" onClick={handleNewClick}>
                <ButtonLayout
                  name="CRIAR"
                  img={<BsFillArrowRightSquareFill />}
                ></ButtonLayout>
              </div>

              <div style={{ display: "flex" }} className="container-work">
                <table className="table-work table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Endereço</th>
                      <th>Telefone</th>
                      <th>Editar</th>
                      <th>Deletar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {params
                      ? clientList
                          .filter((x) => x.name.includes(params))
                          .map((x) => (
                            <TableRowClient
                              key={x.id}
                              client={x}
                            ></TableRowClient>
                          ))
                      : clientList.map((obj) => (
                          <TableRowClient
                            key={obj.id}
                            client={obj}
                          ></TableRowClient>
                        ))}
                  </tbody>

                  <div className="table-bottom" onClick={handleNextPageClick}>
                    <ButtonLayout
                      name="PROXIMA"
                      img={<BsFillArrowRightSquareFill />}
                    ></ButtonLayout>
                  </div>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Client;
