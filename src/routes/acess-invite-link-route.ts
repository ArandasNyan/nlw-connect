import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../config/env'
import { acessInviteLink } from '../functions/acess-invite-link'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and redirects user',
        tags: ['referral'],
        // description: 'This routes is sample test',
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          300: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await acessInviteLink({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302) // 302: temporary redirect
    }
  )
}
