import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Afnan | Contact</title>
      <meta name="description" content="My Portfolio yoohoo!!" />
      </Head>
      <div className={styles.topnav}>
      <code>
            <strong>
  <a href="/contact">Contact</a>
  <a href="/projects">Projects</a>
  <a href="/about">About me</a> 
  <a href="/">Home</a>
  </strong>
          </code>

          <div className={styles.homebar}>
          <code>
            <strong>
              <a href="/">Afnan</a>
              </strong>
          </code>
  </div>
</div> 
      <main className={styles.main}>
      <div className={styles.grid}>
          <a className={styles.card} href="https://cadbim.in/">
            <code>
              <strong>
                <h3>Contact me</h3>
                <p>
                Shoot me a mail at me@afnanksalal.xyz or just message me in discord, my discord id is Afnan#2316
                </p>
              </strong>
            </code>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <code>
          <strong>
            <h2>
              <a>Afnan © 2022</a>
            </h2>
          </strong>
        </code>
      </footer>
    </div>
  );
}