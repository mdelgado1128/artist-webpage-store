import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap";
import { listArtsDetails} from "../../actions/artActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";


const ArtScreen = ({history, match }) => {
    const dispatch = useDispatch()

    const artDetails = useSelector((state) => state.artDetails)
    const { loading, error, art } = artDetails

    useEffect(() => {
        dispatch(listArtsDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ): error ? (
                <Message variant='danger'>{error}</Message>
            ): (
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
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant ='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${art.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button
                                    onClick={addToCartHandler}
                                    className='btn-block'
                                    type='button'
                                    >
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )

}

export default ArtScreen