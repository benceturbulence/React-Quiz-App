import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
            <h2 className='container'><Link to='/'>Quizzical</Link></h2>
    </header>
  )
}

export default Header