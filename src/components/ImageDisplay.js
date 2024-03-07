import React from 'react'

const ImageDisplay = ({display}) => {
  return (
    <div>
        {display.map(item => 
            <img src={item.urls.small} alt={item.alt_description}/> )}
    </div>
  )
}
export default ImageDisplay;