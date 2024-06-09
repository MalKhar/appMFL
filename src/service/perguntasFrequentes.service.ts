
import axios from 'axios';

export const usePerguntasFrequentesService = () => {

  const getPerguntaFrequente = async () => {
    const response = await axios.get(`http://192.168.18.143:3000/api/posts`);
      
    return response.data;
  };

  return {getPerguntaFrequente};
  
};


