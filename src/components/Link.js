import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

const Link = ({ children, to, className, ...rest }) => {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames(className, "text-blue-500");

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();

    navigate(to);
  };
  return (
    <a onClick={handleClick} href={to} {...rest} className={classes}>
      {children}
    </a>
  );
};

export default Link;
