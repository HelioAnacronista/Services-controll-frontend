import './style.scss';


import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import ButtonLayout from '../../components/ButtonLayout';
import { WorkDTO } from '../../models/work';
import * as workServices from '../../services/work-services';
import TableRowWorks from './TableRowWorks';
import LoadingPage from '../../components/LoadingPage/loading';
import { useEffect, useState } from 'react';

type PropsParent = {
   params: string
}

type QueryParams = {
   page: number;
   name: string;
}



function Work({ params }: PropsParent) {

   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 1000);
   }, []);

   const [worksList, setWorksList] = useState<WorkDTO[]>([]);

   const [isListPage, setisListPage] = useState(false);

   const [queryParams, setQueryParams] = useState<QueryParams>({
      page: 0,
      name: ""
   });

   //Fazer a requisição com os params passados
   useEffect(() => {
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
     

            {loading ? 
            (
               <LoadingPage></LoadingPage>
            ) :
            (
               <>
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
                        worksList.filter((x) => x.name.includes(params)).map(work => <TableRowWorks key={work.id} work={work}></TableRowWorks>)
                        :
                        worksList.map(work => <TableRowWorks key={work.id} work={work}></TableRowWorks>)
                     }
                  </tbody>

                  <div className="table-bottom" onClick={handleNextPageClick}>
                     <ButtonLayout name="PROXIMA" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
                  </div>

               </table>
            </div>
            </>

            )}
            
         
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