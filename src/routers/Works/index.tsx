import { useEffect, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import ButtonLayout from '../../components/ButtonLayout';
import LoadingPage from '../../components/LoadingPage/loading';
import { WorkDTO } from '../../models/work';
import * as workServices from '../../services/work-services';
import { Container, ContentList } from './style';
import TableRowWorkMobile from './TableRowWorkMobile';
import TableRowWorks from './TableRowWorks';

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
                    <th>Cliente</th>
                    <th>Valor</th>

                    {screenWidth > 1000 ? (
                      <>
                        <th>Status</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                      </>
                    ) : null}
                  </tr>
                </thead>

                <tbody>
                  {params
                    ? worksList
                        .filter((x) => x.name.includes(params))
                        .map((x) => <TableRowWorks key={x.id} work={x} />)
                    : worksList.map((obj) =>
                        screenWidth > 1000 ? (
                          <TableRowWorks key={obj.id} work={obj} />
                        ) : (
                          <TableRowWorkMobile key={obj.id} work={obj} />
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
