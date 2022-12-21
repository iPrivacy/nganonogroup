import Image from "next/image";
import React from "react";
import style from "./Pages.module.css";

export default function Divisions() {
  return (
    <section className={style.divContainer}>
      <div className={style.imageWrapper}>
        <Image src="/CEO.jpg" layout="fill" />
      </div>
      <div className={style.textContainer}>
        <p>
          Anim exercitation ad sunt nisi sit enim. Excepteur laboris
          exercitation elit qui adipisicing et ullamco tempor. Labore ut dolor
          ad ut exercitation mollit. Do aliquip pariatur tempor eu voluptate id
          in aliqua elit laborum excepteur et tempor.
        </p>
        <p>
          Anim exercitation ad sunt nisi sit enim. Excepteur laboris
          exercitation elit qui adipisicing et ullamco tempor. Labore ut dolor
          ad ut exercitation mollit. Do aliquip pariatur tempor eu voluptate id
          in aliqua elit laborum excepteur et tempor.
        </p>
        <p>
          Anim exercitation ad sunt nisi sit enim. Excepteur laboris
          exercitation elit qui adipisicing et ullamco tempor. Labore ut dolor
          ad ut exercitation mollit. Do aliquip pariatur tempor eu voluptate id
          in aliqua elit laborum excepteur et tempor.
        </p>
      </div>
    </section>
  );
}
