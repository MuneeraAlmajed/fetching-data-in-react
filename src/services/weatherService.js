const API_KEY = "900da8e1b67445d891765514260309";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  const queryString = `${BASE_URL} &q=${city}`;

  try {
    const jsonRes = await fetch(queryString);
    const data = await jsonRes.json();
    
        return data;
  } catch (err) {
    console.log(err.message);
  }
};


export {
    show,
}