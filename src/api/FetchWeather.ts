const key1 = '12288226fc128ea1996e8150e2ca7a94'//revisar esta key
                
const key2 = '86f3c39c4d9ea1a889322c1d14029f47'

const API_KEY = key1;

export const getWeatherByCoords = async (
    LAT:number,
    LON:number,
):Promise<any>=>{
    const API_CORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    const response = await fetch(API_CORDS);
    const data = await response.json()
    
    return data
};

export const getWeatherBySearch = async (
    CITY: string
):Promise<any>=>{
    const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

    const response = await fetch(API_CITY);
    const respData = response.json()
    
    return respData;
}