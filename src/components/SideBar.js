import Link from "./Link";

const SideBar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName={"font-bold border-l-4 pl-2 border-blue-500"}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0  no-scrollbar overflow-y-scroll flex flex-col gap-4 items-center">
      {renderedLinks}
    </div>
  );
};

export default SideBar;
