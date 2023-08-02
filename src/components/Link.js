const Link = ({ children, to }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
