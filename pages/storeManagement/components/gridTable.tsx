import Table from 'react-bootstrap/Table';
import styles from '../storeManager.module.css';

interface TableProps {
  head: { id: string[] }[];
  body: { content: string[] }[];}

export function TableCustom(props: TableProps): JSX.Element {
  if (!props.head || !props.body) {
    return <div>Tabela vazia</div>;
  }

  return (
    <Table striped bordered hover border={1} color='white' className={styles.table}>
      <thead>
          {props.head.map((rowdata, index) => (
            <tr key={index}>
              {rowdata.id.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
            </tr>
          ))}
      </thead>
      <tbody>
        {props.body.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.content.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
