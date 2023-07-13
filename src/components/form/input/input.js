import styles from './input.module.css'
//...props passa todos os parametros que nao foram mapeados
export default function Input({fullWidth, ...props}){
    return(
        <input className={`${styles.input} ${fullWidth && styles.fullwidth}`} {...props} />
    )
}