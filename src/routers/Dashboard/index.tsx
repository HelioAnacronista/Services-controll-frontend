import { Container, ContentList, ContentTop } from './style'

import { useEffect, useState } from 'react'

import CardLayoutDashboard from '../../components/CardLayoutDashboard'
import CardRecentUpdates from '../../components/CardRecentUpdates'
import LoadingPage from '../../components/LoadingPage/loading'
import { objattDTO } from '../../models/objattDTO'
import { WorkDTO } from '../../models/work'
import * as dashServices from '../../services/dashcard-services'
import * as workServices from '../../services/work-services'
import TableRowDash from './TableRowDash'
import { dataDTO } from '../../models/data'

function Dashboard() {
  const [loading, setLoading] = useState(true)

  const getData = (nameRequest: any) => {
    const [data, setData] = useState<dataDTO>({
      icon: '',
      sector: 0,
      operation: '',
      value: 1,
      percentage: 0,
      date: '',
    })

    useEffect(() => {
      dashServices.getAccounting(nameRequest).then((res) => {
        setData(res.data)
      })
    }, [])

    return data
  }

  // VENDAS
  const vendasData = getData('/work/totalvalue')

  // GASTOS
  const gastosData = getData('/expense/totalvalue')

  // TOTAL
  const totalData = getData('/accounting/total')

  //Lista dos 8 ultimos serviços
  const [worklast, setWorklast] = useState<WorkDTO[]>([])
  useEffect(() => {
    workServices
      .getLast()
      .then((res) => {
        setWorklast(res.data)
        setLoading(false)
      })
      .catch((err) => {})
  }, [])

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <>
          <Container className="container">
            <div className="">
               
              <ContentTop>
                <div className="mx-20">
                  {' '}
                  <CardLayoutDashboard
                    dateCard={vendasData}
                  ></CardLayoutDashboard>{' '}
                </div>
                <div className="mx-20">
                  {' '}
                  <CardLayoutDashboard
                    dateCard={gastosData}
                  ></CardLayoutDashboard>{' '}
                </div>
                <div className="mx-20">
                  {' '}
                  <CardLayoutDashboard
                    dateCard={totalData}
                  ></CardLayoutDashboard>{' '}
                </div>
              </ContentTop>

              <ContentList>
                <div>
                  <h1 className="list-title">Serviços recentes</h1>
                  <div>
                    <table>
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
  )
}

export default Dashboard
