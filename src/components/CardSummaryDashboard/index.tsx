import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { dataDTO } from "../../models/data";
import { Container } from "./style";

type Props = {
  dateCard: dataDTO;
};

function CardSummaryDashboard({ dateCard }: Props) {
  function getColors(): string {
    return String(dateCard.sector);
  }

  //ReactApexs
  const config: ApexOptions = {
    colors: [getColors()],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
      },
    },
    labels: [""],
  };

  //Definite a porcetagem
  function getPorcetege(): number[] {
    return [Number(dateCard.percentage.toFixed(1))];
  }

  return (
    <>
      <Container className="card-style">
        <img
          className="icons-sharp"
          style={{ backgroundColor: getColors() }}
          src={dateCard.icon}
          alt=""
        />

        <div className="card-center">
          <div className="card-datas">
            <div>{dateCard.operation}</div>

            <div>
              <h1>R${dateCard.value.toFixed(2)}</h1>
            </div>
          </div>

          <div id="chart">
            <Chart
              options={config}
              series={getPorcetege()}
              type="radialBar"
              height={200}
            />
          </div>
        </div>

        <small className="times">Ultima consulta {dateCard.date}</small>
      </Container>
    </>
  );
}

export default CardSummaryDashboard;
