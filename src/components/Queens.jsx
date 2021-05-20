import React from "react";
import "../App.css";

const Queens = ({ queens }) => {
  console.log(queens.queens);

  if (queens.length > 0) {
    return (
      <div>
        {queens.map((queen) => {
          return (
            <div class="flip-card" key={queen.id}>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={queen.image_url}
                    alt="Avatar"
                    width="300px"
                    height="300px"
                  ></img>
                </div>
                <div class="flip-card-back">
                  <h1>{queen.name}</h1>
                  <p>Queen!</p>
                  <p>We love that guy</p>
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
