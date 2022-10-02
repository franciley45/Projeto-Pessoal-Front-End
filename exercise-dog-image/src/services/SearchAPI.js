const request = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const REQUEST = await fetch(URL);
  const JONS = await REQUEST.json();
  JONS.isChecked = false;
  return JONS;
};
export default request;
