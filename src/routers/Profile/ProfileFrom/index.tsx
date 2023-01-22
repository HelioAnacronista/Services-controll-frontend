import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ButtonLayout from '../../../components/ButtonLayout';
import FromInput from '../../../components/FromInput';
import * as userService from '../../../services/user-services';
import * as froms from '../../../utils/from';
import { ActionsBtn, Container, ContentFrom } from './style';

function ProfileFrom() {
  const navigate = useNavigate();

  const params = useParams();

  const isEditing = params.userId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Escreva seu nome",
    },
    email: {
      value: "",
      id: "email",
      name: "email",
      type: "text",
      placeholder: "Escreva uma email",
    },
  });

  //Atualizar os valores do fromData usando a função fromsUpdate
  useEffect(() => {
    if (isEditing) {
      userService.findById(Number(params.userId)).then((res) => {
        setFormData(froms.updateAll(formData, res.data));
      });
    }
  }, []);

  function handleInputChange(event: any) {
    setFormData(froms.update(formData, event.target.name, event.target.value));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const requstBody = froms.toValues(formData);
    if (isEditing) {
      requstBody.id = params.userId;
    }
    console.log(requstBody);
    const request = userService.updateRequest(requstBody);

    request.then(() => {
      navigate("/profile");
    });
  }

  return (
    <>
      <Container>
        <div className="title">
          <h3>Profile</h3>
        </div>

        <ContentFrom>
          <div className="card-from">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <h3>Nome:</h3>
                </div>
                <FromInput
                  {...formData.name}
                  className="input-c-c"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div>
                  <h3>email:</h3>
                </div>
                <FromInput
                  {...formData.email}
                  className="input-c-c"
                  onChange={handleInputChange}
                />
              </div>
              <ActionsBtn>
                <div className="save">
                  <ButtonLayout name="SALVAR"></ButtonLayout>
                </div>

                <div className="cancel">
                  <Link to={"/profile"}>
                    <ButtonLayout name="CANCELAR"></ButtonLayout>
                  </Link>
                </div>
              </ActionsBtn>
            </form>
          </div>
        </ContentFrom>
      </Container>
    </>
  );
}

export default ProfileFrom;
