import styles from './Body.module.css';
import Meteor from "../Meteor/Meteor";
import CardList from '../CardList/CardList';
import MyCard from '../MyCard/MyCard';

function Body() {
	return (
		<div className={styles.body}>
			<Meteor />
			<div className={styles.cardList}>
			<CardList title='Aplicações em React Puro.'>
				<MyCard header='React' title='Jogo da Memória' message='Jogo da mémoria para testar e aprender funcionalidades.' linkTo='https://www.facebook.com/'/>
				<MyCard header='algum header' title='algum title' message='Some message Some message Some message Some message Some message' linkTo='https://www.facebook.com/'/>
				<MyCard header='algum header' title='algum title' message='Some message Some message Some message Some message Some message' linkTo='https://www.facebook.com/'/>
				<MyCard header='algum header' title='algum title' message='Some message Some message Some message Some message Some message' linkTo='https://www.facebook.com/'/>
				<MyCard header='algum header' title='algum title' message='Some message Some message Some message Some message Some message' linkTo='https://www.facebook.com/'/>
			
			</CardList>	
			<CardList title='Aplicações React com AspNet.'>				
				<MyCard header='algum header' title='algum title' message='Some message Some message Some message Some message Some message' linkTo='https://www.facebook.com/'/>
			</CardList>
			</div>
		</div>
	)
}
export default Body