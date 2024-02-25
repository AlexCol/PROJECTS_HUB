import styles from './Body.module.css';
import Meteor from "../Meteor/Meteor";
import CardList from '../CardList/CardList';
import MyCard from '../MyCard/MyCard';

function Body() {
	return (
		<div className={styles.body}>
			<Meteor />
			<div className={styles.cardList}>
			<CardList title='Aplicações em React.'>
				<MyCard header='React' title='Tela de Autenticação' message='Tela de autenticação que consome a Api de autenticação criada em aspnet, e realiza os direcionamentos devidos.' linkTo='https://www.facebook.com/'/>
				<MyCard header='React' title='Jogo da Memória' message='Jogo da mémoria para testar e aprender funcionalidades.' linkTo='https://www.facebook.com/'/>
			
			</CardList>	
			<CardList title='Aplicações em AspNet(C#).'>
				<MyCard header='AspNet' title='Autenticador' message='Api de controle de Usuários - Login e Registro - para uso das demais aplicações.' linkTo='https://localhost:7119/swagger/index.html'/>
			</CardList>
			</div>
		</div>
	)
}
export default Body