import './navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const MenuContent = () => {
  <>

  </>
}

export function Navbar() {
  const [menu, setMenu] = useState(false)

  return(
    <div className="wf__navbar">
      <div className="wf__navbar-links">
        <div className="wf__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="wf__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About WF</a></p>
          <p><a href="#outlook">Outlook</a></p>
          <p><a href="#projects">WF Projects</a></p>
        </div>
          <div className="wf__navbar-sign">
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
          </div>
        <div className="wf__navbar-menu">
          {menu
          ? <AiOutlineClose color="#fff" size={27} onClick={()=> setMenu(false) }/>
          : <AiOutlineMenu color="#fff" size={27} onClick={()=> setMenu(true) }/> }
          {menu && (
            <div className="wf__navbar-menu_container scale-up-center">
              <div className="wf__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About WF</a></p>
                <p><a href="#outlook">Outlook</a></p>
                <p><a href="#projects">WF Projects</a></p>
                <div className="wf__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
