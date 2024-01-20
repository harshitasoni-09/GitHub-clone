import React from 'react';
import img2 from "../img/img2.webp";
import { MdInsertEmoticon } from "react-icons/md"

function Left() {
  return (
    <div className="left">
    <div className='image'>
        <img
        src={img2} 
        alt=''/>
        <div className="emotionBox">
          <MdInsertEmoticon className="emoticon"/>
        </div>
        </div>

        <div className="leftDetails">
          <h2>Harshita</h2>
          <button>Edit profile</button>
        </div>
      </div>
  )
}

export default Left
