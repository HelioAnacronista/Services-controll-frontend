import { useEffect, useState } from 'react';

import { dataDTO } from '../../models/data';
import * as dashServices from '../../services/dashcard-services';
import CardLayoutDashboard from '../CardSummaryDashboard';
import { Container } from './style';

function Summary() {
  const getData = (nameRequest: any) => {
    const [data, setData] = useState<dataDTO>({
      icon: "",
      sector: 0,
      operation: "",
      value: 1,
      percentage: 0,
      date: "",
    });

    useEffect(() => {
      dashServices.getAccounting(nameRequest).then((res) => {
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

  return (
    <>
      <Container className="">
        <div className="mx-20">
          <CardLayoutDashboard dateCard={vendasData}></CardLayoutDashboard>
        </div>
        <div className="mx-20">
          <CardLayoutDashboard dateCard={gastosData}></CardLayoutDashboard>
        </div>
        <div className="mx-20">
          <CardLayoutDashboard dateCard={totalData}></CardLayoutDashboard>
        </div>
      </Container>
    </>
  );
}

export default Summary;
