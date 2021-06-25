import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.0.102:3001',
  timeout: 1000,
});

/**
 * Function that fetches all perfumes by category
 * @param  {string} category query param
 */
export const getPerfumes = async category => {
  try {
    const queryParam = category ? `?category=${category}`: ''
    const perfumesList = await instance.get(`/perfumes${queryParam}`);
    return perfumesList.data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Gets a particular product selected
 * @param  {Number} id of product in collection
 */
export const getProduct = async id => {
  console.log('id', id)
  try {
    const product = await instance.get(`/perfumes/${id}`);
    return product.data;
  } catch (err) {
    console.error(err);
  }
};

// For possible future use
export const signIn = async token => {
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

