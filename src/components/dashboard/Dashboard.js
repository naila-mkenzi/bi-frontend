import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddUser from "./AddUser/AddUser";
import "./Dashboard.css";
import Privileges from "./Privileges/Privileges";
import Users from "./Users/Users";

export default function Dashboard(props) {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar --> */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>bienvenue administrateur</h3>
          </div>

          <ul className="list-unstyled components">
            {/* <p>Dummy Heading</p> */}

            <li className="active">
              <Link to="">Les Dicideurs</Link>
            </li>
            <li>
              <Link to="./privileges">Les Previlages</Link>
            </li>
          </ul>
          <div className="logout">
            <button className="btn btn-warning" onClick={logout}>
              Deconecté
            </button>
          </div>
        </nav>

        {/* <!-- Page Content --> */}
        <div className="content">
          {/* <!-- We'll fill this with dummy content --> */}
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/add-user" element={<AddUser />}></Route>
            <Route path="/privileges" element={<Privileges />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
