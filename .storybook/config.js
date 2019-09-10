import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'
import '../src/index.css'

// By default Storybook looks for stories in a /stories directory
// Instead we want it to look for stories as `.stories.js`
const req = requireContext('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
