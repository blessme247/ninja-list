import { Inter } from '@next/font/google'
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>     
    {/* <Head> 
      <title>Ninja List | Home</title>
    </Head> */}
    <main className={styles.main}>
     <h1 className={styles.title}>
      Hello, NextJS Ninja
     </h1>
     <p className={styles.text}>Read the Documentation for smooth sailing in Next JS <img src="../../next.svg"/></p>
     <p className={styles.text}>Read the Documentation for smooth sailing in Next JS</p>
     <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    </main>
    </>

  )
}
