import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { dataDTO } from '../../models/data';

type Props = {
   dateCard: dataDTO;
}



function CardLayoutDashboard({ dateCard }: Props) {


   function getColors(): string {
      return String(dateCard.sector);
   }

   //ReactApexs
   const config: ApexOptions = {
      colors: [getColors()],
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
    };



   //Definite a porcetagem
   function getPorcetege(): number[] {
      return [Number(dateCard.percentage.toFixed(1))];
   }


   return (
      <>
         <div className="card-sales">
            <img className='icons-sharp' style={{ backgroundColor: getColors() }} src={dateCard.icon} alt="" />
            <div className="card-infos">
               <div className="card-datas">
                  <h3>{dateCard.operation}</h3>
                  <h1>R${dateCard.value.toFixed(2)}</h1>
               </div>
               <div className="progress">

                  <div id="chart">
                     <Chart options={config} series={getPorcetege()} type="radialBar" height={200} />
                  </div>

               </div>
            </div>
            <small className="times">Ultima consulta {dateCard.date}</small>
         </div>
      </>
   );
}

export default CardLayoutDashboard;
