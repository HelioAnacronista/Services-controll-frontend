import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profile.png";
import { UserDTO } from "../../models/user";
import * as userService from "../../services/user-services";
import { Container } from "./style";

function Profile() {
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Container className="container">
        <div className="card">
          <div>
            <Link to={`${user?.id}`}>
              <button>editar</button>
            </Link>
          </div>
          <div className="img">
            <img src={profileImg} alt="" />
          </div>
          <div>
            Nome: <h4>{user?.name}</h4>
          </div>
          <div>
            E-mail: <h4>{user?.email}</h4>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;
