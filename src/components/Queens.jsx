import React from "react";
import "../App.css";

const Queens = ({ queens }) => {

  if (queens.length > 0) {
    return (
      <div>
        {queens.sort((a,b) => { // sorted the queens in order by finishing place
          let queen1;
          let queen2;
          for (let i=0; i<a.seasons.length;i++){
            queen1 = a.seasons[i].place;
            for (let j=0; j<b.seasons.length;j++){
              queen2 = b.seasons[j].place
            }
          }
          return queen1 - queen2;
         }).map((queen) => {
          return (
            <div className="flip-card" key={queen.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={queen.image_url}
                    alt="Avatar"
                    width="300px"
                    height="300px"
                  ></img>
                </div>
                <div className="flip-card-back" key={queen.id}>
                  <h1>{queen.name}</h1>
                  <p if={queen.quote}>{queen.quote}</p>
                  {queen.seasons.map(season => {return <p key={queen.id}>Place: {season.place}</p>})}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default Queens;
