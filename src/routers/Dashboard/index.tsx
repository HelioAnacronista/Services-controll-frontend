import { useEffect, useState } from "react";

import LoadingPage from "../../components/LoadingPage/loading";
import Summary from "../../components/Summary";
import { WorkDTO } from "../../models/work";
import * as workServices from "../../services/work-services";
import { Container, ContentList } from "./style";
import TableRowDash from "./TableRowDash";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  //Lista dos 8 ultimos serviços
  const [worklast, setWorklast] = useState<WorkDTO[]>([]);
  useEffect(() => {
    workServices
      .getLast()
      .then((res) => {
        setWorklast(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <>
          <Container className="container">
            <div>

              <Summary></Summary>

              <ContentList>
                <div>
                  <h1 className="list-title">Serviços recentes</h1>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Serviço</th>
                          <th>Valor</th>
                          <th>Status</th>
                          <th>Cliente</th>
                          <th>Contato</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {worklast.map((obj) => (
                          <TableRowDash key={obj.id} work={obj}></TableRowDash>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentList>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default Dashboard;
