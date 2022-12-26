import './style.scss';

import * as React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import ButtonLayout from '../../components/ButtonLayout';
import { WorkDTO } from '../../models/work';
import * as workServices from '../../services/work-services';
import TableRowWorks from './TableRowWorks';

type PropsParent = {
   params: string
}

type QueryParams = {
   page: number;
   name: string;
}



function Work({ params }: PropsParent) {


   const [worksList, setWorksList] = React.useState<WorkDTO[]>([]);

   const [isListPage, setisListPage] = React.useState(false);

   const [queryParams, setQueryParams] = React.useState<QueryParams>({
      page: 0,
      name: ""
   });


   //Fazer a requisição com os params passados
   React.useEffect(() => {
      workServices.findPageRequest(queryParams.page).then(response => {
         const nextPage = response.data.content;
         setWorksList(worksList.concat(nextPage));
         setisListPage(response.data.last)
      })
   }, [queryParams]);

   //Proxima pagina
   function handleNextPageClick() {
      setQueryParams({ ...queryParams, page: queryParams.page + 1 })
   }


   return (
      <main>
         <div className="">

            <div className='btn-test table-bottom btn-icon-test'>
               <ButtonLayout name="CRIAR" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
            </div>

            <div style={{ display: 'flex' }} className="container-work" >
               <table className="table-work table-striped">
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
                     {(params) ?
                        worksList.filter((x) => x.name.includes(params)).map(x => <TableRowWorks key={x.id} work={x}></TableRowWorks>)
                        :
                        worksList.map(obj => <TableRowWorks key={obj.id} work={obj}></TableRowWorks>)
                     }
                  </tbody>

                  <div className="table-bottom" onClick={handleNextPageClick}>
                     <ButtonLayout name="PROXIMA" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
                  </div>

               </table>
            </div>
         </div>
      </main>
   );
};

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