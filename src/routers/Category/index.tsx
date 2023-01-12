import { Container, ContentList } from "./style";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ButtonLayout from "../../components/ButtonLayout";
import LoadingPage from "../../components/LoadingPage/loading";
import TableRowCategory from "./TableRowCategory";

import { CategoryDTO } from "../../models/category";
import * as categoryServices from "../../services/category-services";

type QueryParams = {
  page: number;
  name: string;
};

type PropsParent = {
  params: string;
};

function Category({ params }: PropsParent) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const [categoryList, setCategoryList] = useState<CategoryDTO[]>([]);

  const [isListPage, setisListPage] = useState(false);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  //Fazer a requisição com os params passados
  useEffect(() => {
    categoryServices
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
                    <th>Descrição</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                  </tr>
                </thead>

                <tbody>
                  {params
                    ? categoryList
                        .filter((x) => x.name.includes(params))
                        .map((x) => (
                          <TableRowCategory
                            key={x.id}
                            category={x}
                          ></TableRowCategory>
                        ))
                    : categoryList.map((obj) => (
                        <TableRowCategory
                          key={obj.id}
                          category={obj}
                        ></TableRowCategory>
                      ))}
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
