import Button from '@/components/form/button/button'
import styles from './saleCard.module.css'
import Image from "next/image"

export default function SaleCard(){
    return(
        <div className={styles.saleCard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$99,90</p>
                        <h4 className={styles.discountPrice}>R$79,92</h4>
                    </div>
                </div>
                <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}