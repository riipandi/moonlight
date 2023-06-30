import { cache } from 'react'
import type { NextRequest } from 'next/server'

export function getBaseUrlFromServer(req: NextRequest): string {
  if (!req) {
    throw new Error('Could not determine domain URL.')
  }

  const host = req.headers.get('X-Forwarded-Host') || 'localhost:3000'
  const protocol = host.includes('localhost') ? 'http' : 'https'

  return `${protocol}://${host}`
}

export const getBaseUrlFromClient = cache(() => location.protocol + '//' + location.host)

export function getBaseUrl(req?: NextRequest): string {
  if (req) {
    return getBaseUrlFromServer(req)
  }

  if (typeof window !== 'undefined') {
    return getBaseUrlFromClient()
  }

  return 'http://localhost:3000'
}
