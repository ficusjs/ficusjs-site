import { use } from 'https://cdn.skypack.dev/ficusjs'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/htm'
import { module as navbarModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/navbar'
import './theme.js'
import './fonts.js'

use(navbarModule, { renderer, html })
