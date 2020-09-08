import Head from 'next/head';
import { AppProps } from 'next/app';

import Sidebar from '../components/UI/Sidebar/Sidebar';
import Table from '../components/Table/Table';

const Database = () => {
  return (
    <>
      <Head>
        <title>Database</title>
      </Head>
      <Table />
    </>
  )
}

Database.getLayout = (page: AppProps) => (<Sidebar>{page}</Sidebar>);

export default Database;