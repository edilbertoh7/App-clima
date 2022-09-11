import { WeatherContainer } from "./components/WeatherContainer"



function App() {
 

  return (
    <div className="w-full h-screen flex  justify-center items-center ">
      <WeatherContainer fetchedData = '' error =''/>
    </div>
  )
}

export default App
