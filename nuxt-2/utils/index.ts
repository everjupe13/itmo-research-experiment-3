function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getName = (generator: () => string) => {
  const word = generator()
  const dict = [
    'dolores',
    'quo',
    'ipsa',
    'sit quia',
    'enim',
    'quod',
    'pariatur',
    'aspernatur',
    'nam atque quis'
  ]

  const mutated = [...dict]
  mutated.splice(getRandomNumber(0, dict.length - 1), 0, word)

  return mutated.join(' ')
}

const getEmail = (generator: () => string) => {
  const word = generator()
  const dict = [
    'damian.biz',
    'kaitlyn.org',
    'royal.us',
    'polly.net',
    'angelina.biz',
    'veronica.us',
    'antoinette.ca',
    'crystel.ca',
    'letitia.biz'
  ]

  return [word, dict[getRandomNumber(0, dict.length - 1)]]
    .filter(Boolean)
    .join('@')
}

const getBody = (generator: () => string) => {
  const word = generator()
  const dict = [
    'est veritatis mollitia atque quas',
    'et ut beatae aut et sint et dolor',
    'magni corporis dolores voluptatibus',
    'molestiae enim minus est',
    'reiciendis facere voluptate rem',
    'nam iusto minus expedita aut sit',
    'numquam et id quis officia doloribus ut',
    'voluptatibus minima porro facilis dolores',
    'aut quia suscipit beatae',
    'aut vero sint ut et voluptate',
    'eos blanditiis assumenda optio',
    'pariatur nemo est tempore velit',
    'cupiditate dicta magni ut',
    'sunt quod velit impedit quia'
  ]

  const mutated = [...dict]
  mutated.splice(getRandomNumber(0, dict.length - 1), 0, word)

  return mutated.join(' ')
}

export const commentFactory = (generator: () => string) => {
  return {
    id: generator(),
    name: getName(generator),
    email: getEmail(generator),
    body: getBody(generator)
  }
}
