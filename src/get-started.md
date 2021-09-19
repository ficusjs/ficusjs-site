---
date: 2021-09-19
layout: "main.njk"
title: "Get started"
shortDesc: "Get started quickly with FicusJS"
---
# Get started

The easiest way to try out FicusJS and web components is using a hello world example.

Create an `index.html` file and copy the following between the `<body>` tags.

```html
<hello-world></hello-world>

<script type="module">
import { createCustomElement } from 'https://cdn.skypack.dev/ficusjs@3/custom-element'

createCustomElement('hello-world', {
  render () {
    return `
      <h1>Hello world!</h1>
    `
  }
})
</script>
```

The [create ficus app](/create-ficus-app) is a great way to set-up a web app with FicusJS quickly and easily.

Create Ficus App lets you focus on code, not build tools and allows you to choose from several starter templates.
