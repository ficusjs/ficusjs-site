const contentful = require('contentful')
// const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')
const fs = require('fs')

const config = {
  space: 'slwnpo94m3dp',
  accessToken: 'YJAu9HpECf5JjFqeA4uU9D4Vwn4VovSxGwSMc31RIio'
}

const client = contentful.createClient(config)
client.getEntries({
  limit: 1000
})
  .then(res => {
    // all entries
    console.log(`Number of items: ${res.items.length}`, `Total: ${res.total}`, `Limit: ${res.limit}`)
    fs.writeFileSync('src/_data/entries.json', JSON.stringify(res.items, null, 2))
  })
