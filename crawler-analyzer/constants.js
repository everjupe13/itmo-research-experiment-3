export const PER_REQ_DELAY = 1 * 60 * 1000
export const CLIENT_URLS = {
  NUXT2: 'http://89.223.65.6:3002',
  NUXT3: 'http://89.223.65.6:3003'
}
export const REQUEST_COUNTS_PER_STEP = [5, 10, 20]

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
