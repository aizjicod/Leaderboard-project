const setStorage = (score) => {
  localStorage.setItem('scores', JSON.stringify(score));
};

const getStorage = () => {
  if (localStorage.getItem('scores') === null) {
    return null;
  }
  return JSON.parse(localStorage.getItem('scores'));
};

const removeStorageItem = () => {
  localStorage.removeItem('scores');
};

export default {
  setStorage,
  getStorage,
  removeStorageItem,
};