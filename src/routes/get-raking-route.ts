import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getRanking } from '../functions/get-ranking'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get Ranking',
        tags: ['referral'],
        // description: 'This routes is sample test',
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const { rankingWithScore } = await getRanking()

      return { ranking: rankingWithScore }
    }
  )
}
