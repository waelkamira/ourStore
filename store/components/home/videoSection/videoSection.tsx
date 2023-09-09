import React from 'react'

export default function videoSection () {
  return (
        <video controls autoPlay loop muted width="100%" height="auto">
            <source src={require("./Assets/videoPreview.mp4")}  type='video/mp4'/>
        </video>
  )
}
