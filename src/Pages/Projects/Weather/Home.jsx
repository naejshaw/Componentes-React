import React, { useState, useEffect } from "react";
import Site from "../../../Layouts/SiteLayout";

export default function Home() {
    // State for clock
    const [time, setTime] = useState({ hour: '00', minutes: '00', seconds: '00' });
    // State for weather data
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const key = "c0b197ed1de5f5db2a3c1241745a50b9";

    // Clock function
    useEffect(() => {
        const interval = setInterval(() => {
            const dateToday = new Date();
            setTime({
                hour: String(dateToday.getHours()).padStart(2, '0'),
                minutes: String(dateToday.getMinutes()).padStart(2, '0'),
                seconds: String(dateToday.getSeconds()).padStart(2, '0'),
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Fetch weather data
    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (err) {
            setWeatherData(null);
            setError(err.message);
        }
    };

    const handleSearch = () => {
        const city = document.querySelector(".input-city").value;
        fetchWeatherData(city);
    };

    return (
        <Site>
            <div className="font-sans box-border m-0 mt-24 p-0 min-h-screen w-full h-screen flex flex-col items-center justify-center bg-[url('https://raw.githubusercontent.com/witorlinhares/weather-forecast/d56d732d541e7118e8e36317a5d7e4d37c58f75b/assets/background.svg')] bg-cover bg-no-repeat pt-5">
                <div className="p-12 rounded-2xl text-white bg-[#273397] opacity-80 bigger-box">
                    <div className="flex items-center justify-center rounded-sm gap-2.5 pt-1.5 px-0 pb-5 clock">
                        <div>
                            <span>{time.hour}</span>
                            <span className="text-xs font-normal time">Horas</span>
                        </div>
                        <div>
                            <span>{time.minutes}</span>
                            <span className="text-xs font-normal time">Minutos</span>
                        </div>
                        <div>
                            <span>{time.seconds}</span>
                            <span className="text-xs font-normal time">Segundos</span>
                        </div>
                    </div>
                    <input className="border-none outline-none py-2.5 px-5 my-2.5 mx-0 text-base text-[#070707] bg-white rounded-s-2xl input-city" type="text" placeholder="Digite a cidade" />
                    <button className="border-none outline-none py-2.5 px-5 my-2.5 mx-0 text-base rounded-e-2xl float-right font-bold text-white bg-[#c023b8] border-2 hover:bg-[#b803af]" onClick={handleSearch}>Buscar</button>

                    <div className="info">
                        {error ? (
                            <h2 className="py-4 px-0 city">{error}</h2>
                        ) : (
                            weatherData ? (
                                <>
                                    <h2 className="py-4 px-0 city">Tempo em <br />{weatherData.name}</h2>
                                    <div className="p-0 pb-2.5 text-4xl flex justify-left items-baseline temp">
                                        <p className="temp-a">{Math.floor(weatherData.main.temp)}°</p>
                                        <p className="text-base pl-5 temp-mi">Min.: {Math.floor(weatherData.main.temp_min)}°</p>
                                        <p className="text-base pl-5 temp-ma">Máx.: {Math.floor(weatherData.main.temp_max)}°</p>
                                    </div>
                                    <div className="flex -ml-2 items-center justify-start cloud">
                                        <img className="w-[18%] icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt=""/>
                                        <p className="text-white font-bold capitalize forecast">{weatherData.weather[0].description}</p>
                                    </div>
                                    <p className="py-2.5 px-0 moisture">Umidade: {weatherData.main.humidity}%</p>
                                </>
                            ) : (
                                <h2 className="py-4 px-0 city">Nenhum dado<br />para exibir</h2>
                            )
                        )}
                    </div>
                </div>
                <div>
                    <a href="https://github.com/witorlinhares">
                        <p className="mt-10 flex flex-col justify-center items-center py-1.5 px-5 text-white bg-[#c023b8] rounded-3xl opacity-70 developer">Developed by Witor Linhares</p>
                    </a>
                </div>
            </div>
        </Site>
    );
}