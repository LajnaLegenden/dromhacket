import { Router } from "express";

export const router = Router();


router.get("/", (req, res) => {
  res.render("index");
});
router.get("/gallery/:id", (req, res) => {
  res.render("index");
});