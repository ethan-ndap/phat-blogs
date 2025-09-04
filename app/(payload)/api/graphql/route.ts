// /* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
// /* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
// import config from '@/app/payload.config'
// import { GRAPHQL_POST, REST_OPTIONS } from '@payloadcms/next/routes'

// export const POST = GRAPHQL_POST(config)

// export const OPTIONS = REST_OPTIONS(config)

/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@/app/payload.config'
import { NextRequest } from 'next/server'
import {
  GRAPHQL_POST,
} from '@payloadcms/next/routes'

export const POST = GRAPHQL_POST(config)

// IMPORTANT: static route => no params in signature
export async function OPTIONS(_req: NextRequest): Promise<Response> {
  // If you need CORS, set headers here. Adjust origin/headers to your app’s needs.
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // or your domain
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      Vary: 'Origin',
    },
  })
}
