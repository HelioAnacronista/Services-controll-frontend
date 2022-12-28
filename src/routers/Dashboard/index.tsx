import './style.scss';

import { useEffect, useState } from 'react';

import CardLayoutDashboard from '../../components/CardLayoutDashboard';
import CardRecentUpdates from '../../components/CardRecentUpdates';
import LoadingPage from '../../components/LoadingPage/loading';
import { objattDTO } from '../../models/objattDTO';
import { WorkDTO } from '../../models/work';
import * as dashServices from '../../services/dashcard-services';
import * as workServices from '../../services/work-services';
import TableRowDash from './TableRowDash';


let objAttRecents: objattDTO = {
   name: "Aviso",
   work: "Essa aplicação é apenas para teste e demonstração. Ela foi criada para demonstrar algumas funcionalidades ou para ser usada em testes de sistema. Por motivos de performance, os sistemas de validação estão desligados nesta aplicação. Portanto, ela não deve ser utilizada em ambientes reais ou para realizar tarefas importantes. Por favor, não confie nela para realizar tarefas importantes ou tomar decisões importantes. Ela é apenas uma ferramenta de teste e demonstração."
}

let arrayobjattDTO: objattDTO[] = [];
arrayobjattDTO.push(objAttRecents);

type dataDTO = {
   icon: string,
   sector: number,
   operation: string,
   value: number,
   percentage: number,
   date: string
}

function Dashboard() {

   const [loading, setLoading] = useState(true);
   

   const getData = (nameRequest: any) => {
      const [data, setData] = useState<dataDTO>({
         icon: "",
         sector: 0,
         operation: "",
         value: 1,
         percentage: 0,
         date: ""
      });

      useEffect(() => {
         dashServices.getAccounting(nameRequest).then(res => {
            setData(res.data);
         });
      }, []);

      return data;
   };

   // VENDAS
   const vendasData = getData("/work/totalvalue");

   // GASTOS
   const gastosData = getData("/expense/totalvalue");

   // TOTAL
   const totalData = getData("/accounting/total");


   //Lista dos 8 ultimos serviços
   const [worklast, setWorklast] = useState<WorkDTO[]>([]);
   useEffect(() => {
      workServices.getLast().then(res => {
         setWorklast(res.data)
         setLoading(false);
      }).catch(err => {
      })
   }, []);

   return (
      <>
         {
            loading ?
               (
                  <LoadingPage></LoadingPage>
               )
               :
               (
                  <>
                     <div className='container'>
                        <div className=''>

                           <div className='container-dash'>
                              <div className='cards-analises'>  <CardLayoutDashboard dateCard={vendasData}></CardLayoutDashboard> </div>
                              <div className='cards-analises'>  <CardLayoutDashboard dateCard={gastosData}></CardLayoutDashboard> </div>
                              <div className='cards-analises'>  <CardLayoutDashboard dateCard={totalData}></CardLayoutDashboard>  </div>
                           </div>

                           <div className='container-list'>
                              <div className='list-title'>
                                 <h1>Serviços recentes</h1>
                                 <div className='line-vertical'></div>
                                 <div>

                                    <table className="table-striped">
                                       <thead>
                                          <tr>
                                             <th>id</th>
                                             <th>Serviço</th>
                                             <th>Valor</th>
                                             <th>Status</th>
                                             <th>Nome do Cliente</th>
                                             <th>Contato</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {
                                             worklast.map(obj => <TableRowDash key={obj.id} work={obj}></TableRowDash>)
                                          }
                                       </tbody>
                                    </table>

                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='container-direito card-att-msg'>
                           {
                              arrayobjattDTO.map(obj => <CardRecentUpdates objattDTO={obj} />)
                           }
                        </div>
                     </div>
                  </>
               )}
      </>
   );
}

export default Dashboard;

