import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Link from 'next/link';
import GitHub from '../components/GitHub';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aidan Pendergast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Welcome to Aidan's <a href="https://nextjs.org">Next.js!</a>
        </h1>


        <Counter name={"Goliath"} mult={1} size={2}/>
        <Counter name={"David"} mult={2} size={0.5}/>


      <hr
        style={{
            width: "80%",
            marginTop: "lem",

        }}
      />

          <GitHub/>

    <hr
        style={{
            width: "80%",
            marginTop: "lem",

        }}
      />
    <p> 
    Check out my <Link href="/store">Fake Store</Link>.
    </p>  
      
    </div>
  );
}
