import Head from 'next/head';

import Sidebar from '../components/UI/Sidebar/Sidebar';
import BarChart from '../components/Chart/Bar';
//import PieChart from '../components/Chart/Pie';
import LineChart from '../components/Chart/Line';
import { AppProps } from 'next/app';

import styles from '../styles/Home.module.scss';

const Statistics = () => {
  return (
    <>
      <Head>
        <title>Statistics</title>
      </Head>
      <div className={styles.Grid}>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <LineChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
        <BarChart 
          width={1105}
          height={400} 
          color={'rgb(9, 28, 70)'}
          data={[2, 3, 4, 5, 6]}/>
      </div>
    </>
  )
}

Statistics.getLayout = (page: AppProps) => (<Sidebar>{page}</Sidebar>);

export default Statistics;