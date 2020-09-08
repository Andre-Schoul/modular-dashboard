import styles from './TableHeader.module.scss';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineArrowDown } from 'react-icons/ai';

const TableHeader = (props: { columns: String[], editable: Boolean }) => {

  const getData = () => {
    let editableColumn;
    if (props.editable) {
      editableColumn = <div className={styles.Editable}><FiPlus /></div>;
    }
    const columns = props.columns.map((column: String, index: number) => {
      return <div key={index} className={column === 'Id' ? styles.Id : null}>{column}<AiOutlineArrowDown /></div>;
    });
    return <>{columns}{editableColumn}</>;
  }  

  return (
    <div className={styles.TableHeader}>
      {getData()}
    </div>
  )
}

export default TableHeader;