import { useNavigate } from "react-router-dom";

import "./Users.css";
export default function Users(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container user-container">
        <br />
        <div className="search-box">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
        </div>
        <br />
        <div className="add-button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("./add-user", { replace: true })}
          >
            Ajouter un decideur
          </button>
        </div>

        <br />

        <table className="table table-striped table-light user-table">
          <thead>
            <tr>
              <th className="table-title" colspan="5">
                <h3>Les Decideurs</h3>
              </th>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">nom d'utilisateur</th>
              <th scope="col">Status</th>
              <th scope="col">Privileges</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>active</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-warning">Modifier</button>
                <button className="btn btn-danger">Desactiver</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>active</td>
              <td>@fat</td>
              <td>
                <button className="btn btn-warning">Modifier</button>
                <button className="btn btn-danger">Desactiver</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>non active</td>
              <td>@twitter</td>
              <td>
                <button className="btn btn-warning">Modifier</button>
                <button className="btn btn-danger">Desactiver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
