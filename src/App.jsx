import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState , useEffect } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App(){
  const [weather, setWeather] = useState({});
  const fetchData = async(city) => {
  const data = await weatherService.show(city);
     
     const weatherCondition = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };

    setWeather(weatherCondition);

    useEffect(() => {
      const fetchDefaultData = async() => {
        const data = await weatherServices.show('Sydney');
        const newWeatherState = {
          location: data.location.name,
          temperature: data.current.temp_c,
          condition: data.current.condition.text,
        };
        setWeather(newWeatherState);
      };

      if(!weather.condition && !weather.temperature && !weather.location){
        return <h1>Loading....</h1>
      }

      fetchDefaultData();
    }, [dependency]);
   
    
  }
  return(
    <main>
      <h1>Weather API</h1>
      <WeatherSearch  fetchData={fetchData}/>
      <WeatherDetails weather={weather} />
     
    </main>
    )
}
export default App;