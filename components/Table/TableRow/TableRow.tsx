import { useState } from 'react';

import styles from './TableRow.module.scss';
import { MdModeEdit } from 'react-icons/md';
import { GoPlus, GoCheck, GoTrashcan } from 'react-icons/go';

const TableRow = (props: { column: Object, editable: Boolean }) => {
  
  const [readOnly, setReadOnly] = useState(true);
  const [editable, setEditability] = useState(false);

  const editRow = () => {
    setReadOnly(!readOnly);
    setEditability(!editable);
  }

  const initial = <MdModeEdit onClick={editRow}/>;
  //const initial = <div className={styles.IconWrapper} onClick={editRow}><MdModeEdit /></div>;
  const edit = (
    <>
      <GoCheck />
      <GoPlus className={styles.Cancel} onClick={editRow}/>
      <GoTrashcan />
    </>
  );

  return (
    <div className={styles.TableRow}>
      {Object.entries(props.column).map(([rowKey, rowValue]) => {
          return <div key={rowKey} className={rowKey === 'id' ? styles.Id : null}>{rowKey === 'id' ? rowValue : <input value={rowValue} disabled={!editable} />}</div>;
        })}{props.editable ? <div className={styles.Editable}>{editable ? edit : initial}</div> : <></>}
    </div>
  )
}

export default TableRow;