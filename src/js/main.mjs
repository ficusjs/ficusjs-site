import { use } from './lib/core.mjs'
import { createComponent } from './lib/component.mjs'
import { html, renderer } from './lib/htm.mjs'
import { module as navbarModule } from './lib/navbar.mjs'
import './theme.mjs'
import './fonts.mjs'

use(navbarModule, { createComponent, renderer, html })
