
export const useLoginService = () => {

  const postLogin = async (username:any, password:any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'usuario' && password === 'senha') {
        resolve({
          id: 1,
          username: username,
          email: 'usuario@example.com',
        });
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    }, 1000); 
  });
    };
  
    return {postLogin};
    
  };
  