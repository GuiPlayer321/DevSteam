import Button from '@/components/form/button/button'
import styles from './saleCard.module.css'
import Image from "next/image"

export default function SaleCard({image, discount, fullPrice, discountPrice, onAdd}){
    return(
        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R${fullPrice}</p>
                        <h4 className={styles.discountPrice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

//define valores padroes para as propriedades e nao quebrar o site
SaleCard.defaultProps = {
    image:'league-of-legends.jpg',
    discount:'85%',
    fullPrice:'100,00',
    discountPrice:'15,00'
}