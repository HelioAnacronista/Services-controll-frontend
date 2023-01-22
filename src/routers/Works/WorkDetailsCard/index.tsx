import { WorkDTO } from '../../../models/work';
import { Container, ContentFrom } from './style';

type Props = {
  work: WorkDTO;
};

const statusColors = {
  ABERTO: {
    name: "ABERTO",
    color: "#7380EC",
  },
  AGUARDANDO_PAGAMENTO: {
    name: "AGUARDANDO PAGAMENTO",
    color: "#FFBB55",
  },
  PAGO: {
    name: "PAGO",
    color: "#41f1b6",
  },
};

function WorkDetailsCard({ work }: Props) {
  function retornaStatus(status: any) {
    if (status == "1") {
      return statusColors.ABERTO;
    } else if (status == "2") {
      return statusColors.AGUARDANDO_PAGAMENTO;
    } else {
      return statusColors.PAGO;
    }
  }

  return (
    <>
      <Container>
        <div className="title">
          <h3>Detalhes do serviço: {work.name}</h3>
        </div>
        <ContentFrom>
          <div className="card-from">
            <div className="details-card-work style-card-details">
              <div>
                <h4>
                  {" "}
                  <span>Nome do serviço:</span> {work.name}
                </h4>
              </div>
              <div>
                <h4 style={{ color: retornaStatus(work.status).color }}>
                  <span>Status: </span>{" "}
                  {retornaStatus(Number(work.status)).name}
                </h4>
              </div>
              <div>
                <h4>
                  {" "}
                  <span>Valor: </span> R${work.valor?.toFixed(2)}
                </h4>
              </div>
            </div>

            <div className="details-card-cliet style-card-details">
              <div>
                <h4>
                  {" "}
                  <span>Nome do cliente: </span> {work.client.name}
                </h4>
              </div>
              <div>
                <h4>
                  <span>Telefone: </span> {work.client.phone}
                </h4>
              </div>
              <div>
                <h4>
                  {" "}
                  <span>Endereço: </span> {work.client.address}
                </h4>
              </div>
            </div>

            <div className="details-card-category style-card-details">
              <div>
                <h4>
                  {" "}
                  <span>Nome da categoria</span> {work.category.name}
                </h4>
              </div>
              <div>
                <h4>
                  {" "}
                  <span>descriçao da categoria: </span>{" "}
                  {work.category.description}
                </h4>
              </div>
            </div>
          </div>
        </ContentFrom>
      </Container>
    </>
  );
}

export default WorkDetailsCard;
