import { useContext, useEffect, useState } from "react";
import * as React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ButtonLayout from "../../components/ButtonLayout";
import LoadingPage from "../../components/LoadingPage/loading";
import { ClientDTO } from "../../models/client";
import * as clientServices from "../../services/client-services";
import { Container, ContentList } from "./style";
import TableRowClient from "./TableRowClient";
import TableRowClientMobile from "./TableRowClientMobile";

type QueryParams = {
  page: number;
  name: string;
};

type PropsParent = {
  params: string;
};

function Category({ params }: PropsParent) {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<ClientDTO[]>([]);

  const [isListPage, setisListPage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  //Fazer a requisição com os params passados
  useEffect(() => {
    clientServices
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setCategoryList(categoryList.concat(nextPage));
        setisListPage(response.data.last);
      });
  }, [queryParams]);
  //Proxima pagina
  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleNewClick() {
    navigate("/category/create");
  }

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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

            <ContentList className="container">
              <table className="table-border">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    {screenWidth > 1000 ? (
                      <>
                        <th>Editar</th>
                        <th>Deletar</th>
                      </>
                    ) : null}
                  </tr>
                </thead>

                <tbody>
                  {params
                    ? categoryList
                        .filter((x) => x.name.includes(params))
                        .map((x) => <TableRowClient key={x.id} client={x} />)
                    : categoryList.map((obj) =>
                        screenWidth > 1000 ? (
                          <TableRowClient key={obj.id} client={obj} />
                        ) : (
                          <TableRowClientMobile key={obj.id} client={obj} />
                        )
                      )}
                </tbody>
              </table>
            </ContentList>
            <div className="btn-center mt-b-40" onClick={handleNextPageClick}>
              <ButtonLayout
                name="MAIS"
                img={<BsFillArrowRightSquareFill />}
              ></ButtonLayout>
            </div>
          </Container>
        </>
      )}
    </main>
  );
}

export default Category;
