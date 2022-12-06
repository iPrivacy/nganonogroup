import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import styles from "./Pages.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Who we are?</h1>
      <p>
        Nganono Group is a wholly black owned, innovative, dynamic and
        customer focused corporation in the supply and sourcing of diversified
        range of services and offerings. The company was founded in 2015 by an
        individual with high entrepreneurial qualities with their focus on
        identifying niche markets and to serve those markets better than the
        competition.
      </p>
      <p>
        Nganono Group has specialist teams for every service the company
        offers. The teams are highly motivated, experienced and qualified. It is
        the melting pot of a diverse yet complimentary talent, blending both
        functional expertise and creative problem-solving skills.
      </p>
      <p>
        The company has a solely ICT focused division, providing several
        services and headed by specialist divisional managers. We have strategic
        partnerships with reputable organisations to enable our company to
        participate in larger markets segments.
      </p>
      <p>
        Our corporate social responsibility initiatives are conducted through
        the Nganono Group. The Group is a vehicle for economic empowerment
        dedicated to the improvement of previously disadvantage communities
        through education and development of business skills.
      </p>
    </div>
  );
}
