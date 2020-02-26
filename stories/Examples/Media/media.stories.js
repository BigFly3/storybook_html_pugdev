import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import { renderer } from 'storypug'
import Media from './Media.pug'

const { html } = renderer()

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/350x150',
]

export default {
  title: 'Examples/Media',
  decorators: [withKnobs],
}

export const Knobs = () =>
  html(
    Media,
    {
      image: select('Image', images, images[0]),
      reverse: boolean('Reverse Style', false),
    },
    '<p>Contents...</p>',
  )
Knobs.story = {
  parameters:{pugCode:'Examples/Media/Media.pug'}
}
