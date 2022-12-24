import React, { useState } from 'react';


const ApexChart: React.FC = () => {

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

  const [series, setSeries] = useState([20]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={200} />
    </div>
  );
};

export default ApexChart;
