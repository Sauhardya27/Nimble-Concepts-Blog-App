"use client";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const Home = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const refresh = searchParams.get('refresh');
    if (refresh === 'true') {
      // Remove the refresh parameter from the URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      
      // Reload the page
      window.location.reload();
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Empowering Creativity with Thoughtful Solutions</h1>
        <p className={styles.desc}>
          Unleash your creativity with Nimble Concepts, where fresh ideas spark transformation. Experience the power of innovation and watch your vision come to life.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={`${styles.button} ${styles.learnMoreButton}`}>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className={`${styles.button} ${styles.contactButton}`}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} unoptimized />
      </div>
    </div>
  );
};

export default Home;