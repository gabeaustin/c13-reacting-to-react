import React from 'react'
import ReactDOM from 'react-dom'

//keep this line uncommented for class component
// import App from './components/App'

//uncomment this line for functional component & hooks
import App from './components/new/App'

ReactDOM.render(<App text="What's up this is text from index.js passed as a prop"/>, document.getElementById('root'))