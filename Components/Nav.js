import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../Components/Nav.module.css";
import Image from "next/image";
const links = [
  { name: "Home", linkTo: "/" },
  { name: "About us", linkTo: "/about" },
  { name: "Divisions", linkTo: "/divisions" },
  { name: "Investments", linkTo: "/investments" },
  { name: "Contact us", linkTo: "/contact" },
];

const socialLinks = [
  { name: "/facebook.svg", linkTo: "/" },
  { name: "/twitter.svg", linkTo: "/" },
  { name: "/linkedin.svg", linkTo: "/" },
];

function Nav() {
  const navLinks = links.map((linkItem) => {
    return (
      <Link href={linkItem.linkTo} style="text-transform:capitalize">
        <a className={styles.link}>{linkItem.name}</a>
      </Link>
    );
  });

  const socialNavLinks = socialLinks.map((linkItem) => {
    return (
      <Link href={linkItem.linkTo}>
        <a className={styles.sociallink}>
          <Image src={linkItem.name} width={25} height={25} />
        </a>
      </Link>
    );
  });

  const [menuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div className={menuOpen ? styles.logo : styles.logoHide}>
        <Link href="/">
          <a>
            <Image src="/nganonoGroupLogo.png" width={150} height={125} />
          </a>
        </Link>
      </div>
      <div className={menuOpen ? styles.linkwrapper : styles.linkwrapperMenu}>
        {navLinks}
      </div>
      <div className={styles.hamburger} onClick={handleToggle}>
        {menuOpen ? (
          <Image src="/hamburgerIcon.png" layout="fill" />
        ) : (
          <Image src="/closeIcon.png" layout="fill" />
        )}
      </div>
      <div className={styles.socialIconsWrapper}>{socialNavLinks}</div>
    </nav>
  );
}

export default Nav;
