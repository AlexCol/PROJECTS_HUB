import styles from './Home.module.css';
import CardList from '../../components/CardList/CardList';
import MyCard from '../../components/MyCard/MyCard';
import Meteor from '../../components/Meteor/Meteor';
import { useEffect, useRef, useState } from 'react';
import { RiCheckDoubleFill } from 'react-icons/ri';
import { HiChevronDoubleDown } from 'react-icons/hi';

function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
	const [isOnBottom, setIsOnBottom] = useState<boolean>(false);
	
	console.log('render');
  
	useEffect(() => {
		const handleScroll = () => {
			if (!contentRef.current) return;

      const { scrollTop, clientHeight, scrollHeight } = contentRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsOnBottom(true);
      } else {
        setIsOnBottom(false); //no meio não vai forçar renderizar novamente, pois só renderiza se mudar, ficar de false pra false não força renderização
      }
    };

		handleScroll();
		if (contentRef.current) contentRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);	

  return (
    <>
			<div className={styles.body}>
				<Meteor />
				<div ref={contentRef} className={styles.cardList}>					
					<CardList title='Aplicações em React.'>
						<MyCard header='React' title='Tela de Autenticação' message='Tela de autenticação que consome a Api de autenticação criada em aspnet, e realiza os direcionamentos devidos.' linkTo='http://localhost:3011/'/>
						<MyCard header='React' title='Jogo da Memória' message='Jogo da mémoria para testar e aprender funcionalidades.' linkTo='https://www.facebook.com/'/>
					
					</CardList>	
					<CardList title='Aplicações em AspNet(C#).'>
						<MyCard header='AspNet' title='Autenticador' message='Api de controle de Usuários - Login e Registro - para uso das demais aplicações.' linkTo='https://localhost:7119/swagger/index.html'/>
					</CardList>
				
					<div className={styles.svg}>
						{isOnBottom ? (
							<RiCheckDoubleFill className={styles.check}/>
						) : (
							<HiChevronDoubleDown className={`${styles.down}`}/>
						)}
					</div>
				</div>
			</div>
			
		</>      
  )
}

export default Home
