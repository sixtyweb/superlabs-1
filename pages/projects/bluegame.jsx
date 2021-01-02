import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

export default function Bluegame(){
    return(
        <>
        <Head>
            <title>bluegame.</title>
        </Head>

        <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.sharoLogo}>
                <h1>bluegame.</h1>
            </div>
            <div data-project="bluegame" className={styles.projectColors}>
                <a><div className={styles.firstcolor}></div></a>
                <a><div className={styles.secondarycolor}></div></a>
                <a><div className={styles.accentcolor}></div></a>
                
            </div>
            <div className={styles.showcaseProject}>
                <a>aici pui o poza cv</a>
            </div>
        </div>
        </div>
        </>
    )
}