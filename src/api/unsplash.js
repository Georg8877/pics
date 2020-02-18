import axios from 'axios';

export default axios.create({

  baseURL: 'https://api.unsplash.com',
    headers:{
      Authorization:
       'Client-ID bf49f51dc3ecab7615a12dc4ea4d6facb9d405535392b7e824dac4d0d0d8ec70'
  }
});
