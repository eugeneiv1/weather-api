import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { commonMiddleware } from "../middleawares/common.middleware";
import { CoordinatesValidator } from "../validators/coordinares.validator";

const router = Router();
router.get(
  "/currentweather",
  commonMiddleware.isCoordinatesValid(CoordinatesValidator.coordinates),
  weatherController.getWeather,
);
router.get("/currentweather/:city", weatherController.getWeatherByCity);

export const weatherRouter = router;
