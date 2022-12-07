import Head from "next/head";
import Image from "next/image";
import Card from "../Components/Card";
import CardTwo from "../Components/CardTwo";
import Carousal from "../Components/Carousal";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="HAasFiIWy0fp4SVR4TPs4STaRunXX6eCa2EjiKUvArw" />
    </Head>
      <Carousal />
      <div className={styles.cardContainer}>
        <Card
          cardImage="/image3.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
        <Card
          cardImage="/image2.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
        <Card
          cardImage="/image5.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
        Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
      </div>
      <section className={styles.sectionContainer}>
        <div className={styles.backgroud}></div>
        <div className={styles.imageWrapper}>
        <Image
          src="/DATA.jpg"
          width={475}
          height={475}
          className={styles.image}
        />
        </div>
        <div className={styles.sectionText}>
          <div className={styles.roundedSection}>
            <span>
              Commodo aliquip do excepteur laborum deserunt consequat tempor
              minim commodo commodo do eu.
            </span>
          </div>
          <div className={styles.mainText}>
            <span>
              "Ex aliquip est cupidatat Lorem officia cillum.Sunt laborum qui
              exercitation id enim voluptate."
            </span>
            <button className={styles.sectionButton}>more</button>
          </div>
        </div>
      </section>

      <section style={{marginTop: "8rem"}}>
        <div className={styles.cardContainer}>
        <CardTwo
          cardImage="/image3.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
        <CardTwo
          cardImage="/image2.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
        <CardTwo
          cardImage="/image4.jpg"
          cardText="Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do.
      Labore irure elit ea Lorem do tempor anim amet nulla sint nisi laboris incididunt do."
        />
        </div>
      </section>
    </>
  );
}
