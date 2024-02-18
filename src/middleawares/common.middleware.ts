import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

import { ApiError } from "../errors/api.error";

class CommonMiddleware {
  public isCoordinatesValid(validator: ObjectSchema) {
    return function (req: Request, res: Response, next: NextFunction) {
      try {
        const { lat, lon } = req.query;
        const { error } = validator.validate({ lat: +lat, lon: +lon });
        if (error) {
          throw new ApiError("Coordinates not valid", 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const commonMiddleware = new CommonMiddleware();
