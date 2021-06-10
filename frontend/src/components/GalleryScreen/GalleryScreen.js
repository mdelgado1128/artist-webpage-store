import React from "react"
import { Row, Col, Card, Container } from "react-bootstrap"
import painting1 from "../../images/pic-1.jpg"
import painting2 from "../../images/pic-2.jpg"
import painting3 from "../../images/pic-3.jpg"
import painting4 from "../../images/pic-4.jpg"
import painting5 from "../../images/pic-5.jpg"
import painting7 from "../../images/pic-7.jpg"
import "./GalleryScreen.css"

const GalleryScreen = () => {
  return (
    <div>
      <Container className='mainBlock'>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize'
                variant='top'
                src={painting1}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize img-fluid'
                src={painting2}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize img-fluid'
                src={painting3}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='mainBlock'>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize'
                variant='top'
                src={painting4}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize img-fluid'
                src={painting5}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className='imageSize img-fluid'
                src={painting7}
                alt='mark'
                fluid
              ></Card.Img>
              <Card.Body>
                <div> Name</div>
                <div>Price</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GalleryScreen
