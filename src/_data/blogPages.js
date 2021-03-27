const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')
const slugify = require('slugify')
const items = require('./entries.json')
const dayjs = require('dayjs')

function getPage (i) {
  return {
    title: i.fields.title,
    author: i.fields.author,
    date: dayjs(i.fields.date).format('MMMM D, YYYY'),
    description: i.fields.summary,
    content: documentToHtmlString(i.fields.postBody)
  }
}

module.exports = function () {
  const blogPages = items
    .filter(i => i.sys.contentType.sys.id === 'blogPost')
    .map(i => {
      const slug = slugify(i.fields.title, { lower: true })
      return {
        url: `blog/${slug}/`,
        slug,
        ...getPage(i)
      }
    })

  return blogPages
}
