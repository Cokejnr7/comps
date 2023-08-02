import NavigationContext from "../context/navigation";
import classNames from "classnames";
import useNavigation from "../hook/use-navigation-hook";

const Link = ({ children, to, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    className,
    "text-blue-500",
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();

    navigate(to);
  };
  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
};

export default Link;
