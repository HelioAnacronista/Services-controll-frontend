import { ContainerList } from "./style";

import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ButtonLayout from "../../components/ButtonLayout";
import LoadingPage from "../../components/LoadingPage/loading";
import * as categoryServices from "../../services/category-services";
import TableRowCategory from "./TableRowCategory";
import { CategoryDTO } from "../../models/category";
import TableRowCategoryMobile from "./TableCategory";

type QueryParams = {
  page: number;
  name: string;
};

type PropsParent = {
  params: string;
};

const media = {
  mobile: `@media(max-width: 375px)`,
  tablet: `@media(max-width: 768px)`,
  desktop: `@media(max-width: 1280px)`,
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

  console.log(window.matchMedia(media.mobile).matches);
  return (
    <main>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <>
          <div>
            <div
              className="btn-test table-bottom btn-icon-test"
              onClick={handleNewClick}
            >
              <ButtonLayout
                name="CRIAR"
                img={<BsFillArrowRightSquareFill />}
              ></ButtonLayout>
            </div>

            <ContainerList>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    categoryList.map(obj => <TableRowCategory category={obj} key={obj.id}/>)
                  }
                </tbody>

                <div onClick={handleNextPageClick}>
                  <ButtonLayout
                    name="PROXIMA"
                    img={<BsFillArrowRightSquareFill />}
                  ></ButtonLayout>
                </div>
              </table>
            </ContainerList>

          </div>
        </>
      )}
    </main>
  );
}

export default Category;
