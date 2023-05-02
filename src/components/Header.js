import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <header>
      <h4 className="headerText">Physics {title}</h4>
      <div className="links">
        {/* { title == "Constants" ? (
          <Link className='navLink' to="/">Converter</Link>
        ) : (
          <Link className='navLink' to="/constants">Constants</Link>
        )} */}
      </div>
      <div className="userDetails">
        <div className="userName">Aaradhya Sharma</div>
        <img src="https://lh3.googleusercontent.com/a/AGNmyxac34tRXwRf1tqD3UGehGhCsw9TFKf-XHpPfjuD9w=s288" alt="User Image" className="userImage" />
      </div>
    </header>
  )
}

export default Header