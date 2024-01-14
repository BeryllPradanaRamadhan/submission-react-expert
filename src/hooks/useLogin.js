import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../state/authUser/action';

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function login({ email, password }) {
    try {
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return { login };
}
