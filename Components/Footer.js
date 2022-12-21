import Link from "next/link";
import React from "react";
import styles from "../Components/Footer.module.css";
import PartnerIconCard from "./PartnerIconCard";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.iconGrid}>
        <PartnerIconCard partnerImage="/Alcatel.png" />
        <PartnerIconCard partnerImage="/Lenovo.png" />
        <PartnerIconCard partnerImage="/DellEmc.png" />
        <PartnerIconCard partnerImage="/IBM.png" />
        <PartnerIconCard partnerImage="/DLink.png" />
        <PartnerIconCard partnerImage="/HPLOGO.png" />
      </div>
      <address>1476 Kamagugu, Nelspruit 1200</address>
      <span>Tel: +27 69 238 0983 Cell: +27 71 404 2684 </span>
      <div className={styles.copyline}>created by <Link href="https://midvisions.co.za"><a>MID Visions</a></Link></div>
    </div>
  );
}
