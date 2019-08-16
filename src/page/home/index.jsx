import React from 'react'
import {Link} from 'react-router-dom'

function Index() {
	return (
		<div>
			<h1>this is home </h1>
			<Link to='/page1'>go to page1</Link>
			<Link to='/page2'>go to page2</Link>
			<Link to='/counter'>go to counter</Link>
			<Link to='/todo'>go to todo</Link>
		</div>
	)
}

export default Index
