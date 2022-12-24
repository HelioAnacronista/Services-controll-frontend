import CardLayoutDashboard from '../../components/CardLayoutDashboard'
import CardRecentUpdates from '../../components/CardRecentUpdates'
import { dashboardCardDTO } from '../../models/dashboard-cardDTO'
import { objattDTO } from '../../models/objattDTO'
import './style.scss'


let objVendas: dashboardCardDTO = {
   icon: "https://drscdn.500px.org/photo/1058330716/m%3D900/v2?sig=f211a5fef5b34e0bae5ab0d8d5a10ee64e495b826ae0a73c5b02bb0d9b17286f",
   sector: '',
   operation: 'Total de Vendas',
   value: 25000,
   percentage: 86,
   date: '24'
}

let objGastos: dashboardCardDTO = {
   icon: "https://drscdn.500px.org/photo/1058330718/m%3D900/v2?sig=08711b9ac2b71c6444e48e3b6f336e31ad92c813ad7f0be654000fa4170f696c",
   sector: '',
   operation: 'Total de Gastos',
   value: 12185,
   percentage: 67,
   date: '24'
}

let objTotal: dashboardCardDTO = {
   icon: "https://drscdn.500px.org/photo/1058330717/m%3D900/v2?sig=a143ee3ab301aebc502b96e641bfcb0b8b5866441a08c9c98daa7931cb948b41",
   sector: '',
   operation: 'Receita Total',
   value: 10845,
   percentage: 44,
   date: '24'
}

let objAttRecents : objattDTO = {
   name: "Maria Alves",
   work: "Conserto de barra"
}

let objAttRecents2 : objattDTO = {
   name: "João Silva",
   work: "Conserto de carro"
}


let arrayobjattDTO: objattDTO[] = [];
arrayobjattDTO.push(objAttRecents);
arrayobjattDTO.push(objAttRecents2);



//apexcharts depe para fazer os graficos

function Dashboard() {
   return (
      <>
         <div className='container'>
            <div className=''>

            <div className='container-dash'>
            <div className='cards-analises'>  <CardLayoutDashboard dateCard={objVendas}></CardLayoutDashboard> </div>
                  <div className='cards-analises'>  <CardLayoutDashboard dateCard={objGastos}></CardLayoutDashboard> </div>
                  <div className='cards-analises'>  <CardLayoutDashboard dateCard={objTotal}></CardLayoutDashboard>  </div>
               </div>

               <div className='container-list'>
                  <div className='list-title'>
                     <h1>Serviços recentes</h1>
                     <div className='line-vertical'>
                     </div>
                     <div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='container-direito card-att-msg'>
               {
                  arrayobjattDTO.map(obj => <CardRecentUpdates objattDTO={obj}/>)
               }
            </div>
         </div>
      </>
   );
}

export default Dashboard;

