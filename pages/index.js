import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "glider-js/glider.min.css";
import Glider from "react-glider";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Glider (built using Next 13)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Glider draggable hasDots slidesToShow={1} className={styles.glider}>
          <div className={styles.slide}>
            <Image
              src="https://source.unsplash.com/random/800x800?a"
              alt=""
              width={800}
              height={800}
              className={styles.image}
              priority
            />
            <h3>Item 1</h3>
          </div>
          <div className={styles.slide}>
            <Image
              src="https://source.unsplash.com/random/800x800?b"
              alt=""
              width={800}
              height={800}
              className={styles.image}
            />
            <h3>Item 2</h3>
          </div>
          <div className={styles.slide}>
            <Image
              src="https://source.unsplash.com/random/800x800?c"
              alt=""
              width={800}
              height={800}
              className={styles.image}
            />
            <h3>Item 3</h3>
          </div>
        </Glider>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://www.npmjs.com/package/react-glider">React Glider</a>
        </h1>
        <p className={styles.description}>v4.0.2</p>
        <div className={styles.grid}>
          <a href="https://react-glider.vercel.app/" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about react-glider features and API.
            </p>
          </a>

          <a
            href="https://github.com/kevinfarrugia/react-glider"
            className={styles.card}
          >
            <h2>Contribute</h2>
            <p>Contribute to react-glider on GitHub</p>
          </a>

          <a
            href="https://codesandbox.io/examples/package/react-glider"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover examples on Code Sandbox</p>
          </a>

          <a
            href="https://www.npmjs.com/package/react-glider"
            className={styles.card}
          >
            <h2>Install &rarr;</h2>
            <p>Install using npm or yarn.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
