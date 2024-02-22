import { CSSProperties, useState } from 'react'
import styles from './MyCard.module.css'
import { Card } from "react-bootstrap"

function MyCard() {
	const [isTrembling, setIsTrembling] = useState(false);

	const handleClick = () => {
    setIsTrembling(true);
    setTimeout(() => setIsTrembling(false), 500); // Desativa a animação após 500ms
  };
	const tremorStyles = {
    transition: 'transform 0.1s ease-in-out', // Adiciona uma transição suave para o efeito de tremor
    transform: isTrembling ? 'rotate(-1deg)' : 'none', // Aplica a rotação se estiver tremendo
  };

	const myCss: CSSProperties = {
		//width: "12rem",
		//color: 'lightgray',
		//background: "blue" //precisa tirar o bg do card
		width: '17rem', marginTop: '20px', cursor: 'pointer', ...tremorStyles
	}
	
	return (
		<div className={styles.card}>
			<Card bg='primary' style={myCss} className="mb-2" onClick={handleClick}>
				<Card.Header>Header</Card.Header>
				<Card.Body>
					<Card.Title>Card Title </Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}
export default MyCard