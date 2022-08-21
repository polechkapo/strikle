/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { editUser } from '../store/userReducer/reducer';
// import { loadGenres } from '../store/genresReducer/reducer';
import ChangeAvatar from './ChangeAvatar';
import ChangeInfo from './ChangeInfo';
import ChangeGenres from './ChangeGenres';
import ChangePassword from './ChangePassword';
import ChangeArtists from './ChangeArtists';

function Profile() {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [genresArr, setGenresArr] = useState([]);
  // const genres = useSelector((state) => state.genres);
  // console.log(user, 'profile user');
  // useEffect(() => {
  //   dispatch(loadGenres());
  // }, []);

  return (
    <div>
      <h1>Личный кабинет</h1>
      {user
        ? (
          <>
            <ChangeInfo />
            <ChangePassword />
            <ChangeAvatar />
            <ChangeGenres />
            <ChangeArtists />
          </>
        )
        : <div>Loading</div>}
    </div>
  );
}

export default Profile;
