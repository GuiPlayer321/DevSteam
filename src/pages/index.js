import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/gameCard/gameCard'
import { useState } from 'react'

export default function Home() {

  const [cart,setCart] =useState([])

  const handleAddProduct =(info) =>{
    setCart([...cart,info])
  }

  const handleRemoveProduct = (pos) =>{
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount={'30%'}
                fullPrice={'199,90'}
                discountPrice={'139,90'}
                onAdd={() => 
                  handleAddProduct({name:'League of Legends', price:139.9, image:'league-of-legends.jpg'})
                }
              />
              <SaleCard 
                image={'dota-2.jpg'}
                discount={'40%'}
                fullPrice={'59,90'}
                discountPrice={'35,90'}
                onAdd={() => 
                  handleAddProduct({name:'DOta 2', price:35.9, image:'dota-2.jpg'})
                }
              />
              <SaleCard 
                image={'valorant.jpg'}
                discount={'35%'}
                fullPrice={'99,90'}
                discountPrice={'64,90'}
                onAdd={() => 
                  handleAddProduct({name:'Valorant', price:64.9, image:'valorant.jpg'})
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard
                onAdd={() => 
                  handleAddProduct({name:'Counter Strike', price:99.9, image:'counter-strike.jpg'})
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
