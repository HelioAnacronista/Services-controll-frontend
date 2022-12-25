import * as React from "react";
import './style.scss'
import { WorkDTO } from "../../models/work";
import TableRowWorks from "./TableRowWorks";
import ButtonLayout from "../../components/ButtonLayout";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import * as workServices from '../../services/work-services'
import SearchBar from "../../components/SearchBar";



type QueryParams = {
   page: number;
   name: string;
}


function Work() {


   const [worksList, setWorksList] = React.useState<WorkDTO[]>([]);

   const [isListPage, setisListPage] = React.useState(false);

   const [queryParams, setQueryParams] = React.useState<QueryParams>({
      page: 0,
      name: ""
   });


   //Fazer a requisição com os params passados
   React.useEffect(() => {
      workServices.findPageRequest(queryParams.page, queryParams.name).then(response => {
         const nextPage = response.data.content;
         setWorksList(worksList.concat(nextPage));
         setisListPage(response.data.last)
      })
   }, [queryParams]);
   //Pesquisa  
   function handleSearch(searchText: string) {
      setWorksList([]);
      setQueryParams({ ...queryParams, page: 0, name: searchText })
   }
   //Proxima pagina
   function handleNextPageClick() {
      setQueryParams({ ...queryParams, page: queryParams.page + 1 })
   }


   return (
      <main>
         <div className="">
            <div className="header-list-work">
               <div className="container-work">
               
               </div>
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
                     </tr>
                  </thead>

                  <tbody>
                     {
                        worksList.map(obj => <TableRowWorks key={obj.id} work={obj}></TableRowWorks>)
                     }
                  </tbody>

                  <div className="table-bottom" onClick={handleNextPageClick}>
                     <ButtonLayout name="PROXIMA" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
                  </div>

               </table>
               <div className="container-right">
                  <ButtonLayout name="CRIAR" ></ButtonLayout>
               </div>
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