import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import { isLoggedIn } from '../utils/auth'

export default function Header() {
  return (
    <Container fluid >
      <Row className='p-3'>
        <Col md={4}>
          <Nav className="me-auto anchor-color-none">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Flights">Flights</Nav.Link>
            <Nav.Link href="/Booking">Booking</Nav.Link>
          </Nav>
        </Col>
        <Col md={4}>
          <h2 className='fw-bold text-center' > Air
            <span className='color-red'>B</span>
            <span className='color-orange'>O</span>
            <span className='color-blue'>O</span>
            <span className='color-red'>K</span>
          </h2>
        </Col>
        <Col md={4} className='me-auto'>
          <Nav className="me-auto anchor-color-none">
            <Nav.Link href="/aboutUs">Contact US </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link href="/myprofile">My Profile </Nav.Link>
            ) : (
              <Button variant='primary'>
                Login | Signup
              </Button>
            )}
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
