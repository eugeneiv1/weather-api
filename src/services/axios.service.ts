import axios from "axios";

import { configs } from "../configs/config";
import { ICity } from "../interfaces/city.interface";
import { ICoordinates } from "../interfaces/coordinates.interface";
import { ICurrentWeather } from "../interfaces/currentWeather.interface";

class AxiosService {
  public async getCityCoordinates(city: string): Promise<ICity[]> {
    return await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${configs.API_KEY}`,
      )
      .then((res) => res.data);
  }

  public async getWeather(dto: ICoordinates): Promise<ICurrentWeather> {
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${dto.lat}&lon=${dto.lon}&units=metric&appid=${configs.API_KEY}`,
      )
      .then((res) => res.data);
  }
}

export const axiosService = new AxiosService();
