import { Router } from "express";
import cardController from "../controller/cardController";

const router = Router();
const controller = new cardController(); 

router.post("/", controller.create);
router.get("/", controller.getAll);
router.post("/:id", controller.create);
router.get("/:id", controller.getOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);


export default router;