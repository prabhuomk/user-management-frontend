import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
export function EditUser() {
  let { _id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);

  function Edit(e) {
    e.preventDefault();
    setDisable(true);
    if (mobile.length < 10) {
      alert("mobile number should have 10 digits");

      setDisable(false);
    } else if (name.length < 3) {
      alert("name should be minimum 3 char");

      setDisable(false);
    } else if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 8
    ) {
      alert("email_id is not valid");

      setDisable(false);
    } else if (name && mobile && email) {
      fetch(`https://user-pk.herokuapp.com/user/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          mobile
        })
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.name) {
            alert(data.message);
            setName("");
            setMobile("");
            setEmail("");
            setDisable(false);
            history.push("/users");
          } else {
            alert(data.message);
            setName("");
            setMobile("");
            setEmail("");
            setDisable(false);
          }
        });
    } else {
      alert(
        "clear the default value and write again(default value helps you to know what written earlier) "
      );
      setDisable(false);
    }
  }

  function LoadOneUser() {
    fetch(`https://user-pk.herokuapp.com/user/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      });
  }

  useEffect(() => {
    LoadOneUser();
  }, []);

  return (
    <div className="form">
      {user._id ? (
        <form className="Myform">
          <div className="form-group">
            <label for="exampleInputName">
              <b>Client Name</b>
            </label>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="enter the user name"
              defaultValue={user.name}
              aria-describedby="emailHelp"
            />
          </div>
          <br />

          <div className="form-group">
            <label for="exampleInputEmail">
              <b>Email_id</b>
            </label>
            <input
              type="url"
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="enter the email_id"
              defaultValue={user.email}
              aria-describedby="emailHelp"
            />
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputNumber">
              <b>Mobile_No</b>
            </label>
            <input
              type="number"
              onChange={(event) => setMobile(event.target.value)}
              className="form-control"
              id="exampleInputNumber"
              placeholder="enter the Mobile Number"
              defaultValue={user.mobile}
              aria-describedby="emailHelp"
            />
          </div>
          <br />

          {disable === false ? (
            <button
              type="submit"
              className="btn btn-success"
              onClick={(e) => Edit(e)}
            >
              EDIT USER
            </button>
          ) : (
            <div className="spinner-border text-danger" role="status"></div>
          )}
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
