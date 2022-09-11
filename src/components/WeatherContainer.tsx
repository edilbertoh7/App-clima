import { useEffect, useState } from "react";
import { CityLocation } from "./CityLocation";

export const WeatherContainer = ({
    fetchedData, error
}: {
    fetchedData: any;
    error: string
}) => {

    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temperature: 0,
        descripcion: "",
        icon: "",
        humidity: "",
        feels: "",
        visibility: "",
        pressure: "",
        longitude: "",
        latitude: "",
        windSpeed: "",
    });

    useEffect(() => {
        if (fetchedData) {
            setWeather({
                city: fetchedData.name,
                country: fetchedData.sys.country,
                temperature: Math.floor(fetchedData.main.temp - 273),
                descripcion: fetchedData.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`,
                humidity: fetchedData.main.humidity + "%",
                feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
                visibility: fetchedData.visibility + "m",
                pressure: fetchedData.main.pressure + "hpa",
                longitude: fetchedData.coord.lon,
                latitude: fetchedData.coord.lat,
                windSpeed: fetchedData.wind.speed + "m/s",
            });
        }

    }, [fetchedData])
    return (
        <main className="w-96 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-400 shadow-lg">
            <div className="flex w-full items-center flex-col p-8">
                <CityLocation />
                <h1>Grados</h1>
                <h1>Tabla de Información</h1>
            </div>
        </main>
    )
}