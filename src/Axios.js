import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

export const getPerfumes = async () => {
  try {
    const perfumesList = await instance.get('/perfumes');
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