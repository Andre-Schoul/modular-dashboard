import Head from 'next/head';

import Sidebar from '../components/UI/Sidebar/Sidebar';
import { AppProps } from 'next/app';

import TestChart from '../components/Chart/Bar/Test';

const Components = () => {
  return (
    <>
      <Head>
        <title>Components</title>
      </Head>
      <TestChart 
        width={1105}
        height={400} 
        color={'rgb(9, 28, 70)'}
        data={[2, 3, 4, 5, 6]}/>
    </>
  )
}

Components.getLayout = (page: AppProps) => (<Sidebar>{page}</Sidebar>);

export default Components;