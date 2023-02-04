import React from 'react'
import loadingImage from '../img/loading.png'
function LoadingComponent() {
  return (
    <div className='loading-container'>
       <img src={loadingImage} alt='loading-animation' className='loading-animation' />
    </div>
  )
}

export default LoadingComponent