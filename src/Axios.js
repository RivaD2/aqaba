import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

export const getPerfumes = async category => {
  try {
    const queryParam = category ? `?category=${category}`: ''
    const perfumesList = await instance.get(`/perfumes${queryParam}`);
    return perfumesList.data;
  } catch (err) {
    console.error(err);
  }
};

export const getProduct = async id => {
  try {
    const product = await instance.get(`/perfumes/${id}`);
    return product.data;
  } catch (err) {
    console.error(err);
  }
};

export const signIn = async token => {
  console.log('show me the token', token);
  try {
    const requestOptions = {
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token
      })
    }
    const endpoint = '/user/sign-in';
    const response = await instance.post(endpoint, requestOptions);
    const json = await response.json();
    return json;
  }
  catch (err) {
    console.error(err);
  }
};

