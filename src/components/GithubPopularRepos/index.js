import './index.css'
import {Component} from 'react'
//  import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepoITem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repos: [], isLoading: false, activelanguageId: 'ALL'}

  componentDidMount() {
    this.getrepos(languageFiltersData[0].id)
  }

  getrepos = async num => {
    this.setState({isLoading: true, activelanguageId: num})
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${num}`
    // const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const arr = data.popular_repos
      const modifiedData = arr.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({
        repos: modifiedData,
        isLoading: false,
      })
    } else {
      this.setState({isLoading: false})
    }
  }

  render() {
    const {repos, isLoading, activelanguageId} = this.state
    return (
      <div className="mainRepo">
        <h1 className="heading">Popular</h1>
        <ul className="filterdItems">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              language={each.language}
              key={each.id}
              id={each.id}
              activeId={activelanguageId}
              changeProduct={this.getrepos}
            />
          ))}
        </ul>
        {isLoading && (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        )}
        {!isLoading && (
          <ul className="items">
            {repos.map(each => (
              <RepoITem item={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
