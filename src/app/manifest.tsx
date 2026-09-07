import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Righcon',
    short_name: 'Righcon App',
    description: 'Righcon App is font icon',
    start_url: '/',
    scope: '.',
    display: 'standalone',
    background_color: '#6750a4',
    theme_color: '#bab0d6',
    orientation:'portrait-primary',
    dir:'rtl',
    lang:'fa-IR',
    icons: [
      {
        src: '/medias/images/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
    ],
  }
}
