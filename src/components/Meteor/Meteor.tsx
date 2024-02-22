import { useLayoutEffect } from 'react';
import styles from './Meteor.module.css';
import {startMeteor} from './startMeteor.tsx'

function Meteor() {
	
	useLayoutEffect(() => {
		startMeteor();
	}, [])

	return (
		<div className={styles.field}>
			<canvas id={styles.main_canvas}></canvas>
		</div>
	)
}
export default Meteor