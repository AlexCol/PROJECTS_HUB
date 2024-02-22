import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.nav_links}>					
					<li>
						<NavLink to='/'>Principal</NavLink>
					</li>
					<li>
						<NavLink to='/About'>Sobre</NavLink>
					</li>
				</ul>
			</nav>			
		</>
	)
}
export default Header