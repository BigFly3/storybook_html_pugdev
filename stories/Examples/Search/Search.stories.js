import { renderer } from 'storypug'
import Search from './Search.pug'
import { Application } from 'stimulus'
import SearchController from './Search'

const { render } = renderer()

export default {
  title: 'Examples/Search',
}

export const Default = () => {
  // render instead of returning the raw HTML
  const wrapper = render(Search)

  // initialize a local stimulus application
  const application = Application.start(wrapper.el)

  // register (initialize) the Search controller
  application.register('search', SearchController)

  // return the application wrapper element
  return wrapper.el
}
Default.story = {
  parameters:{pugCode:'Examples/Search/Search.pug'}
}
