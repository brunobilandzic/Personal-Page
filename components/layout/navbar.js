import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import profile from "../../public/images/profile.JPG";
import styles from "./navbar.module.css";
import { navbar } from "../../constants/navbar";

export default function NavbarComponent() {
  const router = useRouter();
  const currentPage = router.pathname;

  const getNavLinks = () =>
    navbar.map((item, i) => {
      return (
        <div
          className={`${styles.navbarLink} ${
            currentPage.includes(item.name.toLowerCase()) ? styles.active : null
          }`}
          key={i}
        >
          <Link href={item.href}>{item.name}</Link>
        </div>
      );
    });

  return (
    <>
      <Navbar className={styles.navbar} expand="lg">
        <Container>
          <Link className={styles.brand} href="/">
            <Image src={profile} className={styles.navbarImage} alt="BB" />
            Bruno
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.nav}`}>{getNavLinks()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
