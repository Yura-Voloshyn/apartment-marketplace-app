import apartments from '../jsonData/jsonData.json';

const exampleApartments = apartments;

export const getStorageItem = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const initialStorage = () => {
  window.localStorage.setItem('apartments', JSON.stringify(exampleApartments));
};

export const saveApartments = key => {
  window.localStorage.setItem('apartments', JSON.stringify(key));
};
