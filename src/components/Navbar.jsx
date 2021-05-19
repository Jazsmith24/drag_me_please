import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import React, { Component } from 'react';
// import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
// import seasons from "../fake-data.js";

const Nav = () => {
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
            <Dropdown.Item as="button">Season 1</Dropdown.Item>
            <Dropdown.Item as="button">Season 2</Dropdown.Item>
            <Dropdown.Item as="button">Season 3</Dropdown.Item>
            <Dropdown.Item as="button">Season 4</Dropdown.Item>
            <Dropdown.Item as="button">Season 5</Dropdown.Item>
            <Dropdown.Item as="button">Season 6</Dropdown.Item>
            <Dropdown.Item as="button">Season 7</Dropdown.Item>
            <Dropdown.Item as="button">Season 8</Dropdown.Item>
            <Dropdown.Item as="button">Season 9</Dropdown.Item>
            <Dropdown.Item as="button">Season 10</Dropdown.Item>
            <Dropdown.Item as="button">Season 11</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Navbar>
  );
};

// const Nav = (seasons) => {
//   console.log(seasons);
//   return (
//     <Navbar class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
//       <div class="container-fluid" href="#home">
//         <div>
//           <img
//             className="brand"
//             width="250"
//             height="40"
//             src="/DragMePlease_logo.png"
//             alt="centered"
//             class="center-block"
//           />
//         </div>
//         <If condition={seasons}>
//           <div>
//             {seasons.map((season) => {
//               <div className="season-data">
//                 <DropdownButton id="dropdown-item-button" title="Choose Season">
//                   {/* <Dropdown.ItemText></Dropdown.ItemText> */}
//                   <Dropdown.Item as="button">
//                     Season {season.seasonNumber}
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </div>;
//             })}
//           </div>
//         </If>
//       </div>
//     </Navbar>
//   );
// };

export default Nav;
