import { dashboardCardDTO } from '../../models/dashboard-cardDTO';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

type Props = {
   dateCard: dashboardCardDTO;
}



function CardLayoutDashboard({ dateCard }: Props) {





   //ReactApexs
   const [config, setConfig] = useState({
      colors: "",
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

   /* O useEffect é uma função do React que permite que você execute uma determinada ação toda vez que algumas 
   condições são atendidas.
   No caso do código abaixo, a ação é a chamada da função getColors, 
   que retorna um array de strings contendo o valor de dateCard.sector convertido para string.
   As condições são especificadas no segundo parâmetro do useEffect, que no caso é um array contendo apenas dateCard.sector. 
   Isso significa que a função getColors será chamada toda vez que o valor de dateCard.sector for alterado.
   */
   useEffect(() => {
      // Essa é a função getColors. Ela retorna um array de strings contendo o valor de dateCard.sector convertido para string.
      function getColors(): string[] {
         return [String(dateCard.sector)];
      }
      // A função setConfig é chamada para atualizar o valor de config.
      // O novo valor de config é um objeto que possui as mesmas propriedades que o objeto atual, mas com a propriedade colors atualizada com o resultado da função getColors.
      setConfig({ ...config, colors: getColors() });
   }, [dateCard.sector]);


   //Definite a porcetagem
   function getPorcetege(): number[] {
      return [Number(dateCard.percentage.toFixed(1))];
   }


   return (
      <>
         <div className="card-sales">
            <img className='icons-sharp' style={{ backgroundColor: (dateCard.sector) }} src={dateCard.icon} alt="" />
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
