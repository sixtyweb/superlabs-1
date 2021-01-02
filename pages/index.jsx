import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>superlabs.</title>
    </Head>
    <div className={styles.container}>
    <div className={styles.main}>
    <div className={styles.superlabsLogo}>
      <img src="logo.png"></img>
    </div>

    <div className={styles.projectsContainer}>
    <div className={styles.projectsArticles}>
    <div className={styles.projectsArticle}>

    
      <Link href="/projects/bluegame"><img src="bluegame.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/eters"><img src="eters.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/darkland"><img src="darkland.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/newmoon"><img src="newmoon.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/freakminds"><img src="freakminds.png"></img></Link>
    </div>
    <div className={styles.projectsArticle}>
      <Link href="/projects/jaxi"><img src="jaxi.png"></img></Link>
    </div>


    </div>
    </div>
    </div>
    </div>
    </>
  )
} 
