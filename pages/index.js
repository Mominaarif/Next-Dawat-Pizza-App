import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PIZZA HOUSE</title>
        <meta name="description" content="Best pizza in lahore" />
        <link rel="icon" href="p3.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
