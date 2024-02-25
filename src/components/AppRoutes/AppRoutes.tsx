import styles from './AppRoutes.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Header from "../Header/Header"

function AppRoutes() {
	return (
		<div className={styles.router}>
			<BrowserRouter>
				<table>
					<tbody>
						<tr className={styles.router_header}>
							<td><Header /></td>
						</tr>
						<tr className={styles.router_body}>
							<td>
								<Routes>
									<Route path="/" element={<Home/>}></Route>
									<Route path="/About" element={<About/>}></Route>
								</Routes>
							</td>
						</tr>
					</tbody>
				</table>
			</BrowserRouter>
		</div>
	)
}
export default AppRoutes