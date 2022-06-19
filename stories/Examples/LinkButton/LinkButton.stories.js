import { withKnobs, boolean, select ,text} from '@storybook/addon-knobs'
import { renderer } from 'storypug'
import LinkButton from './LinkButton.pug'
import pugData from '@conf/pug-data'
const { html } = renderer(pugData)

const sizes = {
  'nomal':'',
  'small':'small',
  'large':'large',
}
const colors = {
  'default':'',
  'gray':'gray',
  'green':'green',
}


export default {
  title: 'Examples/LinkButton',
  decorators: [withKnobs],
}

// knobs
export const Knobs = () =>
html(
  LinkButton,
  {
    size: select('size', sizes, sizes[0]),
    full: boolean('full-width', false),
    color: select('color', colors, colors[0]),
    url: text('url',''),
    isBlank: boolean('isBlank', false),
  },
  'button text',
)
Knobs.parameters = { pugCode: 'Examples/LinkButton/LinkButton.pug' };
