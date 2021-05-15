import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from "react-bootstrap/DropdownButton";
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
        <div>
          <DropdownButton id="dropdown-item-button" title="Choose Season">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Navbar>
  );
};

export default navbar;
