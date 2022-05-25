import React from 'react'
import './Menu.scss'
function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen ? ' active': '')}>
        <ul onClick={()=>setMenuOpen(!menuOpen)}>
            <li>
                <a href='#intro'>home</a>
            </li>
            <li>
                <a href='#portfolio'>portfolio</a>
            </li>
         
            <li>
                <a href='#contact'>contact</a>
            </li>


        </ul>


    </div>
  )
}

export default Menu