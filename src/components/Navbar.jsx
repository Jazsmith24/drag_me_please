import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const navbar = () => {
  return (
    <Navbar class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div class="container-fluid" href="#home">
        <div>
          <img
            className="brand"
            width="250"
            height="40"
            src="/DragMePlease_logo.png"
            alt="centered"
            class="center-block"
          />
        </div>
      </div>
    </Navbar>
  );
};

export default navbar;

