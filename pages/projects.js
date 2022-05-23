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
          <a className={styles.card}>
            <code>
              <strong>
                <h3>Globally Available</h3>
                <p>
                Our API is geo-routed to ensure high speeds and low latency. Wherever you are in the world, you'll still get low latency while using our API.
                </p>
              </strong>
            </code>
          </a>

          <a className={styles.card}>
            <code>
              <strong>
                <h3>99.9% Availability</h3>
                <p>
                We guarantee 99.9% availability. With our systems, we can recommend that we won't be going down without a valid reason.
                </p>
              </strong>
            </code>
          </a>

          <a className={styles.card}>
            <code>
              <strong>
                <h3>Secure</h3>
                <p>
                We're always taking steps to review and improve security as we know how important your data is. Apart from that, we have all your data encrypted.
                </p>
              </strong>
            </code>
          </a>
        </div>
        <h1>
        <br/><br/>
          <code>
            <strong>Want to know more? Read our documentation!</strong>
          </code>
        </h1>
        <div className={styles.button}>
        <a href="/r/docs"><button ><code>
              <strong>Documentation</strong>
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
