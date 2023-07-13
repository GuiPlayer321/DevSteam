import styles from './button.module.css'

export default function Button({children, fullWidth}){
    return(
        //passa um parametro que verifica o tamanho e retorna 2 estilos
        <button className={`${styles.button} ${fullWidth && styles.fullwidth}`}>{children}</button>
    )
}