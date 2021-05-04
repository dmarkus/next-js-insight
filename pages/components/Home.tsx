import styles from "./Home.module.css";
import Head from "next/head";
import Image from "next/image";
import * as React from 'react';

export const Home =  () =>   <div className={styles.container}>
    <Head>
        <title>Conference Online Registration</title>
        <meta name="description" content="Insight look to next.js library" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
        <h1 className={styles.title}>
            Conference Online Registration
        </h1>

        <p className={styles.description}>
            Join us on amazing journey about next.js
        </p>

        <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>About us &rarr;</h2>
                <p>Find more information about who we are</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Register</h2>
                <p>Fill in registration form</p>
            </a>
        </div>
    </main>

    <footer className={styles.footer}>
        <a
            href="https://example.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by next.js fan group
        </a>
    </footer>
</div>