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
                <h3>Cad Center BIM Academy</h3>
                <p>
                Cad Center BIM Academy is a new generation training center with a focus on the BIM, Interior & Exterior Design, MEP, etc... software Application training and services promotions. 
                </p>
              </strong>
            </code>
          </a>

          <a className={styles.card} href="https://zanime.wtf/">
            <code>
              <strong>
                <h3>Zanime</h3>
                <p>
                Zanime is a free Anime and Manga watching website that gives online anime/manga content at no cost. You get numerous anime , manga suggestions to keep you stuck to this site.
                </p>
              </strong>
            </code>
          </a>
        </div>
        <h1>
        <br/><br/>
          <code>
            <strong>Check out my github</strong>
          </code>
        </h1>
        <div className={styles.button}>
        <a href="https://github.com/afnan007as"><button ><code>
              <strong>Github</strong>
            </code></button></a>
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
