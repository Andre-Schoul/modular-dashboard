import styles from './TableBody.module.scss';
import TableRow from '../TableRow/TableRow';

const TableBody = (props: { columns: Object[], editable: Boolean }) => {

  const getData = () => {
    const columns = props.columns.map((column: object, index: number) => {
      return <TableRow 
        key={index}
        column={column}
        editable={props.editable} />
    });
    return columns;
  }  

  return (
    <div className={styles.TableBody}>
      {getData()}
    </div>
  )
}

export default TableBody;