import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import React from 'react';
// import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
// import seasons from "../fake-data.js";

const Nav = ({ handleThemClicks }) => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container-fluid" href="#home">
        <div>
          <img
            className="brand"
            width="250"
            height="40"
            src="/DragMePlease_logo.png"
            alt="centered"
          />
        </div>
        <div>
          <DropdownButton id="dropdown-item-button" title="Choose Season">
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(1)}}>Season 1</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(2)}}>Season 2</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(3)}}>Season 3</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(4)}}>Season 4</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(5)}}>Season 5</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(6)}}>Season 6</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(7)}}>Season 7</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(8)}}>Season 8</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(9)}}>Season 9</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(10)}}>Season 10</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {handleThemClicks(11)}}>Season 11</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
