import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Afnan | About</title>
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
                 <h1 className={styles.title}>
          <code>
            <strong>
               <a>About me</a>
            </strong>
          </code>
        </h1>
        <h1>
          <code>
         <center><strong>My name is Afnan K Salal. <br /><br /> I'm 16 years old and I'm from India. <br /><br /> I'm a Fullstack Developer and a System Administrator. <br /><br /> I mostly use JavaScript, TypeScript, PHP and Python. 
</strong></center>
          </code>
        </h1>
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
