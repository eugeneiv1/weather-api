import express from "express";

import { configs } from "./configs/config";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(configs.PORT, () => {
  console.log(`Server is running on ${configs.PORT}`);
});
