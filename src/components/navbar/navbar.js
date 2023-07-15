import styles from './navbar.module.css'
import Logo from '../logo/logo'
import Input from '../form/input/input'
import CartButton from '../form/cartButton/cartButton'

export default function Navbar(){
    return(
        //sempre ter q ter um retorno
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}> 
                <Input type='text' placeholder='Buscar' fullWidth/>
            </div>
            <CartButton/>
        </nav>
    )
}