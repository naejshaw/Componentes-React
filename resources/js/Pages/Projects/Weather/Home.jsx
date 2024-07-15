import Site from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";

export default function Home()
{
    //clock
    const relogio = setInterval(function time() {
        const h = document.getElementById('hour');
        const m = document.getElementById('minutes');
        const ss = document.getElementById('seconds');

        let dateToday = new Date();
        let hs = dateToday.getHours();
        let ms = dateToday.getMinutes();
        let sss = dateToday.getSeconds();

        if (hs < 10){
            hs = '0' + hs
        };

        if (ms < 10){
            ms = '0' + ms
        };

        if (sss < 10){
            sss = '0' + sss
        };

        h.textContent = hs;
        m.textContent = ms;
        ss.textContent = sss;

    })

    //key api
    const key ="c0b197ed1de5f5db2a3c1241745a50b9"

    //functions

    function on_screen(data){ //data city
        console.log(data)
        document.querySelector(".city").innerHTML = "Tempo em <br>" + data.name
        document.querySelector(".temp-a").innerHTML = Math.floor (data.main.temp) + "°"
        document.querySelector(".temp-mi").innerHTML = "Min. °" +Math.floor (data.main.temp_min)
        document.querySelector(".temp-ma").innerHTML = "Máx. °" + Math.floor (data.main.temp_max)
        document.querySelector(".forecast").innerHTML = data.weather[0].description
        document.querySelector(".moisture").innerHTML = "Umidade " + data.main.humidity + "%"
        document.querySelector(".icon") .src =  `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    }

    async function search_city(city){ //info city

        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`) .then( response => response.json()) //server
        on_screen(data)
    }


    function button(){ //hail city input

        const city = document.querySelector(".input-city") .value
        search_city(city) //hail function
    }
    return(<>
        <Head title="Weather" />
        <Site>
            <div className="font-sans box-border m-0 mt-24 p-0 min-h-screen w-full h-screen flex flex-col items-center justify-center bg-[url('https://raw.githubusercontent.com/witorlinhares/weather-forecast/d56d732d541e7118e8e36317a5d7e4d37c58f75b/assets/background.svg')] bg-cover bg-no-repeat pt-5">
                <div className="p-12 rounded-2xl text-white bg-[#273397] opacity-80 bigger-box">
                    <div className="flex items-center justify-center rounded-sm gap-2.5 pt-1.5 px-0 pb-5 clock">
                        <div>
                            <span id="hour">00</span>
                            <span className="text-xs font-normal time">Horas</span>
                        </div>
                        <div>
                            <span id="minutes">00</span>
                            <span className="text-xs font-normal time">Minutos</span>
                        </div>
                        <div>
                            <span id="seconds">00</span>
                            <span className="text-xs font-normal time">Segundos</span>
                        </div>
                    </div>
                    <input className="border-none outline-none py-2.5 px-5 my-2.5 mx-0 text-base text-[#070707] bg-white rounded-s-2xl input-city" type="text" placeholder="Digite a cidade" />
                    <button className="border-none outline-none py-2.5 px-5 my-2.5 mx-0 text-base rounded-e-2xl float-right font-bold text-white bg-[#c023b8] border-2 hover:bg-[#b803af] search" onClick={button}>Buscar</button>

                    <div className="info">
                        <h2 className="py-4 px-0 city">Nenhum dado<br />para exibir</h2>

                        <div className="p-0 pb-2.5 text-4xl flex justify-left items-baseline temp">
                            <p className="temp-a">0</p>
                            <p className="text-base pl-5 temp-mi">Min.: 0</p>
                            <p className="text-base pl-5 temp-ma">Máx.: 0</p>
                        </div>

                        <div className="flex -ml-2 items-center justify-start cloud">
                            <img className="w-[18%] icon" src="https://openweathermap.org/img/wn/04n.png" />
                            <p className="text-white font-bold capitalize forecast"></p>
                        </div>
                        <p className="py-2.5 px-0 moisture">Umidade: 0</p>
                    </div>
                </div>
                <div>
                    <a href="https://github.com/witorlinhares">
                        <p className="mt-10 flex flex-col justify-center items-center py-1.5 px-5 text-white bg-[#c023b8] rounded-3xl opacity-70 developer">Developed by Witor Linhares</p>
                    </a>
                </div>
            </div>
        </Site>
    </>);
}
