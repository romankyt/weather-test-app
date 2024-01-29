import axios, { AxiosError } from "axios";
import { WeatherObject } from "./types";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "839b566d84e24b60a9aafe1c149db6b2";

export const getWeatherData = async (city: string) => {
  try {
    if (city) {
      const { data } = await axios.get<WeatherObject>(
        `/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      return data;
    }
  } catch (err) {
    const error = err as Error | AxiosError;
    if (!axios.isAxiosError(error)) {
      console.log(error.message);
    }
    console.log(error.message);
  }
};
