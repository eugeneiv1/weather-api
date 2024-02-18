import joi from "joi";

export class CoordinatesValidator {
  public static coordinates = joi.object({
    lat: joi.number().min(-90).max(90).required(),
    lon: joi.number().min(-180).max(180).required(),
  });
}
