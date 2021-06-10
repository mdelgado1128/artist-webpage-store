import React from "react"
import { Image } from "react-bootstrap"
import mainI from "../../images/me1.png"
// import "./MainScreen.css"
import GalleryScreen from "../GalleryScreen/GalleryScreen"

const MainScreen = () => {
  return (
    <div>
      <div class='main'>
        <h1>Gallery</h1>

        <GalleryScreen />
      </div>
    </div>
  )
}

export default MainScreen
