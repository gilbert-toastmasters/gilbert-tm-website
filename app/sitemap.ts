import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = ['/', '/leadership/', '/meeting-roles/', '/icebreaker/', '/new-member/']
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'monthly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
