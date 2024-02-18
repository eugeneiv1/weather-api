import { ApiError } from "../errors/api.error";
import { ICoordinates } from "../interfaces/coordinates.interface";
import { axiosService } from "./axios.service";

class WeatherService {
  public async getWeatherByCity(city: string) {
    //receiving city coordinates first because method to get weather in specified city directly is deprecated
    const cityInfo = await axiosService.getCityCoordinates(city);
    if (!cityInfo) {
      throw new ApiError("City not found", 400);
    }
    const { lat, lon } = cityInfo[0];
    return await axiosService.getWeather({ lat, lon });
  }

  public async getWeather(dto: ICoordinates) {
    const currentWeather = await axiosService.getWeather(dto);
    if (!currentWeather) {
      throw new ApiError("Wrong coordinates", 400);
    }
    return currentWeather;
  }
}

export const weatherService = new WeatherService();
