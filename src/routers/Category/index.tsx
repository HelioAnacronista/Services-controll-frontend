import './style.scss';

import { useEffect, useState } from 'react';

import ButtonLayout from '../../components/ButtonLayout';
import SearchBar from '../../components/SearchBar';
import { categoryDTO } from '../../models/category';
import TableRowCategory from './TableRowCategory';
import * as categoryServices from '../../services/category-services'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import LoadingPage from '../../components/LoadingPage/loading';
import { Link, useNavigate } from 'react-router-dom';

type QueryParams = {
   page: number;
   name: string;
}

type PropsParent = {
   params: string
}

function Category({ params }: PropsParent) {

   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 300);
   }, []);

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

   function handleNewClick() {
      navigate("/category/create");
   }

   return (
      <main>
         {loading ?
            (
               <LoadingPage></LoadingPage>
            )
            :
            (
               <>
                  <div>

                     <div className='btn-test table-bottom btn-icon-test' onClick={handleNewClick}>           
                        <ButtonLayout name="CRIAR" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
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
                              {(params) ?
                                 categoryList.filter((x) => x.name.includes(params)).map(x => <TableRowCategory key={x.id} category={x}></TableRowCategory>)
                                 :
                                 categoryList.map(obj => <TableRowCategory key={obj.id} category={obj}></TableRowCategory>)
                              }
                           </tbody>

                           <div className="table-bottom" onClick={handleNextPageClick}>
                              <ButtonLayout name="PROXIMA" img={<BsFillArrowRightSquareFill />}  ></ButtonLayout>
                           </div>

                        </table>
                     </div>
                  </div>
               </>
            )
         }

      </main>
   );
};

export default Category;
