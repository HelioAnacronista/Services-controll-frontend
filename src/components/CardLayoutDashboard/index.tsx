import { dashboardCardDTO } from '../../models/dashboard-cardDTO';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

type Props = {
   dateCard: dashboardCardDTO;
}

const statusColors = {
   VENDAS: {
      value: 'ABERTO',
      color: '#41f1b6'
   },
   GASTOS: {
      value: 'AGUARDANDO PAGAMENTO',
      color: '#FF7782'
   },
   TOTAL: {
      value: 'PAGO',
      color: '#7380EC'
   }
}


function CardLayoutDashboard({ dateCard }: Props) {

   function retornaStatus(status: any) {
      if (status === 1) {
         return statusColors.VENDAS;
      }
      if (status === 2) {
         return statusColors.GASTOS
      }
      return statusColors.TOTAL
   }


   const [options, setOptions] = useState({
      colors: [retornaStatus(dateCard.sector).color], 
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
        },
      },
      labels: [''],
    });

   
   const [series, setSeries] = useState([ dateCard.percentage ]);
   
   


   return (
      <>
         <div className="card-sales">
            <img className='icons-sharp' style={{backgroundColor: retornaStatus(dateCard.sector).color}} src={dateCard.icon} alt="" />
            <div className="card-infos">
               <div className="card-datas">
                  <h3>{dateCard.operation}</h3>
                  <h1>R${dateCard.value.toFixed(2)}</h1>
               </div>
               <div className="progress">

                  <div id="chart">
                     <Chart options={options} series={series} type="radialBar" height={200} />
                  </div>

               </div>
            </div>
            <small className="times">Ultima consulta {dateCard.date}</small>
         </div>
      </>
   );
}

export default CardLayoutDashboard;