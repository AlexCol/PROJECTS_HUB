import { useLayoutEffect, useRef } from 'react'
import styles from './MyCard.module.css'
import { Button, Card } from "react-bootstrap"
import { handleMouseEnter, handleMouseLeave, redirectToExternalSite } from './Utils';

interface IMyCardProps {
	header: string,
	title: string,
	message: string,
	linkTo: string
}

function MyCard({header, title, message, linkTo}: IMyCardProps) {	
	const listRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const colors = [Math.floor(Math.random() * 128)+50, Math.floor(Math.random() * 128)+50, Math.floor(Math.random() * 128)+50]

	useLayoutEffect(() => {
		handleMouseLeave(listRef, btnRef, colors);
	})
	
	return (
			<div className={styles.cardLayout}>
					<Card 
						ref={listRef} 
						className={styles.card}
						onMouseEnter={() => handleMouseEnter(listRef, btnRef, colors)}
						onMouseLeave={() => handleMouseLeave(listRef, btnRef, colors)}
					>
							<Card.Header>{header}</Card.Header>
							<Card.Body>
									<Card.Title>{title}</Card.Title>
									<Card.Text className={styles.card_text}>{message}</Card.Text>
									<Button 
										ref={btnRef} 
										className={styles.myBtn}
										onClick={() => redirectToExternalSite(linkTo)}
									>Ir para aplicação</Button>
							</Card.Body>
					</Card>
			</div>
	)
}

export default MyCard
