export const PER_REQ_DELAY = 1 * 5 * 1000
export const CLIENT_URLS = {
  NUXT2: 'http://192.168.0.2:3002',
  NUXT3: 'http://192.168.0.2:3000'
}
export const REQUEST_COUNTS_PER_STEP = [50, 100, 200]

export const EXPERIMENTS = [
  {
    name: 'Nuxt 2 - 250',
    url: `${CLIENT_URLS.NUXT2}/comments/250`
  },
  {
    name: 'Nuxt 2 - 500',
    url: `${CLIENT_URLS.NUXT2}/comments/500`
  },
  {
    name: 'Nuxt 2 - 1000',
    url: `${CLIENT_URLS.NUXT2}/comments/1000`
  },

  {
    name: 'Nuxt 3 - 250',
    url: `${CLIENT_URLS.NUXT3}/comments/250`
  },
  {
    name: 'Nuxt 3 - 500',
    url: `${CLIENT_URLS.NUXT3}/comments/500`
  },
  {
    name: 'Nuxt 3 - 1000',
    url: `${CLIENT_URLS.NUXT3}/comments/1000`
  }
]
