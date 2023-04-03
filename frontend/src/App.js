import React from "react";
import "./index.css";
import $ from "jquery";

function App() {
  const rm = (event) => {
    $(event.target)
      .closest("tr")
      .remove();
    // event.preventDefault();
  };

  const add = (event) => {
    event.preventDefault();
    $("table").append(
      '<tr><td scope="row"><input class="form-control" type="text" placeholder="Device Name"/></td><td scope="row"><input class="form-control" type="text" placeholder="Device Type"/></td><td scope="row"><input class="form-control" type="text" placeholder="Status"/></td><td><button onClick="rm()" class="btn btn-danger">remove</button></td></tr>'
    );
  };

  return (
    <div className="container py-5">
      <h3>Add Location Details</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Location Name
          </label>
          <input type="text" className="form-control" id="locationID" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="locationID" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="locationID" />
        </div>
        <hr className="mt-5" />
        <div>
          <div className="d-flex justify-content-between">
            <h3>Add Device Details</h3>
            <button onClick={add} className="btn btn-primary">
              Add{" "}
            </button>
          </div>
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col "></th>
                <th scope="col "></th>
                <th scope="col "></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    class="form-select"
                    aria-label="Device Type"
                  >
                    <option selected>Select Device Type</option>
                    <option value="pos">POS</option>
                    <option value="kisok">KISOK</option>
                    <option value="signage">SIGNAGE</option>
                  </select>
                </td>
                <td>
                  <input
                    className="form-control"
                    type="file"
                    placeholder="Status"
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Device Name"
                  />
                </td>

                <td>
                  <button onClick={rm} className="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
