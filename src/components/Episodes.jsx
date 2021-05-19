import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import React from "react";


const Season = (season) => {
console.log(season)
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={`${season.img_url}`} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

// const Season = (season) => {
//   console.log(season);

//   if (season.length > 0) {
//     return (
//       <div>
//         {season.map((episode) => {
//           return (
//             <CardGroup>
//               <Card>
//                 <Card.Img variant="top" src={episode.image_url} />
//                 <Card.Body>
//                   <Card.Title>{episode.title}</Card.Title>
//                   <Card.Text>
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                   <small className="text-muted">Last updated 3 mins ago</small>
//                 </Card.Footer>
//               </Card>
//             </CardGroup>
//           );
//         })}
//       </div>
//     );
//   }
//   return null;
// };

export default Season;
