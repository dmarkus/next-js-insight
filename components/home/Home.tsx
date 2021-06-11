import Head from "next/head";
import * as React from "react";
import styles from "./Home.module.css";
import Link from "next/link";

export const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Conference Online Registration</title>
      <meta name="description" content="Insight look to next.js library" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Conference Online Registration</h1>

      <p className={styles.description}>
        Join us on amazing journey about next.js
      </p>

      <div className={styles.grid}>
        <Link href="/about-us">
          <a className={styles.card}>
            <h2>About us &rarr;</h2>
            <p>Find more information about who we are</p>
          </a>
        </Link>
        <Link href="/program">
          <a className={styles.card}>
            <h2>Program</h2>
            <p>Get information about upcoming events</p>
          </a>
        </Link>
      </div>
    </main>

    <footer className={styles.footer}>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
        Powered by next.js fan group
      </a>
    </footer>
  </div>
);
