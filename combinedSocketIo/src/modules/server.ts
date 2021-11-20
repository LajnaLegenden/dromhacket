import express from "express";
import cors from "cors";
import * as http from "http";
import hbs from "express-hbs";
import { resolve } from "path";
import { router } from "./router";

export class Server {
  public static readonly PORT: number = 3001;
  private app: express.Application;
  private server: http.Server;
  private io: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.createApp();
    this.routes();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
    this.app.use(cors());
    this.app.engine("hbs", hbs.express4());
    this.app.set("view engine", "hbs");
    this.app.set("views", resolve(__dirname + "./../views"));
    this.app.use("/public", express.static(resolve(__dirname + "./../public")));
  }

  private routes(): void {
    this.app.use("/", router);
  }

  private createServer(): void {
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || Server.PORT;
  }

  private sockets(): void {
    this.io = require("socket.io").listen(this.server, { origins: "*:*" });
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("Connected client on port %s.", this.port);
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });

      socket.on("uploadPicture", (data) => {
          console.log(data)
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
