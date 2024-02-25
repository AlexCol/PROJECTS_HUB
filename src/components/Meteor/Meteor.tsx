import { useLayoutEffect } from 'react';
import styles from './Meteor.module.css';
import {startMeteor} from './startMeteor.tsx'

function Meteor() {
	
	useLayoutEffect(() => {
		startMeteor();
	}, [])

	return (
		<>
			<canvas id={styles.main_canvas}></canvas>
		</>
	)
}
export default Meteor