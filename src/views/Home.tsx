import React, { useState } from 'react'

// styles
import './Home.scss'

// assets
import logo from '../assets/logo.svg'

const Home: React.FC = () => {
	const [title] = useState('React boilerplate')

	return (
		<div className="home">
			<h1>{title}</h1>
			<img className="logo" src={logo} alt="react logo" />

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}

export default Home
