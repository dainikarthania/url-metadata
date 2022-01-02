// const scrape = require('website-scraper');
// const options = {
//   urls: ['https://in.pinterest.com/pin/755971487446537022/']};
// scrape(options).then((result) => {
//     console.log(result)
// });

const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-publisher')()])

  const got = require('got')

const targetUrl = 'https://medium.com/javascript-in-plain-english/best-practices-for-react-developers-93eccd1697e1'

;(async () => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  console.log(metadata)
})()


