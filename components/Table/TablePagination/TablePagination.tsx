import styles from './TablePagination.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const TablePagination = (/*props: any*/) => {
  return (
    <div className={styles.TablePagination}>
      <div>
        <label htmlFor="entries">Entries per page: </label>
        <select name="entries" id="entries">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div>1 - 10 of 16</div>
      <div className={styles.PageTurn}>
        <MdKeyboardArrowLeft />
        <MdKeyboardArrowRight />
      </div>
    </div>
  )
}

export default TablePagination;