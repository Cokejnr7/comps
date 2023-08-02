import useNavigation from "../hook/use-navigation-hook";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (currentPath === path) return children;

  return null;
};

export default Route;
