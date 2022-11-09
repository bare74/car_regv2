// import React from "react";

// export const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item active">
//               <a class="nav-link" href="#">
//                 Home <span class="sr-only">(current)</span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" href="#">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="red">
        <Container>
          <Navbar.Brand href="./.">CAR REG </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./.">Home</Nav.Link>
            <Nav.Link href="./read">Person</Nav.Link>
            <Nav.Link href="./car">Car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
