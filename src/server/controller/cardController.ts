import { CardModel } from "../model/CardModel";
import { NextFunction, Request, Response } from "express";
import path from "path";
import uuid from "uuid";
import ApiError from "../error/ApiError";

class cardController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { title, text, data, id } = req.body;

      // Проверка на наличие img и его тип
      const img = req.files?.img;

      if (!img) {
        return next(ApiError.badRequest("Image file is required"));
      }

      // Если img - массив, берем первый элемент
      const file = Array.isArray(img) ? img[0] : img;

      if (!file) {
        return next(ApiError.badRequest("Image file is required"));
      }

      let fileName = uuid.v4() + ".jpg";
      await file.mv(path.resolve(__dirname, "..", "static", fileName));

      const card = await CardModel.create({
        title,
        text,
        data,
        id,
        img: fileName,
      });

      return res.status(201).json(card);
    } catch (error: unknown) {
      // Приведение типа
      if (error instanceof Error) {
        next(ApiError.internal(error.message));
      } else {
        next(ApiError.internal("An unknown error occurred"));
      }
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      let { page = 1, limit = 10 } = req.query;
      page = parseInt(String(page));
      limit = parseInt(String(limit));
      let offset = (page - 1) * limit;

      const { count: total, rows: cards } = await CardModel.findAndCountAll({
        limit,
        offset,
      });

      return res.status(200).json({
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        data: cards,
      });
    } catch (error: unknown) {
      // Приведение типа
      if (error instanceof Error) {
        next(ApiError.internal(error.message));
      } else {
        next(ApiError.internal("An unknown error occurred"));
      }
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const card = await CardModel.findByPk(id);
      if (!card) {
        return next(ApiError.notFound("Card not found"));
      }
      return res.status(200).json(card);
    } catch (error: unknown) {
      // Приведение типа
      if (error instanceof Error) {
        next(ApiError.internal(error.message));
      } else {
        next(ApiError.internal("An unknown error occurred"));
      }
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, text, data } = req.body;
      const [updated] = await CardModel.update(
        { title, text, data },
        { where: { id }, returning: true }
      );
      if (updated === 0) {
        return next(ApiError.notFound("Card not found"));
      }
      const card = await CardModel.findByPk(id);
      return res.status(200).json(card);
    } catch (error: unknown) {
      // Приведение типа
      if (error instanceof Error) {
        next(ApiError.internal(error.message));
      } else {
        next(ApiError.internal("An unknown error occurred"));
      }
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deleted = await CardModel.destroy({ where: { id } });
      if (!deleted) {
        return next(ApiError.notFound("Card not found"));
      }
      return res.status(204).send();
    } catch (error: unknown) {
      // Приведение типа
      if (error instanceof Error) {
        next(ApiError.internal(error.message));
      } else {
        next(ApiError.internal("An unknown error occurred"));
      }
    }
  }
}

export default cardController;
