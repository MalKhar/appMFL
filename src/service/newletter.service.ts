
import axios from 'axios';

export const useListNewsletterService = () => {


  const getListNewsletter = async () => {
    const response = await axios.get(`http://192.168.18.143:3000/api/newsletter/`);
      
    return response.data;
  };

  return {getListNewsletter};
  
};


