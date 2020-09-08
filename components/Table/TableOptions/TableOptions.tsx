import { ReactNode } from 'react';

import styles from './TableOptions.module.scss';
import { BiSearch } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs'; 

const TableOptions = (props: { name: ReactNode }) => {
  return (
    <div className={styles.TableOptions}>
      <div>{props.name}</div>
      <div className={styles.Search}>
        <input type='text' placeholder='Search...' />
        <BiSearch />
      </div>
      <div className={styles.Options}><BsThreeDotsVertical /></div>
    </div>
  )
}

export default TableOptions;