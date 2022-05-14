export default function Privileges(props) {
  return (
    <>
      <div className="container">
        <div className="add-button">
          <button type="button" className="btn btn-primary">
            Ajouter un privilege
          </button>
        </div>

        <br />
        <table className="table table-striped table-light user-table">
          <thead>
            <tr>
              <th className="table-title" colspan="5">
                <h3>Les Privileges</h3>
              </th>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">nom de Privilege</th>
              <th scope="col">Description</th>
              <th scope="col">Nombre des decideurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>active</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>active</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>non active</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
