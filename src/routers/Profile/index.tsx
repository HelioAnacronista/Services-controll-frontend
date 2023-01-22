import { useEffect, useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import profileImg from '../../assets/profile.png';
import { UserDTO } from '../../models/user';
import * as userService from '../../services/user-services';
import { Container } from './style';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <>
      <Container className="container">
        <div className="card">
          <div>
            <button
              onClick={() => navigate(`${user?.id}`)}
              className="btn-edit"
            >
              <MdModeEditOutline size={34} />
            </button>
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
