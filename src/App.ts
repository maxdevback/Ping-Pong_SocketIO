import path from "path";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import listen from "./sockets";

const App = express();
const server = createServer(App);
const io = new Server(server);

App.use("/", express.static(path.join(__dirname, "..", "public")));
listen(io);
server.listen(3000, () => {
  console.log("App has been started at 3000 port");
});
