import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherService } from "../services/weather.service";

class WeatherController {
  public async getWeatherByCity(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const data = await weatherService.getWeatherByCity(req.params.city);
      res.status(200).json({ data });
      next();
    } catch (e) {
      next(e);
    }
  }
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const { lat, lon } = req.query;
      const currentWeather = await weatherService.getWeather({
        lat: +lat,
        lon: +lon,
      });
      res
        .status(200)
        .json({ data: WeatherPresenter.weatherToResponse(currentWeather) });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
