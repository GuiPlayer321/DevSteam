import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '../logo/logo'
import Input from '../form/input/input'

export default function Navbar(){
    return(
        //sempre ter q ter um retorno
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}> 
                <Input type='text' placeholder='Buscar' fullWidth/>
            </div>
            <BsCart4 size={40}/>
        </nav>
    )
}