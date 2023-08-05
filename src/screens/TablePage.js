import Table from "../components/Table";

const TablePage = () => {
  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 2,
    },
    {
      name: "Lemon",
      color: "bg-green-500",
      score: 8,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 5,
    },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
