import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await res.json();
      setData(slip);
    } catch (error) {
      console.log("error", error);
      const errorMessage = [
        {
          id: 404,
          advice: "Something went wrong, try again later",
        },
      ];
      setData(errorMessage[0]);
    }
  };
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Advice generator app</title>
        <meta
          name="description"
          content="Advice application which is using Advice Slip API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapper}>
        {data && <Card data={data} action={getData} />}
      </main>
    </>
  );
}
