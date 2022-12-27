import './style.scss'

import { Link, useNavigate, useParams } from "react-router-dom";
import * as workServices from '../../../services/work-services'
import WorkDetailsCard from "../WorkDetailsCard";
import { WorkDTO } from "../../../models/work";
import { useState, useEffect } from "react";
import ButtonLayout from "../../../components/ButtonLayout";

function WorkDetails() {

   const params = useParams();

   const navigate = useNavigate();


   const [work, setWork] = useState<WorkDTO>();

   useEffect(() => {
      workServices.findById(Number(params.workId)).then(reponse => {
         console.log(reponse)
         setWork(reponse.data)
      })
      .catch( () => {
         
      });
   }, []);

   return (
      <>
      {
         work &&
         <WorkDetailsCard work={work} />
      }
      <div className="container work-details-btn">
         <Link to={'/work'}>
         <ButtonLayout name="Voltar"></ButtonLayout>
         </Link>
      </div>
      </>
   );
}

export default WorkDetails;