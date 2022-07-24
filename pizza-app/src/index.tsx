import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	(window).hello()
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))