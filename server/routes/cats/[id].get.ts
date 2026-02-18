import { eventHandler, getRouterParam, createError } from "h3";
import { CatController } from "../../../cat/controllers/cat.controller";

const controller = new CatController();

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  if (isNaN(id)) {
    throw createError({ statusCode: 400, message: "Invalid id" });
  }

  try {
    return controller.getById(id);
  } catch (e) {
    throw createError({ statusCode: 404, message: (e as Error).message });
  }
});
