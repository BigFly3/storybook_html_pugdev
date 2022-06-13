import { renderer } from 'storypug'
import Button from './Button.pug'

const { html } = renderer()


export default {
  title: 'Examples/Button',
}

// default
export const Default = () => html(Button, {}, 'Label')
Default.parameters = { pugCode: 'Examples/Button/type_button.pug' };

// type=submit
export const Submit = () => html(Button, { type: 'submit' }, 'Send')
Submit.parameters = { pugCode: 'Examples/Button/type_submit.pug' };
