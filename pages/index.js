import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ㅤ</title>
      </Head>
      <div className={styles.topnav}>
      <code>
            <strong>
  <a href="/">Contact</a>
  <a href="/">Projects</a>
  <a href="/">About me</a> 
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
        <h1 className={styles.title}>
          <code>
            <strong>
              Hey! I'm <a>Afnan</a>
            </strong>
          </code>
        </h1>
        <h1>
          <code>
            <strong>Welcome to my portfolio ❤️ <br/> I'm a Fullstack Developer and a System Administrator</strong>
          </code>
        </h1>
      </main>
      <footer className={styles.footer}>
        <code>
          <strong>
            <h2>
              Copyright © 2022 <a>Afnan</a>. All rights reserved
            </h2>
          </strong>
        </code>
      </footer>
    </div>
  );
}
