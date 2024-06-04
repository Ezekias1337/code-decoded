import { Server, Socket } from "socket.io";

const setupWebSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    try {
      console.log("Connected & Socket Id is: ", socket.id);
    } catch (error) {
      console.error("Error in connection event:", error);
    }

    socket.on("error", (error) => {
      console.error("Socket error:", error);
    });
    
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};

export default setupWebSocket;
