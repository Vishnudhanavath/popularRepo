// Write your code here
import './index.css'
import {Component} from 'react'

class LanguageFilterItem extends Component {
  render() {
    const {language, activeId, id, changeProduct} = this.props
    const styleClass = activeId === id ? 'blueStyle' : null
    const changeProductfuncition = () => {
      changeProduct(id)
    }
    return (
      <li className="Item" onClick={changeProductfuncition}>
        <button type="button" className={`but ${styleClass}`}>
          {language}
        </button>
      </li>
    )
  }
}
export default LanguageFilterItem
