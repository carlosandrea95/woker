import { io } from "socket.io-client";

export let socket = null;

export const InitSocket = () => {
  socket = io("", { transports: ["websocket"] });
};

export const DestroySocket = () => {
  socket.disconnect();
  socket = null;
};
