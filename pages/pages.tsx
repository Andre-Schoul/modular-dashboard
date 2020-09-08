import Head from 'next/head';

import Sidebar from '../components/UI/Sidebar/Sidebar';
import styles from '../styles/Home.module.scss';
import { AppProps } from 'next/app';

const Pages = () => {
  return (
    <>
      <Head>
        <title>Pages</title>
      </Head>
      <h1 className={styles.Bla}>Pages</h1>
    </>
  )
}

Pages.getLayout = (page: AppProps) => (<Sidebar>{page}</Sidebar>);

export default Pages;