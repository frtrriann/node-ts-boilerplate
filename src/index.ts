import "dotenv/config";
import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

const host = "0.0.0.0";
const port = Number(process.env.PORT) || 0;

app.get("/", (request, reply) => {
  reply.type("text/html");
  reply.send("<h1>Hello</h1>");
});

// Run the server!
app.listen({ port, host }, (err) => {
  if (err) throw err;
  console.warn(`Server is now listening on ${host}:${port}`);
});
