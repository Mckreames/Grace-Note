// import React, { useEffect } from "react";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";
// import request from "request";

// export default function SpotifySearch() {
//   const client_id = "5c426cd3d3dc45539e52e61a00623a6e";
//   const client_secret = "085f50add69947d4b9e5da2011683e41";

//   useEffect(() => {
//     const authOptions = {
//       url: "https://accounts.spotify.com/api/token",
//       headers: {
//         Authorization:
//           "Basic " +
//           Buffer.from(client_id + ":" + client_secret).toString("base64"),
//       },
//       form: {
//         grant_type: "client_credentials",
//       },
//       json: true,
//     };

//     request.post(authOptions, function (error, response, body) {
//       if (!error && response.statusCode === 200) {
//         const token = body.access_token;
//       }
//     });
//   }, [client_id, client_secret]);

//   return (
//     <div>
//       <Container>
//         <InputGroup className="mb-3" size="lg">
//           <FormControl
//             placeholder="Search For Artist"
//             type="input"
//             onChange={(event) => {
//               if (event.key === "Enter") {
//                 console.log("Pressed Enter");
//               }
//             }}
//           />
//         </InputGroup>
//       </Container>
//     </div>
//   );
// }
