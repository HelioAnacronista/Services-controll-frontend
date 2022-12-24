import { dashboardCardDTO } from '../../models/dashboard-cardDTO';
import ApexChart from '../ApexChart';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

type Props = {
   dateCard: dashboardCardDTO;
}

function CardLayoutDashboard({ dateCard }: Props) {

   const [options, setOptions] = useState({
      chart: {
         height: 350,
         type: 'radialBar', // specify a predefined chart type here
      },
      plotOptions: {
         radialBar: {
            hollow: {
               size: '50%',
            }
         },
      },
      labels: ['Cricket'],
   });

   function findSeries(): number {
      return dateCard.percentage;
   }

   const [series, setSeries] = useState([findSeries()]);

   

   return (
      <>
         <div className="card-sales">
            <img className='icons-sharp' src={dateCard.icon} alt="" />
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
            <small className="times">Ultimas {dateCard.date}</small>
         </div>
      </>
   );
}

export default CardLayoutDashboard;