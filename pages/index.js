import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ㅤ</title>
      </Head>

      <main className={styles.main}>
        <h1>
          <code>
            <strong>Welcome to my Portfolio!</strong>
          </code>
        </h1>
        <br /> <br />
        <h1 className={styles.title}>
          <code>
            <strong>
              Hey! I'm <a href="https://github.com/afnan007a">Afnan</a>
            </strong>
          </code>
        </h1>
        <h1>
          <code>
            <strong>I'm a Fullstack Developer!</strong>
          </code>
        </h1>
        <div className={styles.grid}>
          <a href="https://github.com/afnan007a" className={styles.card}>
            <code>
              <strong>
                <h3>My Works</h3>
                <p>
                  so basically you can see my latest and all time works here. i
                  hope you liked it ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
                </p>
              </strong>
            </code>
          </a>

          <a href="" className={styles.card}>
            <code>
              <strong>
                <h3>Contact me</h3>
                <p>
                  If you want to hire me or just want to be friends with me just
                  message me in discord. my id: Afnan#2316
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
              Want to know more? just click
              <a href="https://www.youtube.com/watch?v=QtBDL8EiNZo&t=1s">
                here!
              </a>
            </h2>
          </strong>
        </code>
      </footer>
    </div>
  );
}
