const getData = async () => {
  const url = "https://fakestoreapi.com/products?limit=6";

  const data = await fetch(url, {mode: 'cors'});
  const response = await data.json();
  return response;
}

export default getData;