import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import React from "react";

// const Queens = (queens) => {

//   return (

//   <div className="queens">
//     <CardGroup>
//         <Card>
//           <Card.Img variant="top" src="http://www.nokeynoshade.party/images/rebecca-glasscock.jpg" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to
//               additional content.{" "}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This card has even longer content
//               than the first to show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>
//   </div>
//   )
// };

const Queens = ({ queens }) => {
  console.log(queens.queens);

  if (queens.length > 0) {
    return (
      <div>
        {queens.map((queen) => {
          return (
            <div className="queens" key={queen.id}>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={queen.image_url} />
                  <Card.Body>
                    <Card.Title>{queen.name}</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default Queens;
