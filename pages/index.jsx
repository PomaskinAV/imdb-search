import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import Search from '../components/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IMDb Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Search Movies</h1>
      <Search />
    </div>
  );
}