// import React,{Component} from "react";
// import { NavLink } from "react-router-dom";
// import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap';


// export default class Menubar extends Component {
//     render(){
//         return (
//             <Navbar className='bg-dark shadow-sm mb-3' variant="dark" sticky="top" expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href='/'>
//                         <img alt="" src="./u.gif" className="App-logo img-fluid"/>{' '}My Portfolio
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item">
//                             <NavLink to="/" className="nav-link">Home</NavLink>
//                             </li>

//                             <li className="nav-item">
//                             <NavLink to="/about" className="nav-link">About</NavLink>
//                             </li>

//                         </ul>

//                         <NavDropdown title="Manage Students" id="basic-nav-dropdoown">

//                             <NavDropdown.Item><NavLink to="/create-student" className="nav-link text-dark">Create New Student</NavLink></NavDropdown.Item>
                            
//                             <NavDropdown.Item><NavLink to="/student-list" className="nav-link text-dark">Student list</NavLink></NavDropdown.Item>

//                         </NavDropdown>
//                         </Nav>

//                         <Nav>

//                             <Navbar.Text>Signed in as : Atiwan</Navbar.Text>

//                         </Nav>

//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         )
//     }
// }