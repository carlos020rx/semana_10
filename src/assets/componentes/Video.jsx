import React from 'react'
import "./video"

const Video = () => {
  return (
    <div className='container'>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/e8xK1OEy-F8?si=aj64Y7CwACLeyIlM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
    </div>
  )
}

export default Video