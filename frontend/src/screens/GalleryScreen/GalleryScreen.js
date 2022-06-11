import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Loader from "../../components/Loader"
import Message from "../../components/Message"
import "./GalleryScreen.css"
import { useDispatch, useSelector } from "react-redux"
import { listArtsDetails } from "../../actions/artActions"

const GalleryScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const artDetails = useSelector((state) => state.artDetails)
  const { loading, error, art } = artDetails

  useEffect(() => {
    dispatch(listArtsDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id} ? qty=${qty}`)
  }

  return (
    <div>
      <>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            <Col md={6}>
              <Image src={art.image} alt={art.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{art.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${art.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {art.description}
                </ListGroup.Item>
                <ListGroup.Item>Category: {art.category}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${art.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {art.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    {art.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(art.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className='btn-block'
                        type='button'
                        disabled={art.countInStock === 0}
                      >
                        Add to Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </>
    </div>
  )
}

export default GalleryScreen
