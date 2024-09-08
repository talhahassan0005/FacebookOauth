// src/app/page.js

'use client'; // This line is crucial for Client Component

import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const Home = () => {
  const router = useRouter();

  const responseFacebook = (response) => {
    if (response.accessToken) {
      // Save user info to local storage
      localStorage.setItem('user', JSON.stringify(response));
      router.push('/welcome');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Login with Facebook</h1>
        <FacebookLogin
          appId="496619619768826" // Replace with your Facebook App ID
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </footer>
    </div>
  );
};

export default Home;
