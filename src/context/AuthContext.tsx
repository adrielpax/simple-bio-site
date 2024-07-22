import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

interface Props {
  children:React.ReactNode
}

export const AuthProvider = ({ children }:Props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Lógica para verificar autenticação
    const fetchUser = async () => {
      const response = await fetch('/api/auth/user');
      const result = await response.json();
      setUser(result);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
