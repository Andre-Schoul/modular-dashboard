import TableOptions from './TableOptions/TableOptions';
import styles from './Table.module.scss';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import TablePagination from './TablePagination/TablePagination';

const data = {
  name: 'Test',
  editable: true,
  columns: ['Id', 'Bla', 'Blubber'],
  columnData: [
    {id:'1', bla: 'Blib', blubber: 'wurst'},
    {id:'2', bla: 'Blib', blubber: 'wurst'},
    {id:'3', bla: 'Blib', blubber: 'wurst'},
    {id:'4', bla: 'Blib', blubber: 'wurst'},
    {id:'5', bla: 'Blib', blubber: 'wurst'},
    {id:'6', bla: 'Blib', blubber: 'wurst'},
    {id:'7', bla: 'Blib', blubber: 'wurst'},
    {id:'8', bla: 'Blib', blubber: 'wurst'},
    {id:'9', bla: 'Blib', blubber: 'wurst'},
    {id:'10', bla: 'Blib', blubber: 'wurst'},
    {id:'11', bla: 'Blib', blubber: 'wurst'},
    {id:'12', bla: 'Blib', blubber: 'wurst'},
    {id:'13', bla: 'Blib', blubber: 'wurst'},
    {id:'14', bla: 'Blib', blubber: 'wurst'},
    {id:'15', bla: 'Blib', blubber: 'wurst'},
    {id:'16', bla: 'Blib', blubber: 'wurst'},
    {id:'17', bla: 'Blib', blubber: 'wurst'}
  ]
};

const Table = () => {
  return (
    <>
      <div className={styles.TopPadding}></div>
      <TableOptions name={data.name} />
      <TableHeader 
        columns={data.columns}
        editable={data.editable}/>
      <TableBody 
        columns={data.columnData}
        editable={data.editable} />
      <TablePagination />
      <div className={styles.BottomPadding}></div>
    </>
  )
}

export default Table;