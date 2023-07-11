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
              src="https://source.unsplash.com/random/600x300?a"
              alt=""
              width={600}
              height={300}
              priority
            />
            <h3>Item 1</h3>
          </div>
          <div className={styles.slide}>
            <Image
              src="https://source.unsplash.com/random/600x300?b"
              alt=""
              width={600}
              height={300}
            />
            <h3>Item 2</h3>
          </div>
          <div className={styles.slide}>
            <Image
              src="https://source.unsplash.com/random/600x300?c"
              alt=""
              width={600}
              height={300}
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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
