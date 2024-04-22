// Write your code here
import './index.css'
import {Component} from 'react'

class RepoItem extends Component {
  render() {
    const {item} = this.props

    const {avatarUrl, forksCount, issuesCount, starsCount, name} = item
    return (
      <li className="item">
        <img src={avatarUrl} alt="avatar" className="avatar" />
        <h1 className="headingName">{name}</h1>
        <div className="starscountbox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
            alt="stars"
            className="stars"
          />
          <p className="starsCountpara">{starsCount} Stars</p>
        </div>
        <div className="starscountbox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
            alt="forks"
            className="stars"
          />
          <p className="starsCountpara">{forksCount} Forks</p>
        </div>
        <div className="starscountbox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
            className="stars"
          />
          <p className="starsCountpara">{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}
export default RepoItem
