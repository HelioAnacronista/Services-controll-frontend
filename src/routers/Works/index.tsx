import { Container, ContentList } from "./style";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import LoadingPage from "../../components/LoadingPage/loading";
import ButtonLayout from "../../components/ButtonLayout";
import TableRowWorks from "./TableRowWorks";

import { WorkDTO } from "../../models/work";
import * as workServices from "../../services/work-services";

type PropsParent = {
  params: string;
};

type QueryParams = {
  page: number;
  name: string;
};

function Work({ params }: PropsParent) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [worksList, setWorksList] = useState<WorkDTO[]>([]);

  const [isListPage, setisListPage] = useState(false);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  //Fazer a requisição com os params passados
  useEffect(() => {
    workServices
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setWorksList(worksList.concat(nextPage));
        setisListPage(response.data.last);
        setLoading(false);
      });
  }, [queryParams]);

  //Proxima pagina
  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleNewClick() {
    navigate("/work/create");
  }

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

            <ContentList>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Serviço</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                    <th>Detalhes</th>
                  </tr>
                </thead>

                <tbody>
                  {params
                    ? worksList
                        .filter((x) => x.name.includes(params))
                        .map((work) => (
                          <TableRowWorks
                            key={work.id}
                            work={work}
                          ></TableRowWorks>
                        ))
                    : worksList.map((work) => (
                        <TableRowWorks
                          key={work.id}
                          work={work}
                        ></TableRowWorks>
                      ))}
                </tbody>
              </table>
              <div className="btn-center mt-b-40" onClick={handleNextPageClick}>
                <ButtonLayout
                  name="MAIS"
                  img={<BsFillArrowRightSquareFill />}
                ></ButtonLayout>
              </div>
            </ContentList>
          </Container>
        </>
      )}
    </main>
  );
}

export default Work;

/* contagem de paginação
 const[pagination , setPagination] = React.useState<dataPagination>({
    pageNumber: 0,
    totalPages: 0
 })
 React.useEffect(() => {
    workServices.findPageRequest(queryParams.page, queryParams.name).then(response => {
      setPagination({
        pageNumber: response.data.pageable.pageNumber,
        totalPages: response.data.totalPages
      });
    });
  }, []);
  */
