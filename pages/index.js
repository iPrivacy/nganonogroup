import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        <meta
          name="google-site-verification"
          content="HAasFiIWy0fp4SVR4TPs4STaRunXX6eCa2EjiKUvArw"
        />
      </Head>
      <Carousal />
      <div className={styles.cardContainer}>
        <Card
          cardImage="/image3.jpg"
          cardText={
            <>
            <h3>ICT Services</h3>
            <ul className={styles.servicesList}>
              <li>Networking(LAN and WAN)</li>
              <li>ICT Helpdesk</li>
              <li>Hardware peripheral suppliers</li>
              <li>Maintenance of hardware and software</li>
              <li>Desktop support</li>
            </ul>
            </>
          }
        />
        <Card
          cardImage="/image2.jpg"
          cardText={
            <>
            <h3>ICT Services</h3>
            <ul className={styles.servicesList}>
              <li>System backup</li>
              <li>Remote assistance</li>
              <li>Web hosting</li>
              <li>Content Management</li>
              <li>Network cabling and telecoms</li>
            </ul>
            </>
          }
        />
        <Card
          cardImage="/image5.jpg"
          cardText={
            <>
            <h3>ICT Services</h3>
            <ul className={styles.servicesList}>
              <li>Managed IT Services</li>
              <li>CCTV Installations</li>
              <li>access Control installations</li>
              <li>Point of sale systems and software</li>
            </ul>
            </>
          }
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
            <Link href="/divisions"><button className={styles.sectionButton}>more</button></Link>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "8rem" }}>
        <div className={styles.cardContainer}>
          <CardTwo
            cardImage="/image3.jpg"
            cardText={<>
              <h3>ICT Systems</h3>
              <ul className={styles.servicesList}>
                <li>Document Management System</li>
                <li>Imaging, archiving and retrieval</li>
                <li>Asset Management</li>
                <li>Inventory management</li>
                <li>Knowledge management</li>
              </ul>
              </>
            }/>
          <CardTwo
            cardImage="/image2.jpg"
            cardText={<>
            <h3>IT Consulting</h3>
            <ul className={styles.servicesList}>
              <li>Business Consulting</li>
              <li>Business Engineering</li>
              <li>Business Process management</li>
              <li>Change management</li>
            </ul>
            </>}/>
          <CardTwo
            cardImage="/image4.jpg"
            cardText={<>
              <h3>Asset Management</h3>
              <ul className={styles.servicesList}>
                <li>Physical Asset management</li>
                <li>Depreciation calculations</li>
                <li>Asset management software</li>
                <li>GAAP, MFMA, PFMA, GRAP Compliance</li>
                <li>Knowledge management</li>
              </ul>
              </>}/>
        </div>
      </section>
    </>
  );
}
