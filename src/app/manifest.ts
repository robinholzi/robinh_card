import type { MetadataRoute } from 'next'
import { description, name } from './const'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: name,
    short_name: name,
    description: description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
