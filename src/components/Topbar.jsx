import React from 'react'
import './Topbar.scss'
import {MailFilled, PhoneFilled,Html5Outlined} from '@ant-design/icons'
import {Menu} from 'antd'
function Topbar({setMenuOpen,menuOpen}) {
  const items = [
    { label: 'Menu' },
    {
      label: 'SubMenu',
      children: [{ label: 'SubMenuItem' }],
    },
  ];


  
  return (
    <div className={'topbar' + (menuOpen ? ' active':'')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' style={{'fontWeight':200}}>Walczak  </a>
          <div className="item-container">
          <MailFilled style={{'fontSize':20}} />
          <span>szymon.walczak.official@gmail.com</span>
          </div>
          <div className="item-container">
          
          <PhoneFilled style={{'fontSize':20}}/>
          <span>+48 665086051</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Topbar