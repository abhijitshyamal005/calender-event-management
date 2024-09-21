import { useEffect, useState } from 'react';
import api from '../services/api';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get('/auth/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    getUserData();
  }, []);

  return { user };
};

export default useAuth;
