import React from "react";
import style from "../Components/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageWrapper}>
        <Image src={props.cardImage} layout="fill" />
      </div>
      <div className={style.textContainer}>
        <h1>{props.title}</h1>
        <p>{props.cardText}</p>
      </div>
      <Link href="/investments"><button className={style.button}>Read More</button></Link>
    </div>
  );
}
