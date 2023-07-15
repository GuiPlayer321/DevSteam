import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'
import { useState } from 'react'

export default function CartButton({cart,onRemove}){

    const[open,setOpen] =useState(false);

    return(
        <div>
            <BsCart4 
                className={styles.icon} 
                size={40}
                onClick={() => {setOpen(!open)}} //o ! nega o valor atual
            />
            {open && <CartMenu cart={cart} onRemove={onRemove}/>/* essa chamada é pra quando tiver sempre true*/ }
        </div>
    )
}