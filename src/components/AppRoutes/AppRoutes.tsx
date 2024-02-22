import styles from './AppRoutes.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Header from "../Header/Header"

function AppRoutes() {
	return (
		<div className={styles.routes}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/About" element={<About/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
export default AppRoutes