import "dotenv/config";
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

const port = Number(process.env.PORT) || 0;

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port }, (err, address) => {
  if (err) throw err
  console.warn(`Server is now listening on ${address}`)
})