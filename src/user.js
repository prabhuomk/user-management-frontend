import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export function User() {
  const history = useHistory();
  const [user, setUser] = useState([]);

  const [verify, setVerify] = useState(false);

  function DeleteUser(_id) {
    fetch(`https://user-pk.herokuapp.com/user/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          setVerify(!verify);
        }
      });
  }
  function LoadUser() {
    fetch("https://user-pk.herokuapp.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((data) => setUser(data));
  }

  useEffect(() => {
    LoadUser();
  }, [verify]);

  return (
    <div className="userpage">
      <button
        type="button"
        className="btn btn-info"
        style={{ float: "right" }}
        onClick={() => history.push("/user/add")}
      >
        Add new user
      </button>
      <div className="table-responsive">
        <h4>USER LIST</h4>
        <table className="table table-striped">
          {user.length ? (
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email_id</th>
                <th scope="col">Mobile_No</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
          ) : (
            ""
          )}
          <tbody>
            {user.length ? (
              user.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>

                  <td>
                    <i
                      className="fa fa-pencil"
                      aria-hidden="true"
                      style={{ color: "green" }}
                      onClick={() => history.push(`./user/${user._id}`)}
                    ></i>
                    <i
                      className="fa fa-trash"
                      onClick={() =>
                        confirmAlert({
                          message: "Are you sure to do Delete.",
                          buttons: [
                            {
                              label: "Yes",
                              onClick: () => DeleteUser(user._id)
                            },
                            {
                              label: "No",
                              onClick: () => history.push("/users")
                            }
                          ]
                        })
                      }
                      style={{ color: "red" }}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h3 className="text-center">No user</h3>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
