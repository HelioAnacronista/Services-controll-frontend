import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonLayout from "../../../components/ButtonLayout";
import { WorkDTO } from "../../../models/work";
import * as workServices from "../../../services/work-services";
import WorkDetailsCard from "../WorkDetailsCard";
import { ActionsBtn } from "./style";

function WorkDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [work, setWork] = useState<WorkDTO>();

  useEffect(() => {
    workServices
      .findById(Number(params.workId))
      .then((reponse) => {
        console.log(reponse);
        setWork(reponse.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {work && <WorkDetailsCard work={work} />}
      <ActionsBtn>
        <div className="btn-back">
          <Link to={"/work"}>
            <ButtonLayout name="Voltar"></ButtonLayout>
          </Link>
        </div>
      </ActionsBtn>
    </>
  );
}

export default WorkDetails;
