import styles from './Body.module.css';
import Meteor from "../Meteor/Meteor";
import CardList from '../CardList/CardList';
import MyCard from '../MyCard/MyCard';

function Body() {
	return (
		<div className={styles.body}>
			<Meteor />
			<div className={styles.cardList}>
			<CardList title='Aplicações React com AspNet.'>
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				
			</CardList>
			
			<CardList title='Aplicações a verificar.'>
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
			</CardList>
			</div>
		</div>
	)
}
export default Body