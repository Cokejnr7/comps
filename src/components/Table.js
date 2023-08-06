const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((rowData) => {
    const renderedRow = config.map((row) => {
      return (
        <td className="p-3" key={row.label}>
          {row.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedRow}
      </tr>
    );
  });

  const renderedColumns = config.map((col) => {
    return <th key={col.label}>{col.label}</th>;
  });

  return (
    <table className="border-seperate border-spacing-2 table-auto">
      <thead>
        <tr className="border-b-2">{renderedColumns}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
