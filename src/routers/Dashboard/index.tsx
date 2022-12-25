import './style.scss';

import { useEffect, useState } from 'react';
import CardLayoutDashboard from '../../components/CardLayoutDashboard';
import CardRecentUpdates from '../../components/CardRecentUpdates';
import { objattDTO } from '../../models/objattDTO';
import { WorkDTO } from '../../models/work';
import * as workServices from '../../services/work-services';
import TableRowDash from './TableRowDash';
import * as dashServices from '../../services/dashcard-services'


let objAttRecents: objattDTO = {
   name: "Maria Alves",
   work: "Conserto de barra"
}

let objAttRecents2: objattDTO = {
   name: "João Silva",
   work: "Conserto de carro"
}


let arrayobjattDTO: objattDTO[] = [];
arrayobjattDTO.push(objAttRecents);
arrayobjattDTO.push(objAttRecents2);


/* CORES 
VERDE #41f1b6
AZUL  #7380EC
VERMELHO #FF7782
AMARELO #FFBB55
PRETO #363949

    --cor-branco: #FFF;
    --cor-info-dark: #7D8DA1;
    --cor-info-light: #DCE1EB;
*/

type dataDTO = {
   icon: string,
   sector: number,
   operation: string,
   value: number,
   percentage: number,
   date: string
 }

function Dashboard() {


   //VENDAS
   const[vendasData, setVendasData] = useState<dataDTO>({
      icon: "",
      sector: 0,
      operation: "",
      value: 1,
      percentage: 0,
      date: ""
   });
   useEffect(() => {
      dashServices.getRequstVendas().then(res => {
         setVendasData(res.data);
      })
   }, []);

   //GASTOS
   const[gastosData, setGastosData] = useState<dataDTO>({
      icon: "",
      sector: 0,
      operation: "",
      value: 1,
      percentage: 0,
      date: ""
   });
   useEffect(() => {
      dashServices.getRequstGastos().then(res => {
         setGastosData(res.data);
      })
   }, []);

   //TOTAL
   const[totalData, setTotalData] = useState<dataDTO>({
      icon: "",
      sector: 0,
      operation: "",
      value: 1,
      percentage: 0,
      date: ""
   });
   useEffect(() => {
      dashServices.getTotal().then(res => {
         setTotalData(res.data);
      })
   }, []);


   //Lista dos 8 ultimos serviços
   const [worklast, setWorklast] = useState<WorkDTO[]>([]);
   useEffect(() => {
      workServices.getLast().then(res => {
         setWorklast(res.data)
      }).catch(err => {
         console.log(err)
      })
   }, []);

   return (
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

                        <table className="table-work table-striped">
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
   );
}

export default Dashboard;

