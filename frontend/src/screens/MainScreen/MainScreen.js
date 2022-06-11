import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import Art from "../../components/Art"
import { Row, Col } from "react-bootstrap"
import { listArts } from "../../actions/artActions"

const MainScreen = () => {
  const dispatch = useDispatch()

  const artList = useSelector((state) => state.artList)
  const { loading, error, arts } = artList

  useEffect(() => {
    dispatch(listArts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Art</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {arts.map((art) => (
            <Col key={art._id} sm={12} md={6} lg={4} xl={3}>
              <Art art={art} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default MainScreen
