import './style.scss';

import { useEffect, useState } from 'react';

import ButtonLayout from '../../components/ButtonLayout';
import SearchBar from '../../components/SearchBar';
import { categoryDTO } from '../../models/category';
import TableRowCategory from './TableRowCategory';
import * as categoryServices from '../../services/category-services'
import { BsFillArrowRightSquareFill } from "react-icons/bs";

type QueryParams = {
   page: number;
   name: string;
}


function Category() {

  
   const [categoryList, setCategoryList] = useState<categoryDTO[]>([]);

   const [isListPage, setisListPage] = useState(false);

   const [queryParams, setQueryParams] = useState<QueryParams>({
      page: 0,
      name: ""
   });


   //Fazer a requisição com os params passados
   useEffect(() => {
      categoryServices.findPageRequest(queryParams.page, queryParams.name).then(response => {
         const nextPage = response.data.content;
         setCategoryList(categoryList.concat(nextPage));
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
                        <th>Descrição</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        categoryList.map(obj => <TableRowCategory key={obj.id} category={obj}></TableRowCategory>)
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

export default Category;
