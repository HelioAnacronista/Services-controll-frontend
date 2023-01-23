import { WorkDTO } from "../../../models/work";
import { Container, ContentFrom } from "./style";

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
                Nome do serviço: <h4>{work.name}</h4>
              </div>
              <div>
                Status:
                <h4 style={{ color: retornaStatus(work.status).color }}>
                  {retornaStatus(Number(work.status)).name}
                </h4>
              </div>
              <div>
                Valor: <h4>R${work.valor?.toFixed(2)}</h4>
              </div>
            </div>

            <div className="details-card-cliet style-card-details">
              <div>
                Nome do cliente: <h4>{work.client.name}</h4>
              </div>
              <div>
                Telefone: <h4>{work.client.phone}</h4>
              </div>
              <div>
                Endereço: <h4>{work.client.address}</h4>
              </div>
            </div>

            <div className="details-card-category style-card-details">
              <div>
                Nome da categoria <h4>{work.category.name}</h4>
              </div>
              <div>
                descriçao da categoria: <h4>{work.category.description}</h4>
              </div>
            </div>
          </div>
        </ContentFrom>
      </Container>
    </>
  );
}

export default WorkDetailsCard;
