import { useEffect, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import ButtonLayout from '../../components/ButtonLayout';
import LoadingPage from '../../components/LoadingPage/loading';
import { ExpenseDTO } from '../../models/Expense';
import * as expenseServices from '../../services/expense-services';
import { Container, ContentList } from './style';
import TableRowExpense from './TableRowExpense';

type QueryParams = {
  page: number;
  name: string;
};

type PropsParent = {
  params: string;
};

function Expense({ params }: PropsParent) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const [expenseList, setExpenseList] = useState<ExpenseDTO[]>([]);

  const [isListPage, setisListPage] = useState(false);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  //Fazer a requisição com os params passados
  useEffect(() => {
    expenseServices
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setExpenseList(expenseList.concat(nextPage));
        setisListPage(response.data.last);
      });
  }, [queryParams]);
  //Proxima pagina
  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleNewClick() {
    navigate("/expense/create");
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
                    ? expenseList
                        .filter((x) => x.name.includes(params))
                        .map((x) => (
                          <TableRowExpense
                            key={x.id}
                            expense={x}
                          ></TableRowExpense>
                        ))
                    : expenseList.map((obj) => (
                        <TableRowExpense
                          key={obj.id}
                          expense={obj}
                        ></TableRowExpense>
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

export default Expense;
