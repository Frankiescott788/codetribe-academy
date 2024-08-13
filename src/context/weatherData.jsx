import axios from "axios";
import { createContext, useEffect, useState } from "react";
import moment from 'moment-timezone';
import { format } from 'date-fns';

export const WeatherProvider = createContext();

const WeatherData = ({ children }) => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState([]);
    const [weatherIsFetched, setWeatherIsFetched] = useState(false);
    const [windSpeed, setWindSpeed] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [todayDate, setTodayDate] = useState('');
    const [geoLocation, setGeoLocation] = useState([]);
    const [openweathername, setOpenweathername] = useState('');
    const [dailyWeather, setDailyWeather] = useState([]);
    const [temp, setTemp] = useState('');

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const geoData = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    };

                    async function detect_current() {
                        try {
                            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=6fcaddaefdf79e82f2dd23bb74194ed6&units=metric`);
                            const data = await res.data;
                            if (res.statusText === 'OK') {
                                setWeather(data);
                                setWeatherIsFetched(true);
                                setWindSpeed(data.wind.speed);
                                setOpenweathername(data.name); 
                                setTemp(data.main.temp)
                                console.log('detected');
                            }

                        } catch (error) {
                            console.log(error)
                        }
                    }

                    detect_current();

                    async function detect_hourly() {
                        try {
                            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoData.lat}&lon=${geoData.lon}&appid=6fcaddaefdf79e82f2dd23bb74194ed6&units=metric`);
                            const data = await res.data;
                            if (res.statusText === 'OK') {
                                setForecast(data.list.slice(0, 5));
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    detect_hourly();
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            alert('your browser does not support the feature')
        }
    };

    useEffect(() => {
        if (openweathername) {
            detect_fiveDays();
        }
    }, [openweathername]);

    async function detect_fiveDays() {
        try {
            const area = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${openweathername}&count=10&language=en&format=json`);
            const area_data = await area.data;

            if (area_data.results && area_data.results.length > 0) {
                const geo = area_data.results[0];  
                if (area.statusText === 'OK') {
                    const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&timezone=${geo.timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);
                    
                    const data = await res.data.daily;
                    const daily_data = data.time.map((time, index) => ({
                        date: time,
                        weatherCode: data.weathercode[index],
                        tempMax: data.temperature_2m_max[index],
                        tempMin: data.temperature_2m_min[index],
                    }));

                    setDailyWeather(daily_data);
                }
            } else {
                alert('Location not found')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getWeather() {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6fcaddaefdf79e82f2dd23bb74194ed6&units=metric`);
            const data = await res.data;
            if (res.statusText === 'OK') {
                setWeather(data);
                setWeatherIsFetched(true);
                setWindSpeed(data.wind.speed);
                setTemp(data.main.temp)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getDays() {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=6fcaddaefdf79e82f2dd23bb74194ed6&units=metric`);
            const data = await res.data;
            if (res.statusText === 'OK') {
                setForecast(data.list.slice(0, 5));
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function fiveDayForecast() {
        try {
            const area = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`);
            const area_data = await area.data;
            const geo = area_data.results.at(0);
            if (area.statusText === 'OK') {
                const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&timezone=${geo.timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`);

                const data = await res.data.daily;
                const daily_data = data.time.map((time, index) => ({
                    date: time,
                    weatherCode: data.weathercode[index],
                    tempMax: data.temperature_2m_max[index],
                    tempMin: data.temperature_2m_min[index],
                }));

                setDailyWeather(daily_data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <WeatherProvider.Provider value={{
            weather,
            setLocation,
            weatherIsFetched,
            getWeather,
            windSpeed,
            forecast,
            getDays,
            fiveDayForecast,
            dailyWeather,
            getLocation,
            temp
        }}>
            {children}
        </WeatherProvider.Provider>
    );
}

export default WeatherData;
