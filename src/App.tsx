import { FormEvent, useEffect, useState } from "react"
import { getWeatherByCoords, getWeatherBySearch } from "./api/FetchWeather"
import { SearchBox } from "./components/SearchBox"
import { WeatherContainer } from "./components/WeatherContainer"



function App() {
  const [fetchedData, setFetchedData] = useState(null)
  const [error, setError] = useState('')

  //conexion al API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);
        console.log(data);
        
      } catch (error) {
        setError('por favor revise su conexion a internet 🖥️')
      }
    })
  }, [])

  //Buscador

  const handleSearch = async (e: FormEvent<HTMLFormElement>,CITY: string)=>{
    e.preventDefault();
    setError("")
    try {
      const data = await getWeatherBySearch(CITY);
      
      
      if (data === "404") {
        setError("no se encontro la ciudad")
      }else if (data === "400") {
        setError("Por avor escriba el nombre de una ciudad")
      }else{
        setFetchedData(data);
        
      }
      
    } catch (error) {
      setError('Por favor revise su conexión  INTERNET')
    }
  }
  
  return (
    <div className="w-full h-screen flex  justify-center items-center ">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  )
}

export default App
