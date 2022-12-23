import { dashboardCardDTO } from '../../models/dashboard-cardDTO';


type Props = {
   dateCard: dashboardCardDTO;
}

function CardLayoutDashboard({ dateCard }: Props) {
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
                  {/* Colocar uma barra de progressão dinamica */}


                  <div className="value">
                     <p>{dateCard.percentage}%</p>
                  </div>
               </div>
            </div>
            <small className="times">Ultimas {dateCard.date}</small>
         </div>
      </>
   );
}

export default CardLayoutDashboard;