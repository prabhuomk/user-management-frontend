import { useState } from "react";
import { useHistory } from "react-router-dom";
export function AddUser() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [disable, setDisable] = useState(false);

  function Add(e) {
    e.preventDefault();
    setDisable(true);
    if (mobile.length < 10) {
      alert("mobile number should have 10 digits");
      setName("");
      setMobile("");
      setEmail("");
      setDisable(false);
    } else if (name.length < 3) {
      alert("name should be minimum 3 char");
      setName("");
      setMobile("");
      setEmail("");
      setDisable(false);
    } else if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 8
    ) {
      alert("email_id is not valid");
      setName("");
      setMobile("");
      setEmail("");
      setDisable(false);
    } else if (name && mobile && email) {
      fetch("https://user-pk.herokuapp.com/user", {
        method: "POST",
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
      alert("fill all fields");
      setDisable(false);
    }
  }

  return (
    <div className="form">
      <form className="Myform">
        <div className="form-group">
          <label for="exampleInputName">
            <b>User Name</b>
          </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            className="form-control"
            id="exampleInputName"
            placeholder="enter the user name"
            value={name}
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
            value={email}
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
            value={mobile}
            aria-describedby="emailHelp"
          />
        </div>
        <br />

        {disable === false ? (
          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => Add(e)}
          >
            ADD USER
          </button>
        ) : (
          <div className="spinner-border text-danger" role="status"></div>
        )}
      </form>
    </div>
  );
}
