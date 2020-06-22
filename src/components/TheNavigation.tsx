import React from 'react'
import { NavLink } from 'react-router-dom'

// styles
import styles from './TheNavigation.module.scss'

interface Props {}

const TheNavigation: React.FC<Props> = props => {
	return (
		<nav className={styles.navigation}>
			<NavLink to="/" activeClassName={styles.active} exact>
				Home
			</NavLink>
			<NavLink to="/page" activeClassName={styles.active}>
				Page
			</NavLink>
			<NavLink to="/about" activeClassName={styles.active}>
				About
			</NavLink>
		</nav>
	)
}

export default TheNavigation
