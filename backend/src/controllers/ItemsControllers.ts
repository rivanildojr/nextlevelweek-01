import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(req: Request, res: Response) {
    try {
      const items = await knex("items").select("*");

      const serializadItems = items.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image_url: `http://localhost:3333/uploads/${item.image}`,
        };
      });

      return res.json(serializadItems);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default ItemsController;
