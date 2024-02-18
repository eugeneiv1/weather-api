import { ICurrentWeather } from "../interfaces/currentWeather.interface";

export class WeatherPresenter {
  public static weatherToResponse(currentWeather: ICurrentWeather) {
    return {
      weather: currentWeather.weather,
      main: currentWeather.main,
      visibility: currentWeather.visibility,
      wind: currentWeather.wind,
      clouds: currentWeather.clouds,
      dt: currentWeather.dt,
      id: currentWeather.id,
      cod: currentWeather.cod,
    };
  }
}
