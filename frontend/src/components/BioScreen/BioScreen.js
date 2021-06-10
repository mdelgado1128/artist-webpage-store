import React from "react"
import { Image } from "react-bootstrap"
import mainI from "../../images/me1.png"

const BioScreen = () => {
  return (
    <div>
      <div className='sideNav'>
        <h1>Bio</h1>
        <div className='imgDiv'>
          <Image
            className='imageSize'
            src={mainI}
            alt='mark'
            fluid
            roundedCircle
          ></Image>
        </div>

        <div className='bioText'>
          Ea nostrud in commodo quis exercitation irure et. Id amet velit irure
          elit mollit eiusmod tempor nulla sit exercitation minim. In incididunt
          ex magna ea occaecat do consectetur esse ut. Nisi elit qui est non
          nisi duis dolore. Et excepteur et ad amet eiusmod pariatur. Aliquip
          tempor sit incididunt eiusmod tempor irure ea commodo incididunt
          tempor enim sit. Aliqua eu reprehenderit dolor proident qui culpa
          excepteur reprehenderit cillum exercitation anim qui veniam amet.
        </div>
      </div>
    </div>
  )
}

export default BioScreen
