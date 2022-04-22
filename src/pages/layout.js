import { Outlet } from "react-router-dom";
import { PrimaryMenu, SecondaryMenu } from "../components";
import data from "../data";

const Layout = () => {
  return(
    <>
      <header className="App-header">
        <SecondaryMenu menu={data.menu.secondary} />
        <PrimaryMenu menu={data.menu.primary} />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;