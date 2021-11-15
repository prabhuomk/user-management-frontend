import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <nav className={isScrolled ? "scrolled" : "navbar"}>
        <img
          className="headpic"
          src="https://ibooking.co.uk/blog/wp-content/uploads/2020/09/ibooking-logo-black.png "
          alt=""
        />

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            style={
              isScrolled === false ? { color: "white" } : { color: "black" }
            }
            className="btn btn-black me-md-2"
            onClick={() => history.push("/home")}
          >
            Home
          </button>
          <button
            style={
              isScrolled === false ? { color: "white" } : { color: "black" }
            }
            className="btn btn-black"
            onClick={() => history.push("/users")}
          >
            User
          </button>
        </div>
      </nav>
    </div>
  );
}
