import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/bai1">Bai1</Link>
          </li>
          <li>
            <Link to="/bai4">Bai4</Link>
          </li>
          <li>
            <Link to="/bai5">Bai5</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;