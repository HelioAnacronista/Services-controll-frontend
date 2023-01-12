import { Container, ContentList } from "./style";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import { ClientDTO } from "../../models/client";

import ButtonLayout from "../../components/ButtonLayout";
import LoadingPage from "../../components/LoadingPage/loading";

import TableRowClient from "./TableRowClient";

import * as clientServices from "../../services/client-services";

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
            <Container className="container">
              <div className="btn-create mt-b-40" onClick={handleNewClick}>
                <ButtonLayout
                  name="CRIAR"
                  img={<BsFillArrowRightSquareFill />}
                ></ButtonLayout>
              </div>

              <ContentList>
                <table className="table-border">
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
                </table>
              </ContentList>
              <div
                  className="btn-center mt-b-40"
                  onClick={handleNextPageClick}
                >
                  <ButtonLayout
                    name="MAIS"
                    img={<BsFillArrowRightSquareFill />}
                  ></ButtonLayout>
                </div>
            </Container>
          </>
        )}
      </main>
    </>
  );
}

export default Client;
