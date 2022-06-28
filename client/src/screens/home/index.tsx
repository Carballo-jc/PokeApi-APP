import { Home } from "../../pages/Home";
import RouteItem from "../../routers/components/RouteItem";
import { paths } from "../../routers/paths";


function ViewHome() {
  return (
      <RouteItem  path={paths.home} component={Home} />
  );
}

export default ViewHome;
