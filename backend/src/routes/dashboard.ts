import { Router } from "express";
export const dashboardRouter = Router();
import { storage } from "../storage";

dashboardRouter.get("/events", (req, res, next) => {
  res.send(storage.data.events);
});

dashboardRouter.post("/:event/upload", (req, res, next) => {
  const eventId = req.params.event;
  //Log json data
  let { event, image, user, title, time } = req.body;
  res.send({ message: "ok", eventId: eventId });
  storage.saveImage(event, image, title, user, time);
});

dashboardRouter.post("/:event/create", (req, res, next) => {
  const eventName = req.params.event;
  //Log json data
  let { event, image, user, title, time } = req.body;
  storage.createEvent({
    ended: false,
    id: generateId(),
    name: eventName,
    photos: [],
    users: [],
  });
  res.send({ message: "ok", eventName: eventName });
});

//Function to generate id
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
