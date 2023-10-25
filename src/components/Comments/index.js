import {Component} from 'react'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  render() {
    return (
      <div className="Bg-section">
        <div className="Main-section">
          <div className="input-text-Button">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input type="text" placeholder="Your Name" className="Search-bar" />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="Comment-section"
              cols="40"
              rows="5"
            />
            <div>
              <button type="button">Add Comment</button>
            </div>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <hr className="break-line" />
        </div>
      </div>
    )
  }
}

export default Comments
