import "./App.css";
import Nav from "./components/Navbar";
import Queens from "./components/Queens";
import Season from "./components/Episodes";
import seasonQueens from "./fake-data";
import ReactDOM from "react-dom";
import axios from "axios";
import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // season: season,
      currentSeason: 0,
      queens: seasonQueens,
    };

    // this.chooseSeason = this.chooseSeason.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  //clickhandler function here
  // handleThemClicks(selected) {
  //   this.setState({

  //   });
  // }

  // componentDidMount() {
  //       return this.setState({ season: season });
  // }

  
  async componentDidMount() {
    // this.chooseSeason(1);
    await axios.get(`http://www1.nokeynoshade.party/api/seasons/1/queens`)
      .then((queens) => {
        // debugger;
        console.log(queens.data);
        this.setState({ queens: queens.data });
      })
      .catch(err => console.error(err));
  }

  // async chooseSeason(seasonNum) {
  //   let queens = `http://www.nokeynoshade.party/api/seasons/${seasonNum}/queens`;

  //   await axios
  //     .get(queens)
  //     .then((queenData) => {
  //       // debugger;
  //       console.log(queenData.data);
  //       return this.setState({ queens: queenData.data });
  //     })
  //     .catch((err) => console.error(err));
  // }

  render() {
    const { season, queens } = this.state;

    return (
      <div className="App">
        <header>
          <Nav season={season} />
        </header>
        <div>
          <Queens queens={queens} />
        </div>
      </div>
    );
  }
}

export default App;
