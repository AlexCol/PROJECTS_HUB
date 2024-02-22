import { ReactNode } from 'react';
import styles from './CardList.module.css';

interface ICardListProp {
	children: ReactNode,
	title: string
}

function CardList({children, title}: ICardListProp) {
	return (
		<div className={styles.list}>	
			<h2 className={styles.list_titulo}>{title}</h2>
			<div className={styles.list_cards}>
				{children}
			</div>
		</div>
	)
}
export default CardList