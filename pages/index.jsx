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
      <Link href="/projects/ecila"><img src="ecila.png"></img></Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
} 
