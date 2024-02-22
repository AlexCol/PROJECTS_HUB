import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Hub de Projetos.</h2>
            <ul>
							<li>Projeto central para apresentação das demais criações. Cada uma acessada via card na tela principal.</li>
							<li>Pagina criada usando:</li>
							<ul>
								<li>React</li>
								<li>Typescript</li>
								<li>React-Bootstrap</li>
								<li>React-Router-Dom</li>
							</ul>
							<li>Efeito de meteoros encotrado no site <Link to='https://codepen.io/trending' target='_blank'><span>Codepen</span></Link>.
									<br/>
									Criado por: <Link to='https://codepen.io/rtredes2' target='_blank'><span>Rtredes - Archi</span></Link>. 
									<br/>
									O mesmo foi construido com javascript, css e html puros. 
									<br/>
									Assim tive que converter e adaptar para o formato tsx, padrão do react com typescript.
							</li>
						</ul>
        </div>        
    )
}
export default About