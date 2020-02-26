import { Controller } from 'stimulus'

export default class SearchController extends Controller {
  static targets = ['keywords']

  send(e) {
    e.preventDefault()
    const query = this.keywordsTarget.value.trim()

    if (!query) {
      alert(`Type a keyword!`)
      return
    }
    alert(`Fetching results for: "${query}"...`)

    // fetch search results...
  }
}
