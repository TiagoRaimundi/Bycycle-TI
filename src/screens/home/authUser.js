import { useEffect, useState } from 'react';
import { auth } from '../home/mapa/firebase'; // Importe a configuração do Firebase Authentication

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Função para fazer o cleanup do listener ao desmontar o componente
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    // Retornar uma função de cleanup
    return () => unsubscribe();
  }, []);

  return { user };
}
