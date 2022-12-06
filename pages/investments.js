import React from "react";
import styles from "./Pages.module.css";

export default function Investments() {
  return (
    <div className={styles.container}>
      <p>
        Our corporate social responsibility initiatives are conducted through
        the Nganono Group. The Group is a vehicle for economic empowerment
        dedicated to the improvement of previously disadvantage communities
        through education and development of business skills.
      </p>
      <h1>Our Strategy</h1>
      <h3>Five Distinct phases</h3>
      <ol className={styles.list}>
        <li>
          Identify business opportunity where Nganono Sercurity has significant
          value adding capacity through our offerings.
        </li>
        <li>
          Keep abreast of current trends and innovations to sustain our
          usefulness to our clients’ operations
        </li>
        <li>
          Through our service excellence, build lasting professional
          relationships with our clients, such that we become their service
          provider of choice.
        </li>
        <li>
          We employ project and quality management principles to ensure
          effective and successful conclusion of client tasks.
        </li>
        <li>
          Form alliances with entities with complimentary offerings in order to
          improve our knowledge and also impart our industry skills (each one
          teach one)
        </li>
      </ol>
      <br/>
      <h3>Our Valued-Add Proposition</h3>
      <p>A critical component of our investment philosophy is to partner with companies in which we play a meaningful role in maximising growth and profitably through which we can influence the implementation of broad-based black economic empowerment programmes.</p>
      <ol>
        <li>We partner with clients to ensure organisational success</li>
        <li>We import knowledge and skills to minimise client dependence on us, and guaranteed operational continuity </li>
        <li>We avail ourselves for future support when needed</li>
        <li>We do not conclude an event, rather we build a relationship</li>
      </ol>
      <br/>
      <h3>Our approach focuses on:</h3>
      <ol>
        <li>Enhancing the growth and profitability of the client</li>
        <li>Development of progressive business solutions</li>
      </ol>
    </div>
  );
}
