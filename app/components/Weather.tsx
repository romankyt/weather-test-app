import React, { FC } from "react";
import { getWeatherData } from "../_api/api";
import Image from "next/image";
import { Form } from "./Form";
import { WeatherObject } from "../_api/types";

type Props = {
  city: string;
};

export const Weather: FC<Props> = async ({ city }) => {
  const weatherData = await getWeatherData(city);

  return (
    <>
      <Form />
      {weatherData ? (
        <div className="flex items-center flex-col">
          <div>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              width={60}
              height={60}
              alt="weather icon"
            />
            <p className="text-white flex h">
              <span className="text-[48px]">
                {Math.floor(weatherData.main.temp)}
              </span>
              <span>°C</span>
            </p>
          </div>
          <p className="text-white">
            Feels like: <span>{Math.floor(weatherData.main.feels_like)}°C</span>
          </p>
          <p className="text-white">
            Wind speed: <span>{Math.round(weatherData.wind.speed)} m/s</span>
          </p>
        </div>
      ) : null}
    </>
  );
};
